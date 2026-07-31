"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { profile, workingStyle } from "@/lib/data";
import { reveal } from "@/lib/motion";
import ScrollWords from "./ScrollWords";
import SectionHeading from "./SectionHeading";

const facts = [
  { k: "Role", v: "Frontend Engineer" },
  { k: "Currently", v: "Freelancing — remote" },
  { k: "Based in", v: profile.location },
  { k: "Education", v: "B.Tech CSE, Amity University" },
  { k: "Focus", v: "React · Next.js · TypeScript" },
  { k: "Status", v: "Taking new projects" },
];

export default function About() {
  const body = useRef(null);

  // Reading spine: fills as the paragraphs pass through the viewport. One
  // motion value for the whole block, so it costs nothing on scroll.
  const { scrollYProgress } = useScroll({
    target: body,
    offset: ["start 0.85", "end 0.65"],
  });
  const spine = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    restDelta: 0.001,
  });

  return (
    <section id="about" className="relative mx-auto max-w-7xl px-6 py-20 md:py-24">
      <SectionHeading
        index="01 / About"
        title="Design and"
        accent="engineering"
        subtitle="I sit between the two — close enough to the design to protect the detail, close enough to the code to ship it fast."
      />

      <div className="grid gap-16 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <ScrollWords
            text="I turn Figma files into interfaces that feel effortless — and stay fast once they're in production."
            accent="effortless"
            className="display text-bone block text-[clamp(1.5rem,2.6vw,2.1rem)] leading-tight"
          />

          {/* narrative, with the spine running down its left edge */}
          <div ref={body} className="relative mt-10 pl-6">
            <span
              aria-hidden
              className="bg-stone/20 absolute top-0 bottom-0 left-0 w-px"
            >
              <motion.span
                style={{ scaleY: spine }}
                className="bg-amber absolute inset-0 block origin-top"
              />
            </span>

            <div className="text-sand space-y-5 leading-relaxed">
              {profile.about.map((para, i) => (
                <p key={i} className="pretty">
                  {para}
                </p>
              ))}
            </div>
          </div>

          {/* what clients get, in their terms rather than mine */}
          <div className="mt-12">
            <p className="eyebrow">How I work</p>

            <ul className="mt-6 space-y-1">
              {workingStyle.map((point, i) => (
                <motion.li
                  key={point}
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.55, delay: i * 0.08 }}
                  className="group flex items-baseline gap-4 py-2 transition-transform duration-500 hover:translate-x-1.5"
                >
                  <span className="bg-amber h-1 w-1 shrink-0 translate-y-[-0.2rem] rounded-full transition-transform duration-500 group-hover:scale-[2.2]" />
                  <span className="text-bone group-hover:text-amber text-sm leading-relaxed transition-colors duration-500">
                    {point}
                  </span>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>

        {/* fact table */}
        <motion.dl
          {...reveal({ y: 30, rotate: 7, duration: 0.9, delay: 0.15 })}
          className="lg:col-span-5 lg:pt-2"
        >
          {facts.map((f) => (
            <div
              key={f.k}
              className="group hairline relative flex items-baseline justify-between gap-6 overflow-hidden border-t py-4 last:border-b"
            >
              {/* amber rule wipes across the row on hover */}
              <span
                aria-hidden
                className="bg-amber absolute top-0 left-0 h-px w-full origin-left scale-x-0 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100"
              />

              <dt className="eyebrow group-hover:text-sand shrink-0 transition-colors duration-500">
                {f.k}
              </dt>
              <dd className="text-bone text-right text-sm transition-transform duration-500 group-hover:-translate-x-1">
                {f.v}
              </dd>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
}
