import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { INTRO_CONSTANTS } from "../types";

/**
 * CodeToArray Component (F052–F115)
 * Rebuilt strictly to Section 2, 6 & 7 of the Production Plan and Change Bible:
 *   F052–F063: Left bracket [ at slot 0 (519) and right bracket ] at slot 7 (1399).
 *   F064–F073: Left bracket straightens and closes into Cell 0 (96×96).
 *   F074–F083: Cells 1..7 populate sequentially in their discrete 96×96 slots matching SLOTS[i].
 *   F084–F088: Rough blue-pencil digits (2, 7, 11, 15, 20, 28, 35, 42) and indices appear.
 *   F089–F115: Clean array sweep in GengaCleanup traces over these rough cells and digits.
 *   F109–F112: Rough layer underdrawing fades 18% -> 0%.
 */
export const CodeToArray: React.FC = () => {
  const frame = useCurrentFrame();

  if (frame < 52 || frame > 115) {
    return null;
  }

  // Geometry constants
  const cellW = INTRO_CONSTANTS.ARRAY.CELL_WIDTH; // 96
  const cellH = INTRO_CONSTANTS.ARRAY.CELL_HEIGHT; // 96
  const topY = INTRO_CONSTANTS.ARRAY.CENTER_Y - cellH / 2; // 472
  const botY = INTRO_CONSTANTS.ARRAY.CENTER_Y + cellH / 2; // 568
  const startX = INTRO_CONSTANTS.ARRAY.SLOTS[0]; // 519

  // F052–F063: Bracket morph progress
  const bracketMorphProg = interpolate(frame, [52, 63], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // F064–F073: Straighten arms and form first cell [ ]
  const cell0StraightenProg = interpolate(frame, [64, 73], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // F084-F088: Rough digits draw in (opacity 0 -> 0.8)
  const digitsOpacity = interpolate(frame, [84, 88], [0, 0.8], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Rough array underdrawing opacity (100% until F084, dims to 18% F085-F111, vanishes at F112)
  const roughOpacity = interpolate(
    frame,
    [83, 84, 103, 111, 112],
    [1, 1, 0.18, 0.18, 0],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    }
  );

  // 15fps hand-drawn jitter for genga feeling
  const boilIndex = Math.floor(frame / 2) % 4;
  const jitterX = [0, 0.4, -0.4, 0.2][boilIndex];
  const jitterY = [0, -0.3, 0.3, -0.2][boilIndex];

  return (
    <AbsoluteFill
      style={{
        pointerEvents: "none",
        opacity: roughOpacity,
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: 1920,
          height: 1080,
          transform: `translate3d(${jitterX}px, ${jitterY}px, 0)`,
        }}
      >
        <svg
          viewBox="0 0 1920 1080"
          style={{ width: 1920, height: 1080, overflow: "visible" }}
        >
          <g
            fill="none"
            stroke={INTRO_CONSTANTS.COLORS.BLUE_PENCIL}
            strokeWidth="3.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {/* Stage A: F052–F073: Left Bracket morphing into Cell 0 */}
            {frame < 74 && (
              <>
                {/* Left bracket / Cell 0 left & arms */}
                {(() => {
                  const armLen = interpolate(bracketMorphProg, [0, 1], [28, cellW]);
                  const curveOffset = interpolate(cell0StraightenProg, [0, 1], [14, 0]);
                  return (
                    <path
                      d={`M ${startX + armLen} ${topY + curveOffset} H ${startX} V ${botY - curveOffset} H ${startX + armLen}`}
                    />
                  );
                })()}

                {/* Right bracket morphing during F052-F063 */}
                {frame <= 63 && (() => {
                  const rStartX = interpolate(bracketMorphProg, [0, 1], [1420, 1380]);
                  return (
                    <path
                      d={`M ${rStartX - 36} ${topY} H ${rStartX} V ${botY} H ${rStartX - 36}`}
                      strokeOpacity={1 - bracketMorphProg * 0.4}
                    />
                  );
                })()}

                {/* Cell 0 right divider closing cell 0 during F069–F073 */}
                {cell0StraightenProg > 0 && (
                  <path
                    d={`M ${startX + cellW} ${topY} V ${topY + cellH * cell0StraightenProg}`}
                  />
                )}
              </>
            )}

            {/* Stage B: F074+: 8 Discrete Cells across fixed SLOTS */}
            {frame >= 74 && (
              <>
                {INTRO_CONSTANTS.ARRAY.SLOTS.map((slotX, idx) => {
                  // Cell 0 is already formed; cells 1..7 appear sequentially across F074-F083
                  let cellProgress = 1;
                  if (idx > 0) {
                    const startF = 74 + (idx - 1) * 1.25;
                    const endF = startF + 1.25;
                    cellProgress = interpolate(frame, [startF, endF], [0, 1], {
                      extrapolateLeft: "clamp",
                      extrapolateRight: "clamp",
                    });
                  }

                  if (cellProgress <= 0) return null;

                  return (
                    <g key={`rough-cell-${idx}`}>
                      {/* Discrete 96x96 rough cell box */}
                      <rect
                        x={slotX}
                        y={topY}
                        width={cellW}
                        height={cellH}
                        rx="4"
                        fill="rgba(91, 120, 167, 0.04)"
                        strokeDasharray={cellProgress < 1 ? cellW * 4 : undefined}
                        strokeDashoffset={cellProgress < 1 ? cellW * 4 * (1 - cellProgress) : undefined}
                      />

                      {/* Rough blue-pencil value and index (visible F084-F115) */}
                      {digitsOpacity > 0 && (
                        <>
                          <text
                            x={slotX + cellW / 2}
                            y={INTRO_CONSTANTS.ARRAY.CENTER_Y + 10}
                            textAnchor="middle"
                            fill={INTRO_CONSTANTS.COLORS.BLUE_PENCIL}
                            fontFamily="JetBrains Mono, Menlo, monospace"
                            fontSize="36"
                            fontWeight="700"
                            opacity={digitsOpacity}
                            stroke="none"
                          >
                            {INTRO_CONSTANTS.ARRAY.VALUES[idx]}
                          </text>
                          <text
                            x={slotX + cellW / 2}
                            y={INTRO_CONSTANTS.ARRAY.CENTER_Y + 76}
                            textAnchor="middle"
                            fill={INTRO_CONSTANTS.COLORS.BLUE_PENCIL}
                            fontFamily="JetBrains Mono, Menlo, monospace"
                            fontSize="20"
                            fontWeight="600"
                            opacity={digitsOpacity * 0.75}
                            stroke="none"
                          >
                            {idx}
                          </text>
                        </>
                      )}
                    </g>
                  );
                })}
              </>
            )}
          </g>
        </svg>
      </div>
    </AbsoluteFill>
  );
};
