"use client";
import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export function Cursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Bypassing React state entirely for coordinates using MotionValues
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Springs for smooth movement
  const cursorX = useSpring(mouseX, { stiffness: 500, damping: 28, mass: 0.5 });
  const cursorY = useSpring(mouseY, { stiffness: 500, damping: 28, mass: 0.5 });

  // Slower, softer spring for the ambient background glow
  const glowX = useSpring(mouseX, { stiffness: 80, damping: 22 });
  const glowY = useSpring(mouseY, { stiffness: 80, damping: 22 });

  // Offsetting positions to center the custom cursor divs on the pointer
  const translateX = useTransform(cursorX, (val) => val - 12);
  const translateY = useTransform(cursorY, (val) => val - 12);

  const glowTranslateX = useTransform(glowX, (val) => val - 125);
  const glowTranslateY = useTransform(glowY, (val) => val - 125);

  useEffect(() => {
    // Return early if it's a touch device (no cursor needed)
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const updateMousePosition = (e: MouseEvent) => {
      if (!isVisible) setIsVisible(true);
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.closest("button") || 
        target.closest("a") || 
        target.closest("input") || 
        target.closest("[data-cursor='hover']")
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("mouseover", handleMouseOver);
    document.documentElement.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mouseover", handleMouseOver);
      document.documentElement.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [isVisible, mouseX, mouseY]);

  if (!isVisible) return null;

  return (
    <>
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-50 hidden md:block h-6 w-6 rounded-full border border-primary/50 mix-blend-exclusion"
        style={{
          x: translateX,
          y: translateY,
        }}
        animate={{
          scale: isHovering ? 1.5 : 1,
          backgroundColor: isHovering ? "rgba(255, 255, 255, 0.1)" : "transparent",
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      />
      {/* Background Spotlight Glow */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 -z-10 hidden md:block h-[250px] w-[250px] rounded-full bg-primary/5 blur-[80px]"
        style={{
          x: glowTranslateX,
          y: glowTranslateY,
        }}
      />
    </>
  );
}

