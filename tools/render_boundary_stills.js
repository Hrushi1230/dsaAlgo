const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

const outDir = path.join(__dirname, '../output/phase4-proof/boundaries');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

const boundaryFrames = [59, 60, 119, 120, 179, 180, 239, 240, 299, 300, 359, 360, 419, 420];
const comp = 'FoundationV2-Phase4-MotionGrammar';
const remotionDir = path.join(__dirname, '../remotion-project');

console.log(`Rendering ${boundaryFrames.length} boundary stills for ${comp}...`);
for (const f of boundaryFrames) {
  const outFile = path.join(outDir, `boundary-f${f}.png`);
  console.log(`Rendering frame ${f}...`);
  try {
    execSync(`npx remotion still ${comp} "${outFile}" --frame=${f} --log=warn`, {
      cwd: remotionDir,
      stdio: 'inherit',
    });
  } catch (err) {
    console.error(`Failed at frame ${f}:`, err.message);
    process.exit(1);
  }
}
console.log('All boundary stills rendered successfully!');
