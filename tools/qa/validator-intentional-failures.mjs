/**
 * tools/qa/validator-intentional-failures.mjs — Section 16: Intentional Failure Harness
 *
 * Proves that validators actually catch and reject bad input loudly.
 *
 * Negative Test Cases:
 * 1. Semantic anchor frame == durationFrames (fails: must be < durationFrames)
 * 2. Duplicate word ID in sync data (fails: uniqueness check)
 * 3. Pointer index = -1 (fails: negative index)
 * 4. Pointer index = count (fails: out of bounds index)
 * 5. Partition endIndex beyond array (fails: interval bound check)
 * 6. NaN in geometry input (fails: non-finite coordinates check)
 * 7. MeshGrid rows = 0 (fails: rows must be positive integer)
 * 8. Math.random() in scanned code snippet (fails: non-deterministic code check)
 */

import { validateSingleSyncData, validateSemanticAnchorManifest } from "./validator-audio-sync.mjs";
import { validatePointerLaneConfiguration } from "./validator-pointer-lanes.mjs";
import { validatePartitions } from "./validator-partition-bounds.mjs";
import { getEdgeCoords, validateMeshGridConfig } from "./validator-geometry.mjs";
import { scanCodeForDeterminism } from "./validator-determinism.mjs";

export async function runIntentionalFailureTests() {
  const testResults = [];
  const errors = [];

  // ---------------------------------------------------------------------------
  // 1. Semantic Anchor Frame == durationFrames
  // ---------------------------------------------------------------------------
  {
    const syncData = {
      duration_frames: 100,
      words: [
        { word: "test", start_frame: 90, end_frame: 100 },
      ],
    };
    const badManifest = {
      anchors: {
        A_FAIL: { word_index: 0, edge: "end", offset_frames: 0 }, // baseFrame=100 == duration_frames -> MUST FAIL
      },
    };
    const res = validateSemanticAnchorManifest(syncData, badManifest, "anchor-fail-test");
    const caught = !res.passed && res.errors.some(e => e.includes("outside valid range"));
    testResults.push({
      test: "Anchor frame == durationFrames (boundary violation)",
      expectedFail: true,
      caught,
      reason: caught ? "Correctly rejected out-of-bounds frame 100" : "FAILED to reject out-of-bounds frame",
    });
    if (!caught) errors.push("Intentional failure test #1 failed: anchor frame == durationFrames was not rejected.");
  }

  // ---------------------------------------------------------------------------
  // 2. Duplicate Word ID in Sync Data
  // ---------------------------------------------------------------------------
  {
    const badSync = {
      audio_file: "test.mp3",
      duration_ms: 1000,
      duration_frames: 30,
      fps: 30,
      words: [
        { id: "W0001", word: "hello", start_ms: 0, end_ms: 300, start_frame: 0, end_frame: 9 },
        { id: "W0001", word: "world", start_ms: 350, end_ms: 700, start_frame: 11, end_frame: 21 }, // Duplicate ID!
      ],
    };
    const res = validateSingleSyncData(badSync, "dup-id-test");
    const caught = !res.passed && res.errors.some(e => e.includes("Duplicate word ID"));
    testResults.push({
      test: "Duplicate word ID in sync data",
      expectedFail: true,
      caught,
      reason: caught ? "Correctly rejected duplicate word ID 'W0001'" : "FAILED to reject duplicate word ID",
    });
    if (!caught) errors.push("Intentional failure test #2 failed: duplicate word ID was not rejected.");
  }

  // ---------------------------------------------------------------------------
  // 3. Pointer Index = -1
  // ---------------------------------------------------------------------------
  {
    const badPointers = [{ id: "p1", label: "i", index: -1 }];
    const res = validatePointerLaneConfiguration(badPointers, 8, "bottom");
    const caught = !res.passed && res.errors.some(e => e.includes("OUT OF BOUNDS"));
    testResults.push({
      test: "Pointer index = -1 (negative index)",
      expectedFail: true,
      caught,
      reason: caught ? "Correctly rejected negative pointer index -1" : "FAILED to reject negative pointer index",
    });
    if (!caught) errors.push("Intentional failure test #3 failed: pointer index = -1 was not rejected.");
  }

  // ---------------------------------------------------------------------------
  // 4. Pointer Index = count (off by one out of bounds)
  // ---------------------------------------------------------------------------
  {
    const count = 8;
    const badPointers = [{ id: "p1", label: "i", index: count }];
    const res = validatePointerLaneConfiguration(badPointers, count, "bottom");
    const caught = !res.passed && res.errors.some(e => e.includes("OUT OF BOUNDS"));
    testResults.push({
      test: "Pointer index = count (off-by-one out of bounds)",
      expectedFail: true,
      caught,
      reason: caught ? "Correctly rejected index equal to count" : "FAILED to reject index equal to count",
    });
    if (!caught) errors.push("Intentional failure test #4 failed: pointer index = count was not rejected.");
  }

  // ---------------------------------------------------------------------------
  // 5. Partition End Beyond Array
  // ---------------------------------------------------------------------------
  {
    const count = 6;
    const badPartitions = [{ id: "part-overflow", startIndex: 2, endIndex: 8 }];
    const res = validatePartitions(badPartitions, count);
    const caught = !res.passed && res.errors.some(e => e.includes("OUT OF BOUNDS"));
    testResults.push({
      test: "Partition end beyond array (endIndex >= count)",
      expectedFail: true,
      caught,
      reason: caught ? "Correctly rejected partition ending past array boundary" : "FAILED to reject partition overflow",
    });
    if (!caught) errors.push("Intentional failure test #5 failed: partition end beyond array was not rejected.");
  }

  // ---------------------------------------------------------------------------
  // 6. NaN in Geometry Input
  // ---------------------------------------------------------------------------
  {
    let caught = false;
    try {
      getEdgeCoords(100, NaN, 200, 200, 30, 30);
    } catch (err) {
      caught = err.message.includes("Non-finite input");
    }
    testResults.push({
      test: "NaN in geometry coordinates (getEdgeCoords)",
      expectedFail: true,
      caught,
      reason: caught ? "Correctly threw error on NaN coordinate" : "FAILED to reject NaN geometry input",
    });
    if (!caught) errors.push("Intentional failure test #6 failed: NaN geometry coordinate was not rejected.");
  }

  // ---------------------------------------------------------------------------
  // 7. MeshGrid rows = 0
  // ---------------------------------------------------------------------------
  {
    const meshErrors = validateMeshGridConfig(0, 4, 80, 80);
    const caught = meshErrors.length > 0 && meshErrors.some(e => e.includes("positive integer"));
    testResults.push({
      test: "MeshGrid rows = 0 (zero grid dimensions)",
      expectedFail: true,
      caught,
      reason: caught ? "Correctly rejected zero rows" : "FAILED to reject rows = 0",
    });
    if (!caught) errors.push("Intentional failure test #7 failed: MeshGrid rows = 0 was not rejected.");
  }

  // ---------------------------------------------------------------------------
  // 8. Math.random() in Scanned Code Snippet
  // ---------------------------------------------------------------------------
  {
    const badCode = `
      export const BadComponent = () => {
        const value = Math.random();
        return <div>{value}</div>;
      };
    `;
    const violations = scanCodeForDeterminism(badCode, "test-fixture.tsx");
    const caught = violations.length > 0 && violations.some(v => v.violation === "Math.random()");
    testResults.push({
      test: "Math.random() in scoped code fixture",
      expectedFail: true,
      caught,
      reason: caught ? "Correctly detected and flagged forbidden Math.random()" : "FAILED to detect Math.random()",
    });
    if (!caught) errors.push("Intentional failure test #8 failed: Math.random() in test fixture was not detected.");
  }

  return {
    name: "Intentional Failure Negative Test Harness",
    passed: errors.length === 0,
    testsExecuted: testResults.length,
    testResults,
    errors,
    warnings: [],
  };
}
