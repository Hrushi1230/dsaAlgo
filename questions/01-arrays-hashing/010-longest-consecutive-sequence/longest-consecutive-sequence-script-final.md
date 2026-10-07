# Longest Consecutive Sequence (LeetCode 128) — Long Video Script

**Pattern:** Arrays & Hashing  
**Question:** 10 / 227  
**Difficulty:** Medium  
**Format:** Type C · 13 Scenes · Python · Female Voice · Natural Indian English  
**Teaching path:** Problem → Trace → Code → Limitation creates next idea → Trace → Code → Limitation creates optimal idea → Trace → Code → Complexity → Recap  
**Primary teaching example:** `nums = [8, 1, 6, 3, 2, 2, 4, 10, 9, 11, -1, 0]`

> **Recording direction:** Warm, patient, teacher-like. Keep the `...` pauses. Do not rush the trace. Ask the question first... give the student a moment... then answer.

---

## Scene 01 — Intro + DSA Roadmap

**Audio file:** `audio/01-intro-roadmap.mp3`

Welcome back...

We are continuing our complete DSA roadmap of two hundred twenty-seven problems... pattern by pattern.

Right now... we are inside Arrays and Hashing.

Nine questions are complete.

In the previous question... we finished Valid Sudoku.

Now... question number ten.

Longest Consecutive Sequence.

LeetCode one twenty-eight... Medium.

The input is unsorted...

but we still need to find the longest run of consecutive values.

And the target is linear time.

Before code...

first understand the question.

---

## Scene 02 — Understand the Problem

**Audio file:** `audio/02-understand.mp3`

We are given an unsorted array of integers.

We need only one thing...

the length of the longest consecutive sequence.

Consecutive means the values continue by one.

One... two... three... four.

They do not need to sit next to each other inside the input.

Now this is our main example...

`[8, 1, 6, 3, 2, 2, 4, 10, 9, 11, -1, 0]`

It has a duplicate...

a negative value...

and the numbers are completely unsorted.

For this input...

the answer is six.

Why six?

We will prove it while tracing the approaches.

First...

let's try the most direct method.

---

## Scene 03 — Brute Force: Idea + Complete Trace

**Audio file:** `audio/03-trace-brute.mp3`

Brute force is simple.

Take every number as a possible start...

and keep searching the original array for the next value.

Let's trace every start.

Start with eight.

Need nine...

found.

Need ten...

found.

Need eleven...

found.

Need twelve...

not found.

So eight gives length four.

Next... one.

Need two...

found.

Need three...

found.

Need four...

found.

Need five...

not found.

So one gives length four.

Next... six.

Need seven...

not found.

Length one.

Next... three.

Need four...

found.

Need five...

not found.

Length two.

Next... two.

Need three...

found.

Need four...

found.

Need five...

not found.

Length three.

Now the second two.

Same search again...

three found...

four found...

five missing.

Again length three.

That is duplicate work.

Next... four.

Need five...

not found.

Length one.

Next... ten.

Need eleven...

found.

Need twelve...

not found.

Length two.

Next... nine.

Need ten...

found.

Need eleven...

found.

Need twelve...

not found.

Length three.

Next... eleven.

Need twelve...

not found.

Length one.

Now... minus one.

Need zero...

found.

Need one...

found.

Need two...

found.

Need three...

found.

Need four...

found.

Need five...

not found.

Length six.

Best becomes six.

One last start... zero.

Need one...

found.

Need two...

found.

Need three...

found.

Need four...

found.

Need five...

not found.

Length five.

Done.

Final best...

six.

The method works.

But almost every step keeps searching the same original array again.

Let's write this exact logic first.

---

## Scene 04 — Brute Force: Code

**Audio file:** `audio/04-code-brute.mp3`

Alright...

let's convert that exact thinking into code.

First... longest starts at zero.

Then we go through every number in the array.

For each number...

we treat it as a possible beginning.

So current starts from that number...

and length starts from one.

Now comes our repeated search.

While current plus one exists in nums...

move current forward by one...

and increase the length.

When the next value is missing...

that sequence ends.

Then compare this length with longest...

and keep the bigger one.

At the end...

return longest.

The code is simple.

But see this line...

`current plus one in nums`.

`nums` is a normal Python list.

So Python may have to walk through the list to find that value.

And this check can happen again...

and again...

and again...

for many starting numbers.

That is where the brute force becomes expensive.

### Reference code — not part of narration

```python
def longestConsecutive(nums):
    longest = 0

    for num in nums:
        current = num
        length = 1

        while current + 1 in nums:
            current += 1
            length += 1

        longest = max(longest, length)

    return longest
```

---

## Scene 05 — Brute Force: Why It Fails

**Audio file:** `audio/05-why-brute.mp3`

Now measure the work.

We can try up to n starting numbers.

From one start...

