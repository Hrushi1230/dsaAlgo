/**
 * Scene05WhyExtraSpace.tsx — Scene 05 · Why In-Place is Harder & Deriving 4-Way Cycles
 * Rotate Image (LeetCode 48) · Pattern 01 — Arrays & Hashing
 *
 * Implements the core conceptual breakthrough of LeetCode 48:
 * - Center Stage: 5×5 Master Matrix centered at X: 764, Y: 215 (392×392px)
 *   - Wrapped with RoughBox hand-drawn chalk outline
 * - Left Stage (X: 80..670, Y: 180..615):
 *   - Wrapped with RoughBox chalk border
 *   - The Direct Overwrite Hazard & Data Loss Demonstration (1 overwriting 5)
 *   - Read-After-Write conflict explanation
 *   - Temp variable memory box: temp = matrix[0][0] (O(1) memory) at F2218+
 * - Right Stage (X: 1210..1840, Y: 180..615):
 *   - Wrapped with RoughBox chalk border
 *   - STRICT ZERO-SPOILER PROGRESSIVE REVEALS:
 *     - F1342: Step 1 (1 ➔ 5) only, Steps 2..4 pending
 *     - F1427: Step 2 (5 ➔ 25) unlocks
 *     - F1534: Step 3 (25 ➔ 21) unlocks
 *     - F1653: Step 4 (21 ➔ 1) unlocks
 *     - F1778: Closed loop celebratory closure
 * - Bottom Zone (Y: 655..765):
 *   - Wrapped with RoughBox chalk border
 *   - Core principle: Rotate in 4-way cycles using 1 temp variable (F2218+)
 * - ChalkDust bursts on key moments: F685, F1342, F1427, F1534, F1653, F1778, F1972, F2218
 * - Captions at bottom (Y: 960..1010) with 195px breathing clearance
 *
 * Total Duration: 2,522 frames @ 30fps (84.080s) strictly from sync/05-why-extra-space.json
 */
import React from "react";
import {
  Audio,
  interpolate,
  spring,
  staticFile,
  useCurrentFrame,
} from "remotion";

import { ChalkboardBackground, ChalkFilters } from "../../../../kit/lib/chalk";
import { theme as baseTheme, fonts } from "../../../../kit/lib/theme";
import { EASE } from "../../../../kit/lib/anim";
import { Captions, CaptionWord } from "../../../../kit/components/Captions";
import { RoughBox } from "../../../../kit/components/RoughBox";
import { ChalkDust } from "../../../../kit/components/ChalkDust";
import syncData from "../sync/05-why-extra-space.json";

const theme = {
  ...baseTheme,
  gold: baseTheme.pivot,
  chalkSub: baseTheme.chalkDim,
  chalkBorder: baseTheme.cardBorder,
};

// ---------------------------------------------------------------------------
// Word-level Caption Timings (from sync/05-why-extra-space.json)
// ---------------------------------------------------------------------------
const captionWords: CaptionWord[] = (syncData.words || []).map((w: any) => ({
  word: w.word,
  start: w.start_ms / 1000,
  end: w.end_ms / 1000,
}));

// ---------------------------------------------------------------------------
// Matrix Grid Constants (Centered on Stage)
// ---------------------------------------------------------------------------
const ROWS = 5;
const COLS = 5;
const CELL_SIZE = 72;
const CELL_GAP = 8;
const PITCH = CELL_SIZE + CELL_GAP; // 80px
const GRID_WIDTH = COLS * CELL_SIZE + (COLS - 1) * CELL_GAP; // 392px
const GRID_HEIGHT = ROWS * CELL_SIZE + (ROWS - 1) * CELL_GAP; // 392px

const MATRIX_X = (1920 - GRID_WIDTH) / 2; // 764px
const MATRIX_Y = 215; // Y: 215..607

const MASTER_MATRIX = [
  [ 1,  2,  3,  4,  5],
  [ 6,  7,  8,  9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20],
  [21, 22, 23, 24, 25],
];

