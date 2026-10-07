# Scene 07 · Framewise Scene Plan: Method 2 · Full Verified Trace
**Question:** 012 · Next Permutation (LeetCode 31)  
**Audio File:** `remotion-project/public/audio/012/07-optimal-trace.mp3`  
**Duration:** 117,320 ms | **Total Frames:** 3,520 @ 30 FPS  
**Sync Anchor Source:** `sync/07-optimal-trace.anchors.json` (46 Anchors)  
**Mandatory Schema:** 9-Section Strict Framewise Specification per Anchor  

---

## Spatial Canvas Architecture & Zero-Collision Layout (`s03_f1250.png` Standard)

```text
+-----------------------------------------------------------------------------+
| Y: 36..80   Top Header Bar (Compact & Authoritative Strip)                  |
|             Left: [ 01 · ARRAYS & HASHING · LC 31 ] [ MEDIUM ]              |
|             Center: "Next Permutation" (Caveat cursive, 28px)               |
|             Right: [ APPROACH 2 · OPTIMAL TRACE ] (theme.pivot #ffd166)     |
+-----------------------------------------------------------------------------+
| Y: 96..132  Section Subtitle / Dynamic Pedagogical Eyebrow                  |
|             "STEP 1 · FIND PIVOT (FIRST DECREASE FROM RIGHT)"               |
+-----------------------------------------------------------------------------+
| Y: 145..785 MAIN CENTER-STAGE HERO ZONE (640px vertical budget)             |
|                                                                             |
|  [ARRAY TRACK V2] Fixed Slots at top: 15 (screen Y: 160)                    |
|   - Slot Dimensions: 110px width x 95px height, gap 16px                    |
|   - Top Index Row: idx [0] .. idx [6]                                       |
|   - Fixed Slots: 7 slots [2, 1, 5, 4, 4, 3, 0]                              |
|   - Bottom Pointer Lane: baseArrowLength=34, laneHeight=32                  |
|     * Step 1: Pointers i and i+1 scanning right-to-left                     |
|     * Step 2: Pointers pivot (idx 1) and j scanning right-to-left           |
|     * Step 3: Pointers left and right moving inward                         |
|   - Array Track Bottom Boundary: Y ~ 385px                                  |
|                                                                             |
|  [65px ZERO-COLLISION CLEARANCE ZONE: Y: 385..450]                          |
|                                                                             |
|  [INSPECTION & STEP STATUS CARD] Starts at top: 255 (screen Y: 400)         |
|   - Width: 1120px..1180px, Height: 310px..330px                             |
|   - Translucent Chalkboard Wash: rgba(10, 48, 42, 0.68)                     |
|   - RoughBox yellow outline with dynamic seed                               |
|   - Header: Eyebrow tag + Caveat handwritten title + right status badge     |
|   - Body: Step-by-step mathematical comparison / swap detail / rule proofs  |
|   - Bottom Boundary: Y ~ 720..730px                                         |
+-----------------------------------------------------------------------------+
| Y: 740..960 BREATHING ROOM ZONE (> 220px clearance)                         |
+-----------------------------------------------------------------------------+
| Y: 980      Captions Container (Karaoke Word-Level Timing)                  |
+-----------------------------------------------------------------------------+
```

---

## Anchor-by-Anchor Framewise Specification (46 Anchors)

### Anchor 01: `S07_MASTER`
- **Frame Range:** `[0, 34)` (34 frames, 1.13s) | Spoken: `[0, 34]`, Pause: 0f
- **Spoken Narration Anchor:** `"Our array is"`
- **ANCHOR:** `S07_MASTER` (Trace: `INIT-01`)
- **WHAT APPEARS NOW:** Top Header Bar with LC 31, Medium, Next Permutation, and amber badge `[ APPROACH 2 · OPTIMAL TRACE ]`. Dynamic Eyebrow reads `EXECUTION TRACE · MASTER TESTCASE [2, 1, 5, 4, 4, 3, 0]`. Master `ArrayTrackV2` appears centered with indices `0..6` and slots `[2, 1, 5, 4, 4, 3, 0]`.
- **CENTER-STAGE HERO:** Master trace array `[2, 1, 5, 4, 4, 3, 0]`.
- **CAUSE:** Narration introduces the input array for the optimal trace.
- **EFFECT / MOTION:** Array fades in smoothly (`opacity: 0 -> 1` over 12 frames). No pointers active yet.
- **WHAT MUST NOT APPEAR YET:** No search pointers, no comparisons.
- **COMPREHENSION HOLD:** Seamless flow into value readback at F34.
- **CLEANUP / EXIT:** Master array persists unchanged.
- **PERSISTENT STATE:** Master array centered with indices visible.

---

### Anchor 02: `S07_VALUES`
- **Frame Range:** `[34, 232)` (198 frames, 6.60s) | Spoken: `[34, 211]`, Pause: 21f (700ms)
- **Spoken Narration Anchor:** `"two... one... five... four... four... three... zero."`
- **ANCHOR:** `S07_VALUES` (Trace: `INIT-02`)
- **WHAT APPEARS NOW:** Individual slot values highlight in sequence as each number is spoken: 2 (F34), 1 (F59), 5 (F87), 4 (F121), 4 (F157), 3 (F176), 0 (F197).
- **CENTER-STAGE HERO:** Spoken value readback across all 7 elements.
- **CAUSE:** Narration reads each element of the master array.
- **EFFECT / MOTION:** Slot semantic state flashes `"query"` gold on spoken timestamp, then settles to neutral.
- **WHAT MUST NOT APPEAR YET:** No algorithm pointers or partitions.
- **COMPREHENSION HOLD:** Frames 211..232 hold on the neutral array while speaker pauses 700ms.
- **CLEANUP / EXIT:** All slots return to neutral state.
- **PERSISTENT STATE:** Array ready for Step 1 pivot search.

---

### Anchor 03: `S07_I_START`
- **Frame Range:** `[232, 322)` (90 frames, 3.00s) | Spoken: `[232, 304]`, Pause: 18f (600ms)
- **Spoken Narration Anchor:** `"We start the pivot search from the second-last index."`
- **ANCHOR:** `S07_I_START` (Trace: `PIVOT-01`)
- **WHAT APPEARS NOW:** Pointer `i` appears at index 5 (value 3). Pointer `i+1` appears at index 6 (value 0). An inspection card fades in below: `STEP 1 · PIVOT SEARCH` with title `Scan Right-to-Left: nums[i] < nums[i+1]`.
- **CENTER-STAGE HERO:** Initialization of `i=5` (second-last index: `n - 2`).
- **CAUSE:** Narration defines the starting position for the pivot search.
- **EFFECT / MOTION:** Pointers `i` (gold) and `i+1` (cyan) slide into position at slots 5 and 6. Card fades in at `top: 255`.
- **WHAT MUST NOT APPEAR YET:** No comparison outcome yet.
- **COMPREHENSION HOLD:** Frames 304..322 hold steady on initial positions.
- **CLEANUP / EXIT:** Pointers hold at indices 5 and 6 for comparison.
- **PERSISTENT STATE:** `i=5`, `i+1=6`.

