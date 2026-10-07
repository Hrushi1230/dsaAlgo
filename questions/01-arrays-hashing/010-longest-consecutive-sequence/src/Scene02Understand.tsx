/**
 * Scene02Understand.tsx — Scene 02 · UNDERSTAND THE PROBLEM
 * Longest Consecutive Sequence (LC #128) · Type C
 *
 * Continuous visual metamorphosis of the problem concept:
 * - Inherits exact 12-slot geometry from Scene 01 (x: 309, y: 440, w: 1302, h: 104)
 * - Act 1 (F0–F119): "We are given an unsorted array of integers."
 *     Outer chalk bracket draw; on "unsorted" (F52) bracket warps and slots receive micro offsets;
 *     ARRAY underline and faint ℤ watermark.
 * - Act 2 (F119–F304): "We need only one thing, the length of the longest consecutive sequence."
 *     Bracket morphs to centered output capsule (F130); word reveal: LENGTH OF LONGEST CONSECUTIVE SEQUENCE = ?;
 *     4 bottom anchor ticks appear (F263).
 * - Act 3 (F304–F541): "Consecutive means the values continue by 1. 1, 2, 3, 4."
 *     Capsule morphs to 4-node rail; +1 rule; syllable-by-syllable reveal of 1 (F425), 2 (F454), 3 (F484), 4 (F510);
 *     Directed +1 arrows and ShineFill pass.
 * - Act 4 (F541–F655): "They do not need to sit next to each other inside the input."
 *     12 slots emerge; 4 cards physically fly via BezierFlight to slots 1, 7, 4, 10;
 *     Curved value-order arcs connect them: INPUT POSITION ≠ VALUE ORDER; slot indices illuminate.
 * - Act 5 (F655–F974): "Now this is our main example. 8, 1, 6, 3, 2, 2, 4, 10, 9, 11, minus 1, 0."
 *     Demo retracts; 12 master slots spotlighted; testcase values write one-by-one on exact spoken syllables;
 *     Sacred 30-frame reading pause (F944–F974).
 * - Act 6 (F974–F1162): "It has a duplicate, a negative value, and the numbers are completely unsorted."
 *     Three separate inspections: (A) Duplicate 2s connected by overhead bridge; (B) Negative -1 with vertical number line;
 *     (C) Jagged guide morph and red strike across SORTED.
 * - Act 7 (F1162–F1293): "For this input, the answer is 6. Why 6?"
 *     Output callout reveals LENGTH = 6 (F1220) without spoiling winning cards! Morphs into WHY 6? question bubble.
 * - Act 8 (F1293–F1420): "We will prove it while tracing the approaches."
 *     Question bubble tail morphs to 3-checkpoint proof path (●───●───●); TRACE glow on Checkpoint 1 (F1349).
 * - Act 9 (F1420–F1509): "First, let's try the most direct method."
 *     Proof path straightens to 1302px Scene 03 brute search lane; pointer poised over Slot 0 (8) with START HERE?
 *
 * Audio: audio/010/02-understand.mp3
 * Total duration: 1509 frames @ 30fps (50.300s)
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
import { RoughLine } from "../../../../kit/components/RoughLine";
import { SvgMorph } from "../../../../kit/components/SvgMorph";
import { BezierFlight } from "../../../../kit/components/BezierFlight";
import { Captions, CaptionWord } from "../../../../kit/components/Captions";
import syncData from "../sync/02-understand.json";

// ---------------------------------------------------------------------------
// Caption Timings from sync/02-understand.json
// ---------------------------------------------------------------------------
const captionWords: CaptionWord[] = syncData.words.map((w: { word: string; start_ms: number; end_ms: number }) => ({
  word: w.word,
  start: w.start_ms / 1000,
  end: w.end_ms / 1000,
})).filter((w: { word: string }) => w.word !== "");

// ---------------------------------------------------------------------------
// Exact Inherited 12-Slot Geometry from Scene 01 (Optical Center)
// ---------------------------------------------------------------------------
const SLOT_COUNT = 12;
const SLOT_WIDTH = 92;
const SLOT_HEIGHT = 104;
const SLOT_GAP = 18;
const TOTAL_ROW_WIDTH = SLOT_COUNT * SLOT_WIDTH + (SLOT_COUNT - 1) * SLOT_GAP; // 1302px
const SLOTS_START_X = (1920 - TOTAL_ROW_WIDTH) / 2; // 309px
const SLOTS_BASE_Y = 440; // Center Y = 492px

// Center coordinates for each of the 12 master slots
const slotCenterX = (i: number) => SLOTS_START_X + i * (SLOT_WIDTH + SLOT_GAP) + SLOT_WIDTH / 2; // 355 + i * 110

// Master Testcase Data
const MASTER_RAW_VALUES = [8, 1, 6, 3, 2, 2, 4, 10, 9, 11, -1, 0];

// Word-by-word reveal triggers for Act 5
const MASTER_REVEAL_FRAMES = [
  728, // 8
  743, // 1
  761, // 6
  780, // 3
  797, // 2
  816, // 2
  828, // 4
  847, // 10
  863, // 9
  882, // 11
  905, // minus (912 for full "-1")
  930, // 0
];

export const Scene02Understand: React.FC = () => {
  const frame = useCurrentFrame();

  // =========================================================================
  // ACT 1: INHERITED EMPTY SLOTS & INPUT BRACKET (F0–F119)
  // =========================================================================
  const isAct1 = frame < 119;
  const isUnsortedWarp = frame >= 52 && frame < 105;
  const disorderFactor = isUnsortedWarp
    ? interpolate(frame, [52, 60, 95, 105], [0, 1, 1, 0], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
        easing: EASE,
      })
    : 0;

  const isArrayLabelVisible = frame >= 71 && frame < 119;
  const isZWatermarkVisible = frame >= 83 && frame < 119;

  // =========================================================================
  // ACT 2: OUTPUT REQUIREMENT CAPSULE (F119–F304)
  // =========================================================================
  const isAct2CapsuleMorph = frame >= 130 && frame < 304;

  // Words inside capsule
  const isOneThing = frame >= 143 && frame < 182;
  const oneThingTop = interpolate(frame, [143, 152, 160], [492, 492, 450], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const oneThingFontSize = interpolate(frame, [143, 152, 160], [42, 42, 28], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const isAnswerUnderline = frame >= 160 && frame < 304;
  const isLengthOf = frame >= 182 && frame < 304;
  const isLongest = frame >= 228 && frame < 304;
  const isConsecutiveWord = frame >= 242 && frame < 304;
  const isSequenceWord = frame >= 263 && frame < 304;
  const isAnchorTicks = frame >= 263 && frame < 304;

  // Array dimming during Act 2 and Act 3
  const slotsDimOpacity = useMemo(() => {
    if (frame < 119) return 1.0;
    if (frame >= 119 && frame < 541) {
      return interpolate(frame, [119, 140], [1.0, 0.22], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
      });
    }
    if (frame >= 541 && frame < 655) {
      return interpolate(frame, [541, 560], [0.22, 0.75], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
      });
    }
    // Act 5+ restored to 100%
    return interpolate(frame, [655, 685], [0.75, 1.0], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    });
  }, [frame]);

  // =========================================================================
  // ACT 3: CONSECUTIVE = VALUES CONTINUE BY +1 (F304–F541)
  // =========================================================================
  const isAct3 = frame >= 304 && frame < 541;
  const isAct3Header = frame >= 304 && frame < 541;

  // 4 concept card anchors (cx centered on 960)
  const conceptAnchors = [696, 872, 1048, 1224];

  const isCard1Written = frame >= 425;
  const isCard2Written = frame >= 454;
  const isCard3Written = frame >= 484;
  const isCard4Written = frame >= 510;

  const isArrow1Drawn = frame >= 368;
  const isArrow2Drawn = frame >= 454;
  const isArrow3Drawn = frame >= 484;

  const isPlusOne1 = frame >= 397;
  const isPlusOne2 = frame >= 454;
  const isPlusOne3 = frame >= 484;

  // =========================================================================
  // ACT 4: SCATTER FLIGHT & NON-ADJACENCY (F541–F655)
  // =========================================================================
  const isAct4 = frame >= 541 && frame < 655;
  const isBannerVisible = frame >= 584 && frame < 650;
  const isValueArcsVisible = frame >= 613 && frame < 645;
  const isIndicesLit = frame >= 634 && frame < 655;

  // Fade-out of concept demo at end of Act 4
  const conceptDemoFade = useMemo(() => {
    if (frame < 641) return 1.0;
    return interpolate(frame, [641, 654], [1.0, 0.0], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    });
  }, [frame]);

  // =========================================================================
  // ACT 5: REAL TESTCASE POPULATION (F655–F974)
  // =========================================================================
  const isAct5AndBeyond = frame >= 655;
  const isMainExampleTitle = frame >= 666 && frame < 1162;
  const isNumsEquals = frame >= 690;

  // =========================================================================
  // ACT 6: THREE SEMANTIC PROPERTIES INSPECTION (F974–F1162)
  // =========================================================================
  const isDuplicateActive = frame >= 988 && frame < 1018;
  const isDuplicateDimmed = frame >= 1018 && frame < 1162;
  const duplicateOpacity = interpolate(
    frame,
    [988, 995, 1018, 1028],
    [0, 1.0, 1.0, 0.25],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );

  const isNegativeActive = frame >= 1022 && frame < 1055;
  const isNegativeDimmed = frame >= 1055 && frame < 1162;
  const negativeOpacity = interpolate(
    frame,
    [1022, 1030, 1055, 1065],
    [0, 1.0, 1.0, 0.25],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );

  const isUnsortedGuide = frame >= 1070 && frame < 1162;
  const isUnsortedBroken = frame >= 1123 && frame < 1162;

  // =========================================================================
  // ACT 7: OUTPUT LENGTH 6 & WHY 6? (F1162–F1293)
  // =========================================================================
  const isOutputCallout = frame >= 1184 && frame < 1257;
  const isAnswer6Spoken = frame >= 1220;
  const answer6Pulse = isAnswer6Spoken ? pop(frame, 1220, 16, 1.25) : 1.0;

  const isWhy6Bubble = frame >= 1257 && frame < 1293;

  // =========================================================================
  // ACT 8: MULTI-APPROACH PROOF PATH (F1293–F1420)
  // =========================================================================
  const isProofPathDrawn = frame >= 1311 && frame < 1420;
  const isTracePointLit = frame >= 1349 && frame < 1420;
  const isFuturePointsVisible = frame >= 1385 && frame < 1410;

  // =========================================================================
  // ACT 9: BRUTE-FORCE STARTING STATE (F1420–F1509)
  // =========================================================================
  const isSearchLane = frame >= 1420;
  const isPointerStem = frame >= 1454;
  const isPointerHead = frame >= 1475;
  const isStartHereLabel = frame >= 1475;

  return (
    <AbsoluteFill
      style={{
        backgroundColor: theme.boardBg,
        overflow: "hidden",
        fontFamily: fonts.sans,
      }}
    >
      {/* ------------------------------------------------------------------- */}
      {/* Audio Track                                                         */}
      {/* ------------------------------------------------------------------- */}
      <Sequence name="audio">
        <Audio src={staticFile("audio/010/02-understand.mp3")} />
      </Sequence>

      {/* ------------------------------------------------------------------- */}
      {/* Chalk Filters & Chalkboard Base Texture                             */}
      {/* ------------------------------------------------------------------- */}
      <ChalkFilters />
      <ChalkboardBackground />

      {/* =================================================================== */}
      {/* TOP HEADER PILL: QUESTION 10 · LC128 (Exact Scene 01 Continuity)   */}
      {/* =================================================================== */}
      <div
        style={{
          position: "absolute",
          top: 28,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          alignItems: "center",
          gap: 12,
          backgroundColor: "rgba(16, 50, 37, 0.85)",
          border: `1.5px solid ${theme.pivot}`,
          borderRadius: 6,
          padding: "4px 18px",
          boxShadow: "0 4px 14px rgba(0,0,0,0.4)",
          zIndex: 90,
        }}
      >
        <span
          style={{
            fontFamily: fonts.mono,
            fontSize: 15,
            color: theme.pivot,
            fontWeight: "bold",
            letterSpacing: 2,
          }}
        >
          QUESTION 10 · LC 128
        </span>
        <span
          style={{
            width: 5,
            height: 5,
            borderRadius: "50%",
            backgroundColor: theme.good,
          }}
        />
        <span
          style={{
            fontFamily: fonts.mono,
            fontSize: 14,
            color: theme.chalkText,
            letterSpacing: 1,
          }}
        >
          UNDERSTAND
        </span>
      </div>

      {/* =================================================================== */}
      {/* PERSISTENT HERO TITLES & LABELS (y ≈ 310..360)                      */}
      {/* =================================================================== */}
      {/* Act 1 Label: INPUT */}
      {isAct1 && (
        <div
          style={{
            position: "absolute",
            left: 295,
            top: 388,
            fontFamily: fonts.mono,
            fontSize: 15,
            color: theme.chalkDim,
            letterSpacing: 2,
            fontWeight: "bold",
            zIndex: 40,
            opacity: fadeIn(frame, 4, 12),
          }}
        >
          INPUT
        </div>
      )}

      {/* Act 1 Title: ARRAY & Underline */}
      {isArrayLabelVisible && (
        <div
          style={{
            position: "absolute",
            left: "50%",
            top: 595,
            transform: "translateX(-50%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 4,
            zIndex: 40,
            opacity: fadeIn(frame, 71, 8),
          }}
        >
          <span
            style={{
              fontFamily: fonts.hand,
              fontSize: 32,
              color: theme.chalkText,
              letterSpacing: 2,
              fontWeight: "bold",
            }}
          >
            ARRAY OF INTEGERS
          </span>
          <RoughLine
            shape={{ kind: "line", x1: 0, y1: 2, x2: 240, y2: 2 }}
            width={245}
            height={4}
            startFrame={71}
            durationInFrames={12}
            stroke={theme.chalkText}
            strokeWidth={2}
          />
        </div>
      )}

      {/* Act 1 Watermark ℤ symbol behind array */}
      {isZWatermarkVisible && (
        <div
          style={{
            position: "absolute",
            left: "50%",
            top: 450,
            transform: "translate(-50%, -50%)",
            fontFamily: fonts.mono,
            fontSize: 140,
            color: theme.cyan,
            opacity: interpolate(frame, [83, 95, 105, 115], [0, 0.16, 0.16, 0], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            }),
            pointerEvents: "none",
            zIndex: 25,
          }}
        >
          ℤ
        </div>
      )}

      {/* Act 3 Title: CONSECUTIVE */}
      {isAct3Header && (
        <div
          style={{
            position: "absolute",
            left: "50%",
            top: 300,
            transform: "translateX(-50%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 6,
            zIndex: 45,
            opacity: fadeIn(frame, 304, 16),
          }}
        >
          <span
            style={{
              fontFamily: fonts.hand,
              fontSize: 48,
              color: theme.pivot,
              fontWeight: "bold",
              letterSpacing: 3,
            }}
          >
            CONSECUTIVE
          </span>
          <span
            style={{
              fontFamily: fonts.mono,
              fontSize: 17,
              color: theme.chalkText,
              letterSpacing: 1.5,
            }}
          >
            Values continue by exactly +1
          </span>
        </div>
      )}

      {/* Act 5 Header: MAIN TESTCASE */}
      {isMainExampleTitle && (
        <div
          style={{
            position: "absolute",
            left: "50%",
            top: 250,
            transform: "translateX(-50%)",
            display: "flex",
            alignItems: "center",
            gap: 14,
            zIndex: 45,
            opacity: fadeIn(frame, 666, 18),
          }}
        >
          <span
            style={{
              fontFamily: fonts.hand,
              fontSize: 40,
              color: theme.chalkText,
              letterSpacing: 2,
              fontWeight: "bold",
            }}
          >
            MAIN EXAMPLE
          </span>
          <span
            style={{
              fontFamily: fonts.mono,
              fontSize: 14,
              color: theme.pivot,
              backgroundColor: "rgba(255, 209, 102, 0.15)",
              padding: "2px 10px",
              borderRadius: 4,
              border: `1px solid ${theme.pivot}`,
            }}
          >
            12 ELEMENTS
          </span>
        </div>
      )}

      {/* nums = prefix for master array */}
      {isNumsEquals && (
        <div
          style={{
            position: "absolute",
            left: 205,
            top: 470,
            fontFamily: fonts.mono,
            fontSize: 28,
            color: theme.pivot,
            fontWeight: "bold",
            zIndex: 70,
            opacity: fadeIn(frame, 690, 14),
          }}
        >
          nums =
        </div>
      )}

      {/* =================================================================== */}
      {/* MAIN HERO STAGE: 12 FIXED ARRAY SLOTS (y: 440, Center Y = 492)      */}
      {/* =================================================================== */}
      <div
        style={{
          position: "absolute",
          left: SLOTS_START_X,
          top: SLOTS_BASE_Y,
          width: TOTAL_ROW_WIDTH,
          height: SLOT_HEIGHT,
          opacity: slotsDimOpacity,
          zIndex: 30,
        }}
      >
        <div style={{ display: "flex", gap: SLOT_GAP }}>
          {Array.from({ length: SLOT_COUNT }).map((_, i) => {
            // Disorder offset during "unsorted" in Act 1
            const disorderY = Math.sin(i * 1.5) * 6 * disorderFactor;
            const disorderRot = Math.cos(i * 1.2) * 0.8 * disorderFactor;

            // Value reveal state in Act 5
            const revealFrame = MASTER_REVEAL_FRAMES[i];
            const isValueRevealed = isAct5AndBeyond && frame >= revealFrame;

            // Micro-animation for negative value at Slot 10: F905 is "-", F912 is "-1"
            let displayVal = isValueRevealed ? MASTER_RAW_VALUES[i].toString() : "";
            if (i === 10 && isValueRevealed) {
              if (frame < 912) displayVal = "−";
              else displayVal = "-1";
            }

            // Semantic Border Highlights in Act 6
            let slotBorderColor: string = theme.cyan;
            let slotBorderWidth = 3;
            if (isAct5AndBeyond) {
              if ((i === 4 || i === 5) && isDuplicateActive) {
                slotBorderColor = theme.pivot;
                slotBorderWidth = 3.5;
              } else if (i === 10 && isNegativeActive) {
                slotBorderColor = theme.cyan;
                slotBorderWidth = 3.5;
              }
            }

            return (
              <div
                key={i}
                style={{
                  width: SLOT_WIDTH,
                  height: SLOT_HEIGHT,
                  backgroundColor: "rgba(16, 50, 37, 0.96)",
                  border: `${slotBorderWidth}px solid ${slotBorderColor}`,
                  borderRadius: 12,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "8px 0 8px 0",
                  transform: `translateY(${disorderY}px) rotate(${disorderRot}deg)`,
                  boxShadow:
                    slotBorderColor === theme.pivot
                      ? "0 0 20px rgba(255, 209, 102, 0.4)"
                      : "0 8px 24px rgba(0,0,0,0.5), 0 0 16px rgba(92, 225, 230, 0.25)",
                  position: "relative",
                }}
              >
                {/* Index marker */}
                <span
                  style={{
                    fontFamily: fonts.mono,
                    fontSize: 13,
                    fontWeight: "bold",
                    color: isIndicesLit ? theme.pivot : "rgba(255, 209, 102, 0.6)",
                    letterSpacing: 0.5,
                  }}
                >
                  [{i}]
                </span>

                {/* Slot Value or Empty Placeholder */}
                {isValueRevealed ? (
                  <span
                    style={{
                      fontFamily: fonts.mono,
                      fontSize: displayVal.length > 1 ? 40 : 46,
                      fontWeight: "bold",
                      color: theme.chalkText,
                      transform: `scale(${pop(frame, revealFrame, 12, 1.15)})`,
                    }}
                  >
                    {displayVal}
                  </span>
                ) : (
                  <span
                    style={{
                      fontFamily: fonts.mono,
                      fontSize: 26,
                      fontWeight: "bold",
                      color: "rgba(92, 225, 230, 0.6)",
                    }}
                  >
                    •
                  </span>
                )}

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

      {/* =================================================================== */}
      {/* ACT 1 SVG: OUTER ARRAY BRACKET                                      */}
      {/* =================================================================== */}
      {isAct1 && (
        <div style={{ position: "absolute", left: 0, top: 0, width: 1920, height: 1080, pointerEvents: "none", zIndex: 35 }}>
          {/* Top bracket segment */}
          <SvgMorph
            fromPath="M 295 450 L 295 420 L 1625 420 L 1625 450"
            toPath="M 295 450 Q 960 410 1625 450"
            startFrame={52}
            durationInFrames={18}
            stroke={theme.chalkText}
            strokeWidth={3}
            width={1920}
            height={1080}
          />
          {/* Bottom bracket segment */}
          <SvgMorph
            fromPath="M 295 535 L 295 565 L 1625 565 L 1625 535"
            toPath="M 295 535 Q 960 575 1625 535"
            startFrame={52}
            durationInFrames={18}
            stroke={theme.chalkText}
            strokeWidth={3}
            width={1920}
            height={1080}
          />
        </div>
      )}

      {/* =================================================================== */}
      {/* ACT 2: OUTPUT REQUIREMENT CAPSULE (F119–F304)                       */}
      {/* =================================================================== */}
      {isAct2CapsuleMorph && (
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 1920,
            height: 1080,
            pointerEvents: "none",
            zIndex: 50,
          }}
        >
          {/* Centered capsule border */}
          <svg width={1920} height={1080} style={{ position: "absolute", left: 0, top: 0 }}>
            <rect
              x={640}
              y={440}
              width={640}
              height={104}
              rx={24}
              stroke={theme.pivot}
              strokeWidth={3}
              fill="rgba(255, 209, 102, 0.06)"
            />
          </svg>

          {/* 4 Bottom Anchor Ticks sprout on F263 */}
          {isAnchorTicks && (
            <svg width={1920} height={1080} style={{ position: "absolute", left: 0, top: 0 }}>
              {conceptAnchors.map((cx, idx) => (
                <line
                  key={idx}
                  x1={cx}
                  y1={544}
                  x2={cx}
                  y2={556}
                  stroke={theme.pivot}
                  strokeWidth={3}
                  strokeLinecap="round"
                />
              ))}
            </svg>
          )}

          {/* Capsule Content: ONE THING */}
          {isOneThing && (
            <div
              style={{
                position: "absolute",
                left: "50%",
                top: oneThingTop,
                transform: "translate(-50%, -50%)",
                fontFamily: fonts.hand,
                fontSize: oneThingFontSize,
                color: theme.pivot,
                fontWeight: "bold",
                letterSpacing: 2,
              }}
            >
              ONE THING
            </div>
          )}

          {/* Capsule Answer Underline & Question Mark */}
          {isAnswerUnderline && (
            <div
              style={{
                position: "absolute",
                left: "50%",
                top: 508,
                transform: "translateX(-50%)",
                display: "flex",
                alignItems: "center",
                gap: 12,
              }}
            >
              <div style={{ display: "flex", alignItems: "baseline", gap: 10 }}>
                {isLengthOf && (
                  <span style={{ fontFamily: fonts.mono, fontSize: 24, color: theme.chalkText, fontWeight: "bold" }}>
                    LENGTH OF
                  </span>
                )}
                {isLongest && (
                  <span style={{ fontFamily: fonts.mono, fontSize: 24, color: theme.chalkText, fontWeight: "bold" }}>
                    LONGEST
                  </span>
                )}
                {isConsecutiveWord && (
                  <span
                    style={{
                      fontFamily: fonts.mono,
                      fontSize: 26,
                      color: theme.pivot,
                      fontWeight: "bold",
                      textDecoration: "underline",
                    }}
                  >
                    CONSECUTIVE
                  </span>
                )}
                {isSequenceWord && (
                  <span style={{ fontFamily: fonts.mono, fontSize: 24, color: theme.chalkText, fontWeight: "bold" }}>
                    SEQUENCE =
                  </span>
                )}
              </div>

              {/* Red/Warn Question Mark */}
              <span
                style={{
                  fontFamily: fonts.mono,
                  fontSize: 36,
                  fontWeight: "bold",
                  color: theme.warn,
                  transform: `scale(${pop(frame, 160, 14, 1.2)})`,
                }}
              >
                ?
              </span>
            </div>
          )}
        </div>
      )}

      {/* =================================================================== */}
      {/* ACT 3: 4-CARD DEFINITION RAIL 1 → 2 → 3 → 4 (F304–F541)             */}
      {/* =================================================================== */}
      {isAct3 && (
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 1920,
            height: 1080,
            pointerEvents: "none",
            zIndex: 60,
            opacity: conceptDemoFade,
          }}
        >
          {/* Relation Rail connecting node centers */}
          <svg width={1920} height={1080} style={{ position: "absolute", left: 0, top: 0 }}>
            <line x1={696} y1={492} x2={1224} y2={492} stroke={theme.chalkLine} strokeWidth={2.5} />
            {conceptAnchors.map((cx, idx) => (
              <circle key={idx} cx={cx} cy={492} r={7} fill={theme.pivot} />
            ))}
          </svg>

          {/* 4 Cards Shells & Numerical Values */}
          {conceptAnchors.map((cx, idx) => {
            const isRevealed =
              (idx === 0 && isCard1Written) ||
              (idx === 1 && isCard2Written) ||
              (idx === 2 && isCard3Written) ||
              (idx === 3 && isCard4Written);
            const val = idx + 1;

            return (
              <div
                key={idx}
                style={{
                  position: "absolute",
                  left: cx - 56,
                  top: 432,
                  width: 112,
                  height: 120,
                  backgroundColor: "rgba(20, 60, 45, 0.95)",
                  border: `3px solid ${isRevealed ? theme.chalkText : theme.cardBorder}`,
                  borderRadius: 14,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: isRevealed
                    ? "0 8px 24px rgba(0,0,0,0.6), 0 0 18px rgba(248, 246, 240, 0.3)"
                    : "0 4px 14px rgba(0,0,0,0.4)",
                  zIndex: 65,
                }}
              >
                {isRevealed && (
                  <span
                    style={{
                      fontFamily: fonts.mono,
                      fontSize: 54,
                      fontWeight: "bold",
                      color: theme.chalkText,
                    }}
                  >
                    {val}
                  </span>
                )}
              </div>
            );
          })}

          {/* Directed +1 Arrows between cards */}
          {isArrow1Drawn && (
            <div style={{ position: "absolute", left: 752, top: 490 }}>
              <RoughLine
                shape={{ kind: "arrow", x1: 0, y1: 2, x2: 60, y2: 2 }}
                width={65}
                height={6}
                startFrame={368}
                durationInFrames={14}
                stroke={theme.good}
                strokeWidth={3}
                seed={1}
              />
            </div>
          )}
          {isPlusOne1 && (
            <div
              style={{
                position: "absolute",
                left: 766,
                top: 445,
                fontFamily: fonts.mono,
                fontSize: 22,
                color: theme.good,
                fontWeight: "bold",
              }}
            >
              +1
            </div>
          )}

          {isArrow2Drawn && (
            <div style={{ position: "absolute", left: 928, top: 490 }}>
              <RoughLine
                shape={{ kind: "arrow", x1: 0, y1: 2, x2: 60, y2: 2 }}
                width={65}
                height={6}
                startFrame={454}
                durationInFrames={14}
                stroke={theme.good}
                strokeWidth={3}
                seed={2}
              />
            </div>
          )}
          {isPlusOne2 && (
            <div
              style={{
                position: "absolute",
                left: 942,
                top: 445,
                fontFamily: fonts.mono,
                fontSize: 22,
                color: theme.good,
                fontWeight: "bold",
              }}
            >
              +1
            </div>
          )}

          {isArrow3Drawn && (
            <div style={{ position: "absolute", left: 1104, top: 490 }}>
              <RoughLine
                shape={{ kind: "arrow", x1: 0, y1: 2, x2: 60, y2: 2 }}
                width={65}
                height={6}
                startFrame={484}
                durationInFrames={14}
                stroke={theme.good}
                strokeWidth={3}
                seed={3}
              />
            </div>
          )}
          {isPlusOne3 && (
            <div
              style={{
                position: "absolute",
                left: 1118,
                top: 445,
                fontFamily: fonts.mono,
                fontSize: 22,
                color: theme.good,
                fontWeight: "bold",
              }}
            >
              +1
            </div>
          )}
        </div>
      )}

      {/* =================================================================== */}
      {/* ACT 4: BEZIER FLIGHTS OF CARDS INTO DISTANT SLOTS (F541–F655)        */}
      {/* =================================================================== */}
      {isAct4 && (
        <div style={{ position: "absolute", left: 0, top: 0, width: 1920, height: 1080, zIndex: 65, opacity: conceptDemoFade }}>
          {/* Flying Card 1: (696, 492) -> Slot 1 (465, 492) */}
          <BezierFlight
            from={{ x: 696, y: 492 }}
            to={{ x: slotCenterX(1), y: 492 }}
            peak={-65}
            start={566}
            dur={22}
            trail="rgba(92, 225, 230, 0.4)"
          >
            <div
              style={{
                width: 92,
                height: 104,
                backgroundColor: "rgba(16, 50, 37, 0.96)",
                border: `3px solid ${theme.cyan}`,
                borderRadius: 12,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: fonts.mono,
                fontSize: 46,
                fontWeight: "bold",
                color: theme.chalkText,
                boxShadow: "0 8px 24px rgba(0,0,0,0.6)",
              }}
            >
              1
            </div>
          </BezierFlight>

          {/* Flying Card 2: (872, 492) -> Slot 7 (1125, 492) */}
          <BezierFlight
            from={{ x: 872, y: 492 }}
            to={{ x: slotCenterX(7), y: 492 }}
            peak={-95}
            start={584}
            dur={22}
            trail="rgba(92, 225, 230, 0.4)"
          >
            <div
              style={{
                width: 92,
                height: 104,
                backgroundColor: "rgba(16, 50, 37, 0.96)",
                border: `3px solid ${theme.cyan}`,
                borderRadius: 12,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: fonts.mono,
                fontSize: 46,
                fontWeight: "bold",
                color: theme.chalkText,
                boxShadow: "0 8px 24px rgba(0,0,0,0.6)",
              }}
            >
              2
            </div>
          </BezierFlight>

          {/* Flying Card 3: (1048, 492) -> Slot 4 (795, 492) */}
          <BezierFlight
            from={{ x: 1048, y: 492 }}
            to={{ x: slotCenterX(4), y: 492 }}
            peak={-75}
            start={596}
            dur={22}
            trail="rgba(92, 225, 230, 0.4)"
          >
            <div
              style={{
                width: 92,
                height: 104,
                backgroundColor: "rgba(16, 50, 37, 0.96)",
                border: `3px solid ${theme.cyan}`,
                borderRadius: 12,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: fonts.mono,
                fontSize: 46,
                fontWeight: "bold",
                color: theme.chalkText,
                boxShadow: "0 8px 24px rgba(0,0,0,0.6)",
              }}
            >
              3
            </div>
          </BezierFlight>

          {/* Flying Card 4: (1224, 492) -> Slot 10 (1455, 492) */}
          <BezierFlight
            from={{ x: 1224, y: 492 }}
            to={{ x: slotCenterX(10), y: 492 }}
            peak={-85}
            start={608}
            dur={22}
            trail="rgba(92, 225, 230, 0.4)"
          >
            <div
              style={{
                width: 92,
                height: 104,
                backgroundColor: "rgba(16, 50, 37, 0.96)",
                border: `3px solid ${theme.cyan}`,
                borderRadius: 12,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: fonts.mono,
                fontSize: 46,
                fontWeight: "bold",
                color: theme.chalkText,
                boxShadow: "0 8px 24px rgba(0,0,0,0.6)",
              }}
            >
              4
            </div>
          </BezierFlight>

          {/* Curved Value-Order Arcs linking scattered cards */}
          {isValueArcsVisible && (
            <svg width={1920} height={1080} style={{ position: "absolute", left: 0, top: 0, pointerEvents: "none" }}>
              {/* Arc 1: Slot 1 (465) -> Slot 7 (1125) */}
              <path
                d="M 465 435 C 600 320, 990 320, 1125 435"
                stroke={theme.cyan}
                strokeWidth={3}
                fill="none"
                strokeDasharray="8, 6"
              />
              {/* Arc 2: Slot 7 (1125) -> Slot 4 (795) */}
              <path
                d="M 1125 435 C 1050 350, 870 350, 795 435"
                stroke={theme.cyan}
                strokeWidth={3}
                fill="none"
                strokeDasharray="8, 6"
              />
              {/* Arc 3: Slot 4 (795) -> Slot 10 (1455) */}
              <path
                d="M 795 435 C 950 280, 1300 280, 1455 435"
                stroke={theme.cyan}
                strokeWidth={3}
                fill="none"
                strokeDasharray="8, 6"
              />
            </svg>
          )}

          {/* Callout Banner: INPUT POSITION ≠ VALUE ORDER */}
          {isBannerVisible && (
            <div
              style={{
                position: "absolute",
                left: "50%",
                top: 660,
                transform: "translateX(-50%)",
                backgroundColor: "rgba(16, 50, 37, 0.94)",
                border: `2px solid ${theme.good}`,
                borderRadius: 10,
                padding: "12px 36px",
                display: "flex",
                alignItems: "center",
                gap: 20,
                boxShadow: "0 8px 25px rgba(0,0,0,0.5)",
              }}
            >
              <span style={{ fontFamily: fonts.mono, fontSize: 26, color: theme.chalkDim, fontWeight: "bold" }}>
                INPUT POSITION
              </span>
              <span style={{ fontFamily: fonts.mono, fontSize: 36, color: theme.warn, fontWeight: "bold" }}>
                ≠
              </span>
              <span style={{ fontFamily: fonts.mono, fontSize: 28, color: theme.good, fontWeight: "bold" }}>
                VALUE ORDER
              </span>
            </div>
          )}
        </div>
      )}

      {/* =================================================================== */}
      {/* ACT 6: THREE SEMANTIC INSPECTIONS (F974–F1162)                      */}
      {/* =================================================================== */}
      {/* 1. Duplicate Inspection: Slot 4 (795) and Slot 5 (905) */}
      {(isDuplicateActive || isDuplicateDimmed) && (
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 1920,
            height: 1080,
            pointerEvents: "none",
            zIndex: 70,
            opacity: duplicateOpacity,
          }}
        >
          <svg width={1920} height={1080} style={{ position: "absolute", left: 0, top: 0 }}>
            {/* Connecting Bridge between 2s */}
            <path d="M 795 435 Q 850 390 905 435" stroke={theme.pivot} strokeWidth={3} fill="none" strokeLinecap="round" />
          </svg>
          <div
            style={{
              position: "absolute",
              left: 850,
              top: 375,
              transform: "translateX(-50%)",
              fontFamily: fonts.mono,
              fontSize: 16,
              color: theme.pivot,
              fontWeight: "bold",
              backgroundColor: "rgba(255, 209, 102, 0.15)",
              padding: "2px 10px",
              borderRadius: 4,
              border: `1px solid ${theme.pivot}`,
            }}
          >
            DUPLICATE: 2
          </div>
        </div>
      )}

      {/* 2. Negative Value Inspection: Slot 10 (-1, cx: 1455) */}
      {(isNegativeActive || isNegativeDimmed) && (
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 1920,
            height: 1080,
            pointerEvents: "none",
            zIndex: 70,
            opacity: negativeOpacity,
          }}
        >
          {/* Negative Number Line Context below Slot 10 */}
          <div
            style={{
              position: "absolute",
              left: 1455,
              top: 565,
              transform: "translateX(-50%)",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 8,
              fontFamily: fonts.mono,
              fontSize: 14,
              color: theme.cyan,
              backgroundColor: "rgba(16, 50, 37, 0.95)",
              border: `1.5px solid ${theme.cyan}`,
              borderRadius: 6,
              padding: "4px 10px",
              boxShadow: "0 4px 14px rgba(0,0,0,0.5)",
              whiteSpace: "nowrap",
            }}
          >
            <span style={{ opacity: 0.6 }}>-2</span>
            <span style={{ opacity: 0.4 }}>──</span>
            <span style={{ color: theme.pivot, fontWeight: "bold" }}>-1</span>
            <span style={{ opacity: 0.4 }}>──</span>
            <span style={{ opacity: 0.6 }}>0</span>
          </div>

          <div
            style={{
              position: "absolute",
              left: 1455,
              top: 375,
              transform: "translateX(-50%)",
              fontFamily: fonts.mono,
              fontSize: 16,
              color: theme.cyan,
              fontWeight: "bold",
              backgroundColor: "rgba(92, 225, 230, 0.15)",
              padding: "2px 10px",
              borderRadius: 4,
              border: `1px solid ${theme.cyan}`,
            }}
          >
            NEGATIVE: -1
          </div>
        </div>
      )}

      {/* 3. Completely Unsorted Guide & Strike */}
      {isUnsortedGuide && (
        <div style={{ position: "absolute", left: 0, top: 0, width: 1920, height: 1080, pointerEvents: "none", zIndex: 70 }}>
          {isUnsortedBroken ? (
            /* Jagged Broken Guide */
            <svg width={1920} height={1080} style={{ position: "absolute", left: 0, top: 0 }}>
              <path
                d="M 310 400 Q 420 375 530 425 Q 750 365 970 430 Q 1200 370 1410 420 L 1610 400"
                stroke={theme.warn}
                strokeWidth={3}
                fill="none"
              />
            </svg>
          ) : (
            /* Straight Guide */
            <svg width={1920} height={1080} style={{ position: "absolute", left: 0, top: 0 }}>
              <line x1={310} y1={400} x2={1610} y2={400} stroke={theme.chalkDim} strokeWidth={2} strokeDasharray="6, 6" />
            </svg>
          )}

          {/* Strike through SORTED */}
          {isUnsortedBroken && (
            <div
              style={{
                position: "absolute",
                left: "50%",
                top: 335,
                transform: "translateX(-50%)",
                display: "flex",
                alignItems: "center",
                gap: 12,
                backgroundColor: "rgba(30, 20, 25, 0.95)",
                border: `2px solid ${theme.warn}`,
                borderRadius: 8,
                padding: "6px 20px",
                boxShadow: "0 6px 20px rgba(0,0,0,0.6)",
              }}
            >
              <span style={{ fontFamily: fonts.mono, fontSize: 24, color: theme.warn, fontWeight: "bold" }}>
                NOT SORTED!
              </span>
            </div>
          )}
        </div>
      )}

      {/* =================================================================== */}
      {/* ACT 7: OUTPUT LENGTH 6 & WHY 6? BUBBLE (F1162–F1293)                */}
      {/* =================================================================== */}
      {isOutputCallout && (
        <div
          style={{
            position: "absolute",
            left: "50%",
            top: 690,
            transform: "translateX(-50%)",
            backgroundColor: "rgba(20, 55, 42, 0.95)",
            border: `2.5px solid ${theme.good}`,
            borderRadius: 14,
            padding: "14px 44px",
            display: "flex",
            alignItems: "center",
            gap: 16,
            boxShadow: "0 8px 30px rgba(0,0,0,0.6), 0 0 25px rgba(60, 229, 167, 0.3)",
            zIndex: 75,
            opacity: fadeIn(frame, 1184, 16),
          }}
        >
          <span style={{ fontFamily: fonts.mono, fontSize: 26, color: theme.chalkText, fontWeight: "bold" }}>
            OUTPUT LENGTH =
          </span>
          <span
            style={{
              fontFamily: fonts.mono,
              fontSize: 48,
              color: isAnswer6Spoken ? theme.good : theme.pivot,
              fontWeight: "bold",
              transform: `scale(${answer6Pulse})`,
            }}
          >
            {isAnswer6Spoken ? "6" : "?"}
          </span>
        </div>
      )}

      {/* WHY 6? Question Bubble (SvgMorph from capsule at F1257) */}
      {isWhy6Bubble && (
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 1920,
            height: 1080,
            pointerEvents: "none",
            zIndex: 75,
          }}
        >
          <svg width={1920} height={1080} style={{ position: "absolute", left: 0, top: 0 }}>
            <path
              d="M 800 640 Q 960 625 1120 640 Q 1160 690 1120 740 Q 980 755 940 780 L 935 745 Q 800 745 760 690 Z"
              stroke={theme.pivot}
              strokeWidth={3}
              fill="rgba(255, 209, 102, 0.12)"
              transform={`scale(${pop(frame, 1257, 18, 1.1)})`}
              style={{ transformOrigin: "960px 690px" }}
            />
          </svg>

          <div
            style={{
              position: "absolute",
              left: 960,
              top: 685,
              transform: "translate(-50%, -50%)",
              fontFamily: fonts.hand,
              fontSize: 52,
              color: theme.pivot,
              fontWeight: "bold",
              letterSpacing: 2,
            }}
          >
            WHY 6?
          </div>
        </div>
      )}

      {/* =================================================================== */}
      {/* ACT 8: THREE-NODE PROOF PATH (F1293–F1420)                          */}
      {/* =================================================================== */}
      {isProofPathDrawn && (
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 1920,
            height: 1080,
            pointerEvents: "none",
            zIndex: 75,
          }}
        >
          <svg width={1920} height={1080} style={{ position: "absolute", left: 0, top: 0 }}>
            {/* Horizontal Proof Rail */}
            <line x1={660} y1={720} x2={1260} y2={720} stroke={theme.chalkLine} strokeWidth={2.5} />

            {/* Checkpoint 1 (Trace) */}
            <circle
              cx={720}
              cy={720}
              r={10}
              fill={isTracePointLit ? theme.pivot : "none"}
              stroke={theme.pivot}
              strokeWidth={3}
            />

            {/* Checkpoints 2 & 3 (Future approaches) */}
            {isFuturePointsVisible && (
              <>
                <circle cx={960} cy={720} r={8} fill="none" stroke={theme.chalkDim} strokeWidth={2} />
                <circle cx={1200} cy={720} r={8} fill="none" stroke={theme.chalkDim} strokeWidth={2} />
              </>
            )}
          </svg>

          {/* TRACE Label at Checkpoint 1 */}
          {isTracePointLit && (
            <div
              style={{
                position: "absolute",
                left: 720,
                top: 675,
                transform: "translateX(-50%)",
                fontFamily: fonts.mono,
                fontSize: 18,
                color: theme.pivot,
                fontWeight: "bold",
                backgroundColor: "rgba(255, 209, 102, 0.18)",
                padding: "2px 10px",
                borderRadius: 4,
                border: `1px solid ${theme.pivot}`,
              }}
            >
              TRACE
            </div>
          )}
        </div>
      )}

      {/* =================================================================== */}
      {/* ACT 9: BRUTE-FORCE SEARCH LANE & POISED POINTER (F1420–F1509)        */}
      {/* =================================================================== */}
      {isSearchLane && (
        <div style={{ position: "absolute", left: 0, top: 0, width: 1920, height: 1080, pointerEvents: "none", zIndex: 75 }}>
          {/* Horizontal Search Lane across all 12 slots (w: 1302px) */}
          <svg width={1920} height={1080} style={{ position: "absolute", left: 0, top: 0 }}>
            <line
              x1={SLOTS_START_X}
              y1={580}
              x2={SLOTS_START_X + TOTAL_ROW_WIDTH}
              y2={580}
              stroke={theme.chalkLine}
              strokeWidth={2.5}
              strokeDasharray="10, 6"
              opacity={0.7}
            />
          </svg>

          {/* Inverted Pointer Poised above Slot 0 (Value 8, cx: 355) */}
          {isPointerStem && (
            <div style={{ position: "absolute", left: slotCenterX(0) - 20, top: 345 }}>
              <RoughLine
                shape={{ kind: "arrow", x1: 20, y1: 0, x2: 20, y2: 70 }}
                width={40}
                height={80}
                startFrame={1454}
                durationInFrames={18}
                stroke={isPointerHead ? theme.pivot : theme.chalkText}
                strokeWidth={3.5}
                seed={88}
              />
            </div>
          )}

          {/* START HERE? Label */}
          {isStartHereLabel && (
            <div
              style={{
                position: "absolute",
                left: slotCenterX(0),
                top: 310,
                transform: "translateX(-50%)",
                fontFamily: fonts.mono,
                fontSize: 16,
                color: theme.pivot,
                fontWeight: "bold",
                backgroundColor: "rgba(255, 209, 102, 0.2)",
                padding: "2px 10px",
                borderRadius: 4,
                border: `1.5px solid ${theme.pivot}`,
                boxShadow: "0 0 14px rgba(255, 209, 102, 0.5)",
              }}
            >
              START HERE?
            </div>
          )}
        </div>
      )}

      {/* =================================================================== */}
      {/* KARAOKE CAPTIONS (Bottom Safe Zone: y: 960..1040)                   */}
      {/* =================================================================== */}
      <Captions words={captionWords} bottom={38} fontSize={38} maxWidth={1500} />
    </AbsoluteFill>
  );
};
