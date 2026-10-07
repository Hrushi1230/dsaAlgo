# Scene 01 · INTRO / ROADMAP — MASTER UI Animation Plan

**Longest Consecutive Sequence · LC #128 · Type C**  
**Audio**: `01-intro-roadmap.mp3` — **43.020 s** — **1291 frames** @ 30 fps  
**Reference UI**: the locked Code With Animation `DSA PATTERN ROADMAP` screen supplied by the user  
**Goal**: Preserve the exact reusable course roadmap identity while visibly continuing from the previous lesson. Start from the prior-state UI (`8 / 227 COMPLETE`, Valid Sudoku `009` NOW ACTIVE), complete Valid Sudoku on narration, update all progress states to 9 completed, activate `010 Longest Consecutive Sequence`, then morph that exact active roadmap row into the LC128 problem stage and hand it directly to Scene 02.

---

# 🔒 MASTER ROADMAP UI — NON-NEGOTIABLE

This scene must reproduce the **same roadmap UI architecture** from the supplied reference.

Do **not** redesign it.

## Exact reusable visual shell

### Top bar
- left: `CODE WITH ANIMATION`
- center: `DSA PATTERN ROADMAP`
- right: `227 PROBLEMS · 19 PATTERNS`
- far-right progress pill:
  - initial state: `8 / 227 COMPLETE`
  - after Valid Sudoku completion: `9 / 227 COMPLETE`

### Left sidebar
- header: `19 COURSE PATTERNS`
- rows:
  - `01 Arrays & Hashing`
  - `02 Two Pointers`
  - `03 Sliding Window`
  - `04 Stack`
  - `05 Binary Search`
  - `06 Linked List`
  - `07 Trees`
  - `08 Tries`
  - `09 Heap / Priority Queue`
  - `10 Intervals`
  - `11 Greedy`
  - `12 Backtracking`
  - `13 Graphs`
  - `14 Advanced Graphs`
  - `15 1-D Dynamic Programming`
  - `16 2-D Dynamic Programming`
  - `17 Bit Manipulation`
  - `18 Math & Geometry`
  - `19 String Algorithms`
- `01 Arrays & Hashing` uses the same warm outlined ACTIVE state as the reference.
- Other patterns remain dim.

### Main pattern header
```text
PATTERN 01   Arrays & Hashing
18 PROBLEMS
```

Initial right-side completion state:
```text
8 / 18 COMPLETED
```

After Valid Sudoku is completed:
```text
9 / 18 COMPLETED
```

### Problem list
Use the same stacked-row geometry and typography from the supplied UI.

```text
001 Contains Duplicate                 LC 217   EASY
002 Valid Anagram                      LC 242   EASY
003 Two Sum                            LC 1     EASY
004 Pascal's Triangle                  LC 118   EASY
005 Majority Element                   LC 169   EASY
006 Group Anagrams                     LC 49    MEDIUM
007 Top K Frequent Elements            LC 347   MEDIUM
008 Product of Array Except Self       LC 238   MEDIUM
009 Valid Sudoku                       LC 36    MEDIUM
010 Longest Consecutive Sequence       LC 128   MEDIUM
```

Initial state must match the previous-video state:
- rows `001..008` = COMPLETED teal/cyan check state
- row `009 Valid Sudoku` = warm gold `NOW ACTIVE`
- row `010 Longest Consecutive Sequence` = dim FUTURE state

Then during this scene:
- row `009` morphs from ACTIVE → COMPLETED
- row `010` morphs from FUTURE → NOW ACTIVE

### Right vertical progress rail
Same narrow rail as the reference:
- top label `001`
- bottom label `227`
- warm current-position indicator

Initial indicator = problem `009`.
After current-question activation = problem `010`.

---

# 🎯 Pedagogical & Motion Rules

## 1. SAME UI, NEW STATE
The premium feeling comes from **state transformation**, not changing the design.

The viewer should recognize the exact same course UI from previous videos.

## 2. THE PREVIOUS VIDEO IS PHYSICALLY CONTINUED
Frame 0 begins from the end-state of the previous lesson:

```text
8 / 227 COMPLETE
8 / 18 COMPLETED
009 VALID SUDOKU — NOW ACTIVE
010 LONGEST CONSECUTIVE SEQUENCE — FUTURE
```

