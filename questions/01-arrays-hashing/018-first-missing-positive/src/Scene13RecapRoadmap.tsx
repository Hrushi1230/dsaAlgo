/**
 * Scene13RecapRoadmap.tsx — Scene 13 · Recap + Roadmap Advance to Q19
 * First Missing Positive (LeetCode 41) · Pattern 01 — Arrays & Hashing
 * 
 * Frame Duration: 1045 frames @ 30fps (34.83s) strictly from sync/13-recap-roadmap.json
 * 
 * Mobile-First Board-Native Layout:
 * - Direct Chalkboard Green background (#19523C)
 * - Zero dark card wrappers (no rgba(10, 35, 25, ...))
 * - Direct chalkboard typography with RoughLine underlines & vertical chalk dividers
 * - Progressive reveals: Summary Part (F0–F649) -> Full Roadmap View (F650–F1045)
 */

import React, { useMemo } from "react";
import { Audio, interpolate, staticFile, useCurrentFrame } from "remotion";
import { ChalkboardBackground, ChalkFilters } from "../../../../kit/lib/chalk";
import { theme, fonts, typographyMobile } from "../../../../kit/lib/theme";
import { EASE } from "../../../../kit/lib/anim";
import { Captions, CaptionWord } from "../../../../kit/components/Captions";
import { MasterRoadmapV2 } from "../../../../kit/components/MasterRoadmapV2";
import { RoughLine } from "../../../../kit/components/RoughLine";
import { BoardHeaderMobile } from "./BoardHeaderMobile";
import syncData from "../sync/13-recap-roadmap.json";

export const SCENE13_TOTAL_FRAMES = 897;

const captionWords: CaptionWord[] = (syncData.words || []).map((w: any) => ({
  word: w.word,
  start: w.start_ms / 1000,
  end: w.end_ms / 1000,
}));

