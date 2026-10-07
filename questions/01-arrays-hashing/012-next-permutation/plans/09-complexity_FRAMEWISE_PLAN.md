# Scene 09 · Framewise Scene Plan: Complexity, Common Mistakes & Edge Cases

**Question:** 012 · Next Permutation (LeetCode 31)  
**Scene:** `09-complexity`  
**Audio File:** `remotion-project/public/audio/012/09-complexity.mp3`  
**Total Frames:** 4156 @ 30 FPS (138.52s)  
**Total Anchors:** 35  
**Visual Aesthetic Standard:** Oxford Chalkboard with Translucent Wash (matching `s03_f1250.png`)  

---

## 0. Visual Composition & Zero-Collision Layout Contract

- **Vertical Budget:**
  - Header: Y: 30 .. 80px (`[ 01 · ARRAYS & HASHING · LC 31 ]`, `Next Permutation`, dynamic scene subtitle)
  - Subtitle / Eyebrow: Y: 95 .. 125px (Dynamic section indicators: Complexity Breakdown, Brute Contrast, Mistakes to Avoid, Edge Cases)
  - Center Stage: Y: 145 .. 760px (Height: 615px).
    - Block 1 (F0..F1128): Complexity Passes & Cost Breakdown (Pass Cards + Additive Formula + O(N)/O(1) Badges)
    - Block 2 (F1128..F1747): Combinatorial Scale & Brute Force Contrast (N! Factorial Permutations vs In-Place Array)
    - Block 3 (F1747..F2922): 4 Common Mistakes sequential spotlight (Strict Pivot, Strict Successor, Minimal Increase, Reverse from i+1)
    - Block 4 (F2922..F4156): 4 Edge Cases Array V2 demos ([3,2,1] Wraparound, [1,2,3] Increasing, Single Element, Duplicate Values)
  - Bottom Captions: Y: 980px, leaving $\ge 220\text{px}$ of pristine chalkboard breathing room above captions.
- **Aesthetic Law:** Authentic translucent chalkboard wash (`rgba(10, 48, 42, 0.68..0.76)`), `RoughBox` hand-drawn borders, `RoughLine` dividers, monospace code/equations with chalk styling. Absolutely NO solid opaque black rectangles.
- **Array V2 Law:** All proof arrays use `ArrayTrackV2` with stationary slots and indices.

---

## 1. Framewise Semantic Anchor Choreography

### Beat 01 — `S09_OPEN` (F0 .. F83 · 83f · 2.77s)

**ANCHOR:** `S09_OPEN` — "Now let's look at the complexity."  
**WHAT APPEARS NOW:** Scene 09 title banner enters top center: 'COMPLEXITY ANALYSIS & INVARIANTS'. Center stage reveals a clean translucent chalkboard card with 3 sequential pass lanes outlined.  
**CENTER-STAGE HERO:** Three-Pass Complexity Canvas shell.  
**CAUSE:** Opening narration transitioning from algorithm implementation to rigorous runtime and space analysis.  
**EFFECT / MOTION:** F0..F30: Soft opacity fade and gentle scale up from 0.98 to 1.0.  
**WHAT MUST NOT APPEAR YET:** Pass details, Big-O badges, mistake cards.  
**COMPREHENSION HOLD:** F30..F83: Clean introductory contemplation of the 3 distinct phases.  
**CLEANUP / EXIT:** Smoothly highlights Pass 1 on F83.  
**PERSISTENT STATE:** Three-Pass breakdown card structure at center stage.  

---

### Beat 02 — `S09_PIVOT_SCAN` (F83 .. F185 · 102f · 3.40s)

**ANCHOR:** `S09_PIVOT_SCAN` — "The pivot scan moves from right to left."  
**WHAT APPEARS NOW:** Pass 1 card highlights: 'Pass 1: Find Pivot i'. A mini 6-slot array shows a right-to-left scan arrow from index n-2 towards 0.  
**CENTER-STAGE HERO:** Pass 1 Right-to-Left Pivot Scan lane.  
**CAUSE:** Narration: 'The pivot scan moves from right to left.'  
**EFFECT / MOTION:** F83..F140: Arrow draws from right to left across indices with chalk trace.  
**WHAT MUST NOT APPEAR YET:** Worst-case boundary count (<= N).  
**COMPREHENSION HOLD:** F140..F185: Hold on direction arrow moving leftwards.  
**CLEANUP / EXIT:** Arrow settles, worst-case bound tag activates on F185.  
**PERSISTENT STATE:** Pass 1 card active with directional indicator.  

---

### Beat 03 — `S09_PIVOT_WORST` (F185 .. F307 · 122f · 4.07s)

