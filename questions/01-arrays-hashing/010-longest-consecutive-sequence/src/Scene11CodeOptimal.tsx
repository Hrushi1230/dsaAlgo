import React, { useMemo } from "react";
import {
  Audio,
  interpolate,
  staticFile,
  useCurrentFrame,
} from "remotion";
import { fonts, theme } from "../../../../kit/lib/theme";
import { ChalkboardBackground, ChalkFilters } from "../../../../kit/lib/chalk";
import { ChalkDust } from "../../../../kit/components/ChalkDust";
import { Captions, CaptionWord } from "../../../../kit/components/Captions";
import syncData from "../sync/11-code-optimal.json";

// =============================================================================
// TOKEN & CODE LINE DEFINITIONS
// =============================================================================

interface CodeToken {
  text: string;
  color: string;
}

interface CodeLineDef {
  lineNum: number;
  indent: number;
  text: string;
  startF: number;
  endF: number;
  tokens: CodeToken[];
}

const CODE_LINES: CodeLineDef[] = [
  {
    lineNum: 1,
    indent: 0,
    text: "def longestConsecutive(nums):",
    startF: 0,
    endF: 28,
    tokens: [
      { text: "def ", color: theme.pivot },
      { text: "longestConsecutive", color: theme.cyan },
      { text: "(nums):", color: theme.chalkDim },
    ],
  },
  {
    lineNum: 2,
    indent: 1,
    text: "num_set = set(nums)",
    startF: 28,
    endF: 196,
    tokens: [
      { text: "num_set", color: theme.purple },
      { text: " = ", color: theme.chalkDim },
      { text: "set", color: theme.cyan },
      { text: "(nums)", color: theme.chalkText },
    ],
  },
  {
    lineNum: 3,
    indent: 1,
    text: "longest = 0",
    startF: 361,
    endF: 407,
    tokens: [
      { text: "longest", color: theme.chalkText },
      { text: " = ", color: theme.chalkDim },
      { text: "0", color: theme.good },
    ],
  },
  {
    lineNum: 4,
    indent: 0,
    text: "",
    startF: 407,
    endF: 421,
    tokens: [],
  },
  {
    lineNum: 5,
    indent: 1,
    text: "for num in num_set:",
    startF: 421,
    endF: 479,
    tokens: [
      { text: "for ", color: theme.pivot },
      { text: "num", color: theme.chalkText },
      { text: " in ", color: theme.pivot },
      { text: "num_set:", color: theme.purple },
    ],
  },
  {
    lineNum: 6,
    indent: 2,
    text: "if num - 1 not in num_set:",
    startF: 641,
    endF: 796,
    tokens: [
      { text: "if ", color: theme.pivot },
      { text: "num - 1", color: theme.cyan },
      { text: " not in ", color: theme.warn },
      { text: "num_set:", color: theme.purple },
    ],
  },
  {
    lineNum: 7,
    indent: 3,
    text: "current = num",
    startF: 993,
    endF: 1043,
    tokens: [
      { text: "current", color: theme.chalkText },
      { text: " = ", color: theme.chalkDim },
      { text: "num", color: theme.chalkText },
    ],
  },
  {
    lineNum: 8,
    indent: 3,
    text: "length = 1",
    startF: 1043,
    endF: 1078,
    tokens: [
      { text: "length", color: theme.chalkText },
      { text: " = ", color: theme.chalkDim },
      { text: "1", color: theme.good },
    ],
  },
  {
    lineNum: 9,
    indent: 0,
    text: "",
    startF: 1078,
    endF: 1095,
    tokens: [],
  },
  {
    lineNum: 10,
    indent: 3,
    text: "while current + 1 in num_set:",
    startF: 1095,
    endF: 1237,
    tokens: [
      { text: "while ", color: theme.pivot },
      { text: "current + 1", color: theme.cyan },
      { text: " in ", color: theme.pivot },
      { text: "num_set:", color: theme.purple },
    ],
  },
  {
    lineNum: 11,
    indent: 4,
    text: "current += 1",
    startF: 1253,
    endF: 1290,
    tokens: [
      { text: "current", color: theme.chalkText },
      { text: " += ", color: theme.chalkDim },
      { text: "1", color: theme.good },
    ],
  },
  {
    lineNum: 12,
    indent: 4,
    text: "length += 1",
    startF: 1310,
    endF: 1345,
    tokens: [
      { text: "length", color: theme.chalkText },
      { text: " += ", color: theme.chalkDim },
      { text: "1", color: theme.good },
    ],
  },
  {
    lineNum: 13,
    indent: 0,
    text: "",
    startF: 1345,
    endF: 1499,
    tokens: [],
  },
  {
    lineNum: 14,
    indent: 3,
    text: "longest = max(longest, length)",
    startF: 1499,
    endF: 1551,
    tokens: [
      { text: "longest", color: theme.chalkText },
      { text: " = ", color: theme.chalkDim },
      { text: "max", color: theme.cyan },
      { text: "(longest, length)", color: theme.chalkDim },
    ],
  },
  {
    lineNum: 15,
    indent: 0,
    text: "",
    startF: 1551,
    endF: 1565,
    tokens: [],
  },
  {
    lineNum: 16,
    indent: 1,
    text: "return longest",
    startF: 1565,
    endF: 1609,
    tokens: [
      { text: "return ", color: theme.pivot },
      { text: "longest", color: theme.good },
    ],
  },
];

