# Scene 09 QA Checklist: Method 3 Idea & Algebraic Proof
## 014-rotate-image · Scene 09 (`09-method3-idea`)

- **Total Frames:** 2325 (77.500s @ 30 FPS)
- **Audio:** `public/audio/014/09-method3-idea.mp3`
- **Sync Words:** 159 words in `sync/09-method3-idea.json`
- **Visual Stills:** 17 stills generated in `output/inspect/scene09/`

---

### Frame Checkpoint List

| Checkpoint | Frame | Spoken Phrase / Anchor | Visual Invariant to Verify | Status |
|---|---|---|---|---|
| **CP01** | `F0060` | "find a simpler way" | Top bar metadata pills visible; Master 5×5 matrix appears on left; zero cards | **PASSED** |
| **CP02** | `F0200` | "coordinate mapping" | Target token `(r, c) ──► (c, n - 1 - r)` scales in on right | **PASSED** |
| **CP03** | `F0300` | "row R column C" | Source coordinate `(r, c)` and hero value 8 at (1, 2) highlighted in cyan | **PASSED** |
| **CP04** | `F0420` | "row C column N minus 1 minus R" | Target row `c` and target col `n - 1 - r` components revealed | **PASSED** |
| **CP05** | `F0600` | "two simple transformations" | Strategy bridge token appears: 2 elementary operations | **PASSED** |
| **CP06** | `F0780` | "transpose the matrix" | Step 1 revealed: `Transpose (Swap Rows & Cols Across Diagonal)` | **PASSED** |
| **CP07** | `F0920` | "R C becomes C R" | Main diagonal highlighted in gold; value 8 reflects to (2, 1) | **PASSED** |
| **CP08** | `F1050` | "row is already correct" | Row `c` highlighted with green checkmark `Row matched! ✓` | **PASSED** |
| **CP09** | `F1120` | "fix the column" | Column amber pill `Column is r (Needs: n - 1 - r)` | **PASSED** |
| **CP10** | `F1200` | "reverse every row" | Step 2 revealed: `Reverse Every Row (Horizontal 1D Flip)` | **PASSED** |
| **CP11** | `F1320` | "changes column R into..." | Value 8 horizontally flips to (2, 3) in vibrant green; col matched | **PASSED** |
| **CP12** | `F1500` | "transpose changes R C into C R" | Unified proof chain begins: `(r, c) ──► (c, r)` | **PASSED** |
| **CP13** | `F1700` | "C N minus 1 minus R" | Second link of chain: `──► (c, n - 1 - r)` | **PASSED** |
| **CP14** | `F1850` | "90 degree clockwise rotation" | Gold badge: `≡ DIRECT 90° ROTATION` + Q.E.D. badge | **PASSED** |
| **CP15** | `F2050` | "Step one, transpose... Step two, reverse" | Action Plan 2-step tokens highlighted | **PASSED** |
| **CP16** | `F2240` | "execute these two transformations" | Scene 10 handoff banner: `NEXT: FULL MATRIX 5×5 TRACE ──►` | **PASSED** |
| **CP17** | `F2320` | Hold / Final frames | Clean comprehension hold; zero visual jitter; > 280px caption clearance | **PASSED** |

---

### Invariant Rules Verification
1. **Zero AI-Slop Cards:** Every formula and coordinate element is an individual token (`ChalkToken` / `RoughBox`), not a nested grey container card. (VERIFIED)
2. **Zero Spoilers:** Step 1, Step 2, diagonal highlight, row flip, and the Q.E.D. formula appear strictly when spoken in the audio narration. (VERIFIED)
3. **Zero Collisions:** Matrix sits at X: 90..530, Y: 135..650. Proof sits at X: 580..1820, Y: 130..680. Captions at Y: 960..1010 have > 280px vertical breathing clearance. (VERIFIED)
