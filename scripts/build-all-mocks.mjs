import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { getTests01To05 } from "./data-tests-01-05.mjs";
import { getTests06To10 } from "./data-tests-06-10.mjs";
import { getTests11To15 } from "./data-tests-11-15.mjs";
import { DIALOGUES_06_TO_15 } from "./dialogues-06-15.mjs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const outputDir = path.resolve(__dirname, "../data/mock-tests");

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

console.log("Loading all test datasets...");
const raw01To05 = getTests01To05();
const raw06To10 = getTests06To10();
const raw11To15 = getTests11To15();

const rawTests = [...raw01To05, ...raw06To10, ...raw11To15];
console.log(`Total raw mock tests loaded: ${rawTests.length}`);

// Harmonize each test into the exact production schema
const allTests = rawTests.map((test, tIdx) => {
  const padNum = String(tIdx + 1).padStart(2, "0");
  const testId = `mock-${padNum}`;

  // 1. Grammar
  const grammar = test.sections.grammar.map((q, qIdx) => ({
    id: q.id || `${testId}-gram-${String(qIdx + 1).padStart(2, "0")}`,
    type: "grammar",
    prompt: q.prompt || q.question,
    options: q.options,
    correctAnswer: q.correctAnswer,
    explanation: q.explanation,
    topic: q.topic || "Business Vocabulary",
    difficulty: q.difficulty || (tIdx < 5 ? "easy" : tIdx < 10 ? "medium" : "hard"),
  }));

  // 2. Writing
  const writing = test.sections.writing.map((w, wIdx) => {
    const isEmail = (w.expectedFormat && w.expectedFormat.includes("email")) || w.taskType === "email" || (wIdx === 0);
    return {
      id: w.id || `${testId}-wri-${String(wIdx + 1).padStart(2, "0")}`,
      type: "writing",
      prompt: w.prompt,
      scenario: w.scenario || w.context,
      expectedFormat: isEmail ? "professional_email" : (wIdx === 1 ? "formal_memo" : "project_update"),
      recommendedWordCount: w.recommendedWordCount || { min: w.minWords || 90, max: w.maxWords || 160 },
      evaluationCriteria: w.evaluationCriteria || w.scoringCriteria || ["Professional executive tone", "Clarity of message", "Structured prose", "Grammatical accuracy"],
      modelResponse: w.modelResponse || w.modelAnswer,
      keyPoints: w.keyPoints || (w.scoringCriteria || ["clear executive tone", "specific metrics", "actionable next steps"]),
    };
  });

  // 3. Situational
  const situational = test.sections.situational.map((s, sIdx) => {
    const bestOpt = typeof s.bestOption === "number" ? s.bestOption : s.correctAnswer;
    return {
      id: s.id || `${testId}-sit-${String(sIdx + 1).padStart(2, "0")}`,
      type: "situational",
      context: s.context,
      challenge: s.challenge || "Balancing operational continuity, technical standards, and stakeholder alignment.",
      options: s.options,
      bestOption: bestOpt,
      bestOptionRationale: s.bestOptionRationale || s.explanation,
      writtenPrompt: s.writtenPrompt || "Draft a concise, professional message addressing this situation.",
      communicationFormat: s.communicationFormat || (bestOpt % 2 === 0 ? "email" : "chat"),
      modelWrittenResponse: s.modelWrittenResponse || s.options[bestOpt],
    };
  });

  // 4. Reading
  const rSec = test.sections.reading;
  const passageContent = rSec.passageContent || rSec.text;
  const wordCount = rSec.wordCount || passageContent.split(/\s+/).filter(Boolean).length;
  const reading = {
    id: `${testId}-read`,
    type: "reading",
    passageTitle: rSec.passageTitle || rSec.title,
    passageTopic: rSec.passageTopic || test.title.split(":")[1]?.trim() || "Enterprise Strategy",
    wordCount,
    passageContent,
    questions: rSec.questions.map((q, qIdx) => ({
      id: q.id || `${testId}-read-q${String(qIdx + 1).padStart(2, "0")}`,
      prompt: q.prompt || q.question,
      options: q.options,
      correctAnswer: q.correctAnswer,
      explanation: q.explanation,
      questionType: q.questionType || (["factual", "inference", "vocabulary", "main-idea"][qIdx] || "factual"),
    })),
  };

  // 5. Listening
  const lSec = test.sections.listening;
  const dialogueObj = DIALOGUES_06_TO_15[testId];
  const dialogue = dialogueObj?.dialogue || lSec.dialogue;
  const fullScriptText = dialogueObj
    ? dialogueObj.dialogue.map((d) => `${d.speaker}: ${d.text}`).join("\n")
    : lSec.fullScriptText || lSec.audioTranscript;
  const listening = {
    id: `${testId}-list`,
    type: "listening",
    title: lSec.title,
    context: dialogueObj?.context || lSec.context,
    dialogue,
    fullScriptText,
    questions: lSec.questions.map((q, qIdx) => ({
      id: q.id || `${testId}-list-q${String(qIdx + 1).padStart(2, "0")}`,
      prompt: q.prompt || q.question,
      options: q.options,
      correctAnswer: q.correctAnswer,
      explanation: q.explanation,
    })),
  };

  // 6. Speaking
  const speaking = test.sections.speaking.map((spk, spkIdx) => ({
    id: spk.id || `${testId}-spk-${String(spkIdx + 1).padStart(2, "0")}`,
    type: "speaking",
    prompt: spk.prompt,
    context: spk.context,
    preparationSeconds: spk.preparationSeconds || 30,
    recordingSeconds: spk.recordingSeconds || 90,
    recommendedMinimumWords: spk.recommendedMinimumWords || 90,
    keyFocusAreas: spk.keyFocusAreas || ["Structure", "Clarity", "Professional tone", "Examples"],
    modelTranscript: spk.modelTranscript,
  }));

  return {
    id: testId,
    testNumber: tIdx + 1,
    title: test.title,
    difficulty: test.difficulty,
    durationMinutes: test.durationMinutes || 60,
    description: test.description,
    sectionTimers: test.sectionTimers || { grammar: 12, writing: 10, situational: 10, reading: 10, listening: 8, speaking: 10 },
    sections: {
      grammar,
      writing,
      situational,
      reading,
      listening,
      speaking,
    },
  };
});

