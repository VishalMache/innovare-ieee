import React from "react";
import { Timeline } from "@/components/sections/Timeline";

export const metadata = {
  title: "Events · INNOVARE IEEE",
  description: "Join upcoming hackathons, workshops, and seminars hosted by INNOVARE.",
};

export default function EventsPage() {
  return (
    <div className="pt-20">
      <div className="bg-bg-base py-16 border-b border-border/50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'radial-gradient(var(--color-accent) 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
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
            System Schedule.
          </h1>
          <p className="font-mono text-xl text-ink-secondary max-w-2xl">
            &gt; Register for our upcoming technical workshops, coding bootcamps, and nationwide hackathons.
          </p>
        </div>
      </div>
      <Timeline />
    </div>
  );
}
