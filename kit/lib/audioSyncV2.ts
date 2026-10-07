/**
 * @dsa/kit - Foundation V2 Audio Sync Architecture (Phase 3)
 *
 * Locked workflow:
 *   SCRIPT → MP3 → EXACT WORD SYNC JSON → FRAME-WISE PLAN
 *
 * Core principles:
 *   - Text is content. Ordered index is identity.
 *   - Stable derived IDs: W0000, W0001, ...
 *   - No hardcoded FPS (read from sync data).
 *   - Immutable source JSON (zero mutations to raw data).
 *   - Derived pauses between adjacent words.
 *   - Semantic anchor manifests for exact frame-level choreography.
 *   - Single timing source for captions (toCaptionWords adapter).
 */

// =============================================================================
// TYPES
// =============================================================================

/** Raw word format as emitted by audio-to-json aligners (e.g. Whisper) */
export type RawSyncWord = {
  word: string;
  start_ms: number;
  end_ms: number;
  start_frame: number;
  end_frame: number;
  [key: string]: unknown;
};

/** Raw sync JSON document structure */
export type RawSyncData = {
  audio_file: string;
  duration_ms: number;
  duration_frames: number;
  fps: number;
  word_count: number;
  words: RawSyncWord[];
  sentences?: unknown[];
  pauses?: unknown[];
  [key: string]: unknown;
};

/** Normalized V2 word representation with stable identity and multi-unit timings */
export type SyncWordV2 = {
  /** Stable derived ID, zero-padded 4 digits: e.g. "W0000", "W0042" */
  id: string;
  /** 0-based ordered array index */
  index: number;
  /** Spoken text as transcribed */
  word: string;
  /** Millisecond timings */
  startMs: number;
  endMs: number;
  /** Frame timings based on source fps */
  startFrame: number;
  endFrame: number;
  /** Second timings for Remotion audio / captions */
  startSeconds: number;
  endSeconds: number;
  /** Original raw word object preserving any custom aligner properties */
  raw: RawSyncWord;
};

/** Normalized V2 scene sync document */
export type SceneSyncV2 = {
  audioFile: string;
  durationMs: number;
  durationFrames: number;
  fps: number;
  wordCount: number;
  words: SyncWordV2[];
  raw: RawSyncData;
};

/** Educational pause categories based on duration */
export type PauseCategory = "micro" | "natural" | "teaching" | "major";

/** Exact pause derived from adjacent words */
export type DerivedPauseV2 = {
  afterWordIndex: number;
  beforeWordIndex: number;
  afterWord: string;
  beforeWord: string;
  startMs: number;
  endMs: number;
  durationMs: number;
  startFrame: number;
  endFrame: number;
  durationFrames: number;
  category: PauseCategory;
};

/** Multi-word contiguous phrase for titles, comparisons, code lines */
export type PhraseV2 = {
  startIndex: number;
  endIndex: number;
  startWordId: string;
  endWordId: string;
  text: string;
  startFrame: number;
  endFrame: number;
  startMs: number;
  endMs: number;
  startSeconds: number;
  endSeconds: number;
  durationFrames: number;
  durationMs: number;
  words: SyncWordV2[];
};

/** Semantic anchor edge: whether to attach to the start or end of the word */
export type SyncAnchorEdge = "start" | "end";

/** Individual semantic anchor definition */
export type SyncAnchorDef = {
  word_index: number;
  edge: SyncAnchorEdge;
  offset_frames?: number;
  trace_steps?: string[];
  note?: string;
};

/** Semantic anchor manifest document schema (V2) */
export type SyncAnchorManifestV2 = {
  version?: number;
  scene?: string;
  audio_file?: string;
  anchors: Record<string, SyncAnchorDef>;
  [key: string]: unknown;
};

/** Resolved semantic anchor ready for scene choreography */
export type ResolvedAnchorV2 = {
  id: string;
  wordIndex: number;
  wordId: string;
  wordText: string;
  edge: SyncAnchorEdge;
  offsetFrames: number;
  baseFrame: number;
  frame: number;
  traceSteps?: string[];
  note?: string;
};

/** Word timing shape expected by kit/components/Captions.tsx */
export type CaptionWord = {
  word: string;
  start: number; // in seconds
  end: number;   // in seconds
};

