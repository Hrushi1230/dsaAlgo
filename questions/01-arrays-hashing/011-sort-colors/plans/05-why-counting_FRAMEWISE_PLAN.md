# Q11 — Sort Colors (LC 75)
# Scene 05 · Why Counting Is Not the Final Approach
## EXACT AUDIO-SYNCHRONIZED FRAME-WISE PLAN

**Course:** Code With Animation  
**Problem:** Q011 · Sort Colors · LC 75 · Medium  
**Beat Type:** Algorithm Derivation & One-Pass Motivation  
**Audio File:** `questions/01-arrays-hashing/011-sort-colors/audio/05-why-counting.mp3`  
**Exact Sync File:** `questions/01-arrays-hashing/011-sort-colors/sync/05-why-counting.json`  
**Anchor Manifest:** `questions/01-arrays-hashing/011-sort-colors/sync/05-why-counting.anchors.json`  
**FPS:** 30  
**Exact Total Frames:** 2,287 frames (76.220 seconds)  
**Total Spoken Words:** 169 words  
**Total Anchors:** 28 semantic anchors  

---

## 1. Mandatory Scene Contract

```text
SCENE: 05-why-counting
QUESTION: 011 · Sort Colors (LeetCode 75)
BEAT TYPE: WHY-NOT / ALGORITHM DERIVATION SCENE
AUDIO FILE: audio/05-why-counting.mp3
SYNC FILE: sync/05-why-counting.json
FPS: 30
TOTAL FRAMES: 2287
PEDAGOGICAL GOAL:
- Establish that Counting Sort is asymptotically efficient: O(N) time, O(1) space.
- Isolate the missing requirement: LeetCode follow-up explicitly challenges us to solve it in ONE PASS.
- Expose the fundamental architectural flaw of Counting Sort:
  * Phase 1 (Count): Inspects all N items, but array remains completely unarranged in memory.
  * Phase 2 (Rewrite): Overwrites all N slots using stored frequencies.
- Clarify that Time Complexity is NOT the issue: O(N) is already optimal!
- Pinpoint the true limitation: Decoupled architecture (Collect Info First != Place Values Later).
- Transition into Reasoning Mode:
  * Pose the central question: "Can we classify each value at the same moment we inspect it?"
  * 0s go directly to the LEFT (Red)
  * 2s go directly to the RIGHT (Blue)
  * 1s stay in the MIDDLE (White)
- Eliminate both Pass 1 and Pass 2 with chalk strikes.
- Handoff directly to Approach 2: The Three-Pointer Algorithm (Dutch National Flag).
TRACE STEP IDS: DERIVE_EVAL, DERIVE_FOLLOWUP, DERIVE_2PASS_SPLIT, DERIVE_UNARRANGED, DERIVE_CORE_QUESTION, DERIVE_3WAY_PARTITION, DERIVE_HANDOFF
DATA STRUCTURE: 10-Element Master Array Track + Dual-Pass Timeline Cards + 3-Way Target Zones
REUSE: ArrayTrackV2, RoughBox, RoughCurve, ChalkboardBackground, ChalkFilters, Captions
EXTEND: Dynamic stage transformation (Dual-Pass Audit -> Reasoning Mode -> 3-Way Classification)
CREATE: 3-Way Chalk Directional Arrows (Left 0s, Middle 1s, Right 2s)
DO NOT TOUCH: Audio sync timings, master testcase values
MOTION SEMANTICS:
- All cards and boxes drawn with RoughBox (roughness 1.6, bowing 1.2).
- Chalk strike-out line across Pass 1 & Pass 2 boxes upon elimination.
- Directional curved chalk arrows (RoughCurve) shooting into left, middle, right zones.
FORBIDDEN:
- Generic raw CSS borders without RoughBox.
- Spoiling the names "low", "mid", "high" before Scene 06.
- Premature reveal of the 3-pointer partition until the final handoff beat.
```

---

## 2. Spatial Zones & Layout Architecture

