import {
  MockTest,
  UserAnswers,
  SectionScore,
  WritingFeedback,
  SpeakingFeedback,
  TestAttempt,
  SectionKey,
} from "@/types/exam";

// Helper: word count
export function getWordCount(text: string): number {
  if (!text || !text.trim()) return 0;
  return text.trim().split(/\s+/).length;
}

// Evaluate a business writing task
export function evaluateWritingTask(
  text: string,
  minWords: number,
  maxWords: number,
  keyPoints: string[]
): WritingFeedback {
  const words = getWordCount(text);
  const lower = (text || "").toLowerCase();

  let grammarScore = 15;
  let clarityScore = 14;
  let toneScore = 15;
  let relevanceScore = 14;
  let completenessScore = 14;

  const strengths: string[] = [];
  const suggestions: string[] = [];

  if (words < 15) {
    return {
      taskId: "",
      wordCount: words,
      grammarScore: 4,
      clarityScore: 4,
      professionalToneScore: 4,
      relevanceScore: 4,
      completenessScore: 4,
      totalScore: 20,
      strengths: ["Attempted task"],
      suggestions: [
        "Response is too brief. Provide a comprehensive email with greeting, body paragraphs, and professional closing.",
      ],
    };
  }

  // Word count evaluation
  if (words >= minWords && words <= maxWords + 30) {
    completenessScore += 4;
    clarityScore += 3;
    strengths.push(`Met the recommended length constraint (${words} words).`);
  } else if (words < minWords) {
    const deficit = minWords - words;
    completenessScore -= Math.min(8, Math.floor(deficit / 10) * 2);
    suggestions.push(`Response is ${deficit} words under the recommended minimum (${minWords} words). Elaborate on impact and next steps.`);
  } else {
    clarityScore -= 2;
    suggestions.push(`Response exceeds recommended upper bound. Aim for concise, punchy corporate phrasing.`);
  }

  // Professional Tone Analysis
  const salutations = ["dear", "hi ", "hello", "good morning", "good afternoon", "greetings"];
  const signoffs = ["regards", "sincerely", "best regards", "warm regards", "thanks", "thank you", "respectfully"];
  const politeMarkers = ["please", "kindly", "appreciate", "understand", "apologize", "grateful", "ensure", "collaborate"];
  const informalSlang = ["gonna", "wanna", "u ", "ur ", "thx", "plz", "asap", "cool", "hey dude", "idk", "btw"];

  const hasSalutation = salutations.some((s) => lower.includes(s));
  const hasSignoff = signoffs.some((s) => lower.includes(s));
  const politeCount = politeMarkers.filter((m) => lower.includes(m)).length;
  const slangCount = informalSlang.filter((s) => lower.includes(s)).length;

  if (hasSalutation && hasSignoff) {
    toneScore += 4;
    strengths.push("Follows standard corporate correspondence etiquette with proper greeting and sign-off.");
  } else {
    toneScore -= 3;
    suggestions.push("Ensure your email includes both an explicit professional salutation and a polite closing sign-off.");
  }

  if (politeCount >= 2) {
    toneScore += 2;
    strengths.push("Uses diplomatic, courteous business vocabulary.");
  }

  if (slangCount > 0) {
    toneScore -= Math.min(6, slangCount * 2);
    grammarScore -= 2;
    suggestions.push("Avoid informal contractions or casual text shortcuts in corporate communications.");
  }

  // Key points / Relevance check
  let matchedPoints = 0;
  keyPoints.forEach((kp) => {
    const kwords = kp.toLowerCase().split(/\s+/).filter((w) => w.length > 3);
    const matched = kwords.some((kw) => lower.includes(kw));
    if (matched) matchedPoints++;
  });

  if (matchedPoints >= Math.ceil(keyPoints.length * 0.6)) {
    relevanceScore += 4;
    strengths.push("Directly addressed primary business priorities and scenario requirements.");
  } else {
    relevanceScore -= 3;
    suggestions.push("Explicitly reference key technical, timeline, and mitigation details mentioned in the prompt.");
  }

  // Paragraphing & Structure
  const paragraphCount = text.split(/\n+/).filter((p) => p.trim().length > 0).length;
  if (paragraphCount >= 2) {
    clarityScore += 3;
    strengths.push("Organized logically with distinct paragraphs for background, action, and request.");
  } else {
    clarityScore -= 2;
    suggestions.push("Break your message into distinct paragraphs (Opening Context, Detailed Situation, Actionable Proposal).");
  }

  // Clamp rubric scores to 0-20
  const clamp = (val: number) => Math.max(0, Math.min(20, Math.round(val)));
  const finalGrammar = clamp(grammarScore);
  const finalClarity = clamp(clarityScore);
  const finalTone = clamp(toneScore);
  const finalRelevance = clamp(relevanceScore);
  const finalCompleteness = clamp(completenessScore);

  const totalScore = finalGrammar + finalClarity + finalTone + finalRelevance + finalCompleteness;

  return {
    taskId: "",
    wordCount: words,
    grammarScore: finalGrammar,
    clarityScore: finalClarity,
    professionalToneScore: finalTone,
    relevanceScore: finalRelevance,
    completenessScore: finalCompleteness,
    totalScore,
    strengths: strengths.length > 0 ? strengths : ["Demonstrated baseline workplace understanding."],
    suggestions: suggestions.length > 0 ? suggestions : ["Maintain consistent tone and concise sentence structures."],
  };
}

