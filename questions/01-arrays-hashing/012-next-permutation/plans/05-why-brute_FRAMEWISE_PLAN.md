# Scene 05 · Framewise Scene Plan: Why Brute Force Fails → Derive Better Direction
**Question:** 012 · Next Permutation (LeetCode 31)  
**Audio File:** `remotion-project/public/audio/012/05-why-brute.mp3`  
**Duration:** 75,600 ms | **Total Frames:** 2,268 @ 30 FPS  
**Sync Anchor Source:** `sync/05-why-brute.anchors.json`  
**Mandatory Schema:** 9-Section Strict Framewise Specification per Anchor  

---

## Spatial Canvas Architecture & Zero-Collision Layout

```text
+-----------------------------------------------------------------------------+
| Y: 36..72   ProblemOpenerShell / Top Header Badge                           |
|             "01 · ARRAYS & HASHING / #012 · Next Permutation (LC 31)"       |
|             [ APPROACH 1 · BRUTE FORCE LIMITATION ]                         |
+-----------------------------------------------------------------------------+
| Y: 96..130  Dynamic Subtitle Topic / Section Title                          |
|             "ANALYSIS: FACTORIAL EXPLOSION & MEMORY BURDEN"                 |
+-----------------------------------------------------------------------------+
| Y: 155..770 MAIN CENTER-STAGE HERO ZONE (615px height)                      |
|                                                                             |
|  [PHASE 1: F0..F971] WHY BRUTE FORCE FAILS (Factorial Explosion & Space)     |
|   - Left Hero Card (W: 860, H: 590): Mathematical Permutation Growth        |
|     * N distinct items -> N! permutations formula                           |
|     * Factorial growth comparison table: N=3 (6), N=5 (120), N=10 (3.6M)    |
|   - Right Hero Card (W: 860, H: 590): Memory & Space Violation              |
|     * Storing N! tuples in memory violates O(1) auxiliary space             |
|     * Waste contrast: generating ALL arrangements just to move +1 step!     |
|                                                                             |
|  [PHASE 2: F971..F1765] FIRST PRINCIPLES: WHAT DOES "NEXT" MEAN?            |
|   - Master Array [1, 3, 2] centered at Y: 220                               |
|   - Definition Box: "Smallest Valid Increase"                               |
|   - Positional Jump Contrast: Left vs. Right Change                         |
|     * Left change [3, 1, 2]: huge jump (+180 units) -> UNNECESSARILY LARGE  |
|     * Right change [2, 1, 3]: minimal jump (+81 units) -> OPTIMAL TARGET    |
|   - Principle Rule Card: "Change as far to the right as possible"           |
|                                                                             |
|  [PHASE 3: F1765..F2268] THE FIRST OPTIMAL CLUE                             |
|   - Master Array [1, 3, 2] with Right-to-Left Discovery Arrow               |
|   - Scanning from right: idx 2 (2) -> idx 1 (3)                             |
|   - Unresolved Question Card: "Where is a larger arrangement possible?"     |
|   - Handoff Card to Scene 06: "Now let's build the optimal idea carefully." |
+-----------------------------------------------------------------------------+
| Y: 790..910 Dynamic Bottom Pedagogical Banner / Clue Takeaway               |
+-----------------------------------------------------------------------------+
| Y: 980      Captions Container (Karaoke Word-Level Timing)                  |
+-----------------------------------------------------------------------------+
```

---

## Anchor-by-Anchor Framewise Specification

### Anchor 01: `S05_N_DISTINCT`
- **Frame Range:** `[0, 103)` (103 frames, 3.43s) | Spoken: `[0, 81]`, Pause: 22f
- **Spoken Narration Anchor:** `"If the array has n distinct values,"`
- **ANCHOR:** `S05_N_DISTINCT` (Trace: `WHY-01`)
- **WHAT APPEARS NOW:** Clean board transition from Scene 04. Top Header badge displays `APPROACH 1 · BRUTE FORCE LIMITATION`. Center stage displays initial chalk hero card with title `PERMUTATION COUNT FOR N DISTINCT VALUES`.
- **CENTER-STAGE HERO:** Input-size variable `n` displayed in prominent chalk typography (`n distinct values`).
- **CAUSE:** Narration introduces worst-case distinct permutation counting.
- **EFFECT / MOTION:** `RoughCard` with cyan hand-drawn `RoughBox` chalk outline fades in (`scale: 0.95 -> 1.0`, `opacity: 0 -> 1` across frames 0..18). Variable `n` illuminates with a gentle glow.
- **WHAT MUST NOT APPEAR YET:** No factorial symbol `n!` or formulas before spoken in Anchor 02.
- **COMPREHENSION HOLD:** Frames 81..103 hold steady on `n` context while audio pauses 730ms.
- **CLEANUP / EXIT:** Smooth continuation into factorial definition.
- **PERSISTENT STATE:** Left card container established.

