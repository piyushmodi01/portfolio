"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { Container } from "@/components/ui/container";

type ChapterProps = {
  number: string | number;
  title: string;
  intro?: string;
};

const ease = [0.22, 1, 0.36, 1] as const;

export function Chapter({ number, title, intro }: ChapterProps) {
  const ref = useRef(null);
  const reduced = useReducedMotion();
  const inView = useInView(ref, { once: true, margin: "0px 0px -5% 0px" });
  const active = inView && !reduced;
  const num = String(number).padStart(2, "0");

  return (
    <Container className="mt-32 md:mt-44">
      <div ref={ref}>
        {/* Border line draws left → right */}
        <motion.div
          className="h-[2px] bg-ink origin-left"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: active ? 1 : 0 }}
          transition={{ duration: 0.7, ease }}
        />

        <div className="pt-10 md:pt-12">
          <div className="flex items-baseline justify-between gap-6 md:gap-12">
            <motion.span
              className="mono shrink-0 text-[0.7rem] uppercase tracking-[0.2em] text-muted-soft"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: active ? 1 : 0, y: active ? 0 : 8 }}
              transition={{ duration: 0.45, delay: 0.35, ease }}
            >
              {num}
            </motion.span>
            <motion.h2
              className="display text-right text-[clamp(2rem,5.5vw,4rem)] leading-[1.02] tracking-tight text-ink"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: active ? 1 : 0, y: active ? 0 : 14 }}
              transition={{ duration: 0.55, delay: 0.5, ease }}
            >
              {title}
            </motion.h2>
          </div>

          {intro && (
            <motion.p
              className="mt-8 max-w-[50rem] text-[1.05rem] leading-relaxed text-muted md:text-[1.12rem]"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: active ? 1 : 0, y: active ? 0 : 8 }}
              transition={{ duration: 0.45, delay: 0.65, ease }}
            >
              {intro}
            </motion.p>
          )}
        </div>
      </div>
    </Container>
  );
}
