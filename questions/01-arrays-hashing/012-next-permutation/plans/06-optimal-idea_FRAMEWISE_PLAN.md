# Scene 06 · Framewise Scene Plan: Method 2 · Optimal Idea Conceptual Derivation
**Question:** 012 · Next Permutation (LeetCode 31)  
**Audio File:** `remotion-project/public/audio/012/06-optimal-idea.mp3`  
**Duration:** 108,400 ms | **Total Frames:** 3,252 @ 30 FPS  
**Sync Anchor Source:** `sync/06-optimal-idea.anchors.json`  
**Mandatory Schema:** 9-Section Strict Framewise Specification per Anchor  

---

## Spatial Canvas Architecture & Zero-Collision Layout (`s03_f1250.png` Standard)

```text
+-----------------------------------------------------------------------------+
| Y: 36..80   Top Header Bar (Compact & Authoritative Strip)                  |
|             Left: [ 01 · ARRAYS & HASHING · LC 31 ] [ MEDIUM ]              |
|             Center: "Next Permutation" (Caveat cursive, 28px)               |
|             Right: [ APPROACH 2 · OPTIMAL IDEA ] (theme.pivot #ffd166)      |
+-----------------------------------------------------------------------------+
| Y: 96..132  Section Subtitle / Dynamic Pedagogical Eyebrow                  |
|             "FIRST PRINCIPLES · 3-STEP INVARIANT DERIVATION"                |
+-----------------------------------------------------------------------------+
| Y: 150..770 MAIN CENTER-STAGE HERO ZONE (620px vertical budget)             |
|                                                                             |
|  [PHASE 1: F0..F1056] STEP 1: FINDING THE PIVOT (Right-to-Left Invariant)   |
|   - Conceptual Array / Suffix Track: Center Y: 220..310                     |
|   - Hero Chalk Cards (W: 860..1300, H: 260..380): Translucent Chalk Washes |
|     * Anchor 01..03: Why scan right-to-left? Finding first nums[i] < nums[i+1] |
|     * Anchor 04..06: Suffix is strictly non-increasing (already maximal!)   |
|     * Anchor 07: Conceptual pivot definition (first place that CAN grow)    |
|                                                                             |
|  [PHASE 2: F1056..F2086] STEP 2: FINDING THE SUCCESSOR & SWAP               |
|   - Pivot Minimization Card: "Smallest Possible Increase (Minimize Δ)"      |
|   - Successor Search: Right-to-left scan for first nums[j] > nums[i]        |
|   - Invariant Proof: Why first greater from right is minimal greater        |
|   - Conceptual Two-Value Swap (Values move; slots stay fixed)               |
|   - Post-Swap Invariant: Suffix remains non-increasing!                     |
|                                                                             |
|  [PHASE 3: F2086..F2741] STEP 3: MINIMIZING THE SUFFIX VIA REVERSE          |
|   - Contrast: "Larger Permutation" vs "Very Next Permutation"               |
|   - Objective: Everything after pivot must be as small as possible          |
|   - Reversal Invariant: Non-increasing reversed = Non-decreasing (Ascending)|
|   - Complexity Triumph: Reverse takes O(K) without O(K log K) sorting!      |
|                                                                             |
|  [PHASE 4: F2741..F3252] COMPLETE 3-STEP SYNTHESIS & EXECUTION HANDOFF      |
|   - 3-Step Master Summary Card: [ PIVOT i ] ➔ [ SUCCESSOR j ] ➔ [ REVERSE ] |
|   - Return of Untouched Master Array [2, 1, 5, 4, 4, 3, 0] for Scene 07     |
+-----------------------------------------------------------------------------+
| Y: 790..910 Dynamic Bottom Pedagogical Takeaway / Invariant Strip           |
+-----------------------------------------------------------------------------+
| Y: 980      Captions Container (Karaoke Word-Level Timing)                  |
+-----------------------------------------------------------------------------+
```

---

## Anchor-by-Anchor Framewise Specification

