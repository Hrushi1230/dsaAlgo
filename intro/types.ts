/// <reference path="./assets.d.ts" />

/**
 * Code With Animation — 10s Japanese Intro (300 Frames)
 * Types, Geometry, Colors, and Timing Constants
 * Strictly following code-with-animation-10s-ONE-SHOT-300F-full-motion-camera-sfx-plan.md
 */

export const INTRO_CONSTANTS = {
  WIDTH: 1920,
  HEIGHT: 1080,
  FPS: 30,
  TOTAL_FRAMES: 300,

  // Geometry
  STAGE_CENTER_X: 960,
  STAGE_CENTER_Y: 540,

  SAFE_AREA: {
    X_MIN: 80,
    X_MAX: 1840,
    Y_MIN: 70,
    Y_MAX: 1010,
  },

  // 8-Cell Array Geometry (fixed absolute slots)
  ARRAY: {
    SLOT_COUNT: 8,
    START_X: 519,
    CELL_STEP: 112,
    CELL_WIDTH: 96,
    CELL_HEIGHT: 96,
    CENTER_Y: 520,
    POINTER_Y: 410,
    // Precomputed slot X coordinates:
    // Cell 0: 519, Cell 1: 631, Cell 2: 743, Cell 3: 855,
    // Cell 4: 967, Cell 5: 1079, Cell 6: 1191, Cell 7: 1303
    SLOTS: [519, 631, 743, 855, 967, 1079, 1191, 1303],
    VALUES: [2, 7, 11, 15, 20, 28, 35, 42],
  },

  // Typography Baselines & Centers
  TYPOGRAPHY: {
    CODE_X: 960,
    CODE_BASELINE_Y: 388,
    WITH_X: 960,
    WITH_CENTER_Y: 445,
    ANIMATION_X: 960,
    ANIMATION_BASELINE_Y: 558,
    SUBTITLE_X: 960,
    SUBTITLE_BASELINE_Y: 708,
  },

  // Enso Geometry
  ENSO: {
    CENTER_X: 960,
    CENTER_Y: 520,
    DIAMETER: 680,
  },

  // Hanko Stamp (scaled down 16% per Section 1)
  HANKO: {
    CENTER_X: 1298,
    CENTER_Y: 692,
    SIZE: 72,
  },

  // Japanese Washi / Genga Color Palette
  COLORS: {
    WASHI_BG: "#F7F4EB",
    WASHI_DEEP: "#EFEADB",
    BLUE_PENCIL: "#5B78A7",
    BLUE_PENCIL_LIGHT: "rgba(91, 120, 167, 0.4)",
    BLUE_PENCIL_FAINT: "rgba(91, 120, 167, 0.08)",
    INDIGO_CLEAN: "#26364A",
    INDIGO_DEEP: "#1A2533",
    INDIGO_STROKE: "#324C7A",
    VERMILION_CEL: "#C9553D",
    VERMILION_PENCIL: "#D94E34",
    VERMILION_BRIGHT: "#E04F35",
    CHALKBOARD_BG: "#13171F",
  },
} as const;

export interface CameraState {
  scale: number;
  x: number;
  y: number;
  rotation: number;
}
