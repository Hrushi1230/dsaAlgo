# Sync Audit: Scene 05 — Why Brute Force Fails (Method 1 Scalability Bottleneck & Transition to Optimal)
**Question:** 012 · Next Permutation (LeetCode 31)  
**Audio File:** `remotion-project/public/audio/012/05-why-brute.mp3`  
**Sync File:** `questions/01-arrays-hashing/012-next-permutation/sync/05-why-brute.json`  
**Duration:** 75,600 ms | **Total Frames:** 2,268 @ 30 FPS | **Total Words:** 154  
**Audit Date:** 2026-09-19  

---

## 1. Monotonic Frame Bound Audit & Contiguity Check

All anchors form a contiguous, non-overlapping partition of `[0, 2268)` frames:

| Anchor ID | Trace Step | Frame Range | Duration | Spoken Range | Pause After | Spoken Phrase Anchor |
|---|---|---|---|---|---|---|
| `S05_N_DISTINCT` | `WHY-01` | `[0, 103)` | 103f (3.43s) | `[0, 81]` | 22f (0.73s) | "If the array has n distinct values," |
| `S05_FACTORIAL` | `WHY-02` | `[103, 242)` | 139f (4.63s) | `[103, 211]` | 31f (1.03s) | "the number of possible permutations is n factorial." |
| `S05_THREE` | `WHY-03` | `[242, 358)` | 116f (3.87s) | `[242, 343]` | 15f (0.50s) | "3 values give only 6 permutations," |
| `S05_HUGE` | `WHY-04` | `[358, 473)` | 115f (3.83s) | `[358, 461]` | 12f (0.40s) | "but factorial growth becomes huge very quickly," |
| `S05_STORAGE` | `WHY-05` | `[473, 612)` | 139f (4.63s) | `[473, 580]` | 32f (1.07s) | "and we would have to store many of those permutations." |
| `S05_SPACE_BREAK` | `WHY-06` | `[612, 727)` | 115f (3.83s) | `[612, 717]` | 10f (0.33s) | "So this also breaks the constant extra space requirement." |
| `S05_TOO_MUCH` | `WHY-07` | `[727, 971)` | 244f (8.13s) | `[727, 953]` | 18f (0.60s) | "So generating every arrangement, just to move one step forward, is doing far too much work." |
| `S05_CURRENT_EXISTS` | `WHY-08` | `[971, 1057)` | 86f (2.87s) | `[971, 1040]` | 17f (0.57s) | "We already have the current permutation." |
| `S05_USE_STRUCTURE` | `WHY-09` | `[1057, 1135)` | 78f (2.60s) | `[1057, 1104]` | 31f (1.03s) | "We should use its structure." |
| `S05_NEXT_MEANING` | `WHY-10` | `[1135, 1220)` | 85f (2.83s) | `[1135, 1207]` | 13f (0.43s) | "Think about what next really means." |
| `S05_SMALLEST_CHANGE` | `WHY-11` | `[1220, 1308)` | 88f (2.93s) | `[1220, 1296]` | 12f (0.40s) | "We want the smallest possible change." |
| `S05_MAKES_LARGER` | `WHY-12` | `[1308, 1386)` | 78f (2.60s) | `[1308, 1363]` | 23f (0.77s) | "That makes the array larger." |
| `S05_TOO_FAR_LEFT` | `WHY-13` | `[1386, 1482)` | 96f (3.20s) | `[1386, 1463]` | 19f (0.63s) | "If we change something too far to the left," |
| `S05_JUMP` | `WHY-14` | `[1482, 1561)` | 79f (2.63s) | `[1482, 1561]` | 0f (0.00s) | "the jump becomes unnecessarily large." |
| `S05_FAR_RIGHT` | `WHY-15` | `[1561, 1765)` | 204f (6.80s) | `[1561, 1736]` | 29f (0.97s) | "So we should try to make the change as far to the right as possible." |
| `S05_FIRST_CLUE` | `WHY-16` | `[1765, 1856)` | 91f (3.03s) | `[1765, 1832]` | 24f (0.80s) | "That gives us our first clue." |
| `S05_LOOK_RIGHT` | `WHY-17` | `[1856, 1925)` | 69f (2.30s) | `[1856, 1925]` | 0f (0.00s) | "Look from the right side of the array" |
| `S05_FIRST_PLACE` | `WHY-18` | `[1925, 2034)` | 109f (3.63s) | `[1925, 2006]` | 28f (0.93s) | "and find the first place," |
| `S05_LARGER_POSSIBLE` | `WHY-19` | `[2034, 2167)` | 133f (4.43s) | `[2034, 2147]` | 20f (0.67s) | "where a larger arrangement is still possible." |
| `S05_BUILD_OPTIMAL` | `WHY-20` | `[2167, 2268)` | 101f (3.37s) | `[2167, 2268]` | 0f (0.00s) | "Now we can build the optimal idea carefully." |

---

## 2. Anchor Validation Summary

- **Total Anchors:** 20 contiguous semantic anchors.
- **Coverage:** Frame 0 to Frame 2,268 (100.0% coverage, 0 gap frames, 0 overlap frames).
- **Word Verification:** Every anchor begins and ends on exact speech boundaries from `05-why-brute.json`.
- **Zero Hallucination Guarantee:** No extrapolated or guessed timestamps.
- **Pedagogical Integrity:**
  - **F0..F461:** Factorial explosion proof ($N!$ mathematical truth, $3! = 6$ vs $N=10 ightarrow 3.6M$, $N=100 ightarrow 10^{157}$).
  - **F461..F727:** Memory burden proof (storing permutations violates $O(1)$ space).
  - **F727..F971:** Waste contrast (generating all $N!$ just to step $+1$ is unacceptable).
  - **F971..F1386:** First principles derivation (we have the current array, what does "next" mean? Smallest valid increase).
  - **F1386..F1765:** Left-vs-Right position contrast (changing left makes jump huge; change must be as far right as possible).
  - **F1765..F2167:** First optimal clue: search from right side for first place where larger arrangement is still possible.
  - **F2167..F2268:** Seamless handoff to Scene 06 Optimal Idea.
