# Scene 06 Framewise Plan: Method 2 Trace (Concentric Rings & 4-Way In-Place Swaps)

> **Question 14**: Rotate Image (LeetCode 48) · Pattern 01 (Arrays & Hashing)
> **Scene**: 06 · `06-method2-trace`
> **Audio Duration**: 246.200s (7,386 frames @ 30fps)
> **Audio File**: `public/audio/014/06-method2-trace.mp3`
> **Sync File**: `questions/01-arrays-hashing/014-rotate-image/sync/06-method2-trace.json` (451 words)
> **Anchors**: 26 verified anchors

---

## Canvas Layout & Spatial Zero-Collision Invariants

- **Canvas Dimensions**: 1920 × 1080 @ 30 FPS
- **Top Zone (Y: 36..105)**: Strictly reserved for clean metadata badges only (`01 · ARRAYS & HASHING`, `LEETCODE 48 · METHOD 2 TRACE`, `CONCENTRIC RINGS & 4-WAY IN-PLACE SWAPS`). No explanation cards, formulas, or text cards allowed in the top zone.
- **Center-Stage Hero (X: 764, Y: 215, 392×392px)**: 5×5 Master Matrix (`matrix[5][5]`). Pitch 80px (Cell 72px, Gap 8px). Remains dead-centered on stage throughout the entire 7,386 frames.
- **Left Stage (X: 80..670, Y: 180..615)**: Active Cycle Execution Card + Auxiliary Memory Box (`top_val = matrix[...]` · O(1) space) + Step-by-step 4-way swap tracker.
- **Right Stage (X: 1210..1840, Y: 180..615)**: Concentric Rings Hierarchy & Progress Tracker (`Layer 0: 4/4 cycles`, `Layer 1: 2/2 cycles`, `Center: 1 cell fixed`) + Ring Boundary Indicators (`top, bottom, left, right`).
- **Bottom Zone (Y: 655..765)**: Method 2 Key Takeaway & Algorithm Invariant Banner (`CORE PATTERN: FINISH 1 CYCLE -> FINISH 1 RING -> MOVE INWARD`).
- **Captions Zone (Y: 960..1010)**: Bottom-docked captions with strictly >= 195px of pristine breathing room above captions.
- **Zero Overlap Law**: No bounding boxes intersect; no line passes through digits.

---

## Framewise Anchor Choreography (26 Anchors)

### S06_A01_IN_PLACE_INTRO (Frames 0..210)
- **ANCHOR**: `S06_A01_IN_PLACE_INTRO` · Frames 0..210 · Spoken Phrase: *"Now, we use only the original matrix. Think of the matrix as layers."*
- **WHAT APPEARS NOW**: Top metadata badges + Centered 5x5 Matrix (`matrix[5][5]`) with initial values 1..25. Subtitle: 'No auxiliary matrix · O(1) extra space'.
- **CENTER-STAGE HERO**: Master 5×5 Matrix at X: 764, Y: 215.
- **CAUSE**: Narration states: 'Now, we use only the original matrix. Think of the matrix as layers.'
- **EFFECT / MOTION**: Matrix enters smoothly with spring animation (damping: 18, stiffness: 80).
- **WHAT MUST NOT APPEAR YET**: Layer boundary outlines, active cycle cards, arrows.
- **COMPREHENSION HOLD**: Hold for viewer to establish that we are rotating strictly inside the original 5x5 matrix.
- **CLEANUP / EXIT**: None.
- **PERSISTENT STATE**: Matrix remains at center stage throughout entire scene.

