/**
 * MainVideo.tsx — Master Video Composition for 015 Spiral Matrix (LC #54)
 *
 * Full 10-Scene Sequential Composition with Channel Intro (28,028 frames @ 30fps / ~15m 34.27s):
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

// Import all 10 scenes
import { Scene01Intro } from "./Scene01Intro";
import { Scene02Understand } from "./Scene02Understand";
import { Scene03Method1Trace } from "./Scene03Method1Trace";
import { Scene04Method1Code } from "./Scene04Method1Code";
import { Scene05WhyVisitedUnnecessary } from "./Scene05WhyVisitedUnnecessary";
import { Scene06Method2Idea } from "./Scene06Method2Idea";
import { Scene07Method2Trace } from "./Scene07Method2Trace";
import { Scene08Method2Code } from "./Scene08Method2Code";
import { Scene09ComplexityMistakes } from "./Scene09ComplexityMistakes";
import { Scene10RecapRoadmap } from "./Scene10RecapRoadmap";

export const INTRO_FRAMES = 300; // 10.0 seconds @ 30fps
export const TITLE_CARD_FRAMES = 60; // 2.0 seconds @ 30fps

export const SCENE_DURATIONS = {
  scene01: 917,
  scene02: 2026,
  scene03: 5124,
  scene04: 3094,
  scene05: 1362,
  scene06: 1937,
  scene07: 5156,
  scene08: 3655,
  scene09: 3175,
  scene10: 682,
} as const;

export const TOTAL_SCENE_FRAMES = Object.values(SCENE_DURATIONS).reduce(
  (sum, d) => sum + d,
  0
); // 27,128 frames

export const TOTAL_MASTER_FRAMES =
  INTRO_FRAMES + 10 * TITLE_CARD_FRAMES + TOTAL_SCENE_FRAMES; // 28,028 frames (~15m 34.27s)

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
            subtext="Spiral Matrix · 227-Problem Master Roadmap & 2D Coordinate Navigation"
            category="ACT 1 · OVERVIEW"
            pattern="ARRAYS & HASHING"
            leetcodeNumber={54}
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
            subtext="Outer Clockwise Boundary Traversal & The Invariant Order"
            category="ACT 2 · RULES & SPEC"
            pattern="ARRAYS & HASHING"
            leetcodeNumber={54}
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
            title="METHOD 1: DIRECTION SIMULATION TRACE"
            subtext="Simulation with dx/dy Direction Vectors & Explicit Visited Matrix"
            category="ACT 3 · SIMULATION TRACE"
            pattern="ARRAYS & HASHING"
            leetcodeNumber={54}
            accentColor={theme.warn}
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
            subtext="Direction Vector Array & Boundary Collision Logic in Python"
            category="ACT 4 · CODE WALKTHROUGH"
            pattern="ARRAYS & HASHING"
            leetcodeNumber={54}
            accentColor={theme.warn}
            sfxSrc="audio/sfx/chalk-tap.mp3"
          />
        </Series.Sequence>
        <Series.Sequence durationInFrames={SCENE_DURATIONS.scene04} name="Scene 04 · Method 1 Code">
          <Scene04Method1Code />
        </Series.Sequence>

        {/* ─── SCENE 05: WHY VISITED MEMORY IS UNNECESSARY ─── */}
        <Series.Sequence durationInFrames={TITLE_CARD_FRAMES} name="Title Card 05">
          <SceneTitleCard
            sceneNumber="SCENE 05"
            title="WHY VISITED MEMORY IS UNNECESSARY"
            subtext="The O(m × n) Space Overhead & Rectangular Boundary Preservation"
            category="ACT 5 · OPTIMIZATION INSIGHT"
            pattern="ARRAYS & HASHING"
            leetcodeNumber={54}
            accentColor={theme.gold}
            sfxSrc="audio/sfx/chalk-tap.mp3"
          />
        </Series.Sequence>
        <Series.Sequence durationInFrames={SCENE_DURATIONS.scene05} name="Scene 05 · Why Visited Unnecessary">
          <Scene05WhyVisitedUnnecessary />
        </Series.Sequence>

        {/* ─── SCENE 06: METHOD 2 IDEA ─── */}
        <Series.Sequence durationInFrames={TITLE_CARD_FRAMES} name="Title Card 06">
          <SceneTitleCard
            sceneNumber="SCENE 06"
            title="METHOD 2: SHRINKING BOUNDARY INTUITION"
            subtext="4 Moving Pointers: Top, Bottom, Left, Right & The Core Invariant"
            category="ACT 6 · OPTIMAL INTUITION"
            pattern="ARRAYS & HASHING"
            leetcodeNumber={54}
            accentColor={theme.emerald}
            sfxSrc="audio/sfx/chalk-tap.mp3"
          />
        </Series.Sequence>
        <Series.Sequence durationInFrames={SCENE_DURATIONS.scene06} name="Scene 06 · Method 2 Idea">
          <Scene06Method2Idea />
        </Series.Sequence>

        {/* ─── SCENE 07: METHOD 2 TRACE ─── */}
        <Series.Sequence durationInFrames={TITLE_CARD_FRAMES} name="Title Card 07">
          <SceneTitleCard
            sceneNumber="SCENE 07"
            title="METHOD 2: FULL BOUNDARY SIMULATION TRACE"
            subtext="Complete Step-by-Step 30-Element Trace with Zero Extra Memory"
            category="ACT 7 · OPTIMAL TRACE"
            pattern="ARRAYS & HASHING"
            leetcodeNumber={54}
            accentColor={theme.emerald}
            sfxSrc="audio/sfx/chalk-tap.mp3"
          />
        </Series.Sequence>
        <Series.Sequence durationInFrames={SCENE_DURATIONS.scene07} name="Scene 07 · Method 2 Trace">
          <Scene07Method2Trace />
        </Series.Sequence>

        {/* ─── SCENE 08: METHOD 2 CODE ─── */}
        <Series.Sequence durationInFrames={TITLE_CARD_FRAMES} name="Title Card 08">
          <SceneTitleCard
            sceneNumber="SCENE 08"
            title="METHOD 2: OPTIMAL PYTHON CODE"
            subtext="Four Clean Loops, Intermediate Break Guards & O(1) Memory Invariant"
            category="ACT 8 · OPTIMAL CODE"
            pattern="ARRAYS & HASHING"
            leetcodeNumber={54}
            accentColor={theme.emerald}
            sfxSrc="audio/sfx/chalk-tap.mp3"
          />
        </Series.Sequence>
        <Series.Sequence durationInFrames={SCENE_DURATIONS.scene08} name="Scene 08 · Method 2 Code">
          <Scene08Method2Code />
        </Series.Sequence>

        {/* ─── SCENE 09: COMPLEXITY, PITFALLS & EDGE CASES ─── */}
        <Series.Sequence durationInFrames={TITLE_CARD_FRAMES} name="Title Card 09">
          <SceneTitleCard
            sceneNumber="SCENE 09"
            title="COMPLEXITY, PITFALLS & EDGE CASES"
            subtext="Complexity Comparison, 5 Implementation Traps & 5 Verified Edge Cases"
            category="ACT 9 · QA & PITFALLS"
            pattern="ARRAYS & HASHING"
            leetcodeNumber={54}
            accentColor={theme.cyan}
            sfxSrc="audio/sfx/chalk-tap.mp3"
          />
        </Series.Sequence>
        <Series.Sequence durationInFrames={SCENE_DURATIONS.scene09} name="Scene 09 · Complexity & Mistakes">
          <Scene09ComplexityMistakes />
        </Series.Sequence>

        {/* ─── SCENE 10: RECAP & ROADMAP UPDATE ─── */}
        <Series.Sequence durationInFrames={TITLE_CARD_FRAMES} name="Title Card 10">
          <SceneTitleCard
            sceneNumber="SCENE 10"
            title="RECAP & MASTER ROADMAP UPDATE"
            subtext="Problem 15 Complete · 15 / 227 Master Progress & Subarray Sum Equals K"
            category="ACT 10 · ROADMAP HANDOFF"
            pattern="ARRAYS & HASHING"
            leetcodeNumber={54}
            accentColor={theme.gold}
            sfxSrc="audio/sfx/chalk-tap.mp3"
          />
        </Series.Sequence>
        <Series.Sequence durationInFrames={SCENE_DURATIONS.scene10} name="Scene 10 · Recap & Roadmap">
          <Scene10RecapRoadmap />
        </Series.Sequence>
      </Series>
    </AbsoluteFill>
  );
};
