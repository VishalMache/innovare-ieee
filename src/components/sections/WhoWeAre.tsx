"use client";

import { motion, useMotionValue, useSpring, useTransform, MotionValue } from "framer-motion";
import { useEffect, useMemo, useState, useRef } from "react";
import { Terminal, Folder, FileCode, CheckCircle2, Server, Cpu } from "lucide-react";

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

interface ParticleConfig {
  factorX: number;
  factorY: number;
  initX: string;
  size: string;
  yDuration: number;
  yDelay: number;
  scale: number;
}

function ParticleItem({ 
  config, 
  springX, 
  springY 
}: { 
  config: ParticleConfig; 
  springX: MotionValue<number>; 
  springY: MotionValue<number>; 
}) {
  const translateX = useTransform(springX, (val: number) => val * config.factorX);
  const translateY = useTransform(springY, (val: number) => val * config.factorY);

  return (
    <motion.div
      className="absolute rounded-full bg-primary/40"
      initial={{
        x: config.initX,
        y: "110%",
        scale: config.scale,
        opacity: 0,
      }}
      animate={{
        y: "-10%",
        opacity: [0, 0.6, 0],
      }}
      style={{
        translateX,
        translateY,
        width: config.size,
        height: config.size,
        filter: "blur(1px)",
      }}
      transition={{
        y: {
          duration: config.yDuration,
          repeat: Infinity,
          ease: "linear",
          delay: config.yDelay,
        },
        opacity: {
          duration: config.yDuration,
          repeat: Infinity,
          ease: "linear",
          delay: config.yDelay,
        },
      }}
    />
  );
}

function RisingParticles() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set((e.clientX / window.innerWidth - 0.5) * 40);
      mouseY.set((e.clientY / window.innerHeight - 0.5) * 40);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const particles = useMemo(() => {
    return Array.from({ length: 25 }).map(() => ({
      factorX: Math.random() * 0.5 + 0.5,
      factorY: Math.random() * 0.5 + 0.5,
      initX: `${Math.random() * 100}%`,
      size: `${Math.random() * 4 + 2}px`,
      yDuration: Math.random() * 8 + 10,
      yDelay: Math.random() * 20,
      scale: Math.random() * 0.5 + 0.5,
    }));
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {particles.map((config, i) => (
        <ParticleItem 
          key={i} 
          config={config} 
          springX={springX} 
          springY={springY} 
        />
      ))}
    </div>
  );
}

