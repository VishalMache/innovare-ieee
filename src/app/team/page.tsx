import React from "react";
import { Team } from "@/components/sections/Team";

export const metadata = {
  title: "Team · INNOVARE IEEE",
  description: "Meet the student engineers and designers leading the INNOVARE IEEE branch.",
};

export default function TeamPage() {
  return (
    <div className="pt-20">
      <div className="bg-bg-base py-16 border-b border-border/50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'linear-gradient(var(--color-border) 1px, transparent 1px), linear-gradient(90deg, var(--color-border) 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <h1 
            className="font-mono text-5xl md:text-7xl font-black text-ink-primary mb-6"
            style={{
              backgroundImage: "repeating-linear-gradient(to bottom, #FFFFFF 0%, #FFFFFF 45%, transparent 45%, transparent 100%)",
              backgroundSize: "100% 5px",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            The Network.
          </h1>
          <p className="font-mono text-xl text-ink-secondary max-w-2xl">
            &gt; A collective of 26 student builders, engineers, and designers working together to create impact.
          </p>
        </div>
      </div>
      <Team />
    </div>
  );
}
