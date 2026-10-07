# Q12 — Next Permutation (LC 31)
## Full Narration Script — 10 Scenes

**Voice:** simple natural Indian English  
**Style:** slow, warm, conversational  
**Rule:** explain each idea once; do not repeat unless the later scene needs the fact for a new reason.

---

# Scene 01 — Roadmap Resume + Q12 Activation

Welcome back to Code With Animation...

We are continuing our DSA Pattern Roadmap...

Question eleven...
Sort Colors...
is complete.

Now we move to the next problem...

Question twelve...

Next Permutation...

LeetCode thirty-one...

Medium.

We are still inside Arrays and Hashing.

Let’s understand the question first...

---

# Scene 02 — Question + Understand

Suppose we have some numbers...

and we arrange them in different possible orders.

Each different order is called a permutation.

Now imagine...

all of those permutations are arranged in increasing lexicographical order.

Our job is not to find any bigger arrangement.

We need the very next one.

The smallest permutation...
that is still greater than the current permutation.

For this lesson...
our master array is...

Two... one... five... four... four... three... zero.

We need to transform this same array...

into its next permutation.

And we have to do it in-place.

If a greater permutation does not exist...

then we have to return to the smallest possible arrangement.

So the real question is...

How can we move to the next arrangement...

without generating every permutation?

Before we solve that directly...

let’s first see the obvious approach.

---

# Scene 03 — Method 1: Brute Force Trace

The simplest idea is...

generate every possible permutation.

Then arrange all of them...

in lexicographical order.

After that...

find our current permutation in that list...

and take the one immediately after it.

For a very small array...

this idea is easy to understand.

Suppose we have...

one... two... three.

Its permutations can be arranged like this...

one two three...

one three two...

two one three...

two three one...

three one two...

three two one.

If our current permutation is...

one three two...

then the next one is...

two one three.

So the definition is clear.

Generate everything...

order everything...

find the current arrangement...

then move one step forward.

And if we are already at the last permutation...

we wrap around to the first one.

This works logically.

But there is a serious problem.

The number of permutations grows extremely fast.

So before we accept this method...

let’s see what its code is really doing.

---

# Scene 04 — Method 1: Brute Force Code

Let’s write the brute-force idea...

only to understand its cost.

First...

we generate all permutations of nums.

Because duplicate values can create duplicate permutations...

we keep only unique arrangements.

Then...

we sort those permutations lexicographically.

Now we convert our current array...

into the same comparable form...

and find its position.

The next position is simply...

current index plus one.

And to handle the last permutation...

we take that position modulo the total number of permutations.

Finally...

we copy the selected permutation...

back into the original array.

The code matches the idea exactly.

Generate all possibilities...

sort them...

search for the current one...

and select the next.

For tiny inputs...

this is fine for understanding.

But as a real solution...

this approach becomes expensive very quickly.

Now let’s see why.

---

# Scene 05 — Why Brute Force Fails → Derive the Better Direction

If the array has n distinct values...

the number of possible permutations is n factorial.

Three values give only six permutations.

But factorial growth becomes huge very quickly.

And we would have to store many of those permutations...

so this also breaks the constant-extra-space requirement.

So generating every arrangement...

just to move one step forward...

is doing far too much work.

We already have the current permutation.

We should use its structure.

Think about what "next" really means.

We want the smallest possible change...

that makes the array larger.

If we change something too far to the left...

the jump becomes unnecessarily large.

So we should try to make the change...

as far to the right as possible.

That gives us our first clue.

Look from the right side of the array...

and find the first place...

where a larger arrangement is still possible.

Now we can build the optimal idea carefully.

---

# Scene 06 — Method 2: Optimal Idea

Start from the right side.

We look for the first index i...

where nums at i...

is smaller than nums at i plus one.

Why?

Because everything to the right of that position...

forms a non-increasing suffix.

That suffix is already the largest possible arrangement...

of those suffix values.

So changing only that suffix...

cannot give us a larger permutation.

The first place where we can increase the permutation...

is the pivot.

Now we have to increase that pivot...

but only by the smallest possible amount.

So we search from the right again...

for the first value...

that is strictly greater than the pivot.

Because the suffix is non-increasing...

the first greater value from the right...

is the smallest value that can increase the pivot.

We swap those two values.

Now the permutation is larger.

And after this swap...

the suffix is still non-increasing.

But we still need the very next permutation.

So everything after the pivot...

must become as small as possible.

Because the suffix is non-increasing...

reversing it gives us the smallest possible suffix.

So we do not need to sort it.

We simply reverse it.

So the optimal reasoning is...

find the rightmost place that can increase...

make the smallest possible increase there...

then minimize everything after it.

Now let’s execute that on our master example.

---

# Scene 07 — Method 2: Full Verified Trace

Our array is...

two... one... five... four... four... three... zero.

