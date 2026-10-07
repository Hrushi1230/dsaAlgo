# Scene 02 · UNDERSTAND THE PROBLEM — SVG / MORPH / MOTION Animation Plan

**Longest Consecutive Sequence · LC #128 · Type C**  
**Audio**: `02-understand.mp3` — **50.300 s** — **1509 frames** @ 30 fps  
**Sync**: word-level JSON supplied by user  
**Goal**: Teach the meaning of “longest consecutive sequence” entirely through visual motion before any algorithm begins. The student must understand that consecutive means **value progression by +1**, not adjacency inside the input; then the real testcase is introduced exactly as spoken, its important properties are inspected one at a time, and only the output length `6` is revealed — never the winning values.

---

# 🔗 Scene 01 → Scene 02 Continuity Lock

Scene 01 ends on:

```text
QUESTION 10 · LC128

[ ][ ][ ][ ][ ][ ][ ][ ][ ][ ][ ][ ]

12 EMPTY FIXED SLOTS
```

Scene 02 **starts on the exact same frame geometry**.

There is:
- no fade to black,
- no new title card,
- no layout reset,
- no recreated array component.

The same 12 slots become the teaching object for Scene 02.

---

# 🎯 Pedagogical Philosophy & Hard Rules

## 1. NO PREMATURE ANSWER
Do **not** show:

```text
[-1, 0, 1, 2, 3, 4]
```

as the winner.

Do not visually connect those six master-array values.

Do not sort the hard testcase.

Do not use a HashSet.

Do not launch brute-force search before Scene 03.

When narration says:

```text
answer is 6
```

show only:

```text
OUTPUT LENGTH = 6
```

Then immediately convert it to:

```text
WHY 6?
```

The proof belongs to the traces.

---

## 2. ONE CONTINUOUS VISUAL OBJECT

Scene 02 uses one visual language:

```text
empty input slots
    ↓ SVG morph
output requirement
    ↓ SVG morph
1 → 2 → 3 → 4 concept chain
    ↓ BezierFlight
same cards scatter into distant input positions
    ↓ path morph
curved value-order relation
    ↓ dissolve/retract
same 12 master slots
    ↓ values write in
real testcase
    ↓ annotations
duplicate / negative / unsorted
    ↓ answer field morph
6 → WHY 6?
    ↓ reasoning-path morph
brute-force pointer stage
```

No “slide A → slide B → slide C”.

The learner should feel that one drawing is continuously becoming the next idea.

---

## 3. SVG IS USED FOR MEANING, NOT DECORATION

Use SVG animation in four ways:

### SVG DRAW
Use `RoughLine` for:
- array brackets,
- arrows,
- +1 connectors,
- duplicate brace,
- question circles,
- pointer guides,
- strikes,
- reasoning paths.

### SVG MORPH
Use `SvgMorph` for:
- input bracket → output capsule,
- output capsule → consecutive definition rail,
- straight +1 connector → curved dotted relation path,
- answer field `?` → `6` → question-circle geometry,
- proof path → Scene 03 search lane.

### SVG SHAPE TRANSITION
Use interpolated SVG paths for:
- straight relation rail → scattered relation curve,
- neutral array frame → “unsorted wave” frame,
- center callout shell → output answer shell.

### MOTION GRAPHICS
Use:
- `BezierFlight` for conceptual card relocation,
- `CountUp` only if numeric roll is semantically useful,
- `ShineFill` only for subtle emphasis, never dashboard decoration,
- `ChalkDust` only at one or two high-value moments.

---

## 4. EXACT AUDIO SYNC

Important word triggers from supplied sync:

```text
unsorted       F52
array          F71
integers       F92

only           F130
one            F143
length         F189
longest        F228
consecutive    F242
sequence       F263

Consecutive    F304
values         F353
continue       F368
1              F397

1              F425
2              F454
3              F484
4              F510

not            F560
next           F584
input          F634

main           F684
example        F690

8              F728
1              F743
6              F761
3              F780
2              F797
2              F816
4              F828
10             F847
9              F863
11             F882
minus          F905
1              F912
0              F930

duplicate      F988
negative       F1022
numbers        F1070
completely     F1099
unsorted       F1123

answer         F1201
6              F1220
Why            F1257
6?             F1271

prove          F1311
tracing        F1349
approaches     F1385

First          F1420
try            F1463
direct         F1484
method         F1495
```

---

# ⏱ Audio Breakdown & Act-by-Act Flow

| Act | Frames | Spoken Beat | Visual Role |
|---|---:|---|---|
| 1 | F0–118 | “unsorted array of integers” | Inherited empty slots become an SVG-defined input container. |
| 2 | F119–303 | “only one thing… length…” | Array bracket morphs into output requirement capsule. |
| 3 | F304–540 | “Consecutive means… 1,2,3,4” | Capsule morphs into +1 chain, drawn progressively. |
| 4 | F541–654 | “do not need to sit next to each other” | Same cards fly apart; relation path morphs from straight to curved. |
| 5 | F655–973 | “main example… 8,1,6…” | Demo retracts; hard testcase writes into fixed slots one word at a time. |
| 6 | F974–1161 | “duplicate… negative… unsorted” | Three semantic inspections, one at a time. |
| 7 | F1162–1292 | “answer is 6. Why 6?” | Output field morphs `? → 6 → WHY 6?`. |
| 8 | F1293–1419 | “prove it while tracing…” | Question-circle morphs into a proof/trace path. |
| 9 | F1420–1508 | “most direct method” | Proof path straightens into Scene 03 brute search lane. |

---

# ACT 1 — Inherited Empty Slots Become the Input Concept
## F0–F118
**Narration:** “We are given an unsorted array of integers.”

### Starting frame F0

```text
QUESTION 10 · LC128

[ ][ ][ ][ ][ ][ ][ ][ ][ ][ ][ ][ ]
```

No master values.

### F0–F20 — “We are given”
Keep 12 slots stable.

Draw a single SVG bracket around the whole slot group.

Use `RoughLine` as four sequential segments:

1. top-left short corner,
2. top rail,
3. right corner,
4. bottom rail / left return.

Do not draw all borders at once.

Suggested timing:

```text
F4–F10    left corner
F10–F18   top line
F18–F26   right corner
F26–F36   bottom return
```

Small label above-left:

```text
INPUT
```

written with `ChalkText`.

### F20–F52 — “an”
No new semantic information.

Use this long word window to finish the bracket and settle the slots.

### F52 — “unsorted”
Do not randomly shake cards.

Instead make the **array bracket itself** communicate disorder.

Create two SVG paths:

```text
PATH_A = clean straight bracket
PATH_B = slightly hand-warped / uneven bracket
```

Use `SvgMorph`:

```text
F52–F70
clean bracket → warped bracket
```

At the same time, slot shells receive tiny staggered vertical offsets:

```text
slot0 +7
slot1 -5
slot2 +9
slot3 -7
...
```

Max rotation: ±0.8°.

Fixed x coordinates never change.

This visually says:

```text
order is not arranged
```

without inventing data.

### F71 — “array”
Write under the bracket:

```text
ARRAY
```

A tiny SVG underline draws from left→right.

### F83–F105 — “of integers.”
Inside the 12 empty slots, reveal faint integer placeholders as **chalk glyph silhouettes**, not values.

Use:

```text
±n
```

or a very faint `ℤ` watermark centered once behind the row.

Better option:

- one `ℤ` symbol appears behind the complete array,
- opacity 0→0.16,
- no 12 duplicated symbols.

### F105–F119 — pause
Morph warped bracket back to clean neutral bracket.

Slots return to baseline.

The student has absorbed:

```text
INPUT = UNSORTED INTEGER ARRAY
```

---

