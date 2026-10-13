/**
 * MainVideo.tsx — Master Video Composition for 016 Subarray Sum Equals K (LC #560)
 *
 * Full 9-Scene Sequential Master Video with Channel Intro (31,142 frames @ 30fps / ~17m 18.067s):
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

// Import all 9 scenes
import { Scene01Intro } from "./Scene01Intro";
import { Scene02Understand } from "./Scene02Understand";
import { Scene03Method1Trace } from "./Scene03Method1Trace";
import { Scene04Method1Code } from "./Scene04Method1Code";
import { Scene05OptimalIdea } from "./Scene05OptimalIdea";
import { Scene06Method2Trace } from "./Scene06Method2Trace";
import { Scene07Method2Code } from "./Scene07Method2Code";
import { Scene08CompareMistakesEdgeCases } from "./Scene08CompareMistakesEdgeCases";
import { Scene09Recap } from "./Scene09Recap";

export const INTRO_FRAMES = 300; // 10.0 seconds @ 30fps
export const TITLE_CARD_FRAMES = 60; // 2.0 seconds @ 30fps

export const SCENE_DURATIONS = {
  scene01: 1316,
  scene02: 3423,
  scene03: 7627,
  scene04: 2276,
  scene05: 2305,
  scene06: 6125,
  scene07: 3094,
  scene08: 1816,
  scene09: 2320,
} as const;

export const TOTAL_SCENE_FRAMES = Object.values(SCENE_DURATIONS).reduce(
  (sum, d) => sum + d,
  0
); // 30,302 frames

export const TOTAL_MASTER_FRAMES =
  INTRO_FRAMES + 9 * TITLE_CARD_FRAMES + TOTAL_SCENE_FRAMES; // 31,142 frames (~17m 18.067s)

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
            subtext="Subarray Sum Equals K · 227-Problem Roadmap & Range Sum Search"
            category="ACT 1 · OVERVIEW"
            pattern="ARRAYS & HASHING"
            leetcodeNumber={560}
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
            title="UNDERSTAND THE PROBLEM & METHOD 1 IDEA"
            subtext="Contiguous Subarray Definition, Negative Values & Sliding Window Failure"
            category="ACT 2 · RULES & SPEC"
            pattern="ARRAYS & HASHING"
            leetcodeNumber={560}
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
            title="METHOD 1: RUNNING SUM ENUMERATION TRACE"
            subtext="Complete Deterministic Dry Run Across All 10 Contiguous Subarrays"
            category="ACT 3 · NAIVE APPROACH"
            pattern="ARRAYS & HASHING"
            leetcodeNumber={560}
            accentColor={theme.bad}
            sfxSrc="audio/sfx/chalk-tap.mp3"
          />
        </Series.Sequence>
        <Series.Sequence durationInFrames={SCENE_DURATIONS.scene03} name="Scene 03 · Method 1 Trace">
          <Scene03Method1Trace />
        </Series.Sequence>

        {/* ─── SCENE 04: METHOD 1 CODE & COMPLEXITY ─── */}
        <Series.Sequence durationInFrames={TITLE_CARD_FRAMES} name="Title Card 04">
          <SceneTitleCard
            sceneNumber="SCENE 04"
            title="METHOD 1: PYTHON IMPLEMENTATION & COMPLEXITY"
            subtext="Nested Loop Implementation & O(N²) Quadratic Operations Derivation"
            category="ACT 3 · NAIVE CODE"
            pattern="ARRAYS & HASHING"
            leetcodeNumber={560}
            accentColor={theme.bad}
            sfxSrc="audio/sfx/chalk-tap.mp3"
          />
        </Series.Sequence>
        <Series.Sequence durationInFrames={SCENE_DURATIONS.scene04} name="Scene 04 · Method 1 Code">
          <Scene04Method1Code />
        </Series.Sequence>

        {/* ─── SCENE 05: OPTIMAL INTUITION ─── */}
        <Series.Sequence durationInFrames={TITLE_CARD_FRAMES} name="Title Card 05">
          <SceneTitleCard
            sceneNumber="SCENE 05"
            title="OPTIMAL INTUITION: PREFIX DIFFERENCE INVARIANT"
            subtext="Connecting Range Sum to Past Cumulative State: Needed = Current - k"
            category="ACT 4 · MATHEMATICAL BRIDGE"
            pattern="ARRAYS & HASHING"
            leetcodeNumber={560}
            accentColor={theme.pivot}
            sfxSrc="audio/sfx/chalk-tap.mp3"
          />
        </Series.Sequence>
        <Series.Sequence durationInFrames={SCENE_DURATIONS.scene05} name="Scene 05 · Optimal Idea">
          <Scene05OptimalIdea />
        </Series.Sequence>

        {/* ─── SCENE 06: METHOD 2 OPTIMAL TRACE ─── */}
        <Series.Sequence durationInFrames={TITLE_CARD_FRAMES} name="Title Card 06">
          <SceneTitleCard
            sceneNumber="SCENE 06"
            title="METHOD 2: FULL TRACE WITH FREQUENCY HASH MAP"
            subtext="Initial State Base Case {0: 1}, Zero Accumulation & Real-Time Lookups"
            category="ACT 5 · OPTIMAL APPROACH"
            pattern="ARRAYS & HASHING"
            leetcodeNumber={560}
            accentColor={theme.good}
            sfxSrc="audio/sfx/chalk-tap.mp3"
          />
        </Series.Sequence>
        <Series.Sequence durationInFrames={SCENE_DURATIONS.scene06} name="Scene 06 · Method 2 Trace">
          <Scene06Method2Trace />
        </Series.Sequence>

        {/* ─── SCENE 07: METHOD 2 CODE & COMPLEXITY ─── */}
        <Series.Sequence durationInFrames={TITLE_CARD_FRAMES} name="Title Card 07">
          <SceneTitleCard
            sceneNumber="SCENE 07"
            title="METHOD 2: PYTHON IMPLEMENTATION & COMPLEXITY"
            subtext="Production Single-Pass Code & O(N) Linear Time / Space Proof"
            category="ACT 5 · OPTIMAL CODE"
            pattern="ARRAYS & HASHING"
            leetcodeNumber={560}
            accentColor={theme.good}
            sfxSrc="audio/sfx/chalk-tap.mp3"
          />
        </Series.Sequence>
        <Series.Sequence durationInFrames={SCENE_DURATIONS.scene07} name="Scene 07 · Method 2 Code">
          <Scene07Method2Code />
        </Series.Sequence>

        {/* ─── SCENE 08: COMPARE, MISTAKES & EDGE CASES ─── */}
        <Series.Sequence durationInFrames={TITLE_CARD_FRAMES} name="Title Card 08">
          <SceneTitleCard
            sceneNumber="SCENE 08"
            title="COMPARE, COMMON TRAPS & EDGE CASES"
            subtext="Method Trade-offs, Ordering Traps, Zero-Sum Duplicates & Negatives"
            category="ACT 6 · PITFALL AUDIT"
            pattern="ARRAYS & HASHING"
            leetcodeNumber={560}
            accentColor={theme.warn}
            sfxSrc="audio/sfx/chalk-tap.mp3"
          />
        </Series.Sequence>
        <Series.Sequence durationInFrames={SCENE_DURATIONS.scene08} name="Scene 08 · Compare & Mistakes">
          <Scene08CompareMistakesEdgeCases />
        </Series.Sequence>

        {/* ─── SCENE 09: RECAP, PATTERN & ROADMAP ─── */}
        <Series.Sequence durationInFrames={TITLE_CARD_FRAMES} name="Title Card 09">
          <SceneTitleCard
            sceneNumber="SCENE 09"
            title="COURSE RECAP, TRANSFERABLE PATTERN & ROADMAP"
            subtext="Curriculum Advancement (15 -> 16 / 227) & Handoff to Q17 Encode and Decode Strings"
            category="ACT 7 · RECAP & ADVANCEMENT"
            pattern="ARRAYS & HASHING"
            leetcodeNumber={560}
            accentColor={theme.pivot}
            sfxSrc="audio/sfx/chalk-tap.mp3"
          />
        </Series.Sequence>
        <Series.Sequence durationInFrames={SCENE_DURATIONS.scene09} name="Scene 09 · Recap">
          <Scene09Recap />
        </Series.Sequence>
      </Series>
    </AbsoluteFill>
  );
};