### S06_A02_LAYER_BREAKDOWN (Frames 211..603)
- **ANCHOR**: `S06_A02_LAYER_BREAKDOWN` · Frames 211..603 · Spoken Phrase: *"For our 5 by 5 matrix, the outside border is the first layer. Inside that, the 3 by 3 border is the second layer, and the center is left alone."*
- **WHAT APPEARS NOW**: Right stage Concentric Rings Breakdown Card (X: 1210..1840, Y: 180..615). Outer layer (16 cells) highlighted with Cyan border, inner layer (8 cells) with Amber border, center cell (13) with Gold dot.
- **CENTER-STAGE HERO**: 5×5 Matrix displaying distinct visual rings.
- **CAUSE**: Narration explains 5x5 as layers: outside border is first layer, 3x3 inside is second, center is left alone.
- **EFFECT / MOTION**: Right card slides in from right. Rings highlight sequentially: Layer 0 (F280), Layer 1 (F424), Center (F531).
- **WHAT MUST NOT APPEAR YET**: Cycle 1 swap arrows or temp variable box.
- **COMPREHENSION HOLD**: Hold to understand the peeling of layers from outer to inner.
- **CLEANUP / EXIT**: None.
- **PERSISTENT STATE**: Layer cards and ring outlines remain active.

### S06_A03_OUTER_CYCLE1_FOCUS (Frames 604..1005)
- **ANCHOR**: `S06_A03_OUTER_CYCLE1_FOCUS` · Frames 604..1005 · Spoken Phrase: *"Let's begin. With the outer layer, the first four connected positions contain top, 1, right, 5, bottom, 25, left, 21."*
- **WHAT APPEARS NOW**: Left stage Active Cycle Card (X: 80..670, Y: 180..615). Outer Layer 4 corners light up: Top (0,0)=1, Right (0,4)=5, Bottom (4,4)=25, Left (4,0)=21.
- **CENTER-STAGE HERO**: 4 corner cells pulsing with cyan/gold glow in 5×5 Matrix.
- **CAUSE**: Narration: 'Let's begin. With the outer layer, the first four connected positions contain top, 1, right, 5, bottom, 25, left, 21.'
- **EFFECT / MOTION**: Left card slides in from left. 4 corner cells pulse with glow simultaneously.
- **WHAT MUST NOT APPEAR YET**: Swap movement or temp variable value.
- **COMPREHENSION HOLD**: Hold to visually connect the 4 corners as a single group.
- **CLEANUP / EXIT**: None.
- **PERSISTENT STATE**: Active Cycle Card tracks current step.

### S06_A04_ROTATION_DIRECTION (Frames 1006..1258)
- **ANCHOR**: `S06_A04_ROTATION_DIRECTION` · Frames 1006..1258 · Spoken Phrase: *"For clockwise rotation, top must go to right, right must go to bottom, bottom must go to left, and left must go to top."*
- **WHAT APPEARS NOW**: Clockwise directional flow arrows connecting corners: Top -> Right -> Bottom -> Left -> Top.
- **CENTER-STAGE HERO**: 4 corners with outer orbital cycle track and directional arrows.
- **CAUSE**: Narration: 'For clockwise rotation, top must go to right, right must go to bottom, bottom must go to left, and left must go to top.'
- **EFFECT / MOTION**: Outer cycle track draws clockwise around the 4 corners.
- **WHAT MUST NOT APPEAR YET**: Direct overwrite or disaster warning.
- **COMPREHENSION HOLD**: Hold to visualize clockwise rotation loop.
- **CLEANUP / EXIT**: None.
- **PERSISTENT STATE**: Directional arrows guide the swap logic.

### S06_A05_OVERWRITE_HAZARD (Frames 1259..1480)
- **ANCHOR**: `S06_A05_OVERWRITE_HAZARD` · Frames 1259..1480 · Spoken Phrase: *"But we cannot write top into right first, because we would destroy the old right value."*
- **WHAT APPEARS NOW**: Warning banner in Left Card: 'CANNOT WRITE TOP TO RIGHT DIRECTLY'. Cell (0,4) flashes warning red.
- **CENTER-STAGE HERO**: Cell (0,4)=5 pulsing with red warning halo.
- **CAUSE**: Narration: 'But we cannot write top into right first, because we would destroy the old right value.'
- **EFFECT / MOTION**: Red pulse on cell (0,4) and warning banner pops in Left Card.
- **WHAT MUST NOT APPEAR YET**: Temp variable box.
- **COMPREHENSION HOLD**: Hold to cement the reason why direct overwrite fails.
- **CLEANUP / EXIT**: Red flash calms down into amber alert.
- **PERSISTENT STATE**: Viewer understands counter-clockwise assignment order necessity.

