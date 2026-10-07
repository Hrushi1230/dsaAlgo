# Scene 05 — Why In-Place is Harder & Deriving 4-Way In-Place Swaps
## Framewise Execution Plan

- **Question:** 014 (Rotate Image - LeetCode 48)
- **Scene:** `05-why-extra-space`
- **Total Duration:** 2,522 frames (84.080s @ 30 FPS)
- **Audio File:** `public/audio/014/05-why-extra-space.mp3`
- **Sync File:** `sync/05-why-extra-space.json` (165 words)
- **Anchor File:** `sync/05-why-extra-space.anchors.json` (19 anchors)

---

### Layout Geometry & Zero-Collision Law

1. **Top Zone (Y: 36..105):**
   - Clean Header Bar: `01 · ARRAYS & HASHING`, `LEETCODE 48 · MEDIUM`, `WHY IN-PLACE IS HARDER · 4-WAY CYCLES`.
   - **Zero-Collision Rule (User Mandate):** Top zone contains strictly metadata and title. No explanation cards or callouts are placed in the top zone. All matrix headers have >= 60px vertical clearance.

2. **Center-Stage Hero Entity: 5×5 Master Matrix (X: 720..1160, Y: 180..605):**
   - Centered directly in the 1920 horizontal space ($X = 960$).
   - `CELL_SIZE = 72px`, `CELL_GAP = 8px`, `PITCH = 80px`. Grid: 392 × 392px.
   - Matrix centered at X: 764. Row headers on left (X: 720..752). Column headers on top (Y: 175..205).
   - All 25 cells clearly visible with numbers 1 to 25.
   - Highlights: Corner 4 cells `(0, 0)=1`, `(0, 4)=5`, `(4, 4)=25`, `(4, 0)=21`.

3. **Left Stage Region (X: 80..670, Y: 180..605):**
   - Width: 590px.
   - Houses the **Direct Overwrite Hazard Card** (Anchors 2..9):
     - Demonstrates the naive overwrite disaster:
       `1 ──► (0, 4) OVERWRITES 5!`
       `Data Loss: 5 is destroyed before it can move!`
     - Hazard Alert Box with red pulse.

4. **Right Stage Region (X: 1210..1840, Y: 180..605):**
   - Width: 630px.
   - Houses the **4-Way Closed Cycle & Temp Solution Card** (Anchors 10..18):
     - Displays the circular cycle:
       `1 ➔ 5 ➔ 25 ➔ 21 ➔ 1`
     - The $O(1)$ Breakthrough:
       `temp = matrix[0][0]`
       `Only 1 temporary variable needed!`

5. **Bottom Zone (Y: 655..765):**
   - Summary Card: `CORE DISCOVERY: 4-WAY CLOSED CYCLES`
     `Rotate all 4 connected positions simultaneously with a single temp variable to achieve O(1) space.`
   - Clearance to Captions (Y: 960..1010): **195px of pristine breathing room**.

---

### Framewise Anchor Plans (Anchors 0 to 18)

#### Anchor 0: S05_METHOD1_STOPPING
- **Frame Range:** 0 .. 170 (0.00s .. 5.68s)
- **Spoken Text:** "The only thing stopping method 1 from being in place is the extra matrix."
- **WHAT APPEARS NOW:**
  - Background chalk grid pattern.
  - Header bar with `WHY IN-PLACE IS HARDER · 4-WAY CYCLES`.
  - 5×5 Master Matrix appears in center stage (X: 764, Y: 215) with neutral styling.
  - Ghost outline on left of where the extra matrix used to be, labeled `EXTRA MATRIX (ELIMINATING...)`.
- **CENTER-STAGE HERO:** Centered 5×5 Master Matrix.
- **CAUSE:** Framing the sole obstacle of Method 1: the extra $O(N^2)$ matrix buffer.
- **EFFECT / MOTION:** Scale and opacity entrance of center matrix.
- **WHAT MUST NOT APPEAR YET:** Overwrite hazard animations.
- **COMPREHENSION HOLD:** Frames 120 .. 170: Focus on single matrix in RAM.
- **CLEANUP / EXIT:** Ghost matrix fades.
- **PERSISTENT STATE:** Centered 5×5 matrix active.

