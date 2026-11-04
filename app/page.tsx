"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { getStoredAttempts, calculateDashboardStats } from "@/lib/storage";
import { ALL_MOCK_TESTS } from "@/data/mock-tests";
import { TestAttempt, SectionKey } from "@/types/exam";
import { AppShell } from "@/components/layout/AppShell";
import {
  Sparkles,
  BookOpen,
  Trophy,
  Clock,
  Flame,
  Award,
  ArrowRight,
  Play,
  CheckCircle2,
  Layers,
} from "lucide-react";

export default function DashboardPage() {
  const [attempts, setAttempts] = useState<TestAttempt[]>([]);

  useEffect(() => {
    setAttempts(getStoredAttempts());
  }, []);

  const stats = calculateDashboardStats(attempts);

  // Dynamic recommendation for next test
  const completedTestIds = new Set(attempts.map((a) => a.testId));
  const nextUnattemptedTest =
    ALL_MOCK_TESTS.find((t) => !completedTestIds.has(t.id)) || ALL_MOCK_TESTS[0];

  const recentAttempts = attempts.slice(0, 5);

  const skillsList: { key: SectionKey; label: string }[] = [
    { key: "grammar", label: "Grammar & Sentence Correction" },
    { key: "writing", label: "Business Writing" },
    { key: "situational", label: "Situational Awareness" },
    { key: "reading", label: "Reading Comprehension" },
    { key: "listening", label: "Listening Comprehension" },
    { key: "speaking", label: "Spoken Communication" },
  ];

  return (
    <AppShell>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        {/* A. Welcome Banner */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#14264B] via-[#1d3567] to-[#2457D6] p-6 sm:p-10 text-white shadow-lg">
          <div className="relative z-10 max-w-2xl space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold backdrop-blur-md border border-white/15">
              <Sparkles className="h-3.5 w-3.5 text-blue-300" />
              <span>Capgemini Communication Assessment Simulator</span>
            </div>

            <h1 className="font-heading text-2xl sm:text-4xl font-extrabold tracking-tight leading-tight">
              Master Corporate English & Communication Assessments
            </h1>

            <p className="text-xs sm:text-sm text-blue-100 leading-relaxed max-w-xl">
              15 complete mock tests simulating corporate exams: grammar, business email writing, workplace situational judgment, reading passages, audio dialogues, and speech simulation.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Link
                href={`/exam/${nextUnattemptedTest.id}`}
                className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-xs sm:text-sm font-bold text-[#14264B] shadow-md hover:bg-blue-50 transition-all hover:scale-102"
              >
                <Play className="h-4 w-4 fill-[#14264B]" />
                <span>Start {nextUnattemptedTest.title.split(":")[0]}</span>
              </Link>

              <Link
                href="/mock-tests"
                className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-5 py-3 text-xs sm:text-sm font-semibold text-white backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all"
              >
                <BookOpen className="h-4 w-4" />
                <span>Explore All 15 Mocks</span>
              </Link>
            </div>
          </div>

          {/* Decorative Background Grid/Circle */}
          <div className="absolute -right-12 -bottom-12 h-64 w-64 rounded-full bg-blue-500/20 blur-3xl" />
        </div>

        {/* B. Performance Statistics (6 KPI Cards) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3.5">
          <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-xs">
            <div className="flex items-center justify-between text-slate-400 mb-2">
              <span className="text-xs font-semibold">Total Attempted</span>
              <BookOpen className="h-4 w-4 text-[#2457D6]" />
            </div>
            <div className="font-heading text-2xl font-extrabold text-[#172033]">
              {stats.totalAttempts}
            </div>
            <div className="text-[11px] text-slate-400 mt-0.5">Sessions logged</div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-xs">
            <div className="flex items-center justify-between text-slate-400 mb-2">
              <span className="text-xs font-semibold">Completed Tests</span>
              <CheckCircle2 className="h-4 w-4 text-emerald-600" />
            </div>
            <div className="font-heading text-2xl font-extrabold text-[#172033]">
              {stats.completedTestsCount}/15
            </div>
            <div className="text-[11px] text-slate-400 mt-0.5">Curriculum coverage</div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-xs">
            <div className="flex items-center justify-between text-slate-400 mb-2">
              <span className="text-xs font-semibold">Average Score</span>
              <Award className="h-4 w-4 text-[#2457D6]" />
            </div>
            <div className="font-heading text-2xl font-extrabold text-[#2457D6]">
              {stats.averageScore}%
            </div>
            <div className="text-[11px] text-slate-400 mt-0.5">Mean overall score</div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-xs">
            <div className="flex items-center justify-between text-slate-400 mb-2">
              <span className="text-xs font-semibold">Personal Best</span>
              <Trophy className="h-4 w-4 text-amber-500" />
            </div>
            <div className="font-heading text-2xl font-extrabold text-emerald-600">
              {stats.bestScore}%
            </div>
            <div className="text-[11px] text-slate-400 mt-0.5">Highest score</div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-xs">
            <div className="flex items-center justify-between text-slate-400 mb-2">
              <span className="text-xs font-semibold">Practice Time</span>
              <Clock className="h-4 w-4 text-blue-600" />
            </div>
            <div className="font-heading text-2xl font-extrabold text-[#172033]">
              {Math.round(stats.totalPracticeTimeSeconds / 60)}m
            </div>
            <div className="text-[11px] text-slate-400 mt-0.5">Time in assessment</div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-xs">
            <div className="flex items-center justify-between text-slate-400 mb-2">
              <span className="text-xs font-semibold">Daily Streak</span>
              <Flame className="h-4 w-4 text-orange-500" />
            </div>
            <div className="font-heading text-2xl font-extrabold text-orange-600">
              {stats.currentStreakDays}d
            </div>
            <div className="text-[11px] text-slate-400 mt-0.5">Active practice</div>
          </div>
        </div>

        {/* C. Two Column Section: Skill Performance + Recommended Next Test */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* C. Skill Performance (7 cols) */}
          <div className="lg:col-span-7 rounded-2xl border border-slate-200 bg-white p-6 shadow-xs space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div>
                <h3 className="font-heading text-base font-bold text-[#172033]">
                  Communication Skill Competency
                </h3>
                <p className="text-xs text-slate-500">
                  Averaged across all completed mock tests
                </p>
              </div>
              <Link
                href="/analytics"
                className="text-xs font-semibold text-[#2457D6] hover:underline flex items-center gap-1"
              >
                <span>Analytics</span>
                <ArrowRight className="h-3 w-3" />
              </Link>
            </div>

            <div className="space-y-3.5 pt-1">
              {skillsList.map(({ key, label }) => {
                const score = stats.skillAverages[key];
                return (
                  <div key={key} className="space-y-1">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-medium text-slate-700">{label}</span>
                      <span className="font-mono font-bold text-[#172033]">
                        {score}%
                      </span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-slate-100 overflow-hidden">
                      <div
                        style={{ width: `${score}%` }}
                        className={`h-full rounded-full transition-all duration-500 ${
                          score >= 75
                            ? "bg-emerald-500"
                            : score >= 60
                            ? "bg-[#2457D6]"
                            : score > 0
                            ? "bg-amber-500"
                            : "bg-slate-200"
                        }`}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* D. Recommended Next Test (5 cols) */}
          <div className="lg:col-span-5 rounded-2xl border border-blue-200 bg-blue-50/40 p-6 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="rounded-full bg-[#2457D6] text-white px-2.5 py-0.5 text-[11px] font-bold">
                  Recommended Next
                </span>
                <span className="text-xs font-semibold text-[#2457D6]">
                  {nextUnattemptedTest.difficulty} Tier
                </span>
              </div>

              <h3 className="font-heading text-lg font-bold text-[#14264B] leading-snug">
                {nextUnattemptedTest.title}
              </h3>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                {nextUnattemptedTest.description}
              </p>

              <div className="mt-4 pt-4 border-t border-blue-100 flex items-center justify-between text-xs text-slate-500 font-medium">
                <span className="flex items-center gap-1">
                  <Clock className="h-3.5 w-3.5 text-slate-400" />
                  60 mins
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Layers className="h-3.5 w-3.5 text-slate-400" />
                  6 Sections (28 items)
                </span>
              </div>
            </div>

            <div className="mt-6 pt-2">
              <Link
                href={`/exam/${nextUnattemptedTest.id}`}
                className="w-full flex items-center justify-center gap-2 rounded-xl bg-[#2457D6] hover:bg-[#1d45ab] px-4 py-3 text-xs sm:text-sm font-bold text-white shadow-sm transition-all"
              >
                <Play className="h-4 w-4 fill-white" />
                <span>Launch This Mock Test</span>
              </Link>
            </div>
          </div>
        </div>

        {/* E. Recent Activity Section */}
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <div>
              <h3 className="font-heading text-base font-bold text-[#172033]">
                Recent Assessment History
              </h3>
              <p className="text-xs text-slate-500">
                Latest completed mock examination attempts
              </p>
            </div>
            <Link
              href="/mock-tests"
              className="text-xs font-semibold text-[#2457D6] hover:underline flex items-center gap-1"
            >
              <span>View All Mocks</span>
              <ArrowRight className="h-3 w-3" />
            </Link>
          </div>

          {recentAttempts.length === 0 ? (
            <div className="py-8 text-center text-xs text-slate-400">
              No tests completed yet. Start your first mock assessment above to record your score!
            </div>
          ) : (
            <div className="divide-y divide-slate-100">
              {recentAttempts.map((attempt) => (
                <div
                  key={attempt.id}
                  className="py-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-[#172033] text-sm">
                        {attempt.testTitle}
                      </span>
                      <span className="rounded-md bg-slate-100 px-2 py-0.5 text-[10px] font-semibold text-slate-600">
                        {attempt.difficulty}
                      </span>
                      <span className="rounded-md bg-blue-50 px-2 py-0.5 text-[10px] font-semibold text-blue-700 capitalize">
                        {attempt.mode}
                      </span>
                    </div>
                    <div className="text-slate-400 text-[11px]">
                      Completed {new Date(attempt.completedAt).toLocaleDateString()} at{" "}
                      {new Date(attempt.completedAt).toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}{" "}
                      • Duration: {Math.round(attempt.timeSpentSeconds / 60)} mins
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="text-right">
                      <span className="text-base font-extrabold text-[#172033] block">
                        {attempt.overallScore}%
                      </span>
                      <span className="text-[10px] font-bold text-emerald-700 block">
                        Grade {attempt.grade}
                      </span>
                    </div>

                    <Link
                      href={`/results/${attempt.id}`}
                      className="px-3 py-1.5 rounded-lg border border-slate-200 hover:bg-slate-50 font-semibold text-slate-700 transition-colors"
                    >
                      View Report
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </AppShell>
  );
}
