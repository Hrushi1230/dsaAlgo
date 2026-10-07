# Q14 — Rotate Image · LeetCode 48

## Full Refined Narration Script

### Code With Animation · Arrays & Hashing

**Voice:** simple, natural Indian English  
**Delivery:** slow, warm, conversational  
**Pauses:** `...` means a real comprehension pause  
**Teaching rule:** explain an idea fully once... then build on it  
**Trace rule:** every important movement must match the code exactly  
**Visual rule:** show complete matrix states visually... but do not read every matrix cell aloud unnecessarily

---

# Scene 01 — Roadmap Resume + Q14 Activation

Welcome back to Code With Animation...

We are continuing our...

Arrays and Hashing roadmap.

Question thirteen...

Set Matrix Zeroes...

is complete.

Our progress is now...

thirteen out of two hundred twenty-seven.

And next...

we have Question Fourteen...

Rotate Image...

LeetCode forty-eight...

Medium...

This problem is about rotating a square matrix...

---

# Scene 02 — Understand the Rotation + Coordinate Mapping

We are given an...

`n` by `n`...

square matrix.

For this lesson...

we will use a...

five by five matrix.

And we will use...

zero-based...

row and column indices.

First...

just watch the four corners.

One starts at...

row zero...

column zero.

After a ninety-degree clockwise rotation...

one moves to...

row zero...

column four.

Now five...

starts at...

row zero...

column four.

After rotation...

five moves to...

row four...

column four.

Twenty-five...

moves from the bottom-right...

to the bottom-left.

And twenty-one...

moves from the bottom-left...

back to the top-left.

So these four corner values...

form one rotation cycle.

But we need a rule...

that works for...

every cell in the matrix...

not only the corners.

Take any value...

at row `r`...

column `c`.

After a ninety-degree clockwise rotation...

its new row...

becomes the old column.

So...

new row is...

`c`.

And the new column...

becomes...

`n minus one minus r`.

So our complete coordinate mapping is...

row `r`...

column `c`...

moves to...

row `c`...

column...

`n minus one minus r`.

For our five by five matrix...

`n minus one`...

is four.

So here...

row `r`, column `c`...

moves to...

row `c`...

column...

`four minus r`.

Let’s verify this...

with an interior value.

Eight is at...

row one...

column two.

Its new row becomes...

two.

And its new column becomes...

four minus one...

which is three.

So eight moves to...

row two...

column three.

Good.

Now look at the center.

Thirteen is at...

row two...

column two.

Its new position becomes...

row two...

column...

four minus two...

which is also two.

So thirteen...

maps back to itself.

That is why...

in an odd-sized matrix...

the exact center does not move.

Now we know...

where every value belongs.

The next question is...

how should we actually move them?

Let’s start...

with the most direct method.

---

# Scene 03 — Method 1 Trace: Extra Destination Matrix

The easiest approach is...

create another matrix...

of the same size.

We keep the original matrix unchanged...

and place every value...

directly into its rotated destination.

We already know the mapping...

`r, c`...

goes to...

`c, n minus one minus r`.

So now...

we only need to apply it.

Take one.

One is at...

row zero...

column zero.

Its destination is...

row zero...

column four.

So we place one there...

in the result matrix.

Now take eight.

Eight is at...

row one...

column two.

Its destination is...

row two...

column three.

So eight goes there.

Now thirteen.

Thirteen is at...

row two...

column two.

Its destination is...

still...

row two...

column two.

So the center stays where it is.

Now seventeen.

Seventeen is at...

row three...

column one.

Its new row becomes...

one.

Its new column becomes...

four minus three...

which is one.

So seventeen moves to...

row one...

column one.

That is the whole idea.

Read a value...

from the source matrix...

calculate its destination...

and write it safely...

into the result matrix.

Now let’s complete the full pattern.

When we process...

the first source row...

one...

two...

three...

four...

five...

those values...

become the last column...

of the rotated matrix.

The second source row...

six...

seven...

eight...

nine...

ten...

becomes the next column.

The middle source row...

becomes the middle column.

Then source row three...

becomes column one.

And the final source row...

becomes column zero.

Once every source position...

has been processed...

the result matrix...

is the correct...

ninety-degree clockwise rotation.

And because the source and destination...

are different matrices...

we never destroy a value...

before using it.

That makes this method...

very easy to reason about.

But there is one problem.

We created...

another complete...

`n` by `n` matrix.

Now let’s translate...

this exact idea...

into code.

---

# Scene 04 — Method 1 Code

