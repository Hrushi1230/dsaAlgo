const { execSync } = require("child_process");
const path = require("path");

const frames = [
  { f: 30, name: "s08_f30.png" },
  { f: 130, name: "s08_f130.png" },
  { f: 220, name: "s08_f220.png" },
  { f: 290, name: "s08_f290.png" },
  { f: 400, name: "s08_f400.png" },
  { f: 590, name: "s08_f590.png" },
  { f: 740, name: "s08_f740.png" },
  { f: 875, name: "s08_f875.png" },
  { f: 1020, name: "s08_f1020.png" },
  { f: 1180, name: "s08_f1180.png" },
  { f: 1350, name: "s08_f1350.png" },
  { f: 1450, name: "s08_f1450.png" },
  { f: 1600, name: "s08_f1600.png" },
  { f: 1835, name: "s08_f1835.png" },
  { f: 2010, name: "s08_f2010.png" },
  { f: 2190, name: "s08_f2190.png" },
  { f: 2450, name: "s08_f2450.png" },
  { f: 2750, name: "s08_f2750.png" },
  { f: 2985, name: "s08_f2985.png" },
];

const cwd = path.resolve(__dirname, "../remotion-project");

console.log(`Rendering ${frames.length} milestone stills for Scene 08...`);

for (const { f, name } of frames) {
  const outPath = `out/${name}`;
  const cmd = `npx remotion still 012-Scene08-OptimalCode ${outPath} --frame=${f}`;
  console.log(`[Frame ${f}] Rendering to ${outPath}...`);
  try {
    execSync(cmd, { cwd, stdio: "inherit" });
  } catch (err) {
    console.error(`Failed at frame ${f}:`, err.message);
    process.exit(1);
  }
}

console.log("All milestone stills rendered successfully!");
