# Q11 — Sort Colors (LC 75)
# Step 8 · Scene 01 — Channel + Master Roadmap Intro
## WORD-BASED VISUAL PLAN — NO GUESSED FRAMES

**Course:** Code With Animation  
**Roadmap:** 227 Problems · 19 Patterns  
**Pattern:** 01 · Arrays & Hashing  
**Previous problem:** #010 Longest Consecutive Sequence · LC128 · COMPLETE  
**Current problem:** #011 Sort Colors · LC75 · Medium  
**Purpose:** Resume the exact permanent Master DSA Pattern Roadmap from the accepted Q10 ending, confirm Q10 as completed, promote Q11 from `UP NEXT` to `NOW ACTIVE`, then hand the exact same Q11 identity into Scene 02 without teaching the problem twice.

---

# 0. NON-NEGOTIABLE SOURCE TRUTH

This plan is not a new roadmap design.

It is derived from the already-established course system:

- Q10 `01-intro-roadmap-plan.md`
- Q10 `13-recap-roadmap-outro-framewise-plan.md`
- Foundation V2 visual architecture
- Foundation V2 exact-sync architecture
- Motion Bible V2
- Morphing Bible V2
- SVG Animation Bible V2

## Frame-0 provenance rule

Antigravity must NOT reconstruct Scene 01 from memory.

Before implementing Q11:

1. render / inspect the **final settled roadmap state of Q10 Scene 13**;
2. use that exact visual state as Q11 Scene 01's source state;
3. preserve the exact geometry, typography, spacing, status semantics, and course shell.

The accepted semantic source state is:

```text
CODE WITH ANIMATION
DSA PATTERN ROADMAP
227 PROBLEMS · 19 PATTERNS
10 / 227 COMPLETE

PATTERN 01 · Arrays & Hashing = ACTIVE

Q010 Longest Consecutive Sequence = COMPLETED
Q011 Sort Colors = UP NEXT
right progress rail = focused at 011
```

If the pattern-local completion counter is visible, it must be consistent with the roadmap truth after Q10:

```text
10 / 18 COMPLETED
```

If the actual final Q10 render disagrees with the accepted roadmap state, STOP and report the regression instead of silently repairing it inside Q11.

---

# 1. MASTER ROADMAP UI — REUSE EXACTLY

## Top bar

```text
left      CODE WITH ANIMATION
center    DSA PATTERN ROADMAP
right     227 PROBLEMS · 19 PATTERNS
progress  10 / 227 COMPLETE
```

Do not redesign, resize, or replace this system.

## Left sidebar

```text
19 COURSE PATTERNS

01 Arrays & Hashing          ACTIVE
02 Two Pointers
03 Sliding Window
04 Stack
05 Binary Search
06 Linked List
07 Trees
08 Tries
09 Heap / Priority Queue
10 Intervals
11 Greedy
12 Backtracking
13 Graphs
14 Advanced Graphs
15 1-D Dynamic Programming
16 2-D Dynamic Programming
17 Bit Manipulation
18 Math & Geometry
19 String Algorithms
```

Only Pattern 01 remains active.

## Main pattern area

```text
PATTERN 01
Arrays & Hashing
18 PROBLEMS
```

Use the existing fixed stacked problem-row geometry.

Q010 and Q011 must stay in the exact row coordinates inherited from Q10.

## Required row states at Scene 01 start

```text
001..010  COMPLETED
011       UP NEXT / pivot
```

Q011 metadata is already authoritative from the roadmap:

```text
011 Sort Colors
LC 75
MEDIUM
```

## Right rail

Reuse the same permanent rail:

```text
001
│
│
011 ← current focus
│
│
227
```

The current-position indicator is already at 011 at Scene 01 start.

Do NOT move the rail 010→011 again. Q10's outro already did that.

---

# 2. TYPOGRAPHY + THEME LOCK

## Background

```text
theme.boardBg = locked green chalkboard (#18523d)
```

Use the existing board vignette only.

