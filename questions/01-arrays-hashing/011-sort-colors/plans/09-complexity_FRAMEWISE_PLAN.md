# Q11 Sort Colors — Scene 09 Framewise Plan
## Scene: 09-complexity (Complexity Comparison, Common Mistakes & Edge Cases)

```text
SCENE: 09-complexity
QUESTION: 011 · Sort Colors (LeetCode 75)
BEAT TYPE: COMPLEXITY, PITFALLS & EDGE CASES
AUDIO FILE: public/audio/011/09-complexity.mp3
SYNC FILE: questions/01-arrays-hashing/011-sort-colors/sync/09-complexity.json
ANCHORS FILE: questions/01-arrays-hashing/011-sort-colors/sync/09-complexity.anchors.json
FPS: 30
TOTAL FRAMES: 3920 (130.68s)
PEDAGOGICAL GOAL:
1. Prove time complexity O(N) and space complexity O(1) for Dutch National Flag vs Counting Sort using visual chalk curve graphs and pointer convergence proofs.
2. Demonstrate the three fatal implementation pitfalls visually with interactive array tracks (skipping mid after high swap, strictly-less-than loop condition, off-by-one initial high).
3. Verify that the 4-region loop invariant naturally handles all 6 edge cases without any special conditional code.
TRACE STEP IDS: TRACE_DNF_COMPLEXITY_PROOF, TRACE_MISTAKE_1, TRACE_MISTAKE_2, TRACE_MISTAKE_3, TRACE_EDGE_CASES
DATA STRUCTURE: Array of size N (values {0, 1, 2})

REUSE:
- ChalkboardBackground, ChalkFilters (`kit/lib/chalk`)
- RoughBox, RoughLine, RoughCurve (`kit/components`)
- ArrayTrackV2 (`kit/components/array/ArrayTrackV2`)
- Captions (`kit/components/Captions`)
- theme, fonts (`kit/lib/theme`)

EXTEND:
- MiniComplexityGraph: Built with RoughLine (axes) and RoughCurve (O(N) linear time, O(1) space, O(N²) / O(N log N) reference curves) adhering to `@dsa/kit` rough styling.

CREATE:
- N/A

DO NOT TOUCH:
- `kit/` core library primitives
- Audio file & sync JSON

MOTION SEMANTICS:
- Chalk curves stroke-draw sequentially with spring/ease interpolation.
- Spotlight fades and focused card scale (1.0 to 1.02) during active narration.
- Array elements pulse and swap along smooth arcs during mistake demonstration beats.
- Invariant shrinking bar compresses smoothly as mid advances and high decrements.

MORPH SEMANTICS:
- Comparison cards transition into visual pointer convergence demonstration at F723.
- Section 1 elements fade out cleanly before Section 2 Pitfalls enter at F1026.
- Section 2 elements fade out cleanly before Section 3 Edge Cases enter at F2891.

SVG SEMANTICS:
- SVG chalk axes and rough curves rendered via `RoughLine` and `RoughCurve` with `CHALK_FILTER_STRONG_ID`.
- Pointers and arrows rendered with deterministic SVG vectors.

TRANSITION IN: Smooth chalk fade-in from Scene 08 DNF Code.
TRANSITION OUT: Smooth chalk settle into Scene 10 Recap / Roadmap.
FORBIDDEN:
- No CSS @keyframes or transition properties.
- No Math.random() in visual state.
- No giant dashboard card wrappers (e.g. RoughBox 1760x640 enclosing the whole scene). Elements live directly on the chalkboard canvas.
- No congested top 30-40% layouts; keep balanced Y: 120-750 distribution.
- No tiny edge case cards crammed into the top 350px. The 6 edge cases must be distributed across the full center vertical canvas (Y: 170..680) in a 2-row x 3-column system.
- Zero collision with bottom captions at Y: 980 (maintain >= 250px clearance).
```

---

## Exact Audio Anchor Manifest

| Anchor ID | Word Index / ID | Frame Range | Spoken Text | Teaching Purpose |
|---|---|---|---|---|
| `S09_COMPARE_INTRO` | W0000..W0004 | F0..F65 | "Now let's compare both approaches." | Section 1 opener: Sets up two-approach showdown. |
| `S09_COUNTING_TIME` | W0005..W0010 | F65..F122 | "Counting takes O of n time" | Counting sort time complexity badge enters. |
| `S09_COUNTING_SPACE` | W0011..W0016 | F122..F196 | "and O of one extra space," | Counting sort auxiliary space badge enters. |
| `S09_COUNTING_PASSES` | W0017..W0021 | F196..F272 | "but it uses two passes." | Highlight drawback: Two separate linear passes. |
| `S09_COUNTING_PASS1` | W0022..W0025 | F272..F306 | "One pass to count" | Pass 1: Frequency histogram build step. |
| `S09_COUNTING_PASS2` | W0026..W0032 | F306..F400 | "and another pass to rewrite the array." | Pass 2: Overwrite target array slots. |
| `S09_DNF_TIME` | W0033..W0041 | F400..F511 | "Dutch national flag also takes O of n time" | DNF enters with curve graph highlighting O(N). |
| `S09_DNF_SPACE` | W0042..W0047 | F511..F607 | "and O of one extra space." | DNF space badge: O(1) in-place pointers. |
| `S09_DNF_ONE_PASS` | W0048..W0056 | F607..F723 | "But here, we classify the array in one pass." | Key winning distinction: 1 single pass. |
| `S09_WHY_ON` | W0057..W0062 | F723..F767 | "Why is it O of n?" | Transition to mathematical convergence proof. |
| `S09_MID_RIGHT` | W0063..W0069 | F767..F839 | "Because mid only moves to the right" | Visual pointer track: mid moves right monotonically. |
| `S09_HIGH_LEFT` | W0070..W0076 | F839..F942 | "and high only moves to the left." | Visual pointer track: high moves left monotonically. |
| `S09_UNKNOWN_SHRINKS` | W0077..W0081 | F942..F1026 | "The unknown region keeps shrinking." | Unknown interval `[mid..high]` length contracts to 0. |
| `S09_MISTAKES_INTRO` | W0082..W0089 | F1026..F1117 | "Now let's look at the most common mistake." | Section 2 opener: Pitfalls header appears. |
| `S09_MISTAKE1_SCENARIO` | W0090..W0095 | F1117..F1185 | "Suppose nums at mid is two." | Pitfall 1 setup: array track with nums[mid]=2. |
| `S09_MISTAKE1_SWAP` | W0096..W0106 | F1185..F1290 | "We swap it with nums at high and move high left," | Animate swap nums[mid] with nums[high], high--. |
| `S09_MISTAKE1_DONT_MOVE_MID` | W0107..W0111 | F1290..F1353 | "but do not move mid." | Emphasize mid stays locked in place. |
| `S09_MISTAKE1_IMPORTANT` | W0112..W0115 | F1353..F1417 | "This is very important." | Warning spotlight pulses around slot mid. |
| `S09_MISTAKE1_VAL_UNKNOWN` | W0116..W0126 | F1417..F1548 | "The value that comes from the high side is still unknown." | Highlight the swapped element: its identity is unknown! |
| `S09_MISTAKE1_IF_MOVE_MID` | W0127..W0139 | F1548..F1728 | "If we move mid immediately, we may skip that value without checking it." | Show the fatal bug animation: skipped value leaves bug! |
| `S09_MISTAKE2_WHILE_STRICT` | W0140..W0150 | F1728..F1902 | "Another common mistake is using while mid is less than high." | Pitfall 2: `while mid < high` vs `<=`. |
| `S09_MISTAKE2_NOT_ENOUGH` | W0151..W0154 | F1902..F1954 | "That is not enough." | Red strike on `<` operator. |
| `S09_MISTAKE2_NEED_LEQ` | W0155..W0165 | F1954..F2095 | "We need while mid is less than or equal to high." | Green glowing `<=` replaces `<`. |
| `S09_MISTAKE2_REASON` | W0166..W0185 | F2095..F2356 | "Because when mid and high are on the same index, that last value is still unknown and must be processed." | Array shows mid==high: final slot remains unclassified. |
| `S09_MISTAKE3_OFF_BY_ONE` | W0186..W0200 | F2356..F2564 | "Also remember, high starts at the last valid index. So high is n minus one." | Pitfall 3: Indexing out of bounds if high=n. |
| `S09_FOUR_REGIONS_REMINDER` | W0201..W0211 | F2564..F2729 | "One more important point. There are four logical regions, not three." | Core concept reminder: 4 regions, not 3. |
| `S09_REGIONS_LIST` | W0212..W0220 | F2729..F2891 | "Confirmed zeros, confirmed ones, unknown values and confirmed twos." | Four region brackets illuminate in sequence. |
| `S09_EDGE_CASES_INTRO` | W0221..W0225 | F2891..F2950 | "Now let's check edge cases." | Section 3 opener: Edge case suite appears. |
| `S09_EDGE_ONE_VAL` | W0226..W0237 | F2950..F3076 | "If the array has only one value, the same logic still works." | Card 1: `[1]` single element test. |
| `S09_EDGE_ALL_ZERO` | W0238..W0244 | F3076..F3164 | "If all values are zero, it works." | Card 2: `[0, 0, 0]` all zeros. |
| `S09_EDGE_ALL_ONE` | W0245..W0251 | F3164..F3262 | "If all values are one, it works." | Card 3: `[1, 1, 1]` all ones. |
| `S09_EDGE_ALL_TWO` | W0252..W0258 | F3262..F3371 | "If all values are two, it works." | Card 4: `[2, 2, 2]` all twos. |
| `S09_EDGE_ALREADY_SORTED` | W0259..W0266 | F3371..F3497 | "If the array is already sorted, it works." | Card 5: `[0, 1, 2]` already sorted. |
| `S09_EDGE_REVERSE` | W0267..W0280 | F3497..F3712 | "And even if it starts in reverse order, the same invariant still handles it." | Card 6: `[2, 1, 0]` reverse sorted. |
| `S09_NO_SPECIAL_CASE` | W0281..W0285 | F3712..F3797 | "No special case is required." | All 6 cards show green checkmarks; zero if-conditions. |
| `S09_POWER_INVARIANT` | W0286..W0294 | F3797..F3920 | "That is the power of maintaining the regions correctly." | Grand invariant banner resolves and settles. |

