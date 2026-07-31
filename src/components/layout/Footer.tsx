"use client";
import Link from "next/link";
import Image from "next/image";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="footer" className="relative border-t border-border bg-bg-surface pb-12 pt-24 text-left mt-auto">
      <div className="container max-w-7xl mx-auto px-6 z-10 flex flex-col">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 pb-12 border-b border-border/50">
          
          {/* Logo & Info */}
          <div className="lg:col-span-2 space-y-6">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative w-8 h-8 rounded-full overflow-hidden border border-accent/30 shadow-[0_0_15px_rgba(0,194,255,0.2)]">
                <Image src="/images/logo.png" alt="INNOVARE Logo" fill className="object-cover" />
              </div>
              <div className="flex items-baseline gap-1">
                <span className="font-sans font-bold text-2xl text-ink-primary tracking-tight">INNOVARE</span>
                <span className="font-mono font-medium text-sm text-accent tracking-widest uppercase">IEEE</span>
              </div>
            </Link>
            <p className="text-ink-secondary text-sm max-w-sm leading-relaxed font-mono">
              The context layer behind intelligent student engineering. Representing the builder culture at PCU Maharashtra.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-ink-muted hover:text-accent hover:drop-shadow-[0_0_8px_rgba(0,194,255,0.8)] transition-all">
                [Instagram]
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-ink-muted hover:text-accent hover:drop-shadow-[0_0_8px_rgba(0,194,255,0.8)] transition-all">
                [LinkedIn]
              </a>
              <a href="https://github.com" target="_blank" rel="noreferrer" className="text-ink-muted hover:text-accent hover:drop-shadow-[0_0_8px_rgba(0,194,255,0.8)] transition-all">
                [GitHub]
              </a>
            </div>
          </div>

          {/* Links Column 1 */}
          <div className="space-y-4">
            <h4 className="font-mono font-bold text-ink-primary text-[10px] tracking-widest uppercase">Explore</h4>
            <ul className="space-y-3 text-sm font-mono text-ink-secondary">
              <li><Link href="/projects" className="hover:text-accent transition-colors">Selected Projects</Link></li>
              <li><Link href="/events" className="hover:text-accent transition-colors">Upcoming Events</Link></li>
              <li><Link href="/team" className="hover:text-accent transition-colors">Active Nodes (Team)</Link></li>
              <li><Link href="/blog" className="hover:text-accent transition-colors">Engineering Logs</Link></li>
            </ul>
          </div>

          {/* Links Column 2 */}
          <div className="space-y-4">
            <h4 className="font-mono font-bold text-ink-primary text-[10px] tracking-widest uppercase">Connect</h4>
            <ul className="space-y-3 text-sm font-mono text-ink-secondary">
              <li><Link href="/#join" className="hover:text-accent transition-colors">Apply to Join</Link></li>
              <li><a href="mailto:info@innovare.org" className="hover:text-accent transition-colors">Contact System</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Sponsorship Matrix</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="flex flex-col sm:flex-row items-center justify-between w-full gap-6">
          <p className="text-xs text-ink-muted font-mono uppercase tracking-widest">
            © {new Date().getFullYear()} INNOVARE IEEE // SYSTEM ONLINE
          </p>

          {/* Back to Top */}
          <button 
            onClick={scrollToTop}
            className="flex items-center gap-2 text-[10px] font-mono font-bold text-ink-primary hover:text-accent transition-colors uppercase tracking-widest"
          >
            <span>Initialize Reboot (Top)</span>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
}
