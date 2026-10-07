# Q11 — Sort Colors (LeetCode 75)
## Code With Animation — Final ElevenLabs Narration Script

**Master example:** `[2, 1, 2, 0, 2, 1, 0, 1, 0, 2]`  
**Expected output:** `[0, 0, 0, 1, 1, 1, 2, 2, 2, 2]`

---

## Scene 01 — Channel + Roadmap Intro

Welcome back to Code With Animation...

We are continuing our DSA Pattern Roadmap...

Two hundred twenty-seven problems...
across nineteen important patterns...

built for serious interview preparation...
from fundamentals...
to FAANG-level problem solving.

Right now...
we are inside Arrays and Hashing.

Question ten...
Longest Consecutive Sequence...
is complete.

Now we move to the next problem...

Question eleven...

Sort Colors...

LeetCode seventy-five...

Medium.

Let’s continue.

---

## Scene 02 — Question + Understand

Now let’s understand the question...

We are given an array...

and every value is only one of these three numbers...

zero...
one...
or two.

Our job is to arrange the same array...

so that all zeroes come first...

then all ones...

and finally all twos.

For this lesson...
we will use one master example.

Two... one... two... zero... two... one... zero... one... zero... two.

We want this array to become...

zero... zero... zero...
one... one... one...
two... two... two... two.

There are two important conditions.

First...

we have to modify the same array.

Second...

we should not use a built-in sorting function.

And then comes the follow-up...

Can we solve it in one pass...

using constant extra space?

That is the real challenge of this problem.

One more important observation...

the array can contain only three possible values.

That small detail...

is the main clue.

Now we can start with the simpler approach first...

---

## Scene 03 — Counting Trace

Let’s start with the simpler approach...

Counting.

Our array is...

Two... one... two... zero... two... one... zero... one... zero... two.

Instead of moving values immediately...

we will first count...

how many zeroes...

how many ones...

and how many twos we have.

We start with all three counts at zero.

First value is two...

so count of two becomes one.

Next value is one...

count of one becomes one.

Next value is two...

count of two becomes two.

Now we see zero...

count of zero becomes one.

Next value is two...

count of two becomes three.

Next value is one...

count of one becomes two.

Next value is zero...

count of zero becomes two.

Next value is one...

count of one becomes three.

Next value is zero...

count of zero becomes three.

And the last value is two...

count of two becomes four.

So finally...

we have three zeroes...

three ones...

and four twos.

Now we use these counts...

to rewrite the same array.

First...

write three zeroes.

Then...

write three ones.

And finally...

write four twos.

Now the array becomes...

zero... zero... zero...

one... one... one...

two... two... two... two.

So the array is correctly sorted.

The idea is simple...

first count...

then rewrite.

---

## Scene 04 — Counting Code

Now let’s convert that counting idea into code...

We need three counters...

count zero...

count one...

and count two.

Initially...

all three are zero.

Then we scan the array once.

If the current value is zero...

increase count zero.

If it is one...

increase count one.

Otherwise...

it must be two...

so increase count two.

After this first pass...

we know exactly...

how many zeroes...

how many ones...

and how many twos are present.

Now we rewrite the same array.

Start from index zero.

First...

write zero...

count zero times.

Then...

write one...

count one times.

And finally...

write two...

count two times.

That gives us the sorted array.

For our example...

count zero is three...

count one is three...

and count two is four.

So we write...

three zeroes...

three ones...

and four twos.

The code is simple...

one pass to count...

and one pass to rewrite.

---

## Scene 05 — Why Counting Is Not the Final Approach

Counting is already a good solution...

It runs in linear time...

and it uses only constant extra space.

So what is still missing?

The follow-up asks for one pass.

But counting needs two separate passes.

In the first pass...

we only learn the frequencies.

How many zeroes...

how many ones...

and how many twos.

At that point...

the array is still not arranged.

Then we need another pass...

to rewrite the array...

using those counts.

So the problem is not the time complexity.

O of n is already good.

The limitation is...

we first collect information...

and only later place the values.

Now think about this...

Can we classify each value...

