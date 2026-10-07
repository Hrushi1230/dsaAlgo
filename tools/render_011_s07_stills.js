const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

const outDir = path.join(__dirname, '../questions/01-arrays-hashing/011-sort-colors/output/inspect');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

// Critical review frames for Scene 07 per implementation plan:
// F200: Intro & Array initialization
// F850: Step 1 (2 <-> 2 swap)
// F1600: Step 2 (2 <-> 0 swap flight)
// F2250: Step 3 (Self-swap at index 0)
// F3000: Step 5 (2 <-> 1 swap flight)
// F3950: Step 7 (0 <-> 1 swap flight)
// F5200: Step 9 (Golden Rule Climax: 0 discovered at mid)
// F6100: Step 10 (Last element classified)
// F6350: Termination (mid > high, Unknown empty)
// F7100: Final Invariant Recap & Scene 08 Teaser
const frames = [200, 850, 1600, 2250, 3000, 3950, 5200, 6100, 6350, 7100];
const comp = '011-Scene07-DnfTrace';
const remotionDir = path.join(__dirname, '../remotion-project');

console.log(`Rendering ${frames.length} verification stills for ${comp}...`);
for (const f of frames) {
  const outFile = path.join(outDir, `still-011-s07-f${f}.png`);
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
console.log('All Scene 07 verification stills rendered successfully!');
