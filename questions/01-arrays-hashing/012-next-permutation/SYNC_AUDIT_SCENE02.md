# Q12 Scene 02 — Sync Audit & Word Index Manifest

**Scene:** 02-understand  
**Problem:** 012 Next Permutation (LC 31)  
**Audio File:** `remotion-project/public/audio/012/02-understand.mp3`  
**Sync JSON:** `questions/01-arrays-hashing/012-next-permutation/sync/02-understand.json`  
**Anchors JSON:** `questions/01-arrays-hashing/012-next-permutation/sync/02-understand.anchors.json`  
**Duration:** 69,180 ms (69.18 seconds)  
**Total Frames:** 2,075 frames @ 30 FPS  
**Total Words:** 136 words (`W0000` to `W0135`)  
**Total Semantic Anchors:** 23 anchors (`S02_NUMBERS` through `S02_OBVIOUS`)  

---

## 1. Complete Anchor-to-Word Range Audit

| Anchor ID | Index | Spoken Phrase | Word Range | Spoken Time (ms) | Spoken Frames | Segment Interval `[start, end)` | Available Pause |
|---|---|---|---|---|---|---|---|
| `S02_NUMBERS` | 1 | "Suppose we have some numbers" | `W0000`–`W0004` | 0 – 1,780 | F0 – F53 | `[0, 80)` | 880 ms (27 frames) |
| `S02_DIFFERENT_ORDERS` | 2 | "and we arrange them in different possible orders." | `W0005`–`W0012` | 1,780 – 5,420 | F53 – F163 | `[80, 192)` | 980 ms (29 frames) |
| `S02_PERMUTATION` | 3 | "Each different order is called a permutation." | `W0013`–`W0019` | 6,400 – 9,420 | F192 – F283 | `[192, 310)` | 900 ms (27 frames) |
| `S02_LEX_ORDER` | 4 | "Now imagine, all of those permutations are arranged in increasing lexicographical order." | `W0020`–`W0031` | 10,320 – 17,440 | F310 – F523 | `[310, 554)` | 1,040 ms (31 frames) |
| `S02_NOT_ANY_BIGGER` | 5 | "Our job is not to find any bigger arrangement." | `W0032`–`W0040` | 18,480 – 21,360 | F554 – F641 | `[554, 658)` | 560 ms (17 frames) |
| `S02_VERY_NEXT` | 6 | "We need the very next one," | `W0041`–`W0046` | 21,920 – 23,380 | F658 – F701 | `[658, 713)` | 380 ms (12 frames) |
| `S02_SMALLEST_GREATER` | 7 | "the smallest permutation that is still greater than the current permutation." | `W0047`–`W0057` | 23,760 – 28,220 | F713 – F847 | `[713, 847)` | 0 ms (0 frames) |
| `S02_MASTER_INTRO` | 8 | "For this lesson, our master array is" | `W0058`–`W0064` | 28,220 – 31,880 | F847 – F956 | `[847, 956)` | 0 ms (0 frames) |
| `S02_M0` | 9 | "2," | `W0065`–`W0065` | 31,880 – 32,540 | F956 – F976 | `[956, 984)` | 260 ms (8 frames) |
| `S02_M1` | 10 | "1," | `W0066`–`W0066` | 32,800 – 33,500 | F984 – F1005 | `[984, 1016)` | 380 ms (11 frames) |
| `S02_M2` | 11 | "5," | `W0067`–`W0067` | 33,880 – 34,460 | F1016 – F1034 | `[1016, 1050)` | 540 ms (16 frames) |
| `S02_M3` | 12 | "4," (token 1 of 2) | `W0068`–`W0068` | 35,000 – 35,580 | F1050 – F1067 | `[1050, 1082)` | 480 ms (15 frames) |
| `S02_M4` | 13 | "4," (token 2 of 2) | `W0069`–`W0069` | 36,060 – 36,620 | F1082 – F1099 | `[1082, 1113)` | 480 ms (14 frames) |
| `S02_M5` | 14 | "3," | `W0070`–`W0070` | 37,100 – 37,740 | F1113 – F1132 | `[1113, 1145)` | 420 ms (13 frames) |
| `S02_M6` | 15 | "0." | `W0071`–`W0071` | 38,160 – 38,840 | F1145 – F1165 | `[1145, 1187)` | 740 ms (22 frames) |
| `S02_TRANSFORM_SAME` | 16 | "We need to transform this same array" | `W0072`–`W0078` | 39,580 – 41,880 | F1187 – F1256 | `[1187, 1256)` | 0 ms (0 frames) |
| `S02_NEXT_PERM` | 17 | "into its next permutation." | `W0079`–`W0082` | 41,880 – 43,800 | F1256 – F1314 | `[1256, 1331)` | 560 ms (17 frames) |
| `S02_IN_PLACE` | 18 | "And we have to do it in place." | `W0083`–`W0090` | 44,360 – 46,500 | F1331 – F1395 | `[1331, 1413)` | 600 ms (18 frames) |
| `S02_NO_GREATER` | 19 | "If a greater permutation does not exist," | `W0091`–`W0097` | 47,100 – 49,800 | F1413 – F1494 | `[1413, 1506)` | 400 ms (12 frames) |
| `S02_SMALLEST_WRAP` | 20 | "then we have to return to the smallest possible arrangement." | `W0098`–`W0107` | 50,200 – 53,960 | F1506 – F1619 | `[1506, 1636)` | 570 ms (17 frames) |
| `S02_REAL_QUESTION` | 21 | "So the real question is," | `W0108`–`W0112` | 54,530 – 56,520 | F1636 – F1696 | `[1636, 1715)` | 640 ms (19 frames) |
| `S02_WITHOUT_ALL` | 22 | "how can we move to the next arrangement without generating every permutation? Before we solve that directly," | `W0113`–`W0129` | 57,160 – 65,900 | F1715 – F1977 | `[1715, 2005)` | 920 ms (28 frames) |
| `S02_OBVIOUS` | 23 | "let's first see the obvious approach." | `W0130`–`W0135` | 66,820 – 69,180 | F2005 – F2075 | `[2005, 2075)` | 0 ms (0 frames) |

---

## 2. Key Audit Validations

1. **Ordered Token Disambiguation (`W0068` vs `W0069`):**
   - Word `W0068` (index 68): `"4,"` [35,000ms..35,580ms] maps to array slot 3 (first `4`).
   - Word `W0069` (index 69): `"4,"` [36,060ms..36,620ms] maps to array slot 4 (second `4`).
   - Disambiguation resolved strictly by sequential token index, never text lookup.

2. **Full Frame Continuity:**
   - Anchor intervals form a partition of `[0, 2075)` with zero gaps, zero overlaps, and zero negative durations.
   - Initial anchor starts at `F0`. Final anchor ends at `F2075`.

3. **Comprehension Holds:**
   - Real pauses (> 10 frames) exist after beats 1, 2, 3, 4, 5, 6, 9, 10, 11, 12, 13, 14, 15, 17, 18, 19, 20, 21, 22.
   - Master array reveal values (`S02_M0` through `S02_M6`) have rhythmic spoken pauses (8 to 22 frames) perfectly synchronized with value drop-ins.
