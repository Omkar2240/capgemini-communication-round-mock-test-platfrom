"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useExamStore, SECTION_ORDER, SECTION_LABELS } from "@/store/exam-store";
import { calculateTestResults } from "@/lib/scoring";
import { saveStoredAttempt, clearInProgressExam } from "@/lib/storage";
import { saveAudioToDB } from "@/lib/audio-db";
import {
  Send,
  AlertTriangle,
  CheckCircle2,
  X,
  Loader2,
} from "lucide-react";

export function SubmissionModal() {
  const router = useRouter();
  const {
    mockTest,
    mode,
    answers,
    sectionTimeSpent,
    totalTimeSpentSeconds,
    showSubmitModal,
    setShowSubmitModal,
    getSectionProgress,
    getTotalAnsweredCount,
  } = useExamStore();

  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!showSubmitModal || !mockTest) return null;

  const { answered, total } = getTotalAnsweredCount();
  const unansweredCount = total - answered;

  const handleFinalSubmit = async () => {
    setIsSubmitting(true);
    try {
      const attempt = calculateTestResults(
        mockTest,
        answers,
        mode,
        totalTimeSpentSeconds || 60,
        sectionTimeSpent
      );

      // Save heavy speech audio to IndexedDB so they persist reliably without filling localStorage
      if (answers.speaking) {
        for (const [taskId, spk] of Object.entries(answers.speaking)) {
          if (spk?.audioDataUrl) {
            await saveAudioToDB(`${attempt.id}_${taskId}`, spk.audioDataUrl, spk.durationSeconds);
          }
        }
      }

      // Free up storage space by clearing the in-progress exam first
      clearInProgressExam(mockTest.id);

      // Save locally (memory, sessionStorage, localStorage with auto-sanitization, and IndexedDB)
      saveStoredAttempt(attempt);

      // Navigate to results
      router.push(`/results/${attempt.id}`);
    } catch (err) {
      console.error("Submission failed", err);
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-xs p-4">
      <div className="w-full max-w-lg rounded-2xl bg-white p-6 shadow-2xl border border-slate-200 animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="flex items-center justify-between pb-3 border-b border-slate-100">
          <div className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#2457D6]/10 text-[#2457D6]">
              <Send className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-[#172033]">
                Submit Assessment
              </h3>
              <p className="text-xs text-slate-500">
                {mockTest.title}
              </p>
            </div>
          </div>
          <button
            onClick={() => !isSubmitting && setShowSubmitModal(false)}
            className="p-1.5 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-100 transition-colors"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Warning if unanswered */}
        {unansweredCount > 0 ? (
          <div className="mt-4 rounded-xl border border-amber-200 bg-amber-50 p-4 flex items-start gap-3">
            <AlertTriangle className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
            <div className="text-xs text-amber-900">
              <strong className="font-semibold block text-sm mb-0.5">
                {unansweredCount} Unanswered Assessment Item{unansweredCount > 1 ? "s" : ""}
              </strong>
              You have unanswered questions in one or more sections. Are you sure you want to finish and submit now?
            </div>
          </div>
        ) : (
          <div className="mt-4 rounded-xl border border-emerald-200 bg-emerald-50 p-4 flex items-center gap-3">
            <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0" />
            <div className="text-xs text-emerald-900">
              <strong className="font-semibold block text-sm mb-0.5">
                All 28 Items Completed!
              </strong>
              You have provided responses for all six assessment sections.
            </div>
          </div>
        )}

        {/* Section Progress Breakdown */}
        <div className="mt-4 space-y-2">
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
            Section Completion Summary
          </h4>
          <div className="grid grid-cols-2 gap-2 text-xs">
            {SECTION_ORDER.map((secKey) => {
              const { answered, total, isComplete } = getSectionProgress(secKey);
              return (
                <div
                  key={secKey}
                  className="flex items-center justify-between p-2 rounded-lg bg-slate-50 border border-slate-100"
                >
                  <span className="text-slate-700 font-medium truncate max-w-[130px]">
                    {SECTION_LABELS[secKey]}
                  </span>
                  <span
                    className={`font-mono text-[11px] font-bold ${
                      isComplete ? "text-emerald-700" : "text-amber-700"
                    }`}
                  >
                    {answered}/{total}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Footer Actions */}
        <div className="mt-6 flex items-center justify-end gap-3 pt-3 border-t border-slate-100">
          <button
            onClick={() => setShowSubmitModal(false)}
            disabled={isSubmitting}
            className="px-4 py-2 text-xs sm:text-sm font-semibold text-slate-600 hover:bg-slate-100 rounded-xl transition-colors disabled:opacity-50"
          >
            Review Questions
          </button>
          <button
            onClick={handleFinalSubmit}
            disabled={isSubmitting}
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-[#2457D6] hover:bg-[#1d45ab] rounded-xl shadow-xs hover:shadow transition-all disabled:opacity-50"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                <span>Generating Detailed Report...</span>
              </>
            ) : (
              <>
                <Send className="h-4 w-4" />
                <span>Confirm & Submit</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

