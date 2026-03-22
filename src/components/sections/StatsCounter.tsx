"use client";
import { useInView, motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Users, Cpu, Trophy, Code2 } from "lucide-react";

/* ── Animated Number Counter ────────────────────────────────────────────── */
function Counter({
  from,
  to,
  duration,
  suffix = "",
}: {
  from: number;
  to: number;
  duration: number;
  suffix?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [count, setCount] = useState(from);

  useEffect(() => {
    if (!inView) return;
    let startTimestamp = 0;
    let animationFrame: number;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min(
        (timestamp - startTimestamp) / (duration * 1000),
        1
      );
      const easing = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(Math.floor(easing * (to - from) + from));
      if (progress < 1) animationFrame = window.requestAnimationFrame(step);
    };

    animationFrame = window.requestAnimationFrame(step);
    return () => window.cancelAnimationFrame(animationFrame);
  }, [inView, from, to, duration]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

/* ── Stats Data ─────────────────────────────────────────────────────────── */
const STATS = [
  {
    value: 500,
    suffix: "+",
    label: "Active Members",
    sub: "Across all verticals",
    icon: Users,
    color: "from-sky-400 to-blue-600",
    glow: "rgba(56,189,248,0.18)",
  },
  {
    value: 50,
    suffix: "+",
    label: "Projects Built",
    sub: "Shipped to production",
    icon: Cpu,
    color: "from-violet-400 to-purple-600",
    glow: "rgba(167,139,250,0.18)",
  },
  {
    value: 20,
    suffix: "+",
    label: "Hackathons Won",
    sub: "National & global",
    icon: Trophy,
    color: "from-amber-400 to-orange-500",
    glow: "rgba(251,191,36,0.18)",
  },
  {
    value: 10,
    suffix: "k+",
    label: "Lines Shipped",
    sub: "And counting fast",
    icon: Code2,
    color: "from-emerald-400 to-teal-500",
    glow: "rgba(52,211,153,0.18)",
  },
];

/* ── Main Component ─────────────────────────────────────────────────────── */
export function StatsCounter() {
  return (
    <section className="relative py-28 w-full overflow-hidden bg-background z-10">
      {/* ── Deep ambient background glow ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 60%, rgba(94,163,193,0.07) 0%, transparent 70%)",
        }}
      />

      {/* ── Horizontal rule lines top/bottom ── */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">

        {/* ── Section Label ── */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center mb-16"
        >
          <span className="px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-semibold tracking-[0.2em] uppercase mb-4">
            By the Numbers
          </span>
          <h2 className="text-3xl md:text-4xl font-black tracking-tighter text-foreground">
            Impact that{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-sky-300">
              speaks for itself
            </span>
          </h2>
        </motion.div>

        {/* ── Stats Row ── */}
        <div className="relative grid grid-cols-2 lg:grid-cols-4">

          {/* Vertical dividers (desktop only) */}
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="hidden lg:block absolute top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent"
              style={{ left: `${i * 25}%` }}
            />
          ))}

          {STATS.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.12,
                  ease: [0.21, 1.02, 0.73, 1],
                }}
                className="group relative flex flex-col items-center justify-center px-6 py-10 text-center"
              >
                {/* Per-stat radial glow (subtle, fades in on hover) */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-2xl"
                  style={{
                    background: `radial-gradient(ellipse 80% 70% at 50% 100%, ${stat.glow}, transparent)`,
                  }}
                />

                {/* Icon badge */}
                <motion.div
                  whileHover={{ scale: 1.12, rotate: 4 }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                  className={`mb-5 w-12 h-12 rounded-2xl flex items-center justify-center bg-gradient-to-br ${stat.color} shadow-lg`}
                >
                  <Icon className="w-5 h-5 text-white" strokeWidth={2} />
                </motion.div>

                {/* Animated number */}
                <div
                  className={`text-5xl md:text-6xl font-black tracking-tighter mb-1 bg-gradient-to-br ${stat.color} text-transparent bg-clip-text`}
                >
                  <Counter
                    from={0}
                    to={stat.value}
                    duration={2.2}
                    suffix={stat.suffix}
                  />
                </div>

                {/* Label */}
                <div className="text-sm font-bold text-foreground/90 tracking-wide uppercase mt-1">
                  {stat.label}
                </div>

                {/* Sub-label */}
                <div className="text-xs text-muted-foreground mt-1 tracking-wide">
                  {stat.sub}
                </div>

                {/* Bottom underline that fills on hover */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] w-0 group-hover:w-3/4 transition-all duration-500 rounded-full bg-gradient-to-r from-transparent via-primary to-transparent" />
              </motion.div>
            );
          })}
        </div>

        {/* ── Scan-line shimmer across the entire row ── */}
        <motion.div
          className="absolute inset-x-0 pointer-events-none"
          style={{
            top: "50%",
            height: "1px",
            background:
              "linear-gradient(90deg, transparent 0%, rgba(94,163,193,0.5) 50%, transparent 100%)",
          }}
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: [0, 0.7, 0] }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, delay: 0.3, ease: "easeInOut" }}
        />
      </div>
    </section>
  );
}
