"use client";
import React from "react";
import Link from "next/link";
import { VoiceAssistant } from "@/components/voice/VoiceAssistant";

export function HeroSection() {
  return (
    <section className="relative w-full bg-bg-base overflow-hidden flex flex-col min-h-[90vh]">
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage: "linear-gradient(#00C2FF 1px, transparent 1px), linear-gradient(90deg, #00C2FF 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Ambient glow in bg */}
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-accent opacity-[0.04] blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10 flex-1 flex flex-col justify-start pt-2 md:pt-4 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-12 lg:gap-16 items-center w-full">

          {/* ── Left: Text Content ───────────────────── */}
          <div className="flex flex-col justify-center">
            {/* Eyebrow label */}
            <div className="flex items-center gap-3 mb-8">
              <span className="w-2 h-2 bg-accent shadow-[0_0_10px_rgba(0,194,255,1)]"></span>
              <span className="font-mono text-[10px] font-bold tracking-widest text-accent uppercase">
                IEEE Student Branch · PCU Maharashtra
              </span>
            </div>

            {/* Main Headline with striped effect */}
            <h1
              className="font-mono text-5xl md:text-6xl lg:text-7xl leading-tight font-black tracking-tighter mb-8"
              style={{
                backgroundImage: "repeating-linear-gradient(to bottom, #FFFFFF 0%, #FFFFFF 45%, transparent 45%, transparent 100%)",
                backgroundSize: "100% 5px",
                WebkitBackgroundClip: "text",
                color: "transparent",
              }}
            >
              Where ideas become<br />
              engineered reality.
            </h1>

            <p className="font-mono text-sm md:text-base text-ink-secondary leading-relaxed max-w-lg mb-10">
              Connect conversations, knowledge, workflows, decisions, and systems
              into one living engineering network.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-start gap-4 mb-6">
              <Link
                href="/#join"
                className="px-8 py-3.5 bg-accent text-bg-base font-mono font-bold text-sm uppercase tracking-widest hover:bg-white hover:shadow-[0_0_25px_rgba(0,194,255,0.4)] transition-all duration-300 flex items-center gap-2"
              >
                Apply Now <span>→</span>
              </Link>
              <Link
                href="/projects"
                className="px-8 py-3.5 bg-transparent border border-border/50 text-ink-primary font-mono font-bold text-sm uppercase tracking-widest hover:border-accent/50 hover:text-accent transition-all duration-300"
              >
                View Projects
              </Link>
            </div>

            <p className="font-mono text-[10px] text-ink-muted">
              to accelerate access, email us{" "}
              <a href="mailto:core@innovare.org" className="font-bold text-ink-primary hover:text-accent transition-colors underline underline-offset-2">
                core@innovare.org
              </a>
            </p>

            {/* Stats Row */}
            <div className="mt-12 pt-8 border-t border-border/40 grid grid-cols-3 gap-6">
              {[
                { v: "26", l: "Members" },
                { v: "4", l: "Deployed" },
                { v: "3", l: "Hackathons" },
              ].map(s => (
                <div key={s.l} className="flex flex-col">
                  <span className="font-mono font-black text-2xl text-ink-primary">{s.v}</span>
                  <span className="font-mono text-[9px] text-ink-muted uppercase tracking-widest mt-1">{s.l}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: NOVA Voice Assistant ─────────── */}
          <div className="flex flex-col items-center justify-center">
            {/* Label above robot */}
            <div className="mb-4 flex items-center gap-2">
              <span className="font-mono text-[10px] text-ink-muted uppercase tracking-widest">N O V A</span>
              <span className="font-mono text-[10px] text-accent tracking-widest">{"// AI Guide"}</span>
            </div>

            <VoiceAssistant />

            {/* Description below */}
            <p className="mt-8 font-mono text-[10px] text-ink-muted text-center max-w-xs leading-relaxed">
              NOVA is our voice-driven site navigator. Activate her and ask about projects, events, the team, or how to join.
            </p>
          </div>

        </div>
      </div>

      {/* Bottom grid map strip (like the original reference) */}
      <div className="w-full border-t border-border/30 bg-bg-base overflow-hidden h-48 relative">
        <div className="absolute bottom-0 left-[25%] w-80 h-80 bg-accent opacity-[0.08] blur-[100px] rounded-full pointer-events-none"></div>
        <div className="absolute bottom-0 right-[15%] w-80 h-80 bg-blue-500 opacity-[0.06] blur-[100px] rounded-full pointer-events-none"></div>

        <div className="absolute inset-0 grid grid-cols-4 md:grid-cols-8 grid-rows-3">
          {Array.from({ length: 24 }).map((_, i) => (
            <div key={i} className="border-r border-b border-border/30 relative">
              {[5, 14, 20].includes(i) && (
                <div className="absolute inset-0 bg-bg-surface border-l-2 border-accent/60 flex items-end z-10">
                  <span className="p-2 font-mono text-[8px] tracking-widest uppercase text-ink-muted">
                    {i === 5 ? "Infrastructure" : i === 14 ? "Data Systems" : "Agents"}
                  </span>
                  <div className="absolute top-1 right-1 w-3 h-3 overflow-hidden">
                    <div className="w-[141%] h-[1px] bg-accent/30 transform -rotate-45 origin-top-left absolute top-0 left-0"></div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
