# Q11 — Sort Colors (LC 75)
# Scene 02 · Question + Understand
## EXACT AUDIO-SYNCHRONIZED FRAME-WISE PLAN — NO GUESSED FRAMES

**Course:** Code With Animation  
**Problem:** Q011 · Sort Colors · LeetCode 75 · Medium  
**Pattern:** 01 · Arrays & Hashing  
**Audio File:** `questions/01-arrays-hashing/011-sort-colors/audio/02-understand.mp3`  
**Exact Sync File:** `questions/01-arrays-hashing/011-sort-colors/sync/02-understand.json`  
**Anchor Manifest:** `questions/01-arrays-hashing/011-sort-colors/sync/02-understand.anchors.json`  
**FPS:** 30  
**Exact Total Frames:** 2,323 frames (77.420 seconds)  
**Total Spoken Words:** 156 words (`W0000` to `W0155`)  
**Total Anchors:** 45 semantic anchors (`S02_UNDERSTAND` to `S02_SIMPLE_APPROACH`)  

---

## 1. Mandatory Scene Contract

```text
SCENE: 02-understand
QUESTION: 011 · Sort Colors (LeetCode 75)
BEAT TYPE: PROBLEM UNDERSTANDING & MASTER ARRAY REVEAL
AUDIO FILE: audio/02-understand.mp3
SYNC FILE: sync/02-understand.json
ANCHORS FILE: sync/02-understand.anchors.json
FPS: 30
TOTAL FRAMES: 2323
PEDAGOGICAL GOAL:
- Establish problem statement: arrange a 10-element array containing only values {0, 1, 2} in non-decreasing order.
- Visually encode the fundamental color mapping of LeetCode 75 Sort Colors:
    * 0 = Coral Red (#FF7675 / theme.warn)
    * 1 = Warm White (#F8F6F0 / theme.chalkText)
    * 2 = Ice Cyan / Blue (#5CE1E6 / theme.cyan)
- Reveal 10 fixed empty Array V2 slots; introduce allowed value domain {0, 1, 2}.
- Write master testcase [2, 1, 2, 0, 2, 1, 0, 1, 0, 2] one value per spoken word into fixed slots with semantic color encoding.
- Reveal target state [0, 0, 0, 1, 1, 1, 2, 2, 2, 2] as a specification requirement (no physical sorting animation).
- Teach two hard constraints: (1) in-place modification (SAME ARRAY), (2) no built-in sort function (sort(nums) struck out).
- Expose the follow-up challenge: one pass + O(1) constant extra space.
- Highlight the pivotal domain clue: array contains only 3 possible values (finite discrete domain k = 3).
- Seamless representation handoff into Scene 03 (Counting Sort) with unchanged array geometry.

REUSE:
- ChalkboardBackground, ChalkFilters (@dsa/kit/lib/chalk)
- theme, fonts (@dsa/kit/lib/theme)
- EASE, fadeIn, pop (@dsa/kit/lib/anim)
- RoughBox, RoughLine, ChalkDust (@dsa/kit/components)
- Captions (@dsa/kit/components/Captions)
- ArrayTrackV2, ArraySlotV2, ArrayValueV2, ArrayIndexRowV2 (@dsa/kit/components/array)

EXTEND:
- Value Color Mapping System:
    * 0 -> Coral Red text + subtle red wash (theme.warn)
    * 1 -> Warm White text + neutral wash (theme.chalkText)
    * 2 -> Ice Cyan text + blue wash (theme.cyan)
- Dual-track layout (Input Array Y: 440, Target Requirement Rail Y: 660)
- Struck-out built-in sort code badge sort(nums) with rough red diagonal line
- Single sweep tracer path S4 TRACE_PATH for one-pass concept across slots 0..9
- Multi-ray connector lines from array values to domain tokens {0, 1, 2}

CREATE:
- sync/02-understand.anchors.json (Authoritative anchor manifest)
- plans/02-understand_FRAMEWISE_PLAN.md (This exhaustive frame-wise choreography)
- plans/02-understand_FRAME_QA_CHECKLIST.md (Frame verification checkpoints)

DO NOT TOUCH:
- @dsa/kit core libraries
- Q010 regression reference source files
- sync/02-understand.json (immutable source of truth)

FORBIDDEN IN SCENE 02:
- No fade to black or second title card / intro splash
- No pre-populating array values before they are spoken
- No physical sorting motion between input and target
- No counters (count0, count1, count2) — strictly belongs to Scene 03
- No pointers (low, mid, high) — strictly belongs to Scene 06/07
- No Dutch National Flag partition algorithm execution
- No generic SaaS cards, dashboard panels, or new raw colors
- No CSS transitions, CSS animations, or non-deterministic Math.random()
```

---

## 2. Color Identity & Design Grammar for "Sort Colors"

In LeetCode 75, numbers represent concrete colors (Red, White, Blue):
```text
┌───────┬──────────────┬───────────────┬────────────────────────────────────────┐
│ Value │ Color Name   │ Palette Token │ Hex / Styling Role                     │
├───────┼──────────────┼───────────────┼────────────────────────────────────────┤
│   0   │ Red (Coral)  │ theme.warn    │ #FF7675 · Coral Terracotta Red         │
│   1   │ White (Warm) │ theme.chalkText│ #F8F6F0 · Antique Warm Chalk White    │
│   2   │ Blue (Cyan)  │ theme.cyan    │ #5CE1E6 · Ice Blue Cyan Chalk          │
└───────┴──────────────┴───────────────┴────────────────────────────────────────┘
```
**Why this matters for Scene 02:**
The user explicitly requires that `0`, `1`, and `2` immediately reveal their distinct color personalities when they land in the array slots. When the learner sees the mixed array `[2, 1, 2, 0, 2, 1, 0, 1, 0, 2]`, they immediately perceive a chaotic jumble of Blue, White, and Red cards. When the target rail `[0, 0, 0, 1, 1, 1, 2, 2, 2, 2]` appears, they instantly recognize the clean separation into Red block, White block, and Blue block.

---

## 3. Global Optical Stage Geometry (1920 × 1080)

```text
Canvas: 1920 × 1080 (16:9), Background: ChalkboardBackground (#19523C) with ambient ChalkDust

Top Zone (Y: 40 .. 160):
  - Compact Q11 Header: "QUESTION 011 · SORT COLORS · LC 75 · MEDIUM" (Y: 80 .. 120)
  - Domain Badge / Clue Bar: (Y: 180 .. 260 during domain & clue beats)

Hero Input Array Stage (Y: 380 .. 520):
  - 10 fixed slots: Width 100px, Height 96px, Gap 14px
  - Total row width = 10 × 100 + 9 × 14 = 1126px
  - Start X = (1920 - 1126) / 2 = 397px
  - Center Y = 440px
  - Slot positions:
      Slot 0: X 397     Slot 5: X 967
      Slot 1: X 511     Slot 6: X 1081
      Slot 2: X 625     Slot 7: X 1195
      Slot 3: X 739     Slot 8: X 1309
      Slot 4: X 853     Slot 9: X 1423
  - Index Row (Y: 550): Font 20px monospace, color theme.chalkDim

Target Requirement Stage (Y: 630 .. 760, active during comparison beats):
  - 10 identical geometry slots at Center Y = 680px
  - Left partition (0s): Slots 0..2 (Width 328px)
  - Middle partition (1s): Slots 3..5 (Width 328px)
  - Right partition (2s): Slots 6..9 (Width 442px)

Callout / Constraints Zone (Y: 780 .. 910):
  - In-Place modification indicator & struck-out sort(nums) badge
  - Follow-up challenge container: ONE-PASS + O(1) EXTRA SPACE

Bottom Caption Zone (Y: 960 .. 1040):
  - Full-width karaoke caption bar powered by exact word sync
```

---

## 4. Master Audio Anchor Manifest (All 45 Anchors)

