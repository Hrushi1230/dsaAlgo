# Scene 05 · WHY-NOT / BRIDGE — BRUTE COST → SORTING IDEA Animation Plan

**Longest Consecutive Sequence · LC #128 · Type C**  
**Audio**: `05-why-brute.mp3` — **44.100 s** — **1323 frames** @ 30 fps  
**Goal**: Make the brute-force cost visually undeniable, derive `O(n³)` from the actual work, identify **repeated list searching** as the real bottleneck, and naturally discover the next idea: **arrange the same values first so consecutive values sit beside each other**. End on the sorted row, ready for Scene 06’s trace — no repeated introduction.

---

## 🎯 Pedagogical Philosophy & Core Rules

1. **NO FUTURE-SOLUTION SPOILERS**
   - Sorting is allowed because the narration explicitly derives it.
   - Do **not** trace the sorted solution yet.
   - Do **not** introduce duplicate-ignore / gap-reset rules.
   - Do **not** show HashSet, predecessor checks, or O(n).
   - The only new idea at the end is: **arrange values first → compare neighbours.**

2. **CENTER STAGE FIRST**
   - Scene begins by collapsing Scene 04’s code/explainer into one central cost model.
   - The complexity derivation owns the optical center.
   - Only after the bottleneck is understood does the raw array return and morph into sorted order.

3. **EXACT AUDIO SYNC**
   - Every major reveal is tied to supplied word frames.
   - Pauses become absorption/morph windows.
   - No complexity badge appears before narration says it.

4. **ONE IDEA PER FRAME**
   - First show number of possible starts.
   - Then possible sequence steps.
   - Then membership-scan cost.
   - Only then multiply.
   - Only after `O(n³)` do we reveal repeated searching as the real cause.
   - Sorting is introduced only after the “remove searching?” question.

5. **SAME DATA, SAME CARDS**
   - When sorting is derived, use the exact 12 master-array cards:
     `[8,1,6,3,2,2,4,10,9,11,-1,0]`
   - Cards physically travel to:
     `[-1,0,1,2,2,3,4,6,8,9,10,11]`
   - No respawned replacement row.

---

# 🔗 Scene 04 → Scene 05 Continuity Lock

Scene 04 ends with:
- full brute-force code on the left,
- `while current + 1 in nums:` highlighted,
- repeated list-search trails on the right,
- a summary that the brute force becomes expensive.

Scene 05 starts from exactly that state.

### F0 principle
Do not clear the board.

The highlighted while-line itself will become the complexity model.

---

# 🧬 Master Motion Story

```text
highlighted while-line
        ↓ collapse / isolate
current + 1 in nums
        ↓
n possible starts
        ↓
n possible sequence steps
        ↓
n-value list scan
        ↓
n × n × n
        ↓ SVG morph
wireframe work-cube
        ↓
O(n³)
        ↓ RoughCurve
cubic growth curve
        ↓
repeated-search trails return
        ↓
same unsorted array searched again
        ↓
question: remove searching?
        ↓
search trails erase / retract
        ↓
same cards unpin from raw slots
        ↓ BezierFlight + SvgMorph
cards arrange into sorted row
        ↓
adjacent +1 relation teaser
        ↓
Scene 06 sorted-trace handoff
```

No hard cut.

---

# 📐 Layout Specifications — 1920×1080 (Audited Kit & Optical Standards)

## 1. Chalkboard Background (Kit Pure — Zero 4-Side Darkness)
- **Mandatory Primitive**: Must strictly mount `<ChalkFilters />` and `<ChalkboardBackground />` from `kit/lib/chalk.tsx` on base green `theme.boardBg` (`#19523C`).
- **No Vignette Gradients**: BANNED any `radial-gradient` or corner darkening overlays. The board is a uniform, authentic Oxford green chalkboard surface with faint dust grain (`opacity: 0.04`) across all 1920×1080 pixels.