---

### Anchor 04: `S07_C5`
- **Frame Range:** `[322, 423)` (101 frames, 3.37s) | Spoken: `[322, 406]`, Pause: 17f (567ms)
- **Spoken Narration Anchor:** `"At index five... three is smaller than zero?"`
- **ANCHOR:** `S07_C5` (Trace: `PIVOT-02`)
- **WHAT APPEARS NOW:** Comparison callout in card: `nums[5] < nums[6]` ➔ `3 < 0 ?`. Slots 5 and 6 highlighted in active query mode.
- **CENTER-STAGE HERO:** First comparison: `3 < 0`.
- **CAUSE:** Narration checks whether condition holds at `i=5`.
- **EFFECT / MOTION:** Pulsing focus border around slots 5 and 6. Formula badge glows in card.
- **WHAT MUST NOT APPEAR YET:** No "No" badge until spoken at F423.
- **COMPREHENSION HOLD:** Frames 406..423 pause on the question.
- **CLEANUP / EXIT:** Prepare false answer.
- **PERSISTENT STATE:** Comparison `3 < 0` active.

---

### Anchor 05: `S07_N5`
- **Frame Range:** `[423, 448)` (25 frames, 0.83s) | Spoken: `[423, 434]`, Pause: 14f (467ms)
- **Spoken Narration Anchor:** `"No."`
- **ANCHOR:** `S07_N5` (Trace: `PIVOT-03`)
- **WHAT APPEARS NOW:** Red rejection badge appears: `✗ FALSE: 3 ≥ 0`. Slot 5 marked as non-pivot.
- **CENTER-STAGE HERO:** Condition failure: `3` is not smaller than `0`.
- **CAUSE:** Narration confirms `3 < 0` is false.
- **EFFECT / MOTION:** Small spring badge stamp `[ ✗ FALSE ]` in card.
- **WHAT MUST NOT APPEAR YET:** Pointer `i` does not move until `"Move left"` is spoken.
- **COMPREHENSION HOLD:** Frames 434..448 hold on rejection.
- **CLEANUP / EXIT:** Ready to step pointer left.
- **PERSISTENT STATE:** Rejection confirmed for `i=5`.

---

### Anchor 06: `S07_M54`
- **Frame Range:** `[448, 478)` (30 frames, 1.00s) | Spoken: `[448, 464]`, Pause: 14f (467ms)
- **Spoken Narration Anchor:** `"Move left."`
- **ANCHOR:** `S07_M54` (Trace: `PIVOT-04`)
- **WHAT APPEARS NOW:** Pointer `i` shifts from index 5 to index 4. Pointer `i+1` shifts to index 5.
- **CENTER-STAGE HERO:** Pointer progression: `i: 5 -> 4`.
- **CAUSE:** Narration commands moving left after condition failure.
- **EFFECT / MOTION:** Smooth 12-frame linear interpolation of pointer X coordinates from slot 5 to slot 4.
- **WHAT MUST NOT APPEAR YET:** Comparison `4 < 3` does not appear until next anchor.
- **COMPREHENSION HOLD:** Frames 464..478 settle at index 4.
- **CLEANUP / EXIT:** Clear previous rejection badge.
- **PERSISTENT STATE:** `i=4`, `i+1=5`.

---

### Anchor 07: `S07_C4`
- **Frame Range:** `[478, 560)` (82 frames, 2.73s) | Spoken: `[478, 553]`, Pause: 7f (233ms)
- **Spoken Narration Anchor:** `"At index four... four is smaller than three?"`
- **ANCHOR:** `S07_C4` (Trace: `PIVOT-05`)
- **WHAT APPEARS NOW:** Card updates: `nums[4] < nums[5]` ➔ `4 < 3 ?`. Slots 4 and 5 highlighted.
- **CENTER-STAGE HERO:** Second comparison: `4 < 3`.
- **CAUSE:** Narration checks condition at `i=4`.
- **EFFECT / MOTION:** Query pulse on slots 4 and 5.
- **WHAT MUST NOT APPEAR YET:** No false verdict yet.
- **COMPREHENSION HOLD:** Frames 553..560 brief hold.
- **CLEANUP / EXIT:** Prepare false verdict.
- **PERSISTENT STATE:** `i=4`, comparison active.

---

### Anchor 08: `S07_N4`
- **Frame Range:** `[560, 584)` (24 frames, 0.80s) | Spoken: `[560, 570]`, Pause: 14f (467ms)
- **Spoken Narration Anchor:** `"No."`
- **ANCHOR:** `S07_N4` (Trace: `PIVOT-06`)
- **WHAT APPEARS NOW:** Rejection badge: `✗ FALSE: 4 ≥ 3`.
- **CENTER-STAGE HERO:** Condition failure at `i=4`.
- **CAUSE:** Narration confirms `4 < 3` is false.
- **EFFECT / MOTION:** Red badge stamps in card.
- **WHAT MUST NOT APPEAR YET:** Pointer does not move yet.
- **COMPREHENSION HOLD:** Frames 570..584 hold.
- **CLEANUP / EXIT:** Ready to move left.
- **PERSISTENT STATE:** `i=4` rejected.

---

### Anchor 09: `S07_M43`
- **Frame Range:** `[584, 612)` (28 frames, 0.93s) | Spoken: `[584, 601]`, Pause: 11f (367ms)
- **Spoken Narration Anchor:** `"Move left."`
- **ANCHOR:** `S07_M43` (Trace: `PIVOT-07`)
- **WHAT APPEARS NOW:** Pointer `i` shifts from index 4 to index 3. Pointer `i+1` shifts to index 4.
- **CENTER-STAGE HERO:** Pointer transition: `i: 4 -> 3`.
- **CAUSE:** Narration commands moving left.
- **EFFECT / MOTION:** 12-frame smooth pointer glide from slot 4 to slot 3.
- **WHAT MUST NOT APPEAR YET:** Comparison `4 < 4` does not appear yet.
- **COMPREHENSION HOLD:** Frames 601..612 settle at index 3.
- **CLEANUP / EXIT:** Clear previous rejection badge.
- **PERSISTENT STATE:** `i=3`, `i+1=4`.

---

