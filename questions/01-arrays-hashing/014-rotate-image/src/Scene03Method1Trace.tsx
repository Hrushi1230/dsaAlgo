/**
 * Scene03Method1Trace.tsx — Scene 03 · Method 1 Trace: Extra Destination Matrix
 * Rotate Image (LeetCode 48) · Pattern 01 — Arrays & Hashing
 *
 * Implements Method 1 (Brute Force / Intuitive with Extra Grid):
 * - Strict Zero-Spoiler Progressive Reveals:
 *   - Right Result Matrix remains hidden/unallocated until spoken at F54 ("create another matrix").
 *   - Result Matrix starts with 25 empty wireframe slots (·); zero numbers pre-populated.
 *   - In sample traces (1, 8, 13, 17), calculation and destination slots reveal strictly when spoken.
 *   - Flights take off on spoken word ("place 1 there", "8 goes there", "17 moves to row 1 col 1").
 *   - Settled numbers appear strictly upon tile landing, accompanied by ChalkDust bursts.
 *   - Row sweep (Rows 0..4 -> Cols 4..0) populates column-by-column strictly aligned with narration.
 *   - Safety card and O(N²) space penalty cards reveal strictly at their respective audio anchors.
 * - Authentic Chalkboard Aesthetics with @dsa/kit:
 *   - RoughBox hand-drawn outlines for all cards and matrix containers (no AI-slop generic div borders).
 *   - ChalkDust particles on landing impacts.
 *   - BezierFlight for flying tiles with ghost trails.
 *   - ChalkboardBackground and ChalkFilters.
 *   - Balanced canvas architecture: Matrices at Y: 200, Center card at Y: 190, Bottom monitor at Y: 620,
 *     Captions baseline at Y: 960 with >= 185px breathing room.
 *
 * Total Duration: 4,466 frames @ 30fps (148.880s) strictly from sync/03-method1-trace.json
 */

import React, { useMemo } from "react";
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
import { BezierFlight } from "../../../../kit/components/BezierFlight";
import syncData from "../sync/03-method1-trace.json";

const theme = {
  ...baseTheme,
  gold: baseTheme.pivot,
  chalkSub: baseTheme.chalkDim,
  chalkBorder: baseTheme.cardBorder,
};

// ---------------------------------------------------------------------------
// Word-level Caption Timings (from sync/03-method1-trace.json)
// ---------------------------------------------------------------------------
const captionWords: CaptionWord[] = (syncData.words || []).map((w: any) => {
  return {
    word: w.word,
    start: w.start_ms / 1000,
    end: w.end_ms / 1000,
  };
});

// ---------------------------------------------------------------------------
// Matrix Grid Constants
// ---------------------------------------------------------------------------
const ROWS = 5;
const COLS = 5;
const CELL_SIZE = 64;
const CELL_GAP = 8;
const PITCH = CELL_SIZE + CELL_GAP; // 72px
const GRID_WIDTH = COLS * CELL_SIZE + (COLS - 1) * CELL_GAP; // 352px
const GRID_HEIGHT = ROWS * CELL_SIZE + (ROWS - 1) * CELL_GAP; // 352px

// Exact Coordinates for Left & Right Grids
const LEFT_GRID_X = 230; // Source Matrix X
const RIGHT_GRID_X = 1338; // Result Matrix X
const GRIDS_Y = 200; // Top Y of both matrices

const SOURCE_MATRIX = [
  [ 1,  2,  3,  4,  5],
  [ 6,  7,  8,  9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20],
  [21, 22, 23, 24, 25],
];

const TARGET_ROTATED_MATRIX = [
  [21, 16, 11,  6,  1],
  [22, 17, 12,  7,  2],
  [23, 18, 13,  8,  3],
  [24, 19, 14,  9,  4],
  [25, 20, 15, 10,  5],
];

