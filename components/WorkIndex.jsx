"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { reveal } from "@/lib/motion";

function Arrow({ className = "" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
    >
      <path d="M7 17 17 7M9 7h8v8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Card({ project, index }) {
  const linked = Boolean(project.link);
  const Tag = linked ? "a" : "div";

  return (
    <motion.li
      /* capped so a long grid doesn't stagger for ten seconds */
      {...reveal({
        y: 18,
        rotate: 7,
        duration: 0.6,
        delay: Math.min(index, 8) * 0.05,
      })}
    >
      <Tag
        {...(linked
          ? { href: project.link, target: "_blank", rel: "noopener noreferrer" }
          : {})}
        data-cursor={linked ? "hover" : undefined}
        className="trace-border group hairline relative block aspect-4/3 overflow-hidden rounded-xl border"
      >
        {project.image ? (
          <Image
            src={project.image}
            alt=""
            fill
            sizes="(min-width: 1024px) 32vw, (min-width: 640px) 48vw, 92vw"
            /* held back at rest so eleven bright light-mode screenshots don't
               overpower a near-black page; full colour under the cursor */
            className="object-cover object-top brightness-[0.82] saturate-[0.88] transition-[filter] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:brightness-105 group-hover:saturate-100"
          />
        ) : (
          /* deliberate empty state, not a blank card. No title here — the
             overlay below already carries it. */
          <span
            aria-hidden
            className="bg-ink-2 absolute inset-0 flex items-center justify-center"
          >
            <span className="eyebrow text-stone/40">Screenshot to come</span>
          </span>
        )}

        {/* Scrim: the screenshots are light and the type is bone, so the
            bottom third has to carry weight — but it stops at 60% so the
            image still reads as the subject of the card. */}
        <span
          aria-hidden
          className="from-ink via-ink/75 pointer-events-none absolute inset-0 bg-linear-to-t from-8% via-42% to-transparent to-72% transition-opacity duration-500"
        />

        <span className="eyebrow absolute top-4 left-5 z-10 transition-colors duration-500 group-hover:text-amber">
          {String(index + 1).padStart(2, "0")}
        </span>

        {linked && (
          <Arrow className="text-bone/70 group-hover:text-amber absolute top-4 right-5 z-10 h-4 w-4 transition-all duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        )}

        <span className="absolute inset-x-0 bottom-0 z-10 block p-5">
          <span className="text-bone block text-lg leading-snug">
            {project.title}
          </span>

          <span className="text-sand mt-1.5 block text-sm leading-relaxed">
            {project.subtitle}
          </span>

          {project.tech?.length > 0 && (
            <span className="eyebrow mt-3 block opacity-0 transition-opacity duration-500 group-hover:opacity-100">
              {project.tech.join(" · ")}
            </span>
          )}
        </span>
      </Tag>
    </motion.li>
  );
}

/**
 * The long tail of client work, as a gallery. Renders nothing when every
 * project is featured, so the section never shows an empty heading.
 */
export default function WorkIndex({ projects }) {
  if (!projects.length) return null;

  return (
    <div className="mt-24">
      <div className="hairline flex items-baseline justify-between gap-6 border-t pt-8">
        <p className="eyebrow">Client work</p>
        <p className="eyebrow">
          {String(projects.length).padStart(2, "0")} projects
        </p>
      </div>

      <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <Card key={p.title} project={p} index={i} />
        ))}
      </ul>
    </div>
  );
}
