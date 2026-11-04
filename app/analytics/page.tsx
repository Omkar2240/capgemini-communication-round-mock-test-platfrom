"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { getStoredAttempts, calculateDashboardStats } from "@/lib/storage";
import { TestAttempt } from "@/types/exam";
import { AppShell } from "@/components/layout/AppShell";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import {
  BarChart3,
  TrendingUp,
  Target,
  Sparkles,
  Play,
  ArrowRight,
} from "lucide-react";

export default function AnalyticsPage() {
  const [attempts, setAttempts] = useState<TestAttempt[]>([]);

  useEffect(() => {
    setAttempts(getStoredAttempts());
  }, []);

  const stats = calculateDashboardStats(attempts);

  // Score progression data over attempts
  const scoreProgressionData = attempts
    .slice()
    .reverse()
    .map((att, idx) => ({
      name: `Attempt ${idx + 1}`,
      testTitle: att.testTitle,
      score: att.overallScore,
      grade: att.grade,
      date: new Date(att.completedAt).toLocaleDateString(),
    }));

  // Skill distribution bar data
  const skillBarData = [
    { skill: "Grammar", score: stats.skillAverages.grammar },
    { skill: "Writing", score: stats.skillAverages.writing },
    { skill: "Situational", score: stats.skillAverages.situational },
    { skill: "Reading", score: stats.skillAverages.reading },
    { skill: "Listening", score: stats.skillAverages.listening },
    { skill: "Speaking", score: stats.skillAverages.speaking },
  ];

  // Derive intelligent recommendations based on real attempt history
  const recommendations: string[] = [];
  if (attempts.length > 0) {
    if (stats.skillAverages.writing < 75) {
      recommendations.push(
        "Your business writing score is currently averaging " +
          stats.skillAverages.writing +
          "%. Practice formal email greetings, bulleted structure, and professional sign-offs."
      );
    }
    if (stats.skillAverages.grammar < 75) {
      recommendations.push(
        "Grammar accuracy is averaging " +
          stats.skillAverages.grammar +
          "%. Review Subject-Verb Agreement with compound subjects and correlative conjunctions."
      );
    }
    if (stats.skillAverages.speaking < 75) {
      recommendations.push(
        "Speaking simulation is at " +
          stats.skillAverages.speaking +
          "%. Aim to sustain your speech for at least 60 seconds with clear introductory hooks."
      );
    }
    if (stats.skillAverages.reading < 75) {
      recommendations.push(
        "Reading comprehension is at " +
          stats.skillAverages.reading +
          "%. Practice skimming dense corporate texts for main organizational themes."
      );
    }
    if (recommendations.length === 0) {
      recommendations.push(
        "Outstanding consistency across all 6 competencies! Challenge yourself with Advanced mock tests (Tests 11–15) to master high-stakes executive scenarios."
      );
    }
  }

  return (
    <AppShell>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-slate-200">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-[#2457D6] uppercase tracking-wider mb-1">
              <BarChart3 className="h-4 w-4" />
              <span>Assessment Intelligence</span>
            </div>
            <h1 className="font-heading text-2xl sm:text-3xl font-extrabold text-[#172033]">
              Performance Analytics & Mastery Trends
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 mt-1 max-w-2xl">
              Telemetry derived from your saved browser attempts. Analyzes skill distributions, trajectory curves, and targeted improvement vectors.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <Link
              href="/mock-tests"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#2457D6] hover:bg-[#1d45ab] text-white text-xs sm:text-sm font-semibold shadow-xs transition-all"
            >
              <Play className="h-3.5 w-3.5 fill-white" />
              <span>Take Another Test</span>
            </Link>
          </div>
        </div>

        {attempts.length === 0 ? (
          /* Empty state */
          <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-12 text-center space-y-4">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-[#2457D6]">
              <TrendingUp className="h-7 w-7" />
            </div>
            <h3 className="font-heading text-lg font-bold text-[#172033]">
              No Assessment Data Logged Yet
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 max-w-md mx-auto">
              Complete your first mock examination to unlock detailed score trends, skill radar graphs, and diagnostic feedback.
            </p>
            <div className="pt-2">
              <Link
                href="/exam/mock-01"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#2457D6] hover:bg-[#1d45ab] text-white text-xs sm:text-sm font-semibold shadow-xs"
              >
                <span>Launch Mock Test 01</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        ) : (
          <div className="space-y-8">
            {/* Top 4 KPI Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-xs">
                <span className="text-xs font-semibold text-slate-500 block">Total Attempts</span>
                <span className="font-heading text-2xl sm:text-3xl font-extrabold text-[#172033] mt-1 block">
                  {stats.totalAttempts}
                </span>
                <span className="text-[11px] text-slate-400 mt-1 block">
                  {stats.completedTestsCount} unique mock test{stats.completedTestsCount === 1 ? "" : "s"}
                </span>
              </div>

              <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-xs">
                <span className="text-xs font-semibold text-slate-500 block">Average Score</span>
                <span className="font-heading text-2xl sm:text-3xl font-extrabold text-[#2457D6] mt-1 block">
                  {stats.averageScore}%
                </span>
                <span className="text-[11px] text-slate-400 mt-1 block">Across all assessments</span>
              </div>

              <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-xs">
                <span className="text-xs font-semibold text-slate-500 block">Best Performance</span>
                <span className="font-heading text-2xl sm:text-3xl font-extrabold text-emerald-600 mt-1 block">
                  {stats.bestScore}%
                </span>
                <span className="text-[11px] text-slate-400 mt-1 block">Personal record</span>
              </div>

              <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-xs">
                <span className="text-xs font-semibold text-slate-500 block">Practice Time</span>
                <span className="font-heading text-2xl sm:text-3xl font-extrabold text-slate-800 mt-1 block">
                  {Math.round(stats.totalPracticeTimeSeconds / 60)}m
                </span>
                <span className="text-[11px] text-slate-400 mt-1 block">Active testing engagement</span>
              </div>
            </div>

            {/* Charts Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Score Progression Trend */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs space-y-4">
                <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                  <h3 className="font-heading text-sm font-bold text-[#172033] flex items-center gap-2">
                    <TrendingUp className="h-4 w-4 text-[#2457D6]" />
                    Score Trajectory Over Attempts
                  </h3>
                  <span className="text-xs font-mono text-slate-400">Target: 85%+</span>
                </div>

                <div className="h-64 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={scoreProgressionData} margin={{ top: 10, right: 20, left: -20, bottom: 0 }}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                      <XAxis dataKey="name" tick={{ fontSize: 11 }} />
                      <YAxis domain={[0, 100]} tick={{ fontSize: 11 }} />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: "#ffffff",
                          borderColor: "#e2e8f0",
                          borderRadius: "0.75rem",
                          fontSize: "12px",
                        }}
                      />
                      <Line
                        type="monotone"
                        dataKey="score"
                        stroke="#2457D6"
                        strokeWidth={3}
                        dot={{ r: 4, fill: "#2457D6" }}
                        activeDot={{ r: 6 }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Skill Distribution Comparison */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs space-y-4">
                <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                  <h3 className="font-heading text-sm font-bold text-[#172033] flex items-center gap-2">
                    <Target className="h-4 w-4 text-[#2457D6]" />
                    Section Mastery Distribution
                  </h3>
                  <span className="text-xs font-mono text-slate-400">Average %</span>
                </div>

                <div className="h-64 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={skillBarData} margin={{ top: 10, right: 20, left: -20, bottom: 0 }}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                      <XAxis dataKey="skill" tick={{ fontSize: 11 }} />
                      <YAxis domain={[0, 100]} tick={{ fontSize: 11 }} />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: "#ffffff",
                          borderColor: "#e2e8f0",
                          borderRadius: "0.75rem",
                          fontSize: "12px",
                        }}
                      />
                      <Bar dataKey="score" fill="#2457D6" radius={[6, 6, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>

            {/* Recommendations & Actionable Insights */}
            <div className="rounded-2xl border border-blue-200 bg-blue-50/50 p-6 shadow-xs space-y-3">
              <div className="flex items-center gap-2 text-sm font-bold text-blue-900">
                <Sparkles className="h-4 w-4 text-[#2457D6]" />
                <span>Empirical Recommendations & Study Plan</span>
              </div>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                {recommendations.map((rec, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#2457D6]/10 text-[#2457D6] text-xs font-bold shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <span>{rec}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </AppShell>
  );
}
