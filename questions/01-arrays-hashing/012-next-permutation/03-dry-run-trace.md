# Master Dry Run Trace — Q12: Next Permutation (LeetCode 31)

## 1. Problem Specification
- **Course Question**: #012 — Next Permutation
- **LeetCode**: LC 31 (Medium)
- **Master Testcase**: `nums = [2, 1, 5, 4, 4, 3, 0]`
- **Length $n$**: `7`
- **Expected Output**: `[2, 3, 0, 1, 4, 4, 5]`
- **Requirement**: Must be performed in-place with $O(1)$ extra memory.

---

## 2. Approach 1: Brute Force Permutation Enumeration
1. Generate all unique permutations of `nums`.
2. Sort them in ascending lexicographical order.
3. Locate the current configuration in the sorted list.
4. Pick the configuration at `(current_index + 1) % total_permutations`.
5. Overwrite `nums` with that permutation in-place.

### Demonstration on `[1, 2, 3]` (6 permutations):
1. `[1, 2, 3]`
2. `[1, 3, 2]`  <-- Current
3. `[2, 1, 3]`  <-- Immediate Next
4. `[2, 3, 1]`
5. `[3, 1, 2]`
6. `[3, 2, 1]` (Wrap-around next -> `[1, 2, 3]`)

### Complexity & Limitation:
- **Time Complexity**: $O(N! \cdot N \log(N!))$ or $O(N! \cdot N)$
- **Space Complexity**: $O(N! \cdot N)$ to store permutations
- **Verdict**: Impractical for $N \ge 10$; violates $O(1)$ extra space constraint.

---

## 3. Approach 2: Optimal Right-to-Left Pivot & Reverse ($O(N)$ Time, $O(1)$ Space)

### Algorithm Steps:
1. **Find Pivot ($i$)**: Scan from $n - 2$ down to $0$. Find the first index $i$ where $nums[i] < nums[i+1]$.
   - If no such $i$ exists ($i = -1$), the whole array is non-increasing (largest possible permutation). Jump directly to Step 4 to reverse the entire array.
2. **Find Successor ($j$)**: Scan from $n - 1$ down to $i + 1$. Find the first index $j$ where $nums[j] > nums[i]$.
3. **Swap**: Swap $nums[i]$ with $nums[j]$.
4. **Reverse Suffix**: Reverse the subarray from index $i + 1$ to $n - 1$ in-place using two pointers (`left` and `right`).

---

## 4. Master Execution Trace on `[2, 1, 5, 4, 4, 3, 0]`

### Initial State:
- Indices: `0: 2 | 1: 1 | 2: 5 | 3: 4 | 4: 4 | 5: 3 | 6: 0`
- $n = 7$

---

### Step 1: Pivot Search ($i$)
Scan leftwards starting from $i = n - 2 = 5$:

| $i$ | $nums[i]$ | $nums[i+1]$ | Condition $nums[i] < nums[i+1]$ | Action |
| :---: | :---: | :---: | :---: | :--- |
| **5** | $nums[5] = 3$ | $nums[6] = 0$ | $3 < 0$ (False, $3 \ge 0$) | Decrement $i$ to 4 |
| **4** | $nums[4] = 4$ | $nums[5] = 3$ | $4 < 3$ (False, $4 \ge 3$) | Decrement $i$ to 3 |
| **3** | $nums[3] = 4$ | $nums[4] = 4$ | $4 < 4$ (False, $4 \ge 4$) | Strict check fails on duplicates! Decrement $i$ to 2 |
| **2** | $nums[2] = 5$ | $nums[3] = 4$ | $5 < 4$ (False, $5 \ge 4$) | Decrement $i$ to 1 |
| **1** | $nums[1] = 1$ | $nums[2] = 5$ | $1 < 5$ (**True**) | **Pivot Locked!** Pivot index $i = 1$, value = $1$ |

- **Pivot**: Index $i = 1$, value = `1`
- **Non-increasing suffix**: `nums[2..6] = [5, 4, 4, 3, 0]`

---

### Step 2: Successor Search ($j$)
Scan leftwards starting from $j = n - 1 = 6$ looking for the first element strictly greater than pivot value `1`:

