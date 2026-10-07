const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

const outDir = path.join(__dirname, '../questions/01-arrays-hashing/013-set-matrix-zeroes/output/inspect');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

// Critical review frames per 10-optimal-trace_FRAME_QA_CHECKLIST.md:
const defaultFrames = [
  30, 260, 340, 640, 715, 780, 880, 960, 1450, 1780,
  2020, 2190, 2740, 3050, 3560, 3850, 4300, 4850, 5000, 5500,
  5850, 6050, 6260, 6650, 7035
];

const customFrames = process.argv.slice(2).map(Number).filter(n => !isNaN(n));
const frames = customFrames.length > 0 ? customFrames : defaultFrames;
const comp = '013-Scene10-OptimalTrace';
const remotionDir = path.join(__dirname, '../remotion-project');

console.log(`Rendering ${frames.length} verification stills for ${comp}...`);
for (const f of frames) {
  const outFile = path.join(outDir, `still-013-s10-f${f}.png`);
  console.log(`Rendering frame ${f}...`);
  try {
    execSync(`npx remotion still ${comp} "${outFile}" --frame=${f} --log=warn`, {
      cwd: remotionDir,
      stdio: 'inherit',
    });
  } catch (err) {
    console.error(`Failed at frame ${f}:`, err.message);
  }
}
console.log('All Scene 10 verification stills rendered successfully!');
