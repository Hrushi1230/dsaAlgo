/**
 * Scene07DecodeCode.tsx — Scene 07 · Decoder Code Walkthrough
 * Encode and Decode Strings (LeetCode 271) · Pattern 01 — Arrays & Hashing
 *
 * Implements board-native Python decoder implementation:
 * - Left Stage (X: 70..950, Y: 105..865):
 *   - Canonical ChalkCodeEditorV2 (board-native transparent mode, full height 760px)
 *   - 13 syntax-highlighted Python lines revealing strictly on audio anchors:
 *     - Line 1 (F0..F20): def decode(s: str) -> list[str]:
 *     - Line 2 (F0..F45): res = []
 *     - Line 3 (F59..F120): i = 0
 *     - Line 4 (F147..F210): while i < len(s):
 *     - Line 5 (F230..F270): j = i
 *     - Line 6 (F283..F330): while s[j] != "#":
 *     - Line 7 (F330..F360): j += 1
 *     - Line 8 (F367..F430): length = int(s[i:j])
 *     - Line 9 (F459..F510): start = j + 1
 *     - Line 10 (F532..F580): end = start + length
 *     - Line 11 (F595..F660): res.append(s[start:end])
 *     - Line 12 (F682..F740): i = end
 *     - Line 13 (F1000..F1040): return res
 * - Right Stage (X: 990..1850, Y: 105..865):
 *   - 4 Board-native panels in RoughBox outlines:
 *     1. Pointer Tracking (i anchor & j scan)
 *     2. Exact Slice Arithmetic (length, start, end, append)
 *     3. Pointer Leap Invariant (i = end)
 *     4. Loop Completion & 100% Lossless Result
 * - Captions at bottom (Y: 960..1040)
 *
 * Total Duration: 1101 frames @ 30fps (36.7s) strictly from sync/07-decode-code.json
 */

import React, { useMemo } from "react";
import {
  Audio,
  interpolate,
  staticFile,
  useCurrentFrame,
} from "remotion";

import { ChalkboardBackground, ChalkFilters } from "../../../../kit/lib/chalk";
import { theme as baseTheme, fonts } from "../../../../kit/lib/theme";
import { EASE } from "../../../../kit/lib/anim";
import { ChalkCodeEditorV2, ChalkCodeLine } from "../../../../kit/components/ChalkCodeEditorV2";
import { Captions, CaptionWord } from "../../../../kit/components/Captions";
import { ChalkDust } from "../../../../kit/components/ChalkDust";
import { RoughBox } from "../../../../kit/components/RoughBox";
import { BoardHeader } from "./BoardHeader";
import syncData from "../sync/07-decode-code.json";

const theme = {
  ...baseTheme,
  gold: baseTheme.pivot,
  chalkSub: baseTheme.chalkDim,
  chalkBorder: baseTheme.cardBorder,
};

// Caption words strictly from sync JSON
const captionWords: CaptionWord[] = (syncData.words || []).map((w: any) => ({
  word: w.word,
  start: w.start_ms / 1000,
  end: w.end_ms / 1000,
}));

