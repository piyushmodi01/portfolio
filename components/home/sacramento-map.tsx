"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import dynamic from "next/dynamic";

// Loaded dynamically — Leaflet requires the browser's window object
const MapInner = dynamic(() => import("./sacramento-map-inner"), {
  ssr: false,
  loading: () => (
    <div className="h-full w-full animate-pulse bg-[#f0eeeb] rounded-2xl" />
  ),
});

export function SacramentoMap() {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Map container drifts subtly as user scrolls
  const y = useTransform(scrollYProgress, [0, 1], [12, -12]);

  return (
    <motion.div
      ref={ref}
      style={{ y }}
      className="relative w-full overflow-hidden rounded-2xl border border-border"
      aria-label="Map showing Sacramento, CA. Click to open in Apple Maps."
    >
      {/* Fixed aspect ratio so the map always fills the column */}
      <div style={{ aspectRatio: "3/4" }}>
        <MapInner />
      </div>

      {/* Subtle hover hint */}
      <div className="pointer-events-none absolute bottom-4 left-0 right-0 flex justify-center">
        <span className="mono rounded-full bg-bg/80 px-3 py-1 text-[0.68rem] uppercase tracking-[0.14em] text-muted-soft backdrop-blur-sm">
          Sacramento, CA
        </span>
      </div>
    </motion.div>
  );
}
