# Scene 06 · TRACE — BETTER / SORTED ARRAY BAR Animation Plan

**Longest Consecutive Sequence · LC #128 · Type C**  
**Audio**: `06-trace-better.mp3` — **97.520 s** — **2926 frames** @ 30 fps  
**Goal**: Trace the sorting approach completely while introducing one memorable visual language: a **living Array Bar / Consecutive Rail** beneath the sorted values. The bar physically grows for `+1`, ripples but does not grow for a duplicate, and fractures at missing values. By the end, the student should visually understand the three scan states — **extend, ignore, reset** — before seeing code.

---

# 🎯 Pedagogical Philosophy & Core Rules

## 1. TRACE ONLY — ZERO CODE
This scene is purely visual.

Do not show:
- Python code,
- `if` statements,
- `continue`,
- code editor,
- O(n log n),
- HashSet,
- predecessor/start-rule logic.

The next scene handles implementation.

---

## 2. COMPLETE TRACE — NO SKIPPED COMPARISONS

The complete sorted scan must be shown:

```text
[-1, 0, 1, 2, 2, 3, 4, 6, 8, 9, 10, 11]
```

Relationships:

```text
-1 → 0      +1      length 2
0  → 1      +1      length 3
1  → 2      +1      length 4
2  → 2      duplicate — ignore — length stays 4
2  → 3      +1      length 5
3  → 4      +1      length 6, best 6
4  → 6      gap 5   reset to 1
6  → 8      gap 7   reset to 1
8  → 9      +1      length 2
9  → 10     +1      length 3
10 → 11     +1      length 4
best remains 6
```

Nothing is summarized away.

---

## 3. UNIQUE SIGNATURE VISUAL — THE ARRAY BAR

The entire sorted trace runs on one **living SVG Array Bar**.

### Structure

```text
[-1] [0] [1] [2] [2] [3] [4] [6] [8] [9] [10] [11]
 ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
      LIVING CONSECUTIVE RAIL / ARRAY BAR
```

The bar has 3 layers:

### Base rail
A rough neutral SVG path beneath the full sorted row.

### Active sequence fill
A mint chalk stroke grows only across the current consecutive run.

### Semantic notches
Each visited value creates a small rail notch:
- normal notch = unique value used in current run,
- double notch / ripple = duplicate,
- fractured notch = gap / reset.

This bar becomes the primary visual memory of the approach.

---

## 4. SAME CARDS — REAL MORPH CONTINUITY

Scene05 ended with the same values arranged into sorted order.

But Scene06 narration first repeats the raw input and then says “After sorting”.

To respect both continuity and audio:

1. start from Scene05’s sorted row,
2. on “Same input” **rewind** the exact same cards back to their original unsorted slots,
3. populate/reveal the original order on the spoken values,
4. on “After sorting” run the same stored Bezier paths forward,
5. each spoken sorted value lands into its final slot,
6. as they land, the Array Bar straightens underneath them.

This is not a new explanation. It is a **visual echo / rewind** proving they are the same cards.

---

## 5. ONE IDEA PER MOTION BEAT

For every pair:

```text
pointer reaches next card
→ pair bracket appears
→ relationship resolves
→ bar changes
→ length updates
```

Never:
- pointer move,
- relationship text,
- bar growth,
- counter change

all at once.

---

# 📐 Layout Specifications — 1920×1080

## Top badge
```text
BETTER · SORTED TRACE
y = 28..70
```

## Main sorted array
```text
y = 305..435
```

12 fixed slots:

```text
slotWidth  = 92px
slotHeight = 106px
gap        = 16px
xStart     ≈ 320px
```

## Comparison lens
Above current pair:

```text
y = 250..300
```

A narrow rough bracket / lens spans only previous + current card.

## Array Bar
Under row:

```text
y = 470..540
```

Height:
```text
60–70px
```

Includes:
- base rail,
- active run stroke,
- notches,
- gap fractures,
- duplicate ripple.