### Anchor 10: `S07_C3`
- **Frame Range:** `[612, 709)` (97 frames, 3.23s) | Spoken: `[612, 692]`, Pause: 17f (567ms)
- **Spoken Narration Anchor:** `"At index three... four is smaller than four?"`
- **ANCHOR:** `S07_C3` (Trace: `PIVOT-08`)
- **WHAT APPEARS NOW:** Card updates: `nums[3] < nums[4]` ➔ `4 < 4 ?`. Both slots contain duplicate value 4!
- **CENTER-STAGE HERO:** Duplicate value comparison: `4 < 4`.
- **CAUSE:** Narration tests duplicate values at adjacent slots.
- **EFFECT / MOTION:** Both slots pulse with amber highlight. Formula in card displays `4 < 4`.
- **WHAT MUST NOT APPEAR YET:** Strict inequality rule explanation waits for Anchor 12.
- **COMPREHENSION HOLD:** Frames 692..709 hold on equality question.
- **CLEANUP / EXIT:** Prepare rejection.
- **PERSISTENT STATE:** Comparison `4 < 4` displayed.

---

### Anchor 11: `S07_NEQ`
- **Frame Range:** `[709, 729)` (20 frames, 0.67s) | Spoken: `[709, 718]`, Pause: 11f (367ms)
- **Spoken Narration Anchor:** `"No."`
- **ANCHOR:** `S07_NEQ` (Trace: `PIVOT-09`)
- **WHAT APPEARS NOW:** Rejection badge: `✗ FALSE: 4 = 4`.
- **CENTER-STAGE HERO:** Equality failure: `4` is not strictly less than `4`.
- **CAUSE:** Narration confirms condition fails for equal values.
- **EFFECT / MOTION:** Red badge stamps in card.
- **WHAT MUST NOT APPEAR YET:** Pointer does not move yet.
- **COMPREHENSION HOLD:** Frames 718..729 hold.
- **CLEANUP / EXIT:** Transition into duplicate rule explanation.
- **PERSISTENT STATE:** `4 < 4` confirmed false.

---

### Anchor 12: `S07_EQ_RULE`
- **Frame Range:** `[729, 809)` (80 frames, 2.67s) | Spoken: `[729, 794]`, Pause: 15f (500ms)
- **Spoken Narration Anchor:** `"Equal values do not satisfy the condition."`
- **ANCHOR:** `S07_EQ_RULE` (Trace: `PIVOT-10`)
- **WHAT APPEARS NOW:** Rule callout banner in card: `RULE: Condition must be strictly < (less than), not <= (less than or equal)`.
- **CENTER-STAGE HERO:** Algorithmic strict inequality invariant.
- **CAUSE:** Narration emphasizes why duplicate values fail to qualify as pivot.
- **EFFECT / MOTION:** Amber warning box illuminates inside card: `nums[i] < nums[i+1]` requires strict decrease.
- **WHAT MUST NOT APPEAR YET:** Pointer does not move yet.
- **COMPREHENSION HOLD:** Frames 794..809 hold on rule banner.
- **CLEANUP / EXIT:** Banner fades down to subtle tag.
- **PERSISTENT STATE:** Strict inequality understood.

---

### Anchor 13: `S07_M32`
- **Frame Range:** `[809, 839)` (30 frames, 1.00s) | Spoken: `[809, 830]`, Pause: 9f (300ms)
- **Spoken Narration Anchor:** `"Move left."`
- **ANCHOR:** `S07_M32` (Trace: `PIVOT-11`)
- **WHAT APPEARS NOW:** Pointer `i` shifts from index 3 to index 2. Pointer `i+1` shifts to index 3.
- **CENTER-STAGE HERO:** Pointer transition: `i: 3 -> 2`.
- **CAUSE:** Narration commands moving left.
- **EFFECT / MOTION:** 12-frame glide from slot 3 to slot 2.
- **WHAT MUST NOT APPEAR YET:** Comparison `5 < 4` does not appear yet.
- **COMPREHENSION HOLD:** Frames 830..839 settle at index 2.
- **CLEANUP / EXIT:** Reset comparison panel.
- **PERSISTENT STATE:** `i=2`, `i+1=3`.

---

### Anchor 14: `S07_C2`
- **Frame Range:** `[839, 936)` (97 frames, 3.23s) | Spoken: `[839, 923]`, Pause: 13f (433ms)
- **Spoken Narration Anchor:** `"At index two... five is smaller than four?"`
- **ANCHOR:** `S07_C2` (Trace: `PIVOT-12`)
- **WHAT APPEARS NOW:** Card updates: `nums[2] < nums[3]` ➔ `5 < 4 ?`. Slots 2 (val 5) and 3 (val 4) highlighted.
- **CENTER-STAGE HERO:** Peak value comparison: `5 < 4`.
- **CAUSE:** Narration checks condition at peak index `i=2`.
- **EFFECT / MOTION:** Pulse on slots 2 and 3.
- **WHAT MUST NOT APPEAR YET:** No false verdict yet.
- **COMPREHENSION HOLD:** Frames 923..936 pause on question.
- **CLEANUP / EXIT:** Prepare false verdict.
- **PERSISTENT STATE:** `i=2`, comparison active.

---

### Anchor 15: `S07_N2`
- **Frame Range:** `[936, 958)` (22 frames, 0.73s) | Spoken: `[936, 946]`, Pause: 12f (400ms)
- **Spoken Narration Anchor:** `"No."`
- **ANCHOR:** `S07_N2` (Trace: `PIVOT-13`)
- **WHAT APPEARS NOW:** Rejection badge: `✗ FALSE: 5 ≥ 4`.
- **CENTER-STAGE HERO:** Condition failure at `i=2`.
- **CAUSE:** Narration confirms `5 < 4` is false.
- **EFFECT / MOTION:** Red badge stamps in card.
- **WHAT MUST NOT APPEAR YET:** Pointer does not move yet.
- **COMPREHENSION HOLD:** Frames 946..958 hold.
- **CLEANUP / EXIT:** Ready to move left.
- **PERSISTENT STATE:** `i=2` rejected.

---

### Anchor 16: `S07_M21`
- **Frame Range:** `[958, 989)` (31 frames, 1.03s) | Spoken: `[958, 973]`, Pause: 16f (533ms)
- **Spoken Narration Anchor:** `"Move left."`
- **ANCHOR:** `S07_M21` (Trace: `PIVOT-14`)
- **WHAT APPEARS NOW:** Pointer `i` shifts from index 2 to index 1. Pointer `i+1` shifts to index 2.
- **CENTER-STAGE HERO:** Pointer transition: `i: 2 -> 1`.
- **CAUSE:** Narration commands moving left to the critical pivot location.
- **EFFECT / MOTION:** 12-frame smooth glide from slot 2 to slot 1.
- **WHAT MUST NOT APPEAR YET:** Success highlight waits for Anchor 18.
- **COMPREHENSION HOLD:** Frames 973..989 settle at index 1.
- **CLEANUP / EXIT:** Prepare true comparison.
- **PERSISTENT STATE:** `i=1`, `i+1=2`.

---

