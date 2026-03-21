"use client";
import { motion } from "framer-motion";
import { Zap, Code2, Globe } from "lucide-react";
import { ANIMATION } from "@/lib/constants";

const FEATURES = [
  {
    icon: <Zap className="w-6 h-6 text-primary" />,
    title: "Fast Execution",
    description: "We don't just plan. We build, ship, and iterate faster than anyone else."
  },
  {
    icon: <Code2 className="w-6 h-6 text-accent" />,
    title: "Engineering Excellence",
    description: "Clean code, scalable architecture, and pixel-perfect design."
  },
  {
    icon: <Globe className="w-6 h-6 text-blue-500" />,
    title: "Global Impact",
    description: "Solving real problems and competing on international stages."
  }
];

export function WhoWeAre() {
  return (
    <section id="about" className="relative w-full py-32 px-6 overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          
          <div className="flex-1 space-y-8">
            <motion.h2 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: ANIMATION.NORMAL, ease: "easeOut" }}
              className="text-4xl md:text-5xl font-bold tracking-tighter"
            >
              Building the next generation of <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-accent">tech leaders.</span>
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: ANIMATION.NORMAL, delay: 0.2 }}
              className="text-lg text-muted-foreground"
            >
              INNOVARE IEEE is not just a club. It's an accelerator. 
              We take raw talent and turn it into working technology. 
              Join a community of elite developers, designers, and innovators.
            </motion.p>
          </div>

          <div className="flex-1 grid gap-6 w-full">
            {FEATURES.map((feat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: ANIMATION.NORMAL, delay: 0.3 + i * 0.1 }}
                className="group relative p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors overflow-hidden"
              >
                <div className="absolute inset-0 bg-linear-to-r from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10 flex gap-4 items-start">
                  <div className="p-3 rounded-lg bg-black/50 border border-white/5 shadow-inner">
                    {feat.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-foreground">{feat.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{feat.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