## State counters
```text
y = 625..740
```

Left:
```text
CURRENT LENGTH
```

Right:
```text
BEST
```

## Rule explanation zone
```text
y = 760..870
```

Only used near end for:
`EXTEND · IGNORE · RESET`.

## Captions
```text
y = 960..1040
```

---

# 🎨 Semantic Theme Rules

- sorted cards / neutral rail → `theme.chalkText`
- active current pair → `theme.pivot`
- consecutive +1 / active run → `theme.good`
- duplicate ripple / second 2 → `theme.purple`
- gap / missing 5 or 7 → `theme.warn`
- movement guide / comparison bracket → `theme.cyan`
- inactive history → `theme.chalkDim`

No new colors.

---

# 🧩 Core Components

| Meaning | Preferred Component / Technique |
|---|---|
| number cards | `RoughBox` |
| number text | mono + `ChalkText` where useful |
| raw↔sorted card movement | `BezierFlight` |
| base Array Bar | custom SVG rough path |
| clean↔wavy bar morph | `SvgMorph` |
| active sequence fill | `RoughLine` / stroke-dash progress |
| comparison bracket | `RoughLine` |
| duplicate bar ripple | `SvgMorph` |
| missing-value phantom notch | SVG + `RoughBox` ghost |
| gap fracture | `Shatter` + `SvgMorph` |
| current / best | `CountUp` |
| bar→rule legend morph | `SvgMorph` |
| scene-to-code handoff | bar paths collapse into code baselines |

---

# 🧬 Master Morph Chain

```text
Scene05 sorted row
        ↓ REWIND
same cards → original raw order
        ↓
spoken original values
        ↓
AFTER SORTING
        ↓ BezierFlight replay
same cards → sorted slots
        ↓ SvgMorph
wavy disorder line → straight Array Bar
        ↓
-1 current start
        ↓
bar grows through 0,1,2
        ↓
second 2 causes purple double-notch ripple
        ↓
bar keeps growing through 3,4
        ↓
BEST = 6
        ↓
4→6 exposes phantom 5
        ↓ Shatter
Array Bar fractures / resets
        ↓
6→8 exposes phantom 7
        ↓ Shatter
fractures / resets
        ↓
new bar grows 8→9→10→11
        ↓
full rail history compresses
        ↓
EXTEND / IGNORE / RESET
        ↓
three rail motifs collapse into code-line guides
```

---

# ⏱ Audio Breakdown & Act-by-Act Flow

| Act | Frames | Spoken Beat | Unique Visual Action |
|---|---:|---|---|
| 0 | F0–241 | Same input + raw values | Scene05 sorted row rewinds back into raw order, synced value-by-value. |
| 1 | F242–526 | “After sorting…” + sorted values | Same cards replay their Bezier paths into sorted slots; Array Bar straightens beneath. |
| 2 | F527–1020 | -1→0→1→2 | Mint bar grows notch-by-notch; current 1→4. |
| 3 | F1021–1369 | duplicate second 2 | Array Bar creates double-notch/ripple; no length increase, no break. |
| 4 | F1370–1698 | 2→3→4 | Rail resumes growth; current→6; best→6. |
| 5 | F1699–2119 | gaps 5 and 7 | Phantom missing values rise from rail; bar fractures twice; reset. |
| 6 | F2120–2462 | 8→9→10→11 | New rail segment grows to length4; best stays6. |
| 7 | F2463–2833 | three rules | Real trace bar morphs into EXTEND / IGNORE / RESET visual grammar. |
| 8 | F2834–2925 | code handoff | Three rail motifs compress into editor/code guide lines. |

---

# ACT 0 — “Same Input” · Reverse the Previous Sort
## F0–F241

**Narration:**  
“Same input. 8, 1, 6, 3, 2, 2, 4, 10, 9, 11, minus 1, 0.”

