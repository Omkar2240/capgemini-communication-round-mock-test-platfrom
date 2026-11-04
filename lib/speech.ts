"use client";

import { ListeningScriptDialogue } from "@/types/exam";

export class SpeechManager {
  private synth: SpeechSynthesis | null = null;
  private isSpeaking = false;
  private isPausedState = false;
  private currentUtterance: SpeechSynthesisUtterance | null = null;
  private onStateChange: ((state: { isPlaying: boolean; isPaused: boolean; currentSpeaker?: string }) => void) | null = null;

  constructor() {
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      this.synth = window.speechSynthesis;
    }
  }

  public setListener(cb: (state: { isPlaying: boolean; isPaused: boolean; currentSpeaker?: string }) => void) {
    this.onStateChange = cb;
  }

  public isAvailable(): boolean {
    return !!this.synth;
  }

  public async playDialogue(
    dialogues: ListeningScriptDialogue[],
    rate: number = 1.0,
    voiceURI?: string
  ): Promise<void> {
    if (!this.synth) return;

    this.stop();
    this.isSpeaking = true;
    this.isPausedState = false;

    const voices = this.synth.getVoices();
    const defaultVoice =
      voices.find((v) => v.voiceURI === voiceURI) ||
      voices.find((v) => v.lang.startsWith("en") && (v.name.includes("Natural") || v.name.includes("Google") || v.name.includes("Microsoft"))) ||
      voices.find((v) => v.lang.startsWith("en")) ||
      voices[0];

    for (let i = 0; i < dialogues.length; i++) {
      if (!this.isSpeaking) break;

      const item = dialogues[i];
      if (this.onStateChange) {
        this.onStateChange({ isPlaying: true, isPaused: false, currentSpeaker: item.speaker });
      }

      await new Promise<void>((resolve) => {
        if (!this.synth) {
          resolve();
          return;
        }

        const utterance = new SpeechSynthesisUtterance(`${item.speaker} says: ${item.text}`);
        if (defaultVoice) utterance.voice = defaultVoice;
        utterance.rate = rate;
        utterance.pitch = i % 2 === 0 ? 1.0 : 1.1; // slight pitch alternation for different speakers

        utterance.onend = () => {
          setTimeout(resolve, 600); // realistic turn-taking conversational pause
        };

        utterance.onerror = () => {
          resolve();
        };

        this.currentUtterance = utterance;
        this.synth.speak(utterance);
      });
    }

    this.isSpeaking = false;
    this.isPausedState = false;
    if (this.onStateChange) {
      this.onStateChange({ isPlaying: false, isPaused: false });
    }
  }

  public pause(): void {
    if (this.synth && this.isSpeaking && !this.isPausedState) {
      this.synth.pause();
      this.isPausedState = true;
      if (this.onStateChange) {
        this.onStateChange({ isPlaying: true, isPaused: true });
      }
    }
  }

  public resume(): void {
    if (this.synth && this.isPausedState) {
      this.synth.resume();
      this.isPausedState = false;
      if (this.onStateChange) {
        this.onStateChange({ isPlaying: true, isPaused: false });
      }
    }
  }

  public stop(): void {
    if (this.synth) {
      this.isSpeaking = false;
      this.isPausedState = false;
      this.synth.cancel();
      if (this.onStateChange) {
        this.onStateChange({ isPlaying: false, isPaused: false });
      }
    }
  }
}

let instance: SpeechManager | null = null;
export function getSpeechManager(): SpeechManager {
  if (!instance) {
    instance = new SpeechManager();
  }
  return instance;
}

