"use client";
import { motion } from "framer-motion";
import { ANIMATION, CONTENT } from "@/lib/constants";
import dynamic from "next/dynamic";
import { Suspense, useState, useEffect } from "react";
import { Fallback3D } from "@/components/animations/Fallback3D";

// Lazy load heavy 3D R3F to prevent blocking thread
const Scene3D = dynamic(() => import("@/components/3d/HeroScene").then(mod => mod.HeroScene), { 
  ssr: false,
});

export function HeroSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden pt-32 pb-40">
      {/* 3D Background with Suspense & Fallback */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {mounted && (
          <Suspense fallback={<Fallback3D type="hero" />}>
            <Scene3D />
          </Suspense>
        )}
        {!mounted && <Fallback3D type="hero" />}
      </div>

      <div className="container relative z-10 mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center mt-12">
        
        {/* Left Column: Text Content */}
        <div className="flex flex-col items-start text-left w-full">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: ANIMATION.HERO, ease: "easeOut", delay: 0.4 }}
            className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tighter text-balance mb-6 max-w-2xl leading-tight"
          >
            Where ideas become <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-accent">engineered reality.</span>
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
              className="group relative px-8 py-4 text-sm font-bold text-black bg-foreground rounded-full overflow-hidden transition-transform hover:scale-105 active:scale-95"
            >
              <span className="relative z-10 transition-colors group-hover:text-white">{CONTENT.COPY.ctaJoin}</span>
              <div className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
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

        {/* Right Column: Hero Graphic / Video */}
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

      {/* Gradient Overlay for bottom blending */}
      <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
}