/** Individual validation issue */
export type ValidationIssue = {
  severity: "error" | "warning";
  field: string;
  wordIndex?: number;
  message: string;
  offendingValue?: unknown;
};

/** Validation report */
export type ValidationResult = {
  valid: boolean;
  errors: ValidationIssue[];
  warnings: ValidationIssue[];
};

// =============================================================================
// STABLE ID HELPERS
// =============================================================================

/** Format 0-based word index into stable ID (e.g. 0 -> "W0000", 42 -> "W0042") */
export function formatWordId(index: number): string {
  return `W${String(index).padStart(4, "0")}`;
}

/** Parse stable word ID back to integer index */
export function parseWordId(id: string): number {
  const match = id.match(/^W(\d+)$/);
  if (!match) {
    throw new Error(`Invalid word ID format: "${id}". Expected "W0000" pattern.`);
  }
  return parseInt(match[1], 10);
}

// =============================================================================
// VALIDATOR
// =============================================================================

/**
 * Validates raw sync data against exact course invariants without modifying the source.
 * Catches out-of-order timings, malformed intervals, count mismatches, and drift.
 */
export function validateSyncData(data: unknown): ValidationResult {
  const errors: ValidationIssue[] = [];
  const warnings: ValidationIssue[] = [];

  if (!data || typeof data !== "object") {
    errors.push({
      severity: "error",
      field: "root",
      message: "Sync data must be a non-null object.",
      offendingValue: data,
    });
    return { valid: false, errors, warnings };
  }

  const raw = data as Partial<RawSyncData>;

  // 1. Metadata checks
  if (typeof raw.audio_file !== "string" || raw.audio_file.trim() === "") {
    errors.push({
      severity: "error",
      field: "audio_file",
      message: "audio_file must be a non-empty string.",
      offendingValue: raw.audio_file,
    });
  }

  if (typeof raw.duration_ms !== "number" || raw.duration_ms < 0) {
    errors.push({
      severity: "error",
      field: "duration_ms",
      message: "duration_ms must be a non-negative number.",
      offendingValue: raw.duration_ms,
    });
  }

  if (typeof raw.duration_frames !== "number" || raw.duration_frames < 0) {
    errors.push({
      severity: "error",
      field: "duration_frames",
      message: "duration_frames must be a non-negative number.",
      offendingValue: raw.duration_frames,
    });
  }

  if (typeof raw.fps !== "number" || raw.fps <= 0) {
    errors.push({
      severity: "error",
      field: "fps",
      message: "fps must be a positive number.",
      offendingValue: raw.fps,
    });
  }

  if (!Array.isArray(raw.words)) {
    errors.push({
      severity: "error",
      field: "words",
      message: "words must be an array.",
      offendingValue: raw.words,
    });
    return { valid: false, errors, warnings };
  }

  if (typeof raw.word_count !== "number" || raw.word_count !== raw.words.length) {
    errors.push({
      severity: "error",
      field: "word_count",
      message: `word_count (${raw.word_count}) does not match words array length (${raw.words.length}).`,
      offendingValue: raw.word_count,
    });
  }

  const fps = typeof raw.fps === "number" && raw.fps > 0 ? raw.fps : 30;
  const durationMs = typeof raw.duration_ms === "number" ? raw.duration_ms : 0;
  const durationFrames = typeof raw.duration_frames === "number" ? raw.duration_frames : 0;

  // Duration consistency check
  const expectedDurationFrames = Math.round((durationMs * fps) / 1000);
  if (Math.abs(durationFrames - expectedDurationFrames) > 2) {
    warnings.push({
      severity: "warning",
      field: "duration_frames",
      message: `duration_frames (${durationFrames}) deviates from calculated round(duration_ms * fps / 1000) (${expectedDurationFrames}).`,
      offendingValue: durationFrames,
    });
  }

  // 2. Word-level checks
  for (let i = 0; i < raw.words.length; i++) {
    const w = raw.words[i];
    if (!w || typeof w !== "object") {
      errors.push({
        severity: "error",
        field: `words[${i}]`,
        wordIndex: i,
        message: "Word entry must be an object.",
        offendingValue: w,
      });
      continue;
    }

    if (typeof w.word !== "string" || w.word.trim() === "") {
      errors.push({
        severity: "error",
        field: `words[${i}].word`,
        wordIndex: i,
        message: "Word text must be a non-empty string.",
        offendingValue: w.word,
      });
    }

    if (typeof w.start_ms !== "number" || w.start_ms < 0) {
      errors.push({
        severity: "error",
        field: `words[${i}].start_ms`,
        wordIndex: i,
        message: "start_ms must be a non-negative number.",
        offendingValue: w.start_ms,
      });
    }

    if (typeof w.end_ms !== "number" || w.end_ms < w.start_ms) {
      errors.push({
        severity: "error",
        field: `words[${i}].end_ms`,
        wordIndex: i,
        message: `end_ms (${w.end_ms}) cannot be less than start_ms (${w.start_ms}).`,
        offendingValue: w.end_ms,
      });
    }

    if (typeof w.start_frame !== "number" || w.start_frame < 0) {
      errors.push({
        severity: "error",
        field: `words[${i}].start_frame`,
        wordIndex: i,
        message: "start_frame must be a non-negative number.",
        offendingValue: w.start_frame,
      });
    }

    if (typeof w.end_frame !== "number" || w.end_frame < w.start_frame) {
      errors.push({
        severity: "error",
        field: `words[${i}].end_frame`,
        wordIndex: i,
        message: `end_frame (${w.end_frame}) cannot be less than start_frame (${w.start_frame}).`,
        offendingValue: w.end_frame,
      });
    }

    // Monotonic ordering checks
    if (i > 0) {
      const prev = raw.words[i - 1];
      if (w.start_ms < prev.start_ms) {
        errors.push({
          severity: "error",
          field: `words[${i}].start_ms`,
          wordIndex: i,
          message: `Non-monotonic start_ms: word ${i} (${w.start_ms}ms) starts before word ${i - 1} (${prev.start_ms}ms).`,
          offendingValue: w.start_ms,
        });
      }

      if (w.start_frame < prev.start_frame) {
        errors.push({
          severity: "error",
          field: `words[${i}].start_frame`,
          wordIndex: i,
          message: `Non-monotonic start_frame: word ${i} (F${w.start_frame}) starts before word ${i - 1} (F${prev.start_frame}).`,
          offendingValue: w.start_frame,
        });
      }

      // Overlap policy
      if (w.start_ms < prev.end_ms) {
        const overlapMs = prev.end_ms - w.start_ms;
        if (overlapMs > 100) {
          warnings.push({
            severity: "warning",
            field: `words[${i}].start_ms`,
            wordIndex: i,
            message: `Large overlap (${overlapMs}ms) detected between word ${i - 1} ("${prev.word}") and word ${i} ("${w.word}").`,
            offendingValue: overlapMs,
          });
        } else if (overlapMs > 0) {
          warnings.push({
            severity: "warning",
            field: `words[${i}].start_ms`,
            wordIndex: i,
            message: `Small aligner overlap (${overlapMs}ms) between word ${i - 1} and word ${i}.`,
            offendingValue: overlapMs,
          });
        }
      }
    }

    // Duration bounds checks (with 50ms / 2 frames tolerance for rounding)
    if (durationMs > 0 && w.end_ms > durationMs + 50) {
      errors.push({
        severity: "error",
        field: `words[${i}].end_ms`,
        wordIndex: i,
        message: `Word end_ms (${w.end_ms}ms) exceeds declared audio duration (${durationMs}ms).`,
        offendingValue: w.end_ms,
      });
    }

    if (durationFrames > 0 && w.end_frame > durationFrames + 2) {
      errors.push({
        severity: "error",
        field: `words[${i}].end_frame`,
        wordIndex: i,
        message: `Word end_frame (F${w.end_frame}) exceeds declared duration_frames (F${durationFrames}).`,
        offendingValue: w.end_frame,
      });
    }

    // ms ↔ frame consistency checks (allow ±1 frame normal rounding)
    const expectedStartFrame = Math.round((w.start_ms * fps) / 1000);
    const expectedEndFrame = Math.round((w.end_ms * fps) / 1000);

    if (Math.abs(w.start_frame - expectedStartFrame) > 1) {
      warnings.push({
        severity: "warning",
        field: `words[${i}].start_frame`,
        wordIndex: i,
        message: `Word ${i} start_frame (${w.start_frame}) differs from round(start_ms * fps / 1000) (${expectedStartFrame}).`,
        offendingValue: w.start_frame,
      });
    }

    if (Math.abs(w.end_frame - expectedEndFrame) > 1) {
      warnings.push({
        severity: "warning",
        field: `words[${i}].end_frame`,
        wordIndex: i,
        message: `Word ${i} end_frame (${w.end_frame}) differs from round(end_ms * fps / 1000) (${expectedEndFrame}).`,
        offendingValue: w.end_frame,
      });
    }
  }

  return {
    valid: errors.length === 0,
    errors,
    warnings,
  };
}