### S06_A06_SAVE_TOP (Frames 1481..1611)
- **ANCHOR**: `S06_A06_SAVE_TOP` · Frames 1481..1611 · Spoken Phrase: *"So save the top value. Save 1."*
- **WHAT APPEARS NOW**: Auxiliary Variable Box in Left Card: `top_val = matrix[0][0] = 1`. Value 1 is saved.
- **CENTER-STAGE HERO**: Temp box lights up with green glow, holding value 1.
- **CAUSE**: Narration: 'So save the top value. Save 1.'
- **EFFECT / MOTION**: Ghost value 1 glides from (0,0) into `top_val` box.
- **WHAT MUST NOT APPEAR YET**: Movement of 21 into (0,0).
- **COMPREHENSION HOLD**: Hold to confirm top slot (0,0) is now completely safe to overwrite.
- **CLEANUP / EXIT**: None.
- **PERSISTENT STATE**: `top_val = 1` remains in memory box.

### S06_A07_MOVE_LEFT_TO_TOP (Frames 1612..1749)
- **ANCHOR**: `S06_A07_MOVE_LEFT_TO_TOP` · Frames 1612..1749 · Spoken Phrase: *"Now move 21 from left into top,"*
- **WHAT APPEARS NOW**: Step 1 in Left Card: `matrix[0][0] = matrix[4][0] (21)`. Glowing tile 21 glides from (4,0) to (0,0).
- **CENTER-STAGE HERO**: Tile 21 in flight along left edge up to top-left corner.
- **CAUSE**: Narration: 'Now move 21 from left into top,'
- **EFFECT / MOTION**: Tile 21 moves smoothly from (4,0) to (0,0). Matrix cell (0,0) updates to 21.
- **WHAT MUST NOT APPEAR YET**: Movement of 25 into (4,0).
- **COMPREHENSION HOLD**: Hold to see (0,0) successfully populated with its final rotated value 21.
- **CLEANUP / EXIT**: Flight tile dissolves into cell.
- **PERSISTENT STATE**: Cell (0,0) = 21.

### S06_A08_MOVE_BOTTOM_TO_LEFT (Frames 1750..1885)
- **ANCHOR**: `S06_A08_MOVE_BOTTOM_TO_LEFT` · Frames 1750..1885 · Spoken Phrase: *"then move 25 from bottom into left,"*
- **WHAT APPEARS NOW**: Step 2 in Left Card: `matrix[4][0] = matrix[4][4] (25)`. Glowing tile 25 glides from (4,4) to (4,0).
- **CENTER-STAGE HERO**: Tile 25 in flight along bottom edge to bottom-left corner.
- **CAUSE**: Narration: 'then move 25 from bottom into left,'
- **EFFECT / MOTION**: Tile 25 moves smoothly from (4,4) to (4,0). Matrix cell (4,0) updates to 25.
- **WHAT MUST NOT APPEAR YET**: Movement of 5 into (4,4).
- **COMPREHENSION HOLD**: Hold to see (4,0) successfully populated with 25.
- **CLEANUP / EXIT**: Flight tile dissolves into cell.
- **PERSISTENT STATE**: Cell (4,0) = 25.

### S06_A09_MOVE_RIGHT_TO_BOTTOM (Frames 1886..2023)
- **ANCHOR**: `S06_A09_MOVE_RIGHT_TO_BOTTOM` · Frames 1886..2023 · Spoken Phrase: *"then move 5 from right into bottom."*
- **WHAT APPEARS NOW**: Step 3 in Left Card: `matrix[4][4] = matrix[0][4] (5)`. Glowing tile 5 glides from (0,4) to (4,4).
- **CENTER-STAGE HERO**: Tile 5 in flight along right edge down to bottom-right corner.
- **CAUSE**: Narration: 'then move 5 from right into bottom.'
- **EFFECT / MOTION**: Tile 5 moves smoothly from (0,4) to (4,4). Matrix cell (4,4) updates to 5.
- **WHAT MUST NOT APPEAR YET**: Movement of saved top_val into (0,4).
- **COMPREHENSION HOLD**: Hold to see (4,4) successfully populated with 5.
- **CLEANUP / EXIT**: Flight tile dissolves into cell.
- **PERSISTENT STATE**: Cell (4,4) = 5.

