# Scene 08 · Audio Sync Audit: Method 2 · Optimal Code

**Question:** 012 · Next Permutation (LeetCode 31)  
**Audio File:** `remotion-project/public/audio/012/08-optimal-code.mp3`  
**Duration:** 100.48s (3014 frames @ 30 FPS)  
**Total Words:** 228  
**Total Semantic Anchors:** 28  

## 1. Word Coverage Audit

- Words in JSON: **228**
- Words mapped to Anchors: **228**
- Unmapped / Skipped Words: **0**
- Frame Gaps / Overlaps: **0 (strictly continuous from frame 0 to frame 3014)**

## 2. Complete Anchor Table

| ID | Anchor | Frame Range | Duration | Spoken Phrase | Purpose |
|---|---|---|---|---|---|
| **01** | `S08_OPEN` | **F0 .. F86** | 86f (2.87s) | "Now let's write the optimal solution." | Empty live code surface appears. |
| **02** | `S08_N` | **F86 .. F174** | 88f (2.93s) | "First, store the array length in n," | Type line 1: n = len(nums) |
| **03** | `S08_I_INIT` | **F174 .. F263** | 89f (2.97s) | "then set i to n -2." | Type line 2: i = n - 2 |
| **04** | `S08_I_LEFT` | **F263 .. F310** | 47f (1.57s) | "We move i left." | Motivation for while loop and i -= 1 |
| **05** | `S08_WHILE_I` | **F310 .. F509** | 199f (6.63s) | "While i is valid, and nums at i is greater than or equal to nums at i plus 1." | Type line 3: while i >= 0 and nums[i] >= nums[i + 1]: and line 4: i -= 1 |
| **06** | `S08_LOOP_STOPS` | **F509 .. F682** | 173f (5.77s) | "When this loop stops, either we found the pivot, or no pivot exists." | Semantic proof: two possible exit states for i (i >= 0 or i == -1) |
| **07** | `S08_IF_I` | **F682 .. F837** | 155f (5.17s) | "If i is still greater than or equal to 0, we have a valid pivot." | Type line 5: if i >= 0: |
| **08** | `S08_J_INIT` | **F837 .. F914** | 77f (2.57s) | "Now set j to n minus 1." | Type line 6:     j = n - 1 |
| **09** | `S08_J_LEFT` | **F914 .. F959** | 45f (1.50s) | "Move j left," | Motivation for successor loop body: j -= 1 |
| **10** | `S08_WHILE_J` | **F959 .. F1098** | 139f (4.63s) | "while nums at j is less than or equal to nums at i." | Type line 7:     while nums[j] <= nums[i]: and line 8:         j -= 1 |
| **11** | `S08_J_MEANING` | **F1098 .. F1294** | 196f (6.53s) | "When that loop stops, j is the first value from the right. That is strictly greater than the pivot." | Semantic proof: j is guaranteed smallest value strictly larger than pivot |
| **12** | `S08_SWAP` | **F1294 .. F1406** | 112f (3.73s) | "Now swap nums at i with nums at j." | Type line 9:     nums[i], nums[j] = nums[j], nums[i] |
| **13** | `S08_LEFT` | **F1406 .. F1506** | 100f (3.33s) | "Next, set left to i plus 1," | Type line 10: left = i + 1 |
| **14** | `S08_RIGHT` | **F1506 .. F1573** | 67f (2.23s) | "and right to n minus 1." | Type line 11: right = n - 1 |
| **15** | `S08_REV_WHILE` | **F1573 .. F1651** | 78f (2.60s) | "While left is smaller than right," | Type line 12: while left < right: |
| **16** | `S08_REV_SWAP` | **F1651 .. F1757** | 106f (3.53s) | "swap nums at left with nums at right," | Type line 13:     nums[left], nums[right] = nums[right], nums[left] |
| **17** | `S08_LEFT_FWD` | **F1757 .. F1803** | 46f (1.53s) | "then move left forward" | Type line 14:     left += 1 |
| **18** | `S08_RIGHT_BACK` | **F1803 .. F1873** | 70f (2.33s) | "and right backward." | Type line 15:     right -= 1 |
| **19** | `S08_REVERSE_MEANING` | **F1873 .. F1958** | 85f (2.83s) | "This reverses the suffix in place." | Semantic proof: suffix [left..right] reversed O(K) in-place |
| **20** | `S08_NO_PIVOT` | **F1958 .. F2070** | 112f (3.73s) | "If no pivot was found, i becomes minus 1." | Docked proof: edge case [5, 4, 3, 2, 1], i drops to -1 |
| **21** | `S08_SKIP_SWAP` | **F2070 .. F2155** | 85f (2.83s) | "Then the swap block is skipped," | Highlight: if i >= 0: block is completely skipped |
| **22** | `S08_LEFT_ZERO` | **F2155 .. F2249** | 94f (3.13s) | "and left becomes 0 automatically." | Evaluate: left = i + 1 = -1 + 1 = 0 automatically! |
| **23** | `S08_SAME_REVERSE` | **F2249 .. F2398** | 149f (4.97s) | "So the same reverse loop reverses the whole array." | Proof: reverse [0..n-1] turns entire array into ascending order |
| **24** | `S08_LARGEST_SMALLEST` | **F2398 .. F2566** | 168f (5.60s) | "That turns the largest permutation into the smallest permutation." | Wraparound guarantee: [5, 4, 3, 2, 1] -> [1, 2, 3, 4, 5] |
| **25** | `S08_NOT_MEMORIZE` | **F2566 .. F2678** | 112f (3.73s) | "The important part is not memorizing these lines." | Philosophy transition: 3 universal algorithmic invariants |
| **26** | `S08_REASON1` | **F2678 .. F2884** | 206f (6.87s) | "Each line follows the same reasoning. Find the rightmost place that can increase." | Invariant 1 card: Find rightmost non-maximal element (pivot) |
| **27** | `S08_REASON2` | **F2884 .. F2959** | 75f (2.50s) | "Make the smallest increase." | Invariant 2 card: Swap with next greater element (successor) |
| **28** | `S08_REASON3` | **F2959 .. F3014** | 55f (1.83s) | "Then minimize the suffix." | Invariant 3 card: Reverse descending suffix to minimal ascending |

## 3. Sync Quality Verdict

```text
TOTAL DURATION      : 3014 frames (100.480s)
ANCHORS MAPPED      : 28 / 28 (100%)
WORDS COVERED       : 228 / 228 (100%)
FRAME CONTINUITY    : STRICT ZERO-GAP MONOTONIC
VERDICT             : PASS — APPROVED FOR SCENE PLANNING
```
