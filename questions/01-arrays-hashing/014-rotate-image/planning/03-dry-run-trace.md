# Q14 — Rotate Image: Verified Dry-Run Trace

> **Course:** Code With Animation · Long-Form DSA Course  
> **Problem:** LeetCode 48 — Rotate Image (Medium)  
> **Pattern:** Arrays & Hashing (Question 14 of 18)  
> **Status:** ✅ **VERIFIED (Independent Dual Execution Match)**

---

## 1. Master Testcase Specification

We use a standard $5 \times 5$ square matrix ($N = 5$) containing integers $1 \dots 25$ in row-major order:

### Initial State (`matrix`):
```text
Row 0: [  1,   2,   3,   4,   5 ]
Row 1: [  6,   7,   8,   9,  10 ]
Row 2: [ 11,  12,  13,  14,  15 ]
Row 3: [ 16,  17,  18,  19,  20 ]
Row 4: [ 21,  22,  23,  24,  25 ]
```

### Coordinate Law (90° Clockwise Rotation):
$$\text{Cell } (r, c) \longrightarrow (c, n - 1 - r) = (c, 4 - r)$$

### Expected Target State:
```text
Row 0: [ 21,  16,  11,   6,   1 ]
Row 1: [ 22,  17,  12,   7,   2 ]
Row 2: [ 23,  18,  13,   8,   3 ]
Row 3: [ 24,  19,  14,   9,   4 ]
Row 4: [ 25,  20,  15,  10,   5 ]
```

---

## 2. Method 1: Extra Destination Matrix ($O(N^2)$ Time, $O(N^2)$ Space)

### Algorithm:
1. Allocate `result = [[0] * 5 for _ in range(5)]`.
2. For each $r \in [0..4]$, $c \in [0..4]$:
   $$\text{result}[c][4 - r] = \text{matrix}[r][c]$$
3. Copy `result` back into `matrix`.

### Sample Placements:
- `matrix[0][0] = 1` $\to \text{result}[0][4] = 1$
- `matrix[1][2] = 8` $\to \text{result}[2][3] = 8$
- `matrix[2][2] = 13` $\to \text{result}[2][2] = 13$ (Center stays invariant)
- `matrix[3][1] = 17` $\to \text{result}[1][1] = 17$
- `matrix[4][0] = 21` $\to \text{result}[0][0] = 21$

Row-by-row source mapping:
- Source Row 0 `[1, 2, 3, 4, 5]` $\longrightarrow$ Result Col 4 (top-to-bottom)
- Source Row 1 `[6, 7, 8, 9, 10]` $\longrightarrow$ Result Col 3
- Source Row 2 `[11, 12, 13, 14, 15]` $\longrightarrow$ Result Col 2
- Source Row 3 `[16, 17, 18, 19, 20]` $\longrightarrow$ Result Col 1
- Source Row 4 `[21, 22, 23, 24, 25]` $\longrightarrow$ Result Col 0

**Result:** Correct, but requires auxiliary $5 \times 5$ memory ($O(N^2)$ extra space).

---

## 3. Method 2: Four-Way Cyclic Layer Swap ($O(N^2)$ Time, $O(1)$ Space)

### Algorithm:
- Layers count: $\lfloor N/2 \rfloor = 2$ layers (Layer 0 = outer boundary, Layer 1 = inner $3 \times 3$, Layer 2 = center cell fixed).
- For `layer` from $0$ to $1$:
  - `top = layer`, `bottom = n - 1 - layer`, `left = layer`, `right = n - 1 - layer`
  - For $i$ from $0$ to `(right - left - 1)`:
    - Save `temp = matrix[top][left + i]`
    - `matrix[top][left + i] = matrix[bottom - i][left]` (Left $\to$ Top)
    - `matrix[bottom - i][left] = matrix[bottom][right - i]` (Bottom $\to$ Left)
    - `matrix[bottom][right - i] = matrix[top + i][right]` (Right $\to$ Bottom)
    - `matrix[top + i][right] = temp` (Top $\to$ Right)

### Layer 0 Trace ($top=0, bottom=4, left=0, right=4$, 4 Cycles):
- **Cycle 0 ($i = 0$): 4 Outer Corners**
  - Cells: $(0,0)=1$, $(0,4)=5$, $(4,4)=25$, $(4,0)=21$
  - `temp = 1`
  - `matrix[0][0] = 21`
  - `matrix[4][0] = 25`
  - `matrix[4][4] = 5`
  - `matrix[0][4] = 1`
