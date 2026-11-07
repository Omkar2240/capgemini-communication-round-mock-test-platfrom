"use client";

import { useEffect } from "react";
import { useExamStore } from "@/store/exam-store";
import { QuestionNavigator } from "./QuestionNavigator";
import { BookOpen, HelpCircle } from "lucide-react";

export function ReadingSection() {
  const {
    mockTest,
    currentQuestionIndex,
    setCurrentQuestionIndex,
    answers,
    setReadingAnswer,
    mode,
  } = useExamStore();

  const readingData = mockTest?.sections?.reading;
  const questions = readingData?.questions || [];
  const safeIndex = Math.min(Math.max(0, currentQuestionIndex), Math.max(0, questions.length - 1));

  useEffect(() => {
    if (questions.length > 0 && currentQuestionIndex !== safeIndex) {
      setCurrentQuestionIndex(safeIndex);
    }
  }, [currentQuestionIndex, safeIndex, questions.length, setCurrentQuestionIndex]);

  if (!mockTest || !readingData || questions.length === 0) return null;
  const currentQ = questions[safeIndex];
  if (!currentQ) return null;

  const selectedAnswer = answers.reading[currentQ.id];
  const itemIds = questions.map((q) => q.id);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
      {/* Passage Left Pane (6 cols) */}
      <div className="lg:col-span-6">
        <div className="sticky top-20 rounded-xl border border-[#E2E8F0] bg-white p-6 shadow-xs max-h-[calc(100vh-120px)] overflow-y-auto">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-4">
            <div className="flex items-center gap-2">
              <BookOpen className="h-4 w-4 text-[#2457D6]" />
              <span className="text-xs font-bold text-[#172033] uppercase tracking-wider">
                Reading Passage
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="rounded-md bg-slate-100 px-2 py-0.5 text-[11px] font-semibold text-slate-600">
                {readingData.passageTopic}
              </span>
              <span className="text-[11px] text-slate-400 font-mono">
                {readingData.wordCount} words
              </span>
            </div>
          </div>

          <h3 className="font-heading font-bold text-base sm:text-lg text-[#172033] mb-4 leading-snug">
            {readingData.passageTitle}
          </h3>

          <div className="text-xs sm:text-sm text-slate-700 leading-relaxed space-y-4 font-normal">
            {readingData.passageContent.split("\n\n").map((para, idx) => (
              <p key={idx}>{para}</p>
            ))}
          </div>
        </div>
      </div>

      {/* Question Right Pane (4 cols) */}
      <div className="lg:col-span-4 space-y-4">
        <div className="rounded-xl border border-[#E2E8F0] bg-white p-6 shadow-xs">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <div className="flex items-center gap-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-md bg-[#2457D6]/10 text-xs font-bold text-[#2457D6]">
                Q{safeIndex + 1}
              </span>
              <span className="text-xs font-medium text-slate-500">
                Question {safeIndex + 1} of {questions.length}
              </span>
            </div>
            <span className="rounded-md bg-blue-50 px-2 py-0.5 text-[11px] font-semibold text-[#2457D6] capitalize">
              {currentQ.questionType}
            </span>
          </div>

          <div className="py-4">
            <h4 className="text-sm font-semibold text-[#172033] leading-snug">
              {currentQ.prompt}
            </h4>
          </div>

          {/* Options */}
          <div className="space-y-3">
            {currentQ.options.map((option, optIdx) => {
              const isSelected = selectedAnswer === optIdx;
              const optionLetters = ["A", "B", "C", "D"];

              return (
                <button
                  key={optIdx}
                  onClick={() => setReadingAnswer(currentQ.id, optIdx)}
                  className={`w-full flex items-start gap-3 p-3 rounded-xl border text-left text-xs sm:text-sm transition-all ${
                    isSelected
                      ? "bg-blue-50/70 border-[#2457D6] text-[#172033] ring-1 ring-[#2457D6] shadow-xs"
                      : "bg-white border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-50/70"
                  }`}
                >
                  <span
                    className={`flex h-6 w-6 items-center justify-center rounded-md text-xs font-bold shrink-0 mt-0.5 transition-colors ${
                      isSelected
                        ? "bg-[#2457D6] text-white"
                        : "bg-slate-100 text-slate-600"
                    }`}
                  >
                    {optionLetters[optIdx]}
                  </span>
                  <span className="font-medium flex-1 leading-snug">
                    {option}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Practice Mode Explanation */}
          {mode === "practice" && selectedAnswer !== undefined && (
            <div className="mt-4 rounded-xl border border-blue-200 bg-blue-50/50 p-4">
              <div className="flex items-center gap-1.5 text-xs font-bold text-blue-800 mb-1">
                <HelpCircle className="h-4 w-4" />
                <span>Passage Analysis:</span>
              </div>
              <p className="text-xs text-slate-700 leading-relaxed">
                {currentQ.explanation}
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Palette Navigation (2 cols) */}
      <div className="lg:col-span-2">
        <QuestionNavigator
          itemIds={itemIds}
          isAnswered={(id) => answers.reading[id] !== undefined}
        />
      </div>
    </div>
  );
}