---

### Anchor 02: `S05_FACTORIAL`
- **Frame Range:** `[103, 242)` (139 frames, 4.63s) | Spoken: `[103, 211]`, Pause: 31f
- **Spoken Narration Anchor:** `"the number of possible permutations is n factorial."`
- **ANCHOR:** `S05_FACTORIAL` (Trace: `WHY-02`)
- **WHAT APPEARS NOW:** Mathematical formula reveals: `Total Permutations = n! = n × (n - 1) × ... × 1`. Hand-drawn `ChalkDivider` underlines the formula.
- **CENTER-STAGE HERO:** Factorial formula `n!`.
- **CAUSE:** Narration states that permutations of `n` distinct items equals $n!$.
- **EFFECT / MOTION:** `n!` formula draws on from left-to-right starting at F140 (`"permutations"`) and reaches full prominence at F190 (`"factorial"`). Golden glow around `n!`.
- **WHAT MUST NOT APPEAR YET:** Specific numerical table for $N=3$ or $N=5$.
- **COMPREHENSION HOLD:** Frames 211..242 hold on formula during 1.03s pause.
- **CLEANUP / EXIT:** Card expands downward to accommodate comparison rows.
- **PERSISTENT STATE:** Formula settled.

---

### Anchor 03: `S05_THREE`
- **Frame Range:** `[242, 358)` (116 frames, 3.87s) | Spoken: `[242, 343]`, Pause: 15f
- **Spoken Narration Anchor:** `"3 values give only 6 permutations,"`
- **ANCHOR:** `S05_THREE` (Trace: `WHY-03`)
- **WHAT APPEARS NOW:** First example row appears in table: `N = 3 ──► 3! = 3 × 2 × 1 = 6 permutations (Very Fast & Small)`.
- **CENTER-STAGE HERO:** `3! = 6` calculation box.
- **CAUSE:** Grounding the mathematical abstract in the concrete master testcase from Scenes 02–04.
- **EFFECT / MOTION:** Row highlights in emerald green (`theme.good`) with a checkmark badge: `✓ Easily fits in cache and CPU registers`.
- **WHAT MUST NOT APPEAR YET:** High $N$ explosion rows.
- **COMPREHENSION HOLD:** Frames 343..358 hold during 500ms pause.
- **CLEANUP / EXIT:** Prepares transition to explosion rows.
- **PERSISTENT STATE:** Row 1 (`N=3`) remains visible.

---

### Anchor 04: `S05_HUGE`
- **Frame Range:** `[358, 473)` (115 frames, 3.83s) | Spoken: `[358, 461]`, Pause: 12f
- **Spoken Narration Anchor:** `"but factorial growth becomes huge very quickly,"`
- **ANCHOR:** `S05_HUGE` (Trace: `WHY-04`)
- **WHAT APPEARS NOW:** Growth explosion rows expand in table:
  - `N = 5  ──► 5!  = 120 permutations`
  - `N = 10 ──► 10! = 3,628,800 permutations (~3.6 Million!)`
  - `N = 20 ──► 20! ≈ 2.43 × 10¹⁸ permutations (Years of compute!)`
- **CENTER-STAGE HERO:** Exponential/factorial scale warning banner.
- **CAUSE:** Narration explains that factorial growth explodes beyond computational feasibility.
- **EFFECT / MOTION:** Rows flash into view with amber-to-red progression. An ominous pulsing warning icon `⚠️` appears next to $N=10$ and $N=20$.
- **WHAT MUST NOT APPEAR YET:** Memory storage breakdown card (Anchor 05).
- **COMPREHENSION HOLD:** Frames 461..473 hold on explosion table.
- **CLEANUP / EXIT:** Card docks to Left (`X: 80, W: 840`) to make room for Space Violation Card on Right.
- **PERSISTENT STATE:** Growth table docked on Left.

