import { TestAttempt, UserAnswers, SectionKey, UserPreferences } from "@/types/exam";
import { saveAttemptToDB, getAttemptFromDB } from "@/lib/audio-db";

const ATTEMPTS_KEY = "commprep_test_attempts_v1";
const IN_PROGRESS_PREFIX = "commprep_in_progress_";
const PREFERENCES_KEY = "commprep_preferences_v1";

// In-memory fallback map for current session
const memoryAttempts = new Map<string, TestAttempt>();

const DEFAULT_PREFERENCES: UserPreferences = {
  defaultMode: "exam",
  speechRate: 1.0,
  soundAlerts: true,
  timerPauseOnBlur: false,
  sectionTimeMultiplier: 1.0,
};

export interface InProgressExamData {
  testId: string;
  answers: UserAnswers;
  sectionTimeSpent: Record<SectionKey, number>;
  sectionTimeRemaining: Record<SectionKey, number>;
  currentSection: SectionKey;
  currentQuestionIndex: number;
  mode: "exam" | "practice";
  completedSections?: Record<SectionKey, boolean>;
  flaggedItems?: Record<string, boolean>;
  totalTimeSpentSeconds?: number;
  lastUpdated: number;
}

export function isBrowser(): boolean {
  return typeof window !== "undefined";
}

// Helper to strip heavy audioDataUrl (base64) so localStorage stays well below the 5MB browser quota limit
export function sanitizeAnswersForStorage(answers: UserAnswers): UserAnswers {
  if (!answers || !answers.speaking) return answers;
  const sanitizedSpeaking: Record<string, any> = {};
  for (const [taskId, data] of Object.entries(answers.speaking)) {
    if (data) {
      sanitizedSpeaking[taskId] = {
        audioBlobUrl: data.audioBlobUrl,
        transcript: data.transcript,
        durationSeconds: data.durationSeconds,
      };
    }
  }
  return {
    ...answers,
    speaking: sanitizedSpeaking,
  };
}

// Helper to reclaim space if old un-sanitized runs ever bloated localStorage
function purgeBloatedStorage(): void {
  try {
    const keysToRemove: string[] = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key && (key.startsWith(IN_PROGRESS_PREFIX) || key === ATTEMPTS_KEY)) {
        const val = localStorage.getItem(key);
        if (val && val.length > 150000) {
          keysToRemove.push(key);
        }
      }
    }
    keysToRemove.forEach((k) => {
      try {
        localStorage.removeItem(k);
      } catch {}
    });
  } catch {}
}

// Get all attempts
export function getStoredAttempts(): TestAttempt[] {
  if (!isBrowser()) return [];
  let attempts: TestAttempt[] = [];

  try {
    const raw = localStorage.getItem(ATTEMPTS_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed)) {
        attempts = parsed;
      }
    }
  } catch (e) {
    console.warn("Failed to read test attempts from localStorage", e);
  }

  // Merge in any attempts stored in memory or sessionStorage that may not have fit into localStorage
  try {
    for (let i = 0; i < sessionStorage.length; i++) {
      const key = sessionStorage.key(i);
      if (key && key.startsWith("commprep_attempt_")) {
        const item = sessionStorage.getItem(key);
        if (item) {
          const parsed = JSON.parse(item);
          if (parsed && parsed.id && !attempts.some((a) => a.id === parsed.id)) {
            attempts.unshift(parsed);
          }
        }
      }
    }
  } catch {}

  memoryAttempts.forEach((memAtt) => {
    if (!attempts.some((a) => a.id === memAtt.id)) {
      attempts.unshift(memAtt);
    }
  });

  return attempts;
}

// Get single attempt by ID
export function getStoredAttemptById(id: string): TestAttempt | null {
  if (!isBrowser() || !id) return null;

  // 1. In-memory check (instant)
  if (memoryAttempts.has(id)) {
    return memoryAttempts.get(id)!;
  }

  // 2. SessionStorage check
  try {
    const sess = sessionStorage.getItem(`commprep_attempt_${id}`);
    if (sess) {
      const parsed = JSON.parse(sess);
      if (parsed && parsed.id === id) {
        memoryAttempts.set(id, parsed);
        return parsed;
      }
    }
  } catch {}

  // 3. LocalStorage check
  const attempts = getStoredAttempts();
  const found = attempts.find((a) => a.id === id);
  if (found) {
    memoryAttempts.set(id, found);
    return found;
  }

  return null;
}