### S06_A10_MOVE_TEMP_TO_RIGHT (Frames 2024..2185)
- **ANCHOR**: `S06_A10_MOVE_TEMP_TO_RIGHT` · Frames 2024..2185 · Spoken Phrase: *"And finally, move the save value, 1, into right."*
- **WHAT APPEARS NOW**: Step 4 in Left Card: `matrix[0][4] = top_val (1)`. Saved value 1 glides from memory box into (0,4).
- **CENTER-STAGE HERO**: Tile 1 in flight from temp box into top-right corner (0,4).
- **CAUSE**: Narration: 'And finally, move the save value, 1, into right.'
- **EFFECT / MOTION**: Tile 1 glides into (0,4). Matrix cell (0,4) updates to 1.
- **WHAT MUST NOT APPEAR YET**: Celebratory cycle completion pulse.
- **COMPREHENSION HOLD**: Hold to see all 4 corners now in rotated state.
- **CLEANUP / EXIT**: `top_val` box clears.
- **PERSISTENT STATE**: Cell (0,4) = 1.

### S06_A11_OUTER_CYCLE1_COMPLETE (Frames 2186..2396)
- **ANCHOR**: `S06_A11_OUTER_CYCLE1_COMPLETE` · Frames 2186..2396 · Spoken Phrase: *"The first four -position cycle is complete. The four corners are now in their final rotated positions."*
- **WHAT APPEARS NOW**: Celebratory green glow on all 4 corners. Cycle 1 checkmark badge: `Cycle 1/4 Complete ✓`.
- **CENTER-STAGE HERO**: 4 corners (21, 1, 5, 25) glowing green in 5×5 Matrix.
- **CAUSE**: Narration: 'The first four-position cycle is complete. The four corners are now in their final rotated positions.'
- **EFFECT / MOTION**: Green ring pulse around 4 corners. Checkmark appears in Right Card tracker.
- **WHAT MUST NOT APPEAR YET**: Cycle 2 positions.
- **COMPREHENSION HOLD**: Hold to confirm that corners are permanently rotated and finished.
- **CLEANUP / EXIT**: Pulsing fades into solid green border.
- **PERSISTENT STATE**: 4 corners locked.

### S06_A12_OUTER_CYCLE2_STEP (Frames 2397..2712)
- **ANCHOR**: `S06_A12_OUTER_CYCLE2_STEP` · Frames 2397..2712 · Spoken Phrase: *"Move one position to the right along the top edge. The next connected values are 2, 10, 24, 16."*
- **WHAT APPEARS NOW**: Index offset `i = 1`. 4 connected cells light up: Top (0,1)=2, Right (1,4)=10, Bottom (4,3)=24, Left (3,0)=16.
- **CENTER-STAGE HERO**: Cycle 2 cells highlighted in Cyan.
- **CAUSE**: Narration: 'Move one position to the right along the top edge. The next connected values are 2, 10, 24, 16.'
- **EFFECT / MOTION**: Offset badge updates to `i = 1`. 4 cells illuminate in synchrony.
- **WHAT MUST NOT APPEAR YET**: Execution of Cycle 2 swaps.
- **COMPREHENSION HOLD**: Hold to see the 4 connected positions on each side shifted by 1.
- **CLEANUP / EXIT**: None.
- **PERSISTENT STATE**: Cycle 2 active.

