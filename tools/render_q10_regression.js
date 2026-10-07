/**
 * tools/render_q10_regression.js — Q10 Longest Consecutive Sequence Regression Stills
 *
 * Renders the 13 required regression checkpoints (A through M):
 * A. initial testcase (Scene 02, frame 950)
 * B. brute trace (Scene 03, frame 550)
 * C. brute failure / complexity (Scene 05, frame 200)
 * D. sorted-array trace (Scene 06, frame 400)
 * E. duplicate handling in sorted (Scene 06, frame 1250)
 * F. optimal HashSet construction (Scene 10, frame 500)
 * G. predecessor exists -> skip (Scene 10, frame 1700)
 * H. valid sequence start (Scene 10, frame 800)
 * I. forward walk (Scene 10, frame 1100)
 * J. longest update (Scene 10, frame 3800)
 * K. final complexity (Scene 12, frame 600)
 * L. misconceptions / edge cases (Scene 12, frame 2200)
 * M. recap (Scene 13, frame 400)
 *
 * Usage:
 *   node tools/render_q10_regression.js --before
 *   node tools/render_q10_regression.js --after
 */

const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

const mode = process.argv.includes("--after") ? "after" : "before";
const rootDir = path.resolve(__dirname, "..");
const remotionDir = path.join(rootDir, "remotion-project");
const outDir = path.join(rootDir, "proofs/phase11-q10", mode);

if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

const checkpoints = [
  { id: "A_initial_testcase", comp: "010-Scene02-Understand", frame: 950, label: "Initial testcase (Scene 02)" },
  { id: "B_brute_trace", comp: "010-Scene03-TraceBrute", frame: 630, label: "Brute trace settled 8 len 4 best 4 (Scene 03)" },
  { id: "C_brute_failure", comp: "010-Scene05-WhyBrute", frame: 530, label: "Brute cubic failure 3 factors O(n³) (Scene 05)" },
  { id: "D_sorted_trace", comp: "010-Scene06-TraceBetter", frame: 530, label: "Sorted array fully settled (Scene 06)" },
  { id: "E_duplicate_sorted", comp: "010-Scene06-TraceBetter", frame: 1250, label: "Duplicate handling 2 == 2 (Scene 06)" },
  { id: "F_optimal_hashset_construct", comp: "010-Scene10-TraceOptimal", frame: 500, label: "Optimal HashSet construction (Scene 10)" },
  { id: "G_predecessor_skip", comp: "010-Scene10-TraceOptimal", frame: 1700, label: "Predecessor exists -> skip 1 (Scene 10)" },
  { id: "H_valid_sequence_start", comp: "010-Scene10-TraceOptimal", frame: 800, label: "Valid sequence start 8 (Scene 10)" },
  { id: "I_forward_walk", comp: "010-Scene10-TraceOptimal", frame: 1100, label: "Forward walk 8 -> 11 (Scene 10)" },
  { id: "J_longest_update", comp: "010-Scene10-TraceOptimal", frame: 4340, label: "Final winning sequence 6 (Scene 10)" },
  { id: "K_final_complexity", comp: "010-Scene12-Complexity", frame: 3155, label: "3-way complexity comparison O(n³) vs O(n log n) vs expected O(n) (Scene 12)" },
  { id: "L_misconceptions", comp: "010-Scene12-Complexity", frame: 435, label: "Edge cases & nested loop trap (Scene 12)" },
  { id: "M_recap", comp: "010-Scene13-Recap", frame: 1100, label: "Recap 3 approaches & takeaway (Scene 13)" },
];

console.log("================================================================");
console.log(`PHASE 11: Q10 REGRESSION STILLS [MODE: ${mode.toUpperCase()}]`);
console.log(`Total checkpoints: ${checkpoints.length} | Output: ${outDir}`);
console.log("================================================================\n");

let rendered = 0;
const results = [];

for (const cp of checkpoints) {
  const outFile = path.join(outDir, `${cp.id}.png`);
  process.stdout.write(`  [${cp.id}] Rendering ${cp.comp} @ F${cp.frame}... `);
  const start = Date.now();

  try {
    execSync(
      `npx remotion still build ${cp.comp} "${outFile}" --frame=${cp.frame} --log=warn`,
      { cwd: remotionDir, stdio: "pipe" }
    );
    const stat = fs.statSync(outFile);
    const durationMs = Date.now() - start;
    console.log(`OK (${(stat.size / 1024).toFixed(1)} KB, ${durationMs}ms)`);
    results.push({ id: cp.id, size: stat.size, status: "OK" });
    rendered++;
  } catch (err) {
    console.log("FAILED!");
    console.error(`    Error rendering ${cp.comp}:`, err.message);
    process.exit(1);
  }
}

console.log("\n================================================================");
console.log(`Q10 REGRESSION STILLS [${mode.toUpperCase()}]: ${rendered} / ${checkpoints.length} OK`);
console.log("================================================================\n");