This lets the narration “Welcome back” feel real.

## 3. NO ABSTRACT ROADMAP GRAPH
Do not replace the screen with:
- floating nodes,
- island diagrams,
- generic course cards,
- a radial roadmap,
- three-column dashboards.

All roadmap moments happen inside the locked supplied UI.

## 4. CAMERA MOVES INSIDE THE UI
Use a virtual camera:
- full UI overview,
- subtle focus on sidebar,
- subtle focus on progress rows,
- row 009 close focus,
- row 010 close focus,
- row 010 lift-out morph.

Never hard-cut from one unrelated layout to another.

## 5. ONE STATE CHANGE AT A TIME
Examples:
- row 009 first changes ACTIVE → COMPLETED,
- then counters roll 8→9,
- then rail indicator advances,
- then row 010 activates.

Do not fire all four simultaneously.

## 6. EXACT AUDIO SYNC
Major triggers:

```text
continuing    F69
DSA           F120
roadmap       F156
227           F189
pattern       F275

arrays        F389
hashing       F415

Nine          F452
complete      F489

previous      F534
Valid         F592
Sudoku        F604

question      F671
10            F699
longest       F728
consecutive   F740
sequence      F763

128           F817
medium        F869

input         F902
unsorted      F925
find          F998
longest       F1024
consecutive   F1061

target        F1124
linear        F1148

code          F1201
first         F1239
understand    F1250
question      F1279
```

---

# ⏱ Audio Breakdown & Act-by-Act Flow

| Act | Frames | Spoken beat | Visual choreography |
|---|---:|---|---|
| 0 | F0–52 | “Welcome back.” | Resume exact previous roadmap state. |
| 1 | F53–330 | complete DSA roadmap / 227 / pattern by pattern | Reveal/focus the fixed full roadmap shell. |
| 2 | F331–451 | inside Arrays & Hashing | Spotlight sidebar Pattern 01 and main pattern header. |
| 3 | F452–521 | nine questions complete | Complete Valid Sudoku; counters update 8→9. |
| 4 | F522–635 | previous question = Valid Sudoku | Focus completed row 009 and confirm prior stop. |
| 5 | F636–798 | question 10 = Longest Consecutive Sequence | Move active state from row 009 to row 010. |
| 6 | F799–879 | LeetCode 128, Medium | Spotlight row 010 metadata. |
| 7 | F880–1116 | unsorted input / longest consecutive run | Row 010 lifts out and morphs into problem teaser. |
| 8 | F1117–1186 | target linear time | Add `O(n)` target. |
| 9 | F1187–1290 | before code, understand question | Reject code; morph row/card into Scene 02 empty-slot stage. |

---

# ACT 0 — Resume the Exact Previous-Video UI
## F0–F52
**Narration:** “Welcome back.”

### F0 visual state
The supplied Roadmap UI is already recognizable, but not frozen like a screenshot.

Initial course state:

```text
TOP PROGRESS        8 / 227 COMPLETE
PATTERN HEADER      8 / 18 COMPLETED
ROW 001..008        ✓ COMPLETED
ROW 009             VALID SUDOKU · NOW ACTIVE
ROW 010             LONGEST CONSECUTIVE SEQUENCE · FUTURE / DIM
RAIL INDICATOR      009
```

### F0–F13 — “Welcome”
- Full UI opacity 0.92 → 1.0.
- Very small camera settle:
  `scale 1.008 → 1.000`.
- Do not animate individual rows yet.
- A restrained horizontal chalk sheen may travel across the active `009` border once.
- No particles.

### F13–F28 — “back.”
- Active `009` row gives one soft focus pulse:
  gold border opacity `0.75 → 1 → 0.9`.
- `NOW ACTIVE` remains visible.
- Other elements remain completely stable.

### F28–F53 — 25f pause
- Use pause to pull camera back by ~2%.
- Ensure whole shell is readable:
  top bar + sidebar + pattern header + rows + right rail.
- This is the course re-orientation frame.

### Why
The student immediately recognizes: “I am back inside the same DSA course.”

---

# ACT 1 — Complete Roadmap / 227 Problems / Pattern by Pattern
## F53–F330
**Narration:**  
“We are continuing our complete DSA roadmap of 227 problems, pattern by pattern.”

