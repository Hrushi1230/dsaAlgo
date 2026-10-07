# Q15 — Spiral Matrix: Verified Dual Dry-Run Trace

> **Course:** Code With Animation · Long-Form DSA Course  
> **Problem:** LeetCode 54 — Spiral Matrix (Medium)  
> **Pattern:** Arrays & Hashing (Question 15 of 227)  
> **Status:** ✅ **VERIFIED (Independent Dual Execution Match)**

---

## 1. Master Testcase Specification

We use a rectangular $5 \times 6$ matrix ($M = 5$ rows, $N = 6$ columns) with sequential integers $1 \dots 30$:

### Initial State (`matrix`):
```text
Row 0: [  1,   2,   3,   4,   5,   6 ]
Row 1: [  7,   8,   9,  10,  11,  12 ]
Row 2: [ 13,  14,  15,  16,  17,  18 ]
Row 3: [ 19,  20,  21,  22,  23,  24 ]
Row 4: [ 25,  26,  27,  28,  29,  30 ]
```

### Dimensions:
- $m = 5$
- $n = 6$
- Total cells $= m \times n = 30$

### Expected Spiral Output:
```python
[
    1, 2, 3, 4, 5, 6,
    12, 18, 24, 30,
    29, 28, 27, 26, 25,
    19, 13, 7,
    8, 9, 10, 11,
    17, 23,
    22, 21, 20,
    14,
    15, 16
]
```

---

## 2. Method 1: Direction Simulation + Visited Matrix ($O(M \times N)$ Time, $O(M \times N)$ Space)

### Algorithm State:
- `directions = [(0, 1), (1, 0), (0, -1), (-1, 0)]` (Right=0, Down=1, Left=2, Up=3)
- `visited = [[False] * 6 for _ in range(5)]`
- `r = 0, c = 0, direction = 0`
- `answer = []`

### Execution Trace:
- **Top Row Sweep (Right)**:
  - $(0,0)=1 \to (0,1)=2 \to (0,2)=3 \to (0,3)=4 \to (0,4)=5 \to (0,5)=6$
  - Next candidate: $(0, 6) \implies nc \ge n$ (Out of bounds).
  - **Turn 1**: `direction = (0 + 1) % 4 = 1` (Down).
- **Right Column Sweep (Down)**:
  - $(1,5)=12 \to (2,5)=18 \to (3,5)=24 \to (4,5)=30$
  - Next candidate: $(5, 5) \implies nr \ge m$ (Out of bounds).
  - **Turn 2**: `direction = (1 + 1) % 4 = 2` (Left).
- **Bottom Row Sweep (Left)**:
  - $(4,4)=29 \to (4,3)=28 \to (4,2)=27 \to (4,1)=26 \to (4,0)=25$
  - Next candidate: $(4, -1) \implies nc < 0$ (Out of bounds).
  - **Turn 3**: `direction = (2 + 1) % 4 = 3` (Up).
- **Left Column Sweep (Up)**:
  - $(3,0)=19 \to (2,0)=13 \to (1,0)=7$
  - Next candidate: $(0, 0) \implies \text{visited}[0][0] == \text{True}$.
  - **Turn 4**: `direction = (3 + 1) % 4 = 0` (Right). Enters inner loop!
- **Inner Top Sweep (Right)**:
  - $(1,1)=8 \to (1,2)=9 \to (1,3)=10 \to (1,4)=11$
  - Next candidate: $(1, 5) \implies \text{visited}[1][5] == \text{True}$.
  - **Turn 5**: `direction = 1` (Down).
- **Inner Right Sweep (Down)**:
  - $(2,4)=17 \to (3,4)=23$
  - Next candidate: $(4, 4) \implies \text{visited}[4][4] == \text{True}$.
  - **Turn 6**: `direction = 2` (Left).
- **Inner Bottom Sweep (Left)**:
  - $(3,3)=22 \to (3,2)=21 \to (3,1)=20$
  - Next candidate: $(3, 0) \implies \text{visited}[3][0] == \text{True}$.
  - **Turn 7**: `direction = 3` (Up).
- **Inner Left Sweep (Up)**:
  - $(2,1)=14$
  - Next candidate: $(1, 1) \implies \text{visited}[1][1] == \text{True}$.
  - **Turn 8**: `direction = 0` (Right).
- **Innermost Sweep (Right)**:
  - $(2,2)=15 \to (2,3)=16$
  - `len(answer) == 30 == m * n` $\implies$ Break and terminate!

---

