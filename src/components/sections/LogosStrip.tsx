"use client";
import React from "react";

const STRIP_WORDS = [
  "OPEN SOURCE",
  "FAST EXECUTION",
  "IEEE CERTIFIED",
  "DEEP TECH",
  "INNOVATION",
  "ENGINEERING",
];

export function LogosStrip() {
  return (
    <section className="w-full bg-bg-surface border-y border-border/50 py-4 overflow-hidden relative">
      <div className="flex w-full overflow-hidden">
        <div className="flex whitespace-nowrap min-w-max items-center animate-[shimmer_20s_linear_infinite]">
          {[...Array(3)].map((_, i) => (
            <React.Fragment key={i}>
              {STRIP_WORDS.map((word, j) => (
                <div key={`${i}-${j}`} className="flex items-center">
                  <span className="text-[10px] font-mono font-bold tracking-[0.2em] text-ink-secondary mx-8 uppercase">
                    {word}
                  </span>
                  <span className="text-accent text-lg font-serif animate-pulse">✦</span>
                </div>
              ))}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
