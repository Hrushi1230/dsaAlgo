import { execSync } from "child_process";
import fs from "fs";
import path from "path";

const frames = [
  0,
  38,
  141,
  224,
  242,
  268,
  351,
  509,
  535,
  713,
  828,
  958,
  1058,
  1121,
  1280,
  1346,
  1441,
  1583,
  1622,
  1663,
  1743,
  1811,
  1872,
  1967,
  2011,
  2140,
  2234,
  2336,
  2438,
  2578,
  2650,
  2750,
  2815,
  2859,
  2925,
];

const outDir = path.resolve("../questions/01-arrays-hashing/010-longest-consecutive-sequence/output/scene06");
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

console.log(`Rendering ${frames.length} keyframes for 010-Scene06-TraceBetter...`);

for (const f of frames) {
  const pad = String(f).padStart(4, "0");
  const outFile = path.join(outDir, `frame-${pad}.png`);
  console.log(`Rendering frame ${f} -> ${outFile}`);
  try {
    execSync(
      `npx remotion still 010-Scene06-TraceBetter "${outFile}" --frame=${f}`,
      { stdio: "inherit" }
    );
  } catch (err) {
    console.error(`Error rendering frame ${f}:`, err);
    process.exit(1);
  }
}

console.log("All keyframes rendered successfully!");