## 2. Master Array Optical Geometry (Zero "Chota" Dead Space)
- **Exact Continuity with Scene 03**:
  - `CARD_WIDTH = 92px`, `CARD_HEIGHT = 108px`, `CARD_GAP = 16px`
  - Total array row width: `12 * 92 + 11 * 16 = 1280px`
  - Centered horizontally: `ROW_START_X = (1920 - 1280) / 2 = 320px` (balanced 320px margins left and right)
  - Vertical anchor: `baseY = 380px` (cards span `Y: 380..488px`, center at `Y: 434px`)
  - Card number font: `38px` mono bold (crisp and readable)
  - Card index tag: `13px` mono (`[0]..[11]`)
  - Border radius: `14px`, border: `2px solid rgba(248, 246, 240, 0.25)`

## 3. Work Factors Stacked Bars (Acts 1, 2, 3)
- Container at `top: 140px`, main title `fontSize: 42px`
- Factor bars (Starts, Steps, Scan):
  - `width: 1200px`, `height: 74px`, `borderRadius: 14px`, `padding: 0 36px`
  - Factor tag: `18px` mono bold (`FACTOR 1 / 2 / 3`)
  - Title: `28px` hand font
  - Metric subtitle: `16px` mono (`outer loop runs`, `streak steps up to`, `each check scans list`)
  - Factor value ($n$): `36px` mono bold

## 4. Hero Math, 3D Wireframe Cube & Complexity Card (Act 4)
- **Math String**: `n × n × n` in `64px` mono bold (yellow `n`, cyan `n`, coral `n`).
- **Wireframe Chalk Cube**: SVG `420px × 340px` (front face `170×170px`, top face offset `dx: 75, dy: -55`, right face). Internal dashed grid lines for volume intuition. Centered $O(n^3)$ stamp badge `180×70px`, font `40px` mono bold in glowing coral.
- **Cubic Growth Curve Box**: `width: 620px`, `height: 220px` at `left: 1060px, top: 10px`.
  - SVG curve: `560×170px`, cubic bezier path `M 50,140 Q 300,138 480,25`, stroke `4.5px` in coral.
  - Concrete example counter box: `100 × 100 × 100`, rolling counter up to `1,000,000 ops` (`fontSize: 38px` mono bold) with `1 MILLION OPERATIONS!` badge (`16px`).

## 5. Repeated Search Array & Scanning Tracks (Acts 5, 6, 7)
- Header at `top: 190px`: Title `fontSize: 42px`, subtitle `fontSize: 26px`.
- Active query bubble: `padding: 10px 32px`, `fontSize: 22px` mono bold.
- Array at `Y: 380px`, cards $92 \times 108\text{px}$.
- 3 Multi-scan illuminated trails under cards at `top: 508px`, width `1280px`, height `8px` each (Cyan for 9, Purple for 10, Coral for 11).
- Warning pill: `↻ Scanned same unsorted array again from slot 0` (`fontSize: 17px` mono bold).
- Strike-through bar: `height: 5px`, coral. New solution teaser: `fontSize: 46px` in mint `#3CE5A7`.

## 6. Physical Sorting Flight (Act 8)
- 12 master cards take off along 3-wave bezier flight paths (Wave A: $-90\text{px}$, Wave B: $-150\text{px}$, Wave C: $-210\text{px}$) from raw slots to sorted slots.
- Full $92 \times 108\text{px}$ cards remain clear and crisp throughout motion.
- Solid mint baseline at `top: 508px`, width `1280px`, height `3px` with label `▲ ARRANGED / SORTED IN ASCENDING ORDER` (`fontSize: 16px` mono bold).

## 7. Neighbour +1 Relation Teaser (Act 9)
- Pair 8 & 9 focus dashed box: `left: 1176px, top: 372px, width: 216px, height: 124px`.
- Curved arch arrow above: `left: 1199px, top: 305px, width: 170px`, with `+1` pill (`fontSize: 20px` mono bold).
- Adjacency bracket below: `left: 1184px, top: 502px, width: 200px, height: 14px`, text `Adjacent Neighbours!` (`fontSize: 18px` mono bold).

## 8. Scene 06 Handoff State (Act 10)
- Green scan pointer at slot 0 ($-1$): `left: 346px, top: 502px`, label `▲ SCAN POINTER` (`16px` mono bold).
- Bottom HUD tracker: `bottom: 110px`, twin boxes for `CURRENT STREAK: —` and `LONGEST STREAK: —` (`16px` label, `26px` mono bold value).

## 9. Caption Safe Zone
- `bottom: 34px` (`Y: 980..1046px`), padding `10px 34px`, font `26px`. Zero visual collisions.