---

### Anchor 05: `S05_STORAGE`
- **Frame Range:** `[473, 612)` (139 frames, 4.63s) | Spoken: `[473, 580]`, Pause: 32f
- **Spoken Narration Anchor:** `"and we would have to store many of those permutations."`
- **ANCHOR:** `S05_STORAGE` (Trace: `WHY-05`)
- **WHAT APPEARS NOW:** Right Hero Card appears (`X: 980, W: 860, H: 590`): `MEMORY BURDEN: ALLOCATING N! TUPLES`.
- **CENTER-STAGE HERO:** Memory allocation simulation box showing heap memory fill.
- **CAUSE:** Narration points out that brute-force generation creates collections of $N!$ elements.
- **EFFECT / MOTION:** Right card enters with hand-drawn coral red `RoughBox` chalk outline. Visual representation of memory blocks filling up rapidly: `RAM Usage: [ ■■■■■■■■■■■■■■■□ ] Memory Exhaustion Warning`.
- **WHAT MUST NOT APPEAR YET:** LeetCode constraint violation stamp.
- **COMPREHENSION HOLD:** Frames 580..612 hold on memory fill during 1.07s pause.
- **CLEANUP / EXIT:** Retains card for violation stamp.
- **PERSISTENT STATE:** Memory card active.

---

### Anchor 06: `S05_SPACE_BREAK`
- **Frame Range:** `[612, 727)` (115 frames, 3.83s) | Spoken: `[612, 717]`, Pause: 10f
- **Spoken Narration Anchor:** `"So this also breaks the constant extra space requirement."`
- **ANCHOR:** `S05_SPACE_BREAK` (Trace: `WHY-06`)
- **WHAT APPEARS NOW:** Prominent Red Chalk Stamp slams down onto the right card: `❌ VIOLATION: O(N! · N) AUXILIARY SPACE (REQUIRED: O(1) EXTRA MEMORY)`.
- **CENTER-STAGE HERO:** Constraint violation badge.
- **CAUSE:** Narration directly links memory storage to LeetCode problem constraint failure.
- **EFFECT / MOTION:** Stamp scales down rapidly from `1.3` to `1.0` at F639 (`"breaks"`), giving a heavy chalk impression impact.
- **WHAT MUST NOT APPEAR YET:** Waste contrast summary.
- **COMPREHENSION HOLD:** Frames 717..727 hold on the red violation stamp.
- **CLEANUP / EXIT:** Both cards dim slightly to prepare waste contrast overlay.
- **PERSISTENT STATE:** Violation stamp fixed on Right card.

---

### Anchor 07: `S05_TOO_MUCH`
- **Frame Range:** `[727, 971)` (244 frames, 8.13s) | Spoken: `[727, 953]`, Pause: 18f
- **Spoken Narration Anchor:** `"So generating every arrangement, just to move one step forward, is doing far too much work."`
- **ANCHOR:** `S05_TOO_MUCH` (Trace: `WHY-07`)
- **WHAT APPEARS NOW:** Center Overlay Banner at `Y: 480..720`: `THE CORE BRUTE-FORCE FLAW: ALL ARRANGEMENTS (N!) ──► JUST FOR +1 SINGLE STEP`.
- **CENTER-STAGE HERO:** Contrast balance: Giant $N!$ work pile vs. tiny $+1$ step needle in a haystack.
- **CAUSE:** Narration synthesizes the fundamental structural mismatch of the brute force strategy.
- **EFFECT / MOTION:** Visual seesaw/contrast diagram: A massive boulder labeled `Generate N! Permutations` on the left, vs a tiny pebble labeled `Advance by 1 Position` on the right.
- **WHAT MUST NOT APPEAR YET:** Master array [1, 3, 2] structure exploration.
- **COMPREHENSION HOLD:** Frames 953..971 hold on the contrast takeaway.
- **CLEANUP / EXIT:** Complete board wipe of Phase 1 cards. Clear stage for First Principles (Phase 2).
- **PERSISTENT STATE:** Stage completely cleared.