the sequence can continue up to n steps.

And each `next value in nums` check can itself scan up to n values.

So worst case...

n times n times n.

O of n cubed.

The real problem is repeated searching.

Every time we need the next value...

we may scan the same unsorted array again.

So what if we remove that searching?

What if the numbers are arranged first?

Then if two values are consecutive...

they should come next to each other.

Let's see what that changes.

---

## Scene 06 — Better Approach: Complete Sorted Trace

**Audio file:** `audio/06-trace-better.mp3`

Same input...

`[8, 1, 6, 3, 2, 2, 4, 10, 9, 11, -1, 0]`

After sorting...

minus one... zero... one... two... two... three... four... six... eight... nine... ten... eleven.

Start with minus one.

Current length is one.

Move to zero.

Zero is exactly minus one plus one.

Length two.

Move to one.

One is zero plus one.

Length three.

Move to two.

Two is one plus one.

Length four.

Now the next value is two again.

This is a duplicate.

It does not increase the sequence...

and it does not break the sequence.

So ignore it.

Current length stays four.

Move to three.

Three is two plus one.

Length five.

Move to four.

Four is three plus one.

Length six.

Best becomes six.

Now four to six.

Five is missing.

So the sequence breaks.

Reset current length to one for six.

Next... six to eight.

Seven is missing.

Break again.

Current length is one for eight.

Now eight to nine...

consecutive.

Length two.

Nine to ten...

consecutive.

Length three.

Ten to eleven...

consecutive.

Length four.

Best is still six.

Done.

So while scanning the sorted array...

plus one means extend.

Same value means duplicate... ignore it.

Anything else means gap... reset.

Now let's write exactly this scan in code.

---

## Scene 07 — Better Approach: Code

**Audio file:** `audio/07-code-better.mp3`

First handle the empty array.

If nums is empty...

there is no sequence...

so return zero.

Then sort nums.

Now both longest and current start at one.

We begin from index one...

because every value will be compared with the value just before it.

First condition...

if both values are equal...

this is a duplicate.

So just continue.

Do not increase the sequence.

Do not reset it.

Just ignore the duplicate.

Next...

if the current value is previous value plus one...

we have a consecutive step.

Increase current.

Otherwise...

there is a gap.

So a new sequence starts here...

and current goes back to one.

After each real step...

update longest.

At the end...

return longest.

Simple scan.

Clean code.

And much better than repeated list searching.

### Reference code — not part of narration

```python
def longestConsecutive(nums):
    if not nums:
        return 0

    nums.sort()

    longest = 1
    current = 1

    for i in range(1, len(nums)):
        if nums[i] == nums[i - 1]:
            continue

        if nums[i] == nums[i - 1] + 1:
            current += 1
        else:
            current = 1

        longest = max(longest, current)

    return longest
```

---

## Scene 08 — Better Approach: Why It Is Not Optimal

**Audio file:** `audio/08-why-better.mp3`

This solution is correct.

The scan itself is O of n.

But before scanning...

we sorted the array.

Sorting costs O of n log n.

So overall...

O of n log n.

The question asks for O of n.

Now think about what we actually needed from sorting.

We only wanted to know...

does the next value exist?

Do we really need to arrange every number just for that?

No.

A HashSet can answer existence checks quickly on average.

But there is still one danger.

If we start walking from every number...

we can repeat the same sequence again and again.

So the real question is...

how do we know where a sequence actually begins?

---

## Scene 09 — Optimal Approach: Find the Real Start

**Audio file:** `audio/09-optimal-idea.mp3`

Take nine.

Does eight exist?

Yes.

So nine cannot be the beginning.

If we start from nine...

we are already entering a sequence from the middle.

Take ten.

Does nine exist?

Yes.

Again... not a start.

Take eleven.

Does ten exist?

Yes.

Not a start.

Now take eight.

Does seven exist?

No.

So eight can be the beginning.

That gives us the rule.

For any number x...

check x minus one.

If x minus one exists...

skip x.

If x minus one does not exist...

this can be a real sequence start.

Only then...

walk forward.

Now put all values into a HashSet.

The duplicate two disappears...

and membership checks become fast on average.

One note before the full trace...

I will place the values on a number line so the sequence is easy to see.

That is only our visual explanation.

A HashSet itself is not sorted.

Now let's trace every unique value.

---

## Scene 10 — Optimal Approach: Complete Visual Trace

**Audio file:** `audio/10-trace-optimal.mp3`

Our original array is...

`[8, 1, 6, 3, 2, 2, 4, 10, 9, 11, -1, 0]`

First... create the set.

The second two does not create another value.

So now we have eleven unique numbers.

The set has no sorted order...

but for the trace, I am placing the values on a number line so we can see the connections.

Let's begin with minus one.

Before minus one comes minus two.

Is minus two in the set?

No.

