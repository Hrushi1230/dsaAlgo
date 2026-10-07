# Scene 08 · WHY-NOT / DISCOVERY — SORTING TAX → HASHSET EXISTENCE Animation Plan

**Longest Consecutive Sequence · LC #128 · Type C**  
**Audio**: `08-why-better.mp3` — **49.380 s** — **1481 frames** @ 30 fps  
**Goal**: Prove that the sorting solution is correct but still misses the required linear-time target, isolate what sorting was actually giving us — fast knowledge of whether the next value exists — replace global ordering with HashSet existence checks, then expose the remaining danger: if we launch a walk from every number, we still repeat the same sequence. End with one unresolved question: **where does a sequence actually begin?**

---

# 🔒 @dsa/kit CONSISTENCY LOCK — NON-NEGOTIABLE

This scene MUST use the existing Code With Animation visual system.

## Background / atmosphere
- `theme.boardBg` / locked chalkboard green `#18523d`
- existing board vignette only: `rgba(0,0,0,0.35)`
- no new per-scene background
- no gradients / glass / SaaS cards

## Typography
- Patrick Hand for chalk labels / explanations
- SFMono / Consolas / Menlo for code/math/complexity
- use existing font helpers from `fonts.ts`

## Semantic colors
Use kit tokens only:
- `theme.chalkText`
- `theme.chalkDim`
- `theme.pivot`
- `theme.good`
- `theme.warn`
- `theme.highlight`
- `theme.cyan`
- `theme.purple`

Never hardcode new visual colors.

## Existing kit components first
Prefer:
- `ChalkText`
- `RoughLine`
- `RoughBox`
- `RoughCurve`
- `SvgMorph`
- `BezierFlight`
- `Shatter`
- `CountUp`
- `ChalkDust`
- `Captions`
- `HashSetTable`
- `SceneTitleCard` only if transition shell is genuinely needed

The scene may introduce a new **composition**, but not a new design system.

---

# 🎯 Pedagogical Philosophy & Core Rules

## 1. NO PREMATURE OPTIMAL RULE
The narration introduces HashSet, but does **not** yet tell us how to identify the true beginning of a sequence.

Therefore do NOT reveal:
```text
x - 1 not in set
```
and do NOT visually mark `-1`, `6`, `8` as starts.

Do not show:
- predecessor check,
- start-only rule,
- final optimal trace,
- O(n) proof.

Scene09 owns that discovery.

---

## 2. CENTER STAGE FIRST
The scene starts with the **correct sorted solution** at center stage.

The learner must first understand:
```text
scan = O(n)
sort = O(n log n)
overall = O(n log n)
```

Only after this limitation is visually proven may the layout morph into the “what did sorting actually buy us?” discovery.

---

## 3. ONE CONTINUOUS VISUAL OBJECT
Use one continuous transformation:

```text
Scene07 sorted Array Bar
        ↓
single clean scan
        ↓
sorting tax layer appears underneath
        ↓
O(n) + O(n log n)
        ↓
overall O(n log n)
        ↓
target O(n) appears
        ↓
sorted bar deconstructs
        ↓
only the EXISTENCE question remains
        ↓
cards leave ordered rail
        ↓
HashSet field
        ↓
O(1) expected existence ping
        ↓
multiple launch points repeat same sequence island
        ↓
all launch arrows collapse
        ↓
one unresolved START ? marker
```

No hard cuts.

---

## 4. WHY-NOT COMPLEXITY MUST BE VISUALLY PROVEN
Per course rules:
- Big-O appears only when spoken.
- `RoughCurve` draws only after complexity is stated.
- use one compact illustrative operation scale:
  `n = 1024`
  - scan: `1024`
  - n log₂ n: `10240`
- label this as **illustrative growth scale**, not exact Python comparison count.

---

## 5. HASHSET IS AN EXISTENCE TOOL, NOT A SORTED DISPLAY
When HashSet appears:
- values should NOT be arranged numerically,
- do not place them on a left-to-right number line,
- use `HashSetTable` or a deliberately unordered chalk field,
- membership ping can answer:
  `9 exists? → yes`
  `5 exists? → no`

