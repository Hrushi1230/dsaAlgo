# Scene 08: Method 2 Is Optimal ──► Derive Simpler Transformation View
## Exact Framewise Production Plan (Total: 1,662 Frames @ 30 FPS · 55.400s)

> **Source Authority:**
> - Audio: `public/audio/014/08-why-method2-complex.mp3` (55.400s · 1,662 frames)
> - Sync: `sync/08-why-method2-complex.json` (98 words)
> - Re-Audit Plan: `Q14_PHASE9_REAUDIT_V2/08_SCENE08_DERIVE_METHOD3_WORD_BASED_VISUAL_PLAN.md`
> - User Mandates: Strictly kit components (`RoughBox`, `ChalkText`, `theme`, `fonts`, `Captions`). NO AI-slop cards / generic boxes. NO spoilers — elements appear ONLY when spoken. Clean Center-Stage Hero (Y: 180..720). Pristine breathing room > 240px above captions at Y: 960.

---

### Spatial Canvas Budget (1920 × 1080)
- **Top Metadata Strip (Y: 36..105):**
  - Left: `01 · ARRAYS & HASHING`
  - Center: `ROTATE IMAGE (LEETCODE 48)`
  - Right: `METHOD 2 IS OPTIMAL · DERIVING METHOD 3`
- **Center Stage Hero Zone (X: 160..1760, Y: 180..720, Height: 540):**
  - **Phase 1: Method 2 Status & 7-Index Burden (F0..F827):**
    - Method 2 Optimal Asymptotics Pill: `O(N²) TIME · O(1) SPACE` (F0..F224)
    - Seven Individual Variable Boxes using `RoughBox` + `ChalkText`:
      `first` (F437), `last` (F463), `offset` (F488), `top` (F513), `right` (F535), `bottom` (F564), `left` (F589).
    - Arranged in a single clean horizontal sequence across the center stage.
    - F622..F827: Cognitive mix-up warning pulse under interview conditions.
  - **Phase 2: Mathematical Coordinate Mapping Return (F828..F1502):**
    - Source Coordinate Box: `(r, c)`
    - Destination Coordinate Box: `(c, n - 1 - r)`
    - Architectural Question: `CAN WE REACH (c, n - 1 - r) USING TWO SIMPLER STEPS?`
  - **Phase 3: Two-Stage Decomposition & Method 3 Handoff (F1503..F1662):**
    - Step 1: Swap rows & columns: `(r, c) ──► (c, r)` (Transpose)
    - Step 2: Flip horizontal direction: `(c, r) ──► (c, n - 1 - r)` (Reverse each row)
    - Verified Method 3 Badge: `METHOD 3: TRANSPOSE + REVERSE`
- **Bottom Zone (Y: 960..1010):**
  - Word-level synced `Captions` with 240px vertical clearance from Y: 720.

---

### Framewise Beat Choreography (All 9 Contiguous Beats)

#### BEAT 01 — `S08_OPTIMAL` (Frames 0..197 · w[0..14])
- **ANCHOR:** "Method 2 is already optimal, so we are not looking for a better time complexity."
- **WHAT APPEARS NOW:** Clean Chalkboard badge: `METHOD 2 IS ALREADY OPTIMAL: O(N²) TIME · O(1) EXTRA SPACE`.
- **CENTER-STAGE HERO:** Method 2 Asymptotic Status.
- **CAUSE:** Narration protects the truth that Method 2 did not fail.
- **EFFECT / MOTION:** Enters smoothly with spring scale (0.95 -> 1.0).
- **WHAT MUST NOT APPEAR YET:** Index list, Method 3.
- **COMPREHENSION HOLD:** Frames 198..224.
- **CLEANUP / EXIT:** Recedes slightly upward at F225.
- **PERSISTENT STATE:** Method 2 optimality established.

#### BEAT 02 — `S08_READABILITY` (Frames 225..418 · w[15..27])
- **ANCHOR:** "The issue now is readability. The four-way cycle needs several related indices."
- **WHAT APPEARS NOW:** Focus pill: `COGNITIVE BURDEN: 7 RELATED INDEX VARIABLES`.
- **CENTER-STAGE HERO:** Readability & Index Complexity.
- **CAUSE:** Spoken narration pivots from asymptotic efficiency to human implementation burden.
- **EFFECT / MOTION:** Subtitle text appears below the optimal badge.
- **WHAT MUST NOT APPEAR YET:** The 7 individual index boxes.
- **COMPREHENSION HOLD:** Frames 419..436.
- **CLEANUP / EXIT:** Transition to index enumeration.
- **PERSISTENT STATE:** Focus set on the 7 indexing variables.

#### BEAT 03 — `S08_INDICES` (Frames 437..598 · w[28..34])
- **ANCHOR:** "First, last, offset, top, right, bottom, left."
- **WHAT APPEARS NOW:** Seven individual RoughBox boxes appear strictly one-by-one as spoken:
  - F437: `first`
  - F463: `last`
  - F488: `offset`
  - F513: `top`
  - F535: `right`
  - F564: `bottom`
  - F589: `left`
- **CENTER-STAGE HERO:** Array of 7 Index Boxes.
- **CAUSE:** Spoken narration names each variable individually.
- **EFFECT / MOTION:** Each box pops on its exact spoken frame with a subtle gold chalk outline.
- **WHAT MUST NOT APPEAR YET:** Mix-up warning, coordinate mapping.
- **COMPREHENSION HOLD:** Frames 599..621.
- **CLEANUP / EXIT:** Boxes persist into Beat 04.
- **PERSISTENT STATE:** All 7 index boxes visible on stage.

