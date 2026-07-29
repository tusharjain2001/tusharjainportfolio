"use client";

import { motion } from "framer-motion";
import { profile, workingStyle } from "@/lib/data";
import SectionHeading from "./SectionHeading";

const EASE = [0.22, 1, 0.36, 1];

const facts = [
  { k: "Role", v: "Frontend Engineer" },
  { k: "Currently", v: "Freelancing — remote" },
  { k: "Based in", v: profile.location },
  { k: "Education", v: "B.Tech CSE, Amity University" },
  { k: "Focus", v: "React · Next.js · TypeScript" },
  { k: "Status", v: "Taking new projects" },
];

export default function About() {
  return (
    <section id="about" className="relative mx-auto max-w-7xl px-6 py-20 md:py-24">
      <SectionHeading
        index="01 / About"
        title="Design and"
        accent="engineering"
        subtitle="I sit between the two — close enough to the design to protect the detail, close enough to the code to ship it fast."
      />

      <div className="grid gap-16 lg:grid-cols-12">
        {/* narrative */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: EASE }}
          className="lg:col-span-7"
        >
          <p className="display text-bone text-[clamp(1.5rem,2.6vw,2.1rem)] leading-[1.25]">
            I turn Figma files into interfaces that feel{" "}
            <em className="text-amber">effortless</em> — and stay fast once
            they&rsquo;re in production.
          </p>

          <div className="mt-8 space-y-5 leading-relaxed text-sand">
            {profile.about.map((para, i) => (
              <p key={i} className="pretty">
                {para}
              </p>
            ))}
          </div>

          {/* what clients get, in their terms rather than mine */}
          <div className="mt-12">
            <p className="eyebrow">How I work</p>

            <ul className="mt-6 space-y-4">
              {workingStyle.map((point) => (
                <li key={point} className="flex items-baseline gap-4">
                  <span className="bg-amber h-1 w-1 shrink-0 translate-y-[-0.2rem] rounded-full" />
                  <span className="text-bone text-sm leading-relaxed">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* fact table */}
        <motion.dl
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, delay: 0.15, ease: EASE }}
          className="lg:col-span-5 lg:pt-2"
        >
          {facts.map((f) => (
            <div
              key={f.k}
              className="hairline flex items-baseline justify-between gap-6 border-t py-4 last:border-b"
            >
              <dt className="eyebrow shrink-0">{f.k}</dt>
              <dd className="text-right text-sm text-bone">{f.v}</dd>
            </div>
          ))}
        </motion.dl>
      </div>

    </section>
  );
}
