# Scene 13 Frame QA Checklist — Full Evolution Recap & Roadmap Handoff
## Question 014: Rotate Image (LeetCode 48) · Pattern 01 — Arrays & Hashing

- **Total Frames:** 2,803 frames @ 30 FPS (93.440s)
- **Audio Source:** `public/audio/014/13-recap.mp3`
- **Sync Source:** `sync/13-recap.json` & `sync/13-all-words.txt`

---

## Critical Frame Verification Checkpoints

| # | Target Frame | Spoken Phrase / Audio Event | Visual State & Invariant Requirements | Result |
|---|---|---|---|:---:|
| 1 | **F25** | `Let's finish.` | Clean chalkboard with top metadata bar (`01 · ARRAYS & HASHING`, `ROTATE IMAGE · FINAL RECAP`). No coordinate formula, methods, or roadmap yet. | **PASSED** |
| 2 | **F150** | `for a 90 degree clockwise rotation` | Prompt box appears: `90° CLOCKWISE ROTATION LAW`. | **PASSED** |
| 3 | **F250** | `a value at row R column C` | Source coordinate tag `(r, c)` appears in cyan `RoughBox`. | **PASSED** |
| 4 | **F380** | `moves to row C column N minus 1 minus R.` | Complete formula `(r, c) ──→ (c, n - 1 - r)` displayed prominently in gold. | **PASSED** |
| 5 | **F520** | `we found three different solutions.` | Coordinate formula docks to top; 3 empty comparative column slots appear. | **PASSED** |
| 6 | **F700** | `Method 1... extra matrix` | Column 1 active: `METHOD 1: Direct Mapping`, formula `aux[c][n-1-r] = matrix[r][c]`, `O(n²) EXTRA SPACE`. | **PASSED** |
| 7 | **F880** | `Method 2... four position cycles` | Column 2 active: `METHOD 2: 4-Way In-Place Cycles`, loop icon, `O(1) IN-PLACE`. | **PASSED** |
| 8 | **F1150** | `Transpose, then reverse every row.` | Column 3 active: `METHOD 3: 2-Stage Decomposition`, `1. Transpose`, `2. Reverse Rows`, `O(1) OPTIMAL`. | **PASSED** |
| 9 | **F1450** | `do not start by memorizing code.` | Central takeaway card: `ENGINEERING INTUITION`, red cross-out over `✗ DO NOT MEMORIZE CODE LOOPS`. | **PASSED** |
| 10 | **F1620** | `where should one coordinate move?` | Step 1 question box: `Step 1: Track a Single Coordinate (r, c) ──→ (r', c')`. | **PASSED** |
| 11 | **F1835** | `a cycle,` | Branch 1 appears: `1. CYCLES` (cyclic swaps). | **PASSED** |
| 12 | **F1865** | `a symmetry,` | Branch 2 appears: `2. SYMMETRIES` (reflections/diagonals). | **PASSED** |
| 13 | **F1920** | `or a sequence of simpler transformations.` | Branch 3 appears: `3. DECOMPOSITION` (compound operations). | **PASSED** |
| 14 | **F2060** | `the code comes from the logic` | Bottom ethos banner: `✓ CODE FOLLOWS GEOMETRIC LOGIC · ZERO GUESSWORK`. | **PASSED** |
| 15 | **F2180** | `Question 14, rotate image` | `MasterRoadmapV2` enters; Row 014 highlighted in gold; status badge: `NOW ACTIVE ●`; counter: `13 / 227`. | **PASSED** |
| 16 | **F2245** | `is complete.` | Row 014 status badge transitions to `COMPLETED ✓` with emerald pulse. Counter strictly remains `13 / 227`. | **PASSED** |
| 17 | **F2380** | `moves from 13 out of 227` | Camera pans up to progress pill; counter displays `13 / 227`. | **PASSED** |
| 18 | **F2490** | `to 14 out of 227.` | Progress counter animates to `14 / 227` (`completedCount: 14`). | **PASSED** |
| 19 | **F2620** | `And next, in arrays and hashing.` | Camera tilts down to curriculum rows; Row 015 spotlight begins. | **PASSED** |
| 20 | **F2700** | `Question 15, spiral matrix.` | Row 015 illuminated with cyan chalk; status badge: `UP NEXT ▶` (Spiral Matrix · LC 54 · Medium). | **PASSED** |
| 21 | **F2790** | `That is up next.` | Grand curriculum stillness: 14/227 completed, Q14 Complete, Q15 Up Next. | **PASSED** |

---

## Zero-Void & Zero-Collision Invariants

- [x] **Canvas distribution:** Content occupies Y: 130..700 during Act 1 and Act 2 with balanced spacing.
- [x] **Captions clearance:** Captions at Y: 960..1010; minimum 215px to 280px vertical clearance above captions.
- [x] **Kit component exclusivity:** 100% `@dsa/kit` components (`RoughBox`, `ChalkText`, `RoughLine`, `MasterRoadmapV2`, `Captions`).
- [x] **No early reveals / zero spoilers:** Badges, formulas, methods, and counter updates appear strictly when spoken in audio.
- [x] **Remotion determinism:** All animations driven by `useCurrentFrame()`; zero `Math.random()`, zero CSS transitions.