**ANCHOR:** `S09_PIVOT_WORST` — "In the worst case, it can inspect the whole array."  
**WHAT APPEARS NOW:** Worst-case tag stamps on Pass 1: 'Inspecting at most N elements' (Cost <= N operations).  
**CENTER-STAGE HERO:** Pass 1 Worst-Case Cost Stamp (<= N).  
**CAUSE:** Narration: 'In the worst case, it can inspect the whole array.'  
**EFFECT / MOTION:** F185..F240: Tag fades in with amber chalk underline highlighting '<= N operations'.  
**WHAT MUST NOT APPEAR YET:** Pass 2 details.  
**COMPREHENSION HOLD:** F240..F307: Viewer absorbs that Pass 1 touches at most N elements.  
**CLEANUP / EXIT:** Pass 1 card shifts to settled state; Pass 2 activates on F307.  
**PERSISTENT STATE:** Pass 1 card showing '<= N operations'.  

---

### Beat 04 — `S09_SUCCESSOR_SCAN` (F307 .. F528 · 221f · 7.37s)

**ANCHOR:** `S09_SUCCESSOR_SCAN` — "The successor scan also moves from right to left, over at most the array length."  
**WHAT APPEARS NOW:** Pass 2 card activates: 'Pass 2: Find Successor j'. Shows right-to-left search arrow from index n-1 to i+1 with cost stamp '<= N operations'.  
**CENTER-STAGE HERO:** Pass 2 Right-to-Left Successor Scan lane.  
**CAUSE:** Narration: 'The successor scan also moves from right to left, over at most the array length.'  
**EFFECT / MOTION:** F307..F420: Arrow draws right-to-left; cost stamp '<= N operations' fades in with cyan chalk accent.  
**WHAT MUST NOT APPEAR YET:** Pass 3 details.  
**COMPREHENSION HOLD:** F420..F528: Viewer observes both scans are bounded linearly by N.  
**CLEANUP / EXIT:** Pass 2 card shifts to settled state; Pass 3 activates on F528.  
**PERSISTENT STATE:** Pass 1 (<= N) and Pass 2 (<= N) side by side.  

---

### Beat 05 — `S09_REVERSE_SCAN` (F528 .. F680 · 152f · 5.07s)

**ANCHOR:** `S09_REVERSE_SCAN` — "And the final reverse touches at most the suffix once."  
**WHAT APPEARS NOW:** Pass 3 card activates: 'Pass 3: Reverse Suffix'. Suffix two-pointer two-way swap indicator reveals cost: '<= N/2 swaps (<= N operations)'.  
**CENTER-STAGE HERO:** Pass 3 Suffix Reversal lane.  
**CAUSE:** Narration: 'And the final reverse touches at most the suffix once.'  
**EFFECT / MOTION:** F528..F620: Two pointers (left and right) converge; cost stamp '<= N operations' activates.  
**WHAT MUST NOT APPEAR YET:** Additive equation formula.  
**COMPREHENSION HOLD:** F620..F680: Viewer sees all 3 passes established with linear upper bounds.  
**CLEANUP / EXIT:** Prepares central bracket connecting all 3 passes.  
**PERSISTENT STATE:** All 3 passes visible: Pass 1 (<= N), Pass 2 (<= N), Pass 3 (<= N).  

---

### Beat 06 — `S09_SEPARATE` (F680 .. F750 · 70f · 2.33s)

**ANCHOR:** `S09_SEPARATE` — "These are separate linear passes."  
**WHAT APPEARS NOW:** A visual mathematical divider connects the 3 passes with plus signs: 'Pass 1 + Pass 2 + Pass 3'. Eyebrow emphasizes 'SEQUENTIAL PASSES (NOT NESTED)'.  
**CENTER-STAGE HERO:** Sequential Additive Formula (Pass 1 + Pass 2 + Pass 3).  
**CAUSE:** Narration: 'These are separate linear passes.'  
**EFFECT / MOTION:** F680..F720: Connecting plus signs draw between cards; amber bracket highlights independence.  
**WHAT MUST NOT APPEAR YET:** Multiplication negation stamp.  
**COMPREHENSION HOLD:** F720..F750: Visual clarity that loops run one after another.  
**CLEANUP / EXIT:** Red strikethrough symbol appears over multiplication symbol on F750.  
**PERSISTENT STATE:** Additive connection between all 3 passes.  

---

### Beat 07 — `S09_NOT_MULTIPLY` (F750 .. F805 · 55f · 1.83s)

**ANCHOR:** `S09_NOT_MULTIPLY` — "We do not multiply them."  
**WHAT APPEARS NOW:** Prominent callout stamp: 'NO NESTED LOOPS: N + N + N <= 3N' with a red strike through 'N * N'.  
**CENTER-STAGE HERO:** Multiplication Refutation Callout (N + N + N <= 3N, not N*N).  
**CAUSE:** Narration: 'We do not multiply them.'  
**EFFECT / MOTION:** F750..F780: Bold red chalk slash crosses out 'N * N * N'; green chalk circles 'N + N + N <= 3N'.  
**WHAT MUST NOT APPEAR YET:** Final Big-O badge.  
**COMPREHENSION HOLD:** F780..F805: Core algorithmic rule reinforced: sequential passes add linearly.  
**CLEANUP / EXIT:** Transition equation simplifies to O(N).  
**PERSISTENT STATE:** Additive proof: <= 3N operations.  

---

### Beat 08 — `S09_TIME` (F805 .. F926 · 121f · 4.03s)