export const Scene05WhyExtraSpace: React.FC = () => {
  const frame = useCurrentFrame();

  // Entrance spring animations
  const matrixEntrance = spring({
    frame,
    fps: 30,
    config: { damping: 18, stiffness: 80 },
  });

  const leftCardEntrance = spring({
    frame: Math.max(0, frame - 185),
    fps: 30,
    config: { damping: 18, stiffness: 80 },
  });

  const rightCardEntrance = spring({
    frame: Math.max(0, frame - 1342),
    fps: 30,
    config: { damping: 18, stiffness: 80 },
  });

  const bottomCardEntrance = spring({
    frame: Math.max(0, frame - 2218),
    fps: 30,
    config: { damping: 18, stiffness: 80 },
  });

  // -------------------------------------------------------------------------
  // BEZIER FLIGHT FOR NAIVE OVERWRITE EXPERIMENT (1 -> 5: F685..F725)
  // -------------------------------------------------------------------------
  const naiveFlyProgress = interpolate(frame, [685, 725], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: EASE,
  });
  const naiveStartX = MATRIX_X + 0 * PITCH;
  const naiveStartY = MATRIX_Y + 0 * PITCH;
  const naiveEndX = MATRIX_X + 4 * PITCH;
  const naiveEndY = MATRIX_Y + 0 * PITCH;
  const naiveCurX = interpolate(naiveFlyProgress, [0, 1], [naiveStartX, naiveEndX]);
  const naiveCurY = interpolate(naiveFlyProgress, [0, 1], [naiveStartY, naiveEndY]) - Math.sin(naiveFlyProgress * Math.PI) * 45;

  // -------------------------------------------------------------------------
  // 4-CORNER SYNCHRONIZED SIMULTANEOUS ROTATION (F1972..F2080)
  // -------------------------------------------------------------------------
  const cycleFlyProgress = interpolate(frame, [1972, 2080], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: EASE,
  });

  // Cell highlight determination
  const getCellHighlight = (r: number, c: number) => {
    const isCorner =
      (r === 0 && c === 0) ||
      (r === 0 && c === 4) ||
      (r === 4 && c === 4) ||
      (r === 4 && c === 0);

    // Hazard stage: (0, 0) and (0, 4) in focus (F506..F1181)
    if (frame >= 506 && frame < 1182) {
      if (r === 0 && c === 0) {
        return { border: theme.gold, bg: "rgba(255, 209, 102, 0.25)", glow: `0 0 20px ${theme.gold}` };
      }
      if (r === 0 && c === 4) {
        if (frame >= 685) {
          // Disaster overwrite flash
          return { border: theme.bad, bg: "rgba(230, 57, 70, 0.35)", glow: `0 0 28px ${theme.bad}` };
        }
        return { border: theme.cyan, bg: "rgba(76, 201, 240, 0.2)", glow: `0 0 18px ${theme.cyan}` };
      }
      if (r === 4 && c === 4 && frame >= 900) {
        // Destination of 5
        return { border: theme.gold, bg: "rgba(255, 209, 102, 0.2)", glow: `0 0 16px ${theme.gold}` };
      }
    }

    // 4-corner connected cycle stage (F1182+)
    if (frame >= 1182 && isCorner) {
      if (frame >= 1778) {
        // Celebratory closed loop
        return { border: theme.good, bg: "rgba(82, 183, 136, 0.28)", glow: `0 0 22px ${theme.good}` };
      }
      return { border: theme.cyan, bg: "rgba(76, 201, 240, 0.22)", glow: `0 0 18px ${theme.cyan}` };
    }

    return null;
  };

  return (
    <div
      style={{
        position: "relative",
        width: 1920,
        height: 1080,
        overflow: "hidden",
        backgroundColor: theme.boardBg,
        fontFamily: fonts.hand,
        color: theme.chalkText,
      }}
    >
      <ChalkboardBackground />
      <ChalkFilters />

      {/* Audio Voiceover */}
      <Audio src={staticFile("audio/014/05-why-extra-space.mp3")} />

      {/* ChalkDust Burst Accents */}
      <ChalkDust x={MATRIX_X + 4 * PITCH + 36} y={MATRIX_Y + 36} start={685} color={theme.bad} count={22} radius={65} seed={21} />
      <ChalkDust x={1525} y={290} start={1342} color={theme.cyan} count={16} radius={55} seed={22} />
      <ChalkDust x={1525} y={345} start={1427} color={theme.gold} count={16} radius={55} seed={23} />
      <ChalkDust x={1525} y={400} start={1534} color={theme.good} count={16} radius={55} seed={24} />
      <ChalkDust x={1525} y={455} start={1653} color={theme.cyan} count={16} radius={55} seed={25} />
      <ChalkDust x={1525} y={510} start={1778} color={theme.good} count={24} radius={75} seed={26} />
      <ChalkDust x={MATRIX_X + 196} y={MATRIX_Y + 196} start={1972} color={theme.gold} count={24} radius={80} seed={27} />
      <ChalkDust x={960} y={710} start={2218} color={theme.good} count={22} radius={70} seed={28} />

      {/* =====================================================================
          TOP HEADER BAR (Zero-Collision: Y: 36..105, clean metadata)
          ===================================================================== */}
      <div
        style={{
          position: "absolute",
          top: 36,
          left: 80,
          right: 80,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          zIndex: 10,
        }}
      >
        <div style={{ display: "inline-flex", alignItems: "center", gap: 14 }}>
          <div
            style={{
              padding: "5px 14px",
              borderRadius: 6,
              border: `1.5px solid ${theme.chalkLine}`,
              backgroundColor: "rgba(17, 37, 29, 0.9)",
              fontSize: 14,
              fontFamily: fonts.code,
              fontWeight: 700,
              letterSpacing: 1.2,
              color: theme.cyan,
            }}
          >
            01 · ARRAYS &amp; HASHING
          </div>
          <div
            style={{
              padding: "5px 14px",
              borderRadius: 6,
              border: `1.5px solid ${theme.pivot}`,
              backgroundColor: "rgba(255, 209, 102, 0.12)",
              fontSize: 14,
              fontFamily: fonts.code,
              fontWeight: 700,
              color: theme.pivot,
            }}
          >
            LEETCODE 48 · CONCEPTUAL BREAKTHROUGH
          </div>
        </div>

        <div style={{ display: "inline-flex", alignItems: "center", gap: 12 }}>
          <div
            style={{
              padding: "6px 18px",
              borderRadius: 8,
              backgroundColor: frame >= 1778 ? "rgba(82, 183, 136, 0.14)" : "rgba(230, 57, 70, 0.12)",
              border: `1.5px solid ${frame >= 1778 ? theme.good : theme.bad}`,
              fontSize: 16,
              fontFamily: fonts.code,
              fontWeight: 700,
              color: frame >= 1778 ? theme.good : theme.bad,
              letterSpacing: 1,
            }}
          >
            {frame >= 1778
              ? "DISCOVERY: 4-WAY CLOSED IN-PLACE CYCLES"
              : "WHY IN-PLACE IS HARDER: THE OVERWRITE HAZARD"}
          </div>
        </div>
      </div>

      {/* =====================================================================
          CENTER-STAGE HERO: 5×5 MASTER MATRIX (X: 720..1160, Y: 180..605)
          ===================================================================== */}
      <div
        style={{
          position: "absolute",
          left: MATRIX_X - 44,
          top: MATRIX_Y - 70,
          opacity: matrixEntrance,
          transform: `scale(${interpolate(matrixEntrance, [0, 1], [0.94, 1.0])})`,
          zIndex: 5,
        }}
      >
        {/* Matrix Title Header */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: GRID_WIDTH + 44,
            marginBottom: 10,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <span
              style={{
                fontFamily: fonts.code,
                fontSize: 18,
                fontWeight: 700,
                color: theme.chalkText,
                letterSpacing: 1,
                whiteSpace: "nowrap",
              }}
            >
              matrix[5][5]
            </span>
            <span
              style={{
                fontSize: 11,
                fontFamily: fonts.code,
                fontWeight: 700,
                padding: "2px 8px",
                borderRadius: 4,
                backgroundColor: "rgba(76, 201, 240, 0.15)",
                color: theme.cyan,
              }}
            >
              SINGLE RAM BUFFER
            </span>
          </div>

          <span
            style={{
              fontSize: 11,
              fontFamily: fonts.code,
              fontWeight: 700,
              color: frame >= 1778 ? theme.good : frame >= 685 ? theme.bad : theme.gold,
              border: `1px solid ${frame >= 1778 ? theme.good : frame >= 685 ? theme.bad : theme.gold}`,
              padding: "2px 8px",
              borderRadius: 4,
              backgroundColor: "rgba(17, 37, 29, 0.8)",
            }}
          >
            {frame >= 1778
              ? "4-WAY CYCLE ACTIVE"
              : frame >= 685
              ? "OVERWRITE HAZARD DETECTED"
              : "IN-PLACE EXPERIMENT"}
          </span>
        </div>

        {/* Column Headers (c=0..4) */}
        <div style={{ display: "flex", marginLeft: 44, marginBottom: 8, gap: CELL_GAP }}>
          {[0, 1, 2, 3, 4].map((c) => (
            <div
              key={`c-head-${c}`}
              style={{
                width: CELL_SIZE,
                textAlign: "center",
                fontFamily: fonts.code,
                fontSize: 14,
                fontWeight: 700,
                color: theme.chalkSub,
              }}
            >
              c={c}
            </div>
          ))}
        </div>

        {/* Matrix Grid Container with Row Headers */}
        <div style={{ display: "flex", alignItems: "flex-start" }}>
          {/* Row Headers (r=0..4) */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: CELL_GAP,
              marginRight: 12,
              justifyContent: "space-around",
            }}
          >
            {[0, 1, 2, 3, 4].map((r) => (
              <div
                key={`r-head-${r}`}
                style={{
                  height: CELL_SIZE,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-end",
                  fontFamily: fonts.code,
                  fontSize: 14,
                  fontWeight: 700,
                  color: theme.chalkSub,
                  width: 32,
                }}
              >
                r={r}
              </div>
            ))}
          </div>

          {/* 5x5 Cells Grid with Authentic RoughBox border */}
          <div
            style={{
              position: "relative",
              width: GRID_WIDTH,
              height: GRID_HEIGHT,
              backgroundColor: "rgba(17, 37, 29, 0.8)",
              borderRadius: 10,
              padding: 2,
            }}
          >
            {/* RoughBox Outline on Matrix */}
            <div style={{ position: "absolute", top: -2, left: -2, width: GRID_WIDTH + 4, height: GRID_HEIGHT + 4, pointerEvents: "none", zIndex: 1 }}>
              <RoughBox
                width={GRID_WIDTH + 4}
                height={GRID_HEIGHT + 4}
                stroke={frame >= 1778 ? theme.good : theme.chalkLine}
                strokeWidth={frame >= 1778 ? 2.5 : 1.8}
                seed={57}
              />
            </div>

            {MASTER_MATRIX.map((row, r) =>
              row.map((val, c) => {
                const hl = getCellHighlight(r, c);
                const isOverwritten = r === 0 && c === 4 && frame >= 725 && frame < 1182;
                const isCenter = r === 2 && c === 2;

                // Value in 4-corner rotation simulation (F1972..F2522)
                let displayVal: number | string = val;
                if (frame >= 1972 && frame < 2080 && (
                  (r === 0 && c === 0) ||
                  (r === 0 && c === 4) ||
                  (r === 4 && c === 4) ||
                  (r === 4 && c === 0)
                )) {
                  // Hide during synchronized flight
                  displayVal = "";
                } else if (frame >= 2080) {
                  if (r === 0 && c === 0) displayVal = 21;
                  if (r === 0 && c === 4) displayVal = 1;
                  if (r === 4 && c === 4) displayVal = 5;
                  if (r === 4 && c === 0) displayVal = 25;
                }

                // Corner label
                let cornerTag = "";
                if (frame >= 1182) {
                  if (r === 0 && c === 0) cornerTag = "TL";
                  if (r === 0 && c === 4) cornerTag = "TR";
                  if (r === 4 && c === 4) cornerTag = "BR";
                  if (r === 4 && c === 0) cornerTag = "BL";
                }

                return (
                  <div
                    key={`mat-cell-${r}-${c}`}
                    style={{
                      position: "absolute",
                      left: c * PITCH,
                      top: r * PITCH,
                      width: CELL_SIZE,
                      height: CELL_SIZE,
                      borderRadius: 8,
                      backgroundColor: hl ? hl.bg : "rgba(25, 59, 45, 0.35)",
                      border: `2px solid ${hl ? hl.border : theme.chalkLine}`,
                      boxShadow: hl ? hl.glow : "none",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      transition: "none",
                      zIndex: 3,
                    }}
                  >
                    {/* Corner Tag */}
                    {cornerTag && (
                      <span
                        style={{
                          position: "absolute",
                          top: 3,
                          left: 5,
                          fontSize: 9,
                          fontFamily: fonts.code,
                          fontWeight: 700,
                          color: frame >= 1778 ? theme.good : theme.cyan,
                          letterSpacing: 0.5,
                        }}
                      >
                        {cornerTag}
                      </span>
                    )}

                    {/* Standard Number or Overwritten Hazard Display */}
                    {isOverwritten ? (
                      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                        <span style={{ fontFamily: fonts.code, fontSize: 26, fontWeight: 700, color: theme.gold }}>
                          1
                        </span>
                        <span style={{ fontSize: 10, fontFamily: fonts.code, color: theme.bad, textDecoration: "line-through" }}>
                          (5 was lost)
                        </span>
                      </div>
                    ) : (
                      <span
                        style={{
                          fontFamily: fonts.code,
                          fontSize: 30,
                          fontWeight: 700,
                          color: hl ? hl.border : theme.chalkText,
                        }}
                      >
                        {displayVal}
                      </span>
                    )}

                    {isCenter && (
                      <span
                        style={{
                          position: "absolute",
                          bottom: 2,
                          right: 4,
                          fontSize: 9,
                          fontFamily: fonts.code,
                          color: theme.gold,
                          opacity: 0.8,
                        }}
                      >
                        MID
                      </span>
                    )}
                  </div>
                );
              })
            )}

            {/* Outer Perimeter Cycle Track & Flow Arrows (Anchors 9..18: F1291+) */}
            {frame >= 1291 && (
              <svg
                style={{
                  position: "absolute",
                  left: -12,
                  top: -12,
                  width: GRID_WIDTH + 24,
                  height: GRID_HEIGHT + 24,
                  pointerEvents: "none",
                  zIndex: 2,
                }}
              >
                <defs>
                  <marker
                    id="arrowhead-cycle"
                    markerWidth="8"
                    markerHeight="6"
                    refX="7"
                    refY="3"
                    orient="auto"
                  >
                    <polygon
                      points="0 0, 8 3, 0 6"
                      fill={frame >= 1778 ? theme.good : theme.gold}
                    />
                  </marker>
                </defs>

                {/* Outer Rounded Perimeter Ring */}
                <rect
                  x={4}
                  y={4}
                  width={GRID_WIDTH + 16}
                  height={GRID_HEIGHT + 16}
                  rx={12}
                  fill="none"
                  stroke={frame >= 1778 ? theme.good : theme.cyan}
                  strokeWidth={2}
                  strokeDasharray="6 4"
                  opacity={0.7}
                />

                {/* Directional Flow Arrows on the 4 outer sides */}
                {/* Top: Left to Right */}
                {frame >= 1342 && (
                  <path
                    d={`M ${48} ${2} L ${GRID_WIDTH - 24} ${2}`}
                    stroke={frame >= 1778 ? theme.good : theme.gold}
                    strokeWidth={2.5}
                    markerEnd="url(#arrowhead-cycle)"
                  />
                )}
                {/* Right: Top to Bottom */}
                {frame >= 1427 && (
                  <path
                    d={`M ${GRID_WIDTH + 22} ${48} L ${GRID_WIDTH + 22} ${GRID_HEIGHT - 24}`}
                    stroke={frame >= 1778 ? theme.good : theme.gold}
                    strokeWidth={2.5}
                    markerEnd="url(#arrowhead-cycle)"
                  />
                )}
                {/* Bottom: Right to Left */}
                {frame >= 1534 && (
                  <path
                    d={`M ${GRID_WIDTH - 24} ${GRID_HEIGHT + 22} L ${48} ${GRID_HEIGHT + 22}`}
                    stroke={frame >= 1778 ? theme.good : theme.gold}
                    strokeWidth={2.5}
                    markerEnd="url(#arrowhead-cycle)"
                  />
                )}
                {/* Left: Bottom to Top */}
                {frame >= 1653 && (
                  <path
                    d={`M ${2} ${GRID_HEIGHT - 24} L ${2} ${48}`}
                    stroke={frame >= 1778 ? theme.good : theme.gold}
                    strokeWidth={2.5}
                    markerEnd="url(#arrowhead-cycle)"
                  />
                )}
              </svg>
            )}
          </div>
        </div>

        {/* Matrix Bottom Caption */}
        <div
          style={{
            marginTop: 10,
            marginLeft: 44,
            fontSize: 13,
            fontFamily: fonts.code,
            color: frame >= 1778 ? theme.good : theme.chalkSub,
            fontWeight: frame >= 1778 ? 700 : 400,
            letterSpacing: 0.5,
          }}
        >
          {frame >= 1778
            ? "✓ 4 corners form a closed clockwise cycle"
            : "Direct in-place overwrite destroys unread cells"}
        </div>
      </div>

      {/* =====================================================================
          4-CORNER SYNCHRONIZED SIMULTANEOUS FLIGHT (F1972..F2080)
          ===================================================================== */}
      {frame >= 1972 && frame < 2080 && (
        <>
          {/* Tile 1: Top-Left (0,0) -> Top-Right (0,4) */}
          <div
            style={{
              position: "absolute",
              left: interpolate(cycleFlyProgress, [0, 1], [MATRIX_X, MATRIX_X + 4 * PITCH]),
              top: MATRIX_Y - Math.sin(cycleFlyProgress * Math.PI) * 20,
              width: CELL_SIZE,
              height: CELL_SIZE,
              borderRadius: 8,
              backgroundColor: "rgba(25, 59, 45, 0.95)",
              border: `2.5px solid ${theme.good}`,
              boxShadow: `0 0 24px ${theme.good}`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 30,
            }}
          >
            <span style={{ fontFamily: fonts.code, fontSize: 30, fontWeight: 700, color: theme.good }}>
              1
            </span>
          </div>

          {/* Tile 5: Top-Right (0,4) -> Bottom-Right (4,4) */}
          <div
            style={{
              position: "absolute",
              left: MATRIX_X + 4 * PITCH + Math.sin(cycleFlyProgress * Math.PI) * 20,
              top: interpolate(cycleFlyProgress, [0, 1], [MATRIX_Y, MATRIX_Y + 4 * PITCH]),
              width: CELL_SIZE,
              height: CELL_SIZE,
              borderRadius: 8,
              backgroundColor: "rgba(25, 59, 45, 0.95)",
              border: `2.5px solid ${theme.good}`,
              boxShadow: `0 0 24px ${theme.good}`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 30,
            }}
          >
            <span style={{ fontFamily: fonts.code, fontSize: 30, fontWeight: 700, color: theme.good }}>
              5
            </span>
          </div>

          {/* Tile 25: Bottom-Right (4,4) -> Bottom-Left (4,0) */}
          <div
            style={{
              position: "absolute",
              left: interpolate(cycleFlyProgress, [0, 1], [MATRIX_X + 4 * PITCH, MATRIX_X]),
              top: MATRIX_Y + 4 * PITCH + Math.sin(cycleFlyProgress * Math.PI) * 20,
              width: CELL_SIZE,
              height: CELL_SIZE,
              borderRadius: 8,
              backgroundColor: "rgba(25, 59, 45, 0.95)",
              border: `2.5px solid ${theme.good}`,
              boxShadow: `0 0 24px ${theme.good}`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 30,
            }}
          >
            <span style={{ fontFamily: fonts.code, fontSize: 30, fontWeight: 700, color: theme.good }}>
              25
            </span>
          </div>

          {/* Tile 21: Bottom-Left (4,0) -> Top-Left (0,0) */}
          <div
            style={{
              position: "absolute",
              left: MATRIX_X - Math.sin(cycleFlyProgress * Math.PI) * 20,
              top: interpolate(cycleFlyProgress, [0, 1], [MATRIX_Y + 4 * PITCH, MATRIX_Y]),
              width: CELL_SIZE,
              height: CELL_SIZE,
              borderRadius: 8,
              backgroundColor: "rgba(25, 59, 45, 0.95)",
              border: `2.5px solid ${theme.good}`,
              boxShadow: `0 0 24px ${theme.good}`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 30,
            }}
          >
            <span style={{ fontFamily: fonts.code, fontSize: 30, fontWeight: 700, color: theme.good }}>
              21
            </span>
          </div>
        </>
      )}

      {/* =====================================================================
          NAIVE FLYING TILE (1 glides to 5: F685..F725)
          ===================================================================== */}
      {frame >= 685 && frame < 725 && (
        <div
          style={{
            position: "absolute",
            left: naiveCurX,
            top: naiveCurY,
            width: CELL_SIZE,
            height: CELL_SIZE,
            borderRadius: 8,
            backgroundColor: "#2E1A1D",
            border: `2px solid ${theme.bad}`,
            boxShadow: `0 0 20px ${theme.bad}`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 20,
          }}
        >
          <span style={{ fontFamily: fonts.code, fontSize: 30, fontWeight: 700, color: theme.gold }}>
            1
          </span>
        </div>
      )}

      {/* =====================================================================
          GHOST SILHOUETTE OF 5 (F900..F1181)
          ===================================================================== */}
      {frame >= 900 && frame < 1182 && (
        <div
          style={{
            position: "absolute",
            left: MATRIX_X + 4 * PITCH + 20,
            top: MATRIX_Y + 1 * PITCH + 20,
            padding: "8px 14px",
            borderRadius: 8,
            backgroundColor: "rgba(35, 14, 18, 0.92)",
            border: `1.5px dashed ${theme.gold}`,
            boxShadow: `0 0 16px ${theme.gold}`,
            zIndex: 15,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 4,
          }}
        >
          <span style={{ fontFamily: fonts.code, fontSize: 13, fontWeight: 700, color: theme.gold }}>
            Ghost Value: 5 ➔ (4, 4)
          </span>
          <span style={{ fontSize: 11, fontFamily: fonts.code, color: theme.chalkSub }}>
            Still needed for bottom-right corner!
          </span>
        </div>
      )}

      {/* =====================================================================
          LEFT STAGE: OVERWRITE HAZARD / TEMP BREAKTHROUGH (X: 80..670, Y: 180..615)
          ===================================================================== */}
      {frame >= 185 && (
        <div
          style={{
            position: "absolute",
            left: 80,
            top: 180,
            width: 590,
            height: 435,
            opacity: leftCardEntrance,
            transform: `scale(${interpolate(leftCardEntrance, [0, 1], [0.95, 1.0])})`,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            zIndex: 6,
          }}
        >
          {/* Main Problem Explanation Card with RoughBox */}
          <div
            style={{
              position: "relative",
              width: 590,
              height: 435,
              backgroundColor: "rgba(17, 37, 29, 0.94)",
              borderRadius: 14,
              overflow: "hidden",
            }}
          >
            <div style={{ position: "absolute", top: 0, left: 0, width: 590, height: 435, pointerEvents: "none" }}>
              <RoughBox
                width={590}
                height={435}
                stroke={frame >= 2218 ? theme.good : frame >= 685 ? theme.bad : theme.cyan}
                strokeWidth={2}
                seed={51}
              />
            </div>

            <div
              style={{
                position: "relative",
                zIndex: 2,
                padding: "20px 24px",
                height: "100%",
                boxSizing: "border-box",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span
                  style={{
                    fontFamily: fonts.code,
                    fontSize: 15,
                    fontWeight: 700,
                    letterSpacing: 1.2,
                    color: frame >= 2218 ? theme.good : frame >= 685 ? theme.bad : theme.cyan,
                  }}
                >
                  {frame >= 2218
                    ? "THE O(1) TEMP BREAKTHROUGH"
                    : frame >= 685
                    ? "⚠️ READ-AFTER-WRITE HAZARD"
                    : "THE IN-PLACE DILEMMA"}
                </span>
                <span
                  style={{
                    fontSize: 11,
                    fontFamily: fonts.code,
                    fontWeight: 700,
                    padding: "2px 8px",
                    borderRadius: 4,
                    backgroundColor: frame >= 2218 ? "rgba(82, 183, 136, 0.15)" : "rgba(230, 57, 70, 0.2)",
                    color: frame >= 2218 ? theme.good : theme.bad,
                  }}
                >
                  {frame >= 2218 ? "O(1) SPACE" : "DATA LOSS RISK"}
                </span>
              </div>

              {/* Narrative Explanation Block */}
              {frame < 685 ? (
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  <div style={{ fontSize: 14, color: theme.chalkText, lineHeight: 1.4 }}>
                    Without an extra destination matrix, writing a value directly into <code>matrix</code> overwrites whatever was already stored there.
                  </div>
                  <div
                    style={{
                      backgroundColor: "rgba(25, 59, 45, 0.5)",
                      border: `1px solid ${theme.chalkLine}`,
                      borderRadius: 6,
                      padding: "10px 14px",
                      fontFamily: fonts.code,
                      fontSize: 13,
                      color: theme.gold,
                    }}
                  >
                    Test: Move matrix[0][0] (1) ──► matrix[0][4] (5)
                  </div>
                  <div style={{ fontSize: 13, color: theme.chalkSub }}>
                    Will slot (0, 4) safely retain its old value?
                  </div>
                </div>
              ) : frame < 2218 ? (
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  <div
                    style={{
                      backgroundColor: "rgba(45, 18, 22, 0.7)",
                      border: `1.5px solid ${theme.bad}`,
                      borderRadius: 8,
                      padding: "12px 16px",
                      display: "flex",
                      flexDirection: "column",
                      gap: 6,
                    }}
                  >
                    <span style={{ fontFamily: fonts.code, fontSize: 14, fontWeight: 700, color: theme.bad }}>
                      Overwrote Slot (0, 4):
                    </span>
                    <span style={{ fontSize: 13, color: theme.chalkText }}>
                      <code>matrix[0][4] = 1</code> immediately destroyed original value <code>5</code>.
                    </span>
                  </div>
                  <div style={{ fontSize: 13, color: theme.chalkSub, lineHeight: 1.4 }}>
                    Because <code>5</code> must later move to <code>(4, 4)</code>, losing <code>5</code> causes a permanent error in the output!
                  </div>
                  <div
                    style={{
                      padding: "8px 12px",
                      borderRadius: 6,
                      backgroundColor: "rgba(35, 14, 18, 0.8)",
                      border: `1px solid ${theme.bad}`,
                      fontSize: 12,
                      fontFamily: fonts.code,
                      color: theme.bad,
                    }}
                  >
                    Dependency Hazard: Values cannot move independently!
                  </div>
                </div>
              ) : (
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  <div
                    style={{
                      backgroundColor: "rgba(18, 45, 32, 0.7)",
                      border: `1.5px solid ${theme.good}`,
                      borderRadius: 8,
                      padding: "12px 16px",
                      display: "flex",
                      flexDirection: "column",
                      gap: 6,
                    }}
                  >
                    <span style={{ fontFamily: fonts.code, fontSize: 14, fontWeight: 700, color: theme.good }}>
                      Only 1 Temporary Variable Needed:
                    </span>
                    <span style={{ fontSize: 13, color: theme.chalkText }}>
                      Store <code>temp = matrix[0][0]</code> before rotating the 4 elements.
                    </span>
                  </div>
                  <div style={{ fontSize: 13, color: theme.chalkSub, lineHeight: 1.4 }}>
                    Zero data loss. Zero extra matrix. Full in-place rotation with strictly <strong>O(1) Auxiliary Memory</strong>!
                  </div>
                </div>
              )}

              {/* In-Place RAM Visualizer Box */}
              <div
                style={{
                  backgroundColor: "rgba(17, 37, 29, 0.8)",
                  border: `1px solid ${theme.chalkLine}`,
                  borderRadius: 8,
                  padding: "10px 14px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <span style={{ fontFamily: fonts.code, fontSize: 13, color: theme.chalkText }}>
                  RAM Footprint:
                </span>
                <span
                  style={{
                    fontFamily: fonts.code,
                    fontSize: 14,
                    fontWeight: 700,
                    color: frame >= 2218 ? theme.good : theme.bad,
                  }}
                >
                  {frame >= 2218 ? "1 Integer (temp) · O(1)" : "Trying O(0) direct write ➔ FAILS"}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* =====================================================================
          RIGHT STAGE: 4-WAY CLOSED CYCLE CARD (X: 1210..1840, Y: 180..615)
          ===================================================================== */}
      {frame >= 1342 && (
        <div
          style={{
            position: "absolute",
            left: 1210,
            top: 180,
            width: 630,
            height: 435,
            opacity: rightCardEntrance,
            transform: `scale(${interpolate(rightCardEntrance, [0, 1], [0.95, 1.0])})`,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            zIndex: 6,
          }}
        >
          <div
            style={{
              position: "relative",
              width: 630,
              height: 435,
              backgroundColor: "rgba(17, 37, 29, 0.94)",
              borderRadius: 14,
              overflow: "hidden",
            }}
          >
            <div style={{ position: "absolute", top: 0, left: 0, width: 630, height: 435, pointerEvents: "none" }}>
              <RoughBox
                width={630}
                height={435}
                stroke={frame >= 1778 ? theme.good : theme.gold}
                strokeWidth={2}
                seed={54}
              />
            </div>

            <div
              style={{
                position: "relative",
                zIndex: 2,
                padding: "20px 24px",
                height: "100%",
                boxSizing: "border-box",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span
                  style={{
                    fontFamily: fonts.code,
                    fontSize: 15,
                    fontWeight: 700,
                    letterSpacing: 1.2,
                    color: frame >= 1778 ? theme.good : theme.gold,
                  }}
                >
                  4-WAY CLOSED CYCLE DISCOVERY
                </span>
                <span
                  style={{
                    fontSize: 11,
                    fontFamily: fonts.code,
                    fontWeight: 700,
                    padding: "2px 8px",
                    borderRadius: 4,
                    backgroundColor: frame >= 1778 ? "rgba(82, 183, 136, 0.15)" : "rgba(255, 209, 102, 0.15)",
                    color: frame >= 1778 ? theme.good : theme.gold,
                  }}
                >
                  {frame >= 1778 ? "CYCLE COMPLETE" : "DISCOVERING..."}
                </span>
              </div>

              {/* 4 Steps of the Cycle: STRICT ZERO-SPOILER PROGRESSIVE REVEALS */}
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {/* Step 1: F1342+ */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    backgroundColor: "rgba(25, 59, 45, 0.7)",
                    border: `1px solid ${theme.cyan}`,
                    borderRadius: 6,
                    padding: "8px 12px",
                  }}
                >
                  <span style={{ fontFamily: fonts.code, fontSize: 13, color: theme.chalkText }}>
                    1. Top-Left ➔ Top-Right
                  </span>
                  <span style={{ fontFamily: fonts.code, fontSize: 14, fontWeight: 700, color: theme.cyan }}>
                    matrix[0][0] (1) ──► (0, 4)
                  </span>
                </div>

                {/* Step 2: Unlocks at F1427 */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    backgroundColor: frame >= 1427 ? "rgba(25, 59, 45, 0.7)" : "transparent",
                    border: `1px solid ${frame >= 1427 ? theme.gold : theme.chalkLine}`,
                    borderRadius: 6,
                    padding: "8px 12px",
                    opacity: frame >= 1427 ? 1 : 0.45,
                  }}
                >
                  <span style={{ fontFamily: fonts.code, fontSize: 13, color: theme.chalkText }}>
                    2. Top-Right ➔ Bottom-Right
                  </span>
                  <span style={{ fontFamily: fonts.code, fontSize: 14, fontWeight: 700, color: frame >= 1427 ? theme.gold : theme.chalkSub }}>
                    {frame >= 1427 ? "matrix[0][4] (5) ──► (4, 4)" : "Waiting for narration..."}
                  </span>
                </div>

                {/* Step 3: Unlocks at F1534 */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    backgroundColor: frame >= 1534 ? "rgba(25, 59, 45, 0.7)" : "transparent",
                    border: `1px solid ${frame >= 1534 ? theme.good : theme.chalkLine}`,
                    borderRadius: 6,
                    padding: "8px 12px",
                    opacity: frame >= 1534 ? 1 : 0.45,
                  }}
                >
                  <span style={{ fontFamily: fonts.code, fontSize: 13, color: theme.chalkText }}>
                    3. Bottom-Right ➔ Bottom-Left
                  </span>
                  <span style={{ fontFamily: fonts.code, fontSize: 14, fontWeight: 700, color: frame >= 1534 ? theme.good : theme.chalkSub }}>
                    {frame >= 1534 ? "matrix[4][4] (25) ──► (4, 0)" : "Waiting for narration..."}
                  </span>
                </div>

                {/* Step 4: Unlocks at F1653 */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    backgroundColor: frame >= 1653 ? "rgba(25, 59, 45, 0.7)" : "transparent",
                    border: `1px solid ${frame >= 1653 ? theme.cyan : theme.chalkLine}`,
                    borderRadius: 6,
                    padding: "8px 12px",
                    opacity: frame >= 1653 ? 1 : 0.45,
                  }}
                >
                  <span style={{ fontFamily: fonts.code, fontSize: 13, color: theme.chalkText }}>
                    4. Bottom-Left ➔ Top-Left
                  </span>
                  <span style={{ fontFamily: fonts.code, fontSize: 14, fontWeight: 700, color: frame >= 1653 ? theme.cyan : theme.chalkSub }}>
                    {frame >= 1653 ? "matrix[4][0] (21) ──► (0, 0)" : "Waiting for narration..."}
                  </span>
                </div>
              </div>

              {/* Cycle Closure Badge */}
              <div
                style={{
                  backgroundColor: frame >= 1778 ? "rgba(82, 183, 136, 0.2)" : "rgba(25, 59, 45, 0.4)",
                  border: `1px solid ${frame >= 1778 ? theme.good : theme.chalkLine}`,
                  borderRadius: 8,
                  padding: "10px 14px",
                  textAlign: "center",
                  fontFamily: fonts.code,
                  fontSize: 13,
                  fontWeight: 700,
                  color: frame >= 1778 ? theme.good : theme.chalkSub,
                }}
              >
                {frame >= 1778
                  ? "🔄 CLOSED LOOP: 21 RETURNS TO (0, 0)"
                  : "Tracking dependency loop..."}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* =====================================================================
          BOTTOM ZONE: CORE PRINCIPLE / BREAKTHROUGH CARD (Y: 655..765)
          Clearance to Captions (Y: 960): 195px
          ===================================================================== */}
      {frame >= 2218 && (
        <div
          style={{
            position: "absolute",
            left: 360,
            top: 655,
            width: 1200,
            height: 110,
            opacity: bottomCardEntrance,
            transform: `translateY(${interpolate(bottomCardEntrance, [0, 1], [15, 0])}px)`,
            backgroundColor: "rgba(17, 37, 29, 0.94)",
            borderRadius: 14,
            overflow: "hidden",
            zIndex: 10,
          }}
        >
          <div style={{ position: "absolute", top: 0, left: 0, width: 1200, height: 110, pointerEvents: "none" }}>
            <RoughBox
              width={1200}
              height={110}
              stroke={theme.good}
              strokeWidth={2}
              seed={56}
            />
          </div>

          <div
            style={{
              position: "relative",
              zIndex: 2,
              padding: "16px 28px",
              height: "100%",
              boxSizing: "border-box",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
              <span
                style={{
                  fontFamily: fonts.code,
                  fontSize: 16,
                  fontWeight: 700,
                  color: theme.good,
                  letterSpacing: 1,
                }}
              >
                CORE PRINCIPLE: ROTATE IN 4-WAY CLOSED CYCLES
              </span>
              <span style={{ fontSize: 14, color: theme.chalkText, lineHeight: 1.35 }}>
                Instead of moving one value alone, rotate all 4 connected values simultaneously using a single <code>temp</code> integer.
              </span>
            </div>

            <div
              style={{
                padding: "8px 16px",
                borderRadius: 8,
                backgroundColor: "rgba(82, 183, 136, 0.15)",
                border: `1.5px solid ${theme.good}`,
                fontFamily: fonts.code,
                fontSize: 14,
                fontWeight: 700,
                color: theme.good,
                whiteSpace: "nowrap",
              }}
            >
              O(1) EXTRA SPACE ✓
            </div>
          </div>
        </div>
      )}

      {/* =====================================================================
          CAPTIONS (Y: 960..1010, bottom: 38px, strictly >= 195px below cards)
          ===================================================================== */}
      <Captions words={captionWords} />
    </div>
  );
};
