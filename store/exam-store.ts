import { create } from "zustand";
import {
  MockTest,
  SectionKey,
  UserAnswers,
  DifficultyLevel,
} from "@/types/exam";
import { saveInProgressExam, clearInProgressExam } from "@/lib/storage";
import { saveAudioToDB } from "@/lib/audio-db";

export const SECTION_ORDER: SectionKey[] = [
  "grammar",
  "writing",
  "situational",
  "reading",
  "listening",
  "speaking",
];

export const SECTION_LABELS: Record<SectionKey, string> = {
  grammar: "Grammar & Sentence Correction",
  writing: "Business Writing",
  situational: "Situational Awareness",
  reading: "Reading Comprehension",
  listening: "Listening Comprehension",
  speaking: "Spoken Communication",
};

export function getSectionItemCount(mockTest: MockTest | null, section: SectionKey): number {
  if (!mockTest) return 0;
  if (section === "grammar") return mockTest.sections.grammar.length;
  if (section === "writing") return mockTest.sections.writing.length;
  if (section === "situational") return mockTest.sections.situational.length;
  if (section === "reading") return mockTest.sections.reading?.questions?.length || 0;
  if (section === "listening") return mockTest.sections.listening?.questions?.length || 0;
  if (section === "speaking") return mockTest.sections.speaking.length;
  return 0;
}

export function getSafeQuestionIndex(
  mockTest: MockTest | null,
  section: SectionKey,
  requestedIndex: number
): number {
  const count = getSectionItemCount(mockTest, section);
  if (count <= 0) return 0;
  return Math.min(Math.max(0, requestedIndex), count - 1);
}

interface ExamState {
  mockTest: MockTest | null;
  mode: "exam" | "practice";
  currentSection: SectionKey;
  currentQuestionIndex: number;
  sectionTimeRemaining: Record<SectionKey, number>; // in seconds
  sectionTimeSpent: Record<SectionKey, number>; // in seconds
  isTimerRunning: boolean;
  answers: UserAnswers;
  flaggedItems: Record<string, boolean>;
  completedSections: Record<SectionKey, boolean>;
  showSubmitModal: boolean;
  totalTimeSpentSeconds: number;

  // Actions
  initExam: (
    mockTest: MockTest,
    mode: "exam" | "practice",
    restored?: {
      answers?: UserAnswers;
      sectionTimeSpent?: Record<SectionKey, number>;
      sectionTimeRemaining?: Record<SectionKey, number>;
      currentSection?: SectionKey;
      currentQuestionIndex?: number;
      completedSections?: Record<SectionKey, boolean>;
      flaggedItems?: Record<string, boolean>;
      totalTimeSpentSeconds?: number;
    }
  ) => void;
  setCurrentSection: (section: SectionKey) => void;
  setCurrentQuestionIndex: (index: number) => void;
  nextQuestion: () => void;
  prevQuestion: () => void;
  nextSection: () => void;
  prevSection: () => void;

  setGrammarAnswer: (questionId: string, optionIndex: number) => void;
  setWritingAnswer: (taskId: string, text: string) => void;
  setSituationalOption: (scenarioId: string, optionIndex: number) => void;
  setSituationalWritten: (scenarioId: string, text: string) => void;
  setReadingAnswer: (questionId: string, optionIndex: number) => void;
  setListeningAnswer: (questionId: string, optionIndex: number) => void;
  setSpeakingAnswer: (
    taskId: string,
    data: {
      audioBlobUrl?: string;
      audioDataUrl?: string;
      transcript?: string;
      durationSeconds?: number;
    }
  ) => void;

  toggleFlag: (id: string) => void;
  tickTimer: () => void;
  pauseTimer: () => void;
  resumeTimer: () => void;
  setShowSubmitModal: (show: boolean) => void;
  getSectionProgress: (sectionKey: SectionKey) => { answered: number; total: number; isComplete: boolean };
  getTotalAnsweredCount: () => { answered: number; total: number };
  resetExam: () => void;
}

const initialAnswers: UserAnswers = {
  grammar: {},
  writing: {},
  situational: {},
  reading: {},
  listening: {},
  speaking: {},
};

