# Frame-by-Frame Scene Plan: Scene 06 — DNF Idea (The Four Invariant Regions)

> **File:** `questions/01-arrays-hashing/011-sort-colors/plans/06-dnf-idea_FRAMEWISE_PLAN.md`  
> **Scene ID:** `011-Scene06-DnfIdea`  
> **Audio Source:** `questions/01-arrays-hashing/011-sort-colors/sync/06-dnf-idea.mp3`  
> **Sync JSON:** `questions/01-arrays-hashing/011-sort-colors/sync/06-dnf-idea.json`  
> **Anchors Source:** `questions/01-arrays-hashing/011-sort-colors/sync/06-dnf-idea.anchors.json`  
> **Total Duration:** 3,592 frames @ 30 FPS (119.72 seconds)  
> **Total Anchors:** 52 semantic anchors (Zero guessing, verified frame ranges)

---

## 1. Pedagogical Objective & Course Architecture

Scene 06 presents the conceptual soul of the Dutch National Flag (DNF) / Three-Pointer algorithm:
1. **The Three Pointers:** `low`, `mid`, `high`.
2. **The Four Invariant Regions:**
   - Region 0: `0 .. low - 1` $\rightarrow$ Confirmed 0s (Red `#FF7675`)
   - Region 1: `low .. mid - 1` $\rightarrow$ Confirmed 1s (White `#F8F6F0`)
   - Region U: `mid .. high` $\rightarrow$ UNKNOWN / UNPROCESSED (Amber `theme.pivot` dashed)
   - Region 2: `high + 1 .. n - 1` $\rightarrow$ Confirmed 2s (Cyan `#5CE1E6`)
3. **The 3 Inspection Rules on `nums[mid]`:**
   - Value is 0: Swap with `nums[low]`, `low++`, `mid++`.
   - Value is 1: No swap, `mid++`.
   - Value is 2: Swap with `nums[high]`, `high--`.
4. **The Golden Climax Rule:** Why `mid` does **NOT** increment when swapping with `high`!
5. **Pointer Roles & Convergence:** The unknown region shrinks until `mid > high`.

---

## 2. Spatial Composition & Zero-Collision Invariants (Rule 16 Compliant)

```text
Canvas: 1920 × 1080 (Chalkboard Background)

TOP BAR (Y: 36 .. 76):
  - Left: "QUESTION 011 · SORT COLORS" & "APPROACH 2 · THE THREE-POINTER (DNF) IDEA"
  - Right: Algorithm Status ("OPTIMAL 1-PASS IN-PLACE ✓")

ZONE A: ARRAY TRACK HERO (Y: 130 .. 340)
  - 10-Slot Array Track (Width: 1244px, Left: 338px):
    * Title Header (Y: 130..154) with marginBottom: 46px
    * Partition Bands (top: -34px relative to slots)
    * Slots (Y: 200..300, 110x100px)
    * Index Row: bottom (Y: 308..332)
    * Pointer Lane (Y: 336..380): low, mid, high (Arrow stem 34px, distinct lanes)
  - Array Track Bottom Bound: Y: 380px

ZONE B: CENTER-STAGE DYNAMIC PEDAGOGICAL CARDS (Y: 410 .. 720)
  - Safe Clearance: Starts at Y: 410px (Clean 30px-50px gap below pointers/indices!)
  - Bounding Box Alignment: Width 1244px, Left 338px (Perfect visual symmetry with array)
  - Sub-stage 1 (F0..F227): Pointer Roles Card (low, mid, high)
  - Sub-stage 2 (F227..F1458): The Four Invariant Regions (4 Partition Boxes)
  - Sub-stage 3 (F1458..F2489): The 3 Action Rules (Case 0, Case 1, Case 2 with Swap Arcs)
  - Sub-stage 4 (F2489..F3080): The Golden Rule: Why Mid Does Not Move on 2! (Unknown Swap Climax)
  - Sub-stage 5 (F3080..F3592): Convergence & Region Shrinking Synthesis Card

BOTTOM THIRD (Y: 720 .. 980):
  - Spacious breathing room (260px void) maintaining a premium chalkboard aesthetic

BOTTOM CAPTIONS (Y: 980 .. 1040):
  - Exact word-synced karaoke captions
```

---

## 3. Frame-by-Frame Pedagogical Choreography (All 52 Anchors)

### Anchor 1: S06_START (F0 .. F67, pause to F94)
- **ANCHOR:** "Now let's build the one-pass idea." (F0..F67)
- **WHAT APPEARS NOW:** Top Header renders Question & Approach 2 badges. Raw input array `[2, 0, 2, 1, 1, 0, 2, 0, 1, 2]` appears centered at `trackTop: 130`. Center stage displays "APPROACH 2: DUTCH NATIONAL FLAG INITIALIZATION".
- **CENTER-STAGE HERO:** Raw Input Array Hero.
- **CAUSE:** Speaker introduces the one-pass solution.
- **EFFECT / MOTION:** Board illuminates; array slots fade on with chalk outline.
- **WHAT MUST NOT APPEAR YET:** Pointers low, mid, high; region partition bands.
- **COMPREHENSION HOLD:** F67..F94 (27 frames): Learner absorbs that this array will be sorted in a single traversal.
- **CLEANUP / EXIT:** Approach 1 remnants cleared.
- **PERSISTENT STATE:** Centered array track at Y: 130.

---

### Anchor 2: S06_THREE_POINTERS (F94 .. F140, pause to F155)
- **ANCHOR:** "We will use three pointers," (F94..F140)
- **WHAT APPEARS NOW:** Center card draws a 3-column container: `THREE COORDINATING POINTERS`.
- **CENTER-STAGE HERO:** Pointer System Concept Box.
- **CAUSE:** Speaker announces the multi-pointer strategy.
- **EFFECT / MOTION:** RoughBox draws on; 3 empty slots for the pointers appear.
- **WHAT MUST NOT APPEAR YET:** Specific pointer names low/mid/high.
- **COMPREHENSION HOLD:** F140..F155 (15 frames): Learner anticipates the 3 pointer roles.
- **CLEANUP / EXIT:** None.
- **PERSISTENT STATE:** Array + 3-pointer container.

---

