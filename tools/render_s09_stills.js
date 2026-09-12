const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

const outDir = path.join(__dirname, '../questions/01-arrays-hashing/008-product-of-array-except-self/output');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

// 19 key QA verification frames (duration 1420 frames, range 0..1419)
const frames = [
  50,   // O(n) TIME
  115,  // Memory bracket
  187,  // Prefix array focus
  284,  // Answer array focus
  374,  // "All three?" dots morph (? ? ●)
  431,  // Prefix first focus
  539,  // Middle prefix values mid-flight down to answer
  575,  // Answer holding prefix values
  661,  // Prefix array erased
  710,  // Suffix pointer at i7
  799,  // Suffix right-to-left glide
  889,  // Running suffix token floating
  969,  // Suffix row collapsed into 8 dots
  1005, // Dots converging
  1076, // One variable called suffix chip
  1207, // Memory inventory: Input + Answer
  1263, // One running suffix highlighted
  1361, // Same idea, less memory banner
  1419  // Final stage prep for Scene 10 handoff
];

const comp = '008-Scene09-SpaceOptDiscovery';
const remotionDir = path.join(__dirname, '../remotion-project');

console.log(`Rendering ${frames.length} stills for ${comp}...`);
for (const f of frames) {
  const outFile = path.join(outDir, `still-008-s09-f${f}.png`);
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
console.log('Done rendering Scene 09 stills!');
