const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

const outDir = path.join(__dirname, '../questions/01-arrays-hashing/008-product-of-array-except-self/output');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

// 25 key QA verification frames across World A, Reverse Morph, and World B
const frames = [
  35,   // Act 01: Mental model carryover, closing underline
  85,   // Act 02: Selector sweep across indices
  130,  // Act 02: Two empty sockets [ ? ] -> [i] <- [ ? ]
  180,  // Act 03: Left side highlight
  205,  // Act 03: LEFT PRODUCT in gold (prefix 24)
  245,  // Act 04: Right side highlight
  275,  // Act 04: RIGHT PRODUCT in cyan (suffix 12)
  330,  // Act 05: Inward multiply LEFT x RIGHT
  360,  // Act 05: Result drops into ANSWER[i] = 288
  440,  // Act 06: Method 01 Brute Force chains
  485,  // Act 06: REPEATED WORK label with red strike
  550,  // Act 07: Method 02 Prefix & Suffix rows drawn
  605,  // Act 07: SAVED PRODUCTS badge pulsing
  690,  // Act 08: Prefix values StoreFlight into answer row
  780,  // Act 08: Suffix row collapsed into single running scalar
  880,  // Act 09: RoughBox around PATTERN TO REMEMBER
  945,  // Act 10: Left x Right -> ANSWER[i]
  1030, // Act 11: Hero title PRODUCT OF ARRAY EXCEPT SELF
  1060, // Act 12: COMPLETE ✓ badge in seafoam mint
  1105, // Reverse Morph: Title docking into Row 008, website UI resolving
  1135, // World B: Persistent roadmap UI settled, Row 008 in gold, 7/227
  1165, // Act 14: Row 008 gets ✓, top bar CountUp 8/227 COMPLETE
  1210, // Act 15: Roadmap scrolls 58px down to Row 009 focus
  1255, // Act 16: Row 009 VALID SUDOKU activates in gold (● 009)
  1285  // Act 17: Underline on VALID SUDOKU, next arrow, final settled frame
];

const comp = '008-Scene13-RecapRoadmapOutro';
const remotionDir = path.join(__dirname, '../remotion-project');

console.log(`Rendering ${frames.length} stills for ${comp}...`);
for (const f of frames) {
  const outFile = path.join(outDir, `still-008-s13-f${f}.png`);
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
console.log('Done rendering Scene 13 stills!');
