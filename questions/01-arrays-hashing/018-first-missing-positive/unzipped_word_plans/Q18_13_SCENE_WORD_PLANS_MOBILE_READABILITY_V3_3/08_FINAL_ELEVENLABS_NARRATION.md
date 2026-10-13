# Q18 — First Missing Positive
## Final Phase 08 ElevenLabs Narration · 13 Scenes · Three Verified Methods
### LeetCode 41 · Arrays & Hashing · Code With Animation

Voice: warm, senior teacher, simple natural Indian English. Spoken … pauses, no guessed durations.
One master input only: [3, 4, -1, 1, 1, 10, 0, 2].
All three trace scenes cover their full execution. Non-trace scenes teach the necessary idea or short code rationale only.

---

# Scene 01 — Roadmap Resume + Q18 Activation

Question Seventeen … Encode and Decode Strings … is complete.

We are at seventeen out of two hundred and twenty-seven.

Now … Question Eighteen. First Missing Positive.

This is our last question in Arrays and Hashing.

---

# Scene 02 — Understand the Question + Brute Force Idea

We have an unsorted array of integers.

For this lesson, our one input is …

[3, 4, -1, 1, 1, 10, 0, 2].

We need the smallest positive integer missing from it. Zero and negative values are not possible answers.

And the final solution must take linear time, with constant extra space.

First, what is the simplest correct way?

Start with candidate one. Search the array to see whether one is present.

If it is there, try two. Then three … always in increasing order.

The first candidate we cannot find must be the answer, because every smaller positive number was already found.

Let's execute that method fully.

---

# Scene 03 — Full Brute Force Trace

The array stays unchanged.

Start with candidate one … and search from index zero.

Three is not one. Four is not one. Minus one is not one.

At index three … we find one. So candidate one is present. Stop this search.

Now candidate two … start again at index zero.

Three is not two. Four is not two. Minus one is not two.

The first one is not two. The second one is not two.

Ten is not two. Zero is not two.

At the last index … we find two. So two is present.

Next, candidate three. At index zero … three is already there. Found.

Now candidate four. Index zero has three … not four. Index one has four … found.

Now candidate five. Search from the beginning again.

Three … not five. Four … not five. Minus one … not five.

One … not five. The second one … not five.

Ten … not five. Zero … not five. Two … not five.

We reached the end without finding five.

We have already found one, two, three, and four. So five is the first missing positive.

Return five.

Notice the repeated work … the same positions were checked again for different candidates.

---

# Scene 04 — Brute Force Code: Why These Lines Exist

Start candidate at one … because our answer must be positive, and we need the smallest.

The outer loop keeps trying candidates, one after another.

For each new candidate, reset found to false. An earlier candidate's result must not carry over.

The inner loop searches the array for that candidate.

If a value matches, set found to true … and break. More checks cannot change that result.

After the search, if found is still false … return the candidate. That's the first number missing.

Otherwise, increase the candidate by one and repeat.

Correct … but the repeated scans cost time.

---

# Scene 05 — Why Brute Force Is Slow + HashSet Idea

Our brute-force search starts over for each new candidate.

With up to n candidates, and up to n array checks for each … the total can grow to n squared.

What are we actually asking each time? Only this … is this number present?

We can store the array's values once in a HashSet.

A set keeps unique values. When a duplicate arrives, nothing new needs to be stored.

Then we test candidates one, two, three … using expected constant-time membership checks instead of scanning the array again.

The first missing candidate is still the answer, for the same reason as before.

Now watch the set being built.

---

# Scene 06 — Full HashSet Trace

Start with an empty set. Read our original array from left to right.

Index zero has three … add three.

Index one has four … add four.

Index two has minus one … add minus one.

Index three has one … add one.

Index four has another one. One is already present … so the set stays unchanged.

Index five has ten … add ten.

Index six has zero … add zero.

Index seven has two … add two.

All eight positions are processed. There are seven distinct values in the set.

Now candidate one … membership check: present.

Candidate two … present.

Candidate three … present.

Candidate four … present.

Candidate five … not present.

This is the first missing positive. Return five.

We got the same answer … but never rescanned the original array for every candidate.

---

# Scene 07 — HashSet Code: Why These Lines Exist

Create an empty seen set … to remember membership.

Loop through the input and add every value. Duplicates are handled automatically by the set.

Start candidate at one … because we still need the smallest positive.