```text
Canvas: 1920 × 1080 (16:9 chalkboard)

TOP HEADER (Y: 36 .. 76):
  - Left: "QUESTION 011 · SORT COLORS" & "APPROACH 1 AUDIT → FOLLOW-UP CHALLENGE"
  - Right: Complexity Pills (Time: O(N) ✓, Space: O(1) ✓)

ZONE A: ARRAY TRACK HERO (Y: 120 .. 340)
  - Centered 10-slot master testcase:
    * F0..F478: Sorted result from Approach 1 [0,0,0,1,1,1,2,2,2,2]
    * F478..F900: Raw unsorted input [2,0,2,1,1,0,2,0,1,2] (Array is still unarranged!)
    * F900..F1395: Rewritten array
    * F1395..F2287: Raw array in reasoning mode for 3-way classification

ZONE B: PEDAGOGICAL DYNAMIC STAGE (Y: 370 .. 860)
  - Sub-stage 1 (F0..F305): Approach 1 Evaluation Card (O(N) Time + O(1) Space)
  - Sub-stage 2 (F305..F478): Follow-Up Challenge Card ("COULD YOU SOLVE IT USING ONLY ONE PASS?")
  - Sub-stage 3 (F478..F1022): Dual-Pass Dissection:
      * Left: Pass 1 Frequency Box [count0=3, count1=3, count2=4] (Array Still Unarranged Warning)
      * Right: Pass 2 Rewrite Box (Second pass required)
  - Sub-stage 4 (F1022..F1395): Root Cause Diagnosis:
      * Not Time Complexity (O(N) is fine!) -> Decoupled Architecture (Collect First != Place Later)
  - Sub-stage 5 (F1395..F2173): The 3-Way Partition Awakening:
      * 3 Target Zones: [ ← 0s to LEFT ] (Red), [ 1s in MIDDLE ] (White), [ 2s to RIGHT → ] (Blue)
      * Inspection Pointer on current value + Chalk motion vectors
      * Elimination strike on Pass 1 & Pass 2
  - Sub-stage 6 (F2173..F2287): Gateway Handoff Card (Approach 2: Three-Pointer Algorithm)

BOTTOM CAPTIONS (Y: 980 .. 1040):
  - Word-synced karaoke captions
```

---

## 3. Frame-by-Frame Pedagogical Anchor Choreography (All 28 Anchors)

### Anchor 1: S05_START (F0 .. F64, pause to F79)
- **ANCHOR:** "Counting is already a good solution." (F0..F64)
- **WHAT APPEARS NOW:** Top Header badges render. Array Track V2 displays the sorted result from Scene 04 `[0, 0, 0, 1, 1, 1, 2, 2, 2, 2]`. Upper Evaluation Card (`RoughBox`) appears center: "APPROACH 1: COUNTING SORT EVALUATION".
- **CENTER-STAGE HERO:** Sorted Array + Approach 1 Evaluation Card.
- **CAUSE:** Speaker validates the counting approach just finished in Scene 04.
- **EFFECT / MOTION:** Sorted array glows softly; evaluation card frames on with chalk strokes.
- **WHAT MUST NOT APPEAR YET:** Follow-up challenge, complexity pills, limitation cards.
- **COMPREHENSION HOLD:** F64..F79 (15 frames): Learner reflects on the valid solution just built.
- **CLEANUP / EXIT:** None.
- **PERSISTENT STATE:** Sorted array visible, evaluation card centered.

---

### Anchor 2: S05_LINEAR_TIME (F79 .. F130, pause to F133)
- **ANCHOR:** "It runs in linear time," (F79..F130)
- **WHAT APPEARS NOW:** Green Complexity Pill in Header & inside Evaluation Card draws on: `TIME COMPLEXITY: O(N) ✓`.
- **CENTER-STAGE HERO:** Time Complexity Pill (`O(N)`).
- **CAUSE:** Speaker affirms the optimal linear time of counting sort.
- **EFFECT / MOTION:** Pill draws on with mint chalk border; checkmark animates.
- **WHAT MUST NOT APPEAR YET:** Space pill, follow-up challenge.
- **COMPREHENSION HOLD:** F130..F133 (3 frames): Natural cadence pause.
- **CLEANUP / EXIT:** None.
- **PERSISTENT STATE:** Time O(N) locked.

---