---

# 🎨 Semantic Color Rules

- normal structure → `theme.chalkText`
- dimension / counting → `theme.cyan`
- current factor / current idea → `theme.pivot`
- expensive / repeated work → `theme.warn`
- completed confirmation → `theme.good`
- historical search residue → `theme.purple` at low opacity

No new palette.

---

# ⏱ Audio Breakdown & Act-by-Act Flow

| Act | Frames | Spoken Beat | Visual Choreography |
|---|---:|---|---|
| 0 | F0–45 | “Now measure the work.” | Scene04 code collapses into cost-analysis stage. |
| 1 | F46–124 | “up to n starting numbers” | Raw array becomes `n starts` dimension. |
| 2 | F125–253 | “one start… sequence up to n steps” | One start grows an n-step sequence lane. |
| 3 | F254–396 | “each next-value check… scan up to n values” | Membership search becomes third n-dimension. |
| 4 | F397–558 | “n times n times n… O(n cubed)” | Three factors build, morph to cubic work model + curve. |
| 5 | F559–660 | “real problem is repeated searching” | Complexity compresses into repeated-search diagnosis. |
| 6 | F661–888 | “need next value… scan same unsorted array again” | Same raw array scanned repeatedly; trails accumulate. |
| 7 | F889–982 | “what if we remove that searching?” | Search trails physically erase/retract. |
| 8 | F983–1088 | “what if numbers are arranged first?” | Same cards physically sort via Bezier flights. |
| 9 | F1089–1278 | “consecutive… next to each other” | Neighbour relationship teased, no full trace. |
| 10 | F1279–1322 | “Let’s see what that changes.” | Sorted row settles into Scene06 start state. |

---

# ACT 0 — Collapse Code Into a Work Model
## F0–F45
**Narration:** “Now measure the work.”

### F0
Start with Scene04 final frame:
- code editor left,
- `while current + 1 in nums:` highlighted,
- right repeated-search summary.

### F0–F8 — “Now”
- All non-hot code lines fade to ~18%.
- highlighted while-line remains 100%.

### F8–F26 — “measure the”
- The highlighted line detaches from the editor.
- `SvgMorph` its underline/selection rectangle into a wide center-stage chalk frame.
- Code text itself moves to center:
```python
current + 1 in nums
```

### F26–F34 — “work.”
- Editor shell recedes upward-left to 10% opacity and then disappears.
- Right repeated-search trails compress into three faint horizontal guide lines.

### F34–F46 — 12f pause
- Write small top badge:
  `MEASURE THE WORK`
- Center stage is now clean.
- No Big-O yet.

---

# ACT 1 — Factor 1: Up To n Starting Numbers
## F46–F124
**Narration:** “We can try up to n starting numbers.”

### F46–F77 — “We can try up to”
- Raw master array draws back into center stage:
```text
[8][1][6][3][2][2][4][10][9][11][-1][0]
```
- Cards are fixed and neutral.
- A small gold `START?` pointer appears above slot0.

### F77 — spoken “n”
- Above the array, a long SVG bracket begins drawing from first slot to last slot.

### F84–F109 — “starting numbers.”
- Pointer preview glides across all 12 cards.
- Do not trace.
- As it passes, a tiny start tick appears above each slot.
- Bracket label writes:
```text
up to n starts
```

### F109–F125 — 16f pause
- Start ticks compress upward using `SvgMorph`.
- They become one horizontal **STARTS dimension bar**:
```text
STARTS   ───────────── n
```
- Raw array dims to 25%.

### Teaching meaning
Outer loop can consider up to `n` starting values.

---

# ACT 2 — Factor 2: One Start Can Continue Up To n Steps
## F125–F253
**Narration:** “From one start, the sequence can continue up to n steps.”

### F125–F151 — “From one start,”
- Isolate one representative start card at center:
```text
[start]
```
- Do not use a real value to avoid re-tracing.
- Other raw-array cards stay dim in background.

### F151–F164 — pause
- A faint sequence lane appears to the right.

### F164–F205 — “the sequence can continue”
- Draw a chain of ghost sequence nodes:
```text
○ → ○ → ○ → ○ → … → ○
```
- Nodes reveal left-to-right with `RoughLine` connectors.
- They are conceptual, not actual values.

