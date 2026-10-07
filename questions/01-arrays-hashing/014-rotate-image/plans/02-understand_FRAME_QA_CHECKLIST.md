# Scene 02 · Critical Frame QA Checklist
**Question:** 014 · Rotate Image (LeetCode 48)  
**Scene:** `02-understand` — Understand Rotation + Coordinate Mapping  
**Audio:** `audio/014/02-understand.mp3` (144.420s, 4,333 frames @ 30fps)  
**Anchor Source:** `sync/02-understand.anchors.json`  

---

## 1. Frame-Specific Visual Checkpoints

| Checkpoint ID | Anchor | Review Frame | Spoken Narration Anchor | Expected Visual & Semantic State | Status |
|---|---|---|---|---|---|
| **QA-01** | `S02_GIVEN_MATRIX` | **Frame 50** | "n by n square matrix." | Grid wireframe shell appears in center stage (X: 754, Y: 240, 412×412px); `ProblemOpenerShell` at top; zero values yet. | `[x] PASS` |
| **QA-02** | `S02_5X5_EXAMPLE` | **Frame 180** | "five by five matrix." | Complete 5×5 master matrix revealed with values $1..25$; header tag "5 × 5 MASTER MATRIX (N = 5)". | `[x] PASS` |
| **QA-03** | `S02_ZERO_INDEXED` | **Frame 300** | "zero-based row and column indices." | Top column rulers $c \in [0..4]$ and left row rulers $r \in [0..4]$ fully drawn in cyan/green chalk. | `[x] PASS` |
| **QA-04** | `S02_FOUR_CORNERS_HOOK` | **Frame 410** | "just watch the four corners." | 4 corners ($1, 5, 25, 21$) illuminated in glowing rough boxes; interior 21 cells dimmed to 0.35. | `[x] PASS` |
| **QA-05** | `S02_CORNER_1_SOURCE` | **Frame 500** | "One starts at row zero, column zero." | Cell $(0, 0)$ containing $1$ spotlighted; $(0, 0)$ callout tag visible. | `[x] PASS` |
| **QA-06** | `S02_CORNER_1_DEST` | **Frame 720** | "one moves to row zero, column four." | Value $1$ flying along curved clockwise top arc into cell $(0, 4)$; ghost outline at $(0, 0)$. | `[x] PASS` |
| **QA-07** | `S02_CORNER_5_CYCLE` | **Frame 1010** | "five moves to row four, column four." | Value $5$ flying down right column arc from $(0, 4)$ to $(4, 4)$; $(0, 4) \to (4, 4)$ callout. | `[x] PASS` |
| **QA-08** | `S02_CORNERS_25_21_CYCLE` | **Frame 1250** | "moves from the bottom-left back to the top-left." | Values $25$ and $21$ completing bottom and left perimeter flights. | `[x] PASS` |
| **QA-09** | `S02_CORNER_CYCLE_SUMMARY` | **Frame 1420** | "form one rotation cycle," | Closed 4-way corner circuit ($1 \to 5 \to 25 \to 21 \to 1$) highlighted as a continuous glowing loop. | `[x] PASS` |
| **QA-10** | `S02_GENERAL_RULE_NEED` | **Frame 1550** | "rule that works for every cell" | Full matrix restored to 1.0 opacity; "Need General Rule for ALL Cells" card appears. | `[x] PASS` |
| **QA-11** | `S02_ARBITRARY_RC` | **Frame 1760** | "At row R, column C," | Arbitrary cell $(r, c)$ spotlighted with row/column projection lines. | `[x] PASS` |
| **QA-12** | `S02_DERIVE_NEW_ROW` | **Frame 1980** | "new row becomes the old column." | Formula card shows $\text{newRow} = c$ with directional chalk arrow. | `[x] PASS` |
| **QA-13** | `S02_DERIVE_NEW_COL` | **Frame 2120** | "new column becomes n minus one minus r." | Formula card shows $\text{newCol} = n - 1 - r$. | `[x] PASS` |
| **QA-14** | `S02_GENERAL_MAPPING_FORMULA` | **Frame 2300** | "complete coordinate mapping is" | Universal formula banner docked: $(r, c) \longrightarrow (c, n - 1 - r)$ in gold/cyan chalk. | `[x] PASS` |
| **QA-15** | `S02_SPEC_N5_FORMULA` | **Frame 2650** | "moves to row C, column four minus R." | Specialized 5×5 formula banner: $(r, c) \longrightarrow (c, 4 - r)$. | `[x] PASS` |
| **QA-16** | `S02_VERIFY_INTERIOR_8_SOURCE` | **Frame 2920** | "Eight is at row one, column two." | Interior cell $(1, 2)$ containing $8$ highlighted; evaluation panel docked below grid. | `[x] PASS` |
| **QA-17** | `S02_VERIFY_INTERIOR_8_DEST` | **Frame 3230** | "eight moves to row two, column three." | Value $8$ flying from $(1, 2)$ to $(2, 3)$; evaluation shows $4 - 1 = 3$. | `[x] PASS` |
| **QA-18** | `S02_VERIFY_GOOD` | **Frame 3330** | "Good." | Green checkmark (`✓`) confirmation beside $(1, 2) \to (2, 3)$. | `[x] PASS` |
| **QA-19** | `S02_CENTER_13_SOURCE` | **Frame 3430** | "Thirteen is at row two, column two." | Center cell $(2, 2)$ containing $13$ illuminated with golden halo. | `[x] PASS` |
| **QA-20** | `S02_CENTER_13_CALC` | **Frame 3620** | "column four minus two, which is also two." | Center evaluation shows $(2, 4 - 2) = (2, 2)$. | `[x] PASS` |
| **QA-21** | `S02_CENTER_13_FIXED` | **Frame 3720** | "thirteen maps back to itself." | Self-rotation glyph in place; value $13$ stays completely stationary! Fixed point badge. | `[x] PASS` |
| **QA-22** | `S02_ODD_CENTER_INVARIANT` | **Frame 3880** | "in an odd-sized matrix, the exact center does not move." | Odd-matrix center invariant theorem card docked across center stage. | `[x] PASS` |
| **QA-23** | `S02_DESTINATION_TRUTH_KNOWN` | **Frame 4010** | "Now we know where every value belongs." | Ghost overlay across all 25 cells showing target rotated destinations. | `[x] PASS` |
| **QA-24** | `S02_HOW_TO_MOVE_HOOK` | **Frame 4170** | "how should we actually move them?" | Movement dilemma card with in-place overwrite collision hazard alert. | `[x] PASS` |
| **QA-25** | `S02_HANDOFF_METHOD1` | **Frame 4300** | "most direct method." | Method 1 teaser card; matrix eases left to prepare dual-grid layout for Scene 03. | `[x] PASS` |

---

## 2. Invariant & Anti-Regression Verification

- [x] **Frame 0 Provenance:** Seamless continuity from Scene 01 ending frame (`ProblemOpenerShell` docked at top, center stage clean).
- [x] **Zero-Collision:** Grid (Y: 240..652), Formula banner (Y: 135..210), Evaluation panel (Y: 680..760), Captions (Y: 980). Vertical clearance > 220px above captions at all times.
- [x] **Exact Ground Truth:** Master 5×5 matrix matches verified values $1..25$; all rotations match clockwise math $(r, c) \to (c, 4 - r)$.
- [x] **Deterministic Motion:** All positions derived from `frame` via Remotion `interpolate()` and `spring()`.
- [x] **Audio Sync:** Exact alignment with `sync/02-understand.json`.
- [x] **Total Duration:** Exactly 4,333 frames.
