"use client";

import { useEffect } from "react";
import { Clock, AlertTriangle, Pause, Play } from "lucide-react";
import { useExamStore } from "@/store/exam-store";

export function CountdownTimer() {
  const {
    currentSection,
    sectionTimeRemaining,
    mode,
    isTimerRunning,
    tickTimer,
    pauseTimer,
    resumeTimer,
    sectionTimeSpent,
  } = useExamStore();

  useEffect(() => {
    if (!isTimerRunning) return;
    const interval = setInterval(() => {
      tickTimer();
    }, 1000);
    return () => clearInterval(interval);
  }, [isTimerRunning, tickTimer]);

  const remaining = sectionTimeRemaining[currentSection] ?? 600;
  const spent = sectionTimeSpent[currentSection] ?? 0;

  const minutes = Math.floor(remaining / 60);
  const seconds = remaining % 60;
  const timeFormatted = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;

  const spentMinutes = Math.floor(spent / 60);
  const spentSeconds = spent % 60;
  const spentFormatted = `${String(spentMinutes).padStart(2, "0")}:${String(spentSeconds).padStart(2, "0")}`;

  const isLowTime = mode === "exam" && remaining <= 60;
  const isCritical = mode === "exam" && remaining <= 30;

  if (mode === "practice") {
    return (
      <div className="flex items-center gap-2 rounded-lg bg-slate-100 px-3 py-1.5 border border-slate-200 text-xs font-medium text-slate-700">
        <Clock className="h-4 w-4 text-[#2457D6]" />
        <span>Time Elapsed: {spentFormatted}</span>
        <button
          onClick={isTimerRunning ? pauseTimer : resumeTimer}
          className="ml-1 p-1 hover:bg-slate-200 rounded transition-colors"
          title={isTimerRunning ? "Pause practice timer" : "Resume practice timer"}
        >
          {isTimerRunning ? <Pause className="h-3 w-3" /> : <Play className="h-3 w-3" />}
        </button>
      </div>
    );
  }

  return (
    <div
      className={`flex items-center gap-2 rounded-lg px-3 py-1.5 border text-xs sm:text-sm font-semibold transition-all ${
        isCritical
          ? "bg-red-100 border-red-300 text-red-700 animate-pulse shadow-xs"
          : isLowTime
          ? "bg-amber-50 border-amber-300 text-amber-700"
          : "bg-slate-100/90 border-slate-200 text-[#172033]"
      }`}
    >
      {isLowTime ? (
        <AlertTriangle className="h-4 w-4 text-red-600 animate-bounce" />
      ) : (
        <Clock className="h-4 w-4 text-[#2457D6]" />
      )}
      <div className="flex flex-col sm:flex-row sm:items-center sm:gap-1.5">
        <span className="text-[10px] text-slate-500 hidden sm:inline uppercase tracking-wider font-mono">
          Section Time:
        </span>
        <span className="font-mono text-sm tracking-tight">{timeFormatted}</span>
      </div>
    </div>
  );
}

