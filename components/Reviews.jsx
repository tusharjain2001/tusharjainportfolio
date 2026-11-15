"use client";

import { motion } from "framer-motion";
import { endorsements, freelance, testimonials } from "@/lib/data";
import { reveal } from "@/lib/motion";
import SectionHeading from "./SectionHeading";

/**
 * Client reviews get their own section (and nav link) rather than trailing
 * the work grid — what clients say is a separate claim from what I built.
 */
export default function Reviews() {
  return (
    <section
      id="reviews"
      className="relative mx-auto max-w-7xl px-6 py-20 md:py-24"
    >
      <SectionHeading
        index="04 / Reviews"
        title="What clients"
        accent="said"
        subtitle="Quoted word for word from completed Upwork contracts."
      />

      <motion.div {...reveal({ y: 24, rotate: 6 })}>
        {/* their words, verbatim from Upwork — a quote beats any adjective */}
        <div className="grid gap-10 md:grid-cols-2 md:gap-x-12">
          {testimonials.map((t) => (
            <figure key={t.project} className="hairline border-t pt-6">
              <p
                role="img"
                aria-label="Rated 5 out of 5"
                className="text-amber text-xs tracking-[0.3em]"
              >
                ★★★★★
              </p>
              <blockquote className="pretty text-bone mt-4 leading-relaxed">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="eyebrow mt-5 leading-snug">
                {t.project}
              </figcaption>
            </figure>
          ))}
        </div>

        <p className="text-sand mt-10 text-sm">
          All {freelance.reviews} of my {freelance.platform} reviews are 5★,
          and {freelance.repeatClients} clients have come back and hired me
          again.
        </p>

        {/* Client-selected traits, not self-assessment — worth more than
            anything I could write about myself here. */}
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
