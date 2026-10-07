# Scene 07: Method 2 Code (Layer-by-Layer In-Place Implementation)
## Exact Framewise Production Plan (Total: 4,700 Frames @ 30 FPS · 156.660s)

> **Source Authority:**
> - Audio: `public/audio/014/07-method2-code.mp3` (156.660s · 4,700 frames)
> - Sync: `sync/07-method2-code.json` (322 words)
> - Re-Audit Plan: `Q14_PHASE9_REAUDIT_V2/07_SCENE07_METHOD2_CODE_WORD_BASED_VISUAL_PLAN.md`
> - User Mandates: Strictly kit components (`ChalkCodeEditorV2`, `RoughBox`, `ChalkText`, `RoughLine`, `BezierFlight`). NO AI-slop cards / generic boxes. NO spoilers — elements and lines appear ONLY when spoken. Clean Center-Stage balance (Code Left, Matrix Right). Pristine breathing room > 180px above captions at Y: 960.

---

### Spatial Canvas Budget (1920 × 1080)
- **Top Metadata Strip (Y: 36..105):**
  - Left: `01 · ARRAYS & HASHING`
  - Center: `ROTATING A SQUARE MATRIX`
  - Right: `METHOD 2 · IN-PLACE 4-WAY CODE`
- **Left Stage (X: 80..1020, Y: 135..780, Width: 940):**
  - `ChalkCodeEditorV2` with 15 syntax-highlighted Python lines.
  - Progressive typing synchronized to exact spoken words.
  - Future lines stay hidden (`endFrame` reveals each line exactly when spoken).
  - Hot line highlighting (`hotLineNum`) following the active algorithmic step.
- **Right Stage (X: 1080..1840, Y: 135..780, Width: 760):**
  - **Direct Support Hero:** 5×5 Matrix Grid using `RoughBox` (cells) and `ChalkText` (cell values & row/col coordinates).
  - **Individual Variable Boxes (`RoughBox` + `ChalkText`):**
    - Active Loop Pointers: `layer`, `first`, `last`, `i`, `offset` (rendered cleanly as chalk labels directly above/beside matrix).
    - Single Temp Storage Box: `top = matrix[first][i]` at (X: 1380, Y: 680) holding the saved top value during the 4-way swap.
    - Zero artificial card nesting — everything is pure chalkboard visual elements!
  - **Complexity Reveal (Frames 3588..4471):**
    - `Extra Space: O(1)` chalk badge linked to the single temp variable box.
    - `Time: O(N²)` chalk badge linked to the N×N cells.
    - Appears ONLY when spoken at B24/B25/B27.
- **Bottom Zone (Y: 960..1010):**
  - Word-level synced `Captions` with 180px+ vertical clearance from Y: 780.

---

### Framewise Beat Choreography (All 30 Contiguous Beats)