# ACT 2 — Input Structure Morphs Into the Required Output
## F119–F303
**Narration:** “We need only one thing, the length of the longest consecutive sequence.”

This act should feel like the input itself asks a question.

### F119–F143 — “We need only”
Dim slot contents/shells to ~30%.

Do not fade them completely.

Take the existing outer input bracket and morph it.

### SVG MORPH A
**Input bracket → centered answer capsule**

From:

```text
┌──────────────────────────────┐
[ ][ ][ ][ ][ ][ ][ ][ ][ ][ ][ ][ ]
└──────────────────────────────┘
```

To:

```text
╭──────────────────────────────╮
│            ?                 │
╰──────────────────────────────╯
```

Use `SvgMorph`:

```text
start F130
duration 26f
```

The path should physically shrink inward toward center while corners become rounded.

### F143 — “one”
Inside capsule, write:

```text
ONE THING
```

Small scale emphasis only.

### F152–F160 — “thing,”
`ONE THING` moves upward inside capsule to become a header.

### F160–F182 — 22f pause
Draw a horizontal answer line:

```text
________
```

with `RoughLine`.

At the end place:

```text
?
```

### F182–F197 — “the length”
Write:

```text
LENGTH
```

The answer line under it remains.

### F204–F228 — “of the”
No new motion except a subtle capsule widen.

### F228 — “longest”
Append:

```text
LONGEST
```

### F242 — “consecutive”
Write:

```text
CONSECUTIVE
```

with pivot accent.

### F263 — “sequence.”
Complete:

```text
LENGTH OF LONGEST
CONSECUTIVE SEQUENCE
```

Do not show a sequence yet.

### SVG MORPH B
During F263–F286, the capsule’s bottom line develops **four anchor ticks**.

Those ticks will become the four example card positions in the next act.

This is a visual bridge:

```text
answer capsule
      ↓
four anchor points
      ↓
1,2,3,4 concept chain
```

### F286–F304 — pause
Text reduces slightly.

Anchor ticks remain.

Prepare concept chain.

---

# ACT 3 — Consecutive = +1
## F304–F540
**Narration:** “Consecutive means the values continue by 1. 1, 2, 3, 4.”

This is the core definition moment.

## F304 — “Consecutive”
Move word `CONSECUTIVE` to top-center as the only title.

All other requirement text fades to 20%.

### SVG MORPH C
Capsule outline morphs into a **horizontal relation rail**:

```text
○────○────○────○
```

Four empty endpoints correspond to the four anchors from Act 2.

Use `SvgMorph`, F304–F334.

No cards yet.

### F320–F353 — “means the values”
At each endpoint, grow a rough card shell from the rail node.

Use `RoughBox` / SVG rounded rectangle stroke draw.

Suggested order:
- all four shells draw faintly,
- still empty.

### F368 — “continue”
Start drawing the first arrow segment.

Use `RoughLine`:
- node1 → node2.

### F386–F397 — “by”
Above the first connector, draw a tiny arc.

### F397 — “1.”
Write:

```text
+1
```

above the connector.

This is the rule.

### F409–F425 — pause
Hold empty chain shells with one `+1` relation.

No value yet.

---

## Value Reveal — EXACT SPOKEN NUMBERS

### F425 — spoken “1”
Card 1 chalk-writes:

```text
1
```

Then its border goes from faint to full.

No arrow movement yet.

### F439–F454 — pause
Draw arrow:

```text
1 → [ ]
```

Only 70% before 2 is spoken.

### F454 — “2”
Write `2`.

Immediately after value appears:
- finish arrow head,
- write small `+1` above it.

### F468–F484 — pause
Begin second connector.

### F484 — “3”
Write `3`.

Complete:

```text
2 → 3
```

### F500–F510 — pause
Begin third connector.

### F510 — “4”
Write `4`.

Complete:

```text
3 → 4
```

### Final conceptual frame

```text
        +1        +1        +1
[ 1 ] ───→ [ 2 ] ───→ [ 3 ] ───→ [ 4 ]
```

