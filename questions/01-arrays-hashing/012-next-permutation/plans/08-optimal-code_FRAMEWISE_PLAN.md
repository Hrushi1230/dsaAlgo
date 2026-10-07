# Scene 08 · Framewise Scene Plan: Method 2 · Optimal Code

**Question:** 012 · Next Permutation (LeetCode 31)  
**Scene:** `08-optimal-code`  
**Audio File:** `remotion-project/public/audio/012/08-optimal-code.mp3`  
**Total Frames:** 3014 @ 30 FPS (100.48s)  
**Total Anchors:** 28  
**Visual Aesthetic Standard:** Oxford Chalkboard with Translucent Wash (matching `s03_f1250.png`)  

---

## 0. Visual Composition & Zero-Collision Layout Contract

- **Vertical Budget:**
  - Header: Y: 30 .. 80px (`[ 01 · ARRAYS & HASHING · LC 31 ]`, `Next Permutation`, `[ APPROACH 2 · OPTIMAL CODE ]`)
  - Subtitle / Eyebrow: Y: 95 .. 125px (Dynamic step indicators)
  - Center Stage: Y: 145 .. 760px (Height: 615px).
    - Center Hero Mode: Single `ChalkCodeEditorV2` (width: 1060px, centered at X: 430px)
    - Docked Split Mode: Left `ChalkCodeEditorV2` (width: 860px) + Right `RoughCard` Proof (width: 820px), total width: 1710px, centered horizontally at X: 105px.
  - Bottom Captions: Y: 980px, leaving $\ge 220\text{px}$ of pristine chalkboard breathing room above captions.
- **Aesthetic Law:** Authentic translucent chalkboard wash (`rgba(10, 48, 42, 0.68)`), `RoughBox` hand-drawn borders, `RoughLine` dividers, monospace code with character-by-character typewriter effect. Future lines are 100% hidden.
- **Array V2 Law:** All proof arrays use `ArrayTrackV2` with stationary slots and indices.

---

## 1. Framewise Semantic Anchor Choreography

### Beat 01 — `S08_OPEN` (F0 .. F86 · 86f · 2.87s)

**ANCHOR:** `S08_OPEN` — "Now let's write the optimal solution."  
**WHAT APPEARS NOW:** Production code editor shell fades in at screen center (width: 1060px, height: 615px). Header displays 'solution.py' and 'PYTHON 3.11'. Editor body is completely empty, ready for line 1.  
**CENTER-STAGE HERO:** Empty live code surface.  
**CAUSE:** Transition from Scene 07 completed trace into code implementation phase.  
**EFFECT / MOTION:** ChalkCodeEditorV2 scales from 0.98 to 1.0 with soft opacity fade (F0..F30). Blinking cursor rests on Line 1.  
**WHAT MUST NOT APPEAR YET:** Line 1 through 15 code lines. Docked proof panels.  
**COMPREHENSION HOLD:** F30..F86: Viewer takes in the clean, focused code canvas.  
**CLEANUP / EXIT:** Smooth transition into typing line 1 on F86.  
**PERSISTENT STATE:** Editor window at center stage (width: 1060px, height: 615px).  

---

### Beat 02 — `S08_N` (F86 .. F174 · 88f · 2.93s)

**ANCHOR:** `S08_N` — "First, store the array length in n,"  
**WHAT APPEARS NOW:** Line 1 types character-by-character: 'n = len(nums)'.  
**CENTER-STAGE HERO:** Active typed Line 1 in ChalkCodeEditorV2.  
**CAUSE:** Spoken narration: 'First, store the array length in n'.  
**EFFECT / MOTION:** F86..F150: 13 characters type at ~5 frames/char. Blinking cursor tracks the right end of the line.  
**WHAT MUST NOT APPEAR YET:** Line 2..15.  
**COMPREHENSION HOLD:** F150..F174: Hold on completed Line 1 with cursor blinking.  
**CLEANUP / EXIT:** Enter key pressed in editor animation; cursor drops to Line 2.  
**PERSISTENT STATE:** Line 1 'n = len(nums)' active in editor.  

---

### Beat 03 — `S08_I_INIT` (F174 .. F263 · 89f · 2.97s)

