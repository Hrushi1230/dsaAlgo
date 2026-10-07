const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

const outDir = path.join(__dirname, '../questions/01-arrays-hashing/011-sort-colors/output/inspect');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

// Critical review frames per 01-intro-roadmap_FRAME_QA_CHECKLIST.md:
// F0: Exact Q10 final roadmap provenance (10/227, Q010 complete, Q011 UP NEXT)
// F150: DSA PATTERN ROADMAP underline drawn
// F240: 227 PROBLEMS tag pop
// F340: 19 Course Patterns shimmer sweep
// F420: Serious interview preparation wide view
// F490: Fundamentals 001 focus
// F540: FAANG journey tracer along progress rail
// F620: Right now zoom to Pattern 01
// F680: Arrays & Hashing dual pivot highlight
// F760: Question 10 row spotlight
// F820: Longest Consecutive Sequence title
// F880: Q010 checkmark redraw confirm (10/227 immutable)
// F980: Row 011 centered anticipation hold (STILL UP NEXT)
// F1040: CANONICAL ACTIVATION (UP NEXT -> NOW ACTIVE, solid disc, pivot gold)
// F1070: Sort Colors title hero reveal + underline
// F1120: LC 75 metadata outline box
// F1170: Medium badge warm amber sheen
// F1222: Canonical handoff settled for Scene 02
const frames = [0, 150, 240, 340, 420, 490, 540, 620, 680, 760, 820, 880, 980, 1040, 1070, 1120, 1170, 1222];
const comp = '011-Scene01-Intro';
const remotionDir = path.join(__dirname, '../remotion-project');

console.log(`Rendering ${frames.length} verification stills for ${comp}...`);
for (const f of frames) {
  const outFile = path.join(outDir, `still-011-s01-f${f}.png`);
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
console.log('All Scene 01 verification stills rendered successfully!');
