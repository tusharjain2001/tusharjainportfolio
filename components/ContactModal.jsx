"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { profile } from "@/lib/data";
import { CONTACT_EVENT } from "@/lib/contact";
import { EASE } from "@/lib/motion";

const TOPICS = ["Freelance project", "Full-time role", "Something else"];

const EMPTY = { name: "", email: "", topic: TOPICS[0], message: "", website: "" };

const field =
  "hairline bg-ink-2 text-bone placeholder:text-stone/70 w-full rounded-lg border px-4 py-3 text-sm outline-none transition-colors duration-300 focus:border-amber/60";

export default function ContactModal() {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState(EMPTY);
  // idle | sending | sent | error
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");
  const firstInput = useRef(null);
  const returnFocus = useRef(null);

  useEffect(() => {
    const onOpen = () => {
      returnFocus.current = document.activeElement;
      setOpen(true);
    };
    window.addEventListener(CONTACT_EVENT, onOpen);
    return () => window.removeEventListener(CONTACT_EVENT, onOpen);
  }, []);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    // after the enter animation has a frame to start
    const id = requestAnimationFrame(() => firstInput.current?.focus());
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
      cancelAnimationFrame(id);
      returnFocus.current?.focus?.();
    };
  }, [open]);

  const close = () => setOpen(false);

  // Runs once the exit animation finishes, so it always sees current state.
  // A sent form resets for next time; a half-written one is kept.
  const afterClose = () => {
    if (status !== "sent") return;
    setForm(EMPTY);
    setStatus("idle");
  };

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  async function submit(e) {
    e.preventDefault();
    setStatus("sending");
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error || "Something went wrong.");
      setStatus("sent");
    } catch (err) {
      setError(err.message);
      setStatus("error");
    }
  }

  return (
    <AnimatePresence onExitComplete={afterClose}>
      {open && (
        <motion.div
          key="contact"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[80] flex items-end justify-center p-0 sm:items-center sm:p-6"
        >
          <button
            aria-label="Close"
            tabIndex={-1}
            onClick={close}
            className="bg-ink/80 absolute inset-0 cursor-default backdrop-blur-sm"
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="contact-title"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 24, opacity: 0 }}
            transition={{ duration: 0.5, ease: EASE }}
            className="hairline bg-ink relative max-h-[92vh] w-full max-w-lg overflow-y-auto rounded-t-2xl border p-6 sm:rounded-2xl sm:p-8"
          >
            <button
              onClick={close}
              aria-label="Close"
              className="text-stone hover:text-bone absolute top-5 right-5 transition-colors duration-300"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.4">
                <path d="M6 6l12 12M18 6 6 18" strokeLinecap="round" />
              </svg>
            </button>

            {status === "sent" ? (
              <div className="py-6 text-center">
                <p className="eyebrow text-amber">Message sent</p>
                <h2 id="contact-title" className="display text-bone mt-4 text-4xl">
                  Thanks, {form.name.split(" ")[0]}.
                </h2>
                <p className="text-sand mx-auto mt-4 max-w-sm text-sm leading-relaxed">
                  It&rsquo;s in my inbox. I reply within a day, to {form.email}.
                </p>
                <button onClick={close} className="btn btn-ghost mt-8">
                  <span>Close</span>
                </button>
              </div>
            ) : (
              <form onSubmit={submit}>
                <p className="eyebrow">Let&rsquo;s talk</p>
                <h2 id="contact-title" className="display text-bone mt-3 text-4xl">
                  What are you <span className="text-amber italic">building?</span>
                </h2>
                <p className="text-sand mt-3 text-sm leading-relaxed">
                  A few lines is plenty. I reply within a day.
                </p>

                <div className="mt-7 space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <label className="block">
                      <span className="eyebrow">Name</span>
                      <input
                        ref={firstInput}
                        required
                        maxLength={100}
                        autoComplete="name"
                        value={form.name}
                        onChange={update("name")}
                        className={`${field} mt-2`}
                      />
                    </label>
                    <label className="block">
                      <span className="eyebrow">Email</span>
                      <input
                        required
                        type="email"
                        maxLength={200}
                        autoComplete="email"
                        value={form.email}
                        onChange={update("email")}
                        className={`${field} mt-2`}
                      />
                    </label>
                  </div>

                  <fieldset>
                    <legend className="eyebrow">Looking for</legend>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {TOPICS.map((t) => {
                        const on = form.topic === t;
                        return (
                          <label
                            key={t}
                            className={`cursor-pointer rounded-full border px-4 py-2 text-xs transition-colors duration-300 ${
                              on
                                ? "border-amber text-amber bg-amber/10"
                                : "hairline text-sand hover:text-bone"
                            }`}
                          >
                            <input
                              type="radio"
                              name="topic"
                              value={t}
                              checked={on}
                              onChange={update("topic")}
                              className="sr-only"
                            />
                            {t}
                          </label>
                        );
                      })}
                    </div>
                  </fieldset>

                  <label className="block">
                    <span className="eyebrow">What do you need?</span>
                    <textarea
                      required
                      rows={4}
                      maxLength={3000}
                      placeholder="The project, a rough timeline, a link — whatever you have."
                      value={form.message}
                      onChange={update("message")}
                      className={`${field} mt-2 resize-none`}
                    />
                  </label>

                  {/* honeypot — hidden from people, irresistible to bots */}
                  <input
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                    aria-hidden
                    value={form.website}
                    onChange={update("website")}
                    className="absolute -left-[9999px] h-0 w-0 opacity-0"
                  />
                </div>

                {status === "error" && (
                  <p role="alert" className="text-amber mt-4 text-sm">
                    {error} You can also email me directly at{" "}
                    <a href={`mailto:${profile.email}`} className="u-link text-bone">
                      {profile.email}
                    </a>
                    .
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="btn btn-solid mt-7 w-full disabled:opacity-60"
                >
                  <span>{status === "sending" ? "Sending…" : "Send message"}</span>
                </button>
              </form>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