---

## Frame-Wise Scene Choreography (Mandatory 9-Section Schema)

### ACT 1: COMPLEXITY COMPARISON & WHY O(N) PROOF (F0 .. F1026)

#### ANCHOR 1: `S09_COMPARE_INTRO` (F0 .. F65)
- **ANCHOR**: `S09_COMPARE_INTRO` | Frames 0..65 (duration 65f, pause 15f) | Spoken text: "Now let's compare both approaches."
- **WHAT APPEARS NOW**:
  - Top header strip: `QUESTION 011 · SORT COLORS` and section badge `PART 1 · COMPLEXITY & ONE-PASS PROOF`.
  - Left hero container: Clean chalkboard box for complexity curve graph (`MiniComplexityGraph`).
  - Right hero container: Comparison table shell with headers for Approach 1 (Counting) and Approach 2 (DNF).
- **CENTER-STAGE HERO**: The side-by-side comparison stage (Left: Graph stage X: 80..920, Y: 120..740; Right: Table stage X: 980..1840, Y: 120..740).
- **CAUSE**: Narration initiates a direct head-to-head comparison between the two valid sorting strategies.
- **EFFECT / MOTION**:
  - Headers fade in smoothly (opacity 0 -> 1, F0..F20).
  - Graph axes draw over F10..F35 using `RoughLine` chalk strokes.
  - Table outline draws with `RoughBox` chalk border over F15..F40.
- **WHAT MUST NOT APPEAR YET**: Specific time/space badges, DNF curves, loop convergence proof, common mistakes.
- **COMPREHENSION HOLD**: F45..F65 — clear optical breathing room for viewer to register the two parallel evaluation stages.
- **CLEANUP / EXIT**: Axes and table shell persist into the next anchor.
- **PERSISTENT STATE**: Chalk axes ready; table container awaiting counting sort data.

---

#### ANCHOR 2: `S09_COUNTING_TIME` (F65 .. F122)
- **ANCHOR**: `S09_COUNTING_TIME` | Frames 65..122 (duration 57f, pause 0f) | Spoken text: "Counting takes O of n time"
- **WHAT APPEARS NOW**:
  - Counting Sort card inside table receives active highlight border (`#FFD166`).
  - Time complexity badge: `Time: O(N)` with chalk badge style.
  - Linear curve segment on the graph begins sketching in chalk yellow (`#FFD166`).
- **CENTER-STAGE HERO**: Approach 1 card at X: 1000..1820, Y: 150..380.
- **CAUSE**: Spoken analysis begins with Counting Sort's computational time.
- **EFFECT / MOTION**:
  - Card scales subtly (1.0 -> 1.02, F65..F80) and badge slides in from left (+20px, F70..F95).
  - Linear curve `O(N)` draws along the graph axes over F75..F115 using `RoughCurve`.
- **WHAT MUST NOT APPEAR YET**: Space badge for Counting, DNF comparisons, passes breakdown.
- **COMPREHENSION HOLD**: F115..F122 — hold on the `O(N)` linear slope.
- **CLEANUP / EXIT**: Counting card remains active.
- **PERSISTENT STATE**: Counting card visible with `Time: O(N)`.

---

#### ANCHOR 3: `S09_COUNTING_SPACE` (F122 .. F196)
- **ANCHOR**: `S09_COUNTING_SPACE` | Frames 122..196 (duration 74f, pause 9f) | Spoken text: "and O of one extra space,"
- **WHAT APPEARS NOW**:
  - Space complexity badge inside Counting card: `Space: O(1)` with tag `Count array [c0, c1, c2]`.
  - Horizontal chalk line at Y: baseline on graph draws in yellow: `O(1) Auxiliary Space`.
- **CENTER-STAGE HERO**: Space metric display inside Counting card.
- **CAUSE**: Spoken narration explains auxiliary space usage (3-element array is constant).
- **EFFECT / MOTION**:
  - Space badge enters with fade + horizontal slide (F122..F145).
  - Horizontal chalk line draws from X: 0 to X: 600 over F130..F170.
- **WHAT MUST NOT APPEAR YET**: "two passes" critique, DNF comparison.
- **COMPREHENSION HOLD**: F185..F196 — 9-frame pause allows learner to note that time and space seem optimal so far.
- **CLEANUP / EXIT**: Space metrics lock into persistent state.
- **PERSISTENT STATE**: Counting sort metrics: `Time: O(N)`, `Space: O(1)`.

---

#### ANCHOR 4: `S09_COUNTING_PASSES` (F196 .. F272)
- **ANCHOR**: `S09_COUNTING_PASSES` | Frames 196..272 (duration 76f, pause 19f) | Spoken text: "but it uses two passes."
- **WHAT APPEARS NOW**:
  - Warning tag inside Counting card: `Passes: 2 Separate Passes` in amber (`#F59E0B`).
  - Visual breakdown shelf splits into Pass 1 and Pass 2 tracks below the metrics.
