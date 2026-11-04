import fs from "fs";
import path from "path";

const OUT_DIR = path.resolve("./data/mock-tests");
if (!fs.existsSync(OUT_DIR)) {
  fs.mkdirSync(OUT_DIR, { recursive: true });
}

// Helper to assemble 4 options with exact target correct index (0=A, 1=B, 2=C, 3=D)
function makeMCQ(prompt, correct, distractors, targetIndex, explanation, extra = {}) {
  const options = new Array(4);
  options[targetIndex] = correct;
  let dIdx = 0;
  for (let i = 0; i < 4; i++) {
    if (i !== targetIndex) {
      options[i] = distractors[dIdx++];
    }
  }

  const optionLetter = ["A", "B", "C", "D"][targetIndex];
  const fullExplanation = `Option ${optionLetter} ("${correct}") is correct. ${explanation}`;

  return {
    prompt,
    options,
    correctAnswer: targetIndex,
    explanation: fullExplanation,
    ...extra,
  };
}

function makeSituational(context, challenge, bestAction, alternativeActions, targetIndex, rationale, writtenPrompt, format, modelWritten) {
  const options = new Array(4);
  options[targetIndex] = bestAction;
  let dIdx = 0;
  for (let i = 0; i < 4; i++) {
    if (i !== targetIndex) {
      options[i] = alternativeActions[dIdx++];
    }
  }
  const optionLetter = ["A", "B", "C", "D"][targetIndex];
  const fullRationale = `Option ${optionLetter} is the optimal professional strategy. ${rationale}`;

  return {
    context,
    challenge,
    options,
    bestOption: targetIndex,
    bestOptionRationale: fullRationale,
    writtenPrompt,
    communicationFormat: format,
    modelWrittenResponse: modelWritten,
  };
}

export { makeMCQ, makeSituational, OUT_DIR };

