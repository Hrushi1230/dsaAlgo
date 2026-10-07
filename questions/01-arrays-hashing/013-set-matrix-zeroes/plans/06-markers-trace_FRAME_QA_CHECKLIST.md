# Scene 06 — Method 2 Trace (Row & Column Marker Arrays): Critical Frame QA Checklist
**Question 013: Set Matrix Zeroes (LeetCode 73)**  
**Pattern 01: Arrays & Hashing**  
**Scene Name:** `06-markers-trace`  
**Total Duration:** 3581 frames @ 30fps (119.380s)  
**Total Critical Checkpoints:** 30 frames  

---

## Verification Frame Manifest

| Checkpoint | Frame | Timestamp | Visual Element & Invariant Checked | Status |
|:---|:---|:---|:---|:---|
| **CP01** | `F40` | 1.33s | Empty `rowZero` & `colZero` tracks dock around matrix; title banner visible | `[x] PASS` |
| **CP02** | `F110` | 3.67s | `rowZero` vertical track highlights: "One boolean for each of M rows" | `[x] PASS` |
| **CP03** | `F200` | 6.67s | `colZero` horizontal track highlights: "One boolean for each of N columns" | `[x] PASS` |
| **CP04** | `F290` | 9.67s | All 10 slots populated with initial `F` baseline | `[x] PASS` |
| **CP05** | `F350` | 11.67s | Matrix illuminates; Pass 1 Discovery scan begins | `[x] PASS` |
| **CP06** | `F440` | 14.67s | Original zero at `(0, 2)` beacon pulses with golden halo | `[x] PASS` |
| **CP07** | `F535` | 17.83s | Left ray from `(0, 2)` marks `rowZero[0] = True` | `[x] PASS` |
| **CP08** | `F610` | 20.33s | Upward ray from `(0, 2)` marks `colZero[2] = True` | `[x] PASS` |
| **CP09** | `F700` | 23.33s | Next original zero at `(2, 0)` beacon pulses | `[x] PASS` |
| **CP10** | `F798` | 26.60s | Left ray from `(2, 0)` marks `rowZero[2] = True` | `[x] PASS` |
| **CP11** | `F854` | 28.47s | Upward ray from `(2, 0)` marks `colZero[0] = True` | `[x] PASS` |
| **CP12** | `F945` | 31.50s | Interior zero at `(3, 3)` beacon pulses | `[x] PASS` |
| **CP13** | `F1050` | 35.00s | Left ray from `(3, 3)` marks `rowZero[3] = True` | `[x] PASS` |
| **CP14** | `F1108` | 36.93s | Upward ray from `(3, 3)` marks `colZero[3] = True` | `[x] PASS` |
| **CP15** | `F1155` | 38.50s | Pass 1 Discovery finished celebration checkmark | `[x] PASS` |
| **CP16** | `F1260` | 42.00s | `rowZero` rhythm pulse sequence: `[T, F, T, T, F]` | `[x] PASS` |
| **CP17** | `F1420` | 47.33s | `colZero` rhythm pulse sequence: `[T, F, T, T, F]` | `[x] PASS` |
| **CP18** | `F1560` | 52.00s | Pass 2 Application begins; inward flow guide arrows appear | `[x] PASS` |
| **CP19** | `F1715` | 57.17s | Row 1 inspected: `rowZero[1] == False` $\to$ not completely zeroed | `[x] PASS` |
| **CP20** | `F1878` | 62.60s | Cell `(1, 0)`: `colZero[0] == True` $\to$ `6 -> 0` | `[x] PASS` |
| **CP21** | `F1990` | 66.33s | Cell `(1, 1)`: `colZero[1] == False` $\to$ `7` survives (green glow) | `[x] PASS` |
| **CP22** | `F2105` | 70.17s | Cell `(1, 2)`: `colZero[2] == True` $\to$ `8 -> 0` | `[x] PASS` |
| **CP23** | `F2220` | 74.00s | Cell `(1, 3)`: `colZero[3] == True` $\to$ `9 -> 0` | `[x] PASS` |
| **CP24** | `F2320` | 77.33s | Cell `(1, 4)`: `colZero[4] == False` $\to$ `10` survives | `[x] PASS` |
| **CP25** | `F2490` | 83.00s | Row 2: `rowZero[2] == True` $\to$ entire row sweeps to all zeroes | `[x] PASS` |
| **CP26** | `F2700` | 90.00s | Row 3: `rowZero[3] == True` $\to$ entire row sweeps to all zeroes | `[x] PASS` |
| **CP27** | `F2850` | 95.00s | Row 4: `rowZero[4] == False` $\to$ selective column changes | `[x] PASS` |
| **CP28** | `F3090` | 103.00s | Row 4 completed: 22 & 25 survive, 23 & 24 zeroed | `[x] PASS` |
| **CP29** | `F3220` | 107.33s | Master matrix validated against ground truth with golden frame | `[x] PASS` |
| **CP30** | `F3540` | 118.00s | Scene 07 Code Handoff banner on center stage | `[x] PASS` |

---

## Layout & Zero-Collision Invariants

- [x] Canvas 1920x1080.
- [x] Matrix ($X: 220, Y: 220$) + marker arrays stay within left stage ($X: 136..572$).
- [x] Pedagogical control panel stays within right stage ($X: 640..1840$, $Y: 150..780$).
- [x] Bottom clearance: panels stop at $Y: 780$, maintaining $\ge 200\text{px}$ buffer above captions ($Y: 980$).
- [x] Header at $Y: 42..108$ has ample breathing room above arrays.
- [x] Mobile-first readability: Matrix cells $64\text{px}$, numbers $26\text{px}-32\text{px}$ bold, cards $22\text{px}-32\text{px}$.
- [x] Zero text clipping, zero CSS transitions/animations, 100% Remotion frame determinism.
