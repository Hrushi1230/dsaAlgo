/**
 * Scene04Method1Code.tsx — Scene 04 · Method 1 Code Walkthrough: Extra Destination Matrix
 * Rotate Image (LeetCode 48) · Pattern 01 — Arrays & Hashing
 *
 * Implements Method 1 Python Code Walkthrough:
 * - Left Stage (X: 80..1060, Y: 150..725):
 *   - Canonical ChalkCodeEditorV2 with 12 syntax-highlighted Python lines
 *   - Character-by-character typing synchronized to exact audio anchors
 *   - Dynamic active line tracking and hot line highlighting
 * - Right Stage (X: 1100..1840, Y: 150..725):
 *   - Wrapped with authentic RoughBox chalk borders (no generic CSS borders)
 *   - ChalkDust burst particle accents on key revelation moments
 *   - STRICT ZERO-SPOILER PROGRESSIVE REVEALS:
 *     - F0..F244: Step 1 (Allocation & RAM Contract only, NO formula)
 *     - F260..F414: Step 2 (Nested Loops traversal, NO formula)
 *     - F415..F957: Step 3 (Formula unlocks ONLY when spoken, with ChalkDust burst)
 *     - F958..F1183: Step 4 (Copy-Back active)
 *     - F1184..F1239: Complexity Intro (Time pending, Space pending)
 *     - F1240..F1316: Time operations (N x N cells)
 *     - F1317+: O(N²) Time revealed with ChalkDust
 *     - F1428..F1558: Space analysis (N x N extra buffer)
 *     - F1559+: O(N²) Space revealed in red
 *     - F1655+: LeetCode Constraint Violation alert unlocks
 *     - F1825+: Red strikethrough on Line 4 + Method 2 hook
 * - Captions at bottom (Y: 960..1010) with 235px breathing clearance
 *
 * Total Duration: 1,937 frames @ 30fps (64.560s) strictly from sync/04-method1-code.json
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
import { ChalkCodeEditorV2, ChalkCodeLine } from "../../../../kit/components/ChalkCodeEditorV2";
import { Captions, CaptionWord } from "../../../../kit/components/Captions";
import { RoughBox } from "../../../../kit/components/RoughBox";
import { ChalkDust } from "../../../../kit/components/ChalkDust";
import syncData from "../sync/04-method1-code.json";

const theme = {
  ...baseTheme,
  gold: baseTheme.pivot,
  chalkSub: baseTheme.chalkDim,
  chalkBorder: baseTheme.cardBorder,
};

// ---------------------------------------------------------------------------
// Word-level Caption Timings (from sync/04-method1-code.json)
// ---------------------------------------------------------------------------
const captionWords: CaptionWord[] = (syncData.words || []).map((w: any) => ({
  word: w.word,
  start: w.start_ms / 1000,
  end: w.end_ms / 1000,
}));

// ---------------------------------------------------------------------------
// Code Lines Definition with Character Reveal Frames
// ---------------------------------------------------------------------------
const CODE_LINES: ChalkCodeLine[] = [
  {
    num: 1,
    text: "class Solution:",
    indent: 0,
    startFrame: 0,
    endFrame: 14,
    tokens: [
      { text: "class ", color: theme.accent },
      { text: "Solution", color: theme.cyan },
      { text: ":", color: theme.chalkText },
    ],
  },
  {
    num: 2,
    text: "    def rotate(self, matrix: list[list[int]]) -> None:",
    indent: 1,
    startFrame: 0,
    endFrame: 14,
    tokens: [
      { text: "def ", color: theme.accent },
      { text: "rotate", color: theme.cyan },
      { text: "(self, matrix: list[list[int]]) -> ", color: theme.chalkText },
      { text: "None", color: theme.gold },
      { text: ":", color: theme.chalkText },
    ],
  },
  {
    num: 3,
    text: "        n = len(matrix)",
    indent: 2,
    startFrame: 32,
    endFrame: 64,
    tokens: [
      { text: "n", color: theme.cyan },
      { text: " = ", color: theme.chalkText },
      { text: "len", color: theme.accent },
      { text: "(matrix)", color: theme.chalkText },
    ],
  },
  {
    num: 4,
    text: "        result = [[0] * n for _ in range(n)]",
    indent: 2,
    startFrame: 64,
    endFrame: 244,
    tokens: [
      { text: "result", color: theme.good },
      { text: " = [[", color: theme.chalkText },
      { text: "0", color: theme.gold },
      { text: "] * n ", color: theme.chalkText },
      { text: "for ", color: theme.accent },
      { text: "_", color: theme.chalkText },
      { text: " in ", color: theme.accent },
      { text: "range", color: theme.accent },
      { text: "(n)]", color: theme.chalkText },
    ],
  },
  {
    num: 5,
    text: "        ",
    indent: 2,
    startFrame: 245,
    endFrame: 245,
    tokens: [],
  },
  {
    num: 6,
    text: "        for r in range(n):",
    indent: 2,
    startFrame: 260,
    endFrame: 330,
    tokens: [
      { text: "for ", color: theme.accent },
      { text: "r", color: theme.gold },
      { text: " in ", color: theme.accent },
      { text: "range", color: theme.accent },
      { text: "(n):", color: theme.chalkText },
    ],
  },
  {
    num: 7,
    text: "            for c in range(n):",
    indent: 3,
    startFrame: 330,
    endFrame: 403,
    tokens: [
      { text: "for ", color: theme.accent },
      { text: "c", color: theme.cyan },
      { text: " in ", color: theme.accent },
      { text: "range", color: theme.accent },
      { text: "(n):", color: theme.chalkText },
    ],
  },
  {
    num: 8,
    text: "                result[c][n - 1 - r] = matrix[r][c]",
    indent: 4,
    startFrame: 415,
    endFrame: 623,
    tokens: [
      { text: "result", color: theme.good },
      { text: "[", color: theme.chalkText },
      { text: "c", color: theme.cyan },
      { text: "][", color: theme.chalkText },
      { text: "n - 1 - r", color: theme.gold },
      { text: "] = matrix[", color: theme.chalkText },
      { text: "r", color: theme.gold },
      { text: "][", color: theme.chalkText },
      { text: "c", color: theme.cyan },
      { text: "]", color: theme.chalkText },
    ],
  },
  {
    num: 9,
    text: "        ",
    indent: 2,
    startFrame: 940,
    endFrame: 940,
    tokens: [],
  },
  {
    num: 10,
    text: "        for r in range(n):",
    indent: 2,
    startFrame: 958,
    endFrame: 1020,
    tokens: [
      { text: "for ", color: theme.accent },
      { text: "r", color: theme.gold },
      { text: " in ", color: theme.accent },
      { text: "range", color: theme.accent },
      { text: "(n):", color: theme.chalkText },
    ],
  },
  {
    num: 11,
    text: "            for c in range(n):",
    indent: 3,
    startFrame: 1020,
    endFrame: 1080,
    tokens: [
      { text: "for ", color: theme.accent },
      { text: "c", color: theme.cyan },
      { text: " in ", color: theme.accent },
      { text: "range", color: theme.accent },
      { text: "(n):", color: theme.chalkText },
    ],
  },
  {
    num: 12,
    text: "                matrix[r][c] = result[r][c]",
    indent: 4,
    startFrame: 1080,
    endFrame: 1183,
    tokens: [
      { text: "matrix", color: theme.cyan },
      { text: "[r][c] = ", color: theme.chalkText },
      { text: "result", color: theme.good },
      { text: "[r][c]", color: theme.chalkText },
    ],
  },
];

export const Scene04Method1Code: React.FC = () => {
  const frame = useCurrentFrame();

  // Entrance spring animations
  const editorEntrance = spring({
    frame,
    fps: 30,
    config: { damping: 18, stiffness: 80 },
  });

  const cardsEntrance = spring({
    frame: Math.max(0, frame - 15),
    fps: 30,
    config: { damping: 18, stiffness: 80 },
  });

  // Dynamic active line numbers
  const activeLineNums = useMemo(() => {
    if (frame < 260) return [3, 4];
    if (frame < 415) return [6, 7];
    if (frame < 812) return [8];
    if (frame < 958) return [6, 7, 8];
    if (frame < 1198) return [10, 11, 12];
    if (frame < 1428) return [6, 7]; // loop complexity
    if (frame < 1655) return [4]; // space complexity offender
    return [];
  }, [frame]);

  const hotLineNum = useMemo(() => {
    if (frame >= 415 && frame < 812) return 8; // core transformation line
    if (frame >= 1428 && frame < 1825) return 4; // space allocation offender
    return undefined;
  }, [frame]);

  const hotLineTag = useMemo(() => {
    if (frame >= 415 && frame < 812) return "CORE FORMULA";
    if (frame >= 1428 && frame < 1825) return "O(N²) ALLOCATION";
    return undefined;
  }, [frame]);

  // Determine sub-phase for top card (0..1183)
  const isAllocationStep = frame < 260;
  const isTraversalStep = frame >= 260 && frame < 415;
  const isMappingStep = frame >= 415 && frame < 958;
  const isCopyBackStep = frame >= 958 && frame < 1184;

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
      <Audio src={staticFile("audio/014/04-method1-code.mp3")} />

      {/* ChalkDust Burst Accents */}
      <ChalkDust x={1470} y={260} start={415} color={theme.gold} count={16} radius={65} seed={11} />
      <ChalkDust x={1470} y={560} start={958} color={theme.good} count={14} radius={55} seed={12} />
      <ChalkDust x={1720} y={230} start={1317} color={theme.good} count={16} radius={50} seed={13} />
      <ChalkDust x={1720} y={320} start={1559} color={theme.bad} count={18} radius={55} seed={14} />
      <ChalkDust x={1470} y={560} start={1655} color={theme.bad} count={20} radius={70} seed={15} />
      <ChalkDust x={380} y={245} start={1825} color={theme.bad} count={22} radius={65} seed={16} />

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
            LEETCODE 48 · CODE WALKTHROUGH
          </div>
        </div>

        <div style={{ display: "inline-flex", alignItems: "center", gap: 12 }}>
          <div
            style={{
              padding: "6px 18px",
              borderRadius: 8,
              backgroundColor: "rgba(76, 201, 240, 0.12)",
              border: `1.5px solid ${theme.cyan}`,
              fontSize: 16,
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
          LEFT: CHALK CODE EDITOR V2 (X: 80..1060, Y: 150..725)
          ===================================================================== */}
      <div
        style={{
          position: "absolute",
          left: 80,
          top: 150,
          width: 980,
          height: 575,
          opacity: editorEntrance,
          transform: `scale(${interpolate(editorEntrance, [0, 1], [0.96, 1.0])})`,
          zIndex: 5,
        }}
      >
        <ChalkCodeEditorV2
          lines={CODE_LINES}
          activeLineNums={activeLineNums}
          hotLineNum={hotLineNum}
          hotLineTag={hotLineTag}
          title="rotate_image_extra_matrix.py"
          language="Python 3"
          width="100%"
          height="100%"
          fontSize={17}
          lineHeight={34}
          indentWidth={22}
        />

        {/* Anchor 12 Red Strikethrough on Line 4 (F1825+) */}
        {frame >= 1825 && (
          <div
            style={{
              position: "absolute",
              left: 65,
              top: 195, // Aligned over Line 4
              width: 530,
              height: 5,
              backgroundColor: theme.bad,
              boxShadow: `0 0 14px ${theme.bad}`,
              borderRadius: 3,
              zIndex: 25,
              transform: `scaleX(${interpolate(frame, [1825, 1855], [0, 1], {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
                easing: EASE,
              })})`,
              transformOrigin: "left center",
            }}
          />
        )}
      </div>

      {/* =====================================================================
          RIGHT: EXECUTION, MEMORY & COMPLEXITY CARDS (X: 1100..1840, Y: 150..725)
          ===================================================================== */}
      <div
        style={{
          position: "absolute",
          left: 1100,
          top: 150,
          width: 740,
          height: 575,
          opacity: cardsEntrance,
          transform: `scale(${interpolate(cardsEntrance, [0, 1], [0.96, 1.0])})`,
          display: "flex",
          flexDirection: "column",
          gap: 18,
          zIndex: 5,
        }}
      >
        {/* ===================================================================
            TOP RIGHT CARD: CONTRACT & FORMULA (F0..F1183) or COMPLEXITY (F1184+)
            =================================================================== */}
        {frame < 1184 ? (
          <div
            style={{
              position: "relative",
              width: 740,
              height: 278,
              borderRadius: 14,
              backgroundColor: "rgba(17, 37, 29, 0.94)",
              overflow: "hidden",
            }}
          >
            {/* Authentic Hand-Drawn Chalk Border */}
            <div style={{ position: "absolute", top: 0, left: 0, width: 740, height: 278, pointerEvents: "none" }}>
              <RoughBox
                width={740}
                height={278}
                stroke={theme.cyan}
                strokeWidth={2}
                seed={41}
              />
            </div>

            <div
              style={{
                position: "relative",
                zIndex: 2,
                padding: "18px 24px",
                height: "100%",
                boxSizing: "border-box",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              {/* Header Row */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span
                  style={{
                    fontFamily: fonts.code,
                    fontSize: 15,
                    fontWeight: 700,
                    letterSpacing: 1.2,
                    color: theme.cyan,
                  }}
                >
                  EXECUTION CONTRACT &amp; MAPPING
                </span>
                <span
                  style={{
                    fontSize: 12,
                    fontFamily: fonts.code,
                    padding: "3px 10px",
                    borderRadius: 4,
                    backgroundColor: "rgba(76, 201, 240, 0.15)",
                    color: theme.cyan,
                    fontWeight: 700,
                  }}
                >
                  {isAllocationStep && "STEP 1 · ALLOCATION"}
                  {isTraversalStep && "STEP 2 · TRAVERSAL"}
                  {isMappingStep && "STEP 3 · TRANSFORMATION"}
                  {isCopyBackStep && "STEP 4 · COPY-BACK"}
                </span>
              </div>

              {/* Progressive Center Content: STRICT ANTI-SPOILER */}
              {isAllocationStep && (
                <div
                  style={{
                    backgroundColor: "rgba(25, 59, 45, 0.55)",
                    border: `1.5px solid ${theme.chalkLine}`,
                    borderRadius: 8,
                    padding: "14px 18px",
                    display: "flex",
                    flexDirection: "column",
                    gap: 8,
                  }}
                >
                  <div style={{ fontFamily: fonts.code, fontSize: 13, color: theme.chalkSub }}>
                    Matrix Dimensions &amp; Auxiliary Buffer:
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                    <span style={{ fontFamily: fonts.code, fontSize: 18, color: theme.cyan, fontWeight: 700 }}>
                      n = len(matrix)
                    </span>
                    <span style={{ color: theme.chalkSub }}>➔</span>
                    <span style={{ fontFamily: fonts.code, fontSize: 16, color: theme.good, fontWeight: 700 }}>
                      result[n][n] (n × n buffer)
                    </span>
                  </div>
                  <div style={{ fontFamily: fonts.code, fontSize: 13, color: theme.chalkText }}>
                    {frame >= 64
                      ? "RAM buffer allocated with zeroes. Ready for coordinate mapping."
                      : "Evaluating input matrix dimensions..."}
                  </div>
                </div>
              )}

              {isTraversalStep && (
                <div
                  style={{
                    backgroundColor: "rgba(25, 59, 45, 0.55)",
                    border: `1.5px solid ${theme.chalkLine}`,
                    borderRadius: 8,
                    padding: "14px 18px",
                    display: "flex",
                    flexDirection: "column",
                    gap: 8,
                  }}
                >
                  <div style={{ fontFamily: fonts.code, fontSize: 13, color: theme.chalkSub }}>
                    Grid Cell Traversal:
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                    <span style={{ fontFamily: fonts.code, fontSize: 17, color: theme.gold, fontWeight: 700 }}>
                      for r in range(n)
                    </span>
                    <span style={{ color: theme.chalkSub }}>×</span>
                    <span style={{ fontFamily: fonts.code, fontSize: 17, color: theme.cyan, fontWeight: 700 }}>
                      for c in range(n)
                    </span>
                  </div>
                  <div style={{ fontFamily: fonts.code, fontSize: 13, color: theme.chalkText }}>
                    Visiting every source cell (r, c) systematically from top-left to bottom-right.
                  </div>
                </div>
              )}

              {isMappingStep && (
                <div
                  style={{
                    backgroundColor: "rgba(25, 59, 45, 0.65)",
                    border: `1.5px solid ${theme.gold}`,
                    borderRadius: 8,
                    padding: "12px 18px",
                    display: "flex",
                    flexDirection: "column",
                    gap: 6,
                    boxShadow: "0 0 16px rgba(255, 209, 102, 0.15)",
                  }}
                >
                  <div style={{ fontFamily: fonts.code, fontSize: 13, color: theme.chalkSub }}>
                    Index Transformation Formula:
                  </div>
                  <div
                    style={{
                      fontFamily: fonts.code,
                      fontSize: 20,
                      fontWeight: 700,
                      color: theme.gold,
                      letterSpacing: 0.8,
                    }}
                  >
                    result[c][n - 1 - r] = matrix[r][c]
                  </div>
                  <div style={{ fontFamily: fonts.code, fontSize: 13, color: theme.chalkText }}>
                    Source (r, c) ──► Destination row <span style={{ color: theme.cyan }}>c</span>, col <span style={{ color: theme.cyan }}>n - 1 - r</span>
                  </div>
                </div>
              )}

              {isCopyBackStep && (
                <div
                  style={{
                    backgroundColor: "rgba(25, 59, 45, 0.65)",
                    border: `1.5px solid ${theme.good}`,
                    borderRadius: 8,
                    padding: "12px 18px",
                    display: "flex",
                    flexDirection: "column",
                    gap: 6,
                    boxShadow: "0 0 16px rgba(82, 183, 136, 0.18)",
                  }}
                >
                  <div style={{ fontFamily: fonts.code, fontSize: 13, color: theme.chalkSub }}>
                    Final Copy-Back Assignment:
                  </div>
                  <div
                    style={{
                      fontFamily: fonts.code,
                      fontSize: 20,
                      fontWeight: 700,
                      color: theme.good,
                      letterSpacing: 0.8,
                    }}
                  >
                    matrix[r][c] = result[r][c]
                  </div>
                  <div style={{ fontFamily: fonts.code, fontSize: 13, color: theme.chalkText }}>
                    Transfers all rotated values back into original matrix for void return.
                  </div>
                </div>
              )}

              {/* Bottom Status Row */}
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <div
                    style={{
                      width: 10,
                      height: 10,
                      borderRadius: "50%",
                      backgroundColor: frame >= 64 ? theme.good : theme.chalkSub,
                      boxShadow: frame >= 64 ? `0 0 10px ${theme.good}` : "none",
                    }}
                  />
                  <span style={{ fontFamily: fonts.code, fontSize: 13, color: theme.chalkText }}>
                    {frame >= 64 ? "result[N][N] Allocated in RAM" : "Waiting for allocation..."}
                  </span>
                </div>

                {frame >= 638 && frame < 958 && (
                  <span
                    style={{
                      fontSize: 11,
                      fontFamily: fonts.code,
                      fontWeight: 700,
                      color: theme.gold,
                      border: `1px solid ${theme.gold}`,
                      padding: "2px 8px",
                      borderRadius: 4,
                      backgroundColor: "rgba(255, 209, 102, 0.15)",
                    }}
                  >
                    ✓ PROVEN GEOMETRY
                  </span>
                )}

                {frame >= 958 && (
                  <span
                    style={{
                      fontSize: 11,
                      fontFamily: fonts.code,
                      fontWeight: 700,
                      color: theme.good,
                      border: `1px solid ${theme.good}`,
                      padding: "2px 8px",
                      borderRadius: 4,
                      backgroundColor: "rgba(82, 183, 136, 0.15)",
                    }}
                  >
                    ✓ VOID RETURN MUTATION
                  </span>
                )}
              </div>
            </div>
          </div>
        ) : (
          /* ===================================================================
              BIG-O COMPLEXITY BREAKDOWN (F1184+)
              =================================================================== */
          <div
            style={{
              position: "relative",
              width: 740,
              height: 278,
              borderRadius: 14,
              backgroundColor: "rgba(17, 37, 29, 0.94)",
              overflow: "hidden",
            }}
          >
            <div style={{ position: "absolute", top: 0, left: 0, width: 740, height: 278, pointerEvents: "none" }}>
              <RoughBox
                width={740}
                height={278}
                stroke={theme.gold}
                strokeWidth={2}
                seed={43}
              />
            </div>

            <div
              style={{
                position: "relative",
                zIndex: 2,
                padding: "16px 22px",
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
                    color: theme.gold,
                  }}
                >
                  COMPLEXITY ANALYSIS
                </span>
                <span
                  style={{
                    fontSize: 12,
                    fontFamily: fonts.code,
                    padding: "2px 8px",
                    borderRadius: 4,
                    backgroundColor: "rgba(255, 209, 102, 0.15)",
                    color: theme.gold,
                    fontWeight: 700,
                  }}
                >
                  BIG-O BREAKDOWN
                </span>
              </div>

              {/* Time Complexity Row: STRICT ANTI-SPOILER */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  backgroundColor: "rgba(25, 59, 45, 0.55)",
                  border: `1.5px solid ${frame >= 1317 ? theme.good : theme.chalkLine}`,
                  borderRadius: 8,
                  padding: "10px 16px",
                }}
              >
                <div>
                  <div style={{ fontFamily: fonts.code, fontSize: 13, color: frame >= 1240 ? theme.cyan : theme.chalkSub }}>
                    Time Complexity (Cell Processing)
                  </div>
                  <div style={{ fontSize: 13, color: theme.chalkText }}>
                    {frame >= 1240
                      ? "N² cell placements + N² copy-back = 2N² operations"
                      : "Evaluating nested loops..."}
                  </div>
                </div>
                <div
                  style={{
                    fontFamily: fonts.code,
                    fontSize: 22,
                    fontWeight: 700,
                    color: frame >= 1317 ? theme.good : theme.chalkSub,
                  }}
                >
                  {frame >= 1317 ? "O(N²)" : "..."}
                </div>
              </div>

              {/* Space Complexity Row: STRICT ANTI-SPOILER */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  backgroundColor: frame >= 1559 ? "rgba(45, 18, 22, 0.6)" : "rgba(25, 59, 45, 0.55)",
                  border: `1.5px solid ${frame >= 1559 ? theme.bad : theme.chalkLine}`,
                  borderRadius: 8,
                  padding: "10px 16px",
                }}
              >
                <div>
                  <div style={{ fontFamily: fonts.code, fontSize: 13, color: frame >= 1559 ? theme.bad : frame >= 1428 ? theme.gold : theme.chalkSub }}>
                    Auxiliary Space Complexity
                  </div>
                  <div style={{ fontSize: 13, color: theme.chalkText }}>
                    {frame >= 1428
                      ? "Allocates full result[n][n] auxiliary matrix"
                      : "Measuring RAM overhead..."}
                  </div>
                </div>
                <div
                  style={{
                    fontFamily: fonts.code,
                    fontSize: 22,
                    fontWeight: 700,
                    color: frame >= 1559 ? theme.bad : theme.chalkSub,
                  }}
                >
                  {frame >= 1559 ? "O(N²)" : "..."}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ===================================================================
            BOTTOM RIGHT CARD: ALGORITHM PHASES (F0..F1183)
            or LEETCODE IN-PLACE ALERT & METHOD 2 HOOK (F1184+)
            =================================================================== */}
        {frame < 1184 ? (
          <div
            style={{
              position: "relative",
              width: 740,
              height: 278,
              borderRadius: 14,
              backgroundColor: "rgba(17, 37, 29, 0.94)",
              overflow: "hidden",
            }}
          >
            <div style={{ position: "absolute", top: 0, left: 0, width: 740, height: 278, pointerEvents: "none" }}>
              <RoughBox
                width={740}
                height={278}
                stroke={theme.chalkLine}
                strokeWidth={1.8}
                seed={42}
              />
            </div>

            <div
              style={{
                position: "relative",
                zIndex: 2,
                padding: "16px 22px",
                height: "100%",
                boxSizing: "border-box",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <div
                style={{
                  fontFamily: fonts.code,
                  fontSize: 15,
                  fontWeight: 700,
                  color: theme.chalkText,
                  letterSpacing: 1,
                }}
              >
                ALGORITHM PHASES
              </div>

              {/* Progressive Reveal of Phases (No spoilers!) */}
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {/* Phase 1 */}
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <span
                    style={{
                      padding: "2px 8px",
                      borderRadius: 4,
                      backgroundColor: "rgba(76, 201, 240, 0.2)",
                      fontFamily: fonts.code,
                      fontSize: 12,
                      fontWeight: 700,
                      color: theme.cyan,
                    }}
                  >
                    PHASE 1
                  </span>
                  <span style={{ fontSize: 14, color: theme.chalkText }}>
                    Allocate <code>result[n][n]</code> buffer of zeroes.
                  </span>
                </div>

                {/* Phase 2: Unlocks at F260 */}
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <span
                    style={{
                      padding: "2px 8px",
                      borderRadius: 4,
                      backgroundColor: frame >= 260 ? "rgba(255, 209, 102, 0.2)" : "rgba(100, 100, 100, 0.15)",
                      fontFamily: fonts.code,
                      fontSize: 12,
                      fontWeight: 700,
                      color: frame >= 260 ? theme.gold : theme.chalkSub,
                    }}
                  >
                    PHASE 2
                  </span>
                  <span style={{ fontSize: 14, color: frame >= 260 ? theme.chalkText : theme.chalkSub }}>
                    {frame >= 260 ? (
                      <>Map every <code>(r, c)</code> to <code>(c, n - 1 - r)</code> safely.</>
                    ) : (
                      "Waiting for nested loops..."
                    )}
                  </span>
                </div>

                {/* Phase 3: Unlocks at F958 */}
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <span
                    style={{
                      padding: "2px 8px",
                      borderRadius: 4,
                      backgroundColor: frame >= 958 ? "rgba(82, 183, 136, 0.2)" : "rgba(100, 100, 100, 0.15)",
                      fontFamily: fonts.code,
                      fontSize: 12,
                      fontWeight: 700,
                      color: frame >= 958 ? theme.good : theme.chalkSub,
                    }}
                  >
                    PHASE 3
                  </span>
                  <span style={{ fontSize: 14, color: frame >= 958 ? theme.chalkText : theme.chalkSub }}>
                    {frame >= 958 ? (
                      <>Copy <code>result</code> back into <code>matrix</code> for in-place answer.</>
                    ) : (
                      "Waiting for all cells placed..."
                    )}
                  </span>
                </div>
              </div>

              <div
                style={{
                  fontSize: 12,
                  fontFamily: fonts.code,
                  color: theme.chalkSub,
                  borderTop: `1px solid ${theme.chalkLine}`,
                  paddingTop: 8,
                }}
              >
                100% Correct Output · Satisfies mathematical rotation
              </div>
            </div>
          </div>
        ) : (
          /* ===================================================================
              LEETCODE IN-PLACE ALERT & METHOD 2 HOOK (F1184+)
              =================================================================== */
          <div
            style={{
              position: "relative",
              width: 740,
              height: 278,
              borderRadius: 14,
              backgroundColor: frame >= 1655 ? "rgba(35, 14, 18, 0.95)" : "rgba(17, 37, 29, 0.94)",
              overflow: "hidden",
            }}
          >
            <div style={{ position: "absolute", top: 0, left: 0, width: 740, height: 278, pointerEvents: "none" }}>
              <RoughBox
                width={740}
                height={278}
                stroke={frame >= 1655 ? theme.bad : theme.chalkLine}
                strokeWidth={frame >= 1655 ? 2.5 : 1.8}
                seed={44}
              />
            </div>

            <div
              style={{
                position: "relative",
                zIndex: 2,
                padding: "16px 22px",
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
                    letterSpacing: 1,
                    color: frame >= 1655 ? theme.bad : theme.gold,
                  }}
                >
                  {frame >= 1655 ? "⚠️ LEETCODE CONSTRAINT VIOLATION" : "EVALUATING REQUIREMENTS"}
                </span>
                <span
                  style={{
                    fontSize: 11,
                    fontFamily: fonts.code,
                    fontWeight: 700,
                    padding: "2px 8px",
                    borderRadius: 4,
                    backgroundColor: frame >= 1655 ? "rgba(230, 57, 70, 0.2)" : "rgba(255, 209, 102, 0.15)",
                    color: frame >= 1655 ? theme.bad : theme.gold,
                  }}
                >
                  {frame >= 1655 ? "REJECTED BY GRADER" : "IN-PLACE CHECK"}
                </span>
              </div>

              {frame >= 1655 ? (
                <div
                  style={{
                    fontStyle: "italic",
                    fontSize: 13,
                    color: theme.chalkText,
                    lineHeight: 1.35,
                    borderLeft: `3px solid ${theme.bad}`,
                    paddingLeft: 12,
                  }}
                >
                  "You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix."
                </div>
              ) : (
                <div
                  style={{
                    fontSize: 13,
                    color: theme.chalkText,
                    lineHeight: 1.35,
                    borderLeft: `3px solid ${theme.gold}`,
                    paddingLeft: 12,
                  }}
                >
                  Checking algorithm behavior against problem constraints: Does Method 1 satisfy LeetCode's in-place requirement?
                </div>
              )}

              {/* Next Step Bridge Hook */}
              <div
                style={{
                  backgroundColor: frame >= 1825 ? "rgba(25, 59, 45, 0.9)" : "rgba(17, 37, 29, 0.7)",
                  border: `1.5px solid ${frame >= 1825 ? theme.cyan : theme.chalkLine}`,
                  borderRadius: 8,
                  padding: "8px 14px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <div style={{ fontFamily: fonts.code, fontSize: 11, color: frame >= 1825 ? theme.cyan : theme.chalkSub, fontWeight: 700 }}>
                    UP NEXT: METHOD 2
                  </div>
                  <div style={{ fontFamily: fonts.code, fontSize: 13, color: frame >= 1825 ? theme.gold : theme.chalkSub, fontWeight: 700 }}>
                    Four-Way In-Place Swaps · O(1) Space
                  </div>
                </div>
                <span style={{ fontSize: 18, color: frame >= 1825 ? theme.cyan : theme.chalkSub }}>➔</span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* =====================================================================
          CAPTIONS (Y: 960..1010, bottom: 38px, strictly >= 235px below cards)
          ===================================================================== */}
      <Captions words={captionWords} />
    </div>
  );
};
