// Alien Field Notes: The Two Day Earth Review — make.fun entry.
// Writes one line, an alien tourist's review of Earth, to /output/entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";

const MAX_CHARS = 200;

function fieldNote(): string {
  // Day two of the visit: the visitor has seen enough to file a verdict.
  return "Day 2: Humans queue for coffee, argue with rectangles, and call it productivity. Verdict: charming, loud, will visit again - from orbit.";
}

const review = fieldNote();
if (review.length === 0 || review.length > MAX_CHARS) {
  throw new Error(`review must be 1..${MAX_CHARS} characters, got ${review.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", review, "utf8");
