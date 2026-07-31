"use client";

import { motion } from "framer-motion";
import { practices, skills } from "@/lib/data";
import { reveal } from "@/lib/motion";
import SectionHeading from "./SectionHeading";

const allTech = skills.flatMap((g) => g.items);

export default function Skills() {
  return (
    <section id="skills" className="relative py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          index="04 / Toolkit"
          title="What I build"
          accent="with"
          subtitle="A deliberately small stack — I'd rather know a few tools deeply than list twenty — and the work I get hired to do with it."
        />

        <div>
          {skills.map((group, gi) => (
            <motion.div
              key={group.category}
              {...reveal({ y: 24, rotate: 8, duration: 0.7, delay: gi * 0.08 })}
              className="hairline grid gap-4 border-t py-8 last:border-b md:grid-cols-12 md:gap-10"
            >
              <h3 className="eyebrow md:col-span-3 md:pt-1">
                {group.category}
              </h3>

              <ul className="flex flex-wrap gap-x-8 gap-y-3 md:col-span-9">
                {group.items.map((item) => (
                  <li key={item}>
                    <span className="text-bone hover:text-amber cursor-default text-lg transition-colors duration-300">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Services rather than tools — the phrasing clients search with. */}
        <motion.div
          {...reveal({ y: 24, rotate: 8, duration: 0.7 })}
          className="mt-14"
        >
          <p className="eyebrow">Hired for</p>

          <ul className="mt-6 flex flex-wrap gap-x-3 gap-y-3">
            {practices.map((p) => (
              <li
                key={p}
                className="hairline text-sand hover:border-amber/40 hover:text-bone rounded-full border px-4 py-2 text-sm transition-colors duration-300"
              >
                {p}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>

      {/* endless strip — a bit of movement to break up the static rows */}
      <div className="edge-fade mt-20 overflow-hidden">
        <div className="animate-marquee flex w-max gap-12 whitespace-nowrap">
          {[...allTech, ...allTech].map((t, i) => (
            <span
              key={`${t}-${i}`}
              className="display text-stone/45 text-4xl md:text-5xl"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
