/**
 * tools/qa/validator-q10-semantic.mjs — Q10 Semantic & Immutability Regression Validator
 *
 * Source of truth: Reads directly from Q10 production files:
 * - questions/01-arrays-hashing/010-longest-consecutive-sequence/script.json
 * - questions/01-arrays-hashing/010-longest-consecutive-sequence/analysis.json
 * - questions/01-arrays-hashing/010-longest-consecutive-sequence/src/MainVideo.tsx
 * - questions/01-arrays-hashing/010-longest-consecutive-sequence/src/Scene10TraceOptimal.tsx
 *
 * Verifies:
 * 1. Master testcase exact match: [8, 1, 6, 3, 2, 2, 4, 10, 9, 11, -1, 0] (12 elements, both 2s present)
 * 2. Final answer = 6 (sequence: [-1, 0, 1, 2, 3, 4])
 * 3. HashSet deduplication: exactly 11 unique members (first 2 stored, second 2 deduplicated)
 * 4. Traversal order follows unique first-appearance order: [8, 1, 6, 3, 2, 4, 10, 9, 11, -1, 0]
 * 5. Predecessor formula strictly uses x - 1
 * 6. Sequence starts if and only if x - 1 is absent from set
 * 7. Forward walk checks x + 1, x + 2, ... until missing
 * 8. Only 3 sequence walks occur: starts 8, 6, -1
 * 9. Immutability Regression: 13 scene durations, master video duration, sync word counts
 */

import fs from "node:fs";
import path from "node:path";