| Anchor ID | Word Range | Start Frame | End Frame | Spoken Phrase | Pause Duration | Pedagogical Role |
|---|---|---|---|---|---|---|
| `S02_UNDERSTAND` | W0000–W0004 | F0 | F51 | "Now let's understand the question." | 23F (F51–F74) | Settle Q11 identity; open stage |
| `S02_ARRAY` | W0005–W0009 | F74 | F112 | "We are given an array," | 28F (F112–F140) | Reveal 10 fixed empty Array V2 slots |
| `S02_ONLY_THREE` | W0010–W0019 | F140 | F237 | "and every value is only one of these three numbers," | 16F (F237–F253) | Domain container appears; array dims |
| `S02_ZERO` | W0020 | F253 | F269 | "0," | 20F (F269–F289) | Token 0 writes in with Coral Red chalk |
| `S02_ONE` | W0021 | F289 | F307 | "1," | 10F (F307–F317) | Token 1 writes in with Warm White chalk |
| `S02_TWO` | W0022–W0023 | F317 | F334 | "or 2." | 25F (F334–F359) | Token 2 writes in with Ice Cyan chalk |
| `S02_ARRANGE_SAME` | W0024–W0031 | F359 | F426 | "Our job is to arrange the same array," | 11F (F426–F437) | Ghost target rail appears; SAME ARRAY |
| `S02_ZEROES_FIRST` | W0032–W0037 | F437 | F497 | "so that all zeros come first," | 6F (F497–F503) | Target rail left group: ALL 0s FIRST |
| `S02_ONES_NEXT` | W0038–W0040 | F503 | F529 | "then all ones," | 12F (F529–F541) | Target rail center group: ALL 1s NEXT |
| `S02_TWOS_LAST` | W0041–W0044 | F541 | F590 | "and finally all twos." | 15F (F590–F605) | Target rail right group: ALL 2s LAST |
| `S02_MASTER_EXAMPLE` | W0045–W0053 | F605 | F686 | "For this lesson, we will use one master example." | 6F (F686–F692) | Spotlight 10 empty slots with indices |
| `S02_M0` | W0054 | F692 | F702 | "Two?" | 13F (F702–F715) | Master input idx 0 = 2 (Ice Cyan) |
| `S02_M1` | W0055 | F715 | F728 | "One." | 8F (F728–F736) | Master input idx 1 = 1 (Warm White) |
| `S02_M2` | W0056 | F736 | F748 | "Two." | 12F (F748–F760) | Master input idx 2 = 2 (Ice Cyan) |
| `S02_M3` | W0057 | F760 | F770 | "Zero." | 15F (F770–F785) | Master input idx 3 = 0 (Coral Red) |
| `S02_M4` | W0058 | F785 | F793 | "Two." | 15F (F793–F808) | Master input idx 4 = 2 (Ice Cyan) |
| `S02_M5` | W0059 | F808 | F817 | "One." | 10F (F817–F827) | Master input idx 5 = 1 (Warm White) |
| `S02_M6` | W0060 | F827 | F839 | "Zero." | 13F (F839–F852) | Master input idx 6 = 0 (Coral Red) |
| `S02_M7` | W0061 | F852 | F861 | "One." | 10F (F861–F871) | Master input idx 7 = 1 (Warm White) |
| `S02_M8` | W0062 | F871 | F886 | "Zero." | 0F (seamless) | Master input idx 8 = 0 (Coral Red) |
| `S02_M9` | W0063 | F886 | F904 | "Two." | 13F (F904–F917) | Master input idx 9 = 2 (Ice Cyan) |
| `S02_TARGET` | W0064–W0069 | F917 | F956 | "We want this array to become" | 0F (seamless) | Activate target rail below input |
| `S02_T0A` | W0070 | F956 | F977 | "0," | 12F (F977–F989) | Target idx 0 = 0 (Coral Red) |
| `S02_T0B` | W0071 | F989 | F1004 | "0," | 9F (F1004–F1013) | Target idx 1 = 0 (Coral Red) |
| `S02_T0C` | W0072 | F1013 | F1030 | "0," | 4F (F1030–F1034) | Target idx 2 = 0 (Coral Red) |
| `S02_T1A` | W0073 | F1034 | F1048 | "1," | 9F (F1048–F1057) | Target idx 3 = 1 (Warm White) |
| `S02_T1B` | W0074 | F1057 | F1071 | "1," | 2F (F1071–F1073) | Target idx 4 = 1 (Warm White) |
| `S02_T1C` | W0075 | F1073 | F1089 | "1," | 1F (F1089–F1090) | Target idx 5 = 1 (Warm White) |
| `S02_T2A` | W0076 | F1090 | F1105 | "2," | 4F (F1105–F1109) | Target idx 6 = 2 (Ice Cyan) |
| `S02_T2B` | W0077 | F1109 | F1127 | "2," | 3F (F1127–F1130) | Target idx 7 = 2 (Ice Cyan) |
| `S02_T2C` | W0078 | F1130 | F1148 | "2," | 0F (seamless) | Target idx 8 = 2 (Ice Cyan) |
| `S02_T2D` | W0079 | F1148 | F1160 | "2." | 9F (F1160–F1169) | Target idx 9 = 2 (Ice Cyan) |
| `S02_TWO_CONDITIONS`| W0080–W0084 | F1169 | F1217 | "There are two important conditions." | 15F (F1217–F1232)| Markers 1 and 2 appear; open constraints |
| `S02_FIRST` | W0085 | F1232 | F1244 | "First," | 17F (F1244–F1261)| Focus marker 1 |
| `S02_SAME_ARRAY` | W0086–W0092 | F1261 | F1325 | "we have to modify the same array." | 25F (F1325–F1350)| IN-PLACE MODIFICATION rule |
| `S02_SECOND` | W0093 | F1350 | F1365 | "Second," | 16F (F1365–F1381)| Focus marker 2 |
| `S02_NO_BUILTIN` | W0094–W0102 | F1381 | F1467 | "we should not use a built -in sorting function." | 19F (F1467–F1486)| sort(nums) struck out with red chalk line |
| `S02_FOLLOWUP` | W0103–W0108 | F1486 | F1538 | "And then comes the follow -up." | 12F (F1538–F1550)| FOLLOW-UP challenge banner appears |
| `S02_ONE_PASS` | W0109–W0115 | F1550 | F1610 | "Can we solve it in one pass" | 0F (seamless) | Single sweep tracer path S4 TRACE_PATH |
| `S02_CONST_SPACE` | W0116–W0119 | F1610 | F1689 | "using constant extra space?" | 30F (F1689–F1719)| O(1) EXTRA SPACE memory footprint box |
| `S02_REAL_CHALLENGE`| W0120–W0127 | F1719 | F1811 | "That is the real challenge of this problem." | 29F (F1811–F1840)| ONE-PASS + O(1) unified challenge lock |
| `S02_OBSERVATION` | W0128–W0131 | F1840 | F1913 | "One more important observation." | 27F (F1913–F1940)| Clutter recedes; observation clue icon |
| `S02_THREE_VALUES` | W0132–W0139 | F1940 | F2061 | "The array can contain only three possible values." | 25F (F2061–F2086)| Triad tokens + multi-ray connector lines |
| `S02_MAIN_CLUE` | W0140–W0146 | F2086 | F2169 | "That small detail is the main clue." | 31F (F2169–F2200)| THE MAIN CLUE: FINITE DISCRETE DOMAIN |
| `S02_SIMPLE_APPROACH`| W0147–W0155 | F2200 | F2323 | "Now, we can start with the simpler approach first." | Hold to F2323 | Hand master array into Scene 03 |

---

## 5. Exhaustive Frame-Wise Choreography (Beats 1 through 45)

### ACT 1: Problem Opener & Array Shell (Beats 1–2 · F0 – F140)

--------------------------------------------------
#### BEAT 1 / ANCHOR `S02_UNDERSTAND` (F0 – F51, pause to F74)
--------------------------------------------------
- **WHAT APPEARS NOW:**
  * Clean continuity from Scene 01. Compact Header at top (`QUESTION 011 · SORT COLORS · LC 75 · MEDIUM`, Y: 100).
  * Faint chalk alignment baseline draws horizontally across the center stage (Y: 440, X: 397 to X: 1523).
  * Subtle ambient chalk dust particle field (`ChalkDust`).
  * Word-synced karaoke captions at Y: 980: *"Now let's understand the question."* (W0000–W0004).
- **CENTER-STAGE HERO:**
  * The pristine, open chalkboard stage centering viewer attention for the problem definition.
- **CAUSE:**
  * Spoken transition from Master Roadmap into the algorithmic problem statement.
- **EFFECT / MOTION:**
  * F0–F25: Header smoothly settles into place with soft opacity fade (0 → 1).
  * F10–F42: Chalk baseline stroke draws from left to right across X: 397 to 1523 using `RoughLine` with `EASE.easeOutCubic`.
  * Camera remains completely stationary at scale `1.000`.
- **WHAT MUST NOT APPEAR YET:**
  * No array slots, no array values, no indices, no domain badges, no target rail, no constraint callouts.
- **COMPREHENSION HOLD:**
  * F51–F74 (23 frames, 760ms pause P01): Sacred silence allowing learner to orient on the clean board.
- **CLEANUP / EXIT:**
  * Baseline settles into the fixed slot alignment track.
- **PERSISTENT STATE:**
  * Top header locked at Y: 100; chalk baseline guide locked at Y: 440.

--------------------------------------------------
#### BEAT 2 / ANCHOR `S02_ARRAY` (F74 – F112, pause to F140)
--------------------------------------------------
- **WHAT APPEARS NOW:**
  * 10 fixed empty `ArraySlotV2` shells appear sequentially from left to right along Y: 440 (X: 397 to 1523, size 100×96, gap 14).
  * Chalk label above the array at Y: 360: `"INPUT ARRAY · nums"`.
  * Word-synced captions: *"We are given an array,"* (W0005–W0009).
- **CENTER-STAGE HERO:**
  * The 10 empty fixed array slots forming the permanent memory foundation for the entire problem.
- **CAUSE:**
  * Spoken introduction of the data structure: *"We are given an array,"*.
- **EFFECT / MOTION:**
  * F76–F108: Staggered slot reveal. Each slot pops in with 3-frame delay:
    Slot 0 at F76, Slot 1 at F79, Slot 2 at F82, Slot 3 at F85, Slot 4 at F88,
    Slot 5 at F91, Slot 6 at F94, Slot 7 at F97, Slot 8 at F100, Slot 9 at F103.
  * Slot borders draw with crisp chalk outline (`cardBorder`, opacity 0.75).
- **WHAT MUST NOT APPEAR YET:**
  * Absolutely NO values inside the slots!
  * Indices remain invisible or faded to 0% opacity (indices must not distract from slot geometry).
  * No target rail.
- **COMPREHENSION HOLD:**
  * F112–F140 (28 frames, 920ms pause P02): Learner absorbs the 10-slot fixed structure and size.
- **CLEANUP / EXIT:**
  * Slot borders settle to steady state.
- **PERSISTENT STATE:**
  * 10 fixed empty array slot frames at Y: 440; label `"INPUT ARRAY · nums"` at Y: 360.

