/**
 * Scene06OptimalIdea.tsx — Scene 06 · Method 2 · Optimal Idea Conceptual Derivation
 * Next Permutation (LeetCode 31) · Pattern 01 — Arrays & Hashing
 *
 * Implements the complete first-principles conceptual derivation of the 3-step optimal method:
 * - 3,252 frames @ 30 FPS (108.400s) strictly from sync/06-optimal-idea.json
 * - 21 Semantic Anchors strictly mapped from sync/06-optimal-idea.anchors.json
 * - Visual aesthetic matching s03_f1250.png:
 *   * Translucent chalkboard washes (never pitch black)
 *   * RoughBox chalk outlines with seeds
 *   * RoughLine chalk dividers
 *   * Caveat handwritten cursive titles (fonts.display)
 *   * Tracked-out monospace eyebrows (fonts.mono)
 *   * Right status pill badges on cards
 * - Zero collision law and vertical canvas harmony:
 *   * ArrayTrack clearance: 65px between bottom pointer lane and card top border
 *   * Vertical budget filled harmoniously (Y: 165..780), leaving 200px breathing room above captions (Y: 980)
 *   * No empty bottom voids
 * - Pedagogical purity: Master array [2, 1, 5, 4, 4, 3, 0] values remain untouched conceptually
 * - Complete 3-Step Blueprint: Pivot (i) ➔ Successor (j) & Swap ➔ Reverse Suffix
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
import { RoughBox } from "../../../../kit/components/RoughBox";
import { RoughLine } from "../../../../kit/components/RoughLine";
import { Captions, CaptionWord } from "../../../../kit/components/Captions";
import { ArrayTrackV2, ArrayElementItem } from "../../../../kit/components/array/ArrayTrackV2";
import syncData from "../sync/06-optimal-idea.json";

// ---------------------------------------------------------------------------
// Word-level Caption Timings (from sync/06-optimal-idea.json)
// ---------------------------------------------------------------------------
const captionWords: CaptionWord[] = (syncData.words || []).map((w: any) => ({
  word: w.word,
  start: w.start_ms / 1000,
  end: w.end_ms / 1000,
}));

// Master array target values for Q12: [2, 1, 5, 4, 4, 3, 0]
const MASTER_VALUES = [2, 1, 5, 4, 4, 3, 0];

/**
 * Authentic RoughCard with translucent chalkboard wash
 * Matching s03_f1250.png visual standard
 */
const RoughCard: React.FC<{
  width: number;
  height: number;
  stroke?: string;
  strokeWidth?: number;
  seed?: number;
  bg?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
}> = ({
  width,
  height,
  stroke = theme.chalkText,
  strokeWidth = 2.5,
  seed = 1,
  bg = "rgba(18, 46, 36, 0.62)",
  style,
  children,
}) => {
  return (
    <div
      style={{
        position: "relative",
        width,
        height,
        borderRadius: 14,
        backgroundColor: bg,
        boxShadow: "0 10px 30px rgba(0, 0, 0, 0.35)",
        overflow: "hidden",
        ...style,
      }}
    >
      {/* Hand-drawn chalk border via RoughBox */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          zIndex: 1,
        }}
      >
        <RoughBox
          width={width}
          height={height}
          stroke={stroke}
          strokeWidth={strokeWidth}
          seed={seed}
        />
      </div>

      {/* Children content on top */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          width: "100%",
          height: "100%",
        }}
      >
        {children}
      </div>
    </div>
  );
};

/**
 * Authentic RoughLine chalk divider
 */
const ChalkDivider: React.FC<{
  width?: number;
  stroke?: string;
  strokeWidth?: number;
  seed?: number;
}> = ({
  width = 770,
  stroke = "rgba(255, 255, 255, 0.25)",
  strokeWidth = 2,
  seed = 1,
}) => (
  <div style={{ width, height: 10, margin: "2px 0" }}>
    <RoughLine
      width={width}
      height={10}
      shape={{ kind: "line", x1: 0, y1: 5, x2: width, y2: 5 }}
      stroke={stroke}
      strokeWidth={strokeWidth}
      seed={seed}
    />
  </div>
);

