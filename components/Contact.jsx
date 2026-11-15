"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { freelance, profile } from "@/lib/data";
import { reveal } from "@/lib/motion";
import SectionHeading from "./SectionHeading";

const socials = [
  { label: "GitHub", href: profile.links.github },
  { label: "LinkedIn", href: profile.links.linkedin },
  { label: "Upwork", href: profile.links.upwork },
];

export default function Contact() {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const id = setTimeout(() => setCopied(false), 2000);
    return () => clearTimeout(id);
  }, [copied]);

  // Copy beats a mailto for anyone not using a desktop mail client, so the
  // address does both: click copies, the mailto stays as the middle-click path.
  const copyEmail = (e) => {
    if (!navigator.clipboard) return;
    e.preventDefault();
    navigator.clipboard.writeText(profile.email).then(() => setCopied(true));
  };

  return (
    <section
      id="contact"
      className="relative mx-auto max-w-7xl px-6 py-20 md:py-24"
    >
      <SectionHeading index="06 / Contact" title="Let’s build" accent="something" />

      <div className="grid gap-14 lg:grid-cols-12">
        <motion.div
          {...reveal({ y: 28, rotate: 7, duration: 0.85 })}
          className="lg:col-span-7"
        >
          <p className="pretty max-w-xl leading-relaxed text-sand">
            I&rsquo;m open to freelance work and full-time roles. If you have a
            project — or just want to talk through an idea — send me a note. I
            reply within a day.
          </p>

          <a
            href={`mailto:${profile.email}`}
            onClick={copyEmail}
            className="display text-bone hover:text-amber mt-10 block text-[clamp(1.6rem,4.5vw,3.25rem)] transition-colors duration-300"
          >
            <span className="u-link">{profile.email}</span>
          </a>

          <p className="eyebrow mt-4 h-4">
            <span
              className={`transition-colors duration-300 ${
                copied ? "text-amber" : "text-stone"
              }`}
            >
              {copied ? "Copied to clipboard" : "Click to copy"}
            </span>
          </p>

          {/* freelance standing — the part a prospective client actually wants */}
          <div className="hairline mt-14 max-w-xl border-t pt-8">
            <div className="grid grid-cols-3 gap-6">
              {freelance.proof.map((p) => (
                <div key={p.label}>
                  <p className="display text-bone text-3xl md:text-4xl">
                    {p.value}
                    <span className="text-amber">{p.suffix}</span>
                  </p>
                  <p className="eyebrow mt-2 leading-snug">{p.label}</p>
                </div>
              ))}
            </div>

            <a
              href={freelance.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-stone hover:text-sand mt-7 inline-block text-xs transition-colors duration-300"
            >
              <span className="u-link">
                {freelance.badge} on {freelance.platform}
              </span>
            </a>
          </div>
        </motion.div>

        <motion.div
          {...reveal({ y: 28, rotate: 7, duration: 0.85, delay: 0.15 })}
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
