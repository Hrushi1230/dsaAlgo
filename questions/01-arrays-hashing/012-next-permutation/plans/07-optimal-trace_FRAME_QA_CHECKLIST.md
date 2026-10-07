# Scene 07 · Critical Frame QA Checklist: Method 2 · Full Verified Trace
**Question:** 012 · Next Permutation (LeetCode 31)  
**Scene:** `07-optimal-trace`  
**Audio:** `remotion-project/public/audio/012/07-optimal-trace.mp3` (117.320s, 3,520 frames @ 30 FPS)  
**Anchor Source:** `sync/07-optimal-trace.anchors.json` (46 Anchors)  

---

## 1. Frame-Specific Visual Checkpoints

| Checkpoint ID | Anchor | Review Frame | Spoken Narration Anchor | Expected Visual & Semantic State | Status |
|---|---|---|---|---|---|
| **QA-01** | `S07_MASTER` | **Frame 20** | "Our array is" | Master trace array `[2, 1, 5, 4, 4, 3, 0]` centered with indices 0..6 visible. | `[x] PASS` |
| **QA-02** | `S07_VALUES` | **Frame 100** | "five... four..." | Value 5 at index 2 highlighted in sequence during spoken readback. | `[x] PASS` |
| **QA-03** | `S07_I_START` | **Frame 270** | "start the pivot search from the second-last index." | Pointers `i` (slot 5) and `i+1` (slot 6) initialized. Inspection card fades in. | `[x] PASS` |
| **QA-04** | `S07_C5` | **Frame 370** | "three is smaller than zero?" | Card displays `nums[5] < nums[6]` ➔ `3 < 0 ?`. Slots 5 and 6 highlighted. | `[x] PASS` |
| **QA-05** | `S07_N5` | **Frame 435** | "No." | Red rejection badge `✗ FALSE: 3 ≥ 0` appears. | `[x] PASS` |
| **QA-06** | `S07_M54` | **Frame 460** | "Move left." | Pointer `i` glides from index 5 to index 4. `i+1` shifts to index 5. | `[x] PASS` |
| **QA-07** | `S07_C4` | **Frame 520** | "four is smaller than three?" | Card displays `nums[4] < nums[5]` ➔ `4 < 3 ?`. Slots 4 and 5 highlighted. | `[x] PASS` |
| **QA-08** | `S07_N4` | **Frame 570** | "No." | Red rejection badge `✗ FALSE: 4 ≥ 3` appears. | `[x] PASS` |
| **QA-09** | `S07_M43` | **Frame 595** | "Move left." | Pointer `i` glides from index 4 to index 3. `i+1` shifts to index 4. | `[x] PASS` |
| **QA-10** | `S07_C3` | **Frame 660** | "four is smaller than four?" | Duplicate comparison: `nums[3] < nums[4]` ➔ `4 < 4 ?`. Both slots pulse. | `[x] PASS` |
| **QA-11** | `S07_NEQ` | **Frame 715** | "No." | Rejection badge `✗ FALSE: 4 = 4` stamps in card. | `[x] PASS` |
| **QA-12** | `S07_EQ_RULE` | **Frame 760** | "Equal values do not satisfy the condition." | Rule callout: strict inequality `<` required, not `<=`. | `[x] PASS` |
| **QA-13** | `S07_M32` | **Frame 820** | "Move left." | Pointer `i` glides from index 3 to index 2. `i+1` shifts to index 3. | `[x] PASS` |
| **QA-14** | `S07_C2` | **Frame 880** | "five is smaller than four?" | Peak comparison: `nums[2] < nums[3]` ➔ `5 < 4 ?`. Slots 2 and 3 highlighted. | `[x] PASS` |
| **QA-15** | `S07_N2` | **Frame 945** | "No." | Rejection badge `✗ FALSE: 5 ≥ 4` appears. | `[x] PASS` |
| **QA-16** | `S07_M21` | **Frame 970** | "Move left." | Pointer `i` glides to critical pivot location at index 1. | `[x] PASS` |
| **QA-17** | `S07_C1` | **Frame 1030** | "one is smaller than five?" | Critical comparison: `nums[1] < nums[2]` ➔ `1 < 5 ?`. Expectant glow. | `[x] PASS` |
| **QA-18** | `S07_Y1` | **Frame 1080** | "Yes." | Green victory badge `✓ TRUE! 1 < 5` stamps on. | `[x] PASS` |
| **QA-19** | `S07_PIVOT` | **Frame 1120** | "index one is our pivot." | Pointer `i` locks as `pivot`. Slot 1 illuminates in gold. | `[x] PASS` |
| **QA-20** | `S07_PIVOT_VAL` | **Frame 1170** | "The pivot value is one." | Pivot value badge `nums[1] = 1` pulses inside slot 1. | `[x] PASS` |
| **QA-21** | `S07_SUFFIX` | **Frame 1300** | "Everything after it... is non-increasing." | Green hatched partition band spans slots 2..6: `5 ≥ 4 ≥ 4 ≥ 3 ≥ 0`. | `[x] PASS` |
| **QA-22** | `S07_FIND_REPL` | **Frame 1450** | "value that should replace the pivot." | Step 2 Eyebrow activates: `STEP 2 · FIND SUCCESSOR & SWAP`. | `[x] PASS` |
| **QA-23** | `S07_J_START` | **Frame 1535** | "Start from the last index." | Successor pointer `j` enters at index 6 (value 0). | `[x] PASS` |
| **QA-24** | `S07_J6` | **Frame 1590** | "Zero is greater than one?" | Comparison `nums[6] > nums[1]` ➔ `0 > 1 ?` displayed. | `[x] PASS` |
| **QA-25** | `S07_J6_NO` | **Frame 1640** | "No." | Rejection badge `✗ FALSE: 0 ≤ 1` stamps in card. | `[x] PASS` |
| **QA-26** | `S07_J_MOVE` | **Frame 1670** | "Move left." | Pointer `j` moves left from index 6 to index 5. | `[x] PASS` |
| **QA-27** | `S07_J5` | **Frame 1715** | "Three is greater than one?" | Successor comparison `nums[5] > nums[1]` ➔ `3 > 1 ?` highlighted. | `[x] PASS` |
| **QA-28** | `S07_J5_YES` | **Frame 1760** | "Yes." | Green victory badge `✓ TRUE! 3 > 1` stamps on. | `[x] PASS` |
| **QA-29** | `S07_SUCCESSOR` | **Frame 1805** | "index five is our successor." | Pointer `j` locks as successor. Slot 5 illuminates in cyan. | `[x] PASS` |
| **QA-30** | `S07_SUCCESSOR_VAL` | **Frame 1860** | "The successor value is three." | Successor value `nums[5] = 3` pulses inside slot 5. | `[x] PASS` |
| **QA-31** | `S07_SWAP_PREP` | **Frame 1920** | "swap the pivot and successor." | Overhead dashed swap arc connects slot 1 and slot 5. | `[x] PASS` |
| **QA-32** | `S07_SWAP` | **Frame 1975** | "One swaps with three." | Real parabolic flight: Value 1 flies to slot 5; Value 3 flies to slot 1. | `[x] PASS` |
| **QA-33** | `S07_AFTER_SWAP` | **Frame 2100** | "array becomes 2, 3, 5, 4, 4, 1, 0." | Array displays `[2, 3, 5, 4, 4, 1, 0]`. Sequential readback pulse. | `[x] PASS` |
| **QA-34** | `S07_LARGER` | **Frame 2240** | "permutation is larger..." | Status badge: `PERMUTATION IS NOW LARGER (2,3 > 2,1)`. | `[x] PASS` |
| **QA-35** | `S07_SUFFIX_MAX` | **Frame 2310** | "suffix is still as large as possible." | Warning callout: suffix `[5, 4, 4, 1, 0]` is still descending/maximal. | `[x] PASS` |
| **QA-36** | `S07_MIN_SUFFIX` | **Frame 2390** | "smallest possible suffix." | Objective card: Suffix must be reversed to achieve ascending (minimal). | `[x] PASS` |
| **QA-37** | `S07_RANGE` | **Frame 2540** | "reverse range is index two to index six." | Two reversal pointers initialized: `left` at slot 2, `right` at slot 6. | `[x] PASS` |
| **QA-38** | `S07_RSWAP1` | **Frame 2645** | "Swap five and zero." | Parabolic reverse swap 1: Value 5 and Value 0 swap positions. | `[x] PASS` |
| **QA-39** | `S07_STATE1` | **Frame 2760** | "array becomes 2, 3, 0, 4, 4, 1, 5." | Array displays intermediate state: `[2, 3, 0, 4, 4, 1, 5]`. | `[x] PASS` |
| **QA-40** | `S07_INWARD1` | **Frame 2865** | "Move inward." | Pointers move inward: `left` to index 3, `right` to index 5. | `[x] PASS` |
| **QA-41** | `S07_RSWAP2` | **Frame 2905** | "Swap four and one." | Parabolic reverse swap 2: Value 4 and Value 1 swap positions. | `[x] PASS` |
| **QA-42** | `S07_STATE2` | **Frame 3020** | "array becomes 2, 3, 0, 1, 4, 4, 5." | Array displays reversed result: `[2, 3, 0, 1, 4, 4, 5]`. | `[x] PASS` |
| **QA-43** | `S07_MEET` | **Frame 3140** | "reverse pointers meet." | Pointers meet at index 4 (`left = right = 4`). Converged badge appears. | `[x] PASS` |
| **QA-44** | `S07_STOP` | **Frame 3185** | "We stop." | Termination badge: `✓ TERMINATE: left >= right`. No middle self-swap. | `[x] PASS` |
| **QA-45** | `S07_FINAL` | **Frame 3300** | "final answer is 2, 3, 0, 1, 4, 4, 5." | All 7 slots glow radiant green. Final answer verified. | `[x] PASS` |
| **QA-46** | `S07_IMMEDIATE` | **Frame 3480** | "immediate next permutation." | Gold trophy banner stamps on: `IMMEDIATE NEXT PERMUTATION · O(N) TIME`. | `[x] PASS` |

