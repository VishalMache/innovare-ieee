"use client";
import { motion } from "framer-motion";

const LOGOS = [
  { name: "innovare" },
  { name: "pcu" },
  { name: "ieee maharashtra branch" },
  { name: "innovare" },
  { name: "pcu" },
  { name: "ieee maharashtra branch" },
];

export function LogosStrip() {
  return (
    <section className="w-full py-12 border-y border-white/5 bg-background/50 overflow-hidden relative">
      <div className="absolute inset-x-0 top-0 h-full w-32 bg-linear-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-x-0 right-0 h-full w-32 bg-linear-to-l from-background to-transparent z-10 pointer-events-none ml-auto" />
      
      <div className="flex w-full overflow-hidden">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
          className="flex whitespace-nowrap min-w-max items-center gap-16 md:gap-32"
        >
          {/* Loop to ensure seamless scroll */}
          {[...LOGOS, ...LOGOS, ...LOGOS, ...LOGOS].map((logo, i) => (
            <div 
              key={i} 
              className="flex-shrink-0 text-xl md:text-3xl font-black tracking-widest text-muted-foreground/30 transition-all duration-500 hover:text-foreground hover:scale-110 cursor-pointer"
            >
              {logo.name}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