### Anchor 01: `S06_START_RIGHT`
- **Frame Range:** `[0, 58)` (58 frames, 1.93s) | Spoken: `[0, 48]`, Pause: 10f
- **Spoken Narration Anchor:** `"Start from the right side."`
- **ANCHOR:** `S06_START_RIGHT` (Trace: `IDEA-01`)
- **WHAT APPEARS NOW:** Oxford chalkboard background fades in seamlessly from Scene 05. Top header displays `[ 01 · ARRAYS & HASHING · LC 31 ]`, `[ MEDIUM ]`, cursive `Next Permutation`, and golden badge `[ APPROACH 2 · OPTIMAL IDEA ]`. An array representation appears centered at Y: 210 with a prominent right-to-left exploration pointer arrow labeled `◀ SCAN FROM RIGHT`.
- **CENTER-STAGE HERO:** Scan origin at the right edge of the array.
- **CAUSE:** Narration states where the optimal algorithmic reasoning must begin.
- **EFFECT / MOTION:** Hero card fades in (`opacity: 0 -> 1`, `translateY: 10 -> 0` across 14 frames). The right-side scan pointer arrow slides into position at the rightmost index.
- **WHAT MUST NOT APPEAR YET:** No concrete pivot index $i$, no successor $j$, no swap.
- **COMPREHENSION HOLD:** Frames 48..58 hold steady while audio pauses 330ms.
- **CLEANUP / EXIT:** Arrow holds at right edge ready for condition reveal.
- **PERSISTENT STATE:** Array track and scan orientation established.

---

### Anchor 02: `S06_FIND_I`
- **Frame Range:** `[58, 281)` (223 frames, 7.43s) | Spoken: `[58, 271]`, Pause: 10f
- **Spoken Narration Anchor:** `"We look for the first index i, where nums at i is smaller than nums at i plus 1."`
- **ANCHOR:** `S06_FIND_I` (Trace: `IDEA-02`)
- **WHAT APPEARS NOW:** A conceptual two-slot comparison window highlights adjacent slots labeled `i` and `i+1`. Below the slots, a prominent chalk formula card appears: `CONDITION: nums[i] < nums[i+1]`.
- **CENTER-STAGE HERO:** The strict inequality comparison `nums[i] < nums[i+1]`.
- **CAUSE:** Narration defines the exact mathematical condition for identifying the pivot.
- **EFFECT / MOTION:** The comparison bracket and condition box animate on at F58. As the words `"smaller than"` are spoken (F170..F220), the `<` symbol pulses in bright cyan with a golden highlight.
- **WHAT MUST NOT APPEAR YET:** No numerical indices from master testcase (e.g. `i=1` is forbidden); purely conceptual.
- **COMPREHENSION HOLD:** Frames 271..281 hold on the illuminated inequality.
- **CLEANUP / EXIT:** Condition box transitions to center-left to make room for the question card.
- **PERSISTENT STATE:** Conceptual `nums[i] < nums[i+1]` condition persists.

---

### Anchor 03: `S06_WHY`
- **Frame Range:** `[281, 308)` (27 frames, 0.90s) | Spoken: `[281, 298]`, Pause: 10f
- **Spoken Narration Anchor:** `"Why?"`
- **ANCHOR:** `S06_WHY` (Trace: `IDEA-03`)
- **WHAT APPEARS NOW:** A handwritten cursive chalk callout appears in bright amber/gold (`theme.accent`): `Why this condition?` with a hand-drawn rough circle.
- **CENTER-STAGE HERO:** The pedagogical question `Why this condition?`.
- **CAUSE:** Narration pauses the algorithm mechanics to establish first-principles intuition.
- **EFFECT / MOTION:** Quick spring pop on `"Why?"` (`scale: 0.9 -> 1.05 -> 1.0` over 12 frames).
- **WHAT MUST NOT APPEAR YET:** Suffix explanation does not appear until spoken in Anchor 04.
- **COMPREHENSION HOLD:** Frames 298..308 hold on the question.
- **CLEANUP / EXIT:** Callout smoothly moves to the card header as the answer card unfolds.
- **PERSISTENT STATE:** Active inquiry established.

---

