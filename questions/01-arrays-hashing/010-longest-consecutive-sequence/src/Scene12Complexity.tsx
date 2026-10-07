import React, { useMemo } from "react";
import {
  Audio,
  interpolate,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { fonts, theme } from "../../../../kit/lib/theme";
import { ChalkboardBackground, ChalkFilters, CHALK_FILTER_STRONG_ID } from "../../../../kit/lib/chalk";
import { ChalkDust } from "../../../../kit/components/ChalkDust";
import { Captions, CaptionWord } from "../../../../kit/components/Captions";
import { RoughLine } from "../../../../kit/components/RoughLine";
import { RoughBox } from "../../../../kit/components/RoughBox";
import { RoughCurve } from "../../../../kit/components/RoughCurve";
import { CountUp } from "../../../../kit/components/CountUp";
import syncData from "../sync/12-complexity.json";

// =============================================================================
// DATA STRUCTURES & STATIC CONSTANTS
// =============================================================================

// Unordered HashSet layout coordinates (11 elements, locked organic scatter from Scene 09/10)
const HASH_FIELD_NODES = [
  { val: 8,  x: 160, y: 15 },
  { val: -1, x: 400, y: 10 },
  { val: 3,  x: 640, y: 16 },
  { val: 10, x: 880, y: 12 },
  { val: 0,  x: 80,  y: 74 },
  { val: 2,  x: 290, y: 78 },
  { val: 6,  x: 520, y: 70 },
  { val: 11, x: 750, y: 80 },
  { val: 4,  x: 970, y: 72 },
  { val: 9,  x: 210, y: 138 },
  { val: 1,  x: 650, y: 140 },
];

// Longest Chain: -1, 0, 1, 2, 3, 4 (6 nodes)
const CHAIN_NODES = [-1, 0, 1, 2, 3, 4];

// Second Island: 8, 9, 10, 11 (4 nodes)
const SECOND_ISLAND_NODES = [8, 9, 10, 11];

// Master sequence islands (3 islands, 11 unique values)
const ISLAND_A = [-1, 0, 1, 2, 3, 4];
const ISLAND_B = [6];
const ISLAND_C = [8, 9, 10, 11];

// =============================================================================
// MAIN COMPONENT: Scene12Complexity
// =============================================================================

export const Scene12Complexity: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // ----------------------------------------------------
  // Audio & Captions Sync
  // ----------------------------------------------------
  const captionWords = useMemo<CaptionWord[]>(() => {
    return (syncData.words || []).map((w) => ({
      word: w.word,
      start: w.start_ms / 1000,
      end: w.end_ms / 1000,
    }));
  }, []);

  // ----------------------------------------------------
  // Dynamic Top Badge Text & Color
  // ----------------------------------------------------
  const badgeInfo = useMemo(() => {
    if (frame < 461) {
      return { text: "COMPLEXITY · WHY NOT n²?", color: theme.pivot };
    }
    if (frame < 1374) {
      return { text: "PROOF 1 · ONE LAUNCH PER CHAIN", color: theme.good };
    }
    if (frame < 1910) {
      return { text: "PROOF 2 · SEQUENCE OWNERSHIP", color: theme.cyan };
    }
    if (frame < 2733) {
      return { text: "WORK LEDGER · n + n + ≤n", color: theme.good };
    }
    if (frame < 3173) {
      return { text: "THE JOURNEY · BRUTE → SORT → OPTIMAL", color: theme.pivot };
    }
    return { text: "THE ALGORITHM GUARD · ONE WALK PER RUN", color: theme.good };
  }, [frame]);

  // ===========================================================================
  // ACT 0: THE NESTED-LOOP TRAP (F0 – F447)
  // ===========================================================================
  const act0Active = frame < 480;
  const act0Opacity = interpolate(frame, [0, 20, 440, 480], [1, 1, 1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Structural lines isolate: F0..F78
  const codeLinesRecede = interpolate(frame, [0, 40], [0.45, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  // Question arc above lines: F21..F88
  const questionArcProg = interpolate(frame, [21, 55], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  // Outer FOR bracket: F100..F130
  const forBracketProg = interpolate(frame, [100, 128], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  // Inner WHILE indent & bracket: F146..F218
  const whileIndentProg = interpolate(frame, [146, 172], [0, 36], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const whileBracketProg = interpolate(frame, [187, 216], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  // Slide toward center and reveal O(n²)?: F239..F284
  const trapSlideProg = interpolate(frame, [239, 260], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const oParenProg = interpolate(frame, [256, 262], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const nSquaredProg = interpolate(frame, [263, 280], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  // Wrong model grid: F301..F347
  const wrongGridOpacity = interpolate(frame, [301, 335, 365, 385], [0, 0.45, 0.45, 0.12], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  // Decisive NO strike: F365..F385
  const strikeProg = interpolate(frame, [365, 382], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  // START CHECK condition reveal: F392..F447
  const startCheckSlideProg = interpolate(frame, [392, 420], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const startCheckTextProg = interpolate(frame, [430, 447], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // ===========================================================================
  // ACT 1: LONGEST CHAIN — ONE LAUNCH, NOT SIX (F461 – F1351)
  // ===========================================================================
  const act1Active = frame >= 460 && frame < 1374;
  const act1Opacity = interpolate(frame, [460, 485, 1345, 1374], [0, 1, 1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Nodes reveal word-by-word
  const chainRevealFrames = [516, 553, 583, 605, 629, 655];
  // Potential start stems appear under all nodes: F667..F683
  const stemsAppearProg = interpolate(frame, [667, 683], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  // Stem pulse on question: F683..F736
  const stemPulse = Math.sin((frame - 683) * 0.25) * 4;

  // Node -1 launches START: F751..F779
  const startMinusOneProg = interpolate(frame, [751, 775], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Reject 0 (predecessor -1 exists): F792..F875
  const link0Prog = interpolate(frame, [821, 850], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const skip0Prog = interpolate(frame, [856, 875], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Reject 1 (predecessor 0 exists): F886..F957
  const link1Prog = interpolate(frame, [921, 937], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const skip1Prog = interpolate(frame, [937, 957], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Reject 2 (predecessor 1 exists): F969..F1034
  const link2Prog = interpolate(frame, [1004, 1016], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const skip2Prog = interpolate(frame, [1016, 1034], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Reject 3 (predecessor 2 exists): F1045..F1116
  const link3Prog = interpolate(frame, [1084, 1097], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const skip3Prog = interpolate(frame, [1097, 1116], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Reject 4 (predecessor 3 exists): F1130..F1208
  const link4Prog = interpolate(frame, [1172, 1189], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const skip4Prog = interpolate(frame, [1189, 1208], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Single mint runner sweep: F1261..F1299
  const chainRunnerProg = interpolate(frame, [1261, 1299], [0, 5], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const chainOneWalkProg = interpolate(frame, [1290, 1310], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Ghost runner fan & strike: F1311..F1351
  const ghostFanProg = interpolate(frame, [1311, 1325], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const ghostStrikeProg = interpolate(frame, [1333, 1348], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const ghostRetractProg = interpolate(frame, [1335, 1351], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // ===========================================================================
  // ACT 2: SECOND ISLAND & GLOBAL OWNED-ONCE PROOF (F1374 – F1890)
  // ===========================================================================
  const act2Active = frame >= 1370 && frame < 1920;
  const act2Opacity = interpolate(frame, [1370, 1390, 1885, 1920], [0, 1, 1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Second island nodes write: F1389, F1410, F1439, F1462
  const secondIslandFrames = [1389, 1410, 1439, 1462];

  // Only 8 launches: F1511..F1558
  const start8Prog = interpolate(frame, [1511, 1530], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // 9, 10, 11 fold to SKIP: F1574..F1619
  const skip9Prog = interpolate(frame, [1574, 1585], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const skip10Prog = interpolate(frame, [1585, 1597], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const skip11Prog = interpolate(frame, [1606, 1619], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Runner 8 sweep: F1625..F1654
  const runner8Prog = interpolate(frame, [1625, 1654], [0, 3], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Three-island global assembly: F1654..F1890
  const globalIslandsProg = interpolate(frame, [1654, 1690], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  // Ownership sweep across all 11 unique values: F1733..F1775
  const ownershipSweepProg = interpolate(frame, [1733, 1775], [0, 11], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  // One owner brace: F1868..F1890
  const oneOwnerBraceProg = interpolate(frame, [1868, 1890], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // ===========================================================================
  // ACT 3: THREE-LANE WORK LEDGER & FORMAL DERIVATION (F1910 – F2716)
  // ===========================================================================
  const act3Active = frame >= 1895 && frame < 2740;
  const act3Opacity = interpolate(frame, [1895, 1925, 2715, 2740], [0, 1, 1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Lane 1: BUILD SET (F1910..F2017)
  const lane1Grow = interpolate(frame, [1910, 1945], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const lane1BigO = interpolate(frame, [1951, 1983], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Lane 2: START CHECKS (F2033..F2211)
  const lane2CursorProg = interpolate(frame, [2033, 2143], [0, 11], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const lane2Grow = interpolate(frame, [2033, 2143], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const lane2BigO = interpolate(frame, [2154, 2183], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Lane 3: FORWARD WALKS (F2226..F2361)
  const lane3Grow = interpolate(frame, [2262, 2311], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const lane3BigO = interpolate(frame, [2329, 2361], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Reject n * n for every number: F2368..F2424
  const rejectPerNumberProg = interpolate(frame, [2368, 2390], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const rejectPerNumberStrike = interpolate(frame, [2396, 2420], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Combine n + n + <= n -> <= 3n -> O(n): F2438..F2480
  const combineLanesProg = interpolate(frame, [2438, 2455], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const morphTo3nProg = interpolate(frame, [2447, 2463], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const morphToOnProg = interpolate(frame, [2463, 2480], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Final Expected Time & Space rails: F2480..F2716
  const finalRailsProg = interpolate(frame, [2480, 2520], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const finalTimeBigO = interpolate(frame, [2582, 2609], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const spaceRailProg = interpolate(frame, [2609, 2640], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const spaceBigO = interpolate(frame, [2649, 2684], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // ===========================================================================
  // ACT 4: COMPARE THE JOURNEY (F2733 – F3158)
  // ===========================================================================
  const act4Active = frame >= 2730 && frame < 3180;
  const act4Opacity = interpolate(frame, [2730, 2755, 3160, 3180], [0, 1, 1, 0.2], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Base graph axes: F2733..F2767
  const graphAxesProg = interpolate(frame, [2733, 2767], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Brute force cubic: F2785..F2884
  const bruteMotifProg = interpolate(frame, [2785, 2814], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const bruteBigO = interpolate(frame, [2846, 2875], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const bruteDimProg = interpolate(frame, [2902, 2940], [1, 0.4], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Sort + Scan: F2902..F3008
  const sortMotifProg = interpolate(frame, [2902, 2935], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const sortBigO = interpolate(frame, [2961, 2990], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const sortDimProg = interpolate(frame, [3016, 3055], [1, 0.4], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Optimal HashSet + Starts: F3016..F3158
  const optimalMotifProg = interpolate(frame, [3016, 3055], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const optimalBigO = interpolate(frame, [3130, 3155], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Comparison Graph Curves:
  // Cubic curve points (starts at F2846)
  const cubicPoints: [number, number][] = useMemo(() => [
    [0, 300],
    [50, 290],
    [100, 270],
    [160, 220],
    [220, 140],
    [270, 40],
  ], []);

  // n log n curve points (starts at F2961)
  const nlognPoints: [number, number][] = useMemo(() => [
    [0, 300],
    [70, 260],
    [150, 210],
    [220, 165],
    [290, 120],
  ], []);

  // Linear curve points (starts at F3130)
  const linearPoints: [number, number][] = useMemo(() => [
    [0, 300],
    [80, 260],
    [160, 220],
    [240, 180],
    [320, 140],
  ], []);

  // ===========================================================================
  // ACT 5: WHY THE START CHECK MATTERS (F3173 – F3392)
  // ===========================================================================
  const act5Active = frame >= 3170;
  const act5Opacity = interpolate(frame, [3170, 3195], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Condition morphs to hero Predecessor Gate: F3173..F3246
  const gateHeroProg = interpolate(frame, [3173, 3220], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  // Code trick -> Algorithm guard: F3263..F3313
  const guardLabelProg = interpolate(frame, [3263, 3300], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  // Ghost repeated launches intercepted: F3313..F3361
  const ghostInterceptProg = interpolate(frame, [3313, 3345], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const ghostFoldProg = interpolate(frame, [3345, 3380], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  // Final banner reveal: F3365..F3380
  const finalBannerProg = interpolate(frame, [3365, 3380], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // ===========================================================================
  // RENDER
  // ===========================================================================
  return (
    <div
      style={{
        width: 1920,
        height: 1080,
        backgroundColor: theme.boardBg,
        position: "relative",
        overflow: "hidden",
        color: theme.chalkText,
        fontFamily: fonts.hand,
      }}
    >
      {/* Sound narration */}
      <Audio src={staticFile("audio/010/12-complexity.mp3")} />

      {/* Shared chalkboard textures & filters */}
      <ChalkboardBackground />
      <ChalkFilters />

      {/* TOP PILL BADGE (Y: 28..70) */}
      <div
        style={{
          position: "absolute",
          top: 32,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          alignItems: "center",
          gap: 12,
          padding: "8px 26px",
          borderRadius: 24,
          background: "rgba(0, 0, 0, 0.35)",
          border: `1.5px solid ${badgeInfo.color}`,
          boxShadow: `0 0 16px ${badgeInfo.color}33`,
          zIndex: 40,
        }}
      >
        <span style={{ fontSize: 18, color: badgeInfo.color }}>✦</span>
        <span
          style={{
            fontFamily: fonts.sans,
            fontSize: 19,
            fontWeight: 700,
            letterSpacing: "0.14em",
            color: badgeInfo.color,
            textTransform: "uppercase",
          }}
        >
          {badgeInfo.text}
        </span>
      </div>

      {/* ===================================================================== */}
      {/* ACT 0: THE NESTED-LOOP TRAP (F0 – F447)                              */}
      {/* ===================================================================== */}
      {act0Active && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            opacity: act0Opacity,
            pointerEvents: "none",
            zIndex: 10,
          }}
        >
          {/* Faint receding Scene 11 code memory */}
          {frame < 80 && (
            <div
              style={{
                position: "absolute",
                top: 220,
                left: 280,
                opacity: codeLinesRecede,
                fontFamily: fonts.mono,
                fontSize: 28,
                lineHeight: 1.7,
                color: theme.chalkDim,
              }}
            >
              <div>def longestConsecutive(nums):</div>
              <div style={{ paddingLeft: 30 }}>num_set = set(nums)</div>
              <div style={{ paddingLeft: 30 }}>longest = 0</div>
              <div style={{ paddingLeft: 30, color: theme.chalkText }}>for num in num_set:</div>
              <div style={{ paddingLeft: 60 }}>if num - 1 not in num_set:</div>
              <div style={{ paddingLeft: 90 }}>current = num</div>
              <div style={{ paddingLeft: 90 }}>length = 1</div>
              <div style={{ paddingLeft: 90, color: theme.chalkText }}>while current + 1 in num_set:</div>
              <div style={{ paddingLeft: 120 }}>current += 1</div>
              <div style={{ paddingLeft: 120 }}>length += 1</div>
              <div style={{ paddingLeft: 90 }}>longest = max(longest, length)</div>
              <div style={{ paddingLeft: 30 }}>return longest</div>
            </div>
          )}

          {/* Large question arc & subtitle */}
          <div
            style={{
              position: "absolute",
              top: 150,
              left: "50%",
              transform: "translateX(-50%)",
              textAlign: "center",
              opacity: questionArcProg,
            }}
          >
            <div
              style={{
                fontSize: 54,
                color: theme.pivot,
                letterSpacing: "0.04em",
                textShadow: "0 0 16px rgba(255, 209, 102, 0.4)",
              }}
            >
              One question you really want to ask...
            </div>
            <div
              style={{
                fontFamily: fonts.mono,
                fontSize: 24,
                color: theme.chalkDim,
                marginTop: 8,
                letterSpacing: "0.1em",
              }}
            >
              LOOKS NESTED...
            </div>
          </div>

          {/* Isolated Nested Loops Structure */}
          <div
            style={{
              position: "absolute",
              top: 270,
              left: trapSlideProg > 0 ? `calc(50% - ${trapSlideProg * 260}px)` : "38%",
              transform: "translateX(-50%)",
              display: "flex",
              flexDirection: "column",
              gap: 24,
              fontFamily: fonts.mono,
              fontSize: 34,
            }}
          >
            {/* Outer loop row */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 20,
                opacity: forBracketProg,
              }}
            >
              <div
                style={{
                  padding: "4px 14px",
                  borderRadius: 8,
                  border: `2px solid ${theme.pivot}`,
                  color: theme.pivot,
                  fontSize: 22,
                  fontWeight: 700,
                }}
              >
                FOR
              </div>
              <div
                style={{
                  padding: "12px 24px",
                  borderRadius: 12,
                  background: "rgba(255, 255, 255, 0.05)",
                  border: `1.5px solid ${theme.chalkLine}44`,
                  color: theme.chalkText,
                }}
              >
                <span style={{ color: theme.pivot }}>for</span> num{" "}
                <span style={{ color: theme.pivot }}>in</span> num_set:
              </div>
            </div>

            {/* Inner loop row */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 20,
                marginLeft: whileIndentProg,
                opacity: whileBracketProg,
              }}
            >
              <div
                style={{
                  padding: "4px 14px",
                  borderRadius: 8,
                  border: `2px solid ${theme.cyan}`,
                  color: theme.cyan,
                  fontSize: 22,
                  fontWeight: 700,
                }}
              >
                WHILE
              </div>
              <div
                style={{
                  padding: "12px 24px",
                  borderRadius: 12,
                  background: "rgba(255, 255, 255, 0.05)",
                  border: `1.5px solid ${theme.cyan}44`,
                  color: theme.chalkText,
                }}
              >
                <span style={{ color: theme.cyan }}>while</span> current + 1{" "}
                <span style={{ color: theme.cyan }}>in</span> num_set:
              </div>
            </div>
          </div>

          {/* O(n²)? Doubt Center Stage & Wrong Model Grid */}
          {frame >= 239 && (
            <div
              style={{
                position: "absolute",
                top: 260,
                right: "16%",
                width: 440,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {/* Wrong model n x n grid background */}
              <div
                style={{
                  position: "absolute",
                  width: 320,
                  height: 220,
                  border: `2px dashed ${theme.warn}`,
                  opacity: wrongGridOpacity,
                  display: "grid",
                  gridTemplateColumns: "repeat(6, 1fr)",
                  gridTemplateRows: "repeat(4, 1fr)",
                  gap: 4,
                  padding: 8,
                }}
              >
                {Array.from({ length: 24 }).map((_, i) => (
                  <div
                    key={i}
                    style={{
                      background: "rgba(255, 118, 117, 0.15)",
                      borderRadius: 4,
                    }}
                  />
                ))}
              </div>

              {/* Doubt Formula */}
              <div
                style={{
                  fontFamily: fonts.mono,
                  fontSize: 82,
                  fontWeight: 700,
                  color: strikeProg > 0 ? theme.warn : theme.pivot,
                  position: "relative",
                  zIndex: 2,
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                }}
              >
                {oParenProg > 0 && <span>O(</span>}
                {nSquaredProg > 0 && (
                  <span>
                    n²<span style={{ color: theme.pivot }}>?</span>
                  </span>
                )}
                {oParenProg > 0 && <span>)</span>}

                {/* Strike through n^2 */}
                {strikeProg > 0 && (
                  <div
                    style={{
                      position: "absolute",
                      left: -20,
                      right: -20,
                      top: "50%",
                      transform: "translateY(-50%)",
                    }}
                  >
                    <RoughLine
                      shape={{ kind: "line", x1: 0, y1: 0, x2: 240, y2: 0 }}
                      width={260}
                      height={20}
                      stroke={theme.warn}
                      strokeWidth={6}
                      startFrame={365}
                      durationInFrames={18}
                      seed={42}
                    />
                  </div>
                )}
              </div>

              {/* Sub-label */}
              <div
                style={{
                  marginTop: 18,
                  fontSize: 34,
                  color: strikeProg > 0 ? theme.warn : theme.chalkDim,
                  zIndex: 2,
                }}
              >
                {strikeProg > 0 ? "NO! NOT n × n" : "Outer n  ×  Inner n ?"}
              </div>
            </div>
          )}

          {/* Reason is START CHECK reveal */}
          {frame >= 392 && (
            <div
              style={{
                position: "absolute",
                top: 570,
                left: "50%",
                transform: `translateX(-50%) translateY(${(1 - startCheckSlideProg) * 20}px)`,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 16,
                opacity: startCheckSlideProg,
              }}
            >
              <div
                style={{
                  fontSize: 34,
                  color: theme.chalkDim,
                }}
              >
                And the reason is the...
              </div>

              <div
                style={{
                  padding: "16px 42px",
                  borderRadius: 16,
                  background: "rgba(60, 229, 167, 0.12)",
                  border: `2px solid ${theme.good}`,
                  boxShadow: "0 0 24px rgba(60, 229, 167, 0.35)",
                  display: "flex",
                  alignItems: "center",
                  gap: 20,
                  opacity: startCheckTextProg,
                }}
              >
                <span
                  style={{
                    fontFamily: fonts.mono,
                    fontSize: 44,
                    fontWeight: 800,
                    letterSpacing: "0.12em",
                    color: theme.good,
                  }}
                >
                  START CHECK
                </span>
                <span style={{ fontSize: 32, color: theme.cyan }}>
                  [x - 1 ?] ← [x]
                </span>
              </div>
            </div>
          )}
        </div>
      )}

      {/* ===================================================================== */}
      {/* ACT 1: LONGEST CHAIN: ONE LAUNCH, NOT SIX (F461 – F1351)            */}
      {/* ===================================================================== */}
      {act1Active && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            opacity: act1Opacity,
            pointerEvents: "none",
            zIndex: 10,
          }}
        >
          {/* Stage Title */}
          <div
            style={{
              position: "absolute",
              top: 130,
              left: "50%",
              transform: "translateX(-50%)",
              fontSize: 48,
              color: theme.cyan,
              textAlign: "center",
            }}
          >
            Take our longest chain: <span style={{ color: theme.chalkText }}>-1, 0, 1, 2, 3, 4</span>
          </div>

          {/* Six Chain Nodes Stage (y: 280..420) */}
          <div
            style={{
              position: "absolute",
              top: 250,
              left: "50%",
              transform: "translateX(-50%)",
              display: "flex",
              gap: 36,
              alignItems: "center",
            }}
          >
            {CHAIN_NODES.map((val, idx) => {
              const isRevealed = frame >= chainRevealFrames[idx];
              const isMinusOne = val === -1;
              const isStart = isMinusOne && startMinusOneProg > 0;
              
              // Skip state for middle nodes
              let isSkipped = false;
              if (idx === 1 && skip0Prog > 0) isSkipped = true;
              if (idx === 2 && skip1Prog > 0) isSkipped = true;
              if (idx === 3 && skip2Prog > 0) isSkipped = true;
              if (idx === 4 && skip3Prog > 0) isSkipped = true;
              if (idx === 5 && skip4Prog > 0) isSkipped = true;

              // Node touched by runner?
              const isTouched = chainRunnerProg >= idx;

              return (
                <div
                  key={val}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    position: "relative",
                  }}
                >
                  {/* Predecessor link from previous node */}
                  {idx > 0 && (
                    <div
                      style={{
                        position: "absolute",
                        top: -42,
                        left: -54,
                        display: "flex",
                        alignItems: "center",
                        gap: 6,
                        opacity:
                          idx === 1
                            ? link0Prog
                            : idx === 2
                            ? link1Prog
                            : idx === 3
                            ? link2Prog
                            : idx === 4
                            ? link3Prog
                            : link4Prog,
                      }}
                    >
                      <span style={{ fontSize: 20, color: theme.cyan }}>
                        ← {CHAIN_NODES[idx - 1]} exists!
                      </span>
                    </div>
                  )}

                  {/* Node Card */}
                  <div
                    style={{
                      width: 110,
                      height: 120,
                      borderRadius: 16,
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      background: isStart
                        ? "rgba(60, 229, 167, 0.18)"
                        : isTouched
                        ? "rgba(60, 229, 167, 0.10)"
                        : "rgba(255, 255, 255, 0.05)",
                      border: `2px solid ${
                        isStart
                          ? theme.good
                          : isTouched
                          ? theme.good
                          : isRevealed
                          ? theme.chalkLine
                          : "rgba(255,255,255,0.15)"
                      }`,
                      boxShadow: isStart
                        ? `0 0 20px ${theme.good}55`
                        : isTouched
                        ? `0 0 12px ${theme.good}33`
                        : "none",
                      opacity: isRevealed ? 1 : 0.25,
                      position: "relative",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: fonts.mono,
                        fontSize: 52,
                        fontWeight: 700,
                        color: isStart
                          ? theme.good
                          : isTouched
                          ? theme.good
                          : theme.chalkText,
                      }}
                    >
                      {isRevealed ? val : "?"}
                    </span>

                    {/* Ownership Notch */}
                    {isTouched && (
                      <div
                        style={{
                          position: "absolute",
                          top: -12,
                          right: -10,
                          width: 28,
                          height: 28,
                          borderRadius: "50%",
                          background: theme.good,
                          color: "#19523C",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: 18,
                          fontWeight: 900,
                        }}
                      >
                        ✓
                      </div>
                    )}
                  </div>

                  {/* Stem / Status under node */}
                  <div
                    style={{
                      marginTop: 18,
                      minHeight: 48,
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      opacity: stemsAppearProg,
                    }}
                  >
                    {isStart ? (
                      <div
                        style={{
                          padding: "4px 14px",
                          borderRadius: 12,
                          background: theme.good,
                          color: "#19523C",
                          fontFamily: fonts.mono,
                          fontWeight: 800,
                          fontSize: 18,
                          boxShadow: `0 0 14px ${theme.good}`,
                        }}
                      >
                        START
                      </div>
                    ) : isSkipped ? (
                      <div
                        style={{
                          padding: "4px 14px",
                          borderRadius: 12,
                          background: "rgba(255, 255, 255, 0.08)",
                          border: `1.5px solid ${theme.chalkDim}`,
                          color: theme.chalkDim,
                          fontFamily: fonts.mono,
                          fontWeight: 700,
                          fontSize: 16,
                          opacity: frame >= 1221 ? 0.35 : 1,
                        }}
                      >
                        SKIP
                      </div>
                    ) : (
                      <div
                        style={{
                          width: 4,
                          height: 20 + stemPulse,
                          background: theme.pivot,
                          borderRadius: 2,
                        }}
                      />
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Mint Runner Sweeping -1 to 4 */}
          {frame >= 1261 && (
            <div
              style={{
                position: "absolute",
                top: 480,
                left: "50%",
                transform: "translateX(-50%)",
                width: 820,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              {/* Runner progress bar */}
              <div
                style={{
                  width: "100%",
                  height: 6,
                  background: "rgba(255,255,255,0.1)",
                  borderRadius: 3,
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    bottom: 0,
                    width: `${(chainRunnerProg / 5) * 100}%`,
                    background: theme.good,
                    boxShadow: `0 0 16px ${theme.good}`,
                  }}
                />
              </div>

              {/* Callout Brace */}
              <div
                style={{
                  marginTop: 24,
                  display: "flex",
                  alignItems: "center",
                  gap: 20,
                  opacity: chainOneWalkProg,
                }}
              >
                <div
                  style={{
                    fontSize: 38,
                    color: theme.good,
                    fontWeight: 700,
                    textShadow: `0 0 16px ${theme.good}55`,
                  }}
                >
                  ONE REAL WALK (6 nodes visited once)
                </div>
              </div>
            </div>
          )}

          {/* Ghost Fan: Not 6 times! */}
          {frame >= 1311 && (
            <div
              style={{
                position: "absolute",
                top: 610,
                left: "50%",
                transform: "translateX(-50%)",
                display: "flex",
                alignItems: "center",
                gap: 24,
                opacity: ghostFanProg * ghostRetractProg,
              }}
            >
              <div
                style={{
                  fontFamily: fonts.mono,
                  fontSize: 48,
                  fontWeight: 800,
                  color: theme.warn,
                  position: "relative",
                }}
              >
                ×6 repeated walks?
                {ghostStrikeProg > 0 && (
                  <div
                    style={{
                      position: "absolute",
                      left: -10,
                      right: -10,
                      top: "50%",
                      transform: "translateY(-50%)",
                    }}
                  >
                    <RoughLine
                      shape={{ kind: "line", x1: 0, y1: 0, x2: 440, y2: 0 }}
                      width={460}
                      height={20}
                      stroke={theme.warn}
                      strokeWidth={5}
                      startFrame={1333}
                      durationInFrames={15}
                      seed={88}
                    />
                  </div>
                )}
              </div>
              <div style={{ fontSize: 36, color: theme.chalkText }}>
                → Retract into SKIP!
              </div>
            </div>
          )}
        </div>
      )}

      {/* ===================================================================== */}
      {/* ACT 2: SECOND ISLAND & GLOBAL OWNED-ONCE PROOF (F1374 – F1890)       */}
      {/* ===================================================================== */}
      {act2Active && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            opacity: act2Opacity,
            pointerEvents: "none",
            zIndex: 10,
          }}
        >
          {/* Before global assembly: Show Island 8..11 (F1374..F1654) */}
          {frame < 1654 && (
            <div
              style={{
                position: "absolute",
                top: 200,
                left: "50%",
                transform: "translateX(-50%)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 28,
              }}
            >
              <div style={{ fontSize: 46, color: theme.pivot }}>
                Same for second island: <span style={{ color: theme.chalkText }}>8, 9, 10, 11</span>
              </div>

              <div style={{ display: "flex", gap: 36, marginTop: 20 }}>
                {SECOND_ISLAND_NODES.map((val, idx) => {
                  const isRevealed = frame >= secondIslandFrames[idx];
                  const isEight = val === 8;
                  const isStart = isEight && start8Prog > 0;
                  let isSkipped = false;
                  if (idx === 1 && skip9Prog > 0) isSkipped = true;
                  if (idx === 2 && skip10Prog > 0) isSkipped = true;
                  if (idx === 3 && skip11Prog > 0) isSkipped = true;

                  const isTouched = runner8Prog >= idx;

                  return (
                    <div
                      key={val}
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                      }}
                    >
                      <div
                        style={{
                          width: 110,
                          height: 120,
                          borderRadius: 16,
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          justifyContent: "center",
                          background: isStart
                            ? "rgba(60, 229, 167, 0.18)"
                            : isTouched
                            ? "rgba(60, 229, 167, 0.10)"
                            : "rgba(255, 255, 255, 0.05)",
                          border: `2px solid ${
                            isStart || isTouched ? theme.good : theme.chalkLine
                          }`,
                          position: "relative",
                        }}
                      >
                        <span
                          style={{
                            fontFamily: fonts.mono,
                            fontSize: 52,
                            fontWeight: 700,
                            color: isStart || isTouched ? theme.good : theme.chalkText,
                          }}
                        >
                          {isRevealed ? val : "?"}
                        </span>
                        {isTouched && (
                          <div
                            style={{
                              position: "absolute",
                              top: -12,
                              right: -10,
                              width: 28,
                              height: 28,
                              borderRadius: "50%",
                              background: theme.good,
                              color: "#19523C",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              fontSize: 18,
                              fontWeight: 900,
                            }}
                          >
                            ✓
                          </div>
                        )}
                      </div>

                      <div style={{ marginTop: 16 }}>
                        {isStart ? (
                          <div
                            style={{
                              padding: "4px 14px",
                              borderRadius: 12,
                              background: theme.good,
                              color: "#19523C",
                              fontFamily: fonts.mono,
                              fontWeight: 800,
                              fontSize: 18,
                            }}
                          >
                            START
                          </div>
                        ) : isSkipped ? (
                          <div
                            style={{
                              padding: "4px 14px",
                              borderRadius: 12,
                              background: "rgba(255, 255, 255, 0.08)",
                              border: `1.5px solid ${theme.chalkDim}`,
                              color: theme.chalkDim,
                              fontFamily: fonts.mono,
                              fontWeight: 700,
                              fontSize: 16,
                            }}
                          >
                            SKIP
                          </div>
                        ) : (
                          <div style={{ width: 4, height: 20, background: theme.pivot }} />
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* After F1654: All 3 Sequence Islands Composition */}
          {frame >= 1654 && (
            <div
              style={{
                position: "absolute",
                top: 170,
                left: "50%",
                transform: "translateX(-50%)",
                width: 1540,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                opacity: globalIslandsProg,
              }}
            >
              <div style={{ fontSize: 44, color: theme.pivot, marginBottom: 26 }}>
                Across the whole set: Forward walking touches each value ONLY in its real run
              </div>

              {/* Three Islands Display */}
              <div
                style={{
                  display: "flex",
                  gap: 50,
                  alignItems: "flex-start",
                  justifyContent: "center",
                  width: "100%",
                }}
              >
                {/* Island A (-1..4) */}
                <div
                  style={{
                    padding: "20px 28px",
                    borderRadius: 20,
                    background: "rgba(60, 229, 167, 0.06)",
                    border: `2px solid ${theme.good}55`,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 16,
                  }}
                >
                  <div style={{ fontFamily: fonts.mono, fontSize: 20, color: theme.good }}>
                    RUN A · START: -1 · LENGTH: 6
                  </div>
                  <div style={{ display: "flex", gap: 14 }}>
                    {ISLAND_A.map((n, i) => {
                      const touched = ownershipSweepProg >= i + 1;
                      return (
                        <div
                          key={n}
                          style={{
                            width: 68,
                            height: 76,
                            borderRadius: 12,
                            border: `1.5px solid ${touched ? theme.good : theme.chalkLine}`,
                            background: touched ? "rgba(60, 229, 167, 0.18)" : "transparent",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            fontFamily: fonts.mono,
                            fontSize: 32,
                            fontWeight: 700,
                            color: touched ? theme.good : theme.chalkText,
                          }}
                        >
                          {n}
                          {touched && <span style={{ fontSize: 14 }}>✓</span>}
                        </div>
                      );
                    })}
                  </div>
                  {oneOwnerBraceProg > 0 && (
                    <div style={{ color: theme.good, fontSize: 22 }}>1 Walk · 6 Touches</div>
                  )}
                </div>

                {/* Island B (6) */}
                <div
                  style={{
                    padding: "20px 28px",
                    borderRadius: 20,
                    background: "rgba(60, 229, 167, 0.06)",
                    border: `2px solid ${theme.good}55`,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 16,
                  }}
                >
                  <div style={{ fontFamily: fonts.mono, fontSize: 20, color: theme.good }}>
                    RUN B · START: 6
                  </div>
                  <div
                    style={{
                      width: 68,
                      height: 76,
                      borderRadius: 12,
                      border: `1.5px solid ${ownershipSweepProg >= 7 ? theme.good : theme.chalkLine}`,
                      background: ownershipSweepProg >= 7 ? "rgba(60, 229, 167, 0.18)" : "transparent",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      fontFamily: fonts.mono,
                      fontSize: 32,
                      fontWeight: 700,
                      color: ownershipSweepProg >= 7 ? theme.good : theme.chalkText,
                    }}
                  >
                    6
                    {ownershipSweepProg >= 7 && <span style={{ fontSize: 14 }}>✓</span>}
                  </div>
                  {oneOwnerBraceProg > 0 && (
                    <div style={{ color: theme.good, fontSize: 22 }}>1 Walk · 1 Touch</div>
                  )}
                </div>

                {/* Island C (8..11) */}
                <div
                  style={{
                    padding: "20px 28px",
                    borderRadius: 20,
                    background: "rgba(60, 229, 167, 0.06)",
                    border: `2px solid ${theme.good}55`,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 16,
                  }}
                >
                  <div style={{ fontFamily: fonts.mono, fontSize: 20, color: theme.good }}>
                    RUN C · START: 8 · LENGTH: 4
                  </div>
                  <div style={{ display: "flex", gap: 14 }}>
                    {ISLAND_C.map((n, i) => {
                      const touched = ownershipSweepProg >= 8 + i;
                      return (
                        <div
                          key={n}
                          style={{
                            width: 68,
                            height: 76,
                            borderRadius: 12,
                            border: `1.5px solid ${touched ? theme.good : theme.chalkLine}`,
                            background: touched ? "rgba(60, 229, 167, 0.18)" : "transparent",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            fontFamily: fonts.mono,
                            fontSize: 32,
                            fontWeight: 700,
                            color: touched ? theme.good : theme.chalkText,
                          }}
                        >
                          {n}
                          {touched && <span style={{ fontSize: 14 }}>✓</span>}
                        </div>
                      );
                    })}
                  </div>
                  {oneOwnerBraceProg > 0 && (
                    <div style={{ color: theme.good, fontSize: 22 }}>1 Walk · 4 Touches</div>
                  )}
                </div>
              </div>

              {/* Ownership Counter Bar */}
              <div
                style={{
                  marginTop: 36,
                  padding: "12px 36px",
                  borderRadius: 28,
                  background: "rgba(0, 0, 0, 0.35)",
                  border: `2px solid ${theme.cyan}`,
                  display: "flex",
                  alignItems: "center",
                  gap: 24,
                  fontSize: 32,
                }}
              >
                <span style={{ color: theme.cyan, fontWeight: 700 }}>
                  SEQUENCE OWNERSHIP:
                </span>
                <span style={{ fontFamily: fonts.mono, color: theme.good, fontWeight: 800 }}>
                  {Math.min(11, Math.round(ownershipSweepProg))} / 11 unique values owned once
                </span>
              </div>
            </div>
          )}
        </div>
      )}

      {/* ===================================================================== */}
      {/* ACT 3: THREE-LANE WORK LEDGER & FORMAL DERIVATION (F1910 – F2716)     */}
      {/* ===================================================================== */}
      {act3Active && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            opacity: act3Opacity,
            pointerEvents: "none",
            zIndex: 10,
          }}
        >
          {/* Stage Title */}
          <div
            style={{
              position: "absolute",
              top: 120,
              left: "50%",
              transform: "translateX(-50%)",
              fontSize: 42,
              whiteSpace: "nowrap",
              color: theme.pivot,
              textAlign: "center",
            }}
          >
            Formal Work Ledger · Why The Whole Algorithm Is Linear
          </div>

          {/* Three Lanes Container (y: 220..540) */}
          <div
            style={{
              position: "absolute",
              top: 225,
              left: "50%",
              transform: "translateX(-50%)",
              width: 1280,
              display: "flex",
              flexDirection: "column",
              gap: 28,
            }}
          >
            {/* Lane 1: BUILD SET */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "18px 32px",
                borderRadius: 16,
                background: "rgba(255, 255, 255, 0.04)",
                border: `1.5px solid ${theme.purple}66`,
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 18, width: 340 }}>
                <span style={{ fontSize: 28, color: theme.purple }}>🟣</span>
                <span style={{ fontFamily: fonts.mono, fontSize: 32, fontWeight: 700, color: theme.chalkText }}>
                  BUILD SET
                </span>
              </div>

              {/* Progress Line */}
              <div style={{ flex: 1, margin: "0 28px", height: 8, background: "rgba(255,255,255,0.08)", borderRadius: 4, overflow: "hidden" }}>
                <div
                  style={{
                    height: "100%",
                    width: `${lane1Grow * 100}%`,
                    background: theme.purple,
                    boxShadow: `0 0 12px ${theme.purple}`,
                  }}
                />
              </div>

              <div style={{ width: 280, textAlign: "right", fontFamily: fonts.mono, fontSize: 32, fontWeight: 700, color: theme.purple }}>
                {lane1BigO > 0 ? "expected O(n)" : "n items"}
              </div>
            </div>

            {/* Lane 2: START CHECKS */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "18px 32px",
                borderRadius: 16,
                background: "rgba(255, 255, 255, 0.04)",
                border: `1.5px solid ${theme.cyan}66`,
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 18, width: 340 }}>
                <span style={{ fontSize: 28, color: theme.cyan }}>🔍</span>
                <span style={{ fontFamily: fonts.mono, fontSize: 32, fontWeight: 700, color: theme.chalkText }}>
                  START CHECKS
                </span>
              </div>

              {/* Progress Line */}
              <div style={{ flex: 1, margin: "0 28px", height: 8, background: "rgba(255,255,255,0.08)", borderRadius: 4, overflow: "hidden" }}>
                <div
                  style={{
                    height: "100%",
                    width: `${lane2Grow * 100}%`,
                    background: theme.cyan,
                    boxShadow: `0 0 12px ${theme.cyan}`,
                  }}
                />
              </div>

              <div style={{ width: 280, textAlign: "right", fontFamily: fonts.mono, fontSize: 32, fontWeight: 700, color: theme.cyan }}>
                {lane2BigO > 0 ? "expected O(n)" : "n checks"}
              </div>
            </div>

            {/* Lane 3: FORWARD WALKS */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "18px 32px",
                borderRadius: 16,
                background: "rgba(255, 255, 255, 0.04)",
                border: `1.5px solid ${theme.good}66`,
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 18, width: 340 }}>
                <span style={{ fontSize: 28, color: theme.good }}>🏃</span>
                <span style={{ fontFamily: fonts.mono, fontSize: 32, fontWeight: 700, color: theme.chalkText }}>
                  FORWARD WALKS
                </span>
              </div>

              {/* Progress Line */}
              <div style={{ flex: 1, margin: "0 28px", height: 8, background: "rgba(255,255,255,0.08)", borderRadius: 4, overflow: "hidden" }}>
                <div
                  style={{
                    height: "100%",
                    width: `${lane3Grow * 100}%`,
                    background: theme.good,
                    boxShadow: `0 0 12px ${theme.good}`,
                  }}
                />
              </div>

              <div style={{ width: 280, textAlign: "right", fontFamily: fonts.mono, fontSize: 32, fontWeight: 700, color: theme.good }}>
                {lane3BigO > 0 ? "O(n)" : "≤ n values"}
              </div>
            </div>
          </div>

          {/* Reject "n work for every number" */}
          {frame >= 2368 && frame < 2440 && (
            <div
              style={{
                position: "absolute",
                top: 580,
                left: "50%",
                transform: "translateX(-50%)",
                display: "flex",
                alignItems: "center",
                gap: 24,
                opacity: rejectPerNumberProg,
              }}
            >
              <div
                style={{
                  fontFamily: fonts.mono,
                  fontSize: 42,
                  fontWeight: 700,
                  color: theme.warn,
                  position: "relative",
                }}
              >
                Not O(n) for EVERY number!
                {rejectPerNumberStrike > 0 && (
                  <div
                    style={{
                      position: "absolute",
                      left: -10,
                      right: -10,
                      top: "50%",
                      transform: "translateY(-50%)",
                    }}
                  >
                    <RoughLine
                      shape={{ kind: "line", x1: 0, y1: 0, x2: 520, y2: 0 }}
                      width={540}
                      height={20}
                      stroke={theme.warn}
                      strokeWidth={5}
                      startFrame={2396}
                      durationInFrames={18}
                      seed={71}
                    />
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Total Combination: n + n + <= n -> <= 3n -> O(n) */}
          {frame >= 2438 && (
            <div
              style={{
                position: "absolute",
                top: 570,
                left: "50%",
                transform: "translateX(-50%)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 16,
                opacity: combineLanesProg,
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 20,
                  fontFamily: fonts.mono,
                  fontSize: 48,
                  fontWeight: 800,
                }}
              >
                <span style={{ color: theme.purple }}>n</span>
                <span style={{ color: theme.chalkDim }}>+</span>
                <span style={{ color: theme.cyan }}>n</span>
                <span style={{ color: theme.chalkDim }}>+</span>
                <span style={{ color: theme.good }}>≤ n</span>
                <span style={{ color: theme.pivot }}>=</span>
                <span style={{ color: morphToOnProg > 0 ? theme.good : theme.pivot }}>
                  {morphToOnProg > 0 ? "expected O(n)" : morphTo3nProg > 0 ? "≤ 3n" : "≤ 3n"}
                </span>
              </div>
              <div style={{ fontSize: 32, color: theme.good, fontWeight: 700 }}>
                TOTAL EXPECTED WORK ACROSS ENTIRE ALGORITHM
              </div>
            </div>
          )}

          {/* Final Formal Rails (Time & Space) */}
          {frame >= 2480 && (
            <div
              style={{
                position: "absolute",
                top: 720,
                left: "50%",
                transform: "translateX(-50%)",
                width: 1040,
                display: "flex",
                gap: 36,
                justifyContent: "center",
                opacity: finalRailsProg,
              }}
            >
              {/* Time Rail */}
              <div
                style={{
                  flex: 1,
                  padding: "16px 28px",
                  borderRadius: 16,
                  background: "rgba(60, 229, 167, 0.12)",
                  border: `2px solid ${theme.good}`,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 6,
                }}
              >
                <span style={{ fontSize: 24, color: theme.chalkDim, letterSpacing: "0.1em" }}>
                  EXPECTED TIME
                </span>
                <span
                  style={{
                    fontFamily: fonts.mono,
                    fontSize: 48,
                    fontWeight: 800,
                    color: theme.good,
                  }}
                >
                  {finalTimeBigO > 0 ? "O(n)" : "..."}
                </span>
              </div>

              {/* Space Rail */}
              {frame >= 2609 && (
                <div
                  style={{
                    flex: 1,
                    padding: "16px 28px",
                    borderRadius: 16,
                    background: "rgba(216, 180, 226, 0.12)",
                    border: `2px solid ${theme.purple}`,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 6,
                    opacity: spaceRailProg,
                  }}
                >
                  <span style={{ fontSize: 24, color: theme.chalkDim, letterSpacing: "0.1em" }}>
                    EXTRA SPACE (HASH SET)
                  </span>
                  <span
                    style={{
                      fontFamily: fonts.mono,
                      fontSize: 48,
                      fontWeight: 800,
                      color: theme.purple,
                    }}
                  >
                    {spaceBigO > 0 ? "O(n)" : "..."}
                  </span>
                </div>
              )}
            </div>
          )}
        </div>
      )}

      {/* ===================================================================== */}
      {/* ACT 4: COMPARE THE JOURNEY (F2733 – F3158)                           */}
      {/* ===================================================================== */}
      {act4Active && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            opacity: act4Opacity,
            pointerEvents: "none",
            zIndex: 10,
          }}
        >
          {/* Stage Title */}
          <div
            style={{
              position: "absolute",
              top: 110,
              left: 120,
              fontSize: 48,
              color: theme.pivot,
            }}
          >
            Now Compare The 3 Approaches
          </div>

          {/* Left: 3 Approach Motifs (x: 120..1100, y: 220..680) */}
          <div
            style={{
              position: "absolute",
              top: 200,
              left: 120,
              width: 980,
              display: "flex",
              flexDirection: "column",
              gap: 28,
            }}
          >
            {/* Approach 1: Brute */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "20px 32px",
                borderRadius: 18,
                background: "rgba(255, 118, 117, 0.08)",
                border: `2px solid ${theme.warn}66`,
                opacity: bruteMotifProg * bruteDimProg,
              }}
            >
              <div>
                <div style={{ fontSize: 32, fontWeight: 700, color: theme.warn }}>
                  BRUTE FORCE
                </div>
                <div style={{ fontSize: 22, color: theme.chalkDim, marginTop: 4 }}>
                  Repeated list searching for each streak
                </div>
              </div>
              <div
                style={{
                  fontFamily: fonts.mono,
                  fontSize: 46,
                  fontWeight: 800,
                  color: theme.warn,
                }}
              >
                {bruteBigO > 0 ? "O(n³)" : "..."}
              </div>
            </div>

            {/* Approach 2: Sort + Scan */}
            {frame >= 2902 && (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "20px 32px",
                  borderRadius: 18,
                  background: "rgba(255, 169, 77, 0.08)",
                  border: `2px solid ${theme.better}66`,
                  opacity: sortMotifProg * sortDimProg,
                }}
              >
                <div>
                  <div style={{ fontSize: 32, fontWeight: 700, color: theme.better }}>
                    SORT + SCAN
                  </div>
                  <div style={{ fontSize: 22, color: theme.chalkDim, marginTop: 4 }}>
                    Ordering lattice + linear streak scan
                  </div>
                </div>
                <div
                  style={{
                    fontFamily: fonts.mono,
                    fontSize: 46,
                    fontWeight: 800,
                    color: theme.better,
                  }}
                >
                  {sortBigO > 0 ? "O(n log n)" : "..."}
                </div>
              </div>
            )}

            {/* Approach 3: HashSet + Starts */}
            {frame >= 3016 && (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "24px 32px",
                  borderRadius: 18,
                  background: "rgba(60, 229, 167, 0.16)",
                  border: `2.5px solid ${theme.good}`,
                  boxShadow: `0 0 24px ${theme.good}33`,
                  opacity: optimalMotifProg,
                }}
              >
                <div>
                  <div style={{ fontSize: 34, fontWeight: 800, color: theme.good }}>
                    HASHSET + REAL STARTS
                  </div>
                  <div style={{ fontSize: 22, color: theme.chalkDim, marginTop: 4 }}>
                    Predecessor guard: 1 walk per real sequence island
                  </div>
                </div>
                <div
                  style={{
                    fontFamily: fonts.mono,
                    fontSize: 48,
                    fontWeight: 900,
                    color: theme.good,
                    textShadow: `0 0 16px ${theme.good}66`,
                  }}
                >
                  {optimalBigO > 0 ? "expected O(n)" : "..."}
                </div>
              </div>
            )}
          </div>

          {/* Right: Comparison Graph (x: 1180..1760, y: 220..680) */}
          <div
            style={{
              position: "absolute",
              top: 200,
              right: 120,
              width: 540,
              height: 480,
              background: "rgba(0, 0, 0, 0.25)",
              borderRadius: 20,
              border: `1.5px solid ${theme.chalkLine}33`,
              padding: 24,
              opacity: graphAxesProg,
            }}
          >
            {/* Graph Title */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ fontSize: 24, color: theme.chalkDim }}>OPERATIONS ▲</span>
              <span style={{ fontSize: 20, color: theme.chalkDim }}>INPUT SIZE n ►</span>
            </div>

            {/* SVG Plotting Stage */}
            <div style={{ position: "relative", width: "100%", height: 380, marginTop: 14 }}>
              {/* Axes */}
              <svg width="100%" height="100%" style={{ overflow: "visible" }}>
                {/* Y Axis */}
                <line x1={40} y1={20} x2={40} y2={340} stroke={theme.chalkLine} strokeWidth={2} opacity={0.6} />
                {/* X Axis */}
                <line x1={40} y1={340} x2={460} y2={340} stroke={theme.chalkLine} strokeWidth={2} opacity={0.6} />
              </svg>

              {/* Brute cubic curve (draws after F2846) */}
              {frame >= 2846 && (
                <div style={{ position: "absolute", left: 40, top: 20, opacity: bruteDimProg }}>
                  <RoughCurve
                    points={cubicPoints}
                    width={320}
                    height={320}
                    stroke={theme.warn}
                    strokeWidth={4}
                    startFrame={2846}
                    durationInFrames={30}
                    seed={12}
                  />
                  <div style={{ position: "absolute", left: 240, top: 30, color: theme.warn, fontFamily: fonts.mono, fontSize: 22, fontWeight: 700, whiteSpace: "nowrap" }}>
                    O(n³)
                  </div>
                </div>
              )}

              {/* Sort n log n curve (draws after F2961) */}
              {frame >= 2961 && (
                <div style={{ position: "absolute", left: 40, top: 20, opacity: sortDimProg }}>
                  <RoughCurve
                    points={nlognPoints}
                    width={320}
                    height={320}
                    stroke={theme.better}
                    strokeWidth={4}
                    startFrame={2961}
                    durationInFrames={30}
                    seed={24}
                  />
                  <div style={{ position: "absolute", left: 270, top: 75, color: theme.better, fontFamily: fonts.mono, fontSize: 22, fontWeight: 700, whiteSpace: "nowrap" }}>
                    O(n log n)
                  </div>
                </div>
              )}

              {/* Optimal Linear curve (draws after F3130) */}
              {frame >= 3130 && (
                <div style={{ position: "absolute", left: 40, top: 20 }}>
                  <RoughCurve
                    points={linearPoints}
                    width={360}
                    height={320}
                    stroke={theme.good}
                    strokeWidth={6}
                    startFrame={3130}
                    durationInFrames={28}
                    seed={36}
                  />
                  <div
                    style={{
                      position: "absolute",
                      left: 310,
                      top: 165,
                      color: theme.good,
                      fontFamily: fonts.mono,
                      fontSize: 26,
                      fontWeight: 800,
                      textShadow: `0 0 12px ${theme.good}`,
                      whiteSpace: "nowrap",
                    }}
                  >
                    expected O(n)
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* ===================================================================== */}
      {/* ACT 5: WHY THE START CHECK MATTERS (F3173 – F3392)                    */}
      {/* ===================================================================== */}
      {act5Active && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            opacity: act5Opacity,
            pointerEvents: "none",
            zIndex: 20,
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 140,
              left: "50%",
              transform: "translateX(-50%)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 24,
            }}
          >
            <div style={{ fontSize: 50, color: theme.pivot, textAlign: "center" }}>
              That is why the start check matters so much.
            </div>

            {/* Hero Predecessor Gate / Algorithm Guard */}
            <div
              style={{
                marginTop: 20,
                padding: "24px 54px",
                borderRadius: 24,
                background: "rgba(0, 0, 0, 0.45)",
                border: `3px solid ${theme.good}`,
                boxShadow: `0 0 32px ${theme.good}44`,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 16,
              }}
            >
              <div
                style={{
                  fontFamily: fonts.mono,
                  fontSize: 26,
                  color: guardLabelProg > 0 ? theme.good : theme.chalkDim,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                }}
              >
                {guardLabelProg > 0 ? "ALGORITHM GUARD (NOT A CODE TRICK)" : "CODE CONDITION"}
              </div>

              <div
                style={{
                  fontFamily: fonts.mono,
                  fontSize: 48,
                  fontWeight: 800,
                  color: theme.good,
                  display: "flex",
                  alignItems: "center",
                  gap: 20,
                }}
              >
                <span style={{ color: theme.cyan }}>[x - 1 not in set?]</span>
                <span style={{ color: theme.pivot }}>←</span>
                <span>[x is True Start]</span>
              </div>
            </div>

            {/* Interception demonstration */}
            {frame >= 3313 && (
              <div
                style={{
                  marginTop: 30,
                  display: "flex",
                  alignItems: "center",
                  gap: 36,
                  fontSize: 34,
                  opacity: ghostInterceptProg,
                }}
              >
                <div style={{ color: theme.warn }}>
                  Repeated ghost launches on middle values...
                </div>
                <div style={{ color: theme.pivot, fontSize: 44 }}>→</div>
                <div
                  style={{
                    color: theme.good,
                    fontWeight: 700,
                    textShadow: `0 0 16px ${theme.good}55`,
                  }}
                >
                  INTERCEPTED & FOLDED INTO SKIP!
                </div>
              </div>
            )}

            {/* Final Majestic Hold Banner */}
            {frame >= 3380 && (
              <div
                style={{
                  marginTop: 40,
                  padding: "16px 48px",
                  borderRadius: 30,
                  background: "rgba(60, 229, 167, 0.18)",
                  border: `2px solid ${theme.good}`,
                  boxShadow: `0 0 30px ${theme.good}66`,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 8,
                  opacity: finalBannerProg,
                }}
              >
                <span
                  style={{
                    fontFamily: fonts.sans,
                    fontSize: 34,
                    fontWeight: 800,
                    letterSpacing: "0.08em",
                    color: theme.good,
                  }}
                >
                  START CHECK → ONE WALK PER REAL RUN
                </span>
                <span style={{ fontFamily: fonts.mono, fontSize: 24, color: theme.chalkText }}>
                  Final Complexity: expected O(n) time · O(n) space
                </span>
              </div>
            )}
          </div>
        </div>
      )}

      {/* CAPTIONS SAFE ZONE (Y: 960..1040) */}
      <Captions words={captionWords} bottom={38} fontSize={38} />
    </div>
  );
};
