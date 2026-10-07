import React, { useMemo } from "react";
import { useCurrentFrame, interpolate, staticFile, Audio, Sequence } from "remotion";
import { theme, fonts } from "../../../../kit/lib/theme";
import { ChalkboardBackground, ChalkFilters } from "../../../../kit/lib/chalk";
import { Captions, CaptionWord } from "../../../../kit/components/Captions";
import syncData from "../sync/05-why-brute.json";

// Raw master array cards
const RAW_ARRAY = [8, 1, 6, 3, 2, 2, 4, 10, 9, 11, -1, 0];

// Mapping from raw index to sorted index for physical flight:
// [8, 1, 6, 3, 2, 2, 4, 10, 9, 11, -1, 0]
// 8 -> 8, 1 -> 2, 6 -> 7, 3 -> 5, 2(first) -> 3, 2(second) -> 4, 4 -> 6, 10 -> 10, 9 -> 9, 11 -> 11, -1 -> 0, 0 -> 1
const RAW_TO_SORTED_IDX = [8, 2, 7, 5, 3, 4, 6, 10, 9, 11, 0, 1];

// Waves for sorting motion:
// Wave A: smallest [-1, 0, 1, 2, 2] (raw indices: 10, 11, 1, 4, 5)
// Wave B: middle [3, 4, 6] (raw indices: 3, 6, 2)
// Wave C: high [8, 9, 10, 11] (raw indices: 0, 8, 7, 9)
const CARD_WAVE_GROUP: number[] = [
  2, // val 8 -> Wave C
  0, // val 1 -> Wave A
  1, // val 6 -> Wave B
  1, // val 3 -> Wave B
  0, // val 2 -> Wave A
  0, // val 2 -> Wave A
  1, // val 4 -> Wave B
  2, // val 10 -> Wave C
  2, // val 9 -> Wave C
  2, // val 11 -> Wave C
  0, // val -1 -> Wave A
  0, // val 0 -> Wave A
];

// Card dimensions for 12-element row (Exact optical standards matching Scene 03)
const CARD_WIDTH = 92;
const CARD_HEIGHT = 108;
const CARD_GAP = 16;
const TOTAL_ROW_WIDTH = 12 * CARD_WIDTH + 11 * CARD_GAP; // 1280px
const ROW_START_X = (1920 - TOTAL_ROW_WIDTH) / 2; // 320px
const BASE_Y = 380; // Optical array baseline

