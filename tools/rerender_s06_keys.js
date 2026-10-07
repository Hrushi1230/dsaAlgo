import { execSync } from "child_process";
import fs from "fs";
import path from "path";

const frames = [180, 980, 1620, 2500, 2950, 3200];
const outDir = path.resolve("remotion-project/out");

console.log(`Re-rendering ${frames.length} key review stills for 012-Scene06-OptimalIdea...`);

for (const f of frames) {
  const outFile = path.join(outDir, `s06_f${f}.png`);
  console.log(`Rendering frame ${f} -> ${outFile}`);
  execSync(
    `npx remotion still 012-Scene06-OptimalIdea "${outFile}" --frame=${f}`,
    { cwd: "remotion-project", stdio: "inherit" }
  );
}

console.log("Key review stills rendered!");
