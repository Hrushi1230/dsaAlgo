const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

const outDir = path.join(__dirname, '../questions/01-arrays-hashing/014-rotate-image/output/inspect');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

// Critical review frames per 01-intro-roadmap_FRAME_QA_CHECKLIST.md:
const frames = [0, 140, 245, 295, 335, 450, 550, 590, 640, 690, 738, 780, 860];
const comp = '014-Scene01-Intro';
const remotionDir = path.join(__dirname, '../remotion-project');

console.log(`Rendering ${frames.length} verification stills for ${comp}...`);
for (const f of frames) {
  const outFile = path.join(outDir, `still-014-s01-f${f}.png`);
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
console.log('All Scene 01 verification stills rendered successfully!');
