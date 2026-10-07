/**
 * Scene06MarkersTrace.tsx — Scene 06 · Method 2 Trace: Row and Column Marker Arrays
 * Question 013: Set Matrix Zeroes (LeetCode 73) · Pattern 01 — Arrays & Hashing
 *
 * Strict Compliance:
 * - plans/06-markers-trace_FRAMEWISE_PLAN.md (all 35 anchors, 9-field schema)
 * - sync/06-markers-trace.anchors.json (exact word-level frame anchors)
 * - Canonical @dsa/kit visual grammar: RoughBox, ChalkText, ChalkboardBackground, Captions.
 * - Center-Stage Hero: 5x5 Matrix (X: 785..1205, Y: 305..725) centered around X = 960.
 * - Docked Marker Rails: rowZero at X: 715 (left), colZero at Y: 235 (top).
 * - Zero AI-slop right cards: All pedagogical callouts in bottom zone (Y: 760..860).
 * - Top Status Pill: X: 720..1200, Y: 130..190.
 * - Bottom clearance: >= 100px buffer above captions at Y: 960.
 * - 100% Remotion frame-derived determinism; zero CSS transitions.
 *
 * Duration: 3581 frames @ 30fps (119.380s)
 */
import React, { useMemo } from "react";
import {
  Audio,
  interpolate,
  spring,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { ChalkboardBackground, ChalkFilters } from "../../../../kit/lib/chalk";
import { theme, fonts } from "../../../../kit/lib/theme";
import { RoughBox } from "../../../../kit/components/RoughBox";
import { Captions, CaptionWord } from "../../../../kit/components/Captions";
import syncData from "../sync/06-markers-trace.json";

// ---------------------------------------------------------------------------
// Word-level Caption Timings
// ---------------------------------------------------------------------------
const captionWords: CaptionWord[] = (syncData.words || []).map((w: any) => ({
  word: w.word,
  start: w.start_ms / 1000,
  end: w.end_ms / 1000,
}));

// Master Matrix Initial Values (5x5)
const ORIGINAL_MATRIX = [
  [1, 2, 0, 4, 5],
  [6, 7, 8, 9, 10],
  [0, 12, 13, 14, 15],
  [16, 17, 18, 0, 20],
  [21, 22, 23, 24, 25],
];

// ---------------------------------------------------------------------------
// Spatial Coordinates (Horizontal midpoint = 960px)
// ---------------------------------------------------------------------------
const CELL_SIZE = 76;
const GAP = 10;
const PITCH = CELL_SIZE + GAP; // 86px
const MATRIX_X = 785;
const MATRIX_Y = 305;

// Rails geometry
const ROW_RAIL_X = 715;
const ROW_RAIL_Y = 305;
const ROW_SLOT_W = 50;
const ROW_SLOT_H = 76;

const COL_RAIL_X = 785;
const COL_RAIL_Y = 235;
const COL_SLOT_W = 76;
const COL_SLOT_H = 50;

export const Scene06MarkersTrace: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // -------------------------------------------------------------------------
  // Entrance Springs
  // -------------------------------------------------------------------------
  const tracksSpring = spring({
    frame,
    fps,
    config: { damping: 14, stiffness: 90 },
  });

  const matrixSpring = spring({
    frame: Math.max(0, frame - 10),
    fps,
    config: { damping: 14, stiffness: 90 },
  });

  // -------------------------------------------------------------------------
  // Marker Rail States (Remotion frame-derived determinism)
  // -------------------------------------------------------------------------
  const hasInitialized = frame >= 259;
  const row0True = frame >= 503;
  const col2True = frame >= 587;
  const row2True = frame >= 774;
  const col0True = frame >= 836;
  const row3True = frame >= 1025;
  const col3True = frame >= 1090;

  const rowZeroState = useMemo(() => {
    if (!hasInitialized) return [null, null, null, null, null];
    return [
      row0True, // row 0: true from F503
      false,    // row 1: false
      row2True, // row 2: true from F774
      row3True, // row 3: true from F1025
      false,    // row 4: false
    ];
  }, [hasInitialized, row0True, row2True, row3True]);

  const colZeroState = useMemo(() => {
    if (!hasInitialized) return [null, null, null, null, null];
    return [
      col0True, // col 0: true from F836
      false,    // col 1: false
      col2True, // col 2: true from F587
      col3True, // col 3: true from F1090
      false,    // col 4: false
    ];
  }, [hasInitialized, col0True, col2True, col3True]);

  // -------------------------------------------------------------------------
  // Cell Zero Mutation Timings (Pass 2)
  // -------------------------------------------------------------------------
  const cell_1_0_zero = frame >= 1820;
  const cell_1_2_zero = frame >= 2055;
  const cell_1_3_zero = frame >= 2175;
  const row2_zero = frame >= 2372;
  const row3_zero = frame >= 2639;
  const cell_4_0_zero = frame >= 2783;
  const cell_4_2_zero = frame >= 3005;
  const cell_4_3_zero = frame >= 3068;
  const row0_zero = frame >= 3189; // row 0 zeroes reflected in final state

  // Phase classification
  const isPass1 = frame >= 329 && frame < 1519;
  const isPass2 = frame >= 1519 && frame < 3189;
  const isSummary = frame >= 3189;

  // Active Discovery Targets (Pass 1)
  const z1_active = frame >= 382 && frame < 658;
  const z2_active = frame >= 658 && frame < 872;
  const z3_active = frame >= 872 && frame < 1143;

  // Projection Ray Progress (Pass 1)
  const z1_rowRayProgress = interpolate(frame, [503, 545], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const z1_colRayProgress = interpolate(frame, [587, 625], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const z2_rowRayProgress = interpolate(frame, [774, 810], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const z2_colRayProgress = interpolate(frame, [836, 865], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const z3_rowRayProgress = interpolate(frame, [1025, 1060], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const z3_colRayProgress = interpolate(frame, [1090, 1120], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <div
      style={{
        width: 1920,
        height: 1080,
        backgroundColor: theme.boardBg,
        position: "relative",
        overflow: "hidden",
        fontFamily: fonts.sans,
        color: theme.chalkText,
      }}
    >
      <ChalkboardBackground />
      <ChalkFilters />

      {/* ------------------------------------------------------------------- */}
      {/* Top Header Zone (Strictly Y: 42..108)                                */}
      {/* ------------------------------------------------------------------- */}
      <div
        style={{
          position: "absolute",
          top: 42,
          left: 80,
          right: 80,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          zIndex: 40,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div
            style={{
              padding: "6px 16px",
              borderRadius: 20,
              backgroundColor: "rgba(6, 214, 160, 0.14)",
              border: `1.5px solid ${theme.good}`,
              color: theme.good,
              fontFamily: fonts.mono,
              fontSize: 15,
              fontWeight: 800,
              letterSpacing: "0.06em",
            }}
          >
            ● 01 · ARRAYS & HASHING
          </div>
          <div
            style={{
              padding: "6px 16px",
              borderRadius: 20,
              backgroundColor: "rgba(255, 209, 102, 0.12)",
              border: `1.5px solid ${theme.pivot}`,
              color: theme.pivot,
              fontFamily: fonts.mono,
              fontSize: 15,
              fontWeight: 800,
              letterSpacing: "0.06em",
            }}
          >
            METHOD 2 · 1D MARKER ARRAYS TRACE
          </div>
        </div>

        <div
          style={{
            fontFamily: fonts.display,
            fontSize: 26,
            fontWeight: 900,
            color: theme.chalkText,
            letterSpacing: "0.04em",
          }}
        >
          SET MATRIX ZEROES
        </div>

        <div
          style={{
            fontFamily: fonts.mono,
            fontSize: 16,
            fontWeight: 700,
            color: theme.chalkDim,
          }}
        >
          LEETCODE 73 · O(M+N) SPACE
        </div>
      </div>

      {/* ------------------------------------------------------------------- */}
      {/* Top Status Pill (Strictly Y: 130..190, Centered)                    */}
      {/* ------------------------------------------------------------------- */}
      <div
        style={{
          position: "absolute",
          top: 130,
          left: 720,
          width: 480,
          height: 48,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 35,
        }}
      >
        <div style={{ position: "absolute", inset: 0 }}>
          <RoughBox
            width={480}
            height={48}
            stroke={isPass1 ? theme.pivot : isPass2 ? theme.cyan : theme.good}
            strokeWidth={2}
            seed={42}
            fill={
              isPass1
                ? "rgba(255, 209, 102, 0.12)"
                : isPass2
                ? "rgba(76, 201, 240, 0.12)"
                : "rgba(6, 214, 160, 0.12)"
            }
          />
        </div>
        <div
          style={{
            position: "relative",
            zIndex: 2,
            fontFamily: fonts.mono,
            fontSize: 16,
            fontWeight: 900,
            color: isPass1 ? theme.pivot : isPass2 ? theme.cyan : theme.good,
            letterSpacing: "0.06em",
          }}
        >
          {frame < 329
            ? "PHASE 0 · ALLOCATING 1D MARKER RAILS"
            : isPass1
            ? "PASS 1 · SCAN & DISCOVER ORIGINAL ZEROES"
            : isPass2
            ? "PASS 2 · GUIDED MATRIX ZERO PROPAGATION"
            : "✨ GROUND TRUTH MATCH · O(M+N) VERIFIED"}
        </div>
      </div>

      {/* ------------------------------------------------------------------- */}
      {/* CENTER STAGE: 5x5 Matrix & Docked 1D Marker Rails                   */}
      {/* ------------------------------------------------------------------- */}

      {/* Column Indices & colZero Rail (Docked at Top: Y: 195..285) */}
      <div
        style={{
          position: "absolute",
          left: COL_RAIL_X,
          top: COL_RAIL_Y,
          width: 420,
          height: COL_SLOT_H,
          zIndex: 30,
          opacity: tracksSpring,
          transform: `translateY(${interpolate(tracksSpring, [0, 1], [-15, 0])}px)`,
        }}
      >
        {/* Label */}
        <div
          style={{
            position: "absolute",
            left: -110,
            top: 12,
            fontFamily: fonts.mono,
            fontSize: 15,
            fontWeight: 900,
            color: frame >= 166 && frame < 241 ? theme.good : theme.chalkDim,
          }}
        >
          colZero [N]
        </div>

        {/* 5 Column Slots */}
        <div style={{ display: "flex", gap: GAP }}>
          {[0, 1, 2, 3, 4].map((c) => {
            const isMarked = colZeroState[c] === true;
            const isInspecting =
              (frame >= 1820 && frame < 1936 && c === 0) ||
              (frame >= 1949 && frame < 2036 && c === 1) ||
              (frame >= 2055 && frame < 2160 && c === 2) ||
              (frame >= 2175 && frame < 2266 && c === 3) ||
              (frame >= 2281 && frame < 2360 && c === 4) ||
              (frame >= 2942 && frame < 2986 && c === 1) ||
              (frame >= 3005 && frame < 3052 && c === 2) ||
              (frame >= 3068 && frame < 3117 && c === 3) ||
              (frame >= 3132 && frame < 3169 && c === 4);

            return (
              <div key={`col-slot-${c}`} style={{ position: "relative" }}>
                {/* Column Index tag above slot */}
                <div
                  style={{
                    position: "absolute",
                    top: -26,
                    left: 0,
                    right: 0,
                    textAlign: "center",
                    fontFamily: fonts.mono,
                    fontSize: 14,
                    fontWeight: 800,
                    color: isMarked ? theme.good : theme.chalkDim,
                  }}
                >
                  [{c}]
                </div>

                {/* Slot RoughBox */}
                <div
                  style={{
                    width: COL_SLOT_W,
                    height: COL_SLOT_H,
                    position: "relative",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <div style={{ position: "absolute", inset: 0 }}>
                    <RoughBox
                      width={COL_SLOT_W}
                      height={COL_SLOT_H}
                      stroke={
                        isMarked
                          ? theme.good
                          : isInspecting
                          ? theme.cyan
                          : "rgba(248, 246, 240, 0.35)"
                      }
                      strokeWidth={isMarked ? 3 : isInspecting ? 2.5 : 2}
                      seed={300 + c}
                      fill={
                        isMarked
                          ? "rgba(6, 214, 160, 0.18)"
                          : isInspecting
                          ? "rgba(76, 201, 240, 0.15)"
                          : undefined
                      }
                    />
                  </div>
                  <span
                    style={{
                      position: "relative",
                      zIndex: 2,
                      fontFamily: fonts.mono,
                      fontSize: 22,
                      fontWeight: 900,
                      color: isMarked
                        ? theme.good
                        : colZeroState[c] === false
                        ? theme.chalkDim
                        : "transparent",
                    }}
                  >
                    {colZeroState[c] === true
                      ? "T"
                      : colZeroState[c] === false
                      ? "F"
                      : ""}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Row Indices & rowZero Rail (Docked at Left: X: 675..765) */}
      <div
        style={{
          position: "absolute",
          left: ROW_RAIL_X,
          top: ROW_RAIL_Y,
          width: ROW_SLOT_W,
          height: 420,
          zIndex: 30,
          opacity: tracksSpring,
          transform: `translateX(${interpolate(tracksSpring, [0, 1], [-15, 0])}px)`,
        }}
      >
        {/* Label */}
        <div
          style={{
            position: "absolute",
            top: -30,
            left: -20,
            fontFamily: fonts.mono,
            fontSize: 15,
            fontWeight: 900,
            color: frame >= 73 && frame < 154 ? theme.pivot : theme.chalkDim,
            whiteSpace: "nowrap",
          }}
        >
          rowZero [M]
        </div>

        {/* 5 Row Slots */}
        <div style={{ display: "flex", flexDirection: "column", gap: GAP }}>
          {[0, 1, 2, 3, 4].map((r) => {
            const isMarked = rowZeroState[r] === true;
            const isRowActiveInPass2 =
              (frame >= 1625 && frame < 2372 && r === 1) ||
              (frame >= 2372 && frame < 2639 && r === 2) ||
              (frame >= 2639 && frame < 2783 && r === 3) ||
              (frame >= 2783 && frame < 3189 && r === 4);

            return (
              <div key={`row-slot-${r}`} style={{ position: "relative" }}>
                {/* Row Index tag left of slot */}
                <div
                  style={{
                    position: "absolute",
                    left: -32,
                    top: 26,
                    fontFamily: fonts.mono,
                    fontSize: 14,
                    fontWeight: 800,
                    color: isMarked ? theme.pivot : theme.chalkDim,
                  }}
                >
                  [{r}]
                </div>

                {/* Slot RoughBox */}
                <div
                  style={{
                    width: ROW_SLOT_W,
                    height: ROW_SLOT_H,
                    position: "relative",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <div style={{ position: "absolute", inset: 0 }}>
                    <RoughBox
                      width={ROW_SLOT_W}
                      height={ROW_SLOT_H}
                      stroke={
                        isMarked
                          ? theme.pivot
                          : isRowActiveInPass2
                          ? theme.cyan
                          : "rgba(248, 246, 240, 0.35)"
                      }
                      strokeWidth={isMarked ? 3 : isRowActiveInPass2 ? 2.5 : 2}
                      seed={400 + r}
                      fill={
                        isMarked
                          ? "rgba(255, 209, 102, 0.18)"
                          : isRowActiveInPass2
                          ? "rgba(76, 201, 240, 0.15)"
                          : undefined
                      }
                    />
                  </div>
                  <span
                    style={{
                      position: "relative",
                      zIndex: 2,
                      fontFamily: fonts.mono,
                      fontSize: 22,
                      fontWeight: 900,
                      color: isMarked
                        ? theme.pivot
                        : rowZeroState[r] === false
                        ? theme.chalkDim
                        : "transparent",
                    }}
                  >
                    {rowZeroState[r] === true
                      ? "T"
                      : rowZeroState[r] === false
                      ? "F"
                      : ""}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Centered 5x5 Master Matrix */}
      <div
        style={{
          position: "absolute",
          left: MATRIX_X,
          top: MATRIX_Y,
          width: 420,
          height: 420,
          display: "grid",
          gridTemplateColumns: `repeat(5, ${CELL_SIZE}px)`,
          gap: GAP,
          zIndex: 20,
          opacity: matrixSpring,
        }}
      >
        {ORIGINAL_MATRIX.map((row, r) =>
          row.map((val, c) => {
            const isOriginalZero = val === 0;

            // Determine current cell value based on Pass 2 mutation
            let currentVal: number = val;
            let hasZeroed = false;

            if (r === 0 && row0_zero) {
              currentVal = 0;
              if (val !== 0) hasZeroed = true;
            } else if (r === 1) {
              if (c === 0 && cell_1_0_zero) {
                currentVal = 0;
                hasZeroed = true;
              } else if (c === 2 && cell_1_2_zero) {
                currentVal = 0;
                hasZeroed = true;
              } else if (c === 3 && cell_1_3_zero) {
                currentVal = 0;
                hasZeroed = true;
              }
            } else if (r === 2 && row2_zero) {
              currentVal = 0;
              if (val !== 0) hasZeroed = true;
            } else if (r === 3 && row3_zero) {
              currentVal = 0;
              if (val !== 0) hasZeroed = true;
            } else if (r === 4) {
              if (c === 0 && cell_4_0_zero) {
                currentVal = 0;
                hasZeroed = true;
              } else if (c === 2 && cell_4_2_zero) {
                currentVal = 0;
                hasZeroed = true;
              } else if (c === 3 && cell_4_3_zero) {
                currentVal = 0;
                hasZeroed = true;
              }
            }

            // Cell Highlight States in Pass 1 & Pass 2
            const isTargetedInPass1 =
              (z1_active && r === 0 && c === 2) ||
              (z2_active && r === 2 && c === 0) ||
              (z3_active && r === 3 && c === 3);

            const isInspectedInPass2 =
              (frame >= 1820 && frame < 1936 && r === 1 && c === 0) ||
              (frame >= 1949 && frame < 2036 && r === 1 && c === 1) ||
              (frame >= 2055 && frame < 2160 && r === 1 && c === 2) ||
              (frame >= 2175 && frame < 2266 && r === 1 && c === 3) ||
              (frame >= 2281 && frame < 2360 && r === 1 && c === 4) ||
              (frame >= 2372 && frame < 2624 && r === 2) ||
              (frame >= 2639 && frame < 2762 && r === 3) ||
              (frame >= 2942 && frame < 2986 && r === 4 && c === 1) ||
              (frame >= 3005 && frame < 3052 && r === 4 && c === 2) ||
              (frame >= 3068 && frame < 3117 && r === 4 && c === 3) ||
              (frame >= 3132 && frame < 3169 && r === 4 && c === 4);

            const isSurvivingCell =
              (frame >= 1949 && r === 1 && c === 1) ||
              (frame >= 2281 && r === 1 && c === 4) ||
              (frame >= 2942 && r === 4 && c === 1) ||
              (frame >= 3132 && r === 4 && c === 4);

            const strokeColor = isTargetedInPass1
              ? theme.pivot
              : isInspectedInPass2
              ? theme.cyan
              : hasZeroed
              ? theme.good
              : isOriginalZero
              ? "rgba(255, 209, 102, 0.7)"
              : isSurvivingCell
              ? theme.good
              : "rgba(248, 246, 240, 0.35)";

            const fillColor = isTargetedInPass1
              ? "rgba(255, 209, 102, 0.25)"
              : isInspectedInPass2
              ? "rgba(76, 201, 240, 0.16)"
              : hasZeroed
              ? "rgba(6, 214, 160, 0.18)"
              : isOriginalZero
              ? "rgba(255, 209, 102, 0.12)"
              : isSurvivingCell
              ? "rgba(6, 214, 160, 0.12)"
              : undefined;

            return (
              <div
                key={`matrix-cell-${r}-${c}`}
                style={{
                  width: CELL_SIZE,
                  height: CELL_SIZE,
                  position: "relative",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div style={{ position: "absolute", inset: 0 }}>
                  <RoughBox
                    width={CELL_SIZE}
                    height={CELL_SIZE}
                    stroke={strokeColor}
                    strokeWidth={isTargetedInPass1 ? 3.5 : isInspectedInPass2 ? 2.5 : 2}
                    seed={r * 10 + c}
                    fill={fillColor}
                  />
                </div>

                <span
                  style={{
                    position: "relative",
                    zIndex: 2,
                    fontFamily: fonts.mono,
                    fontSize: 26,
                    fontWeight: isTargetedInPass1 || hasZeroed ? 900 : isOriginalZero ? 800 : 700,
                    color: isTargetedInPass1
                      ? theme.pivot
                      : hasZeroed
                      ? theme.good
                      : isOriginalZero
                      ? theme.pivot
                      : isSurvivingCell
                      ? theme.good
                      : theme.chalkText,
                  }}
                >
                  {currentVal}
                </span>

                {/* Sub-label for original zero discovery */}
                {isOriginalZero && isPass1 && (
                  <span
                    style={{
                      position: "absolute",
                      bottom: 4,
                      fontSize: 10,
                      fontWeight: 800,
                      color: theme.pivot,
                      letterSpacing: "0.05em",
                      zIndex: 3,
                    }}
                  >
                    ORIG
                  </span>
                )}
              </div>
            );
          })
        )}
      </div>

      {/* ------------------------------------------------------------------- */}
      {/* SVG Projection Rays (Pass 1 & Pass 2)                               */}
      {/* ------------------------------------------------------------------- */}
      <svg
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: 1920,
          height: 1080,
          pointerEvents: "none",
          zIndex: 25,
        }}
      >
        {/* Pass 1: Zero 1 (0, 2) */}
        {z1_active && (
          <>
            {z1_rowRayProgress > 0 && (
              <line
                x1={MATRIX_X + 2 * PITCH + CELL_SIZE / 2}
                y1={MATRIX_Y + 0 * PITCH + CELL_SIZE / 2}
                x2={interpolate(
                  z1_rowRayProgress,
                  [0, 1],
                  [MATRIX_X + 2 * PITCH + CELL_SIZE / 2, ROW_RAIL_X + ROW_SLOT_W]
                )}
                y2={MATRIX_Y + 0 * PITCH + CELL_SIZE / 2}
                stroke={theme.pivot}
                strokeWidth={3}
                strokeDasharray="6 4"
              />
            )}
            {z1_colRayProgress > 0 && (
              <line
                x1={MATRIX_X + 2 * PITCH + CELL_SIZE / 2}
                y1={MATRIX_Y + 0 * PITCH + CELL_SIZE / 2}
                x2={MATRIX_X + 2 * PITCH + CELL_SIZE / 2}
                y2={interpolate(
                  z1_colRayProgress,
                  [0, 1],
                  [MATRIX_Y + 0 * PITCH + CELL_SIZE / 2, COL_RAIL_Y + COL_SLOT_H]
                )}
                stroke={theme.good}
                strokeWidth={3}
                strokeDasharray="6 4"
              />
            )}
          </>
        )}

        {/* Pass 1: Zero 2 (2, 0) */}
        {z2_active && (
          <>
            {z2_rowRayProgress > 0 && (
              <line
                x1={MATRIX_X + 0 * PITCH + CELL_SIZE / 2}
                y1={MATRIX_Y + 2 * PITCH + CELL_SIZE / 2}
                x2={interpolate(
                  z2_rowRayProgress,
                  [0, 1],
                  [MATRIX_X + 0 * PITCH + CELL_SIZE / 2, ROW_RAIL_X + ROW_SLOT_W]
                )}
                y2={MATRIX_Y + 2 * PITCH + CELL_SIZE / 2}
                stroke={theme.pivot}
                strokeWidth={3}
                strokeDasharray="6 4"
              />
            )}
            {z2_colRayProgress > 0 && (
              <line
                x1={MATRIX_X + 0 * PITCH + CELL_SIZE / 2}
                y1={MATRIX_Y + 2 * PITCH + CELL_SIZE / 2}
                x2={MATRIX_X + 0 * PITCH + CELL_SIZE / 2}
                y2={interpolate(
                  z2_colRayProgress,
                  [0, 1],
                  [MATRIX_Y + 2 * PITCH + CELL_SIZE / 2, COL_RAIL_Y + COL_SLOT_H]
                )}
                stroke={theme.good}
                strokeWidth={3}
                strokeDasharray="6 4"
              />
            )}
          </>
        )}

        {/* Pass 1: Zero 3 (3, 3) */}
        {z3_active && (
          <>
            {z3_rowRayProgress > 0 && (
              <line
                x1={MATRIX_X + 3 * PITCH + CELL_SIZE / 2}
                y1={MATRIX_Y + 3 * PITCH + CELL_SIZE / 2}
                x2={interpolate(
                  z3_rowRayProgress,
                  [0, 1],
                  [MATRIX_X + 3 * PITCH + CELL_SIZE / 2, ROW_RAIL_X + ROW_SLOT_W]
                )}
                y2={MATRIX_Y + 3 * PITCH + CELL_SIZE / 2}
                stroke={theme.pivot}
                strokeWidth={3}
                strokeDasharray="6 4"
              />
            )}
            {z3_colRayProgress > 0 && (
              <line
                x1={MATRIX_X + 3 * PITCH + CELL_SIZE / 2}
                y1={MATRIX_Y + 3 * PITCH + CELL_SIZE / 2}
                x2={MATRIX_X + 3 * PITCH + CELL_SIZE / 2}
                y2={interpolate(
                  z3_colRayProgress,
                  [0, 1],
                  [MATRIX_Y + 3 * PITCH + CELL_SIZE / 2, COL_RAIL_Y + COL_SLOT_H]
                )}
                stroke={theme.good}
                strokeWidth={3}
                strokeDasharray="6 4"
              />
            )}
          </>
        )}

        {/* Pass 2: Guide rays from marked rails into cells being checked */}
        {frame >= 1820 && frame < 1936 && (
          <line
            x1={MATRIX_X + 0 * PITCH + CELL_SIZE / 2}
            y1={COL_RAIL_Y + COL_SLOT_H}
            x2={MATRIX_X + 0 * PITCH + CELL_SIZE / 2}
            y2={MATRIX_Y + 1 * PITCH + CELL_SIZE / 2}
            stroke={theme.good}
            strokeWidth={3}
            strokeDasharray="4 4"
          />
        )}
        {frame >= 2055 && frame < 2160 && (
          <line
            x1={MATRIX_X + 2 * PITCH + CELL_SIZE / 2}
            y1={COL_RAIL_Y + COL_SLOT_H}
            x2={MATRIX_X + 2 * PITCH + CELL_SIZE / 2}
            y2={MATRIX_Y + 1 * PITCH + CELL_SIZE / 2}
            stroke={theme.good}
            strokeWidth={3}
            strokeDasharray="4 4"
          />
        )}
        {frame >= 2175 && frame < 2266 && (
          <line
            x1={MATRIX_X + 3 * PITCH + CELL_SIZE / 2}
            y1={COL_RAIL_Y + COL_SLOT_H}
            x2={MATRIX_X + 3 * PITCH + CELL_SIZE / 2}
            y2={MATRIX_Y + 1 * PITCH + CELL_SIZE / 2}
            stroke={theme.good}
            strokeWidth={3}
            strokeDasharray="4 4"
          />
        )}
      </svg>

      {/* ------------------------------------------------------------------- */}
      {/* BOTTOM INTERACTION ZONE: Compact Progressive Callouts (Y: 760..860) */}
      {/* ------------------------------------------------------------------- */}
      <div
        style={{
          position: "absolute",
          left: 540,
          right: 540,
          top: 760,
          height: 100,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 35,
        }}
      >
        {/* Anchor 1..3: Setup & Definitions (F0..F258) */}
        {frame < 259 && (
          <div
            style={{
              padding: "10px 24px",
              borderRadius: 14,
              backgroundColor: "rgba(10, 36, 25, 0.95)",
              border: `1.5px solid ${theme.cyan}`,
              display: "flex",
              alignItems: "center",
              gap: 14,
            }}
          >
            <span style={{ fontSize: 22 }}>📐</span>
            <span style={{ fontFamily: fonts.sans, fontSize: 20, fontWeight: 800, color: theme.cyan }}>
              {frame < 73
                ? "We create two marker arrays: rowZero [M] and colZero [N]"
                : frame < 166
                ? "rowZero: One boolean flag for each of the M rows"
                : "colZero: One boolean flag for each of the N columns"}
            </span>
          </div>
        )}

        {/* Anchor 4: Initially all False (F259..F328) */}
        {frame >= 259 && frame < 329 && (
          <div
            style={{
              padding: "10px 26px",
              borderRadius: 14,
              backgroundColor: "rgba(255, 209, 102, 0.16)",
              border: `2px solid ${theme.pivot}`,
              fontFamily: fonts.mono,
              fontSize: 20,
              fontWeight: 800,
              color: theme.pivot,
            }}
          >
            INITIAL STATE: All marker flags set to FALSE
          </div>
        )}

        {/* Anchor 5: Scan Matrix Begin (F329..F381) */}
        {frame >= 329 && frame < 382 && (
          <div
            style={{
              padding: "10px 26px",
              borderRadius: 14,
              backgroundColor: "rgba(10, 36, 25, 0.95)",
              border: `2px solid ${theme.cyan}`,
              fontFamily: fonts.sans,
              fontSize: 20,
              fontWeight: 800,
              color: theme.cyan,
            }}
          >
            🔍 Now scan the matrix cell-by-cell for original zeroes...
          </div>
        )}

        {/* Anchor 6..8: Zero 1 at (0, 2) (F382..F657) */}
        {frame >= 382 && frame < 658 && (
          <div
            style={{
              padding: "10px 24px",
              borderRadius: 14,
              backgroundColor: "rgba(255, 209, 102, 0.16)",
              border: `2px solid ${theme.pivot}`,
              display: "flex",
              alignItems: "center",
              gap: 14,
            }}
          >
            <span style={{ fontSize: 22 }}>👉</span>
            <span style={{ fontFamily: fonts.sans, fontSize: 20, fontWeight: 800, color: theme.pivot }}>
              {frame < 503
                ? "First original 0 found at row 0, column 2"
                : frame < 587
                ? "Mark rowZero[0] = TRUE"
                : "Mark colZero[2] = TRUE"}
            </span>
          </div>
        )}

        {/* Anchor 9..11: Zero 2 at (2, 0) (F658..F871) */}
        {frame >= 658 && frame < 872 && (
          <div
            style={{
              padding: "10px 24px",
              borderRadius: 14,
              backgroundColor: "rgba(255, 209, 102, 0.16)",
              border: `2px solid ${theme.pivot}`,
              display: "flex",
              alignItems: "center",
              gap: 14,
            }}
          >
            <span style={{ fontSize: 22 }}>👉</span>
            <span style={{ fontFamily: fonts.sans, fontSize: 20, fontWeight: 800, color: theme.pivot }}>
              {frame < 774
                ? "Next original 0 found at row 2, column 0"
                : frame < 836
                ? "Mark rowZero[2] = TRUE"
                : "Mark colZero[0] = TRUE"}
            </span>
          </div>
        )}

        {/* Anchor 12..14: Zero 3 at (3, 3) (F872..F1142) */}
        {frame >= 872 && frame < 1143 && (
          <div
            style={{
              padding: "10px 24px",
              borderRadius: 14,
              backgroundColor: "rgba(255, 209, 102, 0.16)",
              border: `2px solid ${theme.pivot}`,
              display: "flex",
              alignItems: "center",
              gap: 14,
            }}
          >
            <span style={{ fontSize: 22 }}>👉</span>
            <span style={{ fontFamily: fonts.sans, fontSize: 20, fontWeight: 800, color: theme.pivot }}>
              {frame < 1025
                ? "Interior original 0 reached at row 3, column 3"
                : frame < 1090
                ? "Mark rowZero[3] = TRUE"
                : "Mark colZero[3] = TRUE"}
            </span>
          </div>
        )}

        {/* Anchor 15: Discovery Finished (F1143..F1190) */}
        {frame >= 1143 && frame < 1191 && (
          <div
            style={{
              padding: "10px 26px",
              borderRadius: 14,
              backgroundColor: "rgba(10, 36, 25, 0.95)",
              border: `2px solid ${theme.good}`,
              fontFamily: fonts.mono,
              fontSize: 20,
              fontWeight: 800,
              color: theme.good,
            }}
          >
            ✅ DISCOVERY FINISHED: All original zeroes marked!
          </div>
        )}

        {/* Anchor 16 & 17: Row & Column Markers Final State (F1191..F1518) */}
        {frame >= 1191 && frame < 1519 && (
          <div style={{ display: "flex", gap: 16 }}>
            <div
              style={{
                padding: "8px 20px",
                borderRadius: 12,
                backgroundColor: "rgba(255, 209, 102, 0.16)",
                border: `1.5px solid ${theme.pivot}`,
                fontFamily: fonts.mono,
                fontSize: 16,
                fontWeight: 800,
                color: theme.pivot,
              }}
            >
              rowZero: [T, F, T, T, F]
            </div>
            {frame >= 1352 && (
              <div
                style={{
                  padding: "8px 20px",
                  borderRadius: 12,
                  backgroundColor: "rgba(6, 214, 160, 0.16)",
                  border: `1.5px solid ${theme.good}`,
                  fontFamily: fonts.mono,
                  fontSize: 16,
                  fontWeight: 800,
                  color: theme.good,
                }}
              >
                colZero: [T, F, T, T, F]
              </div>
            )}
          </div>
        )}

        {/* Anchor 18: Information Flows Back (F1519..F1624) */}
        {frame >= 1519 && frame < 1625 && (
          <div
            style={{
              padding: "10px 26px",
              borderRadius: 14,
              backgroundColor: "rgba(10, 36, 25, 0.95)",
              border: `2px solid ${theme.cyan}`,
              fontFamily: fonts.sans,
              fontSize: 20,
              fontWeight: 800,
              color: theme.cyan,
            }}
          >
            🌊 PASS 2: Information flows back into the matrix!
          </div>
        )}

        {/* Anchor 19..24: Row 1 Cell Checks (F1625..F2371) */}
        {frame >= 1625 && frame < 2372 && (
          <div
            style={{
              padding: "10px 26px",
              borderRadius: 14,
              backgroundColor: "rgba(10, 36, 25, 0.95)",
              border: `2px solid ${theme.cyan}`,
              fontFamily: fonts.sans,
              fontSize: 20,
              fontWeight: 800,
              color: theme.chalkText,
            }}
          >
            {frame < 1820
              ? "Row 1: rowZero[1] = False ➔ Not completely zeroed"
              : frame < 1949
              ? "colZero[0] is marked ➔ Cell (1, 0) becomes 0"
              : frame < 2055
              ? "colZero[1] not marked ➔ Cell (1, 1) = 7 stays!"
              : frame < 2175
              ? "colZero[2] is marked ➔ Cell (1, 2) becomes 0"
              : frame < 2281
              ? "colZero[3] is marked ➔ Cell (1, 3) becomes 0"
              : "colZero[4] not marked ➔ Cell (1, 4) = 10 stays!"}
          </div>
        )}

        {/* Anchor 25: Row 2 Bulk Zero (F2372..F2638) */}
        {frame >= 2372 && frame < 2639 && (
          <div
            style={{
              padding: "10px 28px",
              borderRadius: 14,
              backgroundColor: "rgba(255, 209, 102, 0.2)",
              border: `2px solid ${theme.pivot}`,
              fontFamily: fonts.sans,
              fontSize: 22,
              fontWeight: 800,
              color: theme.pivot,
            }}
          >
            ⚡ Row 2: rowZero[2] = TRUE ➔ Entire row becomes 0!
          </div>
        )}

        {/* Anchor 26: Row 3 Bulk Zero (F2639..F2782) */}
        {frame >= 2639 && frame < 2783 && (
          <div
            style={{
              padding: "10px 28px",
              borderRadius: 14,
              backgroundColor: "rgba(255, 209, 102, 0.2)",
              border: `2px solid ${theme.pivot}`,
              fontFamily: fonts.sans,
              fontSize: 22,
              fontWeight: 800,
              color: theme.pivot,
            }}
          >
            ⚡ Row 3: rowZero[3] = TRUE ➔ Entire row becomes 0!
          </div>
        )}

        {/* Anchor 27..31: Row 4 Checks & Selective Zeroes (F2783..F3188) */}
        {frame >= 2783 && frame < 3189 && (
          <div
            style={{
              padding: "10px 26px",
              borderRadius: 14,
              backgroundColor: "rgba(10, 36, 25, 0.95)",
              border: `2px solid ${theme.good}`,
              fontFamily: fonts.sans,
              fontSize: 20,
              fontWeight: 800,
              color: theme.good,
            }}
          >
            {frame < 2942
              ? "Row 4: rowZero[4] = False ➔ Only marked columns change"
              : frame < 3005
              ? "colZero[1] not marked ➔ 22 survives!"
              : frame < 3068
              ? "colZero[2] is marked ➔ 23 becomes 0!"
              : frame < 3132
              ? "colZero[3] is marked ➔ 24 becomes 0!"
              : "colZero[4] not marked ➔ 25 survives!"}
          </div>
        )}

        {/* Anchor 32..34: Verification & Space Proof (F3189..F3501) */}
        {frame >= 3189 && frame < 3502 && (
          <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
            <div
              style={{
                padding: "8px 22px",
                borderRadius: 12,
                backgroundColor: "rgba(6, 214, 160, 0.18)",
                border: `2px solid ${theme.good}`,
                fontFamily: fonts.mono,
                fontSize: 18,
                fontWeight: 900,
                color: theme.good,
              }}
            >
              ✅ MATCHES GROUND TRUTH!
            </div>
            <div
              style={{
                padding: "8px 22px",
                borderRadius: 12,
                backgroundColor: "rgba(255, 209, 102, 0.16)",
                border: `1.5px solid ${theme.pivot}`,
                fontFamily: fonts.mono,
                fontSize: 18,
                fontWeight: 900,
                color: theme.pivot,
              }}
            >
              SPACE: O(M + N) BOALEANS ONLY
            </div>
          </div>
        )}

        {/* Anchor 35: Handoff to Scene 07 Code (F3502..F3581) */}
        {frame >= 3502 && (
          <div
            style={{
              padding: "12px 30px",
              borderRadius: 16,
              backgroundColor: "rgba(10, 36, 25, 0.95)",
              border: `2.5px solid ${theme.good}`,
              display: "flex",
              alignItems: "center",
              gap: 14,
            }}
          >
            <span style={{ fontSize: 24 }}>💻</span>
            <span
              style={{
                fontFamily: fonts.mono,
                fontSize: 20,
                fontWeight: 900,
                color: theme.good,
                letterSpacing: "0.04em",
              }}
            >
              NOW LET'S CONVERT THIS IDEA INTO CODE ➔ SCENE 07
            </span>
          </div>
        )}
      </div>

      {/* ------------------------------------------------------------------- */}
      {/* Audio & Word-Synchronized Captions                                  */}
      {/* ------------------------------------------------------------------- */}
      <Audio src={staticFile("audio/013/06-markers-trace.mp3")} />
      <Captions words={captionWords} />
    </div>
  );
};