at the same moment we inspect it?

Can zero move directly to the left...

two move directly to the right...

and one stay in the middle?

If we can do that...

we do not need a separate counting phase...

and we do not need a separate rewrite phase.

That is exactly where the three-pointer idea begins.

---

## Scene 06 — Dutch National Flag Idea

Now let’s build the one-pass idea...

We will use three pointers...

low...

mid...

and high.

But these three pointers create four different regions.

The first region...

from the beginning...

up to low minus one...

contains only confirmed zeroes.

The second region...

from low...

up to mid minus one...

contains only confirmed ones.

The third region...

from mid...

up to high...

is still unknown.

We have not classified those values yet.

And the last region...

after high...

contains only confirmed twos.

So at every moment...

our array is divided like this...

zeroes...

ones...

unknown...

and twos.

Now the job is simple.

We only inspect the value at mid.

If nums at mid is zero...

zero belongs on the left.

So we swap it with the value at low...

then move low forward...

and move mid forward.

If nums at mid is one...

it already belongs in the middle.

So we do not swap anything...

we only move mid forward.

And if nums at mid is two...

two belongs on the right.

So we swap it with the value at high...

then move high one step left.

But here is the most important rule...

mid does not move.

Why?

Because the value coming from the high side...

was still inside the unknown region.

We do not know yet...

whether that new value is zero...

one...

or two.

So we must inspect it first.

This is the complete idea...

low protects the zero region...

mid scans the unknown region...

and high protects the two region.

As the algorithm runs...

the unknown region keeps getting smaller...

until nothing is left to classify.

---

## Scene 07 — Full Dutch National Flag Trace

Now let’s run the complete algorithm...

on our master example.

Our array is...

two... one... two... zero... two... one... zero... one... zero... two.

We start with...

low at index zero...

mid at index zero...

and high at index nine.

Right now...

the entire array is unknown.

Let’s begin.

At mid...

we have two.

Two belongs on the right.

So we swap the value at mid...

with the value at high.

Both values are two...

so the array looks exactly the same.

But the state has changed.

High moves from nine to eight...

and mid stays at zero.

We inspect the same position again.

At mid...

we still have two.

This time...

high is pointing to zero.

So we swap two with zero.

The array becomes...

zero... one... two... zero... two... one... zero... one... two... two.

High moves from eight to seven...

and again...

mid stays at zero.

Now the value at mid is zero.

Zero belongs on the left.

Low and mid are both at index zero...

so this is only a self-swap.

Then low moves to one...

and mid moves to one.

Now mid is pointing to one.

One already belongs in the middle.

So there is no swap.

We simply move mid to index two.

Now mid is pointing to two.

Two belongs on the right.

High is at index seven...

and the value there is one.

So we swap them.

The array becomes...

zero... one... one... zero... two... one... zero... two... two... two.

High moves from seven to six...

but mid stays at index two.

The value that came from the right...

is one.

So now we inspect it.

One already belongs in the middle.

No swap.

Mid moves to index three.

Now mid is pointing to zero.

Zero belongs on the left.

Low is at index one.

So we swap index three...

with index one.

The array becomes...

zero... zero... one... one... two... one... zero... two... two... two.

Now low moves to index two...

and mid moves to index four.

At index four...

mid is pointing to two.

Two belongs on the right.

High is at index six...

and high is pointing to zero.

So we swap them.

The array becomes...

zero... zero... one... one... zero... one... two... two... two... two.

High moves from six to five...

and once again...

mid stays at index four.

Now look carefully...

the new value at mid is zero.

That is exactly why we did not move mid.

This zero still needs to be classified.

Zero belongs on the left.

Low is at index two.

So we swap index four...

with index two.

The array becomes...

zero... zero... zero... one... one... one... two... two... two... two.

Then low moves to index three...

and mid moves to index five.

Now mid is pointing to one.

One is already in the correct middle region.

So we simply move mid forward.

Mid becomes six.

High is five.

Now mid has crossed high.

That means...

the unknown region is empty.

Everything has been classified.

And our final array is...

zero... zero... zero...