**ANCHOR:** `S09_TIME` — "So the total time complexity is O of n,"  
**WHAT APPEARS NOW:** Grand Time Complexity Badge emerges: 'TIME COMPLEXITY: O(N) LINEAR TIME' with glowing green chalkboard frame.  
**CENTER-STAGE HERO:** Time Complexity Stamp: O(N).  
**CAUSE:** Narration: 'So the total time complexity is O of n,'  
**EFFECT / MOTION:** F805..F860: Badge scales in with subtle pulse; <= 3N simplifies to O(N).  
**WHAT MUST NOT APPEAR YET:** Space complexity details.  
**COMPREHENSION HOLD:** F860..F926: Viewer contemplates the optimal linear time guarantee.  
**CLEANUP / EXIT:** Shift focus to space complexity at F926.  
**PERSISTENT STATE:** Time Complexity O(N) badge visible.  

---

### Beat 09 — `S09_FEW_VARS` (F926 .. F1012 · 86f · 2.87s)

**ANCHOR:** `S09_FEW_VARS` — "and we only use a few index variables."  
**WHAT APPEARS NOW:** Space Breakdown Card slides in: 'Index Variables: i, j, left, right, n'. Shows 5 small integer variable chips taking negligible stack memory.  
**CENTER-STAGE HERO:** Fixed Pointer Variables Chip Container (i, j, left, right, n).  
**CAUSE:** Narration: 'and we only use a few index variables.'  
**EFFECT / MOTION:** F926..F970: 5 variable chips appear sequentially with chalk borders.  
**WHAT MUST NOT APPEAR YET:** O(1) Space badge.  
**COMPREHENSION HOLD:** F970..F1012: Hold showing exactly 5 primitive scalars used.  
**CLEANUP / EXIT:** Summon final space badge on F1012.  
**PERSISTENT STATE:** Variable chips visible.  

---

### Beat 10 — `S09_SPACE` (F1012 .. F1128 · 116f · 3.87s)

**ANCHOR:** `S09_SPACE` — "So the extra space is O of 1."  
**WHAT APPEARS NOW:** Grand Space Complexity Badge stamps: 'AUXILIARY SPACE: O(1) IN-PLACE' with cyan chalk accent.  
**CENTER-STAGE HERO:** Space Complexity Stamp: O(1) In-Place.  
**CAUSE:** Narration: 'So the extra space is O of 1.'  
**EFFECT / MOTION:** F1012..F1070: Badge illuminates alongside O(N) badge, completing the optimal efficiency summary.  
**WHAT MUST NOT APPEAR YET:** Brute force comparison cards.  
**COMPREHENSION HOLD:** F1070..F1128: Both badges O(N) time and O(1) space displayed with zero collisions.  
**CLEANUP / EXIT:** Complexity cards smoothly slide out to make room for Brute Force comparison.  
**PERSISTENT STATE:** Transition state into Brute Force contrast.  

---

### Beat 11 — `S09_COMPARE_BRUTE` (F1128 .. F1193 · 65f · 2.17s)

**ANCHOR:** `S09_COMPARE_BRUTE` — "Now compare that with brute force."  
**WHAT APPEARS NOW:** Header updates to 'METHOD COMPARISON: BRUTE FORCE VS OPTIMAL'. Center stage sets up dual contrast layout (Left: Brute Force, Right: Optimal In-Place).  
**CENTER-STAGE HERO:** Dual Comparison Arena Setup.  
**CAUSE:** Narration: 'Now compare that with brute force.'  
**EFFECT / MOTION:** F1128..F1160: Dual column chalkboard wash cards fade in.  
**WHAT MUST NOT APPEAR YET:** N! factorial tree / metrics.  
**COMPREHENSION HOLD:** F1160..F1193: Viewer prepares for the stark combinatorial contrast.  
**CLEANUP / EXIT:** Activates Brute Force permutation tree on F1193.  
**PERSISTENT STATE:** Comparison layout: Left (Brute Force) vs Right (Optimal).  

---

### Beat 12 — `S09_N_FACTORIAL` (F1193 .. F1384 · 191f · 6.37s)

**ANCHOR:** `S09_N_FACTORIAL` — "With n distinct values, there can be n factorial permutations."  
**WHAT APPEARS NOW:** Brute Force panel renders the Permutation Tree expanding exponentially: 'N Distinct Elements -> N! Total Permutations'. Example callout: 'N=3 -> 6, N=5 -> 120, N=10 -> 3,628,800!'.  
**CENTER-STAGE HERO:** Factorial Explosion Tree (N!).  
**CAUSE:** Narration: 'With n distinct values, there can be n factorial permutations.'  
**EFFECT / MOTION:** F1193..F1280: Tree branches fan out; factorial formula pulses with amber warning color.  
**WHAT MUST NOT APPEAR YET:** Storage and generation penalty.  
**COMPREHENSION HOLD:** F1280..F1384: Viewer absorbs how impossibly fast N! grows.  
**CLEANUP / EXIT:** Adds memory and generation cost breakdown on F1384.  
**PERSISTENT STATE:** Factorial growth card active on the left.  