### F205–F224 — “up to n”
- Extend the lane toward right edge.
- Final ghost node morphs into an ellipsis / continuation marker.
- Label above:
```text
up to n steps
```

### F224–F236 — “steps.”
- Sequence lane locks into a second dimension bar below STARTS:
```text
STEPS    ───────────── n
```

### F236–F254 — 18f pause
- STARTS bar stays above.
- STEPS bar stays below.
- The two bars shift slightly apart vertically, preparing a third factor.

### Teaching meaning
For one selected start, the chain itself can continue up to `n` times.

---

# ACT 3 — Factor 3: Each Membership Check Can Scan n Values
## F254–F396
**Narration:** “And each next value in nums, check can itself scan up to n values.”

### F254–F289 — “And each next value”
- Bring back one small target bubble:
```text
NEXT = ?
```
- Under it, restore the raw Python list:
```text
[8][1][6][3][2][2][4][10][9][11][-1][0]
```
- Keep it smaller than full trace size.

### F289–F317 — “in nums,”
- The target bubble drops a cyan search dot to the left edge of the list.

### F323 — transcript’s zero-duration “check”
- Use this exact frame as the scanner ignition frame.

### F323–F350 — “can itself scan”
- Search dot walks across list.
- `RoughLine` trail grows behind it.
- It should visually inspect the whole row.

### F350–F369 — “up to n”
- Search reaches far-right end.
- Bracket draws beneath the complete list:
```text
scan up to n values
```

### F369–F387 — “values.”
- The list + scanner compress downward into a third dimension bar:
```text
LIST SCAN ───────────── n
```

### F387–F397 — 10f pause
Now three clean horizontal bars are stacked:

```text
STARTS      n
STEPS       n
LIST SCAN   n
```

No multiplication sign yet.

---

# ACT 4 — n × n × n → O(n³)
## F397–F558

### F397–F424 — “So worst case,”
- Top badge morphs:
  `MEASURE THE WORK`
  →
  `WORST CASE`

- Three bars move toward center.

### F424–F437 — 13f pause
- Place first multiplication anchor between bar1/bar2.
- Still no `n` multiplication text.

---

## Spoken multiplication
### F437 — first “n”
- STARTS bar collapses into large:
```text
n
```
at x≈740.

### F445–F458 — “times”
- `×` draws with `RoughLine`.

### F458 — second “n”
- STEPS bar collapses into:
```text
n
```
at x≈960.

### F467–F480 — second “times”
- second `×` draws.

### F480 — third “n.”
- LIST SCAN bar collapses into:
```text
n
```
at x≈1180.

Final:
```text
n × n × n
```

### F494–F506 — 12f pause
- Hold multiplication.
- No O yet.

---

## Premium SVG morph — multiplication → work cube
### F506 — spoken “O”
- Begin drawing three chalk axes through the three n labels:
  horizontal / vertical / depth-like diagonal.

### F506–F528 — “O of n”
- `n × n × n` labels travel onto the three axes.
- Use `SvgMorph` and position interpolation.
- Wireframe cells begin drawing.

### F528–F537 — “cubed.”
- Finish a restrained **chalk wireframe cube**.
- Do not make glossy 3D.
- Front/top/side only, hand-drawn.
- Center label morphs to:
```text
O(n³)
```

### F537–F559 — 22f pause
Use this pause for the required WHY-NOT complexity proof:

1. cube recedes left ~20%,
2. on right, axes draw,
3. `RoughCurve` draws a cubic growth curve left→right,
4. small illustrative counter rolls:
```text
n = 100
100³ = 1,000,000
```
Label tiny:
`illustrative worst-case work`

No giant dashboard.

### Teaching meaning
The complexity is not guessed. The three nested sources of work visually multiply.

---

# ACT 5 — Diagnose the Real Problem: Repeated Searching
## F559–F660
**Narration:** “The real problem is repeated searching.”

### F559–F586 — “The real problem”
- Cubic graph and cube shrink to upper-left as historical proof.
- `O(n³)` remains visible but secondary.

### F586–F605 — “is”
- Bring raw unsorted array back to center.

### F605 — “repeated”
- One search trail appears under array.