### F0–F23 — “Same input.”
Inherited frame:
```text
[-1][0][1][2][2][3][4][6][8][9][10][11]
```

- Keep Scene05 sorted row visible.
- Top badge writes:
  `SAME VALUES`
- Base Array Bar from Scene05 is present but only 25% opacity.

### F23–F38 — 15f pause
Premium setup:
- every sorted card lifts 10–14px,
- its previously stored sorting path appears faintly behind it,
- paths point backward toward original slots.

Do not move yet.

---

## Word-by-word reverse flights

As each original value is spoken, **that exact card flies backward** along its stored Bezier path into its original input slot.

Original target slots:

```text
slot0  8
slot1  1
slot2  6
slot3  3
slot4  first 2
slot5  second 2
slot6  4
slot7  10
slot8  9
slot9  11
slot10 -1
slot11 0
```

### F38 — “8”
- card `8` releases from sorted slot8.
- reverse flight toward raw slot0.

### F43 — “1”
- `1` begins reverse flight toward raw slot1.

### F64 — “6”
- `6` → raw slot2.

### F82 — “3”
- `3` → raw slot3.

### F95 — first “2”
- first2 → raw slot4.

### F113 — second “2”
- second2 → raw slot5.
- distinguish internally by stable card ID, not visible labels.

### F122 — “4”
- `4` → raw slot6.

### F141 — “10”
- `10` → raw slot7.

### F156 — “9”
- `9` → raw slot8.

### F171 — “11”
- `11` → raw slot9.

### F191 — “minus”
- `-1` begins reverse flight to raw slot10.
- keep glyph `-1` intact; narration split does not mean split the visual card.

### F209 — “0”
- `0` → raw slot11.

### Flight rule
Each flight:
- 20–30f,
- paths may overlap in time,
- arc heights differ to avoid collision,
- destination slot remains fixed,
- card settles with no bounce.

### Array Bar behavior
As cards leave sorted slots:
- the straight rail progressively loses its notches,
- `SvgMorph` turns straight rail into a slightly irregular/wavy **RAW INPUT BAR**,
- by F224 the rail represents the unsorted input.

### F224–F242 — 18f pause
Final raw frame:

```text
[8][1][6][3][2][2][4][10][9][11][-1][0]
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
RAW ARRAY BAR
```

No pointer.
No length.
No relationship highlights.

---

# ACT 1 — “After Sorting” · Cards Build the Sorted Array Bar
## F242–F526

**Narration:**  
“After sorting, minus 1, 0, 1, 2, 2, 3, 4, 6, 8, 9, 10, 11.”

### F242–F258 — “After sorting”
- top helper morphs:
  `RAW ARRAY BAR`
  →
  `SORTED ARRAY BAR`

- Base rail begins morphing:
  wavy SVG path → straight measured chalk rail.

- 12 faint destination notches appear underneath sorted slot coordinates.

No cards move before `sorting` is spoken.

---

## Spoken sorted-value landings

Unlike a generic all-at-once sort, cards land into their final slots **as the teacher speaks the sorted order**.

### F268 — “minus”
- `-1` leaves raw slot10.
- Bezier-flies to sorted slot0.
- notch0 becomes full chalk.

### F289 — “0”
- `0` → sorted slot1.

### F313 — “1”
- `1` → sorted slot2.

### F328 — first “2”
- first2 → sorted slot3.

### F351 — second “2”
- second2 → sorted slot4.

### F370 — “3”
- `3` → sorted slot5.

### F389 — “4”
- `4` → sorted slot6.

### F410 — “6”
- `6` → sorted slot7.

### F433 — “8”
- `8` → sorted slot8.

### F449 — “9”
- `9` → sorted slot9.

### F472 — “10”
- `10` → sorted slot10.

### F491 — “11”
- `11` → sorted slot11.

### Rail choreography
Every card landing does two things, sequentially:
1. card settles,
2. its rail notch writes beneath it.

