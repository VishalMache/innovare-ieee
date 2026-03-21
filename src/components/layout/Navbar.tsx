"use client";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import { ANIMATION } from "@/lib/constants";

export function Navbar() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setHidden(true); // Hide on scroll down
    } else {
      setHidden(false); // Show on scroll up
    }
    setIsScrolled(latest > 50);
  });

  return (
    <motion.header
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      initial="visible"
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: ANIMATION.FAST, ease: "easeInOut" }}
      className={`fixed inset-x-0 top-0 z-40 transition-colors duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-md border-b border-white/5" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold tracking-tighter" data-cursor="hover">
          INNOVARE<span className="text-primary">.</span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
          <Link href="#about" className="hover:text-foreground transition-colors" data-cursor="hover">About</Link>
          <Link href="#projects" className="hover:text-foreground transition-colors" data-cursor="hover">Projects</Link>
          <Link href="#team" className="hover:text-foreground transition-colors" data-cursor="hover">Team</Link>
        </nav>

        <Link
          href="#join"
          data-cursor="hover"
          className="relative px-5 py-2 text-sm font-medium text-primary-foreground overflow-hidden rounded-full group bg-primary/20 border border-primary/50 hover:bg-primary/30 transition-all"
        >
          <span className="relative z-10 w-full text-center">Join Us</span>
          <span className="absolute inset-0 block h-full w-full rounded-full bg-primary opacity-0 group-hover:opacity-20 transition-opacity duration-300 ease-out" />
        </Link>
      </div>
    </motion.header>
  );
}
