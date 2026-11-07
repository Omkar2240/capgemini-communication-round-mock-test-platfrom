"use client";

import { useState, useEffect, useRef } from "react";
import { useExamStore } from "@/store/exam-store";
import { QuestionNavigator } from "./QuestionNavigator";
import { AudioRecordingService } from "@/lib/audio-recorder";
import {
  Mic,
  Square,
  RotateCcw,
  Sparkles,
  AlertCircle,
  Clock,
  CheckCircle,
  FileText,
} from "lucide-react";

export function SpeakingSection() {
  const {
    mockTest,
    currentQuestionIndex,
    setCurrentQuestionIndex,
    answers,
    setSpeakingAnswer,
    mode,
  } = useExamStore();

  const [phase, setPhase] = useState<"idle" | "prep" | "recording" | "review">("idle");
  const [prepSecondsLeft, setPrepSecondsLeft] = useState(30);
  const [recordSecondsLeft, setRecordSecondsLeft] = useState(90);
  const [micVolume, setMicVolume] = useState(0);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const recorderRef = useRef<AudioRecordingService | null>(null);
  const prepTimerRef = useRef<NodeJS.Timeout | null>(null);
  const recordTimerRef = useRef<NodeJS.Timeout | null>(null);

  const tasks = mockTest?.sections?.speaking || [];
  const safeIndex = Math.min(Math.max(0, currentQuestionIndex), Math.max(0, tasks.length - 1));

  useEffect(() => {
    if (tasks.length > 0 && currentQuestionIndex !== safeIndex) {
      setCurrentQuestionIndex(safeIndex);
    }
  }, [currentQuestionIndex, safeIndex, tasks.length, setCurrentQuestionIndex]);

  const currentTask = tasks[safeIndex];
  const currentAnswer = currentTask ? answers.speaking[currentTask.id] || {} : {};
  const itemIds = tasks.map((t) => t.id);

  // Initialize recorder service
  useEffect(() => {
    recorderRef.current = new AudioRecordingService();
    return () => {
      if (recorderRef.current) recorderRef.current.cleanup();
      if (prepTimerRef.current) clearInterval(prepTimerRef.current);
      if (recordTimerRef.current) clearInterval(recordTimerRef.current);
    };
  }, []);

  // Reset state when switching tasks
  useEffect(() => {
    if (!currentTask) return;
    setPhase(currentAnswer.audioBlobUrl || currentAnswer.audioDataUrl ? "review" : "idle");
    setPrepSecondsLeft(30);
    setRecordSecondsLeft(90);
    setErrorMessage(null);
  }, [currentTask, currentAnswer.audioBlobUrl, currentAnswer.audioDataUrl]);

  if (!mockTest || !currentTask) return null;

  // Start 30s preparation phase
  const handleStartPrep = () => {
    setPhase("prep");
    setPrepSecondsLeft(30);
    setErrorMessage(null);

    prepTimerRef.current = setInterval(() => {
      setPrepSecondsLeft((prev) => {
        if (prev <= 1) {
          if (prepTimerRef.current) clearInterval(prepTimerRef.current);
          handleStartRecording();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  // Start 90s recording phase
  const handleStartRecording = async () => {
    if (prepTimerRef.current) clearInterval(prepTimerRef.current);
    setPhase("recording");
    setRecordSecondsLeft(90);

    if (!recorderRef.current) {
      recorderRef.current = new AudioRecordingService();
    }

    const started = await recorderRef.current.startRecording((vol) => {
      setMicVolume(vol);
    });

    if (!started) {
      setErrorMessage("Could not access microphone. Please ensure microphone permissions are granted in your browser.");
      setPhase("idle");
      return;
    }

    recordTimerRef.current = setInterval(() => {
      setRecordSecondsLeft((prev) => {
        if (prev <= 1) {
          handleStopRecording();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  // Stop recording and save audio
  const handleStopRecording = async () => {
    if (recordTimerRef.current) clearInterval(recordTimerRef.current);
    if (!recorderRef.current) return;

    try {
      const result = await recorderRef.current.stopRecording();
      setPhase("review");
      setSpeakingAnswer(currentTask.id, {
        audioBlobUrl: result.blobUrl,
        audioDataUrl: result.dataUrl,
        durationSeconds: result.durationSeconds,
      });
    } catch (err) {
      console.error(err);
      setErrorMessage("Recording could not be finalized. Please try again.");
      setPhase("idle");
    }
  };

  const handleRetakeRecording = () => {
    setPhase("idle");
    setPrepSecondsLeft(30);
    setRecordSecondsLeft(90);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
      {/* Speaking Studio (3 cols) */}
      <div className="lg:col-span-3 space-y-5">
        {/* Topic Card */}
        <div className="rounded-xl border border-[#E2E8F0] bg-white p-6 shadow-xs">
          <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-slate-100">
            <div className="flex items-center gap-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-md bg-[#2457D6]/10 text-xs font-bold text-[#2457D6]">
                Task {safeIndex + 1}
              </span>
              <span className="text-xs font-medium text-slate-500">
                Spoken Communication {safeIndex + 1} of {tasks.length}
              </span>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono text-slate-500">
              <span>30s Prep</span>
              <span>•</span>
              <span>90s Speech</span>
            </div>
          </div>

          <div className="py-4 space-y-3">
            <h3 className="text-base sm:text-lg font-bold text-[#172033] leading-snug">
              {currentTask.prompt}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 bg-slate-50 p-3 rounded-lg border border-slate-200/80">
              <strong>Context & Perspective:</strong> {currentTask.context}
            </p>
          </div>

          {/* Key focus areas */}
          <div className="pt-2 border-t border-slate-100">
            <span className="text-xs font-bold text-slate-700 block mb-2">
              Structured Focus Guidelines:
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {currentTask.keyFocusAreas.map((area, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs text-slate-600">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#2457D6] shrink-0" />
                  <span>{area}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Recording Engine Studio Card */}
        <div className="rounded-xl border border-[#E2E8F0] bg-white p-6 shadow-xs space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#172033] flex items-center gap-2">
              <Mic className="h-4 w-4 text-[#2457D6]" />
              Microphone Simulation Studio
            </h4>
            <span className="text-xs font-medium text-slate-400">
              Browser MediaRecorder
            </span>
          </div>

          {errorMessage && (
            <div className="rounded-lg bg-red-50 p-3 border border-red-200 text-xs text-red-700 flex items-center gap-2">
              <AlertCircle className="h-4 w-4 shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}

          {/* PHASE 1: IDLE */}
          {phase === "idle" && (
            <div className="py-6 flex flex-col items-center justify-center text-center space-y-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-50 text-[#2457D6] border-2 border-blue-200 shadow-xs">
                <Mic className="h-8 w-8" />
              </div>
              <div className="max-w-md">
                <h4 className="text-sm font-bold text-[#172033]">
                  Ready to Deliver Your Response?
                </h4>
                <p className="text-xs text-slate-500 mt-1">
                  You will have 30 seconds of quiet preparation time, followed automatically by a 90-second recording window.
                </p>
              </div>

              <div className="flex items-center gap-3 pt-2">
                <button
                  onClick={handleStartPrep}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#2457D6] hover:bg-[#1d45ab] text-white text-xs sm:text-sm font-semibold shadow-xs transition-all hover:shadow"
                >
                  <Clock className="h-4 w-4" />
                  <span>Start 30s Prep Timer</span>
                </button>
                <button
                  onClick={handleStartRecording}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs sm:text-sm font-medium transition-colors"
                >
                  <Mic className="h-4 w-4 text-red-600" />
                  <span>Skip Prep & Record Now</span>
                </button>
              </div>
            </div>
          )}

          {/* PHASE 2: PREPARATION (30s) */}
          {phase === "prep" && (
            <div className="py-6 flex flex-col items-center justify-center text-center space-y-4 bg-amber-50/50 rounded-xl border border-amber-200 p-6">
              <div className="text-amber-800 font-mono text-4xl font-extrabold tracking-tight">
                00:{String(prepSecondsLeft).padStart(2, "0")}
              </div>
              <div>
                <h4 className="text-sm font-bold text-amber-900">
                  Preparation Phase — Organize Your Thoughts
                </h4>
                <p className="text-xs text-amber-700 mt-1 max-w-md">
                  Outline your core thesis, two supporting arguments, and concise conclusion. Recording will begin automatically when the timer reaches zero.
                </p>
              </div>
              <button
                onClick={handleStartRecording}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-red-600 hover:bg-red-700 text-white text-xs font-semibold shadow-xs transition-all"
              >
                <Mic className="h-3.5 w-3.5" />
                <span>Begin Recording Immediately</span>
              </button>
            </div>
          )}

          {/* PHASE 3: RECORDING (90s) */}
          {phase === "recording" && (
            <div className="py-6 flex flex-col items-center justify-center text-center space-y-4 bg-red-50/50 rounded-xl border border-red-200 p-6">
              <div className="flex items-center gap-2 text-red-600 animate-pulse">
                <span className="h-3 w-3 rounded-full bg-red-600" />
                <span className="text-xs font-bold uppercase tracking-wider">
                  Live Recording
                </span>
              </div>

              <div className="text-red-700 font-mono text-5xl font-extrabold tracking-tight">
                {Math.floor(recordSecondsLeft / 60)}:{String(recordSecondsLeft % 60).padStart(2, "0")}
              </div>

              {/* Live Volume Meter */}
              <div className="w-full max-w-xs space-y-1">
                <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                  <span>Mic Input</span>
                  <span>{micVolume}%</span>
                </div>
                <div className="h-2 w-full rounded-full bg-slate-200 overflow-hidden">
                  <div
                    style={{ width: `${micVolume}%` }}
                    className="h-full bg-emerald-500 transition-all duration-100"
                  />
                </div>
              </div>

              <p className="text-xs text-slate-600">
                Speak clearly at a conversational cadence. Focus on clear pronunciation and cohesive transitions.
              </p>

              <button
                onClick={handleStopRecording}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-black text-white text-xs sm:text-sm font-semibold shadow-sm transition-all"
              >
                <Square className="h-4 w-4 fill-white" />
                <span>Finish & Save Recording</span>
              </button>
            </div>
          )}

          {/* PHASE 4: REVIEW / PLAYBACK */}
          {phase === "review" && (
            <div className="space-y-4">
              <div className="rounded-xl border border-emerald-200 bg-emerald-50/60 p-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                    <CheckCircle className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-emerald-950">
                      Spoken Response Captured
                    </h4>
                    <p className="text-[11px] text-emerald-800">
                      Duration: {currentAnswer.durationSeconds || "Recorded"} seconds. Listen to review your delivery.
                    </p>
                  </div>
                </div>

                <button
                  onClick={handleRetakeRecording}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-300 bg-white text-slate-700 text-xs font-semibold hover:bg-slate-50 transition-colors shrink-0"
                >
                  <RotateCcw className="h-3.5 w-3.5" />
                  <span>Retake Response</span>
                </button>
              </div>

              {/* Native Audio Playback */}
              {(currentAnswer.audioBlobUrl || currentAnswer.audioDataUrl) && (
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                  <audio
                    controls
                    src={currentAnswer.audioBlobUrl || currentAnswer.audioDataUrl}
                    className="w-full"
                  />
                </div>
              )}
            </div>
          )}

          {/* Optional Transcript Input for Automated Feedback */}
          <div className="pt-4 border-t border-slate-100 space-y-2">
            <div className="flex items-center justify-between">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
                <FileText className="h-3.5 w-3.5 text-[#2457D6]" />
                Optional Speech Transcript for AI Evaluation
              </label>
              <span className="text-[11px] text-slate-400">
                Enables fluency & lexical analysis
              </span>
            </div>

            <textarea
              value={currentAnswer.transcript || ""}
              onChange={(e) =>
                setSpeakingAnswer(currentTask.id, {
                  transcript: e.target.value,
                })
              }
              placeholder="Paste or type a transcript of what you said (or key points) to receive detailed scoring on fluency, vocabulary range, and grammatical coherence..."
              rows={3}
              className="w-full rounded-xl border border-slate-300 p-3 text-xs sm:text-sm text-[#172033] placeholder-slate-400 focus:border-[#2457D6] focus:ring-1 focus:ring-[#2457D6] outline-hidden leading-relaxed"
            />
            <p className="text-[11px] text-slate-500">
              Note: Automated evaluation heuristics inspect your text transcript against structured rubrics. Microphone recordings are saved locally for personal review.
            </p>
          </div>

          {/* Practice Mode Model Transcript */}
          {mode === "practice" && (
            <div className="mt-4 rounded-xl border border-blue-200 bg-blue-50/40 p-4">
              <div className="flex items-center gap-1.5 text-xs font-bold text-blue-900 mb-2">
                <Sparkles className="h-4 w-4 text-[#2457D6]" />
                <span>Exemplary Spoken Script Reference:</span>
              </div>
              <p className="text-xs text-slate-700 italic leading-relaxed bg-white p-3 rounded-lg border border-blue-100">
                &ldquo;{currentTask.modelTranscript}&rdquo;
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Palette Navigation (1 col) */}
      <div className="lg:col-span-1">
        <QuestionNavigator
          itemIds={itemIds}
          isAnswered={(id) => {
            const ans = answers.speaking[id];
            return !!ans && (!!ans.audioBlobUrl || !!ans.audioDataUrl || (!!ans.transcript && ans.transcript.trim().length > 5));
          }}
        />
      </div>
    </div>
  );
}
