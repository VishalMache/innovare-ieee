"use client";
import { motion } from "framer-motion";
import { ANIMATION, CONTENT } from "@/lib/constants";
import dynamic from "next/dynamic";
import { Suspense, useState, useEffect } from "react";
import { Fallback3D } from "@/components/animations/Fallback3D";

// Lazy load canvas scene
const Scene3D = dynamic(
  () => import("@/components/3d/HeroScene").then((mod) => mod.HeroScene),
  { ssr: false }
);

export function HeroSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden pt-32 pb-40">
      {/* Space background canvas */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {mounted && (
          <Suspense fallback={<Fallback3D type="hero" />}>
            <Scene3D />
          </Suspense>
        )}
        {!mounted && <Fallback3D type="hero" />}
      </div>

      <div className="container relative z-10 mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center mt-12">

        {/* ── Left Column: Text ── */}
        <div className="flex flex-col items-start text-left w-full">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-6 flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/40 bg-primary/10 text-primary text-xs font-semibold tracking-widest uppercase"
          >
            <span>✦</span>
            IEEE Student Branch
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: ANIMATION.HERO, ease: "easeOut", delay: 0.4 }}
            className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tighter text-balance mb-6 max-w-2xl leading-tight"
          >
            Where ideas become{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent-foreground">
              engineered reality.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: ANIMATION.HERO, ease: "easeOut", delay: 0.6 }}
            className="text-lg md:text-xl text-muted-foreground max-w-xl text-balance mb-12"
          >
            {CONTENT.COPY.heroSubHeadline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: ANIMATION.HERO, ease: "easeOut", delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center gap-4"
          >
            <a
              href="#join"
              data-cursor="hover"
              className="px-8 py-4 text-sm font-bold text-white rounded-full transition-transform hover:scale-105 active:scale-95 bg-primary hover:bg-primary/90 shadow-[0_0_28px_rgba(94,163,193,0.45)]"
            >
              {CONTENT.COPY.ctaJoin}
            </a>
            <a
              href="#projects"
              data-cursor="hover"
              className="px-8 py-4 text-sm font-bold text-foreground bg-white/5 border border-white/10 rounded-full hover:bg-white/10 transition-colors"
            >
              {CONTENT.COPY.ctaExplore}
            </a>
          </motion.div>
        </div>

        {/* ── Right Column: Video ── */}
        <motion.div
          initial={{ opacity: 0, filter: "blur(20px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: ANIMATION.HERO, delay: 0.5 }}
          className="relative w-full aspect-square md:aspect-video lg:aspect-square flex items-center justify-center pointer-events-none"
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-contain opacity-90 select-none pb-12 lg:pb-0 mix-blend-screen"
          >
            <source src="/ieee-bg.mp4" type="video/mp4" />
          </video>
        </motion.div>

      </div>

      {/* Bottom gradient blend */}
      <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
}