### Anchor 3: S06_LOW (F155 .. F166, pause to F175)
- **ANCHOR:** "low," (F155..F166)
- **WHAT APPEARS NOW:** `low` pointer appears at index 0 (lane 0, `#FF7675` red/salmon). First column in card illuminates: `low: Boundary for 0s`.
- **CENTER-STAGE HERO:** Pointer `low` at slot [0].
- **CAUSE:** Speaker names the first pointer.
- **EFFECT / MOTION:** Parametric arrow points up into slot 0; label `low` pulses.
- **WHAT MUST NOT APPEAR YET:** mid, high labels on array.
- **COMPREHENSION HOLD:** F166..F175 (9 frames): Natural pause.
- **CLEANUP / EXIT:** None.
- **PERSISTENT STATE:** `low` active at index 0.

---

### Anchor 4: S06_MID (F175 .. F186, pause to F186)
- **ANCHOR:** "mid" (F175..F186)
- **WHAT APPEARS NOW:** `mid` pointer appears at index 0 (lane 1, `theme.pivot` amber). Second column in card illuminates: `mid: Active Scanner`.
- **CENTER-STAGE HERO:** Pointer `mid` at slot [0].
- **CAUSE:** Speaker names the scanning pointer.
- **EFFECT / MOTION:** `mid` arrow draws on slot 0 staggered vertically on lane 1 (no text collision).
- **WHAT MUST NOT APPEAR YET:** high pointer.
- **COMPREHENSION HOLD:** F186 (0 frames): Immediately continues to "and high".
- **CLEANUP / EXIT:** None.
- **PERSISTENT STATE:** `low` (lane 0) and `mid` (lane 1) both at index 0.

---

### Anchor 5: S06_HIGH (F186 .. F211, pause to F227)
- **ANCHOR:** "and high." (F186..F211)
- **WHAT APPEARS NOW:** `high` pointer appears at index 9 (lane 0, `theme.cyan` cyan). Third column illuminates: `high: Boundary for 2s`.
- **CENTER-STAGE HERO:** Pointer `high` at slot [9].
- **CAUSE:** Speaker names the right boundary pointer.
- **EFFECT / MOTION:** `high` arrow draws pointing up into slot 9.
- **WHAT MUST NOT APPEAR YET:** Four regions brackets.
- **COMPREHENSION HOLD:** F211..F227 (16 frames): Learner sees all 3 pointers stationed: `low=0`, `mid=0`, `high=9`.
- **CLEANUP / EXIT:** None.
- **PERSISTENT STATE:** 3 pointers active on array.

---

### Anchor 6: S06_FOUR_REGIONS (F227 .. F334, pause to F355)
- **ANCHOR:** "But these three pointers create four different regions." (F227..F334)
- **WHAT APPEARS NOW:** Center stage transforms: a 4-region architecture diagram appears (`FOUR INVARIANT REGIONS`).
- **CENTER-STAGE HERO:** The 4-Region Architecture Matrix.
- **CAUSE:** Speaker reveals the core geometric insight of 3 pointers dividing an array into 4 zones.
- **EFFECT / MOTION:** The 3-column card morphs into a wide 4-segment overview bar.
- **WHAT MUST NOT APPEAR YET:** Mathematical boundary formulas (`low-1`, `mid-1`).
- **COMPREHENSION HOLD:** F334..F355 (21 frames): Learner digests the concept of 4 concurrent zones.
- **CLEANUP / EXIT:** Pointer intro card.
- **PERSISTENT STATE:** Array + 4-region overview bar.

---

### Anchor 7: S06_REG0_TITLE (F355 .. F386, pause to F395)
- **ANCHOR:** "The first region," (F355..F386)
- **WHAT APPEARS NOW:** Box 1 in center card highlights in red: `REGION 0`.
- **CENTER-STAGE HERO:** Region 0 Card.
- **CAUSE:** Speaker introduces the first zone.
- **EFFECT / MOTION:** Leftmost segment pulses with red chalk.
- **WHAT MUST NOT APPEAR YET:** Specific range formula.
- **COMPREHENSION HOLD:** F386..F395 (9 frames): Brief audio pause.
- **CLEANUP / EXIT:** None.
- **PERSISTENT STATE:** Region 0 highlighted.

---

### Anchor 8: S06_REG0_RANGE (F395 .. F491, pause to F506)
- **ANCHOR:** "from the beginning, up to low, minus one," (F395..F491)
- **WHAT APPEARS NOW:** Mathematical range formula appears: `[0 .. low - 1]`. Above array track, partition bracket `0 .. low - 1` prepares.
- **CENTER-STAGE HERO:** Range formula `[0 .. low - 1]`.
- **CAUSE:** Speaker defines the index boundaries of Region 0.
- **EFFECT / MOTION:** Range text draws in bold red mono font.
- **WHAT MUST NOT APPEAR YET:** The content of Region 0 ("confirmed zeros").
- **COMPREHENSION HOLD:** F491..F506 (15 frames): Learner absorbs the left boundary rule.
- **CLEANUP / EXIT:** None.
- **PERSISTENT STATE:** Region 0 defined as `0 .. low - 1`.

---

### Anchor 9: S06_REG0_CONTENT (F506 .. F569, pause to F589)
- **ANCHOR:** "contains only confirmed zeros." (F506..F569)
- **WHAT APPEARS NOW:** Tag `ALL ZEROES (0s)` appears in red chalk box. Top bracket displays `0s ONLY`.
- **CENTER-STAGE HERO:** Region 0 Semantic Guarantee.
- **CAUSE:** Speaker locks the invariant for Region 0.
- **EFFECT / MOTION:** Red checkmark icon illuminates; sample 0 badge pulses.
- **WHAT MUST NOT APPEAR YET:** Region 1 details.
- **COMPREHENSION HOLD:** F569..F589 (20 frames): Learner registers: Left of `low` is strictly 0.
- **CLEANUP / EXIT:** None.
- **PERSISTENT STATE:** Region 0 invariant locked: `[0 .. low - 1] -> 0s`.

---

