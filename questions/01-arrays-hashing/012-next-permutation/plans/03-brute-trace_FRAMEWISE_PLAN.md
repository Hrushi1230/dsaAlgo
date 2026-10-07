# Q12 — Next Permutation (LC 31)
# Scene 03 · Method 1: Brute Force Trace
## EXACT AUDIO-SYNCHRONIZED FRAME-WISE PLAN

**Course:** Code With Animation  
**Roadmap:** 227 Problems · 19 Patterns  
**Pattern:** 01 · Arrays & Hashing  
**Problem:** #012 Next Permutation · LC 31 · Medium  
**Scene:** 03-brute-trace  
**Audio File:** `remotion-project/public/audio/012/03-brute-trace.mp3`  
**Exact Sync File:** `questions/01-arrays-hashing/012-next-permutation/sync/03-brute-trace.json`  
**Anchor Manifest:** `questions/01-arrays-hashing/012-next-permutation/sync/03-brute-trace.anchors.json`  
**FPS:** 30  
**Exact Total Frames:** 2,275 frames (75.840 seconds)  
**Total Words:** 155 words (`W0000` to `W0154`)  
**Total Anchors:** 28 anchors (`S03_SIMPLEST` through `S03_CODE_HANDOFF`)  

---

## 1. Mandatory Scene Contract

```text
SCENE: 03-brute-trace
QUESTION: 012 · Next Permutation (LeetCode 31)
BEAT TYPE: METHOD 1 BRUTE FORCE VISUAL TRACE & LIMITATION DERIVATION
AUDIO FILE: audio/012/03-brute-trace.mp3
SYNC FILE: sync/03-brute-trace.json
ANCHORS FILE: sync/03-brute-trace.anchors.json
FPS: 30
TOTAL FRAMES: 2275
PEDAGOGICAL GOAL:
  1. Establish Method 1: Generate all permutations -> sort in lexicographical order -> find current -> pick immediately next.
  2. Walk through small 3-element example array [1, 2, 3] assembled in ArrayTrackV2.
  3. Reveal all 6 ordered permutations sequentially (P0 through P5) in spoken lockstep without crowding the canvas:
     - P0: [1, 2, 3]
     - P1: [1, 3, 2]
     - P2: [2, 1, 3]
     - P3: [2, 3, 1]
     - P4: [3, 1, 2]
     - P5: [3, 2, 1]
  4. Demonstrate CURRENT [1, 3, 2] -> NEXT [2, 1, 3] adjacency transition with direct arrow proof.
  5. Demonstrate wraparound: LAST [3, 2, 1] -> FIRST [1, 2, 3] via circular loop curve.
  6. Confirm logical correctness, then expose the scalability flaw: combinatorial explosion.
  7. Hand off to an empty production code surface ready for Scene 04.
TRUTH CONSTRAINTS:
  - Array V2 Law: Slots stay fixed, values move, indices never move.
  - Qualitative growth only: NO "n!" or "O(N! · N)" formula mentioned yet (reserved for Scene 05).
  - No optimal algorithm spoilers: Do not teach suffix reversal or pivot logic here.
  - Zero guessed frames or coordinates: Derived strictly from sync/03-brute-trace.anchors.json.
```

---

## 2. Component Delta (REUSE / EXTEND / CREATE)

```text
REUSE (Kit / Shared Components):
  - ProblemOpenerShell (@dsa/kit/components/ProblemOpenerShell): Pinned at top (Y: 28..124) with "APPROACH 1 · BRUTE FORCE".
  - ArrayTrackV2 (@dsa/kit/components/array/ArrayTrackV2): Fixed 3-slot array track for tiny example and mini permutation rows.
  - ArrayValueV2 (@dsa/kit/components/array/ArrayValueV2): Rendered values (1, 2, 3) with pop & drop physics.
  - ChalkboardBackground, ChalkFilters (@dsa/kit/lib/chalk): Background canvas and SVG chalk filter primitives.
  - theme, fonts (@dsa/kit/lib/theme): Course tokens (boardBg, chalkText, chalkDim, pivot, good, warn, cyan).
  - RoughBox, RoughLine (@dsa/kit/components): Chalk cards, underlines, borders, and connectors.
  - ChalkDust (@dsa/kit/components/ChalkDust): Ambient chalk particle atmosphere.
  - Captions (@dsa/kit/components/Captions): Word-level karaoke-synced caption bar anchored at bottom (Y: 980).

EXTEND:
  - Permutation Sequence Rail Rig: Compact vertical/horizontal list layout that displays active hero permutation strongly while completed permutations dim into an ordered breadcrumb rail.
  - Wraparound Curved Arrow: SVG Bezier path linking LAST [3, 2, 1] to FIRST [1, 2, 3].

CREATE:
  - sync/03-brute-trace.anchors.json: Authoritative 28-anchor timing manifest.
  - plans/03-brute-trace_FRAMEWISE_PLAN.md: This framewise choreographic specification.
  - plans/03-brute-trace_FRAME_QA_CHECKLIST.md: 28 visual checkpoints & invariants.
  - src/Scene03BruteTrace.tsx: Remotion composition implementation.

DO NOT TOUCH:
  - kit/ core components and libraries.
  - Past scenes (Scene 01, Scene 02, Q10, Q11).
  - Raw audio sync file.
```

---

## 3. Optical Layout & Spatial Geometry

```text
Canvas: 1920 x 1080
----------------------------------------------------------------------------------------------------
ZONE A: Problem & Approach Header (Y: 28 to Y: 124)
  - ProblemOpenerShell: "01 · ARRAYS & HASHING", "Next Permutation", "APPROACH 1 · BRUTE FORCE"
  - Settled at frame 0 (continuity from Scene 02).

ZONE B: Subtitle & Stage Breadcrumb (Y: 140 to Y: 210)
  - Section subtitle: "METHOD 1: BRUTE FORCE · STEP-BY-STEP TRACE" (font: Outfit 18px, tracking: 0.2em)
  - Topic Header: Dynamic per stage (e.g. "Generate All Permutations", "Lexicographical Permutation List", "Adjacency Proof")

ZONE C: Primary Center-Stage Stage (Y: 220 to Y: 720)
  - Stage 1 (Beats 01..05, F0..F495): Four-step chalk pipeline (GENERATE ──► ORDER ──► FIND ──► MOVE NEXT)
  - Stage 2 (Beats 06..10, F495..F823): Tiny example array [1, 2, 3] assembled slot by slot
  - Stage 3 (Beats 11..18, F823..F1313): Lexicographic permutation sequence P0..P5 + CURRENT -> NEXT adjacency proof
  - Stage 4 (Beats 19..25, F1313..F1874): Pipeline recap + LAST -> FIRST wraparound loop + correctness stamp
  - Stage 5 (Beats 26..28, F1874..F2275): Rapid growth tension + code handoff surface ready for Scene 04

ZONE D: State Callouts & Supporting Cards (Y: 740 to Y: 890)
  - Status badges, formula callouts, and warning cards placed with >= 60px clearance below main stage.

ZONE E: Karaoke Captions (Y: 960 to Y: 1040)
  - Strictly synchronized with audioSyncV2 and sync/03-brute-trace.json.
```

---

## 4. Frame-by-Frame Choreography (All 28 Anchors)

