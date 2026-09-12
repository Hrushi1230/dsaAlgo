const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

const outDir = path.join(__dirname, '../questions/01-arrays-hashing/008-product-of-array-except-self/output');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

// 20 key QA verification frames from plan Section 31
const frames = [
  50,   // Intro: METHOD 03 SPACE OPTIMIZED title emphasis
  145,  // Line 2: n = len(nums), nums highlighted in live rail
  235,  // Line 3: answer = [1] * n, live answer initialized to [1]
  307,  // Line 4: prefix = 1, live prefix scalar chip appears
  377,  // Line 5: for i in range(n): forward direction preview
  505,  // Line 6: answer[i] = prefix, answer[0] = 1 in gold
  605,  // Line 7: prefix *= nums[i], micro-execution active
  685,  // End Pass 1: PASS 1 ✓ badge, all prefix products in gold
  766,  // Line 8: suffix = 1, live suffix scalar chip appears
  832,  // Line 9: for i in range(n-1, -1, -1): backward preview
  962,  // Line 10: answer[i] *= suffix, cell 7 turns mint
  1094, // Line 11: suffix *= nums[i], micro-execution active
  1159, // Backward sweep: keep moving left, cells morphing
  1224, // End Pass 2: PASS 2 ✓ badge, all cells mint
  1283, // FINAL ANSWER ready & elevated
  1354, // Line 12: return answer, full code settled
  1421, // Summary: 2 PASSES ribbon
  1466, // Summary: O(n) TIME badge
  1543, // Summary: O(1) EXTRA SPACE badge (output excluded)
  1696  // Outro: NEXT: EDGE CASES teaser cards (One Zero, Two Zeros)
];

const comp = '008-Scene11-CodeOptimal';
const remotionDir = path.join(__dirname, '../remotion-project');

console.log(`Rendering ${frames.length} stills for ${comp}...`);
for (const f of frames) {
  const outFile = path.join(outDir, `still-008-s11-f${f}.png`);
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
console.log('Done rendering Scene 11 stills!');
