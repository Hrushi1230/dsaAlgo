/**
 * Scene10OptimalTrace.tsx — Scene 10 · Method 3 Full Verified Dry-Run Trace
 * Question 013: Set Matrix Zeroes (LeetCode 73) · Pattern 01 — Arrays & Hashing
 *
 * Strict Compliance:
 * - plans/10-optimal-trace_FRAMEWISE_PLAN.md (all 61 anchors, 9-field schema)
 * - sync/10-optimal-trace.anchors.json (exact word-level frame anchors)
 * - Canonical @dsa/kit visual grammar: RoughBox, ChalkText, ChalkboardBackground, Captions.
 * - Center-Stage Hero: 5x5 Matrix (X: 750..1170, Y: 270..690) centered at X = 960.
 * - Docked Marker Roles: Col 0 as ROW MARKERS (cyan, left), Row 0 as COLUMN MARKERS (gold, top).
 * - Right Status Zone: Saved history variables (firstRowZero, firstColZero).
 * - Bottom Callout Zone: Y: 760..848, leaving > 110px buffer above captions at Y: 960.
 * - 100% Remotion frame-derived determinism; zero CSS transitions.
 *
 * Duration: 7061 frames @ 30fps (235.360s)
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
import syncData from "../sync/10-optimal-trace.json";

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
// Layout Geometry Constants (Centered Stage, 1920x1080)
// ---------------------------------------------------------------------------
const CELL_SIZE = 76;
const GAP = 10;
const PITCH = CELL_SIZE + GAP; // 86px
const MATRIX_DIM = 5 * CELL_SIZE + 4 * GAP; // 420px
const MATRIX_ORIGIN_X = 750; // 960 - 420/2
const MATRIX_ORIGIN_Y = 270;

// Cell Center Coordinates Helper
const getCellCenter = (r: number, c: number) => ({
  x: MATRIX_ORIGIN_X + c * PITCH + CELL_SIZE / 2,
  y: MATRIX_ORIGIN_Y + r * PITCH + CELL_SIZE / 2,
});

export const Scene10OptimalTrace: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // -------------------------------------------------------------------------
  // Phase 1: Boundary History Scan & Protection (F0..F821)
  // -------------------------------------------------------------------------
  const isRow0ScanActive = frame >= 72 && frame < 311;
  const row0ScanCol =
    frame < 136 ? -1 : frame < 178 ? 0 : frame < 229 ? 1 : frame < 311 ? 2 : -1;

  const firstRowZeroActive = frame >= 311;
  const isCol0ScanActive = frame >= 440 && frame < 689;
  const col0ScanRow =
    frame < 514 ? -1 : frame < 566 ? 0 : frame < 616 ? 1 : frame < 689 ? 2 : -1;

  const firstColZeroActive = frame >= 689;
  const bothFlagsSafe = frame >= 758;

  // -------------------------------------------------------------------------
  // Phase 2: Interior Discovery & Outward Projection (F821..F2773)
  // -------------------------------------------------------------------------
  const boundariesAreMarkers = frame >= 821 && frame < 5828;
  const isInteriorDiscoveryActive = frame >= 941 && frame < 2717;

  // Active scan cursors during discovery
  const isScanningRow1 = frame >= 998 && frame < 1207;
  const isScanningRow2 = frame >= 1207 && frame < 1646;
  const row2NaturallyMarked = frame >= 1350 && frame < 1646;

  const isScanningRow3 = frame >= 1646 && frame < 2537;
  const isInteriorZeroFound = frame >= 1735 && frame < 2411; // (3,3) = 0
  const showRowMarkerWriteRay = frame >= 1954 && frame < 2411; // Ray to (3,0)
  const showColMarkerWriteRay = frame >= 2142 && frame < 2411; // Ray to (0,3)
  const writeM30Complete = frame >= 1954; // matrix[3][0] = 0
  const writeM03Complete = frame >= 2142; // matrix[0][3] = 0

  const isScanningRow4 = frame >= 2537 && frame < 2717;
  const isMarkerMatrixLocked = frame >= 2717;

  // -------------------------------------------------------------------------
  // Phase 3: Boundary Memory Reading (F2773..F3820)
  // -------------------------------------------------------------------------
  const isReadingBoundaries = frame >= 2773 && frame < 3820;
  const activeBoundaryRead = useMemo(() => {
    if (!isReadingBoundaries) return null;
    if (frame < 3002) return { type: "col", idx: 1, val: 6, action: "KEEP" };
    if (frame < 3115) return { type: "col", idx: 2, val: 0, action: "ZERO ROW" };
    if (frame < 3247) return { type: "col", idx: 3, val: 0, action: "ZERO ROW" };
    if (frame < 3382) return { type: "col", idx: 4, val: 21, action: "KEEP" };
    if (frame < 3532) return { type: "row", idx: 1, val: 2, action: "KEEP" };
    if (frame < 3635) return { type: "row", idx: 2, val: 0, action: "ZERO COL" };
    if (frame < 3741) return { type: "row", idx: 3, val: 0, action: "ZERO COL" };
    return { type: "row", idx: 4, val: 5, action: "KEEP" };
  }, [isReadingBoundaries, frame]);

  // -------------------------------------------------------------------------
  // Phase 4: Interior Inward Application Pass (F3820..F5828)
  // -------------------------------------------------------------------------
  const isInteriorAppActive = frame >= 3820 && frame < 5661;
  const appCellFocus = useMemo(() => {
    if (!isInteriorAppActive) return null;
    if (frame < 3966) return { r: 1, c: -1 };
    if (frame < 4229) return { r: 1, c: 1, stays: true };
    if (frame < 4398) return { r: 1, c: 2, stays: false };
    if (frame < 4787) return { r: 1, c: 3, stays: false };
    if (frame < 4923) return { r: 2, c: "all", stays: false };
    if (frame < 5098) return { r: 3, c: "all", stays: false };
    if (frame < 5214) return { r: 4, c: -1 };
    if (frame < 5313) return { r: 4, c: 1, stays: true };
    if (frame < 5439) return { r: 4, c: 2, stays: false };
    if (frame < 5554) return { r: 4, c: 3, stays: false };
    return { r: 4, c: 4, stays: true };
  }, [isInteriorAppActive, frame]);

  // Intermediate cell mutation points
  const row1C2Zeroed = frame >= 4229; // (1,2) becomes 0
  const row1C3Zeroed = frame >= 4398; // (1,3) becomes 0
  const row2AllZeroed = frame >= 4787; // Row 2 interior all 0
  const row3AllZeroed = frame >= 4923; // Row 3 interior all 0
  const row4C2Zeroed = frame >= 5313; // (4,2) becomes 0
  const row4C3Zeroed = frame >= 5439; // (4,3) becomes 0

  // -------------------------------------------------------------------------
  // Phase 5: Boundary Finalization & Verification (F5828..F7061)
  // -------------------------------------------------------------------------
  const finalizeRow0Active = frame >= 5993; // Row 0 all 0
  const finalizeCol0Active = frame >= 6200; // Col 0 all 0
  const isFinalMatrixVerified = frame >= 6352;
  const isCelebrationBanner = frame >= 6977;

  // -------------------------------------------------------------------------
  // Deterministic 5x5 Matrix Cell Values (State Machine)
  // -------------------------------------------------------------------------
  const currentMatrix = useMemo(() => {
    const mat = ORIGINAL_MATRIX.map((r) => [...r]);

    // Outward projection marker writes
    if (writeM30Complete) mat[3][0] = 0;
    if (writeM03Complete) mat[0][3] = 0;

    // Interior updates
    if (row1C2Zeroed) mat[1][2] = 0;
    if (row1C3Zeroed) mat[1][3] = 0;

    if (row2AllZeroed) {
      for (let c = 1; c < 5; c++) mat[2][c] = 0;
    }
    if (row3AllZeroed) {
      for (let c = 1; c < 5; c++) mat[3][c] = 0;
    }

    if (row4C2Zeroed) mat[4][2] = 0;
    if (row4C3Zeroed) mat[4][3] = 0;

    // Boundary finalization
    if (finalizeRow0Active) {
      for (let c = 0; c < 5; c++) mat[0][c] = 0;
    }
    if (finalizeCol0Active) {
      for (let r = 0; r < 5; r++) mat[r][0] = 0;
    }

    return mat;
  }, [
    writeM30Complete,
    writeM03Complete,
    row1C2Zeroed,
    row1C3Zeroed,
    row2AllZeroed,
    row3AllZeroed,
    row4C2Zeroed,
    row4C3Zeroed,
    finalizeRow0Active,
    finalizeCol0Active,
  ]);

  // -------------------------------------------------------------------------
  // Spring Animations for Key Visual Components
  // -------------------------------------------------------------------------
  const matrixEntrance = spring({
    frame,
    fps,
    config: { damping: 14, stiffness: 100 },
  });

  const frBadgeSpring = spring({
    frame: frame - 311,
    fps,
    config: { damping: 12, stiffness: 120 },
  });

  const fcBadgeSpring = spring({
    frame: frame - 689,
    fps,
    config: { damping: 12, stiffness: 120 },
  });

  const bannerSpring = spring({
    frame: frame - 6977,
    fps,
    config: { damping: 12, stiffness: 100 },
  });

  // Callout Banner Text
  const calloutText = useMemo(() => {
    if (frame < 72) return "ORIGINAL MASTER MATRIX · 3 ORIGINAL ZEROS AT (0,2), (2,0), (3,3)";
    if (frame < 311) return "PHASE 1: INSPECTING FIRST ROW FOR ORIGINAL ZEROS...";
    if (frame < 440) return "ROW 0 HAS ZERO AT (0,2) → firstRowZero = true (HISTORY PROTECTED)";
    if (frame < 689) return "PHASE 1: INSPECTING FIRST COLUMN FOR ORIGINAL ZEROS...";
    if (frame < 821) return "COL 0 HAS ZERO AT (2,0) → firstColZero = true (BOTH HISTORIES PROTECTED)";
    if (frame < 941) return "PHASE 2: BOUNDARIES ARE NOW REPURPOSED AS DEDICATED MARKER MEMORY";
    if (frame < 1207) return "SCANNING INTERIOR ROW 1: [7, 8, 9, 10] → NO ZEROS, NO WRITES";
    if (frame < 1646) return "SCANNING INTERIOR ROW 2: [12, 13, 14, 15] → NATURALLY MARKED BY matrix[2][0]=0";
    if (frame < 1735) return "SCANNING INTERIOR ROW 3: CHECKING CELLS (3,1)=17, (3,2)=18...";
    if (frame < 1954) return "🚨 CRITICAL INTERIOR ZERO DISCOVERED AT (3,3)! SENDING INFO OUTWARD...";
    if (frame < 2142) return "MARKING ROW: matrix[3][0] CHANGES FROM 16 → 0 (ROW MARKER)";
    if (frame < 2360) return "MARKING COLUMN: matrix[0][3] CHANGES FROM 4 → 0 (COLUMN MARKER)";
    if (frame < 2537) return "ZERO AT (3,3) SAFELY PROJECTED TO BOUNDARIES (3,0) & (0,3)";
    if (frame < 2717) return "SCANNING INTERIOR ROW 4: [22, 23, 24, 25] → NO ZEROS, DISCOVERY COMPLETE";
    if (frame < 2773) return "DISCOVERY PASS COMPLETE · INTERMEDIATE MARKER MATRIX LOCKED";
    if (frame < 3820) return "PHASE 3: READING BOUNDARY CELLS AS ROW & COLUMN ZERO REGISTERS";
    if (frame < 3966) return "PHASE 4: INWARD APPLICATION PASS BEGINS (DIRECTION REVERSES)";
    if (frame < 4398) return "ROW 1 APPLICATION: (1,1) STAYS 7, (1,2) BECOMES 0, (1,3) BECOMES 0, (1,4) STAYS 10";
    if (frame < 4923) return "ROW 2 APPLICATION: ROW MARKER IS 0 → ENTIRE INTERIOR ROW BECOMES 0";
    if (frame < 5098) return "ROW 3 APPLICATION: ROW MARKER IS 0 → ENTIRE INTERIOR ROW BECOMES 0";
    if (frame < 5661) return "ROW 4 APPLICATION: (4,1)=22 STAYS, (4,2)=0, (4,3)=0, (4,4)=25 STAYS";
    if (frame < 5828) return "INTERIOR APPLICATION FINISHED · BOUNDARIES HAVE COMPLETED MARKER JOB";
    if (frame < 5993) return "PHASE 5: RECALLING firstRowZero = true → FINALIZING FIRST ROW";
    if (frame < 6200) return "firstRowZero = true → COMPLETE FIRST ROW BECOMES 0";
    if (frame < 6352) return "firstColZero = true → COMPLETE FIRST COLUMN BECOMES 0";
    if (frame < 6977) return "FINAL MASTER MATRIX VERIFIED ROW-BY-ROW AGAINST GROUND TRUTH";
    return "✨ OPTIMAL SOLUTION VERIFIED: CORRECT RESULT WITH O(1) EXTRA SPACE!";
  }, [frame]);

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

      {/* Synchronized Audio */}
      <Audio src={staticFile("audio/013/10-optimal-trace.mp3")} />

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
            METHOD 3: OPTIMAL TRACE
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
          OPTIMAL TRACE: MATRIX AS OWN MEMORY
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
      {/* DOCKED BOUNDARY ROLE TAGS (Top: Col Markers, Left: Row Markers)      */}
      {/* ------------------------------------------------------------------- */}
      {boundariesAreMarkers && (
        <>
          {/* Column Markers Role Tag (Top) */}
          <div
            style={{
              position: "absolute",
              left: MATRIX_ORIGIN_X + PITCH,
              top: MATRIX_ORIGIN_Y - 48,
              width: 4 * PITCH - GAP,
              height: 38,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "rgba(10, 36, 25, 0.95)",
              border: `2px solid ${theme.pivot}`,
              borderRadius: 10,
              color: theme.pivot,
              fontFamily: fonts.mono,
              fontSize: 13,
              fontWeight: 900,
              letterSpacing: "0.06em",
              zIndex: 30,
              gap: 8,
            }}
          >
            <span>COLUMN MARKERS</span>
            <span style={{ fontSize: 11, color: theme.chalkDim }}>Row 0 (N cells)</span>
          </div>

          {/* Row Markers Role Tag (Left) */}
          <div
            style={{
              position: "absolute",
              left: MATRIX_ORIGIN_X - 150,
              top: MATRIX_ORIGIN_Y + MATRIX_DIM / 2 - 24,
              padding: "8px 14px",
              borderRadius: 10,
              backgroundColor: "rgba(10, 36, 25, 0.95)",
              border: `2px solid ${theme.cyan}`,
              fontFamily: fonts.mono,
              fontSize: 13,
              fontWeight: 900,
              color: theme.cyan,
              letterSpacing: "0.06em",
              zIndex: 30,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 2,
            }}
          >
            <span>ROW MARKERS</span>
            <span style={{ fontSize: 11, color: theme.chalkDim }}>Col 0 (M cells)</span>
          </div>
        </>
      )}

      {/* ------------------------------------------------------------------- */}
      {/* CENTER STAGE: 5x5 MASTER MATRIX                                     */}
      {/* Coordinates: X: 750..1170, Y: 270..690                              */}
      {/* ------------------------------------------------------------------- */}
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
          opacity: matrixEntrance,
          transform: `scale(${interpolate(matrixEntrance, [0, 1], [0.96, 1])})`,
        }}
      >
        {currentMatrix.map((row, r) =>
          row.map((val, c) => {
            const isCol0 = c === 0;
            const isRow0 = r === 0;
            const isBoundary = isCol0 || isRow0;
            const isInterior = !isBoundary;

            // Phase 1 highlights
            const isScanningInRow0 = isRow0ScanActive && isRow0 && c === row0ScanCol;
            const isScanningInCol0 = isCol0ScanActive && isCol0 && r === col0ScanRow;

            // Phase 2 highlights
            const isInteriorZeroPivot = isInteriorZeroFound && r === 3 && c === 3;
            const isRowScanActive =
              (isScanningRow1 && r === 1) ||
              (isScanningRow2 && r === 2) ||
              (isScanningRow3 && r === 3) ||
              (isScanningRow4 && r === 4);

            // Phase 3 boundary reading
            const isBoundaryReadTarget =
              activeBoundaryRead &&
              ((activeBoundaryRead.type === "col" && isCol0 && r === activeBoundaryRead.idx) ||
                (activeBoundaryRead.type === "row" && isRow0 && c === activeBoundaryRead.idx));

            // Phase 4 interior application focus
            const isAppFocusCell =
              appCellFocus &&
              r === appCellFocus.r &&
              (appCellFocus.c === "all" ? isInterior : c === appCellFocus.c);

            // Styling colors
            let strokeColor = "rgba(248, 246, 240, 0.35)";
            let strokeWidth = 1.8;
            let fillColor: string | undefined = undefined;

            if (isInteriorZeroPivot) {
              strokeColor = theme.accent;
              strokeWidth = 3.5;
              fillColor = "rgba(255, 107, 107, 0.28)";
            } else if (isScanningInRow0 || isScanningInCol0) {
              strokeColor = theme.pivot;
              strokeWidth = 3;
              fillColor = "rgba(255, 209, 102, 0.3)";
            } else if (isBoundaryReadTarget) {
              strokeColor = activeBoundaryRead?.action.includes("ZERO")
                ? theme.accent
                : theme.good;
              strokeWidth = 3;
              fillColor = activeBoundaryRead?.action.includes("ZERO")
                ? "rgba(255, 107, 107, 0.25)"
                : "rgba(6, 214, 160, 0.2)";
            } else if (isAppFocusCell) {
              strokeColor = appCellFocus?.stays ? theme.good : theme.cyan;
              strokeWidth = 3;
              fillColor = appCellFocus?.stays
                ? "rgba(6, 214, 160, 0.22)"
                : "rgba(76, 201, 240, 0.22)";
            } else if (row2NaturallyMarked && isCol0 && r === 2) {
              strokeColor = theme.cyan;
              strokeWidth = 3;
              fillColor = "rgba(76, 201, 240, 0.28)";
            } else if (boundariesAreMarkers && isBoundary) {
              if (isCol0 && isRow0) {
                strokeColor = theme.accent;
                strokeWidth = 2.4;
                fillColor = "rgba(255, 107, 107, 0.16)";
              } else if (isCol0) {
                strokeColor = theme.cyan;
                strokeWidth = 2.2;
                fillColor = "rgba(76, 201, 240, 0.14)";
              } else {
                strokeColor = theme.pivot;
                strokeWidth = 2.2;
                fillColor = "rgba(255, 209, 102, 0.14)";
              }
            } else if (finalizeRow0Active && isRow0) {
              strokeColor = theme.good;
              strokeWidth = 2.5;
              fillColor = "rgba(6, 214, 160, 0.2)";
            } else if (finalizeCol0Active && isCol0) {
              strokeColor = theme.good;
              strokeWidth = 2.5;
              fillColor = "rgba(6, 214, 160, 0.2)";
            } else if (isFinalMatrixVerified) {
              strokeColor = val === 0 ? theme.good : "rgba(248, 246, 240, 0.5)";
              strokeWidth = val === 0 ? 2.4 : 1.8;
              fillColor = val === 0 ? "rgba(6, 214, 160, 0.15)" : undefined;
            } else if (isInteriorDiscoveryActive && isInterior && isRowScanActive) {
              strokeColor = "rgba(248, 246, 240, 0.65)";
            }

            return (
              <div
                key={`cell-${r}-${c}`}
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
                    fill={fillColor}
                    roughness={1}
                    seed={500 + r * 5 + c}
                  />
                </div>

                {/* Index label in corner */}
                <div
                  style={{
                    position: "absolute",
                    top: 4,
                    left: 6,
                    fontFamily: fonts.mono,
                    fontSize: 9,
                    color: "rgba(248, 246, 240, 0.4)",
                    zIndex: 2,
                  }}
                >
                  {r},{c}
                </div>

                {/* Cell Integer Value */}
                <span
                  style={{
                    position: "relative",
                    zIndex: 2,
                    fontFamily: fonts.mono,
                    fontSize: val >= 10 ? 21 : 24,
                    fontWeight: 900,
                    color:
                      val === 0
                        ? theme.good
                        : isBoundary
                        ? theme.chalkText
                        : "rgba(248, 246, 240, 0.9)",
                    textShadow:
                      val === 0 ? `0 0 10px rgba(6, 214, 160, 0.6)` : undefined,
                  }}
                >
                  {val}
                </span>

                {/* Temporary strike-through for modified values */}
                {((frame >= 1954 && frame < 2411 && r === 3 && c === 0) ||
                  (frame >= 2142 && frame < 2411 && r === 0 && c === 3) ||
                  (frame >= 4229 && frame < 4350 && r === 1 && c === 2) ||
                  (frame >= 4398 && frame < 4550 && r === 1 && c === 3) ||
                  (frame >= 5313 && frame < 5450 && r === 4 && c === 2) ||
                  (frame >= 5439 && frame < 5580 && r === 4 && c === 3)) && (
                  <div
                    style={{
                      position: "absolute",
                      width: "70%",
                      height: 2,
                      backgroundColor: theme.accent,
                      opacity: 0.8,
                      transform: "rotate(-25deg)",
                      zIndex: 3,
                    }}
                  />
                )}
              </div>
            );
          })
        )}
      </div>

      {/* ------------------------------------------------------------------- */}
      {/* SVG OVERLAY: Projection Rays, Scan Beams, Radar Ripples             */}
      {/* ------------------------------------------------------------------- */}
      <svg
        style={{
          position: "absolute",
          inset: 0,
          width: 1920,
          height: 1080,
          pointerEvents: "none",
          zIndex: 25,
        }}
      >
        {/* Radar Ripple at (3,3) when Interior Zero Found */}
        {isInteriorZeroFound && (
          <g>
            <circle
              cx={getCellCenter(3, 3).x}
              cy={getCellCenter(3, 3).y}
              r={CELL_SIZE * 0.7 + ((frame * 2) % 30)}
              fill="none"
              stroke={theme.accent}
              strokeWidth={2}
              opacity={interpolate((frame * 2) % 30, [0, 30], [0.8, 0])}
            />
          </g>
        )}

        {/* Row Projection Ray: (3,3) -> (3,0) */}
        {showRowMarkerWriteRay && (
          <g>
            <line
              x1={getCellCenter(3, 3).x - CELL_SIZE / 2}
              y1={getCellCenter(3, 3).y}
              x2={getCellCenter(3, 0).x + CELL_SIZE / 2}
              y2={getCellCenter(3, 0).y}
              stroke={theme.cyan}
              strokeWidth={3}
              strokeDasharray="6 4"
            />
            {/* Arrowhead pointing left */}
            <polygon
              points={`
                ${getCellCenter(3, 0).x + CELL_SIZE / 2 + 10},${getCellCenter(3, 0).y - 6}
                ${getCellCenter(3, 0).x + CELL_SIZE / 2},${getCellCenter(3, 0).y}
                ${getCellCenter(3, 0).x + CELL_SIZE / 2 + 10},${getCellCenter(3, 0).y + 6}
              `}
              fill={theme.cyan}
            />
          </g>
        )}

        {/* Column Projection Ray: (3,3) -> (0,3) */}
        {showColMarkerWriteRay && (
          <g>
            <line
              x1={getCellCenter(3, 3).x}
              y1={getCellCenter(3, 3).y - CELL_SIZE / 2}
              x2={getCellCenter(0, 3).x}
              y2={getCellCenter(0, 3).y + CELL_SIZE / 2}
              stroke={theme.pivot}
              strokeWidth={3}
              strokeDasharray="6 4"
            />
            {/* Arrowhead pointing up */}
            <polygon
              points={`
                ${getCellCenter(0, 3).x - 6},${getCellCenter(0, 3).y + CELL_SIZE / 2 + 10}
                ${getCellCenter(0, 3).x},${getCellCenter(0, 3).y + CELL_SIZE / 2}
                ${getCellCenter(0, 3).x + 6},${getCellCenter(0, 3).y + CELL_SIZE / 2 + 10}
              `}
              fill={theme.pivot}
            />
          </g>
        )}

        {/* Interior Inward Application Query Rays */}
        {isInteriorAppActive &&
          appCellFocus &&
          typeof appCellFocus.c === "number" &&
          appCellFocus.c > 0 && (
            <g>
              {/* Query ray from left row marker */}
              <line
                x1={getCellCenter(appCellFocus.r, 0).x + CELL_SIZE / 2}
                y1={getCellCenter(appCellFocus.r, 0).y}
                x2={getCellCenter(appCellFocus.r, appCellFocus.c).x - CELL_SIZE / 2}
                y2={getCellCenter(appCellFocus.r, appCellFocus.c).y}
                stroke={theme.cyan}
                strokeWidth={2}
                strokeDasharray="4 4"
              />
              {/* Query ray from top col marker */}
              <line
                x1={getCellCenter(0, appCellFocus.c).x}
                y1={getCellCenter(0, appCellFocus.c).y + CELL_SIZE / 2}
                x2={getCellCenter(appCellFocus.r, appCellFocus.c).x}
                y2={getCellCenter(appCellFocus.r, appCellFocus.c).y - CELL_SIZE / 2}
                stroke={theme.pivot}
                strokeWidth={2}
                strokeDasharray="4 4"
              />
            </g>
          )}
      </svg>

      {/* ------------------------------------------------------------------- */}
      {/* RIGHT SIDE: SAVED BOUNDARY HISTORY FLAGS                            */}
      {/* Coordinates: X: 1240..1520, Y: 300..480                             */}
      {/* ------------------------------------------------------------------- */}
      <div
        style={{
          position: "absolute",
          left: 1240,
          top: 300,
          display: "flex",
          flexDirection: "column",
          gap: 16,
          zIndex: 30,
        }}
      >
        {/* firstRowZero Card */}
        {firstRowZeroActive && (
          <div
            style={{
              width: 270,
              padding: "14px 18px",
              borderRadius: 12,
              backgroundColor: "rgba(25, 82, 60, 0.85)",
              border: `2px solid ${theme.good}`,
              boxShadow: `0 0 16px rgba(6, 214, 160, 0.25)`,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              opacity: frBadgeSpring,
              transform: `translateX(${interpolate(frBadgeSpring, [0, 1], [30, 0])}px)`,
            }}
          >
            <div>
              <div
                style={{
                  fontFamily: fonts.mono,
                  fontSize: 12,
                  color: theme.chalkDim,
                  letterSpacing: "0.05em",
                }}
              >
                SAVED BOUNDARY FLAG 1
              </div>
              <div
                style={{
                  fontFamily: fonts.mono,
                  fontSize: 18,
                  fontWeight: 900,
                  color: theme.chalkText,
                }}
              >
                firstRowZero
              </div>
            </div>
            <div
              style={{
                padding: "4px 12px",
                borderRadius: 8,
                backgroundColor: "rgba(6, 214, 160, 0.2)",
                border: `1.5px solid ${theme.good}`,
                color: theme.good,
                fontFamily: fonts.mono,
                fontSize: 16,
                fontWeight: 900,
              }}
            >
              TRUE
            </div>
          </div>
        )}

        {/* firstColZero Card */}
        {firstColZeroActive && (
          <div
            style={{
              width: 270,
              padding: "14px 18px",
              borderRadius: 12,
              backgroundColor: "rgba(25, 82, 60, 0.85)",
              border: `2px solid ${theme.good}`,
              boxShadow: `0 0 16px rgba(6, 214, 160, 0.25)`,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              opacity: fcBadgeSpring,
              transform: `translateX(${interpolate(fcBadgeSpring, [0, 1], [30, 0])}px)`,
            }}
          >
            <div>
              <div
                style={{
                  fontFamily: fonts.mono,
                  fontSize: 12,
                  color: theme.chalkDim,
                  letterSpacing: "0.05em",
                }}
              >
                SAVED BOUNDARY FLAG 2
              </div>
              <div
                style={{
                  fontFamily: fonts.mono,
                  fontSize: 18,
                  fontWeight: 900,
                  color: theme.chalkText,
                }}
              >
                firstColZero
              </div>
            </div>
            <div
              style={{
                padding: "4px 12px",
                borderRadius: 8,
                backgroundColor: "rgba(6, 214, 160, 0.2)",
                border: `1.5px solid ${theme.good}`,
                color: theme.good,
                fontFamily: fonts.mono,
                fontSize: 16,
                fontWeight: 900,
              }}
            >
              TRUE
            </div>
          </div>
        )}

        {/* Both Protected Confirmation Badge */}
        {bothFlagsSafe && !isFinalMatrixVerified && (
          <div
            style={{
              width: 270,
              padding: "10px 14px",
              borderRadius: 8,
              backgroundColor: "rgba(6, 214, 160, 0.12)",
              border: `1px dashed ${theme.good}`,
              color: theme.good,
              fontFamily: fonts.mono,
              fontSize: 12,
              fontWeight: 800,
              letterSpacing: "0.04em",
              textAlign: "center",
            }}
          >
            🛡️ BOUNDARY HISTORIES SECURE
          </div>
        )}
      </div>

      {/* ------------------------------------------------------------------- */}
      {/* BOTTOM CALLOUT ZONE: Operation Status & Direction                   */}
      {/* Coordinates: X: 480..1440, Y: 760..848                              */}
      {/* Clearance: > 110px above captions at Y: 960                         */}
      {/* ------------------------------------------------------------------- */}
      {!isCelebrationBanner && (
        <div
          style={{
            position: "absolute",
            left: 480,
            top: 760,
            width: 960,
            height: 88,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "0 24px",
            backgroundColor: "rgba(25, 82, 60, 0.9)",
            border: `1.5px solid rgba(248, 246, 240, 0.35)`,
            borderRadius: 12,
            boxShadow: "0 8px 24px rgba(0, 0, 0, 0.25)",
            zIndex: 35,
          }}
        >
          <div
            style={{
              fontFamily: fonts.mono,
              fontSize: 17,
              fontWeight: 800,
              color: theme.chalkText,
              letterSpacing: "0.04em",
              textAlign: "center",
              lineHeight: 1.4,
            }}
          >
            {calloutText}
          </div>
        </div>
      )}

      {/* ------------------------------------------------------------------- */}
      {/* CELEBRATION TRIUMPH BANNER (F6977..F7061)                           */}
      {/* ------------------------------------------------------------------- */}
      {isCelebrationBanner && (
        <div
          style={{
            position: "absolute",
            left: 440,
            top: 730,
            width: 1040,
            height: 120,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "rgba(10, 45, 30, 0.95)",
            border: `2.5px solid ${theme.good}`,
            borderRadius: 16,
            boxShadow: `0 0 30px rgba(6, 214, 160, 0.4)`,
            zIndex: 50,
            opacity: bannerSpring,
            transform: `scale(${interpolate(bannerSpring, [0, 1], [0.9, 1])})`,
          }}
        >
          <div
            style={{
              fontFamily: fonts.display,
              fontSize: 26,
              fontWeight: 900,
              color: theme.good,
              letterSpacing: "0.06em",
            }}
          >
            ✨ VERIFIED: CORRECT RESULT WITH O(1) EXTRA SPACE!
          </div>
          <div
            style={{
              fontFamily: fonts.mono,
              fontSize: 15,
              color: theme.chalkDim,
              marginTop: 6,
              letterSpacing: "0.04em",
            }}
          >
            IN-PLACE BOUNDARY MARKERS + 2 SAVED BOOLEANS = CONSTANT AUXILIARY MEMORY
          </div>
        </div>
      )}

      {/* ------------------------------------------------------------------- */}
      {/* CAPTIONS: Synchronized at Y: 960                                    */}
      {/* ------------------------------------------------------------------- */}
      <Captions words={captionWords} />
    </div>
  );
};