export const Scene05WhyBrute: React.FC = () => {
  const frame = useCurrentFrame();

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
  // ACT 0: Scene 04 Handoff & Code Collapse (F0–F45)
  // ----------------------------------------------------
  const act0EditorFade = interpolate(frame, [0, 32], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const act0EditorScale = interpolate(frame, [0, 32], [1, 0.82], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Detached while-line morph to center
  const whileLineProgress = interpolate(frame, [8, 34], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const whileLineX = interpolate(whileLineProgress, [0, 1], [460, 960]);
  const whileLineY = interpolate(whileLineProgress, [0, 1], [435, 360]);
  const whileLineScale = interpolate(whileLineProgress, [0, 1], [1, 1.25]);
  const whileLineFadeOut = interpolate(frame, [38, 48], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // ----------------------------------------------------
  // Top Badge Text & Progression
  // ----------------------------------------------------
  const topBadgeText = useMemo(() => {
    if (frame < 46) return "MEASURE THE WORK";
    if (frame < 397) return "THREE WORK FACTORS";
    if (frame < 559) return "O(n³) CUBIC COMPLEXITY";
    if (frame < 935) return "THE BOTTLENECK";
    if (frame < 1279) return "THE SORTING IDEA";
    return "SORTED STATE READY";
  }, [frame]);

  const topBadgeColor = useMemo(() => {
    if (frame < 46) return theme.pivot;
    if (frame < 397) return theme.cyan;
    if (frame < 935) return theme.warn;
    return theme.good;
  }, [frame]);

  // ----------------------------------------------------
  // ACT 1: Factor 1 — Up to n Starts (F46–F124)
  // ----------------------------------------------------
  const act1ArrayFade = interpolate(frame, [46, 68], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const act1PointerPos = interpolate(frame, [84, 109], [0, 11], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const act1BracketProgress = interpolate(frame, [77, 98], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const act1BarCompress = interpolate(frame, [109, 125], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // ----------------------------------------------------
  // ACT 2: Factor 2 — Up to n Steps (F125–F253)
  // ----------------------------------------------------
  const act2StartFade = interpolate(frame, [125, 145], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const act2ChainProgress = interpolate(frame, [164, 215], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const act2EllipsisFade = interpolate(frame, [205, 224], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const act2BarCompress = interpolate(frame, [236, 253], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // ----------------------------------------------------
  // ACT 3: Factor 3 — Up to n Scan (F254–F396)
  // ----------------------------------------------------
  const act3TargetFade = interpolate(frame, [254, 274], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const act3ScanProgress = interpolate(frame, [284, 345], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const act3BracketProgress = interpolate(frame, [335, 355], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const act3BarCompress = interpolate(frame, [380, 396], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // ----------------------------------------------------
  // ACT 4: Multiply n × n × n → Wireframe Cube → O(n³) (F397–F558)
  // ----------------------------------------------------
  const act4BarsCenter = interpolate(frame, [397, 425], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Reveal factors n1, n2, n3
  const act4N1Fade = interpolate(frame, [437, 448], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const act4Times1Fade = interpolate(frame, [444, 452], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const act4N2Fade = interpolate(frame, [458, 468], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const act4Times2Fade = interpolate(frame, [465, 474], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const act4N3Fade = interpolate(frame, [480, 492], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Morph to 3D Wireframe Cube
  const act4CubeProgress = interpolate(frame, [492, 532], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Cube moves left to make space for cubic growth curve
  const act4CubeX = interpolate(frame, [538, 558], [960, 680], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Cubic curve graph and 1M ops counter appearance
  const act4GraphProgress = interpolate(frame, [538, 558], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Rolling counter up to 1,000,000 operations
  const act4CounterVal = Math.floor(
    interpolate(frame, [544, 558], [1000, 1000000], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    })
  );

  // Shrink/compress Act 4 elements as Act 5 starts
  const act4ShrinkProgress = interpolate(frame, [559, 585], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // ----------------------------------------------------
  // ACT 5, 6, 7: Repeated Search Diagnosis & Wipe (F559–F982)
  // ----------------------------------------------------
  const act5ArrayFade = interpolate(frame, [586, 610], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Scan 1: search for 9 (F684–F735) -> index 8 (val 9)
  const scan1Progress = interpolate(frame, [684, 735], [0, 8 / 11], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Scan 2: search for 10 (F760–F825) -> index 7 (val 10)
  const scan2Progress = interpolate(frame, [760, 825], [0, 7 / 11], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Scan 3: search for 11 (F854–F888) -> index 9 (val 11)
  const scan3Progress = interpolate(frame, [854, 888], [0, 9 / 11], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Act 7: Strike through repeated searching & erase trails (F889–F982)
  const act7StrikeProgress = interpolate(frame, [889, 915], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const act7EraseProgress = interpolate(frame, [915, 960], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const act7DustFade = interpolate(frame, [940, 960], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // ----------------------------------------------------
  // ACT 8: Sorting Bezier Waves (F983–F1088)
  // ----------------------------------------------------
  const act8Lift = interpolate(frame, [983, 1005], [0, 18], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // 3 Staggered Bezier Flight Waves
  const waveAProgress = interpolate(frame, [995, 1045], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const waveBProgress = interpolate(frame, [1010, 1060], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const waveCProgress = interpolate(frame, [1025, 1075], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const act8BaselineFade = interpolate(frame, [1065, 1088], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // ----------------------------------------------------
  // ACT 9: Neighbour +1 Relationship on Pair [8 | 9] (F1089–F1278)
  // ----------------------------------------------------
  const act9FocusFade = interpolate(frame, [1089, 1115], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const act9BoxProgress = interpolate(frame, [1115, 1140], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const act9ArrowProgress = interpolate(frame, [1135, 1165], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const act9NeighboursFade = interpolate(frame, [1205, 1230], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const act9NextPairPulse = interpolate(frame, [1238, 1260], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const act9RestoreFade = interpolate(frame, [1260, 1278], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // ----------------------------------------------------
  // ACT 10: Handoff to Scene 06 (F1279–F1322)
  // ----------------------------------------------------
  const act10PointerProgress = interpolate(frame, [1279, 1298], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const act10HudFade = interpolate(frame, [1305, 1320], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // ----------------------------------------------------
  // Computed Card Positions across Timeline
  // ----------------------------------------------------
  const renderedCards = useMemo(() => {
    return RAW_ARRAY.map((val, rawIdx) => {
      const sortedIdx = RAW_TO_SORTED_IDX[rawIdx];
      const rawX = ROW_START_X + rawIdx * (CARD_WIDTH + CARD_GAP);
      const sortedX = ROW_START_X + sortedIdx * (CARD_WIDTH + CARD_GAP);
      const baseY = BASE_Y;

      // Check wave progress
      const waveGrp = CARD_WAVE_GROUP[rawIdx];
      const waveProg = waveGrp === 0 ? waveAProgress : waveGrp === 1 ? waveBProgress : waveCProgress;

      // Height of arc differs by wave to prevent collisions:
      // Wave A: -90px, Wave B: -150px, Wave C: -210px
      const arcHeight = waveGrp === 0 ? -90 : waveGrp === 1 ? -150 : -210;
      const currentLift = (1 - waveProg) * act8Lift;
      const arcY = 4 * arcHeight * waveProg * (1 - waveProg);

      // Interpolate X and Y
      let currentX = rawX;
      let currentY = baseY;

      if (frame < 983) {
        currentX = rawX;
        currentY = baseY;
      } else {
        currentX = interpolate(waveProg, [0, 1], [rawX, sortedX]);
        currentY = baseY - currentLift + arcY;
      }

      // Card visibility across timeline:
      let cardOpacity = 0;
      if (frame < 46) {
        cardOpacity = 0;
      } else if (frame >= 46 && frame < 109) {
        cardOpacity = 1;
      } else if (frame >= 109 && frame < 125) {
        cardOpacity = interpolate(frame, [109, 125], [1, 0], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
        });
      } else if (frame >= 125 && frame < 586) {
        cardOpacity = 0;
      } else if (frame >= 586 && frame < 605) {
        cardOpacity = interpolate(frame, [586, 605], [0, 1], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
        });
      } else if (frame >= 605 && frame < 1089) {
        cardOpacity = 1;
      } else if (frame >= 1089 && frame < 1245) {
        const isPair = val === 8 || val === 9;
        const isNeighbourContext = frame >= 1180 && (val === 6 || val === 10 || val === 11);
        if (isPair || isNeighbourContext) {
          cardOpacity = 1;
        } else {
          cardOpacity = interpolate(act9FocusFade, [0, 1], [1, 0.35]);
        }
      } else {
        cardOpacity = interpolate(act9RestoreFade, [0, 1], [0.35, 1]);
      }

      return {
        val,
        rawIdx,
        sortedIdx,
        x: currentX,
        y: currentY,
        opacity: cardOpacity,
        waveGrp,
      };
    });
  }, [
    act8Lift,
    act9FocusFade,
    act9RestoreFade,
    frame,
    waveAProgress,
    waveBProgress,
    waveCProgress,
  ]);

  return (
    <div
      style={{
        width: 1920,
        height: 1080,
        backgroundColor: theme.boardBg,
        position: "relative",
        overflow: "hidden",
        fontFamily: fonts.hand,
      }}
    >
      {/* Audio Track */}
      <Sequence name="audio-05-why-brute">
        <Audio src={staticFile("audio/010/05-why-brute.mp3")} />
      </Sequence>

      {/* Chalk Filters & Clean Kit Blackboard Texture (Zero 4-Side Darkness) */}
      <ChalkFilters />
      <ChalkboardBackground />

      {/* Subtle Dust Wipe Overlay in Act 7 */}
      {act7DustFade > 0 && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundColor: "rgba(248, 246, 240, 0.04)",
            opacity: act7DustFade,
            pointerEvents: "none",
          }}
        />
      )}

      {/* ========================================================================= */}
      {/* TOP HEADER & PILL BADGE (Y: 28..70)                                       */}
      {/* ========================================================================= */}
      <div
        style={{
          position: "absolute",
          top: 28,
          left: 60,
          right: 60,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          zIndex: 40,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div
            style={{
              padding: "6px 16px",
              borderRadius: 8,
              backgroundColor: "rgba(248, 246, 240, 0.08)",
              border: "1px solid rgba(248, 246, 240, 0.2)",
              fontFamily: fonts.mono,
              fontSize: 14,
              color: theme.chalkDim,
              letterSpacing: 1.2,
            }}
          >
            LC #128 · LONGEST CONSECUTIVE SEQUENCE
          </div>
          <div
            style={{
              fontFamily: fonts.mono,
              fontSize: 13,
              color: theme.warn,
              letterSpacing: 1,
            }}
          >
            TYPE C · APPROACH 1 → 2 BRIDGE
          </div>
        </div>

        {/* Central Dynamic Stage Pill */}
        <div
          style={{
            padding: "8px 26px",
            borderRadius: 20,
            backgroundColor: "rgba(10, 36, 25, 0.9)",
            border: `1.5px solid ${topBadgeColor}`,
            boxShadow: `0 0 16px ${topBadgeColor}44`,
            display: "flex",
            alignItems: "center",
            gap: 10,
          }}
        >
          <div
            style={{
              width: 8,
              height: 8,
              borderRadius: 4,
              backgroundColor: topBadgeColor,
              boxShadow: `0 0 8px ${topBadgeColor}`,
            }}
          />
          <span
            style={{
              fontFamily: fonts.mono,
              fontSize: 15,
              fontWeight: 700,
              color: topBadgeColor,
              letterSpacing: 1.5,
            }}
          >
            {topBadgeText}
          </span>
        </div>

        <div
          style={{
            fontFamily: fonts.mono,
            fontSize: 13,
            color: theme.chalkDim,
          }}
        >
          STEP 5 OF 13
        </div>
      </div>

      {/* ========================================================================= */}
      {/* ACT 0: Scene 04 Code Handoff & Collapse (F0..F45)                         */}
      {/* ========================================================================= */}
      {frame < 48 && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            opacity: whileLineFadeOut,
            pointerEvents: "none",
          }}
        >
          {/* Receding Scene 04 Editor Outline */}
          <div
            style={{
              position: "absolute",
              left: 60,
              top: 110,
              width: 870,
              height: 790,
              borderRadius: 16,
              border: "1.5px solid rgba(248, 246, 240, 0.2)",
              backgroundColor: "rgba(10, 36, 25, 0.7)",
              opacity: act0EditorFade,
              transform: `scale(${act0EditorScale})`,
              transformOrigin: "top left",
              padding: 28,
            }}
          >
            <div style={{ fontFamily: fonts.mono, fontSize: 14, color: theme.chalkDim, marginBottom: 14 }}>
              brute_force.py (Scene 04)
            </div>
            <div style={{ fontFamily: fonts.mono, fontSize: 18, color: "rgba(248, 246, 240, 0.25)", lineHeight: 1.8 }}>
              <div>def longestConsecutive(nums):</div>
              <div>&nbsp;&nbsp;longest = 0</div>
              <div>&nbsp;&nbsp;for num in nums:</div>
              <div>&nbsp;&nbsp;&nbsp;&nbsp;current = num</div>
              <div>&nbsp;&nbsp;&nbsp;&nbsp;length = 1</div>
            </div>
          </div>

          {/* Detached Highlighted While-Line Gliding to Center */}
          <div
            style={{
              position: "absolute",
              left: whileLineX - 300,
              top: whileLineY - 36,
              width: 600,
              height: 72,
              borderRadius: 14,
              backgroundColor: "rgba(255, 118, 117, 0.2)",
              border: `2px solid ${theme.warn}`,
              boxShadow: `0 0 24px rgba(255, 118, 117, 0.5)`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transform: `scale(${whileLineScale})`,
              zIndex: 50,
            }}
          >
            <span
              style={{
                fontFamily: fonts.mono,
                fontSize: 26,
                fontWeight: 700,
                color: theme.warn,
              }}
            >
              while current + 1 in nums:
            </span>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* ACT 1, 2, 3: THREE WORK FACTORS STACK (F46..F558)                         */}
      {/* ========================================================================= */}
      {frame >= 46 && frame < 559 && (
        <div
          style={{
            position: "absolute",
            left: interpolate(frame, [420, 445], [0, -50], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            }),
            right: interpolate(frame, [420, 445], [0, 970], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            }),
            top: interpolate(frame, [420, 445], [130, 195], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            }),
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            pointerEvents: "none",
            zIndex: 25,
            transform: `scale(${interpolate(frame, [420, 445], [1, 0.76], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            })})`,
            opacity: interpolate(frame, [545, 558], [1, 0], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            }),
          }}
        >
          {/* Main Title before multiplication */}
          <div
            style={{
              fontSize: 40,
              color: theme.chalkText,
              marginBottom: 24,
              opacity: interpolate(frame, [46, 60], [0, 1], {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
              }),
            }}
          >
            {frame < 397 ? "Where Does The Time Go?" : "THREE WORK FACTORS"}
          </div>

          {/* Factor 1 Bar: STARTS */}
          {frame >= 77 && (
            <div
              style={{
                width: 1200,
                height: 72,
                borderRadius: 14,
                backgroundColor: "rgba(255, 209, 102, 0.12)",
                border: `2px solid ${theme.pivot}`,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "0 36px",
                marginBottom: 16,
                opacity: interpolate(frame, [77, 90], [0, 1], {
                  extrapolateLeft: "clamp",
                  extrapolateRight: "clamp",
                }),
                transform: `scale(${interpolate(act1BarCompress, [0, 1], [0.95, 1])})`,
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                <span style={{ fontFamily: fonts.mono, fontSize: 18, fontWeight: 700, color: theme.pivot }}>
                  FACTOR 1
                </span>
                <span style={{ fontSize: 28, color: theme.chalkText }}>
                  Possible Starting Numbers
                </span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <span style={{ fontFamily: fonts.mono, fontSize: 16, color: theme.chalkDim }}>
                  outer loop runs
                </span>
                <span style={{ fontFamily: fonts.mono, fontSize: 34, fontWeight: 700, color: theme.pivot }}>
                  n
                </span>
              </div>
            </div>
          )}

          {/* Factor 2 Bar: STEPS */}
          {frame >= 164 && (
            <div
              style={{
                width: 1200,
                height: 72,
                borderRadius: 14,
                backgroundColor: "rgba(92, 225, 230, 0.12)",
                border: `2px solid ${theme.cyan}`,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "0 36px",
                marginBottom: 16,
                opacity: interpolate(frame, [164, 180], [0, 1], {
                  extrapolateLeft: "clamp",
                  extrapolateRight: "clamp",
                }),
                transform: `scale(${interpolate(act2BarCompress, [0, 1], [0.95, 1])})`,
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                <span style={{ fontFamily: fonts.mono, fontSize: 18, fontWeight: 700, color: theme.cyan }}>
                  FACTOR 2
                </span>
                <span style={{ fontSize: 28, color: theme.chalkText }}>
                  Consecutive Sequence Length
                </span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <span style={{ fontFamily: fonts.mono, fontSize: 16, color: theme.chalkDim }}>
                  streak steps up to
                </span>
                <span style={{ fontFamily: fonts.mono, fontSize: 34, fontWeight: 700, color: theme.cyan }}>
                  n
                </span>
              </div>
            </div>
          )}

          {/* Factor 3 Bar: LIST SCAN */}
          {frame >= 323 && (
            <div
              style={{
                width: 1200,
                height: 72,
                borderRadius: 14,
                backgroundColor: "rgba(255, 118, 117, 0.12)",
                border: `2px solid ${theme.warn}`,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "0 36px",
                marginBottom: 16,
                opacity: interpolate(frame, [323, 340], [0, 1], {
                  extrapolateLeft: "clamp",
                  extrapolateRight: "clamp",
                }),
                transform: `scale(${interpolate(act3BarCompress, [0, 1], [0.95, 1])})`,
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                <span style={{ fontFamily: fonts.mono, fontSize: 18, fontWeight: 700, color: theme.warn }}>
                  FACTOR 3
                </span>
                <span style={{ fontSize: 28, color: theme.chalkText }}>
                  Membership Check (`in nums`)
                </span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <span style={{ fontFamily: fonts.mono, fontSize: 16, color: theme.chalkDim }}>
                  each check scans list
                </span>
                <span style={{ fontFamily: fonts.mono, fontSize: 34, fontWeight: 700, color: theme.warn }}>
                  n
                </span>
              </div>
            </div>
          )}
        </div>
      )}

      {/* ========================================================================= */}
      {/* ACT 1 Visual: Raw Array & Pointer Bracket (F46..F124)                     */}
      {/* ========================================================================= */}
      {frame >= 46 && frame < 125 && (
        <div
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            top: BASE_Y,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            opacity: act1ArrayFade,
            pointerEvents: "none",
          }}
        >
          {/* START? Pointer gliding across */}
          <div
            style={{
              position: "absolute",
              left: ROW_START_X + act1PointerPos * (CARD_WIDTH + CARD_GAP) + (CARD_WIDTH / 2) - 24,
              top: -65,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 2,
            }}
          >
            <span
              style={{
                fontFamily: fonts.mono,
                fontSize: 15,
                fontWeight: 700,
                color: theme.pivot,
                textShadow: `0 0 8px ${theme.pivot}`,
              }}
            >
              START?
            </span>
            <span style={{ fontSize: 22, color: theme.pivot }}>▼</span>
          </div>

          {/* Bracket across slots */}
          {act1BracketProgress > 0 && (
            <div
              style={{
                position: "absolute",
                left: ROW_START_X,
                top: -28,
                width: TOTAL_ROW_WIDTH,
                height: 22,
                borderTop: `2px solid ${theme.pivot}`,
                borderLeft: `2px solid ${theme.pivot}`,
                borderRight: `2px solid ${theme.pivot}`,
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-end",
              }}
            >
              <span
                style={{
                  fontFamily: fonts.mono,
                  fontSize: 16,
                  fontWeight: 700,
                  color: theme.pivot,
                  backgroundColor: theme.boardBg,
                  padding: "0 12px",
                  transform: "translateY(-12px)",
                }}
              >
                up to n starts
              </span>
            </div>
          )}
        </div>
      )}

      {/* ========================================================================= */}
      {/* ACT 2 Visual: Sequence Chain Extension (F125..F240)                       */}
      {/* ========================================================================= */}
      {frame >= 125 && frame < 240 && (
        <div
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            top: 480,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 18,
            opacity: act2StartFade,
            pointerEvents: "none",
          }}
        >
          <div
            style={{
              width: CARD_WIDTH,
              height: CARD_HEIGHT,
              borderRadius: 14,
              backgroundColor: "rgba(92, 225, 230, 0.18)",
              border: `2px solid ${theme.cyan}`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: fonts.mono,
              fontSize: 22,
              fontWeight: 700,
              color: theme.cyan,
            }}
          >
            start
          </div>

          <span style={{ fontSize: 34, color: theme.chalkDim }}>→</span>

          {/* Chain nodes */}
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            {[1, 2, 3, 4].map((nodeIdx) => {
              const nodeVisible = act2ChainProgress >= nodeIdx * 0.22;
              return (
                <div
                  key={nodeIdx}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 16,
                    opacity: nodeVisible ? 1 : 0.2,
                  }}
                >
                  <div
                    style={{
                      width: 64,
                      height: 64,
                      borderRadius: 32,
                      border: `2px dashed ${theme.cyan}`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: theme.cyan,
                      fontSize: 22,
                      fontFamily: fonts.mono,
                      fontWeight: 700,
                    }}
                  >
                    +{nodeIdx}
                  </div>
                  {nodeIdx < 4 && <span style={{ color: theme.chalkDim, fontSize: 26 }}>→</span>}
                </div>
              );
            })}

            {act2EllipsisFade > 0 && (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 14,
                  opacity: act2EllipsisFade,
                }}
              >
                <span style={{ fontSize: 36, color: theme.cyan }}>… →</span>
                <div
                  style={{
                    padding: "10px 24px",
                    borderRadius: 12,
                    backgroundColor: "rgba(92, 225, 230, 0.2)",
                    border: `1.5px solid ${theme.cyan}`,
                    fontFamily: fonts.mono,
                    fontSize: 20,
                    fontWeight: 700,
                    color: theme.cyan,
                  }}
                >
                  up to n steps
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* ACT 3 Visual: List Membership Scanner (F254..F380)                        */}
      {/* ========================================================================= */}
      {frame >= 254 && frame < 380 && (
        <div
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            top: 480,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            opacity: act3TargetFade,
            pointerEvents: "none",
          }}
        >
          {/* Target bubble */}
          <div
            style={{
              padding: "10px 30px",
              borderRadius: 24,
              backgroundColor: "rgba(255, 118, 117, 0.2)",
              border: `2px solid ${theme.warn}`,
              fontFamily: fonts.mono,
              fontSize: 20,
              fontWeight: 700,
              color: theme.warn,
              marginBottom: 20,
            }}
          >
            Checking: current + 1 in nums?
          </div>

          {/* Scan line trail */}
          <div
            style={{
              width: TOTAL_ROW_WIDTH,
              height: 10,
              borderRadius: 5,
              backgroundColor: "rgba(255, 118, 117, 0.15)",
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
                width: `${act3ScanProgress * 100}%`,
                backgroundColor: theme.warn,
                boxShadow: `0 0 16px ${theme.warn}`,
              }}
            />
          </div>

          {/* Underline label */}
          {act3BracketProgress > 0 && (
            <div
              style={{
                marginTop: 16,
                fontFamily: fonts.mono,
                fontSize: 18,
                color: theme.warn,
                opacity: act3BracketProgress,
              }}
            >
              Linear scan through entire list: up to n elements inspected!
            </div>
          )}
        </div>
      )}

      {/* ========================================================================= */}
      {/* ACT 4: Multiplication n × n × n → Wireframe Cube → O(n³) (F397..F558)     */}
      {/* ========================================================================= */}
      {frame >= 430 && frame < 586 && (
        <div
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            top: 240,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            pointerEvents: "none",
            zIndex: 35,
            transform: `scale(${1 - act4ShrinkProgress * 0.35}) translateY(${-act4ShrinkProgress * 60}px)`,
            opacity: 1 - act4ShrinkProgress,
          }}
        >
          {/* Right Work Area: Formula and Wireframe Cube */}
          <div
            style={{
              position: "absolute",
              left: 1120,
              top: 0,
              width: 540,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {/* n × n × n multiplication string */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 20,
                fontFamily: fonts.mono,
                fontSize: 64,
                fontWeight: 700,
                marginBottom: 20,
              }}
            >
              <span style={{ color: theme.pivot, opacity: act4N1Fade }}>n</span>
              <span style={{ color: theme.chalkDim, fontSize: 44, opacity: act4Times1Fade }}>×</span>
              <span style={{ color: theme.cyan, opacity: act4N2Fade }}>n</span>
              <span style={{ color: theme.chalkDim, fontSize: 44, opacity: act4Times2Fade }}>×</span>
              <span style={{ color: theme.warn, opacity: act4N3Fade }}>n</span>
            </div>

            {/* Wireframe Chalk Work Cube (Isometric front, top, side) */}
            {act4CubeProgress > 0 && (
              <svg
                width="420"
                height="340"
                viewBox="0 0 420 340"
                style={{
                  opacity: act4CubeProgress,
                  transform: `scale(${interpolate(act4CubeProgress, [0, 1], [0.6, 1])})`,
                  overflow: "visible",
                }}
              >
                {/* Isometric Cube Faces: Center front at (90, 130), width 170, height 170 */}
                {/* Front face */}
                <polygon
                  points="90,130 260,130 260,300 90,300"
                  fill="rgba(255, 118, 117, 0.08)"
                  stroke={theme.warn}
                  strokeWidth="3"
                  strokeDasharray="5 3"
                />
                {/* Top face (dx = 75, dy = -55) */}
                <polygon
                  points="90,130 165,75 335,75 260,130"
                  fill="rgba(255, 209, 102, 0.08)"
                  stroke={theme.pivot}
                  strokeWidth="3"
                />
                {/* Right side face */}
                <polygon
                  points="260,130 335,75 335,245 260,300"
                  fill="rgba(92, 225, 230, 0.08)"
                  stroke={theme.cyan}
                  strokeWidth="3"
                />
                {/* Internal chalk grid lines for cubic volume intuition */}
                <line x1="90" y1="215" x2="260" y2="215" stroke="rgba(248, 246, 240, 0.35)" strokeWidth="2" strokeDasharray="4 4" />
                <line x1="175" y1="130" x2="175" y2="300" stroke="rgba(248, 246, 240, 0.35)" strokeWidth="2" strokeDasharray="4 4" />
                <line x1="260" y1="215" x2="335" y2="160" stroke="rgba(248, 246, 240, 0.35)" strokeWidth="2" strokeDasharray="4 4" />

                {/* Dimension Axis Labels */}
                <text x="175" y="328" fill={theme.pivot} fontFamily={fonts.mono} fontSize="18" textAnchor="middle" fontWeight="bold">
                  STARTS (n)
                </text>
                <text x="45" y="215" fill={theme.cyan} fontFamily={fonts.mono} fontSize="18" textAnchor="middle" fontWeight="bold">
                  STEPS (n)
                </text>
                <text x="315" y="55" fill={theme.warn} fontFamily={fonts.mono} fontSize="18" textAnchor="middle" fontWeight="bold">
                  SCAN (n)
                </text>

                {/* Central Stamp: O(n³) */}
                {frame >= 528 && (
                  <g>
                    <rect
                      x="120"
                      y="165"
                      width="180"
                      height="70"
                      rx="12"
                      fill="rgba(10, 36, 25, 0.94)"
                      stroke={theme.warn}
                      strokeWidth="2.5"
                    />
                    <text
                      x="210"
                      y="215"
                      fill={theme.warn}
                      fontFamily={fonts.mono}
                      fontSize="40"
                      fontWeight="bold"
                      textAnchor="middle"
                    >
                      O(n³)
                    </text>
                  </g>
                )}
              </svg>
            )}
          </div>

          {/* Right Side: Cubic Growth Curve & Operations Counter */}
          {act4GraphProgress > 0 && (
            <div
              style={{
                position: "absolute",
                left: 1040,
                top: 10,
                width: 620,
                opacity: act4GraphProgress,
                display: "flex",
                flexDirection: "column",
                gap: 18,
              }}
            >
              {/* Mini Cubic Curve Box */}
              <div
                style={{
                  padding: "20px 28px",
                  borderRadius: 16,
                  backgroundColor: "rgba(10, 36, 25, 0.85)",
                  border: "1.5px solid rgba(248, 246, 240, 0.25)",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 10 }}>
                  <span style={{ fontFamily: fonts.mono, fontSize: 18, fontWeight: 700, color: theme.warn }}>
                    CUBIC GROWTH CURVE
                  </span>
                  <span style={{ fontFamily: fonts.mono, fontSize: 15, color: theme.chalkDim }}>
                    Work grows as n³
                  </span>
                </div>

                <svg width="560" height="160" viewBox="0 0 560 160">
                  {/* Axes */}
                  <line x1="40" y1="130" x2="520" y2="130" stroke="rgba(248, 246, 240, 0.4)" strokeWidth="2.5" />
                  <line x1="40" y1="15" x2="40" y2="130" stroke="rgba(248, 246, 240, 0.4)" strokeWidth="2.5" />
                  <text x="520" y="152" fill={theme.chalkDim} fontFamily={fonts.mono} fontSize="13" textAnchor="end">
                    Input Size (n) →
                  </text>
                  <text x="25" y="22" fill={theme.chalkDim} fontFamily={fonts.mono} fontSize="13">
                    Operations ↑
                  </text>

                  {/* Cubic Curve */}
                  <path
                    d="M 40,130 Q 300,128 480,20"
                    fill="none"
                    stroke={theme.warn}
                    strokeWidth="4.5"
                    strokeDasharray="480"
                    strokeDashoffset={interpolate(act4GraphProgress, [0, 1], [480, 0])}
                  />
                </svg>
              </div>

              {/* Concrete Example Counter */}
              <div
                style={{
                  padding: "18px 28px",
                  borderRadius: 14,
                  backgroundColor: "rgba(255, 118, 117, 0.16)",
                  border: `2px solid ${theme.warn}`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <div style={{ fontFamily: fonts.mono, fontSize: 15, color: theme.chalkDim }}>
                    CONCRETE EXAMPLE: n = 100
                  </div>
                  <div style={{ fontSize: 22, color: theme.chalkText }}>
                    100 × 100 × 100
                  </div>
                </div>
                <div style={{ textAlign: "right" }}>
                  <div
                    style={{
                      fontFamily: fonts.mono,
                      fontSize: 38,
                      fontWeight: 700,
                      color: theme.warn,
                      textShadow: `0 0 14px rgba(255, 118, 117, 0.6)`,
                    }}
                  >
                    {act4CounterVal.toLocaleString()} ops
                  </div>
                  <div style={{ fontFamily: fonts.mono, fontSize: 15, fontWeight: 700, color: theme.warn }}>
                    1 MILLION OPERATIONS!
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Historical Proof Thumbnail in Top-Left (F559+) */}
      {frame >= 559 && (
        <div
          style={{
            position: "absolute",
            left: 60,
            top: 90,
            padding: "8px 20px",
            borderRadius: 12,
            backgroundColor: "rgba(10, 36, 25, 0.85)",
            border: "1.5px solid rgba(255, 118, 117, 0.45)",
            display: "flex",
            alignItems: "center",
            gap: 12,
            opacity: interpolate(frame, [559, 580], [0, 0.85], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            }),
            zIndex: 30,
          }}
        >
          <span style={{ fontFamily: fonts.mono, fontSize: 14, color: theme.chalkDim }}>
            Brute Force:
          </span>
          <span style={{ fontFamily: fonts.mono, fontSize: 18, fontWeight: 700, color: theme.warn }}>
            n × n × n = O(n³)
          </span>
          <span style={{ fontSize: 14, color: theme.chalkDim }}>
            (1M ops for n=100)
          </span>
        </div>
      )}

      {/* ========================================================================= */}
      {/* ACT 5, 6, 7: REPEATED SEARCHING OVER RAW ARRAY (F559..F982)               */}
      {/* ========================================================================= */}
      {frame >= 559 && frame < 983 && (
        <div
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            top: 180,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            pointerEvents: "none",
            zIndex: 20,
            opacity: act5ArrayFade,
          }}
        >
          {/* Diagnosis Headline */}
          <div
            style={{
              fontSize: 40,
              color: frame < 935 ? theme.warn : theme.good,
              marginBottom: 10,
              textShadow: frame < 935 ? `0 0 14px rgba(255, 118, 117, 0.4)` : `0 0 14px rgba(60, 229, 167, 0.4)`,
              position: "relative",
            }}
          >
            {frame < 935 ? "The Real Bottleneck: Repeated List Searching" : "What If We Remove That Searching?"}

            {/* Strike-through in Act 7 across bottleneck title */}
            {act7StrikeProgress > 0 && frame < 935 && (
              <div
                style={{
                  position: "absolute",
                  left: -12,
                  top: "50%",
                  width: `${act7StrikeProgress * 104}%`,
                  height: 5,
                  backgroundColor: theme.warn,
                  boxShadow: `0 0 12px ${theme.warn}`,
                }}
              />
            )}
          </div>

          <div
            style={{
              fontSize: 24,
              color: theme.chalkDim,
              marginBottom: 28,
            }}
          >
            {frame < 935
              ? "Every consecutive check scans the same unsorted array again from the beginning."
              : "Can we arrange the values so searching is never needed?"}
          </div>

          {/* Active Target Query Bubble in Act 6 */}
          {frame >= 661 && frame < 889 && (
            <div
              style={{
                position: "absolute",
                top: 96,
                padding: "10px 32px",
                borderRadius: 24,
                backgroundColor: "rgba(10, 36, 25, 0.92)",
                border: `2px solid ${theme.cyan}`,
                display: "flex",
                alignItems: "center",
                gap: 12,
                boxShadow: "0 6px 20px rgba(0,0,0,0.4)",
              }}
            >
              <span style={{ fontSize: 18, color: theme.chalkDim }}>Query:</span>
              <span style={{ fontFamily: fonts.mono, fontSize: 22, fontWeight: 700, color: theme.cyan }}>
                {frame < 755 ? "need 9 in nums?" : frame < 854 ? "need 10 in nums?" : "need 11 in nums?"}
              </span>
              <span style={{ fontSize: 16, color: theme.warn }}>
                {frame < 755 ? "(Scan #1)" : frame < 854 ? "(Scan #2 from slot 0)" : "(Scan #3 from slot 0)"}
              </span>
            </div>
          )}

          {/* Multi-scan Lines Stack under Array */}
          <div
            style={{
              position: "absolute",
              top: 330,
              width: TOTAL_ROW_WIDTH,
              display: "flex",
              flexDirection: "column",
              gap: 10,
            }}
          >
            {/* Scan Line 1 (Target 9) */}
            {frame >= 684 && (
              <div
                style={{
                  height: 8,
                  borderRadius: 4,
                  backgroundColor: theme.cyan,
                  opacity: frame < 889 ? 0.9 : act7EraseProgress * 0.9,
                  width: `${(frame < 889 ? scan1Progress : act7EraseProgress) * 100}%`,
                  boxShadow: `0 0 10px ${theme.cyan}`,
                }}
              />
            )}

            {/* Scan Line 2 (Target 10) */}
            {frame >= 760 && (
              <div
                style={{
                  height: 8,
                  borderRadius: 4,
                  backgroundColor: theme.purple,
                  opacity: frame < 889 ? 0.8 : act7EraseProgress * 0.8,
                  width: `${(frame < 889 ? scan2Progress : act7EraseProgress) * 100}%`,
                  boxShadow: `0 0 10px ${theme.purple}`,
                }}
              />
            )}

            {/* Scan Line 3 (Target 11) */}
            {frame >= 854 && (
              <div
                style={{
                  height: 8,
                  borderRadius: 4,
                  backgroundColor: theme.warn,
                  opacity: frame < 889 ? 0.75 : act7EraseProgress * 0.75,
                  width: `${(frame < 889 ? scan3Progress : act7EraseProgress) * 100}%`,
                  boxShadow: `0 0 10px ${theme.warn}`,
                }}
              />
            )}

            {/* Same array again indicator */}
            {frame >= 821 && frame < 889 && (
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  alignItems: "center",
                  gap: 10,
                  fontFamily: fonts.mono,
                  fontSize: 16,
                  fontWeight: 700,
                  color: theme.warn,
                  marginTop: 6,
                }}
              >
                <span>↻ Scanned same unsorted array again from slot 0</span>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* MASTER 12 ARRAY CARDS (Physical objects that fly & sort in Act 8)         */}
      {/* ========================================================================= */}
      {frame >= 46 && (
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none", zIndex: 15 }}>
          {renderedCards.map((card) => {
            const isPair8 = card.val === 8 && frame >= 1089 && frame < 1245;
            const isPair9 = card.val === 9 && frame >= 1089 && frame < 1245;
            const isNextPairPulse = (card.val === 9 || card.val === 10) && act9NextPairPulse > 0;
            const isHighlighted = isPair8 || isPair9 || isNextPairPulse;

            return (
              <div
                key={card.rawIdx}
                style={{
                  position: "absolute",
                  left: card.x,
                  top: card.y,
                  width: CARD_WIDTH,
                  height: CARD_HEIGHT,
                  borderRadius: 14,
                  backgroundColor: isHighlighted
                    ? "rgba(60, 229, 167, 0.22)"
                    : "rgba(10, 36, 25, 0.75)",
                  border: `2px solid ${
                    isHighlighted
                      ? theme.good
                      : isPair8 || isPair9
                      ? theme.pivot
                      : "rgba(248, 246, 240, 0.25)"
                  }`,
                  boxShadow: isHighlighted
                    ? `0 0 20px rgba(60, 229, 167, 0.6)`
                    : "0 6px 16px rgba(0, 0, 0, 0.35)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  opacity: card.opacity,
                  zIndex: isHighlighted ? 25 : 15,
                }}
              >
                {/* Index tag */}
                <span
                  style={{
                    fontFamily: fonts.mono,
                    fontSize: 13,
                    color: theme.chalkDim,
                    marginBottom: 3,
                  }}
                >
                  [{frame < 1060 ? card.rawIdx : card.sortedIdx}]
                </span>

                {/* Card Number */}
                <span
                  style={{
                    fontFamily: fonts.mono,
                    fontSize: 38,
                    fontWeight: 700,
                    color: isHighlighted ? theme.good : theme.chalkText,
                  }}
                >
                  {card.val}
                </span>
              </div>
            );
          })}

          {/* Straightened Baseline under sorted row in Act 8 & 9 */}
          {act8BaselineFade > 0 && (
            <div
              style={{
                position: "absolute",
                left: ROW_START_X,
                top: BASE_Y + CARD_HEIGHT + 10,
                width: TOTAL_ROW_WIDTH,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                opacity: act8BaselineFade,
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: 3,
                  backgroundColor: theme.good,
                  boxShadow: `0 0 12px ${theme.good}`,
                }}
              />
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                  marginTop: 10,
                }}
              >
                {frame < 1279 ? (
                  <span style={{ fontFamily: fonts.mono, fontSize: 15, fontWeight: 700, color: theme.good, letterSpacing: 1 }}>
                    ▲ ARRANGED / SORTED IN ASCENDING ORDER
                  </span>
                ) : (
                  <div />
                )}
                <span style={{ fontFamily: fonts.mono, fontSize: 15, color: theme.chalkDim }}>
                  [-1, 0, 1, 2, 2, 3, 4, 6, 8, 9, 10, 11]
                </span>
              </div>
            </div>
          )}
        </div>
      )}

      {/* ========================================================================= */}
      {/* ACT 9: Neighbour +1 Relationship on Pair [8 | 9] (F1089..F1278)           */}
      {/* ========================================================================= */}
      {frame >= 1089 && frame < 1279 && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            zIndex: 30,
          }}
        >
          {/* Highlight focus box around pair 8 and 9 */}
          {act9BoxProgress > 0 && (
            <div
              style={{
                position: "absolute",
                left: ROW_START_X + 8 * (CARD_WIDTH + CARD_GAP) - 8,
                top: BASE_Y - 8,
                width: CARD_WIDTH * 2 + CARD_GAP + 16,
                height: CARD_HEIGHT + 16,
                borderRadius: 16,
                border: `2.5px dashed ${theme.good}`,
                opacity: act9BoxProgress,
                boxShadow: `0 0 20px rgba(60, 229, 167, 0.4)`,
              }}
            />
          )}

          {/* Curved +1 Relation Arrow above 8 and 9 */}
          {act9ArrowProgress > 0 && (
            <div
              style={{
                position: "absolute",
                left: ROW_START_X + 8 * (CARD_WIDTH + CARD_GAP) + 15,
                top: BASE_Y - 76,
                width: 170,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                opacity: act9ArrowProgress,
              }}
            >
              {/* +1 Badge */}
              <div
                style={{
                  padding: "4px 16px",
                  borderRadius: 14,
                  backgroundColor: "rgba(60, 229, 167, 0.25)",
                  border: `2px solid ${theme.good}`,
                  fontFamily: fonts.mono,
                  fontSize: 20,
                  fontWeight: 700,
                  color: theme.good,
                  boxShadow: `0 0 14px ${theme.good}`,
                  marginBottom: 6,
                }}
              >
                +1
              </div>

              {/* Curved SVG Arch */}
              <svg width="150" height="32" viewBox="0 0 150 32">
                <path
                  d="M 15,26 Q 75,2 135,26"
                  fill="none"
                  stroke={theme.good}
                  strokeWidth="3"
                />
                <polygon points="138,26 128,18 132,27" fill={theme.good} />
              </svg>
            </div>
          )}

          {/* Adjacency bracket "neighbours" below 8 and 9 (F1205) */}
          {act9NeighboursFade > 0 && (
            <div
              style={{
                position: "absolute",
                left: ROW_START_X + 8 * (CARD_WIDTH + CARD_GAP),
                top: BASE_Y + CARD_HEIGHT + 36,
                width: CARD_WIDTH * 2 + CARD_GAP,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                opacity: act9NeighboursFade,
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: 12,
                  borderBottom: `2.5px solid ${theme.good}`,
                  borderLeft: `2.5px solid ${theme.good}`,
                  borderRight: `2.5px solid ${theme.good}`,
                }}
              />
              <span
                style={{
                  fontFamily: fonts.mono,
                  fontSize: 18,
                  fontWeight: 700,
                  color: theme.good,
                  marginTop: 8,
                  letterSpacing: 1,
                }}
              >
                Adjacent Neighbours!
              </span>
            </div>
          )}
        </div>
      )}

      {/* ========================================================================= */}
      {/* ACT 10: Handoff State to Scene 06 (F1279..F1322)                          */}
      {/* ========================================================================= */}
      {frame >= 1279 && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            zIndex: 35,
          }}
        >
          {/* Scan Pointer settling under first card [-1] (sorted index 0) */}
          <div
            style={{
              position: "absolute",
              left: ROW_START_X + (CARD_WIDTH / 2) - 30,
              top: BASE_Y + CARD_HEIGHT + 14,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              opacity: act10PointerProgress,
              transform: `translateY(${interpolate(act10PointerProgress, [0, 1], [20, 0])}px)`,
            }}
          >
            <span style={{ fontSize: 26, color: theme.pivot }}>▲</span>
            <span
              style={{
                fontFamily: fonts.mono,
                fontSize: 15,
                fontWeight: 700,
                color: theme.pivot,
                letterSpacing: 1,
              }}
            >
              SCAN POINTER
            </span>
          </div>

          {/* Bottom HUD Tracker Ready for Scene 06 */}
          {act10HudFade > 0 && (
            <div
              style={{
                position: "absolute",
                left: 0,
                right: 0,
                bottom: 105,
                display: "flex",
                justifyContent: "center",
                gap: 40,
                opacity: act10HudFade,
              }}
            >
              <div
                style={{
                  padding: "12px 32px",
                  borderRadius: 14,
                  backgroundColor: "rgba(10, 36, 25, 0.9)",
                  border: "1.5px solid rgba(248, 246, 240, 0.25)",
                  display: "flex",
                  alignItems: "center",
                  gap: 14,
                }}
              >
                <span style={{ fontFamily: fonts.mono, fontSize: 15, color: theme.chalkDim }}>
                  CURRENT STREAK:
                </span>
                <span style={{ fontFamily: fonts.mono, fontSize: 26, fontWeight: 700, color: theme.chalkText }}>
                  —
                </span>
              </div>

              <div
                style={{
                  padding: "12px 32px",
                  borderRadius: 14,
                  backgroundColor: "rgba(10, 36, 25, 0.9)",
                  border: `2px solid ${theme.good}`,
                  display: "flex",
                  alignItems: "center",
                  gap: 14,
                  boxShadow: `0 0 18px rgba(60, 229, 167, 0.3)`,
                }}
              >
                <span style={{ fontFamily: fonts.mono, fontSize: 15, color: theme.good }}>
                  LONGEST STREAK:
                </span>
                <span style={{ fontFamily: fonts.mono, fontSize: 26, fontWeight: 700, color: theme.good }}>
                  —
                </span>
              </div>
            </div>
          )}
        </div>
      )}

      {/* ========================================================================= */}
      {/* BOTTOM CAPTIONS (Safe Zone y: 960..1040)                                  */}
      {/* ========================================================================= */}
      <Captions words={captionWords} bottom={38} fontSize={38} />
    </div>
  );
};