- **CENTER-STAGE HERO**: The "Two Passes" indicator banner.
- **CAUSE**: Speaker introduces the critical algorithmic limitation of Counting Sort.
- **EFFECT / MOTION**:
  - Pass badge pulses with warning color glow (F196..F225).
  - Two parallel arrow paths sketch below the card: Pass 1 arrow (0 -> N) and Pass 2 arrow (0 -> N).
- **WHAT MUST NOT APPEAR YET**: Details of Pass 1 and Pass 2 text; DNF card.
- **COMPREHENSION HOLD**: F253..F272 — 19-frame pause gives weight to the "two passes" drawback.
- **CLEANUP / EXIT**: Two arrow tracks stabilize.
- **PERSISTENT STATE**: Counting card clearly marked with `2 Passes`.

---

#### ANCHOR 5: `S09_COUNTING_PASS1` (F272 .. F306)
- **ANCHOR**: `S09_COUNTING_PASS1` | Frames 272..306 (duration 34f, pause 0f) | Spoken text: "One pass to count"
- **WHAT APPEARS NOW**:
  - Pass 1 row illuminates: `Pass 1: Traverse array to populate count[0], count[1], count[2]`.
  - Mini histogram icon shows counts incrementing `[2, 2, 2]`.
- **CENTER-STAGE HERO**: Pass 1 row at X: 1020..1800, Y: 290..340.
- **CAUSE**: Clarifying what the first pass achieves.
- **EFFECT / MOTION**:
  - Arrow 1 fills with yellow highlight over F272..F295.
  - Text fades in with crisp chalk typography.
- **WHAT MUST NOT APPEAR YET**: Pass 2 text illumination; DNF card.
- **COMPREHENSION HOLD**: F298..F306 — quick hold as speaker transitions seamlessly to Pass 2.
- **CLEANUP / EXIT**: Pass 1 remains illuminated.
- **PERSISTENT STATE**: Pass 1 active and explained.

---

#### ANCHOR 6: `S09_COUNTING_PASS2` (F306 .. F400)
- **ANCHOR**: `S09_COUNTING_PASS2` | Frames 306..400 (duration 94f, pause 20f) | Spoken text: "and another pass to rewrite the array."
- **WHAT APPEARS NOW**:
  - Pass 2 row illuminates: `Pass 2: Overwrite entire array with sorted values`.
  - Array overwrite animation icon sketches below Pass 2.
- **CENTER-STAGE HERO**: Pass 2 row at X: 1020..1800, Y: 350..400.
- **CAUSE**: Clarifying the second pass requirement.
- **EFFECT / MOTION**:
  - Arrow 2 fills with yellow highlight over F306..F335.
  - The phrase "rewrite the array" triggers an overwrite flash on the mini array graphic.
- **WHAT MUST NOT APPEAR YET**: DNF card activation.
- **COMPREHENSION HOLD**: F380..F400 — 20-frame natural teaching pause to solidify Counting Sort's complete profile.
- **CLEANUP / EXIT**: Counting card dims slightly (opacity 0.75) to prepare for DNF hero entrance.
- **PERSISTENT STATE**: Counting sort completely documented (O(N) time, O(1) space, 2 passes).

---

#### ANCHOR 7: `S09_DNF_TIME` (F400 .. F511)
- **ANCHOR**: `S09_DNF_TIME` | Frames 400..511 (duration 111f, pause 0f) | Spoken text: "Dutch national flag also takes O of n time"
- **WHAT APPEARS NOW**:
  - Approach 2 (DNF) card illuminates with vibrant emerald chalk border (`#6EE7B7`).
  - DNF Time complexity badge: `Time: O(N)` in bright emerald.
  - On the curve graph, an emerald curve traces directly over the linear slope with sparkling chalk dots.
- **CENTER-STAGE HERO**: Approach 2 (DNF) Card at X: 1000..1820, Y: 430..680.
- **CAUSE**: Narration introduces Dutch National Flag's time complexity.
- **EFFECT / MOTION**:
  - DNF card pops with spring entrance (scale 0.96 -> 1.0, F400..F430).
  - Graph draws emerald `O(N)` curve directly aligned with the counting curve, emphasizing identical asymptotic time.
- **WHAT MUST NOT APPEAR YET**: DNF space and one-pass banner.
- **COMPREHENSION HOLD**: F480..F511 — hold on matching O(N) slopes.
- **CLEANUP / EXIT**: Curve remains visible.
- **PERSISTENT STATE**: DNF card active; Time O(N) verified.

---

#### ANCHOR 8: `S09_DNF_SPACE` (F511 .. F607)
- **ANCHOR**: `S09_DNF_SPACE` | Frames 511..607 (duration 96f, pause 13f) | Spoken text: "and O of one extra space."
- **WHAT APPEARS NOW**:
  - DNF Space complexity badge: `Space: O(1)` with tag `Three integer pointers: low, mid, high`.
  - Graph horizontal baseline flashes emerald: `O(1) Extra Space (In-Place)`.
- **CENTER-STAGE HERO**: Space metric display inside DNF card.
- **CAUSE**: Explaining DNF's memory consumption.
- **EFFECT / MOTION**:
  - Space badge slides into DNF card with glowing green border (F511..F535).
  - Mini graphic of three pointer variables `[low, mid, high]` appears in pill tags.
- **WHAT MUST NOT APPEAR YET**: "One pass" revelation banner.
- **COMPREHENSION HOLD**: F594..F607 — 13-frame pause highlighting the tie in time and space.
- **CLEANUP / EXIT**: Space badge settles.
- **PERSISTENT STATE**: DNF card shows `Time: O(N)` and `Space: O(1)`.

---

#### ANCHOR 9: `S09_DNF_ONE_PASS` (F607 .. F723)
- **ANCHOR**: `S09_DNF_ONE_PASS` | Frames 607..723 (duration 116f, pause 17f) | Spoken text: "But here, we classify the array in one pass."
- **WHAT APPEARS NOW**:
  - Crown badge & Winner Banner: `🏆 IN-PLACE · EXACTLY 1 PASS`.
  - Contrast callout: Counting = 2 passes vs DNF = 1 pass.
- **CENTER-STAGE HERO**: The DNF Winner Banner spanning X: 1000..1820, Y: 600..690.
- **CAUSE**: Narration states the decisive engineering advantage of DNF.
- **EFFECT / MOTION**:
  - Glowing banner slides up with smooth spring ease (F607..F635).
  - Side-by-side pass comparator highlights `1 PASS` in bright green, `2 PASSES` in muted amber.
- **WHAT MUST NOT APPEAR YET**: Why O(N) proof track.
- **COMPREHENSION HOLD**: F706..F723 — 17-frame hold to let the single-pass triumph sink in.
- **CLEANUP / EXIT**: Comparison cards begin smooth cross-fade transition to the mathematical proof track.
- **PERSISTENT STATE**: Learner understands DNF's distinct advantage (single pass in-place).

---

#### ANCHOR 10: `S09_WHY_ON` (F723 .. F767)
- **ANCHOR**: `S09_WHY_ON` | Frames 723..767 (duration 44f, pause 0f) | Spoken text: "Why is it O of n?"
- **WHAT APPEARS NOW**:
  - Header updates to: `WHY IS DNF STRICTLY O(N)? — POINTER CONVERGENCE PROOF`.
  - Center stage transitions from table to a wide, spacious Pointer Convergence Array Track (width 1200px, Y: 320).
  - Pointers `mid` (at 0) and `high` (at N-1) appear above and below the track.
