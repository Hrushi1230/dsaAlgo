#!/usr/bin/env node
/**
 * tools/validate-sync.mjs — Foundation V2 Audio Sync Validator CLI
 *
 * Validates real project sync JSON files against exact course invariants.
 *
 * Usage:
 *   # Validate a single sync JSON file
 *   node tools/validate-sync.mjs questions/01-arrays-hashing/010-longest-consecutive-sequence/sync/10-trace-optimal.json
 *
 *   # Validate an entire sync directory
 *   node tools/validate-sync.mjs questions/01-arrays-hashing/010-longest-consecutive-sequence/sync
 *
 *   # Validate multiple directories or files
 *   node tools/validate-sync.mjs questions/01-arrays-hashing/007-top-k-frequent-elements/sync questions/01-arrays-hashing/010-longest-consecutive-sequence/sync
 */

import fs from "node:fs";
import path from "node:path";
import process from "node:process";

const COLOR_RESET = "\x1b[0m";
const COLOR_RED = "\x1b[31m";
const COLOR_GREEN = "\x1b[32m";
const COLOR_YELLOW = "\x1b[33m";
const COLOR_CYAN = "\x1b[36m";
const COLOR_BOLD = "\x1b[1m";

export function validateSync(data, fileName = "unknown") {
  const errors = [];
  const warnings = [];

  if (!data || typeof data !== "object") {
    errors.push({ field: "root", message: "Sync data must be a non-null JSON object." });
    return { valid: false, errors, warnings };
  }

  if (typeof data.audio_file !== "string" || data.audio_file.trim() === "") {
    errors.push({ field: "audio_file", message: "audio_file must be a non-empty string." });
  }

  if (typeof data.duration_ms !== "number" || data.duration_ms < 0) {
    errors.push({ field: "duration_ms", message: "duration_ms must be a non-negative number." });
  }

  if (typeof data.duration_frames !== "number" || data.duration_frames < 0) {
    errors.push({ field: "duration_frames", message: "duration_frames must be a non-negative number." });
  }

  if (typeof data.fps !== "number" || data.fps <= 0) {
    errors.push({ field: "fps", message: "fps must be a positive number." });
  }

  if (!Array.isArray(data.words)) {
    errors.push({ field: "words", message: "words must be an array." });
    return { valid: false, errors, warnings };
  }

  if (typeof data.word_count !== "number" || data.word_count !== data.words.length) {
    errors.push({
      field: "word_count",
      message: `word_count (${data.word_count}) does not match words.length (${data.words.length}).`,
    });
  }

  const fps = typeof data.fps === "number" && data.fps > 0 ? data.fps : 30;
  const durationMs = typeof data.duration_ms === "number" ? data.duration_ms : 0;
  const durationFrames = typeof data.duration_frames === "number" ? data.duration_frames : 0;

  const expectedDurationFrames = Math.round((durationMs * fps) / 1000);
  if (Math.abs(durationFrames - expectedDurationFrames) > 2) {
    warnings.push({
      field: "duration_frames",
      message: `duration_frames (${durationFrames}) deviates from calculated round(duration_ms * fps / 1000) (${expectedDurationFrames}).`,
    });
  }

  for (let i = 0; i < data.words.length; i++) {
    const w = data.words[i];
    if (!w || typeof w !== "object") {
      errors.push({ field: `words[${i}]`, message: "Word entry must be an object." });
      continue;
    }

    if (typeof w.word !== "string" || w.word.trim() === "") {
      errors.push({ field: `words[${i}].word`, message: "Word text must be a non-empty string." });
    }

    if (typeof w.start_ms !== "number" || w.start_ms < 0) {
      errors.push({ field: `words[${i}].start_ms`, message: "start_ms must be non-negative." });
    }

    if (typeof w.end_ms !== "number" || w.end_ms < w.start_ms) {
      errors.push({ field: `words[${i}].end_ms`, message: `end_ms (${w.end_ms}) < start_ms (${w.start_ms}).` });
    }

    if (typeof w.start_frame !== "number" || w.start_frame < 0) {
      errors.push({ field: `words[${i}].start_frame`, message: "start_frame must be non-negative." });
    }

    if (typeof w.end_frame !== "number" || w.end_frame < w.start_frame) {
      errors.push({ field: `words[${i}].end_frame`, message: `end_frame (${w.end_frame}) < start_frame (${w.start_frame}).` });
    }

    if (i > 0) {
      const prev = data.words[i - 1];
      if (w.start_ms < prev.start_ms) {
        errors.push({
          field: `words[${i}].start_ms`,
          message: `Non-monotonic start_ms: word ${i} ("${w.word}", ${w.start_ms}ms) starts before word ${i - 1} ("${prev.word}", ${prev.start_ms}ms).`,
        });
      }

      if (w.start_frame < prev.start_frame) {
        errors.push({
          field: `words[${i}].start_frame`,
          message: `Non-monotonic start_frame: word ${i} (F${w.start_frame}) starts before word ${i - 1} (F${prev.start_frame}).`,
        });
      }

      if (w.start_ms < prev.end_ms) {
        const overlapMs = prev.end_ms - w.start_ms;
        if (overlapMs > 100) {
          warnings.push({
            field: `words[${i}].start_ms`,
            message: `Large overlap (${overlapMs}ms) between word ${i - 1} ("${prev.word}") and word ${i} ("${w.word}").`,
          });
        } else if (overlapMs > 0) {
          warnings.push({
            field: `words[${i}].start_ms`,
            message: `Small aligner overlap (${overlapMs}ms) between word ${i - 1} and word ${i}.`,
          });
        }
      }
    }

    if (durationMs > 0 && w.end_ms > durationMs + 50) {
      errors.push({
        field: `words[${i}].end_ms`,
        message: `Word ${i} ("${w.word}") end_ms (${w.end_ms}ms) exceeds declared audio duration (${durationMs}ms).`,
      });
    }

    if (durationFrames > 0 && w.end_frame > durationFrames + 2) {
      errors.push({
        field: `words[${i}].end_frame`,
        message: `Word ${i} ("${w.word}") end_frame (F${w.end_frame}) exceeds declared duration_frames (F${durationFrames}).`,
      });
    }

    const expectedStartFrame = Math.round((w.start_ms * fps) / 1000);
    const expectedEndFrame = Math.round((w.end_ms * fps) / 1000);

    if (Math.abs(w.start_frame - expectedStartFrame) > 1) {
      warnings.push({
        field: `words[${i}].start_frame`,
        message: `Word ${i} start_frame (${w.start_frame}) differs from round(start_ms * fps / 1000) (${expectedStartFrame}).`,
      });
    }

    if (Math.abs(w.end_frame - expectedEndFrame) > 1) {
      warnings.push({
        field: `words[${i}].end_frame`,
        message: `Word ${i} end_frame (${w.end_frame}) differs from round(end_ms * fps / 1000) (${expectedEndFrame}).`,
      });
    }
  }

  return {
    valid: errors.length === 0,
    errors,
    warnings,
  };
}

