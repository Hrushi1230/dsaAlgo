# Q11 Sort Colors — Scene 08 Framewise Plan
## Scene: 08-dnf-code (Dutch National Flag Code Implementation)
- Duration: 2893 frames (96.4s @ 30fps)
- Anchors: 32 anchors
- Language: Python 3

---

### Layout & Visual Architecture
- Split Layout:
  - **Left (Width: 920px)**: Code Card with syntax-highlighted Python implementation (17 lines).
    - Top bar: `sort_colors.py` with terminal dots.
    - Active line highlighting with glowing border matching spoken logic.
  - **Right (Width: 720px)**: Dynamic Algorithm State Cards:
    - Card 1: 3 Pointers & Loop Invariant Card (low, mid, high ranges).
    - Card 2: 3 Decision Branches Checklist (0 -> swap low/mid, 1 -> mid++, 2 -> swap mid/high, mid stays).
    - Card 3: Crucial Callout Box ("WHY MID DOES NOT MOVE" spotlight when explaining lines 16-17).
    - Card 4: Summary / Guarantee Box at completion.
- Bottom: Synced Captions.

---

### Frame-by-Frame Code Line Highlighting
- **F0 .. F128**: Intro (Class definition / signature).
- **F128 .. F404**: Pointers Initialization (Lines 2, 3, 4: `low = 0`, `mid = 0`, `high = len(nums) - 1`).
- **F404 .. F620**: Loop Invariant & Condition (Line 6: `while mid <= high:`, Line 7: `if nums[mid] == 0:`).
- **F620 .. F959**: Branch 0 (Lines 8, 9, 10: `nums[low], nums[mid] = nums[mid], nums[low]`, `low += 1`, `mid += 1`).
- **F959 .. F1249**: Branch 1 (Lines 12, 13: `elif nums[mid] == 1:`, `mid += 1`).
- **F1249 .. F2051**: Branch 2 & "Mid Does Not Move" Spotlight (Lines 15, 16, 17: `else:`, `nums[mid], nums[high] = nums[high], nums[mid]`, `high -= 1`, Note on missing `mid += 1`).
- **F2051 .. F2329**: Loop Termination (Line 6: `mid > high` & array fully partitioned).
- **F2329 .. F2893**: Core Takeaway & Guarantees (Full code overview + invariant recap).
