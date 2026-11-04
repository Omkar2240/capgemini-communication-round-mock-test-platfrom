"use client";

import { useState, useEffect } from "react";
import { getStoredPreferences, saveStoredPreferences, clearAllStoredData, getStoredAttempts } from "@/lib/storage";
import { UserPreferences } from "@/types/exam";
import { AppShell } from "@/components/layout/AppShell";
import {
  Settings,
  Volume2,
  Shield,
  Trash2,
  Download,
  Check,
  AlertTriangle,
} from "lucide-react";

export default function SettingsPage() {
  const [prefs, setPrefs] = useState<UserPreferences>({
    defaultMode: "exam",
    speechRate: 1.0,
    soundAlerts: true,
    timerPauseOnBlur: false,
    sectionTimeMultiplier: 1.0,
  });

  const [savedNotice, setSavedNotice] = useState(false);
  const [showClearConfirm, setShowClearConfirm] = useState(false);

  useEffect(() => {
    setPrefs(getStoredPreferences());
  }, []);

  const handleUpdate = (updated: Partial<UserPreferences>) => {
    const next = { ...prefs, ...updated };
    setPrefs(next);
    saveStoredPreferences(next);
    setSavedNotice(true);
    setTimeout(() => setSavedNotice(false), 2000);
  };

  const handleExportData = () => {
    const attempts = getStoredAttempts();
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(attempts, null, 2));
    const downloadAnchor = document.createElement("a");
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `commprep_attempts_backup_${Date.now()}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  const handleClearHistory = () => {
    clearAllStoredData();
    setShowClearConfirm(false);
    window.location.reload();
  };

  return (
    <AppShell>
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        {/* Header */}
        <div className="pb-6 border-b border-slate-200 flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-[#2457D6] uppercase tracking-wider mb-1">
              <Settings className="h-4 w-4" />
              <span>Configuration</span>
            </div>
            <h1 className="font-heading text-2xl sm:text-3xl font-extrabold text-[#172033]">
              Practice & Simulator Preferences
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Customize default examination modes, SpeechSynthesis listening rates, and local data persistence.
            </p>
          </div>

          {savedNotice && (
            <span className="flex items-center gap-1.5 rounded-lg bg-emerald-50 px-3 py-1.5 text-xs font-bold text-emerald-700 border border-emerald-200 animate-in fade-in">
              <Check className="h-3.5 w-3.5" /> Saved
            </span>
          )}
        </div>

        {/* Section 1: Default Examination Mode */}
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs space-y-4">
          <div className="flex items-center gap-2.5 pb-2 border-b border-slate-100">
            <Shield className="h-5 w-5 text-[#2457D6]" />
            <div>
              <h3 className="text-sm font-bold text-[#172033]">
                Default Examination Launch Mode
              </h3>
              <p className="text-xs text-slate-500">
                Choose the standard simulation environment when clicking test links.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            <button
              onClick={() => handleUpdate({ defaultMode: "exam" })}
              className={`p-4 rounded-xl border text-left transition-all ${
                prefs.defaultMode === "exam"
                  ? "bg-blue-50/70 border-[#2457D6] ring-1 ring-[#2457D6]"
                  : "bg-white border-slate-200 hover:bg-slate-50"
              }`}
            >
              <span className="font-bold text-xs sm:text-sm text-[#172033] block">
                Standard Exam Mode
              </span>
              <span className="text-xs text-slate-500 mt-1 block">
                Timed 60-minute window, strict auto-advancement, feedback withheld until final submission.
              </span>
            </button>

            <button
              onClick={() => handleUpdate({ defaultMode: "practice" })}
              className={`p-4 rounded-xl border text-left transition-all ${
                prefs.defaultMode === "practice"
                  ? "bg-blue-50/70 border-[#2457D6] ring-1 ring-[#2457D6]"
                  : "bg-white border-slate-200 hover:bg-slate-50"
              }`}
            >
              <span className="font-bold text-xs sm:text-sm text-[#172033] block">
                Practice Mode
              </span>
              <span className="text-xs text-slate-500 mt-1 block">
                Untimed, flexible section navigation, and immediate access to grammar rules and model scripts.
              </span>
            </button>
          </div>
        </div>

        {/* Section 2: Audio & SpeechSynthesis Preferences */}
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs space-y-4">
          <div className="flex items-center gap-2.5 pb-2 border-b border-slate-100">
            <Volume2 className="h-5 w-5 text-[#2457D6]" />
            <div>
              <h3 className="text-sm font-bold text-[#172033]">
                Audio & SpeechSynthesis Settings
              </h3>
              <p className="text-xs text-slate-500">
                Adjust the browser speech engine speed for listening exercises.
              </p>
            </div>
          </div>

          <div className="space-y-4 pt-2">
            <div>
              <label className="text-xs font-bold text-slate-700 block mb-2">
                Listening Speech Playback Rate ({prefs.speechRate}x):
              </label>
              <div className="flex items-center gap-3">
                {[0.8, 1.0, 1.2].map((rate) => (
                  <button
                    key={rate}
                    onClick={() => handleUpdate({ speechRate: rate })}
                    className={`px-4 py-2 rounded-xl text-xs font-semibold border transition-all ${
                      prefs.speechRate === rate
                        ? "bg-[#2457D6] text-white border-[#2457D6]"
                        : "bg-white text-slate-700 border-slate-200 hover:bg-slate-50"
                    }`}
                  >
                    {rate === 0.8 ? "0.8x (Slower)" : rate === 1.0 ? "1.0x (Standard)" : "1.2x (Faster)"}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between pt-2 border-t border-slate-100">
              <div>
                <span className="text-xs font-bold text-slate-700 block">
                  Audible Timer Alerts
                </span>
                <span className="text-[11px] text-slate-500">
                  Play subtle alert notification when 60 seconds remain in a section.
                </span>
              </div>
              <input
                type="checkbox"
                checked={prefs.soundAlerts}
                onChange={(e) => handleUpdate({ soundAlerts: e.target.checked })}
                className="h-4 w-4 rounded border-slate-300 text-[#2457D6] focus:ring-[#2457D6]"
              />
            </div>
          </div>
        </div>

        {/* Section 3: Data Management & Backup */}
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs space-y-4">
          <div className="flex items-center gap-2.5 pb-2 border-b border-slate-100">
            <Download className="h-5 w-5 text-[#2457D6]" />
            <div>
              <h3 className="text-sm font-bold text-[#172033]">
                Data Management & Local Privacy
              </h3>
              <p className="text-xs text-slate-500">
                All mock test progress is stored strictly inside your local browser storage.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              onClick={handleExportData}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-slate-300 bg-white hover:bg-slate-50 text-xs font-semibold text-slate-700 shadow-xs transition-colors"
            >
              <Download className="h-4 w-4" />
              <span>Export Test History (JSON Backup)</span>
            </button>

            <button
              onClick={() => setShowClearConfirm(true)}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-red-200 bg-red-50 hover:bg-red-100 text-xs font-semibold text-red-700 transition-colors"
            >
              <Trash2 className="h-4 w-4" />
              <span>Clear All Saved Attempts</span>
            </button>
          </div>
        </div>

        {/* Clear Confirmation Modal */}
        {showClearConfirm && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-xs p-4">
            <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl border border-slate-200">
              <div className="flex items-center gap-3 text-red-600 mb-3">
                <AlertTriangle className="h-6 w-6" />
                <h3 className="font-heading text-base font-bold text-[#172033]">
                  Reset All Attempt History?
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                This will delete all saved mock exam attempts, scores, and in-progress drafts from your local browser storage. This action cannot be undone.
              </p>
              <div className="mt-5 flex items-center justify-end gap-3 pt-3 border-t border-slate-100">
                <button
                  onClick={() => setShowClearConfirm(false)}
                  className="px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-100 rounded-lg"
                >
                  Cancel
                </button>
                <button
                  onClick={handleClearHistory}
                  className="px-4 py-2 text-xs font-semibold text-white bg-red-600 hover:bg-red-700 rounded-lg shadow-xs"
                >
                  Yes, Clear Everything
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </AppShell>
  );
}