### Anchor 04: `S06_SUFFIX`
- **Frame Range:** `[308, 499)` (191 frames, 6.37s) | Spoken: `[308, 487]`, Pause: 12f
- **Spoken Narration Anchor:** `"Because everything to the right of that position forms a non-increasing suffix."`
- **ANCHOR:** `S06_SUFFIX` (Trace: `IDEA-04`)
- **WHAT APPEARS NOW:** An emerald-tinted range band spans over slots `i+1` through the right edge. It is labeled `NON-INCREASING SUFFIX` with mathematical sub-caption: `nums[i+1] >= nums[i+2] >= ... >= nums[n-1]`.
- **CENTER-STAGE HERO:** The non-increasing suffix structure.
- **CAUSE:** Narration explains that since $i$ was the *first* place from the right where `nums[i] < nums[i+1]`, every pair to its right satisfied `nums[k] >= nums[k+1]`.
- **EFFECT / MOTION:** The range band draws from right-to-left across frames 308..360, highlighting all elements strictly to the right of $i$.
- **WHAT MUST NOT APPEAR YET:** Maximality deduction or swap.
- **COMPREHENSION HOLD:** Frames 487..499 hold on the highlighted suffix range.
- **CLEANUP / EXIT:** Suffix range band remains active for maximality proof.
- **PERSISTENT STATE:** Suffix range band `[i+1 .. n-1]` locked.

---

### Anchor 05: `S06_SUFFIX_MAX`
- **Frame Range:** `[499, 686)` (187 frames, 6.23s) | Spoken: `[499, 686]`, Pause: 0f
- **Spoken Narration Anchor:** `"That suffix is already the largest possible arrangement of those suffix values."`
- **ANCHOR:** `S06_SUFFIX_MAX` (Trace: `IDEA-05`)
- **WHAT APPEARS NOW:** Inside the suffix card, an authoritative mathematical callout badge illuminates: `MAXIMAL ARRANGEMENT (DESCENDING ORDER)`. A descending stair-step icon illustrates that digits in descending order form the highest numerical value (e.g. `5, 4, 3, 0`).
- **CENTER-STAGE HERO:** Maximality of descending order sequences.
- **CAUSE:** In positional arithmetic, placing larger digits at higher place values yields the maximum permutation.
- **EFFECT / MOTION:** The callout badge pulses with a warm golden wash (`rgba(255, 209, 102, 0.2)`). The descending stair-step graphic highlights in sync with words `"largest possible arrangement"`.
- **WHAT MUST NOT APPEAR YET:** Rejection of suffix-only changes.
- **COMPREHENSION HOLD:** Seamless pacing directly into consequence.
- **CLEANUP / EXIT:** Maximality badge settles.
- **PERSISTENT STATE:** Suffix maximality proven.

---

### Anchor 06: `S06_CANT_SUFFIX`
- **Frame Range:** `[686, 905)` (219 frames, 7.30s) | Spoken: `[686, 875]`, Pause: 30f
- **Spoken Narration Anchor:** `"So changing only that suffix cannot give us a larger permutation."`
- **ANCHOR:** `S06_CANT_SUFFIX` (Trace: `IDEA-06`)
- **WHAT APPEARS NOW:** A rejected hypothesis box appears over the suffix: `REARRANGE SUFFIX ONLY? ➔ IMPOSSIBLE`. A red rough chalk rejection cross (`✗ ALREADY AT MAXIMUM`) stamps over the box.
- **CENTER-STAGE HERO:** Rejection of suffix-only permutations.
- **CAUSE:** You cannot make an already maximal sequence larger by only permuting its own elements.
- **EFFECT / MOTION:** Red rejection cross stamps down with dynamic impact (`scale: 1.3 -> 1.0` over 10 frames). The label `NO LARGER PERMUTATION POSSIBLE INTERNALLY` flashes in `theme.accent`.
- **WHAT MUST NOT APPEAR YET:** Pivot identity before spoken in Anchor 07.
- **COMPREHENSION HOLD:** Frames 875..905 hold for 1.00s pause as the mathematical dead-end sinks in.
- **CLEANUP / EXIT:** Rejection stamp fades out, clearing center stage for the breakthrough solution.
- **PERSISTENT STATE:** Suffix dead-end established.

---

