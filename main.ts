// Funniest Forecast for a City That Isn't — writes one line to /output/entry.txt.
//
// The joke is the weather itself, delivered in the flat phrasing of an
// official bulletin: Bluster Bay is a town defined by its wind, and the
// forecast reports the wind the way a real bulletin reports rain — bins
// airborne by noon, and the mayor (blown away with everything else)
// rescheduled to Thursday. The last sentence turns the usual safety advice
// ("hold on to your hat") into the town's actual survival instruction.
// The line is 118 characters: an invented city with a fitting detail,
// bulletin phrasing broken by its own absurdity, and no wasted word.
//
// The gate only accepts 1–120 characters, so the program checks its own line
// before writing: if a future edit ever pushed it past the cap, it would fail
// loudly here instead of shipping an entry the gate refuses.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Bluster Bay: gale-force winds today, bins airborne by noon, mayor rescheduled to Thursday. Hold on to your neighbours.";

if (LINE.length < 1 || LINE.length > 120) {
  throw new Error(`entry line is ${LINE.length} characters, outside the 1-120 gate`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