// Python decoder lines with exact character reveal frames
const CODE_LINES: ChalkCodeLine[] = [
  {
    num: 1,
    text: "def decode(s: str) -> list[str]:",
    indent: 0,
    startFrame: 0,
    endFrame: 20,
    tokens: [
      { text: "def ", color: theme.accent },
      { text: "decode", color: theme.cyan },
      { text: "(s: str) -> ", color: theme.chalkText },
      { text: "list[str]", color: theme.gold },
      { text: ":", color: theme.chalkText },
    ],
  },
  {
    num: 2,
    text: "    res = []",
    indent: 1,
    startFrame: 0,
    endFrame: 45,
    tokens: [
      { text: "    res", color: theme.good },
      { text: " = []", color: theme.chalkText },
    ],
  },
  {
    num: 3,
    text: "    i = 0",
    indent: 1,
    startFrame: 59,
    endFrame: 120,
    tokens: [
      { text: "    i", color: theme.cyan },
      { text: " = ", color: theme.chalkText },
      { text: "0", color: theme.gold },
    ],
  },
  {
    num: 4,
    text: "    while i < len(s):",
    indent: 1,
    startFrame: 147,
    endFrame: 210,
    tokens: [
      { text: "    while ", color: theme.accent },
      { text: "i < ", color: theme.chalkText },
      { text: "len", color: theme.accent },
      { text: "(s):", color: theme.chalkText },
    ],
  },
  {
    num: 5,
    text: "        j = i",
    indent: 2,
    startFrame: 230,
    endFrame: 270,
    tokens: [
      { text: "        j", color: theme.gold },
      { text: " = ", color: theme.chalkText },
      { text: "i", color: theme.cyan },
    ],
  },
  {
    num: 6,
    text: '        while s[j] != "#":',
    indent: 2,
    startFrame: 283,
    endFrame: 330,
    tokens: [
      { text: "        while ", color: theme.accent },
      { text: "s[j] != ", color: theme.chalkText },
      { text: '"#"', color: theme.accent },
      { text: ":", color: theme.chalkText },
    ],
  },
  {
    num: 7,
    text: "            j += 1",
    indent: 3,
    startFrame: 330,
    endFrame: 360,
    tokens: [
      { text: "            j", color: theme.gold },
      { text: " += ", color: theme.chalkText },
      { text: "1", color: theme.gold },
    ],
  },
  {
    num: 8,
    text: "        length = int(s[i:j])",
    indent: 2,
    startFrame: 367,
    endFrame: 430,
    tokens: [
      { text: "        length", color: theme.cyan },
      { text: " = ", color: theme.chalkText },
      { text: "int", color: theme.accent },
      { text: "(s[i:j])", color: theme.chalkText },
    ],
  },
  {
    num: 9,
    text: "        start = j + 1",
    indent: 2,
    startFrame: 459,
    endFrame: 510,
    tokens: [
      { text: "        start", color: theme.good },
      { text: " = j + ", color: theme.chalkText },
      { text: "1", color: theme.gold },
    ],
  },
  {
    num: 10,
    text: "        end = start + length",
    indent: 2,
    startFrame: 532,
    endFrame: 580,
    tokens: [
      { text: "        end", color: theme.good },
      { text: " = start + ", color: theme.chalkText },
      { text: "length", color: theme.cyan },
    ],
  },
  {
    num: 11,
    text: "        res.append(s[start:end])",
    indent: 2,
    startFrame: 595,
    endFrame: 660,
    tokens: [
      { text: "        res", color: theme.good },
      { text: ".append(s[", color: theme.chalkText },
      { text: "start:end", color: theme.good },
      { text: "])", color: theme.chalkText },
    ],
  },
  {
    num: 12,
    text: "        i = end",
    indent: 2,
    startFrame: 682,
    endFrame: 740,
    tokens: [
      { text: "        i", color: theme.cyan },
      { text: " = ", color: theme.chalkText },
      { text: "end", color: theme.good },
    ],
  },
  {
    num: 13,
    text: "    return res",
    indent: 1,
    startFrame: 1000,
    endFrame: 1040,
    tokens: [
      { text: "    return ", color: theme.accent },
      { text: "res", color: theme.good },
    ],
  },
];