### F510–F524
Use `ShineFill` very subtly underneath the relation rail:
- fill from 0→100% as the chain becomes complete,
- opacity low,
- no glossy UI feel.

This communicates the sequence is continuous.

### F524–F541 — pause
Hold completely static.

This pause is for understanding, not more motion.

---

# ACT 4 — Same Values Scatter, Relationship Survives
## F541–F654
**Narration:** “They do not need to sit next to each other inside the input.”

This is the strongest morphing section of Scene 02.

The student must literally watch:

```text
adjacent on teaching rail
        ↓
far apart in input
        ↓
still consecutive by VALUE
```

## F541–F560 — “They do”
Reveal 12 faint input slots behind/below the four-card chain.

Do not generate new numbers.

Only empty slots.

### F560 — “not”
Straight relation rail starts to transform.

### SVG MORPH D
Morph the three straight connector paths into three curved paths that arc downward toward future scattered positions.

From:

```text
1 ─→ 2 ─→ 3 ─→ 4
```

To:

```text
1  ╲
     ╲_____ 2
           ╲
            ╲____ 3
                  ╲_____ 4
```

Actual cards have not moved yet.

The path morph previews where the logic will survive.

### F566–F584 — “need to sit”
Use `BezierFlight` sequentially.

Suggested target input slots:

```text
1 → slot 1
2 → slot 7
3 → slot 4
4 → slot 10
```

These are conceptual positions only, not the hard testcase.

Do not fill the other slots.

Flights:
- one card active at a time,
- 20–24f each,
- overlap at most 4f.

The existing straight card positions become origin points.

Motion trail:
- very faint `theme.cyan`,
- opacity restrained.

### F584 — “next”
As first cards settle, write:

```text
INPUT POSITION
```

left of a comparison sign.

### F593–F613 — “to each other”
Write:

```text
≠
```

then:

```text
VALUE ORDER
```

### SVG MORPH E
Once cards have landed, relation paths morph again:

```text
straight rail connectors
        ↓
curved dotted value-order arcs
```

The arcs connect the scattered 1→2→3→4 cards.

Use dashed stroke style if practical.

If `SvgMorph` component only controls path geometry, apply dash styling in wrapper SVG.

### F613–F634 — “inside the”
Reveal slot indices faintly:

```text
0 1 2 3 4 5 6 7 8 9 10 11
```

Only for a moment.

### F634 — “input.”
Draw a large rough brace under entire input row.

Label:

```text
INPUT
```

### F641–F655 — pause
Hold one clean teaching frame:

```text
INPUT POSITION ≠ VALUE ORDER
```

with scattered 1,2,3,4 still connected by value-order arcs.

Then begin retract:
- relation paths draw backward / opacity down,
- cards prepare to leave.

---

# ACT 5 — Concept Demo Morphs Into the Real Master Testcase
## F655–F973
**Narration:** “Now this is our main example. 8, 1, 6, 3, 2, 2, 4, 10, 9, 11, minus 1, 0.”

### F655 — “Now”
Scattered 1,2,3,4 concept cards lift 10px and fade.

Do not fly them into the hard example positions.

They are a different teaching example.

### F666–F690 — “this is our main”
The 12 inherited master slots become fully opaque.

Top helper morphs:

```text
INPUT POSITION ≠ VALUE ORDER
```

to:

```text
MAIN EXAMPLE
```

Use `SvgMorph` only for the underline/frame, not the text itself.

### F690 — “example.”
Draw:

```text
nums =
```

to left of slot row with `ChalkText`.

### F709–F728 — pause
Absolute stillness.

The student prepares to listen to the numbers.

---

# MASTER ARRAY — EXACT WORD-SYNC POPULATION

Hard testcase:

```text
[8, 1, 6, 3, 2, 2, 4, 10, 9, 11, -1, 0]
```

Every value is written into its existing fixed slot.

No horizontal movement.