**ANCHOR:** `S08_I_INIT` — "then set i to n -2."  
**WHAT APPEARS NOW:** Line 2 types character-by-character: 'i = n - 2'.  
**CENTER-STAGE HERO:** Active typed Line 2 in ChalkCodeEditorV2.  
**CAUSE:** Spoken narration: 'then set i to n minus two'.  
**EFFECT / MOTION:** F174..F240: 9 characters type progressively. Keyword and numbers colorized with theme tokens.  
**WHAT MUST NOT APPEAR YET:** Line 3..15.  
**COMPREHENSION HOLD:** F240..F263: Hold on completed Line 2.  
**CLEANUP / EXIT:** Cursor moves to Line 3.  
**PERSISTENT STATE:** Lines 1 and 2 visible in editor.  

---

### Beat 04 — `S08_I_LEFT` (F263 .. F310 · 47f · 1.57s)

**ANCHOR:** `S08_I_LEFT` — "We move i left."  
**WHAT APPEARS NOW:** Eyebrow updates to 'STEP 1: SCAN RIGHT-TO-LEFT FOR PIVOT'. Editor docks smoothly to the left (X: 105px, width: 860px) while Mini Array V2 proof card docks on the right (width: 820px).  
**CENTER-STAGE HERO:** Left-docked Code Editor + Right Proof showing pointer i moving leftwards.  
**CAUSE:** Spoken narration: 'We move i left'.  
**EFFECT / MOTION:** F263..F290: Smooth horizontal translation of editor from center to docked position. Right proof card fades in.  
**WHAT MUST NOT APPEAR YET:** Line 3 text typed.  
**COMPREHENSION HOLD:** F290..F310: Visual alignment of editor and docked array proof.  
**CLEANUP / EXIT:** None; docked layout persists during Step 1 explanation.  
**PERSISTENT STATE:** Docked layout (code left 860px, proof right 820px).  

---

### Beat 05 — `S08_WHILE_I` (F310 .. F509 · 199f · 6.63s)

**ANCHOR:** `S08_WHILE_I` — "While i is valid, and nums at i is greater than or equal to nums at i plus 1."  
**WHAT APPEARS NOW:** Line 3 types: 'while i >= 0 and nums[i] >= nums[i + 1]:' and Line 4 types: '    i -= 1'. Right proof demonstrates descending condition 'nums[i] >= nums[i+1]'.  
**CENTER-STAGE HERO:** Line 3 while loop condition + right proof illustrating the descending slope.  
**CAUSE:** Spoken narration: 'While i is valid, and nums at i is greater than or equal to nums at i plus 1'.  
**EFFECT / MOTION:** F310..F450: Progressive typing of Line 3 and Line 4. Right proof highlights indices i and i+1 comparing values.  
**WHAT MUST NOT APPEAR YET:** Step 2 code (Line 5..9).  
**COMPREHENSION HOLD:** F450..F509: Hold on while condition with highlighted tokens.  
**CLEANUP / EXIT:** Right proof card transitions to loop exit state.  
**PERSISTENT STATE:** Lines 1..4 visible in editor.  

---

### Beat 06 — `S08_LOOP_STOPS` (F509 .. F682 · 173f · 5.77s)

**ANCHOR:** `S08_LOOP_STOPS` — "When this loop stops, either we found the pivot, or no pivot exists."  
**WHAT APPEARS NOW:** Right proof card displays dual exit outcomes: Case A: Pivot found (i >= 0), Case B: Entire array descending, no pivot (i == -1).  
**CENTER-STAGE HERO:** Right Proof Card: 'Dual Loop Exit Conditions'.  
**CAUSE:** Spoken narration: 'When this loop stops, either we found the pivot, or no pivot exists'.  
**EFFECT / MOTION:** F509..F550: Dual branch visual cards fade in inside right proof: Green card for Pivot Found vs Yellow card for No Pivot Exists.  
**WHAT MUST NOT APPEAR YET:** if i >= 0 code line.  
**COMPREHENSION HOLD:** F550..F682: Comprehensive pause on dual exit understanding.  
**CLEANUP / EXIT:** Yellow card fades out; green card focuses on valid pivot case.  
**PERSISTENT STATE:** Lines 1..4 in code editor.  

---

### Beat 07 — `S08_IF_I` (F682 .. F837 · 155f · 5.17s)

