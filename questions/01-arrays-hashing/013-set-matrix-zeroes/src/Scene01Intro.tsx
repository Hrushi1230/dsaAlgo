/**
 * Scene01Intro.tsx — Scene 01 · Course Roadmap Resume & Q13 Activation
 * Set Matrix Zeroes (LeetCode 73) · Pattern 01 — Arrays & Hashing
 *
 * Implements the continuous chalkboard Master Roadmap UI & Scene 02 Handoff:
 * - Master Roadmap UI Architecture resuming from Q12 Scene 10 ending state
 * - Total Duration: 1092 frames @ 30fps (36.400s) strictly from sync/01-intro-roadmap.json
 * - Anchors mapped from sync/01-intro-roadmap.anchors.json
 *
 * Timeline:
 * - Beat 01 (F0–F81): "Welcome back to Code with Animation." (S01_WELCOME)
 *     Resumes exact Q12 ending state: 12 / 227 COMPLETE, Pattern 01 ACTIVE, Row 012 COMPLETE, Row 013 UP NEXT, rail at 013.
 * - Beat 02 (F82–F195): "We are continuing our arrays and hashing roadmap." (S01_ROADMAP)
 *     Chalk underline draws under top-center DSA PATTERN ROADMAP header (F92..F142).
 * - Beat 03 (F196–F248): "Question 12." (S01_Q12)
 *     Row 012 isolated in spotlight focus; camera zooms in slightly (camScale 1.03, camY -40).
 * - Beat 04 (F249–F281): "Next permutation" (S01_NEXT_PERM)
 *     Row 012 title highlighted in crisp chalk text.
 * - Beat 05 (F282–F349): "is complete." (S01_Q12_COMPLETE)
 *     Checkmark (✓) redraw confirmation pulse. Global counter stays strictly 12/227.
 * - Beat 06 (F350–F492): "Our global progress is now 12 out of 227." (S01_GLOBAL_PROGRESS)
 *     Camera pans up to 12/227 pill (camScale 1.02, camY -110). Zero counter roll.
 * - Beat 07 (F493–F551): "And the next problem is" (S01_NEXT_PROBLEM)
 *     Focus transfer from Row 012 to Row 013; camera pans down to Row 013 (camScale 1.03, camY -114); Row 013 still UP NEXT.
 * - Beat 08 (F552–F614): "question 13." (S01_Q13_ACTIVATION)
 *     Canonical activation: UP NEXT (▶) -> NOW ACTIVE (●); status badge turns active cyan/green; counter stays 12/227.
 * - Beat 09 (F615–F693): "Set matrix zeros." (S01_SET_MATRIX_ZEROES)
 *     Title hero reveal with drawn chalk underline.
 * - Beat 10 (F694–F778): "Lead code 73." (S01_LC73)
 *     Metadata LC 73 boxed in rough chalk outline; normalized caption.
 * - Beat 11 (F779–F819): "Medium." (S01_MEDIUM)
 *     Difficulty badge illuminates in warm amber sheen (#F59E0B). Complete row locked.
 * - Beat 12 (F820–F910): "This question looks simple at first." (S01_SIMPLE_AT_FIRST)
 *     Surrounding roadmap chrome begins gentle fade (handoffFade: 0.0 -> 0.4); camera eases back to 1.000.
 * - Beat 13 (F911–F1042): "But one small detail changes the whole problem." (S01_ONE_SMALL_DETAIL)
 *     Curiosity hold; subtle focus on Q013 header; zero spoilers of the cascading zeros trap.
 * - Beat 14 (F1043–F1092): "Let's understand that first." (S01_UNDERSTAND_FIRST)
 *     Representation handoff: surroundings fade out; Q013 header docks into ProblemOpenerShell; center stage empty.
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
import syncData from "../sync/01-intro-roadmap.json";

// ---------------------------------------------------------------------------
// Word-level Caption Timings (normalized from sync/01-intro-roadmap.json)
// ---------------------------------------------------------------------------
const captionWords: CaptionWord[] = (syncData.words || []).map((w: any, i: number) => {
  let word = w.word;
  // Whisper normalization: "lead" + "code" -> "LeetCode"
  if (word.toLowerCase() === "lead") {
    word = "LeetCode";
  } else if (
    word.toLowerCase() === "code" &&
    i > 0 &&
    (syncData.words[i - 1].word.toLowerCase() === "lead" ||
      syncData.words[i - 1].word.toLowerCase() === "lead,")
  ) {
    word = "";
  } else if (word === "73.") {
    word = "73.";
  } else if (word.toLowerCase() === "zeros.") {
    word = "Zeroes.";
  } else if (word === "12.") {
    word = "12.";
  } else if (word === "13.") {
    word = "13.";
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
    // Beat 01 (F0–F81): Gentle settle from 1.008 -> 1.000
    if (frame < 82) {
      const settle = interpolate(frame, [0, 24], [1.008, 1.0], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
        easing: EASE,
      });
      return { camScale: settle, camX: 0, camY: 0 };
    }

    // Beat 02 (F82–F195): Stable neutral camera keeping top bar and sidebar fully visible
    if (frame >= 82 && frame < 196) {
      return { camScale: 1.0, camX: 0, camY: 0 };
    }

    // Beats 03, 04, 05 (F196–F349): Focus in on Row 012
    if (frame >= 196 && frame < 350) {
      const scale = interpolate(frame, [196, 226], [1.0, 1.03], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
        easing: EASE,
      });
      const y = interpolate(frame, [196, 226], [0, -40], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
        easing: EASE,
      });
      return { camScale: scale, camX: 0, camY: y };
    }

    // Beat 06 (F350–F492): Pan up to frame the 12/227 progress pill
    if (frame >= 350 && frame < 493) {
      const scale = interpolate(frame, [350, 385], [1.03, 1.02], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
        easing: EASE,
      });
      const y = interpolate(frame, [350, 385], [-40, -110], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
        easing: EASE,
      });
      return { camScale: scale, camX: 0, camY: y };
    }

    // Beats 07 through 11 (F493–F819): Pan down to Row 013 and zoom slightly to 1.03
    if (frame >= 493 && frame < 820) {
      const scale = interpolate(frame, [493, 528], [1.02, 1.03], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
        easing: EASE,
      });
      const y = interpolate(frame, [493, 528], [-110, -114], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
        easing: EASE,
      });
      return { camScale: scale, camX: 0, camY: y };
    }

    // Beat 12, 13, 14 (F820–F1092): Re-center and ease to neutral 1.000 for representation handoff
    if (frame >= 820) {
      const scale = interpolate(frame, [820, 865], [1.03, 1.00], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
        easing: EASE,
      });
      const y = interpolate(frame, [820, 865], [-114, 0], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
        easing: EASE,
      });
      return { camScale: scale, camX: 0, camY: y };
    }

    return { camScale: 1.0, camX: 0, camY: 0 };
  }, [frame]);

  // Spotlight row: 12 during Beats 03-05 (F196–F349), 13 during Beats 07-11 (F493–F819)
  const spotlightRow = useMemo(() => {
    if (frame >= 196 && frame < 350) return 12;
    if (frame >= 493 && frame < 820) return 13;
    return undefined;
  }, [frame]);

  // Canonical Q13 activation at Frame 552 ("question 13.")
  const isQ013Active = frame >= 552;
  const activeBadgeLabel = isQ013Active ? "NOW ACTIVE" : "UP NEXT";

  // Header underline draws during Beat 02 (F92..F142)
  const showHeaderUnderline = frame >= 92;

  // Handoff fade: surroundings fade out progressively across Beats 12, 13, 14
  const handoffFade = useMemo(() => {
    if (frame < 820) return 0;
    if (frame < 911) {
      return interpolate(frame, [820, 870], [0, 0.4], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
        easing: EASE,
      });
    }
    if (frame < 1043) {
      return interpolate(frame, [911, 960], [0.4, 0.75], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
        easing: EASE,
      });
    }
    return interpolate(frame, [1043, 1080], [0.75, 1.0], {
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
      <Audio src={staticFile("audio/013/01-intro-roadmap.mp3")} />

      {/* ChalkDust bursts on key beats: Q012 confirm pulse (F282) and Q013 activation (F552) */}
      {frame >= 282 && frame <= 312 && (
        <ChalkDust x={1090} y={654} start={282} color={theme.good} count={12} radius={45} />
      )}
      {frame >= 552 && frame <= 582 && (
        <ChalkDust x={1090} y={698} start={552} color={theme.pivot} count={16} radius={60} />
      )}

      {/* Authoritative Permanent Master Roadmap UI Architecture */}
      <MasterRoadmapV2
        completedCount={12}
        completedGlobalNums={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]}
        activeGlobalNum={isQ013Active ? 13 : 0}
        upNextGlobalNum={isQ013Active ? undefined : 13}
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

      {/* Beat 14 (F1043..F1092): Representation Handoff into ProblemOpenerShell */}
      {frame >= 1043 && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            opacity: interpolate(frame, [1043, 1075], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: EASE,
            }),
          }}
        >
          <ProblemOpenerShell
            pattern="01 · ARRAYS & HASHING"
            leetcodeNumber={73}
            difficulty="MEDIUM"
            title="Set Matrix Zeroes"
            startFrame={1043}
            showBackground={false}
          />
        </div>
      )}

      {/* Bottom captions */}
      <Captions words={captionWords} bottom={38} fontSize={38} />
    </div>
  );
};
