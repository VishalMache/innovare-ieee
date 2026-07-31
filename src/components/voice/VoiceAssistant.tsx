"use client";
import React, { useState } from "react";
import { RobotFace } from "./RobotFace";
import { useVoiceAssistant } from "@/hooks/useVoiceAssistant";

export function VoiceAssistant() {
  const { state, transcript, response, isSupported, startListening, stopListening } = useVoiceAssistant();
  const [isOpen, setIsOpen] = useState(false);

  const handleMicClick = () => {
    if (state === "listening") {
      stopListening();
    } else if (state === "idle") {
      startListening();
    }
  };

  const stateLabels: Record<string, string> = {
    idle: "Click mic to speak",
    listening: "Listening...",
    thinking: "Processing...",
    speaking: "NOVA speaking",
  };

  const stateColors: Record<string, string> = {
    idle: "text-ink-muted",
    listening: "text-accent",
    thinking: "text-yellow-400",
    speaking: "text-green-400",
  };

  // Suggested prompts
  const SUGGESTIONS = [
    "Show me projects",
    "Upcoming events",
    "How to join?",
    "About INNOVARE",
  ];

  if (!isOpen) {
    return (
      <div className="flex flex-col items-center gap-6">
        <div
          className="relative cursor-pointer group hover:scale-105 transition-transform duration-300"
          onClick={() => setIsOpen(true)}
        >
          <RobotFace state="idle" size={200} />
        </div>
        <button
          onClick={() => setIsOpen(true)}
          className="bg-bg-surface border border-accent/30 px-6 py-2.5 flex items-center justify-center gap-3 hover:bg-accent/10 hover:border-accent shadow-[0_0_15px_rgba(0,194,255,0.15)] transition-all group"
        >
          <span className="w-1.5 h-1.5 bg-accent shadow-[0_0_5px_rgba(0,194,255,1)] animate-pulse rounded-full"></span>
          <span className="font-mono text-[10px] text-accent uppercase tracking-widest font-bold">
            Click to activate NOVA
          </span>
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center gap-4 w-full max-w-sm">
      {/* Robot Face */}
      <div className="relative">
        <RobotFace state={state} size={160} />

        {/* State label floating under face */}
        <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 translate-y-full pt-2">
          <span className={`font-mono text-[10px] uppercase tracking-widest font-bold ${stateColors[state] || "text-ink-muted"}`}>
            {state === "idle" && <span className="inline-block w-1.5 h-1.5 bg-ink-muted mr-1.5 animate-pulse"></span>}
            {state === "listening" && <span className="inline-block w-1.5 h-1.5 bg-accent shadow-[0_0_6px_rgba(0,194,255,1)] mr-1.5 animate-pulse"></span>}
            {state === "thinking" && <span className="inline-block w-1.5 h-1.5 bg-yellow-400 mr-1.5 animate-pulse"></span>}
            {state === "speaking" && <span className="inline-block w-1.5 h-1.5 bg-green-400 mr-1.5 animate-pulse"></span>}
            {stateLabels[state]}
          </span>
        </div>
      </div>

      {/* Response Box */}
      <div className="w-full mt-6 bg-gradient-to-b from-[#0a0a0f] to-[#050508] border border-border/30 rounded-2xl p-5 relative overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.5)]">
        {/* Top glow line */}
        <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[2px] transition-all duration-500 rounded-b-full ${
          state === "speaking" ? "bg-green-400 shadow-[0_0_15px_rgba(74,222,128,1)]" :
          state === "listening" ? "bg-accent shadow-[0_0_15px_rgba(0,194,255,1)]" :
          state === "thinking" ? "bg-yellow-400 shadow-[0_0_15px_rgba(250,204,21,1)]" :
          "bg-border/50 opacity-0"
        }`}></div>

        {transcript && (
          <div className="flex items-start gap-2 mb-4">
             <div className="w-5 h-5 rounded-full bg-border/40 flex items-center justify-center shrink-0 mt-0.5">
               <svg className="w-3 h-3 text-ink-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
               </svg>
             </div>
             <p className="font-sans text-xs text-ink-secondary/70 italic leading-relaxed">
               "{transcript}"
             </p>
          </div>
        )}

        {response ? (
          <div className="flex items-start gap-3">
             <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                state === "speaking" ? "bg-green-400/20 text-green-400 shadow-[0_0_10px_rgba(74,222,128,0.2)]" : "bg-accent/20 text-accent"
             }`}>
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                   <path d="M12 2L15 9L22 12L15 15L12 22L9 15L2 12L9 9L12 2Z" />
                </svg>
             </div>
             <p className="font-sans text-sm md:text-base text-ink-primary font-light leading-relaxed tracking-wide">
               {response}
             </p>
          </div>
        ) : (
          <div className="flex items-center justify-center h-8">
             <p className="font-sans text-xs text-ink-muted/50 tracking-widest uppercase">
               {state === "idle" ? "System ready. Ask me anything..." :
                state === "listening" ? "Listening..." :
                state === "thinking" ? "Processing..." : ""}
             </p>
          </div>
        )}
      </div>

      {/* Controls */}
      <div className="flex items-center gap-3 w-full mt-4">
        {/* Mic Button */}
        {isSupported ? (
          <button
            onClick={handleMicClick}
            disabled={state === "thinking" || state === "speaking"}
            className={`flex-1 flex items-center justify-center gap-3 py-3.5 rounded-xl font-sans text-xs font-bold uppercase tracking-widest transition-all duration-300 ${
              state === "listening"
                ? "bg-accent/15 border border-accent text-accent shadow-[0_0_20px_rgba(0,194,255,0.2)]"
                : state === "thinking" || state === "speaking"
                ? "bg-bg-subtle border border-border/30 text-ink-muted cursor-not-allowed"
                : "bg-bg-surface border border-border/50 text-ink-primary hover:bg-bg-subtle hover:border-accent/50 hover:text-accent"
            }`}
          >
            {/* Mic SVG Icon */}
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {state === "listening"
                ? <path strokeLinecap="square" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                : <>
                    <path strokeLinecap="square" strokeWidth={2} d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
                    <path strokeLinecap="square" strokeWidth={2} d="M19 10v2a7 7 0 0 1-14 0v-2M12 19v4M8 23h8" />
                  </>
              }
            </svg>
            {state === "listening" ? "Stop" : "Speak to NOVA"}
          </button>
        ) : (
          <div className="flex-1 py-3.5 text-center font-sans text-[10px] rounded-xl text-ink-muted border border-border/30">
            Voice not supported in this browser
          </div>
        )}

        {/* Close Button */}
        <button
          onClick={() => { stopListening(); setIsOpen(false); }}
          className="p-3.5 rounded-xl border border-border/50 text-ink-muted hover:bg-red-500/10 hover:border-red-500/50 hover:text-red-400 transition-colors"
          title="Close assistant"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="square" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

    </div>
  );
}
