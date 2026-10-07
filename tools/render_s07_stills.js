import { execSync } from "child_process";

const frames = [
  20,
  270,
  660,
  760,
  1030,
  1120,
  1300,
  1590,
  1715,
  1975,
  2100,
  2540,
  2645,
  2905,
  3140,
  3300,
];

console.log(`Rendering ${frames.length} stills for Scene 07...`);

for (const f of frames) {
  const out = `out/s07_f${f}.png`;
  const cmd = `npx remotion still 012-Scene07-OptimalTrace ${out} --frame=${f}`;
  console.log(`Rendering frame ${f} -> ${out}...`);
  execSync(cmd, { cwd: "remotion-project", stdio: "inherit" });
}

console.log("All Scene 07 stills rendered successfully!");
