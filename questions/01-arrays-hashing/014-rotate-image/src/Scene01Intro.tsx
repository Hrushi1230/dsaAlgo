/**
 * Scene01Intro.tsx — Scene 01 · Course Roadmap Resume & Q14 Activation
 * Rotate Image (LeetCode 48) · Pattern 01 — Arrays & Hashing
 *
 * Implements the continuous chalkboard Master Roadmap UI & Scene 02 Handoff:
 * - Master Roadmap UI Architecture resuming from Q13 Scene 13 ending state
 * - Total Duration: 885 frames @ 30fps (29.500s) strictly from sync/01-intro-roadmap.json
 * - Anchors mapped from sync/01-intro-roadmap.anchors.json
 *
 * Timeline:
 * - Beat 01 (F0–F88): "Welcome back to Code with Animation." (S01_WELCOME)
 *     Resumes exact Q13 ending state: 13 / 227 COMPLETE, Pattern 01 ACTIVE, Row 013 COMPLETE, Row 014 UP NEXT, rail at 014.
 * - Beat 02 (F89–F235): "We are continuing our arrays and hashing roadmap." (S01_PATTERN)
 *     Chalk underline draws under top-center DSA PATTERN ROADMAP header (F89..F140).
 * - Beat 03 (F236–F274): "Question 13," (S01_Q13)
 *     Row 013 spotlight focus; camera zooms in slightly (camScale 1.03, camY -74).
 * - Beat 04 (F275–F315): "set matrix zeros" (S01_SET_MATRIX_ZEROES)
 *     Row 013 title and LC 73 metadata highlighted in crisp chalk text.
 * - Beat 05 (F316–F380): "is complete." (S01_COMPLETE)
 *     Checkmark (✓) redraw confirmation pulse. Global counter stays strictly 13/227.
 * - Beat 06 (F381–F534): "Our progress is now 13 out of 227." (S01_PROGRESS)
 *     Camera pans up to 13/227 pill (camScale 1.02, camY -110). Zero counter roll.
 * - Beat 07 (F535–F573): "And next we have" (S01_NEXT)
 *     Focus transfer from Row 013 to Row 014; camera pans down to Row 014 (camScale 1.03, camY -114); Row 014 still UP NEXT.
 * - Beat 08 (F574–F619): "question 14," (S01_Q14)
 *     Canonical activation: UP NEXT (▶) -> NOW ACTIVE (●); status badge turns active cyan/green; counter stays 13/227.
 * - Beat 09 (F620–F665): "rotate image," (S01_TITLE)
 *     Title hero reveal with drawn cyan chalk underline.
 * - Beat 10 (F666–F729): "lead code 48," (S01_LC)
 *     Metadata LeetCode 48 boxed in rough chalk pill outline.
 * - Beat 11 (F730–F743): "medium." (S01_MEDIUM)
 *     Difficulty badge illuminates in warm amber sheen (#F59E0B). Complete row locked.
 * - Beat 12 (F744–F818): "This problem is about" (S01_ABOUT)
 *     Surrounding roadmap chrome begins gentle fade (handoffFade: 0.0 -> 0.4); camera eases back to 1.000.
 * - Beat 13 (F819–F885): "rotating a square matrix." (S01_SQUARE)
 *     Representation handoff: surroundings fade out; Q014 header docks into ProblemOpenerShell; abstract 90° square hint.
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
  } else if (word === "48,") {
    word = "48,";
  } else if (word.toLowerCase() === "zeros") {
    word = "Zeroes";
  } else if (word.toLowerCase() === "zeros,") {
    word = "Zeroes,";
  } else if (word === "13,") {
    word = "13,";
  } else if (word === "14,") {
    word = "14,";
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
    // Beat 01 (F0–F88): Gentle settle from 1.008 -> 1.000
    if (frame < 89) {
      const settle = interpolate(frame, [0, 24], [1.008, 1.0], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
        easing: EASE,
      });
      return { camScale: settle, camX: 0, camY: 0 };
    }

    // Beat 02 (F89–F235): Stable neutral camera keeping top bar and sidebar fully visible
    if (frame >= 89 && frame < 236) {
      return { camScale: 1.0, camX: 0, camY: 0 };
    }

    // Beats 03, 04, 05 (F236–F380): Focus in on Row 013
    if (frame >= 236 && frame < 381) {
      const scale = interpolate(frame, [236, 260], [1.0, 1.03], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
        easing: EASE,
      });
      const y = interpolate(frame, [236, 260], [0, -74], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
        easing: EASE,
      });
      return { camScale: scale, camX: 0, camY: y };
    }

    // Beat 06 (F381–F534): Pan up to frame the 13/227 progress pill
    if (frame >= 381 && frame < 535) {
      const scale = interpolate(frame, [381, 415], [1.03, 1.02], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
        easing: EASE,
      });
      const y = interpolate(frame, [381, 415], [-74, -110], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
        easing: EASE,
      });
      return { camScale: scale, camX: 0, camY: y };
    }

    // Beats 07 through 11 (F535–F743): Pan down to Row 014 and zoom slightly to 1.03
    if (frame >= 535 && frame < 744) {
      const scale = interpolate(frame, [535, 565], [1.02, 1.03], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
        easing: EASE,
      });
      const y = interpolate(frame, [535, 565], [-110, -114], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
        easing: EASE,
      });
      return { camScale: scale, camX: 0, camY: y };
    }

    // Beat 12, 13 (F744–F885): Re-center and ease to neutral 1.000 for representation handoff
    if (frame >= 744) {
      const scale = interpolate(frame, [744, 790], [1.03, 1.00], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
        easing: EASE,
      });
      const y = interpolate(frame, [744, 790], [-114, 0], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
        easing: EASE,
      });
      return { camScale: scale, camX: 0, camY: y };
    }

    return { camScale: 1.0, camX: 0, camY: 0 };
  }, [frame]);

  // Spotlight row: 13 during Beats 03-05 (F236–F380), 14 during Beats 07-11 (F535–F743)
  const spotlightRow = useMemo(() => {
    if (frame >= 236 && frame < 381) return 13;
    if (frame >= 535 && frame < 744) return 14;
    return undefined;
  }, [frame]);

  // Canonical Q14 activation at Frame 574 ("question 14,")
  const isQ014Active = frame >= 574;
  const activeBadgeLabel = isQ014Active ? "NOW ACTIVE" : "UP NEXT";

  // Header underline draws during Beat 02 (F89..F140)
  const showHeaderUnderline = frame >= 89;

  // Handoff fade: surroundings fade out progressively across Beats 12 and 13
  const handoffFade = useMemo(() => {
    if (frame < 744) return 0;
    if (frame < 819) {
      return interpolate(frame, [744, 800], [0, 0.4], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
        easing: EASE,
      });
    }
    return interpolate(frame, [819, 860], [0.4, 1.0], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
      easing: EASE,
    });
  }, [frame]);

  // Abstract square rotation angle in Beat 13 (F819..F885)
  const squareRotation = useMemo(() => {
    if (frame < 819) return 0;
    return interpolate(frame, [825, 870], [0, 90], {
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
      <Audio src={staticFile("audio/014/01-intro-roadmap.mp3")} />

      {/* ChalkDust bursts on key beats: Q013 confirm pulse (F316) and Q014 activation (F574) */}
      {frame >= 316 && frame <= 346 && (
        <ChalkDust x={1090} y={654} start={316} color={theme.good} count={12} radius={45} />
      )}
      {frame >= 574 && frame <= 604 && (
        <ChalkDust x={1090} y={698} start={574} color={theme.pivot} count={16} radius={60} />
      )}

      {/* Authoritative Permanent Master Roadmap UI Architecture */}
      <MasterRoadmapV2
        completedCount={13}
        completedGlobalNums={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]}
        activeGlobalNum={isQ014Active ? 14 : 0}
        upNextGlobalNum={isQ014Active ? undefined : 14}
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

      {/* Beat 13 (F819..F885): Representation Handoff into ProblemOpenerShell + Abstract 90° hint */}
      {frame >= 819 && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            opacity: interpolate(frame, [819, 850], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: EASE,
            }),
          }}
        >
          <ProblemOpenerShell
            pattern="01 · ARRAYS & HASHING"
            leetcodeNumber={48}
            difficulty="MEDIUM"
            title="Rotate Image"
            startFrame={819}
            showBackground={false}
          />

          {/* Abstract Square with 90° rotational hint in center stage */}
          <div
            style={{
              position: "absolute",
              left: 960 - 110,
              top: 500 - 110,
              width: 220,
              height: 220,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transform: `rotate(${squareRotation}deg)`,
              opacity: interpolate(frame, [822, 845], [0, 0.45], {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
                easing: EASE,
              }),
            }}
          >
            <RoughBox
              width={220}
              height={220}
              stroke={theme.cyan}
              strokeWidth={3}
              fill="none"
              seed={48}
            />
          </div>

          {/* Subtle clockwise curved arc indication */}
          <svg
            style={{
              position: "absolute",
              left: 960 - 150,
              top: 500 - 150,
              width: 300,
              height: 300,
              pointerEvents: "none",
              opacity: interpolate(frame, [830, 855], [0, 0.5], {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
                easing: EASE,
              }),
            }}
          >
            <path
              d="M 150 20 A 130 130 0 0 1 280 150"
              fill="none"
              stroke={theme.pivot}
              strokeWidth={3}
              strokeDasharray="6 6"
            />
            {/* Arrowhead */}
            <polygon
              points="280,150 270,135 290,140"
              fill={theme.pivot}
            />
          </svg>
        </div>
      )}

      {/* Bottom captions */}
      <Captions words={captionWords} bottom={38} fontSize={38} />
    </div>
  );
};
