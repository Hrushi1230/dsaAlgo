const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

const frames = [
  40, 150, 230, 380, 460, 600, 690, 750, 810, 870,
  940, 990, 1060, 1150, 1210, 1260, 1330, 1420, 1560, 1700,
  1830, 1900, 2020, 2160, 2250, 2330, 2390, 2470, 2540, 2610,
  2700, 2780, 2820, 2890, 2950, 3010, 3100, 3200
];

const outDir = path.resolve('questions/01-arrays-hashing/013-set-matrix-zeroes/output/inspect');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

console.log(`Rendering ${frames.length} critical review stills for Scene 11...`);

for (const f of frames) {
  const outFile = path.join(outDir, `still-013-s11-f${f}.png`);
  console.log(`Rendering frame ${f} -> still-013-s11-f${f}.png`);
  const cmd = `npx remotion still 013-Scene11-OptimalCode "${outFile}" --frame=${f} --gl=angle`;
  try {
    execSync(cmd, { cwd: path.resolve('remotion-project'), stdio: 'inherit' });
  } catch (err) {
    console.error(`Failed rendering frame ${f}:`, err.message);
  }
}

console.log('Rendering complete!');