---

### Beat 13 — `S09_GENERATE_STORE` (F1384 .. F1521 · 137f · 4.57s)

**ANCHOR:** `S09_GENERATE_STORE` — "Generating and storing all of them is already factorial scale work."  
**WHAT APPEARS NOW:** Warning callout on Brute panel: 'Factorial Scale Work: Generating O(N! * N) elements & storing full permutation table in memory!'.  
**CENTER-STAGE HERO:** Factorial Generation & Storage Penalty Banner.  
**CAUSE:** Narration: 'Generating and storing all of them is already factorial scale work.'  
**EFFECT / MOTION:** F1384..F1440: Memory overflow warning icon and O(N! * N) equations highlight in crimson.  
**WHAT MUST NOT APPEAR YET:** Sorting overhead.  
**COMPREHENSION HOLD:** F1440..F1521: Clear comprehension of the prohibitive memory/CPU wall.  
**CLEANUP / EXIT:** Adds sorting penalty on F1521.  
**PERSISTENT STATE:** Generation and storage penalty visible.  

---

### Beat 14 — `S09_SORT_ADDS` (F1521 .. F1622 · 101f · 3.37s)

**ANCHOR:** `S09_SORT_ADDS` — "And sorting them adds even more work."  
**WHAT APPEARS NOW:** Additional penalty tag: 'Lexicographical Sorting Overhead: O(N! * log(N!) * N) additional operations!'.  
**CENTER-STAGE HERO:** Lexicographical Sort Overhead Callout.  
**CAUSE:** Narration: 'And sorting them adds even more work.'  
**EFFECT / MOTION:** F1521..F1570: Red warning stamp adds sorting complexity to brute force total.  
**WHAT MUST NOT APPEAR YET:** Optimal contrast reveal.  
**COMPREHENSION HOLD:** F1570..F1622: Full picture of Brute Force catastrophe established.  
**CLEANUP / EXIT:** Right panel (Optimal Method) illuminates triumphantly on F1622.  
**PERSISTENT STATE:** Full Brute Force cost summary on left.  

---

### Beat 15 — `S09_DIRECT` (F1622 .. F1747 · 125f · 4.17s)

**ANCHOR:** `S09_DIRECT` — "The optimal method works directly on the current array."  
**WHAT APPEARS NOW:** Right panel lights up with emerald chalkboard glow: 'OPTIMAL IN-PLACE TRANSFORMATION: Zero permutation generation. Surgical in-place swaps directly on nums array. O(N) Time, O(1) Space!'.  
**CENTER-STAGE HERO:** Optimal In-Place Method Superiority Card.  
**CAUSE:** Narration: 'The optimal method works directly on the current array.'  
**EFFECT / MOTION:** F1622..F1680: Emerald border shines; checkmarks appear for direct in-place efficiency.  
**WHAT MUST NOT APPEAR YET:** Common mistakes section.  
**COMPREHENSION HOLD:** F1680..F1747: Viewer enjoys the clear contrast between N! disaster and O(N) elegance.  
**CLEANUP / EXIT:** Comparison panels fade out cleanly on F1747.  
**PERSISTENT STATE:** Transition to Common Mistakes section.  

---

### Beat 16 — `S09_MISTAKES` (F1747 .. F1830 · 83f · 2.77s)

**ANCHOR:** `S09_MISTAKES` — "There are a few mistakes to avoid."  
**WHAT APPEARS NOW:** Header updates to: 'PITFALLS & COMMON MISTAKES TO AVOID'. Center stage presents an empty gallery card ready for 4 key algorithmic pitfalls.  
**CENTER-STAGE HERO:** Common Mistakes Overview Card.  
**CAUSE:** Narration: 'There are a few mistakes to avoid.'  
**EFFECT / MOTION:** F1747..F1790: Card fades in with warning beacon icon and '4 CRITICAL PITFALLS' counter.  
**WHAT MUST NOT APPEAR YET:** Mistake 1 details.  
**COMPREHENSION HOLD:** F1790..F1830: Sets expectations for defensive interview coding.  
**CLEANUP / EXIT:** Mistake 1 activates on F1830.  
**PERSISTENT STATE:** Mistakes gallery container.  

---

### Beat 17 — `S09_PIVOT_STRICT` (F1830 .. F2108 · 278f · 9.27s)

**ANCHOR:** `S09_PIVOT_STRICT` — "For the pivot, we need a strict increase. We are looking for nums at i smaller than nums at i plus 1."  
**WHAT APPEARS NOW:** Mistake 1 Card: 'MISTAKE 1: NON-STRICT PIVOT INEQUALITY'. Code comparison: WRONG: 'nums[i] <= nums[i+1]' vs CORRECT: 'nums[i] < nums[i+1]'.  
**CENTER-STAGE HERO:** Strict Pivot Inequality Rule (nums[i] < nums[i+1]).  
**CAUSE:** Narration: 'For the pivot, we need a strict increase. We are looking for nums at i smaller than nums at i plus 1.'  
**EFFECT / MOTION:** F1830..F1950: Code snippets appear; green checkmark on strict '<', red cross on '<='.  
**WHAT MUST NOT APPEAR YET:** Equal values demonstration.  
**COMPREHENSION HOLD:** F1950..F2108: Long comprehension hold showing that a plateau is NOT a dip.  
**CLEANUP / EXIT:** Equal values callout activates on F2108.  
**PERSISTENT STATE:** Mistake 1 rule visible.  

