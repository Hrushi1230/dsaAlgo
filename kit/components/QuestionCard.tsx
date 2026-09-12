/**
 * QuestionCard.tsx — Architectural Precision Chalkboard Problem Opener
 *
 * Balanced, high-density problem card with ZERO dead space:
 *   - Optically centered compact frame (1520px x 680px)
 *   - Unified top toolbar with Pattern, LeetCode #, Difficulty, and Python Signature
 *   - High-contrast problem statement quote box
 *   - Side-by-side well-fitted example cards with glowing array chips and explanations
 *   - Tight bottom footer with constraints & goal badge
 *   - 100% dynamic for Arrays, Strings, Trees, and generic inputs.
 */
import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate, spring } from "remotion";

import { ChalkboardBackground, ChalkFilters, CHALK_FILTER_ID } from "../lib/chalk";
import { theme, fonts } from "../lib/theme";
import { ChalkDust } from "./ChalkDust";

export interface ExampleCase {
  input?: string;
  s?: string;
  t?: string;
  array?: number[];
  target?: number | string;
  highlightIndices?: number[];
  output: string;
  isTrue?: boolean;
  explanation?: string;
}

export interface QuestionCardProps {
  leetcodeNumber: number | string;
  title: string;
  pattern: string;
  difficulty?: "EASY" | "MEDIUM" | "HARD";
  problemStatement: string;
  constraints?: string[];
  goal?: string;
  signature?: string;
  examples?: ExampleCase[];
  startFrame?: number;
}