---

### ACT 2: Allowed Value Domain {0, 1, 2} (Beats 3–6 · F140 – F359)

--------------------------------------------------
#### BEAT 3 / ANCHOR `S02_ONLY_THREE` (F140 – F237, pause to F253)
--------------------------------------------------
- **WHAT APPEARS NOW:**
  * Domain badge container at Y: 230: `"ALLOWED VALUES: { ... }"`.
  * Three empty circular chalk token slots (width 60px each) appear inside the domain container.
  * Captions: *"and every value is only one of these three numbers,"* (W0010–W0019).
- **CENTER-STAGE HERO:**
  * The Domain Container at Y: 230 highlighting the severe constraint on element values.
- **CAUSE:**
  * Narration explicitly narrows the universe of allowed values to exactly three possibilities.
- **EFFECT / MOTION:**
  * F145–F185: The empty array slots at Y: 440 smoothly dim from opacity 1.0 to 0.40.
  * F160–F210: Domain container border draws with `RoughBox` (gold sheen `theme.pivot` at 0.5 opacity).
  * Three dashed placeholder circles pop in at X: 860, 960, 1060.
- **WHAT MUST NOT APPEAR YET:**
  * The actual digits `0`, `1`, `2` must NOT appear until each word is spoken!
  * No target rail.
- **COMPREHENSION HOLD:**
  * F237–F253 (16 frames, 520ms pause P03): Visual focus locked on the 3 empty domain shells.
- **CLEANUP / EXIT:**
  * Domain container settles in upper center stage.
- **PERSISTENT STATE:**
  * Domain container active at Y: 230 with 3 empty placeholder spots; array dimmed to 40% at Y: 440.

--------------------------------------------------
#### BEAT 4 / ANCHOR `S02_ZERO` (F253 – F269, pause to F289)
--------------------------------------------------
- **WHAT APPEARS NOW:**
  * Chalk glyph `"0"` in vibrant **Coral Red** (`#FF7675` / `theme.warn`) appears in the first domain circle (X: 860).
  * Small color subscript underneath: `"RED"` (font size 18px, color: `theme.warn`).
  * Captions: *"0,"* (W0020).
- **CENTER-STAGE HERO:**
  * Domain token `"0"` (Red).
- **CAUSE:**
  * Exact spoken word: *"0,"*.
- **EFFECT / MOTION:**
  * F253–F265: Token `"0"` scales 0.7 → 1.05 → 1.0 with a crisp chalk pop.
  * Red chalk circle fills with soft translucent terracotta wash (`rgba(255, 118, 117, 0.15)`).
- **WHAT MUST NOT APPEAR YET:**
  * Tokens `1` or `2`.
  * No array values.
- **COMPREHENSION HOLD:**
  * F269–F289 (20 frames, 680ms pause P04): Direct visual lock on value 0 = Red.
- **CLEANUP / EXIT:**
  * Token 0 stabilizes.
- **PERSISTENT STATE:**
  * Domain circle 1 holds `"0"` (Red). Circles 2 and 3 remain empty dashed shells.

--------------------------------------------------
#### BEAT 5 / ANCHOR `S02_ONE` (F289 – F307, pause to F317)
--------------------------------------------------
- **WHAT APPEARS NOW:**
  * Chalk glyph `"1"` in **Warm Chalk White** (`#F8F6F0` / `theme.chalkText`) appears in the second domain circle (X: 960).
  * Small color subscript underneath: `"WHITE"` (font size 18px, color: `theme.chalkText`).
  * Captions: *"1,"* (W0021).
- **CENTER-STAGE HERO:**
  * Domain token `"1"` (White).
- **CAUSE:**
  * Exact spoken word: *"1,"*.
- **EFFECT / MOTION:**
  * F289–F301: Token `"1"` scales 0.7 → 1.05 → 1.0 with chalk pop.
  * White chalk circle fills with translucent alabaster wash (`rgba(248, 246, 240, 0.15)`).
- **WHAT MUST NOT APPEAR YET:**
  * Token `2`.
  * No array values.
- **COMPREHENSION HOLD:**
  * F307–F317 (10 frames, 360ms pause P05): Visual lock on the pair `[0, 1]`.
- **CLEANUP / EXIT:**
  * Token 1 stabilizes.
- **PERSISTENT STATE:**
  * Domain circles 1 and 2 hold `"0"` (Red) and `"1"` (White). Circle 3 remains empty.

--------------------------------------------------
#### BEAT 6 / ANCHOR `S02_TWO` (F317 – F334, pause to F359)
--------------------------------------------------
- **WHAT APPEARS NOW:**
  * Chalk glyph `"2"` in **Ice Cyan / Blue** (`#5CE1E6` / `theme.cyan`) appears in the third domain circle (X: 1060).
  * Small color subscript underneath: `"BLUE"` (font size 18px, color: `theme.cyan`).
  * Captions: *"or 2."* (W0022–W0023).
- **CENTER-STAGE HERO:**
  * The complete tripartite domain `{ 0: Red, 1: White, 2: Blue }`.
- **CAUSE:**
  * Exact spoken phrase: *"or 2."*.
- **EFFECT / MOTION:**
  * F317–F328: Token `"2"` scales 0.7 → 1.05 → 1.0 with chalk pop.
  * Cyan chalk circle fills with translucent ice wash (`rgba(92, 225, 230, 0.15)`).
  * F329–F345: The entire domain container border flashes with a subtle golden chalk shimmer (`theme.pivot`).
- **WHAT MUST NOT APPEAR YET:**
  * No array values; no target rail.
- **COMPREHENSION HOLD:**
  * F334–F359 (25 frames, 840ms pause P06): Vital comprehension hold solidifying the fundamental 3-color mapping.
- **CLEANUP / EXIT:**
  * F355–F359: Domain container begins smooth upward fade-out.
- **PERSISTENT STATE:**
  * Learner firmly understands: only {0 (Red), 1 (White), 2 (Blue)} exist in this entire problem universe.

---

### ACT 3: Required Output Ordering Concept (Beats 7–10 · F359 – F605)

--------------------------------------------------
#### BEAT 7 / ANCHOR `S02_ARRANGE_SAME` (F359 – F426, pause to F437)
--------------------------------------------------
- **WHAT APPEARS NOW:**
  * Domain container fades out (opacity 1.0 → 0.0 over F359–F380).
  * Input array at Y: 440 returns to full 100% opacity.
  * Ghost Target Rail outline appears below at Y: 680 (10 slots matching input geometry exactly).
  * A vertical chalk relation bracket connecting input and target labeled `"SAME ARRAY"` appears at left (X: 340).
  * Captions: *"Our job is to arrange the same array,"* (W0024–W0031).
- **CENTER-STAGE HERO:**
  * The dual-rail relationship: Input Array (Y: 440) and Ghost Target Rail (Y: 680).
- **CAUSE:**
  * Narration defines the core transformation objective: rearrange the *same* array.
- **EFFECT / MOTION:**
  * F365–F405: Input array slots brighten to full opacity.
  * F380–F420: Ghost target rail draws with dashed chalk strokes (`cardBorder`, 0.45 opacity).
  * F390–F425: Relation bracket draws downwards from Y: 440 to Y: 680 with chalk flourish.
- **WHAT MUST NOT APPEAR YET:**
  * Concrete values inside the target rail; partition labels.
- **COMPREHENSION HOLD:**
  * F426–F437 (11 frames, 380ms pause P07): Viewer digests the dual-rail target relationship.
- **CLEANUP / EXIT:**
  * Relation bracket locks into place.
- **PERSISTENT STATE:**
  * Input array (Y: 440) and Ghost Target Rail (Y: 680) both visible; "SAME ARRAY" relation active.

--------------------------------------------------
#### BEAT 8 / ANCHOR `S02_ZEROES_FIRST` (F437 – F497, pause to F503)
--------------------------------------------------
- **WHAT APPEARS NOW:**
  * Left partition bracket under target slots 0..2 with chalk label: `"ALL 0s FIRST (RED)"`.
  * Subtle coral red wash (`rgba(255, 118, 117, 0.12)`) illuminates target slots 0, 1, 2.
  * Captions: *"so that all zeros come first,"* (W0032–W0037).
- **CENTER-STAGE HERO:**
  * Target rail left partition (slots 0..2).
- **CAUSE:**
  * Spoken ordering requirement for zeroes: *"so that all zeros come first,"*.
- **EFFECT / MOTION:**
  * F440–F475: Bracket draws under slots 0..2 using `RoughLine` in `theme.warn`.
  * F460–F490: Soft coral wash fades into the background of slots 0..2.
- **WHAT MUST NOT APPEAR YET:**
  * 1s partition, 2s partition; concrete values.
- **COMPREHENSION HOLD:**
  * F497–F503 (6 frames, 220ms pause P08): Visual lock on the red zeroes prefix.
- **CLEANUP / EXIT:**
  * Bracket settles.
- **PERSISTENT STATE:**
  * Target slots 0..2 highlighted as the 0s region.

--------------------------------------------------
#### BEAT 9 / ANCHOR `S02_ONES_NEXT` (F503 – F529, pause to F541)
--------------------------------------------------
- **WHAT APPEARS NOW:**
  * Middle partition bracket under target slots 3..5 with chalk label: `"THEN ALL 1s (WHITE)"`.
  * Subtle warm white wash (`rgba(248, 246, 240, 0.12)`) illuminates target slots 3, 4, 5.
  * Captions: *"then all ones,"* (W0038–W0040).