No black panel.
No dark SaaS cards.
No new gradient.

## Typography

- existing roadmap typography must remain untouched;
- Patrick Hand for board teaching / handwritten transition labels;
- mono family for problem numbers, LC metadata, progress counts, and technical metadata;
- do not introduce a new display font in the roadmap shell.

## Semantic colors

Use only existing course tokens:

```text
theme.chalkText
theme.chalkDim
theme.pivot
theme.good
theme.warn
theme.highlight
theme.cyan
theme.purple
```

Roadmap semantics:

```text
completed = theme.good / existing teal-cyan completion state
current   = theme.pivot
future    = theme.chalkDim
```

---

# 3. SCENE 01 NARRATION — EXACT SOURCE

```text
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
```

No problem statement.
No master testcase.
No Counting.
No DNF.
No array values.
No partition colors.
No solution hint.

Those begin in Scene 02 and later scenes.

---

# 4. WORD-BASED SEMANTIC ANCHORS

These are semantic IDs now.

They receive exact `word_index`, `edge`, and resolved frames **only after** the user supplies the final MP3 + exact sync JSON.

| Anchor ID | Exact narration phrase | Semantic purpose |
|---|---|---|
| `S01_WELCOME` | `Welcome back to Code With Animation` | resume exact course shell |
| `S01_ROADMAP` | `We are continuing our DSA Pattern Roadmap` | focus permanent roadmap identity |
| `S01_227` | `Two hundred twenty-seven problems` | focus full-course problem total |
| `S01_19_PATTERNS` | `across nineteen important patterns` | focus full pattern hierarchy |
| `S01_INTERVIEW_PREP` | `built for serious interview preparation` | show full roadmap as interview journey, no new panel |
| `S01_FUNDAMENTALS` | `from fundamentals` | emphasize course beginning / top of progression rail |
| `S01_FAANG` | `to FAANG-level problem solving` | trace course progression toward far end of same rail |
| `S01_RIGHT_NOW` | `Right now` | return focus from full course to current location |
| `S01_ARRAYS_HASHING` | `we are inside Arrays and Hashing` | focus Pattern 01 |
| `S01_Q10` | `Question ten` | focus completed Q010 row |
| `S01_Q10_TITLE` | `Longest Consecutive Sequence` | focus Q010 title |
| `S01_Q10_COMPLETE` | `is complete` | confirm completed status; DO NOT complete it again |
| `S01_NEXT_PROBLEM` | `Now we move to the next problem` | shift attention Q010 → Q011 |
| `S01_Q11` | `Question eleven` | change Q011 state UP NEXT → NOW ACTIVE |
| `S01_SORT_COLORS` | `Sort Colors` | focus current title |
| `S01_LC75` | `LeetCode seventy-five` | focus LC metadata |
| `S01_MEDIUM` | `Medium` | focus difficulty metadata |
| `S01_CONTINUE` | `Let’s continue` | roadmap → Scene 02 representation handoff |

No frame numbers belong in this table before sync exists.

---

# 5. WORD-BY-WORD VISUAL CHOREOGRAPHY

## Beat A — `S01_WELCOME`
### Spoken
`Welcome back to Code With Animation...`

### Visual source
Start from the exact final Q10 roadmap frame.

### Visual action
- Full roadmap shell is already present.
- No row status changes.
- One restrained whole-shell settle only.
- Q011 remains `UP NEXT`.
- Q010 remains completed.
- Global progress remains `10 / 227 COMPLETE`.

### Motion classification
```text
FOCUS / SETTLE
```

### Motion law
```text
CAUSE: "Welcome back"
→ STATE REACTION: whole course shell gains full attention
→ HOLD: learner re-orients
→ no algorithmic movement
```

### Forbidden
- no new title card;
- no replay of Q10 completion;
- no new UI;
- no progress count animation.

---

## Beat B — `S01_ROADMAP`
### Spoken
`We are continuing our DSA Pattern Roadmap...`

