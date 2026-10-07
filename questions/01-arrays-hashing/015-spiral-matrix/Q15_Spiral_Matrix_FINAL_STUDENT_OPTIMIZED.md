# Q15 — Spiral Matrix
## Final Student-Optimized Narration Script
### Code With Animation · Arrays & Hashing

**Voice:** simple, natural Indian English  
**Delivery:** slow, warm, conversational  
**Pause style:** use `...` as natural ElevenLabs breathing and comprehension gaps  
**Teaching rule:** explain each idea once... then build on it  
**Trace rule:** never skip a meaningful algorithmic state change  
**Narration-density rule:** animation may show every visited cell, but narration speaks only the values needed to explain turns, boundaries, invariants, edge cases, or stopping  
**Code rule:** explain why important code exists... do not read every line  
**Trace → Code rule:** every traced action must match the code organization used later  

---

# Scene 01 — Roadmap Resume + Question Activation

Welcome back to Code With Animation...

Question fourteen...

Rotate Image...

is complete.

Our progress is now...

fourteen out of two hundred twenty-seven.

And next...

we have Question Fifteen...

Spiral Matrix...

LeetCode fifty-four...

Medium.

This time...

we are not changing the matrix.

We only need to read its values...

in spiral order.

Let’s understand it.

---

# Scene 02 — Understand the Question + Method 1 Idea

We are given an `m` by `n` matrix.

Here...

`m` is the number of rows...

and `n` is the number of columns.

So the matrix does not have to be square.

For this lesson...

we will use this five by six matrix.

### On screen — master example

```text
 1   2   3   4   5   6
 7   8   9  10  11  12
13  14  15  16  17  18
19  20  21  22  23  24
25  26  27  28  29  30
```

Our job is to return all...

`m × n` values...

in one list...

following spiral order.

That order moves...

right...

down...

left...

up...

and then repeats.

But the real question is...

**when should we turn?**

Suppose we are moving right.

If the next position goes outside the matrix...

we obviously need to turn.

But after completing the outer part...

the next position may still be inside the matrix...

and already visited.

So Method One uses one simple rule.

Turn when the next position is...

outside the matrix...

or already visited.

To do that...

we keep the current position...

the current direction...

and a visited matrix.

Now let’s trace it properly.

---

# Scene 03 — Method 1 Full Trace
## Direction Simulation + Visited

We start at the top-left cell...

value one.

Our current direction is...

right.

### Step 1 — Top edge

We move across the complete top row...

from one...

through six.

At six...

the next position to the right...

is outside the matrix.

So we turn clockwise...

from right...

to down.

---

### Step 2 — Right edge

Now we move down the complete right edge...

from twelve...

through thirty.

At thirty...

the next downward position...

is outside the matrix.

So we turn...

from down...

to left.

---

### Step 3 — Bottom edge

Now we move across the bottom edge...

from twenty-nine...

through twenty-five.

At twenty-five...

the next position to the left...

is outside the matrix.

So we turn...

from left...

to up.

---

### Step 4 — Left edge

Now we move upward along the left edge...

until we reach seven.

And here...

something different happens.

The cell above seven...

is still inside the matrix.

But it contains one...

and one was already visited.

So this time...

we are not turning because of the border.

We are turning because the next cell...

is already visited.

We turn clockwise...

from up...

to right.

This is the important point...

that lets us enter the inner spiral.

---

### Step 5 — Inner top edge

Now we move right...

from eight...

through eleven.

At eleven...

the next cell is twelve.

Twelve is already visited.

So we turn...

from right...

to down.

---

### Step 6 — Inner right edge

Now we move down...

until twenty-three.

At twenty-three...

the next cell below is twenty-nine.

Twenty-nine is already visited.

So we turn...

from down...

to left.

---

### Step 7 — Inner bottom edge

Now we move left...

until twenty.

At twenty...

the next cell is nineteen.

Nineteen is already visited.

So we turn...

