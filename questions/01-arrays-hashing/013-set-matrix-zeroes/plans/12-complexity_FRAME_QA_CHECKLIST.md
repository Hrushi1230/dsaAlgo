# Scene 12 — Critical Frame QA Checklist
**Question 013: Set Matrix Zeroes (LeetCode 73)**  
**Scene:** `12-complexity` (Complexity Comparison & Tradeoff Matrix)  
**Total Duration:** 2827 frames @ 30fps (94.240s)  

## Critical Review Frames

| Frame | Anchor | Phase / Concept | Invariant to Verify |
|---|---|---|---|
| **F40** | `S12_COMPARE` | Scaffold Intro | 3-Method Comparative Scoreboard enters on left ($X: 50..820$); header rendered. |
| **F120** | `S12_M1COPY` | Method 1 Copy | Method 1 card highlighted in amber; duplicate matrix footprint shown on right stage. |
| **F220** | `S12_M1SPACE` | Method 1 Space | Space tag lights up red/amber: `O(M · N)` extra space; duplicate grid footprint emphasized. |
| **F340** | `S12_EXACT` | Exact Code Ref | Runtime workbench prepares formula breakdown; code reference pill visible. |
| **F410** | `S12_Z` | Variable $z$ Intro | Parameter card: `$z = count of original zeros$` with bright yellow highlight. |
| **F480** | `S12_SCANONCE` | Scan Matrix Once | Equation begins: `T = (M · N) + ...`; scan cost pill visible. |
| **F560** | `S12_PERZ` | Per-Zero Term | Equation extends: `T = (M · N) + z · (...)`; multiplier factor highlighted. |
| **F650** | `S12_ROWCOL` | Row & Col Sweep | Crosshair sweep diagram; inner cost `(M + N)` added to equation. |
| **F800** | `S12_TIMEFORM` | Parametric Formula | Full equation glowing: `Time = O(M · N + z · (M + N))`; Scoreboard Card 1 updated. |
| **F1020** | `S12_WORSTZ` | Worst Case Condition | Worst-case gauge swings to maximum: `$z = M \cdot N$` (All cells zeros). |
| **F1180** | `S12_M1WORST` | Worst Case Runtime | Alert badge: `Worst Time: O(M · N · (M + N))`; Red warning stamp: Excessive Overwrites. |
| **F1340** | `S12_M2` | Method 2 Intro | Method 1 dims; Method 2 card activates in cyan (`#06B6D4`); panel slides in. |
| **F1450** | `S12_M2PASSES` | Two-Pass Pipeline | Pass 1 (Marker collection) $\to$ Pass 2 (Applying zeros) flow diagram with detached arrays. |
| **F1600** | `S12_M2TIME` | Method 2 Time | Time badge lights cyan: `Time: O(M · N)` ($2MN$ sequential visits). |
| **F1690** | `S12_M2SPACE` | Method 2 Space | Space badge lights cyan: `Space: O(M + N)` (`row[M]` + `col[N]` markers). |
| **F1800** | `S12_OPT` | Optimal Method Intro | Method 2 dims; Method 3 card lights emerald green (`#10B981`) with Gold Crown. |
| **F1890** | `S12_SCANFR` | Pass 1: First Row | Sequential Timeline Step 1: `Scan First Row (Row 0) -> O(N)`. |
| **F1935** | `S12_SCANFC` | Pass 2: First Col | Sequential Timeline Step 2: `Scan First Column (Col 0) -> O(M)`. |
| **F2000** | `S12_DISC` | Pass 3: Interior Mark | Sequential Timeline Step 3: `Interior Marker Discovery -> O(MN)`. |
| **F2080** | `S12_APPLY` | Pass 4: Interior Apply | Sequential Timeline Step 4: `Interior Marker Application -> O(MN)`. |
| **F2160** | `S12_FINALBOUND`| Pass 5: Boundaries | Sequential Timeline Step 5: `Finalize Boundaries -> O(M + N)`. |
| **F2250** | `S12_SEQ` | Sequential Invariant | "SEQUENTIAL PASSES — NEVER NESTED" banner with downward pulse pipeline. |
| **F2360** | `S12_DOM` | Dominant Work Proof | Summation formula showing dominant $2MN$ term; lower-order terms de-emphasized. |
| **F2490** | `S12_OPTTIME` | Method 3 Time Bound | `Time: O(M · N) — OPTIMAL` badge locked into Method 3 Card. |
| **F2640** | `S12_TWOBOOL` | Two Booleans Proof | Auxiliary memory register chip display: `firstRowZero (1 bit)`, `firstColZero (1 bit)`. |
| **F2760** | `S12_O1` | O(1) Space Victory | `Space: O(1) Extra Space — GOLD STANDARD`; Full comparative scoreboard victory reveal. |
| **F2810** | Hold / Outro | Master Tradeoff Matrix | Clean, fully lit comparison matrix with all three methods for viewer retention. |

## QA Sign-Off Checklist
- [ ] No visual collisions: Left Scoreboard ($X: 50..820$) and Right Stage ($X: 860..1870$) keep clean $40\text{px}$ gutter.
- [ ] Bottom clearance: Stages end at $Y: 915$, guaranteeing $\ge 45\text{px}$ buffer above captions at $Y: 960$.
- [ ] No empty voids: Visuals span balanced vertical zone ($Y: 125..915$) with high-density pedagogical diagrams.
- [ ] Remotion frame-derived determinism: 100% pure functions of `useCurrentFrame()`.
- [ ] Audio synchronization verified against `12-complexity.json`.
- [ ] Typography: Minimum font size $\ge 18\text{px}$, bold high-contrast colors, mobile readable.