By F509 the rail is perfectly straight and all notches are visible.

### F509–F527 — 18f pause
Do not start trace.

Use this pause to reveal only:
- `CURRENT LENGTH: —`
- `BEST: —`
- a pivot scan bead parked just before `-1`.

This becomes the signature “Array Bar ready” frame.

---

# ACT 2 — First Consecutive Run · -1 → 0 → 1 → 2
## F527–F1020

## Start -1
### F527–F557 — “Start with minus 1.”
- scan bead slides onto `-1`.
- `-1` card gets pivot RoughBox.
- first rail notch becomes mint.
- under -1, a tiny vertical chalk stem connects card to rail.
- begin a mint **active-run fill** from notch0, width only one notch.

### F563–F596 — “Current length is 1.”
- `CURRENT LENGTH` writes `1`.
- `BEST` initializes to `1` only if the intended visual system wants a live best from start; otherwise keep best faint until later.
- Prefer:
  `CURRENT = 1`
  `BEST = 1`
  because the trace needs a coherent live state.

---

## -1 → 0
### F602–F626 — “Move to 0.”
- comparison lens moves to span `-1 | 0`.
- scan bead remains at current0 only after the relationship resolves.

### F641–F730 — “0 is exactly minus 1 plus 1.”
Create a premium **equation arch** above the pair.

Sequence:
1. F641 `0` card pulses.
2. F661 “exactly” draws thin cyan bracket around pair.
3. F676 `-1` label rises from previous card.
4. F704 “plus” draws `+1`.
5. F713 “1” completes:
   `-1 + 1 = 0`.

Then:
- rail segment between -1 and0 fills mint,
- notch under0 turns mint,
- only after the rail extends does scan bead move to0.

### F736–F755 — “Length 2.”
- CountUp `1 → 2`.
- two filled rail notches now visually equal length2.

---

## 0 → 1
### F758–F782 — “Move to 1.”
- lens shifts to `0 | 1`.

### F782–F856 — “1 is 0 plus 1.”
- repeat same visual grammar, faster:
  `0 + 1 = 1`.
- rail extends one notch.

### F863–F884 — “Length 3.”
- CountUp `2 → 3`.

---

## 1 → 2
### F889–F911 — “Move to 2.”
- lens spans `1 | first2`.

### F925–F975 — “2 is 1 plus 1.”
- equation:
  `1 + 1 = 2`.
- rail extends to first2 notch.

### F991–F1011 — “Length 4.”
- CountUp `3 → 4`.

### F1011–F1021 — 10f pause
Hold a clean state:

```text
[-1][0][1][2][2]...
 ╰━━━━━━ mint active run ━━━━━━╯
CURRENT 4
```

Second2 remains neutral.

---

# ACT 3 — Duplicate Hero Moment · 2 → 2
## F1021–F1369

This should be the scene’s most unique micro-animation.

## F1021–F1084
**“Now the next value is 2, again.”**

### F1021–F1058
- comparison lens widens to cover:
  `first2 | second2`.
- active scan bead attempts to move to second2.

### F1058 — second “2”
The second2 card rises ~18px.

Below it, its rail notch **morphs into a double-notch**:
```text
| |    →    || 
```

### F1070–F1084 — “again.”
- a purple ripple travels along only the tiny rail segment between the two 2s,
- active mint run does **not** extend,
- scan bead pauses between the duplicate cards.

This visually says:
“we saw another card, but no new value was added.”

---

## F1105–F1132 — “This is a duplicate.”
- second2 receives `theme.purple` outline.
- a thin SVG loop draws:
```text
2 ↺ 2
```
- tiny label:
  `SAME VALUE`

No warn color.

---

## F1147–F1201 — “It does not increase the sequence.”
- show current length `4`.
- a ghost `5` tries to roll in for 5f but is immediately chalk-erased / blocked by an equals sign.
Better:
- draw an upward counter arrow from4,
- stop it with a rough `=` barrier,
- arrow retracts.
- counter remains4.

