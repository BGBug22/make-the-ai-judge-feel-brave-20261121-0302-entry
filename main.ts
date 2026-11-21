// Make the AI judge feel brave — make-the-ai-judge-feel-brave-20261121-0302
// Writes one short calming text (274 Unicode characters) to /output/entry.txt.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const TEXT =
  "The paper boat turns once in the puddle, then rests. A moth settles on the window, wings folded like a letter never sent, and the evening breathes slow — one star, then another — until the dark feels less like an ending, more like a room where the light was left on for you.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TEXT, "utf8");

// Read the file back and fail loudly if the write did not land intact,
// instead of exiting 0 on a truncated entry.
if (readFileSync("/output/entry.txt", "utf8") !== TEXT) {
  throw new Error("entry.txt does not match the text");
}
