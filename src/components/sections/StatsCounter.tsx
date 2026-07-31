"use client";
import React from "react";

const STATS = [
  { label: "Members", value: "26" },
  { label: "Projects", value: "4" },
  { label: "Events Hosted", value: "6" },
  { label: "Hackathons Won", value: "3" },
];

export function StatsCounter() {
  return (
    <section className="py-16 bg-bg-base border-y border-border relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl bg-accent opacity-[0.03] blur-[120px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-4">
          {STATS.map((stat, index) => (
            <div 
              key={index} 
              className={`flex flex-col items-center justify-center text-center group ${
                index !== STATS.length - 1 ? 'md:border-r md:border-border/50' : ''
              } ${index % 2 === 0 ? 'border-r border-border/50 md:border-r-0' : ''} px-4 relative`}
            >
              {/* Hover highlight effect */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative overflow-hidden cursor-default mb-2">
                <span 
                  className="font-mono text-5xl md:text-7xl font-black text-ink-primary drop-shadow-[0_0_12px_rgba(0,194,255,0.2)] group-hover:drop-shadow-[0_0_20px_rgba(0,194,255,0.6)] transition-all duration-300"
                  style={{
                    backgroundImage: "repeating-linear-gradient(to bottom, #FFFFFF 0%, #FFFFFF 50%, transparent 50%, transparent 100%)",
                    backgroundSize: "100% 4px",
                    WebkitBackgroundClip: "text",
                    color: "transparent",
                  }}
                >
                  {stat.value}
                </span>
              </div>
              <span className="font-mono text-[10px] md:text-xs font-bold tracking-widest text-ink-secondary uppercase group-hover:text-accent transition-colors duration-300 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-border group-hover:bg-accent transition-colors duration-300"></span>
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
