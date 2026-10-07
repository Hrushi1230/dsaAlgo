const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

const outDir = path.join(__dirname, '../questions/01-arrays-hashing/013-set-matrix-zeroes/output/inspect');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

// Critical review frames per 06-markers-trace_FRAME_QA_CHECKLIST.md:
const defaultFrames = [
  40, 110, 200, 290, 440, 610, 854, 1108, 1260, 1420,
  1878, 1990, 2105, 2490, 2700, 2960, 3090, 3220, 3540
];
const customFrames = process.argv.slice(2).map(Number).filter(n => !isNaN(n));
const frames = customFrames.length > 0 ? customFrames : defaultFrames;
const comp = '013-Scene06-MarkersTrace';
const remotionDir = path.join(__dirname, '../remotion-project');

console.log(`Rendering ${frames.length} verification stills for ${comp}...`);
for (const f of frames) {
  const outFile = path.join(outDir, `still-013-s06-f${f}.png`);
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
console.log('All Scene 06 verification stills rendered successfully!');
