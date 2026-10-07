const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

const baseOutDir = path.join(__dirname, '../output/phase5-proof');
const boundariesDir = path.join(baseOutDir, 'boundaries');
const checkpointsDir = path.join(baseOutDir, 'studyC-checkpoints');
const studiesDir = path.join(baseOutDir, 'studies');

for (const dir of [baseOutDir, boundariesDir, checkpointsDir, studiesDir]) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

const remotionDir = path.join(__dirname, '../remotion-project');
const compMain = 'FoundationV2-Phase5-MorphGrammar';
const compCheckpoints = 'FoundationV2-Phase5-StudyC-Checkpoints';

// =============================================================================
// GEOMETRY VALIDITY CHECK
// =============================================================================
console.log(`================================================================`);
console.log(`PHASE 5 STUDY C GEOMETRY VALIDITY AUDIT`);
console.log(`================================================================`);

const barrier = {
  center: { x: 960, y: 520 },
  width: 160,
  height: 100,
  xMin: 880,
  xMax: 1040,
  yMin: 470, // Top of barrier
  yMax: 570, // Bottom of barrier
};

const sourcePath = 'M 600 520 C 780 200, 1140 200, 1320 520';
const targetPath = 'M 600 520 C 780 360, 1140 360, 1320 520';

console.log(`Barrier bounds: X ∈ [${barrier.xMin}, ${barrier.xMax}], Y ∈ [${barrier.yMin}, ${barrier.yMax}]`);
console.log(`Source Path (Upper Deep Arc):    ${sourcePath}`);
console.log(`Target Path (Upper Shallow Arc): ${targetPath}\n`);

function bezier(p0, p1, p2, p3, t) {
  const mt = 1 - t;
  return mt * mt * mt * p0 + 3 * mt * mt * t * p1 + 3 * mt * t * t * p2 + t * t * t * p3;
}

const p0 = { x: 600, y: 520 };
const p3 = { x: 1320, y: 520 };

// Audit 5 canonical checkpoints
const checkpointProgresses = [0, 0.25, 0.5, 0.75, 1.0];
console.log(`Canonical Checkpoint Evaluation:`);
for (const prog of checkpointProgresses) {
  const yc = 200 * (1 - prog) + 360 * prog;
  const d = `M 600 520 C 780 ${yc.toFixed(1)}, 1140 ${yc.toFixed(1)}, 1320 520`;
  const apexY = 130 + 0.75 * yc;
  const clearance = barrier.yMin - apexY;
  console.log(`  Progress ${(prog * 100).toString().padStart(3, ' ')}%: d="${d}"`);
  console.log(`             Apex Y = ${apexY.toFixed(1)}px (Clearance above barrier top: ${clearance.toFixed(1)}px)`);
}

// Fine-grained sampling over 101 progress points and 1001 curve segments
let minClearance = Infinity;
let violations = 0;
for (let p = 0; p <= 100; p++) {
  const prog = p / 100;
  const yc = 200 * (1 - prog) + 360 * prog;
  const p1 = { x: 780, y: yc };
  const p2 = { x: 1140, y: yc };

  for (let s = 0; s <= 1000; s++) {
    const t = s / 1000;
    const x = bezier(p0.x, p1.x, p2.x, p3.x, t);
    const y = bezier(p0.y, p1.y, p2.y, p3.y, t);

    if (x >= barrier.xMin && x <= barrier.xMax) {
      const clearance = barrier.yMin - y;
      if (clearance < minClearance) minClearance = clearance;
      if (y >= barrier.yMin && y <= barrier.yMax) {
        violations++;
      }
    }
  }
}

console.log(`\nContinuous Audit (101 progress steps × 1001 curve samples):`);
console.log(`  Violations: ${violations}`);
console.log(`  Absolute Minimum Clearance above barrier top: ${minClearance.toFixed(2)}px`);
console.log(`  All intermediate geometry verified 100% semantically valid: ${violations === 0 && minClearance > 0 ? 'YES' : 'NO'}\n`);

// =============================================================================
// RENDERING STILLS
// =============================================================================