- **CENTER-STAGE HERO:**
  * Target rail middle partition (slots 3..5).
- **CAUSE:**
  * Spoken ordering requirement for ones: *"then all ones,"*.
- **EFFECT / MOTION:**
  * F505–F525: Bracket draws under slots 3..5 using `RoughLine` in `theme.chalkText`.
  * F512–F528: Warm white wash fades into slots 3..5.
- **WHAT MUST NOT APPEAR YET:**
  * 2s partition.
- **COMPREHENSION HOLD:**
  * F529–F541 (12 frames, 380ms pause P09): Visual lock on the middle ones section.
- **CLEANUP / EXIT:**
  * Bracket settles.
- **PERSISTENT STATE:**
  * Target rail has 0s partition (slots 0..2) and 1s partition (slots 3..5).

--------------------------------------------------
#### BEAT 10 / ANCHOR `S02_TWOS_LAST` (F541 – F590, pause to F605)
--------------------------------------------------
- **WHAT APPEARS NOW:**
  * Right partition bracket under target slots 6..9 with chalk label: `"FINALLY ALL 2s (BLUE)"`.
  * Subtle ice cyan wash (`rgba(92, 225, 230, 0.12)`) illuminates target slots 6, 7, 8, 9.
  * Captions: *"and finally all twos."* (W0041–W0044).
- **CENTER-STAGE HERO:**
  * The complete tri-color partitioned target rail `[ RED 0s | WHITE 1s | BLUE 2s ]`.
- **CAUSE:**
  * Spoken ordering requirement for twos: *"and finally all twos."*.
- **EFFECT / MOTION:**
  * F545–F575: Bracket draws under slots 6..9 using `RoughLine` in `theme.cyan`.
  * F555–F585: Ice cyan wash fills slots 6..9.
- **WHAT MUST NOT APPEAR YET:**
  * Master testcase input numbers; counting algorithm.
- **COMPREHENSION HOLD:**
  * F590–F605 (15 frames, 520ms pause P10): Complete conceptual grasp of the required sorted state.
- **CLEANUP / EXIT:**
  * F600–F605: Target rail and brackets begin soft fade to make room for concrete input values.
- **PERSISTENT STATE:**
  * Mental model established: Output must be non-decreasing: Red prefix -> White middle -> Blue suffix.

---

### ACT 4: Master Testcase Input Population (Beats 11–21 · F605 – F917)

--------------------------------------------------
#### BEAT 11 / ANCHOR `S02_MASTER_EXAMPLE` (F605 – F686, pause to F692)
--------------------------------------------------
- **WHAT APPEARS NOW:**
  * Target rail fades out completely (opacity 1.0 → 0.0 over F605–F635).
  * Input array label updates to `"MASTER TESTCASE (n = 10)"` with gold chalk underline (`theme.pivot`).
  * Index Row (`0` to `9`) fades in beneath the 10 input slots at Y: 550 (`ArrayIndexRowV2`, monospace, `theme.chalkDim`).
  * Captions: *"For this lesson, we will use one master example."* (W0045–W0053).
- **CENTER-STAGE HERO:**
  * The 10 empty fixed slots with crisp index labels `0..9`, spotlighted in center stage.
- **CAUSE:**
  * Narration introduces the concrete 10-element master testcase.
- **EFFECT / MOTION:**
  * F610–F645: Target rail gently dissolves.
  * F635–F675: Indices `0` through `9` illuminate sequentially beneath slots 0..9.
  * F650–F680: Gold chalk underline draws under `"MASTER TESTCASE (n = 10)"`.
- **WHAT MUST NOT APPEAR YET:**
  * Crucial invariant: Absolutely NO numbers inside the slots yet!
  * Numbers must appear ONE BY ONE as each word is spoken!
- **COMPREHENSION HOLD:**
  * F686–F692 (6 frames, 200ms pause P11): Anticipation hold before value writing begins.
- **CLEANUP / EXIT:**
  * Ready for word-by-word number entry.
- **PERSISTENT STATE:**
  * 10 fixed empty slots with indices `0..9` active at Y: 440.

--------------------------------------------------
#### BEAT 12 / ANCHOR `S02_M0` (F692 – F702, pause to F715)
--------------------------------------------------
- **WHAT APPEARS NOW:**
  * Slot 0 receives value `"2"` in **Ice Cyan / Blue** (`#5CE1E6` / `theme.cyan`).
  * Captions: *"Two?"* (W0054).
- **CENTER-STAGE HERO:**
  * Slot 0 with value `"2"`.
- **CAUSE:**
  * Spoken word: *"Two?"*.
- **EFFECT / MOTION:**
  * F692–F700: Number `"2"` scales 0.7 → 1.05 → 1.0 inside Slot 0 with chalk strike sound/pop.
  * Slot 0 background glows with soft cyan wash.
- **WHAT MUST NOT APPEAR YET:**
  * Slots 1..9 must remain completely empty!
- **COMPREHENSION HOLD:**
  * F702–F715 (13 frames, 440ms pause P12): Hold on first element.
- **CLEANUP / EXIT:**
  * Slot 0 settles.
- **PERSISTENT STATE:**
  * `nums[0] = 2` (Blue). Slots 1..9 empty.

--------------------------------------------------
#### BEAT 13 / ANCHOR `S02_M1` (F715 – F728, pause to F736)
--------------------------------------------------
- **WHAT APPEARS NOW:**
  * Slot 1 receives value `"1"` in **Warm White** (`#F8F6F0` / `theme.chalkText`).
  * Captions: *"One."* (W0055).
- **CENTER-STAGE HERO:**
  * Slot 1 with value `"1"`.
- **CAUSE:**
  * Spoken word: *"One."*.
- **EFFECT / MOTION:**
  * F715–F724: Number `"1"` scales 0.7 → 1.05 → 1.0 with chalk pop into Slot 1.
- **WHAT MUST NOT APPEAR YET:**
  * Slots 2..9 empty.
- **COMPREHENSION HOLD:**
  * F728–F736 (8 frames, 260ms pause P13).
- **CLEANUP / EXIT:**
  * Settle.
- **PERSISTENT STATE:**
  * `nums[0..1] = [2, 1]`.

--------------------------------------------------
#### BEAT 14 / ANCHOR `S02_M2` (F736 – F748, pause to F760)
--------------------------------------------------
- **WHAT APPEARS NOW:**
  * Slot 2 receives value `"2"` in **Ice Cyan / Blue** (`theme.cyan`).
  * Captions: *"Two."* (W0056).
- **CENTER-STAGE HERO:**
  * Slot 2 with value `"2"`.
- **CAUSE:**
  * Spoken word: *"Two."*.
- **EFFECT / MOTION:**
  * F736–F744: Chalk pop scale into Slot 2; cyan wash.
- **WHAT MUST NOT APPEAR YET:**
  * Slots 3..9 empty.
- **COMPREHENSION HOLD:**
  * F748–F760 (12 frames, 400ms pause P14).
- **CLEANUP / EXIT:**
  * Settle.
- **PERSISTENT STATE:**
  * `nums[0..2] = [2, 1, 2]`.

--------------------------------------------------
#### BEAT 15 / ANCHOR `S02_M3` (F760 – F770, pause to F785)
--------------------------------------------------
- **WHAT APPEARS NOW:**
  * Slot 3 receives value `"0"` in **Coral Red** (`#FF7675` / `theme.warn`).
  * Captions: *"Zero."* (W0057).
- **CENTER-STAGE HERO:**
  * Slot 3 with value `"0"` (first zero encountered!).
- **CAUSE:**
  * Spoken word: *"Zero."*.
- **EFFECT / MOTION:**
  * F760–F768: Chalk pop into Slot 3; vivid coral red wash in slot background.
- **WHAT MUST NOT APPEAR YET:**
  * Slots 4..9 empty.
- **COMPREHENSION HOLD:**
  * F770–F785 (15 frames, 500ms pause P15): Red color visibly contrasts against earlier Blue and White.
- **CLEANUP / EXIT:**
  * Settle.
- **PERSISTENT STATE:**
  * `nums[0..3] = [2, 1, 2, 0]`.

--------------------------------------------------
#### BEAT 16 / ANCHOR `S02_M4` (F785 – F793, pause to F808)
--------------------------------------------------
- **WHAT APPEARS NOW:**
  * Slot 4 receives value `"2"` in **Ice Cyan / Blue** (`theme.cyan`).
  * Captions: *"Two."* (W0058).
- **CENTER-STAGE HERO:**
  * Slot 4 with value `"2"`.
- **CAUSE:**
  * Spoken word: *"Two."*.
- **EFFECT / MOTION:**
  * F785–F792: Chalk pop into Slot 4.
- **WHAT MUST NOT APPEAR YET:**
  * Slots 5..9 empty.
- **COMPREHENSION HOLD:**
  * F793–F808 (15 frames, 500ms pause P16).
- **CLEANUP / EXIT:**
  * Settle.
- **PERSISTENT STATE:**
  * `nums[0..4] = [2, 1, 2, 0, 2]`.

--------------------------------------------------
#### BEAT 17 / ANCHOR `S02_M5` (F808 – F817, pause to F827)
--------------------------------------------------
- **WHAT APPEARS NOW:**
  * Slot 5 receives value `"1"` in **Warm White** (`theme.chalkText`).
  * Captions: *"One."* (W0059).
- **CENTER-STAGE HERO:**
  * Slot 5 with value `"1"`.
- **CAUSE:**
  * Spoken word: *"One."*.