### BEAT 01 — `S03_SIMPLEST`
```text
BEAT: 01 / 28
ANCHOR: S03_SIMPLEST
NARRATION: "The simplest idea is"
WORD IDs: W0000 to W0003
AUDIO: 0 ms .. 1460 ms (spoken)
FRAMES: F0 .. F44 [seg: 0..44, spoken: 0..44]
AVAILABLE REAL PAUSE: 0 ms (0 frames: F44..F44)

STATE BEFORE:
  Inherited from previous beat.

WHAT APPEARS NOW:
  ProblemOpenerShell pinned at top with 'APPROACH 1 · BRUTE FORCE'. Center stage opens with title card 'The Simplest Idea'.

CENTER-STAGE HERO:
  Brute Force Method Identity

CAUSE:
  Narration introduces the fundamental brute-force concept.

PRIMARY SEMANTIC REACTION:
  State transition matching spoken narration cue.

MOVEMENT / MUTATION:
  Gentle fade-in of method card (F0..F20). Title settles cleanly without erratic movement.

SUPPORTING REACTION:
  Chalk labels and focus highlights align with primary hero.

COMPREHENSION HOLD:
  F20..F44: Viewer absorbs approach title.

CLEANUP / EXIT:
  Title shifts upward slightly to establish the 4-step pipeline header.

PERSISTENT STATE:
  Top header + method context.

STATE AFTER:
  Clean stage ready for next spoken beat.

COMPONENTS / ACTUAL IMPORT PATHS:
  - ProblemOpenerShell (@dsa/kit/components/ProblemOpenerShell)
  - ArrayTrackV2, ArrayValueV2 (@dsa/kit/components/array)
  - RoughBox, RoughLine (@dsa/kit/components)
  - theme, fonts (@dsa/kit/lib/theme)

MOTION PURPOSE:
  Teach state / cause->effect / direct attention / semantic continuity.

WHAT MUST NOT APPEAR YET:
  No pipeline steps or array values yet.

VALIDATION:
  Center stage clean; exact continuity from Scene 02 handoff.
```

---

### BEAT 02 — `S03_GENERATE`
```text
BEAT: 02 / 28
ANCHOR: S03_GENERATE
NARRATION: "generate every possible permutation"
WORD IDs: W0004 to W0007
AUDIO: 1460 ms .. 4220 ms (spoken)
FRAMES: F44 .. F145 [seg: 44..145, spoken: 44..127]
AVAILABLE REAL PAUSE: 600 ms (18 frames: F127..F145)

STATE BEFORE:
  Inherited from previous beat.

WHAT APPEARS NOW:
  Chalk node [ 1. GENERATE ] appears at X: 260, Y: 380 with subtle neon glow. Label: 'Generate all permutations'.

CENTER-STAGE HERO:
  Pipeline Step 1: GENERATE

CAUSE:
  Narration states 'generate every possible permutation'.

PRIMARY SEMANTIC REACTION:
  State transition matching spoken narration cue.

MOVEMENT / MUTATION:
  RoughBox border sketches around node between F44..F75. Text pops in with spring.

SUPPORTING REACTION:
  Chalk labels and focus highlights align with primary hero.

COMPREHENSION HOLD:
  F127..F145 (18 frames pause): Let node 1 settle.

CLEANUP / EXIT:
  Persist node 1 as first node in pipeline.

PERSISTENT STATE:
  Pipeline Node 1.

STATE AFTER:
  Clean stage ready for next spoken beat.

COMPONENTS / ACTUAL IMPORT PATHS:
  - ProblemOpenerShell (@dsa/kit/components/ProblemOpenerShell)
  - ArrayTrackV2, ArrayValueV2 (@dsa/kit/components/array)
  - RoughBox, RoughLine (@dsa/kit/components)
  - theme, fonts (@dsa/kit/lib/theme)

MOTION PURPOSE:
  Teach state / cause->effect / direct attention / semantic continuity.

WHAT MUST NOT APPEAR YET:
  Node 2 (ORDER), Node 3 (FIND), Node 4 (NEXT) must NOT appear yet.

VALIDATION:
  Only step 1 is visible on screen.
```

---

### BEAT 03 — `S03_ORDER`
```text
BEAT: 03 / 28
ANCHOR: S03_ORDER
NARRATION: "then arrange all of them in lexicographical order"
WORD IDs: W0008 to W0016
AUDIO: 4840 ms .. 8400 ms (spoken)
FRAMES: F145 .. F274 [seg: 145..274, spoken: 145..252]
AVAILABLE REAL PAUSE: 733 ms (22 frames: F252..F274)

STATE BEFORE:
  Inherited from previous beat.

WHAT APPEARS NOW:
  Arrow draws from Node 1 to Node 2 [ 2. ORDER ] at X: 640, Y: 380. Label: 'Arrange in lexicographical order'.

CENTER-STAGE HERO:
  Pipeline Step 2: ORDER

CAUSE:
  Narration states 'then arrange all of them in lexicographical order'.

PRIMARY SEMANTIC REACTION:
  State transition matching spoken narration cue.

MOVEMENT / MUTATION:
  Connecting arrow draws F145..F175. Node 2 sketches F175..F215.

SUPPORTING REACTION:
  Chalk labels and focus highlights align with primary hero.

COMPREHENSION HOLD:
  F252..F274 (22 frames pause): Comprehension hold for ordering step.

CLEANUP / EXIT:
  Persist nodes 1 and 2.

PERSISTENT STATE:
  Pipeline Nodes 1 and 2.

STATE AFTER:
  Clean stage ready for next spoken beat.

COMPONENTS / ACTUAL IMPORT PATHS:
  - ProblemOpenerShell (@dsa/kit/components/ProblemOpenerShell)
  - ArrayTrackV2, ArrayValueV2 (@dsa/kit/components/array)
  - RoughBox, RoughLine (@dsa/kit/components)
  - theme, fonts (@dsa/kit/lib/theme)

MOTION PURPOSE:
  Teach state / cause->effect / direct attention / semantic continuity.

WHAT MUST NOT APPEAR YET:
  Node 3 (FIND) and Node 4 (NEXT) must NOT appear yet.

VALIDATION:
  Two connected pipeline nodes visible.
```

---

### BEAT 04 — `S03_FIND`
```text
BEAT: 04 / 28
ANCHOR: S03_FIND
NARRATION: "After that, find our current permutation in that list"
WORD IDs: W0017 to W0025
AUDIO: 9120 ms .. 13160 ms (spoken)
FRAMES: F274 .. F395 [seg: 274..395, spoken: 274..395]
AVAILABLE REAL PAUSE: 0 ms (0 frames: F395..F395)

STATE BEFORE:
  Inherited from previous beat.

WHAT APPEARS NOW:
  Arrow draws from Node 2 to Node 3 [ 3. FIND ] at X: 1020, Y: 380. Label: 'Locate current permutation in sorted list'.

CENTER-STAGE HERO:
  Pipeline Step 3: FIND

CAUSE:
  Narration states 'find our current permutation in that list'.

PRIMARY SEMANTIC REACTION:
  State transition matching spoken narration cue.

MOVEMENT / MUTATION:
  Arrow draws F274..F300. Node 3 sketches F300..F340. Magnifying glass icon appears.

SUPPORTING REACTION:
  Chalk labels and focus highlights align with primary hero.

COMPREHENSION HOLD:
  F370..F395: Node settles before action verb.

CLEANUP / EXIT:
  Persist nodes 1, 2, and 3.

PERSISTENT STATE:
  Pipeline Nodes 1, 2, 3.

STATE AFTER:
  Clean stage ready for next spoken beat.

COMPONENTS / ACTUAL IMPORT PATHS:
  - ProblemOpenerShell (@dsa/kit/components/ProblemOpenerShell)
  - ArrayTrackV2, ArrayValueV2 (@dsa/kit/components/array)
  - RoughBox, RoughLine (@dsa/kit/components)
  - theme, fonts (@dsa/kit/lib/theme)

MOTION PURPOSE:
  Teach state / cause->effect / direct attention / semantic continuity.

WHAT MUST NOT APPEAR YET:
  Node 4 (NEXT) must NOT appear yet.

VALIDATION:
  Three pipeline nodes connected in series.
```

---

