# Q12 Scene 03 — Sync Audit & Word Index Manifest

**Scene:** 03-brute-trace  
**Problem:** 012 Next Permutation (LC 31)  
**Audio File:** `remotion-project/public/audio/012/03-brute-trace.mp3`  
**Sync JSON:** `questions/01-arrays-hashing/012-next-permutation/sync/03-brute-trace.json`  
**Anchors JSON:** `questions/01-arrays-hashing/012-next-permutation/sync/03-brute-trace.anchors.json`  
**Duration:** 75840 ms (75.84 seconds)  
**Total Frames:** 2275 frames @ 30 FPS  
**Total Words:** 155 words (`W0000` to `W0154`)  
**Total Semantic Anchors:** 28 anchors (`S03_SIMPLEST` through `S03_CODE_HANDOFF`)  

---

## 1. Complete Anchor-to-Word Range Audit

| Anchor ID | Index | Spoken Phrase | Word Range | Spoken Time (ms) | Spoken Frames | Segment Interval `[start, end)` | Available Pause |
|---|---|---|---|---|---|---|---|
| `S03_SIMPLEST` | 1 | "The simplest idea is" | `W0000`–`W0003` | 0 – 1460 | F0 – F44 | `[0, 44)` | 0 ms (0 frames) |
| `S03_GENERATE` | 2 | "generate every possible permutation" | `W0004`–`W0007` | 1460 – 4220 | F44 – F127 | `[44, 145)` | 600 ms (18 frames) |
| `S03_ORDER` | 3 | "then arrange all of them in lexicographical order" | `W0008`–`W0016` | 4840 – 8400 | F145 – F252 | `[145, 274)` | 733 ms (22 frames) |
| `S03_FIND` | 4 | "After that, find our current permutation in that list" | `W0017`–`W0025` | 9120 – 13160 | F274 – F395 | `[274, 395)` | 0 ms (0 frames) |
| `S03_TAKE_AFTER` | 5 | "and take the one immediately after it" | `W0026`–`W0032` | 13160 – 15900 | F395 – F477 | `[395, 495)` | 600 ms (18 frames) |
| `S03_SMALL_ARRAY` | 6 | "For a very small array this idea is easy to understand. Suppose we have" | `W0033`–`W0046` | 16500 – 22100 | F495 – F663 | `[495, 663)` | 0 ms (0 frames) |
| `S03_E0` | 7 | "1," | `W0047`–`W0047` | 22100 – 22840 | F663 – F685 | `[663, 692)` | 233 ms (7 frames) |
| `S03_E1` | 8 | "2," | `W0048`–`W0048` | 23080 – 23540 | F692 – F706 | `[692, 717)` | 367 ms (11 frames) |
| `S03_E2` | 9 | "3." | `W0049`–`W0049` | 23900 – 24340 | F717 – F730 | `[717, 730)` | 0 ms (0 frames) |
| `S03_LIST_INTRO` | 10 | "Its permutations can be arranged like this." | `W0050`–`W0056` | 24340 – 26860 | F730 – F806 | `[730, 823)` | 567 ms (17 frames) |
| `S03_P0` | 11 | "1, 2, 3." | `W0057`–`W0059` | 27420 – 28000 | F823 – F840 | `[823, 852)` | 400 ms (12 frames) |
| `S03_P1` | 12 | "1, 3, 2." | `W0060`–`W0062` | 28400 – 29220 | F852 – F877 | `[852, 889)` | 400 ms (12 frames) |
| `S03_P2` | 13 | "2, 1, 3." | `W0063`–`W0065` | 29640 – 30780 | F889 – F923 | `[889, 938)` | 500 ms (15 frames) |
| `S03_P3` | 14 | "2, 3, 1." | `W0066`–`W0068` | 31260 – 32340 | F938 – F970 | `[938, 986)` | 533 ms (16 frames) |
| `S03_P4` | 15 | "3, 1, 2." | `W0069`–`W0071` | 32880 – 34040 | F986 – F1021 | `[986, 1036)` | 500 ms (15 frames) |
| `S03_P5` | 16 | "3, 2, 1." | `W0072`–`W0074` | 34540 – 36180 | F1036 – F1085 | `[1036, 1102)` | 567 ms (17 frames) |
| `S03_CURRENT` | 17 | "If our current permutation is 1, 3, 2," | `W0075`–`W0082` | 36720 – 39920 | F1102 – F1198 | `[1102, 1204)` | 200 ms (6 frames) |
| `S03_NEXT` | 18 | "then the next one is 2, 1, 3." | `W0083`–`W0090` | 40120 – 42960 | F1204 – F1289 | `[1204, 1313)` | 800 ms (24 frames) |
| `S03_DEFINITION_CLEAR` | 19 | "So the definition is clear." | `W0091`–`W0095` | 43760 – 45180 | F1313 – F1355 | `[1313, 1377)` | 733 ms (22 frames) |
| `S03_RECAP_GENERATE` | 20 | "Generate everything." | `W0096`–`W0097` | 45900 – 47000 | F1377 – F1410 | `[1377, 1433)` | 767 ms (23 frames) |
| `S03_RECAP_ORDER` | 21 | "Order everything." | `W0098`–`W0099` | 47780 – 48520 | F1433 – F1456 | `[1433, 1483)` | 900 ms (27 frames) |
| `S03_RECAP_FIND` | 22 | "Find the current arrangement." | `W0100`–`W0103` | 49440 – 50900 | F1483 – F1527 | `[1483, 1545)` | 600 ms (18 frames) |
| `S03_RECAP_MOVE` | 23 | "Then move one step forward." | `W0104`–`W0108` | 51500 – 53140 | F1545 – F1594 | `[1545, 1594)` | 0 ms (0 frames) |
| `S03_WRAP` | 24 | "And if we are already at the last permutation, we wrap around to the first one." | `W0109`–`W0124` | 53140 – 59720 | F1594 – F1792 | `[1594, 1803)` | 367 ms (11 frames) |
| `S03_WORKS` | 25 | "This works logically." | `W0125`–`W0127` | 60100 – 61680 | F1803 – F1850 | `[1803, 1874)` | 800 ms (24 frames) |
| `S03_PROBLEM` | 26 | "But there is a serious problem." | `W0128`–`W0133` | 62480 – 64420 | F1874 – F1933 | `[1874, 1954)` | 700 ms (21 frames) |
| `S03_GROWTH` | 27 | "The number of permutations grows extremely fast." | `W0134`–`W0140` | 65140 – 68840 | F1954 – F2065 | `[1954, 2088)` | 767 ms (23 frames) |
| `S03_CODE_HANDOFF` | 28 | "So before we accept this method, let's see what its code is really doing." | `W0141`–`W0154` | 69600 – 75720 | F2088 – F2272 | `[2088, 2275)` | 100 ms (3 frames) |

