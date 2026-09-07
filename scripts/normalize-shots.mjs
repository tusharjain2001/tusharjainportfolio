/**
 * Normalises work screenshots to the single frame the project grid expects.
 *
 * The cards render at aspect-2/1. Browser captures come in around 1920x900
 * (~2.10), so dropping a raw one in means `object-cover` trims the sides and
 * takes the first word of the client's headline with it. This re-crops every
 * new capture to exactly 1600x800 so nothing is lost horizontally.
 *
 *   npm run shots
 *
 * Idempotent: anything already 1600x800 is skipped, so it's safe to re-run
 * after adding a single screenshot.
 *
 * sharp comes in with Next (it powers next/image optimisation) rather than
 * being a direct dependency — if that ever stops being true, add it with
 * `npm i -D sharp`.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const WORK = path.join(
  path.dirname(fileURLToPath(import.meta.url)),
  "..",
  "public",
  "work"
);

const WIDTH = 1600;
const HEIGHT = 800;

let sharp;
try {
  sharp = (await import("sharp")).default;
} catch {
  console.error("sharp not found — run `npm i -D sharp` and try again.");
  process.exit(1);
}

const files = fs.readdirSync(WORK).filter((f) => /\.(png|jpe?g)$/i.test(f));
let changed = 0;

for (const file of files.sort()) {
  const src = path.join(WORK, file);
  const { width, height } = await sharp(src).metadata();

  if (width === WIDTH && height === HEIGHT) {
    console.log(`  skip  ${file.padEnd(24)} already ${WIDTH}x${HEIGHT}`);
    continue;
  }

  const before = fs.statSync(src).size;
  // anchored to the top: the hero is the part worth keeping
  const out = await sharp(src)
    .resize(WIDTH, HEIGHT, { fit: "cover", position: "top" })
    .png({ compressionLevel: 9, palette: true, quality: 90 })
    .toBuffer();
  fs.writeFileSync(src, out);
  changed += 1;

  console.log(
    `  crop  ${file.padEnd(24)} ${`${width}x${height}`.padEnd(11)} ` +
      `${`${(before / 1024).toFixed(0)}kb`.padStart(7)} -> ` +
      `${`${(out.length / 1024).toFixed(0)}kb`.padStart(7)}`
  );
}

console.log(
  changed
    ? `\n${changed} screenshot${changed > 1 ? "s" : ""} normalised.`
    : "\nNothing to do — every screenshot is already the right size."
);