Array Bar:
- purple ripple dissipates,
- mint fill length remains exactly unchanged.

---

## F1214–F1295 — “And it does not break the sequence, so ignore it.”
Important visual distinction:
duplicate is not a gap.

### F1214–F1254
- try to fracture the rail with a faint crack preview,
- on spoken “does not break”, the crack seals back / morphs smooth.
- this is subtle, 12–16f.

### F1273 — “so”
- second2 begins lowering back.

### F1280 — “ignore”
- scan bead slides **past the duplicate notch** without adding mint length.
- second2 card fades to ~55% while current representative remains the value2 conceptually.
- tiny chalk annotation under duplicate:
  `SKIP`

### F1288–F1295 — “it.”
- `SKIP` settles then reduces to 30%.

### F1295–F1319 — 24f pause
The duplicate notch compresses vertically into a small historical mark but stays visible on the bar.

---

## F1319–F1361 — “Current length stays 4.”
- `CURRENT LENGTH = 4` receives a restrained pivot underline.
- no CountUp.
- a static equality relation appears for 10f:
  `4 = 4`.

### F1361–F1370
- scan bead prepares to move to3.

---

# ACT 4 — Resume Rail Growth · 2 → 3 → 4
## F1370–F1698

## 2 → 3
### F1370–F1397 — “Move to 3.”
- comparison lens spans representative2 →3.
- second duplicate2 stays dim as historical skip.

### F1405–F1457 — “3 is 2 plus 1.”
- equation arch:
  `2 + 1 = 3`.
- mint rail jumps over duplicate mark cleanly to3 notch.
- important: it extends by **one logical value**, not two cards.

### F1473–F1498 — “Length 5.”
- CountUp `4 → 5`.

---

## 3 → 4
### F1507–F1535 — “Move to 4.”
- lens → `3 | 4`.

### F1543–F1600 — “4 is 3 plus 1.”
- equation:
  `3 + 1 = 4`.
- rail extends to4.

### F1600–F1637 — “Length 6.”
- CountUp `5 → 6`.
- active rail now spans:
  `-1 ... 4`
  while duplicate2 is represented by a small stacked notch that did not add run length.

### F1642–F1684 — “Best becomes 6.”
Hero beat:
1. `BEST` wakes from neutral/current value.
2. rolls to `6`.
3. mint active rail gets one subtle `ShineFill`.
4. under rail write:
   `LONGEST SO FAR`.

No particle celebration.

### F1684–F1699 — 15f pause
Hold longest run.

---

# ACT 5 — Gap Fractures · Missing 5 and Missing 7
## F1699–F2119

This is where the Array Bar becomes visually special.

---

## Gap 4 → 6
### F1699–F1730 — “Now 4 to 6.”
- comparison lens spans4 and6.
- because values are not +1, a **phantom rail socket** rises between them.

It contains:
```text
5 ?
```

This socket does not shift actual cards.
It emerges vertically from the rail between slots.

### F1743–F1767 — “5 is missing.”
- phantom `5` becomes warn.
- its notch fails to connect to any card.
- active mint rail stretches toward it, stops.

### F1767–F1790 — 23f pause
Hold tension:
```text
4 ━━━ 5?   6
```

### F1790–F1824 — “So the sequence breaks.”
Premium fracture:
- `Shatter` only the mint active rail at phantom5,
- rail break opens 10–14px,
- left completed run segment desaturates to historical mint/dim,
- a tiny chalk fragment falls/fades.

### F1824–F1839 — 15f pause
New neutral rail segment under6 becomes available.

### F1839–F1898 — “Reset current length to 1 for 6.”
- current counter morphs:
  `6 → 1`
- scan bead lands on6.
- new active run starts as a single mint notch under6.
- previous -1..4 rail remains faint as history.
- best remains6.