### BEAT 05 — `S03_TAKE_AFTER`
```text
BEAT: 05 / 28
ANCHOR: S03_TAKE_AFTER
NARRATION: "and take the one immediately after it"
WORD IDs: W0026 to W0032
AUDIO: 13160 ms .. 15900 ms (spoken)
FRAMES: F395 .. F495 [seg: 395..495, spoken: 395..477]
AVAILABLE REAL PAUSE: 600 ms (18 frames: F477..F495)

STATE BEFORE:
  Inherited from previous beat.

WHAT APPEARS NOW:
  Arrow draws from Node 3 to Node 4 [ 4. NEXT (+1) ] at X: 1400, Y: 380. Label: 'Take immediate successor'.

CENTER-STAGE HERO:
  Pipeline Step 4: TAKE NEXT

CAUSE:
  Narration states 'and take the one immediately after it'.

PRIMARY SEMANTIC REACTION:
  State transition matching spoken narration cue.

MOVEMENT / MUTATION:
  Arrow draws F395..F420. Node 4 sketches with gold accent (#FFD166). Complete 4-step pipeline now visible across width.

SUPPORTING REACTION:
  Chalk labels and focus highlights align with primary hero.

COMPREHENSION HOLD:
  F477..F495 (18 frames pause): Full pipeline comprehension hold.

CLEANUP / EXIT:
  Pipeline gracefully scales down and moves to top shelf (Y: 200) to clear center for concrete example.

PERSISTENT STATE:
  Condensed 4-step pipeline breadcrumb at top.

STATE AFTER:
  Clean stage ready for next spoken beat.

COMPONENTS / ACTUAL IMPORT PATHS:
  - ProblemOpenerShell (@dsa/kit/components/ProblemOpenerShell)
  - ArrayTrackV2, ArrayValueV2 (@dsa/kit/components/array)
  - RoughBox, RoughLine (@dsa/kit/components)
  - theme, fonts (@dsa/kit/lib/theme)

MOTION PURPOSE:
  Teach state / cause->effect / direct attention / semantic continuity.

WHAT MUST NOT APPEAR YET:
  Array values 1, 2, 3 must NOT appear yet.

VALIDATION:
  Complete 4-node pipeline visible across center stage.
```

---

### BEAT 06 — `S03_SMALL_ARRAY`
```text
BEAT: 06 / 28
ANCHOR: S03_SMALL_ARRAY
NARRATION: "For a very small array this idea is easy to understand. Suppose we have"
WORD IDs: W0033 to W0046
AUDIO: 16500 ms .. 22100 ms (spoken)
FRAMES: F495 .. F663 [seg: 495..663, spoken: 495..663]
AVAILABLE REAL PAUSE: 0 ms (0 frames: F663..F663)

STATE BEFORE:
  Inherited from previous beat.

WHAT APPEARS NOW:
  A 3-slot ArrayTrackV2 materializes at center stage (Y: 420, slots 0..2, indices [0] [1] [2]). Label: 'TINY EXAMPLE · 3 ELEMENTS'.

CENTER-STAGE HERO:
  Tiny Example Setup: ArrayTrackV2

CAUSE:
  Narration: 'For a very small array this idea is easy to understand. Suppose we have...'

PRIMARY SEMANTIC REACTION:
  State transition matching spoken narration cue.

MOVEMENT / MUTATION:
  Array track fades in with pop spring (F495..F540). Index row settles below track with 20px clearance.

SUPPORTING REACTION:
  Chalk labels and focus highlights align with primary hero.

COMPREHENSION HOLD:
  F633..F663 (30 frames pause): Empty slots [ · ] [ · ] [ · ] ready for incoming numbers.

CLEANUP / EXIT:
  Keep empty 3-slot track for sequential values.

PERSISTENT STATE:
  Empty 3-slot ArrayTrackV2.

STATE AFTER:
  Clean stage ready for next spoken beat.

COMPONENTS / ACTUAL IMPORT PATHS:
  - ProblemOpenerShell (@dsa/kit/components/ProblemOpenerShell)
  - ArrayTrackV2, ArrayValueV2 (@dsa/kit/components/array)
  - RoughBox, RoughLine (@dsa/kit/components)
  - theme, fonts (@dsa/kit/lib/theme)

MOTION PURPOSE:
  Teach state / cause->effect / direct attention / semantic continuity.

WHAT MUST NOT APPEAR YET:
  Numbers 1, 2, 3 must NOT appear in slots yet.

VALIDATION:
  3 empty slots visible with index row [0] [1] [2].
```

---

### BEAT 07 — `S03_E0`
```text
BEAT: 07 / 28
ANCHOR: S03_E0
NARRATION: "1,"
WORD IDs: W0047 to W0047
AUDIO: 22100 ms .. 22840 ms (spoken)
FRAMES: F663 .. F692 [seg: 663..692, spoken: 663..685]
AVAILABLE REAL PAUSE: 233 ms (7 frames: F685..F692)

STATE BEFORE:
  Inherited from previous beat.

WHAT APPEARS NOW:
  Value '1' in cyan chalk drops from above (Y: 340 -> 420) into slot 0. Slots 1 and 2 remain blank.

CENTER-STAGE HERO:
  First Value: nums[0] = 1

CAUSE:
  Narration speaks '1,' (W0047).

PRIMARY SEMANTIC REACTION:
  State transition matching spoken narration cue.

MOVEMENT / MUTATION:
  Elastic bounce drop (F663..F680) with subtle chalk puff.

SUPPORTING REACTION:
  Chalk labels and focus highlights align with primary hero.

COMPREHENSION HOLD:
  F685..F692 (7 frames pause): Value 1 rests in slot 0.

CLEANUP / EXIT:
  Slot 0 populated.

PERSISTENT STATE:
  [ 1 ] [ · ] [ · ]

STATE AFTER:
  Clean stage ready for next spoken beat.

COMPONENTS / ACTUAL IMPORT PATHS:
  - ProblemOpenerShell (@dsa/kit/components/ProblemOpenerShell)
  - ArrayTrackV2, ArrayValueV2 (@dsa/kit/components/array)
  - RoughBox, RoughLine (@dsa/kit/components)
  - theme, fonts (@dsa/kit/lib/theme)

MOTION PURPOSE:
  Teach state / cause->effect / direct attention / semantic continuity.

WHAT MUST NOT APPEAR YET:
  Values 2 and 3 must NOT appear yet.

VALIDATION:
  Slot 0 has value 1, slots 1..2 empty.
```

---

### BEAT 08 — `S03_E1`
```text
BEAT: 08 / 28
ANCHOR: S03_E1
NARRATION: "2,"
WORD IDs: W0048 to W0048
AUDIO: 23080 ms .. 23540 ms (spoken)
FRAMES: F692 .. F717 [seg: 692..717, spoken: 692..706]
AVAILABLE REAL PAUSE: 367 ms (11 frames: F706..F717)

STATE BEFORE:
  Inherited from previous beat.

WHAT APPEARS NOW:
  Value '2' in cyan chalk drops from above into slot 1. Slot 2 remains blank.

CENTER-STAGE HERO:
  Second Value: nums[1] = 2

CAUSE:
  Narration speaks '2,' (W0048).

PRIMARY SEMANTIC REACTION:
  State transition matching spoken narration cue.

MOVEMENT / MUTATION:
  Elastic bounce drop (F692..F705).

SUPPORTING REACTION:
  Chalk labels and focus highlights align with primary hero.

COMPREHENSION HOLD:
  F706..F717 (11 frames pause): Value 2 rests in slot 1.

CLEANUP / EXIT:
  Slots 0 and 1 populated.

PERSISTENT STATE:
  [ 1 ] [ 2 ] [ · ]

STATE AFTER:
  Clean stage ready for next spoken beat.

COMPONENTS / ACTUAL IMPORT PATHS:
  - ProblemOpenerShell (@dsa/kit/components/ProblemOpenerShell)
  - ArrayTrackV2, ArrayValueV2 (@dsa/kit/components/array)
  - RoughBox, RoughLine (@dsa/kit/components)
  - theme, fonts (@dsa/kit/lib/theme)

MOTION PURPOSE:
  Teach state / cause->effect / direct attention / semantic continuity.

WHAT MUST NOT APPEAR YET:
  Value 3 must NOT appear yet.

VALIDATION:
  Slots 0 and 1 have [1, 2]; slot 2 empty.
```

---

