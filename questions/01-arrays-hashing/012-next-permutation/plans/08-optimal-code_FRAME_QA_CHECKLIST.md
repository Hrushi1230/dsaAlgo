# Scene 08 · Critical Frame QA Checklist: Method 2 · Optimal Code
**Question:** 012 · Next Permutation (LeetCode 31)  
**Scene:** `08-optimal-code`  
**Audio:** `remotion-project/public/audio/012/08-optimal-code.mp3` (100.480s, 3,014 frames @ 30 FPS)  
**Anchor Source:** `sync/08-optimal-code.anchors.json` (28 Anchors)  

---

## 1. Frame-Specific Visual Checkpoints

| Checkpoint ID | Anchor | Review Frame | Spoken Narration Anchor | Expected Visual & Semantic State | Status |
|---|---|---|---|---|---|
| **QA-01** | `S08_OPEN` | **Frame 30** | "Now let's write the optimal solution." | Clean live code surface centered (width: 1060px). Cursor blinking on empty Line 1. | `[x] PASS` |
| **QA-02** | `S08_N` | **Frame 130** | "store the array length in n," | Line 1 types: `n = len(nums)` character-by-character. | `[x] PASS` |
| **QA-03** | `S08_I_INIT` | **Frame 220** | "then set i to n -2." | Line 2 types: `i = n - 2`. Future lines remain completely hidden. | `[x] PASS` |
| **QA-04** | `S08_I_LEFT` | **Frame 290** | "We move i left." | Code editor smoothly docks to the left; Right proof panel docks with Array V2 track. | `[x] PASS` |
| **QA-05** | `S08_WHILE_I` | **Frame 400** | "nums at i is greater than or equal to nums at i plus 1." | Line 3 types: `while i >= 0 and nums[i] >= nums[i + 1]:` and Line 4: `    i -= 1`. | `[x] PASS` |
| **QA-06** | `S08_LOOP_STOPS` | **Frame 590** | "either we found the pivot, or no pivot exists." | Right proof displays dual loop exit outcomes: Pivot Found vs No Pivot Exists. | `[x] PASS` |
| **QA-07** | `S08_IF_I` | **Frame 740** | "If i is still greater than or equal to 0..." | Line 5 types: `if i >= 0:`. Green valid pivot guard badge in right proof. | `[x] PASS` |
| **QA-08** | `S08_J_INIT` | **Frame 875** | "Now set j to n minus 1." | Line 6 types indented: `    j = n - 1`. Pointer j placed at slot n-1 in proof array. | `[x] PASS` |
| **QA-09** | `S08_J_LEFT` | **Frame 935** | "Move j left," | Animated pointer movement showing j scanning leftwards across the suffix. | `[x] PASS` |
| **QA-10** | `S08_WHILE_J` | **Frame 1020** | "nums at j is less than or equal to nums at i." | Line 7 types: `    while nums[j] <= nums[i]:` and Line 8: `        j -= 1`. | `[x] PASS` |
| **QA-11** | `S08_J_MEANING` | **Frame 1180** | "j is the first value from the right... strictly greater..." | Successor guarantee callout: `nums[j] > nums[i]` highlighted in green. | `[x] PASS` |
| **QA-12** | `S08_SWAP` | **Frame 1350** | "Now swap nums at i with nums at j." | Line 9 types: `    nums[i], nums[j] = nums[j], nums[i]`. Right proof shows swap arc. | `[x] PASS` |
| **QA-13** | `S08_LEFT` | **Frame 1450** | "Next, set left to i plus 1," | Line 10 types: `left = i + 1`. Pointer `left` appears at slot i+1 in proof array. | `[x] PASS` |
| **QA-14** | `S08_RIGHT` | **Frame 1535** | "and right to n minus 1." | Line 11 types: `right = n - 1`. Pointer `right` appears at slot n-1 in proof array. | `[x] PASS` |
| **QA-15** | `S08_REV_WHILE` | **Frame 1600** | "While left is smaller than right," | Line 12 types: `while left < right:`. Cyan bracket spans [left..right]. | `[x] PASS` |
| **QA-16** | `S08_REV_SWAP` | **Frame 1700** | "swap nums at left with nums at right," | Line 13 types: `    nums[left], nums[right] = nums[right], nums[left]`. | `[x] PASS` |
| **QA-17** | `S08_LEFT_FWD` | **Frame 1780** | "then move left forward" | Line 14 types: `    left += 1`. Pointer left moves right. | `[x] PASS` |
| **QA-18** | `S08_RIGHT_BACK` | **Frame 1835** | "and right backward." | Line 15 types: `    right -= 1`. Pointer right moves left. Full code complete. | `[x] PASS` |
| **QA-19** | `S08_REVERSE_MEANING` | **Frame 1910** | "This reverses the suffix in place." | Right proof card displays O(K) in-place reversal badge. Suffix sorted ascending. | `[x] PASS` |
| **QA-20** | `S08_NO_PIVOT` | **Frame 2010** | "If no pivot was found, i becomes minus 1." | Edge case proof on `[5, 4, 3, 2, 1]`: pointer i drops to index -1. | `[x] PASS` |
| **QA-21** | `S08_SKIP_SWAP` | **Frame 2100** | "Then the swap block is skipped," | Lines 6..9 dim in code editor with translucent wash (`if -1 >= 0: False`). | `[x] PASS` |
| **QA-22** | `S08_LEFT_ZERO` | **Frame 2190** | "and left becomes 0 automatically." | Math evaluation: `left = (-1) + 1 = 0`. Left pointer lands on slot 0. | `[x] PASS` |
| **QA-23** | `S08_SAME_REVERSE` | **Frame 2310** | "same reverse loop reverses the whole array." | Two-pointer reversal spans whole array `[0..4]`, turning it into `[1, 2, 3, 4, 5]`. | `[x] PASS` |
| **QA-24** | `S08_LARGEST_SMALLEST` | **Frame 2450** | "turns the largest permutation into smallest..." | Wraparound trophy badge stamps on with circular cycle icon. | `[x] PASS` |
| **QA-25** | `S08_NOT_MEMORIZE` | **Frame 2610** | "The important part is not memorizing these lines." | Center stage transitions to 3 Logical Invariants synthesis card. | `[x] PASS` |
| **QA-26** | `S08_REASON1` | **Frame 2750** | "Find the rightmost place that can increase." | Invariant 1 illuminates in amber: `1. FIND PIVOT (nums[i] < nums[i+1])`. | `[x] PASS` |
| **QA-27** | `S08_REASON2` | **Frame 2910** | "Make the smallest increase." | Invariant 2 illuminates in cyan: `2. SWAP SUCCESSOR (nums[j] > nums[i])`. | `[x] PASS` |
| **QA-28** | `S08_REASON3` | **Frame 2985** | "Then minimize the suffix." | Invariant 3 illuminates in green: `3. MINIMIZE SUFFIX (Reverse in O(K))`. | `[x] PASS` |

