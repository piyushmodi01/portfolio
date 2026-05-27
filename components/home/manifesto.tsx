"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Manifesto — pinned, scroll-driven word reveal.
 *
 * On desktop/tablet (≥768px): section is 200vh tall, inner content is sticky at
 *   center viewport. As the user scrolls through the section, scroll progress
 *   maps 0 → 1 and reveals words sequentially.
 *
 * On mobile (<768px): no pin (sticky positioning is heavy on mobile and
 *   competes with the address bar). Words reveal once via IntersectionObserver
 *   when the section enters the viewport.
 *
 * Reduced-motion: all words visible immediately when the section enters view.
 */

const PHRASES: string[] = [
  "Half the job",
  "is finding",
  "the right problem",
  "to solve.",
  "The rest",
  "figures itself out.",
];

export function Manifesto() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [revealed, setRevealed] = useState<number>(0);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const isDesktop = () => window.matchMedia("(min-width: 768px)").matches;

    if (reduced) {
      setRevealed(PHRASES.length);
      return;
    }

    let raf = 0;
    let mode: "scroll" | "io" = isDesktop() ? "scroll" : "io";
    let ioTids: ReturnType<typeof setTimeout>[] = [];

    const update = () => {
      const rect = section.getBoundingClientRect();
      const vh = window.innerHeight;
      // Section height is 200vh on desktop. Progress = how far we've scrolled
      // through it. 0 at the top (section top hits viewport top), 1 at bottom
      // (section bottom hits viewport top + vh).
      const total = section.offsetHeight - vh;
      const scrolled = Math.min(Math.max(-rect.top, 0), Math.max(total, 1));
      const progress = scrolled / Math.max(total, 1);
      const next = Math.round(progress * PHRASES.length);
      setRevealed((prev) => (prev !== next ? next : prev));
    };

    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        update();
      });
    };

    let io: IntersectionObserver | null = null;

    const teardownScroll = () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
      raf = 0;
    };

    const teardownIO = () => {
      if (io) io.disconnect();
      io = null;
      ioTids.forEach(clearTimeout);
      ioTids = [];
    };

    const setupScroll = () => {
      window.addEventListener("scroll", onScroll, { passive: true });
      update();
    };

    const setupIO = () => {
      io = new IntersectionObserver(
        (entries) => {
          if (entries[0]?.isIntersecting) {
            PHRASES.forEach((_, i) => {
              ioTids.push(
                setTimeout(() => setRevealed((r) => Math.max(r, i + 1)), i * 220)
              );
            });
            io?.disconnect();
          }
        },
        { threshold: 0.25 }
      );
      io.observe(section);
    };

    if (mode === "scroll") setupScroll();
    else setupIO();

    const onResize = () => {
      const next: "scroll" | "io" = isDesktop() ? "scroll" : "io";
      if (next === mode) return;
      if (mode === "scroll") teardownScroll();
      else teardownIO();
      mode = next;
      setRevealed(0);
      if (mode === "scroll") setupScroll();
      else setupIO();
    };
    window.addEventListener("resize", onResize);

    return () => {
      teardownScroll();
      teardownIO();
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="manifesto"
      aria-label="Manifesto"
      className="relative md:h-[200vh]"
    >
      <div className="md:sticky md:top-0 md:flex md:h-screen md:items-center">
        <div className="container-x py-24 md:py-0">
          <p className="eyebrow mb-8 md:mb-12">A note on craft</p>
          <p className="display text-[clamp(2rem,6vw,4.6rem)] leading-[1.04] tracking-tight text-ink max-w-[24ch]">
            {PHRASES.map((phrase, i) => (
              <span
                key={phrase}
                className="inline-block transition-[opacity,transform] duration-[800ms]"
                style={{
                  opacity: i < revealed ? 1 : 0.12,
                  transform: i < revealed ? "translateY(0)" : "translateY(6px)",
                  transitionTimingFunction: "var(--ease-out-soft)",
                  marginRight: "0.35em",
                }}
              >
                {phrase}
              </span>
            ))}
          </p>
        </div>
      </div>
    </section>
  );
}