---

### Anchor 08: `S05_CURRENT_EXISTS`
- **Frame Range:** `[971, 1057)` (86 frames, 2.87s) | Spoken: `[971, 1040]`, Pause: 17f
- **Spoken Narration Anchor:** `"We already have the current permutation."`
- **ANCHOR:** `S05_CURRENT_EXISTS` (Trace: `WHY-08`)
- **WHAT APPEARS NOW:** Master array `nums = [1, 3, 2]` appears in center stage (`Y: 220`) using canonical `ArrayTrackV2` with slot indices `idx [0]`, `idx [1]`, `idx [2]`.
- **CENTER-STAGE HERO:** Master input array `[1, 3, 2]`.
- **CAUSE:** Shifting focus from generating everything to inspecting what we already have.
- **EFFECT / MOTION:** Array slots draw on with smooth chalk outline; values `1`, `3`, `2` drop into their slots with crisp mechanical settling (`F971..F995`).
- **WHAT MUST NOT APPEAR YET:** Structure annotations.
- **COMPREHENSION HOLD:** Frames 1040..1057 hold on the array.
- **CLEANUP / EXIT:** Keeps array fixed at `Y: 220`.
- **PERSISTENT STATE:** `ArrayTrackV2` pinned at `Y: 220`.

---

### Anchor 09: `S05_USE_STRUCTURE`
- **Frame Range:** `[1057, 1135)` (78 frames, 2.60s) | Spoken: `[1057, 1104]`, Pause: 31f
- **Spoken Narration Anchor:** `"We should use its structure."`
- **ANCHOR:** `S05_USE_STRUCTURE` (Trace: `WHY-09`)
- **WHAT APPEARS NOW:** Glowing bracket and label appear under the array: `INTRINSIC ARRAY STRUCTURE: The answer is already encoded within these digits!`.
- **CENTER-STAGE HERO:** Array digits highlighted as informational tokens.
- **CAUSE:** Narration emphasizes using the given arrangement instead of throwing it away.
- **EFFECT / MOTION:** Cyan highlight waves across slots `0`, `1`, `2` in sequence (`F1065..F1100`).
- **WHAT MUST NOT APPEAR YET:** "Next" definition cards.
- **COMPREHENSION HOLD:** Frames 1104..1135 hold during 1.03s pause.
- **CLEANUP / EXIT:** Bracket transitions to definition card.
- **PERSISTENT STATE:** Array remains centered at `Y: 220`.

---

### Anchor 10: `S05_NEXT_MEANING`
- **Frame Range:** `[1135, 1220)` (85 frames, 2.83s) | Spoken: `[1135, 1207]`, Pause: 13f
- **Spoken Narration Anchor:** `"Think about what next really means."`
- **ANCHOR:** `S05_NEXT_MEANING` (Trace: `WHY-10`)
- **WHAT APPEARS NOW:** Card appears at `Y: 370`: `WHAT DOES "NEXT" TRULY MEAN IN A NUMBER?`.
- **CENTER-STAGE HERO:** Conceptual definition prompt.
- **CAUSE:** Narration invites the viewer to reflect on lexicographical ordering from first principles.
- **EFFECT / MOTION:** `RoughCard` with amber `RoughBox` chalk outline appears with a thinking prompt `🤔`.
- **WHAT MUST NOT APPEAR YET:** Mathematical definition answer.
- **COMPREHENSION HOLD:** Frames 1207..1220 hold on prompt.
- **CLEANUP / EXIT:** Prepares card expansion.
- **PERSISTENT STATE:** Card container at `Y: 370`.

---

### Anchor 11: `S05_SMALLEST_CHANGE`
- **Frame Range:** `[1220, 1308)` (88 frames, 2.93s) | Spoken: `[1220, 1296]`, Pause: 12f
- **Spoken Narration Anchor:** `"We want the smallest possible change."`
- **ANCHOR:** `S05_SMALLEST_CHANGE` (Trace: `WHY-11`)
- **WHAT APPEARS NOW:** Answer part 1 appears in gold typography: `1. SMALLEST POSSIBLE CHANGE (Minimize Δ)`.
- **CENTER-STAGE HERO:** "Smallest change" principle.
- **CAUSE:** Immediate successor requires minimum numerical delta.
- **EFFECT / MOTION:** Text draws on with warm glow at F1247 (`"smallest"`).
- **WHAT MUST NOT APPEAR YET:** "Makes array larger" condition.
- **COMPREHENSION HOLD:** Frames 1296..1308 hold on rule 1.
- **CLEANUP / EXIT:** Prepares rule 2.
- **PERSISTENT STATE:** Rule 1 established.