| $j$ | $nums[j]$ | Pivot $nums[i]$ | Condition $nums[j] > 1$ | Action |
| :---: | :---: | :---: | :---: | :--- |
| **6** | $nums[6] = 0$ | $1$ | $0 > 1$ (False) | Decrement $j$ to 5 |
| **5** | $nums[5] = 3$ | $1$ | $3 > 1$ (**True**) | **Successor Locked!** Index $j = 5$, value = $3$ |

- **Successor**: Index $j = 5$, value = `3`

---

### Step 3: Swap Pivot and Successor
- Swap $nums[1]$ and $nums[5]$ (`1` $\leftrightarrow$ `3`):
  - **Before Swap**: `[2, 1, 5, 4, 4, 3, 0]`
  - **After Swap**:  `[2, 3, 5, 4, 4, 1, 0]`
- **Notice**:
  - The prefix `[2, 3]` is strictly greater than `[2, 1]`.
  - The suffix `nums[2..6] = [5, 4, 4, 1, 0]` remains strictly non-increasing!

---

### Step 4: Suffix Reversal (`left = 2`, `right = 6`)
Reverse `nums[2..6]` to minimize the suffix into increasing order:

#### Iteration 1:
- `left = 2` ($nums[2] = 5$), `right = 6` ($nums[6] = 0$)
- Swap $nums[2]$ and $nums[6]$:
  - State: `[2, 3, 0, 4, 4, 1, 5]`
- Advance pointers: `left = 3`, `right = 5`

#### Iteration 2:
- `left = 3` ($nums[3] = 4$), `right = 5` ($nums[5] = 1$)
- Swap $nums[3]$ and $nums[5]$:
  - State: `[2, 3, 0, 1, 4, 4, 5]`
- Advance pointers: `left = 4`, `right = 4`

#### Iteration 3:
- `left = 4`, `right = 4` (`left < right` is False)
- Reversal terminates!

---

### Final Verified State:
- `nums = [2, 3, 0, 1, 4, 4, 5]`
- ✅ **Independent Verification**: Matches standard library `std::next_permutation` and mathematical proof.

---

## 5. Edge Case Traces

### Edge Case 1: Fully Decreasing Array (Last Permutation)
- `nums = [3, 2, 1]`
- Pivot search scans $i = 1, 0$ and stops at $i = -1$ (no pivot exists).
- Pivot condition $i \ge 0$ is False; swap step is skipped.
- Reversal runs on `nums[0..2]`:
  - Swap $nums[0]$ and $nums[2]$ -> `[1, 2, 3]`
- Result: `[1, 2, 3]` (correctly wraps around to the smallest permutation in $O(N)$).

### Edge Case 2: Already Sorted Array (First Permutation)
- `nums = [1, 2, 3]`
- $i = 1$ ($nums[1] = 2 < nums[2] = 3$) -> Pivot $i = 1$, val $2$.
- $j = 2$ ($nums[2] = 3 > 2$) -> Successor $j = 2$, val $3$.
- Swap $nums[1]$ and $nums[2]$ -> `[1, 3, 2]`.
- Reversal on `nums[2..2]` (length 1) terminates immediately.
- Result: `[1, 3, 2]`.

### Edge Case 3: Duplicate Elements
- `nums = [1, 5, 1]`
- $i = 0$ ($nums[0] = 1 < nums[1] = 5$) -> Pivot $i = 0$.
- Successor search:
  - $j = 2$: $nums[2] = 1 \le 1$ (False)
  - $j = 1$: $nums[1] = 5 > 1$ (True) -> $j = 1$.
- Swap $nums[0]$ and $nums[1]$ -> `[5, 1, 1]`.
- Reverse `nums[1..2]` (`[1, 1]`) -> `[5, 1, 1]`.
- Result: `[5, 1, 1]`.

### Edge Case 4: Single Element
- `nums = [1]`
- Length $n = 1$, $i = n - 2 = -1$.
- Loop doesn't execute; reversal on `nums[0..0]` terminates.
- Result: `[1]`.