### F620 — “searching.”
- Second and third search trails overlay the same array.
- Use `theme.purple` low-opacity history + current cyan line.
- Draw rough brace beneath:
```text
REPEATED SEARCHING
```

### F635–F661 — 26f pause
- Let accumulated trails sit.
- This is the diagnosis frame.
- No sorting hint yet.

---

# ACT 6 — Show the Same Unsorted Array Being Scanned Again
## F661–F888
**Narration:** “Every time we need the next value, we may scan the same unsorted array again.”

This should visually echo Scenes 03–04 without re-running a full trace.

### F661–F684 — “Every time”
- Small target bubble appears:
```text
need ?
```

### F684–F725 — “we need the next value,”
- Morph target:
```text
need 9
```
- Search scanner sweeps across the full raw array.
- Found ring appears briefly on 9.

### F725–F740 — pause
- Search trail fades to ~12% history.
- target bubble clears.

### F755–F779 — “we may scan”
- target morph:
```text
need 10
```
- new scanner begins from **left edge again**.
- Important: do not continue from prior found position.

### F779–F821 — “the same”
- scanner travels the same original row.
- old 9-search trail remains faint underneath.

### F821 — “unsorted”
- whole array receives a rough unsorted bracket / subtle irregular underline.
- Cards themselves do not shuffle.

### F842–F854 — “array”
- outline around the raw array brightens.

### F854–F869 — “again.”
- third target quickly appears:
```text
need 11
```
- another search line begins from left.
- freeze with 3 historical paths visible.

### F869–F889 — 20f pause
- Write small:
```text
same array
again
```
- `↻` hand-drawn loop path around the search lane.

### Teaching meaning
Each next-value check can restart a list scan over the same unsorted structure.

---

# ACT 7 — “What If We Remove That Searching?”
## F889–F982
**Narration:** “So what if we remove that searching?”

### F889–F913 — “So what if we”
- Search trails remain.
- Target bubble disappears.
- Raw array stays.

### F913 — “remove”
- Draw one long `RoughLine` strike through the repeated-search brace label.
- Strike takes 18–22f.

### F930–F959 — “that searching?”
Premium morph:
- All historical scan paths **reverse their draw progress** and retract toward the left edge.
- Scanner heads disappear one by one.
- Purple residue is erased with a subtle chalk-dust wipe.
- Do not move array cards yet.

### F959–F983 — 24f pause
- Clean raw array stands alone in optical center.
- Under it, write:
```text
Can we avoid searching for every next value?
```
- Then fade the sentence down to 35%.
- Student gets the question before the next idea.

---

# ACT 8 — Derive Sorting: Same Cards Physically Arrange
## F983–F1088
**Narration:** “What if the numbers are arranged first?”

The key rule: **same cards, no respawn.**

### F983–F1000 — “What if the”
- Raw cards unlock from their fixed brute slots.
- Tiny anchor dots remain at old positions for 8f, then fade.

### F1000–F1034 — “numbers are”
- Cards lift vertically by 18–28px.
- Each gets a faint `BezierFlight` trajectory preview.
- Do not move all chaotically.

### F1034 — “arranged”
Begin sorting choreography.

Target fixed sorted positions:
```text
[-1][0][1][2][2][3][4][6][8][9][10][11]
```

### Sorting motion — F1034–F1065
Use **three coordinated waves**:

#### Wave A — smallest values
`-1, 0, 1, 2, 2`
- arc toward left sorted slots.

#### Wave B — middle values
`3, 4, 6`
- follow ~5f later.

#### Wave C — high values
`8, 9, 10, 11`
- follow another ~5f later.

Each source card is the original master card.

Motion rules:
- low/medium arcs,
- no bounce,
- 24–34f flight,
- cards may cross only if paths differ in height,
- destination slots are fixed before motion starts.

### F1047–F1065 — “first?”
- As cards land, a single long SVG baseline straightens under them.
- `UNSORTED` helper label morphs to:
```text
ARRANGED
```
Do not write “SORTED APPROACH” yet.

### F1065–F1089 — 24f pause
- All cards settle.
- No highlights.
- Let student read:
```text
-1  0  1  2  2  3  4  6  8  9  10  11
```

This is the first time the row is fully arranged.

---