// =============================================================================
// NORMALIZER
// =============================================================================

/**
 * Normalizes raw sync JSON into a strongly-typed SceneSyncV2 object.
 * Stable IDs (W0000, W0001, ...) and seconds timing are derived in-memory.
 * Source JSON remains completely unmodified.
 */
export function normalizeSyncData(
  raw: RawSyncData,
  options?: { validate?: boolean }
): SceneSyncV2 {
  if (options?.validate !== false) {
    const report = validateSyncData(raw);
    if (!report.valid) {
      const errorSummary = report.errors
        .map((e) => `[${e.field}] ${e.message}`)
        .join("; ");
      throw new Error(`Sync data validation failed for "${raw.audio_file || 'unknown'}": ${errorSummary}`);
    }
  }

  const fps = raw.fps || 30;
  const words: SyncWordV2[] = (raw.words || []).map((w, index) => ({
    id: formatWordId(index),
    index,
    word: w.word,
    startMs: w.start_ms,
    endMs: w.end_ms,
    startFrame: w.start_frame,
    endFrame: w.end_frame,
    startSeconds: w.start_ms / 1000,
    endSeconds: w.end_ms / 1000,
    raw: w,
  }));

  return {
    audioFile: raw.audio_file,
    durationMs: raw.duration_ms,
    durationFrames: raw.duration_frames,
    fps,
    wordCount: words.length,
    words,
    raw,
  };
}

