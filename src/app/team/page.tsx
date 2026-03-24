"use client";

import { motion } from "framer-motion";
import { TEAM_MEMBERS as MEMBERS } from "../../data/team-members";
import { Github, Linkedin, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function TeamPage() {
  return (
    <main className="min-h-screen bg-background relative overflow-hidden py-24">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary/5 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-primary/5 blur-[150px] rounded-full pointer-events-none" />
      
      {/* Structural Network Grid */}
      <div className="fixed inset-0 opacity-[0.03] pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="full-team-grid" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M 100 0 L 0 0 0 100" fill="none" stroke="white" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#full-team-grid)" />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Navigation Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div>
            <Link href="/" className="inline-flex items-center gap-2 text-white/40 hover:text-primary transition-colors text-sm font-bold tracking-[0.2em] uppercase mb-8 group">
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Back to Satellite
            </Link>
            <motion.h1 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-6xl md:text-8xl font-black tracking-tighter text-white"
            >
              The Network<span className="text-primary">.</span>
            </motion.h1>
          </div>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="md:text-right border-l md:border-l-0 md:border-r border-white/10 pl-6 md:pl-0 md:pr-6 py-2"
          >
            <p className="text-primary text-sm font-bold tracking-widest uppercase mb-1">
              Active Nodes
            </p>
            <p className="text-5xl font-black text-white">{MEMBERS.length}</p>
          </motion.div>
        </div>

        {/* Global Grid System */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {[13, 14, 15, 16, 17, 18, 19, 12, 11, 20, 21, 22, 23, 24, 8, 7, 9, 10, 6, 5, 4, 2, 3, 1, 25, 26].map((nodeId, sequenceIndex) => {
            // Find map member based on 1-indexed Node ID
            const memberIndex = nodeId - 1;
            const member = MEMBERS[memberIndex];
            
            if (!member) return null;

            return (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: sequenceIndex * 0.05 }}
                className="group relative h-[450px] rounded-[2rem] border border-white/10 bg-[#0a0a0a] overflow-hidden hover:border-primary/50 transition-all duration-500"
              >
                {/* Profile Image with Dynamic Zoom */}
                <div className="absolute inset-0 h-full w-full">
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110" 
                    style={{ backgroundImage: `url(${member.img})` }} 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80" />
                </div>

                {/* Content Core */}
                <div className="absolute inset-x-0 bottom-0 p-8 flex flex-col items-center text-center bg-gradient-to-t from-background via-background/90 to-transparent">
                  <h3 className="text-2xl font-black text-white mb-2 tracking-tighter line-clamp-1">{member.name}</h3>
                  <p className="text-[10px] font-bold tracking-widest uppercase text-primary mb-6">{member.role}</p>

                  {/* Direct Social Access */}
                  <div className="flex gap-4 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                    <a href={member.githubUrl || "https://github.com"} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-white/5 border border-white/10 text-white hover:bg-primary hover:border-primary transition-all">
                      <Github className="w-4 h-4" />
                    </a>
                    <a href={member.linkedinUrl || "https://linkedin.com"} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-white/5 border border-white/10 text-white hover:bg-primary hover:border-primary transition-all">
                      <Linkedin className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                {/* Decorative Corner Numbers - Now reflecting the specific Node ID */}
                <div className="absolute top-6 left-8 text-[10px] font-black text-white/20 tracking-widest group-hover:text-primary transition-colors">
                  NODE_{nodeId.toString().padStart(2, '0')}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Closing Footnote */}
        <div className="mt-32 text-center">
          <p className="text-white/20 text-xs font-medium tracking-[0.3em] uppercase">
            Innovare Network Directory // Encryption Level 04
          </p>
        </div>
      </div>
    </main>
  );
}