// Evaluate a spoken communication task
export function evaluateSpeakingTask(
  hasAudio: boolean,
  transcript: string,
  keyFocusAreas: string[],
  recordingDurationSeconds: number
): SpeakingFeedback {
  const words = getWordCount(transcript);
  const lower = (transcript || "").toLowerCase();

  const strengths: string[] = [];
  const suggestions: string[] = [];

  if (!hasAudio && words < 10) {
    return {
      taskId: "",
      fluencyScore: 5,
      grammarScore: 5,
      vocabularyScore: 4,
      coherenceScore: 5,
      relevanceScore: 4,
      structureScore: 3,
      totalScore: 26,
      strengths: ["Task attempted."],
      suggestions: ["Record your spoken response for full 90-second duration and provide transcript for deeper analysis."],
    };
  }

  let fluency = hasAudio ? 14 : 10;
  const grammar = 14;
  let vocabulary = 11;
  let coherence = 14;
  let relevance = 11;
  let structure = 7;

  if (hasAudio) {
    strengths.push(`Audio recording captured (${Math.round(recordingDurationSeconds)}s).`);
    if (recordingDurationSeconds >= 45) {
      fluency += 4;
      strengths.push("Maintained sustained speaking output through the allotted recording window.");
    } else {
      fluency -= 3;
      suggestions.push("Try to speak for at least 45 to 60 seconds to demonstrate communicative fluency.");
    }
  }

  if (words > 0) {
    // Transcript based heuristics
    if (words >= 80) {
      vocabulary += 3;
      coherence += 3;
      strengths.push(`Rich spoken lexical volume (${words} words transcribed).`);
    } else if (words < 40) {
      coherence -= 3;
      suggestions.push("Expand your verbal elaboration with specific examples and outcome metrics.");
    }

    const transitions = ["firstly", "furthermore", "in addition", "for example", "as a result", "consequently", "finally", "in conclusion"];
    const foundTransitions = transitions.filter((t) => lower.includes(t)).length;
    if (foundTransitions >= 2) {
      coherence += 3;
      structure += 2;
      strengths.push("Employed coherent rhetorical signposts to guide the listener.");
    }

    // Key focus areas
    let focusMatches = 0;
    keyFocusAreas.forEach((fa) => {
      const tokens = fa.toLowerCase().split(/\s+/).filter((t) => t.length > 3);
      if (tokens.some((tok) => lower.includes(tok))) focusMatches++;
    });

    if (focusMatches >= 2) {
      relevance += 3;
      strengths.push("Directly tackled required themes and problem contexts.");
    } else {
      suggestions.push("Incorporate structured frameworks like STAR (Situation, Task, Action, Result) in spoken narratives.");
    }

    // Filler words detection
    const fillers = ["um", "uh", "er", "like like", "you know", "basically", "actually"];
    const fillerCount = fillers.filter((f) => lower.includes(f)).length;
    if (fillerCount >= 3) {
      fluency -= 2;
      suggestions.push("Reduce verbal crutches and hesitation fillers with purposeful pauses.");
    }
  } else {
    suggestions.push("Provide an optional transcript of your speech to unlock automated structural and lexical evaluation.");
  }

  const clamp = (v: number, max: number) => Math.max(0, Math.min(max, Math.round(v)));
  const fFluency = clamp(fluency, 20);
  const fGrammar = clamp(grammar, 20);
  const fVocab = clamp(vocabulary, 15);
  const fCoherence = clamp(coherence, 20);
  const fRelevance = clamp(relevance, 15);
  const fStructure = clamp(structure, 10);

  const totalScore = fFluency + fGrammar + fVocab + fCoherence + fRelevance + fStructure;

  return {
    taskId: "",
    fluencyScore: fFluency,
    grammarScore: fGrammar,
    vocabularyScore: fVocab,
    coherenceScore: fCoherence,
    relevanceScore: fRelevance,
    structureScore: fStructure,
    totalScore,
    strengths: strengths.length > 0 ? strengths : ["Communicated core message."],
    suggestions: suggestions.length > 0 ? suggestions : ["Continue practicing timed impromptu speaking."],
  };
}

