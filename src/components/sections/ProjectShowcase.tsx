"use client";
import React, { useState } from "react";
import Link from "next/link";

const CATEGORIES = ["All", "AI/ML", "Web", "IoT", "Open Source"];

const PROJECTS = [
  {
    id: 1,
    title: "Quantum API",
    category: "Web",
    desc: "A lightning-fast caching layer for university databases serving 1M+ requests daily.",
    stack: ["Node.js", "Redis", "Apollo"],
    size: "large"
  },
  {
    id: 2,
    title: "Nebula Dashboard",
    category: "IoT",
    desc: "Real-time analytics for campus electrical energy consumption.",
    stack: ["React", "D3.js", "Firebase"],
    size: "small"
  },
  {
    id: 3,
    title: "Horizon AI",
    category: "AI/ML",
    desc: "Federated learning models predicting student success rates.",
    stack: ["Python", "TensorFlow", "FastAPI"],
    size: "small"
  },
  {
    id: 4,
    title: "OpenCampus",
    category: "Open Source",
    desc: "An open protocol for cross-university event sharing.",
    stack: ["Next.js", "PostgreSQL", "Go"],
    size: "large"
  }
];

export function ProjectShowcase() {
  const [activeTab, setActiveTab] = useState("All");

  const filteredProjects = PROJECTS.filter(p => activeTab === "All" || p.category === activeTab);

  return (
    <section id="projects" className="py-32 bg-[#050505] relative">
      {/* Background Matrix Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'linear-gradient(var(--color-border) 1px, transparent 1px), linear-gradient(90deg, var(--color-border) 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8 border-b border-border/50 pb-8">
          <div>
            <h2 className="font-mono text-xs font-bold tracking-widest text-accent uppercase mb-4 flex items-center gap-2">
              <span className="w-2 h-2 bg-accent shadow-[0_0_8px_rgba(0,194,255,0.8)]"></span>
              Selected Deployments
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
              The Innovation Grid.
            </h3>
          </div>
          
          {/* Filters */}
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-4 py-2 font-mono text-[10px] font-bold tracking-widest uppercase transition-all duration-300 border ${
                  activeTab === cat 
                    ? "bg-accent/10 text-accent border-accent shadow-[0_0_15px_rgba(0,194,255,0.2)]" 
                    : "bg-bg-subtle text-ink-secondary border-border/50 hover:border-accent/50 hover:text-ink-primary"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Structured Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project) => (
            <div 
              key={project.id}
              className={`group bg-bg-surface border border-border/50 p-8 flex flex-col justify-between hover:border-accent/50 transition-colors duration-500 relative overflow-hidden ${
                project.size === 'large' ? 'md:col-span-2 md:flex-row md:items-center' : 'md:col-span-1'
              }`}
            >
              {/* Top Accent Line */}
              <div className="absolute top-0 left-0 w-full h-[1px] bg-accent transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-700 shadow-[0_0_10px_rgba(0,194,255,1)]"></div>
              
              <div className={`flex flex-col relative z-10 ${project.size === 'large' ? 'md:w-1/2' : ''}`}>
                <span className="inline-block px-3 py-1 bg-accent/10 border border-accent/20 text-accent font-mono text-[10px] font-bold uppercase tracking-widest mb-6 w-max">
                  {project.category}
                </span>
                <h4 className="font-mono font-black text-2xl md:text-3xl text-ink-primary mb-4 drop-shadow-[0_0_8px_rgba(255,255,255,0.1)]">
                  {project.title}
                </h4>
                <p className="font-sans text-sm md:text-base text-ink-secondary leading-relaxed mb-8">
                  {project.desc}
                </p>
              </div>

              <div className={`flex flex-col gap-6 relative z-10 ${project.size === 'large' ? 'md:w-1/3 items-start md:items-end' : ''}`}>
                <div className="flex flex-wrap gap-2 justify-start md:justify-end">
                  {project.stack.map(tech => (
                    <span key={tech} className="px-2 py-1 bg-bg-subtle border border-border/50 text-ink-secondary font-mono text-[9px] uppercase tracking-widest group-hover:text-ink-primary transition-colors">
                      {tech}
                    </span>
                  ))}
                </div>
                <Link href={`/projects/${project.id}`} className="text-accent font-mono font-bold text-xs tracking-widest hover:text-white uppercase flex items-center gap-2 mt-auto transition-colors">
                  View Source <span className="group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </div>

              {/* Decorative nodes */}
              <div className="absolute bottom-0 right-0 w-4 h-4 border-t border-l border-border/50 group-hover:border-accent/50 transition-colors"></div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
