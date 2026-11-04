export type SectionKey =
  | "grammar"
  | "writing"
  | "situational"
  | "reading"
  | "listening"
  | "speaking";

export type DifficultyLevel = "Foundation" | "Intermediate" | "Advanced";

export interface GrammarQuestion {
  id: string;
  type: "grammar";
  prompt: string;
  options: [string, string, string, string];
  correctAnswer: number; // 0-3
  explanation: string;
  topic:
    | "Subject-Verb Agreement"
    | "Tenses"
    | "Articles"
    | "Prepositions"
    | "Pronouns"
    | "Conjunctions"
    | "Active and Passive Voice"
    | "Direct and Indirect Speech"
    | "Sentence Correction"
    | "Error Identification"
    | "Fill in the Blanks"
    | "Vocabulary in Context";
  difficulty: "easy" | "medium" | "hard";
}

export interface WritingTask {
  id: string;
  type: "writing";
  prompt: string;
  scenario: string;
  expectedFormat: "professional_email" | "formal_memo" | "project_update";
  recommendedWordCount: {
    min: number;
    max: number;
  };
  evaluationCriteria: string[];
  modelResponse: string;
  keyPoints: string[];
}

export interface SituationalScenario {
  id: string;
  type: "situational";
  context: string;
  challenge: string;
  options: [string, string, string, string];
  bestOption: number; // 0-3
  bestOptionRationale: string;
  writtenPrompt: string;
  communicationFormat: "chat" | "email";
  modelWrittenResponse: string;
}

export interface ReadingQuestion {
  id: string;
  prompt: string;
  options: [string, string, string, string];
  correctAnswer: number;
  explanation: string;
  questionType: "inference" | "main-idea" | "vocabulary" | "factual";
}

export interface ReadingSectionData {
  id: string;
  type: "reading";
  passageTitle: string;
  passageTopic: string;
  passageContent: string;
  wordCount: number;
  questions: ReadingQuestion[];
}

export interface ListeningQuestion {
  id: string;
  prompt: string;
  options: [string, string, string, string];
  correctAnswer: number;
  explanation: string;
}

export interface ListeningScriptDialogue {
  speaker: string;
  text: string;
}

export interface ListeningSectionData {
  id: string;
  type: "listening";
  title: string;
  context: string;
  dialogue: ListeningScriptDialogue[];
  fullScriptText: string;
  questions: ListeningQuestion[];
}

export interface SpeakingTask {
  id: string;
  type: "speaking";
  prompt: string;
  context: string;
  preparationSeconds: number; // 30
  recordingSeconds: number; // 90
  recommendedMinimumWords: number;
  keyFocusAreas: string[];
  modelTranscript: string;
}

export interface MockTest {
  id: string;
  testNumber: number;
  title: string;
  difficulty: DifficultyLevel;
  durationMinutes: number;
  description: string;
  sectionTimers: Record<SectionKey, number>; // in minutes
  sections: {
    grammar: GrammarQuestion[]; // 10
    writing: WritingTask[]; // 2
    situational: SituationalScenario[]; // 6
    reading: ReadingSectionData; // 4 questions
    listening: ListeningSectionData; // 4 questions
    speaking: SpeakingTask[]; // 2
  };
}

export interface UserAnswers {
  grammar: Record<string, number>;
  writing: Record<string, string>;
  situational: Record<string, { selectedOption?: number; writtenResponse?: string }>;
  reading: Record<string, number>;
  listening: Record<string, number>;
  speaking: Record<
    string,
    {
      audioBlobUrl?: string;
      audioDataUrl?: string;
      transcript?: string;
      durationSeconds?: number;
    }
  >;
}

export interface WritingFeedback {
  taskId: string;
  wordCount: number;
  grammarScore: number; // 0-20
  clarityScore: number; // 0-20
  professionalToneScore: number; // 0-20
  relevanceScore: number; // 0-20
  completenessScore: number; // 0-20
  totalScore: number; // 0-100
  strengths: string[];
  suggestions: string[];
}

export interface SpeakingFeedback {
  taskId: string;
  fluencyScore: number; // 0-20
  grammarScore: number; // 0-20
  vocabularyScore: number; // 0-15
  coherenceScore: number; // 0-20
  relevanceScore: number; // 0-15
  structureScore: number; // 0-10
  totalScore: number; // 0-100
  strengths: string[];
  suggestions: string[];
}

export interface SectionScore {
  sectionKey: SectionKey;
  title: string;
  rawScore: number; // e.g. points earned
  maxRawScore: number;
  percentage: number; // 0-100
  weight: number; // fraction e.g. 0.20
  weightedScore: number; // weight * percentage
  summary: string;
}

export interface TestAttempt {
  id: string;
  testId: string;
  testNumber: number;
  testTitle: string;
  difficulty: DifficultyLevel;
  mode: "exam" | "practice";
  startedAt: string;
  completedAt: string;
  timeSpentSeconds: number;
  sectionTimeSpent: Record<SectionKey, number>;
  overallScore: number; // 0-100
  grade: "A+" | "A" | "B+" | "B" | "C" | "Needs Practice";
  percentileEstimate: number;
  sectionScores: Record<SectionKey, SectionScore>;
  answers: UserAnswers;
  writingFeedback: Record<string, WritingFeedback>;
  speakingFeedback: Record<string, SpeakingFeedback>;
  strongestSkill: string;
  weakestSkill: string;
  recommendations: string[];
}

export interface UserPreferences {
  defaultMode: "exam" | "practice";
  speechRate: number; // 0.8 - 1.2
  voiceURI?: string;
  soundAlerts: boolean;
  timerPauseOnBlur: boolean;
  sectionTimeMultiplier: number; // 1 = standard
}

