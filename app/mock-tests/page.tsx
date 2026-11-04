"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ALL_MOCK_TESTS } from "@/data/mock-tests";
import { getStoredAttempts, getInProgressExam } from "@/lib/storage";
import { TestAttempt, MockTest } from "@/types/exam";
import { AppShell } from "@/components/layout/AppShell";
import {
  BookOpen,
  Search,
  CheckCircle2,
  Clock,
  Play,
  Layers,
  Shield,
  HelpCircle,
} from "lucide-react";

export default function MockTestsPage() {
  const [attempts, setAttempts] = useState<TestAttempt[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>("All");
  const [selectedStatus, setSelectedStatus] = useState<string>("All");
  const [launchModalTest, setLaunchModalTest] = useState<MockTest | null>(null);

  useEffect(() => {
    setAttempts(getStoredAttempts());
  }, []);

  // Filter logic
  const filteredTests = ALL_MOCK_TESTS.filter((test) => {
    const matchesSearch =
      test.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      test.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      `mock ${test.testNumber}`.includes(searchQuery.toLowerCase());

    const matchesDiff =
      selectedDifficulty === "All" || test.difficulty === selectedDifficulty;

    const hasAttempt = attempts.some((a) => a.testId === test.id);
    const matchesStatus =
      selectedStatus === "All" ||
      (selectedStatus === "Completed" && hasAttempt) ||
      (selectedStatus === "Unattempted" && !hasAttempt);

    return matchesSearch && matchesDiff && matchesStatus;
  });

  return (
    <AppShell>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        {/* Page Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-slate-200">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-[#2457D6] uppercase tracking-wider mb-1">
              <BookOpen className="h-4 w-4" />
              <span>Full Curriculum</span>
            </div>
            <h1 className="font-heading text-2xl sm:text-3xl font-extrabold text-[#172033]">
              15 Corporate Communication Mock Tests
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 mt-1 max-w-2xl">
              Progressively scaled across Foundation, Intermediate, and Advanced tiers. Each assessment features all 6 sections (28 items) with deterministic scoring.
            </p>
          </div>

          <div className="flex items-center gap-3 text-xs text-slate-600 bg-white p-2.5 rounded-xl border border-slate-200 shadow-xs shrink-0">
            <span className="font-bold text-[#172033]">
              {attempts.length} Attempt{attempts.length === 1 ? "" : "s"} Logged
            </span>
            <span>•</span>
            <span className="text-emerald-700 font-semibold">
              {new Set(attempts.map((a) => a.testId)).size}/15 Completed
            </span>
          </div>
        </div>

        {/* Filter Toolbar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Search */}
          <div className="relative w-full sm:w-72">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search tests, topics..."
              className="w-full rounded-xl border border-slate-300 bg-white pl-9 pr-3 py-2 text-xs sm:text-sm text-[#172033] placeholder-slate-400 focus:border-[#2457D6] focus:ring-1 focus:ring-[#2457D6] outline-hidden shadow-xs"
            />
          </div>

          {/* Difficulty & Status Tabs */}
          <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
            <div className="flex items-center rounded-xl bg-white p-1 border border-slate-200 shadow-xs text-xs">
              {["All", "Foundation", "Intermediate", "Advanced"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setSelectedDifficulty(tab)}
                  className={`px-3 py-1.5 rounded-lg font-medium transition-colors ${
                    selectedDifficulty === tab
                      ? "bg-[#2457D6] text-white font-semibold"
                      : "text-slate-600 hover:text-[#172033]"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            <div className="flex items-center rounded-xl bg-white p-1 border border-slate-200 shadow-xs text-xs">
              {["All", "Completed", "Unattempted"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setSelectedStatus(tab)}
                  className={`px-3 py-1.5 rounded-lg font-medium transition-colors ${
                    selectedStatus === tab
                      ? "bg-slate-800 text-white font-semibold"
                      : "text-slate-600 hover:text-[#172033]"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Test Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredTests.map((test) => {
            const latestAttempt = attempts.find((a) => a.testId === test.id);
            const inProgress = getInProgressExam(test.id);

            return (
              <div
                key={test.id}
                className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-xs hover:border-[#2457D6]/40 hover:shadow-md transition-all group"
              >
                <div>
                  {/* Top Badges */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-slate-100 text-xs font-bold text-slate-700">
                      {test.testNumber < 10 ? "0" + test.testNumber : test.testNumber}
                    </span>

                    <div className="flex items-center gap-1.5">
                      <span
                        className={`rounded-md px-2 py-0.5 text-[11px] font-semibold border ${
                          test.difficulty === "Foundation"
                            ? "bg-emerald-50 text-emerald-700 border-emerald-200"
                            : test.difficulty === "Intermediate"
                            ? "bg-blue-50 text-blue-700 border-blue-200"
                            : "bg-purple-50 text-purple-700 border-purple-200"
                        }`}
                      >
                        {test.difficulty}
                      </span>

                      {latestAttempt && (
                        <span className="rounded-md bg-emerald-50 px-2 py-0.5 text-[11px] font-bold text-emerald-700 border border-emerald-200 flex items-center gap-1">
                          <CheckCircle2 className="h-3 w-3" /> {latestAttempt.overallScore}%
                        </span>
                      )}

                      {inProgress && !latestAttempt && (
                        <span className="rounded-md bg-amber-50 px-2 py-0.5 text-[11px] font-bold text-amber-700 border border-amber-200">
                          In Progress
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="font-heading text-base font-bold text-[#172033] group-hover:text-[#2457D6] transition-colors leading-snug">
                    {test.title}
                  </h3>
                  <p className="mt-2 text-xs text-slate-500 line-clamp-2 leading-relaxed">
                    {test.description}
                  </p>

                  {/* Metadata Row */}
                  <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-medium">
                    <span className="flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5 text-slate-400" />
                      {test.durationMinutes} mins
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Layers className="h-3.5 w-3.5 text-slate-400" />
                      6 Sections (28 items)
                    </span>
                  </div>
                </div>

                {/* Bottom Actions */}
                <div className="mt-5 pt-3 border-t border-slate-100 flex items-center gap-2">
                  <button
                    onClick={() => setLaunchModalTest(test)}
                    className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-[#2457D6] hover:bg-[#1d45ab] text-white text-xs font-semibold shadow-xs transition-all"
                  >
                    <Play className="h-3.5 w-3.5 fill-white" />
                    <span>{latestAttempt ? "Retake Test" : inProgress ? "Resume Test" : "Start Test"}</span>
                  </button>

                  {latestAttempt && (
                    <Link
                      href={`/results/${latestAttempt.id}`}
                      className="px-3 py-2 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-semibold transition-colors shrink-0"
                    >
                      Report
                    </Link>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {filteredTests.length === 0 && (
          <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-12 text-center">
            <p className="text-sm text-slate-500">
              No mock tests match your current search and filter criteria.
            </p>
          </div>
        )}
      </div>

      {/* Start Test Mode Selection Modal */}
      {launchModalTest && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-xs p-4">
          <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl border border-slate-200 animate-in fade-in zoom-in-95">
            <h3 className="font-heading text-lg font-bold text-[#172033]">
              Start {launchModalTest.title}
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              Select your practice format before launching the examination session.
            </p>

            <div className="mt-5 space-y-3">
              {/* Option 1: Exam Mode */}
              <Link
                href={`/exam/${launchModalTest.id}?mode=exam`}
                className="flex items-start gap-3.5 p-3.5 rounded-xl border border-blue-200 bg-blue-50/40 hover:bg-blue-50 transition-all text-left group"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#2457D6] text-white shrink-0 shadow-xs">
                  <Shield className="h-5 w-5" />
                </div>
                <div>
                  <span className="text-xs sm:text-sm font-bold text-[#172033] block group-hover:text-[#2457D6] transition-colors">
                    Standard Exam Mode (Recommended)
                  </span>
                  <p className="text-[11px] text-slate-600 mt-0.5 leading-relaxed">
                    60-minute section countdown timers, strict section progression, explanations withheld until final report.
                  </p>
                </div>
              </Link>

              {/* Option 2: Practice Mode */}
              <Link
                href={`/exam/${launchModalTest.id}?mode=practice`}
                className="flex items-start gap-3.5 p-3.5 rounded-xl border border-slate-200 bg-slate-50 hover:bg-slate-100 transition-all text-left group"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-800 text-white shrink-0 shadow-xs">
                  <HelpCircle className="h-5 w-5" />
                </div>
                <div>
                  <span className="text-xs sm:text-sm font-bold text-[#172033] block group-hover:text-[#172033] transition-colors">
                    Practice Mode (Untimed & Explanatory)
                  </span>
                  <p className="text-[11px] text-slate-600 mt-0.5 leading-relaxed">
                    No countdown pressure, free jumping between sections, and instant access to grammar rules and model scripts.
                  </p>
                </div>
              </Link>
            </div>

            <div className="mt-5 pt-3 border-t border-slate-100 flex justify-end">
              <button
                onClick={() => setLaunchModalTest(null)}
                className="px-4 py-2 text-xs font-semibold text-slate-500 hover:text-slate-800"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </AppShell>
  );
}