### BEAT 09 — `S03_E2`
```text
BEAT: 09 / 28
ANCHOR: S03_E2
NARRATION: "3."
WORD IDs: W0049 to W0049
AUDIO: 23900 ms .. 24340 ms (spoken)
FRAMES: F717 .. F730 [seg: 717..730, spoken: 717..730]
AVAILABLE REAL PAUSE: 0 ms (0 frames: F730..F730)

STATE BEFORE:
  Inherited from previous beat.

WHAT APPEARS NOW:
  Value '3' in cyan chalk drops into slot 2. Master tiny array [1, 2, 3] is complete!

CENTER-STAGE HERO:
  Third Value: nums[2] = 3

CAUSE:
  Narration speaks '3.' (W0049).

PRIMARY SEMANTIC REACTION:
  State transition matching spoken narration cue.

MOVEMENT / MUTATION:
  Elastic bounce drop (F717..F730). Border glow flashes once across track.

SUPPORTING REACTION:
  Chalk labels and focus highlights align with primary hero.

COMPREHENSION HOLD:
  F730: Immediate transition into list introduction.

CLEANUP / EXIT:
  Completed [1, 2, 3] stays centered.

PERSISTENT STATE:
  Master tiny array [1, 2, 3].

STATE AFTER:
  Clean stage ready for next spoken beat.

COMPONENTS / ACTUAL IMPORT PATHS:
  - ProblemOpenerShell (@dsa/kit/components/ProblemOpenerShell)
  - ArrayTrackV2, ArrayValueV2 (@dsa/kit/components/array)
  - RoughBox, RoughLine (@dsa/kit/components)
  - theme, fonts (@dsa/kit/lib/theme)

MOTION PURPOSE:
  Teach state / cause->effect / direct attention / semantic continuity.

WHAT MUST NOT APPEAR YET:
  Permutation list must NOT appear yet.

VALIDATION:
  All 3 slots populated: [1, 2, 3].
```

---

### BEAT 10 — `S03_LIST_INTRO`
```text
BEAT: 10 / 28
ANCHOR: S03_LIST_INTRO
NARRATION: "Its permutations can be arranged like this."
WORD IDs: W0050 to W0056
AUDIO: 24340 ms .. 26860 ms (spoken)
FRAMES: F730 .. F823 [seg: 730..823, spoken: 730..806]
AVAILABLE REAL PAUSE: 567 ms (17 frames: F806..F823)

STATE BEFORE:
  Inherited from previous beat.

WHAT APPEARS NOW:
  Track [1, 2, 3] glides to left stage (X: 300) as source, and an ordered vertical list guide opens at center-right. Header: 'LEXICOGRAPHICAL SEQUENCE (ALL 6 PERMUTATIONS)'.

CENTER-STAGE HERO:
  Permutation Sequence Staging

CAUSE:
  Narration: 'Its permutations can be arranged like this...'

PRIMARY SEMANTIC REACTION:
  State transition matching spoken narration cue.

MOVEMENT / MUTATION:
  Glide F730..F770. Vertical axis line draws downwards with chalk ruler marks 1..6.

SUPPORTING REACTION:
  Chalk labels and focus highlights align with primary hero.

COMPREHENSION HOLD:
  F806..F823 (17 frames pause): Stage set for sequential permutation reveals.

CLEANUP / EXIT:
  List container ready.

PERSISTENT STATE:
  List guide with 6 placeholder slots.

STATE AFTER:
  Clean stage ready for next spoken beat.

COMPONENTS / ACTUAL IMPORT PATHS:
  - ProblemOpenerShell (@dsa/kit/components/ProblemOpenerShell)
  - ArrayTrackV2, ArrayValueV2 (@dsa/kit/components/array)
  - RoughBox, RoughLine (@dsa/kit/components)
  - theme, fonts (@dsa/kit/lib/theme)

MOTION PURPOSE:
  Teach state / cause->effect / direct attention / semantic continuity.

WHAT MUST NOT APPEAR YET:
  Individual permutations P0..P5 must NOT appear yet.

VALIDATION:
  Empty vertical list axis visible.
```

---

### BEAT 11 — `S03_P0`
```text
BEAT: 11 / 28
ANCHOR: S03_P0
NARRATION: "1, 2, 3."
WORD IDs: W0057 to W0059
AUDIO: 27420 ms .. 28000 ms (spoken)
FRAMES: F823 .. F852 [seg: 823..852, spoken: 823..840]
AVAILABLE REAL PAUSE: 400 ms (12 frames: F840..F852)

STATE BEFORE:
  Inherited from previous beat.

WHAT APPEARS NOW:
  Row 1 pops into place: '1. [ 1 , 2 , 3 ]' with gold rank badge #1. Highlighted in bright chalk.

CENTER-STAGE HERO:
  Permutation 1 of 6: [1, 2, 3]

CAUSE:
  Narration speaks '1, 2, 3.' (W0057..W0059).

PRIMARY SEMANTIC REACTION:
  State transition matching spoken narration cue.

MOVEMENT / MUTATION:
  Slide-in from left (X: 520 -> 580) with spring pop F823..F838.

SUPPORTING REACTION:
  Chalk labels and focus highlights align with primary hero.

COMPREHENSION HOLD:
  F840..F852 (12 frames pause): Row 1 settles.

CLEANUP / EXIT:
  Row 1 slightly dims to secondary opacity (0.7) to allow Row 2 to take focus.

PERSISTENT STATE:
  Row 1 present in list.

STATE AFTER:
  Clean stage ready for next spoken beat.

COMPONENTS / ACTUAL IMPORT PATHS:
  - ProblemOpenerShell (@dsa/kit/components/ProblemOpenerShell)
  - ArrayTrackV2, ArrayValueV2 (@dsa/kit/components/array)
  - RoughBox, RoughLine (@dsa/kit/components)
  - theme, fonts (@dsa/kit/lib/theme)

MOTION PURPOSE:
  Teach state / cause->effect / direct attention / semantic continuity.

WHAT MUST NOT APPEAR YET:
  Rows 2..6 must NOT appear yet.

VALIDATION:
  Only Row 1 [1, 2, 3] visible in list.
```

---

### BEAT 12 — `S03_P1`
```text
BEAT: 12 / 28
ANCHOR: S03_P1
NARRATION: "1, 3, 2."
WORD IDs: W0060 to W0062
AUDIO: 28400 ms .. 29220 ms (spoken)
FRAMES: F852 .. F889 [seg: 852..889, spoken: 852..877]
AVAILABLE REAL PAUSE: 400 ms (12 frames: F877..F889)

STATE BEFORE:
  Inherited from previous beat.

WHAT APPEARS NOW:
  Row 2 pops in: '2. [ 1 , 3 , 2 ]' with rank badge #2. Highlighted as the CURRENT candidate.

CENTER-STAGE HERO:
  Permutation 2 of 6: [1, 3, 2]

CAUSE:
  Narration speaks '1, 3, 2.' (W0060..W0062).

PRIMARY SEMANTIC REACTION:
  State transition matching spoken narration cue.

MOVEMENT / MUTATION:
  Slide-in with spring pop F852..F868.

SUPPORTING REACTION:
  Chalk labels and focus highlights align with primary hero.

COMPREHENSION HOLD:
  F877..F889 (12 frames pause): Row 2 registers.

CLEANUP / EXIT:
  Row 2 dims slightly.

PERSISTENT STATE:
  Rows 1 and 2 present.

STATE AFTER:
  Clean stage ready for next spoken beat.

COMPONENTS / ACTUAL IMPORT PATHS:
  - ProblemOpenerShell (@dsa/kit/components/ProblemOpenerShell)
  - ArrayTrackV2, ArrayValueV2 (@dsa/kit/components/array)
  - RoughBox, RoughLine (@dsa/kit/components)
  - theme, fonts (@dsa/kit/lib/theme)

MOTION PURPOSE:
  Teach state / cause->effect / direct attention / semantic continuity.

WHAT MUST NOT APPEAR YET:
  Rows 3..6 must NOT appear yet.

VALIDATION:
  Rows 1 and 2 visible.
```

---