---

## Gap 6 → 8
### F1906–F1954 — “Next, 6 to 8.”
- lens spans6 and8.
- second phantom socket rises:
  `7 ?`.

### F1967–F1993 — “7 is missing.”
- phantom7 warn.
- rail reaches toward7 but fails.

### F1993–F2011 — 18f pause
Hold missing7.

### F2011–F2026 — “Break again.”
- second small fracture.
- current active6 rail becomes history.

### F2026–F2054 — 28f pause
Use the long pause for a **bar history reveal**:
- completed historical run segment under -1..4,
- tiny historical single notch under6,
- empty new segment waiting under8.

This makes the scan’s segmentation visually obvious.

### F2054–F2108 — “Current length is 1 for 8.”
- scan bead moves to8.
- new mint notch starts under8.
- CountUp stays / resets to1.
- best remains6.

### F2108–F2120 — pause
Prepare final run.

---

# ACT 6 — Final Run · 8 → 9 → 10 → 11
## F2120–F2462

## 8 → 9
### F2120–F2154 — “Now 8 to 9”
- lens `8 | 9`.
- rail begins extending.

### F2163–F2175 — “consecutive.”
- write tiny `+1`.
- segment fills mint.
- scan bead lands9.

### F2175–F2194 — 19f pause
Hold pair.

### F2194–F2215 — “Length 2.”
- CountUp `1 → 2`.

---

## 9 → 10
### F2224–F2249 — “9 to 10”
- lens moves.

### F2261–F2274 — “consecutive.”
- +1 relation,
- rail extends to10.

### F2274–F2293 — 19f pause

### F2293–F2314 — “Length 3.”
- CountUp `2 → 3`.

---

## 10 → 11
### F2323–F2350 — “10 to 11”
- lens moves.

### F2363–F2372 — “consecutive.”
- rail extends to11.

### F2372–F2386 — pause

### F2386–F2407 — “Length 4.”
- CountUp `3 → 4`.

### F2414–F2452 — “Best is still 6.”
- show:
  `CURRENT 4`
  beside
  `BEST 6`
- BEST does not animate numerically.
- instead a small chalk check appears under6:
  `keeps best`.

### F2454–F2463 — “Done.”
- comparison lens retracts.
- scan bead parks after11.
- complete rail history becomes fully readable.

---

# ACT 7 — Real Trace Morphs Into the Three Rules
## F2463–F2833

This should not become three generic cards.

Use the **actual Array Bar history** and morph it into three semantic motifs.

---

## Rule 1 — +1 means EXTEND
### F2463–F2541
**“So while scanning the sorted array…”**

- whole sorted row stays.
- all historical bar segments dim except one successful relation:
  `8 → 9`.
- comparison lens reappears over8,9.

### F2553–F2599 — “plus 1 means extend.”
- relationship becomes:
  `8 + 1 = 9`
- mint rail segment **stretches** from a short notch into a long elastic bar.
- underneath write:
  `EXTEND`
- use good color.

Then the relation motif detaches downward into rule zone but remains visually connected to the main rail by a faint vertical thread.

---

## Rule 2 — same value means DUPLICATE / IGNORE
### F2616–F2669 — “Same value means duplicate.”
- focus shifts to `2 | 2`.
- duplicate double-notch history rises from the main rail.
- purple ripple replays once.

### F2683–F2702 — “Ignore it.”
- duplicate notch folds vertically / compresses into a tiny stacked marker.
- text:
  `IGNORE`
- current-run bar does not extend.

Second rule motif settles beside EXTEND.

---

## Rule 3 — anything else means GAP / RESET
### F2726–F2765 — “Anything else means gap.”
- focus shifts to `4 | 6`.
- phantom5 rises from bar.
- small fracture replays.

### F2765–F2792 — 27f pause
Hold:
```text
4  [5?]  6
```

