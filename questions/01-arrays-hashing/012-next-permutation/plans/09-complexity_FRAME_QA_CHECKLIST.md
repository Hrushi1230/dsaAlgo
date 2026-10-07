# Scene 09 · Frame QA Verification Checklist: Complexity, Common Mistakes & Edge Cases

**Question:** 012 · Next Permutation (LeetCode 31)  
**Scene:** `09-complexity`  
**Total Frames:** 4156 @ 30 FPS  
**Total Checkpoints:** 35  

| # | Anchor ID | Frame Range | Mid Frame | Check Description | Status |
|---|---|---|---|---|---|
| 1 | `S09_OPEN` | F0..F83 | F41 | Verify Three-Pass Complexity Canvas shell. | [x] PASS |
| 2 | `S09_PIVOT_SCAN` | F83..F185 | F134 | Verify Pass 1 Right-to-Left Pivot Scan lane. | [x] PASS |
| 3 | `S09_PIVOT_WORST` | F185..F307 | F246 | Verify Pass 1 Worst-Case Cost Stamp (<= N). | [x] PASS |
| 4 | `S09_SUCCESSOR_SCAN` | F307..F528 | F417 | Verify Pass 2 Right-to-Left Successor Scan lane. | [x] PASS |
| 5 | `S09_REVERSE_SCAN` | F528..F680 | F604 | Verify Pass 3 Suffix Reversal lane. | [x] PASS |
| 6 | `S09_SEPARATE` | F680..F750 | F715 | Verify Sequential Additive Formula (Pass 1 + Pass 2 + Pass 3). | [x] PASS |
| 7 | `S09_NOT_MULTIPLY` | F750..F805 | F777 | Verify Multiplication Refutation Callout (N + N + N <= 3N, not N*N). | [x] PASS |
| 8 | `S09_TIME` | F805..F926 | F865 | Verify Time Complexity Stamp: O(N). | [x] PASS |
| 9 | `S09_FEW_VARS` | F926..F1012 | F969 | Verify Fixed Pointer Variables Chip Container (i, j, left, right, n). | [x] PASS |
| 10 | `S09_SPACE` | F1012..F1128 | F1070 | Verify Space Complexity Stamp: O(1) In-Place. | [x] PASS |
| 11 | `S09_COMPARE_BRUTE` | F1128..F1193 | F1160 | Verify Dual Comparison Arena Setup. | [x] PASS |
| 12 | `S09_N_FACTORIAL` | F1193..F1384 | F1288 | Verify Factorial Explosion Tree (N!). | [x] PASS |
| 13 | `S09_GENERATE_STORE` | F1384..F1521 | F1452 | Verify Factorial Generation & Storage Penalty Banner. | [x] PASS |
| 14 | `S09_SORT_ADDS` | F1521..F1622 | F1571 | Verify Lexicographical Sort Overhead Callout. | [x] PASS |
| 15 | `S09_DIRECT` | F1622..F1747 | F1684 | Verify Optimal In-Place Method Superiority Card. | [x] PASS |
| 16 | `S09_MISTAKES` | F1747..F1830 | F1788 | Verify Common Mistakes Overview Card. | [x] PASS |
| 17 | `S09_PIVOT_STRICT` | F1830..F2108 | F1969 | Verify Strict Pivot Inequality Rule (nums[i] < nums[i+1]). | [x] PASS |
| 18 | `S09_EQUAL_NO` | F2108..F2192 | F2150 | Verify Plateau Counter-Example (4 < 4 is FALSE). | [x] PASS |
| 19 | `S09_SUCCESSOR_STRICT` | F2192..F2363 | F2277 | Verify Strict Successor Inequality Rule (nums[j] > nums[i]). | [x] PASS |
| 20 | `S09_EQUAL_NOT_ENOUGH` | F2363..F2440 | F2401 | Verify Swapping Equal Values Rejection Stamp. | [x] PASS |
| 21 | `S09_ANY_GREATER` | F2440..F2583 | F2511 | Verify Arbitrary Successor Flaw Callout. | [x] PASS |
| 22 | `S09_SMALLEST_INCREASE` | F2583..F2669 | F2626 | Verify Minimal Increase Invariant Card. | [x] PASS |
| 23 | `S09_SCAN_RIGHT_REASON` | F2669..F2759 | F2714 | Verify Right-to-Left Scan Guarantee Demonstration. | [x] PASS |
| 24 | `S09_REVERSE_START` | F2759..F2860 | F2809 | Verify Correct Reversal Starting Boundary (i + 1). | [x] PASS |
| 25 | `S09_NOT_I` | F2860..F2922 | F2891 | Verify Reversing From i Warning Stamp. | [x] PASS |
| 26 | `S09_DESC` | F2922..F3083 | F3002 | Verify Edge Case 1 Array Track: [3, 2, 1]. | [x] PASS |
| 27 | `S09_NO_PIVOT` | F3083..F3122 | F3102 | Verify No Pivot Indicator (i = -1). | [x] PASS |
| 28 | `S09_LARGEST` | F3122..F3209 | F3165 | Verify Lexicographically Maximal Callout. | [x] PASS |
| 29 | `S09_REV_WHOLE` | F3209..F3279 | F3244 | Verify Full Array Reversal Action [0 .. 2]. | [x] PASS |
| 30 | `S09_WRAP_RESULT` | F3279..F3401 | F3340 | Verify Wraparound Result Array: [1, 2, 3]. | [x] PASS |
| 31 | `S09_ALREADY_INC` | F3401..F3594 | F3497 | Verify Edge Case 2 Array Track: [1, 2, 3]. | [x] PASS |
| 32 | `S09_PIVOT_NEAR_RIGHT` | F3594..F3745 | F3669 | Verify Minimal Work Proof: Pivot at n-2. | [x] PASS |
| 33 | `S09_SINGLE` | F3745..F3857 | F3801 | Verify Single-Element Robustness Demo [ 7 ]. | [x] PASS |
| 34 | `S09_DUPLICATES` | F3857..F4049 | F3953 | Verify Duplicate Invariant Proof Card. | [x] PASS |
| 35 | `S09_NO_SPECIAL` | F4049..F4156 | F4102 | Verify Mastery Certification Card. | [x] PASS |
