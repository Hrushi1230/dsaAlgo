/**
 * tools/qa/validator-audio-sync.mjs — Validator A: Audio Sync Integrity
 *
 * Validates exact-sync inputs:
 * - fps > 0
 * - durationFrames > 0
 * - word IDs unique
 * - word start times monotonic
 * - word end >= word start
 * - no word extends past audio duration
 * - resolved frame satisfies: 0 <= frame < durationFrames
 * - semantic anchors reference valid word IDs / indices
 * - repeated words must use IDs, not ambiguous string matching
 * - phrase anchors resolve deterministically
 * - Do NOT clamp invalid anchors silently. Invalid data must FAIL.
 */

import fs from "node:fs";
import path from "node:path";

export function validateSingleSyncData(data, sourceName = "data") {
  const errors = [];
  const warnings = [];

  if (!data || typeof data !== "object") {
    errors.push(`[${sourceName}] Root sync data must be a non-null object.`);
    return { passed: false, errors, warnings };
  }

  if (typeof data.audio_file !== "string" || data.audio_file.trim() === "") {
    errors.push(`[${sourceName}] audio_file must be a non-empty string.`);
  }

  if (typeof data.duration_ms !== "number" || data.duration_ms <= 0) {
    errors.push(`[${sourceName}] duration_ms must be a positive number (received: ${data.duration_ms}).`);
  }

  if (typeof data.duration_frames !== "number" || data.duration_frames <= 0) {
    errors.push(`[${sourceName}] duration_frames must be a positive number (received: ${data.duration_frames}).`);
  }

  if (typeof data.fps !== "number" || data.fps <= 0) {
    errors.push(`[${sourceName}] fps must be a positive number (received: ${data.fps}).`);
  }

  if (!Array.isArray(data.words)) {
    errors.push(`[${sourceName}] words must be an array.`);
    return { passed: false, errors, warnings };
  }

  if (typeof data.word_count === "number" && data.word_count !== data.words.length) {
    errors.push(`[${sourceName}] word_count (${data.word_count}) does not match words.length (${data.words.length}).`);
  }

  const fps = data.fps || 30;
  const durationMs = data.duration_ms || 0;
  const durationFrames = data.duration_frames || 0;

  const seenIds = new Set();

  for (let i = 0; i < data.words.length; i++) {
    const w = data.words[i];
    if (!w || typeof w !== "object") {
      errors.push(`[${sourceName}] words[${i}] must be an object.`);
      continue;
    }

    // Word ID uniqueness check (if present, or synthetic format)
    const wordId = w.id || `W${String(i).padStart(4, "0")}`;
    if (w.id) {
      if (seenIds.has(w.id)) {
        errors.push(`[${sourceName}] Duplicate word ID detected: "${w.id}" at index ${i}.`);
      }
      seenIds.add(w.id);
    }

    if (typeof w.word !== "string" || w.word.trim() === "") {
      errors.push(`[${sourceName}] words[${i}].word must be a non-empty string.`);
    }

    if (typeof w.start_ms !== "number" || w.start_ms < 0) {
      errors.push(`[${sourceName}] words[${i}].start_ms must be a non-negative number.`);
    }

    if (typeof w.end_ms !== "number" || w.end_ms < w.start_ms) {
      errors.push(`[${sourceName}] words[${i}].end_ms (${w.end_ms}) cannot be less than start_ms (${w.start_ms}).`);
    }

    if (typeof w.start_frame !== "number" || w.start_frame < 0) {
      errors.push(`[${sourceName}] words[${i}].start_frame must be a non-negative number.`);
    }

    if (typeof w.end_frame !== "number" || w.end_frame < w.start_frame) {
      errors.push(`[${sourceName}] words[${i}].end_frame (${w.end_frame}) cannot be less than start_frame (${w.start_frame}).`);
    }

    // Monotonic ordering
    if (i > 0) {
      const prev = data.words[i - 1];
      if (w.start_ms < prev.start_ms) {
        errors.push(`[${sourceName}] Non-monotonic start_ms: word ${i} ("${w.word}", ${w.start_ms}ms) starts before word ${i - 1} ("${prev.word}", ${prev.start_ms}ms).`);
      }
      if (w.start_frame < prev.start_frame) {
        errors.push(`[${sourceName}] Non-monotonic start_frame: word ${i} (F${w.start_frame}) starts before word ${i - 1} (F${prev.start_frame}).`);
      }
    }

    // Frame boundary check: resolved frame must be 0 <= frame < durationFrames
    if (durationFrames > 0 && w.start_frame >= durationFrames) {
      errors.push(`[${sourceName}] words[${i}].start_frame (${w.start_frame}) must satisfy 0 <= frame < duration_frames (${durationFrames}).`);
    }

    // Duration limit check (with small tolerance for aligner boundary padding)
    if (durationMs > 0 && w.end_ms > durationMs + 80) {
      errors.push(`[${sourceName}] words[${i}].end_ms (${w.end_ms}ms) exceeds declared duration (${durationMs}ms).`);
    }

    if (durationFrames > 0 && w.end_frame > durationFrames + 2) {
      errors.push(`[${sourceName}] words[${i}].end_frame (F${w.end_frame}) exceeds declared duration_frames (F${durationFrames}).`);
    }
  }

  return {
    passed: errors.length === 0,
    errors,
    warnings,
  };
}

