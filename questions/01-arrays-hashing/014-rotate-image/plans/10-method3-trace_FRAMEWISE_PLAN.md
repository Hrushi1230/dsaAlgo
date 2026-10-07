# Scene 10 Framewise Plan: Method 3 Full Verified Trace (LeetCode 48)
## 014-rotate-image · Scene 10 (`10-method3-trace`)

- **Audio File:** `public/audio/014/10-method3-trace.mp3`
- **Total Duration:** 4465 frames (148.840s @ 30 FPS)
- **Sync Authority:** `questions/01-arrays-hashing/014-rotate-image/sync/10-method3-trace.json` (271 words)
- **Visual Aesthetic:** Chalk blackboard (`#0D1117`), `@dsa/kit` components, 5×5 Master Matrix hero, individual swap pills & HUD, strict spoiler-free reveals, zero vertical collision (> 240px above captions).

---

### Beat 1: Reset to Original 5×5 Master Matrix (Frames 0 – 259 · ~8.6s)
- **Audio Range:** `[0000-0141]` ("Start again from the original 5 by 5 matrix. The first transformation is transpose.")
- **ANCHOR:** `BEAT_1_ORIGINAL_MATRIX`
- **WHAT APPEARS NOW:**
  - Top Bar metadata pills: `QUESTION 014` (left), `METHOD 3: STEP-BY-STEP TRACE` (center), `IN-PLACE MUTATION` (right).
  - Center-Stage Hero: Original 5×5 matrix with values 1..25 in default cream text.
  - Right HUD: `PHASE 1: TRANSPOSE MATRIX (REFLECT ACROSS DIAGONAL)` header token.
- **CENTER-STAGE HERO:** 5×5 Matrix at (X: 180, Y: 150).
- **CAUSE:** Narration resets to the untouched initial matrix state.
- **EFFECT / MOTION:** Scale-in with spring of the 5×5 matrix.
- **WHAT MUST NOT APPEAR YET:** Diagonal highlight, swap highlights, Phase 2 row reversal elements.
- **COMPREHENSION HOLD:** Frames 142 – 259 (narration pause).
- **CLEANUP / EXIT:** None. Persistent baseline.
- **PERSISTENT STATE:** Untouched original matrix.

---

### Beat 2: Transpose Definition & Main Diagonal Fixity (Frames 260 – 952 · ~23.1s)
- **Audio Range:** `[0260-0892]` ("Transpose means swap... reflect across main diagonal... process only one side...")
- **ANCHOR:** `BEAT_2_DIAGONAL_RULE`
- **WHAT APPEARS NOW:**
  - Main diagonal cells `(0,0), (1,1), (2,2), (3,3), (4,4)` (values `1, 7, 13, 19, 25`) highlight in gold (`#F59E0B`).
  - Right HUD Token: `RULE: swap(matrix[r][c], matrix[c][r]) for r < c`.
  - Invariant badge: `DIAGONAL CELLS STAY UNTOUCHED (r == c)`.
- **CENTER-STAGE HERO:** Main diagonal cells in 5×5 matrix.
- **CAUSE:** Narration explains that transpose reflects across the main diagonal, and each pair must be swapped only once (`r < c`).
- **EFFECT / MOTION:** Gold glow on the 5 diagonal cells; dashed guideline along diagonal.
- **WHAT MUST NOT APPEAR YET:** Active cell swaps.
- **COMPREHENSION HOLD:** Frames 893 – 952.
- **CLEANUP / EXIT:** Diagonal locked in persistent gold.
- **PERSISTENT STATE:** Matrix with active gold diagonal.

---

### Beat 3: Stage 1 — Row 0 Transpose Swaps (Frames 953 – 1461 · ~17.0s)
- **Audio Range:** `[0953-1445]` ("starting with row 0, 2 swaps with 6, 3 swaps with 11, 4 swaps with 16, and 5 swaps with 21...")
- **ANCHOR:** `BEAT_3_ROW0_SWAPS`
- **WHAT APPEARS NOW:**
  - Active Swap Counter: `Row 0 Swaps (4 pairs)`
  - Sub-beat 3A (F1078..F1112): `(0,1) ↔ (1,0)`: values `2 ↔ 6` swap with cyan/purple flash.
  - Sub-beat 3B (F1161..F1190): `(0,2) ↔ (2,0)`: values `3 ↔ 11` swap.
  - Sub-beat 3C (F1241..F1270): `(0,3) ↔ (3,0)`: values `4 ↔ 16` swap.
  - Sub-beat 3D (F1320..F1350): `(0,4) ↔ (4,0)`: values `5 ↔ 21` swap.
  - Pill at F1421: `Row 0 Transpose Complete (4/10 swaps) ✓`.
