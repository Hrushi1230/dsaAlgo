const FPS_VAL = 30;

type WordSync = {
  word: string;
  start: number;
  end: number;
};

export type SyncData = Record<string, WordSync[]>;

/**
 * Build the word→frame helpers for one video, bound to that video's sync data.
 * Each video wires its own `syncData.json` in a thin local `lib/audioSync.ts`:
 *
 *   import { createWordFrameHelpers } from "@dsa/kit/lib/audioSync";
 *   const syncData = require("./syncData.json");
 *   export const { getWordFrame, getWordEndFrame } = createWordFrameHelpers(syncData);
 */
export function createWordFrameHelpers(syncDataRaw: SyncData) {
  /**
   * Returns the exact frame number for the START of a specific word in the
   * narration audio. Two-pass search: exact prefix match first (so "Gone"
   * never matches a search for "One"), then substring fallback.
   */
  function getWordFrame(
    segment: string,
    wordPrefix: string,
    occurrenceIndex = 0,
    offsetFrames = 0,
  ): number {
    const words = syncDataRaw[segment];
    if (!words) {
      console.warn(`No sync data for segment ${segment}`);
      return 0;
    }
    const searchLower = wordPrefix.toLowerCase().replace(/[^a-z0-9]/g, "");

    let count = 0;
    for (const w of words) {
      const cleanWord = w.word.toLowerCase().replace(/[^a-z0-9]/g, "");
      if (cleanWord.startsWith(searchLower)) {
        if (count === occurrenceIndex) return Math.round(w.start * FPS_VAL) + offsetFrames;
        count++;
      }
    }
    count = 0;
    for (const w of words) {
      const cleanWord = w.word.toLowerCase().replace(/[^a-z0-9]/g, "");
      if (cleanWord.includes(searchLower)) {
        if (count === occurrenceIndex) return Math.round(w.start * FPS_VAL) + offsetFrames;
        count++;
      }
    }
    console.warn(`Word '${wordPrefix}' (occurrence ${occurrenceIndex}) not found in ${segment}`);
    return 0;
  }

  /** Returns the END frame of a specific word (useful for hold calculations). */
  function getWordEndFrame(
    segment: string,
    wordPrefix: string,
    occurrenceIndex = 0,
    offsetFrames = 0,
  ): number {
    const words = syncDataRaw[segment];
    if (!words) {
      console.warn(`No sync data for segment ${segment}`);
      return 0;
    }
    const searchLower = wordPrefix.toLowerCase().replace(/[^a-z0-9]/g, "");

    let count = 0;
    for (const w of words) {
      const cleanWord = w.word.toLowerCase().replace(/[^a-z0-9]/g, "");
      if (cleanWord.startsWith(searchLower)) {
        if (count === occurrenceIndex) return Math.round(w.end * FPS_VAL) + offsetFrames;
        count++;
      }
    }
    count = 0;
    for (const w of words) {
      const cleanWord = w.word.toLowerCase().replace(/[^a-z0-9]/g, "");
      if (cleanWord.includes(searchLower)) {
        if (count === occurrenceIndex) return Math.round(w.end * FPS_VAL) + offsetFrames;
        count++;
      }
    }
    console.warn(`Word '${wordPrefix}' end (occurrence ${occurrenceIndex}) not found in ${segment}`);
    return 0;
  }

  return { getWordFrame, getWordEndFrame };
}
