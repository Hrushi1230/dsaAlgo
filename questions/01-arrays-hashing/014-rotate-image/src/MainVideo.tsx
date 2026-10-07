/**
 * MainVideo.tsx — Master Video Composition for 014 Rotate Image (LC #48)
 *
 * Full 13-Scene Sequential Composition with Channel Intro (42,809 frames @ 30fps / ~23m 46.96s):
 *   - Channel Intro: 300 frames (10.0s) Japanese one-shot cinematic intro.
 *   - Each scene preceded by a 60-frame (2.0s) Architectural Blackboard Title Card Bumper.
 *   - Transition Chalk-Tap SFX (tactile chalk click) at each Title Card.
 *   - Subtle ambient lofi background music running continuously under speech during the lesson.
 *   - Uses Remotion <Series> for zero-gap frame-accurate sequencing.
 */
import React from "react";
import { AbsoluteFill, Audio, Series, Sequence, OffthreadVideo, staticFile } from "remotion";

import { theme } from "../../../../kit/lib/theme";
import { SceneTitleCard } from "../../../../kit/components/SceneTitleCard";

// Import all 13 scenes
import { Scene01Intro } from "./Scene01Intro";
import { Scene02Understand } from "./Scene02Understand";
import { Scene03Method1Trace } from "./Scene03Method1Trace";
import { Scene04Method1Code } from "./Scene04Method1Code";
import { Scene05WhyExtraSpace } from "./Scene05WhyExtraSpace";
import { Scene06Method2Trace } from "./Scene06Method2Trace";
import { Scene07Method2Code } from "./Scene07Method2Code";
import { Scene08Method3Intuition } from "./Scene08Method3Intuition";
import { Scene09Method3Idea } from "./Scene09Method3Idea";
import { Scene10Method3Trace } from "./Scene10Method3Trace";
import { Scene11Method3Code } from "./Scene11Method3Code";
import { Scene12Complexity } from "./Scene12Complexity";
import { Scene13Recap } from "./Scene13Recap";

export const INTRO_FRAMES = 300; // 10.0 seconds @ 30fps
export const TITLE_CARD_FRAMES = 60; // 2.0 seconds @ 30fps

export const SCENE_DURATIONS = {
  scene01: 885,
  scene02: 4333,
  scene03: 4466,
  scene04: 1937,
  scene05: 2522,
  scene06: 7386,
  scene07: 4700,
  scene08: 1662,
  scene09: 2325,
  scene10: 4465,
  scene11: 3026,
  scene12: 1219,
  scene13: 2803,
} as const;

export const TOTAL_SCENE_FRAMES = Object.values(SCENE_DURATIONS).reduce(
  (sum, d) => sum + d,
  0
); // 41,729 frames

export const TOTAL_MASTER_FRAMES =
  INTRO_FRAMES + 13 * TITLE_CARD_FRAMES + TOTAL_SCENE_FRAMES; // 42,809 frames (~23m 46.96s)

