# Scene 02 · Frame Plan Summary
**Question:** 014 · Rotate Image (LeetCode 48)  
**Scene:** `02-understand` — Understand Rotation + Derive Coordinate Mapping  
**Duration:** 4,333 frames (144.420s @ 30fps)  
**Audio:** `staticFile("audio/014/02-understand.mp3")`  
**Word Sync:** `sync/02-understand.json` (311 words)  
**Authoritative Framewise Plan:** [`02-understand_FRAMEWISE_PLAN.md`](file:///c:/Users/hrkes/Desktop/DsaAlgo/questions/01-arrays-hashing/014-rotate-image/plans/02-understand_FRAMEWISE_PLAN.md)  
**Visual QA Checklist:** [`02-understand_FRAME_QA_CHECKLIST.md`](file:///c:/Users/hrkes/Desktop/DsaAlgo/questions/01-arrays-hashing/014-rotate-image/plans/02-understand_FRAME_QA_CHECKLIST.md)  

### Beat Map:
- **Beat 01 (F0..F121):** Problem Statement & Square Grid Reveal
- **Beat 02 (F122..F245):** Master 5×5 Values Reveal ($1..25$)
- **Beat 03 (F246..F376):** Zero-Based Coordinate Rulers ($r, c \in [0..4]$)
- **Beat 04 (F377..F457):** Four Corners Hook ($1, 5, 25, 21$)
- **Beat 05 (F458..F601):** Corner 1 Source at $(0, 0)$
- **Beat 06 (F602..F781):** 90° Clockwise Rotation & Corner 1 Flight to $(0, 4)$
- **Beat 07 (F782..F1081):** Corner 5 Flight from $(0, 4)$ to $(4, 4)$
- **Beat 08 (F1082..F1359):** Corners 25 and 21 Flights Completing Perimeter
- **Beat 09 (F1360..F1477):** 4-Corner Cycle Summary ($1 \to 5 \to 25 \to 21 \to 1$)
- **Beat 10 (F1478..F1692):** General Rule Needed for Every Cell
- **Beat 11 (F1693..F1818):** Arbitrary Value at $(r, c)$
- **Beat 12 (F1819..F2046):** Deriving New Row: $\text{newRow} = c$
- **Beat 13 (F2047..F2182):** Deriving New Column: $\text{newCol} = n - 1 - r$
- **Beat 14 (F2183..F2451):** Complete General Coordinate Mapping Banner: $(r, c) \to (c, n - 1 - r)$
- **Beat 15 (F2452..F2790):** Specializing for $N = 5$: $(r, c) \to (c, 4 - r)$
- **Beat 16 (F2791..F2992):** Interior Verification: Value 8 at $(1, 2)$
- **Beat 17 (F2993..F3325):** Value 8 Calculation & Flight to $(2, 3)$
- **Beat 18 (F3326..F3336):** Confirmation Checkmark (`✓ VERIFIED`)
- **Beat 19 (F3337..F3496):** Center Element 13 at $(2, 2)$
- **Beat 20 (F3497..F3686):** Center Math: $(2, 4 - 2) = (2, 2)$
- **Beat 21 (F3687..F3761):** Fixed Point: 13 Maps to Itself
- **Beat 22 (F3762..F3953):** Odd-Sized Matrix Invariant Principle
- **Beat 23 (F3954..F4078):** Complete Destination Truth Established
- **Beat 24 (F4079..F4243):** Algorithmic Dilemma: How to Move Them?
- **Beat 25 (F4244..F4333):** Handoff to Method 1 (Extra Destination Matrix)
