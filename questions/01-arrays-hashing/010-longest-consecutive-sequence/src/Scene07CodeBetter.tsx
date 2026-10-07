import React, { useMemo } from "react";
import { useCurrentFrame, interpolate, staticFile, Audio } from "remotion";
import { theme, fonts } from "../../../../kit/lib/theme";
import { Captions, CaptionWord } from "../../../../kit/components/Captions";
import syncData from "../sync/07-code-better.json";

// Code line token definition for syntax highlighting
interface CodeToken {
  text: string;
  color: string;
}

interface CodeLineDef {
  lineNum: number;
  indent: number;
  text: string;
  startFrame: number;
  endFrame: number;
  tokens: CodeToken[];
}

// Exact 20 Python lines according to plan
const CODE_LINES: CodeLineDef[] = [
  {
    lineNum: 1,
    indent: 0,
    text: "def longestConsecutive(nums):",
    startFrame: 0,
    endFrame: 52,
    tokens: [
      { text: "def ", color: theme.pivot },
      { text: "longestConsecutive", color: theme.cyan },
      { text: "(nums):", color: theme.chalkDim },
    ],
  },
  {
    lineNum: 2,
    indent: 1,
    text: "if not nums:",
    startFrame: 64,
    endFrame: 96,
    tokens: [
      { text: "if ", color: theme.pivot },
      { text: "not ", color: theme.pivot },
      { text: "nums:", color: theme.chalkDim },
    ],
  },
  {
    lineNum: 3,
    indent: 2,
    text: "return 0",
    startFrame: 161,
    endFrame: 199,
    tokens: [
      { text: "return ", color: theme.pivot },
      { text: "0", color: theme.good },
    ],
  },
  {
    lineNum: 4,
    indent: 0,
    text: "",
    startFrame: 199,
    endFrame: 226,
    tokens: [],
  },
  {
    lineNum: 5,
    indent: 1,
    text: "nums.sort()",
    startFrame: 226,
    endFrame: 263,
    tokens: [
      { text: "nums", color: theme.chalkText },
      { text: ".sort()", color: theme.cyan },
    ],
  },
  {
    lineNum: 6,
    indent: 1,
    text: "longest = 1",
    startFrame: 269,
    endFrame: 318,
    tokens: [
      { text: "longest", color: theme.chalkText },
      { text: " = ", color: theme.chalkDim },
      { text: "1", color: theme.good },
    ],
  },
  {
    lineNum: 7,
    indent: 1,
    text: "current = 1",
    startFrame: 318,
    endFrame: 346,
    tokens: [
      { text: "current", color: theme.chalkText },
      { text: " = ", color: theme.chalkDim },
      { text: "1", color: theme.good },
    ],
  },
  {
    lineNum: 8,
    indent: 0,
    text: "",
    startFrame: 346,
    endFrame: 368,
    tokens: [],
  },
  {
    lineNum: 9,
    indent: 1,
    text: "for i in range(1, len(nums)):",
    startFrame: 368,
    endFrame: 418,
    tokens: [
      { text: "for ", color: theme.pivot },
      { text: "i", color: theme.chalkText },
      { text: " in ", color: theme.pivot },
      { text: "range", color: theme.cyan },
      { text: "(1, ", color: theme.chalkDim },
      { text: "len", color: theme.cyan },
      { text: "(nums)):", color: theme.chalkDim },
    ],
  },
  {
    lineNum: 10,
    indent: 2,
    text: "if nums[i] == nums[i - 1]:",
    startFrame: 618,
    endFrame: 712,
    tokens: [
      { text: "if ", color: theme.pivot },
      { text: "nums[i]", color: theme.chalkText },
      { text: " == ", color: theme.purple },
      { text: "nums[i - 1]:", color: theme.chalkText },
    ],
  },
  {
    lineNum: 11,
    indent: 3,
    text: "continue",
    startFrame: 724,
    endFrame: 754,
    tokens: [{ text: "continue", color: theme.pivot }],
  },
  {
    lineNum: 12,
    indent: 0,
    text: "",
    startFrame: 922,
    endFrame: 945,
    tokens: [],
  },
  {
    lineNum: 13,
    indent: 2,
    text: "if nums[i] == nums[i - 1] + 1:",
    startFrame: 978,
    endFrame: 1126,
    tokens: [
      { text: "if ", color: theme.pivot },
      { text: "nums[i]", color: theme.chalkText },
      { text: " == ", color: theme.chalkDim },
      { text: "nums[i - 1]", color: theme.chalkText },
      { text: " + ", color: theme.good },
      { text: "1:", color: theme.good },
    ],
  },
  {
    lineNum: 14,
    indent: 3,
    text: "current += 1",
    startFrame: 1137,
    endFrame: 1168,
    tokens: [
      { text: "current", color: theme.chalkText },
      { text: " += ", color: theme.good },
      { text: "1", color: theme.good },
    ],
  },
  {
    lineNum: 15,
    indent: 2,
    text: "else:",
    startFrame: 1182,
    endFrame: 1201,
    tokens: [{ text: "else:", color: theme.pivot }],
  },
  {
    lineNum: 16,
    indent: 3,
    text: "current = 1",
    startFrame: 1346,
    endFrame: 1396,
    tokens: [
      { text: "current", color: theme.chalkText },
      { text: " = ", color: theme.warn },
      { text: "1", color: theme.warn },
    ],
  },
  {
    lineNum: 17,
    indent: 0,
    text: "",
    startFrame: 1396,
    endFrame: 1411,
    tokens: [],
  },
  {
    lineNum: 18,
    indent: 2,
    text: "longest = max(longest, current)",
    startFrame: 1465,
    endFrame: 1498,
    tokens: [
      { text: "longest", color: theme.chalkText },
      { text: " = ", color: theme.chalkDim },
      { text: "max", color: theme.cyan },
      { text: "(longest, current)", color: theme.chalkDim },
    ],
  },
  {
    lineNum: 19,
    indent: 0,
    text: "",
    startFrame: 1498,
    endFrame: 1514,
    tokens: [],
  },
  {
    lineNum: 20,
    indent: 1,
    text: "return longest",
    startFrame: 1549,
    endFrame: 1577,
    tokens: [
      { text: "return ", color: theme.pivot },
      { text: "longest", color: theme.good },
    ],
  },
];

