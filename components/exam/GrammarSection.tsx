"use client";

import { useEffect } from "react";
import { useExamStore } from "@/store/exam-store";
import { QuestionNavigator } from "./QuestionNavigator";
import { HelpCircle } from "lucide-react";

export function GrammarSection() {
  const {
    mockTest,
    currentQuestionIndex,
    setCurrentQuestionIndex,
    answers,
    setGrammarAnswer,
    mode,
  } = useExamStore();

  const questions = mockTest?.sections?.grammar || [];
  const safeIndex = Math.min(Math.max(0, currentQuestionIndex), Math.max(0, questions.length - 1));

  useEffect(() => {
    if (questions.length > 0 && currentQuestionIndex !== safeIndex) {
      setCurrentQuestionIndex(safeIndex);
    }
  }, [currentQuestionIndex, safeIndex, questions.length, setCurrentQuestionIndex]);

  if (!mockTest || questions.length === 0) return null;
  const currentQ = questions[safeIndex];
  if (!currentQ) return null;

  const selectedAnswer = answers.grammar[currentQ.id];
  const itemIds = questions.map((q) => q.id);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
      {/* Question Card (3 cols) */}
      <div className="lg:col-span-3 space-y-4">
        <div className="rounded-xl border border-[#E2E8F0] bg-white p-6 shadow-xs">
          {/* Header */}
          <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-slate-100">
            <div className="flex items-center gap-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-md bg-[#2457D6]/10 text-xs font-bold text-[#2457D6]">
                Q{safeIndex + 1}
              </span>
              <span className="text-xs font-medium text-slate-500">
                Question {safeIndex + 1} of {questions.length}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span className="rounded-md bg-slate-100 px-2 py-0.5 text-[11px] font-semibold text-slate-600">
                {currentQ.topic}
              </span>
              <span className="rounded-md bg-blue-50 px-2 py-0.5 text-[11px] font-medium text-blue-700 capitalize">
                {currentQ.difficulty}
              </span>
            </div>
          </div>

          {/* Prompt */}
          <div className="py-6">
            <h3 className="text-base sm:text-lg font-medium text-[#172033] leading-relaxed">
              {currentQ.prompt}
            </h3>
          </div>

          {/* Options */}
          <div className="space-y-3">
            {currentQ.options.map((option, optIdx) => {
              const isSelected = selectedAnswer === optIdx;
              const optionLetters = ["A", "B", "C", "D"];

              return (
                <button
                  key={optIdx}
                  onClick={() => setGrammarAnswer(currentQ.id, optIdx)}
                  className={`w-full flex items-center gap-3.5 p-3.5 rounded-xl border text-left text-sm transition-all ${
                    isSelected
                      ? "bg-blue-50/70 border-[#2457D6] text-[#172033] ring-1 ring-[#2457D6] shadow-xs"
                      : "bg-white border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-50/70"
                  }`}
                >
                  <span
                    className={`flex h-7 w-7 items-center justify-center rounded-lg text-xs font-bold shrink-0 transition-colors ${
                      isSelected
                        ? "bg-[#2457D6] text-white"
                        : "bg-slate-100 text-slate-600"
                    }`}
                  >
                    {optionLetters[optIdx]}
                  </span>
                  <span className="font-medium text-sm flex-1 leading-snug">
                    {option}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Practice Mode Instant Explanation */}
          {mode === "practice" && selectedAnswer !== undefined && (
            <div className="mt-6 rounded-xl border border-blue-200 bg-blue-50/50 p-4">
              <div className="flex items-center gap-2 text-xs font-bold text-blue-800 mb-1">
                <HelpCircle className="h-4 w-4" />
                <span>Practice Insight & Explanation:</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                {currentQ.explanation}
              </p>
              <div className="mt-2 text-[11px] font-semibold text-emerald-700">
                Correct answer: Option {["A", "B", "C", "D"][currentQ.correctAnswer]} ({currentQ.options[currentQ.correctAnswer]})
              </div>
            </div>
          )}

          {/* Clear choice button */}
          {selectedAnswer !== undefined && (
            <div className="mt-6 flex justify-end">
              <button
                onClick={() => {
                  const copy = { ...answers.grammar };
                  delete copy[currentQ.id];
                  useExamStore.setState({ answers: { ...answers, grammar: copy } });
                }}
                className="text-xs text-slate-400 hover:text-slate-600 font-medium"
              >
                Clear selection
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Palette Navigation (1 col) */}
      <div className="lg:col-span-1">
        <QuestionNavigator
          itemIds={itemIds}
          isAnswered={(id) => answers.grammar[id] !== undefined}
        />
      </div>
    </div>
  );
}

