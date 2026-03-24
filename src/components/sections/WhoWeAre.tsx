"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

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
          
          {/* Left Side: Bold Mission Paragraphs */}
          <div className="flex-1 space-y-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <p className="text-2xl md:text-3xl text-white font-bold leading-tight tracking-tight">
                INNOVARE IEEE is a high-performance environment where we cultivate the elite skills 
                required to lead in the global technology landscape. 
              </p>
              
              <p className="text-xl md:text-2xl text-white font-bold leading-relaxed opacity-90">
                Our members don&apos;t just learn—they build, deploy, and scale solutions that solve 
                real challenges, moving beyond the boundaries of traditional education through 
                relentless shipping and deep-tech focus.
              </p>
            </motion.div>
          </div>

          {/* Right Side: Simple Bullet Points */}
          <div className="flex-1 space-y-12">
            <div className="space-y-10 border-l border-white/5 pl-8 lg:pl-12">
              {PILLARS.map((pillar, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="relative space-y-2 group"
                >
                  {/* Custom Tech Bullet */}
                  <div className="absolute -left-[41px] lg:-left-[57px] top-3 w-4 h-4 rounded-full bg-primary/20 border border-primary/40 group-hover:bg-primary group-hover:shadow-[0_0_15px_rgba(94,163,193,0.8)] transition-all duration-300" />
                  
                  <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors duration-300">
                    {pillar.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {pillar.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
