"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { profile } from "@/lib/data";
import { useReducedMotion } from "@/lib/useMediaQuery";

const EASE = [0.76, 0, 0.24, 1];

export default function Loader() {
  const [done, setDone] = useState(false);
  const [count, setCount] = useState(0);
  const reduced = useReducedMotion();
  const visible = !done && !reduced;

  useEffect(() => {
    if (reduced) return;

    const start = performance.now();
    const duration = 1400;
    let raf;

    const tick = (now) => {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setCount(Math.round(eased * 100));
      if (t < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        setTimeout(() => setDone(true), 220);
      }
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [reduced]);

  // keep the page from scrolling underneath while the curtain is up
  useEffect(() => {
    document.body.style.overflow = visible ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [visible]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          exit={{ y: "-100%" }}
          transition={{ duration: 0.9, ease: EASE }}
          className="bg-ink fixed inset-0 z-[200] flex flex-col justify-end px-6 pb-8"
        >
          <div className="mx-auto flex w-full max-w-7xl items-end justify-between">
            <span className="eyebrow">{profile.name}</span>
            <span className="display text-bone text-6xl md:text-8xl">
              {String(count).padStart(2, "0")}
            </span>
          </div>

          <div className="mx-auto mt-6 h-px w-full max-w-7xl bg-stone/25">
            <div
              className="bg-amber h-full"
              style={{ width: `${count}%` }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