---

### Beat 18 — `S09_EQUAL_NO` (F2108 .. F2192 · 84f · 2.80s)

**ANCHOR:** `S09_EQUAL_NO` — "Equal values do not qualify."  
**WHAT APPEARS NOW:** Concrete counter-example: Array snippet '[... 4, 4 ...]'. Condition check: '4 < 4 is FALSE -> i continues moving left! Equal values do NOT qualify as a pivot!'.  
**CENTER-STAGE HERO:** Plateau Counter-Example (4 < 4 is FALSE).  
**CAUSE:** Narration: 'Equal values do not qualify.'  
**EFFECT / MOTION:** F2108..F2150: Red alert box highlights '4 < 4 = FALSE' with bold chalk stamp.  
**WHAT MUST NOT APPEAR YET:** Mistake 2.  
**COMPREHENSION HOLD:** F2150..F2192: Viewer sees why flat duplicates continue the scan.  
**CLEANUP / EXIT:** Mistake 1 card slides left; Mistake 2 activates on F2192.  
**PERSISTENT STATE:** Strict inequality requirement established.  

---

### Beat 19 — `S09_SUCCESSOR_STRICT` (F2192 .. F2363 · 171f · 5.70s)

**ANCHOR:** `S09_SUCCESSOR_STRICT` — "For the successor, we also need a value strictly greater than the pivot."  
**WHAT APPEARS NOW:** Mistake 2 Card: 'MISTAKE 2: NON-STRICT SUCCESSOR INEQUALITY'. Code comparison: WRONG: 'nums[j] >= nums[i]' vs CORRECT: 'nums[j] > nums[i]'.  
**CENTER-STAGE HERO:** Strict Successor Inequality Rule (nums[j] > nums[i]).  
**CAUSE:** Narration: 'For the successor, we also need a value strictly greater than the pivot.'  
**EFFECT / MOTION:** F2192..F2280: Code comparison renders; green highlight on 'nums[j] > nums[i]'.  
**WHAT MUST NOT APPEAR YET:** Equal rejection explanation.  
**COMPREHENSION HOLD:** F2280..F2363: Clear distinction of strict greater-than requirement.  
**CLEANUP / EXIT:** Equal rejection stamp activates on F2363.  
**PERSISTENT STATE:** Mistake 2 rule visible.  

---

### Beat 20 — `S09_EQUAL_NOT_ENOUGH` (F2363 .. F2440 · 77f · 2.57s)

**ANCHOR:** `S09_EQUAL_NOT_ENOUGH` — "Equal is not enough."  
**WHAT APPEARS NOW:** Explanation: 'If nums[j] == nums[i], swapping them creates an identical prefix and fails to advance the permutation! Equal is NOT enough!'.  
**CENTER-STAGE HERO:** Swapping Equal Values Rejection Stamp.  
**CAUSE:** Narration: 'Equal is not enough.'  
**EFFECT / MOTION:** F2363..F2400: Swapping identical values shown with an 'UNCHANGED PREFIX' red badge.  
**WHAT MUST NOT APPEAR YET:** Mistake 3.  
**COMPREHENSION HOLD:** F2400..F2440: Viewer understands swapping equals gives zero permutation progress.  
**CLEANUP / EXIT:** Mistake 2 card shifts; Mistake 3 activates on F2440.  
**PERSISTENT STATE:** Successor strict condition established.  

---

### Beat 21 — `S09_ANY_GREATER` (F2440 .. F2583 · 143f · 4.77s)

**ANCHOR:** `S09_ANY_GREATER` — "Another mistake is choosing any greater value from the suffix."  
**WHAT APPEARS NOW:** Mistake 3 Card: 'MISTAKE 3: PICKING ANY GREATER VALUE'. Example: If pivot is 1, and suffix has [5, 3, 2], picking 5 makes the jump too large!  
**CENTER-STAGE HERO:** Arbitrary Successor Flaw Callout.  
**CAUSE:** Narration: 'Another mistake is choosing any greater value from the suffix.'  
**EFFECT / MOTION:** F2440..F2510: Array [1, 5, 3, 2] shows jumping to 5 skips smaller valid permutations.  
**WHAT MUST NOT APPEAR YET:** Smallest increase requirement.  
**COMPREHENSION HOLD:** F2510..F2583: Comprehension of why 'just any greater' breaks immediate succession.  
**CLEANUP / EXIT:** Smallest increase principle activates on F2583.  
**PERSISTENT STATE:** Mistake 3 context visible.  

---

### Beat 22 — `S09_SMALLEST_INCREASE` (F2583 .. F2669 · 86f · 2.87s)

