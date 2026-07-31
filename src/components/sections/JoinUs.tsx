"use client";
import React from "react";
import Link from "next/link";

export function JoinUs() {
  return (
    <section id="join" className="py-0 w-full bg-[#000000]">
      <div className="text-ink-primary py-32 px-6 relative overflow-hidden">
        {/* Glow Effects */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent opacity-[0.05] blur-[150px] rounded-full pointer-events-none"></div>

        <div className="container mx-auto max-w-4xl flex flex-col items-center text-center relative z-10">
          
          <h2 
            className="font-mono text-5xl md:text-6xl lg:text-7xl font-black mb-12"
            style={{
              backgroundImage: "repeating-linear-gradient(to bottom, #FFFFFF 0%, #FFFFFF 45%, transparent 45%, transparent 100%)",
              backgroundSize: "100% 6px",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            Ready to initialize?
          </h2>

          <div className="flex flex-col md:flex-row gap-6 md:gap-12 mb-16 font-mono text-xs font-bold text-ink-secondary tracking-widest uppercase text-left">
            <div className="flex items-start gap-3 bg-bg-surface border border-border/50 p-6">
              <span className="text-accent drop-shadow-[0_0_5px_rgba(0,194,255,0.8)]">01_</span>
              <span>Build systems <br/> for production</span>
            </div>
            <div className="flex items-start gap-3 bg-bg-surface border border-border/50 p-6">
              <span className="text-accent drop-shadow-[0_0_5px_rgba(0,194,255,0.8)]">02_</span>
              <span>IEEE global <br/> clearance</span>
            </div>
            <div className="flex items-start gap-3 bg-bg-surface border border-border/50 p-6">
              <span className="text-accent drop-shadow-[0_0_5px_rgba(0,194,255,0.8)]">03_</span>
              <span>Network with <br/> architects</span>
            </div>
          </div>

          <Link 
            href="#" 
            className="group relative inline-flex items-center justify-center px-12 py-5 bg-accent text-bg-base font-mono font-black text-lg uppercase tracking-widest hover:bg-white hover:shadow-[0_0_30px_rgba(0,194,255,0.4)] transition-all duration-300"
          >
            Initialize Application 
            <span className="ml-3 group-hover:translate-x-2 transition-transform">→</span>
          </Link>

          <p className="font-mono text-[10px] text-ink-muted mt-6 tracking-widest uppercase">
            &gt; SYSTEM LOCK: APPLICATIONS CLOSE SEPTEMBER 30TH
          </p>

        </div>
      </div>
    </section>
  );
}
