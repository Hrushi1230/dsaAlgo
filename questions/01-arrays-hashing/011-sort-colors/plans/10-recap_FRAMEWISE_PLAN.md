# Q11 Sort Colors — Scene 10 Framewise Scene Plan
## Scene: 10-recap (Final Recap, Transferable Invariant & Master Course Roadmap Continuation)
- **Total Duration:** 3,642 frames (121.40s @ 30 FPS)
- **Total Audio Anchors:** 21 anchors (`10-recap.anchors.json`)
- **Visual Palette & Theme:** Course Chalkboard Green (`#103426`), Hand chalk text, `@dsa/kit` primitives
- **Zero-Collision Invariants:** No giant outer card wrappers; natural chalkboard margins; >= 250px clearance above bottom captions (Y: 980)

---

## Act 1: Dual-Approach Architectural Summary (F0 .. F2354)

### Anchor 1: `S10_RECAP_INTRO` (F0 .. F82)
- **ANCHOR:** `S10_RECAP_INTRO` (F0..F82, Spoken: F0..F60, Pause: 22 frames)
- **WHAT APPEARS NOW:** Top Header bar (`QUESTION 011 · SORT COLORS` | `PART 1 · DUAL APPROACH SUMMARY` | `ARRAYS & HASHING · MEDIUM` at Y: 26). Main canvas clean chalkboard.
- **CENTER-STAGE HERO:** Opening chalkboard title: "Sort Colors: Dual Approach Synthesis" in chalk hand font.
- **CAUSE:** Narration: *"Let's quickly recap what we learned."*
- **EFFECT / MOTION:** Title fades in smoothly with subtle chalk bloom over F0..F40.
- **WHAT MUST NOT APPEAR YET:** Approach 1 and Approach 2 detailed arrays or metrics.
- **COMPREHENSION HOLD:** Static hold F60..F82 during the 22-frame pause.
- **CLEANUP / EXIT:** Opening title transitions to top header as Approach 1 initializes.
- **PERSISTENT STATE:** Top status bar and chalkboard background.

---

### Anchor 2: `S10_COUNTING_START` (F82 .. F130)
- **ANCHOR:** `S10_COUNTING_START` (F82..F130, Spoken: F82..F130, Pause: 0 frames)
- **WHAT APPEARS NOW:** Approach 1 Section Header at Y: 110: "APPROACH 1: TWO-PASS COUNTING SORT".
- **CENTER-STAGE HERO:** Approach 1 header and initial unorganized array layout.
- **CAUSE:** Narration: *"We started with the counting approach"*
- **EFFECT / MOTION:** Subtitle fades in with slide-up easing (Y: 120 &rarr; 110).
- **WHAT MUST NOT APPEAR YET:** Frequency counters and rewrite track.
- **COMPREHENSION HOLD:** Instant comprehension beat heading into the domain rationale.
- **CLEANUP / EXIT:** None.
- **PERSISTENT STATE:** Top header and Approach 1 section title.

---

### Anchor 3: `S10_COUNTING_WHY` (F130 .. F337)
- **ANCHOR:** `S10_COUNTING_WHY` (F130..F337, Spoken: F130..F316, Pause: 21 frames)
- **WHAT APPEARS NOW:** Three category badges at Y: 210: `0 (Red)`, `1 (White)`, `2 (Blue)` with label "RESTRICTED DOMAIN: K = 3 VALUES".
- **CENTER-STAGE HERO:** The 3 distinct domain category chips.
- **CAUSE:** Narration: *"because the array contains only 0, 1, and 2."*
- **EFFECT / MOTION:** Sequential pop-in of chip `0` at F140, chip `1` at F200, chip `2` at F260.
- **WHAT MUST NOT APPEAR YET:** Pass 1 counting loop execution.
- **COMPREHENSION HOLD:** 21-frame hold F316..F337 ensuring learner registers why counting sort is feasible.
- **CLEANUP / EXIT:** Domain chips slide upward to make room for Pass 1 & Pass 2 cards.
- **PERSISTENT STATE:** Domain chips persist as reference context.