That is enough for this scene.

---

# 📐 Layout Specifications — 1920×1080

## Top badge
```text
WHY BETTER ISN'T ENOUGH
y = 28..70
```

## Hero stage
```text
y = 300..600
x = center
```

Used successively for:
1. sorted Array Bar,
2. complexity composition,
3. existence question,
4. HashSet field,
5. repeated-walk danger.

## Complexity strip
```text
y = 640..780
```

For:
- `O(n)`
- `O(n log n)`
- `overall`
- target `O(n)`

## Captions
```text
y = 960..1040
```

No hero object enters caption zone.

---

# 🧬 Signature Visual — “ORDER TAX RAIL”

Scene07 ended with one clean sorted scan rail.

Scene08 turns that into a unique visual:

### Top layer: scan bead
One mint bead travels once across sorted values.

### Bottom layer: sorting lattice
A faint criss-cross network appears beneath the rail showing the work required **before** the scan can even begin.

The rail itself is efficient.
The hidden “tax” is the arrangement step underneath.

When narration says sorting costs `O(n log n)`, the lattice unfolds into a shallow branching / merge-like work structure — not a full algorithm-specific merge sort animation, just an abstract **ordering work lattice**.

This keeps the idea unique without pretending Python uses one specific sort visualization.

---

# ⏱ Audio Breakdown & Act-by-Act Flow

| Act | Frames | Spoken Beat | Visual Choreography |
|---|---:|---|---|
| 0 | F0–124 | solution correct / scan O(n) | Clean sorted rail + one forward scan + O(n) curve |
| 1 | F125–300 | but we sorted first / sorting O(n log n) | sorting tax lattice grows beneath rail |
| 2 | F301–490 | overall n log n / question asks n | costs combine; target mismatch becomes central |
| 3 | F491–587 | what did we actually need from sorting? | ordered rail begins deconstructing |
| 4 | F588–728 | only need next-value existence | entire sorted structure collapses to `x+1 exists?` gate |
| 5 | F729–894 | do we need to arrange every number? No. | order lines erase; cards detach from positions |
| 6 | F895–1023 | HashSet checks existence quickly | unordered HashSet field + instant membership ping |
| 7 | F1024–1304 | danger: starting from every number repeats sequence | same island launched from several values; ghost paths overlap |
| 8 | F1305–1480 | real question: where does sequence begin? | repeated paths collapse into unresolved START? glyph |

---

# ACT 0 — “Correct” + The Scan Itself Is O(n)
## F0–F124

**Narration:**  
“This solution is correct. The scan itself is O of n.”

### F0–F41 — “This solution is correct.”
Start from Scene07 final frame:
- better code visible faintly on left or already receded,
- right clean Array Bar / one forward scan motif.

Immediately simplify to center stage:
- code recedes to 12% and then disappears,
- sorted rail moves to optical center,
- top badge:
  `BETTER APPROACH`

At F29 “correct”:
- a restrained `theme.good` check draws beside the sorted rail.
- use `RoughLine`, 16–18f.
- no celebration.

### F41–F53 pause
- check remains.
- scan bead moves to left edge.

---

## F53–F112 — “The scan itself is O(n).”
### F53–F80
- bead travels left→right exactly once over a compact sorted rail.
- behind bead, one mint stroke writes across the rail.

### F88 — spoken “O”
Do not show complexity before this frame.

- mono text starts:
  `O(`

### F97–F112 — “of n”
- complete:
  `O(n)`

### RoughCurve
As `O(n)` completes:
- a small graph appears in the lower-right of hero stage,
- axes draw,
- one straight linear curve draws left→right with `RoughCurve`,
- label:
  `scan`

### F112–F125 pause
- hold efficient scan.
- do not show sorting cost yet.

---

# ACT 1 — The Hidden Sorting Tax
## F125–F300

**Narration:**  
“But before scanning, we sorted the array. Sorting costs O of n log n.”

### F125–F152 — “But before scanning,”
- scan bead reverses 8px and freezes.
- the clean rail lifts upward ~35px.
- a second faint structure begins appearing beneath it.

