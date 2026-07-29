"use client";

import { useEffect, useRef } from "react";

/**
 * Pulls an element toward the cursor while it's hovered. The easing is a CSS
 * transition rather than a rAF loop — the browser interpolates on the
 * compositor, so this costs nothing between pointer events.
 *
 * The rect is cached on enter; reading it per pointermove would force layout
 * on every frame of the hover.
 */
export function useMagnetic(strength = 0.3) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (
      !window.matchMedia("(pointer: fine)").matches ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    let rect = null;

    const onEnter = () => {
      rect = el.getBoundingClientRect();
    };

    const onMove = (e) => {
      if (!rect) return;
      const x = e.clientX - (rect.left + rect.width / 2);
      const y = e.clientY - (rect.top + rect.height / 2);
      el.style.transform = `translate3d(${x * strength}px, ${
        y * strength
      }px, 0)`;
    };

    const onLeave = () => {
      rect = null;
      el.style.transform = "translate3d(0, 0, 0)";
    };

    el.addEventListener("pointerenter", onEnter);
    el.addEventListener("pointermove", onMove);
    el.addEventListener("pointerleave", onLeave);

    return () => {
      el.removeEventListener("pointerenter", onEnter);
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerleave", onLeave);
    };
  }, [strength]);

  return ref;
}

/**
 * Tilts a card toward the cursor. Same CSS-transition trick, plus a shine
 * position published as a custom property so the highlight tracks the pointer.
 */
export function useTilt(max = 7) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (
      !window.matchMedia("(pointer: fine)").matches ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    let rect = null;

    const onEnter = () => {
      rect = el.getBoundingClientRect();
    };

    const onMove = (e) => {
      if (!rect) return;
      const px = (e.clientX - rect.left) / rect.width;
      const py = (e.clientY - rect.top) / rect.height;
      el.style.transform = `perspective(1100px) rotateY(${
        (px - 0.5) * max * 2
      }deg) rotateX(${(0.5 - py) * max * 2}deg)`;
      el.style.setProperty("--shine-x", `${px * 100}%`);
      el.style.setProperty("--shine-y", `${py * 100}%`);
    };

    const onLeave = () => {
      rect = null;
      el.style.transform =
        "perspective(1100px) rotateY(0deg) rotateX(0deg)";
      el.style.setProperty("--shine-x", "50%");
      el.style.setProperty("--shine-y", "0%");
    };

    el.addEventListener("pointerenter", onEnter);
    el.addEventListener("pointermove", onMove);
    el.addEventListener("pointerleave", onLeave);

    return () => {
      el.removeEventListener("pointerenter", onEnter);
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerleave", onLeave);
    };
  }, [max]);

  return ref;
}