No future value appears early.

### F728 — `8`
slot0 writes `8`.

Use:
- 8f chalk stroke,
- then border goes full.

### F743 — `1`
slot1 writes `1`.

### F761 — `6`
slot2 writes `6`.

### F780 — `3`
slot3 writes `3`.

### F797 — first `2`
slot4 writes `2`.

### F816 — second `2`
slot5 writes `2`.

Important:
- do NOT mark duplicate yet,
- do NOT color it differently.

### F828 — `4`
slot6 writes `4`.

### F847 — `10`
slot7 writes `10`.

### F863 — `9`
slot8 writes `9`.

### F882 — `11`
slot9 writes `11`.

### F894–F905 — pause before negative
Do nothing.

### F905 — “minus”
slot10 writes only:

```text
−
```

### F912 — “1”
complete:

```text
−1
```

This is a nice micro-animation:
- minus sign first,
- numeral 1 second.

### F930 — `0`
slot11 writes `0`.

### F944–F974 — 30f pause
This is a critical reading pause.

No annotations.

No highlights.

No camera move except maybe 1–2% push if truly needed.

Let the full raw testcase sit on screen.

---

# ACT 6 — Inspect the Three Important Properties
## F974–F1161
**Narration:** “It has a duplicate, a negative value, and the numbers are completely unsorted.”

One property at a time.

---

## A. Duplicate
### F974–F988 — “It has a”
Full array neutral.

### F988 — “duplicate”
Draw two SVG circles around the two `2` slots.

Use `RoughLine` circle:
- first circle F988–F998,
- second circle F998–F1008.

Then draw a rough upper brace connecting them.

### SVG DRAW
Above both 2s:

```text
  _______
 /       \
2         2
```

Small label:

```text
DUPLICATE
```

### F1000–F1015 — pause
Hold.

No other property highlighted.

---

## B. Negative value
### F1015–F1022
Duplicate brace dims to 15%.

### F1022 — “negative”
Draw a short vertical number-line SVG beside slot10:

```text
-2
-1  ←
 0
```

Do not move the array value.

The line draws in 10–12f.

### F1033–F1046 — “value”
Arrow ticks toward `-1`.

Small label:

```text
NEGATIVE
```

### F1046–F1060 — pause
Hold.

Then number-line annotation retracts / fades.

---

## C. Completely unsorted
### F1060–F1070
Return full array to neutral.

### F1070 — “numbers”
Draw a thin SVG “order guide” above row:

```text
ascending direction  ─────────→
```

No values.

### F1099 — “completely”
Guide begins trying to align with the array:
- small comparison ticks descend toward slots,
- mismatch marks appear.

### F1123 — “unsorted.”
Use two simultaneous but related semantic actions:

1. draw hand-written:
   `NOT SORTED`
2. morph the clean order guide into a wavy broken line.

Use `SvgMorph`:

```text
straight ascending guide
        ↓
irregular zig-zag guide
```

Then draw a `RoughLine` strike through `SORTED`.

Do NOT physically reorder or heavily shake values.

Tiny ±5px y pulse across slots is enough.

### F1141–F1162 — pause
End state:

```text
[DUPLICATE]   [NEGATIVE]   [UNSORTED]
```

But show these as small chalk tags above the array, not dashboard chips.

---

# ACT 7 — Output Length `6` Without Spoiling the Winner
## F1162–F1292
**Narration:** “For this input, the answer is 6. Why 6?”

### F1162–F1184 — “For this input,”
Property annotations retract:
- duplicate brace fades,
- number-line gone,
- unsorted guide retracts.

Raw array stays.

### F1184–F1196 — pause
Draw a centered bottom callout shell.

Use `RoughLine` / `SvgMorph`.

### F1196–F1201 — “the”
Small label:

```text
OUTPUT
```

### F1201 — “answer”
Inside shell draw:

```text
LENGTH = ?
```

Reuse the visual language from Act 2.

