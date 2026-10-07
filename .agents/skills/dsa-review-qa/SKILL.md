---
name: dsa-review-qa
description: Reviews Antigravity long-form DSA implementation against trace, exact sync, scene plan and course visual consistency before approval.
---

# DSA Review & QA V2

## Review priority

```text
ALGORITHM
→ AUDIO/TIMING
→ LAYOUT
→ MOTION
→ DESIGN
→ POLISH
```

Do not spend time polishing a frame with incorrect algorithm state.

---

## 1. Algorithm QA

At every critical frame verify:
- active value/node
- pointer/index
- lookup result
- comparison result
- swap/mutation
- accumulator/counter
- confirmed/unknown region
- final answer

Compare against exact trace step IDs.

If mismatch:
```text
BLOCKED
```

Record exact frame and expected vs actual state.

---

## 2. Audio/timing QA

Verify:
- composition frame count matches sync
- event begins on/after correct spoken cause
- movement does not happen before narration establishes cause
- pause holds are preserved
- captions use actual sync
- no scene runs past audio

---

## 3. Layout QA

Check:
- optical center
- no unexplained dead space
- no caption collisions
- no title/hero overlap
- fixed slots remain stable
- pointer labels do not collide
- code remains readable
- scene stays within 1920×1080 safe composition

---

## 4. Motion QA

Motion QA must explicitly verify:
- cause before movement
- state reaction before mutation
- one primary action per beat
- settle before next primary action
- semantic consistency across repeated operations
- no decorative motion

Ask for every major movement:
- what caused it?
- what algorithm state does it represent?
- did state settle before next action?
- is more than one unrelated event happening at once?
- does motion match course weight/personality?

If motion is decorative and distracts from logic, remove it.

---

## 5. Design consistency QA

Check:
- shared board identity
- theme tokens
- typography
- chalk/rough stroke language
- caption style
- code style
- badge/title style
- semantic colors

A different algorithm may behave differently.
It must still look like the same course.

---

## 6. Morph QA

Morph QA must explicitly check against `docs/MORPHING_BIBLE_V2.md`:
- semantic identity (same, copy, derived, replaced)
- source persistence (does source remain logically present? never consume if persists)
- cardinality (1→1, 1→many, many→1)
- correct transition class (T0–T9)
- midpoint readability (0/25/50/75/100% checks for path morphs)
- no unrelated morph (if source and target are unrelated, use T9 REPLACE or scene transition)
- no consumed source if source persists (use T5 CLONE/PROJECT)
- label changes after geometry where appropriate
- morph improves understanding rather than adding spectacle

---

## 7. SVG QA

Check:
- exact path metrics: no guessed, magic (e.g. 100), or approximate dash lengths
- clamped progress: progress strictly clamped to 0..1 before evolvePath
- explicit direction: explicit path direction/reversal rather than negative progress hacks
- compound path order: compound strokes animated intentionally in pedagogical sequence
- arrow type distinction: relation arrow (shaft draws first, head appears at target) vs tracer arrow (point + tangent orientation along curve)
- fill/stroke distinction: stroke evolution separated from fill/state reveals
- dashed semantic preservation: reveal does not overwrite or destroy semantic dash patterns
- layer correctness: relations stay on proper layer (behind nodes, beneath labels)
- target reaction timing: target state reacts only after path arrives when causally required
- geometry is deterministic: no per-frame recalculations or random mutations

---

## 8. Regression QA

If a shared component changed:
- render at least one existing scene using it
- compare against previous accepted still

Shared refactor approval requires regression evidence.

---

## 9. Result classifications

### PASS
No material issues.

### PASS WITH FIXES
Small non-algorithmic corrections remain.

### BLOCKED
Any of:
- incorrect algorithm state
- wrong timing
- missing required operation
- premature spoiler
- broken layout
- inconsistent shared design
- plan not implemented

---

## 10. Review report format

```text
RESULT:

ALGORITHM:
- ...

TIMING:
- ...

LAYOUT:
- ...

MOTION:
- ...

DESIGN:
- ...

EXACT FIXES:
1. F...
2. F...

RE-RENDER FRAMES:
- F...
```