First...

store `n`...

the size of the matrix.

Then create...

a new...

`n` by `n`...

result matrix.

Now loop through...

every source row `r`...

and every source column `c`.

For the current value...

`matrix[r][c]`...

write it into...

`result[c][n minus one minus r]`.

This line...

directly implements...

the coordinate mapping...

we already proved.

We continue...

until every source cell...

has been placed.

Then...

copy the completed result...

back into the original matrix.

So the final answer...

is correct.

Now complexity.

We process...

`n` times `n` cells.

So the time complexity is...

`O of n squared`.

But the result matrix...

also contains...

`n` times `n` cells.

So the extra space is...

`O of n squared`.

And the problem specifically asks...

for an in-place rotation.

So...

we need to remove...

that extra matrix.

---

## Code Target — Not Spoken

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

# Scene 05 — Why In-Place Rotation Is Harder

The only thing stopping Method One...

from being in place...

is the extra matrix.

So...

what happens...

if we remove it?

Suppose we try to move values...

directly inside...

the original matrix.

Look at the first corner.

One needs to move...

into the current position of five.

But if we immediately write...

one...

over five...

the old value five...

disappears.

And we still need five...

because five must move...

to another position.

So this creates...

an overwrite problem.

The values are not moving...

independently.

They are connected.

One moves...

to the position of five.

Five moves...

to the position of twenty-five.

Twenty-five moves...

to the position of twenty-one.

And twenty-one moves...

back to the original position of one.

So these four positions...

form a closed cycle.

That gives us the solution.

Instead of moving...

one value alone...

we rotate...

all four connected values...

together.

And to prevent data loss...

we only need to save...

one value temporarily.

Now let’s trace...

the complete in-place rotation.

---

# Scene 06 — Method 2 Trace: Four-Way Cyclic Layer Swap

Now...

we use only...

the original matrix.

Think of the matrix...

as layers.

For our five by five matrix...

the outside border...

is the first layer.

Inside that...

the three by three border...

is the second layer.

And the center...

is left alone.

Let’s begin...

with the outer layer.

---

## Outer Layer — Cycle One

The first four connected positions contain...

top...

one.

Right...

five.

Bottom...

twenty-five.

Left...

twenty-one.

For clockwise rotation...

top must go to right.

Right must go to bottom.

Bottom must go to left.

And left must go to top.

But we cannot...

write top into right first...

because we would destroy...

the old right value.

So...

save the top value.

Save...

one.

Now move...

twenty-one...

from left...

into top.

Then move...

twenty-five...

from bottom...

into left.

Then move...

five...

from right...

into bottom.

And finally...

move the saved value...

one...

into right.

The first four-position cycle...

is complete.

The four corners...

are now in their final rotated positions.

---

## Outer Layer — Cycle Two

Move one position...

to the right...

along the top edge.

The next connected values are...

two...

ten...

twenty-four...

sixteen.

Save...

two.

Sixteen...

moves from left...

into top.

Twenty-four...

moves from bottom...

into left.

Ten...

moves from right...

into bottom.

And saved two...

moves into right.

Second cycle...

complete.

---

## Outer Layer — Cycle Three

Move one more position.

Now the connected values are...

three...

fifteen...

twenty-three...

eleven.

Save...

three.

Eleven...

moves into top.

Twenty-three...

moves into left.

Fifteen...

moves into bottom.

And saved three...

moves into right.

Third cycle...

complete.

---

## Outer Layer — Cycle Four

One final cycle...

for the outer layer.

The connected values are...

four...

twenty...

twenty-two...

six.

Save...

four.

Six...

moves into top.

Twenty-two...

moves into left.

Twenty...

moves into bottom.

And saved four...

moves into right.

Now...

the entire outer layer...

is complete.

Every value on this border...

is already...

in its final rotated position.

So we do not touch...

this layer again.

Now...

move one layer inward.

---

## Inner Layer — Cycle One

The inner layer...

is a three by three border.

Its first connected values are...

seven...

nine...

nineteen...

seventeen.

Save...

seven.

Seventeen...

moves into top.

Nineteen...

moves into left.

Nine...

moves into bottom.

And saved seven...

moves into right.

First inner cycle...

complete.

---

## Inner Layer — Cycle Two

Now the final four-position cycle.

The values are...

eight...

fourteen...

eighteen...

twelve.

Save...

eight.

Twelve...

moves into top.

Eighteen...

moves into left.

Fourteen...

moves into bottom.

And saved eight...