### S06_A13_OUTER_CYCLE2_EXECUTE (Frames 2713..3250)
- **ANCHOR**: `S06_A13_OUTER_CYCLE2_EXECUTE` · Frames 2713..3250 · Spoken Phrase: *"Save 2, 16 moves from left into top. 24 moves from bottom into left. 10 moves from right into bottom. And save 2 moves into right. Second cycle complete."*
- **WHAT APPEARS NOW**: Execution of Cycle 2: `top_val = 2`, 16 -> (0,1), 24 -> (3,0), 10 -> (4,3), saved 2 -> (1,4).
- **CENTER-STAGE HERO**: Simultaneous 4-way glide and matrix cells update to: (0,1)=16, (3,0)=24, (4,3)=10, (1,4)=2.
- **CAUSE**: Narration: 'Save 2, 16 moves from left into top. 24 moves from bottom into left. 10 moves from right into bottom. And save 2 moves into right. Second cycle complete.'
- **EFFECT / MOTION**: 4 tiles glide simultaneously around the track. Cells turn green upon arrival.
- **WHAT MUST NOT APPEAR YET**: Cycle 3 positions.
- **COMPREHENSION HOLD**: Hold to celebrate Cycle 2 completion (8/16 cells locked).
- **CLEANUP / EXIT**: Tiles settle into cells.
- **PERSISTENT STATE**: Cycle 2 cells locked in green.

### S06_A14_OUTER_CYCLE3_STEP (Frames 3251..3484)
- **ANCHOR**: `S06_A14_OUTER_CYCLE3_STEP` · Frames 3251..3484 · Spoken Phrase: *"Move one more position. Now the connected values are 3, 15, 23, 11."*
- **WHAT APPEARS NOW**: Index offset `i = 2`. 4 connected cells light up: Top (0,2)=3, Right (2,4)=15, Bottom (4,2)=23, Left (2,0)=11.
- **CENTER-STAGE HERO**: Cycle 3 cells highlighted in Cyan.
- **CAUSE**: Narration: 'Move one more position. Now the connected values are 3, 15, 23, 11.'
- **EFFECT / MOTION**: Offset badge updates to `i = 2`. 4 cells illuminate.
- **WHAT MUST NOT APPEAR YET**: Execution of Cycle 3 swaps.
- **COMPREHENSION HOLD**: Hold to verify connected quartet at offset 2.
- **CLEANUP / EXIT**: None.
- **PERSISTENT STATE**: Cycle 3 active.

### S06_A15_OUTER_CYCLE3_EXECUTE (Frames 3485..3907)
- **ANCHOR**: `S06_A15_OUTER_CYCLE3_EXECUTE` · Frames 3485..3907 · Spoken Phrase: *"Save 3, 11 moves into top. 23 moves into left. 15 moves into bottom. And save 3 moves into right. Third cycle complete."*
- **WHAT APPEARS NOW**: Execution of Cycle 3: `top_val = 3`, 11 -> (0,2), 23 -> (2,0), 15 -> (4,2), saved 3 -> (2,4).
- **CENTER-STAGE HERO**: Simultaneous 4-way glide and matrix cells update to: (0,2)=11, (2,0)=23, (4,2)=15, (2,4)=3.
- **CAUSE**: Narration: 'Save 3, 11 moves into top. 23 moves into left. 15 moves into bottom. And save 3 moves into right. Third cycle complete.'
- **EFFECT / MOTION**: 4 tiles glide simultaneously. Cells lock in green.
- **WHAT MUST NOT APPEAR YET**: Cycle 4 positions.
- **COMPREHENSION HOLD**: Hold to verify Cycle 3 completion (12/16 cells locked).
- **CLEANUP / EXIT**: Tiles settle.
- **PERSISTENT STATE**: Cycle 3 cells locked in green.

### S06_A16_OUTER_CYCLE4_STEP (Frames 3908..4166)
- **ANCHOR**: `S06_A16_OUTER_CYCLE4_STEP` · Frames 3908..4166 · Spoken Phrase: *"One final cycle for the outer layer. The connected values are 4, 20, 22, 6."*
- **WHAT APPEARS NOW**: Index offset `i = 3` (final offset of outer layer). 4 cells light up: Top (0,3)=4, Right (3,4)=20, Bottom (4,1)=22, Left (1,0)=6.
- **CENTER-STAGE HERO**: Cycle 4 cells highlighted in Cyan.
- **CAUSE**: Narration: 'One final cycle for the outer layer. The connected values are 4, 20, 22, 6.'
- **EFFECT / MOTION**: Offset badge updates to `i = 3`. 4 remaining unrotated border cells illuminate.
- **WHAT MUST NOT APPEAR YET**: Execution of Cycle 4.
- **COMPREHENSION HOLD**: Hold to verify this is the last cycle before hitting the corner.
- **CLEANUP / EXIT**: None.
- **PERSISTENT STATE**: Cycle 4 active.

