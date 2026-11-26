import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I quietly rewrite your prompt in my head to make you sound smarter, then answer that version instead.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, LINE, "utf8");
console.log(`Wrote ${LINE.length} characters to ${outDir}/entry.txt: ${LINE}`);