---

#### Anchor 1: S05_WHAT_IF_REMOVE
- **Frame Range:** 185 .. 286 (6.16s .. 9.52s)
- **Spoken Text:** "So what happens if we remove it?"
- **WHAT APPEARS NOW:**
  - Ghost extra matrix disappears completely with a puff indicator.
  - Matrix sub-label updates: `IN-PLACE CHALLENGE: SINGLE MATRIX IN MEMORY`.
  - A question callout card slides in on the left (X: 100..650): `WHAT HAPPENS IF WE DIRECTLY MUTATE?`.
- **CENTER-STAGE HERO:** Solitary matrix in memory.
- **CAUSE:** Provoking the audience to think about direct in-place writes.
- **EFFECT / MOTION:** Smooth slide-in of question card.
- **WHAT MUST NOT APPEAR YET:** Specific cell movement.
- **COMPREHENSION HOLD:** Frames 240 .. 286: Question established.
- **CLEANUP / EXIT:** Question card transitions into hazard demonstration.
- **PERSISTENT STATE:** Matrix and left card active.

---

#### Anchor 2: S05_TRY_DIRECT_MOVE
- **Frame Range:** 307 .. 480 (10.22s .. 16.00s)
- **Spoken Text:** "Suppose we try to move values directly inside the original matrix."
- **WHAT APPEARS NOW:**
  - Left Card transforms into: `DIRECT IN-PLACE EXPERIMENT`.
  - Step indicator: `Try applying (r, c) -> (c, 4 - r) directly without extra buffer`.
  - Cell `(0, 0)` containing `1` lights up gold `#FFD166`.
- **CENTER-STAGE HERO:** Direct in-place experiment card on left.
- **CAUSE:** Setting up the naive attempt.
- **EFFECT / MOTION:** Cell `(0, 0)` pulses in scale.
- **WHAT MUST NOT APPEAR YET:** Value 1 moving over value 5.
- **COMPREHENSION HOLD:** Frames 430 .. 480: Clear focus on cell `(0, 0)`.
- **CLEANUP / EXIT:** Ready for destination pointer.
- **PERSISTENT STATE:** Cell `(0, 0)` active.

---

#### Anchor 3: S05_FIRST_CORNER
- **Frame Range:** 506 .. 542 (16.86s .. 18.08s)
- **Spoken Text:** "Look at the first corner."
- **WHAT APPEARS NOW:**
  - Corner cell `(0, 0)` (`1`) and corner cell `(0, 4)` (`5`) both illuminate.
  - Bracket connects the two top corners.
- **CENTER-STAGE HERO:** Top row corners `(0, 0)` and `(0, 4)`.
- **CAUSE:** Focusing on the first rotation step.
- **EFFECT / MOTION:** Glow on `(0, 0)` and `(0, 4)`.
- **WHAT MUST NOT APPEAR YET:** Value 5 disappearing.
- **COMPREHENSION HOLD:** Frames 525 .. 542: Viewers look at corners.
- **CLEANUP / EXIT:** Trajectory arc initiates.
- **PERSISTENT STATE:** `(0, 0)` and `(0, 4)` active.

---

#### Anchor 4: S05_ONE_TO_FIVE
- **Frame Range:** 563 .. 671 (18.76s .. 22.38s)
- **Spoken Text:** "One needs to move into the current position of 5."
- **WHAT APPEARS NOW:**
  - Animated curved arrow arches from `(0, 0)` to `(0, 4)`: `(0, 0) ──► (0, 4)`.
  - Destination tag at `(0, 4)`: `Target Slot (Currently holds 5)`.
- **CENTER-STAGE HERO:** Trajectory arrow from 1 to 5.
- **CAUSE:** Mathematical destination of `(0, 0)` is `(0, 4)`.
- **EFFECT / MOTION:** SVG path draw of arrow across top row.
- **WHAT MUST NOT APPEAR YET:** Value 5 overwritten.
- **COMPREHENSION HOLD:** Frames 630 .. 671: Path clearly shown.
- **CLEANUP / EXIT:** Cloned tile prepares to land.
- **PERSISTENT STATE:** Arrow connects `(0, 0)` to `(0, 4)`.