### Anchor 10: S06_REG1_TITLE (F589 .. F623, pause to F633)
- **ANCHOR:** "The second region," (F589..F623)
- **WHAT APPEARS NOW:** Box 2 in center card highlights in white chalk: `REGION 1`.
- **CENTER-STAGE HERO:** Region 1 Card.
- **CAUSE:** Speaker moves to the second zone.
- **EFFECT / MOTION:** Second segment pulses.
- **WHAT MUST NOT APPEAR YET:** Region 1 boundary formula.
- **COMPREHENSION HOLD:** F623..F633 (10 frames): Pause.
- **CLEANUP / EXIT:** None.
- **PERSISTENT STATE:** Region 1 highlighted.

---

### Anchor 11: S06_REG1_RANGE (F633 .. F721, pause to F734)
- **ANCHOR:** "from low, up to mid, minus one," (F633..F721)
- **WHAT APPEARS NOW:** Mathematical range formula appears: `[low .. mid - 1]`.
- **CENTER-STAGE HERO:** Range formula `[low .. mid - 1]`.
- **CAUSE:** Speaker defines Region 1 boundaries.
- **EFFECT / MOTION:** Text draws in crisp white chalkboard font.
- **WHAT MUST NOT APPEAR YET:** Content of Region 1.
- **COMPREHENSION HOLD:** F721..F734 (13 frames): Learner connects `low` to `mid - 1`.
- **CLEANUP / EXIT:** None.
- **PERSISTENT STATE:** Region 1 defined as `low .. mid - 1`.

---

### Anchor 12: S06_REG1_CONTENT (F734 .. F784, pause to F784)
- **ANCHOR:** "contains only confirmed ones." (F734..F784)
- **WHAT APPEARS NOW:** Tag `ALL ONES (1s)` appears in white chalk box. Top bracket displays `1s ONLY`.
- **CENTER-STAGE HERO:** Region 1 Semantic Guarantee.
- **CAUSE:** Speaker locks the invariant for Region 1.
- **EFFECT / MOTION:** White checkmark appears; 1 badge pulses.
- **WHAT MUST NOT APPEAR YET:** Region U (Unknown).
- **COMPREHENSION HOLD:** F784 (0 frames): Fluid transition to third region.
- **CLEANUP / EXIT:** None.
- **PERSISTENT STATE:** Region 1 invariant locked: `[low .. mid - 1] -> 1s`.

---

### Anchor 13: S06_REGU_TITLE (F784 .. F830, pause to F836)
- **ANCHOR:** "The third region," (F784..F830)
- **WHAT APPEARS NOW:** Box 3 in center card highlights in amber/gold: `REGION U (UNKNOWN)`.
- **CENTER-STAGE HERO:** Region U Card.
- **CAUSE:** Speaker introduces the active exploration zone.
- **EFFECT / MOTION:** Third segment pulses with gold dashed border.
- **WHAT MUST NOT APPEAR YET:** Region U range.
- **COMPREHENSION HOLD:** F830..F836 (6 frames): Quick breath.
- **CLEANUP / EXIT:** None.
- **PERSISTENT STATE:** Region U highlighted.

---

### Anchor 14: S06_REGU_RANGE (F836 .. F887, pause to F901)
- **ANCHOR:** "from mid, up to high," (F836..F887)
- **WHAT APPEARS NOW:** Range formula appears: `[mid .. high]`.
- **CENTER-STAGE HERO:** Range formula `[mid .. high]`.
- **CAUSE:** Speaker defines Region U boundaries.
- **EFFECT / MOTION:** Text draws in bold amber font; bracket spans between `mid` and `high`.
- **WHAT MUST NOT APPEAR YET:** The "unknown" explanation.
- **COMPREHENSION HOLD:** F887..F901 (14 frames): Learner sees that `mid` and `high` encompass the work remaining.
- **CLEANUP / EXIT:** None.
- **PERSISTENT STATE:** Region U defined as `mid .. high`.

---

### Anchor 15: S06_REGU_CONTENT (F901 .. F932, pause to F952)
- **ANCHOR:** "is still unknown." (F901..F932)
- **WHAT APPEARS NOW:** Tag `UNKNOWN / UNPROCESSED (?)` appears in gold dashed box.
- **CENTER-STAGE HERO:** Unknown State Guarantee.
- **CAUSE:** Speaker identifies the core property of Region U.
- **EFFECT / MOTION:** Question mark `?` glows in amber chalk.
- **WHAT MUST NOT APPEAR YET:** Explanation of unclassified values.
- **COMPREHENSION HOLD:** F932..F952 (20 frames): Learner reflects on the unprocessed window.
- **CLEANUP / EXIT:** None.
- **PERSISTENT STATE:** Region U invariant locked: `[mid .. high] -> UNKNOWN`.

---

### Anchor 16: S06_REGU_EXPLAIN (F952 .. F1025, pause to F1044)
- **ANCHOR:** "We have not classified those values yet." (F952..F1025)
- **WHAT APPEARS NOW:** Sub-callout: `UNCLASSIFIED RAW INPUT (Each value could be 0, 1, or 2)`.
- **CENTER-STAGE HERO:** Unclassified State Breakdown.
- **CAUSE:** Speaker clarifies why this region is unknown.
- **EFFECT / MOTION:** Slots between `mid` and `high` pulse with subtle mystery overlay.
- **WHAT MUST NOT APPEAR YET:** Region 2 details.
- **COMPREHENSION HOLD:** F1025..F1044 (19 frames): Deep comprehension hold.
- **CLEANUP / EXIT:** None.
- **PERSISTENT STATE:** Region U clearly understood as the active workspace.

---

### Anchor 17: S06_REG2_TITLE (F1044 .. F1078, pause to F1088)
- **ANCHOR:** "And the last region," (F1044..F1078)
- **WHAT APPEARS NOW:** Box 4 highlights in cyan chalk: `REGION 2`.
- **CENTER-STAGE HERO:** Region 2 Card.
- **CAUSE:** Speaker introduces the final region.
- **EFFECT / MOTION:** Fourth segment pulses in cyan.
- **WHAT MUST NOT APPEAR YET:** Boundary formula.
- **COMPREHENSION HOLD:** F1078..F1088 (10 frames): Pause.
- **CLEANUP / EXIT:** None.
- **PERSISTENT STATE:** Region 2 highlighted.

---

