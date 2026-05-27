"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { Container } from "@/components/ui/container";

/* Each digit spins on a vertical strip of 0–9 */
function DigitSlot({ char, delay, active }: { char: string; delay: number; active: boolean }) {
  const digit = parseInt(char, 10);
  const reduced = useReducedMotion();

  if (isNaN(digit)) {
    // Non-numeric character (%, +, ~, etc.) — renders inline, no animation
    return (
      <span style={{ display: "inline-block", lineHeight: "1.1em" }}>{char}</span>
    );
  }

  // Strip: 10 cells (0–9), each 1.1em tall → total 11em
  // translateY = -(digit * 10)% of the strip's own height = -(digit * 1.1em)
  return (
    <span
      aria-hidden
      style={{
        display: "inline-block",
        overflow: "hidden",
        height: "1.1em",
        verticalAlign: "bottom",
      }}
    >
      <motion.span
        style={{ display: "flex", flexDirection: "column" }}
        initial={{ y: "0em" }}
        animate={{ y: active && !reduced ? `${-digit * 1.1}em` : "0em" }}
        transition={{
          duration: 0.7,
          delay,
          ease: [0.16, 1, 0.3, 1], // expo-out — fast spin, hard land
        }}
      >
        {["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"].map((d) => (
          <span
            key={d}
            style={{ display: "block", height: "1.1em", lineHeight: "1.1em" }}
          >
            {d}
          </span>
        ))}
      </motion.span>
    </span>
  );
}

type TickerGroupProps = {
  m1value: string; m1suffix?: string; m1label: string;
  m2value?: string; m2suffix?: string; m2label?: string;
  m3value?: string; m3suffix?: string; m3label?: string;
};

export function TickerGroup({
  m1value, m1suffix = "", m1label,
  m2value, m2suffix = "", m2label,
  m3value, m3suffix = "", m3label,
}: TickerGroupProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -5% 0px" });
  const reduced = useReducedMotion();
  const active = inView && !reduced;

  const metrics = [
    { value: m1value, suffix: m1suffix, label: m1label },
    ...(m2value && m2label ? [{ value: m2value, suffix: m2suffix ?? "", label: m2label }] : []),
    ...(m3value && m3label ? [{ value: m3value, suffix: m3suffix ?? "", label: m3label }] : []),
  ];

  const cols =
    metrics.length === 1
      ? "grid-cols-1 max-w-sm"
      : metrics.length === 2
        ? "sm:grid-cols-2"
        : "sm:grid-cols-2 lg:grid-cols-3";

  return (
    <Container className="mt-20 md:mt-28">
      <div
        ref={ref}
        className={`grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-border bg-border ${cols}`}
      >
        {metrics.map((m, i) => {
          const chars = (m.value + m.suffix).split("");
          return (
            <motion.div
              key={`${m.value}-${m.label}`}
              className="bg-bg-elevated p-8 md:p-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: active ? 1 : 0, y: active ? 0 : 20 }}
              transition={{ duration: 0.45, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
            >
              <div
                aria-label={m.value + m.suffix}
                className="font-display text-ink select-none"
                style={{ fontSize: "clamp(2.8rem, 5.5vw, 4.4rem)", lineHeight: "1.1em" }}
              >
                {chars.map((char, j) => (
                  <DigitSlot
                    key={j}
                    char={char}
                    delay={i * 0.18 + j * 0.07}
                    active={active}
                  />
                ))}
              </div>
              <p className="mt-4 text-[0.95rem] leading-relaxed text-muted">{m.label}</p>
            </motion.div>
          );
        })}
      </div>
    </Container>
  );
}