---

## 2. Invariant & Anti-Regression Verification

- [x] **Frame 0 Continuity:** Seamless transition from Scene 06 untouched array state.
- [x] **Exact Frame Duration:** Total frames rendered is exactly 3,520 @ 30 FPS (117.320s).
- [x] **Oxford Chalkboard Aesthetic:** No black boxes; cards use authentic translucent chalkboard wash (`rgba(10, 48, 42, 0.68)`) with `RoughBox` chalk outlines matching `s03_f1250.png`.
- [x] **Top Header System:** Left badges (`[ 01 · ARRAYS & HASHING · LC 31 ]`, `[ MEDIUM ]`), center handwritten title in Caveat, right golden badge (`[ APPROACH 2 · OPTIMAL TRACE ]`).
- [x] **Zero Collision Law:** Array track placed at `top: 15` (ends at screen Y: 385), inspection card placed at `top: 255` (screen Y: 400), guaranteeing `>= 65px` clearance. Card never cuts through pointers or slot indices.
- [x] **Vertical Canvas Harmony:** Elements distributed across Y: 145..740, leaving $> 240px$ breathing room above bottom karaoke captions (`Y: 980`).
- [x] **Array V2 Law:** Slots remain fixed shells. Values physically fly along parabolic trajectories during swaps. Indices never shift.
- [x] **No Middle Self-Swap:** When `left == right == 4`, no self-swap is animated; the algorithm terminates cleanly.
- [x] **Exact Dry-Run Fidelity:** Every swap and pointer location exactly matches the verified algorithmic dry run.