// Clamped interpolation helper
const clamp = (f: number, input: number[], output: number[]) =>
  interpolate(f, input, output, {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

// Progressive token renderer for character-by-character code typing with syntax coloring
function renderTokensProgressive(
  tokens: Array<{ text: string; color: string }>,
  visibleChars: number
) {
  let remaining = visibleChars;
  const elements = [];
  for (let i = 0; i < tokens.length; i++) {
    if (remaining <= 0) break;
    const tok = tokens[i];
    if (remaining >= tok.text.length) {
      elements.push(
        <span
          key={i}
          style={{
            color: tok.color,
            fontWeight: "bold",
            whiteSpace: "pre",
          }}
        >
          {tok.text}
        </span>
      );
      remaining -= tok.text.length;
    } else {
      elements.push(
        <span
          key={i}
          style={{
            color: tok.color,
            fontWeight: "bold",
            whiteSpace: "pre",
          }}
        >
          {tok.text.slice(0, remaining)}
        </span>
      );
      remaining = 0;
    }
  }
  return elements;
}

// =============================================================================
// SCENE 11 COMPONENT
// =============================================================================
export const Scene11CodeOptimal: React.FC = () => {
  const frame = useCurrentFrame();

  // ----------------------------------------------------
  // Captions Sync
  // ----------------------------------------------------
  const captionWords = useMemo<CaptionWord[]>(() => {
    return (syncData.words || []).map((w) => ({
      word: w.word,
      start: w.start_ms / 1000,
      end: w.end_ms / 1000,
    }));
  }, []);

  // ----------------------------------------------------
  // Top Badge Info by Act
  // ----------------------------------------------------
  const topBadgeInfo = useMemo(() => {
    if (frame < 361) {
      return { text: "PYTHON IMPLEMENTATION · BUILD HASH SET", color: theme.purple, icon: "🟣" };
    }
    if (frame < 491) {
      return { text: "PYTHON IMPLEMENTATION · ITERATE UNIQUE VALUES", color: theme.pivot, icon: "🔍" };
    }
    if (frame < 993) {
      return { text: "THE KEY INSIGHT · PREDECESSOR GATE", color: theme.good, icon: "★" };
    }
    if (frame < 1366) {
      return { text: "PYTHON IMPLEMENTATION · WHILE LOOP WALK", color: theme.cyan, icon: "⚡" };
    }
    if (frame < 1634) {
      return { text: "PYTHON IMPLEMENTATION · UPDATE LONGEST & RETURN", color: theme.good, icon: "🏆" };
    }
    return { text: "CLEAN O(n) IMPLEMENTATION · FULL CODE", color: theme.good, icon: "✓" };
  }, [frame]);

  // Active line index currently being typed
  const activeLineIdx = useMemo(() => {
    for (let i = CODE_LINES.length - 1; i >= 0; i--) {
      if (frame >= CODE_LINES[i].startF) {
        return i;
      }
    }
    return 0;
  }, [frame]);

  // Right-side stage title
  const rightStageTitle = useMemo(() => {
    if (frame < 361) return "HASH SET CONVERSION · O(1) LOOKUP";
    if (frame < 491) return "ITERATE UNIQUE CANDIDATES";
    if (frame < 993) return "★ THE PREDECESSOR GATE (KEY LINE)";
    if (frame < 1095) return "START POINT INITIALIZATION";
    if (frame < 1366) return "SYMBOLIC FORWARD WALK";
    if (frame < 1499) return "WHILE LOOP NATURAL END";
    if (frame < 1634) return "UPDATE LONGEST & RETURN";
    return "THE CORE PATTERN";
  }, [frame]);

  // Blinking cursor
  const isCursorBlink = Math.floor(frame / 14) % 2 === 0;

  // Final review highlight state (F1703..F1871)
  const isFinalReview = frame >= 1703;

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

      <Audio src={staticFile("audio/010/11-code-optimal.mp3")} name="VO 11" />

      {/* ========================================================================= */}
      {/* TOP BADGE (Y: 28..70)                                                     */}
      {/* ========================================================================= */}
      <div
        style={{
          position: "absolute",
          top: 30,
          left: 0,
          right: 0,
          display: "flex",
          justifyContent: "center",
          zIndex: 40,
        }}
      >
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 12,
            padding: "8px 24px",
            borderRadius: 20,
            backgroundColor: "rgba(10, 36, 25, 0.85)",
            border: `1.5px solid ${topBadgeInfo.color}`,
            boxShadow: `0 0 16px ${topBadgeInfo.color}33`,
          }}
        >
          <span style={{ fontSize: 20 }}>{topBadgeInfo.icon}</span>
          <span
            style={{
              fontFamily: fonts.mono,
              fontSize: 18,
              fontWeight: 800,
              color: topBadgeInfo.color,
              letterSpacing: 1.5,
            }}
          >
            {topBadgeInfo.text}
          </span>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* LEFT CODE EDITOR (Hero: X: 60..1100, Y: 105..885)                         */}
      {/* ========================================================================= */}
      <div
        style={{
          position: "absolute",
          left: 60,
          top: 105,
          width: 1040,
          height: 825,
          borderRadius: 20,
          backgroundColor: "rgba(10, 36, 25, 0.95)",
          border: `2px solid ${isFinalReview ? theme.good : "rgba(248, 246, 240, 0.25)"}`,
          boxShadow: "0 12px 36px rgba(0, 0, 0, 0.7)",
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
          zIndex: 30,
        }}
      >
        {/* Editor Title Bar */}
        <div
          style={{
            height: 48,
            backgroundColor: "rgba(0, 0, 0, 0.35)",
            borderBottom: "1px solid rgba(248, 246, 240, 0.15)",
            display: "flex",
            alignItems: "center",
            padding: "0 20px",
            gap: 10,
          }}
        >
          <span style={{ width: 13, height: 13, borderRadius: "50%", backgroundColor: theme.warn }} />
          <span style={{ width: 13, height: 13, borderRadius: "50%", backgroundColor: theme.pivot }} />
          <span style={{ width: 13, height: 13, borderRadius: "50%", backgroundColor: theme.good }} />
          <span
            style={{
              fontFamily: fonts.mono,
              fontSize: 16,
              fontWeight: 700,
              color: theme.chalkDim,
              marginLeft: 16,
              letterSpacing: 1,
            }}
          >
            longest_consecutive.py
          </span>

          {/* Lines badge */}
          <span
            style={{
              marginLeft: "auto",
              fontFamily: fonts.hand,
              fontSize: 20,
              color: theme.good,
            }}
          >
            Optimal O(n) Solution
          </span>
        </div>

        {/* Code Content Area */}
        <div
          style={{
            padding: "24px 28px",
            display: "flex",
            flexDirection: "column",
            gap: 2,
            fontFamily: fonts.mono,
            fontSize: 26,
            lineHeight: "44px",
          }}
        >
          {CODE_LINES.map((line, idx) => {
            // Check visibility
            const isStarted = frame >= line.startF;
            if (!isStarted) return null;

            const isDone = frame >= line.endF;
            const isTyping = isStarted && !isDone;
            const isKeyConditionLine = line.lineNum === 6;

            // Opacity during final review: dim non-key lines
            const lineOpacity = isFinalReview && !isKeyConditionLine ? 0.35 : 1;

            // Character slice for typing animation
            const fullChars = line.text.length;
            const visibleChars = isDone
              ? fullChars
              : Math.floor(clamp(frame, [line.startF, line.endF], [0, fullChars]));

            // Predecessor gate line highlight
            const isKeyHighlight =
              (frame >= 491 && frame < 993 && line.lineNum === 6) ||
              (isFinalReview && line.lineNum === 6);

            return (
              <div
                key={line.lineNum}
                style={{
                  display: "flex",
                  alignItems: "center",
                  opacity: lineOpacity,
                  backgroundColor: isKeyHighlight
                    ? "rgba(255, 209, 102, 0.12)"
                    : isTyping
                    ? "rgba(248, 246, 240, 0.05)"
                    : "transparent",
                  borderRadius: 6,
                  padding: "0 8px",
                  borderLeft: isKeyHighlight
                    ? `4px solid ${theme.pivot}`
                    : "4px solid transparent",
                  transition: "opacity 0.3s ease",
                }}
              >
                {/* Line Number Gutter */}
                <span
                  style={{
                    width: 44,
                    color: isKeyHighlight ? theme.pivot : theme.chalkDim,
                    fontSize: 18,
                    fontWeight: 700,
                    userSelect: "none",
                  }}
                >
                  {line.lineNum}
                </span>

                {/* Indentation */}
                <span style={{ width: line.indent * 28 }} />

                {/* Code Tokens */}
                <span style={{ display: "inline-flex", alignItems: "center", whiteSpace: "pre" }}>
                  {line.text === "" ? (
                    <span>&nbsp;</span>
                  ) : (
                    renderTokensProgressive(line.tokens, visibleChars)
                  )}

                  {/* Blinking typing cursor */}
                  {isTyping && isCursorBlink && (
                    <span
                      style={{
                        display: "inline-block",
                        width: 10,
                        height: 24,
                        backgroundColor: theme.pivot,
                        marginLeft: 4,
                      }}
                    />
                  )}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* ========================================================================= */}
      {/* RIGHT SEMANTIC EXPLAINER STAGE (X: 1140..1860, Y: 105..930)               */}
      {/* ========================================================================= */}
      <div
        style={{
          position: "absolute",
          left: 1140,
          top: 105,
          width: 720,
          height: 825,
          borderRadius: 20,
          backgroundColor: "rgba(10, 36, 25, 0.95)",
          border: `2px dashed ${theme.purple}`,
          boxShadow: "0 12px 36px rgba(0, 0, 0, 0.7)",
          display: "flex",
          flexDirection: "column",
          padding: "24px 28px",
          zIndex: 30,
        }}
      >
        {/* Stage Header */}
        <div
          style={{
            fontFamily: fonts.mono,
            fontSize: 20,
            fontWeight: "bold",
            color: theme.purple,
            letterSpacing: 1.5,
            borderBottom: "1px dashed rgba(216, 180, 226, 0.3)",
            paddingBottom: 12,
            marginBottom: 24,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <span>{rightStageTitle}</span>
          {frame >= 361 && (
            <span
              style={{
                fontSize: 16,
                padding: "2px 10px",
                borderRadius: 8,
                backgroundColor: "rgba(60, 229, 167, 0.15)",
                color: theme.good,
                border: `1px solid ${theme.good}`,
              }}
            >
              LONGEST: {frame >= 1499 ? "max" : "0"}
            </span>
          )}
        </div>

        {/* --------------------------------------------------------------------- */}
        {/* ACT 0: HASH SET CONSTRUCTION (F0..F360)                              */}
        {/* --------------------------------------------------------------------- */}
        {frame < 361 && (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 36,
              marginTop: 20,
            }}
          >
            {/* Input tokens array */}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 10 }}>
              <span style={{ fontFamily: fonts.hand, fontSize: 24, color: theme.chalkDim }}>
                Original Elements (with duplicate 2):
              </span>
              <div style={{ display: "flex", gap: 14 }}>
                {[8, 2, 2, 9, -1].map((n, i) => (
                  <div
                    key={i}
                    style={{
                      width: 58,
                      height: 58,
                      borderRadius: 12,
                      backgroundColor: "rgba(248, 246, 240, 0.08)",
                      border: "1.5px solid rgba(248, 246, 240, 0.4)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontFamily: fonts.mono,
                      fontSize: 26,
                      fontWeight: "bold",
                      color: i === 2 ? theme.warn : theme.chalkText,
                    }}
                  >
                    {n}
                  </div>
                ))}
              </div>
            </div>

            {/* Portal Arrow */}
            <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
              <span style={{ color: theme.purple, fontSize: 32 }}>⬇</span>
              <span
                style={{
                  fontFamily: fonts.mono,
                  fontSize: 18,
                  fontWeight: 800,
                  color: theme.purple,
                  padding: "4px 12px",
                  borderRadius: 10,
                  backgroundColor: "rgba(216, 180, 226, 0.15)",
                }}
              >
                set(nums)
              </span>
              <span style={{ color: theme.purple, fontSize: 32 }}>⬇</span>
            </div>

            {/* Resulting Unique Hash Set */}
            <div
              style={{
                width: "100%",
                padding: "24px 20px",
                borderRadius: 18,
                backgroundColor: "rgba(216, 180, 226, 0.06)",
                border: `1.5px dashed ${theme.purple}`,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 16,
              }}
            >
              <div style={{ display: "flex", gap: 16 }}>
                {[8, 2, 9, -1].map((n) => {
                  const isQueried9 = frame >= 281 && n === 9;
                  return (
                    <div
                      key={n}
                      style={{
                        width: 64,
                        height: 64,
                        borderRadius: "50%",
                        backgroundColor: isQueried9
                          ? "rgba(60, 229, 167, 0.35)"
                          : "rgba(216, 180, 226, 0.12)",
                        border: isQueried9
                          ? `2.5px solid ${theme.good}`
                          : `1.5px solid ${theme.purple}`,
                        boxShadow: isQueried9 ? `0 0 20px ${theme.good}` : "none",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontFamily: fonts.mono,
                        fontSize: 26,
                        fontWeight: "bold",
                        color: isQueried9 ? theme.good : theme.chalkText,
                        transform: isQueried9 ? "scale(1.18)" : "scale(1.0)",
                      }}
                    >
                      {n}
                    </div>
                  );
                })}
              </div>

              {/* Note on O(1) */}
              <div
                style={{
                  fontFamily: fonts.hand,
                  fontSize: 26,
                  color: frame >= 281 ? theme.good : theme.chalkDim,
                  textAlign: "center",
                  marginTop: 10,
                }}
              >
                {frame >= 281
                  ? "✓ Direct O(1) membership check: instant lookup!"
                  : "✓ Duplicates removed: exactly 1 copy preserved"}
              </div>
            </div>
          </div>
        )}

        {/* --------------------------------------------------------------------- */}
        {/* ACT 1: ITERATE UNIQUE CANDIDATES (F361..F490)                         */}
        {/* --------------------------------------------------------------------- */}
        {frame >= 361 && frame < 491 && (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 36,
              marginTop: 40,
            }}
          >
            <div style={{ fontFamily: fonts.hand, fontSize: 28, color: theme.chalkDim }}>
              Iterating over the set:
            </div>

            <div style={{ display: "flex", gap: 16 }}>
              {[8, 2, 9, -1].map((n, i) => {
                const isSelected = i === 2; // candidate num
                return (
                  <div
                    key={n}
                    style={{
                      width: 74,
                      height: 74,
                      borderRadius: "50%",
                      backgroundColor: isSelected
                        ? "rgba(255, 209, 102, 0.3)"
                        : "rgba(216, 180, 226, 0.1)",
                      border: isSelected
                        ? `3px solid ${theme.pivot}`
                        : `1.5px solid ${theme.purple}`,
                      boxShadow: isSelected ? `0 0 24px ${theme.pivot}` : "none",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      transform: isSelected ? "scale(1.15)" : "scale(1.0)",
                    }}
                  >
                    <span style={{ fontFamily: fonts.mono, fontSize: 26, fontWeight: "bold", color: isSelected ? theme.pivot : theme.chalkText }}>
                      {n}
                    </span>
                    {isSelected && (
                      <span style={{ fontFamily: fonts.mono, fontSize: 11, color: theme.pivot, fontWeight: 800 }}>
                        num
                      </span>
                    )}
                  </div>
                );
              })}
            </div>

            <div
              style={{
                fontFamily: fonts.mono,
                fontSize: 22,
                color: theme.pivot,
                padding: "12px 24px",
                borderRadius: 12,
                backgroundColor: "rgba(255, 209, 102, 0.12)",
                border: `1px solid ${theme.pivot}`,
                textAlign: "center",
              }}
            >
              for num in num_set: candidate = num
            </div>
          </div>
        )}

        {/* --------------------------------------------------------------------- */}
        {/* ACT 2 & 3: THE PREDECESSOR GATE (F491..F1094)                         */}
        {/* --------------------------------------------------------------------- */}
        {frame >= 491 && frame < 1095 && (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 30,
              marginTop: 30,
            }}
          >
            {/* The Gate Header */}
            <div
              style={{
                padding: "8px 20px",
                borderRadius: 12,
                backgroundColor: "rgba(255, 209, 102, 0.15)",
                border: `1.5px solid ${theme.pivot}`,
                fontFamily: fonts.mono,
                fontSize: 20,
                fontWeight: 800,
                color: theme.pivot,
              }}
            >
              PREDECESSOR CHECK: (num - 1)
            </div>

            {/* Predecessor vs Candidate Node Visual */}
            <div style={{ display: "flex", alignItems: "center", gap: 32, marginTop: 10 }}>
              {/* Predecessor socket */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 8,
                }}
              >
                <div
                  style={{
                    width: 106,
                    height: 106,
                    borderRadius: "50%",
                    border: `2px dashed ${theme.warn}`,
                    backgroundColor: "rgba(255, 118, 117, 0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: fonts.mono,
                    fontSize: 18,
                    fontWeight: "bold",
                    color: theme.warn,
                    whiteSpace: "nowrap",
                  }}
                >
                  num - 1
                </div>
                <span style={{ fontFamily: fonts.mono, fontSize: 14, color: theme.warn, fontWeight: 700 }}>
                  ABSENT ✕
                </span>
              </div>

              {/* Gate Arrow */}
              <span style={{ fontSize: 32, color: theme.good }}>➔</span>

              {/* Candidate Node */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 8,
                }}
              >
                <div
                  style={{
                    width: 106,
                    height: 106,
                    borderRadius: "50%",
                    border: `3px solid ${theme.good}`,
                    backgroundColor: "rgba(60, 229, 167, 0.25)",
                    boxShadow: `0 0 24px ${theme.good}66`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: fonts.mono,
                    fontSize: 26,
                    fontWeight: "bold",
                    color: theme.good,
                    whiteSpace: "nowrap",
                  }}
                >
                  num
                </div>
                <span
                  style={{
                    fontFamily: fonts.mono,
                    fontSize: 15,
                    color: theme.good,
                    fontWeight: 800,
                    backgroundColor: "rgba(60, 229, 167, 0.2)",
                    padding: "2px 8px",
                    borderRadius: 6,
                  }}
                >
                  START POINT!
                </span>
              </div>
            </div>

            {/* Causal explanation */}
            <div
              style={{
                fontFamily: fonts.hand,
                fontSize: 28,
                color: theme.chalkText,
                textAlign: "center",
                lineHeight: 1.4,
                marginTop: 10,
              }}
            >
              "No number before it exists in the set.<br />
              <span style={{ color: theme.good, fontWeight: "bold" }}>
                So this number MUST be the beginning of a sequence!"
              </span>
            </div>

            {/* Initialization state if Act 3 */}
            {frame >= 993 && (
              <div
                style={{
                  display: "flex",
                  gap: 20,
                  marginTop: 10,
                  fontFamily: fonts.mono,
                  fontSize: 20,
                  fontWeight: 800,
                }}
              >
                <div
                  style={{
                    padding: "8px 18px",
                    borderRadius: 10,
                    backgroundColor: "rgba(92, 225, 230, 0.15)",
                    color: theme.cyan,
                    border: `1px solid ${theme.cyan}`,
                  }}
                >
                  current = num
                </div>
                <div
                  style={{
                    padding: "8px 18px",
                    borderRadius: 10,
                    backgroundColor: "rgba(60, 229, 167, 0.15)",
                    color: theme.good,
                    border: `1px solid ${theme.good}`,
                  }}
                >
                  length = 1
                </div>
              </div>
            )}
          </div>
        )}

        {/* --------------------------------------------------------------------- */}
        {/* ACT 4 & 5: WHILE LOOP FORWARD WALK (F1095..F1498)                     */}
        {/* --------------------------------------------------------------------- */}
        {frame >= 1095 && frame < 1499 && (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 30,
              marginTop: 30,
            }}
          >
            {/* Loop Header */}
            <div
              style={{
                padding: "8px 20px",
                borderRadius: 12,
                backgroundColor: "rgba(92, 225, 230, 0.15)",
                border: `1.5px solid ${theme.cyan}`,
                fontFamily: fonts.mono,
                fontSize: 20,
                fontWeight: 800,
                color: theme.cyan,
              }}
            >
              WHILE LOOP: while current + 1 in num_set
            </div>

            {/* Sequence stepping chain */}
            <div style={{ display: "flex", alignItems: "center", gap: 16, marginTop: 10 }}>
              <div
                style={{
                  width: 104,
                  height: 104,
                  borderRadius: "50%",
                  border: `2.5px solid ${theme.good}`,
                  backgroundColor: "rgba(60, 229, 167, 0.2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: fonts.mono,
                  fontSize: 20,
                  fontWeight: "bold",
                  color: theme.good,
                  whiteSpace: "nowrap",
                }}
              >
                current
              </div>

              <span style={{ color: theme.good, fontSize: 26 }}>➔</span>

              <div
                style={{
                  width: 104,
                  height: 104,
                  borderRadius: "50%",
                  border: `2.5px solid ${theme.cyan}`,
                  backgroundColor: "rgba(92, 225, 230, 0.25)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: fonts.mono,
                  color: theme.cyan,
                  boxShadow: `0 0 16px ${theme.cyan}44`,
                }}
              >
                <span style={{ fontSize: 18, fontWeight: "bold" }}>+ 1</span>
                <span style={{ fontSize: 13, color: theme.chalkDim }}>in set?</span>
              </div>

              {frame >= 1366 && (
                <>
                  <span style={{ color: theme.warn, fontSize: 26 }}>⇸</span>
                  <div
                    style={{
                      width: 96,
                      height: 96,
                      borderRadius: "50%",
                      border: `2px dashed ${theme.warn}`,
                      backgroundColor: "rgba(255, 118, 117, 0.15)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontFamily: fonts.mono,
                      fontSize: 15,
                      fontWeight: "bold",
                      color: theme.warn,
                      whiteSpace: "nowrap",
                    }}
                  >
                    MISSING
                  </div>
                </>
              )}
            </div>

            {/* Actions taken inside while loop */}
            <div
              style={{
                width: "100%",
                padding: "20px",
                borderRadius: 16,
                backgroundColor: "rgba(0, 0, 0, 0.25)",
                border: "1px solid rgba(248, 246, 240, 0.15)",
                display: "flex",
                flexDirection: "column",
                gap: 12,
                fontFamily: fonts.mono,
                fontSize: 20,
              }}
            >
              <div style={{ color: theme.chalkText, display: "flex", justifyContent: "space-between" }}>
                <span>1. Advance position:</span>
                <span style={{ color: theme.cyan, fontWeight: "bold" }}>current += 1</span>
              </div>
              <div style={{ color: theme.chalkText, display: "flex", justifyContent: "space-between" }}>
                <span>2. Increase count:</span>
                <span style={{ color: theme.good, fontWeight: "bold" }}>length += 1</span>
              </div>
              {frame >= 1366 && (
                <div style={{ color: theme.warn, borderTop: "1px dashed rgba(255, 118, 117, 0.4)", paddingTop: 8 }}>
                  3. Next value missing ➔ Loop terminates naturally!
                </div>
              )}
            </div>
          </div>
        )}

        {/* --------------------------------------------------------------------- */}
        {/* ACT 6 & 7: MAX & FINAL REVIEW (F1499..F1871)                          */}
        {/* --------------------------------------------------------------------- */}
        {frame >= 1499 && (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 26,
              marginTop: 20,
            }}
          >
            {/* Max logic */}
            <div
              style={{
                width: "100%",
                padding: "20px 24px",
                borderRadius: 16,
                backgroundColor: "rgba(60, 229, 167, 0.1)",
                border: `2px solid ${theme.good}`,
                display: "flex",
                flexDirection: "column",
                gap: 12,
              }}
            >
              <span
                style={{
                  fontFamily: fonts.mono,
                  fontSize: 22,
                  fontWeight: 800,
                  color: theme.good,
                  letterSpacing: 1,
                }}
              >
                longest = max(longest, length)
              </span>
              <span style={{ fontFamily: fonts.hand, fontSize: 24, color: theme.chalkDim }}>
                Keep the maximum length found across all starting points.
              </span>
            </div>

            {/* The 3 Core Pillars */}
            <div
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                gap: 14,
                marginTop: 10,
              }}
            >
              <div
                style={{
                  padding: "12px 18px",
                  borderRadius: 12,
                  backgroundColor: "rgba(216, 180, 226, 0.12)",
                  border: `1.5px solid ${theme.purple}`,
                  fontFamily: fonts.mono,
                  fontSize: 18,
                  fontWeight: 700,
                  color: theme.purple,
                }}
              >
                1. HASH SET: O(1) existence checks
              </div>
              <div
                style={{
                  padding: "12px 18px",
                  borderRadius: 12,
                  backgroundColor: "rgba(255, 209, 102, 0.15)",
                  border: `2px solid ${theme.pivot}`,
                  fontFamily: fonts.mono,
                  fontSize: 18,
                  fontWeight: 800,
                  color: theme.pivot,
                  boxShadow: `0 0 16px ${theme.pivot}33`,
                }}
              >
                2. PREDECESSOR GATE: Only walk from starts
              </div>
              <div
                style={{
                  padding: "12px 18px",
                  borderRadius: 12,
                  backgroundColor: "rgba(60, 229, 167, 0.12)",
                  border: `1.5px solid ${theme.good}`,
                  fontFamily: fonts.mono,
                  fontSize: 18,
                  fontWeight: 700,
                  color: theme.good,
                }}
              >
                3. LINEAR PASS: Each number visited ≤ 2 times
              </div>
            </div>

            {/* Bottom summary note */}
            <div
              style={{
                fontFamily: fonts.hand,
                fontSize: 26,
                color: theme.pivot,
                textAlign: "center",
                marginTop: 12,
                lineHeight: 1.4,
              }}
            >
              "The code is short because the hard work was understanding where a sequence starts!"
            </div>
          </div>
        )}
      </div>

      {/* ========================================================================= */}
      {/* CAPTIONS SAFE ZONE (Y: 960..1040)                                         */}
      {/* ========================================================================= */}
      <Captions words={captionWords} bottom={38} fontSize={38} />
    </div>
  );
};