---

### Anchor 4: `S10_COUNTING_HOW` (F337 .. F505)
- **ANCHOR:** `S10_COUNTING_HOW` (F337..F505, Spoken: F337..F487, Pause: 18 frames)
- **WHAT APPEARS NOW:** 
  1. Pass 1 frequency box: `count0 = 3`, `count1 = 3`, `count2 = 4`.
  2. Pass 2 in-place rewrite visual: `ArrayTrackV2` showing elements being rewritten to `[0, 0, 0, 1, 1, 1, 2, 2, 2, 2]`.
- **CENTER-STAGE HERO:** The two-pass flow: frequency counting &rarr; sequential overwriting.
- **CAUSE:** Narration: *"We counted how many of each value we had and then rewrote the array."*
- **EFFECT / MOTION:** Counters fill over F340..F400, followed by array slots sequentially changing colors to sorted partitions over F410..F480.
- **WHAT MUST NOT APPEAR YET:** Complexity badge and limitation warning.
- **COMPREHENSION HOLD:** 18-frame hold F487..F505 to observe the final sorted array.
- **CLEANUP / EXIT:** None.
- **PERSISTENT STATE:** Two-pass counting visual state.

---

### Anchor 5: `S10_COUNTING_COMPLEXITY` (F505 .. F667)
- **ANCHOR:** `S10_COUNTING_COMPLEXITY` (F505..F667, Spoken: F505..F654, Pause: 13 frames)
- **WHAT APPEARS NOW:** Counting Sort Complexity Bar: `Time: O(N)` (vivid green) · `Space: O(1)` (vivid green).
- **CENTER-STAGE HERO:** The complexity strip below the array.
- **CAUSE:** Narration: *"That gave us O of n time and O of 1 extra space."*
- **EFFECT / MOTION:** Metrics slide in from bottom with opacity fade over F510..F550.
- **WHAT MUST NOT APPEAR YET:** "2 Passes" limitation alert.
- **COMPREHENSION HOLD:** Hold F654..F667.
- **CLEANUP / EXIT:** None.
- **PERSISTENT STATE:** Complexity metrics.

---

### Anchor 6: `S10_COUNTING_TWO_PASSES` (F667 .. F731)
- **ANCHOR:** `S10_COUNTING_TWO_PASSES` (F667..F731, Spoken: F667..F721, Pause: 10 frames)
- **WHAT APPEARS NOW:** Amber limitation badge: `⚠️ LIMITATION: REQUIRES 2 FULL PASSES (Scan array, then overwrite array)`.
- **CENTER-STAGE HERO:** The limitation badge highlighting why an optimal one-pass solution is needed.
- **CAUSE:** Narration: *"But it still needed two passes."*
- **EFFECT / MOTION:** Amber badge pulses gently with warning glow over F675..F710.
- **WHAT MUST NOT APPEAR YET:** Dutch National Flag components.
- **COMPREHENSION HOLD:** Hold F721..F731.
- **CLEANUP / EXIT:** Counting sort elements compress and fade smoothly to make way for Dutch National Flag.
- **PERSISTENT STATE:** Top status bar.

---

### Anchor 7: `S10_DNF_IMPROVED` (F731 .. F885)
- **ANCHOR:** `S10_DNF_IMPROVED` (F731..F885, Spoken: F731..F866, Pause: 19 frames)
- **WHAT APPEARS NOW:** Approach 2 Header at Y: 110: "APPROACH 2: DUTCH NATIONAL FLAG (ONE-PASS OPTIMAL)".
- **CENTER-STAGE HERO:** New hero header and clean 10-slot master array `[2, 1, 2, 0, 2, 1, 0, 1, 0, 2]`.
- **CAUSE:** Narration: *"Then we improved it. Using the Dutch national flag pattern,"*
- **EFFECT / MOTION:** Counting sort dissolves; Dutch National Flag banner expands with gold border at F740..F780.
- **WHAT MUST NOT APPEAR YET:** Pointer badges (`low`, `mid`, `high`).
- **COMPREHENSION HOLD:** Hold F866..F885.
- **CLEANUP / EXIT:** Counting sort elements fully removed.
- **PERSISTENT STATE:** DNF title and initial array track.