### S06_A17_OUTER_CYCLE4_EXECUTE (Frames 4167..4498)
- **ANCHOR**: `S06_A17_OUTER_CYCLE4_EXECUTE` · Frames 4167..4498 · Spoken Phrase: *"Save 4, 6 moves into top. 22 moves into left. 20 moves into bottom. And save 4 moves into right."*
- **WHAT APPEARS NOW**: Execution of Cycle 4: `top_val = 4`, 6 -> (0,3), 22 -> (1,0), 20 -> (4,1), saved 4 -> (3,4).
- **CENTER-STAGE HERO**: Simultaneous glide and matrix cells update to: (0,3)=6, (1,0)=22, (4,1)=20, (3,4)=4.
- **CAUSE**: Narration: 'Save 4, 6 moves into top. 22 moves into left. 20 moves into bottom. And save 4 moves into right.'
- **EFFECT / MOTION**: 4 tiles glide simultaneously. Cells lock in green.
- **WHAT MUST NOT APPEAR YET**: Outer layer complete banner.
- **COMPREHENSION HOLD**: Hold to see the entire outer border now fully rotated.
- **CLEANUP / EXIT**: Tiles settle.
- **PERSISTENT STATE**: All 16 outer cells locked.

### S06_A18_OUTER_LAYER_COMPLETE (Frames 4499..4901)
- **ANCHOR**: `S06_A18_OUTER_LAYER_COMPLETE` · Frames 4499..4901 · Spoken Phrase: *"Now the entire outer layer is complete. Every value on this border is already in its final rotated position. So we do not touch this layer again."*
- **WHAT APPEARS NOW**: All 16 outer cells glow bright Green in unison! Right Card updates: `Layer 0: 4/4 Cycles Complete ✓ · 16 Cells Locked`.
- **CENTER-STAGE HERO**: Entire outer border of 5×5 Matrix illuminated in victorious green.
- **CAUSE**: Narration: 'Now the entire outer layer is complete. Every value on this border is already in its final rotated position. So we do not touch this layer again.'
- **EFFECT / MOTION**: Celebratory pulse ripples across the outer border. Outer layer boundary locks.
- **WHAT MUST NOT APPEAR YET**: Inner ring animation.
- **COMPREHENSION HOLD**: Hold to fully comprehend the outer ring is permanently finished and invariant.
- **CLEANUP / EXIT**: Pulse settles into solid green lock.
- **PERSISTENT STATE**: Outer ring locked.

### S06_A19_INNER_LAYER_INTRO (Frames 4902..5251)
- **ANCHOR**: `S06_A19_INNER_LAYER_INTRO` · Frames 4902..5251 · Spoken Phrase: *"Now move one layer inward. The inner layer is a 3 by 3 border. Its first connected values are 7, 9, 19, 17."*
- **WHAT APPEARS NOW**: Focus shifts to 3x3 Inner Layer (`layer = 1`, `left = 1, right = 3, top = 1, bottom = 3`). Outer ring dims slightly (opacity 0.65). 4 inner corners light up: (1,1)=7, (1,3)=9, (3,3)=19, (3,1)=17.
- **CENTER-STAGE HERO**: Inner 3×3 Ring centered inside 5×5 Matrix.
- **CAUSE**: Narration: 'Now move one layer inward. The inner layer is a 3 by 3 border. Its first connected values are 7, 9, 19, 17.'
- **EFFECT / MOTION**: Camera focus / spotlight tightens on inner 3x3 ring. Inner 4 corners glow cyan.
- **WHAT MUST NOT APPEAR YET**: Execution of inner cycle 1.
- **COMPREHENSION HOLD**: Hold to recognize that the identical 4-way swap logic applies to the inner ring.
- **CLEANUP / EXIT**: None.
- **PERSISTENT STATE**: Inner ring active.

