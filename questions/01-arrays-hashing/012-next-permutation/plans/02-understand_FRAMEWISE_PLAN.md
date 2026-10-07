# Q12 — Next Permutation (LC 31)
# Scene 02 · Question + Understand
## EXACT AUDIO-SYNCHRONIZED FRAME-WISE PLAN

**Course:** Code With Animation  
**Roadmap:** 227 Problems · 19 Patterns  
**Pattern:** 01 · Arrays & Hashing  
**Problem:** #012 Next Permutation · LC 31 · Medium  
**Scene:** 02-understand  
**Audio File:** `remotion-project/public/audio/012/02-understand.mp3`  
**Exact Sync File:** `questions/01-arrays-hashing/012-next-permutation/sync/02-understand.json`  
**Anchor Manifest:** `questions/01-arrays-hashing/012-next-permutation/sync/02-understand.anchors.json`  
**FPS:** 30  
**Exact Total Frames:** 2,075 frames (69.180 seconds)  
**Total Words:** 136 words (`W0000` to `W0135`)  
**Total Anchors:** 23 anchors (`S02_NUMBERS` through `S02_OBVIOUS`)  

---

## 1. Mandatory Scene Contract

```text
SCENE: 02-understand
QUESTION: 012 · Next Permutation (LeetCode 31)
BEAT TYPE: QUESTION UNDERSTANDING & MASTER ARRAY REVEAL
AUDIO FILE: audio/012/02-understand.mp3
SYNC FILE: sync/02-understand.json
ANCHORS FILE: sync/02-understand.anchors.json
FPS: 30
TOTAL FRAMES: 2075
PEDAGOGICAL GOAL:
  1. Define permutation conceptually (neutral order rearrangement -> PERMUTATION).
  2. Define lexicographical ordering axis (SMALLER -> LARGER).
  3. Define NEXT permutation as the smallest permutation strictly greater than current.
  4. Introduce the authoritative master array [2, 1, 5, 4, 4, 3, 0] one spoken value at a time using ArrayTrackV2.
  5. Establish in-place transformation constraint and wraparound rule (no greater -> return to smallest).
  6. Pose the core algorithmic challenge (reach next arrangement without generating all 5,040 permutations).
  7. Transition cleanly to APPROACH 1 · BRUTE FORCE, leaving center stage clean for Scene 03.
TRUTH CONSTRAINTS:
  - Master array is strictly [2, 1, 5, 4, 4, 3, 0].
  - Array V2 Law: Slots stay fixed, values drop in, indices never move.
  - Zero solution spoilers: No pivot detection, no successor search, no suffix reversal in Scene 02.
  - Zero guessed frames or coordinates: Derived strictly from audioSyncV2 and kit layout constants.
```

---

## 2. Component Delta (REUSE / EXTEND / CREATE)

```text
REUSE:
  - ChalkboardBackground, ChalkFilters (@dsa/kit/lib/chalk)
  - theme, fonts (@dsa/kit/lib/theme)
  - EASE, fadeIn, pop (@dsa/kit/lib/anim)
  - RoughBox, RoughLine, ChalkDust (@dsa/kit/components)
  - Captions (@dsa/kit/components/Captions)
  - ProblemOpenerShell (@dsa/kit/components/ProblemOpenerShell)
  - ArrayTrackV2 (@dsa/kit/components/array)

EXTEND:
  - ProblemOpenerShell header pinned at top (Y: 130) with subtitle "UNDERSTAND THE PROBLEM"
  - ArrayTrackV2 configured for 7 slots, adaptive slot width 110px, height 100px, gap 16px

CREATE:
  - sync/02-understand.anchors.json (Authoritative 23-anchor manifest)
  - plans/02-understand_FRAMEWISE_PLAN.md (This exact frame plan)
  - plans/02-understand_FRAME_QA_CHECKLIST.md (Frame verification checklist)
  - src/Scene02Understand.tsx (Remotion implementation)

DO NOT TOUCH:
  - @dsa/kit core libraries
  - Q011 regression reference source files
  - Raw audio sync JSON: sync/02-understand.json
```

---

## 3. Frame-by-Frame Choreography (All 23 Anchors)

---

### BEAT 01 — `S02_NUMBERS`
```text
BEAT: 01 / 23
ANCHOR: S02_NUMBERS
NARRATION: "Suppose we have some numbers"
WORD IDs: W0000 ("Suppose") to W0004 ("numbers")
AUDIO: 0 ms .. 1,780 ms (spoken)
FRAMES: F0 .. F80 [seg: 0..80, spoken: 0..53]
AVAILABLE REAL PAUSE: 880 ms (27 frames: F53..F80)

STATE BEFORE:
  Inherited directly from Scene 01 handoff:
  - ProblemOpenerShell top header pinned (Pattern 01, Next Permutation, LC 31 Medium)
  - Center stage (Y: 220..760) clean and empty.

WHAT APPEARS NOW:
  - Chalk section title "THE IDEA OF PERMUTATION" fades in at Y: 240.
  - A neutral horizontal row of 4 abstract slot tokens `[ · ] [ · ] [ · ] [ · ]` fades in centered at Y: 460.
  - No concrete numeric values appear yet.

CENTER-STAGE HERO:
  The abstract idea of a sequence of positions/items.

CAUSE:
  Narration introduces the fundamental premise: having some numbers.

PRIMARY SEMANTIC REACTION:
  Four neutral chalk position circles materialize from left to right (X: 720, 840, 960, 1080) with subtle opacity stagger.

MOVEMENT / MUTATION:
  Opacity: 0 -> 1 between F10..F40. Scale: 0.9 -> 1.0.

SUPPORTING REACTION:
  Label "ITEMS IN A SEQUENCE" settles underneath (Y: 540) in theme.chalkDim font.

COMPREHENSION HOLD:
  F53..F80 (27 frames pause before "and we arrange"): holds static state for listener digestion.

CLEANUP / EXIT:
  Neutral position tokens prepare for permutation shuffle in Beat 02.

PERSISTENT STATE:
  Top header (ProblemOpenerShell) remains locked at Y: 130 throughout scene.

STATE AFTER:
  Four neutral chalk markers settled at center stage.

COMPONENTS / ACTUAL IMPORT PATHS:
  - ProblemOpenerShell (@dsa/kit/components/ProblemOpenerShell)
  - RoughBox (@dsa/kit/components/RoughBox)
  - theme, fonts (@dsa/kit/lib/theme)

MOTION PURPOSE:
  Teach initial state: sequence of items before any ordering logic.

WHAT MUST NOT APPEAR YET:
  No master array [2,1,5,4,4,3,0]; no permutation definitions; no algorithm mechanics.

VALIDATION:
  Neutral tokens only. Zero numbers shown.
```

---

