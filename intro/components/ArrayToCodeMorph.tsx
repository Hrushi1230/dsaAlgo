import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { evolvePath } from "@remotion/paths";
import { SVG_PATHS } from "../utils/svgPaths";
import { INTRO_CONSTANTS } from "../types";

/**
 * ArrayToCodeMorph Component (F116–F299)
 * Rebuilt strictly to Section 1 (F160) & Sections 7 & 8 of the Change Bible:
 *   F116–F121: Corner tension (1-3px detachments).
 *   F122–F127: Letter-bound segments brighten in blue/gold.
 *   F128–F135: Segments detach by 6-14px.
 *   F136–F149: Segments fly along Bezier paths toward C-O-D-E coordinates.
 *   F150–F168: Array segments physically assemble C-O-D-E via SVG strokes (NO HTML text fade!).
 *     - F150-158: C upper & lower arcs assemble.
 *     - F154-161: O arcs join and close.
 *     - F158-166: D stem lands, bowl curves shut.
 *     - F162-168: E stem lands, 3 bars lock in.
 *   F169–F174: Residual scaffolding fades out.
 *   F175–F179: CODE settles (scale 1.015 -> 1.000).
 *   F180+: CODE holds clean on chalkboard/paper through F299.
 */
export const ArrayToCodeMorph: React.FC = () => {
  const frame = useCurrentFrame();

  if (frame < 116 || frame > 299) {
    return null;
  }

  // F116-F121: Corner tension (1-3px)
  const tension = interpolate(frame, [116, 121], [0, 3], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // F122-F127: Segment flash brightness
  const flash = interpolate(frame, [122, 124, 127], [0, 0.6, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // F128-F135: Detachment translation (4-14px outward)
  const detachProg = interpolate(frame, [128, 135], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // F136-F149: Flight progress (0 -> 1)
  const flightProg = interpolate(frame, [136, 149], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Flight motion blur (peaks at 2.5px around F142)
  const flightBlur =
    frame >= 136 && frame <= 149
      ? Math.sin(flightProg * Math.PI) * 2.5
      : 0;

  // Individual Letter Assembly Progress (F150-F168)
  const cUpperProg = interpolate(frame, [150, 154], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const cLowerProg = interpolate(frame, [154, 158], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  const oLeftProg = interpolate(frame, [154, 158], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const oRightProg = interpolate(frame, [157, 161], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  const dStemProg = interpolate(frame, [158, 162], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const dBowlProg = interpolate(frame, [162, 166], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  const eStemProg = interpolate(frame, [162, 165], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const eTopProg = interpolate(frame, [164, 166], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const eMidProg = interpolate(frame, [165, 167], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const eBotProg = interpolate(frame, [166, 168], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  // F169-F174: Scaffolding fade
  const scaffoldsOpacity = interpolate(frame, [168, 174], [0.45, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // F175-F179: CODE settle scale (1.015 -> 1.000)
  const codeScale = interpolate(frame, [175, 179], [1.015, 1.0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Slot center X coordinates
  const s = INTRO_CONSTANTS.ARRAY.SLOTS;
  const cY = INTRO_CONSTANTS.ARRAY.CENTER_Y; // 520

  // Letter target centers (Y top: 322, bottom: 390)
  const cX = 810;
  const oX = 910;
  const dX = 1010;
  const eX = 1110;

  return (
    <AbsoluteFill style={{ pointerEvents: "none" }}>
      {/* 1. FLIGHT SHARDS STAGE (F116–F149) */}
      {frame < 150 && (
        <svg
          viewBox="0 0 1920 1080"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 1920,
            height: 1080,
            filter: flightBlur > 0 ? `blur(${flightBlur}px)` : undefined,
          }}
        >
          <g
            fill="none"
            stroke={flash > 0 ? INTRO_CONSTANTS.COLORS.BLUE_PENCIL : INTRO_CONSTANTS.COLORS.INDIGO_CLEAN}
            strokeWidth={3.6 + flash * 2}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {/* Cell 0 left & top -> Flying toward C (810, 356) */}
            {(() => {
              const off = tension + detachProg * 12;
              const startX = s[0] + 48;
              const curX = interpolate(flightProg, [0, 1], [startX - off, cX - 15]);
              const curY = interpolate(flightProg, [0, 1], [cY - off, 356]);
              return (
                <path d={`M ${curX - 20} ${curY - 25} C ${curX - 35} ${curY}, ${curX - 35} ${curY + 20}, ${curX - 10} ${curY + 30}`} />
              );
            })()}

            {/* Cell 1 & 2 -> Flying toward O (910, 356) */}
            {(() => {
              const off = tension + detachProg * 10;
              const startX1 = s[1] + 48;
              const curX1 = interpolate(flightProg, [0, 1], [startX1 - off, oX - 25]);
              const curY1 = interpolate(flightProg, [0, 1], [cY + off, 356]);

              const startX2 = s[2] + 48;
              const curX2 = interpolate(flightProg, [0, 1], [startX2 + off, oX + 25]);
              const curY2 = interpolate(flightProg, [0, 1], [cY - off, 356]);
              return (
                <>
                  <path d={`M ${curX1} ${curY1 - 30} C ${curX1 - 20} ${curY1 - 10}, ${curX1 - 20} ${curY1 + 20}, ${curX1} ${curY1 + 30}`} />
                  <path d={`M ${curX2} ${curY2 - 30} C ${curX2 + 20} ${curY2 - 10}, ${curX2 + 20} ${curY2 + 20}, ${curX2} ${curY2 + 30}`} />
                </>
              );
            })()}

            {/* Cell 3 -> Flying toward D (1010, 356) */}
            {(() => {
              const off = tension + detachProg * 14;
              const startX3 = s[3] + 48;
              const curX3 = interpolate(flightProg, [0, 1], [startX3 - off, dX - 20]);
              const curY3 = interpolate(flightProg, [0, 1], [cY, 356]);
              return (
                <>
                  <line x1={curX3} y1={curY3 - 34} x2={curX3} y2={curY3 + 34} />
                  <path d={`M ${curX3} ${curY3 - 34} Q ${curX3 + 40} ${curY3}, ${curX3} ${curY3 + 34}`} />
                </>
              );
            })()}

            {/* Cell 5, 6, 7 -> Flying toward E (1110, 356) */}
            {(() => {
              const off = tension + detachProg * 14;
              const startX5 = s[5] + 48;
              const curX5 = interpolate(flightProg, [0, 1], [startX5 - off, eX - 25]);
              const curY5 = interpolate(flightProg, [0, 1], [cY - off, 356]);
              return (
                <>
                  <line x1={curX5} y1={curY5 - 34} x2={curX5} y2={curY5 + 34} />
                  <line x1={curX5} y1={curY5 - 34} x2={curX5 + 35} y2={curY5 - 34} />
                  <line x1={curX5} y1={curY5} x2={curX5 + 28} y2={curY5} />
                  <line x1={curX5} y1={curY5 + 34} x2={curX5 + 35} y2={curY5 + 34} />
                </>
              );
            })()}

            {/* Fading unused array scaffolding */}
            {flightProg < 0.8 && (
              <g stroke={INTRO_CONSTANTS.COLORS.BLUE_PENCIL} strokeOpacity={0.3 * (1 - flightProg)} strokeWidth="2">
                <line x1={s[0]} y1={cY} x2={s[7] + 96} y2={cY} strokeDasharray="4 6" />
              </g>
            )}
          </g>
        </svg>
      )}

      {/* 2. SVG CONSTRUCTED C-O-D-E TYPOGRAPHY STAGE (F150+) */}
      {frame >= 150 && (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 1920,
            height: 1080,
            transform: `scale(${codeScale})`,
            transformOrigin: "960px 356px",
          }}
        >
          <svg
            viewBox="0 0 1920 1080"
            style={{ width: 1920, height: 1080, overflow: "visible" }}
          >
            {/* Scaffolding Guides (fade by F174) */}
            {scaffoldsOpacity > 0 && (
              <g
                fill="none"
                stroke={INTRO_CONSTANTS.COLORS.BLUE_PENCIL}
                strokeWidth="1.5"
                strokeDasharray="3 4"
                opacity={scaffoldsOpacity}
              >
                <line x1="760" y1="322" x2="1160" y2="322" />
                <line x1="760" y1="390" x2="1160" y2="390" />
              </g>
            )}

            {/* Master Indigo Letter Strokes */}
            <g
              fill="none"
              stroke={INTRO_CONSTANTS.COLORS.INDIGO_CLEAN}
              strokeWidth="9"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {/* LETTER C (formed from cell 0 edges) */}
              {cUpperProg > 0 && (
                <path
                  d="M 838 326 C 812 318, 778 332, 778 356"
                  strokeDasharray={100}
                  strokeDashoffset={100 * (1 - cUpperProg)}
                />
              )}
              {cLowerProg > 0 && (
                <path
                  d="M 778 356 C 778 380, 812 394, 838 386"
                  strokeDasharray={100}
                  strokeDashoffset={100 * (1 - cLowerProg)}
                />
              )}

              {/* LETTER O (formed from cell 1 & 2 arcs) */}
              {oLeftProg > 0 && (
                <path
                  d="M 910 322 C 876 322, 866 338, 866 356 C 866 374, 876 390, 910 390"
                  strokeDasharray={120}
                  strokeDashoffset={120 * (1 - oLeftProg)}
                />
              )}
              {oRightProg > 0 && (
                <path
                  d="M 910 322 C 944 322, 954 338, 954 356 C 954 374, 944 390, 910 390"
                  strokeDasharray={120}
                  strokeDashoffset={120 * (1 - oRightProg)}
                />
              )}

              {/* LETTER D (formed from cell 3 stem and bowl) */}
              {dStemProg > 0 && (
                <line
                  x1={982}
                  y1={322}
                  x2={982}
                  y2={322 + 68 * dStemProg}
                />
              )}
              {dBowlProg > 0 && (
                <path
                  d={`M 982 322 H 1004 C 1032 322, 1042 336, 1042 356 C 1042 376, 1032 390, 1004 390 H 982`}
                  strokeDasharray={150}
                  strokeDashoffset={150 * (1 - dBowlProg)}
                />
              )}

              {/* LETTER E (formed from cell 5 stem and cell 5/6/7 bars) */}
              {eStemProg > 0 && (
                <line
                  x1={1076}
                  y1={322}
                  x2={1076}
                  y2={322 + 68 * eStemProg}
                />
              )}
              {eTopProg > 0 && (
                <line
                  x1={1076}
                  y1={322}
                  x2={1076 + 44 * eTopProg}
                  y2={322}
                />
              )}
              {eMidProg > 0 && (
                <line
                  x1={1076}
                  y1={356}
                  x2={1076 + 36 * eMidProg}
                  y2={356}
                />
              )}
              {eBotProg > 0 && (
                <line
                  x1={1076}
                  y1={390}
                  x2={1076 + 44 * eBotProg}
                  y2={390}
                />
              )}
            </g>
          </svg>
        </div>
      )}
    </AbsoluteFill>
  );
};