### Anchor 3: S05_CONSTANT_SPACE (F133 .. F227, pause to F243)
- **ANCHOR:** "and it uses only constant extra space." (F133..F227)
- **WHAT APPEARS NOW:** Second Green Complexity Pill draws on: `EXTRA SPACE: O(1) ✓ (3 COUNTERS)`.
- **CENTER-STAGE HERO:** Space Complexity Pill (`O(1)`).
- **CAUSE:** Speaker affirms the minimal memory footprint ($k=3$ integer variables).
- **EFFECT / MOTION:** Space pill draws on adjacent to time pill with mint glow.
- **WHAT MUST NOT APPEAR YET:** "What is missing?" question mark.
- **COMPREHENSION HOLD:** F227..F243 (16 frames): Learner sees that from standard metrics, this solution seems unbeatable.
- **CLEANUP / EXIT:** None.
- **PERSISTENT STATE:** Both O(N) and O(1) affirmed.

---

### Anchor 4: S05_WHATS_MISSING (F243 .. F278, pause to F305)
- **ANCHOR:** "So what is still missing?" (F243..F278)
- **WHAT APPEARS NOW:** A golden chalk question mark badge (`RoughBox`) pops into the center: `❓ SO WHAT IS STILL MISSING?`.
- **CENTER-STAGE HERO:** Question Callout Badge.
- **CAUSE:** Speaker introduces the turning point / rhetorical question.
- **EFFECT / MOTION:** Evaluation card dims slightly; question badge pulses with Sunburst Gold (`#FFD166`).
- **WHAT MUST NOT APPEAR YET:** Follow-up prompt text.
- **COMPREHENSION HOLD:** F278..F305 (27 frames): 0.9s pause inviting curiosity before the constraint is revealed.
- **CLEANUP / EXIT:** Question badge expands to make way for the challenge card.
- **PERSISTENT STATE:** Evaluation card docked, stage primed for follow-up.

---

### Anchor 5: S05_FOLLOWUP_ONE_PASS (F305 .. F370, pause to F377)
- **ANCHOR:** "The follow-up asks for one pass," (F305..F370)
- **WHAT APPEARS NOW:** LeetCode Official Follow-up Card enters Center Stage (`RoughBox`, Sunburst Gold stroke):
  `LEETCODE 75 FOLLOW-UP: "Could you solve it using ONLY ONE PASS?"`
- **CENTER-STAGE HERO:** Follow-Up Challenge Card.
- **CAUSE:** Narration reveals the explicit interviewer challenge.
- **EFFECT / MOTION:** Gold card sketches on with RoughBox; text `ONLY ONE PASS` pulses in bold gold.
- **WHAT MUST NOT APPEAR YET:** Two-pass comparison.
- **COMPREHENSION HOLD:** F370..F377 (7 frames): Learner absorbs the single-pass constraint.
- **CLEANUP / EXIT:** Question mark badge fades out.
- **PERSISTENT STATE:** Follow-up card established.

---

### Anchor 6: S05_NEEDS_TWO_PASSES (F377 .. F458, pause to F478)
- **ANCHOR:** "but counting needs two separate passes." (F377..F458)
- **WHAT APPEARS NOW:** Dual-Pass Architecture Diagram sketches on:
  - Box 1: `PASS 1: SCAN & COUNT` (Blue/Gold outline)
  - Connective Arrow: `➔`
  - Box 2: `PASS 2: REWRITE ARRAY` (Blue/Mint outline)
  - Red Warning Tag: `2 SEPARATE PASSES != 1 PASS`.
- **CENTER-STAGE HERO:** Two-Pass vs One-Pass Contrast Diagram.
- **CAUSE:** Speaker exposes the structural mismatch with the follow-up.
- **EFFECT / MOTION:** Follow-up card docks top; Two-Pass diagram sketches below with warning accent.
- **WHAT MUST NOT APPEAR YET:** Frequencies inspection.
- **COMPREHENSION HOLD:** F458..F478 (20 frames): Learner clearly registers: $1 + 1 = 2$ passes.
- **CLEANUP / EXIT:** Single evaluation card replaced by dual-pass dissection.
- **PERSISTENT STATE:** Dual-pass flow diagram visible.

---