moves into right.

The inner layer...

is now complete.

And thirteen...

the center value...

was never part...

of any four-position cycle.

So it remained...

exactly where it started.

The entire matrix...

has now been rotated...

ninety degrees clockwise...

without creating...

another matrix.

The pattern is:

finish one four-position cycle safely...

continue across the layer...

finish the complete layer...

then move inward.

Now let’s translate...

that exact movement...

into code.

---

# Scene 07 — Method 2 Code

First...

store `n`.

Now...

how many layers...

do we need to process?

Only...

half of them.

So our outer loop runs...

`n divided by two`...

using integer division.

For each layer...

`first`...

is the layer index.

And `last`...

is...

`n minus one minus layer`.

For the outermost layer...

`first` is zero...

and `last` is...

`n minus one`.

For the next layer...

`first` moves inward...

and `last` also moves inward.

Now...

inside the current layer...

we move across...

the top edge.

The loop starts at...

`first`...

and stops...

before `last`.

We stop before `last`...

because the final top position...

already belongs...

to the cycle that begins...

from the first side.

For the current position `i`...

calculate...

`offset equals i minus first`.

This offset tells us...

how far we have moved...

from the beginning of the layer.

Using `first`...

`last`...

and `offset`...

we can identify...

the four connected coordinates.

Top is...

`first, i`.

Right is...

`i, last`.

Bottom is...

`last, last minus offset`.

And left is...

`last minus offset, first`.

Now perform...

the same movement...

we traced visually.

First...

save the top value.

Then...

left goes into top.

Bottom goes into left.

Right goes into bottom.

And the saved top...

goes into right.

One four-way cycle...

is complete.

The inner loop...

continues...

until the entire layer...

is finished.

Then the outer loop...

moves one layer inward.

For an odd-sized matrix...

the center is never selected...

by these four-way cycles.

So it stays untouched...

automatically.

This method uses...

only one temporary value...

for each cycle.

So the extra space is...

`O of one`.

And across all layers...

the matrix contains...

`n squared` positions...

with only constant work...

for each group of positions.

So the total time is...

`O of n squared`.

And extra space...

`O of one`.

So Method Two...

already gives us...

an optimal in-place solution.

But there is another way...

to express the same rotation...

using much simpler transformations.

---

## Code Target — Not Spoken

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

# Scene 08 — From Correct In-Place Logic to Simpler Logic

Method Two...

is already optimal.

So we are not looking...

for a better...

time complexity.

The issue now...

is readability.

The four-way cycle...

needs several related indices.

`first`...

`last`...

`offset`...

top...

right...

bottom...

left.

The logic is correct...

but these index relationships...

can be easy to mix up...

especially in an interview.

So instead of inventing...

another movement rule...

let’s return to...

the coordinate mapping...

we already proved.

Our final destination is...

`c, n minus one minus r`.

The question is...

can we reach that destination...

using two...

simpler transformations?

Yes.

And that gives us...

Method Three.

---

# Scene 09 — Method 3 Idea: Decompose the Coordinate Mapping

Now let’s find...

a simpler way...

to perform the same rotation.

We already know...

the final coordinate mapping.

A value at...

row r...

column c...

must end at...

row c...

column n minus one minus r.

Instead of doing...

that complete movement...

directly...

we can split it...

into two simple transformations.

First...

transpose the matrix.

Transpose swaps...

rows and columns.

So...

r, c...

becomes...

c, r.

Now notice...

the row is already correct.

We only need...

to fix the column.

So the second step is...

reverse every row.

That changes...

column r...

into...

column n minus one minus r.

So together...

transpose changes...

r, c...

into...

c, r.

And reversing the row...

changes it into...

c, n minus one minus r.

Which is exactly...

the coordinate mapping...

for a ninety-degree...

clockwise rotation.

So our plan is simple.

Step one...

transpose the matrix.

Step two...

reverse every row.

Now let’s execute...

these two transformations...

on the full matrix.

---

# Scene 10 — Method 3 Full Trace

Start again...

from the original...

five by five matrix.

The first transformation is...

transpose.

Transpose means...

swap...

`matrix[r][c]`...

with...

`matrix[c][r]`.

Geometrically...

we reflect the matrix...

across the main diagonal.

But each pair...

should be swapped...

only once.

So during the actual algorithm...

we process...

only one side...

of the main diagonal.

Let’s trace...

every required swap.

---

## Transpose — Row Zero

Starting with row zero...

two...

swaps with...

six.

Three...

swaps with...

