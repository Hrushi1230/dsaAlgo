/**
 * SFX Cue Sheet for Code With Animation 10s Japanese Intro
 * Sourced from Section 5 of code-with-animation-10s-ONE-SHOT-300F-full-motion-camera-sfx-plan.md
 */

export interface SfxCue {
  frame: number;
  timeSec: number;
  id: string;
  mixDb: number;
  description: string;
}

export const SFX_CUES: SfxCue[] = [
  { frame: 0, timeSec: 0.0, id: "paper-roomtone", mixDb: -31, description: "subliminal paper/room air loop" },
  { frame: 8, timeSec: 0.27, id: "pencil-contact", mixDb: -22, description: "pencil touches sheet" },
  { frame: 9, timeSec: 0.3, id: "pencil-scratch-short", mixDb: -27, description: "registration SVG draw" },
  { frame: 16, timeSec: 0.53, id: "pencil-flick", mixDb: -25, description: "tiny animator-arrow gesture" },
  { frame: 24, timeSec: 0.8, id: "indigo-brush-rip", mixDb: -12, description: "hero transient brush attack" },
  { frame: 36, timeSec: 1.2, id: "graphite-reveal", mixDb: -24, description: "code marks reveal" },
  { frame: 44, timeSec: 1.47, id: "wood-tick-soft", mixDb: -23, description: "bracket geometry changes" },
  { frame: 52, timeSec: 1.73, id: "cell-pencil-tick", mixDb: -31, description: "sequential cell tick 0" },
  { frame: 53, timeSec: 1.77, id: "cell-pencil-tick", mixDb: -31, description: "sequential cell tick 1" },
  { frame: 54, timeSec: 1.8, id: "cell-pencil-tick", mixDb: -31, description: "sequential cell tick 2" },
  { frame: 55, timeSec: 1.83, id: "cell-pencil-tick", mixDb: -31, description: "sequential cell tick 3" },
  { frame: 56, timeSec: 1.87, id: "cell-pencil-tick", mixDb: -31, description: "sequential cell tick 4" },
  { frame: 57, timeSec: 1.9, id: "cell-pencil-tick", mixDb: -31, description: "sequential cell tick 5" },
  { frame: 58, timeSec: 1.93, id: "cell-pencil-tick", mixDb: -31, description: "sequential cell tick 6" },
  { frame: 59, timeSec: 1.97, id: "cell-pencil-tick", mixDb: -31, description: "sequential cell tick 7" },
  { frame: 60, timeSec: 2.0, id: "red-pencil-tap", mixDb: -21, description: "pointer establishes i0" },
  { frame: 64, timeSec: 2.13, id: "pointer-tick", mixDb: -27, description: "pointer travels 0->1" },
  { frame: 68, timeSec: 2.27, id: "pointer-tick", mixDb: -27, description: "pointer travels 1->2" },
  { frame: 72, timeSec: 2.4, id: "pointer-tick", mixDb: -27, description: "pointer travels 2->3" },
  { frame: 76, timeSec: 2.53, id: "pointer-tick", mixDb: -27, description: "pointer settles over 3" },
  { frame: 84, timeSec: 2.8, id: "cleanup-pencil-bed", mixDb: -26, description: "textured cleanup sweep" },
  { frame: 104, timeSec: 3.47, id: "ink-clean-lock", mixDb: -24, description: "clean array locks" },
  { frame: 120, timeSec: 4.0, id: "segment-release", mixDb: -25, description: "predetermined segment detachment" },
  { frame: 136, timeSec: 4.53, id: "paper-vector-whoosh", mixDb: -18, description: "shard Bezier flight" },
  { frame: 150, timeSec: 5.0, id: "type-lock", mixDb: -25, description: "type lock C" },
  { frame: 154, timeSec: 5.13, id: "type-lock", mixDb: -25, description: "type lock O" },
  { frame: 158, timeSec: 5.27, id: "type-lock", mixDb: -25, description: "type lock D" },
  { frame: 162, timeSec: 5.4, id: "type-lock", mixDb: -25, description: "type lock E" },
  { frame: 168, timeSec: 5.6, id: "pencil-line-start", mixDb: -26, description: "underline starts" },
  { frame: 180, timeSec: 6.0, id: "brush-pen-write", mixDb: -25, description: "continuous WITH gesture" },
  { frame: 198, timeSec: 6.6, id: "clean-resolve", mixDb: -27, description: "clean typographic WITH resolve" },
  { frame: 212, timeSec: 7.07, id: "vermilion-gouache-swash", mixDb: -11, description: "hero gouache swipe" },
  { frame: 232, timeSec: 7.73, id: "enso-brush-circle", mixDb: -21, description: "enso brush circle" },
  { frame: 270, timeSec: 9.0, id: "hanko-hit", mixDb: -9, description: "dry low-mid stamp impact" },
  { frame: 273, timeSec: 9.1, id: "paper-dust-puff", mixDb: -26, description: "pigment dust puff" },
  { frame: 286, timeSec: 9.53, id: "pencil-transition", mixDb: -23, description: "blue pencil cut line" },
  { frame: 289, timeSec: 9.63, id: "paper-cut-swish", mixDb: -17, description: "paper cut acceleration" },
  { frame: 292, timeSec: 9.73, id: "paper-sheet-lift", mixDb: -15, description: "sheet lifts upward revealing lesson" },
];
