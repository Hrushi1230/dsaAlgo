import { execSync } from "child_process";
import fs from "fs";
import path from "path";

const frames = [
  0,
  85,
  182,
  263,
  330,
  402,
  507,
  656,
  699,
  739,
  805,
  846,
  1057,
  1150,
  1242,
  1300,
  1388,
  1480,
  1560,
  1615,
  1653,
  1715,
  1754,
];

const outDir = path.resolve("../questions/01-arrays-hashing/010-longest-consecutive-sequence/output/scene07");
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

console.log(`Rendering ${frames.length} keyframes for 010-Scene07-CodeBetter...`);

for (const f of frames) {
  const pad = String(f).padStart(4, "0");
  const outFile = path.join(outDir, `frame-${pad}.png`);
  console.log(`Rendering frame ${f} -> ${outFile}`);
  try {
    execSync(
      `npx remotion still 010-Scene07-CodeBetter "${outFile}" --frame=${f}`,
      { stdio: "inherit" }
    );
  } catch (err) {
    console.error(`Error rendering frame ${f}:`, err);
    process.exit(1);
  }
}

console.log("All keyframes rendered successfully!");