### Anchor 07: `S06_PIVOT_CONCEPT`
- **Frame Range:** `[905, 1056)` (151 frames, 5.03s) | Spoken: `[905, 1036]`, Pause: 20f
- **Spoken Narration Anchor:** `"The first place where we can increase the permutation is the pivot."`
- **ANCHOR:** `S06_PIVOT_CONCEPT` (Trace: `IDEA-07`)
- **WHAT APPEARS NOW:** Slot $i$ illuminates with a brilliant golden border (`theme.pivot` `#ffd166`). Above slot $i$, an authoritative pointer badge drops down: `★ PIVOT (INDEX i)`.
- **CENTER-STAGE HERO:** The Pivot position (index $i$).
- **CAUSE:** Because the suffix is maximal, the very first digit to the left that CAN be replaced by a larger value is at index $i$.
- **EFFECT / MOTION:** Golden pointer drops onto slot $i$ with an elastic bounce (`translateY: -30 -> 0`, frames 905..935). Slot background turns rich golden wash.
- **WHAT MUST NOT APPEAR YET:** No numerical value of pivot from master testcase.
- **COMPREHENSION HOLD:** Frames 1036..1056 hold on the illuminated pivot.
- **CLEANUP / EXIT:** Pivot marker locks into persistent state.
- **PERSISTENT STATE:** Slot $i$ recognized as the Pivot.

---

### Anchor 08: `S06_SMALLEST_INCREASE`
- **Frame Range:** `[1056, 1240)` (184 frames, 6.13s) | Spoken: `[1056, 1213]`, Pause: 27f
- **Spoken Narration Anchor:** `"Now we have to increase that pivot, but only by the smallest possible amount."`
- **ANCHOR:** `S06_SMALLEST_INCREASE` (Trace: `IDEA-08`)
- **WHAT APPEARS NOW:** Below the pivot, a new strategy card unfolds: `GOAL: MINIMIZE THE INCREASE (Δ)`. It highlights: `REPLACE PIVOT WITH THE SMALLEST VALUE STRICTLY GREATER THAN PIVOT`.
- **CENTER-STAGE HERO:** Minimization of pivot replacement delta ($\Delta$).
- **CAUSE:** To get the *very next* lexicographical permutation, we must not jump too far ahead.
- **EFFECT / MOTION:** Card slides in with smooth ease. The text `SMALLEST POSSIBLE AMOUNT` is underlined with a hand-drawn cyan `RoughLine`.
- **WHAT MUST NOT APPEAR YET:** Scanning mechanism or successor $j$.
- **COMPREHENSION HOLD:** Frames 1213..1240 hold for 900ms pause.
- **CLEANUP / EXIT:** Card settles into Phase 2 layout.
- **PERSISTENT STATE:** Minimization principle active.

---

### Anchor 09: `S06_SEARCH_RIGHT_AGAIN`
- **Frame Range:** `[1240, 1379)` (139 frames, 4.63s) | Spoken: `[1240, 1361]`, Pause: 18f
- **Spoken Narration Anchor:** `"So we search from the right again for the first value,"`
- **ANCHOR:** `S06_SEARCH_RIGHT_AGAIN` (Trace: `IDEA-09`)
- **WHAT APPEARS NOW:** A second exploration pointer labeled `j (SUCCESSOR SEARCH)` appears at the rightmost slot and points leftward across the suffix.
- **CENTER-STAGE HERO:** Right-to-left scan for the successor element $j$.
- **CAUSE:** Narration specifies the exact algorithmic scan direction for locating the successor.
- **EFFECT / MOTION:** The $j$ pointer animates into the right edge, accompanied by a dynamic scanning radar trail moving leftward.
- **WHAT MUST NOT APPEAR YET:** Successor condition or exact index.
- **COMPREHENSION HOLD:** Frames 1361..1379 hold during 600ms pause.
- **CLEANUP / EXIT:** Pointer $j$ hovers ready for the condition check.
- **PERSISTENT STATE:** Right-to-left successor scan engaged.

---

### Anchor 10: `S06_STRICT_GREATER`
- **Frame Range:** `[1379, 1491)` (112 frames, 3.73s) | Spoken: `[1379, 1472]`, Pause: 19f
- **Spoken Narration Anchor:** `"that is strictly greater than the pivot."`
- **ANCHOR:** `S06_STRICT_GREATER` (Trace: `IDEA-10`)
- **WHAT APPEARS NOW:** A chalk comparison formula card illuminates: `SUCCESSOR CONDITION: nums[j] > nums[i]`. The strict `>` symbol is highlighted with a double-underline rough stroke.
- **CENTER-STAGE HERO:** Strict inequality `nums[j] > nums[i]`.
- **CAUSE:** A value equal to the pivot would not produce a strictly larger permutation; it must be strictly greater.
- **EFFECT / MOTION:** As the words `"strictly greater"` are spoken (F1410..F1460), the condition pulses with high-contrast amber glow.
- **WHAT MUST NOT APPEAR YET:** The proof of why this guarantees minimality.
- **COMPREHENSION HOLD:** Frames 1472..1491 hold on the strict condition.
- **CLEANUP / EXIT:** Merges with Anchor 11 proof card.
- **PERSISTENT STATE:** Condition `nums[j] > nums[i]` established.