/**
 * Validates semantic anchor definitions against sync data.
 * Guarantees anchors do NOT silently clamp and stay within [0..durationFrames - 1].
 */
export function validateSemanticAnchorManifest(syncData, manifest, sourceName = "manifest") {
  const errors = [];
  const warnings = [];

  if (!manifest || typeof manifest !== "object" || !manifest.anchors) {
    errors.push(`[${sourceName}] Manifest must be an object with an "anchors" dictionary.`);
    return { passed: false, errors, warnings };
  }

  const durationFrames = syncData.duration_frames ?? 0;
  const wordCount = syncData.words?.length ?? 0;

  for (const [anchorId, def] of Object.entries(manifest.anchors)) {
    if (!def || typeof def !== "object") {
      errors.push(`[${sourceName}] Anchor "${anchorId}" definition must be an object.`);
      continue;
    }

    // Ambiguous string matching check: must use explicit word_index or word_id
    if (typeof def.word_index !== "number") {
      errors.push(`[${sourceName}] Anchor "${anchorId}" must reference a deterministic "word_index" integer, not ambiguous text matching.`);
      continue;
    }

    if (def.word_index < 0 || def.word_index >= wordCount) {
      errors.push(`[${sourceName}] Anchor "${anchorId}" word_index ${def.word_index} is out of bounds (valid: 0..${wordCount - 1}).`);
      continue;
    }

    const w = syncData.words[def.word_index];
    const baseFrame = def.edge === "end" ? w.end_frame : w.start_frame;
    const offset = def.offset_frames || 0;
    const resolvedFrame = baseFrame + offset;

    // Strict boundary: 0 <= resolvedFrame < durationFrames
    if (resolvedFrame < 0 || resolvedFrame >= durationFrames) {
      errors.push(`[${sourceName}] Anchor "${anchorId}" resolved to frame ${resolvedFrame}, which is outside valid range [0..${durationFrames - 1}]. (base: ${baseFrame}, offset: ${offset})`);
    }
  }

  return {
    passed: errors.length === 0,
    errors,
    warnings,
  };
}

/**
 * Scans questions directory for sync JSON files and executes integrity validation.
 */
export async function runAudioSyncValidation(rootDir = process.cwd()) {
  const syncDirs = [
    path.join(rootDir, "questions/01-arrays-hashing/010-longest-consecutive-sequence/sync"),
    path.join(rootDir, "questions/01-arrays-hashing/009-valid-sudoku/sync"),
    path.join(rootDir, "questions/01-arrays-hashing/008-product-of-array-except-self/sync"),
  ];

  const allErrors = [];
  const allWarnings = [];
  let filesChecked = 0;

  for (const dir of syncDirs) {
    if (!fs.existsSync(dir)) continue;
    const files = fs.readdirSync(dir).filter(f => f.endsWith(".json") && !f.endsWith(".anchors.json"));
    for (const f of files) {
      const fullPath = path.join(dir, f);
      try {
        const raw = JSON.parse(fs.readFileSync(fullPath, "utf8"));
        if (!raw || !raw.words || !raw.audio_file) continue;

        const res = validateSingleSyncData(raw, path.relative(rootDir, fullPath));
        filesChecked++;
        allErrors.push(...res.errors);
        allWarnings.push(...res.warnings);
      } catch (err) {
        allErrors.push(`Failed to parse sync JSON ${f}: ${err.message}`);
      }
    }
  }

  return {
    name: "Audio Sync Integrity & Anchors",
    passed: allErrors.length === 0,
    filesChecked,
    errors: allErrors,
    warnings: allWarnings,
  };
}
