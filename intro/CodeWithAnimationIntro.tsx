import React from "react";
import { AbsoluteFill, useCurrentFrame } from "remotion";
import { getCameraState } from "./utils/camera";
import { INTRO_CONSTANTS } from "./types";
import { PaperWorld } from "./components/PaperWorld";
import { ProductionMarks } from "./components/ProductionMarks";
import { BrushSlash } from "./components/BrushSlash";
import { CodeToArray } from "./components/CodeToArray";
import { GengaCleanup } from "./components/GengaCleanup";
import { ArrayToCodeMorph } from "./components/ArrayToCodeMorph";
import { WithGesture } from "./components/WithGesture";
import { CelPaintMatte } from "./components/CelPaintMatte";
import { EnsoCircle } from "./components/EnsoCircle";
import { SubtitleReveal } from "./components/SubtitleReveal";
import { HankoStamp } from "./components/HankoStamp";
import { PaperLiftTransition } from "./components/PaperLiftTransition";
import { LessonUnderlay } from "./components/LessonUnderlay";

/**
 * CODE WITH ANIMATION — 10s Japanese Intro (300 Frames)
 * One continuous shot. Zero hard cuts.
 * Fixed optical geometry, continuous camera rig, 15fps line-boil variants.
 * Strictly adhering to code-with-animation-10s-ONE-SHOT-300F-full-motion-camera-sfx-plan.md
 */
export const CodeWithAnimationIntro: React.FC = () => {
  const frame = useCurrentFrame();

  // Single Continuous Camera Rig transform per Section 4
  const { scale, x, y, rotation } = getCameraState(frame);

  return (
    <AbsoluteFill
      style={{
        backgroundColor: INTRO_CONSTANTS.COLORS.CHALKBOARD_BG,
        width: 1920,
        height: 1080,
        overflow: "hidden",
      }}
    >
      {/* 1. Lesson Underlay (fixed underneath, revealed as paper lifts) */}
      <LessonUnderlay />

      {/* 2. Paper Lift Transition Wrapper (lifts sheet upward F292-F299) */}
      <PaperLiftTransition>
        {/* 3. Master Camera Rig Parent Transform */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 1920,
            height: 1080,
            transform: `translate3d(${x}px, ${y}px, 0) scale(${scale}) rotate(${rotation}deg)`,
            transformOrigin: "center center",
          }}
        >
          {/* Paper Texture World (washi, fibers, graphite, dry ink) */}
          <PaperWorld />

          {/* Production Marks (registration, crop marks, blue grid, ticks, notes) */}
          <ProductionMarks />

          {/* Indigo Brush Slash Attack (F024-F051) */}
          <BrushSlash />

          {/* Code Marks & 8-Cell Rough Array Build (F052-F115) */}
          <CodeToArray />

          {/* Clean Vector Cleanup Sweep (F084-F115) */}
          <GengaCleanup />

          {/* Open Indigo Enso Brush Circle (F232-F299, behind title hierarchy per Section 1 F275 & Section 12) */}
          <EnsoCircle />

          {/* Shards Detach, Bezier Flight, CODE Construction (F116-F179) */}
          <ArrayToCodeMorph />

          {/* Continuous Hand-Drawn WITH Gesture & Typographic Resolve (F180-F299) */}
          <WithGesture />

          {/* Vermilion Cel Paint Swipe & ANIMATION Reveal (F208-F299) */}
          <CelPaintMatte />

          {/* Subtitle Mask Reveal (F246-F299) */}
          <SubtitleReveal />

          {/* Hanko Stamp Impact with Dust Puff (F270-F299) */}
          <HankoStamp />
        </div>
      </PaperLiftTransition>
    </AbsoluteFill>
  );
};
