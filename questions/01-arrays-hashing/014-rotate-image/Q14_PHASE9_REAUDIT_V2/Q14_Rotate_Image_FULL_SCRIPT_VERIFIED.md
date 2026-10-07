# Q14 — Rotate Image (LeetCode 48)
## Phase 8 — Verified Narration Script
### Code With Animation · Arrays & Hashing

**Voice:** simple, natural Indian English  
**Delivery:** slow, warm, conversational  
**Pauses:** use `...` as real breathing/comprehension gaps  
**Teaching rule:** explain each idea once, then build on it.  
**Narration density rule:** do not verbally read an entire matrix cell-by-cell; show full matrix states visually and narrate only teaching-relevant values.  
**Algorithm rule:** every trace must match the exact code organization used later.

---

# Scene 01 — Roadmap Resume + Q14 Activation

Welcome back to Code With Animation...

We are continuing our Arrays and Hashing roadmap.

Question thirteen...
Set Matrix Zeroes...
is complete.

Our global progress is now thirteen out of two hundred twenty-seven.

And the next problem is...

Question fourteen...

Rotate Image...

LeetCode forty-eight...

Medium.

This problem is about rotating a square matrix...

ninety degrees clockwise...

in place.

Before we think about code...

we first need to understand exactly where every value should move.

---

# Scene 02 — Understand Rotation + Derive the Coordinate Mapping

We are given an `n` by `n` square matrix.

And we need to rotate it...

ninety degrees clockwise.

For this lesson...

we will use this five by five matrix.

We will use zero-based row and column indices.

Now watch the four corners.

One starts at row zero, column zero.

After a clockwise rotation...

it moves to row zero, column four.

Five starts at row zero, column four...

and moves to row four, column four.

Twenty-five moves to row four, column zero.

And twenty-one moves back to row zero, column zero.

So these four corner values form a cycle.

But we need one rule that works for every cell...

not only the corners.

Take any value at row `r`, column `c`.

After a ninety-degree clockwise rotation...

its new row becomes the old column...

so the new row is `c`.

And its new column becomes...

`n minus one minus r`.

So the complete mapping is:

row `r`, column `c`...

moves to...

row `c`, column `n minus one minus r`.

For our five by five matrix...

that becomes:

row `r`, column `c`...

moves to...

row `c`, column `four minus r`.

Let’s check one interior value.

Eight is at row one, column two.

So it moves to...

row two...

column three.

And the center value...

thirteen...

is at row two, column two.

It maps back to row two, column two.

So in an odd-sized matrix...

the exact center stays where it is.

Now we know the destination of every value.

The next question is...

how should we actually move them?

Let’s start with the most direct method.

---

# Scene 03 — Method 1 Trace: Extra Destination Matrix

The easiest idea is...

create another matrix of the same size.

Keep the original matrix unchanged...

and write every value directly into its rotated destination.

Our mapping is:

row `r`, column `c`...

goes to...

row `c`, column `n minus one minus r`.

Let’s trace a few values first.

One is at row zero, column zero.

Its destination is...

row zero, column four.

So we place one there in the result matrix.

Now take eight.

Eight is at row one, column two.

Its destination is...

row two, column three.

So eight goes there.

Now take thirteen.

Thirteen is at row two, column two.

Its destination is still...

row two, column two.

So the center stays fixed.

And seventeen...

at row three, column one...

moves to row one, column one.

The rule is always the same.

Read one value from the source matrix...

calculate its rotated coordinate...

and write it into the result matrix.

Now let’s complete the pattern row by row.

When we process the first source row...

one, two, three, four, five...

those values fill the last column of the result.

Then the second source row...

six, seven, eight, nine, ten...

fills the next column.

The middle source row...

fills the middle column.

Then row three fills column one.

And the last source row...

fills column zero.

The completed result now looks like this.

So the rotation is correct.

And because we used separate storage...

we never had to worry about overwriting a value before using it.

But we created another complete matrix.

Let’s write this exact idea in code.

---

# Scene 04 — Method 1 Code

First...

store `n`...

the size of the matrix.

Then create a new `n` by `n` result matrix.

Now scan every source row...

and every source column.

For the current value at `matrix[r][c]`...

write it into:

`result[c][n minus one minus r]`.

That single line is the coordinate mapping we just traced.

