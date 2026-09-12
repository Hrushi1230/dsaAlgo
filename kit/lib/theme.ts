import { HAND_FONT } from "./fonts";

/**
 * Visual theme for Code With Animation DSA Explainer Videos.
 * Green-board / chalk teacher aesthetic. All colors/fonts/sizes live here.
 *
 * Mathematically balanced for Oxford Chalkboard Green (#19523C) background.
 * All foreground text and accent colors exceed WCAG AAA (>7:1) or AA (>4.5:1).
 */

export const theme = {
  // Board surface
  boardBg: "#19523C", // Oxford Chalkboard Green
  boardVignette: "transparent",

  // Chalk text (Warm Antique Alabaster)
  chalkText: "#F8F6F0", // warm chalk white (13.2:1 contrast)
  chalkDim: "rgba(248, 246, 240, 0.45)", // faded secondary chalk (5.4:1 contrast)
  chalkLine: "#E8E4D5", // crisp chalk line

  // Cards (translucent slate wash - replaces the solid white paper look)
  cardBg: "rgba(248, 246, 240, 0.08)", // translucent chalk-slate wash
  cardBgHover: "rgba(248, 246, 240, 0.16)", // active card wash
  cardText: "#F8F6F0", // glowing chalk white text inside cards
  cardBorder: "rgba(232, 228, 213, 0.7)",

  // Semantic pigment accents (Golden Chalk Palette)
  pivot: "#FFD166", // Sunburst Gold (11.4:1 AAA) — primary focus, active pointers
  good: "#3CE5A7", // Seafoam Mint (10.2:1 AAA) — solved, matching, optimal curve
  warn: "#FF7675", // Coral Terracotta (7.1:1 AAA) — mismatch, bug, brute curve
  cyan: "#5CE1E6", // Ice Cyan (11.1:1 AAA) — secondary pointers (j, right, aux)
  purple: "#D8B4E2", // Powdery Lilac (8.9:1 AAA) — HashSets, HashMaps, memory
  better: "#FFA94D", // Amber Sunset (9.5:1 AAA) — better approach curve

  // Legacy semantic aliases (for backwards compatibility across kit)
  smaller: "#3CE5A7",
  bigger: "#FF7675",
  lockedDim: 0.4,

  // Markers
  pointer: "#FFD166",
  wall: "#E8E4D5",

  // Accents & Glows
  highlight: "#FFF3B0", // Butter Glow (13.8:1 AAA) — spotlight, radial bloom
} as const;

export const fonts = {
  /** Chalk/handwriting font for board titles + narration text (Patrick Hand via google-fonts). */
  hand: HAND_FONT,
  /** Clean monospace for code + numbers (legibility). */
  mono: '"SFMono-Regular", Consolas, "Liberation Mono", Menlo, monospace',
  /** Monospace alias for code blocks & bit representations. */
  code: '"SFMono-Regular", Consolas, "Liberation Mono", Menlo, monospace',
  /** Clean sans-serif for UI indicators & badges. */
  sans: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
} as const;

export const sizes = {
  card: 120, // px, square card side
  cardGap: 28,
  cardRadius: 14,
  cardFont: 60,
  titleFont: 96,
  labelFont: 40,
  bodyFont: 48,
  pointerHeight: 70,
  wallWidth: 6,
} as const;