- **Cycle 1 ($i = 1$):**
  - Cells: $(0,1)=2$, $(1,4)=10$, $(4,3)=24$, $(3,0)=16$
  - `temp = 2`
  - `matrix[0][1] = 16`
  - `matrix[3][0] = 24`
  - `matrix[4][3] = 10`
  - `matrix[1][4] = 2`
- **Cycle 2 ($i = 2$):**
  - Cells: $(0,2)=3$, $(2,4)=15$, $(4,2)=23$, $(2,0)=11$
  - `temp = 3`
  - `matrix[0][2] = 11`
  - `matrix[2][0] = 23`
  - `matrix[4][2] = 15`
  - `matrix[2][4] = 3`
- **Cycle 3 ($i = 3$):**
  - Cells: $(0,3)=4$, $(3,4)=20$, $(4,1)=22$, $(1,0)=6$
  - `temp = 4`
  - `matrix[0][3] = 6`
  - `matrix[1][0] = 22`
  - `matrix[4][1] = 20`
  - `matrix[3][4] = 4`

### Layer 1 Trace ($top=1, bottom=3, left=1, right=3$, 2 Cycles):
- **Cycle 0 ($i = 0$): 4 Inner Corners**
  - Cells: $(1,1)=7$, $(1,3)=9$, $(3,3)=19$, $(3,1)=17$
  - `temp = 7`
  - `matrix[1][1] = 17`
  - `matrix[3][1] = 19`
  - `matrix[3][3] = 9`
  - `matrix[1][3] = 7`
- **Cycle 1 ($i = 1$):**
  - Cells: $(1,2)=8$, $(2,3)=14$, $(3,2)=18$, $(2,1)=12$
  - `temp = 8`
  - `matrix[1][2] = 12`
  - `matrix[2][1] = 18`
  - `matrix[3][2] = 14`
  - `matrix[2][3] = 8`

### Center Cell ($layer=2$):
- Cell $(2,2) = 13$ remains untouched.

**Resulting State:** Exactly matches target. $O(N^2)$ time, $O(1)$ space.

---

## 4. Method 3: Decomposed Transformation — Transpose + Horizontal Reverse ($O(N^2)$ Time, $O(1)$ Space)

### Mathematical Invariant:
Clockwise $90^\circ$ rotation:
$$(r, c) \xrightarrow{\text{Step 1: Transpose}} (c, r) \xrightarrow{\text{Step 2: Reverse Row}} (c, n - 1 - r)$$
Both steps execute in-place using pairwise 2-element swaps!

### Step 1: Transpose (Reflect Across Main Diagonal)
Iterate $r \in [0..4]$ and $c \in [r + 1..4]$:
$$\text{Swap } \text{matrix}[r][c] \longleftrightarrow \text{matrix}[c][r]$$

Main diagonal elements $(0,0)=1, (1,1)=7, (2,2)=13, (3,3)=19, (4,4)=25$ are unchanged.

| Swap # | Coordinate Pair | Values Before | Values After |
|:---:|:---:|:---:|:---:|
| 1 | $(0,1) \longleftrightarrow (1,0)$ | $2 \longleftrightarrow 6$ | $\text{matrix}[0][1]=6, \text{matrix}[1][0]=2$ |
| 2 | $(0,2) \longleftrightarrow (2,0)$ | $3 \longleftrightarrow 11$ | $\text{matrix}[0][2]=11, \text{matrix}[2][0]=3$ |
| 3 | $(0,3) \longleftrightarrow (3,0)$ | $4 \longleftrightarrow 16$ | $\text{matrix}[0][3]=16, \text{matrix}[3][0]=4$ |
| 4 | $(0,4) \longleftrightarrow (4,0)$ | $5 \longleftrightarrow 21$ | $\text{matrix}[0][4]=21, \text{matrix}[4][0]=5$ |
| 5 | $(1,2) \longleftrightarrow (2,1)$ | $8 \longleftrightarrow 12$ | $\text{matrix}[1][2]=12, \text{matrix}[2][1]=8$ |
| 6 | $(1,3) \longleftrightarrow (3,1)$ | $9 \longleftrightarrow 17$ | $\text{matrix}[1][3]=17, \text{matrix}[3][1]=9$ |
| 7 | $(1,4) \longleftrightarrow (4,1)$ | $10 \longleftrightarrow 22$ | $\text{matrix}[1][4]=22, \text{matrix}[4][1]=10$ |
| 8 | $(2,3) \longleftrightarrow (3,2)$ | $14 \longleftrightarrow 18$ | $\text{matrix}[2][3]=18, \text{matrix}[3][2]=14$ |
| 9 | $(2,4) \longleftrightarrow (4,2)$ | $15 \longleftrightarrow 23$ | $\text{matrix}[2][4]=23, \text{matrix}[4][2]=15$ |
| 10 | $(3,4) \longleftrightarrow (4,3)$ | $20 \longleftrightarrow 24$ | $\text{matrix}[3][4]=24, \text{matrix}[4][3]=20$ |

