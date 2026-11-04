"use client";

import { CheckCircle2, Lock } from "lucide-react";
import {
  useExamStore,
  SECTION_ORDER,
  SECTION_LABELS,
} from "@/store/exam-store";

export function SectionNavigation() {
  const {
    currentSection,
    setCurrentSection,
    completedSections,
    mode,
    getSectionProgress,
  } = useExamStore();

  return (
    <div className="w-full bg-white border-b border-[#E2E8F0] shadow-xs">
      <div className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8">
        <div className="flex items-center overflow-x-auto no-scrollbar py-2 gap-1.5 sm:gap-2">
          {SECTION_ORDER.map((secKey, idx) => {
            const isActive = currentSection === secKey;
            const isCompleted = completedSections[secKey];
            const isLocked = mode === "exam" && isCompleted && !isActive;
            const { answered, total } = getSectionProgress(secKey);

            return (
              <button
                key={secKey}
                onClick={() => !isLocked && setCurrentSection(secKey)}
                disabled={isLocked}
                className={`flex items-center gap-2 whitespace-nowrap rounded-lg px-3 py-2 text-xs font-medium transition-all shrink-0 ${
                  isActive
                    ? "bg-[#2457D6] text-white shadow-xs"
                    : isLocked
                    ? "bg-slate-50 text-slate-400 cursor-not-allowed border border-slate-200/60"
                    : "bg-slate-50 text-slate-700 hover:bg-slate-100 hover:text-[#172033] border border-slate-200/80"
                }`}
              >
                <span
                  className={`flex h-5 w-5 items-center justify-center rounded-full text-[10px] font-bold ${
                    isActive
                      ? "bg-white/20 text-white"
                      : isLocked
                      ? "bg-slate-200 text-slate-400"
                      : "bg-slate-200/70 text-slate-700"
                  }`}
                >
                  {idx + 1}
                </span>

                <span className="font-medium tracking-tight">
                  {SECTION_LABELS[secKey]}
                </span>

                <span
                  className={`text-[11px] rounded-md px-1.5 py-0.2 font-mono ${
                    isActive
                      ? "bg-white/25 text-white"
                      : isLocked
                      ? "bg-slate-100 text-slate-400"
                      : "bg-slate-200/50 text-slate-600"
                  }`}
                >
                  {answered}/{total}
                </span>

                {isLocked && <Lock className="h-3 w-3 text-slate-400" />}
                {!isLocked && answered >= total && total > 0 && (
                  <CheckCircle2
                    className={`h-3.5 w-3.5 ${
                      isActive ? "text-emerald-300" : "text-emerald-600"
                    }`}
                  />
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

