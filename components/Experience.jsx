"use client";

import { motion } from "framer-motion";
import { experience } from "@/lib/data";
import { reveal } from "@/lib/motion";
import SectionHeading from "./SectionHeading";

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative mx-auto max-w-7xl px-6 py-20 md:py-24"
    >
      <SectionHeading
        index="02 / Career"
        title="Where I've"
        accent="worked"
        subtitle="A UK Web3 startup, an Indian product team, and now my own client work — shipping to real users throughout."
      />

      <div>
        {experience.map((job, i) => (
          <motion.article
            key={job.company}
            {...reveal({ y: 32, rotate: 8, delay: i * 0.1 })}
            className="group hairline border-t py-10 last:border-b md:py-12"
          >
            <div className="grid gap-6 md:grid-cols-12 md:gap-10">
              {/* period rail */}
              <div className="md:col-span-3">
                <p className="eyebrow group-hover:text-amber transition-colors duration-500">
                  {job.period}
                </p>
                <p className="mt-2 text-xs text-stone">{job.location}</p>
              </div>

              {/* body */}
              <div className="md:col-span-9">
                <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                  <h3 className="display text-bone text-3xl transition-transform duration-500 group-hover:translate-x-1 md:text-4xl">
                    {job.company}
                  </h3>
                  <span className="text-sand text-sm">{job.role}</span>
                </div>

                <ul className="mt-6 space-y-3">
                  {job.points.map((point, j) => (
                    <li
                      key={j}
                      className="flex gap-4 text-sm leading-relaxed text-sand"
                    >
                      <span className="text-stone mt-2 h-px w-4 shrink-0 bg-current" />
                      <span className="pretty">{point}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-7 flex flex-wrap gap-x-5 gap-y-2">
                  {job.tech.map((t) => (
                    <span key={t} className="eyebrow text-stone">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
