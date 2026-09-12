const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

const outDir = path.join(__dirname, '../questions/01-arrays-hashing/009-valid-sudoku/output');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

const remotionDir = path.join(__dirname, '../remotion-project');

const scenes = [
  {
    comp: '009-Scene08-Method2Trace',
    prefix: 's08',
    frames: [100, 500, 1350, 2450, 3150, 3450, 3700]
  },
  {
    comp: '009-Scene09-Method2Code',
    prefix: 's09',
    frames: [100, 450, 950, 1450, 1850, 2050]
  },
  {
    comp: '009-Scene10-Method3Discovery',
    prefix: 's10',
    frames: [100, 400, 750, 1150, 1600, 1750, 2050, 2200]
  },
  {
    comp: '009-Scene11-Method3Trace',
    prefix: 's11',
    frames: [100, 300, 600, 950, 1150, 1350, 1750, 1950, 2100]
  },
  {
    comp: '009-Scene12-Method3CodeComplexity',
    prefix: 's12',
    frames: [200, 700, 1100, 1550, 1850, 2400, 2850]
  },
  {
    comp: '009-Scene13-RecapRoadmap',
    prefix: 's13',
    frames: [100, 550, 1000, 1250, 1500, 1750]
  }
];

console.log('=== STARTING BATCH RENDER FOR SCENES 08-13 ===');

for (const scene of scenes) {
  console.log(`\n--- Rendering stills for ${scene.comp} (${scene.frames.length} frames) ---`);
  for (const f of scene.frames) {
    const outFile = path.join(outDir, `${scene.prefix}_f${f}.png`);
    console.log(`Rendering ${scene.prefix} frame ${f}...`);
    try {
      execSync(`npx remotion still ${scene.comp} "${outFile}" --frame=${f} --log=warn`, {
        cwd: remotionDir,
        stdio: 'inherit',
      });
    } catch (err) {
      console.error(`Failed at ${scene.prefix} frame ${f}:`, err.message);
    }
  }
}

console.log('\n=== ALL STILLS FOR SCENES 08-13 RENDERED SUCCESSFULLY ===');