### BEAT 02 — `S02_DIFFERENT_ORDERS`
```text
BEAT: 02 / 23
ANCHOR: S02_DIFFERENT_ORDERS
NARRATION: "and we arrange them in different possible orders."
WORD IDs: W0005 ("and") to W0012 ("orders.")
AUDIO: 1,780 ms .. 5,420 ms (spoken)
FRAMES: F80 .. F192 [seg: 80..192, spoken: 53..163]
AVAILABLE REAL PAUSE: 980 ms (29 frames: F163..F192)

STATE BEFORE:
  Four neutral chalk tokens at center stage.

WHAT APPEARS NOW:
  - Three distinct arrangements of letters `[A, B, C]` appear sequentially to show reordering:
    Arrangement 1: `(1) A · B · C` (F85..F115)
    Arrangement 2: `(2) B · C · A` (F115..F145)
    Arrangement 3: `(3) C · A · B` (F145..F163)
  - Chalk callout: "SAME ITEMS · DIFFERENT ORDER"

CENTER-STAGE HERO:
  ORDER can change while underlying items remain identical.

CAUSE:
  Narration speaks of arranging items in different possible orders.

PRIMARY SEMANTIC REACTION:
  Tokens swap and glide across horizontal lanes to visually demonstrate reordering without introducing arbitrary numbers.

MOVEMENT / MUTATION:
  Subtle glide (X translation ±40px) on words "arrange" (F89) and "different" (F115).

SUPPORTING REACTION:
  Chalk indicator arrows link the variations.

COMPREHENSION HOLD:
  F163..F192 (29 frames pause): allows viewer to observe the 3 permutations side by side.

CLEANUP / EXIT:
  Arrangements 2 and 3 fade out smoothly toward F190; concept concentrates into formal definition.

PERSISTENT STATE:
  Top header; subtle concept note "same items · different order".

STATE AFTER:
  Board clear of clutter, focused for formal definition.

COMPONENTS / ACTUAL IMPORT PATHS:
  - RoughBox, RoughLine (@dsa/kit/components)
  - theme, fonts (@dsa/kit/lib/theme)

MOTION PURPOSE:
  Show cause -> effect: rearranging positions yields new distinct orders.

WHAT MUST NOT APPEAR YET:
  No master array; no lexicographical axis yet.

VALIDATION:
  Conceptual reordering demonstrated clearly without confusing numbers.
```

---

### BEAT 03 — `S02_PERMUTATION`
```text
BEAT: 03 / 23
ANCHOR: S02_PERMUTATION
NARRATION: "Each different order is called a permutation."
WORD IDs: W0013 ("Each") to W0019 ("permutation.")
AUDIO: 6,400 ms .. 9,420 ms (spoken)
FRAMES: F192 .. F310 [seg: 192..310, spoken: 192..283]
AVAILABLE REAL PAUSE: 900 ms (27 frames: F283..F310)

STATE BEFORE:
  Reordering demo settled; center ready for naming.

WHAT APPEARS NOW:
  - Hero typographic formula appears in center (Y: 420):
    `EACH DIFFERENT ORDER` ──► `A PERMUTATION`
  - Bounding chalk highlight box frames `PERMUTATION` with theme.cyan glow.

CENTER-STAGE HERO:
  The term `PERMUTATION` and its rigorous definition.

CAUSE:
  Narration officially names and defines the concept.

PRIMARY SEMANTIC REACTION:
  Word `PERMUTATION` expands with pop animation (scale 0.95 -> 1.0, opacity 0 -> 1) on word "permutation" (F261..F283).

MOVEMENT / MUTATION:
  Yellow-gold chalk underline draws under `PERMUTATION` using RoughLine stroke length interpolation (0% -> 100% over 18 frames).

SUPPORTING REACTION:
  Definition pill: "A specific ordering of an arrangement of elements".

COMPREHENSION HOLD:
  F283..F310 (27 frames pause): viewer absorbs the core definition.

CLEANUP / EXIT:
  Formula compacts upward toward Y: 300 to make room for lexicographical ordering axis.

PERSISTENT STATE:
  Top header; compact `PERMUTATION` badge at top of center stage.

STATE AFTER:
  Definition locked in student's mind.

COMPONENTS / ACTUAL IMPORT PATHS:
  - RoughBox, RoughLine (@dsa/kit/components)
  - theme, fonts (@dsa/kit/lib/theme)

MOTION PURPOSE:
  Direct attention to formal vocabulary and reinforce concept equivalence.

WHAT MUST NOT APPEAR YET:
  No algorithm logic; no master array yet.

VALIDATION:
  Definition highlighted prominently in theme.cyan and theme.gold.
```

---

### BEAT 04 — `S02_LEX_ORDER`
```text
BEAT: 04 / 23
ANCHOR: S02_LEX_ORDER
NARRATION: "Now imagine, all of those permutations are arranged in increasing lexicographical order."
WORD IDs: W0020 ("Now") to W0031 ("order.")
AUDIO: 10,320 ms .. 17,440 ms (spoken)
FRAMES: F310 .. F554 [seg: 310..554, spoken: 310..523]
AVAILABLE REAL PAUSE: 1,040 ms (31 frames: F523..F554)

STATE BEFORE:
  `PERMUTATION` definition at Y: 300.

WHAT APPEARS NOW:
  - Horizontal ordering axis draws from left to right (X: 360 to X: 1560, Y: 490):
    Left label: `SMALLER` (dictionary start)
    Right label: `LARGER` (dictionary end)
    Axis label: `LEXICOGRAPHICAL (DICTIONARY) ORDER`
  - Discrete sequential tick marks appear along the axis showing ordered progression.

CENTER-STAGE HERO:
  The global sorted sequence of all permutations.

CAUSE:
  Narration introduces the concept of sorting permutations in dictionary order.

PRIMARY SEMANTIC REACTION:
  Chalk line draws left-to-right (RoughLine) starting on word "arranged" (F419..F456).
  Arrowhead appears at right end on word "increasing" (F456..F477).
  Label "LEXICOGRAPHICAL ORDER" reveals on word "lexicographical" (F477..F509).

MOVEMENT / MUTATION:
  Axis line stroke-dashoffset: 1200 -> 0 over 25 frames. Ticks pop in sequentially.

SUPPORTING REACTION:
  Three sample ordered cards `[1, 2, 3] < [1, 3, 2] < [2, 1, 3]` subtly appear along axis to illustrate "dictionary order".

COMPREHENSION HOLD:
  F523..F554 (31 frames pause): viewer inspects the left-to-right ordering direction.

CLEANUP / EXIT:
  Sample cards fade; axis remains as the spatial frame for Beats 05–07.

PERSISTENT STATE:
  Lexicographical axis across center stage.

STATE AFTER:
  Ordered continuum established.

COMPONENTS / ACTUAL IMPORT PATHS:
  - RoughLine, RoughBox (@dsa/kit/components)
  - theme, fonts (@dsa/kit/lib/theme)

MOTION PURPOSE:
  Teach global state space: permutations form an ordered line.

WHAT MUST NOT APPEAR YET:
  No master testcase array yet.

VALIDATION:
  Left-to-right increasing direction unmistakably clear.
```

---

### BEAT 05 — `S02_NOT_ANY_BIGGER`
```text
BEAT: 05 / 23
ANCHOR: S02_NOT_ANY_BIGGER
NARRATION: "Our job is not to find any bigger arrangement."
WORD IDs: W0032 ("Our") to W0040 ("arrangement.")
AUDIO: 18,480 ms .. 21,360 ms (spoken)
FRAMES: F554 .. F658 [seg: 554..658, spoken: 554..641]
AVAILABLE REAL PAUSE: 560 ms (17 frames: F641..F658)

STATE BEFORE:
  Lexicographical axis with left (SMALLER) and right (LARGER).

WHAT APPEARS NOW:
  - Far-right zone on the axis highlights: `ANY ARBITRARY BIGGER PERMUTATION`.
  - Large red/warning chalk cross `✖` strikes through the arbitrary distant jump.
  - Text badge: `NOT JUST ANY BIGGER ORDER` in theme.warn (`#ef4444`).