### Anchor 17: `S07_C1`
- **Frame Range:** `[989, 1071)` (82 frames, 2.73s) | Spoken: `[989, 1063]`, Pause: 8f (267ms)
- **Spoken Narration Anchor:** `"At index one... one is smaller than five?"`
- **ANCHOR:** `S07_C1` (Trace: `PIVOT-15`)
- **WHAT APPEARS NOW:** Card updates: `nums[1] < nums[2]` ➔ `1 < 5 ?`. Slot 1 (val 1) and Slot 2 (val 5) glow with expectant anticipation.
- **CENTER-STAGE HERO:** Critical comparison: `1 < 5`.
- **CAUSE:** Narration evaluates condition at index 1.
- **EFFECT / MOTION:** Gold and cyan glow on slots 1 and 2.
- **WHAT MUST NOT APPEAR YET:** Pivot confirmation waits for Anchor 18/19.
- **COMPREHENSION HOLD:** Frames 1063..1071 hold.
- **CLEANUP / EXIT:** Prepare victory reveal.
- **PERSISTENT STATE:** `1 < 5` query active.

---

### Anchor 18: `S07_Y1`
- **Frame Range:** `[1071, 1096)` (25 frames, 0.83s) | Spoken: `[1071, 1083]`, Pause: 13f (433ms)
- **Spoken Narration Anchor:** `"Yes."`
- **ANCHOR:** `S07_Y1` (Trace: `PIVOT-16`)
- **WHAT APPEARS NOW:** Vibrant green victory badge stamps on: `✓ TRUE! 1 < 5`.
- **CENTER-STAGE HERO:** True condition outcome.
- **CAUSE:** Narration confirms condition is satisfied at `i=1`.
- **EFFECT / MOTION:** Green badge stamps on with spring pop (`scale: 0.85 -> 1.05 -> 1.0`).
- **WHAT MUST NOT APPEAR YET:** Pivot label badge waits for Anchor 19.
- **COMPREHENSION HOLD:** Frames 1083..1096 hold on triumph.
- **CLEANUP / EXIT:** Transition pointer to permanent pivot status.
- **PERSISTENT STATE:** Condition satisfied at `i=1`.

---

### Anchor 19: `S07_PIVOT`
- **Frame Range:** `[1096, 1152)` (56 frames, 1.87s) | Spoken: `[1096, 1139]`, Pause: 13f (433ms)
- **Spoken Narration Anchor:** `"So index one is our pivot."`
- **ANCHOR:** `S07_PIVOT` (Trace: `PIVOT-17`)
- **WHAT APPEARS NOW:** Pointer `i` transforms into permanent gold pointer: `★ PIVOT (i=1)`. Slot 1 turns solid gold (`theme.pivot`). Card title updates to `PIVOT FOUND AT INDEX 1`.
- **CENTER-STAGE HERO:** Pivot identification at index 1.
- **CAUSE:** Narration locks index 1 as the algorithmic pivot.
- **EFFECT / MOTION:** Slot 1 pulses gold. Pointer badge updates to `pivot`. Pointer `i+1` gracefully fades away.
- **WHAT MUST NOT APPEAR YET:** Successor search does not begin until Anchor 22.
- **COMPREHENSION HOLD:** Frames 1139..1152 hold on pivot confirmation.
- **CLEANUP / EXIT:** Remove `i+1` pointer.
- **PERSISTENT STATE:** Pivot established at `i=1` (slot 1).

---

### Anchor 20: `S07_PIVOT_VAL`
- **Frame Range:** `[1152, 1202)` (50 frames, 1.67s) | Spoken: `[1152, 1192]`, Pause: 10f (333ms)
- **Spoken Narration Anchor:** `"The pivot value is one."`
- **ANCHOR:** `S07_PIVOT_VAL` (Trace: `PIVOT-18`)
- **WHAT APPEARS NOW:** Value badge illuminates inside slot 1: `nums[1] = 1`. Card callout highlights: `Pivot Value = 1`.
- **CENTER-STAGE HERO:** Pivot value `1`.
- **CAUSE:** Narration highlights the exact numerical value that must be replaced.
- **EFFECT / MOTION:** Scale pulse on value `1` inside slot 1 (`scale: 1.0 -> 1.15 -> 1.0`).
- **WHAT MUST NOT APPEAR YET:** Suffix partition band does not appear until Anchor 21.
- **COMPREHENSION HOLD:** Frames 1192..1202 hold.
- **CLEANUP / EXIT:** Prepare suffix boundary illumination.
- **PERSISTENT STATE:** Pivot value `1` locked.

---

### Anchor 21: `S07_SUFFIX`
- **Frame Range:** `[1202, 1406)` (204 frames, 6.80s) | Spoken: `[1202, 1391]`, Pause: 15f (500ms)
- **Spoken Narration Anchor:** `"Everything after it... five... four... four... three... zero... is non-increasing."`
- **ANCHOR:** `S07_SUFFIX` (Trace: `PIVOT-19`)
- **WHAT APPEARS NOW:** Green hatched partition band illuminates over slots `2..6` (`[5, 4, 4, 3, 0]`). Top bracket labels: `NON-INCREASING SUFFIX (5 ≥ 4 ≥ 4 ≥ 3 ≥ 0)`.
- **CENTER-STAGE HERO:** Non-increasing suffix `[5, 4, 4, 3, 0]`.
- **CAUSE:** Narration proves that everything right of pivot is descending/non-increasing.
- **EFFECT / MOTION:** Partition band sweeps across slots 2 to 6. Inequality chain `5 ≥ 4 ≥ 4 ≥ 3 ≥ 0` appears in card.
- **WHAT MUST NOT APPEAR YET:** Successor pointer `j` does not appear until Anchor 23.
- **COMPREHENSION HOLD:** Frames 1391..1406 hold on the complete structural invariant.
- **CLEANUP / EXIT:** Suffix band stays illuminated as background context.
- **PERSISTENT STATE:** Pivot at `i=1` (gold), Suffix on `[2..6]` (green hatched).

---

### Anchor 22: `S07_FIND_REPL`
- **Frame Range:** `[1406, 1511)` (105 frames, 3.50s) | Spoken: `[1406, 1481]`, Pause: 30f (1000ms)
- **Spoken Narration Anchor:** `"Now we find the value that should replace the pivot."`
- **ANCHOR:** `S07_FIND_REPL` (Trace: `SUCC-01`)
- **WHAT APPEARS NOW:** Dynamic Eyebrow updates: `STEP 2 · FIND SUCCESSOR (SMALLEST VALUE IN SUFFIX > PIVOT)`. Card updates to Step 2: `Goal: Find first element j from right where nums[j] > nums[i] (nums[j] > 1)`.
- **CENTER-STAGE HERO:** Step 2 successor objective.
- **CAUSE:** Narration transitions from Step 1 (pivot) to Step 2 (successor).
- **EFFECT / MOTION:** Card flips to Step 2 styling (accent cyan and gold).
- **WHAT MUST NOT APPEAR YET:** Pointer `j` does not appear until `"Start from the last index"`.
- **COMPREHENSION HOLD:** Frames 1481..1511 provide a full 1-second hold.
- **CLEANUP / EXIT:** Prepare `j` pointer at last index.
- **PERSISTENT STATE:** Step 2 goal active.

