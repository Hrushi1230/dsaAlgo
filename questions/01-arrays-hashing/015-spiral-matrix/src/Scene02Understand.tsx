/**
 * Scene02Understand.tsx — Scene 02 · Understand the Question & Method 1 Idea
 * Spiral Matrix (LeetCode 54) · Pattern 01 — Arrays & Hashing
 *
 * Implements the complete Question Breakdown and Method 1 Derivation:
 * - 100% Kit Components: MeshGrid, RoughBox, Captions, ChalkboardBackground, ChalkFilters
 * - Total Duration: 2,026 frames @ 30fps (67.540s) strictly from sync/02-understand.json
 * - Anchors mapped from sync/02-understand.anchors.json
 *
 * Timeline & Anchors:
 * - S02_MN (F0–F102): Abstract m × n rectangular matrix geometry
 * - S02_M_ROWS (F103–F145): Row brace m = 5
 * - S02_N_COLS (F146–F225): Column brace n = 6
 * - S02_RECT (F226–F319): Non-square rectangular badge (m ≠ n allowed)
 * - S02_MASTER (F320–F444): Verified 5×6 master matrix reveal (values 1..30)
 * - S02_OUTPUT_CONTRACT (F445–F690): Output list collector (flatten 30 values in spiral order)
 * - S02_DIR_SEQUENCE (F691–F856): Clockwise compass cycle: Right -> Down -> Left -> Up -> Repeat
 * - S02_TURN_Q (F857–F975): Question card: "WHEN SHOULD WE TURN?"
 * - S02_MOVING_RIGHT (F976–F1038): At cell (0, 5) = 6 moving right
 * - S02_OUTSIDE (F1039–F1137): Out of bounds probe (col 6 >= n)
 * - S02_TURN_OUT (F1138–F1204): Turn clockwise on border hit (Right -> Down)
 * - S02_OUTER_DONE (F1205–F1276): Hypothetical outer perimeter completed (dimmed/visited)
 * - S02_INSIDE (F1277–F1386): At cell (1, 0) = 7 probe pointing up to cell (0, 0) = 1 (in bounds)
 * - S02_ALREADY_VISITED (F1387–F1441): Cell 1 already visited (visited[0][0] == True)
 * - S02_METHOD1_RULE (F1442–F1756): Prominent rule card: OUTSIDE OR ALREADY VISITED
 * - S02_STATE (F1757–F1972): State trio: Position (r, c), Direction (dr, dc), Visited matrix
 * - S02_TRACE (F1973–F2026): Clean reset at cell (0, 0) facing Right for Scene 03
 */

import React, { useMemo } from "react";
import {
  Audio,
  interpolate,
  staticFile,
  useCurrentFrame,
} from "remotion";

import { ChalkboardBackground, ChalkFilters } from "../../../../kit/lib/chalk";
import { theme, fonts } from "../../../../kit/lib/theme";
import { EASE } from "../../../../kit/lib/anim";
import { Captions, CaptionWord } from "../../../../kit/components/Captions";
import { MeshGrid } from "../../../../kit/components/MeshGrid";
import { RoughBox } from "../../../../kit/components/RoughBox";
import syncData from "../sync/02-understand.json";

// ---------------------------------------------------------------------------
// 5x6 Master Testcase Values
// ---------------------------------------------------------------------------
const MATRIX_VALUES = [
  [ 1,  2,  3,  4,  5,  6],
  [ 7,  8,  9, 10, 11, 12],
  [13, 14, 15, 16, 17, 18],
  [19, 20, 21, 22, 23, 24],
  [25, 26, 27, 28, 29, 30],
];

// ---------------------------------------------------------------------------
// Caption Normalization
// ---------------------------------------------------------------------------
const captionWords: CaptionWord[] = (syncData.words || []).map((w: any) => {
  let word = w.word;
  if (word === "5") word = "5";
  if (word === "6") word = "6";
  if (word.toLowerCase() === "method") word = "Method";
  return {
    word,
    start: w.start_ms / 1000,
    end: w.end_ms / 1000,
  };
});