// Save a newly finished attempt
export function saveStoredAttempt(attempt: TestAttempt): void {
  if (!isBrowser() || !attempt) return;

  // 1. Keep full attempt in memory
  memoryAttempts.set(attempt.id, attempt);

  // 2. Prepare fully sanitized attempt (zero base64 audio payload)
  const sanitizedAttempt: TestAttempt = {
    ...attempt,
    answers: sanitizeAnswersForStorage(attempt.answers),
  };

  // 3. Mirror sanitized in sessionStorage
  try {
    sessionStorage.setItem(`commprep_attempt_${attempt.id}`, JSON.stringify(sanitizedAttempt));
  } catch (e) {
    console.warn("SessionStorage attempt save notice", e);
  }

  // 4. Save to IndexedDB (asynchronous high-capacity fallback)
  saveAttemptToDB(sanitizedAttempt).catch((err) => {
    console.warn("IndexedDB attempt save notice", err);
  });

  // 5. Save to localStorage with proactive sanitization & purge fallback
  try {
    const rawAttempts = getStoredAttempts();
    const sanitizedExisting = rawAttempts
      .filter((a) => a.id !== attempt.id)
      .map((a) => ({
        ...a,
        answers: sanitizeAnswersForStorage(a.answers),
      }));

    const trimmed = [sanitizedAttempt, ...sanitizedExisting].slice(0, 20);
    localStorage.setItem(ATTEMPTS_KEY, JSON.stringify(trimmed));
  } catch (err) {
    console.warn("Quota exceeded on full attempt save, purging bloated entries and retrying...", err);
    try {
      purgeBloatedStorage();
      localStorage.setItem(ATTEMPTS_KEY, JSON.stringify([sanitizedAttempt]));
    } catch (finalErr) {
      console.error("Critical: Could not write attempt to localStorage, fallback to IndexedDB & session storage active", finalErr);
    }
  }
}

// Delete attempt
export function deleteStoredAttempt(id: string): void {
  if (!isBrowser()) return;
  memoryAttempts.delete(id);
  try {
    sessionStorage.removeItem(`commprep_attempt_${id}`);
  } catch {}
  try {
    const attempts = getStoredAttempts().filter((a) => a.id !== id);
    localStorage.setItem(ATTEMPTS_KEY, JSON.stringify(attempts));
  } catch (e) {
    console.error("Failed to delete attempt", e);
  }
}

// Clear all attempts
export function clearAllStoredData(): void {
  if (!isBrowser()) return;
  memoryAttempts.clear();
  try {
    localStorage.removeItem(ATTEMPTS_KEY);
    // Clear in-progress keys in localStorage
    Object.keys(localStorage).forEach((key) => {
      if (key.startsWith(IN_PROGRESS_PREFIX)) {
        localStorage.removeItem(key);
      }
    });
    // Clear sessionStorage attempts
    Object.keys(sessionStorage).forEach((key) => {
      if (key.startsWith("commprep_")) {
        sessionStorage.removeItem(key);
      }
    });
  } catch (e) {
    console.error("Failed to clear data", e);
  }
}

// In-progress exam persistence
export function getInProgressExam(testId: string): InProgressExamData | null {
  if (!isBrowser() || !testId) return null;

  // 1. Try localStorage
  try {
    const raw = localStorage.getItem(`${IN_PROGRESS_PREFIX}${testId}`);
    if (raw) {
      return JSON.parse(raw);
    }
  } catch (e) {
    console.warn("Failed to read in-progress exam from localStorage", e);
  }

  // 2. Try sessionStorage fallback
  try {
    const sess = sessionStorage.getItem(`${IN_PROGRESS_PREFIX}${testId}`);
    if (sess) {
      return JSON.parse(sess);
    }
  } catch (e) {
    console.warn("Failed to read in-progress exam from sessionStorage", e);
  }

  return null;
}

export function saveInProgressExam(data: InProgressExamData): void {
  if (!isBrowser() || !data || !data.testId) return;

  const sanitizedData: InProgressExamData = {
    ...data,
    answers: sanitizeAnswersForStorage(data.answers),
    lastUpdated: Date.now(),
  };

  const payload = JSON.stringify(sanitizedData);

  // 1. Save in sessionStorage as immediate fast mirror
  try {
    sessionStorage.setItem(`${IN_PROGRESS_PREFIX}${data.testId}`, payload);
  } catch {}

  // 2. Save in localStorage
  try {
    localStorage.setItem(`${IN_PROGRESS_PREFIX}${data.testId}`, payload);
  } catch (e) {
    console.warn("Failed to write in-progress exam to localStorage", e);
  }
}