---

### Anchor 8: `S10_DNF_POINTERS` (F885 .. F1024)
- **ANCHOR:** `S10_DNF_POINTERS` (F885..F1024, Spoken: F885..F998, Pause: 26 frames)
- **WHAT APPEARS NOW:** Three pointers on `ArrayTrackV2` via `PointerLaneV2` (top placement):
  - `low` at slot 0 (red)
  - `mid` at slot 0 (yellow)
  - `high` at slot 9 (blue)
- **CENTER-STAGE HERO:** The 3 pointers pointing down into the array.
- **CAUSE:** Narration: *"we used three pointers, low, mid, and high."*
- **EFFECT / MOTION:** `low` drops down at F935, `mid` drops at F958, `high` drops at F988.
- **WHAT MUST NOT APPEAR YET:** Partition brackets.
- **COMPREHENSION HOLD:** 26-frame hold F998..F1024 showing the initial pointer triangulation.
- **CLEANUP / EXIT:** None.
- **PERSISTENT STATE:** 3 pointers at initial indices.

---

### Anchor 9: `S10_DNF_FOUR_REGIONS` (F1024 .. F1309)
- **ANCHOR:** `S10_DNF_FOUR_REGIONS` (F1024..F1309, Spoken: F1024..F1292, Pause: 17 frames)
- **WHAT APPEARS NOW:** Four partition brackets below the array:
  - Region 1: `0s [0 .. low-1]` (Red)
  - Region 2: `1s [low .. mid-1]` (White)
  - Region 3: `UNKNOWN [mid .. high]` (Yellow)
  - Region 4: `2s [high+1 .. n-1]` (Blue)
- **CENTER-STAGE HERO:** The 4 logical regions spanning the entire array.
- **CAUSE:** Narration: *"And those three pointers maintained four regions, confirmed zeros, confirmed ones, unknown values, and confirmed twos."*
- **EFFECT / MOTION:** Brackets illuminate sequentially: 0s at F1131, 1s at F1179, UNKNOWN at F1211, 2s at F1265.
- **WHAT MUST NOT APPEAR YET:** The 3 branch rules.
- **COMPREHENSION HOLD:** 17-frame hold F1292..F1309.
- **CLEANUP / EXIT:** None.
- **PERSISTENT STATE:** 4 partition brackets and pointers.

---

### Anchor 10: `S10_RULE_0` (F1309 .. F1486)
- **ANCHOR:** `S10_RULE_0` (F1309..F1486, Spoken: F1309..F1465, Pause: 21 frames)
- **WHAT APPEARS NOW:** Rule Card 0 at bottom left:
  - `nums[mid] == 0`
  - Action: `swap(nums[low], nums[mid])` &rarr; `low += 1`, `mid += 1`.
  - Semantic meaning: Confirmed 0 placed into confirmed red region.
- **CENTER-STAGE HERO:** Rule 0 card and simulated swap motion on slot.
- **CAUSE:** Narration: *"If nums at mid is 0, move it to the left, then move low and mid."*
- **EFFECT / MOTION:** Card slides in from left; swap flight indicator triggers briefly.
- **WHAT MUST NOT APPEAR YET:** Rule 1 and Rule 2 cards.
- **COMPREHENSION HOLD:** Hold F1465..F1486.
- **CLEANUP / EXIT:** Rule 0 card settles into 3-column rule grid.
- **PERSISTENT STATE:** Rule 0 card active.

---

### Anchor 11: `S10_RULE_1` (F1486 .. F1652)
- **ANCHOR:** `S10_RULE_1` (F1486..F1652, Spoken: F1486..F1652, Pause: 0 frames)
- **WHAT APPEARS NOW:** Rule Card 1 at bottom center:
  - `nums[mid] == 1`
  - Action: `mid += 1` (zero swaps).
  - Semantic meaning: Already in middle region; expand 1s naturally.
