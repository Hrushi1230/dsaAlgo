const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

const outDir = path.join(__dirname, '../questions/01-arrays-hashing/008-product-of-array-except-self/output');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

// 16 key QA verification frames across Pass 1, Pass 2, and Outro
const frames = [
  373,  // Pass 1: prefix = 1 initialized
  471,  // Pass 1: ans[0] = 1 stored
  730,  // Pass 1: ans[1] = 1, prefix becomes 2
  1286, // Pass 1: ans[3] = 6, prefix becomes 24
  1900, // Pass 1: ans[5] = 120, prefix becomes -120
  2542, // Pass 1: ans[7] = 240
  2938, // Pass 1 COMPLETE ✓ (all 8 prefix values stored in gold)
  3019, // Pass 2: Right to left traversal arrow
  3120, // Pass 2: suffix = 1 initialized
  3374, // Pass 2: ans[7] = 240 * 1 = 240 (turns mint)
  3838, // Pass 2: ans[6] = -120 * 6 = -720 (turns mint)
  4451, // Pass 2: ans[5] = 120 * -12 = -1440 (turns mint)
  5213, // Pass 2: ans[3] = 6 * 60 = 360 (turns mint)
  6074, // Pass 2: ans[1] = 1 * 720 = 720 (turns mint)
  6595, // Pass 2: ans[0] = 1 * 1440 = 1440 (turns mint)
  6800  // Pass 2 COMPLETE ✓, Same answer, O(1) space banner
];

const comp = '008-Scene10-TraceOptimal';
const remotionDir = path.join(__dirname, '../remotion-project');

console.log(`Rendering ${frames.length} stills for ${comp}...`);
for (const f of frames) {
  const outFile = path.join(outDir, `still-008-s10-f${f}.png`);
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
console.log('Done rendering Scene 10 stills!');
