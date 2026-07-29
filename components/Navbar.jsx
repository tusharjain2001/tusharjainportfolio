"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { navLinks, profile } from "@/lib/data";
import { useMagnetic } from "@/lib/useMagnetic";

const EASE = [0.22, 1, 0.36, 1];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");
  const talkBtn = useMagnetic(0.25);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks
      .map((l) => document.querySelector(l.href))
      .filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  // lock scroll behind the mobile overlay
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <motion.div
        style={{ scaleX: progress }}
        className="bg-amber fixed top-0 left-0 z-[60] h-px w-full origin-left"
      />

      <header
        className={`fixed top-0 left-0 z-50 w-full transition-all duration-500 ${
          scrolled ? "nav-blur hairline border-b py-4" : "border-b border-transparent py-6"
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6">
          <a href="#home" className="group flex items-baseline gap-2">
            <span className="text-bone text-[15px] tracking-tight">
              {profile.name}
            </span>
            <span className="bg-amber h-1 w-1 rounded-full transition-transform duration-500 group-hover:scale-150" />
          </a>

          <ul className="hidden items-center gap-9 md:flex">
            {navLinks.map((link) => {
              const isActive = active === link.href;
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={`relative text-[13px] transition-colors duration-300 ${
                      isActive ? "text-bone" : "text-stone hover:text-sand"
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-active"
                        transition={{ duration: 0.45, ease: EASE }}
                        className="bg-amber absolute -bottom-1.5 left-0 h-px w-full"
                      />
                    )}
                  </a>
                </li>
              );
            })}
          </ul>

          <a
            ref={talkBtn}
            href={`mailto:${profile.email}`}
            className="text-bone hairline magnetic hidden rounded-full border px-5 py-2 text-[13px] transition-colors duration-300 hover:border-amber hover:text-amber md:inline-block"
          >
            Let&rsquo;s talk
          </a>

          <button
            onClick={() => setOpen((v) => !v)}
            className="relative z-[70] flex h-6 w-7 flex-col justify-center gap-[7px] md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            <span
              className={`bg-bone h-px w-full transition-transform duration-300 ${
                open ? "translate-y-1 rotate-45" : ""
              }`}
            />
            <span
              className={`bg-bone h-px w-full transition-transform duration-300 ${
                open ? "-translate-y-1 -rotate-45" : ""
              }`}
            />
          </button>
        </nav>
      </header>

      {/* full-bleed mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="bg-ink fixed inset-0 z-[65] flex flex-col justify-center px-8 md:hidden"
          >
            <ul className="space-y-2">
              {navLinks.map((link, i) => (
                <li key={link.href} className="mask-line">
                  <motion.a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    initial={{ y: "140%" }}
                    animate={{ y: 0 }}
                    exit={{ y: "140%" }}
                    transition={{
                      duration: 0.7,
                      delay: 0.06 * i,
                      ease: EASE,
                    }}
                    className="display text-bone block py-1 text-5xl"
                  >
                    {link.label}
                  </motion.a>
                </li>
              ))}
            </ul>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45 }}
              className="mt-14"
            >
              <div className="rule" />
              <a
                href={`mailto:${profile.email}`}
                className="text-sand mt-6 block text-sm"
              >
                {profile.email}
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
