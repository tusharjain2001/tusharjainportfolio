"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { profile } from "@/lib/data";
import { useReducedMotion } from "@/lib/useMediaQuery";
import HeroCard from "./HeroCard";
import { useMagnetic } from "@/lib/useMagnetic";

const EASE = [0.22, 1, 0.36, 1];

/** Line that slides up from behind a mask. */
function MaskLine({ children, delay = 0, className = "" }) {
  return (
    <span className="mask-line">
      <motion.span
        initial={{ y: "110%" }}
        animate={{ y: 0 }}
        transition={{ duration: 1.05, delay, ease: EASE }}
        className={`block ${className}`}
      >
        {children}
      </motion.span>
    </span>
  );
}

/** Roles roll vertically instead of typing themselves out one character at a time. */
function RollingRole({ roles }) {
  const [i, setI] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setI((n) => (n + 1) % roles.length), 2800);
    return () => clearInterval(id);
  }, [roles.length]);

  return (
    // Height is pinned to the parent's line-height (text-lg → 1.75rem) so this
    // box and the plain text beside it are the same size, and the parent can
    // centre them. Baseline alignment can't work here: `overflow: hidden`
    // makes an inline-block's baseline its bottom margin edge, which sits
    // ~6px below the text baseline and lifts the role off the line.
    <span className="relative inline-block h-7 min-w-44 overflow-hidden">
      <AnimatePresence initial={false}>
        <motion.span
          key={i}
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.6, ease: EASE }}
          className="text-bone absolute top-0 left-0 whitespace-nowrap"
        >
          {roles[i]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

export default function Hero() {
  const reduced = useReducedMotion();
  const workBtn = useMagnetic(0.28);
  const contactBtn = useMagnetic(0.28);

  return (
    <section
      id="home"
      className="relative flex min-h-screen w-full items-center overflow-hidden"
    >
      {/* warm bloom behind the card — a gradient, not a blurred layer, so the
          compositor never has to rasterise a 640px blur radius */}
      <div aria-hidden className="pointer-events-none absolute inset-0 glow-hero" />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-14 px-6 py-32 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-7">
          {/* availability */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="mb-8 flex items-center gap-2.5"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber opacity-70" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-amber" />
            </span>
            <span className="eyebrow text-sand">Available for new work</span>
          </motion.div>

          <h1 className="display text-bone text-[clamp(3rem,9vw,7.5rem)]">
            <MaskLine delay={0.2}>Frontend</MaskLine>
            <MaskLine delay={0.32}>
              <em className="text-amber">Engineer</em>
            </MaskLine>
          </h1>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.1, delay: 0.7, ease: EASE }}
            className="rule mt-10 max-w-md origin-left"
          />

          {/* name + rolling role */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.85, ease: EASE }}
            className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-1 text-lg"
          >
            <span className="text-bone">{profile.name}</span>
            <span className="text-stone">—</span>
            <RollingRole roles={profile.roles} />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.95, ease: EASE }}
            className="pretty mt-6 max-w-lg leading-relaxed text-sand"
          >
            {profile.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.05, ease: EASE }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a ref={workBtn} href="#projects" className="btn btn-solid magnetic">
              Selected work
              <svg
                viewBox="0 0 24 24"
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
              >
                <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a ref={contactBtn} href="#contact" className="btn btn-ghost magnetic">
              Get in touch
            </a>
          </motion.div>
        </div>

        {/* identity card — takes the slot the 3D form used to occupy */}
        <div className="hidden sm:block lg:col-span-5">
          <HeroCard reduced={reduced} />
        </div>
      </div>

      {/* baseline: scroll cue left, location right */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute right-0 bottom-8 left-0 z-10 mx-auto flex max-w-7xl items-end justify-between px-6"
      >
        <a
          href="#about"
          className="group flex items-center gap-3"
          aria-label="Scroll to about"
        >
          <span className="eyebrow transition-colors group-hover:text-sand">
            Scroll
          </span>
          <span className="relative h-8 w-px overflow-hidden bg-stone/40">
            <motion.span
              animate={{ y: ["-100%", "100%"] }}
              transition={{ repeat: Infinity, duration: 1.9, ease: "easeInOut" }}
              className="absolute inset-x-0 h-4 bg-amber"
            />
          </span>
        </a>

        <span className="eyebrow hidden text-right sm:block">
          {profile.location}
        </span>
      </motion.div>
    </section>
  );
}