**ANCHOR:** `S08_IF_I` — "If i is still greater than or equal to 0, we have a valid pivot."  
**WHAT APPEARS NOW:** Line 5 types in code editor: 'if i >= 0:'. Right proof highlights: 'Valid Pivot Guard'.  
**CENTER-STAGE HERO:** Line 5 typed in editor.  
**CAUSE:** Spoken narration: 'If i is still greater than or equal to 0, we have a valid pivot'.  
**EFFECT / MOTION:** F682..F780: Line 5 types progressively. Green checkmark badge appears beside if condition in editor.  
**WHAT MUST NOT APPEAR YET:** Step 2 lines inside the if block (Lines 6..9).  
**COMPREHENSION HOLD:** F780..F837: Hold on if condition.  
**CLEANUP / EXIT:** Cursor indents inside the if block to Line 6.  
**PERSISTENT STATE:** Lines 1..5 visible in editor.  

---

### Beat 08 — `S08_J_INIT` (F837 .. F914 · 77f · 2.57s)

**ANCHOR:** `S08_J_INIT` — "Now set j to n minus 1."  
**WHAT APPEARS NOW:** Line 6 types indented: '    j = n - 1'. Right proof shows pointer j starting at the very last index.  
**CENTER-STAGE HERO:** Line 6 typed in editor + pointer j initialized at slot n-1 in right proof.  
**CAUSE:** Spoken narration: 'Now set j to n minus 1'.  
**EFFECT / MOTION:** F837..F890: 13 characters typed with 4-space indentation. Right proof updates pointer j to slot 6.  
**WHAT MUST NOT APPEAR YET:** Line 7..15.  
**COMPREHENSION HOLD:** F890..F914: Hold on pointer j initialization.  
**CLEANUP / EXIT:** Cursor moves to Line 7.  
**PERSISTENT STATE:** Lines 1..6 visible in editor.  

---

### Beat 09 — `S08_J_LEFT` (F914 .. F959 · 45f · 1.50s)

**ANCHOR:** `S08_J_LEFT` — "Move j left,"  
**WHAT APPEARS NOW:** Right proof displays pointer j moving leftwards across the descending suffix.  
**CENTER-STAGE HERO:** Pointer j decrement motivation in right proof.  
**CAUSE:** Spoken narration: 'Move j left,'.  
**EFFECT / MOTION:** F914..F950: Animated arrow shows pointer j stepping left.  
**WHAT MUST NOT APPEAR YET:** Line 7 typed.  
**COMPREHENSION HOLD:** F950..F959: Brief pause leading into while condition.  
**CLEANUP / EXIT:** None.  
**PERSISTENT STATE:** Lines 1..6 visible.  

---

### Beat 10 — `S08_WHILE_J` (F959 .. F1098 · 139f · 4.63s)

**ANCHOR:** `S08_WHILE_J` — "while nums at j is less than or equal to nums at i."  
**WHAT APPEARS NOW:** Line 7 types: '    while nums[j] <= nums[i]:' and Line 8 types: '        j -= 1'.  
**CENTER-STAGE HERO:** Line 7 successor while condition in editor.  
**CAUSE:** Spoken narration: 'while nums at j is less than or equal to nums at i'.  
**EFFECT / MOTION:** F959..F1050: Progressive typing of Line 7 and Line 8 with nested 8-space indentation.  
**WHAT MUST NOT APPEAR YET:** Line 9 swap statement.  
**COMPREHENSION HOLD:** F1050..F1098: Hold on successor scan condition.  
**CLEANUP / EXIT:** Right proof card illuminates the first strictly greater value.  
**PERSISTENT STATE:** Lines 1..8 visible in editor.  

---

### Beat 11 — `S08_J_MEANING` (F1098 .. F1294 · 196f · 6.53s)

**ANCHOR:** `S08_J_MEANING` — "When that loop stops, j is the first value from the right. That is strictly greater than the pivot."  
**WHAT APPEARS NOW:** Right proof stamps green callout: 'j is guaranteed smallest value strictly larger than pivot (nums[j] > nums[i])'.  
**CENTER-STAGE HERO:** Right Proof: Successor Guarantee Proof.  
**CAUSE:** Spoken narration: 'When that loop stops, j is the first value from the right. That is strictly greater than the pivot'.  
**EFFECT / MOTION:** F1098..F1160: Green radiant badge pulses around slot j. Formula 'nums[j] > nums[i]' highlighted.  
**WHAT MUST NOT APPEAR YET:** Line 9 typed.  
**COMPREHENSION HOLD:** F1160..F1294: Long hold on successor semantic guarantee.  
**CLEANUP / EXIT:** Right proof prepares for swap representation.  
**PERSISTENT STATE:** Lines 1..8 visible in editor.  