### Anchor 7: S05_PASS1_FREQUENCIES (F478 .. F571, pause to F592)
- **ANCHOR:** "In the first pass, we only learn the frequencies." (F478..F571)
- **WHAT APPEARS NOW:** Pass 1 Box illuminates. Array Track swaps back to the UNSORTED master input: `[2, 0, 2, 1, 1, 0, 2, 0, 1, 2]`. Frequency Counter Shelf appears below Pass 1 box.
- **CENTER-STAGE HERO:** Pass 1 Inspection Shelf & Unsorted Array.
- **CAUSE:** Speaker dives deep into Pass 1 behavior.
- **EFFECT / MOTION:** Array reverts to raw state; Pass 1 box highlights with golden chalk.
- **WHAT MUST NOT APPEAR YET:** Count numbers 0, 1, 2 until spoken.
- **COMPREHENSION HOLD:** F571..F592 (21 frames): 0.7s hold on the unarranged array.
- **CLEANUP / EXIT:** Sorted array state removed.
- **PERSISTENT STATE:** Raw array at top, Pass 1 shelf active.

---

### Anchor 8: S05_HOW_0 (F592 .. F622, pause to F643)
- **ANCHOR:** "How many zeros," (F592..F622)
- **WHAT APPEARS NOW:** Red Counter Card `count0 = 3` draws on in chalk.
- **CENTER-STAGE HERO:** Red Counter Card `count0`.
- **CAUSE:** Speaker highlights zero frequency tally.
- **EFFECT / MOTION:** Card sketches on with Red chalk (`#FF7675`), value 3 appears.
- **WHAT MUST NOT APPEAR YET:** count1, count2.
- **COMPREHENSION HOLD:** F622..F643 (21 frames): Pause focusing on bucket 0.
- **CLEANUP / EXIT:** None.
- **PERSISTENT STATE:** Card 0 locked.

---

### Anchor 9: S05_HOW_1 (F643 .. F669, pause to F686)
- **ANCHOR:** "how many ones," (F643..F669)
- **WHAT APPEARS NOW:** White Counter Card `count1 = 3` draws on in chalk.
- **CENTER-STAGE HERO:** White Counter Card `count1`.
- **CAUSE:** Speaker highlights one frequency tally.
- **EFFECT / MOTION:** Card sketches on with White chalk (`#FFFDF7`), value 3 appears.
- **WHAT MUST NOT APPEAR YET:** count2.
- **COMPREHENSION HOLD:** F669..F686 (17 frames): Pause focusing on bucket 1.
- **CLEANUP / EXIT:** None.
- **PERSISTENT STATE:** Cards 0 and 1 locked.

---

### Anchor 10: S05_HOW_2 (F686 .. F720, pause to F740)
- **ANCHOR:** "and how many twos." (F686..F720)
- **WHAT APPEARS NOW:** Blue Counter Card `count2 = 4` draws on in chalk.
- **CENTER-STAGE HERO:** Blue Counter Card `count2`.
- **CAUSE:** Speaker highlights two frequency tally.
- **EFFECT / MOTION:** Card sketches on with Blue chalk (`#5CE1E6`), value 4 appears.
- **WHAT MUST NOT APPEAR YET:** "Array is still unarranged" alert.
- **COMPREHENSION HOLD:** F720..F740 (20 frames): 3 frequency buckets fully locked.
- **CLEANUP / EXIT:** None.
- **PERSISTENT STATE:** 3 counter cards displayed: 3, 3, 4.

---

### Anchor 11: S05_NOT_ARRANGED_YET (F740 .. F835, pause to F845)
- **ANCHOR:** "At that point, the array is still not arranged." (F740..F835)
- **WHAT APPEARS NOW:** Critical Pedagogical Alert Box (`RoughBox`, Red stroke):
  `⚠ ARRAY STATUS: COMPLETELY UNARRANGED IN MEMORY!`
  The raw array slots shake gently (`±3px`), highlighting that despite $O(N)$ work, not a single element moved!
- **CENTER-STAGE HERO:** Unarranged Array + Warning Alert.
- **CAUSE:** Speaker highlights the key insight: Pass 1 leaves elements untouched.
- **EFFECT / MOTION:** Array slots highlight with red dashed outlines; Warning banner pulses.
- **WHAT MUST NOT APPEAR YET:** Pass 2 rewrite details.
- **COMPREHENSION HOLD:** F835..F845 (10 frames): Learner confronts the reality that Pass 1 made zero progress on ordering.
- **CLEANUP / EXIT:** None.
- **PERSISTENT STATE:** Array verified as unarranged.

---