- **CENTER-STAGE HERO:** Rule 1 card.
- **CAUSE:** Narration: *"If nums at mid is 1, it already belongs in the middle. So just move mid."*
- **EFFECT / MOTION:** Card slides in; pointer `mid` steps right.
- **WHAT MUST NOT APPEAR YET:** Rule 2 card.
- **COMPREHENSION HOLD:** Instant transition into Rule 2.
- **CLEANUP / EXIT:** None.
- **PERSISTENT STATE:** Rule 0 and Rule 1 cards.

---

### Anchor 12: `S10_RULE_2` (F1652 .. F1914)
- **ANCHOR:** `S10_RULE_2` (F1652..F1914, Spoken: F1652..F1894, Pause: 20 frames)
- **WHAT APPEARS NOW:** Rule Card 2 at bottom right:
  - `nums[mid] == 2`
  - Action: `swap(nums[mid], nums[high])` &rarr; `high -= 1`, **`mid` STAYS! 🔒**
- **CENTER-STAGE HERO:** Rule 2 card with highlighted lock icon on `mid`.
- **CAUSE:** Narration: *"And if nums at mid is 2, move it to the right, move high left. But keep mid where it is."*
- **EFFECT / MOTION:** Card reveals; lock icon pulses in gold.
- **WHAT MUST NOT APPEAR YET:** "Why mid stays" explanation callout.
- **COMPREHENSION HOLD:** Hold F1894..F1914.
- **CLEANUP / EXIT:** None.
- **PERSISTENT STATE:** All 3 rule cards visible side-by-side.

---

### Anchor 13: `S10_RULE_2_WHY` (F1914 .. F2104)
- **ANCHOR:** `S10_RULE_2_WHY` (F1914..F2104, Spoken: F1914..F2081, Pause: 23 frames)
- **WHAT APPEARS NOW:** Golden spotlight banner over Rule 2:
  - "CRITICAL CAUTION: The element that arrived from `high` was inside UNKNOWN region and has NEVER been inspected!"
- **CENTER-STAGE HERO:** The UNKNOWN origin explanation banner.
- **CAUSE:** Narration: *"That last rule is important because the value coming from high is still unknown."*
- **EFFECT / MOTION:** UNKNOWN bracket pulses with yellow halo; rule banner pops with 1.1x scale ease.
- **WHAT MUST NOT APPEAR YET:** Final DNF complexity champion banner.
- **COMPREHENSION HOLD:** 23-frame hold F2081..F2104.
- **CLEANUP / EXIT:** Spotlight banner fades.
- **PERSISTENT STATE:** 3 rule cards.

---

### Anchor 14: `S10_DNF_ONE_PASS` (F2104 .. F2354)
- **ANCHOR:** `S10_DNF_ONE_PASS` (F2104..F2354, Spoken: F2104..F2344, Pause: 10 frames)
- **WHAT APPEARS NOW:** DNF Champion Metric Banner:
  - `Time: O(N)` · `Space: O(1)` · `Passes: 1 (Strictly In-Place)`
  - Subtitle: "ONE SINGLE PASS · ZERO EXTRA MEMORY · ZERO WASTED WORK"
- **CENTER-STAGE HERO:** The Champion Banner spanning center stage.
- **CAUSE:** Narration: *"With this idea, we solved the problem in one pass, using O of n time and O of 1 extra space."*
- **EFFECT / MOTION:** Champion banner locks in with green rough border and triumphant subtle glow.
- **WHAT MUST NOT APPEAR YET:** Act 2 Transferable Lesson components.
- **COMPREHENSION HOLD:** Hold F2344..F2354.
- **CLEANUP / EXIT:** Act 1 dissolves cleanly into chalkboard background.
- **PERSISTENT STATE:** Top status bar updates.

---

## Act 2: Transferable Partition Invariant Strategy (F2354 .. F3214)

### Anchor 15: `S10_BIGGER_LESSON` (F2354 .. F2453)
- **ANCHOR:** `S10_BIGGER_LESSON` (F2354..F2453, Spoken: F2354..F2453, Pause: 0 frames)
- **WHAT APPEARS NOW:** Top Header updates to `PART 2 · THE PARTITION INVARIANT STRATEGY`.
  - Main Title: "The Transferable Engineering Strategy" in large hand font.
