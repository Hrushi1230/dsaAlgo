/**
 * Scene09OptimalIdea.tsx — Scene 09 · Method 3 Conceptual Overview
 * Question 013: Set Matrix Zeroes (LeetCode 73) · Pattern 01 — Arrays & Hashing
 *
 * Strict Compliance:
 * - plans/09-optimal-idea_FRAMEWISE_PLAN.md (all 30 anchors, 9-field schema)
 * - sync/09-optimal-idea.anchors.json (exact word-level frame anchors)
 * - Canonical @dsa/kit visual grammar: RoughBox, ChalkText, Captions.
 * - Centered 5x5 Matrix Hero on dark chalkboard; zero AI-slop container cards.
 * - Bidirectional Information Flow:
 *   - Outward projection: interior zero -> boundary marker writes
 *   - Inward decision: interior cell queries row/col markers -> zeroing
 *   - Boundary finalization via saved booleans
 *   - 4-Step Information Flow summary sequence
 * - Clearance: elements strictly between Y: 140 and Y: 860, leaving 100px buffer above captions at Y: 960.
 * - 100% Remotion frame-derived determinism; zero CSS transitions.
 *
 * Duration: 3209 frames @ 30fps (106.960s)
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
import syncData from "../sync/09-optimal-idea.json";

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

// Layout Geometry Constants (Centered Stage)
const MATRIX_ORIGIN_X = 750;
const MATRIX_ORIGIN_Y = 280;
const CELL_SIZE = 76;
const GAP = 10;
const PITCH = CELL_SIZE + GAP; // 86px
const MATRIX_DIM = 5 * CELL_SIZE + 4 * GAP; // 420px

export const Scene09OptimalIdea: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // -------------------------------------------------------------------------
  // Phase Triggers from sync/09-optimal-idea.anchors.json
  // -------------------------------------------------------------------------
  // Opening protected history
  const showProtectedFlags = frame >= 0 && frame < 3116;
  const highlightBooleans = frame >= 115 && frame < 308;

  // Boundary roles assigned
  const col0IsRowMarkerRole = frame >= 402 && frame < 2200;
  const row0IsColMarkerRole = frame >= 490 && frame < 2200;

  // Interior scan focus
  const isInteriorScanFocus = frame >= 580 && frame < 1706;

  // Interior zero discovery at (3, 3)
  const isInteriorZeroFound = frame >= 661 && frame < 1567;
  const showNoImmediateZeroWarning = frame >= 796 && frame < 890;
  const showOutwardRays = frame >= 911 && frame < 1567;
  const showRowRay = frame >= 983 && frame < 1567;
  const showRowTooltip = frame >= 1065 && frame < 1175;
  const showColRay = frame >= 1175 && frame < 1567;
  const showColTooltip = frame >= 1282 && frame < 1404;
  const showProjectionBadge = frame >= 1430 && frame < 1567;

  // Boundary memory holds all info
  const showBoundaryReadyBadge = frame >= 1567 && frame < 1706;

  // Reversal: Inward Decision Phase
  const isReversalPhase = frame >= 1706 && frame < 2200;
  const isInteriorQueryActive = frame >= 1790 && frame < 2194;
  const showRowQueryBeam = frame >= 1887 && frame < 2194;
  const showColQueryBeam = frame >= 1979 && frame < 2194;
  const showDecisionZeroed = frame >= 2070 && frame < 2194;

  // Interior finished & Boundary finalization
  const isInteriorDonePhase = frame >= 2194 && frame < 2584;
  const focusSavedFlagsFinal = frame >= 2356 && frame < 2584;
  const finalizeRow0Active = frame >= 2432 && frame < 2584;
  const finalizeCol0Active = frame >= 2507 && frame < 2584;

  // 4-Step Information Flow Sequence
  const showFlowSequence = frame >= 2584 && frame < 3116;
  const flowStep1 = frame >= 2657;
  const flowStep2 = frame >= 2745;
  const flowStep3 = frame >= 2846;
  const flowStep4 = frame >= 2964;

  // Final Master Trace Handoff
  const isHandoffPhase = frame >= 3116;

  // Matrix Cell Values based on phase
  const matrixValues = useMemo(() => {
    // If handoff, reset cleanly to original master values
    if (isHandoffPhase) {
      return ORIGINAL_MATRIX.map((r) => [...r]);
    }

    const mat = ORIGINAL_MATRIX.map((r) => [...r]);

    // Outward projection marker writes
    if (showRowRay) {
      mat[3][0] = 0;
    }
    if (showColRay) {
      mat[0][3] = 0;
    }

    // Inward decision on query cell (1, 3)
    if (showDecisionZeroed) {
      mat[1][3] = 0;
    }

    // During interior done phase, show interior fully updated
    if (isInteriorDonePhase || showFlowSequence) {
      // Zero rows 0, 2, 3 and cols 0, 2, 3 for interior (1..4, 1..4)
      for (let r = 1; r < 5; r++) {
        for (let c = 1; c < 5; c++) {
          if (r === 2 || r === 3 || c === 2 || c === 3) {
            mat[r][c] = 0;
          }
        }
      }
    }

    // Finalize Row 0 & Col 0
    if (finalizeRow0Active) {
      for (let c = 0; c < 5; c++) mat[0][c] = 0;
    }
    if (finalizeCol0Active) {
      for (let r = 0; r < 5; r++) mat[r][0] = 0;
    }

    return mat;
  }, [
    isHandoffPhase,
    showRowRay,
    showColRay,
    showDecisionZeroed,
    isInteriorDonePhase,
    showFlowSequence,
    finalizeRow0Active,
    finalizeCol0Active,
  ]);

  return (
    <div
      style={{
        width: 1920,
        height: 1080,
        position: "relative",
        overflow: "hidden",
        backgroundColor: theme.boardBg,
      }}
    >
      <ChalkboardBackground />
      <ChalkFilters />

      {/* ------------------------------------------------------------------- */}
      {/* TOP HEADER: Breadcrumbs, Title, Question Meta                       */}
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
            METHOD 3: OPTIMAL INFORMATION FLOW
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
          MATRIX BECOMES ITS OWN MEMORY
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
      {/* CENTER STAGE: Master Matrix & Information Flow Geometry             */}
      {/* Bounds: X: 600..1520, Y: 180..750                                   */}
      {/* ------------------------------------------------------------------- */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          zIndex: 20,
        }}
      >
        {/* Master 5x5 Matrix */}
        <div
          style={{
            position: "absolute",
            left: MATRIX_ORIGIN_X,
            top: MATRIX_ORIGIN_Y,
            width: MATRIX_DIM,
            height: MATRIX_DIM,
            display: "grid",
            gridTemplateColumns: `repeat(5, ${CELL_SIZE}px)`,
            gap: GAP,
            zIndex: 20,
          }}
        >
          {matrixValues.map((row, r) =>
            row.map((val, c) => {
              const isCol0 = c === 0;
              const isRow0 = r === 0;
              const isBoundary = isCol0 || isRow0;
              const isInterior = !isBoundary;
              const isOrigZero = ORIGINAL_MATRIX[r][c] === 0;

              // Interior zero pivot at (3, 3)
              const isInteriorPivot = isInteriorZeroFound && r === 3 && c === 3;

              // Query cell at (1, 3) in Pass 2 decision phase
              const isQueryCell = isInteriorQueryActive && r === 1 && c === 3;

              // Boundary role styling
              let strokeColor = "rgba(248, 246, 240, 0.35)";
              let strokeWidth = 1.8;
              let fillColor: string | undefined = undefined;

              if (isBoundary && (col0IsRowMarkerRole || row0IsColMarkerRole)) {
                if (isCol0 && isRow0) {
                  strokeColor = theme.accent;
                  strokeWidth = 2.8;
                  fillColor = "rgba(255, 107, 107, 0.18)";
                } else if (isCol0) {
                  strokeColor = theme.cyan;
                  strokeWidth = 2.4;
                  fillColor = "rgba(76, 201, 240, 0.16)";
                } else {
                  strokeColor = theme.pivot;
                  strokeWidth = 2.4;
                  fillColor = "rgba(255, 209, 102, 0.16)";
                }
              } else if (isInteriorScanFocus && isInterior) {
                strokeColor = isInteriorPivot ? theme.accent : "rgba(248, 246, 240, 0.6)";
                strokeWidth = isInteriorPivot ? 3 : 1.8;
                fillColor = isInteriorPivot ? "rgba(255, 107, 107, 0.25)" : undefined;
              }

              // Query cell highlight in Pass 2
              if (isQueryCell) {
                strokeColor = showDecisionZeroed ? theme.good : theme.pivot;
                strokeWidth = 3;
                fillColor = showDecisionZeroed
                  ? "rgba(6, 214, 160, 0.3)"
                  : "rgba(255, 209, 102, 0.25)";
              }

              // Finalized boundaries
              if ((finalizeRow0Active && isRow0) || (finalizeCol0Active && isCol0)) {
                strokeColor = theme.good;
                fillColor = "rgba(6, 214, 160, 0.25)";
              }

              // Original zeros in clean state
              if (isOrigZero && !isBoundary && !isInteriorZeroFound && !showDecisionZeroed) {
                strokeColor = theme.pivot;
                fillColor = "rgba(255, 209, 102, 0.15)";
              }

              return (
                <div
                  key={`mat-${r}-${c}`}
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
                      strokeWidth={strokeWidth}
                      seed={500 + r * 5 + c}
                      fill={fillColor}
                    />
                  </div>

                  {/* Value */}
                  <span
                    style={{
                      position: "relative",
                      zIndex: 2,
                      fontFamily: fonts.mono,
                      fontSize: 22,
                      fontWeight: 900,
                      color:
                        isQueryCell && showDecisionZeroed
                          ? theme.good
                          : isInteriorPivot
                          ? theme.accent
                          : isOrigZero
                          ? theme.pivot
                          : isCol0 && col0IsRowMarkerRole
                          ? theme.cyan
                          : isRow0 && row0IsColMarkerRole
                          ? theme.pivot
                          : theme.chalkText,
                    }}
                  >
                    {val}
                  </span>

                  {/* Coordinate tag if interior pivot */}
                  {isInteriorPivot && (
                    <div
                      style={{
                        position: "absolute",
                        bottom: 4,
                        right: 6,
                        fontFamily: fonts.mono,
                        fontSize: 10,
                        fontWeight: 800,
                        color: theme.accent,
                      }}
                    >
                      (r, c)
                    </div>
                  )}

                  {/* Coordinate tag if query cell */}
                  {isQueryCell && (
                    <div
                      style={{
                        position: "absolute",
                        bottom: 4,
                        right: 6,
                        fontFamily: fonts.mono,
                        fontSize: 10,
                        fontWeight: 800,
                        color: showDecisionZeroed ? theme.good : theme.pivot,
                      }}
                    >
                      (i, j)
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

        {/* ----------------------------------------------------------------- */}
        {/* Role Banners Docked onto Boundaries                               */}
        {/* ----------------------------------------------------------------- */}
        {col0IsRowMarkerRole && (
          <div
            style={{
              position: "absolute",
              left: MATRIX_ORIGIN_X - 145,
              top: MATRIX_ORIGIN_Y + MATRIX_DIM / 2 - 20,
              padding: "6px 14px",
              borderRadius: 12,
              backgroundColor: "rgba(10, 36, 25, 0.95)",
              border: `2px solid ${theme.cyan}`,
              fontFamily: fonts.mono,
              fontSize: 13,
              fontWeight: 900,
              color: theme.cyan,
              letterSpacing: "0.05em",
              zIndex: 35,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 2,
            }}
          >
            <span>ROW MARKERS</span>
            <span style={{ fontSize: 11, color: theme.chalkDim }}>Col 0 (M cells)</span>
          </div>
        )}

        {row0IsColMarkerRole && (
          <div
            style={{
              position: "absolute",
              left: MATRIX_ORIGIN_X + MATRIX_DIM / 2 - 80,
              top: MATRIX_ORIGIN_Y - 48,
              padding: "6px 16px",
              borderRadius: 12,
              backgroundColor: "rgba(10, 36, 25, 0.95)",
              border: `2px solid ${theme.pivot}`,
              fontFamily: fonts.mono,
              fontSize: 13,
              fontWeight: 900,
              color: theme.pivot,
              letterSpacing: "0.05em",
              zIndex: 35,
              display: "flex",
              alignItems: "center",
              gap: 8,
            }}
          >
            <span>COLUMN MARKERS</span>
            <span style={{ fontSize: 11, color: theme.chalkDim }}>Row 0 (N cells)</span>
          </div>
        )}

        {/* ----------------------------------------------------------------- */}
        {/* Outward Projection Rays & Tooltips (F911..F1567)                  */}
        {/* ----------------------------------------------------------------- */}
        {showOutwardRays && (
          <svg
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              pointerEvents: "none",
              zIndex: 25,
            }}
          >
            {/* Horizontal Ray: (3, 3) left to (3, 0) */}
            {showRowRay && (
              <line
                x1={MATRIX_ORIGIN_X + 3 * PITCH + CELL_SIZE / 2}
                y1={MATRIX_ORIGIN_Y + 3 * PITCH + CELL_SIZE / 2}
                x2={MATRIX_ORIGIN_X + 0 * PITCH + CELL_SIZE / 2}
                y2={MATRIX_ORIGIN_Y + 3 * PITCH + CELL_SIZE / 2}
                stroke={theme.cyan}
                strokeWidth={3.5}
                strokeDasharray="6 4"
              />
            )}

            {/* Vertical Ray: (3, 3) up to (0, 3) */}
            {showColRay && (
              <line
                x1={MATRIX_ORIGIN_X + 3 * PITCH + CELL_SIZE / 2}
                y1={MATRIX_ORIGIN_Y + 3 * PITCH + CELL_SIZE / 2}
                x2={MATRIX_ORIGIN_X + 3 * PITCH + CELL_SIZE / 2}
                y2={MATRIX_ORIGIN_Y + 0 * PITCH + CELL_SIZE / 2}
                stroke={theme.pivot}
                strokeWidth={3.5}
                strokeDasharray="6 4"
              />
            )}
          </svg>
        )}

        {showRowTooltip && (
          <div
            style={{
              position: "absolute",
              left: MATRIX_ORIGIN_X - 180,
              top: MATRIX_ORIGIN_Y + 3 * PITCH + 20,
              padding: "4px 10px",
              borderRadius: 8,
              backgroundColor: "rgba(10, 36, 25, 0.95)",
              border: `1.5px solid ${theme.cyan}`,
              fontFamily: fonts.sans,
              fontSize: 12,
              fontWeight: 800,
              color: theme.cyan,
              zIndex: 30,
            }}
          >
            Row 3 must zero later
          </div>
        )}

        {showColTooltip && (
          <div
            style={{
              position: "absolute",
              left: MATRIX_ORIGIN_X + 3 * PITCH - 20,
              top: MATRIX_ORIGIN_Y - 42,
              padding: "4px 10px",
              borderRadius: 8,
              backgroundColor: "rgba(10, 36, 25, 0.95)",
              border: `1.5px solid ${theme.pivot}`,
              fontFamily: fonts.sans,
              fontSize: 12,
              fontWeight: 800,
              color: theme.pivot,
              zIndex: 30,
            }}
          >
            Col 3 must zero later
          </div>
        )}

        {/* ----------------------------------------------------------------- */}
        {/* Inward Decision Query Beams (F1790..F2194)                        */}
        {/* Cell (1, 3) queries matrix[1][0] and matrix[0][3]                */}
        {/* ----------------------------------------------------------------- */}
        {isInteriorQueryActive && (
          <svg
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              pointerEvents: "none",
              zIndex: 25,
            }}
          >
            {/* Query to Col 0: (1, 3) left to (1, 0) */}
            {showRowQueryBeam && (
              <line
                x1={MATRIX_ORIGIN_X + 0 * PITCH + CELL_SIZE / 2}
                y1={MATRIX_ORIGIN_Y + 1 * PITCH + CELL_SIZE / 2}
                x2={MATRIX_ORIGIN_X + 3 * PITCH + CELL_SIZE / 2}
                y2={MATRIX_ORIGIN_Y + 1 * PITCH + CELL_SIZE / 2}
                stroke={theme.cyan}
                strokeWidth={3}
                strokeDasharray="4 4"
              />
            )}

            {/* Query to Row 0: (1, 3) up to (0, 3) */}
            {showColQueryBeam && (
              <line
                x1={MATRIX_ORIGIN_X + 3 * PITCH + CELL_SIZE / 2}
                y1={MATRIX_ORIGIN_Y + 0 * PITCH + CELL_SIZE / 2}
                x2={MATRIX_ORIGIN_X + 3 * PITCH + CELL_SIZE / 2}
                y2={MATRIX_ORIGIN_Y + 1 * PITCH + CELL_SIZE / 2}
                stroke={theme.good}
                strokeWidth={3}
                strokeDasharray="4 4"
              />
            )}
          </svg>
        )}

        {/* ----------------------------------------------------------------- */}
        {/* Right Side: Saved Booleans Card (F0..F3116)                       */}
        {/* Bounds: X: 1240..1520, Y: 320..500                                */}
        {/* ----------------------------------------------------------------- */}
        {showProtectedFlags && (
          <div
            style={{
              position: "absolute",
              left: MATRIX_ORIGIN_X + MATRIX_DIM + 50,
              top: MATRIX_ORIGIN_Y + 30,
              width: 280,
              display: "flex",
              flexDirection: "column",
              gap: 18,
              zIndex: 30,
            }}
          >
            <div
              style={{
                fontFamily: fonts.mono,
                fontSize: 13,
                fontWeight: 900,
                color: theme.chalkDim,
                letterSpacing: "0.08em",
              }}
            >
              BOUNDARY SAFEGUARDS
            </div>

            {/* firstRowZero Card */}
            <div
              style={{
                padding: "12px 18px",
                borderRadius: 14,
                backgroundColor: "rgba(10, 36, 25, 0.95)",
                border: `2px solid ${
                  highlightBooleans || focusSavedFlagsFinal || finalizeRow0Active
                    ? theme.good
                    : theme.pivot
                }`,
                display: "flex",
                flexDirection: "column",
                gap: 6,
                transform: highlightBooleans ? "scale(1.04)" : "none",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <span
                  style={{
                    fontFamily: fonts.mono,
                    fontSize: 15,
                    fontWeight: 900,
                    color: theme.pivot,
                  }}
                >
                  firstRowZero
                </span>
                <span
                  style={{
                    fontFamily: fonts.mono,
                    fontSize: 16,
                    fontWeight: 900,
                    color: theme.good,
                  }}
                >
                  = True
                </span>
              </div>
              <div
                style={{
                  fontFamily: fonts.sans,
                  fontSize: 12,
                  color: theme.chalkText,
                  lineHeight: 1.2,
                }}
              >
                Protects Row 0 history
              </div>
            </div>

            {/* firstColZero Card */}
            <div
              style={{
                padding: "12px 18px",
                borderRadius: 14,
                backgroundColor: "rgba(10, 36, 25, 0.95)",
                border: `2px solid ${
                  highlightBooleans || focusSavedFlagsFinal || finalizeCol0Active
                    ? theme.good
                    : theme.cyan
                }`,
                display: "flex",
                flexDirection: "column",
                gap: 6,
                transform: highlightBooleans ? "scale(1.04)" : "none",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <span
                  style={{
                    fontFamily: fonts.mono,
                    fontSize: 15,
                    fontWeight: 900,
                    color: theme.cyan,
                  }}
                >
                  firstColZero
                </span>
                <span
                  style={{
                    fontFamily: fonts.mono,
                    fontSize: 16,
                    fontWeight: 900,
                    color: theme.good,
                  }}
                >
                  = True
                </span>
              </div>
              <div
                style={{
                  fontFamily: fonts.sans,
                  fontSize: 12,
                  color: theme.chalkText,
                  lineHeight: 1.2,
                }}
              >
                Protects Col 0 history
              </div>
            </div>
          </div>
        )}

        {/* ----------------------------------------------------------------- */}
        {/* Bottom Callout & Interaction Zone (Y: 750..860)                   */}
        {/* ----------------------------------------------------------------- */}
        <div
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            top: 750,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 10,
            zIndex: 35,
          }}
        >
          {/* Opening Protected Callout */}
          {highlightBooleans && (
            <div
              style={{
                padding: "8px 24px",
                borderRadius: 14,
                backgroundColor: "rgba(6, 214, 160, 0.16)",
                border: `2px solid ${theme.good}`,
                fontFamily: fonts.sans,
                fontSize: 16,
                fontWeight: 800,
                color: theme.good,
              }}
            >
              🛡️ ORIGINAL BOUNDARY HISTORY SECURED IN TWO VARIABLES
            </div>
          )}

          {/* Do Not Mutate Immediately Warning */}
          {showNoImmediateZeroWarning && (
            <div
              style={{
                padding: "8px 24px",
                borderRadius: 14,
                backgroundColor: "rgba(255, 107, 107, 0.18)",
                border: `2px solid ${theme.accent}`,
                fontFamily: fonts.sans,
                fontSize: 16,
                fontWeight: 800,
                color: theme.accent,
              }}
            >
              🚫 DO NOT ZERO IMMEDIATELY — WOULD DESTROY FUTURE INTERIOR SCANS!
            </div>
          )}

          {/* Outward Projection Badge */}
          {showProjectionBadge && (
            <div
              style={{
                padding: "8px 24px",
                borderRadius: 14,
                backgroundColor: "rgba(10, 36, 25, 0.95)",
                border: `2px solid ${theme.pivot}`,
                fontFamily: fonts.mono,
                fontSize: 15,
                fontWeight: 800,
                color: theme.pivot,
              }}
            >
              INTERIOR ZERO (r, c) ➔ matrix[r][0] = 0 & matrix[0][c] = 0
            </div>
          )}

          {/* Direction Reversal Callout */}
          {isReversalPhase && (
            <div
              style={{
                padding: "8px 24px",
                borderRadius: 14,
                backgroundColor: "rgba(10, 36, 25, 0.95)",
                border: `2px solid ${theme.cyan}`,
                fontFamily: fonts.mono,
                fontSize: 15,
                fontWeight: 800,
                color: theme.cyan,
              }}
            >
              🔄 DIRECTION REVERSES: Check matrix[i][0] or matrix[0][j] == 0
            </div>
          )}

          {/* 4-Step Information Flow Recap Container */}
          {showFlowSequence && (
            <div
              style={{
                display: "flex",
                gap: 12,
                alignItems: "center",
              }}
            >
              <div
                style={{
                  padding: "8px 14px",
                  borderRadius: 10,
                  backgroundColor: flowStep1 ? "rgba(6, 214, 160, 0.2)" : "rgba(10, 36, 25, 0.8)",
                  border: `1.5px solid ${flowStep1 ? theme.good : "rgba(248, 246, 240, 0.2)"}`,
                  fontFamily: fonts.mono,
                  fontSize: 13,
                  fontWeight: 800,
                  color: flowStep1 ? theme.good : theme.chalkDim,
                }}
              >
                1. Save Booleans
              </div>
              <span style={{ color: theme.chalkDim, fontWeight: 900 }}>➔</span>
              <div
                style={{
                  padding: "8px 14px",
                  borderRadius: 10,
                  backgroundColor: flowStep2 ? "rgba(76, 201, 240, 0.2)" : "rgba(10, 36, 25, 0.8)",
                  border: `1.5px solid ${flowStep2 ? theme.cyan : "rgba(248, 246, 240, 0.2)"}`,
                  fontFamily: fonts.mono,
                  fontSize: 13,
                  fontWeight: 800,
                  color: flowStep2 ? theme.cyan : theme.chalkDim,
                }}
              >
                2. Project Outward
              </div>
              <span style={{ color: theme.chalkDim, fontWeight: 900 }}>➔</span>
              <div
                style={{
                  padding: "8px 14px",
                  borderRadius: 10,
                  backgroundColor: flowStep3 ? "rgba(255, 209, 102, 0.2)" : "rgba(10, 36, 25, 0.8)",
                  border: `1.5px solid ${flowStep3 ? theme.pivot : "rgba(248, 246, 240, 0.2)"}`,
                  fontFamily: fonts.mono,
                  fontSize: 13,
                  fontWeight: 800,
                  color: flowStep3 ? theme.pivot : theme.chalkDim,
                }}
              >
                3. Update Interior
              </div>
              <span style={{ color: theme.chalkDim, fontWeight: 900 }}>➔</span>
              <div
                style={{
                  padding: "8px 14px",
                  borderRadius: 10,
                  backgroundColor: flowStep4 ? "rgba(6, 214, 160, 0.2)" : "rgba(10, 36, 25, 0.8)",
                  border: `1.5px solid ${flowStep4 ? theme.good : "rgba(248, 246, 240, 0.2)"}`,
                  fontFamily: fonts.mono,
                  fontSize: 13,
                  fontWeight: 800,
                  color: flowStep4 ? theme.good : theme.chalkDim,
                }}
              >
                4. Finalize Boundaries
              </div>
            </div>
          )}

          {/* Handoff to Scene 10 */}
          {isHandoffPhase && (
            <div
              style={{
                padding: "10px 32px",
                borderRadius: 16,
                backgroundColor: "rgba(10, 36, 25, 0.95)",
                border: `2.5px solid ${theme.good}`,
                display: "flex",
                alignItems: "center",
                gap: 16,
              }}
            >
              <span
                style={{
                  fontFamily: fonts.mono,
                  fontSize: 17,
                  fontWeight: 900,
                  color: theme.good,
                }}
              >
                🚀 READY FOR FULL MASTER DRY-RUN
              </span>
              <span style={{ width: 2, height: 22, backgroundColor: theme.chalkDim }} />
              <span
                style={{
                  fontFamily: fonts.sans,
                  fontSize: 15,
                  fontWeight: 700,
                  color: theme.chalkText,
                }}
              >
                Scene 10: Step-by-Step Optimal Trace
              </span>
            </div>
          )}
        </div>
      </div>

      {/* ------------------------------------------------------------------- */}
      {/* Audio & Word-Synchronized Captions                                  */}
      {/* ------------------------------------------------------------------- */}
      <Audio src={staticFile("audio/013/09-optimal-idea.mp3")} />
      <Captions words={captionWords} />
    </div>
  );
};