#### BEAT 04 — `S08_MIXUP` (Frames 622..828 · w[35..52])
- **ANCHOR:** "The logic is correct, but these index relationships can be easy to mix up, especially in an interview."
- **WHAT APPEARS NOW:** All 7 boxes pulse amber (`theme.warn`) with warning cue: `EASY TO MIX UP UNDER INTERVIEW PRESSURE`.
- **CENTER-STAGE HERO:** High Cognitive Load Warning.
- **CAUSE:** Narration identifies why we need an alternative solution.
- **EFFECT / MOTION:** Subtle warning glow on the 7 boxes; text tag appears below.
- **WHAT MUST NOT APPEAR YET:** Mathematical mapping formula.
- **COMPREHENSION HOLD:** Frames 810..827.
- **CLEANUP / EXIT:** 7 boxes fade out at F828 as stage resets for mapping return.
- **PERSISTENT STATE:** Problem with Method 2 identified.

#### BEAT 05 — `S08_RETURN_MAP` (Frames 828..1022 · w[53..65])
- **ANCHOR:** "So instead of inventing another movement rule, let's return to the coordinate mapping."
- **WHAT APPEARS NOW:** Center Stage resets to the original mathematical blueprint:
  Source box: `(r, c)` with chalk arrow pointing rightward.
- **CENTER-STAGE HERO:** Mathematical Blueprint Return.
- **CAUSE:** Narration calls for return to first principles.
- **EFFECT / MOTION:** Source coordinate box `(r, c)` draws on in cyan.
- **WHAT MUST NOT APPEAR YET:** Destination formula, decomposition steps.
- **COMPREHENSION HOLD:** Frames 1023..1053.
- **CLEANUP / EXIT:** Arrow connects to destination.
- **PERSISTENT STATE:** Source `(r, c)` established.

#### BEAT 06 — `S08_DEST_FORMULA` (Frames 1054..1262 · w[66..78])
- **ANCHOR:** "We already proved our final destination is C n minus 1 minus r."
- **WHAT APPEARS NOW:** Destination box appears: `(c, n - 1 - r)` in gold `theme.gold`.
  Full direct formula: `(r, c) ────────► (c, n - 1 - r)`.
- **CENTER-STAGE HERO:** Direct 90° Clockwise Formula.
- **CAUSE:** Narration restates verified mapping.
- **EFFECT / MOTION:** Gold box reveals with chalk glow.
- **WHAT MUST NOT APPEAR YET:** Decomposition question.
- **COMPREHENSION HOLD:** Frames 1263..1272.
- **CLEANUP / EXIT:** Mapping stays center stage.
- **PERSISTENT STATE:** Full direct transformation visible.

#### BEAT 07 — `S08_TWO_STEPS_Q` (Frames 1273..1502 · w[79..90])
- **ANCHOR:** "The question is, can we reach that destination using two simpler transformations?"
- **WHAT APPEARS NOW:** Central architectural query banner below formula:
  `CAN WE REACH (c, n - 1 - r) USING TWO ELEMENTARY TRANSFORMATIONS?`
- **CENTER-STAGE HERO:** The Two-Step Decomposition Question.
- **CAUSE:** Narration poses the key conceptual bridge.
- **EFFECT / MOTION:** Banner draws on with cyan border.
- **WHAT MUST NOT APPEAR YET:** The answer "Yes", the two steps.
- **COMPREHENSION HOLD:** Frames 1503..1529.
- **CLEANUP / EXIT:** Banner stays active.
- **PERSISTENT STATE:** Question framed.

#### BEAT 08 — `S08_YES_DECOMPOSE` (Frames 1530..1543 · w[91])
- **ANCHOR:** "Yes."
- **WHAT APPEARS NOW:** Bold green affirmation: `YES!` with two clean sequential step boxes:
  - Step 1: `Swap (r, c) ──► (c, r)` (Swap rows and columns · Transpose)
  - Step 2: `Flip (c, r) ──► (c, n - 1 - r)` (Reverse horizontal direction)
- **CENTER-STAGE HERO:** Two-Step Mathematical Decomposition.
- **CAUSE:** Narration confirms and outlines the two steps.
- **EFFECT / MOTION:** Green checkmark and two step branches draw on.
- **WHAT MUST NOT APPEAR YET:** Method 3 banner.
- **COMPREHENSION HOLD:** Frames 1544..1569.
- **CLEANUP / EXIT:** Steps persist into handoff.
- **PERSISTENT STATE:** Two steps clearly proved mathematically.

#### BEAT 09 — `S08_METHOD3_HANDOFF` (Frames 1570..1662 · w[92..97])
- **ANCHOR:** "And that gives us Method 3."
- **WHAT APPEARS NOW:** Prominent green chalk badge: `METHOD 3: TRANSPOSE + ROW REVERSAL ──► NEXT`.
- **CENTER-STAGE HERO:** Method 3 Handoff Banner.
- **CAUSE:** Narration concludes Scene 08 and hands off to Method 3 Trace.
- **EFFECT / MOTION:** Clean pulse glow in `theme.good`.
- **WHAT MUST NOT APPEAR YET:** Scene 09 content.
- **COMPREHENSION HOLD:** Frames 1640..1662.
- **CLEANUP / EXIT:** Scene ends at F1662.
- **PERSISTENT STATE:** Ready for Scene 09.
