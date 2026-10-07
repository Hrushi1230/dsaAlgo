# Q13 — Set Matrix Zeroes (LeetCode 73)
## Phase 7 — Full Narration Script
### Code With Animation · Arrays & Hashing

**Voice:** simple, natural Indian English  
**Delivery:** slow, warm, conversational  
**Pauses:** use `...` as real breathing/comprehension gaps  
**Teaching rule:** explain each idea once, then build on it. Do not repeat a full explanation unless a later scene needs the fact for a new reason.

---

# Scene 01 — Roadmap Resume + Q13 Activation

Welcome back to Code With Animation...

We are continuing our Arrays and Hashing roadmap.

Question twelve...
Next Permutation...
is complete.

Our global progress is now twelve out of two hundred twenty-seven.

And the next problem is...

Question thirteen...

Set Matrix Zeroes...

LeetCode seventy-three...

Medium.

This question looks simple at first...

but one small detail changes the whole problem.

Let’s understand that first.

---

# Scene 02 — Understand the Problem + The Dangerous Naive Idea

We are given a matrix.

Whenever an original cell contains zero...

its complete row...
and its complete column...
must become zero.

For this lesson, we will use this matrix.

One... two... zero... four... five.

Six... seven... eight... nine... ten.

Zero... twelve... thirteen... fourteen... fifteen.

Sixteen... seventeen... eighteen... zero... twenty.

Twenty-one... twenty-two... twenty-three... twenty-four... twenty-five.

We will use zero-based row and column indices.

There are three original zeros.

One is in the first row...

one is in the first column...

and one is inside the matrix.

At first, the solution may look obvious.

When we find a zero...

why not immediately make that row and column zero?

The problem is...

those writes create new zeros.

And if our scan later reaches one of those new zeros...

we may treat it like an original zero.

Then we zero another row...

and another column...

even though they were never supposed to change.

So we need one important rule.

Zeros created by us...

must never become new sources of zeroing.

That means we need to preserve the information about the original zeros...

before our mutations can destroy it.

Let’s start with the safest possible method.

---

# Scene 03 — Method 1 Trace: Full Original Copy

The safest idea is...

keep one untouched copy of the original matrix.

Think of it as our source of truth.

We read zero information only from this original copy...

and we write changes only into the working matrix.

Now trace it.

In the original copy...

our first zero is at row zero, column two.

Because this zero belongs to the original input...

zero row zero in the working matrix.

Then zero column two.

The working matrix changes...

but the source copy does not.

Continue through the original copy.

The next original zero is at row two, column zero.

So zero row two in the working matrix...

and zero column zero.

Again...

the source copy stays untouched.

Then we reach the original zero at row three, column three.

Zero row three...

and zero column three...

in the working matrix.

Now all three original zero sources have been processed.

Notice what we never did.

We never used a zero created inside the working matrix as a new source.

Every zeroing decision came from the untouched original copy.

So newly-created zeros cannot create a false chain reaction.

After all three original zeros are processed...

the result becomes:

zero zero zero zero zero...

zero seven zero zero ten...

zero zero zero zero zero...

zero zero zero zero zero...

zero twenty-two zero zero twenty-five.

So Method One works.

But we paid for that safety...

by storing the whole matrix again.

Let’s write the idea in code.

---

# Scene 04 — Method 1 Code

First...

make a full copy of the matrix.

This copy will never be modified.

Then store the number of rows...

and the number of columns.

Now scan every cell in the original copy.

If the original cell is not zero...

we do nothing.

But when the original cell is zero...

we zero the corresponding row in the working matrix.

Then we zero the corresponding column in the working matrix.

That is the complete idea.

Read from the copy...

write into the real matrix.

Because the discovery source never changes...

a zero created by us cannot create a false chain reaction.

The code is easy to trust.

But the cost is much larger than the information we actually need.

We copied every value...

even though most of those values are irrelevant to the decision.

So let’s ask a better question.

What information do we truly need to remember?

---

## Code target — not spoken

```python
def setZeroesCopy(matrix):
    original = [row[:] for row in matrix]

    m = len(matrix)
    n = len(matrix[0])

    for r in range(m):
        for c in range(n):
            if original[r][c] == 0:
                for j in range(n):
                    matrix[r][j] = 0

                for i in range(m):
                    matrix[i][c] = 0
```

---

# Scene 05 — Why Method 1 Wastes Space → Derive Method 2

Suppose we find an original zero at row three, column three.

Do we really need to remember every number in the original matrix?

No.

For the final answer...

we only need two facts.

Which rows contained a zero?

And which columns contained a zero?

That is much less information.

Instead of copying the whole matrix...

we can keep one marker for every row...

and one marker for every column.

If row three contains an original zero...

mark row three.

