import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { INTRO_CONSTANTS } from "../types";

/**
 * GengaCleanup Component (F084–F115)
 * Rebuilt to Section 1 (F95, F105) & Section 6:
 *   F084–F088: Digits rough-draw in cells.
 *   F089–F108: Clean indigo stroke physically sweeps & traces perimeter left->right.
 *   F104–F108: Final cells complete.
 *   F109–F112: Blue rough layer fades, clean array becomes hero.
 *   F113–F115: Small "CLEAN-UP / F084" note appears, with subtle pre-fracture corner tension (1-2px) before detachment.
 */
export const GengaCleanup: React.FC = () => {
  const frame = useCurrentFrame();

  if (frame < 84 || frame > 115) {
    return null;
  }

  // F089-F108: Cleanup sweep progress across all 8 cells
  const sweepProgress = interpolate(frame, [89, 108], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const startX = INTRO_CONSTANTS.ARRAY.SLOTS[0]; // 519
  const endX =
    INTRO_CONSTANTS.ARRAY.SLOTS[INTRO_CONSTANTS.ARRAY.SLOT_COUNT - 1] +
    INTRO_CONSTANTS.ARRAY.CELL_WIDTH; // 1399
  const sweepX = interpolate(sweepProgress, [0, 1], [startX - 10, endX + 10]);

  // F113-F115: Pre-fracture tension (corner offsets 1-2px, top/bottom strokes loosen)
  const preTension = interpolate(frame, [113, 115], [0, 2], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill style={{ pointerEvents: "none" }}>
      {/* Clean Vector Array Layer (clipped to sweepX frontier) */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: 1920,
          height: 1080,
          clipPath: `polygon(0 0, ${sweepX}px 0, ${sweepX + 12}px 50%, ${sweepX}px 100%, 0 100%)`,
        }}
      >
        {INTRO_CONSTANTS.ARRAY.SLOTS.map((slotX, index) => {
          const val = INTRO_CONSTANTS.ARRAY.VALUES[index];
          // Pre-fracture micro-offsets for each cell
          const oddCell = index % 2 === 1;
          const cornerOff = oddCell ? preTension : -preTension;

          return (
            <div
              key={`clean-cell-${index}`}
              style={{
                position: "absolute",
                left: slotX + cornerOff * 0.5,
                top:
                  INTRO_CONSTANTS.ARRAY.CENTER_Y -
                  INTRO_CONSTANTS.ARRAY.CELL_HEIGHT / 2 +
                  (oddCell ? -cornerOff * 0.3 : cornerOff * 0.3),
                width: INTRO_CONSTANTS.ARRAY.CELL_WIDTH,
                height: INTRO_CONSTANTS.ARRAY.CELL_HEIGHT,
              }}
            >
              <svg
                viewBox="0 0 96 96"
                style={{ width: "100%", height: "100%", overflow: "visible" }}
              >
                {/* Clean dark-indigo cell box with pre-fracture looseness */}
                <rect
                  x={2 + cornerOff * 0.2}
                  y={2 - cornerOff * 0.2}
                  width={92}
                  height={92}
                  rx="5"
                  fill="rgba(38, 54, 74, 0.05)"
                  stroke={INTRO_CONSTANTS.COLORS.INDIGO_CLEAN}
                  strokeWidth="3.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                {/* Clean cell value */}
                <text
                  x="48"
                  y="58"
                  textAnchor="middle"
                  fill={INTRO_CONSTANTS.COLORS.INDIGO_CLEAN}
                  fontFamily="JetBrains Mono, Menlo, monospace"
                  fontSize="36"
                  fontWeight="700"
                >
                  {val}
                </text>
                {/* Clean index label */}
                <text
                  x="48"
                  y="124"
                  textAnchor="middle"
                  fill={INTRO_CONSTANTS.COLORS.INDIGO_CLEAN}
                  fontFamily="JetBrains Mono, Menlo, monospace"
                  fontSize="20"
                  fontWeight="600"
                  opacity="0.8"
                >
                  {index}
                </text>
              </svg>
            </div>
          );
        })}
      </div>

      {/* Sweep Leading Edge Visual Indicator (clean-up pencil frontier line) */}
      {frame >= 89 && frame <= 108 && (
        <div
          style={{
            position: "absolute",
            left: sweepX,
            top: INTRO_CONSTANTS.ARRAY.CENTER_Y - 72,
            width: 2.5,
            height: 144,
            backgroundColor: INTRO_CONSTANTS.COLORS.BLUE_PENCIL,
            opacity: 0.75,
            borderRadius: 2,
            boxShadow: `0 0 10px ${INTRO_CONSTANTS.COLORS.BLUE_PENCIL_LIGHT}`,
          }}
        />
      )}
    </AbsoluteFill>
  );
};
