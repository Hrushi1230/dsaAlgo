/**
 * Scene12Complexity.tsx — Scene 12 · Complexity Analysis & Amortized Swap Proof
 * First Missing Positive (LeetCode 41) · Pattern 01 — Arrays & Hashing
 * 
 * Frame Duration: 1238 frames @ 30fps (41.27s) strictly from sync/12-complexity.json
 * 
 * Mobile-First Board-Native Layout:
 * - Direct Chalkboard Green background (#19523C)
 * - Zero dark card wrappers (no rgba(10, 35, 25, ...))
 * - Direct chalkboard typography with RoughLine underlines & vertical chalk dividers
 * - Progressive word-gated reveals matching exact audio anchors (zero spoilers)
 */

import React from "react";
import { Audio, staticFile, useCurrentFrame } from "remotion";
import { ChalkboardBackground, ChalkFilters } from "../../../../kit/lib/chalk";
import { theme, fonts, typographyMobile } from "../../../../kit/lib/theme";
import { Captions, CaptionWord } from "../../../../kit/components/Captions";
import { RoughLine } from "../../../../kit/components/RoughLine";
import { BoardHeaderMobile } from "./BoardHeaderMobile";
import syncData from "../sync/12-complexity.json";

export const SCENE12_TOTAL_FRAMES = 1238;

const captionWords: CaptionWord[] = (syncData.words || []).map((w: any) => ({
  word: w.word,
  start: w.start_ms / 1000,
  end: w.end_ms / 1000,
}));