The UI does not morph into a different roadmap.  
Instead, the existing roadmap receives **focus choreography**.

### F53–F69 — “We are”
- Dim the active-row local glow slightly.
- Bring top-center `DSA PATTERN ROADMAP` from 75% → 100% opacity.
- Top bar becomes the visual anchor.

### F69 — “continuing”
- A thin chalk scan line starts under `DSA PATTERN ROADMAP`.
- Draw left→right across ~28f.
- It is a continuation underline, not a new decorative element.

### F82–F120 — “our complete”
- Camera eases outward enough that:
  - all 19 sidebar patterns,
  - main pattern panel,
  - right rail
  are comfortably visible.
- Max zoom change ~4%.

### F120 — “DSA”
- `DSA` portion in `DSA PATTERN ROADMAP` receives a tiny 1.0→1.035→1.0 emphasis.
- Do not change the actual font or style.

### F156 — “roadmap”
- Main outer shell lines / separators receive a quick progressive chalk trace:
  - top-bar bottom border,
  - sidebar right border,
  - main panel border,
  - right rail.
- They should look like the interface is being “recalled,” not newly invented.

### F189 — “227”
- Top-right `227 PROBLEMS` gets spotlight emphasis.
- Gold/warm number weight rises.
- Tiny underline sweeps beneath `227`.

### F239–F259 — “problems”
- Right rail labels `001` and `227` increase to 100% opacity.
- Rail itself brightens slightly.
- This visually connects the top-right total to the full-course rail.

### F259–F275 — pause
- Hold the `227` + rail relationship.
- No moving camera.

### F275 — first “pattern”
- Left-sidebar header `19 COURSE PATTERNS` gets a controlled highlight.
- A soft reveal pass travels down the sidebar, making all 19 names readable.
- Do not animate each pattern separately.

### F283–F306 — “by pattern.”
- The active `01 Arrays & Hashing` sidebar row remains gold outlined.
- Other 18 rows fade down to ~35–45%.
- This turns “pattern by pattern” into visible hierarchy.

### F306–F331 — 25f pause
- Camera gently pushes toward Pattern 01 and the main panel.
- No layout change.
- Full UI shell still remains recognizable.

---

# ACT 2 — “We Are Inside Arrays & Hashing”
## F331–F451

### F331–F356 — “Right now”
- Camera pan target moves slightly left-to-center so both:
  - active sidebar row 01,
  - main pattern header
  can be read together.
- Background rows remain visible.

### F362–F389 — “we are inside”
- Draw a restrained `RoughBox` glow around:
  `01 Arrays & Hashing` in sidebar.
- It must match the screenshot’s existing active highlight, not replace it.

### F389 — “arrays”
- In main header:
  `PATTERN 01` gold remains stable.
  `Arrays` receives a soft chalk fill / opacity rise.

### F415 — “hashing.”
- `& Hashing` completes the emphasis.
- Main header right side:
  `18 PROBLEMS`
  `8 / 18 COMPLETED`
  stays unchanged for now.

### F431–F452 — 21f pause
- Active sidebar row 01 and main pattern header remain in focus.
- Camera settles.
- Prepare completion update.

---

# ACT 3 — Nine Questions Are Complete
## F452–F521

This is the most important roadmap-state update.

At the start of this act:
```text
rows 001..008 = complete
row 009 = active
counter = 8 / 227
pattern counter = 8 / 18
```

At the end:
```text
rows 001..009 = complete
row 010 still future
counter = 9 / 227
pattern counter = 9 / 18
```

### F452 — “Nine”
- Focus moves from header to row `009 Valid Sudoku`.
- Do not change it yet.
- Its gold row lifts forward visually by:
  - 1.0 → 1.006 scale,
  - very soft shadow/halo.

### F463–F478 — “questions”
- `NOW ACTIVE` tag on row 009 fades out.
- Gold fill/outline begins transitioning toward completed teal/cyan state.
- This transition lasts ~18–24f.

### F478–F489 — “are”
- Circular active dot at left of row 009 morphs into the course’s completed check-circle shell.
- Use `SvgMorph`.
- Check stroke is still hidden.

### F489 — “complete.”
- Draw the check mark inside row 009 using `RoughLine`, 15–18f.
- Only after the check begins, update counters.