CENTER-STAGE HERO:
  Explicit rejection of arbitrary larger permutations.

CAUSE:
  Narration clarifies the problem scope: we do NOT want just any larger permutation.

PRIMARY SEMANTIC REACTION:
  A wide curved leap arrow jumps far to the right, then gets struck with red chalk `✖` on word "not" (F579..F613).

MOVEMENT / MUTATION:
  Red cross draws in 2 strokes (RoughLine) with slight overshoot.

SUPPORTING REACTION:
  Warning glow on the rejected destination.

COMPREHENSION HOLD:
  F641..F658 (17 frames pause): allows viewer to understand the boundary restriction.

CLEANUP / EXIT:
  Red cross and distant arrow fade out between F648 and F658.

PERSISTENT STATE:
  Lexicographical axis remains.

STATE AFTER:
  Arbitrary jumps rejected; viewer anticipates exact adjacency.

COMPONENTS / ACTUAL IMPORT PATHS:
  - RoughLine (@dsa/kit/components)
  - theme (@dsa/kit/lib/theme)

MOTION PURPOSE:
  Show cause -> effect: eliminate false assumption (jumping anywhere larger).

WHAT MUST NOT APPEAR YET:
  No solution algorithm.

VALIDATION:
  Rejection clearly visible and intuitive.
```

---

### BEAT 06 — `S02_VERY_NEXT`
```text
BEAT: 06 / 23
ANCHOR: S02_VERY_NEXT
NARRATION: "We need the very next one,"
WORD IDs: W0041 ("We") to W0046 ("one,")
AUDIO: 21,920 ms .. 23,380 ms (spoken)
FRAMES: F658 .. F713 [seg: 658..713, spoken: 658..701]
AVAILABLE REAL PAUSE: 380 ms (12 frames: F701..F713)

STATE BEFORE:
  Lexicographical axis with rejected distant leap cleared.

WHAT APPEARS NOW:
  - Focus zooms in optically to two adjacent positions on the axis:
    Position A: `[ CURRENT ]` (blue/chalk box at X: 840, Y: 490)
    Position B: `[ NEXT ]` (gold/green box at X: 1080, Y: 490)
  - Tight curved step arrow links `CURRENT ──► NEXT`.
  - Highlight callout: `IMMEDIATE SUCCESSOR (+1 STEP)`

CENTER-STAGE HERO:
  The concept of strict adjacency (`CURRENT ──► NEXT`).

CAUSE:
  Narration defines the exact requirement: the very next one.

PRIMARY SEMANTIC REACTION:
  Green highlight pulse on `NEXT` box on word "next" (F684..F693).

MOVEMENT / MUTATION:
  Step arrow draws smoothly from CURRENT to NEXT over 10 frames.

SUPPORTING REACTION:
  Text badge "IMMEDIATE NEIGHBOR" glows in theme.good (`#22c55e`).

COMPREHENSION HOLD:
  F701..F713 (12 frames pause): hold focus on immediate adjacency.

CLEANUP / EXIT:
  Adjacency pair expands into formal mathematical inequality in Beat 07.

PERSISTENT STATE:
  `CURRENT` and `NEXT` anchor boxes.

STATE AFTER:
  Adjacency permanently established.

COMPONENTS / ACTUAL IMPORT PATHS:
  - RoughBox, RoughLine (@dsa/kit/components)
  - theme, fonts (@dsa/kit/lib/theme)

MOTION PURPOSE:
  Direct attention to strict immediacy.

WHAT MUST NOT APPEAR YET:
  No master values yet.

VALIDATION:
  Adjacency arrow exactly 1 step.
```

---

### BEAT 07 — `S02_SMALLEST_GREATER`
```text
BEAT: 07 / 23
ANCHOR: S02_SMALLEST_GREATER
NARRATION: "the smallest permutation that is still greater than the current permutation."
WORD IDs: W0047 ("the") to W0057 ("permutation.")
AUDIO: 23,760 ms .. 28,220 ms (spoken)
FRAMES: F713 .. F847 [seg: 713..847, spoken: 713..847]
AVAILABLE REAL PAUSE: 0 ms (seamless transition into Master Array intro)

STATE BEFORE:
  `CURRENT ──► NEXT` adjacency pair visible.

WHAT APPEARS NOW:
  - Hero mathematical definition card forms at center stage (Y: 400..560):
    `NEXT PERMUTATION =`
    `min { P  |  P > CURRENT }`
  - Spoken words build the formula sequentially:
    "smallest" (F722) -> `SMALLEST PERMUTATION` (theme.cyan)
    "greater than" (F792) -> `> CURRENT` (theme.gold)
    "current permutation" (F823) -> complete boxed definition

CENTER-STAGE HERO:
  Exact mathematical definition of Next Permutation.

CAUSE:
  Narration provides the rigorous problem specification.

PRIMARY SEMANTIC REACTION:
  Formula elements reveal in strict word lockstep:
  - F722: "smallest" -> word "SMALLEST" lights up.
  - F792: "greater" -> inequality symbol ">" glows.
  - F823: "current" -> `CURRENT` pill locks into place.

MOVEMENT / MUTATION:
  Chalk frame draws around the complete formula (RoughBox) at F825..F845.

SUPPORTING REACTION:
  Subtitle note: "Smallest increase possible in dictionary order".

COMPREHENSION HOLD:
  F835..F847 (12 frames comprehension settling before master array announcement).

CLEANUP / EXIT:
  Definition formula glides upward and dissolves smoothly (F847..F865) as center clears for master array.

PERSISTENT STATE:
  Top header.

STATE AFTER:
  Center stage completely clear and ready for master array track.

COMPONENTS / ACTUAL IMPORT PATHS:
  - RoughBox (@dsa/kit/components)
  - theme, fonts (@dsa/kit/lib/theme)

MOTION PURPOSE:
  Teach definition through synchronous word-by-word formula construction.

WHAT MUST NOT APPEAR YET:
  No master array track until Beat 08.

VALIDATION:
  Definition is mathematically watertight and word-synchronized.
```

---

### BEAT 08 — `S02_MASTER_INTRO`
```text
BEAT: 08 / 23
ANCHOR: S02_MASTER_INTRO
NARRATION: "For this lesson, our master array is"
WORD IDs: W0058 ("For") to W0064 ("is")
AUDIO: 28,220 ms .. 31,880 ms (spoken)
FRAMES: F847 .. F956 [seg: 847..956, spoken: 847..956]
AVAILABLE REAL PAUSE: 0 ms (seamless transition into first value "2")

STATE BEFORE:
  Center stage clear; top header pinned.

WHAT APPEARS NOW:
  - Track title appears at Y: 330: `MASTER ARRAY  (nums)`
  - Empty 7-slot ArrayTrackV2 materializes centered horizontally (X: 524, Y: 430):
    Slots 0 to 6 are visible with empty value compartments.
    Slot index row `0  1  2  3  4  5  6` appears below track.
  - Zero values inside slots yet.