This signals:
“something happened before this scan.”

### F152–F173 pause
Use full 21f pause:
- draw 3 faint horizontal ordering layers beneath the rail,
- not values yet,
- like chalk work stages.

---

## F173–F204 — “we sorted the array.”
- same 8–10 representative value cards briefly detach from rail,
- `BezierFlight` paths cross in a restrained way,
- they land back in ascending order.
- paths remain as faint criss-cross residue beneath the rail.

Label:
```text
ORDER FIRST
```

This is the **sorting tax lattice**.

Do not replay Scene05/06 full sorting.

### F204–F219 pause
- rail settles.
- lattice remains under it at low opacity.

---

## F219–F291 — “Sorting costs O(n log n).”
At F219 `Sorting`:
- sorting lattice brightens.

At F240 spoken `O`:
- complexity text begins:
  `O(`

F256–F291:
- complete:
  `O(n log n)`

### Visual cost model
Use a shallow layered work diagram:

```text
n items
↓
ordering layers
↓
log n stages
```

Not a full tree.

A vertical brace on left:
```text
log n layers
```

A horizontal brace:
```text
n work per layer
```

Together visually imply:
```text
n × log n
```

### RoughCurve
Only after `O(n log n)` is spoken:
- second curve draws on same small graph,
- linear scan curve remains dim mint,
- n log n curve draws in pivot/cyan semantic token.

### Illustrative CountUp
In lower callout:
```text
n = 1024
scan scale = 1024
sort scale ≈ 10240
```
Use `CountUp` subtly.
Label:
`illustrative growth scale`

### F291–F301 pause
Hold both costs.

---

# ACT 2 — Overall Cost vs Required Target
## F301–F490

**Narration:**  
“So overall, O of n log n. The question asks for O of n.”

### F301–F322 — “So overall”
- move scan cost `O(n)` and sort cost `O(n log n)` toward center as two chalk expressions:

```text
SORT       SCAN
n log n  +   n
```

Do not use cards.

### F322–F346 pause
- draw one long rough brace beneath both:
  `overall`

### F346–F402 — “O(n log n).”
- `n log n + n` morphs through `SvgMorph` / text transition into:
```text
O(n log n)
```
- sorting lattice remains visible behind as the dominating layer.

### F402–F414 pause
- overall result holds.

---

## F414–F476 — “The question asks for O(n).”
At F414:
- a second target line appears below:
```text
REQUIRED
```

At F449 spoken `O`:
- begin target expression.

F464–F476:
```text
O(n)
```

### Visual mismatch
Do not use a generic red X immediately.

Sequence:
1. actual `O(n log n)` sits top,
2. required `O(n)` sits below,
3. two horizontal “finish lines” extend right,
4. n log n line overshoots the linear target boundary.

At F476–F491 pause:
- then draw one `RoughLine` warning bracket:
```text
NOT THE TARGET
```

Use `theme.warn`, restrained.

---

# ACT 3 — What Did Sorting Actually Give Us?
## F491–F587

**Narration:**  
“Now think about what we actually needed from sorting.”

This is the discovery pivot.

### F491–F517 — “Now think about what”
- complexity graph, operation count, warning bracket recede to 15%.
- sorted Array Bar returns center.

### F517–F545 — “we actually needed”
- all rail geometry fades except:
  - current value card,
  - its next potential value,
  - one relation socket.

Use example:
```text
8     9
```
but do not turn it into the optimal trace.

### F545–F565 — “from sorting.”
- `ORDER FIRST` label erases with a `RoughLine` chalk wipe.
- the sorted positions loosen slightly.

### F565–F588 pause
The screen now asks silently:
```text
What information did order give us?
```

No answer text yet.

---

# ACT 4 — Reduce the Need to One Question: “Does Next Value Exist?”
## F588–F728

**Narration:**  
“We only wanted to know, does the next value exist?”

### F588–F628 — “We only wanted to know,”
- remove all but one current value:
```text
x
```
at center-left.

- to its right, draw:
```text
x + 1
```
inside a faint target circle.

- the sorted rail itself shrinks into a thin line connecting the two.

