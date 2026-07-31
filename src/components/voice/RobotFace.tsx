import React from "react";
import { motion } from "framer-motion";
import { AssistantState } from "@/hooks/useVoiceAssistant";

export function RobotFace({ state, size = 160 }: { state: AssistantState; size?: number }) {
  const isSpeaking = state === "speaking";
  const isListening = state === "listening";
  const isThinking = state === "thinking";
  const isIdle = state === "idle";

  // Dynamic colors - Cyan matches the user's reference image perfectly
  const color = isSpeaking ? "#4ade80" : isListening ? "#00C2FF" : isThinking ? "#facc15" : "#00C2FF";

  const eyeVariants = {
    idle: { scaleY: 1, y: 0 },
    listening: { scaleY: 1.4, y: -3 },
    thinking: { scaleY: 0.15, y: 0 },
    speaking: { scaleY: 1.1, y: -1 }
  };

  const mouthVariants = {
    idle: { scaleY: 1, opacity: 1 },
    listening: { scaleY: 1.5, opacity: 1 },
    thinking: { scaleY: 0, opacity: 0 }, // mouth disappears when thinking
    speaking: { 
      // Animates the scale of the smile curve to simulate a talking mouth
      scaleY: [1, 2.5, 0.5, 2, 1], 
      transition: { repeat: Infinity, duration: 0.5 } 
    }
  };

  // The robot head in the image is a subtle wide oval/squircle (about 1.25 ratio)
  const width = size * 1.25;
  const height = size;

  return (
    <div 
      className="relative flex items-center justify-center group"
      style={{ width: width, height: height, flexShrink: 0 }}
    >
      {/* Left Ear Piece (Headphones) */}
      <div className="absolute left-[-5%] top-1/2 -translate-y-1/2 w-[12%] h-[45%] bg-gradient-to-r from-[#0f172a] to-[#1e293b] rounded-l-full border-l-[4px] border-cyan-400 z-0 shadow-[-5px_0_15px_rgba(0,194,255,0.4)] flex items-center justify-end overflow-hidden">
        <div className="w-[30%] h-[60%] bg-black/50 mr-[15%] rounded-full" />
      </div>

      {/* Right Ear Piece (Headphones) */}
      <div className="absolute right-[-5%] top-1/2 -translate-y-1/2 w-[12%] h-[45%] bg-gradient-to-l from-[#0f172a] to-[#1e293b] rounded-r-full border-r-[4px] border-cyan-400 z-0 shadow-[5px_0_15px_rgba(0,194,255,0.4)] flex items-center justify-start overflow-hidden">
        <div className="w-[30%] h-[60%] bg-black/50 ml-[15%] rounded-full" />
      </div>

      {/* Main Metallic Shell (White/Silver) */}
      <motion.div 
        className="relative w-full h-full bg-gradient-to-br from-[#ffffff] via-[#e2e8f0] to-[#94a3b8] border-[2px] border-white/60 flex items-center justify-center p-[4%] z-10 overflow-hidden"
        style={{
          borderRadius: "45%", // Creates a slightly puffy squircle instead of a sharp football ellipse
          boxShadow: `0 15px 30px rgba(0,0,0,0.6), inset 0 -15px 25px rgba(0,0,0,0.15), inset 0 10px 20px rgba(255,255,255,0.9)`
        }}
        // Subtly hover the head
        animate={{ y: isSpeaking ? [-2, 2, -2] : isIdle ? [-1, 1, -1] : 0 }}
        transition={{ repeat: Infinity, duration: isSpeaking ? 0.8 : 3, ease: "easeInOut" }}
      >
        {/* Subdued mechanical panel lines on the white shell */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-40" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M 15,10 Q 25,25 10,40" fill="none" stroke="#64748b" strokeWidth="0.5" />
          <path d="M 85,10 Q 75,25 90,40" fill="none" stroke="#64748b" strokeWidth="0.5" />
          <path d="M 15,90 Q 25,75 10,60" fill="none" stroke="#64748b" strokeWidth="0.5" />
          <path d="M 85,90 Q 75,75 90,60" fill="none" stroke="#64748b" strokeWidth="0.5" />
        </svg>

        {/* Inner Visor Screen (Dark Blue/Black oval) */}
        <div 
          className="relative w-full h-full bg-gradient-to-b from-[#0f172a] to-[#020617] overflow-hidden flex flex-col items-center justify-center border border-white/10"
          style={{ 
            borderRadius: "42%", 
            boxShadow: "inset 0 0 20px rgba(0,0,0,1)" 
          }}
        >
          {/* Glowing Scanlines overlay inside visor */}
          <div 
            className="absolute inset-0 pointer-events-none mix-blend-screen opacity-[0.35]"
            style={{
              backgroundImage: `repeating-linear-gradient(0deg, transparent 0px, transparent 2px, ${color} 3px, transparent 4px)`,
              backgroundSize: "100% 4px"
            }}
          />

          {/* Curved Glass Reflection on top half */}
          <div className="absolute top-[-5%] left-[5%] w-[90%] h-[45%] bg-gradient-to-b from-white/25 to-transparent rounded-[50%] blur-[1.5px] pointer-events-none" />

          {/* Holographic Glowing Features (Eyes & Mouth) */}
          <svg className="relative w-[90%] h-[90%] z-10" viewBox="0 0 120 100" style={{ filter: `drop-shadow(0 0 6px ${color}) drop-shadow(0 0 15px ${color})` }}>
            
            {/* Blinking Group (Handles periodic blink for both eyes) */}
            <motion.g
              animate={isIdle ? { scaleY: [1, 1, 0.1, 1, 1] } : { scaleY: 1 }}
              transition={{ repeat: Infinity, duration: 4, times: [0, 0.9, 0.93, 0.96, 1] }}
              style={{ transformOrigin: "60px 45px" }}
            >
              {/* Left Eye (Curved happy arch) */}
              <motion.path 
                d="M 32,50 Q 42,32 52,50" 
                fill="none" 
                stroke={color} 
                strokeWidth="8" 
                strokeLinecap="round"
                variants={eyeVariants}
                initial="idle"
                animate={state}
                style={{ transformOrigin: "42px 50px" }}
              />
              
              {/* Right Eye */}
              <motion.path 
                d="M 68,50 Q 78,32 88,50" 
                fill="none" 
                stroke={color} 
                strokeWidth="8" 
                strokeLinecap="round"
                variants={eyeVariants}
                initial="idle"
                animate={state}
                style={{ transformOrigin: "78px 50px" }}
              />
            </motion.g>

            {/* Mouth (Happy curve) */}
            <motion.path 
              d="M 45,65 Q 60,82 75,65" 
              fill="none" 
              stroke={color} 
              strokeWidth="7" 
              strokeLinecap="round"
              variants={mouthVariants}
              initial="idle"
              animate={isSpeaking ? "speaking" : state}
              style={{ transformOrigin: "60px 65px" }}
            />
          </svg>
        </div>
      </motion.div>
    </div>
  );
}