function persistStoreState(state: ExamState) {
  if (!state.mockTest) return;
  saveInProgressExam({
    testId: state.mockTest.id,
    answers: state.answers,
    sectionTimeSpent: state.sectionTimeSpent,
    sectionTimeRemaining: state.sectionTimeRemaining,
    currentSection: state.currentSection,
    currentQuestionIndex: state.currentQuestionIndex,
    mode: state.mode,
    completedSections: state.completedSections,
    flaggedItems: state.flaggedItems,
    totalTimeSpentSeconds: state.totalTimeSpentSeconds,
    lastUpdated: Date.now(),
  });
}

export const useExamStore = create<ExamState>((set, get) => ({
  mockTest: null,
  mode: "exam",
  currentSection: "grammar",
  currentQuestionIndex: 0,
  sectionTimeRemaining: {
    grammar: 12 * 60,
    writing: 10 * 60,
    situational: 10 * 60,
    reading: 10 * 60,
    listening: 8 * 60,
    speaking: 10 * 60,
  },
  sectionTimeSpent: {
    grammar: 0,
    writing: 0,
    situational: 0,
    reading: 0,
    listening: 0,
    speaking: 0,
  },
  isTimerRunning: false,
  answers: initialAnswers,
  flaggedItems: {},
  completedSections: {
    grammar: false,
    writing: false,
    situational: false,
    reading: false,
    listening: false,
    speaking: false,
  },
  showSubmitModal: false,
  totalTimeSpentSeconds: 0,

  initExam: (mockTest, mode, restored) => {
    const defaultTimers: Record<SectionKey, number> = {
      grammar: (mockTest.sectionTimers?.grammar || 12) * 60,
      writing: (mockTest.sectionTimers?.writing || 10) * 60,
      situational: (mockTest.sectionTimers?.situational || 10) * 60,
      reading: (mockTest.sectionTimers?.reading || 10) * 60,
      listening: (mockTest.sectionTimers?.listening || 8) * 60,
      speaking: (mockTest.sectionTimers?.speaking || 10) * 60,
    };

    const targetSection = restored?.currentSection || "grammar";
    const safeQIndex = getSafeQuestionIndex(
      mockTest,
      targetSection,
      restored?.currentQuestionIndex ?? 0
    );

    const newState = {
      mockTest,
      mode,
      currentSection: targetSection,
      currentQuestionIndex: safeQIndex,
      sectionTimeRemaining: restored?.sectionTimeRemaining || defaultTimers,
      sectionTimeSpent: restored?.sectionTimeSpent || {
        grammar: 0,
        writing: 0,
        situational: 0,
        reading: 0,
        listening: 0,
        speaking: 0,
      },
      answers: restored?.answers || initialAnswers,
      isTimerRunning: true,
      flaggedItems: restored?.flaggedItems || {},
      completedSections: restored?.completedSections || {
        grammar: false,
        writing: false,
        situational: false,
        reading: false,
        listening: false,
        speaking: false,
      },
      totalTimeSpentSeconds: restored?.totalTimeSpentSeconds || 0,
      showSubmitModal: false,
    };

    set(newState);
    persistStoreState(get());
  },

  setCurrentSection: (section) => {
    const state = get();
    // In strict exam mode, don't allow returning to an already expired/completed section
    if (state.mode === "exam" && state.completedSections[section]) {
      return;
    }
    set({ currentSection: section, currentQuestionIndex: 0 });
    persistStoreState(get());
  },

  setCurrentQuestionIndex: (index) => {
    const state = get();
    const safeIndex = getSafeQuestionIndex(state.mockTest, state.currentSection, index);
    set({ currentQuestionIndex: safeIndex });
    persistStoreState(get());
  },

  nextQuestion: () => {
    const state = get();
    if (!state.mockTest) return;

    const count = getSectionItemCount(state.mockTest, state.currentSection);
    const maxIndex = Math.max(0, count - 1);

    if (state.currentQuestionIndex < maxIndex) {
      set({ currentQuestionIndex: state.currentQuestionIndex + 1 });
      persistStoreState(get());
    } else {
      // Prompt next section
      state.nextSection();
    }
  },

  prevQuestion: () => {
    const state = get();
    if (state.currentQuestionIndex > 0) {
      set({ currentQuestionIndex: state.currentQuestionIndex - 1 });
      persistStoreState(get());
    }
  },

  nextSection: () => {
    const state = get();
    const currIdx = SECTION_ORDER.indexOf(state.currentSection);
    if (currIdx < SECTION_ORDER.length - 1) {
      const nextSec = SECTION_ORDER[currIdx + 1];
      // Mark current as completed
      set((s) => ({
        completedSections: { ...s.completedSections, [s.currentSection]: true },
        currentSection: nextSec,
        currentQuestionIndex: 0,
      }));
      persistStoreState(get());
    } else {
      // Reached the end of sections -> prompt submission
      set({ showSubmitModal: true });
    }
  },

  prevSection: () => {
    const state = get();
    if (state.mode === "exam") return; // locked in strict exam mode
    const currIdx = SECTION_ORDER.indexOf(state.currentSection);
    if (currIdx > 0) {
      set({
        currentSection: SECTION_ORDER[currIdx - 1],
        currentQuestionIndex: 0,
      });
      persistStoreState(get());
    }
  },

  setGrammarAnswer: (qId, optIdx) => {
    set((state) => {
      const newAnswers = {
        ...state.answers,
        grammar: { ...state.answers.grammar, [qId]: optIdx },
      };
      return { answers: newAnswers };
    });
    persistStoreState(get());
  },

  setWritingAnswer: (taskId, text) => {
    set((state) => {
      const newAnswers = {
        ...state.answers,
        writing: { ...state.answers.writing, [taskId]: text },
      };
      return { answers: newAnswers };
    });
    persistStoreState(get());
  },

  setSituationalOption: (scId, optIdx) => {
    set((state) => {
      const prev = state.answers.situational[scId] || {};
      const newAnswers = {
        ...state.answers,
        situational: {
          ...state.answers.situational,
          [scId]: { ...prev, selectedOption: optIdx },
        },
      };
      return { answers: newAnswers };
    });
    persistStoreState(get());
  },

  setSituationalWritten: (scId, text) => {
    set((state) => {
      const prev = state.answers.situational[scId] || {};
      const newAnswers = {
        ...state.answers,
        situational: {
          ...state.answers.situational,
          [scId]: { ...prev, writtenResponse: text },
        },
      };
      return { answers: newAnswers };
    });
    persistStoreState(get());
  },

  setReadingAnswer: (qId, optIdx) => {
    set((state) => {
      const newAnswers = {
        ...state.answers,
        reading: { ...state.answers.reading, [qId]: optIdx },
      };
      return { answers: newAnswers };
    });
    persistStoreState(get());
  },

  setListeningAnswer: (qId, optIdx) => {
    set((state) => {
      const newAnswers = {
        ...state.answers,
        listening: { ...state.answers.listening, [qId]: optIdx },
      };
      return { answers: newAnswers };
    });
    persistStoreState(get());
  },

  setSpeakingAnswer: (taskId, data) => {
    const state = get();
    // Asynchronously save heavy base64 to IndexedDB if present
    if (state.mockTest && data.audioDataUrl) {
      saveAudioToDB(`${state.mockTest.id}_${taskId}`, data.audioDataUrl, data.durationSeconds);
    }

    set((s) => {
      const prev = s.answers.speaking[taskId] || {};
      const newAnswers = {
        ...s.answers,
        speaking: {
          ...s.answers.speaking,
          [taskId]: { ...prev, ...data },
        },
      };
      return { answers: newAnswers };
    });
    persistStoreState(get());
  },

  toggleFlag: (id) => {
    set((state) => ({
      flaggedItems: {
        ...state.flaggedItems,
        [id]: !state.flaggedItems[id],
      },
    }));
    persistStoreState(get());
  },

  tickTimer: () => {
    const state = get();
    if (!state.isTimerRunning) return;

    const currentSec = state.currentSection;
    const remaining = state.sectionTimeRemaining[currentSec] ?? 600;

    // In practice mode, timer can just run up or be untimed
    if (state.mode === "practice") {
      set((s) => ({
        sectionTimeSpent: {
          ...s.sectionTimeSpent,
          [currentSec]: (s.sectionTimeSpent[currentSec] || 0) + 1,
        },
        totalTimeSpentSeconds: s.totalTimeSpentSeconds + 1,
      }));
      // Persist periodically
      if (state.totalTimeSpentSeconds % 5 === 0) {
        persistStoreState(get());
      }
      return;
    }

    // In exam mode
    if (remaining <= 1) {
      // Time is up for current section! Auto-lock and advance
      const isLastSection = currentSec === "speaking";
      if (isLastSection) {
        set({
          sectionTimeRemaining: { ...state.sectionTimeRemaining, [currentSec]: 0 },
          showSubmitModal: true,
          isTimerRunning: false,
        });
      } else {
        state.nextSection();
      }
      persistStoreState(get());
      return;
    }

    set((s) => ({
      sectionTimeRemaining: {
        ...s.sectionTimeRemaining,
        [currentSec]: remaining - 1,
      },
      sectionTimeSpent: {
        ...s.sectionTimeSpent,
        [currentSec]: (s.sectionTimeSpent[currentSec] || 0) + 1,
      },
      totalTimeSpentSeconds: s.totalTimeSpentSeconds + 1,
    }));

    // Persist every 5 seconds so timer remains accurate on refresh
    if (state.totalTimeSpentSeconds % 5 === 0) {
      persistStoreState(get());
    }
  },

  pauseTimer: () => set({ isTimerRunning: false }),
  resumeTimer: () => set({ isTimerRunning: true }),
  setShowSubmitModal: (show) => set({ showSubmitModal: show }),

  getSectionProgress: (secKey) => {
    const state = get();
    if (!state.mockTest) return { answered: 0, total: 0, isComplete: false };

    let answered = 0;
    let total = 0;

    if (secKey === "grammar") {
      total = state.mockTest.sections.grammar.length;
      answered = Object.keys(state.answers.grammar).length;
    } else if (secKey === "writing") {
      total = state.mockTest.sections.writing.length;
      answered = Object.values(state.answers.writing).filter((t) => t && t.trim().length > 10).length;
    } else if (secKey === "situational") {
      total = state.mockTest.sections.situational.length;
      answered = Object.values(state.answers.situational).filter(
        (ans) => ans && (ans.selectedOption !== undefined || (ans.writtenResponse && ans.writtenResponse.trim().length > 5))
      ).length;
    } else if (secKey === "reading") {
      total = state.mockTest.sections.reading?.questions?.length || 0;
      answered = Object.keys(state.answers.reading).length;
    } else if (secKey === "listening") {
      total = state.mockTest.sections.listening?.questions?.length || 0;
      answered = Object.keys(state.answers.listening).length;
    } else if (secKey === "speaking") {
      total = state.mockTest.sections.speaking.length;
      answered = Object.values(state.answers.speaking).filter(
        (ans) => ans && (ans.audioBlobUrl || ans.audioDataUrl || (ans.transcript && ans.transcript.trim().length > 5))
      ).length;
    }

    return { answered, total, isComplete: answered >= total && total > 0 };
  },

  getTotalAnsweredCount: () => {
    const state = get();
    let totalItems = 28;
    let answeredItems = 0;

    answeredItems += Object.keys(state.answers.grammar).length;
    answeredItems += Object.values(state.answers.writing).filter((t) => t && t.trim().length > 10).length;
    answeredItems += Object.values(state.answers.situational).filter(
      (ans) => ans && (ans.selectedOption !== undefined || (ans.writtenResponse && ans.writtenResponse.trim().length > 5))
    ).length;
    answeredItems += Object.keys(state.answers.reading).length;
    answeredItems += Object.keys(state.answers.listening).length;
    answeredItems += Object.values(state.answers.speaking).filter(
      (ans) => ans && (ans.audioBlobUrl || ans.audioDataUrl || (ans.transcript && ans.transcript.trim().length > 5))
    ).length;

    return { answered: answeredItems, total: totalItems };
  },

  resetExam: () => {
    const testId = get().mockTest?.id;
    if (testId) clearInProgressExam(testId);
    set({
      mockTest: null,
      isTimerRunning: false,
      answers: initialAnswers,
      flaggedItems: {},
      showSubmitModal: false,
    });
  },
}));
