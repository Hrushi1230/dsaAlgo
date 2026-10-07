/**
 * Scene05WhyCopy.tsx — Scene 05 · Why Method 1 Wastes Space -> Derive Method 2
 * Question 013: Set Matrix Zeroes (LeetCode 73) · Pattern 01 — Arrays & Hashing
 *
 * Strict Compliance:
 * - plans/05-why-copy_FRAMEWISE_PLAN.md (all 20 anchors, 9-field schema)
 * - sync/05-why-copy.anchors.json (exact word-level frame anchors)
 * - Canonical @dsa/kit visual grammar: RoughBox, ChalkText, ChalkboardBackground, Captions.
 * - Center-Stage Hero: 5x5 Matrix (X: 785..1205, Y: 305..725) centered around X = 960.
 * - Docked Marker Rails: rowZero at X: 715 (left), colZero at Y: 235 (top).
 * - Zero AI-slop right cards: All pedagogical callouts in bottom zone (Y: 760..860).
 * - Bottom clearance: >= 100px buffer above captions at Y: 960.
 * - 100% Remotion frame-derived determinism; zero CSS transitions.
 *
 * Duration: 1754 frames @ 30fps (58.460s)
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
import { ChalkText } from "../../../../kit/components/ChalkText";
import { Captions, CaptionWord } from "../../../../kit/components/Captions";
import syncData from "../sync/05-why-copy.json";

// ---------------------------------------------------------------------------
// Word-level Caption Timings
// ---------------------------------------------------------------------------
const captionWords: CaptionWord[] = (syncData.words || []).map((w: any) => ({
  word: w.word,
  start: w.start_ms / 1000,
  end: w.end_ms / 1000,
}));

// Master Matrix Data (5x5)
const MATRIX_DATA = [
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

export const Scene05WhyCopy: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // -------------------------------------------------------------------------
  // Springs & Transitions
  // -------------------------------------------------------------------------
  // Matrix entrance spring (F0..F30)
  const matrixSpring = spring({
    frame,
    fps,
    config: { damping: 14, stiffness: 90 },
  });

  // "NO." stamp drop spring (F312..F325)
  const noStampSpring = spring({
    frame: Math.max(0, frame - 312),
    fps,
    config: { damping: 10, stiffness: 130 },
  });

  // Marker arrays entrance springs (strictly locked to spoken words)
  const rowMarkerSpring = spring({
    frame: Math.max(0, frame - 760),
    fps,
    config: { damping: 12, stiffness: 90 },
  });

  const colMarkerSpring = spring({
    frame: Math.max(0, frame - 852),
    fps,
    config: { damping: 12, stiffness: 90 },
  });

  // Row 3 marker True stamp (F1030)
  const row3TrueSpring = spring({
    frame: Math.max(0, frame - 1030),
    fps,
    config: { damping: 10, stiffness: 140 },
  });

  // Col 3 marker True stamp (F1172)
  const col3TrueSpring = spring({
    frame: Math.max(0, frame - 1172),
    fps,
    config: { damping: 10, stiffness: 140 },
  });

  // -------------------------------------------------------------------------
  // State Anchors & Audio Logic
  // -------------------------------------------------------------------------
  const showRowRail = frame >= 760;
  const showColRail = frame >= 852;
  const row3Marked = frame >= 1030;
  const col3Marked = frame >= 1172;

  // Active projection rays from (3, 3)
  const showRowRay = frame >= 937 && frame < 1222;
  const showColRay = frame >= 1074 && frame < 1222;

  const rowRayProgress = interpolate(frame, [937, 980], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const colRayProgress = interpolate(frame, [1074, 1120], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Dual guide rays projecting back from markers (F1299..F1426)
  const showDualGuide = frame >= 1299 && frame < 1427;

  // Question flickering for non-zero cells in Beat 02 (F150..F311)
  const isQuestioning = frame >= 150 && frame < 312;

  // Highlight rows & columns in Beats 05 & 06
  const highlightRow3 = frame >= 455 && frame < 676;
  const highlightCol3 = frame >= 521 && frame < 676;

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
            DERIVATION: O(M×N) → O(M+N)
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
          WHY COPY WASTES SPACE → DERIVE METHOD 2
        </div>

        <div
          style={{
            fontFamily: fonts.mono,
            fontSize: 16,
            fontWeight: 700,
            color: theme.chalkDim,
          }}
        >
          LEETCODE 73
        </div>
      </div>

      {/* ------------------------------------------------------------------- */}
      {/* CENTER STAGE: 5x5 Matrix & Docked 1D Marker Rails                   */}
      {/* ------------------------------------------------------------------- */}

      {/* Column Indices & colZero Rail (Docked at Top: Y: 195..285) */}
      {showColRail && (
        <div
          style={{
            position: "absolute",
            left: COL_RAIL_X,
            top: COL_RAIL_Y,
            width: 420,
            height: COL_SLOT_H,
            zIndex: 30,
            opacity: colMarkerSpring,
            transform: `translateY(${interpolate(colMarkerSpring, [0, 1], [-20, 0])}px)`,
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
              color: theme.good,
            }}
          >
            colZero [N]
          </div>

          {/* 5 Column Slots */}
          <div style={{ display: "flex", gap: GAP }}>
            {[0, 1, 2, 3, 4].map((c) => {
              const isCol3 = c === 3;
              const isMarked = isCol3 && col3Marked;

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
                        stroke={isMarked ? theme.good : "rgba(248, 246, 240, 0.35)"}
                        strokeWidth={isMarked ? 3 : 2}
                        seed={100 + c}
                        fill={isMarked ? "rgba(6, 214, 160, 0.18)" : undefined}
                      />
                    </div>
                    <span
                      style={{
                        position: "relative",
                        zIndex: 2,
                        fontFamily: fonts.mono,
                        fontSize: 22,
                        fontWeight: 900,
                        color: isMarked ? theme.good : theme.chalkDim,
                        transform: isMarked ? `scale(${col3TrueSpring})` : "none",
                      }}
                    >
                      {isMarked ? "T" : "F"}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Row Indices & rowZero Rail (Docked at Left: X: 675..765) */}
      {showRowRail && (
        <div
          style={{
            position: "absolute",
            left: ROW_RAIL_X,
            top: ROW_RAIL_Y,
            width: ROW_SLOT_W,
            height: 420,
            zIndex: 30,
            opacity: rowMarkerSpring,
            transform: `translateX(${interpolate(rowMarkerSpring, [0, 1], [-20, 0])}px)`,
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
              color: theme.pivot,
              whiteSpace: "nowrap",
            }}
          >
            rowZero [M]
          </div>

          {/* 5 Row Slots */}
          <div style={{ display: "flex", flexDirection: "column", gap: GAP }}>
            {[0, 1, 2, 3, 4].map((r) => {
              const isRow3 = r === 3;
              const isMarked = isRow3 && row3Marked;

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
                        stroke={isMarked ? theme.pivot : "rgba(248, 246, 240, 0.35)"}
                        strokeWidth={isMarked ? 3 : 2}
                        seed={200 + r}
                        fill={isMarked ? "rgba(255, 209, 102, 0.18)" : undefined}
                      />
                    </div>
                    <span
                      style={{
                        position: "relative",
                        zIndex: 2,
                        fontFamily: fonts.mono,
                        fontSize: 22,
                        fontWeight: 900,
                        color: isMarked ? theme.pivot : theme.chalkDim,
                        transform: isMarked ? `scale(${row3TrueSpring})` : "none",
                      }}
                    >
                      {isMarked ? "T" : "F"}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

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
          transform: `scale(${interpolate(matrixSpring, [0, 1], [0.94, 1])})`,
        }}
      >
        {MATRIX_DATA.map((row, r) =>
          row.map((val, c) => {
            const isTargetZero = r === 3 && c === 3;
            const isOtherZero = val === 0 && !isTargetZero;
            const isInRow3 = r === 3;
            const isInCol3 = c === 3;

            // Highlight state
            const isHighlighted =
              isTargetZero ||
              (highlightRow3 && isInRow3) ||
              (highlightCol3 && isInCol3);

            const strokeColor = isTargetZero
              ? theme.pivot
              : isHighlighted
              ? highlightRow3 && isInRow3
                ? theme.pivot
                : theme.good
              : isOtherZero
              ? "rgba(255, 209, 102, 0.6)"
              : isQuestioning
              ? "rgba(255, 209, 102, 0.4)"
              : "rgba(248, 246, 240, 0.35)";

            const fillColor = isTargetZero
              ? "rgba(255, 209, 102, 0.22)"
              : isHighlighted
              ? highlightRow3 && isInRow3
                ? "rgba(255, 209, 102, 0.12)"
                : "rgba(6, 214, 160, 0.12)"
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
                    strokeWidth={isTargetZero ? 3.5 : isHighlighted ? 2.5 : 2}
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
                    fontWeight: isTargetZero ? 900 : val === 0 ? 800 : 700,
                    color: isTargetZero
                      ? theme.pivot
                      : isHighlighted
                      ? highlightRow3 && isInRow3
                        ? theme.pivot
                        : theme.good
                      : val === 0
                      ? theme.pivot
                      : isQuestioning
                      ? "rgba(255, 253, 247, 0.6)"
                      : theme.chalkText,
                  }}
                >
                  {val}
                </span>

                {/* Focus beacon for cell (3, 3) in Beat 01 */}
                {isTargetZero && frame < 150 && (
                  <div
                    style={{
                      position: "absolute",
                      bottom: -22,
                      fontFamily: fonts.mono,
                      fontSize: 12,
                      fontWeight: 800,
                      color: theme.pivot,
                      whiteSpace: "nowrap",
                    }}
                  >
                    TARGET (3, 3)
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>

      {/* ------------------------------------------------------------------- */}
      {/* SVG Projection & Guide Rays                                         */}
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
        {/* Horizontal ray from (3, 3) leftward to rowZero[3] */}
        {showRowRay && (
          <line
            x1={MATRIX_X + 3 * PITCH + CELL_SIZE / 2}
            y1={MATRIX_Y + 3 * PITCH + CELL_SIZE / 2}
            x2={interpolate(
              rowRayProgress,
              [0, 1],
              [
                MATRIX_X + 3 * PITCH + CELL_SIZE / 2,
                ROW_RAIL_X + ROW_SLOT_W,
              ]
            )}
            y2={MATRIX_Y + 3 * PITCH + CELL_SIZE / 2}
            stroke={theme.pivot}
            strokeWidth={3.5}
            strokeDasharray="6 4"
          />
        )}

        {/* Vertical ray from (3, 3) upward to colZero[3] */}
        {showColRay && (
          <line
            x1={MATRIX_X + 3 * PITCH + CELL_SIZE / 2}
            y1={MATRIX_Y + 3 * PITCH + CELL_SIZE / 2}
            x2={MATRIX_X + 3 * PITCH + CELL_SIZE / 2}
            y2={interpolate(
              colRayProgress,
              [0, 1],
              [
                MATRIX_Y + 3 * PITCH + CELL_SIZE / 2,
                COL_RAIL_Y + COL_SLOT_H,
              ]
            )}
            stroke={theme.good}
            strokeWidth={3.5}
            strokeDasharray="6 4"
          />
        )}

        {/* Guide rays projecting back across matrix in Beat 16 (F1299..F1426) */}
        {showDualGuide && (
          <>
            {/* Horizontal guide sweep across Row 3 */}
            <line
              x1={ROW_RAIL_X + ROW_SLOT_W}
              y1={MATRIX_Y + 3 * PITCH + CELL_SIZE / 2}
              x2={MATRIX_X + 420}
              y2={MATRIX_Y + 3 * PITCH + CELL_SIZE / 2}
              stroke={theme.pivot}
              strokeWidth={2.5}
              strokeDasharray="8 6"
              opacity={0.85}
            />
            {/* Vertical guide sweep down Column 3 */}
            <line
              x1={MATRIX_X + 3 * PITCH + CELL_SIZE / 2}
              y1={COL_RAIL_Y + COL_SLOT_H}
              x2={MATRIX_X + 3 * PITCH + CELL_SIZE / 2}
              y2={MATRIX_Y + 420}
              stroke={theme.good}
              strokeWidth={2.5}
              strokeDasharray="8 6"
              opacity={0.85}
            />
          </>
        )}
      </svg>

      {/* ------------------------------------------------------------------- */}
      {/* BOTTOM INTERACTION ZONE: Compact Progressive Callouts (Y: 760..860) */}
      {/* ------------------------------------------------------------------- */}
      <div
        style={{
          position: "absolute",
          left: 560,
          right: 560,
          top: 760,
          height: 100,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 35,
        }}
      >
        {/* Beat 01: Focus on cell (3, 3) (F0..F149) */}
        {frame < 150 && (
          <div
            style={{
              padding: "10px 24px",
              borderRadius: 14,
              backgroundColor: "rgba(255, 209, 102, 0.15)",
              border: `1.5px solid ${theme.pivot}`,
              display: "flex",
              alignItems: "center",
              gap: 12,
            }}
          >
            <span style={{ fontSize: 22 }}>🎯</span>
            <span
              style={{
                fontFamily: fonts.sans,
                fontSize: 22,
                fontWeight: 800,
                color: theme.pivot,
              }}
            >
              Suppose we find an original zero at row 3, column 3.
            </span>
          </div>
        )}

        {/* Beat 02 & 03: The Question & "NO." Stamp (F150..F353) */}
        {frame >= 150 && frame < 354 && (
          <div
            style={{
              position: "relative",
              padding: "12px 30px",
              borderRadius: 16,
              backgroundColor: "rgba(10, 36, 25, 0.95)",
              border: `2px solid ${frame >= 312 ? theme.warn : theme.pivot}`,
              display: "flex",
              alignItems: "center",
              gap: 18,
            }}
          >
            <span style={{ fontSize: 26 }}>❓</span>
            <span
              style={{
                fontFamily: fonts.sans,
                fontSize: 22,
                fontWeight: 800,
                color: theme.chalkText,
              }}
            >
              Do we really need to remember every number in the original matrix?
            </span>

            {/* Stamp drop at F312 */}
            {frame >= 312 && (
              <div
                style={{
                  transform: `scale(${noStampSpring}) rotate(-6deg)`,
                  padding: "6px 18px",
                  borderRadius: 10,
                  backgroundColor: "rgba(255, 107, 107, 0.25)",
                  border: `2.5px solid ${theme.warn}`,
                  color: theme.warn,
                  fontFamily: fonts.mono,
                  fontSize: 24,
                  fontWeight: 900,
                  letterSpacing: "0.06em",
                }}
              >
                ❌ NO.
              </div>
            )}
          </div>
        )}

        {/* Beat 04: Two Facts Header (F354..F454) */}
        {frame >= 354 && frame < 455 && (
          <div
            style={{
              padding: "12px 28px",
              borderRadius: 14,
              backgroundColor: "rgba(255, 209, 102, 0.16)",
              border: `2px solid ${theme.pivot}`,
              fontFamily: fonts.sans,
              fontSize: 24,
              fontWeight: 800,
              color: theme.pivot,
            }}
          >
            ✨ For the final answer, we only need TWO FACTS:
          </div>
        )}

        {/* Beat 05..07: Fact 1, Fact 2 & Compression Insight (F455..F675) */}
        {frame >= 455 && frame < 676 && (
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
            <div style={{ display: "flex", gap: 16 }}>
              {/* Fact 1 */}
              <div
                style={{
                  padding: "8px 20px",
                  borderRadius: 12,
                  backgroundColor: "rgba(255, 209, 102, 0.18)",
                  border: `1.5px solid ${theme.pivot}`,
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                }}
              >
                <span style={{ fontSize: 20 }}>1️⃣</span>
                <span style={{ fontFamily: fonts.sans, fontSize: 18, fontWeight: 800, color: theme.pivot }}>
                  Which rows contained a 0? (Row 3)
                </span>
              </div>

              {/* Fact 2 */}
              {frame >= 521 && (
                <div
                  style={{
                    padding: "8px 20px",
                    borderRadius: 12,
                    backgroundColor: "rgba(6, 214, 160, 0.18)",
                    border: `1.5px solid ${theme.good}`,
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                  }}
                >
                  <span style={{ fontSize: 20 }}>2️⃣</span>
                  <span style={{ fontFamily: fonts.sans, fontSize: 18, fontWeight: 800, color: theme.good }}>
                    Which columns contained a 0? (Column 3)
                  </span>
                </div>
              )}
            </div>

            {/* Compression Insight Beat 07 (F599..F675) */}
            {frame >= 599 && (
              <div
                style={{
                  fontFamily: fonts.mono,
                  fontSize: 16,
                  fontWeight: 800,
                  color: theme.good,
                  backgroundColor: "rgba(6, 214, 160, 0.12)",
                  padding: "4px 16px",
                  borderRadius: 20,
                  border: `1px solid ${theme.good}`,
                }}
              >
                ⚡ Much less information than storing all 25 numbers!
              </div>
            )}
          </div>
        )}

        {/* Beat 08: Reject Full Matrix Clone (F676..F759) */}
        {frame >= 676 && frame < 760 && (
          <div
            style={{
              padding: "12px 28px",
              borderRadius: 14,
              backgroundColor: "rgba(255, 107, 107, 0.15)",
              border: `2px solid ${theme.warn}`,
              fontFamily: fonts.sans,
              fontSize: 22,
              fontWeight: 800,
              color: theme.chalkText,
            }}
          >
            ❌ Instead of copying the whole matrix, keep lightweight markers...
          </div>
        )}

        {/* Beat 09 & 10: Marker Arrays Intro (F760..F936) */}
        {frame >= 760 && frame < 937 && (
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
              {frame < 852
                ? "rowZero: Keep one marker for every row (M = 5)"
                : "colZero: And one marker for every column (N = 5)"}
            </span>
          </div>
        )}

        {/* Beat 11 & 12: Row 3 Condition & Marking (F937..F1073) */}
        {frame >= 937 && frame < 1074 && (
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
              {frame < 1030
                ? "If row 3 contains an original zero..."
                : "Mark row 3: rowZero[3] = True!"}
            </span>
          </div>
        )}

        {/* Beat 13 & 14: Col 3 Condition & Marking (F1074..F1221) */}
        {frame >= 1074 && frame < 1222 && (
          <div
            style={{
              padding: "10px 24px",
              borderRadius: 14,
              backgroundColor: "rgba(6, 214, 160, 0.16)",
              border: `2px solid ${theme.good}`,
              display: "flex",
              alignItems: "center",
              gap: 14,
            }}
          >
            <span style={{ fontSize: 22 }}>👉</span>
            <span style={{ fontFamily: fonts.sans, fontSize: 20, fontWeight: 800, color: theme.good }}>
              {frame < 1172
                ? "If column 3 contains an original zero..."
                : "Mark column 3: colZero[3] = True!"}
            </span>
          </div>
        )}

        {/* Beat 15: Discovery Finished (F1222..F1298) */}
        {frame >= 1222 && frame < 1299 && (
          <div
            style={{
              padding: "10px 26px",
              borderRadius: 14,
              backgroundColor: "rgba(10, 36, 25, 0.95)",
              border: `2px solid ${theme.cyan}`,
              fontFamily: fonts.mono,
              fontSize: 20,
              fontWeight: 800,
              color: theme.cyan,
            }}
          >
            📋 DISCOVERY FINISHED: All original zeroes stored in rails
          </div>
        )}

        {/* Beat 16: Markers Dictate Zeroes (F1299..F1426) */}
        {frame >= 1299 && frame < 1427 && (
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
            🎯 Those markers tell us exactly where zeroes must go!
          </div>
        )}

        {/* Beat 17..19: Memory Compression Proof (F1427..F1704) */}
        {frame >= 1427 && frame < 1705 && (
          <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
            {/* Method 1 */}
            <div
              style={{
                padding: "8px 20px",
                borderRadius: 12,
                backgroundColor: "rgba(255, 107, 107, 0.15)",
                border: `1.5px solid ${theme.warn}`,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <span style={{ fontFamily: fonts.mono, fontSize: 13, fontWeight: 800, color: theme.warn }}>
                METHOD 1 (FULL COPY)
              </span>
              <span style={{ fontFamily: fonts.mono, fontSize: 18, fontWeight: 900, color: theme.chalkText }}>
                O(M × N) · 25 Integers
              </span>
            </div>

            <div style={{ fontSize: 24, color: theme.good }}>➔</div>

            {/* Method 2 */}
            <div
              style={{
                padding: "8px 20px",
                borderRadius: 12,
                backgroundColor: "rgba(6, 214, 160, 0.18)",
                border: `2px solid ${theme.good}`,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <span style={{ fontFamily: fonts.mono, fontSize: 13, fontWeight: 800, color: theme.good }}>
                METHOD 2 (1D MARKERS)
              </span>
              <span style={{ fontFamily: fonts.mono, fontSize: 18, fontWeight: 900, color: theme.good }}>
                O(M + N) · 10 Booleans
              </span>
            </div>

            <div
              style={{
                fontFamily: fonts.mono,
                fontSize: 15,
                fontWeight: 900,
                color: theme.pivot,
                padding: "6px 14px",
                borderRadius: 20,
                backgroundColor: "rgba(255, 209, 102, 0.15)",
                border: `1.5px solid ${theme.pivot}`,
              }}
            >
              ⚡ 60% Space Saved!
            </div>
          </div>
        )}

        {/* Beat 20: Handoff to Scene 06 (F1705..F1754) */}
        {frame >= 1705 && (
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
            <span style={{ fontSize: 24 }}>➡️</span>
            <span
              style={{
                fontFamily: fonts.mono,
                fontSize: 20,
                fontWeight: 900,
                color: theme.good,
                letterSpacing: "0.04em",
              }}
            >
              LET'S TRACE THAT METHOD ➔ SCENE 06
            </span>
          </div>
        )}
      </div>

      {/* ------------------------------------------------------------------- */}
      {/* Audio & Word-Synchronized Captions                                  */}
      {/* ------------------------------------------------------------------- */}
      <Audio src={staticFile("audio/013/05-why-copy.mp3")} />
      <Captions words={captionWords} />
    </div>
  );
};
