import { execSync } from "child_process";
import fs from "fs";
import path from "path";

const frames = [180, 290, 600, 780, 980, 1300, 1620, 1890, 2200, 2500, 2680, 2950, 3200];
const outDir = path.resolve("remotion-project/out");

if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

console.log(`Rendering ${frames.length} review stills for 012-Scene06-OptimalIdea...`);

for (const f of frames) {
  const outFile = path.join(outDir, `s06_f${f}.png`);
  console.log(`Rendering frame ${f} -> ${outFile}`);
  execSync(
    `npx remotion still 012-Scene06-OptimalIdea "${outFile}" --frame=${f}`,
    { cwd: "remotion-project", stdio: "inherit" }
  );
}

console.log("All Scene 06 stills rendered successfully!");
