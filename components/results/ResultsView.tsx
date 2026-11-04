"use client";

import { useState } from "react";
import Link from "next/link";
import { TestAttempt, SectionKey } from "@/types/exam";
import { SECTION_ORDER, SECTION_LABELS } from "@/store/exam-store";
import { getMockTestById } from "@/data/mock-tests";
import {
  Trophy,
  Award,
  Clock,
  ArrowRight,
  RotateCcw,
  LayoutDashboard,
  CheckCircle2,
  XCircle,
  Sparkles,
  BookOpen,
  Volume2,
  AlertTriangle,
} from "lucide-react";

interface ResultsViewProps {
  attempt: TestAttempt;
}

export function ResultsView({ attempt }: ResultsViewProps) {
  const [activeTab, setActiveTab] = useState<SectionKey>("grammar");
  const mockTest = getMockTestById(attempt.testId);

  const formatSeconds = (sec: number) => {
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return `${m}m ${s}s`;
  };

  const nextTestNumber = attempt.testNumber < 15 ? attempt.testNumber + 1 : 1;
  const nextTestId = `mock-${nextTestNumber < 10 ? "0" + nextTestNumber : nextTestNumber}`;

  return (
    <div className="space-y-8 py-4">
      {/* 1. Score Hero Banner */}
      <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xs">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          {/* Left: Overall Metric & Grade */}
          <div className="flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
            <div className="relative flex h-28 w-28 items-center justify-center rounded-2xl bg-gradient-to-br from-[#2457D6] to-[#14264B] text-white shadow-md">
              <div className="text-center">
                <span className="font-heading text-4xl font-extrabold tracking-tight">
                  {attempt.overallScore}
                </span>
                <span className="text-xs text-blue-200 block font-medium">/ 100</span>
              </div>
            </div>

            <div className="space-y-1.5">
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
                <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-0.5 text-xs font-bold text-emerald-700 border border-emerald-200">
                  <Award className="h-3.5 w-3.5" /> Grade {attempt.grade}
                </span>
                <span className="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2.5 py-0.5 text-xs font-bold text-blue-700 border border-blue-200">
                  <Trophy className="h-3.5 w-3.5" /> Top {100 - attempt.percentileEstimate}%
                </span>
                <span className="text-xs text-slate-500 font-medium">
                  {attempt.difficulty} Level
                </span>
              </div>

              <h1 className="font-heading text-xl sm:text-2xl font-extrabold text-[#172033]">
                {attempt.testTitle}
              </h1>

              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 text-xs text-slate-500 pt-1">
                <span className="flex items-center gap-1">
                  <Clock className="h-3.5 w-3.5" /> Time: {formatSeconds(attempt.timeSpentSeconds)}
                </span>
                <span>•</span>
                <span>Date: {new Date(attempt.completedAt).toLocaleDateString()}</span>
                <span>•</span>
                <span className="capitalize">{attempt.mode} Mode</span>
              </div>
            </div>
          </div>

          {/* Right: Quick Actions */}
          <div className="flex flex-wrap items-center justify-center gap-2.5">
            <Link
              href={`/exam/${attempt.testId}?mode=${attempt.mode}`}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-slate-300 bg-white hover:bg-slate-50 text-xs sm:text-sm font-semibold text-slate-700 transition-colors shadow-xs"
            >
              <RotateCcw className="h-4 w-4" />
              <span>Retake Test</span>
            </Link>

            <Link
              href={`/exam/${nextTestId}`}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#2457D6] hover:bg-[#1d45ab] text-xs sm:text-sm font-semibold text-white transition-all shadow-xs hover:shadow"
            >
              <span>Next Mock Test</span>
              <ArrowRight className="h-4 w-4" />
            </Link>

            <Link
              href="/"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-xs sm:text-sm font-semibold text-slate-700 transition-colors"
            >
              <LayoutDashboard className="h-4 w-4" />
              <span>Dashboard</span>
            </Link>
          </div>
        </div>

        {/* Strengths & Weakness Callouts */}
        <div className="mt-6 pt-6 border-t border-slate-100 grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
          <div className="rounded-xl bg-emerald-50/70 p-3.5 border border-emerald-200">
            <span className="font-bold text-emerald-900 block mb-1 flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-emerald-600" />
              Strongest Competency:
            </span>
            <p className="text-emerald-800 font-medium">{attempt.strongestSkill}</p>
          </div>

          <div className="rounded-xl bg-amber-50/70 p-3.5 border border-amber-200">
            <span className="font-bold text-amber-900 block mb-1 flex items-center gap-1.5">
              <AlertTriangle className="h-4 w-4 text-amber-600" />
              Growth Opportunity:
            </span>
            <p className="text-amber-800 font-medium">{attempt.weakestSkill}</p>
          </div>

          <div className="rounded-xl bg-blue-50/70 p-3.5 border border-blue-200">
            <span className="font-bold text-blue-900 block mb-1 flex items-center gap-1.5">
              <Sparkles className="h-4 w-4 text-[#2457D6]" />
              Strategic Advice:
            </span>
            <p className="text-blue-800 line-clamp-2">
              {attempt.recommendations[0] || "Continue regular timed practice."}
            </p>
          </div>
        </div>
      </div>

      {/* 2. Section Performance Cards (6 Grid) */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
        {SECTION_ORDER.map((secKey) => {
          const sScore = attempt.sectionScores[secKey];
          const isActive = activeTab === secKey;
          if (!sScore) return null;

          return (
            <button
              key={secKey}
              onClick={() => setActiveTab(secKey)}
              className={`text-left p-4 rounded-xl border transition-all ${
                isActive
                  ? "bg-white border-[#2457D6] ring-2 ring-[#2457D6]/20 shadow-xs"
                  : "bg-white border-slate-200 hover:border-slate-300"
              }`}
            >
              <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
                <span className="font-mono">{Math.round(sScore.weight * 100)}% Weight</span>
                <span
                  className={`font-bold ${
                    sScore.percentage >= 75
                      ? "text-emerald-600"
                      : sScore.percentage >= 60
                      ? "text-blue-600"
                      : "text-amber-600"
                  }`}
                >
                  {sScore.percentage}%
                </span>
              </div>

              <div className="font-bold text-xs sm:text-sm text-[#172033] truncate">
                {SECTION_LABELS[secKey]}
              </div>

              {/* Mini progress bar */}
              <div className="mt-2 h-1.5 w-full rounded-full bg-slate-100 overflow-hidden">
                <div
                  style={{ width: `${sScore.percentage}%` }}
                  className={`h-full rounded-full ${
                    sScore.percentage >= 75
                      ? "bg-emerald-500"
                      : sScore.percentage >= 60
                      ? "bg-[#2457D6]"
                      : "bg-amber-500"
                  }`}
                />
              </div>

              <div className="mt-2 text-[10px] text-slate-400">
                Contribution: +{sScore.weightedScore} pts
              </div>
            </button>
          );
        })}
      </div>

      {/* 3. Detailed Review Section by Active Tab */}
      <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xs space-y-6">
        {/* Section Header */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-100">
          <div>
            <h3 className="font-heading text-lg font-bold text-[#172033]">
              {SECTION_LABELS[activeTab]} — Detailed Analysis
            </h3>
            <p className="text-xs text-slate-500">
              {attempt.sectionScores[activeTab]?.summary}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-bold bg-slate-100 px-3 py-1 rounded-lg text-slate-700">
              Score: {attempt.sectionScores[activeTab]?.percentage}%
            </span>
          </div>
        </div>

        {/* TAB 1: GRAMMAR REVIEW */}
        {activeTab === "grammar" && mockTest && (
          <div className="space-y-6">
            {mockTest.sections.grammar.map((q, idx) => {
              const userChoice = attempt.answers.grammar[q.id];
              const isCorrect = userChoice === q.correctAnswer;
              const optionLetters = ["A", "B", "C", "D"];

              return (
                <div
                  key={q.id}
                  className={`rounded-xl border p-5 transition-all ${
                    isCorrect
                      ? "border-emerald-200 bg-emerald-50/20"
                      : "border-red-200 bg-red-50/20"
                  }`}
                >
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-2">
                      <span
                        className={`flex h-6 w-6 items-center justify-center rounded-md text-xs font-bold text-white ${
                          isCorrect ? "bg-emerald-600" : "bg-red-600"
                        }`}
                      >
                        {idx + 1}
                      </span>
                      <span className="text-xs font-semibold text-slate-700">
                        {q.topic}
                      </span>
                    </div>

                    <span
                      className={`inline-flex items-center gap-1 text-xs font-bold ${
                        isCorrect ? "text-emerald-700" : "text-red-700"
                      }`}
                    >
                      {isCorrect ? (
                        <>
                          <CheckCircle2 className="h-4 w-4" /> Correct
                        </>
                      ) : (
                        <>
                          <XCircle className="h-4 w-4" /> Incorrect
                        </>
                      )}
                    </span>
                  </div>

                  <p className="text-sm font-medium text-[#172033] mb-4">
                    {q.prompt}
                  </p>

                  {/* Options */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                    {q.options.map((opt, optIdx) => {
                      const isUser = userChoice === optIdx;
                      const isAns = q.correctAnswer === optIdx;

                      return (
                        <div
                          key={optIdx}
                          className={`p-2.5 rounded-lg border flex items-center gap-2 ${
                            isAns
                              ? "bg-emerald-100/70 border-emerald-300 text-emerald-950 font-semibold"
                              : isUser
                              ? "bg-red-100/70 border-red-300 text-red-950 font-semibold"
                              : "bg-white border-slate-200 text-slate-600"
                          }`}
                        >
                          <span className="h-5 w-5 flex items-center justify-center rounded text-[10px] bg-slate-200/70 font-bold shrink-0">
                            {optionLetters[optIdx]}
                          </span>
                          <span className="flex-1">{opt}</span>
                          {isAns && <span className="text-[10px] text-emerald-700 font-bold">Key</span>}
                          {isUser && !isAns && <span className="text-[10px] text-red-700 font-bold">Your Choice</span>}
                        </div>
                      );
                    })}
                  </div>

                  {/* Explanation */}
                  <div className="mt-3 pt-3 border-t border-slate-200/60 text-xs text-slate-600">
                    <strong className="text-slate-800">Grammar Rationale:</strong> {q.explanation}
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* TAB 2: WRITING REVIEW */}
        {activeTab === "writing" && mockTest && (
          <div className="space-y-8">
            {mockTest.sections.writing.map((task, idx) => {
              const text = attempt.answers.writing[task.id] || "";
              const feedback = attempt.writingFeedback[task.id];

              return (
                <div key={task.id} className="rounded-xl border border-slate-200 p-6 space-y-5">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                    <h4 className="text-sm font-bold text-[#172033]">
                      Task {idx + 1}: {task.prompt}
                    </h4>
                    <span className="text-xs font-mono font-bold bg-blue-50 text-[#2457D6] px-2.5 py-1 rounded-md">
                      Score: {feedback?.totalScore || 0}/100
                    </span>
                  </div>

                  {/* Rubric Breakdown Grid */}
                  {feedback && (
                    <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 text-center text-xs">
                      <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                        <span className="text-slate-500 block text-[10px]">Grammar</span>
                        <span className="font-bold text-[#172033] text-sm">{feedback.grammarScore}/20</span>
                      </div>
                      <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                        <span className="text-slate-500 block text-[10px]">Clarity</span>
                        <span className="font-bold text-[#172033] text-sm">{feedback.clarityScore}/20</span>
                      </div>
                      <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                        <span className="text-slate-500 block text-[10px]">Tone</span>
                        <span className="font-bold text-[#172033] text-sm">{feedback.professionalToneScore}/20</span>
                      </div>
                      <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                        <span className="text-slate-500 block text-[10px]">Relevance</span>
                        <span className="font-bold text-[#172033] text-sm">{feedback.relevanceScore}/20</span>
                      </div>
                      <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                        <span className="text-slate-500 block text-[10px]">Completeness</span>
                        <span className="font-bold text-[#172033] text-sm">{feedback.completenessScore}/20</span>
                      </div>
                    </div>
                  )}

                  {/* Student Submission */}
                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-1.5">
                      Your Submitted Response ({feedback?.wordCount || 0} words):
                    </label>
                    <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-xs sm:text-sm text-slate-800 whitespace-pre-wrap font-sans leading-relaxed">
                      {text || <span className="italic text-slate-400">No response submitted.</span>}
                    </div>
                  </div>

                  {/* Strengths and Suggestions */}
                  {feedback && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                      <div className="rounded-lg bg-emerald-50/70 p-3.5 border border-emerald-200 space-y-1">
                        <span className="font-bold text-emerald-900 block">Observed Strengths:</span>
                        <ul className="list-disc list-inside space-y-1 text-emerald-800">
                          {feedback.strengths.map((str, sIdx) => (
                            <li key={sIdx}>{str}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="rounded-lg bg-amber-50/70 p-3.5 border border-amber-200 space-y-1">
                        <span className="font-bold text-amber-900 block">Areas for Improvement:</span>
                        <ul className="list-disc list-inside space-y-1 text-amber-800">
                          {feedback.suggestions.map((sug, sIdx) => (
                            <li key={sIdx}>{sug}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}

                  {/* Model Solution Comparison */}
                  <div className="rounded-xl border border-blue-200 bg-blue-50/40 p-4 space-y-2">
                    <span className="text-xs font-bold text-blue-900 flex items-center gap-1.5">
                      <Sparkles className="h-4 w-4 text-[#2457D6]" />
                      High-Scoring Corporate Model Response:
                    </span>
                    <pre className="text-xs text-slate-800 whitespace-pre-wrap font-sans leading-relaxed bg-white p-3 rounded-lg border border-blue-100">
                      {task.modelResponse}
                    </pre>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* TAB 3: SITUATIONAL REVIEW */}
        {activeTab === "situational" && mockTest && (
          <div className="space-y-6">
            {mockTest.sections.situational.map((sc, idx) => {
              const ans = attempt.answers.situational[sc.id] || {};
              const isBest = ans.selectedOption === sc.bestOption;
              const optionLetters = ["A", "B", "C", "D"];

              return (
                <div key={sc.id} className="rounded-xl border border-slate-200 p-5 space-y-4">
                  <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                    <span className="text-xs font-bold text-[#172033]">
                      Scenario {idx + 1}
                    </span>
                    <span
                      className={`text-xs font-bold ${
                        isBest ? "text-emerald-600" : "text-amber-600"
                      }`}
                    >
                      {isBest ? "Optimal Strategy Selected" : "Alternative Strategy Selected"}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                    {sc.context}
                  </p>

                  {/* Chosen Option vs Best Option */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    <div className="p-3 rounded-lg bg-slate-50 border border-slate-200">
                      <span className="font-bold text-slate-700 block mb-1">Your Selected Action:</span>
                      <p className="text-slate-800">
                        {ans.selectedOption !== undefined
                          ? `Option ${optionLetters[ans.selectedOption]}: ${sc.options[ans.selectedOption]}`
                          : "No option selected."}
                      </p>
                    </div>

                    <div className="p-3 rounded-lg bg-emerald-50 border border-emerald-200">
                      <span className="font-bold text-emerald-900 block mb-1">Recommended Best Course:</span>
                      <p className="text-emerald-950">
                        Option {optionLetters[sc.bestOption]}: {sc.options[sc.bestOption]}
                      </p>
                    </div>
                  </div>

                  {/* Written message review */}
                  <div className="pt-2 border-t border-slate-100 space-y-2 text-xs">
                    <span className="font-bold text-slate-700 block">Your Written Message:</span>
                    <p className="italic text-slate-700 bg-slate-50 p-2.5 rounded-lg border border-slate-200">
                      {ans.writtenResponse ? <>&ldquo;{ans.writtenResponse}&rdquo;</> : "No written response submitted."}
                    </p>
                    <span className="font-bold text-slate-700 block pt-1">Model Exemplary Phrasing:</span>
                    <p className="text-slate-700 bg-blue-50/50 p-2.5 rounded-lg border border-blue-200 text-blue-950">
                      &ldquo;{sc.modelWrittenResponse}&rdquo;
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* TAB 4: READING REVIEW */}
        {activeTab === "reading" && mockTest && (
          <div className="space-y-6">
            {/* Passage Collapsible Box */}
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 space-y-3">
              <div className="flex items-center justify-between pb-2 border-b border-slate-200">
                <h4 className="text-sm font-bold text-[#172033] flex items-center gap-2">
                  <BookOpen className="h-4 w-4 text-[#2457D6]" />
                  {mockTest.sections.reading.passageTitle}
                </h4>
                <span className="text-xs text-slate-500">
                  {mockTest.sections.reading.wordCount} words
                </span>
              </div>
              <div className="text-xs text-slate-700 space-y-2 leading-relaxed">
                {mockTest.sections.reading.passageContent.split("\n\n").map((para, pIdx) => (
                  <p key={pIdx}>{para}</p>
                ))}
              </div>
            </div>

            {/* Questions Review */}
            <div className="space-y-4">
              {mockTest.sections.reading.questions.map((q, idx) => {
                const userChoice = attempt.answers.reading[q.id];
                const isCorrect = userChoice === q.correctAnswer;
                const optionLetters = ["A", "B", "C", "D"];

                return (
                  <div
                    key={q.id}
                    className={`rounded-xl border p-4 ${
                      isCorrect ? "border-emerald-200 bg-emerald-50/20" : "border-red-200 bg-red-50/20"
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="text-xs font-bold text-[#172033]">
                        Question {idx + 1} ({q.questionType})
                      </span>
                      <span className={`text-xs font-bold ${isCorrect ? "text-emerald-700" : "text-red-700"}`}>
                        {isCorrect ? "Correct" : "Incorrect"}
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm font-medium text-[#172033] mb-3">{q.prompt}</p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                      {q.options.map((opt, optIdx) => (
                        <div
                          key={optIdx}
                          className={`p-2 rounded-lg border text-xs ${
                            optIdx === q.correctAnswer
                              ? "bg-emerald-100 border-emerald-300 font-bold text-emerald-950"
                              : optIdx === userChoice
                              ? "bg-red-100 border-red-300 font-bold text-red-950"
                              : "bg-white border-slate-200 text-slate-600"
                          }`}
                        >
                          <span className="mr-1.5 font-bold">{optionLetters[optIdx]}.</span>
                          {opt}
                        </div>
                      ))}
                    </div>

                    <p className="mt-2.5 text-xs text-slate-600 border-t border-slate-200/60 pt-2">
                      <strong>Analysis:</strong> {q.explanation}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* TAB 5: LISTENING REVIEW */}
        {activeTab === "listening" && mockTest && (
          <div className="space-y-6">
            {/* Full Transcript Revealed in Review Mode */}
            <div className="rounded-xl border border-blue-200 bg-blue-50/40 p-5 space-y-3">
              <div className="flex items-center gap-2 pb-2 border-b border-blue-200">
                <Volume2 className="h-4 w-4 text-[#2457D6]" />
                <h4 className="text-xs sm:text-sm font-bold text-blue-950">
                  Audio Script Transcript (Revealed in Review)
                </h4>
              </div>
              <div className="space-y-2 text-xs text-slate-800">
                {mockTest.sections.listening.dialogue.map((d, dIdx) => (
                  <div key={dIdx} className="flex gap-2">
                    <span className="font-bold text-[#14264B] shrink-0">{d.speaker}:</span>
                    <span>{d.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Questions Review */}
            <div className="space-y-4">
              {mockTest.sections.listening.questions.map((q, idx) => {
                const userChoice = attempt.answers.listening[q.id];
                const isCorrect = userChoice === q.correctAnswer;
                const optionLetters = ["A", "B", "C", "D"];

                return (
                  <div
                    key={q.id}
                    className={`rounded-xl border p-4 ${
                      isCorrect ? "border-emerald-200 bg-emerald-50/20" : "border-red-200 bg-red-50/20"
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="text-xs font-bold text-[#172033]">
                        Question {idx + 1}
                      </span>
                      <span className={`text-xs font-bold ${isCorrect ? "text-emerald-700" : "text-red-700"}`}>
                        {isCorrect ? "Correct" : "Incorrect"}
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm font-medium text-[#172033] mb-3">{q.prompt}</p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                      {q.options.map((opt, optIdx) => (
                        <div
                          key={optIdx}
                          className={`p-2 rounded-lg border text-xs ${
                            optIdx === q.correctAnswer
                              ? "bg-emerald-100 border-emerald-300 font-bold text-emerald-950"
                              : optIdx === userChoice
                              ? "bg-red-100 border-red-300 font-bold text-red-950"
                              : "bg-white border-slate-200 text-slate-600"
                          }`}
                        >
                          <span className="mr-1.5 font-bold">{optionLetters[optIdx]}.</span>
                          {opt}
                        </div>
                      ))}
                    </div>

                    <p className="mt-2.5 text-xs text-slate-600 border-t border-slate-200/60 pt-2">
                      <strong>Spoken Evidence:</strong> {q.explanation}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* TAB 6: SPEAKING REVIEW */}
        {activeTab === "speaking" && mockTest && (
          <div className="space-y-8">
            {mockTest.sections.speaking.map((task, idx) => {
              const spAns = attempt.answers.speaking[task.id] || {};
              const feedback = attempt.speakingFeedback[task.id];

              return (
                <div key={task.id} className="rounded-xl border border-slate-200 p-6 space-y-5">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                    <h4 className="text-sm font-bold text-[#172033]">
                      Task {idx + 1}: {task.prompt}
                    </h4>
                    <span className="text-xs font-mono font-bold bg-blue-50 text-[#2457D6] px-2.5 py-1 rounded-md">
                      Score: {feedback?.totalScore || 0}/100
                    </span>
                  </div>

                  {/* Rubric Breakdown Grid */}
                  {feedback && (
                    <div className="grid grid-cols-2 sm:grid-cols-6 gap-2 text-center text-xs">
                      <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                        <span className="text-slate-500 block text-[10px]">Fluency</span>
                        <span className="font-bold text-[#172033] text-sm">{feedback.fluencyScore}/20</span>
                      </div>
                      <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                        <span className="text-slate-500 block text-[10px]">Grammar</span>
                        <span className="font-bold text-[#172033] text-sm">{feedback.grammarScore}/20</span>
                      </div>
                      <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                        <span className="text-slate-500 block text-[10px]">Vocabulary</span>
                        <span className="font-bold text-[#172033] text-sm">{feedback.vocabularyScore}/15</span>
                      </div>
                      <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                        <span className="text-slate-500 block text-[10px]">Coherence</span>
                        <span className="font-bold text-[#172033] text-sm">{feedback.coherenceScore}/20</span>
                      </div>
                      <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                        <span className="text-slate-500 block text-[10px]">Relevance</span>
                        <span className="font-bold text-[#172033] text-sm">{feedback.relevanceScore}/15</span>
                      </div>
                      <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                        <span className="text-slate-500 block text-[10px]">Structure</span>
                        <span className="font-bold text-[#172033] text-sm">{feedback.structureScore}/10</span>
                      </div>
                    </div>
                  )}

                  {/* Audio Player */}
                  {(spAns.audioBlobUrl || spAns.audioDataUrl) && (
                    <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                      <span className="text-xs font-bold text-slate-700 block mb-2">
                        Your Recorded Speech Audio:
                      </span>
                      <audio controls src={spAns.audioBlobUrl || spAns.audioDataUrl} className="w-full" />
                    </div>
                  )}

                  {/* Transcript */}
                  {spAns.transcript && (
                    <div className="space-y-1 text-xs">
                      <span className="font-bold text-slate-700 block">Your Speech Transcript:</span>
                      <p className="p-3 rounded-lg bg-slate-50 border border-slate-200 text-slate-800 italic">
                        &ldquo;{spAns.transcript}&rdquo;
                      </p>
                    </div>
                  )}

                  {/* Model Speech Script */}
                  <div className="rounded-xl border border-blue-200 bg-blue-50/40 p-4 space-y-2">
                    <span className="text-xs font-bold text-blue-900 flex items-center gap-1.5">
                      <Sparkles className="h-4 w-4 text-[#2457D6]" />
                      Exemplary Spoken Delivery Model:
                    </span>
                    <p className="text-xs text-slate-800 italic leading-relaxed bg-white p-3 rounded-lg border border-blue-100">
                      &ldquo;{task.modelTranscript}&rdquo;
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

