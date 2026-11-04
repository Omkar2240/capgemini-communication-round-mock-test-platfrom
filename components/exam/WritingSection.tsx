"use client";

import { useExamStore } from "@/store/exam-store";
import { QuestionNavigator } from "./QuestionNavigator";
import { getWordCount } from "@/lib/scoring";
import { CheckCircle, Info, Sparkles } from "lucide-react";

export function WritingSection() {
  const {
    mockTest,
    currentQuestionIndex,
    answers,
    setWritingAnswer,
    mode,
  } = useExamStore();

  if (!mockTest) return null;
  const tasks = mockTest.sections.writing;
  const currentTask = tasks[currentQuestionIndex];
  if (!currentTask) return null;

  const currentText = answers.writing[currentTask.id] || "";
  const wordCount = getWordCount(currentText);
  const minWords = currentTask.recommendedWordCount.min;
  const maxWords = currentTask.recommendedWordCount.max;

  const isUnder = wordCount < minWords;
  const isOptimal = wordCount >= minWords && wordCount <= maxWords;

  const itemIds = tasks.map((t) => t.id);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
      {/* Writing Workspace (3 cols) */}
      <div className="lg:col-span-3 space-y-4">
        {/* Scenario and Instructions Box */}
        <div className="rounded-xl border border-[#E2E8F0] bg-white p-6 shadow-xs">
          <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-slate-100">
            <div className="flex items-center gap-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-md bg-[#2457D6]/10 text-xs font-bold text-[#2457D6]">
                Task {currentQuestionIndex + 1}
              </span>
              <span className="text-xs font-medium text-slate-500">
                Writing Task {currentQuestionIndex + 1} of {tasks.length}
              </span>
            </div>
            <span className="rounded-md bg-blue-50 px-2.5 py-1 text-xs font-semibold text-[#2457D6] uppercase tracking-wide">
              {currentTask.expectedFormat.replace("_", " ")}
            </span>
          </div>

          <div className="py-4 space-y-3">
            <h3 className="text-base font-bold text-[#172033] leading-snug">
              {currentTask.prompt}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 bg-slate-50 p-3 rounded-lg border border-slate-200/70 leading-relaxed">
              <strong>Scenario Context:</strong> {currentTask.scenario}
            </p>
          </div>

          {/* Guidelines & Rubric Points */}
          <div className="pt-2 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-600">
            <div>
              <span className="font-semibold text-slate-800 block mb-1">Key Objectives:</span>
              <ul className="list-disc list-inside space-y-0.5 text-slate-600">
                {currentTask.keyPoints.map((kp, idx) => (
                  <li key={idx} className="capitalize">{kp}</li>
                ))}
              </ul>
            </div>
            <div>
              <span className="font-semibold text-slate-800 block mb-1">Evaluation Focus:</span>
              <ul className="list-disc list-inside space-y-0.5 text-slate-600">
                {currentTask.evaluationCriteria.map((ec, idx) => (
                  <li key={idx}>{ec}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Text Area Card */}
        <div className="rounded-xl border border-[#E2E8F0] bg-white p-6 shadow-xs space-y-3">
          <div className="flex items-center justify-between">
            <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
              Your Professional Response
            </label>
            {/* Live Word Count Indicator */}
            <div className="flex items-center gap-2">
              <span
                className={`text-xs font-bold font-mono px-2 py-0.5 rounded-md border ${
                  isOptimal
                    ? "bg-emerald-50 text-emerald-700 border-emerald-300"
                    : isUnder
                    ? "bg-amber-50 text-amber-700 border-amber-300"
                    : "bg-red-50 text-red-700 border-red-300"
                }`}
              >
                {wordCount} words
              </span>
              <span className="text-[11px] text-slate-400">
                (Target: {minWords}–{maxWords} words)
              </span>
            </div>
          </div>

          <textarea
            value={currentText}
            onChange={(e) => setWritingAnswer(currentTask.id, e.target.value)}
            placeholder={`Compose your ${currentTask.expectedFormat.replace("_", " ")} here...\n\nExample structure:\n- Professional Greeting\n- Opening Background Context\n- Core Problem or Mitigation Proposal\n- Clear Next Steps & Timeline\n- Courteous Closing & Sign-off`}
            rows={12}
            className="w-full rounded-xl border border-slate-300 p-4 text-sm text-[#172033] placeholder-slate-400 focus:border-[#2457D6] focus:ring-1 focus:ring-[#2457D6] outline-hidden leading-relaxed font-sans transition-all"
          />

          <div className="flex flex-wrap items-center justify-between text-xs text-slate-500 pt-1">
            <div className="flex items-center gap-1.5">
              <Info className="h-3.5 w-3.5 text-slate-400" />
              <span>
                Use formal business phrasing, bullet points where applicable, and maintain polite corporate etiquette.
              </span>
            </div>
            {isUnder && (
              <span className="text-amber-600 font-medium">
                {minWords - wordCount} more words recommended
              </span>
            )}
            {isOptimal && (
              <span className="text-emerald-600 font-medium flex items-center gap-1">
                <CheckCircle className="h-3.5 w-3.5" /> Optimal length
              </span>
            )}
          </div>

          {/* Practice Mode Model Answer Preview */}
          {mode === "practice" && (
            <div className="mt-4 rounded-xl border border-blue-200 bg-blue-50/50 p-4">
              <div className="flex items-center gap-2 text-xs font-bold text-blue-800 mb-2">
                <Sparkles className="h-4 w-4" />
                <span>Practice Reference Model Answer:</span>
              </div>
              <pre className="text-xs text-slate-700 whitespace-pre-wrap font-sans leading-relaxed bg-white p-3 rounded-lg border border-blue-100">
                {currentTask.modelResponse}
              </pre>
            </div>
          )}
        </div>
      </div>

      {/* Palette Navigation (1 col) */}
      <div className="lg:col-span-1">
        <QuestionNavigator
          itemIds={itemIds}
          isAnswered={(id) => {
            const txt = answers.writing[id];
            return !!txt && txt.trim().length > 15;
          }}
        />
      </div>
    </div>
  );
}

