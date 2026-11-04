"use client";

import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "next/navigation";
import { getMockTestById } from "@/data/mock-tests";
import { useExamStore } from "@/store/exam-store";
import { getInProgressExam } from "@/lib/storage";
import { ExamHeader } from "@/components/exam/ExamHeader";
import { SectionNavigation } from "@/components/exam/SectionNavigation";
import { GrammarSection } from "@/components/exam/GrammarSection";
import { WritingSection } from "@/components/exam/WritingSection";
import { SituationalSection } from "@/components/exam/SituationalSection";
import { ReadingSection } from "@/components/exam/ReadingSection";
import { ListeningSection } from "@/components/exam/ListeningSection";
import { SpeakingSection } from "@/components/exam/SpeakingSection";
import { SubmissionModal } from "@/components/exam/SubmissionModal";
import { AlertCircle, ArrowLeft, RefreshCw } from "lucide-react";
import Link from "next/link";

export default function ExamPage() {
  const params = useParams();
  const searchParams = useSearchParams();

  const testId = params?.testId as string;
  const modeParam = searchParams.get("mode") === "practice" ? "practice" : "exam";

  const { mockTest, currentSection, initExam } = useExamStore();
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    if (!testId) return;

    const test = getMockTestById(testId);
    if (!test) {
      setNotFound(true);
      setLoading(false);
      return;
    }

    // Check if there is an in-progress saved attempt
    const inProgress = getInProgressExam(testId);

    if (inProgress) {
      initExam(test, inProgress.mode || modeParam, {
        answers: inProgress.answers,
        sectionTimeSpent: inProgress.sectionTimeSpent,
        sectionTimeRemaining: inProgress.sectionTimeRemaining,
        currentSection: inProgress.currentSection,
        currentQuestionIndex: inProgress.currentQuestionIndex,
      });
    } else {
      initExam(test, modeParam);
    }

    setLoading(false);
  }, [testId, modeParam, initExam]);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#F5F7FB]">
        <div className="flex flex-col items-center gap-3">
          <RefreshCw className="h-8 w-8 animate-spin text-[#2457D6]" />
          <p className="text-sm font-semibold text-[#172033]">
            Initializing Examination Environment...
          </p>
        </div>
      </div>
    );
  }

  if (notFound || !mockTest) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#F5F7FB] p-4">
        <div className="max-w-md w-full rounded-2xl bg-white p-8 text-center border border-slate-200 shadow-sm space-y-4">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-red-100 text-red-600">
            <AlertCircle className="h-6 w-6" />
          </div>
          <h2 className="text-lg font-bold text-[#172033]">
            Mock Test Not Found
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            The requested assessment test ({testId}) does not exist. Please return to the Mock Test Library to select an available test.
          </p>
          <Link
            href="/mock-tests"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#2457D6] text-white text-xs sm:text-sm font-semibold shadow-xs hover:bg-[#1d45ab]"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Return to Mock Test Library</span>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F5F7FB] flex flex-col">
      <ExamHeader />
      <SectionNavigation />

      {/* Active Section Content */}
      <main className="flex-1 mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8 py-6">
        {currentSection === "grammar" && <GrammarSection />}
        {currentSection === "writing" && <WritingSection />}
        {currentSection === "situational" && <SituationalSection />}
        {currentSection === "reading" && <ReadingSection />}
        {currentSection === "listening" && <ListeningSection />}
        {currentSection === "speaking" && <SpeakingSection />}
      </main>

      <SubmissionModal />
    </div>
  );
}

