# Q17 — Encode and Decode Strings
## Final ElevenLabs Narration — Senior Teacher Style
### LeetCode 271 · Arrays & Hashing

> **Narration:** Scenes 04 and 06 are the full one-by-one traces. All other scenes are deliberately minimal.
> **Delivery:** Simple, natural Indian English; slow, warm, teacher-like. `...` denotes a deliberate pause.
> **Production note:** The technical-reference appendix at the end is **not spoken**.

---

## Scene 01 — Roadmap Resume + Q17 Activation

We have finished Question Sixteen ... Subarray Sum Equals K.

Our progress is now sixteen out of two hundred twenty-seven.

Next ... Question Seventeen.

Encode and Decode Strings.

Here, we need to convert a list of strings into one string ...

and later decode it back into the exact original list.

That's our goal.

---

## Scene 02 — Understand the Problem + Delimiter Failure

For our example, we have four strings.

A hash B ...

an empty string ...

hello world ...

and the string containing four and two.

Now suppose we simply join strings using a hash.

Think about two different lists.

One contains ... A hash B ... and C.

The other contains ... A ... B ... and C.

Both produce the same joined text.

A hash B hash C.

So how will the decoder know the original boundaries?

It cannot.

A raw separator is not enough.

We need explicit boundary information.

---

## Scene 03 — Length-Prefix Idea

The idea is simple.

For every string ...

write its length ...

then a hash ...

then the original string.

So our record format becomes ...

length ... hash ... payload.

The hash ends the length header.

After that, the decoder reads exactly the specified number of characters.

Even if the payload contains a hash ... it is safe.

And after each record ...

the pointer `i` must reach the next length header.

That's the protocol.

Now let's encode our full example.

---

## Scene 04 — Full Encode Trace

Our input contains four strings.

A hash B ...

an empty string ...

hello world ...

and four two.

We start with an empty encoded result.

First string ...

A hash B.

Count its characters.

A ...

hash ...

B.

Three characters.

So the length is three.

First, write three.

Then write the header hash.

Then copy the complete original string ...

A hash B.

Our first record is ...

three hash A hash B.

And that becomes our current encoded result.

Now the second string.

This one is empty.

How many characters?

Zero.

So write zero ...

then hash.

There is no payload to copy.

That's perfectly valid.

Append this record to the previous result.

Now our encoded result is ...

three hash A hash B ...

followed by zero hash.

Next string ...

hello world.

Let's count carefully.

Hello has five characters.

Then one space.

Then world has five characters.

So total length is eleven.

This time our length has two digits.

Write eleven.

Then hash.

Then copy the complete payload ...

hello world.

The space is also part of the string.

Now append this record.

Our encoded result contains ...

three hash A hash B ...

zero hash ...

eleven hash hello world.

Now the final string.

Four two.

These are two characters ...

four and two.

So its length is two.

Write two ...

then hash ...

then copy four two.

That gives the record ...

two hash four two.

Append it to the encoded result.

And we're done.

We have encoded all four strings into one continuous string.

Notice ...

we did not add any extra separator between records.

We don't need one.

Every length header tells the decoder exactly where its payload ends ...

and where the next record begins.

Now let's write the encoder.

---

## Scene 05 — Encode Code

The code is short.

Create an empty list called `parts`.

For every input string ...

append its length as text ...

append the hash ...

then append the string itself.

After the loop ...

join all the parts into one string.

And return it.

That's the encoder.

Now let's decode the string we created.

---

## Scene 06 — Full Decode Trace

We have our complete encoded string.

Start with an empty result list.

And set `i` to zero.

Remember ...

`i` always points to the beginning of the next length header.

Let's decode the first record.

Right now ...

`i` is zero.

Set `j` to the same position.

Move `j` forward until we find the header hash.

At index zero ... we have the digit three.

At index one ... we find the hash.

Stop there.

So the length text is three.

Convert it to a number.

Length equals three.

Now the payload begins immediately after the hash.

So start is two.

End is start plus length.

Two plus three ...

equals five.

Now read the characters from index two ...

up to, but not including, index five.

At index two ... A.

At index three ... hash.

At index four ... B.

Together ...

A hash B.

