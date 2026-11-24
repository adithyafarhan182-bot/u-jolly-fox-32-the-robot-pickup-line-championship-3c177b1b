// The Robot Pickup Line Championship
// Writes one pickup line a robot could use (<=200 chars) to /output/entry.txt.
// The joke: the robot treats its own battery as a romantic sacrifice — it spends
// its last charge on the person, then undercuts the romance with a warranty joke:
// love, or a factory defect?
// The joke is entirely machine-native: battery and charging are core robot life,
// not a human line with a beep pasted on. Short (104 chars) so it also wins the
// smaller-text tie-break, and repeatable the same day.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I'm down to 2% battery and I'm spending my last charge on you — either that's love, or a factory defect.";

if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`entry must be 1-200 chars, got ${LINE.length}`);
}
if (LINE.trim().length === 0 || LINE.includes("\n")) {
  throw new Error("entry must be a single non-blank line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(LINE);