// Calculate comprehensive test attempt scores
export function calculateTestResults(
  mockTest: MockTest,
  answers: UserAnswers,
  mode: "exam" | "practice",
  timeSpentSeconds: number,
  sectionTimeSpent: Record<SectionKey, number>
): TestAttempt {
  // 1. Grammar: 10 questions, weight 20%
  let grammarCorrect = 0;
  mockTest.sections.grammar.forEach((q) => {
    if (answers.grammar[q.id] === q.correctAnswer) {
      grammarCorrect++;
    }
  });
  const grammarPct = Math.round((grammarCorrect / mockTest.sections.grammar.length) * 100);
  const grammarScore: SectionScore = {
    sectionKey: "grammar",
    title: "Grammar & Sentence Correction",
    rawScore: grammarCorrect,
    maxRawScore: mockTest.sections.grammar.length,
    percentage: grammarPct,
    weight: 0.20,
    weightedScore: +(grammarPct * 0.20).toFixed(1),
    summary: `${grammarCorrect}/${mockTest.sections.grammar.length} questions answered correctly.`,
  };

  // 2. Business Writing: 2 tasks, weight 20%
  const writingFeedbackMap: Record<string, WritingFeedback> = {};
  let writingTotalPct = 0;
  mockTest.sections.writing.forEach((task) => {
    const text = answers.writing[task.id] || "";
    const feedback = evaluateWritingTask(
      text,
      task.recommendedWordCount.min,
      task.recommendedWordCount.max,
      task.keyPoints
    );
    feedback.taskId = task.id;
    writingFeedbackMap[task.id] = feedback;
    writingTotalPct += feedback.totalScore;
  });
  const writingAvgPct = Math.round(writingTotalPct / mockTest.sections.writing.length);
  const writingScore: SectionScore = {
    sectionKey: "writing",
    title: "Business Communication Writing",
    rawScore: Math.round(writingAvgPct),
    maxRawScore: 100,
    percentage: writingAvgPct,
    weight: 0.20,
    weightedScore: +(writingAvgPct * 0.20).toFixed(1),
    summary: `Assessed on clarity, grammar, tone, relevance, and completeness across 2 tasks.`,
  };

  // 3. Situational Awareness: 6 scenarios, weight 15%
  let situationalPoints = 0;
  const maxSituationalPoints = mockTest.sections.situational.length * 15; // 10 for MCQ, 5 for written
  mockTest.sections.situational.forEach((sc) => {
    const ans = answers.situational[sc.id] || {};
    if (ans.selectedOption === sc.bestOption) {
      situationalPoints += 10;
    }
    const writtenWords = getWordCount(ans.writtenResponse || "");
    if (writtenWords >= 20) {
      situationalPoints += 5;
    } else if (writtenWords >= 8) {
      situationalPoints += 3;
    }
  });
  const situationalPct = Math.round((situationalPoints / maxSituationalPoints) * 100);
  const situationalScore: SectionScore = {
    sectionKey: "situational",
    title: "Situational Awareness & Judgment",
    rawScore: situationalPoints,
    maxRawScore: maxSituationalPoints,
    percentage: situationalPct,
    weight: 0.15,
    weightedScore: +(situationalPct * 0.15).toFixed(1),
    summary: `Evaluated selected decisions and diplomatic workplace messaging for 6 scenarios.`,
  };

  // 4. Reading Comprehension: 4 questions, weight 15%
  let readingCorrect = 0;
  const readingQuestions = mockTest.sections.reading.questions;
  readingQuestions.forEach((q) => {
    if (answers.reading[q.id] === q.correctAnswer) {
      readingCorrect++;
    }
  });
  const readingPct = Math.round((readingCorrect / readingQuestions.length) * 100);
  const readingScore: SectionScore = {
    sectionKey: "reading",
    title: "Reading Comprehension",
    rawScore: readingCorrect,
    maxRawScore: readingQuestions.length,
    percentage: readingPct,
    weight: 0.15,
    weightedScore: +(readingPct * 0.15).toFixed(1),
    summary: `${readingCorrect}/${readingQuestions.length} passage comprehension questions correct.`,
  };

  // 5. Listening Comprehension: 4 questions, weight 15%
  let listeningCorrect = 0;
  const listeningQuestions = mockTest.sections.listening.questions;
  listeningQuestions.forEach((q) => {
    if (answers.listening[q.id] === q.correctAnswer) {
      listeningCorrect++;
    }
  });
  const listeningPct = Math.round((listeningCorrect / listeningQuestions.length) * 100);
  const listeningScore: SectionScore = {
    sectionKey: "listening",
    title: "Listening Comprehension",
    rawScore: listeningCorrect,
    maxRawScore: listeningQuestions.length,
    percentage: listeningPct,
    weight: 0.15,
    weightedScore: +(listeningPct * 0.15).toFixed(1),
    summary: `${listeningCorrect}/${listeningQuestions.length} spoken dialogue questions correct.`,
  };

  // 6. Spoken Communication: 2 tasks, weight 15%
  const speakingFeedbackMap: Record<string, SpeakingFeedback> = {};
  let speakingTotalPct = 0;
  mockTest.sections.speaking.forEach((task) => {
    const spAns = answers.speaking[task.id] || {};
    const hasAudio = !!(spAns.audioBlobUrl || spAns.audioDataUrl || (spAns.durationSeconds && spAns.durationSeconds > 5));
    const feedback = evaluateSpeakingTask(
      hasAudio,
      spAns.transcript || "",
      task.keyFocusAreas,
      spAns.durationSeconds || 0
    );
    feedback.taskId = task.id;
    speakingFeedbackMap[task.id] = feedback;
    speakingTotalPct += feedback.totalScore;
  });
  const speakingAvgPct = Math.round(speakingTotalPct / mockTest.sections.speaking.length);
  const speakingScore: SectionScore = {
    sectionKey: "speaking",
    title: "Spoken Communication Simulation",
    rawScore: speakingAvgPct,
    maxRawScore: 100,
    percentage: speakingAvgPct,
    weight: 0.15,
    weightedScore: +(speakingAvgPct * 0.15).toFixed(1),
    summary: `Assessed on delivery duration, structured flow, vocabulary, and relevance across 2 tasks.`,
  };

  // Overall Score
  const overall = +(
    grammarScore.weightedScore +
    writingScore.weightedScore +
    situationalScore.weightedScore +
    readingScore.weightedScore +
    listeningScore.weightedScore +
    speakingScore.weightedScore
  ).toFixed(1);

  const roundedOverall = Math.min(100, Math.max(0, Math.round(overall)));

  let grade: TestAttempt["grade"] = "Needs Practice";
  if (roundedOverall >= 90) grade = "A+";
  else if (roundedOverall >= 82) grade = "A";
  else if (roundedOverall >= 74) grade = "B+";
  else if (roundedOverall >= 65) grade = "B";
  else if (roundedOverall >= 55) grade = "C";

  // Percentile calculation estimate
  const percentileEstimate = Math.min(99, Math.max(12, Math.round(roundedOverall * 0.95 + 4)));

  const sectionScoresRecord: Record<SectionKey, SectionScore> = {
    grammar: grammarScore,
    writing: writingScore,
    situational: situationalScore,
    reading: readingScore,
    listening: listeningScore,
    speaking: speakingScore,
  };

  // Find strongest and weakest skills
  const skillEntries = Object.entries(sectionScoresRecord).sort((a, b) => b[1].percentage - a[1].percentage);
  const strongestSkill = skillEntries[0][1].title;
  const weakestSkill = skillEntries[skillEntries.length - 1][1].title;

  // Recommendations
  const recommendations: string[] = [];
  if (grammarPct < 75) {
    recommendations.push("Review Subject-Verb Agreement and Tense consistency. Practice identifying subtle sentence fragments.");
  }
  if (writingAvgPct < 75) {
    recommendations.push("Enhance business email formatting: ensure opening context, bulleted requirements, and clear diplomatic closing.");
  }
  if (situationalPct < 75) {
    recommendations.push("Focus on collaborative workplace conflict resolution and proactive client communication before escalation.");
  }
  if (readingPct < 75) {
    recommendations.push("Practice skimming long passages for main conceptual themes and distinguishing explicit facts from inferences.");
  }
  if (listeningPct < 75) {
    recommendations.push("Take concise mental notes during audio playback regarding deadlines, team member roles, and agreed actions.");
  }
  if (speakingAvgPct < 75) {
    recommendations.push("Use the STAR technique (Situation, Task, Action, Result) to deliver structured spoken answers within 90 seconds.");
  }
  if (recommendations.length === 0) {
    recommendations.push("Excellent overall communication competency! Continue regular mock simulations to maintain high performance.");
  }

  return {
    id: `attempt-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
    testId: mockTest.id,
    testNumber: mockTest.testNumber,
    testTitle: mockTest.title,
    difficulty: mockTest.difficulty,
    mode,
    startedAt: new Date(Date.now() - timeSpentSeconds * 1000).toISOString(),
    completedAt: new Date().toISOString(),
    timeSpentSeconds,
    sectionTimeSpent,
    overallScore: roundedOverall,
    grade,
    percentileEstimate,
    sectionScores: sectionScoresRecord,
    answers,
    writingFeedback: writingFeedbackMap,
    speakingFeedback: speakingFeedbackMap,
    strongestSkill,
    weakestSkill,
    recommendations,
  };
}

