/**
 * tools/qa/validator-smoke-renders.mjs — Validator J: Proof Smoke Renders
 *
 * Automates headless smoke still renders for core representative compositions:
 * 1. Phase7Proof-01-Array (frame 45)
 * 2. Phase7Proof-04-Matrix (frame 45)
 * 3. Phase7Proof-05-LinkedList (frame 45)
 * 4. Phase7Proof-08-Tree (frame 45)
 * 5. Phase7Proof-10-Graph (frame 45)
 * 6. FoundationV2-Phase9-ArraySystem (frame 30)
 *
 * Verifies that the compositions actually render into valid, non-empty PNG images.
 */

import { execSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";

const SMOKE_TARGETS = [
  { comp: "Phase7Proof-01-Array", frame: 45, file: "Smoke_01_Array.png" },
  { comp: "Phase7Proof-04-Matrix", frame: 45, file: "Smoke_04_Matrix.png" },
  { comp: "Phase7Proof-05-LinkedList", frame: 45, file: "Smoke_05_LinkedList.png" },
  { comp: "Phase7Proof-08-Tree", frame: 45, file: "Smoke_08_Tree.png" },
  { comp: "Phase7Proof-10-Graph", frame: 45, file: "Smoke_10_Graph.png" },
  { comp: "FoundationV2-Phase9-ArraySystem", frame: 30, file: "Smoke_ArraySystem.png" },
];

export async function runProofSmokeRenders(rootDir = process.cwd()) {
  const remotionDir = path.join(rootDir, "remotion-project");
  const smokeDir = path.join(rootDir, "proofs/smoke");
  const errors = [];
  const results = [];

  if (!fs.existsSync(smokeDir)) {
    fs.mkdirSync(smokeDir, { recursive: true });
  }

  // 1. Ensure Remotion bundle exists
  const buildDir = path.join(remotionDir, "build");
  if (!fs.existsSync(buildDir)) {
    try {
      execSync("npm run build", { cwd: remotionDir, stdio: "pipe" });
    } catch (err) {
      errors.push(`Remotion bundling failed: ${err.message}`);
      return {
        name: "Proof Smoke Renders",
        passed: false,
        renderedCount: 0,
        errors,
        warnings: [],
      };
    }
  }

  // 2. Render each smoke target still
  for (const target of SMOKE_TARGETS) {
    const outFile = path.join(smokeDir, target.file);
    const start = Date.now();

    try {
      execSync(
        `npx remotion still build ${target.comp} "${outFile}" --frame=${target.frame} --log=warn`,
        { cwd: remotionDir, stdio: "pipe" }
      );

      if (!fs.existsSync(outFile)) {
        errors.push(`Output still ${target.file} was not created for ${target.comp}`);
        continue;
      }

      const stat = fs.statSync(outFile);
      if (stat.size <= 0) {
        errors.push(`Output still ${target.file} for ${target.comp} is empty (0 bytes)`);
        continue;
      }

      const durationMs = Date.now() - start;
      results.push({
        comp: target.comp,
        frame: target.frame,
        file: target.file,
        sizeKb: (stat.size / 1024).toFixed(1),
        durationMs,
      });
    } catch (err) {
      errors.push(`Rendering ${target.comp} at frame ${target.frame} failed: ${err.message}`);
    }
  }

  return {
    name: "Proof Smoke Renders (6 Representative Compositions)",
    passed: errors.length === 0,
    renderedCount: results.length,
    totalExpected: SMOKE_TARGETS.length,
    results,
    errors,
    warnings: [],
  };
}
