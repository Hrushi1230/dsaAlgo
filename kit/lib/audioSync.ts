/**
 * @dsa/kit - Legacy Audio Sync Helpers
 *
 * Preserved for backward compatibility with existing scenes.
 * For new Foundation V2 scenes, use `@dsa/kit/lib/audioSyncV2` which implements
 * the exact sync architecture with stable word IDs and semantic anchor manifests.
 */

const FPS_VAL = 30;

export type WordSync = {
  word: string;
  start: number;
  end: number;
};

export type SyncData = Record<string, WordSync[]>;

/**
 * Legacy word→frame helper factory bound to segment-based sync dictionary.
 *
 * @deprecated For new Foundation V2 scenes, use `createSyncHelpersV2` from
 * `@dsa/kit/lib/audioSyncV2`, which uses stable word indices and semantic anchor
 * manifests rather than ambiguous text-prefix search.
 */
export function createWordFrameHelpers(syncDataRaw: SyncData) {
  /**
   * Returns the exact frame number for the START of a specific word in the
   * narration audio. Two-pass search: exact prefix match first, then substring fallback.
   *
   * @deprecated Use `wordStartFrame` or `anchorFrame` from V2 sync helpers.
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

  /**
   * Returns the END frame of a specific word (useful for hold calculations).
   *
   * @deprecated Use `wordEndFrame` or `anchorFrame` with edge: 'end' from V2 sync helpers.
   */
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
