"use client";

export const EASE = [0.22, 1, 0.36, 1];

/**
 * The page's shared entrance: blocks tip up into place rather than just
 * sliding. It's a one-shot transform per element — the same cost as the plain
 * translate it replaces, since rotateX composites on the GPU too.
 *
 * `transformPerspective` has to sit on the animated element itself; a
 * `perspective` on the parent would make every child share one vanishing
 * point and the rotation would read as a shear.
 */
export function reveal({ y = 26, rotate = 9, delay = 0, duration = 0.8 } = {}) {
  return {
    initial: { opacity: 0, y, rotateX: rotate },
    whileInView: { opacity: 1, y: 0, rotateX: 0 },
    viewport: { once: true, margin: "-70px" },
    transition: { duration, delay, ease: EASE },
    style: { transformPerspective: 1200 },
  };
}