### Anchor 18: S06_REG2_RANGE (F1088 .. F1115, pause to F1135)
- **ANCHOR:** "after high," (F1088..F1115)
- **WHAT APPEARS NOW:** Range formula appears: `[high + 1 .. n - 1]`.
- **CENTER-STAGE HERO:** Range formula `[high + 1 .. n - 1]`.
- **CAUSE:** Speaker defines right boundary.
- **EFFECT / MOTION:** Cyan text draws in mono font.
- **WHAT MUST NOT APPEAR YET:** Content of Region 2.
- **COMPREHENSION HOLD:** F1115..F1135 (20 frames): Learner understands the right flank.
- **CLEANUP / EXIT:** None.
- **PERSISTENT STATE:** Region 2 defined as `high + 1 .. n - 1`.

---

### Anchor 19: S06_REG2_CONTENT (F1135 .. F1181, pause to F1205)
- **ANCHOR:** "contains only confirmed twos." (F1135..F1181)
- **WHAT APPEARS NOW:** Tag `ALL TWOS (2s)` appears in cyan chalk box. Top bracket displays `2s ONLY`.
- **CENTER-STAGE HERO:** Region 2 Semantic Guarantee.
- **CAUSE:** Speaker locks the invariant for Region 2.
- **EFFECT / MOTION:** Cyan checkmark illuminates; 2 badge pulses.
- **WHAT MUST NOT APPEAR YET:** Recap summary.
- **COMPREHENSION HOLD:** F1181..F1205 (24 frames): Learner sees all 4 regions fully defined.
- **CLEANUP / EXIT:** None.
- **PERSISTENT STATE:** All 4 regions locked.

---

### Anchor 20: S06_DIVIDED_RECAP (F1205 .. F1303, pause to F1326)
- **ANCHOR:** "So at every moment, our array is divided like this." (F1205..F1303)
- **WHAT APPEARS NOW:** The 4 partition bands lock simultaneously across the array and card:
  `[ 0s: 0..low-1 | 1s: low..mid-1 | UNKNOWN: mid..high | 2s: high+1..n-1 ]`
- **CENTER-STAGE HERO:** Grand 4-Region Unified Invariant Strip.
- **CAUSE:** Speaker synthesizes the complete array partition.
- **EFFECT / MOTION:** All 4 colored bands glow synchronously in harmony.
- **WHAT MUST NOT APPEAR YET:** The action rules (Case 0/1/2).
- **COMPREHENSION HOLD:** F1303..F1326 (23 frames): Learner takes in the complete mental model.
- **CLEANUP / EXIT:** Intermediate step cards.
- **PERSISTENT STATE:** Unified 4-region strip active.

---

### Anchor 21: S06_RECAP_0 (F1326 .. F1340, pause to F1357)
- **ANCHOR:** "Zeros," (F1326..F1340)
- **WHAT APPEARS NOW:** Region 0 segment pulses bright red (`0s`).
- **CENTER-STAGE HERO:** Red Zone Pulse.
- **CAUSE:** Spoken rhythmic enumeration.
- **EFFECT / MOTION:** Scale 1.04 pulse on Region 0 badge.
- **WHAT MUST NOT APPEAR YET:** Action rules.
- **COMPREHENSION HOLD:** F1340..F1357 (17 frames): Rhythmic cadence.
- **CLEANUP / EXIT:** None.
- **PERSISTENT STATE:** Region 0 highlighted.

---

### Anchor 22: S06_RECAP_1 (F1357 .. F1367, pause to F1390)
- **ANCHOR:** "ones," (F1357..F1367)
- **WHAT APPEARS NOW:** Region 1 segment pulses bright white (`1s`).
- **CENTER-STAGE HERO:** White Zone Pulse.
- **CAUSE:** Spoken rhythmic enumeration.
- **EFFECT / MOTION:** Scale 1.04 pulse on Region 1 badge.
- **WHAT MUST NOT APPEAR YET:** Action rules.
- **COMPREHENSION HOLD:** F1367..F1390 (23 frames): Cadence.
- **CLEANUP / EXIT:** None.
- **PERSISTENT STATE:** Region 1 highlighted.

---

### Anchor 23: S06_RECAP_U (F1390 .. F1423, pause to F1423)
- **ANCHOR:** "unknown and" (F1390..F1423)
- **WHAT APPEARS NOW:** Region U segment pulses bright amber (`?`).
- **CENTER-STAGE HERO:** Amber Zone Pulse.
- **CAUSE:** Spoken rhythmic enumeration.
- **EFFECT / MOTION:** Scale 1.04 pulse on Region U badge.
- **WHAT MUST NOT APPEAR YET:** Action rules.
- **COMPREHENSION HOLD:** F1423 (0 frames): Direct flow into twos.
- **CLEANUP / EXIT:** None.
- **PERSISTENT STATE:** Region U highlighted.

---

### Anchor 24: S06_RECAP_2 (F1423 .. F1441, pause to F1458)
- **ANCHOR:** "twos." (F1423..F1441)
- **WHAT APPEARS NOW:** Region 2 segment pulses bright cyan (`2s`).
- **CENTER-STAGE HERO:** Cyan Zone Pulse.
- **CAUSE:** Spoken rhythmic enumeration finishes.
- **EFFECT / MOTION:** Scale 1.04 pulse on Region 2 badge.
- **WHAT MUST NOT APPEAR YET:** Action rules.
- **COMPREHENSION HOLD:** F1441..F1458 (17 frames): Full invariant locked.
- **CLEANUP / EXIT:** None.
- **PERSISTENT STATE:** Complete 4-zone model established.

---

### Anchor 25: S06_JOB_SIMPLE (F1458 .. F1492, pause to F1505)
- **ANCHOR:** "Now the job is simple." (F1458..F1492)
- **WHAT APPEARS NOW:** Card stage transitions: `THE 3 ACTION RULES (TRIGGERED BY nums[mid])`.
- **CENTER-STAGE HERO:** Action Rule Controller Card.
- **CAUSE:** Speaker shifts from state definition to algorithm dynamics.
- **EFFECT / MOTION:** Smooth fade/slide transition into action rule mode.
- **WHAT MUST NOT APPEAR YET:** Specific rule cases.
- **COMPREHENSION HOLD:** F1492..F1505 (13 frames): Learner focuses on the decision engine.
- **CLEANUP / EXIT:** 4-region static breakdown.
- **PERSISTENT STATE:** Action rule stage active at Y: 410.

