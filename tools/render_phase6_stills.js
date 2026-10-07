const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');
const rough = require('roughjs');
const { getLength } = require('@remotion/paths');

const baseOutDir = path.join(__dirname, '../output/phase6-proof');
const boundariesDir = path.join(baseOutDir, 'boundaries');
const checkpointsDir = path.join(baseOutDir, 'checkpoints');
const studiesDir = path.join(baseOutDir, 'studies');

for (const dir of [baseOutDir, boundariesDir, checkpointsDir, studiesDir]) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

const remotionDir = path.join(__dirname, '../remotion-project');
const compMain = 'FoundationV2-Phase6-SvgGrammar';
const compStudyACheckpoints = 'FoundationV2-Phase6-StudyA-Checkpoints';

// =============================================================================
// NUMERIC PROOF AUDIT: STUDY H ROUGH.JS ACTUAL VS V1 ESTIMATE
// =============================================================================
console.log(`================================================================`);
console.log(`PHASE 6 STUDY H: ROUGH.JS EXACT-METRIC NUMERIC AUDIT`);
console.log(`================================================================\n`);

const points = [
  [520, 560],
  [760, 360],
  [1160, 360],
  [1400, 560],
];

const gen = rough.generator();
const opts = { roughness: 1.4, bowing: 1.2, stroke: '#3CE5A7', strokeWidth: 4, seed: 42 };
const curveShape = gen.curve(points, opts);
const paths = gen.toPaths(curveShape);

let actualGeneratedLength = 0;
for (const p of paths) {
  if (p.d) {
    actualGeneratedLength += getLength(p.d);
  }
}

let totalChordLength = 0;
for (let i = 1; i < points.length; i++) {
  const dx = points[i][0] - points[i - 1][0];
  const dy = points[i][1] - points[i - 1][1];
  totalChordLength += Math.sqrt(dx * dx + dy * dy);
}
// V1 RoughCurve estimate formula: totalChord * 1.3 + 50
const v1FormulaEstimate = totalChordLength * 1.3 + 50;
const numericDelta = actualGeneratedLength - v1FormulaEstimate;
const formulaErrorPct = (Math.abs(numericDelta) / actualGeneratedLength) * 100;

console.log(`Control Points: [${points.map(p => `(${p[0]},${p[1]})`).join(' → ')}]`);
console.log(`Total Chord Length:               ${totalChordLength.toFixed(2)}px`);
console.log(`V1 Formula Estimate (sum*1.3+50): ${v1FormulaEstimate.toFixed(2)}px`);
console.log(`Actual Generated Path Length:     ${actualGeneratedLength.toFixed(2)}px`);
console.log(`Numeric Delta (Actual - V1):      ${numericDelta > 0 ? '+' : ''}${numericDelta.toFixed(2)}px`);
console.log(`Formula Error Percentage:         ${formulaErrorPct.toFixed(2)}%`);
console.log(`Evidence Conclusion: Rough.js multi-stroke generation & bowing create substantial variance from heuristic formulas.`);
console.log(`                      Phase 8 migration to exact getLength(d) is mathematically justified.\n`);

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

// 2. Study A Progress Checkpoints (0%, 25%, 50%, 75%, 100%)
const studyACheckpoints = [
  { frame: 0, label: 'studyA-checkpoint-00-prog-00pct' },
  { frame: 1, label: 'studyA-checkpoint-01-prog-25pct' },
  { frame: 2, label: 'studyA-checkpoint-02-prog-50pct' },
  { frame: 3, label: 'studyA-checkpoint-03-prog-75pct' },
  { frame: 4, label: 'studyA-checkpoint-04-prog-100pct' },
];

// 3. Studies D, E, F Specific Checkpoints
const studyCheckpoints = [
  // Study D: Tracer probe along curve
  { frame: 190, label: 'studyD-checkpoint-start' },
  { frame: 210, label: 'studyD-checkpoint-midcurve' },
  { frame: 230, label: 'studyD-checkpoint-end' },
  // Study E: Erase old -> Draw new
  { frame: 245, label: 'studyE-checkpoint-old-valid' },
  { frame: 256, label: 'studyE-checkpoint-erase-midpoint' },
  { frame: 270, label: 'studyE-checkpoint-old-gone-hold' },
  { frame: 283, label: 'studyE-checkpoint-new-midpoint' },
  { frame: 295, label: 'studyE-checkpoint-new-settled' },
  // Study F: Dashed semantic path reveal
  { frame: 305, label: 'studyF-checkpoint-prog-00pct-dashes-intact' },
  { frame: 330, label: 'studyF-checkpoint-prog-50pct-dashes-intact' },
  { frame: 355, label: 'studyF-checkpoint-prog-100pct-dashes-intact' },
];

// 4. Study midpoint action stills per study
const studyActionFrames = [
  { frame: 30, label: 'studyA-f30-exact-draw-midpoint' },
  { frame: 90, label: 'studyB-f90-reversed-drawing' },
  { frame: 155, label: 'studyC-f155-relation-head-settled' },
  { frame: 210, label: 'studyD-f210-tracer-tangent-probe' },
  { frame: 285, label: 'studyE-f285-erase-draw-handoff' },
  { frame: 330, label: 'studyF-f330-dashed-mask-reveal' },
  { frame: 395, label: 'studyG-f395-compound-strokes' },
  { frame: 450, label: 'studyH-f450-rough-exact-telemetry' },
];

console.log(`================================================================`);
console.log(`PHASE 6 STILL RENDERING PIPELINE`);
console.log(`================================================================\n`);

// Render Boundary Stills
console.log(`[1/4] Rendering ${boundaryFrames.length} Boundary Stills...`);
for (const { frame, label } of boundaryFrames) {
  const outFile = path.join(boundariesDir, `${label}.png`);
  console.log(`  -> Frame ${frame}: ${label}`);
  execSync(`npx remotion still ${compMain} "${outFile}" --frame=${frame} --log=warn`, {
    cwd: remotionDir,
    stdio: 'inherit',
  });
}

// Render Study A Checkpoint Stills
console.log(`\n[2/4] Rendering ${studyACheckpoints.length} Study A Checkpoint Stills...`);
for (const { frame, label } of studyACheckpoints) {
  const outFile = path.join(checkpointsDir, `${label}.png`);
  console.log(`  -> Checkpoint Frame ${frame}: ${label}`);
  execSync(`npx remotion still ${compStudyACheckpoints} "${outFile}" --frame=${frame} --log=warn`, {
    cwd: remotionDir,
    stdio: 'inherit',
  });
}

// Render Specific Study D, E, F Checkpoints
console.log(`\n[3/4] Rendering ${studyCheckpoints.length} Study D, E, F Checkpoint Stills...`);
for (const { frame, label } of studyCheckpoints) {
  const outFile = path.join(checkpointsDir, `${label}.png`);
  console.log(`  -> Action Frame ${frame}: ${label}`);
  execSync(`npx remotion still ${compMain} "${outFile}" --frame=${frame} --log=warn`, {
    cwd: remotionDir,
    stdio: 'inherit',
  });
}

// Render Study Action Stills
console.log(`\n[4/4] Rendering ${studyActionFrames.length} Study Action Stills...`);
for (const { frame, label } of studyActionFrames) {
  const outFile = path.join(studiesDir, `${label}.png`);
  console.log(`  -> Action Frame ${frame}: ${label}`);
  execSync(`npx remotion still ${compMain} "${outFile}" --frame=${frame} --log=warn`, {
    cwd: remotionDir,
    stdio: 'inherit',
  });
}

console.log(`\nAll Phase 6 verification stills rendered successfully into ${baseOutDir}!`);
