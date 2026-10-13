/**
 * Scene01Intro.tsx — Scene 01 · Roadmap Resume + Q17 Activation
 * Encode and Decode Strings (LeetCode 271) · Pattern 01 — Arrays & Hashing
 *
 * Implements the continuous chalkboard Master Roadmap UI & Board-Native Goal Schematic:
 * - Master Roadmap UI resuming from Q16: 16 / 227 COMPLETE
 * - Row 016 COMPLETE with green checkmark
 * - Row 017 mutates to NOW ACTIVE at Frame 309 ("Next ... Question Seventeen.")
 * - Roadmap cleanly fades to bare chalkboard at Frame 463 for board-native goal schematic
 * - Demonstrates stateless protocol contract: list of strings -> encode -> single string -> decode -> original list
 * - Total Duration: 779 frames @ 30fps (25.98s) strictly from sync/01-roadmap.json
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
import { BoardHeader } from "./BoardHeader";
import syncData from "../sync/01-roadmap.json";

const captionWords: CaptionWord[] = (syncData.words || []).map((w: any) => ({
  word: w.word,
  start: w.start_ms / 1000,
  end: w.end_ms / 1000,
}));

export const Scene01Intro: React.FC = () => {
  const frame = useCurrentFrame();

  // Camera engine
  const { camScale, camX, camY } = useMemo(() => {
    // Beat 01 (F0–F164): Settle from 1.008 -> 1.000
    if (frame < 164) {
      const settle = interpolate(frame, [0, 24], [1.008, 1.0], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
        easing: EASE,
      });
      return { camScale: settle, camX: 0, camY: 0 };
    }

    // Beat 02 (F164–F309): Subtle pan to focus progress counter (16/227)
    if (frame >= 164 && frame < 309) {
      const scale = interpolate(frame, [164, 195], [1.0, 1.02], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
        easing: EASE,
      });
      const y = interpolate(frame, [164, 195], [0, -70], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
        easing: EASE,
      });
      return { camScale: scale, camX: 0, camY: y };
    }

    // Beat 03 & 04 (F309–F463): Focus down to Row 017
    if (frame >= 309 && frame < 463) {
      const scale = interpolate(frame, [309, 340], [1.02, 1.03], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
        easing: EASE,
      });
      const y = interpolate(frame, [309, 340], [-70, -120], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
        easing: EASE,
      });
      return { camScale: scale, camX: 0, camY: y };
    }

    // Beat 05+ (F463+): Reset to neutral 1.0 for board schematic
    return { camScale: 1.0, camX: 0, camY: 0 };
  }, [frame]);

  // Roadmap visibility & handoff
  const roadmapOpacity = useMemo(() => {
    if (frame < 450) return 1;
    return interpolate(frame, [450, 480], [1, 0], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
      easing: EASE,
    });
  }, [frame]);

  const schematicOpacity = useMemo(() => {
    if (frame < 465) return 0;
    return interpolate(frame, [465, 495], [0, 1], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
      easing: EASE,
    });
  }, [frame]);

  // Completed global numbers up to 16
  const completedNums = useMemo(() => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16], []);

  // Row 17 activation state
  const isQ17Active = frame >= 309;

  // Schematic elements timing
  const inputStringsReveal = interpolate(frame, [480, 505], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: EASE,
  });

  const encodeArrowProgress = interpolate(frame, [520, 545], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: EASE,
  });

  const encodedStreamReveal = interpolate(frame, [545, 570], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: EASE,
  });

  const decodeArrowProgress = interpolate(frame, [600, 625], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: EASE,
  });

  const restoredListReveal = interpolate(frame, [630, 655], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: EASE,
  });

  const goalBadgeReveal = interpolate(frame, [745, 765], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: EASE,
  });

  return (
    <div
      style={{
        width: 1920,
        height: 1080,
        position: "relative",
        backgroundColor: theme.boardBg,
        overflow: "hidden",
      }}
    >
      <ChalkboardBackground />
      <ChalkFilters />
      {frame >= 745 && <ChalkDust x={1100} y={600} start={745} color={theme.good} />}

      <Audio src={staticFile("audio/017/01-roadmap.mp3")} />

      {/* CAMERA TRANSFORM CONTAINER */}
      <div
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          transform: `scale(${camScale}) translate(${camX}px, ${camY}px)`,
          transformOrigin: "center center",
        }}
      >
        {/* PHASE 1: FULL-SCREEN MASTER ROADMAP */}
        {roadmapOpacity > 0 && (
          <div
            style={{
              position: "absolute",
              inset: 0,
              opacity: roadmapOpacity,
              pointerEvents: "none",
            }}
          >
            <MasterRoadmapV2
              completedCount={16}
              completedGlobalNums={completedNums}
              activeGlobalNum={isQ17Active ? 17 : undefined}
              upNextGlobalNum={isQ17Active ? 18 : 17}
              activeBadgeLabel={isQ17Active ? "NOW ACTIVE" : "UP NEXT"}
              spotlightRow={frame >= 164 && frame < 309 ? undefined : isQ17Active ? 17 : 16}
            />
          </div>
        )}

        {/* PHASE 2: BOARD-NATIVE GOAL SCHEMATIC */}
        {schematicOpacity > 0 && (
          <div
            style={{
              position: "absolute",
              inset: 0,
              opacity: schematicOpacity,
              display: "flex",
              flexDirection: "column",
            }}
          >
            {/* CANONICAL BOARD HEADER */}
            <BoardHeader
              title="ENCODE AND DECODE STRINGS"
              badge="STATELESS SERIALIZATION"
              badgeColor={theme.pivot}
              seed={11}
            />

            {/* SCHEMATIC STAGE: VERTICAL FLOW (Y: 120 .. 860) */}
            <div
              style={{
                position: "absolute",
                top: 120,
                left: 160,
                right: 160,
                height: 740,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              {/* STEP 1: INPUT LIST OF STRINGS */}
              <div
                style={{
                  opacity: inputStringsReveal,
                  transform: `translateY(${interpolate(inputStringsReveal, [0, 1], [15, 0])}px)`,
                  width: "100%",
                  position: "relative",
                  height: 155,
                  padding: "16px 28px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div style={{ position: "absolute", top: 0, left: 0, pointerEvents: "none" }}>
                  <RoughBox
                    width={1600}
                    height={155}
                    stroke={theme.cyan}
                    strokeWidth={2}
                    roughness={1.2}
                    seed={12}
                  />
                </div>

                <div
                  style={{
                    fontFamily: fonts.mono,
                    fontSize: 16,
                    color: theme.chalkTextDim,
                    zIndex: 1,
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <span>Machine 1 &bull; Original Input <span style={{ color: theme.cyan, fontWeight: 700 }}>strs: List[str]</span></span>
                  <span style={{ color: theme.cyan }}>4 STRINGS</span>
                </div>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 20,
                    zIndex: 1,
                  }}
                >
                  {["\"a#b\"", "\"\"", "\"hello world\"", "\"42\""].map((strItem, idx) => (
                    <div
                      key={idx}
                      style={{
                        flex: 1,
                        padding: "12px 20px",
                        border: `1.5px solid ${theme.cyan}`,
                        borderRadius: 8,
                        backgroundColor: "transparent",
                        fontFamily: fonts.mono,
                        fontSize: 24,
                        color: theme.cyan,
                        fontWeight: 600,
                        display: "flex",
                        alignItems: "center",
                        gap: 10,
                      }}
                    >
                      <span style={{ fontSize: 14, color: theme.chalkTextDim }}>
                        [{idx}]
                      </span>
                      <span>{strItem}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* STEP 2: ENCODE ARROW */}
              <div
                style={{
                  opacity: encodeArrowProgress,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  height: 60,
                  justifyContent: "center",
                }}
              >
                <div
                  style={{
                    fontFamily: fonts.mono,
                    fontSize: 16,
                    color: theme.cyan,
                    fontWeight: 700,
                    letterSpacing: 1.5,
                    marginBottom: 2,
                    textTransform: "uppercase",
                  }}
                >
                  &darr; encode(strs) &rarr; str
                </div>
                <svg width="24" height="28" viewBox="0 0 24 28">
                  <path
                    d="M12 0 L12 24 M4 16 L12 24 L20 16"
                    stroke={theme.cyan}
                    strokeWidth="3"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              {/* STEP 3: ENCODED STREAM */}
              <div
                style={{
                  opacity: encodedStreamReveal,
                  transform: `translateY(${interpolate(encodedStreamReveal, [0, 1], [15, 0])}px)`,
                  width: "100%",
                  position: "relative",
                  height: 140,
                  padding: "16px 28px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div style={{ position: "absolute", top: 0, left: 0, pointerEvents: "none" }}>
                  <RoughBox
                    width={1600}
                    height={140}
                    stroke={theme.pivot}
                    strokeWidth={2}
                    roughness={1.2}
                    seed={13}
                  />
                </div>

                <div
                  style={{
                    fontFamily: fonts.mono,
                    fontSize: 16,
                    color: theme.chalkTextDim,
                    zIndex: 1,
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <span>Network Wire &bull; Single Contiguous Transmission String <span style={{ color: theme.pivot, fontWeight: 700 }}>s: str</span></span>
                  <span style={{ color: theme.pivot }}>25 CHARACTERS</span>
                </div>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "10px 24px",
                    borderRadius: 8,
                    border: `1.5px solid ${theme.pivot}`,
                    fontFamily: fonts.mono,
                    fontSize: 32,
                    color: theme.pivot,
                    fontWeight: 700,
                    letterSpacing: 2,
                    zIndex: 1,
                  }}
                >
                  3#a#b0#11#hello world2#42
                </div>
              </div>

              {/* STEP 4: DECODE ARROW */}
              <div
                style={{
                  opacity: decodeArrowProgress,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  height: 60,
                  justifyContent: "center",
                }}
              >
                <div
                  style={{
                    fontFamily: fonts.mono,
                    fontSize: 16,
                    color: theme.good,
                    fontWeight: 700,
                    letterSpacing: 1.5,
                    marginBottom: 2,
                    textTransform: "uppercase",
                  }}
                >
                  &darr; decode(s) &rarr; List[str]
                </div>
                <svg width="24" height="28" viewBox="0 0 24 28">
                  <path
                    d="M12 0 L12 24 M4 16 L12 24 L20 16"
                    stroke={theme.good}
                    strokeWidth="3"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              {/* STEP 5: RESTORED ORIGINAL LIST */}
              <div
                style={{
                  opacity: restoredListReveal,
                  transform: `translateY(${interpolate(restoredListReveal, [0, 1], [15, 0])}px)`,
                  width: "100%",
                  position: "relative",
                  height: 155,
                  padding: "16px 28px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div style={{ position: "absolute", top: 0, left: 0, pointerEvents: "none" }}>
                  <RoughBox
                    width={1600}
                    height={155}
                    stroke={theme.good}
                    strokeWidth={2}
                    roughness={1.2}
                    seed={14}
                  />
                </div>

                <div
                  style={{
                    fontFamily: fonts.mono,
                    fontSize: 16,
                    color: theme.chalkTextDim,
                    zIndex: 1,
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <span>Machine 2 &bull; Exact Reconstructed List <span style={{ color: theme.good, fontWeight: 700 }}>res: List[str]</span></span>
                  <span style={{ color: theme.good }}>100% LOSSLESS</span>
                </div>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 20,
                    zIndex: 1,
                  }}
                >
                  {["\"a#b\"", "\"\"", "\"hello world\"", "\"42\""].map((strItem, idx) => (
                    <div
                      key={idx}
                      style={{
                        flex: 1,
                        padding: "12px 20px",
                        border: `1.5px solid ${theme.good}`,
                        borderRadius: 8,
                        backgroundColor: "transparent",
                        fontFamily: fonts.mono,
                        fontSize: 24,
                        color: theme.good,
                        fontWeight: 600,
                        display: "flex",
                        alignItems: "center",
                        gap: 10,
                      }}
                    >
                      <span style={{ fontSize: 14, color: theme.chalkTextDim }}>
                        [{idx}]
                      </span>
                      <span>{strItem}</span>
                    </div>
                  ))}
                  {goalBadgeReveal > 0 && (
                    <div
                      style={{
                        opacity: goalBadgeReveal,
                        transform: `scale(${interpolate(goalBadgeReveal, [0, 1], [0.8, 1.0])})`,
                        display: "flex",
                        alignItems: "center",
                        gap: 8,
                        padding: "10px 18px",
                        border: `2px solid ${theme.good}`,
                        borderRadius: 8,
                        backgroundColor: "rgba(60, 229, 167, 0.16)",
                        color: theme.good,
                        fontFamily: fonts.mono,
                        fontWeight: 800,
                        fontSize: 16,
                      }}
                    >
                      ✓ 100% MATCH
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* FIXED WORD-SYNC CAPTIONS SAFE ZONE (Y: 960..1040) */}
      <Captions words={captionWords} />
    </div>
  );
};
