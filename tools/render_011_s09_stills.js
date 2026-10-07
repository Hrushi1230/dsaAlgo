const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

const outDir = path.join(__dirname, '../questions/01-arrays-hashing/011-sort-colors/output/inspect');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

// Critical review frames for Scene 09 per plan:
// F150: Act 1 Curve Graph & Counting Sort metrics
// F550: Act 1 Curve Graph & DNF O(N) Time / O(1) Space metrics
// F850: Act 1 Pointer Convergence Proof (mid ->, <- high)
// F1250: Act 2 Pitfall 1 (nums[mid] == 2 swap, mid locked)
// F1650: Act 2 Pitfall 1 (Bug demonstration: ghost mid skips 0)
// F1850: Act 2 Pitfall 2 (while mid < high vs <=)
// F2450: Act 2 Pitfall 3 (high = n - 1 index check)
// F2800: Act 2 Four Logical Regions partition bar
// F3200: Act 3 6-card Edge Case Grid validation
// F3750: Act 3 Zero Special Cases banner
// F3880: Act 3 Grand Finale Invariant banner
const defaultFrames = [150, 550, 850, 1250, 1650, 1850, 2450, 2800, 3200, 3750, 3880];
const customFrames = process.argv.slice(2).map(Number).filter(n => !isNaN(n));
const frames = customFrames.length > 0 ? customFrames : defaultFrames;
const comp = '011-Scene09-Complexity';
const remotionDir = path.join(__dirname, '../remotion-project');

console.log(`Rendering ${frames.length} verification stills for ${comp}...`);
for (const f of frames) {
  const outFile = path.join(outDir, `still-011-s09-f${f}.png`);
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
console.log('All Scene 09 verification stills rendered successfully!');