---

### Anchor 11: `S06_RIGHT_FIRST_SMALLEST`
- **Frame Range:** `[1491, 1785)` (294 frames, 9.80s) | Spoken: `[1491, 1762]`, Pause: 23f
- **Spoken Narration Anchor:** `"Because the suffix is non-increasing, the first greater value from the right is the smallest value that can increase the pivot."`
- **ANCHOR:** `S06_RIGHT_FIRST_SMALLEST` (Trace: `IDEA-11`)
- **WHAT APPEARS NOW:** A master proof breakdown card unfolds across center stage (W: 1100, H: 280):
  `WHY FIRST FROM RIGHT IS THE SMALLEST VALID SUCCESSOR?`
  `1. Suffix is descending: rightmost elements are the smallest in the suffix.`
  `2. Scanning right-to-left encounters elements in ascending numerical order!`
  `3. The first element strictly > nums[i] is guaranteed to be the minimal viable successor!`
- **CENTER-STAGE HERO:** The mathematical proof connecting descending suffix to minimal successor.
- **CAUSE:** Algorithmic intuition: scanning a descending sequence from right-to-left is equivalent to scanning sorted elements from smallest to largest.
- **EFFECT / MOTION:** Three numbered proof points reveal sequentially in sync with narration (Point 1 at F1510, Point 2 at F1580, Point 3 at F1660).
- **WHAT MUST NOT APPEAR YET:** Physical swap action.
- **COMPREHENSION HOLD:** Frames 1762..1785 hold for 770ms pause to ensure complete comprehension.
- **CLEANUP / EXIT:** Proof card smoothly collapses into an invariant pill badge: `✓ MINIMAL SUCCESSOR LOCATED`.
- **PERSISTENT STATE:** Successor $j$ mathematically validated.

---

### Anchor 12: `S06_SWAP_CONCEPT`
- **Frame Range:** `[1785, 1859)` (74 frames, 2.47s) | Spoken: `[1785, 1845]`, Pause: 14f
- **Spoken Narration Anchor:** `"We swap those two values."`
- **ANCHOR:** `S06_SWAP_CONCEPT` (Trace: `IDEA-12`)
- **WHAT APPEARS NOW:** High-contrast curved swap arc links slot $i$ (Pivot) and slot $j$ (Successor). The values glide across the arc to exchange places (`Array V2 Law: Slots stay fixed, values move!`).
- **CENTER-STAGE HERO:** The deterministic swap of pivot and successor.
- **CAUSE:** Narration executes the swap operation.
- **EFFECT / MOTION:** Two values lift vertically (`translateY: -20px`), glide horizontally to swap positions, and drop back into their slots with a crisp chalk landing impact.
- **WHAT MUST NOT APPEAR YET:** No claims about final answer; suffix reversal is still pending.
- **COMPREHENSION HOLD:** Frames 1845..1859 hold on post-swap state.
- **CLEANUP / EXIT:** Swap arc fades out cleanly.
- **PERSISTENT STATE:** Slots $i$ and $j$ hold swapped values.

---

### Anchor 13: `S06_NOW_LARGER`
- **Frame Range:** `[1859, 1937)` (78 frames, 2.60s) | Spoken: `[1859, 1922]`, Pause: 15f
- **Spoken Narration Anchor:** `"Now the permutation is larger."`
- **ANCHOR:** `S06_NOW_LARGER` (Trace: `IDEA-13`)
- **WHAT APPEARS NOW:** A status banner appears at Y: 140: `STATUS: PERMUTATION IS STRICTLY LARGER ✓`. A comparison shows `NEW PREFIX > OLD PREFIX`.
- **CENTER-STAGE HERO:** Achievement of a strictly larger permutation.
- **CAUSE:** Replacing `nums[i]` with a strictly larger value `nums[j]` guarantees numerical increase.
- **EFFECT / MOTION:** Green checkmark badge animates on with scale pop. Prefix card glows with subtle emerald rim.
- **WHAT MUST NOT APPEAR YET:** Do not claim it is the *very next* permutation.
- **COMPREHENSION HOLD:** Frames 1922..1937 hold during 500ms pause.
- **CLEANUP / EXIT:** Prepares contrast with Anchor 15.
- **PERSISTENT STATE:** Strictly larger status confirmed.

