import { profile } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="hairline relative border-t">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-10 text-xs text-stone sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>

        <div className="flex items-center gap-6">
          <a
            href="#home"
            className="u-link transition-colors duration-300 hover:text-sand"
          >
            Back to top
          </a>
          <p>Next.js · Three.js · Tailwind</p>
        </div>
      </div>
    </footer>
  );
}
