"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { SplineScene } from "@/components/ui/splite";

const PILLARS = [
  {
    title: "Fast Execution",
    description: "Bridging the gap between idea and deployment with relentless speed and precision."
  },
  {
    title: "Engineering Excellence",
    description: "Built on clean architecture, scalable code, and industrial standards."
  },
  {
    title: "Global Impact",
    description: "Representing academic brilliance on international stages and real-world stages."
  }
];

function RisingParticles() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 40,
        y: (e.clientY / window.innerHeight - 0.5) * 40,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {[...Array(40)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-primary/40"
          initial={{
            x: `${Math.random() * 100}%`,
            y: "110%",
            scale: Math.random() * 0.5 + 0.5,
            opacity: 0,
          }}
          animate={{
            y: "-10%",
            opacity: [0, 0.6, 0],
            translateX: mousePos.x * (Math.random() * 0.5 + 0.5),
            translateY: mousePos.y * (Math.random() * 0.5 + 0.5),
          }}
          transition={{
            y: {
              duration: Math.random() * 8 + 10,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 20,
            },
            opacity: {
              duration: Math.random() * 8 + 10,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 20,
            },
            translateX: { type: "spring", stiffness: 50, damping: 20 },
            translateY: { type: "spring", stiffness: 50, damping: 20 },
          }}
          style={{
            width: `${Math.random() * 5 + 2}px`,
            height: `${Math.random() * 5 + 2}px`,
            filter: "blur(1px)",
          }}
        />
      ))}
    </div>
  );
}

export function WhoWeAre() {
  return (
    <section id="about" className="relative w-full py-40 px-6 overflow-hidden bg-background">
      <RisingParticles />
      
      {/* Immersive Background Atmosphere */}
      <div className="absolute top-1/4 -right-1/4 w-[600px] h-[600px] bg-primary/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 -left-1/4 w-[600px] h-[600px] bg-accent/5 blur-[120px] rounded-full pointer-events-none" />
      
      {/* Decorative Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '48px 48px' }} />

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          
          {/* Left Side: Bold Mission Paragraphs and Pillars */}
          <div className="flex-1 space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <h2 className="text-2xl md:text-3xl text-white font-bold leading-tight tracking-tight">
                INNOVARE IEEE is a high-performance environment where we cultivate the elite skills 
                required to lead in the global technology landscape. 
              </h2>
              
              <p className="text-lg md:text-xl text-white font-medium leading-relaxed opacity-90">
                Our members don&apos;t just learn—they build, deploy, and scale solutions that solve 
                real challenges, moving beyond the boundaries of traditional education through 
                relentless shipping and deep-tech focus.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-6 border-t border-white/10">
              {PILLARS.map((pillar, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="space-y-2 group"
                >
                  <div className="w-8 h-1 rounded-full bg-primary/40 group-hover:bg-primary transition-colors duration-300 mb-4" />
                  <h3 className="text-lg font-bold text-white group-hover:text-primary transition-colors duration-300">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {pillar.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Side: Spline Robot */}
          <div className="flex-1 relative w-full h-[400px] md:h-[600px] flex items-center justify-center">
            <SplineScene 
              scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
              className="w-full h-full"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