eleven.

Four...

swaps with...

sixteen.

And five...

swaps with...

twenty-one.

The first set of transpose swaps...

is complete.

---

## Transpose — Row One

Now move...

to row one.

The diagonal value seven...

does not need to move.

Above the diagonal...

eight...

swaps with...

twelve.

Nine...

swaps with...

seventeen.

And ten...

swaps with...

twenty-two.

---

## Transpose — Row Two

Now row two.

Thirteen...

lies on the main diagonal...

so it stays where it is.

Fourteen...

swaps with...

eighteen.

And fifteen...

swaps with...

twenty-three.

---

## Transpose — Row Three

Now row three.

Nineteen...

is on the diagonal.

So the only remaining pair...

above the diagonal...

is...

twenty...

with...

twenty-four.

They swap.

---

## Transpose Complete

Now...

the transpose is complete.

The original columns...

have become rows.

But this is not yet...

the clockwise rotation.

We still need...

the second transformation.

Reverse...

every row.

Take row zero.

Its left-to-right order...

is flipped.

The first value...

moves to the last position.

The second...

moves to the second-last position.

And so on.

Now perform...

the same row reversal...

for row one...

row two...

row three...

and row four.

After every row...

has been reversed...

the final matrix...

is exactly...

the ninety-degree clockwise rotation.

So Method Three...

uses two simple operations.

Transpose...

then...

reverse every row.

And both operations...

happen...

inside the original matrix.

---

# Scene 11 — Method 3 Optimal Code

Now let’s translate...

that proof...

directly into code.

First...

store `n`.

Then...

transpose the matrix.

For each row `r`...

we do not start...

column `c`...

from zero.

Instead...

`c` starts from...

`r plus one`.

Why?

Because we only need...

one side...

of the main diagonal.

Suppose we swapped...

row zero...

column one...

with...

row one...

column zero.

If we later reached...

row one...

column zero...

and swapped them again...

we would undo...

our own work.

So each pair...

must be processed...

exactly once.

That is why...

for row `r`...

column begins at...

`r plus one`.

For each such pair...

swap...

`matrix[r][c]`...

with...

`matrix[c][r]`.

When those loops finish...

the matrix is transposed.

Then...

the second step...

is very small.

For every row...

reverse that row.

That is the complete solution.

Transpose...

then reverse rows.

Now complexity.

The transpose...

processes roughly half...

of the `n` by `n` matrix.

That is still...

`O of n squared`.

Reversing all rows...

also processes...

`n squared` values overall.

So together...

the total time remains...

`O of n squared`.

And because both transformations...

happen inside...

the original matrix...

the extra space is...

`O of one`.

This gives us...

a clean...

optimal...

in-place solution.

---

## Code Target — Not Spoken

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

# Scene 12 — Complexity + Important Mistakes + Edge Cases

Let’s compare...

the three methods...

one final time.

Method One...

uses another...

`n` by `n` matrix.

Time...

`O of n squared`.

Extra space...

`O of n squared`.

Method Two...

rotates four connected values...

directly inside...

the matrix.

Time...

`O of n squared`.

Extra space...

`O of one`.

Method Three...

transposes...

then reverses every row.

Time...

`O of n squared`.

Extra space...

`O of one`.

So both in-place methods...

have the required...

constant extra space.



# Scene 13 — Final Recap + Transferable Pattern + Roadmap

Let’s finish...

with the main idea.

For a...

ninety-degree clockwise rotation...

a value at...

row `r`...

column `c`...

moves to...

row `c`...

column...

`n minus one minus r`.

From that one coordinate truth...

we found...

three different solutions.

Method One...

used the destination directly...

with an extra matrix.

Method Two...

noticed that connected destinations...

form...

four-position cycles.

And Method Three...

split the same mapping...

into two simpler transformations.

Transpose...

then...

reverse every row.

The most important lesson...

is bigger...

than Rotate Image.

When a matrix transformation...

looks confusing...

do not start...

by memorizing code.

First ask...

where should...

one coordinate move?

Once you know...

the coordinate mapping...

it may reveal...

a cycle...

a symmetry...

or a sequence...

of simpler transformations.

That way...

the code comes...

from the logic.

Not from memorization.

Question Fourteen...

Rotate Image...

is complete.

Our global progress...

moves from...

thirteen out of...

two hundred twenty-seven...

to...

fourteen out of...

two hundred twenty-seven.

And next...

in Arrays and Hashing...

Question Fifteen...

Spiral Matrix.

That is...

up next.