function collectJsonFiles(targetPath) {
  const stat = fs.statSync(targetPath);
  if (stat.isFile()) {
    if (targetPath.endsWith(".json") && !targetPath.endsWith(".anchors.json")) {
      return [targetPath];
    }
    return [];
  }
  if (stat.isDirectory()) {
    const results = [];
    const entries = fs.readdirSync(targetPath, { withFileTypes: true });
    for (const entry of entries) {
      const full = path.join(targetPath, entry.name);
      if (entry.isDirectory()) {
        results.push(...collectJsonFiles(full));
      } else if (entry.isFile() && entry.name.endsWith(".json") && !entry.name.endsWith(".anchors.json")) {
        results.push(full);
      }
    }
    return results;
  }
  return [];
}

function runCli() {
  const args = process.argv.slice(2);
  if (args.length === 0) {
    console.log(`${COLOR_BOLD}Foundation V2 Audio Sync Validator${COLOR_RESET}`);
    console.log("Usage: node tools/validate-sync.mjs <file-or-dir> [more files or dirs...]");
    process.exit(0);
  }

  const files = [];
  for (const arg of args) {
    const resolved = path.resolve(arg);
    if (!fs.existsSync(resolved)) {
      console.error(`${COLOR_RED}Error: Path not found: ${arg}${COLOR_RESET}`);
      process.exit(1);
    }
    files.push(...collectJsonFiles(resolved));
  }

  if (files.length === 0) {
    console.log(`${COLOR_YELLOW}No sync JSON files found to validate.${COLOR_RESET}`);
    process.exit(0);
  }

  console.log(`${COLOR_BOLD}${COLOR_CYAN}=== Foundation V2 Audio Sync Validation ===${COLOR_RESET}`);
  console.log(`Found ${files.length} sync file(s) to inspect.\n`);

  let totalErrors = 0;
  let totalWarnings = 0;
  let passedCount = 0;

  for (const file of files) {
    const relative = path.relative(process.cwd(), file);
    try {
      const content = fs.readFileSync(file, "utf8");
      const json = JSON.parse(content);

      // Check if it's a sync file (has audio_file and words)
      if (!json || typeof json !== "object" || !("audio_file" in json) || !("words" in json)) {
        continue; // Skip non-sync JSONs like analysis.json or script.json
      }

      const report = validateSync(json, relative);
      totalErrors += report.errors.length;
      totalWarnings += report.warnings.length;

      if (report.valid) {
        passedCount++;
        const warnTag = report.warnings.length > 0 ? ` (${COLOR_YELLOW}${report.warnings.length} warning(s)${COLOR_RESET})` : "";
        console.log(`${COLOR_GREEN}✓ PASS${COLOR_RESET} [${json.words.length} words, ${json.duration_frames}F @ ${json.fps}fps]: ${relative}${warnTag}`);
      } else {
        console.log(`${COLOR_RED}✗ FAIL${COLOR_RESET} [${report.errors.length} error(s)]: ${relative}`);
        for (const err of report.errors) {
          console.log(`    ${COLOR_RED}ERROR${COLOR_RESET} [${err.field}]: ${err.message}`);
        }
      }

      if (report.warnings.length > 0 && !report.valid) {
        for (const warn of report.warnings) {
          console.log(`    ${COLOR_YELLOW}WARN${COLOR_RESET} [${warn.field}]: ${warn.message}`);
        }
      }
    } catch (err) {
      totalErrors++;
      console.log(`${COLOR_RED}✗ PARSE ERROR${COLOR_RESET}: ${relative} — ${err.message}`);
    }
  }

  console.log(`\n${COLOR_BOLD}Summary:${COLOR_RESET}`);
  console.log(`  Passed: ${passedCount}`);
  console.log(`  Failed: ${files.length - passedCount}`);
  console.log(`  Total Errors: ${totalErrors}`);
  console.log(`  Total Warnings: ${totalWarnings}`);

  if (totalErrors > 0) {
    console.log(`\n${COLOR_RED}Result: VALIDATION FAILED${COLOR_RESET}`);
    process.exit(1);
  } else {
    console.log(`\n${COLOR_GREEN}Result: ALL SYNC FILES VALID${COLOR_RESET}`);
    process.exit(0);
  }
}

// Run CLI if invoked directly
if (import.meta.url === `file://${process.argv[1]}` || process.argv[1]?.endsWith("validate-sync.mjs")) {
  runCli();
}
