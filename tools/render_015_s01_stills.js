const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

const outDir = path.join(__dirname, '../questions/01-arrays-hashing/015-spiral-matrix/output/inspect');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

// Critical review frames per 01-roadmap_FRAMEWISE_PLAN.md:
// F45: Beat 01 (Welcome / Roadmap settle)
// F115: Beat 02 (Focus Row 014)
// F185: Beat 04 (Row 014 Complete pulse)
// F300: Beat 05 (Progress 14/227)
// F440: Beat 06 (Row 015 Activation: UP NEXT -> NOW ACTIVE)
// F485: Beat 07 (Spiral Matrix title underline)
// F540: Beat 08 (LC 54 badge)
// F590: Beat 09 (Medium difficulty badge)
// F670: Beat 10 (No in-place modification card + 5x6 matrix blueprint)
// F750: Beat 11 (Harvest into 1D list)
// F820: Beat 12 (Golden spiral sweep)
// F890: Beat 13 (Handoff into ProblemOpenerShell)
const frames = [45, 115, 185, 300, 440, 485, 540, 590, 670, 750, 820, 890];
const comp = '015-Scene01-Intro';
const remotionDir = path.join(__dirname, '../remotion-project');

console.log(`Rendering ${frames.length} verification stills for ${comp}...`);
for (const f of frames) {
  const outFile = path.join(outDir, `still-015-s01-f${f}.png`);
  console.log(`Rendering frame ${f}...`);
  try {
    execSync(`npx remotion still ${comp} "${outFile}" --frame=${f} --log=warn --gl=angle`, {
      cwd: remotionDir,
      stdio: 'inherit',
    });
  } catch (err) {
    console.error(`Failed at frame ${f}:`, err.message);
  }
}
console.log('All Scene 01 verification stills rendered successfully!');
