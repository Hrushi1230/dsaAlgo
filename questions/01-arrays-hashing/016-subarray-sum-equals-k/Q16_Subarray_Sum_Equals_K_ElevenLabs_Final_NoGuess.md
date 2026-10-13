# Q16 — Subarray Sum Equals K
## ElevenLabs Final Narration — No-Guess Revision
### LeetCode 560 · Arrays & Hashing

> Voice: simple, natural Indian English  
> Delivery: slow, warm, teacher-like  
> Pauses: deliberate `...` gaps  
> Scenes 01–04 preserved from the approved source.  
> Original Scenes 05 and 06 merged into one concise optimal-idea scene as explicitly requested.  
> Full execution remains only in the trace scene.

---

# Scene 01 — Roadmap Resume + Q16 Activation

We have finished Question Fifteen ... Spiral Matrix.

Our global progress is now fifteen out of two hundred twenty-seven.

We are still inside Arrays and Hashing.

And next ... Question sixteen.

Subarray Sum Equals K.

This problem looks simple at first.

We have an array ... and a target `k`.

And we need to count how many contiguous subarrays have sum exactly equal to `k`.

Before we think about optimization ... first, let us understand the question properly.

---

# Scene 02 — Understand Question + Method 1 Idea

For this lesson, we will use:

`[1, -1, 2, 1, 0, -2, 3]`

and `k` is three.

We are not looking for just one subarray.

We are not looking for the longest subarray.

We need to count every contiguous, non-empty subarray whose sum is exactly three.

For example ...

`[2, 1]`

is contiguous ... and its sum is three.

So that is one valid subarray.

Also ...

`[3]`

by itself is a valid subarray.

One element can also form a subarray.

Now there is one important detail.

This array contains negative numbers.

So we cannot use the usual positive-number thinking like ...

if the sum becomes too large ... just stop or shrink.

Look at this tiny example.

`[4, -1]`

with `k = 3`.

After the first value, the sum is four.

Four is greater than three.

But if we continue ...

four plus minus one becomes three.

So with negative numbers ...

`sum greater than k`

does not mean we can safely stop.

Now let us build the straightforward correct method.

Choose one starting position.

Set the running sum to zero.

Then move the ending position to the right.

Every time we include one more value ...

add that value to the running sum.

If the running sum becomes exactly `k` ...

increase the answer.

Then continue.

When this start is finished ...

move the start one position to the right ...

reset the running sum ...

and repeat.

So Method One is:

fix the start ...

extend the end ...

update the running sum ...

and count every match.

Now let us execute it on the full array.

---

# Scene 03 — Method 1 Full Trace

We begin with start equal to zero.

Running sum starts at zero.

Include one ...

the sum becomes one.

Include minus one ...

the sum comes back to zero.

Include two ...

the sum becomes two.

Include one ...

the sum becomes three.

That is our first match.

So answer becomes one.

Now include zero.

The running sum is still three.

That is another valid subarray.

So answer becomes two.

Continue with minus two ...

the sum becomes one.

Then include three ...

the sum becomes four.

So for start zero ... we found two matches.

Now move start to one.

Reset the running sum.

We get:

minus one ...

then one ...

then two ...

then two again ...

then zero ...

and finally three.

At the final position, the running sum becomes three.

So answer becomes three.

Now start from index two.

Running sum starts again from zero.

Include two ...

sum is two.

Include one ...

sum becomes three.

Match.

Answer becomes four.

Include zero ...

sum stays three.

Another match.

Answer becomes five.

Then minus two makes the sum one ...

and the final three makes it four.

Now starts three, four, and five still have to be checked.

We do not skip them.

Start three gives:

one ...

one ...

minus one ...

two.

No match.

Start four gives:

zero ...

minus two ...

one.

No match.

Start five gives:

minus two ...

then one.

No match.

Finally start six.

The only value is three.

That is a match.