---

### Anchor 14: `S06_SUFFIX_STILL_NONINC`
- **Frame Range:** `[1937, 2086)` (149 frames, 4.97s) | Spoken: `[1937, 2075]`, Pause: 11f
- **Spoken Narration Anchor:** `"And after this swap, the suffix is still non-increasing."`
- **ANCHOR:** `S06_SUFFIX_STILL_NONINC` (Trace: `IDEA-14`)
- **WHAT APPEARS NOW:** The suffix range band re-illuminates over slots `i+1` to end with an essential invariant badge: `CRITICAL INVARIANT: SUFFIX IS STILL NON-INCREASING!`.
- **CENTER-STAGE HERO:** Preservation of the non-increasing suffix invariant post-swap.
- **CAUSE:** Because $j$ was the *first* element from the right greater than $i$, swapping it preserves the descending order among all suffix elements.
- **EFFECT / MOTION:** Range band pulses with cyan chalk wash. Mathematical verification note appears: `Order preserved: a >= b >= c`.
- **WHAT MUST NOT APPEAR YET:** Suffix reversal action.
- **COMPREHENSION HOLD:** Frames 2075..2086 hold on the preserved invariant.
- **CLEANUP / EXIT:** Invariant card remains as the direct prerequisite for reversal.
- **PERSISTENT STATE:** Post-swap suffix order certified.

---

### Anchor 15: `S06_VERY_NEXT`
- **Frame Range:** `[2086, 2204)` (118 frames, 3.93s) | Spoken: `[2086, 2180]`, Pause: 24f
- **Spoken Narration Anchor:** `"But we still need the very next permutation."`
- **ANCHOR:** `S06_VERY_NEXT` (Trace: `IDEA-15`)
- **WHAT APPEARS NOW:** A high-contrast contrast card appears: `LARGER PERMUTATION ≠ VERY NEXT PERMUTATION`.
  `Current state: Larger, but suffix is still in its MAXIMAL configuration!`
- **CENTER-STAGE HERO:** Distinction between any larger permutation and the immediate next permutation.
- **CAUSE:** Even though the prefix increased, the suffix is currently maximal, making the overall number larger than necessary.
- **EFFECT / MOTION:** Amber warning icon pulses. Suffix range is highlighted as the target for optimization.
- **WHAT MUST NOT APPEAR YET:** Reversal action.
- **COMPREHENSION HOLD:** Frames 2180..2204 hold for 800ms pause.
- **CLEANUP / EXIT:** Transitions directly to suffix minimization goal.
- **PERSISTENT STATE:** Need for suffix minimization established.

---

### Anchor 16: `S06_SUFFIX_MIN`
- **Frame Range:** `[2204, 2341)` (137 frames, 4.57s) | Spoken: `[2204, 2341]`, Pause: 0f
- **Spoken Narration Anchor:** `"So everything after the pivot must become as small as possible."`
- **ANCHOR:** `S06_SUFFIX_MIN` (Trace: `IDEA-16`)
- **WHAT APPEARS NOW:** Suffix band changes title to: `OBJECTIVE: MINIMIZE SUFFIX VALUES (MAKE ASCENDING)`. An arrow points downward indicating minimization.
- **CENTER-STAGE HERO:** Goal to minimize the suffix.
- **CAUSE:** To make the entire permutation as small as possible while keeping the new prefix, the suffix must be in its absolute smallest arrangement (ascending order).
- **EFFECT / MOTION:** Golden boundary line locks the prefix at slot $i$. Suffix slots pulse in mint green (`theme.mint`).
- **WHAT MUST NOT APPEAR YET:** The method of minimization (reverse vs sort).
- **COMPREHENSION HOLD:** Seamless flow into Anchor 17 proof.
- **CLEANUP / EXIT:** Suffix highlighted for transformation.
- **PERSISTENT STATE:** Minimization goal locked.