---

### Anchor 26: S06_INSPECT_MID (F1505 .. F1565, pause to F1582)
- **ANCHOR:** "We only inspect the value at mid." (F1505..F1565)
- **WHAT APPEARS NOW:** Golden spotlight rings slot `nums[mid]`. Indicator card shows: `CURRENT INSPECTION: nums[mid]`.
- **CENTER-STAGE HERO:** Inspection Lens on `nums[mid]`.
- **CAUSE:** Speaker identifies `nums[mid]` as the sole decision driver.
- **EFFECT / MOTION:** Pointer `mid` arrow pulses; slot border glows amber.
- **WHAT MUST NOT APPEAR YET:** Case 0 / Case 1 / Case 2 resolutions.
- **COMPREHENSION HOLD:** F1565..F1582 (17 frames): Learner understands: All actions depend ONLY on `nums[mid]`.
- **CLEANUP / EXIT:** None.
- **PERSISTENT STATE:** `nums[mid]` highlighted as the decision pivot.

---

### Anchor 27: S06_CASE0_IF (F1582 .. F1638, pause to F1645)
- **ANCHOR:** "If nums at mid is zero," (F1582..F1638)
- **WHAT APPEARS NOW:** Rule Card 1 activates in red: `CASE 0: nums[mid] == 0`.
- **CENTER-STAGE HERO:** Case 0 Decision Card.
- **CAUSE:** Speaker evaluates the first value condition.
- **EFFECT / MOTION:** Red chalk border frames Rule 1.
- **WHAT MUST NOT APPEAR YET:** Swap mechanics.
- **COMPREHENSION HOLD:** F1638..F1645 (7 frames): Pause.
- **CLEANUP / EXIT:** None.
- **PERSISTENT STATE:** Case 0 condition active.

---

### Anchor 28: S06_CASE0_WHY (F1645 .. F1702, pause to F1712)
- **ANCHOR:** "zero belongs on the left." (F1645..F1702)
- **WHAT APPEARS NOW:** Directional chalk arrow points left: `TARGET: LEFT REGION (0s)`.
- **CENTER-STAGE HERO:** Left Routing Vector.
- **CAUSE:** Algorithmic rationale: 0s belong in Region 0.
- **EFFECT / MOTION:** RoughCurve draws a left-pointing arrow toward index 0.
- **WHAT MUST NOT APPEAR YET:** Pointer increment steps.
- **COMPREHENSION HOLD:** F1702..F1712 (10 frames): Rationale verified.
- **CLEANUP / EXIT:** None.
- **PERSISTENT STATE:** Target destination established as Region 0.

---

### Anchor 29: S06_CASE0_SWAP (F1712 .. F1777, pause to F1786)
- **ANCHOR:** "So we swap it with the value at low," (F1712..F1777)
- **WHAT APPEARS NOW:** Action line: `1. swap(nums[mid], nums[low])`. Animated curved swap arc links slot `mid` and slot `low`.
- **CENTER-STAGE HERO:** In-place Swap Flight Arc (`mid` $\leftrightarrow$ `low`).
- **CAUSE:** Algorithmic instruction to place 0 into Region 0 boundary.
- **EFFECT / MOTION:** Flight curve draws between `mid` and `low`; values animate along the arc.
- **WHAT MUST NOT APPEAR YET:** Pointer advances.
- **COMPREHENSION HOLD:** F1777..F1786 (9 frames): Learner sees the 0 safely placed into the left flank.
- **CLEANUP / EXIT:** Swap arc settles.
- **PERSISTENT STATE:** Values swapped.

---

### Anchor 30: S06_CASE0_LOW_INC (F1786 .. F1827, pause to F1827)
- **ANCHOR:** "then move low forward" (F1786..F1827)
- **WHAT APPEARS NOW:** Action line: `2. low++ (expands 0s region)`. Pointer `low` advances right by 1 index (`low: 0 -> 1`).
- **CENTER-STAGE HERO:** Pointer `low` Movement.
- **CAUSE:** Expanding confirmed 0s region.
- **EFFECT / MOTION:** `low` pointer glides smoothly from slot 0 to slot 1.
- **WHAT MUST NOT APPEAR YET:** `mid` pointer advance.
- **COMPREHENSION HOLD:** F1827 (0 frames): Immediate transition to mid.
- **CLEANUP / EXIT:** None.
- **PERSISTENT STATE:** `low` at 1.

---

### Anchor 31: S06_CASE0_MID_INC (F1827 .. F1888, pause to F1903)
- **ANCHOR:** "and move mid forward." (F1827..F1888)
- **WHAT APPEARS NOW:** Action line: `3. mid++ (scans next unknown)`. Pointer `mid` advances right by 1 index (`mid: 0 -> 1`).
- **CENTER-STAGE HERO:** Pointer `mid` Movement.
- **CAUSE:** Current slot is now sorted; scan moves forward.
- **EFFECT / MOTION:** `mid` pointer glides from slot 0 to slot 1.
- **WHAT MUST NOT APPEAR YET:** Case 1.
- **COMPREHENSION HOLD:** F1888..F1903 (15 frames): Full Case 0 resolution held for review.
- **CLEANUP / EXIT:** Case 0 active highlight settles.
- **PERSISTENT STATE:** Case 0 complete: `swap(mid, low)`, `low++`, `mid++`.

---

### Anchor 32: S06_CASE1_IF (F1903 .. F1954, pause to F1965)
- **ANCHOR:** "If nums at mid is one," (F1903..F1954)
- **WHAT APPEARS NOW:** Rule Card 2 activates in white: `CASE 1: nums[mid] == 1`.
- **CENTER-STAGE HERO:** Case 1 Decision Card.
- **CAUSE:** Speaker evaluates the second value condition.
- **EFFECT / MOTION:** White chalk box illuminates Rule 2.
- **WHAT MUST NOT APPEAR YET:** No-swap explanation.
- **COMPREHENSION HOLD:** F1954..F1965 (11 frames): Pause.
- **CLEANUP / EXIT:** None.
- **PERSISTENT STATE:** Case 1 condition active.

---