### F493–F504
- Top progress:
  `8 / 227 COMPLETE → 9 / 227 COMPLETE`
- Use `CountUp`/digit-roll only on the first number.
- `/ 227 COMPLETE` stays fixed.

### F499–F516
- Pattern header:
  `8 / 18 COMPLETED → 9 / 18 COMPLETED`
- Again, only the changing digit rolls.

### Important sequencing
1. row 009 state changes,
2. check draws,
3. global counter updates,
4. pattern counter updates.

Not simultaneous.

### F504–F522 — 18f pause
- Hold the new truth:
  nine rows completed.
- Row 010 remains dim future.
- Rail indicator can remain at 009 until the next act/current-question activation.

---

# ACT 4 — Confirm Previous Question: Valid Sudoku
## F522–F635

### F522–F545 — “In the previous”
- Camera zooms into rows 008–010 only.
- Main shell still visible faintly around edges.
- Rows 001–007 and sidebar reduce to ~35% opacity.

### F545–F562 — “question,”
- Row 009 becomes the exact center focus.
- Completed cyan check remains.
- Gold active border is gone; this matters.

### F562–F574 — pause
- Small metadata divider on row 009 becomes slightly brighter.

### F574–F592 — “we finished”
- Completed check receives one tiny chalk sheen.
- No gold active animation; the visual language must say “finished.”

### F592 — “valid”
- `Valid Sudoku` title receives a short underline stroke.

### F604 — “Sudoku.”
- Right metadata brightens:
  `LC 36`
  `MEDIUM`
- Then all three title/metadata elements settle.

### F623–F636 — pause
- Underline retracts/fades to normal.
- Camera eases down 1 row toward 010.
- This visually prepares the next question.

---

# ACT 5 — Activate Question 10 in the SAME UI
## F636–F798
**Narration:**  
“Now, question number 10, longest consecutive sequence.”

### F636 — “Now”
- Focus leaves row 009.
- Row 009 stays completed teal.
- Rail indicator begins moving downward from position 009 toward 010.
- 18–24f tween.

### F652–F671 — pause
- Row `010 Longest Consecutive Sequence` rises from dim future opacity ~35% → 70%.
- Its left future circle becomes fully visible but stays neutral.
- Do not apply gold yet.

### F671 — “question”
- Gold active border starts drawing around row 010 from left edge.
- Use `RoughBox`/stroke-write behavior.
- 26–32f.

### F685 — “number”
- Left problem index `010` brightens from dim → full chalk.

### F699 — “10”
- Neutral future dot at left morphs to warm active dot.
- Small inner active mark appears.
- Rail indicator locks at 010.

### F711–F728 — 17f pause
- Add tiny `NOW ACTIVE` tag beside `010`.
- Same visual treatment as the supplied reference’s Valid Sudoku row.
- No title expansion yet.

### F728 — “longest”
- Begin title emphasis on row:
  `Longest` brightens.

### F740 — “consecutive”
- `Consecutive` brightens next.

### F763 — “sequence.”
- Full title becomes high-contrast:
  `Longest Consecutive Sequence`
- Gold row fill reaches final active state.
- Completed rows 001–009 remain visible but secondary.

### F785–F799 — 14f pause
- Hold the exact master UI with:
  - `9 / 227 COMPLETE`
  - `9 / 18 COMPLETED`
  - row 009 ✓ completed
  - row 010 NOW ACTIVE

This is the canonical intro roadmap state for LC128.

---

# ACT 6 — LeetCode 128 · Medium
## F799–F879

### F799–F817 — “LeetCode”
- Do not create a separate metadata card.
- Stay inside row 010.
- Right side of row 010 receives focus crop / glow.

### F817 — “128”
- `LC 128` brightens to full white/chalk.
- A tiny underline writes beneath `128`.

### F845–F869 — pause
- Camera nudges right ~1.5% so metadata is clearer.
- `LC 128` holds.

### F869 — “medium.”
- `MEDIUM` changes from dim to active difficulty color.
- One small `ShineFill` pass across the difficulty word is allowed.
- No additional badge.

### F879
- Metadata settles.
- Row 010 now contains every required current-question identifier.

---

