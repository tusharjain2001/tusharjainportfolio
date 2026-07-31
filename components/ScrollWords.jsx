"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

/** Strips punctuation so "effortless" still matches "effortless —". */
const bare = (w) => w.replace(/[^a-zA-Z']/g, "").toLowerCase();

function Word({ children, progress, range, accent }) {
  const opacity = useTransform(progress, range, [0.14, 1]);

  return (
    <motion.span style={{ opacity }} className="inline-block whitespace-pre">
      {accent ? <em className="text-amber">{children}</em> : children}{" "}
    </motion.span>
  );
}

/**
 * Lights each word as the block scrolls through the viewport, so the sentence
 * reads itself. One motion value per word — fine for a pull quote, which is
 * why this is deliberately not used on the body paragraphs.
 */
export default function ScrollWords({ text, accent, className = "" }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.85", "start 0.3"],
  });

  const words = text.split(" ");
  const accents = new Set((accent ?? "").split(" ").map(bare).filter(Boolean));

  return (
    <span ref={ref} className={className}>
      {words.map((word, i) => (
        <Word
          key={`${word}-${i}`}
          progress={scrollYProgress}
          range={[i / words.length, (i + 1) / words.length]}
          accent={accents.has(bare(word))}
        >
          {word}
        </Word>
      ))}
    </span>
  );
}
