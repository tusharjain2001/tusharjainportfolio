"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { profile } from "@/lib/data";
import SectionHeading from "./SectionHeading";

const EASE = [0.22, 1, 0.36, 1];

function Counter({ value, suffix }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1600;
    const start = performance.now();
    let raf;
    const tick = (now) => {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 4);
      setDisplay(Math.round(value * eased));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value]);

  return (
    <span ref={ref} className="display text-bone text-5xl md:text-6xl">
      {display}
      <span className="text-amber">{suffix}</span>
    </span>
  );
}

const facts = [
  { k: "Role", v: "Frontend Engineer" },
  { k: "Based in", v: profile.location },
  { k: "Education", v: "B.Tech CSE, Amity University" },
  { k: "Focus", v: "React · Next.js · TypeScript" },
  { k: "Status", v: "Open to work" },
];

export default function About() {
  return (
    <section id="about" className="relative mx-auto max-w-7xl px-6 py-28 md:py-36">
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

      {/* stats */}
      <div className="mt-24 grid grid-cols-2 gap-x-8 gap-y-12 lg:grid-cols-4">
        {profile.stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: i * 0.08, ease: EASE }}
            className="hairline border-t pt-5"
          >
            <Counter value={stat.value} suffix={stat.suffix} />
            <p className="eyebrow mt-3">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
