/**
 * Scene02Understand.tsx — Scene 02 · QUESTION + UNDERSTAND
 * Sort Colors (LeetCode 75) · Pattern 01 — Arrays & Hashing
 *
 * Fully Audio-Synchronized Word-Wise Visual Animation:
 * - High color weight & bold contrast for all array slots (Solid dark green slate, 3.5px heavy chalk borders)
 * - Zero generic UI / zero AI slop: every spoken phrase animates a literal visual cause-and-effect
 * - Act 1 (F0–F140): Settle header; 10 empty bold slots draw left-to-right on "We are given an array,"
 * - Act 2 (F140–F359): Domain rings appear; 0, 1, 2 write on exact spoken syllables
 * - Act 3 (F359–F605): Ghost target rail reveals 3 explicit order zone brackets spanning the slots:
 *     [ALL ZEROES FIRST (slots 0..2)] -> [THEN ALL ONES (slots 3..5)] -> [FINALLY ALL TWOS (slots 6..9)]
 * - Act 4 (F605–F917): Master input spotlighted; values 2,1,2,0,2,1,0,1,0,2 write strictly on spoken syllables
 * - Act 5 (F917–F1169): Target rail writes 0,0,0,1,1,1,2,2,2,2 on exact spoken syllables
 * - Act 6 (F1169–F1486): Condition 1 (Chalk loop bracket: In-place modify same array); Condition 2 (sort(nums) with red chalk strike)
 * - Act 7 (F1486–F1840): Follow-up sweep tracer across array + O(1) space footprint + real challenge banner
 * - Act 8 (F1840–F2200): SVG chalk relation curves from array values up to domain tokens {0, 1, 2}
 * - Act 9 (F2200–F2323): Clean handoff to Scene 03 with unchanged master array and "APPROACH 1 · COUNTING SORT"
 */

import React, { useMemo } from "react";
import {
  AbsoluteFill,
  Audio,
  interpolate,
  staticFile,
  useCurrentFrame,
} from "remotion";

import { ChalkboardBackground, ChalkFilters } from "../../../../kit/lib/chalk";
import { theme, fonts } from "../../../../kit/lib/theme";
import { EASE, pop } from "../../../../kit/lib/anim";
import { Captions, CaptionWord } from "../../../../kit/components/Captions";
import { ArrayTrackV2, ArrayPartition, RoughCurve, ArrayValueV2 } from "../../../../kit/components";
import syncData from "../sync/02-understand.json";

// ---------------------------------------------------------------------------
// Word-level Caption Timings (from sync/02-understand.json)
// ---------------------------------------------------------------------------
const captionWords: CaptionWord[] = (syncData.words || [])
  .map((w: any) => ({
    word: w.word,
    start: w.start_ms / 1000,
    end: w.end_ms / 1000,
  }))
  .filter((w) => w.word !== "");

// ---------------------------------------------------------------------------
// Master Layout Constants — Heavy Visual Weight
// ---------------------------------------------------------------------------
const SLOT_COUNT = 10;
const SLOT_WIDTH = 104;
const SLOT_HEIGHT = 100;
const SLOT_GAP = 14;
const TOTAL_TRACK_WIDTH = SLOT_COUNT * SLOT_WIDTH + (SLOT_COUNT - 1) * SLOT_GAP; // 1166px
const TRACK_START_X = (1920 - TOTAL_TRACK_WIDTH) / 2; // 377px

// Master Testcase Data
const MASTER_RAW_VALUES = [2, 1, 2, 0, 2, 1, 0, 1, 0, 2];
const TARGET_VALUES = [0, 0, 0, 1, 1, 1, 2, 2, 2, 2];

// Exact Spoken Value Triggers (Word Start Frames from sync/02-understand.json)
const MASTER_VALUE_TRIGGERS = [
  692, // M0: "Two?"
  715, // M1: "One."
  736, // M2: "Two."
  760, // M3: "Zero."
  785, // M4: "Two."
  808, // M5: "One."
  827, // M6: "Zero."
  852, // M7: "One."
  871, // M8: "Zero."
  886, // M9: "Two."
];

const TARGET_VALUE_TRIGGERS = [
  956,  // T0A: "0,"
  989,  // T0B: "0,"
  1013, // T0C: "0,"
  1034, // T1A: "1,"
  1057, // T1B: "1,"
  1073, // T1C: "1,"
  1090, // T2A: "2,"
  1109, // T2B: "2,"
  1130, // T2C: "2,"
  1148, // T2D: "2."
];

