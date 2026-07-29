"use client";

import { motion } from "framer-motion";
import { credentials, profile } from "@/lib/data";
import { useTilt } from "@/lib/useMagnetic";

const EASE = [0.22, 1, 0.36, 1];

const STACK = ["React", "Next.js", "TypeScript", "Tailwind", "Web3"];

const SOCIALS = [
  { label: "GitHub", href: profile.links.github },
  { label: "LinkedIn", href: profile.links.linkedin },
  { label: "Upwork", href: profile.links.upwork },
];

/**
 * Replaces the old WebGL form. Everything here is layout + one transform-only
 * ring animation, so it costs a single paint instead of a render loop.
 */
export default function HeroCard({ reduced = false }) {
  const tilt = useTilt(6);

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.55, ease: EASE }}
      className="relative"
    >
      {/* slow amber ring behind the card — transform only, composited */}
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-16 hidden items-center justify-center lg:flex"
      >
        <div
          className={`border-amber/20 relative aspect-square w-[36rem] rounded-full border ${
            reduced ? "" : "animate-orbit"
          }`}
        >
          <span className="bg-amber absolute top-0 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full" />
        </div>
      </div>

      <div
        ref={tilt}
        className="panel-card tilt tilt-shine relative overflow-hidden rounded-2xl p-7 sm:p-8"
      >
        {/* header */}
        <div className="flex items-center justify-between">
          <span className="eyebrow">India · UTC +5:30</span>
          <span className="eyebrow">2026</span>
        </div>

        {/* monogram */}
        <div className="mt-10 mb-2 text-center">
          <span className="display text-bone text-[7rem] leading-none tracking-tight">
            T<em className="text-amber">J</em>
          </span>
        </div>

        <p className="text-bone text-center text-lg">{profile.name}</p>
        <p className="eyebrow mt-2 text-center">Frontend Engineer</p>

        <div className="rule mt-8" />

        {/* stats */}
        <dl className="grid grid-cols-2 gap-x-6 gap-y-6 py-8">
          {credentials.map((c) => (
            <div key={c.label}>
              <dt className="display text-bone text-3xl">{c.value}</dt>
              <dd className="eyebrow mt-1.5">{c.label}</dd>
            </div>
          ))}
        </dl>

        <div className="rule" />

        {/* stack */}
        <ul className="flex flex-wrap gap-2 py-7">
          {STACK.map((t) => (
            <li
              key={t}
              className="hairline text-sand rounded-full border px-3 py-1 text-xs"
            >
              {t}
            </li>
          ))}
        </ul>

        <div className="rule" />

        {/* links */}
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-6">
          {SOCIALS.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer noopener"
              className="u-link text-sand hover:text-bone text-[13px] transition-colors"
            >
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