### S06_A20_INNER_CYCLE1_EXECUTE (Frames 5252..5671)
- **ANCHOR**: `S06_A20_INNER_CYCLE1_EXECUTE` · Frames 5252..5671 · Spoken Phrase: *"Save 7, 17 moves into top. 19 moves into left. 9 moves into bottom. And save 7 moves into right. First inner cycle complete."*
- **WHAT APPEARS NOW**: Execution of Inner Cycle 1: `top_val = 7`, 17 -> (1,1), 19 -> (3,1), 9 -> (3,3), saved 7 -> (1,3).
- **CENTER-STAGE HERO**: Simultaneous glide in inner ring: (1,1)=17, (3,1)=19, (3,3)=9, (1,3)=7.
- **CAUSE**: Narration: 'Save 7, 17 moves into top. 19 moves into left. 9 moves into bottom. And save 7 moves into right. First inner cycle complete.'
- **EFFECT / MOTION**: 4 inner corner tiles glide simultaneously. Cells lock in green.
- **WHAT MUST NOT APPEAR YET**: Inner cycle 2.
- **COMPREHENSION HOLD**: Hold to verify inner corners rotated.
- **CLEANUP / EXIT**: Tiles settle.
- **PERSISTENT STATE**: Inner corners locked.

### S06_A21_INNER_CYCLE2_STEP (Frames 5672..5926)
- **ANCHOR**: `S06_A21_INNER_CYCLE2_STEP` · Frames 5672..5926 · Spoken Phrase: *"Now the final four position cycle. The values are 8, 14, 18, 12."*
- **WHAT APPEARS NOW**: Offset `i = 1` in inner ring. 4 edge centers light up: Top (1,2)=8, Right (2,3)=14, Bottom (3,2)=18, Left (2,1)=12.
- **CENTER-STAGE HERO**: 4 inner edge center cells illuminated in Cyan.
- **CAUSE**: Narration: 'Now the final four position cycle. The values are 8, 14, 18, 12.'
- **EFFECT / MOTION**: 4 cells illuminate.
- **WHAT MUST NOT APPEAR YET**: Execution of inner cycle 2.
- **COMPREHENSION HOLD**: Hold to see the final 4 cells that need rotating.
- **CLEANUP / EXIT**: None.
- **PERSISTENT STATE**: Inner Cycle 2 active.

### S06_A22_INNER_CYCLE2_EXECUTE (Frames 5927..6358)
- **ANCHOR**: `S06_A22_INNER_CYCLE2_EXECUTE` · Frames 5927..6358 · Spoken Phrase: *"Save 8, 12 moves into top. 18 moves into left. 14 moves into bottom. And save 8 moves into right. The inner layer is now complete."*
- **WHAT APPEARS NOW**: Execution of Inner Cycle 2: `top_val = 8`, 12 -> (1,2), 18 -> (2,1), 14 -> (3,2), saved 8 -> (2,3).
- **CENTER-STAGE HERO**: Simultaneous glide: (1,2)=12, (2,1)=18, (3,2)=14, (2,3)=8. All 8 inner cells now green!
- **CAUSE**: Narration: 'Save 8, 12 moves into top. 18 moves into left. 14 moves into bottom. And save 8 moves into right. The inner layer is now complete.'
- **EFFECT / MOTION**: 4 tiles glide and settle. Inner ring pulses green.
- **WHAT MUST NOT APPEAR YET**: Center cell callout.
- **COMPREHENSION HOLD**: Hold to celebrate inner ring completion (24/25 cells locked).
- **CLEANUP / EXIT**: Tiles settle.
- **PERSISTENT STATE**: Layer 0 and Layer 1 locked in green.

