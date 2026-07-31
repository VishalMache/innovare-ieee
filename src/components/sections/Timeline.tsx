"use client";
import React from "react";

const UPCOMING_EVENTS = [
  {
    id: 1,
    title: "Hack The Future 2025",
    date: "August 15, 2025",
    time: "10:00 AM",
    location: "Main Auditorium, PCU",
    type: "Hackathon",
    link: "#"
  },
  {
    id: 2,
    title: "AI in Production Workshop",
    date: "September 5, 2025",
    time: "2:00 PM",
    location: "Lab 4, Tech Block",
    type: "Workshop",
    link: "#"
  }
];

const PAST_EVENTS = [
  {
    id: 3,
    title: "Web3 Summit",
    date: "March 10, 2025",
    outcome: "150+ attendees, 12 projects built"
  },
  {
    id: 4,
    title: "System Design Masterclass",
    date: "February 22, 2025",
    outcome: "Led by Senior Engineers from Google"
  },
  {
    id: 5,
    title: "IoT Hardware Hack",
    date: "January 15, 2025",
    outcome: "First hardware integration event at PCU"
  },
  {
    id: 6,
    title: "Tech Orientation 2024",
    date: "August 20, 2024",
    outcome: "Welcomed 300+ new members"
  }
];

export function Timeline() {
  return (
    <section id="events" className="py-32 bg-bg-surface relative border-y border-border">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        <div className="mb-16">
          <h2 className="font-mono text-xs font-bold tracking-widest text-accent uppercase mb-4 flex items-center gap-2">
            <span className="w-2 h-2 bg-accent shadow-[0_0_8px_rgba(0,194,255,0.8)]"></span>
            System Schedule
          </h2>
          <h3 
            className="font-mono text-4xl md:text-5xl font-black tracking-tighter text-ink-primary"
            style={{
              backgroundImage: "repeating-linear-gradient(to bottom, #FFFFFF 0%, #FFFFFF 45%, transparent 45%, transparent 100%)",
              backgroundSize: "100% 5px",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            Execution Timeline.
          </h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Upcoming Events */}
          <div className="lg:col-span-6">
            <h4 className="font-mono text-[10px] tracking-widest text-ink-secondary mb-8 border-b border-border/50 pb-4 uppercase">
              {"// Scheduled Executions"}
            </h4>
            <div className="flex flex-col gap-6">
              {UPCOMING_EVENTS.map(event => (
                <div key={event.id} className="bg-bg-base border border-accent/30 p-8 flex flex-col relative overflow-hidden group shadow-[0_0_15px_rgba(0,194,255,0.05)] hover:shadow-[0_0_25px_rgba(0,194,255,0.15)] transition-shadow">
                  {/* Glitch Effect Border */}
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-accent shadow-[0_0_10px_rgba(0,194,255,0.8)]"></div>
                  
                  <div className="flex justify-between items-start mb-6">
                    <span className="font-mono text-[9px] font-bold tracking-widest text-bg-base bg-accent px-2 py-1 uppercase">
                      {event.type}
                    </span>
                    <span className="font-mono text-[10px] text-accent">
                      {event.date}
                    </span>
                  </div>
                  
                  <h5 className="font-mono font-bold text-xl text-ink-primary mb-2">
                    {event.title}
                  </h5>
                  <p className="font-sans text-sm text-ink-secondary mb-8 font-mono">
                    <span className="text-accent-warm opacity-80">&gt;</span> {event.time} @ {event.location}
                  </p>
                  
                  <a href={event.link} className="inline-flex items-center gap-2 font-mono text-[10px] font-bold text-accent border border-accent/50 px-6 py-2.5 w-max uppercase tracking-widest hover:bg-accent/10 transition-colors">
                    Initialize RSVP <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Past Events Timeline */}
          <div className="lg:col-span-6">
            <h4 className="font-mono text-[10px] tracking-widest text-ink-secondary mb-8 border-b border-border/50 pb-4 uppercase">
              {"// Execution History Logs"}
            </h4>
            <div className="relative border-l border-border/30 ml-2 flex flex-col gap-10 py-4 font-mono">
              {PAST_EVENTS.map(event => (
                <div key={event.id} className="relative pl-8 group">
                  {/* Timeline Dot */}
                  <div className="absolute left-[-5px] top-1.5 w-2.5 h-2.5 bg-bg-surface border-2 border-ink-muted group-hover:border-accent transition-colors rounded-none transform rotate-45"></div>
                  
                  <span className="block text-[10px] text-ink-muted mb-2 tracking-widest uppercase">
                    [{event.date}]
                  </span>
                  <h5 className="font-bold text-sm text-ink-primary mb-2">
                    {event.title}
                  </h5>
                  <p className="text-xs text-ink-secondary">
                    <span className="text-accent opacity-50">&gt; OUTCOME:</span> {event.outcome}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