### SVG MORPH F
Question mark lives inside a simple SVG answer-circle.

At F1220:

```text
?  →  6
```

Use `SvgMorph` for:
- outer question-circle geometry stays,
- inner glyph crossfades because text glyph itself does not need path interpolation.

### F1220 — “6.”
`6` appears.

One restrained `pop()`.

No array card changes.

No values highlighted.

No winning sequence.

### F1236–F1257 — 21f pause
Hold:

```text
OUTPUT LENGTH = 6
```

### F1257 — “Why”
Outer answer shell begins to deform.

### SVG MORPH G
Morph answer capsule into a large chalk question bubble.

From:

```text
╭──────────────╮
│ LENGTH = 6   │
╰──────────────╯
```

To:

```text
    ______
  /        \
 |  WHY 6? |
  \_______/
      ?
```

### F1271 — “6?”
Write:

```text
WHY 6?
```

The `6` is reused in place if practical.

Add one rough question-mark tail drawn with `RoughLine`.

### F1283–F1293 — pause
Hold unresolved question.

---

# ACT 8 — Question Bubble Morphs Into a Proof / Trace Path
## F1293–F1419
**Narration:** “We will prove it while tracing the approaches.”

### F1293–F1311 — “We will”
`WHY 6?` bubble stays center.

Raw array remains dim behind it at ~55%.

### F1311 — “prove”
Draw a short line out of the bottom of the question bubble.

### SVG MORPH H
Morph the question-bubble tail into a forward reasoning path.

From:
```text
?
```

To:
```text
─────────●─────────●─────────●
```

But only first checkpoint is strong.

Do not label:
- brute,
- better,
- optimal.

The narration hasn't named them here.

### F1319–F1349 — “it while”
First checkpoint writes:

```text
TRACE
```

as a small chalk label.

### F1349 — “tracing”
A chalk dot travels along the path toward checkpoint 1.

Use frame-driven motion along SVG path.

If implementation prefers:
- compute path positions,
- or use `BezierFlight` with low arc.

### F1385 — “approaches.”
Remaining future checkpoints appear faintly.

The path now communicates:
- proof comes through multiple traces.

### F1400–F1420 — pause
The path begins flattening and lengthening underneath the array.

Prepare Scene 03 search lane.

---

# ACT 9 — Morph Into the Brute-Force Starting State
## F1420–F1508
**Narration:** “First, let's try the most direct method.”

### F1420 — “First”
`WHY 6?` bubble fades.

Master array returns to 100%.

### SVG MORPH I
The proof path:

```text
●────●────●
```

morphs into a **single horizontal search lane** beneath the raw array.

This is the strongest scene-to-scene morph.

The same line that represented “we will trace approaches” becomes the literal path the brute-force search will use.

### F1433–F1454 — pause
Clear all property labels.

Leave:
- compact Q10 identity,
- raw array,
- clean search lane.

### F1454 — “let’s”
Draw a pointer stem above slot0.

Use `RoughLine`.

### F1463 — “try”
Pointer head draws.

### F1475–F1484 — “most”
Small neutral text:

```text
START?
```

appears above pointer.

### F1484 — “direct”
Pointer changes from chalk-neutral to pivot accent.

### F1495 — “method.”
Pointer settles over `8`.

Do not start searching for `9`.

No counter yet.

No chain yet.

### Final F1508 state

```text
QUESTION 10 · LC128

[8][1][6][3][2][2][4][10][9][11][-1][0]
 ↑
START?

────────────────────────
search lane ready
```

Scene 03 starts by turning `8` into the first brute candidate.

---

# 🧬 COMPLETE SVG / MOTION MORPH MAP