from left...

to up.

---

### Step 8 — Inner left edge

Moving upward...

we reach fourteen.

The cell above fourteen...

is eight.

Eight was already visited.

So we turn...

from up...

to right.

---

### Step 9 — Final cells

Now only the final two cells remain...

fifteen...

and sixteen.

After adding sixteen...

the answer contains exactly...

thirty values.

And the matrix contains...

five times six...

which is also thirty cells.

So every cell has been visited exactly once...

and we stop.

### On screen — final output

```text
[
 1, 2, 3, 4, 5, 6,
 12, 18, 24, 30,
 29, 28, 27, 26, 25,
 19, 13, 7,
 8, 9, 10, 11,
 17, 23,
 22, 21, 20,
 14, 15, 16
]
```

So Method One always follows the same logic...

process the current cell...

inspect the next position...

and turn when that next position is...

outside...

or already visited.

Now let’s map this exact trace into code.

---

# Scene 04 — Method 1 Code

First...

we store the number of rows and columns.

Then we keep the four directions...

in clockwise order.

Right...

down...

left...

and up.

We also create a visited matrix...

with the same dimensions as the input.

Our row and column start at zero...

and direction zero means...

right.

The loop allows exactly...

`m × n` visits...

one for every matrix cell.

For the current cell...

we add its value to the answer...

and mark it visited.

Then there is one small but important check.

If the answer already contains...

all `m × n` values...

we stop immediately.

Why?

Because after the final valid cell...

there is no next unvisited cell to move to.

Without this check...

we would unnecessarily try to calculate another move.

Otherwise...

we calculate the next row and column...

using the current direction.

If that next position is outside the matrix...

or already visited...

we rotate the direction once...

and calculate the next position again.

Then we move there.

That is exactly the rule...

we just traced.

Every cell enters the answer once...

so the time complexity is...

`O(m × n)`.

But the visited matrix also stores...

`m × n` states.

So the auxiliary space is...

`O(m × n)`.

The time is already optimal for reading every cell.

But now the question is...

do we really need this visited matrix?

---

## Code Target — Not Spoken

```python
def spiralOrderVisited(matrix):
    m = len(matrix)
    n = len(matrix[0])

    directions = [
        (0, 1),   # right
        (1, 0),   # down
        (0, -1),  # left
        (-1, 0),  # up
    ]

    visited = [[False] * n for _ in range(m)]
    answer = []

    r = 0
    c = 0
    direction = 0

    for _ in range(m * n):
        answer.append(matrix[r][c])
        visited[r][c] = True

        if len(answer) == m * n:
            break

        dr, dc = directions[direction]
        nr = r + dr
        nc = c + dc

        if (
            nr < 0
            or nr >= m
            or nc < 0
            or nc >= n
            or visited[nr][nc]
        ):
            direction = (direction + 1) % 4

            dr, dc = directions[direction]
            nr = r + dr
            nc = c + dc

        r = nr
        c = nc

    return answer
```

---

# Scene 05 — Why Visited Memory Is Unnecessary

Method One is correct...

and already takes...

`O(m × n)` time.

The extra cost comes from...

the visited matrix.

Now look at our matrix...

after the full outer layer has been processed.

### On screen

```text
X   X   X   X   X   X
X   8   9  10  11   X
X  14  15  16  17   X
X  20  21  22  23   X
X   X   X   X   X   X
```

See what remains...

it is still one rectangle.

That gives us a better idea.

Instead of remembering...

every processed cell...

we can simply remember...

which rectangle is still unprocessed.

And one rectangle needs only four boundaries.

`top`...

`bottom`...

`left`...

and `right`.

So we can replace...

an entire visited matrix...

with four integers.

That gives us Method Two.

---

# Scene 06 — Method 2 Idea + Core Invariant

For our five by six matrix...

the initial boundaries are...

`top = 0`

`bottom = 4`

`left = 0`

and...

`right = 5`.