**ANCHOR:** `S09_SMALLEST_INCREASE` — "We need the smallest possible increase."  
**WHAT APPEARS NOW:** Principle Highlight: 'GOAL: SMALLEST POSSIBLE INCREASE. The replacement must be the immediate next larger element (e.g. 2, not 5)!'.  
**CENTER-STAGE HERO:** Minimal Increase Invariant Card.  
**CAUSE:** Narration: 'We need the smallest possible increase.'  
**EFFECT / MOTION:** F2583..F2620: Emerald target ring locks onto 2 as the true minimal successor.  
**WHAT MUST NOT APPEAR YET:** Right-scan justification.  
**COMPREHENSION HOLD:** F2620..F2669: Viewer grasps the mathematical necessity of minimal increment.  
**CLEANUP / EXIT:** Right-to-left scan reasoning activates on F2669.  
**PERSISTENT STATE:** Smallest increase invariant active.  

---

### Beat 23 — `S09_SCAN_RIGHT_REASON` (F2669 .. F2759 · 90f · 3.00s)

**ANCHOR:** `S09_SCAN_RIGHT_REASON` — "That is why we scan from the right."  
**WHAT APPEARS NOW:** Mechanism Reveal: 'WHY SCAN FROM RIGHT? The suffix is sorted descending. Scanning from the right visits elements in ascending order, so the FIRST element > nums[i] is guaranteed to be the smallest!'.  
**CENTER-STAGE HERO:** Right-to-Left Scan Guarantee Demonstration.  
**CAUSE:** Narration: 'That is why we scan from the right.'  
**EFFECT / MOTION:** F2669..F2710: Green arrow scans from right end, immediately stopping at the optimal minimal element.  
**WHAT MUST NOT APPEAR YET:** Mistake 4.  
**COMPREHENSION HOLD:** F2710..F2759: Eureka moment: descending order inverted equals ascending search!  
**CLEANUP / EXIT:** Mistake 3 settles; Mistake 4 activates on F2759.  
**PERSISTENT STATE:** Right-scan optimality rule confirmed.  

---

### Beat 24 — `S09_REVERSE_START` (F2759 .. F2860 · 101f · 3.37s)

**ANCHOR:** `S09_REVERSE_START` — "And after the swap, reverse from i plus 1."  
**WHAT APPEARS NOW:** Mistake 4 Card: 'MISTAKE 4: REVERSAL BOUNDARIES'. Code: 'reverse(nums, i + 1, n - 1)'. Suffix starting at index i+1 is inverted to become ascending.  
**CENTER-STAGE HERO:** Correct Reversal Starting Boundary (i + 1).  
**CAUSE:** Narration: 'And after the swap, reverse from i plus 1.'  
**EFFECT / MOTION:** F2759..F2810: Array bracket highlights range [i + 1 .. n - 1] in cyan chalk.  
**WHAT MUST NOT APPEAR YET:** Negative warning 'Do not reverse from i'.  
**COMPREHENSION HOLD:** F2810..F2860: Viewer sees the placed pivot at index i safely excluded from reversal.  
**CLEANUP / EXIT:** Warning against reversing from i activates on F2860.  
**PERSISTENT STATE:** Correct reversal range [i + 1 .. n - 1].  

---

### Beat 25 — `S09_NOT_I` (F2860 .. F2922 · 62f · 2.07s)

**ANCHOR:** `S09_NOT_I` — "Do not reverse from i."  
**WHAT APPEARS NOW:** Warning callout: 'DO NOT REVERSE FROM i! Reversing from i would destroy the freshly swapped pivot and ruin the prefix!'.  
**CENTER-STAGE HERO:** Reversing From i Warning Stamp.  
**CAUSE:** Narration: 'Do not reverse from i.'  
**EFFECT / MOTION:** F2860..F2890: Red X crosses out 'reverse(nums, i, n - 1)'; skull/alert icon flashes.  
**WHAT MUST NOT APPEAR YET:** Edge cases section.  
**COMPREHENSION HOLD:** F2890..F2922: Critical off-by-one warning firmly memorized.  
**CLEANUP / EXIT:** Mistake cards clear; transition to Edge Cases section at F2922.  
**PERSISTENT STATE:** All 4 mistakes covered.  

---

### Beat 26 — `S09_DESC` (F2922 .. F3083 · 161f · 5.37s)

**ANCHOR:** `S09_DESC` — "Now consider a fully decreasing array, 3, 2, 1."  
**WHAT APPEARS NOW:** Header updates to: 'CORNER CASES & ALGORITHM ROBUSTNESS'. Center stage displays Edge Case 1 Array: ArrayTrackV2 for [3, 2, 1] with indices [0, 1, 2].  
**CENTER-STAGE HERO:** Edge Case 1 Array Track: [3, 2, 1].  
**CAUSE:** Narration: 'Now consider a fully decreasing array, 3, 2, 1.'  
**EFFECT / MOTION:** F2922..F2980: ArrayTrackV2 enters with values 3, 2, 1; descending red gradient slope overlay.  
**WHAT MUST NOT APPEAR YET:** No pivot outcome.  
**COMPREHENSION HOLD:** F2980..F3083: Viewer sees the purely decreasing array.  
**CLEANUP / EXIT:** Step 1 pivot search runs on F3083.  
**PERSISTENT STATE:** Array [3, 2, 1] at center stage.  

