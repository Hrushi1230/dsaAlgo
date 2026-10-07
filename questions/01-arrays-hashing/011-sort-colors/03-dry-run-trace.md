# Master Dry Run Trace — Q11: Sort Colors (LeetCode 75)

## 1. Problem Specification
- **Master Testcase**: `nums = [2, 1, 2, 0, 2, 1, 0, 1, 0, 2]`
- **Length $n$**: `10`
- **Expected Output**: `[0, 0, 0, 1, 1, 1, 2, 2, 2, 2]`

---

## 2. Approach 1: Frequency Counting & Overwrite (2 Passes)

### Pass 1: Frequency Count
- Initial: `count0 = 0`, `count1 = 0`, `count2 = 0`
- Index 0: `val = 2` -> `count2 = 1`
- Index 1: `val = 1` -> `count1 = 1`
- Index 2: `val = 2` -> `count2 = 2`
- Index 3: `val = 0` -> `count0 = 1`
- Index 4: `val = 2` -> `count2 = 3`
- Index 5: `val = 1` -> `count1 = 2`
- Index 6: `val = 0` -> `count0 = 2`
- Index 7: `val = 1` -> `count1 = 3`
- Index 8: `val = 0` -> `count0 = 3`
- Index 9: `val = 2` -> `count2 = 4`
- **Final Counts**: `count0 = 3`, `count1 = 3`, `count2 = 4` (Sum = 10)

### Pass 2: In-Place Overwrite
- Write 3 zeroes: `nums[0..2] = [0, 0, 0]`
- Write 3 ones: `nums[3..5] = [1, 1, 1]`
- Write 4 twos: `nums[6..9] = [2, 2, 2, 2]`
- **Result**: `[0, 0, 0, 1, 1, 1, 2, 2, 2, 2]` (Passes in $O(2n)$ time, $O(1)$ space).

---

## 3. Approach 2: Dutch National Flag (1 Pass, 3 Pointers, 4 Invariant Regions)

### 4 Invariant Regions
- `[0 .. low-1]`: Confirmed 0s (Red / Coral)
- `[low .. mid-1]`: Confirmed 1s (Chalk White)
- `[mid .. high]`: Unknown / Unclassified (Dotted Slate)
- `[high+1 .. n-1]`: Confirmed 2s (Cyan / Sky Blue)

### Initial State
- `nums = [2, 1, 2, 0, 2, 1, 0, 1, 0, 2]`
- `low = 0`, `mid = 0`, `high = 9`
- Unknown region: `[0 .. 9]` (10 elements)

### Step-by-Step Execution Trace

#### Step 1
- **Before State**: `[2, 1, 2, 0, 2, 1, 0, 1, 0, 2]`, `low = 0, mid = 0, high = 9`
- **Inspecting**: `nums[mid] = nums[0] = 2`
- **Rule**: `nums[mid] == 2` -> swap `nums[mid]` with `nums[high]`, decrement `high`, **mid stays**.
- **Action**: Swap index 0 and index 9 (`2` <-> `2`).
- **Pointers**: `low = 0`, `mid = 0`, `high = 8`
- **After State**: `[2, 1, 2, 0, 2, 1, 0, 1, 0, 2]`
- **Confirmed Regions**: 0s: `[]`, 1s: `[]`, Unknown: `[0..8]`, 2s: `[9..9]` (`2`)

#### Step 2
- **Before State**: `[2, 1, 2, 0, 2, 1, 0, 1, 0, 2]`, `low = 0, mid = 0, high = 8`
- **Inspecting**: `nums[mid] = nums[0] = 2`
- **Rule**: `nums[mid] == 2` -> swap `nums[mid]` with `nums[high]`, decrement `high`, **mid stays**.
- **Action**: Swap index 0 and index 8 (`2` <-> `0`).
- **Pointers**: `low = 0`, `mid = 0`, `high = 7`
- **After State**: `[0, 1, 2, 0, 2, 1, 0, 1, 2, 2]`
- **Confirmed Regions**: 0s: `[]`, 1s: `[]`, Unknown: `[0..7]`, 2s: `[8..9]` (`2, 2`)

#### Step 3
- **Before State**: `[0, 1, 2, 0, 2, 1, 0, 1, 2, 2]`, `low = 0, mid = 0, high = 7`
- **Inspecting**: `nums[mid] = nums[0] = 0`
- **Rule**: `nums[mid] == 0` -> swap `nums[low]` with `nums[mid]`, increment `low`, increment `mid`.
- **Action**: Self-swap index 0 with index 0 (`0` <-> `0`).
- **Pointers**: `low = 1`, `mid = 1`, `high = 7`
- **After State**: `[0, 1, 2, 0, 2, 1, 0, 1, 2, 2]`
- **Confirmed Regions**: 0s: `[0..0]` (`0`), 1s: `[]`, Unknown: `[1..7]`, 2s: `[8..9]` (`2, 2`)

#### Step 4
- **Before State**: `[0, 1, 2, 0, 2, 1, 0, 1, 2, 2]`, `low = 1, mid = 1, high = 7`
- **Inspecting**: `nums[mid] = nums[1] = 1`
- **Rule**: `nums[mid] == 1` -> already in middle region, increment `mid`.
- **Action**: No swap.
- **Pointers**: `low = 1`, `mid = 2`, `high = 7`
- **After State**: `[0, 1, 2, 0, 2, 1, 0, 1, 2, 2]`
- **Confirmed Regions**: 0s: `[0..0]` (`0`), 1s: `[1..1]` (`1`), Unknown: `[2..7]`, 2s: `[8..9]` (`2, 2`)