---

### Anchor 12: `S05_MAKES_LARGER`
- **Frame Range:** `[1308, 1386)` (78 frames, 2.60s) | Spoken: `[1308, 1363]`, Pause: 23f
- **Spoken Narration Anchor:** `"That makes the array larger."`
- **ANCHOR:** `S05_MAKES_LARGER` (Trace: `WHY-12`)
- **WHAT APPEARS NOW:** Answer part 2 appears in emerald typography: `2. THAT MAKES THE ARRAY STRICTLY LARGER (New > Current)`.
- **CENTER-STAGE HERO:** Complete definition formula: `Next = min { P | P > Current }`.
- **CAUSE:** Combined objective: smallest strictly greater value.
- **EFFECT / MOTION:** Both rules bracket together with an emerald chalk outline.
- **WHAT MUST NOT APPEAR YET:** Left-vs-Right position comparison.
- **COMPREHENSION HOLD:** Frames 1363..1386 hold during 770ms pause.
- **CLEANUP / EXIT:** Card morphs into Left-vs-Right position experiment.
- **PERSISTENT STATE:** Definition locked.

---

### Anchor 13: `S05_TOO_FAR_LEFT`
- **Frame Range:** `[1386, 1482)` (96 frames, 3.20s) | Spoken: `[1386, 1463]`, Pause: 19f
- **Spoken Narration Anchor:** `"If we change something too far to the left,"`
- **ANCHOR:** `S05_TOO_FAR_LEFT` (Trace: `WHY-13`)
- **WHAT APPEARS NOW:** Two comparative branches appear under the array:
  - Branch A (Left change): Highlight on slot 0 (hundreds place: `1xx`).
  - Branch B (Right change): Highlight on slot 2 (units place: `xx2`).
- **CENTER-STAGE HERO:** Positional weight contrast (Hundreds digit vs. Units digit).
- **CAUSE:** High-order digits dictate massive numerical leaps.
- **EFFECT / MOTION:** Red pointer highlights slot 0 (`idx [0]`). Label draws: `Changing slot 0 alters the HUNDREDS place!`.
- **WHAT MUST NOT APPEAR YET:** Numerical jump calculation.
- **COMPREHENSION HOLD:** Frames 1463..1482 hold on slot 0 highlight.
- **CLEANUP / EXIT:** Leads to jump calculation.
- **PERSISTENT STATE:** Branch A highlighted.

---

### Anchor 14: `S05_JUMP`
- **Frame Range:** `[1482, 1561)` (79 frames, 2.63s) | Spoken: `[1482, 1561]`, Pause: 0f
- **Spoken Narration Anchor:** `"the jump becomes unnecessarily large."`
- **ANCHOR:** `S05_JUMP` (Trace: `WHY-14`)
- **WHAT APPEARS NOW:** Visual delta calculation for Left Change:
  `[1, 3, 2] (132) ──► Change at idx 0 ──► [3, 1, 2] (312)`  
  `Δ = +180 (MASSIVE JUMP! Completely skips [2, 1, 3] and [2, 3, 1]!)`
- **CENTER-STAGE HERO:** Giant red jump arc showing overshoot.
- **CAUSE:** Changing a high-order digit overshoots multiple valid permutations.
- **EFFECT / MOTION:** Red dashed curved trajectory with `RoughLine` arrow leaps far over target. Label: `❌ UNNECESSARILY LARGE JUMP`.
- **WHAT MUST NOT APPEAR YET:** Rightmost principle rule card.
- **COMPREHENSION HOLD:** Instant transition to conclusion at F1561.
- **CLEANUP / EXIT:** Red arc dims as positive solution is derived.
- **PERSISTENT STATE:** Overshoot lesson visual established.

---