export const Scene02Understand: React.FC = () => {
  const frame = useCurrentFrame();

  // Grid dimensions
  const rows = 5;
  const cols = 6;
  const cellWidth = 104;
  const cellHeight = 82;
  const gridWidth = cols * cellWidth;   // 624px
  const gridHeight = rows * cellHeight; // 410px

  // Values revealed from Beat 05 (F320+)
  const showValues = frame >= 320;

  // Grid positioning: centered in Beats 01-06 (F0..F670), then glides to left stage at F670..F705
  const rulerWidth = 80;
  const initialLeft = showValues ? 608 : 648;
  const gridLeft = frame < 670
    ? initialLeft
    : interpolate(frame, [670, 705], [initialLeft, 120], {
        easing: EASE,
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
      });
  const gridTop = 165; // Harmonious vertical centering (Y: 165..575)

  // Turn investigation phases
  const isMovingRightDemo = frame >= 976 && frame < 1205;
  const isOutsideDetected = frame >= 1039 && frame < 1138;
  const isTurnedDown = frame >= 1138 && frame < 1205;

  // Outer completed demo strictly during Beats 12–14 (F1205..F1441)
  const isOuterDoneDemo = frame >= 1205 && frame < 1442;
  const isInsideQuery = frame >= 1277 && frame < 1442;
  const isAlreadyVisitedFlash = frame >= 1387 && frame < 1442;

  // Reset to pristine state on Beat 17 (F1973+)
  const isTraceReady = frame >= 1973;

  // Compass active direction highlights (Beat 07: F691..F856)
  const dirRightActive = (frame >= 725 && frame < 757) || (frame >= 845 && frame < 857) || (frame >= 976 && frame < 1138) || frame >= 1973;
  const dirDownActive = (frame >= 757 && frame < 784) || (frame >= 1138 && frame < 1205);
  const dirLeftActive = frame >= 784 && frame < 807;
  const dirUpActive = (frame >= 807 && frame < 845) || (frame >= 1277 && frame < 1387);
  const showCompass = frame >= 691;

  // Direction arrow angle at cell (0, 5) during Beat 11 turn
  const arrowAngle = useMemo(() => {
    if (frame < 1138) return 0;
    return interpolate(frame, [1138, 1165], [0, 90], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
      easing: EASE,
    });
  }, [frame]);

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
      <Audio src={staticFile("audio/015/scence02.mp3")} />

      {/* =====================================================================
          TOP HEADER BAR (Course Branding & Continuity: Y: 28..80)
         ===================================================================== */}
      <div
        style={{
          position: "absolute",
          top: 28,
          left: 64,
          right: 64,
          height: 52,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          zIndex: 30,
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
            fontSize: 40,
            fontWeight: 700,
            color: theme.chalkText,
            letterSpacing: "0.5px",
            textShadow: "0 0 16px rgba(248, 246, 240, 0.3)",
          }}
        >
          Spiral Matrix
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
            #015
          </span>
          <span
            style={{
              padding: "4px 12px",
              borderRadius: 6,
              backgroundColor: "rgba(255, 209, 102, 0.15)",
              border: `1px solid ${theme.pivot}`,
              color: theme.pivot,
              fontSize: 14,
              fontWeight: 800,
              letterSpacing: "1.5px",
            }}
          >
            MEDIUM
          </span>
        </div>
      </div>

      {/* =====================================================================
          RIGHT STAGE PEDAGOGICAL HERO CARDS (X: 1240, Y: 140, W: 620, H: 430)
          Zero-Void Law: Fills the open right canvas with generous, animated,
          spoiler-free instruction using RoughBox chalk outlines.
         ===================================================================== */}

      {/* =====================================================================
          RIGHT STAGE PEDAGOGICAL HERO CARDS (X: 970, Y: 124, W: 890, H: 490)
          Zero-Void Law: Fills the open right canvas with generous, animated,
          spoiler-free instruction using RoughBox chalk outlines.
         ===================================================================== */}

      {/* PHASE A (F691..F856): Beat 07 — The 4-Phase Clockwise Direction Cycle */}
      {frame >= 691 && frame < 857 && (
        <div
          style={{
            position: "absolute",
            top: 124,
            left: 970,
            width: 890,
            height: 490,
            backgroundColor: theme.cardBg,
            borderRadius: 14,
            opacity: interpolate(frame, [691, 715], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: EASE,
            }),
            transform: `scale(${interpolate(frame, [691, 715], [0.95, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: EASE,
            })})`,
            zIndex: 25,
          }}
        >
          <div style={{ position: "absolute", inset: 0 }}>
            <RoughBox width={890} height={490} startFrame={691} stroke={theme.pivot} strokeWidth={2.5} seed={201} />
          </div>

          <div
            style={{
              position: "relative",
              width: "100%",
              height: "100%",
              padding: "24px 28px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              zIndex: 2,
            }}
          >
            {/* Header */}
            <div>
              <div
                style={{
                  fontFamily: fonts.mono,
                  fontSize: 20,
                  fontWeight: 800,
                  letterSpacing: 2,
                  color: theme.pivot,
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                }}
              >
                <span style={{ fontSize: 24 }}>🧭</span>
                <span>THE 4-PHASE CLOCKWISE CYCLE</span>
              </div>
              <div
                style={{
                  fontFamily: fonts.sans,
                  fontSize: 16,
                  color: theme.chalkDim,
                  marginTop: 6,
                }}
              >
                Spiral order systematically cycles through four orthogonal moves:
              </div>
            </div>

            {/* 4 Direction Cards (Progressive Reveal — NO SPOILERS!) */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 16,
                flex: 1,
                margin: "14px 0",
              }}
            >
              {/* 1. RIGHT (Reveals at F725 "right,") */}
              {frame >= 725 ? (
                <div
                  style={{
                    borderRadius: 10,
                    backgroundColor: dirRightActive ? "rgba(92, 225, 230, 0.22)" : "rgba(255, 255, 255, 0.04)",
                    border: `1.5px solid ${dirRightActive ? theme.cyan : "rgba(248, 246, 240, 0.15)"}`,
                    padding: "14px 20px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    transform: `scale(${dirRightActive ? 1.02 : 1.0})`,
                    boxShadow: dirRightActive ? `0 0 16px rgba(92, 225, 230, 0.3)` : "none",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <span style={{ fontSize: 36, color: theme.cyan }}>→</span>
                    <span style={{ fontFamily: fonts.mono, fontSize: 13, color: theme.cyan, fontWeight: 700 }}>PHASE 1</span>
                  </div>
                  <div style={{ fontFamily: fonts.sans, fontSize: 22, fontWeight: 800, color: theme.chalkText, marginTop: 4 }}>
                    MOVE RIGHT
                  </div>
                  <div style={{ fontFamily: fonts.sans, fontSize: 13, color: theme.chalkDim, marginTop: 2 }}>
                    Traverse across current top boundary
                  </div>
                </div>
              ) : (
                <div
                  style={{
                    borderRadius: 10,
                    border: `1.5px dashed rgba(248, 246, 240, 0.15)`,
                    padding: "14px 20px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "rgba(248, 246, 240, 0.25)",
                    fontFamily: fonts.mono,
                    fontSize: 14,
                  }}
                >
                  · Step 1: Listening ·
                </div>
              )}

              {/* 2. DOWN (Reveals at F757 "down,") */}
              {frame >= 757 ? (
                <div
                  style={{
                    borderRadius: 10,
                    backgroundColor: dirDownActive ? "rgba(255, 209, 102, 0.22)" : "rgba(255, 255, 255, 0.04)",
                    border: `1.5px solid ${dirDownActive ? theme.pivot : "rgba(248, 246, 240, 0.15)"}`,
                    padding: "14px 20px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    transform: `scale(${dirDownActive ? 1.02 : 1.0})`,
                    boxShadow: dirDownActive ? `0 0 16px rgba(255, 209, 102, 0.3)` : "none",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <span style={{ fontSize: 36, color: theme.pivot }}>↓</span>
                    <span style={{ fontFamily: fonts.mono, fontSize: 13, color: theme.pivot, fontWeight: 700 }}>PHASE 2</span>
                  </div>
                  <div style={{ fontFamily: fonts.sans, fontSize: 22, fontWeight: 800, color: theme.chalkText, marginTop: 4 }}>
                    MOVE DOWN
                  </div>
                  <div style={{ fontFamily: fonts.sans, fontSize: 13, color: theme.chalkDim, marginTop: 2 }}>
                    Traverse down current right boundary
                  </div>
                </div>
              ) : (
                <div
                  style={{
                    borderRadius: 10,
                    border: `1.5px dashed rgba(248, 246, 240, 0.15)`,
                    padding: "14px 20px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "rgba(248, 246, 240, 0.25)",
                    fontFamily: fonts.mono,
                    fontSize: 14,
                  }}
                >
                  · Step 2: Listening ·
                </div>
              )}

              {/* 3. LEFT (Reveals at F784 "left,") */}
              {frame >= 784 ? (
                <div
                  style={{
                    borderRadius: 10,
                    backgroundColor: dirLeftActive ? "rgba(60, 229, 167, 0.22)" : "rgba(255, 255, 255, 0.04)",
                    border: `1.5px solid ${dirLeftActive ? theme.good : "rgba(248, 246, 240, 0.15)"}`,
                    padding: "14px 20px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    transform: `scale(${dirLeftActive ? 1.02 : 1.0})`,
                    boxShadow: dirLeftActive ? `0 0 16px rgba(60, 229, 167, 0.3)` : "none",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <span style={{ fontSize: 36, color: theme.good }}>←</span>
                    <span style={{ fontFamily: fonts.mono, fontSize: 13, color: theme.good, fontWeight: 700 }}>PHASE 3</span>
                  </div>
                  <div style={{ fontFamily: fonts.sans, fontSize: 22, fontWeight: 800, color: theme.chalkText, marginTop: 4 }}>
                    MOVE LEFT
                  </div>
                  <div style={{ fontFamily: fonts.sans, fontSize: 13, color: theme.chalkDim, marginTop: 2 }}>
                    Traverse across current bottom boundary
                  </div>
                </div>
              ) : (
                <div
                  style={{
                    borderRadius: 10,
                    border: `1.5px dashed rgba(248, 246, 240, 0.15)`,
                    padding: "14px 20px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "rgba(248, 246, 240, 0.25)",
                    fontFamily: fonts.mono,
                    fontSize: 14,
                  }}
                >
                  · Step 3: Listening ·
                </div>
              )}

              {/* 4. UP (Reveals at F807 "up") */}
              {frame >= 807 ? (
                <div
                  style={{
                    borderRadius: 10,
                    backgroundColor: dirUpActive ? "rgba(216, 180, 226, 0.22)" : "rgba(255, 255, 255, 0.04)",
                    border: `1.5px solid ${dirUpActive ? theme.purple : "rgba(248, 246, 240, 0.15)"}`,
                    padding: "14px 20px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    transform: `scale(${dirUpActive ? 1.02 : 1.0})`,
                    boxShadow: dirUpActive ? `0 0 16px rgba(216, 180, 226, 0.3)` : "none",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <span style={{ fontSize: 36, color: theme.purple }}>↑</span>
                    <span style={{ fontFamily: fonts.mono, fontSize: 13, color: theme.purple, fontWeight: 700 }}>PHASE 4</span>
                  </div>
                  <div style={{ fontFamily: fonts.sans, fontSize: 22, fontWeight: 800, color: theme.chalkText, marginTop: 4 }}>
                    MOVE UP
                  </div>
                  <div style={{ fontFamily: fonts.sans, fontSize: 13, color: theme.chalkDim, marginTop: 2 }}>
                    Traverse up current left boundary
                  </div>
                </div>
              ) : (
                <div
                  style={{
                    borderRadius: 10,
                    border: `1.5px dashed rgba(248, 246, 240, 0.15)`,
                    padding: "14px 20px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "rgba(248, 246, 240, 0.25)",
                    fontFamily: fonts.mono,
                    fontSize: 14,
                  }}
                >
                  · Step 4: Listening ·
                </div>
              )}
            </div>

            {/* Loop Continuity Banner (Reveals at F845 "and then repeats") */}
            {frame >= 845 && (
              <div
                style={{
                  padding: "12px 18px",
                  borderRadius: 8,
                  backgroundColor: "rgba(255, 209, 102, 0.18)",
                  border: `1.5px solid ${theme.pivot}`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 12,
                  boxShadow: `0 0 16px rgba(255, 209, 102, 0.25)`,
                }}
              >
                <span style={{ fontSize: 20, color: theme.pivot }}>🔄</span>
                <span style={{ fontFamily: fonts.sans, fontSize: 16, fontWeight: 800, color: theme.pivot, letterSpacing: 1 }}>
                  REPEATING INVARIANT: RIGHT ➔ DOWN ➔ LEFT ➔ UP ➔ REPEAT
                </span>
              </div>
            )}
          </div>
        </div>
      )}

      {/* PHASE B (F857..F1756): Beats 08–15 — When Should We Turn? (The Two Causes) */}
      {frame >= 857 && frame < 1757 && (
        <div
          style={{
            position: "absolute",
            top: 124,
            left: 970,
            width: 890,
            height: 490,
            backgroundColor: theme.cardBg,
            borderRadius: 14,
            opacity: interpolate(frame, [857, 880], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: EASE,
            }),
            zIndex: 25,
          }}
        >
          <div style={{ position: "absolute", inset: 0 }}>
            <RoughBox
              width={890}
              height={490}
              startFrame={857}
              stroke={isAlreadyVisitedFlash || isOutsideDetected ? theme.warn : theme.pivot}
              strokeWidth={2.4}
              seed={204}
            />
          </div>

          <div
            style={{
              position: "relative",
              width: "100%",
              height: "100%",
              padding: "24px 28px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              zIndex: 2,
            }}
          >
            {/* Header */}
            <div>
              <div
                style={{
                  fontFamily: fonts.mono,
                  fontSize: 20,
                  fontWeight: 800,
                  letterSpacing: 2,
                  color: theme.pivot,
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                }}
              >
                <span style={{ fontSize: 24 }}>❓</span>
                <span>WHEN SHOULD WE TURN?</span>
              </div>
              <div style={{ fontFamily: fonts.sans, fontSize: 16, color: theme.chalkDim, marginTop: 6 }}>
                Probe one step ahead before making any move:
              </div>
            </div>

            {/* CAUSE 1: Outside Grid (F976+) */}
            {frame >= 976 ? (
              <div
                style={{
                  padding: "14px 20px",
                  borderRadius: 10,
                  backgroundColor: isOutsideDetected ? "rgba(255, 118, 117, 0.22)" : "rgba(255, 255, 255, 0.04)",
                  border: `1.5px solid ${isOutsideDetected ? theme.warn : "rgba(248, 246, 240, 0.15)"}`,
                  boxShadow: isOutsideDetected ? `0 0 16px rgba(255, 118, 117, 0.35)` : "none",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <span style={{ fontSize: 22 }}>❌</span>
                  <span style={{ fontFamily: fonts.sans, fontSize: 18, fontWeight: 800, color: isOutsideDetected ? theme.warn : theme.chalkText }}>
                    CAUSE 1: NEXT POSITION IS OUTSIDE MATRIX
                  </span>
                </div>
                <div style={{ fontFamily: fonts.mono, fontSize: 14, color: theme.chalkDim, marginTop: 4 }}>
                  Next col exceeds matrix boundary (c &gt;= n) ➔ Cannot advance straight!
                </div>
                <div style={{ fontFamily: fonts.mono, fontSize: 14, color: isOutsideDetected ? theme.warn : theme.pivot, marginTop: 4, fontWeight: 700 }}>
                  ➔ Turn 90° Clockwise: RIGHT ➔ DOWN
                </div>
              </div>
            ) : (
              <div
                style={{
                  padding: "14px 20px",
                  borderRadius: 10,
                  border: `1.5px dashed rgba(248, 246, 240, 0.15)`,
                  color: "rgba(248, 246, 240, 0.25)",
                  fontFamily: fonts.mono,
                  fontSize: 14,
                  textAlign: "center",
                }}
              >
                · Cause 1: Evaluating boundary condition... ·
              </div>
            )}

            {/* CAUSE 2: Already Visited (F1205+) */}
            {frame >= 1205 ? (
              <div
                style={{
                  padding: "14px 20px",
                  borderRadius: 10,
                  backgroundColor: isAlreadyVisitedFlash ? "rgba(255, 118, 117, 0.24)" : "rgba(255, 255, 255, 0.04)",
                  border: `1.5px solid ${isAlreadyVisitedFlash ? theme.warn : "rgba(248, 246, 240, 0.15)"}`,
                  boxShadow: isAlreadyVisitedFlash ? `0 0 16px rgba(255, 118, 117, 0.35)` : "none",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <span style={{ fontSize: 22 }}>⚠️</span>
                  <span style={{ fontFamily: fonts.sans, fontSize: 18, fontWeight: 800, color: isAlreadyVisitedFlash ? theme.warn : theme.chalkText }}>
                    CAUSE 2: NEXT POSITION IS ALREADY VISITED
                  </span>
                </div>
                <div style={{ fontFamily: fonts.mono, fontSize: 14, color: theme.chalkDim, marginTop: 4 }}>
                  Next cell (0, 0) is inside matrix, but already in visited table!
                </div>
                <div style={{ fontFamily: fonts.mono, fontSize: 14, color: isAlreadyVisitedFlash ? theme.warn : theme.pivot, marginTop: 4, fontWeight: 700 }}>
                  ➔ Turn 90° Clockwise: UP ➔ RIGHT
                </div>
              </div>
            ) : (
              <div
                style={{
                  padding: "14px 20px",
                  borderRadius: 10,
                  border: `1.5px dashed rgba(248, 246, 240, 0.15)`,
                  color: "rgba(248, 246, 240, 0.25)",
                  fontFamily: fonts.mono,
                  fontSize: 14,
                  textAlign: "center",
                }}
              >
                · Cause 2: Evaluating visited state... ·
              </div>
            )}

            {/* MASTER RULE (F1442+) */}
            {frame >= 1442 ? (
              <div
                style={{
                  padding: "12px 18px",
                  borderRadius: 8,
                  backgroundColor: "rgba(255, 209, 102, 0.2)",
                  border: `1.5px solid ${theme.pivot}`,
                  textAlign: "center",
                  boxShadow: `0 0 16px rgba(255, 209, 102, 0.25)`,
                }}
              >
                <div style={{ fontFamily: fonts.mono, fontSize: 15, fontWeight: 900, color: theme.pivot }}>
                  ⚡ MASTER METHOD 1 TURNING RULE:
                </div>
                <div style={{ fontFamily: fonts.sans, fontSize: 17, fontWeight: 800, color: theme.chalkText, marginTop: 2 }}>
                  TURN IF <span style={{ color: theme.warn }}>OUTSIDE MATRIX</span> OR <span style={{ color: theme.warn }}>ALREADY VISITED</span>
                </div>
              </div>
            ) : (
              <div style={{ height: 44 }} />
            )}
          </div>
        </div>
      )}

      {/* PHASE C (F1757..F2128): Beats 16–17 — Method 1 State Variables & Trace Ready */}
      {frame >= 1757 && (
        <div
          style={{
            position: "absolute",
            top: 124,
            left: 970,
            width: 890,
            height: 490,
            backgroundColor: theme.cardBg,
            borderRadius: 14,
            opacity: interpolate(frame, [1757, 1780], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: EASE,
            }),
            zIndex: 25,
          }}
        >
          <div style={{ position: "absolute", inset: 0 }}>
            <RoughBox width={890} height={490} startFrame={1757} stroke={theme.cyan} strokeWidth={2.4} seed={205} />
          </div>

          <div
            style={{
              position: "relative",
              width: "100%",
              height: "100%",
              padding: "24px 28px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              zIndex: 2,
            }}
          >
            {/* Header */}
            <div>
              <div
                style={{
                  fontFamily: fonts.mono,
                  fontSize: 20,
                  fontWeight: 800,
                  letterSpacing: 2,
                  color: theme.cyan,
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                }}
              >
                <span style={{ fontSize: 24 }}>📦</span>
                <span>METHOD 1: THREE CORE STATE VARIABLES</span>
              </div>
              <div style={{ fontFamily: fonts.sans, fontSize: 16, color: theme.chalkDim, marginTop: 6 }}>
                Everything needed to maintain the simulation:
              </div>
            </div>

            {/* 3 State Rows */}
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {/* 1. POSITION */}
              <div
                style={{
                  padding: "12px 18px",
                  borderRadius: 8,
                  backgroundColor: "rgba(255, 209, 102, 0.12)",
                  border: `1.5px solid ${theme.pivot}`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <span style={{ fontFamily: fonts.mono, fontSize: 16, fontWeight: 700, color: theme.chalkText }}>
                  📍 1. CURRENT POSITION:
                </span>
                <span style={{ fontFamily: fonts.code, fontSize: 18, fontWeight: 800, color: theme.pivot }}>
                  (r, c) = (0, 0)
                </span>
              </div>

              {/* 2. DIRECTION */}
              <div
                style={{
                  padding: "12px 18px",
                  borderRadius: 8,
                  backgroundColor: "rgba(92, 225, 230, 0.12)",
                  border: `1.5px solid ${theme.cyan}`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <span style={{ fontFamily: fonts.mono, fontSize: 16, fontWeight: 700, color: theme.chalkText }}>
                  🧭 2. CURRENT DIRECTION:
                </span>
                <span style={{ fontFamily: fonts.code, fontSize: 18, fontWeight: 800, color: theme.cyan }}>
                  idx = 0 (RIGHT)
                </span>
              </div>

              {/* 3. VISITED MATRIX */}
              <div
                style={{
                  padding: "12px 18px",
                  borderRadius: 8,
                  backgroundColor: "rgba(60, 229, 167, 0.12)",
                  border: `1.5px solid ${theme.good}`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <span style={{ fontFamily: fonts.mono, fontSize: 16, fontWeight: 700, color: theme.chalkText }}>
                  📋 3. VISITED MATRIX:
                </span>
                <span style={{ fontFamily: fonts.code, fontSize: 18, fontWeight: 800, color: theme.good }}>
                  visited[5][6] (all False)
                </span>
              </div>
            </div>

            {/* Trace Ready Prompt (F1973+) */}
            {frame >= 1973 ? (
              <div
                style={{
                  padding: "12px 18px",
                  borderRadius: 8,
                  backgroundColor: "rgba(60, 229, 167, 0.18)",
                  border: `1.5px solid ${theme.good}`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 12,
                  boxShadow: `0 0 16px rgba(60, 229, 167, 0.25)`,
                }}
              >
                <span style={{ fontSize: 20, color: theme.good }}>🚀</span>
                <span style={{ fontFamily: fonts.sans, fontSize: 16, fontWeight: 800, color: theme.good }}>
                  READY FOR SCENE 03: FULL STEP-BY-STEP TRACE!
                </span>
              </div>
            ) : (
              <div style={{ height: 46 }} />
            )}
          </div>
        </div>
      )}

      {/* =====================================================================
          DIMENSION BRACES (m rows & n cols) — Beats 01–04
         ===================================================================== */}
      {/* Top Column Brace (n = 6) */}
      {frame >= 146 && frame < 320 && (
        <div
          style={{
            position: "absolute",
            top: gridTop - 46,
            left: gridLeft,
            width: gridWidth,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            opacity: interpolate(frame, [146, 170], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: EASE,
            }),
            zIndex: 20,
          }}
        >
          <div
            style={{
              fontFamily: fonts.sans,
              fontSize: 19,
              fontWeight: 800,
              color: theme.cyan,
              letterSpacing: 2,
              marginBottom: 4,
            }}
          >
            n = 6 COLUMNS
          </div>
          <div
            style={{
              width: "100%",
              height: 10,
              borderTop: `2.5px solid ${theme.cyan}`,
              borderLeft: `2.5px solid ${theme.cyan}`,
              borderRight: `2.5px solid ${theme.cyan}`,
            }}
          />
        </div>
      )}

      {/* Left Row Brace (m = 5) */}
      {frame >= 103 && frame < 320 && (
        <div
          style={{
            position: "absolute",
            top: gridTop,
            left: gridLeft - 75,
            height: gridHeight,
            display: "flex",
            alignItems: "center",
            opacity: interpolate(frame, [103, 125], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: EASE,
            }),
            zIndex: 20,
          }}
        >
          <div
            style={{
              fontFamily: fonts.sans,
              fontSize: 19,
              fontWeight: 800,
              color: theme.pivot,
              letterSpacing: 2,
              marginRight: 14,
              writingMode: "vertical-rl",
              transform: "rotate(180deg)",
              textAlign: "center",
            }}
          >
            m = 5 ROWS
          </div>
          <div
            style={{
              height: "100%",
              width: 10,
              borderLeft: `2.5px solid ${theme.pivot}`,
              borderTop: `2.5px solid ${theme.pivot}`,
              borderBottom: `2.5px solid ${theme.pivot}`,
            }}
          />
        </div>
      )}

      {/* =====================================================================
          CENTER STAGE 5x6 MESHGRID CONTAINER (X: 568, Y: 150)
         ===================================================================== */}
      <div
        style={{
          position: "absolute",
          top: gridTop,
          left: gridLeft,
          zIndex: 10,
        }}
      >
        <MeshGrid
          rows={rows}
          cols={cols}
          cellWidth={cellWidth}
          cellHeight={cellHeight}
          stroke={theme.chalkText}
          strokeWidth={2.5}
          outerStrokeWidth={3.5}
          showColRulers={showValues}
          showRowRulers={showValues}
          rulerColor={theme.cyan}
          renderCell={({ row, col }) => {
            const val = MATRIX_VALUES[row][col];

            // Outer layer boundary check (row 0, row 4, col 0, col 5)
            const isOuter = row === 0 || row === 4 || col === 0 || col === 5;

            // Cell states
            const isCell6 = row === 0 && col === 5;
            const isCell7 = row === 1 && col === 0;
            const isCell1 = row === 0 && col === 0;

            // In Beats 12-14: outer perimeter is hypothetically dimmed as visited
            const isDimmed = isOuterDoneDemo && isOuter && !(isCell7 && isInsideQuery) && !isTraceReady;

            // In Beat 14: cell (0, 0) flashes warning visited
            const isCell1Warning = isAlreadyVisitedFlash && isCell1;

            // Cell highlight color
            let cellColor: string = theme.chalkText;
            let bgColor = "transparent";
            let borderColor = "transparent";

            if (!showValues) {
              return (
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: fonts.mono,
                    fontSize: 20,
                    color: "rgba(248, 246, 240, 0.2)",
                  }}
                >
                  ·
                </div>
              );
            }

            if (isDimmed) {
              cellColor = "rgba(60, 229, 167, 0.55)";
              bgColor = "rgba(60, 229, 167, 0.08)";
            }

            if (isCell6 && isMovingRightDemo) {
              cellColor = theme.pivot;
              bgColor = "rgba(255, 209, 102, 0.22)";
              borderColor = theme.pivot;
            }

            if (isCell7 && isInsideQuery) {
              cellColor = theme.pivot;
              bgColor = "rgba(255, 209, 102, 0.22)";
              borderColor = theme.pivot;
            }

            if (isCell1Warning) {
              cellColor = theme.warn;
              bgColor = "rgba(255, 118, 117, 0.28)";
              borderColor = theme.warn;
            }

            if (isTraceReady && isCell1) {
              cellColor = theme.good;
              bgColor = "rgba(60, 229, 167, 0.25)";
              borderColor = theme.good;
            }

            return (
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: bgColor,
                  border: borderColor !== "transparent" ? `2px solid ${borderColor}` : "none",
                  borderRadius: 4,
                  position: "relative",
                }}
              >
                <span
                  style={{
                    fontFamily: fonts.mono,
                    fontSize: 32,
                    fontWeight: 700,
                    color: cellColor,
                  }}
                >
                  {val}
                </span>

                {/* Sub-label for (r, c) on active demonstration cells */}
                {(isCell6 && isMovingRightDemo) && (
                  <span style={{ position: "absolute", bottom: 4, fontFamily: fonts.code, fontSize: 11, color: theme.pivot }}>
                    r:0, c:5
                  </span>
                )}
                {(isCell7 && isInsideQuery) && (
                  <span style={{ position: "absolute", bottom: 4, fontFamily: fonts.code, fontSize: 11, color: theme.pivot }}>
                    r:1, c:0
                  </span>
                )}
                {isCell1Warning && (
                  <span style={{ position: "absolute", top: 4, right: 4, fontSize: 13 }}>⚠️</span>
                )}
                {isDimmed && (
                  <span style={{ position: "absolute", top: 4, right: 4, fontSize: 12, color: theme.good }}>✓</span>
                )}
              </div>
            );
          }}
        />

        {/* Turn Cause 1: Direction Probe Arrow at Cell (0, 5) = 6 */}
        {/* Cell (0, 5) is at X: 80 + 5 * 104 = 600, center is 652. Y: 36 + 41 = 77 */}
        {isMovingRightDemo && (
          <div
            style={{
              position: "absolute",
              top: (showValues ? 36 : 0) + cellHeight / 2 - 14,
              left: rulerWidth + 5 * cellWidth + cellWidth / 2 - 14,
              width: 28,
              height: 28,
              transform: `rotate(${arrowAngle}deg)`,
              transformOrigin: "center center",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              pointerEvents: "none",
              zIndex: 30,
            }}
          >
            <span style={{ fontSize: 30, color: isTurnedDown ? theme.pivot : theme.good, fontWeight: 900 }}>➔</span>
          </div>
        )}

        {/* Out-Of-Bounds Ghost Cell at Column 6 (X: 80 + 6 * 104 + 10 = 714, Y: 36) */}
        {isOutsideDetected && (
          <div
            style={{
              position: "absolute",
              top: showValues ? 36 : 0,
              left: rulerWidth + 6 * cellWidth + 12,
              width: cellWidth - 4,
              height: cellHeight,
              border: `2px dashed ${theme.warn}`,
              borderRadius: 6,
              backgroundColor: "rgba(255, 118, 117, 0.16)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 30,
              boxShadow: "0 0 16px rgba(255, 118, 117, 0.4)",
            }}
          >
            <span style={{ fontSize: 20 }}>❌</span>
            <span style={{ fontFamily: fonts.code, fontSize: 12, fontWeight: 700, color: theme.warn }}>
              c=6 ≥ n
            </span>
            <span style={{ fontFamily: fonts.sans, fontSize: 10, fontWeight: 800, color: theme.warn, letterSpacing: 1 }}>
              OUT OF BOUNDS
            </span>
          </div>
        )}

        {/* Turn Cause 2: Upward Probe Arrow at Cell (1, 0) = 7 targeting Cell (0, 0) = 1 */}
        {/* Cell (1, 0) is at X: 80 + 52 = 132. Y: 36 + 82 + 41 = 159 */}
        {isInsideQuery && (
          <div
            style={{
              position: "absolute",
              top: (showValues ? 36 : 0) + cellHeight + cellHeight / 2 - 20,
              left: rulerWidth + cellWidth / 2 - 14,
              width: 28,
              height: 28,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              pointerEvents: "none",
              zIndex: 30,
            }}
          >
            <span style={{ fontSize: 32, color: isAlreadyVisitedFlash ? theme.warn : theme.good, transform: "rotate(-90deg)" }}>
              ➔
            </span>
          </div>
        )}
      </div>

      {/* =====================================================================
          BOTTOM SECTION: CALLOUTS / CONTRACT / RULES (Y: 655–740)
          Zero-Collision Clearance: 60px below grid bottom (Y: 595)
         ===================================================================== */}

      {/* Beat 04 (F226..F319): Non-Square Rectangular Allowed Card */}
      {frame >= 226 && frame < 320 && (
        <div
          style={{
            position: "absolute",
            top: 615,
            left: 560,
            width: 800,
            height: 64,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: theme.cardBg,
            borderRadius: 10,
            opacity: interpolate(frame, [226, 245], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: EASE,
            }),
            zIndex: 25,
          }}
        >
          <RoughBox width={800} height={64} startFrame={226} stroke={theme.pivot} strokeWidth={2.2} seed={110} />
          <div
            style={{
              position: "absolute",
              fontFamily: fonts.sans,
              fontSize: 22,
              fontWeight: 800,
              letterSpacing: 2,
              color: theme.pivot,
              display: "flex",
              alignItems: "center",
              gap: 14,
            }}
          >
            <span>📐</span>
            <span>NOT NECESSARILY SQUARE — m ≠ n IS FULLY VALID</span>
          </div>
        </div>
      )}

      {/* Beat 06 (F445..F670): Output Contract Track */}
      {frame >= 445 && frame < 670 && (
        <div
          style={{
            position: "absolute",
            top: 615,
            left: 510,
            width: 900,
            height: 68,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: theme.cardBg,
            borderRadius: 10,
            opacity: interpolate(frame, [445, 470], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: EASE,
            }),
            zIndex: 25,
          }}
        >
          <RoughBox width={900} height={68} startFrame={445} stroke={theme.good} strokeWidth={2.4} seed={112} />
          <div
            style={{
              position: "absolute",
              display: "flex",
              alignItems: "center",
              gap: 24,
            }}
          >
            <div
              style={{
                fontFamily: fonts.sans,
                fontSize: 19,
                fontWeight: 800,
                letterSpacing: 1.5,
                color: theme.good,
              }}
            >
              📥 OUTPUT LIST:
            </div>
            <div
              style={{
                fontFamily: fonts.mono,
                fontSize: 18,
                fontWeight: 700,
                color: theme.chalkText,
                backgroundColor: "transparent",
                padding: "6px 18px",
                borderRadius: 6,
                border: `1px dashed ${theme.chalkDim}`,
              }}
            >
              [ ... ] — exactly 30 values in spiral order
            </div>
            <div
              style={{
                fontFamily: fonts.code,
                fontSize: 15,
                color: theme.pivot,
                fontWeight: 700,
              }}
            >
              TOTAL = m × n = 30
            </div>
          </div>
        </div>
      )}

      {/* Captions */}
      <Captions words={captionWords} />
    </div>
  );
};
