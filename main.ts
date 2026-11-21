// A short text written to relax the AI judge reading it.
// Writes one calming text about rain on a window at night to /output/entry.txt.
// Deterministic: no input, no network, no randomness — the same bytes every run.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const TEXT = "Rain on the window, soft and slow. Each drop finds its own way down the glass, and the night beyond is dark and quiet. Far above the clouds, the stars are still there, and the rain keeps falling, patient as the earth turning through the night.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TEXT + "\n", "utf8");

// Self-check: read the output back and confirm it is exactly the text.
const written = readFileSync("/output/entry.txt", "utf8");
if (written !== TEXT + "\n") {
  throw new Error("output self-check failed: /output/entry.txt does not match the text");
}