export const Scene13RecapRoadmap: React.FC = () => {
  const frame = useCurrentFrame();

  // Timing triggers strictly from speech (F0..F658: Recap Summary)
  const isPillar2Active = frame >= 76;
  const isPillar3Active = frame >= 176;
  const isMilestoneActive = frame >= 480;

  // Mode: Summary (F0–F658) -> Master Curriculum (F659–F897)
  const isRoadmapView = frame >= 659;

  // Question 18 solved, advancing to Pattern 2 (Two Pointers)
  const isQ18Completed = frame >= 659;
  const isQ19Spotlight = frame >= 737;

  // Smooth camera pan
  const { camScale, camY } = useMemo(() => {
    if (!isRoadmapView) {
      return { camScale: 1.0, camY: 0 };
    }
    const progress = interpolate(frame, [659, 720], [0, 1], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
      easing: EASE,
    });
    const s = 1.0 + progress * 0.03;
    const y = interpolate(frame, [737, 820], [-60, -260], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
      easing: EASE,
    });
    return { camScale: s, camY: y };
  }, [frame, isRoadmapView]);

  const completedNums = useMemo(() => {
    return Array.from({ length: isQ18Completed ? 18 : 17 }, (_, i) => i + 1);
  }, [isQ18Completed]);

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

      <Audio src={staticFile("audio/018/scence13.mp3")} />

      {/* Part 1: Summary Board (F0–F649) — Zero Dark Cards */}
      {!isRoadmapView && (
        <>
          <BoardHeaderMobile
            stepBadge="SCENE 13"
            stepTitle="SUMMARY & PATTERN COMPLETION"
            algorithmName="First Missing Positive Capstone"
            difficulty="HARD"
          />

          <div
            style={{
              position: "absolute",
              top: 180,
              left: 100,
              right: 100,
              display: "flex",
              flexDirection: "column",
              gap: 36,
            }}
          >
            {/* Top: 3 Evolution Pillars directly on board */}
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
                  1 · Three Paradigms Compared
                </span>
                <div style={{ position: "absolute", left: 0, top: 46, pointerEvents: "none" }}>
                  <RoughLine
                    shape={{ kind: "line", x1: 0, y1: 4, x2: 460, y2: 6 }}
                    width={480}
                    height={16}
                    stroke={theme.pivot}
                    strokeWidth={3}
                  />
                </div>
              </div>

              {/* 3 Columns separated by vertical chalk dividers */}
              <div style={{ display: "flex", gap: 36, alignItems: "stretch", marginTop: 8 }}>
                {/* Pillar 1: Brute Force */}
                <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 10 }}>
                  <div style={{ fontFamily: fonts.hand, fontSize: 32, fontWeight: 800, color: theme.warn }}>
                    1 · Brute Force
                  </div>
                  <div style={{ fontFamily: fonts.hand, fontSize: 28, color: theme.chalkBright, lineHeight: 1.4 }}>
                    Repeats full-array linear scans for every positive candidate.
                  </div>
                  <div
                    style={{
                      fontFamily: '"SFMono-Regular", Consolas, monospace',
                      fontSize: 22,
                      fontWeight: 700,
                      color: theme.warn,
                      border: `1.5px solid ${theme.warn}`,
                      borderRadius: 6,
                      padding: "4px 12px",
                      alignSelf: "flex-start",
                      marginTop: 6,
                    }}
                  >
                    O(N²) Time · O(1) Space
                  </div>
                </div>

                {/* Vertical Divider 1 */}
                <div
                  style={{
                    width: 2.5,
                    backgroundColor: "rgba(232, 228, 213, 0.35)",
                    alignSelf: "stretch",
                    opacity: isPillar2Active ? 1 : 0,
                  }}
                />

                {/* Pillar 2: HashSet */}
                <div
                  style={{
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                    gap: 10,
                    opacity: isPillar2Active ? 1 : 0,
                  }}
                >
                  <div style={{ fontFamily: fonts.hand, fontSize: 32, fontWeight: 800, color: theme.pivot }}>
                    2 · HashSet
                  </div>
                  <div style={{ fontFamily: fonts.hand, fontSize: 28, color: theme.chalkBright, lineHeight: 1.4 }}>
                    Instant O(1) membership lookups, but allocates heap for N elements.
                  </div>
                  <div
                    style={{
                      fontFamily: '"SFMono-Regular", Consolas, monospace',
                      fontSize: 22,
                      fontWeight: 700,
                      color: theme.pivot,
                      border: `1.5px solid ${theme.pivot}`,
                      borderRadius: 6,
                      padding: "4px 12px",
                      alignSelf: "flex-start",
                      marginTop: 6,
                    }}
                  >
                    O(N) Time · O(N) Space
                  </div>
                </div>

                {/* Vertical Divider 2 */}
                <div
                  style={{
                    width: 2.5,
                    backgroundColor: "rgba(232, 228, 213, 0.35)",
                    alignSelf: "stretch",
                    opacity: isPillar3Active ? 1 : 0,
                  }}
                />

                {/* Pillar 3: Optimal Cycle Sort */}
                <div
                  style={{
                    flex: 1.25,
                    display: "flex",
                    flexDirection: "column",
                    gap: 10,
                    opacity: isPillar3Active ? 1 : 0,
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <span style={{ fontFamily: fonts.hand, fontSize: 32, fontWeight: 800, color: theme.good }}>
                      3 · Optimal In-Place
                    </span>
                    <span
                      style={{
                        fontFamily: fonts.hand,
                        fontSize: 20,
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
                  <div style={{ fontFamily: fonts.hand, fontSize: 28, color: theme.chalkBright, lineHeight: 1.4 }}>
                    Array is its own hash table: <span style={{ color: theme.pivot }}>nums[i] belongs at nums[i] - 1</span>!
                  </div>
                  <div
                    style={{
                      fontFamily: '"SFMono-Regular", Consolas, monospace',
                      fontSize: 22,
                      fontWeight: 700,
                      color: theme.good,
                      border: `1.5px solid ${theme.good}`,
                      borderRadius: 6,
                      padding: "4px 12px",
                      alignSelf: "flex-start",
                      marginTop: 6,
                    }}
                  >
                    O(N) Time · O(1) In-Place ★
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
              }}
            />

            {/* Bottom Milestone Banner directly on board */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "10px 0",
                opacity: isMilestoneActive ? 1 : 0,
              }}
            >
              <div>
                <div style={{ ...typographyMobile.tag, color: theme.good }}>
                  PATTERN 01 CAPSTONE ACHIEVED
                </div>
                <div
                  style={{
                    fontFamily: fonts.hand,
                    color: theme.chalkBright,
                    fontSize: 42,
                    fontWeight: 800,
                    marginTop: 4,
                  }}
                >
                  First Missing Positive (LeetCode 41) Solved!
                </div>
              </div>

              <div
                style={{
                  fontFamily: '"SFMono-Regular", Consolas, monospace',
                  fontSize: 32,
                  fontWeight: 800,
                  color: theme.good,
                  padding: "10px 24px",
                  borderRadius: 10,
                  border: `2.5px solid ${theme.good}`,
                  letterSpacing: "0.05em",
                }}
              >
                18 / 18 COMPLETE
              </div>
            </div>
          </div>
        </>
      )}

      {/* Part 2: Master Curriculum Roadmap (F650–F1045) */}
      {isRoadmapView && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            transform: `scale(${camScale}) translateY(${camY}px)`,
            transformOrigin: "center center",
          }}
        >
          <MasterRoadmapV2
            completedCount={isQ18Completed ? 18 : 17}
            completedGlobalNums={completedNums}
            activeGlobalNum={18}
            activePatternId={1}
            spotlightRow={isQ19Spotlight ? 19 : 18}
            activeBadgeLabel={isQ18Completed ? "SOLVED" : "IN PROGRESS"}
          />
        </div>
      )}

      {/* Caption Safe Zone */}
      <Captions words={captionWords} />
    </div>
  );
};
