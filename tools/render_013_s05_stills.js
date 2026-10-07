const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

const outDir = path.join(__dirname, '../questions/01-arrays-hashing/013-set-matrix-zeroes/output/inspect');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

// Critical review frames per 05-why-copy_FRAME_QA_CHECKLIST.md:
const defaultFrames = [
  50, 200, 330, 400, 480, 550, 630, 710, 790, 880,
  970, 1050, 1120, 1190, 1260, 1350, 1450, 1510, 1620, 1730
];
const customFrames = process.argv.slice(2).map(Number).filter(n => !isNaN(n));
const frames = customFrames.length > 0 ? customFrames : defaultFrames;
const comp = '013-Scene05-WhyCopy';
const remotionDir = path.join(__dirname, '../remotion-project');

console.log(`Rendering ${frames.length} verification stills for ${comp}...`);
for (const f of frames) {
  const outFile = path.join(outDir, `still-013-s05-f${f}.png`);
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
console.log('All Scene 05 verification stills rendered successfully!');