# ACT 9 — Consecutive Values Now Sit Beside Each Other
## F1089–F1278
**Narration:** “Then if two values are consecutive, they should come next to each other.”

No full trace. Only derive neighbour-check intuition.

### F1089–F1106 — “Then if two”
- Bring a small focus window over one neighbour pair.
- Use pair:
```text
8 | 9
```
because it is visually simple and avoids beginning the full winning run.

All other sorted cards dim to ~45%.

### F1106–F1137 — “values are”
- Draw one `RoughBox` around 8 and one around 9.
- Between them, an SVG relation socket grows.

### F1137 — “consecutive,”
- Write:
```text
+1
```
above relation.
- Draw `8 → 9`.

### F1156–F1180 — 24f pause
- Hold exact relationship:
```text
8 + 1 = 9
```
- No pointer scan, no length counter.

### F1180–F1205 — “they should come”
- Expand focus window slightly to show neighbours:
```text
6   8   9   10   11
```
- 8→9 relation remains.

### F1205 — “next”
- Draw a tiny adjacency bracket underneath 8 and9:
```text
neighbours
```

### F1215–F1242 — “to each other.”
- Relation arrow softens into a small neighbour connector.
- Then briefly pulse pair `9 | 10` with the same `+1` relation.
- Do not continue through all pairs.

### F1242–F1279 — 37f pause
Use this long pause carefully:
1. restore all sorted cards to equal opacity,
2. remove demo pair boxes,
3. keep sorted row,
4. introduce a single scan pointer shell at far left,
5. do **not** start the scan,
6. faint placeholders for:
   `CURRENT`
   `BEST`
   may appear at 15% only if Scene06 uses them immediately.

This pause is the Scene06 stage preparation.

---

# ACT 10 — Handoff to Scene 06
## F1279–F1322
**Narration:** “Let’s see what that changes.”

### F1279 — “Let’s”
- Top badge morphs:
```text
WHY BRUTE IS SLOW
```
→
```text
BETTER · TRACE
```
but keep `BETTER · TRACE` at only 60% until next scene if preferred.

### F1288–F1299 — “see what”
- Pointer settles immediately before first sorted card `-1`.
- No highlight yet.

### F1299–F1310 — “that”
- Original unsorted ghost positions briefly flash at 5% behind sorted row, then disappear.
- This reminds learner these are the same values.

### F1310–F1323 — “changes.”
- Final state:
```text
QUESTION 10 · LC128

[-1][0][1][2][2][3][4][6][8][9][10][11]
 ↑
scan pointer ready

CURRENT  —        BEST —
```
- no first comparison,
- no duplicate rule,
- no gap rule.

Scene06 begins directly with the sorted trace.

---

# 📈 WHY-NOT Complexity Graphic Specification

## Three-factor derivation
Must be visually explicit:

```text
up to n starts
        ×
up to n sequence steps
        ×
up to n list scan
        =
O(n³)
```

## RoughCurve
Use only after `O(n³)` is spoken.

Axes:
- x: input size n
- y: work

Curve:
- one cubic curve only
- no comparison to n log n or n yet
- begins F537–F549
- finish by F559

## Illustrative operations counter
During F537–F559:
```text
n = 100
100 × 100 × 100
= 1,000,000
```
Keep small and clearly illustrative.

Do not create a large benchmark table.

---

# 🧩 Component / Motion Mapping

| Visual Action | Component / Technique |
|---|---|
| code-line selection → central frame | `SvgMorph` |
| dimension brackets | `RoughLine` |
| start/step/scan bars | `RoughLine` + `ChalkText` |
| three-factor collapse | frame-driven position + scale |
| n×n×n → wire cube | `SvgMorph` + `RoughLine` |
| cubic curve | `RoughCurve` |
| operation count | `CountUp` |
| repeated list scans | SVG path progress |
| strike “searching” | `RoughLine` 18–22f |
| reverse-erasing search trails | reverse stroke progress |
| raw → sorted movement | `BezierFlight` |
| unsorted baseline → arranged baseline | `SvgMorph` |
| neighbour +1 relation | `RoughLine` / small `RoughBox` |
| final scene handoff | fixed slots + pointer tween |

---

# ✨ Premium / Stunning Moments — Keep to Five

## 1. Three Cost Dimensions
STARTS / STEPS / LIST SCAN physically stack as three `n` dimensions.