```text
SCENE 01 EMPTY SLOT FRAME
        ↓
RoughLine bracket draw
        ↓
clean bracket
        ↓ SvgMorph
warped UNSORTED bracket
        ↓ SvgMorph
center answer capsule
        ↓
LENGTH = ?
        ↓ SvgMorph
four-anchor relation rail
        ↓ RoughLine draw
1 → 2 → 3 → 4
        ↓ SvgMorph + BezierFlight
scattered values in distant input slots
        ↓ SvgMorph
curved value-order arcs
        ↓ retract
master empty slots
        ↓ word-synced ChalkText
hard testcase
        ↓
duplicate RoughLine brace
        ↓
negative number-line SVG
        ↓ SvgMorph
straight order guide → broken unsorted guide
        ↓
OUTPUT LENGTH = ?
        ↓ morph
OUTPUT LENGTH = 6
        ↓ SvgMorph
WHY 6? bubble
        ↓ SvgMorph
proof / trace path
        ↓ SvgMorph
Scene 03 brute search lane
```

---

# 📐 Layout Specifications — 1920×1080

## Persistent compact identity
Top region:
```text
y = 28..72
QUESTION 10 · LC128
```

Keep small.

## Main slot row
```text
y ≈ 390..510
```

12 fixed slots.

Recommended:

```text
slotWidth  = 92px
slotHeight = 104px
gap        = 16px
total      = 1280px
xStart     ≈ 320px
```

No auto-flex.

For `10`, `11`, `-1`, use a mono font size that fits without changing slot width.

## Definition chain
```text
y ≈ 365..535
```

4 concept cards:
```text
112 × 120px
```

## Callout region
```text
y ≈ 650..790
```

Used by:
- LENGTH = ?
- INPUT POSITION ≠ VALUE ORDER
- OUTPUT LENGTH = 6
- WHY 6?

Only one primary callout at a time.

## Captions
Reserve:
```text
y = 960..1040
```

No SVG path may dip into caption-safe zone.

---

# 🎨 Theme / Color Semantics

Use course tokens only.

### Normal structure
`theme.chalkText`

### Dim structure
`theme.chalkDim`

### Definition / current concept
`theme.pivot`

### Confirmed +1 relation
`theme.good`

### Informational relationship / curved semantic path
`theme.cyan`

### Warning / crossed false label only
`theme.warn`

### Background
Use the course green chalkboard `theme.boardBg`.

No neon UI gradients.

No glassmorphism.

No generic SaaS cards.

---

# 🧩 Component Mapping

| Visual | Component / technique |
|---|---|
| input bracket | `RoughLine` |
| bracket → capsule | `SvgMorph` |
| capsule → relation rail | `SvgMorph` |
| relation card borders | `RoughBox` |
| +1 arrows | `RoughLine` |
| scattered card flights | `BezierFlight` |
| straight relation → curved relation | `SvgMorph` |
| master values | `ChalkText` inside fixed slots |
| duplicate circles/brace | `RoughLine` |
| negative mini number-line | `RoughLine` |
| straight order guide → broken guide | `SvgMorph` |
| `SORTED` strike | `RoughLine` |
| answer shell | `RoughBox` / SVG path |
| answer shell → WHY bubble | `SvgMorph` |
| proof path | custom SVG path + progress |
| proof path → search lane | `SvgMorph` |
| pointer | `RoughLine` arrow |
| subtle relation completion | `ShineFill` |
| rare emphasis | `ChalkDust`, max 1 small use |

---

# 🎥 Motion Quality Rules

## 1. SVG Draw Timing
Normal chalk draw:
```text
15–25 frames
```

Tiny connector:
```text
10–16 frames
```

Major outline:
```text
24–32 frames
```

## 2. SVG Morph Timing
Simple geometry:
```text
20–28 frames
```

Major conceptual morph:
```text
28–40 frames
```

Do not morph faster than ~18f unless tiny.

## 3. BezierFlight
Concept cards only.

Do not use BezierFlight for:
- master testcase population,
- property annotations,
- answer reveal.

The hard testcase should feel stable and readable.

## 4. State Before Motion
Example:
- card becomes active,
- then path draws,
- then counter/text updates.

