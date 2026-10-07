/**
 * MainVideo.tsx — Master Video Composition for 011 Sort Colors (LC #75)
 *
 * Full 10-Scene Sequential Composition with Channel Intro (32,938 frames @ 30fps / ~18m 17.9s):
 *   - Channel Intro: 300 frames (10.0s) Japanese one-shot cinematic intro.
 *   - Each scene preceded by a 60-frame (2.0s) Architectural Blackboard Title Card Bumper.
 *   - Transition Chalk-Tap SFX (tactile chalk click, no whoosh) at each Title Card.
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
import { Scene03CountingTrace } from "./Scene03CountingTrace";
import { Scene04CountingCode } from "./Scene04CountingCode";
import { Scene05WhyCounting } from "./Scene05WhyCounting";
import { Scene06DnfIdea } from "./Scene06DnfIdea";
import { Scene07DnfTrace } from "./Scene07DnfTrace";
import { Scene08DnfCode } from "./Scene08DnfCode";
import { Scene09Complexity } from "./Scene09Complexity";
import { Scene10Recap } from "./Scene10Recap";

export const INTRO_FRAMES = 300; // 10.0 seconds @ 30fps
export const TITLE_CARD_FRAMES = 60; // 2.0 seconds @ 30fps

export const SCENE_DURATIONS = {
  scene01: 1223,
  scene02: 2323,
  scene03: 2857,
  scene04: 2113,
  scene05: 2287,
  scene06: 3592,
  scene07: 7188,
  scene08: 2893,
  scene09: 3920,
  scene10: 3642,
} as const;

export const TOTAL_SCENE_FRAMES = Object.values(SCENE_DURATIONS).reduce(
  (sum, d) => sum + d,
  0
); // 32,038 frames

export const TOTAL_MASTER_FRAMES =
  INTRO_FRAMES + 10 * TITLE_CARD_FRAMES + TOTAL_SCENE_FRAMES; // 32,938 frames

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
            title="ROADMAP & PROBLEM HOOK"
            subtext="Sort Colors · 227-Problem Roadmap & In-Place 3-Way Partitioning"
            category="ACT 1 · OVERVIEW"
            pattern="ARRAYS & HASHING"
            leetcodeNumber={75}
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
            subtext="The 3 Color Codes (0, 1, 2) · Strict In-Place Mutation & Single-Pass Target"
            category="ACT 2 · RULES & SPEC"
            pattern="ARRAYS & HASHING"
            leetcodeNumber={75}
            accentColor={theme.cyan}
            sfxSrc="audio/sfx/chalk-tap.mp3"
          />
        </Series.Sequence>
        <Series.Sequence durationInFrames={SCENE_DURATIONS.scene02} name="Scene 02 · Understand">
          <Scene02Understand />
        </Series.Sequence>

        {/* ─── SCENE 03: COUNTING SORT TRACE ─── */}
        <Series.Sequence durationInFrames={TITLE_CARD_FRAMES} name="Title Card 03">
          <SceneTitleCard
            sceneNumber="SCENE 03"
            title="COUNTING SORT · COMPLETE TRACE"
            subtext="Two-pass frequency approach · Count 0s, 1s, 2s and overwrite the array"
            category="APPROACH 1 · TRACE"
            pattern="ARRAYS & HASHING"
            leetcodeNumber={75}
            accentColor={theme.warn}
            sfxSrc="audio/sfx/chalk-tap.mp3"
          />
        </Series.Sequence>
        <Series.Sequence durationInFrames={SCENE_DURATIONS.scene03} name="Scene 03 · Counting Trace">
          <Scene03CountingTrace />
        </Series.Sequence>

        {/* ─── SCENE 04: COUNTING SORT PYTHON CODE ─── */}
        <Series.Sequence durationInFrames={TITLE_CARD_FRAMES} name="Title Card 04">
          <SceneTitleCard
            sceneNumber="SCENE 04"
            title="COUNTING SORT · PYTHON CODE"
            subtext="Frequency array initialization · Pass 1 count tally + Pass 2 pointer overwrite"
            category="APPROACH 1 · CODE"
            pattern="ARRAYS & HASHING"
            leetcodeNumber={75}
            accentColor={theme.warn}
            sfxSrc="audio/sfx/chalk-tap.mp3"
          />
        </Series.Sequence>
        <Series.Sequence durationInFrames={SCENE_DURATIONS.scene04} name="Scene 04 · Counting Code">
          <Scene04CountingCode />
        </Series.Sequence>

        {/* ─── SCENE 05: WHY COUNTING SORT IS NOT OPTIMAL ─── */}
        <Series.Sequence durationInFrames={TITLE_CARD_FRAMES} name="Title Card 05">
          <SceneTitleCard
            sceneNumber="SCENE 05"
            title="WHY COUNTING SORT IS NOT OPTIMAL"
            subtext="The Interviewer Trap · Two passes violates the strict single-pass constraint"
            category="APPROACH 1 · BOTTLENECK"
            pattern="ARRAYS & HASHING"
            leetcodeNumber={75}
            accentColor={theme.warn}
            sfxSrc="audio/sfx/chalk-tap.mp3"
          />
        </Series.Sequence>
        <Series.Sequence durationInFrames={SCENE_DURATIONS.scene05} name="Scene 05 · Why Counting">
          <Scene05WhyCounting />
        </Series.Sequence>

        {/* ─── SCENE 06: DUTCH NATIONAL FLAG CORE IDEA ─── */}
        <Series.Sequence durationInFrames={TITLE_CARD_FRAMES} name="Title Card 06">
          <SceneTitleCard
            sceneNumber="SCENE 06"
            title="DUTCH NATIONAL FLAG · CORE IDEA"
            subtext="Edsger Dijkstra's 1976 3-Way Partition · 4 Dynamic Invariant Zones & 3 Pointers"
            category="APPROACH 2 · INTUITION"
            pattern="ARRAYS & HASHING"
            leetcodeNumber={75}
            accentColor={theme.better}
            sfxSrc="audio/sfx/chalk-tap.mp3"
          />
        </Series.Sequence>
        <Series.Sequence durationInFrames={SCENE_DURATIONS.scene06} name="Scene 06 · DNF Idea">
          <Scene06DnfIdea />
        </Series.Sequence>

        {/* ─── SCENE 07: DUTCH NATIONAL FLAG COMPLETE TRACE ─── */}
        <Series.Sequence durationInFrames={TITLE_CARD_FRAMES} name="Title Card 07">
          <SceneTitleCard
            sceneNumber="SCENE 07"
            title="DUTCH NATIONAL FLAG · STEP-BY-STEP TRACE"
            subtext="Step-by-step master trace · The critical mid vs high asymmetry explained"
            category="APPROACH 2 · TRACE"
            pattern="ARRAYS & HASHING"
            leetcodeNumber={75}
            accentColor={theme.better}
            sfxSrc="audio/sfx/chalk-tap.mp3"
          />
        </Series.Sequence>
        <Series.Sequence durationInFrames={SCENE_DURATIONS.scene07} name="Scene 07 · DNF Trace">
          <Scene07DnfTrace />
        </Series.Sequence>

        {/* ─── SCENE 08: DUTCH NATIONAL FLAG PYTHON CODE ─── */}
        <Series.Sequence durationInFrames={TITLE_CARD_FRAMES} name="Title Card 08">
          <SceneTitleCard
            sceneNumber="SCENE 08"
            title="DUTCH NATIONAL FLAG · PYTHON CODE"
            subtext="Single while loop · nums[mid] == 0, 1, 2 branch decisions & in-place tuple swaps"
            category="APPROACH 2 · CODE"
            pattern="ARRAYS & HASHING"
            leetcodeNumber={75}
            accentColor={theme.better}
            sfxSrc="audio/sfx/chalk-tap.mp3"
          />
        </Series.Sequence>
        <Series.Sequence durationInFrames={SCENE_DURATIONS.scene08} name="Scene 08 · DNF Code">
          <Scene08DnfCode />
        </Series.Sequence>

        {/* ─── SCENE 09: COMPLEXITY & PITFALLS ─── */}
        <Series.Sequence durationInFrames={TITLE_CARD_FRAMES} name="Title Card 09">
          <SceneTitleCard
            sceneNumber="SCENE 09"
            title="COMPLEXITY, PITFALLS & EDGE CASES"
            subtext="O(n) Single-Pass & O(1) Space Proofs · The Mid-Advancement Trap & Uniform Arrays"
            category="ANALYSIS · PROOFS & TRAPS"
            pattern="ARRAYS & HASHING"
            leetcodeNumber={75}
            accentColor={theme.good}
            sfxSrc="audio/sfx/chalk-tap.mp3"
          />
        </Series.Sequence>
        <Series.Sequence durationInFrames={SCENE_DURATIONS.scene09} name="Scene 09 · Complexity">
          <Scene09Complexity />
        </Series.Sequence>

        {/* ─── SCENE 10: RECAP & ROADMAP UPDATE ─── */}
        <Series.Sequence durationInFrames={TITLE_CARD_FRAMES} name="Title Card 10">
          <SceneTitleCard
            sceneNumber="SCENE 10"
            title="FINAL RECAP & ROADMAP CONTINUATION"
            subtext="Counting Sort vs DNF Summary · Transferable Invariants & Next Permutation (#012)"
            category="OUTRO · NEXT PROBLEM"
            pattern="ARRAYS & HASHING"
            leetcodeNumber={75}
            accentColor={theme.pivot}
            sfxSrc="audio/sfx/chalk-tap.mp3"
          />
        </Series.Sequence>
        <Series.Sequence durationInFrames={SCENE_DURATIONS.scene10} name="Scene 10 · Recap">
          <Scene10Recap />
        </Series.Sequence>
      </Series>
    </AbsoluteFill>
  );
};