# ACT 7 — ACTIVE ROW LIFTS OUT OF THE ROADMAP
## F880–F1116
**Narration:**  
“The input is unsorted, but we still need to find the longest run of consecutive values.”

This is where roadmap UI hands control to the problem-specific visual world.

The transition must come **from row 010 itself**.

## A. Row isolation
### F880–F902 — “The”
- Rows 001–009 fade to ~18%.
- Sidebar fades to ~22%.
- Pattern header fades to ~28%.
- Top bar remains ~55% so course identity is not abruptly lost.
- Row 010 stays 100%.

### F902 — “input”
- Row 010 lifts forward:
  - y moves toward optical center,
  - width grows from normal row width to ~1420px,
  - height grows from ~64px to ~170px.
- All changes are from the exact row geometry; no new card is spawned.

## B. Row morph → title/problem stage
### F902–F925
- Use `SvgMorph` / interpolated rounded-rect path:
  roadmap row frame → larger title frame.
- Left active dot/index area compresses into a compact upper-left label:
  `Q10`
- Title remains:
  `LONGEST CONSECUTIVE SEQUENCE`
- Right metadata becomes:
  `LC 128 · MEDIUM`

### F925 — “unsorted”
- Inside lower portion of the expanded row, 12 faint fixed slot shells grow from the row’s inner baseline.
- Slots are empty.
- Apply restrained disorder offsets:
  y ±8px, rotation ±1°.
- Label:
  `UNSORTED INPUT`
- Do not place real values yet.

### F951–F998 — “but we still need to”
- The rest of roadmap shell fades to ~8–10%.
- Expanded Q10 frame becomes the entire learning stage.
- Topbar line can remain as a faint memory but no readable sidebar content is necessary now.

### F998 — “find”
- A neutral chalk focus bracket appears beneath the empty slots.

### F1024 — “longest”
- Write:
  `LONGEST`

### F1035 — “run”
- Extend:
  `LONGEST RUN`

### F1061 — “consecutive”
- Complete:
  `LONGEST CONSECUTIVE RUN`
- Highlight only `CONSECUTIVE` in `theme.pivot`.

### F1082–F1099 — “values.”
- Small unresolved `?` writes at the end:
  `LONGEST CONSECUTIVE RUN = ?`
- No winning values.
- No sorting.
- No HashSet.

### F1099–F1117 — pause
- Hold expanded Q10 card + 12 empty unsorted shells + unresolved goal.

---

# ACT 8 — Target = Linear Time
## F1117–F1186

### F1117–F1124 — “And the”
- Main unresolved goal shifts slightly left within the callout area.
- Create space on right.

### F1124 — “target”
- Draw small target shell from existing gold row-border line.
- Important: reuse same border stroke language.

### F1135–F1148 — “is”
- Write small:
  `TARGET`

### F1148 — “linear”
- `O(n)` chalk-writes large inside target shell.
- Use mono font.
- No graph yet.

### F1159 — “time.”
- Add:
  `LINEAR TIME`
- One straight ascending micro-line may draw beside it, but do not compare complexities.

### F1174–F1187 — pause
- Hold:
  - empty unsorted slots,
  - longest-consecutive goal,
  - `TARGET O(n)`.

This is the entire problem teaser.

---

# ACT 9 — “Before Code, Understand the Question”
## F1187–F1290

This act must morph seamlessly into Scene 02.

### F1187 — “Before”
- Q10 title band moves upward to compact top identity:
  `QUESTION 10 · LC128`

### F1201 — “code”
- A faint Python-editor outline tries to emerge from the right side.
- Only a ghost:
  `>_`
- opacity ~35%.

### F1217–F1239 — 22f pause
- Draw a hand-made diagonal chalk strike across the ghost editor.
- `RoughLine`, 18–20f.
- Tiny dust at end.
- Message: code is not the next step.

### F1239 — “first”
- Ghost editor recedes and fades.
- Target O(n) and callout reduce opacity.
- The 12 empty slots move into exact Scene 02 hero coordinates.

### F1250 — “understand”
- Write centered hand-chalk callout:
  `UNDERSTAND FIRST`
- 24–30f.
- `UNDERSTAND` uses pivot accent; `FIRST` chalk text.

### F1270–F1279 — “the”
- Disorder offsets on the empty slots settle to zero.
- Slots become perfectly aligned fixed containers.
- All roadmap remnants fully disappear.

