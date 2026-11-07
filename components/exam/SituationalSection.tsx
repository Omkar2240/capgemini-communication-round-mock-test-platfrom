"use client";

import { useEffect } from "react";
import { useExamStore } from "@/store/exam-store";
import { QuestionNavigator } from "./QuestionNavigator";
import { MessageSquare, Mail, HelpCircle } from "lucide-react";
import { getWordCount } from "@/lib/scoring";

export function SituationalSection() {
  const {
    mockTest,
    currentQuestionIndex,
    setCurrentQuestionIndex,
    answers,
    setSituationalOption,
    setSituationalWritten,
    mode,
  } = useExamStore();

  const scenarios = mockTest?.sections?.situational || [];
  const safeIndex = Math.min(Math.max(0, currentQuestionIndex), Math.max(0, scenarios.length - 1));

  useEffect(() => {
    if (scenarios.length > 0 && currentQuestionIndex !== safeIndex) {
      setCurrentQuestionIndex(safeIndex);
    }
  }, [currentQuestionIndex, safeIndex, scenarios.length, setCurrentQuestionIndex]);

  if (!mockTest || scenarios.length === 0) return null;
  const currentScenario = scenarios[safeIndex];
  if (!currentScenario) return null;

  const currentAnswer = answers.situational[currentScenario.id] || {};
  const selectedOpt = currentAnswer.selectedOption;
  const writtenText = currentAnswer.writtenResponse || "";
  const wordCount = getWordCount(writtenText);

  const itemIds = scenarios.map((s) => s.id);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
      {/* Scenario and Tasks (3 cols) */}
      <div className="lg:col-span-3 space-y-5">
        {/* Scenario Context Card */}
        <div className="rounded-xl border border-[#E2E8F0] bg-white p-6 shadow-xs">
          <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-slate-100">
            <div className="flex items-center gap-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-md bg-[#2457D6]/10 text-xs font-bold text-[#2457D6]">
                S{safeIndex + 1}
              </span>
              <span className="text-xs font-medium text-slate-500">
                Workplace Scenario {safeIndex + 1} of {scenarios.length}
              </span>
            </div>

            <span className="inline-flex items-center gap-1.5 rounded-md bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-700 capitalize">
              {currentScenario.communicationFormat === "chat" ? (
                <>
                  <MessageSquare className="h-3.5 w-3.5 text-[#2457D6]" />
                  Chat / Instant Message Style
                </>
              ) : (
                <>
                  <Mail className="h-3.5 w-3.5 text-[#2457D6]" />
                  Formal Email Style
                </>
              )}
            </span>
          </div>

          <div className="py-4 space-y-3">
            <p className="text-sm sm:text-base text-[#172033] leading-relaxed font-medium">
              {currentScenario.context}
            </p>
            <div className="rounded-lg bg-amber-50/70 p-3 border border-amber-200/80 text-xs sm:text-sm text-amber-900">
              <strong>Core Dilemma:</strong> {currentScenario.challenge}
            </div>
          </div>
        </div>

        {/* Part 1: Multiple Choice Strategy */}
        <div className="rounded-xl border border-[#E2E8F0] bg-white p-6 shadow-xs space-y-4">
          <div className="flex items-center justify-between pb-2 border-b border-slate-100">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#172033] flex items-center gap-2">
              <span className="flex h-5 w-5 items-center justify-center rounded bg-[#2457D6] text-white text-[10px]">
                1
              </span>
              Part A: Choose the Most Professional Course of Action
            </h4>
            <span className="text-xs text-slate-400 font-mono">10 Points</span>
          </div>

          <div className="space-y-3">
            {currentScenario.options.map((opt, optIdx) => {
              const isSelected = selectedOpt === optIdx;
              const optionLetters = ["A", "B", "C", "D"];

              return (
                <button
                  key={optIdx}
                  onClick={() => setSituationalOption(currentScenario.id, optIdx)}
                  className={`w-full flex items-start gap-3.5 p-3.5 rounded-xl border text-left text-sm transition-all ${
                    isSelected
                      ? "bg-blue-50/70 border-[#2457D6] text-[#172033] ring-1 ring-[#2457D6] shadow-xs"
                      : "bg-white border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-50/70"
                  }`}
                >
                  <span
                    className={`flex h-6 w-6 items-center justify-center rounded-lg text-xs font-bold shrink-0 mt-0.5 transition-colors ${
                      isSelected
                        ? "bg-[#2457D6] text-white"
                        : "bg-slate-100 text-slate-600"
                    }`}
                  >
                    {optionLetters[optIdx]}
                  </span>
                  <span className="font-medium text-xs sm:text-sm leading-relaxed flex-1">
                    {opt}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Practice Mode Rationale */}
          {mode === "practice" && selectedOpt !== undefined && (
            <div className="mt-4 rounded-xl border border-blue-200 bg-blue-50/50 p-4">
              <div className="flex items-center gap-2 text-xs font-bold text-blue-800 mb-1">
                <HelpCircle className="h-4 w-4" />
                <span>Situational Rationale:</span>
              </div>
              <p className="text-xs text-slate-700 leading-relaxed">
                {currentScenario.bestOptionRationale}
              </p>
            </div>
          )}
        </div>

        {/* Part 2: Written Response */}
        <div className="rounded-xl border border-[#E2E8F0] bg-white p-6 shadow-xs space-y-3">
          <div className="flex items-center justify-between pb-2 border-b border-slate-100">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#172033] flex items-center gap-2">
              <span className="flex h-5 w-5 items-center justify-center rounded bg-[#2457D6] text-white text-[10px]">
                2
              </span>
              Part B: Compose Your Written Communication
            </h4>
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-medium text-slate-600 bg-slate-100 px-2 py-0.5 rounded">
                {wordCount} words
              </span>
              <span className="text-xs text-slate-400 font-mono">5 Points</span>
            </div>
          </div>

          <p className="text-xs sm:text-sm font-medium text-slate-700">
            {currentScenario.writtenPrompt}
          </p>

          <textarea
            value={writtenText}
            onChange={(e) => setSituationalWritten(currentScenario.id, e.target.value)}
            placeholder={
              currentScenario.communicationFormat === "chat"
                ? "Type your concise, polite workplace chat reply (1-3 sentences)..."
                : "Type your professional email reply (greeting, body, polite closing)..."
            }
            rows={4}
            className="w-full rounded-xl border border-slate-300 p-3.5 text-xs sm:text-sm text-[#172033] placeholder-slate-400 focus:border-[#2457D6] focus:ring-1 focus:ring-[#2457D6] outline-hidden leading-relaxed"
          />

          {mode === "practice" && (
            <div className="mt-3 rounded-lg border border-blue-100 bg-blue-50/40 p-3">
              <span className="text-xs font-bold text-blue-800 block mb-1">
                Model Workplace Response:
              </span>
              <p className="text-xs text-slate-700 italic">
                &ldquo;{currentScenario.modelWrittenResponse}&rdquo;
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Palette Navigation (1 col) */}
      <div className="lg:col-span-1">
        <QuestionNavigator
          itemIds={itemIds}
          isAnswered={(id) => {
            const ans = answers.situational[id];
            return !!ans && (ans.selectedOption !== undefined || (!!ans.writtenResponse && ans.writtenResponse.trim().length > 5));
          }}
        />
      </div>
    </div>
  );
}