### Anchor 12: S05_NEED_ANOTHER_PASS (F845 .. F891, pause to F900)
- **ANCHOR:** "Then we need another pass." (F845..F891)
- **WHAT APPEARS NOW:** Pass 2 Box lights up brightly with mint chalk outline: `PASS 2: REQUIRED`.
- **CENTER-STAGE HERO:** Pass 2 Box.
- **CAUSE:** Speaker explains why a second pass is mandatory for counting sort.
- **EFFECT / MOTION:** Attention shifts from Pass 1 to Pass 2; an arrow pulses between them.
- **WHAT MUST NOT APPEAR YET:** Overwrite animation.
- **COMPREHENSION HOLD:** F891..F900 (9 frames): Transition pause.
- **CLEANUP / EXIT:** Warning box softens.
- **PERSISTENT STATE:** Pass 2 highlighted.

---

### Anchor 13: S05_REWRITE_ARRAY (F900 .. F947, pause to F969)
- **ANCHOR:** "To rewrite the array," (F900..F947)
- **WHAT APPEARS NOW:** Rewrite cursor sweeps across the array track, overwriting slots sequentially into sorted order.
- **CENTER-STAGE HERO:** Array Track In-Place Overwrite.
- **CAUSE:** Speaker describes Pass 2 operation.
- **EFFECT / MOTION:** Slots 0..9 turn into sorted colors under the sweep of a rewrite pointer.
- **WHAT MUST NOT APPEAR YET:** Time complexity defense.
- **COMPREHENSION HOLD:** F947..F969 (22 frames): Learner watches the rewrite operation complete.
- **CLEANUP / EXIT:** None.
- **PERSISTENT STATE:** Array rewritten.

---

### Anchor 14: S05_USING_COUNTS (F969 .. F997, pause to F1022)
- **ANCHOR:** "using those counts." (F969..F997)
- **WHAT APPEARS NOW:** Visual dotted lines link the 3 counter cards to the rewritten array segments.
- **CENTER-STAGE HERO:** Counter-to-Array Connection Lines.
- **CAUSE:** Speaker connects the stored counts to the rewrite ranges.
- **EFFECT / MOTION:** Chalk connector lines pulse briefly, reinforcing the dependency.
- **WHAT MUST NOT APPEAR YET:** "Not time complexity" rejection.
- **COMPREHENSION HOLD:** F997..F1022 (25 frames): 0.8s comprehension pause on the full 2-pass mechanism.
- **CLEANUP / EXIT:** Dual-pass dissection cards prepare to fold.
- **PERSISTENT STATE:** Complete 2-pass mechanism demonstrated.

---

### Anchor 15: S05_NOT_TIME_COMPLEXITY (F1022 .. F1106, pause to F1129)
- **ANCHOR:** "So the problem is not the time complexity." (F1022..F1106)
- **WHAT APPEARS NOW:** Misconception Rejection Banner enters Center Stage:
  `TIME COMPLEXITY IS NOT THE BOTTLENECK!`
  A large green shield / checkmark protects the $O(N)$ metric.
- **CENTER-STAGE HERO:** Misconception Rejection Card.
- **CAUSE:** Speaker clarifies a common student confusion (thinking 2 passes = $O(N^2)$ or bad time).
- **EFFECT / MOTION:** Dual-pass cards slide back; Green shield frames the $O(N)$ math ($N + N = 2N \in O(N)$).
- **WHAT MUST NOT APPEAR YET:** Decoupled architecture limitation.
- **COMPREHENSION HOLD:** F1106..F1129 (23 frames): Learner understands $O(2N) = O(N)$ mathematically.
- **CLEANUP / EXIT:** Counter cards fade out.
- **PERSISTENT STATE:** Time complexity cleared of blame.

---

### Anchor 16: S05_ON_IS_GOOD (F1129 .. F1187, pause to F1209)
- **ANCHOR:** "O of n is already good." (F1129..F1187)
- **WHAT APPEARS NOW:** Badge: `O(N) IS ASYMPTOTICALLY OPTIMAL (YOU CANNOT BEAT O(N))`.
- **CENTER-STAGE HERO:** Optimal Benchmark Badge.
- **CAUSE:** Speaker reinforces that no algorithm can sort arbitrary input in $< O(N)$.
- **EFFECT / MOTION:** Golden badge glows; text confirms lower bound.
- **WHAT MUST NOT APPEAR YET:** Root cause card.
- **COMPREHENSION HOLD:** F1187..F1209 (22 frames): Mathematical ground affirmed.
- **CLEANUP / EXIT:** None.
- **PERSISTENT STATE:** O(N) verified as optimal.