---

### Anchor 23: `S07_J_START`
- **Frame Range:** `[1511, 1565)` (54 frames, 1.80s) | Spoken: `[1511, 1549]`, Pause: 16f (533ms)
- **Spoken Narration Anchor:** `"Start from the last index."`
- **ANCHOR:** `S07_J_START` (Trace: `SUCC-02`)
- **WHAT APPEARS NOW:** Pointer `j` appears at index 6 (value 0). Label: `j`.
- **CENTER-STAGE HERO:** Successor search pointer initialized at `j=6`.
- **CAUSE:** Narration specifies starting point of successor scan.
- **EFFECT / MOTION:** Cyan pointer `j` slides into place under slot 6.
- **WHAT MUST NOT APPEAR YET:** Comparison `0 > 1` does not appear until Anchor 24.
- **COMPREHENSION HOLD:** Frames 1549..1565 hold on `j=6`.
- **CLEANUP / EXIT:** Prepare comparison.
- **PERSISTENT STATE:** `pivot=1` (slot 1), `j=6` (slot 6).

---

### Anchor 24: `S07_J6`
- **Frame Range:** `[1565, 1637)` (72 frames, 2.40s) | Spoken: `[1565, 1609]`, Pause: 28f (933ms)
- **Spoken Narration Anchor:** `"Zero is greater than one?"`
- **ANCHOR:** `S07_J6` (Trace: `SUCC-03`)
- **WHAT APPEARS NOW:** Card updates: `nums[6] > nums[1]` ➔ `0 > 1 ?`. Slot 6 and Slot 1 connected by comparison dashed arc.
- **CENTER-STAGE HERO:** First successor test: `0 > 1`.
- **CAUSE:** Narration checks if value at `j=6` can replace pivot.
- **EFFECT / MOTION:** Query pulse on slot 6.
- **WHAT MUST NOT APPEAR YET:** No false verdict yet.
- **COMPREHENSION HOLD:** Frames 1609..1637 hold on question.
- **CLEANUP / EXIT:** Prepare rejection.
- **PERSISTENT STATE:** `0 > 1` query active.

---

### Anchor 25: `S07_J6_NO`
- **Frame Range:** `[1637, 1648)` (11 frames, 0.37s) | Spoken: `[1637, 1648]`, Pause: 0f (0ms)
- **Spoken Narration Anchor:** `"No."`
- **ANCHOR:** `S07_J6_NO` (Trace: `SUCC-04`)
- **WHAT APPEARS NOW:** Rejection badge: `✗ FALSE: 0 ≤ 1`.
- **CENTER-STAGE HERO:** Rejection of `j=6`.
- **CAUSE:** Narration confirms `0` cannot replace `1`.
- **EFFECT / MOTION:** Red badge stamps on.
- **WHAT MUST NOT APPEAR YET:** Pointer movement waits for Anchor 26.
- **COMPREHENSION HOLD:** Immediate step to Anchor 26.
- **CLEANUP / EXIT:** Ready to move left.
- **PERSISTENT STATE:** `j=6` rejected.

---

### Anchor 26: `S07_J_MOVE`
- **Frame Range:** `[1648, 1693)` (45 frames, 1.50s) | Spoken: `[1648, 1685]`, Pause: 8f (267ms)
- **Spoken Narration Anchor:** `"Move left."`
- **ANCHOR:** `S07_J_MOVE` (Trace: `SUCC-05`)
- **WHAT APPEARS NOW:** Pointer `j` moves left from index 6 to index 5.
- **CENTER-STAGE HERO:** Pointer movement: `j: 6 -> 5`.
- **CAUSE:** Narration commands stepping left.
- **EFFECT / MOTION:** Smooth 12-frame glide of `j` pointer from slot 6 to slot 5.
- **WHAT MUST NOT APPEAR YET:** Comparison `3 > 1` waits for Anchor 27.
- **COMPREHENSION HOLD:** Frames 1685..1693 settle at index 5.
- **CLEANUP / EXIT:** Clear previous rejection badge.
- **PERSISTENT STATE:** `j=5` (slot 5, value 3).

---

### Anchor 27: `S07_J5`
- **Frame Range:** `[1693, 1750)` (57 frames, 1.90s) | Spoken: `[1693, 1734]`, Pause: 16f (533ms)
- **Spoken Narration Anchor:** `"Three is greater than one?"`
- **ANCHOR:** `S07_J5` (Trace: `SUCC-06`)
- **WHAT APPEARS NOW:** Card updates: `nums[5] > nums[1]` ➔ `3 > 1 ?`. Slot 5 and Slot 1 highlighted.
- **CENTER-STAGE HERO:** Second successor test: `3 > 1`.
- **CAUSE:** Narration checks if value at `j=5` can replace pivot.
- **EFFECT / MOTION:** Expectant gold/cyan pulse on slots 1 and 5.
- **WHAT MUST NOT APPEAR YET:** Victory confirmation waits for Anchor 28.
- **COMPREHENSION HOLD:** Frames 1734..1750 hold.
- **CLEANUP / EXIT:** Prepare success verdict.
- **PERSISTENT STATE:** `3 > 1` query active.

---

### Anchor 28: `S07_J5_YES`
- **Frame Range:** `[1750, 1782)` (32 frames, 1.07s) | Spoken: `[1750, 1763]`, Pause: 19f (633ms)
- **Spoken Narration Anchor:** `"Yes."`
- **ANCHOR:** `S07_J5_YES` (Trace: `SUCC-07`)
- **WHAT APPEARS NOW:** Green victory badge: `✓ TRUE! 3 > 1`.
- **CENTER-STAGE HERO:** Successor condition satisfied.
- **CAUSE:** Narration confirms `3 > 1`.
- **EFFECT / MOTION:** Green badge stamps on.
- **WHAT MUST NOT APPEAR YET:** Successor badge waits for Anchor 29.
- **COMPREHENSION HOLD:** Frames 1763..1782 hold.
- **CLEANUP / EXIT:** Prepare successor lock.
- **PERSISTENT STATE:** `3 > 1` confirmed true.

---