// Comprehensive Audit & Validation
let hasError = false;
const seenPrompts = new Set();
const optionDistributionOverall = { A: 0, B: 0, C: 0, D: 0 };

console.log("\n--- EXAM DATA AUDIT REPORT ---");

allTests.forEach((test, idx) => {
  const testNum = idx + 1;
  const padNum = String(testNum).padStart(2, "0");
  const expectedId = `mock-${padNum}`;

  if (test.id !== expectedId) {
    console.error(`[FAIL] Test #${testNum} ID mismatch: expected ${expectedId}, got ${test.id}`);
    hasError = true;
  }

  // Count items
  const grammarCount = test.sections.grammar.length;
  const writingCount = test.sections.writing.length;
  const situationalCount = test.sections.situational.length;
  const readingCount = test.sections.reading.questions.length;
  const listeningCount = test.sections.listening.questions.length;
  const speakingCount = test.sections.speaking.length;
  const totalItems = grammarCount + writingCount + situationalCount + readingCount + listeningCount + speakingCount;

  if (grammarCount !== 10 || writingCount !== 2 || situationalCount !== 6 || readingCount !== 4 || listeningCount !== 4 || speakingCount !== 2) {
    console.error(`[FAIL] Test ${test.id} item counts incorrect: G:${grammarCount}, W:${writingCount}, S:${situationalCount}, R:${readingCount}, L:${listeningCount}, Sp:${speakingCount}`);
    hasError = true;
  }

  // Distribution of 24 objective questions
  const objectiveQuestions = [
    ...test.sections.grammar,
    ...test.sections.situational.map(s => ({
      prompt: s.context + " " + s.challenge,
      options: s.options,
      correctAnswer: s.bestOption,
      id: s.id,
      type: "situational"
    })),
    ...test.sections.reading.questions,
    ...test.sections.listening.questions,
  ];

  if (objectiveQuestions.length !== 24) {
    console.error(`[FAIL] Test ${test.id} has ${objectiveQuestions.length} objective questions (expected 24)`);
    hasError = true;
  }

  const dist = { A: 0, B: 0, C: 0, D: 0 };
  const letterMap = { 0: "A", 1: "B", 2: "C", 3: "D" };

  objectiveQuestions.forEach((q, qIdx) => {
    // Check prompt uniqueness
    const promptText = (q.prompt || "").trim().toLowerCase();
    if (promptText) {
      if (seenPrompts.has(promptText)) {
        console.warn(`[WARN] Duplicate prompt detected across tests: "${promptText.slice(0, 60)}..."`);
      }
      seenPrompts.add(promptText);
    }

    // Check options
    if (!Array.isArray(q.options) || q.options.length !== 4) {
      console.error(`[FAIL] Test ${test.id} question ${q.id || qIdx} does not have exactly 4 options!`);
      hasError = true;
    }

    // Check correct answer
    const ans = q.correctAnswer;
    if (typeof ans !== "number" || ans < 0 || ans > 3) {
      console.error(`[FAIL] Test ${test.id} question ${q.id || qIdx} has invalid correctAnswer: ${ans}`);
      hasError = true;
    } else {
      const letter = letterMap[ans];
      dist[letter]++;
      optionDistributionOverall[letter]++;
    }
  });

  // Verify exact 25% balance: exactly 6 A, 6 B, 6 C, 6 D per test
  const isBalanced = dist.A === 6 && dist.B === 6 && dist.C === 6 && dist.D === 6;
  if (!isBalanced) {
    console.error(`[FAIL] Test ${test.id} option distribution is not 6/6/6/6: A=${dist.A}, B=${dist.B}, C=${dist.C}, D=${dist.D}`);
    hasError = true;
  } else {
    console.log(`[PASS] ${test.id} (${test.difficulty.padEnd(12)}): 28 items, 24 MCQs balanced (A: 6, B: 6, C: 6, D: 6 - 25.0% each)`);
  }
});

