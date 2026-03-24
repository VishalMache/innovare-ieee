"use client";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import Link from "next/link";

const NAV_LINKS = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Team", href: "#team" },
];

export function Navbar() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
    setIsScrolled(latest > 50);
  });

  return (
    <div className="fixed inset-x-0 top-0 z-50 flex justify-center pt-6 px-6 pointer-events-none">
      <motion.header
        variants={{
          visible: { y: 0, opacity: 1 },
          hidden: { y: -100, opacity: 0 },
        }}
        initial="visible"
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className={`pointer-events-auto relative flex items-center justify-between gap-8 px-6 py-3 rounded-full border border-white/10 transition-all duration-500 overflow-hidden ${
          isScrolled 
            ? "bg-black/40 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.4)]" 
            : "bg-white/5 backdrop-blur-md"
        }`}
        style={{ width: "min(100%, 1000px)" }}
      >
        {/* Animated Glow Border */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 via-transparent to-primary/20 opacity-30 pointer-events-none" />
        
        <Link 
          href="/" 
          className="relative flex items-center justify-center h-10 w-32 group overflow-visible" 
          data-cursor="hover"
        >
          <img 
            src="/logo.png" 
            alt="INNOVARE Logo" 
            className="h-full w-auto object-contain transition-transform duration-300"
            style={{ transform: 'scale(4.5) translateY(2px)', transformOrigin: 'center' }}
          />
        </Link>
        
        <nav className="hidden md:flex items-center relative gap-1">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onMouseEnter={() => setHoveredLink(link.name)}
              onMouseLeave={() => setHoveredLink(null)}
              className="relative px-5 py-2 text-sm font-medium text-white/70 hover:text-white transition-colors duration-300 rounded-full"
              data-cursor="hover"
            >
              {hoveredLink === link.name && (
                <motion.div
                  layoutId="nav-hover"
                  className="absolute inset-0 bg-white/10 rounded-full -z-10"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
                />
              )}
              <span className="relative z-10">{link.name}</span>
            </Link>
          ))}
        </nav>

        <Link
          href="#join"
          data-cursor="hover"
          className="relative group px-6 py-2.5 text-sm font-bold text-white rounded-full overflow-hidden transition-all duration-300 active:scale-95"
        >
          {/* Button Background & Glow */}
          <div className="absolute inset-0 bg-primary/20 border border-primary/40 group-hover:bg-primary/30 group-hover:border-primary/60 transition-all duration-300 rounded-full" />
          <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-20 blur-md transition-opacity duration-300 rounded-full" />
          
          <span className="relative z-10 flex items-center gap-2">
            Join Us
            <motion.span
              animate={{ x: [0, 4, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            >
              →
            </motion.span>
          </span>
        </Link>
      </motion.header>
    </div>
  );
}
