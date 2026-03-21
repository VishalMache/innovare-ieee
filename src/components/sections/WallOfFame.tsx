"use client";
import { motion } from "framer-motion";
import { Trophy, Star, Shield, Cpu, Globe } from "lucide-react";
import { ANIMATION } from "@/lib/constants";

const ACHIEVEMENTS = [
  {
    title: "HackMIT 2024",
    desc: "1st Place Overall. Built a decentralized compute network for edge devices.",
    icon: <Trophy className="w-8 h-8 text-yellow-500" />,
    colSpan: "md:col-span-2",
  },
  {
    title: "50+ Projects Shipped",
    desc: "From concept to production in record time.",
    icon: <Cpu className="w-8 h-8 text-primary" />,
    colSpan: "md:col-span-1",
  },
  {
    title: "Top 1% Global",
    desc: "Ranked among the top student engineering chapters worldwide.",
    icon: <Globe className="w-8 h-8 text-blue-500" />,
    colSpan: "md:col-span-1",
  },
  {
    title: "10k+ Lines of Open Source",
    desc: "Contributing heavily to the global developer ecosystem.",
    icon: <Star className="w-8 h-8 text-accent" />,
    colSpan: "md:col-span-2",
  },
];

export function WallOfFame() {
  return (
    <section className="py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: ANIMATION.NORMAL }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter mb-4">Wall of Fame</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            The results of our relentless pursuit of engineering excellence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ACHIEVEMENTS.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: ANIMATION.NORMAL, delay: i * 0.1 }}
              className={`group relative p-8 rounded-3xl bg-white/5 border border-white/5 overflow-hidden transition-all duration-500 hover:border-primary/50 ${item.colSpan}`}
            >
              <div className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-[100px] pointer-events-none" />
              
              <div className="relative z-10 flex flex-col h-full justify-between gap-8">
                <div className="p-4 bg-black/50 rounded-2xl w-fit border border-white/10 shadow-inner group-hover:scale-110 transition-transform duration-500">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold tracking-tight mb-2 text-foreground">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
