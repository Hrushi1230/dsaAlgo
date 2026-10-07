const { execSync } = require("child_process");

const frames = [
  50, 180, 300, 450, 580, 730, 880, 1020, 1180, 1350, 1480, 1620,
  1850, 1980, 2350, 2640, 2780, 3120, 3480, 3800, 4080, 4350, 4800, 5080
];

for (const f of frames) {
  const outPath = `../questions/01-arrays-hashing/015-spiral-matrix/output/inspect/still-015-s03-f${f}.png`;
  console.log(`Rendering Scene 03 frame ${f}...`);
  execSync(`npx remotion still build 015-Scene03-Method1Trace "${outPath}" --frame=${f} --gl=angle --quiet`, {
    stdio: "inherit",
    cwd: __dirname,
  });
}

console.log("All Scene 03 stills rendered successfully!");
