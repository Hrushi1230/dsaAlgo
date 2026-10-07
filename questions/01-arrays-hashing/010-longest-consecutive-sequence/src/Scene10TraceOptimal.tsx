import React, { useMemo } from "react";
import {
  Audio,
  interpolate,
  staticFile,
  useCurrentFrame,
} from "remotion";
import { fonts, theme } from "../../../../kit/lib/theme";
import { ChalkboardBackground, ChalkFilters } from "../../../../kit/lib/chalk";
import { ChalkDust } from "../../../../kit/components/ChalkDust";
import { Captions, CaptionWord } from "../../../../kit/components/Captions";
import { ArraySlotV2 } from "../../../../kit/components/array/ArraySlotV2";
import { RoughNode } from "../../../../kit/components/RoughNode";
import syncData from "../sync/10-trace-optimal.json";

// =============================================================================
// GEOMETRY & CONSTANTS (1920 x 1080 Optical Chalkboard Layout)
// =============================================================================

// Original array: 12 elements with duplicate 2 at index 5
const RAW_ARRAY = [8, 1, 6, 3, 2, 2, 4, 10, 9, 11, -1, 0];

// Fixed 11 HashSet nodes constellation: strictly unsorted, organic, and comfortably inside enclosure
const HASH_NODES: { val: number; x: number; y: number }[] = [
  { val: 8,  x: 500,  y: 255 },
  { val: 3,  x: 960,  y: 250 },
  { val: 11, x: 1440, y: 255 },
  { val: 10, x: 400,  y: 330 },
  { val: -1, x: 820,  y: 325 },
  { val: 0,  x: 1300, y: 330 },
  { val: 2,  x: 600,  y: 405 },
  { val: 6,  x: 1080, y: 400 },
  { val: 4,  x: 420,  y: 475 },
  { val: 9,  x: 900,  y: 475 },
  { val: 1,  x: 1420, y: 475 },
];

// Source strip slot layout
const SLOT_W = 88;
const SLOT_H = 84;
const SLOT_GAP = 14;
const TOTAL_RAW_WIDTH = 12 * SLOT_W + 11 * SLOT_GAP; // 1210px
const RAW_X_START = (1920 - TOTAL_RAW_WIDTH) / 2; // 355px
const rawSlotX = (i: number) => RAW_X_START + i * (SLOT_W + SLOT_GAP);

// Candidate visit schedule: first appearance in original array
// slot 0 (8) -> slot 1 (1) -> slot 2 (6) -> slot 3 (3) -> slot 4 (2)
// slot 5 (2) is DUP (never candidate)
// slot 6 (4) -> slot 7 (10) -> slot 8 (9) -> slot 9 (11) -> slot 10 (-1) -> slot 11 (0)
const CANDIDATE_SLOTS = [
  { val: 8,  slot: 0,  startF: 649,  endF: 1525 },
  { val: 1,  slot: 1,  startF: 1525, endF: 1865 },
  { val: 6,  slot: 2,  startF: 1865, endF: 2302 },
  { val: 3,  slot: 3,  startF: 2302, endF: 2506 },
  { val: 2,  slot: 4,  startF: 2506, endF: 2648 },
  { val: 4,  slot: 6,  startF: 2648, endF: 2791 },
  { val: 10, slot: 7,  startF: 2791, endF: 2978 },
  { val: 9,  slot: 8,  startF: 2978, endF: 3117 },
  { val: 11, slot: 9,  startF: 3117, endF: 3262 },
  { val: -1, slot: 10, startF: 3262, endF: 4348 },
  { val: 0,  slot: 11, startF: 4348, endF: 4592 },
];