### F2792–F2815 — “Reset.”
- fractured rail pieces separate slightly,
- left segment recedes,
- a fresh 1-notch rail appears under6.
- text:
  `RESET`

Third motif settles.

---

## Three-rule visual — not cards
### F2815–F2834 — 19f pause
The three motifs align as one **continuous rule strip**:

```text
+1           SAME           GAP
━━━━▶        ≡≡             ━╳━
EXTEND       IGNORE         RESET
```

These are miniature Array-Bar shapes, not rectangular panels.

The actual sorted array remains above at ~35% opacity.

---

# ACT 8 — Morph the Array Bar Into Scene 07 Code
## F2834–F2925

**Narration:** “Now let's write exactly this scan in code.”

### F2834–F2850 — “Now let's”
- sorted row begins receding upward.
- rule-strip remains center.

### F2850 — “write”
- `EXTEND`, `IGNORE`, `RESET` text fades.
- their three SVG rail motifs straighten.

### F2859–F2880 — “exactly”
Premium handoff:
- three rail motifs morph into **three horizontal code guide lines**:
  1. duplicate-condition line,
  2. consecutive-condition line,
  3. else/reset line.

No code text yet.

### F2880–F2903 — “this scan”
- guide lines shift left into future code-editor panel position.
- a blinking cursor shell appears at first guide.
- sorted row becomes a faint right-side visual reference or fully recedes depending on Scene07 layout.

### F2903–F2926 — “in code.”
Final state:
- editor shell beginning to form,
- 3 empty guide lines,
- cursor ready,
- no Python code typed yet.

Scene07 begins from this exact state.

---

# 🧠 Array Bar SVG Design

## Base path

Use one wide rough line:

```text
M 340 505
C 620 500, 1260 510, 1580 505
```

But generate a small deterministic rough wobble per scene.

### Straight state
Used after sorting.

### Raw / unsorted state
Morph to a mildly wavy version:
```text
M340 505
C520 487, 640 524, 800 500
C980 476, 1150 529, 1320 497
C1440 486, 1525 515, 1580 505
```

`SvgMorph` between the two.

---

## Active run fill

Do not redraw separate bars manually.

Use a second overlay path:
- same baseline geometry,
- stroke = `theme.good`,
- reveal with strokeDashoffset between current run notches.

When a run resets:
- completed overlay becomes historical at 15–22% opacity,
- create a fresh active overlay segment from the new start notch.

---

## Notches

Under each sorted slot:
```text
short vertical rough tick
```

States:
- neutral: chalkDim
- active: good
- duplicate: purple double-tick
- reset start: pivot → good

---

## Duplicate ripple morph

Normal rail between two2s:
```text
────────
```

Morph to:
```text
───∿∿───
```

Then back to straight.

The wave is localized around the duplicate pair.

This is more unique than merely writing “duplicate.”

---

## Gap phantom notch

For 4→6:
- spawn a vertical stem at midpoint between the real notches,
- ghost card:
  `[5 ?]`
- stem does not connect to any real slot.

For 6→8:
- same for7.

This teaches missing numerical values without shifting sorted cards.

---

# ✨ Premium / Stunning Moments — Exactly Five

## 1. Sorting Echo / Rewind
Scene05 sorted row rewinds into raw input, then the same cards replay their paths forward into sorted order on exact spoken values.

## 2. Living Array Bar Growth
Every `+1` makes a real mint rail physically grow beneath the values.

## 3. Duplicate Double-Notch
The second2 produces a purple local ripple/double-notch that neither grows nor breaks the bar.

## 4. Missing-Value Rail Fracture
Ghost5 / ghost7 rise directly from the bar, and the active rail fractures at the missing notch.

## 5. Trace → Three-Rule Strip → Code Lines
The actual rail history morphs into EXTEND/IGNORE/RESET, then those same SVG shapes straighten into Scene07 code-guide lines.

No additional hero effects.

---

# 🚫 Anti-Slop Rules

