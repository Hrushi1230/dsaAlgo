import { useCurrentFrame, interpolate } from "remotion";
import { EASE } from "../lib/anim";
import { fonts, theme } from "../lib/theme";

interface Step {
  /** Frame at which the roll to `value` begins. */
  frame: number;
  value: number;
}

/**
 * A digit-roll counter. Given ordered [{frame, value}] steps, each digit column
 * translates vertically between its old and new glyph so the number *rolls*
 * instead of snapping. Mono font keeps columns aligned.
 */
export const CountUp: React.FC<{
  steps: Step[];
  /** Frames spent rolling per step. */
  rollFrames?: number;
  fontSize?: number;
  color?: string;
  /** Pad to this many digit columns (right-aligned). */
  pad?: number;
}> = ({ steps, rollFrames = 9, fontSize = 48, color = theme.chalkText, pad = 2 }) => {
  const frame = useCurrentFrame();

  // Find current + previous value based on frame.
  let cur = steps[0]?.value ?? 0;
  let prev = cur;
  let stepStart = steps[0]?.frame ?? 0;
  for (let i = 0; i < steps.length; i++) {
    if (frame >= steps[i].frame) {
      cur = steps[i].value;
      prev = i > 0 ? steps[i - 1].value : steps[i].value;
      stepStart = steps[i].frame;
    }
  }

  const roll = interpolate(frame, [stepStart, stepStart + rollFrames], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: EASE,
  });

  const curDigits = String(cur).padStart(pad, " ").split("");
  const prevDigits = String(prev).padStart(pad, " ").split("");
  const colH = fontSize * 1.2;

  return (
    <span
      style={{
        display: "inline-flex",
        fontFamily: fonts.mono,
        fontSize,
        color,
        lineHeight: `${colH}px`,
        height: colH,
      }}
    >
      {curDigits.map((d, i) => {
        const from = prevDigits[i] ?? " ";
        const rolling = from !== d;
        const shift = rolling ? -roll * colH : 0;
        return (
          <span
            key={i}
            style={{ position: "relative", display: "inline-block", height: colH, overflow: "hidden", width: fontSize * 0.62 }}
          >
            <span style={{ position: "absolute", left: 0, top: 0, transform: `translateY(${shift}px)` }}>
              <span style={{ display: "block", height: colH }}>{from}</span>
              <span style={{ display: "block", height: colH }}>{d}</span>
            </span>
          </span>
        );
      })}
    </span>
  );
};
