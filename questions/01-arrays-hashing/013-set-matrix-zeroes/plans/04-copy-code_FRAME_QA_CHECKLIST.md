# Scene 04 — Method 1 Code: Critical Frame QA Checklist
**Question 013: Set Matrix Zeroes (LeetCode 73)**  
**Pattern 01: Arrays & Hashing**  
**Scene Name:** `04-copy-code`  
**Total Duration:** 1981 frames @ 30fps (66.020s)  
**Total Critical Checkpoints:** 19 / 19 PASS  

---

## Verification Frame Manifest (19 / 19 PASS)

| Checkpoint | Frame | Timestamp | Visual Element & Invariant Checked | Status |
|:---|:---|:---|:---|:---|
| **CP01** | `F15` | 0.50s | `ChalkCodeEditorV2` enters; `def setZeroesCopy(matrix):` clear | `[x] PASS` |
| **CP02** | `F65` | 2.17s | Line 2 `original = [row[:] for row in matrix]` typed with character typing | `[x] PASS` |
| **CP03** | `F135` | 4.50s | Golden padlock stamp "READ-ONLY COPY (original)" on 5x5 matrix clone | `[x] PASS` |
| **CP04** | `F250` | 8.33s | Dimension lines 4 & 5 `m = len(matrix)`, `n = len(matrix[0])` typed with `m = 5 rows` and `n = 5 cols` badges | `[x] PASS` |
| **CP05** | `F360` | 12.00s | Nested loops `for r in range(m): for c in range(n):` typed | `[x] PASS` |
| **CP06** | `F480` | 16.00s | Non-zero cell skip decision callout ("original[0][1] = 2 (NOT ZERO) -> ACTION: DO NOTHING") | `[x] PASS` |
| **CP07** | `F590` | 19.67s | Zero detection branch `if original[r][c] == 0:` glowing amber with cell (0,2) beacon | `[x] PASS` |
| **CP08** | `F700` | 23.33s | Row zeroing loop lines 10-11 `matrix[r][j] = 0` with Row 0 turning green zeroes on working matrix | `[x] PASS` |
| **CP09** | `F810` | 27.00s | Column zeroing loop lines 13-14 `matrix[i][c] = 0` with Col 2 turning green zeroes on working matrix | `[x] PASS` |
| **CP10** | `F910` | 30.33s | Complete 14-line Python function assembled and displayed cleanly in `ChalkCodeEditorV2` | `[x] PASS` |
| **CP11** | `F1030` | 34.33s | Core Architectural Card: Read Original (Cyan) → Write Working (Green) | `[x] PASS` |
| **CP12** | `F1130` | 37.67s | Discovery source invariance active on `original` variable | `[x] PASS` |
| **CP13** | `F1250` | 41.67s | False chain reaction prevention banner with high-contrast text | `[x] PASS` |
| **CP14** | `F1380` | 46.00s | Correctness trust seal "✓ 100% CORRECT & SIMPLE" active | `[x] PASS` |
| **CP15** | `F1490` | 49.67s | Space complexity critique card: `Auxiliary Space: O(M × N)` warning with Line 2 hot-line tag | `[x] PASS` |
| **CP16** | `F1600` | 53.33s | 25-cell allocation meter showing 100% grid replication | `[x] PASS` |
| **CP17** | `F1700` | 56.67s | Data waste contrast: 3 useful zeros vs 22 irrelevant cells (88% waste) faded to 15% opacity | `[x] PASS` |
| **CP18** | `F1830` | 61.00s | "Critical Optimization Question" pedagogical bridge banner | `[x] PASS` |
| **CP19** | `F1930` | 64.33s | Final reflection hook card with `RoughBox` chalk frame: "What information do we truly need to remember?" | `[x] PASS` |

---

## Layout & Zero-Collision Checks (ALL PASS)

- [x] Code Editor ($X: 80, Y: 140, W: 960, H: 640$) uses `ChalkCodeEditorV2` with 22px bold code font.
- [x] Context Panel & Live Matrix ($X: 1080, Y: 140, W: 760, H: 640$) has 64px matrix cells and bold typography.
- [x] Both panels stop at $Y: 780$, maintaining $200\text{px}$ buffer above bottom captions ($Y: 980$).
- [x] Header at $Y: 42..108$ has clear margin above panels.
- [x] Zero text clipping, zero CSS transitions/animations, 100% Remotion frame determinism.