export function WhoWeAre() {
  const [activeTab, setActiveTab] = useState<"core.ts" | "mission.json" | "terminal.sh">("core.ts");
  const [typedCommand, setTypedCommand] = useState("");
  const [terminalOutput, setTerminalOutput] = useState<string[]>([]);
  const consoleBottomRef = useRef<HTMLDivElement>(null);

  // Simulated shell prompt typing and feedback loops
  useEffect(() => {
    let logTimer: NodeJS.Timeout;

    if (activeTab !== "terminal.sh") {
      setTypedCommand("");
      setTerminalOutput([]);
      return;
    }

    const command = "npm run build";
    let cmdIdx = 0;
    
    // Type out prompt command
    const typingTimer = setInterval(() => {
      if (cmdIdx < command.length) {
        setTypedCommand(command.slice(0, cmdIdx + 1));
        cmdIdx++;
      } else {
        clearInterval(typingTimer);
        
        // Command entered. Simulate building output
        const logLines = [
          "✓ Check syntax and linting checks active...",
          "✓ Bundling entry points using Turbopack...",
          "▲ Next.js 14.2.35 — Compiled successfully in 840ms",
          "✓ Route /api/join configured as Edge runtime",
          "✓ DB Connection: Supabase client connected",
          "✓ SMTP Service: Resend verified onboarding domain",
          "✓ [ONLINE] Innovare Syndicate: Nodes operating smoothly.",
        ];

        let logIdx = 0;
        logTimer = setInterval(() => {
          if (logIdx < logLines.length) {
            setTerminalOutput((prev) => [...prev, logLines[logIdx]]);
            logIdx++;
            
            // Scroll down the virtual shell view
            setTimeout(() => {
              if (consoleBottomRef.current) {
                consoleBottomRef.current.scrollIntoView({ behavior: "smooth" });
              }
            }, 10);
          } else {
            clearInterval(logTimer);
          }
        }, 350);
      }
    }, 80);

    return () => {
      clearInterval(typingTimer);
      if (logTimer) clearInterval(logTimer);
    };
  }, [activeTab]);

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

          {/* Right Side: Cybernetic Glassmorphic Terminal & Workspace IDE */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1 w-full relative"
          >
            {/* Terminal Case Shell */}
            <div className="w-full min-h-[460px] md:min-h-[500px] flex flex-col bg-black/55 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden shadow-2xl relative">
              <div className="absolute top-0 inset-x-0 h-px w-full bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
              
              {/* Header: Mac Style Dots + Section Label */}
              <div className="flex items-center justify-between px-5 py-3.5 bg-neutral-950/80 border-b border-white/10">
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <span className="font-mono text-xs text-white/40 tracking-wider">innovare-syndicate@node-01:~</span>
                <div className="flex items-center gap-3 text-white/30 text-xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                  <span>v3.0.0</span>
                </div>
              </div>

              {/* IDE Main Area: Sidebar + Editor Pane */}
              <div className="flex flex-1 overflow-hidden font-mono text-sm">
                
                {/* File Tree Explorer (Left Sidebar) */}
                <div className="hidden sm:flex flex-col w-[180px] bg-neutral-950/40 border-r border-white/10 p-4 select-none">
                  <div className="text-[10px] font-bold text-white/30 uppercase tracking-widest mb-4 flex items-center gap-1.5">
                    <Folder className="w-3.5 h-3.5 text-primary/70" />
                    <span>Workspace</span>
                  </div>
                  
                  <div className="space-y-1.5">
                    <button 
                      onClick={() => setActiveTab("core.ts")}
                      className={`w-full flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-xs font-semibold tracking-wide transition-all ${
                        activeTab === "core.ts" 
                          ? "bg-primary/10 text-primary border-l-2 border-primary" 
                          : "text-white/60 hover:bg-white/5 hover:text-white"
                      }`}
                    >
                      <FileCode className="w-3.5 h-3.5" />
                      <span>core.ts</span>
                    </button>

                    <button 
                      onClick={() => setActiveTab("mission.json")}
                      className={`w-full flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-xs font-semibold tracking-wide transition-all ${
                        activeTab === "mission.json" 
                          ? "bg-primary/10 text-primary border-l-2 border-primary" 
                          : "text-white/60 hover:bg-white/5 hover:text-white"
                      }`}
                    >
                      <FileCode className="w-3.5 h-3.5" />
                      <span>mission.json</span>
                    </button>

                    <button 
                      onClick={() => setActiveTab("terminal.sh")}
                      className={`w-full flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-xs font-semibold tracking-wide transition-all ${
                        activeTab === "terminal.sh" 
                          ? "bg-primary/10 text-primary border-l-2 border-primary" 
                          : "text-white/60 hover:bg-white/5 hover:text-white"
                      }`}
                    >
                      <Terminal className="w-3.5 h-3.5" />
                      <span>terminal.sh</span>
                    </button>
                  </div>

                  {/* Environment metrics widget */}
                  <div className="mt-auto pt-6 border-t border-white/5 space-y-3">
                    <div className="flex items-center justify-between text-[10px] text-white/30 uppercase tracking-widest font-bold">
                      <span>Status</span>
                    </div>
                    
                    <div className="space-y-1.5">
                      <div className="flex items-center gap-2 text-[10px] text-white/60">
                        <Cpu className="w-3 h-3 text-sky-400" />
                        <span>Core: 60 FPS</span>
                      </div>
                      <div className="flex items-center gap-2 text-[10px] text-white/60">
                        <Server className="w-3 h-3 text-emerald-400" />
                        <span>Bandwidth: Light</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Main Code Workspace Editor Pane */}
                <div className="flex-1 flex flex-col bg-neutral-900/35 overflow-y-auto">
                  
                  {/* Top Editor Tab Strip */}
                  <div className="flex bg-neutral-950/60 border-b border-white/10 select-none">
                    {/* Mobile visible tab toggles */}
                    {["core.ts", "mission.json", "terminal.sh"].map((tab) => (
                      <button
                        key={tab}
                        onClick={() => setActiveTab(tab as "core.ts" | "mission.json" | "terminal.sh")}
                        className={`px-4 py-2 text-xs font-semibold border-r border-white/10 transition-colors ${
                          activeTab === tab 
                            ? "bg-neutral-900 text-primary border-t border-t-primary" 
                            : "text-white/40 hover:bg-neutral-900/40 hover:text-white/80"
                        }`}
                      >
                        {tab}
                      </button>
                    ))}
                  </div>

                  {/* Active File Content Area */}
                  <div className="p-6 md:p-8 flex-1 overflow-x-auto select-text selection:bg-primary/20">
                    {activeTab === "core.ts" && (
                      <div className="space-y-1 text-xs md:text-sm">
                        <div>
                          <span className="text-pink-500">import</span>{" "}
                          <span className="text-white font-bold">{`{ Syndicate }`}</span>{" "}
                          <span className="text-pink-500">from</span>{" "}
                          <span className="text-emerald-400">&apos;@/lib/innovare-ieee&apos;</span>;
                        </div>
                        <br />
                        <div>
                          <span className="text-blue-400">export default class</span>{" "}
                          <span className="text-amber-300">Innovare</span>{" "}
                          <span className="text-blue-400">extends</span>{" "}
                          <span className="text-amber-300">Syndicate</span>{" "}
                          <span className="text-white">{`{`}</span>
                        </div>
                        
                        <div className="pl-6">
                          <span className="text-blue-400">readonly</span>{" "}
                          <span className="text-sky-300">focus</span>{" "}
                          <span className="text-white">=</span>{" "}
                          <span className="text-emerald-400">&apos;High Performance Shipping&apos;</span>;
                        </div>

                        <div className="pl-6">
                          <span className="text-blue-400">readonly</span>{" "}
                          <span className="text-sky-300">standards</span>{" "}
                          <span className="text-white">=</span>{" "}
                          <span className="text-emerald-400">&apos;Zero Lag Architectures&apos;</span>;
                        </div>

                        <br />
                        
                        <div className="pl-6">
                          <span className="text-blue-400">async</span>{" "}
                          <span className="text-sky-300">shipReality</span><span className="text-white">() {`{`}</span>
                        </div>
                        
                        <div className="pl-12">
                          <span className="text-pink-500">await</span>{" "}
                          <span className="text-sky-400">this</span>.<span className="text-sky-300">ideate</span>();
                        </div>

                        <div className="pl-12">
                          <span className="text-pink-500">await</span>{" "}
                          <span className="text-sky-400">this</span>.<span className="text-sky-300">compile</span>();
                        </div>

                        <div className="pl-12">
                          <span className="text-pink-500">await</span>{" "}
                          <span className="text-sky-400">this</span>.<span className="text-sky-300">scaleToGlobal</span>();
                        </div>

                        <div className="pl-12 text-white/50">
                          {"// We cultivate real impact, fast."}
                        </div>

                        <div className="pl-12">
                          <span className="text-pink-500">return</span>{" "}
                          <span className="text-emerald-400">&apos;Syndicate Node Online&apos;</span>;
                        </div>

                        <div className="pl-6 text-white">{`}`}</div>
                        <div className="text-white">{`}`}</div>
                      </div>
                    )}

                    {activeTab === "mission.json" && (
                      <div className="space-y-1 text-xs md:text-sm text-sky-300">
                        <span className="text-white">{`{`}</span>
                        <div className="pl-6">
                          <span className="text-pink-500">&quot;syndicate&quot;</span>: <span className="text-emerald-400">&quot;INNOVARE IEEE&quot;</span>,
                        </div>
                        <div className="pl-6">
                          <span className="text-pink-500">&quot;pcu_chapter&quot;</span>: <span className="text-emerald-400">&quot;Inaugurated 2025&quot;</span>,
                        </div>
                        <div className="pl-6">
                          <span className="text-pink-500">&quot;operating_model&quot;</span>: <span className="text-emerald-400">&quot;Academic Brilliance + Relentless Shipping&quot;</span>,
                        </div>
                        <div className="pl-6">
                          <span className="text-pink-500">&quot;roster_nodes&quot;</span>: <span className="text-amber-300">26</span>,
                        </div>
                        <div className="pl-6">
                          <span className="text-pink-500">&quot;cloud_funding&quot;</span>: <span className="text-blue-400">true</span>,
                        </div>
                        <div className="pl-6">
                          <span className="text-pink-500">&quot;stack_weight&quot;</span>: <span className="text-emerald-400">&quot;0MB WebGL Overhead&quot;</span>,
                        </div>
                        <div className="pl-6">
                          <span className="text-pink-500">&quot;impact_index&quot;</span>: <span className="text-emerald-400">&quot;Elite Developer Chapter&quot;</span>
                        </div>
                        <span className="text-white">{`}`}</span>
                      </div>
                    )}

                    {activeTab === "terminal.sh" && (
                      <div className="space-y-3 text-xs md:text-sm text-neutral-300">
                        <div className="flex items-center gap-2">
                          <span className="text-emerald-400 font-bold">$</span>
                          <span>{typedCommand}</span>
                          <span className="w-1.5 h-4 bg-primary animate-pulse" />
                        </div>
                        
                        {terminalOutput.length > 0 && (
                          <div className="space-y-1.5 border-t border-white/5 pt-3">
                            {terminalOutput.map((line: string, idx: number) => (
                              <div key={idx} className="flex gap-2.5 items-start">
                                {line && line.startsWith("✓") ? (
                                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                                ) : (
                                  <span className="text-sky-400 font-bold">»</span>
                                )}
                                <span className={line && line.includes("▲") ? "text-primary font-bold" : "text-white/80"}>
                                  {line}
                                </span>
                              </div>
                            ))}
                          </div>
                        )}
                        <div ref={consoleBottomRef} />
                      </div>
                    )}

                  </div>

                </div>

              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