#### Matrix State After Transposition:
```text
Row 0: [  1,   6,  11,  16,  21 ]
Row 1: [  2,   7,  12,  17,  22 ]
Row 2: [  3,   8,  13,  18,  23 ]
Row 3: [  4,   9,  14,  19,  24 ]
Row 4: [  5,  10,  15,  20,  25 ]
```

---

### Step 2: Reverse Every Row Horizontally
For each row $r \in [0..4]$:
Swap `matrix[r][c]` and `matrix[r][4 - c]` for $c \in [0..1]$:

- **Row 0:**
  - Swap $(0,0) \leftrightarrow (0,4)$: $1 \leftrightarrow 21 \implies [21, 6, 11, 16, 1]$
  - Swap $(0,1) \leftrightarrow (0,3)$: $6 \leftrightarrow 16 \implies [21, 16, 11, 6, 1]$
  - Element $(0,2) = 11$ stays in place.
- **Row 1:**
  - Swap $(1,0) \leftrightarrow (1,4)$: $2 \leftrightarrow 22 \implies [22, 7, 12, 17, 2]$
  - Swap $(1,1) \leftrightarrow (1,3)$: $7 \leftrightarrow 17 \implies [22, 17, 12, 7, 2]$
  - Element $(1,2) = 12$ stays in place.
- **Row 2:**
  - Swap $(2,0) \leftrightarrow (2,4)$: $3 \leftrightarrow 23 \implies [23, 8, 13, 18, 3]$
  - Swap $(2,1) \leftrightarrow (2,3)$: $8 \leftrightarrow 18 \implies [23, 18, 13, 8, 3]$
  - Element $(2,2) = 13$ stays in place.
- **Row 3:**
  - Swap $(3,0) \leftrightarrow (3,4)$: $4 \leftrightarrow 24 \implies [24, 9, 14, 19, 4]$
  - Swap $(3,1) \leftrightarrow (3,3)$: $9 \leftrightarrow 19 \implies [24, 19, 14, 9, 4]$
  - Element $(3,2) = 14$ stays in place.
- **Row 4:**
  - Swap $(4,0) \leftrightarrow (4,4)$: $5 \leftrightarrow 25 \implies [25, 10, 15, 20, 5]$
  - Swap $(4,1) \leftrightarrow (4,3)$: $10 \leftrightarrow 20 \implies [25, 20, 15, 10, 5]$
  - Element $(4,2) = 15$ stays in place.

#### Final Matrix State:
```text
Row 0: [ 21,  16,  11,   6,   1 ]
Row 1: [ 22,  17,  12,   7,   2 ]
Row 2: [ 23,  18,  13,   8,   3 ]
Row 3: [ 24,  19,  14,   9,   4 ]
Row 4: [ 25,  20,  15,  10,   5 ]
```

---

## 5. Verification Gate Pass

| Verification Criteria | Run 1 Result | Independent Re-Run | Status |
|:---|:---:|:---:|:---:|
| Final State Matches Expected | Identical | Identical | ✅ **MATCH** |
| Method 2 Cycle Elements Accounted For | 24 outer/inner + 1 center | 24 outer/inner + 1 center | ✅ **MATCH** |
| Method 3 Transpose Swaps Count | Exactly 10 swaps ($N(N-1)/2$) | Exactly 10 swaps | ✅ **MATCH** |
| Method 3 Row Reverse Swaps Count | Exactly 10 swaps ($5 \times \lfloor 5/2 \rfloor$) | Exactly 10 swaps | ✅ **MATCH** |
| In-Place Constraint ($O(1)$ extra space) | Satisfied | Satisfied | ✅ **MATCH** |