export const Scene07CodeBetter: React.FC = () => {
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
  // Act Timing Windows
  // ----------------------------------------------------
  const isAct0 = frame < 226; // Empty array guard
  const isAct1 = frame >= 226 && frame < 368; // Sort + Initialize
  const isAct2 = frame >= 368 && frame < 575; // Begin index 1 & compare with previous
  const isAct3 = frame >= 575 && frame < 945; // Duplicate branch
  const isAct4 = frame >= 945 && frame < 1182; // Consecutive branch
  const isAct5 = frame >= 1182 && frame < 1411; // Gap / Reset branch
  const isAct6 = frame >= 1411 && frame < 1514; // Update longest
  const isAct7 = frame >= 1514 && frame < 1605; // Return longest
  const isAct8 = frame >= 1605; // Review & single scan

  // ----------------------------------------------------
  // Continuity Handoff from Scene 06 (F0..F30)
  // ----------------------------------------------------
  const handoffProgress = interpolate(frame, [0, 26], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const editorScaleY = interpolate(handoffProgress, [0, 1], [0.92, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const editorOpacity = interpolate(handoffProgress, [0, 1], [0.75, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // ----------------------------------------------------
  // Code Editor Active Line Calculation
  // ----------------------------------------------------
  let activeLineNum = 1;
  if (frame < 64) {
    activeLineNum = 1;
  } else if (frame < 161) {
    activeLineNum = 2;
  } else if (frame < 226) {
    activeLineNum = 3;
  } else if (frame < 269) {
    activeLineNum = 5;
  } else if (frame < 318) {
    activeLineNum = 6;
  } else if (frame < 368) {
    activeLineNum = 7;
  } else if (frame < 618) {
    activeLineNum = 9;
  } else if (frame < 724) {
    activeLineNum = 10;
  } else if (frame < 978) {
    activeLineNum = 11;
  } else if (frame < 1137) {
    activeLineNum = 13;
  } else if (frame < 1182) {
    activeLineNum = 14;
  } else if (frame < 1346) {
    activeLineNum = 15;
  } else if (frame < 1465) {
    activeLineNum = 16;
  } else if (frame < 1549) {
    activeLineNum = 18;
  } else if (frame < 1605) {
    activeLineNum = 20;
  } else if (frame < 1643) {
    activeLineNum = 9; // "Simple scan"
  } else if (frame < 1681) {
    activeLineNum = 10; // "Clean code"
  } else {
    activeLineNum = 5; // "nums.sort() and scan"
  }

  const cursorBlink = Math.floor(frame / 14) % 2 === 0;

  // Progressive token renderer for character-by-character code typing with syntax coloring
  const renderTokensProgressive = (
    tokens: CodeToken[],
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
  // ACT 0: Empty Array Guard Visual States (F0..F225)
  // ----------------------------------------------------
  const act0BracketWidth = interpolate(frame, [64, 116], [360, 96], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const act0CapsuleScale = interpolate(frame, [161, 185], [0.6, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const act0CapsuleFade = interpolate(frame, [199, 225], [1, 0.18], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // ----------------------------------------------------
  // ACT 1: Sort SVG Morph & Counters (F226..F367)
  // ----------------------------------------------------
  const act1SortProgress = interpolate(frame, [234, 263], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const act1BestPop = interpolate(frame, [269, 295], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const act1CurrPop = interpolate(frame, [318, 344], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // ----------------------------------------------------
  // ACT 2: Index 1 & Comparison Lens (F368..F574)
  // ----------------------------------------------------
  const act2CardNudge = interpolate(frame, [518, 555], [0, 6], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // ----------------------------------------------------
  // ACT 3: Duplicate Branch States (F575..F944)
  // ----------------------------------------------------
  const act3RipplePop = interpolate(frame, [680, 712], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const act3BeadSkip = interpolate(frame, [724, 754], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  // Arrow attempted increment and bounce back on purple barrier
  const act3ArrowBounce = interpolate(
    frame,
    [771, 792, 815],
    [0, 1, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );
  // Warning crack preview and seal on F831..F871
  const act3CrackSeal = interpolate(frame, [831, 855], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // ----------------------------------------------------
  // ACT 4: Consecutive Branch States (F945..F1181)
  // ----------------------------------------------------
  const act4BridgePop = interpolate(frame, [991, 1070], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const act4RailExtend = interpolate(frame, [1070, 1126], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const act4CounterRoll = interpolate(frame, [1137, 1168], [4, 5], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // ----------------------------------------------------
  // ACT 5: Gap Branch States (F1182..F1410)
  // ----------------------------------------------------
  const act5GhostPop = interpolate(frame, [1225, 1250], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const act5FractureProgress = interpolate(frame, [1240, 1265], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const act5NewRunGrow = interpolate(frame, [1270, 1315], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const act5ResetErase = interpolate(frame, [1346, 1385], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // ----------------------------------------------------
  // ACT 6: Update Longest States (F1411..F1513)
  // ----------------------------------------------------
  const act6MaxMerge = interpolate(frame, [1454, 1490], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // ----------------------------------------------------
  // ACT 7: Return Longest (F1514..F1604)
  // ----------------------------------------------------
  const act7ReturnRise = interpolate(frame, [1549, 1577], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // ----------------------------------------------------
  // ACT 8: Final Review & Single Scan (F1605..F1755)
  // ----------------------------------------------------
  const act8ScanBeadX = interpolate(frame, [1605, 1636], [0, 520], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const act8TrioFocus = interpolate(frame, [1643, 1666], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  // Brute search loops appear and get erased by chalk eraser
  const act8BruteLoopsOpacity = interpolate(
    frame,
    [1681, 1705, 1728, 1748],
    [0, 0.42, 0.42, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );

  return (
    <div
      style={{
        width: 1920,
        height: 1080,
        backgroundColor: theme.boardBg,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Audio Voiceover Track */}
      <Audio src={staticFile("audio/010/07-code-better.mp3")} />

      {/* ========================================================================= */}
      {/* TOP HEADER & SCENE BADGES (Y: 28..70)                                    */}
      {/* ========================================================================= */}
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
            display: "flex",
            alignItems: "center",
            gap: 14,
            padding: "8px 26px",
            borderRadius: 20,
            backgroundColor: "rgba(10, 36, 25, 0.92)",
            border: `1.5px solid ${theme.better}`,
            boxShadow: "0 4px 20px rgba(0, 0, 0, 0.35)",
          }}
        >
          <span style={{ fontSize: 18 }}>⚡</span>
          <span
            style={{
              fontFamily: fonts.mono,
              fontSize: 15,
              fontWeight: 800,
              color: theme.better,
              letterSpacing: 2,
            }}
          >
            BETTER · CODE SCAN
          </span>
          <span style={{ color: theme.chalkDim, fontSize: 13 }}>|</span>
          <span
            style={{
              fontFamily: fonts.hand,
              fontSize: 20,
              color: theme.chalkText,
              letterSpacing: 0.5,
            }}
          >
            Sort + Linear Pass Implementation
          </span>
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          top: 34,
          right: 65,
          fontFamily: fonts.mono,
          fontSize: 14,
          color: theme.chalkDim,
          letterSpacing: 1.2,
          zIndex: 10,
        }}
      >
        LC128 · O(n log n) SORT + O(n) SCAN
      </div>

      {/* ========================================================================= */}
      {/* LEFT PANEL: CODE EDITOR (x: 55..1070, width: 1015px, top: 100px, h: 830)  */}
      {/* ========================================================================= */}
      <div
        style={{
          position: "absolute",
          left: 55,
          top: 100,
          width: 1015,
          height: 830,
          borderRadius: 20,
          backgroundColor: "rgba(10, 36, 25, 0.95)",
          border: `2px solid rgba(248, 246, 240, 0.25)`,
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
            sort_scan.py
          </span>
          <span
            style={{
              marginLeft: "auto",
              fontFamily: fonts.hand,
              fontSize: 20,
              color: theme.better,
            }}
          >
            Better O(n log n) Solution
          </span>
        </div>

        {/* Code Content Lines Container */}
        <div
          style={{
            padding: "18px 24px",
            display: "flex",
            flexDirection: "column",
            gap: 2,
            fontFamily: fonts.mono,
            fontSize: 21,
            lineHeight: "35px",
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
            const isCleanCodeBlock =
              isAct8 && frame < 1681 && line.lineNum >= 10 && line.lineNum <= 16;
            const isSortOrScanReview =
              isAct8 && frame >= 1681 && (line.lineNum === 5 || line.lineNum === 9);

            return (
              <div
                key={line.lineNum}
                style={{
                  display: "flex",
                  alignItems: "center",
                  borderRadius: 6,
                  backgroundColor: isCleanCodeBlock
                    ? "rgba(255, 209, 102, 0.14)"
                    : isSortOrScanReview
                    ? "rgba(60, 229, 167, 0.14)"
                    : isActiveLine
                    ? "rgba(248, 246, 240, 0.08)"
                    : "transparent",
                  borderLeft: isCleanCodeBlock
                    ? `4px solid ${theme.pivot}`
                    : isSortOrScanReview
                    ? `4px solid ${theme.good}`
                    : isActiveLine
                    ? `4px solid ${theme.cyan}`
                    : "4px solid transparent",
                  padding: "0 8px",
                  opacity: isActiveLine || isCleanCodeBlock || isSortOrScanReview ? 1 : 0.8,
                }}
              >
                {/* Line Number */}
                <span
                  style={{
                    width: 38,
                    color: isActiveLine
                      ? theme.cyan
                      : isCleanCodeBlock
                      ? theme.pivot
                      : isSortOrScanReview
                      ? theme.good
                      : theme.chalkDim,
                    fontSize: 16,
                    fontWeight: 700,
                    userSelect: "none",
                  }}
                >
                  {line.lineNum}
                </span>

                {/* Line Indentation */}
                <span style={{ width: line.indent * 24 }} />

                {/* Token Content */}
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
                        height: 22,
                        backgroundColor: theme.pivot,
                        marginLeft: 4,
                        boxShadow: `0 0 6px ${theme.pivot}`,
                      }}
                    />
                  )}
                </span>

                {/* Branch Rule Tags for quick identification */}
                {line.lineNum === 10 && (
                  <div
                    style={{
                      marginLeft: "auto",
                      padding: "2px 8px",
                      borderRadius: 10,
                      backgroundColor: "rgba(216, 180, 226, 0.2)",
                      border: `1px solid ${theme.purple}`,
                      fontFamily: fonts.mono,
                      fontSize: 11,
                      color: theme.purple,
                      fontWeight: 700,
                      opacity: isAct3 ? 1 : 0.45,
                    }}
                  >
                    RULE 1 · SKIP
                  </div>
                )}
                {line.lineNum === 13 && (
                  <div
                    style={{
                      marginLeft: "auto",
                      padding: "2px 8px",
                      borderRadius: 10,
                      backgroundColor: "rgba(60, 229, 167, 0.2)",
                      border: `1px solid ${theme.good}`,
                      fontFamily: fonts.mono,
                      fontSize: 11,
                      color: theme.good,
                      fontWeight: 700,
                      opacity: isAct4 ? 1 : 0.45,
                    }}
                  >
                    RULE 2 · EXTEND
                  </div>
                )}
                {line.lineNum === 15 && (
                  <div
                    style={{
                      marginLeft: "auto",
                      padding: "2px 8px",
                      borderRadius: 10,
                      backgroundColor: "rgba(255, 118, 117, 0.2)",
                      border: `1px solid ${theme.warn}`,
                      fontFamily: fonts.mono,
                      fontSize: 11,
                      color: theme.warn,
                      fontWeight: 700,
                      opacity: isAct5 ? 1 : 0.45,
                    }}
                  >
                    RULE 3 · RESET
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* ========================================================================= */}
      {/* RIGHT PANEL: LOGIC BOARD (x: 1100..1865, width: 765px, top: 100, h: 830) */}
      {/* ========================================================================= */}
      <div
        style={{
          position: "absolute",
          left: 1100,
          top: 100,
          width: 765,
          height: 830,
          borderRadius: 20,
          backgroundColor: "rgba(10, 36, 25, 0.95)",
          border: `1.5px solid rgba(248, 246, 240, 0.22)`,
          boxShadow: "0 18px 45px rgba(0, 0, 0, 0.45)",
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
          zIndex: 20,
        }}
      >
        {/* Logic Board Header Tab */}
        <div
          style={{
            height: 42,
            backgroundColor: "rgba(10, 36, 25, 0.98)",
            borderBottom: "1px solid rgba(248, 246, 240, 0.12)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0 20px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <span style={{ fontSize: 16 }}>📊</span>
            <span
              style={{
                fontFamily: fonts.mono,
                fontSize: 14,
                fontWeight: 700,
                color: theme.chalkText,
                letterSpacing: 1.2,
              }}
            >
              ARRAY-BAR LOGIC STAGE
            </span>
          </div>
          <div
            style={{
              padding: "3px 12px",
              borderRadius: 12,
              backgroundColor: isAct0
                ? "rgba(92, 225, 230, 0.18)"
                : isAct1
                ? "rgba(255, 169, 77, 0.2)"
                : isAct2
                ? "rgba(92, 225, 230, 0.2)"
                : isAct3
                ? "rgba(216, 180, 226, 0.25)"
                : isAct4
                ? "rgba(60, 229, 167, 0.25)"
                : isAct5
                ? "rgba(255, 118, 117, 0.25)"
                : isAct6
                ? "rgba(255, 209, 102, 0.25)"
                : "rgba(60, 229, 167, 0.3)",
              border: `1px solid ${
                isAct0
                  ? theme.cyan
                  : isAct1
                  ? theme.better
                  : isAct2
                  ? theme.cyan
                  : isAct3
                  ? theme.purple
                  : isAct4
                  ? theme.good
                  : isAct5
                  ? theme.warn
                  : isAct6
                  ? theme.pivot
                  : theme.good
              }`,
              fontFamily: fonts.mono,
              fontSize: 11,
              fontWeight: 800,
              color: isAct0
                ? theme.cyan
                : isAct1
                ? theme.better
                : isAct2
                ? theme.cyan
                : isAct3
                ? theme.purple
                : isAct4
                ? theme.good
                : isAct5
                ? theme.warn
                : isAct6
                ? theme.pivot
                : theme.good,
              letterSpacing: 1,
            }}
          >
            {isAct0
              ? "ACT 0 · EMPTY GUARD"
              : isAct1
              ? "ACT 1 · SORT & INIT"
              : isAct2
              ? "ACT 2 · PAIR LENS"
              : isAct3
              ? "ACT 3 · DUPLICATE SKIP"
              : isAct4
              ? "ACT 4 · CONSECUTIVE EXTEND"
              : isAct5
              ? "ACT 5 · GAP RESET"
              : isAct6
              ? "ACT 6 · MAX UPDATE"
              : isAct7
              ? "ACT 7 · RETURN"
              : "ACT 8 · SCAN REVIEW"}
          </div>
        </div>

        {/* Logic Board Interior Content */}
        <div
          style={{
            flex: 1,
            padding: "24px 28px",
            display: "flex",
            flexDirection: "column",
            position: "relative",
          }}
        >
          {/* =============================================================== */}
          {/* 1. ACT 0: Empty Array Shell & Output 0 (F0..F225)               */}
          {/* =============================================================== */}
          {isAct0 && (
            <div
              style={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: 28,
              }}
            >
              <div
                style={{
                  fontFamily: fonts.hand,
                  fontSize: 28,
                  color: theme.chalkText,
                  textAlign: "center",
                }}
              >
                Base Case: What if the array is empty?
              </div>

              {/* Empty Array Bar Shell */}
              <div
                style={{
                  width: act0BracketWidth,
                  height: 96,
                  borderRadius: 16,
                  border: `2px dashed ${frame >= 64 ? theme.cyan : "rgba(248, 246, 240, 0.4)"}`,
                  backgroundColor: "rgba(248, 246, 240, 0.04)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "relative",
                  transition: "width 0.2s ease",
                  boxShadow: frame >= 64 ? `0 0 20px rgba(92, 225, 230, 0.2)` : "none",
                }}
              >
                <span
                  style={{
                    fontFamily: fonts.mono,
                    fontSize: 22,
                    fontWeight: 700,
                    color: theme.chalkDim,
                  }}
                >
                  {act0BracketWidth > 140 ? "nums = [ ] (len = 0)" : "[ ]"}
                </span>

                {/* Stopped Run Indicator */}
                {frame >= 116 && (
                  <div
                    style={{
                      position: "absolute",
                      bottom: -18,
                      width: 14,
                      height: 14,
                      borderRadius: "50%",
                      backgroundColor: theme.warn,
                      boxShadow: `0 0 10px ${theme.warn}`,
                    }}
                  />
                )}
              </div>

              {/* Status Label */}
              <div
                style={{
                  fontFamily: fonts.mono,
                  fontSize: 18,
                  color: frame >= 116 ? theme.warn : theme.chalkDim,
                  fontWeight: 700,
                  letterSpacing: 1.5,
                }}
              >
                {frame >= 116 ? "NO VALUES ➔ NO SEQUENCE POSSIBLE" : "EMPTY ARRAY DETECTED"}
              </div>

              {/* Output Capsule for return 0 */}
              {frame >= 161 && (
                <div
                  style={{
                    opacity: act0CapsuleFade,
                    transform: `scale(${act0CapsuleScale})`,
                    display: "flex",
                    alignItems: "center",
                    gap: 16,
                    padding: "12px 32px",
                    borderRadius: 24,
                    backgroundColor: "rgba(60, 229, 167, 0.15)",
                    border: `2px solid ${theme.good}`,
                    boxShadow: `0 0 25px rgba(60, 229, 167, 0.35)`,
                  }}
                >
                  <span style={{ fontSize: 24 }}>➔</span>
                  <span
                    style={{
                      fontFamily: fonts.mono,
                      fontSize: 26,
                      fontWeight: 800,
                      color: theme.good,
                    }}
                  >
                    return 0
                  </span>
                </div>
              )}
            </div>
          )}

          {/* =============================================================== */}
          {/* 2. ACT 1: Sort Wavy Morph & Counters (F226..F367)               */}
          {/* =============================================================== */}
          {isAct1 && (
            <div
              style={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "20px 0",
              }}
            >
              <div style={{ textAlign: "center" }}>
                <div style={{ fontFamily: fonts.hand, fontSize: 28, color: theme.chalkText }}>
                  Step 1: Sort into ascending order
                </div>
                <div style={{ fontFamily: fonts.mono, fontSize: 15, color: theme.better, marginTop: 4 }}>
                  nums.sort()  ➔  guarantees consecutive values are neighbours
                </div>
              </div>

              {/* Unsorted vs Sorted Array Morph */}
              <div style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>
                <div style={{ display: "flex", gap: 14, marginBottom: 16 }}>
                  {act1SortProgress < 0.8 ? (
                    // Unsorted Badges
                    [8, 1, 6, 3, 2].map((val, idx) => (
                      <div
                        key={idx}
                        style={{
                          width: 58,
                          height: 58,
                          borderRadius: 12,
                          backgroundColor: "rgba(255, 118, 117, 0.16)",
                          border: `1.5px solid ${theme.warn}`,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontFamily: fonts.mono,
                          fontSize: 24,
                          fontWeight: 700,
                          color: theme.chalkText,
                        }}
                      >
                        {val}
                      </div>
                    ))
                  ) : (
                    // Sorted Ascending Badges
                    [1, 2, 3, 6, 8].map((val, idx) => (
                      <div
                        key={idx}
                        style={{
                          width: 58,
                          height: 58,
                          borderRadius: 12,
                          backgroundColor: idx === 0 ? "rgba(60, 229, 167, 0.25)" : "rgba(248, 246, 240, 0.1)",
                          border: `1.5px solid ${idx === 0 ? theme.good : "rgba(248, 246, 240, 0.3)"}`,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontFamily: fonts.mono,
                          fontSize: 24,
                          fontWeight: 700,
                          color: idx === 0 ? theme.good : theme.chalkText,
                          boxShadow: idx === 0 ? `0 0 16px rgba(60, 229, 167, 0.35)` : "none",
                        }}
                      >
                        {val}
                      </div>
                    ))
                  )}
                </div>

                {/* SVG Rail Baseline (Wavy morphs to Straight) */}
                <svg width="460" height="40" viewBox="0 0 460 40">
                  <path
                    d={
                      act1SortProgress < 0.9
                        ? "M 20,20 Q 75,5 130,20 T 240,20 T 350,20 T 440,20"
                        : "M 20,20 L 440,20"
                    }
                    fill="none"
                    stroke={act1SortProgress < 0.9 ? theme.warn : theme.good}
                    strokeWidth="4"
                    strokeDasharray={act1SortProgress < 0.9 ? "6 4" : "none"}
                  />
                  {act1SortProgress >= 0.9 && (
                    <circle cx="65" cy="20" r="7" fill={theme.good} />
                  )}
                </svg>

                <div
                  style={{
                    fontFamily: fonts.mono,
                    fontSize: 15,
                    color: act1SortProgress >= 0.9 ? theme.good : theme.warn,
                    fontWeight: 700,
                    letterSpacing: 1.2,
                    marginTop: 6,
                  }}
                >
                  {act1SortProgress >= 0.9 ? "ORDERED ASCENDING" : "UNSORTED RAW ARRAY"}
                </div>
              </div>

              {/* State Counters Initialize: longest = 1, current = 1 */}
              <div style={{ display: "flex", gap: 24, width: "100%", justifyContent: "center" }}>
                <div
                  style={{
                    flex: 1,
                    maxWidth: 220,
                    padding: "16px 20px",
                    borderRadius: 16,
                    backgroundColor: "rgba(60, 229, 167, 0.12)",
                    border: `1.5px solid ${theme.good}`,
                    opacity: act1BestPop,
                    transform: `translateY(${interpolate(act1BestPop, [0, 1], [15, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" })}px)`,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 6,
                  }}
                >
                  <span style={{ fontFamily: fonts.mono, fontSize: 13, color: theme.chalkDim, letterSpacing: 1 }}>
                    LONGEST (BEST)
                  </span>
                  <span style={{ fontFamily: fonts.mono, fontSize: 42, fontWeight: 800, color: theme.good }}>
                    1
                  </span>
                </div>

                <div
                  style={{
                    flex: 1,
                    maxWidth: 220,
                    padding: "16px 20px",
                    borderRadius: 16,
                    backgroundColor: "rgba(255, 209, 102, 0.12)",
                    border: `1.5px solid ${theme.pivot}`,
                    opacity: act1CurrPop,
                    transform: `translateY(${interpolate(act1CurrPop, [0, 1], [15, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" })}px)`,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 6,
                  }}
                >
                  <span style={{ fontFamily: fonts.mono, fontSize: 13, color: theme.chalkDim, letterSpacing: 1 }}>
                    CURRENT (STREAK)
                  </span>
                  <span style={{ fontFamily: fonts.mono, fontSize: 42, fontWeight: 800, color: theme.pivot }}>
                    1
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* =============================================================== */}
          {/* 3. ACT 2: Index 1 & Comparison Lens (F368..F574)                */}
          {/* =============================================================== */}
          {isAct2 && (
            <div
              style={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "20px 0",
              }}
            >
              <div style={{ textAlign: "center" }}>
                <div style={{ fontFamily: fonts.hand, fontSize: 28, color: theme.chalkText }}>
                  Step 2: Start from index 1
                </div>
                <div style={{ fontFamily: fonts.mono, fontSize: 15, color: theme.cyan, marginTop: 4 }}>
                  Compare every element with the one just before it
                </div>
              </div>

              {/* Index Slots Inspection Stage */}
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 20 }}>
                <div style={{ display: "flex", gap: 28, alignItems: "center" }}>
                  {/* Slot 0: Previous */}
                  <div
                    style={{
                      transform: `translateX(${-act2CardNudge}px)`,
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: 8,
                    }}
                  >
                    <span style={{ fontFamily: fonts.mono, fontSize: 13, color: theme.cyan, fontWeight: 700 }}>
                      i - 1 (PREVIOUS)
                    </span>
                    <div
                      style={{
                        width: 90,
                        height: 90,
                        borderRadius: 16,
                        backgroundColor: "rgba(92, 225, 230, 0.15)",
                        border: `2px solid ${theme.cyan}`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontFamily: fonts.mono,
                        fontSize: 32,
                        fontWeight: 800,
                        color: theme.chalkText,
                        boxShadow: `0 0 20px rgba(92, 225, 230, 0.25)`,
                      }}
                    >
                      nums[0]
                    </div>
                    <span style={{ fontFamily: fonts.mono, fontSize: 13, color: theme.chalkDim }}>
                      index 0
                    </span>
                  </div>

                  {/* Comparison Arrow / Lens */}
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: 6,
                    }}
                  >
                    <span style={{ fontFamily: fonts.mono, fontSize: 14, color: theme.pivot, fontWeight: 700 }}>
                      ◀ COMPARE ▶
                    </span>
                    <div
                      style={{
                        width: 80,
                        height: 3,
                        backgroundColor: theme.pivot,
                        boxShadow: `0 0 8px ${theme.pivot}`,
                      }}
                    />
                    <span style={{ fontFamily: fonts.mono, fontSize: 11, color: theme.chalkDim }}>
                      LOOKBACK = 1
                    </span>
                  </div>

                  {/* Slot 1: Current (i) */}
                  <div
                    style={{
                      transform: `translateX(${act2CardNudge}px)`,
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: 8,
                    }}
                  >
                    <span style={{ fontFamily: fonts.mono, fontSize: 13, color: theme.pivot, fontWeight: 700 }}>
                      i (CURRENT)
                    </span>
                    <div
                      style={{
                        width: 90,
                        height: 90,
                        borderRadius: 16,
                        backgroundColor: "rgba(255, 209, 102, 0.15)",
                        border: `2px solid ${theme.pivot}`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontFamily: fonts.mono,
                        fontSize: 32,
                        fontWeight: 800,
                        color: theme.chalkText,
                        boxShadow: `0 0 20px rgba(255, 209, 102, 0.25)`,
                      }}
                    >
                      nums[1]
                    </div>
                    <span style={{ fontFamily: fonts.mono, fontSize: 13, color: theme.chalkDim }}>
                      index 1 (start)
                    </span>
                  </div>
                </div>
              </div>

              {/* Explanatory Callout Banner */}
              <div
                style={{
                  padding: "16px 28px",
                  borderRadius: 18,
                  backgroundColor: "rgba(10, 36, 25, 0.92)",
                  border: `1.5px solid ${theme.cyan}`,
                  boxShadow: `0 0 20px rgba(92, 225, 230, 0.2)`,
                  textAlign: "center",
                  maxWidth: 520,
                }}
              >
                <div style={{ fontFamily: fonts.mono, fontSize: 16, color: theme.cyan, fontWeight: 700 }}>
                  Why start from index 1?
                </div>
                <div style={{ fontFamily: fonts.hand, fontSize: 20, color: theme.chalkText, marginTop: 4 }}>
                  At index 0, there is no previous element to compare with. By starting at 1, `nums[i - 1]` is always valid!
                </div>
              </div>
            </div>
          )}

          {/* =============================================================== */}
          {/* 4. ACT 3: Duplicate Branch (F575..F944)                          */}
          {/* =============================================================== */}
          {isAct3 && (
            <div
              style={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "16px 0",
              }}
            >
              <div style={{ textAlign: "center" }}>
                <div style={{ fontFamily: fonts.hand, fontSize: 28, color: theme.chalkText }}>
                  Rule 1: If values are equal, it's a duplicate
                </div>
                <div style={{ fontFamily: fonts.mono, fontSize: 15, color: theme.purple, marginTop: 4 }}>
                  if nums[i] == nums[i - 1]: continue
                </div>
              </div>

              {/* Pair Inspection: [ 2 ] == [ 2 ] */}
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 14 }}>
                <div style={{ display: "flex", gap: 20, alignItems: "center" }}>
                  <div
                    style={{
                      width: 80,
                      height: 80,
                      borderRadius: 14,
                      backgroundColor: "rgba(216, 180, 226, 0.18)",
                      border: `2px solid ${theme.purple}`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontFamily: fonts.mono,
                      fontSize: 34,
                      fontWeight: 800,
                      color: theme.chalkText,
                    }}
                  >
                    2
                  </div>

                  <span style={{ fontFamily: fonts.mono, fontSize: 32, fontWeight: 800, color: theme.purple }}>
                    ==
                  </span>

                  <div
                    style={{
                      width: 80,
                      height: 80,
                      borderRadius: 14,
                      backgroundColor: "rgba(216, 180, 226, 0.18)",
                      border: `2px solid ${theme.purple}`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontFamily: fonts.mono,
                      fontSize: 34,
                      fontWeight: 800,
                      color: theme.chalkText,
                    }}
                  >
                    2
                  </div>
                </div>

                {/* Purple Double-Notch Ripple & Skip Bead */}
                <div style={{ position: "relative", width: 340, height: 48 }}>
                  <svg width="340" height="48" viewBox="0 0 340 48">
                    <path
                      d="M 20,24 L 130,24 Q 150,10 170,24 Q 190,38 210,24 L 320,24"
                      fill="none"
                      stroke={theme.purple}
                      strokeWidth="4"
                    />
                  </svg>
                  {/* Bead Skipping over duplicate notch */}
                  <div
                    style={{
                      position: "absolute",
                      left: interpolate(act3BeadSkip, [0, 1], [60, 260], {
                        extrapolateLeft: "clamp",
                        extrapolateRight: "clamp",
                      }),
                      top: interpolate(act3BeadSkip, [0, 0.5, 1], [16, 4, 16], {
                        extrapolateLeft: "clamp",
                        extrapolateRight: "clamp",
                      }),
                      width: 16,
                      height: 16,
                      borderRadius: "50%",
                      backgroundColor: theme.pivot,
                      boxShadow: `0 0 12px ${theme.pivot}`,
                    }}
                  />
                </div>

                <div
                  style={{
                    fontFamily: fonts.mono,
                    fontSize: 14,
                    color: theme.purple,
                    fontWeight: 700,
                    letterSpacing: 1.2,
                  }}
                >
                  DUPLICATE DOUBLE-NOTCH · SCAN BEAD JUMPS OVER
                </div>
              </div>

              {/* Behavior Verification: Neither Increment Nor Reset */}
              <div style={{ display: "flex", gap: 20, width: "100%", justifyContent: "center" }}>
                {/* No Increment */}
                <div
                  style={{
                    padding: "12px 20px",
                    borderRadius: 14,
                    backgroundColor: "rgba(10, 36, 25, 0.9)",
                    border: `1.5px solid ${theme.purple}`,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 4,
                  }}
                >
                  <span style={{ fontFamily: fonts.mono, fontSize: 12, color: theme.chalkDim }}>
                    1. SEQUENCE LENGTH
                  </span>
                  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <span style={{ fontFamily: fonts.mono, fontSize: 24, color: theme.chalkText, fontWeight: 700 }}>
                      4
                    </span>
                    <span
                      style={{
                        fontFamily: fonts.mono,
                        fontSize: 16,
                        color: theme.warn,
                        transform: `translateX(${act3ArrowBounce * 8}px)`,
                      }}
                    >
                      ⇸ (blocked)
                    </span>
                  </div>
                  <span style={{ fontFamily: fonts.mono, fontSize: 11, color: theme.good, fontWeight: 700 }}>
                    DO NOT INCREASE
                  </span>
                </div>

                {/* No Reset */}
                <div
                  style={{
                    padding: "12px 20px",
                    borderRadius: 14,
                    backgroundColor: "rgba(10, 36, 25, 0.9)",
                    border: `1.5px solid ${theme.purple}`,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 4,
                  }}
                >
                  <span style={{ fontFamily: fonts.mono, fontSize: 12, color: theme.chalkDim }}>
                    2. STREAK INTEGRITY
                  </span>
                  <span style={{ fontFamily: fonts.mono, fontSize: 22, color: theme.good, fontWeight: 700 }}>
                    STREAK PRESERVED
                  </span>
                  <span style={{ fontFamily: fonts.mono, fontSize: 11, color: theme.good, fontWeight: 700 }}>
                    DO NOT RESET
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* =============================================================== */}
          {/* 5. ACT 4: Consecutive Branch (F945..F1181)                      */}
          {/* =============================================================== */}
          {isAct4 && (
            <div
              style={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "16px 0",
              }}
            >
              <div style={{ textAlign: "center" }}>
                <div style={{ fontFamily: fonts.hand, fontSize: 28, color: theme.chalkText }}>
                  Rule 2: Previous value plus 1 = consecutive step
                </div>
                <div style={{ fontFamily: fonts.mono, fontSize: 15, color: theme.good, marginTop: 4 }}>
                  if nums[i] == nums[i - 1] + 1: current += 1
                </div>
              </div>

              {/* Pair Inspection: [ 2 ] + 1 == [ 3 ] */}
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 14 }}>
                {/* Algebraic Bridge */}
                <div
                  style={{
                    padding: "6px 18px",
                    borderRadius: 16,
                    backgroundColor: "rgba(60, 229, 167, 0.2)",
                    border: `1px solid ${theme.good}`,
                    fontFamily: fonts.mono,
                    fontSize: 16,
                    fontWeight: 700,
                    color: theme.good,
                  }}
                >
                  2 + 1 = 3 ✓
                </div>

                <div style={{ display: "flex", gap: 24, alignItems: "center" }}>
                  <div
                    style={{
                      width: 80,
                      height: 80,
                      borderRadius: 14,
                      backgroundColor: "rgba(248, 246, 240, 0.1)",
                      border: `2px solid rgba(248, 246, 240, 0.3)`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontFamily: fonts.mono,
                      fontSize: 34,
                      fontWeight: 800,
                      color: theme.chalkText,
                    }}
                  >
                    2
                  </div>

                  <span style={{ fontSize: 28, color: theme.good }}>+1 ➔</span>

                  <div
                    style={{
                      width: 80,
                      height: 80,
                      borderRadius: 14,
                      backgroundColor: "rgba(60, 229, 167, 0.22)",
                      border: `2px solid ${theme.good}`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontFamily: fonts.mono,
                      fontSize: 34,
                      fontWeight: 800,
                      color: theme.good,
                      boxShadow: `0 0 20px rgba(60, 229, 167, 0.35)`,
                    }}
                  >
                    3
                  </div>
                </div>

                {/* Mint Rail Physical Extension */}
                <div style={{ width: 340, height: 28, position: "relative" }}>
                  <div
                    style={{
                      width: "100%",
                      height: 6,
                      backgroundColor: "rgba(248, 246, 240, 0.2)",
                      borderRadius: 3,
                      position: "absolute",
                      top: 11,
                    }}
                  />
                  <div
                    style={{
                      width: `${interpolate(act4RailExtend, [0, 1], [50, 100], { extrapolateLeft: "clamp", extrapolateRight: "clamp" })}%`,
                      height: 6,
                      backgroundColor: theme.good,
                      borderRadius: 3,
                      position: "absolute",
                      top: 11,
                      boxShadow: `0 0 12px ${theme.good}`,
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      right: 0,
                      top: 4,
                      width: 20,
                      height: 20,
                      borderRadius: "50%",
                      backgroundColor: theme.good,
                      boxShadow: `0 0 10px ${theme.good}`,
                    }}
                  />
                </div>
              </div>

              {/* Counter Update Animation */}
              <div
                style={{
                  padding: "16px 36px",
                  borderRadius: 20,
                  backgroundColor: "rgba(60, 229, 167, 0.14)",
                  border: `2px solid ${theme.good}`,
                  boxShadow: `0 0 25px rgba(60, 229, 167, 0.3)`,
                  display: "flex",
                  alignItems: "center",
                  gap: 18,
                }}
              >
                <span style={{ fontFamily: fonts.mono, fontSize: 16, color: theme.chalkDim, letterSpacing: 1 }}>
                  CURRENT STREAK:
                </span>
                <span
                  style={{
                    fontFamily: fonts.mono,
                    fontSize: 38,
                    fontWeight: 800,
                    color: theme.good,
                  }}
                >
                  {Math.round(act4CounterRoll)}
                </span>
                <span style={{ fontFamily: fonts.mono, fontSize: 15, color: theme.good, fontWeight: 700 }}>
                  (+1 EXTENDED)
                </span>
              </div>
            </div>
          )}

          {/* =============================================================== */}
          {/* 6. ACT 5: Gap Branch (F1182..F1410)                             */}
          {/* =============================================================== */}
          {isAct5 && (
            <div
              style={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "16px 0",
              }}
            >
              <div style={{ textAlign: "center" }}>
                <div style={{ fontFamily: fonts.hand, fontSize: 28, color: theme.chalkText }}>
                  Rule 3: Otherwise, gap detected ➔ reset to 1
                </div>
                <div style={{ fontFamily: fonts.mono, fontSize: 15, color: theme.warn, marginTop: 4 }}>
                  else: current = 1
                </div>
              </div>

              {/* Pair Inspection: [ 4 ] ... gap (missing 5) ... [ 6 ] */}
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 14 }}>
                <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
                  <div
                    style={{
                      width: 74,
                      height: 74,
                      borderRadius: 14,
                      backgroundColor: "rgba(248, 246, 240, 0.08)",
                      border: `2px solid rgba(248, 246, 240, 0.3)`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontFamily: fonts.mono,
                      fontSize: 32,
                      fontWeight: 800,
                      color: theme.chalkDim,
                    }}
                  >
                    4
                  </div>

                  {/* Phantom Missing Value */}
                  <div
                    style={{
                      width: 74,
                      height: 74,
                      borderRadius: 14,
                      border: `2px dashed ${theme.warn}`,
                      backgroundColor: "rgba(255, 118, 117, 0.1)",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      opacity: act5GhostPop,
                    }}
                  >
                    <span style={{ fontFamily: fonts.mono, fontSize: 26, fontWeight: 700, color: theme.warn }}>
                      5 ?
                    </span>
                    <span style={{ fontFamily: fonts.mono, fontSize: 10, color: theme.warn }}>
                      MISSING
                    </span>
                  </div>

                  <div
                    style={{
                      width: 74,
                      height: 74,
                      borderRadius: 14,
                      backgroundColor: "rgba(255, 209, 102, 0.18)",
                      border: `2px solid ${theme.pivot}`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontFamily: fonts.mono,
                      fontSize: 32,
                      fontWeight: 800,
                      color: theme.chalkText,
                      boxShadow: `0 0 20px rgba(255, 209, 102, 0.35)`,
                    }}
                  >
                    6
                  </div>
                </div>

                {/* Rail Fracture: Broken active run */}
                <div style={{ width: 340, height: 32, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <div style={{ width: 120, height: 5, backgroundColor: theme.chalkDim }} />
                  <span style={{ color: theme.warn, fontSize: 24, margin: "0 10px" }}>⚡ ╳ ⚡</span>
                  <div
                    style={{
                      width: interpolate(act5NewRunGrow, [0, 1], [0, 120], {
                        extrapolateLeft: "clamp",
                        extrapolateRight: "clamp",
                      }),
                      height: 5,
                      backgroundColor: theme.pivot,
                      boxShadow: `0 0 10px ${theme.pivot}`,
                    }}
                  />
                </div>

                <div
                  style={{
                    fontFamily: fonts.mono,
                    fontSize: 14,
                    color: theme.warn,
                    fontWeight: 700,
                    letterSpacing: 1.2,
                  }}
                >
                  FRACTURE · PREVIOUS SEQUENCE ENDS · NEW SEQUENCE BEGINS AT 6
                </div>
              </div>

              {/* Reset to 1 Chalk Erase Effect */}
              <div
                style={{
                  padding: "14px 34px",
                  borderRadius: 18,
                  backgroundColor: "rgba(255, 118, 117, 0.15)",
                  border: `1.5px solid ${theme.warn}`,
                  display: "flex",
                  alignItems: "center",
                  gap: 16,
                }}
              >
                <span style={{ fontFamily: fonts.mono, fontSize: 15, color: theme.chalkDim }}>
                  CURRENT RESET:
                </span>
                <span
                  style={{
                    fontFamily: fonts.mono,
                    fontSize: 26,
                    color: theme.chalkDim,
                    textDecoration: "line-through",
                  }}
                >
                  6
                </span>
                <span style={{ fontSize: 22, color: theme.warn }}>➔</span>
                <span
                  style={{
                    fontFamily: fonts.mono,
                    fontSize: 38,
                    fontWeight: 800,
                    color: theme.warn,
                  }}
                >
                  1
                </span>
                <span style={{ fontFamily: fonts.mono, fontSize: 13, color: theme.warn, fontWeight: 700 }}>
                  (START FRESH)
                </span>
              </div>
            </div>
          )}

          {/* =============================================================== */}
          {/* 7. ACT 6: Update Longest (F1411..F1513)                          */}
          {/* =============================================================== */}
          {isAct6 && (
            <div
              style={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "20px 0",
              }}
            >
              <div style={{ textAlign: "center" }}>
                <div style={{ fontFamily: fonts.hand, fontSize: 28, color: theme.chalkText }}>
                  Step 3: Update longest after each real step
                </div>
                <div style={{ fontFamily: fonts.mono, fontSize: 15, color: theme.cyan, marginTop: 4 }}>
                  longest = max(longest, current)
                </div>
              </div>

              {/* Max Comparator Stage */}
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 20 }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 18,
                    padding: "20px 32px",
                    borderRadius: 20,
                    backgroundColor: "rgba(248, 246, 240, 0.06)",
                    border: `1.5px solid ${theme.cyan}`,
                  }}
                >
                  <span style={{ fontFamily: fonts.mono, fontSize: 32, fontWeight: 800, color: theme.cyan }}>
                    max (
                  </span>

                  <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <span style={{ fontFamily: fonts.mono, fontSize: 12, color: theme.chalkDim }}>
                      longest
                    </span>
                    <span style={{ fontFamily: fonts.mono, fontSize: 38, fontWeight: 800, color: theme.chalkText }}>
                      4
                    </span>
                  </div>

                  <span style={{ fontFamily: fonts.mono, fontSize: 32, fontWeight: 800, color: theme.cyan }}>
                    ,
                  </span>

                  <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <span style={{ fontFamily: fonts.mono, fontSize: 12, color: theme.good }}>
                      current
                    </span>
                    <span style={{ fontFamily: fonts.mono, fontSize: 38, fontWeight: 800, color: theme.good }}>
                      6
                    </span>
                  </div>

                  <span style={{ fontFamily: fonts.mono, fontSize: 32, fontWeight: 800, color: theme.cyan }}>
                    )
                  </span>
                </div>

                <div style={{ fontSize: 32, color: theme.good }}>▼</div>

                {/* Updated Longest Badge */}
                <div
                  style={{
                    padding: "16px 40px",
                    borderRadius: 22,
                    backgroundColor: "rgba(60, 229, 167, 0.2)",
                    border: `2px solid ${theme.good}`,
                    boxShadow: `0 0 30px rgba(60, 229, 167, 0.4)`,
                    display: "flex",
                    alignItems: "center",
                    gap: 16,
                  }}
                >
                  <span style={{ fontFamily: fonts.mono, fontSize: 18, color: theme.chalkText, fontWeight: 700 }}>
                    LONGEST =
                  </span>
                  <span
                    style={{
                      fontFamily: fonts.mono,
                      fontSize: 48,
                      fontWeight: 800,
                      color: theme.good,
                    }}
                  >
                    6
                  </span>
                  <span style={{ fontSize: 24 }}>✨</span>
                </div>
              </div>

              <div
                style={{
                  fontFamily: fonts.hand,
                  fontSize: 22,
                  color: theme.chalkDim,
                  textAlign: "center",
                }}
              >
                The max operation safeguards against losing the longest streak seen so far!
              </div>
            </div>
          )}

          {/* =============================================================== */}
          {/* 8. ACT 7: Return Longest (F1514..F1604)                          */}
          {/* =============================================================== */}
          {isAct7 && (
            <div
              style={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: 32,
              }}
            >
              <div style={{ textAlign: "center" }}>
                <div style={{ fontFamily: fonts.hand, fontSize: 32, color: theme.chalkText }}>
                  Step 4: Return final longest streak
                </div>
                <div style={{ fontFamily: fonts.mono, fontSize: 16, color: theme.good, marginTop: 6 }}>
                  return longest
                </div>
              </div>

              <div
                style={{
                  padding: "24px 48px",
                  borderRadius: 28,
                  backgroundColor: "rgba(60, 229, 167, 0.22)",
                  border: `2.5px solid ${theme.good}`,
                  boxShadow: `0 0 40px rgba(60, 229, 167, 0.45)`,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 12,
                  transform: `scale(${interpolate(act7ReturnRise, [0, 1], [0.95, 1.05], { extrapolateLeft: "clamp", extrapolateRight: "clamp" })})`,
                }}
              >
                <span style={{ fontFamily: fonts.mono, fontSize: 16, color: theme.chalkDim, letterSpacing: 2 }}>
                  FUNCTION OUTPUT
                </span>
                <span
                  style={{
                    fontFamily: fonts.mono,
                    fontSize: 64,
                    fontWeight: 900,
                    color: theme.good,
                    letterSpacing: 2,
                  }}
                >
                  longest = 6
                </span>
                <span
                  style={{
                    fontFamily: fonts.mono,
                    fontSize: 15,
                    color: theme.chalkText,
                    fontWeight: 700,
                  }}
                >
                  [ -1, 0, 1, 2, 3, 4 ]  (length 6)
                </span>
              </div>
            </div>
          )}

          {/* =============================================================== */}
          {/* 9. ACT 8: Final Review & Single Scan (F1605..F1755)              */}
          {/* =============================================================== */}
          {isAct8 && (
            <div
              style={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "16px 0",
              }}
            >
              <div style={{ textAlign: "center" }}>
                <div style={{ fontFamily: fonts.hand, fontSize: 28, color: theme.chalkText }}>
                  {frame < 1643
                    ? "Simple Scan: Exactly 1 forward pass"
                    : frame < 1681
                    ? "Clean Code: 3 simple local rules"
                    : "Much better than repeated list searching"}
                </div>
                <div
                  style={{
                    fontFamily: fonts.mono,
                    fontSize: 14,
                    color: frame < 1643 ? theme.cyan : frame < 1681 ? theme.pivot : theme.good,
                    marginTop: 4,
                  }}
                >
                  {frame < 1643
                    ? "NO BACKTRACKING · NO REPEATED COMPARISONS"
                    : "LOCAL INSPECTION ONLY · O(1) WORK PER ELEMENT"}
                </div>
              </div>

              {/* Single Forward Pass Rail with travelling bead */}
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  position: "relative",
                }}
              >
                <div style={{ display: "flex", gap: 24, marginBottom: 12 }}>
                  {["-1", "0", "1", "2", "3", "4"].map((val, idx) => (
                    <div
                      key={idx}
                      style={{
                        width: 48,
                        height: 48,
                        borderRadius: 10,
                        backgroundColor: "rgba(60, 229, 167, 0.16)",
                        border: `1.5px solid ${theme.good}`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontFamily: fonts.mono,
                        fontSize: 20,
                        fontWeight: 700,
                        color: theme.chalkText,
                      }}
                    >
                      {val}
                    </div>
                  ))}
                </div>

                <div style={{ width: 420, height: 24, position: "relative" }}>
                  <div
                    style={{
                      width: "100%",
                      height: 4,
                      backgroundColor: theme.good,
                      borderRadius: 2,
                      position: "absolute",
                      top: 10,
                      boxShadow: `0 0 10px ${theme.good}`,
                    }}
                  />
                  {/* Single scan bead traveling across */}
                  <div
                    style={{
                      position: "absolute",
                      left: Math.min(400, act8ScanBeadX),
                      top: 4,
                      width: 16,
                      height: 16,
                      borderRadius: "50%",
                      backgroundColor: theme.pivot,
                      boxShadow: `0 0 12px ${theme.pivot}`,
                    }}
                  />
                </div>

                <div
                  style={{
                    fontFamily: fonts.mono,
                    fontSize: 13,
                    color: theme.cyan,
                    fontWeight: 700,
                    letterSpacing: 1,
                    marginTop: 4,
                  }}
                >
                  ONE FORWARD SCAN
                </div>
              </div>

              {/* Three Rules Card Trio */}
              <div
                style={{
                  display: "flex",
                  gap: 12,
                  width: "100%",
                  justifyContent: "center",
                }}
              >
                <div
                  style={{
                    flex: 1,
                    padding: "10px 12px",
                    borderRadius: 12,
                    backgroundColor: "rgba(216, 180, 226, 0.16)",
                    border: `1.5px solid ${theme.purple}`,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 3,
                  }}
                >
                  <span style={{ fontFamily: fonts.mono, fontSize: 11, color: theme.purple, fontWeight: 700 }}>
                    == EQUAL
                  </span>
                  <span style={{ fontFamily: fonts.mono, fontSize: 15, fontWeight: 800, color: theme.chalkText }}>
                    continue
                  </span>
                  <span style={{ fontFamily: fonts.hand, fontSize: 13, color: theme.chalkDim }}>
                    Skip duplicate
                  </span>
                </div>

                <div
                  style={{
                    flex: 1,
                    padding: "10px 12px",
                    borderRadius: 12,
                    backgroundColor: "rgba(60, 229, 167, 0.16)",
                    border: `1.5px solid ${theme.good}`,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 3,
                  }}
                >
                  <span style={{ fontFamily: fonts.mono, fontSize: 11, color: theme.good, fontWeight: 700 }}>
                    +1 STEP
                  </span>
                  <span style={{ fontFamily: fonts.mono, fontSize: 15, fontWeight: 800, color: theme.chalkText }}>
                    current += 1
                  </span>
                  <span style={{ fontFamily: fonts.hand, fontSize: 13, color: theme.chalkDim }}>
                    Extend streak
                  </span>
                </div>

                <div
                  style={{
                    flex: 1,
                    padding: "10px 12px",
                    borderRadius: 12,
                    backgroundColor: "rgba(255, 118, 117, 0.16)",
                    border: `1.5px solid ${theme.warn}`,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 3,
                  }}
                >
                  <span style={{ fontFamily: fonts.mono, fontSize: 11, color: theme.warn, fontWeight: 700 }}>
                    &gt; 1 GAP
                  </span>
                  <span style={{ fontFamily: fonts.mono, fontSize: 15, fontWeight: 800, color: theme.chalkText }}>
                    current = 1
                  </span>
                  <span style={{ fontFamily: fonts.hand, fontSize: 13, color: theme.chalkDim }}>
                    Reset streak
                  </span>
                </div>
              </div>

              {/* Faint Brute Loop Comparison erased into clean verdict */}
              <div
                style={{
                  padding: "10px 24px",
                  borderRadius: 16,
                  backgroundColor: "rgba(60, 229, 167, 0.15)",
                  border: `1.5px solid ${theme.good}`,
                  boxShadow: `0 0 20px rgba(60, 229, 167, 0.25)`,
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                }}
              >
                <span style={{ fontSize: 20 }}>✓</span>
                <span
                  style={{
                    fontFamily: fonts.mono,
                    fontSize: 14,
                    fontWeight: 800,
                    color: theme.chalkText,
                    letterSpacing: 1,
                  }}
                >
                  NO REPEATED SEARCHES · JUST 1 CLEAN PASS
                </span>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* ========================================================================= */}
      {/* CAPTIONS SAFE ZONE (Y: 960..1040)                                         */}
      {/* ========================================================================= */}
      <Captions words={captionWords} bottom={38} fontSize={38} />
    </div>
  );
};
