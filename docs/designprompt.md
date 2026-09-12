# designprompt.md — Chalkboard Design Bible

**For:** the Algora 240-day DSA video course (`roadmap.md`), built with Remotion (`remotion.md`).
**Purpose:** remove every design decision from the AI. It writes code; this file decides the pixels.

This design system is based on the `@dsa/kit` workspace package, creating a warm, organic, "teacher at a green-board" aesthetic.

---

## 1. Core Visual Language

### Colors (from `kit/lib/theme.ts`)
Do not invent hex codes. Use these exact variables mapped to semantics:

*   **Background (Board)**
    *   `boardBg`: `#18523d` (Lighter chalkboard green)
    *   `boardVignette`: `rgba(0,0,0,0.35)`
*   **Chalk & Text**
    *   `chalkText`: `#f4f1e8` (Warm chalk white)
    *   `chalkDim`: `rgba(244,241,232,0.45)` (Faded chalk)
    *   `chalkLine`: `#e8e4d5`
*   **Semantic States (The Channel Moat)**
    *   `pivot`: `#f2c14e` (Yellow — focus/pivot)
    *   `smaller` / `good`: `#5fb37a` (Green — done/smaller)
    *   `bigger` / `warn`: `#e06c5e` (Red — attention/bigger)
    *   `highlight`: `#ffe7a3` (Accent)
*   **Array Elements (Cards)**
    *   `cardBg`: `#f4f1e8` (Solid off-white)
    *   `cardText`: `#1c1c1c` (Dark ink)
    *   `cardBorder`: `rgba(0,0,0,0.15)`
*   **Opacity Modifiers**
    *   `lockedDim`: `0.4` (Multiplier when a card is locked in its final position)

### Typography (from `kit/lib/fonts.ts`)
Only two font families are permitted:
1.  **Handwriting / Chalk (`fonts.hand`)**: Patrick Hand (via google-fonts). Used for board titles, narration text, and annotations.
2.  **Code / Data (`fonts.mono`)**: SFMono-Regular, Consolas, Menlo. Used for code blocks, indices, and array numbers to ensure crisp legibility.

### Layout & Sizes (from `kit/lib/theme.ts`)
*   **Arrays/Cards**: Width/Height `120px` (`sizes.card`), Gap `28px` (`sizes.cardGap`), Radius `14px` (`sizes.cardRadius`).
*   **Font Sizes**: Title `96px`, Card numbers `60px`, Body `48px`, Labels `40px`.
*   **Pointers & Walls**: Pointer height `70px`, Wall width `6px`.

---

## 2. Animation Principles (`kit/lib/anim.ts`)

All motion must use the provided utilities to maintain a natural, physics-based feel. **Never use linear easing or CSS transitions.**

*   **EASE**: Standard movement uses `Easing.bezier(0.16, 1, 0.3, 1)`.
*   `fadeIn(frame, start, dur)`: Smooth opacity 0→1.
*   `tween(frame, start, dur, from, to)`: Clamped and eased interpolation for positions/scales.
*   `pop(frame, start, dur)`: A brief emphasis scale (`0.9 → 1.06 → 1`).
*   `writeProgress(frame, start, dur)`: Used to reveal handwriting (as a stroke clip/width fraction).

---

## 3. Available Components (`kit/components/`)

Do not build new visual primitives if these exist. Compose these to build scenes:

*   `RoughBox.tsx` / `RoughLine.tsx` / `RoughCurve.tsx`: Hand-drawn primitives powered by RoughJS for arrays, pointers, and connections.
*   `ChalkText.tsx`: For all non-code text on the board.
*   `MiniGraph.tsx`: For drawing complexity curves (used heavily in WHY-NOT scenes).
*   `CountUp.tsx`: Odometer style rolling counters for complexity numbers.
*   `BezierFlight.tsx`: For animating items swapping or moving across the board on curved paths.
*   `ChalkDust.tsx` & `Shatter.tsx` & `ShineFill.tsx`: Specialized visual effects.
*   `Captions.tsx`: Global subtitles wrapper.

---

## 4. Building Scenes

When tasked to build a scene (e.g., an Array Trace or a WHY-NOT beat):
1. Import primitives directly from `@dsa/kit` (or `../../kit/`).
2. Map your data state to the semantic colors defined in `theme.ts` (e.g., use `theme.warn` for out-of-bounds, `theme.pivot` for the current index).
3. Orchestrate the timing using `audioSync.json` timestamps and the helpers in `anim.ts` and `styleTokens.ts`.
