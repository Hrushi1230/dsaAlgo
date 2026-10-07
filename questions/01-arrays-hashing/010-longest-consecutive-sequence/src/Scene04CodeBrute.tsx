import React, { useMemo } from "react";
import { useCurrentFrame, interpolate, staticFile, Audio, Sequence } from "remotion";
import { theme, fonts } from "../../../../kit/lib/theme";
import { Captions, CaptionWord } from "../../../../kit/components/Captions";
import syncData from "../sync/04-code-brute.json";

// Types
interface CodeLineDef {
  lineNum: number;
  indent: number;
  text: string;
  startFrame: number;
  endFrame: number;
  tokens: { text: string; color: string }[];
}

// Global raw array from previous scenes
const RAW_ARRAY = [8, 1, 6, 3, 2, 2, 4, 10, 9, 11, -1, 0];

// The exact Python code to type across narration windows
const CODE_LINES: CodeLineDef[] = [
  {
    lineNum: 1,
    indent: 0,
    text: "def longestConsecutive(nums):",
    startFrame: 64,
    endFrame: 121,
    tokens: [
      { text: "def ", color: theme.pivot },
      { text: "longestConsecutive", color: theme.cyan },
      { text: "(nums):", color: theme.chalkDim },
    ],
  },
  {
    lineNum: 2,
    indent: 1,
    text: "longest = 0",
    startFrame: 143,
    endFrame: 223,
    tokens: [
      { text: "longest", color: theme.chalkText },
      { text: " = ", color: theme.chalkDim },
      { text: "0", color: theme.good },
    ],
  },
  {
    lineNum: 3,
    indent: 0,
    text: "",
    startFrame: 224,
    endFrame: 242,
    tokens: [],
  },
  {
    lineNum: 4,
    indent: 1,
    text: "for num in nums:",
    startFrame: 243,
    endFrame: 356,
    tokens: [
      { text: "for ", color: theme.pivot },
      { text: "num", color: theme.chalkText },
      { text: " in ", color: theme.pivot },
      { text: "nums:", color: theme.chalkDim },
    ],
  },
  {
    lineNum: 5,
    indent: 2,
    text: "current = num",
    startFrame: 485,
    endFrame: 562,
    tokens: [
      { text: "current", color: theme.chalkText },
      { text: " = ", color: theme.chalkDim },
      { text: "num", color: theme.chalkText },
    ],
  },
  {
    lineNum: 6,
    indent: 2,
    text: "length = 1",
    startFrame: 567,
    endFrame: 611,
    tokens: [
      { text: "length", color: theme.chalkText },
      { text: " = ", color: theme.chalkDim },
      { text: "1", color: theme.good },
    ],
  },
  {
    lineNum: 7,
    indent: 0,
    text: "",
    startFrame: 612,
    endFrame: 631,
    tokens: [],
  },
  {
    lineNum: 8,
    indent: 2,
    text: "while current + 1 in nums:",
    startFrame: 632,
    endFrame: 856,
    tokens: [
      { text: "while ", color: theme.pivot },
      { text: "current", color: theme.chalkText },
      { text: " + ", color: theme.chalkDim },
      { text: "1", color: theme.good },
      { text: " in ", color: theme.pivot },
      { text: "nums:", color: theme.chalkDim },
    ],
  },
  {
    lineNum: 9,
    indent: 3,
    text: "current += 1",
    startFrame: 857,
    endFrame: 899,
    tokens: [
      { text: "current", color: theme.chalkText },
      { text: " += ", color: theme.chalkDim },
      { text: "1", color: theme.good },
    ],
  },
  {
    lineNum: 10,
    indent: 3,
    text: "length += 1",
    startFrame: 899,
    endFrame: 934,
    tokens: [
      { text: "length", color: theme.chalkText },
      { text: " += ", color: theme.chalkDim },
      { text: "1", color: theme.good },
    ],
  },
  {
    lineNum: 11,
    indent: 0,
    text: "",
    startFrame: 935,
    endFrame: 1047,
    tokens: [],
  },
  {
    lineNum: 12,
    indent: 2,
    text: "longest = max(longest, length)",
    startFrame: 1048,
    endFrame: 1219,
    tokens: [
      { text: "longest", color: theme.chalkText },
      { text: " = ", color: theme.chalkDim },
      { text: "max", color: theme.cyan },
      { text: "(longest, length)", color: theme.chalkDim },
    ],
  },
  {
    lineNum: 13,
    indent: 0,
    text: "",
    startFrame: 1219,
    endFrame: 1220,
    tokens: [],
  },
  {
    lineNum: 14,
    indent: 1,
    text: "return longest",
    startFrame: 1220,
    endFrame: 1280,
    tokens: [
      { text: "return ", color: theme.pivot },
      { text: "longest", color: theme.chalkText },
    ],
  },
];

