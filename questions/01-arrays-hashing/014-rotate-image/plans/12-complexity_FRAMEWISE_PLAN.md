# Scene 12 Framewise Plan: Method Comparison & Complexity Analysis (LeetCode 48)
## 014-rotate-image · Scene 12 (`12-complexity`)

- **Audio File:** `public/audio/014/12-complexity.mp3`
- **Total Duration:** 1,219 frames (40.640s @ 30 FPS)
- **Sync Authority:** `questions/01-arrays-hashing/014-rotate-image/sync/12-complexity.json` (75 words, `sync/12-all-words.txt`)
- **Authoritative Visual Plan:** `questions/01-arrays-hashing/014-rotate-image/Q14_PHASE9_REAUDIT_V2/12_SCENE12_COMPLEXITY_MISTAKES_EDGECASES_WORD_BASED_VISUAL_PLAN.md`
- **Visual Aesthetic:** Chalk blackboard (`#0D1117`), 100% `@dsa/kit` components, zero cards, zero AI-slop containers, strict spoiler-free reveals, zero vertical collisions (> 270px clearance above captions).

---

### Mandatory Kit & Architectural Specifications

All UI elements MUST be implemented strictly using canonical `@dsa/kit` components:
1. **Blackboard Environment:** `ChalkboardBackground`, `ChalkFilters` from `kit/lib/chalk`.
2. **Palette & Theme:** `theme` from `kit/lib/theme` (`theme.chalkText`, `theme.cyan`, `theme.accent`, `theme.pivot`, `theme.warn`, `theme.good`, `theme.chalkBorder`, `theme.chalkSub`).
3. **Typography:** `fonts` from `kit/lib/theme` (`fonts.code`, `fonts.editorial`, `fonts.body`).
4. **Comparison Modules & Rows:** `RoughBox` from `kit/components/RoughBox` (deterministic `seed`, `strokeWidth: 2.5`).
5. **Text, Formulas & Badges:** `ChalkText` from `kit/components/ChalkText` (`font="mono"` or `"hand"`).
6. **Dividers & Metric Axes:** `RoughLine` from `kit/components/RoughLine`.
7. **Captions:** `Captions` from `kit/components/Captions` (Y: 960..1010, words from `syncData.words`).

---

### Spatial Distribution & Canvas Budget (1920 × 1080)

```text
+-----------------------------------------------------------------------------------+
| Top Bar (Y: 36..100): Clean Metadata Strip (ChalkText / theme.cyan)                |
|   - Left: "QUESTION 014: ROTATE IMAGE"                                            |
|   - Center: "ALGORITHMIC COMPARISON: 3 METHODS"                                    |
|   - Right: "LEETCODE IN-PLACE CONTRACT"                                           |
+-----------------------------------------------------------------------------------+
| Center Stage (X: 140..1780, Y: 130..690):                                         |
|   - Section Header (Y: 130..170): "THE THREE METHODS COMPARED"                     |
|                                                                                   |
|   - Row 1: Method 1 (Y: 200..310, Height: 110px)                                  |
|     - RoughBox border (stroke: theme.accent)                                      |
|     - Name: "METHOD 1: EXTRA MATRIX"                                              |
|     - Mechanism: Allocates new N×N grid & maps (r,c) -> (c, n-1-r)                |
|     - Complexity Badges: Time O(N²) | Space O(N²) [FAILS IN-PLACE ✗]             |
|                                                                                   |
|   - Row 2: Method 2 (Y: 330..440, Height: 110px)                                  |
|     - RoughBox border (stroke: theme.cyan)                                        |
|     - Name: "METHOD 2: 4-WAY LAYER CYCLES"                                        |
|     - Mechanism: Rotates 4-element cyclical orbits in concentric rings            |
|     - Complexity Badges: Time O(N²) | Space O(1) [IN-PLACE ✓]                     |
|                                                                                   |
|   - Row 3: Method 3 (Y: 460..570, Height: 110px)                                  |
|     - RoughBox border (stroke: theme.gold)                                        |
|     - Name: "METHOD 3: TRANSPOSE + REVERSE"                                       |
|     - Mechanism: Algebraic symmetry: Transpose (r < c), then reverse each row      |
|     - Complexity Badges: Time O(N²) | Space O(1) [OPTIMAL & CLEANEST ✓]           |
|                                                                                   |
|   - Conclusion Banner (Y: 600..690, Height: 90px)                                 |
|     - RoughBox border (stroke: theme.good, strokeWidth: 3)                        |
|     - Content: Both in-place methods satisfy O(1) space. Method 3 is optimal!     |
+-----------------------------------------------------------------------------------+
| Bottom Zone (Y: 960..1010): Word-level Captions (Kit Captions component)          |
|   - Massive > 270px pristine breathing clearance between Y: 690 and Y: 960        |
+-----------------------------------------------------------------------------------+
```

