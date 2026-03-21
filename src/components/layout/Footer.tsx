"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { CONTENT } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="relative border-t border-white/5 bg-background overflow-hidden pb-12 pt-24 text-center">
      {/* Background glow to end the page */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[500px] w-full max-w-4xl bg-primary/5 blur-[120px] rounded-t-full pointer-events-none" />
      
      <div className="container relative mx-auto px-6 z-10 flex flex-col items-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-bold tracking-tighter mb-6"
        >
          Engineering the <span className="text-primary">Now.</span>
        </motion.h2>
        
        <p className="text-muted-foreground mb-12 max-w-lg">
          {CONTENT.COPY.heroSubHeadline}
        </p>

        <div className="flex gap-6 mb-16">
          <Link href="https://linkedin.com" target="_blank" className="text-sm font-medium hover:text-primary transition-colors">LinkedIn</Link>
          <Link href="https://github.com" target="_blank" className="text-sm font-medium hover:text-primary transition-colors">GitHub</Link>
          <Link href="https://instagram.com" target="_blank" className="text-sm font-medium hover:text-primary transition-colors">Instagram</Link>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between w-full pt-8 border-t border-white/5 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} INNOVARE IEEE. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-foreground transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-foreground transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
