#!/usr/bin/env node
/**
 * tools/validate-v2.mjs — Foundation V2 Production QA / Validation Master CLI
 *
 * Orchestrates automated validators for the Code With Animation long-form course:
 * A. Audio Sync Integrity
 * B. Scene & Frame Boundaries
 * C. Remotion Determinism Scanner
 * D. SVG / Path Geometry Safety
 * E. Array V2 Structural Invariants (Fixed Slots / In-Flight Values / Static Indices)
 * F. Multi-Lane Pointer System
 * G. Partition Bounds & Disjoint Intervals
 * H. Adaptive Layout Safety (Container Constraint Supremacy)
 * I. Course Theme Rules (Green Board Authority)
 * J. Proof Smoke Renders (executed in --full mode)
 * K. Intentional Failure Negative Test Harness
 *
 * Modes:
 *   npm run validate:v2        -> Fast preflight suite (~2-3s)
 *   npm run validate:v2:full   -> Fast preflight + Remotion proof smoke renders
 */

import process from "node:process";
import { runAudioSyncValidation } from "./qa/validator-audio-sync.mjs";
import { runSceneBoundaryValidation } from "./qa/validator-scene-boundaries.mjs";
import { runDeterminismScan } from "./qa/validator-determinism.mjs";
import { runGeometryValidation } from "./qa/validator-geometry.mjs";
import { runArrayInvariantsValidation } from "./qa/validator-array-invariants.mjs";
import { runPointerLanesValidation } from "./qa/validator-pointer-lanes.mjs";
import { runPartitionBoundsValidation } from "./qa/validator-partition-bounds.mjs";
import { runAdaptiveLayoutValidation } from "./qa/validator-adaptive-layout.mjs";
import { runThemeRulesValidation } from "./qa/validator-theme-rules.mjs";
import { runIntentionalFailureTests } from "./qa/validator-intentional-failures.mjs";
import { runProofSmokeRenders } from "./qa/validator-smoke-renders.mjs";
import { runQ10SemanticValidation } from "./qa/validator-q10-semantic.mjs";

const COLOR_RESET = "\x1b[0m";
const COLOR_RED = "\x1b[31m";
const COLOR_GREEN = "\x1b[32m";
const COLOR_YELLOW = "\x1b[33m";
const COLOR_CYAN = "\x1b[36m";
const COLOR_BOLD = "\x1b[1m";
const COLOR_DIM = "\x1b[2m";

