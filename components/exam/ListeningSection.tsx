"use client";

import { useState, useEffect } from "react";
import { useExamStore } from "@/store/exam-store";
import { QuestionNavigator } from "./QuestionNavigator";
import { getSpeechManager } from "@/lib/speech";
import {
  Volume2,
  Play,
  Pause,
  RotateCcw,
  HelpCircle,
  Eye,
  EyeOff,
} from "lucide-react";

export function ListeningSection() {
  const {
    mockTest,
    currentQuestionIndex,
    answers,
    setListeningAnswer,
    mode,
  } = useExamStore();

  const [isPlaying, setIsPlaying] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [currentSpeaker, setCurrentSpeaker] = useState<string | undefined>();
  const [showScriptPreview, setShowScriptPreview] = useState(false);
  const [playbackRate, setPlaybackRate] = useState(1.0);

  const speechManager = getSpeechManager();

  useEffect(() => {
    speechManager.setListener((state) => {
      setIsPlaying(state.isPlaying);
      setIsPaused(state.isPaused);
      setCurrentSpeaker(state.currentSpeaker);
    });

    return () => {
      speechManager.stop();
    };
  }, [speechManager]);

  if (!mockTest) return null;
  const listeningData = mockTest.sections.listening;
  const questions = listeningData.questions;
  const currentQ = questions[currentQuestionIndex];
  if (!currentQ) return null;

  const selectedAnswer = answers.listening[currentQ.id];
  const itemIds = questions.map((q) => q.id);

  const handlePlayAudio = () => {
    if (isPaused) {
      speechManager.resume();
    } else {
      speechManager.playDialogue(listeningData.dialogue, playbackRate);
    }
  };

  const handlePauseAudio = () => {
    speechManager.pause();
  };

  const handleStopAudio = () => {
    speechManager.stop();
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
      {/* Listening Audio Console & Question (3 cols) */}
      <div className="lg:col-span-3 space-y-5">
        {/* Audio Player Card */}
        <div className="rounded-xl border border-[#E2E8F0] bg-white p-6 shadow-xs">
          <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-slate-100">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#2457D6]/10 text-[#2457D6]">
                <Volume2 className="h-4 w-4" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-[#172033]">
                  {listeningData.title}
                </h3>
                <p className="text-xs text-slate-500">
                  SpeechSynthesis Audio Track
                </p>
              </div>
            </div>

            {/* Playback rate selector */}
            <div className="flex items-center gap-2 text-xs">
              <span className="text-slate-500 font-medium">Speed:</span>
              {[0.8, 1.0, 1.2].map((rate) => (
                <button
                  key={rate}
                  onClick={() => setPlaybackRate(rate)}
                  className={`px-2 py-0.5 rounded text-xs font-mono font-semibold transition-colors ${
                    playbackRate === rate
                      ? "bg-[#2457D6] text-white"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }`}
                >
                  {rate}x
                </button>
              ))}
            </div>
          </div>

          <div className="py-4 space-y-3">
            <p className="text-xs sm:text-sm text-slate-600 bg-slate-50 p-3 rounded-lg border border-slate-200/80">
              <strong>Listening Context:</strong> {listeningData.context}
            </p>

            {/* Animated Equalizer Waveform Indicator */}
            <div className="rounded-xl border border-slate-200 bg-slate-900 p-4 text-white flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1 h-8">
                  {[40, 70, 30, 90, 50, 80, 20, 60, 100, 45].map((h, i) => (
                    <span
                      key={i}
                      style={{ height: isPlaying && !isPaused ? `${h}%` : "20%" }}
                      className={`w-1 rounded-full transition-all duration-300 ${
                        isPlaying && !isPaused
                          ? "bg-blue-400 animate-pulse"
                          : "bg-slate-600"
                      }`}
                    />
                  ))}
                </div>

                <div>
                  <div className="text-xs font-semibold text-slate-300">
                    {isPlaying
                      ? isPaused
                        ? "Audio Paused"
                        : currentSpeaker
                        ? `Speaking: ${currentSpeaker}`
                        : "Playing Audio Dialogue..."
                      : "Audio Ready"}
                  </div>
                  <div className="text-[11px] text-slate-400">
                    {isPlaying
                      ? "Listen carefully to dates, roles, and action items."
                      : "Click play to listen to the workplace dialogue."}
                  </div>
                </div>
              </div>

              {/* Player Controls */}
              <div className="flex items-center gap-2">
                {!isPlaying || isPaused ? (
                  <button
                    onClick={handlePlayAudio}
                    className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#2457D6] hover:bg-[#1d45ab] text-white text-xs font-semibold shadow-xs transition-all"
                  >
                    <Play className="h-3.5 w-3.5 fill-white" />
                    <span>{isPaused ? "Resume" : "Play Audio"}</span>
                  </button>
                ) : (
                  <button
                    onClick={handlePauseAudio}
                    className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-amber-600 hover:bg-amber-700 text-white text-xs font-semibold shadow-xs transition-all"
                  >
                    <Pause className="h-3.5 w-3.5 fill-white" />
                    <span>Pause</span>
                  </button>
                )}

                <button
                  onClick={handleStopAudio}
                  disabled={!isPlaying}
                  className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 disabled:opacity-40 transition-colors"
                  title="Stop Audio"
                >
                  <RotateCcw className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Exam Mode Disclaimer / Practice Mode Reveal */}
          <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
            <span>
              {mode === "exam"
                ? "Audio transcript is hidden during exam mode and will appear on the final results screen."
                : "Practice mode: You can toggle script visibility for study."}
            </span>

            {mode === "practice" && (
              <button
                onClick={() => setShowScriptPreview(!showScriptPreview)}
                className="flex items-center gap-1 text-xs font-semibold text-[#2457D6] hover:underline"
              >
                {showScriptPreview ? <EyeOff className="h-3.5 w-3.5" /> : <Eye className="h-3.5 w-3.5" />}
                <span>{showScriptPreview ? "Hide Script" : "Show Script"}</span>
              </button>
            )}
          </div>

          {/* Practice Mode Script Box */}
          {mode === "practice" && showScriptPreview && (
            <div className="mt-4 rounded-xl border border-blue-200 bg-blue-50/40 p-4 space-y-2">
              <h5 className="text-xs font-bold text-blue-900 uppercase">
                Practice Script Transcript:
              </h5>
              <div className="space-y-2 text-xs text-slate-700">
                {listeningData.dialogue.map((d, idx) => (
                  <div key={idx} className="flex gap-2">
                    <span className="font-bold text-slate-900 shrink-0">{d.speaker}:</span>
                    <span>{d.text}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Current Question Card */}
        <div className="rounded-xl border border-[#E2E8F0] bg-white p-6 shadow-xs space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <div className="flex items-center gap-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-md bg-[#2457D6]/10 text-xs font-bold text-[#2457D6]">
                Q{currentQuestionIndex + 1}
              </span>
              <span className="text-xs font-medium text-slate-500">
                Question {currentQuestionIndex + 1} of {questions.length}
              </span>
            </div>
          </div>

          <h4 className="text-sm sm:text-base font-semibold text-[#172033] leading-snug">
            {currentQ.prompt}
          </h4>

          {/* Options */}
          <div className="space-y-3">
            {currentQ.options.map((opt, optIdx) => {
              const isSelected = selectedAnswer === optIdx;
              const optionLetters = ["A", "B", "C", "D"];

              return (
                <button
                  key={optIdx}
                  onClick={() => setListeningAnswer(currentQ.id, optIdx)}
                  className={`w-full flex items-start gap-3 p-3 rounded-xl border text-left text-xs sm:text-sm transition-all ${
                    isSelected
                      ? "bg-blue-50/70 border-[#2457D6] text-[#172033] ring-1 ring-[#2457D6] shadow-xs"
                      : "bg-white border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-50/70"
                  }`}
                >
                  <span
                    className={`flex h-6 w-6 items-center justify-center rounded-md text-xs font-bold shrink-0 mt-0.5 transition-colors ${
                      isSelected
                        ? "bg-[#2457D6] text-white"
                        : "bg-slate-100 text-slate-600"
                    }`}
                  >
                    {optionLetters[optIdx]}
                  </span>
                  <span className="font-medium flex-1 leading-snug">
                    {opt}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Practice Mode Explanation */}
          {mode === "practice" && selectedAnswer !== undefined && (
            <div className="mt-4 rounded-xl border border-blue-200 bg-blue-50/50 p-4">
              <div className="flex items-center gap-1.5 text-xs font-bold text-blue-800 mb-1">
                <HelpCircle className="h-4 w-4" />
                <span>Audio Evidence Rationale:</span>
              </div>
              <p className="text-xs text-slate-700 leading-relaxed">
                {currentQ.explanation}
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Palette Navigation (1 col) */}
      <div className="lg:col-span-1">
        <QuestionNavigator
          itemIds={itemIds}
          isAnswered={(id) => answers.listening[id] !== undefined}
        />
      </div>
    </div>
  );
}

