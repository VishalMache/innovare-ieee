"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ANIMATION } from "@/lib/constants";

export function PageLoader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Lock scroll immediately on mount (if JS is enabled)
    document.documentElement.style.overflow = "hidden";
    
    // Fallback timer: wait 1.5s then lift the loader
    // This allows 3D elements to load, or gracefully falls back if they fail
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    
    return () => {
      clearTimeout(timer);
      document.documentElement.style.overflow = "";
    };
  }, []);

  return (
    <motion.div
      id="page-loader"
      initial={{ y: 0 }}
      animate={{ y: loading ? 0 : "-100%" }}
      transition={{ duration: ANIMATION.HERO, ease: [0.22, 1, 0.36, 1] }}
      onAnimationComplete={() => {
        if (!loading) document.documentElement.style.overflow = "";
      }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background"
    >
      <div className="flex flex-col items-center gap-6">
        <div className="relative flex h-16 w-16 items-center justify-center">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
            className="absolute h-full w-full rounded-full border-t border-r border-primary/40"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
            className="absolute h-12 w-12 rounded-full border-b border-l border-foreground/30"
          />
          <motion.div
            animate={{ scale: [0.8, 1, 0.8], opacity: [0.5, 1, 0.5] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="h-2 w-2 rounded-full bg-primary"
          />
        </div>
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: ANIMATION.NORMAL, delay: 0.2 }}
          className="flex flex-col items-center gap-1"
        >
          <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-muted-foreground">
            System Initialization
          </span>
          <span className="text-xs font-semibold tracking-widest text-foreground">
            INNOVARE
          </span>
        </motion.div>
      </div>
    </motion.div>
  );
}