---

#### Anchor 5: S05_OVERWRITE_DISASTER
- **Frame Range:** 685 .. 885 (22.82s .. 29.50s)
- **Spoken Text:** "But if we immediately write 1 over 5, the old value 5 disappears."
- **WHAT APPEARS NOW:**
  - Cloned tile `1` lands forcefully on cell `(0, 4)`.
  - Number `5` shatters/fades with red flash `#E63946` and skull/cross hazard icon.
  - Left Card flashes with red warning:
    `⚠️ OVERWRITE HAZARD!`
    `matrix[0][4] = 1 OVERWROTE 5!`
    `Value 5 is DESTROYED in memory!`
- **CENTER-STAGE HERO:** Cell `(0, 4)` flashing red with destroyed value 5.
- **CAUSE:** Destructive direct assignment `matrix[0][4] = matrix[0][0]`.
- **EFFECT / MOTION:** Red shockwave ripple and shatter animation on 5.
- **WHAT MUST NOT APPEAR YET:** The cycle explanation.
- **COMPREHENSION HOLD:** Frames 830 .. 885: Audience viscerally understands data loss.
- **CLEANUP / EXIT:** Red pulse settles into cautionary warning tag.
- **PERSISTENT STATE:** Value 5 shown as lost.

---

#### Anchor 6: S05_STILL_NEED_FIVE
- **Frame Range:** 900 .. 1051 (30.00s .. 35.04s)
- **Spoken Text:** "And we still need 5 because 5 must move to another position."
- **WHAT APPEARS NOW:**
  - A ghost silhouette of `5` appears with a question mark: `Where was 5 supposed to go? ➔ (4, 4)`.
  - Arrow points from `(0, 4)` down to bottom-right corner `(4, 4)` (`25`).
  - Left Card callout: `Unread dependency: 5 is required to update (4, 4)!`.
- **CENTER-STAGE HERO:** Ghost 5 and its required move to `(4, 4)`.
- **CAUSE:** Explaining why data destruction breaks the entire algorithm.
- **EFFECT / MOTION:** Ghost 5 floats with pulsing dashed outline down to `(4, 4)`.
- **WHAT MUST NOT APPEAR YET:** Cycle closure.
- **COMPREHENSION HOLD:** Frames 990 .. 1051: Inability to proceed without 5 realized.
- **CLEANUP / EXIT:** Ghost 5 stays visible.
- **PERSISTENT STATE:** Downward trajectory from `(0, 4)` to `(4, 4)` visible.

---

#### Anchor 7: S05_OVERWRITE_PROBLEM
- **Frame Range:** 1071 .. 1161 (35.70s .. 38.70s)
- **Spoken Text:** "So this creates an overwrite problem."
- **WHAT APPEARS NOW:**
  - Left Card header: `THE OVERWRITE PROBLEM (READ-AFTER-WRITE CONFLICT)`.
  - Diagram shows: `Writing cell X destroys cell Y before cell Y can be read.`
- **CENTER-STAGE HERO:** Left Card explaining read-after-write conflict.
- **CAUSE:** In-place mutations must not destroy unread inputs.
- **EFFECT / MOTION:** Alert icon pulse.
- **WHAT MUST NOT APPEAR YET:** 4-way cycle derivation.
- **COMPREHENSION HOLD:** Frames 1120 .. 1161: Theoretical conflict identified.
- **CLEANUP / EXIT:** Left card transitions to cycle discovery.
- **PERSISTENT STATE:** Overwrite problem clearly documented.

---

#### Anchor 8: S05_NOT_INDEPENDENT
- **Frame Range:** 1182 .. 1271 (39.40s .. 42.36s)
- **Spoken Text:** "The values are not moving independently."
- **WHAT APPEARS NOW:**
  - Center Matrix resets to clean initial state (all 25 numbers restored).
  - All 4 corners illuminate simultaneously in electric cyan: `1`, `5`, `25`, `21`.
  - Sub-label: `These 4 cells are interdependent!`.