### Anchor 33: S06_CASE1_WHY (F1965 .. F2019, pause to F2040)
- **ANCHOR:** "it already belongs in the middle." (F1965..F2019)
- **WHAT APPEARS NOW:** Rationale tag: `ALREADY IN CORRECT ZONE: Region 1 (Middle)`.
- **CENTER-STAGE HERO:** Inherent Middle Placement Rationale.
- **CAUSE:** 1 is naturally between 0 and 2.
- **EFFECT / MOTION:** Region 1 bracket highlights with green checkmark.
- **WHAT MUST NOT APPEAR YET:** Pointer action.
- **COMPREHENSION HOLD:** F2019..F2040 (21 frames): Learner understands: 1 requires no rearrangement!
- **CLEANUP / EXIT:** None.
- **PERSISTENT STATE:** 1 validated in middle.

---

### Anchor 34: S06_CASE1_NO_SWAP (F2040 .. F2089, pause to F2116)
- **ANCHOR:** "So we do not swap anything." (F2040..F2089)
- **WHAT APPEARS NOW:** Emphatic badge: `❌ NO SWAP NEEDED`.
- **CENTER-STAGE HERO:** Zero-Operation Optimization Badge.
- **CAUSE:** Efficiency principle: don't move what is already in place.
- **EFFECT / MOTION:** Badge draws on; array slots remain stationary.
- **WHAT MUST NOT APPEAR YET:** Pointer move.
- **COMPREHENSION HOLD:** F2089..F2116 (27 frames): Deep comprehension: 1s are the easiest case.
- **CLEANUP / EXIT:** None.
- **PERSISTENT STATE:** No-swap confirmed.

---

### Anchor 35: S06_CASE1_MID_INC (F2116 .. F2165, pause to F2183)
- **ANCHOR:** "We only move mid forward." (F2116..F2165)
- **WHAT APPEARS NOW:** Action line: `1. mid++ (expands 1s region)`. Pointer `mid` glides right by 1 index.
- **CENTER-STAGE HERO:** Pointer `mid` Advance.
- **CAUSE:** 1 is absorbed into Region 1; scanner moves to next unknown.
- **EFFECT / MOTION:** `mid` arrow glides smoothly to next slot.
- **WHAT MUST NOT APPEAR YET:** Case 2.
- **COMPREHENSION HOLD:** F2165..F2183 (18 frames): Case 1 complete.
- **CLEANUP / EXIT:** Case 1 active highlight settles.
- **PERSISTENT STATE:** Case 1 complete: `mid++`.

---

### Anchor 36: S06_CASE2_IF (F2183 .. F2250, pause to F2266)
- **ANCHOR:** "And if nums at mid is two," (F2183..F2250)
- **WHAT APPEARS NOW:** Rule Card 3 activates in cyan: `CASE 2: nums[mid] == 2`.
- **CENTER-STAGE HERO:** Case 2 Decision Card.
- **CAUSE:** Speaker evaluates the third value condition.
- **EFFECT / MOTION:** Cyan chalk border frames Rule 3.
- **WHAT MUST NOT APPEAR YET:** Swap action.
- **COMPREHENSION HOLD:** F2250..F2266 (16 frames): Pause.
- **CLEANUP / EXIT:** None.
- **PERSISTENT STATE:** Case 2 condition active.

---

### Anchor 37: S06_CASE2_WHY (F2266 .. F2308, pause to F2308)
- **ANCHOR:** "two belongs on the right." (F2266..F2308)
- **WHAT APPEARS NOW:** Directional chalk arrow points right: `TARGET: RIGHT REGION (2s)`.
- **CENTER-STAGE HERO:** Right Routing Vector.
- **CAUSE:** Algorithmic rationale: 2s belong in Region 2.
- **EFFECT / MOTION:** RoughCurve draws a right-pointing arrow toward `high`.
- **WHAT MUST NOT APPEAR YET:** Swap execution.
- **COMPREHENSION HOLD:** F2308 (0 frames): Direct flow into swap action.
- **CLEANUP / EXIT:** None.
- **PERSISTENT STATE:** Target destination established as Region 2.

---

### Anchor 38: S06_CASE2_SWAP (F2308 .. F2387, pause to F2393)
- **ANCHOR:** "So we swap it with the value at high," (F2308..F2387)
- **WHAT APPEARS NOW:** Action line: `1. swap(nums[mid], nums[high])`. Long flight curve arc links `mid` and `high`.
- **CENTER-STAGE HERO:** In-place Swap Flight Arc (`mid` $\leftrightarrow$ `high`).
- **CAUSE:** Algorithmic instruction to place 2 into Region 2 boundary.
- **EFFECT / MOTION:** Flight curve draws across array; values swap along the arc.
- **WHAT MUST NOT APPEAR YET:** Pointer decrement.
- **COMPREHENSION HOLD:** F2387..F2393 (6 frames): Quick breath.
- **CLEANUP / EXIT:** Swap arc settles.
- **PERSISTENT STATE:** Value 2 placed at `high`.

---

### Anchor 39: S06_CASE2_HIGH_DEC (F2393 .. F2461, pause to F2489)
- **ANCHOR:** "then move high one step left." (F2393..F2461)
- **WHAT APPEARS NOW:** Action line: `2. high-- (expands 2s region leftward)`. Pointer `high` glides left by 1 index (`high: 9 -> 8`).
- **CENTER-STAGE HERO:** Pointer `high` Leftward Movement.
- **CAUSE:** 2 is locked into Region 2; boundary moves inward.
- **EFFECT / MOTION:** `high` arrow glides left.
- **WHAT MUST NOT APPEAR YET:** The "mid does not move" rule.
- **COMPREHENSION HOLD:** F2461..F2489 (28 frames): Learner sees Region 2 expand leftward.
- **CLEANUP / EXIT:** None.
- **PERSISTENT STATE:** `high` decremented.

---