- **CENTER-STAGE HERO**: The interactive Convergence Track at X: 360..1560, Y: 280..520.
- **CAUSE**: Spoken rhetorical question invites mathematical proof.
- **EFFECT / MOTION**:
  - Comparison table fades out (F723..F740).
  - Array track with unknown region `[mid..high]` glows with questioning aura (`#FFD166`).
- **WHAT MUST NOT APPEAR YET**: Pointer movement animations.
- **COMPREHENSION HOLD**: F750..F767 — hold on the full unknown array ready to be proved.
- **CLEANUP / EXIT**: Previous table completely cleared.
- **PERSISTENT STATE**: Convergence track established with `mid=0`, `high=N-1`.

---

#### ANCHOR 11: `S09_MID_RIGHT` (F767 .. F839)
- **ANCHOR**: `S09_MID_RIGHT` | Frames 767..839 (duration 72f, pause 0f) | Spoken text: "Because mid only moves to the right"
- **WHAT APPEARS NOW**:
  - Monotonicity Callout 1: `mid++ : Strictly Monotonic Right (0 → N)`.
  - A rightward animated chalk arrow tracks `mid`'s movement.
- **CENTER-STAGE HERO**: The `mid` pointer and its forward progress vector.
- **CAUSE**: Narration explains `mid`'s directional constraint.
- **EFFECT / MOTION**:
  - Pointer `mid` glides from index 0 towards index 3 over F775..F825.
  - Left confirmed regions (`0s` and `1s`) expand behind `mid`.
  - Arrow pulses with bright cyan/green hue: `NO BACKTRACKING EVER`.
- **WHAT MUST NOT APPEAR YET**: `high` moving left.
- **COMPREHENSION HOLD**: F825..F839 — hold on `mid` advancing rightwards.
- **CLEANUP / EXIT**: Rightward motion settles.
- **PERSISTENT STATE**: `mid` advanced; confirmed region visible.

---

#### ANCHOR 12: `S09_HIGH_LEFT` (F839 .. F942)
- **ANCHOR**: `S09_HIGH_LEFT` | Frames 839..942 (duration 103f, pause 20f) | Spoken text: "and high only moves to the left."
- **WHAT APPEARS NOW**:
  - Monotonicity Callout 2: `high-- : Strictly Monotonic Left (N-1 → 0)`.
  - A leftward animated chalk arrow tracks `high`'s movement.
- **CENTER-STAGE HERO**: The `high` pointer and its inward progress vector.
- **CAUSE**: Narration explains `high`'s directional constraint.
- **EFFECT / MOTION**:
  - Pointer `high` glides from index N-1 inwards to index 4 over F845..F900.
  - Right confirmed region (`2s`) expands behind `high`.
  - Left and right arrows point toward each other: convergence!
- **WHAT MUST NOT APPEAR YET**: Final formula banner.
- **COMPREHENSION HOLD**: F922..F942 — 20-frame pause allows visual convergence to be fully absorbed.
- **CLEANUP / EXIT**: Both pointer movements settle.
- **PERSISTENT STATE**: `mid` and `high` sandwiching a narrow unknown gap.

---

#### ANCHOR 13: `S09_UNKNOWN_SHRINKS` (F942 .. F1026)
- **ANCHOR**: `S09_UNKNOWN_SHRINKS` | Frames 942..1026 (duration 84f, pause 29f) | Spoken text: "The unknown region keeps shrinking."
- **WHAT APPEARS NOW**:
  - Dynamic bracket `[mid .. high]` shrinking meter: `Size: N → N-1 → ... → 0`.
  - Proof Verdict Card: `Each step decrements (high - mid + 1) → At most N steps → O(N) Total Time!`.
- **CENTER-STAGE HERO**: The shrinking unknown bracket and the O(N) Verdict Card at X: 460..1460, Y: 560..680.
- **CAUSE**: Narration draws the formal inductive conclusion.
- **EFFECT / MOTION**:
  - Unknown bracket contracts smoothly to 0 width (F945..F980).
  - Verdict card flashes with green chalk border and checkmark badge (F970..F1000).
- **WHAT MUST NOT APPEAR YET**: Section 2 Common Mistakes.
- **COMPREHENSION HOLD**: F997..F1026 — 29-frame major teaching pause to seal the mathematical proof.
- **CLEANUP / EXIT**: Section 1 smoothly fades out (F1010..F1026).
- **PERSISTENT STATE**: Act 1 complete; canvas clear for Act 2.

---

### ACT 2: COMMON IMPLEMENTATION PITFALLS (F1026 .. F2891)

#### ANCHOR 14: `S09_MISTAKES_INTRO` (F1026 .. F1117)
- **ANCHOR**: `S09_MISTAKES_INTRO` | Frames 1026..1117 (duration 91f, pause 27f) | Spoken text: "Now let's look at the most common mistake."
- **WHAT APPEARS NOW**:
  - Top badge updates to: `PART 2 · COMMON IMPLEMENTATION PITFALLS`.
  - Warning banner appears: `⚠️ PITFALL 1: ADVANCING mid AFTER SWAPPING WITH high`.
  - A clean, spacious 6-slot ArrayTrackV2 appears at center stage (Y: 340, values: `[0, 1, 2, ?, ?, 2]`).
- **CENTER-STAGE HERO**: Pitfall 1 Stage and Array Track at X: 360..1560, Y: 240..580.
- **CAUSE**: Speaker introduces the single most frequent bug in Dutch National Flag implementations.
- **EFFECT / MOTION**:
  - Badge and warning banner enter with a soft crimson flash (`#FF8080`, F1026..F1055).
  - Array slots drop in with subtle bounce.
- **WHAT MUST NOT APPEAR YET**: Swap execution; bug code diff.
- **COMPREHENSION HOLD**: F1090..F1117 — 27-frame hold to prepare focus on the incoming swap.
- **CLEANUP / EXIT**: Banner stays locked at top of stage.
- **PERSISTENT STATE**: Array track ready with `mid` pointing at slot 2 (`value: 2`) and `high` at slot 4 (`value: 0`).

---

#### ANCHOR 15: `S09_MISTAKE1_SCENARIO` (F1117 .. F1185)
- **ANCHOR**: `S09_MISTAKE1_SCENARIO` | Frames 1117..1185 (duration 68f, pause 12f) | Spoken text: "Suppose nums at mid is two."
- **WHAT APPEARS NOW**:
  - Pointer `mid` highlights slot 2 containing value `2` (blue color `#60A5FA`).
  - Pointer `high` highlights slot 4 containing value `0` (red color `#E05252`).
  - Focus callout: `nums[mid] == 2 → Case 3 triggered!`.
- **CENTER-STAGE HERO**: Slot 2 (`nums[mid] = 2`) with glowing spotlight.
- **CAUSE**: Setting up the exact algorithmic condition where the mistake happens.
- **EFFECT / MOTION**:
  - Slot 2 pulses twice (scale 1.0 -> 1.08 -> 1.0, F1125..F1160).
  - Value 2 glows with semantic blue highlight.
- **WHAT MUST NOT APPEAR YET**: The swap flight.
- **COMPREHENSION HOLD**: F1173..F1185 — 12-frame hold on the state before swap.
- **CLEANUP / EXIT**: Spotlight persists.
- **PERSISTENT STATE**: `mid` on slot 2 (`2`), `high` on slot 4 (`0`).

---

