"use client";
import { motion } from "framer-motion";

const PROJECTS = [
  { 
    title: "Quantum API", 
    desc: "A lightning-fast caching layer for university databases.", 
    longDesc: "Quantum API significantly reduces database latency by utilizing an advanced Redis caching strategy. It serves over 1M requests daily with sub-millisecond response times in our local environments.",
    tags: ["Node.js", "Redis", "Apollo"],
    gradient: "from-blue-500/20 to-purple-500/20"
  },
  { 
    title: "Nebula Dashboard", 
    desc: "Real-time analytics for campus electrical energy consumption.", 
    longDesc: "Nebula Dashboard aggregates IoT sensor data across the electrical grid. It visualizes load balancing and predicts power surges using dynamic D3.js statistical models.",
    tags: ["React", "D3.js", "Firebase"],
    gradient: "from-emerald-500/20 to-teal-500/20"
  },
  { 
    title: "Horizon AI", 
    desc: "Machine learning models predicting student success rates.", 
    longDesc: "Horizon AI is a federated learning network interpreting anonymized academic data. It helps advisors intervene early for at-risk students with a verified 94% accuracy.",
    tags: ["Python", "TensorFlow", "Pandas"],
    gradient: "from-orange-500/20 to-red-500/20"
  },
  { 
    title: "Titan Robotics", 
    desc: "Autonomous drone navigation system for campus security.", 
    longDesc: "Titan is a computer vision pipeline enabling drones to patrol securely and map indoor environments in 3D. Features real-time obstacle avoidance and autonomous pathfinding.",
    tags: ["C++", "ROS", "OpenCV"],
    gradient: "from-rose-500/20 to-pink-500/20"
  },
];

export function ProjectShowcase() {
  return (
    <section id="projects" className="py-32 w-full bg-background relative flex flex-col items-center">
      {/* Absolute Glow Background */}
      <div className="absolute top-0 inset-x-0 h-px w-full bg-linear-to-r from-transparent via-white/10 to-transparent" />
      {/* Offload the massive blurred flare to GPU selectively without destroying the 3D space below it */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-primary/5 blur-[100px] pointer-events-none rounded-full transform-gpu" />
      
      <div className="container mx-auto px-6 relative z-10 w-full max-w-7xl">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold tracking-widest text-primary uppercase mb-4"
          >
            Selected Projects
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-7xl font-black tracking-tighter"
          >
            The Innovation Gallery.
          </motion.h3>
        </div>

        {/* 4 Card Flip Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {PROJECTS.map((proj, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group w-full h-[450px] [perspective:1000px] cursor-pointer"
            >
              {/* Rotating Wrapper - DO NOT use transform-gpu or will-change here as it breaks CSS 3D backface visibility */}
              <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] shadow-2xl rounded-[2rem]">
                
                {/* ----------------- FRONT OF CARD ----------------- */}
                <div className="absolute inset-0 w-full h-full rounded-[2rem] bg-linear-to-b from-white/[0.05] to-transparent border border-white/10 p-8 flex flex-col justify-end [backface-visibility:hidden] overflow-hidden group-hover:border-white/20 transition-colors duration-700">
                  
                  {/* Deep Structural Background Grid */}
                  <div className="absolute inset-0 opacity-10 pointer-events-none">
                     <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                       <defs>
                         <pattern id={`grid-front-${i}`} width="40" height="40" patternUnits="userSpaceOnUse">
                           <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
                         </pattern>
                       </defs>
                       <rect width="100%" height="100%" fill={`url(#grid-front-${i})`} />
                     </svg>
                  </div>

                  {/* Dynamic Gradient Core */}
                  <div className={`absolute -top-1/4 -right-1/4 w-[150%] h-[150%] opacity-20 bg-gradient-to-br ${proj.gradient} blur-2xl transition-opacity duration-1000 group-hover:opacity-50 pointer-events-none`} />
                  
                  {/* Giant Faded Watermark Number */}
                  <div className="absolute -top-4 -right-4 text-[180px] font-black text-white/[0.03] leading-none select-none pointer-events-none">
                    0{i + 1}
                  </div>

                  {/* Floating Abstract Target Node */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[60%] w-32 h-32 rounded-full border border-white/5 flex items-center justify-center transition-all duration-1000 group-hover:scale-110 group-hover:border-white/20 shadow-[inset_0_0_20px_rgba(255,255,255,0.02)]">
                    <div className="w-16 h-16 rounded-full bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center relative overflow-hidden group-hover:border-white/30 transition-colors duration-700">
                       <div className="w-1 h-1 rounded-full bg-white animate-ping" />
                       <div className="absolute inset-0 bg-linear-to-tr from-transparent via-white/10 to-transparent w-[200%] h-[200%] -translate-x-1/2 -translate-y-1/2 animate-[spin_4s_linear_infinite]" />
                    </div>
                  </div>
                  
                  {/* Corner Indicator Badge */}
                  <div className="absolute top-6 left-6 flex items-center gap-2">
                    <div className="p-2 rounded-full bg-white/5 border border-white/10 opacity-70 group-hover:opacity-100 transition-opacity shadow-lg backdrop-blur-sm z-20">
                      <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
                      </svg>
                    </div>
                    <span className="text-[10px] font-bold text-white/50 tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      Hover to explore
                    </span>
                  </div>
                  
                  {/* Bottom Text Plate */}
                  <div className="relative z-10 pt-6 mt-auto border-t border-white/10 bg-gradient-to-t from-background/80 to-transparent -mx-8 -mb-8 px-8 pb-8">
                    <h4 className="text-3xl font-black text-white tracking-tighter mb-2 leading-tight drop-shadow-md">{proj.title}</h4>
                    <p className="text-[13px] text-white/70 leading-relaxed font-medium max-w-[90%]">{proj.desc}</p>
                  </div>
                </div>

                {/* ----------------- BACK OF CARD ----------------- */}
                {/* Notice: bg-[#0a0a0a] instead of bg-black/80 backdrop-blur, as backdrop filters inside 180deg flips break backface visibility entirely in Chromium */}
                <div className="absolute inset-0 w-full h-full rounded-[2rem] bg-[#0a0a0a] border border-primary/30 p-8 flex flex-col [transform:rotateY(180deg)] [backface-visibility:hidden] overflow-hidden">
                  
                  {/* Core Blue Glow */}
                  <div className={`absolute top-0 right-0 w-32 h-32 opacity-10 bg-primary blur-2xl pointer-events-none`} />
                  
                  <h4 className="text-xs font-bold text-primary tracking-widest uppercase mb-4 flex items-center gap-2 relative z-10 border-b border-primary/20 pb-4">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                    Further Info
                  </h4>
                  
                  <p className="text-white/90 leading-relaxed text-[15px] mb-8 relative z-10 shadow-sm">
                    {proj.longDesc}
                  </p>
                  
                  <div className="mt-auto relative z-10">
                    <div className="text-[10px] text-muted-foreground mb-3 font-bold tracking-widest uppercase">Tech Stack Overview</div>
                    <div className="flex flex-wrap gap-2">
                       {proj.tags.map(tag => (
                         <span key={tag} className="px-3 py-1.5 bg-white/10 border border-white/20 rounded-lg text-[10px] font-bold text-white tracking-widest uppercase">
                           {tag}
                         </span>
                       ))}
                    </div>
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