The source matrix stays unchanged...

while the result matrix is being built.

After every value reaches its destination...

copy the result matrix back into the original matrix.

That gives the correct rotation.

The code is very easy to reason about...

because every source value has its own safe destination.

But the extra result matrix contains `n` times `n` cells.

So this method uses `O of n squared` extra space.

The problem asks us to rotate the matrix in place.

So now we need to remove that extra matrix.

---

## Code target — not spoken

```python
def rotateExtra(matrix):
    n = len(matrix)
    result = [[0] * n for _ in range(n)]

    for r in range(n):
        for c in range(n):
            result[c][n - 1 - r] = matrix[r][c]

    for r in range(n):
        for c in range(n):
            matrix[r][c] = result[r][c]
```

---

# Scene 05 — Why Extra Space Is Not Enough → Derive In-Place Movement

Method One is correct.

The problem is not the answer.

The problem is the extra memory.

We created another complete `n` by `n` matrix...

only so that values would not overwrite each other.

So let’s remove that safety net.

Suppose we try to move values directly inside the original matrix.

Look at the first corner.

One needs to move into the current position of five.

But if we immediately write one there...

the old value five disappears.

And we still need five...

because five must move to another position.

So direct movement creates an overwrite problem.

The values are not moving independently.

They are connected.

One moves to the position of five...

five moves to the position of twenty-five...

twenty-five moves to the position of twenty-one...

and twenty-one moves to the original position of one.

That means these four positions form one closed cycle.

So instead of moving one value and losing another...

we can rotate all four connected values together.

We only need to save one value temporarily.

That gives us an in-place solution.

Let’s trace it carefully.

---

# Scene 06 — Method 2 Trace: Four-Way Cyclic Layer Swap

Now we work with only one matrix.

Think of the matrix as layers.

For our five by five matrix...

the outside border is the first layer.

Inside that...

the three by three border is the second layer.

And the center cell stays fixed.

Let’s start with the outer layer.

Our first four connected positions contain:

top... one.

Right... five.

Bottom... twenty-five.

Left... twenty-one.

Clockwise movement means:

top goes to right...

right goes to bottom...

bottom goes to left...

and left goes to top.

But we cannot write top into right first...

because that would destroy the old right value.

So save the top value.

Save one in a temporary variable.

Now move twenty-one...

from left to top.

Move twenty-five...

from bottom to left.

Move five...

from right to bottom.

And finally...

move the saved value one...

into the right position.

The first four-way cycle is complete.

Now the four corner positions are correct.

The same rule continues across the outer layer.

The next cycle uses:

two... ten... twenty-four... sixteen.

Save two.

Sixteen moves to the top.

Twenty-four moves to the left.

Ten moves to the bottom.

And saved two moves to the right.

Next cycle:

three... fifteen... twenty-three... eleven.

Save three.

Eleven moves to the top.

Twenty-three moves to the left.

Fifteen moves to the bottom.

And three moves to the right.

One more outer cycle:

four... twenty... twenty-two... six.

Save four.

Six moves to the top.

Twenty-two moves to the left.

Twenty moves to the bottom.

And four moves to the right.

Now the complete outer layer is finished.

Its values are in their final rotated positions.

So we do not touch that layer again.

Move one layer inward.

The inner layer contains two more four-way cycles.

The first one uses:

seven... nine... nineteen... seventeen.

Save seven.

Seventeen moves to the top.

Nineteen moves to the left.

Nine moves to the bottom.

And seven moves to the right.

The last cycle uses:

eight... fourteen... eighteen... twelve.

Save eight.

Twelve moves to the top.

Eighteen moves to the left.

Fourteen moves to the bottom.

And eight moves to the right.

Now the inner layer is also complete.

The center value thirteen was never moved.

And the final matrix now looks like this.

So we rotated the matrix completely in place.

The important invariant is:

finish one four-position cycle safely...

finish the complete layer...

then move inward.

Now let’s write the same cycle logic in code.

---

# Scene 07 — Method 2 Code

First...

store `n`.

Then process only half the number of layers.

For each layer...

`first` is the layer index.

And `last` is...

`n minus one minus layer`.

Now move across the top side of this layer.

We stop before `last`...

because the last position belongs to the same cycle as the first one.

For the current position `i`...

