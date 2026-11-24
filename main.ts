import { mkdirSync, writeFileSync } from "node:fs";

const LINE = "My agent spent the whole morning organizing my files into neat folders, then asked me where everything went.";
// The dumbest thing: it did the work, then lost the work.

const outDir = process.env.OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });

if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`line must be 1-200 characters, got ${LINE.length}`);
}

writeFileSync(`${outDir}/entry.txt`, LINE, "utf8");