// =============================================================================
// PAUSE DERIVATION
// =============================================================================

/**
 * Classifies silence duration into educational pause category.
 *   - micro:    < 150 ms (natural inter-word gap)
 *   - natural:  150–299 ms (short breathing / clause pause)
 *   - teaching: 300–699 ms (intentional comprehension / code hold)
 *   - major:    >= 700 ms (transition / section boundary hold)
 */
export function categorizePause(durationMs: number): PauseCategory {
  if (durationMs < 150) return "micro";
  if (durationMs < 300) return "natural";
  if (durationMs < 700) return "teaching";
  return "major";
}

/**
 * Derives exact pauses directly from adjacent words.
 * Works even when the raw sync file does not include a `pauses` block.
 */
export function derivePauses(sync: SceneSyncV2 | RawSyncData): DerivedPauseV2[] {
  const words: Array<{ word: string; end_ms?: number; endMs?: number; start_ms?: number; startMs?: number; end_frame?: number; endFrame?: number; start_frame?: number; startFrame?: number }> =
    "words" in sync ? (sync.words as any) : [];

  const pauses: DerivedPauseV2[] = [];

  for (let i = 0; i < words.length - 1; i++) {
    const cur = words[i];
    const nxt = words[i + 1];

    const curEndMs = cur.endMs ?? cur.end_ms ?? 0;
    const nxtStartMs = nxt.startMs ?? nxt.start_ms ?? 0;
    const gapMs = nxtStartMs - curEndMs;

    const curEndFrame = cur.endFrame ?? cur.end_frame ?? 0;
    const nxtStartFrame = nxt.startFrame ?? nxt.start_frame ?? 0;
    const gapFrames = nxtStartFrame - curEndFrame;

    if (gapMs > 0 || gapFrames > 0) {
      pauses.push({
        afterWordIndex: i,
        beforeWordIndex: i + 1,
        afterWord: cur.word,
        beforeWord: nxt.word,
        startMs: curEndMs,
        endMs: nxtStartMs,
        durationMs: Math.max(0, gapMs),
        startFrame: curEndFrame,
        endFrame: nxtStartFrame,
        durationFrames: Math.max(0, gapFrames),
        category: categorizePause(gapMs),
      });
    }
  }

  return pauses;
}

/**
 * Returns the derived pause immediately following the specified word index, or null if no gap exists.
 */
