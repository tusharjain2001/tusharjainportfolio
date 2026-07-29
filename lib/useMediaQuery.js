"use client";

import { useCallback, useSyncExternalStore } from "react";

/**
 * Reads a media query without pushing it through state in an effect, which
 * would cause a cascading render on every mount. Server snapshot is always
 * false so the markup matches on hydration.
 */
export function useMediaQuery(query) {
  const subscribe = useCallback(
    (onStoreChange) => {
      const mql = window.matchMedia(query);
      mql.addEventListener("change", onStoreChange);
      return () => mql.removeEventListener("change", onStoreChange);
    },
    [query]
  );

  const getSnapshot = useCallback(
    () => window.matchMedia(query).matches,
    [query]
  );

  return useSyncExternalStore(subscribe, getSnapshot, () => false);
}

export const useReducedMotion = () =>
  useMediaQuery("(prefers-reduced-motion: reduce)");