### Anchor 29: `S07_SUCCESSOR`
- **Frame Range:** `[1782, 1838)` (56 frames, 1.87s) | Spoken: `[1782, 1826]`, Pause: 12f (400ms)
- **Spoken Narration Anchor:** `"So index five is our successor."`
- **ANCHOR:** `S07_SUCCESSOR` (Trace: `SUCC-08`)
- **WHAT APPEARS NOW:** Pointer `j` updates to permanent cyan pointer: `★ SUCCESSOR (j=5)`. Slot 5 turns solid cyan (`theme.good`). Card updates: `SUCCESSOR FOUND AT INDEX 5`.
- **CENTER-STAGE HERO:** Successor confirmed at index 5.
- **CAUSE:** Narration identifies index 5 as the valid successor.
- **EFFECT / MOTION:** Slot 5 pulses cyan.
- **WHAT MUST NOT APPEAR YET:** Swap does not occur until Anchor 32.
- **COMPREHENSION HOLD:** Frames 1826..1838 hold on successor lock.
- **CLEANUP / EXIT:** Ready to announce successor value.
- **PERSISTENT STATE:** `pivot` at idx 1, `successor` at idx 5.

---

### Anchor 30: `S07_SUCCESSOR_VAL`
- **Frame Range:** `[1838, 1892)` (54 frames, 1.80s) | Spoken: `[1838, 1880]`, Pause: 12f (400ms)
- **Spoken Narration Anchor:** `"The successor value is three."`
- **ANCHOR:** `S07_SUCCESSOR_VAL` (Trace: `SUCC-09`)
- **WHAT APPEARS NOW:** Value badge illuminates inside slot 5: `nums[5] = 3`. Card callout: `Successor Value = 3 (Minimal value in suffix > 1)`.
- **CENTER-STAGE HERO:** Successor value `3`.
- **CAUSE:** Narration confirms exact successor value.
- **EFFECT / MOTION:** Scale pulse on value `3` in slot 5.
- **WHAT MUST NOT APPEAR YET:** Swap preparation waits for Anchor 31.
- **COMPREHENSION HOLD:** Frames 1880..1892 hold.
- **CLEANUP / EXIT:** Prepare swap arc.
- **PERSISTENT STATE:** `pivot=1` (slot 1), `successor=3` (slot 5).

---

### Anchor 31: `S07_SWAP_PREP`
- **Frame Range:** `[1892, 1955)` (63 frames, 2.10s) | Spoken: `[1892, 1939]`, Pause: 16f (533ms)
- **Spoken Narration Anchor:** `"Now swap the pivot and successor."`
- **ANCHOR:** `S07_SWAP_PREP` (Trace: `SWAP-01`)
- **WHAT APPEARS NOW:** Overhead dashed swap arc appears connecting slot 1 and slot 5. Label above arc: `SWAP(nums[1], nums[5])`.
- **CENTER-STAGE HERO:** Swap intent overhead trajectory.
- **CAUSE:** Narration announces the swap action.
- **EFFECT / MOTION:** Dashed arc draws from slot 1 to slot 5 (`strokeDashoffset` reveal over 16 frames).
- **WHAT MUST NOT APPEAR YET:** Values do not move until Anchor 32.
- **COMPREHENSION HOLD:** Frames 1939..1955 hold on swap arc.
- **CLEANUP / EXIT:** Values launch into flight at F1955.
- **PERSISTENT STATE:** Swap prepared between idx 1 and idx 5.

---

### Anchor 32: `S07_SWAP`
- **Frame Range:** `[1955, 2000)` (45 frames, 1.50s) | Spoken: `[1955, 1988]`, Pause: 12f (400ms)
- **Spoken Narration Anchor:** `"One swaps with three."`
- **ANCHOR:** `S07_SWAP` (Trace: `SWAP-02`)
- **WHAT APPEARS NOW:** Parabolic value flight: Value `1` lifts from slot 1 and flies along upper arc to slot 5; Value `3` lifts from slot 5 and flies along lower reciprocal arc to slot 1. Slots remain 100% stationary!
- **CENTER-STAGE HERO:** Real-time parabolic swap: `1 <-> 3`.
- **CAUSE:** Narration describes the physical swap.
- **EFFECT / MOTION:** Smooth ease-in-out flight over 30 frames (F1955..F1985). Scale pulses to `1.15` at apex, landing cleanly in opposing slots at F1985.
- **WHAT MUST NOT APPEAR YET:** Post-swap array readback waits for Anchor 33.
- **COMPREHENSION HOLD:** Frames 1988..2000 hold on landed values.
- **CLEANUP / EXIT:** Remove swap arc.
- **PERSISTENT STATE:** Array is now `[2, 3, 5, 4, 4, 1, 0]`.

---

### Anchor 33: `S07_AFTER_SWAP`
- **Frame Range:** `[2000, 2217)` (217 frames, 7.23s) | Spoken: `[2000, 2197]`, Pause: 20f (667ms)
- **Spoken Narration Anchor:** `"The array becomes... two... three... five... four... four... one... zero."`
- **ANCHOR:** `S07_AFTER_SWAP` (Trace: `SWAP-03`)
- **WHAT APPEARS NOW:** Array displays post-swap values: `[2, 3, 5, 4, 4, 1, 0]`. Each slot highlights in sequence as spoken: 2, 3, 5, 4, 4, 1, 0.
- **CENTER-STAGE HERO:** Verified post-swap array state: `[2, 3, 5, 4, 4, 1, 0]`.
- **CAUSE:** Narration reads out the complete array after swap.
- **EFFECT / MOTION:** Sequential readback pulse across all 7 slots.
- **WHAT MUST NOT APPEAR YET:** Suffix analysis waits for Anchor 34.
- **COMPREHENSION HOLD:** Frames 2197..2217 hold on settled array.
- **CLEANUP / EXIT:** Clear readback highlight.
- **PERSISTENT STATE:** `nums = [2, 3, 5, 4, 4, 1, 0]`.

---

### Anchor 34: `S07_LARGER`
- **Frame Range:** `[2217, 2272)` (55 frames, 1.83s) | Spoken: `[2217, 2260]`, Pause: 12f (400ms)
- **Spoken Narration Anchor:** `"Now the permutation is larger..."`
- **ANCHOR:** `S07_LARGER` (Trace: `REVERSE-01`)
- **WHAT APPEARS NOW:** Card updates: `Status: Permutation is now LARGER (Prefix 2,3 > 2,1)`.
- **CENTER-STAGE HERO:** Verification that number has increased.
- **CAUSE:** Narration notes milestone: we have successfully formed a larger number.
- **EFFECT / MOTION:** Green badge `[ LARGER PERMUTATION ]` illuminates.
- **WHAT MUST NOT APPEAR YET:** Suffix reversal goal waits for Anchor 35/36.
- **COMPREHENSION HOLD:** Frames 2260..2272 hold.
- **CLEANUP / EXIT:** Prepare suffix caveat.
- **PERSISTENT STATE:** Permutation is larger.

---