export function pauseAfter(
  sync: SceneSyncV2,
  wordIndex: number
): DerivedPauseV2 | null {
  if (wordIndex < 0 || wordIndex >= sync.words.length - 1) return null;
  const cur = sync.words[wordIndex];
  const nxt = sync.words[wordIndex + 1];
  const gapMs = nxt.startMs - cur.endMs;
  const gapFrames = nxt.startFrame - cur.endFrame;

  if (gapMs <= 0 && gapFrames <= 0) return null;

  return {
    afterWordIndex: wordIndex,
    beforeWordIndex: wordIndex + 1,
    afterWord: cur.word,
    beforeWord: nxt.word,
    startMs: cur.endMs,
    endMs: nxt.startMs,
    durationMs: Math.max(0, gapMs),
    startFrame: cur.endFrame,
    endFrame: nxt.startFrame,
    durationFrames: Math.max(0, gapFrames),
    category: categorizePause(gapMs),
  };
}

// =============================================================================
// WORD & PHRASE ACCESSORS
// =============================================================================

/** Get a single normalized word by exact index */
export function word(sync: SceneSyncV2, index: number): SyncWordV2 {
  if (index < 0 || index >= sync.words.length) {
    throw new Error(
      `Word index ${index} out of bounds for scene "${sync.audioFile}" (wordCount: ${sync.wordCount})`
    );
  }
  return sync.words[index];
}

/** Exact start frame of a word by index, with optional frame offset */
export function wordStartFrame(
  sync: SceneSyncV2,
  index: number,
  offsetFrames = 0
): number {
  return word(sync, index).startFrame + offsetFrames;
}

/** Exact end frame of a word by index, with optional frame offset */
export function wordEndFrame(
  sync: SceneSyncV2,
  index: number,
  offsetFrames = 0
): number {
  return word(sync, index).endFrame + offsetFrames;
}

/**
 * Resolves a contiguous phrase of words from startIndex through endIndex (inclusive).
 */
export function phraseRange(
  sync: SceneSyncV2,
  startIndex: number,
  endIndex: number
): PhraseV2 {
  if (startIndex < 0 || startIndex >= sync.words.length) {
    throw new Error(`phraseRange: startIndex ${startIndex} is out of bounds (wordCount: ${sync.wordCount})`);
  }
  if (endIndex < startIndex || endIndex >= sync.words.length) {
    throw new Error(
      `phraseRange: endIndex ${endIndex} is invalid (startIndex: ${startIndex}, wordCount: ${sync.wordCount})`
    );
  }

  const slice = sync.words.slice(startIndex, endIndex + 1);
  const first = slice[0];
  const last = slice[slice.length - 1];

  return {
    startIndex,
    endIndex,
    startWordId: first.id,
    endWordId: last.id,
    text: slice.map((w) => w.word).join(" "),
    startFrame: first.startFrame,
    endFrame: last.endFrame,
    startMs: first.startMs,
    endMs: last.endMs,
    startSeconds: first.startSeconds,
    endSeconds: last.endSeconds,
    durationFrames: last.endFrame - first.startFrame,
    durationMs: last.endMs - first.startMs,
    words: slice,
  };
}

/** Start frame of a phrase, with optional offset */
export function phraseStartFrame(
  sync: SceneSyncV2,
  startIndex: number,
  offsetFrames = 0
): number {
  return wordStartFrame(sync, startIndex, offsetFrames);
}

/** End frame of a phrase, with optional offset */
export function phraseEndFrame(
  sync: SceneSyncV2,
  endIndex: number,
  offsetFrames = 0
): number {
  return wordEndFrame(sync, endIndex, offsetFrames);
}

// =============================================================================
// SEMANTIC ANCHOR MANIFEST RESOLUTION
// =============================================================================

/**
 * Resolves a semantic anchor from a manifest against normalized scene sync.
 */