#### ANCHOR 16: `S09_MISTAKE1_SWAP` (F1185 .. F1290)
- **ANCHOR**: `S09_MISTAKE1_SWAP` | Frames 1185..1290 (duration 105f, pause 14f) | Spoken text: "We swap it with nums at high and move high left,"
- **WHAT APPEARS NOW**:
  - Values `2` and `0` lift into the air and swap slots on curved Bezier trajectories.
  - Pointer `high` decrements from slot 4 to slot 3.
  - Action caption: `swap(nums[mid], nums[high])` followed by `high--`.
- **CENTER-STAGE HERO**: The mid-air crossing swap trajectory between slots 2 and 4.
- **CAUSE**: Executing the standard Case 3 operation.
- **EFFECT / MOTION**:
  - Lift values at F1200..F1215.
  - Cross trajectory flight F1215..F1250.
  - Values land at F1250..F1265 (`0` is now at slot 2; `2` is at slot 4).
  - `high` slides left from slot 4 to slot 3 at F1265..F1285.
- **WHAT MUST NOT APPEAR YET**: Any movement of `mid`.
- **COMPREHENSION HOLD**: F1276..F1290 — 14-frame hold showing `high` has moved left, but `mid` has NOT moved.
- **CLEANUP / EXIT**: Flight paths disappear upon landing.
- **PERSISTENT STATE**: Slot 2 contains `0`; slot 4 contains `2`; `high` is at slot 3; `mid` is still at slot 2.

---

#### ANCHOR 17: `S09_MISTAKE1_DONT_MOVE_MID` (F1290 .. F1353)
- **ANCHOR**: `S09_MISTAKE1_DONT_MOVE_MID` | Frames 1290..1353 (duration 63f, pause 25f) | Spoken text: "but do not move mid."
- **WHAT APPEARS NOW**:
  - Glowing lock icon appears on pointer `mid`: `🔒 mid DOES NOT MOVE`.
  - Negative indicator: Red cross over any hypothetical `mid++`.
- **CENTER-STAGE HERO**: The locked `mid` pointer at slot 2.
- **CAUSE**: Narration stresses the non-movement of `mid`.
- **EFFECT / MOTION**:
  - Lock icon snaps onto `mid` with spring pop (F1290..F1315).
  - Subtle horizontal tension shake on `mid` to emphasize it is firmly anchored.
- **WHAT MUST NOT APPEAR YET**: Explanation of why (incoming value unknown).
- **COMPREHENSION HOLD**: F1328..F1353 — 25-frame major hold so the rule is visually unforgettable.
- **CLEANUP / EXIT**: Lock icon settles into steady glow.
- **PERSISTENT STATE**: `mid` locked on slot 2.

---

#### ANCHOR 18: `S09_MISTAKE1_IMPORTANT` (F1353 .. F1417)
- **ANCHOR**: `S09_MISTAKE1_IMPORTANT` | Frames 1353..1417 (duration 64f, pause 21f) | Spoken text: "This is very important."
- **WHAT APPEARS NOW**:
  - Warning alert box: `CRITICAL INVARIANT RULE`.
  - Amber halo radiates from slot 2.
- **CENTER-STAGE HERO**: Alert box at X: 660..1260, Y: 180..240.
- **CAUSE**: Speaker elevates viewer attention to high alert.
- **EFFECT / MOTION**:
  - Amber halo pulses outward from slot 2 across the stage (F1355..F1390).
  - Alert box border flashes in sync with the audio beat.
- **WHAT MUST NOT APPEAR YET**: Bug simulation.
- **COMPREHENSION HOLD**: F1396..F1417 — 21-frame hold.
- **CLEANUP / EXIT**: Halo fades into steady highlight.
- **PERSISTENT STATE**: Viewer attention centered on slot 2's new value.

---

#### ANCHOR 19: `S09_MISTAKE1_VAL_UNKNOWN` (F1417 .. F1548)
- **ANCHOR**: `S09_MISTAKE1_VAL_UNKNOWN` | Frames 1417..1548 (duration 131f, pause 17f) | Spoken text: "The value that comes from the high side is still unknown."
- **WHAT APPEARS NOW**:
  - Question mark tag `?` hovers over slot 2's new element.
  - Explanatory callout: `Value was swapped from high. It has NEVER been examined! It could be 0, 1, or even 2!`.
- **CENTER-STAGE HERO**: Slot 2 showing the unexamined status of the swapped element.
- **CAUSE**: Narration explains the fundamental reasoning behind the rule.
- **EFFECT / MOTION**:
  - A chalk interrogation mark `?` sketches above slot 2 (F1425..F1460).
  - Callout card slides in below the array (Y: 580..670, F1440..F1480).
- **WHAT MUST NOT APPEAR YET**: Advancing mid wrongly.
- **COMPREHENSION HOLD**: F1531..F1548 — 17-frame pause for comprehension.
- **CLEANUP / EXIT**: Callout card remains.
- **PERSISTENT STATE**: Slot 2 clearly labeled as UNKNOWN value requiring examination.

---

#### ANCHOR 20: `S09_MISTAKE1_IF_MOVE_MID` (F1548 .. F1728)
- **ANCHOR**: `S09_MISTAKE1_IF_MOVE_MID` | Frames 1548..1728 (duration 180f, pause 11f) | Spoken text: "If we move mid immediately, we may skip that value without checking it."
- **WHAT APPEARS NOW**:
  - Red Bug Demonstration: Ghost pointer `mid` moves wrongly to slot 3!
  - Red warning stamp: `❌ BUG: SKIPPED nums[2] = 0! Array remains unsorted!`.
  - Code diff card:
    - `❌ nums[mid], nums[high] = nums[high], nums[mid]; high--; mid++;`
    - `✅ nums[mid], nums[high] = nums[high], nums[mid]; high--; // DO NOT increment mid!`
- **CENTER-STAGE HERO**: The ghost pointer skipping slot 2 and the fatal Bug Stamp at X: 480..1440, Y: 560..710.
- **CAUSE**: Visualizing the catastrophic failure caused by incrementing `mid`.
- **EFFECT / MOTION**:
  - Ghost pointer darts past slot 2 to slot 3 with error sound wave visual (F1560..F1600).
  - Slot 2 turns red with `SKIPPED!` label flashing (F1600..F1640).
  - Code diff card slides in with glowing green correction (F1640..F1700).
- **WHAT MUST NOT APPEAR YET**: Mistake 2 (`while mid < high`).
- **COMPREHENSION HOLD**: F1700..F1728 — 28-frame hold to let the bug demonstration resonate.
- **CLEANUP / EXIT**: Ghost pointer disappears; diff card clears.
- **PERSISTENT STATE**: Pitfall 1 completely debunked; canvas transitions to Pitfall 2.

---

#### ANCHOR 21: `S09_MISTAKE2_WHILE_STRICT` (F1728 .. F1902)
- **ANCHOR**: `S09_MISTAKE2_WHILE_STRICT` | Frames 1728..1902 (duration 174f, pause 26f) | Spoken text: "Another common mistake is using while mid is less than high."
- **WHAT APPEARS NOW**:
  - Header updates to: `⚠️ PITFALL 2: STRICT INEQUALITY in LOOP CONDITION`.
  - Flawed code banner: `while (mid < high) { ... }` in red chalk box.
  - Array track shows `mid` at slot 3 and `high` at slot 3 (`mid == high`).
- **CENTER-STAGE HERO**: The flawed loop condition card and the overlapping pointers at slot 3.
- **CAUSE**: Narration introduces Pitfall 2.
- **EFFECT / MOTION**:
  - Flawed code box drops in with red chalk border (F1735..F1765).
  - Pointers `mid` and `high` slide toward slot 3 from left and right until they align directly over slot 3 (F1770..F1830).
