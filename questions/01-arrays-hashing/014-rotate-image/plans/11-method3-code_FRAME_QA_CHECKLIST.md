# Scene 11 QA Checklist: Method 3 Implementation & Code (LeetCode 48)
## 014-rotate-image · Scene 11 (`11-method3-code`)

- **Total Frames:** 3,026 (100.860s @ 30 FPS)
- **Audio File:** `public/audio/014/11-method3-code.mp3`
- **Sync Words:** 197 words in `sync/11-method3-code.json`
- **Authoritative Plan:** `plans/11-method3-code_FRAMEWISE_PLAN.md`
- **Language:** Python (11 canonical lines)
- **Kit Purity:** 100% `@dsa/kit` components (`ChalkCodeEditorV2`, `RoughBox`, `ChalkText`, `RoughLine`, `Captions`)

---

### Frame Checkpoint Verification List

| Checkpoint | Frame | Spoken Phrase / Anchor | Visual Invariant to Verify | Kit Component(s) | Status |
|---|---|---|---|---|---|
| **CP01** | `F0060` | "Now let's translate that proof" | Code editor appears smoothly on left (X: 70, Y: 140); blank code body; metadata strip on top | `ChalkCodeEditorV2`, `ChalkText` | PASSED (verified still-014-s11-f60.png) |
| **CP02** | `F0150` | "First, store n" | Line 3 types character-by-character: `n = len(matrix)` | `ChalkCodeEditorV2` | PASSED (verified still-014-s11-f150.png) |
| **CP03** | `F0210` | "then transpose the matrix" | Line 4 comment appears: `# Step 1: Transpose matrix`; 4x4 matrix grid sketches on right stage | `ChalkCodeEditorV2`, `RoughBox`, `ChalkText` | PASSED (verified still-014-s11-f210.png) |
| **CP04** | `F0280` | "For each row, r" | Line 5 reveals: `for r in range(n):`; row pointer indicator on matrix | `ChalkCodeEditorV2`, `ChalkText` | PASSED (verified still-014-s11-f280.png) |
| **CP05** | `F0360` | "do not start column c from 0" | Col 0 flashes warning cue in theme.warn; `c ≠ 0` label | `RoughBox`, `ChalkText` | PASSED (verified still-014-s11-f360.png) |
| **CP06** | `F0480` | "c starts from r plus 1" | Line 6 reveals: `for c in range(r + 1, n):`; `r + 1` highlighted in cyan | `ChalkCodeEditorV2` | PASSED (verified still-014-s11-f480.png) |
| **CP07** | `F0600` | "one side of the main diagonal" | Upper triangle (r < c) illuminates in cyan; diagonal and lower triangle dim | `RoughBox`, `RoughLine`, `ChalkText` | PASSED (verified still-014-s11-f600.png) |
| **CP08** | `F0750` | "swapped row 0, column 1 with row 1, column 0" | First swap demo: (0,1) ↔ (1,0) swap arc executes along RoughLine | `RoughBox`, `ChalkText`, `RoughLine` | PASSED (verified still-014-s11-f750.png) |
| **CP09** | `F0950` | "later reached row 1, column 0" | Reverse swap hazard: cell (1,0) outlined in flashing amber/red | `RoughBox`, `ChalkText`, `RoughLine` | PASSED (verified still-014-s11-f950.png) |
| **CP10** | `F1080` | "undo our own work" | Values revert to original positions; red UNDO warning badge | `RoughBox`, `ChalkText`, `RoughLine` | PASSED (verified still-014-s11-f1080.png) |
| **CP11** | `F1200` | "processed exactly once" | Green invariant rule badge appears: "Each Pair Swapped Exactly Once (r < c)" | `RoughBox`, `ChalkText` | PASSED (verified still-014-s11-f1200.png) |
| **CP12** | `F1450` | "swap matrix with matrix" | Line 7 types on: `matrix[r][c], matrix[c][r] = matrix[c][r], matrix[r][c]`; live swap on right | `ChalkCodeEditorV2`, `RoughBox`, `ChalkText` | PASSED (verified still-014-s11-f1450.png) |
| **CP13** | `F1620` | "matrix is transposed" | Step 1 transpose block complete; matrix in transposed state; green checkmark pill | `ChalkCodeEditorV2`, `RoughBox`, `ChalkText` | PASSED (verified still-014-s11-f1620.png) |
| **CP14** | `F1740` | "second step is very small" | Cursor moves to Line 9; `# Step 2: Reverse each row` comment appears | `ChalkCodeEditorV2` | PASSED (verified still-014-s11-f1740.png) |
| **CP15** | `F1850` | "reverse that row" | Line 10 `for row in matrix:` & Line 11 `row.reverse()` typed; rows flip on matrix | `ChalkCodeEditorV2`, `RoughBox`, `ChalkText` | PASSED (verified still-014-s11-f1850.png) |
| **CP16** | `F1980` | "Transpose, then reverse rows" | Full Python solution visible in editor; support matrix in final rotated state | `ChalkCodeEditorV2`, `RoughBox`, `ChalkText` | PASSED (verified still-014-s11-f1980.png) |
| **CP17** | `F2180` | "still O of n squared" | Transpose time derivation token: $n(n - 1)/2 \text{ swaps} = O(N^2)$ | `RoughBox`, `ChalkText` | PASSED (verified still-014-s11-f2180.png) |
| **CP18** | `F2380` | "processes n squared values overall" | Reverse rows time derivation token: $n \times (n/2) \text{ swaps} = O(N^2)$ | `RoughBox`, `ChalkText` | PASSED (verified still-014-s11-f2380.png) |
| **CP19** | `F2520` | "total time remains O of n squared" | Total time master banner: $O(N^2) + O(N^2) = O(N^2)$ in glowing theme.accent | `RoughBox`, `ChalkText` | PASSED (verified still-014-s11-f2520.png) |
| **CP20** | `F2720` | "extra space is O of 1" | Space complexity master badge: In-place pointer swaps = $O(1)$ in glowing theme.good | `RoughBox`, `ChalkText` | PASSED (verified still-014-s11-f2720.png) |
| **CP21** | `F2980` | "clean, optimal, in-place solution" | Final harmonious display: Editor + Complexity tokens + Final victory seal | `ChalkCodeEditorV2`, `RoughBox`, `ChalkText` | PASSED (verified still-014-s11-f2980.png) |
| **CP22** | `F3020` | Exit hold before cut | Pristine comprehension hold; zero jitter; > 280px caption clearance | `Captions` | PASSED (verified still-014-s11-f3020.png) |

---

### Invariant Design Rules

1. **100% Kit Components:** Zero ad-hoc styled HTML container cards. All boundaries rendered by `RoughBox` (deterministic seed), all text rendered by `ChalkText`, all lines by `RoughLine`, all code by `ChalkCodeEditorV2`.
2. **Zero Spoilers:** Every code line and complexity formula appears strictly at its spoken timestamp. Future lines remain completely hidden.
3. **Language Consistency:** 100% Python syntax throughout (`n = len(matrix)`, `for r in range(n):`, `for c in range(r + 1, n):`, `matrix[r][c], matrix[c][r] = matrix[c][r], matrix[r][c]`, `for row in matrix: row.reverse()`).
4. **Vertical Layout & Clearance:**
   - Top Bar: Y: 36..100 (metadata only).
   - Code Editor (Left): X: 70..1020, Y: 135..740 (Height: 605px, `scrollY: 0`).
   - Visual Support / Complexity (Right): X: 1070..1850, Y: 135..740.
   - Captions: Y: 960..1010.
   - Vertical clearance above captions: Y: 960 - Y: 740 = 220px to 280px (> 200px invariant).
