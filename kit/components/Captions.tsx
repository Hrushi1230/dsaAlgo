import { useCurrentFrame, interpolate } from "remotion";
import { theme, fonts } from "../lib/theme";

/**
 * Karaoke word-highlight captions.
 *
 * Shows the current sentence dim; the word being spoken RIGHT NOW lights up in
 * theme.pivot (yellow) — reinforcing the channel's "yellow = focus" language.
 * Fully synced from a segment's word timings (syncData), so it never drifts.
 *
 * Usage (inside a segment, after Audio):
 *   import syncData from "../lib/syncData.json";
 *   <Captions words={syncData.S2} />
 */

export type CaptionWord = { word: string; start: number; end: number };

type Line = { startIdx: number; endIdx: number; start: number };

/** Group words into readable lines: break on sentence enders, cap length as a safety. */
function buildLines(words: CaptionWord[], maxWords: number): Line[] {
  const lines: Line[] = [];
  let start = 0;
  let count = 0;
  for (let i = 0; i < words.length; i++) {
    count++;
    const bare = words[i].word.replace(/["'’”)\]]+$/, "");
    const endsSentence = /[.?!…]$/.test(bare);
    const last = i === words.length - 1;
    if (endsSentence || count >= maxWords || last) {
      lines.push({ startIdx: start, endIdx: i, start: words[start].start });
      start = i + 1;
      count = 0;
    }
  }
  return lines;
}

export const Captions: React.FC<{
  words: CaptionWord[];
  fps?: number;
  bottom?: number;
  fontSize?: number;
  maxWords?: number;
  maxWidth?: number;
}> = ({ words, fps = 30, bottom = 56, fontSize = 42, maxWords = 11, maxWidth = 1500 }) => {
  const frame = useCurrentFrame();
  if (!words || words.length === 0) return null;

  const t = frame / fps;
  const lastEnd = words[words.length - 1].end;

  // Before the first word, or well after the last — nothing on screen.
  if (t < words[0].start - 0.05 || t > lastEnd + 0.7) return null;

  // Active word = the most recently started word (stays lit through short pauses).
  let activeIdx = 0;
  for (let i = 0; i < words.length; i++) {
    if (words[i].start <= t) activeIdx = i;
    else break;
  }

  const lines = buildLines(words, maxWords);
  const line = lines.find((l) => activeIdx >= l.startIdx && activeIdx <= l.endIdx);
  if (!line) return null;

  // Gentle fade in when the sentence changes, and fade out after the last word.
  const fadeIn = interpolate(t, [line.start, line.start + 0.15], [0.5, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const fadeOut = interpolate(t, [lastEnd + 0.2, lastEnd + 0.7], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const opacity = fadeIn * fadeOut;

  const span: React.ReactNode[] = [];
  for (let i = line.startIdx; i <= line.endIdx; i++) {
    const active = i === activeIdx;
    span.push(
      <span
        key={i}
        style={{
          color: active ? theme.pivot : theme.chalkText,
          opacity: active ? 1 : 0.82,
          textShadow: active
            ? `0 0 14px rgba(255, 209, 102, 0.7), 0 2px 6px rgba(0,0,0,0.9)`
            : `0 2px 6px rgba(0,0,0,0.85)`,
          fontWeight: active ? 800 : 600,
        }}
      >
        {words[i].word}
        {i < line.endIdx ? " " : ""}
      </span>,
    );
  }

  return (
    <div
      style={{
        position: "absolute",
        bottom,
        left: 0,
        right: 0,
        display: "flex",
        justifyContent: "center",
        pointerEvents: "none",
        opacity,
      }}
    >
      <div
        style={{
          maxWidth,
          textAlign: "center",
          fontFamily: fonts.hand,
          fontSize,
          lineHeight: 1.25,
        }}
      >
        {span}
      </div>
    </div>
  );
};