### F1279 — “question.”
- `UNDERSTAND FIRST` compresses upward into a small helper label.
- Final frame becomes:

```text
QUESTION 10 · LC128
[ ][ ][ ][ ][ ][ ][ ][ ][ ][ ][ ][ ]
```

- slots empty,
- no master values,
- no answer,
- no solution hints,
- captions safe zone clear.

### F1279–F1291
- Hold this exact state.
- Scene 02 begins from the same coordinates with zero reset.

---

# 🧬 MASTER MORPH CHAIN

This is the core of Scene 01.

```text
PREVIOUS MASTER ROADMAP UI
8 / 227
Q009 VALID SUDOKU — NOW ACTIVE
Q010 — FUTURE
        ↓
Q009 ACTIVE DOT → COMPLETED CHECK
        ↓
8 / 227 → 9 / 227
8 / 18 → 9 / 18
        ↓
focus previous row 009
        ↓
rail 009 → 010
        ↓
Q010 FUTURE → NOW ACTIVE
        ↓
Q010 ROADMAP ROW
        ↓ enlarge/morph
Q10 LC128 TITLE / PROBLEM FRAME
        ↓
12 EMPTY UNSORTED SLOT SHELLS
        ↓
TARGET O(n)
        ↓
reject CODE
        ↓
SCENE 02 EMPTY ARRAY STAGE
```

No hard-cut anywhere in this chain.

---

# 📐 EXACT LAYOUT LANGUAGE — 1920×1080

The reference screenshot is a wide 16:9 dashboard.
Preserve its proportions.

## Top bar
- x≈52..1868
- y≈28..100
- height ≈72
- left title zone width ≈520
- center roadmap label centered around x≈950
- right stats zone x≈1360..1835

## Left sidebar
- x≈62..310
- y≈120..880
- width ≈248
- active pattern row height ≈34–40
- pattern list vertically spaced but compact
- no oversized typography

## Main content
- x≈355..1765
- y≈120..885
- pattern header height ≈92–100
- problem rows height ≈56–60
- row gap ≈8–10

## Right rail
- x≈1818..1855
- y≈140..850
- very narrow
- top `001`
- bottom `227`
- current indicator = small warm vertical capsule

## Problem-row information architecture
Left → right:
```text
status circle
problem id
problem title
optional NOW ACTIVE
...
LC number
difficulty
```

Keep title left-heavy; metadata right-aligned exactly like reference.

---

# 🎨 FIXED ROADMAP SEMANTICS

### Completed row
- status circle: teal/cyan
- check: dark board cutout / contrasting stroke
- row border: teal/cyan low-opacity
- title: full chalk
- metadata: subdued

### Current / NOW ACTIVE
- status circle: warm yellow/gold
- border: gold
- row background: warm low-opacity gold wash
- problem id/title: gold/high contrast
- tag: `NOW ACTIVE`
- metadata: full readability

### Future
- border: dim teal/board line
- title: 35–45% opacity
- status circle neutral
- metadata dim

### Active pattern
- left-sidebar row gold border/fill
- main pattern number gold
- pattern name chalk/gray high contrast

---

# 🧩 COMPONENT MAPPING

| Action | Component / helper |
|---|---|
| roadmap row frames | `RoughBox` / existing course roadmap component |
| row ACTIVE → COMPLETE circle morph | `SvgMorph` |
| completed check stroke | `RoughLine` |
| `8→9` progress count | `CountUp` / digit roll |
| rail indicator movement | `tween()` + `EASE` |
| current row gold activation | `ShineFill` very restrained + border interpolation |
| row010 expansion | `SvgMorph` + frame-driven geometry interpolation |
| titles/labels | `ChalkText` |
| code rejection strike | `RoughLine` |
| tiny one-shot chalk residue | `ChalkDust` |
| captions | `Captions` using supplied sync JSON |

---

# 🎥 MOTION QUALITY

## Camera
- F0–331: mostly global view / very mild push.
- F331–635: focus movements inside static UI.
- F636–879: row-level focus.
- F880 onward: active row itself transforms, so camera movement is minimal.