| Beat | Anchor ID | Frames | Word Range | Narration Phrase | Center-Stage Hero & Kit Action |
|:---:|:---:|:---:|:---:|:---|:---|
| **B01** | `S07_N` | 0..58 | w[0..2] | "First, store n." | Reveal Line 3: `n = len(matrix)`. Matrix displays 5×5 grid with dimensions $n=5$. |
| **B02** | `S07_HALF` | 75..390 | w[3..27] | "Now, how many layers do we need to process? Only half of them..." | Reveal Line 4: `for layer in range(n // 2):`. Matrix outer and inner layer partitions highlight. |
| **B03** | `S07_FIRST` | 407..507 | w[28..35] | "For each layer, first is the layer index," | Reveal Line 5: `first = layer`. First pointer marks row/col 0. |
| **B04** | `S07_LAST` | 517..618 | w[36..43] | "and last is n minus 1 minus layer." | Reveal Line 6: `last = n - 1 - layer`. Last pointer marks row/col 4. |
| **B05** | `S07_OUTER_EX` | 636..969 | w[44..68] | "For the outermost layer, first is 0, and last is n minus 1..." | Live pointer demonstration on matrix: layer 0 has bounds [0, 4]; layer 1 shifts to [1, 3]. |
| **B06** | `S07_TOPSIDE` | 985..1277 | w[69..88] | "Now, inside the current layer, we move across the top edge..." | Reveal Line 7: `for i in range(first, last):`. Top row elements highlighted between `first` and `last`. |
| **B07** | `S07_STOP_WHY` | 1298..1571 | w[89..108] | "We stop before last because the final top position already belongs to the cycle..." | Last top element `[0, 4]` dimmed with cross-check cue; shows it belongs to right side start. |
| **B08** | `S07_OFFSET` | 1588..1897 | w[109..134] | "For the current position, I calculate offset equals i minus first..." | Reveal Line 8: `offset = i - first`. Offset indicator brackets distance from `first` to `i`. |
| **B09** | `S07_FOUR` | 1920..2096 | w[135..146] | "Using first, last, and offset, we can identify the four connected coordinates." | 4 connected cells light up simultaneously in cyan outline: `[0,1]`, `[1,4]`, `[4,3]`, `[3,0]`. |
| **B10** | `S07_TOP` | 2109..2168 | w[147..150] | "Top is first, i." | Cell `matrix[first][i]` highlights in gold `theme.pivot` with label `(first, i)`. |
| **B11** | `S07_RIGHT` | 2174..2228 | w[151..154] | "Right is i, last." | Cell `matrix[i][last]` highlights with label `(i, last)`. |
| **B12** | `S07_BOTTOM` | 2239..2318 | w[155..160] | "Bottom is last, last minus offset." | Cell `matrix[last][last - offset]` highlights with label `(last, last - offset)`. |
| **B13** | `S07_LEFT` | 2335..2423 | w[161..167] | "And left is last minus offset, first." | Cell `matrix[last - offset][first]` highlights with label `(last - offset, first)`. |
| **B14** | `S07_TRACE_INTRO` | 2423..2554 | w[168..175] | "Now perform the same movement we traced visually." | Faint orbital path connects the 4 active cells in clockwise rotation order. |
| **B15** | `S07_SAVE` | 2564..2620 | w[176..180] | "First, save the top value." | Reveal Line 9: `top = matrix[first][i]`. Value from `[first][i]` lifts into the `top_val` box! |
| **B16** | `S07_L2T` | 2640..2701 | w[181..185] | "Then left goes into top," | Reveal Line 10: `matrix[first][i] = matrix[last - offset][first]`. Value moves left -> top. |
| **B17** | `S07_B2L` | 2713..2748 | w[186..189] | "bottom goes into left," | Reveal Line 11: `matrix[last - offset][first] = matrix[last][last - offset]`. Bottom -> left. |
| **B18** | `S07_R2B` | 2758..2791 | w[190..193] | "right goes into bottom," | Reveal Line 12: `matrix[last][last - offset] = matrix[i][last]`. Right -> bottom. |
| **B19** | `S07_T2R` | 2800..2881 | w[194..200] | "and the saved top goes into right." | Reveal Line 13: `matrix[i][last] = top`. Saved `top_val` lands into right! |
| **B20** | `S07_COMPLETE` | 2907..2987 | w[201..206] | "One four-way cycle is complete." | All 4 cells flash green `theme.good`, confirming one full cycle rotation. |
| **B21** | `S07_INNERLOOP` | 3008..3160 | w[207..216] | "The inner loop continues until the entire layer is finished." | `i` pointer advances across top row; shows next cycle positions ready. |
| **B22** | `S07_OUTERLOOP` | 3178..3277 | w[217..224] | "Then the outer loop moves one layer inward." | Layer advances to inner 3×3 ring; bounds update to `[1, 3]`. |
| **B23** | `S07_ODD` | 3294..3562 | w[225..244] | "For an odd-sized matrix, the center is never selected... stays untouched automatically." | Center cell `[2, 2]` (value 13) illuminates with neutral gold highlight: no cycle ever touches it! |
| **B24** | `S07_TEMP` | 3588..3733 | w[245..254] | "This method uses only one temporary value for each cycle." | Temp storage box glows `theme.cyan`; emphasizes only 1 scalar variable in auxiliary RAM. |
| **B25** | `S07_SPACE` | 3754..3841 | w[255..262] | "So the extra space is O of 1." | Clean Chalkboard pill appears: `EXTRA SPACE: O(1) · CONSTANT`. |
| **B26** | `S07_WORK` | 3853..4106 | w[263..281] | "And across all layers, the matrix contains N-squared positions with only constant work..." | All $N \times N = 25$ cells pulse softly: $O(1)$ operations per cell. |
| **B27** | `S07_TIME` | 4124..4221 | w[282..290] | "So the total time is O of N-squared..." | Clean Chalkboard pill appears: `TIME COMPLEXITY: O(N²)`. |
| **B28** | `S07_O1_REPEAT` | 4221..4309 | w[291..296] | "and extra space O of 1." | Both pills align: `O(N²) TIME · O(1) SPACE`. |
| **B29** | `S07_OPTIMAL` | 4331..4471 | w[297..307] | "So method 2 already gives us an optimal in-place solution." | Verified badge: `OPTIMAL IN-PLACE SOLUTION`. |
| **B30** | `S07_TRANSITION` | 4489..4700 | w[308..321] | "But there is another way to express the same rotation using much simpler transformations." | Teaser hook: `CAN WE ROTATE WITHOUT COMPLEX 4-WAY FORMULAS? ──► METHOD 3`. |

---
