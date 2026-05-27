"use client";

import { useEffect, useRef } from "react";

/**
 * FlowField — a generative cursor-responsive canvas.
 *
 * What it does:
 * - ~180 particles drift through a smoothed pseudo-noise field
 * - Each frame, the canvas is faintly tinted (not cleared) — particles leave trails
 * - Cursor displaces nearby particles outward; idle behavior is calm drift
 * - Roughly 1 in 18 particles renders in accent color; the rest are near-black
 *
 * Performance discipline:
 * - Pauses when off-screen (IntersectionObserver) and when tab hidden
 * - Pauses when cursor leaves the section on desktop is NOT what we want — we want
 *   continued drift, just no displacement. Cursor leave just zeroes the displacement target.
 * - Respects prefers-reduced-motion: renders one static frame and stops
 * - DPR-aware, clamps to 2 to avoid blowing out perf on high-DPR displays
 */

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  hue: 0 | 1; // 0 = ink, 1 = accent
};

const PARTICLE_COUNT = 180;
const ACCENT_RATIO = 1 / 18;
const TRAIL_ALPHA = 0.055; // lower = longer trails
const CURSOR_RADIUS = 140;
const CURSOR_FORCE = 0.45;
const DRIFT_SPEED = 0.55;
const NOISE_SCALE = 0.0028;
const NOISE_TIME_SCALE = 0.00018;

// Pseudo-noise: smooth, deterministic, cheap. Returns angle in radians.
function fieldAngle(x: number, y: number, t: number): number {
  const a =
    Math.sin(x * NOISE_SCALE + t * NOISE_TIME_SCALE) +
    Math.cos(y * NOISE_SCALE * 1.3 - t * NOISE_TIME_SCALE * 0.7) +
    Math.sin((x + y) * NOISE_SCALE * 0.6 + t * NOISE_TIME_SCALE * 1.4);
  return a * Math.PI * 0.85;
}

