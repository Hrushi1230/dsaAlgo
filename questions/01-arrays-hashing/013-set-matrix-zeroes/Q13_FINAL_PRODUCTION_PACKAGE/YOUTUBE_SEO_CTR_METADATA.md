# Q13 — YouTube SEO + CTR Metadata
## Set Matrix Zeroes · LeetCode 73

## Primary title

```text
Set Matrix Zeroes Explained Visually | LeetCode 73 | O(1) Space
```

Character count: `63`

Why this is the primary:
- exact high-intent query `Set Matrix Zeroes` is first;
- `LeetCode 73` is explicit;
- `O(1) Space` communicates the payoff;
- accurate to the video;
- short enough that important words appear early.

## Alternate title A — progression angle

```text
Set Matrix Zeroes: From Full Copy to O(1) Space | LeetCode 73
```

Character count: `61`

## Alternate title B — curiosity + concept angle

```text
Set Matrix Zeroes — Why First Row & Column Are Enough | LeetCode 73
```

Character count: `67`

Use the primary title first. Test an alternate later only if impressions are healthy but Home/Suggested CTR is weak.

---

# Description

```text
Learn Set Matrix Zeroes (LeetCode 73) visually — from the safe full-copy approach to row/column marker arrays and the optimal O(1) extra-space solution.

In this Code With Animation lesson, we build the idea step by step:
• Why immediate zeroing can create a false cascade
• Method 1: preserve the original matrix
• Method 2: rowZero[] + colZero[]
• Method 3: reuse the first row and first column as marker memory
• Why firstRowZero and firstColZero are needed
• Full verified trace on a 5×5 matrix
• Code, complexity, common mistakes, and edge cases

Problem: LeetCode 73 — Set Matrix Zeroes
Pattern: Arrays & Hashing
Optimal complexity: O(m × n) time, O(1) extra space

The key idea is not to memorize a trick. It is to preserve only the information mutation would otherwise destroy — then reuse safe storage already inside the matrix.

Next problem in the roadmap: Rotate Image — LeetCode 48

#LeetCode #DSA #SetMatrixZeroes
```

Keep the first two lines as written because they immediately state:
`Set Matrix Zeroes`, `LeetCode 73`, visual explanation, marker arrays, and O(1) space.

After final render, optional chapters may be added using the **real scene timestamps**. Do not invent chapter times before the final render.

---

# Tags

```text
set matrix zeroes, set matrix zeroes leetcode 73, leetcode 73, set matrix zeroes explained, set matrix zeroes optimal, set matrix zeroes o1 space, set matrix zeroes o(1) space, set matrix zeros, setmatrixzeroes, matrix problems dsa, arrays and hashing, dsa visualization, leetcode medium, coding interview, in place matrix, first row first column markers, row column marker array, data structures and algorithms
```

Tags intentionally include:
- exact problem query;
- LeetCode number;
- optimal-space intent;
- DSA/matrix context;
- common `zeroes` / `zeros` spelling variation.

Do not paste this tag list into the public description.

---

# Pinned comment

```text
Quick check before you look back at the solution:

Why do we need `firstRowZero` and `firstColZero` separately? Why can’t `matrix[0][0]` safely remember both facts?

Answer: the original first-row state and original first-column state are two independent pieces of information. Once the first row and first column become marker storage, the corner cell alone cannot preserve both histories.

Which transition made the solution click for you most?
1) Full copy → row/column markers
2) Row/column markers → matrix becomes its own memory

Next: Rotate Image — LeetCode 48.
```

---

# Optional thumbnail copy

Keep thumbnail text very short. Preferred:

```text
MATRIX = MEMORY?
```

Alternative:

```text
O(1) SPACE
```

The visual should show the matrix boundary acting as memory rather than a generic code screenshot.

---

# Metadata strategy note

Current YouTube guidance emphasizes:
- accurate, succinct titles with important words near the beginning;
- title + thumbnail + description as more important discovery/decision metadata than tags;
- unique descriptions with the useful summary in the first lines;
- tags mainly as supporting metadata, especially for spelling variations.

This package follows that approach.