If column three contains an original zero...

mark column three.

Then after discovery is finished...

those markers tell us exactly where zeros must go.

So we have compressed our memory.

From an entire matrix...

to only row information and column information.

Let’s trace that method.

---

# Scene 06 — Method 2 Trace: Row and Column Marker Arrays

We create two marker arrays.

`rowZero` has one boolean for every row.

`colZero` has one boolean for every column.

Initially...

everything is false.

Now scan the matrix.

Our first original zero is at row zero, column two.

So mark:

row zero... true.

And column two... true.

The next original zero is at row two, column zero.

So:

row two... true.

Column zero... true.

Then we reach the interior zero at row three, column three.

Mark:

row three... true.

Column three... true.

Discovery is finished.

Our row markers are:

true... false... true... true... false.

And our column markers are:

true... false... true... true... false.

Now the information flows back into the matrix.

Take row one.

Its row marker is false.

So row one is not completely zero.

But column zero is marked...

so the first cell becomes zero.

Column one is not marked...

so seven stays.

Column two is marked...

so eight becomes zero.

Column three is marked...

so nine becomes zero.

Column four is not marked...

so ten stays.

Now row two.

Its row marker is true.

That one fact is enough.

Every cell in row two becomes zero.

The same happens to row three.

Its row marker is also true.

Finally, row four is not marked.

So only the marked columns change.

Twenty-two survives.

Twenty-three becomes zero.

Twenty-four becomes zero.

Twenty-five survives.

And we reach the same correct answer.

This time we did not preserve the whole matrix.

We preserved only the information that matters.

Now let’s convert this idea into code.

---

# Scene 07 — Method 2 Code

First...

store `m` and `n`.

Then create `rowZero` with `m` false values.

And create `colZero` with `n` false values.

The first pass is only for discovery.

For every cell...

if `matrix[r][c]` is zero...

set `rowZero[r]` to true...

and `colZero[c]` to true.

Notice the important part.

During this pass...

we are not changing the matrix.

We are only recording information.

After discovery is complete...

start the second pass.

For every cell...

check its row marker...

and its column marker.

If either one is true...

set that matrix cell to zero.

That is all.

The code directly follows the invariant:

first remember...

then mutate.

The time is already linear in the number of matrix cells.

But the extra memory is still proportional to the number of rows plus columns.

Can we remove even those two marker arrays?

Look carefully at the matrix itself.

It already contains storage in exactly those two dimensions.

---

## Code target — not spoken

```python
def setZeroesMarkers(matrix):
    m = len(matrix)
    n = len(matrix[0])

    rowZero = [False] * m
    colZero = [False] * n

    for r in range(m):
        for c in range(n):
            if matrix[r][c] == 0:
                rowZero[r] = True
                colZero[c] = True

    for r in range(m):
        for c in range(n):
            if rowZero[r] or colZero[c]:
                matrix[r][c] = 0
```

---

# Scene 08 — Why Method 2 Can Improve → Derive O(1) Space

`rowZero` needs one marker for every row.

That is `m` cells.

`colZero` needs one marker for every column.

That is `n` cells.

But our matrix already has something interesting.

The first column already has one cell for every row.

And the first row already has one cell for every column.

So instead of creating two new arrays...

what if we reuse those cells?

The first column can store row markers.

And the first row can store column markers.

For an interior zero at row `r`, column `c`...

we can write zero at:

`matrix[r][0]`...

to mark the row.

And:

`matrix[0][c]`...

to mark the column.

That removes the external marker arrays.

But there is one problem.

The first row and first column are still real data.

If we start using them as memory...

we may destroy information about whether they originally contained a zero.

And the corner cell...

`matrix[0][0]`...

belongs to both boundaries.

Once we reuse that boundary storage...

one cell cannot independently preserve both original boundary facts.

So before we reuse the boundaries...

we save those two facts separately.

Did the original first row contain a zero?

Store that in `firstRowZero`.

Did the original first column contain a zero?

Store that in `firstColZero`.

Now the boundary history is safe.

And the matrix can become its own marker memory.

---

# Scene 09 — Method 3 Idea: The Matrix Becomes Its Own Memory

This is the key idea of the optimal solution.

We have already protected the original first-row and first-column state.

From this point...

their job changes.

The first column becomes row-marker memory.

The first row becomes column-marker memory.

Now scan only the interior.

Suppose we find an interior zero at row `r`, column `c`.

We do not zero the complete row immediately.

We send information outward.

Write zero at the first cell of that row.

That means:

this row must become zero later.

Then write zero at the top cell of that column.

That means:

this column must become zero later.

So an interior zero projects its information to the boundary.

After the discovery pass...

the boundary contains everything we need.

Then the direction reverses.

Each interior cell asks two questions.