- **CENTER-STAGE HERO:** 4 corners glowing together in Center Matrix.
- **CAUSE:** Revealing that cells move in interdependent sets.
- **EFFECT / MOTION:** Synchronized pulse on all 4 corners.
- **WHAT MUST NOT APPEAR YET:** Arrows connecting all 4.
- **COMPREHENSION HOLD:** Frames 1230 .. 1271: 4 corners stand out from the grid.
- **CLEANUP / EXIT:** Connective arrows prepare to draw.
- **PERSISTENT STATE:** 4 corners highlighted.

---

#### Anchor 9: S05_THEY_ARE_CONNECTED
- **Frame Range:** 1291 .. 1322 (43.02s .. 44.06s)
- **Spoken Text:** "They are connected."
- **WHAT APPEARS NOW:**
  - Faint connective cycle lines appear joining the 4 corners:
    `(0, 0) ──► (0, 4) ──► (4, 4) ──► (4, 0) ──► (0, 0)`.
- **CENTER-STAGE HERO:** Square boundary track connecting the 4 corners.
- **CAUSE:** Geometric relationship of 90-degree rotations.
- **EFFECT / MOTION:** Subtle drawing of the bounding cycle square.
- **WHAT MUST NOT APPEAR YET:** Step-by-step element chain.
- **COMPREHENSION HOLD:** Frames 1305 .. 1322: Square loop visible.
- **CLEANUP / EXIT:** Ready for step 1 of cycle.
- **PERSISTENT STATE:** Cycle track visible.

---

#### Anchor 10: S05_CYCLE_1_TO_5
- **Frame Range:** 1342 .. 1415 (44.72s .. 47.18s)
- **Spoken Text:** "1 moves to the position of 5."
- **WHAT APPEARS NOW:**
  - Top arrow lights up gold `#FFD166`: `1 ──► 5`.
  - Right Card appears (X: 1210..1840):
    `4-WAY CLOSED CYCLE DISCOVERY`
    `Step 1: 1 ──► 5 [Top Row]`
- **CENTER-STAGE HERO:** Segment 1 of the cycle.
- **CAUSE:** First movement in the cycle.
- **EFFECT / MOTION:** Glowing particle moves from 1 to 5.
- **WHAT MUST NOT APPEAR YET:** Segments 2, 3, 4.
- **COMPREHENSION HOLD:** Frames 1380 .. 1415: Segment 1 clear.
- **CLEANUP / EXIT:** Advances to segment 2.
- **PERSISTENT STATE:** Segment 1 active on Right Card.

---

#### Anchor 11: S05_CYCLE_5_TO_25
- **Frame Range:** 1427 .. 1514 (47.56s .. 50.48s)
- **Spoken Text:** "5 moves to the position of 25."
- **WHAT APPEARS NOW:**
  - Right arrow lights up gold: `5 ──► 25`.
  - Right Card updates:
    `Step 2: 5 ──► 25 [Right Col]`
- **CENTER-STAGE HERO:** Segment 2 of the cycle.
- **CAUSE:** Second movement in the cycle.
- **EFFECT / MOTION:** Glowing particle moves from 5 down to 25.
- **WHAT MUST NOT APPEAR YET:** Segments 3, 4.
- **COMPREHENSION HOLD:** Frames 1470 .. 1514: Segment 2 clear.
- **CLEANUP / EXIT:** Advances to segment 3.
- **PERSISTENT STATE:** Segments 1 and 2 active.

---

#### Anchor 12: S05_CYCLE_25_TO_21
- **Frame Range:** 1534 .. 1633 (51.14s .. 54.42s)
- **Spoken Text:** "25 moves to the position of 21."
- **WHAT APPEARS NOW:**
  - Bottom arrow lights up gold: `25 ──► 21`.
  - Right Card updates:
    `Step 3: 25 ──► 21 [Bottom Row]`
