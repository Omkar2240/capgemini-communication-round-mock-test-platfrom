"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Sparkles,
  LogOut,
  Send,
  HelpCircle,
  Shield,
} from "lucide-react";
import { useExamStore, SECTION_LABELS } from "@/store/exam-store";
import { CountdownTimer } from "./CountdownTimer";

export function ExamHeader() {
  const router = useRouter();
  const {
    mockTest,
    mode,
    currentSection,
    setShowSubmitModal,
    getTotalAnsweredCount,
  } = useExamStore();

  const [showExitConfirm, setShowExitConfirm] = useState(false);
  const { answered, total } = getTotalAnsweredCount();

  const handleExit = () => {
    // Keep in-progress saved in localStorage so student can resume
    router.push("/mock-tests");
  };

  if (!mockTest) return null;

  return (
    <header className="sticky top-0 z-30 w-full border-b border-[#E2E8F0] bg-white shadow-xs">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-3 sm:px-6 lg:px-8">
        {/* Left: Brand & Test Metadata */}
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#14264B] text-white shadow-xs">
            <Sparkles className="h-4 w-4" />
          </div>

          <div>
            <div className="flex items-center gap-2">
              <h1 className="font-heading font-bold text-sm sm:text-base text-[#172033] truncate max-w-[200px] sm:max-w-[340px]">
                {mockTest.title}
              </h1>
              <span
                className={`hidden md:inline-flex items-center rounded-md px-2 py-0.5 text-[11px] font-semibold ${
                  mockTest.difficulty === "Foundation"
                    ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                    : mockTest.difficulty === "Intermediate"
                    ? "bg-blue-50 text-blue-700 border border-blue-200"
                    : "bg-purple-50 text-purple-700 border border-purple-200"
                }`}
              >
                {mockTest.difficulty}
              </span>
            </div>
            <p className="text-[11px] text-[#718096] hidden sm:block truncate">
              {SECTION_LABELS[currentSection]} • Item progress: {answered}/{total} answered
            </p>
          </div>
        </div>

        {/* Center: Countdown Timer */}
        <div className="flex items-center">
          <CountdownTimer />
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-2">
          {mode === "practice" && (
            <span className="hidden lg:inline-flex items-center gap-1 rounded-full bg-amber-50 px-2.5 py-1 text-xs font-medium text-amber-800 border border-amber-200">
              <HelpCircle className="h-3 w-3" /> Practice Mode
            </span>
          )}

          {mode === "exam" && (
            <span className="hidden lg:inline-flex items-center gap-1 rounded-full bg-blue-50 px-2.5 py-1 text-xs font-medium text-blue-800 border border-blue-200">
              <Shield className="h-3 w-3" /> Timed Exam
            </span>
          )}

          <button
            onClick={() => setShowSubmitModal(true)}
            className="inline-flex items-center gap-1.5 rounded-lg bg-[#2457D6] px-3.5 py-1.5 text-xs sm:text-sm font-semibold text-white shadow-xs hover:bg-[#1d45ab] transition-all"
          >
            <Send className="h-3.5 w-3.5" />
            <span>Finish & Submit</span>
          </button>

          <button
            onClick={() => setShowExitConfirm(true)}
            className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition-colors"
            title="Save progress and exit"
          >
            <LogOut className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Exit Confirmation Dialog */}
      {showExitConfirm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-xs p-4">
          <div className="w-full max-w-md rounded-xl bg-white p-6 shadow-xl border border-slate-200">
            <h3 className="text-base font-bold text-[#172033]">Pause and Exit Exam?</h3>
            <p className="mt-2 text-xs sm:text-sm text-[#718096]">
              Your responses are automatically saved in local browser storage. You can resume this mock test anytime from the Mock Tests library.
            </p>
            <div className="mt-5 flex items-center justify-end gap-3">
              <button
                onClick={() => setShowExitConfirm(false)}
                className="px-4 py-2 text-xs sm:text-sm font-medium text-slate-600 hover:bg-slate-100 rounded-lg"
              >
                Continue Exam
              </button>
              <button
                onClick={handleExit}
                className="px-4 py-2 text-xs sm:text-sm font-medium text-white bg-slate-800 hover:bg-slate-900 rounded-lg"
              >
                Save & Exit to Library
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

