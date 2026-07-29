"use client";

import { useEffect, useRef } from "react";
import { useMediaQuery, useReducedMotion } from "@/lib/useMediaQuery";

/**
 * A single blend-mode disc. It inverts whatever sits under it, so it reads as
 * part of the page rather than a glowing overlay stuck on top of it.
 */
export default function CustomCursor() {
  const ref = useRef(null);
  const finePointer = useMediaQuery("(pointer: fine)");
  const reduced = useReducedMotion();
  const enabled = finePointer && !reduced;

  useEffect(() => {
    if (!enabled) return;

    // only hide the native cursor once ours is actually running
    document.body.classList.add("has-cursor");

    const target = { x: -100, y: -100 };
    const current = { x: -100, y: -100 };
    let scale = 1;
    let targetScale = 1;
    let raf;

    const onMove = (e) => {
      target.x = e.clientX;
      target.y = e.clientY;
    };

    const onOver = (e) => {
      targetScale = e.target.closest("a, button, [data-cursor='hover']")
        ? 3.2
        : 1;
    };

    const onDown = () => (targetScale *= 0.75);
    const onUp = () => (targetScale = targetScale < 2 ? 1 : 3.2);

    const loop = () => {
      current.x += (target.x - current.x) * 0.18;
      current.y += (target.y - current.y) * 0.18;
      scale += (targetScale - scale) * 0.14;
      if (ref.current) {
        ref.current.style.transform = `translate3d(${current.x}px, ${current.y}px, 0) translate(-50%, -50%) scale(${scale})`;
      }
      raf = requestAnimationFrame(loop);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseover", onOver, { passive: true });
    window.addEventListener("mousedown", onDown, { passive: true });
    window.addEventListener("mouseup", onUp, { passive: true });
    raf = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      cancelAnimationFrame(raf);
      document.body.classList.remove("has-cursor");
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div
      ref={ref}
      aria-hidden
      className="bg-bone pointer-events-none fixed top-0 left-0 z-[100] h-3 w-3 rounded-full mix-blend-difference will-change-transform"
    />
  );
}