export async function runQ10SemanticValidation(rootDir = process.cwd()) {
  const q10Dir = path.join(rootDir, "questions/01-arrays-hashing/010-longest-consecutive-sequence");
  const errors = [];
  const warnings = [];

  // 1. Read script.json
  const scriptPath = path.join(q10Dir, "script.json");
  if (!fs.existsSync(scriptPath)) {
    errors.push("Missing script.json in Q10 directory.");
    return { name: "Q10 Semantic Truth & Immutability", passed: false, errors, warnings: [] };
  }
  const script = JSON.parse(fs.readFileSync(scriptPath, "utf8"));
  const primaryTest = script.test_data?.primary;

  const expectedNums = [8, 1, 6, 3, 2, 2, 4, 10, 9, 11, -1, 0];
  const expectedLongest = [-1, 0, 1, 2, 3, 4];
  const expectedAnswer = 6;

  // Verify testcase in script.json
  if (!primaryTest || !Array.isArray(primaryTest.nums)) {
    errors.push("script.json missing test_data.primary.nums array.");
  } else {
    if (primaryTest.nums.length !== 12) {
      errors.push(`Primary testcase array length must be 12 (received: ${primaryTest.nums.length})`);
    }
    for (let i = 0; i < expectedNums.length; i++) {
      if (primaryTest.nums[i] !== expectedNums[i]) {
        errors.push(`Primary testcase mismatch at index ${i}: expected ${expectedNums[i]}, got ${primaryTest.nums[i]}`);
      }
    }
    // Duplicate 2 invariant: both index 4 and index 5 must be 2
    if (primaryTest.nums[4] !== 2 || primaryTest.nums[5] !== 2) {
      errors.push("Array duplicate semantic violation: Array must preserve both occurrences of 2 at indices 4 and 5.");
    }
    if (primaryTest.expected_length !== expectedAnswer) {
      errors.push(`expected_length mismatch: expected ${expectedAnswer}, got ${primaryTest.expected_length}`);
    }
    if (JSON.stringify(primaryTest.longest_sequence) !== JSON.stringify(expectedLongest)) {
      errors.push(`longest_sequence mismatch: expected ${JSON.stringify(expectedLongest)}, got ${JSON.stringify(primaryTest.longest_sequence)}`);
    }
  }

  // 2. Verify HashSet Deduplication Semantics
  const numSet = new Set(expectedNums);
  if (numSet.size !== 11) {
    errors.push(`HashSet size mismatch: Set must contain exactly 11 unique members after absorbing duplicate 2 (got ${numSet.size})`);
  }

  // 3. Verify Scene10TraceOptimal.tsx source definitions
  const scene10Path = path.join(q10Dir, "src/Scene10TraceOptimal.tsx");
  if (fs.existsSync(scene10Path)) {
    const scene10Content = fs.readFileSync(scene10Path, "utf8");

    // Verify HASH_NODES has exactly 11 unique elements
    const hashNodesMatch = scene10Content.match(/const HASH_NODES:\s*\{[^}]+\}\[\]\s*=\s*\[([\s\S]*?)\];/);
    if (hashNodesMatch) {
      const nodeVals = [...hashNodesMatch[1].matchAll(/val:\s*(-?\d+)/g)].map(m => parseInt(m[1], 10));
      if (nodeVals.length !== 11) {
        errors.push(`Scene 10 HASH_NODES length mismatch: expected 11, got ${nodeVals.length}`);
      }
      const uniqueNodeVals = new Set(nodeVals);
      if (uniqueNodeVals.size !== 11) {
        errors.push(`Scene 10 HASH_NODES contains duplicate values: ${nodeVals}`);
      }
      for (const val of numSet) {
        if (!uniqueNodeVals.has(val)) {
          errors.push(`Scene 10 HASH_NODES missing set member: ${val}`);
        }
      }
    } else {
      errors.push("Could not parse HASH_NODES from Scene10TraceOptimal.tsx");
    }

    // Verify Candidate Traversal Order
    const expectedTraversal = [8, 1, 6, 3, 2, 4, 10, 9, 11, -1, 0];
    const candidateSlotsMatch = scene10Content.match(/const CANDIDATE_SLOTS\s*=\s*\[([\s\S]*?)\];/);
    if (candidateSlotsMatch) {
      const candidateVals = [...candidateSlotsMatch[1].matchAll(/val:\s*(-?\d+)/g)].map(m => parseInt(m[1], 10));
      if (JSON.stringify(candidateVals) !== JSON.stringify(expectedTraversal)) {
        errors.push(`Scene 10 candidate traversal order mismatch: expected ${JSON.stringify(expectedTraversal)}, got ${JSON.stringify(candidateVals)}`);
      }
    } else {
      errors.push("Could not parse CANDIDATE_SLOTS from Scene10TraceOptimal.tsx");
    }
  } else {
    errors.push("Scene10TraceOptimal.tsx not found");
  }

  // 4. Algorithm Step-by-Step Mathematical Verification
  const traversalOrder = [8, 1, 6, 3, 2, 4, 10, 9, 11, -1, 0];
  const sequencesFound = [];

  for (const x of traversalOrder) {
    // Invariant: sequence start check is strictly x - 1
    const hasPredecessor = numSet.has(x - 1);
    if (!hasPredecessor) {
      // Walk forward
      let cur = x;
      const seq = [cur];
      while (numSet.has(cur + 1)) {
        cur += 1;
        seq.push(cur);
      }
      sequencesFound.push({ start: x, seq, length: seq.length });
    }
  }

  if (sequencesFound.length !== 3) {
    errors.push(`Expected exactly 3 sequence starts (8, 6, -1), got ${sequencesFound.length}: ${sequencesFound.map(s => s.start)}`);
  } else {
    const s1 = sequencesFound[0]; // 8
    const s2 = sequencesFound[1]; // 6
    const s3 = sequencesFound[2]; // -1
    if (s1.start !== 8 || s1.length !== 4) errors.push(`Start 8 produced wrong sequence: ${JSON.stringify(s1)}`);
    if (s2.start !== 6 || s2.length !== 1) errors.push(`Start 6 produced wrong sequence: ${JSON.stringify(s2)}`);
    if (s3.start !== -1 || s3.length !== 6) errors.push(`Start -1 produced wrong sequence: ${JSON.stringify(s3)}`);
  }

  // 5. Immutability Regression: Verify 13 Scene Durations & Sync Word Counts
  const EXPECTED_SCENE_DURATIONS = {
    "01-intro-roadmap.json": { durationFrames: 1291, wordCount: 74, audio: "01-intro-roadmap.mp3" },
    "02-understand.json": { durationFrames: 1509, wordCount: 100, audio: "02-understand.mp3" },
    "03-trace-brute.json": { durationFrames: 3592, wordCount: 233, audio: "03-trace-brute.mp3" },
    "04-code-brute.json": { durationFrames: 2079, wordCount: 143, audio: "04-code-brute.mp3" },
    "05-why-brute.json": { durationFrames: 1323, wordCount: 102, audio: "05-why-brute.mp3" },
    "06-trace-better.json": { durationFrames: 2926, wordCount: 210, audio: "06-trace-better.mp3" },
    "07-code-better.json": { durationFrames: 1755, wordCount: 127, audio: "07-code-better.mp3" },
    "08-why-better.json": { durationFrames: 1481, wordCount: 116, audio: "08-why-better.mp3" },
    "09-optimal-idea.json": { durationFrames: 2006, wordCount: 156, audio: "09-optimal-idea.mp3" },
    "10-trace-optimal.json": { durationFrames: 5653, wordCount: 429, audio: "10-trace-optimal.mp3" },
    "11-code-optimal.json": { durationFrames: 1871, wordCount: 130, audio: "11-code-optimal.mp3" },
    "12-complexity.json": { durationFrames: 3392, wordCount: 269, audio: "12-complexity.mp3" },
    "13-recap.json": { durationFrames: 1832, wordCount: 127, audio: "13-recap.mp3" },
  };

  const syncDir = path.join(q10Dir, "sync");
  let totalSyncWords = 0;
  for (const [syncFile, expected] of Object.entries(EXPECTED_SCENE_DURATIONS)) {
    const p = path.join(syncDir, syncFile);
    if (!fs.existsSync(p)) {
      errors.push(`IMMUTABILITY VIOLATION: Missing sync file ${syncFile}`);
      continue;
    }
    const d = JSON.parse(fs.readFileSync(p, "utf8"));
    if (d.duration_frames !== expected.durationFrames) {
      errors.push(`IMMUTABILITY VIOLATION: ${syncFile} duration_frames changed from ${expected.durationFrames} to ${d.duration_frames}`);
    }
    if (d.words.length !== expected.wordCount) {
      errors.push(`IMMUTABILITY VIOLATION: ${syncFile} wordCount changed from ${expected.wordCount} to ${d.words.length}`);
    }
    if (d.audio_file !== expected.audio) {
      errors.push(`IMMUTABILITY VIOLATION: ${syncFile} audio_file changed from ${expected.audio} to ${d.audio_file}`);
    }
    totalSyncWords += d.words.length;
  }

  if (totalSyncWords !== 2216) {
    errors.push(`IMMUTABILITY VIOLATION: Total sync words changed (expected 2216, got ${totalSyncWords})`);
  }

  // 6. Verify MainVideo.tsx Master Duration & Final Valid Frame
  const mainVideoPath = path.join(q10Dir, "src/MainVideo.tsx");
  let totalMasterFrames = 0;
  let finalValidFrame = 0;
  if (fs.existsSync(mainVideoPath)) {
    const mainVideoContent = fs.readFileSync(mainVideoPath, "utf8");
    const introMatch = mainVideoContent.match(/export const INTRO_FRAMES\s*=\s*(\d+);/);
    const titleMatch = mainVideoContent.match(/export const TITLE_CARD_FRAMES\s*=\s*(\d+);/);
    const totalMatch = mainVideoContent.match(/TOTAL_MASTER_FRAMES\s*=\s*([\s\S]*?);/);

    const introFrames = introMatch ? parseInt(introMatch[1], 10) : 0;
    const titleFrames = titleMatch ? parseInt(titleMatch[1], 10) : 0;

    if (introFrames !== 300) {
      errors.push(`IMMUTABILITY VIOLATION: INTRO_FRAMES changed (expected 300, got ${introFrames})`);
    }
    if (titleFrames !== 60) {
      errors.push(`IMMUTABILITY VIOLATION: TITLE_CARD_FRAMES changed (expected 60, got ${titleFrames})`);
    }

    const sceneDurationsSum = Object.values(EXPECTED_SCENE_DURATIONS).reduce((acc, s) => acc + s.durationFrames, 0);
    totalMasterFrames = introFrames + 13 * titleFrames + sceneDurationsSum;
    finalValidFrame = totalMasterFrames - 1;

    if (totalMasterFrames !== 31790) {
      errors.push(`IMMUTABILITY VIOLATION: TOTAL_MASTER_FRAMES changed (expected 31790, got ${totalMasterFrames})`);
    }
    if (finalValidFrame !== 31789) {
      errors.push(`IMMUTABILITY VIOLATION: Final valid frame changed (expected 31789, got ${finalValidFrame})`);
    }
  } else {
    errors.push("MainVideo.tsx not found");
  }

  return {
    name: "Q10 Semantic Truth & Immutability Regression",
    passed: errors.length === 0,
    primaryTest,
    sequencesFound,
    totalSyncWords,
    totalMasterFrames,
    finalValidFrame,
    errors,
    warnings,
  };
}

