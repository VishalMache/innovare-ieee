"use client";
import React from "react";

const TEAM_MEMBERS = [
  { id: 1, name: "Aditya", role: "CHAIRPERSON", img: "/images/aditya.png" },
  { id: 2, name: "Arko", role: "VICE CHAIR", img: "/images/arko.png" },
  { id: 3, name: "Aryan", role: "TECH_LEAD", img: "/images/aryan.png" },
  { id: 4, name: "Atharva", role: "LEAD_ARCHITECT", img: "/images/atharva.png" },
  { id: 5, name: "Chaitali", role: "UI_UX_CORE", img: "/images/chaitali.png" },
  { id: 6, name: "Ishwar", role: "EVENT_CTRL", img: "/images/ishwar.png" },
  { id: 7, name: "Ishwari", role: "PR_INTERFACE", img: "/images/ishwari.png" },
  { id: 8, name: "Jayada", role: "FINANCE_NODE", img: "/images/jayada.png" },
  { id: 9, name: "Meet", role: "WEB_MASTER", img: "/images/meet.png" },
  { id: 10, name: "Mohit", role: "SYS_ENGINEER", img: "/images/mohit.png" },
  { id: 11, name: "Parth", role: "BACKEND_NODE", img: "/images/parth.png" },
  { id: 12, name: "Payal", role: "DESIGN_CTRL", img: "/images/payal.png" },
  { id: 13, name: "Pratik", role: "DEVOPS_NODE", img: "/images/pratik.png" },
  { id: 14, name: "Punya", role: "RESEARCH_NODE", img: "/images/punya.png" },
  { id: 15, name: "Pushpak", role: "ML_ENGINEER", img: "/images/pushpak.png" },
  { id: 16, name: "Rajvardhan", role: "INFRA_LEAD", img: "/images/rajvardhan.png" },
];

export function Team() {
  return (
    <section id="team" className="py-32 bg-[#050505] relative">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <h2 className="font-mono text-xs font-bold tracking-widest text-accent uppercase mb-4 flex items-center gap-2">
              <span className="w-2 h-2 bg-accent shadow-[0_0_8px_rgba(0,194,255,0.8)] animate-pulse"></span>
              Active Network Nodes
            </h2>
            <h3
              className="font-mono text-4xl md:text-5xl font-black tracking-tighter"
              style={{
                backgroundImage: "repeating-linear-gradient(to bottom, #FFFFFF 0%, #FFFFFF 45%, transparent 45%, transparent 100%)",
                backgroundSize: "100% 5px",
                WebkitBackgroundClip: "text",
                color: "transparent",
              }}
            >
              The Syndicate Core.
            </h3>
          </div>
          <a href="/team" className="font-mono text-[10px] font-bold text-ink-secondary border border-border/50 px-4 py-2 hover:bg-bg-subtle hover:text-ink-primary hover:border-accent/50 transition-colors uppercase tracking-widest">
            Access Full Directory →
          </a>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">
          {TEAM_MEMBERS.map((member) => (
            <div key={member.id} className="group relative aspect-[3/4] bg-bg-base border border-border/50 overflow-hidden cursor-pointer hover:border-accent/50 transition-colors duration-300">
              
              {/* Photo */}
              <div className="absolute inset-0 bg-bg-surface">
                {/* Scanline overlay */}
                <div className="absolute inset-0 z-10 pointer-events-none opacity-30"
                  style={{
                    backgroundImage: "repeating-linear-gradient(0deg, rgba(0,0,0,0.4) 0px, rgba(0,0,0,0.4) 1px, transparent 1px, transparent 4px)",
                    backgroundSize: "100% 4px"
                  }}
                ></div>
                {/* Blue tint overlay that fades on hover */}
                <div className="absolute inset-0 bg-accent/20 mix-blend-color z-20 group-hover:opacity-0 transition-opacity duration-500"></div>
                
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-full object-cover object-top filter grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
              </div>

              {/* ID Badge Tag */}
              <div className="absolute bottom-0 inset-x-0 bg-bg-base/90 backdrop-blur-md border-t border-accent/50 p-3 transform translate-y-[30%] group-hover:translate-y-0 transition-transform duration-300 flex flex-col items-start z-30">
                <span className="font-mono text-[7px] text-ink-muted mb-0.5 uppercase">ID: NODE_{member.id.toString().padStart(3, "0")}</span>
                <h4 className="font-mono font-bold text-sm text-ink-primary">
                  {member.name}
                </h4>
                <p className="font-mono text-[8px] font-bold text-accent uppercase tracking-widest mt-0.5">
                  {member.role}
                </p>
              </div>

              {/* Corner accent */}
              <div className="absolute top-0 right-0 border-b-[20px] border-b-transparent border-r-[20px] border-r-accent/20 group-hover:border-r-accent/50 transition-colors z-20"></div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
