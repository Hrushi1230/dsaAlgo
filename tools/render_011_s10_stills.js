const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

const outDir = path.join(__dirname, '../questions/01-arrays-hashing/011-sort-colors/output/inspect');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

// Critical review frames for Scene 10 per plan:
// F40: Act 1 Intro title card
// F200: Sub-phase 1A Domain chips (0 Red, 1 White, 2 Blue)
// F450: Sub-phase 1A ArrayTrackV2 in-place rewrite + frequency counters
// F580: Sub-phase 1A Counting complexity O(N) time, O(1) space
// F700: Sub-phase 1A 2-pass limitation warning badge
// F800: Sub-phase 1B Approach 2 DNF optimal title + initial array
// F1000: Sub-phase 1B 3 pointers (low, mid, high) on ArrayTrackV2
// F1250: Sub-phase 1B 4 partition brackets below slots (0s, 1s, UNKNOWN, 2s)
// F1750: Sub-phase 1B 3 Rule cards side-by-side with locked mid on Rule 2
// F2000: Sub-phase 1B Unknown origin caution callout
// F2200: Sub-phase 1B DNF champion banner (O(N) time, O(1) space, 1 single pass)
// F2400: Act 2 The Bigger Lesson title
// F2550: Act 2 Invariant heuristic principle banner
// F2800: Act 2 3 Invariant Question Panels (Confirmed?, Unknown?, Boundary guards?)
// F3100: Act 2 Master transferable invariant powers 4 algorithms
// F3280: Act 3 MasterRoadmapV2 initial view with Row 011 active
// F3350: Act 3 MasterRoadmapV2 counter rolls 10 -> 11, Row 011 marked COMPLETED
// F3600: Act 3 MasterRoadmapV2 Row 012 Next Permutation spotlighted as UP NEXT!
const defaultFrames = [
  40, 200, 450, 580, 700, 800, 1000, 1250, 1750, 2000, 2200, 2400, 2550, 2800, 3100, 3280, 3350, 3600
];
const customFrames = process.argv.slice(2).map(Number).filter(n => !isNaN(n));
const frames = customFrames.length > 0 ? customFrames : defaultFrames;
const comp = '011-Scene10-Recap';
const remotionDir = path.join(__dirname, '../remotion-project');

console.log(`Rendering ${frames.length} verification stills for ${comp}...`);
for (const f of frames) {
  const outFile = path.join(outDir, `still-011-s10-f${f}.png`);
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
console.log('All Scene 10 verification stills rendered successfully!');
