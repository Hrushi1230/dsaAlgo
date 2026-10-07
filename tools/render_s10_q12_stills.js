const { execSync } = require("child_process");
const path = require("path");

const frames = [
  { f: 40, name: "s10_f40.png" },
  { f: 110, name: "s10_f110.png" },
  { f: 190, name: "s10_f190.png" },
  { f: 260, name: "s10_f260.png" },
  { f: 300, name: "s10_f300.png" },
  { f: 345, name: "s10_f345.png" },
  { f: 440, name: "s10_f440.png" },
  { f: 570, name: "s10_f570.png" },
  { f: 710, name: "s10_f710.png" },
  { f: 850, name: "s10_f850.png" },
  { f: 1050, name: "s10_f1050.png" },
  { f: 1250, name: "s10_f1250.png" },
  { f: 1400, name: "s10_f1400.png" },
  { f: 1480, name: "s10_f1480.png" },
  { f: 1560, name: "s10_f1560.png" },
  { f: 1650, name: "s10_f1650.png" },
  { f: 1780, name: "s10_f1780.png" },
  { f: 1900, name: "s10_f1900.png" },
  { f: 2020, name: "s10_f2020.png" },
  { f: 2100, name: "s10_f2100.png" },
  { f: 2220, name: "s10_f2220.png" },
  { f: 2310, name: "s10_f2310.png" },
  { f: 2390, name: "s10_f2390.png" },
  { f: 2480, name: "s10_f2480.png" },
  { f: 2580, name: "s10_f2580.png" },
  { f: 2660, name: "s10_f2660.png" },
  { f: 2725, name: "s10_f2725.png" },
];

const cwd = path.resolve(__dirname, "../remotion-project");

console.log(`Rendering ${frames.length} milestone stills for Scene 10...`);

for (const { f, name } of frames) {
  const outPath = `out/${name}`;
  const cmd = `npx remotion still 012-Scene10-Recap ${outPath} --frame=${f}`;
  console.log(`[Frame ${f}] Rendering to ${outPath}...`);
  try {
    execSync(cmd, { cwd, stdio: "inherit" });
  } catch (err) {
    console.error(`Failed at frame ${f}:`, err.message);
    process.exit(1);
  }
}

console.log("All Scene 10 milestone stills rendered successfully!");