So answer becomes six.

Our final answer is six.

The method is correct.

But notice what happened.

For start zero ... we built many running sums.

Then for start one ... we built overlapping sums again.

Then for start two ... again.

We keep rebuilding information for overlapping ranges.

That repeated work is the real problem.

Now let us write this exact method in code.

---

# Scene 04 — Method 1 Code + Complexity

First, create the answer and set it to zero.

Now choose every possible starting position.

For each new start ...

reset the running sum to zero.

Then let the ending position move from `start` to the end of the array.

Add the current value to the running sum.

If the running sum equals `k` ...

increase the answer by one.

When this start is finished ...

the outer loop moves to the next start.

And after all starting positions are processed ...

return the answer.

This code follows the same order as our trace.

Choose start ...

reset sum ...

extend end ...

update sum ...

count a match.

Now let us look at the time complexity.

For the first start, we may inspect `n` elements.

For the next start ... `n minus one`.

Then `n minus two`.

And so on.

So the total work is:

`n + n minus one + n minus two ... + one`.

That is proportional to `n squared`.

So the time complexity is `O of n squared`.

For auxiliary space ...

we only keep a few variables.

Start ...

end ...

running sum ...

and answer.

So the auxiliary space is `O of one`.

Method One is correct.

But our problem is the repeated range-sum work.

Can we know the sum of a range ...

without rebuilding that whole range again?

That question leads us to prefix sums.

---

# Scene 05 — Optimal Idea

We do not want to rebuild the same overlapping sums again and again.

Suppose the current prefix sum is `S`.

For a subarray sum to be exactly `k` ...

we need an earlier prefix equal to ...

`S minus k`.

So at every position ...

we only need to look for ...

`current prefix minus k`.

But the same prefix value can appear more than once.

So we need frequency ...

not just existence.

Our HashMap stores:

`prefix sum ... to frequency`.

And initially ...

`zero maps to one`.

Because before reading the array ...

there is already one prefix position with sum zero.

One more important rule.

The map should contain only earlier prefix positions.

So first ...

update the current prefix.

Then compute ...

`needed = prefix minus k`.

Look up the frequency of `needed`.

Add that frequency to the answer.

And only after that ...

store the current prefix.

So the order is:

update prefix ...

look back ...

count ...

then store.

Now let us execute it on the full array.

---

# Scene 06 — Method 2 Full Trace

We start with:

prefix equals zero.

answer equals zero.

And the map contains:

zero to one.

Our first value is one.

Update the prefix.

Zero plus one becomes one.

Now needed is:

one minus three ...

minus two.

Do we have prefix minus two?

No.

So answer stays zero.

Now store current prefix one.

The map now contains zero once ... and one once.

Next value is minus one.

Current prefix is one.

Add minus one ...

prefix becomes zero.

Needed is:

zero minus three ...

minus three.

We have no minus three.

So answer stays zero.

Now store the current prefix zero.

Zero already had frequency one.

Now it becomes two.

That is important.

We now have two different earlier prefix positions with prefix sum zero.

Next value is two.

Prefix becomes two.

Needed is:

two minus three ...

minus one.

No match.

Answer stays zero.

Store prefix two with frequency one.

Now we reach index three ... value one.

Current prefix is two.

Add one ...

prefix becomes three.

Needed is:

three minus three ...

zero.

Now look at the map.

Frequency of zero is two.

So there are two valid starting boundaries.

That means two valid subarrays end here.

One starts from index zero.

The other starts from index two.

So answer jumps from zero to two.

Only after counting those matches ...

store current prefix three.

Three now has frequency one.

Next value is zero.

Add zero ...

the prefix stays three.

But this is a new prefix position.

Needed is still:

three minus three ...

zero.

Frequency of zero is still two.

So again ...

two valid subarrays end here.

Answer goes from two to four.

Now store the current prefix three.

Three already occurred once.

Now its frequency becomes two.