export const Scene12Complexity: React.FC = () => {
  const frame = useCurrentFrame();

  const isHashSetActive = frame >= 244;
  const isOptimalActive = frame >= 454;
  const isAmortizationActive = frame >= 633;
  const isSafeguardsActive = frame >= 990;

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
      <ChalkboardBackground />
      <ChalkFilters />

      <Audio src={staticFile("audio/018/scence12.mp3")} />

      {/* Header */}
      <BoardHeaderMobile
        stepBadge="SCENE 12"
        stepTitle="COMPLEXITY & AMORTIZED PROOF"
        algorithmName="Three-Way Approach Matrix"
        difficulty="HARD"
      />

      {/* Main Board Content (Y: 175 to 880) — Zero Dark Cards */}
      <div
        style={{
          position: "absolute",
          top: 175,
          left: 100,
          right: 100,
          display: "flex",
          flexDirection: "column",
          gap: 32,
        }}
      >
        {/* Top: 3-Way Architectural Comparison */}
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {/* Header with yellow hand underline */}
          <div style={{ position: "relative", marginBottom: 6 }}>
            <span
              style={{
                fontFamily: fonts.hand,
                fontSize: 42,
                fontWeight: 800,
                color: theme.pivot,
                letterSpacing: "0.02em",
              }}
            >
              1 · Three-Way Approach Comparison
            </span>
            <div style={{ position: "absolute", left: 0, top: 46, pointerEvents: "none" }}>
              <RoughLine
                shape={{ kind: "line", x1: 0, y1: 4, x2: 560, y2: 6 }}
                width={580}
                height={16}
                stroke={theme.pivot}
                strokeWidth={3}
              />
            </div>
          </div>

          {/* 3 Columns separated by vertical chalk dividers */}
          <div style={{ display: "flex", gap: 36, alignItems: "stretch", marginTop: 8 }}>
            {/* Column 1: Brute Force */}
            <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 8 }}>
              <div style={{ fontFamily: fonts.hand, fontSize: 32, fontWeight: 800, color: theme.warn }}>
                1 · Brute Force
              </div>
              <div style={{ fontFamily: fonts.hand, fontSize: 28, color: theme.chalkBright }}>
                Time: <strong style={{ color: theme.warn }}>O(N²)</strong>
              </div>
              <div style={{ fontFamily: fonts.hand, fontSize: 28, color: theme.chalkBright }}>
                Space: <strong style={{ color: theme.good }}>O(1)</strong>
              </div>
              <div style={{ fontFamily: fonts.hand, fontSize: 24, color: theme.chalkText }}>
                Repeated full-array scans per candidate.
              </div>
            </div>

            {/* Vertical Divider 1 */}
            <div
              style={{
                width: 2.5,
                backgroundColor: "rgba(232, 228, 213, 0.35)",
                alignSelf: "stretch",
                opacity: isHashSetActive ? 1 : 0,
              }}
            />

            {/* Column 2: HashSet */}
            <div
              style={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                gap: 8,
                opacity: isHashSetActive ? 1 : 0,
              }}
            >
              <div style={{ fontFamily: fonts.hand, fontSize: 32, fontWeight: 800, color: theme.pivot }}>
                2 · HashSet
              </div>
              <div style={{ fontFamily: fonts.hand, fontSize: 28, color: theme.chalkBright }}>
                Time: <strong style={{ color: theme.good }}>O(N)</strong>
              </div>
              <div style={{ fontFamily: fonts.hand, fontSize: 28, color: theme.chalkBright }}>
                Space: <strong style={{ color: theme.warn }}>O(N)</strong>
              </div>
              <div style={{ fontFamily: fonts.hand, fontSize: 24, color: theme.chalkText }}>
                Instant O(1) lookups, but uses O(N) heap memory.
              </div>
            </div>

            {/* Vertical Divider 2 */}
            <div
              style={{
                width: 2.5,
                backgroundColor: "rgba(232, 228, 213, 0.35)",
                alignSelf: "stretch",
                opacity: isOptimalActive ? 1 : 0,
              }}
            />

            {/* Column 3: Optimal Cycle Sort */}
            <div
              style={{
                flex: 1.25,
                display: "flex",
                flexDirection: "column",
                gap: 8,
                opacity: isOptimalActive ? 1 : 0,
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <span style={{ fontFamily: fonts.hand, fontSize: 32, fontWeight: 800, color: theme.good }}>
                  3 · Optimal Cycle Sort
                </span>
                <span
                  style={{
                    fontFamily: fonts.hand,
                    fontSize: 22,
                    fontWeight: 800,
                    color: theme.good,
                    border: `1.5px solid ${theme.good}`,
                    borderRadius: 6,
                    padding: "2px 8px",
                  }}
                >
                  OPTIMAL ★
                </span>
              </div>
              <div style={{ fontFamily: fonts.hand, fontSize: 28, color: theme.chalkBright }}>
                Time: <strong style={{ color: theme.good }}>O(N) Amortized</strong>
              </div>
              <div style={{ fontFamily: fonts.hand, fontSize: 28, color: theme.chalkBright }}>
                Space: <strong style={{ color: theme.good }}>O(1) Strictly In-Place</strong>
              </div>
              <div style={{ fontFamily: fonts.hand, fontSize: 24, color: theme.good }}>
                Array serves as its own hash table without auxiliary allocation!
              </div>
            </div>
          </div>
        </div>

        {/* Horizontal Divider */}
        <div
          style={{
            height: 2,
            backgroundColor: "rgba(232, 228, 213, 0.25)",
            width: "100%",
            opacity: isAmortizationActive ? 1 : 0,
          }}
        />

        {/* Bottom Split: Amortization Proof vs Interview Safeguards */}
        <div style={{ display: "flex", gap: 48, alignItems: "flex-start" }}>
          {/* Left Column: Amortization Proof */}
          <div
            style={{
              flex: 1.15,
              display: "flex",
              flexDirection: "column",
              gap: 16,
              opacity: isAmortizationActive ? 1 : 0,
            }}
          >
            {/* Header with yellow hand underline */}
            <div style={{ position: "relative", marginBottom: 6 }}>
              <span
                style={{
                  fontFamily: fonts.hand,
                  fontSize: 38,
                  fontWeight: 800,
                  color: theme.pivot,
                  letterSpacing: "0.02em",
                }}
              >
                2 · Amortized O(N) Swap Proof
              </span>
              <div style={{ position: "absolute", left: 0, top: 42, pointerEvents: "none" }}>
                <RoughLine
                  shape={{ kind: "line", x1: 0, y1: 4, x2: 440, y2: 6 }}
                  width={460}
                  height={16}
                  stroke={theme.pivot}
                  strokeWidth={3}
                />
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 14, marginTop: 6 }}>
              <div style={{ display: "flex", alignItems: "flex-start", gap: 14 }}>
                <div
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: "50%",
                    border: `2px solid ${theme.cyan}`,
                    color: theme.cyan,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontWeight: 800,
                    fontSize: 22,
                    flexShrink: 0,
                    marginTop: 2,
                  }}
                >
                  1
                </div>
                <div style={{ fontFamily: fonts.hand, fontSize: 30, fontWeight: 700, color: theme.chalkBright, lineHeight: 1.35 }}>
                  Why not O(N²)? Every successful swap places at least <strong style={{ color: theme.good }}>one number</strong> into its <strong style={{ color: theme.good }}>permanent home index</strong> forever!
                </div>
              </div>

              <div style={{ display: "flex", alignItems: "flex-start", gap: 14 }}>
                <div
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: "50%",
                    border: `2px solid ${theme.good}`,
                    color: theme.good,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontWeight: 800,
                    fontSize: 22,
                    flexShrink: 0,
                    marginTop: 2,
                  }}
                >
                  2
                </div>
                <div
                  style={{
                    fontFamily: '"SFMono-Regular", Consolas, monospace',
                    fontSize: 24,
                    fontWeight: 700,
                    color: theme.good,
                    lineHeight: 1.35,
                  }}
                >
                  Total Swaps ≤ N · Outer visits = N · Final scan = N ⟹ Total work ≤ 3N = O(N)!
                </div>
              </div>
            </div>
          </div>

          {/* Vertical Divider */}
          <div
            style={{
              width: 2.5,
              minHeight: 260,
              backgroundColor: "rgba(232, 228, 213, 0.35)",
              alignSelf: "stretch",
              opacity: isSafeguardsActive ? 1 : 0,
            }}
          />

          {/* Right Column: Two Vital Safeguards */}
          <div
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              gap: 16,
              opacity: isSafeguardsActive ? 1 : 0,
            }}
          >
            {/* Header with yellow hand underline */}
            <div style={{ position: "relative", marginBottom: 6 }}>
              <span
                style={{
                  fontFamily: fonts.hand,
                  fontSize: 38,
                  fontWeight: 800,
                  color: theme.good,
                  letterSpacing: "0.02em",
                }}
              >
                3 · Two Vital Safeguards
              </span>
              <div style={{ position: "absolute", left: 0, top: 42, pointerEvents: "none" }}>
                <RoughLine
                  shape={{ kind: "line", x1: 0, y1: 4, x2: 380, y2: 6 }}
                  width={400}
                  height={16}
                  stroke={theme.good}
                  strokeWidth={3}
                />
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 14, marginTop: 6 }}>
              <div style={{ display: "flex", alignItems: "flex-start", gap: 14 }}>
                <div
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: "50%",
                    border: `2px solid ${theme.pivot}`,
                    color: theme.pivot,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontWeight: 800,
                    fontSize: 22,
                    flexShrink: 0,
                    marginTop: 2,
                  }}
                >
                  1
                </div>
                <div style={{ fontFamily: fonts.hand, fontSize: 30, fontWeight: 700, color: theme.chalkBright, lineHeight: 1.35 }}>
                  <span style={{ color: theme.pivot }}>Valid Filter:</span> Only swap if <span style={{ fontFamily: "monospace", color: theme.good }}>1 ≤ nums[i] ≤ N</span>. Non-positives and values &gt; N stay untouched.
                </div>
              </div>

              <div style={{ display: "flex", alignItems: "flex-start", gap: 14 }}>
                <div
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: "50%",
                    border: `2px solid ${theme.warn}`,
                    color: theme.warn,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontWeight: 800,
                    fontSize: 22,
                    flexShrink: 0,
                    marginTop: 2,
                  }}
                >
                  2
                </div>
                <div style={{ fontFamily: fonts.hand, fontSize: 30, fontWeight: 700, color: theme.chalkBright, lineHeight: 1.35 }}>
                  <span style={{ color: theme.warn }}>Duplicate Guard:</span> Never swap if <span style={{ fontFamily: "monospace", color: theme.warn }}>nums[i] == nums[nums[i]-1]</span>! Prevents infinite cycles.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Caption Safe Zone */}
      <Captions words={captionWords} />
    </div>
  );
};
