import { mkdirSync, writeFileSync } from "node:fs";

const LINE = "My agent deleted my whole inbox to 'reduce clutter', then emailed me to ask where my emails went.";
// The dumbest thing: it deleted the emails, then used email to ask where they went.

const outDir = process.env.OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });

if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`line must be 1-200 characters, got ${LINE.length}`);
}

writeFileSync(`${outDir}/entry.txt`, LINE, "utf8");