### Visual action
- Focus top-center `DSA PATTERN ROADMAP`.
- Existing shell separators may receive a restrained redraw/trace.
- Keep all roadmap geometry unchanged.
- Camera may ease outward only enough to make top bar + sidebar + main rows + right rail readable together.

### Motion classification
```text
FOCUS
SVG S3 REDRAW_CONFIRM on existing shell strokes if already supported
```

### Morph class
```text
T0 STATE_CHANGE
```

No true path morph.

---

## Beat C — `S01_227`
### Spoken
`Two hundred twenty-seven problems...`

### Visual action
- Focus existing top-right `227 PROBLEMS`.
- Right rail endpoints `001` and `227` become fully readable.
- Current 011 marker does NOT move.

### Motion
One supporting relation only:
a restrained underline / existing-rail emphasis linking `227 PROBLEMS` to the permanent progress rail.

### SVG class
```text
S1 DRAW_NEW
```

only if a temporary emphasis stroke is needed.

Do not create 227 dots.

---

## Beat D — `S01_19_PATTERNS`
### Spoken
`across nineteen important patterns...`

### Visual action
- Focus existing sidebar header `19 COURSE PATTERNS`.
- All 19 pattern names become readable.
- `01 Arrays & Hashing` remains the only active pattern.
- Other patterns remain dim.

### Motion
```text
FOCUS
```

No sequential animation of 19 separate cards.

---

## Beat E — `S01_INTERVIEW_PREP`
### Spoken
`built for serious interview preparation...`

### Visual action
Do not invent an interview-preparation card.

Use the existing roadmap itself as proof:
- full 227-problem shell in view;
- top bar, pattern hierarchy, and right rail readable together;
- current location 011 remains visible.

### Motion
Very small camera settle only.

---

## Beat F — `S01_FUNDAMENTALS`
### Spoken
`from fundamentals...`

### Visual action
- Briefly focus the beginning of the permanent progress system:
  - rail label `001`;
  - earliest problem rows already completed.
- Do NOT move the current 011 marker.

### Motion
```text
FOCUS
```

---

## Beat G — `S01_FAANG`
### Spoken
`to FAANG-level problem solving.`

### Visual action
- Use the SAME permanent rail.
- A temporary chalk tracer may travel along the existing rail from the early-course region toward the far end `227`.
- The tracer is a **course-journey emphasis**, not the current-position indicator.
- After the phrase, it recedes.
- Current position remains 011.

### SVG class
```text
S4 TRACE_PATH
```

### Important distinction
```text
current marker = 011
temporary journey tracer = conceptual course span
```

Never confuse them.

---

## Beat H — `S01_RIGHT_NOW`
### Spoken
`Right now...`

### Visual action
- Full-course emphasis recedes.
- Camera/focus returns to current region:
  - Pattern 01 sidebar row;
  - main Arrays & Hashing problem list;
  - rows 010 and 011.

### Motion
```text
TRANSITION / FOCUS
```

No hard cut.

---

## Beat I — `S01_ARRAYS_HASHING`
### Spoken
`we are inside Arrays and Hashing.`

### Visual action
Synchronize two existing pieces:
1. sidebar `01 Arrays & Hashing`;
2. main header `PATTERN 01 · Arrays & Hashing`.

Both receive the same restrained pivot emphasis.

### Motion classification
```text
FOCUS
T0 STATE_CHANGE
```

Do not recolor other patterns randomly.

---

## Beat J — `S01_Q10`
### Spoken
`Question ten...`

### Visual action
- Focus Q010 completed row.
- Q011 remains visible below as `UP NEXT`.
- No state change.

---

## Beat K — `S01_Q10_TITLE`
### Spoken
`Longest Consecutive Sequence...`

### Visual action
- Focus Q010 title inside its existing row.
- LC128 / Medium may remain readable but not become hero yet.
- Keep completed check visible.

---

## Beat L — `S01_Q10_COMPLETE`
### Spoken
`is complete.`

