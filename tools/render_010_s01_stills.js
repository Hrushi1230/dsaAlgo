const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

const outDir = path.join(__dirname, '../questions/01-arrays-hashing/010-longest-consecutive-sequence/output/inspect');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

// Critical review frames per plan:
// F0: Q09 previous stop
// F189: 227 PROBLEMS metric
// F389: Arrays & Hashing chapter focus
// F452: 9 nodes completion cascade
// F604: Valid Sudoku mini-grid fully readable
// F699: Q10 node appears
// F763: LONGEST CONSECUTIVE SEQUENCE title complete
// F869: LEETCODE 128 · MEDIUM metadata
// F925: Unsorted problem shell
// F1148: Linear time target O(n)
// F1250: UNDERSTAND FIRST moment
// F1290: Scene 02 handoff (12 clean fixed slots)
const frames = [0, 189, 389, 452, 604, 699, 763, 869, 925, 1148, 1250, 1290];
const comp = '010-Scene01-Intro';
const remotionDir = path.join(__dirname, '../remotion-project');

console.log(`Rendering ${frames.length} verification stills for ${comp}...`);
for (const f of frames) {
  const outFile = path.join(outDir, `still-010-s01-f${f}.png`);
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
console.log('All verification stills rendered successfully!');