- **CENTER-STAGE HERO:** The transitional title card directly on the chalkboard.
- **CAUSE:** Narration: *"But the bigger lesson is not just sort colors."*
- **EFFECT / MOTION:** Smooth fade-in over F2354..F2390.
- **WHAT MUST NOT APPEAR YET:** 3 question cards.
- **COMPREHENSION HOLD:** Instant continuation into category trigger.
- **CLEANUP / EXIT:** None.
- **PERSISTENT STATE:** Section 2 header.

---

### Anchor 16: `S10_PARTITION_THINK` (F2453 .. F2645)
- **ANCHOR:** `S10_PARTITION_THINK` (F2453..F2645, Spoken: F2453..F2640, Pause: 5 frames)
- **WHAT APPEARS NOW:** Core Invariant Principle Banner:
  - "WHEN DATA HAS K FEW DISTINCT CATEGORIES &rarr; THINK INVARIANT-BASED PARTITIONING"
- **CENTER-STAGE HERO:** The uppercase heuristic banner.
- **CAUSE:** Narration: *"Whenever a problem has only a few categories, think about partitioning."*
- **EFFECT / MOTION:** Banner draws on chalkboard with rough border.
- **WHAT MUST NOT APPEAR YET:** 3 Invariant questions.
- **COMPREHENSION HOLD:** Hold F2640..F2645.
- **CLEANUP / EXIT:** Banner shifts to upper-middle (Y: 180) to anchor the 3 questions below it.
- **PERSISTENT STATE:** Heuristic banner.

---

### Anchor 17: `S10_ASK_YOURSELF` (F2645 .. F2912)
- **ANCHOR:** `S10_ASK_YOURSELF` (F2645..F2912, Spoken: F2645..F2894, Pause: 18 frames)
- **WHAT APPEARS NOW:** Three Invariant Question Panels (Y: 260 .. 580):
  1. **QUESTION 1: What is CONFIRMED?** (Red/Green border) &rarr; Protected boundaries that never regress.
  2. **QUESTION 2: What is UNKNOWN?** (Yellow border) &rarr; The shrinking active interval `[mid .. high]`.
  3. **QUESTION 3: Which POINTERS guard the boundaries?** (Cyan border) &rarr; Invariant maintenance rules.
- **CENTER-STAGE HERO:** The 3-panel reasoning framework.
- **CAUSE:** Narration: *"Ask yourself what part is already confirmed, what part is still unknown, and which pointers protect those boundaries."*
- **EFFECT / MOTION:** Question 1 reveals at F2675, Question 2 reveals at F2759, Question 3 reveals at F2836.
- **WHAT MUST NOT APPEAR YET:** Philosophy banner.
- **COMPREHENSION HOLD:** 18-frame hold F2894..F2912.
- **CLEANUP / EXIT:** None.
- **PERSISTENT STATE:** 3 Invariant Question Panels.

---

### Anchor 18: `S10_NOT_JUST_MEMORIZING` (F2912 .. F3038)
- **ANCHOR:** `S10_NOT_JUST_MEMORIZING` (F2912..F3038, Spoken: F2912..F3021, Pause: 17 frames)
- **WHAT APPEARS NOW:** Contrast Banner at Y: 620:
  - `❌ AVOID: Memorizing ad-hoc pointer recipes and arbitrary swaps`
- **CENTER-STAGE HERO:** The anti-memorization warning strip.
- **CAUSE:** Narration: *"That way, you are not just memorizing a solution,"*
- **EFFECT / MOTION:** Slide up with red accent line.
- **WHAT MUST NOT APPEAR YET:** Transferable application chips.
- **COMPREHENSION HOLD:** Hold F3021..F3038.
- **CLEANUP / EXIT:** Anti-pattern strip fades.
- **PERSISTENT STATE:** 3 Invariant Question Panels.

---

