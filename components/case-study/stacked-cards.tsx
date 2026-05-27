"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { Container } from "@/components/ui/container";

const HEADER_H = 64; // px — visible height of each buried card tab
const PHASES = 4;    // scroll phases: 1 entry + 3 cards

type StackedCardsProps = {
  eyebrow?: string;
  c1num: string; c1title: string; c1body: string;
  c2num: string; c2title: string; c2body: string;
  c3num: string; c3title: string; c3body: string;
};

export function StackedCards({
  eyebrow = "Process",
  c1num, c1title, c1body,
  c2num, c2title, c2body,
  c3num, c3title, c3body,
}: StackedCardsProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  // vh changes on resize — keep a live value
  const [vh, setVh] = useState(700);
  useEffect(() => {
    const update = () => setVh(window.innerHeight);
    update();
    window.addEventListener("resize", update, { passive: true });
    return () => window.removeEventListener("resize", update);
  }, []);

  const sectionH = vh * PHASES;

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // ── Card entry + stacked positions (in pixels from top of sticky area) ──
  const c0y = useTransform(scrollYProgress, [0, 0.2], [vh, 0]);
  const c0opacity = useTransform(scrollYProgress, [0.18, 0.28, 0.36, 0.44], [0, 1, 1, 0]);

  const c1y = useTransform(scrollYProgress, [0.33, 0.53], [vh, HEADER_H]);
  const c1opacity = useTransform(scrollYProgress, [0.5, 0.6, 0.67, 0.75], [0, 1, 1, 0]);

  const c2y = useTransform(scrollYProgress, [0.66, 0.86], [vh, HEADER_H * 2]);
  const c2opacity = useTransform(scrollYProgress, [0.83, 0.93], [0, 1]);

  if (reduced) {
    // Reduced motion: static grid layout
    const cards = [
      { num: c1num, title: c1title, body: c1body },
      { num: c2num, title: c2title, body: c2body },
      { num: c3num, title: c3title, body: c3body },
    ];
    return (
      <Container className="mt-24 md:mt-32">
        <p className="eyebrow mb-10">{eyebrow}</p>
        <div className="flex flex-col gap-6">
          {cards.map((c) => (
            <div key={c.num} className="rounded-2xl border border-border bg-bg-elevated p-8">
              <p className="mono text-[0.7rem] uppercase tracking-[0.18em] text-muted-soft">{c.num}</p>
              <p className="display mt-2 text-[clamp(1.4rem,3vw,2rem)] tracking-tight">{c.title}</p>
              <p className="mt-4 text-[0.97rem] leading-relaxed text-muted">{c.body}</p>
            </div>
          ))}
        </div>
      </Container>
    );
  }

  const cards = [
    { num: c1num, title: c1title, body: c1body, y: c0y, bodyOpacity: c0opacity },
    { num: c2num, title: c2title, body: c2body, y: c1y, bodyOpacity: c1opacity },
    { num: c3num, title: c3title, body: c3body, y: c2y, bodyOpacity: c2opacity },
  ];

  return (
    <div
      ref={sectionRef}
      style={{ height: sectionH }}
      className="relative mt-24 md:mt-32"
    >
      {/* Sticky viewport-height container */}
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* Eyebrow — always visible */}
        <Container className="pointer-events-none absolute left-0 right-0 top-8 z-50">
          <p className="eyebrow">{eyebrow}</p>
        </Container>

        {cards.map((card, i) => (
          <motion.div
            key={card.num}
            style={{ y: card.y }}
            className="absolute inset-x-0 top-0 flex flex-col"
            // z-index: later card renders on top
          >
            <Container className="w-full py-0">
              <div
                className="overflow-hidden rounded-t-2xl border border-b-0 border-border bg-bg-elevated"
                style={{
                  // Cards sit below the eyebrow row
                  marginTop: "56px",
                  height: `calc(100vh - 56px)`,
                }}
              >
                {/* Header tab — always visible when stacked */}
                <div
                  className="flex items-center gap-5 border-b border-border px-8 md:px-10"
                  style={{ height: HEADER_H }}
                >
                  <span className="mono text-[0.7rem] uppercase tracking-[0.18em] text-muted-soft shrink-0">
                    {card.num}
                  </span>
                  <span
                    className="font-display text-[clamp(1rem,2vw,1.3rem)] leading-tight tracking-tight text-ink"
                  >
                    {card.title}
                  </span>
                </div>

                {/* Body — fades out when card is buried */}
                <motion.div
                  style={{ opacity: card.bodyOpacity }}
                  className="flex flex-col justify-center px-8 py-10 md:px-10 md:py-14"
                >
                  <p
                    className="font-display text-ink"
                    style={{ fontSize: "clamp(1.7rem, 3.5vw, 2.6rem)", lineHeight: 1.1, letterSpacing: "-0.02em", fontWeight: 360 }}
                  >
                    {card.title}
                  </p>
                  <p className="mt-6 max-w-[46rem] text-[1.05rem] leading-relaxed text-muted">
                    {card.body}
                  </p>
                </motion.div>
              </div>
            </Container>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