### Anchor 35: `S07_SUFFIX_MAX`
- **Frame Range:** `[2272, 2351)` (79 frames, 2.63s) | Spoken: `[2272, 2341]`, Pause: 10f (333ms)
- **Spoken Narration Anchor:** `"but the suffix is still as large as possible."`
- **ANCHOR:** `S07_SUFFIX_MAX` (Trace: `REVERSE-02`)
- **WHAT APPEARS NOW:** Amber warning callout on suffix `[2..6]` (`[5, 4, 4, 1, 0]`): `Warning: Suffix is still DESCENDING = Largest Possible arrangement!`.
- **CENTER-STAGE HERO:** The suffix dilemma: descending suffix is still maximal.
- **CAUSE:** Narration identifies why this is not yet the *immediate* next permutation.
- **EFFECT / MOTION:** Amber hatching over suffix slots 2..6.
- **WHAT MUST NOT APPEAR YET:** Reversal action waits for Anchor 37.
- **COMPREHENSION HOLD:** Frames 2341..2351 hold.
- **CLEANUP / EXIT:** Transition to suffix minimization goal.
- **PERSISTENT STATE:** Suffix maximal status recognized.

---

### Anchor 36: `S07_MIN_SUFFIX`
- **Frame Range:** `[2351, 2430)` (79 frames, 2.63s) | Spoken: `[2351, 2420]`, Pause: 10f (333ms)
- **Spoken Narration Anchor:** `"We need the smallest possible suffix."`
- **ANCHOR:** `S07_MIN_SUFFIX` (Trace: `REVERSE-03`)
- **WHAT APPEARS NOW:** Card updates: `Objective: Minimize Suffix (Make it Ascending)`.
- **CENTER-STAGE HERO:** Need for minimal suffix.
- **CAUSE:** Narration establishes the requirement for *immediate* next permutation.
- **EFFECT / MOTION:** Card displays contrast: `Current: Descending (Max)` ➔ `Target: Ascending (Min)`.
- **WHAT MUST NOT APPEAR YET:** Reverse pointers do not appear until Anchor 37.
- **COMPREHENSION HOLD:** Frames 2420..2430 hold.
- **CLEANUP / EXIT:** Prepare two-pointer reversal.
- **PERSISTENT STATE:** Objective established.

---

### Anchor 37: `S07_RANGE`
- **Frame Range:** `[2430, 2618)` (188 frames, 6.27s) | Spoken: `[2430, 2611]`, Pause: 7f (233ms)
- **Spoken Narration Anchor:** `"So reverse everything after the pivot. Our reverse range is index two to index six."`
- **ANCHOR:** `S07_RANGE` (Trace: `REVERSE-04`)
- **WHAT APPEARS NOW:** Two reversal pointers appear: `left` at index 2 (cyan), `right` at index 6 (gold). Card displays: `REVERSE RANGE: [2 .. 6] (Two-Pointer In-Place O(K) Reversal)`.
- **CENTER-STAGE HERO:** Reversal range `[2 .. 6]`.
- **CAUSE:** Narration defines the exact reversal bounds.
- **EFFECT / MOTION:** Pointers `left` and `right` slide into position at slots 2 and 6. Range bracket highlights slots 2..6.
- **WHAT MUST NOT APPEAR YET:** First reverse swap waits for Anchor 38.
- **COMPREHENSION HOLD:** Frames 2611..2618 hold on initialized pointers.
- **CLEANUP / EXIT:** Ready for Swap 1.
- **PERSISTENT STATE:** `left=2`, `right=6`.

---

### Anchor 38: `S07_RSWAP1`
- **Frame Range:** `[2618, 2677)` (59 frames, 1.97s) | Spoken: `[2618, 2662]`, Pause: 15f (500ms)
- **Spoken Narration Anchor:** `"Swap five and zero."`
- **ANCHOR:** `S07_RSWAP1` (Trace: `REVERSE-05`)
- **WHAT APPEARS NOW:** Overhead reverse swap arc connects slot 2 and slot 6. Values `5` and `0` take parabolic flight and swap positions!
- **CENTER-STAGE HERO:** Reversal Swap 1: `nums[2] (5) <-> nums[6] (0)`.
- **CAUSE:** Narration executes the first two-pointer swap.
- **EFFECT / MOTION:** Values `5` and `0` fly across 28 frames, landing cleanly in opposite slots.
- **WHAT MUST NOT APPEAR YET:** Array readback waits for Anchor 39.
- **COMPREHENSION HOLD:** Frames 2662..2677 hold on landed values.
- **CLEANUP / EXIT:** Settle values in slots.
- **PERSISTENT STATE:** `nums = [2, 3, 0, 4, 4, 1, 5]`.

---

### Anchor 39: `S07_STATE1`
- **Frame Range:** `[2677, 2850)` (173 frames, 5.77s) | Spoken: `[2677, 2848]`, Pause: 2f (67ms)
- **Spoken Narration Anchor:** `"The array becomes... two... three... zero... four... four... one... five."`
- **ANCHOR:** `S07_STATE1` (Trace: `REVERSE-06`)
- **WHAT APPEARS NOW:** Array displays intermediate state: `[2, 3, 0, 4, 4, 1, 5]`. Slots read out in sequence.
- **CENTER-STAGE HERO:** Intermediate state after first reverse swap: `[2, 3, 0, 4, 4, 1, 5]`.
- **CAUSE:** Narration reads out array state after Swap 1.
- **EFFECT / MOTION:** Sequential readback pulse across slots.
- **WHAT MUST NOT APPEAR YET:** Inward pointer movement waits for Anchor 40.
- **COMPREHENSION HOLD:** Seamless step to inward movement.
- **CLEANUP / EXIT:** Prepare pointer shift.
- **PERSISTENT STATE:** `left=2` (now holds 0), `right=6` (now holds 5).

---

### Anchor 40: `S07_INWARD1`
- **Frame Range:** `[2850, 2885)` (35 frames, 1.17s) | Spoken: `[2850, 2876]`, Pause: 9f (300ms)
- **Spoken Narration Anchor:** `"Move inward."`
- **ANCHOR:** `S07_INWARD1` (Trace: `REVERSE-07`)
- **WHAT APPEARS NOW:** Pointer `left` moves from index 2 to index 3 (`left++`). Pointer `right` moves from index 6 to index 5 (`right--`).
- **CENTER-STAGE HERO:** Two-pointer inward step: `left: 2 -> 3`, `right: 6 -> 5`.
- **CAUSE:** Narration commands moving inward.
- **EFFECT / MOTION:** 12-frame simultaneous glide of `left` rightward and `right` leftward.
- **WHAT MUST NOT APPEAR YET:** Second swap waits for Anchor 41.
- **COMPREHENSION HOLD:** Frames 2876..2885 settle at indices 3 and 5.
- **CLEANUP / EXIT:** Ready for Swap 2.
- **PERSISTENT STATE:** `left=3` (val 4), `right=5` (val 1).

---