Is my row marker zero?

Or...

is my column marker zero?

If either answer is yes...

the cell becomes zero.

Once the interior is finished...

the boundary has completed its marker job.

Then we use the two saved booleans...

to finalize the first row...

and the first column.

So the information flow is:

save the boundary history...

send zero information out to the boundary...

use the boundary to update the interior...

then finalize the boundary using the saved flags.

Now let’s execute that on our master matrix.

---

# Scene 10 — Method 3 Full Verified Trace

Start with our original matrix...


First, inspect the first row.

One is not zero.

Two is not zero.

Then we reach zero at column two.

So:

`firstRowZero` becomes true.

That fact is now safe.

Next, inspect the first column.

One is not zero.

Six is not zero.

Then we reach zero at row two.

So:

`firstColZero` becomes true.

Now both boundary facts are protected.

We can use the first row and first column as marker memory.

Scan only the interior.

Row one has:

seven... eight... nine... ten.

No zero.

No marker changes.

Row two has:

twelve... thirteen... fourteen... fifteen.

Again, no interior zero.

But notice...

its first-column cell is already zero from the original input.

So row two is already marked naturally.

Now row three.

Seventeen...

eighteen...

then zero at row three, column three.

This is our important interior zero.

Mark its row.

`matrix[3][0]` changes from sixteen...

to zero.

Then mark its column.

`matrix[0][3]` changes from four...

to zero.

The zero at row three, column three has now sent its information to the boundary.

Continue the scan.

Twenty is not zero.

Row four has no interior zero...

so there are no more marker writes.

Our marker matrix is now:

one... two... zero... zero... five.

Six... seven... eight... nine... ten.

Zero... twelve... thirteen... fourteen... fifteen.

Zero... seventeen... eighteen... zero... twenty.

Twenty-one... twenty-two... twenty-three... twenty-four... twenty-five.

Now read the boundary as memory.

In the first column...

row one has six.

So row one itself is not marked.

Row two has zero.

So row two must become zero.

Row three has zero.

So row three must become zero.

Row four has twenty-one.

So row four itself is not marked.

Across the first row...

column one has two.

Keep that column.

Column two has zero.

Zero that column.

Column three has zero.

Zero that column.

Column four has five.

Keep that column.

Now apply those markers to the interior.

Start with row one.

At row one, column one...

the row marker is six...

and the column marker is two.

Neither is zero.

So seven stays.

At column two...

the top marker is zero.

So eight becomes zero.

At column three...

the top marker is also zero.

So nine becomes zero.

At column four...

neither marker is zero.

So ten stays.

Row two is easier.

Its row marker is zero.

So every interior cell in row two becomes zero.

Row three is also marked.

So every interior cell in row three becomes zero.

Now row four.

Its row marker is not zero.

Column one is not marked...

so twenty-two stays.

Column two is marked...

so twenty-three becomes zero.

Column three is marked...

so twenty-four becomes zero.

Column four is not marked...

so twenty-five stays.

The interior is finished.

At this point the matrix is:

one... two... zero... zero... five.

Six... seven... zero... zero... ten.

Zero... zero... zero... zero... zero.

Zero... zero... zero... zero... zero.

Twenty-one... twenty-two... zero... zero... twenty-five.

Now the marker job is done.

Bring back the saved first-row fact.

`firstRowZero` is true.

So the complete first row becomes zero.

Then bring back the first-column fact.

`firstColZero` is also true.

So the complete first column becomes zero.

Our final matrix is:

zero... zero... zero... zero... zero.

zero... seven... zero... zero... ten.

zero... zero... zero... zero... zero.

zero... zero... zero... zero... zero.

zero... twenty-two... zero... zero... twenty-five.

That is the correct result...

using constant extra space.

---

# Scene 11 — Method 3 Optimal Code

Now let’s write the optimal solution carefully.

First...

store the number of rows in `m`...

and the number of columns in `n`.

Create two booleans.

`firstRowZero` starts as false.

`firstColZero` starts as false.

Before we use the boundary as marker memory...

save its original state.

Scan the first row.

If any cell is zero...

set `firstRowZero` to true.

Then scan the first column.

If any cell is zero...

set `firstColZero` to true.

Now the boundary history is protected.

Next, scan only the interior.

Start rows from one...

and columns from one.

Whenever `matrix[r][c]` is zero...

write zero into `matrix[r][0]`.

That marks the row.

Then write zero into `matrix[0][c]`.

That marks the column.

After this pass...

the first row and first column are our marker arrays.

Now apply the markers.

Again, scan only the interior.

For each cell...

if `matrix[r][0]` is zero...

or `matrix[0][c]` is zero...

set `matrix[r][c]` to zero.

At this point...

the interior is final.

Only the boundary remains.