CENTER-STAGE HERO:
  The authoritative master Array V2 structure.

CAUSE:
  Narration announces the concrete master input for the entire problem.

PRIMARY SEMANTIC REACTION:
  Seven slot frames appear simultaneously with gentle pop-in on word "master array" (F911..F934).
  Indices row fades in with theme.chalkDim typography.

MOVEMENT / MUTATION:
  Track scale: 0.96 -> 1.0. Opacity: 0 -> 1 over 16 frames.

SUPPORTING REACTION:
  Chalk dimension label: `length: 7` at top right of array track.

COMPREHENSION HOLD:
  F940..F956 (16 frames): viewer registers the 7 empty slots waiting for values.

CLEANUP / EXIT:
  Slots remain fixed and persistent for all subsequent beats.

PERSISTENT STATE:
  The 7-slot ArrayTrackV2 is now the permanent center-stage hero.

STATE AFTER:
  Seven empty slots [  ][  ][  ][  ][  ][  ][  ] waiting for values.

COMPONENTS / ACTUAL IMPORT PATHS:
  - ArrayTrackV2 (@dsa/kit/components/array/ArrayTrackV2)
  - theme, fonts (@dsa/kit/lib/theme)

MOTION PURPOSE:
  Establish data structure container before populating values (Array V2 law).

WHAT MUST NOT APPEAR YET:
  No values inside slots before they are spoken.

VALIDATION:
  Exactly 7 slots. Slot width 110px, height 100px, gap 16px (total track width 866px).
```

---

### BEAT 09 — `S02_M0`
```text
BEAT: 09 / 23
ANCHOR: S02_M0
NARRATION: "2,"
WORD IDs: W0065 ("2,")
AUDIO: 31,880 ms .. 32,540 ms (spoken)
FRAMES: F956 .. F984 [seg: 956..984, spoken: 956..976]
AVAILABLE REAL PAUSE: 260 ms (8 frames: F976..F984)

STATE BEFORE:
  Seven empty slots: `[ ][ ][ ][ ][ ][ ][ ]`.

WHAT APPEARS NOW:
  - Value `2` drops into slot 0 (X: 524, Y: 430).
  - Slots 1..6 remain empty.

CENTER-STAGE HERO:
  Value `2` at index 0.

CAUSE:
  Narration speaks first value: "Two".

PRIMARY SEMANTIC REACTION:
  Chalk numeral `2` drops vertically (-30px -> 0px) into slot 0 with subtle bounce on F962.

MOVEMENT / MUTATION:
  Value scale: 1.2 -> 1.0. Fill: theme.chalkText. Slot 0 border lights up with subtle green accent.

SUPPORTING REACTION:
  Index `0` highlight pulse.

COMPREHENSION HOLD:
  F976..F984 (8 frames pause): value settles cleanly.

CLEANUP / EXIT:
  Value 2 stays fixed in slot 0.

PERSISTENT STATE:
  `nums[0] = 2`.

STATE AFTER:
  `[2][ ][ ][ ][ ][ ][ ]`.

COMPONENTS / ACTUAL IMPORT PATHS:
  - ArrayTrackV2 (@dsa/kit/components/array)

MOTION PURPOSE:
  Teach data loading: values populate strictly on spoken cue.

WHAT MUST NOT APPEAR YET:
  Slots 1..6 must remain completely blank.

VALIDATION:
  Only index 0 populated.
```

---

### BEAT 10 — `S02_M1`
```text
BEAT: 10 / 23
ANCHOR: S02_M1
NARRATION: "1,"
WORD IDs: W0066 ("1,")
AUDIO: 32,800 ms .. 33,500 ms (spoken)
FRAMES: F984 .. F1016 [seg: 984..1016, spoken: 984..1005]
AVAILABLE REAL PAUSE: 380 ms (11 frames: F1005..F1016)

STATE BEFORE:
  `[2][ ][ ][ ][ ][ ][ ]`.

WHAT APPEARS NOW:
  - Value `1` drops into slot 1 (X: 650, Y: 430).
  - Slots 2..6 remain empty.

CENTER-STAGE HERO:
  Value `1` at index 1.

CAUSE:
  Narration speaks second value: "One".

PRIMARY SEMANTIC REACTION:
  Chalk numeral `1` drops into slot 1 with identical drop animation at F988.

MOVEMENT / MUTATION:
  Value scale: 1.2 -> 1.0. Slot 1 highlight.

SUPPORTING REACTION:
  Prefix `[2, 1]` recognized.

COMPREHENSION HOLD:
  F1005..F1016 (11 frames pause).

CLEANUP / EXIT:
  Value 1 stays fixed in slot 1.

PERSISTENT STATE:
  `nums[0..1] = [2, 1]`.

STATE AFTER:
  `[2][1][ ][ ][ ][ ][ ]`.

COMPONENTS / ACTUAL IMPORT PATHS:
  - ArrayTrackV2 (@dsa/kit/components/array)

MOTION PURPOSE:
  Sequential value loading.

WHAT MUST NOT APPEAR YET:
  Slots 2..6 must remain blank.

VALIDATION:
  Indices 0 and 1 populated.
```

---

### BEAT 11 — `S02_M2`
```text
BEAT: 11 / 23
ANCHOR: S02_M2
NARRATION: "5,"
WORD IDs: W0067 ("5,")
AUDIO: 33,880 ms .. 34,460 ms (spoken)
FRAMES: F1016 .. F1050 [seg: 1016..1050, spoken: 1016..1034]
AVAILABLE REAL PAUSE: 540 ms (16 frames: F1034..F1050)

STATE BEFORE:
  `[2][1][ ][ ][ ][ ][ ]`.

WHAT APPEARS NOW:
  - Value `5` drops into slot 2 (X: 776, Y: 430).
  - Slots 3..6 remain empty.

CENTER-STAGE HERO:
  Value `5` at index 2.

CAUSE:
  Narration speaks third value: "Five".

PRIMARY SEMANTIC REACTION:
  Chalk numeral `5` drops into slot 2 on F1020.

MOVEMENT / MUTATION:
  Value scale: 1.2 -> 1.0. Slot 2 highlight.

SUPPORTING REACTION:
  Prefix `[2, 1, 5]` established.

COMPREHENSION HOLD:
  F1034..F1050 (16 frames pause).

CLEANUP / EXIT:
  Value 5 stays fixed in slot 2.

PERSISTENT STATE:
  `nums[0..2] = [2, 1, 5]`.

STATE AFTER:
  `[2][1][5][ ][ ][ ][ ]`.

COMPONENTS / ACTUAL IMPORT PATHS:
  - ArrayTrackV2 (@dsa/kit/components/array)

MOTION PURPOSE:
  Sequential value loading.

WHAT MUST NOT APPEAR YET:
  Slots 3..6 must remain blank.

VALIDATION:
  Indices 0, 1, 2 populated.
```

---

### BEAT 12 — `S02_M3`
```text
BEAT: 12 / 23
ANCHOR: S02_M3
NARRATION: "4," (token 1 of 2)
WORD IDs: W0068 ("4,")
AUDIO: 35,000 ms .. 35,580 ms (spoken)
FRAMES: F1050 .. F1082 [seg: 1050..1082, spoken: 1050..1067]
AVAILABLE REAL PAUSE: 480 ms (15 frames: F1067..F1082)