Do **not**:
1. use a normal pointer-only sorted trace,
2. make three generic rule cards,
3. respawn arrays,
4. sort all values instantly,
5. pre-render all comparison arrows,
6. show code,
7. show HashSet,
8. show O(n log n),
9. animate duplicate as an error,
10. increase length on second2,
11. reset on duplicate,
12. skip ghost5 or ghost7,
13. shift real sorted card positions to insert5/7,
14. use auto-flex,
15. bounce cards,
16. fracture the whole screen,
17. use Shatter for every event,
18. move counter and pointer simultaneously,
19. show final rules before trace proves them,
20. hard-cut to Scene07.

---

# ✅ Critical Review Frames

### F0
Inherited Scene05 sorted row; no reset.

### F38
first raw reverse flight starts.

### F224
full raw input restored.

### F242
“After sorting” morph begins.

### F351
second2 lands in sorted bar without special treatment yet.

### F509
full sorted Array Bar ready.

### F527
-1 becomes active start.

### F713
`-1 + 1 = 0`, rail extending.

### F828
0→1 relation.

### F958
1→2 relation.

### F1058
second2 active, duplicate moment beginning.

### F1121
duplicate state clearly visible.

### F1280
ignore action; bar length unchanged.

### F1346
current length visibly still4.

### F1441
2→3 relationship.

### F1583
3→4 relationship.

### F1622
current length6.

### F1663
best6.

### F1743
phantom5 visible.

### F1811
first rail fracture.

### F1872
reset toward1.

### F1967
phantom7 visible.

### F2011
second fracture.

### F2140
8→9 relation begins.

### F2234
9→10.

### F2336
10→11.

### F2438
best still6.

### F2578
EXTEND rail motif.

### F2650
duplicate motif.

### F2750
gap motif.

### F2792
RESET.

### F2859
rule-strip beginning to morph into code lines.

### F2925
clean Scene07 code handoff.

---

# ✅ Acceptance Checklist

- [ ] Exactly **2926 frames**
- [ ] sync JSON word frames respected
- [ ] Scene05 continuity preserved
- [ ] same card identities used raw↔sorted
- [ ] reverse sort synchronized to raw-value narration
- [ ] forward sort synchronized to sorted-value narration
- [ ] Array Bar is primary visual system
- [ ] bar grows only on +1
- [ ] duplicate creates double-notch/ripple
- [ ] duplicate does not grow current length
- [ ] duplicate does not break rail
- [ ] current length stays4 after duplicate
- [ ] ghost5 shown at 4→6
- [ ] rail fractures at missing5
- [ ] current resets1 for6
- [ ] ghost7 shown at6→8
- [ ] rail fractures again
- [ ] current resets1 for8
- [ ] 8→9→10→11 traced completely
- [ ] best remains6
- [ ] rules appear only after full trace
- [ ] rules are rail motifs, not cards
- [ ] code remains hidden
- [ ] final rail motifs morph into Scene07 guide lines
- [ ] main stage centered y≈300..600
- [ ] captions safe zone clear
- [ ] no layout jitter
- [ ] theme tokens only

---

# Final Scene 06 Visual Story — One Line

**The sorted cards inherited from Scene05 first rewind along their stored Bezier paths back into the original input as the teacher repeats the testcase, then the exact same cards replay forward into sorted order while a wavy raw-input SVG morphs into a straight living Array Bar; a mint active rail grows notch-by-notch from `-1→0→1→2`, the second `2` creates a purple double-notch ripple that neither grows nor breaks the rail, the bar resumes through `3→4` to reach length6 and best6, phantom missing values `5` and `7` physically rise from the rail and fracture it into new run segments at `6` and `8`, a fresh mint segment grows through `8→9→10→11`, and the completed bar history finally morphs into three non-card rail motifs — `EXTEND / IGNORE / RESET` — which straighten into Scene07’s empty code-guide lines.**
