# Sync Audit: Scene 06 — Optimal Idea (Method 2 Conceptual Derivation: Pivot, Successor, Reverse)
**Question:** 012 · Next Permutation (LeetCode 31)  
**Audio File:** `remotion-project/public/audio/012/06-optimal-idea.mp3`  
**Sync File:** `questions/01-arrays-hashing/012-next-permutation/sync/06-optimal-idea.json`  
**Duration:** 108,400 ms | **Total Frames:** 3,252 @ 30 FPS | **Total Words:** 223  
**Audit Date:** 2026-09-19  

---

## 1. Frame-to-Anchor Master Timing Table

| # | Anchor ID | Step | Frame Range | Duration | Spoken Range | Pause After | Spoken Text / Purpose |
|---|---|---|---|---|---|---|---|
| 1 | `S06_START_RIGHT` | `IDEA-01` | **F0..F58** | 58f (1.93s) | F0..F48 | 10f | "Start from the right side." |
| 2 | `S06_FIND_I` | `IDEA-02` | **F58..F281** | 223f (7.43s) | F58..F271 | 10f | "We look for the first index i, where nums at i is smaller than nums at i plus 1." |
| 3 | `S06_WHY` | `IDEA-03` | **F281..F308** | 27f (0.90s) | F281..F298 | 10f | "Why?" |
| 4 | `S06_SUFFIX` | `IDEA-04` | **F308..F499** | 191f (6.37s) | F308..F487 | 12f | "Because everything to the right of that position forms a non-increasing suffix." |
| 5 | `S06_SUFFIX_MAX` | `IDEA-05` | **F499..F686** | 187f (6.23s) | F499..F686 | 0f | "That suffix is already the largest possible arrangement of those suffix values." |
| 6 | `S06_CANT_SUFFIX` | `IDEA-06` | **F686..F905** | 219f (7.30s) | F686..F875 | 30f | "So changing only that suffix cannot give us a larger permutation." |
| 7 | `S06_PIVOT_CONCEPT` | `IDEA-07` | **F905..F1056** | 151f (5.03s) | F905..F1036 | 20f | "The first place where we can increase the permutation is the pivot." |
| 8 | `S06_SMALLEST_INCREASE` | `IDEA-08` | **F1056..F1240** | 184f (6.13s) | F1056..F1213 | 27f | "Now we have to increase that pivot, but only by the smallest possible amount." |
| 9 | `S06_SEARCH_RIGHT_AGAIN` | `IDEA-09` | **F1240..F1379** | 139f (4.63s) | F1240..F1361 | 18f | "So we search from the right again for the first value," |
| 10 | `S06_STRICT_GREATER` | `IDEA-10` | **F1379..F1491** | 112f (3.73s) | F1379..F1472 | 19f | "that is strictly greater than the pivot." |
| 11 | `S06_RIGHT_FIRST_SMALLEST` | `IDEA-11` | **F1491..F1785** | 294f (9.80s) | F1491..F1762 | 23f | "Because the suffix is non-increasing, the first greater value from the right is the smallest value that can increase the pivot." |
| 12 | `S06_SWAP_CONCEPT` | `IDEA-12` | **F1785..F1859** | 74f (2.47s) | F1785..F1845 | 14f | "We swap those two values." |
| 13 | `S06_NOW_LARGER` | `IDEA-13` | **F1859..F1937** | 78f (2.60s) | F1859..F1922 | 15f | "Now the permutation is larger." |
| 14 | `S06_SUFFIX_STILL_NONINC` | `IDEA-14` | **F1937..F2086** | 149f (4.97s) | F1937..F2075 | 11f | "And after this swap, the suffix is still non-increasing." |
| 15 | `S06_VERY_NEXT` | `IDEA-15` | **F2086..F2204** | 118f (3.93s) | F2086..F2180 | 24f | "But we still need the very next permutation." |
| 16 | `S06_SUFFIX_MIN` | `IDEA-16` | **F2204..F2341** | 137f (4.57s) | F2204..F2341 | 0f | "So everything after the pivot must become as small as possible." |
| 17 | `S06_REVERSE_PROOF` | `IDEA-17` | **F2341..F2591** | 250f (8.33s) | F2341..F2573 | 18f | "Because the suffix is non-increasing, reversing it gives us the smallest possible suffix." |
| 18 | `S06_NO_SORT` | `IDEA-18` | **F2591..F2666** | 75f (2.50s) | F2591..F2654 | 12f | "So we do not need to sort it." |
| 19 | `S06_REVERSE` | `IDEA-19` | **F2666..F2741** | 75f (2.50s) | F2666..F2720 | 21f | "We simply reverse it." |
| 20 | `S06_REASON_SUMMARY` | `IDEA-20` | **F2741..F3128** | 387f (12.90s) | F2741..F3128 | 0f | "So the optimal reasoning is, find the rightmost place that can increase, make the smallest possible increase there, then minimize everything after it." |
| 21 | `S06_EXECUTE` | `IDEA-21` | **F3128..F3252** | 124f (4.13s) | F3128..F3252 | 0f | "Now let's execute that on our master example." |