---

### Anchor 17: S05_THE_LIMITATION (F1209 .. F1246, pause to F1257)
- **ANCHOR:** "The limitation is," (F1209..F1246)
- **WHAT APPEARS NOW:** Root Cause Diagnosis Card enters Center Stage (`RoughBox`, Sunburst Gold):
  `THE TRUE ARCHITECTURAL LIMITATION:`
- **CENTER-STAGE HERO:** Root Cause Card Header.
- **CAUSE:** Speaker pivots to the architectural disconnect.
- **EFFECT / MOTION:** Card sketches on; focus narrows to the fundamental flaw.
- **WHAT MUST NOT APPEAR YET:** The decoupled stages text.
- **COMPREHENSION HOLD:** F1246..F1257 (11 frames): Short pause building tension.
- **CLEANUP / EXIT:** Time complexity badges dock to top.
- **PERSISTENT STATE:** Root cause card active.

---

### Anchor 18: S05_FIRST_COLLECT (F1257 .. F1306, pause to F1323)
- **ANCHOR:** "we first collect information," (F1257..F1306)
- **WHAT APPEARS NOW:** Left Block inside card: `STAGE 1: COLLECT INFORMATION ONLY (READ)`. Icon of notepad/tally box.
- **CENTER-STAGE HERO:** "Collect Info" Block.
- **CAUSE:** Speaker isolates Stage 1.
- **EFFECT / MOTION:** Block draws on with golden border; tally icon appears.
- **WHAT MUST NOT APPEAR YET:** "Later place" block.
- **COMPREHENSION HOLD:** F1306..F1323 (17 frames): Learner registers passive collection.
- **CLEANUP / EXIT:** None.
- **PERSISTENT STATE:** Stage 1 established.

---

### Anchor 19: S05_LATER_PLACE (F1323 .. F1378, pause to F1395)
- **ANCHOR:** "and only later place the values." (F1323..F1378)
- **WHAT APPEARS NOW:** Right Block inside card: `STAGE 2: PLACE VALUES LATER (WRITE)`. A red broken bridge / disconnect symbol `⚡ DECOUPLED` between Stage 1 and Stage 2!
- **CENTER-STAGE HERO:** Decoupled Architecture Diagram.
- **CAUSE:** Speaker highlights the disconnect between inspecting and placing.
- **EFFECT / MOTION:** Disconnect flash; learner sees the inefficiency of decoupling.
- **WHAT MUST NOT APPEAR YET:** Reasoning mode array.
- **COMPREHENSION HOLD:** F1378..F1395 (17 frames): The architectural flaw is crystal clear.
- **CLEANUP / EXIT:** Diagnosis card prepares to exit.
- **PERSISTENT STATE:** Architectural flaw diagnosed.

---

### Anchor 20: S05_THINK_ABOUT_THIS (F1395 .. F1430, pause to F1450)
- **ANCHOR:** "Now think about this." (F1395..F1430)
- **WHAT APPEARS NOW:** REASONING MODE AWAKENS!
  All previous comparison cards fade out smoothly.
  The chalkboard clears completely.
  The raw master input array `[2, 0, 2, 1, 1, 0, 2, 0, 1, 2]` moves to CENTER STAGE (`Y: 420`)!
  Title banner: `REASONING MODE · CAN WE UNIFY INSPECT AND PLACE?`
- **CENTER-STAGE HERO:** Raw Input Array centered on the clean chalkboard.
- **CAUSE:** Speaker invites the viewer into creative algorithm design.
- **EFFECT / MOTION:** Seamless canvas wipe; raw array smoothly slides into the visual focal center.
- **WHAT MUST NOT APPEAR YET:** Directional arrows or target zones.
- **COMPREHENSION HOLD:** F1430..F1450 (20 frames): 0.7s silence, setting a calm, focused chalkboard atmosphere.
- **CLEANUP / EXIT:** All legacy comparison cards, diagnosis cards, and timeline boxes disappear.
- **PERSISTENT STATE:** Clean chalkboard, centered raw array.

---

