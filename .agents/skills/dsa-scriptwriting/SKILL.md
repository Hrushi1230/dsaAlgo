---
name: dsa-scriptwriting
description: Writes verified long-form DSA narration in simple natural Indian English from the locked trace and teaching architecture. Must be used before MP3 generation.
---

# DSA Scriptwriting V2

## Input gate

Required:
- problem analysis
- selected teaching architecture
- verified trace for every narrated algorithm
- exact master testcase
- scene purpose

Do not begin with an unverified trace.

## Voice

Use:
- simple natural Indian English
- warm teacher-like delivery
- short conversational sentences
- deliberate `…` pause gaps
- breathing room around important transitions
- easy-to-animate phrases

Avoid:
- generic filler
- motivational padding
- fake drama
- robotic narration
- unnecessarily formal vocabulary
- stating obvious UI actions
- explaining a visual before the learner has seen the cause

## Algorithm truth

The script must follow the verified trace.

Never:
- reorder operations for storytelling
- skip an important mutation in a complete trace scene
- invent a lookup
- change a pointer position
- alter a value
- announce a result before it exists
- make a runtime-order claim unsupported by the algorithm

## Teaching progression

The next approach must feel earned.

Preferred logic:

```text
current idea
→ exact failure/limitation
→ question
→ new idea
```

Avoid:

```text
Here is approach one.
Now here is approach two.
Now here is approach three.
```

## Trace scenes

The teacher should sound like they are genuinely executing the algorithm.

Use cause/effect phrasing:

```text
"Mid is on two… so two belongs on the right."
"Zero has no predecessor… that means this is a real start."
```

not artificial labels:

```text
"Now step number four will execute operation three."
```

## Code scenes

Explain:
- what the line does
- why the line exists
- what invariant/state it protects

Do not repeat the entire visual trace inside the code scene.

## Complexity scenes

State complexity only when it has been derived.

For nested loops, explain total work accurately rather than judging from syntax alone.

## Script metadata copy

Keep a verification copy with trace bindings:

```text
[trace: OPT-004]
Now eight has no predecessor… so eight is a real start.
```

The clean narration version may omit these tags.

## Script verification pass

After writing the draft:

1. compare every numeric value to trace
2. compare every pointer/index to trace
3. compare every branch to trace
4. compare every mutation to trace
5. compare final answer
6. verify complexity
7. verify transition logic between approaches
8. verify no premature spoiler
9. verify no unsupported runtime-order claim

## Output

Produce:

```text
script-verified.md
script-elevenlabs.md
```

The ElevenLabs version keeps the exact approved wording and pause punctuation.

Once MP3 is generated, do not silently rewrite narration without regenerating audio.
