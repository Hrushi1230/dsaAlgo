/**
 * Scene02Understand.tsx — Scene 02 · Understand the Rotation + Derive Coordinate Mapping
 * Rotate Image (LeetCode 48) · Pattern 01 — Arrays & Hashing
 *
 * Strict Pedagogical Anti-Spoiler Contract:
 * - NO PREMATURE REVEALS: Every piece of information appears strictly when spoken.
 * - F0..F121 (Beat 01): Only "Given an n × n square matrix". Empty 5×5 wireframe shell. Right panel dormant.
 * - F122..F245 (Beat 02): Master 5×5 values 1..25 fade in. Left panel reveals N = 5.
 * - F246..F376 (Beat 03): Coordinate rulers draw on grid. Right panel reveals 0-based coordinate system.
 * - F377..F457 (Beat 04): 4 corners illuminate in grid. Corner cards show start positions only (destinations pending!).
 * - F458..F601 (Beat 05): Corner 1 (0, 0) pulses. Destination pending.
 * - F602..F781 (Beat 06): Corner 1 destination (0, 4) spoken! Arc reveals, 1 flies and lands. Corner 1 marked arrived.
 * - F782..F1081 (Beat 07): Corner 2 (0, 4) pulses, destination (4, 4) spoken! 5 flies and lands.
 * - F1082..F1204 (Beat 08a): Corner 3 (4, 4) destination (4, 0) spoken! 25 flies and lands.
 * - F1205..F1359 (Beat 08b): Corner 4 (4, 0) destination (0, 0) spoken! 21 flies and lands.
 * - F1360..F1477 (Beat 09): Closed 4-element cycle badge appears (1 -> 5 -> 25 -> 21 -> 1).
 * - F1478..F1692 (Beat 10): Interior cells restored. Need general rule for all cells.
 * - F1693..F1818 (Beat 11): Arbitrary point (r, c) isolated.
 * - F1819..F2046 (Beat 12): newRow = c derived!
 * - F2047..F2182 (Beat 13): newCol = n - 1 - r derived!
 * - F2183..F2451 (Beat 14): Universal law (r, c) -> (c, n - 1 - r) revealed!
 * - F2452..F2790 (Beat 15): Specialized for N = 5: (r, c) -> (c, 4 - r) revealed!
 * - F2791..F2992 (Beat 16): Interior test: cell 8 at (1, 2) in focus.
 * - F2993..F3325 (Beat 17): Math evaluation newRow=2, newCol=3 -> (2, 3). 8 flies and lands.
 * - F3326..F3336 (Beat 18): Checkmark pops: "Good."
 * - F3337..F3496 (Beat 19): Center test: cell 13 at (2, 2) in focus.
 * - F3497..F3686 (Beat 20): Math evaluation newRow=2, newCol=2 -> (2, 2).
 * - F3687..F3761 (Beat 21): 360° spin glyph spins inside cell (2, 2). FIXED POINT badge.
 * - F3762..F3953 (Beat 22): Invariant theorem for odd N×N matrices revealed!
 * - F3954..F4078 (Beat 23): Complete destination truth overlay across all 25 cells.
 * - F4079..F4243 (Beat 24): Overwrite dilemma & danger alert at (0, 4).
 * - F4244..F4333 (Beat 25): Side slates fade out, source grid eases to X: 250, ghost destination matrix emerges at X: 1318.
 *
 * Total Duration: 4,333 frames @ 30fps (144.420s) strictly from sync/02-understand.json
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
import { theme, fonts } from "../../../../kit/lib/theme";
import { EASE } from "../../../../kit/lib/anim";
import { ChalkDust } from "../../../../kit/components/ChalkDust";
import { Captions, CaptionWord } from "../../../../kit/components/Captions";
import { RoughBox } from "../../../../kit/components/RoughBox";
import { BezierFlight } from "../../../../kit/components/BezierFlight";
import syncData from "../sync/02-understand.json";

// ---------------------------------------------------------------------------
// Word-level Caption Timings (from sync/02-understand.json)
// ---------------------------------------------------------------------------
const captionWords: CaptionWord[] = (syncData.words || []).map((w: any) => {
  let word = w.word;
  if (word.toLowerCase() === "zeros.") word = "zeroes.";
  if (word.toLowerCase() === "zeros,") word = "zeroes,";
  if (word.toLowerCase() === "zeros") word = "zeroes";
  return {
    word,
    start: w.start_ms / 1000,
    end: w.end_ms / 1000,
  };
});

// ---------------------------------------------------------------------------
// Canonical Grid Geometry & Master Testcase
// ---------------------------------------------------------------------------
const ROWS = 5;
const COLS = 5;
const CELL_SIZE = 76;
const CELL_GAP = 8;
const PITCH = CELL_SIZE + CELL_GAP; // 84px
const GRID_WIDTH = COLS * CELL_SIZE + (COLS - 1) * CELL_GAP; // 412px
const GRID_HEIGHT = ROWS * CELL_SIZE + (ROWS - 1) * CELL_GAP; // 412px
const BASE_GRID_LEFT = 754; // Centered between panels (Left: 64..674, Right: 1246..1856)
const BASE_GRID_TOP = 224;

const MASTER_MATRIX = [
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

export const Scene02Understand: React.FC = () => {
  const frame = useCurrentFrame();

  // =========================================================================
  // CAMERA / TRANSITION DYNAMICS
  // =========================================================================
  // Beat 25: Grid eases left to X: 250 to match Scene 03's LEFT_GRID_X
  const gridLeft = useMemo(() => {
    if (frame < 4244) return BASE_GRID_LEFT;
    return interpolate(frame, [4244, 4310], [BASE_GRID_LEFT, 250], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
      easing: EASE,
    });
  }, [frame]);

  // Both side panels fade out smoothly over F4244..F4268 to clear the stage for dual-matrix handoff
  const sidePanelsOpacity = useMemo(() => {
    if (frame < 4244) return 1;
    return interpolate(frame, [4244, 4268], [1, 0], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    });
  }, [frame]);

  // Entrance animations
  const gridScale = interpolate(frame, [0, 24], [0.96, 1.0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: EASE,
  });
  const gridOpacity = interpolate(frame, [0, 18], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: EASE,
  });

  // Cell values appear strictly in Beat 02 (F122..F160)
  const valuesOpacity = interpolate(frame, [122, 160], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: EASE,
  });

  // Coordinate rulers appear strictly in Beat 03 (F246..F280)
  const rulersOpacity = interpolate(frame, [246, 280], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: EASE,
  });

  // Right panel fades in during Beat 03 (F246..F280)
  const rightPanelEntranceOpacity = interpolate(frame, [246, 280], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: EASE,
  });

  // Center 13 self-rotation spin angle (Beat 21: F3687..F3740)
  const centerSpinAngle = interpolate(frame, [3687, 3740], [0, 360], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: EASE,
  });

  // Checkmark pop scale (Beat 18: F3326)
  const checkmarkScale = spring({
    frame: Math.max(0, frame - 3326),
    fps: 30,
    config: { damping: 12, stiffness: 200 },
  });

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

      {/* Audio VO */}
      <Audio src={staticFile("audio/014/02-understand.mp3")} />

      {/* =====================================================================
          TOP HEADER BAR (Branding & Continuity: Y: 28..82)
          ===================================================================== */}
      <div
        style={{
          position: "absolute",
          top: 30,
          left: 64,
          right: 64,
          height: 52,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          zIndex: 10,
        }}
      >
        {/* Left: Pattern Tag */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 10,
            padding: "5px 16px",
            borderRadius: 8,
            border: `1.5px solid ${theme.cardBorder}`,
            backgroundColor: "rgba(248, 246, 240, 0.05)",
            fontFamily: fonts.mono,
            fontSize: 18,
            fontWeight: 700,
            letterSpacing: "1.5px",
            color: theme.chalkText,
          }}
        >
          <span
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              backgroundColor: theme.good,
              boxShadow: `0 0 8px ${theme.good}`,
            }}
          />
          01 · ARRAYS & HASHING
        </div>

        {/* Center: Problem Title */}
        <div
          style={{
            fontFamily: fonts.display,
            fontSize: 42,
            fontWeight: 700,
            color: theme.chalkText,
            letterSpacing: "0.5px",
            textShadow: "0 0 16px rgba(248, 246, 240, 0.3)",
          }}
        >
          Rotate Image
        </div>

        {/* Right: LeetCode Number & Difficulty */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 12,
            fontFamily: fonts.mono,
          }}
        >
          <span
            style={{
              fontSize: 18,
              fontWeight: 700,
              color: theme.chalkDim,
              letterSpacing: "1px",
            }}
          >
            LEETCODE 48
          </span>
          <span
            style={{
              padding: "3px 12px",
              borderRadius: 6,
              backgroundColor: "rgba(255, 169, 77, 0.16)",
              border: `1.5px solid ${theme.better}`,
              color: theme.better,
              fontSize: 15,
              fontWeight: 800,
              letterSpacing: "1px",
            }}
          >
            MEDIUM
          </span>
        </div>
      </div>

      {/* =====================================================================
          CHALK DUST BURSTS ON KEY BEATS
          ===================================================================== */}
      {frame >= 745 && frame <= 775 && (
        <ChalkDust x={gridLeft + 4 * PITCH + CELL_SIZE / 2} y={BASE_GRID_TOP + CELL_SIZE / 2} start={745} color={theme.cyan} count={14} radius={40} />
      )}
      {frame >= 1035 && frame <= 1065 && (
        <ChalkDust x={gridLeft + 4 * PITCH + CELL_SIZE / 2} y={BASE_GRID_TOP + 4 * PITCH + CELL_SIZE / 2} start={1035} color={theme.pivot} count={14} radius={40} />
      )}
      {frame >= 1170 && frame <= 1200 && (
        <ChalkDust x={gridLeft + 0 * PITCH + CELL_SIZE / 2} y={BASE_GRID_TOP + 4 * PITCH + CELL_SIZE / 2} start={1170} color={theme.good} count={14} radius={40} />
      )}
      {frame >= 1310 && frame <= 1340 && (
        <ChalkDust x={gridLeft + 0 * PITCH + CELL_SIZE / 2} y={BASE_GRID_TOP + 0 * PITCH + CELL_SIZE / 2} start={1310} color={theme.purple} count={14} radius={40} />
      )}
      {frame >= 3260 && frame <= 3290 && (
        <ChalkDust x={gridLeft + 3 * PITCH + CELL_SIZE / 2} y={BASE_GRID_TOP + 2 * PITCH + CELL_SIZE / 2} start={3260} color={theme.pivot} count={16} radius={45} />
      )}
      {frame >= 3326 && frame <= 3356 && (
        <ChalkDust x={1540} y={480} start={3326} color={theme.good} count={18} radius={50} />
      )}

      {/* =====================================================================
          LEFT BLACKBOARD SLATE: RULES & PERMUTATION GEOMETRY (X: 64, Y: 154, W: 610, H: 590)
          ===================================================================== */}
      <div
        style={{
          position: "absolute",
          left: 64,
          top: 154,
          width: 610,
          height: 590,
          opacity: sidePanelsOpacity,
          zIndex: 8,
        }}
      >
        <RoughBox width={610} height={590} stroke={theme.cardBorder} strokeWidth={2} roughness={1.2} fill="rgba(248, 246, 240, 0.03)" seed={101} />

        <div style={{ position: "absolute", inset: 0, padding: "26px 30px" }}>
          {frame < 377 ? (
            /* PHASE 1: STRICT SPOILER-FREE PROBLEM DEFINITION */
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
                <span style={{ width: 9, height: 9, borderRadius: "50%", backgroundColor: theme.cyan, boxShadow: `0 0 8px ${theme.cyan}` }} />
                <span style={{ fontFamily: fonts.mono, fontSize: 18, fontWeight: 700, letterSpacing: "1.5px", color: theme.cyan, textTransform: "uppercase" }}>
                  Problem Statement
                </span>
              </div>
              <div style={{ fontFamily: fonts.hand, fontSize: 28, color: theme.chalkText, lineHeight: 1.45, marginBottom: 22 }}>
                We are given an <strong style={{ color: theme.pivot }}>n × n</strong> square matrix.
              </div>

              {/* Reveal 5x5 concrete testcase strictly in Beat 02 (F122+) */}
              {frame >= 122 && (
                <div
                  style={{
                    padding: "16px 20px",
                    borderRadius: 10,
                    backgroundColor: "rgba(92, 225, 230, 0.08)",
                    border: `1.5px solid ${theme.cyan}`,
                    marginBottom: 20,
                  }}
                >
                  <div style={{ fontFamily: fonts.mono, fontSize: 16, fontWeight: 700, color: theme.cyan, letterSpacing: "1px", marginBottom: 6 }}>
                    OUR WORKING EXAMPLE (N = 5)
                  </div>
                  <div style={{ fontFamily: fonts.hand, fontSize: 24, color: theme.chalkText, lineHeight: 1.4 }}>
                    For this lesson, we will use our <strong style={{ color: theme.pivot }}>5 by 5 matrix</strong> with 25 integer values.
                  </div>
                </div>
              )}

              {/* Reveal zero-based indexing note strictly in Beat 03 (F246+) */}
              {frame >= 246 && (
                <div
                  style={{
                    padding: "14px 18px",
                    borderRadius: 10,
                    backgroundColor: "rgba(255, 209, 102, 0.08)",
                    border: `1.5px solid ${theme.pivot}`,
                  }}
                >
                  <div style={{ fontFamily: fonts.mono, fontSize: 15, fontWeight: 700, color: theme.pivot, letterSpacing: "1px", marginBottom: 4 }}>
                    INDEXING CONVENTION
                  </div>
                  <div style={{ fontFamily: fonts.hand, fontSize: 22, color: theme.chalkText }}>
                    Zero-based row indices <strong style={{ color: theme.cyan }}>r ∈ [0..4]</strong> and column indices <strong style={{ color: theme.cyan }}>c ∈ [0..4]</strong>.
                  </div>
                </div>
              )}
            </div>
          ) : frame < 1478 ? (
            /* PHASE 2: 4-CORNER ROTATION CIRCUIT (STRICT ZERO-SPOILER: CORNERS REVEAL ONLY WHEN SPOKEN) */
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
                <span style={{ width: 9, height: 9, borderRadius: "50%", backgroundColor: theme.pivot, boxShadow: `0 0 8px ${theme.pivot}` }} />
                <span style={{ fontFamily: fonts.mono, fontSize: 18, fontWeight: 700, letterSpacing: "1.5px", color: theme.pivot, textTransform: "uppercase" }}>
                  4-Corner Rotation Circuit
                </span>
              </div>
              <div style={{ fontFamily: fonts.hand, fontSize: 22, color: theme.chalkDim, marginBottom: 18 }}>
                {frame < 458
                  ? "First, just watch the four corners."
                  : frame < 602
                  ? "Observing starting corner: Value 1 at (0, 0)."
                  : frame < 782
                  ? "Rotating Corner 1 clockwise by 90 degrees."
                  : frame < 940
                  ? "Observing next corner: Value 5 at (0, 4)."
                  : frame < 1082
                  ? "Rotating Corner 2 clockwise by 90 degrees."
                  : frame < 1205
                  ? "Rotating Corner 3 from bottom-right to bottom-left."
                  : frame < 1360
                  ? "Rotating Corner 4 from bottom-left back to top-left."
                  : "All four corners form one closed rotation cycle!"}
              </div>

              {/* 4 Corner Cards — ZERO premature reveals: each corner activates strictly when spoken */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginBottom: 20 }}>
                {/* Corner 1: (0,0)=1 — activates at F458 */}
                <div
                  style={{
                    padding: "12px 16px",
                    borderRadius: 10,
                    backgroundColor: frame >= 458 && frame < 782 ? "rgba(92, 225, 230, 0.16)" : "rgba(248, 246, 240, 0.04)",
                    border: `1.5px solid ${frame >= 458 && frame < 782 ? theme.cyan : "rgba(248, 246, 240, 0.15)"}`,
                    boxShadow: frame >= 458 && frame < 782 ? `0 0 16px ${theme.cyan}` : "none",
                  }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span style={{ fontFamily: fonts.mono, fontSize: 14, color: theme.cyan, fontWeight: 700 }}>TOP-LEFT</span>
                    <span style={{ fontFamily: fonts.mono, fontSize: 18, color: theme.cyan, fontWeight: 800 }}>
                      {frame >= 458 ? "val: 1" : "val: ?"}
                    </span>
                  </div>
                  <div style={{ fontFamily: fonts.hand, fontSize: 22, color: theme.chalkText, marginTop: 4 }}>
                    (0, 0) {frame >= 602 ? <>➔ <strong style={{ color: theme.cyan }}>(0, 4) {frame >= 745 ? "✓" : "..."}</strong></> : <span style={{ color: theme.chalkDim }}>{frame >= 458 ? "[Initial]" : "[Awaiting]"}</span>}
                  </div>
                </div>

                {/* Corner 2: (0,4)=5 — activates strictly at F782 */}
                <div
                  style={{
                    padding: "12px 16px",
                    borderRadius: 10,
                    backgroundColor: frame >= 782 && frame < 1082 ? "rgba(255, 209, 102, 0.16)" : "rgba(248, 246, 240, 0.04)",
                    border: `1.5px solid ${frame >= 782 && frame < 1082 ? theme.pivot : "rgba(248, 246, 240, 0.15)"}`,
                    boxShadow: frame >= 782 && frame < 1082 ? `0 0 16px ${theme.pivot}` : "none",
                  }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span style={{ fontFamily: fonts.mono, fontSize: 14, color: theme.pivot, fontWeight: 700 }}>TOP-RIGHT</span>
                    <span style={{ fontFamily: fonts.mono, fontSize: 18, color: theme.pivot, fontWeight: 800 }}>
                      {frame >= 782 ? "val: 5" : "val: ?"}
                    </span>
                  </div>
                  <div style={{ fontFamily: fonts.hand, fontSize: 22, color: theme.chalkText, marginTop: 4 }}>
                    (0, 4) {frame >= 940 ? <>➔ <strong style={{ color: theme.pivot }}>(4, 4) {frame >= 1035 ? "✓" : "..."}</strong></> : <span style={{ color: theme.chalkDim }}>{frame >= 782 ? "[Initial]" : "[Awaiting]"}</span>}
                  </div>
                </div>

                {/* Corner 3: (4,4)=25 — activates strictly at F1082 */}
                <div
                  style={{
                    padding: "12px 16px",
                    borderRadius: 10,
                    backgroundColor: frame >= 1082 && frame < 1205 ? "rgba(60, 229, 167, 0.16)" : "rgba(248, 246, 240, 0.04)",
                    border: `1.5px solid ${frame >= 1082 && frame < 1205 ? theme.good : "rgba(248, 246, 240, 0.15)"}`,
                    boxShadow: frame >= 1082 && frame < 1205 ? `0 0 16px ${theme.good}` : "none",
                  }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span style={{ fontFamily: fonts.mono, fontSize: 14, color: theme.good, fontWeight: 700 }}>BOTTOM-RIGHT</span>
                    <span style={{ fontFamily: fonts.mono, fontSize: 18, color: theme.good, fontWeight: 800 }}>
                      {frame >= 1082 ? "val: 25" : "val: ?"}
                    </span>
                  </div>
                  <div style={{ fontFamily: fonts.hand, fontSize: 22, color: theme.chalkText, marginTop: 4 }}>
                    (4, 4) {frame >= 1082 ? <>➔ <strong style={{ color: theme.good }}>(4, 0) {frame >= 1170 ? "✓" : "..."}</strong></> : <span style={{ color: theme.chalkDim }}>[Awaiting]</span>}
                  </div>
                </div>

                {/* Corner 4: (4,0)=21 — activates strictly at F1205 */}
                <div
                  style={{
                    padding: "12px 16px",
                    borderRadius: 10,
                    backgroundColor: frame >= 1205 && frame < 1360 ? "rgba(216, 180, 226, 0.16)" : "rgba(248, 246, 240, 0.04)",
                    border: `1.5px solid ${frame >= 1205 && frame < 1360 ? theme.purple : "rgba(248, 246, 240, 0.15)"}`,
                    boxShadow: frame >= 1205 && frame < 1360 ? `0 0 16px ${theme.purple}` : "none",
                  }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span style={{ fontFamily: fonts.mono, fontSize: 14, color: theme.purple, fontWeight: 700 }}>BOTTOM-LEFT</span>
                    <span style={{ fontFamily: fonts.mono, fontSize: 18, color: theme.purple, fontWeight: 800 }}>
                      {frame >= 1205 ? "val: 21" : "val: ?"}
                    </span>
                  </div>
                  <div style={{ fontFamily: fonts.hand, fontSize: 22, color: theme.chalkText, marginTop: 4 }}>
                    (4, 0) {frame >= 1205 ? <>➔ <strong style={{ color: theme.purple }}>(0, 0) {frame >= 1310 ? "✓" : "..."}</strong></> : <span style={{ color: theme.chalkDim }}>[Awaiting]</span>}
                  </div>
                </div>
              </div>

              {/* Progressive Loop Sequence — reveals step-by-step with ZERO spoilers */}
              <div
                style={{
                  padding: "14px 18px",
                  borderRadius: 10,
                  backgroundColor: frame >= 1360 ? "rgba(255, 209, 102, 0.14)" : "rgba(248, 246, 240, 0.03)",
                  border: `1.5px solid ${frame >= 1360 ? theme.pivot : "rgba(248, 246, 240, 0.1)"}`,
                  textAlign: "center",
                }}
              >
                {frame < 602 ? (
                  <div style={{ fontFamily: fonts.hand, fontSize: 20, color: theme.chalkDim }}>
                    Observing the 4 perimeter corners: (0, 0) · (0, 4) · (4, 4) · (4, 0)...
                  </div>
                ) : frame < 1360 ? (
                  <>
                    <div style={{ fontFamily: fonts.mono, fontSize: 14, color: theme.cyan, fontWeight: 700, letterSpacing: "1px", marginBottom: 4 }}>
                      ROTATION CHAIN IN PROGRESS
                    </div>
                    <div style={{ fontFamily: fonts.mono, fontSize: 22, color: theme.chalkText, fontWeight: 800 }}>
                      <span style={{ color: theme.cyan }}>1</span>
                      {frame >= 602 && (
                        <>
                          {" "}──▶ <span style={{ color: frame >= 745 ? theme.pivot : theme.chalkDim }}>5</span>
                        </>
                      )}
                      {frame >= 940 && (
                        <>
                          {" "}──▶ <span style={{ color: frame >= 1035 ? theme.good : theme.chalkDim }}>25</span>
                        </>
                      )}
                      {frame >= 1082 && (
                        <>
                          {" "}──▶ <span style={{ color: frame >= 1170 ? theme.purple : theme.chalkDim }}>21</span>
                        </>
                      )}
                      {frame >= 1205 && (
                        <>
                          {" "}──▶ <span style={{ color: frame >= 1310 ? theme.cyan : theme.chalkDim }}>1</span>
                        </>
                      )}
                    </div>
                  </>
                ) : (
                  <>
                    <div style={{ fontFamily: fonts.mono, fontSize: 15, color: theme.pivot, fontWeight: 800, letterSpacing: "1px", marginBottom: 4 }}>
                      ⭐️ CLOSED 4-ELEMENT CYCLE
                    </div>
                    <div style={{ fontFamily: fonts.mono, fontSize: 24, color: theme.pivot, fontWeight: 900 }}>
                      1 ──▶ 5 ──▶ 25 ──▶ 21 ──▶ 1
                    </div>
                  </>
                )}
              </div>
            </div>
          ) : frame < 2791 ? (
            /* PHASE 3: GEOMETRIC AXIS ROTATION INTUITION (ANTI-SPOILER: STEPS REVEAL AS SPOKEN) */
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
                <span style={{ width: 9, height: 9, borderRadius: "50%", backgroundColor: theme.good, boxShadow: `0 0 8px ${theme.good}` }} />
                <span style={{ fontFamily: fonts.mono, fontSize: 18, fontWeight: 700, letterSpacing: "1.5px", color: theme.good, textTransform: "uppercase" }}>
                  Geometric Axis Intuition
                </span>
              </div>
              <div style={{ fontFamily: fonts.hand, fontSize: 22, color: theme.chalkDim, marginBottom: 16 }}>
                {frame < 1693 ? "We need a rule that works for every cell in the matrix, not only the corners." :
                 frame < 1819 ? "Take any arbitrary value at row r and column c:" :
                 "Deriving the universal coordinate transformation:"}
              </div>

              {/* Law 1: Col -> Row appears at F1819, formula newRow = c snaps in at F1975 */}
              {frame >= 1819 && (
                <div
                  style={{
                    padding: "14px 18px",
                    borderRadius: 10,
                    backgroundColor: "rgba(92, 225, 230, 0.12)",
                    border: `1.5px solid ${theme.cyan}`,
                    marginBottom: 14,
                  }}
                >
                  <div style={{ fontFamily: fonts.mono, fontSize: 15, color: theme.cyan, fontWeight: 700, marginBottom: 4 }}>
                    1. HORIZONTAL COLUMN ➔ VERTICAL ROW
                  </div>
                  <div style={{ fontFamily: fonts.hand, fontSize: 22, color: theme.chalkText, lineHeight: 1.35 }}>
                    Original column offset <strong style={{ color: theme.cyan }}>c</strong> rotates clockwise into vertical row depth:
                    {frame >= 1975 ? (
                      <div style={{ fontFamily: fonts.mono, fontSize: 24, color: theme.cyan, fontWeight: 800, marginTop: 4 }}>
                        newRow = c
                      </div>
                    ) : (
                      <div style={{ fontFamily: fonts.mono, fontSize: 20, color: theme.chalkDim, marginTop: 4 }}>
                        newRow = old column...
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Law 2: Row -> Inverted Col appears at F2047, formula newCol = n - 1 - r snaps in at F2094 */}
              {frame >= 2047 && (
                <div
                  style={{
                    padding: "14px 18px",
                    borderRadius: 10,
                    backgroundColor: "rgba(255, 209, 102, 0.12)",
                    border: `1.5px solid ${theme.pivot}`,
                    marginBottom: 14,
                  }}
                >
                  <div style={{ fontFamily: fonts.mono, fontSize: 15, color: theme.pivot, fontWeight: 700, marginBottom: 4 }}>
                    2. VERTICAL ROW ➔ INVERTED COLUMN
                  </div>
                  <div style={{ fontFamily: fonts.hand, fontSize: 22, color: theme.chalkText, lineHeight: 1.35 }}>
                    Original row depth <strong style={{ color: theme.pivot }}>r</strong> flips to distance from right edge:
                    {frame >= 2094 ? (
                      <div style={{ fontFamily: fonts.mono, fontSize: 24, color: theme.pivot, fontWeight: 800, marginTop: 4 }}>
                        newCol = (n - 1) - r
                      </div>
                    ) : (
                      <div style={{ fontFamily: fonts.mono, fontSize: 20, color: theme.chalkDim, marginTop: 4 }}>
                        newCol = n minus 1 minus r...
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Concrete N = 5 formula appears strictly at Beat 15 (F2452+) with ZERO premature formula reveal */}
              {frame >= 2452 && (
                <div
                  style={{
                    padding: "12px 18px",
                    borderRadius: 10,
                    backgroundColor: "rgba(60, 229, 167, 0.12)",
                    border: `1.5px solid ${theme.good}`,
                    textAlign: "center",
                  }}
                >
                  <div style={{ fontFamily: fonts.mono, fontSize: 14, color: theme.good, fontWeight: 700, letterSpacing: "1px" }}>
                    FOR OUR 5 × 5 MATRIX (n = 5):
                  </div>
                  <div style={{ fontFamily: fonts.mono, fontSize: 24, color: theme.chalkText, fontWeight: 800, marginTop: 2 }}>
                    {frame < 2555
                      ? "n minus 1 is evaluating..."
                      : frame < 2661
                      ? "n - 1 = 5 - 1 = 4"
                      : frame < 2731
                      ? "(r, c) ──▶ (c, ...)"
                      : <>(r, c) ──▶ <span style={{ color: theme.good }}>(c, 4 - r)</span></>}
                  </div>
                </div>
              )}
            </div>
          ) : frame < 3337 ? (
            /* PHASE 4: TEST 1 · INTERIOR VERIFICATION (Value 8 at (1, 2) - ZERO PREMATURE REVEAL) */
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
                <span style={{ width: 9, height: 9, borderRadius: "50%", backgroundColor: theme.pivot, boxShadow: `0 0 8px ${theme.pivot}` }} />
                <span style={{ fontFamily: fonts.mono, fontSize: 18, fontWeight: 700, letterSpacing: "1.5px", color: theme.pivot, textTransform: "uppercase" }}>
                  Interior Cell Test
                </span>
              </div>
              <div style={{ fontFamily: fonts.hand, fontSize: 22, color: theme.chalkDim, marginBottom: 16 }}>
                Let's verify our formula on an interior non-boundary cell:
              </div>

              {/* Target card reveals strictly at F2888 when '8 is at row 1, column 2' is spoken */}
              <div style={{ padding: "16px 20px", borderRadius: 10, backgroundColor: "rgba(255, 209, 102, 0.1)", border: `1.5px solid ${theme.pivot}`, marginBottom: 16 }}>
                <div style={{ fontFamily: fonts.mono, fontSize: 15, color: theme.pivot, fontWeight: 700, marginBottom: 4 }}>
                  {frame >= 2888 ? "TEST TARGET: VALUE 8" : "SELECTING TEST CELL..."}
                </div>
                <div style={{ fontFamily: fonts.hand, fontSize: 24, color: theme.chalkText }}>
                  {frame >= 2888 ? (
                    <>Located at <strong style={{ color: theme.cyan }}>row 1, column 2</strong> ➔ <span style={{ fontFamily: fonts.mono, color: theme.pivot }}>(1, 2)</span></>
                  ) : (
                    <span style={{ color: theme.chalkDim }}>Listening for interior cell selection...</span>
                  )}
                </div>
              </div>
              <div style={{ fontFamily: fonts.hand, fontSize: 22, color: theme.chalkText, lineHeight: 1.45 }}>
                {frame < 2888 ? "Selecting an interior cell from the matrix..." :
                 frame < 2993 ? "Evaluating formula (r, c) ➔ (c, 4 - r)..." :
                 frame < 3326 ? "Applying coordinate substitution step-by-step..." :
                 "Exact destination match confirmed!"}
              </div>
            </div>
          ) : frame < 3954 ? (
            /* PHASE 5: TEST 2 · CENTER FIXED POINT ANALYSIS (Value 13 at (2, 2) - ZERO PREMATURE REVEAL) */
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
                <span style={{ width: 9, height: 9, borderRadius: "50%", backgroundColor: theme.pivot, boxShadow: `0 0 8px ${theme.pivot}` }} />
                <span style={{ fontFamily: fonts.mono, fontSize: 18, fontWeight: 700, letterSpacing: "1.5px", color: theme.pivot, textTransform: "uppercase" }}>
                  Center Invariant Test
                </span>
              </div>
              <div style={{ fontFamily: fonts.hand, fontSize: 22, color: theme.chalkDim, marginBottom: 16 }}>
                Now look at the exact center of our 5 × 5 matrix:
              </div>

              {/* Center card reveals strictly at F3390 when '13 is at row 2, column 2' is spoken */}
              <div style={{ padding: "16px 20px", borderRadius: 10, backgroundColor: "rgba(255, 209, 102, 0.1)", border: `1.5px solid ${theme.pivot}`, marginBottom: 16 }}>
                <div style={{ fontFamily: fonts.mono, fontSize: 15, color: theme.pivot, fontWeight: 700, marginBottom: 4 }}>
                  {frame >= 3390 ? "CENTER CELL: VALUE 13" : "INSPECTING MATRIX CENTER..."}
                </div>
                <div style={{ fontFamily: fonts.hand, fontSize: 24, color: theme.chalkText }}>
                  {frame >= 3390 ? (
                    <>Located at <strong style={{ color: theme.cyan }}>row 2, column 2</strong> ➔ <span style={{ fontFamily: fonts.mono, color: theme.pivot }}>(2, 2)</span></>
                  ) : (
                    <span style={{ color: theme.chalkDim }}>Examining the central coordinates...</span>
                  )}
                </div>
              </div>
              {frame >= 3762 && (
                <div style={{ padding: "12px 16px", borderRadius: 8, backgroundColor: "rgba(60, 229, 167, 0.12)", border: `1.5px solid ${theme.good}` }}>
                  <div style={{ fontFamily: fonts.mono, fontSize: 14, color: theme.good, fontWeight: 700, marginBottom: 2 }}>
                    ODD-MATRIX THEOREM
                  </div>
                  <div style={{ fontFamily: fonts.hand, fontSize: 20, color: theme.chalkText }}>
                    In any odd-sized matrix, the exact center cell never moves under 90° rotation!
                  </div>
                </div>
              )}
            </div>
          ) : (
            /* PHASE 6: DESTINATION TRUTH & THE EXECUTION QUESTION (ZERO SPOILERS) */
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
                <span style={{ width: 9, height: 9, borderRadius: "50%", backgroundColor: theme.good, boxShadow: `0 0 8px ${theme.good}` }} />
                <span style={{ fontFamily: fonts.mono, fontSize: 18, fontWeight: 700, letterSpacing: "1.5px", color: theme.good, textTransform: "uppercase" }}>
                  {frame >= 4079 ? "The Execution Question" : "Destination Truth Solved"}
                </span>
              </div>
              <div style={{ fontFamily: fonts.hand, fontSize: 24, color: theme.chalkText, lineHeight: 1.4, marginBottom: 16 }}>
                {frame < 4079 ? "Now we know where every value belongs." :
                 "The coordinate math is complete. How should we actually move them?"}
              </div>
              <div style={{ padding: "14px 18px", borderRadius: 10, backgroundColor: "rgba(60, 229, 167, 0.12)", border: `1.5px solid ${theme.good}`, marginBottom: 14 }}>
                <div style={{ fontFamily: fonts.mono, fontSize: 15, color: theme.good, fontWeight: 800, marginBottom: 4 }}>
                  25 / 25 CELLS MAPPED
                </div>
                <div style={{ fontFamily: fonts.hand, fontSize: 20, color: theme.chalkText }}>
                  Every single cell now has an exact, mathematically verified target coordinate.
                </div>
              </div>
              {frame >= 4079 && (
                <div style={{ padding: "14px 18px", borderRadius: 10, backgroundColor: "rgba(255, 209, 102, 0.12)", border: `1.5px solid ${theme.pivot}` }}>
                  <div style={{ fontFamily: fonts.mono, fontSize: 14, color: theme.pivot, fontWeight: 800, marginBottom: 4 }}>
                    NEXT STEP: STRATEGY SELECTION
                  </div>
                  <div style={{ fontFamily: fonts.hand, fontSize: 20, color: theme.chalkText }}>
                    Do we allocate secondary memory, or do we rotate in-place? Let's begin with the most direct method!
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* =====================================================================
          CENTER STAGE: HERO 5×5 MASTER MATRIX
          ===================================================================== */}
      <div
        style={{
          position: "absolute",
          left: gridLeft,
          top: BASE_GRID_TOP,
          width: GRID_WIDTH,
          height: GRID_HEIGHT,
          opacity: gridOpacity,
          transform: `scale(${gridScale})`,
          transformOrigin: "center center",
          zIndex: 9,
        }}
      >
        {/* Top Column Coordinate Rulers (c: 0, 1, 2, 3, 4) - strictly Beat 03 (F246+) */}
        {rulersOpacity > 0 && (
          <div
            style={{
              position: "absolute",
              top: -36,
              left: 0,
              width: GRID_WIDTH,
              height: 28,
              display: "flex",
              opacity: rulersOpacity,
            }}
          >
            {[0, 1, 2, 3, 4].map((c) => {
              const isColActive =
                (frame >= 458 && frame < 782 && c === 0) ||
                (frame >= 782 && frame < 1082 && c === 4) ||
                (frame >= 1082 && frame < 1205 && c === 4) ||
                (frame >= 1205 && frame < 1360 && c === 0) ||
                (frame >= 1693 && frame < 2183 && c === 2) ||
                (frame >= 2888 && frame < 3326 && c === 2) ||
                (frame >= 3390 && frame < 3762 && c === 2);
              return (
                <div
                  key={`col-ruler-${c}`}
                  style={{
                    position: "absolute",
                    left: c * PITCH,
                    width: CELL_SIZE,
                    textAlign: "center",
                    fontFamily: fonts.mono,
                    fontSize: 20,
                    fontWeight: 700,
                    color: isColActive ? theme.pivot : theme.cyan,
                    textShadow: isColActive ? `0 0 12px ${theme.pivot}` : "none",
                  }}
                >
                  c={c}
                </div>
              );
            })}
          </div>
        )}

        {/* Left Row Coordinate Rulers (r: 0, 1, 2, 3, 4) - strictly Beat 03 (F246+) */}
        {rulersOpacity > 0 && (
          <div
            style={{
              position: "absolute",
              left: -46,
              top: 0,
              width: 38,
              height: GRID_HEIGHT,
              opacity: rulersOpacity,
            }}
          >
            {[0, 1, 2, 3, 4].map((r) => {
              const isRowActive =
                (frame >= 458 && frame < 782 && r === 0) ||
                (frame >= 782 && frame < 1082 && r === 0) ||
                (frame >= 1082 && frame < 1205 && r === 4) ||
                (frame >= 1205 && frame < 1360 && r === 4) ||
                (frame >= 1693 && frame < 2183 && r === 1) ||
                (frame >= 2888 && frame < 3326 && r === 1) ||
                (frame >= 3390 && frame < 3762 && r === 2);
              return (
                <div
                  key={`row-ruler-${r}`}
                  style={{
                    position: "absolute",
                    top: r * PITCH + (CELL_SIZE - 24) / 2,
                    width: 38,
                    textAlign: "right",
                    fontFamily: fonts.mono,
                    fontSize: 20,
                    fontWeight: 700,
                    color: isRowActive ? theme.pivot : theme.cyan,
                    textShadow: isRowActive ? `0 0 12px ${theme.pivot}` : "none",
                  }}
                >
                  r={r}
                </div>
              );
            })}
          </div>
        )}

        {/* 5×5 Matrix Cells */}
        {MASTER_MATRIX.map((rowArr, r) =>
          rowArr.map((val, c) => {
            const isCorner =
              (r === 0 && c === 0) ||
              (r === 0 && c === 4) ||
              (r === 4 && c === 4) ||
              (r === 4 && c === 0);

            const isCenter = r === 2 && c === 2;
            const isInteriorTarget = r === 1 && c === 2; // value 8
            const isInteriorDest = r === 2 && c === 3;
            const isArbitraryTarget = frame >= 1693 && frame < 2183 && r === 1 && c === 2;

            // Dim interior cells strictly during corner spotlights (F377..F1477)
            let cellDim = 1.0;
            if (frame >= 377 && frame < 1478 && !isCorner) {
              cellDim = 0.35;
            } else if (frame >= 1693 && frame < 2183 && !isArbitraryTarget) {
              cellDim = 0.55;
            } else if (frame >= 2888 && frame < 3336 && !isInteriorTarget && !isInteriorDest) {
              cellDim = 0.35;
            } else if (frame >= 3390 && frame < 3762 && !isCenter) {
              cellDim = 0.35;
            }

            // Cell border colors & glows strictly as beats occur
            let borderColor = "rgba(248, 246, 240, 0.2)";
            let bgColor = "rgba(10, 40, 30, 0.5)";
            let glow = "none";

            if (frame >= 377 && frame < 1478 && isCorner) {
              if (r === 0 && c === 0) { borderColor = theme.cyan; glow = `0 0 16px ${theme.cyan}`; bgColor = "rgba(92, 225, 230, 0.15)"; }
              if (r === 0 && c === 4) { borderColor = theme.pivot; glow = `0 0 16px ${theme.pivot}`; bgColor = "rgba(255, 209, 102, 0.15)"; }
              if (r === 4 && c === 4) { borderColor = theme.good; glow = `0 0 16px ${theme.good}`; bgColor = "rgba(60, 229, 167, 0.15)"; }
              if (r === 4 && c === 0) { borderColor = theme.purple; glow = `0 0 16px ${theme.purple}`; bgColor = "rgba(216, 180, 226, 0.15)"; }
            }

            if (isArbitraryTarget) {
              borderColor = theme.pivot;
              bgColor = "rgba(255, 209, 102, 0.25)";
              glow = `0 0 20px ${theme.pivot}`;
            }

            if (frame >= 2888 && frame < 3336) {
              if (r === 1 && c === 2) {
                borderColor = theme.pivot;
                bgColor = "rgba(255, 209, 102, 0.22)";
                glow = `0 0 20px ${theme.pivot}`;
              } else if (r === 2 && c === 3 && frame >= 3230) {
                borderColor = theme.good;
                bgColor = "rgba(60, 229, 167, 0.22)";
                glow = `0 0 20px ${theme.good}`;
              }
            }

            if (frame >= 3390 && frame < 3762 && isCenter) {
              borderColor = theme.pivot;
              bgColor = "rgba(255, 209, 102, 0.25)";
              glow = `0 0 24px ${theme.pivot}`;
            }

            // Cell value visibility (hidden when flying or when arrived value replaces it)
            const hideInitialValue =
              (r === 0 && c === 0 && frame >= 688 && frame < 1310) ||
              (r === 0 && c === 4 && frame >= 745 && frame < 1478) ||
              (r === 4 && c === 4 && frame >= 1035 && frame < 1478) ||
              (r === 4 && c === 0 && frame >= 1170 && frame < 1478) ||
              (r === 1 && c === 2 && frame >= 3186 && frame < 3336) ||
              (r === 2 && c === 3 && frame >= 3260 && frame < 3336);

            const displayLandedVal =
              r === 0 && c === 4 && frame >= 745 && frame < 1478 ? 1 :
              r === 4 && c === 4 && frame >= 1035 && frame < 1478 ? 5 :
              r === 4 && c === 0 && frame >= 1170 && frame < 1478 ? 25 :
              r === 0 && c === 0 && frame >= 1310 && frame < 1478 ? 21 :
              r === 2 && c === 3 && frame >= 3260 && frame < 3336 ? 8 :
              null;

            return (
              <div
                key={`cell-${r}-${c}`}
                style={{
                  position: "absolute",
                  left: c * PITCH,
                  top: r * PITCH,
                  width: CELL_SIZE,
                  height: CELL_SIZE,
                  borderRadius: 8,
                  backgroundColor: bgColor,
                  border: `2px solid ${borderColor}`,
                  boxShadow: glow,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  opacity: cellDim,
                  userSelect: "none",
                }}
              >
                {/* Initial Cell Value (appears strictly F122+) */}
                {valuesOpacity > 0 && !hideInitialValue && (
                  <span
                    style={{
                      fontFamily: fonts.mono,
                      fontSize: 32,
                      fontWeight: 700,
                      color: theme.chalkText,
                      opacity: valuesOpacity,
                    }}
                  >
                    {val}
                  </span>
                )}

                {/* Landed Permuted Value */}
                {displayLandedVal !== null && (
                  <span
                    style={{
                      fontFamily: fonts.mono,
                      fontSize: 32,
                      fontWeight: 800,
                      color:
                        displayLandedVal === 1 ? theme.cyan :
                        displayLandedVal === 5 ? theme.pivot :
                        displayLandedVal === 25 ? theme.good :
                        displayLandedVal === 21 ? theme.purple :
                        theme.pivot,
                      textShadow: `0 0 12px currentColor`,
                    }}
                  >
                    {displayLandedVal}
                  </span>
                )}

                {/* Arbitrary cell (r, c) indicator strictly in Beat 11 (F1693..F2183) */}
                {isArbitraryTarget && (
                  <span
                    style={{
                      position: "absolute",
                      bottom: 4,
                      right: 6,
                      fontFamily: fonts.mono,
                      fontSize: 14,
                      fontWeight: 800,
                      color: theme.pivot,
                    }}
                  >
                    (r,c)
                  </span>
                )}

                {/* Ghost target value strictly in Beat 23 (F3954..F4078) */}
                {frame >= 3954 && frame < 4079 && (
                  <span
                    style={{
                      position: "absolute",
                      bottom: 4,
                      right: 6,
                      fontFamily: fonts.mono,
                      fontSize: 16,
                      color: theme.good,
                      fontWeight: 800,
                      opacity: 0.85,
                    }}
                  >
                    ➔{TARGET_ROTATED_MATRIX[r][c]}
                  </span>
                )}
              </div>
            );
          })
        )}

        {/* =====================================================================
            FLYING NUMBERS (BEZIER FLIGHT PRIMITIVE - STRICTLY TIMED TO SPOKEN FLIGHTS)
            ===================================================================== */}
        {/* Value 1 Flight: (0,0) -> (0,4) [F688..F745] */}
        {frame >= 688 && frame < 748 && (
          <BezierFlight
            from={{ x: 0 * PITCH + CELL_SIZE / 2, y: 0 * PITCH + CELL_SIZE / 2 }}
            to={{ x: 4 * PITCH + CELL_SIZE / 2, y: 0 * PITCH + CELL_SIZE / 2 }}
            peak={-38}
            start={688}
            dur={57}
            trail={theme.cyan}
          >
            <div
              style={{
                width: 64,
                height: 64,
                borderRadius: 8,
                backgroundColor: "rgba(10, 40, 30, 0.95)",
                border: `2.5px solid ${theme.cyan}`,
                boxShadow: `0 0 20px ${theme.cyan}`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: fonts.mono,
                fontSize: 32,
                fontWeight: 800,
                color: theme.cyan,
              }}
            >
              1
            </div>
          </BezierFlight>
        )}

        {/* Value 5 Flight: (0,4) -> (4,4) [F970..F1038] */}
        {frame >= 970 && frame < 1038 && (
          <BezierFlight
            from={{ x: 4 * PITCH + CELL_SIZE / 2, y: 0 * PITCH + CELL_SIZE / 2 }}
            to={{ x: 4 * PITCH + CELL_SIZE / 2, y: 4 * PITCH + CELL_SIZE / 2 }}
            peak={38}
            start={970}
            dur={65}
            trail={theme.pivot}
          >
            <div
              style={{
                width: 64,
                height: 64,
                borderRadius: 8,
                backgroundColor: "rgba(10, 40, 30, 0.95)",
                border: `2.5px solid ${theme.pivot}`,
                boxShadow: `0 0 20px ${theme.pivot}`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: fonts.mono,
                fontSize: 32,
                fontWeight: 800,
                color: theme.pivot,
              }}
            >
              5
            </div>
          </BezierFlight>
        )}

        {/* Value 25 Flight: (4,4) -> (4,0) [F1082..F1175] */}
        {frame >= 1082 && frame < 1175 && (
          <BezierFlight
            from={{ x: 4 * PITCH + CELL_SIZE / 2, y: 4 * PITCH + CELL_SIZE / 2 }}
            to={{ x: 0 * PITCH + CELL_SIZE / 2, y: 4 * PITCH + CELL_SIZE / 2 }}
            peak={38}
            start={1082}
            dur={88}
            trail={theme.good}
          >
            <div
              style={{
                width: 64,
                height: 64,
                borderRadius: 8,
                backgroundColor: "rgba(10, 40, 30, 0.95)",
                border: `2.5px solid ${theme.good}`,
                boxShadow: `0 0 20px ${theme.good}`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: fonts.mono,
                fontSize: 32,
                fontWeight: 800,
                color: theme.good,
              }}
            >
              25
            </div>
          </BezierFlight>
        )}

        {/* Value 21 Flight: (4,0) -> (0,0) [F1205..F1315] */}
        {frame >= 1205 && frame < 1315 && (
          <BezierFlight
            from={{ x: 0 * PITCH + CELL_SIZE / 2, y: 4 * PITCH + CELL_SIZE / 2 }}
            to={{ x: 0 * PITCH + CELL_SIZE / 2, y: 0 * PITCH + CELL_SIZE / 2 }}
            peak={-38}
            start={1205}
            dur={105}
            trail={theme.purple}
          >
            <div
              style={{
                width: 64,
                height: 64,
                borderRadius: 8,
                backgroundColor: "rgba(10, 40, 30, 0.95)",
                border: `2.5px solid ${theme.purple}`,
                boxShadow: `0 0 20px ${theme.purple}`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: fonts.mono,
                fontSize: 32,
                fontWeight: 800,
                color: theme.purple,
              }}
            >
              21
            </div>
          </BezierFlight>
        )}

        {/* Value 8 Flight: (1,2) -> (2,3) [F3186..F3265] */}
        {frame >= 3186 && frame < 3265 && (
          <BezierFlight
            from={{ x: 2 * PITCH + CELL_SIZE / 2, y: 1 * PITCH + CELL_SIZE / 2 }}
            to={{ x: 3 * PITCH + CELL_SIZE / 2, y: 2 * PITCH + CELL_SIZE / 2 }}
            peak={-22}
            start={3186}
            dur={74}
            trail={theme.pivot}
          >
            <div
              style={{
                width: 64,
                height: 64,
                borderRadius: 8,
                backgroundColor: "rgba(10, 40, 30, 0.95)",
                border: `2.5px solid ${theme.pivot}`,
                boxShadow: `0 0 20px ${theme.pivot}`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: fonts.mono,
                fontSize: 32,
                fontWeight: 800,
                color: theme.pivot,
              }}
            >
              8
            </div>
          </BezierFlight>
        )}

        {/* Center 13 Fixed Point Spin Glyph strictly in Beat 21 [F3687..F3762] */}
        {frame >= 3687 && frame < 3762 && (
          <div
            style={{
              position: "absolute",
              left: 2 * PITCH,
              top: 2 * PITCH,
              width: CELL_SIZE,
              height: CELL_SIZE,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              pointerEvents: "none",
              transform: `rotate(${centerSpinAngle}deg)`,
              zIndex: 22,
            }}
          >
            <svg width={CELL_SIZE} height={CELL_SIZE}>
              <circle
                cx={CELL_SIZE / 2}
                cy={CELL_SIZE / 2}
                r={CELL_SIZE / 2 - 6}
                fill="none"
                stroke={theme.pivot}
                strokeWidth={3}
                strokeDasharray="8 6"
              />
            </svg>
          </div>
        )}
      </div>

      {/* =====================================================================
          RIGHT BLACKBOARD SLATE: TELEMETRY & TRANSFORMATION INSPECTOR (X: 1246, Y: 154, W: 610, H: 590)
          ===================================================================== */}
      {frame >= 246 && (
        <div
          style={{
            position: "absolute",
            left: 1246,
            top: 154,
            width: 610,
            height: 590,
            opacity: sidePanelsOpacity * rightPanelEntranceOpacity,
            zIndex: 8,
          }}
        >
          <RoughBox width={610} height={590} stroke={theme.cardBorder} strokeWidth={2} roughness={1.2} fill="rgba(248, 246, 240, 0.03)" seed={202} />

          <div style={{ position: "absolute", inset: 0, padding: "26px 30px" }}>
            {frame < 377 ? (
              /* PHASE 1: COORDINATE SYSTEM SPEC (Strictly Beat 03: F246..F376) */
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
                  <span style={{ width: 9, height: 9, borderRadius: "50%", backgroundColor: theme.cyan, boxShadow: `0 0 8px ${theme.cyan}` }} />
                  <span style={{ fontFamily: fonts.mono, fontSize: 18, fontWeight: 700, letterSpacing: "1.5px", color: theme.cyan, textTransform: "uppercase" }}>
                    Zero-Based Coordinates
                  </span>
                </div>
                <div style={{ fontFamily: fonts.hand, fontSize: 24, color: theme.chalkText, lineHeight: 1.45, marginBottom: 20 }}>
                  We will use zero-based row and column indices to identify every cell:
                </div>

                {/* Coordinate Grid Guide */}
                <div style={{ display: "flex", flexDirection: "column", gap: 14, marginBottom: 24 }}>
                  <div style={{ padding: "14px 18px", borderRadius: 8, backgroundColor: "rgba(92, 225, 230, 0.08)", border: `1.5px solid ${theme.cyan}` }}>
                    <div style={{ fontFamily: fonts.mono, fontSize: 16, color: theme.cyan, fontWeight: 700, marginBottom: 4 }}>
                      ROW INDEX r ∈ [0, 4]
                    </div>
                    <div style={{ fontFamily: fonts.hand, fontSize: 21, color: theme.chalkText }}>
                      Measures vertical depth from row 0 at top to row 4 at bottom.
                    </div>
                  </div>
                  <div style={{ padding: "14px 18px", borderRadius: 8, backgroundColor: "rgba(92, 225, 230, 0.08)", border: `1.5px solid ${theme.cyan}` }}>
                    <div style={{ fontFamily: fonts.mono, fontSize: 16, color: theme.cyan, fontWeight: 700, marginBottom: 4 }}>
                      COL INDEX c ∈ [0, 4]
                    </div>
                    <div style={{ fontFamily: fonts.hand, fontSize: 21, color: theme.chalkText }}>
                      Measures horizontal offset from col 0 at left to col 4 at right.
                    </div>
                  </div>
                </div>

                <div style={{ fontFamily: fonts.hand, fontSize: 22, color: theme.chalkDim }}>
                  Every element is addressed as the ordered coordinate pair <strong style={{ color: theme.pivot }}>(r, c)</strong>.
                </div>
              </div>
            ) : frame < 458 ? (
              /* BEAT 04: BOUNDARY LANDMARKS (F377..F457) - ZERO PREMATURE SPOILERS! */
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
                  <span style={{ width: 9, height: 9, borderRadius: "50%", backgroundColor: theme.pivot, boxShadow: `0 0 8px ${theme.pivot}` }} />
                  <span style={{ fontFamily: fonts.mono, fontSize: 18, fontWeight: 700, letterSpacing: "1.5px", color: theme.pivot, textTransform: "uppercase" }}>
                    Boundary Landmarks
                  </span>
                </div>
                <div style={{ fontFamily: fonts.hand, fontSize: 24, color: theme.chalkText, lineHeight: 1.45, marginBottom: 18 }}>
                  First, just watch the four corners of the matrix:
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 10, fontFamily: fonts.mono, fontSize: 18, marginBottom: 18 }}>
                  <div style={{ padding: "10px 16px", borderRadius: 8, backgroundColor: "rgba(92, 225, 230, 0.08)", border: `1.5px solid ${theme.cyan}`, color: theme.cyan }}>
                    • Top-Left: coordinate (0, 0)
                  </div>
                  <div style={{ padding: "10px 16px", borderRadius: 8, backgroundColor: "rgba(255, 209, 102, 0.08)", border: `1.5px solid ${theme.pivot}`, color: theme.pivot }}>
                    • Top-Right: coordinate (0, 4)
                  </div>
                  <div style={{ padding: "10px 16px", borderRadius: 8, backgroundColor: "rgba(60, 229, 167, 0.08)", border: `1.5px solid ${theme.good}`, color: theme.good }}>
                    • Bottom-Right: coordinate (4, 4)
                  </div>
                  <div style={{ padding: "10px 16px", borderRadius: 8, backgroundColor: "rgba(216, 180, 226, 0.08)", border: `1.5px solid ${theme.purple}`, color: theme.purple }}>
                    • Bottom-Left: coordinate (4, 0)
                  </div>
                </div>
                <div style={{ fontFamily: fonts.hand, fontSize: 22, color: theme.chalkDim }}>
                  Notice their initial coordinates before any rotation begins.
                </div>
              </div>
            ) : frame < 1478 ? (
              /* BEATS 05..09: LIVE CORNER TELEMETRY (STRICT ZERO-SPOILER PROGRESSION) */
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
                  <span style={{ width: 9, height: 9, borderRadius: "50%", backgroundColor: theme.pivot, boxShadow: `0 0 8px ${theme.pivot}` }} />
                  <span style={{ fontFamily: fonts.mono, fontSize: 18, fontWeight: 700, letterSpacing: "1.5px", color: theme.pivot, textTransform: "uppercase" }}>
                    Live Rotation Telemetry
                  </span>
                </div>

                {/* Current Active Move Card */}
                <div
                  style={{
                    padding: "18px 22px",
                    borderRadius: 12,
                    backgroundColor: "rgba(248, 246, 240, 0.04)",
                    border: `1.5px solid ${theme.cardBorder}`,
                    marginBottom: 20,
                  }}
                >
                  <div style={{ fontFamily: fonts.mono, fontSize: 15, color: theme.pivot, fontWeight: 700, letterSpacing: "1px", marginBottom: 6 }}>
                    {frame < 782 ? "CORNER 1 OF 4 IN FOCUS" :
                     frame < 1082 ? "CORNER 2 OF 4 IN FOCUS" :
                     frame < 1205 ? "CORNER 3 OF 4 IN FOCUS" :
                     frame < 1360 ? "CORNER 4 OF 4 IN FOCUS" :
                     "4-CORNER CYCLE COMPLETE"}
                  </div>
                  <div style={{ display: "flex", alignItems: "baseline", gap: 16 }}>
                    <span style={{ fontFamily: fonts.mono, fontSize: 44, fontWeight: 900, color: theme.chalkText }}>
                      {frame < 782 ? "1" : frame < 1082 ? "5" : frame < 1205 ? "25" : "21"}
                    </span>
                    <span style={{ fontFamily: fonts.hand, fontSize: 26, color: theme.chalkDim }}>
                      {frame < 602 ? "starts at row 0, column 0" :
                       frame < 745 ? "moves (0, 0) ➔ (0, 4)..." :
                       frame < 782 ? "arrived at (0, 4) ✓" :
                       frame < 940 ? "starts at row 0, column 4" :
                       frame < 1035 ? "moves (0, 4) ➔ (4, 4)..." :
                       frame < 1082 ? "arrived at (4, 4) ✓" :
                       frame < 1170 ? "moves (4, 4) ➔ (4, 0)..." :
                       frame < 1205 ? "arrived at (4, 0) ✓" :
                       frame < 1310 ? "moves (4, 0) ➔ (0, 0)..." :
                       frame < 1360 ? "arrived at (0, 0) ✓" :
                       "closed cycle confirmed!"}
                    </span>
                  </div>
                </div>

                {/* Path & Angle Metrics — only revealed once rotation is spoken at F602 */}
                {frame >= 602 && (
                  <div style={{ display: "flex", flexDirection: "column", gap: 12, fontFamily: fonts.mono, fontSize: 18, color: theme.chalkText }}>
                    <div style={{ padding: "10px 14px", borderRadius: 8, backgroundColor: "rgba(248, 246, 240, 0.03)" }}>
                      <span style={{ color: theme.chalkDim }}>Rotation Angle: </span>
                      <strong style={{ color: theme.good }}>+90° Clockwise ↻</strong>
                    </div>
                    <div style={{ padding: "10px 14px", borderRadius: 8, backgroundColor: "rgba(248, 246, 240, 0.03)" }}>
                      <span style={{ color: theme.chalkDim }}>Active Trajectory: </span>
                      <strong style={{ color: theme.pivot }}>
                        {frame < 782 ? "Top Boundary Edge" :
                         frame < 1082 ? "Right Boundary Edge" :
                         frame < 1205 ? "Bottom Boundary Edge" :
                         "Left Boundary Edge"}
                      </strong>
                    </div>
                    <div style={{ padding: "10px 14px", borderRadius: 8, backgroundColor: "rgba(248, 246, 240, 0.03)" }}>
                      <span style={{ color: theme.chalkDim }}>Cycle Group: </span>
                      <strong style={{ color: theme.cyan }}>Outer Perimeter Ring</strong>
                    </div>
                  </div>
                )}
              </div>
            ) : frame < 2791 ? (
              /* BEATS 10..15: COORDINATE MAPPING DERIVATION (ANTI-SPOILER: EQUATIONS REVEAL AS SPOKEN) */
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
                  <span style={{ width: 9, height: 9, borderRadius: "50%", backgroundColor: theme.good, boxShadow: `0 0 8px ${theme.good}` }} />
                  <span style={{ fontFamily: fonts.mono, fontSize: 18, fontWeight: 700, letterSpacing: "1.5px", color: theme.good, textTransform: "uppercase" }}>
                    Coordinate Formulation
                  </span>
                </div>
                <div style={{ fontFamily: fonts.hand, fontSize: 24, color: theme.chalkText, lineHeight: 1.4, marginBottom: 18 }}>
                  {frame < 1693 ? "We need a rule that works for every cell in the matrix." :
                   "Take any value at row r, column c:"}
                </div>

                {/* Step 1: newRow appears at F1819, formula newRow = c snaps in at F1975 */}
                {frame >= 1819 && (
                  <div
                    style={{
                      padding: "12px 18px",
                      borderRadius: 10,
                      backgroundColor: "rgba(92, 225, 230, 0.12)",
                      border: `1.5px solid ${theme.cyan}`,
                      marginBottom: 12,
                    }}
                  >
                    <div style={{ fontFamily: fonts.mono, fontSize: 15, color: theme.cyan, fontWeight: 700 }}>
                      STEP 1: NEW ROW
                    </div>
                    <div style={{ fontFamily: fonts.mono, fontSize: 22, color: theme.chalkText, fontWeight: 800, marginTop: 2 }}>
                      newRow = {frame >= 1975 ? <span style={{ color: theme.cyan }}>c</span> : <span style={{ color: theme.chalkDim }}>evaluating...</span>}
                    </div>
                  </div>
                )}

                {/* Step 2: newCol appears at F2047, formula newCol = n - 1 - r snaps in at F2094 */}
                {frame >= 2047 && (
                  <div
                    style={{
                      padding: "12px 18px",
                      borderRadius: 10,
                      backgroundColor: "rgba(255, 209, 102, 0.12)",
                      border: `1.5px solid ${theme.pivot}`,
                      marginBottom: 14,
                    }}
                  >
                    <div style={{ fontFamily: fonts.mono, fontSize: 15, color: theme.pivot, fontWeight: 700 }}>
                      STEP 2: NEW COLUMN
                    </div>
                    <div style={{ fontFamily: fonts.mono, fontSize: 22, color: theme.chalkText, fontWeight: 800, marginTop: 2 }}>
                      newCol = {frame >= 2094 ? <span style={{ color: theme.pivot }}>n - 1 - r</span> : <span style={{ color: theme.chalkDim }}>evaluating...</span>}
                    </div>
                  </div>
                )}

                {/* Unified Theorem Box appears strictly at Beat 14 (F2183+) with zero premature reveal */}
                {frame >= 2183 && (
                  <div
                    style={{
                      padding: "16px 20px",
                      borderRadius: 10,
                      backgroundColor: "rgba(60, 229, 167, 0.14)",
                      border: `2px solid ${theme.good}`,
                      boxShadow: `0 0 20px rgba(60, 229, 167, 0.25)`,
                      textAlign: "center",
                    }}
                  >
                    <div style={{ fontFamily: fonts.mono, fontSize: 15, color: theme.good, fontWeight: 700, letterSpacing: "1.5px" }}>
                      COMPLETE COORDINATE MAPPING:
                    </div>
                    <div style={{ fontFamily: fonts.mono, fontSize: 24, color: theme.chalkText, fontWeight: 900, marginTop: 4 }}>
                      {frame < 2350
                        ? "(r, c) ──▶ ..."
                        : frame < 2661
                        ? "(r, c) ──▶ (c, n - 1 - r)"
                        : frame < 2731
                        ? "(r, c) ──▶ (c, ...)"
                        : <>(r, c) ──▶ <span style={{ color: theme.good }}>(c, 4 - r)</span></>}
                    </div>
                  </div>
                )}
              </div>
            ) : frame < 3337 ? (
              /* PHASE 4: TEST 1 · INTERIOR VALUE CHECK (8) (ANTI-SPOILER: MATH PROCEEDS STEP BY STEP) */
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
                  <span style={{ width: 9, height: 9, borderRadius: "50%", backgroundColor: theme.pivot, boxShadow: `0 0 8px ${theme.pivot}` }} />
                  <span style={{ fontFamily: fonts.mono, fontSize: 18, fontWeight: 700, letterSpacing: "1.5px", color: theme.pivot, textTransform: "uppercase" }}>
                    Verification · Interior Cell
                  </span>
                </div>
                <div style={{ fontFamily: fonts.hand, fontSize: 24, color: theme.chalkText, lineHeight: 1.4, marginBottom: 18 }}>
                  {frame < 2888 ? "Selecting an interior cell for formula verification..." : "Verifying formula on interior value 8:"}
                </div>

                {/* Source Info Card reveals strictly at F2888 */}
                {frame >= 2888 && (
                  <div
                    style={{
                      padding: "14px 18px",
                      borderRadius: 10,
                      backgroundColor: "rgba(255, 209, 102, 0.12)",
                      border: `1.5px solid ${theme.pivot}`,
                      marginBottom: 14,
                    }}
                  >
                    <div style={{ fontFamily: fonts.mono, fontSize: 15, color: theme.pivot, fontWeight: 700 }}>
                      SOURCE VALUE: 8
                    </div>
                    <div style={{ fontFamily: fonts.mono, fontSize: 24, color: theme.chalkText, fontWeight: 800, marginTop: 2 }}>
                      r = 1, c = 2 ➔ <span style={{ color: theme.cyan }}>(1, 2)</span>
                    </div>
                  </div>
                )}

                {/* Calculation Steps reveal strictly as spoken */}
                {frame >= 2993 && (
                  <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 18 }}>
                    <div style={{ fontFamily: fonts.mono, fontSize: 20, color: theme.chalkText }}>
                      • <span style={{ color: theme.cyan }}>newRow</span> = c = {frame >= 3028 ? <strong style={{ color: theme.pivot }}>2</strong> : <span style={{ color: theme.chalkDim }}>...</span>}
                    </div>
                    {frame >= 3084 && (
                      <div style={{ fontFamily: fonts.mono, fontSize: 20, color: theme.chalkText }}>
                        • <span style={{ color: theme.pivot }}>newCol</span> = 4 - r = 4 - 1 {frame >= 3161 && <> = <strong style={{ color: theme.pivot }}>3</strong></>}
                      </div>
                    )}
                    {frame >= 3238 && (
                      <div style={{ fontFamily: fonts.mono, fontSize: 22, color: theme.good, fontWeight: 800 }}>
                        ➔ Destination: (2, 3)
                      </div>
                    )}
                  </div>
                )}

                {/* Verification Confirmation pops strictly at F3326 ("Good.") */}
                {frame >= 3326 && (
                  <div
                    style={{
                      padding: "12px 18px",
                      borderRadius: 10,
                      backgroundColor: "rgba(60, 229, 167, 0.16)",
                      border: `2px solid ${theme.good}`,
                      boxShadow: `0 0 20px rgba(60, 229, 167, 0.3)`,
                      textAlign: "center",
                      transform: `scale(${checkmarkScale})`,
                    }}
                  >
                    <span style={{ fontFamily: fonts.mono, fontSize: 22, color: theme.good, fontWeight: 900 }}>
                      ✓ EXACT MATCH VERIFIED!
                    </span>
                  </div>
                )}
              </div>
            ) : frame < 3954 ? (
              /* PHASE 5: TEST 2 · CENTER FIXED POINT PROOF (13) (ANTI-SPOILER: MATH PROCEEDS STEP BY STEP) */
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
                  <span style={{ width: 9, height: 9, borderRadius: "50%", backgroundColor: theme.pivot, boxShadow: `0 0 8px ${theme.pivot}` }} />
                  <span style={{ fontFamily: fonts.mono, fontSize: 18, fontWeight: 700, letterSpacing: "1.5px", color: theme.pivot, textTransform: "uppercase" }}>
                    Verification · Center Cell
                  </span>
                </div>
                <div style={{ fontFamily: fonts.hand, fontSize: 24, color: theme.chalkText, lineHeight: 1.4, marginBottom: 18 }}>
                  {frame < 3390 ? "Now look at the center of the matrix:" : "Evaluating center cell invariant:"}
                </div>

                {/* Source Info Card reveals strictly at F3390 */}
                {frame >= 3390 && (
                  <div
                    style={{
                      padding: "14px 18px",
                      borderRadius: 10,
                      backgroundColor: "rgba(255, 209, 102, 0.12)",
                      border: `1.5px solid ${theme.pivot}`,
                      marginBottom: 14,
                    }}
                  >
                    <div style={{ fontFamily: fonts.mono, fontSize: 15, color: theme.pivot, fontWeight: 700 }}>
                      CENTER VALUE: 13
                    </div>
                    <div style={{ fontFamily: fonts.mono, fontSize: 24, color: theme.chalkText, fontWeight: 800, marginTop: 2 }}>
                      r = 2, c = 2 ➔ <span style={{ color: theme.cyan }}>(2, 2)</span>
                    </div>
                  </div>
                )}

                {/* Calculation Steps reveal strictly as spoken in Beat 20 (F3497+) */}
                {frame >= 3497 && (
                  <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 16 }}>
                    <div style={{ fontFamily: fonts.mono, fontSize: 20, color: theme.chalkText }}>
                      • <span style={{ color: theme.cyan }}>newRow</span> = c = <strong style={{ color: theme.pivot }}>2</strong>
                    </div>
                    {frame >= 3561 && (
                      <div style={{ fontFamily: fonts.mono, fontSize: 20, color: theme.chalkText }}>
                        • <span style={{ color: theme.pivot }}>newCol</span> = 4 - r = 4 - 2 {frame >= 3625 && <> = <strong style={{ color: theme.pivot }}>2</strong></>}
                      </div>
                    )}
                    {frame >= 3671 && (
                      <div style={{ fontFamily: fonts.mono, fontSize: 22, color: theme.pivot, fontWeight: 800 }}>
                        ➔ Destination: (2, 2) [MAPS TO ITSELF]
                      </div>
                    )}
                  </div>
                )}

                {/* Fixed Point Invariant Card appears strictly at Beat 22 (F3762+) */}
                {frame >= 3762 && (
                  <div
                    style={{
                      padding: "12px 18px",
                      borderRadius: 10,
                      backgroundColor: "rgba(255, 209, 102, 0.15)",
                      border: `2px solid ${theme.pivot}`,
                      textAlign: "center",
                    }}
                  >
                    <div style={{ fontFamily: fonts.mono, fontSize: 15, color: theme.pivot, fontWeight: 700, letterSpacing: "1px" }}>
                      INVARIANT PRINCIPLE
                    </div>
                    <div style={{ fontFamily: fonts.hand, fontSize: 22, color: theme.chalkText, lineHeight: 1.35, marginTop: 4 }}>
                      In any odd-sized matrix (N × N), the center cell <strong style={{ color: theme.pivot }}>(⌊N/2⌋, ⌊N/2⌋)</strong> never moves!
                    </div>
                  </div>
                )}
              </div>
            ) : frame < 4244 ? (
              /* PHASE 6: DESTINATION TRUTH & STRATEGY SELECTION (Beat 23..24) */
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
                  <span style={{ width: 9, height: 9, borderRadius: "50%", backgroundColor: theme.good, boxShadow: `0 0 8px ${theme.good}` }} />
                  <span style={{ fontFamily: fonts.mono, fontSize: 18, fontWeight: 700, letterSpacing: "1.5px", color: theme.good, textTransform: "uppercase" }}>
                    {frame >= 4079 ? "Strategy Selection" : "Destination Truth Solved"}
                  </span>
                </div>
                <div style={{ fontFamily: fonts.hand, fontSize: 24, color: theme.chalkText, lineHeight: 1.4, marginBottom: 18 }}>
                  {frame >= 4079 ? (
                    <>We know where every cell belongs. <strong style={{ color: theme.pivot }}>How should we actually move them?</strong></>
                  ) : (
                    <>Now we know where every value belongs in the rotated matrix.</>
                  )}
                </div>

                <div style={{ padding: "14px 18px", borderRadius: 10, backgroundColor: "rgba(60, 229, 167, 0.12)", border: `1.5px solid ${theme.good}`, marginBottom: 14 }}>
                  <div style={{ fontFamily: fonts.mono, fontSize: 15, color: theme.good, fontWeight: 800, marginBottom: 4 }}>
                    COORDINATE MAPPING CONFIRMED
                  </div>
                  <div style={{ fontFamily: fonts.mono, fontSize: 20, color: theme.chalkText }}>
                    dest[c][4 - r] = matrix[r][c]
                  </div>
                </div>

                {frame >= 4079 && (
                  <div style={{ display: "flex", flexDirection: "column", gap: 8, fontFamily: fonts.mono, fontSize: 16 }}>
                    <div style={{ padding: "10px 14px", borderRadius: 8, backgroundColor: "rgba(255, 209, 102, 0.12)", border: `1px solid ${theme.pivot}`, color: theme.pivot }}>
                      • Method 1: Auxiliary Matrix (O(N²) space)
                    </div>
                    <div style={{ padding: "10px 14px", borderRadius: 8, backgroundColor: "rgba(248, 246, 240, 0.04)", color: theme.chalkDim }}>
                      • Method 2: In-Place 4-Way Cycles (O(1) space)
                    </div>
                    <div style={{ padding: "10px 14px", borderRadius: 8, backgroundColor: "rgba(248, 246, 240, 0.04)", color: theme.chalkDim }}>
                      • Method 3: Transpose + Reverse (O(1) space)
                    </div>
                  </div>
                )}
              </div>
            ) : (
              /* PHASE 7: METHOD 1 TEASER (HANDOFF - F4244+) */
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
                  <span style={{ width: 9, height: 9, borderRadius: "50%", backgroundColor: theme.good, boxShadow: `0 0 8px ${theme.good}` }} />
                  <span style={{ fontFamily: fonts.mono, fontSize: 18, fontWeight: 700, letterSpacing: "1.5px", color: theme.good, textTransform: "uppercase" }}>
                    Handoff: Method 1
                  </span>
                </div>
                <div style={{ fontFamily: fonts.hand, fontSize: 26, color: theme.chalkText, lineHeight: 1.4, marginBottom: 18 }}>
                  <strong style={{ color: theme.good }}>METHOD 1: EXTRA DESTINATION MATRIX</strong>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: 12, fontFamily: fonts.mono, fontSize: 18, color: theme.chalkText, marginBottom: 20 }}>
                  <div style={{ padding: "10px 14px", borderRadius: 8, backgroundColor: "rgba(60, 229, 167, 0.08)", border: `1px solid ${theme.good}` }}>
                    Strategy: Allocate secondary 5×5 grid
                  </div>
                  <div style={{ padding: "10px 14px", borderRadius: 8, backgroundColor: "rgba(248, 246, 240, 0.04)" }}>
                    Formula: dest[c][4 - r] = matrix[r][c]
                  </div>
                  <div style={{ padding: "10px 14px", borderRadius: 8, backgroundColor: "rgba(248, 246, 240, 0.04)" }}>
                    Space: O(N²) Extra Memory
                  </div>
                </div>

                <div style={{ fontFamily: fonts.hand, fontSize: 22, color: theme.chalkDim }}>
                  Up next in Scene 03: Complete step-by-step trace of Method 1!
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* =====================================================================
          EMERGING GHOST DESTINATION GRID & METHOD 1 BADGE (Beat 25: F4244..F4333)
          ===================================================================== */}
      {frame >= 4244 && (
        <>
          {/* Method 1 Center Header Badge */}
          <div
            style={{
              position: "absolute",
              left: "50%",
              top: 126,
              transform: "translateX(-50%)",
              padding: "10px 28px",
              borderRadius: 12,
              backgroundColor: "rgba(60, 229, 167, 0.12)",
              border: `2px solid ${theme.good}`,
              boxShadow: "0 0 24px rgba(60, 229, 167, 0.3)",
              zIndex: 15,
              opacity: interpolate(frame, [4250, 4280], [0, 1], {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
              }),
            }}
          >
            <span
              style={{
                fontFamily: fonts.mono,
                fontSize: 22,
                color: theme.good,
                fontWeight: 800,
                letterSpacing: "1.5px",
              }}
            >
              METHOD 1: EXTRA DESTINATION MATRIX [O(N²) SPACE]
            </span>
          </div>

          {/* Emerging Ghost Destination Matrix (Matches Scene 03 RIGHT_GRID_X = 1318) */}
          <div
            style={{
              position: "absolute",
              left: 1318,
              top: BASE_GRID_TOP,
              width: GRID_WIDTH,
              height: GRID_HEIGHT,
              opacity: interpolate(frame, [4260, 4320], [0, 0.85], {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
                easing: EASE,
              }),
              zIndex: 9,
            }}
          >
            <div
              style={{
                position: "absolute",
                top: -34,
                left: 0,
                width: GRID_WIDTH,
                textAlign: "center",
                fontFamily: fonts.mono,
                fontSize: 18,
                color: theme.good,
                fontWeight: 800,
                letterSpacing: "1px",
              }}
            >
              DESTINATION MATRIX [5 × 5]
            </div>
            {MASTER_MATRIX.map((rowArr, r) =>
              rowArr.map((_, c) => (
                <div
                  key={`ghost-dest-${r}-${c}`}
                  style={{
                    position: "absolute",
                    left: c * PITCH,
                    top: r * PITCH,
                    width: CELL_SIZE,
                    height: CELL_SIZE,
                    borderRadius: 8,
                    border: `2px dashed rgba(60, 229, 167, 0.6)`,
                    backgroundColor: "rgba(60, 229, 167, 0.08)",
                  }}
                />
              ))
            )}
          </div>
        </>
      )}

      {/* =====================================================================
          CAPTIONS BASELINE (Zero-Collision: bottom: 38px, Y: 980)
          ===================================================================== */}
      <Captions words={captionWords} bottom={38} fontSize={38} />
    </div>
  );
};