---

### Beat 27 — `S09_NO_PIVOT` (F3083 .. F3122 · 39f · 1.30s)

**ANCHOR:** `S09_NO_PIVOT` — "There is no pivot."  
**WHAT APPEARS NOW:** Step 1 trace runs: Pointer i moves past 0 down to -1! Badge: 'NO PIVOT FOUND (i = -1)'.  
**CENTER-STAGE HERO:** No Pivot Indicator (i = -1).  
**CAUSE:** Narration: 'There is no pivot.'  
**EFFECT / MOTION:** F3083..F3110: Pointer i exits the array to index -1; amber badge announces i = -1.  
**WHAT MUST NOT APPEAR YET:** Semantic meaning (largest permutation).  
**COMPREHENSION HOLD:** F3110..F3122: Clear realization that no ascending pair exists.  
**CLEANUP / EXIT:** Largest permutation banner activates on F3122.  
**PERSISTENT STATE:** Pointer i at -1.  

---

### Beat 28 — `S09_LARGEST` (F3122 .. F3209 · 87f · 2.90s)

**ANCHOR:** `S09_LARGEST` — "So this is already the largest permutation."  
**WHAT APPEARS NOW:** Banner: 'ALREADY THE LARGEST PERMUTATION (Lexicographically Maximal)'. Condition: 'if i >= 0 is SKIPPED!'.  
**CENTER-STAGE HERO:** Lexicographically Maximal Callout.  
**CAUSE:** Narration: 'So this is already the largest permutation.'  
**EFFECT / MOTION:** F3122..F3160: Step 2 swap condition grayed out as skipped; wraparound logic primed.  
**WHAT MUST NOT APPEAR YET:** Reversal action.  
**COMPREHENSION HOLD:** F3160..F3209: Viewer sees Step 2 safely bypassed.  
**CLEANUP / EXIT:** Reversal of entire array begins on F3209.  
**PERSISTENT STATE:** Skipped Step 2 indicator.  

---

### Beat 29 — `S09_REV_WHOLE` (F3209 .. F3279 · 70f · 2.33s)

**ANCHOR:** `S09_REV_WHOLE` — "Reverse the whole array,"  
**WHAT APPEARS NOW:** Action: 'Step 3: reverse(nums, i + 1, n - 1) -> reverse(nums, 0, 2)'. Reversal bracket wraps the entire array!  
**CENTER-STAGE HERO:** Full Array Reversal Action [0 .. 2].  
**CAUSE:** Narration: 'Reverse the whole array,'  
**EFFECT / MOTION:** F3209..F3250: Cyan bracket spans all slots [0 .. 2]; swap flight arrows link 3 and 1.  
**WHAT MUST NOT APPEAR YET:** Final sorted result [1, 2, 3].  
**COMPREHENSION HOLD:** F3250..F3279: Swap execution in progress.  
**CLEANUP / EXIT:** Values settle in reversed order on F3279.  
**PERSISTENT STATE:** Reversal animation executing.  

---

### Beat 30 — `S09_WRAP_RESULT` (F3279 .. F3401 · 122f · 4.07s)

**ANCHOR:** `S09_WRAP_RESULT` — "and we get 1, 2, 3."  
**WHAT APPEARS NOW:** Result Array: [1, 2, 3] with green success aura! Label: 'WRAPAROUND COMPLETE: Smallest Permutation [1, 2, 3]! Perfect adherence to problem spec!'.  
**CENTER-STAGE HERO:** Wraparound Result Array: [1, 2, 3].  
**CAUSE:** Narration: 'and we get 1, 2, 3.'  
**EFFECT / MOTION:** F3279..F3340: Slots display 1, 2, 3; emerald checkmark and 'WRAPAROUND SUCCESS' stamp.  
**WHAT MUST NOT APPEAR YET:** Edge Case 2 (Already increasing).  
**COMPREHENSION HOLD:** F3340..F3401: Viewer witnesses the elegant automatic wraparound with zero special branches.  
**CLEANUP / EXIT:** Array [1, 2, 3] smoothly repurposed for Edge Case 2 at F3401.  
**PERSISTENT STATE:** Array [1, 2, 3] on screen.  

---

### Beat 31 — `S09_ALREADY_INC` (F3401 .. F3594 · 193f · 6.43s)

**ANCHOR:** `S09_ALREADY_INC` — "If the array is already increasing, like 1, 2, 3."  
**WHAT APPEARS NOW:** Edge Case 2 Label: 'EDGE CASE 2: ALREADY INCREASING ARRAY [1, 2, 3]'. The current array [1, 2, 3] is re-evaluated.  
**CENTER-STAGE HERO:** Edge Case 2 Array Track: [1, 2, 3].  
**CAUSE:** Narration: 'If the array is already increasing, like 1, 2, 3.'  
**EFFECT / MOTION:** F3401..F3460: Eyebrow switches to Edge Case 2; green ascending slope overlay appears.  
**WHAT MUST NOT APPEAR YET:** Pivot position analysis.  
**COMPREHENSION HOLD:** F3460..F3594: Viewer studies the ascending input.  
**CLEANUP / EXIT:** Step 1 pivot search begins on F3594.  
**PERSISTENT STATE:** Array [1, 2, 3] ready for trace.  