---

### Beat 12 — `S08_SWAP` (F1294 .. F1406 · 112f · 3.73s)

**ANCHOR:** `S08_SWAP` — "Now swap nums at i with nums at j."  
**WHAT APPEARS NOW:** Line 9 types indented: '    nums[i], nums[j] = nums[j], nums[i]'. Right proof shows swap arc between slot i and slot j.  
**CENTER-STAGE HERO:** Line 9 tuple swap statement in editor.  
**CAUSE:** Spoken narration: 'Now swap nums at i with nums at j'.  
**EFFECT / MOTION:** F1294..F1370: Python tuple-unpacking swap line types with glowing amber highlight. Right proof array shows values swapping.  
**WHAT MUST NOT APPEAR YET:** Step 3 lines (Lines 10..15).  
**COMPREHENSION HOLD:** F1370..F1406: Hold on swap completion.  
**CLEANUP / EXIT:** Cursor outdents from if block to base indentation at Line 10.  
**PERSISTENT STATE:** Lines 1..9 visible in editor.  

---

### Beat 13 — `S08_LEFT` (F1406 .. F1506 · 100f · 3.33s)

**ANCHOR:** `S08_LEFT` — "Next, set left to i plus 1,"  
**WHAT APPEARS NOW:** Line 10 types: 'left = i + 1' (or 'left, right = i + 1, n - 1'). Right proof shows left pointer initialized at i+1.  
**CENTER-STAGE HERO:** Line 10 in editor + pointer left on right proof.  
**CAUSE:** Spoken narration: 'Next, set left to i plus 1,'.  
**EFFECT / MOTION:** F1406..F1470: Typing of left pointer initialization. Pointer left appears at slot 2 in proof array.  
**WHAT MUST NOT APPEAR YET:** Right pointer initialization.  
**COMPREHENSION HOLD:** F1470..F1506: Hold on left pointer.  
**CLEANUP / EXIT:** Cursor advances to right pointer assignment.  
**PERSISTENT STATE:** Lines 1..10 visible.  

---

### Beat 14 — `S08_RIGHT` (F1506 .. F1573 · 67f · 2.23s)

**ANCHOR:** `S08_RIGHT` — "and right to n minus 1."  
**WHAT APPEARS NOW:** Line 11 types: 'right = n - 1'. Right proof shows right pointer initialized at slot n-1.  
**CENTER-STAGE HERO:** Line 11 in editor + pointer right on right proof.  
**CAUSE:** Spoken narration: 'and right to n minus 1'.  
**EFFECT / MOTION:** F1506..F1550: Typing of right pointer initialization. Pointer right appears at slot 6 in proof array.  
**WHAT MUST NOT APPEAR YET:** Reverse loop lines (Lines 12..15).  
**COMPREHENSION HOLD:** F1550..F1573: Hold on both two-pointer boundaries.  
**CLEANUP / EXIT:** Cursor advances to Line 12.  
**PERSISTENT STATE:** Lines 1..11 visible.  

---

### Beat 15 — `S08_REV_WHILE` (F1573 .. F1651 · 78f · 2.60s)

**ANCHOR:** `S08_REV_WHILE` — "While left is smaller than right,"  
**WHAT APPEARS NOW:** Line 12 types: 'while left < right:'. Right proof displays two-pointer reversal span bracket spanning [left..right].  
**CENTER-STAGE HERO:** Line 12 reverse while condition.  
**CAUSE:** Spoken narration: 'While left is smaller than right,'.  
**EFFECT / MOTION:** F1573..F1630: Progressive typing of Line 12. Cyan bracket spans slots [left..right] in proof array.  
**WHAT MUST NOT APPEAR YET:** Reverse loop body lines (Lines 13..15).  
**COMPREHENSION HOLD:** F1630..F1651: Hold on while condition.  
**CLEANUP / EXIT:** Cursor indents to Line 13.  
**PERSISTENT STATE:** Lines 1..12 visible.  

---

### Beat 16 — `S08_REV_SWAP` (F1651 .. F1757 · 106f · 3.53s)