### Anchor 40: S06_IMPORTANT_RULE (F2489 .. F2552, pause to F2572)
- **ANCHOR:** "But here is the most important rule." (F2489..F2552)
- **WHAT APPEARS NOW:** Dramatic warning banner: `⚠️ THE GOLDEN INVARIANT RULE`. Center stage darkens slightly; spotlight shines on pointer `mid`.
- **CENTER-STAGE HERO:** Golden Rule Attention Banner.
- **CAUSE:** Speaker prepares learner for the most counter-intuitive, commonly failed interview concept.
- **EFFECT / MOTION:** Amber warning box pulses; lens zooms in 1.05x on `mid`.
- **WHAT MUST NOT APPEAR YET:** The answer why.
- **COMPREHENSION HOLD:** F2552..F2572 (20 frames): High anticipation pause.
- **CLEANUP / EXIT:** Normal rule cards.
- **PERSISTENT STATE:** High-attention state.

---

### Anchor 41: S06_MID_DOES_NOT_MOVE (F2572 .. F2611, pause to F2627)
- **ANCHOR:** "Mid does not move." (F2572..F2611)
- **WHAT APPEARS NOW:** Big red strike-out text: `DO NOT INCREMENT MID! (mid STAYS AT CURRENT INDEX)`. Lock icon attaches to pointer `mid`.
- **CENTER-STAGE HERO:** Frozen Pointer `mid` with Lock Icon.
- **CAUSE:** Speaker states the counter-intuitive invariant rule.
- **EFFECT / MOTION:** `mid` arrow pulses; a chalk anchor icon clamps it to the board.
- **WHAT MUST NOT APPEAR YET:** The explanation.
- **COMPREHENSION HOLD:** F2611..F2627 (16 frames): Learner confronts the anomaly: Why did mid move in Case 0 and Case 1, but NOT in Case 2?
- **CLEANUP / EXIT:** None.
- **PERSISTENT STATE:** `mid` locked in place.

---

### Anchor 42: S06_WHY_QUESTION (F2627 .. F2640, pause to F2654)
- **ANCHOR:** "Why?" (F2627..F2640)
- **WHAT APPEARS NOW:** Huge gold question mark `WHY?` animates in center stage.
- **CENTER-STAGE HERO:** The Core Mystery: `WHY?`.
- **CAUSE:** Direct rhetorical question from speaker.
- **EFFECT / MOTION:** Chalk question mark draws on with spring bounce.
- **WHAT MUST NOT APPEAR YET:** The causal explanation.
- **COMPREHENSION HOLD:** F2640..F2654 (14 frames): Mental tension hold.
- **CLEANUP / EXIT:** None.
- **PERSISTENT STATE:** Question hanging on board.

---

### Anchor 43: S06_WHY_ANSWER_COMING (F2654 .. F2807, pause to F2827)
- **ANCHOR:** "Because the value coming from the high side was still inside the unknown region." (F2654..F2807)
- **WHAT APPEARS NOW:** Deep anatomical breakdown: The value just swapped from `high` into `mid` came from `[mid .. high]` — the UNKNOWN REGION!
- **CENTER-STAGE HERO:** Unknown Origin Trajectory Visualization.
- **CAUSE:** Revealing the exact origin of the swapped value.
- **EFFECT / MOTION:** A dashed reverse curve tracks the value's origin from Region U into `mid`.
- **WHAT MUST NOT APPEAR YET:** Next step instruction.
- **COMPREHENSION HOLD:** F2807..F2827 (20 frames): "Aha!" realization moment for the learner.
- **CLEANUP / EXIT:** Why question mark.
- **PERSISTENT STATE:** Origin traced to Unknown zone.

---

### Anchor 44: S06_DO_NOT_KNOW_YET (F2827 .. F2866, pause to F2866)
- **ANCHOR:** "We do not know yet" (F2827..F2866)
- **WHAT APPEARS NOW:** Mystery badge on current `mid`: `? VALUE UNVERIFIED`.
- **CENTER-STAGE HERO:** Unverified Slot Badge.
- **CAUSE:** Speaker underscores uncertainty.
- **EFFECT / MOTION:** Shimmering chalk pulse on slot `mid`.
- **WHAT MUST NOT APPEAR YET:** 0, 1, 2 breakdown.
- **COMPREHENSION HOLD:** F2866 (0 frames): Direct flow into value possibilities.
- **CLEANUP / EXIT:** None.
- **PERSISTENT STATE:** Unverified badge active.

---

### Anchor 45: S06_WHETHER_0_1_2 (F2866 .. F2996, pause to F3015)
- **ANCHOR:** "whether that new value is zero, one or two." (F2866..F2996)
- **WHAT APPEARS NOW:** Three possibility bubbles branch from slot `mid`:
  - `Could be 0? (Needs to go left!)`
  - `Could be 1? (Belongs here!)`
  - `Could be 2? (Needs to go right again!)`
- **CENTER-STAGE HERO:** 3-Way Branching Possibility Tree.
- **CAUSE:** Concrete proof of why skipping `mid` would violate correctness.
- **EFFECT / MOTION:** 3 chalk bubbles pop up above slot `mid` in red, white, cyan.
- **WHAT MUST NOT APPEAR YET:** The "must inspect first" conclusion.
- **COMPREHENSION HOLD:** F2996..F3015 (19 frames): Irrefutable proof absorbed.
- **CLEANUP / EXIT:** None.
- **PERSISTENT STATE:** 3 possibilities visible.

---

### Anchor 46: S06_MUST_INSPECT (F3015 .. F3065, pause to F3080)
- **ANCHOR:** "So we must inspect it first." (F3015..F3065)
- **WHAT APPEARS NOW:** Concluding banner: `✔ BY STAYING AT MID, NEXT ITERATION AUTOMATICALLY CLASSIFIES IT!`.
- **CENTER-STAGE HERO:** Correctness Resolution Banner.
- **CAUSE:** Climax resolution of the golden rule.
- **EFFECT / MOTION:** Checkmark illuminates; lock icon unlocks into active scanning state.
- **WHAT MUST NOT APPEAR YET:** Final role recap.
- **COMPREHENSION HOLD:** F3065..F3080 (15 frames): Full satisfaction hold.
- **CLEANUP / EXIT:** Possibility bubbles.
- **PERSISTENT STATE:** Golden rule completely solved and clear.

---