console.log("\n--- OVERALL 15-TEST DISTRIBUTION ---");
console.log(`Total objective questions: 15 * 24 = 360`);
console.log(`Option A: ${optionDistributionOverall.A} (${((optionDistributionOverall.A / 360) * 100).toFixed(1)}%)`);
console.log(`Option B: ${optionDistributionOverall.B} (${((optionDistributionOverall.B / 360) * 100).toFixed(1)}%)`);
console.log(`Option C: ${optionDistributionOverall.C} (${((optionDistributionOverall.C / 360) * 100).toFixed(1)}%)`);
console.log(`Option D: ${optionDistributionOverall.D} (${((optionDistributionOverall.D / 360) * 100).toFixed(1)}%)`);
console.log(`Total unique objective prompts: ${seenPrompts.size} / 360`);

if (hasError) {
  console.error("\n[CRITICAL ERROR] Validation failed with errors! Fix the issues before writing JSON files.");
  process.exit(1);
}

// Write out all 15 JSON files
console.log("\nWriting 15 mock test JSON files to disk...");
allTests.forEach((test) => {
  const filePath = path.join(outputDir, `${test.id}.json`);
  fs.writeFileSync(filePath, JSON.stringify(test, null, 2), "utf8");
  console.log(`Written: ${filePath}`);
});

console.log("\nAll 15 Mock Tests successfully validated and written!");
