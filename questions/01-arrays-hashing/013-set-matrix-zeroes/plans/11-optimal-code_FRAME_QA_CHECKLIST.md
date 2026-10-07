# Scene 11 — Critical Frame QA Checklist
**Question 013: Set Matrix Zeroes (LeetCode 73)**  
**Scene:** `11-optimal-code` (Method 3 Optimal In-Place Python Code)  
**Total Duration:** 3241 frames @ 30fps (108.020s)  

## Critical Review Frames

| Frame | Phase | Description | Invariant to Verify |
|---|---|---|---|
| **F40** | Intro | Clean Editor and Title | Editor scales in at X: 60, Y: 130. Empty cursor at line 2. Header rendered. |
| **F150** | Dimensions | `m = len(matrix)` | Line 2 typed; matrix dimensions M=5 rows shown on right stage. |
| **F230** | Dimensions | `n = len(matrix[0])` | Line 3 typed; matrix dimensions N=5 cols shown on right stage. |
| **F380** | Flags | `firstRowZero = False` | Line 6 typed; firstRowZero card lights slate with False. |
| **F460** | Flags | `firstColZero = False` | Line 7 typed; firstColZero card lights slate with False. |
| **F600** | Rationale | Save Boundary History | Comment line 9 typed; amber halo outlines Row 0 and Col 0. |
| **F690** | Row Loop | `for c in range(n):` | Line 10 typed; gold beam sweeps across Row 0. |
| **F750** | Row Check | `if matrix[0][c] == 0:` | Line 11 typed; beam pauses on zero at cell (0,2). |
| **F810** | Flag 1 | `firstRowZero = True` | Line 12 typed; firstRowZero card flips to True (green). |
| **F870** | Col Loop | `for r in range(m):` | Line 14 typed; vertical gold beam sweeps down Col 0. |
| **F940** | Col Check | `if matrix[r][0] == 0:` | Line 15 typed; beam pauses on zero at cell (2,0). |
| **F990** | Flag 2 | `firstColZero = True` | Line 16 typed; firstColZero card flips to True (green). |
| **F1060** | Protected | Boundary Protected Shield | Dual green shield badge: BOUNDARY HISTORY PROTECTED. |
| **F1150** | Interior Scan | `# 2. Mark interior in boundary` | Comment line 18 typed; inner 4x4 grid highlighted. |
| **F1210** | Loop Start | `for r in range(1, m):` | Line 19 typed; range(1, m) highlighted. |
| **F1260** | Loop Start | `for c in range(1, n):` | Line 20 typed; range(1, n) highlighted. |
| **F1330** | Zero Found | `if matrix[r][c] == 0:` | Line 21 typed; cell (3,3) in matrix pulses gold. |
| **F1420** | Mark Row | `matrix[r][0] = 0` | Line 22 typed; cyan ray from (3,3) to (3,0); cell (3,0) flips to 0. |
| **F1560** | Mark Col | `matrix[0][c] = 0` | Line 23 typed; gold ray from (3,3) to (0,3); cell (0,3) flips to 0. |
| **F1700** | Marker State | Boundary as Markers | Row 0 and Col 0 glowing as in-place marker storage. |
| **F1830** | Apply Pass | `# 3. Apply markers to interior` | Comment line 25 typed; inward arrows appear. |
| **F1900** | Apply Loops | `for r in range(1, m):` & `for c in range(1, n):` | Lines 26-27 typed; interior loops re-engaged. |
| **F2020** | OR Condition | `if matrix[r][0] == 0 or matrix[0][c] == 0:` | Line 28 typed; check rays query row/col markers. |
| **F2160** | Zero Mutation | `matrix[r][c] = 0` | Line 29 typed; interior cells flip to 0. |
| **F2250** | Interior Done | Interior Finalized Badge | Green status badge: INTERIOR FINALIZED. |
| **F2330** | Boundary Wait | Only Boundary Remains | Row 0 and Col 0 highlight pending finalization. |
| **F2390** | Finalize Row | `if firstRowZero:` | Line 31 typed; green beam from firstRowZero card. |
| **F2470** | Zero Row 0 | `matrix[0][c] = 0` | Lines 32-33 typed; Row 0 flips all to 0. |
| **F2540** | Finalize Col | `if firstColZero:` | Line 35 typed; green beam from firstColZero card. |
| **F2610** | Zero Col 0 | `matrix[r][0] = 0` | Lines 36-37 typed; Col 0 flips all to 0. |
| **F2700** | Solved | Complete Optimal Solution | Editor and fully solved matrix glow together. |
| **F2780** | Order Recap | 4 Pipeline Badges | [1. SAVE] [2. MARK] [3. APPLY] [4. FINALIZE] badges appear. |
| **F2820** | Step 1 Recap | Step 1 Highlight | Green bracket around lines 5-16. |
| **F2890** | Step 2 Recap | Step 2 Highlight | Cyan bracket around lines 18-23. |
| **F2950** | Step 3 Recap | Step 3 Highlight | Gold bracket around lines 25-29. |
| **F3010** | Step 4 Recap | Step 4 Highlight | Purple bracket around lines 31-37. |
| **F3100** | Warning | Danger: Order Change | Warning card: ORDER DEPENDENCE CAUTION. |
| **F3200** | Mastery | Markers Destroyed Warning & Outro | Marker loss explanation; O(1) Space Mastery badge. |

## QA Sign-Off Checklist
- [ ] No elements cut through array or matrix borders.
- [ ] Captions at Y: 960 have at least 150px vertical buffer to elements above (stages end at Y: 770).
- [ ] Progressive character-by-character typing matches exact word sync frames.
- [ ] Matrix visualizer cell states reflect exact code line execution.
- [ ] Remotion frame-derived determinism: 100% pure functions of `useCurrentFrame()`.
- [ ] Audio synchronization verified against `11-optimal-code.json`.
