/**
 * Scene01Intro.tsx — Scene 01 · Course Roadmap Resume & Q16 Activation
 * Subarray Sum Equals K (LeetCode 560) · Pattern 01 — Arrays & Hashing
 *
 * Implements the continuous chalkboard Master Roadmap UI & Scene 02 Handoff:
 * - Master Roadmap UI Architecture resuming from Q15 ending state: 15 / 227 COMPLETE
 * - Row 015 COMPLETE with green checkmark
 * - Row 016 UP NEXT mutates to NOW ACTIVE at Frame 406 ("question 16,")
 * - Total Duration: 1316 frames @ 30fps (43.860s) strictly from sync/01-roadmap.json
 * - Visual language strictly adheres to @dsa/kit design tokens
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
import { EASE } from "../../../../kit/lib/anim";
import { ChalkDust } from "../../../../kit/components/ChalkDust";
import { Captions, CaptionWord } from "../../../../kit/components/Captions";
import { MasterRoadmapV2 } from "../../../../kit/components/MasterRoadmapV2";
import { RoughBox } from "../../../../kit/components/RoughBox";
import syncData from "../sync/01-roadmap.json";

// ---------------------------------------------------------------------------
// Word-level Caption Timings (from sync/01-roadmap.json)
// ---------------------------------------------------------------------------
const captionWords: CaptionWord[] = (syncData.words || [])
  .filter((w: any) => w.word !== "e,")
  .map((w: any) => {
    let word = w.word;
    if (word === "k,") word = "k,";
    return {
      word,
      start: w.start_ms / 1000,
      end: w.end_ms / 1000,
    };
  });

export const Scene01Intro: React.FC = () => {
  const frame = useCurrentFrame();

  // =========================================================================
  // CAMERA ENGINE (Subtle pan/zoom matching framewise plan)
  // =========================================================================
  const { camScale, camX, camY }: { camScale: number; camX: number; camY: number } = useMemo(() => {
    // Beat 01 (F0–F137): Settle from 1.008 -> 1.000
    if (frame < 138) {
      const settle = interpolate(frame, [0, 24], [1.008, 1.0], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
        easing: EASE,
      });
      return { camScale: settle, camX: 0, camY: 0 };
    }

    // Beat 02 (F138–F290): Pan up to frame the 15/227 progress counter
    if (frame >= 138 && frame < 291) {
      const scale = interpolate(frame, [138, 170], [1.0, 1.02], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
        easing: EASE,
      });
      const y = interpolate(frame, [138, 170], [0, -90], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
        easing: EASE,
      });
      return { camScale: scale, camX: 0, camY: y };
    }

    // Beat 03 (F291–F405): Settle back toward center
    if (frame >= 291 && frame < 406) {
      const scale = interpolate(frame, [291, 320], [1.02, 1.0], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
        easing: EASE,
      });
      const y = interpolate(frame, [291, 320], [-90, 0], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
        easing: EASE,
      });
      return { camScale: scale, camX: 0, camY: y };
    }

    // Beats 04, 05, 06 (F406–F636): Pan down to focus on Row 016
    if (frame >= 406 && frame < 637) {
      const scale = interpolate(frame, [406, 440], [1.0, 1.03], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
        easing: EASE,
      });
      const y = interpolate(frame, [406, 440], [0, -110], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
        easing: EASE,
      });
      return { camScale: scale, camX: 0, camY: y };
    }

    // Beats 07 through 09 (F637–F1316): Ease back to 1.000 for concept callout & clean handoff
    if (frame >= 637) {
      const scale = interpolate(frame, [637, 670], [1.03, 1.0], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
        easing: EASE,
      });
      const y = interpolate(frame, [637, 670], [-110, 0], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
        easing: EASE,
      });
      return { camScale: scale, camX: 0, camY: y };
    }

    return { camScale: 1.0, camX: 0, camY: 0 };
  }, [frame]);

  // Spotlight row: 15 during Beat 1 (F0..F137), 16 during Beats 4-6 (F406..F636)
  const spotlightRow = useMemo(() => {
    if (frame < 138) return 15;
    if (frame >= 406 && frame < 637) return 16;
    return undefined;
  }, [frame]);

  // Canonical Q16 activation at Frame 406 ("Next, question 16,")
  const isQ016Active = frame >= 406;
  const activeBadgeLabel = isQ016Active ? "NOW ACTIVE" : "UP NEXT";

  // Underline under Pattern 01 header during Beat 3 (F291..F405)
  const showHeaderUnderline = frame >= 291 && frame < 406;

  // Handoff fade: roadmap cleanly fades out at Beat 07 (F637) so teaching card takes center stage without collision
  const handoffFade = useMemo(() => {
    if (frame < 637) return 0;
    return interpolate(frame, [637, 665], [0, 1.0], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
      easing: EASE,
    });
  }, [frame]);

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
      <ChalkboardBackground />
      <ChalkFilters />

      {/* Audio VO */}
      <Audio src={staticFile("audio/016/scence01.mp3")} />

      {/* ChalkDust bursts on key beats: Q016 activation at F406 */}
      {frame >= 406 && frame <= 440 && (
        <ChalkDust x={1090} y={698} start={406} color={theme.pivot} count={16} radius={60} />
      )}

      {/* Authoritative Permanent Master Roadmap UI Architecture */}
      <MasterRoadmapV2
        completedCount={15}
        completedGlobalNums={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]}
        activeGlobalNum={isQ016Active ? 16 : 0}
        upNextGlobalNum={isQ016Active ? undefined : 16}
        activePatternId={1}
        spotlightRow={spotlightRow}
        activeBadgeLabel={activeBadgeLabel}
        showHeaderUnderline={showHeaderUnderline}
        scale={camScale}
        translateX={camX}
        translateY={camY}
        handoffFade={handoffFade}
        opacity={Math.max(0, 1 - handoffFade)}
      />

      {/* Beat 06 (F565..F636): "DECEPTIVELY SIMPLE" Eyebrow Pill */}
      {frame >= 565 && frame < 637 && (
        <div
          style={{
            position: "absolute",
            top: 240,
            left: 760,
            padding: "8px 24px",
            borderRadius: 20,
            backgroundColor: "rgba(255, 209, 102, 0.15)",
            border: `2px solid ${theme.pivot}`,
            display: "flex",
            alignItems: "center",
            gap: 10,
            opacity: interpolate(frame, [565, 580], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: EASE,
            }),
            zIndex: 35,
          }}
        >
          <span style={{ fontSize: 22, color: theme.pivot, fontFamily: fonts.mono, fontWeight: "bold" }}>
            ⚡ DECEPTIVELY SIMPLE
          </span>
        </div>
      )}

      {/* Beats 07, 08, 08b (F637..F1135): Problem Concept Preview Card */}
      {frame >= 637 && frame < 1136 && (
        <div
          style={{
            position: "absolute",
            top: 220,
            left: 360,
            width: 1200,
            height: 520,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "rgba(18, 40, 30, 0.95)",
            borderRadius: 20,
            boxShadow: "0 14px 45px rgba(0, 0, 0, 0.6)",
            opacity: interpolate(frame, [637, 665], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: EASE,
            }),
            zIndex: 30,
          }}
        >
          {/* Card Border */}
          <div style={{ position: "absolute", top: 0, left: 0, pointerEvents: "none" }}>
            <RoughBox
              width={1200}
              height={520}
              startFrame={637}
              stroke="rgba(244, 241, 232, 0.4)"
              strokeWidth={2}
              seed={101}
            />
          </div>

          {/* Top Tag: Target Indicator */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 20,
              marginBottom: 28,
            }}
          >
            <div
              style={{
                padding: "8px 24px",
                borderRadius: 14,
                backgroundColor: "rgba(255, 209, 102, 0.18)",
                border: `2px solid ${theme.pivot}`,
                fontFamily: fonts.mono,
                fontSize: 26,
                fontWeight: "bold",
                color: theme.pivot,
              }}
            >
              TARGET: k = 3
            </div>

            <div
              style={{
                padding: "8px 24px",
                borderRadius: 14,
                backgroundColor: "rgba(60, 229, 167, 0.15)",
                border: `2px solid ${theme.good}`,
                fontFamily: fonts.mono,
                fontSize: 24,
                fontWeight: "bold",
                color: theme.good,
              }}
            >
              GOAL: Count All Contiguous Subarrays (sum == k)
            </div>
          </div>

          {/* Blueprint Array Track Preview */}
          <div
            style={{
              display: "flex",
              gap: 16,
              marginBottom: 30,
            }}
          >
            {[1, -1, 2, 1, 0, -2, 3].map((val, idx) => (
              <div
                key={idx}
                style={{
                  width: 90,
                  height: 90,
                  borderRadius: 12,
                  backgroundColor: "rgba(255, 255, 255, 0.06)",
                  border: `2px solid ${
                    // Highlight [2, 1] during Beat 08 (F776+)
                    frame >= 776 && (idx === 2 || idx === 3)
                      ? theme.good
                      : "rgba(244, 241, 232, 0.3)"
                  }`,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: fonts.mono,
                }}
              >
                <span
                  style={{
                    fontSize: 32,
                    fontWeight: "bold",
                    color:
                      val < 0
                        ? "#FF6B6B"
                        : frame >= 776 && (idx === 2 || idx === 3)
                        ? theme.good
                        : theme.chalkText,
                  }}
                >
                  {val}
                </span>
                <span style={{ fontSize: 16, color: theme.chalkDim }}>[{idx}]</span>
              </div>
            ))}
          </div>

          {/* Beat 08 (F776+): Subarray Sum Condition Callout */}
          {frame >= 776 && frame < 979 && (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 16,
                fontFamily: fonts.mono,
                fontSize: 24,
                color: theme.good,
                backgroundColor: "rgba(60, 229, 167, 0.12)",
                padding: "10px 28px",
                borderRadius: 14,
                border: `1.5px dashed ${theme.good}`,
              }}
            >
              <span>Subarray [2, 1]: 2 + 1 = 3 == k</span>
              <span style={{ fontWeight: "bold" }}>[✓ MATCH]</span>
            </div>
          )}

          {/* Beat 08b (F979+): Negative Numbers Alert & Sliding Window Rejection */}
          {frame >= 979 && (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 12,
                backgroundColor: "rgba(255, 107, 107, 0.12)",
                padding: "16px 36px",
                borderRadius: 16,
                border: "2px solid #FF6B6B",
                opacity: interpolate(frame, [979, 1000], [0, 1], {
                  extrapolateLeft: "clamp",
                  extrapolateRight: "clamp",
                  easing: EASE,
                }),
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <span style={{ fontSize: 26 }}>⚠️</span>
                <span
                  style={{
                    fontFamily: fonts.sans,
                    fontSize: 22,
                    fontWeight: "bold",
                    color: "#FF6B6B",
                    letterSpacing: 1.5,
                  }}
                >
                  CONTAINS NEGATIVE NUMBERS: -1, -2
                </span>
              </div>

              <div
                style={{
                  fontFamily: fonts.mono,
                  fontSize: 20,
                  color: theme.chalkDim,
                  textDecoration: "line-through",
                  textDecorationColor: "#FF6B6B",
                }}
              >
                Monotonic Sliding Window (Shrink when Sum &gt; k) fails!
              </div>
            </div>
          )}
        </div>
      )}

      {/* Word-Synchronized Captions in Safe Zone (Y: 960–1040) */}
      <Captions words={captionWords} />
    </div>
  );
};