If `firstRowZero` is true...

zero every cell in row zero.

And if `firstColZero` is true...

zero every cell in column zero.

That is the complete optimal solution.

Notice the order.

Save boundary history...

mark the interior...

apply those markers...

then finalize the boundary.

If we change that order carelessly...

we can destroy our own marker information.

---

## Code target — not spoken

```python
def setZeroes(matrix):
    m = len(matrix)
    n = len(matrix[0])

    firstRowZero = False
    firstColZero = False

    for c in range(n):
        if matrix[0][c] == 0:
            firstRowZero = True

    for r in range(m):
        if matrix[r][0] == 0:
            firstColZero = True

    for r in range(1, m):
        for c in range(1, n):
            if matrix[r][c] == 0:
                matrix[r][0] = 0
                matrix[0][c] = 0

    for r in range(1, m):
        for c in range(1, n):
            if matrix[r][0] == 0 or matrix[0][c] == 0:
                matrix[r][c] = 0

    if firstRowZero:
        for c in range(n):
            matrix[0][c] = 0

    if firstColZero:
        for r in range(m):
            matrix[r][0] = 0
```

---

# Scene 12 — Complexity + Common Mistakes + Edge Cases

Now compare the three methods.

Method One keeps a complete copy of the matrix.

That needs `O(m times n)` extra space.

For the exact version we wrote...

suppose there are `z` original zeros.

We scan the matrix once...

and for each of those `z` zeros...

we may walk through one complete row and one complete column.

So the time is:

`O of m times n... plus... z times open bracket m plus n close bracket`.

And in the worst case...

`z` itself can be `m times n`.

So the worst-case time becomes:

`O of m times n times open bracket m plus n close bracket`.

Method Two is much better.

We scan the matrix to build row and column markers...

then scan it again to apply them.

That gives us:

`O(m times n)` time...

and `O(m plus n)` extra space.

The optimal method keeps the same asymptotic time.

We scan the first row...

the first column...

the interior for marker discovery...

the interior again to apply those markers...

and finally the boundaries.

These are sequential passes.

The dominant work is still proportional to the number of cells.

So the time is:

`O(m times n)`.

And apart from loop indices...

we only keep two booleans.

So the extra space is:

`O(1)`.

There are a few mistakes that matter here.

The first one is the most dangerous.

Do not zero rows and columns immediately while you are still discovering original zeros.

A zero created by you must not become a new source.

Second...

save the original first-row and first-column state before using them as markers.

Otherwise you cannot tell whether a boundary zero was original...

or written later as marker information.

Third...

do not try to use `matrix[0][0]` as both independent flags.

The first row and the first column are two different facts.

Fourth...

do not finalize the first row or first column too early.

They are still storing marker information for the interior.

And avoid magic sentinel values.

Valid matrix values can already occupy the allowed integer range...

so we should not assume that some arbitrary sentinel value is guaranteed to be unused.

Now a few edge cases.

If there is no zero...

nothing changes.

If every cell is zero...

the matrix stays all zero.

For a single row...

the same boundary logic still works.

For a single column...

it still works.

For one single cell...

zero stays zero...

and a non-zero value stays unchanged.

A zero at the top-left corner is also handled correctly...

because we saved first-row and first-column state independently.

And multiple interior zeros simply write more row and column markers.

The same invariant continues to work.

---

# Scene 13 — Recap + Transferable Pattern + Roadmap

Let’s recap the evolution.

Method One preserved everything.

We kept a full original copy...

so mutation could never corrupt our source of truth.

Correct...

but expensive in memory.

Method Two asked a better question.

What information do we actually need?

Only which rows...

and which columns...

contained an original zero.

So we compressed the full copy into:

`rowZero`...

and `colZero`.

That reduced the extra space to `O(m plus n)`.

Then came the final observation.

The matrix already contains one cell for every row...

in its first column...

and one cell for every column...

in its first row.

So instead of allocating marker arrays...

we reused the matrix itself.

But reusing storage destroys old information.

That is why we first saved:

`firstRowZero`...

and `firstColZero`.

Then the matrix became its own memory.

This gives us the final complexity:

`O(m times n)` time...

and `O(1)` extra space.

But the most useful lesson is bigger than this one problem.

When an in-place mutation may destroy information that you still need...

first ask:

What information must survive?

Then ask:

Can I preserve only that information...

instead of preserving everything?

And finally...

is there already safe storage inside the input that I can reuse?

That progression...

from full information...

to compressed information...

to reused information...

is the real pattern.

And with that...

Set Matrix Zeroes is complete.

Question thirteen...

done.

Our global progress is now thirteen out of two hundred twenty-seven.

We continue the Arrays and Hashing roadmap...

with question fourteen...

Rotate Image.
