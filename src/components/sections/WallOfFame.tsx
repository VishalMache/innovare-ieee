"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Medal, Award, Star, Shield } from "lucide-react";

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
        <div className="absolute -inset-2 bg-primary/10 rounded-xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        
        {/* The Frame / Shell */}
        <div className="relative p-1.5 bg-neutral-900 border border-white/10 rounded-xl overflow-hidden group-hover:border-primary/30 transition-all duration-500 shadow-2xl">
          
          {/* Glass Inner Matte */}
          <div className="relative p-8 bg-white/[0.02] backdrop-blur-sm rounded-lg flex flex-col items-center text-center min-h-[300px] border border-white/5">
            
            {/* Ornate Inner Border (Thin Glowing Lines) */}
            <div className="absolute inset-4 border border-primary/20 rounded shadow-[inset_0_0_15px_rgba(94,163,193,0.05)] pointer-events-none" />
            <div className="absolute inset-5 border border-primary/10 rounded pointer-events-none" />

            {isComingSoon ? (
              <div className="flex flex-col items-center justify-center h-full pt-16 opacity-20">
                <Star className="w-12 h-12 text-primary/40 mb-4 stroke-1" />
                <span className="font-serif italic text-xl tracking-widest text-white/40">COMMING SOON...</span>
              </div>
            ) : (
              <div className="flex flex-col items-center w-full pt-4 h-full">
                
                {/* Header Text */}
                <h4 className="font-mono text-[10px] text-primary/60 uppercase tracking-[0.4em] mb-4">Official Accreditation</h4>
                
                <div className="w-12 h-px bg-primary/20 mb-8" />

                {/* Main Award Title */}
                <h3 className="font-serif text-2xl md:text-3xl text-white leading-tight mb-4 px-4 drop-shadow-[0_2px_10px_rgba(255,255,255,0.1)]">
                  {title}
                </h3>
                
                {recipient && (
                  <p className="font-serif italic text-white/50 text-lg mb-8">{recipient}</p>
                )}

                {/* Tech Seal (Gold/Amber Glow) */}
                <div className="mt-auto relative group-hover:scale-110 transition-transform duration-500">
                  <div className="relative w-14 h-14 rounded-full bg-amber-400/10 border border-amber-400/30 flex items-center justify-center shadow-[0_0_20px_rgba(251,191,36,0.1)]">
                    <Medal className="w-7 h-7 text-amber-500/80 drop-shadow-md" />
                    {/* Pulsing ring */}
                    <div className="absolute inset-0 border border-amber-400/20 rounded-full animate-ping opacity-20" />
                  </div>
                </div>
                
                {date && (
                  <p className="font-mono text-[9px] text-white/30 uppercase tracking-[0.6em] mt-8 mb-2">{date}</p>
                )}
                
                <div className="w-8 h-px bg-white/10 mt-2" />
              </div>
            )}

            {/* Subtle Glass Reflection */}
            <div className="absolute top-0 left-0 w-full h-full bg-linear-to-br from-white/[0.05] to-transparent pointer-events-none" />
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
    <section className="relative py-40 overflow-hidden z-10 bg-neutral-950">
      {/* Background Ambience */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
           style={{ backgroundImage: `url("https://www.transparenttextures.com/patterns/carbon-fibre.png")` }} />
      
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_20%,_rgba(94,163,193,0.08)_0%,_transparent_60%)] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* Formal Gallery Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-28"
        >
          <div className="inline-flex items-center gap-2 mb-6 opacity-40">
            <div className="h-[1px] w-12 bg-primary" />
            <Shield className="w-4 h-4 text-primary" />
            <div className="h-[1px] w-12 bg-primary" />
          </div>
          
          <h2 className="font-serif text-6xl md:text-8xl text-neutral-100 tracking-tight leading-none mb-8">
            Wall <span className="italic font-light opacity-80">of</span> Fame
          </h2>
          
          <div className="w-32 h-[1px] bg-linear-to-r from-transparent via-primary/30 to-transparent mx-auto mb-8" />
          
          <p className="text-primary/50 font-serif italic text-xl max-w-2xl mx-auto opacity-70">
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
        <div className="mt-20 flex justify-center opacity-20">
           <div className="w-1.5 h-1.5 rounded-full bg-primary mx-1" />
           <div className="w-1.5 h-1.5 rounded-full bg-primary/40 mx-1" />
           <div className="w-1.5 h-1.5 rounded-full bg-primary/10 mx-1" />
        </div>
      </div>
    </section>
  );
}