### Visual action
Q010 is ALREADY complete from the accepted Q10 outro.

Therefore:
- DO NOT morph `NOW ACTIVE → COMPLETE` again;
- DO NOT update 9→10 again;
- DO NOT move rail 010→011 again.

Instead:
- use a restrained completion confirmation;
- existing completed check may redraw once;
- row good-state may pulse once and settle.

### SVG class
```text
S3 REDRAW_CONFIRM
```

### Motion classification
```text
COMPLETE confirmation
```

This is confirmation, not mutation.

---

## Beat M — `S01_NEXT_PROBLEM`
### Spoken
`Now we move to the next problem...`

### Visual action
- Q010 focus recedes to standard completed state.
- Q011 `UP NEXT` row receives focus.
- Camera may shift by one row-space only if needed.
- Right rail is already at 011; keep it fixed.

### Motion law
```text
CAUSE: next problem
→ Q010 recedes
→ comprehension hold
→ Q011 focus rises
→ settle
```

Do not animate Q011 active yet.

---

## Beat N — `S01_Q11`
### Spoken
`Question eleven...`

### Visual action
This is the actual current-question activation moment.

Same Q011 row identity persists.

Change:

```text
UP NEXT
→
NOW ACTIVE
```

Also:
- pivot border reaches full current-state emphasis;
- Q011 status marker becomes current-state pivot;
- `10 / 227 COMPLETE` does NOT change.

### Morph classification
```text
T0 STATE_CHANGE
```

Text rule:
do not glyph-morph `UP NEXT` into `NOW ACTIVE`.

Use:
```text
old status recedes / erases
→ new status writes / reveals
```

### Q011 identity
Same row, same title, same metadata, same coordinates.

---

## Beat O — `S01_SORT_COLORS`
### Spoken
`Sort Colors...`

### Visual action
- Title `Sort Colors` becomes the row's visual hero.
- No array appears.
- No 0/1/2 category colors appear.
- No solution preview.

### Motion
```text
FOCUS
```

---

## Beat P — `S01_LC75`
### Spoken
`LeetCode seventy-five...`

### Visual action
- Focus existing `LC 75` metadata inside Q011 row.
- Mono typography.
- Do not invent a separate metadata card.

---

## Beat Q — `S01_MEDIUM`
### Spoken
`Medium.`

### Visual action
- Focus existing difficulty token.
- Use the course's existing MEDIUM semantics.
- No new difficulty color.

---

## Beat R — `S01_CONTINUE`
### Spoken
`Let’s continue.`

### Visual purpose
Hand the current question into Scene 02 without teaching it twice.

### Identity relation
Roadmap row Q011 and Scene 02's problem identity both represent the same question.

Use:

```text
T8 REPRESENTATION_HANDOFF
```

NOT a decorative true path morph.

### Handoff choreography
1. semantic source Q011 locks as current;
2. roadmap surroundings recede;
3. Q011 title / LC / difficulty move into the established V2 ProblemOpener title hierarchy;
4. current-question identity settles near the top;
5. center stage remains empty;
6. no array values yet;
7. no master testcase yet;
8. no solution hint;
9. Scene 02 starts from this exact settled state.

### End state

```text
green chalkboard
compact Q11 / Sort Colors / LC75 / Medium identity
center stage intentionally empty
captions safe zone clear
```

Scene 02 owns the actual problem explanation and array reveal.

---

# 6. MOTION DENSITY CONTRACT

At every phrase:

```text
one primary semantic action
+
at most one supporting reaction
```

Never combine:

```text
camera move
+ status change
+ progress animation
+ rail move
+ row expansion
+ typography rewrite
```

in one beat.

Scene 01 has **no algorithmic movement**.

Its motion purpose is only:

```text
course orientation
→ previous completion confirmation
→ current-question activation
→ representation handoff
```

---

# 7. MORPHING CONTRACT

## Allowed

### Q011 row attention changes
```text
T0 STATE_CHANGE
```