- **EFFECT / MOTION:**
  * F808–F815: Chalk pop into Slot 5.
- **WHAT MUST NOT APPEAR YET:**
  * Slots 6..9 empty.
- **COMPREHENSION HOLD:**
  * F817–F827 (10 frames, 340ms pause P17).
- **CLEANUP / EXIT:**
  * Settle.
- **PERSISTENT STATE:**
  * `nums[0..5] = [2, 1, 2, 0, 2, 1]`.

--------------------------------------------------
#### BEAT 18 / ANCHOR `S02_M6` (F827 – F839, pause to F852)
--------------------------------------------------
- **WHAT APPEARS NOW:**
  * Slot 6 receives value `"0"` in **Coral Red** (`theme.warn`).
  * Captions: *"Zero."* (W0060).
- **CENTER-STAGE HERO:**
  * Slot 6 with value `"0"`.
- **CAUSE:**
  * Spoken word: *"Zero."*.
- **EFFECT / MOTION:**
  * F827–F835: Chalk pop into Slot 6; coral red wash.
- **WHAT MUST NOT APPEAR YET:**
  * Slots 7..9 empty.
- **COMPREHENSION HOLD:**
  * F839–F852 (13 frames, 440ms pause P18).
- **CLEANUP / EXIT:**
  * Settle.
- **PERSISTENT STATE:**
  * `nums[0..6] = [2, 1, 2, 0, 2, 1, 0]`.

--------------------------------------------------
#### BEAT 19 / ANCHOR `S02_M7` (F852 – F861, pause to F871)
--------------------------------------------------
- **WHAT APPEARS NOW:**
  * Slot 7 receives value `"1"` in **Warm White** (`theme.chalkText`).
  * Captions: *"One."* (W0061).
- **CENTER-STAGE HERO:**
  * Slot 7 with value `"1"`.
- **CAUSE:**
  * Spoken word: *"One."*.
- **EFFECT / MOTION:**
  * F852–F859: Chalk pop into Slot 7.
- **WHAT MUST NOT APPEAR YET:**
  * Slots 8..9 empty.
- **COMPREHENSION HOLD:**
  * F861–F871 (10 frames, 320ms pause P19).
- **CLEANUP / EXIT:**
  * Settle.
- **PERSISTENT STATE:**
  * `nums[0..7] = [2, 1, 2, 0, 2, 1, 0, 1]`.

--------------------------------------------------
#### BEAT 20 / ANCHOR `S02_M8` (F871 – F886, 0ms pause)
--------------------------------------------------
- **WHAT APPEARS NOW:**
  * Slot 8 receives value `"0"` in **Coral Red** (`theme.warn`).
  * Captions: *"Zero."* (W0062).
- **CENTER-STAGE HERO:**
  * Slot 8 with value `"0"`.
- **CAUSE:**
  * Spoken word: *"Zero."*.
- **EFFECT / MOTION:**
  * F871–F882: Chalk pop into Slot 8; coral red wash.
- **WHAT MUST NOT APPEAR YET:**
  * Slot 9 empty.
- **COMPREHENSION HOLD:**
  * Seamless 0ms audio transition into word W0063.
- **CLEANUP / EXIT:**
  * Immediate flow into final element.
- **PERSISTENT STATE:**
  * `nums[0..8] = [2, 1, 2, 0, 2, 1, 0, 1, 0]`.

--------------------------------------------------
#### BEAT 21 / ANCHOR `S02_M9` (F886 – F904, pause to F917)
--------------------------------------------------
- **WHAT APPEARS NOW:**
  * Slot 9 receives value `"2"` in **Ice Cyan / Blue** (`theme.cyan`).
  * Captions: *"Two."* (W0063).
  * Master array is now 100% complete: `[2, 1, 2, 0, 2, 1, 0, 1, 0, 2]`.
- **CENTER-STAGE HERO:**
  * The fully populated Master Input Array showing chaotic color alternation:
    `[Blue, White, Blue, Red, Blue, White, Red, White, Red, Blue]`.
- **CAUSE:**
  * Spoken word: *"Two."* concluding the input testcase enumeration.
- **EFFECT / MOTION:**
  * F886–F898: Chalk pop into Slot 9; cyan wash.
  * F899–F915: All 10 slots pulse softly with their respective color glows (Red, White, Blue).
- **WHAT MUST NOT APPEAR YET:**
  * Target array values; counting variables.
- **COMPREHENSION HOLD:**
  * F904–F917 (13 frames, 440ms pause P20): Crucial pause allowing learner to take in the complete master input.
- **CLEANUP / EXIT:**
  * Glows settle to baseline.
- **PERSISTENT STATE:**
  * Fully populated master testcase locked in center stage at Y: 440.

---

### ACT 5: Master Target Array Population (Beats 22–32 · F917 – F1169)

--------------------------------------------------
#### BEAT 22 / ANCHOR `S02_TARGET` (F917 – F956)
--------------------------------------------------
- **WHAT APPEARS NOW:**
  * Target rail reappears below at Y: 680 with 10 empty fixed slots and label: `"TARGET SORTED STATE"`.
  * Downward chalk arrow (`ParametricArrow`, color: `theme.pivot`) points from Input Array (Y: 480) down to Target Rail (Y: 640).
  * Captions: *"We want this array to become"* (W0064–W0069).
- **CENTER-STAGE HERO:**
  * The Target Rail at Y: 680 preparing to receive the sorted values.
- **CAUSE:**
  * Narration introduces the concrete target configuration.
- **EFFECT / MOTION:**
  * F920–F950: 10 target slots draw with dashed chalk borders. Downward arrow draws progress 0 → 1.
- **WHAT MUST NOT APPEAR YET:**
  * Target values before each word is spoken!
- **COMPREHENSION HOLD:**
  * Seamless transition into target values.
- **PERSISTENT STATE:**
  * Input array populated at Y: 440; empty target rail ready at Y: 680.

--------------------------------------------------
#### BEAT 23 / ANCHOR `S02_T0A` (F956 – F977, pause to F989)
--------------------------------------------------
- **WHAT APPEARS NOW:**
  * Target Slot 0 receives value `"0"` in **Coral Red** (`#FF7675` / `theme.warn`).
  * Captions: *"0,"* (W0070).
- **CENTER-STAGE HERO:**
  * Target Slot 0.
- **CAUSE:**
  * Spoken target value: *"0,"*.
- **EFFECT / MOTION:**
  * F956–F968: Number `"0"` writes in with chalk pop into Target Slot 0 with red wash.
- **WHAT MUST NOT APPEAR YET:**
  * Target slots 1..9 empty.
- **COMPREHENSION HOLD:**
  * F977–F989 (12 frames, 400ms pause P21).
- **PERSISTENT STATE:**
  * `target[0] = 0`.

--------------------------------------------------
#### BEAT 24 / ANCHOR `S02_T0B` (F989 – F1004, pause to F1013)
--------------------------------------------------
- **WHAT APPEARS NOW:**
  * Target Slot 1 receives value `"0"` in **Coral Red** (`theme.warn`).
  * Captions: *"0,"* (W0071).
- **CENTER-STAGE HERO:**
  * Target Slot 1.
- **CAUSE:**
  * Spoken target value: *"0,"*.
- **EFFECT / MOTION:**
  * F989–F998: Number `"0"` pop into Target Slot 1.
- **WHAT MUST NOT APPEAR YET:**
  * Target slots 2..9 empty.
- **COMPREHENSION HOLD:**
  * F1004–F1013 (9 frames, 300ms pause P22).
- **PERSISTENT STATE:**
  * `target[0..1] = [0, 0]`.

--------------------------------------------------
#### BEAT 25 / ANCHOR `S02_T0C` (F1013 – F1030, pause to F1034)
--------------------------------------------------
- **WHAT APPEARS NOW:**
  * Target Slot 2 receives value `"0"` in **Coral Red** (`theme.warn`).
  * Bracket appears under target slots 0..2: `"THREE 0s (ALL RED)"`.
  * Captions: *"0,"* (W0072).
- **CENTER-STAGE HERO:**
  * Completed Red block `[0, 0, 0]` in target rail.
- **CAUSE:**
  * Spoken target value: *"0,"* completing all zeroes.
- **EFFECT / MOTION:**
  * F1013–F1024: Number `"0"` pop into Target Slot 2.
  * F1025–F1030: Coral red partition bracket draws under slots 0..2.
- **WHAT MUST NOT APPEAR YET:**
  * Target slots 3..9 empty.
- **COMPREHENSION HOLD:**
  * F1030–F1034 (4 frames, 140ms pause P23).
- **PERSISTENT STATE:**
  * `target[0..2] = [0, 0, 0]`.

--------------------------------------------------
#### BEAT 26 / ANCHOR `S02_T1A` (F1034 – F1048, pause to F1057)
--------------------------------------------------
- **WHAT APPEARS NOW:**
  * Target Slot 3 receives value `"1"` in **Warm White** (`theme.chalkText`).
  * Captions: *"1,"* (W0073).
- **CENTER-STAGE HERO:**
  * Target Slot 3.
- **CAUSE:**
  * Spoken target value: *"1,"*.
- **EFFECT / MOTION:**
  * F1034–F1042: Number `"1"` pop into Target Slot 3 with white chalk strike.
- **COMPREHENSION HOLD:**
  * F1048–F1057 (9 frames, 300ms pause P24).
- **PERSISTENT STATE:**
  * `target[0..3] = [0, 0, 0, 1]`.

