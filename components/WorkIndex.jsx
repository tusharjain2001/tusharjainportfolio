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
        className="trace-border group hairline bg-ink-2 relative flex h-full flex-col overflow-hidden rounded-xl border"
      >
        {/* 2:1 to match the captures. Anything squarer crops the sides and
            takes the first word of the headline with it. */}
        <div className="bg-ink-3 relative aspect-2/1 overflow-hidden">
          {project.image ? (
            <Image
              src={project.image}
              alt={`${project.title} — website homepage`}
              fill
              sizes="(min-width: 1024px) 32vw, (min-width: 640px) 48vw, 92vw"
              /* held back at rest so a dozen bright light-mode screenshots
                 don't overpower a near-black page; full colour on hover */
              className="object-cover object-top brightness-90 saturate-[0.92] transition-[transform,filter] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04] group-hover:brightness-105 group-hover:saturate-100"
            />
          ) : (
            /* deliberate empty state, not a blank card */
            <div
              aria-hidden
              className="absolute inset-0 flex items-center justify-center"
            >
              <span className="eyebrow text-stone/40">Screenshot to come</span>
            </div>
          )}
        </div>

        {/* Type sits below the image rather than on it. The screenshots are
            busy and light; no scrim was ever going to make bone type read
            cleanly across twelve different hero sections.

            Real h3/p rather than styled spans — these twelve titles are the
            only place most of the client names appear on the page. */}
        <div className="hairline flex flex-1 flex-col border-t p-5">
          <div className="flex items-center justify-between gap-3">
            <span className="eyebrow group-hover:text-amber transition-colors duration-500">
              {String(index + 1).padStart(2, "0")}
            </span>

            {linked && (
              <Arrow className="text-stone group-hover:text-amber h-4 w-4 shrink-0 transition-all duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            )}
          </div>

          <h3 className="text-bone mt-3 text-lg leading-snug">
            {project.title}
          </h3>

          <p className="text-sand mt-1.5 text-sm leading-relaxed">
            {project.subtitle}
          </p>

          {project.tech?.length > 0 && (
            <p className="eyebrow text-stone mt-3">
              {project.tech.join(" · ")}
            </p>
          )}
        </div>
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