STATE BEFORE:
  `[2][1][5][ ][ ][ ][ ]`.

WHAT APPEARS NOW:
  - First value `4` drops into slot 3 (X: 902, Y: 430).
  - Slots 4..6 remain empty.
  - Resolved strictly by token ID W0068 (not text matching).

CENTER-STAGE HERO:
  First Value `4` at index 3.

CAUSE:
  Narration speaks fourth value: "Four".

PRIMARY SEMANTIC REACTION:
  Chalk numeral `4` drops into slot 3 on F1054.

MOVEMENT / MUTATION:
  Value scale: 1.2 -> 1.0. Slot 3 highlight.

SUPPORTING REACTION:
  Prefix `[2, 1, 5, 4]` established.

COMPREHENSION HOLD:
  F1067..F1082 (15 frames pause).

CLEANUP / EXIT:
  First 4 stays fixed in slot 3.

PERSISTENT STATE:
  `nums[0..3] = [2, 1, 5, 4]`.

STATE AFTER:
  `[2][1][5][4][ ][ ][ ]`.

COMPONENTS / ACTUAL IMPORT PATHS:
  - ArrayTrackV2 (@dsa/kit/components/array)

MOTION PURPOSE:
  Sequential value loading with token identity disambiguation.

WHAT MUST NOT APPEAR YET:
  Slot 4 must remain blank until second "four" is spoken.

VALIDATION:
  Slot 3 holds 4; slot 4 is still empty.
```

---

### BEAT 13 — `S02_M4`
```text
BEAT: 13 / 23
ANCHOR: S02_M4
NARRATION: "4," (token 2 of 2)
WORD IDs: W0069 ("4,")
AUDIO: 36,060 ms .. 36,620 ms (spoken)
FRAMES: F1082 .. F1113 [seg: 1082..1113, spoken: 1082..1099]
AVAILABLE REAL PAUSE: 480 ms (14 frames: F1099..F1113)

STATE BEFORE:
  `[2][1][5][4][ ][ ][ ]`.

WHAT APPEARS NOW:
  - Second value `4` drops into slot 4 (X: 1028, Y: 430).
  - Slots 5 and 6 remain empty.
  - Resolved strictly by token ID W0069.

CENTER-STAGE HERO:
  Second Value `4` at index 4 (duplicate value demonstrated).

CAUSE:
  Narration speaks fifth value: second "Four".

PRIMARY SEMANTIC REACTION:
  Chalk numeral `4` drops into slot 4 on F1086.

MOVEMENT / MUTATION:
  Value scale: 1.2 -> 1.0. Slot 4 highlight.

SUPPORTING REACTION:
  Visual evidence that the array contains duplicate elements (crucial edge-case property of LC 31!).

COMPREHENSION HOLD:
  F1099..F1113 (14 frames pause).

CLEANUP / EXIT:
  Second 4 stays fixed in slot 4.

PERSISTENT STATE:
  `nums[0..4] = [2, 1, 5, 4, 4]`.

STATE AFTER:
  `[2][1][5][4][4][ ][ ]`.

COMPONENTS / ACTUAL IMPORT PATHS:
  - ArrayTrackV2 (@dsa/kit/components/array)

MOTION PURPOSE:
  Ordered token mapping; introduce duplicate value without collision.

WHAT MUST NOT APPEAR YET:
  Slots 5 and 6 still empty.

VALIDATION:
  Adjacent duplicate `[..., 4, 4, ...]` clearly visible.
```

---

### BEAT 14 — `S02_M5`
```text
BEAT: 14 / 23
ANCHOR: S02_M5
NARRATION: "3,"
WORD IDs: W0070 ("3,")
AUDIO: 37,100 ms .. 37,740 ms (spoken)
FRAMES: F1113 .. F1145 [seg: 1113..1145, spoken: 1113..1132]
AVAILABLE REAL PAUSE: 420 ms (13 frames: F1132..F1145)

STATE BEFORE:
  `[2][1][5][4][4][ ][ ]`.

WHAT APPEARS NOW:
  - Value `3` drops into slot 5 (X: 1154, Y: 430).
  - Slot 6 remains empty.

CENTER-STAGE HERO:
  Value `3` at index 5.

CAUSE:
  Narration speaks sixth value: "Three".

PRIMARY SEMANTIC REACTION:
  Chalk numeral `3` drops into slot 5 on F1117.

MOVEMENT / MUTATION:
  Value scale: 1.2 -> 1.0. Slot 5 highlight.

SUPPORTING REACTION:
  Prefix `[2, 1, 5, 4, 4, 3]` established.

COMPREHENSION HOLD:
  F1132..F1145 (13 frames pause).

CLEANUP / EXIT:
  Value 3 stays fixed in slot 5.

PERSISTENT STATE:
  `nums[0..5] = [2, 1, 5, 4, 4, 3]`.

STATE AFTER:
  `[2][1][5][4][4][3][ ]`.

COMPONENTS / ACTUAL IMPORT PATHS:
  - ArrayTrackV2 (@dsa/kit/components/array)

MOTION PURPOSE:
  Sequential value loading.

WHAT MUST NOT APPEAR YET:
  Slot 6 must remain blank until "zero".

VALIDATION:
  Indices 0 through 5 populated.
```

---

### BEAT 15 — `S02_M6`
```text
BEAT: 15 / 23
ANCHOR: S02_M6
NARRATION: "0."
WORD IDs: W0071 ("0.")
AUDIO: 38,160 ms .. 38,840 ms (spoken)
FRAMES: F1145 .. F1187 [seg: 1145..1187, spoken: 1145..1165]
AVAILABLE REAL PAUSE: 740 ms (22 frames: F1165..F1187)

STATE BEFORE:
  `[2][1][5][4][4][3][ ]`.

WHAT APPEARS NOW:
  - Final value `0` drops into slot 6 (X: 1280, Y: 430).
  - The complete master array `[2, 1, 5, 4, 4, 3, 0]` is now 100% assembled!
  - Array index row labels `idx [0] .. idx [6]` illuminate with crisp contrast.

CENTER-STAGE HERO:
  The complete authoritative Master Array `[2, 1, 5, 4, 4, 3, 0]`.

CAUSE:
  Narration speaks final value: "Zero".

PRIMARY SEMANTIC REACTION:
  Chalk numeral `0` drops into slot 6 on F1149.
  A subtle golden glow washes across the entire 7-slot track on F1165 to celebrate complete array assembly.

MOVEMENT / MUTATION:
  Full track highlight pulse (border gold accent).

SUPPORTING REACTION:
  Header pill: `nums = [2, 1, 5, 4, 4, 3, 0]` settles at Y: 330.

COMPREHENSION HOLD:
  F1165..F1187 (22 frames pause): viewer takes in the entire master array in its full glory.

CLEANUP / EXIT:
  Gold pulse settles; array remains in neutral resting state.

PERSISTENT STATE:
  Master array `[2, 1, 5, 4, 4, 3, 0]` permanently established.

STATE AFTER:
  `nums = [2, 1, 5, 4, 4, 3, 0]` fully visible and active.

COMPONENTS / ACTUAL IMPORT PATHS:
  - ArrayTrackV2 (@dsa/kit/components/array)