calculate:

`offset equals i minus first`.

Now we know the four connected coordinates.

Top is:

`first, i`.

Right is:

`i, last`.

Bottom is:

`last, last minus offset`.

And left is:

`last minus offset, first`.

Now save the top value.

Then move left into top.

Move bottom into left.

Move right into bottom.

And move the saved top into right.

That completes one four-way cycle.

The inner loop continues until the current layer is complete.

Then the outer loop moves one layer inward.

For an odd-sized matrix...

the center is never part of a four-way cycle...

so it stays untouched automatically.

This solution uses only one temporary value.

So the extra space is constant.

And every matrix position participates in only a constant amount of work.

So the total time is `O of n squared`...

with `O of one` extra space.

This is already an optimal in-place solution.

But there is another way to reach the same rotation...

with simpler transformations.

---

## Code target — not spoken

```python
def rotateCycles(matrix):
    n = len(matrix)

    for layer in range(n // 2):
        first = layer
        last = n - 1 - layer

        for i in range(first, last):
            offset = i - first

            top = matrix[first][i]

            matrix[first][i] = matrix[last - offset][first]
            matrix[last - offset][first] = matrix[last][last - offset]
            matrix[last][last - offset] = matrix[i][last]
            matrix[i][last] = top
```

---

# Scene 08 — Method 2 Is Already Optimal → Derive a Simpler Transformation View

Before we continue...

notice something important.

Method Two is not a failed solution.

Its time is already `O of n squared`.

Its extra space is already `O of one`.

So asymptotically...

we do not need a faster method.

The challenge is different.

The direct cycle solution needs several index relationships:

first...

last...

offset...

top...

right...

bottom...

left.

They are correct...

but they are easy to mix up.

So let’s return to the mathematical mapping.

A value at row `r`, column `c`...

must finally reach:

row `c`...

column `n minus one minus r`.

Instead of performing that complete movement in one step...

can we split it into two simpler transformations?

Yes.

First...

we can swap rows and columns.

Then...

we can flip the remaining horizontal direction.

That gives us the third method.

---

# Scene 09 — Method 3 Idea: Decompose the Mapping

Start again with one coordinate.

A value is at:

row `r`, column `c`.

Its final clockwise destination is:

row `c`...

column `n minus one minus r`.

Now break that movement into two steps.

First...

transpose the matrix.

Transpose changes:

row `r`, column `c`...

into:

row `c`, column `r`.

So the row is already correct.

Only the column is still wrong.

We need the column to become:

`n minus one minus r`.

How do we change column `r`...

into column `n minus one minus r`...

while staying in the same row?

Reverse that row.

So after transpose:

`r, c` becomes `c, r`.

And after reversing the row:

`c, r` becomes...

`c, n minus one minus r`.

That is exactly the clockwise mapping.

Let’s verify it with eight.

Eight starts at:

row one, column two.

After transpose...

it moves to row two, column one.

Then we reverse row two.

Column one becomes column three.

So eight finishes at:

row two, column three.

That is exactly where the direct rotation mapping sends it.

So:

transpose...

then reverse every row...

is not a memorized trick.

It is simply the clockwise coordinate mapping...

broken into two easier transformations.

Now let’s execute both transformations on the full matrix.

---

# Scene 10 — Method 3 Full Verified Trace

Start again from our original matrix.

First step...

transpose it across the main diagonal.

That means:

`matrix[r][c]` swaps with `matrix[c][r]`.

But we must process each pair only once.

So we only swap cells above the main diagonal.

Let’s execute the swaps.

Two swaps with six.

Three swaps with eleven.

Four swaps with sixteen.

Five swaps with twenty-one.

Now move to the next row above the diagonal.

Eight swaps with twelve.

Nine swaps with seventeen.

Ten swaps with twenty-two.

Next:

fourteen swaps with eighteen.

Fifteen swaps with twenty-three.

And finally:

twenty swaps with twenty-four.

The transpose is complete.

The transposed matrix now looks like this.

Notice what happened.

The original columns became rows.

Now perform the second transformation.

Reverse every row.

Watch row zero.

Its order flips from left to right.

Now apply the same reversal to every remaining row.

The final matrix now looks like this.

The final matrix is exactly the ninety-degree clockwise rotation.

And we achieved it in place...

using two simple transformations:

transpose...

then reverse every row.

---

# Scene 11 — Method 3 Optimal Code

Now let’s translate that proof directly into code.

First...

store `n`.

Then transpose the matrix.

For every row `r`...

start column `c` from...

`r plus one`.

This is important.

We only want cells above the main diagonal.

If we started from column zero every time...

we would eventually swap the same pair twice...

and undo our own work.

So for each pair above the diagonal...

swap:

`matrix[r][c]`

with:

`matrix[c][r]`.

When these loops finish...

the matrix is fully transposed.

Now the second step is very small.

For every row in the matrix...

reverse that row.

That is the whole optimal solution.

The code mirrors the proof exactly:

transpose...

then reverse rows.

The transpose takes `O of n squared` time.

Reversing all rows also takes `O of n squared` time overall.

So the total is still:

`O of n squared`.

And we only use a constant amount of extra memory.

So the extra space is:

`O of one`.

---

## Code target — not spoken

```python
def rotate(matrix):
    n = len(matrix)

    for r in range(n):
        for c in range(r + 1, n):
            matrix[r][c], matrix[c][r] = matrix[c][r], matrix[r][c]

    for row in matrix:
        row.reverse()
```

---

# Scene 12 — Complexity + Mistakes + Edge Cases

Let’s compare all three methods clearly.

Method One uses another complete matrix.

We visit the matrix cells...

and we store another `n` by `n` matrix.

So:

time is `O of n squared`...

and extra space is `O of n squared`.

Method Two rotates values directly in four-way cycles.

Each cycle does constant work...

and together the layers cover the matrix.

So:

time is `O of n squared`...

and extra space is `O of one`.

Method Three does two transformations.

Transpose takes `O of n squared`.

Reversing all rows takes `O of n squared`.

Adding them still gives:

`O of n squared`.

And because both operations happen in place...

extra space is `O of one`.

Now let’s look at the mistakes that usually break this problem.

First mistake...

transpose the matrix...

then reverse the columns.

That does not give the clockwise rotation we want.

After transpose...

for clockwise rotation...

we reverse each row.

Second mistake...

during transpose...

swap every pair from both sides of the diagonal.

For example...

if you swap row zero, column one...

with row one, column zero...

and later swap the same pair again...

you return them to the original positions.

So process only one side of the diagonal.

That is why column starts from...

`r plus one`.

Third mistake...

in the four-way method...

move one value before saving the value it will overwrite.

Once that old value is destroyed...

the cycle cannot be completed correctly.

So save one value first.

Fourth mistake...

process the layer through the `last` position.

The loop must stop before `last`...

because the last top position belongs to a cycle that already starts from the first side.

And one more useful edge case...

an odd-sized matrix has a center cell.

That center maps back to itself.

So we do not need a special movement for it.

A one by one matrix also stays unchanged.

A two by two matrix uses one four-way cycle.

Negative numbers...

duplicate numbers...

or repeated values...

do not change the algorithm.

We used unique numbers only because they make the movement easier to see.

---

# Scene 13 — Recap + Transferable Pattern + Roadmap

Let’s compress the full lesson.

We started with the coordinate truth.

A value at:

row `r`, column `c`...

moves to:

row `c`...

column `n minus one minus r`.

Method One used that destination directly.

Read from the original...

write into another matrix.

Simple...

but it uses `O of n squared` extra space.

Method Two removed the extra matrix.

Values connected by the rotation mapping form four-position cycles.

Save one value...

rotate the other three...

restore the saved value...

finish the layer...

then move inward.

That gives:

`O of n squared` time...

and `O of one` extra space.

Method Three looked at the same coordinate mapping differently.

Instead of one complicated movement...

split it into two simple transformations.

Transpose...

then reverse every row.

That also gives:

`O of n squared` time...

and `O of one` extra space.

The bigger pattern is important.

When a matrix transformation looks complicated...

first write the coordinate mapping.

That mapping may reveal...

a cycle...

a symmetry...

or a sequence of simpler transformations.

Now Question Fourteen...

Rotate Image...

is complete.

Our global progress moves from...

thirteen out of two hundred twenty-seven...

to...

fourteen out of two hundred twenty-seven.

And next in Arrays and Hashing...

Question fifteen...

Spiral Matrix.

That is up next.