- **WHAT MUST NOT APPEAR YET**: The fix (`<=`).
- **COMPREHENSION HOLD**: F1876..F1902 — 26-frame hold on `mid == high`.
- **CLEANUP / EXIT**: Code banner stays centered.
- **PERSISTENT STATE**: `mid == high` at slot 3; flawed condition displayed.

---

#### ANCHOR 22: `S09_MISTAKE2_NOT_ENOUGH` (F1902 .. F1954)
- **ANCHOR**: `S09_MISTAKE2_NOT_ENOUGH` | Frames 1902..1954 (duration 52f, pause 20f) | Spoken text: "That is not enough."
- **WHAT APPEARS NOW**:
  - Giant red chalk strike-through slices across `<` in `while (mid < high)`.
  - Negative stamp: `TERMINATES PREMATURELY!`.
- **CENTER-STAGE HERO**: The red strike across `<`.
- **CAUSE**: Emphatic rejection of the strict inequality.
- **EFFECT / MOTION**:
  - Red chalk slash draws diagonally across `<` using `RoughLine` (F1905..F1925).
  - Red stamp slams down with spring scale impact (F1920..F1940).
- **WHAT MUST NOT APPEAR YET**: Correct code banner.
- **COMPREHENSION HOLD**: F1934..F1954 — 20-frame pause.
- **CLEANUP / EXIT**: Red strike settles.
- **PERSISTENT STATE**: `<` clearly marked invalid.

---

#### ANCHOR 23: `S09_MISTAKE2_NEED_LEQ` (F1954 .. F2095)
- **ANCHOR**: `S09_MISTAKE2_NEED_LEQ` | Frames 1954..2095 (duration 141f, pause 18f) | Spoken text: "We need while mid is less than or equal to high."
- **WHAT APPEARS NOW**:
  - Correct code banner: `while (mid <= high) { ... }` in emerald green chalk box (`#6EE7B7`).
  - Glowing badge on `<=`: `LESS THAN OR EQUAL TO`.
- **CENTER-STAGE HERO**: The correct loop condition card at X: 560..1360, Y: 180..260.
- **CAUSE**: Narration delivers the correct invariant requirement.
- **EFFECT / MOTION**:
  - Correct code banner slides in, replacing the crossed-out banner (F1955..F1990).
  - Green chalk highlight glows around `<=`.
- **WHAT MUST NOT APPEAR YET**: Detailed reason explanation.
- **COMPREHENSION HOLD**: F2077..F2095 — 18-frame hold.
- **CLEANUP / EXIT**: Banner stays pinned.
- **PERSISTENT STATE**: Correct condition `while (mid <= high)` displayed.

---

#### ANCHOR 24: `S09_MISTAKE2_REASON` (F2095 .. F2356)
- **ANCHOR**: `S09_MISTAKE2_REASON` | Frames 2095..2356 (duration 261f, pause 18f) | Spoken text: "Because when mid and high are on the same index, that last value is still unknown and must be processed."
- **WHAT APPEARS NOW**:
  - Spotlight on slot 3 where `mid == high`:
    - Slot 3 label: `UNKNOWN REGION HAS SIZE 1 (high - mid + 1 = 1)`.
    - Warning callout: `If loop stops when mid == high, this single element is NEVER classified!`.
  - Value in slot 3 pulses with interrogation mark: `[0, 0, 1, ❓, 2, 2]`.
- **CENTER-STAGE HERO**: Slot 3 with converging pointers `mid` and `high` and the size-1 unknown bracket.
- **CAUSE**: Narration explains why the single overlapping element cannot be skipped.
- **EFFECT / MOTION**:
  - Bracket `[3..3]` pulses in yellow chalk (F2105..F2150).
  - Micro-animation shows the value resolving into its proper position only when the loop processes it (F2180..F2260).
  - Green checkmark appears: `Processed & Placed!`.
- **WHAT MUST NOT APPEAR YET**: Mistake 3 (off-by-one high initialization).
- **COMPREHENSION HOLD**: F2338..F2356 — 18-frame hold.
- **CLEANUP / EXIT**: Invariant bracket settles.
- **PERSISTENT STATE**: Pitfall 2 completely resolved.

---

#### ANCHOR 25: `S09_MISTAKE3_OFF_BY_ONE` (F2356 .. F2564)
- **ANCHOR**: `S09_MISTAKE3_OFF_BY_ONE` | Frames 2356..2564 (duration 208f, pause 17f) | Spoken text: "Also remember, high starts at the last valid index. So high is n minus one."
- **WHAT APPEARS NOW**:
  - Header updates to: `⚠️ PITFALL 3: OFF-BY-ONE INITIALIZATION OF high`.
  - Array indexing diagram showing valid slots `0 .. n-1` and the out-of-bounds slot `n`.
  - Comparison cards:
    - `❌ high = len(nums);     // Out of bounds! IndexError on nums[high]`
    - `✅ high = len(nums) - 1; // Correct! Points to last valid element`
- **CENTER-STAGE HERO**: The array boundary visualization at X: 400..1520, Y: 260..620.
- **CAUSE**: Narration highlights the boundary index initialization bug.
- **EFFECT / MOTION**:
  - Ghost pointer `high` starts at slot `n` (outside array), triggering a red warning flash (F2365..F2410).
  - Pointer shifts left to slot `n - 1`, clicking into the green valid slot with a reassuring latch sound visual (F2410..F2455).
  - Green checkmark badge locks onto `high = n - 1`.
- **WHAT MUST NOT APPEAR YET**: 4 regions reminder.
- **COMPREHENSION HOLD**: F2547..F2564 — 17-frame hold.
- **CLEANUP / EXIT**: Boundary diagram clears.
- **PERSISTENT STATE**: Pitfall 3 resolved.

---

#### ANCHOR 26: `S09_FOUR_REGIONS_REMINDER` (F2564 .. F2729)
- **ANCHOR**: `S09_FOUR_REGIONS_REMINDER` | Frames 2564..2729 (duration 165f, pause 25f) | Spoken text: "One more important point. There are four logical regions, not three."
- **WHAT APPEARS NOW**:
  - Header updates to: `THE GOLDEN INVARIANT: FOUR LOGICAL REGIONS`.
  - Center stage displays a master partition track with 4 distinct color-coded zone brackets.
  - Large callout: `NOT 3 REGIONS (0s, 1s, 2s)... BUT 4!`.
- **CENTER-STAGE HERO**: Master 4-Region Partition Bar at X: 320..1600, Y: 320..460.
- **CAUSE**: Narration emphasizes the conceptual key to mastering the algorithm.
- **EFFECT / MOTION**:
  - Partition track expands across center stage (F2570..F2615).
  - Number `4` pulses with gold chalk glow (`#FFD166`, F2615..F2660).
  - Text `not three` receives a soft red strike.
- **WHAT MUST NOT APPEAR YET**: Individual region labels.
- **COMPREHENSION HOLD**: F2704..F2729 — 25-frame pause.
- **CLEANUP / EXIT**: 4 brackets ready to be populated.
- **PERSISTENT STATE**: 4-region partition bar established.

---

