"use client";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Linkedin, Twitter, ChevronLeft, ChevronRight } from "lucide-react";
import React, { useState } from "react";

// Import the user-editable data source for all team profiles
import { TEAM_MEMBERS as MEMBERS } from "../../data/team-members";

export function Team() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => setCurrentIndex((prev) => (prev + 1) % MEMBERS.length);
  const handlePrev = () => setCurrentIndex((prev) => (prev - 1 + MEMBERS.length) % MEMBERS.length);

  const getDiff = (index: number) => {
    let diff = index - currentIndex;
    if (diff > MEMBERS.length / 2) diff -= MEMBERS.length;
    if (diff <= -MEMBERS.length / 2) diff += MEMBERS.length;
    return diff;
  };

  const getTransform = (diff: number) => {
    const abs = Math.abs(diff);

    // Expanded view scope: only hide completely if abs is >= 3
    if (abs >= 3) {
      return {
        x: "0%",
        y: 200,
        scale: 0.4,
        rotate: 0,
        opacity: 0,
        zIndex: 0,
      };
    }

    // Precise mathematical downside-bending arch that perfectly scopes 5 cards into view (diff: -2, -1, 0, 1, 2)
    return {
      x: `${diff * 115}%`,     // Spreads outwards symmetrically 
      y: abs * 90,             // Plunges downwards to form the architectural inverse arch
      scale: 1 - abs * 0.20,   // Aggressive scale reduction on outer edges so 5 cards fit beautifully
      rotate: diff * 2,        // Barely perceptible tilt towards the focal center
      opacity: 1 - abs * 0.35, // Smooth opacity bleed toward the horizon (0.3 on outermost rings)
      zIndex: 10 - abs,
    };
  };

  return (
    <section id="team" className="py-32 bg-background relative overflow-hidden border-t border-white/5 transform-gpu">
      {/* Background Deep Glow */}
      <div className="absolute top-[60%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[800px] bg-primary/10 blur-[150px] pointer-events-none rounded-full transform-gpu" />
      
      {/* Structural Network Lattice */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none mix-blend-overlay">
         <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
           <defs>
             <pattern id="team-grid" width="60" height="60" patternUnits="userSpaceOnUse">
               <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="1" />
             </pattern>
           </defs>
           <rect width="100%" height="100%" fill="url(#team-grid)" />
         </svg>
      </div>

      <div className="container mx-auto px-6 max-w-[1400px] relative z-10 w-full flex flex-col items-center">
        
        {/* Core Titles */}
        <div className="text-center mb-16 md:mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold tracking-widest text-primary uppercase mb-4"
          >
            Network Roster ({MEMBERS.length} Nodes Online)
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter mb-6"
          >
            Meet the Network.
          </motion.h3>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto"
          >
            A massive interconnected syndicate of elite engineers, architects, and designers working independently across the globe.
          </motion.p>
        </div>

        {/* Downside-Bending Extensible Arch Carousel Container */}
        <div className="relative h-[650px] md:h-[600px] w-full max-w-[100vw] flex justify-center perspective-[1200px] mt-12 overflow-visible">
          
          {/* SVG Hardware Orbital Thread Connection */}
          <div className="absolute top-[500px] left-1/2 -translate-x-1/2 w-[220vw] max-w-[2200px] h-[300px] pointer-events-none z-0 opacity-60">
             <svg viewBox="0 0 1000 300" className="w-full h-full" preserveAspectRatio="none">
               <path 
                 d="M 0 300 Q 500 -80 1000 300" 
                 fill="none" 
                 stroke="url(#thread-glow)" 
                 strokeWidth="2"
                 strokeDasharray="4 8"
               />
               <path 
                 d="M 0 300 Q 500 -80 1000 300" 
                 fill="none" 
                 stroke="url(#thread-glow)" 
                 strokeWidth="10"
                 className="blur-xl opacity-50"
               />
               <defs>
                 <linearGradient id="thread-glow" x1="0%" y1="0%" x2="100%" y2="0%">
                   <stop offset="0%" stopColor="transparent" />
                   <stop offset="25%" stopColor="#5EA3C1" stopOpacity="0.8" />
                   <stop offset="50%" stopColor="#5EA3C1" />
                   <stop offset="75%" stopColor="#5EA3C1" stopOpacity="0.8" />
                   <stop offset="100%" stopColor="transparent" />
                 </linearGradient>
               </defs>
             </svg>
          </div>

          <AnimatePresence initial={false}>
            {MEMBERS.map((member, i) => {
              const diff = getDiff(i);
              
              // Only render DOM elements for cards technically in scope to preserve huge performance across 25 arrays
              if (Math.abs(diff) >= 3) return null;
              
              const isCenter = diff === 0;

              return (
                <motion.div
                  key={member.name}
                  initial={false}
                  animate={getTransform(diff)}
                  transition={{ type: "spring", stiffness: 200, damping: 25 }}
                  className={`absolute top-0 w-[85vw] md:w-[380px] h-[500px] rounded-[2.5rem] shadow-2xl overflow-hidden border ${
                    isCenter ? 'border-primary/50 shadow-[0_0_60px_rgba(94,163,193,0.3)]' : 'border-white/10 shadow-black/80 pointer-events-none grayscale backdrop-blur-sm'
                  } bg-[#0a0a0a]`}
                  style={{ transformOrigin: "bottom center" }}
                >
                  {/* Base Rest node connecting the card to the SVG Railing */}
                  {isCenter && (
                    <div className="absolute bottom-[0px] left-1/2 -translate-x-1/2 w-12 h-12 bg-primary/20 rounded-full blur-xl animate-pulse" />
                  )}

                  {/* High Quality Profile Background */}
                  <div className="absolute inset-x-0 top-0 h-[65%] w-full">
                     <div 
                       className={`absolute inset-0 bg-cover bg-center transition-all duration-700 ${isCenter ? 'scale-100 opacity-100' : 'scale-110 opacity-70'}`} 
                       style={{ backgroundImage: `url(${member.img})` }} 
                     />
                     <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/50 to-transparent" />
                  </div>
                  
                  {/* Heavy Architectural Content Core */}
                  <div className="absolute inset-x-0 bottom-0 h-[50%] p-8 pt-0 flex flex-col items-center text-center bg-gradient-to-t from-background to-[#0a0a0a]/90">
                     <div className={`w-14 h-14 bg-background border rounded-full flex justify-center items-center mb-4 shadow-xl z-20 -mt-6 ${isCenter ? 'border-primary shadow-primary/30 text-primary' : 'border-white/10 text-white/50'}`}>
                        <span className="text-lg font-black tracking-tighter">{member.initials}</span>
                     </div>
                     <h3 className="text-3xl font-black text-white mb-2 drop-shadow-md tracking-tighter">{member.name}</h3>
                     <p className="text-[11px] font-bold tracking-widest uppercase text-primary mb-3 drop-shadow-md">{member.role}</p>
                     
                     <p className="text-white/60 text-[13px] leading-relaxed max-w-[90%] mb-6 limit-lines-2 line-clamp-2">
                       {member.bio}
                     </p>
                     
                     {/* Functional Dynamic Social Links */}
                     {isCenter && (
                       <div className="mt-auto flex gap-4">
                          {member.githubUrl && (
                             <a href={member.githubUrl} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-white/5 hover:bg-primary hover:text-white border border-white/10 hover:border-primary text-white/70 transition-all cursor-pointer">
                                <Github className="w-4 h-4" />
                             </a>
                          )}
                          {member.linkedinUrl && (
                             <a href={member.linkedinUrl} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-white/5 hover:bg-primary hover:text-white border border-white/10 hover:border-primary text-white/70 transition-all cursor-pointer">
                                <Linkedin className="w-4 h-4" />
                             </a>
                          )}
                          {member.twitterUrl && (
                             <a href={member.twitterUrl} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-white/5 hover:bg-primary hover:text-white border border-white/10 hover:border-primary text-white/70 transition-all cursor-pointer">
                                <Twitter className="w-4 h-4" />
                             </a>
                          )}
                       </div>
                     )}
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>

          {/* Massively Escalated Visibility Navigation Controls */}
          <div className="absolute top-[250px] w-full flex justify-between px-2 md:px-0 z-50 pointer-events-none">
             <button 
               onClick={handlePrev}
               className="relative pointer-events-auto flex items-center justify-center p-4 md:p-6 rounded-full bg-white text-black hover:bg-primary hover:text-white shadow-[0_0_40px_rgba(255,255,255,0.4)] hover:shadow-primary/50 transition-all duration-300 hover:scale-110 active:scale-95 group -translate-x-2 md:-translate-x-0"
             >
               <ChevronLeft className="w-8 h-8 md:w-10 md:h-10 group-hover:-translate-x-1 transition-transform" />
               <div className="absolute inset-0 rounded-full border border-white opacity-40 blur-[2px] group-hover:border-primary group-hover:animate-ping" />
             </button>
             
             <button 
               onClick={handleNext}
               className="relative pointer-events-auto flex items-center justify-center p-4 md:p-6 rounded-full bg-white text-black hover:bg-primary hover:text-white shadow-[0_0_40px_rgba(255,255,255,0.4)] hover:shadow-primary/50 transition-all duration-300 hover:scale-110 active:scale-95 group translate-x-2 md:-translate-x-0"
             >
               <ChevronRight className="w-8 h-8 md:w-10 md:h-10 group-hover:translate-x-1 transition-transform" />
               <div className="absolute inset-0 rounded-full border border-white opacity-40 blur-[2px] group-hover:border-primary group-hover:animate-ping" />
             </button>
          </div>

        </div>

      </div>
    </section>
  );
}
