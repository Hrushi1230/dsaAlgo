const { execSync } = require("child_process");
const path = require("path");

const frames = [
  { f: 50, name: "s09_f50.png" },
  { f: 150, name: "s09_f150.png" },
  { f: 250, name: "s09_f250.png" },
  { f: 420, name: "s09_f420.png" },
  { f: 600, name: "s09_f600.png" },
  { f: 770, name: "s09_f770.png" },
  { f: 850, name: "s09_f850.png" },
  { f: 970, name: "s09_f970.png" },
  { f: 1070, name: "s09_f1070.png" },
  { f: 1160, name: "s09_f1160.png" },
  { f: 1300, name: "s09_f1300.png" },
  { f: 1450, name: "s09_f1450.png" },
  { f: 1570, name: "s09_f1570.png" },
  { f: 1680, name: "s09_f1680.png" },
  { f: 1800, name: "s09_f1800.png" },
  { f: 2000, name: "s09_f2000.png" },
  { f: 2150, name: "s09_f2150.png" },
  { f: 2300, name: "s09_f2300.png" },
  { f: 2400, name: "s09_f2400.png" },
  { f: 2500, name: "s09_f2500.png" },
  { f: 2630, name: "s09_f2630.png" },
  { f: 2700, name: "s09_f2700.png" },
  { f: 2820, name: "s09_f2820.png" },
  { f: 2890, name: "s09_f2890.png" },
  { f: 3000, name: "s09_f3000.png" },
  { f: 3100, name: "s09_f3100.png" },
  { f: 3170, name: "s09_f3170.png" },
  { f: 3240, name: "s09_f3240.png" },
  { f: 3330, name: "s09_f3330.png" },
  { f: 3500, name: "s09_f3500.png" },
  { f: 3670, name: "s09_f3670.png" },
  { f: 3800, name: "s09_f3800.png" },
  { f: 3950, name: "s09_f3950.png" },
  { f: 4100, name: "s09_f4100.png" },
];

const cwd = path.resolve(__dirname, "../remotion-project");

console.log(`Rendering ${frames.length} milestone stills for Scene 09...`);

for (const { f, name } of frames) {
  const outPath = `out/${name}`;
  const cmd = `npx remotion still 012-Scene09-Complexity ${outPath} --frame=${f}`;
  console.log(`[Frame ${f}] Rendering to ${outPath}...`);
  try {
    execSync(cmd, { cwd, stdio: "inherit" });
  } catch (err) {
    console.error(`Failed at frame ${f}:`, err.message);
    process.exit(1);
  }
}

console.log("All Scene 09 milestone stills rendered successfully!");
