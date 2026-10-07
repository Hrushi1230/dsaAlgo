# Scene 07: Method 2 Code — QA Verification Checklist (29 Checkpoints)

| Checkpoint | Target Frame | Verified Element & Invariant |
|:---:|:---:|:---|
| CP-01 | F45 | Line 3 (`n = len(matrix)`) revealed; 5×5 matrix initialized cleanly on right stage. |
| CP-02 | F250 | Line 4 (`for layer in range(n // 2):`) revealed; layer loop active; no future lines shown. |
| CP-03 | F450 | Line 5 (`first = layer`) revealed; `first` pointer at 0. |
| CP-04 | F560 | Line 6 (`last = n - 1 - layer`) revealed; `last` pointer at 4. |
| CP-05 | F800 | Demonstration of layer 0 bounds [0, 4] shifting inward to layer 1 bounds [1, 3]. |
| CP-06 | F1150 | Line 7 (`for i in range(first, last):`) revealed; top row cells highlighted between `first` and `last`. |
| CP-07 | F1450 | Explanation of why loop stops before `last`: last top position belongs to cycle starting from right. |
| CP-08 | F1750 | Line 8 (`offset = i - first`) revealed; distance bracket shows `i - first`. |
| CP-09 | F2050 | 4 connected coordinates lit simultaneously in cyan outline. |
| CP-10 | F2135 | `top = (first, i)` highlighted in gold with coordinate label. |
| CP-11 | F2200 | `right = (i, last)` highlighted with coordinate label. |
| CP-12 | F2280 | `bottom = (last, last - offset)` highlighted with coordinate label. |
| CP-13 | F2380 | `left = (last - offset, first)` highlighted with coordinate label. |
| CP-14 | F2590 | Line 9 (`top = matrix[first][i]`) revealed; top value copied into single `temp/top` storage box. |
| CP-15 | F2670 | Line 10 (`matrix[first][i] = matrix[last - offset][first]`) revealed; left cell value moves to top cell. |
| CP-16 | F2730 | Line 11 (`matrix[last - offset][first] = matrix[last][last - offset]`) revealed; bottom cell value moves to left cell. |
| CP-17 | F2775 | Line 12 (`matrix[last][last - offset] = matrix[i][last]`) revealed; right cell value moves to bottom cell. |
| CP-18 | F2840 | Line 13 (`matrix[i][last] = top`) revealed; temp value lands in right cell. |
| CP-19 | F2940 | 4-way swap completed; 4 cells flash green `theme.good`. |
| CP-20 | F3100 | Inner loop repetition: `i` moves across top edge. |
| CP-21 | F3230 | Outer loop moves inward to layer 1 (inner ring). |
| CP-22 | F3420 | Odd matrix center element `[2, 2]` illuminated neutrally; zero cycles touch center. |
| CP-23 | F3650 | Single temporary variable storage highlighted; no auxiliary arrays used. |
| CP-24 | F3800 | `EXTRA SPACE: O(1)` chalk pill appears. |
| CP-25 | F4000 | All N² cells highlighted with bounded constant work. |
| CP-26 | F4170 | `TIME COMPLEXITY: O(N²)` chalk pill appears. |
| CP-27 | F4260 | `O(N²) TIME · O(1) SPACE` combined chalk summary. |
| CP-28 | F4400 | `OPTIMAL IN-PLACE SOLUTION` badge confirmed. |
| CP-29 | F4600 | Method 3 transition question hook appears: simpler transformations teaser. |