### Anchor 21: S05_CLASSIFY_MOMENT (F1450 .. F1588)
- **ANCHOR:** "Can we classify each value at the same moment we inspect it?" (F1450..F1588)
- **WHAT APPEARS NOW:** Central Question Banner shines above array (`RoughBox`):
  `CORE HYPOTHESIS: CLASSIFY AT THE EXACT MOMENT OF INSPECTION?`
  An Inspection Pointer lands on the first element (`nums[0] = 2`).
- **CENTER-STAGE HERO:** Central Hypothesis Banner + Inspection Pointer.
- **CAUSE:** Speaker poses the transformative algorithm concept.
- **EFFECT / MOTION:** Gold spotlight glows over array; inspection pointer marks current element.
- **WHAT MUST NOT APPEAR YET:** Directional arrows for 0, 1, 2.
- **COMPREHENSION HOLD:** Seamless transition into S05_ZERO_LEFT.
- **CLEANUP / EXIT:** None.
- **PERSISTENT STATE:** Core hypothesis established.

---

### Anchor 22: S05_ZERO_LEFT (F1588 .. F1672, pause to F1691)
- **ANCHOR:** "Can zero move directly to the left," (F1588..F1672)
- **WHAT APPEARS NOW:** Left Target Zone (`RoughBox`, Red `#FF7675`) illuminates:
  `[ ⬅ 0s TO THE LEFT ]`
  A graceful curved red chalk arrow (`RoughCurve`) shoots from the inspected zero directly into the Left Zone!
- **CENTER-STAGE HERO:** Left Target Zone & Red Chalk Vector.
- **CAUSE:** Narration specifies destination for zeros.
- **EFFECT / MOTION:** Red curved chalk path sketches leftward; left zone pulses with red glow.
- **WHAT MUST NOT APPEAR YET:** Right zone, middle zone.
- **COMPREHENSION HOLD:** F1672..F1691 (19 frames): Learner visually maps: $0 \rightarrow$ Left.
- **CLEANUP / EXIT:** None.
- **PERSISTENT STATE:** Left zone active.

---

### Anchor 23: S05_TWO_RIGHT (F1691 .. F1764, pause to F1783)
- **ANCHOR:** "two move directly to the right," (F1691..F1764)
- **WHAT APPEARS NOW:** Right Target Zone (`RoughBox`, Cyan `#5CE1E6`) illuminates:
  `[ 2s TO THE RIGHT ➡ ]`
  A graceful curved blue chalk arrow (`RoughCurve`) shoots from inspected two directly into the Right Zone!
- **CENTER-STAGE HERO:** Right Target Zone & Blue Chalk Vector.
- **CAUSE:** Narration specifies destination for twos.
- **EFFECT / MOTION:** Blue curved chalk path sketches rightward; right zone pulses with cyan glow.
- **WHAT MUST NOT APPEAR YET:** Middle zone.
- **COMPREHENSION HOLD:** F1764..F1783 (19 frames): Learner visually maps: $2 \rightarrow$ Right.
- **CLEANUP / EXIT:** None.
- **PERSISTENT STATE:** Left and Right zones active.

---

### Anchor 24: S05_ONE_MIDDLE (F1783 .. F1834, pause to F1862)
- **ANCHOR:** "and one stay in the middle?" (F1783..F1834)
- **WHAT APPEARS NOW:** Center Target Zone (`RoughBox`, White `#FFFDF7`) illuminates:
  `[ 1s IN THE MIDDLE ]`
  Vertical chalk brackets frame the center partition; 1s naturally occupy the interior space between 0s and 2s!
- **CENTER-STAGE HERO:** 3-Way Partition Topology (Left Red, Middle White, Right Blue).
- **CAUSE:** Narration specifies destination for ones.
- **EFFECT / MOTION:** Complete 3-way partition architecture completes.
- **WHAT MUST NOT APPEAR YET:** Strike-out of counting/rewrite phases.
- **COMPREHENSION HOLD:** F1834..F1862 (28 frames): Full 0.9s hold allowing the learner to marvel at the elegance of 3-way placement.
- **CLEANUP / EXIT:** None.
- **PERSISTENT STATE:** 3-Way Target Structure complete.

---

