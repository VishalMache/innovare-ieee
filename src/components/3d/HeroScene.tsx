"use client";

import { useEffect, useRef } from "react";

interface Star {
  x: number;
  y: number;
  angle: number;      // Current orbital angle
  orbitR: number;     // Orbit radius (px)
  orbitCx: number;    // Orbit center X (relative to orb center)
  orbitCy: number;    // Orbit center Y (relative to orb center)
  speed: number;      // Angular velocity (radians per frame)
  size: number;       // Dot radius
  alpha: number;      // Base opacity  
  twinkle: number;    // Twinkle phase offset
}

export function HeroScene() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let W = 0, H = 0;
    let frame = 0;
    let stars: Star[] = [];
    const STAR_COUNT = 220;

    const setSize = () => {
      W = window.innerWidth;
      H = window.innerHeight;
      canvas.width = W;
      canvas.height = H;
    };

    const initStars = () => {
      stars = Array.from({ length: STAR_COUNT }, () => {
        const angle = Math.random() * Math.PI * 2;
        // Orbit around the orb which is centered at (W/2, ~0)
        // Distribute orbits from a tight ring to wider spread
        const orbitR = Math.random() * Math.max(W, H) * 0.6 + 20;
        // Slight offset so orbits are not perfectly circular (adds variety)
        const orbitCx = (Math.random() - 0.5) * W * 0.1;
        const orbitCy = (Math.random() - 0.5) * H * 0.1;
        const dir = Math.random() > 0.5 ? 1 : -1;
        return {
          x: 0,
          y: 0,
          angle,
          orbitR,
          orbitCx,
          orbitCy,
          speed: dir * (0.0003 + Math.random() * 0.0006), // Very slow
          size: Math.random() * 1.4 + 0.4,
          alpha: Math.random() * 0.5 + 0.2,
          twinkle: Math.random() * Math.PI * 2,
        };
      });
    };

    const drawOrb = () => {
      const cx = W / 2;
      const cy = -H * 0.04;
      const r = Math.min(W, H) * 0.58;

      const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, r);
      grad.addColorStop(0,    "rgba( 94, 163, 193, 0.75)");
      grad.addColorStop(0.18, "rgba( 70, 140, 175, 0.55)");
      grad.addColorStop(0.38, "rgba( 45, 110, 150, 0.30)");
      grad.addColorStop(0.60, "rgba( 20,  70, 110, 0.12)");
      grad.addColorStop(0.82, "rgba(  8,  35,  70, 0.04)");
      grad.addColorStop(1,    "rgba(  0,  15,  40, 0)");

      ctx.beginPath();
      ctx.arc(cx, cy, r, 0, Math.PI * 2);
      ctx.fillStyle = grad;
      ctx.fill();

      const coreGrad = ctx.createRadialGradient(cx, cy, 0, cx, cy, r * 0.18);
      coreGrad.addColorStop(0,    "rgba(230, 248, 255, 1.00)");
      coreGrad.addColorStop(0.35, "rgba(140, 210, 235, 0.80)");
      coreGrad.addColorStop(0.70, "rgba( 94, 163, 193, 0.40)");
      coreGrad.addColorStop(1,    "rgba( 50, 130, 170, 0)");

      ctx.beginPath();
      ctx.arc(cx, cy, r * 0.18, 0, Math.PI * 2);
      ctx.fillStyle = coreGrad;
      ctx.fill();
    };

    const draw = () => {
      frame++;

      ctx.fillStyle = "#01080f";
      ctx.fillRect(0, 0, W, H);

      drawOrb();

      // Orb center used as orbit pivot
      const orbCx = W / 2;
      const orbCy = 0; // top of screen (orb center)

      for (const s of stars) {
        // Advance orbital angle
        s.angle += s.speed;

        // Compute position (elliptical orbit around the orb center)
        const x = orbCx + s.orbitCx + Math.cos(s.angle) * s.orbitR;
        const y = orbCy + s.orbitCy + Math.sin(s.angle) * (s.orbitR * 0.55); // squish vertically for perspective

        // Twinkle
        const twinkle = Math.sin(frame * 0.03 + s.twinkle) * 0.25;
        const alpha = Math.max(0.05, Math.min(0.9, s.alpha + twinkle));

        ctx.beginPath();
        ctx.arc(x, y, s.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(200, 228, 245, ${alpha})`;
        ctx.fill();
      }

      animId = requestAnimationFrame(draw);
    };

    setSize();
    initStars();
    draw();

    const ro = new ResizeObserver(() => {
      setSize();
      initStars(); // Reinitialise so orbits adapt to new dimensions
    });
    ro.observe(canvas);

    return () => {
      cancelAnimationFrame(animId);
      ro.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        display: "block",
        pointerEvents: "none",
      }}
    />
  );
}