### BEAT 13 — `S03_P2`
```text
BEAT: 13 / 28
ANCHOR: S03_P2
NARRATION: "2, 1, 3."
WORD IDs: W0063 to W0065
AUDIO: 29640 ms .. 30780 ms (spoken)
FRAMES: F889 .. F938 [seg: 889..938, spoken: 889..923]
AVAILABLE REAL PAUSE: 500 ms (15 frames: F923..F938)

STATE BEFORE:
  Inherited from previous beat.

WHAT APPEARS NOW:
  Row 3 pops in: '3. [ 2 , 1 , 3 ]' with rank badge #3. (Destined to be NEXT).

CENTER-STAGE HERO:
  Permutation 3 of 6: [2, 1, 3]

CAUSE:
  Narration speaks '2, 1, 3.' (W0063..W0065).

PRIMARY SEMANTIC REACTION:
  State transition matching spoken narration cue.

MOVEMENT / MUTATION:
  Slide-in with spring pop F889..F910.

SUPPORTING REACTION:
  Chalk labels and focus highlights align with primary hero.

COMPREHENSION HOLD:
  F923..F938 (15 frames pause): Row 3 registers.

CLEANUP / EXIT:
  Row 3 dims slightly.

PERSISTENT STATE:
  Rows 1, 2, 3 present.

STATE AFTER:
  Clean stage ready for next spoken beat.

COMPONENTS / ACTUAL IMPORT PATHS:
  - ProblemOpenerShell (@dsa/kit/components/ProblemOpenerShell)
  - ArrayTrackV2, ArrayValueV2 (@dsa/kit/components/array)
  - RoughBox, RoughLine (@dsa/kit/components)
  - theme, fonts (@dsa/kit/lib/theme)

MOTION PURPOSE:
  Teach state / cause->effect / direct attention / semantic continuity.

WHAT MUST NOT APPEAR YET:
  Rows 4..6 must NOT appear yet.

VALIDATION:
  Rows 1, 2, 3 visible.
```

---

### BEAT 14 — `S03_P3`
```text
BEAT: 14 / 28
ANCHOR: S03_P3
NARRATION: "2, 3, 1."
WORD IDs: W0066 to W0068
AUDIO: 31260 ms .. 32340 ms (spoken)
FRAMES: F938 .. F986 [seg: 938..986, spoken: 938..970]
AVAILABLE REAL PAUSE: 533 ms (16 frames: F970..F986)

STATE BEFORE:
  Inherited from previous beat.

WHAT APPEARS NOW:
  Row 4 pops in: '4. [ 2 , 3 , 1 ]' with rank badge #4.

CENTER-STAGE HERO:
  Permutation 4 of 6: [2, 3, 1]

CAUSE:
  Narration speaks '2, 3, 1.' (W0066..W0068).

PRIMARY SEMANTIC REACTION:
  State transition matching spoken narration cue.

MOVEMENT / MUTATION:
  Slide-in with spring pop F938..F955.

SUPPORTING REACTION:
  Chalk labels and focus highlights align with primary hero.

COMPREHENSION HOLD:
  F970..F986 (16 frames pause): Row 4 registers.

CLEANUP / EXIT:
  Row 4 dims slightly.

PERSISTENT STATE:
  Rows 1..4 present.

STATE AFTER:
  Clean stage ready for next spoken beat.

COMPONENTS / ACTUAL IMPORT PATHS:
  - ProblemOpenerShell (@dsa/kit/components/ProblemOpenerShell)
  - ArrayTrackV2, ArrayValueV2 (@dsa/kit/components/array)
  - RoughBox, RoughLine (@dsa/kit/components)
  - theme, fonts (@dsa/kit/lib/theme)

MOTION PURPOSE:
  Teach state / cause->effect / direct attention / semantic continuity.

WHAT MUST NOT APPEAR YET:
  Rows 5 and 6 must NOT appear yet.

VALIDATION:
  Rows 1..4 visible.
```

---

### BEAT 15 — `S03_P4`
```text
BEAT: 15 / 28
ANCHOR: S03_P4
NARRATION: "3, 1, 2."
WORD IDs: W0069 to W0071
AUDIO: 32880 ms .. 34040 ms (spoken)
FRAMES: F986 .. F1036 [seg: 986..1036, spoken: 986..1021]
AVAILABLE REAL PAUSE: 500 ms (15 frames: F1021..F1036)

STATE BEFORE:
  Inherited from previous beat.

WHAT APPEARS NOW:
  Row 5 pops in: '5. [ 3 , 1 , 2 ]' with rank badge #5.

CENTER-STAGE HERO:
  Permutation 5 of 6: [3, 1, 2]

CAUSE:
  Narration speaks '3, 1, 2.' (W0069..W0071).

PRIMARY SEMANTIC REACTION:
  State transition matching spoken narration cue.

MOVEMENT / MUTATION:
  Slide-in with spring pop F986..F1005.

SUPPORTING REACTION:
  Chalk labels and focus highlights align with primary hero.

COMPREHENSION HOLD:
  F1021..F1036 (15 frames pause): Row 5 registers.

CLEANUP / EXIT:
  Row 5 dims slightly.

PERSISTENT STATE:
  Rows 1..5 present.

STATE AFTER:
  Clean stage ready for next spoken beat.

COMPONENTS / ACTUAL IMPORT PATHS:
  - ProblemOpenerShell (@dsa/kit/components/ProblemOpenerShell)
  - ArrayTrackV2, ArrayValueV2 (@dsa/kit/components/array)
  - RoughBox, RoughLine (@dsa/kit/components)
  - theme, fonts (@dsa/kit/lib/theme)

MOTION PURPOSE:
  Teach state / cause->effect / direct attention / semantic continuity.

WHAT MUST NOT APPEAR YET:
  Row 6 must NOT appear yet.

VALIDATION:
  Rows 1..5 visible.
```

---

### BEAT 16 — `S03_P5`
```text
BEAT: 16 / 28
ANCHOR: S03_P5
NARRATION: "3, 2, 1."
WORD IDs: W0072 to W0074
AUDIO: 34540 ms .. 36180 ms (spoken)
FRAMES: F1036 .. F1102 [seg: 1036..1102, spoken: 1036..1085]
AVAILABLE REAL PAUSE: 567 ms (17 frames: F1085..F1102)

STATE BEFORE:
  Inherited from previous beat.

WHAT APPEARS NOW:
  Row 6 pops in: '6. [ 3 , 2 , 1 ]' with badge #6 and 'LAST' tag in warning chalk.

CENTER-STAGE HERO:
  Permutation 6 of 6: [3, 2, 1] (LAST)

CAUSE:
  Narration speaks '3, 2, 1.' (W0072..W0074).

PRIMARY SEMANTIC REACTION:
  State transition matching spoken narration cue.

MOVEMENT / MUTATION:
  Slide-in with spring pop F1036..F1060.

SUPPORTING REACTION:
  Chalk labels and focus highlights align with primary hero.

COMPREHENSION HOLD:
  F1085..F1102 (17 frames pause): Complete list of all 6 permutations now fully visible!

CLEANUP / EXIT:
  Focus narrows to Rows 2 and 3 for adjacency demonstration.

PERSISTENT STATE:
  All 6 rows in list, ready for spotlight.

STATE AFTER:
  Clean stage ready for next spoken beat.

COMPONENTS / ACTUAL IMPORT PATHS:
  - ProblemOpenerShell (@dsa/kit/components/ProblemOpenerShell)
  - ArrayTrackV2, ArrayValueV2 (@dsa/kit/components/array)
  - RoughBox, RoughLine (@dsa/kit/components)
  - theme, fonts (@dsa/kit/lib/theme)

MOTION PURPOSE:
  Teach state / cause->effect / direct attention / semantic continuity.

WHAT MUST NOT APPEAR YET:
  Adjacency arrow must NOT appear yet.

VALIDATION:
  All 6 permutations visible in strict lexicographical order.
```

---