### Anchor 25: S05_IF_WE_CAN_DO_THAT (F1862 .. F1901, pause to F1928)
- **ANCHOR:** "If we can do that," (F1862..F1901)
- **WHAT APPEARS NOW:** Golden Synthesis Banner appears: `IF WE PLACE IMMEDIATELY DURING INSPECTION...`.
- **CENTER-STAGE HERO:** Synthesis Banner.
- **CAUSE:** Speaker introduces the logical consequence.
- **EFFECT / MOTION:** 3 zones glow synchronously; hypothesis connects to execution.
- **WHAT MUST NOT APPEAR YET:** Struck-out boxes.
- **COMPREHENSION HOLD:** F1901..F1928 (27 frames): 0.9s tension before the big payoff.
- **CLEANUP / EXIT:** None.
- **PERSISTENT STATE:** Synthesis primed.

---

### Anchor 26: S05_NO_COUNTING_PHASE (F1928 .. F2009, pause to F2030)
- **ANCHOR:** "we do not need a separate counting phase," (F1928..F2009)
- **WHAT APPEARS NOW:** A ghost box of `PASS 1: COUNTING PHASE` appears and is immediately CROSSED OUT with a bold red chalk strike (`RoughCurve` strike-through)!
  Badge: `❌ NO SEPARATE COUNTING PASS`.
- **CENTER-STAGE HERO:** Struck-out Counting Phase Box.
- **CAUSE:** Speaker eliminates the need for counting.
- **EFFECT / MOTION:** Red chalk line slashes through the counting box with chalk dust burst.
- **WHAT MUST NOT APPEAR YET:** Strike-out of rewrite phase.
- **COMPREHENSION HOLD:** F2009..F2030 (21 frames): Learner absorbs the death of Pass 1.
- **CLEANUP / EXIT:** None.
- **PERSISTENT STATE:** Pass 1 eliminated.

---

### Anchor 27: S05_NO_REWRITE_PHASE (F2030 .. F2144, pause to F2173)
- **ANCHOR:** "and we do not need a separate rewrite phase." (F2030..F2144)
- **WHAT APPEARS NOW:** A ghost box of `PASS 2: REWRITE PHASE` appears and is immediately CROSSED OUT with a bold red chalk strike!
  Badge: `❌ NO SEPARATE REWRITE PASS`.
  Unified Victory Pill: `TRUE 1-PASS IN-PLACE SORTING ACHIEVED!`.
- **CENTER-STAGE HERO:** Struck-out Rewrite Phase Box & Unified Victory Pill.
- **CAUSE:** Speaker eliminates the need for rewriting.
- **EFFECT / MOTION:** Second red chalk slash crosses out Pass 2; center pill glows green.
- **WHAT MUST NOT APPEAR YET:** Three-pointer teaser card.
- **COMPREHENSION HOLD:** F2144..F2173 (29 frames): Full 1.0s triumph hold: both separate passes are gone!
- **CLEANUP / EXIT:** Ghost boxes fade out.
- **PERSISTENT STATE:** True one-pass objective validated.

---

### Anchor 28: S05_THREE_POINTER_BEGINS (F2173 .. F2287)
- **ANCHOR:** "That is exactly where the three-pointer idea begins." (F2173..F2287)
- **WHAT APPEARS NOW:** Grand Handoff Gateway Card enters Center Stage (`RoughBox`, Sunburst Gold stroke):
  `NEXT: THE THREE-POINTER ALGORITHM (DUTCH NATIONAL FLAG)`
  Three pointer icons materialize on the array:
  - Left Pointer (`P1`) at index 0 (Red)
  - Current Scanner (`P2`) at index 0 (Gold)
  - Right Pointer (`P3`) at index 9 (Blue)
  Bottom takeaway badge: `ONE PASS · ZERO EXTRA MEMORY · IN-PLACE`.
- **CENTER-STAGE HERO:** Three Pointers Materialization & Handoff Gateway Card.
- **CAUSE:** Speaker concludes the derivation and launches the next approach.
- **EFFECT / MOTION:** Pointers land with bounce easing on the array; Gateway Card frames the entire transition. Settle to frame 2287.
- **WHAT MUST NOT APPEAR YET:** Scene 06 internal pointer logic.
- **COMPREHENSION HOLD:** Final hold to frame 2287.
- **CLEANUP / EXIT:** Struck-out boxes clear; gateway holds.
- **PERSISTENT STATE:** Production-ready Scene 05 complete.
