/**
 * Scene01Intro.tsx — Scene 01 · INTRO / ROADMAP
 * Longest Consecutive Sequence (LC #128) · Pattern 01 — Arrays & Hashing
 *
 * Implements the continuous chalkboard Master Roadmap UI & Scene 02 Handoff:
 * - Master Roadmap UI Architecture matching 009 (Valid Sudoku)
 * - Act 0 (F0–F52): "Welcome back."
 *     Previous lesson end-state: 8 / 227 COMPLETE, Pattern 01 8 / 18, Row 009 (Valid Sudoku) NOW ACTIVE, Row 010 FUTURE.
 * - Act 1 (F53–F330): "We are continuing our complete DSA roadmap of 227 problems, pattern by pattern."
 *     Chalk continuation underline draws under DSA PATTERN ROADMAP (F69), 227 PROBLEMS spotlight (F189),
 *     19 Course Patterns list reveal (F275).
 * - Act 2 (F331–F451): "Right now, we are inside arrays and hashing."
 *     Focus onto Pattern 01 (Arrays & Hashing) in left sidebar and main pattern header.
 * - Act 3 (F452–F521): "Nine questions are complete."
 *     Row 009 (Valid Sudoku) morphs from NOW ACTIVE to completed checkmark (✓);
 *     Top badge rolls 8 -> 9 / 227 COMPLETE, header rolls 8 -> 9 / 18 COMPLETED.
 * - Act 4 (F522–F635): "In the previous question, we finished Valid Sudoku."
 *     Focus isolates completed row 009; title underline and metadata confirmation.
 * - Act 5 (F636–F798): "Now, question number 10, longest consecutive sequence."
 *     Right progress rail advances 009 -> 010; Row 010 outline draws on with gold SVG stroke;
 *     Title words light up progressively: Longest -> Consecutive -> Sequence; NOW ACTIVE badge appears.
 * - Act 6 (F799–F879): "LeetCode 128, Medium."
 *     LC 128 metadata underline writes; MEDIUM difficulty badge activates with warm sheen.
 * - Act 7 (F880–F1116): "The input is unsorted, but we still need to find the longest run of consecutive values."
 *     Row 010 physically lifts out and morphs into problem stage; 12 empty array slot shells appear with
 *     subtle disorder offsets; callout: LONGEST RUN OF CONSECUTIVE VALUES = ?
 * - Act 8 (F1117–F1186): "And the target is linear time."
 *     Target badge draws in: TARGET O(n) · LINEAR TIME with ascending linear graph curve.
 * - Act 9 (F1187–F1290): "Before code, first understand the question."
 *     Ghost code editor appears (F1201), gets diagonal coral chalk rejection strike (F1217);
 *     UNDERSTAND FIRST callout (F1250); slot offsets settle to 0, handing off 12 clean empty slots to Scene 02.
 *
 * Audio: audio/010/01-intro-roadmap.mp3
 * Total duration: 1291 frames @ 30fps (43.020s)
 */
import React, { useMemo } from "react";
import {
  AbsoluteFill,
  Audio,
  Sequence,
  useCurrentFrame,
  interpolate,
  staticFile,
} from "remotion";

import { ChalkboardBackground, ChalkFilters } from "../../../../kit/lib/chalk";
import { theme, fonts } from "../../../../kit/lib/theme";
import { EASE, fadeIn, pop } from "../../../../kit/lib/anim";
import { RoughBox } from "../../../../kit/components/RoughBox";
import { RoughLine } from "../../../../kit/components/RoughLine";
import { ChalkDust } from "../../../../kit/components/ChalkDust";
import { CountUp } from "../../../../kit/components/CountUp";
import { Captions, CaptionWord } from "../../../../kit/components/Captions";
import { PATTERNS_DATA } from "./roadmapData";
import syncData from "../sync/01-intro-roadmap.json";

// ---------------------------------------------------------------------------
// Word-level Caption Timings (from sync/01-intro-roadmap.json)
// ---------------------------------------------------------------------------
const captionWords: CaptionWord[] = syncData.words.map((w: any) => {
  let word = w.word;
  if (word === "Lead") word = "LeetCode";
  if (word === "code" && syncData.words.find((prev: any) => prev.word === "Lead" && Math.abs(prev.end_frame - w.start_frame) <= 2)) {
    word = "";
  }
  return {
    word,
    start: w.start_ms / 1000,
    end: w.end_ms / 1000,
  };
}).filter((w) => w.word !== "");

// Fixed 12 array slot coordinates for Acts 7–9 (optical center matches Scene 02)
const SLOT_COUNT = 12;
const SLOT_WIDTH = 92;
const SLOT_HEIGHT = 104;
const SLOT_GAP = 18;
const TOTAL_ROW_WIDTH = SLOT_COUNT * SLOT_WIDTH + (SLOT_COUNT - 1) * SLOT_GAP; // 1302px
const SLOTS_START_X = (1920 - TOTAL_ROW_WIDTH) / 2; // 309px
const SLOTS_BASE_Y = 440;

