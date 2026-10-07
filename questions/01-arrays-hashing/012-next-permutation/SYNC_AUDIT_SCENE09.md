# Scene 09 · Audio Sync Audit: Complexity, Mistakes & Edge Cases

**Question:** 012 · Next Permutation (LeetCode 31)  
**Audio File:** `remotion-project/public/audio/012/09-complexity.mp3`  
**Duration:** 138.52s (4156 frames @ 30 FPS)  
**Total Words:** 297  
**Total Semantic Anchors:** 35  

## 1. Word Coverage Audit

- Words in JSON: **297**
- Words mapped to Anchors: **297**
- Unmapped / Skipped Words: **0**
- Frame Gaps / Overlaps: **0 (strictly continuous from frame 0 to frame 4156)**

## 2. Complete Anchor Table

| ID | Anchor | Frame Range | Duration | Spoken Phrase | Purpose |
|---|---|---|---|---|---|
| **01** | `S09_OPEN` | **F0 .. F83** | 83f (2.77s) | "Now let's look at the complexity." | Complexity analysis transition; title card fades in. |
| **02** | `S09_PIVOT_SCAN` | **F83 .. F185** | 102f (3.40s) | "The pivot scan moves from right to left." | Pass 1 visualization: right-to-left pivot scan. |
| **03** | `S09_PIVOT_WORST` | **F185 .. F307** | 122f (4.07s) | "In the worst case, it can inspect the whole array." | Pass 1 cost: at most N operations (<= N). |
| **04** | `S09_SUCCESSOR_SCAN` | **F307 .. F528** | 221f (7.37s) | "The successor scan also moves from right to left, over at most the array length." | Pass 2 cost: at most N operations (<= N). |
| **05** | `S09_REVERSE_SCAN` | **F528 .. F680** | 152f (5.07s) | "And the final reverse touches at most the suffix once." | Pass 3 cost: at most N/2 swaps (<= N). |
| **06** | `S09_SEPARATE` | **F680 .. F750** | 70f (2.33s) | "These are separate linear passes." | Passes are sequential, not nested. |
| **07** | `S09_NOT_MULTIPLY` | **F750 .. F805** | 55f (1.83s) | "We do not multiply them." | Additive math: N + N + N = 3N. |
| **08** | `S09_TIME` | **F805 .. F926** | 121f (4.03s) | "So the total time complexity is O of n," | Time complexity stamp: O(N) linear time. |
| **09** | `S09_FEW_VARS` | **F926 .. F1012** | 86f (2.87s) | "and we only use a few index variables." | Memory: only i, j, left, right, n used. |
| **10** | `S09_SPACE` | **F1012 .. F1128** | 116f (3.87s) | "So the extra space is O of 1." | Space complexity stamp: O(1) in-place auxiliary space. |
| **11** | `S09_COMPARE_BRUTE` | **F1128 .. F1193** | 65f (2.17s) | "Now compare that with brute force." | Contrast section: Brute Force vs Optimal Method. |
| **12** | `S09_N_FACTORIAL` | **F1193 .. F1384** | 191f (6.37s) | "With n distinct values, there can be n factorial permutations." | Combinatorial explosion: N! permutations growth. |
| **13** | `S09_GENERATE_STORE` | **F1384 .. F1521** | 137f (4.57s) | "Generating and storing all of them is already factorial scale work." | Exponential/factorial wall of generation and storage. |
| **14** | `S09_SORT_ADDS` | **F1521 .. F1622** | 101f (3.37s) | "And sorting them adds even more work." | Lexicographic sorting penalty adds further factorial work. |
| **15** | `S09_DIRECT` | **F1622 .. F1747** | 125f (4.17s) | "The optimal method works directly on the current array." | Contrast conclusion: in-place surgical transformation vs massive generation. |
| **16** | `S09_MISTAKES` | **F1747 .. F1830** | 83f (2.77s) | "There are a few mistakes to avoid." | Common mistakes transition card. |
| **17** | `S09_PIVOT_STRICT` | **F1830 .. F2108** | 278f (9.27s) | "For the pivot, we need a strict increase. We are looking for nums at i smaller than nums at i plus 1." | Mistake 1: Must be strict inequality nums[i] < nums[i+1]. |
| **18** | `S09_EQUAL_NO` | **F2108 .. F2192** | 84f (2.80s) | "Equal values do not qualify." | Negative example: 4 < 4 is FALSE. Never treat equal as dip. |
| **19** | `S09_SUCCESSOR_STRICT` | **F2192 .. F2363** | 171f (5.70s) | "For the successor, we also need a value strictly greater than the pivot." | Mistake 2: Successor condition must be strictly greater (nums[j] > nums[i]). |
| **20** | `S09_EQUAL_NOT_ENOUGH` | **F2363 .. F2440** | 77f (2.57s) | "Equal is not enough." | Successor equality rejection: nums[j] == nums[i] leaves prefix identical. |
| **21** | `S09_ANY_GREATER` | **F2440 .. F2583** | 143f (4.77s) | "Another mistake is choosing any greater value from the suffix." | Mistake 3: Picking an arbitrary larger value breaks the immediate successor. |
| **22** | `S09_SMALLEST_INCREASE` | **F2583 .. F2669** | 86f (2.87s) | "We need the smallest possible increase." | Requirement: Smallest strictly greater value. |
| **23** | `S09_SCAN_RIGHT_REASON` | **F2669 .. F2759** | 90f (3.00s) | "That is why we scan from the right." | Right-to-left scan guarantees the first greater element is the smallest. |
| **24** | `S09_REVERSE_START` | **F2759 .. F2860** | 101f (3.37s) | "And after the swap, reverse from i plus 1." | Mistake 4: Correct reversal range starts at i+1. |
| **25** | `S09_NOT_I` | **F2860 .. F2922** | 62f (2.07s) | "Do not reverse from i." | Off-by-one warning: reversing from i destroys the newly placed pivot. |
| **26** | `S09_DESC` | **F2922 .. F3083** | 161f (5.37s) | "Now consider a fully decreasing array, 3, 2, 1." | Edge Case 1: Fully decreasing array [3, 2, 1]. |
| **27** | `S09_NO_PIVOT` | **F3083 .. F3122** | 39f (1.30s) | "There is no pivot." | Condition check: no dip found, i terminates at -1. |
| **28** | `S09_LARGEST` | **F3122 .. F3209** | 87f (2.90s) | "So this is already the largest permutation." | Semantic meaning: lexicographically maximal. |
| **29** | `S09_REV_WHOLE` | **F3209 .. F3279** | 70f (2.33s) | "Reverse the whole array," | Action: left = -1 + 1 = 0, reverses whole array. |
| **30** | `S09_WRAP_RESULT` | **F3279 .. F3401** | 122f (4.07s) | "and we get 1, 2, 3." | Result: [1, 2, 3] smallest permutation (wraparound). |
| **31** | `S09_ALREADY_INC` | **F3401 .. F3594** | 193f (6.43s) | "If the array is already increasing, like 1, 2, 3." | Edge Case 2: Already increasing array [1, 2, 3]. |
| **32** | `S09_PIVOT_NEAR_RIGHT` | **F3594 .. F3745** | 151f (5.03s) | "The pivot is near the right side, so only a small suffix changes." | Pivot at index n-2 immediately; swaps with last element, suffix length 0. |
| **33** | `S09_SINGLE` | **F3745 .. F3857** | 112f (3.73s) | "For a single value, there is nothing to change." | Edge Case 3: Single element array [x] (n=1, i=-1, reverse loop terminates). |
| **34** | `S09_DUPLICATES` | **F3857 .. F4049** | 192f (6.40s) | "And duplicate values are also handled naturally, because both important comparisons are strict." | Edge Case 4: Duplicates handled seamlessly by strict < and strict >. |
| **35** | `S09_NO_SPECIAL` | **F4049 .. F4156** | 107f (3.57s) | "No special duplicate case is needed." | Final synthesis: Robustness of optimal algorithm verified across all cases. |

## 3. Sync Quality Verdict

```text
TOTAL DURATION      : 4156 frames (138.520s)
ANCHORS MAPPED      : 35 / 35 (100%)
WORDS COVERED       : 297 / 297 (100%)
FRAME CONTINUITY    : STRICT ZERO-GAP MONOTONIC
VERDICT             : PASS — APPROVED FOR SCENE PLANNING
```
