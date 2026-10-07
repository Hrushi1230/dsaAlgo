# 📺 YouTube SEO & Publishing Kit — Sort Colors (LeetCode #75)
**Channel**: Code With Animation  
**Problem**: Sort Colors (Dutch National Flag) · LC #75  
**Category**: Pattern 01 — Arrays & Hashing (Problem 11 of 18)  
**Duration**: 18:18 (32,938 Frames @ 30fps)  
**Resolution**: 1080p Full HD (1920x1080)  
**Visual Style**: Dark Slate Chalkboard with Semantic Element Highlighting  

---

## 🎯 1. High-CTR Video Titles

- **Option A (Recommended — High CTR Curiosity Hook)**:  
  `The Dijkstra Algorithm Everyone Fails in Interviews (Sort Colors in 1 Pass)`
- **Option B (Search & SEO Dominant)**:  
  `Sort Colors Visualized (Dutch National Flag) | LeetCode 75 Python Masterclass`
- **Option C (FAANG / Interview Hook)**:  
  `Google Asked Me to Sort an Array in One Pass with O(1) Space — LeetCode 75`
- **Option D (Pedagogical Mastery)**:  
  `Never Memorize Dutch National Flag Again! 3-Way Partitioning Visualized`

---

## 🖼️ 2. High-CTR Thumbnail Text Badges
- `1 PASS. 0 EXTRA MEMORY.`
- `THE 3-WAY PARTITION TRICK`
- `WHY COUNTING SORTS FAIL`
- `DIJKSTRA'S ELEGANT PROOF`

---

## 📝 3. SEO-Optimized Video Description

```markdown
Struggling with Sort Colors (LeetCode #75)? In this masterclass, we break down Dijkstra's famous Dutch National Flag 3-way partitioning algorithm step-by-step using hand-drawn chalkboard animations.

We start by dissecting the problem rules and strict in-place constraints, implement the intuitive Two-Pass Counting Sort approach, reveal why counting fails when sorting objects with satellite data, and then construct the complete visual intuition for the optimal single-pass Dutch National Flag algorithm with O(1) auxiliary space.

Every pointer movement (low, mid, high) and swap on our master testcase [2, 0, 2, 1, 1, 0, 2, 0, 1, 2] is visually animated frame-by-frame with zero hand-waving.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
⏱️ CHAPTERS & TIMESTAMPS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
00:00 - Channel Intro & Problem Overview
00:10 - Scene 01 · 227-Problem Roadmap & Problem Hook
00:53 - Scene 02 · Understand the Problem (Colors 0, 1, 2 & In-Place Rules)
02:12 - Scene 03 · Approach 1: Two-Pass Counting Sort Trace
03:49 - Scene 04 · Approach 1: Counting Sort Python Implementation
05:02 - Scene 05 · Why Counting Sort Falls Short (Stability & Satellite Data)
06:20 - Scene 06 · Approach 2: Dutch National Flag (DNF) Intuition & Invariants
08:22 - Scene 07 · Approach 2: Full DNF Pointer Trace on Master Testcase
12:23 - Scene 08 · Approach 2: One-Pass DNF Python Implementation
14:02 - Scene 09 · Time & Space Complexity Analysis & Pitfalls
16:14 - Scene 10 · Final Recap & Next Problem (Next Permutation)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
💡 PYTHON 3 IMPLEMENTATIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

# 🟢 APPROACH 1: TWO-PASS COUNTING SORT — O(n) Time | O(1) Space
def sortColorsCounting(nums: list[int]) -> None:
    counts = [0, 0, 0]
    for x in nums:
        counts[x] += 1
    
    idx = 0
    for color in range(3):
        for _ in range(counts[color]):
            nums[idx] = color
            idx += 1


# 🚀 APPROACH 2: OPTIMAL DUTCH NATIONAL FLAG — O(n) One-Pass | O(1) Space
def sortColors(nums: list[int]) -> None:
    low = 0
    mid = 0
    high = len(nums) - 1
    
    while mid <= high:
        if nums[mid] == 0:
            nums[low], nums[mid] = nums[mid], nums[low]
            low += 1
            mid += 1
        elif nums[mid] == 1:
            mid += 1
        else:  # nums[mid] == 2
            nums[mid], nums[high] = nums[high], nums[mid]
            high -= 1

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🔑 THE 4 CRITICAL PARTITION INVARIANTS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
1. [0 .. low - 1]     → All elements are strictly 0 (Red partition)
2. [low .. mid - 1]   → All elements are strictly 1 (White partition)
3. [mid .. high]      → Unexplored territory (Numbers yet to be inspected)
4. [high + 1 .. n - 1]→ All elements are strictly 2 (Blue partition)

⚠️ Critical Edge Case: When swapping nums[mid] with nums[high], do NOT increment mid! The incoming element from high is uninspected and must be checked on the very next iteration.

📌 Full 227-Problem Roadmap: https://github.com/Hrushi1230/dsaAlgo
💻 Language: Python 3
🎯 Pattern: 01 — Arrays & Hashing (Problem 11 of 18)

#LeetCode #SortColors #DutchNationalFlag #Python #CodingInterview #DataStructures #Algorithms #SoftwareEngineering #FAANG
```

---

## 🏷️ 4. YouTube Tags

```text
Sort Colors, LeetCode 75, Sort Colors LeetCode, Dutch National Flag algorithm, 3 way partitioning, Sort Colors Python, LeetCode 75 solution, Dutch National Flag Python, Dijkstra Dutch National Flag, Sort Colors animated, LeetCode medium, in place sorting Python, Arrays and Hashing, DSA Full Course, Python DSA, FAANG interview questions, coding interview preparation, LeetCode 75 Python solution, LeetCode Sort Colors animation, two pass counting sort vs dutch flag
```

---

## 💬 5. Pinned Engagement Comment

```markdown
👇 Quick active recall challenge:
When we swap `nums[mid]` with `nums[high]`, why do we ONLY decrement `high` and NOT increment `mid`?
Drop your answer in the comments below to test your understanding! 🧠✨

Next up in our 227-problem roadmap: Problem #12 — Next Permutation (LeetCode #31)! 🚀
```