### Anchor 47: S06_COMPLETE_IDEA (F3080 .. F3126, pause to F3126)
- **ANCHOR:** "This is the complete idea." (F3080..F3126)
- **WHAT APPEARS NOW:** Center stage transitions to the Master Summary Card: `DUTCH NATIONAL FLAG: THE COMPLETE ARCHITECTURE`.
- **CENTER-STAGE HERO:** Master Architecture Summary Card.
- **CAUSE:** Transition to final synthesis.
- **EFFECT / MOTION:** Broad framing box draws on with triple chalk stroke.
- **WHAT MUST NOT APPEAR YET:** Pointer role breakdown.
- **COMPREHENSION HOLD:** F3126 (0 frames): Direct flow into pointer roles.
- **CLEANUP / EXIT:** Golden rule cards.
- **PERSISTENT STATE:** Master summary card active.

---

### Anchor 48: S06_ROLE_LOW (F3126 .. F3192, pause to F3204)
- **ANCHOR:** "Low protects the zero region," (F3126..F3192)
- **WHAT APPEARS NOW:** Pillar 1 highlights in red: `LOW = GUARDIAN OF 0s (Maintains 0..low-1 invariant)`.
- **CENTER-STAGE HERO:** Pillar `low` Definition.
- **CAUSE:** Speaker recaps pointer 1's invariant responsibility.
- **EFFECT / MOTION:** Red shield icon draws next to `low`.
- **WHAT MUST NOT APPEAR YET:** mid / high pillars.
- **COMPREHENSION HOLD:** F3192..F3204 (12 frames): Cadence.
- **CLEANUP / EXIT:** None.
- **PERSISTENT STATE:** Pillar `low` locked.

---

### Anchor 49: S06_ROLE_MID (F3204 .. F3260, pause to F3289)
- **ANCHOR:** "mid scans the unknown region," (F3204..F3260)
- **WHAT APPEARS NOW:** Pillar 2 highlights in amber: `MID = ACTIVE DISCOVERY SCANNER (Inspects mid..high)`.
- **CENTER-STAGE HERO:** Pillar `mid` Definition.
- **CAUSE:** Speaker recaps pointer 2's invariant responsibility.
- **EFFECT / MOTION:** Amber radar/magnifying glass icon draws next to `mid`.
- **WHAT MUST NOT APPEAR YET:** Pillar high.
- **COMPREHENSION HOLD:** F3260..F3289 (29 frames): Cadence.
- **CLEANUP / EXIT:** None.
- **PERSISTENT STATE:** Pillar `mid` locked.

---

### Anchor 50: S06_ROLE_HIGH (F3289 .. F3349, pause to F3371)
- **ANCHOR:** "and high protects the two region." (F3289..F3349)
- **WHAT APPEARS NOW:** Pillar 3 highlights in cyan: `HIGH = GUARDIAN OF 2s (Maintains high+1..n-1 invariant)`.
- **CENTER-STAGE HERO:** Pillar `high` Definition.
- **CAUSE:** Speaker recaps pointer 3's invariant responsibility.
- **EFFECT / MOTION:** Cyan shield icon draws next to `high`.
- **WHAT MUST NOT APPEAR YET:** Shrinking animation.
- **COMPREHENSION HOLD:** F3349..F3371 (22 frames): All 3 pointer roles verified.
- **CLEANUP / EXIT:** None.
- **PERSISTENT STATE:** All 3 pillars locked.

---

### Anchor 51: S06_UNKNOWN_SHRINKS (F3371 .. F3506, pause to F3506)
- **ANCHOR:** "As the algorithm runs, the unknown region keeps getting smaller" (F3371..F3506)
- **WHAT APPEARS NOW:** Animated convergence demonstration: Region U bracket `[mid .. high]` visibly contracts inward as arrows push from both sides.
- **CENTER-STAGE HERO:** Contracting Unknown Region Animation.
- **CAUSE:** Demonstrating termination and loop variant.
- **EFFECT / MOTION:** Width of Region U smoothly reduces from 10 slots down to 2 slots; amber dashed band shrinks.
- **WHAT MUST NOT APPEAR YET:** Final termination card.
- **COMPREHENSION HOLD:** F3506 (0 frames): Fluid continuation.
- **CLEANUP / EXIT:** None.
- **PERSISTENT STATE:** Region U nearly vanished.

---

### Anchor 52: S06_UNTIL_NOTHING_LEFT (F3506 .. F3592, pause to F3592)
- **ANCHOR:** "until nothing is left to classify." (F3506..F3592)
- **WHAT APPEARS NOW:** Termination condition banner:
  `TERMINATION CONDITION: mid > high`
  `UNKNOWN REGION SIZE = 0 · ARRAY FULLY SORTED IN ONE PASS!`
  Gateway teaser to Scene 07: `NEXT: SCENE 07 · FULL STEP-BY-STEP DNF TRACE ➔`
- **CENTER-STAGE HERO:** Grand Termination & 1-Pass Victory Card.
- **CAUSE:** Concluding proof that the algorithm terminates with 100% sorted guarantees.
- **EFFECT / MOTION:** Final chalk glow; mint checkmarks illuminate across all 3 sorted partitions.
- **WHAT MUST NOT APPEAR YET:** Scene 07 contents.
- **COMPREHENSION HOLD:** F3560..F3592 (32 frames): Final comprehension hold before scene ends.
- **CLEANUP / EXIT:** None.
- **PERSISTENT STATE:** End of Scene 06. Ready for Scene 07 Trace.

---

## 4. Invariant Verification Table

| Invariant Requirement | Implementation Enforcement in Scene 06 | Verified |
|---|---|---|
| **Zero Card Overlap** | Array track bottom is at Y: 380. Card stage strictly begins at Y: 410 (minimum 30px-50px clearance). | **PASS** |
| **Canvas Balance** | Visuals occupy Y: 130 to Y: 720. 260px breathing room maintained above captions (Y: 980). | **PASS** |
| **Pointers Separation** | `low` on lane 0, `mid` on lane 1, `high` on lane 0. Zero label collisions. | **PASS** |
| **Top Clearance** | `marginBottom: 46px` on array title header completely avoids top partition brackets. | **PASS** |
| **Exact Audio Sync** | 52 anchors mapped 1:1 with `06-dnf-idea.anchors.json` (F0..F3592). Zero frame guessing. | **PASS** |
| **Remotion Determinism** | 100% frame-derived interpolation and spring dynamics. Zero CSS animations or transitions. | **PASS** |