export const Scene06OptimalIdea: React.FC = () => {
  const frame = useCurrentFrame();

  // =========================================================================
  // CAMERA ENGINE (Subtle cinematic punch-in during key derivation moments)
  // =========================================================================
  const { camScale, camY }: { camScale: number; camY: number } = useMemo(() => {
    // S06_WHY & S06_SUFFIX_MAX punch-in (F281..F686)
    if (frame >= 281 && frame < 686) {
      const p = interpolate(frame, [281, 320], [0, 1], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
        easing: EASE,
      });
      return { camScale: 1 + 0.02 * p, camY: -5 * p };
    }
    // S06_RIGHT_FIRST_SMALLEST mathematical proof (F1491..F1785)
    if (frame >= 1491 && frame < 1785) {
      const p = interpolate(frame, [1491, 1530], [0, 1], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
        easing: EASE,
      });
      return { camScale: 1 + 0.025 * p, camY: -8 * p };
    }
    // S06_REVERSE_PROOF (F2341..F2591)
    if (frame >= 2341 && frame < 2591) {
      const p = interpolate(frame, [2341, 2380], [0, 1], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
        easing: EASE,
      });
      return { camScale: 1 + 0.02 * p, camY: -6 * p };
    }
    // S06_REASON_SUMMARY master synthesis (F2741..F3128)
    if (frame >= 2741 && frame < 3128) {
      const p = interpolate(frame, [2741, 2780], [0, 1], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
        easing: EASE,
      });
      return { camScale: 1 + 0.015 * p, camY: -4 * p };
    }
    return { camScale: 1, camY: 0 };
  }, [frame]);

  // =========================================================================
  // MASTER ARRAY ELEMENTS FOR CONCEPTUAL DEMONSTRATION
  // =========================================================================
  const masterArrayElements: ArrayElementItem[] = useMemo(() => {
    return MASTER_VALUES.map((val, idx) => {
      const isPivot = idx === 1;
      const isSuffix = idx >= 2;
      const isSuccessor = idx === 5; // conceptual successor nums[5]=3 > 1

      let slotState: "default" | "current" | "confirmed" | "query" | "rejected" = "default";
      let valueState: "default" | "current" | "confirmed" | "query" | "rejected" = "default";

      if (frame >= 58 && frame < 281) {
        // Highlighting pair (i, i+1) -> slots 1 and 2
        if (idx === 1 || idx === 2) {
          slotState = "query";
          valueState = "query";
        }
      } else if (frame >= 308 && frame < 905) {
        // Suffix highlighted
        if (isSuffix) {
          slotState = "confirmed";
          valueState = "confirmed";
        }
      } else if (frame >= 905 && frame < 1240) {
        // Pivot identified
        if (isPivot) {
          slotState = "current";
          valueState = "current";
        } else if (isSuffix) {
          slotState = "confirmed";
          valueState = "confirmed";
        }
      } else if (frame >= 1240 && frame < 1785) {
        // Successor search
        if (isPivot) {
          slotState = "current";
          valueState = "current";
        } else if (isSuccessor && frame >= 1491) {
          slotState = "query";
          valueState = "query";
        } else if (isSuffix) {
          slotState = "confirmed";
          valueState = "confirmed";
        }
      } else if (frame >= 1785 && frame < 2086) {
        // Post-swap state (in conceptual array)
        if (isPivot || isSuccessor) {
          slotState = "current";
          valueState = "current";
        } else if (isSuffix) {
          slotState = "confirmed";
          valueState = "confirmed";
        }
      }

      return {
        value: val,
        slotState,
        valueState,
      };
    });
  }, [frame]);

  // Array pointers configuration (placed at bottom)
  const arrayPointers = useMemo(() => {
    // S06_START_RIGHT (F0..F58)
    if (frame < 58) {
      return [
        {
          id: "ptr-start-right",
          index: 6,
          label: "START RIGHT",
          color: theme.accent,
          placement: "bottom" as const,
        },
      ];
    }
    // S06_FIND_I (F58..F281)
    if (frame >= 58 && frame < 281) {
      return [
        {
          id: "ptr-i",
          index: 1,
          label: "i",
          color: theme.pivot,
          placement: "bottom" as const,
        },
        {
          id: "ptr-i-plus-1",
          index: 2,
          label: "i + 1",
          color: theme.good,
          placement: "bottom" as const,
        },
      ];
    }
    // S06_PIVOT_CONCEPT (F905..F1240)
    if (frame >= 905 && frame < 1240) {
      return [
        {
          id: "ptr-pivot",
          index: 1,
          label: "pivot",
          color: theme.pivot,
          placement: "bottom" as const,
        },
      ];
    }
    // S06_SEARCH_RIGHT_AGAIN & S06_STRICT_GREATER (F1240..F1785)
    if (frame >= 1240 && frame < 1785) {
      return [
        {
          id: "ptr-pivot",
          index: 1,
          label: "pivot",
          color: theme.pivot,
          placement: "bottom" as const,
        },
        {
          id: "ptr-j",
          index: 5,
          label: "j",
          color: theme.good,
          placement: "bottom" as const,
        },
      ];
    }
    return undefined;
  }, [frame]);

  // Dynamic Subtitle Text
  const dynamicSubtitle = useMemo(() => {
    if (frame < 1056) {
      return "STEP 1 · FIND THE PIVOT (FIRST DECREASE FROM RIGHT)";
    }
    if (frame < 2086) {
      return "STEP 2 · FIND SUCCESSOR (MINIMAL VALUE > PIVOT) & SWAP";
    }
    if (frame < 2741) {
      return "STEP 3 · MINIMIZE SUFFIX VIA IN-PLACE O(K) REVERSAL";
    }
    if (frame < 3128) {
      return "COMPLETE 3-STEP OPTIMAL BLUEPRINT · REASONING SUMMARY";
    }
    return "READY FOR EXECUTION · MASTER TESTCASE [2, 1, 5, 4, 4, 3, 0]";
  }, [frame]);

  return (
    <div
      style={{
        width: 1920,
        height: 1080,
        position: "relative",
        overflow: "hidden",
        backgroundColor: theme.boardBg,
        fontFamily: fonts.sans,
      }}
    >
      {/* Authentic Chalkboard Background & Atmosphere */}
      <ChalkboardBackground />
      <ChalkFilters />

      {/* Voiceover Track */}
      <Audio src={staticFile("audio/012/06-optimal-idea.mp3")} />

      {/* ===================================================================== */}
      {/* TOP HEADER BAR: Compact, Authoritative Course Header Strip (Y: 36..80)*/}
      {/* Matching s03_f1250.png Header Layout                                  */}
      {/* ===================================================================== */}
      <div
        style={{
          position: "absolute",
          top: 36,
          left: 80,
          right: 80,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          zIndex: 50,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div
            style={{
              padding: "6px 16px",
              borderRadius: 6,
              border: `1.5px solid ${theme.cardBorder}`,
              backgroundColor: "rgba(248, 246, 240, 0.05)",
              fontFamily: fonts.mono,
              fontSize: 14,
              fontWeight: 700,
              color: theme.chalkText,
              letterSpacing: "0.08em",
            }}
          >
            01 · ARRAYS & HASHING · LC 31
          </div>
          <div
            style={{
              padding: "6px 14px",
              borderRadius: 6,
              border: `1.5px solid ${theme.good}`,
              backgroundColor: "rgba(60, 229, 167, 0.1)",
              fontFamily: fonts.mono,
              fontSize: 13,
              fontWeight: 800,
              color: theme.good,
              letterSpacing: "0.08em",
            }}
          >
            MEDIUM
          </div>
        </div>

        {/* Center Handwritten Title */}
        <div
          style={{
            fontFamily: fonts.display,
            fontSize: 28,
            fontWeight: 700,
            color: theme.chalkText,
            letterSpacing: "0.04em",
          }}
        >
          Next Permutation
        </div>

        {/* Right Status Badge */}
        <div
          style={{
            padding: "6px 16px",
            borderRadius: 6,
            border: `2px solid ${theme.pivot}`,
            backgroundColor: "rgba(255, 209, 102, 0.15)",
            fontFamily: fonts.mono,
            fontSize: 14,
            fontWeight: 800,
            color: theme.pivot,
            letterSpacing: "0.08em",
          }}
        >
          APPROACH 2 · OPTIMAL IDEA
        </div>
      </div>

      {/* Dynamic Subtitle Eyebrow (Y: 96..128) */}
      <div
        style={{
          position: "absolute",
          top: 96,
          left: 80,
          right: 80,
          display: "flex",
          alignItems: "center",
          gap: 12,
          zIndex: 45,
        }}
      >
        <span
          style={{
            fontFamily: fonts.mono,
            fontSize: 15,
            fontWeight: 800,
            color: theme.pivot,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
          }}
        >
          {dynamicSubtitle}
        </span>
        <div
          style={{
            flex: 1,
            height: 1,
            backgroundColor: "rgba(255, 255, 255, 0.15)",
          }}
        />
      </div>

      {/* ===================================================================== */}
      {/* MAIN CENTER-STAGE HERO ZONE (Y: 145..785, height 640px)               */}
      {/* ===================================================================== */}
      <div
        style={{
          position: "absolute",
          top: 145,
          left: 80,
          right: 80,
          height: 640,
          transform: `scale(${camScale}) translateY(${camY}px)`,
          transformOrigin: "center top",
          zIndex: 20,
        }}
      >
        {/* ------------------------------------------------------------------- */}
        {/* ARRAY TRACK (Visible in Phases 1 & 2: F0..F2086, and Handoff F3128+) */}
        {/* Placed at top: 25 in P1/2; top: 160 in P5 (screen Y: 305)           */}
        {/* ------------------------------------------------------------------- */}
        {(frame < 2086 || frame >= 3128) && (
          <div
            style={{
              position: "absolute",
              top: frame >= 3128 ? 160 : 15,
              left: 0,
              right: 0,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              transition: "all 0.5s ease",
            }}
          >
            {/* Array Track Header Label */}
            <div
              style={{
                fontFamily: fonts.mono,
                fontSize: 14,
                fontWeight: 700,
                color: "rgba(255, 255, 255, 0.6)",
                letterSpacing: "0.08em",
                marginBottom: 12,
              }}
            >
              {frame >= 3128
                ? "MASTER ARRAY INPUT · READY FOR EXECUTION TRACE"
                : "CONCEPTUAL EXPLORATION TRACK · nums[]"}
            </div>

            {/* ArrayTrackV2 Component */}
            <ArrayTrackV2
              elements={masterArrayElements}
              slotWidth={frame >= 3128 ? 115 : 100}
              slotHeight={frame >= 3128 ? 105 : 90}
              gap={16}
              maxWidth={frame >= 3128 ? 980 : 900}
              showIndices={true}
              indexPlacement="top"
              pointers={frame >= 3128 ? undefined : arrayPointers}
              pointerPlacement="bottom"
            />
          </div>
        )}

        {/* ------------------------------------------------------------------- */}
        {/* PHASE 1 HERO CARDS (F0..F1056): STEP 1 · FIND THE PIVOT             */}
        {/* Placed at top: 270 (65px clearance below bottom pointer lane)       */}
        {/* Height: 350px (ends at top: 620px, screen Y: 765px, >210px above captions) */}
        {/* ------------------------------------------------------------------- */}
        {frame < 1056 && (
          <div
            style={{
              position: "absolute",
              top: 285,
              left: 0,
              right: 0,
              display: "flex",
              justifyContent: "center",
            }}
          >
            {/* S06_START_RIGHT & S06_FIND_I & S06_WHY (F0..F308) */}
            {frame < 308 && (
              <RoughCard
                width={1120}
                height={340}
                stroke={frame >= 281 ? theme.accent : theme.pivot}
                seed={12}
                bg="rgba(10, 48, 42, 0.68)"
              >
                <div style={{ padding: "24px 32px" }}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                      <span
                        style={{
                          fontFamily: fonts.mono,
                          fontSize: 13,
                          fontWeight: 800,
                          color: theme.pivot,
                          padding: "4px 12px",
                          borderRadius: 4,
                          backgroundColor: "rgba(255, 209, 102, 0.15)",
                          border: `1px solid ${theme.pivot}`,
                        }}
                      >
                        STEP 1 · PIVOT SCAN
                      </span>
                      <span
                        style={{
                          fontFamily: fonts.display,
                          fontSize: 32,
                          color: theme.chalkText,
                        }}
                      >
                        Scan Right-to-Left for First Decrease
                      </span>
                    </div>
                    <span
                      style={{
                        fontFamily: fonts.mono,
                        fontSize: 15,
                        fontWeight: 800,
                        color: theme.good,
                        padding: "6px 14px",
                        borderRadius: 20,
                        backgroundColor: "rgba(60, 229, 167, 0.12)",
                        border: `1.5px solid ${theme.good}`,
                      }}
                    >
                      nums[i] &lt; nums[i+1]
                    </span>
                  </div>

                  <ChalkDivider width={1056} seed={3} />

                  <div
                    style={{
                      marginTop: 22,
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      gap: 24,
                    }}
                  >
                    <div style={{ flex: 1 }}>
                      <p
                        style={{
                          fontFamily: fonts.sans,
                          fontSize: 19,
                          color: "rgba(255, 255, 255, 0.9)",
                          lineHeight: 1.55,
                          margin: "0 0 16px 0",
                        }}
                      >
                        Start at the rightmost index and inspect adjacent pairs moving backwards
                        until we find the first index{" "}
                        <span style={{ color: theme.pivot, fontWeight: 800 }}>i</span> where
                        the value strictly decreases:
                      </p>
                      <div
                        style={{
                          display: "inline-block",
                          padding: "8px 18px",
                          borderRadius: 8,
                          backgroundColor: "rgba(60, 229, 167, 0.1)",
                          border: `1.5px solid ${theme.good}`,
                          fontFamily: fonts.mono,
                          fontSize: 18,
                          fontWeight: 800,
                          color: theme.good,
                        }}
                      >
                        nums[i] &lt; nums[i+1]
                      </div>
                    </div>

                    {/* S06_WHY Callout Stamp */}
                    {frame >= 281 && (
                      <div
                        style={{
                          padding: "16px 28px",
                          borderRadius: 12,
                          backgroundColor: "rgba(255, 107, 107, 0.18)",
                          border: `2px solid ${theme.accent}`,
                          textAlign: "center",
                          transform: "rotate(-2deg)",
                          boxShadow: "0 6px 20px rgba(0, 0, 0, 0.3)",
                        }}
                      >
                        <div
                          style={{
                            fontFamily: fonts.display,
                            fontSize: 38,
                            fontWeight: 700,
                            color: theme.accent,
                          }}
                        >
                          Why this condition?
                        </div>
                        <div
                          style={{
                            fontFamily: fonts.mono,
                            fontSize: 12,
                            color: theme.chalkText,
                            marginTop: 4,
                            letterSpacing: "0.08em",
                          }}
                        >
                          EXPLORING THE SUFFIX STRUCTURE
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </RoughCard>
            )}

            {/* S06_SUFFIX & S06_SUFFIX_MAX & S06_CANT_SUFFIX (F308..F905) */}
            {frame >= 308 && frame < 905 && (
              <RoughCard
                width={1160}
                height={340}
                stroke={frame >= 686 ? theme.accent : theme.good}
                seed={18}
                bg="rgba(14, 46, 38, 0.72)"
              >
                <div style={{ padding: "22px 32px" }}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                      <span
                        style={{
                          fontFamily: fonts.mono,
                          fontSize: 13,
                          fontWeight: 800,
                          color: theme.good,
                          padding: "4px 12px",
                          borderRadius: 4,
                          backgroundColor: "rgba(60, 229, 167, 0.15)",
                          border: `1px solid ${theme.good}`,
                        }}
                      >
                        STRUCTURAL INVARIANT
                      </span>
                      <span
                        style={{
                          fontFamily: fonts.display,
                          fontSize: 30,
                          color: theme.chalkText,
                        }}
                      >
                        The Non-Increasing Suffix is Maximal
                      </span>
                    </div>
                    <span
                      style={{
                        fontFamily: fonts.mono,
                        fontSize: 14,
                        fontWeight: 800,
                        color: theme.pivot,
                        padding: "6px 14px",
                        borderRadius: 20,
                        backgroundColor: "rgba(255, 209, 102, 0.12)",
                        border: `1.5px solid ${theme.pivot}`,
                      }}
                    >
                      {frame >= 686 ? "SUFFIX CANNOT GROW" : "ALREADY LARGEST POSSIBLE"}
                    </span>
                  </div>

                  <ChalkDivider width={1096} seed={7} />

                  <div
                    style={{
                      marginTop: 18,
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      gap: 24,
                    }}
                  >
                    {/* Left explanation block */}
                    <div
                      style={{
                        backgroundColor: "rgba(255, 255, 255, 0.04)",
                        padding: "18px 22px",
                        borderRadius: 10,
                        border: "1px solid rgba(255, 255, 255, 0.1)",
                      }}
                    >
                      <div
                        style={{
                          fontFamily: fonts.mono,
                          fontSize: 14,
                          fontWeight: 700,
                          color: theme.good,
                          marginBottom: 8,
                        }}
                      >
                        1. PROPERTY OF SUFFIX [i+1 .. end]
                      </div>
                      <p
                        style={{
                          fontFamily: fonts.sans,
                          fontSize: 16,
                          color: "rgba(255, 255, 255, 0.88)",
                          lineHeight: 1.5,
                          margin: 0,
                        }}
                      >
                        Because index <code style={{ color: theme.pivot }}>i</code> was the first place where{" "}
                        <code>nums[i] &lt; nums[i+1]</code>, everything to the right is{" "}
                        <strong style={{ color: theme.good }}>
                          non-increasing (descending)
                        </strong>
                        : <code style={{ color: theme.good }}>5 ≥ 4 ≥ 4 ≥ 3 ≥ 0</code>.
                      </p>
                    </div>

                    {/* Right explanation / rejection block */}
                    <div
                      style={{
                        backgroundColor:
                          frame >= 686
                            ? "rgba(255, 107, 107, 0.12)"
                            : "rgba(255, 209, 102, 0.08)",
                        padding: "18px 22px",
                        borderRadius: 10,
                        border: `1px solid ${
                          frame >= 686 ? theme.accent : "rgba(255, 209, 102, 0.2)"
                        }`,
                      }}
                    >
                      <div
                        style={{
                          fontFamily: fonts.mono,
                          fontSize: 14,
                          fontWeight: 700,
                          color: frame >= 686 ? theme.accent : theme.pivot,
                          marginBottom: 8,
                        }}
                      >
                        {frame >= 686
                          ? "2. REJECTED: REARRANGE SUFFIX ALONE"
                          : "2. MAXIMAL ARRANGEMENT"}
                      </div>
                      <p
                        style={{
                          fontFamily: fonts.sans,
                          fontSize: 16,
                          color: "rgba(255, 255, 255, 0.88)",
                          lineHeight: 1.5,
                          margin: 0,
                        }}
                      >
                        {frame >= 686 ? (
                          <span style={{ color: theme.accent, fontWeight: 700 }}>
                            ✗ Dead end! A descending sequence is already at its absolute
                            maximum. No internal rearrangement can produce a larger
                            number.
                          </span>
                        ) : (
                          <span>
                            Digits in descending order form the highest possible
                            numerical value with those digits. It cannot be increased
                            internally!
                          </span>
                        )}
                      </p>
                    </div>
                  </div>
                </div>
              </RoughCard>
            )}

            {/* S06_PIVOT_CONCEPT (F905..F1056) */}
            {frame >= 905 && (
              <RoughCard
                width={1120}
                height={340}
                stroke={theme.pivot}
                seed={25}
                bg="rgba(42, 38, 12, 0.68)"
              >
                <div style={{ padding: "24px 32px" }}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                      <span
                        style={{
                          fontFamily: fonts.mono,
                          fontSize: 13,
                          fontWeight: 800,
                          color: theme.pivot,
                          padding: "4px 12px",
                          borderRadius: 4,
                          backgroundColor: "rgba(255, 209, 102, 0.2)",
                          border: `1.5px solid ${theme.pivot}`,
                        }}
                      >
                        KEY BREAKTHROUGH
                      </span>
                      <span
                        style={{
                          fontFamily: fonts.display,
                          fontSize: 32,
                          color: theme.chalkText,
                        }}
                      >
                        Index i is the Pivot!
                      </span>
                    </div>
                    <span
                      style={{
                        fontFamily: fonts.mono,
                        fontSize: 15,
                        fontWeight: 800,
                        color: theme.pivot,
                        padding: "6px 16px",
                        borderRadius: 20,
                        backgroundColor: "rgba(255, 209, 102, 0.18)",
                        border: `1.5px solid ${theme.pivot}`,
                      }}
                    >
                      ★ PIVOT = INDEX i
                    </span>
                  </div>

                  <ChalkDivider width={1056} seed={9} stroke={theme.pivot} />

                  <div style={{ marginTop: 22 }}>
                    <p
                      style={{
                        fontFamily: fonts.sans,
                        fontSize: 19,
                        color: "rgba(255, 255, 255, 0.92)",
                        lineHeight: 1.6,
                        margin: "0 0 16px 0",
                      }}
                    >
                      Since the suffix <code style={{ color: theme.good }}>[i+1 .. end]</code> cannot
                      grow any further, the{" "}
                      <strong style={{ color: theme.pivot }}>
                        first place where we can increase the permutation
                      </strong>{" "}
                      is index <code style={{ color: theme.pivot }}>i</code>. We call this our{" "}
                      <strong style={{ color: theme.pivot }}>PIVOT</strong>!
                    </p>
                    <div
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 10,
                        padding: "8px 18px",
                        borderRadius: 8,
                        backgroundColor: "rgba(255, 209, 102, 0.15)",
                        border: `1.5px solid ${theme.pivot}`,
                        fontFamily: fonts.mono,
                        fontSize: 15,
                        color: theme.pivot,
                        fontWeight: 700,
                      }}
                    >
                      ✓ Rightmost digit capable of taking a larger value
                    </div>
                  </div>
                </div>
              </RoughCard>
            )}
          </div>
        )}

        {/* ------------------------------------------------------------------- */}
        {/* PHASE 2 HERO CARDS (F1056..F2086): STEP 2 · FIND SUCCESSOR & SWAP   */}
        {/* Placed at top: 270 (65px clearance below bottom pointer lane)       */}
        {/* ------------------------------------------------------------------- */}
        {frame >= 1056 && frame < 2086 && (
          <div
            style={{
              position: "absolute",
              top: 285,
              left: 0,
              right: 0,
              display: "flex",
              justifyContent: "center",
            }}
          >
            {/* S06_SMALLEST_INCREASE & S06_SEARCH_RIGHT_AGAIN & S06_STRICT_GREATER (F1056..F1491) */}
            {frame < 1491 && (
              <RoughCard
                width={1120}
                height={340}
                stroke={theme.pivot}
                seed={32}
                bg="rgba(10, 48, 42, 0.68)"
              >
                <div style={{ padding: "24px 32px" }}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                      <span
                        style={{
                          fontFamily: fonts.mono,
                          fontSize: 13,
                          fontWeight: 800,
                          color: theme.pivot,
                          padding: "4px 12px",
                          borderRadius: 4,
                          backgroundColor: "rgba(255, 209, 102, 0.15)",
                          border: `1px solid ${theme.pivot}`,
                        }}
                      >
                        STEP 2 · SUCCESSOR SEARCH
                      </span>
                      <span
                        style={{
                          fontFamily: fonts.display,
                          fontSize: 30,
                          color: theme.chalkText,
                        }}
                      >
                        Minimize the Increase (Δ)
                      </span>
                    </div>
                    <span
                      style={{
                        fontFamily: fonts.mono,
                        fontSize: 15,
                        fontWeight: 800,
                        color: theme.good,
                        padding: "6px 14px",
                        borderRadius: 20,
                        backgroundColor: "rgba(60, 229, 167, 0.12)",
                        border: `1.5px solid ${theme.good}`,
                      }}
                    >
                      nums[j] &gt; nums[i]
                    </span>
                  </div>

                  <ChalkDivider width={1056} seed={11} />

                  <div style={{ marginTop: 22 }}>
                    <p
                      style={{
                        fontFamily: fonts.sans,
                        fontSize: 18,
                        color: "rgba(255, 255, 255, 0.9)",
                        lineHeight: 1.6,
                        margin: "0 0 16px 0",
                      }}
                    >
                      We need to increase the pivot, but only by the{" "}
                      <strong style={{ color: theme.pivot }}>smallest possible amount</strong>.
                      So we search from the right side again to find the first element{" "}
                      <code style={{ color: theme.good, fontWeight: 800 }}>j</code> that is{" "}
                      <strong style={{ color: theme.good }}>strictly greater than the pivot</strong>:
                    </p>
                    <div
                      style={{
                        display: "inline-block",
                        padding: "10px 20px",
                        borderRadius: 8,
                        backgroundColor: "rgba(255, 209, 102, 0.12)",
                        border: `1.5px solid ${theme.pivot}`,
                        fontFamily: fonts.mono,
                        fontSize: 18,
                        fontWeight: 800,
                        color: theme.pivot,
                      }}
                    >
                      nums[j] &gt; nums[i] &nbsp; (Strictly Greater)
                    </div>
                  </div>
                </div>
              </RoughCard>
            )}

            {/* S06_RIGHT_FIRST_SMALLEST Proof Card (F1491..F1785) */}
            {frame >= 1491 && frame < 1785 && (
              <RoughCard
                width={1160}
                height={340}
                stroke={theme.good}
                seed={45}
                bg="rgba(14, 46, 38, 0.72)"
              >
                <div style={{ padding: "22px 32px" }}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                      <span
                        style={{
                          fontFamily: fonts.mono,
                          fontSize: 13,
                          fontWeight: 800,
                          color: theme.good,
                          padding: "4px 12px",
                          borderRadius: 4,
                          backgroundColor: "rgba(60, 229, 167, 0.15)",
                          border: `1px solid ${theme.good}`,
                        }}
                      >
                        MATHEMATICAL PROOF
                      </span>
                      <span
                        style={{
                          fontFamily: fonts.display,
                          fontSize: 30,
                          color: theme.chalkText,
                        }}
                      >
                        Why the First Greater from Right is Minimal?
                      </span>
                    </div>
                    <span
                      style={{
                        fontFamily: fonts.mono,
                        fontSize: 14,
                        fontWeight: 800,
                        color: theme.good,
                        padding: "6px 14px",
                        borderRadius: 20,
                        backgroundColor: "rgba(60, 229, 167, 0.12)",
                        border: `1.5px solid ${theme.good}`,
                      }}
                    >
                      ✓ MINIMAL SUCCESSOR
                    </span>
                  </div>

                  <ChalkDivider width={1096} seed={15} />

                  <div
                    style={{
                      marginTop: 18,
                      display: "flex",
                      flexDirection: "column",
                      gap: 14,
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                      <span
                        style={{
                          fontFamily: fonts.mono,
                          fontSize: 14,
                          fontWeight: 900,
                          color: theme.pivot,
                          padding: "4px 10px",
                          borderRadius: 6,
                          backgroundColor: "rgba(255, 209, 102, 0.18)",
                        }}
                      >
                        1
                      </span>
                      <span style={{ fontSize: 17, color: "rgba(255, 255, 255, 0.9)" }}>
                        The suffix is non-increasing: elements on the far right are the{" "}
                        <strong style={{ color: theme.good }}>smallest</strong> values in the suffix.
                      </span>
                    </div>

                    <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                      <span
                        style={{
                          fontFamily: fonts.mono,
                          fontSize: 14,
                          fontWeight: 900,
                          color: theme.pivot,
                          padding: "4px 10px",
                          borderRadius: 6,
                          backgroundColor: "rgba(255, 209, 102, 0.18)",
                        }}
                      >
                        2
                      </span>
                      <span style={{ fontSize: 17, color: "rgba(255, 255, 255, 0.9)" }}>
                        Scanning right-to-left inspects suffix elements in{" "}
                        <strong style={{ color: theme.pivot }}>ascending order</strong>!
                      </span>
                    </div>

                    <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                      <span
                        style={{
                          fontFamily: fonts.mono,
                          fontSize: 14,
                          fontWeight: 900,
                          color: theme.pivot,
                          padding: "4px 10px",
                          borderRadius: 6,
                          backgroundColor: "rgba(255, 209, 102, 0.18)",
                        }}
                      >
                        3
                      </span>
                      <span style={{ fontSize: 17, color: "rgba(255, 255, 255, 0.9)" }}>
                        Therefore, the <em>first</em> element strictly greater than pivot is{" "}
                        <strong style={{ color: theme.good }}>
                          guaranteed to be the smallest valid successor
                        </strong>
                        !
                      </span>
                    </div>
                  </div>
                </div>
              </RoughCard>
            )}

            {/* S06_SWAP_CONCEPT & S06_NOW_LARGER & S06_SUFFIX_STILL_NONINC (F1785..F2086) */}
            {frame >= 1785 && (
              <RoughCard
                width={1160}
                height={340}
                stroke={theme.good}
                seed={52}
                bg="rgba(10, 48, 42, 0.68)"
              >
                <div style={{ padding: "24px 32px" }}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                      <span
                        style={{
                          fontFamily: fonts.mono,
                          fontSize: 13,
                          fontWeight: 800,
                          color: theme.good,
                          padding: "4px 12px",
                          borderRadius: 4,
                          backgroundColor: "rgba(60, 229, 167, 0.15)",
                          border: `1px solid ${theme.good}`,
                        }}
                      >
                        SWAP EXECUTED
                      </span>
                      <span
                        style={{
                          fontFamily: fonts.display,
                          fontSize: 30,
                          color: theme.chalkText,
                        }}
                      >
                        Swap nums[i] ↔ nums[j]
                      </span>
                    </div>
                    <span
                      style={{
                        fontFamily: fonts.mono,
                        fontSize: 14,
                        fontWeight: 800,
                        color: theme.good,
                        padding: "6px 14px",
                        borderRadius: 20,
                        backgroundColor: "rgba(60, 229, 167, 0.12)",
                        border: `1.5px solid ${theme.good}`,
                      }}
                    >
                      {frame >= 1937
                        ? "SUFFIX STILL NON-INCREASING"
                        : "PERMUTATION IS LARGER ✓"}
                    </span>
                  </div>

                  <ChalkDivider width={1096} seed={19} />

                  <div
                    style={{
                      marginTop: 18,
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      gap: 24,
                    }}
                  >
                    <div
                      style={{
                        backgroundColor: "rgba(60, 229, 167, 0.08)",
                        padding: "18px 22px",
                        borderRadius: 10,
                        border: `1px solid ${theme.good}`,
                      }}
                    >
                      <div
                        style={{
                          fontFamily: fonts.mono,
                          fontSize: 14,
                          fontWeight: 700,
                          color: theme.good,
                          marginBottom: 8,
                        }}
                      >
                        RESULT OF SWAP
                      </div>
                      <p style={{ fontSize: 16, color: "rgba(255, 255, 255, 0.88)", lineHeight: 1.5, margin: 0 }}>
                        The prefix is now strictly larger by the minimal possible delta:{" "}
                        <strong style={{ color: theme.good }}>
                          NEW PREFIX &gt; OLD PREFIX
                        </strong>
                        .
                      </p>
                    </div>

                    <div
                      style={{
                        backgroundColor: "rgba(255, 209, 102, 0.08)",
                        padding: "18px 22px",
                        borderRadius: 10,
                        border: `1px solid ${theme.pivot}`,
                      }}
                    >
                      <div
                        style={{
                          fontFamily: fonts.mono,
                          fontSize: 14,
                          fontWeight: 700,
                          color: theme.pivot,
                          marginBottom: 8,
                        }}
                      >
                        CRITICAL INVARIANT PRESERVED
                      </div>
                      <p style={{ fontSize: 16, color: "rgba(255, 255, 255, 0.88)", lineHeight: 1.5, margin: 0 }}>
                        Crucially, after swapping with the first element greater than pivot,{" "}
                        <strong style={{ color: theme.pivot }}>
                          the suffix remains non-increasing!
                        </strong>
                      </p>
                    </div>
                  </div>
                </div>
              </RoughCard>
            )}
          </div>
        )}

        {/* ------------------------------------------------------------------- */}
        {/* PHASE 3 HERO CARDS (F2086..F2741): STEP 3 · MINIMIZE SUFFIX VIA REVERSE */}
        {/* Placed at top: 35, height 580px (harmoniously centered)             */}
        {/* ------------------------------------------------------------------- */}
        {frame >= 2086 && frame < 2741 && (
          <div
            style={{
              position: "absolute",
              top: 35,
              left: 0,
              right: 0,
              display: "flex",
              justifyContent: "center",
            }}
          >
            <RoughCard
              width={1240}
              height={560}
              stroke={frame >= 2591 ? theme.accent : theme.pivot}
              seed={61}
              bg="rgba(10, 48, 42, 0.72)"
            >
              <div style={{ padding: "28px 36px" }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                    <span
                      style={{
                        fontFamily: fonts.mono,
                        fontSize: 13,
                        fontWeight: 800,
                        color: theme.pivot,
                        padding: "4px 12px",
                        borderRadius: 4,
                        backgroundColor: "rgba(255, 209, 102, 0.15)",
                        border: `1px solid ${theme.pivot}`,
                      }}
                    >
                      STEP 3 · SUFFIX MINIMIZATION
                    </span>
                    <span
                      style={{
                        fontFamily: fonts.display,
                        fontSize: 34,
                        color: theme.chalkText,
                      }}
                    >
                      Why Reverse Instead of Sort?
                    </span>
                  </div>
                  <span
                    style={{
                      fontFamily: fonts.mono,
                      fontSize: 14,
                      fontWeight: 800,
                      color: frame >= 2666 ? theme.good : theme.accent,
                      padding: "6px 16px",
                      borderRadius: 20,
                      backgroundColor:
                        frame >= 2666
                          ? "rgba(60, 229, 167, 0.15)"
                          : "rgba(255, 107, 107, 0.15)",
                      border: `1.5px solid ${
                        frame >= 2666 ? theme.good : theme.accent
                      }`,
                    }}
                  >
                    {frame >= 2666 ? "O(K) REVERSE IN-PLACE" : "LARGER ≠ VERY NEXT"}
                  </span>
                </div>

                <ChalkDivider width={1168} seed={23} />

                {/* S06_VERY_NEXT & S06_SUFFIX_MIN Explanation Banner */}
                <div
                  style={{
                    marginTop: 20,
                    padding: "18px 24px",
                    borderRadius: 12,
                    backgroundColor: "rgba(255, 209, 102, 0.08)",
                    border: `1px solid ${theme.pivot}`,
                  }}
                >
                  <div
                    style={{
                      fontFamily: fonts.mono,
                      fontSize: 14,
                      color: theme.pivot,
                      fontWeight: 800,
                      marginBottom: 6,
                    }}
                  >
                    THE GOAL: THE VERY NEXT LEXICOGRAPHICAL PERMUTATION
                  </div>
                  <p
                    style={{
                      margin: 0,
                      fontSize: 18,
                      color: "rgba(255, 255, 255, 0.92)",
                      lineHeight: 1.55,
                    }}
                  >
                    Swapping gave us a <em>larger</em> permutation. But to make it the{" "}
                    <strong style={{ color: theme.pivot }}>immediate next</strong>{" "}
                    permutation, everything after the pivot must be made as{" "}
                    <strong style={{ color: theme.good }}>small as possible</strong>!
                  </p>
                </div>

                {/* S06_REVERSE_PROOF Visual Reversal Duality */}
                <div
                  style={{
                    marginTop: 22,
                    display: "grid",
                    gridTemplateColumns: "1fr auto 1fr",
                    alignItems: "center",
                    gap: 24,
                    backgroundColor: "rgba(255, 255, 255, 0.04)",
                    padding: "24px 30px",
                    borderRadius: 14,
                    border: "1px solid rgba(255, 255, 255, 0.12)",
                  }}
                >
                  {/* Current Suffix */}
                  <div style={{ textAlign: "center" }}>
                    <div
                      style={{
                        fontFamily: fonts.mono,
                        fontSize: 13,
                        color: theme.accent,
                        fontWeight: 800,
                        letterSpacing: "0.08em",
                      }}
                    >
                      CURRENT SUFFIX (DESCENDING)
                    </div>
                    <div
                      style={{
                        fontFamily: fonts.display,
                        fontSize: 42,
                        color: theme.accent,
                        margin: "6px 0",
                      }}
                    >
                      5 ≥ 4 ≥ 4 ≥ 3 ≥ 0
                    </div>
                    <div style={{ fontSize: 14, color: "rgba(255, 255, 255, 0.65)" }}>
                      Largest Possible Arrangement
                    </div>
                  </div>

                  {/* Transform Arrow */}
                  <div style={{ textAlign: "center", padding: "0 10px" }}>
                    <div
                      style={{
                        fontFamily: fonts.display,
                        fontSize: 38,
                        color: theme.good,
                      }}
                    >
                      REVERSE ➔
                    </div>
                    <div
                      style={{
                        fontFamily: fonts.mono,
                        fontSize: 12,
                        color: theme.good,
                        fontWeight: 800,
                      }}
                    >
                      FLIPS ORDER IN O(K)
                    </div>
                  </div>

                  {/* Minimal Suffix */}
                  <div style={{ textAlign: "center" }}>
                    <div
                      style={{
                        fontFamily: fonts.mono,
                        fontSize: 13,
                        color: theme.good,
                        fontWeight: 800,
                        letterSpacing: "0.08em",
                      }}
                    >
                      REVERSED SUFFIX (ASCENDING)
                    </div>
                    <div
                      style={{
                        fontFamily: fonts.display,
                        fontSize: 42,
                        color: theme.good,
                        margin: "6px 0",
                      }}
                    >
                      0 ≤ 3 ≤ 4 ≤ 4 ≤ 5
                    </div>
                    <div style={{ fontSize: 14, color: "rgba(255, 255, 255, 0.65)" }}>
                      Smallest Possible Arrangement!
                    </div>
                  </div>
                </div>

                {/* Bottom takeaway / sorting eliminated note */}
                <div
                  style={{
                    marginTop: 22,
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                    {frame >= 2591 && (
                      <div
                        style={{
                          padding: "8px 18px",
                          borderRadius: 6,
                          backgroundColor: "rgba(255, 107, 107, 0.15)",
                          border: `1.5px solid ${theme.accent}`,
                          textDecoration: "line-through",
                          color: theme.accent,
                          fontFamily: fonts.mono,
                          fontWeight: 800,
                          fontSize: 15,
                        }}
                      >
                        SORT: O(K log K)
                      </div>
                    )}
                    <span
                      style={{
                        fontFamily: fonts.sans,
                        fontSize: 17,
                        color: "rgba(255, 255, 255, 0.9)",
                      }}
                    >
                      Because the suffix is already descending, reversing it{" "}
                      <strong style={{ color: theme.good }}>guarantees ascending order</strong>{" "}
                      in <strong style={{ color: theme.good }}>O(K) time</strong>!
                    </span>
                  </div>

                  {frame >= 2666 && (
                    <div
                      style={{
                        padding: "8px 20px",
                        borderRadius: 8,
                        backgroundColor: "rgba(60, 229, 167, 0.18)",
                        border: `2px solid ${theme.good}`,
                        color: theme.good,
                        fontFamily: fonts.mono,
                        fontWeight: 800,
                        fontSize: 15,
                      }}
                    >
                      ✓ WE SIMPLY REVERSE IT!
                    </div>
                  )}
                </div>
              </div>
            </RoughCard>
          </div>
        )}

        {/* ------------------------------------------------------------------- */}
        {/* PHASE 4 HERO CARDS (F2741..F3128): COMPLETE 3-STEP SYNTHESIS        */}
        {/* Placed at top: 30, height 580px (full harmonious stage)             */}
        {/* ------------------------------------------------------------------- */}
        {frame >= 2741 && frame < 3128 && (
          <div
            style={{
              position: "absolute",
              top: 30,
              left: 0,
              right: 0,
              display: "flex",
              justifyContent: "center",
            }}
          >
            <RoughCard
              width={1360}
              height={580}
              stroke={theme.pivot}
              seed={77}
              bg="rgba(10, 48, 42, 0.75)"
            >
              <div style={{ padding: "30px 42px" }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                    <span
                      style={{
                        fontFamily: fonts.mono,
                        fontSize: 14,
                        fontWeight: 800,
                        color: theme.pivot,
                        padding: "6px 14px",
                        borderRadius: 6,
                        backgroundColor: "rgba(255, 209, 102, 0.2)",
                        border: `1.5px solid ${theme.pivot}`,
                      }}
                    >
                      SUMMARY BLUEPRINT
                    </span>
                    <span
                      style={{
                        fontFamily: fonts.display,
                        fontSize: 38,
                        color: theme.chalkText,
                      }}
                    >
                      The 3-Step Optimal Method
                    </span>
                  </div>
                  <span
                    style={{
                      fontFamily: fonts.mono,
                      fontSize: 16,
                      fontWeight: 800,
                      color: theme.good,
                      padding: "8px 20px",
                      borderRadius: 24,
                      backgroundColor: "rgba(60, 229, 167, 0.15)",
                      border: `2px solid ${theme.good}`,
                    }}
                  >
                    TIME: O(N) · SPACE: O(1)
                  </span>
                </div>

                <ChalkDivider width={1276} seed={29} stroke={theme.pivot} />

                {/* 3 Interactive Step Rows */}
                <div
                  style={{
                    marginTop: 24,
                    display: "flex",
                    flexDirection: "column",
                    gap: 18,
                  }}
                >
                  {/* Step 1 */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 22,
                      padding: "16px 24px",
                      borderRadius: 12,
                      backgroundColor:
                        frame < 2860
                          ? "rgba(255, 209, 102, 0.22)"
                          : "rgba(255, 255, 255, 0.04)",
                      border: `2px solid ${
                        frame < 2860 ? theme.pivot : "rgba(255, 255, 255, 0.12)"
                      }`,
                    }}
                  >
                    <div
                      style={{
                        width: 44,
                        height: 44,
                        borderRadius: 22,
                        backgroundColor: theme.pivot,
                        color: "#000",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        fontFamily: fonts.mono,
                        fontWeight: 900,
                        fontSize: 20,
                      }}
                    >
                      1
                    </div>
                    <div style={{ flex: 1 }}>
                      <div
                        style={{
                          fontFamily: fonts.mono,
                          fontSize: 17,
                          fontWeight: 800,
                          color: theme.pivot,
                        }}
                      >
                        FIND THE PIVOT (INDEX i)
                      </div>
                      <div
                        style={{
                          fontSize: 17,
                          color: "rgba(255, 255, 255, 0.9)",
                          marginTop: 4,
                        }}
                      >
                        Scan right-to-left for the first index{" "}
                        <code style={{ color: theme.pivot }}>i</code> where{" "}
                        <code>nums[i] &lt; nums[i+1]</code>.{" "}
                        <em>(Rightmost place that can increase)</em>
                      </div>
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 22,
                      padding: "16px 24px",
                      borderRadius: 12,
                      backgroundColor:
                        frame >= 2860 && frame < 2990
                          ? "rgba(255, 209, 102, 0.22)"
                          : "rgba(255, 255, 255, 0.04)",
                      border: `2px solid ${
                        frame >= 2860 && frame < 2990
                          ? theme.pivot
                          : "rgba(255, 255, 255, 0.12)"
                      }`,
                    }}
                  >
                    <div
                      style={{
                        width: 44,
                        height: 44,
                        borderRadius: 22,
                        backgroundColor: theme.pivot,
                        color: "#000",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        fontFamily: fonts.mono,
                        fontWeight: 900,
                        fontSize: 20,
                      }}
                    >
                      2
                    </div>
                    <div style={{ flex: 1 }}>
                      <div
                        style={{
                          fontFamily: fonts.mono,
                          fontSize: 17,
                          fontWeight: 800,
                          color: theme.pivot,
                        }}
                      >
                        FIND SUCCESSOR (INDEX j) & SWAP
                      </div>
                      <div
                        style={{
                          fontSize: 17,
                          color: "rgba(255, 255, 255, 0.9)",
                          marginTop: 4,
                        }}
                      >
                        Scan right-to-left for the first value{" "}
                        <code style={{ color: theme.good }}>nums[j] &gt; nums[i]</code>,
                        then swap them. <em>(Smallest possible increase)</em>
                      </div>
                    </div>
                  </div>

                  {/* Step 3 */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 22,
                      padding: "16px 24px",
                      borderRadius: 12,
                      backgroundColor:
                        frame >= 2990
                          ? "rgba(60, 229, 167, 0.22)"
                          : "rgba(255, 255, 255, 0.04)",
                      border: `2px solid ${
                        frame >= 2990 ? theme.good : "rgba(255, 255, 255, 0.12)"
                      }`,
                    }}
                  >
                    <div
                      style={{
                        width: 44,
                        height: 44,
                        borderRadius: 22,
                        backgroundColor: theme.good,
                        color: "#000",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        fontFamily: fonts.mono,
                        fontWeight: 900,
                        fontSize: 20,
                      }}
                    >
                      3
                    </div>
                    <div style={{ flex: 1 }}>
                      <div
                        style={{
                          fontFamily: fonts.mono,
                          fontSize: 17,
                          fontWeight: 800,
                          color: theme.good,
                        }}
                      >
                        REVERSE THE SUFFIX
                      </div>
                      <div
                        style={{
                          fontSize: 17,
                          color: "rgba(255, 255, 255, 0.9)",
                          marginTop: 4,
                        }}
                      >
                        Reverse everything from index{" "}
                        <code style={{ color: theme.good }}>i + 1</code> to the end.{" "}
                        <em>(Minimizes suffix to ascending order in O(K) time)</em>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </RoughCard>
          </div>
        )}

        {/* ------------------------------------------------------------------- */}
        {/* PHASE 5 HERO (F3128..F3252): S06_EXECUTE · HANDOFF TO SCENE 07     */}
        {/* ------------------------------------------------------------------- */}
        {frame >= 3128 && (
          <div
            style={{
              position: "absolute",
              top: 380,
              left: 0,
              right: 0,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 18,
            }}
          >
            <div
              style={{
                padding: "18px 48px",
                borderRadius: 14,
                backgroundColor: "rgba(60, 229, 167, 0.15)",
                border: `2.5px solid ${theme.good}`,
                textAlign: "center",
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.35)",
              }}
            >
              <div
                style={{
                  fontFamily: fonts.display,
                  fontSize: 38,
                  fontWeight: 700,
                  color: theme.good,
                }}
              >
                Now Let's Execute on Our Master Example!
              </div>
              <div
                style={{
                  fontFamily: fonts.mono,
                  fontSize: 15,
                  color: theme.chalkText,
                  marginTop: 6,
                  letterSpacing: "0.08em",
                }}
              >
                NEXT ──► SCENE 07: STEP-BY-STEP OPTIMAL TRACE
              </div>
            </div>

            {/* 3 Step Pill Summary Preview */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 16,
              }}
            >
              <div
                style={{
                  padding: "8px 18px",
                  borderRadius: 20,
                  backgroundColor: "rgba(255, 209, 102, 0.12)",
                  border: `1.5px solid ${theme.pivot}`,
                  fontFamily: fonts.mono,
                  fontSize: 14,
                  fontWeight: 700,
                  color: theme.pivot,
                }}
              >
                1. Find Pivot (i)
              </div>
              <span style={{ color: "rgba(255, 255, 255, 0.4)", fontSize: 18 }}>➔</span>
              <div
                style={{
                  padding: "8px 18px",
                  borderRadius: 20,
                  backgroundColor: "rgba(255, 209, 102, 0.12)",
                  border: `1.5px solid ${theme.pivot}`,
                  fontFamily: fonts.mono,
                  fontSize: 14,
                  fontWeight: 700,
                  color: theme.pivot,
                }}
              >
                2. Swap with Successor (j)
              </div>
              <span style={{ color: "rgba(255, 255, 255, 0.4)", fontSize: 18 }}>➔</span>
              <div
                style={{
                  padding: "8px 18px",
                  borderRadius: 20,
                  backgroundColor: "rgba(60, 229, 167, 0.12)",
                  border: `1.5px solid ${theme.good}`,
                  fontFamily: fonts.mono,
                  fontSize: 14,
                  fontWeight: 700,
                  color: theme.good,
                }}
              >
                3. Reverse Suffix in O(K)
              </div>
            </div>
          </div>
        )}
      </div>

      {/* ===================================================================== */}
      {/* CAPTIONS: Fixed bottom karaoke display (Y: 980)                       */}
      {/* ===================================================================== */}
      <div
        style={{
          position: "absolute",
          bottom: 30,
          left: 100,
          right: 100,
          height: 70,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 60,
        }}
      >
        <Captions
          words={captionWords}
          fontSize={26}
        />
      </div>
    </div>
  );
};
