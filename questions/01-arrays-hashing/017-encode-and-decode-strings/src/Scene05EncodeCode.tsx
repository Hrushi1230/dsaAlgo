/**
 * Scene05EncodeCode.tsx — Scene 05 · Encoder Code Walkthrough
 * Encode and Decode Strings (LeetCode 271) · Pattern 01 — Arrays & Hashing
 *
 * Board-Native Architecture (per Q016 Gold Standard):
 * - ZERO dark cards, ZERO opaque dashboard containers.
 * - Left Stage: Full-height ChalkCodeEditorV2 (board-native transparent) in hand-drawn rough chalk box.
 * - Right Stage: Direct chalkboard walkthrough:
 *     1. Input List (strs)
 *     2. Format Framing: f"{len(s)}#{s}"
 *     3. Final Return String: "".join(parts)
 *     4. Asymptotic Complexity Badge: O(N + C) Time · O(N + C) Space
 * - Total Duration: 701 frames @ 30fps (23.36s) strictly from sync/05-encode-code.json
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
import syncData from "../sync/05-encode-code.json";

const theme = {
  ...baseTheme,
  gold: baseTheme.pivot,
  chalkSub: baseTheme.chalkDim,
  chalkBorder: baseTheme.cardBorder,
};

const captionWords: CaptionWord[] = (syncData.words || []).map((w: any) => ({
  word: w.word,
  start: w.start_ms / 1000,
  end: w.end_ms / 1000,
}));

const CODE_LINES: ChalkCodeLine[] = [
  {
    num: 1,
    text: "def encode(strs: list[str]) -> str:",
    indent: 0,
    startFrame: 0,
    endFrame: 25,
    tokens: [
      { text: "def ", color: theme.cyan },
      { text: "encode", color: theme.pivot },
      { text: "(strs: list[str]) -> ", color: theme.chalkText },
      { text: "str", color: theme.pivot },
      { text: ":", color: theme.chalkText },
    ],
  },
  {
    num: 2,
    text: "    parts = []",
    indent: 1,
    startFrame: 60,
    endFrame: 110,
    tokens: [
      { text: "    parts", color: theme.good },
      { text: " = []", color: theme.chalkLine },
      { text: "  # Accumulator list", color: "rgba(255,255,255,0.4)" },
    ],
  },
  {
    num: 3,
    text: "    for s in strs:",
    indent: 1,
    startFrame: 148,
    endFrame: 180,
    tokens: [
      { text: "    for ", color: theme.cyan },
      { text: "s", color: theme.pivot },
      { text: " in ", color: theme.cyan },
      { text: "strs", color: theme.chalkText },
      { text: ":", color: theme.chalkText },
    ],
  },
  {
    num: 4,
    text: '        parts.append(f"{len(s)}#{s}")',
    indent: 2,
    startFrame: 211,
    endFrame: 380,
    tokens: [
      { text: "        parts", color: theme.good },
      { text: ".append(", color: theme.chalkText },
      { text: 'f"', color: theme.pivot },
      { text: "{len(s)}", color: theme.pivot },
      { text: "#", color: theme.accent },
      { text: "{s}", color: theme.cyan },
      { text: '")', color: theme.chalkText },
    ],
  },
  {
    num: 5,
    text: '    return "".join(parts)',
    indent: 1,
    startFrame: 440,
    endFrame: 510,
    tokens: [
      { text: "    return ", color: theme.cyan },
      { text: '""', color: theme.pivot },
      { text: ".join(", color: theme.chalkText },
      { text: "parts", color: theme.good },
      { text: ")", color: theme.chalkText },
    ],
  },
];

export const Scene05EncodeCode: React.FC = () => {
  const frame = useCurrentFrame();

  const activeLineNums = useMemo(() => {
    if (frame < 60) return [1];
    if (frame >= 60 && frame < 148) return [2];
    if (frame >= 148 && frame < 211) return [3];
    if (frame >= 211 && frame < 401) return [4];
    if (frame >= 401 && frame < 440) return [3, 4];
    if (frame >= 440 && frame < 589) return [5];
    return [1, 2, 3, 4, 5];
  }, [frame]);

  const showLoopCue = frame >= 148;
  const showFormulaLength = frame >= 211;
  const showJoinStep = frame >= 440;
  const showComplexity = frame >= 589;

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

      <Audio src={staticFile("audio/017/05-encode-code.mp3")} />

      {/* ChalkDust particles */}
      {frame >= 60 && frame < 85 && <ChalkDust start={60} x={450} y={320} count={12} />}
      {frame >= 211 && frame < 240 && <ChalkDust start={211} x={520} y={420} count={14} />}
      {frame >= 440 && frame < 470 && <ChalkDust start={440} x={500} y={470} count={14} />}
      {frame >= 589 && frame < 620 && <ChalkDust start={589} x={1400} y={660} count={18} />}

      {/* =========================================================================
          1. HEADER (Y: 32 .. 80) — Board-Native
          ========================================================================= */}
      <BoardHeader
        title="PYTHON ENCODER IMPLEMENTATION"
        badge="O(N + C) LINEAR TIME"
        badgeColor={theme.good}
        seed={51}
      />

      {/* =========================================================================
          2. LEFT STAGE: FULL-HEIGHT CHALK CODE EDITOR (X: 70..950, Y: 110..870)
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
        <div style={{ position: "absolute", top: 0, left: 0 }}>
          <RoughBox width={880} height={760} stroke={theme.cyan} strokeWidth={2.2} roughness={1.2} seed={52} />
        </div>

        <div style={{ padding: "20px 24px", height: "100%", zIndex: 1, display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontFamily: fonts.mono,
              fontSize: 16,
              color: "rgba(255,255,255,0.6)",
              marginBottom: 16,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              borderBottom: "1.5px solid rgba(255,255,255,0.2)",
              paddingBottom: 10,
            }}
          >
            <span style={{ color: theme.cyan, fontWeight: 700 }}>// solution_encoder.py</span>
            <span style={{ color: theme.good, fontWeight: 700 }}>PYTHON 3.11</span>
          </div>

          <div style={{ flex: 1, paddingTop: 10 }}>
            <ChalkCodeEditorV2
              lines={CODE_LINES}
              activeLineNums={activeLineNums}
              variant="board-native"
              width="100%"
              height="100%"
              fontSize={24}
              lineHeight={54}
              indentWidth={32}
              title="solution_encoder.py"
            />
          </div>
        </div>
      </div>

      {/* =========================================================================
          3. RIGHT STAGE: DIRECT CHALKBOARD WORKBENCH (X: 990..1850, Y: 110..870)
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
          gap: 22,
        }}
      >
        {/* PANEL 1: Input List (strs) */}
        <div
          style={{
            position: "relative",
            width: "100%",
            height: 145,
            padding: "16px 24px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <div style={{ position: "absolute", top: 0, left: 0 }}>
            <RoughBox width={860} height={145} stroke={theme.cyan} strokeWidth={1.8} roughness={1.1} seed={53} />
          </div>

          <div
            style={{
              fontFamily: fonts.hand,
              fontSize: 19,
              color: "rgba(255,255,255,0.7)",
              marginBottom: 10,
              zIndex: 1,
            }}
          >
            Input List: <span style={{ color: theme.cyan, fontFamily: fonts.mono }}>strs: list[str]</span>
          </div>

          <div style={{ display: "flex", gap: 14, fontFamily: fonts.mono, fontSize: 18, zIndex: 1 }}>
            {[
              { val: '"a#b"', len: 3 },
              { val: '""', len: 0 },
              { val: '"hello world"', len: 11 },
              { val: '"42"', len: 2 },
            ].map((item, idx) => (
              <div
                key={idx}
                style={{
                  padding: "6px 14px",
                  borderRadius: 6,
                  border: `1.5px solid ${showLoopCue ? theme.pivot : "rgba(255,255,255,0.3)"}`,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 3,
                }}
              >
                <span style={{ color: showLoopCue ? theme.pivot : theme.chalkText, fontWeight: 700 }}>{item.val}</span>
                <span style={{ fontSize: 13, color: "rgba(255,255,255,0.5)" }}>len={item.len}</span>
              </div>
            ))}
          </div>
        </div>

        {/* PANEL 2: Format Framing: f"{len(s)}#{s}" */}
        <div
          style={{
            position: "relative",
            width: "100%",
            height: 200,
            padding: "18px 24px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <div style={{ position: "absolute", top: 0, left: 0 }}>
            <RoughBox width={860} height={200} stroke={theme.pivot} strokeWidth={2} roughness={1.2} seed={54} />
          </div>

          <div
            style={{
              fontFamily: fonts.hand,
              fontSize: 20,
              color: theme.pivot,
              fontWeight: 800,
              marginBottom: 12,
              zIndex: 1,
            }}
          >
            FORMAT FRAMING: <span style={{ fontFamily: fonts.mono }}>f"&#123;len(s)&#125;#&#123;s&#125;"</span>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: 14, zIndex: 1 }}>
            <div
              style={{
                padding: "8px 16px",
                border: `2px solid ${theme.cyan}`,
                borderRadius: 6,
                fontFamily: fonts.mono,
                fontSize: 22,
                color: theme.cyan,
                fontWeight: 700,
              }}
            >
              len(s)
            </div>
            <span style={{ fontFamily: fonts.mono, fontSize: 24, color: "rgba(255,255,255,0.5)" }}>+</span>
            <div
              style={{
                padding: "8px 18px",
                border: `2px solid ${theme.accent}`,
                borderRadius: 6,
                fontFamily: fonts.mono,
                fontSize: 22,
                color: theme.accent,
                fontWeight: 800,
              }}
            >
              '#'
            </div>
            <span style={{ fontFamily: fonts.mono, fontSize: 24, color: "rgba(255,255,255,0.5)" }}>+</span>
            <div
              style={{
                padding: "8px 20px",
                border: `2px solid ${theme.good}`,
                borderRadius: 6,
                fontFamily: fonts.mono,
                fontSize: 22,
                color: theme.good,
                fontWeight: 700,
              }}
            >
              s
            </div>
            <span style={{ fontFamily: fonts.mono, fontSize: 24, color: "rgba(255,255,255,0.5)" }}>&rarr;</span>
            <div
              style={{
                padding: "8px 20px",
                border: `2px solid ${theme.pivot}`,
                borderRadius: 6,
                fontFamily: fonts.mono,
                fontSize: 24,
                color: theme.pivot,
                fontWeight: 800,
              }}
            >
              "3#a#b"
            </div>
          </div>

          {showFormulaLength && (
            <div
              style={{
                marginTop: 14,
                fontFamily: fonts.mono,
                fontSize: 16,
                color: "rgba(255,255,255,0.7)",
                zIndex: 1,
              }}
            >
              parts list: <span style={{ color: theme.good }}>["3#a#b", "0#", "11#hello world", "2#42"]</span>
            </div>
          )}
        </div>

        {/* PANEL 3: Final Return String: "".join(parts) */}
        <div
          style={{
            position: "relative",
            width: "100%",
            height: 170,
            padding: "18px 24px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <div style={{ position: "absolute", top: 0, left: 0 }}>
            <RoughBox width={860} height={170} stroke={theme.good} strokeWidth={2} roughness={1.2} seed={55} />
          </div>

          <div
            style={{
              fontFamily: fonts.hand,
              fontSize: 20,
              color: theme.good,
              fontWeight: 800,
              marginBottom: 10,
              zIndex: 1,
            }}
          >
            FINAL RETURN STRING: <span style={{ fontFamily: fonts.mono }}>"".join(parts)</span>
          </div>

          <div
            style={{
              padding: "10px 18px",
              border: `1.5px dashed ${showJoinStep ? theme.good : "rgba(255,255,255,0.3)"}`,
              borderRadius: 8,
              fontFamily: fonts.mono,
              fontSize: 24,
              color: showJoinStep ? theme.pivot : "rgba(255,255,255,0.5)",
              fontWeight: 700,
              letterSpacing: 2,
              zIndex: 1,
            }}
          >
            3#a#b0#11#hello world2#42
          </div>
          <div style={{ fontFamily: fonts.mono, fontSize: 14, color: "rgba(255,255,255,0.5)", marginTop: 6, zIndex: 1 }}>
            Single contiguous wire transmission stream (25 characters total)
          </div>
        </div>

        {/* PANEL 4: Complexity Derivation Badge */}
        {showComplexity && (
          <div
            style={{
              position: "relative",
              width: "100%",
              height: 130,
              padding: "14px 24px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div style={{ position: "absolute", top: 0, left: 0 }}>
              <RoughBox width={860} height={130} stroke={theme.good} strokeWidth={2.2} roughness={1.2} seed={56} />
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 4, zIndex: 1 }}>
              <div style={{ fontFamily: fonts.hand, fontSize: 22, color: theme.good, fontWeight: 800 }}>
                ASYMPTOTIC COMPLEXITY:
              </div>
              <div style={{ fontFamily: fonts.hand, fontSize: 18, color: "rgba(255,255,255,0.7)" }}>
                Iterates over N strings + copies C payload characters
              </div>
            </div>

            <div style={{ display: "flex", gap: 20, zIndex: 1 }}>
              <div style={{ textAlign: "center" }}>
                <div style={{ fontFamily: fonts.hand, fontSize: 16, color: "rgba(255,255,255,0.6)" }}>TIME</div>
                <div style={{ fontFamily: fonts.mono, fontSize: 28, color: theme.good, fontWeight: 900 }}>O(N + C)</div>
              </div>
              <div style={{ textAlign: "center" }}>
                <div style={{ fontFamily: fonts.hand, fontSize: 16, color: "rgba(255,255,255,0.6)" }}>SPACE</div>
                <div style={{ fontFamily: fonts.mono, fontSize: 28, color: theme.good, fontWeight: 900 }}>O(N + C)</div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* FIXED WORD-SYNC CAPTIONS SAFE ZONE (Y: 960..1040) */}
      <Captions words={captionWords} />
    </div>
  );
};
