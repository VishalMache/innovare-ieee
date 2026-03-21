"use client";
import { useInView, motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";

function Counter({ from, to, duration, suffix = "" }: { from: number; to: number; duration: number; suffix?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [count, setCount] = useState(from);

  useEffect(() => {
    if (!inView) return;
    let startTimestamp = 0;
    let animationFrame: number;
    
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
      // easeOutExpo
      const easing = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(Math.floor(easing * (to - from) + from));
      
      if (progress < 1) {
        animationFrame = window.requestAnimationFrame(step);
      }
    };
    
    animationFrame = window.requestAnimationFrame(step);
    
    return () => window.cancelAnimationFrame(animationFrame);
  }, [inView, from, to, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

const STATS = [
  { value: 500, suffix: "+", label: "Active Members" },
  { value: 50, suffix: "+", label: "Projects Built" },
  { value: 20, suffix: "+", label: "Hackathons Won" },
  { value: 10, suffix: "k+", label: "Lines Shipped" }
];

export function StatsCounter() {
  return (
    <section className="py-24 bg-background relative z-10 w-full overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/10 blur-[120px] pointer-events-none rounded-full" />
      
      <div className="container mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
        {STATS.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.1, type: "spring", stiffness: 100 }}
            className="group relative flex flex-col items-center justify-center p-8 rounded-[2rem] bg-white/5 border border-white/10 backdrop-blur-xl shadow-2xl overflow-hidden hover:border-primary/50 transition-colors duration-500"
          >
            {/* Top border highlight */}
            <div className="absolute top-0 inset-x-0 h-px w-full bg-linear-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* Soft inner glow on hover */}
            <div className="absolute -inset-1 bg-linear-to-b from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl pointer-events-none" />

            <div className="text-5xl md:text-6xl font-black text-white mb-3 tracking-tighter drop-shadow-sm relative z-10">
              <Counter from={0} to={stat.value} duration={2} suffix={stat.suffix} />
            </div>
            
            <div className="text-sm md:text-xs lg:text-sm text-primary tracking-widest uppercase font-bold text-center relative z-10">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