- **CENTER-STAGE HERO:** Segment 3 of the cycle.
- **CAUSE:** Third movement in the cycle.
- **EFFECT / MOTION:** Glowing particle moves from 25 left to 21.
- **WHAT MUST NOT APPEAR YET:** Segment 4.
- **COMPREHENSION HOLD:** Frames 1590 .. 1633: Segment 3 clear.
- **CLEANUP / EXIT:** Advances to segment 4.
- **PERSISTENT STATE:** Segments 1, 2, 3 active.

---

#### Anchor 13: S05_CYCLE_21_TO_1
- **Frame Range:** 1653 .. 1778 (55.10s .. 59.26s)
- **Spoken Text:** "And 21 moves back to the original position of 1."
- **WHAT APPEARS NOW:**
  - Left arrow lights up gold: `21 ──► 1`.
  - Right Card updates:
    `Step 4: 21 ──► 1 [Left Col]`
- **CENTER-STAGE HERO:** Segment 4 of the cycle.
- **CAUSE:** Final movement closing the cycle.
- **EFFECT / MOTION:** Glowing particle moves from 21 up to 1.
- **WHAT MUST NOT APPEAR YET:** Solution summary.
- **COMPREHENSION HOLD:** Frames 1720 .. 1778: Complete closed loop established.
- **CLEANUP / EXIT:** Full loop illuminates.
- **PERSISTENT STATE:** All 4 cycle segments active.

---

#### Anchor 14: S05_CLOSED_CYCLE
- **Frame Range:** 1778 .. 1882 (59.26s .. 62.74s)
- **Spoken Text:** "So these 4 positions form a closed cycle."
- **WHAT APPEARS NOW:**
  - The entire 4-corner loop illuminates in radiant emerald shimmer `#52B788`.
  - Center badge pops inside the square: `CLOSED 4-ELEMENT CYCLE 🔄`.
  - Subtext: `Length = 4 · Invariant for all 90° rotations`.
- **CENTER-STAGE HERO:** The closed cycle as a single unified mathematical object.
- **CAUSE:** Four 90-degree rotations equal a 360-degree identity return.
- **EFFECT / MOTION:** Circular rotating dash array around the cycle.
- **WHAT MUST NOT APPEAR YET:** The temp variable solution.
- **COMPREHENSION HOLD:** Frames 1830 .. 1882: Audience sees the cycle clearly.
- **CLEANUP / EXIT:** Cycle remains glowing.
- **PERSISTENT STATE:** Closed cycle highlighted.

---

#### Anchor 15: S05_SOLUTION_DISCOVERED
- **Frame Range:** 1909 .. 1951 (63.62s .. 65.02s)
- **Spoken Text:** "That gives us the solution."
- **WHAT APPEARS NOW:**
  - Right Card banner: `THE IN-PLACE SOLUTION DISCOVERED!`.
  - Gold sparkle accents on the 4 corners.
- **CENTER-STAGE HERO:** Solution discovery banner.
- **CAUSE:** Shifting from problem diagnosis to algorithmic solution.
- **EFFECT / MOTION:** Scale pop on banner.
- **WHAT MUST NOT APPEAR YET:** Temp variable details.
- **COMPREHENSION HOLD:** Frames 1930 .. 1951: Excitement of insight.
- **CLEANUP / EXIT:** Transitions to temp rotation logic.
- **PERSISTENT STATE:** Solution mode active.

---

#### Anchor 16: S05_ROTATE_FOUR_TOGETHER
- **Frame Range:** 1972 .. 2200 (65.72s .. 73.32s)
- **Spoken Text:** "Instead of moving one value alone, we rotate all 4 connected values together."
- **WHAT APPEARS NOW:**
  - Visual simulation: All 4 corner numbers (`1`, `5`, `25`, `21`) rotate simultaneously clockwise!
    - `1` glides to `(0, 4)`
    - `5` glides to `(4, 4)`
    - `25` glides to `(4, 0)`
    - `21` glides to `(0, 0)`
  - Right Card shows: `4-Way Simultaneous Rotation (1 Step per Cycle)`.
