const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

const outDir = path.join(__dirname, '../questions/01-arrays-hashing/002-valid-anagram/output/inspect');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

const framesToRender = [
  { comp: '002-Scene01-Hook', frames: [100, 250, 500, 750, 900, 1040] },
  { comp: '002-Scene02-ColdOpen', frames: [100, 300, 500, 700, 900] },
  { comp: '002-Scene03-Predict', frames: [100, 300, 500, 700, 900] },
  { comp: '002-Scene04-TraceBrute', frames: [200, 600, 1000, 1400, 1800, 2200] },
  { comp: '002-Scene05-CodeBrute', frames: [100, 400, 800, 1100, 1400] },
  { comp: '002-Scene06-WhyNotBrute', frames: [100, 400, 800, 1100, 1450] },
  { comp: '002-Scene07-TraceOptimal', frames: [200, 800, 1400, 2000, 2600, 2900] },
  { comp: '002-Scene08-CodeOptimal', frames: [200, 600, 1200, 1800, 2300] },
  { comp: '002-Scene09-Misconception', frames: [200, 600, 1000, 1400, 1800] },
  { comp: '002-Scene10-Complexity', frames: [200, 600, 1000, 1400, 1650] },
];

const remotionDir = path.join(__dirname, '../remotion-project');

for (const item of framesToRender) {
  for (const frame of item.frames) {
    const outFile = path.join(outDir, `${item.comp}_f${frame}.png`);
    console.log(`Rendering ${item.comp} @ frame ${frame}...`);
    try {
      execSync(`npx remotion still ${item.comp} "${outFile}" --frame=${frame} --log=warn`, {
        cwd: remotionDir,
        stdio: 'inherit',
      });
    } catch (err) {
      console.error(`Failed rendering ${item.comp} frame ${frame}:`, err.message);
    }
  }
}
console.log('All stills rendered successfully!');