MOTION PURPOSE:
  Complete data structure assembly confirmation.

WHAT MUST NOT APPEAR YET:
  No target/result array; no solution steps.

VALIDATION:
  Array is exactly [2, 1, 5, 4, 4, 3, 0]. Total width 866px, centered.
```

---

### BEAT 16 — `S02_TRANSFORM_SAME`
```text
BEAT: 16 / 23
ANCHOR: S02_TRANSFORM_SAME
NARRATION: "We need to transform this same array"
WORD IDs: W0072 ("We") to W0078 ("array")
AUDIO: 39,580 ms .. 41,880 ms (spoken)
FRAMES: F1187 .. F1256 [seg: 1187..1256, spoken: 1187..1256]
AVAILABLE REAL PAUSE: 0 ms (continuous transition into next phrase)

STATE BEFORE:
  Master array `[2, 1, 5, 4, 4, 3, 0]` settled at center.

WHAT APPEARS NOW:
  - An enclosing chalk bracket/boundary draws around the master array track (Y: 390..580).
  - Chalk callout badge appears directly above the track (Y: 300):
    `THIS SAME ARRAY · MUTATE IN PLACE`
  - Explicit visual prohibition: NO SECOND ARRAY CREATED (ghost copy with ✖).

CENTER-STAGE HERO:
  Single array identity — mutating the exact existing instance.

CAUSE:
  Narration emphasizes: "transform this SAME array".

PRIMARY SEMANTIC REACTION:
  Chalk boundary box wraps around the array (RoughBox) to emphasize self-containment.

MOVEMENT / MUTATION:
  Boundary stroke draws in between F1203 and F1232.

SUPPORTING REACTION:
  Subtle pulsing border in theme.cyan.

COMPREHENSION HOLD:
  F1240..F1256 (16 frames settling).

CLEANUP / EXIT:
  Boundary box remains as the single identity anchor.

PERSISTENT STATE:
  Master array + identity constraint.

STATE AFTER:
  The single-array nature of the problem is established.

COMPONENTS / ACTUAL IMPORT PATHS:
  - RoughBox (@dsa/kit/components)
  - ArrayTrackV2 (@dsa/kit/components/array)

MOTION PURPOSE:
  Teach in-place mutation principle: one array enters, one array remains.

WHAT MUST NOT APPEAR YET:
  No output array values; no algorithm hints.

VALIDATION:
  Zero duplicate arrays on screen.
```

---

### BEAT 17 — `S02_NEXT_PERM`
```text
BEAT: 17 / 23
ANCHOR: S02_NEXT_PERM
NARRATION: "into its next permutation."
WORD IDs: W0079 ("into") to W0082 ("permutation.")
AUDIO: 41,880 ms .. 43,800 ms (spoken)
FRAMES: F1256 .. F1331 [seg: 1256..1331, spoken: 1256..1314]
AVAILABLE REAL PAUSE: 560 ms (17 frames: F1314..F1331)

STATE BEFORE:
  Master array enclosed in single-array identity bracket.

WHAT APPEARS NOW:
  - A transformation arrow emerges from the array curving downward/rightward (Y: 570..640):
    `CURRENT [2, 1, 5, 4, 4, 3, 0] ──► NEXT PERMUTATION [ ? ]`
  - Destination slot placeholder shows glowing question mark `[ ? ]` in theme.cyan.

CENTER-STAGE HERO:
  The unresolved goal: `CURRENT ──► NEXT ?`.

CAUSE:
  Narration states the goal: transform into its next permutation.

PRIMARY SEMANTIC REACTION:
  Chalk arrow draws from bottom of array to the `NEXT ?` target box on word "next" (F1280..F1291).
  Question mark `?` pulses in theme.gold.

MOVEMENT / MUTATION:
  Arrowhead pops at F1295. Destination box fades in.

SUPPORTING REACTION:
  Text note: "Next higher lexicographical arrangement".

COMPREHENSION HOLD:
  F1314..F1331 (17 frames pause): viewer ponders what the next permutation might be.

CLEANUP / EXIT:
  Arrow and `NEXT ?` persist into in-place constraint beat.

PERSISTENT STATE:
  Master array + `NEXT ?` transformation goal.

STATE AFTER:
  Clear visual tension: what is the next permutation?

COMPONENTS / ACTUAL IMPORT PATHS:
  - RoughLine, RoughBox (@dsa/kit/components)
  - ArrayTrackV2 (@dsa/kit/components/array)

MOTION PURPOSE:
  Direct attention to the unsolved challenge.

WHAT MUST NOT APPEAR YET:
  No final answer `[2, 3, 0, 1, 4, 4, 5]`! Strictly question mark `?`.

VALIDATION:
  Answer is completely hidden.
```

---

### BEAT 18 — `S02_IN_PLACE`
```text
BEAT: 18 / 23
ANCHOR: S02_IN_PLACE
NARRATION: "And we have to do it in place."
WORD IDs: W0083 ("And") to W0090 ("place.")
AUDIO: 44,360 ms .. 46,500 ms (spoken)
FRAMES: F1331 .. F1413 [seg: 1331..1413, spoken: 1331..1395]
AVAILABLE REAL PAUSE: 600 ms (18 frames: F1395..F1413)

STATE BEFORE:
  Array + `NEXT ?` goal visible.

WHAT APPEARS NOW:
  - Prominent constraint pill stamps down at Y: 680 (underneath array):
    `CONSTRAINT: IN-PLACE MUTATION · O(1) EXTRA MEMORY`
  - Border in theme.cyan with chalk stamp effect.
  - Sub-note: "Cannot allocate a new result array".

CENTER-STAGE HERO:
  The strict `IN-PLACE` complexity constraint.

CAUSE:
  Narration names the crucial LeetCode 31 constraint: in-place modification.

PRIMARY SEMANTIC REACTION:
  Constraint pill stamps in with subtle scale pop (scale 1.08 -> 1.0) on word "in-place" (F1372..F1395).

MOVEMENT / MUTATION:
  Chalk border outline draws rapidly around constraint badge.

SUPPORTING REACTION:
  Memory indicator: `Auxiliary Space = O(1)`.

COMPREHENSION HOLD:
  F1395..F1413 (18 frames pause): student registers the memory restriction.

CLEANUP / EXIT:
  Constraint pill reduces to a compact icon/pill at bottom right as edge condition is introduced.

PERSISTENT STATE:
  Master array + compact in-place indicator.

STATE AFTER:
  In-place requirement firmly established.

COMPONENTS / ACTUAL IMPORT PATHS:
  - RoughBox (@dsa/kit/components)
  - theme, fonts (@dsa/kit/lib/theme)

MOTION PURPOSE:
  Teach constraint: in-place requirement limits allowed techniques.

WHAT MUST NOT APPEAR YET:
  No pointer manipulation or swap operations.

VALIDATION:
  In-place constraint highlighted prominently without breaking zero-collision rules.
```

---

### BEAT 19 — `S02_NO_GREATER`
```text
BEAT: 19 / 23
ANCHOR: S02_NO_GREATER
NARRATION: "If a greater permutation does not exist,"
WORD IDs: W0091 ("If") to W0097 ("exist,")
AUDIO: 47,100 ms .. 49,800 ms (spoken)
FRAMES: F1413 .. F1506 [seg: 1413..1506, spoken: 1413..1494]
AVAILABLE REAL PAUSE: 400 ms (12 frames: F1494..F1506)