---

### Framewise Anchor Choreography (All 8 Anchors)

```text
=====================================================================================
ANCHOR 01: S12_INTRO_COMPARE
=====================================================================================
EXACT SYNC RANGE: F0000 – F0121 (0.000s – 4.033s · Words 0..7)
SPOKEN TEXT: "Let's compare. The three methods, one final time."
KIT COMPONENTS:
  - ChalkText (Top bar metadata & title)
  - RoughBox (Header underline pill)
  - Captions (Bottom captions at Y: 960..1010)
WHAT APPEARS NOW:
  - Top Bar metadata strip draws on:
    - Left: "QUESTION 014 · ROTATE IMAGE"
    - Center: "3 METHODS FINAL COMPARISON" via RoughBox pill
    - Right: "IN-PLACE CONSTRAINT EVALUATION"
  - Center stage header reveals at Y: 135:
    "ALGORITHMIC COMPARISON: THE THREE METHODS" via ChalkText in theme.gold.
CENTER-STAGE HERO: Comparison stage initialization.
CAUSE: Narration introduces comparing the three methods one final time.
EFFECT / MOTION: Header scales in smoothly; resting grid layout prepares.
WHAT MUST NOT APPEAR YET: Method 1, Method 2, Method 3 details; no complexity values.
COMPREHENSION HOLD: F111 – F121 (natural pause before "Method one").
CLEANUP / EXIT: None. Persistent layout foundation.
PERSISTENT STATE: Header active; stage ready for sequential method reveals.

=====================================================================================
ANCHOR 02: S12_METHOD1_EXTRA_MATRIX
=====================================================================================
EXACT SYNC RANGE: F0122 – F0267 (4.080s – 8.900s · Words 8..16)
SPOKEN TEXT: "Method one uses another n by n matrix."
KIT COMPONENTS:
  - RoughBox (Row 1 container outline: stroke=theme.accent, seed=121)
  - ChalkText (Method 1 title & description)
WHAT APPEARS NOW:
  - Row 1 reveals at Y: 200 (X: 140..1780, width: 1640, height: 110):
    - Left: "METHOD 1: EXTRA DESTINATION MATRIX" via ChalkText (fontSize: 18, color: theme.accent).
    - Center: "Allocates a new N×N grid; maps every (r, c) to (c, n - 1 - r) directly." via ChalkText (fontSize: 14, color: theme.chalkSub).
CENTER-STAGE HERO: Method 1 architecture row.
CAUSE: Spoken explanation of Method 1's core allocation mechanism.
EFFECT / MOTION: Row 1 RoughBox sketches on; text writes character-by-character.
WHAT MUST NOT APPEAR YET: Method 1 complexity badges, Method 2, Method 3.
COMPREHENSION HOLD: F248 – F267.
CLEANUP / EXIT: Method 1 row body settles.
PERSISTENT STATE: Method 1 mechanism established.

=====================================================================================
ANCHOR 03: S12_METHOD1_COMPLEXITY
=====================================================================================
EXACT SYNC RANGE: F0268 – F0391 (8.920s – 13.033s · Words 17..26)
SPOKEN TEXT: "Time, O of n squared, extra space, O of n squared."
KIT COMPONENTS:
  - RoughBox (Time badge in theme.cyan, Space badge in theme.warn)
  - ChalkText (Time and Space Big-O values)
WHAT APPEARS NOW:
  - On the right side of Row 1:
    - Time Badge at F268: RoughBox (width: 170, height: 44, stroke: theme.cyan) with "TIME: O(N²)"
    - Space Badge at F317: RoughBox (width: 260, height: 44, stroke: theme.warn) with "SPACE: O(N²) [FAILS IN-PLACE ✗]" in amber/red.
CENTER-STAGE HERO: Method 1 complexity evaluation (highlighting in-place failure).
CAUSE: Narration states O(N²) time and O(N²) extra space.
EFFECT / MOTION: Time and space badges draw on; red/amber warning box highlights space failure.
WHAT MUST NOT APPEAR YET: Method 2, Method 3, conclusion banner.
COMPREHENSION HOLD: F383 – F391.
CLEANUP / EXIT: Method 1 row completely populated.
PERSISTENT STATE: Method 1 complete: O(N²) time / O(N²) space (fails requirement).

=====================================================================================
ANCHOR 04: S12_METHOD2_FOUR_WAY_CYCLES
=====================================================================================
EXACT SYNC RANGE: F0392 – F0580 (13.080s – 19.333s · Words 27..37)
SPOKEN TEXT: "Method two rotates four connected values directly inside the matrix."
KIT COMPONENTS:
  - RoughBox (Row 2 container outline: stroke=theme.cyan, seed=122)
  - ChalkText (Method 2 title & description)
WHAT APPEARS NOW:
  - Row 2 reveals at Y: 330 (X: 140..1780, width: 1640, height: 110):
    - Left: "METHOD 2: 4-WAY LAYER CYCLES" via ChalkText (fontSize: 18, color: theme.cyan).
    - Center: "Rotates 4-element cyclical orbits in concentric rings (first to last - 1); temp variable holds 1 value." via ChalkText (fontSize: 14, color: theme.chalkSub).
CENTER-STAGE HERO: Method 2 architecture row.
CAUSE: Spoken explanation of Method 2's direct four-way in-place cycle rotation.
EFFECT / MOTION: Row 2 RoughBox sketches on; text writes smoothly.
WHAT MUST NOT APPEAR YET: Method 2 complexity badges, Method 3.
COMPREHENSION HOLD: F562 – F580.
CLEANUP / EXIT: Row 2 body settles.
PERSISTENT STATE: Method 2 mechanism established.

=====================================================================================
ANCHOR 05: S12_METHOD2_COMPLEXITY
=====================================================================================
EXACT SYNC RANGE: F0581 – F0724 (19.380s – 24.133s · Words 38..46)
SPOKEN TEXT: "Time, O of n squared, extra space, O of one."
KIT COMPONENTS:
  - RoughBox (Time badge in theme.cyan, Space badge in theme.good)
  - ChalkText (Time and Space Big-O values)
WHAT APPEARS NOW:
  - On the right side of Row 2:
    - Time Badge at F581: RoughBox (width: 170, height: 44, stroke: theme.cyan) with "TIME: O(N²)"
    - Space Badge at F634: RoughBox (width: 260, height: 44, stroke: theme.good) with "SPACE: O(1) [IN-PLACE ✓]" in emerald green.
CENTER-STAGE HERO: Method 2 complexity evaluation (qualifying as in-place).
CAUSE: Narration states O(N²) time and O(1) extra space.
EFFECT / MOTION: Time and space badges draw on; green checkmark glows.
WHAT MUST NOT APPEAR YET: Method 3, conclusion banner.
COMPREHENSION HOLD: F710 – F724.
CLEANUP / EXIT: Method 2 row completely populated.
PERSISTENT STATE: Method 2 complete: O(N²) time / O(1) space (valid in-place).

=====================================================================================
ANCHOR 06: S12_METHOD3_TRANSPOSE_REVERSE
=====================================================================================
EXACT SYNC RANGE: F0725 – F0918 (24.160s – 30.600s · Words 47..54)
SPOKEN TEXT: "Method three transposes, then reverses every row."
KIT COMPONENTS:
  - RoughBox (Row 3 container outline: stroke=theme.gold, seed=123)
  - ChalkText (Method 3 title & description)
WHAT APPEARS NOW:
  - Row 3 reveals at Y: 460 (X: 140..1780, width: 1640, height: 110):
    - Left: "METHOD 3: TRANSPOSE + REVERSE ROWS" via ChalkText (fontSize: 18, color: theme.gold).
    - Center: "Algebraic decomposition: 1. Transpose matrix across main diagonal (r < c), then 2. Reverse each row." via ChalkText (fontSize: 14, color: theme.chalkSub).
CENTER-STAGE HERO: Method 3 architecture row.
CAUSE: Spoken explanation of Method 3's two-step algebraic transformation.
EFFECT / MOTION: Row 3 RoughBox sketches on; gold accent glows.
WHAT MUST NOT APPEAR YET: Method 3 complexity badges, conclusion banner.
COMPREHENSION HOLD: F897 – F918.
CLEANUP / EXIT: Row 3 body settles.
PERSISTENT STATE: Method 3 mechanism established.

=====================================================================================
ANCHOR 07: S12_METHOD3_COMPLEXITY
=====================================================================================
EXACT SYNC RANGE: F0919 – F1064 (30.630s – 35.467s · Words 55..63)
SPOKEN TEXT: "Time, O of n squared, extra space, O of one."
KIT COMPONENTS:
  - RoughBox (Time badge in theme.cyan, Space badge in theme.good)
  - ChalkText (Time and Space Big-O values)
WHAT APPEARS NOW:
  - On the right side of Row 3:
    - Time Badge at F919: RoughBox (width: 170, height: 44, stroke: theme.cyan) with "TIME: O(N²)"
    - Space Badge at F986: RoughBox (width: 260, height: 44, stroke: theme.good) with "SPACE: O(1) [OPTIMAL & CLEANEST ✓]" in emerald green.
CENTER-STAGE HERO: Method 3 complexity evaluation (highlighting optimal elegance).
CAUSE: Narration states O(N²) time and O(1) extra space.
EFFECT / MOTION: Time and space badges draw on; green checkmark glows brightly.
WHAT MUST NOT APPEAR YET: Conclusion banner.
COMPREHENSION HOLD: F1047 – F1064.
CLEANUP / EXIT: All three method rows now fully visible.
PERSISTENT STATE: All three methods compared on time and space.

=====================================================================================
ANCHOR 08: S12_CONCLUSION_IN_PLACE_WINNERS
=====================================================================================
EXACT SYNC RANGE: F1065 – F1219 (35.500s – 40.640s · Words 64..74)
SPOKEN TEXT: "So both in-place methods have the required constant extra space."
KIT COMPONENTS:
  - RoughBox (Master conclusion banner: stroke=theme.good, strokeWidth=3, seed=124)
  - ChalkText ("CONCLUSION: Both In-Place Solutions Meet The Constant Extra Space Requirement")
  - Captions
WHAT APPEARS NOW:
  - Master Conclusion Banner draws on at Y: 600 (X: 140..1780, width: 1640, height: 85):
    - Border: RoughBox with stroke: theme.good, strokeWidth: 3.
    - Title: "★ IN-PLACE EVALUATION: BOTH METHOD 2 & METHOD 3 ACHIEVE OPTIMAL O(1) SPACE" via ChalkText in theme.good.
    - Subtitle: "Method 3 is recommended in interviews for its simpler, bug-free implementation without four-way index bookkeeping." via ChalkText in theme.chalkText.
  - Rows 2 and 3 pulse with a gentle emerald/gold highlight.
  - Row 1 dims to 40% opacity as the suboptimal out-of-place approach.
CENTER-STAGE HERO: Final in-place victory conclusion banner.
CAUSE: Spoken synthesis confirming both in-place methods meet the problem constraints.
EFFECT / MOTION: Green banner draws on; triumphant golden pulse across the board.
WHAT MUST NOT APPEAR YET: Next scene elements (Scene 13 recap & roadmap).
COMPREHENSION HOLD: F1190 – F1219 (clean ending hold).
CLEANUP / EXIT: Pristine settle before cut to Scene 13.
PERSISTENT STATE: Scene 12 complete and verified.
=====================================================================================
```

