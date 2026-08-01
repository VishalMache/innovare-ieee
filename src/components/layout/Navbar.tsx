"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const NAV_LINKS = [
  { name: "About", href: "/#about" },
  { name: "Projects", href: "/projects" },
  { name: "Events", href: "/events" },
  { name: "Team", href: "/team" },
  { name: "Blog", href: "/blog" },
];

export function Navbar() {
  const [activeLink, setActiveLink] = useState<string>("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <div className="sticky top-0 z-50 bg-bg-base/80 backdrop-blur-md border-b border-border px-6 py-4 flex justify-between items-center h-20 transition-all duration-300">
        <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
          {/* Brand Logo */}
          <Link 
            href="/" 
            className="relative flex items-center justify-start h-12 group overflow-visible"
            onClick={() => setActiveLink("")}
          >
            <div className="flex items-center gap-3">
              {/* Fallback styling in case image fails, but normally Next/Image will load it */}
              <div className="relative w-8 h-8 rounded-full overflow-hidden border border-accent/30 shadow-[0_0_15px_rgba(0,194,255,0.2)]">
                <Image src="/images/Innovare%20trans.png" alt="INNOVARE Logo" fill className="object-contain" />
              </div>
              <div className="flex items-baseline gap-1">
                <span className="font-sans font-bold text-xl text-ink-primary tracking-tight group-hover:text-accent transition-colors">INNOVARE</span>
                <span className="font-mono font-medium text-xs text-accent tracking-widest uppercase">IEEE</span>
              </div>
            </div>
          </Link>
          
          {/* Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 select-none">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setActiveLink(link.name)}
                className={`relative py-2 text-sm font-mono font-bold uppercase tracking-widest transition-colors duration-200 ${
                  activeLink === link.name 
                    ? "text-accent drop-shadow-[0_0_8px_rgba(0,194,255,0.5)]" 
                    : "text-ink-secondary hover:text-ink-primary"
                }`}
              >
                <span className="relative z-10">{link.name}</span>
                {activeLink === link.name && (
                  <span className="absolute left-0 -bottom-[1px] w-full h-[2px] bg-accent shadow-[0_0_10px_rgba(0,194,255,0.8)]"></span>
                )}
              </Link>
            ))}
          </nav>

          {/* Action Button */}
          <div className="flex items-center gap-4">
            <Link
              href="/#join"
              className="hidden lg:flex px-6 py-2.5 text-sm font-mono font-bold text-bg-base bg-accent hover:bg-accent/90 hover:shadow-[0_0_20px_rgba(0,194,255,0.4)] transition-all duration-300 items-center gap-2 uppercase tracking-widest"
            >
              <span>Apply Now</span>
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
            
            {/* Menu Hamburger */}
            <button 
              className="lg:hidden p-2.5 text-ink-primary hover:text-accent transition-colors flex items-center justify-center"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-bg-base/95 backdrop-blur-lg pt-24 px-6 pb-6 flex flex-col lg:hidden border-b border-border">
          <nav className="flex flex-col gap-6 text-2xl font-mono font-bold uppercase tracking-widest">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => {
                  setActiveLink(link.name);
                  setIsMobileMenuOpen(false);
                }}
                className={`transition-colors ${activeLink === link.name ? 'text-accent drop-shadow-[0_0_8px_rgba(0,194,255,0.5)]' : 'text-ink-secondary hover:text-ink-primary'}`}
              >
                {link.name}
              </Link>
            ))}
          </nav>
          <div className="mt-auto">
            <Link
              href="/#join"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex justify-center w-full px-6 py-4 text-sm font-mono font-bold text-bg-base bg-accent hover:shadow-[0_0_20px_rgba(0,194,255,0.4)] transition-all duration-300 uppercase tracking-widest"
            >
              Apply Now →
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
