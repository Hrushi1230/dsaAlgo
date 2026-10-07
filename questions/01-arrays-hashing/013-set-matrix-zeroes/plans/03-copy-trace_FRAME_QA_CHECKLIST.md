# Scene 03 · Critical Frame QA Checklist
**Question:** 013 · Set Matrix Zeroes (LeetCode 73)  
**Scene:** `03-copy-trace`  
**Audio:** `audio/013/03-copy-trace.mp3` (111.900s, 3357 frames @ 30fps)  
**Anchor Source:** `sync/03-copy-trace.anchors.json`  

---

## 1. Frame-Specific Visual Checkpoints (22 / 22 PASS)

| Checkpoint ID | Anchor | Exact Review Frame | Spoken Narration Anchor | Expected Visual & Semantic State | Status |
|---|---|---|---|---|---|
| **QA-01** | `S03_SAFE` | **Frame 30** | "safest idea is" | Single pristine master matrix at center stage ($X: 754$); Method 1 header pill active. | `[x] PASS` |
| **QA-02** | `S03_COPY` | **Frame 120** | "untouched copy" | Split complete: Source Copy at Left ($X: 380$), Working Matrix at Right ($X: 1226$). | `[x] PASS` |
| **QA-03** | `S03_TRUTH` | **Frame 250** | "source of truth" | Header above Left matrix illuminated: `SOURCE OF TRUTH (READ ONLY)` in cyan. | `[x] PASS` |
| **QA-04** | `S03_WRITE` | **Frame 450** | "into the working matrix" | Header above Right matrix illuminated: `WORKING MATRIX (MUTABLE)` in gold. | `[x] PASS` |
| **QA-05** | `S03_Z1` | **Frame 600** | "row zero, column two" | Scanner locks onto `(0, 2)` in Source Copy; glows in Sunburst Gold (#FFD166). | `[x] PASS` |
| **QA-06** | `S03_ROW0` | **Frame 850** | "Zero, row zero in the working matrix" | Row 0 of Working Matrix zeroes out in Seafoam Mint (`#3CE5A7`). | `[x] PASS` |
| **QA-07** | `S03_COL2` | **Frame 945** | "then zero, column two" | Col 2 of Working Matrix zeroes out in Seafoam Mint; `(0, 2)` projection complete. | `[x] PASS` |
| **QA-08** | `S03_SOURCE_NOT` | **Frame 1080** | "source copy does not" | Source Copy confirmed 100% untouched; cell `(1, 2)` in Source Copy remains original 8! | `[x] PASS` |
| **QA-09** | `S03_Z2` | **Frame 1250** | "row two, column zero" | Scanner locks onto `(2, 0)` in Source Copy; projection arrow points to Working Matrix. | `[x] PASS` |
| **QA-10** | `S03_ROW2` | **Frame 1350** | "zero, row two" | Row 2 of Working Matrix zeroes out in Seafoam Mint. | `[x] PASS` |
| **QA-11** | `S03_COL0` | **Frame 1420** | "and zero, column zero" | Col 0 of Working Matrix zeroes out in Seafoam Mint; `(2, 0)` effect complete. | `[x] PASS` |
| **QA-12** | `S03_Z3` | **Frame 1640** | "row three, column three" | Scanner locks onto `(3, 3)` in Source Copy; projection arrow points to Working Matrix. | `[x] PASS` |
| **QA-13** | `S03_ROW3` | **Frame 1720** | "Zero, row three" | Row 3 of Working Matrix zeroes out in Seafoam Mint. | `[x] PASS` |
| **QA-14** | `S03_COL3` | **Frame 1770** | "and zero, column three" | Col 3 of Working Matrix zeroes out in Seafoam Mint; all 3 sources executed. | `[x] PASS` |
| **QA-15** | `S03_ALL3` | **Frame 1920** | "all three original zero sources" | Green checkmarks (`✓`) on all three source zeros `(0, 2)`, `(2, 0)`, `(3, 3)` in Source Copy. | `[x] PASS` |
| **QA-16** | `S03_CREATED` | **Frame 2150** | "never used a zero created" | Shielded working zeros; proof that working zero mutations never triggered secondary zeroing. | `[x] PASS` |
| **QA-17** | `S03_NOCHAIN` | **Frame 2450** | "false chain reaction" | Green banner: `✅ ZERO CASCADE PREVENTED: False Chain Reactions Impossible With Immutable Source`. | `[x] PASS` |
| **QA-18** | `S03_R1` | **Frame 2750** | "zero seven zero zero ten" | Row 1 recitation: cells 7 and 10 glowing gold with `PRESERVED!` tags. | `[x] PASS` |
| **QA-19** | `S03_R4` | **Frame 3020** | "twenty-two... twenty-five" | Row 4 recitation: cells 22 and 25 glowing gold with `PRESERVED!` tags. | `[x] PASS` |
| **QA-20** | `S03_WORKS` | **Frame 3120** | "method one works" | Celebratory badge: `⭐ METHOD 1: FULLY CORRECT ALGORITHM`. | `[x] PASS` |
| **QA-21** | `S03_STORE` | **Frame 3250** | "storing the whole matrix again" | Memory cost banner: `📦 AUXILIARY SPACE: O(M × N) — 25 Extra Integers Allocated`. | `[x] PASS` |
| **QA-22** | `S03_CODE` | **Frame 3330** | "write the idea in code" | Handoff card: `➡️ UP NEXT: SCENE 04 — METHOD 1 IMPLEMENTATION & CODE WALKTHROUGH`. | `[x] PASS` |

---

## 2. Invariant & Anti-Regression Verification (ALL PASS)

- [x] **Dual Matrix Geometry:** Source Copy ($X: 380$) and Working Matrix ($X: 1226$) have fixed $314\text{px} \times 314\text{px}$ geometry; zero cell shifting.
- [x] **Source Immutability:** Source Copy never changes values anywhere in the scene; cell `(1, 2)` remains 8 throughout.
- [x] **Working Matrix Accuracy:** Final state matches verified trace: rows 0, 2, 3 and cols 0, 2, 3 all 0; cells (1, 1)=7, (1, 4)=10, (4, 1)=22, (4, 4)=25 preserved.
- [x] **Zero Collision Clearance:** Top header clearance >= 40px; center bridge clearance >= 30px from matrices; bottom banners >= 140px above captions at $Y: 980$.
- [x] **Deterministic Animation:** All motion driven by Remotion `interpolate` and `spring`; zero CSS `@keyframes` or `Math.random()`.
- [x] **Caption Punctuation & Sync:** Audio subtitles consume `sync/03-copy-trace.json` word timestamps cleanly.
- [x] **Duration Exactness:** Exactly 3357 frames rendered @ 30fps.