STATE BEFORE:
  Master array visible; constraint pill docked.

WHAT APPEARS NOW:
  - Edge-case condition card emerges at Y: 260..340:
    `EDGE CONDITION: IF NO GREATER PERMUTATION EXISTS`
  - Descending trend indicator: `(e.g., when values are in descending order)`
  - Sub-note: "We have reached the very last lexicographical permutation".

CENTER-STAGE HERO:
  The edge-condition concept: reaching the maximum permutation.

CAUSE:
  Narration introduces the special boundary condition.

PRIMARY SEMANTIC REACTION:
  Card fades in with warning theme border (theme.warn `#ef4444` / theme.gold) on word "exist" (F1477..F1494).

MOVEMENT / MUTATION:
  Subtle descending step icon `↘ ↘ ↘` illustrates descending order.

SUPPORTING REACTION:
  Question: "What should happen at the end of the dictionary?"

COMPREHENSION HOLD:
  F1494..F1506 (12 frames pause): pause before wraparound rule is spoken.

CLEANUP / EXIT:
  Condition card connects directly to wraparound arrow in Beat 20.

PERSISTENT STATE:
  Master array + Edge condition card.

STATE AFTER:
  Viewer anticipates how the algorithm handles the end of permutations.

COMPONENTS / ACTUAL IMPORT PATHS:
  - RoughBox, RoughLine (@dsa/kit/components)
  - theme, fonts (@dsa/kit/lib/theme)

MOTION PURPOSE:
  Teach boundary condition conceptually before giving the rule.

WHAT MUST NOT APPEAR YET:
  No concrete array `[3, 2, 1]`; no reversal code.

VALIDATION:
  No concrete array spoiler; purely conceptual.
```

---

### BEAT 20 — `S02_SMALLEST_WRAP`
```text
BEAT: 20 / 23
ANCHOR: S02_SMALLEST_WRAP
NARRATION: "then we have to return to the smallest possible arrangement."
WORD IDs: W0098 ("then") to W0107 ("arrangement.")
AUDIO: 50,200 ms .. 53,960 ms (spoken)
FRAMES: F1506 .. F1636 [seg: 1506..1636, spoken: 1506..1619]
AVAILABLE REAL PAUSE: 570 ms (17 frames: F1619..F1636)

STATE BEFORE:
  Edge condition card active at Y: 280.

WHAT APPEARS NOW:
  - Circular wraparound arrow loops from the right end back to the very beginning:
    `LAST (DESCENDING) ──────── (WRAPAROUND ↺) ────────► SMALLEST (ASCENDING)`
  - Rule banner at Y: 680:
    `WRAPAROUND RULE: RESTART AT LOWEST ORDER (SORTED ASCENDING)`

CENTER-STAGE HERO:
  The wraparound rule: cycling back to the smallest permutation.

CAUSE:
  Narration states the required behavior when no greater permutation exists.

PRIMARY SEMANTIC REACTION:
  A sweeping circular chalk arc (RoughLine with curved path) draws from right to left on word "return" (F1528..F1555).
  Destination pill `SMALLEST POSSIBLE (ASCENDING)` illuminates in theme.good (`#22c55e`).

MOVEMENT / MUTATION:
  Circular loop stroke-dashoffset animation over 24 frames.

SUPPORTING REACTION:
  Note: "Like an odometer rolling over: 999 -> 000".

COMPREHENSION HOLD:
  F1619..F1636 (17 frames pause): viewer absorbs the wraparound circularity.

CLEANUP / EXIT:
  Wraparound loop dissolves smoothly between F1628 and F1636, returning focus to the master challenge.

PERSISTENT STATE:
  Master array.

STATE AFTER:
  All problem constraints and edge rules are 100% understood.

COMPONENTS / ACTUAL IMPORT PATHS:
  - RoughLine, RoughBox (@dsa/kit/components)
  - theme, fonts (@dsa/kit/lib/theme)

MOTION PURPOSE:
  Teach cyclical/wraparound property of permutations.

WHAT MUST NOT APPEAR YET:
  No reverse array mechanics or algorithm logic.

VALIDATION:
  Wraparound concept presented cleanly.
```

---

### BEAT 21 — `S02_REAL_QUESTION`
```text
BEAT: 21 / 23
ANCHOR: S02_REAL_QUESTION
NARRATION: "So the real question is,"
WORD IDs: W0108 ("So") to W0112 ("is,")
AUDIO: 54,530 ms .. 56,520 ms (spoken)
FRAMES: F1636 .. F1715 [seg: 1636..1715, spoken: 1636..1696]
AVAILABLE REAL PAUSE: 640 ms (19 frames: F1696..F1715)

STATE BEFORE:
  Wraparound graphics faded; master array centered.

WHAT APPEARS NOW:
  - All peripheral notes clear completely.
  - Camera subtly pushes in on the master array `[2, 1, 5, 4, 4, 3, 0]` (scale 1.00 -> 1.03).
  - Prominent question badge appears directly above the array (Y: 290):
    `THE REAL QUESTION` (in theme.gold `#fbbf24`)
  - A glowing spotlight falls on the master array.

CENTER-STAGE HERO:
  The master array as the focal object of inquiry.

CAUSE:
  Narration pivots from rules to the core algorithmic challenge.

PRIMARY SEMANTIC REACTION:
  Focus sharpens on the 7-slot track. Track border glows warmly.

MOVEMENT / MUTATION:
  Gentle zoom/punch-in (scale: 1.00 -> 1.03 over 20 frames).

SUPPORTING REACTION:
  Underline draws under `THE REAL QUESTION`.

COMPREHENSION HOLD:
  F1696..F1715 (19 frames pause): suspenseful pause before the efficiency dilemma is stated.

CLEANUP / EXIT:
  Badge shifts to header position as question text expands in Beat 22.

PERSISTENT STATE:
  Master array at center stage.

STATE AFTER:
  Center stage primed for the core problem statement.

COMPONENTS / ACTUAL IMPORT PATHS:
  - ArrayTrackV2 (@dsa/kit/components/array)
  - RoughBox, RoughLine (@dsa/kit/components)
  - theme, fonts (@dsa/kit/lib/theme)

MOTION PURPOSE:
  Reorient and concentrate viewer focus onto the master data structure.

WHAT MUST NOT APPEAR YET:
  No brute force code or optimal algorithm clues.

VALIDATION:
  Atmosphere becomes focused and dramatic.
```

---

### BEAT 22 — `S02_WITHOUT_ALL`
```text
BEAT: 22 / 23
ANCHOR: S02_WITHOUT_ALL
NARRATION: "how can we move to the next arrangement without generating every permutation? Before we solve that directly,"
WORD IDs: W0113 ("how") to W0129 ("directly,")
AUDIO: 57,160 ms .. 65,900 ms (spoken)
FRAMES: F1715 .. F2005 [seg: 1715..2005, spoken: 1715..1977]
AVAILABLE REAL PAUSE: 920 ms (28 frames: F1977..F2005)

STATE BEFORE:
  Master array in spotlight with `THE REAL QUESTION` badge.