---

## 2. Invariant & Anti-Regression Verification

- [x] **Frame 0 Continuity:** Clean transition into code implementation with empty editor ready for typing.
- [x] **Exact Frame Duration:** Total frames rendered is exactly 3,014 @ 30 FPS (100.480s).
- [x] **Zero Premature Spoilers:** Future lines remain 100% invisible until typed.
- [x] **Character-by-Character Typing:** Active line types progressively with deterministic blinking cursor.
- [x] **Oxford Chalkboard Aesthetic:** No black boxes; all cards use authentic translucent wash (`rgba(10, 48, 42, 0.68)`) with `RoughBox` chalk borders matching `s03_f1250.png`.
- [x] **Zero Collision Law:** Center hero code editor (width: 1060px) and split docked panels (code 860px + proof 820px, total 1710px) maintain $\ge 220\text{px}$ breathing room above captions at Y: 980.
- [x] **Array V2 Law:** All proof arrays use stationary slot shells and indices.
- [x] **Edge Case Fidelity:** Exact execution of `[5, 4, 3, 2, 1]` showing `i = -1`, skipped swap block, and whole-array reversal to `[1, 2, 3, 4, 5]`.
- [x] **No Complexity Graph Leaks:** Complexity curves are strictly prohibited in Scene 08 (reserved for Scene 09).