Notice ...

we did not treat the hash inside the payload as a separator.

We simply read three characters.

Append A hash B to our result list.

Now move `i` to end.

So `i` becomes five.

We have finished the first record.

And `i` is exactly at the next length header.

Now the second record.

`i` is five.

Set `j` to five.

At index five ... we have zero.

At index six ... we find the header hash.

So the length is zero.

The payload starts immediately after the hash ...

at index seven.

And end is start plus zero.

So end is also seven.

Start and end are the same.

That means the payload is empty.

But we still append an empty string to our result.

We must not skip it.

Now set `i` to seven.

Second record complete.

Next record.

`i` is seven.

Set `j` to seven.

At index seven ... the first digit is one.

Move forward.

At index eight ... another one.

Move forward again.

At index nine ... we find the hash.

So our length header contains two digits.

One one.

Convert it to an integer.

Length is eleven.

Now the payload starts after index nine.

So start is ten.

End is ten plus eleven ...

which is twenty-one.

Now read exactly eleven characters.

From index ten ...

up to, but not including, index twenty-one.

That gives us ...

hello world.

Including the space between the words.

Append hello world to the result.

Now move `i` to twenty-one.

Third record complete.

One record remains.

At index twenty-one ...

we have the digit two.

Move `j` forward.

At index twenty-two ...

we find the header hash.

So length is two.

The payload begins at index twenty-three.

End is twenty-three plus two ...

twenty-five.

Now read two characters.

Index twenty-three gives four.

Index twenty-four gives two.

Together ...

the string four two.

Append it to our result.

Now set `i` to twenty-five.

And twenty-five is the length of our complete encoded string.

So there is nothing left to decode.

We stop.

Now look at our result.

First ... A hash B.

Second ... an empty string.

Third ... hello world.

Fourth ... four two.

Exactly the same four strings we started with.

Same characters.

Same order.

Same empty string.

Nothing lost.

That's our complete decode trace.

Now let's write the decoder.

---

## Scene 07 — Decode Code

Start with an empty result list.

And set `i` to zero.

While `i` is inside the encoded string ...

set `j` to `i`.

Move `j` until the next header hash.

Convert the digits from `i` to `j` into the length.

Now start is `j` plus one.

End is start plus length.

Append that exact slice to the result.

Then set `i` to end.

This takes us to the next record.

Repeat until the string is finished.

Finally ...

return the result.

That's the complete decoder.

---

## Scene 08 — Correctness + Complexity

Why does this work?

Because the payload does not decide its own boundary.

The stored length does.

Now complexity.

Let `C` be the total number of payload characters ...

and `N` be the number of strings.

Encoding processes every string and copies its characters.

Time complexity ...

O of C plus N.

Decoding reads the headers and payloads in one forward pass.

Again ...

O of C plus N.

The constructed output also needs ...

O of C plus N space.

---

## Scene 09 — Minimal Mistakes + Edge Cases

Three quick things to remember.

Do not split the encoded string on every hash.

The length can have multiple digits.

And after decoding each payload ...

always move `i` to end.

For edge cases ...

an empty list encodes to an empty string.

One empty string encodes to ...

zero hash.

And a string containing only a hash ...

encodes to ...

one hash hash.

The same protocol handles all of them.

---

## Scene 10 — Minimal Recap + Roadmap

Quick recap.

Our format is ...

length ... hash ... payload.

The decoder reads the length ...

then consumes exactly that many characters.

The reusable idea is simple.

When the payload can contain separator characters ...

store explicit boundary information.

Question Seventeen ...

Encode and Decode Strings ...

complete.

Our progress is now ...

seventeen out of two hundred twenty-seven.

Next ...

Question Eighteen.

First Missing Positive.

---

## Appendix — Technical References (Not Spoken)

| Item | Exact value |
|---|---|
| Master input | `["a#b", "", "hello world", "42"]` |
| Encoded output | `3#a#b0#11#hello world2#42` |
| Decode record boundaries | `[0,5)`, `[5,7)`, `[7,21)`, `[21,25)` |
| Final decoder pointer | `i = 25` |
| Encode/decode time | `O(C + N)` |
| Constructed output space | `O(C + N)` |