**ANCHOR:** `S08_REV_SWAP` — "swap nums at left with nums at right,"  
**WHAT APPEARS NOW:** Line 13 types: '    nums[left], nums[right] = nums[right], nums[left]'. Right proof shows swap arc between left and right.  
**CENTER-STAGE HERO:** Line 13 reverse swap line.  
**CAUSE:** Spoken narration: 'swap nums at left with nums at right,'.  
**EFFECT / MOTION:** F1651..F1720: Typing of swap statement with cyan highlight. Parabolic swap arc in proof.  
**WHAT MUST NOT APPEAR YET:** Pointer update lines.  
**COMPREHENSION HOLD:** F1720..F1757: Hold on swap execution.  
**CLEANUP / EXIT:** Cursor advances to Line 14.  
**PERSISTENT STATE:** Lines 1..13 visible.  

---

### Beat 17 — `S08_LEFT_FWD` (F1757 .. F1803 · 46f · 1.53s)

**ANCHOR:** `S08_LEFT_FWD` — "then move left forward"  
**WHAT APPEARS NOW:** Line 14 types: '    left += 1'. Right proof shows pointer left advancing rightwards.  
**CENTER-STAGE HERO:** Line 14 pointer advance.  
**CAUSE:** Spoken narration: 'then move left forward'.  
**EFFECT / MOTION:** F1757..F1790: Typing of left increment. Pointer left steps forward in proof.  
**WHAT MUST NOT APPEAR YET:** Line 15 typed.  
**COMPREHENSION HOLD:** F1790..F1803: Quick hold.  
**CLEANUP / EXIT:** Cursor advances to Line 15.  
**PERSISTENT STATE:** Lines 1..14 visible.  

---

### Beat 18 — `S08_RIGHT_BACK` (F1803 .. F1873 · 70f · 2.33s)

**ANCHOR:** `S08_RIGHT_BACK` — "and right backward."  
**WHAT APPEARS NOW:** Line 15 types: '    right -= 1'. Right proof shows pointer right stepping backwards.  
**CENTER-STAGE HERO:** Line 15 pointer decrement.  
**CAUSE:** Spoken narration: 'and right backward'.  
**EFFECT / MOTION:** F1803..F1840: Typing of right decrement. Pointer right steps backward in proof.  
**WHAT MUST NOT APPEAR YET:** None; full code is now complete!  
**COMPREHENSION HOLD:** F1840..F1873: Hold on completed 15-line algorithm.  
**CLEANUP / EXIT:** Editor expands back towards full view or maintains docked state.  
**PERSISTENT STATE:** All 15 lines of optimal solution visible.  

---

### Beat 19 — `S08_REVERSE_MEANING` (F1873 .. F1958 · 85f · 2.83s)

**ANCHOR:** `S08_REVERSE_MEANING` — "This reverses the suffix in place."  
**WHAT APPEARS NOW:** Right proof card displays celebratory banner: 'In-Place Suffix Reversal O(K) — Descending ➔ Ascending'.  
**CENTER-STAGE HERO:** Proof card demonstrating sorted ascending suffix.  
**CAUSE:** Spoken narration: 'This reverses the suffix in place'.  
**EFFECT / MOTION:** F1873..F1930: Green radiant badge illuminates suffix slots in proof. Proof card shows O(K) in-place note.  
**WHAT MUST NOT APPEAR YET:** Edge case walkthrough.  
**COMPREHENSION HOLD:** F1930..F1958: Hold on suffix reversal completion.  
**CLEANUP / EXIT:** Right proof transitions to Edge Case demonstration.  
**PERSISTENT STATE:** Complete 15-line code in editor.  

---

### Beat 20 — `S08_NO_PIVOT` (F1958 .. F2070 · 112f · 3.73s)

**ANCHOR:** `S08_NO_PIVOT` — "If no pivot was found, i becomes minus 1."  
**WHAT APPEARS NOW:** Right proof card switches to: 'EDGE CASE: DESCENDING ARRAY [5, 4, 3, 2, 1]'. Line 3 while loop runs until i = -1.  
**CENTER-STAGE HERO:** Edge case array [5, 4, 3, 2, 1] + pointer i dropping to -1 in right proof.  
**CAUSE:** Spoken narration: 'If no pivot was found, i becomes minus 1'.  
**EFFECT / MOTION:** F1958..F2040: Proof array displays [5, 4, 3, 2, 1]. Pointer i walks off the left edge to index -1.  
**WHAT MUST NOT APPEAR YET:** Skipped block highlight.  
**COMPREHENSION HOLD:** F2040..F2070: Hold on i == -1 state.  
**CLEANUP / EXIT:** Proof highlights line 5 if condition.  
**PERSISTENT STATE:** Editor lines 1..15 + edge case proof.  

