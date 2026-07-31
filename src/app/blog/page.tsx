import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Blog · INNOVARE IEEE",
  description: "Engineering notes, tutorials, and insights from the INNOVARE team.",
};

const POSTS = [
  {
    id: 1,
    title: "Why we migrated from React to Next.js App Router",
    date: "July 12, 2025",
    author: "Alex Chen",
    tag: "SYS_ENG",
    readTime: "5 min"
  },
  {
    id: 2,
    title: "Building an IoT Energy Dashboard for our Campus",
    date: "June 28, 2025",
    author: "Raj Patel",
    tag: "HARDWARE",
    readTime: "8 min"
  },
  {
    id: 3,
    title: "Winning Hack The Future: Our AI Architecture",
    date: "May 15, 2025",
    author: "Sarah Smith",
    tag: "AI/ML",
    readTime: "12 min"
  }
];

export default function BlogPage() {
  return (
    <div className="pt-20">
      <div className="bg-bg-base py-16 border-b border-border/50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'linear-gradient(var(--color-border) 1px, transparent 1px), linear-gradient(90deg, var(--color-border) 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <h1 
            className="font-mono text-5xl md:text-7xl font-black text-ink-primary mb-6"
            style={{
              backgroundImage: "repeating-linear-gradient(to bottom, #FFFFFF 0%, #FFFFFF 45%, transparent 45%, transparent 100%)",
              backgroundSize: "100% 5px",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            Engineering Logs.
          </h1>
          <p className="font-mono text-xl text-ink-secondary max-w-2xl">
            &gt; System documentation, architectural deep-dives, and technical analysis.
          </p>
        </div>
      </div>
      
      <section className="py-24 bg-[#050505]">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {POSTS.map(post => (
              <div key={post.id} className="group flex flex-col border border-border/50 bg-bg-surface hover:border-accent/50 hover:shadow-[0_0_20px_rgba(0,194,255,0.1)] transition-all duration-300 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-[2px] bg-accent transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
                <div className="p-8 flex flex-col h-full relative z-10">
                  <div className="flex justify-between items-center mb-6">
                    <span className="font-mono text-[9px] font-bold text-bg-base uppercase tracking-widest bg-accent px-2 py-1">
                      [{post.tag}]
                    </span>
                    <span className="font-mono text-[10px] text-ink-muted">
                      ~{post.readTime}
                    </span>
                  </div>
                  <h3 className="font-mono font-bold text-xl text-ink-primary mb-4 group-hover:text-accent transition-colors drop-shadow-[0_0_8px_rgba(255,255,255,0.1)]">
                    <Link href={`/blog/${post.id}`} className="before:absolute before:inset-0">
                      {post.title}
                    </Link>
                  </h3>
                  <div className="mt-auto pt-6 border-t border-border/50 flex justify-between items-center font-mono">
                    <span className="text-[10px] text-ink-secondary">
                      <span className="text-accent opacity-50">&gt; AUTHOR:</span> {post.author}
                    </span>
                    <span className="text-[10px] text-ink-muted">
                      {post.date}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