### BEAT 17 — `S03_CURRENT`
```text
BEAT: 17 / 28
ANCHOR: S03_CURRENT
NARRATION: "If our current permutation is 1, 3, 2,"
WORD IDs: W0075 to W0082
AUDIO: 36720 ms .. 39920 ms (spoken)
FRAMES: F1102 .. F1204 [seg: 1102..1204, spoken: 1102..1198]
AVAILABLE REAL PAUSE: 200 ms (6 frames: F1198..F1204)

STATE BEFORE:
  Inherited from previous beat.

WHAT APPEARS NOW:
  Row 2 [ 1 , 3 , 2 ] highlights with bright cyan box & pulsing cursor tag '◄ CURRENT'. Rows 1, 4, 5, 6 fade to 25% opacity.

CENTER-STAGE HERO:
  Spotlight on CURRENT: [1, 3, 2]

CAUSE:
  Narration: 'If our current permutation is 1, 3, 2,' (W0075..W0082).

PRIMARY SEMANTIC REACTION:
  State transition matching spoken narration cue.

MOVEMENT / MUTATION:
  Spotlight zoom & highlight rect draws around Row 2 (F1102..F1140).

SUPPORTING REACTION:
  Chalk labels and focus highlights align with primary hero.

COMPREHENSION HOLD:
  F1198..F1204 (6 frames pause): Clear focus locked on CURRENT.

CLEANUP / EXIT:
  Keep CURRENT highlighted.

PERSISTENT STATE:
  CURRENT highlighted at Row 2.

STATE AFTER:
  Clean stage ready for next spoken beat.

COMPONENTS / ACTUAL IMPORT PATHS:
  - ProblemOpenerShell (@dsa/kit/components/ProblemOpenerShell)
  - ArrayTrackV2, ArrayValueV2 (@dsa/kit/components/array)
  - RoughBox, RoughLine (@dsa/kit/components)
  - theme, fonts (@dsa/kit/lib/theme)

MOTION PURPOSE:
  Teach state / cause->effect / direct attention / semantic continuity.

WHAT MUST NOT APPEAR YET:
  NEXT highlight must NOT appear until next phrase.

VALIDATION:
  Row 2 is prominent; other rows dimmed.
```

---

### BEAT 18 — `S03_NEXT`
```text
BEAT: 18 / 28
ANCHOR: S03_NEXT
NARRATION: "then the next one is 2, 1, 3."
WORD IDs: W0083 to W0090
AUDIO: 40120 ms .. 42960 ms (spoken)
FRAMES: F1204 .. F1313 [seg: 1204..1313, spoken: 1204..1289]
AVAILABLE REAL PAUSE: 800 ms (24 frames: F1289..F1313)

STATE BEFORE:
  Inherited from previous beat.

WHAT APPEARS NOW:
  Row 3 [ 2 , 1 , 3 ] highlights in sunburst gold (#FFD166) with tag '◄ NEXT (+1)'. A curved green arrow connects Row 2 to Row 3.

CENTER-STAGE HERO:
  Adjacency Proof: NEXT is [2, 1, 3]

CAUSE:
  Narration: 'then the next one is 2, 1, 3.' (W0083..W0090).

PRIMARY SEMANTIC REACTION:
  State transition matching spoken narration cue.

MOVEMENT / MUTATION:
  Connecting arrow traces downwards from Row 2 to Row 3 (F1204..F1240). Row 3 pulses gold.

SUPPORTING REACTION:
  Chalk labels and focus highlights align with primary hero.

COMPREHENSION HOLD:
  F1289..F1313 (24 frames pause): Golden comprehension pause! Adjacency proof is 100% crystal clear.

CLEANUP / EXIT:
  List view fades smoothly to transition back to general concept.

PERSISTENT STATE:
  Adjacency pair [1, 3, 2] -> [2, 1, 3] registered.

STATE AFTER:
  Clean stage ready for next spoken beat.

COMPONENTS / ACTUAL IMPORT PATHS:
  - ProblemOpenerShell (@dsa/kit/components/ProblemOpenerShell)
  - ArrayTrackV2, ArrayValueV2 (@dsa/kit/components/array)
  - RoughBox, RoughLine (@dsa/kit/components)
  - theme, fonts (@dsa/kit/lib/theme)

MOTION PURPOSE:
  Teach state / cause->effect / direct attention / semantic continuity.

WHAT MUST NOT APPEAR YET:
  No wraparound arrow or code yet.

VALIDATION:
  Row 2 (cyan) and Row 3 (gold) connected by direct arrow.
```

---

### BEAT 19 — `S03_DEFINITION_CLEAR`
```text
BEAT: 19 / 28
ANCHOR: S03_DEFINITION_CLEAR
NARRATION: "So the definition is clear."
WORD IDs: W0091 to W0095
AUDIO: 43760 ms .. 45180 ms (spoken)
FRAMES: F1313 .. F1377 [seg: 1313..1377, spoken: 1313..1355]
AVAILABLE REAL PAUSE: 733 ms (22 frames: F1355..F1377)

STATE BEFORE:
  Inherited from previous beat.

WHAT APPEARS NOW:
  Center stage clears list. Formal definition card appears: 'BRUTE FORCE SPECIFICATION: NEXT = Immediate Lexicographical Successor'.

CENTER-STAGE HERO:
  Definition Summary Card

CAUSE:
  Narration: 'So the definition is clear.' (W0091..W0095).

PRIMARY SEMANTIC REACTION:
  State transition matching spoken narration cue.

MOVEMENT / MUTATION:
  RoughBox sketches around card F1313..F1340.

SUPPORTING REACTION:
  Chalk labels and focus highlights align with primary hero.

COMPREHENSION HOLD:
  F1355..F1377 (22 frames pause): Let definition settle before 4-step recap.

CLEANUP / EXIT:
  Card slides to top as recap pipeline re-enters.

PERSISTENT STATE:
  Definition clarity.

STATE AFTER:
  Clean stage ready for next spoken beat.

COMPONENTS / ACTUAL IMPORT PATHS:
  - ProblemOpenerShell (@dsa/kit/components/ProblemOpenerShell)
  - ArrayTrackV2, ArrayValueV2 (@dsa/kit/components/array)
  - RoughBox, RoughLine (@dsa/kit/components)
  - theme, fonts (@dsa/kit/lib/theme)

MOTION PURPOSE:
  Teach state / cause->effect / direct attention / semantic continuity.

WHAT MUST NOT APPEAR YET:
  Recap steps must activate one by one as spoken.

VALIDATION:
  Clean summary card at center.
```

---

### BEAT 20 — `S03_RECAP_GENERATE`
```text
BEAT: 20 / 28
ANCHOR: S03_RECAP_GENERATE
NARRATION: "Generate everything."
WORD IDs: W0096 to W0097
AUDIO: 45900 ms .. 47000 ms (spoken)
FRAMES: F1377 .. F1433 [seg: 1377..1433, spoken: 1377..1410]
AVAILABLE REAL PAUSE: 767 ms (23 frames: F1410..F1433)

STATE BEFORE:
  Inherited from previous beat.

WHAT APPEARS NOW:
  4-step pipeline re-activates: Node [ 1. GENERATE ] pulses with cyan spotlight. Nodes 2, 3, 4 dimmed.

CENTER-STAGE HERO:
  Recap Step 1: GENERATE

CAUSE:
  Narration speaks 'Generate everything.' (W0096..W0097).

PRIMARY SEMANTIC REACTION:
  State transition matching spoken narration cue.

MOVEMENT / MUTATION:
  Node 1 scale pop (1.0 -> 1.12 -> 1.0) F1377..F1400.

SUPPORTING REACTION:
  Chalk labels and focus highlights align with primary hero.

COMPREHENSION HOLD:
  F1410..F1433 (23 frames pause): Node 1 glow settles.

CLEANUP / EXIT:
  Node 1 spotlight dims as Node 2 activates.

PERSISTENT STATE:
  Pipeline visible.

STATE AFTER:
  Clean stage ready for next spoken beat.

COMPONENTS / ACTUAL IMPORT PATHS:
  - ProblemOpenerShell (@dsa/kit/components/ProblemOpenerShell)
  - ArrayTrackV2, ArrayValueV2 (@dsa/kit/components/array)
  - RoughBox, RoughLine (@dsa/kit/components)
  - theme, fonts (@dsa/kit/lib/theme)

MOTION PURPOSE:
  Teach state / cause->effect / direct attention / semantic continuity.

WHAT MUST NOT APPEAR YET:
  Node 2 must NOT light up yet.

VALIDATION:
  Node 1 is sole active highlight.
```

---