- **CENTER-STAGE HERO:** Symmetrical cell pairs swapping in 5×5 matrix.
- **CAUSE:** Spoken instruction executing row 0 transpose.
- **EFFECT / MOTION:** Pulse highlight on symmetrical pairs, value swap in-place.
- **WHAT MUST NOT APPEAR YET:** Row 1 swaps.
- **COMPREHENSION HOLD:** Frames 1446 – 1461.
- **CLEANUP / EXIT:** Swapped cells settle into green confirmed state.
- **PERSISTENT STATE:** Row 0 transposed.

---

### Beat 4: Stage 1 — Row 1 Transpose Swaps (Frames 1462 – 1927 · ~15.5s)
- **Audio Range:** `[1462-1897]` ("move to row 1. diagonal value 7 does not move... 8 swaps with 12, 9 swaps with 17, and 10 swaps with 22...")
- **ANCHOR:** `BEAT_4_ROW1_SWAPS`
- **WHAT APPEARS NOW:**
  - Active Swap Counter: `Row 1 Swaps (3 pairs)`
  - Value 7 stays fixed on diagonal.
  - Sub-beat 4A (F1691..F1737): `(1,2) ↔ (2,1)`: values `8 ↔ 12` swap.
  - Sub-beat 4B (F1772..F1813): `(1,3) ↔ (3,1)`: values `9 ↔ 17` swap.
  - Sub-beat 4C (F1850..F1897): `(1,4) ↔ (4,1)`: values `10 ↔ 22` swap.
  - Pill at F1897: `Row 1 Transpose Complete (7/10 swaps) ✓`.
- **CENTER-STAGE HERO:** Row 1 swap pairs.
- **CAUSE:** Spoken instruction executing row 1 transpose.
- **EFFECT / MOTION:** Symmetrical pairs flash cyan/purple and swap.
- **WHAT MUST NOT APPEAR YET:** Row 2 swaps.
- **COMPREHENSION HOLD:** Frames 1898 – 1927.
- **CLEANUP / EXIT:** Swapped cells settle.
- **PERSISTENT STATE:** Rows 0 and 1 transposed.

---

### Beat 5: Stage 1 — Row 2 & Row 3 Transpose Swaps (Frames 1928 – 2689 · ~25.4s)
- **Audio Range:** `[1928-2655]` ("row 2, 13 stays... 14 swaps with 18, 15 swaps with 23... row 3, 19 stays... 20 with 24 swap...")
- **ANCHOR:** `BEAT_5_ROWS2_3_SWAPS`
- **WHAT APPEARS NOW:**
  - Value 13 stays on diagonal.
  - Sub-beat 5A (F2144..F2192): `(2,3) ↔ (3,2)`: values `14 ↔ 18` swap.
  - Sub-beat 5B (F2230..F2280): `(2,4) ↔ (4,2)`: values `15 ↔ 23` swap.
  - Value 19 stays on diagonal.
  - Sub-beat 5C (F2590..F2655): `(3,4) ↔ (4,3)`: values `20 ↔ 24` swap.
  - Pill at F2655: `All 10 Transpose Swaps Complete (10/10) ✓`.
- **CENTER-STAGE HERO:** Final transpose pairs in rows 2 & 3.
- **CAUSE:** Spoken instruction completing all remaining transpose swaps.
- **EFFECT / MOTION:** Final pairs swap into place.
- **WHAT MUST NOT APPEAR YET:** Row reversal operation.
- **COMPREHENSION HOLD:** Frames 2656 – 2689.
- **CLEANUP / EXIT:** Transpose phase finishes.
- **PERSISTENT STATE:** Entire matrix is now in full Transposed state.

---

### Beat 6: Transpose Complete State Inspection (Frames 2690 – 3077 · ~12.9s)
- **Audio Range:** `[2690-3056]` ("transpose is complete... original columns have become rows... not yet clockwise rotation... need second transformation...")
- **ANCHOR:** `BEAT_6_TRANSPOSE_REVIEW`
- **WHAT APPEARS NOW:**
  - Status banner: `TRANSPOSE COMPLETE: Columns became rows`.
  - Display full transposed rows:
    - R0: `[1, 6, 11, 16, 21]`
    - R1: `[2, 7, 12, 17, 22]`
    - R2: `[3, 8, 13, 18, 23]`
    - R3: `[4, 9, 14, 19, 24]`
    - R4: `[5, 10, 15, 20, 25]`
  - Pending alert: `Notice: Left-to-right order is inverted! We need Step 2: Reverse Every Row`.
- **CENTER-STAGE HERO:** Full transposed 5×5 matrix.
- **CAUSE:** Narration reviews intermediate state and explains why row reversal is required.
- **EFFECT / MOTION:** Gentle pulse across all rows; Phase 2 transition cue.
- **WHAT MUST NOT APPEAR YET:** Row 0 reversal execution.
- **COMPREHENSION HOLD:** Frames 3057 – 3077.
- **CLEANUP / EXIT:** Transpose complete banner transforms to Phase 2 banner.
- **PERSISTENT STATE:** Transposed matrix ready for horizontal flips.