#### ANCHOR 27: `S09_REGIONS_LIST` (F2729 .. F2891)
- **ANCHOR**: `S09_REGIONS_LIST` | Frames 2729..2891 (duration 162f, pause 19f) | Spoken text: "Confirmed zeros, confirmed ones, unknown values and confirmed twos."
- **WHAT APPEARS NOW**:
  - The 4 regions illuminate sequentially:
    1. Region 1: `[0 .. low-1]` &rarr; `CONFIRMED 0s` (Red `#E05252`)
    2. Region 2: `[low .. mid-1]` &rarr; `CONFIRMED 1s` (White `#FFFDF7`)
    3. Region 3: `[mid .. high]` &rarr; `UNKNOWN VALUES` (Amber `#FFD166`)
    4. Region 4: `[high+1 .. n-1]` &rarr; `CONFIRMED 2s` (Blue `#60A5FA`)
- **CENTER-STAGE HERO**: The 4 illuminated region brackets across the partition bar.
- **CAUSE**: Narration enumerates each region explicitly.
- **EFFECT / MOTION**:
  - Region 1 lights up at F2735..F2765.
  - Region 2 lights up at F2765..F2795.
  - Region 3 lights up with bright amber beacon at F2795..F2835 ("unknown values").
  - Region 4 lights up at F2835..F2870.
- **WHAT MUST NOT APPEAR YET**: Section 3 Edge Cases.
- **COMPREHENSION HOLD**: F2872..F2891 — 19-frame pause to register the complete 4-region invariant.
- **CLEANUP / EXIT**: Section 2 elements fade out smoothly (F2875..F2891).
- **PERSISTENT STATE**: Act 2 complete; canvas clear for Act 3.

---

### ACT 3: COMPREHENSIVE EDGE CASES GRID (F2891 .. F3920)

#### ANCHOR 28: `S09_EDGE_CASES_INTRO` (F2891 .. F2950)
- **ANCHOR**: `S09_EDGE_CASES_INTRO` | Frames 2891..2950 (duration 59f, pause 19f) | Spoken text: "Now let's check edge cases."
- **WHAT APPEARS NOW**:
  - Top badge updates to: `PART 3 · COMPREHENSIVE EDGE CASES`.
  - Header: `DOES THE INVARIANT HOLD ACROSS ALL BOUNDARY INPUTS?`.
  - 6-card grid shell fades in (2 rows x 3 columns, spacious layout X: 160..1760, Y: 150..710).
- **CENTER-STAGE HERO**: The 6-card Edge Case Grid stage.
- **CAUSE**: Narration initiates the comprehensive edge case verification suite.
- **EFFECT / MOTION**:
  - Grid wireframe sketches in with chalk lines using `RoughBox` (F2895..F2930).
  - Cards 1 through 6 appear as empty chalk containers ready for testing.
- **WHAT MUST NOT APPEAR YET**: Testcase details inside cards.
- **COMPREHENSION HOLD**: F2931..F2950 — 19-frame hold to survey the test suite.
- **CLEANUP / EXIT**: Card shells persist.
- **PERSISTENT STATE**: 6 edge case cards ready for systematic validation.

---

#### ANCHOR 29: `S09_EDGE_ONE_VAL` (F2950 .. F3076)
- **ANCHOR**: `S09_EDGE_ONE_VAL` | Frames 2950..3076 (duration 126f, pause 18f) | Spoken text: "If the array has only one value, the same logic still works."
- **WHAT APPEARS NOW**:
  - Card 1 illuminates: `1. SINGLE ELEMENT [1]`.
  - Mini ArrayTrackV2 displays single slot `[1]` with `low=0, mid=0, high=0`.
  - Simulation badge: `1 iteration → mid++ → mid > high → Terminate!`.
  - Green checkmark badge: `✔ PASS`.
- **CENTER-STAGE HERO**: Card 1 at Row 1, Col 1 (X: 180..680, Y: 160..400).
- **CAUSE**: Narration tests the minimal array length boundary ($N=1$).
- **EFFECT / MOTION**:
  - Card 1 scales up subtly (1.0 -> 1.03, F2955..F2980).
  - Array element `[1]` pulses white.
  - Checkmark stamps in at F3030..F3055.
- **WHAT MUST NOT APPEAR YET**: Card 2 activation.
- **COMPREHENSION HOLD**: F3058..F3076 — 18-frame hold.
- **CLEANUP / EXIT**: Card 1 settles to static confirmed state.
- **PERSISTENT STATE**: Card 1 verified and stamped `PASS`.

---

#### ANCHOR 30: `S09_EDGE_ALL_ZERO` (F3076 .. F3164)
- **ANCHOR**: `S09_EDGE_ALL_ZERO` | Frames 3076..3164 (duration 88f, pause 13f) | Spoken text: "If all values are zero, it works."
- **WHAT APPEARS NOW**:
  - Card 2 illuminates: `2. ALL ZEROS [0, 0, 0]`.
  - Mini ArrayTrackV2 displays slots `[0, 0, 0]`.
  - Simulation badge: `low & mid advance together via self-swaps. Array untouched.`.
  - Green checkmark badge: `✔ PASS`.
- **CENTER-STAGE HERO**: Card 2 at Row 1, Col 2 (X: 710..1210, Y: 160..400).
- **CAUSE**: Narration tests homogeneous zero array.
- **EFFECT / MOTION**:
  - Card 2 scales up subtly (F3080..F3105).
  - Red elements `[0, 0, 0]` flash sequentially as `mid` and `low` walk across.
  - Checkmark stamps in at F3130..F3150.
- **WHAT MUST NOT APPEAR YET**: Card 3 activation.
- **COMPREHENSION HOLD**: F3151..F3164 — 13-frame hold.
- **CLEANUP / EXIT**: Card 2 settles.
- **PERSISTENT STATE**: Cards 1 and 2 verified.

---

#### ANCHOR 31: `S09_EDGE_ALL_ONE` (F3164 .. F3262)
- **ANCHOR**: `S09_EDGE_ALL_ONE` | Frames 3164..3262 (duration 98f, pause 17f) | Spoken text: "If all values are one, it works."
- **WHAT APPEARS NOW**:
  - Card 3 illuminates: `3. ALL ONES [1, 1, 1]`.
  - Mini ArrayTrackV2 displays slots `[1, 1, 1]`.
  - Simulation badge: `Zero swaps! mid simply increments 0 → 1 → 2 → 3.`.
  - Green checkmark badge: `✔ PASS`.
- **CENTER-STAGE HERO**: Card 3 at Row 1, Col 3 (X: 1240..1740, Y: 160..400).
- **CAUSE**: Narration tests homogeneous one array.
- **EFFECT / MOTION**:
  - Card 3 scales up subtly (F3168..F3195).
  - Pointer `mid` scans cleanly across all 3 elements without a single swap.
  - Checkmark stamps in at F3220..F3245.
- **WHAT MUST NOT APPEAR YET**: Card 4 activation.
- **COMPREHENSION HOLD**: F3245..F3262 — 17-frame hold.
- **CLEANUP / EXIT**: Card 3 settles.
- **PERSISTENT STATE**: Top row (Cards 1..3) fully verified.

---

#### ANCHOR 32: `S09_EDGE_ALL_TWO` (F3262 .. F3371)
- **ANCHOR**: `S09_EDGE_ALL_TWO` | Frames 3262..3371 (duration 109f, pause 25f) | Spoken text: "If all values are two, it works."
- **WHAT APPEARS NOW**:
  - Card 4 illuminates: `4. ALL TWOS [2, 2, 2]`.
  - Mini ArrayTrackV2 displays slots `[2, 2, 2]`.
  - Simulation badge: `mid stays at 0! high decrements 2 → 1 → 0 → -1.`.
  - Green checkmark badge: `✔ PASS`.