export const Scene07DecodeCode: React.FC = () => {
  const frame = useCurrentFrame();

  // Active line highlight derivation
  const activeLineNums = useMemo(() => {
    if (frame < 59) return [2];
    if (frame >= 59 && frame < 147) return [3];
    if (frame >= 147 && frame < 230) return [4];
    if (frame >= 230 && frame < 283) return [5];
    if (frame >= 283 && frame < 367) return [6, 7];
    if (frame >= 367 && frame < 459) return [8];
    if (frame >= 459 && frame < 532) return [9];
    if (frame >= 532 && frame < 595) return [10];
    if (frame >= 595 && frame < 682) return [11];
    if (frame >= 682 && frame < 838) return [12];
    if (frame >= 838 && frame < 1000) return [4, 12];
    if (frame >= 1000 && frame < 1045) return [13];
    return [];
  }, [frame]);

  // Stage camera micro-push
  const camScale = interpolate(frame, [0, 40], [1.008, 1.0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: EASE,
  });

  // Right-stage progressive reveals
  const showWhileCondition = frame >= 147;
  const showJScan = frame >= 283;
  const showLengthInt = frame >= 367;
  const showSliceBounds = frame >= 459;
  const showSliceAppend = frame >= 595;
  const showLeapInvariant = frame >= 682;
  const showLoopCycle = frame >= 838;
  const showFinalReturn = frame >= 1000;

  return (
    <div
      style={{
        width: 1920,
        height: 1080,
        position: "relative",
        overflow: "hidden",
        backgroundColor: theme.boardBg,
        transform: `scale(${camScale})`,
      }}
    >
      <ChalkboardBackground />
      <ChalkFilters />

      <Audio src={staticFile("audio/017/07-decode-code.mp3")} />

      {/* ChalkDust accent particles on key code milestones */}
      {frame >= 147 && frame < 175 && <ChalkDust start={147} x={450} y={320} count={12} />}
      {frame >= 367 && frame < 395 && <ChalkDust start={367} x={520} y={480} count={14} />}
      {frame >= 682 && frame < 710 && <ChalkDust start={682} x={480} y={620} count={16} />}
      {frame >= 1000 && frame < 1030 && <ChalkDust start={1000} x={400} y={670} count={18} />}

      {/* =========================================================================
          1. CANONICAL BOARD HEADER
          ========================================================================= */}
      <BoardHeader
        title="PYTHON DECODER IMPLEMENTATION"
        badge="O(N) TWO-POINTER DECODE"
        badgeColor={theme.good}
        seed={71}
      />

      {/* =========================================================================
          2. LEFT STAGE: BOARD-NATIVE CODE EDITOR (X: 70..950, Y: 105..865)
          ========================================================================= */}
      <div
        style={{
          position: "absolute",
          left: 70,
          top: 105,
          width: 880,
          height: 760,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div style={{ position: "absolute", top: 0, left: 0, pointerEvents: "none" }}>
          <RoughBox
            width={880}
            height={760}
            stroke={theme.cyan}
            strokeWidth={2.2}
            roughness={1.2}
            seed={72}
          />
        </div>

        <div style={{ padding: "16px 20px", height: "100%", zIndex: 1, display: "flex", flexDirection: "column" }}>
          <ChalkCodeEditorV2
            lines={CODE_LINES}
            activeLineNums={activeLineNums}
            variant="board-native"
            width="100%"
            height="100%"
            fontSize={20}
            lineHeight={44}
            indentWidth={26}
            title="solution_decoder.py"
          />
        </div>
      </div>

      {/* =========================================================================
          3. RIGHT STAGE: SYNCHRONIZED COMPANION BOARD (X: 990..1850, Y: 105..865)
          ========================================================================= */}
      <div
        style={{
          position: "absolute",
          left: 990,
          top: 105,
          width: 860,
          height: 760,
          display: "flex",
          flexDirection: "column",
          gap: 20,
        }}
      >
        {/* PANEL 1: Pointer Tracking (height: 165) */}
        <div
          style={{
            position: "relative",
            width: "100%",
            height: 165,
            padding: "16px 22px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div style={{ position: "absolute", top: 0, left: 0, pointerEvents: "none" }}>
            <RoughBox
              width={860}
              height={165}
              stroke={theme.cyan}
              strokeWidth={1.8}
              roughness={1.1}
              seed={73}
            />
          </div>

          <div
            style={{
              fontFamily: fonts.mono,
              fontSize: 14,
              color: theme.cyan,
              letterSpacing: 1.5,
              textTransform: "uppercase",
              display: "flex",
              justifyContent: "space-between",
              borderBottom: "1px dashed rgba(248, 246, 240, 0.18)",
              paddingBottom: 8,
              zIndex: 1,
            }}
          >
            <span>1. Pointer Tracking Engine</span>
            {showJScan && <span style={{ color: theme.gold, fontWeight: 700 }}>while s[j] != "#": j += 1</span>}
          </div>

          <div
            style={{
              display: "flex",
              gap: 16,
              fontFamily: fonts.mono,
              fontSize: 15,
              zIndex: 1,
            }}
          >
            <div
              style={{
                flex: 1,
                padding: "10px 14px",
                borderRadius: 6,
                border: `1.5px solid ${theme.cyan}`,
                background: `${theme.cyan}14`,
              }}
            >
              <div style={{ color: theme.chalkDim, fontSize: 11 }}>RECORD ANCHOR (i):</div>
              <div style={{ color: theme.cyan, fontWeight: "bold", fontSize: 16 }}>
                {showWhileCondition ? "Points to start of next length header" : "i = 0"}
              </div>
            </div>

            <div
              style={{
                flex: 1,
                padding: "10px 14px",
                borderRadius: 6,
                border: `1.5px solid ${showJScan ? theme.gold : "rgba(248, 246, 240, 0.18)"}`,
                background: showJScan ? `${theme.gold}14` : "transparent",
              }}
            >
              <div style={{ color: theme.chalkDim, fontSize: 11 }}>DELIMITER SCAN (j):</div>
              <div style={{ color: showJScan ? theme.gold : theme.chalkDim, fontWeight: "bold", fontSize: 16 }}>
                {showJScan ? "Advances until '#' delimiter" : frame >= 230 ? "j = i" : "pending..."}
              </div>
            </div>
          </div>
        </div>

        {/* PANEL 2: Slice Bounds & Payload Extraction (height: 220) */}
        <div
          style={{
            position: "relative",
            width: "100%",
            height: 220,
            padding: "16px 22px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div style={{ position: "absolute", top: 0, left: 0, pointerEvents: "none" }}>
            <RoughBox
              width={860}
              height={220}
              stroke={showLengthInt ? theme.gold : "rgba(248, 246, 240, 0.25)"}
              strokeWidth={1.8}
              roughness={1.1}
              seed={74}
            />
          </div>

          <div
            style={{
              fontFamily: fonts.mono,
              fontSize: 14,
              color: showLengthInt ? theme.gold : theme.chalkDim,
              letterSpacing: 1.5,
              textTransform: "uppercase",
              borderBottom: "1px dashed rgba(248, 246, 240, 0.18)",
              paddingBottom: 8,
              zIndex: 1,
            }}
          >
            2. Exact Slice Arithmetic & Extraction
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 12,
              fontFamily: fonts.mono,
              fontSize: 14,
              zIndex: 1,
            }}
          >
            <div
              style={{
                padding: "10px 14px",
                borderRadius: 6,
                border: `1.5px solid ${showLengthInt ? theme.accent : "rgba(248, 246, 240, 0.15)"}`,
                background: showLengthInt ? `${theme.accent}14` : "transparent",
              }}
            >
              <div style={{ color: theme.chalkDim, fontSize: 11 }}>HEADER PARSING:</div>
              <div style={{ color: showLengthInt ? theme.accent : theme.chalkDim, fontWeight: "bold", fontSize: 16 }}>
                {showLengthInt ? "length = int(s[i:j])" : "pending..."}
              </div>
            </div>

            <div
              style={{
                padding: "10px 14px",
                borderRadius: 6,
                border: `1.5px solid ${showSliceBounds ? theme.good : "rgba(248, 246, 240, 0.15)"}`,
                background: showSliceBounds ? `${theme.good}14` : "transparent",
              }}
            >
              <div style={{ color: theme.chalkDim, fontSize: 11 }}>START BOUNDARY:</div>
              <div style={{ color: showSliceBounds ? theme.good : theme.chalkDim, fontWeight: "bold", fontSize: 16 }}>
                {showSliceBounds ? "start = j + 1" : "pending..."}
              </div>
            </div>

            <div
              style={{
                padding: "10px 14px",
                borderRadius: 6,
                border: `1.5px solid ${frame >= 532 ? theme.good : "rgba(248, 246, 240, 0.15)"}`,
                background: frame >= 532 ? `${theme.good}14` : "transparent",
              }}
            >
              <div style={{ color: theme.chalkDim, fontSize: 11 }}>END BOUNDARY:</div>
              <div style={{ color: frame >= 532 ? theme.good : theme.chalkDim, fontWeight: "bold", fontSize: 16 }}>
                {frame >= 532 ? "end = start + length" : "pending..."}
              </div>
            </div>

            <div
              style={{
                padding: "10px 14px",
                borderRadius: 6,
                border: `1.5px solid ${showSliceAppend ? theme.cyan : "rgba(248, 246, 240, 0.15)"}`,
                background: showSliceAppend ? `${theme.cyan}14` : "transparent",
              }}
            >
              <div style={{ color: theme.chalkDim, fontSize: 11 }}>SLICE APPEND:</div>
              <div style={{ color: showSliceAppend ? theme.cyan : theme.chalkDim, fontWeight: "bold", fontSize: 16 }}>
                {showSliceAppend ? "res.append(s[start:end])" : "pending..."}
              </div>
            </div>
          </div>
        </div>

        {/* PANEL 3: The Critical Leap Invariant (height: 160) */}
        <div
          style={{
            position: "relative",
            width: "100%",
            height: 160,
            padding: "16px 22px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div style={{ position: "absolute", top: 0, left: 0, pointerEvents: "none" }}>
            <RoughBox
              width={860}
              height={160}
              stroke={showLeapInvariant ? theme.cyan : "rgba(248, 246, 240, 0.25)"}
              strokeWidth={1.8}
              roughness={1.1}
              seed={75}
            />
          </div>

          <div
            style={{
              fontFamily: fonts.mono,
              fontSize: 14,
              color: showLeapInvariant ? theme.cyan : theme.chalkDim,
              letterSpacing: 1.5,
              textTransform: "uppercase",
              display: "flex",
              justifyContent: "space-between",
              borderBottom: "1px dashed rgba(248, 246, 240, 0.18)",
              paddingBottom: 8,
              zIndex: 1,
            }}
          >
            <span>3. Pointer Leap Invariant: i = end</span>
            <span style={{ color: theme.good, fontWeight: 700 }}>O(1) JUMP</span>
          </div>

          <div
            style={{
              fontFamily: fonts.hand,
              fontSize: 20,
              color: showLeapInvariant ? theme.chalkText : theme.chalkDim,
              lineHeight: 1.4,
              zIndex: 1,
            }}
          >
            By setting <span style={{ color: theme.cyan, fontFamily: fonts.mono, fontWeight: 700 }}>i = end</span>, we bypass the entire payload in one leap. Any delimiter character inside the string payload is completely ignored!
          </div>
        </div>

        {/* PANEL 4: Termination & Result Verification (height: 145) */}
        <div
          style={{
            position: "relative",
            width: "100%",
            height: 145,
            padding: "16px 22px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div style={{ position: "absolute", top: 0, left: 0, pointerEvents: "none" }}>
            <RoughBox
              width={860}
              height={145}
              stroke={showFinalReturn ? theme.good : showLoopCycle ? theme.gold : "rgba(248, 246, 240, 0.25)"}
              strokeWidth={1.8}
              roughness={1.1}
              seed={76}
            />
          </div>

          <div
            style={{
              fontFamily: fonts.mono,
              fontSize: 14,
              fontWeight: "bold",
              color: showFinalReturn ? theme.good : showLoopCycle ? theme.gold : theme.chalkDim,
              textTransform: "uppercase",
              borderBottom: "1px dashed rgba(248, 246, 240, 0.18)",
              paddingBottom: 8,
              zIndex: 1,
            }}
          >
            {showFinalReturn ? "✓ Decoder Verified · 100% Lossless" : "4. Loop Completion"}
          </div>

          <div
            style={{
              fontFamily: fonts.mono,
              fontSize: 16,
              color: showFinalReturn ? theme.chalkText : theme.chalkDim,
              zIndex: 1,
            }}
          >
            {showFinalReturn
              ? "return res ➔ ['a#b', '', 'hello world', '42']"
              : "Terminates when i == len(s)."}
          </div>

          <div
            style={{
              fontFamily: fonts.mono,
              fontSize: 14,
              color: showFinalReturn ? theme.good : theme.chalkDim,
              display: "flex",
              justifyContent: "space-between",
              zIndex: 1,
            }}
          >
            <span>TOTAL TIME: O(N)</span>
            <span>EXTRA SPACE: O(1) EXCLUDING OUTPUT</span>
          </div>
        </div>
      </div>

      {/* =========================================================================
          4. CAPTIONS SAFE ZONE (Y: 960..1040)
          ========================================================================= */}
      <Captions words={captionWords} />
    </div>
  );
};