### BEAT 21 — `S03_RECAP_ORDER`
```text
BEAT: 21 / 28
ANCHOR: S03_RECAP_ORDER
NARRATION: "Order everything."
WORD IDs: W0098 to W0099
AUDIO: 47780 ms .. 48520 ms (spoken)
FRAMES: F1433 .. F1483 [seg: 1433..1483, spoken: 1433..1456]
AVAILABLE REAL PAUSE: 900 ms (27 frames: F1456..F1483)

STATE BEFORE:
  Inherited from previous beat.

WHAT APPEARS NOW:
  Node [ 2. ORDER ] pulses with cyan spotlight. Node 1 returns to neutral.

CENTER-STAGE HERO:
  Recap Step 2: ORDER

CAUSE:
  Narration speaks 'Order everything.' (W0098..W0099).

PRIMARY SEMANTIC REACTION:
  State transition matching spoken narration cue.

MOVEMENT / MUTATION:
  Node 2 scale pop F1433..F1450.

SUPPORTING REACTION:
  Chalk labels and focus highlights align with primary hero.

COMPREHENSION HOLD:
  F1456..F1483 (27 frames pause): Node 2 glow settles.

CLEANUP / EXIT:
  Node 2 spotlight dims.

PERSISTENT STATE:
  Pipeline visible.

STATE AFTER:
  Clean stage ready for next spoken beat.

COMPONENTS / ACTUAL IMPORT PATHS:
  - ProblemOpenerShell (@dsa/kit/components/ProblemOpenerShell)
  - ArrayTrackV2, ArrayValueV2 (@dsa/kit/components/array)
  - RoughBox, RoughLine (@dsa/kit/components)
  - theme, fonts (@dsa/kit/lib/theme)

MOTION PURPOSE:
  Teach state / cause->effect / direct attention / semantic continuity.

WHAT MUST NOT APPEAR YET:
  Node 3 must NOT light up yet.

VALIDATION:
  Node 2 is sole active highlight.
```

---

### BEAT 22 — `S03_RECAP_FIND`
```text
BEAT: 22 / 28
ANCHOR: S03_RECAP_FIND
NARRATION: "Find the current arrangement."
WORD IDs: W0100 to W0103
AUDIO: 49440 ms .. 50900 ms (spoken)
FRAMES: F1483 .. F1545 [seg: 1483..1545, spoken: 1483..1527]
AVAILABLE REAL PAUSE: 600 ms (18 frames: F1527..F1545)

STATE BEFORE:
  Inherited from previous beat.

WHAT APPEARS NOW:
  Node [ 3. FIND ] pulses with cyan spotlight. Focus badge: 'Search index of current array'.

CENTER-STAGE HERO:
  Recap Step 3: FIND CURRENT

CAUSE:
  Narration speaks 'Find the current arrangement.' (W0100..W0103).

PRIMARY SEMANTIC REACTION:
  State transition matching spoken narration cue.

MOVEMENT / MUTATION:
  Node 3 scale pop F1483..F1510.

SUPPORTING REACTION:
  Chalk labels and focus highlights align with primary hero.

COMPREHENSION HOLD:
  F1527..F1545 (18 frames pause): Let search step register.

CLEANUP / EXIT:
  Node 3 spotlight dims.

PERSISTENT STATE:
  Pipeline visible.

STATE AFTER:
  Clean stage ready for next spoken beat.

COMPONENTS / ACTUAL IMPORT PATHS:
  - ProblemOpenerShell (@dsa/kit/components/ProblemOpenerShell)
  - ArrayTrackV2, ArrayValueV2 (@dsa/kit/components/array)
  - RoughBox, RoughLine (@dsa/kit/components)
  - theme, fonts (@dsa/kit/lib/theme)

MOTION PURPOSE:
  Teach state / cause->effect / direct attention / semantic continuity.

WHAT MUST NOT APPEAR YET:
  Node 4 must NOT light up yet.

VALIDATION:
  Node 3 is sole active highlight.
```

---

### BEAT 23 — `S03_RECAP_MOVE`
```text
BEAT: 23 / 28
ANCHOR: S03_RECAP_MOVE
NARRATION: "Then move one step forward."
WORD IDs: W0104 to W0108
AUDIO: 51500 ms .. 53140 ms (spoken)
FRAMES: F1545 .. F1594 [seg: 1545..1594, spoken: 1545..1594]
AVAILABLE REAL PAUSE: 0 ms (0 frames: F1594..F1594)

STATE BEFORE:
  Inherited from previous beat.

WHAT APPEARS NOW:
  Node [ 4. NEXT (+1) ] pulses with bright gold spotlight. Forward step arrow animates.

CENTER-STAGE HERO:
  Recap Step 4: MOVE ONE STEP FORWARD

CAUSE:
  Narration speaks 'Then move one step forward.' (W0104..W0108).

PRIMARY SEMANTIC REACTION:
  State transition matching spoken narration cue.

MOVEMENT / MUTATION:
  Node 4 scale pop F1545..F1575. Forward arrow draws.

SUPPORTING REACTION:
  Chalk labels and focus highlights align with primary hero.

COMPREHENSION HOLD:
  F1585..F1594: Smooth continuity into wraparound rule.

CLEANUP / EXIT:
  Pipeline dims as wraparound loop prepares.

PERSISTENT STATE:
  Complete 4-step logic confirmed.

STATE AFTER:
  Clean stage ready for next spoken beat.

COMPONENTS / ACTUAL IMPORT PATHS:
  - ProblemOpenerShell (@dsa/kit/components/ProblemOpenerShell)
  - ArrayTrackV2, ArrayValueV2 (@dsa/kit/components/array)
  - RoughBox, RoughLine (@dsa/kit/components)
  - theme, fonts (@dsa/kit/lib/theme)

MOTION PURPOSE:
  Teach state / cause->effect / direct attention / semantic continuity.

WHAT MUST NOT APPEAR YET:
  Wraparound curve must NOT appear until next phrase.

VALIDATION:
  Node 4 highlighted with forward indicator.
```

---

### BEAT 24 — `S03_WRAP`
```text
BEAT: 24 / 28
ANCHOR: S03_WRAP
NARRATION: "And if we are already at the last permutation, we wrap around to the first one."
WORD IDs: W0109 to W0124
AUDIO: 53140 ms .. 59720 ms (spoken)
FRAMES: F1594 .. F1803 [seg: 1594..1803, spoken: 1594..1792]
AVAILABLE REAL PAUSE: 367 ms (11 frames: F1792..F1803)

STATE BEFORE:
  Inherited from previous beat.

WHAT APPEARS NOW:
  Mini arrays [3, 2, 1] (LAST) at right and [1, 2, 3] (FIRST) at left appear. A sweeping curved chalk arrow loops from LAST back to FIRST.

CENTER-STAGE HERO:
  Edge Condition: LAST -> FIRST Wraparound Loop

CAUSE:
  Narration: 'And if we are already at the last permutation, we wrap around to the first one.' (W0109..W0124).

PRIMARY SEMANTIC REACTION:
  State transition matching spoken narration cue.

MOVEMENT / MUTATION:
  Curved arc draws smoothly from right to left across Y: 460..580 (F1620..F1720). Loop arrowhead lands at [1, 2, 3].

SUPPORTING REACTION:
  Chalk labels and focus highlights align with primary hero.

COMPREHENSION HOLD:
  F1792..F1803 (11 frames pause): Loop rests cleanly.

CLEANUP / EXIT:
  Wraparound card fades out.

PERSISTENT STATE:
  Wraparound logic understood.

STATE AFTER:
  Clean stage ready for next spoken beat.

COMPONENTS / ACTUAL IMPORT PATHS:
  - ProblemOpenerShell (@dsa/kit/components/ProblemOpenerShell)
  - ArrayTrackV2, ArrayValueV2 (@dsa/kit/components/array)
  - RoughBox, RoughLine (@dsa/kit/components)
  - theme, fonts (@dsa/kit/lib/theme)

MOTION PURPOSE:
  Teach state / cause->effect / direct attention / semantic continuity.

WHAT MUST NOT APPEAR YET:
  No reversal code or optimal mechanics shown.

VALIDATION:
  Curved wraparound arrow connecting [3, 2, 1] -> [1, 2, 3].
```

---