### Anchor 19: `S10_LEARNING_INVARIANT` (F3038 .. F3214)
- **ANCHOR:** `S10_LEARNING_INVARIANT` (F3038..F3214, Spoken: F3038..F3194, Pause: 20 frames)
- **WHAT APPEARS NOW:** Golden Triumph Strip at Y: 620:
  - `✅ MASTER: An invariant technique that powers Quicksort · QuickSelect · Move Zeroes · 3-Way Partitioning`
- **CENTER-STAGE HERO:** The list of linked advanced algorithms.
- **CAUSE:** Narration: *"you are learning an invariant that can help in many other partition problems."*
- **EFFECT / MOTION:** Golden strip expands; 4 algorithm chips light up in green.
- **WHAT MUST NOT APPEAR YET:** Master Roadmap.
- **COMPREHENSION HOLD:** 20-frame hold F3194..F3214.
- **CLEANUP / EXIT:** Act 2 fades out completely to transition into course curriculum.
- **PERSISTENT STATE:** Top status bar updates.

---

## Act 3: Master Roadmap Continuation & State Mutation (F3214 .. F3642)

### Anchor 20: `S10_SORT_COLORS_COMPLETE` (F3214 .. F3421)
- **ANCHOR:** `S10_SORT_COLORS_COMPLETE` (F3214..F3421, Spoken: F3214..F3390, Pause: 31 frames)
- **WHAT APPEARS NOW:** Full `MasterRoadmapV2` UI:
  - Course Header: `CODE WITH ANIMATION · DSA PATTERN ROADMAP`
  - Global Progress Counter: starts at `10 / 227` &rarr; rolls to `11 / 227 COMPLETE`!
  - Pattern 01 (Arrays & Hashing): Row 011 (Sort Colors) transitions from `NOW ACTIVE` to `✔ COMPLETED` with golden triumph badge!
- **CENTER-STAGE HERO:** Row 011 in the curriculum and the rolling global counter `10` &rarr; `11`.
- **CAUSE:** Narration: *"And with that, sort colors is complete. Question 11, done."*
- **EFFECT / MOTION:** 
  - F3214..F3250: Roadmap fades in cleanly.
  - F3269: "Sort Colors" spoken &rarr; row 011 illuminates.
  - F3330..F3365: "Question 11, done" &rarr; checkmark draws on row 011; counter rolls 10 &rarr; 11 with pop scale.
- **WHAT MUST NOT APPEAR YET:** Spotlight shift to Question 012.
- **COMPREHENSION HOLD:** 31-frame triumphant hold F3390..F3421.
- **CLEANUP / EXIT:** Row 011 settles in completed state.
- **PERSISTENT STATE:** `MasterRoadmapV2` in completed state (11/227).

---

### Anchor 21: `S10_ROADMAP_CONTINUE` (F3421 .. F3642)
- **ANCHOR:** `S10_ROADMAP_CONTINUE` (F3421..F3642, Spoken: F3421..F3642, Pause: 0 frames)
- **WHAT APPEARS NOW:** 
  - Spotlight shifts to Row 012: `012 Next Permutation · LC 31 · Medium`.
  - Active badge: `👉 UP NEXT / CURRENT ROADMAP FOCUS` in bright cyan.
  - Right rail focus marker moves from `011` to `012`.
- **CENTER-STAGE HERO:** Row 012 (Next Permutation) spotlighted on the roadmap.
- **CAUSE:** Narration: *"We continue our arrays and hashing roadmap with the next problem. Next permutation."*
- **EFFECT / MOTION:**
  - F3421..F3505: "We continue our arrays and hashing roadmap" &rarr; Pattern 01 sidebar gently pulses.
  - F3565..F3642: "Next permutation" &rarr; Row 012 glows in cyan; right rail focus clicks to 012; camera holds until frame 3,642.
- **WHAT MUST NOT APPEAR YET:** End of video.
- **COMPREHENSION HOLD:** Hold until final frame 3,642.
- **CLEANUP / EXIT:** None (final frame of the entire problem).
- **PERSISTENT STATE:** Course roadmap ready for Question 012!