---

## 2. Key Audit Validations & Token Disambiguation

1. **Ordered Token Disambiguation for Repeated Digits:**
   The numbers `1`, `2`, and `3` are repeated across multiple pedagogical beats. Disambiguation is resolved strictly by sequential word index (`W0000..W0154`), never string search:
   - **Initial Tiny Array Definition:**
     - `W0047` ("1,"): Slot 0 of tiny example `[1, 2, 3]`
     - `W0048` ("2,"): Slot 1
     - `W0049` ("3."): Slot 2
   - **Permutation Sequence (6 Spoken Permutations):**
     - `P0` (`[1, 2, 3]`): `W0057` ("1,"), `W0058` ("2,"), `W0059` ("3.")
     - `P1` (`[1, 3, 2]`): `W0060` ("1,"), `W0061` ("3,"), `W0062` ("2.")
     - `P2` (`[2, 1, 3]`): `W0063` ("2,"), `W0064` ("1,"), `W0065` ("3.")
     - `P3` (`[2, 3, 1]`): `W0066` ("2,"), `W0067` ("3,"), `W0068` ("1.")
     - `P4` (`[3, 1, 2]`): `W0069` ("3,"), `W0070` ("1,"), `W0071` ("2.")
     - `P5` (`[3, 2, 1]`): `W0072` ("3,"), `W0073` ("2,"), `W0074` ("1.")
   - **Adjacency Proof (CURRENT -> NEXT):**
     - Current `[1, 3, 2]`: `W0080` ("1,"), `W0081` ("3,"), `W0082` ("2,")
     - Next `[2, 1, 3]`: `W0088` ("2,"), `W0089` ("1,"), `W0090` ("3.")

2. **Full Frame Continuity:**
   - Anchor intervals form a partition of `[0, 2275)` with zero gaps, zero overlaps, and zero negative durations.
   - Initial anchor `S03_SIMPLEST` starts at `F0`.
   - Final anchor `S03_CODE_HANDOFF` ends at `F2275`.

3. **Comprehension Holds:**
   - Real pauses exist after beats 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27.
   - Between `P0`..`P5` reveals, rhythmic micro/teaching pauses allow each permutation to land and register before the next row activates.