---

### Beat 7: Stage 2 — Row 0 Reversal (Frames 3078 – 3535 · ~15.2s)
- **Audio Range:** `[3078-3515]` ("Reverse every row. Take row 0. Left to right order flipped. First value moves to last, second to second last...")
- **ANCHOR:** `BEAT_7_ROW0_REVERSE`
- **WHAT APPEARS NOW:**
  - Right HUD: `PHASE 2: REVERSE EVERY ROW (TWO-POINTER FLIP)`.
  - Row 0 highlight: Two pointer badges `left` (col 0) and `right` (col 4).
  - Swap 1 (F3315..F3368): `1 ↔ 21` swap!
  - Swap 2 (F3409..F3475): `6 ↔ 16` swap!
  - Center element `11` remains in place (`left == right == 2`).
  - Row 0 confirmed rotated: `[21, 16, 11, 6, 1]`!
- **CENTER-STAGE HERO:** Row 0 horizontal flip with two pointers.
- **CAUSE:** Spoken step-by-step instruction demonstrating row reversal on row 0.
- **EFFECT / MOTION:** Horizontal arrows draw between symmetrical pointers; values swap.
- **WHAT MUST NOT APPEAR YET:** Rows 1..4 reversal.
- **COMPREHENSION HOLD:** Frames 3516 – 3535.
- **CLEANUP / EXIT:** Row 0 settles in green.
- **PERSISTENT STATE:** Row 0 reversed.

---

### Beat 8: Stage 2 — Rows 1, 2, 3, 4 Reversal (Frames 3536 – 3783 · ~8.2s)
- **Audio Range:** `[3536-3769]` ("Now perform the same row reversal for row 1, row 2, row 3, and row 4.")
- **ANCHOR:** `BEAT_8_REMAINING_ROWS_REVERSE`
- **WHAT APPEARS NOW:**
  - Row 1 reverses (F3637): `[2, 7, 12, 17, 22]` ──► `[22, 17, 12, 7, 2]`.
  - Row 2 reverses (F3669): `[3, 8, 13, 18, 23]` ──► `[23, 18, 13, 8, 3]`.
  - Row 3 reverses (F3703): `[4, 9, 14, 19, 24]` ──► `[24, 19, 14, 9, 4]`.
  - Row 4 reverses (F3751): `[5, 10, 15, 20, 25]` ──► `[25, 20, 15, 10, 5]`.
  - All rows turn vibrant green (`#3FB950`).
- **CENTER-STAGE HERO:** Sequential row flips across rows 1..4.
- **CAUSE:** Rapid execution of the identical two-pointer reversal on all remaining rows.
- **EFFECT / MOTION:** Cascading horizontal sweep animations across rows 1, 2, 3, 4.
- **WHAT MUST NOT APPEAR YET:** Final complexity summary badge.
- **COMPREHENSION HOLD:** Frames 3770 – 3783.
- **CLEANUP / EXIT:** Full matrix is now completely rotated!
- **PERSISTENT STATE:** Final rotated matrix state.

---

### Beat 9: Final Rotation Verification & Summary (Frames 3784 – 4465 · ~22.7s)
- **Audio Range:** `[3784-4465]` ("final matrix is exactly 90 degree clockwise rotation... method 3 uses two simple operations: transpose, then reverse every row... inside original matrix.")
- **ANCHOR:** `BEAT_9_FINAL_VERIFICATION`
- **WHAT APPEARS NOW:**
  - Gold master confirmation badge: `✓ 90° CLOCKWISE ROTATION VERIFIED & COMPLETE`.
  - Complexity Tokens:
    - Time: `O(N²) Total Time (N²/2 transpose swaps + N²/2 row swaps = N² total)`
    - Space: `O(1) Auxiliary Space (100% In-Place In-Situ)`
  - Summary comparison banner:
    `METHOD 3: ZERO COMPLEX INDEX FORMULAS · MAXIMUM INTERVIEW CLARITY`
- **CENTER-STAGE HERO:** Complete rotated matrix with golden glow + complexity badges.
- **CAUSE:** Narration concludes the verified trace and summarizes Method 3 optimality.
- **EFFECT / MOTION:** Golden shimmer on the rotated matrix; steady hold through frame 4465.
- **WHAT MUST NOT APPEAR YET:** None. Final scene beat.
- **COMPREHENSION HOLD:** Frames 4440 – 4465 (clean 25-frame end hold).
- **CLEANUP / EXIT:** End of Scene 10.
- **PERSISTENT STATE:** Complete verified trace of Method 3.