export const QuestionCard: React.FC<QuestionCardProps> = ({
  leetcodeNumber = 1,
  title = "Two Sum",
  pattern = "ARRAYS & HASHING",
  difficulty = "EASY",
  problemStatement = "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.",
  constraints = [
    "2 <= nums.length <= 10⁴",
    "-10⁹ <= nums[i] <= 10⁹",
    "Only one valid answer exists.",
  ],
  goal = "Find indices [i, j] in O(n) time",
  signature = "def twoSum(nums: list[int], target: int) -> list[int]:",
  examples = [
    {
      input: "nums = [2, 7, 11, 15], target = 9",
      array: [2, 7, 11, 15],
      target: 9,
      highlightIndices: [0, 1],
      output: "[0, 1]",
      explanation: "nums[0] + nums[1] == 2 + 7 == 9",
    },
    {
      input: "nums = [3, 8, 2, 7, 5, 1], target = 6",
      array: [3, 8, 2, 7, 5, 1],
      target: 6,
      highlightIndices: [4, 5],
      output: "[4, 5]",
      explanation: "nums[4] + nums[5] == 5 + 1 == 6",
    },
  ],
  startFrame = 0,
}) => {
  const frame = useCurrentFrame();
  const localFrame = Math.max(0, frame - startFrame);

  const cardScale = spring({
    frame: localFrame,
    fps: 30,
    config: { damping: 16, stiffness: 180 },
  });

  const cardOpacity = interpolate(localFrame, [0, 8], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Difficulty semantic color
  let diffColor = theme.good;
  if (difficulty === "MEDIUM") diffColor = theme.pivot;
  if (difficulty === "HARD") diffColor = theme.warn;

  return (
    <AbsoluteFill style={{ backgroundColor: theme.boardBg }}>
      <ChalkboardBackground />
      <ChalkFilters />

      {/* Blueprint Grid Wash */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            linear-gradient(to right, rgba(248, 246, 240, 0.025) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(248, 246, 240, 0.025) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
          pointerEvents: "none",
        }}
      />

      {/* Ambient Chalk Dust Particles */}
      <ChalkDust x={240} y={220} start={0} count={10} radius={70} color={theme.chalkDim} seed={401} />
      <ChalkDust x={1680} y={840} start={0} count={10} radius={70} color={theme.chalkDim} seed={402} />

      {/* Perfectly Centered Container */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          opacity: cardOpacity,
        }}
      >
        {/* Main Architectural Card — Well-Proportioned & Zero Dead Space */}
        <div
          style={{
            position: "relative",
            width: 1540,
            padding: "32px 42px",
            boxSizing: "border-box",
            backgroundColor: "rgba(6, 22, 16, 0.95)",
            border: `1.5px solid ${theme.chalkLine}55`,
            borderRadius: 12,
            boxShadow: "0 30px 80px rgba(0, 0, 0, 0.8), 0 0 45px rgba(248, 246, 240, 0.08)",
            display: "flex",
            flexDirection: "column",
            gap: 16,
            transform: `scale(${cardScale})`,
          }}
        >
          {/* Architectural Drafting Crosshairs (+) at 4 Corners */}
          <div style={{ position: "absolute", top: -10, left: -10, color: theme.pivot, fontFamily: fonts.mono, fontSize: 20 }}>+</div>
          <div style={{ position: "absolute", top: -10, right: -10, color: theme.pivot, fontFamily: fonts.mono, fontSize: 20 }}>+</div>
          <div style={{ position: "absolute", bottom: -10, left: -10, color: theme.pivot, fontFamily: fonts.mono, fontSize: 20 }}>+</div>
          <div style={{ position: "absolute", bottom: -10, right: -10, color: theme.pivot, fontFamily: fonts.mono, fontSize: 20 }}>+</div>

          {/* ── 1. UNIFIED TOP METADATA TOOLBAR ── */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              borderBottom: "1px solid rgba(248, 246, 240, 0.12)",
              paddingBottom: 12,
            }}
          >
            {/* Pattern Badge + LeetCode ID */}
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <div
                style={{
                  padding: "4px 12px",
                  borderRadius: 4,
                  backgroundColor: `${theme.pivot}20`,
                  border: `1px solid ${theme.pivot}`,
                  color: theme.pivot,
                  fontFamily: fonts.mono,
                  fontSize: 15,
                  fontWeight: 800,
                  letterSpacing: 2,
                }}
              >
                PATTERN
              </div>
              <span
                style={{
                  fontFamily: fonts.mono,
                  fontSize: 16,
                  fontWeight: 700,
                  color: theme.chalkText,
                  letterSpacing: 1.5,
                }}
              >
                {pattern.toUpperCase()}
              </span>
              <span style={{ color: "rgba(248, 246, 240, 0.3)" }}>·</span>
              <span
                style={{
                  fontFamily: fonts.mono,
                  fontSize: 16,
                  color: theme.chalkDim,
                  letterSpacing: 1.5,
                  fontWeight: 700,
                }}
              >
                LEETCODE #{leetcodeNumber}
              </span>
              <span
                style={{
                  padding: "2px 10px",
                  borderRadius: 4,
                  border: `1px solid ${diffColor}`,
                  color: diffColor,
                  backgroundColor: `${diffColor}18`,
                  fontFamily: fonts.mono,
                  fontSize: 14,
                  fontWeight: "bold",
                  letterSpacing: 1.5,
                }}
              >
                {difficulty}
              </span>
            </div>

            {/* Python Signature */}
            <div
              style={{
                fontFamily: fonts.mono,
                fontSize: 17,
                color: theme.cyan,
                backgroundColor: "rgba(92, 225, 230, 0.08)",
                border: "1px solid rgba(92, 225, 230, 0.25)",
                padding: "4px 14px",
                borderRadius: 5,
              }}
            >
              {signature}
            </div>
          </div>

          {/* ── 2. PROBLEM TITLE & STATEMENT BOX ── */}
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <span
              style={{
                fontFamily: fonts.hand,
                fontSize: 48,
                fontWeight: "bold",
                color: theme.chalkText,
                filter: `url(#${CHALK_FILTER_ID})`,
                textShadow: "0 0 20px rgba(248, 246, 240, 0.3)",
                lineHeight: 1.1,
              }}
            >
              {leetcodeNumber}. {title}
            </span>

            <div
              style={{
                padding: "12px 20px",
                borderLeft: `4px solid ${theme.pivot}`,
                backgroundColor: "rgba(248, 246, 240, 0.04)",
                borderTop: "1px solid rgba(248, 246, 240, 0.07)",
                borderRight: "1px solid rgba(248, 246, 240, 0.07)",
                borderBottom: "1px solid rgba(248, 246, 240, 0.07)",
                borderRadius: "0 6px 6px 0",
              }}
            >
              <div
                style={{
                  fontFamily: fonts.hand,
                  fontSize: 28,
                  lineHeight: 1.35,
                  color: theme.chalkText,
                  filter: `url(#${CHALK_FILTER_ID})`,
                }}
              >
                &ldquo;{problemStatement}&rdquo;
              </div>
            </div>
          </div>

          {/* ── 3. COMPACT STRUCTURED EXAMPLES (SIDE-BY-SIDE) ── */}
          <div style={{ display: "flex", gap: 20 }}>
            {examples.slice(0, 2).map((ex, exIdx) => {
              const isFirst = exIdx === 0;
              const accent = isFirst ? theme.good : theme.pivot;

              // Smart parsing if array/target are not explicitly provided in props
              let displayArray = ex.array;
              let displayTarget = ex.target;
              let displayHighlights = ex.highlightIndices;

              if (!displayArray && ex.input) {
                const arrayMatch = ex.input.match(/\[([-\d,\s]+)\]/);
                if (arrayMatch) {
                  displayArray = arrayMatch[1]
                    .split(",")
                    .map((s) => parseInt(s.trim(), 10))
                    .filter((n) => !isNaN(n));
                }
                const targetMatch = ex.input.match(/target\s*=\s*([-\d]+)/i);
                if (targetMatch) {
                  displayTarget = parseInt(targetMatch[1], 10);
                }
              }

              if (!displayHighlights && ex.output) {
                const outMatch = ex.output.match(/\[([-\d,\s]+)\]/);
                if (outMatch) {
                  displayHighlights = outMatch[1]
                    .split(",")
                    .map((s) => parseInt(s.trim(), 10))
                    .filter((n) => !isNaN(n));
                }
              }

              return (
                <div
                  key={exIdx}
                  style={{
                    flex: 1,
                    border: `1.5px solid ${theme.chalkLine}28`,
                    borderRadius: 8,
                    padding: "14px 18px",
                    backgroundColor: "rgba(0, 0, 0, 0.32)",
                    display: "flex",
                    flexDirection: "column",
                    gap: 10,
                  }}
                >
                  {/* Example Header */}
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span
                      style={{
                        fontFamily: fonts.mono,
                        fontSize: 15,
                        color: theme.pivot,
                        fontWeight: "bold",
                        letterSpacing: 1.5,
                      }}
                    >
                      EXAMPLE {exIdx + 1}
                    </span>
                    <span
                      style={{
                        fontFamily: fonts.mono,
                        fontSize: 16,
                        fontWeight: "bold",
                        color: accent,
                        padding: "2px 12px",
                        border: `1px solid ${accent}`,
                        borderRadius: 4,
                        backgroundColor: `${accent}18`,
                      }}
                    >
                      Output: {ex.output}
                    </span>
                  </div>

                  {/* Array Elements or String comparison */}
                  <div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap" }}>
                    {displayArray && displayArray.length > 0 && (
                      <>
                        <span style={{ fontFamily: fonts.mono, fontSize: 16, color: theme.cyan, fontWeight: "bold" }}>
                          nums =
                        </span>
                        <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
                          {displayArray.map((num, nIdx) => {
                            const isHighlighted = displayHighlights?.includes(nIdx);
                            return (
                              <div
                                key={nIdx}
                                style={{
                                  width: 40,
                                  height: 40,
                                  borderRadius: 5,
                                  border: `1.5px solid ${isHighlighted ? theme.good : theme.chalkLine}66`,
                                  backgroundColor: isHighlighted ? `${theme.good}25` : "rgba(248, 246, 240, 0.05)",
                                  color: isHighlighted ? theme.good : theme.chalkText,
                                  fontFamily: fonts.mono,
                                  fontSize: 19,
                                  fontWeight: "bold",
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                  boxShadow: isHighlighted ? `0 0 10px ${theme.good}44` : "none",
                                }}
                              >
                                {num}
                              </div>
                            );
                          })}
                        </div>
                        {displayTarget !== undefined && (
                          <div
                            style={{
                              marginLeft: 6,
                              padding: "3px 10px",
                              borderRadius: 4,
                              border: `1px solid ${theme.pivot}`,
                              backgroundColor: `${theme.pivot}18`,
                              color: theme.pivot,
                              fontFamily: fonts.mono,
                              fontSize: 15,
                              fontWeight: "bold",
                            }}
                          >
                            target = {displayTarget}
                          </div>
                        )}
                      </>
                    )}

                    {/* Strings fallback if s/t provided */}
                    {ex.s && ex.t && (
                      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                          <span style={{ fontFamily: fonts.mono, fontSize: 16, color: theme.cyan, width: 24 }}>s:</span>
                          <div style={{ display: "flex", gap: 4 }}>
                            {ex.s.split("").map((ch, cIdx) => (
                              <div
                                key={cIdx}
                                style={{
                                  width: 32,
                                  height: 32,
                                  borderRadius: 4,
                                  border: `1px solid ${theme.good}`,
                                  backgroundColor: `${theme.good}18`,
                                  color: theme.good,
                                  fontFamily: fonts.mono,
                                  fontSize: 16,
                                  fontWeight: "bold",
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                }}
                              >
                                {ch}
                              </div>
                            ))}
                          </div>
                        </div>
                        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                          <span style={{ fontFamily: fonts.mono, fontSize: 16, color: theme.purple, width: 24 }}>t:</span>
                          <div style={{ display: "flex", gap: 4 }}>
                            {ex.t.split("").map((ch, cIdx) => (
                              <div
                                key={cIdx}
                                style={{
                                  width: 32,
                                  height: 32,
                                  borderRadius: 4,
                                  border: `1px solid ${theme.good}`,
                                  backgroundColor: `${theme.good}18`,
                                  color: theme.good,
                                  fontFamily: fonts.mono,
                                  fontSize: 16,
                                  fontWeight: "bold",
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                }}
                              >
                                {ch}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Explanation footer */}
                  {ex.explanation && (
                    <div
                      style={{
                        fontFamily: fonts.hand,
                        fontSize: 22,
                        color: theme.chalkDim,
                        borderTop: "1px dashed rgba(248, 246, 240, 0.08)",
                        paddingTop: 6,
                      }}
                    >
                      💡 {ex.explanation}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* ── 4. TIGHT BOTTOM FOOTER: CONSTRAINTS & GOAL ── */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              borderTop: "1px solid rgba(248, 246, 240, 0.12)",
              paddingTop: 10,
            }}
          >
            {/* Constraints */}
            <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
              <span style={{ fontFamily: fonts.mono, fontSize: 14, color: theme.chalkDim, fontWeight: "bold", letterSpacing: 1 }}>
                CONSTRAINTS:
              </span>
              {constraints.map((c, i) => (
                <span
                  key={i}
                  style={{
                    fontFamily: fonts.mono,
                    fontSize: 14,
                    color: theme.chalkText,
                    background: "rgba(248, 246, 240, 0.04)",
                    border: "1px solid rgba(248, 246, 240, 0.1)",
                    padding: "3px 10px",
                    borderRadius: 4,
                  }}
                >
                  {c}
                </span>
              ))}
            </div>

            {/* Target Goal */}
            <div
              style={{
                fontFamily: fonts.mono,
                fontSize: 15,
                color: theme.good,
                fontWeight: "bold",
                background: `${theme.good}18`,
                border: `1px solid ${theme.good}`,
                padding: "4px 14px",
                borderRadius: 5,
                letterSpacing: 1,
              }}
            >
              GOAL: {goal}
            </div>
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};
