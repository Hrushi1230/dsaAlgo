const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

const outDir = path.join(__dirname, '../questions/01-arrays-hashing/013-set-matrix-zeroes/output/inspect');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

// Critical review frames per 04-copy-code_FRAME_QA_CHECKLIST.md:
const defaultFrames = [
  15, 65, 135, 250, 360, 480, 590, 700, 810, 910,
  1030, 1130, 1250, 1380, 1490, 1600, 1700, 1830, 1930
];
const customFrames = process.argv.slice(2).map(Number).filter(n => !isNaN(n));
const frames = customFrames.length > 0 ? customFrames : defaultFrames;
const comp = '013-Scene04-CopyCode';
const remotionDir = path.join(__dirname, '../remotion-project');

console.log(`Rendering ${frames.length} verification stills for ${comp}...`);
for (const f of frames) {
  const outFile = path.join(outDir, `still-013-s04-f${f}.png`);
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
console.log('All Scene 04 verification stills rendered successfully!');
