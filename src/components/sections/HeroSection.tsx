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
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-12 lg:gap-16 items-start w-full mt-4 md:mt-8">

          {/* ── Left: Text Content ───────────────────── */}
          <div className="flex flex-col justify-center">
            {/* Eyebrow label */}
            <div className="flex items-center gap-3 mb-8">
              <span className="w-2 h-2 bg-accent shadow-[0_0_10px_rgba(0,194,255,1)]"></span>
              <span className="font-mono text-[10px] font-bold tracking-widest text-accent uppercase">
                IEEE Student Branch
              </span>
            </div>

            {/* Main Headline */}
            <h1
              className="font-sans text-5xl md:text-6xl lg:text-[5rem] leading-[1.05] font-black tracking-tight mb-8 drop-shadow-2xl"
              style={{
                backgroundImage: "linear-gradient(to bottom right, #ffffff 30%, #00C2FF 100%)",
                WebkitBackgroundClip: "text",
                color: "transparent",
              }}
            >
              Where ideas become<br />
              engineered reality.
            </h1>

            <p className="font-sans text-base md:text-lg text-ink-secondary/90 leading-relaxed max-w-xl mb-10 font-light">
              Connect conversations, knowledge, workflows, decisions, and systems
              into one living engineering network.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-5 mb-8">
              <Link
                href="/#join"
                className="px-8 py-3.5 bg-accent text-bg-base font-sans font-bold text-sm uppercase tracking-widest hover:bg-white hover:shadow-[0_0_25px_rgba(0,194,255,0.4)] transition-all duration-300 flex items-center gap-2 rounded-sm"
              >
                Apply Now <span>→</span>
              </Link>
              <Link
                href="/projects"
                className="px-8 py-3.5 bg-transparent border border-border/50 text-ink-primary font-sans font-bold text-sm uppercase tracking-widest hover:border-accent/50 hover:text-accent transition-all duration-300 rounded-sm"
              >
                View Projects
              </Link>
            </div>


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

          {/* ── Right: Logo with Scanlines ─────────── */}
          <div className="flex flex-col items-center justify-center pt-8 lg:pt-16">
            <div className="relative w-64 h-64 md:w-80 md:h-80 group perspective-1000">
               {/* Ambient Glow */}
               <div className="absolute inset-0 bg-accent/20 blur-[80px] rounded-full group-hover:bg-accent/40 transition-colors duration-700"></div>
               
               {/* Logo Container with Holographic/Scanline Effect */}
               <div className="relative w-full h-full overflow-hidden rounded-full border border-accent/20 bg-black/40 shadow-[0_0_30px_rgba(0,194,255,0.1)] flex items-center justify-center group-hover:border-accent/50 transition-all duration-700">
                 
                 {/* The Logo Image */}
                 {/* eslint-disable-next-line @next/next/no-img-element */}
                 <img 
                   src="/images/Innovare%20trans.png" 
                   alt="INNOVARE Logo" 
                   className="w-[140%] h-[140%] object-contain relative z-10 group-hover:scale-110 transition-transform duration-700 drop-shadow-[0_0_15px_rgba(0,194,255,0.5)]" 
                 />
                 
                 {/* Scanline overlay */}
                 <div className="absolute inset-0 z-20 pointer-events-none opacity-40 mix-blend-overlay"
                   style={{
                     backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0, 194, 255, 0.4) 3px, rgba(0, 194, 255, 0.4) 4px)",
                     backgroundSize: "100% 4px"
                   }}
                 ></div>
                 
                 {/* Digital Glitch/Scan border inside */}
                 <div className="absolute inset-0 z-30 border-[4px] border-transparent rounded-full shadow-[inset_0_0_20px_rgba(0,194,255,0.2)]"></div>
               </div>
            </div>
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

      {/* Floating Voice Assistant Widget */}
      <div className="fixed bottom-6 right-6 z-[100] transform transition-transform duration-500 hover:-translate-y-2">
        <VoiceAssistant />
      </div>
    </section>
  );
}
