import { useCurrentFrame, interpolate } from "remotion";
import { theme, fonts } from "../lib/theme";
import { CHALK_FILTER_ID } from "../lib/chalk";

/**
 * Text written in chalk, letter-by-letter, like a teacher writing on a board.
 *
 * Per the official Remotion text-animations rule:
 *   "Always use string slicing for typewriter effects. Never use per-character
 *    opacity."
 * So the reveal is driven by slicing the string based on the current frame —
 * each character appears in order. A chalk "tip" cursor rides the writing edge.
 *
 * The chalk LOOK comes from the chalk SVG filter (roughened edges), the
 * handwriting font, and a powdery text-shadow — not from the reveal mechanism.
 */
export const ChalkText: React.FC<{
  children: React.ReactNode;
  /** Frame at which writing begins (local to the segment/sequence). */
  startFrame: number;
  /** Frames spent writing EACH character. */
  charFrames?: number;
  fontSize?: number;
  color?: string;
  /** Use the handwriting font (default) or mono (for code/numbers). */
  font?: "hand" | "mono";
  /** Show the chalk-tip cursor while writing (default true). */
  cursor?: boolean;
  style?: React.CSSProperties;
}> = ({
  children,
  startFrame,
  charFrames = 2.5,
  fontSize = 64,
  color = theme.chalkText,
  font = "hand",
  cursor = true,
  style,
}) => {
    const frame = useCurrentFrame();
    const local = frame - startFrame;

    const rawText =
      typeof children === "string"
        ? children
        : Array.isArray(children)
        ? children.join("")
        : children != null
        ? String(children)
        : "";

    const typedChars =
      local < 0
        ? 0
        : Math.min(rawText.length, Math.floor(local / charFrames));
    const typed = rawText.slice(0, typedChars);
    const isWriting = typedChars < rawText.length && local >= 0;

    // Chalk-tip cursor blink.
    const blink = 16;
    const cursorOpacity = interpolate(
      frame % blink,
      [0, blink / 2, blink],
      [1, 0.2, 1],
      { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
    );

    const fontFamily = font === "mono" ? fonts.mono : fonts.hand;

    const untyped = rawText.slice(typedChars);

    return (
      <span
        style={{
          fontFamily,
          fontSize,
          color,
          // Chalk look: roughened edges + powdery glow.
          filter: `url(#${CHALK_FILTER_ID})`,
          textShadow: `0 0 1.5px ${color}, 0 1px 0 rgba(0,0,0,0.18)`,
          letterSpacing: font === "hand" ? 1 : 0,
          whiteSpace: style?.whiteSpace ?? "nowrap",
          display: "inline-flex",
          alignItems: "center",
          textAlign: "left",
          lineHeight: 1.15,
          ...style,
        }}
      >
        <span>{typed}</span>
        {cursor && isWriting && (
          <span style={{ opacity: cursorOpacity, color, marginLeft: 2 }}>{"\u258C"}</span>
        )}
        <span style={{ visibility: "hidden" }}>{untyped}</span>
      </span>
    );
  };