### F628–F652 pause
Use full 24f pause:
- line beneath `x → x+1` becomes a question-shaped SVG curve.
- no yes/no yet.

---

## F652–F703 — “does the next value exist?”
At F652:
- draw a small **Existence Gate** between x and x+1.

Visual:
```text
x  ──►  [ ? ]  ──►  x+1
```

At F662 “next”:
- target bubble pulses.

At F685 “exist”:
- gate text morphs:
```text
?
```
→
```text
EXISTS?
```

No data structure named yet.

### F703–F729 pause
Hold one clean central concept:
```text
We only need:  x+1 exists?
```

This is the cognitive simplification.

---

# ACT 5 — “Do We Really Need to Arrange Everything?” → NO
## F729–F894

**Narration:**  
“Do we really need to arrange every number just for that? No.”

### F729–F777 — “Do we really need to arrange”
- sorted values reappear around the existence gate.
- not full master array; use 7 symbolic values.
- each sits on fixed ordered notches.

As “arrange” is spoken:
- notches brighten.
- a long ordering bracket encloses all values.

### F777–F834 — “every number just for that?”
- one by one, the ordering lines connecting values to fixed positions begin to detach.
- values hover 8–12px above their slots.
- existence gate remains center and unchanged.

The point:
global ordering is doing much more than the question needs.

### F834–F856 pause
- freeze ordered structure.

### F856–F869 — “No.”
Premium decisive motion:
- one `RoughLine` strike draws through `ORDER EVERYTHING`,
- 18–20f,
- tiny ChalkDust only at strike end.

Then:
- ordered baseline dissolves,
- cards remain.

### F869–F895 pause
Cards drift into an unordered but controlled field.
No HashSet label yet.

---

# ACT 6 — HashSet: Existence Checks Without Ordering
## F895–F1023

**Narration:**  
“A hash set can answer existence checks quickly on average.”

This is the first explicit HashSet reveal.

### F895–F914 — “A hash set”
- unordered cards snap into the project’s existing `HashSetTable` visual language.
- use actual kit component if compatible with layout.
- keep values unordered:
```text
{ 8, -1, 3, 10, 0, 2, 6, 11, 4, 9, 1 }
```
- duplicate `2` appears only once in the set if master data is used.
- do not arrange numerically.

Label:
```text
HASH SET
```

### F914–F955 — “can answer existence checks”
- current bubble:
```text
8
```
- target:
```text
9 ?
```

A thin `BezierFlight` / query line travels from target9 into HashSet field.

Important:
Do not scan bucket-by-bucket.
HashSet lookup should feel direct.

### F955–F983 — “quickly”
- one membership pulse highlights 9.
- response returns:
```text
YES
```
in `theme.good`.

### F983–F1010 — “on average.”
- second tiny query:
```text
5 ?
```
- one direct pulse,
- response:
```text
NO
```

Small mono annotation:
```text
expected O(1) lookup
```
ONLY because narration says quickly on average.

Do not yet say total algorithm O(n).

### F1010–F1024 pause
Hold HashSet field + fast existence gate.

---

# ACT 7 — New Danger: Starting From Every Value Repeats the Same Sequence
## F1024–F1304

**Narration:**  
“But there is still one danger. If we start walking from every number, we can repeat the same sequence again and again.”

This is the key setup for Scene09.

### F1024–F1082 — “But there is still one danger.”
- HashSet remains center stage.
- good membership glow dims.
- top badge morphs:
  `HASH SET EXISTS?`
  →
  `ONE DANGER`

Do not reveal what it is until narrator does.

### F1082–F1097 pause
- one faint sequence-island shell begins to form below the set.
- no start arrows yet.

---

## F1097–F1166 — “If we start walking from every number,”
Create a conceptual number island:
```text
-1 — 0 — 1 — 2 — 3 — 4
```

Important:
This is a **conceptual sequence island**, not a sorted HashSet display.
Label very small:
`conceptual value chain`

At spoken “every number”:
- place small pivot launch dots over:
  `-1, 0, 1, 2, 3, 4`
- they are all potential launches,
- no one is marked correct.