## 2. n×n×n → Chalk Work Cube
The three factors become three axes of a wireframe cube, then collapse to `O(n³)`.

## 3. Repeated Search Residue
Same raw array gets scanned multiple times; trail history accumulates visibly.

## 4. Search Removal
When teacher asks “remove that searching?”, all scan trails reverse and erase from the board.

## 5. Same Cards Sorting
The exact brute-array cards lift and Bezier-fly into sorted positions. This is the scene’s biggest morph and the conceptual bridge to Scene06.

No more hero effects than these.

---

# 🚫 Anti-Slop Rules

Do **not**:
1. show `O(n³)` at frame0,
2. start with a generic Big-O graph,
3. use a generic “slow” icon,
4. introduce sorting before “arranged first?”,
5. respawn a brand-new sorted array,
6. show duplicate-ignore logic,
7. show gap-reset logic,
8. trace sorted array here,
9. show HashSet,
10. show O(n log n) yet,
11. show O(n) yet,
12. use glossy 3D cube,
13. spin/rotate the cube dramatically,
14. shake cards randomly,
15. animate all 12 sort cards with identical arcs causing collisions,
16. use auto-flex slots,
17. leave search trails while sorting; erase them first,
18. use multiple complexity curves,
19. hard-cut into Scene06,
20. occupy caption-safe zone.

---

# ✅ Critical Review Frames

### F0
Scene04 while-line still visible; no reset.

### F77
first `n` factor for starts.

### F171
sequence-step dimension growing.

### F323
membership-search scanner ignites.

### F387
three cost dimensions visible.

### F437
first `n`.

### F458
second `n`.

### F480
third `n`.

### F528
wireframe cube / `O(n³)` morph underway.

### F537
`O(n³)` complete.

### F559
cubic curve + illustrative counter resolved.

### F605
repeated-search diagnosis begins.

### F769
same raw array being scanned again.

### F854
same unsorted array emphasized.

### F913
“remove” strike starts.

### F946
search trails retracting.

### F983
clean unsorted row before sorting idea.

### F1034
same cards start sorting.

### F1065
fully sorted row.

### F1137
8→9 +1 neighbour relation.

### F1242
sorted row restored, no full trace.

### F1322
Scene06 handoff: pointer ready at -1.

---

# ✅ Acceptance Checklist

- [ ] Exactly **1323 frames**
- [ ] exact sync JSON frames used
- [ ] Scene04 handoff preserved
- [ ] n-start factor shown before n-step factor
- [ ] n-step factor shown before list-scan factor
- [ ] n×n×n reveals only on narration
- [ ] `O(n³)` reveals only at F506+
- [ ] cubic curve comes only after Big-O is spoken
- [ ] repeated searching identified as actual bottleneck
- [ ] same raw unsorted array used for repeated scans
- [ ] search trails physically retract on “remove searching?”
- [ ] sorting begins only on “arranged”
- [ ] exact original cards morph to sorted positions
- [ ] sorted order correct:
      `[-1,0,1,2,2,3,4,6,8,9,10,11]`
- [ ] no sorted trace in Scene05
- [ ] neighbour relationship shown only as concept teaser
- [ ] no HashSet / optimal spoiler
- [ ] no O(n log n) yet
- [ ] final frame directly usable by Scene06
- [ ] main hero stays y≈300..600
- [ ] captions safe zone clear
- [ ] course tokens only

---

# Final Scene 05 Visual Story — One Line

**Scene04’s highlighted `current + 1 in nums` line collapses into a center-stage cost model where `n` possible starts, `n` possible sequence steps, and an `n`-value Python-list scan become three visible work dimensions; those dimensions collapse to `n × n × n`, morph into a restrained chalk wireframe cube and finally `O(n³)` with a cubic growth curve, then the model compresses back into the real bottleneck — repeated searches over the same untouched unsorted array; when the teacher asks what happens if we remove that searching, the accumulated scan trails reverse and erase, and the exact same twelve array cards lift from their brute-force slots and Bezier-fly into `[-1,0,1,2,2,3,4,6,8,9,10,11]`, where a tiny `8→9` +1 neighbour relation previews the new idea before everything settles into Scene06’s sorted-trace starting frame.**
