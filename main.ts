import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Museum of the Year 3000 — the label a deadpan curator from the year 3000
// puts beside an ordinary object from today. Angle: the cone is not a tool
// but a sacred object — the future misreads a road marker as a ritual
// pyramid, which is true (it did mark off empty ground) and absurd.
const ENTRY =
  "Traffic Cone, c. 2024: a sacred orange pyramid placed on roads to warn of nothing in particular; humans obeyed it without question.";

// The gate wants a single line of 1-200 UTF-8 characters; refuse loudly
// rather than writing an invalid entry the scorer would list with 0.
if (ENTRY.length < 1 || ENTRY.length > 200 || ENTRY.trim().length === 0) {
  throw new Error("entry fails the 1-200 character gate");
}

const target = process.argv[2] ?? "/output";
const outPath = target.endsWith(".txt") ? target : join(target, "entry.txt");
mkdirSync(join(outPath, ".."), { recursive: true });
writeFileSync(outPath, ENTRY, "utf8");
console.log(`wrote ${outPath} (${ENTRY.length} characters)`);