These four boundaries describe...

the active rectangle.

And we maintain one important invariant.

Everything outside the active rectangle...

has already been processed exactly once.

Everything inside the active rectangle...

is still unprocessed.

So instead of moving cell by cell...

and asking whether each cell was visited...

we peel complete edges.

Top edge...

right edge...

bottom edge...

left edge.

After consuming an edge...

we move that boundary inward.

But there is one important rule.

After shrinking...

we must make sure...

the active rectangle still exists.

This matters when only...

one row...

or one column...

is left.

Now let’s trace the full boundary method.

---

# Scene 07 — Method 2 Full Trace
## Shrinking Rectangle

We begin with...

`top = 0`

`bottom = 4`

`left = 0`

`right = 5`.

The whole matrix is active.

---

### Round 1 — Top edge

First...

consume the complete top edge...

from one...

through six.

That row is finished forever.

So...

`top` moves from zero...

to one.

### Active boundaries

```text
top    = 1
bottom = 4
left   = 0
right  = 5
```

Rows still remain...

so we continue.

---

### Round 1 — Right edge

Now consume the complete right edge...

from twelve...

through thirty.

That column is finished.

So...

`right` moves from five...

to four.

### Active boundaries

```text
top    = 1
bottom = 4
left   = 0
right  = 4
```

Columns still remain...

so we continue.

---

### Round 1 — Bottom edge

Now consume the bottom edge...

from twenty-nine...

through twenty-five...

moving right to left.

That row is complete.

So...

`bottom` moves from four...

to three.

### Active boundaries

```text
top    = 1
bottom = 3
left   = 0
right  = 4
```

Rows still remain...

so we continue.

---

### Round 1 — Left edge

Now consume the left edge...

moving upward...

until seven.

That column is finished.

So...

`left` moves from zero...

to one.

### Active boundaries

```text
top    = 1
bottom = 3
left   = 1
right  = 4
```

The first outer round is complete.

And now look at the remaining work.

### On screen

```text
 8   9  10  11
14  15  16  17
20  21  22  23
```

The active region has changed...

from five by six...

to three by four.

We do not restart the algorithm.

We simply continue...

with this smaller rectangle.

---

### Round 2 — Top edge

Consume the new top edge...

from eight...

through eleven.

Then...

`top` moves from one...

to two.

### Active boundaries

```text
top    = 2
bottom = 3
left   = 1
right  = 4
```

Rows still remain.

---

### Round 2 — Right edge

Consume the new right edge...

down to twenty-three.

Then...

`right` moves from four...

to three.

### Active boundaries

```text
top    = 2
bottom = 3
left   = 1
right  = 3
```

Columns still remain.

---

### Round 2 — Bottom edge

Now consume the bottom edge...

from twenty-two...

through twenty...

moving right to left.

Then...

`bottom` moves from three...

to two.

### Active boundaries

```text
top    = 2
bottom = 2
left   = 1
right  = 3
```

Notice...

one row still remains.

So we are not finished.

---

### Round 2 — Left edge

Now consume the left edge.

At this moment...

that edge contains only one cell...

fourteen.

We collect fourteen.

Then...

`left` moves from one...

to two.

### Active boundaries

```text
top    = 2
bottom = 2
left   = 2
right  = 3
```

Now look at the remaining rectangle.

Only one row is left.

### On screen

```text
15  16
```

This is an important edge case.

We do not need...

a complete four-sided ring.

A single row is still...

a valid active rectangle.

---

### Final round — Single row

We consume that final top edge...

fifteen...

then sixteen.

Then...

`top` moves from two...

to three.

### Active boundaries

```text
top    = 3
bottom = 2
left   = 2
right  = 3
```

Now...

`top` is greater than `bottom`.

That means...

no rows remain.

The active rectangle has disappeared...

so the traversal stops.

Every cell was added...

exactly once.

And we did not use...

a visited matrix.

That is the complete optimal trace.