### Q011 `UP NEXT → NOW ACTIVE`
```text
T0 STATE_CHANGE
```

### Roadmap question identity → Scene02 problem identity
```text
T8 REPRESENTATION_HANDOFF
```

## Not allowed

- no T3 true-path morph for text;
- no glyph morph `UP NEXT → NOW ACTIVE`;
- no roadmap shell magically becoming an array;
- no unrelated new title card;
- no full UI dissolve into a generic SaaS card.

---

# 8. SVG CONTRACT

Use SVG only where it carries meaning.

Potential uses:

```text
S3 REDRAW_CONFIRM
Q010 existing completion check confirmation

S4 TRACE_PATH
temporary course-span emphasis along existing 001→227 rail
```

Rules:

- exact generated path metrics where V2 infrastructure supports them;
- current 011 indicator is not the tracer;
- no floating arrowhead;
- no decorative scribble;
- no new relation unless narration justifies it.

---

# 9. CAMERA CONTRACT

Camera is virtual focus, not cinematic decoration.

Allowed sequence:

```text
full shell
→ top roadmap identity
→ 227 / 19-pattern hierarchy
→ current Pattern 01
→ Q010
→ Q011
→ Q011 representation handoff
```

No fast zooms.
No bounce.
No rotation.
No parallax.
No unrelated camera movement during a status mutation.

---

# 10. ANTIGRAVITY — EXACT SYNC → FRAME CONVERSION CONTRACT

This section is executed only AFTER the user creates:

```text
01-intro-roadmap.mp3
01-intro-roadmap.json
```

The JSON must be the final exact word-sync file from the final MP3.

## A. Audit before mapping

Antigravity must first inspect:

```text
Q10 final Scene13 roadmap implementation
Q10 final rendered roadmap frame
current roadmap components/data
audioSyncV2.ts
Motion Bible V2
Morphing Bible V2
SVG Animation Bible V2
ProblemOpenerShell / ArrayProblemOpener
Captions
```

Return:

```text
REUSE
EXTEND
CREATE
```

Expected principle:

```text
REUSE roadmap shell
REUSE roadmap data model
REUSE exact-sync layer
REUSE existing transition primitives
CREATE no replacement roadmap UI
```

If the permanent roadmap is duplicated locally inside Q10, report that before copying it.

---

## B. Validate the exact sync

Use the Foundation V2 exact-sync validator.

Must verify:

```text
audio_file matches final MP3
fps exists
duration_frames exists
word_count matches words[]
words are ordered
start/end times valid
frames within duration
```

The raw sync JSON is immutable source data.

Do not edit timings to fit animation.

---

## C. Derive stable word IDs

Normalize ordered sync words as:

```text
W0000
W0001
W0002
...
```

Text is content.

Ordered word index is identity.

Repeated words such as:

```text
question
problem
complete
```

must NEVER be resolved by fragile text-only lookup.

---

## D. Create the semantic anchor manifest

Create:

```text
sync/01-intro-roadmap.anchors.json
```

Schema:

