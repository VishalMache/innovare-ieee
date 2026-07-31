"use client";
import React from "react";

export function WhoWeAre() {
  return (
    <section id="about" className="py-24 bg-bg-base relative border-t border-border">
      {/* Background Decorative Matrix */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'radial-gradient(var(--color-accent) 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="mb-16">
          <h2 className="font-mono text-xs font-bold tracking-widest text-accent uppercase mb-4 flex items-center gap-2">
            <span className="w-2 h-2 bg-accent shadow-[0_0_8px_rgba(0,194,255,0.8)]"></span>
            System Overview
          </h2>
          <h3 
            className="font-mono text-5xl md:text-6xl font-black tracking-tighter mb-8 max-w-2xl"
            style={{
              backgroundImage: "repeating-linear-gradient(to bottom, #FFFFFF 0%, #FFFFFF 45%, transparent 45%, transparent 100%)",
              backgroundSize: "100% 5px",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            The PCU Builder Syndicate.
          </h3>
        </div>

        {/* Bento Grid - Neon Tech Style */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Tile A: Large Mission Statement */}
          <div className="md:col-span-2 bg-bg-surface flex items-center justify-start p-8 md:p-12 border border-border relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent opacity-5 blur-[100px] group-hover:opacity-20 transition-opacity duration-700"></div>
            <div className="absolute left-0 top-0 w-1 h-full bg-accent scale-y-0 group-hover:scale-y-100 transition-transform origin-top duration-500"></div>
            
            <p className="font-mono text-2xl md:text-3xl leading-relaxed text-ink-primary">
              We don&apos;t just study technology. We architect, build, and deploy 
              <span className="text-accent drop-shadow-[0_0_8px_rgba(0,194,255,0.5)]"> real-world solutions</span> at scale.
            </p>
          </div>

          {/* Tile B: Members Counter */}
          <div className="bg-bg-surface border border-border p-8 relative flex flex-col justify-between group hover:border-accent/50 transition-colors">
            <div className="absolute top-0 right-0 p-2">
              <span className="font-mono text-[8px] text-ink-muted">NODE_COUNT</span>
            </div>
            <span className="font-mono text-xs font-bold text-ink-secondary tracking-widest uppercase">
              Active Members
            </span>
            <div className="mt-8 flex items-baseline gap-2">
              <span className="font-mono font-black text-6xl text-ink-primary group-hover:text-accent transition-colors drop-shadow-[0_0_15px_rgba(0,194,255,0.3)]">
                26
              </span>
              <span className="font-mono text-sm text-ink-muted">units</span>
            </div>
          </div>

          {/* Tile C: Projects Counter */}
          <div className="bg-bg-surface border border-border p-8 relative flex flex-col justify-between group hover:border-accent/50 transition-colors">
            <div className="absolute top-0 right-0 p-2">
              <span className="font-mono text-[8px] text-ink-muted">DEPLOYMENTS</span>
            </div>
            <span className="font-mono text-xs font-bold text-ink-secondary tracking-widest uppercase">
              Shipped Projects
            </span>
            <div className="mt-8 flex items-baseline gap-2">
              <span className="font-mono font-black text-6xl text-ink-primary group-hover:text-accent transition-colors drop-shadow-[0_0_15px_rgba(0,194,255,0.3)]">
                4
              </span>
              <span className="font-mono text-sm text-ink-muted">in_prod</span>
            </div>
          </div>

          {/* Tile D: Tech Stack */}
          <div className="bg-bg-surface border border-border p-8 relative flex flex-col justify-between group hover:border-accent/50 transition-colors">
            <span className="font-mono text-xs font-bold text-ink-secondary tracking-widest uppercase mb-6">
              Core Stack
            </span>
            <div className="grid grid-cols-2 gap-3">
              {['TypeScript', 'React', 'Next.js', 'Python', 'Node', 'AWS'].map(tech => (
                <div key={tech} className="bg-bg-subtle border border-border py-2 px-3 flex items-center justify-start font-mono text-[10px] text-ink-primary hover:border-accent hover:text-accent transition-colors cursor-default">
                  <span className="opacity-50 mr-2">&gt;</span> {tech}
                </div>
              ))}
            </div>
          </div>

          {/* Tile E: Quote */}
          <div className="bg-[#0A0A0C] border border-accent/30 p-8 relative flex flex-col justify-between overflow-hidden shadow-[0_0_30px_rgba(0,194,255,0.1)]">
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-accent opacity-20 blur-3xl"></div>
            
            <span className="font-mono text-[10px] font-bold text-accent tracking-widest uppercase mb-6 relative z-10 flex items-center gap-2">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse"></span>
              Directives
            </span>
            
            <p className="font-mono text-sm text-ink-primary relative z-10 leading-relaxed mb-8">
              "Excellence is not an act, but a habit. We ship fast, but we never break the architecture. Optimization is the only path."
            </p>
            
            <div className="mt-auto flex items-center gap-4 relative z-10 border-t border-border/50 pt-4">
              <div className="flex flex-col">
                <span className="font-mono text-[10px] font-bold text-white tracking-widest uppercase">IEEE Core Control</span>
                <span className="font-mono text-[8px] text-ink-muted">SYS_YEAR: 2025</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