--------------------------------------------------
#### BEAT 27 / ANCHOR `S02_T1B` (F1057 – F1071, pause to F1073)
--------------------------------------------------
- **WHAT APPEARS NOW:**
  * Target Slot 4 receives value `"1"` in **Warm White** (`theme.chalkText`).
  * Captions: *"1,"* (W0074).
- **CENTER-STAGE HERO:**
  * Target Slot 4.
- **CAUSE:**
  * Spoken target value: *"1,"*.
- **EFFECT / MOTION:**
  * F1057–F1065: Number `"1"` pop into Target Slot 4.
- **COMPREHENSION HOLD:**
  * F1071–F1073 (2 frames, 60ms pause P25).
- **PERSISTENT STATE:**
  * `target[0..4] = [0, 0, 0, 1, 1]`.

--------------------------------------------------
#### BEAT 28 / ANCHOR `S02_T1C` (F1073 – F1089, pause to F1090)
--------------------------------------------------
- **WHAT APPEARS NOW:**
  * Target Slot 5 receives value `"1"` in **Warm White** (`theme.chalkText`).
  * Bracket appears under target slots 3..5: `"THREE 1s (ALL WHITE)"`.
  * Captions: *"1,"* (W0075).
- **CENTER-STAGE HERO:**
  * Completed White block `[1, 1, 1]`.
- **CAUSE:**
  * Spoken target value: *"1,"* completing all ones.
- **EFFECT / MOTION:**
  * F1073–F1082: Number `"1"` pop into Target Slot 5.
  * F1083–F1089: White chalk partition bracket draws under slots 3..5.
- **COMPREHENSION HOLD:**
  * F1089–F1090 (1 frame, 40ms pause P26).
- **PERSISTENT STATE:**
  * `target[0..5] = [0, 0, 0, 1, 1, 1]`.

--------------------------------------------------
#### BEAT 29 / ANCHOR `S02_T2A` (F1090 – F1105, pause to F1109)
--------------------------------------------------
- **WHAT APPEARS NOW:**
  * Target Slot 6 receives value `"2"` in **Ice Cyan / Blue** (`theme.cyan`).
  * Captions: *"2,"* (W0076).
- **CENTER-STAGE HERO:**
  * Target Slot 6.
- **CAUSE:**
  * Spoken target value: *"2,"*.
- **EFFECT / MOTION:**
  * F1090–F1098: Number `"2"` pop into Target Slot 6 with cyan wash.
- **COMPREHENSION HOLD:**
  * F1105–F1109 (4 frames, 140ms pause P27).
- **PERSISTENT STATE:**
  * `target[0..6] = [0, 0, 0, 1, 1, 1, 2]`.

--------------------------------------------------
#### BEAT 30 / ANCHOR `S02_T2B` (F1109 – F1127, pause to F1130)
--------------------------------------------------
- **WHAT APPEARS NOW:**
  * Target Slot 7 receives value `"2"` in **Ice Cyan / Blue** (`theme.cyan`).
  * Captions: *"2,"* (W0077).
- **CENTER-STAGE HERO:**
  * Target Slot 7.
- **CAUSE:**
  * Spoken target value: *"2,"*.
- **EFFECT / MOTION:**
  * F1109–F1118: Number `"2"` pop into Target Slot 7.
- **COMPREHENSION HOLD:**
  * F1127–F1130 (3 frames, 120ms pause P28).
- **PERSISTENT STATE:**
  * `target[0..7] = [0, 0, 0, 1, 1, 1, 2, 2]`.

--------------------------------------------------
#### BEAT 31 / ANCHOR `S02_T2C` (F1130 – F1148, 0ms pause)
--------------------------------------------------
- **WHAT APPEARS NOW:**
  * Target Slot 8 receives value `"2"` in **Ice Cyan / Blue** (`theme.cyan`).
  * Captions: *"2,"* (W0078).
- **CENTER-STAGE HERO:**
  * Target Slot 8.
- **CAUSE:**
  * Spoken target value: *"2,"*.
- **EFFECT / MOTION:**
  * F1130–F1140: Number `"2"` pop into Target Slot 8.
- **COMPREHENSION HOLD:**
  * Seamless audio transition into final value.
- **PERSISTENT STATE:**
  * `target[0..8] = [0, 0, 0, 1, 1, 1, 2, 2, 2]`.

--------------------------------------------------
#### BEAT 32 / ANCHOR `S02_T2D` (F1148 – F1160, pause to F1169)
--------------------------------------------------
- **WHAT APPEARS NOW:**
  * Target Slot 9 receives value `"2"` in **Ice Cyan / Blue** (`theme.cyan`).
  * Bracket appears under target slots 6..9: `"FOUR 2s (ALL BLUE)"`.
  * Captions: *"2."* (W0079).
  * Target array is now 100% complete: `[0, 0, 0, 1, 1, 1, 2, 2, 2, 2]`.
- **CENTER-STAGE HERO:**
  * The side-by-side comparison:
    * Input Array (Y: 440): `[2, 1, 2, 0, 2, 1, 0, 1, 0, 2]` (Scattered Colors)
    * Target Rail (Y: 680): `[0, 0, 0, 1, 1, 1, 2, 2, 2, 2]` (Clean Red | White | Blue Blocks)
- **CAUSE:**
  * Spoken word: *"2."* completing the target array.
- **EFFECT / MOTION:**
  * F1148–F1156: Number `"2"` pop into Target Slot 9.
  * F1155–F1165: Cyan bracket draws under slots 6..9.
  * F1160–F1169: Both arrays glow softly in unison.
- **WHAT MUST NOT APPEAR YET:**
  * Algorithmic counters or pointers.
- **COMPREHENSION HOLD:**
  * F1160–F1169 (9 frames, 320ms pause P29): Magnificent side-by-side clarity: before vs after.
- **CLEANUP / EXIT:**
  * Settle.
- **PERSISTENT STATE:**
  * Both Input and Target arrays fully visible and color-coded on the board.

---

### ACT 6: The Two Mandatory Constraints (Beats 33–37 · F1169 – F1486)

--------------------------------------------------
#### BEAT 33 / ANCHOR `S02_TWO_CONDITIONS` (F1169 – F1217, pause to F1232)
--------------------------------------------------
- **WHAT APPEARS NOW:**
  * Target rail dims slightly (opacity 0.50) to make optical room at the bottom.
  * Constraints container box appears at bottom (Y: 780 .. 910, X: 340 .. 1580).
  * Title: `"TWO CRITICAL INTERVIEW CONDITIONS"`.
  * Two empty numbered badge slots `[ 1 ]` and `[ 2 ]` draw with chalk borders.
  * Captions: *"There are two important conditions."* (W0080–W0084).
- **CENTER-STAGE HERO:**
  * Constraints container at Y: 800.
- **CAUSE:**
  * Speaker announces the mandatory interview constraints.
- **EFFECT / MOTION:**
  * F1175–F1210: Constraints container border draws with `RoughBox` in gold chalk (`theme.pivot`).
  * Badges `[ 1 ]` and `[ 2 ]` pop in with soft gold pulse.
- **WHAT MUST NOT APPEAR YET:**
  * The actual text descriptions of conditions 1 and 2.
- **COMPREHENSION HOLD:**
  * F1217–F1232 (15 frames, 500ms pause P30): Learner focuses on the two constraint slots.
- **CLEANUP / EXIT:**
  * Container settles.
- **PERSISTENT STATE:**
  * Constraints panel open with two empty numbered slots.

--------------------------------------------------
#### BEAT 34 / ANCHOR `S02_FIRST` (F1232 – F1244, pause to F1261)
--------------------------------------------------
- **WHAT APPEARS NOW:**
  * Badge `[ 1 ]` highlights with bright white chalk fill (`theme.chalkText`) and gold ring.
  * Captions: *"First,"* (W0085).
- **CENTER-STAGE HERO:**
  * Badge `[ 1 ]`.
- **CAUSE:**
  * Spoken transition word: *"First,"*.
- **EFFECT / MOTION:**
  * F1232–F1242: Gold chalk ring expands and snaps to Badge `[ 1 ]`.
- **WHAT MUST NOT APPEAR YET:**
  * Condition 1 text; Condition 2.
- **COMPREHENSION HOLD:**
  * F1244–F1261 (17 frames, 540ms pause P31).
- **PERSISTENT STATE:**
  * Badge `[ 1 ]` active.

--------------------------------------------------
#### BEAT 35 / ANCHOR `S02_SAME_ARRAY` (F1261 – F1325, pause to F1350)
--------------------------------------------------
- **WHAT APPEARS NOW:**
  * Condition 1 text writes in next to Badge `[ 1 ]`:
    `"IN-PLACE MODIFICATION — You must mutate the original array directly. Do NOT return a new array."`
  * Chalk lock icon (`🔒`) appears beside Input Array label `"nums"`.
  * Red strikethrough line draws over a hypothetical allocation badge: `new int[n]` (`theme.warn`).
  * Captions: *"we have to modify the same array."* (W0086–W0092).
- **CENTER-STAGE HERO:**
  * The In-Place constraint visualization.
- **CAUSE:**
  * Spoken rule: *"we have to modify the same array."*.
- **EFFECT / MOTION:**
  * F1265–F1310: Typewriter reveal of Condition 1 text.
  * F1285–F1315: Red chalk strikethrough strikes through `new int[n]`.
  * Chalk lock icon snaps onto Input Array.
- **WHAT MUST NOT APPEAR YET:**
  * Condition 2.
