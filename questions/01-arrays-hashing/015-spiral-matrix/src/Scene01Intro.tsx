/**
 * Scene01Intro.tsx — Scene 01 · Course Roadmap Resume & Q15 Activation
 * Spiral Matrix (LeetCode 54) · Pattern 01 — Arrays & Hashing
 *
 * Implements the continuous chalkboard Master Roadmap UI & Scene 02 Handoff:
 * - Master Roadmap UI Architecture resuming from Q14 Scene 13 ending state
 * - Total Duration: 917 frames @ 30fps (30.580s) strictly from sync/01-roadmap.json
 * - Anchors mapped from sync/01-roadmap.anchors.json
 *
 * Timeline:
 * - Beat 01 (F0–F94): "Welcome back to Code with Animation." (S01_WELCOME)
 *     Resumes exact Q14 ending state: 14 / 227 COMPLETE, Pattern 01 ACTIVE, Row 014 COMPLETE, Row 015 UP NEXT, rail at 015.
 * - Beat 02 (F95–F147): "Question 14," (S01_Q14)
 *     Row 014 spotlight focus; camera zooms in slightly (camScale 1.03, camY -74).
 * - Beat 03 (F148–F172): "rotate image" (S01_ROTATE)
 *     Row 014 title highlighted in crisp chalk text.
 * - Beat 04 (F173–F229): "is complete." (S01_COMPLETE)
 *     Checkmark (✓) redraw confirmation pulse. Global counter stays strictly 14/227.
 * - Beat 05 (F230–F379): "Our progress is now 14 out of 227." (S01_PROGRESS)
 *     Camera pans up to 14/227 pill (camScale 1.02, camY -110). Zero counter roll.
 * - Beat 06 (F380–F466): "And next, we have question 15," (S01_Q15)
 *     Spotlight shifts to Row 015. At F420 ("question 15"), UP NEXT (▶) mutates to NOW ACTIVE (●).
 * - Beat 07 (F467–F520): "spiral matrix." (S01_TITLE)
 *     Title hero reveal with drawn cyan chalk underline.
 * - Beat 08 (F521–F573): "Lead code 54," (S01_LC)
 *     Metadata LeetCode 54 boxed in rough chalk pill outline.
 * - Beat 09 (F574–F610): "medium." (S01_MEDIUM)
 *     Difficulty badge illuminates in warm amber sheen (#F59E0B). Complete row locked.
 * - Beat 10 (F611–F715): "This time, we are not changing the matrix." (S01_FIXED)
 *     "NO IN-PLACE MODIFICATION" card + faint 5x6 fixed matrix blueprint with padlock icon.
 * - Beat 11 (F716–F785): "We only need to read its values" (S01_READ)
 *     Read cursor badge + empty 1D output collector track fades in.
 * - Beat 12 (F786–F853): "in spiral order." (S01_SPIRAL)
 *     Animated gold chalk spiral trail sweeps through the boundary: right -> down -> left -> up -> inward.
 * - Beat 13 (F854–F917): "Let's understand it." (S01_UNDERSTAND)
 *     Representation handoff: surroundings fade out; Q015 header docks into ProblemOpenerShell.
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
import { ProblemOpenerShell } from "../../../../kit/components/ProblemOpenerShell";
import { RoughBox } from "../../../../kit/components/RoughBox";
import syncData from "../sync/01-roadmap.json";

// ---------------------------------------------------------------------------
// Word-level Caption Timings (normalized from sync/01-roadmap.json)
// ---------------------------------------------------------------------------
const captionWords: CaptionWord[] = (syncData.words || []).map((w: any, i: number) => {
  let word = w.word;
  // Whisper normalization: "Lead" + "code" -> "LeetCode"
  if (word.toLowerCase() === "lead") {
    word = "LeetCode";
  } else if (
    word.toLowerCase() === "code" &&
    i > 0 &&
    (syncData.words[i - 1].word.toLowerCase() === "lead" ||
      syncData.words[i - 1].word.toLowerCase() === "lead,")
  ) {
    word = "";
  } else if (word === "54,") {
    word = "54,";
  } else if (word === "14,") {
    word = "14,";
  } else if (word === "15,") {
    word = "15,";
  } else if (word === "227.") {
    word = "227.";
  }
  return {
    word,
    start: w.start_ms / 1000,
    end: w.end_ms / 1000,
  };
}).filter((w) => w.word !== "");

export const Scene01Intro: React.FC = () => {
  const frame = useCurrentFrame();

  // =========================================================================
  // CAMERA ENGINE (Subtle pan/zoom strictly matching framewise plan)
  // =========================================================================
  const { camScale, camX, camY }: { camScale: number; camX: number; camY: number } = useMemo(() => {
    // Beat 01 (F0–F94): Gentle settle from 1.008 -> 1.000
    if (frame < 95) {
      const settle = interpolate(frame, [0, 24], [1.008, 1.0], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
        easing: EASE,
      });
      return { camScale: settle, camX: 0, camY: 0 };
    }

    // Beats 02, 03, 04 (F95–F229): Focus in on Row 014
    if (frame >= 95 && frame < 230) {
      const scale = interpolate(frame, [95, 120], [1.0, 1.03], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
        easing: EASE,
      });
      const y = interpolate(frame, [95, 120], [0, -74], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
        easing: EASE,
      });
      return { camScale: scale, camX: 0, camY: y };
    }

    // Beat 05 (F230–F379): Pan up to frame the 14/227 progress pill
    if (frame >= 230 && frame < 380) {
      const scale = interpolate(frame, [230, 265], [1.03, 1.02], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
        easing: EASE,
      });
      const y = interpolate(frame, [230, 265], [-74, -110], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
        easing: EASE,
      });
      return { camScale: scale, camX: 0, camY: y };
    }

    // Beats 06 through 09 (F380–F610): Pan down to Row 015
    if (frame >= 380 && frame < 611) {
      const scale = interpolate(frame, [380, 415], [1.02, 1.03], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
        easing: EASE,
      });
      const y = interpolate(frame, [380, 415], [-110, -114], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
        easing: EASE,
      });
      return { camScale: scale, camX: 0, camY: y };
    }

    // Beats 10 through 13 (F611–F917): Ease back to neutral 1.000 for matrix contrast & handoff
    if (frame >= 611) {
      const scale = interpolate(frame, [611, 650], [1.03, 1.00], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
        easing: EASE,
      });
      const y = interpolate(frame, [611, 650], [-114, 0], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
        easing: EASE,
      });
      return { camScale: scale, camX: 0, camY: y };
    }

    return { camScale: 1.0, camX: 0, camY: 0 };
  }, [frame]);

  // Spotlight row: 14 during Beats 02-04 (F95–F229), 15 during Beats 06-13 (F380–F917)
  const spotlightRow = useMemo(() => {
    if (frame >= 95 && frame < 230) return 14;
    if (frame >= 380 && frame < 611) return 15;
    return undefined;
  }, [frame]);

  // Canonical Q15 activation at Frame 420 ("question 15,")
  const isQ015Active = frame >= 420;
  const activeBadgeLabel = isQ015Active ? "NOW ACTIVE" : "UP NEXT";

  // Header underline draws during Beat 01 (F0..F94)
  const showHeaderUnderline = frame < 95;

  // Handoff fade: roadmap cleanly fades out starting at Beat 10 (F611) so teaching board takes center stage
  const handoffFade = useMemo(() => {
    if (frame < 611) return 0;
    return interpolate(frame, [611, 640], [0, 1.0], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
      easing: EASE,
    });
  }, [frame]);

  // Animated chalk spiral path progress in Beat 12 (F786..F853)
  const spiralProgress = useMemo(() => {
    if (frame < 786) return 0;
    return interpolate(frame, [786, 840], [0, 1], {
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
      <Audio src={staticFile("audio/015/scence01.mp3")} />

      {/* ChalkDust bursts on key beats: Q014 confirm pulse (F173) and Q015 activation (F420) */}
      {frame >= 173 && frame <= 203 && (
        <ChalkDust x={1090} y={654} start={173} color={theme.good} count={12} radius={45} />
      )}
      {frame >= 420 && frame <= 450 && (
        <ChalkDust x={1090} y={698} start={420} color={theme.pivot} count={16} radius={60} />
      )}

      {/* Authoritative Permanent Master Roadmap UI Architecture */}
      <MasterRoadmapV2
        completedCount={14}
        completedGlobalNums={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]}
        activeGlobalNum={isQ015Active ? 15 : 0}
        upNextGlobalNum={isQ015Active ? undefined : 15}
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

      {/* Beats 10, 11, 12 (F611..F853): Problem Contrast Card + 5x6 Matrix Blueprint */}
      {frame >= 611 && frame < 854 && (
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
            opacity: interpolate(frame, [611, 635], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: EASE,
            }),
            zIndex: 30,
          }}
        >
          {/* Header Contrast Callout */}
          <div
            style={{
              position: "relative",
              width: 720,
              height: 52,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: 24,
            }}
          >
            <RoughBox width={720} height={52} startFrame={611} stroke={theme.pivot} strokeWidth={2.5} seed={105} />
            <div
              style={{
                position: "absolute",
                fontFamily: fonts.sans,
                fontSize: 22,
                fontWeight: 800,
                letterSpacing: 2,
                color: theme.pivot,
                display: "flex",
                alignItems: "center",
                gap: 12,
              }}
            >
              <span>🔒</span>
              <span>NO IN-PLACE MODIFICATION — CELLS REMAIN FIXED</span>
            </div>
          </div>

          {/* Faint 5x6 Matrix Blueprint (Neutral empty cells, NO numbers) */}
          <div
            style={{
              position: "relative",
              width: 640,
              height: 360,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div style={{ position: "absolute", top: 0, left: 0, pointerEvents: "none" }}>
              <RoughBox width={640} height={360} startFrame={611} stroke="rgba(248, 246, 240, 0.4)" strokeWidth={1.5} seed={106} />
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(6, 1fr)",
                gridTemplateRows: "repeat(5, 1fr)",
                gap: 10,
                width: 590,
                height: 310,
                zIndex: 2,
              }}
            >
              {Array.from({ length: 30 }).map((_, idx) => (
                <div
                  key={idx}
                  style={{
                    border: `1.5px dashed rgba(248, 246, 240, 0.25)`,
                    borderRadius: 8,
                    backgroundColor: "rgba(255, 255, 255, 0.02)",
                  }}
                />
              ))}
            </div>

            {/* Beat 12: SPIRAL ORDER ? Unresolved question prompt (NO final path) */}
            {frame >= 786 && (
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  zIndex: 10,
                  opacity: interpolate(frame, [786, 810], [0, 1], {
                    extrapolateLeft: "clamp",
                    extrapolateRight: "clamp",
                    easing: EASE,
                  }),
                }}
              >
                <div
                  style={{
                    position: "relative",
                    width: 340,
                    height: 60,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <RoughBox width={340} height={60} startFrame={786} stroke={theme.pivot} strokeWidth={2.5} seed={107} />
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontFamily: fonts.sans,
                      fontSize: 22,
                      fontWeight: 800,
                      letterSpacing: 2,
                      color: theme.pivot,
                      gap: 10,
                    }}
                  >
                    <span>🌀</span>
                    <span>SPIRAL ORDER ?</span>
                  </div>
                </div>
              </div>
            )}

            {/* Beat 11: Bottom Harvest Label */}
            {frame >= 716 && frame < 786 && (
              <div
                style={{
                  position: "absolute",
                  bottom: -52,
                  fontFamily: fonts.sans,
                  fontSize: 18,
                  fontWeight: 700,
                  letterSpacing: 1.5,
                  color: theme.good,
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  backgroundColor: theme.cardBg,
                  padding: "6px 20px",
                  borderRadius: 20,
                  border: `1.5px solid ${theme.good}`,
                }}
              >
                <span>📥</span>
                <span>READ & HARVEST VALUES</span>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Beat 13 (F854..F917): Representation Handoff into ProblemOpenerShell */}
      {frame >= 854 && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            opacity: interpolate(frame, [854, 885], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: EASE,
            }),
            zIndex: 40,
          }}
        >
          <ProblemOpenerShell
            pattern="01 · ARRAYS & HASHING"
            leetcodeNumber={54}
            difficulty="MEDIUM"
            title="Spiral Matrix"
            task="Return all elements of an m × n matrix in clockwise spiral order."
            signature="def spiralOrder(matrix: List[List[int]]) -> List[int]:"
            startFrame={854}
            showBackground={false}
          >
            {/* Center stage is kept clean for Scene 02 matrix reveal */}
            <div
              style={{
                width: "100%",
                height: 480,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  fontFamily: fonts.hand,
                  fontSize: 28,
                  color: "rgba(248, 246, 240, 0.6)",
                  letterSpacing: 1,
                }}
              >
                Master 5 × 6 Matrix incoming...
              </div>
            </div>
          </ProblemOpenerShell>
        </div>
      )}

      {/* Captions */}
      <Captions words={captionWords} />
    </div>
  );
};