// 1. Boundary stills across consecutive studies (testing for flash, stale state, or layout jumps)
const boundaryFrames = [
  { frame: 0, label: 'studyA-f00-start' },
  { frame: 59, label: 'boundary-01-studyA-f59' },
  { frame: 60, label: 'boundary-01-studyB-f60' },
  { frame: 119, label: 'boundary-02-studyB-f119' },
  { frame: 120, label: 'boundary-02-studyC-f120' },
  { frame: 179, label: 'boundary-03-studyC-f179' },
  { frame: 180, label: 'boundary-03-studyD-f180' },
  { frame: 239, label: 'boundary-04-studyD-f239' },
  { frame: 240, label: 'boundary-04-studyE-f240' },
  { frame: 299, label: 'boundary-05-studyE-f299' },
  { frame: 300, label: 'boundary-05-studyF-f300' },
  { frame: 359, label: 'boundary-06-studyF-f359' },
  { frame: 360, label: 'boundary-06-studyG-f360' },
  { frame: 419, label: 'boundary-07-studyG-f419' },
  { frame: 420, label: 'boundary-07-studyH-f420' },
  { frame: 479, label: 'studyH-f479-end' },
];

// 2. Study C Progress Checkpoints (0%, 25%, 50%, 75%, 100%)
const checkpoints = [
  { frame: 0, label: 'checkpoint-00-progress-00pct' },
  { frame: 1, label: 'checkpoint-01-progress-25pct' },
  { frame: 2, label: 'checkpoint-02-progress-50pct' },
  { frame: 3, label: 'checkpoint-03-progress-75pct' },
  { frame: 4, label: 'checkpoint-04-progress-100pct' },
];

// 3. Midpoint action stills per study
const studyActionFrames = [
  { frame: 30, label: 'studyA-f30-relayout-sliding' },
  { frame: 90, label: 'studyB-f90-scale-expanding' },
  { frame: 150, label: 'studyC-f150-midpoint-reroute' },
  { frame: 200, label: 'studyD-f200-erased-and-inserted' },
  { frame: 220, label: 'studyD-f220-new-edges-drawn' },
  { frame: 270, label: 'studyE-f270-duplicate-projected' },
  { frame: 330, label: 'studyF-f330-merging-values' },
  { frame: 390, label: 'studyG-f390-handoff-highlight' },
  { frame: 450, label: 'studyH-f450-representation-cross' },
];

console.log(`================================================================`);
console.log(`PHASE 5 STILL RENDERING PIPELINE`);
console.log(`================================================================\n`);

// Render Boundary Stills
console.log(`[1/3] Rendering ${boundaryFrames.length} Boundary Stills...`);
for (const { frame, label } of boundaryFrames) {
  const outFile = path.join(boundariesDir, `${label}.png`);
  console.log(`  -> Frame ${frame}: ${label}`);
  execSync(`npx remotion still ${compMain} "${outFile}" --frame=${frame} --log=warn`, {
    cwd: remotionDir,
    stdio: 'inherit',
  });
}

// Render Checkpoint Stills
console.log(`\n[2/3] Rendering ${checkpoints.length} Study C Checkpoint Stills...`);
for (const { frame, label } of checkpoints) {
  const outFile = path.join(checkpointsDir, `${label}.png`);
  console.log(`  -> Checkpoint Frame ${frame}: ${label}`);
  execSync(`npx remotion still ${compCheckpoints} "${outFile}" --frame=${frame} --log=warn`, {
    cwd: remotionDir,
    stdio: 'inherit',
  });
}

// Render Study Action Stills
console.log(`\n[3/3] Rendering ${studyActionFrames.length} Study Action Stills...`);
for (const { frame, label } of studyActionFrames) {
  const outFile = path.join(studiesDir, `${label}.png`);
  console.log(`  -> Action Frame ${frame}: ${label}`);
  execSync(`npx remotion still ${compMain} "${outFile}" --frame=${frame} --log=warn`, {
    cwd: remotionDir,
    stdio: 'inherit',
  });
}

console.log(`\nAll Phase 5 verification stills rendered successfully into ${baseOutDir}!`);