Now let’s map this directly into code.

---

# Scene 08 — Method 2 Optimal Code

The code starts with...

the four boundaries.

`top` and `left` begin at zero.

`bottom` is `m - 1`.

And `right` is `n - 1`.

The main loop continues only while...

the active rectangle is valid.

That means...

`top <= bottom`

and...

`left <= right`.

Inside the loop...

we follow the same order as our trace.

Consume an edge...

shrink that boundary...

validate...

and continue.

After the top edge...

we check whether any rows remain.

After the right edge...

we check whether any columns remain.

After the bottom edge...

we check the rows again.

After the left edge...

we do not need another separate check.

Why?

Because execution returns to the main `while` condition...

and that condition validates both row...

and column boundaries...

before the next round begins.

There is one more Python detail...

that is easy to get wrong.

When we traverse the bottom edge backwards...

we use:

`range(right, left - 1, -1)`.

And when we traverse the left edge upwards...

we use:

`range(bottom, top - 1, -1)`.

Python does not include the stop value in `range`.

So using...

`left - 1`...

lets us include the `left` boundary.

And using...

`top - 1`...

lets us include the `top` boundary.

These checks and reverse ranges...

are what protect us from...

off-by-one errors...

and duplicate values.

Every matrix cell is appended once.

So the time complexity is...

`O(m × n)`.

And apart from the output list...

we keep only a constant number of variables.

So the auxiliary space is...

`O(1)`.

---

## Code Target — Not Spoken

```python
def spiralOrder(matrix):
    m = len(matrix)
    n = len(matrix[0])

    top = 0
    bottom = m - 1
    left = 0
    right = n - 1

    answer = []

    while top <= bottom and left <= right:

        # Top edge: left -> right
        for c in range(left, right + 1):
            answer.append(matrix[top][c])

        top += 1

        if top > bottom:
            break

        # Right edge: top -> bottom
        for r in range(top, bottom + 1):
            answer.append(matrix[r][right])

        right -= 1

        if left > right:
            break

        # Bottom edge: right -> left
        for c in range(right, left - 1, -1):
            answer.append(matrix[bottom][c])

        bottom -= 1

        if top > bottom:
            break

        # Left edge: bottom -> top
        for r in range(bottom, top - 1, -1):
            answer.append(matrix[r][left])

        left += 1

    return answer
```

---

# Scene 09 — Complexity + Important Mistakes + Edge Cases

Let’s compare both methods.

Method One...

Direction Simulation with Visited...

takes...

`O(m × n)` time...

and...

`O(m × n)` auxiliary space.

Method Two...

Shrinking Boundaries...

also takes...

`O(m × n)` time...

but only...

`O(1)` auxiliary space.

So the optimization is not about time.

The improvement is...

how we represent the remaining work.

Now remember these important mistakes.

First...

do not assume the matrix is square.

It is `m` by `n`.

Rows and columns can be different.

Second...

in Method One...

do not turn only at the border.

You must turn when the next cell is...

outside...

or already visited.

Third...

in the boundary method...

consume an edge first...

then shrink its boundary.

Do not shrink before processing it.

Fourth...

after shrinking...

validate the remaining rectangle...

before processing another edge.

Otherwise...

single-row and single-column cases...

can create duplicate values.

And finally...

do not stop just because...

only one row...

or one column...

is left.

Those cells are still valid work.

So the same logic handles...

a one by one matrix...

a single row...

a single column...

wide matrices...

and tall matrices.

Duplicate values...

negative values...

and zeros...

also change nothing.

Because our traversal depends on...

positions...

not on the values stored there.

---

# Scene 10 — Final Recap + Transferable Pattern


Question Fifteen...

Spiral Matrix...

is complete.

Our progress moves from...

fourteen out of two hundred twenty-seven...

to...

fifteen out of two hundred twenty-seven.

And next...

Question Sixteen...

Subarray Sum Equals K.

That is up next.
