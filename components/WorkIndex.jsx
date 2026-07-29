"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1];

function Card({ project, index }) {
  const linked = Boolean(project.link);
  const Tag = linked ? "a" : "div";

  return (
    <motion.li
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      /* capped so a long grid doesn't stagger for ten seconds */
      transition={{
        duration: 0.55,
        delay: Math.min(index, 8) * 0.05,
        ease: EASE,
      }}
    >
      <Tag
        {...(linked
          ? { href: project.link, target: "_blank", rel: "noopener noreferrer" }
          : {})}
        data-cursor={linked ? "hover" : undefined}
        className="panel group flex h-full flex-col rounded-xl p-6 hover:-translate-y-0.5"
      >
        {project.image && (
          <div className="hairline relative mb-5 aspect-video overflow-hidden rounded-lg border">
            <Image
              src={project.image}
              alt=""
              fill
              sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw"
              /* lazy by default — these sit well below the fold */
              className="object-cover object-top transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]"
            />
          </div>
        )}

        <div className="flex items-start justify-between gap-4">
          <h3 className="text-bone group-hover:text-amber text-lg leading-snug transition-colors duration-300">
            {project.title}
          </h3>

          {linked && (
            <svg
              viewBox="0 0 24 24"
              className="text-stone group-hover:text-amber mt-1 h-4 w-4 shrink-0 transition-all duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.4"
            >
              <path
                d="M7 17 17 7M9 7h8v8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </div>

        <p className="pretty text-sand mt-2.5 text-sm leading-relaxed">
          {project.subtitle}
        </p>

        {project.tech?.length > 0 && (
          <p className="eyebrow mt-auto pt-6">{project.tech.join(" · ")}</p>
        )}
      </Tag>
    </motion.li>
  );
}

/**
 * The long tail of client work, as a grid. Renders nothing when every project
 * is featured, so the section never shows an empty heading.
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