## 3. Method 2: Four Shrinking Boundaries ($O(M \times N)$ Time, $O(1)$ Space)

### Boundary Invariant:
- Active submatrix defined by $[top, bottom] \times [left, right]$.
- Initial: $top = 0, bottom = 4, left = 0, right = 5$.

### Iteration 1 (Outer Perimeter):
1. **Top Edge**:
   - `for c in range(0, 6)`: append $1, 2, 3, 4, 5, 6$.
   - Mutation: `top += 1` $\implies top = 1$.
   - Check: `top <= bottom` ($1 \le 4$) $\implies$ Continue.
2. **Right Edge**:
   - `for r in range(1, 5)`: append $12, 18, 24, 30$.
   - Mutation: `right -= 1` $\implies right = 4$.
   - Check: `left <= right` ($0 \le 4$) $\implies$ Continue.
3. **Bottom Edge**:
   - `for c in range(4, -1, -1)`: append $29, 28, 27, 26, 25$.
   - Mutation: `bottom -= 1` $\implies bottom = 3$.
   - Check: `top <= bottom` ($1 \le 3$) $\implies$ Continue.
4. **Left Edge**:
   - `for r in range(3, 0, -1)`: append $19, 13, 7$.
   - Mutation: `left += 1` $\implies left = 1$.
- **Boundary State after Round 1**:
  - `top = 1, bottom = 3, left = 1, right = 4`
  - Active dimensions: $3 \times 4$ submatrix (values $8 \dots 11, 14 \dots 17, 20 \dots 23$).

### Iteration 2 (Second Perimeter):
1. **Top Edge**:
   - `for c in range(1, 5)`: append $8, 9, 10, 11$.
   - Mutation: `top += 1` $\implies top = 2$.
   - Check: `top <= bottom` ($2 \le 3$) $\implies$ Continue.
2. **Right Edge**:
   - `for r in range(2, 4)`: append $17, 23$.
   - Mutation: `right -= 1` $\implies right = 3$.
   - Check: `left <= right` ($1 \le 3$) $\implies$ Continue.
3. **Bottom Edge**:
   - `for c in range(3, 0, -1)`: append $22, 21, 20$.
   - Mutation: `bottom -= 1` $\implies bottom = 2$.
   - Check: `top <= bottom` ($2 \le 2$) $\implies$ Continue.
4. **Left Edge**:
   - `for r in range(2, 1, -1)`: append $14$.
   - Mutation: `left += 1` $\implies left = 2$.
- **Boundary State after Round 2**:
  - `top = 2, bottom = 2, left = 2, right = 3`
  - Active dimensions: $1 \times 2$ single-row submatrix (values $15, 16$).

### Iteration 3 (Final Row):
1. **Top Edge**:
   - `for c in range(2, 4)`: append $15, 16$.
   - Mutation: `top += 1` $\implies top = 3$.
   - Check: `top > bottom` ($3 > 2$) $\implies$ **BREAK!**
- Traversal terminates immediately. No invalid bottom or left traversals occur!

---

## 4. Edge Cases Independent Verification

| Edge Case | Dimensions | Input Matrix | Output | Verified |
|:---|:---:|:---|:---|:---:|
| Single Row | $1 \times 4$ | `[[1, 2, 3, 4]]` | `[1, 2, 3, 4]` | ✅ MATCH |
| Single Col | $4 \times 1$ | `[[1], [2], [3], [4]]` | `[1, 2, 3, 4]` | ✅ MATCH |
| Single Cell | $1 \times 1$ | `[[42]]` | `[42]` | ✅ MATCH |
| Rectangular 3x4 | $3 \times 4$ | `[[1..4], [5..8], [9..12]]` | `[1,2,3,4,8,12,11,10,9,5,6,7]` | ✅ MATCH |
| Square 3x3 | $3 \times 3$ | `[[1..3], [4..6], [7..9]]` | `[1,2,3,6,9,8,7,4,5]` | ✅ MATCH |

---

## 5. Verification Footer

```text
VERIFIED: YES
IMPLEMENTATION/ALGORITHM VERSION: Method 1 (Simulation + Visited) & Method 2 (4 Shrinking Boundaries)
MASTER TESTCASE: 5x6 Matrix (Values 1 to 30)
FINAL OUTPUT: [1, 2, 3, 4, 5, 6, 12, 18, 24, 30, 29, 28, 27, 26, 25, 19, 13, 7, 8, 9, 10, 11, 17, 23, 22, 21, 20, 14, 15, 16]
RECHECK RESULT: MATCH (Dual Python + Manual Recheck)
```
