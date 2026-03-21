"use client";
import { motion } from "framer-motion";

export function Fallback3D({ type = "hero" }: { type?: "hero" | "project" }) {
  // Graceful degradation: A high-quality CSS-only fallback using blur and gradients
  if (type === "hero") {
    return (
      <div className="absolute inset-0 z-0 flex items-center justify-center overflow-hidden bg-background">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.4, scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute h-[600px] w-[600px] rounded-full bg-primary/20 blur-[150px]"
        />
        <motion.div
          initial={{ opacity: 0, rotate: 45 }}
          animate={{ opacity: 0.2, rotate: 0 }}
          transition={{ duration: 3, ease: "easeOut", delay: 0.2 }}
          className="absolute mt-32 h-[800px] w-[200px] -rotate-45 bg-accent/30 blur-[120px]"
        />
      </div>
    );
  }

  // Project fallback
  return (
    <div className="absolute inset-0 z-0 flex items-center justify-center bg-card/50 rounded-xl overflow-hidden backdrop-blur-md border border-white/5">
       <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          className="h-full w-full bg-linear-to-tr from-primary/10 to-accent/10"
        />
    </div>
  );
}