---

### Anchor 17: `S06_REVERSE_PROOF`
- **Frame Range:** `[2341, 2591)` (250 frames, 8.33s) | Spoken: `[2341, 2573]`, Pause: 18f
- **Spoken Narration Anchor:** `"Because the suffix is non-increasing, reversing it gives us the smallest possible suffix."`
- **ANCHOR:** `S06_REVERSE_PROOF` (Trace: `IDEA-17`)
- **WHAT APPEARS NOW:** Elegant dual-state demonstration card:
  `TOP: Non-Increasing (Descending: 5 >= 4 >= 3 >= 0) ➔ LARGEST POSSIBLE`
  `REVERSE ARROW ⤿ ⤾`
  `BOTTOM: Non-Decreasing (Ascending: 0 <= 3 <= 4 <= 5) ➔ SMALLEST POSSIBLE!`
- **CENTER-STAGE HERO:** Mathematical duality: reversing a descending sequence produces an ascending sequence.
- **CAUSE:** Reversing a sorted sequence flips its order completely, turning maximal into minimal.
- **EFFECT / MOTION:** Visual flip animation: values reverse across their centerline, slot indicators highlight from green to cyan.
- **WHAT MUST NOT APPEAR YET:** Rejection of sorting before spoken in Anchor 18.
- **COMPREHENSION HOLD:** Frames 2573..2591 hold for 600ms pause.
- **CLEANUP / EXIT:** Proof settles.
- **PERSISTENT STATE:** Reversal proof established.

---

### Anchor 18: `S06_NO_SORT`
- **Frame Range:** `[2591, 2666)` (75 frames, 2.50s) | Spoken: `[2591, 2654]`, Pause: 12f
- **Spoken Narration Anchor:** `"So we do not need to sort it."`
- **ANCHOR:** `S06_NO_SORT` (Trace: `IDEA-18`)
- **WHAT APPEARS NOW:** A callout box displaying `SORT SUFFIX: O(K log K)` appears with a bold red chalk strikethrough: `✗ NO SORTING REQUIRED!`.
- **CENTER-STAGE HERO:** Elimination of unnecessary $O(K \log K)$ sorting.
- **CAUSE:** Sorting takes $O(K \log K)$ and is completely redundant because the suffix is already perfectly ordered in reverse.
- **EFFECT / MOTION:** Red chalk strikethrough strikes diagonally across `SORT` (`strokeWidth: 3`, seed 42) with crisp chalk sound visual cues.
- **WHAT MUST NOT APPEAR YET:** Do not reveal full 3-step synthesis card yet.
- **COMPREHENSION HOLD:** Frames 2654..2666 hold during 400ms pause.
- **CLEANUP / EXIT:** Strikeout remains visible for contrast.
- **PERSISTENT STATE:** Sorting eliminated.

---

### Anchor 19: `S06_REVERSE`
- **Frame Range:** `[2666, 2741)` (75 frames, 2.50s) | Spoken: `[2666, 2720]`, Pause: 21f
- **Spoken Narration Anchor:** `"We simply reverse it."`
- **ANCHOR:** `S06_REVERSE` (Trace: `IDEA-19`)
- **WHAT APPEARS NOW:** Hero operation banner: `JUST REVERSE IN-PLACE: O(K) TIME!`. Two pointers `left` and `right` swap inwards until meeting.
- **CENTER-STAGE HERO:** The $O(K)$ in-place reversal operation.
- **CAUSE:** Two-pointer reversal takes linear time and zero auxiliary memory.
- **EFFECT / MOTION:** Circular reversal motion arrows glow in bright cyan (`theme.cyan`). Pill badge: `O(K) TIME · O(1) SPACE`.
- **WHAT MUST NOT APPEAR YET:** Summary card before spoken in Anchor 20.
- **COMPREHENSION HOLD:** Frames 2720..2741 hold for 700ms pause.
- **CLEANUP / EXIT:** Prepares canvas for comprehensive 3-step summary card.
- **PERSISTENT STATE:** Reversal locked as Step 3.

---

