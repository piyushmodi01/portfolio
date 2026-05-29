"use client";

import { useState } from "react";
import { motion } from "framer-motion";

interface PrincipleCardProps {
  title: string;
  body: string;
}

export function PrincipleCard({ title, body }: PrincipleCardProps) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="relative h-52 cursor-pointer"
      style={{ perspective: "1000px" }}
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
      onClick={() => setFlipped((f) => !f)}
    >
      <motion.div
        className="relative w-full h-full"
        style={{ transformStyle: "preserve-3d" }}
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ type: "spring", stiffness: 180, damping: 22 }}
      >
        {/* Front */}
        <div
          className="absolute inset-0 flex items-center justify-center rounded-2xl border border-border bg-bg-elevated p-6"
          style={{ backfaceVisibility: "hidden" }}
        >
          <p className="display text-[1.2rem] leading-tight tracking-tight text-ink text-center">
            {title}
          </p>
        </div>

        {/* Back */}
        <div
          className="absolute inset-0 flex items-center justify-center rounded-2xl bg-ink p-6"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          <p className="text-[0.93rem] leading-relaxed text-white/80 text-center">
            {body}
          </p>
        </div>
      </motion.div>
    </div>
  );
}
