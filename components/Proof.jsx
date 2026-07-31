"use client";

import { motion } from "framer-motion";
import { achievements, badges } from "@/lib/data";
import { reveal } from "@/lib/motion";
import Counter from "./Counter";

/**
 * Sits directly under the hero, before anyone has to scroll far. The rest of
 * the page is quiet hairlines; this band is deliberately the loudest thing on
 * it, because it's the part that has to land.
 */
export default function Proof() {
  return (
    <section className="hairline bg-ink-2 relative border-y">
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-24">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
          className="eyebrow"
        >
          What that has looked like
        </motion.p>

        <div className="mt-12 grid gap-x-12 gap-y-14 md:grid-cols-3">
          {achievements.map((a, i) => (
            <motion.div
              key={a.headline}
              {...reveal({ y: 28, rotate: 10, delay: i * 0.12 })}
              /* flex column so the source line sits on a shared baseline no
                 matter how many lines the detail copy runs to */
              className="hairline flex h-full flex-col md:border-l md:pl-8 md:first:border-l-0 md:first:pl-0"
            >
              <Counter
                value={a.value}
                suffix={a.suffix}
                decimals={a.decimals}
                className="display text-bone block text-[clamp(3.5rem,6vw,5.5rem)] leading-none"
              />

              <p className="text-bone mt-4 text-lg leading-snug">
                {a.headline}
              </p>

              <p className="pretty text-sand mt-4 text-sm leading-relaxed">
                {a.detail}
              </p>

              <p className="eyebrow mt-6 pt-2 md:mt-auto">{a.source}</p>
            </motion.div>
          ))}
        </div>

        {/* verifiable credentials, kept visually lighter than the numbers */}
        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="hairline mt-16 flex flex-wrap gap-x-3 gap-y-3 border-t pt-10"
        >
          {badges.map((b) => (
            <li
              key={b}
              className="hairline text-sand flex items-center gap-2.5 rounded-full border px-4 py-2 text-xs"
            >
              <span className="bg-amber h-1 w-1 shrink-0 rounded-full" />
              {b}
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
