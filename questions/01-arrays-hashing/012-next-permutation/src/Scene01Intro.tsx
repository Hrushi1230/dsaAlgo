/**
 * Scene01Intro.tsx — Scene 01 · Course Roadmap Resume & Q12 Activation
 * Next Permutation (LeetCode 31) · Pattern 01 — Arrays & Hashing
 *
 * Implements the continuous chalkboard Master Roadmap UI & Scene 02 Handoff:
 * - Master Roadmap UI Architecture resuming from Q11 Scene 10 ending state
 * - Total Duration: 767 frames @ 30fps (25.560s) strictly from sync/01-intro-roadmap.json
 * - Anchors mapped from sync/01-intro-roadmap.anchors.json
 *
 * Timeline:
 * - Beat A (F0–F81): "Welcome back to Code with Animation." (S01_WELCOME)
 *     Resumes exact Q11 ending state: 11 / 227 COMPLETE, Pattern 01 ACTIVE, Row 011 COMPLETE, Row 012 UP NEXT, rail at 012.
 * - Beat B (F81–F203): "We are continuing our DSA pattern roadmap." (S01_ROADMAP)
 *     Chalk underline draws under top-center DSA PATTERN ROADMAP header (F92..F142).
 * - Beat C (F203–F248): "Question 11," (S01_Q11)
 *     Row 011 isolated in spotlight focus; camera zooms in slightly (camScale 1.03, camY -40).
 * - Beat D (F248–F282): "sort colors," (S01_SORT_COLORS)
 *     Row 011 title highlighted in crisp chalk text with amber sheen.
 * - Beat E (F282–F331): "is complete." (S01_Q11_COMPLETE)
 *     Checkmark (✓) redraw confirmation pulse. Global counter stays strictly 11/227.
 * - Beat F (F331–F409): "Now we move to the next problem." (S01_NEXT_PROBLEM)
 *     Focus transfer from Row 011 to Row 012; camera pans down 74px (camY -114); 26F anticipation hold (Row 012 still UP NEXT).
 * - Beat G (F409–F455): "Question 12," (S01_Q12)
 *     Canonical activation: UP NEXT (▶) -> NOW ACTIVE (●); status badge turns active cyan/green; counter stays 11/227.
 * - Beat H (F455–F515): "next permutation," (S01_NEXT_PERMUTATION)
 *     Title hero reveal with drawn chalk underline (F455..F488).
 * - Beat I (F515–F575): "LeetCode 31," (S01_LC31)
 *     Metadata LC 31 boxed in rough chalk outline; normalized caption.
 * - Beat J (F575–F606): "medium." (S01_MEDIUM)
 *     Difficulty badge illuminates in warm amber sheen (#F59E0B). Complete row locked.
 * - Beat K (F606–F702): "We are still inside arrays and hashing." (S01_ARRAYS_HASHING)
 *     Camera smoothly zooms back out to 1.000 (camY 0); Pattern 01 section framing illuminated.
 * - Beat L (F702–F767): "Let's understand the question first." (S01_UNDERSTAND)
 *     Representation handoff: surroundings fade out; Q012 header locks into ProblemOpenerShell; center stage empty.
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
  } else if (word === "31,") {
    word = "31,";
  } else if (word === "11,") {
    word = "11,";
  } else if (word === "12,") {
    word = "12,";
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
    // Beat A (F0–F81): Gentle settle from 1.008 -> 1.000
    if (frame < 81) {
      const settle = interpolate(frame, [0, 26], [1.008, 1.0], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
        easing: EASE,
      });
      return { camScale: settle, camX: 0, camY: 0 };
    }

    // Beat B (F81–F203): Stable neutral camera keeping top bar and sidebar fully visible
    if (frame >= 81 && frame < 203) {
      return { camScale: 1.0, camX: 0, camY: 0 };
    }

    // Beats C, D, E (F203–F331): Focus in on Row 011
    if (frame >= 203 && frame < 331) {
      const scale = interpolate(frame, [203, 229], [1.0, 1.03], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
        easing: EASE,
      });
      const y = interpolate(frame, [203, 229], [0, -40], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
        easing: EASE,
      });
      return { camScale: scale, camX: 0, camY: y };
    }

    // Beat F through J (F331–F606): Pan down 74px to Row 012 and zoom slightly to 1.05
    if (frame >= 331 && frame < 606) {
      const scale = interpolate(frame, [331, 375], [1.03, 1.05], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
        easing: EASE,
      });
      const y = interpolate(frame, [331, 375], [-40, -114], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
        easing: EASE,
      });
      return { camScale: scale, camX: 0, camY: y };
    }

    // Beat K (F606–F702): Re-center and zoom out to reveal Pattern 01 section framing
    if (frame >= 606 && frame < 702) {
      const scale = interpolate(frame, [606, 655], [1.05, 1.00], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
        easing: EASE,
      });
      const y = interpolate(frame, [606, 655], [-114, 0], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
        easing: EASE,
      });
      return { camScale: scale, camX: 0, camY: y };
    }

    // Beat L (F702–F767): Stationary neutral camera for representation handoff
    return { camScale: 1.0, camX: 0, camY: 0 };
  }, [frame]);

  // Spotlight row: 11 during Beats C-E (F203–F330), 12 during Beats F-J (F331–F605)
  const spotlightRow = useMemo(() => {
    if (frame >= 203 && frame < 331) return 11;
    if (frame >= 331 && frame < 606) return 12;
    return undefined;
  }, [frame]);

  // Canonical Q12 activation at Frame 409 ("Question twelve")
  const isQ012Active = frame >= 409;
  const activeBadgeLabel = isQ012Active ? "NOW ACTIVE" : "UP NEXT";

  // Header underline draws during Beat B (F92..F142)
  const showHeaderUnderline = frame >= 92;

  // Handoff fade: surroundings fade out during Beat L (F702–F745)
  const handoffFade = interpolate(frame, [702, 745], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: EASE,
  });

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
      <Audio src={staticFile("audio/012/01-intro-roadmap.mp3")} />

      {/* ChalkDust bursts on key beats: Q011 confirm pulse (F282) and Q012 activation (F409) */}
      {frame >= 282 && frame <= 308 && (
        <ChalkDust x={1090} y={560} start={282} color={theme.good} count={12} radius={45} />
      )}
      {frame >= 409 && frame <= 438 && (
        <ChalkDust x={1090} y={634} start={409} color={theme.pivot} count={16} radius={60} />
      )}

      {/* Authoritative Permanent Master Roadmap UI Architecture */}
      <MasterRoadmapV2
        completedCount={11}
        completedGlobalNums={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]}
        activeGlobalNum={isQ012Active ? 12 : undefined}
        upNextGlobalNum={isQ012Active ? undefined : 12}
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

      {/* Beat L (F702..F767): Representation Handoff into ProblemOpenerShell */}
      {frame >= 702 && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            opacity: interpolate(frame, [702, 735], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: EASE,
            }),
          }}
        >
          <ProblemOpenerShell
            pattern="01 · ARRAYS & HASHING"
            leetcodeNumber={31}
            difficulty="MEDIUM"
            title="Next Permutation"
            startFrame={702}
            showBackground={false}
          />
        </div>
      )}

      {/* Bottom captions */}
      <Captions words={captionWords} bottom={38} fontSize={38} />
    </div>
  );
};
