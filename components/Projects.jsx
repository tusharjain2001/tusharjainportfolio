"use client";

import { motion } from "framer-motion";
import { endorsements, freelance, projects } from "@/lib/data";
import { reveal } from "@/lib/motion";
import SectionHeading from "./SectionHeading";
import WorkIndex from "./WorkIndex";

const featured = projects.filter((p) => p.featured);
const rest = projects.filter((p) => !p.featured);

function Project({ project, index }) {
  return (
    <motion.article
      {...reveal({ y: 36, rotate: 6, duration: 0.85, delay: index * 0.08 })}
      className="group hairline relative border-t last:border-b"
    >
      {/* warm wash rises on hover */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 origin-bottom scale-y-0 bg-linear-to-t from-amber/[0.07] to-transparent transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-y-100"
      />

      {/* whole row is the target; only when there's somewhere to go */}
      {project.link && (
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${project.title} — open site`}
          className="absolute inset-0 z-10"
        />
      )}

      <div className="relative grid gap-8 py-12 md:grid-cols-12 md:gap-10 md:py-14">
        {/* rail */}
        <div className="flex items-baseline gap-4 md:col-span-3 md:flex-col md:gap-2">
          <span className="eyebrow group-hover:text-amber transition-colors duration-500">
            ({String(index + 1).padStart(2, "0")})
          </span>
          <span className="text-xs text-stone">{project.year}</span>
          <span className="text-xs text-stone md:mt-1">{project.role}</span>
        </div>

        {/* body */}
        <div className="md:col-span-9">
          <div className="flex items-start justify-between gap-6">
            <div>
              <h3 className="display text-bone text-[clamp(2rem,4vw,3.25rem)] transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-2">
                {project.title}
              </h3>
              <p className="text-sand mt-1 text-sm">{project.subtitle}</p>
            </div>

            {project.link && (
              <span className="text-stone group-hover:text-amber mt-2 shrink-0 transition-all duration-500 group-hover:translate-x-1 group-hover:-translate-y-1">
                <svg
                  viewBox="0 0 24 24"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.25"
                >
                  <path d="M7 17 17 7M9 7h8v8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            )}
          </div>

          <p className="pretty mt-6 max-w-2xl leading-relaxed text-sand">
            {project.description}
          </p>

          {/* metrics */}
          <div className="mt-9 grid max-w-2xl grid-cols-3 gap-6">
            {project.metrics.map((m) => (
              <div key={m.label}>
                <p className="display text-bone text-2xl md:text-3xl">
                  {m.value}
                </p>
                <p className="eyebrow mt-1.5 leading-snug">{m.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-9 flex flex-wrap gap-x-5 gap-y-2">
            {project.tech.map((t) => (
              <span key={t} className="eyebrow text-stone">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative mx-auto max-w-7xl px-6 py-20 md:py-24"
    >
      <SectionHeading
        index="03 / Work"
        title="Selected"
        accent="projects"
        subtitle="The builds where the measurable outcome mattered as much as the interface — followed by everything else I've shipped."
      />

      <div>
        {featured.map((project, i) => (
          <Project key={project.title} project={project} index={i} />
        ))}
      </div>

      <WorkIndex projects={rest} />

      {/* Client-selected traits, not self-assessment — worth more than
          anything I could write about myself here. */}
      <motion.div {...reveal({ y: 24, rotate: 6 })} className="mt-20">
        <p className="eyebrow">What clients said afterwards</p>

        <ul className="mt-7 flex flex-wrap gap-x-3 gap-y-3">
          {endorsements.map((e) => (
            <li
              key={e.label}
              className="hairline text-sand hover:border-amber/40 hover:text-bone rounded-full border px-4 py-2 text-xs transition-colors duration-300"
            >
              {e.label}
              {e.count > 1 && (
                <span className="text-amber ml-1.5">×{e.count}</span>
              )}
            </li>
          ))}
        </ul>

        <a
          href={freelance.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-stone hover:text-sand mt-7 inline-block text-xs transition-colors duration-300"
        >
          <span className="u-link">
            Selected by clients on completed {freelance.platform} contracts
          </span>
        </a>
      </motion.div>
    </section>
  );
}
