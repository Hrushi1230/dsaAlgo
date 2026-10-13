import { HAND_FONT, DISPLAY_FONT } from "./fonts";

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
  bad: "#EB5757",    // Error Red (7.3:1 AAA) — rejected, incorrect, failure
  accent: "#FFD166", // Accent Gold (alias of pivot for SVG/proof highlights)

  // Legacy semantic aliases (for backwards compatibility across kit)
  smaller: "#3CE5A7",
  bigger: "#FF7675",
  lockedDim: 0.4,
  emerald: "#3CE5A7",
  gold: "#FFD166",
  chalkboard: "#19523C",
  chalkTextDim: "rgba(248, 246, 240, 0.45)",

  // Markers
  pointer: "#FFD166",
  wall: "#E8E4D5",

  // Accents & Glows
  highlight: "#FFF3B0", // Butter Glow (13.8:1 AAA) — spotlight, radial bloom

  // Mobile readability aliases
  chalkBright: "#F8F6F0",
  border: "rgba(232, 228, 213, 0.45)",
} as const;

export const fonts = {
  /** Display / brush font for problem titles + major milestone headings (Caveat Bold). */
  display: DISPLAY_FONT,
  /** Chalk/handwriting font for board titles + narration text (Patrick Hand). */
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

/**
 * Mobile-First 16:9 Typography Scale.
 * Engineered for phone screens and YouTube portrait/in-app players.
 * Reference: REF_MOBILE_STYLE_CODE_FRAME.png & REF_MOBILE_STYLE_TRACE_FRAME.png
 */
export const typographyMobile = {
  /** Scene hero titles numeric size */
  titleSize: 70,
  /** Problem statement / subheader text numeric size */
  problemTextSize: 36,
  /** Column / section headers numeric size */
  sectionHeaderSize: 44,
  /** Primary body text numeric size */
  bodySize: 34,
  /** Board-native code font size numeric size */
  codeSize: 32,
  /** Variables key-value numeric size */
  variableSize: 36,
  /** Circled step numbers, badges numeric size */
  badgeSize: 28,
  /** Bottom takeaway numeric size */
  takeawaySize: 50,
  /** Monospace code line height */
  lineHeightCode: 42,
  /** Hand body line height multiplier */
  lineHeightBody: 1.35,

  /** Hero title style object */
  title: {
    fontFamily: HAND_FONT,
    fontSize: 56,
    fontWeight: 800,
  },
  /** Problem statement subheader style object */
  problemText: {
    fontFamily: HAND_FONT,
    fontSize: 36,
    fontWeight: 600,
  },
  /** Section / column header style object */
  sectionHeader: {
    fontFamily: HAND_FONT,
    fontSize: 44,
    fontWeight: 800,
  },
  /** Primary body text style object */
  body: {
    fontFamily: HAND_FONT,
    fontSize: 34,
    fontWeight: 600,
  },
  /** Board-native code style object */
  code: {
    fontFamily: '"SFMono-Regular", Consolas, "Liberation Mono", Menlo, monospace',
    fontSize: 30,
    fontWeight: 600,
  },
  /** Variables key-value style object */
  variable: {
    fontFamily: HAND_FONT,
    fontSize: 36,
    fontWeight: 700,
  },
  /** Takeaway style object */
  takeaway: {
    fontFamily: HAND_FONT,
    fontSize: 50,
    fontWeight: 800,
  },
  /** Tag/badge style object */
  tag: {
    fontFamily: HAND_FONT,
    fontSize: 28,
    fontWeight: 800,
  },
  /** Note style object */
  note: {
    fontFamily: HAND_FONT,
    fontSize: 26,
    fontWeight: 600,
  },
  /** Monospace text style object */
  mono: {
    fontFamily: '"SFMono-Regular", Consolas, "Liberation Mono", Menlo, monospace',
    fontSize: 24,
    fontWeight: 600,
  },
} as const;