---

### Beat 32 — `S09_PIVOT_NEAR_RIGHT` (F3594 .. F3745 · 151f · 5.03s)

**ANCHOR:** `S09_PIVOT_NEAR_RIGHT` — "The pivot is near the right side, so only a small suffix changes."  
**WHAT APPEARS NOW:** Step 1 stops immediately at i = n-2 = 1 (since nums[1]=2 < nums[2]=3)! Swap 2 and 3 -> [1, 3, 2]. Suffix length is 0, so reversal is instantaneous.  
**CENTER-STAGE HERO:** Minimal Work Proof: Pivot at n-2.  
**CAUSE:** Narration: 'The pivot is near the right side, so only a small suffix changes.'  
**EFFECT / MOTION:** F3594..F3670: Pointer i highlights slot 1; values 2 and 3 swap to yield [1, 3, 2] in just 1 step!  
**WHAT MUST NOT APPEAR YET:** Edge Case 3 (Single value).  
**COMPREHENSION HOLD:** F3670..F3745: Viewer sees minimal work performed when array is ascending.  
**CLEANUP / EXIT:** Array transitions to single element at F3745.  
**PERSISTENT STATE:** Increasing case result verified.  

---

### Beat 33 — `S09_SINGLE` (F3745 .. F3857 · 112f · 3.73s)

**ANCHOR:** `S09_SINGLE` — "For a single value, there is nothing to change."  
**WHAT APPEARS NOW:** Edge Case 3: Single-element array '[ 7 ]' (length n=1). Trace: i = 1 - 2 = -1 (loop never runs), Step 2 skipped, Step 3 reverse(0, 0) finishes immediately. Array remains [ 7 ].  
**CENTER-STAGE HERO:** Single-Element Robustness Demo [ 7 ].  
**CAUSE:** Narration: 'For a single value, there is nothing to change.'  
**EFFECT / MOTION:** F3745..F3800: Array shrinks to single slot '[ 7 ]'; immediate green PASS checkmark.  
**WHAT MUST NOT APPEAR YET:** Edge Case 4 (Duplicates).  
**COMPREHENSION HOLD:** F3800..F3857: Viewer sees single element handled with zero crashes or index errors.  
**CLEANUP / EXIT:** Transitions to duplicate example at F3857.  
**PERSISTENT STATE:** Single element robustness verified.  

---

### Beat 34 — `S09_DUPLICATES` (F3857 .. F4049 · 192f · 6.40s)

**ANCHOR:** `S09_DUPLICATES` — "And duplicate values are also handled naturally, because both important comparisons are strict."  
**WHAT APPEARS NOW:** Edge Case 4: Array with duplicates: '[ 1, 5, 1 ]' and '[ 2, 3, 3, 1 ]'. Formula banner: 'STRICT INEQUALITIES HANDLE DUPLICATES: nums[i] < nums[i+1] ignores duplicate peaks; nums[j] > nums[i] skips duplicate successors!'.  
**CENTER-STAGE HERO:** Duplicate Invariant Proof Card.  
**CAUSE:** Narration: 'And duplicate values are also handled naturally, because both important comparisons are strict.'  
**EFFECT / MOTION:** F3857..F3950: Highlights '<' and '>' operators with glowing golden chalk; demonstrates duplicate elements gracefully skipped.  
**WHAT MUST NOT APPEAR YET:** Final conclusion banner.  
**COMPREHENSION HOLD:** F3950..F4049: Deep understanding of why no duplicate-handling code is required.  
**CLEANUP / EXIT:** Prepares grand synthesis conclusion on F4049.  
**PERSISTENT STATE:** Duplicate invariance proved.  

---

### Beat 35 — `S09_NO_SPECIAL` (F4049 .. F4156 · 107f · 3.57s)

**ANCHOR:** `S09_NO_SPECIAL` — "No special duplicate case is needed."  
**WHAT APPEARS NOW:** Grand Course Certification Stamp: 'ALGORITHM INVARIANTS FULLY VERIFIED. Zero Special Cases. O(N) Time. O(1) Auxiliary Space. Complete LeetCode 31 Mastery!'.  
**CENTER-STAGE HERO:** Mastery Certification Card.  
**CAUSE:** Narration: 'No special duplicate case is needed.'  
**EFFECT / MOTION:** F4049..F4100: Elegant gold and emerald Oxford seal stamps onto the chalkboard center stage.  
**WHAT MUST NOT APPEAR YET:** Nothing; scene reaches complete resolution.  
**COMPREHENSION HOLD:** F4100..F4156: Comprehensive hold honoring all learned algorithmic insights.  
**CLEANUP / EXIT:** Holds clean through F4156 to seamless video conclusion.  
**PERSISTENT STATE:** Final certified status on chalkboard.  

---

