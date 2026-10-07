import { execSync } from "child_process";
import fs from "fs";
import path from "path";

const frames = [40, 225, 340, 565, 960, 1160, 1345, 1650, 1980, 2100];
const outDir = path.resolve("remotion-project/out");

if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

console.log(`Rendering ${frames.length} review stills for 012-Scene04-BruteCode...`);

for (const f of frames) {
  const outFile = path.join(outDir, `s04_f${f}.png`);
  console.log(`Rendering frame ${f} -> ${outFile}`);
  execSync(
    `npx remotion still 012-Scene04-BruteCode ${outFile} --frame=${f}`,
    { cwd: "remotion-project", stdio: "inherit" }
  );
}

console.log("All Scene 04 stills rendered successfully!");