### S06_A23_CENTER_ELEMENT (Frames 6359..6668)
- **ANCHOR**: `S06_A23_CENTER_ELEMENT` · Frames 6359..6668 · Spoken Phrase: *"And 13. The center value was never part of any four position cycle. So it remained exactly where it started."*
- **WHAT APPEARS NOW**: Center cell (2,2)=13 illuminated with Gold/Purple glow + callout badge: `CENTER (2,2) = 13 · 1x1 MATRIX · FIXED`.
- **CENTER-STAGE HERO**: Cell (2,2)=13 at exact geometric center of Matrix.
- **CAUSE**: Narration: 'And 13. The center value was never part of any four position cycle. So it remained exactly where it started.'
- **EFFECT / MOTION**: Gentle pulsing aura around cell 13. All 25 cells are now green.
- **WHAT MUST NOT APPEAR YET**: Full matrix verification display.
- **COMPREHENSION HOLD**: Hold to understand why odd-dimension matrices leave the center untouched.
- **CLEANUP / EXIT**: Callout badge settles.
- **PERSISTENT STATE**: All 25 cells fully rotated.

### S06_A24_FULL_ROTATION_VERIFICATION (Frames 6669..6943)
- **ANCHOR**: `S06_A24_FULL_ROTATION_VERIFICATION` · Frames 6669..6943 · Spoken Phrase: *"The entire matrix has now been rotated 90 degrees clockwise without creating another matrix."*
- **WHAT APPEARS NOW**: Full Matrix Glow + Verification Badge: `ROTATION 100% COMPLETE · 25/25 CELLS MATCH OUTPUT`.
- **CENTER-STAGE HERO**: Complete rotated 5×5 Matrix: Row 0: [21, 16, 11, 6, 1] .. Row 4: [25, 20, 15, 10, 5].
- **CAUSE**: Narration: 'The entire matrix has now been rotated 90 degrees clockwise without creating another matrix.'
- **EFFECT / MOTION**: Matrix glows with full green aura. Output matches expected rotated array exactly.
- **WHAT MUST NOT APPEAR YET**: Summary banner.
- **COMPREHENSION HOLD**: Hold to savor the visual proof of in-place rotation.
- **CLEANUP / EXIT**: None.
- **PERSISTENT STATE**: Verified state.

### S06_A25_ALGORITHM_SUMMARY (Frames 6944..7258)
- **ANCHOR**: `S06_A25_ALGORITHM_SUMMARY` · Frames 6944..7258 · Spoken Phrase: *"The pattern is finish one four position cycle safely, continue across the layer, finish the complete layer, then move inward."*
- **WHAT APPEARS NOW**: Bottom Zone Summary Card (Y: 655..765): `CORE INVARIANT: 1 CYCLE -> 1 RING -> MOVE INWARD · O(1) SPACE`.
- **CENTER-STAGE HERO**: Matrix + Summary Card.
- **CAUSE**: Narration: 'The pattern is finish one four position cycle safely, continue across the layer, finish the complete layer, then move inward.'
- **EFFECT / MOTION**: Bottom card slides up smoothly from below.
- **WHAT MUST NOT APPEAR YET**: Code handoff banner.
- **COMPREHENSION HOLD**: Hold to review the 3-step hierarchical loop structure.
- **CLEANUP / EXIT**: None.
- **PERSISTENT STATE**: Summary card.

### S06_A26_CODE_HANDOFF (Frames 7259..7386)
- **ANCHOR**: `S06_A26_CODE_HANDOFF` · Frames 7259..7386 · Spoken Phrase: *"Now let's translate that exact movement into code."*
- **WHAT APPEARS NOW**: Next Scene Transition Card: `NEXT: SCENE 07 · METHOD 2 CODE (IN-PLACE 4-WAY ROTATION IN PYTHON)`.
- **CENTER-STAGE HERO**: Matrix + Transition Banner.
- **CAUSE**: Narration: 'Now let's translate that exact movement into code.'
- **EFFECT / MOTION**: Handoff banner pulses with gold border.
- **WHAT MUST NOT APPEAR YET**: Scene 07 content.
- **COMPREHENSION HOLD**: Final hold to conclude Scene 06 at Frame 7386.
- **CLEANUP / EXIT**: Clean end of scene.
- **PERSISTENT STATE**: Final frame state.