### Anchor 41: `S07_RSWAP2`
- **Frame Range:** `[2885, 2936)` (51 frames, 1.70s) | Spoken: `[2885, 2918]`, Pause: 18f (600ms)
- **Spoken Narration Anchor:** `"Swap four and one."`
- **ANCHOR:** `S07_RSWAP2` (Trace: `REVERSE-08`)
- **WHAT APPEARS NOW:** Overhead reverse swap arc connects slot 3 and slot 5. Values `4` and `1` take parabolic flight and swap positions!
- **CENTER-STAGE HERO:** Reversal Swap 2: `nums[3] (4) <-> nums[5] (1)`.
- **CAUSE:** Narration executes the second reverse swap.
- **EFFECT / MOTION:** Parabolic swap flight over 26 frames, landing cleanly in slots 3 and 5.
- **WHAT MUST NOT APPEAR YET:** Final state readback waits for Anchor 42.
- **COMPREHENSION HOLD:** Frames 2918..2936 hold on landed values.
- **CLEANUP / EXIT:** Settle values in slots.
- **PERSISTENT STATE:** `nums = [2, 3, 0, 1, 4, 4, 5]`.

---

### Anchor 42: `S07_STATE2`
- **Frame Range:** `[2936, 3114)` (178 frames, 5.93s) | Spoken: `[2936, 3105]`, Pause: 9f (300ms)
- **Spoken Narration Anchor:** `"The array becomes... two... three... zero... one... four... four... five."`
- **ANCHOR:** `S07_STATE2` (Trace: `REVERSE-09`)
- **WHAT APPEARS NOW:** Array displays verified result: `[2, 3, 0, 1, 4, 4, 5]`. Sequential spoken readback across slots.
- **CENTER-STAGE HERO:** Suffix reversal completed: `[2, 3, 0, 1, 4, 4, 5]`.
- **CAUSE:** Narration reads out array state after Swap 2.
- **EFFECT / MOTION:** Sequential readback pulse across all 7 slots.
- **WHAT MUST NOT APPEAR YET:** Pointer meeting waits for Anchor 43.
- **COMPREHENSION HOLD:** Frames 3105..3114 hold.
- **CLEANUP / EXIT:** Transition to pointer collision check.
- **PERSISTENT STATE:** `nums = [2, 3, 0, 1, 4, 4, 5]`.

---

### Anchor 43: `S07_MEET`
- **Frame Range:** `[3114, 3170)` (56 frames, 1.87s) | Spoken: `[3114, 3160]`, Pause: 10f (333ms)
- **Spoken Narration Anchor:** `"Now both reverse pointers meet."`
- **ANCHOR:** `S07_MEET` (Trace: `REVERSE-10`)
- **WHAT APPEARS NOW:** Pointer `left` advances to index 4 (`left=4`). Pointer `right` decrements to index 4 (`right=4`). Both pointers converge under slot 4! Single merged pointer badge: `left = right = 4`.
- **CENTER-STAGE HERO:** Pointer convergence: `left == right == 4`.
- **CAUSE:** Narration notes pointer meeting.
- **EFFECT / MOTION:** Both pointers glide into slot 4 and merge into a single green indicator.
- **WHAT MUST NOT APPEAR YET:** Termination callout waits for Anchor 44.
- **COMPREHENSION HOLD:** Frames 3160..3170 hold on merged pointer.
- **CLEANUP / EXIT:** Prepare loop termination.
- **PERSISTENT STATE:** `left == right == 4`.

---

### Anchor 44: `S07_STOP`
- **Frame Range:** `[3170, 3206)` (36 frames, 1.20s) | Spoken: `[3170, 3189]`, Pause: 17f (567ms)
- **Spoken Narration Anchor:** `"We stop."`
- **ANCHOR:** `S07_STOP` (Trace: `REVERSE-11`)
- **WHAT APPEARS NOW:** Termination badge stamps in card: `✓ TERMINATE: left >= right (No self-swap needed!)`.
- **CENTER-STAGE HERO:** Natural algorithm termination.
- **CAUSE:** Narration confirms reverse loop terminates.
- **EFFECT / MOTION:** Green badge stamps on. Reverse pointers gently fade away, leaving clean array.
- **WHAT MUST NOT APPEAR YET:** Final answer celebration waits for Anchor 45.
- **COMPREHENSION HOLD:** Frames 3189..3206 hold.
- **CLEANUP / EXIT:** Prepare grand final answer presentation.
- **PERSISTENT STATE:** Algorithm complete.

---

### Anchor 45: `S07_FINAL`
- **Frame Range:** `[3206, 3446)` (240 frames, 8.00s) | Spoken: `[3206, 3414]`, Pause: 32f (1067ms)
- **Spoken Narration Anchor:** `"Our final answer is... two... three... zero... one... four... four... five."`
- **ANCHOR:** `S07_FINAL` (Trace: `FINAL-01`)
- **WHAT APPEARS NOW:** Dynamic Eyebrow updates: `VERIFIED ANSWER · NEXT PERMUTATION [2, 3, 0, 1, 4, 4, 5]`. All 7 slots glow in solid green (`theme.good`). Card updates: `FINAL PERMUTATION: [2, 3, 0, 1, 4, 4, 5]`.
- **CENTER-STAGE HERO:** Complete final answer array `[2, 3, 0, 1, 4, 4, 5]`.
- **CAUSE:** Narration announces the verified final answer.
- **EFFECT / MOTION:** Radiant green glow across all slots. Values pulse in sequence as spoken.
- **WHAT MUST NOT APPEAR YET:** Final conclusion banner waits for Anchor 46.
- **COMPREHENSION HOLD:** Frames 3414..3446 hold over a full 1-second pause.
- **CLEANUP / EXIT:** Prepare final scene conclusion.
- **PERSISTENT STATE:** Final answer verified and locked.

---

### Anchor 46: `S07_IMMEDIATE`
- **Frame Range:** `[3446, 3520)` (74 frames, 2.47s) | Spoken: `[3446, 3520]`, Pause: 0f (0ms)
- **Spoken Narration Anchor:** `"That is the immediate next permutation."`
- **ANCHOR:** `S07_IMMEDIATE` (Trace: `FINAL-02`)
- **WHAT APPEARS NOW:** Gold conclusion banner stamps on bottom of card: `★ GUARANTEED IMMEDIATE NEXT PERMUTATION · TIME: O(N) · SPACE: O(1) IN-PLACE`. Next Scene Preview badge: `NEXT ➔ SCENE 08: OPTIMAL IMPLEMENTATION & CODE WALKTHROUGH`.
- **CENTER-STAGE HERO:** Algorithmic triumph and proof completion.
- **CAUSE:** Narration concludes Scene 07.
- **EFFECT / MOTION:** Gold trophy badge animates in (`scale: 0.9 -> 1.02 -> 1.0`).
- **WHAT MUST NOT APPEAR YET:** No code; purely conceptual trace conclusion.
- **COMPREHENSION HOLD:** Holds through frame 3520.
- **CLEANUP / EXIT:** Final frame holds for seamless transition to Scene 08.
- **PERSISTENT STATE:** Master optimal trace complete.
