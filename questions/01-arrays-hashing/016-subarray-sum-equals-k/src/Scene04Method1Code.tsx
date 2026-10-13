/**
 * Scene04Method1Code.tsx — Scene 04 · Method 1 Code & Complexity Walkthrough
 * Subarray Sum Equals K (LeetCode 560) · Pattern 01 — Arrays & Hashing
 *
 * Implements the Code Implementation, Nested Loop Derivation & Complexity:
 * - 100% Kit Components: ChalkCodeEditorV2, Captions, ChalkboardBackground, ChalkFilters
 * - Total Duration: 2,276 frames @ 30fps (75.860s) strictly from sync/04-method1-code.json
 * - Visual language strictly adheres to @dsa/kit design tokens
 * - Interactive typing animation with line-by-line sync and complexity breakdown
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
import { Captions, CaptionWord } from "../../../../kit/components/Captions";
import {
  ChalkCodeEditorV2,
  ChalkCodeLine,
} from "../../../../kit/components/ChalkCodeEditorV2";
import { RoughBox } from "../../../../kit/components/RoughBox";
import { RoughLine } from "../../../../kit/components/RoughLine";
import { RoughCurve } from "../../../../kit/components/RoughCurve";
import syncData from "../sync/04-method1-code.json";

// ---------------------------------------------------------------------------
// Caption Normalization
// ---------------------------------------------------------------------------
const captionWords: CaptionWord[] = (syncData.words || []).map((w: any) => ({
  word: w.word,
  start: w.start_ms / 1000,
  end: w.end_ms / 1000,
}));

export const Scene04Method1Code: React.FC = () => {
  const frame = useCurrentFrame();

  // =========================================================================
  // PRODUCTION CODE LINES (METHOD 1: RUNNING SUM ENUMERATION)
  // =========================================================================
  const codeLines: ChalkCodeLine[] = useMemo(() => {
    return [
      {
        num: 1,
        indent: 0,
        text: "def subarraySum(nums: list[int], k: int) -> int:",
        startFrame: 0,
        endFrame: 60,
        tokens: [
          { text: "def ", color: theme.cyan },
          { text: "subarraySum", color: theme.pivot },
          { text: "(nums: list[int], k: int) -> int:", color: theme.chalkText },
        ],
      },
      {
        num: 2,
        indent: 1,
        text: "answer = 0",
        startFrame: 88,
        endFrame: 177,
        tokens: [
          { text: "answer", color: theme.good },
          { text: " = ", color: theme.chalkLine },
          { text: "0", color: theme.purple },
        ],
      },
      {
        num: 3,
        indent: 1,
        text: "n = len(nums)",
        startFrame: 178,
        endFrame: 220,
        tokens: [
          { text: "n", color: theme.cyan },
          { text: " = ", color: theme.chalkLine },
          { text: "len(nums)", color: theme.chalkText },
        ],
      },
      {
        num: 4,
        indent: 1,
        text: "for start in range(n):",
        startFrame: 192,
        endFrame: 271,
        tokens: [
          { text: "for ", color: theme.cyan },
          { text: "start ", color: theme.pivot },
          { text: "in ", color: theme.cyan },
          { text: "range(n):", color: theme.chalkText },
        ],
      },
      {
        num: 5,
        indent: 2,
        text: "running_sum = 0",
        startFrame: 287,
        endFrame: 420,
        tokens: [
          { text: "running_sum", color: theme.pivot },
          { text: " = ", color: theme.chalkLine },
          { text: "0", color: theme.purple },
        ],
      },
      {
        num: 6,
        indent: 2,
        text: "for end in range(start, n):",
        startFrame: 434,
        endFrame: 536,
        tokens: [
          { text: "for ", color: theme.cyan },
          { text: "end ", color: theme.pivot },
          { text: "in ", color: theme.cyan },
          { text: "range(start, n):", color: theme.chalkText },
        ],
      },
      {
        num: 7,
        indent: 3,
        text: "running_sum += nums[end]",
        startFrame: 557,
        endFrame: 666,
        tokens: [
          { text: "running_sum", color: theme.pivot },
          { text: " += ", color: theme.chalkLine },
          { text: "nums[end]", color: theme.chalkText },
        ],
      },
      {
        num: 8,
        indent: 3,
        text: "if running_sum == k:",
        startFrame: 682,
        endFrame: 746,
        tokens: [
          { text: "if ", color: theme.cyan },
          { text: "running_sum", color: theme.pivot },
          { text: " == ", color: theme.chalkLine },
          { text: "k:", color: theme.pivot },
        ],
      },
      {
        num: 9,
        indent: 4,
        text: "answer += 1",
        startFrame: 758,
        endFrame: 790,
        tokens: [
          { text: "answer", color: theme.good },
          { text: " += ", color: theme.chalkLine },
          { text: "1", color: theme.purple },
        ],
      },
      {
        num: 10,
        indent: 1,
        text: "return answer",
        startFrame: 808,
        endFrame: 863,
        tokens: [
          { text: "return ", color: theme.cyan },
          { text: "answer", color: theme.good },
        ],
      },
    ];
  }, []);

  // Active line highlight depending on narration phase
  const activeLineNums = useMemo(() => {
    if (frame >= 808) return [10];
    if (frame >= 758) return [9];
    if (frame >= 682) return [8];
    if (frame >= 557) return [7];
    if (frame >= 434) return [6];
    if (frame >= 287) return [5];
    if (frame >= 192) return [4];
    if (frame >= 88) return [2];
    return [1];
  }, [frame]);

  // Phase transitions:
  // Phase 1: Code Typing (F0 .. F985)
  // Phase 2: Complexity Derivation (F985 .. F1739)
  // Phase 3: The Bridge to Prefix Sums (F1739 .. F2276)
  const isComplexityPhase = frame >= 985 && frame < 1739;
  const isBridgePhase = frame >= 1739;

  // Split layout animation when complexity appears
  const editorWidth = isComplexityPhase || isBridgePhase ? 820 : 1240;
  const editorLeft = isComplexityPhase || isBridgePhase ? 70 : 340;
  const editorFontSize = isComplexityPhase || isBridgePhase ? 20 : 23;
  const editorLineHeight = isComplexityPhase || isBridgePhase ? 38 : 46;

  // Complexity reveal thresholds (from sync):
  const showIter0 = frame >= 1130;
  const showIter1 = frame >= 1204;
  const showIter2 = frame >= 1255;
  const showIterRest = frame >= 1306;
  const showSummation = frame >= 1348;
  const showTimeComp = frame >= 1402;
  const showSpaceIntro = frame >= 1541;
  const showSpaceComp = frame >= 1705;

  // Curve points for quadratic growth
  const quadraticCurvePoints: [number, number][] = useMemo(() => {
    return [
      [930, 640],
      [1040, 620],
      [1160, 560],
      [1260, 460],
      [1330, 310],
    ];
  }, []);

  const audioSrc = staticFile("audio/016/04-method1-code.mp3");

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
      <ChalkFilters />
      <ChalkboardBackground />

      <Audio src={audioSrc} />

      {/* ===================================================================
          1. HEADER (Y: 28 .. 90)
          =================================================================== */}
      <div
        style={{
          position: "absolute",
          top: 32,
          left: 60,
          right: 60,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          zIndex: 10,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <span
            style={{
              fontFamily: fonts.display,
              fontSize: 26,
              fontWeight: 800,
              letterSpacing: 2,
              color: theme.cyan,
            }}
          >
            QUESTION 16
          </span>
          <span style={{ color: "rgba(255,255,255,0.3)", fontSize: 24 }}>—</span>
          <span
            style={{
              fontFamily: fonts.display,
              fontSize: 22,
              fontWeight: 700,
              letterSpacing: 1.5,
              color: theme.chalkText,
            }}
          >
            METHOD 1: PYTHON CODE & COMPLEXITY
          </span>
        </div>

        {/* Status badges - board native chalk outlines */}
        <div style={{ display: "flex", gap: 20, alignItems: "center" }}>
          <div
            style={{
              position: "relative",
              padding: "6px 20px",
              fontFamily: fonts.mono,
              fontSize: 16,
              fontWeight: 700,
              color: theme.cyan,
            }}
          >
            <div style={{ position: "absolute", top: 0, left: 0 }}>
              <RoughBox
                width={330}
                height={36}
                stroke={theme.cyan}
                strokeWidth={2}
                seed={101}
              />
            </div>
            APPROACH: RUNNING SUM ENUMERATION
          </div>

          <div
            style={{
              position: "relative",
              padding: "6px 20px",
              fontFamily: fonts.mono,
              fontSize: 16,
              fontWeight: 700,
              color: isComplexityPhase || isBridgePhase ? theme.warn : theme.pivot,
            }}
          >
            <div style={{ position: "absolute", top: 0, left: 0 }}>
              <RoughBox
                width={isComplexityPhase || isBridgePhase ? 200 : 250}
                height={36}
                stroke={isComplexityPhase || isBridgePhase ? theme.warn : theme.pivot}
                strokeWidth={2}
                seed={102}
              />
            </div>
            {isComplexityPhase || isBridgePhase ? "TIME: O(N²)" : "COMPLEXITY DERIVATION"}
          </div>
        </div>
      </div>

      {/* ===================================================================
          2. CODE EDITOR (BOARD-NATIVE, ZERO DARK CHROME)
          =================================================================== */}
      <div
        style={{
          position: "absolute",
          top: 116,
          left: editorLeft,
          width: editorWidth,
          height: 680,
          transition: "all 0.4s ease",
          zIndex: 10,
        }}
      >
        <ChalkCodeEditorV2
          lines={codeLines}
          activeLineNums={activeLineNums}
          title="def subarraySum(nums, k) -> int"
          language="Python 3"
          width="100%"
          height="100%"
          fontSize={editorFontSize}
          lineHeight={editorLineHeight}
          variant="board-native"
        />
      </div>

      {/* ===================================================================
          3. COMPLEXITY DERIVATION (BOARD-NATIVE, ZERO DARK CARDS)
          =================================================================== */}
      {isComplexityPhase && (
        <div
          style={{
            position: "absolute",
            top: 116,
            left: 920,
            width: 930,
            height: 720,
            zIndex: 15,
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* Section title directly in chalk with rough underline */}
          <div style={{ marginBottom: 24 }}>
            <div
              style={{
                fontFamily: fonts.display,
                fontSize: 26,
                fontWeight: 800,
                color: theme.pivot,
                letterSpacing: 2,
              }}
            >
              TIME & SPACE COMPLEXITY ANALYSIS
            </div>
            <div style={{ marginTop: 6 }}>
              <RoughLine
                shape={{ kind: "line", x1: 0, y1: 2, x2: 520, y2: 2 }}
                width={530}
                height={6}
                stroke={theme.pivot}
                strokeWidth={2}
                seed={201}
              />
            </div>
          </div>

          {/* Step-by-step arithmetic directly on board */}
          <div style={{ marginBottom: 20 }}>
            <div
              style={{
                fontFamily: fonts.hand,
                fontSize: 22,
                color: theme.chalkText,
                marginBottom: 10,
              }}
            >
              Outer loop fix for start = 0 .. N-1:
            </div>

            {/* Iteration counts revealed on sync */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 6,
                fontFamily: fonts.mono,
                fontSize: 18,
                paddingLeft: 12,
              }}
            >
              <div
                style={{
                  opacity: showIter0 ? 1 : 0,
                  color: theme.chalkText,
                  transition: "opacity 0.2s ease",
                }}
              >
                • start = 0 : inner loop visits <span style={{ color: theme.cyan, fontWeight: 700 }}>N</span> values
              </div>
              <div
                style={{
                  opacity: showIter1 ? 1 : 0,
                  color: theme.chalkText,
                  transition: "opacity 0.2s ease",
                }}
              >
                • start = 1 : inner loop visits <span style={{ color: theme.cyan, fontWeight: 700 }}>N - 1</span> values
              </div>
              <div
                style={{
                  opacity: showIter2 ? 1 : 0,
                  color: theme.chalkText,
                  transition: "opacity 0.2s ease",
                }}
              >
                • start = 2 : inner loop visits <span style={{ color: theme.cyan, fontWeight: 700 }}>N - 2</span> values
              </div>
              <div
                style={{
                  opacity: showIterRest ? 1 : 0,
                  color: theme.pivot,
                  transition: "opacity 0.2s ease",
                }}
              >
                • ... down to <span style={{ color: theme.pivot, fontWeight: 700 }}>1</span> value for start = N - 1
              </div>
            </div>

            {/* Summation line */}
            <div
              style={{
                opacity: showSummation ? 1 : 0,
                marginTop: 14,
                fontFamily: fonts.mono,
                fontSize: 20,
                color: theme.chalkText,
                transition: "opacity 0.3s ease",
              }}
            >
              Total Work = N + (N-1) + ... + 1 ={" "}
              <span style={{ color: theme.warn, fontWeight: 800, fontSize: 22 }}>
                N × (N + 1) / 2
              </span>
            </div>
          </div>

          {/* Big-O Badges - Board Native with Transparent RoughBox outlines */}
          <div
            style={{
              display: "flex",
              gap: 24,
              marginTop: 10,
            }}
          >
            {/* TIME COMPLEXITY O(N^2) */}
            <div
              style={{
                opacity: showTimeComp ? 1 : 0,
                position: "relative",
                width: 440,
                height: 190,
                padding: "18px 24px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                transition: "opacity 0.3s ease",
              }}
            >
              <div style={{ position: "absolute", top: 0, left: 0 }}>
                <RoughBox
                  width={440}
                  height={190}
                  stroke={theme.warn}
                  strokeWidth={3}
                  seed={301}
                />
              </div>

              <div
                style={{
                  fontFamily: fonts.display,
                  fontSize: 20,
                  fontWeight: 800,
                  color: theme.warn,
                  letterSpacing: 1.5,
                }}
              >
                TIME COMPLEXITY
              </div>
              <div
                style={{
                  fontFamily: fonts.mono,
                  fontSize: 54,
                  fontWeight: 900,
                  color: theme.warn,
                  lineHeight: 1,
                  margin: "4px 0",
                }}
              >
                O(N²)
              </div>
              <div
                style={{
                  fontFamily: fonts.hand,
                  fontSize: 18,
                  color: theme.chalkText,
                }}
              >
                Quadratic time due to nested loops
              </div>
            </div>

            {/* AUXILIARY SPACE O(1) */}
            <div
              style={{
                opacity: showSpaceIntro ? 1 : 0,
                position: "relative",
                width: 440,
                height: 190,
                padding: "18px 24px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                transition: "opacity 0.3s ease",
              }}
            >
              <div style={{ position: "absolute", top: 0, left: 0 }}>
                <RoughBox
                  width={440}
                  height={190}
                  stroke={theme.good}
                  strokeWidth={3}
                  seed={302}
                />
              </div>

              <div
                style={{
                  fontFamily: fonts.display,
                  fontSize: 20,
                  fontWeight: 800,
                  color: theme.good,
                  letterSpacing: 1.5,
                }}
              >
                AUXILIARY SPACE
              </div>
              <div
                style={{
                  fontFamily: fonts.mono,
                  fontSize: 54,
                  fontWeight: 900,
                  color: theme.good,
                  lineHeight: 1,
                  margin: "4px 0",
                  opacity: showSpaceComp ? 1 : 0.2,
                }}
              >
                {showSpaceComp ? "O(1)" : "..."}
              </div>
              <div
                style={{
                  fontFamily: fonts.hand,
                  fontSize: 18,
                  color: theme.chalkText,
                }}
              >
                Only scalar variables: start, end, sum
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ===================================================================
          4. THE BRIDGE TO OPTIMAL (PREFIX SUMS) (BOARD-NATIVE, ZERO DARK CARDS)
          =================================================================== */}
      {isBridgePhase && (
        <div
          style={{
            position: "absolute",
            top: 116,
            left: 920,
            width: 930,
            height: 720,
            zIndex: 15,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div>
            {/* Header */}
            <div style={{ marginBottom: 20 }}>
              <div
                style={{
                  fontFamily: fonts.display,
                  fontSize: 26,
                  fontWeight: 800,
                  color: theme.cyan,
                  letterSpacing: 2,
                }}
              >
                THE CRITICAL ARCHITECTURAL QUESTION
              </div>
              <div style={{ marginTop: 6 }}>
                <RoughLine
                  shape={{ kind: "line", x1: 0, y1: 2, x2: 560, y2: 2 }}
                  width={570}
                  height={6}
                  stroke={theme.cyan}
                  strokeWidth={2}
                  seed={401}
                />
              </div>
            </div>

            {/* Core inquiry inside transparent rough box */}
            <div
              style={{
                position: "relative",
                width: 900,
                minHeight: 140,
                padding: "24px 30px",
                marginBottom: 26,
              }}
            >
              <div style={{ position: "absolute", top: 0, left: 0 }}>
                <RoughBox
                  width={900}
                  height={140}
                  stroke={theme.pivot}
                  strokeWidth={3}
                  seed={402}
                />
              </div>
              <div
                style={{
                  fontFamily: fonts.hand,
                  fontSize: 26,
                  color: theme.pivot,
                  lineHeight: 1.6,
                }}
              >
                "Can we get the sum of any subarray range without rebuilding that range again from scratch?"
              </div>
            </div>

            {/* Architectural reason directly on board */}
            <div
              style={{
                fontFamily: fonts.hand,
                fontSize: 22,
                color: theme.chalkText,
                lineHeight: 1.6,
                paddingLeft: 8,
              }}
            >
              Method 1 does <span style={{ color: theme.warn, fontWeight: 700 }}>O(N²)</span> redundant sum calculations because every new <span style={{ color: theme.cyan, fontWeight: 700 }}>start</span> throws away earlier computed sums.
            </div>
          </div>

          {/* Reveal payoff box */}
          <div
            style={{
              position: "relative",
              width: 900,
              minHeight: 140,
              padding: "22px 30px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: 10,
            }}
          >
            <div style={{ position: "absolute", top: 0, left: 0 }}>
              <RoughBox
                width={900}
                height={140}
                stroke={theme.good}
                strokeWidth={3}
                seed={403}
              />
            </div>

            <div
              style={{
                fontFamily: fonts.display,
                fontSize: 26,
                fontWeight: 800,
                color: theme.good,
                letterSpacing: 1.5,
                marginBottom: 8,
              }}
            >
              THE ANSWER: PREFIX SUMS + HASH MAP
            </div>
            <div
              style={{
                fontFamily: fonts.hand,
                fontSize: 22,
                color: theme.cyan,
              }}
            >
              Up next: Transforming O(N²) quadratic work into O(N) linear time!
            </div>
          </div>
        </div>
      )}

      {/* ===================================================================
          5. CAPTIONS (Y: 960 .. 1040)
          =================================================================== */}
      <div
        style={{
          position: "absolute",
          bottom: 40,
          left: 0,
          right: 0,
          display: "flex",
          justifyContent: "center",
          zIndex: 30,
        }}
      >
        <Captions words={captionWords} />
      </div>
    </div>
  );
};