#### Step 5
- **Before State**: `[0, 1, 2, 0, 2, 1, 0, 1, 2, 2]`, `low = 1, mid = 2, high = 7`
- **Inspecting**: `nums[mid] = nums[2] = 2`
- **Rule**: `nums[mid] == 2` -> swap `nums[mid]` with `nums[high]`, decrement `high`, **mid stays**.
- **Action**: Swap index 2 and index 7 (`2` <-> `1`).
- **Pointers**: `low = 1`, `mid = 2`, `high = 6`
- **After State**: `[0, 1, 1, 0, 2, 1, 0, 2, 2, 2]`
- **Confirmed Regions**: 0s: `[0..0]` (`0`), 1s: `[1..1]` (`1`), Unknown: `[2..6]`, 2s: `[7..9]` (`2, 2, 2`)

#### Step 6
- **Before State**: `[0, 1, 1, 0, 2, 1, 0, 2, 2, 2]`, `low = 1, mid = 2, high = 6`
- **Inspecting**: `nums[mid] = nums[2] = 1`
- **Rule**: `nums[mid] == 1` -> already in middle region, increment `mid`.
- **Action**: No swap.
- **Pointers**: `low = 1`, `mid = 3`, `high = 6`
- **After State**: `[0, 1, 1, 0, 2, 1, 0, 2, 2, 2]`
- **Confirmed Regions**: 0s: `[0..0]` (`0`), 1s: `[1..2]` (`1, 1`), Unknown: `[3..6]`, 2s: `[7..9]` (`2, 2, 2`)

#### Step 7
- **Before State**: `[0, 1, 1, 0, 2, 1, 0, 2, 2, 2]`, `low = 1, mid = 3, high = 6`
- **Inspecting**: `nums[mid] = nums[3] = 0`
- **Rule**: `nums[mid] == 0` -> swap `nums[low]` with `nums[mid]`, increment `low`, increment `mid`.
- **Action**: Swap index 1 with index 3 (`1` <-> `0`).
- **Pointers**: `low = 2`, `mid = 4`, `high = 6`
- **After State**: `[0, 0, 1, 1, 2, 1, 0, 2, 2, 2]`
- **Confirmed Regions**: 0s: `[0..1]` (`0, 0`), 1s: `[2..3]` (`1, 1`), Unknown: `[4..6]`, 2s: `[7..9]` (`2, 2, 2`)

#### Step 8
- **Before State**: `[0, 0, 1, 1, 2, 1, 0, 2, 2, 2]`, `low = 2, mid = 4, high = 6`
- **Inspecting**: `nums[mid] = nums[4] = 2`
- **Rule**: `nums[mid] == 2` -> swap `nums[mid]` with `nums[high]`, decrement `high`, **mid stays**.
- **Action**: Swap index 4 with index 6 (`2` <-> `0`).
- **Pointers**: `low = 2`, `mid = 4`, `high = 5`
- **After State**: `[0, 0, 1, 1, 0, 1, 2, 2, 2, 2]`
- **Confirmed Regions**: 0s: `[0..1]` (`0, 0`), 1s: `[2..3]` (`1, 1`), Unknown: `[4..5]`, 2s: `[6..9]` (`2, 2, 2, 2`)

#### Step 9
- **Before State**: `[0, 0, 1, 1, 0, 1, 2, 2, 2, 2]`, `low = 2, mid = 4, high = 5`
- **Inspecting**: `nums[mid] = nums[4] = 0`
- **Rule**: `nums[mid] == 0` -> swap `nums[low]` with `nums[mid]`, increment `low`, increment `mid`.
- **Action**: Swap index 2 with index 4 (`1` <-> `0`).
- **Pointers**: `low = 3`, `mid = 5`, `high = 5`
- **After State**: `[0, 0, 0, 1, 1, 1, 2, 2, 2, 2]`
- **Confirmed Regions**: 0s: `[0..2]` (`0, 0, 0`), 1s: `[3..4]` (`1, 1`), Unknown: `[5..5]`, 2s: `[6..9]` (`2, 2, 2, 2`)

#### Step 10
- **Before State**: `[0, 0, 0, 1, 1, 1, 2, 2, 2, 2]`, `low = 3, mid = 5, high = 5`
- **Inspecting**: `nums[mid] = nums[5] = 1`
- **Rule**: `nums[mid] == 1` -> already in middle region, increment `mid`.
- **Action**: No swap.
- **Pointers**: `low = 3`, `mid = 6`, `high = 5`
- **After State**: `[0, 0, 0, 1, 1, 1, 2, 2, 2, 2]`
- **Confirmed Regions**: 0s: `[0..2]` (`0, 0, 0`), 1s: `[3..5]` (`1, 1, 1`), Unknown: `[]` (Empty!), 2s: `[6..9]` (`2, 2, 2, 2`)

#### Termination
- Condition: `mid (6) > high (5)` -> while loop terminates.
- Total iterations: 10 steps.
- Final Array: `[0, 0, 0, 1, 1, 1, 2, 2, 2, 2]` -> Correctly sorted.

---

## 4. Independent Verification Check
- **Verification Status**: VERIFIED (100% exact match between algorithm execution, dry run trace, and script narration in Scene 07).