- **COMPREHENSION HOLD:**
  * F1325–F1350 (25 frames, 840ms pause P32): Essential hold ensuring learner realizes allocating a new array is illegal.
- **CLEANUP / EXIT:**
  * Strikethrough settles.
- **PERSISTENT STATE:**
  * Condition 1 locked; Input Array marked with in-place lock.

--------------------------------------------------
#### BEAT 36 / ANCHOR `S02_SECOND` (F1350 – F1365, pause to F1381)
--------------------------------------------------
- **WHAT APPEARS NOW:**
  * Badge `[ 2 ]` highlights with bright white chalk fill and gold ring.
  * Captions: *"Second,"* (W0093).
- **CENTER-STAGE HERO:**
  * Badge `[ 2 ]`.
- **CAUSE:**
  * Spoken transition word: *"Second,"*.
- **EFFECT / MOTION:**
  * F1350–F1362: Gold chalk ring snaps around Badge `[ 2 ]`.
- **WHAT MUST NOT APPEAR YET:**
  * Condition 2 text.
- **COMPREHENSION HOLD:**
  * F1365–F1381 (16 frames, 520ms pause P33).
- **PERSISTENT STATE:**
  * Badge `[ 2 ]` active.

--------------------------------------------------
#### BEAT 37 / ANCHOR `S02_NO_BUILTIN` (F1381 – F1467, pause to F1486)
--------------------------------------------------
- **WHAT APPEARS NOW:**
  * Condition 2 text writes in next to Badge `[ 2 ]`:
    `"NO BUILT-IN SORT — Do not use library sort functions."`
  * Prominent code badge appears in center: `sort(nums)` / `Arrays.sort(nums)` (monospace, font 32px).
  * A thick diagonal rough red chalk line (`theme.warn`) strikes out the code badge, accompanied by a red cross `✖`.
  * Subtitle below code badge: `O(n log n) comparison sort is FORBIDDEN`.
  * Captions: *"we should not use a built -in sorting function."* (W0094–W0102).
- **CENTER-STAGE HERO:**
  * Struck-out `sort(nums)` badge.
- **CAUSE:**
  * Spoken prohibition: *"we should not use a built -in sorting function."*.
- **EFFECT / MOTION:**
  * F1385–F1415: `sort(nums)` code badge pops in.
  * F1420–F1450: Thick red chalk strike (`RoughLine`, stroke width 5px) draws diagonally from top-left to bottom-right across the badge.
  * F1445–F1465: Red cross `✖` stamps beside it with subtle screen shake (offset 2px).
- **WHAT MUST NOT APPEAR YET:**
  * Follow-up challenge; solution algorithms.
- **COMPREHENSION HOLD:**
  * F1467–F1486 (19 frames, 640ms pause P34): Total visual clarity: built-in sort is completely rejected.
- **CLEANUP / EXIT:**
  * F1480–F1486: Struck badge dissolves smoothly as attention transitions to the follow-up.
- **PERSISTENT STATE:**
  * Both conditions taught and visually confirmed.

---

### ACT 7: The Follow-Up Challenge (Beats 38–41 · F1486 – F1840)

--------------------------------------------------
#### BEAT 38 / ANCHOR `S02_FOLLOWUP` (F1486 – F1538, pause to F1550)
--------------------------------------------------
- **WHAT APPEARS NOW:**
  * Constraints container retreats.
  * Follow-Up Challenge banner appears at Y: 740:
    `"⚡ LEETCODE FOLLOW-UP CHALLENGE"` (Gold chalk border, font: `fonts.display`, color: `theme.pivot`).
  * Captions: *"And then comes the follow -up."* (W0103–W0108).
- **CENTER-STAGE HERO:**
  * The Follow-Up Challenge banner at Y: 740.
- **CAUSE:**
  * Spoken introduction of the interview follow-up.
- **EFFECT / MOTION:**
  * F1490–F1528: Banner draws with double rough chalk borders; lightning icon `⚡` pulses in gold.
- **WHAT MUST NOT APPEAR YET:**
  * The two follow-up criteria (one pass, constant space).
- **COMPREHENSION HOLD:**
  * F1538–F1550 (12 frames, 400ms pause P35): Learner primes for the ultimate problem requirements.
- **CLEANUP / EXIT:**
  * Banner locks into place.
- **PERSISTENT STATE:**
  * Follow-Up Challenge banner active at Y: 740.

--------------------------------------------------
#### BEAT 39 / ANCHOR `S02_ONE_PASS` (F1550 – F1610, 0ms pause)
--------------------------------------------------
- **WHAT APPEARS NOW:**
  * Requirement 1 badge appears inside the follow-up banner:
    `"1. SINGLE PASS (One forward scan left-to-right)"`.
  * Over the Hero Input Array (Y: 440), a swift horizontal tracer path (`S4 TRACE_PATH`, color: `theme.pivot`) sweeps smoothly from Slot 0 (X: 397) to Slot 9 (X: 1423) with a single arrow pointing right `→`.
  * Subscript: `"No second scan allowed"`.
  * Captions: *"Can we solve it in one pass"* (W0109–W0115).
- **CENTER-STAGE HERO:**
  * The single-sweep tracer arrow over the Input Array.
- **CAUSE:**
  * Spoken requirement: *"Can we solve it in one pass"*.
- **EFFECT / MOTION:**
  * F1555–F1600: Tracer path animates progress 0.0 → 1.0 horizontally across all 10 slots with trailing chalk dust.
  * Requirement 1 text badge illuminates in gold.
- **WHAT MUST NOT APPEAR YET:**
  * DNF pointers (low, mid, high); Counting Sort.
- **COMPREHENSION HOLD:**
  * Seamless audio flow into next phrase.
- **CLEANUP / EXIT:**
  * Tracer path settles above the array.
- **PERSISTENT STATE:**
  * "SINGLE PASS" requirement visually locked.

--------------------------------------------------
#### BEAT 40 / ANCHOR `S02_CONST_SPACE` (F1610 – F1689, pause to F1719)
--------------------------------------------------
- **WHAT APPEARS NOW:**
  * Requirement 2 badge appears inside the follow-up banner:
    `"2. CONSTANT EXTRA SPACE · O(1)"`.
  * A compact memory footprint box labeled `O(1) AUXILIARY MEMORY` appears at X: 1100, Y: 820 with a chalk padlock icon (`🔒`).
  * Captions: *"using constant extra space?"* (W0116–W0119).
- **CENTER-STAGE HERO:**
  * `O(1)` Constant Space memory footprint box.
- **CAUSE:**
  * Spoken requirement: *"using constant extra space?"*.
- **EFFECT / MOTION:**
  * F1615–F1655: Requirement 2 badge pops in with green chalk checkmark (`theme.good`).
  * F1630–F1670: Memory box draws with fixed small square geometry (60×60px), proving no growing buffer is permitted.
- **WHAT MUST NOT APPEAR YET:**
  * Hash maps, frequency tables, or DNF partitioning rules.
- **COMPREHENSION HOLD:**
  * F1689–F1719 (30 frames, 1.000s major pause P36!): Sacred pause allowing the profound interview difficulty to register:
    How do you sort in ONE PASS without using EXTRA SPACE?
- **CLEANUP / EXIT:**
  * Settle.
- **PERSISTENT STATE:**
  * Twin requirements: (1) ONE PASS + (2) O(1) EXTRA SPACE.

--------------------------------------------------
#### BEAT 41 / ANCHOR `S02_REAL_CHALLENGE` (F1719 – F1811, pause to F1840)
--------------------------------------------------
- **WHAT APPEARS NOW:**
  * Both requirements merge into a unified gold challenge lock:
    `"★ THE REAL CHALLENGE: 1-PASS IN-PLACE CLASSIFICATION ★"`.
  * Double chalk halo glows around the master input array.
  * Captions: *"That is the real challenge of this problem."* (W0120–W0127).
- **CENTER-STAGE HERO:**
  * The unified challenge lock combining the Input Array and the Follow-Up constraints.
- **CAUSE:**
  * Spoken summary: *"That is the real challenge of this problem."*.
- **EFFECT / MOTION:**
  * F1725–F1775: Double chalk frame seals around the requirements; golden sheen sweep across the banner.
  * Halo glow expands gently around the array.
- **WHAT MUST NOT APPEAR YET:**
  * No spoilers of Dutch National Flag or Counting Sort.
- **COMPREHENSION HOLD:**
  * F1811–F1840 (29 frames, 980ms pause P37): Deep cognitive hold on the core challenge.
- **CLEANUP / EXIT:**
  * F1830–F1840: Challenge banner dissolves smoothly as scene pivots to the clue.
- **PERSISTENT STATE:**
  * Clear understanding of what makes this problem non-trivial.

---

### ACT 8: The Observation & Pivotal Clue (Beats 42–44 · F1840 – F2200)

--------------------------------------------------
#### BEAT 42 / ANCHOR `S02_OBSERVATION` (F1840 – F1913, pause to F1940)
--------------------------------------------------
- **WHAT APPEARS NOW:**
  * Challenge banner completely dissolves.
  * Master input array `[2, 1, 2, 0, 2, 1, 0, 1, 0, 2]` sits completely isolated in pure center stage.
  * A glowing chalk Lightbulb / Magnifying Glass icon appears above the array at Y: 250 (`theme.pivot`).
  * Label: `"CRUCIAL OBSERVATION"`.
  * Captions: *"One more important observation."* (W0128–W0131).
- **CENTER-STAGE HERO:**
  * The raw Master Array spotlighted with the Observation icon.