one... one... one...

two... two... two... two.

Done.

Notice the key pattern...

zero goes left...

one stays in the middle...

and two goes right.

And every time we move a two to the right...

mid stays...

until the incoming value is checked.

---

## Scene 08 — Dutch National Flag Code

Now let’s convert that three-pointer idea into code...

We start with three pointers.

low is zero...

mid is zero...

and high is the last index.

Now we continue...

while mid is less than or equal to high.

At every step...

we only check nums at mid.

If nums at mid is zero...

we swap nums at low...

with nums at mid.

Then move low one step forward...

and move mid one step forward.

If nums at mid is one...

there is nothing to swap.

It already belongs in the middle region.

So we only move mid forward.

Otherwise...

nums at mid must be two.

So we swap nums at mid...

with nums at high.

Then move high one step left.

And notice carefully...

we do not move mid here.

That line is intentionally missing.

Why?

Because the value coming from high...

was still unknown.

We have to inspect it first.

The loop continues...

until mid becomes greater than high.

At that point...

the unknown region is empty...

and the whole array is correctly partitioned.

So the complete logic is simple...

zero goes to the left...

one stays in the middle...

and two goes to the right.

The important part is not memorising the code...

it is remembering what low...

mid...

and high guarantee at every step.

---

## Scene 09 — Complexity + Common Mistakes + Edge Cases

Now let’s compare both approaches...

Counting takes O of n time...

and O of one extra space.

But it uses two passes.

One pass to count...

and another pass to rewrite the array.

Dutch National Flag also takes O of n time...

and O of one extra space.

But here...

we classify the array in one pass.

Why is it O of n?

Because mid only moves to the right...

and high only moves to the left.

The unknown region keeps shrinking.

Now let’s look at the most common mistake.

Suppose nums at mid is two.

We swap it with nums at high...

and move high left.

But do not move mid.

This is very important.

The value that comes from the high side...

is still unknown.

If we move mid immediately...

we may skip that value without checking it.

Another common mistake...

is using...

while mid is less than high.

That is not enough.

We need...

while mid is less than or equal to high.

Because when mid and high are on the same index...

that last value is still unknown...

and must be processed.

Also remember...

high starts at the last valid index...

so high is n minus one.

One more important point...

there are four logical regions...

not three.

Confirmed zeroes...

confirmed ones...

unknown values...

and confirmed twos.

Now let’s check edge cases.

If the array has only one value...

the same logic still works.

If all values are zero...

it works.

If all values are one...

it works.

If all values are two...

it works.

If the array is already sorted...

it works.

And even if it starts in reverse order...

the same invariant still handles it.

No special case is required.

That is the power of maintaining the regions correctly.

---

## Scene 10 — Final Recap + Transferable Pattern + Roadmap Continuation

Let’s quickly recap what we learned...

We started with the counting approach.

Because the array contains only...

zero...
one...
and two...

we counted how many of each value we had...

and then rewrote the array.

That gave us...

O of n time...

and O of one extra space.

But it still needed two passes.

Then we improved it...

using the Dutch National Flag pattern.

We used three pointers...

low...

mid...

and high.

And those three pointers maintained four regions...

confirmed zeroes...

confirmed ones...

unknown values...

and confirmed twos.

If nums at mid is zero...

move it to the left...

then move low and mid.

If nums at mid is one...

it already belongs in the middle...

so just move mid.

And if nums at mid is two...

move it to the right...

move high left...

but keep mid where it is.

That last rule is important...

because the value coming from high...

is still unknown.

With this idea...

we solve the problem in one pass...

using O of n time...

and O of one extra space.

But the bigger lesson is not just Sort Colors.

Whenever a problem has only a few categories...

think about partitioning.

Ask yourself...

what part is already confirmed...

what part is still unknown...

and which pointers protect those boundaries.

That way...

you are not just memorising a solution...

you are learning an invariant...

that can help in many other partition problems.

And with that...

Sort Colors is complete.

Question eleven...

done.

We continue our Arrays and Hashing roadmap...

with the next problem...

Next Permutation.

---
