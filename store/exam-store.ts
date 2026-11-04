import { create } from "zustand";
import {
  MockTest,
  SectionKey,
  UserAnswers,
  DifficultyLevel,
} from "@/types/exam";
import { saveInProgressExam, clearInProgressExam } from "@/lib/storage";

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
  initExam: (mockTest: MockTest, mode: "exam" | "practice", restored?: Partial<ExamState>) => void;
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

    set({
      mockTest,
      mode,
      currentSection: restored?.currentSection || "grammar",
      currentQuestionIndex: restored?.currentQuestionIndex ?? 0,
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
      showSubmitModal: false,
    });
  },

  setCurrentSection: (section) => {
    const state = get();
    // In strict exam mode, don't allow returning to an already expired/completed section
    if (state.mode === "exam" && state.completedSections[section]) {
      return;
    }
    set({ currentSection: section, currentQuestionIndex: 0 });
  },

  setCurrentQuestionIndex: (index) => set({ currentQuestionIndex: index }),

  nextQuestion: () => {
    const state = get();
    if (!state.mockTest) return;

    let maxIndex = 0;
    const sec = state.currentSection;
    if (sec === "grammar") maxIndex = state.mockTest.sections.grammar.length - 1;
    else if (sec === "writing") maxIndex = state.mockTest.sections.writing.length - 1;
    else if (sec === "situational") maxIndex = state.mockTest.sections.situational.length - 1;
    else if (sec === "reading") maxIndex = state.mockTest.sections.reading.questions.length - 1;
    else if (sec === "listening") maxIndex = state.mockTest.sections.listening.questions.length - 1;
    else if (sec === "speaking") maxIndex = state.mockTest.sections.speaking.length - 1;

    if (state.currentQuestionIndex < maxIndex) {
      set({ currentQuestionIndex: state.currentQuestionIndex + 1 });
    } else {
      // Prompt next section
      state.nextSection();
    }
  },

  prevQuestion: () => {
    const state = get();
    if (state.currentQuestionIndex > 0) {
      set({ currentQuestionIndex: state.currentQuestionIndex - 1 });
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
    }
  },

  setGrammarAnswer: (qId, optIdx) => {
    set((state) => {
      const newAnswers = {
        ...state.answers,
        grammar: { ...state.answers.grammar, [qId]: optIdx },
      };
      if (state.mockTest) {
        saveInProgressExam({
          testId: state.mockTest.id,
          answers: newAnswers,
          sectionTimeSpent: state.sectionTimeSpent,
          sectionTimeRemaining: state.sectionTimeRemaining,
          currentSection: state.currentSection,
          currentQuestionIndex: state.currentQuestionIndex,
          mode: state.mode,
          lastUpdated: Date.now(),
        });
      }
      return { answers: newAnswers };
    });
  },

  setWritingAnswer: (taskId, text) => {
    set((state) => {
      const newAnswers = {
        ...state.answers,
        writing: { ...state.answers.writing, [taskId]: text },
      };
      if (state.mockTest) {
        saveInProgressExam({
          testId: state.mockTest.id,
          answers: newAnswers,
          sectionTimeSpent: state.sectionTimeSpent,
          sectionTimeRemaining: state.sectionTimeRemaining,
          currentSection: state.currentSection,
          currentQuestionIndex: state.currentQuestionIndex,
          mode: state.mode,
          lastUpdated: Date.now(),
        });
      }
      return { answers: newAnswers };
    });
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
      if (state.mockTest) {
        saveInProgressExam({
          testId: state.mockTest.id,
          answers: newAnswers,
          sectionTimeSpent: state.sectionTimeSpent,
          sectionTimeRemaining: state.sectionTimeRemaining,
          currentSection: state.currentSection,
          currentQuestionIndex: state.currentQuestionIndex,
          mode: state.mode,
          lastUpdated: Date.now(),
        });
      }
      return { answers: newAnswers };
    });
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
      if (state.mockTest) {
        saveInProgressExam({
          testId: state.mockTest.id,
          answers: newAnswers,
          sectionTimeSpent: state.sectionTimeSpent,
          sectionTimeRemaining: state.sectionTimeRemaining,
          currentSection: state.currentSection,
          currentQuestionIndex: state.currentQuestionIndex,
          mode: state.mode,
          lastUpdated: Date.now(),
        });
      }
      return { answers: newAnswers };
    });
  },

  setReadingAnswer: (qId, optIdx) => {
    set((state) => {
      const newAnswers = {
        ...state.answers,
        reading: { ...state.answers.reading, [qId]: optIdx },
      };
      if (state.mockTest) {
        saveInProgressExam({
          testId: state.mockTest.id,
          answers: newAnswers,
          sectionTimeSpent: state.sectionTimeSpent,
          sectionTimeRemaining: state.sectionTimeRemaining,
          currentSection: state.currentSection,
          currentQuestionIndex: state.currentQuestionIndex,
          mode: state.mode,
          lastUpdated: Date.now(),
        });
      }
      return { answers: newAnswers };
    });
  },

  setListeningAnswer: (qId, optIdx) => {
    set((state) => {
      const newAnswers = {
        ...state.answers,
        listening: { ...state.answers.listening, [qId]: optIdx },
      };
      if (state.mockTest) {
        saveInProgressExam({
          testId: state.mockTest.id,
          answers: newAnswers,
          sectionTimeSpent: state.sectionTimeSpent,
          sectionTimeRemaining: state.sectionTimeRemaining,
          currentSection: state.currentSection,
          currentQuestionIndex: state.currentQuestionIndex,
          mode: state.mode,
          lastUpdated: Date.now(),
        });
      }
      return { answers: newAnswers };
    });
  },

  setSpeakingAnswer: (taskId, data) => {
    set((state) => {
      const prev = state.answers.speaking[taskId] || {};
      const newAnswers = {
        ...state.answers,
        speaking: {
          ...state.answers.speaking,
          [taskId]: { ...prev, ...data },
        },
      };
      if (state.mockTest) {
        saveInProgressExam({
          testId: state.mockTest.id,
          answers: newAnswers,
          sectionTimeSpent: state.sectionTimeSpent,
          sectionTimeRemaining: state.sectionTimeRemaining,
          currentSection: state.currentSection,
          currentQuestionIndex: state.currentQuestionIndex,
          mode: state.mode,
          lastUpdated: Date.now(),
        });
      }
      return { answers: newAnswers };
    });
  },

  toggleFlag: (id) => {
    set((state) => ({
      flaggedItems: {
        ...state.flaggedItems,
        [id]: !state.flaggedItems[id],
      },
    }));
  },

  tickTimer: () => {
    const state = get();
    if (!state.isTimerRunning) return;

    const currentSec = state.currentSection;
    const remaining = state.sectionTimeRemaining[currentSec];

    // In practice mode, timer can just run up or be untimed
    if (state.mode === "practice") {
      set((s) => ({
        sectionTimeSpent: {
          ...s.sectionTimeSpent,
          [currentSec]: (s.sectionTimeSpent[currentSec] || 0) + 1,
        },
        totalTimeSpentSeconds: s.totalTimeSpentSeconds + 1,
      }));
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
      total = state.mockTest.sections.reading.questions.length;
      answered = Object.keys(state.answers.reading).length;
    } else if (secKey === "listening") {
      total = state.mockTest.sections.listening.questions.length;
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
    let totalItems = 28; // 10 grammar + 2 writing + 6 situational + 4 reading + 4 listening + 2 speaking
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