### Anchor 15: `S05_FAR_RIGHT`
- **Frame Range:** `[1561, 1765)` (204 frames, 6.80s) | Spoken: `[1561, 1736]`, Pause: 29f
- **Spoken Narration Anchor:** `"So we should try to make the change as far to the right as possible."`
- **ANCHOR:** `S05_FAR_RIGHT` (Trace: `WHY-15`)
- **WHAT APPEARS NOW:** The Core Algorithmic Golden Rule Card (`W: 1100, H: 170` at `Y: 530`):
  `⭐ GOLDEN PRINCIPLE: MAKE THE CHANGE AS FAR TO THE RIGHT AS POSSIBLE`  
  `Rightmost digits have the smallest place value ──► Yields the smallest valid increase!`
- **CENTER-STAGE HERO:** Golden Principle Card with warm gold `RoughBox` chalk outline.
- **CAUSE:** Narration states the mathematical deduction that governs the optimal algorithm.
- **EFFECT / MOTION:** Green highlight shifts to the right side of the array (`idx [2]` and `idx [1]`). Golden card illuminates with glowing star.
- **WHAT MUST NOT APPEAR YET:** Clue banner.
- **COMPREHENSION HOLD:** Frames 1736..1765 hold on the golden rule during 970ms pause.
- **CLEANUP / EXIT:** Retains rule card as base for clue.
- **PERSISTENT STATE:** Golden rule locked.

---

### Anchor 16: `S05_FIRST_CLUE`
- **Frame Range:** `[1765, 1856)` (91 frames, 3.03s) | Spoken: `[1765, 1832]` | Pause: 24f
- **Spoken Narration Anchor:** `"That gives us our first clue."`
- **ANCHOR:** `S05_FIRST_CLUE` (Trace: `WHY-16`)
- **WHAT APPEARS NOW:** Top subtitle updates: `DISCOVERY: THE FIRST OPTIMAL CLUE`. Magnifying glass icon `🔍` illuminates over the right side of the array.
- **CENTER-STAGE HERO:** Clue badge: `CLUE #1: RIGHT-TO-LEFT SCAN DIRECTION`.
- **CAUSE:** Narration transitions from abstract theory to the concrete algorithm design clue.
- **EFFECT / MOTION:** Pulsing focus ring draws around slots `2` and `1` from right to left.
- **WHAT MUST NOT APPEAR YET:** Right-to-left scan arrow.
- **COMPREHENSION HOLD:** Frames 1832..1856 hold on clue badge during 800ms pause.
- **CLEANUP / EXIT:** Launches scan arrow.
- **PERSISTENT STATE:** Clue badge active.

---

### Anchor 17: `S05_LOOK_RIGHT`
- **Frame Range:** `[1856, 1925)` (69 frames, 2.30s) | Spoken: `[1856, 1925]`, Pause: 0f
- **Spoken Narration Anchor:** `"Look from the right side of the array"`
- **ANCHOR:** `S05_LOOK_RIGHT` (Trace: `WHY-17`)
- **WHAT APPEARS NOW:** Authentic `RoughLine` chalk arrow draws from right to left across the top of the array:  
  `◄── SCAN DIRECTION: FROM RIGHT TO LEFT (idx: n-1 ──► 0)`.
- **CENTER-STAGE HERO:** Right-to-left scan arrow.
- **CAUSE:** Narration instructs to inspect the array from right to left.
- **EFFECT / MOTION:** Arrow animates from right (`X: 1150`) to left (`X: 770`) over 24 frames with chalk draw-in (`strokeDashoffset`).
- **WHAT MUST NOT APPEAR YET:** "First place where increase is possible" criterion.
- **COMPREHENSION HOLD:** Zero pause; seamlessly connects to Anchor 18.
- **CLEANUP / EXIT:** Arrow stays visible.
- **PERSISTENT STATE:** Scan arrow active above array.

---

