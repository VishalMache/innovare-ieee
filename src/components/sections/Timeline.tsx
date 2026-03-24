"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const EVENTS = [
  { 
    year: "2025", 
    date: "12th Jan 2025",
    title: "Inauguration of PCU IEEE Student Branch", 
  },
  { 
    year: "2025", 
    date: "25th Jan 2025",
    title: "Online Workshop – “How to Write a Research Paper”", 
  },
  { 
    year: "2025", 
    date: "27th Feb 2025",
    title: "Guest Lecture – “AI in Business and Finance”", 
  },
  { 
    year: "2025", 
    date: "6th–8th March 2025",
    title: "Day Workshop – “Zscaler Cloud Security”", 
  },
  { 
    year: "2025", 
    date: "17th–28th Mar 2025",
    title: "Two-Week Training Program – “Software Testing”", 
  },
  { 
    year: "2025", 
    date: "12th April 2025",
    title: "Online Webinar – “Research Paper Essentials”", 
  },
];

export function Timeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section ref={containerRef} className="py-32 relative bg-background/50 overflow-hidden transform-gpu">
      {/* Optimized Background Flare */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 blur-[100px] pointer-events-none rounded-full transform-gpu" />
      
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter mb-32 text-center">Our Journey.</h2>
        
        <div className="relative">
          {/* Static Vertical Line */}
          <div className="absolute left-[38px] md:left-1/2 top-0 bottom-0 w-px bg-white/10 md:-translate-x-1/2" />
          
          {/* Enhanced Glowing Vertical Line ("The Comet") */}
          <motion.div 
            style={{ height }}
            className="absolute left-[38px] md:left-1/2 top-0 w-[4px] bg-linear-to-b from-transparent via-primary to-primary md:-translate-x-1/2 shadow-[0_0_30px_rgba(94,163,193,1)] rounded-full z-10" 
          >
             {/* Falling Comet Spark */}
             <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-32 bg-gradient-to-t from-white to-transparent blur-[2px] opacity-70" />
             <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-white rounded-full shadow-[0_0_30px_rgba(255,255,255,1)]" />
          </motion.div>
          
          <div className="space-y-24 md:space-y-32">
            {EVENTS.map((event, i) => (
              <div key={i} className={`relative flex flex-col md:flex-row items-start md:items-center group ${i % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
                
                {/* Horizontal Connective Branch (Desktop Only) */}
                <div className={`hidden md:block absolute top-[50%] h-[2px] bg-linear-to-r ${i % 2 === 0 ? 'left-[50%] from-primary/50 group-hover:from-primary to-transparent' : 'right-[50%] from-transparent to-primary/50 group-hover:to-primary'} w-[5%] transition-colors duration-500 z-10`} />

                {/* Timeline Interactive Node */}
                <div className="absolute left-[38px] md:left-1/2 w-12 h-12 rounded-full bg-background border border-white/20 -translate-x-1/2 z-20 flex items-center justify-center shadow-lg group-hover:border-primary/50 transition-colors duration-500 mt-2 md:mt-0 will-change-transform group-hover:shadow-[0_0_20px_rgba(94,163,193,0.3)]">
                   <div className="w-4 h-4 rounded-full bg-white/20 group-hover:bg-white group-hover:shadow-[0_0_20px_rgba(255,255,255,1)] transition-all duration-500 group-hover:scale-125" />
                </div>
                
                {/* Enhanced Content Card Container */}
                <motion.div 
                  initial={{ opacity: 0, x: i % 2 === 0 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
                  className="w-full pl-24 md:pl-0 md:w-[45%] will-change-transform transform-gpu"
                >
                  <div className="relative w-full p-6 lg:p-8 rounded-[2rem] bg-black/40 border border-white/10 backdrop-blur-md group-hover:border-primary/50 transition-all duration-700 hover:shadow-[0_0_40px_rgba(94,163,193,0.2)] hover:-translate-y-2 overflow-hidden transform-gpu flex flex-col justify-center">
                    
                    {/* Architectural Tech Grid */}
                    <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay">
                       <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                         <defs>
                           <pattern id={`timeline-grid-${i}`} width="40" height="40" patternUnits="userSpaceOnUse">
                             <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
                           </pattern>
                         </defs>
                         <rect width="100%" height="100%" fill={`url(#timeline-grid-${i})`} />
                       </svg>
                    </div>

                    {/* Internal Dynamic Glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-2xl pointer-events-none transform-gpu" />
                    
                    {/* High-tech Top Border Line */}
                    <div className="absolute inset-x-0 top-0 h-[2px] w-full bg-linear-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    
                    {/* Massive Year Watermark */}
                    <div className="absolute -top-4 -right-2 text-7xl md:text-9xl font-black text-white/[0.04] leading-none select-none pointer-events-none transition-colors duration-700 group-hover:text-white/[0.08]">
                      {event.year}
                    </div>

                    {/* Content */}
                    <div className="relative z-10">
                      <span className="text-sm font-bold tracking-widest text-primary mb-2 flex items-center gap-3">
                         <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse shadow-[0_0_10px_rgba(94,163,193,0.8)]" />
                         {(event as any).date || event.year}
                      </span>
                      <h3 className="text-2xl lg:text-3xl font-black tracking-tighter text-white group-hover:text-primary transition-colors duration-500 leading-tight">
                        {event.title}
                      </h3>
                    </div>

                  </div>
                </motion.div>
                
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