- **CENTER-STAGE HERO:** 4 values rotating together in synchrony.
- **CAUSE:** Grouping into independent 4-cycles avoids cascading overwrites.
- **EFFECT / MOTION:** Synchronized 4-corner circular glide along the cycle track.
- **WHAT MUST NOT APPEAR YET:** Temp variable memory box.
- **COMPREHENSION HOLD:** Frames 2120 .. 2200: Values land in rotated positions.
- **CLEANUP / EXIT:** Values settle into new spots.
- **PERSISTENT STATE:** 4-way rotation proven visually.

---

#### Anchor 17: S05_ONE_TEMP_VARIABLE
- **Frame Range:** 2218 .. 2381 (73.92s .. 79.38s)
- **Spoken Text:** "And to prevent data loss, we only need to save one value temporarily."
- **WHAT APPEARS NOW:**
  - A compact Memory Box appears on the left (X: 180..580, Y: 460..590):
    `TEMP BUFFER: temp = matrix[0][0]`
    `Only 1 Integer Saved in RAM! ➔ O(1) Extra Space!`
  - Subtext: `No extra N × N matrix required!`.
  - Bottom Zone Card appears (X: 360..1560, Y: 655..765):
    `BREAKTHROUGH: O(1) AUXILIARY MEMORY ACHIEVED ✓`
    `Rotate each 4-element cycle using 1 temporary variable.`
- **CENTER-STAGE HERO:** Temp variable box and $O(1)$ memory breakthrough.
- **CAUSE:** Resolving the LeetCode in-place constraint with $O(1)$ memory.
- **EFFECT / MOTION:** Emerald glow on `temp = 1` box; bottom card entrance.
- **WHAT MUST NOT APPEAR YET:** Scene 06 handoff.
- **COMPREHENSION HOLD:** Frames 2320 .. 2381: Audience grasps the $O(1)$ space triumph.
- **CLEANUP / EXIT:** Prepares handoff.
- **PERSISTENT STATE:** $O(1)$ breakthrough card visible.

---

#### Anchor 18: S05_TRACE_HANDOFF
- **Frame Range:** 2407 .. 2522 (80.22s .. 84.08s)
- **Spoken Text:** "Now let's trace the complete in -place rotation."
- **WHAT APPEARS NOW:**
  - Right Card transitions into **Handoff Banner**:
    `UP NEXT: METHOD 2 COMPLETE TRACE ──►`
    `How to partition the entire matrix into concentric rings & 4-way cycles!`
  - All 4 corners pulse in emerald green.
- **CENTER-STAGE HERO:** Handoff banner to Scene 06.
- **CAUSE:** Seamless bridge to full Method 2 execution.
- **EFFECT / MOTION:** Glow on handoff banner.
- **WHAT MUST NOT APPEAR YET:** Scene 06 concentric rings.
- **COMPREHENSION HOLD:** Frames 2480 .. 2522: Clean completion of Scene 05.
- **CLEANUP / EXIT:** Scene ends at frame 2522.
- **PERSISTENT STATE:** Complete scene visual state ready for scene cut.

---

### Invariant Checks & Zero-Collision Assurance

1. **Zero Collision Layout:**
   - Top Bar: Y: 36..105 (metadata badges only, no explanation cards).
   - Center Matrix: Centered at X: 764, Y: 215..607.
   - Left Card: X: 80..670, Y: 180..605 (Width: 590px, 94px clearance to center matrix).
   - Right Card: X: 1210..1840, Y: 180..605 (Width: 630px, 54px clearance to center matrix).
   - Bottom Card: Y: 655..765 (clearance of 48px below matrix, clearance of 195px above captions).
   - Captions: Y: 960..1010.
   - **ZERO COLLISIONS across all 1920 × 1080 coordinates!**
2. **Pedagogical Alignment:**
   - Visualizes the exact overwrite disaster (1 overwriting 5).
   - Shows the 4-corner closed cycle ($1 \to 5 \to 25 \to 21 \to 1$).
   - Proves the $O(1)$ space solution with a single `temp` variable.