Next value is minus two.

Prefix changes from three to one.

Needed is:

one minus three ...

minus two.

No previous prefix minus two.

So answer stays four.

Now store prefix one.

One already occurred once.

So frequency one becomes two.

Now the final value is three.

Current prefix is one.

Add three ...

prefix becomes four.

Needed is:

four minus three ...

one.

Look at the map.

Frequency of one is two.

So again ...

two valid starting boundaries.

They give two valid subarrays ending at the final index.

One is the range from index one to six.

And the other is just index six ...

the single value three.

So answer goes from four to six.

Then store current prefix four.

Final answer is six.

Notice the pattern.

At index three ...

one lookup added two.

At index four ...

one lookup added two again.

At index six ...

one lookup added two again.

The map does not simply tell us whether a prefix exists.

It tells us how many valid starting boundaries exist.

Now let us translate this exact logic into code.

---

# Scene 07 — Method 2 Code + Complexity

Start with the frequency map.

Put zero with frequency one.

Then set prefix to zero.

And answer to zero.

Now move through the array one value at a time.

Add the current value to the prefix.

Then calculate:

`needed equals prefix minus k`.

Now query the frequency map.

How many earlier prefixes equal `needed`?

Add that frequency to the answer.

Only after the lookup ...

increase the frequency of the current prefix.

Then continue to the next value.

Finally ... return the answer.

Notice the order again.

Update prefix ...

compute needed ...

query earlier prefixes ...

add matches ...

then store current prefix.

The lookup comes before the insert.

That is part of correctness.

Now the complexity.

We scan the array once.

For each element, we do a constant amount of arithmetic ...

and expected constant-time HashMap operations.

So the expected time complexity is `O of n`.

For auxiliary space ...

in the worst case, many prefix sums can be different.

So the map can store `O of n` prefix values.

Therefore auxiliary space is `O of n`.

So Method Two changes the repeated `O of n squared` range search ...

into one expected `O of n` pass.

The important relation is:

current prefix minus previous prefix equals `k`.

That lets us replace many possible starting-position checks ...

with one required-prefix lookup.

---

# Scene 08 — Compare + Mistakes + Edge Cases

Quick comparison.

Method One ...

running-sum enumeration.

Time ... `O of n squared`.

Auxiliary space ... `O of one`.

Method Two ...

prefix sum plus frequency HashMap.

Expected time ... `O of n`.

Auxiliary space ... `O of n`.

Key mistakes.

Normal sliding window is not reliable when negative numbers are allowed.

Store prefix frequency ...

not only existence.

Start with:

zero maps to one.

Query before inserting the current prefix.

And remember ...

array index and prefix position are different.

Important edge cases.

`[3]`, target three ... answer one.

`[0]`, target zero ... answer one.

`[0, 0, 0]`, target zero ... answer six.

The key rule is:

answer plus equals frequency of needed prefix.

---

# Scene 09 — Recap + Transferable Pattern + Roadmap

Quick recap.

Method One ...

fix start ...

extend end ...

update running sum ...

count the match.

Time ... `O of n squared`.

Space ... `O of one`.

Core relation:

current prefix minus previous prefix equals `k`.

So:

needed previous prefix equals current prefix minus `k`.

Method Two ...

update prefix ...

compute needed ...

query its frequency ...

add the matches ...

then store the current prefix.

Expected time ... `O of n`.

Space ... `O of n`.

Reusable pattern:

if a range condition can be written as:

current cumulative state minus earlier cumulative state equals target ...

look for:

current minus target.

And if multiple earlier states can create valid ranges ...

store frequency.

Now Question Sixteen ...

Subarray Sum Equals K ...

is complete.

Our global progress moves from fifteen out of two hundred twenty-seven ...

to sixteen out of two hundred twenty-seven.

Next in Arrays and Hashing ...

Question seventeen.

Encode and Decode Strings.
