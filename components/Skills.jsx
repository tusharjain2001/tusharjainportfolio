"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { practices, skills } from "@/lib/data";
import { reveal } from "@/lib/motion";
import SectionHeading from "./SectionHeading";

const allTech = skills.flatMap((g) => g.items);

/** Radius of the light pool, in px. */
const R = 155;

/**
 * The toolkit rows, rendered twice: once unlit as the base, once lit inside
 * the torch window. Identical markup both times so the two line up exactly.
 */
function Rows({ lit }) {
  return (
    <div>
      {skills.map((group) => (
        <div
          key={group.category}
          className="hairline grid gap-4 border-t py-8 last:border-b md:grid-cols-12 md:gap-10"
        >
          <h3
            className={`eyebrow md:col-span-3 md:pt-1 ${
              lit ? "text-amber" : ""
            }`}
          >
            {group.category}
          </h3>

          <ul className="flex flex-wrap gap-x-8 gap-y-3 md:col-span-9">
            {group.items.map((item) => (
              <li key={item}>
                <span
                  className={`text-lg ${lit ? "text-bone" : "text-stone"}`}
                >
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default function Skills() {
  const wrap = useRef(null);
  const torch = useRef(null);
  const inner = useRef(null);

  useEffect(() => {
    const el = wrap.current;
    if (!el) return;
    // Coarse pointers have no hover, and a torch that can't move is just a
    // dimmed list — those users get the lit copy outright (see `md:` below).
    if (
      !window.matchMedia("(pointer: fine)").matches ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    let raf = 0;
    let x = 0;
    let y = 0;
    let w = 0;

    // The window moves one way and its contents move exactly the opposite
    // way, so the lit text stays pinned to the unlit text underneath while
    // the hole travels. Both are transforms — no layout, no repaint.
    const sync = () => {
      raf = 0;
      if (torch.current) {
        torch.current.style.transform = `translate3d(${x - R}px, ${y - R}px, 0)`;
      }
      if (inner.current) {
        inner.current.style.width = `${w}px`;
        inner.current.style.transform = `translate3d(${R - x}px, ${R - y}px, 0)`;
      }
    };

    const onMove = (e) => {
      const r = el.getBoundingClientRect();
      x = e.clientX - r.left;
      y = e.clientY - r.top;
      w = r.width;
      if (!raf) raf = requestAnimationFrame(sync);
    };

    const onEnter = () => {
      if (torch.current) torch.current.style.opacity = "1";
    };
    const onLeave = () => {
      if (torch.current) torch.current.style.opacity = "0";
    };

    el.addEventListener("pointerenter", onEnter);
    el.addEventListener("pointermove", onMove);
    el.addEventListener("pointerleave", onLeave);

    return () => {
      el.removeEventListener("pointerenter", onEnter);
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerleave", onLeave);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section id="skills" className="relative py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          index="04 / Toolkit"
          title="What I build"
          accent="with"
          subtitle="A deliberately small stack — I'd rather know a few tools deeply than list twenty — and the work I get hired to do with it."
        />

        <motion.div {...reveal({ y: 24, rotate: 8, duration: 0.8 })}>
          <div ref={wrap} className="relative">
            {/* base layer — unlit on desktop, fully legible on touch */}
            <div className="[&_span]:text-bone md:[&_span]:text-stone">
              <Rows />
            </div>

            {/* the lit copy, visible only through the moving window */}
            <div
              ref={torch}
              aria-hidden
              className="torch pointer-events-none absolute top-0 left-0 hidden overflow-hidden opacity-0 md:block"
              style={{ width: R * 2, height: R * 2 }}
            >
              <div ref={inner} className="absolute top-0 left-0">
                <Rows lit />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Services rather than tools — the phrasing clients search with. */}
        <motion.div
          {...reveal({ y: 24, rotate: 8, duration: 0.7 })}
          className="mt-14"
        >
          <p className="eyebrow">Hired for</p>

          <ul className="mt-6 flex flex-wrap gap-x-3 gap-y-3">
            {practices.map((p) => (
              <li
                key={p}
                className="hairline text-sand hover:border-amber/40 hover:text-bone rounded-full border px-4 py-2 text-sm transition-colors duration-300"
              >
                {p}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>

      {/* endless strip — a bit of movement to break up the static rows */}
      <div className="edge-fade mt-20 overflow-hidden">
        <div className="animate-marquee flex w-max gap-12 whitespace-nowrap">
          {[...allTech, ...allTech].map((t, i) => (
            <span
              key={`${t}-${i}`}
              className="display text-stone/45 text-4xl md:text-5xl"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