- **CAUSE:**
  * Speaker pivots from constraints to the hidden structural clue in the problem.
- **EFFECT / MOTION:**
  * F1845–F1885: Peripheral elements fade out cleanly; array slots brighten to maximum clarity.
  * F1860–F1900: Lightbulb icon draws with delicate yellow chalk strokes.
- **WHAT MUST NOT APPEAR YET:**
  * The solution formula or algorithm names.
- **COMPREHENSION HOLD:**
  * F1913–F1940 (27 frames, 920ms pause P38): Visual reset preparing viewer for the key insight.
- **CLEANUP / EXIT:**
  * Icon settles.
- **PERSISTENT STATE:**
  * Spotlight centered on the array values.

--------------------------------------------------
#### BEAT 43 / ANCHOR `S02_THREE_VALUES` (F1940 – F2061, pause to F2086)
--------------------------------------------------
- **WHAT APPEARS NOW:**
  * Above the array at Y: 220, the three domain tokens reappear in a compact triad:
    `[ 0 : RED ]   [ 1 : WHITE ]   [ 2 : BLUE ]`.
  * 10 thin chalk connector rays draw simultaneously upward from each slot in the master array to its corresponding domain token:
    * Slots 3, 6, 8 (values 0) connect with Coral Red rays to token `0`.
    * Slots 1, 5, 7 (values 1) connect with Warm White rays to token `1`.
    * Slots 0, 2, 4, 9 (values 2) connect with Ice Cyan rays to token `2`.
  * Captions: *"The array can contain only three possible values."* (W0132–W0139).
- **CENTER-STAGE HERO:**
  * The multi-ray mapping connecting all 10 values to the 3 discrete color buckets!
- **CAUSE:**
  * Spoken observation: *"The array can contain only three possible values."*.
- **EFFECT / MOTION:**
  * F1950–F1990: Triad badge appears at Y: 220.
  * F1980–F2040: All 10 connector rays draw upward (`RoughLine`, progress 0.0 → 1.0) with matching semantic colors (Red, White, Cyan).
- **WHAT MUST NOT APPEAR YET:**
  * Frequency counters or code.
- **COMPREHENSION HOLD:**
  * F2061–F2086 (25 frames, 820ms pause P39): Visceral, undeniable visual proof: every single number belongs to one of only 3 buckets!
- **CLEANUP / EXIT:**
  * Rays hold steady.
- **PERSISTENT STATE:**
  * Multi-ray classification active on board.

--------------------------------------------------
#### BEAT 44 / ANCHOR `S02_MAIN_CLUE` (F2086 – F2169, pause to F2200)
--------------------------------------------------
- **WHAT APPEARS NOW:**
  * A bold gold chalk banner underlines the triad at Y: 300:
    `"🔑 THE MAIN CLUE: FINITE DISCRETE DOMAIN (k = 3)"`.
  * Key icon unlocks with golden sparkle effect (`theme.pivot`).
  * Subtext: `"General sorting takes O(n log n). But with k = 3, comparison sort is UNNECESSARY!"`.
  * Captions: *"That small detail is the main clue."* (W0140–W0146).
- **CENTER-STAGE HERO:**
  * The Main Clue banner.
- **CAUSE:**
  * Speaker reveals that this constraint is the algorithmic cheat code.
- **EFFECT / MOTION:**
  * F2090–F2135: Gold chalk underline draws under the triad; key icon `🔑` rotates slightly and clicks unlocked.
  * F2110–F2150: Subtext fades in; connector rays gently pulse with luminous intensity.
- **WHAT MUST NOT APPEAR YET:**
  * Do NOT name "Counting Sort" or "Dutch National Flag" yet!
- **COMPREHENSION HOLD:**
  * F2169–F2200 (31 frames, 1.040s major pause P40!): The supreme "Aha!" moment where the learner understands why this problem is special.
- **CLEANUP / EXIT:**
  * F2190–F2200: Rays and clue banner prepare for clean handoff into Scene 03.
- **PERSISTENT STATE:**
  * Learner primed for non-comparison sorting.

---

### ACT 9: Transition & Handoff to Scene 03 (Beat 45 · F2200 – F2323)

--------------------------------------------------
#### BEAT 45 / ANCHOR `S02_SIMPLE_APPROACH` (F2200 – F2323)
--------------------------------------------------
- **WHAT APPEARS NOW:**
  * Triad rays and clue banner smoothly dissolve (opacity 1.0 → 0.0 over F2200–F2240).
  * Master input array `[2, 1, 2, 0, 2, 1, 0, 1, 0, 2]` remains 100% stable in center stage at Y: 440 with full color coding intact.
  * Approach teaser badge enters from top-right at Y: 180:
    `"APPROACH 1 · FREQUENCY COUNTING (TWO PASSES)"` (Chalk border, color: `theme.better`).
  * Word-synced captions:
    * F2200–F2213: *"Now,"* (W0147)
    * F2234–F2248: *"we"* (W0148)
    * F2248–F2263: *"can"* (W0149)
    * F2263–F2279: *"start"* (W0150)
    * F2279–F2287: *"with"* (W0151)
    * F2287–F2297: *"the"* (W0152)
    * F2297–F2309: *"simpler"* (W0153)
    * F2309–F2318: *"approach"* (W0154)
    * F2318–F2323: *"first."* (W0155)
- **CENTER-STAGE HERO:**
  * The unchanged Master Input Array standing ready for Scene 03 Counting Pass.
- **CAUSE:**
  * Speaker announces the start of the first algorithm.
- **EFFECT / MOTION:**
  * F2210–F2250: Clutter dissolves cleanly. Array slots maintain exact immutable layout.
  * F2240–F2280: Approach teaser badge glides into Y: 180 and settles.
  * F2280–F2323 (43 frames, 1.43s): Rock-solid stable freeze/hold ensuring zero visual pop or jitter across the scene boundary.
- **WHAT MUST NOT APPEAR YET:**
  * Counters `count0, count1, count2`, overwrite animations, pointer arrows, or code.
- **COMPREHENSION HOLD & SETTLE:**
  * F2280–F2323: Settled hold for the audio tail.
- **CLEANUP / EXIT:**
  * Handoff provenance: Exact array geometry (X: 397..1523, Y: 440), values `[2, 1, 2, 0, 2, 1, 0, 1, 0, 2]`, and color styling carry seamlessly into Scene 03 Frame 0.
- **PERSISTENT STATE:**
  * Scene 02 completes at exactly Frame 2323. Array ready for counting.

---

## 6. Critical-Frame Review Checklist

Before approving this scene or rendering, inspect these critical frames:

| Frame Number | Anchor / Moment | Review Invariant |
|---|---|---|
| **F0** | Entry State | Clean board, Q11 header settles, no premature array slots. |
| **F95** | Empty Slots Reveal | Exactly 10 empty `ArraySlotV2` shells visible at Y: 440; no values inside. |
| **F330** | Domain Triad | Domain `{0: Red, 1: White, 2: Blue}` complete with distinct colors. |
| **F480** | Target Output Concept | Ghost target rail at Y: 680 with Red 0s section highlighted. |
| **F670** | Master Example Setup | 10 empty slots with indices `0..9` below; values not yet shown. |
| **F765** | Input Mid-Population | Slots 0..3 populated with `[2 (Blue), 1 (White), 2 (Blue), 0 (Red)]`. Slots 4..9 empty. |
| **F910** | Full Input Array | All 10 input values visible with color coding. Target rail not yet populated. |
| **F1155** | Full Target Array | Target rail fully populated: `[0, 0, 0, 1, 1, 1, 2, 2, 2, 2]`. Side-by-side comparison. |
| **F1310** | Constraint 1: In-Place | Lock icon on `nums`; `new int[n]` struck through. |
| **F1440** | Constraint 2: No Built-In | `sort(nums)` dramatically struck out with thick red chalk line and cross. |
| **F1590** | Follow-Up: One Pass | Horizontal tracer path sweeping across input array left-to-right. |
| **F1660** | Follow-Up: O(1) Space | Fixed-size memory footprint box with padlock. |
| **F2020** | Observation: Multi-Ray | 10 colored rays connecting array values to domain tokens `{0, 1, 2}`. |
| **F2140** | The Main Clue | `"FINITE DISCRETE DOMAIN (k = 3)"` highlighted in gold. |
| **F2323** | Final Exit Frame | Approach 1 badge visible; master array perfectly stable for Scene 03. |

---

## 7. QA Verification Matrix against Course Invariants

- [x] **Total Frames Check:** Exactly 2,323 frames = 77.420s at 30 FPS.
- [x] **Anchor Traceability:** All 45 anchor IDs map directly to `sync/02-understand.anchors.json`.
- [x] **Zero Guessed Timings:** All frame ranges, word bounds, and pause durations derived from `02-understand.json`.
- [x] **Semantic Color Mapping:**
  - 0 = Coral Red (`#FF7675` / `theme.warn`)
  - 1 = Warm White (`#F8F6F0` / `theme.chalkText`)
  - 2 = Ice Cyan (`#5CE1E6` / `theme.cyan`)
- [x] **Spoiler Prevention:** No Counting Sort code, no counters, no DNF pointers (low/mid/high), no physical sorting animation.
- [x] **Deterministic Motion:** All animations driven by Remotion frame interpolation and `@dsa/kit` easings. Zero `Math.random()`. Zero CSS transitions.
- [x] **Continuity Guarantee:** Scene 02 begins from Scene 01 header provenance and ends on exact geometry matching Scene 03 input provenance.
