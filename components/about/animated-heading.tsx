"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

const WORDS = [
  { article: "a",  word: "Designer" },
  { article: "a",  word: "Cat Dad" },
  { article: "a",  word: "Vibe-Builder" },
  { article: "a",  word: "So-So Cook" },
];

export function AnimatedHeading() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % WORDS.length);
    }, 2200);
    return () => clearInterval(timer);
  }, []);

  const current = WORDS[index];

  return (
    <h1
      className="display mt-8 leading-[1.05] tracking-tight text-ink"
      style={{ fontSize: "clamp(2.8rem, 7vw, 5.6rem)" }}
    >
      {/* Static line */}
      <span className="block">I&apos;m</span>

      {/* Rotating line — article + word animate together */}
      <AnimatePresence mode="wait">
        <motion.span
          key={current.word}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -14 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="block text-accent"
        >
          {current.article} {current.word}.
        </motion.span>
      </AnimatePresence>
    </h1>
  );
}