### F1166–F1182 pause
Hold many launch points.

---

## F1182–F1283 — “we can repeat the same sequence again and again.”
This should be the signature visual of Scene08.

### First walk
From `-1`:
- mint runner draws path:
```text
-1→0→1→2→3→4
```
- path becomes low-opacity history.

### F1194 “repeat”
Second walk from `0`:
```text
0→1→2→3→4
```
- use purple/cyan ghost path,
- overlaps previous path.

### F1216 “same”
Third walk from `1`:
```text
1→2→3→4
```

### F1246 “again”
Fourth walk from `2`:
```text
2→3→4
```

### F1271 “again.”
All ghost paths are visible at once.

The visual should look like **nested transparent ribbons on the same island**.

Under them:
```text
SAME VALUES WALKED AGAIN
```

Do not count complexity yet.

### F1283–F1305 pause
- launch arrows freeze.
- repeated path stack remains.

---

# ACT 8 — Final Mystery: Where Does a Sequence Actually Begin?
## F1305–F1480

**Narration:**  
“So the real question is, how do we know where a sequence actually begins?”

### F1305–F1361 — “So the real question is,”
- all repeated paths retract toward their launch dots.
- path history disappears.
- six launch dots remain.

Then:
- launch dots morph into six identical question markers:
```text
? ? ? ? ? ?
```

No one gets special styling.

### F1361–F1372 pause
- visual silence.
- let learner feel the unresolved issue.

---

## F1372–F1435 — “how do we know where a sequence”
- six question markers gradually dim,
- a single large floating label appears above island:
```text
START ?
```

The label is not attached to any value.

Use:
- `ChalkText`
- pivot outline,
- no answer.

### F1435–F1463 — “actually”
- HashSet field above and conceptual island below move slightly closer.
- draw one vertical query line from HashSet to the `START ?` label.
- no predecessor node, no `x - 1`.

### F1463–F1481 — “begins?”
Final frame:
```text
HASH SET
{ unordered values }

        ↓

-1 — 0 — 1 — 2 — 3 — 4
        START ?
```

Optionally one faint predecessor-shaped empty circle can exist **off to the left with no label/value** only if Scene09 begins by filling it. Safer default: do not show it.

No answer.
No start highlight.
No `x-1`.
No O(n).

Scene09 begins by answering this exact unresolved question.

---

# 📈 Complexity Graphic Specification

## Scan cost
At F88:
```text
O(n)
```
- straight `RoughCurve`
- label `scan`

## Sorting cost
At F240+:
```text
O(n log n)
```
- second `RoughCurve`
- label `sort`

## Overall
At F346:
```text
O(n log n)
```

## Required
At F449:
```text
O(n)
```

Do not add optimal curve beyond this target marker.
The actual optimal proof belongs later.

---

# 🧩 Component Mapping

| Visual Meaning | Kit Component / Technique |
|---|---|
| sorted rail / scan | `RoughLine` |
| complexity curves | `RoughCurve` |
| cost values | `CountUp` |
| ordered rail deconstruction | `SvgMorph` |
| value reorder echoes | `BezierFlight` |
| decisive strike | `RoughLine` + tiny `ChalkDust` |
| HashSet visual | `HashSetTable` |
| membership query | `BezierFlight` / query pulse |
| set presence confirmation | `RoughBox` / `ShineFill` restrained |
| conceptual sequence island | `RoughLine` + fixed value nodes |
| repeated overlapping walks | SVG path progress |
| repeated paths retract | reverse path progress |
| unresolved START ? | `ChalkText` + `RoughBox` |

---

# ✨ Premium / Unique Moments — Exactly Five

## 1. Clean Scan vs Hidden Sorting Tax
One beautiful linear Array Bar sits above a criss-cross ordering lattice, visually separating “cheap scan” from “cost paid before the scan.”

## 2. n log n Ordering Lattice
Horizontal `n` work and vertical `log n` layers collapse into `O(n log n)` without a generic complexity card.

## 3. Sorted Rail → Existence Gate
The entire ordered structure strips away until only:
```text
x+1 exists?
```
remains.

