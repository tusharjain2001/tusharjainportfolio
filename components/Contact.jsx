"use client";

import { motion } from "framer-motion";
import { profile } from "@/lib/data";
import SectionHeading from "./SectionHeading";

const EASE = [0.22, 1, 0.36, 1];

const socials = [
  { label: "GitHub", href: profile.links.github },
  { label: "LinkedIn", href: profile.links.linkedin },
  { label: "Upwork", href: profile.links.upwork },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative mx-auto max-w-7xl px-6 py-28 md:py-36"
    >
      <SectionHeading index="05 / Contact" title="Let’s build" accent="something" />

      <div className="grid gap-14 lg:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.85, ease: EASE }}
          className="lg:col-span-7"
        >
          <p className="pretty max-w-xl leading-relaxed text-sand">
            I&rsquo;m open to freelance work and full-time roles. If you have a
            project — or just want to talk through an idea — send me a note. I
            reply within a day.
          </p>

          <a
            href={`mailto:${profile.email}`}
            className="display text-bone hover:text-amber mt-10 block text-[clamp(1.6rem,4.5vw,3.25rem)] transition-colors duration-300"
          >
            <span className="u-link">{profile.email}</span>
          </a>

          <a
            href={`tel:${profile.phone.replace(/\s/g, "")}`}
            className="text-sand hover:text-bone mt-6 inline-block text-sm transition-colors duration-300"
          >
            <span className="u-link">{profile.phone}</span>
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.85, delay: 0.15, ease: EASE }}
          className="lg:col-span-5"
        >
          <p className="eyebrow">Elsewhere</p>

          <ul className="mt-4">
            {socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group hairline text-bone flex items-center justify-between border-t py-4 text-lg transition-colors duration-300 last:border-b hover:text-amber"
                >
                  {s.label}
                  <svg
                    viewBox="0 0 24 24"
                    className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1"
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
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-10 flex items-center gap-2.5">
            <span className="relative flex h-1.5 w-1.5">
              <span className="bg-amber absolute inline-flex h-full w-full animate-ping rounded-full opacity-70" />
              <span className="bg-amber relative inline-flex h-1.5 w-1.5 rounded-full" />
            </span>
            <span className="eyebrow text-sand">
              Available — {profile.location.split(",").slice(-1)[0].trim()}
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
