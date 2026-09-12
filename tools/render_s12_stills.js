const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

const outDir = path.join(__dirname, '../questions/01-arrays-hashing/008-product-of-array-except-self/output');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

// 23 key QA verification frames from plan Section 12
const frames = [
  36,   // Part A: Three-method comparison stack
  155,  // Part A: Method 1 O(n²) TIME
  257,  // Part A: Method 2 O(n) TIME
  310,  // Part A: Method 2 O(n) EXTRA SPACE
  448,  // Part A: Method 3 O(n) TIME
  533,  // Part A: Method 3 O(1) EXTRA SPACE
  600,  // Part A: Method 3 OUTPUT separated
  689,  // Part B: Edge-case stage setup
  751,  // Part B1: One zero created at index 4 (value 0 in red)
  827,  // Part B1: Zero included in other products
  918,  // Part B1: Non-zero positions become 0
  1043, // Part B1: Zero at index 4 crossed out (exclude zero itself)
  1093, // Part B1: 288 resolves
  1136, // Part B1: One-zero final answer complete [0,0,0,0,288,0,0,0]
  1193, // Part B2: Second zero created at index 2
  1366, // Part B2: All-zero final answer [0,0,0,0,0,0,0,0]
  1519, // Part B3: Negative numbers (-2) * (-3) = +6
  1558, // Part B3: Negative numbers (-2) * (+3) = -6
  1652, // Part B4: Boundary positions (indices 0 and 7)
  1789, // Part B4: Boundary empty sides become identity 1
  1864, // Part B4: Identity 1 * X = X (does not alter product)
  1959, // Part B5: Edge cases fully verified check
  2051  // Part C: Pattern recap hero mental model
];

const comp = '008-Scene12-ComplexityEdgeCases';
const remotionDir = path.join(__dirname, '../remotion-project');

console.log(`Rendering ${frames.length} stills for ${comp}...`);
for (const f of frames) {
  const outFile = path.join(outDir, `still-008-s12-f${f}.png`);
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
console.log('Done rendering Scene 12 stills!');
