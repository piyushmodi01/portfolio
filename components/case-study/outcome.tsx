"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { Container } from "@/components/ui/container";

type Stat = { value: string; label: string };

/* Parses values like "3+", "~30%", "40" — returns null for text-only values */
function parseCountable(val: string): { prefix: string; count: number; suffix: string } | null {
  const m = val.match(/^([~]?)(\d+)([+%]?)$/);
  if (!m) return null;
  return { prefix: m[1], count: parseInt(m[2], 10), suffix: m[3] };
}

function useCountUp(target: number, active: boolean, duration = 1100) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!active) return;
    setValue(0);
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(Math.round(eased * target));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [active, target, duration]);
  return value;
}

function StatCard({ stat, index, active }: { stat: Stat; index: number; active: boolean }) {
  const reduced = useReducedMotion();
  const parsed = parseCountable(stat.value);
  const counted = useCountUp(parsed?.count ?? 0, active && !reduced && !!parsed);

  const displayValue = parsed && !reduced
    ? `${parsed.prefix}${counted}${parsed.suffix}`
    : stat.value;

  return (
    <motion.div
      className="rounded-2xl border border-border bg-bg-elevated p-6 md:p-7"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: active ? 1 : 0, y: active ? 0 : 20 }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
    >
      <p
        className="font-display leading-none tracking-tight text-ink"
        style={{ fontSize: "clamp(2rem, 4.5vw, 3.2rem)" }}
      >
        {displayValue}
      </p>
      <p className="mt-3 text-[0.95rem] text-muted">{stat.label}</p>
    </motion.div>
  );
}

export function Outcome({ stats, summary }: { stats?: Stat[]; summary?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -5% 0px" });

  return (
    <Container className="mt-24 md:mt-32">
      <p className="eyebrow">Outcome</p>
      {summary && (
        <p className="mt-4 max-w-[40rem] text-[1.1rem] leading-relaxed text-ink-soft md:text-[1.18rem]">
          {summary}
        </p>
      )}
      {stats && stats.length > 0 && (
        <div
          ref={ref}
          className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {stats.map((s, i) => (
            <StatCard key={s.label} stat={s} index={i} active={inView} />
          ))}
        </div>
      )}
    </Container>
  );
}