---

### Beat 21 — `S08_SKIP_SWAP` (F2070 .. F2155 · 85f · 2.83s)

**ANCHOR:** `S08_SKIP_SWAP` — "Then the swap block is skipped,"  
**WHAT APPEARS NOW:** Editor dims Lines 6..9 with a translucent red wash: 'SKIPPED (i = -1 < 0)'.  
**CENTER-STAGE HERO:** Dimmed Lines 6..9 in code editor showing clean bypass of swap block.  
**CAUSE:** Spoken narration: 'Then the swap block is skipped,'.  
**EFFECT / MOTION:** F2070..F2120: Lines 6..9 fade to 35% opacity. Red badge stamps: 'if -1 >= 0: False ➔ SKIP BLOCK'.  
**WHAT MUST NOT APPEAR YET:** Line 10 evaluation.  
**COMPREHENSION HOLD:** F2120..F2155: Hold on skipped block understanding.  
**CLEANUP / EXIT:** Focus shifts to Line 10 (left = i + 1).  
**PERSISTENT STATE:** Editor with dimmed block.  

---

### Beat 22 — `S08_LEFT_ZERO` (F2155 .. F2249 · 94f · 3.13s)

**ANCHOR:** `S08_LEFT_ZERO` — "and left becomes 0 automatically."  
**WHAT APPEARS NOW:** Line 10 is spotlighted: 'left = i + 1 = -1 + 1 = 0'. Right proof shows left pointer initialized at index 0.  
**CENTER-STAGE HERO:** Evaluation callout: left = -1 + 1 = 0.  
**CAUSE:** Spoken narration: 'and left becomes 0 automatically'.  
**EFFECT / MOTION:** F2155..F2210: Gold math callout pops: 'left = (-1) + 1 = 0'. Pointer left lands at slot 0 in proof array.  
**WHAT MUST NOT APPEAR YET:** Whole array reverse demonstration.  
**COMPREHENSION HOLD:** F2210..F2249: Hold on automatic 0 alignment.  
**CLEANUP / EXIT:** Proof prepares to reverse entire array [0..n-1].  
**PERSISTENT STATE:** Editor + right proof.  

---

### Beat 23 — `S08_SAME_REVERSE` (F2249 .. F2398 · 149f · 4.97s)

**ANCHOR:** `S08_SAME_REVERSE` — "So the same reverse loop reverses the whole array."  
**WHAT APPEARS NOW:** Right proof demonstrates two-pointer reversal spanning the ENTIRE array: [0..n-1].  
**CENTER-STAGE HERO:** Two-pointer reversal spanning whole array [0..4] on [5, 4, 3, 2, 1].  
**CAUSE:** Spoken narration: 'So the same reverse loop reverses the whole array'.  
**EFFECT / MOTION:** F2249..F2340: Pointers left=0 and right=4 reverse array in-place to [1, 2, 3, 4, 5]. Zero extra code needed!  
**WHAT MUST NOT APPEAR YET:** Wraparound conclusion.  
**COMPREHENSION HOLD:** F2340..F2398: Hold on full reversed array.  
**CLEANUP / EXIT:** Proof transitions to wraparound summary card.  
**PERSISTENT STATE:** Editor + right proof.  

---

### Beat 24 — `S08_LARGEST_SMALLEST` (F2398 .. F2566 · 168f · 5.60s)

**ANCHOR:** `S08_LARGEST_SMALLEST` — "That turns the largest permutation into the smallest permutation."  
**WHAT APPEARS NOW:** Right proof displays wraparound trophy badge: 'LARGEST [5, 4, 3, 2, 1] ➔ SMALLEST [1, 2, 3, 4, 5]'.  
**CENTER-STAGE HERO:** Wraparound guarantee card in right proof.  
**CAUSE:** Spoken narration: 'That turns the largest permutation into the smallest permutation'.  
**EFFECT / MOTION:** F2398..F2480: Green celebratory border pulses around [1, 2, 3, 4, 5]. Circular wraparound arrow displays.  
**WHAT MUST NOT APPEAR YET:** Philosophy cards.  
**COMPREHENSION HOLD:** F2480..F2566: Long comprehension hold on wraparound invariant.  
**CLEANUP / EXIT:** Right proof card smoothly fades out. Editor shifts or full screen transitions to 3 Invariants.  
**PERSISTENT STATE:** All 15 code lines.  