### Anchor 18: `S05_FIRST_PLACE`
- **Frame Range:** `[1925, 2034)` (109 frames, 3.63s) | Spoken: `[1925, 2006]`, Pause: 28f
- **Spoken Narration Anchor:** `"and find the first place,"`
- **ANCHOR:** `S05_FIRST_PLACE` (Trace: `WHY-18`)
- **WHAT APPEARS NOW:** Scan pointer touches slot 2 (`val: 2`), then advances left to inspect slot 1 (`val: 3`). A question mark `?` hovers over slot 0/1: `First valid breakpoint?`.
- **CENTER-STAGE HERO:** Unresolved breakpoint search pointer.
- **CAUSE:** Narration specifies looking for the very *first* place from the right.
- **EFFECT / MOTION:** Subtle cursor scan motion from slot 2 to slot 1 with soft tick sound wave.
- **WHAT MUST NOT APPEAR YET:** Pivot index definition or formula (strictly reserved for Scene 06!).
- **COMPREHENSION HOLD:** Frames 2006..2034 hold during 930ms pause.
- **CLEANUP / EXIT:** Prepares criterion question.
- **PERSISTENT STATE:** Search pointer positioned at right side.

---

### Anchor 19: `S05_LARGER_POSSIBLE`
- **Frame Range:** `[2034, 2167)` (133 frames, 4.43s) | Spoken: `[2034, 2147]`, Pause: 20f
- **Spoken Narration Anchor:** `"where a larger arrangement is still possible."`
- **ANCHOR:** `S05_LARGER_POSSIBLE` (Trace: `WHY-19`)
- **WHAT APPEARS NOW:** The Core Search Criterion Banner appears below array (`Y: 480`):
  `❓ THE SEARCH CRITERION:`  
  `"Where can a smaller number on the left be swapped with a larger number on the right?"`
- **CENTER-STAGE HERO:** The search question banner.
- **CAUSE:** Narration articulates the mathematical condition for a valid local increase.
- **EFFECT / MOTION:** Emerald question card draws with `RoughBox` chalk outline.
- **WHAT MUST NOT APPEAR YET:** Scene 06 handoff card.
- **COMPREHENSION HOLD:** Frames 2147..2167 hold during 670ms pause.
- **CLEANUP / EXIT:** Prepares transition to Scene 06.
- **PERSISTENT STATE:** Search criterion locked.

---

### Anchor 20: `S05_BUILD_OPTIMAL`
- **Frame Range:** `[2167, 2268)` (101 frames, 3.37s) | Spoken: `[2167, 2268]`, Pause: 0f
- **Spoken Narration Anchor:** `"Now we can build the optimal idea carefully."`
- **ANCHOR:** `S05_BUILD_OPTIMAL` (Trace: `WHY-20`)
- **WHAT APPEARS NOW:** Center Stage transitions to Scene 06 Handoff Card (`W: 1040, H: 260` at `Y: 380`):
  `NEXT UP ──► SCENE 06`  
  `"THE OPTIMAL 3-STEP ALGORITHM"`  
  `1. Find Pivot ──► 2. Find Successor ──► 3. Reverse Suffix`
- **CENTER-STAGE HERO:** Optimal Solution Handoff Card.
- **CAUSE:** Narration concludes the derivation and launches the optimal strategy.
- **EFFECT / MOTION:** Golden handoff card illuminates with radiant chalk border (`seed: 505`).
- **WHAT MUST NOT APPEAR YET:** Step 1/2/3 execution (strictly Scene 06!).
- **COMPREHENSION HOLD:** Frames 2240..2268 settle at total duration = 2,268 frames.
- **CLEANUP / EXIT:** Clean freeze frame ready for Scene 06 continuity.
- **PERSISTENT STATE:** Clean handoff state settled at Frame 2,268.

---

## 3. Mandatory Invariant & Anti-Collision Check
1. **Vertical Space Budget:**
   - Top Header: `Y: 36..72`
   - Subtitle: `Y: 96..130`
   - Hero Zone: `Y: 155..770` (max element height: 590px)
   - Bottom Clearance: `Y: 770..960` (> 190px breathing room)
   - Captions: `Y: 980`
   - **Zero Collision Guarantee:** Every card border, array slot, and arrow is guaranteed to have >= 50px clearance from all neighboring elements.
2. **Pedagogical Boundary Invariants:**
   - Scene 05 proves *why* brute force fails ($N!$ time and $O(N! \cdot N)$ space).
   - Scene 05 derives *direction* (right-to-left) and *objective* (smallest increase as far right as possible).
   - Scene 05 NEVER names or executes the pivot index or successor index (strictly reserved for Scene 06).