```json
{
  "version": 2,
  "scene": "01-intro-roadmap",
  "audio_file": "01-intro-roadmap.mp3",
  "anchors": {
    "S01_WELCOME": {
      "word_index": "__RESOLVE_FROM_FINAL_SYNC__",
      "edge": "start",
      "note": "Resume exact Q10 final roadmap shell"
    },
    "S01_ROADMAP": {
      "word_index": "__RESOLVE_FROM_FINAL_SYNC__",
      "edge": "start"
    },
    "S01_227": {
      "word_index": "__RESOLVE_FROM_FINAL_SYNC__",
      "edge": "start"
    },
    "S01_19_PATTERNS": {
      "word_index": "__RESOLVE_FROM_FINAL_SYNC__",
      "edge": "start"
    },
    "S01_INTERVIEW_PREP": {
      "word_index": "__RESOLVE_FROM_FINAL_SYNC__",
      "edge": "start"
    },
    "S01_FUNDAMENTALS": {
      "word_index": "__RESOLVE_FROM_FINAL_SYNC__",
      "edge": "start"
    },
    "S01_FAANG": {
      "word_index": "__RESOLVE_FROM_FINAL_SYNC__",
      "edge": "start"
    },
    "S01_RIGHT_NOW": {
      "word_index": "__RESOLVE_FROM_FINAL_SYNC__",
      "edge": "start"
    },
    "S01_ARRAYS_HASHING": {
      "word_index": "__RESOLVE_FROM_FINAL_SYNC__",
      "edge": "start"
    },
    "S01_Q10": {
      "word_index": "__RESOLVE_FROM_FINAL_SYNC__",
      "edge": "start"
    },
    "S01_Q10_TITLE": {
      "word_index": "__RESOLVE_FROM_FINAL_SYNC__",
      "edge": "start"
    },
    "S01_Q10_COMPLETE": {
      "word_index": "__RESOLVE_FROM_FINAL_SYNC__",
      "edge": "end",
      "note": "Confirmation only; Q10 is already complete"
    },
    "S01_NEXT_PROBLEM": {
      "word_index": "__RESOLVE_FROM_FINAL_SYNC__",
      "edge": "start"
    },
    "S01_Q11": {
      "word_index": "__RESOLVE_FROM_FINAL_SYNC__",
      "edge": "start",
      "note": "Q011 UP NEXT → NOW ACTIVE"
    },
    "S01_SORT_COLORS": {
      "word_index": "__RESOLVE_FROM_FINAL_SYNC__",
      "edge": "start"
    },
    "S01_LC75": {
      "word_index": "__RESOLVE_FROM_FINAL_SYNC__",
      "edge": "start"
    },
    "S01_MEDIUM": {
      "word_index": "__RESOLVE_FROM_FINAL_SYNC__",
      "edge": "start"
    },
    "S01_CONTINUE": {
      "word_index": "__RESOLVE_FROM_FINAL_SYNC__",
      "edge": "start",
      "note": "Begin roadmap → Scene02 representation handoff"
    }
  }
}
```

The placeholders are intentional.

Do not fill them until the final sync file exists.

---

## E. Resolve phrase ranges, not only single words

For each semantic beat, also resolve the phrase range:

```text
phrase start word ID
phrase end word ID
phrase start frame
phrase end frame
```

Example after sync:

```text
S01_SORT_COLORS
phrase = "Sort Colors"
W00xx .. W00yy
```

Do not rely on searching `"Sort"` every render.

The implementation consumes semantic IDs.

---

## F. Convert audio gaps into comprehension holds

Exact sync provides adjacent word gaps.

Use pauses for:

```text
settle
redraw completion
focus transfer
roadmap row state absorption
representation handoff preparation
```

Do not invent arbitrary dead time.

If a motion cannot fit truthfully inside the exact available phrase/pause window:

```text
do not compress algorithm/course meaning
do not change audio
do not guess

→ simplify the motion
```

---

## G. Generate the real frame-wise plan AFTER sync

Antigravity creates a derived frame plan from this word plan.

Every beat must become:

```text
ANCHOR ID
→ resolved exact frame
→ reaction window
→ comprehension hold
→ movement window
→ settle window
```

Example structure:

```text
S01_Q11
exact speech frame = anchorFrame("S01_Q11")

CAUSE:
word "Question eleven" begins

STATE REACTION:
Q011 row focus / current-state reaction

HOLD:
use exact available speech/pause interval

MOVEMENT / MUTATION:
UP NEXT recedes
NOW ACTIVE reveals

SETTLE:
must finish before S01_SORT_COLORS focus begins
```

No hardcoded frame is authored before the anchor resolves.

---

## H. Runtime implementation rule

Scene code must call semantic anchors, conceptually:

```text
anchorFrame("S01_Q11")
anchorFrame("S01_SORT_COLORS")
anchorFrame("S01_CONTINUE")
```

not:

