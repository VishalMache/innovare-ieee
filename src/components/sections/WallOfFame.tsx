"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Medal, Star, Shield } from "lucide-react";

/* ── Digital Certificate Type ── */
type CertificateProps = {
  title?: string;
  recipient?: string;
  date?: string;
  isComingSoon?: boolean;
  index: number;
};

/* ── Digital Certificate Card Component ── */
function DigitalCertificate({ title, recipient, date, isComingSoon, index }: CertificateProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="relative mb-12 break-inside-avoid"
    >
      <div className="group relative">
        {/* Glow behind the card */}
        <div className="absolute -inset-2 bg-primary/10 rounded-2xl blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
        
        {/* The Frame / Shell */}
        <div className="relative p-1 bg-white/[0.02] border border-white/[0.04] rounded-3xl overflow-hidden group-hover:border-accent/30 transition-all duration-500 shadow-2xl">
          
          {/* Glass Inner Matte */}
          <div className="relative p-8 bg-neutral-950/20 backdrop-blur-xl rounded-2xl flex flex-col items-center text-center min-h-[300px] border border-white/[0.02]">
            
            {/* Ornate Inner Border (Thin Glowing Lines) */}
            <div className="absolute inset-4 border border-accent/15 rounded-xl shadow-[inset_0_0_15px_rgba(45,212,191,0.02)] pointer-events-none" />
            <div className="absolute inset-5 border border-primary/5 rounded-xl pointer-events-none" />

            {isComingSoon ? (
              <div className="flex flex-col items-center justify-center h-full pt-16 opacity-30">
                <Star className="w-12 h-12 text-primary/40 mb-4 stroke-1 animate-pulse" />
                <span className="font-heading tracking-[0.3em] text-sm text-white/50">PENDING AUDIT...</span>
              </div>
            ) : (
              <div className="flex flex-col items-center w-full pt-4 h-full">
                
                {/* Header Text */}
                <h4 className="font-heading text-[10px] text-accent/60 uppercase tracking-[0.4em] mb-4">Official Verification</h4>
                
                <div className="w-12 h-px bg-accent/20 mb-8" />

                {/* Main Award Title */}
                <h3 className="font-heading text-xl md:text-2xl font-black text-white leading-tight mb-4 px-4 drop-shadow-[0_2px_10px_rgba(255,255,255,0.05)] group-hover:text-accent transition-colors duration-300">
                  {title}
                </h3>
                
                {recipient && (
                  <p className="font-sans font-medium text-white/60 text-sm mb-8">{recipient}</p>
                )}

                {/* Tech Seal (Teal Glow) */}
                <div className="mt-auto relative group-hover:scale-110 transition-transform duration-500">
                  <div className="relative w-14 h-14 rounded-full bg-accent/10 border border-accent/30 flex items-center justify-center shadow-[0_0_20px_rgba(45,212,191,0.15)]">
                    <Medal className="w-6 h-6 text-accent drop-shadow-md" />
                    {/* Pulsing ring */}
                    <div className="absolute inset-0 border border-accent/20 rounded-full animate-ping opacity-25" />
                  </div>
                </div>
                
                {date && (
                  <p className="font-mono text-[8px] text-white/30 uppercase tracking-[0.5em] mt-8 mb-2">{date}</p>
                )}
                
                <div className="w-8 h-px bg-white/10 mt-2" />
              </div>
            )}

            {/* Subtle Glass Reflection */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/[0.03] to-transparent pointer-events-none" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

const AWARDS = [
  { title: "Champion, HackMIT 2024", recipient: "INNOVARE IEEE Team", date: "SEPTEMBER 2024" },
  { title: "Top 1% Global Engineering Chapter", date: "ANNUAL RANKING 2024" },
  { title: "Best Student Branch, Region 10", recipient: "Executive Committee", date: "DECEMBER 2023" },
  { isComingSoon: true },
  { isComingSoon: true },
];

export function WallOfFame() {
  return (
    <section className="relative py-40 overflow-hidden z-10 bg-background">
      {/* Background Ambience */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none mix-blend-overlay"
           style={{ backgroundImage: `url("https://www.transparenttextures.com/patterns/carbon-fibre.png")` }} />
      
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_20%,_rgba(217,70,239,0.06)_0%,_transparent_60%)] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* Formal Gallery Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-28"
        >
          <div className="inline-flex items-center gap-2 mb-6 opacity-30">
            <div className="h-[1px] w-12 bg-accent" />
            <Shield className="w-4 h-4 text-accent" />
            <div className="h-[1px] w-12 bg-accent" />
          </div>
          
          <h2 className="font-heading text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tighter leading-none mb-8">
            Wall of Fame
          </h2>
          
          <div className="w-32 h-[1px] bg-gradient-to-r from-transparent via-accent/30 to-transparent mx-auto mb-8" />
          
          <p className="text-white/70 font-sans text-base md:text-lg max-w-2xl mx-auto">
            A permanent digital record of architectural excellence and innovation.
          </p>
        </motion.div>

        {/* Staggered Column Layout */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-12 lg:gap-16">
          {AWARDS.map((award, i) => (
            <DigitalCertificate 
              key={i} 
              index={i}
              {...award} 
            />
          ))}
        </div>

        {/* Footer Hardware Effect */}
        <div className="mt-20 flex justify-center opacity-30">
           <div className="w-1.5 h-1.5 rounded-full bg-accent mx-1" />
           <div className="w-1.5 h-1.5 rounded-full bg-accent/40 mx-1" />
           <div className="w-1.5 h-1.5 rounded-full bg-accent/10 mx-1" />
        </div>
      </div>
    </section>
  );
}