---

### Critical Review Frame Manifest

| Frame | Label | Visual State to Inspect |
|---|---|---|
| `F0060` | ENTRY | Top bar metadata, header "ALGORITHMIC COMPARISON", blank comparison area |
| `F0180` | METHOD 1 MECHANISM | Row 1 RoughBox outline appears; Method 1 extra matrix text |
| `F0300` | METHOD 1 TIME | Row 1 Time badge O(N²) appears |
| `F0350` | METHOD 1 SPACE | Row 1 Space badge O(N²) [FAILS IN-PLACE ✗] in amber/red |
| `F0450` | METHOD 2 MECHANISM | Row 2 RoughBox outline appears; 4-way layer cycles text |
| `F0600` | METHOD 2 TIME | Row 2 Time badge O(N²) appears |
| `F0660` | METHOD 2 SPACE | Row 2 Space badge O(1) [IN-PLACE ✓] in emerald green |
| `F0780` | METHOD 3 MECHANISM | Row 3 RoughBox outline appears; Transpose + Reverse text |
| `F0940` | METHOD 3 TIME | Row 3 Time badge O(N²) appears |
| `F1020` | METHOD 3 SPACE | Row 3 Space badge O(1) [OPTIMAL & CLEANEST ✓] in emerald green |
| `F1120` | CONCLUSION BANNER | Master Conclusion Banner appears at Y: 600 in glowing emerald green |
| `F1200` | FINAL HARMONY | All 3 rows + Conclusion banner visible; Row 1 dimmed; > 270px caption clearance |

---

### Invariant Checks & Verification Gates

1. **Total Duration:** Exactly 1,219 frames @ 30 FPS (40.640s), matching `sync/12-complexity.json`.
2. **Strict Zero-Spoiler Rule:** Every method row and Big-O badge appears strictly at its spoken anchor.
3. **Kit Component Purity:** 100% `@dsa/kit` components (`RoughBox`, `ChalkText`, `RoughLine`, `Captions`, `theme`, `fonts`). ZERO ad-hoc HTML container cards.
4. **Spatial Clearance:** Conclusion banner ends at Y: 685. Captions at Y: 960..1010. Breathing clearance = 275px (> 200px invariant).
5. **No-Guess Sync:** All 8 anchors derived directly from word start/end timestamps in `sync/12-complexity.json`.
