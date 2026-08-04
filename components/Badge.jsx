"use client";

const ICONS = {
  check: "M20 6 9 17l-5-5",
  rise: "M4 17 12 9l4 4 5-5M16 8h5v5",
  star: "m12 3 2.7 5.5 6.1.9-4.4 4.3 1 6.1-5.4-2.9-5.4 2.9 1-6.1L3.2 9.4l6.1-.9z",
  cap: "M3 9.5 12 5l9 4.5-9 4.5zM7 12v4.2c0 1 2.2 2.3 5 2.3s5-1.3 5-2.3V12",
};

/**
 * Verified-style credential pill. Warm-tinted rather than a plain hairline
 * chip, so these read as awards rather than as tags.
 */
export default function Badge({ label, icon = "check", className = "" }) {
  return (
    <li
      className={`border-amber/25 bg-amber/8 text-bone hover:border-amber/50 hover:bg-amber/12 flex items-center gap-2.5 rounded-full border py-2 pr-4 pl-3 text-xs transition-colors duration-400 ${className}`}
    >
      <svg
        viewBox="0 0 24 24"
        className="text-amber h-3.5 w-3.5 shrink-0"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        <path d={ICONS[icon] ?? ICONS.check} />
      </svg>
      {label}
    </li>
  );
}