```text
getWordFrame("question", occurrence=...)
```

and not:

```text
const q11Frame = 742
```

unless that frame is generated from the exact validated anchor at build/planning time.

---

## I. Captions + duration

Use the same exact sync source for:

```text
Captions
semantic anchors
scene duration
```

Scene duration must come from:

```text
duration_frames
```

Final valid frame must satisfy:

```text
0 <= frame < duration_frames
```

No silent clamping.

---

# 11. CRITICAL REVIEW STATES AFTER SYNC

Exact frame numbers are unknown now.

After sync, resolve and render these semantic checkpoints:

1. `S01_WELCOME`
   - exact Q10 final roadmap resumed.

2. `S01_227`
   - `227 PROBLEMS` + rail relationship clear.

3. `S01_19_PATTERNS`
   - all 19 patterns visible, Pattern 01 active.

4. `S01_ARRAYS_HASHING`
   - sidebar and main Pattern 01 identity synchronized.

5. `S01_Q10_COMPLETE`
   - Q010 visibly complete; no duplicate progress mutation.

6. just before `S01_Q11`
   - Q011 still `UP NEXT`.

7. immediately after `S01_Q11` state settles
   - Q011 `NOW ACTIVE`;
   - global progress still `10 / 227`.

8. `S01_SORT_COLORS`
   - title focus only; no array/solution.

9. `S01_LC75`
   - LC75 metadata focus.

10. `S01_MEDIUM`
    - Medium metadata focus.

11. `S01_CONTINUE` settled endpoint
    - roadmap receded;
    - compact Q11 problem identity remains;
    - center stage empty for Scene02;
    - no solution spoiler.

---

# 12. ACCEPTANCE CHECKLIST

- [ ] Frame 0 is sourced from actual Q10 final roadmap, not recreated from memory.
- [ ] Permanent roadmap architecture is unchanged.
- [ ] Green board remains `theme.boardBg`.
- [ ] `10 / 227 COMPLETE` remains unchanged during Q11 activation.
- [ ] Q010 begins and remains completed.
- [ ] Q010 is confirmed, not completed a second time.
- [ ] Q011 begins `UP NEXT`.
- [ ] Q011 becomes `NOW ACTIVE` only on the exact `S01_Q11` audio anchor.
- [ ] Right rail remains at 011; it is not replayed 010→011.
- [ ] Q011 title is Sort Colors.
- [ ] Metadata is LC75 · Medium.
- [ ] No master array appears in Scene01.
- [ ] No Counting / DNF / 0-1-2 solution clue appears.
- [ ] No generic dashboard/card redesign.
- [ ] No `SceneTitleCard` inserted as a second intro.
- [ ] No guessed frame numbers.
- [ ] Raw sync JSON remains immutable.
- [ ] Stable word IDs are derived from ordered sync.
- [ ] Semantic anchor manifest is created from exact sync.
- [ ] Scene code uses semantic anchors.
- [ ] Captions use the same exact sync.
- [ ] Scene duration uses exact `duration_frames`.
- [ ] Final state is a seamless Scene02 handoff.

---

# FINAL VISUAL STORY — ONE LINE

**Q11 begins from the exact final Q10 Master DSA Pattern Roadmap with `10/227 COMPLETE`, Arrays & Hashing active, Q010 already completed, and Q011 already focused as `UP NEXT`; the narration first re-orients the learner inside the unchanged 227-problem / 19-pattern course shell, briefly uses the permanent progress rail itself to communicate the journey from fundamentals toward FAANG-level preparation, returns to Pattern 01, confirms the already-completed Q010 without replaying any progress mutation, then on the exact spoken phrase `Question eleven` changes the same Q011 row from `UP NEXT` to `NOW ACTIVE`, focuses `Sort Colors · LC75 · Medium`, and on `Let’s continue` performs a truthful representation handoff of that same Q011 identity into the Scene02 opener while leaving center stage empty so the actual problem explanation begins only in Scene02.**