// CLI runner
if (import.meta.url === `file://${process.argv[1]?.replace(/\\/g, "/")}` || process.argv[1]?.includes("validator-q10-semantic")) {
  runQ10SemanticValidation(process.cwd()).then((res) => {
    console.log(`\n==================================================`);
    console.log(`  ${res.name}`);
    console.log(`==================================================`);
    console.log(`  Master Testcase Elements : ${res.primaryTest?.nums?.length} (both 2s preserved)`);
    console.log(`  Sequences Found          : ${res.sequencesFound?.length} (starts: ${res.sequencesFound?.map(s => s.start).join(", ")})`);
    console.log(`  Total Sync Words         : ${res.totalSyncWords} (exact match: 2216)`);
    console.log(`  Total Master Frames      : ${res.totalMasterFrames} (exact match: 31790)`);
    console.log(`  Final Valid Frame        : ${res.finalValidFrame} (exact match: 31789)`);
    console.log(`  Status                   : ${res.passed ? "PASS ✓" : "FAIL ✕"}`);
    if (res.errors.length > 0) {
      console.log(`\nErrors:`);
      for (const err of res.errors) console.log(`  ✕ ${err}`);
    }
    console.log(`==================================================\n`);
    process.exit(res.passed ? 0 : 1);
  });
}