### Anchor 20: `S06_REASON_SUMMARY`
- **Frame Range:** `[2741, 3128)` (387 frames, 12.90s) | Spoken: `[2741, 3128]`, Pause: 0f
- **Spoken Narration Anchor:** `"So the optimal reasoning is, find the rightmost place that can increase, make the smallest possible increase there, then minimize everything after it."`
- **ANCHOR:** `S06_REASON_SUMMARY` (Trace: `IDEA-20`)
- **WHAT APPEARS NOW:** A master 3-step synthesis card spans center stage (W: 1320, H: 440) inside an authentic translucent chalkboard wash (`bg="rgba(10, 48, 42, 0.68)"` with `RoughBox` chalk border):
  `THE 3-STEP OPTIMAL BLUEPRINT`
  - **STEP 1 [F2741..F2860]:** `1. FIND PIVOT (i)` ➔ Scan right-to-left for first `nums[i] < nums[i+1]` *(Rightmost place that can increase)*
  - **STEP 2 [F2860..F2990]:** `2. FIND SUCCESSOR (j) & SWAP` ➔ Scan right-to-left for first `nums[j] > nums[i]`, swap them *(Smallest possible increase)*
  - **STEP 3 [F2990..F3128]:** `3. REVERSE SUFFIX` ➔ Reverse from `i+1` to end *(Minimize everything after pivot in O(K))*
- **CENTER-STAGE HERO:** The unified 3-step optimal algorithm blueprint.
- **CAUSE:** Narration delivers the complete theoretical summary of the method.
- **EFFECT / MOTION:** Each of the 3 steps highlights sequentially with warm golden glow and checkmark badges as the voiceover speaks each part of the sentence.
- **WHAT MUST NOT APPEAR YET:** Do not bring back master array until spoken in Anchor 21.
- **COMPREHENSION HOLD:** Seamless pacing through the authoritative 12.90s summary.
- **CLEANUP / EXIT:** 3-step card neatly scales down and docks toward top-right as the real array returns.
- **PERSISTENT STATE:** Complete optimal algorithm codified.

---

### Anchor 21: `S06_EXECUTE`
- **Frame Range:** `[3128, 3252)` (124 frames, 4.13s) | Spoken: `[3128, 3252]`, Pause: 0f
- **Spoken Narration Anchor:** `"Now let's execute that on our master example."`
- **ANCHOR:** `S06_EXECUTE` (Trace: `IDEA-21`)
- **WHAT APPEARS NOW:** The untouched master array `[2, 1, 5, 4, 4, 3, 0]` glides smoothly into center stage at Y: 300 with all 7 slots in default clean chalk state. Above the array, a forward-looking transition banner appears: `NEXT ➔ SCENE 07 · STEP-BY-STEP OPTIMAL TRACE`.
- **CENTER-STAGE HERO:** Untouched Master Array `[2, 1, 5, 4, 4, 3, 0]`.
- **CAUSE:** Narration concludes conceptual derivation and prepares execution trace.
- **EFFECT / MOTION:** Master array fades in (`opacity: 0 -> 1`, `scale: 0.96 -> 1.0` over 24 frames). All slot values drop into place. Zero algorithm spoilers are visible (no pre-marked pivot or successor).
- **WHAT MUST NOT APPEAR YET:** No active pointers on the master array; no mutations.
- **COMPREHENSION HOLD:** Steady hold across frames 3180..3252 to conclude Scene 06 in perfect poise.
- **CLEANUP / EXIT:** Holds clean state for continuous frame-0 provenance into Scene 07.
- **PERSISTENT STATE:** Master array `[2, 1, 5, 4, 4, 3, 0]` ready for trace.

---

## Zero-Collision Spatial Law Verification Table

| Layout Element | Vertical Range (Y) | Height | Horizontal Bounds (X) | Collision Margin Check |
|---|---|---|---|---|
| Top Header Bar | `Y: 36..80` | 44px | `X: 80..1840` | Free |
| Section Eyebrow | `Y: 96..132` | 36px | `X: 80..1840` | 16px below Header |
| Main Hero Stage | `Y: 150..770` | 620px | `X: 80..1840` | 18px below Eyebrow |
| Bottom Clue Strip | `Y: 790..910` | 120px | `X: 80..1840` | 20px below Hero Stage |
| Breathing Room | `Y: 910..970` | 60px | Full Width | Buffer zone |
| Captions | `Y: 970..1040` | 70px | `X: 160..1760` | > 200px below Stage |