export const Scene04CodeBrute: React.FC = () => {
  const frame = useCurrentFrame();

  // ----------------------------------------------------
  // Audio & Captions Sync
  // ----------------------------------------------------
  const captionWords = useMemo<CaptionWord[]>(() => {
    return (syncData.words || []).map((w) => ({
      word: w.word,
      start: w.start_ms / 1000,
      end: w.end_ms / 1000,
    }));
  }, []);

  // ----------------------------------------------------
  // Continuity Handoff from Scene 03 (F0..F30)
  // ----------------------------------------------------
  const editorExpandProgress = interpolate(frame, [0, 35], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const editorScaleY = interpolate(editorExpandProgress, [0, 1], [0.05, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const editorOpacity = interpolate(editorExpandProgress, [0, 1], [0.6, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // ----------------------------------------------------
  // Code Editor State & Typing Calculation
  // ----------------------------------------------------
  // Determine active line
  let activeLineNum = 1;
  if (frame < 64) {
    activeLineNum = 1;
  } else if (frame < 143) {
    activeLineNum = 1;
  } else if (frame < 243) {
    activeLineNum = 2;
  } else if (frame < 485) {
    activeLineNum = 4;
  } else if (frame < 567) {
    activeLineNum = 5;
  } else if (frame < 632) {
    activeLineNum = 6;
  } else if (frame < 857) {
    activeLineNum = 8;
  } else if (frame < 899) {
    activeLineNum = 9;
  } else if (frame < 935) {
    activeLineNum = 10;
  } else if (frame < 1048) {
    // Act 7: while block highlighted
    activeLineNum = 8;
  } else if (frame < 1220) {
    activeLineNum = 12;
  } else if (frame < 1301) {
    activeLineNum = 14;
  } else {
    // Act 10 & 11: while line spotlighted as hot line
    activeLineNum = 8;
  }

  const isHotLineAct10 = frame >= 1301;
  const cursorBlink = Math.floor(frame / 14) % 2 === 0;

  // Progressive token renderer for character-by-character code typing with syntax coloring
  const renderTokensProgressive = (
    tokens: { text: string; color: string }[],
    visibleChars: number
  ) => {
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
  };

  // ----------------------------------------------------
  // Right Explainer Panel State
  // ----------------------------------------------------
  // Which act are we in?
  const act0 = frame < 143;
  const act1 = frame >= 143 && frame < 243;
  const act2 = frame >= 243 && frame < 357;
  const act3 = frame >= 357 && frame < 485;
  const act4 = frame >= 485 && frame < 632;
  const act5 = frame >= 632 && frame < 857;
  const act6 = frame >= 857 && frame < 935;
  const act7 = frame >= 935 && frame < 1048;
  const act8 = frame >= 1048 && frame < 1220;
  const act9 = frame >= 1220 && frame < 1301;
  const act10 = frame >= 1301 && frame < 1957;
  const act11 = frame >= 1957;

  // Act 2 pointer sweep across all 12 elements (F243..F356)
  const act2PointerIdx = Math.floor(
    interpolate(frame, [250, 335], [0, 11], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    })
  );

  // Act 3 candidate starts cycling (8 -> 1 -> 6)
  let act3StartVal = 8;
  let act3StartIdx = 0;
  if (frame >= 400 && frame < 442) {
    act3StartVal = 1;
    act3StartIdx = 1;
  } else if (frame >= 442) {
    act3StartVal = 6;
    act3StartIdx = 2;
  }

  // Act 5 sweep beam across array to find 9 (F730..F797)
  const act5SweepTarget = 8; // index of 9
  const act5SweepProg = interpolate(frame, [730, 780], [0, act5SweepTarget], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const act5Found = frame >= 780;

  // Act 7 stop condition: sweep to end and miss 12 (F945..F995)
  const act7SweepProg = interpolate(frame, [945, 995], [0, 12], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Act 8 max comparison cards sliding together (F1050..F1130)
  const act8Slide = interpolate(frame, [1050, 1100], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const act8ShowResult = frame >= 1130;

  // Act 10 phases
  // Phase A: F1301..F1405 (Isolate line)
  // Phase B: F1406..F1550 (Python list walk intro)
  // Phase C: F1551..F1675 (Linear walk cost to find 9)
  // Phase D: F1676..F1956 (Stacked ghost scans: again... and again... and again)
  const act10PhaseCProg = interpolate(frame, [1560, 1650], [0, 8], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const act10AgainCount = frame >= 1836 ? 3 : frame >= 1784 ? 2 : frame >= 1676 ? 1 : 0;

  return (
    <div
      style={{
        width: 1920,
        height: 1080,
        backgroundColor: theme.boardBg,
        position: "relative",
        overflow: "hidden",
        fontFamily: fonts.hand,
      }}
    >
      {/* Audio Track */}
      <Sequence name="audio-04-code-brute">
        <Audio src={staticFile("audio/010/04-code-brute.mp3")} />
      </Sequence>

      {/* Top Header & Context Badges */}
      <div
        style={{
          position: "absolute",
          top: 28,
          left: 0,
          right: 0,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 10,
        }}
      >
        <div
          style={{
            padding: "8px 26px",
            borderRadius: 24,
            border: `1.5px solid ${theme.pivot}`,
            backgroundColor: "rgba(25, 82, 60, 0.85)",
            boxShadow: `0 0 16px rgba(255, 209, 102, 0.25)`,
            display: "flex",
            alignItems: "center",
            gap: 12,
          }}
        >
          <div
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              backgroundColor: theme.pivot,
              boxShadow: `0 0 8px ${theme.pivot}`,
            }}
          />
          <span
            style={{
              fontFamily: fonts.mono,
              fontSize: 16,
              fontWeight: 700,
              color: theme.pivot,
              letterSpacing: 2,
            }}
          >
            BRUTE FORCE • CODE
          </span>
        </div>
      </div>

      {/* Top-Right Scene Label */}
      <div
        style={{
          position: "absolute",
          top: 36,
          right: 70,
          fontFamily: fonts.mono,
          fontSize: 14,
          color: theme.chalkDim,
          letterSpacing: 1.5,
          zIndex: 10,
        }}
      >
        LC128 · BUILD THE CODE
      </div>

      {/* ========================================================================= */}
      {/* LEFT PANEL: CODE EDITOR (x: 60..930, width: 870px, top: 105px)          */}
      {/* ========================================================================= */}
      <div
        style={{
          position: "absolute",
          left: 60,
          top: 105,
          width: 870,
          height: 825,
          borderRadius: 20,
          backgroundColor: "rgba(10, 36, 25, 0.95)",
          border: `2px solid ${isHotLineAct10 ? theme.pivot : "rgba(248, 246, 240, 0.25)"}`,
          boxShadow: "0 12px 36px rgba(0, 0, 0, 0.7)",
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
          transformOrigin: "bottom center",
          transform: `scaleY(${editorScaleY})`,
          opacity: editorOpacity,
          zIndex: 20,
        }}
      >
        {/* Editor Window Header Tab */}
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
            brute_force.py
          </span>
          <span
            style={{
              marginLeft: "auto",
              fontFamily: fonts.hand,
              fontSize: 20,
              color: theme.warn,
            }}
          >
            Brute Force O(n³) Solution
          </span>
        </div>

        {/* Code Content Lines */}
        <div
          style={{
            padding: "24px 28px",
            display: "flex",
            flexDirection: "column",
            gap: 2,
            fontFamily: fonts.mono,
            fontSize: 25,
            lineHeight: "42px",
          }}
        >
          {CODE_LINES.map((line) => {
            if (frame < line.startFrame) return null;

            // Character typing calculation
            let charsVisible = line.text.length;
            if (frame < line.endFrame && line.text.length > 0) {
              charsVisible = Math.max(
                1,
                Math.floor(
                  interpolate(frame, [line.startFrame, line.endFrame], [1, line.text.length], {
                    extrapolateLeft: "clamp",
                    extrapolateRight: "clamp",
                  })
                )
              );
            }

            const isActiveLine = activeLineNum === line.lineNum;
            const isSpotlightWhile = line.lineNum === 8 && (isHotLineAct10 || act7);

            return (
              <div
                key={line.lineNum}
                style={{
                  display: "flex",
                  alignItems: "center",
                  borderRadius: 6,
                  backgroundColor: isSpotlightWhile
                    ? "rgba(255, 209, 102, 0.16)"
                    : isActiveLine
                    ? "rgba(248, 246, 240, 0.08)"
                    : "transparent",
                  borderLeft: isSpotlightWhile
                    ? `4px solid ${theme.pivot}`
                    : isActiveLine
                    ? `4px solid ${theme.cyan}`
                    : "4px solid transparent",
                  padding: "0 8px",
                  opacity: isSpotlightWhile ? 1 : isActiveLine ? 1 : 0.78,
                  boxShadow: isSpotlightWhile ? "0 0 16px rgba(255, 209, 102, 0.2)" : "none",
                }}
              >
                {/* Line Number Gutter */}
                <span
                  style={{
                    width: 44,
                    color: isSpotlightWhile
                      ? theme.pivot
                      : isActiveLine
                      ? theme.cyan
                      : theme.chalkDim,
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
                    renderTokensProgressive(line.tokens, charsVisible)
                  )}

                  {/* Blinking Cursor on Active Typing Line */}
                  {isActiveLine && cursorBlink && (
                    <span
                      style={{
                        display: "inline-block",
                        width: 8,
                        height: 24,
                        backgroundColor: isSpotlightWhile ? theme.pivot : theme.cyan,
                        marginLeft: 4,
                        boxShadow: `0 0 8px ${isSpotlightWhile ? theme.pivot : theme.cyan}`,
                      }}
                    />
                  )}
                </span>

                {/* Hot Line Pill Tag on Line 8 during Act 10/11 */}
                {line.lineNum === 8 && isHotLineAct10 && (
                  <div
                    style={{
                      marginLeft: "auto",
                      padding: "2px 10px",
                      borderRadius: 12,
                      backgroundColor: "rgba(255, 107, 107, 0.25)",
                      border: `1px solid ${theme.warn}`,
                      fontFamily: fonts.mono,
                      fontSize: 13,
                      fontWeight: 700,
                      color: theme.warn,
                      display: "flex",
                      alignItems: "center",
                      gap: 4,
                    }}
                  >
                    <span>HOT LINE</span>
                    <span>⚡</span>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* ========================================================================= */}
      {/* RIGHT PANEL: MOTION GRAPHICS EXPLAINER (x: 980..1860, width: 880px)     */}
      {/* ========================================================================= */}
      <div
        style={{
          position: "absolute",
          left: 980,
          top: 105,
          width: 880,
          height: 825,
          borderRadius: 16,
          backgroundColor: "rgba(18, 62, 43, 0.65)",
          border: "1.5px dashed rgba(248, 246, 240, 0.2)",
          boxShadow: "0 18px 45px rgba(0, 0, 0, 0.25)",
          display: "flex",
          flexDirection: "column",
          padding: 28,
          boxSizing: "border-box",
          zIndex: 20,
        }}
      >
        {/* Panel Header Title */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: 20,
            borderBottom: "1px solid rgba(248, 246, 240, 0.12)",
            paddingBottom: 12,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <span style={{ fontSize: 20, color: theme.pivot }}>✎</span>
            <span
              style={{
                fontFamily: fonts.mono,
                fontSize: 18,
                fontWeight: 700,
                color: theme.chalkText,
                letterSpacing: 1,
              }}
            >
              UNDERSTANDING THE CODE
            </span>
          </div>
          <span
            style={{
              fontFamily: fonts.mono,
              fontSize: 13,
              color: theme.chalkDim,
            }}
          >
            {act0 && "TRACE → CODE"}
            {act1 && "VARIABLE INITIALIZATION"}
            {(act2 || act3) && "OUTER LOOP (ALL STARTS)"}
            {act4 && "TRACKING CURRENT RUN"}
            {(act5 || act6 || act7) && "INNER SEARCH ENGINE"}
            {act8 && "RECORDING MAXIMUM"}
            {act9 && "RETURN ANSWER"}
            {(act10 || act11) && "PERFORMANCE BOTTLENECK"}
          </span>
        </div>

        {/* Dynamic Explainer Body */}
        <div
          style={{
            flex: 1,
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {/* ------------------------------------------------------------- */}
          {/* ACT 0: BRIDGE (F0..142)                                      */}
          {/* ------------------------------------------------------------- */}
          {act0 && (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 24,
                textAlign: "center",
              }}
            >
              <div
                style={{
                  padding: "16px 36px",
                  borderRadius: 14,
                  backgroundColor: "rgba(25, 82, 60, 0.9)",
                  border: `2px solid ${theme.cyan}`,
                  boxShadow: `0 0 24px rgba(92, 225, 230, 0.25)`,
                }}
              >
                <div style={{ fontFamily: fonts.mono, fontSize: 32, fontWeight: 700, color: theme.chalkText }}>
                  TRACE <span style={{ color: theme.pivot }}>──►</span> CODE
                </div>
                <div style={{ fontSize: 20, color: theme.chalkDim, marginTop: 8 }}>
                  Translating visual array logic into executable Python lines
                </div>
              </div>
              <div style={{ fontSize: 24, color: theme.chalkText, maxWidth: 600 }}>
                Every check we performed by hand becomes a specific programming construct.
              </div>
            </div>
          )}

          {/* ------------------------------------------------------------- */}
          {/* ACT 1: LONGEST = 0 (F143..242)                                */}
          {/* ------------------------------------------------------------- */}
          {act1 && (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 20,
              }}
            >
              <div
                style={{
                  width: 320,
                  padding: "24px 28px",
                  borderRadius: 18,
                  backgroundColor: "rgba(25, 82, 60, 0.9)",
                  border: `2px solid ${theme.pivot}`,
                  boxShadow: `0 0 28px rgba(255, 209, 102, 0.3)`,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 12,
                }}
              >
                <span style={{ fontFamily: fonts.mono, fontSize: 18, color: theme.pivot, letterSpacing: 2 }}>
                  VARIABLE: LONGEST
                </span>
                <span style={{ fontSize: 16, color: theme.chalkDim }}>best length seen so far</span>
                <div
                  style={{
                    fontSize: 72,
                    fontWeight: 700,
                    fontFamily: fonts.mono,
                    color: theme.good,
                    textShadow: `0 0 16px ${theme.good}`,
                  }}
                >
                  0
                </div>
              </div>
              <span style={{ fontSize: 20, color: theme.chalkText }}>
                Starts at 0 before any candidate sequence is evaluated.
              </span>
            </div>
          )}

          {/* ------------------------------------------------------------- */}
          {/* ACT 2 & 3: FOR NUM IN NUMS (F243..484)                       */}
          {/* ------------------------------------------------------------- */}
          {(act2 || act3) && (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 32,
                width: "100%",
              }}
            >
              <div
                style={{
                  padding: "8px 24px",
                  borderRadius: 12,
                  backgroundColor: "rgba(255, 209, 102, 0.15)",
                  border: `1px solid ${theme.pivot}`,
                  fontFamily: fonts.mono,
                  fontSize: 18,
                  color: theme.pivot,
                }}
              >
                {act2 ? "for num in nums:  (Visit all 12 elements)" : "Each element = Candidate Start"}
              </div>

              {/* Array Iteration Rail */}
              <div style={{ display: "flex", gap: 8, alignItems: "center", justifyContent: "center" }}>
                {RAW_ARRAY.map((val, idx) => {
                  const isCurrent = act2 ? idx === act2PointerIdx : idx === act3StartIdx;
                  return (
                    <div
                      key={idx}
                      style={{
                        width: 58,
                        height: 72,
                        borderRadius: 10,
                        backgroundColor: isCurrent ? "rgba(255, 209, 102, 0.25)" : "rgba(10, 36, 25, 0.7)",
                        border: `1.5px solid ${isCurrent ? theme.pivot : "rgba(248, 246, 240, 0.2)"}`,
                        boxShadow: isCurrent ? `0 0 18px ${theme.pivot}` : "none",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        position: "relative",
                        transform: isCurrent ? "scale(1.1)" : "scale(1)",
                      }}
                    >
                      <span style={{ fontFamily: fonts.mono, fontSize: 11, color: theme.chalkDim, position: "absolute", top: 4 }}>
                        [{idx}]
                      </span>
                      <span
                        style={{
                          fontFamily: fonts.mono,
                          fontSize: 24,
                          fontWeight: 700,
                          color: isCurrent ? theme.pivot : theme.chalkText,
                          marginTop: 12,
                        }}
                      >
                        {val}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* Pointer Callout */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 8,
                }}
              >
                <span style={{ fontSize: 24, color: theme.pivot }}>▲</span>
                <span style={{ fontFamily: fonts.mono, fontSize: 22, color: theme.chalkText }}>
                  {act2
                    ? `nums[${act2PointerIdx}] = ${RAW_ARRAY[act2PointerIdx]}`
                    : `Evaluating start: ${act3StartVal}`}
                </span>
                <span style={{ fontSize: 18, color: theme.chalkDim }}>
                  {act2
                    ? "Iterating one by one across the entire input array"
                    : "Brute force gives every single number a chance to form a run"}
                </span>
              </div>
            </div>
          )}

          {/* ------------------------------------------------------------- */}
          {/* ACT 4: CURRENT = NUM & LENGTH = 1 (F485..631)                */}
          {/* ------------------------------------------------------------- */}
          {act4 && (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 28,
              }}
            >
              <div style={{ fontSize: 22, color: theme.chalkDim }}>
                Starting with element <span style={{ color: theme.pivot, fontWeight: 700 }}>8</span>:
              </div>

              <div style={{ display: "flex", gap: 36, alignItems: "center" }}>
                {/* CURRENT card */}
                <div
                  style={{
                    width: 240,
                    padding: "20px 24px",
                    borderRadius: 16,
                    backgroundColor: "rgba(25, 82, 60, 0.9)",
                    border: `2px solid ${theme.cyan}`,
                    boxShadow: `0 0 20px rgba(92, 225, 230, 0.3)`,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 10,
                  }}
                >
                  <span style={{ fontFamily: fonts.mono, fontSize: 16, color: theme.cyan, letterSpacing: 1.5 }}>
                    CURRENT
                  </span>
                  <span style={{ fontSize: 14, color: theme.chalkDim }}>standing number</span>
                  <span style={{ fontFamily: fonts.mono, fontSize: 54, fontWeight: 700, color: theme.chalkText }}>
                    8
                  </span>
                </div>

                <span style={{ fontSize: 32, color: theme.chalkDim }}>+</span>

                {/* LENGTH card */}
                <div
                  style={{
                    width: 240,
                    padding: "20px 24px",
                    borderRadius: 16,
                    backgroundColor: "rgba(25, 82, 60, 0.9)",
                    border: `2px solid ${theme.good}`,
                    boxShadow: `0 0 20px rgba(46, 216, 163, 0.3)`,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 10,
                  }}
                >
                  <span style={{ fontFamily: fonts.mono, fontSize: 16, color: theme.good, letterSpacing: 1.5 }}>
                    LENGTH
                  </span>
                  <span style={{ fontSize: 14, color: theme.chalkDim }}>streak counter</span>
                  <span style={{ fontFamily: fonts.mono, fontSize: 54, fontWeight: 700, color: theme.good }}>
                    1
                  </span>
                </div>
              </div>

              <span style={{ fontSize: 20, color: theme.chalkText, textAlign: "center", maxWidth: 620 }}>
                Length begins at 1 because the starting number itself is counted as the first element.
              </span>
            </div>
          )}

          {/* ------------------------------------------------------------- */}
          {/* ACT 5: WHILE CURRENT + 1 IN NUMS (F632..856)                  */}
          {/* ------------------------------------------------------------- */}
          {act5 && (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 26,
                width: "100%",
              }}
            >
              {/* Target Query Bubble */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 16,
                  padding: "12px 30px",
                  borderRadius: 30,
                  backgroundColor: "rgba(25, 82, 60, 0.95)",
                  border: `2px solid ${theme.cyan}`,
                  boxShadow: `0 0 24px rgba(92, 225, 230, 0.3)`,
                }}
              >
                <span style={{ fontFamily: fonts.mono, fontSize: 20, color: theme.chalkDim }}>
                  LOOK FOR: current + 1
                </span>
                <span style={{ fontFamily: fonts.mono, fontSize: 22, color: theme.pivot }}>
                  (8 + 1) =
                </span>
                <span style={{ fontFamily: fonts.mono, fontSize: 32, fontWeight: 700, color: theme.good }}>
                  9
                </span>
                <span
                  style={{
                    padding: "4px 12px",
                    borderRadius: 14,
                    backgroundColor: act5Found ? "rgba(46, 216, 163, 0.25)" : "rgba(255, 209, 102, 0.2)",
                    border: `1px solid ${act5Found ? theme.good : theme.pivot}`,
                    fontFamily: fonts.mono,
                    fontSize: 14,
                    fontWeight: 700,
                    color: act5Found ? theme.good : theme.pivot,
                  }}
                >
                  {act5Found ? "FOUND ✓" : "SEARCHING..."}
                </span>
              </div>

              {/* Array Scan Track */}
              <div style={{ display: "flex", gap: 8, alignItems: "center", justifyContent: "center" }}>
                {RAW_ARRAY.map((val, idx) => {
                  const isFoundCard = idx === 8;
                  return (
                    <div
                      key={idx}
                      style={{
                        width: 58,
                        height: 68,
                        borderRadius: 10,
                        backgroundColor: isFoundCard && act5Found ? "rgba(46, 216, 163, 0.25)" : "rgba(10, 36, 25, 0.7)",
                        border: `1.5px solid ${isFoundCard && act5Found ? theme.good : "rgba(248, 246, 240, 0.2)"}`,
                        boxShadow: isFoundCard && act5Found ? `0 0 20px ${theme.good}` : "none",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <span style={{ fontFamily: fonts.mono, fontSize: 10, color: theme.chalkDim }}>
                        [{idx}]
                      </span>
                      <span
                        style={{
                          fontFamily: fonts.mono,
                          fontSize: 22,
                          fontWeight: 700,
                          color: isFoundCard && act5Found ? theme.good : theme.chalkText,
                        }}
                      >
                        {val}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* Cyan Scan Beam Lane */}
              <div
                style={{
                  width: "90%",
                  height: 6,
                  borderRadius: 3,
                  backgroundColor: "rgba(248, 246, 240, 0.15)",
                  position: "relative",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    height: "100%",
                    width: `${(act5SweepProg / 11) * 100}%`,
                    backgroundColor: theme.cyan,
                    boxShadow: `0 0 12px ${theme.cyan}`,
                  }}
                />
              </div>

              <span style={{ fontSize: 20, color: theme.chalkText, textAlign: "center" }}>
                {act5Found
                  ? "9 exists in nums! Loop condition is TRUE ──► advance current and length."
                  : "Scanning through the list to check if 9 exists..."}
              </span>
            </div>
          )}

          {/* ------------------------------------------------------------- */}
          {/* ACT 6: TANDEM UPDATES (F857..934)                             */}
          {/* ------------------------------------------------------------- */}
          {act6 && (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 28,
              }}
            >
              <div
                style={{
                  padding: "8px 24px",
                  borderRadius: 14,
                  backgroundColor: "rgba(46, 216, 163, 0.15)",
                  border: `1.5px solid ${theme.good}`,
                  fontFamily: fonts.mono,
                  fontSize: 18,
                  color: theme.good,
                }}
              >
                TANDEM STATE UPDATE
              </div>

              {/* Side-by-side progression cards */}
              <div style={{ display: "flex", gap: 36, alignItems: "center" }}>
                <div
                  style={{
                    width: 250,
                    padding: "20px 24px",
                    borderRadius: 16,
                    backgroundColor: "rgba(25, 82, 60, 0.9)",
                    border: `2px solid ${theme.cyan}`,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 10,
                  }}
                >
                  <span style={{ fontFamily: fonts.mono, fontSize: 16, color: theme.cyan }}>
                    current += 1
                  </span>
                  <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                    <span style={{ fontFamily: fonts.mono, fontSize: 36, color: theme.chalkDim }}>8</span>
                    <span style={{ color: theme.pivot, fontSize: 28 }}>►</span>
                    <span style={{ fontFamily: fonts.mono, fontSize: 52, fontWeight: 700, color: theme.good }}>9</span>
                  </div>
                </div>

                <div
                  style={{
                    width: 250,
                    padding: "20px 24px",
                    borderRadius: 16,
                    backgroundColor: "rgba(25, 82, 60, 0.9)",
                    border: `2px solid ${theme.good}`,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 10,
                  }}
                >
                  <span style={{ fontFamily: fonts.mono, fontSize: 16, color: theme.good }}>
                    length += 1
                  </span>
                  <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                    <span style={{ fontFamily: fonts.mono, fontSize: 36, color: theme.chalkDim }}>1</span>
                    <span style={{ color: theme.pivot, fontSize: 28 }}>►</span>
                    <span style={{ fontFamily: fonts.mono, fontSize: 52, fontWeight: 700, color: theme.good }}>2</span>
                  </div>
                </div>
              </div>

              {/* Chain Ribbon */}
              <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                <div style={{ padding: "12px 24px", borderRadius: 10, backgroundColor: "rgba(10, 36, 25, 0.8)", border: `1.5px solid ${theme.good}`, fontFamily: fonts.mono, fontSize: 28, color: theme.chalkText }}>
                  8
                </div>
                <span style={{ fontSize: 24, color: theme.good }}>──►</span>
                <div style={{ padding: "12px 24px", borderRadius: 10, backgroundColor: "rgba(46, 216, 163, 0.25)", border: `1.5px solid ${theme.good}`, fontFamily: fonts.mono, fontSize: 28, color: theme.good, boxShadow: `0 0 16px ${theme.good}` }}>
                  9
                </div>
              </div>
            </div>
          )}

          {/* ------------------------------------------------------------- */}
          {/* ACT 7: STOP CONDITION (F935..1047)                            */}
          {/* ------------------------------------------------------------- */}
          {act7 && (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 28,
                width: "100%",
              }}
            >
              <div
                style={{
                  padding: "8px 24px",
                  borderRadius: 14,
                  backgroundColor: "rgba(255, 107, 107, 0.15)",
                  border: `1.5px solid ${theme.warn}`,
                  fontFamily: fonts.mono,
                  fontSize: 18,
                  color: theme.warn,
                }}
              >
                WHILE LOOP TERMINATION (FALSE CONDITION)
              </div>

              {/* Failed Query Box */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 20,
                  padding: "16px 36px",
                  borderRadius: 18,
                  backgroundColor: "rgba(25, 82, 60, 0.9)",
                  border: `2px dashed ${theme.warn}`,
                  boxShadow: `0 0 24px rgba(255, 107, 107, 0.25)`,
                }}
              >
                <span style={{ fontFamily: fonts.mono, fontSize: 20, color: theme.chalkDim }}>
                  CURRENT = 11  ──►  LOOK FOR
                </span>
                <span style={{ fontFamily: fonts.mono, fontSize: 36, fontWeight: 700, color: theme.warn }}>
                  12
                </span>
                <span style={{ padding: "4px 14px", borderRadius: 12, backgroundColor: "rgba(255, 107, 107, 0.25)", color: theme.warn, fontFamily: fonts.mono, fontSize: 16, fontWeight: 700 }}>
                  NOT IN NUMS ✗
                </span>
              </div>

              {/* Ribbon ending with fracture */}
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                {["8", "9", "10", "11"].map((v, i) => (
                  <React.Fragment key={i}>
                    <div style={{ padding: "10px 18px", borderRadius: 8, backgroundColor: "rgba(10, 36, 25, 0.8)", border: `1.5px solid ${theme.good}`, fontFamily: fonts.mono, fontSize: 24, color: theme.chalkText }}>
                      {v}
                    </div>
                    <span style={{ color: theme.good, fontSize: 20 }}>─</span>
                  </React.Fragment>
                ))}
                <div style={{ padding: "10px 18px", borderRadius: 8, backgroundColor: "rgba(255, 107, 107, 0.15)", border: `1.5px dashed ${theme.warn}`, fontFamily: fonts.mono, fontSize: 24, color: theme.warn }}>
                  ✕ 12
                </div>
              </div>

              {/* Full array scan track showing failed search */}
              <div
                style={{
                  width: "70%",
                  height: 6,
                  borderRadius: 3,
                  backgroundColor: "rgba(248, 246, 240, 0.15)",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    height: "100%",
                    width: `${Math.min(100, (act7SweepProg / 12) * 100)}%`,
                    backgroundColor: theme.warn,
                    boxShadow: `0 0 10px ${theme.warn}`,
                  }}
                />
              </div>

              <span style={{ fontSize: 20, color: theme.chalkText }}>
                When the next consecutive value is missing, the while loop immediately exits.
              </span>
            </div>
          )}

          {/* ------------------------------------------------------------- */}
          {/* ACT 8: LONGEST = MAX(...) (F1048..1219)                      */}
          {/* ------------------------------------------------------------- */}
          {act8 && (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 28,
              }}
            >
              <div
                style={{
                  padding: "8px 24px",
                  borderRadius: 14,
                  backgroundColor: "rgba(92, 225, 230, 0.15)",
                  border: `1.5px solid ${theme.cyan}`,
                  fontFamily: fonts.mono,
                  fontSize: 18,
                  color: theme.cyan,
                }}
              >
                COMPARE WITH BEST SO FAR
              </div>

              <div style={{ display: "flex", gap: 32, alignItems: "center" }}>
                {/* Old Longest */}
                <div
                  style={{
                    width: 220,
                    padding: "18px 20px",
                    borderRadius: 14,
                    backgroundColor: "rgba(25, 82, 60, 0.8)",
                    border: `1.5px solid ${theme.chalkDim}`,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 8,
                    opacity: act8ShowResult ? 0.6 : 1,
                    transform: `translateX(${interpolate(act8Slide, [0, 1], [0, 12], { extrapolateLeft: "clamp", extrapolateRight: "clamp" })}px)`,
                  }}
                >
                  <span style={{ fontFamily: fonts.mono, fontSize: 14, color: theme.chalkDim }}>
                    old longest
                  </span>
                  <span style={{ fontFamily: fonts.mono, fontSize: 48, fontWeight: 700, color: theme.chalkText }}>
                    4
                  </span>
                </div>

                <div
                  style={{
                    padding: "8px 16px",
                    borderRadius: 20,
                    backgroundColor: "rgba(92, 225, 230, 0.2)",
                    fontFamily: fonts.mono,
                    fontSize: 22,
                    fontWeight: 700,
                    color: theme.cyan,
                  }}
                >
                  max( 4 , 6 )
                </div>

                {/* This Length */}
                <div
                  style={{
                    width: 220,
                    padding: "18px 20px",
                    borderRadius: 14,
                    backgroundColor: act8ShowResult ? "rgba(46, 216, 163, 0.25)" : "rgba(25, 82, 60, 0.8)",
                    border: `2px solid ${theme.good}`,
                    boxShadow: act8ShowResult ? `0 0 24px ${theme.good}` : "none",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 8,
                    transform: `translateX(${interpolate(act8Slide, [0, 1], [0, -12], { extrapolateLeft: "clamp", extrapolateRight: "clamp" })}px)`,
                  }}
                >
                  <span style={{ fontFamily: fonts.mono, fontSize: 14, color: theme.good }}>
                    this length
                  </span>
                  <span style={{ fontFamily: fonts.mono, fontSize: 48, fontWeight: 700, color: theme.good }}>
                    6
                  </span>
                </div>
              </div>

              {/* Result Badge */}
              <div
                style={{
                  padding: "12px 32px",
                  borderRadius: 16,
                  backgroundColor: "rgba(25, 82, 60, 0.95)",
                  border: `2px solid ${theme.good}`,
                  display: "flex",
                  alignItems: "center",
                  gap: 14,
                  boxShadow: `0 0 20px rgba(46, 216, 163, 0.3)`,
                }}
              >
                <span style={{ fontFamily: fonts.mono, fontSize: 20, color: theme.chalkText }}>
                  longest becomes:
                </span>
                <span style={{ fontFamily: fonts.mono, fontSize: 36, fontWeight: 700, color: theme.good }}>
                  6
                </span>
                <span style={{ fontSize: 18, color: theme.good, fontWeight: 700 }}>
                  ✓ NEW BEST
                </span>
              </div>
            </div>
          )}

          {/* ------------------------------------------------------------- */}
          {/* ACT 9: RETURN LONGEST (F1220..1300)                           */}
          {/* ------------------------------------------------------------- */}
          {act9 && (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 28,
              }}
            >
              <div
                style={{
                  padding: "8px 24px",
                  borderRadius: 14,
                  backgroundColor: "rgba(46, 216, 163, 0.15)",
                  border: `1.5px solid ${theme.good}`,
                  fontFamily: fonts.mono,
                  fontSize: 18,
                  color: theme.good,
                }}
              >
                OUTER LOOP COMPLETE
              </div>

              <div
                style={{
                  width: 360,
                  padding: "28px 36px",
                  borderRadius: 20,
                  backgroundColor: "rgba(25, 82, 60, 0.95)",
                  border: `2.5px solid ${theme.pivot}`,
                  boxShadow: `0 0 32px rgba(255, 209, 102, 0.35)`,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 14,
                }}
              >
                <span style={{ fontFamily: fonts.mono, fontSize: 18, color: theme.pivot, letterSpacing: 2 }}>
                  FINAL FUNCTION OUTPUT
                </span>
                <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                  <span style={{ fontFamily: fonts.mono, fontSize: 28, color: theme.chalkText }}>
                    return longest ──►
                  </span>
                  <span style={{ fontFamily: fonts.mono, fontSize: 64, fontWeight: 700, color: theme.good }}>
                    6
                  </span>
                </div>
              </div>

              <span style={{ fontSize: 22, color: theme.chalkText }}>
                Returns the maximum consecutive length discovered across all starts.
              </span>
            </div>
          )}

          {/* ------------------------------------------------------------- */}
          {/* ACT 10 & 11: PERFORMANCE BOTTLENECK (F1301..2079)            */}
          {/* ------------------------------------------------------------- */}
          {(act10 || act11) && (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 22,
                width: "100%",
              }}
            >
              {/* Alert Badge */}
              <div
                style={{
                  padding: "8px 26px",
                  borderRadius: 20,
                  backgroundColor: "rgba(255, 107, 107, 0.2)",
                  border: `1.5px solid ${theme.warn}`,
                  boxShadow: `0 0 20px rgba(255, 107, 107, 0.25)`,
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                }}
              >
                <span style={{ color: theme.warn, fontSize: 20 }}>⚡</span>
                <span
                  style={{
                    fontFamily: fonts.mono,
                    fontSize: 17,
                    fontWeight: 700,
                    color: theme.warn,
                    letterSpacing: 1.5,
                  }}
                >
                  THE HIDDEN COST: 'in nums'
                </span>
              </div>

              {/* Sub-explanation based on act phase */}
              <div
                style={{
                  padding: "14px 28px",
                  borderRadius: 14,
                  backgroundColor: "rgba(10, 36, 25, 0.85)",
                  border: "1px solid rgba(248, 246, 240, 0.15)",
                  textAlign: "center",
                  maxWidth: 720,
                }}
              >
                <div style={{ fontFamily: fonts.mono, fontSize: 22, color: theme.pivot }}>
                  while current + 1 in nums:
                </div>
                <div style={{ fontSize: 17, color: theme.chalkText, marginTop: 6 }}>
                  Nums is a standard Python list. A membership check (
                  <span style={{ color: theme.cyan, fontFamily: fonts.mono }}>in nums</span>) performs an{" "}
                  <span style={{ color: theme.warn, fontWeight: 700 }}>O(n) linear scan</span> from index 0.
                </div>
              </div>

              {/* Array with walking linear scan beam */}
              <div style={{ display: "flex", gap: 8, alignItems: "center", justifyContent: "center" }}>
                {RAW_ARRAY.map((val, idx) => {
                  const isScanned = idx <= act10PhaseCProg;
                  return (
                    <div
                      key={idx}
                      style={{
                        width: 58,
                        height: 64,
                        borderRadius: 10,
                        backgroundColor: isScanned ? "rgba(255, 107, 107, 0.18)" : "rgba(10, 36, 25, 0.7)",
                        border: `1.5px solid ${isScanned ? theme.warn : "rgba(248, 246, 240, 0.2)"}`,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <span style={{ fontFamily: fonts.mono, fontSize: 10, color: theme.chalkDim }}>
                        [{idx}]
                      </span>
                      <span style={{ fontFamily: fonts.mono, fontSize: 20, fontWeight: 700, color: theme.chalkText }}>
                        {val}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* Stacked Ghost Scans for 'again... and again... and again...' */}
              {frame >= 1676 && (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 6,
                    width: "88%",
                    marginTop: 4,
                  }}
                >
                  <div
                    style={{
                      height: 10,
                      borderRadius: 5,
                      backgroundColor: theme.warn,
                      opacity: 0.85,
                      boxShadow: `0 0 10px ${theme.warn}`,
                    }}
                  />
                  {act10AgainCount >= 2 && (
                    <div
                      style={{
                        height: 10,
                        borderRadius: 5,
                        backgroundColor: theme.warn,
                        opacity: 0.65,
                      }}
                    />
                  )}
                  {act10AgainCount >= 3 && (
                    <div
                      style={{
                        height: 10,
                        borderRadius: 5,
                        backgroundColor: theme.warn,
                        opacity: 0.45,
                      }}
                    />
                  )}
                  <div style={{ textAlign: "right", fontFamily: fonts.mono, fontSize: 13, color: theme.warn }}>
                    ▲ Repeated O(n) list scans stacking up across every consecutive step
                  </div>
                </div>
              )}

              {/* Act 11 Summary Card */}
              {act11 && (
                <div
                  style={{
                    padding: "16px 32px",
                    borderRadius: 14,
                    backgroundColor: "rgba(255, 107, 107, 0.18)",
                    border: `2px solid ${theme.warn}`,
                    textAlign: "center",
                    boxShadow: `0 0 24px rgba(255, 107, 107, 0.3)`,
                  }}
                >
                  <div style={{ fontFamily: fonts.mono, fontSize: 22, fontWeight: 700, color: theme.warn }}>
                    REPEATED LIST SEARCH = BOTTLENECK
                  </div>
                  <div style={{ fontSize: 18, color: theme.chalkText, marginTop: 6 }}>
                    This check repeats for every number and every streak step — making brute force very slow.
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* ========================================================================= */}
      {/* BOTTOM CAPTIONS (Safe Zone y: 960..1040)                                  */}
      {/* ========================================================================= */}
      <Captions words={captionWords} bottom={38} fontSize={38} />
    </div>
  );
};