export function clearInProgressExam(testId: string): void {
  if (!isBrowser() || !testId) return;
  try {
    localStorage.removeItem(`${IN_PROGRESS_PREFIX}${testId}`);
  } catch {}
  try {
    sessionStorage.removeItem(`${IN_PROGRESS_PREFIX}${testId}`);
  } catch {}
}

// User preferences
export function getStoredPreferences(): UserPreferences {
  if (!isBrowser()) return DEFAULT_PREFERENCES;
  try {
    const raw = localStorage.getItem(PREFERENCES_KEY);
    if (!raw) return DEFAULT_PREFERENCES;
    return { ...DEFAULT_PREFERENCES, ...JSON.parse(raw) };
  } catch {
    return DEFAULT_PREFERENCES;
  }
}

export function saveStoredPreferences(prefs: Partial<UserPreferences>): void {
  if (!isBrowser()) return;
  try {
    const current = getStoredPreferences();
    localStorage.setItem(PREFERENCES_KEY, JSON.stringify({ ...current, ...prefs }));
  } catch (e) {
    console.error("Failed to save preferences", e);
  }
}

// Derived statistics from attempts
export interface DashboardStats {
  totalAttempts: number;
  completedTestsCount: number;
  averageScore: number;
  bestScore: number;
  totalPracticeTimeSeconds: number;
  currentStreakDays: number;
  skillAverages: Record<SectionKey, number>;
}

export function calculateDashboardStats(attempts: TestAttempt[]): DashboardStats {
  if (!attempts || attempts.length === 0) {
    return {
      totalAttempts: 0,
      completedTestsCount: 0,
      averageScore: 0,
      bestScore: 0,
      totalPracticeTimeSeconds: 0,
      currentStreakDays: 0,
      skillAverages: {
        grammar: 0,
        writing: 0,
        situational: 0,
        reading: 0,
        listening: 0,
        speaking: 0,
      },
    };
  }

  const totalAttempts = attempts.length;
  const uniqueCompletedTests = new Set(attempts.map((a) => a.testId)).size;
  const scores = attempts.map((a) => a.overallScore);
  const totalScore = scores.reduce((sum, s) => sum + s, 0);
  const averageScore = Math.round(totalScore / totalAttempts);
  const bestScore = Math.max(...scores);
  const totalPracticeTimeSeconds = attempts.reduce((sum, a) => sum + (a.timeSpentSeconds || 0), 0);

  // Skill averages
  const skillSums: Record<SectionKey, number> = {
    grammar: 0,
    writing: 0,
    situational: 0,
    reading: 0,
    listening: 0,
    speaking: 0,
  };

  attempts.forEach((att) => {
    Object.keys(skillSums).forEach((k) => {
      const key = k as SectionKey;
      if (att.sectionScores && att.sectionScores[key]) {
        skillSums[key] += att.sectionScores[key].percentage;
      }
    });
  });

  const skillAverages: Record<SectionKey, number> = {
    grammar: Math.round(skillSums.grammar / totalAttempts),
    writing: Math.round(skillSums.writing / totalAttempts),
    situational: Math.round(skillSums.situational / totalAttempts),
    reading: Math.round(skillSums.reading / totalAttempts),
    listening: Math.round(skillSums.listening / totalAttempts),
    speaking: Math.round(skillSums.speaking / totalAttempts),
  };

  // Streak calculation (days with activity)
  const daysWithAttempts = new Set(
    attempts.map((a) => {
      const date = new Date(a.completedAt || a.startedAt);
      return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
    })
  );

  let currentStreak = 0;
  const today = new Date();
  for (let i = 0; i < 30; i++) {
    const d = new Date();
    d.setDate(today.getDate() - i);
    const key = `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;
    if (daysWithAttempts.has(key)) {
      currentStreak++;
    } else if (i === 0) {
      continue;
    } else {
      break;
    }
  }

  return {
    totalAttempts,
    completedTestsCount: uniqueCompletedTests,
    averageScore,
    bestScore,
    totalPracticeTimeSeconds,
    currentStreakDays: currentStreak,
    skillAverages,
  };
}
