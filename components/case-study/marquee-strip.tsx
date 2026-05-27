"use client";

import { useRef, useState } from "react";

type MarqueeStripProps = {
  /** Space-separated items; use · as separator character in the string */
  text: string;
  /** Speed in seconds for one full loop. Default 28. */
  speed?: number;
};

export function MarqueeStrip({ text, speed = 28 }: MarqueeStripProps) {
  const [paused, setPaused] = useState(false);

  // Duplicate content so the strip loops seamlessly
  const content = `${text}  `;

  return (
    <div
      className="mt-20 w-full overflow-hidden border-y border-border bg-ink md:mt-28"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-hidden
    >
      <div
        className="flex whitespace-nowrap py-5"
        style={{
          animation: `marquee ${speed}s linear infinite`,
          animationPlayState: paused ? "paused" : "running",
        }}
      >
        {/* Four copies so there's no gap at any viewport width */}
        {[0, 1, 2, 3].map((i) => (
          <span
            key={i}
            className="inline-block pr-8 font-display text-[clamp(1.3rem,2.5vw,2rem)] font-normal italic tracking-tight text-white/80"
            style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 30" }}
          >
            {content}
          </span>
        ))}
      </div>
    </div>
  );
}
