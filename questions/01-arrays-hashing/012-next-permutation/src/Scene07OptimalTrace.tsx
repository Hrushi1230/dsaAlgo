/**
 * Scene07OptimalTrace.tsx — Scene 07 · Method 2 · Full Verified Trace
 * Next Permutation (LeetCode 31) · Pattern 01 — Arrays & Hashing
 *
 * Implements the complete, truthful execution trace of the 3-step optimal algorithm
 * on the master testcase [2, 1, 5, 4, 4, 3, 0] without a single skipped or invented state:
 * - 3,520 frames @ 30 FPS (117.320s) strictly from sync/07-optimal-trace.json
 * - 46 Semantic Anchors strictly mapped from sync/07-optimal-trace.anchors.json
 * - Oxford chalkboard visual style (matching s03_f1250.png):
 *   * Translucent chalkboard washes (never pitch-black)
 *   * RoughBox chalk outlines with dynamic seeds
 *   * RoughLine chalk dividers
 *   * Caveat cursive titles (fonts.display)
 *   * Tracked-out monospace eyebrows (fonts.mono)
 *   * Right status pill badges
 * - Zero Collision Law:
 *   * ArrayTrackV2 at top: 15 (bottom pointer lane ends at screen Y: 385)
 *   * Inspection card at top: 255 (screen Y: 400), guaranteeing >= 65px clean clearance
 *   * Breathing room: > 240px above karaoke captions at Y: 980
 * - Array V2 Law: Fixed slot shells; values fly along parabolic trajectories; indices stationary
 * - Truthful Algorithmic Execution:
 *   * Step 1: i=5 (3<0 false), i=4 (4<3 false), i=3 (4<4 duplicate false), i=2 (5<4 false), i=1 (1<5 true!)
 *   * Step 2: j=6 (0>1 false), j=5 (3>1 true!). Swap(1, 5) -> [2, 3, 5, 4, 4, 1, 0]
 *   * Step 3: Reverse [2..6]. Swap(2, 6) -> [2, 3, 0, 4, 4, 1, 5]. Swap(3, 5) -> [2, 3, 0, 1, 4, 4, 5]
 *   * left=right=4 pointers meet, terminate cleanly with no self-swap.
 *   * Final Answer: [2, 3, 0, 1, 4, 4, 5] (Immediate Next Permutation!)
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
import {
  ArrayTrackV2,
  ArrayElementItem,
  ArraySwapConfig,
} from "../../../../kit/components/array/ArrayTrackV2";
import syncData from "../sync/07-optimal-trace.json";

// ---------------------------------------------------------------------------
// Word-level Caption Timings (from sync/07-optimal-trace.json)
// ---------------------------------------------------------------------------
const captionWords: CaptionWord[] = (syncData.words || []).map((w: any) => ({
  word: w.word,
  start: w.start_ms / 1000,
  end: w.end_ms / 1000,
}));

/**
 * Authentic RoughCard with translucent chalkboard wash
 * Strictly adheres to s03_f1250.png visual standard
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
  bg = "rgba(10, 48, 42, 0.68)",
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
  width = 1096,
  stroke = "rgba(255, 255, 255, 0.22)",
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

export const Scene07OptimalTrace: React.FC = () => {
  const frame = useCurrentFrame();

  // =========================================================================
  // CAMERA ENGINE (Subtle focus adjustments during key algorithm events)
  // =========================================================================
  const { camScale, camY } = useMemo(() => {
    // S07_C1 & S07_Y1: Critical Pivot Discovery (F989..F1202)
    if (frame >= 989 && frame < 1202) {
      const p = interpolate(frame, [989, 1025], [0, 1], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
        easing: EASE,
      });
      return { camScale: 1 + 0.02 * p, camY: -5 * p };
    }
    // S07_SWAP: First Parabolic Swap (F1955..F2000)
    if (frame >= 1955 && frame < 2000) {
      const p = interpolate(frame, [1955, 1975], [0, 1], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
        easing: EASE,
      });
      return { camScale: 1 + 0.025 * p, camY: -6 * p };
    }
    // S07_RSWAP1 & S07_RSWAP2: Suffix Reversals (F2618..F2936)
    if (frame >= 2618 && frame < 2936) {
      return { camScale: 1.015, camY: -4 };
    }
    // S07_FINAL: Grand Victory Presentation (F3206..F3520)
    if (frame >= 3206) {
      const p = interpolate(frame, [3206, 3245], [0, 1], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
        easing: EASE,
      });
      return { camScale: 1 + 0.02 * p, camY: -5 * p };
    }
    return { camScale: 1, camY: 0 };
  }, [frame]);

  // =========================================================================
  // ALGORITHM STATE MACHINE (Values, Swaps, and Active Elements)
  // =========================================================================
  // Swap 1: Pivot & Successor swap [nums[1] <-> nums[5]] at F1955..F1985
  // Swap 2: Reverse Swap 1 [nums[2] <-> nums[6]] at F2618..F2648
  // Swap 3: Reverse Swap 2 [nums[3] <-> nums[5]] at F2885..F2915

  const swapConfig: ArraySwapConfig | undefined = useMemo(() => {
    // Swap 1: 1 <-> 3 (F1955..F1985)
    if (frame >= 1955 && frame < 1985) {
      const p = interpolate(frame, [1955, 1985], [0, 1], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
        easing: EASE,
      });
      return {
        idxA: 1,
        idxB: 5,
        progress: p,
        arcHeight: -75,
        label: "SWAP(nums[1], nums[5])",
      };
    }
    // Reverse Swap 1: 5 <-> 0 (F2618..F2648)
    if (frame >= 2618 && frame < 2648) {
      const p = interpolate(frame, [2618, 2648], [0, 1], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
        easing: EASE,
      });
      return {
        idxA: 2,
        idxB: 6,
        progress: p,
        arcHeight: -75,
        label: "REVERSE SWAP 1",
      };
    }
    // Reverse Swap 2: 4 <-> 1 (F2885..F2915)
    if (frame >= 2885 && frame < 2915) {
      const p = interpolate(frame, [2885, 2915], [0, 1], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
        easing: EASE,
      });
      return {
        idxA: 3,
        idxB: 5,
        progress: p,
        arcHeight: -75,
        label: "REVERSE SWAP 2",
      };
    }
    return undefined;
  }, [frame]);

  // Current resting array values (strictly frame-derived)
  const currentArrayValues = useMemo(() => {
    // Initial state: [2, 1, 5, 4, 4, 3, 0]
    if (frame < 1985) {
      return [2, 1, 5, 4, 4, 3, 0];
    }
    // Post-Swap 1: [2, 3, 5, 4, 4, 1, 0]
    if (frame < 2648) {
      return [2, 3, 5, 4, 4, 1, 0];
    }
    // Post-Reverse Swap 1: [2, 3, 0, 4, 4, 1, 5]
    if (frame < 2915) {
      return [2, 3, 0, 4, 4, 1, 5];
    }
    // Post-Reverse Swap 2 (Final Answer): [2, 3, 0, 1, 4, 4, 5]
    return [2, 3, 0, 1, 4, 4, 5];
  }, [frame]);

  // Array elements mapping with semantic highlighting
  const arrayElements: ArrayElementItem[] = useMemo(() => {
    return currentArrayValues.map((val, idx) => {
      let slotState: "default" | "current" | "confirmed" | "query" | "rejected" = "default";
      let valueState: "default" | "current" | "confirmed" | "query" | "rejected" = "default";

      // S07_VALUES spoken readback (F34..F211)
      if (frame >= 34 && frame < 211) {
        const spokenIndices = [
          { idx: 0, start: 34, end: 51 },
          { idx: 1, start: 59, end: 76 },
          { idx: 2, start: 87, end: 110 },
          { idx: 3, start: 121, end: 140 },
          { idx: 4, start: 157, end: 170 },
          { idx: 5, start: 176, end: 194 },
          { idx: 6, start: 197, end: 211 },
        ];
        const active = spokenIndices.find((s) => frame >= s.start && frame < s.end);
        if (active && active.idx === idx) {
          slotState = "query";
          valueState = "query";
        }
      }

      // Step 1: Pivot search comparisons
      else if (frame >= 232 && frame < 1096) {
        // i=5 check (F232..F448)
        if (frame >= 232 && frame < 448) {
          if (idx === 5) {
            slotState = frame >= 423 ? "rejected" : "query";
            valueState = frame >= 423 ? "rejected" : "query";
          } else if (idx === 6) {
            slotState = "confirmed";
            valueState = "confirmed";
          }
        }
        // i=4 check (F448..F584)
        else if (frame >= 448 && frame < 584) {
          if (idx === 4) {
            slotState = frame >= 560 ? "rejected" : "query";
            valueState = frame >= 560 ? "rejected" : "query";
          } else if (idx === 5) {
            slotState = "confirmed";
            valueState = "confirmed";
          }
        }
        // i=3 check duplicate (F584..F809)
        else if (frame >= 584 && frame < 809) {
          if (idx === 3) {
            slotState = frame >= 709 ? "rejected" : "query";
            valueState = frame >= 709 ? "rejected" : "query";
          } else if (idx === 4) {
            slotState = "confirmed";
            valueState = "confirmed";
          }
        }
        // i=2 check (F809..F958)
        else if (frame >= 809 && frame < 958) {
          if (idx === 2) {
            slotState = frame >= 936 ? "rejected" : "query";
            valueState = frame >= 936 ? "rejected" : "query";
          } else if (idx === 3) {
            slotState = "confirmed";
            valueState = "confirmed";
          }
        }
        // i=1 critical check (F958..F1096)
        else if (frame >= 958) {
          if (idx === 1) {
            slotState = frame >= 1071 ? "current" : "query";
            valueState = frame >= 1071 ? "current" : "query";
          } else if (idx === 2) {
            slotState = "confirmed";
            valueState = "confirmed";
          }
        }
      }

      // Step 1: Pivot locked & Suffix illuminated (F1096..F1406)
      else if (frame >= 1096 && frame < 1406) {
        if (idx === 1) {
          slotState = "current";
          valueState = "current";
        } else if (idx >= 2) {
          slotState = "confirmed";
          valueState = "confirmed";
        }
      }

      // Step 2: Successor search (F1406..F1955)
      else if (frame >= 1406 && frame < 1955) {
        if (idx === 1) {
          slotState = "current";
          valueState = "current";
        } else if (frame >= 1511 && frame < 1648 && idx === 6) {
          // testing j=6
          slotState = frame >= 1637 ? "rejected" : "query";
          valueState = frame >= 1637 ? "rejected" : "query";
        } else if (frame >= 1648 && idx === 5) {
          // testing & locking j=5
          slotState = frame >= 1750 ? "confirmed" : "query";
          valueState = frame >= 1750 ? "confirmed" : "query";
        }
      }

      // Step 2 post-swap (F2000..F2430)
      else if (frame >= 2000 && frame < 2430) {
        if (idx === 1) {
          slotState = "current";
          valueState = "current";
        } else if (idx >= 2) {
          slotState = "query";
          valueState = "query";
        }
      }

      // Step 3: Reversals (F2430..F3170)
      else if (frame >= 2430 && frame < 3170) {
        if (frame < 2850) {
          // left=2, right=6
          if (idx === 2 || idx === 6) {
            slotState = "current";
            valueState = "current";
          }
        } else if (frame < 3114) {
          // left=3, right=5
          if (idx === 3 || idx === 5) {
            slotState = "current";
            valueState = "current";
          }
        } else {
          // pointers meet at idx 4
          if (idx === 4) {
            slotState = "confirmed";
            valueState = "confirmed";
          }
        }
      }

      // Final Answer Presentation (F3206..F3520)
      else if (frame >= 3206) {
        slotState = "confirmed";
        valueState = "confirmed";
      }

      return {
        value: val,
        slotState,
        valueState,
      };
    });
  }, [currentArrayValues, frame]);

  // Pointer lane configuration (clean labels, zero overflow, no collisions)
  const arrayPointers = useMemo(() => {
    // F0..F232: No pointers
    if (frame < 232) {
      return undefined;
    }

    // Step 1: i=5 (F232..F448)
    if (frame >= 232 && frame < 448) {
      return [
        { id: "ptr-i", index: 5, label: "i", color: theme.pivot, placement: "bottom" as const },
        { id: "ptr-i-plus-1", index: 6, label: "i+1", color: theme.good, placement: "bottom" as const },
      ];
    }

    // Step 1: i=4 (F448..F584)
    if (frame >= 448 && frame < 584) {
      return [
        { id: "ptr-i", index: 4, label: "i", color: theme.pivot, placement: "bottom" as const },
        { id: "ptr-i-plus-1", index: 5, label: "i+1", color: theme.good, placement: "bottom" as const },
      ];
    }

    // Step 1: i=3 (F584..F809)
    if (frame >= 584 && frame < 809) {
      return [
        { id: "ptr-i", index: 3, label: "i", color: theme.pivot, placement: "bottom" as const },
        { id: "ptr-i-plus-1", index: 4, label: "i+1", color: theme.good, placement: "bottom" as const },
      ];
    }

    // Step 1: i=2 (F809..F958)
    if (frame >= 809 && frame < 958) {
      return [
        { id: "ptr-i", index: 2, label: "i", color: theme.pivot, placement: "bottom" as const },
        { id: "ptr-i-plus-1", index: 3, label: "i+1", color: theme.good, placement: "bottom" as const },
      ];
    }

    // Step 1: i=1 (F958..F1096)
    if (frame >= 958 && frame < 1096) {
      return [
        { id: "ptr-i", index: 1, label: "i", color: theme.pivot, placement: "bottom" as const },
        { id: "ptr-i-plus-1", index: 2, label: "i+1", color: theme.good, placement: "bottom" as const },
      ];
    }

    // Step 1: Pivot confirmed (F1096..F1511)
    if (frame >= 1096 && frame < 1511) {
      return [
        { id: "ptr-pivot", index: 1, label: "pivot", color: theme.pivot, placement: "bottom" as const },
      ];
    }

    // Step 2: j=6 check (F1511..F1648)
    if (frame >= 1511 && frame < 1648) {
      return [
        { id: "ptr-pivot", index: 1, label: "pivot", color: theme.pivot, placement: "bottom" as const },
        { id: "ptr-j", index: 6, label: "j", color: theme.good, placement: "bottom" as const },
      ];
    }

    // Step 2: j=5 check & successor lock (F1648..F1955)
    if (frame >= 1648 && frame < 1955) {
      return [
        { id: "ptr-pivot", index: 1, label: "pivot", color: theme.pivot, placement: "bottom" as const },
        { id: "ptr-j", index: 5, label: "j", color: theme.good, placement: "bottom" as const },
      ];
    }

    // Step 2: Swap ongoing / post-swap settle (F1955..F2430)
    if (frame >= 1955 && frame < 2430) {
      return undefined;
    }

    // Step 3: Reversal range [left=2, right=6] (F2430..F2850)
    if (frame >= 2430 && frame < 2850) {
      return [
        { id: "ptr-left", index: 2, label: "left", color: theme.good, placement: "bottom" as const },
        { id: "ptr-right", index: 6, label: "right", color: theme.pivot, placement: "bottom" as const },
      ];
    }

    // Step 3: Reversal range [left=3, right=5] (F2850..F3114)
    if (frame >= 2850 && frame < 3114) {
      return [
        { id: "ptr-left", index: 3, label: "left", color: theme.good, placement: "bottom" as const },
        { id: "ptr-right", index: 5, label: "right", color: theme.pivot, placement: "bottom" as const },
      ];
    }

    // Step 3: Pointers meet [left = right = 4] (F3114..F3170)
    if (frame >= 3114 && frame < 3170) {
      return [
        { id: "ptr-meet", index: 4, label: "L=R=4", color: theme.good, placement: "bottom" as const },
      ];
    }

    // F3170..F3520: Final Answer (clean array)
    return undefined;
  }, [frame]);

  // Dynamic Subtitle Eyebrow
  const dynamicSubtitle = useMemo(() => {
    if (frame < 232) {
      return "EXECUTION TRACE · MASTER TESTCASE [2, 1, 5, 4, 4, 3, 0]";
    }
    if (frame < 1096) {
      return "STEP 1 · SCAN RIGHT-TO-LEFT FOR FIRST DECREASE (PIVOT SEARCH)";
    }
    if (frame < 1406) {
      return "STEP 1 COMPLETE · PIVOT IDENTIFIED AT INDEX 1";
    }
    if (frame < 1955) {
      return "STEP 2 · SCAN RIGHT-TO-LEFT FOR FIRST VALUE > PIVOT (SUCCESSOR SEARCH)";
    }
    if (frame < 2217) {
      return "STEP 2 COMPLETE · SWAP PIVOT WITH SUCCESSOR";
    }
    if (frame < 3170) {
      return "STEP 3 · REVERSE SUFFIX IN-PLACE O(K) TO ACHIEVE ASCENDING ORDER";
    }
    return "FINAL ANSWER · IMMEDIATE NEXT PERMUTATION VERIFIED";
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
      <Audio src={staticFile("audio/012/07-optimal-trace.mp3")} />

      {/* ===================================================================== */}
      {/* TOP HEADER BAR: Compact, Authoritative Strip (Y: 36..80)              */}
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
          APPROACH 2 · OPTIMAL TRACE
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
        {/* ARRAY TRACK (Visible throughout entire trace: top: 15)              */}
        {/* Dimensions: 110px width x 95px height, ends at stage Y: 240px       */}
        {/* ------------------------------------------------------------------- */}
        <div
          style={{
            position: "absolute",
            top: 15,
            left: 0,
            right: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >


          {/* ArrayTrackV2 Component */}
          <ArrayTrackV2
            elements={arrayElements}
            slotWidth={110}
            slotHeight={95}
            gap={16}
            maxWidth={980}
            showIndices={true}
            indexPlacement="top"
            pointers={arrayPointers}
            pointerPlacement="bottom"
            swap={swapConfig}
          />
        </div>

        {/* ------------------------------------------------------------------- */}
        {/* STEP INSPECTION & PROOF CARD (top: 285, 60px clean clearance)       */}
        {/* Dimensions: 1160px width x 325px height                             */}
        {/* ------------------------------------------------------------------- */}
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
          {/* ================================================================= */}
          {/* CARD PHASE 0: INITIAL READBACK (F0..F232)                         */}
          {/* ================================================================= */}
          {frame < 232 && (
            <RoughCard
              width={1140}
              height={325}
              stroke={theme.pivot}
              seed={10}
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
                      INPUT ARRAY
                    </span>
                    <span
                      style={{
                        fontFamily: fonts.display,
                        fontSize: 30,
                        color: theme.chalkText,
                      }}
                    >
                      Master Example Inspection
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
                    LENGTH N = 7
                  </span>
                </div>

                <ChalkDivider width={1076} seed={2} />

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
                    We execute the optimal in-place algorithm on our master array:{" "}
                    <code style={{ color: theme.pivot, fontWeight: 800 }}>
                      [2, 1, 5, 4, 4, 3, 0]
                    </code>
                    . Notice the descending slope at the end and duplicate values.
                  </p>
                  <div
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 12,
                      padding: "10px 20px",
                      borderRadius: 8,
                      backgroundColor: "rgba(255, 255, 255, 0.05)",
                      border: "1px solid rgba(255, 255, 255, 0.15)",
                      fontFamily: fonts.mono,
                      fontSize: 15,
                      color: theme.chalkText,
                    }}
                  >
                    <span>Target: Find Next Lexicographical Permutation in O(N) Time & O(1) Space</span>
                  </div>
                </div>
              </div>
            </RoughCard>
          )}

          {/* ================================================================= */}
          {/* CARD PHASE 1: STEP 1 · FIND PIVOT (F232..F1406)                   */}
          {/* ================================================================= */}
          {frame >= 232 && frame < 1406 && (
            <RoughCard
              width={1160}
              height={325}
              stroke={frame >= 1071 ? theme.good : theme.pivot}
              seed={22}
              bg={frame >= 1071 ? "rgba(14, 46, 38, 0.72)" : "rgba(10, 48, 42, 0.68)"}
            >
              <div style={{ padding: "20px 32px" }}>
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
                        color: frame >= 1071 ? theme.good : theme.pivot,
                        padding: "4px 12px",
                        borderRadius: 4,
                        backgroundColor:
                          frame >= 1071
                            ? "rgba(60, 229, 167, 0.15)"
                            : "rgba(255, 209, 102, 0.15)",
                        border: `1px solid ${frame >= 1071 ? theme.good : theme.pivot}`,
                      }}
                    >
                      STEP 1 · PIVOT SCAN
                    </span>
                    <span
                      style={{
                        fontFamily: fonts.display,
                        fontSize: 30,
                        color: theme.chalkText,
                      }}
                    >
                      {frame >= 1096
                        ? "Pivot Locked at Index 1!"
                        : "Condition: nums[i] < nums[i+1]"}
                    </span>
                  </div>
                  <span
                    style={{
                      fontFamily: fonts.mono,
                      fontSize: 14,
                      fontWeight: 800,
                      color: frame >= 1071 ? theme.good : theme.pivot,
                      padding: "6px 14px",
                      borderRadius: 20,
                      backgroundColor:
                        frame >= 1071
                          ? "rgba(60, 229, 167, 0.12)"
                          : "rgba(255, 209, 102, 0.12)",
                      border: `1.5px solid ${frame >= 1071 ? theme.good : theme.pivot}`,
                    }}
                  >
                    {frame >= 1096 ? "★ PIVOT FOUND" : "SCANNING RIGHT ➔ LEFT"}
                  </span>
                </div>

                <ChalkDivider width={1096} seed={5} />

                {/* Step 1 Comparison Details */}
                <div style={{ marginTop: 16 }}>
                  {/* i=5 check (F232..F448) */}
                  {frame < 448 && (
                    <div>
                      <div style={{ fontSize: 17, color: "rgba(255, 255, 255, 0.9)", marginBottom: 12 }}>
                        Start at second-last index: <code style={{ color: theme.pivot }}>i = 5</code> (value 3). Compare with <code style={{ color: theme.good }}>i+1 = 6</code> (value 0):
                      </div>
                      <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                        <div
                          style={{
                            padding: "8px 18px",
                            borderRadius: 8,
                            backgroundColor: "rgba(255, 209, 102, 0.12)",
                            border: `1.5px solid ${theme.pivot}`,
                            fontFamily: fonts.mono,
                            fontSize: 18,
                            fontWeight: 800,
                            color: theme.pivot,
                          }}
                        >
                          nums[5] &lt; nums[6] &nbsp;➔&nbsp; 3 &lt; 0 ?
                        </div>
                        {frame >= 423 && (
                          <div
                            style={{
                              padding: "8px 18px",
                              borderRadius: 8,
                              backgroundColor: "rgba(255, 107, 107, 0.18)",
                              border: `1.5px solid ${theme.accent}`,
                              fontFamily: fonts.mono,
                              fontSize: 16,
                              fontWeight: 800,
                              color: theme.accent,
                            }}
                          >
                            ✗ FALSE: 3 ≥ 0 (Move Left)
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  {/* i=4 check (F448..F584) */}
                  {frame >= 448 && frame < 584 && (
                    <div>
                      <div style={{ fontSize: 17, color: "rgba(255, 255, 255, 0.9)", marginBottom: 12 }}>
                        Inspect index: <code style={{ color: theme.pivot }}>i = 4</code> (value 4). Compare with <code style={{ color: theme.good }}>i+1 = 5</code> (value 3):
                      </div>
                      <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                        <div
                          style={{
                            padding: "8px 18px",
                            borderRadius: 8,
                            backgroundColor: "rgba(255, 209, 102, 0.12)",
                            border: `1.5px solid ${theme.pivot}`,
                            fontFamily: fonts.mono,
                            fontSize: 18,
                            fontWeight: 800,
                            color: theme.pivot,
                          }}
                        >
                          nums[4] &lt; nums[5] &nbsp;➔&nbsp; 4 &lt; 3 ?
                        </div>
                        {frame >= 560 && (
                          <div
                            style={{
                              padding: "8px 18px",
                              borderRadius: 8,
                              backgroundColor: "rgba(255, 107, 107, 0.18)",
                              border: `1.5px solid ${theme.accent}`,
                              fontFamily: fonts.mono,
                              fontSize: 16,
                              fontWeight: 800,
                              color: theme.accent,
                            }}
                          >
                            ✗ FALSE: 4 ≥ 3 (Move Left)
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  {/* i=3 check (duplicate 4 < 4) (F584..F809) */}
                  {frame >= 584 && frame < 809 && (
                    <div>
                      <div style={{ fontSize: 17, color: "rgba(255, 255, 255, 0.9)", marginBottom: 10 }}>
                        Inspect index: <code style={{ color: theme.pivot }}>i = 3</code> (value 4). Compare with duplicate <code style={{ color: theme.good }}>i+1 = 4</code> (value 4):
                      </div>
                      <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 12 }}>
                        <div
                          style={{
                            padding: "8px 18px",
                            borderRadius: 8,
                            backgroundColor: "rgba(255, 209, 102, 0.12)",
                            border: `1.5px solid ${theme.pivot}`,
                            fontFamily: fonts.mono,
                            fontSize: 18,
                            fontWeight: 800,
                            color: theme.pivot,
                          }}
                        >
                          nums[3] &lt; nums[4] &nbsp;➔&nbsp; 4 &lt; 4 ?
                        </div>
                        {frame >= 709 && (
                          <div
                            style={{
                              padding: "8px 18px",
                              borderRadius: 8,
                              backgroundColor: "rgba(255, 107, 107, 0.18)",
                              border: `1.5px solid ${theme.accent}`,
                              fontFamily: fonts.mono,
                              fontSize: 16,
                              fontWeight: 800,
                              color: theme.accent,
                            }}
                          >
                            ✗ FALSE: 4 = 4
                          </div>
                        )}
                      </div>
                      {frame >= 729 && (
                        <div
                          style={{
                            padding: "8px 16px",
                            borderRadius: 6,
                            backgroundColor: "rgba(255, 209, 102, 0.12)",
                            border: `1.5px solid ${theme.pivot}`,
                            fontFamily: fonts.sans,
                            fontSize: 15,
                            color: theme.pivot,
                            fontWeight: 700,
                          }}
                        >
                          ★ CRITICAL RULE: Equal values do NOT satisfy strict &lt; (less than). Condition must strictly decrease!
                        </div>
                      )}
                    </div>
                  )}

                  {/* i=2 check (F809..F958) */}
                  {frame >= 809 && frame < 958 && (
                    <div>
                      <div style={{ fontSize: 17, color: "rgba(255, 255, 255, 0.9)", marginBottom: 12 }}>
                        Inspect index: <code style={{ color: theme.pivot }}>i = 2</code> (peak value 5). Compare with <code style={{ color: theme.good }}>i+1 = 3</code> (value 4):
                      </div>
                      <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                        <div
                          style={{
                            padding: "8px 18px",
                            borderRadius: 8,
                            backgroundColor: "rgba(255, 209, 102, 0.12)",
                            border: `1.5px solid ${theme.pivot}`,
                            fontFamily: fonts.mono,
                            fontSize: 18,
                            fontWeight: 800,
                            color: theme.pivot,
                          }}
                        >
                          nums[2] &lt; nums[3] &nbsp;➔&nbsp; 5 &lt; 4 ?
                        </div>
                        {frame >= 936 && (
                          <div
                            style={{
                              padding: "8px 18px",
                              borderRadius: 8,
                              backgroundColor: "rgba(255, 107, 107, 0.18)",
                              border: `1.5px solid ${theme.accent}`,
                              fontFamily: fonts.mono,
                              fontSize: 16,
                              fontWeight: 800,
                              color: theme.accent,
                            }}
                          >
                            ✗ FALSE: 5 ≥ 4 (Move Left)
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  {/* i=1 critical breakthrough & pivot confirmation (F958..F1406) */}
                  {frame >= 958 && (
                    <div>
                      <div style={{ fontSize: 17, color: "rgba(255, 255, 255, 0.9)", marginBottom: 12 }}>
                        Inspect index: <code style={{ color: theme.pivot }}>i = 1</code> (value 1). Compare with <code style={{ color: theme.good }}>i+1 = 2</code> (value 5):
                      </div>
                      <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 12 }}>
                        <div
                          style={{
                            padding: "8px 18px",
                            borderRadius: 8,
                            backgroundColor: "rgba(255, 209, 102, 0.12)",
                            border: `1.5px solid ${theme.pivot}`,
                            fontFamily: fonts.mono,
                            fontSize: 18,
                            fontWeight: 800,
                            color: theme.pivot,
                          }}
                        >
                          nums[1] &lt; nums[2] &nbsp;➔&nbsp; 1 &lt; 5 ?
                        </div>
                        {frame >= 1071 && (
                          <div
                            style={{
                              padding: "8px 18px",
                              borderRadius: 8,
                              backgroundColor: "rgba(60, 229, 167, 0.18)",
                              border: `1.5px solid ${theme.good}`,
                              fontFamily: fonts.mono,
                              fontSize: 16,
                              fontWeight: 800,
                              color: theme.good,
                            }}
                          >
                            ✓ TRUE! (1 &lt; 5) — PIVOT FOUND!
                          </div>
                        )}
                      </div>
                      {frame >= 1096 && (
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: 20,
                            padding: "8px 16px",
                            borderRadius: 8,
                            backgroundColor: "rgba(255, 255, 255, 0.05)",
                            border: "1px solid rgba(255, 255, 255, 0.12)",
                          }}
                        >
                          <span style={{ fontSize: 15, color: theme.chalkText }}>
                            <strong>Pivot Index:</strong> <code style={{ color: theme.pivot }}>i = 1</code> (Value = 1)
                          </span>
                          <span style={{ fontSize: 15, color: theme.good }}>
                            <strong>Suffix [2..6]:</strong> <code>5 ≥ 4 ≥ 4 ≥ 3 ≥ 0</code> (Non-Increasing)
                          </span>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </RoughCard>
          )}

          {/* ================================================================= */}
          {/* CARD PHASE 2: STEP 2 · FIND SUCCESSOR & SWAP (F1406..F2217)       */}
          {/* ================================================================= */}
          {frame >= 1406 && frame < 2217 && (
            <RoughCard
              width={1160}
              height={325}
              stroke={frame >= 1955 ? theme.good : theme.pivot}
              seed={35}
              bg={frame >= 1955 ? "rgba(14, 46, 38, 0.72)" : "rgba(10, 48, 42, 0.68)"}
            >
              <div style={{ padding: "20px 32px" }}>
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
                      STEP 2 · SUCCESSOR & SWAP
                    </span>
                    <span
                      style={{
                        fontFamily: fonts.display,
                        fontSize: 30,
                        color: theme.chalkText,
                      }}
                    >
                      {frame >= 2000
                        ? "Swap Complete! Permutation is Larger"
                        : frame >= 1782
                        ? "Successor Found at Index 5!"
                        : "Find Smallest Suffix Value > Pivot"}
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
                    {frame >= 2000
                      ? "POST-SWAP VERIFIED"
                      : frame >= 1782
                      ? "SUCCESSOR: nums[5]=3"
                      : "SCAN RIGHT ➔ LEFT"}
                  </span>
                </div>

                <ChalkDivider width={1096} seed={8} />

                <div style={{ marginTop: 16 }}>
                  {/* Step 2 Search: testing j=6 (F1406..F1648) */}
                  {frame < 1648 && (
                    <div>
                      <div style={{ fontSize: 17, color: "rgba(255, 255, 255, 0.9)", marginBottom: 12 }}>
                        Scan from last index: <code style={{ color: theme.good }}>j = 6</code> (value 0). Is it strictly greater than pivot (<code style={{ color: theme.pivot }}>nums[1] = 1</code>)?
                      </div>
                      <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                        <div
                          style={{
                            padding: "8px 18px",
                            borderRadius: 8,
                            backgroundColor: "rgba(255, 209, 102, 0.12)",
                            border: `1.5px solid ${theme.pivot}`,
                            fontFamily: fonts.mono,
                            fontSize: 18,
                            fontWeight: 800,
                            color: theme.pivot,
                          }}
                        >
                          nums[6] &gt; nums[1] &nbsp;➔&nbsp; 0 &gt; 1 ?
                        </div>
                        {frame >= 1637 && (
                          <div
                            style={{
                              padding: "8px 18px",
                              borderRadius: 8,
                              backgroundColor: "rgba(255, 107, 107, 0.18)",
                              border: `1.5px solid ${theme.accent}`,
                              fontFamily: fonts.mono,
                              fontSize: 16,
                              fontWeight: 800,
                              color: theme.accent,
                            }}
                          >
                            ✗ FALSE: 0 ≤ 1 (Move Left)
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Step 2 Search: testing j=5 (F1648..F1892) */}
                  {frame >= 1648 && frame < 1892 && (
                    <div>
                      <div style={{ fontSize: 17, color: "rgba(255, 255, 255, 0.9)", marginBottom: 12 }}>
                        Scan to next index: <code style={{ color: theme.good }}>j = 5</code> (value 3). Is it strictly greater than pivot (<code style={{ color: theme.pivot }}>nums[1] = 1</code>)?
                      </div>
                      <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 12 }}>
                        <div
                          style={{
                            padding: "8px 18px",
                            borderRadius: 8,
                            backgroundColor: "rgba(255, 209, 102, 0.12)",
                            border: `1.5px solid ${theme.pivot}`,
                            fontFamily: fonts.mono,
                            fontSize: 18,
                            fontWeight: 800,
                            color: theme.pivot,
                          }}
                        >
                          nums[5] &gt; nums[1] &nbsp;➔&nbsp; 3 &gt; 1 ?
                        </div>
                        {frame >= 1750 && (
                          <div
                            style={{
                              padding: "8px 18px",
                              borderRadius: 8,
                              backgroundColor: "rgba(60, 229, 167, 0.18)",
                              border: `1.5px solid ${theme.good}`,
                              fontFamily: fonts.mono,
                              fontSize: 16,
                              fontWeight: 800,
                              color: theme.good,
                            }}
                          >
                            ✓ TRUE! (3 &gt; 1) — SUCCESSOR FOUND!
                          </div>
                        )}
                      </div>
                      {frame >= 1782 && (
                        <div style={{ fontSize: 15, color: theme.chalkText }}>
                          Since the suffix is descending, index 5 is guaranteed to hold the{" "}
                          <strong style={{ color: theme.good }}>smallest possible value</strong> capable of increasing the pivot!
                        </div>
                      )}
                    </div>
                  )}

                  {/* Step 2 Swap execution & post-swap state (F1892..F2217) */}
                  {frame >= 1892 && (
                    <div>
                      <div style={{ fontSize: 17, color: "rgba(255, 255, 255, 0.9)", marginBottom: 12 }}>
                        Swap Pivot (<code style={{ color: theme.pivot }}>nums[1] = 1</code>) with Successor (<code style={{ color: theme.good }}>nums[5] = 3</code>):
                      </div>
                      <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 12 }}>
                        <div
                          style={{
                            padding: "8px 18px",
                            borderRadius: 8,
                            backgroundColor: "rgba(60, 229, 167, 0.15)",
                            border: `1.5px solid ${theme.good}`,
                            fontFamily: fonts.mono,
                            fontSize: 18,
                            fontWeight: 800,
                            color: theme.good,
                          }}
                        >
                          SWAP: nums[1] ⟷ nums[5] &nbsp;(1 ⟷ 3)
                        </div>
                        {frame >= 2000 && (
                          <div
                            style={{
                              padding: "8px 16px",
                              borderRadius: 8,
                              backgroundColor: "rgba(255, 209, 102, 0.15)",
                              border: `1.5px solid ${theme.pivot}`,
                              fontFamily: fonts.mono,
                              fontSize: 15,
                              fontWeight: 800,
                              color: theme.pivot,
                            }}
                          >
                            Array: [2, 3, 5, 4, 4, 1, 0]
                          </div>
                        )}
                      </div>
                      <div style={{ fontSize: 15, color: "rgba(255, 255, 255, 0.85)" }}>
                        Notice: The prefix grew from <code style={{ color: theme.pivot }}>2,1</code> to <code style={{ color: theme.good }}>2,3</code>. The permutation is now strictly larger!
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </RoughCard>
          )}

          {/* ================================================================= */}
          {/* CARD PHASE 3: STEP 3 · REVERSE SUFFIX (F2217..F3170)              */}
          {/* ================================================================= */}
          {frame >= 2217 && frame < 3170 && (
            <RoughCard
              width={1160}
              height={325}
              stroke={frame >= 3114 ? theme.good : theme.pivot}
              seed={48}
              bg="rgba(10, 48, 42, 0.68)"
            >
              <div style={{ padding: "20px 32px" }}>
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
                      STEP 3 · REVERSE SUFFIX
                    </span>
                    <span
                      style={{
                        fontFamily: fonts.display,
                        fontSize: 30,
                        color: theme.chalkText,
                      }}
                    >
                      {frame >= 3114
                        ? "Pointers Meet! Reverse Complete"
                        : "Two-Pointer In-Place O(K) Reversal"}
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
                    RANGE: [2 .. 6]
                  </span>
                </div>

                <ChalkDivider width={1096} seed={11} />

                <div style={{ marginTop: 16 }}>
                  {/* Suffix maximization dilemma (F2217..F2430) */}
                  {frame < 2430 && (
                    <div>
                      <p
                        style={{
                          fontFamily: fonts.sans,
                          fontSize: 17,
                          color: "rgba(255, 255, 255, 0.9)",
                          lineHeight: 1.55,
                          margin: "0 0 12px 0",
                        }}
                      >
                        The permutation is larger, but the suffix <code style={{ color: theme.good }}>[5, 4, 4, 1, 0]</code> is still descending (maximal). To form the <strong>immediate next permutation</strong>, we must make the suffix as small as possible!
                      </p>
                      <div
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: 12,
                          padding: "8px 16px",
                          borderRadius: 6,
                          backgroundColor: "rgba(60, 229, 167, 0.12)",
                          border: `1.5px solid ${theme.good}`,
                          fontFamily: fonts.mono,
                          fontSize: 15,
                          fontWeight: 700,
                          color: theme.good,
                        }}
                      >
                        ✓ Solution: Reverse in-place in O(K) time to guarantee ascending order!
                      </div>
                    </div>
                  )}

                  {/* Reverse Swap 1: 5 <-> 0 (F2430..F2850) */}
                  {frame >= 2430 && frame < 2850 && (
                    <div>
                      <div style={{ fontSize: 17, color: "rgba(255, 255, 255, 0.9)", marginBottom: 12 }}>
                        Pointers: <code style={{ color: theme.good }}>left = 2</code> (val 5) and <code style={{ color: theme.pivot }}>right = 6</code> (val 0):
                      </div>
                      <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 12 }}>
                        <div
                          style={{
                            padding: "8px 18px",
                            borderRadius: 8,
                            backgroundColor: "rgba(255, 209, 102, 0.12)",
                            border: `1.5px solid ${theme.pivot}`,
                            fontFamily: fonts.mono,
                            fontSize: 18,
                            fontWeight: 800,
                            color: theme.pivot,
                          }}
                        >
                          SWAP: nums[2] ⟷ nums[6] &nbsp;(5 ⟷ 0)
                        </div>
                        {frame >= 2648 && (
                          <div
                            style={{
                              padding: "8px 16px",
                              borderRadius: 8,
                              backgroundColor: "rgba(60, 229, 167, 0.15)",
                              border: `1.5px solid ${theme.good}`,
                              fontFamily: fonts.mono,
                              fontSize: 15,
                              fontWeight: 800,
                              color: theme.good,
                            }}
                          >
                            Array: [2, 3, 0, 4, 4, 1, 5]
                          </div>
                        )}
                      </div>
                      <div style={{ fontSize: 15, color: "rgba(255, 255, 255, 0.85)" }}>
                        Outer boundaries inverted! Move inward: <code>left++</code> and <code>right--</code>.
                      </div>
                    </div>
                  )}

                  {/* Reverse Swap 2: 4 <-> 1 (F2850..F3114) */}
                  {frame >= 2850 && frame < 3114 && (
                    <div>
                      <div style={{ fontSize: 17, color: "rgba(255, 255, 255, 0.9)", marginBottom: 12 }}>
                        Pointers moved inward: <code style={{ color: theme.good }}>left = 3</code> (val 4) and <code style={{ color: theme.pivot }}>right = 5</code> (val 1):
                      </div>
                      <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 12 }}>
                        <div
                          style={{
                            padding: "8px 18px",
                            borderRadius: 8,
                            backgroundColor: "rgba(255, 209, 102, 0.12)",
                            border: `1.5px solid ${theme.pivot}`,
                            fontFamily: fonts.mono,
                            fontSize: 18,
                            fontWeight: 800,
                            color: theme.pivot,
                          }}
                        >
                          SWAP: nums[3] ⟷ nums[5] &nbsp;(4 ⟷ 1)
                        </div>
                        {frame >= 2915 && (
                          <div
                            style={{
                              padding: "8px 16px",
                              borderRadius: 8,
                              backgroundColor: "rgba(60, 229, 167, 0.15)",
                              border: `1.5px solid ${theme.good}`,
                              fontFamily: fonts.mono,
                              fontSize: 15,
                              fontWeight: 800,
                              color: theme.good,
                            }}
                          >
                            Array: [2, 3, 0, 1, 4, 4, 5]
                          </div>
                        )}
                      </div>
                      <div style={{ fontSize: 15, color: "rgba(255, 255, 255, 0.85)" }}>
                        Suffix is now in non-decreasing order: <code>0 ≤ 1 ≤ 4 ≤ 4 ≤ 5</code>!
                      </div>
                    </div>
                  )}

                  {/* Pointers meet & termination (F3114..F3170) */}
                  {frame >= 3114 && (
                    <div>
                      <div style={{ fontSize: 17, color: "rgba(255, 255, 255, 0.9)", marginBottom: 12 }}>
                        Pointers meet at index 4: <code style={{ color: theme.good }}>left = 4 == right = 4</code>.
                      </div>
                      <div
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: 12,
                          padding: "8px 18px",
                          borderRadius: 8,
                          backgroundColor: "rgba(60, 229, 167, 0.18)",
                          border: `1.5px solid ${theme.good}`,
                          fontFamily: fonts.mono,
                          fontSize: 16,
                          fontWeight: 800,
                          color: theme.good,
                        }}
                      >
                        ✓ TERMINATE: left ≥ right — No middle self-swap needed!
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </RoughCard>
          )}

          {/* ================================================================= */}
          {/* CARD PHASE 4: FINAL ANSWER CELEBRATION (F3170..F3520)             */}
          {/* ================================================================= */}
          {frame >= 3170 && (
            <RoughCard
              width={1160}
              height={325}
              stroke={theme.good}
              seed={60}
              bg="rgba(14, 46, 38, 0.75)"
            >
              <div style={{ padding: "20px 32px" }}>
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
                        backgroundColor: "rgba(60, 229, 167, 0.2)",
                        border: `1.5px solid ${theme.good}`,
                      }}
                    >
                      FINAL RESULT
                    </span>
                    <span
                      style={{
                        fontFamily: fonts.display,
                        fontSize: 32,
                        color: theme.chalkText,
                      }}
                    >
                      Immediate Next Permutation Verified!
                    </span>
                  </div>
                  <span
                    style={{
                      fontFamily: fonts.mono,
                      fontSize: 14,
                      fontWeight: 800,
                      color: theme.pivot,
                      padding: "6px 16px",
                      borderRadius: 20,
                      backgroundColor: "rgba(255, 209, 102, 0.15)",
                      border: `1.5px solid ${theme.pivot}`,
                    }}
                  >
                    TIME: O(N) · SPACE: O(1)
                  </span>
                </div>

                <ChalkDivider width={1096} seed={14} stroke={theme.good} />

                <div style={{ marginTop: 18 }}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 24,
                      padding: "12px 24px",
                      borderRadius: 10,
                      backgroundColor: "rgba(60, 229, 167, 0.12)",
                      border: `2px solid ${theme.good}`,
                      marginBottom: 16,
                    }}
                  >
                    <span
                      style={{
                        fontFamily: fonts.mono,
                        fontSize: 22,
                        fontWeight: 900,
                        color: theme.good,
                        letterSpacing: "0.08em",
                      }}
                    >
                      [ 2, 3, 0, 1, 4, 4, 5 ]
                    </span>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <span style={{ fontSize: 16, color: "rgba(255, 255, 255, 0.9)" }}>
                      From original <code style={{ color: theme.pivot }}>[2, 1, 5, 4, 4, 3, 0]</code> ➔ Next <code style={{ color: theme.good }}>[2, 3, 0, 1, 4, 4, 5]</code>.
                    </span>
                    {frame >= 3446 && (
                      <span
                        style={{
                          fontFamily: fonts.mono,
                          fontSize: 13,
                          fontWeight: 800,
                          color: theme.pivot,
                          padding: "4px 12px",
                          borderRadius: 6,
                          backgroundColor: "rgba(255, 209, 102, 0.15)",
                          border: `1px solid ${theme.pivot}`,
                        }}
                      >
                        NEXT ➔ SCENE 08: OPTIMAL CODE
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </RoughCard>
          )}
        </div>
      </div>

      {/* ===================================================================== */}
      {/* CAPTIONS: Word-Level Karaoke Captions (Y: 980)                        */}
      {/* ===================================================================== */}
      <div
        style={{
          position: "absolute",
          top: 980,
          left: 80,
          right: 80,
          display: "flex",
          justifyContent: "center",
          zIndex: 100,
        }}
      >
        <Captions words={captionWords} />
      </div>
    </div>
  );
};
