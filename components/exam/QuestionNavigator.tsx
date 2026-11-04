"use client";

import { Flag, ChevronLeft, ChevronRight } from "lucide-react";
import { useExamStore } from "@/store/exam-store";

interface QuestionNavigatorProps {
  itemIds: string[];
  isAnswered: (id: string, index: number) => boolean;
}

export function QuestionNavigator({ itemIds, isAnswered }: QuestionNavigatorProps) {
  const {
    currentQuestionIndex,
    setCurrentQuestionIndex,
    flaggedItems,
    toggleFlag,
    nextQuestion,
    prevQuestion,
  } = useExamStore();

  const currentId = itemIds[currentQuestionIndex];
  const isCurrentFlagged = !!flaggedItems[currentId];

  return (
    <div className="rounded-xl border border-[#E2E8F0] bg-white p-4 shadow-xs">
      <div className="flex items-center justify-between pb-3 border-b border-slate-100">
        <h4 className="text-xs font-semibold text-[#172033] uppercase tracking-wider">
          Question Palette
        </h4>
        <button
          onClick={() => currentId && toggleFlag(currentId)}
          className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium transition-colors ${
            isCurrentFlagged
              ? "bg-amber-100 text-amber-800 border border-amber-300"
              : "text-slate-500 hover:text-slate-800 hover:bg-slate-100"
          }`}
        >
          <Flag className={`h-3.5 w-3.5 ${isCurrentFlagged ? "fill-amber-500 text-amber-600" : ""}`} />
          <span>{isCurrentFlagged ? "Flagged for Review" : "Flag Item"}</span>
        </button>
      </div>

      {/* Grid of Question Pills */}
      <div className="grid grid-cols-5 gap-2 py-4">
        {itemIds.map((id, idx) => {
          const isCurr = currentQuestionIndex === idx;
          const answered = isAnswered(id, idx);
          const flagged = !!flaggedItems[id];

          return (
            <button
              key={id}
              onClick={() => setCurrentQuestionIndex(idx)}
              className={`relative flex h-9 w-full items-center justify-center rounded-lg text-xs font-semibold transition-all ${
                isCurr
                  ? "ring-2 ring-[#2457D6] ring-offset-1 bg-[#2457D6] text-white"
                  : answered
                  ? "bg-emerald-50 text-emerald-700 border border-emerald-300 hover:bg-emerald-100"
                  : "bg-slate-50 text-slate-700 border border-slate-200 hover:bg-slate-100"
              }`}
            >
              <span>{idx + 1}</span>
              {flagged && (
                <span className="absolute -top-1 -right-1 h-2.5 w-2.5 rounded-full bg-amber-500 ring-2 ring-white" />
              )}
            </button>
          );
        })}
      </div>

      {/* Legend */}
      <div className="pt-2 border-t border-slate-100 grid grid-cols-2 gap-2 text-[11px] text-slate-500">
        <div className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded bg-emerald-500 shrink-0" />
          <span>Answered</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded bg-slate-200 border border-slate-300 shrink-0" />
          <span>Unanswered</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded bg-amber-500 shrink-0" />
          <span>Flagged</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded bg-[#2457D6] shrink-0" />
          <span>Current</span>
        </div>
      </div>

      {/* Prev / Next controls */}
      <div className="mt-4 flex items-center justify-between gap-2 pt-3 border-t border-slate-100">
        <button
          onClick={prevQuestion}
          disabled={currentQuestionIndex === 0}
          className="flex-1 flex items-center justify-center gap-1 px-3 py-1.5 rounded-lg border border-slate-200 text-xs font-medium text-slate-700 hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
        >
          <ChevronLeft className="h-3.5 w-3.5" />
          <span>Previous</span>
        </button>
        <button
          onClick={nextQuestion}
          className="flex-1 flex items-center justify-center gap-1 px-3 py-1.5 rounded-lg bg-slate-800 text-xs font-medium text-white hover:bg-slate-900 transition-colors"
        >
          <span>Next</span>
          <ChevronRight className="h-3.5 w-3.5" />
        </button>
      </div>
    </div>
  );
}