We start the pivot search from the second-last index.

At index five...

three is smaller than zero?

No.

Move left.

At index four...

four is smaller than three?

No.

Move left.

At index three...

four is smaller than four?

No.

Equal values do not satisfy the condition.

Move left.

At index two...

five is smaller than four?

No.

Move left.

At index one...

one is smaller than five?

Yes.

So index one is our pivot.

The pivot value is one.

Everything after it...

five... four... four... three... zero...

is non-increasing.

Now we find the value that should replace the pivot.

Start from the last index.

Zero is greater than one?

No.

Move left.

Three is greater than one?

Yes.

So index five is our successor.

The successor value is three.

Now swap the pivot and successor.

One swaps with three.

The array becomes...

two... three... five... four... four... one... zero.

Now the permutation is larger...

but the suffix is still as large as possible.

We need the smallest possible suffix.

So reverse everything after the pivot.

Our reverse range is index two to index six.

Swap five and zero.

The array becomes...

two... three... zero... four... four... one... five.

Move inward.

Swap four and one.

The array becomes...

two... three... zero... one... four... four... five.

Now both reverse pointers meet.

We stop.

Our final answer is...

two... three... zero... one... four... four... five.

That is the immediate next permutation.

---

# Scene 08 — Method 2: Optimal Code

Now let’s write the optimal solution.

First...

store the array length in n.

Then set i to n minus two.

We move i left...

while i is valid...

and nums at i is greater than or equal to nums at i plus one.

When this loop stops...

either we found the pivot...

or no pivot exists.

If i is still greater than or equal to zero...

we have a valid pivot.

Now set j to n minus one.

Move j left...

while nums at j is less than or equal to nums at i.

When that loop stops...

j is the first value from the right...

that is strictly greater than the pivot.

Now swap nums at i...

with nums at j.

Next...

set left to i plus one...

and right to n minus one.

While left is smaller than right...

swap nums at left...

with nums at right...

then move left forward...

and right backward.

This reverses the suffix in-place.

If no pivot was found...

i becomes minus one.

Then the swap block is skipped...

and left becomes zero automatically.

So the same reverse loop...

reverses the whole array.

That turns the largest permutation...

into the smallest permutation.

The important part is not memorising these lines.

Each line follows the same reasoning...

find the rightmost place that can increase...

make the smallest increase...

then minimize the suffix.

---

# Scene 09 — Complexity + Common Mistakes + Edge Cases

Now let’s look at the complexity.

The pivot scan moves from right to left.

In the worst case...

it can inspect the whole array.

The successor scan also moves from right to left...

over at most the array length.

And the final reverse...

touches at most the suffix once.

These are separate linear passes.

We do not multiply them.

So the total time complexity is...

O of n.

And we only use a few index variables...

so the extra space is...

O of one.

Now compare that with brute force.

With n distinct values...

there can be n factorial permutations.

Generating and storing all of them is already factorial-scale work...

and sorting them adds even more work.

The optimal method works directly on the current array.

There are a few mistakes to avoid.

For the pivot...

we need a strict increase.

We are looking for...

nums at i smaller than nums at i plus one.

Equal values do not qualify.

For the successor...

we also need a value strictly greater than the pivot.

Equal is not enough.

Another mistake...

is choosing any greater value from the suffix.

We need the smallest possible increase.

That is why we scan from the right.

And after the swap...

reverse from i plus one.

Do not reverse from i.

Now consider a fully decreasing array...

three... two... one.

There is no pivot.

So this is already the largest permutation.

Reverse the whole array...

and we get...

one... two... three.

If the array is already increasing...

like one... two... three...

the pivot is near the right side...

so only a small suffix changes.

For a single value...

there is nothing to change.

And duplicate values are also handled naturally...

because both important comparisons are strict.

No special duplicate case is needed.

---

# Scene 10 — Recap + Transferable Pattern + Roadmap

Let’s recap the full journey.

The brute-force idea was simple...

generate every permutation...

sort them...

find the current one...

and take the next.

But factorial growth makes that approach impractical.

The optimal solution uses the structure of the current permutation.

First...

find the longest non-increasing suffix.

Then find the pivot...

the rightmost position where an increase is possible.

Next...

find the smallest value greater than the pivot...

and swap them.

Finally...

reverse the suffix...

so everything after the pivot becomes as small as possible.

That gives us...

O of n time...

and O of one extra space.

But the bigger lesson is this.

When a problem asks for the next lexicographical arrangement...

do not think about generating every possibility first.

Look for the rightmost position where a valid increase can be made...

make the smallest valid increase...

and minimize everything after it.

That reasoning is the real pattern.

And with that...

Next Permutation is complete.

Question twelve...

done.

We continue our Arrays and Hashing roadmap...

with question thirteen...

Set Matrix Zeroes.
