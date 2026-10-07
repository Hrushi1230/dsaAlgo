# Q12 Scene 04 — Sync Audit & Word Index Manifest

**Scene:** 04-brute-code  
**Problem:** 012 Next Permutation (LC 31)  
**Audio File:** `remotion-project/public/audio/012/04-brute-code.mp3`  
**Sync JSON:** `questions/01-arrays-hashing/012-next-permutation/sync/04-brute-code.json`  
**Anchors JSON:** `questions/01-arrays-hashing/012-next-permutation/sync/04-brute-code.anchors.json`  
**Duration:** 70,460 ms (70.46 seconds)  
**Total Frames:** 2,114 frames @ 30 FPS  
**Total Words:** 130 words (`W0000` to `W0129`)  
**Total Semantic Anchors:** 16 anchors (`S04_OPEN` through `S04_WHY`)  

---

## 1. Complete Anchor-to-Word Range Audit

| Anchor ID | Index | Spoken Phrase | Word Range | Spoken Time (ms) | Spoken Frames | Segment Interval `[start, end)` | Available Pause | Trace Step |
|---|---|---|---|---|---|---|---|---|
| `S04_OPEN` | 1 | "Let's write the brute force idea," | `W0000`–`W0005` | 0 – 1,980 | F0 – F59 | `[0, 75)` | 533 ms (16 frames) | `CODE-01` |
| `S04_COST_ONLY` | 2 | "only to understand its cost." | `W0006`–`W0010` | 2,500 – 4,360 | F75 – F131 | `[75, 154)` | 767 ms (23 frames) | `CODE-02` |
| `S04_IMPORT` | 3 | "First, we generate all permutations of nums," | `W0011`–`W0017` | 5,120 – 9,200 | F154 – F276 | `[154, 280)` | 133 ms (4 frames) | `CODE-03` |
| `S04_DUPLICATE_REASON` | 4 | "because duplicate values can create duplicate permutations." | `W0018`–`W0024` | 9,340 – 12,980 | F280 – F389 | `[280, 406)` | 567 ms (17 frames) | `CODE-04` |
| `S04_UNIQUE` | 5 | "We keep only unique arrangements." | `W0025`–`W0029` | 13,540 – 15,660 | F406 – F470 | `[406, 492)` | 733 ms (22 frames) | `CODE-05` |
| `S04_SORT` | 6 | "Then, we sort those permutations lexicographically." | `W0030`–`W0035` | 16,400 – 20,680 | F492 – F620 | `[492, 638)` | 600 ms (18 frames) | `CODE-06` |
| `S04_CURRENT_FORM` | 7 | "Now we convert our current array into the same comparable form," | `W0036`–`W0046` | 21,260 – 26,140 | F638 – F784 | `[638, 800)` | 533 ms (16 frames) | `CODE-07` |
| `S04_FIND_POS` | 8 | "and find its position." | `W0047`–`W0050` | 26,660 – 28,180 | F800 – F845 | `[800, 861)` | 533 ms (16 frames) | `CODE-08` |
| `S04_NEXT_INDEX` | 9 | "The next position is simply current index plus one." | `W0051`–`W0059` | 28,700 – 33,060 | F861 – F992 | `[861, 1013)` | 700 ms (21 frames) | `CODE-09` |
| `S04_MODULO` | 10 | "And to handle the last permutation, we take that position modulo the total number of permutations." | `W0060`–`W0075` | 33,760 – 41,220 | F1013 – F1237 | `[1013, 1257)` | 667 ms (20 frames) | `CODE-10` |
| `S04_COPY` | 11 | "Finally, we copy the selected permutation back into the original array." | `W0076`–`W0086` | 41,900 – 47,360 | F1257 – F1421 | `[1257, 1435)` | 467 ms (14 frames) | `CODE-11` |
| `S04_MATCHES` | 12 | "The code matches the idea exactly." | `W0087`–`W0092` | 47,820 – 50,340 | F1435 – F1510 | `[1435, 1528)` | 600 ms (18 frames) | `CODE-12` |
| `S04_SUMMARY` | 13 | "Generate all possibilities, sort them, search for the current one, and select the next." | `W0093`–`W0106` | 50,940 – 57,440 | F1528 – F1723 | `[1528, 1744)` | 700 ms (21 frames) | `CODE-13` |
| `S04_TINY_OK` | 14 | "For tiny inputs, this is fine for understanding." | `W0107`–`W0114` | 58,120 – 62,380 | F1744 – F1871 | `[1744, 1891)` | 667 ms (20 frames) | `CODE-14` |
| `S04_EXPENSIVE` | 15 | "But as a real solution, this approach becomes expensive very quickly." | `W0115`–`W0125` | 63,040 – 68,520 | F1891 – F2056 | `[1891, 2083)` | 900 ms (27 frames) | `CODE-15` |
| `S04_WHY` | 16 | "Now let's see why." | `W0126`–`W0129` | 69,420 – 70,460 | F2083 – F2114 | `[2083, 2114)` | 0 ms (0 frames) | `CODE-16` |

---

## 2. Key Audit Validations

1. **Monotonic Frame Sequence & Full Continuity:**
   - Anchor intervals form a mathematically contiguous partition of `[0, 2114)` with zero gaps, zero overlaps, and zero negative durations.
   - Initial anchor starts at `F0`. Final anchor ends at `F2114`.
   - Validated via `tools/validate-sync.mjs`: 0 errors, 0 warnings.

2. **Teaching Code Mapping:**
   - **Line 1–3 (Function Header):** Rendered at `S04_OPEN` (`F0..F75`).
   - **Line 4 (`all_perms = permutations(nums)`):** Types at `S04_IMPORT` (`F154..F280`).
   - **Semantic Pause/Proof (Duplicate Reason):** Explains duplicate risk at `S04_DUPLICATE_REASON` (`F280..F406`).
   - **Line 5 (`unique_perms = set(all_perms)`):** Types at `S04_UNIQUE` (`F406..F492`).
   - **Line 6 (`ordered = sorted(unique_perms)`):** Types at `S04_SORT` (`F492..F638`).
   - **Line 7 (`current = tuple(nums)`):** Types at `S04_CURRENT_FORM` (`F638..F800`).
   - **Line 8 (`idx = ordered.index(current)`):** Types at `S04_FIND_POS` (`F800..F861`).
   - **Line 9 Part 1 (`next_idx = (idx + 1`):** Types at `S04_NEXT_INDEX` (`F861..F1013`).
   - **Line 9 Part 2 (`) % len(ordered)`):** Types at `S04_MODULO` (`F1013..F1257`).
   - **Line 10 (`nums[:] = ordered[next_idx]`):** Types at `S04_COPY` (`F1257..F1435`).
   - **4-Step Recap & Execution Proof:** `S04_MATCHES` (`F1435..F1528`) & `S04_SUMMARY` (`F1528..F1744`).
   - **Tension & Scene 05 Handoff:** `S04_TINY_OK`, `S04_EXPENSIVE`, `S04_WHY` (`F1744..F2114`).

3. **Pause Characterization:**
   - Major pauses (> 20 frames / > 660ms):
     - `S04_COST_ONLY`: 23 frames (767ms) hold to emphasize educational nature.
     - `S04_UNIQUE`: 22 frames (733ms) hold to reinforce set deduplication.
     - `S04_NEXT_INDEX`: 21 frames (700ms) hold before introducing modulo.
     - `S04_SUMMARY`: 21 frames (700ms) hold after recap.
     - `S04_EXPENSIVE`: 27 frames (900ms) tension hold before the final punchline.
   - All pauses are utilized strictly for comprehension and settling visual states.