async function main() {
  const isFull = process.argv.includes("--full");
  const startTime = Date.now();

  console.log(`\n${COLOR_BOLD}${COLOR_CYAN}================================================================${COLOR_RESET}`);
  console.log(`${COLOR_BOLD}   FOUNDATION V2 AUTOMATED QA & VALIDATION SUITE${COLOR_RESET}`);
  console.log(`   Mode: ${isFull ? `${COLOR_YELLOW}FULL (Preflight + Proof Smoke Renders)${COLOR_RESET}` : `${COLOR_GREEN}FAST PREFLIGHT${COLOR_RESET}`}`);
  console.log(`${COLOR_BOLD}${COLOR_CYAN}================================================================${COLOR_RESET}\n`);

  const results = [];
  let hasCriticalFailure = false;

  async function executeCheck(label, runFn) {
    try {
      const res = await runFn();
      results.push({ label, res });
      if (res.passed) {
        console.log(`  ${COLOR_GREEN}[PASS]${COLOR_RESET} ${label}`);
        if (res.warnings && res.warnings.length > 0) {
          for (const w of res.warnings) {
            console.log(`         ${COLOR_YELLOW}WARN:${COLOR_RESET} ${w}`);
          }
        }
      } else {
        hasCriticalFailure = true;
        console.log(`  ${COLOR_RED}[FAIL]${COLOR_RESET} ${label}`);
        if (res.errors && res.errors.length > 0) {
          for (const e of res.errors) {
            console.log(`         ${COLOR_RED}ERROR:${COLOR_RESET} ${e}`);
          }
        }
      }
    } catch (err) {
      hasCriticalFailure = true;
      console.log(`  ${COLOR_RED}[FAIL]${COLOR_RESET} ${label} (UNCAUGHT EXCEPTION)`);
      console.log(`         ${COLOR_RED}ERROR:${COLOR_RESET} ${err.message}`);
      results.push({ label, res: { passed: false, errors: [err.message] } });
    }
  }

  // 1. Audio Sync & Semantic Anchors
  await executeCheck("audio sync", async () => {
    return await runAudioSyncValidation();
  });

  // 2. Scene & Frame Boundaries
  await executeCheck("scene / frame boundaries", async () => {
    return await runSceneBoundaryValidation();
  });

  // 3. Remotion Determinism Scanner
  await executeCheck("deterministic render scan", async () => {
    return await runDeterminismScan();
  });

  // 4. SVG & Geometry Safety
  await executeCheck("SVG geometry", async () => {
    return await runGeometryValidation();
  });

  // 5. Array V2 Structural Invariants (Fixed Slots / In-Flight Values / Static Indices)
  await executeCheck("Array slot invariants", async () => {
    return await runArrayInvariantsValidation();
  });

  // 6. Pointer Lanes (Collision & Clearance)
  await executeCheck("Pointer lanes", async () => {
    return await runPointerLanesValidation();
  });

  // 7. Partition Bounds & Disjoint Intervals
  await executeCheck("Partition bounds", async () => {
    return await runPartitionBoundsValidation();
  });

  // 8. Adaptive Layout (Container Constraint Supremacy)
  await executeCheck("adaptive layout", async () => {
    return await runAdaptiveLayoutValidation();
  });

  // 9. Course Theme Rules (Green Board Authority)
  await executeCheck("course theme rules", async () => {
    return await runThemeRulesValidation();
  });

  // 10. Intentional Failure Negative Test Harness
  await executeCheck("intentional failure harness", async () => {
    return await runIntentionalFailureTests();
  });

  // 11. Q10 Semantic Truth & Immutability Regression
  await executeCheck("Q10 semantic truth & immutability", async () => {
    return await runQ10SemanticValidation();
  });

  // 12. Proof Smoke Renders (if --full)
  if (isFull) {
    console.log(`\n  ${COLOR_DIM}Running headless proof smoke renders (6 compositions)...${COLOR_RESET}`);
    await executeCheck("proof smoke renders", async () => {
      return await runProofSmokeRenders();
    });
  } else {
    console.log(`  ${COLOR_DIM}[SKIP] proof smoke renders (run 'npm run validate:v2:full' to execute)${COLOR_RESET}`);
  }

  const durationMs = Date.now() - startTime;
  const passedCount = results.filter(r => r.res.passed).length;
  const totalCount = results.length;

  console.log(`\n${COLOR_BOLD}${COLOR_CYAN}================================================================${COLOR_RESET}`);
  console.log(`SUMMARY: ${passedCount} / ${totalCount} checks passed in ${(durationMs / 1000).toFixed(2)}s`);

  if (hasCriticalFailure) {
    console.log(`${COLOR_RED}${COLOR_BOLD}RESULT: QA VALIDATION FAILED${COLOR_RESET}`);
    console.log(`${COLOR_BOLD}${COLOR_CYAN}================================================================${COLOR_RESET}\n`);
    process.exit(1);
  } else {
    console.log(`${COLOR_GREEN}${COLOR_BOLD}RESULT: ALL QA CHECKS PASSED${COLOR_RESET}`);
    console.log(`${COLOR_BOLD}${COLOR_CYAN}================================================================${COLOR_RESET}\n`);
    process.exit(0);
  }
}

main().catch(err => {
  console.error("Fatal error in QA runner:", err);
  process.exit(1);
});
