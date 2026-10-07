const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

const outDir = path.join(__dirname, '../questions/01-arrays-hashing/011-sort-colors/output/inspect');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

// Critical review frames for Scene 02 per checklist:
// F0: Opening continuity (clean board, compact Q11 header, NO premature array)
// F74: "We are given an array" - slot reveal starts
// F100: Empty array slots drawing
// F330: Domain shelf {0, 1, 2} revealed
// F580: Generic order zones [0s first | 1s next | 2s last]
// F650: Master input mode active with index row
// F790: Master values partially written (up to idx 4)
// F905: Master input all 10 values settled
// F1000: Target values writing in
// F1160: Target rail fully settled [0,0,0,1,1,1,2,2,2,2]
// F1300: Condition 1 (In-place same array)
// F1440: Condition 2 (sort(nums) struck out)
// F1580: Follow-up 1 pass sweep
// F1660: Follow-up O(1) space
// F1770: Unified challenge
// F2140: Domain clue observation
// F2320: Scene 03 handoff
const frames = [0, 74, 100, 330, 580, 650, 790, 905, 1000, 1160, 1300, 1440, 1580, 1660, 1770, 2140, 2320];
const comp = '011-Scene02-Understand';
const remotionDir = path.join(__dirname, '../remotion-project');

console.log(`Rendering ${frames.length} verification stills for ${comp}...`);
for (const f of frames) {
  const outFile = path.join(outDir, `still-011-s02-f${f}.png`);
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