## 4. Ordered Cards → HashSet Field
Position/order constraints erase, and the same values reorganize into the existing `HashSetTable` language with direct existence pings.

## 5. Nested Repeat Walks
Starting from -1, then0, then1, then2 draws nested overlapping paths over the same conceptual sequence island, ending on the unanswered `START ?`.

No extra hero effects.

---

# 🚫 Anti-Slop Rules

Do **not**:
1. reveal predecessor rule
2. show `x - 1 not in set`
3. mark -1/6/8 as starts
4. show optimal code
5. show full optimal trace
6. sort the HashSet field
7. turn HashSet into a linear ordered array
8. use bucket scan animation that implies linear membership
9. state full algorithm O(n) yet
10. use generic “database” icon for HashSet
11. create 3–4 generic dashboard cards
12. use new background/colors
13. use hardcoded accent colors
14. show n log n graph before narration says it
15. show target O(n) before narration asks for it
16. skip complexity proof
17. use exact Python sort internals
18. use generic lightbulb animation
19. put START? over a specific value
20. hard-cut to Scene09

---

# ✅ Critical Review Frames

### F0
Scene07 visual continuity intact.

### F29
correct check drawn.

### F88
scan O(n) begins.

### F112
linear scan curve complete.

### F173
sorting tax visualization begins.

### F240
sorting O(n log n) reveal begins.

### F274
n log n text/graph established.

### F346
overall complexity morph begins.

### F402
overall O(n log n) complete.

### F449
required O(n) starts.

### F476
target mismatch clear.

### F524
complexity receding, discovery focus.

### F588
only existence need remains.

### F685
EXISTS? gate clear.

### F766
“arrange every number?” ordered structure visible.

### F856
NO strike.

### F895
HashSet appears.

### F955
first direct existence query.

### F998
expected O(1) lookup annotation.

### F1067
danger setup.

### F1111
multiple possible launch dots begin.

### F1194
second repeated walk overlays first.

### F1246
nested repeated paths clearly visible.

### F1271
again-and-again stack.

### F1327
real-question transition.

### F1402
START? central mystery.

### F1480
clean Scene09 handoff with no answer.

---

# ✅ Acceptance Checklist

- [ ] exactly **1481 frames**
- [ ] exact supplied sync frames used
- [ ] @dsa/kit consistency lock included and followed
- [ ] boardBg/vignette remain identical to course
- [ ] no per-scene new palette
- [ ] sorted scan shown as O(n) only when narrated
- [ ] sorting shown as O(n log n) only when narrated
- [ ] RoughCurve used after stated complexity
- [ ] illustrative operation scale included
- [ ] overall O(n log n) derived visually
- [ ] required O(n) target appears later
- [ ] sorted structure strips down to existence question
- [ ] ordered positions physically lose importance
- [ ] existing HashSetTable visual language used
- [ ] HashSet values remain unordered
- [ ] expected O(1) membership is shown only as existence lookup
- [ ] no total optimal complexity claim
- [ ] repeated-walk danger shown concretely
- [ ] same sequence visibly retraced from multiple launch points
- [ ] no predecessor rule spoiler
- [ ] final START? attached to no specific value
- [ ] Scene09 can answer the final question directly
- [ ] optical hero stage y≈300..600
- [ ] captions zone remains clear
- [ ] no layout jitter

---

# Final Scene 08 Visual Story — One Line

**Scene07’s clean sorted Array Bar returns to center and proves that the forward scan itself is linear, but a hidden criss-cross ordering lattice grows underneath it to reveal the `O(n log n)` sorting tax; scan and sort costs combine into overall `O(n log n)` and visibly miss the required `O(n)` target, then the sorted rail is progressively stripped away until the only information left is the question `x + 1 exists?`; the ordering constraints are struck out, the same values detach into the existing unordered HashSet visual where direct membership pings answer existence quickly on average, but a conceptual sequence island then exposes the remaining danger as overlapping walks launch from `-1`, `0`, `1`, and `2` and repeatedly traverse the same values — all those paths finally retract into one unresolved `START ?` question with no predecessor-rule spoiler, handing Scene09 the exact discovery it must answer.**