// Clamped interpolation helper
const clamp = (f: number, input: number[], output: number[]) =>
  interpolate(f, input, output, {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

// =============================================================================
// SCENE 10 COMPONENT
// =============================================================================
export const Scene10TraceOptimal: React.FC = () => {
  const frame = useCurrentFrame();

  // ----------------------------------------------------
  // Captions & Karaoke Sync
  // ----------------------------------------------------
  const captionWords = useMemo<CaptionWord[]>(() => {
    return (syncData.words || []).map((w) => ({
      word: w.word,
      start: w.start_ms / 1000,
      end: w.end_ms / 1000,
    }));
  }, []);

  // ----------------------------------------------------
  // Top Badge Info
  // ----------------------------------------------------
  const topBadgeInfo = useMemo(() => {
    if (frame < 649) {
      return { text: "OPTIMAL · BUILD HASH SET & REMOVE DUPLICATES", color: theme.purple, icon: "🟣" };
    }
    if (frame < 1525) {
      return { text: "OPTIMAL · CANDIDATE 8 (START POINT)", color: theme.good, icon: "💡" };
    }
    if (frame < 1865) {
      return { text: "OPTIMAL · CANDIDATE 1 (PREDECESSOR EXISTS → SKIP)", color: theme.warn, icon: "⚡" };
    }
    if (frame < 2302) {
      return { text: "OPTIMAL · CANDIDATE 6 (START POINT · LEN 1)", color: theme.pivot, icon: "🔍" };
    }
    if (frame < 3262) {
      return { text: "OPTIMAL · RAPID PREDECESSOR SKIPS: 3, 2, 4, 10, 9, 11", color: theme.warn, icon: "⚡" };
    }
    if (frame < 4348) {
      return { text: "OPTIMAL · CANDIDATE -1 (WINNING SEQUENCE)", color: theme.good, icon: "🏆" };
    }
    if (frame < 4592) {
      return { text: "OPTIMAL · LAST CANDIDATE 0 (SKIP)", color: theme.chalkText, icon: "✓" };
    }
    if (frame < 5570) {
      return { text: "OPTIMAL · WHY ONLY 3 WALKS HAPPENED", color: theme.cyan, icon: "🧠" };
    }
    return { text: "OPTIMAL · HANDOFF TO PYTHON IMPLEMENTATION", color: theme.good, icon: "🚀" };
  }, [frame]);

  // ----------------------------------------------------
  // Act 0: Raw Array Population & HashSet Construction
  // ----------------------------------------------------
  const slotPopF = [50, 68, 89, 112, 134, 154, 172, 193, 214, 233, 254, 283];

  // Vertical position of raw array: center stage (y=440) -> bottom source strip (y=650)
  const rawArrayY = clamp(frame, [340, 385], [440, 650]);
  const rawArrayScale = clamp(frame, [340, 385], [1.08, 1.0]);

  // Duplicate 2 merge (F399..F443)
  const isDup2Merged = frame >= 436;

  // Set ready & unique label (F460..F565)
  const uniqueCountOpacity = clamp(frame, [480, 500], [0, 1]);

  // Longest counter state
  const longestVal = useMemo(() => {
    if (frame < 1466) return 0;
    if (frame < 4307) {
      return Math.round(clamp(frame, [1466, 1479], [0, 4]));
    }
    return Math.round(clamp(frame, [4307, 4325], [4, 6]));
  }, [frame]);

  // Current active candidate index in CANDIDATE_SLOTS
  const activeCandidate = useMemo(() => {
    if (frame < 649 || frame >= 4592) return null;
    return CANDIDATE_SLOTS.find((c) => frame >= c.startF && frame < c.endF) || null;
  }, [frame]);

  // Predecessor expression text & query status for active candidate
  const expressionInfo = useMemo(() => {
    if (frame < 649) return null;

    // Candidate 8 (F649..F1525): 8 - 1 = 7 (NO)
    if (frame < 1525) {
      const showExp = frame >= 683;
      const showEquals = frame >= 703;
      const showTarget = frame >= 712;
      const queryStatus = frame >= 807 ? "NO (START)" : frame >= 748 ? "7 in set?" : "";
      return {
        exp: showTarget ? "8 - 1 = 7" : showEquals ? "8 - 1 =" : showExp ? "8 - 1" : "",
        status: queryStatus,
        statusGood: frame >= 807,
        val: 8,
        pred: 7,
      };
    }

    // Candidate 1 (F1525..F1865): 1 - 1 = 0 (YES)
    if (frame < 1865) {
      const showExp = frame >= 1569;
      const showTarget = frame >= 1592;
      const queryStatus = frame >= 1668 ? "YES (SKIP)" : frame >= 1627 ? "0 in set?" : "";
      return {
        exp: showTarget ? "1 - 1 = 0" : showExp ? "1 - 1" : "",
        status: queryStatus,
        statusGood: false,
        val: 1,
        pred: 0,
      };
    }

    // Candidate 6 (F1865..F2302): 6 - 1 = 5 (NO)
    if (frame < 2302) {
      const showExp = frame >= 1901;
      const showTarget = frame >= 1926;
      const queryStatus = frame >= 1970 ? "NO (START)" : frame >= 1935 ? "5 in set?" : "";
      return {
        exp: showTarget ? "6 - 1 = 5" : showExp ? "6 - 1" : "",
        status: queryStatus,
        statusGood: frame >= 1970,
        val: 6,
        pred: 5,
      };
    }

    // Candidate 3 (F2302..F2506): 3 - 1 = 2 (YES)
    if (frame < 2506) {
      return {
        exp: frame >= 2337 ? "3 - 1 = 2" : "",
        status: frame >= 2413 ? "YES (SKIP)" : "2 in set?",
        statusGood: false,
        val: 3,
        pred: 2,
      };
    }

    // Candidate 2 (F2506..F2648): 2 - 1 = 1 (YES)
    if (frame < 2648) {
      return {
        exp: frame >= 2543 ? "2 - 1 = 1" : "",
        status: frame >= 2609 ? "YES (SKIP)" : "1 in set?",
        statusGood: false,
        val: 2,
        pred: 1,
      };
    }

    // Candidate 4 (F2648..F2791): 4 - 1 = 3 (YES)
    if (frame < 2791) {
      return {
        exp: frame >= 2677 ? "4 - 1 = 3" : "",
        status: frame >= 2752 ? "YES (SKIP)" : "3 in set?",
        statusGood: false,
        val: 4,
        pred: 3,
      };
    }

    // Candidate 10 (F2791..F2978): 10 - 1 = 9 (YES)
    if (frame < 2978) {
      return {
        exp: frame >= 2819 ? "10 - 1 = 9" : "",
        status: frame >= 2891 ? "YES (SKIP)" : "9 in set?",
        statusGood: false,
        val: 10,
        pred: 9,
      };
    }

    // Candidate 9 (F2978..F3117): 9 - 1 = 8 (YES)
    if (frame < 3117) {
      return {
        exp: frame >= 3005 ? "9 - 1 = 8" : "",
        status: frame >= 3077 ? "YES (SKIP)" : "8 in set?",
        statusGood: false,
        val: 9,
        pred: 8,
      };
    }

    // Candidate 11 (F3117..F3262): 11 - 1 = 10 (YES)
    if (frame < 3262) {
      return {
        exp: frame >= 3145 ? "11 - 1 = 10" : "",
        status: frame >= 3221 ? "YES (SKIP)" : "10 in set?",
        statusGood: false,
        val: 11,
        pred: 10,
      };
    }

    // Candidate -1 (F3262..F4348): -1 - 1 = -2 (NO)
    if (frame < 4348) {
      const showExp = frame >= 3308;
      const showTarget = frame >= 3353;
      const queryStatus = frame >= 3428 ? "NO (START)" : frame >= 3379 ? "-2 in set?" : "";
      return {
        exp: showTarget ? "-1 - 1 = -2" : showExp ? "-1 - 1" : "",
        status: queryStatus,
        statusGood: frame >= 3428,
        val: -1,
        pred: -2,
      };
    }

    // Candidate 0 (F4348..F4592): 0 - 1 = -1 (YES)
    if (frame < 4592) {
      return {
        exp: frame >= 4404 ? "0 - 1 = -1" : "",
        status: frame >= 4505 ? "YES (SKIP)" : "-1 in set?",
        statusGood: false,
        val: 0,
        pred: -1,
      };
    }

    return null;
  }, [frame]);

  // Active portal pulse and glowing node in HashSet
  const activePortalReaction = useMemo(() => {
    // 8 walk forward lookups: 9 (F931), 10 (F1019), 11 (F1128), 12 (F1232)
    if (frame >= 931 && frame < 975) return { queryVal: 9, hitVal: 9, hit: true };
    if (frame >= 1019 && frame < 1073) return { queryVal: 10, hitVal: 10, hit: true };
    if (frame >= 1128 && frame < 1176) return { queryVal: 11, hitVal: 11, hit: true };
    if (frame >= 1232 && frame < 1286) return { queryVal: 12, hitVal: null, hit: false };

    // 1 predecessor lookup: 0 (F1627..F1696)
    if (frame >= 1627 && frame < 1696) return { queryVal: 0, hitVal: 0, hit: true };

    // 6 forward lookup: 7 (F2112..F2165)
    if (frame >= 2112 && frame < 2165) return { queryVal: 7, hitVal: null, hit: false };

    // Skip lookups:
    if (frame >= 2385 && frame < 2445) return { queryVal: 2, hitVal: 2, hit: true };
    if (frame >= 2575 && frame < 2623) return { queryVal: 1, hitVal: 1, hit: true };
    if (frame >= 2723 && frame < 2768) return { queryVal: 3, hitVal: 3, hit: true };
    if (frame >= 2863 && frame < 2920) return { queryVal: 9, hitVal: 9, hit: true };
    if (frame >= 3053 && frame < 3093) return { queryVal: 8, hitVal: 8, hit: true };
    if (frame >= 3191 && frame < 3239) return { queryVal: 10, hitVal: 10, hit: true };

    // -1 walk forward lookups: 0, 1, 2, 3, 4, 5
    if (frame >= 3568 && frame < 3615) return { queryVal: 0, hitVal: 0, hit: true };
    if (frame >= 3652 && frame < 3700) return { queryVal: 1, hitVal: 1, hit: true };
    if (frame >= 3743 && frame < 3790) return { queryVal: 2, hitVal: 2, hit: true };
    if (frame >= 3833 && frame < 3880) return { queryVal: 3, hitVal: 3, hit: true };
    if (frame >= 3917 && frame < 3965) return { queryVal: 4, hitVal: 4, hit: true };
    if (frame >= 3995 && frame < 4060) return { queryVal: 5, hitVal: null, hit: false };

    // 0 predecessor lookup: -1 (F4471..F4520)
    if (frame >= 4471 && frame < 4520) return { queryVal: -1, hitVal: -1, hit: true };

    return null;
  }, [frame]);

  // Determine status label under each raw array slot
  const slotStatus = useMemo(() => {
    return RAW_ARRAY.map((val, idx) => {
      // Duplicate slot 5
      if (idx === 5) {
        return frame >= 436 ? "DUP" : "";
      }
      // Check if slot has finished or is active
      const cand = CANDIDATE_SLOTS.find((c) => c.slot === idx);
      if (!cand) return "";

      if (frame < cand.startF) return frame >= 572 ? "PENDING" : "";
      if (frame < cand.endF) return "CANDIDATE";

      // Finished states
      if (cand.val === 8 || cand.val === 6 || cand.val === -1) {
        return "START ✓";
      }
      return "SKIP";
    });
  }, [frame]);

  // Act 7 ghost runners: F4702..F4963
  // 1: F4740, 3: F4760, 2: F4790, 4: F4819, 10: F4846, 9: F4882, 11: F4916, 0: F4949
  const activeGhost = useMemo(() => {
    if (frame < 4700 || frame > 4970) return null;
    if (frame >= 4740 && frame < 4760) return { slot: 1, val: 1, pred: 0 };
    if (frame >= 4760 && frame < 4790) return { slot: 3, val: 3, pred: 2 };
    if (frame >= 4790 && frame < 4819) return { slot: 4, val: 2, pred: 1 };
    if (frame >= 4819 && frame < 4846) return { slot: 6, val: 4, pred: 3 };
    if (frame >= 4846 && frame < 4882) return { slot: 7, val: 10, pred: 9 };
    if (frame >= 4882 && frame < 4916) return { slot: 8, val: 9, pred: 8 };
    if (frame >= 4916 && frame < 4949) return { slot: 9, val: 11, pred: 10 };
    if (frame >= 4949 && frame < 4970) return { slot: 11, val: 0, pred: -1 };
    return null;
  }, [frame]);

  // =============================================================================
  // RENDER
  // =============================================================================
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
      {frame >= 426 && frame <= 448 && (
        <ChalkDust x={600} y={405} start={426} count={16} radius={45} color={theme.purple} />
      )}

      <Audio src={staticFile("audio/010/10-trace-optimal.mp3")} name="VO 10" />

      {/* ========================================================================= */}
      {/* TOP BADGE (Y: 28..70)                                                     */}
      {/* ========================================================================= */}
      <div
        style={{
          position: "absolute",
          top: 30,
          left: 0,
          right: 0,
          display: "flex",
          justifyContent: "center",
          zIndex: 40,
        }}
      >
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 12,
            padding: "8px 24px",
            borderRadius: 20,
            backgroundColor: "rgba(10, 36, 25, 0.85)",
            border: `1.5px solid ${topBadgeInfo.color}`,
            boxShadow: `0 0 16px ${topBadgeInfo.color}33`,
          }}
        >
          <span style={{ fontSize: 20 }}>{topBadgeInfo.icon}</span>
          <span
            style={{
              fontFamily: fonts.mono,
              fontSize: 18,
              fontWeight: 800,
              color: topBadgeInfo.color,
              letterSpacing: 1.5,
            }}
          >
            {topBadgeInfo.text}
          </span>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* LONGEST COUNTER (Top Right: X: 1620..1840, Y: 95..185)                    */}
      {/* ========================================================================= */}
      {frame >= 596 && frame < 5570 && (
        <div
          style={{
            position: "absolute",
            right: 80,
            top: 100,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "12px 28px",
            borderRadius: 16,
            backgroundColor: "rgba(10, 36, 25, 0.85)",
            border: `2px solid ${longestVal === 6 ? theme.good : theme.pivot}`,
            boxShadow: `0 0 20px ${longestVal === 6 ? theme.good : theme.pivot}44`,
            zIndex: 40,
          }}
        >
          <span
            style={{
              fontFamily: fonts.hand,
              fontSize: 24,
              color: theme.chalkDim,
              letterSpacing: 1,
            }}
          >
            LONGEST
          </span>
          <span
            style={{
              fontFamily: fonts.mono,
              fontSize: 54,
              fontWeight: "bold",
              color: longestVal === 6 ? theme.good : theme.pivot,
              lineHeight: 1,
              marginTop: 4,
            }}
          >
            {longestVal}
          </span>
        </div>
      )}

      {/* ========================================================================= */}
      {/* PREDECESSOR QUERY / EXPRESSION HERO BOX (Y: 100..190)                     */}
      {/* ========================================================================= */}
      {expressionInfo && expressionInfo.exp && frame < 4592 && (
        <div
          style={{
            position: "absolute",
            top: 100,
            left: 0,
            right: 0,
            display: "flex",
            justifyContent: "center",
            zIndex: 35,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 20,
              padding: "10px 32px",
              borderRadius: 16,
              backgroundColor: "rgba(10, 36, 25, 0.9)",
              border: `1.5px solid ${expressionInfo.statusGood ? theme.good : theme.pivot}`,
              boxShadow: "0 8px 24px rgba(0, 0, 0, 0.5)",
            }}
          >
            <span
              style={{
                fontFamily: fonts.mono,
                fontSize: 34,
                fontWeight: "bold",
                color: theme.chalkText,
                letterSpacing: 2,
              }}
            >
              {expressionInfo.exp}
            </span>

            {expressionInfo.status && (
              <span
                style={{
                  fontFamily: fonts.mono,
                  fontSize: 26,
                  fontWeight: 800,
                  padding: "4px 14px",
                  borderRadius: 10,
                  backgroundColor: expressionInfo.statusGood
                    ? "rgba(60, 229, 167, 0.2)"
                    : "rgba(255, 118, 117, 0.2)",
                  color: expressionInfo.statusGood ? theme.good : theme.warn,
                  border: `1px solid ${expressionInfo.statusGood ? theme.good : theme.warn}`,
                }}
              >
                {expressionInfo.status}
              </span>
            )}
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* MAIN HASHSET HERO ENCLOSURE & NODES (Y: 220..585)                         */}
      {/* ========================================================================= */}
      {frame >= 313 && (
        <div
          style={{
            position: "absolute",
            left: frame >= 5570 ? 1100 : 250,
            top: frame >= 5570 ? 260 : 195,
            width: frame >= 5570 ? 720 : 1420,
            height: frame >= 5570 ? 460 : 385,
            borderRadius: 24,
            border: `2px dashed ${theme.purple}`,
            backgroundColor: "rgba(216, 180, 226, 0.04)",
            boxShadow: `inset 0 0 30px rgba(216, 180, 226, 0.08)`,
            zIndex: 10,
            opacity: frame >= 4592 && frame < 5570 ? 0.65 : 1,
            transition: "all 0.4s ease-out",
          }}
        >
          {/* Label */}
          <div
            style={{
              position: "absolute",
              top: 14,
              left: 28,
              display: "flex",
              alignItems: "center",
              gap: 12,
            }}
          >
            <span
              style={{
                fontFamily: fonts.mono,
                fontSize: 22,
                fontWeight: "bold",
                color: theme.purple,
                letterSpacing: 2,
              }}
            >
              HASH SET (UNORDERED · EXPECTED O(1) LOOKUP)
            </span>
            {uniqueCountOpacity > 0 && frame < 5570 && (
              <span
                style={{
                  fontFamily: fonts.hand,
                  fontSize: 22,
                  color: theme.good,
                  opacity: uniqueCountOpacity,
                }}
              >
                11 UNIQUE ELEMENTS
              </span>
            )}
          </div>

          {/* 11 Unordered Hash Nodes rendered via RoughNode with opaque chalkboard shield */}
          <svg
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              overflow: "visible",
              pointerEvents: "none",
            }}
          >
            {HASH_NODES.map((node) => {
              const isHit = activePortalReaction?.hitVal === node.val;
              const isCandidate = activeCandidate?.val === node.val;

              const isWinningNode =
                frame >= 4099 &&
                frame < 5570 &&
                [-1, 0, 1, 2, 3, 4].includes(node.val);

              const isStartNode =
                frame >= 5114 &&
                frame < 5570 &&
                (node.val === 8 || node.val === 6 || node.val === -1);

              const nx = (frame >= 5570 ? (node.x - 250) * 0.48 : node.x - 250) + 34;
              const ny = (frame >= 5570 ? (node.y - 195) * 1.15 : node.y - 195) + 34;

              const stroke = isHit
                ? theme.good
                : isCandidate
                ? theme.pivot
                : isStartNode || isWinningNode
                ? theme.good
                : "rgba(216, 180, 226, 0.7)";

              const textColor = isHit
                ? theme.good
                : isCandidate
                ? theme.pivot
                : isWinningNode
                ? theme.good
                : theme.chalkText;

              return (
                <RoughNode
                  key={node.val}
                  x={nx}
                  y={ny}
                  r={34}
                  label={node.val}
                  stroke={stroke}
                  strokeWidth={isHit || isCandidate ? 3 : 2}
                  fill={theme.boardBg}
                  textColor={textColor}
                  fontSize={28}
                  seed={node.val + 50}
                  semanticState={isHit || isStartNode || isWinningNode ? "root" : isCandidate ? "active" : "default"}
                  ring={isHit || isCandidate}
                  ringStroke={isHit ? theme.good : theme.pivot}
                  ringDash="4,4"
                  style={{
                    transformOrigin: `${nx}px ${ny}px`,
                    transform: isHit ? "scale(1.22)" : isCandidate ? "scale(1.12)" : "scale(1.0)",
                    filter: isHit
                      ? `drop-shadow(0 0 12px ${theme.good})`
                      : isCandidate
                      ? `drop-shadow(0 0 10px ${theme.pivot})`
                      : undefined,
                  }}
                />
              );
            })}
          </svg>
        </div>
      )}

      {/* ========================================================================= */}
      {/* RAW ORIGINAL ARRAY / DRY-RUN SOURCE STRIP                                 */}
      {/* ========================================================================= */}
      <div
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          top: rawArrayY,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          transform: `scale(${rawArrayScale})`,
          zIndex: 25,
          opacity: frame >= 5570 ? clamp(frame, [5570, 5600], [1, 0]) : 1,
        }}
      >
        {/* Strip Header Label */}
        <div
          style={{
            fontFamily: fonts.mono,
            fontSize: 18,
            fontWeight: 700,
            color: theme.chalkDim,
            letterSpacing: 2,
            marginBottom: 8,
          }}
        >
          {frame < 340 ? "ORIGINAL INPUT ARRAY" : "DRY RUN SOURCE (PRESERVED FIRST-APPEARANCE ORDER)"}
        </div>

        {/* 12 Slots */}
        <div style={{ display: "flex", gap: SLOT_GAP }}>
          {RAW_ARRAY.map((val, idx) => {
            const isVisible = frame >= slotPopF[idx];
            const isDupSlot = idx === 5;
            const status = slotStatus[idx];
            const isCandSlot = activeCandidate?.slot === idx;

            // In Act 7 proof (F5114..F5289): dim non-start slots
            const isAct7Dim =
              frame >= 5114 &&
              frame < 5290 &&
              idx !== 0 &&
              idx !== 2 &&
              idx !== 10;

            return (
              <div
                key={idx}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  width: SLOT_W,
                }}
              >
                {/* Slot Card */}
                <div
                  style={{
                    position: "relative",
                    width: SLOT_W,
                    height: SLOT_H,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transform: isCandSlot ? "scale(1.08)" : "scale(1.0)",
                    opacity: !isVisible
                      ? 0
                      : isAct7Dim
                      ? 0.25
                      : isDupSlot && isDup2Merged
                      ? 0.35
                      : 1,
                  }}
                >
                  <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
                    <ArraySlotV2
                      width={SLOT_W}
                      height={SLOT_H}
                      stroke={
                        isCandSlot
                          ? theme.pivot
                          : isDupSlot && isDup2Merged
                          ? "rgba(248, 246, 240, 0.25)"
                          : "rgba(248, 246, 240, 0.4)"
                      }
                      strokeWidth={isCandSlot ? 2.5 : 1.5}
                      fill={theme.boardBg}
                      semanticState={isCandSlot ? "active" : "default"}
                      seed={idx + 10}
                    />
                  </div>
                  <span
                    style={{
                      fontFamily: fonts.mono,
                      fontSize: 34,
                      fontWeight: "bold",
                      color: isCandSlot
                        ? theme.pivot
                        : isDupSlot && isDup2Merged
                        ? theme.chalkDim
                        : theme.chalkText,
                      zIndex: 2,
                    }}
                  >
                    {val}
                  </span>
                </div>

                {/* Status Notch / Badge Under Slot */}
                {isVisible && status && (
                  <div
                    style={{
                      marginTop: 6,
                      fontFamily: fonts.mono,
                      fontSize: 13,
                      fontWeight: 800,
                      color:
                        status === "START ✓"
                          ? theme.good
                          : status === "CANDIDATE"
                          ? theme.pivot
                          : status === "DUP"
                          ? theme.purple
                          : status === "SKIP"
                          ? theme.warn
                          : theme.chalkDim,
                      letterSpacing: 0.5,
                      textAlign: "center",
                      opacity: isAct7Dim ? 0.25 : 1,
                    }}
                  >
                    {status}
                  </div>
                )}

                {/* Ghost runner rejection pulse in Act 7 */}
                {activeGhost && activeGhost.slot === idx && (
                  <div
                    style={{
                      marginTop: 4,
                      fontFamily: fonts.mono,
                      fontSize: 11,
                      fontWeight: 800,
                      color: theme.warn,
                      backgroundColor: "rgba(255, 118, 117, 0.2)",
                      padding: "2px 6px",
                      borderRadius: 6,
                      border: `1px solid ${theme.warn}`,
                    }}
                  >
                    {activeGhost.pred} IN SET ✕
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* ========================================================================= */}
      {/* ACTIVE TEMPORARY SEQUENCE RIBBON (Y: 840..905) — ACTS 1 TO 6 ONLY         */}
      {/* ========================================================================= */}

      {/* Ribbon for Candidate 8 (F869..F1501 active, faint history until F4592) */}
      {frame >= 869 && frame < 4592 && (activeCandidate?.val === 8 || (frame >= 869 && frame < 1525)) && (
        <div
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            top: 840,
            display: "flex",
            justifyContent: "center",
            opacity: frame >= 1525 ? 0.35 : 1,
            zIndex: 30,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 16,
              padding: "10px 28px",
              borderRadius: 18,
              backgroundColor: "rgba(10, 36, 25, 0.9)",
              border: `1.5px solid ${theme.good}`,
              boxShadow: "0 8px 24px rgba(0, 0, 0, 0.6)",
            }}
          >
            <span style={{ fontFamily: fonts.hand, fontSize: 24, color: theme.chalkDim }}>
              CHAIN 8:
            </span>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <span style={{ fontFamily: fonts.mono, fontSize: 32, fontWeight: "bold", color: theme.good }}>
                8
              </span>
              {frame >= 946 && (
                <>
                  <span style={{ color: theme.good, fontSize: 22 }}>→</span>
                  <span style={{ fontFamily: fonts.mono, fontSize: 32, fontWeight: "bold", color: theme.good }}>
                    9
                  </span>
                </>
              )}
              {frame >= 1034 && (
                <>
                  <span style={{ color: theme.good, fontSize: 22 }}>→</span>
                  <span style={{ fontFamily: fonts.mono, fontSize: 32, fontWeight: "bold", color: theme.good }}>
                    10
                  </span>
                </>
              )}
              {frame >= 1140 && (
                <>
                  <span style={{ color: theme.good, fontSize: 22 }}>→</span>
                  <span style={{ fontFamily: fonts.mono, fontSize: 32, fontWeight: "bold", color: theme.good }}>
                    11
                  </span>
                </>
              )}
              {frame >= 1254 && (
                <>
                  <span style={{ color: theme.warn, fontSize: 22 }}>⇸</span>
                  <span style={{ fontFamily: fonts.mono, fontSize: 26, fontWeight: "bold", color: theme.warn }}>
                    12 ✕
                  </span>
                </>
              )}
            </div>

            <span
              style={{
                fontFamily: fonts.mono,
                fontSize: 18,
                fontWeight: 800,
                color: theme.pivot,
                padding: "3px 10px",
                borderRadius: 8,
                backgroundColor: "rgba(255, 209, 102, 0.15)",
                marginLeft: 16,
              }}
            >
              {frame >= 1176 ? "LEN 4" : frame >= 1073 ? "LEN 3" : frame >= 975 ? "LEN 2" : "LEN 1"}
            </span>
          </div>
        </div>
      )}

      {/* Ribbon for Candidate 6 (F2022..F2287) */}
      {frame >= 2022 && frame < 2302 && (
        <div
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            top: 840,
            display: "flex",
            justifyContent: "center",
            zIndex: 30,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 16,
              padding: "10px 28px",
              borderRadius: 18,
              backgroundColor: "rgba(10, 36, 25, 0.9)",
              border: `1.5px solid ${theme.good}`,
            }}
          >
            <span style={{ fontFamily: fonts.hand, fontSize: 24, color: theme.chalkDim }}>
              CHAIN 6:
            </span>
            <span style={{ fontFamily: fonts.mono, fontSize: 32, fontWeight: "bold", color: theme.good }}>
              6
            </span>
            {frame >= 2112 && (
              <>
                <span style={{ color: theme.warn, fontSize: 22 }}>⇸</span>
                <span style={{ fontFamily: fonts.mono, fontSize: 26, fontWeight: "bold", color: theme.warn }}>
                  7 ✕
                </span>
              </>
            )}
            <span
              style={{
                fontFamily: fonts.mono,
                fontSize: 18,
                fontWeight: 800,
                color: theme.pivot,
                padding: "3px 10px",
                borderRadius: 8,
                backgroundColor: "rgba(255, 209, 102, 0.15)",
                marginLeft: 16,
              }}
            >
              LEN 1
            </span>
          </div>
        </div>
      )}

      {/* Ribbon for Candidate -1 (F3439..F4338 active, faint until F4592) */}
      {frame >= 3439 && frame < 4592 && (
        <div
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            top: 840,
            display: "flex",
            justifyContent: "center",
            opacity: frame >= 4348 ? 0.45 : 1,
            zIndex: 30,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 14,
              padding: "10px 28px",
              borderRadius: 18,
              backgroundColor: "rgba(10, 36, 25, 0.9)",
              border: `2px solid ${theme.good}`,
              boxShadow: "0 0 24px rgba(60, 229, 167, 0.4)",
            }}
          >
            <span style={{ fontFamily: fonts.hand, fontSize: 24, color: theme.good }}>
              WINNING SEQUENCE:
            </span>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <span style={{ fontFamily: fonts.mono, fontSize: 32, fontWeight: "bold", color: theme.good }}>
                -1
              </span>
              {frame >= 3568 && (
                <>
                  <span style={{ color: theme.good, fontSize: 20 }}>→</span>
                  <span style={{ fontFamily: fonts.mono, fontSize: 32, fontWeight: "bold", color: theme.good }}>
                    0
                  </span>
                </>
              )}
              {frame >= 3652 && (
                <>
                  <span style={{ color: theme.good, fontSize: 20 }}>→</span>
                  <span style={{ fontFamily: fonts.mono, fontSize: 32, fontWeight: "bold", color: theme.good }}>
                    1
                  </span>
                </>
              )}
              {frame >= 3743 && (
                <>
                  <span style={{ color: theme.good, fontSize: 20 }}>→</span>
                  <span style={{ fontFamily: fonts.mono, fontSize: 32, fontWeight: "bold", color: theme.good }}>
                    2
                  </span>
                </>
              )}
              {frame >= 3833 && (
                <>
                  <span style={{ color: theme.good, fontSize: 20 }}>→</span>
                  <span style={{ fontFamily: fonts.mono, fontSize: 32, fontWeight: "bold", color: theme.good }}>
                    3
                  </span>
                </>
              )}
              {frame >= 3917 && (
                <>
                  <span style={{ color: theme.good, fontSize: 20 }}>→</span>
                  <span style={{ fontFamily: fonts.mono, fontSize: 32, fontWeight: "bold", color: theme.good }}>
                    4
                  </span>
                </>
              )}
              {frame >= 4028 && (
                <>
                  <span style={{ color: theme.warn, fontSize: 20 }}>⇸</span>
                  <span style={{ fontFamily: fonts.mono, fontSize: 26, fontWeight: "bold", color: theme.warn }}>
                    5 ✕
                  </span>
                </>
              )}
            </div>

            <span
              style={{
                fontFamily: fonts.mono,
                fontSize: 20,
                fontWeight: 800,
                color: theme.pivot,
                padding: "4px 12px",
                borderRadius: 8,
                backgroundColor: "rgba(255, 209, 102, 0.2)",
                marginLeft: 14,
              }}
            >
              {frame >= 3956
                ? "LEN 6"
                : frame >= 3877
                ? "LEN 5"
                : frame >= 3785
                ? "LEN 4"
                : frame >= 3691
                ? "LEN 3"
                : frame >= 3604
                ? "LEN 2"
                : "LEN 1"}
            </span>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* ACT 7: AVOIDED WORK PROOF & 3 STARTS SUMMARY (F4592..F5570)               */}
      {/* ========================================================================= */}

      {/* F4978..F5000: "WHY?" */}
      {frame >= 4978 && frame < 5003 && (
        <div
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            top: 825,
            display: "flex",
            justifyContent: "center",
            zIndex: 45,
          }}
        >
          <span
            style={{
              fontFamily: fonts.hand,
              fontSize: 48,
              fontWeight: "bold",
              color: theme.pivot,
              letterSpacing: 2,
            }}
          >
            WHY DID WE SKIP THEM?
          </span>
        </div>
      )}

      {/* F5003..F5114: "Because all of them already had a number just before them." */}
      {frame >= 5003 && frame < 5114 && (
        <div
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            top: 830,
            display: "flex",
            justifyContent: "center",
            zIndex: 45,
          }}
        >
          <div
            style={{
              padding: "10px 32px",
              borderRadius: 16,
              backgroundColor: "rgba(10, 36, 25, 0.95)",
              border: `2px solid ${theme.cyan}`,
              boxShadow: `0 0 20px ${theme.cyan}44`,
            }}
          >
            <span
              style={{
                fontFamily: fonts.mono,
                fontSize: 22,
                fontWeight: 800,
                color: theme.cyan,
                letterSpacing: 1.5,
              }}
            >
              PREDECESSOR (num - 1) EXISTS IN SET ➔ NOT A START ➔ SKIP
            </span>
          </div>
        </div>
      )}

      {/* F5114..F5290: Real Starts statement */}
      {frame >= 5114 && frame < 5290 && (
        <div
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            top: 825,
            display: "flex",
            justifyContent: "center",
            zIndex: 45,
          }}
        >
          <div
            style={{
              padding: "10px 32px",
              borderRadius: 16,
              backgroundColor: "rgba(10, 36, 25, 0.95)",
              border: `2px solid ${theme.good}`,
              boxShadow: "0 0 24px rgba(60, 229, 167, 0.4)",
              display: "flex",
              alignItems: "center",
              gap: 20,
            }}
          >
            <span
              style={{
                fontFamily: fonts.mono,
                fontSize: 24,
                fontWeight: 800,
                color: theme.good,
                letterSpacing: 1.5,
              }}
            >
              ONLY 3 REAL STARTS LAUNCHED WALKS:
            </span>
            <span
              style={{
                fontFamily: fonts.mono,
                fontSize: 30,
                fontWeight: "bold",
                color: theme.pivot,
                letterSpacing: 2,
              }}
            >
              8 · 6 · -1
            </span>
          </div>
        </div>
      )}

      {/* F5290..F5393: Stacking the 3 discovered sequences */}
      {frame >= 5290 && frame < 5393 && (
        <div
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            top: 800,
            display: "flex",
            justifyContent: "center",
            zIndex: 45,
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 8,
              padding: "14px 36px",
              borderRadius: 18,
              backgroundColor: "rgba(10, 36, 25, 0.95)",
              border: "1.5px solid rgba(248, 246, 240, 0.3)",
              boxShadow: "0 8px 24px rgba(0, 0, 0, 0.7)",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", gap: 40, alignItems: "center" }}>
              <span style={{ fontFamily: fonts.mono, fontSize: 24, color: theme.chalkText }}>
                8 → 9 → 10 → 11
              </span>
              <span style={{ fontFamily: fonts.mono, fontSize: 20, fontWeight: 700, color: theme.chalkDim }}>
                LENGTH 4
              </span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", gap: 40, alignItems: "center" }}>
              <span style={{ fontFamily: fonts.mono, fontSize: 24, color: theme.chalkText }}>
                6
              </span>
              <span style={{ fontFamily: fonts.mono, fontSize: 20, fontWeight: 700, color: theme.chalkDim }}>
                LENGTH 1
              </span>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                gap: 40,
                alignItems: "center",
                borderTop: "1px dashed rgba(60, 229, 167, 0.5)",
                paddingTop: 8,
              }}
            >
              <span style={{ fontFamily: fonts.mono, fontSize: 26, fontWeight: "bold", color: theme.good }}>
                -1 → 0 → 1 → 2 → 3 → 4
              </span>
              <span style={{ fontFamily: fonts.mono, fontSize: 22, fontWeight: 800, color: theme.good }}>
                WINNER · LENGTH 6
              </span>
            </div>
          </div>
        </div>
      )}

      {/* F5393..F5434: "No sorting." */}
      {frame >= 5393 && frame < 5434 && (
        <div
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            top: 810,
            display: "flex",
            justifyContent: "center",
            zIndex: 45,
          }}
        >
          <div
            style={{
              padding: "10px 32px",
              borderRadius: 16,
              backgroundColor: "rgba(10, 36, 25, 0.95)",
              border: `2px solid ${theme.warn}`,
              boxShadow: `0 0 20px ${theme.warn}44`,
              display: "flex",
              alignItems: "center",
              gap: 16,
            }}
          >
            <span style={{ fontSize: 28 }}>🚫</span>
            <span
              style={{
                fontFamily: fonts.hand,
                fontSize: 34,
                fontWeight: "bold",
                color: theme.warn,
                letterSpacing: 1,
              }}
            >
              NO SORTING REQUIRED! Array remains in original order.
            </span>
          </div>
        </div>
      )}

      {/* F5434..F5498: "No repeated list scanning." */}
      {frame >= 5434 && frame < 5498 && (
        <div
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            top: 810,
            display: "flex",
            justifyContent: "center",
            zIndex: 45,
          }}
        >
          <div
            style={{
              padding: "10px 32px",
              borderRadius: 16,
              backgroundColor: "rgba(10, 36, 25, 0.95)",
              border: `2px solid ${theme.good}`,
              boxShadow: `0 0 20px ${theme.good}44`,
              display: "flex",
              alignItems: "center",
              gap: 16,
            }}
          >
            <span style={{ fontSize: 28 }}>⚡</span>
            <span
              style={{
                fontFamily: fonts.hand,
                fontSize: 34,
                fontWeight: "bold",
                color: theme.good,
                letterSpacing: 1,
              }}
            >
              NO REPEATED SCANS! Every lookup is direct O(1) in the HashSet.
            </span>
          </div>
        </div>
      )}

      {/* F5498..F5570: "That is the whole idea." (Summary concept panel) */}
      {frame >= 5498 && frame < 5570 && (
        <div
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            top: 790,
            display: "flex",
            justifyContent: "center",
            zIndex: 45,
          }}
        >
          <div
            style={{
              padding: "16px 36px",
              borderRadius: 18,
              backgroundColor: "rgba(10, 36, 25, 0.96)",
              border: `2px solid ${theme.pivot}`,
              boxShadow: `0 0 26px ${theme.pivot}44`,
              display: "flex",
              flexDirection: "column",
              gap: 10,
            }}
          >
            <span
              style={{
                fontFamily: fonts.mono,
                fontSize: 22,
                fontWeight: 800,
                color: theme.pivot,
                letterSpacing: 1.5,
              }}
            >
              THE CORE PATTERN:
            </span>
            <div style={{ fontFamily: fonts.mono, fontSize: 22, color: theme.chalkText, lineHeight: 1.5 }}>
              <div>1. Is (num - 1) in set?  ➔  <span style={{ color: theme.warn }}>YES: SKIP (Middle)</span></div>
              <div>2. Is (num - 1) absent?  ➔  <span style={{ color: theme.good }}>NO: START (Walk Forward)</span></div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* ACT 8: HANDOFF TO SCENE 11 CODE (F5570..F5653)                            */}
      {/* ========================================================================= */}
      {frame >= 5570 && (
        <div
          style={{
            position: "absolute",
            left: 120,
            top: 240,
            width: 880,
            height: 520,
            borderRadius: 20,
            backgroundColor: "rgba(10, 36, 25, 0.95)",
            border: `2px solid ${theme.good}`,
            boxShadow: "0 0 30px rgba(60, 229, 167, 0.3)",
            padding: "24px 36px",
            display: "flex",
            flexDirection: "column",
            gap: 20,
            zIndex: 50,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <span style={{ width: 14, height: 14, borderRadius: "50%", backgroundColor: theme.warn }} />
            <span style={{ width: 14, height: 14, borderRadius: "50%", backgroundColor: theme.pivot }} />
            <span style={{ width: 14, height: 14, borderRadius: "50%", backgroundColor: theme.good }} />
            <span
              style={{
                fontFamily: fonts.mono,
                fontSize: 18,
                fontWeight: 700,
                color: theme.chalkDim,
                marginLeft: 16,
              }}
            >
              longest_consecutive.py
            </span>
          </div>

          <div
            style={{
              marginTop: 18,
              fontFamily: fonts.mono,
              fontSize: 24,
              lineHeight: 1.8,
              color: theme.chalkText,
            }}
          >
            <div>
              <span style={{ color: theme.purple }}>num_set</span> = set(nums)
            </div>
            <div>
              <span style={{ color: theme.cyan }}>for</span> num in num_set:
            </div>
            <div style={{ paddingLeft: 30 }}>
              <span style={{ color: theme.cyan }}>if</span> (num - 1) not in num_set:
            </div>
            <div style={{ paddingLeft: 60, color: theme.good }}>
              # True starting point found! Walk forward...
            </div>
            <div style={{ paddingLeft: 60 }}>
              <span style={{ color: theme.pivot }}>length</span> = 1
            </div>
          </div>

          <div
            style={{
              marginTop: "auto",
              fontFamily: fonts.hand,
              fontSize: 26,
              color: theme.pivot,
              textAlign: "right",
            }}
          >
            Next: Writing the full code line-by-line ➔
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* CAPTIONS SAFE ZONE (Y: 960..1040)                                         */}
      {/* ========================================================================= */}
      <Captions words={captionWords} bottom={38} fontSize={38} />
    </div>
  );
};