WHAT APPEARS NOW:
  - Spoken question appears in hero chalk typography (Y: 240..320):
    `HOW TO FIND THE NEXT ARRANGEMENT`
    `WITHOUT GENERATING EVERY PERMUTATION?`
  - The naive brute-force explosion is visually questioned below (Y: 620..710):
    `GENERATE ALL 7! = 5,040 PERMUTATIONS?`
    Struck with a bold red chalk cross `✖ TOO EXPENSIVE / FORBIDDEN!`
  - Highlight note: "N! explodes exponentially: for N=10, 10! = 3.6 million!"

CENTER-STAGE HERO:
  The fundamental algorithmic dilemma: avoiding factorial explosion.

CAUSE:
  Narration directly challenges the naive approach of generating all permutations.

PRIMARY SEMANTIC REACTION:
  On words "generating every permutation" (F1812..F1885):
  - Factorial badge `7! = 5,040` appears.
  - Large red `✖` slashes across it.
  On words "Before we solve that directly" (F1917..F1977):
  - Red cross settles; question marks transition to method preparation.

MOVEMENT / MUTATION:
  Red cross draws in 2 sharp strokes (F1860..F1880). Badge shakes subtly (±3px).

SUPPORTING REACTION:
  Memory/time complexity warning icon: `O(N! · N)`.

COMPREHENSION HOLD:
  F1977..F2005 (28 frames pause): viewer fully grasps why a direct single-pass algorithm will be needed.

CLEANUP / EXIT:
  Master array and factorial question begin smooth fade-out (F1995..F2005) to clear center stage for Approach 1 handoff.

PERSISTENT STATE:
  Top header.

STATE AFTER:
  The problem is crystal clear, constraints are clear, and stage is clearing.

COMPONENTS / ACTUAL IMPORT PATHS:
  - RoughLine, RoughBox (@dsa/kit/components)
  - ArrayTrackV2 (@dsa/kit/components/array)
  - theme, fonts (@dsa/kit/lib/theme)

MOTION PURPOSE:
  Teach why naive brute-force is problematic and motivate algorithmic study.

WHAT MUST NOT APPEAR YET:
  No brute-force recursion tree yet (Scene 03 owns that!).

VALIDATION:
  Factorial warning is intuitive and accurate.
```

---

### BEAT 23 — `S02_OBVIOUS`
```text
BEAT: 23 / 23
ANCHOR: S02_OBVIOUS
NARRATION: "let's first see the obvious approach."
WORD IDs: W0130 ("let's") to W0135 ("approach.")
AUDIO: 66,820 ms .. 69,180 ms (spoken)
FRAMES: F2005 .. F2075 [seg: 2005..2075, spoken: 2005..2075]
AVAILABLE REAL PAUSE: 0 ms (final scene boundary at F2075)

STATE BEFORE:
  Master array fading out; stage clearing.

WHAT APPEARS NOW:
  - Center stage is completely cleaned of the 7-slot master array.
  - Hero approach banner glides into upper-center (Y: 340):
    `APPROACH 1 · BRUTE FORCE`
  - Subtitle card at Y: 420:
    `GENERATE ALL PERMUTATIONS & FIND SUCCESSOR`
  - Complexity preview pill at Y: 500:
    `TIME: O(N! · N)  ·  SPACE: O(N!)`
  - Lower center stage (Y: 560..780) is intentionally clean, ready for Scene 03's tiny 3-element demo!

CENTER-STAGE HERO:
  `APPROACH 1 · BRUTE FORCE` identity card.

CAUSE:
  Narration authorizes the start of the first method.

PRIMARY SEMANTIC REACTION:
  Approach 1 card materializes with confident pop (scale: 0.95 -> 1.0, opacity: 0 -> 1) on word "obvious approach" (F2043..F2075).

MOVEMENT / MUTATION:
  Golden chalk border draws around `APPROACH 1 · BRUTE FORCE`.

SUPPORTING REACTION:
  Subtle spotlight illuminates the method card.

COMPREHENSION HOLD:
  F2065..F2074: resting state before seamless handoff into Scene 03.

CLEANUP / EXIT:
  Exact continuity handoff state into Scene 03.

PERSISTENT STATE:
  Top header + `APPROACH 1 · BRUTE FORCE` banner. Center stage clean.

STATE AFTER:
  Exact Scene 03 initial state:
  ```text
  01 · ARRAYS & HASHING
  NEXT PERMUTATION · LC 31
  APPROACH 1 · BRUTE FORCE
  CENTER STAGE: CLEAN & READY FOR TINY [1, 2, 3] EXAMPLE
  ```

COMPONENTS / ACTUAL IMPORT PATHS:
  - ProblemOpenerShell (@dsa/kit/components/ProblemOpenerShell)
  - RoughBox, RoughLine (@dsa/kit/components)
  - theme, fonts (@dsa/kit/lib/theme)

MOTION PURPOSE:
  Semantic handoff to Method 1; clear board for next scene's smaller teaching testcase.

WHAT MUST NOT APPEAR YET:
  No recursion tree or permutation generation before Scene 03.

VALIDATION:
  Clean handoff state. Total frames: exactly 2075.
```

---

## 4. Continuity Checkpoints

| Checkpoint | Frame | Expected Visual State | Verification Rationale |
|---|---|---|---|
| **CP-01** | F0 | Top header visible, center stage clean | Exact continuity from Scene 01 F766 handoff |
| **CP-02** | F40 | 4 neutral position markers at center | Beat 01 "numbers" premise |
| **CP-03** | F265 | `PERMUTATION` formula with gold underline | Beat 03 formal definition |
| **CP-04** | F480 | Lexicographical axis `SMALLER ──► LARGER` | Beat 04 dictionary order |
| **CP-05** | F600 | Distant jump struck with red `✖` | Beat 05 rejection of arbitrary bigger |
| **CP-06** | F690 | `CURRENT ──► NEXT` adjacency step | Beat 06 immediate successor |
| **CP-07** | F780 | `NEXT = min { P > CURRENT }` formula | Beat 07 mathematical definition |
| **CP-08** | F920 | 7 empty slots with index row `0..6` | Beat 08 master array container enters |
| **CP-09** | F970 | Value `2` drops into slot 0 | Beat 09 first value |
| **CP-10** | F1060 | First `4` drops into slot 3 | Beat 12 token W0068 |
| **CP-11** | F1090 | Second `4` drops into slot 4 | Beat 13 token W0069 |
| **CP-12** | F1160 | Full array `[2, 1, 5, 4, 4, 3, 0]` complete | Beat 15 all values assembled |
| **CP-13** | F1220 | Boundary box `THIS SAME ARRAY` | Beat 16 single array identity |
| **CP-14** | F1290 | Arrow to `NEXT ?` (unresolved) | Beat 17 unsolved transformation |
| **CP-15** | F1380 | `IN-PLACE · O(1) EXTRA SPACE` badge | Beat 18 memory constraint |
| **CP-16** | F1550 | Circular wraparound loop arrow | Beat 20 wraparound to smallest |
| **CP-17** | F1860 | `7! = 5,040` struck with red `✖` | Beat 22 avoid exhaustive generation |
| **CP-18** | F2065 | `APPROACH 1 · BRUTE FORCE` banner, center clean | Beat 23 handoff into Scene 03 |
