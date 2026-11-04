import { TestAttempt, UserAnswers, SectionKey, UserPreferences } from "@/types/exam";

const ATTEMPTS_KEY = "commprep_test_attempts_v1";
const IN_PROGRESS_PREFIX = "commprep_in_progress_";
const PREFERENCES_KEY = "commprep_preferences_v1";

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
  lastUpdated: number;
}

export function isBrowser(): boolean {
  return typeof window !== "undefined";
}

// Get all attempts
export function getStoredAttempts(): TestAttempt[] {
  if (!isBrowser()) return [];
  try {
    const raw = localStorage.getItem(ATTEMPTS_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch (e) {
    console.error("Failed to read test attempts from storage", e);
    return [];
  }
}

// Get single attempt by ID
export function getStoredAttemptById(id: string): TestAttempt | null {
  const attempts = getStoredAttempts();
  return attempts.find((a) => a.id === id) || null;
}

// Save a newly finished attempt
export function saveStoredAttempt(attempt: TestAttempt): void {
  if (!isBrowser()) return;
  try {
    const attempts = getStoredAttempts();
    // Prepend so latest is first
    const updated = [attempt, ...attempts.filter((a) => a.id !== attempt.id)];
    localStorage.setItem(ATTEMPTS_KEY, JSON.stringify(updated));
  } catch (e) {
    console.error("Failed to save test attempt", e);
  }
}

// Delete attempt
export function deleteStoredAttempt(id: string): void {
  if (!isBrowser()) return;
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
  try {
    localStorage.removeItem(ATTEMPTS_KEY);
    // Clear in-progress keys
    Object.keys(localStorage).forEach((key) => {
      if (key.startsWith(IN_PROGRESS_PREFIX)) {
        localStorage.removeItem(key);
      }
    });
  } catch (e) {
    console.error("Failed to clear data", e);
  }
}

// In-progress exam persistence
export function getInProgressExam(testId: string): InProgressExamData | null {
  if (!isBrowser()) return null;
  try {
    const raw = localStorage.getItem(`${IN_PROGRESS_PREFIX}${testId}`);
    if (!raw) return null;
    return JSON.parse(raw);
  } catch (e) {
    console.error("Failed to read in-progress exam", e);
    return null;
  }
}

export function saveInProgressExam(data: InProgressExamData): void {
  if (!isBrowser()) return;
  try {
    localStorage.setItem(
      `${IN_PROGRESS_PREFIX}${data.testId}`,
      JSON.stringify({ ...data, lastUpdated: Date.now() })
    );
  } catch (e) {
    console.error("Failed to save in-progress exam", e);
  }
}

export function clearInProgressExam(testId: string): void {
  if (!isBrowser()) return;
  try {
    localStorage.removeItem(`${IN_PROGRESS_PREFIX}${testId}`);
  } catch (e) {
    console.error("Failed to remove in-progress exam", e);
  }
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
      // today hasn't happened yet, check yesterday
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