## Easing
- UI focus: gentle cubic ease.
- row activation: 18–28f.
- row expansion: 32–42f.
- count roll: 18–24f.
- rail movement: 20–26f.
- check draw: 15–18f.

## No bouncy app motion
Do not use:
- overshoot > 2–3%,
- elastic bounce,
- rotating cards,
- springy mobile-app transitions.

This UI should feel like a **premium technical chalkboard system**.

---

# 🚫 EXPLICITLY FORBIDDEN

1. No abstract floating-node roadmap.
2. No replacement dashboard design.
3. No card carousel.
4. No large standalone LC128 title before Q10 is activated in the roadmap.
5. No different sidebar.
6. No hiding the 19-pattern hierarchy when narration says “pattern by pattern.”
7. No changing progress counter placement.
8. No changing current-row gold semantics.
9. No new random accent colors.
10. No 227 dots.
11. No separate “Valid Sudoku” title card.
12. No hard cut from Q009 to Q010.
13. No hard cut from roadmap to problem stage.
14. No solution sequence in intro.
15. No real array values in Scene 01.
16. No HashSet/sorting/brute visuals.
17. No code before `code` is spoken.
18. No roadmap remaining once Scene 02 begins.

---

# ✅ CRITICAL REVIEW FRAMES

## F0
Exact recognizable previous-state roadmap:
- 8/227
- rows 1–8 complete
- row 009 Valid Sudoku NOW ACTIVE
- row 010 future

## F189
Top-right `227 PROBLEMS` focus while full UI still visible.

## F275
All 19 patterns readable; Pattern 01 visibly active.

## F389
Arrays & Hashing focus:
sidebar + main header synchronized.

## F452
Before completion:
Q009 still active.

## F489
Check drawing on Valid Sudoku.

## F504
Counters now:
- 9/227
- 9/18

## F604
Completed Valid Sudoku row in focus.

## F699
Q010 active dot/index moment.

## F763
Longest Consecutive Sequence row fully NOW ACTIVE.

## F817
LC128 metadata focus.

## F869
MEDIUM active.

## F925
Q010 row has expanded into problem stage; 12 empty slots appear.

## F1148
O(n) target visible.

## F1201
Ghost code editor appears only now.

## F1250
`UNDERSTAND FIRST`.

## F1290
Pure Scene 02 handoff:
12 empty fixed slots, compact Q10 identity, no roadmap remnants.

---

# ✅ ACCEPTANCE CHECKLIST

- [ ] Uses the supplied roadmap UI exactly as the master shell.
- [ ] Scene starts from previous-video state: `8 / 227`, Valid Sudoku ACTIVE.
- [ ] Valid Sudoku completes only at “Nine questions are complete.”
- [ ] Q009 active dot morphs into completed check.
- [ ] Global progress changes `8 / 227 → 9 / 227`.
- [ ] Pattern progress changes `8 / 18 → 9 / 18`.
- [ ] Q010 remains future until narration reaches Question 10.
- [ ] Q010 becomes gold NOW ACTIVE inside the same row geometry.
- [ ] Right rail moves 009 → 010.
- [ ] `LC 128` and `MEDIUM` are shown inside row 010 before the row expands.
- [ ] Row 010 itself morphs into the problem stage.
- [ ] No new unrelated title-card UI is spawned.
- [ ] No real array values appear.
- [ ] No solution is spoiled.
- [ ] O(n) appears only when linear-time target is spoken.
- [ ] Code glyph appears only when “code” is spoken and is rejected.
- [ ] Final 12-slot layout exactly matches Scene 02 opening coordinates.
- [ ] Total duration remains exactly **1291 frames**.
- [ ] Captions safe zone remains clear.
- [ ] Theme semantics match the master roadmap screenshot.

---

# FINAL VISUAL STORY — ONE LINE

**The exact previous-video DSA Pattern Roadmap resumes with `8/227` and Valid Sudoku as the active row; as the narration says nine questions are complete, Valid Sudoku’s gold active state physically morphs into a teal completed check and both progress counters roll to nine; the same interface then shifts its active rail and gold focus to row `010 Longest Consecutive Sequence`, reveals `LC128 · Medium`, and that exact active row lifts out of the roadmap and morphs into an unsorted empty-array problem stage with an `O(n)` target before simplifying into Scene 02’s twelve fixed empty slots.**