Never:
- card moves,
- changes color,
- arrow draws,
- text changes simultaneously.

## 5. No Random Motion
Every movement must explain one of:
- structure,
- relation,
- non-adjacency,
- duplicate,
- negative value,
- unsortedness,
- output,
- transition to trace.

---

# 🚫 Anti-Slop Rules

Do **not**:

1. show the hard testcase at frame 0,
2. show the winning sequence,
3. show sorting,
4. show HashSet,
5. use a generic LeetCode problem card,
6. use 3D cubes,
7. use floating icons,
8. show duplicate and negative simultaneously,
9. make duplicate red,
10. shuffle master array cards horizontally,
11. use auto-flex insertion,
12. create fake filler values in the 1,2,3,4 scatter demo,
13. celebrate answer 6,
14. show three approach cards,
15. use SVG morph purely as decoration,
16. animate every word,
17. keep unrelated old drawings on screen,
18. use code,
19. start brute scanning before Scene 03.

---

# ✅ Critical Render Frames

### F0
Must perfectly inherit Scene 01.

### F52
Unsorted concept appears through warped SVG bracket, not value shuffling.

### F189
`LENGTH = ?` requirement is clean and centered.

### F304
Output capsule has morphed into consecutive-definition stage.

### F397
`+1` rule visible before numbers.

### F425
Only `1` exists.

### F454
`1 → 2`.

### F484
`1 → 2 → 3`.

### F510
full `1 → 2 → 3 → 4`.

### F584
cards are scattering / relation path morph visible.

### F634
`INPUT POSITION ≠ VALUE ORDER` is undeniable.

### F728
master testcase still empty immediately before spoken `8`.

### F816
second `2` appears with no duplicate annotation yet.

### F944
full raw testcase clean and readable.

### F988
duplicate-only annotation.

### F1022
negative-only annotation.

### F1123
unsorted SVG guide moment.

### F1220
`OUTPUT LENGTH = 6` with no winning values highlighted.

### F1271
`WHY 6?`

### F1349
proof/trace path active.

### F1495
brute pointer settled over `8`.

---

# ✅ Acceptance Checklist

- [ ] Exactly **1509 frames**.
- [ ] Uses Scene 01’s exact final slot coordinates.
- [ ] No scene reset.
- [ ] Main conceptual transitions use actual SVG morphs.
- [ ] All connector arrows draw progressively.
- [ ] `1,2,3,4` reveal only on exact spoken frames.
- [ ] The same four cards physically scatter to prove non-adjacency.
- [ ] Curved value-order relations remain visible after scatter.
- [ ] Master testcase values write only on spoken frames.
- [ ] duplicate annotation begins at F988 only.
- [ ] negative annotation begins at F1022 only.
- [ ] unsorted explanation begins at F1123 only.
- [ ] answer 6 appears at F1220 only.
- [ ] winning sequence remains hidden.
- [ ] WHY 6? remains unresolved.
- [ ] proof path morphs into the Scene 03 search lane.
- [ ] final pointer is poised over 8 but search has not begun.
- [ ] main hero content stays in y≈300..600.
- [ ] captions zone is clear.
- [ ] no layout jitter.
- [ ] theme tokens only.

---

# Final Scene 02 Visual Story — One Line

**The exact empty-slot stage inherited from the roadmap intro is drawn into an unsorted integer-array frame, then its SVG bracket physically morphs into a `LENGTH = ?` requirement and again into a four-node relation rail where `1 → 2 → 3 → 4` is drawn one spoken value at a time; those same cards fly apart into distant input positions while their straight arrows morph into curved value-order paths to prove that adjacency is irrelevant, the demo retracts into the twelve fixed master slots where the real testcase writes on exact word frames, duplicate/negative/unsorted properties are inspected through separate SVG annotations, `LENGTH = ?` morphs to `6` and then to an unresolved `WHY 6?`, and that question bubble morphs into a proof path which finally straightens into the brute-force search lane for Scene 03.**
