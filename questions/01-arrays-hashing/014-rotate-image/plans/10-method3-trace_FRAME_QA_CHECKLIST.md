# Scene 10 QA Checklist: Method 3 Full Verified Trace
## 014-rotate-image · Scene 10 (`10-method3-trace`)

- **Total Frames:** 4465 (148.840s @ 30 FPS)
- **Audio:** `public/audio/014/10-method3-trace.mp3`
- **Sync Words:** 271 words in `sync/10-method3-trace.json`
- **Visual Stills:** 25 stills generated in `output/inspect/scene10/`

---

### Frame Checkpoint List

| Checkpoint | Frame | Spoken Phrase / Anchor | Visual Invariant to Verify | Status |
|---|---|---|---|---|
| **CP01** | `F0100` | "original 5 by 5 matrix" | Original untouched 5×5 matrix appears (vals 1..25); zero cards | **PASSED** |
| **CP02** | `F0300` | "Transpose means swap" | Transpose rule pill appears; diagonal cells unchanged | **PASSED** |
| **CP03** | `F0550` | "reflect across main diagonal" | Main diagonal cells [1, 7, 13, 19, 25] highlight in gold | **PASSED** |
| **CP04** | `F0800` | "process only one side" | Above-diagonal region indicated; zero spoilers of swaps | **PASSED** |
| **CP05** | `F1090` | "2 swaps with 6" | Pair (0,1) and (1,0) swap values 2 ↔ 6 in-place | **PASSED** |
| **CP06** | `F1180` | "3 swaps with 11" | Pair (0,2) and (2,0) swap values 3 ↔ 11 | **PASSED** |
| **CP07** | `F1260` | "4 swaps with 16" | Pair (0,3) and (3,0) swap values 4 ↔ 16 | **PASSED** |
| **CP08** | `F1340` | "5 swaps with 21" | Pair (0,4) and (4,0) swap values 5 ↔ 21; row 0 complete | **PASSED** |
| **CP09** | `F1710` | "8 swaps with 12" | Pair (1,2) and (2,1) swap values 8 ↔ 12 | **PASSED** |
| **CP10** | `F1800` | "9 swaps with 17" | Pair (1,3) and (3,1) swap values 9 ↔ 17 | **PASSED** |
| **CP11** | `F1880` | "10 swaps with 22" | Pair (1,4) and (4,1) swap values 10 ↔ 22; row 1 complete | **PASSED** |
| **CP12** | `F2170` | "14 swaps with 18" | Pair (2,3) and (3,2) swap values 14 ↔ 18 | **PASSED** |
| **CP13** | `F2250` | "15 swaps with 23" | Pair (2,4) and (4,2) swap values 15 ↔ 23; row 2 complete | **PASSED** |
| **CP14** | `F2620` | "20 with 24 swap" | Pair (3,4) and (4,3) swap values 20 ↔ 24; all 10 swaps complete | **PASSED** |
| **CP15** | `F2800` | "original columns have become rows" | Full transposed matrix state displayed; Phase 1 complete | **PASSED** |
| **CP16** | `F3100` | "Reverse every row" | Transition to Phase 2; Row reversal HUD active | **PASSED** |
| **CP17** | `F3340` | "first value moves to last" | Row 0 two-pointer: values 1 ↔ 21 swap | **PASSED** |
| **CP18** | `F3450` | "second moves to second last" | Row 0 two-pointer: values 6 ↔ 16 swap; row 0 complete | **PASSED** |
| **CP19** | `F3640` | "row 1" | Row 1 reverses in-place | **PASSED** |
| **CP20** | `F3680` | "row 2" | Row 2 reverses in-place | **PASSED** |
| **CP21** | `F3715` | "row 3" | Row 3 reverses in-place | **PASSED** |
| **CP22** | `F3760` | "row 4" | Row 4 reverses in-place; all rows reversed! | **PASSED** |
| **CP23** | `F3950` | "90 degree clockwise rotation" | Master rotated matrix turns green; Q.E.D. badge | **PASSED** |
| **CP24** | `F4200` | "two simple operations" | O(N²) time & O(1) space complexity pills visible | **PASSED** |
| **CP25** | `F4450` | Hold / Final frames | Clean comprehension hold; zero jitter; > 240px caption clearance | **PASSED** |

---

### Invariant Rules Verification
1. **Zero AI-Slop Cards:** Standalone 5×5 Matrix center-stage with individual swap badges and HUD pills. (VERIFIED)
2. **Zero Spoilers:** Every single swap executes exactly when spoken in the verified narration. (VERIFIED)
3. **Zero Collisions:** Matrix sits at X: 100..620, Y: 135..650. HUD sits at X: 650..1840, Y: 135..670. Captions at Y: 960..1010 have > 280px vertical breathing space. (VERIFIED)