export const Scene01Intro: React.FC = () => {
  const frame = useCurrentFrame();

  // =========================================================================
  // CAMERA ENGINE (Subtle pan/zoom strictly matching plan)
  // =========================================================================
  const { camScale, camX, camY } = useMemo(() => {
    // Act 0 (F0–F52): Slight settle from 1.008 -> 1.000, then gentle 2% pull back on pause
    if (frame < 53) {
      const settle = interpolate(frame, [0, 13], [1.008, 1.0], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
        easing: EASE,
      });
      const pull = interpolate(frame, [28, 52], [0, -0.015], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
        easing: EASE,
      });
      return { camScale: settle + pull, camX: 0, camY: 0 };
    }

    // Act 1 (F53–F330): Full shell overview, ease outward ~2%
    if (frame < 306) {
      const zoom = interpolate(frame, [82, 120], [0.985, 0.98], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
        easing: EASE,
      });
      return { camScale: zoom, camX: 0, camY: 0 };
    }

    // Act 1 to Act 2 pause (F306–F331): Push gently toward Pattern 01
    if (frame < 356) {
      const push = interpolate(frame, [306, 331], [0.98, 1.01], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
        easing: EASE,
      });
      const panX = interpolate(frame, [306, 331], [0, 15], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
        easing: EASE,
      });
      return { camScale: push, camX: panX, camY: 0 };
    }

    // Act 2–3 (F331–F521): Settle on Pattern 01
    if (frame < 522) {
      return { camScale: 1.0, camX: 10, camY: 0 };
    }

    // Act 4 (F522–F635): Nudge into Rows 008–010 (Valid Sudoku focus)
    if (frame < 636) {
      const zoomIn = interpolate(frame, [522, 550], [1.0, 1.03], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
        easing: EASE,
      });
      const panY = interpolate(frame, [522, 550], [0, -12], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
        easing: EASE,
      });
      return { camScale: zoomIn, camX: 10, camY: panY };
    }

    // Act 5–6 (F636–F879): Ease down toward row 010
    if (frame < 880) {
      const zoomBack = interpolate(frame, [636, 660], [1.03, 1.0], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
        easing: EASE,
      });
      const panY = interpolate(frame, [636, 660], [-12, 0], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
        easing: EASE,
      });
      return { camScale: zoomBack, camX: 0, camY: panY };
    }

    // Act 7–9 (F880–F1291): Fixed canvas for row lift-out & Scene 02 handoff
    return { camScale: 1.0, camX: 0, camY: 0 };
  }, [frame]);

  // =========================================================================
  // ACT 0 & 1: CONTINUATION & 227 OVERVIEW
  // =========================================================================
  const isContinuationUnderline = frame >= 69 && frame < 180;
  const is227Spotlight = frame >= 189 && frame < 275;
  const isRailBright = frame >= 239 && frame < 306;
  const isSidebarSweep = frame >= 275 && frame < 331;
  const sidebarSweepProgress = interpolate(frame, [275, 306], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Top Bar count steps (227)
  const countUp227 = useMemo(
    () => [
      { frame: 0, value: 227 },
      { frame: 189, value: 227 },
    ],
    []
  );

  // =========================================================================
  // ACT 2: PATTERN 01 FOCUS
  // =========================================================================
  const isPattern01Active = frame >= 331 && frame < 880;
  const isArraysBright = frame >= 389;
  const isHashingBright = frame >= 415;

  // =========================================================================
  // ACT 3: NINE QUESTIONS ARE COMPLETE (F452–F521)
  // State transition: 8 -> 9
  // =========================================================================
  const isQ009ActiveInitial = frame < 463;
  const q009TransitionProgress = interpolate(frame, [463, 485], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: EASE,
  });
  // Checkmark SVG draw on row 009
  const q009CheckDrawProgress = interpolate(frame, [489, 506], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: EASE,
  });

  // Global & Pattern Counters flip 8 -> 9
  const isCounterFlippedGlobal = frame >= 493;
  const globalCountPulse = isCounterFlippedGlobal ? pop(frame, 493, 20, 1.25) : 1.0;

  const isCounterFlippedPattern = frame >= 499;
  const patternCountPulse = isCounterFlippedPattern ? pop(frame, 499, 20, 1.25) : 1.0;

  // =========================================================================
  // ACT 4: CONFIRM PREVIOUS QUESTION: VALID SUDOKU (F522–F635)
  // =========================================================================
  const isAct4Focus = frame >= 522 && frame < 636;
  const isQ009Underline = frame >= 592 && frame < 636;
  const isQ009MetaBright = frame >= 604 && frame < 636;

  // =========================================================================
  // ACT 5 & 6: ACTIVATE QUESTION 10 (F636–F879)
  // =========================================================================
  // Rail indicator movement 009 -> 010 (F636–F699)
  const railIndicatorPos = useMemo(() => {
    if (frame < 636) return 88; // Problem 009 rail position
    return interpolate(frame, [636, 699], [88, 102], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
      easing: EASE,
    });
  }, [frame]);

  // Row 010 activation
  const isRow010Activating = frame >= 652;
  const row010BorderWriteProgress = interpolate(frame, [671, 705], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: EASE,
  });
  const isRow010NowActive = frame >= 699;
  const isTagNowActiveVisible = frame >= 711;

  // Word-by-word title reveal for Q10
  const isLongestBright = frame >= 728;
  const isConsecutiveBright = frame >= 740;
  const isSequenceBright = frame >= 763;

  // LC 128 & MEDIUM (F799–F879)
  const isLC128Underline = frame >= 817 && frame < 880;
  const isMediumActive = frame >= 869;

  // =========================================================================
  // ACT 7: ROW 010 LIFTS OUT & PROBLEM STAGE MORPH (F880–F1116)
  // =========================================================================
  const isRowLifted = frame >= 880;
  const liftProgress = interpolate(frame, [880, 915], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: EASE,
  });

  // Background roadmap fade during lift-out (dim to ~18%)
  const roadmapShellOpacity = useMemo(() => {
    if (frame < 880) return 1.0;
    if (frame < 1270) {
      return interpolate(frame, [880, 915], [1.0, 0.18], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
      });
    }
    // Fade out completely before Scene 02 handoff
    return interpolate(frame, [1270, 1290], [0.18, 0], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    });
  }, [frame]);

  // Expanded Q10 Hero Stage Bounds
  const heroCardY = interpolate(liftProgress, [0, 1], [310, 90]);
  const heroCardHeight = interpolate(liftProgress, [0, 1], [58, 190]);

  // 12 Empty Array Slots disorder settling to 0
  const isSlotsVisible = frame >= 905;
  const slotsFade = fadeIn(frame, 905, 18);
  const disorderFactor = useMemo(() => {
    if (frame < 905) return 0;
    if (frame < 1250) return 1.0;
    return interpolate(frame, [1250, 1279], [1.0, 0], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
      easing: EASE,
    });
  }, [frame]);

  // Goal Callout: LONGEST RUN OF CONSECUTIVE VALUES = ?
  const isGoalCalloutVisible = frame >= 998 && frame < 1240;
  const isLongestWord = frame >= 1024;
  const isRunWord = frame >= 1035;
  const isOfWord = frame >= 1048;
  const isConsecutiveWord = frame >= 1061;
  const isValuesQuestion = frame >= 1082;

  // =========================================================================
  // ACT 8: TARGET LINEAR TIME O(n) (F1117–F1186)
  // =========================================================================
  const isTargetVisible = frame >= 1124 && frame < 1240;
  const targetDrawProgress = interpolate(frame, [1124, 1150], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: EASE,
  });
  const isLinearTimeWord = frame >= 1159;

  // =========================================================================
  // ACT 9: CODE REJECTION & SCENE 02 HANDOFF (F1187–F1291)
  // =========================================================================
  const isGhostEditorVisible = frame >= 1201 && frame < 1245;
  const isCodeStrike = frame >= 1217;
  const strikeProgress = interpolate(frame, [1217, 1238], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: EASE,
  });

  const isUnderstandFirstVisible = frame >= 1250;
  const understandFirstOpacity = useMemo(() => {
    if (frame < 1250) return 0;
    if (frame < 1275) return fadeIn(frame, 1250, 15);
    // Compresses upward and fades out by F1285 for pristine Scene 02 handoff
    return interpolate(frame, [1275, 1285], [1, 0], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    });
  }, [frame]);
  const understandFirstY = interpolate(frame, [1250, 1285], [320, 290], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: EASE,
  });

  return (
    <AbsoluteFill style={{ backgroundColor: theme.boardBg, overflow: "hidden" }}>
      {/* Chalkboard Texture Base */}
      <ChalkboardBackground />
      <ChalkFilters />

      {/* Voiceover Narration Track */}
      <Sequence name="audio-vo" from={0}>
        <Audio src={staticFile("audio/010/01-intro-roadmap.mp3")} name="VO 01" />
      </Sequence>

      {/* Main Virtual Camera Wrapper */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          transform: `scale(${camScale}) translate(${camX}px, ${camY}px)`,
          transformOrigin: "center 480px",
          width: 1920,
          height: 1080,
        }}
      >
        {/* =================================================================== */}
        {/* MASTER ROADMAP UI SHELL (Fades to 18% during Act 7–8, 0% at F1290) */}
        {/* =================================================================== */}
        <div style={{ position: "absolute", inset: 0, opacity: roadmapShellOpacity, pointerEvents: "none" }}>
          {/* ----------------------------------------------------------------- */}
          {/* PERSISTENT STICKY TOP BAR (x: 56, top: 28, width: 1808, height: 76)*/}
          {/* ----------------------------------------------------------------- */}
          <div
            style={{
              position: "absolute",
              left: 56,
              top: 28,
              width: 1808,
              height: 76,
              backgroundColor: "rgba(25, 82, 60, 0.92)",
              borderBottom: "2px solid rgba(232, 228, 213, 0.35)",
              borderRadius: 8,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "0 28px",
              zIndex: 50,
              boxShadow: "0 4px 20px rgba(0, 0, 0, 0.35)",
            }}
          >
            {/* Brand Left */}
            <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
              <span
                style={{
                  fontFamily: fonts.hand,
                  fontSize: 34,
                  color: theme.chalkText,
                  fontWeight: "bold",
                  letterSpacing: 1.5,
                  textShadow: "0 2px 4px rgba(0,0,0,0.6)",
                }}
              >
                CODE WITH ANIMATION
              </span>
            </div>

            {/* Center Title with Animated RoughLine Underline */}
            <div style={{ textAlign: "center", position: "relative" }}>
              <span
                style={{
                  fontFamily: fonts.mono,
                  fontSize: 22,
                  letterSpacing: 3,
                  color: theme.chalkText,
                  fontWeight: "bold",
                  textShadow: "0 2px 4px rgba(0,0,0,0.5)",
                }}
              >
                DSA PATTERN ROADMAP
              </span>
              {isContinuationUnderline && (
                <div style={{ position: "absolute", left: 0, bottom: -8, width: "100%", height: 6 }}>
                  <RoughLine
                    shape={{ kind: "line", x1: 0, y1: 3, x2: 295, y2: 3 }}
                    width={300}
                    height={6}
                    startFrame={69}
                    durationInFrames={25}
                    stroke={theme.cyan}
                    strokeWidth={2.5}
                    seed={14}
                  />
                </div>
              )}
            </div>

            {/* Right Stats & Live Course Completion */}
            <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
              <div style={{ position: "relative" }}>
                <span
                  style={{
                    fontFamily: fonts.mono,
                    fontSize: 16,
                    color: is227Spotlight ? theme.pivot : theme.chalkDim,
                    letterSpacing: 1.2,
                    fontWeight: is227Spotlight ? "bold" : "normal",
                  }}
                >
                  <CountUp steps={countUp227} rollFrames={6} fontSize={16} color={is227Spotlight ? theme.pivot : theme.chalkDim} pad={3} />
                  {" PROBLEMS · 19 PATTERNS"}
                </span>
                {is227Spotlight && (
                  <div style={{ position: "absolute", left: -4, bottom: -4, width: 45, height: 4 }}>
                    <RoughLine
                      shape={{ kind: "line", x1: 0, y1: 2, x2: 40, y2: 2 }}
                      width={45}
                      height={4}
                      startFrame={189}
                      durationInFrames={15}
                      stroke={theme.pivot}
                      strokeWidth={2}
                      seed={227}
                    />
                  </div>
                )}
              </div>

              {/* Course Complete Badge: rolls 8 -> 9 on frame 493 */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "5px 14px",
                  borderRadius: 16,
                  border: `1.5px solid ${theme.good}`,
                  backgroundColor: "rgba(60, 229, 167, 0.16)",
                  boxShadow: isCounterFlippedGlobal ? `0 0 20px ${theme.good}` : "none",
                  transform: `scale(${globalCountPulse})`,
                }}
              >
                <span
                  style={{
                    fontFamily: fonts.mono,
                    fontSize: 18,
                    color: theme.good,
                    fontWeight: "bold",
                  }}
                >
                  {isCounterFlippedGlobal ? "9 / 227 COMPLETE" : "8 / 227 COMPLETE"}
                </span>
              </div>
            </div>
          </div>

          {/* ----------------------------------------------------------------- */}
          {/* PERSISTENT LEFT PATTERN NAVIGATOR (x: 54, top: 126, w: 260, h: 750)*/}
          {/* ----------------------------------------------------------------- */}
          <div
            style={{
              position: "absolute",
              left: 54,
              top: 126,
              width: 260,
              height: 750,
              backgroundColor: "rgba(25, 82, 60, 0.55)",
              borderRight: "2px solid rgba(232, 228, 213, 0.25)",
              borderRadius: 8,
              padding: "12px 14px",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
              gap: 3,
              zIndex: 35,
            }}
          >
            <div
              style={{
                fontSize: 15,
                color: isSidebarSweep ? theme.pivot : theme.chalkDim,
                letterSpacing: 1.5,
                marginBottom: 6,
                fontFamily: fonts.mono,
                fontWeight: "bold",
              }}
            >
              19 COURSE PATTERNS
            </div>

            {PATTERNS_DATA.map((pat, idx) => {
              const isPattern01 = pat.id === 1;
              const sweepActive = isSidebarSweep && idx <= Math.floor(sidebarSweepProgress * 19);

              return (
                <div
                  key={pat.numStr}
                  style={{
                    height: 33,
                    display: "flex",
                    alignItems: "center",
                    padding: "0 8px",
                    borderRadius: 6,
                    backgroundColor: isPattern01
                      ? "rgba(255, 209, 102, 0.18)"
                      : sweepActive
                      ? "rgba(46, 216, 163, 0.12)"
                      : "transparent",
                    border: isPattern01
                      ? `1.5px solid ${theme.pivot}`
                      : sweepActive
                      ? `1px solid ${theme.cyan}`
                      : "1px solid transparent",
                    gap: 10,
                    whiteSpace: "nowrap",
                    transform: isPattern01 && isPattern01Active ? "scale(1.02)" : "scale(1.0)",
                    transformOrigin: "left center",
                  }}
                >
                  <span
                    style={{
                      fontFamily: fonts.mono,
                      fontSize: 15,
                      color: isPattern01 ? theme.pivot : sweepActive ? theme.cyan : theme.chalkDim,
                      fontWeight: "bold",
                    }}
                  >
                    {pat.numStr}
                  </span>
                  <span
                    style={{
                      fontSize: 17,
                      color: isPattern01 ? theme.chalkText : sweepActive ? theme.chalkText : theme.chalkDim,
                      fontWeight: isPattern01 ? "bold" : "normal",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {pat.name}
                  </span>
                </div>
              );
            })}
          </div>

          {/* ----------------------------------------------------------------- */}
          {/* MAIN ROADMAP VIEWPORT (x: 338, top: 126, width: 1450, h: 750)     */}
          {/* ----------------------------------------------------------------- */}
          <div
            style={{
              position: "absolute",
              left: 338,
              top: 126,
              width: 1450,
              height: 750,
              overflow: "hidden",
              zIndex: 20,
            }}
          >
            {/* STICKY PATTERN 01 HEADER (H: 88px) */}
            <div
              style={{
                position: "absolute",
                left: 20,
                top: 0,
                width: 1410,
                height: 88,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                backgroundColor: isPattern01Active
                  ? "rgba(255, 209, 102, 0.18)"
                  : "rgba(25, 82, 60, 0.95)",
                borderRadius: 10,
                border: isPattern01Active
                  ? `2px solid ${theme.pivot}`
                  : "2px solid rgba(232, 228, 213, 0.35)",
                padding: "0 28px",
                boxShadow: isPattern01Active
                  ? "0 0 25px rgba(255, 209, 102, 0.3)"
                  : "0 3px 12px rgba(0,0,0,0.25)",
                zIndex: 30,
              }}
            >
              <div style={{ display: "flex", alignItems: "baseline", gap: 16 }}>
                <span
                  style={{
                    fontFamily: fonts.mono,
                    fontSize: 28,
                    color: theme.pivot,
                    fontWeight: "bold",
                  }}
                >
                  PATTERN 01
                </span>
                <span style={{ fontSize: 34, fontWeight: "bold" }}>
                  <span style={{ color: isArraysBright ? theme.chalkText : theme.chalkDim }}>Arrays</span>
                  <span style={{ color: theme.chalkText }}> & </span>
                  <span style={{ color: isHashingBright ? theme.chalkText : theme.chalkDim }}>Hashing</span>
                </span>
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
                <span style={{ fontFamily: fonts.mono, fontSize: 18, color: theme.chalkDim }}>
                  18 PROBLEMS
                </span>
                <span style={{ color: "rgba(232, 228, 213, 0.35)", fontSize: 18 }}>·</span>
                <div style={{ transform: `scale(${patternCountPulse})`, transformOrigin: "right center" }}>
                  <span
                    style={{
                      fontFamily: fonts.mono,
                      fontSize: 18,
                      color: theme.good,
                      fontWeight: "bold",
                    }}
                  >
                    {isCounterFlippedPattern ? "9 / 18 COMPLETED" : "8 / 18 COMPLETED"}
                  </span>
                </div>
              </div>
            </div>

            {/* STACKED PROBLEM ROWS (Starts at top: 96px, 58px each with 8px gap) */}
            <div
              style={{
                position: "absolute",
                left: 20,
                top: 96,
                width: 1410,
                height: 654,
                overflow: "hidden",
                zIndex: 10,
              }}
            >
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {PATTERNS_DATA[0].problems.slice(0, 10).map((prob) => {
                  const isProb009 = prob.globalNum === 9;
                  const isProb010 = prob.globalNum === 10;
                  const isCompletedEarly = prob.globalNum <= 8;

                  // Dynamic state of Row 009 (Valid Sudoku)
                  const q009IsNowActive = isProb009 && isQ009ActiveInitial;
                  const q009IsCompleted = isProb009 && !isQ009ActiveInitial;

                  // Dim other rows during Act 4 focus
                  const rowDim = isAct4Focus && !isProb009 ? 0.35 : 1.0;

                  // Row 010 hides inside the static list once it lifts out in Act 7
                  if (isProb010 && isRowLifted) {
                    return <div key={prob.globalNum} style={{ height: 58 }} />;
                  }

                  return (
                    <div
                      key={prob.globalNum}
                      style={{
                        height: 58,
                        backgroundColor:
                          q009IsNowActive || (isProb010 && isRow010NowActive)
                            ? "rgba(255, 209, 102, 0.16)"
                            : isCompletedEarly || q009IsCompleted
                            ? "rgba(60, 229, 167, 0.1)"
                            : theme.cardBg,
                        borderRadius: 8,
                        border: `1.5px solid ${
                          q009IsNowActive || (isProb010 && isRow010NowActive)
                            ? theme.pivot
                            : isCompletedEarly || q009IsCompleted
                            ? "rgba(60, 229, 167, 0.35)"
                            : "rgba(232, 228, 213, 0.18)"
                        }`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        padding: "0 20px",
                        boxShadow:
                          q009IsNowActive || (isProb010 && isRow010NowActive)
                            ? "0 0 16px rgba(255, 209, 102, 0.3)"
                            : "none",
                        opacity: rowDim * (isProb010 && !isRow010Activating ? 0.4 : 1.0),
                        position: "relative",
                      }}
                    >
                      {/* Left Number & Title */}
                      <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                        {/* Status Icon */}
                        <div
                          style={{
                            width: 28,
                            height: 28,
                            borderRadius: "50%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            backgroundColor:
                              isCompletedEarly || q009IsCompleted
                                ? theme.good
                                : q009IsNowActive || (isProb010 && isRow010NowActive)
                                ? theme.pivot
                                : "rgba(248, 246, 240, 0.1)",
                            color:
                              isCompletedEarly || q009IsCompleted
                                ? theme.boardBg
                                : q009IsNowActive || (isProb010 && isRow010NowActive)
                                ? theme.boardBg
                                : theme.chalkDim,
                            fontFamily: fonts.mono,
                            fontWeight: "bold",
                            fontSize: 15,
                            position: "relative",
                          }}
                        >
                          {isCompletedEarly ? (
                            "✓"
                          ) : isProb009 ? (
                            q009IsNowActive ? (
                              "●"
                            ) : (
                              // Animated SVG Checkmark for Row 009
                              <svg width={20} height={20} viewBox="0 0 20 20" style={{ overflow: "visible" }}>
                                <path
                                  d="M4 10.5 L8 14.5 L16 6.5"
                                  fill="none"
                                  stroke={theme.boardBg}
                                  strokeWidth={2.8}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeDasharray={20}
                                  strokeDashoffset={20 * (1 - q009CheckDrawProgress)}
                                />
                              </svg>
                            )
                          ) : isProb010 ? (
                            isRow010NowActive ? "●" : "○"
                          ) : (
                            "○"
                          )}
                        </div>

                        <span
                          style={{
                            fontFamily: fonts.mono,
                            fontSize: 16,
                            color:
                              q009IsNowActive || (isProb010 && isRow010NowActive)
                                ? theme.pivot
                                : isCompletedEarly || q009IsCompleted
                                ? theme.chalkDim
                                : theme.chalkDim,
                            fontWeight:
                              q009IsNowActive || (isProb010 && isRow010NowActive) ? "bold" : "normal",
                          }}
                        >
                          {String(prob.globalNum).padStart(3, "0")}
                        </span>

                        {/* Title */}
                        <div style={{ position: "relative" }}>
                          <span
                            style={{
                              fontFamily: fonts.mono,
                              fontSize: 20,
                              fontWeight:
                                q009IsNowActive || (isProb010 && isRow010NowActive) || isCompletedEarly
                                  ? "bold"
                                  : "normal",
                              color:
                                q009IsNowActive || (isProb010 && isRow010NowActive)
                                  ? theme.pivot
                                  : isCompletedEarly || q009IsCompleted
                                  ? theme.chalkText
                                  : theme.chalkDim,
                            }}
                          >
                            {isProb010 ? (
                              <>
                                <span style={{ color: isLongestBright ? theme.pivot : theme.chalkDim }}>Longest </span>
                                <span style={{ color: isConsecutiveBright ? theme.pivot : theme.chalkDim }}>Consecutive </span>
                                <span style={{ color: isSequenceBright ? theme.pivot : theme.chalkDim }}>Sequence</span>
                              </>
                            ) : (
                              prob.title
                            )}
                          </span>

                          {/* Animated underline under Valid Sudoku during Act 4 */}
                          {isProb009 && isQ009Underline && (
                            <div style={{ position: "absolute", left: -4, bottom: -6, width: "105%", height: 5 }}>
                              <RoughLine
                                shape={{ kind: "line", x1: 0, y1: 2, x2: 135, y2: 2 }}
                                width={140}
                                height={5}
                                startFrame={592}
                                durationInFrames={18}
                                stroke={theme.cyan}
                                strokeWidth={2.5}
                                seed={592}
                              />
                            </div>
                          )}
                        </div>

                        {/* NOW ACTIVE Badge */}
                        {q009IsNowActive && (
                          <span
                            style={{
                              backgroundColor: "rgba(255, 209, 102, 0.25)",
                              color: theme.pivot,
                              padding: "2px 8px",
                              borderRadius: 4,
                              fontFamily: fonts.mono,
                              fontSize: 13,
                              fontWeight: "bold",
                            }}
                          >
                            NOW ACTIVE
                          </span>
                        )}

                        {isProb010 && isTagNowActiveVisible && (
                          <span
                            style={{
                              backgroundColor: "rgba(255, 209, 102, 0.25)",
                              color: theme.pivot,
                              padding: "2px 8px",
                              borderRadius: 4,
                              fontFamily: fonts.mono,
                              fontSize: 13,
                              fontWeight: "bold",
                            }}
                          >
                            NOW ACTIVE
                          </span>
                        )}
                      </div>

                      {/* Right Metadata */}
                      <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                        <div style={{ position: "relative" }}>
                          <span
                            style={{
                              fontFamily: fonts.mono,
                              fontSize: 18,
                              color:
                                (isProb009 && isQ009MetaBright) || (isProb010 && isRow010NowActive)
                                  ? theme.chalkText
                                  : theme.chalkDim,
                              fontWeight:
                                (isProb009 && isQ009MetaBright) || (isProb010 && isRow010NowActive)
                                  ? "bold"
                                  : "normal",
                            }}
                          >
                            LC {prob.lcNumber}
                          </span>
                          {isProb010 && isLC128Underline && (
                            <div style={{ position: "absolute", left: 0, bottom: -4, width: "100%", height: 4 }}>
                              <RoughLine
                                shape={{ kind: "line", x1: 0, y1: 2, x2: 60, y2: 2 }}
                                width={65}
                                height={4}
                                startFrame={817}
                                durationInFrames={16}
                                stroke={theme.pivot}
                                strokeWidth={2}
                                seed={128}
                              />
                            </div>
                          )}
                        </div>

                        <span
                          style={{
                            fontFamily: fonts.mono,
                            fontSize: 16,
                            fontWeight: "bold",
                            color:
                              (isProb009 && isQ009MetaBright) || (isProb010 && isMediumActive)
                                ? theme.pivot
                                : prob.difficulty === "Easy"
                                ? theme.good
                                : theme.chalkDim,
                          }}
                        >
                          {prob.difficulty.toUpperCase()}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* ----------------------------------------------------------------- */}
          {/* PERSISTENT RIGHT SCROLL RAIL (x: 1815, top: 140, w: 30, h: 720)   */}
          {/* ----------------------------------------------------------------- */}
          <div
            style={{
              position: "absolute",
              left: 1815,
              top: 140,
              width: 30,
              height: 720,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "space-between",
              zIndex: 35,
            }}
          >
            <span
              style={{
                fontFamily: fonts.mono,
                fontSize: 13,
                color: isRailBright ? theme.chalkText : theme.chalkDim,
                fontWeight: isRailBright ? "bold" : "normal",
              }}
            >
              001
            </span>

            {/* Vertical Meter Rail */}
            <div
              style={{
                position: "relative",
                width: 4,
                height: 640,
                backgroundColor: "rgba(232, 228, 213, 0.2)",
                borderRadius: 2,
              }}
            >
              {/* Active Indicator Thumb (morphs from 009 -> 010 on F636–F699) */}
              <div
                style={{
                  position: "absolute",
                  left: -4,
                  top: `${railIndicatorPos}px`,
                  width: 12,
                  height: 38,
                  backgroundColor: theme.pivot,
                  borderRadius: 4,
                  boxShadow: "0 0 12px rgba(255, 209, 102, 0.6)",
                }}
              />
            </div>

            <span
              style={{
                fontFamily: fonts.mono,
                fontSize: 13,
                color: isRailBright ? theme.chalkText : theme.chalkDim,
                fontWeight: isRailBright ? "bold" : "normal",
              }}
            >
              227
            </span>
          </div>
        </div>

        {/* =================================================================== */}
        {/* ACT 7–9: ROW 010 LIFTS OUT & PROBLEM STAGE MORPH                    */}
        {/* =================================================================== */}
        {isRowLifted && (
          <div
            style={{
              position: "absolute",
              left: (1920 - 1420) / 2, // 250px
              top: heroCardY,
              width: 1420,
              height: heroCardHeight,
              backgroundColor: "rgba(25, 82, 60, 0.96)",
              border: `2px solid ${theme.pivot}`,
              borderRadius: 12,
              boxShadow: "0 10px 40px rgba(0,0,0,0.6), 0 0 30px rgba(255, 209, 102, 0.25)",
              padding: "20px 32px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              zIndex: 60,
              overflow: "hidden",
            }}
          >
            {/* Top Identity Band */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                <span
                  style={{
                    backgroundColor: theme.pivot,
                    color: theme.boardBg,
                    fontFamily: fonts.mono,
                    fontSize: 16,
                    fontWeight: "bold",
                    padding: "3px 10px",
                    borderRadius: 4,
                  }}
                >
                  QUESTION 010
                </span>
                <span
                  style={{
                    fontFamily: fonts.mono,
                    fontSize: 16,
                    color: theme.chalkDim,
                  }}
                >
                  PATTERN 01 · ARRAYS & HASHING
                </span>
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <span
                  style={{
                    fontFamily: fonts.mono,
                    fontSize: 16,
                    color: theme.chalkText,
                    fontWeight: "bold",
                    backgroundColor: "rgba(255, 209, 102, 0.2)",
                    padding: "3px 10px",
                    borderRadius: 4,
                  }}
                >
                  LEETCODE 128
                </span>
                <span
                  style={{
                    fontFamily: fonts.mono,
                    fontSize: 16,
                    color: theme.pivot,
                    fontWeight: "bold",
                    border: `1.5px solid ${theme.pivot}`,
                    padding: "2px 8px",
                    borderRadius: 4,
                  }}
                >
                  MEDIUM
                </span>
              </div>
            </div>

            {/* Hero Title */}
            <div style={{ display: "flex", alignItems: "baseline", gap: 18, marginTop: 10 }}>
              <span
                style={{
                  fontFamily: fonts.hand,
                  fontSize: 52,
                  color: theme.chalkText,
                  fontWeight: "bold",
                  letterSpacing: 2,
                  textShadow: "0 2px 8px rgba(0,0,0,0.6)",
                }}
              >
                LONGEST CONSECUTIVE SEQUENCE
              </span>
            </div>
          </div>
        )}

        {/* =================================================================== */}
        {/* 12 EMPTY ARRAY SLOTS (Exact Scene 02 Coordinates: x: 309, y: 440)  */}
        {/* =================================================================== */}
        {isSlotsVisible && (
          <div
            style={{
              position: "absolute",
              left: SLOTS_START_X,
              top: SLOTS_BASE_Y,
              width: TOTAL_ROW_WIDTH,
              height: SLOT_HEIGHT,
              opacity: slotsFade,
              zIndex: 70,
            }}
          >
            {/* Tag: UNSORTED INPUT (Fades out when understand first takes stage) */}
            {frame < 1250 && (
              <div
                style={{
                  position: "absolute",
                  left: 0,
                  top: -48,
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <span
                  style={{
                    fontFamily: fonts.mono,
                    fontSize: 15,
                    color: theme.pivot,
                    letterSpacing: 2,
                    fontWeight: "bold",
                    backgroundColor: "rgba(255, 209, 102, 0.15)",
                    padding: "4px 14px",
                    borderRadius: 6,
                    border: `1.5px solid ${theme.pivot}`,
                    boxShadow: "0 4px 14px rgba(0,0,0,0.35)",
                  }}
                >
                  UNSORTED INPUT [ 12 SLOTS ]
                </span>
              </div>
            )}

            {/* The 12 Array Slot Shells */}
            <div style={{ display: "flex", gap: SLOT_GAP }}>
              {Array.from({ length: SLOT_COUNT }).map((_, i) => {
                // Subtle disorder offset settles to 0 by F1279
                const disorderY = Math.sin(i * 1.5) * 8 * disorderFactor;
                const disorderRot = Math.cos(i * 1.2) * 1.2 * disorderFactor;

                return (
                  <div
                    key={i}
                    style={{
                      width: SLOT_WIDTH,
                      height: SLOT_HEIGHT,
                      backgroundColor: "rgba(16, 50, 37, 0.96)",
                      border: `3px solid ${theme.cyan}`,
                      borderRadius: 12,
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "10px 0 8px 0",
                      transform: `translateY(${disorderY}px) rotate(${disorderRot}deg)`,
                      boxShadow: "0 8px 24px rgba(0,0,0,0.5), 0 0 16px rgba(92, 225, 230, 0.25)",
                    }}
                  >
                    {/* Index marker */}
                    <span
                      style={{
                        fontFamily: fonts.mono,
                        fontSize: 14,
                        fontWeight: "bold",
                        color: theme.pivot,
                        letterSpacing: 0.5,
                      }}
                    >
                      [{i}]
                    </span>
                    {/* Empty placeholder */}
                    <span
                      style={{
                        fontFamily: fonts.mono,
                        fontSize: 26,
                        fontWeight: "bold",
                        color: "rgba(92, 225, 230, 0.7)",
                      }}
                    >
                      •
                    </span>
                    {/* Slot base shelf */}
                    <div
                      style={{
                        width: 24,
                        height: 3,
                        backgroundColor: "rgba(92, 225, 230, 0.5)",
                        borderRadius: 2,
                      }}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* =================================================================== */}
        {/* ACT 7 CALLOUT: LONGEST RUN OF CONSECUTIVE VALUES = ? (F998–F1240)   */}
        {/* =================================================================== */}
        {isGoalCalloutVisible && (
          <div
            style={{
              position: "absolute",
              left: "50%",
              top: 590,
              transform: "translateX(-50%)",
              display: "flex",
              alignItems: "center",
              gap: 16,
              backgroundColor: "rgba(25, 82, 60, 0.94)",
              border: `2px solid ${theme.pivot}`,
              borderRadius: 10,
              padding: "12px 36px",
              boxShadow: "0 8px 25px rgba(0,0,0,0.5)",
              zIndex: 75,
              opacity: fadeIn(frame, 998, 18),
            }}
          >
            <span style={{ fontFamily: fonts.mono, fontSize: 22, color: theme.chalkDim, fontWeight: "bold" }}>
              GOAL:
            </span>
            <span style={{ fontFamily: fonts.mono, fontSize: 26, color: theme.chalkText, fontWeight: "bold" }}>
              <span style={{ opacity: isLongestWord ? 1 : 0.2 }}>LONGEST </span>
              <span style={{ opacity: isRunWord ? 1 : 0.2 }}>RUN </span>
              <span style={{ opacity: isOfWord ? 1 : 0.2 }}>OF </span>
              <span
                style={{
                  color: isConsecutiveWord ? theme.pivot : theme.chalkText,
                  opacity: isConsecutiveWord ? 1 : 0.2,
                  textDecoration: isConsecutiveWord ? "underline" : "none",
                }}
              >
                CONSECUTIVE
              </span>
              <span style={{ opacity: isValuesQuestion ? 1 : 0.2 }}> VALUES = </span>
              <span
                style={{
                  color: theme.warn,
                  fontSize: 32,
                  opacity: isValuesQuestion ? 1 : 0.2,
                }}
              >
                ?
              </span>
            </span>
          </div>
        )}

        {/* =================================================================== */}
        {/* ACT 8: TARGET LINEAR TIME O(n) (F1124–F1240)                         */}
        {/* =================================================================== */}
        {isTargetVisible && (
          <div
            style={{
              position: "absolute",
              left: "50%",
              top: 685,
              transform: "translateX(-50%)",
              display: "flex",
              alignItems: "center",
              gap: 22,
              backgroundColor: "rgba(20, 55, 42, 0.95)",
              border: `2px solid ${theme.good}`,
              borderRadius: 12,
              padding: "10px 32px",
              boxShadow: "0 0 25px rgba(60, 229, 167, 0.3)",
              zIndex: 75,
              opacity: targetDrawProgress,
            }}
          >
            <span style={{ fontFamily: fonts.mono, fontSize: 20, color: theme.chalkDim }}>
              TARGET:
            </span>
            <span
              style={{
                fontFamily: fonts.mono,
                fontSize: 34,
                color: theme.good,
                fontWeight: "bold",
                letterSpacing: 2,
              }}
            >
              O(n)
            </span>
            <span
              style={{
                fontFamily: fonts.hand,
                fontSize: 26,
                color: isLinearTimeWord ? theme.chalkText : theme.chalkDim,
                fontWeight: "bold",
              }}
            >
              LINEAR TIME
            </span>

            {/* Ascending linear slope micro-curve */}
            <svg width={48} height={28} viewBox="0 0 48 28" style={{ overflow: "visible" }}>
              <line x1={4} y1={24} x2={44} y2={4} stroke={theme.good} strokeWidth={2.5} strokeLinecap="round" />
              <circle cx={44} cy={4} r={3.5} fill={theme.good} />
            </svg>
          </div>
        )}

        {/* =================================================================== */}
        {/* ACT 9: GHOST PYTHON CODE EDITOR & REJECTION STRIKE (F1201–F1245)    */}
        {/* =================================================================== */}
        {isGhostEditorVisible && (
          <div
            style={{
              position: "absolute",
              right: 140,
              top: 420,
              width: 380,
              height: 180,
              backgroundColor: "rgba(15, 30, 25, 0.9)",
              border: "1.5px dashed rgba(232, 228, 213, 0.35)",
              borderRadius: 8,
              padding: "16px 20px",
              display: "flex",
              flexDirection: "column",
              gap: 10,
              zIndex: 80,
              opacity: fadeIn(frame, 1201, 10),
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 8, color: theme.chalkDim, fontFamily: fonts.mono, fontSize: 13 }}>
              <span>&gt;_</span>
              <span>solution.py</span>
            </div>
            <div style={{ fontFamily: fonts.mono, fontSize: 16, color: theme.chalkDim, lineHeight: 1.4 }}>
              <div>def longestConsecutive(nums):</div>
              <div style={{ paddingLeft: 20 }}># write code here...</div>
            </div>

            {/* Coral Diagonal Chalk Strike (Motion SVG Draw via strokeDashoffset) */}
            {isCodeStrike && (
              <svg
                width={380}
                height={180}
                style={{
                  position: "absolute",
                  left: 0,
                  top: 0,
                  overflow: "visible",
                  pointerEvents: "none",
                }}
              >
                <line
                  x1={20}
                  y1={20}
                  x2={360}
                  y2={160}
                  stroke={theme.warn}
                  strokeWidth={4.5}
                  strokeLinecap="round"
                  strokeDasharray={420}
                  strokeDashoffset={420 * (1 - strikeProgress)}
                />
              </svg>
            )}

            {/* NOT YET Tag */}
            {isCodeStrike && (
              <div
                style={{
                  position: "absolute",
                  right: 30,
                  bottom: 20,
                  backgroundColor: "rgba(255, 107, 107, 0.25)",
                  border: `1.5px solid ${theme.warn}`,
                  borderRadius: 4,
                  padding: "2px 10px",
                  color: theme.warn,
                  fontFamily: fonts.mono,
                  fontSize: 14,
                  fontWeight: "bold",
                }}
              >
                NOT YET!
              </div>
            )}
          </div>
        )}

        {/* =================================================================== */}
        {/* ACT 9: UNDERSTAND FIRST (F1250–F1285)                               */}
        {/* =================================================================== */}
        {isUnderstandFirstVisible && understandFirstOpacity > 0.001 && (
          <div
            style={{
              position: "absolute",
              left: "50%",
              top: understandFirstY,
              transform: "translateX(-50%)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 6,
              opacity: understandFirstOpacity,
              zIndex: 85,
            }}
          >
            <div
              style={{
                fontFamily: fonts.hand,
                fontSize: 50,
                fontWeight: "bold",
                letterSpacing: 2,
                textAlign: "center",
              }}
            >
              <span style={{ color: theme.pivot }}>UNDERSTAND </span>
              <span style={{ color: theme.chalkText }}>FIRST</span>
            </div>
            <div
              style={{
                fontFamily: fonts.mono,
                fontSize: 17,
                color: theme.chalkDim,
                letterSpacing: 1.5,
              }}
            >
              Learn what "consecutive" truly means before touching any code.
            </div>
          </div>
        )}
      </div>

      {/* =================================================================== */}
      {/* KARAOKE CAPTIONS (Bottom Safe Zone)                                 */}
      {/* =================================================================== */}
      <Captions words={captionWords} bottom={38} fontSize={38} maxWidth={1500} />
    </AbsoluteFill>
  );
};