---

### Beat 25 — `S08_NOT_MEMORIZE` (F2566 .. F2678 · 112f · 3.73s)

**ANCHOR:** `S08_NOT_MEMORIZE` — "The important part is not memorizing these lines."  
**WHAT APPEARS NOW:** Center stage transitions to the '3 CORE ALGORITHMIC INVARIANTS' card (width: 1160px, height: 420px). Title: 'Why This Works — 3 Logical Invariants'.  
**CENTER-STAGE HERO:** Philosophy Invariant Card container.  
**CAUSE:** Spoken narration: 'The important part is not memorizing these lines'.  
**EFFECT / MOTION:** F2566..F2620: Smooth transition from code to 3-part invariant breakdown card. Soft chalkboard wash with RoughBox border.  
**WHAT MUST NOT APPEAR YET:** Invariant 1..3 details.  
**COMPREHENSION HOLD:** F2620..F2678: Hold on philosophy header.  
**CLEANUP / EXIT:** First invariant card illuminates.  
**PERSISTENT STATE:** Invariant card container.  

---

### Beat 26 — `S08_REASON1` (F2678 .. F2884 · 206f · 6.87s)

**ANCHOR:** `S08_REASON1` — "Each line follows the same reasoning. Find the rightmost place that can increase."  
**WHAT APPEARS NOW:** Invariant 1 card illuminates with amber glow: '1. FIND RIGHTMOST PLACE THAT CAN INCREASE — Scan from right for first nums[i] < nums[i+1] (Pivot)'.  
**CENTER-STAGE HERO:** Invariant 1 Row in Philosophy Card.  
**CAUSE:** Spoken narration: 'Each line follows the same reasoning. Find the rightmost place that can increase'.  
**EFFECT / MOTION:** F2678..F2760: Invariant 1 box slides in with amber border and checkmark badge.  
**WHAT MUST NOT APPEAR YET:** Invariant 2 and 3 illumination.  
**COMPREHENSION HOLD:** F2760..F2884: Hold on Invariant 1 explanation.  
**CLEANUP / EXIT:** Focus advances to Invariant 2.  
**PERSISTENT STATE:** Invariant 1 active.  

---

### Beat 27 — `S08_REASON2` (F2884 .. F2959 · 75f · 2.50s)

**ANCHOR:** `S08_REASON2` — "Make the smallest increase."  
**WHAT APPEARS NOW:** Invariant 2 card illuminates with cyan glow: '2. MAKE SMALLEST INCREASE — Swap pivot with smallest strictly larger element to its right (Successor)'.  
**CENTER-STAGE HERO:** Invariant 2 Row in Philosophy Card.  
**CAUSE:** Spoken narration: 'Make the smallest increase'.  
**EFFECT / MOTION:** F2884..F2930: Invariant 2 box fades in with cyan border and swap icon.  
**WHAT MUST NOT APPEAR YET:** Invariant 3 illumination.  
**COMPREHENSION HOLD:** F2930..F2959: Hold on Invariant 2.  
**CLEANUP / EXIT:** Focus advances to Invariant 3.  
**PERSISTENT STATE:** Invariants 1 and 2 active.  

---

### Beat 28 — `S08_REASON3` (F2959 .. F3014 · 55f · 1.83s)

**ANCHOR:** `S08_REASON3` — "Then minimize the suffix."  
**WHAT APPEARS NOW:** Invariant 3 card illuminates with emerald green glow: '3. MINIMIZE THE SUFFIX — Reverse descending suffix into minimal ascending order in O(K) time'.  
**CENTER-STAGE HERO:** Invariant 3 Row + Complete 3-Invariant Synthesis.  
**CAUSE:** Spoken narration: 'Then minimize the suffix'.  
**EFFECT / MOTION:** F2959..F2990: Invariant 3 box stamps on with green border and reverse icon. All 3 invariants glow in harmony.  
**WHAT MUST NOT APPEAR YET:** Scene 09 complexity graph.  
**COMPREHENSION HOLD:** F2990..F3014: Final majestic hold on complete conceptual mastery of Next Permutation.  
**CLEANUP / EXIT:** Hold final resting frame into Scene 09 handoff.  
**PERSISTENT STATE:** All 3 Invariants glowing at center stage.  

---

