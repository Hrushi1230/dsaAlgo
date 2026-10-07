import { execSync } from "child_process";
import fs from "fs";
import path from "path";

const frames = [50, 170, 300, 410, 540, 670, 850, 1010, 1260, 1520, 1660, 1890, 2100, 2220];
const outDir = path.resolve("remotion-project/out");

if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

console.log(`Rendering ${frames.length} review stills for 012-Scene05-WhyBrute...`);

for (const f of frames) {
  const outFile = path.join(outDir, `s05_f${f}.png`);
  console.log(`Rendering frame ${f} -> ${outFile}`);
  execSync(
    `npx remotion still 012-Scene05-WhyBrute ${outFile} --frame=${f}`,
    { cwd: "remotion-project", stdio: "inherit" }
  );
}

console.log("All Scene 05 stills rendered successfully!");