- **CENTER-STAGE HERO**: Card 4 at Row 2, Col 1 (X: 180..680, Y: 430..670).
- **CAUSE**: Narration tests homogeneous two array.
- **EFFECT / MOTION**:
  - Card 4 scales up subtly (F3266..F3295).
  - Blue elements `[2, 2, 2]` highlight as `high` moves leftward while `mid` remains locked.
  - Checkmark stamps in at F3325..F3350.
- **WHAT MUST NOT APPEAR YET**: Card 5 activation.
- **COMPREHENSION HOLD**: F3346..F3371 — 25-frame pause.
- **CLEANUP / EXIT**: Card 4 settles.
- **PERSISTENT STATE**: Cards 1..4 verified.

---

#### ANCHOR 33: `S09_EDGE_ALREADY_SORTED` (F3371 .. F3497)
- **ANCHOR**: `S09_EDGE_ALREADY_SORTED` | Frames 3371..3497 (duration 126f, pause 25f) | Spoken text: "If the array is already sorted, it works."
- **WHAT APPEARS NOW**:
  - Card 5 illuminates: `5. ALREADY SORTED [0, 1, 2]`.
  - Mini ArrayTrackV2 displays slots `[0, 1, 2]`.
  - Simulation badge: `Clean linear partition in minimal operations. No regressions.`.
  - Green checkmark badge: `✔ PASS`.
- **CENTER-STAGE HERO**: Card 5 at Row 2, Col 2 (X: 710..1210, Y: 430..670).
- **CAUSE**: Narration tests best-case already sorted input.
- **EFFECT / MOTION**:
  - Card 5 scales up subtly (F3375..F3405).
  - Pointers traverse smoothly: 0 placed, 1 passed, 2 placed.
  - Checkmark stamps in at F3445..F3470.
- **WHAT MUST NOT APPEAR YET**: Card 6 activation.
- **COMPREHENSION HOLD**: F3472..F3497 — 25-frame pause.
- **CLEANUP / EXIT**: Card 5 settles.
- **PERSISTENT STATE**: Cards 1..5 verified.

---

#### ANCHOR 34: `S09_EDGE_REVERSE` (F3497 .. F3712)
- **ANCHOR**: `S09_EDGE_REVERSE` | Frames 3497..3712 (duration 215f, pause 28f) | Spoken text: "And even if it starts in reverse order, the same invariant still handles it."
- **WHAT APPEARS NOW**:
  - Card 6 illuminates: `6. REVERSE SORTED [2, 1, 0]`.
  - Mini ArrayTrackV2 displays slots `[2, 1, 0]`.
  - Simulation badge: `Standard 3 branches correctly send 2 right and 0 left.`.
  - Green checkmark badge: `✔ PASS`.
- **CENTER-STAGE HERO**: Card 6 at Row 2, Col 3 (X: 1240..1740, Y: 430..670).
- **CAUSE**: Narration tests worst-case inverted input.
- **EFFECT / MOTION**:
  - Card 6 scales up subtly (F3500..F3530).
  - Mini swap animation: `2` and `0` swap; array settles into `[0, 1, 2]`.
  - Checkmark stamps in at F3650..F3680.
- **WHAT MUST NOT APPEAR YET**: Final victory banner.
- **COMPREHENSION HOLD**: F3684..F3712 — 28-frame major pause for all 6 checkmarks to be seen together.
- **CLEANUP / EXIT**: Card 6 settles.
- **PERSISTENT STATE**: All 6 edge cases stamped `✔ PASS`.

---

#### ANCHOR 35: `S09_NO_SPECIAL_CASE` (F3712 .. F3797)
- **ANCHOR**: `S09_NO_SPECIAL_CASE` | Frames 3712..3797 (duration 85f, pause 26f) | Spoken text: "No special case is required."
- **WHAT APPEARS NOW**:
  - A glowing golden banner drops in above captions at Y: 710..780:
    `ZERO SPECIAL CASES · NO IF (N == 1) · NO EDGE CASE GUARDS`.
  - All 6 cards pulse in unison with emerald chalk glow.
- **CENTER-STAGE HERO**: The "Zero Special Cases" banner at X: 360..1560, Y: 710..780.
- **CAUSE**: Narration proclaims the architectural elegance of the invariant.
- **EFFECT / MOTION**:
  - Banner drops in with smooth spring ease (F3715..F3745).
  - All 6 cards emit subtle emerald particle halos.
- **WHAT MUST NOT APPEAR YET**: Final quote banner.
- **COMPREHENSION HOLD**: F3771..F3797 — 26-frame hold.
- **CLEANUP / EXIT**: Banner stays pinned.
- **PERSISTENT STATE**: Zero special case guarantee locked.

---

#### ANCHOR 36: `S09_POWER_INVARIANT` (F3797 .. F3920)
- **ANCHOR**: `S09_POWER_INVARIANT` | Frames 3797..3920 (duration 123f, pause 0f) | Spoken text: "That is the power of maintaining the regions correctly."
- **WHAT APPEARS NOW**:
  - Grand Finale Banner:
    `THE POWER OF LOOP INVARIANTS: PROVABLY CORRECT · ONE PASS · O(N) TIME · O(1) SPACE`.
  - Subtitle: `When each pointer preserves its region guarantee, edge cases solve themselves.`
- **CENTER-STAGE HERO**: The Grand Finale Banner at X: 260..1660, Y: 420..640 (Cards gently dim to 0.4 opacity, giving banner center focus).
- **CAUSE**: Narration delivers the overarching algorithmic lesson of the entire question.
- **EFFECT / MOTION**:
  - Grand banner expands with elegant chalk bloom (F3800..F3845).
  - Golden borders pulse steadily until F3920.
- **WHAT MUST NOT APPEAR YET**: Next scene elements.
- **COMPREHENSION HOLD**: F3880..F3920 — 40-frame full conclusion hold.
- **CLEANUP / EXIT**: Canvas ready for transition to Scene 10.
- **PERSISTENT STATE**: Scene 09 fully resolved and complete.

---

## Critical Frame Review Checklist

| Critical Beat | Frame | Visual Verification Target |
|---|---|---|
| ENTRY | F10 | Top badges render, chalk axes draw on left graph container. |
| COUNTING TIME/SPACE | F150 | Counting card active, O(N) curve and O(1) space lines visible. |
| DNF ENTRANCE & 1-PASS | F650 | DNF card active, single-pass winner badge illuminated. |
| WHY O(N) PROOF TRACK | F850 | Pointer convergence track active, mid and high arrows converging. |
| UNKNOWN REGION ZERO | F980 | Unknown interval contracts to 0; verdict card stamped O(N). |
| PITFALL 1: DONT MOVE MID | F1330 | Value swapped from high lands at mid; lock icon on mid pointer. |
| PITFALL 1: BUG EXPOSURE | F1650 | Ghost pointer skips unexamined slot; red bug diff illuminated. |
| PITFALL 2: WHILE STRICT | F1850 | mid == high overlap on slot 3; red strike across `<` condition. |
| PITFALL 3: HIGH N-1 | F2450 | Boundary index track verifies high = n - 1. |
| FOUR REGIONS REMINDER | F2820 | Master 4-region partition bar with all 4 regions illuminated. |
| EDGE CASES GRID | F3200 | Top row edge cases verified with mini array tracks and checkmarks. |
| ALL EDGE CASES PASS | F3690 | All 6 cards verified with green checkmarks. |
| ZERO SPECIAL CASES BANNER | F3750 | Banner confirms no special if-statements required. |
| GRAND FINALE SETTLE | F3900 | Master loop invariant victory banner fully bloomed and settled. |