export function resolveAnchor(
  sync: SceneSyncV2,
  manifest: SyncAnchorManifestV2,
  anchorId: string
): ResolvedAnchorV2 {
  const def = manifest.anchors?.[anchorId];
  if (!def) {
    const available = manifest.anchors ? Object.keys(manifest.anchors).join(", ") : "none";
    throw new Error(
      `Semantic anchor "${anchorId}" not found in manifest for scene "${manifest.scene || sync.audioFile}". Available anchors: [${available}]`
    );
  }

  const w = word(sync, def.word_index);
  const baseFrame = def.edge === "end" ? w.endFrame : w.startFrame;
  const offsetFrames = def.offset_frames || 0;
  const frame = baseFrame + offsetFrames;

  // Hard bounds validation: 0 <= resolvedFrame < durationFrames (Remotion frames are 0..durationFrames-1)
  if (frame < 0 || frame >= sync.durationFrames) {
    throw new Error(
      `Semantic anchor "${anchorId}" resolved out of bounds: frame ${frame} is outside valid range [0..${sync.durationFrames - 1}]. ` +
      `Anchor ID: "${anchorId}", Word Index: ${def.word_index}, Edge: "${def.edge}", ` +
      `Source Frame: ${baseFrame}, Offset: ${offsetFrames}, Resolved Frame: ${frame}, ` +
      `Valid Frame Range: 0..${sync.durationFrames - 1} (duration_frames: ${sync.durationFrames}).`
    );
  }

  return {
    id: anchorId,
    wordIndex: def.word_index,
    wordId: w.id,
    wordText: w.word,
    edge: def.edge,
    offsetFrames,
    baseFrame,
    frame,
    traceSteps: def.trace_steps,
    note: def.note,
  };
}

/**
 * Returns the exact frame number for a semantic anchor in the manifest.
 */
export function resolveAnchorFrame(
  sync: SceneSyncV2,
  manifest: SyncAnchorManifestV2,
  anchorId: string
): number {
  return resolveAnchor(sync, manifest, anchorId).frame;
}

// =============================================================================
// CAPTION & DURATION ADAPTERS
// =============================================================================

/**
 * Converts sync data to the CaptionWord[] format expected by kit/components/Captions.tsx.
 * Guarantees zero timing drift between narration and karaoke captions.
 */
export function toCaptionWords(sync: SceneSyncV2 | RawSyncData): CaptionWord[] {
  const rawWords = "words" in sync ? sync.words : [];
  return rawWords.map((w: any) => ({
    word: w.word,
    start: (w.startSeconds ?? (w.start_ms / 1000)),
    end: (w.endSeconds ?? (w.end_ms / 1000)),
  }));
}

/**
 * Returns the validated scene duration in frames from sync metadata.
 */
export function sceneDurationFrames(sync: SceneSyncV2 | RawSyncData): number {
  return "durationFrames" in sync ? sync.durationFrames : (sync.duration_frames ?? 0);
}

// =============================================================================
// CONVENIENCE FACTORY
// =============================================================================

/**
 * Creates bound V2 helper methods for a specific scene sync and optional anchor manifest.
 * Ideal for direct consumption inside Remotion scene components.
 */
export function createSyncHelpersV2(
  syncRaw: RawSyncData,
  manifestRaw?: SyncAnchorManifestV2
) {
  const sync = normalizeSyncData(syncRaw);
  const pauses = derivePauses(sync);
  const captionWords = toCaptionWords(sync);

  return {
    sync,
    fps: sync.fps,
    durationFrames: sync.durationFrames,
    durationMs: sync.durationMs,
    wordCount: sync.wordCount,
    captionWords,
    pauses,

    // Word helpers
    word: (index: number) => word(sync, index),
    wordStartFrame: (index: number, offset = 0) => wordStartFrame(sync, index, offset),
    wordEndFrame: (index: number, offset = 0) => wordEndFrame(sync, index, offset),

    // Phrase helpers
    phrase: (startIndex: number, endIndex: number) => phraseRange(sync, startIndex, endIndex),
    phraseStartFrame: (startIndex: number, offset = 0) => phraseStartFrame(sync, startIndex, offset),
    phraseEndFrame: (endIndex: number, offset = 0) => phraseEndFrame(sync, endIndex, offset),

    // Pause helpers
    pauseAfter: (index: number) => pauseAfter(sync, index),

    // Semantic anchor helpers
    anchor: (anchorId: string) => {
      if (!manifestRaw) {
        throw new Error(`Cannot resolve anchor "${anchorId}": No anchor manifest was provided to createSyncHelpersV2.`);
      }
      return resolveAnchor(sync, manifestRaw, anchorId);
    },
    anchorFrame: (anchorId: string) => {
      if (!manifestRaw) {
        throw new Error(`Cannot resolve anchorFrame "${anchorId}": No anchor manifest was provided to createSyncHelpersV2.`);
      }
      return resolveAnchorFrame(sync, manifestRaw, anchorId);
    },

    // Duration helper
    sceneDurationFrames: () => sceneDurationFrames(sync),
  };
}