export function FlowField({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const wrapper = wrapperRef.current;
    if (!canvas || !wrapper) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const state = {
      width: 0,
      height: 0,
      dpr: Math.min(window.devicePixelRatio || 1, 2),
      particles: [] as Particle[],
      cursor: { x: -9999, y: -9999, active: false },
      running: false,
      raf: 0,
      time: 0,
      bgRgb: "250, 250, 247", // matches --bg
    };

    const seedParticles = () => {
      state.particles = Array.from({ length: PARTICLE_COUNT }, () => ({
        x: Math.random() * state.width,
        y: Math.random() * state.height,
        vx: 0,
        vy: 0,
        life: Math.random() * 200,
        hue: Math.random() < ACCENT_RATIO ? 1 : 0,
      }));
    };

    const resize = () => {
      const rect = wrapper.getBoundingClientRect();
      state.width = rect.width;
      state.height = rect.height;
      canvas.width = Math.floor(rect.width * state.dpr);
      canvas.height = Math.floor(rect.height * state.dpr);
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
      ctx.setTransform(state.dpr, 0, 0, state.dpr, 0, 0);
      // Paint base coat so trails build on solid color
      ctx.fillStyle = `rgb(${state.bgRgb})`;
      ctx.fillRect(0, 0, state.width, state.height);
      seedParticles();
    };

    const drawFrame = (delta: number) => {
      state.time += delta;
      // Trail fade — instead of clearing, paint translucent bg
      ctx.fillStyle = `rgba(${state.bgRgb}, ${TRAIL_ALPHA})`;
      ctx.fillRect(0, 0, state.width, state.height);

      const inkColor = "rgba(17, 17, 17, 0.18)";
      const accentColor = "rgba(42, 75, 255, 0.9)";

      for (const p of state.particles) {
        const angle = fieldAngle(p.x, p.y, state.time);
        // Drift force
        p.vx += Math.cos(angle) * DRIFT_SPEED * 0.06;
        p.vy += Math.sin(angle) * DRIFT_SPEED * 0.06;

        // Cursor displacement
        if (state.cursor.active) {
          const dx = p.x - state.cursor.x;
          const dy = p.y - state.cursor.y;
          const dist2 = dx * dx + dy * dy;
          const r2 = CURSOR_RADIUS * CURSOR_RADIUS;
          if (dist2 < r2) {
            const dist = Math.sqrt(dist2) || 1;
            const falloff = 1 - dist / CURSOR_RADIUS;
            p.vx += (dx / dist) * falloff * CURSOR_FORCE;
            p.vy += (dy / dist) * falloff * CURSOR_FORCE;
          }
        }

        // Damping — keeps motion calm
        p.vx *= 0.92;
        p.vy *= 0.92;

        p.x += p.vx;
        p.y += p.vy;
        p.life += 1;

        // Wrap edges
        if (p.x < -10) p.x = state.width + 10;
        else if (p.x > state.width + 10) p.x = -10;
        if (p.y < -10) p.y = state.height + 10;
        else if (p.y > state.height + 10) p.y = -10;

        // Render — small line segment in direction of motion
        const speed = Math.hypot(p.vx, p.vy);
        const len = Math.min(2.5 + speed * 5, 14);
        const ux = p.vx / (speed || 1);
        const uy = p.vy / (speed || 1);

        ctx.strokeStyle = p.hue === 1 ? accentColor : inkColor;
        ctx.lineWidth = p.hue === 1 ? 1.2 : 0.9;
        ctx.lineCap = "round";
        ctx.beginPath();
        ctx.moveTo(p.x - ux * len, p.y - uy * len);
        ctx.lineTo(p.x, p.y);
        ctx.stroke();
      }
    };

    let last = performance.now();
    const loop = (now: number) => {
      const delta = Math.min(now - last, 33);
      last = now;
      drawFrame(delta);
      if (state.running) state.raf = requestAnimationFrame(loop);
    };

    const start = () => {
      if (state.running || reduced) return;
      state.running = true;
      last = performance.now();
      state.raf = requestAnimationFrame(loop);
    };

    const stop = () => {
      state.running = false;
      if (state.raf) cancelAnimationFrame(state.raf);
      state.raf = 0;
    };

    // Cursor tracking — listen on window so overlaid content (z-10 text layer)
    // doesn't swallow the events. Compute position relative to wrapper rect.
    const onPointerMove = (e: PointerEvent) => {
      const rect = wrapper.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      // Only activate when cursor is actually over the wrapper
      if (x >= 0 && x <= rect.width && y >= 0 && y <= rect.height) {
        state.cursor.x = x;
        state.cursor.y = y;
        state.cursor.active = true;
      } else {
        state.cursor.active = false;
      }
    };

    const onPointerLeave = () => {
      state.cursor.active = false;
    };

    // Visibility: pause when off-screen
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries[0]?.isIntersecting;
        if (visible && !document.hidden) start();
        else stop();
      },
      { threshold: 0 }
    );
    io.observe(wrapper);

    const onVisChange = () => {
      if (document.hidden) stop();
      else start();
    };

    // Resize on container size change
    const ro = new ResizeObserver(() => {
      resize();
    });
    ro.observe(wrapper);

    // Initial layout
    resize();

    if (reduced) {
      // Render one static frame and stop
      drawFrame(16);
      drawFrame(16);
    } else {
      window.addEventListener("pointermove", onPointerMove);
      window.addEventListener("pointerleave", onPointerLeave);
      document.addEventListener("visibilitychange", onVisChange);
      start();
    }

    return () => {
      stop();
      io.disconnect();
      ro.disconnect();
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerleave", onPointerLeave);
      document.removeEventListener("visibilitychange", onVisChange);
    };
  }, []);

  return (
    <div
      ref={wrapperRef}
      className={className}
      role="img"
      aria-label="Generative flow field — particles drifting through a noise field, responsive to cursor"
    >
      <canvas ref={canvasRef} className="block h-full w-full" />
    </div>
  );
}
