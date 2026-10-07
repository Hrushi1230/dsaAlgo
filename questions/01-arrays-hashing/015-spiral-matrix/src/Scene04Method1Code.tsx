/**
 * Scene04Method1Code.tsx — Scene 04 · Method 1 Code & Complexity
 * Spiral Matrix (LeetCode 54) · Pattern 01 — Arrays & Hashing
 *
 * Implements Method 1 (Visited Simulation) Code Walkthrough & Complexity:
 * - Left Stage (X: 80..1060, Y: 120..790):
 *   - Canonical ChalkCodeEditorV2 with 25 syntax-highlighted Python lines
 *   - Character-by-character typing synchronized to exact audio anchors
 *   - Dynamic active line tracking and hot line highlighting
 * - Right Stage (X: 1080..1840, Y: 120..790):
 *   - Wrapped with authentic RoughBox chalk borders
 *   - Phase 1 (F0..F670): Setup, Clockwise Vectors, Visited Matrix Memory Contract
 *   - Phase 2 (F671..F1725): Loop Logic & Final-Cell Guard (Trapped 30th cell analysis)
 *   - Phase 3 (F1726..F2364): Boundary Collision + Modulo Rotation Formula
 *   - Phase 4 (F2375..F3094): Complexity Analysis: O(m*n) Time vs O(m*n) Auxiliary Space
 *     followed by the Method 2 Hook ("Do we really need this visited matrix?")
 * - Captions at bottom (Y: 940..1024) with 150px breathing clearance
 *
 * Total Duration: 3,094 frames @ 30fps (103.120s) strictly from sync/04-method1-code.json
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
// Code Lines Definition with Exact Typing Windows
// ---------------------------------------------------------------------------
const CODE_LINES: ChalkCodeLine[] = [
  {
    num: 1,
    text: "def spiralOrderVisited(matrix: list[list[int]]) -> list[int]:",
    indent: 0,
    startFrame: 0,
    endFrame: 16,
    tokens: [
      { text: "def ", color: theme.accent },
      { text: "spiralOrderVisited", color: theme.cyan },
      { text: "(matrix: list[list[int]]) -> list[int]:", color: theme.chalkText },
    ],
  },
  {
    num: 2,
    text: "    m = len(matrix)",
    indent: 1,
    startFrame: 29,
    endFrame: 58,
    tokens: [
      { text: "m", color: theme.cyan },
      { text: " = ", color: theme.chalkText },
      { text: "len", color: theme.accent },
      { text: "(matrix)", color: theme.chalkText },
    ],
  },
  {
    num: 3,
    text: "    n = len(matrix[0])",
    indent: 1,
    startFrame: 59,
    endFrame: 90,
    tokens: [
      { text: "n", color: theme.cyan },
      { text: " = ", color: theme.chalkText },
      { text: "len", color: theme.accent },
      { text: "(matrix[0])", color: theme.chalkText },
    ],
  },
  {
    num: 4,
    text: "    directions = [",
    indent: 1,
    startFrame: 103,
    endFrame: 180,
    tokens: [
      { text: "directions", color: theme.gold },
      { text: " = [", color: theme.chalkText },
    ],
  },
  {
    num: 5,
    text: "        (0, 1),   # 0: right",
    indent: 2,
    startFrame: 238,
    endFrame: 260,
    tokens: [
      { text: "(0, 1),   ", color: theme.chalkText },
      { text: "# 0: right", color: theme.chalkDim },
    ],
  },
  {
    num: 6,
    text: "        (1, 0),   # 1: down",
    indent: 2,
    startFrame: 261,
    endFrame: 288,
    tokens: [
      { text: "(1, 0),   ", color: theme.chalkText },
      { text: "# 1: down", color: theme.chalkDim },
    ],
  },
  {
    num: 7,
    text: "        (0, -1),  # 2: left",
    indent: 2,
    startFrame: 289,
    endFrame: 310,
    tokens: [
      { text: "(0, -1),  ", color: theme.chalkText },
      { text: "# 2: left", color: theme.chalkDim },
    ],
  },
  {
    num: 8,
    text: "        (-1, 0),  # 3: up",
    indent: 2,
    startFrame: 311,
    endFrame: 326,
    tokens: [
      { text: "(-1, 0),  ", color: theme.chalkText },
      { text: "# 3: up", color: theme.chalkDim },
    ],
  },
  {
    num: 9,
    text: "    ]",
    indent: 1,
    startFrame: 327,
    endFrame: 335,
    tokens: [{ text: "]", color: theme.chalkText }],
  },
  {
    num: 10,
    text: "    visited = [[False] * n for _ in range(m)]",
    indent: 1,
    startFrame: 347,
    endFrame: 460,
    tokens: [
      { text: "visited", color: theme.warn },
      { text: " = [[", color: theme.chalkText },
      { text: "False", color: theme.gold },
      { text: "] * n ", color: theme.chalkText },
      { text: "for ", color: theme.accent },
      { text: "_", color: theme.chalkText },
      { text: " in ", color: theme.accent },
      { text: "range", color: theme.accent },
      { text: "(m)]", color: theme.chalkText },
    ],
  },
  {
    num: 11,
    text: "    answer = []",
    indent: 1,
    startFrame: 461,
    endFrame: 489,
    tokens: [
      { text: "answer", color: theme.good },
      { text: " = []", color: theme.chalkText },
    ],
  },
  {
    num: 12,
    text: "    r, c, direction = 0, 0, 0",
    indent: 1,
    startFrame: 507,
    endFrame: 630,
    tokens: [
      { text: "r, c, direction", color: theme.cyan },
      { text: " = ", color: theme.chalkText },
      { text: "0, 0, 0", color: theme.gold },
    ],
  },
  {
    num: 13,
    text: "    for _ in range(m * n):",
    indent: 1,
    startFrame: 671,
    endFrame: 800,
    tokens: [
      { text: "for ", color: theme.accent },
      { text: "_", color: theme.chalkText },
      { text: " in ", color: theme.accent },
      { text: "range", color: theme.accent },
      { text: "(m * n):", color: theme.chalkText },
    ],
  },
  {
    num: 14,
    text: "        answer.append(matrix[r][c])",
    indent: 2,
    startFrame: 880,
    endFrame: 950,
    tokens: [
      { text: "answer", color: theme.good },
      { text: ".", color: theme.chalkText },
      { text: "append", color: theme.cyan },
      { text: "(matrix[r][c])", color: theme.chalkText },
    ],
  },
  {
    num: 15,
    text: "        visited[r][c] = True",
    indent: 2,
    startFrame: 951,
    endFrame: 1027,
    tokens: [
      { text: "visited", color: theme.warn },
      { text: "[r][c] = ", color: theme.chalkText },
      { text: "True", color: theme.gold },
    ],
  },
  {
    num: 16,
    text: "        if len(answer) == m * n:",
    indent: 2,
    startFrame: 1051,
    endFrame: 1220,
    tokens: [
      { text: "if ", color: theme.accent },
      { text: "len", color: theme.accent },
      { text: "(answer) == m * n:", color: theme.chalkText },
    ],
  },
  {
    num: 17,
    text: "            break",
    indent: 3,
    startFrame: 1221,
    endFrame: 1334,
    tokens: [{ text: "break", color: theme.warn }],
  },
  {
    num: 18,
    text: "        dr, dc = directions[direction]",
    indent: 2,
    startFrame: 1726,
    endFrame: 1810,
    tokens: [
      { text: "dr, dc", color: theme.cyan },
      { text: " = ", color: theme.chalkText },
      { text: "directions", color: theme.gold },
      { text: "[direction]", color: theme.chalkText },
    ],
  },
  {
    num: 19,
    text: "        nr, nc = r + dr, c + dc",
    indent: 2,
    startFrame: 1811,
    endFrame: 1895,
    tokens: [
      { text: "nr, nc", color: theme.cyan },
      { text: " = ", color: theme.chalkText },
      { text: "r + dr, c + dc", color: theme.chalkText },
    ],
  },
  {
    num: 20,
    text: "        if nr < 0 or nr >= m or nc < 0 or nc >= n or visited[nr][nc]:",
    indent: 2,
    startFrame: 1920,
    endFrame: 2070,
    tokens: [
      { text: "if ", color: theme.accent },
      { text: "nr < 0", color: theme.warn },
      { text: " or ", color: theme.accent },
      { text: "nr >= m", color: theme.warn },
      { text: " or ", color: theme.accent },
      { text: "nc < 0", color: theme.warn },
      { text: " or ", color: theme.accent },
      { text: "nc >= n", color: theme.warn },
      { text: " or ", color: theme.accent },
      { text: "visited[nr][nc]", color: theme.warn },
      { text: ":", color: theme.chalkText },
    ],
  },
  {
    num: 21,
    text: "            direction = (direction + 1) % 4",
    indent: 3,
    startFrame: 2090,
    endFrame: 2141,
    tokens: [
      { text: "direction", color: theme.gold },
      { text: " = (direction + ", color: theme.chalkText },
      { text: "1", color: theme.gold },
      { text: ") % ", color: theme.chalkText },
      { text: "4", color: theme.gold },
    ],
  },
  {
    num: 22,
    text: "            dr, dc = directions[direction]",
    indent: 3,
    startFrame: 2153,
    endFrame: 2188,
    tokens: [
      { text: "dr, dc", color: theme.cyan },
      { text: " = ", color: theme.chalkText },
      { text: "directions", color: theme.gold },
      { text: "[direction]", color: theme.chalkText },
    ],
  },
  {
    num: 23,
    text: "            nr, nc = r + dr, c + dc",
    indent: 3,
    startFrame: 2189,
    endFrame: 2225,
    tokens: [
      { text: "nr, nc", color: theme.cyan },
      { text: " = ", color: theme.chalkText },
      { text: "r + dr, c + dc", color: theme.chalkText },
    ],
  },
  {
    num: 24,
    text: "        r, c = nr, nc",
    indent: 2,
    startFrame: 2235,
    endFrame: 2276,
    tokens: [
      { text: "r, c", color: theme.cyan },
      { text: " = ", color: theme.chalkText },
      { text: "nr, nc", color: theme.cyan },
    ],
  },
  {
    num: 25,
    text: "    return answer",
    indent: 1,
    startFrame: 2277,
    endFrame: 2364,
    tokens: [
      { text: "return ", color: theme.accent },
      { text: "answer", color: theme.good },
    ],
  },
];

export const Scene04Method1Code: React.FC = () => {
  const frame = useCurrentFrame();

  // Active line calculation
  const activeLineNums = useMemo(() => {
    if (frame < 29) return [1];
    if (frame < 59) return [2];
    if (frame < 103) return [3];
    if (frame < 238) return [4];
    if (frame < 261) return [5];
    if (frame < 289) return [6];
    if (frame < 311) return [7];
    if (frame < 327) return [8];
    if (frame < 347) return [9];
    if (frame < 461) return [10];
    if (frame < 507) return [11];
    if (frame < 671) return [12];
    if (frame < 880) return [13];
    if (frame < 951) return [14];
    if (frame < 1051) return [15];
    if (frame < 1221) return [16];
    if (frame < 1726) return [17]; // Hot line: break
    if (frame < 1811) return [18];
    if (frame < 1920) return [19];
    if (frame < 2090) return [20]; // Hot line: collision check
    if (frame < 2153) return [21];
    if (frame < 2189) return [22];
    if (frame < 2235) return [23];
    if (frame < 2277) return [24];
    if (frame < 2375) return [25];
    return [];
  }, [frame]);

  // Hot line highlight
  const hotLineNum = useMemo(() => {
    if (frame >= 1051 && frame < 1726) return 17; // break
    if (frame >= 1920 && frame < 2090) return 20; // 5 boundary predicates
    return undefined;
  }, [frame]);

  const hotLineTag = useMemo(() => {
    if (frame >= 1051 && frame < 1726) return "CRITICAL GUARD";
    if (frame >= 1920 && frame < 2090) return "TURN CONDITION";
    return undefined;
  }, [frame]);

  // Phase conditions
  const isPhase1 = frame < 671;
  const isPhase2 = frame >= 671 && frame < 1726;
  const isPhase3 = frame >= 1726 && frame < 2375;
  const isPhase4 = frame >= 2375;

  // Question Callout visibility in Phase 4
  const showQuestionCallout = frame >= 2953;

  return (
    <div
      style={{
        position: "relative",
        width: 1920,
        height: 1080,
        backgroundColor: theme.chalkboard,
        overflow: "hidden",
      }}
    >
      <ChalkboardBackground />
      <ChalkFilters />

      {/* Audio VO */}
      <Audio src={staticFile("audio/015/scence04.mp3")} />

      {/* =====================================================================
          CANONICAL TOP HEADER BAR (Y: 28..76)
         ===================================================================== */}
      <div
        style={{
          position: "absolute",
          top: 28,
          left: 80,
          right: 80,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderBottom: `1.5px solid rgba(248, 246, 240, 0.2)`,
          paddingBottom: 12,
          zIndex: 20,
        }}
      >
        {/* Left: Pattern Badge */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            padding: "4px 12px",
            borderRadius: 6,
            backgroundColor: "rgba(60, 229, 167, 0.12)",
            border: `1px solid rgba(60, 229, 167, 0.35)`,
            fontFamily: fonts.mono,
            fontSize: 13,
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
            fontSize: 38,
            fontWeight: 700,
            color: theme.chalkText,
            letterSpacing: "0.5px",
            textShadow: "0 0 16px rgba(248, 246, 240, 0.3)",
          }}
        >
          Spiral Matrix — Method 1 Code & Complexity
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
          LEFT STAGE: CHALK CODE EDITOR V2 (X: 80, Y: 116, W: 960, H: 690)
         ===================================================================== */}
      <div
        style={{
          position: "absolute",
          top: 116,
          left: 80,
          width: 960,
          height: 690,
          zIndex: 15,
        }}
      >
        <ChalkCodeEditorV2
          lines={CODE_LINES}
          activeLineNums={activeLineNums}
          hotLineNum={hotLineNum}
          hotLineTag={hotLineTag}
          title="solution_visited.py"
          language="PYTHON 3.11"
          width={960}
          height={690}
          fontSize={13}
          lineHeight={22.5}
          indentWidth={18}
        />
      </div>

      {/* =====================================================================
          RIGHT STAGE: DYNAMIC SEMANTIC CARDS (X: 1070, Y: 116, W: 770, H: 690)
         ===================================================================== */}
      <div
        style={{
          position: "absolute",
          top: 116,
          left: 1070,
          width: 770,
          height: 690,
          zIndex: 15,
          display: "flex",
          flexDirection: "column",
          gap: 18,
        }}
      >
        {/* PHASE 1: SETUP, DIRECTIONS & VISITED ARRAY CONTRACT */}
        {isPhase1 && (
          <div
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              gap: 16,
            }}
          >
            {/* Dimensions Card (Reveals when line 2 starts typing at F29) */}
            {frame >= 29 ? (
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  height: 110,
                  backgroundColor: theme.cardBg,
                  borderRadius: 10,
                  opacity: interpolate(frame, [29, 45], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }),
                  transform: `scale(${spring({ frame: frame - 29, fps: 30, config: { damping: 14, stiffness: 120 } })})`,
                }}
              >
                <div style={{ position: "absolute", inset: 0 }}>
                  <RoughBox width={770} height={110} stroke={theme.cyan} strokeWidth={2} seed={401} />
                </div>
                <div
                  style={{
                    position: "relative",
                    zIndex: 2,
                    padding: "16px 22px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    height: "100%",
                  }}
                >
                  <div>
                    <div style={{ fontFamily: fonts.sans, fontSize: 13, fontWeight: 800, color: theme.cyan, letterSpacing: 1.5 }}>
                      📏 INPUT DIMENSIONS
                    </div>
                    <div style={{ fontFamily: fonts.code, fontSize: 16, color: theme.chalkText, marginTop: 4 }}>
                      m = len(matrix) = <span style={{ color: theme.gold, fontWeight: 700 }}>5</span> (rows)
                      {frame >= 59 ? (
                        <span>, n = len(matrix[0]) = <span style={{ color: theme.gold, fontWeight: 700 }}>6</span> (cols)</span>
                      ) : (
                        <span style={{ color: theme.chalkDim }}>, n = ...</span>
                      )}
                    </div>
                  </div>
                  {frame >= 59 && (
                    <div
                      style={{
                        backgroundColor: "rgba(92, 225, 230, 0.15)",
                        border: `1px solid ${theme.cyan}`,
                        borderRadius: 6,
                        padding: "6px 12px",
                        fontFamily: fonts.mono,
                        fontSize: 14,
                        color: theme.cyan,
                        fontWeight: 700,
                      }}
                    >
                      m × n = 30 cells
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <div
                style={{
                  width: "100%",
                  height: 110,
                  borderRadius: 10,
                  border: "1.5px dashed rgba(248, 246, 240, 0.15)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "rgba(248, 246, 240, 0.25)",
                  fontFamily: fonts.mono,
                  fontSize: 14,
                }}
              >
                · Matrix Dimensions: Initializing ·
              </div>
            )}

            {/* Directions Table Card (Reveals when line 4 starts typing at F103) */}
            {frame >= 103 ? (
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  height: 250,
                  backgroundColor: theme.cardBg,
                  borderRadius: 10,
                  opacity: interpolate(frame, [103, 125], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }),
                  transform: `scale(${spring({ frame: frame - 103, fps: 30, config: { damping: 14, stiffness: 120 } })})`,
                }}
              >
                <div style={{ position: "absolute", inset: 0 }}>
                  <RoughBox width={770} height={250} stroke={theme.gold} strokeWidth={2} seed={402} />
                </div>
                <div style={{ position: "relative", zIndex: 2, padding: "16px 22px", height: "100%", display: "flex", flexDirection: "column" }}>
                  <div style={{ fontFamily: fonts.sans, fontSize: 13, fontWeight: 800, color: theme.gold, letterSpacing: 1.5, marginBottom: 12 }}>
                    🧭 4 CLOCKWISE DIRECTION VECTORS
                  </div>

                  {/* 4 Vector Tiles (Zero-Spoiler Progressive Reveal with Springs!) */}
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 10 }}>
                    {/* Vector 0: RIGHT (Line 5: F238..F260) */}
                    {frame >= 238 ? (
                      <div
                        style={{
                          padding: "10px 14px",
                          borderRadius: 8,
                          backgroundColor: "rgba(92, 225, 230, 0.2)",
                          border: `1.5px solid ${theme.cyan}`,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          transform: `scale(${spring({ frame: frame - 238, fps: 30, config: { damping: 14, stiffness: 120 } })})`,
                          boxShadow: "0 0 14px rgba(92, 225, 230, 0.3)",
                        }}
                      >
                        <span style={{ fontFamily: fonts.code, fontSize: 15, color: theme.chalkText }}>0: ( 0, +1)</span>
                        <span style={{ fontFamily: fonts.sans, fontSize: 14, fontWeight: 800, color: theme.cyan }}>➔ RIGHT</span>
                      </div>
                    ) : (
                      <div
                        style={{
                          padding: "10px 14px",
                          borderRadius: 8,
                          border: "1.5px dashed rgba(248, 246, 240, 0.15)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "rgba(248, 246, 240, 0.25)",
                          fontFamily: fonts.mono,
                          fontSize: 13,
                        }}
                      >
                        · Vector 0: Listening ·
                      </div>
                    )}

                    {/* Vector 1: DOWN (Line 6: F261..F288) */}
                    {frame >= 261 ? (
                      <div
                        style={{
                          padding: "10px 14px",
                          borderRadius: 8,
                          backgroundColor: "rgba(255, 209, 102, 0.2)",
                          border: `1.5px solid ${theme.gold}`,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          transform: `scale(${spring({ frame: frame - 261, fps: 30, config: { damping: 14, stiffness: 120 } })})`,
                          boxShadow: "0 0 14px rgba(255, 209, 102, 0.3)",
                        }}
                      >
                        <span style={{ fontFamily: fonts.code, fontSize: 15, color: theme.chalkText }}>1: (+1,  0)</span>
                        <span style={{ fontFamily: fonts.sans, fontSize: 14, fontWeight: 800, color: theme.gold }}>↓ DOWN</span>
                      </div>
                    ) : (
                      <div
                        style={{
                          padding: "10px 14px",
                          borderRadius: 8,
                          border: "1.5px dashed rgba(248, 246, 240, 0.15)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "rgba(248, 246, 240, 0.25)",
                          fontFamily: fonts.mono,
                          fontSize: 13,
                        }}
                      >
                        · Vector 1: Listening ·
                      </div>
                    )}

                    {/* Vector 2: LEFT (Line 7: F289..F310) */}
                    {frame >= 289 ? (
                      <div
                        style={{
                          padding: "10px 14px",
                          borderRadius: 8,
                          backgroundColor: "rgba(60, 229, 167, 0.2)",
                          border: `1.5px solid ${theme.good}`,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          transform: `scale(${spring({ frame: frame - 289, fps: 30, config: { damping: 14, stiffness: 120 } })})`,
                          boxShadow: "0 0 14px rgba(60, 229, 167, 0.3)",
                        }}
                      >
                        <span style={{ fontFamily: fonts.code, fontSize: 15, color: theme.chalkText }}>2: ( 0, -1)</span>
                        <span style={{ fontFamily: fonts.sans, fontSize: 14, fontWeight: 800, color: theme.good }}>← LEFT</span>
                      </div>
                    ) : (
                      <div
                        style={{
                          padding: "10px 14px",
                          borderRadius: 8,
                          border: "1.5px dashed rgba(248, 246, 240, 0.15)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "rgba(248, 246, 240, 0.25)",
                          fontFamily: fonts.mono,
                          fontSize: 13,
                        }}
                      >
                        · Vector 2: Listening ·
                      </div>
                    )}

                    {/* Vector 3: UP (Line 8: F311..F326) */}
                    {frame >= 311 ? (
                      <div
                        style={{
                          padding: "10px 14px",
                          borderRadius: 8,
                          backgroundColor: "rgba(216, 180, 226, 0.2)",
                          border: `1.5px solid ${theme.purple}`,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          transform: `scale(${spring({ frame: frame - 311, fps: 30, config: { damping: 14, stiffness: 120 } })})`,
                          boxShadow: "0 0 14px rgba(216, 180, 226, 0.3)",
                        }}
                      >
                        <span style={{ fontFamily: fonts.code, fontSize: 15, color: theme.chalkText }}>3: (-1,  0)</span>
                        <span style={{ fontFamily: fonts.sans, fontSize: 14, fontWeight: 800, color: theme.purple }}>↑ UP</span>
                      </div>
                    ) : (
                      <div
                        style={{
                          padding: "10px 14px",
                          borderRadius: 8,
                          border: "1.5px dashed rgba(248, 246, 240, 0.15)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "rgba(248, 246, 240, 0.25)",
                          fontFamily: fonts.mono,
                          fontSize: 13,
                        }}
                      >
                        · Vector 3: Listening ·
                      </div>
                    )}
                  </div>

                  {frame >= 327 && (
                    <div
                      style={{
                        marginTop: 12,
                        fontFamily: fonts.code,
                        fontSize: 12,
                        color: theme.chalkDim,
                        textAlign: "center",
                        opacity: interpolate(frame, [327, 345], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }),
                      }}
                    >
                      Cycle order: 0 (Right) ➔ 1 (Down) ➔ 2 (Left) ➔ 3 (Up) ➔ 0 (Right)...
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <div
                style={{
                  width: "100%",
                  height: 250,
                  borderRadius: 10,
                  border: "1.5px dashed rgba(248, 246, 240, 0.15)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "rgba(248, 246, 240, 0.25)",
                  fontFamily: fonts.mono,
                  fontSize: 14,
                }}
              >
                · Clockwise Vectors: Initializing ·
              </div>
            )}

            {/* Visited 2D Matrix Preview Card (Reveals when line 10 starts typing at F347) */}
            {frame >= 347 ? (
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  height: 270,
                  backgroundColor: theme.cardBg,
                  borderRadius: 10,
                  opacity: interpolate(frame, [347, 365], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }),
                  transform: `scale(${spring({ frame: frame - 347, fps: 30, config: { damping: 14, stiffness: 120 } })})`,
                }}
              >
                <div style={{ position: "absolute", inset: 0 }}>
                  <RoughBox width={770} height={270} stroke={theme.warn} strokeWidth={2} seed={403} />
                </div>
                <div style={{ position: "relative", zIndex: 2, padding: "16px 22px", height: "100%", display: "flex", flexDirection: "column" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
                    <span style={{ fontFamily: fonts.sans, fontSize: 13, fontWeight: 800, color: theme.warn, letterSpacing: 1.5 }}>
                      💾 VISITED AUXILIARY MATRIX (5 × 6)
                    </span>
                    <span style={{ fontFamily: fonts.mono, fontSize: 12, color: theme.warn, backgroundColor: "rgba(255, 118, 117, 0.15)", padding: "2px 8px", borderRadius: 4 }}>
                      O(m × n) SPACE
                    </span>
                  </div>

                  {/* 5x6 Mini Boolean Grid */}
                  <div style={{ display: "grid", gridTemplateRows: "repeat(5, 1fr)", gap: 4, width: "100%", maxHeight: 150 }}>
                    {[0, 1, 2, 3, 4].map((r) => (
                      <div key={r} style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: 4 }}>
                        {[0, 1, 2, 3, 4, 5].map((c) => (
                          <div
                            key={c}
                            style={{
                              height: 24,
                              backgroundColor: frame >= 507 && r === 0 && c === 0 ? "rgba(255, 209, 102, 0.25)" : "rgba(255, 255, 255, 0.05)",
                              border: `1px solid ${frame >= 507 && r === 0 && c === 0 ? theme.gold : "rgba(248, 246, 240, 0.15)"}`,
                              borderRadius: 3,
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              fontFamily: fonts.mono,
                              fontSize: 10,
                              fontWeight: 700,
                              color: frame >= 507 && r === 0 && c === 0 ? theme.gold : theme.chalkDim,
                            }}
                          >
                            {frame >= 507 && r === 0 && c === 0 ? "START" : "False"}
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>

                  <div style={{ marginTop: 10, fontFamily: fonts.sans, fontSize: 12, color: theme.chalkText, opacity: 0.8 }}>
                    • Initialized to all <code style={{ color: theme.gold }}>False</code>. Each cell marked <code style={{ color: theme.good }}>True</code> upon arrival.
                  </div>
                </div>
              </div>
            ) : (
              <div
                style={{
                  width: "100%",
                  height: 270,
                  borderRadius: 10,
                  border: "1.5px dashed rgba(248, 246, 240, 0.15)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "rgba(248, 246, 240, 0.25)",
                  fontFamily: fonts.mono,
                  fontSize: 14,
                }}
              >
                · Auxiliary Visited Memory: Initializing ·
              </div>
            )}
          </div>
        )}

        {/* PHASE 2: LOOP EXECUTION & THE CRITICAL FINAL-CELL GUARD */}
        {isPhase2 && (
          <div
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              gap: 16,
            }}
          >
            {/* Iteration Bound Card */}
            <div
              style={{
                position: "relative",
                width: "100%",
                height: 110,
                backgroundColor: theme.cardBg,
                borderRadius: 10,
              }}
            >
              <div style={{ position: "absolute", inset: 0 }}>
                <RoughBox width={770} height={110} stroke={theme.good} strokeWidth={2} seed={404} />
              </div>
              <div style={{ position: "relative", zIndex: 2, padding: "16px 22px", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                <div style={{ fontFamily: fonts.sans, fontSize: 13, fontWeight: 800, color: theme.good, letterSpacing: 1.5 }}>
                  🔄 TOTAL ITERATION BUDGET
                </div>
                <div style={{ fontFamily: fonts.code, fontSize: 18, color: theme.chalkText, marginTop: 4 }}>
                  for _ in range(m * n): <span style={{ color: theme.good, fontWeight: 700 }}>➔ Exactly 30 Visits (0 .. 29)</span>
                </div>
                <div style={{ fontFamily: fonts.sans, fontSize: 12, color: theme.chalkDim, marginTop: 2 }}>
                  Every matrix cell enters the answer list exactly once.
                </div>
              </div>
            </div>

            {/* During F671..F1050: Show In-Loop Visit Action & State Card */}
            {frame < 1051 ? (
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  height: 540,
                  backgroundColor: theme.cardBg,
                  borderRadius: 10,
                }}
              >
                <div style={{ position: "absolute", inset: 0 }}>
                  <RoughBox width={770} height={540} stroke={theme.cyan} strokeWidth={2.4} seed={405} />
                </div>
                <div style={{ position: "relative", zIndex: 2, padding: "24px 28px", height: "100%", display: "flex", flexDirection: "column", gap: 18 }}>
                  <div>
                    <div style={{ fontFamily: fonts.sans, fontSize: 15, fontWeight: 800, color: theme.cyan, letterSpacing: 1.5 }}>
                      ⚡ IN-LOOP PROCESSING ACTION
                    </div>
                    <div style={{ fontFamily: fonts.sans, fontSize: 14, color: theme.chalkDim, marginTop: 4 }}>
                      At every step, execute immediate harvest and visited registration:
                    </div>
                  </div>

                  {/* Action 1: Append */}
                  <div
                    style={{
                      padding: "16px 20px",
                      borderRadius: 8,
                      backgroundColor: frame >= 880 ? "rgba(60, 229, 167, 0.18)" : "rgba(255, 255, 255, 0.04)",
                      border: `1.5px solid ${frame >= 880 ? theme.good : "rgba(248, 246, 240, 0.15)"}`,
                      transition: "all 0.2s ease",
                    }}
                  >
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <span style={{ fontFamily: fonts.mono, fontSize: 14, fontWeight: 800, color: theme.good }}>STEP 1 · HARVEST VALUE</span>
                      <span style={{ fontFamily: fonts.mono, fontSize: 12, color: theme.chalkDim }}>LINE 14</span>
                    </div>
                    <div style={{ fontFamily: fonts.code, fontSize: 18, color: theme.chalkText, marginTop: 6 }}>
                      answer.append(matrix[r][c])
                    </div>
                    <div style={{ fontFamily: fonts.sans, fontSize: 13, color: theme.chalkDim, marginTop: 4 }}>
                      Collect the current cell's value into our permanent 1D answer output list.
                    </div>
                  </div>

                  {/* Action 2: Mark Visited */}
                  <div
                    style={{
                      padding: "16px 20px",
                      borderRadius: 8,
                      backgroundColor: frame >= 951 ? "rgba(255, 209, 102, 0.18)" : "rgba(255, 255, 255, 0.04)",
                      border: `1.5px solid ${frame >= 951 ? theme.gold : "rgba(248, 246, 240, 0.15)"}`,
                      transition: "all 0.2s ease",
                    }}
                  >
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <span style={{ fontFamily: fonts.mono, fontSize: 14, fontWeight: 800, color: theme.gold }}>STEP 2 · REGISTER VISITED</span>
                      <span style={{ fontFamily: fonts.mono, fontSize: 12, color: theme.chalkDim }}>LINE 15</span>
                    </div>
                    <div style={{ fontFamily: fonts.code, fontSize: 18, color: theme.chalkText, marginTop: 6 }}>
                      visited[r][c] = True
                    </div>
                    <div style={{ fontFamily: fonts.sans, fontSize: 13, color: theme.chalkDim, marginTop: 4 }}>
                      Mark this coordinate in our 2D boolean grid so future loops turn before re-entering it.
                    </div>
                  </div>

                  {/* Pedagogical Note */}
                  <div
                    style={{
                      marginTop: "auto",
                      padding: "14px 18px",
                      borderRadius: 8,
                      backgroundColor: "rgba(92, 225, 230, 0.08)",
                      border: `1px solid ${theme.cyan}`,
                      fontFamily: fonts.sans,
                      fontSize: 13,
                      color: theme.chalkText,
                      lineHeight: 1.5,
                    }}
                  >
                    💡 <strong style={{ color: theme.cyan }}>Order Invariant:</strong> Always collect and mark the current cell <em>first</em> before probing the next navigation step!
                  </div>
                </div>
              </div>
            ) : (
              /* At F1051+: The Final-Cell Guard Card (Zero-Spoiler Gate!) */
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  height: 540,
                  backgroundColor: theme.cardBg,
                  borderRadius: 10,
                  opacity: interpolate(frame, [1051, 1070], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }),
                  transform: `scale(${spring({ frame: frame - 1051, fps: 30, config: { damping: 14, stiffness: 120 } })})`,
                }}
              >
                <div style={{ position: "absolute", inset: 0 }}>
                  <RoughBox
                    width={770}
                    height={540}
                    stroke={theme.warn}
                    strokeWidth={2.4}
                    seed={405}
                  />
                </div>
                <div style={{ position: "relative", zIndex: 2, padding: "20px 24px", height: "100%", display: "flex", flexDirection: "column" }}>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 12 }}>
                    <span style={{ fontFamily: fonts.sans, fontSize: 15, fontWeight: 800, color: theme.warn, letterSpacing: 1.5 }}>
                      ⚠️ THE FINAL-CELL GUARD: WHY IS IT ESSENTIAL?
                    </span>
                    <span
                      style={{
                        fontFamily: fonts.mono,
                        fontSize: 12,
                        fontWeight: 800,
                        backgroundColor: "rgba(255, 118, 117, 0.2)",
                        border: `1px solid ${theme.warn}`,
                        color: theme.warn,
                        padding: "3px 10px",
                        borderRadius: 6,
                      }}
                    >
                      LINE 16 & 17
                    </span>
                  </div>

                  {/* Guard Code snippet */}
                  <div
                    style={{
                      backgroundColor: theme.cardBg,
                      border: `1.5px solid ${theme.warn}`,
                      borderRadius: 8,
                      padding: "10px 16px",
                      fontFamily: fonts.code,
                      fontSize: 16,
                      color: theme.chalkText,
                      marginBottom: 16,
                    }}
                  >
                    <span style={{ color: theme.accent }}>if </span>
                    <span style={{ color: theme.accent }}>len</span>(answer) == m * n:
                    <br />
                    <span style={{ color: theme.warn, paddingLeft: 28 }}>break</span>
                  </div>

                  {/* Trapped 30th Cell Topological Diagram */}
                  <div
                    style={{
                      backgroundColor: "rgba(255, 255, 255, 0.03)",
                      border: "1px solid rgba(248, 246, 240, 0.15)",
                      borderRadius: 8,
                      padding: "14px",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: 8,
                    }}
                  >
                    <div style={{ fontFamily: fonts.sans, fontSize: 12, fontWeight: 800, color: theme.gold, letterSpacing: 1 }}>
                      AT 30TH CELL: (2, 3) = 16 (CENTER OF INNERMOST SPIRAL)
                    </div>

                    {/* 3x3 Cross Diagram */}
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 100px)", gap: 6, margin: "8px 0" }}>
                      <div />
                      <div
                        style={{
                          padding: "6px",
                          backgroundColor: "rgba(255, 118, 117, 0.18)",
                          border: `1px dashed ${theme.warn}`,
                          borderRadius: 6,
                          textAlign: "center",
                          fontSize: 11,
                          color: theme.warn,
                          fontFamily: fonts.mono,
                        }}
                      >
                        (1,3)=10
                        <br />
                        VISITED ❌
                      </div>
                      <div />

                      <div
                        style={{
                          padding: "6px",
                          backgroundColor: "rgba(255, 118, 117, 0.18)",
                          border: `1px dashed ${theme.warn}`,
                          borderRadius: 6,
                          textAlign: "center",
                          fontSize: 11,
                          color: theme.warn,
                          fontFamily: fonts.mono,
                        }}
                      >
                        (2,2)=15
                        <br />
                        VISITED ❌
                      </div>

                      <div
                        style={{
                          padding: "8px",
                          backgroundColor: "rgba(255, 209, 102, 0.25)",
                          border: `2px solid ${theme.gold}`,
                          borderRadius: 6,
                          textAlign: "center",
                          fontSize: 13,
                          fontWeight: 800,
                          color: theme.gold,
                          fontFamily: fonts.mono,
                        }}
                      >
                        CELL 16
                        <br />
                        (FINAL)
                      </div>

                      <div
                        style={{
                          padding: "6px",
                          backgroundColor: "rgba(255, 118, 117, 0.18)",
                          border: `1px dashed ${theme.warn}`,
                          borderRadius: 6,
                          textAlign: "center",
                          fontSize: 11,
                          color: theme.warn,
                          fontFamily: fonts.mono,
                        }}
                      >
                        (2,4)=17
                        <br />
                        VISITED ❌
                      </div>

                      <div />
                      <div
                        style={{
                          padding: "6px",
                          backgroundColor: "rgba(255, 118, 117, 0.18)",
                          border: `1px dashed ${theme.warn}`,
                          borderRadius: 6,
                          textAlign: "center",
                          fontSize: 11,
                          color: theme.warn,
                          fontFamily: fonts.mono,
                        }}
                      >
                        (3,3)=22
                        <br />
                        VISITED ❌
                      </div>
                      <div />
                    </div>
                  </div>

                  {/* Explanation points */}
                  <div style={{ marginTop: 14, display: "flex", flexDirection: "column", gap: 6 }}>
                    <div style={{ fontFamily: fonts.sans, fontSize: 13, color: theme.chalkText }}>
                      • <strong style={{ color: theme.good }}>Why break here?</strong> After appending cell 16, all 30 cells have been collected. There is <em>zero</em> unvisited cell remaining anywhere!
                    </div>
                    <div style={{ fontFamily: fonts.sans, fontSize: 13, color: theme.warn }}>
                      • <strong style={{ color: theme.warn }}>Without this check:</strong> Code would probe right into visited cell 17, rotate direction, probe down into visited cell 22, and calculate an unnecessary spurious move on a completed matrix.
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* PHASE 3: PROBE & ROTATION FORMULA */}
        {isPhase3 && (
          <div
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              gap: 16,
            }}
          >
            {/* Candidate Probe Card (Line 18: F1726..F1810) */}
            <div
              style={{
                position: "relative",
                width: "100%",
                height: 160,
                backgroundColor: theme.cardBg,
                borderRadius: 10,
              }}
            >
              <div style={{ position: "absolute", inset: 0 }}>
                <RoughBox width={770} height={160} stroke={theme.cyan} strokeWidth={2} seed={406} />
              </div>
              <div style={{ position: "relative", zIndex: 2, padding: "16px 22px", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                <div style={{ fontFamily: fonts.sans, fontSize: 13, fontWeight: 800, color: theme.cyan, letterSpacing: 1.5 }}>
                  🎯 CANDIDATE NEXT POSITION PROBE
                </div>
                <div style={{ fontFamily: fonts.code, fontSize: 20, color: theme.chalkText, marginTop: 6 }}>
                  dr, dc = directions[direction]
                  <br />
                  <span style={{ color: theme.cyan, fontWeight: 700 }}>nr = r + dr</span>, <span style={{ color: theme.cyan, fontWeight: 700 }}>nc = c + dc</span>
                </div>
                <div style={{ fontFamily: fonts.sans, fontSize: 12, color: theme.chalkDim, marginTop: 4 }}>
                  Test the candidate step <em>before</em> committing pointers (r, c).
                </div>
              </div>
            </div>

            {/* Turn Condition Breakdown Card (Line 20..24: Reveals at F1811) */}
            {frame >= 1811 ? (
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  height: 310,
                  backgroundColor: theme.cardBg,
                  borderRadius: 10,
                  opacity: interpolate(frame, [1811, 1830], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }),
                  transform: `scale(${spring({ frame: frame - 1811, fps: 30, config: { damping: 14, stiffness: 120 } })})`,
                }}
              >
                <div style={{ position: "absolute", inset: 0 }}>
                  <RoughBox width={770} height={310} stroke={theme.warn} strokeWidth={2} seed={407} />
                </div>
                <div style={{ position: "relative", zIndex: 2, padding: "16px 22px", height: "100%", display: "flex", flexDirection: "column" }}>
                  <div style={{ fontFamily: fonts.sans, fontSize: 13, fontWeight: 800, color: theme.warn, letterSpacing: 1.5, marginBottom: 8 }}>
                    🛑 THE 5-PART TURN CONDITION
                  </div>

                  <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                    <div style={{ padding: "6px 12px", backgroundColor: "rgba(255, 118, 117, 0.15)", borderRadius: 6, border: `1px solid ${theme.warn}`, fontFamily: fonts.code, fontSize: 13, color: theme.warn }}>
                      1. nr &lt; 0 ➔ Above top boundary (Row &lt; 0)
                    </div>
                    <div style={{ padding: "6px 12px", backgroundColor: "rgba(255, 118, 117, 0.15)", borderRadius: 6, border: `1px solid ${theme.warn}`, fontFamily: fonts.code, fontSize: 13, color: theme.warn }}>
                      2. nr ≥ m ➔ Below bottom boundary (Row ≥ m)
                    </div>
                    <div style={{ padding: "6px 12px", backgroundColor: "rgba(255, 118, 117, 0.15)", borderRadius: 6, border: `1px solid ${theme.warn}`, fontFamily: fonts.code, fontSize: 13, color: theme.warn }}>
                      3. nc &lt; 0 ➔ Left of matrix (Col &lt; 0)
                    </div>
                    <div style={{ padding: "6px 12px", backgroundColor: "rgba(255, 118, 117, 0.15)", borderRadius: 6, border: `1px solid ${theme.warn}`, fontFamily: fonts.code, fontSize: 13, color: theme.warn }}>
                      4. nc ≥ n ➔ Right of matrix (Col ≥ n)
                    </div>
                    <div style={{ padding: "6px 12px", backgroundColor: "rgba(255, 209, 102, 0.15)", borderRadius: 6, border: `1px solid ${theme.gold}`, fontFamily: fonts.code, fontSize: 13, color: theme.gold }}>
                      5. visited[nr][nc] == True ➔ In-bounds but already traversed!
                    </div>
                  </div>

                  <div style={{ marginTop: 10, fontFamily: fonts.sans, fontSize: 12, color: theme.chalkText, opacity: 0.8 }}>
                    If <em>any</em> of these 5 hold: Turn Clockwise immediately!
                  </div>
                </div>
              </div>
            ) : (
              <div
                style={{
                  width: "100%",
                  height: 310,
                  borderRadius: 10,
                  border: "1.5px dashed rgba(248, 246, 240, 0.15)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "rgba(248, 246, 240, 0.25)",
                  fontFamily: fonts.mono,
                  fontSize: 14,
                }}
              >
                · Collision Boundaries: Listening ·
              </div>
            )}

            {/* Clockwise Modulo Formula Card (Line 25: Reveals at F2121) */}
            {frame >= 2121 ? (
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  height: 180,
                  backgroundColor: theme.cardBg,
                  borderRadius: 10,
                  opacity: interpolate(frame, [2121, 2140], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }),
                  transform: `scale(${spring({ frame: frame - 2121, fps: 30, config: { damping: 14, stiffness: 120 } })})`,
                }}
              >
                <div style={{ position: "absolute", inset: 0 }}>
                  <RoughBox width={770} height={180} stroke={theme.good} strokeWidth={2} seed={408} />
                </div>
                <div style={{ position: "relative", zIndex: 2, padding: "16px 22px", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                  <div style={{ fontFamily: fonts.sans, fontSize: 13, fontWeight: 800, color: theme.good, letterSpacing: 1.5 }}>
                    🔄 CLOCKWISE ROTATION WITH MODULO 4
                  </div>
                  <div style={{ fontFamily: fonts.code, fontSize: 22, color: theme.gold, fontWeight: 700, margin: "6px 0" }}>
                    direction = (direction + 1) % 4
                  </div>
                  <div style={{ fontFamily: fonts.sans, fontSize: 13, color: theme.chalkText }}>
                    Seamless cyclic transitions: 0 (Right) ➔ 1 (Down) ➔ 2 (Left) ➔ 3 (Up) ➔ 0 (Right)...
                  </div>
                </div>
              </div>
            ) : (
              <div
                style={{
                  width: "100%",
                  height: 180,
                  borderRadius: 10,
                  border: "1.5px dashed rgba(248, 246, 240, 0.15)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "rgba(248, 246, 240, 0.25)",
                  fontFamily: fonts.mono,
                  fontSize: 14,
                }}
              >
                · Modulo Rotation Engine: Listening ·
              </div>
            )}
          </div>
        )}

        {/* PHASE 4: COMPLEXITY ANALYSIS & THE PIVOTAL METHOD 2 HOOK */}
        {isPhase4 && (
          <div
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              gap: 16,
            }}
          >
            {/* Time Complexity Card (F2375+) */}
            <div
              style={{
                position: "relative",
                width: "100%",
                height: 170,
                backgroundColor: theme.cardBg,
                borderRadius: 10,
              }}
            >
              <div style={{ position: "absolute", inset: 0 }}>
                <RoughBox width={770} height={170} stroke={theme.good} strokeWidth={2.4} seed={409} />
              </div>
              <div style={{ position: "relative", zIndex: 2, padding: "18px 24px", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontFamily: fonts.sans, fontSize: 14, fontWeight: 800, color: theme.good, letterSpacing: 1.5 }}>
                    ⏱️ TIME COMPLEXITY
                  </span>
                  <span style={{ fontFamily: fonts.mono, fontSize: 13, fontWeight: 800, color: theme.good, backgroundColor: "rgba(60, 229, 167, 0.2)", padding: "3px 10px", borderRadius: 6 }}>
                    OPTIMAL LOWER BOUND
                  </span>
                </div>
                <div style={{ fontFamily: fonts.mono, fontSize: 34, fontWeight: 800, color: theme.good, margin: "4px 0" }}>
                  O(m × n)
                </div>
                <div style={{ fontFamily: fonts.sans, fontSize: 13, color: theme.chalkText, opacity: 0.9 }}>
                  Every cell is visited and appended exactly once. Each cell visit involves constant time O(1) checks and pointer updates.
                </div>
              </div>
            </div>

            {/* Space Complexity Card (F2578+ Zero-Spoiler Gate) */}
            {frame >= 2578 && (
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  height: 180,
                  backgroundColor: theme.cardBg,
                  borderRadius: 10,
                  opacity: interpolate(frame, [2578, 2595], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }),
                  transform: `scale(${spring({ frame: frame - 2578, fps: 30, config: { damping: 14, stiffness: 120 } })})`,
                }}
              >
                <div style={{ position: "absolute", inset: 0 }}>
                  <RoughBox width={770} height={180} stroke={theme.warn} strokeWidth={2.4} seed={410} />
                </div>
                <div style={{ position: "relative", zIndex: 2, padding: "18px 24px", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span style={{ fontFamily: fonts.sans, fontSize: 14, fontWeight: 800, color: theme.warn, letterSpacing: 1.5 }}>
                      💾 AUXILIARY SPACE COMPLEXITY
                    </span>
                    <span style={{ fontFamily: fonts.mono, fontSize: 13, fontWeight: 800, color: theme.warn, backgroundColor: "rgba(255, 118, 117, 0.2)", padding: "3px 10px", borderRadius: 6 }}>
                      EXTRA MEMORY ALLOCATION
                    </span>
                  </div>
                  <div style={{ fontFamily: fonts.mono, fontSize: 34, fontWeight: 800, color: theme.warn, margin: "4px 0" }}>
                    O(m × n)
                  </div>
                  <div style={{ fontFamily: fonts.sans, fontSize: 13, color: theme.chalkText, opacity: 0.9 }}>
                    Allocates a full <code style={{ color: theme.warn }}>visited[m][n]</code> 2D boolean array to track visited cells. Excluding the output list, auxiliary memory is proportional to total matrix size.
                  </div>
                </div>
              </div>
            )}

            {/* The Pivotal Method 2 Hook Callout (F2953+ Zero-Spoiler Gate) */}
            {frame >= 2953 && (
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  height: 300,
                  backgroundColor: theme.cardBg,
                  borderRadius: 10,
                  boxShadow: "0 0 30px rgba(255, 209, 102, 0.3)",
                  opacity: interpolate(frame, [2953, 2975], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }),
                  transform: `scale(${spring({ frame: frame - 2953, fps: 30, config: { damping: 14, stiffness: 120 } })})`,
                }}
              >
                <div style={{ position: "absolute", inset: 0 }}>
                  <RoughBox
                    width={770}
                    height={300}
                    stroke={theme.gold}
                    strokeWidth={3}
                    seed={411}
                  />
                </div>
                <div style={{ position: "relative", zIndex: 2, padding: "20px 24px", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", textAlign: "center" }}>
                  <div
                    style={{
                      fontFamily: fonts.sans,
                      fontSize: 14,
                      fontWeight: 800,
                      color: theme.gold,
                      letterSpacing: 2,
                      marginBottom: 10,
                    }}
                  >
                    🤔 CRITICAL INTERVIEW QUESTION
                  </div>

                  <div
                    style={{
                      fontFamily: fonts.display,
                      fontSize: 26,
                      fontWeight: 700,
                      color: theme.chalkText,
                      lineHeight: 1.4,
                      marginBottom: 14,
                    }}
                  >
                    "Do we really need this visited matrix?"
                  </div>

                  <div
                    style={{
                      fontFamily: fonts.sans,
                      fontSize: 16,
                      color: theme.cyan,
                      fontWeight: 600,
                      marginBottom: 16,
                    }}
                  >
                    Can we achieve <span style={{ color: theme.good, fontWeight: 800 }}>O(1) Auxiliary Space</span> without allocating any extra boolean array?
                  </div>

                  <div
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 10,
                      backgroundColor: "rgba(255, 209, 102, 0.15)",
                      border: `1.5px solid ${theme.gold}`,
                      borderRadius: 8,
                      padding: "8px 20px",
                      fontFamily: fonts.sans,
                      fontSize: 15,
                      fontWeight: 800,
                      color: theme.gold,
                      letterSpacing: 1,
                      margin: "0 auto",
                    }}
                  >
                    🚀 UP NEXT: METHOD 2 — 4 BOUNDARY POINTERS (O(1) SPACE)
                  </div>
                </div>
              </div>
            )}

          </div>
        )}
      </div>

      {/* Captions */}
      <Captions words={captionWords} />
    </div>
  );
};