While the candidate is in seen, increase it by one. Each successful lookup rules out that number.

The first failed lookup ends the loop … so return that candidate.

This removes the repeated array search.

But what is the cost of remembering all those values?

---

# Scene 08 — Why HashSet Is Not Enough

A HashSet gives expected linear time, but can hold up to n different numbers.

That is O of n extra space … and the question allows only constant extra space.

So we cannot carry a separate set into the final solution.

We still need to know which positive values exist.

Could the original array positions hold that information for us … without another data structure?

Yes. To do that, we first need one important bound.

---

# Scene 09 — Optimal Idea: Use the Array as Its Own Presence Map

Suppose the array has n elements.

If one through n are all present … the answer is n plus one.

Otherwise, at least one number between one and n is missing. So the first missing positive must be between one and n plus one.

That means we only need to arrange values from one through n.

Here is the rule: value x belongs at index x minus one.

Why? Because index zero can represent one … index one can represent two … and so on. The array becomes its own presence map.

At each position, while the current number is in that valid range, move it into its home by swapping.

After a swap, check the new value at the same position. It may need a different home.

But if the destination already holds the same number, stop … otherwise duplicates could keep us swapping forever.

Negative values, zero, and values larger than n have no useful home here … so skip them.

Once placement is complete, scan from the left. The first position that does not hold index plus one tells us the smallest missing positive.

Let's trace the actual swaps.

---

# Scene 10 — Full Optimal Cyclic Placement Trace

Our array has eight positions … indexed zero through seven.

Start at index zero. Its value is three.

Three belongs at index two, which currently contains minus one.

Swap them. Three is now at index two … and minus one arrives at index zero.

We check index zero again. Minus one is outside one through eight … so stop there.

Move to index one. Its value is four.

Four belongs at index three, which contains one. Swap.

Four reaches index three. And now index one holds one.

Stay at index one … because the arriving one also needs a home.

One belongs at index zero, which holds minus one. Swap again.

One reaches index zero. Minus one comes back to index one … so stop.

Index two contains three … already in its home. No swap.

Index three contains four … already in its home. No swap.

Index four contains one. Its home is index zero.

But index zero already contains one. This is a duplicate … so do not swap.

Index five contains ten. Ten is larger than eight … so skip.

Index six contains zero. Zero is not positive … so skip.

Index seven contains two. Two belongs at index one … which currently holds minus one.

Swap. Two reaches index one, and minus one arrives at index seven.

Check index seven again. Minus one cannot be placed … so the placement pass ends.

Our array is now … [1, 2, 3, 4, 1, 10, 0, -1].

Now scan from left to right, checking each expected value.

At index zero … expect one. We have one.

At index one … expect two. We have two.

At index two … expect three. We have three.

At index three … expect four. We have four.

At index four … expect five. But we have one.

This is the first mismatch. So five is the first missing positive.

Return five.

---

# Scene 11 — Optimal Code: Why Each Key Line Exists

First, store n … the array length. Only values from one through n have valid homes.

The outer loop visits each index.

Inside it, use a while loop … not a single if … because every swap can bring another misplaced value to this same index.

The first condition keeps the value between one and n. This also makes its home index safe to access.

The second condition checks whether the home already holds this value. If it does, stop … especially for duplicates.

Set home to the value minus one, then swap those two positions.

After all placements, scan from the left.

If the value at index i is not i plus one … return i plus one, the earliest missing number.

If every position matches … return n plus one.

No extra array. No HashSet.

---

# Scene 12 — Complexity + Only Essential Mistakes

Brute force may scan the array for many candidates … O of n squared time, O of one extra space.

HashSet avoids those scans … expected O of n time, but O of n extra space.

In the in-place method, every successful swap puts a value into its correct home. So there can be at most n successful swaps in total.

Add the outer visits and final scan … overall O of n time and O of one extra space.

Two important safeguards: only move values from one through n … and never swap into a home already holding the same value.

---

# Scene 13 — Minimal Recap + Roadmap

Brute force repeats searches.

HashSet fixes time, but uses extra memory.

In-place placement uses the array itself … value x belongs at index x minus one.

The first mismatch gives the answer.

Question Eighteen … complete. Eighteen out of two hundred and twenty-seven.

Arrays and Hashing is complete.

Next, Question Nineteen … Valid Palindrome, in Two Pointers.