export const Scene03Method1Trace: React.FC = () => {
  const frame = useCurrentFrame();

  // Entrance springs
  const leftEntrance = spring({
    frame,
    fps: 30,
    config: { damping: 18, stiffness: 80 },
  });

  // Right Matrix entrance strictly starts at F54 when narrator says "create another matrix"
  const rightEntrance = spring({
    frame: Math.max(0, frame - 54),
    fps: 30,
    config: { damping: 16, stiffness: 75 },
  });

  // Center Formula Card entrance strictly starts at F397
  const centerFormulaEntrance = spring({
    frame: Math.max(0, frame - 397),
    fps: 30,
    config: { damping: 16, stiffness: 90 },
  });

  // Bottom Safety Card entrance (Anchor 23: F3752..F4136)
  const bottomSafetyEntrance = spring({
    frame: Math.max(0, frame - 3752),
    fps: 30,
    config: { damping: 16, stiffness: 90 },
  });

  // Bottom Space Tradeoff transition (Anchor 24: F4137..F4466)
  const bottomWarningEntrance = spring({
    frame: Math.max(0, frame - 4137),
    fps: 30,
    config: { damping: 16, stiffness: 90 },
  });

  // -------------------------------------------------------------------------
  // Strict Anti-Spoiler: Helper to determine if a Result cell is settled
  // -------------------------------------------------------------------------
  const isResultCellSettled = (r: number, c: number): boolean => {
    // 4 individual sample traces: reveal strictly upon tile landing
    if (r === 0 && c === 4) return frame >= 965; // Trace 1 (Value 1)
    if (r === 2 && c === 3) return frame >= 1275; // Trace 2 (Value 8)
    if (r === 2 && c === 2) return frame >= 1600; // Trace 3 (Value 13)
    if (r === 1 && c === 1) return frame >= 2045; // Trace 4 (Value 17)

    // Row 0 -> Col 4 sweep (F2455..F2871)
    if (c === 4) {
      if (r === 1) return frame >= 2760;
      if (r === 2) return frame >= 2785;
      if (r === 3) return frame >= 2810;
      if (r === 4) return frame >= 2835;
    }

    // Row 1 -> Col 3 sweep (F2887..F3107)
    if (c === 3) {
      if (r === 0) return frame >= 2930;
      if (r === 1) return frame >= 2970;
      if (r === 3) return frame >= 3020;
      if (r === 4) return frame >= 3060;
    }

    // Row 2 -> Col 2 sweep (F3123..F3204)
    if (c === 2) {
      if (r === 0) return frame >= 3135;
      if (r === 1) return frame >= 3150;
      if (r === 3) return frame >= 3170;
      if (r === 4) return frame >= 3190;
    }

    // Row 3 -> Col 1 sweep (F3220..F3321)
    if (c === 1) {
      if (r === 0) return frame >= 3240;
      if (r === 2) return frame >= 3265;
      if (r === 3) return frame >= 3285;
      if (r === 4) return frame >= 3305;
    }

    // Row 4 -> Col 0 sweep (F3321..F3450)
    if (c === 0) {
      if (r === 0) return frame >= 3340;
      if (r === 1) return frame >= 3365;
      if (r === 2) return frame >= 3390;
      if (r === 3) return frame >= 3415;
      if (r === 4) return frame >= 3435;
    }

    // All elements settled from F3440 onwards
    return frame >= 3440;
  };

  // -------------------------------------------------------------------------
  // Settled count for execution monitor progress
  // -------------------------------------------------------------------------
  const settledCount = useMemo(() => {
    let count = 0;
    for (let r = 0; r < ROWS; r++) {
      for (let c = 0; c < COLS; c++) {
        if (isResultCellSettled(r, c)) count++;
      }
    }
    return count;
  }, [frame]);

  // -------------------------------------------------------------------------
  // Strict Anti-Spoiler: Helper to determine active highlights in Source Matrix
  // -------------------------------------------------------------------------
  const getSourceCellHighlight = (r: number, c: number) => {
    // Trace 1: (0, 0) active strictly [F676..F965]
    if (r === 0 && c === 0 && frame >= 676 && frame < 965) {
      return { border: theme.gold, bg: "rgba(255, 209, 102, 0.24)", glow: `0 0 22px ${theme.gold}` };
    }
    // Trace 2: (1, 2) active strictly [F1011..F1275]
    if (r === 1 && c === 2 && frame >= 1011 && frame < 1275) {
      return { border: theme.gold, bg: "rgba(255, 209, 102, 0.24)", glow: `0 0 22px ${theme.gold}` };
    }
    // Trace 3: (2, 2) active strictly [F1294..F1600]
    if (r === 2 && c === 2 && frame >= 1294 && frame < 1600) {
      return { border: theme.gold, bg: "rgba(255, 209, 102, 0.28)", glow: `0 0 24px ${theme.gold}` };
    }
    // Trace 4: (3, 1) active strictly [F1627..F2045]
    if (r === 3 && c === 1 && frame >= 1627 && frame < 2045) {
      return { border: theme.gold, bg: "rgba(255, 209, 102, 0.24)", glow: `0 0 22px ${theme.gold}` };
    }

    // Row Sweeps:
    if (r === 0 && frame >= 2455 && frame < 2871) {
      return { border: theme.cyan, bg: "rgba(76, 201, 240, 0.20)", glow: `0 0 16px ${theme.cyan}` };
    }
    if (r === 1 && frame >= 2887 && frame < 3107) {
      return { border: theme.gold, bg: "rgba(255, 209, 102, 0.20)", glow: `0 0 16px ${theme.gold}` };
    }
    if (r === 2 && frame >= 3123 && frame < 3204) {
      return { border: theme.good, bg: "rgba(82, 183, 136, 0.20)", glow: `0 0 16px ${theme.good}` };
    }
    if (r === 3 && frame >= 3220 && frame < 3321) {
      return { border: theme.accent, bg: "rgba(255, 107, 107, 0.20)", glow: `0 0 16px ${theme.accent}` };
    }
    if (r === 4 && frame >= 3321 && frame < 3450) {
      return { border: theme.cyan, bg: "rgba(76, 201, 240, 0.20)", glow: `0 0 16px ${theme.cyan}` };
    }

    return null;
  };

  // -------------------------------------------------------------------------
  // Strict Anti-Spoiler: Helper to determine target highlights in Result Matrix
  // -------------------------------------------------------------------------
  const getResultCellTargetHighlight = (r: number, c: number) => {
    // Trace 1 target: (0, 4) strictly starts at F804 ("Its destination is row 0 column 4")
    if (r === 0 && c === 4 && frame >= 804 && frame < 965) {
      return { border: theme.cyan, isDashed: true, glow: `0 0 20px ${theme.cyan}` };
    }
    // Trace 2 target: (2, 3) strictly starts at F1137 ("Its destination is row 2 column 3")
    if (r === 2 && c === 3 && frame >= 1137 && frame < 1275) {
      return { border: theme.cyan, isDashed: true, glow: `0 0 20px ${theme.cyan}` };
    }
    // Trace 3 target: (2, 2) strictly starts at F1441 ("Its destination is still row 2 column 2")
    if (r === 2 && c === 2 && frame >= 1441 && frame < 1600) {
      return { border: theme.gold, isDashed: true, glow: `0 0 20px ${theme.gold}` };
    }
    // Trace 4 target: (1, 1) strictly starts at F1872 ("which is 1")
    if (r === 1 && c === 1 && frame >= 1872 && frame < 2045) {
      return { border: theme.cyan, isDashed: true, glow: `0 0 20px ${theme.cyan}` };
    }

    // Row-to-column sweep targets:
    if (c === 4 && frame >= 2747 && frame < 2871) {
      return { border: theme.cyan, isDashed: false, glow: `0 0 16px ${theme.cyan}` };
    }
    if (c === 3 && frame >= 2887 && frame < 3107) {
      return { border: theme.gold, isDashed: false, glow: `0 0 16px ${theme.gold}` };
    }
    if (c === 2 && frame >= 3123 && frame < 3204) {
      return { border: theme.good, isDashed: false, glow: `0 0 16px ${theme.good}` };
    }
    if (c === 1 && frame >= 3220 && frame < 3321) {
      return { border: theme.accent, isDashed: false, glow: `0 0 16px ${theme.accent}` };
    }
    if (c === 0 && frame >= 3321 && frame < 3450) {
      return { border: theme.cyan, isDashed: false, glow: `0 0 16px ${theme.cyan}` };
    }

    // Celebration pulse in Beat 23 (F3461..F3730)
    if (frame >= 3461 && frame < 3730) {
      return { border: theme.good, isDashed: false, glow: `0 0 22px ${theme.good}` };
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
      <Audio src={staticFile("audio/014/03-method1-trace.mp3")} />

      {/* =====================================================================
          TOP HEADER BAR (Zero-Collision: Y: 36..105, strictly clean metadata)
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
              padding: "6px 16px",
              borderRadius: 8,
              border: `1.5px solid ${theme.chalkLine}`,
              backgroundColor: "rgba(17, 37, 29, 0.92)",
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
              padding: "6px 16px",
              borderRadius: 8,
              border: `1.5px solid ${theme.pivot}`,
              backgroundColor: "rgba(255, 209, 102, 0.12)",
              fontSize: 14,
              fontFamily: fonts.code,
              fontWeight: 700,
              color: theme.pivot,
            }}
          >
            LEETCODE 48 · ROTATE IMAGE
          </div>
        </div>

        <div style={{ display: "inline-flex", alignItems: "center", gap: 12 }}>
          <div
            style={{
              padding: "6px 18px",
              borderRadius: 8,
              backgroundColor: "rgba(76, 201, 240, 0.12)",
              border: `1.5px solid ${theme.cyan}`,
              fontSize: 15,
              fontFamily: fonts.code,
              fontWeight: 700,
              color: theme.cyan,
              letterSpacing: 1,
            }}
          >
            METHOD 1: EXTRA DESTINATION MATRIX
          </div>
        </div>
      </div>

      {/* =====================================================================
          LEFT: SOURCE MATRIX (matrix[5][5])
          ===================================================================== */}
      <div
        style={{
          position: "absolute",
          left: LEFT_GRID_X - 52,
          top: GRIDS_Y - 70,
          opacity: leftEntrance,
          transform: `scale(${interpolate(leftEntrance, [0, 1], [0.94, 1.0])})`,
          zIndex: 5,
        }}
      >
        {/* Source Matrix Title */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: GRID_WIDTH + 52,
            marginBottom: 12,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <span
              style={{
                fontFamily: fonts.code,
                fontSize: 18,
                fontWeight: 700,
                color: theme.cyan,
                letterSpacing: 1,
                whiteSpace: "nowrap",
              }}
            >
              SOURCE: matrix[5][5]
            </span>
            <span
              style={{
                fontSize: 12,
                fontFamily: fonts.code,
                padding: "2px 8px",
                borderRadius: 4,
                backgroundColor: "rgba(76, 201, 240, 0.15)",
                color: theme.cyan,
              }}
            >
              N = 5
            </span>
          </div>

          {/* Strict Zero-Spoiler: READ ONLY tag appears only at F167 */}
          {frame >= 167 && (
            <span
              style={{
                fontSize: 12,
                fontFamily: fonts.code,
                fontWeight: 700,
                color: theme.cyan,
                border: `1px solid ${theme.cyan}`,
                padding: "2px 8px",
                borderRadius: 4,
                backgroundColor: "rgba(76, 201, 240, 0.12)",
              }}
            >
              READ ONLY
            </span>
          )}
        </div>

        {/* Column Headers (c=0..4) */}
        <div style={{ display: "flex", marginLeft: 44, marginBottom: 8, gap: CELL_GAP }}>
          {[0, 1, 2, 3, 4].map((c) => (
            <div
              key={`src-col-${c}`}
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
                key={`src-row-${r}`}
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

          {/* 5x5 Cells Grid with RoughBox Framing */}
          <div
            style={{
              position: "relative",
              width: GRID_WIDTH,
              height: GRID_HEIGHT,
              backgroundColor: "rgba(17, 37, 29, 0.75)",
              borderRadius: 10,
              padding: 2,
            }}
          >
            {/* Hand-drawn chalk border using RoughBox */}
            <div style={{ position: "absolute", top: -4, left: -4, pointerEvents: "none" }}>
              <RoughBox
                width={GRID_WIDTH + 8}
                height={GRID_HEIGHT + 8}
                stroke={theme.cyan}
                seed={11}
                strokeWidth={2}
                durationInFrames={20}
              />
            </div>

            {SOURCE_MATRIX.map((row, r) =>
              row.map((val, c) => {
                const hl = getSourceCellHighlight(r, c);
                const isCenter = r === 2 && c === 2;

                return (
                  <div
                    key={`src-cell-${r}-${c}`}
                    style={{
                      position: "absolute",
                      left: c * PITCH,
                      top: r * PITCH,
                      width: CELL_SIZE,
                      height: CELL_SIZE,
                      borderRadius: 8,
                      backgroundColor: hl ? hl.bg : "rgba(25, 59, 45, 0.45)",
                      border: `2px solid ${hl ? hl.border : theme.chalkLine}`,
                      boxShadow: hl ? hl.glow : "none",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      zIndex: 1,
                    }}
                  >
                    <span
                      style={{
                        fontFamily: fonts.code,
                        fontSize: 28,
                        fontWeight: 700,
                        color: hl ? hl.border : theme.chalkText,
                      }}
                    >
                      {val}
                    </span>

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
          </div>
        </div>

        {/* Source Sub-label */}
        <div
          style={{
            marginTop: 10,
            marginLeft: 44,
            fontSize: 13,
            fontFamily: fonts.code,
            color: theme.chalkSub,
            letterSpacing: 0.5,
          }}
        >
          Untouched original input in memory
        </div>
      </div>

      {/* =====================================================================
          RIGHT: RESULT MATRIX (result[5][5])
          Strict Anti-Spoiler: Hidden until F54 ("create another matrix")
          ===================================================================== */}
      {frame >= 54 && (
        <div
          style={{
            position: "absolute",
            left: RIGHT_GRID_X - 52,
            top: GRIDS_Y - 70,
            opacity: rightEntrance,
            transform: `scale(${interpolate(rightEntrance, [0, 1], [0.94, 1.0])})`,
            zIndex: 5,
          }}
        >
          {/* Result Matrix Title */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: GRID_WIDTH + 52,
              marginBottom: 12,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <span
                style={{
                  fontFamily: fonts.code,
                  fontSize: 17,
                  fontWeight: 700,
                  color: theme.good,
                  letterSpacing: 0.8,
                  whiteSpace: "nowrap",
                }}
              >
                RESULT: result[5][5]
              </span>
              <span
                style={{
                  fontSize: 11,
                  fontFamily: fonts.code,
                  fontWeight: 700,
                  padding: "2px 8px",
                  borderRadius: 4,
                  backgroundColor:
                    frame >= 3461
                      ? "rgba(82, 183, 136, 0.25)"
                      : frame >= 167
                      ? "rgba(82, 183, 136, 0.15)"
                      : "rgba(76, 201, 240, 0.15)",
                  color: frame >= 167 ? theme.good : theme.cyan,
                  border: `1px solid ${frame >= 167 ? theme.good : theme.cyan}`,
                  whiteSpace: "nowrap",
                }}
              >
                {frame >= 3461
                  ? "✓ ROTATION COMPLETE"
                  : frame >= 167
                  ? "WRITE TARGET"
                  : "ALLOCATED (EMPTY 5×5)"}
              </span>
            </div>
          </div>

          {/* Column Headers (c=0..4) */}
          <div style={{ display: "flex", marginLeft: 44, marginBottom: 8, gap: CELL_GAP }}>
            {[0, 1, 2, 3, 4].map((c) => (
              <div
                key={`res-col-${c}`}
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
                  key={`res-row-${r}`}
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

            {/* 5x5 Result Cells Grid with RoughBox Framing */}
            <div
              style={{
                position: "relative",
                width: GRID_WIDTH,
                height: GRID_HEIGHT,
                backgroundColor: "rgba(17, 37, 29, 0.75)",
                borderRadius: 10,
                padding: 2,
              }}
            >
              {/* Hand-drawn chalk border using RoughBox */}
              <div style={{ position: "absolute", top: -4, left: -4, pointerEvents: "none" }}>
                <RoughBox
                  width={GRID_WIDTH + 8}
                  height={GRID_HEIGHT + 8}
                  stroke={frame >= 3461 ? theme.good : theme.chalkLine}
                  seed={22}
                  strokeWidth={2}
                  durationInFrames={20}
                />
              </div>

              {TARGET_ROTATED_MATRIX.map((row, r) =>
                row.map((val, c) => {
                  const settled = isResultCellSettled(r, c);
                  const targetHl = getResultCellTargetHighlight(r, c);

                  let borderColor: string = theme.chalkLine;
                  let bg = "rgba(25, 59, 45, 0.2)";
                  let glow = "none";

                  if (targetHl) {
                    borderColor = targetHl.border;
                    glow = targetHl.glow;
                    bg = "rgba(76, 201, 240, 0.14)";
                  }

                  if (settled) {
                    borderColor = theme.good;
                    bg = "rgba(82, 183, 136, 0.25)";
                    glow = "0 0 12px rgba(82, 183, 136, 0.35)";
                  }

                  return (
                    <div
                      key={`res-cell-${r}-${c}`}
                      style={{
                        position: "absolute",
                        left: c * PITCH,
                        top: r * PITCH,
                        width: CELL_SIZE,
                        height: CELL_SIZE,
                        borderRadius: 8,
                        backgroundColor: bg,
                        border: `${targetHl?.isDashed ? "2px dashed" : "2px solid"} ${borderColor}`,
                        boxShadow: glow,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        zIndex: 1,
                      }}
                    >
                      {settled ? (
                        <span
                          style={{
                            fontFamily: fonts.code,
                            fontSize: 28,
                            fontWeight: 700,
                            color: theme.chalkText,
                          }}
                        >
                          {val}
                        </span>
                      ) : (
                        <span
                          style={{
                            fontFamily: fonts.code,
                            fontSize: 16,
                            fontWeight: 500,
                            color: theme.chalkSub,
                            opacity: 0.35,
                          }}
                        >
                          ·
                        </span>
                      )}
                    </div>
                  );
                })
              )}
            </div>
          </div>

          {/* Result Sub-label */}
          <div
            style={{
              marginTop: 10,
              marginLeft: 44,
              fontSize: 13,
              fontFamily: fonts.code,
              color: frame >= 3461 ? theme.good : theme.chalkSub,
              fontWeight: frame >= 3461 ? 700 : 400,
              letterSpacing: 0.5,
            }}
          >
            {frame >= 3461
              ? "✓ 90° Clockwise Rotation Verified"
              : "Directly populated without overwrites"}
          </div>
        </div>
      )}

      {/* =====================================================================
          CENTER ZONE: FORMULA & PROGRESSIVE ARITHMETIC (X: 650..1270, Y: 190..570)
          Strict Anti-Spoiler: Calculation details appear strictly when spoken!
          ===================================================================== */}
      {frame >= 397 && (
        <div
          style={{
            position: "absolute",
            left: 650,
            top: 190,
            width: 620,
            height: 380,
            opacity: centerFormulaEntrance,
            transform: `scale(${interpolate(centerFormulaEntrance, [0, 1], [0.94, 1.0])})`,
            zIndex: 8,
          }}
        >
          {/* Hand-drawn chalk border using RoughBox */}
          <div style={{ position: "absolute", top: 0, left: 0, pointerEvents: "none" }}>
            <RoughBox
              width={620}
              height={380}
              stroke={theme.cyan}
              seed={14}
              strokeWidth={2.5}
              durationInFrames={20}
            />
          </div>

          {/* Content layer inside RoughBox */}
          <div
            style={{
              position: "relative",
              zIndex: 1,
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(17, 37, 29, 0.94)",
              borderRadius: 12,
              padding: "16px 22px",
              display: "flex",
              flexDirection: "column",
              gap: 10,
              boxSizing: "border-box",
            }}
          >
            {/* Header */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                borderBottom: `1px solid ${theme.chalkLine}`,
                paddingBottom: 8,
              }}
            >
              <span
                style={{
                  fontFamily: fonts.code,
                  fontSize: 13,
                  fontWeight: 700,
                  letterSpacing: 1.2,
                  color: theme.cyan,
                }}
              >
                ROTATION MAPPING FORMULA
              </span>
              <span
                style={{
                  fontSize: 11,
                  fontFamily: fonts.code,
                  color: theme.gold,
                  backgroundColor: "rgba(255, 209, 102, 0.12)",
                  border: `1px solid ${theme.gold}`,
                  padding: "2px 8px",
                  borderRadius: 4,
                }}
              >
                DERIVED IN SCENE 02
              </span>
            </div>

            {/* Formula Expression */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 4,
                padding: "4px 0",
              }}
            >
              <div
                style={{
                  fontFamily: fonts.code,
                  fontSize: 22,
                  fontWeight: 700,
                  color: theme.chalkText,
                  letterSpacing: 1,
                }}
              >
                result[c][4 - r] = matrix[r][c]
              </div>
              <div
                style={{
                  fontFamily: fonts.code,
                  fontSize: 15,
                  color: theme.gold,
                  letterSpacing: 0.8,
                }}
              >
                (r, c) ──► (c, n - 1 - r)
              </div>
            </div>

            {/* Dynamic Step-by-Step Calculation Breakdown (Strictly Anti-Spoiled) */}
            <div
              style={{
                backgroundColor: "rgba(25, 59, 45, 0.55)",
                border: `1.5px solid ${theme.chalkLine}`,
                borderRadius: 8,
                padding: "10px 14px",
                display: "flex",
                flexDirection: "column",
                gap: 6,
                minHeight: 180,
                justifyContent: "center",
              }}
            >
              {/* Idle state before first trace */}
              {frame < 676 && (
                <div style={{ textAlign: "center", fontFamily: fonts.code, fontSize: 13, color: theme.chalkSub }}>
                  {frame >= 605
                    ? "3-STEP PIPELINE: [1. READ] ➔ [2. CALCULATE] ➔ [3. WRITE]"
                    : "Ready to trace sample coordinates step-by-step..."}
                </div>
              )}

              {/* Anchor 4..6: Value 1 at (0, 0) — Strict Progressive Reveal */}
              {frame >= 676 && frame < 1011 && (
                <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
                  <div
                    style={{
                      fontFamily: fonts.code,
                      fontSize: 14,
                      fontWeight: 700,
                      color: theme.gold,
                    }}
                  >
                    STEP 1 · READ SOURCE CELL: matrix[0][0] = 1 (r = 0, c = 0)
                  </div>

                  {/* Destination calculation reveals strictly at F804 */}
                  {frame >= 804 ? (
                    <div style={{ display: "flex", flexDirection: "column", gap: 3 }}>
                      <div style={{ fontFamily: fonts.code, fontSize: 13, color: theme.chalkText }}>
                        STEP 2 · CALCULATE: new_row = c = <span style={{ color: theme.cyan, fontWeight: 700 }}>0</span>
                      </div>
                      <div style={{ fontFamily: fonts.code, fontSize: 13, color: theme.chalkText }}>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;new_col = 4 - r = 4 - 0 = <span style={{ color: theme.cyan, fontWeight: 700 }}>4</span>
                      </div>
                      <div style={{ fontFamily: fonts.code, fontSize: 13, color: theme.cyan, fontWeight: 700 }}>
                        ➔ Target Slot: result[0][4]
                      </div>
                    </div>
                  ) : (
                    <div style={{ fontFamily: fonts.code, fontSize: 12, color: theme.chalkSub, fontStyle: "italic" }}>
                      Calculating rotated coordinates...
                    </div>
                  )}

                  {/* Placement result reveals strictly at F931 */}
                  {frame >= 931 && (
                    <div
                      style={{
                        fontFamily: fonts.code,
                        fontSize: 14,
                        fontWeight: 700,
                        color: theme.good,
                        marginTop: 2,
                      }}
                    >
                      STEP 3 · WRITE SAFELY: result[0][4] = 1 ✓
                    </div>
                  )}
                </div>
              )}

              {/* Anchor 7..9: Value 8 at (1, 2) — Strict Progressive Reveal */}
              {frame >= 1011 && frame < 1294 && (
                <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
                  <div
                    style={{
                      fontFamily: fonts.code,
                      fontSize: 14,
                      fontWeight: 700,
                      color: theme.gold,
                    }}
                  >
                    STEP 1 · READ SOURCE CELL: matrix[1][2] = 8 (r = 1, c = 2)
                  </div>

                  {/* Destination calculation reveals strictly at F1137 */}
                  {frame >= 1137 ? (
                    <div style={{ display: "flex", flexDirection: "column", gap: 3 }}>
                      <div style={{ fontFamily: fonts.code, fontSize: 13, color: theme.chalkText }}>
                        STEP 2 · CALCULATE: new_row = c = <span style={{ color: theme.cyan, fontWeight: 700 }}>2</span>
                      </div>
                      <div style={{ fontFamily: fonts.code, fontSize: 13, color: theme.chalkText }}>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;new_col = 4 - r = 4 - 1 = <span style={{ color: theme.cyan, fontWeight: 700 }}>3</span>
                      </div>
                      <div style={{ fontFamily: fonts.code, fontSize: 13, color: theme.cyan, fontWeight: 700 }}>
                        ➔ Target Slot: result[2][3]
                      </div>
                    </div>
                  ) : (
                    <div style={{ fontFamily: fonts.code, fontSize: 12, color: theme.chalkSub, fontStyle: "italic" }}>
                      Calculating rotated coordinates...
                    </div>
                  )}

                  {/* Placement reveals strictly at F1250 */}
                  {frame >= 1250 && (
                    <div
                      style={{
                        fontFamily: fonts.code,
                        fontSize: 14,
                        fontWeight: 700,
                        color: theme.good,
                        marginTop: 2,
                      }}
                    >
                      STEP 3 · WRITE SAFELY: result[2][3] = 8 ✓
                    </div>
                  )}
                </div>
              )}

              {/* Anchor 10..12: Value 13 at (2, 2) — Strict Progressive Reveal */}
              {frame >= 1294 && frame < 1627 && (
                <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
                  <div
                    style={{
                      fontFamily: fonts.code,
                      fontSize: 14,
                      fontWeight: 700,
                      color: theme.gold,
                    }}
                  >
                    STEP 1 · READ SOURCE CELL: matrix[2][2] = 13 (CENTER)
                  </div>

                  {/* Destination calculation reveals strictly at F1441 */}
                  {frame >= 1441 ? (
                    <div style={{ display: "flex", flexDirection: "column", gap: 3 }}>
                      <div style={{ fontFamily: fonts.code, fontSize: 13, color: theme.chalkText }}>
                        STEP 2 · CALCULATE: new_row = c = <span style={{ color: theme.cyan, fontWeight: 700 }}>2</span>
                      </div>
                      <div style={{ fontFamily: fonts.code, fontSize: 13, color: theme.chalkText }}>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;new_col = 4 - r = 4 - 2 = <span style={{ color: theme.cyan, fontWeight: 700 }}>2</span>
                      </div>
                      <div style={{ fontFamily: fonts.code, fontSize: 13, color: theme.gold, fontWeight: 700 }}>
                        ➔ Target Slot: result[2][2] (INVARIANT FIXED POINT)
                      </div>
                    </div>
                  ) : (
                    <div style={{ fontFamily: fonts.code, fontSize: 12, color: theme.chalkSub, fontStyle: "italic" }}>
                      Calculating center destination...
                    </div>
                  )}

                  {/* Placement reveals strictly at F1573 */}
                  {frame >= 1573 && (
                    <div
                      style={{
                        fontFamily: fonts.code,
                        fontSize: 14,
                        fontWeight: 700,
                        color: theme.good,
                        marginTop: 2,
                      }}
                    >
                      STEP 3 · WRITE SAFELY: result[2][2] = 13 (Center stays where it is) ✓
                    </div>
                  )}
                </div>
              )}

              {/* Anchor 13..15: Value 17 at (3, 1) — Strict Progressive Reveal */}
              {frame >= 1627 && frame < 2134 && (
                <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
                  <div
                    style={{
                      fontFamily: fonts.code,
                      fontSize: 14,
                      fontWeight: 700,
                      color: theme.gold,
                    }}
                  >
                    STEP 1 · READ SOURCE CELL: matrix[3][1] = 17 (r = 3, c = 1)
                  </div>

                  {/* Destination calculation reveals progressively: row at F1792, col at F1872 */}
                  {frame >= 1792 ? (
                    <div style={{ display: "flex", flexDirection: "column", gap: 3 }}>
                      <div style={{ fontFamily: fonts.code, fontSize: 13, color: theme.chalkText }}>
                        STEP 2 · CALCULATE: new_row = c = <span style={{ color: theme.cyan, fontWeight: 700 }}>1</span>
                      </div>
                      {frame >= 1872 ? (
                        <>
                          <div style={{ fontFamily: fonts.code, fontSize: 13, color: theme.chalkText }}>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;new_col = 4 - r = 4 - 3 = <span style={{ color: theme.cyan, fontWeight: 700 }}>1</span>
                          </div>
                          <div style={{ fontFamily: fonts.code, fontSize: 13, color: theme.cyan, fontWeight: 700 }}>
                            ➔ Target Slot: result[1][1]
                          </div>
                        </>
                      ) : (
                        <div style={{ fontFamily: fonts.code, fontSize: 12, color: theme.chalkSub, fontStyle: "italic" }}>
                          Calculating new column...
                        </div>
                      )}
                    </div>
                  ) : (
                    <div style={{ fontFamily: fonts.code, fontSize: 12, color: theme.chalkSub, fontStyle: "italic" }}>
                      Calculating rotated coordinates...
                    </div>
                  )}

                  {/* Placement reveals strictly at F2012 */}
                  {frame >= 2012 && (
                    <div
                      style={{
                        fontFamily: fonts.code,
                        fontSize: 14,
                        fontWeight: 700,
                        color: theme.good,
                        marginTop: 2,
                      }}
                    >
                      STEP 3 · WRITE SAFELY: result[1][1] = 17 ✓
                    </div>
                  )}
                </div>
              )}

              {/* Anchor 16: The Whole Idea Pipeline (F2134..F2454) */}
              {frame >= 2134 && frame < 2455 && (
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  <div
                    style={{
                      fontFamily: fonts.code,
                      fontSize: 13,
                      fontWeight: 700,
                      color: theme.cyan,
                      letterSpacing: 1,
                    }}
                  >
                    THE CORE PIPELINE EXECUTION
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: 6,
                    }}
                  >
                    <div
                      style={{
                        padding: "6px 10px",
                        borderRadius: 6,
                        backgroundColor: frame >= 2187 ? "rgba(76, 201, 240, 0.2)" : "rgba(76, 201, 240, 0.08)",
                        border: `1.5px solid ${frame >= 2187 ? theme.cyan : theme.chalkLine}`,
                        fontFamily: fonts.code,
                        fontSize: 12,
                        color: frame >= 2187 ? theme.cyan : theme.chalkSub,
                        fontWeight: 700,
                      }}
                    >
                      1. READ matrix[r][c]
                    </div>
                    <span style={{ color: theme.chalkSub }}>➔</span>
                    <div
                      style={{
                        padding: "6px 10px",
                        borderRadius: 6,
                        backgroundColor: frame >= 2231 ? "rgba(255, 209, 102, 0.2)" : "rgba(255, 209, 102, 0.08)",
                        border: `1.5px solid ${frame >= 2231 ? theme.gold : theme.chalkLine}`,
                        fontFamily: fonts.code,
                        fontSize: 12,
                        color: frame >= 2231 ? theme.gold : theme.chalkSub,
                        fontWeight: 700,
                      }}
                    >
                      2. CALC (c, 4-r)
                    </div>
                    <span style={{ color: theme.chalkSub }}>➔</span>
                    <div
                      style={{
                        padding: "6px 10px",
                        borderRadius: 6,
                        backgroundColor: frame >= 2320 ? "rgba(82, 183, 136, 0.2)" : "rgba(82, 183, 136, 0.08)",
                        border: `1.5px solid ${frame >= 2320 ? theme.good : theme.chalkLine}`,
                        fontFamily: fonts.code,
                        fontSize: 12,
                        color: frame >= 2320 ? theme.good : theme.chalkSub,
                        fontWeight: 700,
                      }}
                    >
                      3. WRITE result
                    </div>
                  </div>
                  <div style={{ fontFamily: fonts.code, fontSize: 12, color: theme.chalkSub, textAlign: "center" }}>
                    Cost per cell: O(1) time · Completely safe from overwrite hazards
                  </div>
                </div>
              )}

              {/* Anchors 17..21: Row-to-Column Sweeps (F2455..F3450) */}
              {frame >= 2455 && frame < 3451 && (
                <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
                  <div
                    style={{
                      fontFamily: fonts.code,
                      fontSize: 13,
                      fontWeight: 700,
                      color: theme.cyan,
                      marginBottom: 2,
                    }}
                  >
                    ROW-BY-ROW TRANSFORMATION PROGRESS
                  </div>
                  <div style={{ fontFamily: fonts.code, fontSize: 13, color: frame >= 2455 && frame < 2871 ? theme.cyan : theme.good }}>
                    {frame >= 2871 ? "✓" : "➔"} Source Row 0 [1..5] ──► Result Column 4
                  </div>
                  <div style={{ fontFamily: fonts.code, fontSize: 13, color: frame >= 2887 && frame < 3107 ? theme.gold : frame >= 3107 ? theme.good : theme.chalkSub }}>
                    {frame >= 3107 ? "✓" : frame >= 2887 ? "➔" : "·"} Source Row 1 [6..10] ──► Result Column 3
                  </div>
                  <div style={{ fontFamily: fonts.code, fontSize: 13, color: frame >= 3123 && frame < 3204 ? theme.good : frame >= 3204 ? theme.good : theme.chalkSub }}>
                    {frame >= 3204 ? "✓" : frame >= 3123 ? "➔" : "·"} Source Row 2 [11..15] ──► Result Column 2
                  </div>
                  <div style={{ fontFamily: fonts.code, fontSize: 13, color: frame >= 3220 && frame < 3321 ? theme.accent : frame >= 3321 ? theme.good : theme.chalkSub }}>
                    {frame >= 3321 ? "✓" : frame >= 3220 ? "➔" : "·"} Source Row 3 [16..20] ──► Result Column 1
                  </div>
                  <div style={{ fontFamily: fonts.code, fontSize: 13, color: frame >= 3321 ? theme.cyan : theme.chalkSub }}>
                    {frame >= 3440 ? "✓" : frame >= 3321 ? "➔" : "·"} Source Row 4 [21..25] ──► Result Column 0
                  </div>
                </div>
              )}

              {/* Anchors 22..25: Rotation Complete & Next Preview (Strictly Anti-Spoiled) */}
              {frame >= 3451 && (
                <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                  <div
                    style={{
                      fontFamily: fonts.code,
                      fontSize: 14,
                      fontWeight: 700,
                      color: theme.good,
                    }}
                  >
                    ✓ FULL 5×5 ROTATION COMPLETED
                  </div>
                  <div style={{ fontFamily: fonts.code, fontSize: 13, color: theme.chalkText }}>
                    All 25 elements written to valid rotated coordinates.
                  </div>
                  <div style={{ fontFamily: fonts.code, fontSize: 12, color: theme.chalkSub }}>
                    Correct 90° clockwise orientation verified mathematically.
                  </div>

                  {/* Code handoff reveals strictly at F4342 ("Now let's translate this exact idea into code") */}
                  {frame >= 4342 && (
                    <div
                      style={{
                        fontFamily: fonts.code,
                        fontSize: 13,
                        fontWeight: 700,
                        color: theme.gold,
                        marginTop: 4,
                        paddingTop: 6,
                        borderTop: `1px dashed ${theme.chalkLine}`,
                      }}
                    >
                      NEXT: TRANSLATE INTO CLEAN CODE (SCENE 04)
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* =====================================================================
          FLYING TILES (Deterministic Bezier Flight Across Center Stage)
          Strict Anti-Spoiler: Tiles take off strictly on spoken action anchors
          ===================================================================== */}
      {/* Flight 1: Value 1 at (0, 0) -> (0, 4) [F931..F965] */}
      {frame >= 931 && frame < 965 && (
        <BezierFlight
          from={{ x: LEFT_GRID_X + 0 * PITCH + CELL_SIZE / 2, y: GRIDS_Y + 0 * PITCH + CELL_SIZE / 2 }}
          to={{ x: RIGHT_GRID_X + 4 * PITCH + CELL_SIZE / 2, y: GRIDS_Y + 0 * PITCH + CELL_SIZE / 2 }}
          peak={60}
          start={931}
          dur={34}
          trail={theme.gold}
        >
          <div
            style={{
              width: CELL_SIZE,
              height: CELL_SIZE,
              borderRadius: 8,
              backgroundColor: "#164B37",
              border: `2px solid ${theme.gold}`,
              boxShadow: `0 0 20px ${theme.gold}`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span style={{ fontFamily: fonts.code, fontSize: 28, fontWeight: 700, color: theme.gold }}>
              1
            </span>
          </div>
        </BezierFlight>
      )}

      {/* Flight 2: Value 8 at (1, 2) -> (2, 3) [F1250..F1275] */}
      {frame >= 1250 && frame < 1275 && (
        <BezierFlight
          from={{ x: LEFT_GRID_X + 2 * PITCH + CELL_SIZE / 2, y: GRIDS_Y + 1 * PITCH + CELL_SIZE / 2 }}
          to={{ x: RIGHT_GRID_X + 3 * PITCH + CELL_SIZE / 2, y: GRIDS_Y + 2 * PITCH + CELL_SIZE / 2 }}
          peak={55}
          start={1250}
          dur={25}
          trail={theme.gold}
        >
          <div
            style={{
              width: CELL_SIZE,
              height: CELL_SIZE,
              borderRadius: 8,
              backgroundColor: "#164B37",
              border: `2px solid ${theme.gold}`,
              boxShadow: `0 0 20px ${theme.gold}`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span style={{ fontFamily: fonts.code, fontSize: 28, fontWeight: 700, color: theme.gold }}>
              8
            </span>
          </div>
        </BezierFlight>
      )}

      {/* Flight 3: Value 13 at (2, 2) -> (2, 2) [F1573..F1600] */}
      {frame >= 1573 && frame < 1600 && (
        <BezierFlight
          from={{ x: LEFT_GRID_X + 2 * PITCH + CELL_SIZE / 2, y: GRIDS_Y + 2 * PITCH + CELL_SIZE / 2 }}
          to={{ x: RIGHT_GRID_X + 2 * PITCH + CELL_SIZE / 2, y: GRIDS_Y + 2 * PITCH + CELL_SIZE / 2 }}
          peak={45}
          start={1573}
          dur={27}
          trail={theme.gold}
        >
          <div
            style={{
              width: CELL_SIZE,
              height: CELL_SIZE,
              borderRadius: 8,
              backgroundColor: "#164B37",
              border: `2px solid ${theme.gold}`,
              boxShadow: `0 0 20px ${theme.gold}`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span style={{ fontFamily: fonts.code, fontSize: 28, fontWeight: 700, color: theme.gold }}>
              13
            </span>
          </div>
        </BezierFlight>
      )}

      {/* Flight 4: Value 17 at (3, 1) -> (1, 1) [F2012..F2045] */}
      {frame >= 2012 && frame < 2045 && (
        <BezierFlight
          from={{ x: LEFT_GRID_X + 1 * PITCH + CELL_SIZE / 2, y: GRIDS_Y + 3 * PITCH + CELL_SIZE / 2 }}
          to={{ x: RIGHT_GRID_X + 1 * PITCH + CELL_SIZE / 2, y: GRIDS_Y + 1 * PITCH + CELL_SIZE / 2 }}
          peak={65}
          start={2012}
          dur={33}
          trail={theme.gold}
        >
          <div
            style={{
              width: CELL_SIZE,
              height: CELL_SIZE,
              borderRadius: 8,
              backgroundColor: "#164B37",
              border: `2px solid ${theme.gold}`,
              boxShadow: `0 0 20px ${theme.gold}`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span style={{ fontFamily: fonts.code, fontSize: 28, fontWeight: 700, color: theme.gold }}>
              17
            </span>
          </div>
        </BezierFlight>
      )}

      {/* =====================================================================
          CHALK DUST BURSTS ON LANDING
          ===================================================================== */}
      {/* Landing 1: (0, 4) at F965 */}
      <ChalkDust
        x={RIGHT_GRID_X + 4 * PITCH + CELL_SIZE / 2}
        y={GRIDS_Y + 0 * PITCH + CELL_SIZE / 2}
        start={965}
        color={theme.good}
        count={12}
        radius={45}
        life={18}
        seed={101}
      />

      {/* Landing 2: (2, 3) at F1275 */}
      <ChalkDust
        x={RIGHT_GRID_X + 3 * PITCH + CELL_SIZE / 2}
        y={GRIDS_Y + 2 * PITCH + CELL_SIZE / 2}
        start={1275}
        color={theme.good}
        count={12}
        radius={45}
        life={18}
        seed={102}
      />

      {/* Landing 3: (2, 2) at F1600 */}
      <ChalkDust
        x={RIGHT_GRID_X + 2 * PITCH + CELL_SIZE / 2}
        y={GRIDS_Y + 2 * PITCH + CELL_SIZE / 2}
        start={1600}
        color={theme.gold}
        count={14}
        radius={50}
        life={18}
        seed={103}
      />

      {/* Landing 4: (1, 1) at F2045 */}
      <ChalkDust
        x={RIGHT_GRID_X + 1 * PITCH + CELL_SIZE / 2}
        y={GRIDS_Y + 1 * PITCH + CELL_SIZE / 2}
        start={2045}
        color={theme.good}
        count={12}
        radius={45}
        life={18}
        seed={104}
      />

      {/* Celebration landing burst on rotation complete at F3440 */}
      <ChalkDust
        x={RIGHT_GRID_X + 2 * PITCH + CELL_SIZE / 2}
        y={GRIDS_Y + 2 * PITCH + CELL_SIZE / 2}
        start={3440}
        color={theme.good}
        count={24}
        radius={90}
        life={24}
        seed={105}
      />

      {/* =====================================================================
          BOTTOM ZONE: EXECUTION MONITOR & TRADEOFF CARDS (Y: 620..770)
          Clearance to Captions (Y: 960): >= 190px
          ===================================================================== */}
      {/* Phase A: Execution & Pipeline Monitor (F676..F3751) */}
      {frame >= 676 && frame < 3752 && (
        <div
          style={{
            position: "absolute",
            left: 360,
            top: 620,
            width: 1200,
            height: 145,
            zIndex: 10,
          }}
        >
          {/* Hand-drawn chalk border using RoughBox */}
          <div style={{ position: "absolute", top: 0, left: 0, pointerEvents: "none" }}>
            <RoughBox
              width={1200}
              height={145}
              stroke={theme.chalkBorder}
              seed={33}
              strokeWidth={2}
              durationInFrames={20}
            />
          </div>

          <div
            style={{
              position: "relative",
              zIndex: 1,
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(17, 37, 29, 0.92)",
              borderRadius: 12,
              padding: "16px 28px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              boxSizing: "border-box",
            }}
          >
            {/* Col 1: Progress Tracker */}
            <div style={{ display: "flex", flexDirection: "column", gap: 6, minWidth: 260 }}>
              <div style={{ fontFamily: fonts.code, fontSize: 13, fontWeight: 700, color: theme.cyan }}>
                TRANSFORMATION MONITOR
              </div>
              <div style={{ fontFamily: fonts.code, fontSize: 20, fontWeight: 700, color: theme.chalkText }}>
                {settledCount} <span style={{ fontSize: 14, color: theme.chalkSub }}>/ 25 Cells Settled</span>
              </div>
              {/* Chalk Progress Bar */}
              <div
                style={{
                  width: 240,
                  height: 8,
                  borderRadius: 4,
                  backgroundColor: "rgba(25, 59, 45, 0.8)",
                  border: `1px solid ${theme.chalkLine}`,
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    width: `${(settledCount / 25) * 100}%`,
                    height: "100%",
                    backgroundColor: settledCount === 25 ? theme.good : theme.cyan,
                    transition: "none",
                  }}
                />
              </div>
            </div>

            {/* Col 2: Current Algorithmic Operation */}
            <div style={{ display: "flex", flexDirection: "column", gap: 6, flex: 1, padding: "0 30px" }}>
              <div style={{ fontFamily: fonts.code, fontSize: 13, fontWeight: 700, color: theme.gold }}>
                CURRENT ACTION
              </div>
              <div style={{ fontFamily: fonts.code, fontSize: 14, color: theme.chalkText, lineHeight: 1.4 }}>
                {frame < 2134
                  ? "Tracing sample cell coordinates: (r, c) ──▶ (c, 4 - r)"
                  : frame < 2455
                  ? "Standardizing 3-step pipeline: Read ➔ Calculate ➔ Write"
                  : frame < 3451
                  ? "Executing systematic row-to-column sweeps across all 5 rows"
                  : "All 25 elements correctly rotated in destination matrix"}
              </div>
            </div>

            {/* Col 3: Memory Mode Specification */}
            <div style={{ display: "flex", flexDirection: "column", gap: 6, minWidth: 240, textAlign: "right" }}>
              <div style={{ fontFamily: fonts.code, fontSize: 13, fontWeight: 700, color: theme.chalkSub }}>
                STORAGE ARCHITECTURE
              </div>
              <div style={{ fontFamily: fonts.code, fontSize: 14, fontWeight: 700, color: theme.cyan }}>
                Auxiliary Grid (result[5][5])
              </div>
              <div style={{ fontFamily: fonts.code, fontSize: 12, color: theme.chalkSub }}>
                Time: O(N²) · Space: O(N²)
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Phase B: Safety & Simplicity Advantage Card (Anchor 23: F3752..F4136) */}
      {frame >= 3752 && frame < 4137 && (
        <div
          style={{
            position: "absolute",
            left: 360,
            top: 620,
            width: 1200,
            height: 145,
            opacity: bottomSafetyEntrance,
            transform: `translateY(${interpolate(bottomSafetyEntrance, [0, 1], [15, 0])}px)`,
            zIndex: 10,
          }}
        >
          {/* Hand-drawn chalk border using RoughBox with theme.good */}
          <div style={{ position: "absolute", top: 0, left: 0, pointerEvents: "none" }}>
            <RoughBox
              width={1200}
              height={145}
              stroke={theme.good}
              seed={77}
              strokeWidth={2.5}
              durationInFrames={18}
            />
          </div>

          <div
            style={{
              position: "relative",
              zIndex: 1,
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(17, 37, 29, 0.94)",
              borderRadius: 12,
              padding: "16px 28px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              boxSizing: "border-box",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span
                style={{
                  fontFamily: fonts.code,
                  fontSize: 16,
                  fontWeight: 700,
                  color: theme.good,
                  letterSpacing: 1,
                }}
              >
                ADVANTAGE: INDEPENDENT STORAGE (ZERO VALUE OVERWRITE)
              </span>
              <span
                style={{
                  fontSize: 12,
                  fontFamily: fonts.code,
                  padding: "2px 10px",
                  borderRadius: 4,
                  backgroundColor: "rgba(82, 183, 136, 0.2)",
                  color: theme.good,
                  fontWeight: 700,
                }}
              >
                100% INTUITIVE &amp; SAFE
              </span>
            </div>

            <div style={{ display: "flex", gap: 36 }}>
              <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 4 }}>
                <span style={{ fontFamily: fonts.code, fontSize: 14, fontWeight: 700, color: theme.cyan }}>
                  1. Independent Memory Spaces
                </span>
                <span style={{ fontSize: 14, color: theme.chalkText, lineHeight: 1.35 }}>
                  Writing to <code>result</code> never destroys unread elements in <code>matrix</code>.
                </span>
              </div>

              <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 4 }}>
                <span style={{ fontFamily: fonts.code, fontSize: 14, fontWeight: 700, color: theme.good }}>
                  2. Direct Coordinate Placement
                </span>
                <span style={{ fontSize: 14, color: theme.chalkText, lineHeight: 1.35 }}>
                  Every element is placed directly into its final rotated slot in one step.
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Phase C: The Space Tradeoff Warning (Anchor 24..25: F4137..F4466) */}
      {frame >= 4137 && (
        <div
          style={{
            position: "absolute",
            left: 360,
            top: 620,
            width: 1200,
            height: 145,
            opacity: bottomWarningEntrance,
            transform: `translateY(${interpolate(bottomWarningEntrance, [0, 1], [15, 0])}px)`,
            zIndex: 10,
          }}
        >
          {/* Hand-drawn chalk border using RoughBox with theme.bad */}
          <div style={{ position: "absolute", top: 0, left: 0, pointerEvents: "none" }}>
            <RoughBox
              width={1200}
              height={145}
              stroke={theme.bad}
              seed={88}
              strokeWidth={2.5}
              durationInFrames={18}
            />
          </div>

          <div
            style={{
              position: "relative",
              zIndex: 1,
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(35, 14, 18, 0.94)",
              borderRadius: 12,
              padding: "16px 28px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              boxSizing: "border-box",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span
                style={{
                  fontFamily: fonts.code,
                  fontSize: 16,
                  fontWeight: 700,
                  color: theme.bad,
                  letterSpacing: 1,
                }}
              >
                CRITICAL TRADEOFF: SPACE COMPLEXITY DRAWBACK
              </span>
              <span
                style={{
                  fontSize: 12,
                  fontFamily: fonts.code,
                  padding: "2px 10px",
                  borderRadius: 4,
                  backgroundColor: "rgba(230, 57, 70, 0.25)",
                  color: theme.bad,
                  fontWeight: 700,
                }}
              >
                O(N²) EXTRA MEMORY
              </span>
            </div>

            <div style={{ display: "flex", gap: 36 }}>
              <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 4 }}>
                <span style={{ fontFamily: fonts.code, fontSize: 14, fontWeight: 700, color: theme.gold }}>
                  Memory Overhead
                </span>
                <span style={{ fontSize: 14, color: theme.chalkText, lineHeight: 1.35 }}>
                  Allocates an entire second 5×5 grid (25 extra integers). For size N, requires O(N²) auxiliary space.
                </span>
              </div>

              <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 4 }}>
                <span style={{ fontFamily: fonts.code, fontSize: 14, fontWeight: 700, color: theme.bad }}>
                  Interview Constraint Violation
                </span>
                <span style={{ fontSize: 14, color: theme.chalkText, lineHeight: 1.35 }}>
                  LeetCode 48 explicitly mandates: <em>"Rotate the image in-place with O(1) extra space"</em>.
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* =====================================================================
          CAPTIONS (Y: 960..1010, strictly >= 190px below bottom cards)
          ===================================================================== */}
      <Captions words={captionWords} />
    </div>
  );
};