### BEAT 25 — `S03_WORKS`
```text
BEAT: 25 / 28
ANCHOR: S03_WORKS
NARRATION: "This works logically."
WORD IDs: W0125 to W0127
AUDIO: 60100 ms .. 61680 ms (spoken)
FRAMES: F1803 .. F1874 [seg: 1803..1874, spoken: 1803..1850]
AVAILABLE REAL PAUSE: 800 ms (24 frames: F1850..F1874)

STATE BEFORE:
  Inherited from previous beat.

WHAT APPEARS NOW:
  Large green chalk checkmark ✓ and stamp badge: 'LOGICALLY CORRECT · FINDS EXACT NEXT PERMUTATION'.

CENTER-STAGE HERO:
  Logical Correctness Confirmation

CAUSE:
  Narration speaks 'This works logically.' (W0125..W0127).

PRIMARY SEMANTIC REACTION:
  State transition matching spoken narration cue.

MOVEMENT / MUTATION:
  Stamp pop with elastic overshoot F1803..F1828.

SUPPORTING REACTION:
  Chalk labels and focus highlights align with primary hero.

COMPREHENSION HOLD:
  F1850..F1874 (24 frames pause): Viewer absorbs that algorithm is correct before learning its limitation.

CLEANUP / EXIT:
  Checkmark dissolves as tone shifts to serious problem.

PERSISTENT STATE:
  Correctness established.

STATE AFTER:
  Clean stage ready for next spoken beat.

COMPONENTS / ACTUAL IMPORT PATHS:
  - ProblemOpenerShell (@dsa/kit/components/ProblemOpenerShell)
  - ArrayTrackV2, ArrayValueV2 (@dsa/kit/components/array)
  - RoughBox, RoughLine (@dsa/kit/components)
  - theme, fonts (@dsa/kit/lib/theme)

MOTION PURPOSE:
  Teach state / cause->effect / direct attention / semantic continuity.

WHAT MUST NOT APPEAR YET:
  No error signs or warning symbols yet.

VALIDATION:
  Clean green confirmation badge.
```

---

### BEAT 26 — `S03_PROBLEM`
```text
BEAT: 26 / 28
ANCHOR: S03_PROBLEM
NARRATION: "But there is a serious problem."
WORD IDs: W0128 to W0133
AUDIO: 62480 ms .. 64420 ms (spoken)
FRAMES: F1874 .. F1954 [seg: 1874..1954, spoken: 1874..1933]
AVAILABLE REAL PAUSE: 700 ms (21 frames: F1933..F1954)

STATE BEFORE:
  Inherited from previous beat.

WHAT APPEARS NOW:
  Chalkboard darkens slightly. Bold warning card materializes at center: '⚠ BUT THERE IS A SERIOUS PROBLEM'. Red accent border.

CENTER-STAGE HERO:
  Tension Shift: A Serious Problem

CAUSE:
  Narration: 'But there is a serious problem.' (W0128..W0133).

PRIMARY SEMANTIC REACTION:
  State transition matching spoken narration cue.

MOVEMENT / MUTATION:
  Warning card shakes subtly (amplitude 3px) on entry F1874..F1905.

SUPPORTING REACTION:
  Chalk labels and focus highlights align with primary hero.

COMPREHENSION HOLD:
  F1933..F1954 (21 frames pause): Dramatic pedagogical pause! Builds suspense.

CLEANUP / EXIT:
  Warning card transitions into growth demonstration.

PERSISTENT STATE:
  Problem context.

STATE AFTER:
  Clean stage ready for next spoken beat.

COMPONENTS / ACTUAL IMPORT PATHS:
  - ProblemOpenerShell (@dsa/kit/components/ProblemOpenerShell)
  - ArrayTrackV2, ArrayValueV2 (@dsa/kit/components/array)
  - RoughBox, RoughLine (@dsa/kit/components)
  - theme, fonts (@dsa/kit/lib/theme)

MOTION PURPOSE:
  Teach state / cause->effect / direct attention / semantic continuity.

WHAT MUST NOT APPEAR YET:
  No 'n!' formula yet (script does not state formula in Scene 03).

VALIDATION:
  Warning banner centered with red warning styling.
```

---

### BEAT 27 — `S03_GROWTH`
```text
BEAT: 27 / 28
ANCHOR: S03_GROWTH
NARRATION: "The number of permutations grows extremely fast."
WORD IDs: W0134 to W0140
AUDIO: 65140 ms .. 68840 ms (spoken)
FRAMES: F1954 .. F2088 [seg: 1954..2088, spoken: 1954..2065]
AVAILABLE REAL PAUSE: 767 ms (23 frames: F2065..F2088)

STATE BEFORE:
  Inherited from previous beat.

WHAT APPEARS NOW:
  Tree/branching expansion visualizes rapid fan-out. Callout banner: 'PERMUTATION COUNT GROWS EXTREMELY FAST'. Branch count explodes visually without explicit formula.

CENTER-STAGE HERO:
  Combinatorial Explosion: Qualitative Growth

CAUSE:
  Narration: 'The number of permutations grows extremely fast.' (W0134..W0140).

PRIMARY SEMANTIC REACTION:
  State transition matching spoken narration cue.

MOVEMENT / MUTATION:
  Branch lines multiply rapidly outward from single root (F1954..F2030). Glowing particle surge.

SUPPORTING REACTION:
  Chalk labels and focus highlights align with primary hero.

COMPREHENSION HOLD:
  F2065..F2088 (23 frames pause): Visual impact of combinatorial explosion registers.

CLEANUP / EXIT:
  Growth visualization recedes to clear the board for code handoff.

PERSISTENT STATE:
  Scalability dilemma established.

STATE AFTER:
  Clean stage ready for next spoken beat.

COMPONENTS / ACTUAL IMPORT PATHS:
  - ProblemOpenerShell (@dsa/kit/components/ProblemOpenerShell)
  - ArrayTrackV2, ArrayValueV2 (@dsa/kit/components/array)
  - RoughBox, RoughLine (@dsa/kit/components)
  - theme, fonts (@dsa/kit/lib/theme)

MOTION PURPOSE:
  Teach state / cause->effect / direct attention / semantic continuity.

WHAT MUST NOT APPEAR YET:
  No code lines yet.

VALIDATION:
  Qualitative rapid growth visual with zero formula spoilers.
```

---

### BEAT 28 — `S03_CODE_HANDOFF`
```text
BEAT: 28 / 28
ANCHOR: S03_CODE_HANDOFF
NARRATION: "So before we accept this method, let's see what its code is really doing."
WORD IDs: W0141 to W0154
AUDIO: 69600 ms .. 75720 ms (spoken)
FRAMES: F2088 .. F2275 [seg: 2088..2275, spoken: 2088..2272]
AVAILABLE REAL PAUSE: 100 ms (3 frames: F2272..F2275)

STATE BEFORE:
  Inherited from previous beat.

WHAT APPEARS NOW:
  Growth visuals clear. Clean empty production code window materializes at center (X: 260, Y: 220, W: 1400, H: 640). Header: 'METHOD 1 · BRUTE FORCE IMPLEMENTATION'. Zero code lines inside (ready for Scene 04 typing).

CENTER-STAGE HERO:
  Method 1 Code Handoff Surface

CAUSE:
  Narration: 'So before we accept this method, let\'s see what its code is really doing.' (W0141..W0154).

PRIMARY SEMANTIC REACTION:
  State transition matching spoken narration cue.

MOVEMENT / MUTATION:
  Code window fades in smoothly (F2088..F2140). Cursor blinks at line 1. Settles completely by F2275.

SUPPORTING REACTION:
  Chalk labels and focus highlights align with primary hero.

COMPREHENSION HOLD:
  F2272..F2275: Final settled state for seamless handoff into Scene 04.

CLEANUP / EXIT:
  Stage is 100% clean and ready for Scene 04 code typing.

PERSISTENT STATE:
  Empty code container shell.

STATE AFTER:
  Clean stage ready for next spoken beat.

COMPONENTS / ACTUAL IMPORT PATHS:
  - ProblemOpenerShell (@dsa/kit/components/ProblemOpenerShell)
  - ArrayTrackV2, ArrayValueV2 (@dsa/kit/components/array)
  - RoughBox, RoughLine (@dsa/kit/components)
  - theme, fonts (@dsa/kit/lib/theme)

MOTION PURPOSE:
  Teach state / cause->effect / direct attention / semantic continuity.

WHAT MUST NOT APPEAR YET:
  Zero code lines shown (Scene 04 owns character typing).

VALIDATION:
  Empty code container settled at center; exact Scene 04 handoff.
```

---

