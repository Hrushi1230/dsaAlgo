# Scene 13 — Frame QA Checklist & Visual Verification Matrix
**Question 013: Set Matrix Zeroes (LeetCode 73)**  
**Scene Name:** `13-recap`  
**Total Frames:** 2760 frames @ 30 FPS (92.000s)  

---

## 1. Verification Frame Checkpoints

| Frame | Anchor ID | Phase / Content | Visual Expectation |
|---|---|---|---|
| **F40** | `S13_RECAP` | Phase 0: Intro | Clean progression scaffold with 3 method cards visible. No clutter. |
| **F180** | `S13_COPY` | Phase 1: Method 1 | Dual matrix view (Working Matrix + Immutable Clone). Clean labels. |
| **F300** | `S13_NOCORRUPT` | Phase 1: Shield | Green shield badge and data flow arrow from Clone to Working. |
| **F400** | `S13_EXPENSIVE` | Phase 1: Cost | Amber/Red memory warning banner: O(MN) auxiliary space. |
| **F580** | `S13_WHAT` | Phase 2: Question | "What information must survive?" large inquiry card. |
| **F720** | `S13_CONTAIN` | Phase 2: Projections | Original zero triggering 1D row & column projection laser lines. |
| **F860** | `S13_ROWZERO` | Phase 2: Vectors | `rowZero` and `colZero` vector array boxes with clean indices. |
| **F1000** | `S13_M2SPACE` | Phase 2: Space | $O(M+N)$ space metric card with savings meter. |
| **F1200** | `S13_MCELLROW` | Phase 3: Matrix Col 0 | Column 0 highlighted with cyan bracket showing M cells. |
| **F1380** | `S13_MCELLCOL` | Phase 3: Matrix Row 0 | Row 0 highlighted with mint bracket showing N cells. |
| **F1500** | `S13_REUSE` | Phase 3: Perimeter | L-shaped boundary perimeter highlighted as embedded memory. |
| **F1650** | `S13_DESTROY` | Phase 3: Collision Risk | Cell (0,0) pulsing with warning halo; overwrite risk card. |
| **F1820** | `S13_FR` / `FC` | Phase 3: 2 Booleans | `firstRowZero` and `firstColZero` boolean register chips active. |
| **F1900** | `S13_MEMORY` | Phase 3: Memory Aura | Matrix enveloped in warm golden aura; self-contained memory proven. |
| **F2080** | `S13_TIME_SPACE` | Phase 4: Final Complexity | $O(MN)$ Time and $O(1)$ Extra Space gold/green hero badges. |
| **F2200** | `S13_COMPLETE` | Phase 4: Solved Stamp | Green "QUESTION 013: SOLVED & VERIFIED ✓" celebratory stamp. |
| **F2270** | `S13_Q13DONE` | Phase 5: Master Roadmap | Full Master Roadmap UI; Row 013 gets green checkmark ✓; ChalkDust burst. |
| **F2400** | `S13_GLOBALPROGRESS`| Phase 5: Counter 13/227 | Global progress counter rolls to 13/227 COMPLETED. |
| **F2600** | `S13_Q14` | Phase 5: Q14 Spotlight | Row 014 highlighted with gold spotlight; status changes to UP NEXT ▶. |
| **F2720** | `S13_ROTATE` | Phase 5: Rotate Image | Full Row 014 metadata: "Rotate Image · LC 48 · Medium" locked in place. |

---

## 2. Invariant Rules Checklist

- [ ] **No Raw LaTeX Strings:** All math symbols use pure Unicode (`→`, `⇒`, `×`, `·`, `+`, `(M + N)`, `O(1)`).
- [ ] **Zero Canvas Collisions:** Stages span $Y: 125..895$, strictly preserving $>65\text{px}$ breathing room above bottom captions at $Y: 960$.
- [ ] **No Empty Green Voids:** Stages use vertical expansion and balanced flex distribution (`justifyContent: "space-between"`).
- [ ] **Deterministic Animation:** Zero CSS `@keyframes`, zero `Math.random()`, 100% `useCurrentFrame()` and Remotion `interpolate()`.
- [ ] **Mobile-First Large Typography:** Font sizes $\ge 18\text{px}$ for labels, $\ge 24\text{px}$ for headers, $\ge 32\text{px}$ for hero metrics.