So minus one is a start.

Now walk forward.

Is zero present?

Yes.

Length becomes two.

Is one present?

Yes.

Length three.

Is two present?

Yes.

Length four.

Is three present?

Yes.

Length five.

Is four present?

Yes.

Length six.

Is five present?

No.

Stop.

This sequence has length six.

Longest becomes six.

Now check zero.

Does minus one exist?

Yes.

So zero is not a start.

Skip it.

Check one.

Does zero exist?

Yes.

Not a start.

Skip.

Check two.

Does one exist?

Yes.

Skip.

Check three.

Does two exist?

Yes.

Skip.

Check four.

Does three exist?

Yes.

Skip.

Now six.

Does five exist?

No.

So six is a start.

Check seven.

Seven is not there.

This sequence has length one.

Longest stays six.

Now eight.

Does seven exist?

No.

So eight is a start.

Check nine.

Yes.

Length two.

Check ten.

Yes.

Length three.

Check eleven.

Yes.

Length four.

Check twelve.

No.

Stop.

This sequence has length four.

Longest is still six.

Now nine.

Does eight exist?

Yes.

So skip nine.

Ten.

Does nine exist?

Yes.

Skip.

Eleven.

Does ten exist?

Yes.

Skip.

Done.

Notice what did **not** happen.

We did not start again from zero...

or one...

or two...

or three...

or four...

or nine...

or ten...

or eleven.

Those values already had a predecessor.

So we only walked the real sequence starts.

Minus one...

six...

and eight.

Final longest...

six.

Same answer.

No sorting.

No repeated list scan.

Now the code will feel much simpler because the idea is already clear.

---

## Scene 11 — Optimal Approach: Code

**Audio file:** `audio/11-code-optimal.mp3`

First...

convert nums into a set.

`num_set = set(nums)`.

This gives us unique values...

and fast average membership checks.

Longest starts at zero.

Now go through every unique number.

And here is the most important line in the whole solution.

If num minus one is **not** in the set...

only then do we start a sequence.

Why?

Because there is no predecessor.

So this number is the beginning.

Set current to num...

and length to one.

Now keep checking current plus one.

While the next value exists...

move current forward...

and increase the length.

When the next value is missing...

the run is finished.

Update longest.

And finally...

return longest.

That's it.

The code is short because the main work was understanding where a sequence should start.

### Reference code — not part of narration

```python
def longestConsecutive(nums):
    num_set = set(nums)
    longest = 0

    for num in num_set:
        if num - 1 not in num_set:
            current = num
            length = 1

            while current + 1 in num_set:
                current += 1
                length += 1

            longest = max(longest, length)

    return longest
```

---

## Scene 12 — Complexity Deep Dive: “For + While Means O(n²)?”

**Audio file:** `audio/12-complexity.mp3`

Now there is one question I really want you to ask.

We have a for loop...

and inside it...

we have a while loop.

So is this O of n squared?

It looks like that at first.

But no.

And the reason is the start check.

Take our longest chain...

minus one... zero... one... two... three... four.

Which value launches the while loop?

Only minus one.

Zero does not...

because minus one exists.

One does not...

because zero exists.

Two does not...

because one exists.

Three does not...

because two exists.

Four does not...

because three exists.

So this six-value chain is walked forward once...

not six times.

Same for eight... nine... ten... eleven.

Only eight launches the walk.

Nine, ten, and eleven are skipped as starts.

Across the whole set...

the forward walking touches the sequence values only as part of their real run.

So building the set takes O of n expected time.

Checking each unique number as a possible start takes O of n expected time.

And all forward walks together also add up to O of n.

Not O of n for every number...

O of n **in total**.

So the final expected time complexity is...

O of n.

Extra space is...

O of n...

for the HashSet.

Now compare the journey.

Repeated list searching...

worst case O of n cubed.

Sorting and scanning...

O of n log n.

HashSet plus real sequence starts...

expected O of n.

That is why the start check matters so much.

It is not a small code trick.

It is what protects us from repeated work.

---

## Scene 13 — Final Recap + Pattern Lock + Roadmap Update

**Audio file:** `audio/13-recap.mp3`

Alright...

Longest Consecutive Sequence is done.

Three approaches.

Brute force...

start from every number and repeatedly search the list.

Worst case... O of n cubed.

Better...

sort once and scan neighbours.

O of n log n.

Optimal...

use a HashSet.

And remember the one rule that matters most...

Does x minus one exist?

If yes...

x is not a start.

Skip it.

If no...

start from x...

and walk forward.

That gives us expected O of n time...

with O of n extra space.

So when an unsorted array asks about consecutive values...

think fast membership...

then find the real sequence start.

Question number ten...

complete.

Our roadmap is now...

ten out of two hundred twenty-seven.

We stay inside Arrays and Hashing...

and continue to question number eleven.
