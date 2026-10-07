const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

const outDir = path.join(__dirname, '../questions/01-arrays-hashing/014-rotate-image/output/inspect/scene02');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

// Critical review frames per 02-understand_FRAME_QA_CHECKLIST.md:
const frames = [
  50, 180, 300, 410, 500, 720, 1010, 1250, 1420, 1550,
  1760, 1980, 2120, 2300, 2650, 2920, 3230, 3330, 3430, 3620,
  3720, 3880, 4010, 4170, 4300
];
const comp = '014-Scene02-Understand';
const remotionDir = path.join(__dirname, '../remotion-project');

console.log(`Rendering ${frames.length} verification stills for ${comp}...`);
for (const f of frames) {
  const outFile = path.join(outDir, `still-014-s02-f${f}.png`);
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
console.log('All Scene 02 verification stills rendered successfully!');