export const MainVideo: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: theme.boardBg }}>
      {/* Global Subtle Ambient Lofi Background Music (starts after channel intro) */}
      <Sequence from={INTRO_FRAMES} name="Lesson Ambient BGM">
        <Audio
          src={staticFile("audio/bgm/lofi-chalkboard-ambient.mp3")}
          volume={0.04}
          loop
        />
      </Sequence>

      {/* Frame-Accurate Sequential Composition with Channel Intro & Transition Cards */}
      <Series>
        {/* ─── CHANNEL INTRO (10s Japanese One-Shot) ─── */}
        <Series.Sequence durationInFrames={INTRO_FRAMES} name="Channel Intro (10s)">
          <OffthreadVideo src={staticFile("intro/code-with-animation-intro-10s.mp4")} />
        </Series.Sequence>

        {/* ─── SCENE 01: INTRO & ROADMAP ─── */}
        <Series.Sequence durationInFrames={TITLE_CARD_FRAMES} name="Title Card 01">
          <SceneTitleCard
            sceneNumber="SCENE 01"
            title="ROADMAP & PROBLEM ACTIVATION"
            subtext="Rotate Image · 227-Problem Roadmap & In-Place Matrix Transformations"
            category="ACT 1 · OVERVIEW"
            pattern="ARRAYS & HASHING"
            leetcodeNumber={48}
            accentColor={theme.pivot}
            sfxSrc="audio/sfx/chalk-tap.mp3"
          />
        </Series.Sequence>
        <Series.Sequence durationInFrames={SCENE_DURATIONS.scene01} name="Scene 01 · Intro">
          <Scene01Intro />
        </Series.Sequence>

        {/* ─── SCENE 02: UNDERSTAND THE PROBLEM ─── */}
        <Series.Sequence durationInFrames={TITLE_CARD_FRAMES} name="Title Card 02">
          <SceneTitleCard
            sceneNumber="SCENE 02"
            title="UNDERSTAND THE PROBLEM"
            subtext="90° Clockwise Rotation, Boundary Coordinates & The In-Place Invariant"
            category="ACT 2 · RULES & SPEC"
            pattern="ARRAYS & HASHING"
            leetcodeNumber={48}
            accentColor={theme.cyan}
            sfxSrc="audio/sfx/chalk-tap.mp3"
          />
        </Series.Sequence>
        <Series.Sequence durationInFrames={SCENE_DURATIONS.scene02} name="Scene 02 · Understand">
          <Scene02Understand />
        </Series.Sequence>

        {/* ─── SCENE 03: METHOD 1 TRACE ─── */}
        <Series.Sequence durationInFrames={TITLE_CARD_FRAMES} name="Title Card 03">
          <SceneTitleCard
            sceneNumber="SCENE 03"
            title="METHOD 1: SIMULATION TRACE"
            subtext="Brute Force Direct Mapping with an Extra Destination Grid"
            category="ACT 3 · NAIVE APPROACH"
            pattern="ARRAYS & HASHING"
            leetcodeNumber={48}
            accentColor={theme.bad}
            sfxSrc="audio/sfx/chalk-tap.mp3"
          />
        </Series.Sequence>
        <Series.Sequence durationInFrames={SCENE_DURATIONS.scene03} name="Scene 03 · Method 1 Trace">
          <Scene03Method1Trace />
        </Series.Sequence>

        {/* ─── SCENE 04: METHOD 1 CODE ─── */}
        <Series.Sequence durationInFrames={TITLE_CARD_FRAMES} name="Title Card 04">
          <SceneTitleCard
            sceneNumber="SCENE 04"
            title="METHOD 1: PYTHON IMPLEMENTATION"
            subtext="Direct Coordinate Projection: result[c][n - 1 - r] = matrix[r][c]"
            category="ACT 3 · NAIVE CODE"
            pattern="ARRAYS & HASHING"
            leetcodeNumber={48}
            accentColor={theme.bad}
            sfxSrc="audio/sfx/chalk-tap.mp3"
          />
        </Series.Sequence>
        <Series.Sequence durationInFrames={SCENE_DURATIONS.scene04} name="Scene 04 · Method 1 Code">
          <Scene04Method1Code />
        </Series.Sequence>

        {/* ─── SCENE 05: WHY METHOD 1 FAILS ─── */}
        <Series.Sequence durationInFrames={TITLE_CARD_FRAMES} name="Title Card 05">
          <SceneTitleCard
            sceneNumber="SCENE 05"
            title="WHY EXTRA SPACE FAILS"
            subtext="The O(N²) Memory Rejection & The Immediate Overwrite Dilemma"
            category="ACT 4 · BOTTLENECK"
            pattern="ARRAYS & HASHING"
            leetcodeNumber={48}
            accentColor={theme.bad}
            sfxSrc="audio/sfx/chalk-tap.mp3"
          />
        </Series.Sequence>
        <Series.Sequence durationInFrames={SCENE_DURATIONS.scene05} name="Scene 05 · Why Extra Space">
          <Scene05WhyExtraSpace />
        </Series.Sequence>

        {/* ─── SCENE 06: METHOD 2 TRACE ─── */}
        <Series.Sequence durationInFrames={TITLE_CARD_FRAMES} name="Title Card 06">
          <SceneTitleCard
            sceneNumber="SCENE 06"
            title="METHOD 2: 4-WAY LAYER CYCLES TRACE"
            subtext="Concentric Ring Decomposition & 4-Element Cyclical Rotations"
            category="ACT 5 · IN-PLACE CYCLES"
            pattern="ARRAYS & HASHING"
            leetcodeNumber={48}
            accentColor={theme.pivot}
            sfxSrc="audio/sfx/chalk-tap.mp3"
          />
        </Series.Sequence>
        <Series.Sequence durationInFrames={SCENE_DURATIONS.scene06} name="Scene 06 · Method 2 Trace">
          <Scene06Method2Trace />
        </Series.Sequence>

        {/* ─── SCENE 07: METHOD 2 CODE ─── */}
        <Series.Sequence durationInFrames={TITLE_CARD_FRAMES} name="Title Card 07">
          <SceneTitleCard
            sceneNumber="SCENE 07"
            title="METHOD 2: PYTHON IMPLEMENTATION"
            subtext="Layer-by-Layer Boundary Rotation with 1 Temporary Variable"
            category="ACT 5 · CYCLES CODE"
            pattern="ARRAYS & HASHING"
            leetcodeNumber={48}
            accentColor={theme.cyan}
            sfxSrc="audio/sfx/chalk-tap.mp3"
          />
        </Series.Sequence>
        <Series.Sequence durationInFrames={SCENE_DURATIONS.scene07} name="Scene 07 · Method 2 Code">
          <Scene07Method2Code />
        </Series.Sequence>

        {/* ─── SCENE 08: DERIVE METHOD 3 INTUITION ─── */}
        <Series.Sequence durationInFrames={TITLE_CARD_FRAMES} name="Title Card 08">
          <SceneTitleCard
            sceneNumber="SCENE 08"
            title="ROTATION AS SYMMETRY REFLECTION"
            subtext="Decomposing 2D Rotations into Simple Matrix Reflections"
            category="ACT 6 · GEOMETRIC INTUITION"
            pattern="ARRAYS & HASHING"
            leetcodeNumber={48}
            accentColor={theme.good}
            sfxSrc="audio/sfx/chalk-tap.mp3"
          />
        </Series.Sequence>
        <Series.Sequence durationInFrames={SCENE_DURATIONS.scene08} name="Scene 08 · Method 3 Intuition">
          <Scene08Method3Intuition />
        </Series.Sequence>

        {/* ─── SCENE 09: METHOD 3 IDEA ─── */}
        <Series.Sequence durationInFrames={TITLE_CARD_FRAMES} name="Title Card 09">
          <SceneTitleCard
            sceneNumber="SCENE 09"
            title="METHOD 3: TRANSPOSE + REVERSE IDEA"
            subtext="The Two-Step Algebraic Breakthrough: Main Diagonal Reflection & Horizontal Flip"
            category="ACT 7 · ALGEBRAIC DERIVATION"
            pattern="ARRAYS & HASHING"
            leetcodeNumber={48}
            accentColor={theme.good}
            sfxSrc="audio/sfx/chalk-tap.mp3"
          />
        </Series.Sequence>
        <Series.Sequence durationInFrames={SCENE_DURATIONS.scene09} name="Scene 09 · Method 3 Idea">
          <Scene09Method3Idea />
        </Series.Sequence>

        {/* ─── SCENE 10: METHOD 3 FULL TRACE ─── */}
        <Series.Sequence durationInFrames={TITLE_CARD_FRAMES} name="Title Card 10">
          <SceneTitleCard
            sceneNumber="SCENE 10"
            title="OPTIMAL STEP-BY-STEP TRACE"
            subtext="Full Dry Run on 5×5 Master Matrix: 10 Upper-Triangle Swaps & Row Reversals"
            category="ACT 8 · COMPLETE DRY RUN"
            pattern="ARRAYS & HASHING"
            leetcodeNumber={48}
            accentColor={theme.pivot}
            sfxSrc="audio/sfx/chalk-tap.mp3"
          />
        </Series.Sequence>
        <Series.Sequence durationInFrames={SCENE_DURATIONS.scene10} name="Scene 10 · Method 3 Trace">
          <Scene10Method3Trace />
        </Series.Sequence>

        {/* ─── SCENE 11: METHOD 3 CODE ─── */}
        <Series.Sequence durationInFrames={TITLE_CARD_FRAMES} name="Title Card 11">
          <SceneTitleCard
            sceneNumber="SCENE 11"
            title="OPTIMAL PYTHON IMPLEMENTATION"
            subtext="Clean 6-Line In-Place Code & The Critical r < c Loop Boundary Invariant"
            category="ACT 9 · OPTIMAL CODE"
            pattern="ARRAYS & HASHING"
            leetcodeNumber={48}
            accentColor={theme.cyan}
            sfxSrc="audio/sfx/chalk-tap.mp3"
          />
        </Series.Sequence>
        <Series.Sequence durationInFrames={SCENE_DURATIONS.scene11} name="Scene 11 · Method 3 Code">
          <Scene11Method3Code />
        </Series.Sequence>

        {/* ─── SCENE 12: COMPLEXITY COMPARISON ─── */}
        <Series.Sequence durationInFrames={TITLE_CARD_FRAMES} name="Title Card 12">
          <SceneTitleCard
            sceneNumber="SCENE 12"
            title="ALGORITHMIC COMPLEXITY COMPARISON"
            subtext="Evaluating Time, Space & Interview Robustness across All 3 Approaches"
            category="ACT 10 · COMPLEXITY"
            pattern="ARRAYS & HASHING"
            leetcodeNumber={48}
            accentColor={theme.good}
            sfxSrc="audio/sfx/chalk-tap.mp3"
          />
        </Series.Sequence>
        <Series.Sequence durationInFrames={SCENE_DURATIONS.scene12} name="Scene 12 · Complexity">
          <Scene12Complexity />
        </Series.Sequence>

        {/* ─── SCENE 13: RECAP & ROADMAP HANDOFF ─── */}
        <Series.Sequence durationInFrames={TITLE_CARD_FRAMES} name="Title Card 13">
          <SceneTitleCard
            sceneNumber="SCENE 13"
            title="RECAP, PATTERN MASTERY & ROADMAP"
            subtext="Generalizing Symmetries (90°, 180°, 270°) & Advancing to Question 015"
            category="ACT 11 · CONCLUSION"
            pattern="ARRAYS & HASHING"
            leetcodeNumber={48}
            accentColor={theme.pivot}
            sfxSrc="audio/sfx/chalk-tap.mp3"
          />
        </Series.Sequence>
        <Series.Sequence durationInFrames={SCENE_DURATIONS.scene13} name="Scene 13 · Recap">
          <Scene13Recap />
        </Series.Sequence>
      </Series>
    </AbsoluteFill>
  );
};
