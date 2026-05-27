"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Github, Linkedin, Users, Shield, Cpu, Sparkles } from "lucide-react";
import React, { useState, useMemo } from "react";

// Import the user-editable data source for all team profiles
import { TEAM_MEMBERS as MEMBERS } from "../../data/team-members";

type Department = "All" | "Leadership" | "Heads" | "Volunteers";

export function Team() {
  const [activeDept, setActiveDept] = useState<Department>("All");

  // Dynamic grouping logic to partition the 26 members correctly
  const groupedMembers = useMemo(() => {
    return MEMBERS.map((member) => {
      const role = member.role.toLowerCase();
      let dept: Department = "Volunteers";

      if (
        role.includes("president") || 
        role.includes("secretary") || 
        role.includes("treasurer")
      ) {
        dept = "Leadership";
      } else if (role.includes("head") || role.includes("vice")) {
        // "Vice President" would fall into Leadership because it contains "president" above
        dept = "Heads";
      } else if (role.includes("volunteer")) {
        dept = "Volunteers";
      }

      return { ...member, dept };
    });
  }, []);

  // Filter members based on selected department tab
  const filteredMembers = useMemo(() => {
    if (activeDept === "All") return groupedMembers;
    return groupedMembers.filter((m) => m.dept === activeDept);
  }, [groupedMembers, activeDept]);

  // Derive 1-2 letter initials from member names dynamically
  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .slice(0, 2)
      .toUpperCase();
  };

  // Stagger entry configurations
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 25, scale: 0.95 },
    show: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { type: "spring" as const, stiffness: 150, damping: 18 }
    },
  };

  const tabs: { id: Department; label: string; icon: React.ComponentType<{ className?: string }> }[] = [
    { id: "All", label: "All Nodes", icon: Users },
    { id: "Leadership", label: "Leadership", icon: Shield },
    { id: "Heads", label: "Vertical Heads", icon: Cpu },
    { id: "Volunteers", label: "Volunteers", icon: Sparkles },
  ];

  return (
    <section id="team" className="py-32 bg-background relative overflow-hidden border-t border-white/5">
      {/* Background Deep Ambient Glows */}
      <div className="absolute top-[30%] left-1/4 w-[800px] h-[500px] bg-primary/5 blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute bottom-[20%] right-1/4 w-[800px] h-[500px] bg-sky-500/5 blur-[120px] pointer-events-none rounded-full" />
      
      {/* Structural Network Grid Overlay */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none mix-blend-overlay">
         <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="team-grid" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#team-grid)" />
         </svg>
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10 w-full flex flex-col items-center">
        
        {/* Section Titles */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold tracking-widest text-primary uppercase mb-4"
          >
            Network Roster ({MEMBERS.length} Active Nodes)
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter mb-6"
          >
            Meet the Syndicate.
          </motion.h3>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto"
          >
            A high-performance team of developers, researchers, and designers shipping the next generation of academic tech.
          </motion.p>
        </div>

        {/* Dynamic Department Tabs */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="flex flex-wrap items-center justify-center gap-2 p-1.5 bg-white/5 border border-white/10 rounded-2xl md:rounded-full mb-16 max-w-full select-none"
        >
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveDept(tab.id)}
                className={`relative flex items-center gap-2 px-5 py-2.5 rounded-xl md:rounded-full text-xs font-bold tracking-wider uppercase transition-all duration-300 ${
                  activeDept === tab.id 
                    ? "text-black" 
                    : "text-white/60 hover:text-white hover:bg-white/5"
                }`}
              >
                {activeDept === tab.id && (
                  <motion.div
                    layoutId="active-dept-pill"
                    className="absolute inset-0 bg-white rounded-xl md:rounded-full -z-10 shadow-[0_0_20px_rgba(255,255,255,0.2)]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <Icon className="w-3.5 h-3.5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </motion.div>

        {/* Members Roster Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full"
        >
          <AnimatePresence mode="popLayout">
            {filteredMembers.map((member) => (
              <motion.div
                key={member.name}
                layout
                variants={cardVariants}
                exit={{ opacity: 0, scale: 0.9, y: 15 }}
                className="group relative p-6 bg-white/[0.02] hover:bg-white/[0.04] border border-white/10 hover:border-primary/45 transition-all duration-500 rounded-3xl overflow-hidden flex flex-col items-center text-center shadow-xl h-[330px] justify-between"
              >
                {/* Micro Ambient Glow Behind Profile on Hover */}
                <div className="absolute -bottom-16 w-32 h-32 bg-primary/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700 pointer-events-none" />

                {/* Profile Circle Frame */}
                <div className="relative w-28 h-28 rounded-2xl overflow-hidden border border-white/10 group-hover:border-primary/40 transition-colors duration-500 shadow-md bg-neutral-900/60 flex items-center justify-center">
                  
                  {/* Fallback Initials Avatar (shown while image downloads) */}
                  <span className="font-mono text-xl font-bold text-white/30 tracking-wider">
                    {getInitials(member.name)}
                  </span>

                  {/* Profile Picture — Configured with lazy loading to save bandwidth */}
                  <img
                    src={member.img}
                    alt={member.name}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:scale-105 group-hover:opacity-100 transition-all duration-500"
                    onError={(e) => {
                      // Hide image element if file is missing, falling back to initials background
                      (e.target as HTMLElement).style.display = "none";
                    }}
                  />
                </div>

                {/* Profile Info */}
                <div className="mt-4 flex-1 flex flex-col justify-center">
                  <h4 className="text-lg font-black text-white group-hover:text-primary transition-colors duration-300 tracking-tight leading-tight">
                    {member.name}
                  </h4>
                  <p className="text-[10px] font-bold tracking-widest uppercase text-primary/70 mt-1">
                    {member.role}
                  </p>
                </div>

                {/* Social Nodes */}
                <div className="flex gap-3 mt-4 pt-4 border-t border-white/5 w-full justify-center relative z-10 select-none">
                  <a
                    href={member.githubUrl || "https://github.com"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-xl bg-white/5 border border-white/10 text-white/50 hover:text-white hover:bg-primary/25 hover:border-primary/50 hover:shadow-[0_0_12px_rgba(94,163,193,0.3)] transition-all duration-300"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  <a
                    href={member.linkedinUrl || "https://linkedin.com"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-xl bg-white/5 border border-white/10 text-white/50 hover:text-white hover:bg-primary/25 hover:border-primary/50 hover:shadow-[0_0_12px_rgba(94,163,193,0.3)] transition-all duration-300"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
