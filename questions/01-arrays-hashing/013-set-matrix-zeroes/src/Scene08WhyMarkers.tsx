/**
 * Scene08WhyMarkers.tsx — Scene 08 · Derive Constant-Space Optimal Storage
 * Question 013: Set Matrix Zeroes (LeetCode 73) · Pattern 01 — Arrays & Hashing
 *
 * Strict Compliance:
 * - plans/08-why-markers_FRAMEWISE_PLAN.md (all 29 anchors, 9-field schema)
 * - sync/08-why-markers.anchors.json (exact word-level frame anchors)
 * - Canonical @dsa/kit visual grammar: RoughBox, ChalkText, Captions.
 * - Center-Stage 5x5 Matrix Hero on dark chalkboard; zero AI-slop right cards.
 * - Representation handoff: external 1D rails transfer role directly into Row 0 & Col 0.
 * - Corner cell (0,0) conflict & two safeguard booleans (firstRowZero, firstColZero).
 * - Clearance: all elements strictly between Y: 140 and Y: 860, leaving 100px buffer above captions at Y: 960.
 * - 100% Remotion frame-derived determinism; zero CSS transitions.
 *
 * Duration: 3037 frames @ 30fps (101.220s)
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
import syncData from "../sync/08-why-markers.json";

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

export const Scene08WhyMarkers: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // -------------------------------------------------------------------------
  // Phase Definitions from sync/08-why-markers.anchors.json
  // -------------------------------------------------------------------------
  // External rails introduction
  const isPhase1LeftRail = frame >= 0 && frame < 787;
  const isPhase1TopRail = frame >= 156 && frame < 871;

  // Comparison/Ghosting beat (F659..F787)
  const isInsteadBeat = frame >= 659 && frame < 787;

  // Matrix hero entrance
  const showMatrix = frame >= 314;
  const matrixSpring = spring({
    frame: Math.max(0, frame - 314),
    fps,
    config: { damping: 14, stiffness: 90 },
  });

  // Boundary highlight phases
  const highlightCol0 = frame >= 405;
  const highlightRow0 = frame >= 520;

  // Boundary role assignments
  const col0IsRowMarkerRole = frame >= 787;
  const row0IsColMarkerRole = frame >= 871;

  // Interior zero demonstration at (3, 3) (F953..F1349)
  const isInteriorDemoPhase = frame >= 953 && frame < 1349;
  const showHorizontalRay = frame >= 1067 && frame < 1349;
  const showRowMarkTag = frame >= 1172 && frame < 1227;
  const showVerticalRay = frame >= 1227 && frame < 1349;
  const showColMarkTag = frame >= 1303 && frame < 1349;

  // Space reduction confirmation (F1349..F1433)
  const showZeroExternalBadge = frame >= 1349 && frame < 1433;

  // The Critical Problem: Real data overwrite (F1433..F1829)
  const isProblemPhase = frame >= 1433 && frame < 2290;
  const highlightRealData = frame >= 1480 && frame < 1829;
  const showOverwriteDemo = frame >= 1584 && frame < 1813;

  // Corner (0, 0) Dual Collision (F1829..F2290)
  const isCornerConflictPhase = frame >= 1829 && frame < 2290;
  const isOneCellQuestion = frame >= 2030 && frame < 2290;

  // Two Boolean Safeguards Derivation (F2290..F3037)
  const showBooleanSlots = frame >= 2290;
  const scanRow0 = frame >= 2435 && frame < 2553;
  const row0ZeroFound = frame >= 2480;
  const firstRowZeroLocked = frame >= 2553;

  const scanCol0 = frame >= 2631 && frame < 2762;
  const col0ZeroFound = frame >= 2680;
  const firstColZeroLocked = frame >= 2762;

  const showSafeShield = frame >= 2848 && frame < 2940;
  const isFinalClimax = frame >= 2940;

  // Dynamic values in matrix
  const matrixValues = useMemo(() => {
    // Deep clone original matrix
    const mat = ORIGINAL_MATRIX.map((r) => [...r]);

    // During interior demo, show writes at (3, 0) and (0, 3)
    if (showHorizontalRay) {
      mat[3][0] = 0;
    }
    if (showVerticalRay) {
      mat[0][3] = 0;
    }

    // Overwrite simulation at (0, 3) during destroy warning
    if (showOverwriteDemo) {
      mat[0][3] = 0;
    }

    return mat;
  }, [showHorizontalRay, showVerticalRay, showOverwriteDemo]);

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
            DERIVE OPTIMAL STORAGE: O(1) SPACE
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
          IN-PLACE BOUNDARY REUSE
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
      {/* CENTER STAGE: Master Matrix & Boundary Overlays                     */}
      {/* Center midpoint: X = 960, Composite bounds: X: 680..1520, Y: 180..750 */}
      {/* ------------------------------------------------------------------- */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          zIndex: 20,
        }}
      >
        {/* Left Rail (rowZero external array) */}
        {isPhase1LeftRail && (
          <div
            style={{
              position: "absolute",
              left: MATRIX_ORIGIN_X - 70,
              top: MATRIX_ORIGIN_Y,
              width: 54,
              height: MATRIX_DIM,
              display: "flex",
              flexDirection: "column",
              gap: GAP,
              opacity: isInsteadBeat ? 0.45 : 1,
              zIndex: 25,
            }}
          >
            {/* Label above left rail */}
            <div
              style={{
                position: "absolute",
                top: -34,
                left: -20,
                width: 94,
                textAlign: "center",
                fontFamily: fonts.mono,
                fontSize: 13,
                fontWeight: 900,
                color: theme.cyan,
              }}
            >
              rowZero (M)
            </div>

            {[0, 1, 2, 3, 4].map((r) => (
              <div
                key={`left-rail-${r}`}
                style={{
                  width: 54,
                  height: CELL_SIZE,
                  position: "relative",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div style={{ position: "absolute", inset: 0 }}>
                  <RoughBox
                    width={54}
                    height={CELL_SIZE}
                    stroke={theme.cyan}
                    strokeWidth={2}
                    seed={100 + r}
                    fill="rgba(76, 201, 240, 0.12)"
                  />
                </div>
                <span
                  style={{
                    position: "relative",
                    zIndex: 2,
                    fontFamily: fonts.mono,
                    fontSize: 16,
                    fontWeight: 900,
                    color: theme.cyan,
                  }}
                >
                  F
                </span>
              </div>
            ))}
          </div>
        )}

        {/* Top Rail (colZero external array) */}
        {isPhase1TopRail && (
          <div
            style={{
              position: "absolute",
              left: MATRIX_ORIGIN_X,
              top: MATRIX_ORIGIN_Y - 70,
              width: MATRIX_DIM,
              height: 54,
              display: "flex",
              gap: GAP,
              opacity: isInsteadBeat ? 0.45 : 1,
              zIndex: 25,
            }}
          >
            {/* Label above top rail */}
            <div
              style={{
                position: "absolute",
                top: -28,
                left: 0,
                width: MATRIX_DIM,
                textAlign: "center",
                fontFamily: fonts.mono,
                fontSize: 13,
                fontWeight: 900,
                color: theme.good,
              }}
            >
              colZero (N slots)
            </div>

            {[0, 1, 2, 3, 4].map((c) => (
              <div
                key={`top-rail-${c}`}
                style={{
                  width: CELL_SIZE,
                  height: 54,
                  position: "relative",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div style={{ position: "absolute", inset: 0 }}>
                  <RoughBox
                    width={CELL_SIZE}
                    height={54}
                    stroke={theme.good}
                    strokeWidth={2}
                    seed={200 + c}
                    fill="rgba(6, 214, 160, 0.12)"
                  />
                </div>
                <span
                  style={{
                    position: "relative",
                    zIndex: 2,
                    fontFamily: fonts.mono,
                    fontSize: 16,
                    fontWeight: 900,
                    color: theme.good,
                  }}
                >
                  F
                </span>
              </div>
            ))}
          </div>
        )}

        {/* ----------------------------------------------------------------- */}
        {/* Master 5x5 Matrix Grid                                            */}
        {/* ----------------------------------------------------------------- */}
        {showMatrix && (
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
              opacity: matrixSpring,
              transform: `scale(${interpolate(matrixSpring, [0, 1], [0.95, 1])})`,
              zIndex: 20,
            }}
          >
            {matrixValues.map((row, r) =>
              row.map((val, c) => {
                const isCol0 = c === 0;
                const isRow0 = r === 0;
                const isCorner = r === 0 && c === 0;
                const isOrigZero = ORIGINAL_MATRIX[r][c] === 0;

                // Interior demo active cell (3, 3)
                const isInteriorPivot = isInteriorDemoPhase && r === 3 && c === 3;

                // Scan line highlights
                const isRow0ScanTarget = scanRow0 && r === 0 && (c === 2 || (row0ZeroFound && c === 2));
                const isCol0ScanTarget = scanCol0 && c === 0 && (r === 2 || (col0ZeroFound && r === 2));

                // Determine border and background colors
                let strokeColor = "rgba(248, 246, 240, 0.35)";
                let strokeWidth = 1.8;
                let fillColor: string | undefined = undefined;

                if (isCorner && isCornerConflictPhase) {
                  strokeColor = theme.accent;
                  strokeWidth = 3.5;
                  fillColor = "rgba(255, 107, 107, 0.25)";
                } else if (isCorner && (col0IsRowMarkerRole || row0IsColMarkerRole)) {
                  strokeColor = theme.pivot;
                  strokeWidth = 3;
                  fillColor = "rgba(255, 209, 102, 0.22)";
                } else if (isCol0 && highlightCol0) {
                  strokeColor = theme.cyan;
                  strokeWidth = col0IsRowMarkerRole ? 2.8 : 2.2;
                  fillColor = col0IsRowMarkerRole
                    ? "rgba(76, 201, 240, 0.2)"
                    : "rgba(76, 201, 240, 0.1)";
                } else if (isRow0 && highlightRow0) {
                  strokeColor = theme.pivot;
                  strokeWidth = row0IsColMarkerRole ? 2.8 : 2.2;
                  fillColor = row0IsColMarkerRole
                    ? "rgba(255, 209, 102, 0.2)"
                    : "rgba(255, 209, 102, 0.1)";
                } else if (isInteriorPivot) {
                  strokeColor = theme.accent;
                  strokeWidth = 3;
                  fillColor = "rgba(255, 107, 107, 0.25)";
                } else if (isOrigZero) {
                  strokeColor = theme.pivot;
                  strokeWidth = 2.2;
                  fillColor = "rgba(255, 209, 102, 0.15)";
                }

                // Problem highlight for real data
                if (highlightRealData && (isRow0 || isCol0) && !isCorner) {
                  fillColor = "rgba(255, 209, 102, 0.22)";
                }

                // Scan target highlights
                if (isRow0ScanTarget || isCol0ScanTarget) {
                  strokeColor = theme.good;
                  strokeWidth = 3.5;
                  fillColor = "rgba(6, 214, 160, 0.35)";
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
                        seed={300 + r * 5 + c}
                        fill={fillColor}
                      />
                    </div>

                    {/* Cell Value */}
                    <span
                      style={{
                        position: "relative",
                        zIndex: 2,
                        fontFamily: fonts.mono,
                        fontSize: 22,
                        fontWeight: 900,
                        color:
                          isCorner && isCornerConflictPhase
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

                    {/* Subscript / Coordinate tag if interior pivot */}
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
                  </div>
                );
              })
            )}
          </div>
        )}

        {/* ----------------------------------------------------------------- */}
        {/* Role Banners Docked onto Boundaries                               */}
        {/* ----------------------------------------------------------------- */}
        {/* Column 0 Role: ROW MARKERS */}
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

        {/* Row 0 Role: COLUMN MARKERS */}
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
        {/* Projection Rays for Interior Zero (3, 3)                         */}
        {/* ----------------------------------------------------------------- */}
        {isInteriorDemoPhase && (
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
            {showHorizontalRay && (
              <line
                x1={MATRIX_ORIGIN_X + 3 * PITCH + CELL_SIZE / 2}
                y1={MATRIX_ORIGIN_Y + 3 * PITCH + CELL_SIZE / 2}
                x2={MATRIX_ORIGIN_X + 0 * PITCH + CELL_SIZE / 2}
                y2={MATRIX_ORIGIN_Y + 3 * PITCH + CELL_SIZE / 2}
                stroke={theme.cyan}
                strokeWidth={3}
                strokeDasharray="6 4"
              />
            )}

            {/* Vertical Ray: (3, 3) up to (0, 3) */}
            {showVerticalRay && (
              <line
                x1={MATRIX_ORIGIN_X + 3 * PITCH + CELL_SIZE / 2}
                y1={MATRIX_ORIGIN_Y + 3 * PITCH + CELL_SIZE / 2}
                x2={MATRIX_ORIGIN_X + 3 * PITCH + CELL_SIZE / 2}
                y2={MATRIX_ORIGIN_Y + 0 * PITCH + CELL_SIZE / 2}
                stroke={theme.good}
                strokeWidth={3}
                strokeDasharray="6 4"
              />
            )}
          </svg>
        )}

        {/* Interior Demo Callout Tags */}
        {showRowMarkTag && (
          <div
            style={{
              position: "absolute",
              left: MATRIX_ORIGIN_X - 165,
              top: MATRIX_ORIGIN_Y + 3 * PITCH + 20,
              padding: "4px 10px",
              borderRadius: 8,
              backgroundColor: "rgba(76, 201, 240, 0.2)",
              border: `1.5px solid ${theme.cyan}`,
              fontFamily: fonts.mono,
              fontSize: 12,
              fontWeight: 800,
              color: theme.cyan,
              zIndex: 30,
            }}
          >
            matrix[3][0] = 0
          </div>
        )}

        {showColMarkTag && (
          <div
            style={{
              position: "absolute",
              left: MATRIX_ORIGIN_X + 3 * PITCH - 20,
              top: MATRIX_ORIGIN_Y - 42,
              padding: "4px 10px",
              borderRadius: 8,
              backgroundColor: "rgba(6, 214, 160, 0.2)",
              border: `1.5px solid ${theme.good}`,
              fontFamily: fonts.mono,
              fontSize: 12,
              fontWeight: 800,
              color: theme.good,
              zIndex: 30,
            }}
          >
            matrix[0][3] = 0
          </div>
        )}

        {/* ----------------------------------------------------------------- */}
        {/* Corner Conflict Callout & Split Questions (F1829..F2290)          */}
        {/* ----------------------------------------------------------------- */}
        {isCornerConflictPhase && (
          <div
            style={{
              position: "absolute",
              left: MATRIX_ORIGIN_X - 220,
              top: MATRIX_ORIGIN_Y - 20,
              display: "flex",
              flexDirection: "column",
              gap: 8,
              zIndex: 35,
            }}
          >
            <div
              style={{
                padding: "8px 16px",
                borderRadius: 12,
                backgroundColor: "rgba(255, 107, 107, 0.18)",
                border: `2px solid ${theme.accent}`,
                fontFamily: fonts.mono,
                fontSize: 14,
                fontWeight: 900,
                color: theme.accent,
                display: "flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              <span>⚠️ CORNER CONFLICT</span>
              <span style={{ fontSize: 12, color: theme.chalkText }}>matrix[0][0]</span>
            </div>

            {isOneCellQuestion && (
              <div
                style={{
                  padding: "8px 14px",
                  borderRadius: 10,
                  backgroundColor: "rgba(10, 36, 25, 0.95)",
                  border: `1.5px solid ${theme.pivot}`,
                  fontFamily: fonts.sans,
                  fontSize: 13,
                  fontWeight: 700,
                  color: theme.pivot,
                  maxWidth: 200,
                  lineHeight: 1.3,
                }}
              >
                1 cell cannot independently hold both boundary facts!
              </div>
            )}
          </div>
        )}

        {/* ----------------------------------------------------------------- */}
        {/* Right Side: Two Boolean Safeguards (F2290..F3037)                 */}
        {/* Bounds: X: 1240..1540, Y: 300..500                                */}
        {/* ----------------------------------------------------------------- */}
        {showBooleanSlots && (
          <div
            style={{
              position: "absolute",
              left: MATRIX_ORIGIN_X + MATRIX_DIM + 50,
              top: MATRIX_ORIGIN_Y + 40,
              width: 280,
              display: "flex",
              flexDirection: "column",
              gap: 20,
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
              INDEPENDENT SAFEGUARDS
            </div>

            {/* Flag 1: firstRowZero */}
            <div
              style={{
                padding: "12px 18px",
                borderRadius: 14,
                backgroundColor: "rgba(10, 36, 25, 0.95)",
                border: `2px solid ${firstRowZeroLocked ? theme.good : theme.pivot}`,
                display: "flex",
                flexDirection: "column",
                gap: 6,
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
                    color: firstRowZeroLocked ? theme.good : theme.pivot,
                  }}
                >
                  firstRowZero
                </span>
                <span
                  style={{
                    fontFamily: fonts.mono,
                    fontSize: 16,
                    fontWeight: 900,
                    color: firstRowZeroLocked ? theme.good : theme.chalkDim,
                  }}
                >
                  {firstRowZeroLocked ? "= True" : "= ?"}
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
                Did original Row 0 have zero?
              </div>
            </div>

            {/* Flag 2: firstColZero */}
            <div
              style={{
                padding: "12px 18px",
                borderRadius: 14,
                backgroundColor: "rgba(10, 36, 25, 0.95)",
                border: `2px solid ${firstColZeroLocked ? theme.good : theme.cyan}`,
                display: "flex",
                flexDirection: "column",
                gap: 6,
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
                    color: firstColZeroLocked ? theme.good : theme.cyan,
                  }}
                >
                  firstColZero
                </span>
                <span
                  style={{
                    fontFamily: fonts.mono,
                    fontSize: 16,
                    fontWeight: 900,
                    color: firstColZeroLocked ? theme.good : theme.chalkDim,
                  }}
                >
                  {firstColZeroLocked ? "= True" : "= ?"}
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
                Did original Col 0 have zero?
              </div>
            </div>
          </div>
        )}

        {/* ----------------------------------------------------------------- */}
        {/* Bottom Callouts & Banners (Y: 760..860, clearance > 100px)        */}
        {/* ----------------------------------------------------------------- */}
        <div
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            top: 760,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 35,
          }}
        >
          {/* External Arrays Removed */}
          {showZeroExternalBadge && (
            <div
              style={{
                padding: "10px 24px",
                borderRadius: 14,
                backgroundColor: "rgba(6, 214, 160, 0.16)",
                border: `2px solid ${theme.good}`,
                fontFamily: fonts.sans,
                fontSize: 17,
                fontWeight: 800,
                color: theme.good,
                display: "flex",
                alignItems: "center",
                gap: 10,
              }}
            >
              <span>✨ ZERO EXTERNAL ARRAYS ALLOCATED</span>
              <span style={{ fontSize: 13, color: theme.chalkText }}>
                Matrix boundaries act as markers
              </span>
            </div>
          )}

          {/* Problem Warning Badge */}
          {isProblemPhase && frame >= 1433 && frame < 1584 && (
            <div
              style={{
                padding: "10px 24px",
                borderRadius: 14,
                backgroundColor: "rgba(255, 107, 107, 0.18)",
                border: `2px solid ${theme.accent}`,
                fontFamily: fonts.sans,
                fontSize: 17,
                fontWeight: 800,
                color: theme.accent,
                display: "flex",
                alignItems: "center",
                gap: 10,
              }}
            >
              <span>⚠️ CRITICAL RISK: Overwriting real input data destroys boundary history!</span>
            </div>
          )}

          {/* Overwrite Data Demo Callout */}
          {showOverwriteDemo && (
            <div
              style={{
                padding: "10px 24px",
                borderRadius: 14,
                backgroundColor: "rgba(255, 107, 107, 0.22)",
                border: `2px solid ${theme.accent}`,
                fontFamily: fonts.sans,
                fontSize: 17,
                fontWeight: 800,
                color: theme.accent,
                display: "flex",
                alignItems: "center",
                gap: 10,
              }}
            >
              <span>❌ Cell (0, 3) overwritten with marker 0: Original input value 4 is LOST!</span>
            </div>
          )}

          {/* Safety Shield Confirmation */}
          {showSafeShield && (
            <div
              style={{
                padding: "10px 28px",
                borderRadius: 14,
                backgroundColor: "rgba(6, 214, 160, 0.18)",
                border: `2px solid ${theme.good}`,
                fontFamily: fonts.sans,
                fontSize: 18,
                fontWeight: 800,
                color: theme.good,
                display: "flex",
                alignItems: "center",
                gap: 10,
              }}
            >
              <span>🛡️ BOUNDARY HISTORY PRESERVED SAFELY IN TWO VARIABLES</span>
            </div>
          )}

          {/* Climax Badge: O(1) Constant Space */}
          {isFinalClimax && (
            <div
              style={{
                padding: "12px 32px",
                borderRadius: 16,
                backgroundColor: "rgba(10, 36, 25, 0.95)",
                border: `2.5px solid ${theme.good}`,
                display: "flex",
                alignItems: "center",
                gap: 20,
              }}
            >
              <span
                style={{
                  fontFamily: fonts.mono,
                  fontSize: 18,
                  fontWeight: 900,
                  color: theme.good,
                }}
              >
                OPTIMAL ARCHITECTURE READY
              </span>
              <span style={{ width: 2, height: 24, backgroundColor: theme.chalkDim }} />
              <span
                style={{
                  fontFamily: fonts.mono,
                  fontSize: 20,
                  fontWeight: 900,
                  color: theme.pivot,
                }}
              >
                EXTRA SPACE: O(1)
              </span>
              <span style={{ width: 2, height: 24, backgroundColor: theme.chalkDim }} />
              <span
                style={{
                  fontFamily: fonts.sans,
                  fontSize: 15,
                  fontWeight: 700,
                  color: theme.chalkText,
                }}
              >
                1 Matrix + 2 Booleans
              </span>
            </div>
          )}
        </div>
      </div>

      {/* ------------------------------------------------------------------- */}
      {/* Audio & Word-Synchronized Captions                                  */}
      {/* ------------------------------------------------------------------- */}
      <Audio src={staticFile("audio/013/08-why-markers.mp3")} />
      <Captions words={captionWords} />
    </div>
  );
};