export const Scene02Understand: React.FC = () => {
  const frame = useCurrentFrame();

  // =========================================================================
  // ACT COORDINATION & TRACK MOTION
  // =========================================================================

  // Vertical placement of the Input Array Track
  // Solo state: Y: 430 (centered)
  // Act 3 (F359–F605): Glides to Y: 280 to leave generous space for Target Rail below
  // Act 4 (F605–F917): Returns to Y: 430 (hero center) for Master Example reveal
  // Act 5–7 (F917–F1840): Glides to Y: 300 for Target Output & Conditions
  // Act 8–9 (F1840–F2323): Returns to Y: 430 for Clue & Approach 1 handoff
  const inputTrackY = useMemo(() => {
    // Act 1 & 2 (F0–F359)
    if (frame < 359) return 430;

    // Act 3: Glides to Y: 280
    if (frame >= 359 && frame < 385) {
      return interpolate(frame, [359, 385], [430, 280], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
        easing: EASE,
      });
    }
    if (frame >= 385 && frame < 590) return 280;

    // Transition back to Y: 430 for Act 4
    if (frame >= 590 && frame < 615) {
      return interpolate(frame, [590, 615], [280, 430], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
        easing: EASE,
      });
    }
    if (frame >= 615 && frame < 917) return 430;

    // Act 5, 6, 7: Glides to Y: 220 for generous dual-rail spacing & condition clearance
    if (frame >= 917 && frame < 945) {
      return interpolate(frame, [917, 945], [430, 220], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
        easing: EASE,
      });
    }
    if (frame >= 945 && frame < 1840) return 220;

    // Act 8, 9: Returns to Y: 430
    if (frame >= 1840 && frame < 1875) {
      return interpolate(frame, [1840, 1875], [220, 430], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
        easing: EASE,
      });
    }
    return 430;
  }, [frame]);

  // Target Rail visibility & opacity
  const targetRailActive = (frame >= 359 && frame < 605) || (frame >= 917 && frame < 1840);
  const targetRailOpacity = useMemo(() => {
    if (frame >= 359 && frame < 605) {
      const enter = interpolate(frame, [359, 390], [0, 1], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
        easing: EASE,
      });
      const exit = interpolate(frame, [590, 605], [1, 0], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
        easing: EASE,
      });
      return frame >= 590 ? exit : enter;
    }
    if (frame >= 917 && frame < 1840) {
      const enter = interpolate(frame, [917, 945], [0, 1], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
        easing: EASE,
      });
      const dimFactor = interpolate(frame, [1169, 1200, 1467, 1486], [1, 0.35, 0.35, 1], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
        easing: EASE,
      });
      const exit = interpolate(frame, [1810, 1840], [1, 0], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
        easing: EASE,
      });
      if (frame >= 1810) return exit;
      return enter * dimFactor;
    }
    return 0;
  }, [frame]);

  // =========================================================================
  // ACT 1: EMPTY ARRAY DRAW ON "We are given an array," (F74–F112)
  // =========================================================================
  const emptySlotsRevealProgress = useMemo(() => {
    if (frame < 74) return 0;
    return interpolate(frame, [74, 112], [0, 1], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
      easing: EASE,
    });
  }, [frame]);

  // Baseline chalk guide before array appears
  const baselineProgress = useMemo(() => {
    if (frame < 25) return 0;
    return interpolate(frame, [25, 65], [0, 1], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
      easing: EASE,
    });
  }, [frame]);

  // =========================================================================
  // ACT 2: DOMAIN SHELF {0, 1, 2} (F140–F359)
  // =========================================================================
  const domainShelfOpacity = useMemo(() => {
    if (frame < 140) return 0;
    if (frame >= 140 && frame < 170) {
      return interpolate(frame, [140, 170], [0, 1], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
        easing: EASE,
      });
    }
    if (frame >= 170 && frame < 345) return 1;
    if (frame >= 345 && frame < 359) {
      return interpolate(frame, [345, 359], [1, 0], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
        easing: EASE,
      });
    }
    return 0;
  }, [frame]);

  // Domain token appearances
  const token0Visible = frame >= 253;
  const token1Visible = frame >= 289;
  const token2Visible = frame >= 317;

  // =========================================================================
  // ACT 3: THREE OUTPUT ORDER ZONES (F437–F590)
  // =========================================================================
  const zone0Active = frame >= 437 && frame < 605;
  const zone1Active = frame >= 503 && frame < 605;
  const zone2Active = frame >= 541 && frame < 605;

  const targetPartitions = useMemo<ArrayPartition[]>(() => {
    if (frame < 359 || frame >= 605) return [];
    const parts: ArrayPartition[] = [];
    if (zone0Active) {
      parts.push({
        id: "zone0",
        startIndex: 0,
        endIndex: 2,
        label: "ALL ZEROES FIRST (RED)",
        color: theme.warn,
        variant: "bracket",
      });
    }
    if (zone1Active) {
      parts.push({
        id: "zone1",
        startIndex: 3,
        endIndex: 5,
        label: "THEN ALL ONES (WHITE)",
        color: theme.chalkText,
        variant: "bracket",
      });
    }
    if (zone2Active) {
      parts.push({
        id: "zone2",
        startIndex: 6,
        endIndex: 9,
        label: "FINALLY ALL TWOS (BLUE)",
        color: theme.cyan,
        variant: "bracket",
      });
    }
    return parts;
  }, [frame, zone0Active, zone1Active, zone2Active]);

  // =========================================================================
  // ACT 4: INDEX ROW REVEAL (F605+)
  // =========================================================================
  const indexRowOpacity = useMemo(() => {
    if (frame < 605) return 0;
    return interpolate(frame, [605, 635], [0, 1], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
      easing: EASE,
    });
  }, [frame]);

  // =========================================================================
  // ACT 6: TWO CONDITIONS (F1169–F1486)
  // =========================================================================
  const conditionsActive = frame >= 1169 && frame < 1486;
  const cond1Active = frame >= 1232 && frame < 1350;
  const cond2Active = frame >= 1350 && frame < 1486;

  // Strike-out progress across sort(nums)
  const sortStrikeProgress = useMemo(() => {
    if (frame < 1401) return 0;
    return interpolate(frame, [1401, 1435], [0, 1], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
      easing: EASE,
    });
  }, [frame]);

  // =========================================================================
  // ACT 7: FOLLOW-UP CHALLENGE (F1486–F1840)
  // =========================================================================
  const followupActive = frame >= 1486 && frame < 1840;
  const sweepProgress = useMemo(() => {
    if (frame < 1550) return 0;
    return interpolate(frame, [1550, 1610], [0, 1], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
      easing: EASE,
    });
  }, [frame]);

  const constSpaceOpacity = useMemo(() => {
    if (frame < 1610) return 0;
    return interpolate(frame, [1610, 1640], [0, 1], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
      easing: EASE,
    });
  }, [frame]);

  const realChallengePop = useMemo(() => {
    if (frame < 1719) return 0;
    return interpolate(frame, [1719, 1745], [0, 1], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
      easing: EASE,
    });
  }, [frame]);

  // =========================================================================
  // ACT 8: KEY CLUE & RELATION CURVES (F1840–F2200)
  // =========================================================================
  const clueActive = frame >= 1840 && frame < 2200;
  const clueCurvesDraw = useMemo(() => {
    if (frame < 1940) return 0;
    return interpolate(frame, [1940, 2020], [0, 1], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
      easing: EASE,
    });
  }, [frame]);

  const clueUnderlineProgress = useMemo(() => {
    if (frame < 2086) return 0;
    return interpolate(frame, [2086, 2130], [0, 1], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
      easing: EASE,
    });
  }, [frame]);

  // =========================================================================
  // ACT 9: APPROACH 1 HANDOFF (F2200–F2323)
  // =========================================================================
  const handoffActive = frame >= 2200;
  const approachBadgeEnter = useMemo(() => {
    if (frame < 2234) return 0;
    return interpolate(frame, [2234, 2270], [0, 1], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
      easing: EASE,
    });
  }, [frame]);

  return (
    <AbsoluteFill
      style={{
        backgroundColor: theme.boardBg,
        fontFamily: fonts.sans,
        overflow: "hidden",
      }}
    >
      {/* Chalkboard Background & Filters */}
      <ChalkboardBackground />
      <ChalkFilters />

      {/* Voiceover Audio Track */}
      <Audio src={staticFile("audio/011/02-understand.mp3")} />

      {/* =================================================================== */}
      {/* TOP HEADER: Settled Q11 Identity from Scene 01                      */}
      {/* =================================================================== */}
      <div
        style={{
          position: "absolute",
          top: 90,
          left: TRACK_START_X,
          width: TOTAL_TRACK_WIDTH,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderBottom: "1.5px solid rgba(232, 228, 213, 0.25)",
          paddingBottom: 14,
          zIndex: 10,
        }}
      >
        <div style={{ display: "flex", alignItems: "baseline", gap: 16 }}>
          <span
            style={{
              fontFamily: fonts.mono,
              fontSize: 16,
              letterSpacing: "0.14em",
              color: theme.pivot,
              fontWeight: 700,
            }}
          >
            QUESTION 011
          </span>
          <span
            style={{
              fontFamily: fonts.hand,
              fontSize: 32,
              fontWeight: "bold",
              color: theme.chalkText,
              letterSpacing: "0.04em",
              textShadow: "0 0 10px rgba(255, 255, 255, 0.3)",
            }}
          >
            Sort Colors
          </span>
          <span
            style={{
              fontFamily: fonts.mono,
              fontSize: 15,
              color: theme.cyan,
              opacity: 0.9,
            }}
          >
            · Dutch National Flag
          </span>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div
            style={{
              padding: "4px 14px",
              borderRadius: 6,
              border: `1.5px solid ${theme.pivot}`,
              background: "rgba(255, 209, 102, 0.15)",
              fontFamily: fonts.mono,
              fontSize: 14,
              fontWeight: "bold",
              color: theme.pivot,
            }}
          >
            LC 75
          </div>
          <div
            style={{
              padding: "4px 14px",
              borderRadius: 6,
              border: `1.5px solid ${theme.pivot}`,
              background: "rgba(255, 209, 102, 0.22)",
              fontFamily: fonts.mono,
              fontSize: 14,
              fontWeight: "bold",
              color: theme.pivot,
            }}
          >
            MEDIUM
          </div>
        </div>
      </div>

      {/* =================================================================== */}
      {/* ACT 1: FAINT CHALK BASELINE GUIDE BEFORE ARRAY REVEALS              */}
      {/* =================================================================== */}
      {frame < 112 && baselineProgress > 0 && (
        <svg
          style={{
            position: "absolute",
            top: 430 + SLOT_HEIGHT + 10,
            left: TRACK_START_X,
            width: TOTAL_TRACK_WIDTH,
            height: 20,
            pointerEvents: "none",
            zIndex: 5,
          }}
        >
          <line
            x1={0}
            y1={10}
            x2={TOTAL_TRACK_WIDTH * baselineProgress}
            y2={10}
            stroke="rgba(248, 246, 240, 0.4)"
            strokeWidth={2}
            strokeDasharray="6 6"
          />
        </svg>
      )}

      {/* =================================================================== */}
      {/* ACT 2 / ACT 8: ALLOWED VALUES DOMAIN SHELF {0, 1, 2}               */}
      {/* =================================================================== */}
      {(domainShelfOpacity > 0 || clueActive) && (
        <div
          style={{
            position: "absolute",
            top: clueActive ? 210 : 240,
            left: (1920 - 560) / 2,
            width: 560,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            opacity: clueActive ? 1 : domainShelfOpacity,
            zIndex: 15,
          }}
        >
          <div
            style={{
              fontFamily: fonts.mono,
              fontSize: 15,
              letterSpacing: "0.18em",
              color: clueActive ? theme.pivot : theme.chalkText,
              textTransform: "uppercase",
              fontWeight: "bold",
              marginBottom: 12,
              textShadow: "0 2px 8px rgba(0,0,0,0.7)",
            }}
          >
            {clueActive ? "VALUE DOMAIN (THE CRITICAL CLUE)" : "ALLOWED VALUES (ONLY 3 POSSIBLE NUMBERS)"}
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 32,
              padding: "14px 40px",
              borderRadius: 16,
              background: "linear-gradient(180deg, #0F3526 0%, #071D14 100%)",
              border: `3px solid ${clueActive ? theme.pivot : "#FFFDF7"}`,
              boxShadow: clueActive
                ? "0 0 35px rgba(255, 209, 102, 0.45), 0 12px 32px rgba(0,0,0,0.75)"
                : "0 12px 32px rgba(0,0,0,0.65), inset 0 0 0 1px rgba(255,255,255,0.2)",
            }}
          >
            {[0, 1, 2].map((num) => {
              let isVisible = false;
              if (clueActive) isVisible = true;
              else {
                if (num === 0 && token0Visible) isVisible = true;
                if (num === 1 && token1Visible) isVisible = true;
                if (num === 2 && token2Visible) isVisible = true;
              }

              const tokenColor = num === 0 ? theme.warn : num === 1 ? theme.chalkText : theme.cyan;
              const colorLabel = num === 0 ? "RED" : num === 1 ? "WHITE" : "BLUE";

              return (
                <div
                  key={num}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 18,
                    opacity: isVisible ? 1 : 0.25,
                    transform: isVisible ? "scale(1)" : "scale(0.85)",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: 6,
                    }}
                  >
                    <div
                      style={{
                        width: 68,
                        height: 68,
                        borderRadius: 14,
                        background: isVisible
                          ? num === 0
                            ? "linear-gradient(180deg, rgba(255,118,117,0.25) 0%, rgba(200,50,50,0.15) 100%)"
                            : num === 1
                            ? "linear-gradient(180deg, rgba(248,246,240,0.20) 0%, rgba(180,180,180,0.10) 100%)"
                            : "linear-gradient(180deg, rgba(92,225,230,0.25) 0%, rgba(30,140,160,0.15) 100%)"
                          : "rgba(10, 35, 24, 0.5)",
                        border: isVisible
                          ? `3px solid ${tokenColor}`
                          : "2px dashed rgba(248, 246, 240, 0.35)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontFamily: fonts.mono,
                        fontSize: 40,
                        fontWeight: 800,
                        color: isVisible ? tokenColor : theme.chalkDim,
                        boxShadow: isVisible
                          ? `0 6px 16px rgba(0,0,0,0.6), 0 0 18px ${tokenColor}66`
                          : "none",
                      }}
                    >
                      {num}
                    </div>
                    <span
                      style={{
                        fontFamily: fonts.mono,
                        fontSize: 12,
                        letterSpacing: "0.12em",
                        fontWeight: "bold",
                        color: isVisible ? tokenColor : theme.chalkDim,
                      }}
                    >
                      {colorLabel}
                    </span>
                  </div>
                  {num < 2 && (
                    <span
                      style={{
                        fontFamily: fonts.mono,
                        fontSize: 26,
                        color: theme.chalkDim,
                        fontWeight: "bold",
                        marginBottom: 16,
                      }}
                    >
                      ·
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* =================================================================== */}
      {/* ACT 8: SVG CHALK RELATION CURVES FROM ARRAY TO DOMAIN               */}
      {/* =================================================================== */}
      {clueActive && clueCurvesDraw > 0 && (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 1920,
            height: 1080,
            pointerEvents: "none",
            zIndex: 14,
          }}
        >
          {/* Curve from Slot 3 (val 0, Red) up to Domain 0 (Red) */}
          <RoughCurve
            points={[
              [746, 430],
              [778, 380],
              [810, 330],
            ]}
            width={1920}
            height={1080}
            startFrame={1940}
            durationInFrames={40}
            stroke={theme.warn}
            strokeWidth={3.5}
            seed={11}
          />
          {/* Curve from Slot 1 (val 1, White) up to Domain 1 (White) */}
          <RoughCurve
            points={[
              [510, 430],
              [735, 380],
              [960, 330],
            ]}
            width={1920}
            height={1080}
            startFrame={1960}
            durationInFrames={40}
            stroke={theme.chalkText}
            strokeWidth={3.5}
            seed={22}
          />
          {/* Curve from Slot 0 (val 2, Blue) up to Domain 2 (Blue) */}
          <RoughCurve
            points={[
              [429, 430],
              [770, 380],
              [1110, 330],
            ]}
            width={1920}
            height={1080}
            startFrame={1980}
            durationInFrames={40}
            stroke={theme.cyan}
            strokeWidth={3.5}
            seed={33}
          />
        </div>
      )}

      {/* =================================================================== */}
      {/* MASTER INPUT ARRAY TRACK (Hero Center, Y: inputTrackY)             */}
      {/* =================================================================== */}
      {frame >= 74 && (
        <div
          style={{
            position: "absolute",
            top: inputTrackY,
            left: TRACK_START_X,
            width: TOTAL_TRACK_WIDTH,
            zIndex: 10,
            opacity: interpolate(frame, [74, 95], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: EASE,
            }),
          }}
        >
          {/* Track Label */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: 12,
              paddingLeft: 4,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
              <span
                style={{
                  fontFamily: fonts.mono,
                  fontSize: 16,
                  letterSpacing: "0.14em",
                  color: theme.cyan,
                  fontWeight: "bold",
                }}
              >
                {frame >= 605 ? "MASTER INPUT ARRAY" : "INPUT ARRAY"}
              </span>
              <span
                style={{
                  fontFamily: fonts.mono,
                  fontSize: 14,
                  color: theme.chalkDim,
                  fontWeight: 600,
                }}
              >
                nums [10 elements]
              </span>
            </div>
          </div>

          {/* Master Array Track via Foundation V2 ArrayTrackV2 */}
          <ArrayTrackV2
            elements={Array.from({ length: SLOT_COUNT }).map((_, i) => {
              const slotFraction = i / SLOT_COUNT;
              const isSlotVisible = emptySlotsRevealProgress >= slotFraction;
              if (!isSlotVisible) {
                return { value: "", slotState: "default" };
              }

              const triggerFrame = MASTER_VALUE_TRIGGERS[i];
              const isValueWritten = frame >= triggerFrame;
              const writeAge = frame - triggerFrame;
              const isWritingNow = isValueWritten && writeAge < 16;
              const val = MASTER_RAW_VALUES[i];

              // Semantic color mapping for Sort Colors:
              // 0 = Coral Red (theme.warn)
              // 1 = Warm White (theme.chalkText)
              // 2 = Ice Cyan / Blue (theme.cyan)
              const stroke = isValueWritten
                ? isWritingNow
                  ? theme.pivot
                  : val === 0
                  ? theme.warn
                  : val === 1
                  ? "rgba(248, 246, 240, 0.85)"
                  : theme.cyan
                : "rgba(248, 246, 240, 0.45)";

              const fill = isValueWritten
                ? val === 0
                  ? "rgba(255, 118, 117, 0.16)"
                  : val === 1
                  ? "rgba(248, 246, 240, 0.10)"
                  : "rgba(92, 225, 230, 0.16)"
                : "transparent";

              return {
                value: isValueWritten ? val : "",
                slotState: isWritingNow ? "current" : "default",
                valueState: isWritingNow ? "current" : "default",
                stroke,
                fill,
              };
            })}
            renderValue={(item, rect) => {
              if (item.value === "" || item.value === undefined) return null;
              const valNum = Number(item.value);
              const color = valNum === 0 ? theme.warn : valNum === 1 ? theme.chalkText : theme.cyan;
              const triggerFrame = MASTER_VALUE_TRIGGERS[rect.index];
              const writeAge = frame - triggerFrame;
              const scale = writeAge < 16
                ? interpolate(writeAge, [0, 8, 16], [0.7, 1.25, 1.0], {
                    extrapolateLeft: "clamp",
                    extrapolateRight: "clamp",
                  })
                : 1.0;

              return (
                <ArrayValueV2
                  key={`val-${rect.index}`}
                  value={item.value}
                  x={rect.centerX}
                  y={rect.centerY}
                  fontSize={44}
                  color={color}
                  scale={scale}
                />
              );
            }}
            slotWidth={SLOT_WIDTH}
            slotHeight={SLOT_HEIGHT}
            gap={SLOT_GAP}
            showIndices={indexRowOpacity > 0}
            indexPlacement="bottom"
            indexFormat="i"
          />

        {/* Act 7: Follow-up Single Sweep Tracer Beam under Array (S4 TRACE_PATH) */}
        {followupActive && sweepProgress > 0 && (
          <div
            style={{
              position: "absolute",
              left: 0,
              bottom: -32,
              width: TOTAL_TRACK_WIDTH,
              height: 8,
              borderRadius: 4,
              background: "rgba(232, 228, 213, 0.25)",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                width: `${sweepProgress * 100}%`,
                height: "100%",
                background: theme.cyan,
                boxShadow: `0 0 20px ${theme.cyan}`,
              }}
            />
          </div>
        )}
      </div>
    )}

      {/* =================================================================== */}
      {/* TARGET REQUIREMENT RAIL (Y: 540 .. 680)                             */}
      {/* =================================================================== */}
      {targetRailActive && (
        <div
          style={{
            position: "absolute",
            top: frame < 605 ? 460 : 540,
            left: TRACK_START_X,
            width: TOTAL_TRACK_WIDTH,
            opacity: targetRailOpacity,
            zIndex: 10,
          }}
        >
          {/* Target Track Label */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: 12,
              paddingLeft: 4,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
              <span
                style={{
                  fontFamily: fonts.mono,
                  fontSize: 16,
                  letterSpacing: "0.14em",
                  color: theme.pivot,
                  fontWeight: "bold",
                }}
              >
                TARGET REQUIREMENT
              </span>
              {frame >= 917 && (
                <span
                  style={{
                    fontFamily: fonts.mono,
                    fontSize: 14,
                    color: theme.chalkDim,
                    fontWeight: 600,
                  }}
                >
                  sorted non-decreasing order [0s first, then 1s, then 2s]
                </span>
              )}
            </div>
          </div>

          {/* Target Requirement Rail via Foundation V2 ArrayTrackV2 */}
          <ArrayTrackV2
            elements={Array.from({ length: SLOT_COUNT }).map((_, i) => {
              const targetTrigger = TARGET_VALUE_TRIGGERS[i];
              const isTargetWritten = frame >= targetTrigger && frame >= 917;
              const writeAge = frame - targetTrigger;
              const isWritingNow = isTargetWritten && writeAge < 14;
              const targetVal = TARGET_VALUES[i];

              const stroke = isTargetWritten
                ? isWritingNow
                  ? theme.pivot
                  : targetVal === 0
                  ? theme.warn
                  : targetVal === 1
                  ? "rgba(248, 246, 240, 0.85)"
                  : theme.cyan
                : "rgba(248, 246, 240, 0.45)";

              const fill = isTargetWritten
                ? targetVal === 0
                  ? "rgba(255, 118, 117, 0.18)"
                  : targetVal === 1
                  ? "rgba(248, 246, 240, 0.12)"
                  : "rgba(92, 225, 230, 0.18)"
                : "transparent";

              return {
                value: isTargetWritten ? targetVal : "",
                slotState: isTargetWritten
                  ? isWritingNow
                    ? "current"
                    : "confirmed"
                  : "default",
                valueState: isTargetWritten ? "current" : "default",
                stroke,
                fill,
              };
            })}
            renderValue={(item, rect) => {
              if (item.value === "" || item.value === undefined) return null;
              const valNum = Number(item.value);
              const color = valNum === 0 ? theme.warn : valNum === 1 ? theme.chalkText : theme.cyan;
              const triggerFrame = TARGET_VALUE_TRIGGERS[rect.index];
              const writeAge = frame - triggerFrame;
              const scale = writeAge < 14
                ? interpolate(writeAge, [0, 7, 14], [0.7, 1.2, 1.0], {
                    extrapolateLeft: "clamp",
                    extrapolateRight: "clamp",
                  })
                : 1.0;

              return (
                <ArrayValueV2
                  key={`val-target-${rect.index}`}
                  value={item.value}
                  x={rect.centerX}
                  y={rect.centerY}
                  fontSize={44}
                  color={color}
                  scale={scale}
                />
              );
            }}
            slotWidth={SLOT_WIDTH}
            slotHeight={SLOT_HEIGHT}
            gap={SLOT_GAP}
            showIndices={false}
            partitions={targetPartitions}
          />
        </div>
      )}

      {/* =================================================================== */}
      {/* ACT 6: TWO CONDITIONS (Chalk In-Place Link + No Built-In Sort)     */}
      {/* =================================================================== */}
      {conditionsActive && (
        <>
          {/* Visual In-Place Relation Loop Bracket connecting Input & Target */}
          {cond1Active && (
            <div
              style={{
                position: "absolute",
                top: 442,
                left: (1920 - 520) / 2,
                width: 520,
                padding: "10px 24px",
                borderRadius: 12,
                background: "linear-gradient(180deg, #103426 0%, #082016 100%)",
                border: `2.5px solid ${theme.pivot}`,
                boxShadow: "0 0 30px rgba(255, 209, 102, 0.45), 0 8px 24px rgba(0,0,0,0.6)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 14,
                zIndex: 20,
              }}
            >
              <div
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: "50%",
                  background: theme.pivot,
                  color: theme.boardBg,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: fonts.mono,
                  fontWeight: "bold",
                  fontSize: 18,
                }}
              >
                1
              </div>
              <span
                style={{
                  fontFamily: fonts.mono,
                  fontSize: 15,
                  fontWeight: "bold",
                  color: theme.pivot,
                  letterSpacing: "0.08em",
                }}
              >
                IN-PLACE MODIFICATION: SAME ARRAY MEMORY
              </span>
            </div>
          )}

          {/* Condition 2: No Built-in Sort Badge */}
          {cond2Active && (
            <div
              style={{
                position: "absolute",
                top: 442,
                left: (1920 - 560) / 2,
                width: 560,
                padding: "10px 24px",
                borderRadius: 12,
                background: "linear-gradient(180deg, #103426 0%, #082016 100%)",
                border: `2.5px solid ${theme.warn}`,
                boxShadow: "0 0 30px rgba(239, 71, 111, 0.45), 0 8px 24px rgba(0,0,0,0.6)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 18,
                zIndex: 20,
              }}
            >
              <div
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: "50%",
                  background: theme.warn,
                  color: theme.chalkText,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: fonts.mono,
                  fontWeight: "bold",
                  fontSize: 18,
                }}
              >
                2
              </div>

              <div style={{ position: "relative", display: "inline-block" }}>
                <span
                  style={{
                    fontFamily: fonts.mono,
                    fontSize: 22,
                    fontWeight: "bold",
                    color: theme.warn,
                    background: "rgba(0,0,0,0.35)",
                    padding: "3px 12px",
                    borderRadius: 6,
                  }}
                >
                  sort(nums)
                </span>
                {/* Rough Red Strike */}
                {sortStrikeProgress > 0 && (
                  <div
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: -8,
                      width: `${sortStrikeProgress * 115}%`,
                      height: 4,
                      backgroundColor: theme.warn,
                      transform: "rotate(-6deg)",
                      borderRadius: 2,
                      boxShadow: `0 0 12px ${theme.warn}`,
                    }}
                  />
                )}
              </div>

              <span
                style={{
                  fontFamily: fonts.mono,
                  fontSize: 15,
                  fontWeight: "bold",
                  color: theme.chalkText,
                  letterSpacing: "0.06em",
                }}
              >
                NO BUILT-IN SORT ALLOWED
              </span>
            </div>
          )}
        </>
      )}

      {/* =================================================================== */}
      {/* ACT 7: FOLLOW-UP CHALLENGE (One Pass + Constant Space)              */}
      {/* =================================================================== */}
      {followupActive && (
        <div
          style={{
            position: "absolute",
            top: 700,
            left: TRACK_START_X,
            width: TOTAL_TRACK_WIDTH,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            zIndex: 15,
          }}
        >
          {/* Challenge Part 1: One Pass */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 16,
              padding: "14px 28px",
              borderRadius: 14,
              background: "linear-gradient(180deg, #103426 0%, #082016 100%)",
              border: `3px solid ${theme.good}`,
              boxShadow: "0 10px 28px rgba(0,0,0,0.65)",
            }}
          >
            <span
              style={{
                fontFamily: fonts.mono,
                fontSize: 18,
                fontWeight: "bold",
                color: theme.good,
                letterSpacing: "0.1em",
              }}
            >
              1 PASS
            </span>
            <span
              style={{
                fontFamily: fonts.mono,
                fontSize: 14,
                color: theme.chalkText,
              }}
            >
              single scan through array elements
            </span>
          </div>

          {/* Real Challenge Center Banner */}
          {realChallengePop > 0 && (
            <div
              style={{
                padding: "8px 20px",
                borderRadius: 8,
                background: "rgba(255, 209, 102, 0.22)",
                border: `1.5px solid ${theme.pivot}`,
                fontFamily: fonts.mono,
                fontSize: 13,
                fontWeight: "bold",
                color: theme.pivot,
                letterSpacing: "0.12em",
                transform: `scale(${realChallengePop})`,
              }}
            >
              THE REAL CHALLENGE
            </div>
          )}

          {/* Challenge Part 2: O(1) Extra Space */}
          {constSpaceOpacity > 0 && (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 16,
                padding: "14px 28px",
                borderRadius: 14,
                background: "linear-gradient(180deg, #103426 0%, #082016 100%)",
                border: `3px solid ${theme.pivot}`,
                boxShadow: "0 10px 28px rgba(0,0,0,0.65)",
                opacity: constSpaceOpacity,
              }}
            >
              <span
                style={{
                  fontFamily: fonts.mono,
                  fontSize: 18,
                  fontWeight: "bold",
                  color: theme.pivot,
                  letterSpacing: "0.1em",
                }}
              >
                O(1) SPACE
              </span>
              <span
                style={{
                  fontFamily: fonts.mono,
                  fontSize: 14,
                  color: theme.chalkText,
                }}
              >
                constant extra memory only
              </span>
            </div>
          )}
        </div>
      )}

      {/* =================================================================== */}
      {/* ACT 8: MAIN CLUE BANNER (F2070–F2200)                               */}
      {/* =================================================================== */}
      {clueActive && clueUnderlineProgress > 0 && (
        <div
          style={{
            position: "absolute",
            bottom: 180,
            left: (1920 - 640) / 2,
            width: 640,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            zIndex: 20,
          }}
        >
          <div
            style={{
              fontFamily: fonts.mono,
              fontSize: 18,
              fontWeight: 800,
              color: theme.pivot,
              letterSpacing: "0.16em",
              textShadow: "0 0 16px rgba(255, 209, 102, 0.6)",
              marginBottom: 8,
            }}
          >
            ★ THE MAIN CLUE: ONLY 3 UNIQUE VALUES {`{0, 1, 2}`}
          </div>
          {/* Chalk Underline */}
          <div
            style={{
              width: `${clueUnderlineProgress * 100}%`,
              height: 3.5,
              background: theme.pivot,
              boxShadow: "0 0 12px rgba(255, 209, 102, 0.8)",
              borderRadius: 2,
            }}
          />
        </div>
      )}

      {/* =================================================================== */}
      {/* ACT 9: APPROACH 1 HANDOFF BADGE (F2200–F2323)                       */}
      {/* =================================================================== */}
      {handoffActive && approachBadgeEnter > 0 && (
        <div
          style={{
            position: "absolute",
            bottom: 180,
            left: (1920 - 520) / 2,
            width: 520,
            padding: "16px 36px",
            borderRadius: 16,
            background: "linear-gradient(180deg, #103426 0%, #082016 100%)",
            border: `3px solid ${theme.cyan}`,
            boxShadow: "0 0 35px rgba(86, 204, 242, 0.4), 0 12px 32px rgba(0,0,0,0.7)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            opacity: approachBadgeEnter,
            transform: `scale(${0.9 + 0.1 * approachBadgeEnter})`,
            zIndex: 25,
          }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span
              style={{
                fontFamily: fonts.mono,
                fontSize: 14,
                letterSpacing: "0.16em",
                color: theme.cyan,
                fontWeight: "bold",
              }}
            >
              NEXT STAGE
            </span>
            <span
              style={{
                fontFamily: fonts.mono,
                fontSize: 24,
                fontWeight: 800,
                color: "#FFFFFF",
                letterSpacing: "0.06em",
              }}
            >
              APPROACH 1 · COUNTING
            </span>
          </div>

          <div
            style={{
              padding: "6px 16px",
              borderRadius: 8,
              background: "rgba(86, 204, 242, 0.15)",
              border: `1.5px solid ${theme.cyan}`,
              fontFamily: fonts.mono,
              fontSize: 13,
              fontWeight: "bold",
              color: theme.cyan,
              letterSpacing: "0.1em",
            }}
          >
            TWO PASSES
          </div>
        </div>
      )}

      {/* =================================================================== */}
      {/* BOTTOM CAPTIONS (Synced to sync/02-understand.json)                 */}
      {/* =================================================================== */}
      <Captions words={captionWords} />
    </AbsoluteFill>
  );
};
