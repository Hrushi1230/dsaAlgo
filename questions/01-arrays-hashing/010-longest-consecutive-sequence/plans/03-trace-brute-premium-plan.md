# Scene 03 · TRACE — BRUTE FORCE · Premium SVG / Motion Animation Plan

**Longest Consecutive Sequence · LC #128 · Type C**  
**Audio**: `03-trace-brute.mp3` — **119.740 s** — **3592 frames** @ 30 fps  
**Goal**: Make brute force visually obvious and intentionally repetitive. The student must see that we treat **every array value as a possible start**, repeatedly search the **same original array** for the next number, build the sequence one value at a time, and eventually discover the best length `6`. The repeated-search pain must be *felt* before Scene 04 code and Scene 05 complexity.

---

# 🔗 Scene 02 → Scene 03 Continuity Lock

Scene 02 ends on:

```text
QUESTION 10 · LC128

[8][1][6][3][2][2][4][10][9][11][-1][0]
 ↑
START?

────────────────────────
search lane ready
```

Scene 03 begins from **that exact layout**.

No title card.  
No fade-to-black.  
No re-rendered array.  
No sorting.  
No code.

The same master-array slots remain in the same coordinates for the entire scene.

---

# 🎯 Pedagogical Philosophy & Hard Rules

## 1. COMPLETE TRACE — ZERO SKIPPED STARTS

We must visibly trace all twelve input positions in this exact order:

```text
8
1
6
3
2
2      ← second duplicate must be traced again
4
10
9
11
-1
0
```

Every narrated `Need X`, `Found`, `Not found`, `Length N`, and `Best` update receives a visual event.

Never use:
- “same idea” and skip,
- ellipsis to jump across values,
- a pre-built final sequence.

The second `2` is especially important because the scene explicitly teaches **duplicate work**.

---

## 2. ORIGINAL ARRAY NEVER MOVES

The brute-force visual identity is:

> “We keep searching the same original unsorted array.”

Therefore:

- all 12 input cards use fixed absolute slots,
- no card is removed from the original array,
- no card changes x-position,
- no sorting,
- no set transformation.

When a found number joins the current sequence, create a **ghost/clone** that flies down to the sequence ribbon. The source card stays in the original array.

This is essential because the repeated-search cost must remain visible.

---

## 3. CENTER-STAGE VISUAL SYSTEM

One stable teaching system is reused for every start:

### A. TARGET ORB
Top-center:
```text
NEED 9
```
Morphs `9 → 10 → 11 → 12`, etc.

### B. ORIGINAL ARRAY
Center:
```text
[8][1][6][3][2][2][4][10][9][11][-1][0]
```

### C. SEARCH BEAM
A hand-drawn SVG scan line / chalk “comet” sweeps across the array toward the found slot, or to the end on a miss.

### D. SEQUENCE RIBBON
Below array:
```text
8 → 9 → 10 → 11 → ×12
```

Built progressively using clones and `RoughLine`.

### E. STATE STRIP
Bottom teaching band:
```text
CURRENT LENGTH: 4        BEST: 4
```

This system never jumps around. Students learn where to look.

---

## 4. PREMIUM MOTION LANGUAGE

Use motion for meaning:

### Search
`Need X`
→ target orb changes  
→ search beam scans the original array  
→ found/miss state resolves

### Found
source card mint pulse  
→ clone lifts off  
→ `BezierFlight` to next ribbon slot  
→ connector draws  
→ length rolls up

### Miss
scanner reaches end  
→ ghost target node appears on ribbon  
→ warn outline  
→ `RoughLine` strike / small `Shatter` fracture  
→ attempt stops

### New start
completed ribbon recedes into faint history  
→ active-start marker moves to next input card  
→ ribbon clears  
→ current length resets

### Duplicate work
old first-`2` ribbon returns as a faint ghost  
→ second-`2` search physically retraces it  
→ both paths line up  
→ `DUPLICATE WORK` stamp/brace appears

### Final inefficiency proof
all search trails reappear in low opacity over the same raw array  
→ viewer sees the board “scarred” by repeated sweeps

---

## 5. EXACT AUDIO SYNC

Every main action is tied to the supplied sync.

Key scene landmarks:

```text
F0       Brute
F103     start
F166     original array
F185     next value
F235     trace
F260     every start

F300     start 8
F332     need 9
F364     found
...
F626     length 4

F665     start 1
...
F899     length 4

F940     start 6
...
F1044    length 1

F1073    start 3
...
F1225    length 2

F1268    first 2
...
F1471    length 3

F1517    second 2
F1544    same search again
...
F1735    duplicate work

F1783    start 4
...
F1875    length 1

F1916    start 10
...
F2060    length 2

F2094    start 9
...
F2298    length 3

F2328    start 11
...
F2395    length 1

F2446    start -1
...
F2813    length 6
F2832    best becomes 6

F2908    start 0
...
F3232    length 5

F3278    final best
F3310    6
F3370    repeated-search critique
F3522    code handoff
```

---

# 📐 Fixed Layout — 1920×1080

## Top Badge
```text
y = 28..70
BRUTE FORCE · TRACE
```

Compact; not a giant title.

## Target Orb / Query Zone
```text
y = 145..235
x = center
```

Dimensions:
```text
340 × 82
```

Content:
```text
NEED 9
```

Orb/frame uses SVG capsule geometry that morphs between target values.

## Original Array
Optical hero center:
```text
y = 315..455
```

12 fixed slots:
```text
slotWidth  = 92
slotHeight = 108
gap        = 16
xStart     ≈ 320
```

Font:
```text
44px mono bold
```

## Start Marker
Above active card:
```text
y ≈ 275
```

A small gold pointer + `START`.

## Search Beam
Crosses array around:
```text
y ≈ 455..505
```

SVG path tracks left→right scanning.

## Sequence Ribbon
```text
y = 585..715
```

Fixed node positions generated relative to ribbon center.

Node size:
```text
86 × 94
```

## State Strip
```text
y = 740..835
```

Left:
```text
CURRENT LENGTH
```

Right:
```text
BEST
```

## Captions
```text
y = 960..1040
```

Nothing important enters caption zone.

---

# 🎨 Semantic Theme Rules

Use course tokens only.

```text
theme.chalkText   normal values / structure
theme.chalkDim    inactive / history / search residue
theme.pivot       active START / target
theme.good        FOUND / confirmed ribbon nodes
theme.warn        MISS / broken target
theme.cyan        scan beam / search path
theme.purple      duplicate-work ghost overlay
```

No neon SaaS glow.
No gradient cards.
No red duplicate value.
No UI glass.

---

# 🧩 Component Mapping

| Meaning | Component / Technique |
|---|---|
| active start card | `RoughBox` + gold pointer |
| query capsule | `SvgMorph` + `ChalkText` |
| search sweep | custom SVG path / `RoughLine` progress |
| moving scan head | frame-driven circle on SVG path |
| source → sequence clone | `BezierFlight` |
| sequence connector | `RoughLine` |
| current length | `CountUp` |
| best | `CountUp` |
| missing target fracture | `Shatter` + `RoughLine` strike |
| duplicate previous trace | ghost SVG group + `theme.purple` |
| repeated search residue | faint SVG path history |
| final transition to code | `recedeOut()` / stage morph |

---

# 🧠 Search-Beam Design — Signature Brute Visual

The brute trace should have one visually memorable motif:

## “Chalk Search Comet”

When narrator says:

```text
Need 9.
```

1. target orb changes to `NEED 9`,
2. a tiny cyan chalk dot drops from target orb,
3. it lands on left edge of the raw array,
4. an SVG sweep line grows left→right,
5. the dot travels along the line,
6. it stops on the slot containing `9`,
7. when narrator says `Found`, slot 9 becomes mint.

For a miss:

```text
Need 12.
```

the comet scans all the way to the right edge,
overshoots slightly into a ghost `12?` region,
then the path cracks / stops.

### Important
Do not animate individual element equality comparisons unless the audio explicitly discusses them.

The beam itself represents Python list membership scanning.

### Search residue
After each search:
- fade the current beam to 6–10% opacity,
- keep it behind the array for several attempts,
- older trails slowly reduce toward 2–3%.

By the end, the board visibly contains many repeated search traces.

This residue becomes the setup for the final narration:
> “almost every step keeps searching the same original array again.”

---

# ⏱ ACT-BY-ACT FRAME PLAN

# ACT 0 — Explain the Brute Rule
## F0–F286
**Narration:**  
“Brute force is simple. Take every number as a possible start and keep searching the original array for the next value. Let's trace every start.”

### F0–F40 — “Brute force is simple.”
- Inherited pointer remains over `8`.
- Write compact top badge:
  `BRUTE FORCE`
- Beneath badge, thin SVG underline draws in 18–22f.
- Do not begin search.

### F40–F50 — pause
Hold.

### F50–F103 — “Take every number as a possible start”
- Highlight the entire array very lightly.
- Move a gold start-pointer preview across **all 12 slots** in one smooth, restrained pass:
  `8 → 1 → 6 → ... → 0`
- It should not stop long enough to imply processing.
- Purpose: visually communicate “every number can be a start.”

### F103 — exact word “start”
- Pointer returns to slot0 (`8`).
- Write small fixed label:
  `POSSIBLE START`

### F114–F166 — “and keep searching the original array”
- Draw one cyan SVG loop under the raw array.
- The loop begins at left and runs beneath all slots.
- Label on line:
  `SEARCH SAME ARRAY`
- No found target yet.

### F166 — “array”
- Brief 100% emphasis on raw array frame.
- Sequence ribbon stays empty.

### F185–F204 — “next value.”
- Target orb appears top-center:
  `NEXT = ?`
- Capsule outline draws with `RoughLine`.

### F204–F225 — 21f pause
- Target orb holds.
- Search lane faint.
- No motion.

### F225–F271 — “Let's trace every start.”
- Change top badge:
  `BRUTE FORCE · TRACE`
- Small row of 12 tiny attempt ticks appears above the input cards:
  one aligned to each start position.
- Tick0 gets pivot color; future ticks dim.
- Do not number them separately; array values already identify starts.

### F271–F287 — pause
- Clear explanatory loop label.
- Keep:
  raw array,
  target orb,
  start pointer over 8,
  empty sequence ribbon,
  state strip:
  `CURRENT 1` faintly prepared,
  `BEST 0` faint.

---

# ACT 1 — START 8 · RUN 8→9→10→11
## F287–F647

### F287–F312 — “Start with 8.”
- Gold pointer settles over slot `8`.
- `RoughBox` draws around 8.
- Clone of `8` moves straight down 26–30f into first sequence-ribbon node.
- Ribbon node becomes:
  `[8]`
- `CURRENT LENGTH` reveals as `1`.
- `BEST` remains `0`.

### F312–F326 — 14f pause
- Hold `[8]`.

---

## Need 9
### F326–F349 — “Need 9.”
- Target orb morph:
  `NEXT = ? → NEED 9`
- Search comet drops to array left edge.
- Begin sweep toward slot8 (`9`).

### F349–F364 — 15f pause
- Sweep continues across slots.
- Comet decelerates at `9`.

### F364 — “Found.”
- `9` source card turns mint.
- Comet collapses into a mint ring around `9`.
- Do not move source.

### F364–F374
- Ghost clone `9` lifts.
- `BezierFlight` to second sequence node.
- Connector `8 → 9` draws AFTER clone starts settling.

### F374–F394 — 20f pause
- `CountUp`: length `1 → 2`.
- Found-card highlight on source fades back to normal.
- Search beam leaves faint residue path.

---

## Need 10
### F394–F413
- Target orb morphs `9 → 10`.
- New search comet scans toward slot7 (`10`).

### F413–F430 — pause
- Sweep completes.

### F430 — “Found.”
- `10` mint state.
- clone flight to ribbon node3.
- connector:
  `9 → 10`.

### F430–F446
- settle.

### F446–F464 — pause
- length `2 → 3`.
- current search path becomes faint residue.

---

## Need 11
### F464–F485
- target morph `10 → 11`.
- search beam sweeps to slot9.

### F485–F504 — pause
- hold scan.

### F504 — “Found.”
- `11` found.
- clone flies to node4.
- draw connector `10 → 11`.

### F516–F528 — pause
- length `3 → 4`.

---

## Need 12 · MISS
### F528–F548
- Target orb morphs `11 → 12`.
- Scanner begins full-width sweep.

### F548–F560 — pause
- scan reaches rightmost slot.
- continue 30px beyond array into a faint ghost target node:
  `[12 ?]`.

### F560–F581 — “Not found.”
State change sequence:
1. ghost 12 outline becomes warn,
2. search comet extinguishes,
3. `RoughLine` X writes over ghost node,
4. connector from 11 toward 12 cracks using small `Shatter`.

Do not update length yet.

### F581–F599 — pause
- hold failure.

---

## Result
### F599–F640 — “So 8 gives length 4.”
- Target orb recedes.
- Sequence ribbon recenters:
  `[8]→[9]→[10]→[11]`
- missing 12 ghost fades.
- result banner writes:
  `START 8 · LENGTH 4`
- `CURRENT LENGTH = 4`.
- `BEST` rolls:
  `0 → 4`
- Only after best update, tiny attempt tick for 8 becomes completed.

### F640–F648
- ribbon dims to 20% “history”.
- Start marker prepares to move.

---

# ACT 2 — START 1 · RUN 1→2→3→4
## F648–F920

### F648–F678 — “Next, 1.”
- Old 8-run ribbon slides 16px downward and fades further, not removed instantly.
- Active pointer moves from slot8-value card to input slot1 (`1`).
- clear active ribbon.
- clone `1` drops to first node.
- current length resets `4 → 1`.
- best remains `4`.

### F686–F703 — Need 2
- target orb `NEED 2`.
- beam sweeps to **first 2 encountered in original array**, slot4.
- This is important: duplicate slot5 remains untouched.

### F712 — Found
- slot4 `2` mint.
- clone to ribbon.
- connector 1→2.

### F724–F735
- length 1→2.

### F735–F752 — Need 3
- scan to slot3.

### F758 — Found
- clone `3`.
- chain 1→2→3.

### F769–F783
- length 2→3.

### F769–F794 — Need 4
- target updates while previous found state settles.
- ensure **state change first**, then scan begins after F775.

### F803 — Found
- 4 clone to chain.
- length eventually →4.

### F825–F846 — Need 5
- full scan across original array.

### F851–F866 — Not found
- ghost `[5 ?]`,
- warn X,
- small break at end of chain.

### F875–F916 — “So 1 gives length 4.”
- result:
  `START 1 · LENGTH 4`
- best `4` remains unchanged.
- Do not animate best number.
- Instead small chalk note:
  `ties best`
  for ~20f, then fades.
- attempt tick for start1 becomes completed.

### F916–F921
- ribbon recedes.

---

# ACT 3 — START 6 · RUN 6→×7
## F921–F1058

### F921–F952 — “Next, 6.”
- pointer moves to slot2 (`6`).
- clone to ribbon node1.
- current resets to1.

### F962–F983 — Need 7
- target `NEED 7`.
- scanner traverses entire raw array.

### F983–F997 pause
- reach end.

### F997–F1015 — Not found
- ghost `[7 ?]`,
- warn X,
- no connector completion.

### F1015–F1037 — long pause
Use for visual absorption:
- array remains,
- solitary `[6]` ribbon,
- scanner residue stays faint.

### F1037–F1053 — “Length 1.”
- result:
  `START 6 · LENGTH 1`
- best stays4.
- completed tick for 6.

### F1053–F1059
- clear active ribbon.

---

# ACT 4 — START 3 · RUN 3→4→×5
## F1059–F1249

### F1059–F1088 — Next 3
- pointer → slot3 (`3`).
- clone 3.
- current=1.

### F1098–F1120 — Need 4
- beam → slot6.
- note spatially far input position; do not shortcut.

### F1128–F1139 — Found
- clone4 to ribbon.
- draw 3→4.

### F1139–F1157 pause
- current 1→2.

### F1157–F1179 — Need 5
- full sweep.

### F1191–F1208 — Not found
- ghost5 break.

### F1217–F1240 — Length2
- result:
  `START 3 · LENGTH 2`
- best4 unchanged.
- mark attempt tick.

### F1240–F1250
- dim ribbon.

---

# ACT 5 — FIRST 2 · RUN 2→3→4→×5
## F1250–F1497

### F1250–F1282 — “Next, 2.”
Important:
- pointer goes specifically to **first 2** at slot4.
- slot5 second2 stays neutral.
- add tiny index marker under active source only:
  `i=4`
  to distinguish the two duplicate starts.
- clone2 to ribbon.
- current=1.

### F1300–F1323 — Need 3
- search to slot3.
- found state at F1328.

### F1328–F1337 — Found
- clone3.
- connector 2→3.

### F1337–F1353
- current 1→2.

### F1353–F1371 — Need 4
- beam to slot6.

### F1381–F1389 — Found
- clone4.
- chain 2→3→4.
- current 2→3 in next pause.

### F1406–F1429 — Need5
- full-width search.

### F1435–F1451 — Not found
- ghost5 + broken connector.

### F1451–F1486 — “Length 3.”
- result:
  `FIRST 2 · LENGTH 3`
- before receding, store a **ghost copy of this entire ribbon**:
  `2→3→4→×5`
- ghost color `theme.purple`,
- opacity 12–16%.
- This history will reappear for second 2.

### F1486–F1498 pause
- original active ribbon fades.
- purple ghost remains barely visible.

---

# ACT 6 — SECOND 2 · DUPLICATE WORK HERO MOMENT
## F1498–F1764

This is a major pedagogical beat and should feel premium.

### F1498–F1527 — “Now the second 2.”
- pointer slides from first 2 slot4 to second 2 slot5.
- use short arc, not straight snap.
- add tiny source marker:
  `i=5`
- second2 receives pivot outline.
- previous purple ghost ribbon:
  `2→3→4→×5`
  becomes 25% visible behind empty active ribbon.

### F1527–F1538 pause
- hold both duplicate 2 cards on raw array with a faint curved brace connecting them.
- no label yet.

### F1538–F1571 — “Same search again.”
- `SAME SEARCH` writes above ribbon.
- active clone of second2 lands exactly over first ghost node.
- purple ghost path stays underneath as a “memory trace”.
- target orb prepares for 3.

### F1571–F1585 pause
- make old ghost path visible enough to compare.

---

## 3 found
### F1585–F1594 — spoken “3.”
- target orb:
  `NEED 3`
- active search beam retraces same route used for first2.
- optionally show previous beam as purple dashed path.

### F1600–F1605 — Found
- active mint path overlays purple ghost at node3.
- clone3 lands exactly aligned over ghost3.

### F1605–F1622 pause
- connector 2→3 draws over ghost connector.

---

## 4 found
### F1622–F1628 — “4.”
- target orb changes to4.
- retraced beam.

### F1630–F1637 — Found
- clone4 aligns over ghost4.

### F1637–F1653 pause
- connector overlays.

---

## 5 missing
### F1653–F1659 — “5.”
- target5.
- full scan.

### F1666–F1683 — “Missing.”
- new warn ghost5 lands exactly on old ghost miss position.
- new X writes over old faint X.

### F1691–F1717 — “Again, length 3.”
- active result:
  `SECOND 2 · LENGTH 3`
- `AGAIN` appears briefly in pivot.
- best still4.

---

## Duplicate-work reveal
### F1725–F1756 — “That is duplicate work.”
This should be one of the most memorable frames.

1. active mint ribbon and purple ghost ribbon separate vertically by ±18px,
2. both are visibly identical:
   `2→3→4→×5`,
3. a rough bracket encloses both,
4. write:
   `SAME WORK ×2`
5. then the two ribbons morph back onto each other.

Use:
- `SvgMorph` for path separation/merge,
- `RoughLine` bracket,
- tiny one-shot `ChalkDust` when `×2` lands.

No flashy particles.

### F1756–F1765
- both duplicate traces recede into background history.
- mark second2 attempt complete.

---

# ACT 7 — START 4 · RUN 4→×5
## F1765–F1894

### F1765–F1799 — Next 4
- pointer→slot6.
- current=1.
- clone4.

### F1813–F1834 — Need5
- full search.

### F1843–F1857 — Not found
- ghost5 fail.

### F1867–F1889 — Length1
- result:
  `START 4 · LENGTH 1`
- best4 unchanged.

### F1889–F1895
- recede.

---

# ACT 8 — START 10 · RUN 10→11→×12
## F1895–F2086

### F1895–F1927 — Next10
- pointer→slot7.
- clone10.
- current1.

### F1944–F1960 — Need11
- scan to slot9.

### F1974–F1979 — Found
- clone11.
- chain10→11.

### F1979–F1994
- current2.

### F1994–F2014 — Need12
- full scan.

### F2025–F2038 — Not found
- ghost12 fail.

### F2053–F2076 — Length2
- result:
  `START 10 · LENGTH 2`
- best4 unchanged.

### F2076–F2087
- dim.

---

# ACT 9 — START 9 · RUN 9→10→11→×12
## F2087–F2319

### F2087–F2105 — Next9
- pointer→slot8.
- clone9.
- current1.

### F2105–F2126 — 21f pause
Use the long pause for:
- clear previous trace,
- settle9 in ribbon,
- target orb ready.

### F2126–F2143 — Need10
- scan to slot7.

### F2153–F2159 — Found
- clone10.
- chain9→10.

### F2159–F2179 pause
- current2.

### F2179–F2200 — Need11
- scan to slot9.

### F2209–F2218 — Found
- clone11.
- current3.

### F2237–F2255 — Need12
- full search.

### F2263–F2277 — Not found
- ghost12 fail.

### F2288–F2314 — Length3
- result:
  `START 9 · LENGTH 3`
- best4 unchanged.

### F2314–F2320
- dim.

---

# ACT 10 — START 11 · RUN 11→×12
## F2320–F2425

### F2320–F2338 — Next11
- pointer→slot9.
- clone11.
- current1.

### F2347–F2363 — Need12
- scan entire raw array.

### F2369–F2381 — Not found
- miss.

### F2389–F2413 — Length1
- result:
  `START 11 · LENGTH 1`
- best4.

### F2413–F2426 pause
- clear active ribbon.
- subtly prepare leftward pointer move toward `-1`.

---

# ACT 11 — START -1 · HERO RUN -1→0→1→2→3→4
## F2426–F2874

This is the winning run and should feel satisfying, but not like a celebration montage.

### F2426–F2458 — “Now, minus 1.”
- pointer arcs to slot10 (`-1`).
- `-1` gets pivot box.
- clone `-1` enters ribbon.
- ribbon expands wider because we know this run can grow to six nodes.
- current=1.
- best still4.

---

## Need 0
### F2467–F2486
- target `NEED 0`.
- beam scans to slot11.

### F2503–F2507 — Found
- 0 mint.
- clone0 to ribbon.
- connector `-1→0`.

### F2507–F2521
- current 1→2.

---

## Need1
### F2521–F2544
- target1.
- scan back across original array to slot1.
- This direction change is visually important: scanner should still start left edge, not travel from slot11 to slot1.
- We are searching original array again from scratch.

### F2551–F2557 Found
- clone1.
- current3.

### F2557–F2579 — 22f pause
- let ribbon `-1→0→1` breathe.
- keep scan residue visible.

---

## Need2
### F2579–F2599
- target2.
- beam to first2 slot4.

### F2608–F2617 Found
- clone2.
- current4.

### F2617–F2636
- settle.

---

## Need3
### F2636–F2656
- target3.
- beam to slot3.

### F2663–F2671 Found
- clone3.
- current5.

### F2671–F2693 — 22f pause
- hold 5-node chain.

---

## Need4
### F2693–F2713
- target4.
- beam to slot6.

### F2722–F2730 Found
- clone4.
- current6.

### F2730–F2748
- now ribbon:
  `-1→0→1→2→3→4`
- best still visually `4` until narrator later says best becomes6.

---

## Need5 miss
### F2748–F2768
- target5.
- full scan.

### F2774–F2791 — Not found
- ghost5 failure.
- chain ends.

### F2791–F2806
- hold six valid nodes + failed7th ghost.

### F2806–F2824 — “Length 6.”
- remove ghost5 gradually.
- result banner:
  `START -1 · LENGTH 6`
- `CURRENT LENGTH = 6`
- do not update BEST until next spoken phrase.

### F2832–F2862 — “Best becomes 6.”
Hero update sequence:
1. `BEST 4` outline activates,
2. old 4 chalk-erases / rolls,
3. `CountUp 4 → 6`,
4. entire six-node ribbon receives one low-opacity `ShineFill`,
5. small handwritten:
   `NEW BEST`
   appears.

This is the only strong “best” hero moment in the scene.

### F2862–F2875
- ribbon recedes to 25%, but keep it faintly visible because the final `0` attempt will overlap much of it.

---

# ACT 12 — LAST START 0 · RUN 0→1→2→3→4
## F2875–F3277

### F2875–F2899 — “One last start.”
- attempt ticks show only final position pending.
- all previous ticks are completed.
- pointer prepares for 0.

### F2908–F2920 — “Zero.”
- pointer→slot11 (`0`).
- clone0 enters active ribbon.
- current resets to1.
- best stays6.
- faint previous winning ribbon:
  `-1→0→1→2→3→4`
  remains behind in 8% opacity.
- this makes the new run visibly overlap part of already-done work.

---

## Need1
### F2937–F2956
- target1.
- scan from beginning toward slot1.

### F2956–F2973 — Found
- clone1.
- 0→1.
- current2.

### F2973–F2997 — 24f pause
- hold.
- search residue persists.

---

## Need2
### F2997–F3011
- target2.
- scan to first2.

### F3026–F3035 Found
- clone2.
- current3.

---

## Need3
### F3043–F3061
- target3.

### F3079–F3089 Found
- clone3.
- current4.

### F3089–F3103 pause
- settle.

---

## Need4
### F3103–F3119
- target4.

### F3134–F3140 Found
- clone4.
- current5.

### F3140–F3159
- active ribbon:
  `0→1→2→3→4`
- behind it, ghost of winner:
  `-1→0→1→2→3→4`
- the overlap is visually obvious but not yet labeled.

---

## Need5 miss
### F3159–F3176
- target5.
- full scan.

### F3191–F3208 — Not found
- ghost5 failure.

### F3208–F3226 — 18f pause
- hold active 5-node run.

### F3226–F3244 — Length5
- result:
  `START 0 · LENGTH 5`
- best6 does not change.
- small quiet note:
  `BEST STAYS 6`
- final attempt tick completes.

### F3247–F3258 — “Done.”
- active pointer fades.
- target orb disappears.
- search lane stays.

### F3258–F3278 — pause
- all start ticks are now completed.
- raw array remains untouched at center.
- current ribbon recedes.

---

# ACT 13 — FINAL BEST + VISUAL PROOF OF REPEATED SEARCHING
## F3278–F3521

### F3278–F3319 — “Final best, 6.”
- All active ribbons disappear except one compact final result capsule.
- center-bottom writes:
  `FINAL BEST = 6`
- `6` gets pivot/good outline.
- raw array remains unchanged.

### F3319–F3335 — pause
- hold.

### F3335–F3358 — “The method works.”
- draw a small mint check beside:
  `CORRECT`
- do not imply efficient.
- array stays hero.

### F3358–F3370 — pause
- prepare critique.

---

## Repeated-search reveal
### F3370–F3491
**Narration:**  
“But almost every step keeps searching the same original array again.”

This is the payoff for all earlier search residue.

### F3370 — “But”
- mint `CORRECT` reduces opacity.
- `FINAL BEST 6` moves to small top-right state.

### F3374–F3396 — “almost every”
- revive 6–8 representative faint search trails behind the raw array.
- Do not show every trail at full opacity.

### F3396–F3414 — “step keeps”
- more trails appear, staggered.
- each trail uses same left→right sweep geometry.

### F3414 — “searching”
- trigger a rapid **search-residue replay**:
  - 9-search sweep,
  - 10-search sweep,
  - 11-search sweep,
  - 12 full sweep,
  - 2-search sweep,
  - 3-search sweep,
  - 4-search sweep,
  - 5 full sweep,
  etc.
- replay as low-opacity SVG strokes over ~55f.

### F3428–F3450 — “the same”
- raw array border becomes full brightness.
- all search traces converge visually on this single unchanged array.

### F3450–F3477 — “original array”
- hand-written bracket appears beneath array:
  `SAME ARRAY`
- array itself does not move.

### F3477–F3491 — “again.”
- place rough repeat symbol:
  `↻ ↻ ↻`
  below search trails.
- small warn label:
  `REPEATED SEARCH`
- no complexity number yet; O(n³) belongs later.

### F3491–F3522 — 31f pause
Use this long pause to cleanly transition:
- search trails remain for first 12f,
- then compress downward into one thin horizontal line,
- result/best capsule remains small,
- original array begins receding upward.

This line becomes the handoff into the code scene.

---

# ACT 14 — HANDOFF TO SCENE 04 CODE
## F3522–F3591
**Narration:** “Let's write this exact logic first.”

### F3522 — “Let's”
- raw array scale 1.0→0.78 and moves toward top-left as a faint reference ghost.
- no trace animation remains active.

### F3534 — “write”
- the thin repeated-search line from previous act morphs into a code-editor baseline / cursor line.
- use `SvgMorph`.

### F3542–F3565 — “this exact”
- empty code-editor frame rises from bottom.
- only shell, no code text.

### F3565–F3578 — “logic”
- a blinking cursor appears at first code line.
- previous raw array fades below 12% opacity.

### F3578–F3592 — “first.”
Final state:
```text
CODE EDITOR READY
cursor blinking
no code typed yet
```

Scene 04 begins from this exact frame.

---

# 🔁 MASTER MORPH CHAIN

```text
Scene02 proof/search lane
        ↓
BRUTE TRACE STAGE
        ↓
start pointer
        ↓
NEED target orb
        ↓
SVG search comet
        ↓
FOUND source card
        ↓ BezierFlight
sequence ribbon clone
        ↓ RoughLine
ribbon connector
        ↓
length update
        ↓
MISS ghost node / fracture
        ↓
result banner
        ↓
next start
        ↓
duplicate ghost overlay
        ↓
winning -1 ribbon
        ↓
final 0 overlap
        ↓
all search trails revive
        ↓
REPEATED SEARCH visual
        ↓ SvgMorph
code-editor baseline
```

---

# 🎞 Exact Trace Summary — All Starts

| Start | Narrated Range | Visual Ribbon | Length | Best after attempt |
|---|---:|---|---:|---:|
| `8` | F287–640 | `8→9→10→11→×12` | 4 | 4 |
| `1` | F648–916 | `1→2→3→4→×5` | 4 | 4 |
| `6` | F921–1053 | `6→×7` | 1 | 4 |
| `3` | F1059–1240 | `3→4→×5` | 2 | 4 |
| first `2` | F1250–1486 | `2→3→4→×5` | 3 | 4 |
| second `2` | F1498–1756 | same trace again | 3 | 4 |
| `4` | F1765–1889 | `4→×5` | 1 | 4 |
| `10` | F1895–2076 | `10→11→×12` | 2 | 4 |
| `9` | F2087–2314 | `9→10→11→×12` | 3 | 4 |
| `11` | F2320–2413 | `11→×12` | 1 | 4 |
| `-1` | F2426–2862 | `-1→0→1→2→3→4→×5` | 6 | **6** |
| `0` | F2875–3244 | `0→1→2→3→4→×5` | 5 | 6 |

Nothing is skipped.

---

# ✨ Premium “Stunning” Moments — Use Sparingly

## 1. First Successful Search
When `9` is first found:
- small cyan search comet collapses into mint ring,
- clone lifts and arcs to sequence ribbon.
This establishes the visual language.

## 2. First MISS
At `12`:
- scanner overshoots,
- ghost node appears,
- connector fractures.
This establishes miss language.

## 3. Duplicate Work
Second2:
- old purple trace and new mint trace split,
- show identical shape,
- bracket `SAME WORK ×2`,
- merge again.

## 4. Winning Run
At `-1→0→1→2→3→4`:
- every new node feels deliberate,
- chain line gains subtle cumulative chalk weight,
- `BEST 4→6` gets the only true shine moment.

## 5. Repeated Search Finale
All faint search trails reappear over the untouched array.
This is the visual thesis of brute force.

Do not add more “hero” effects than these five.

---

# 🎥 Motion Quality Rules

## Search beam
- 14–22f typical sweep to found target.
- 18–26f full miss sweep.
- Use eased progress but nearly linear motion.
- No bouncy scan head.

## Clone flights
- 18–26f.
- low Bezier arc.
- settle without elastic overshoot.

## Ribbon connectors
- 10–16f chalk draw.
- draw after the destination clone has mostly settled.

## State changes
Always:
```text
target changes
→ scan
→ result state
→ clone movement
→ connector
→ count update
```

Never all at once.

## History traces
- max 10% opacity normally.
- duplicate ghost may rise to 25%.
- repeated-search finale may reach 18–22% aggregate opacity but must stay readable.

---

# 🚫 Anti-Slop / Anti-Clutter Rules

Do **not**:

1. sort the array,
2. hide the original array,
3. move source cards into the sequence ribbon,
4. show code,
5. pre-render final run,
6. skip second duplicate `2`,
7. use “...” to skip searches,
8. animate every list comparison individually,
9. fire pointer + beam + clone + counter simultaneously,
10. use neon search effects,
11. make misses explode loudly,
12. use Shatter on every failure at full strength,
13. create 12 separate panels,
14. show all historical ribbons at full opacity,
15. show Big-O yet,
16. call brute O(n²),
17. use generic “magnifying glass” icons when the search beam already communicates search,
18. change slot coordinates,
19. use auto-flex array cards,
20. cover captions.

---

# ✅ Critical Render Frames

Render these before implementation is approved:

### F0
Inherited Scene02 state; raw array unchanged.

### F103
`POSSIBLE START` rule.

### F300
8 active as first start.

### F364
first FOUND state for 9.

### F560
first MISS state for 12.

### F626
length4 / best4.

### F665
start1.

### F899
start1 length4, best unchanged.

### F997
6→7 miss.

### F1268
first2 selected.

### F1517
second2 selected.

### F1544
purple previous trace visible before duplicate retrace.

### F1735
`DUPLICATE WORK` / identical traces.

### F1916
start10.

### F2094
start9.

### F2446
start-1.

### F2608
-1 run has reached 2.

### F2722
-1 run reaches4; current length6.

### F2832
best update begins.

### F2849
`BEST 6`.

### F2908
final start0.

### F3191
0-run miss on5.

### F3310
final best6.

### F3414
repeated-search residue replay.

### F3477
same original array / again.

### F3591
clean code-editor handoff.

---

# ✅ Acceptance Checklist

- [ ] Exactly **3592 frames**.
- [ ] Uses sync JSON word frames exactly.
- [ ] Original array fixed for entire trace.
- [ ] Every start processed in input order.
- [ ] Every Need/Found/Miss visible.
- [ ] Every valid sequence ribbon built one value at a time.
- [ ] Every missing next value shown as ghost node before failure.
- [ ] second `2` traced fully again.
- [ ] duplicate work gets explicit visual proof.
- [ ] search beams leave subtle residue.
- [ ] best updates to4 after first attempt and to6 only on `Best becomes 6`.
- [ ] -1 run shown completely.
- [ ] final0 run shown completely.
- [ ] no complexity notation yet.
- [ ] no code until handoff.
- [ ] search-residue finale clearly shows repeated scanning of same array.
- [ ] main hero array remains y≈315..455.
- [ ] captions safe zone clear.
- [ ] theme tokens only.
- [ ] no layout jitter.
- [ ] code scene starts from final editor shell, not a cut.

---

# Final Scene 03 Visual Story — One Line

**The raw unsorted array stays physically fixed while a gold START pointer advances through every input value; each narrated `Need X` morphs the target orb and launches a cyan chalk search-comet across the same array, each `Found` creates a ghost clone that Bezier-flies into a progressively drawn sequence ribbon, each miss creates a crossed ghost target and fractured connector, every length is recorded, the duplicate second `2` visibly retraces the exact purple ghost path of the first `2`, the `-1` start builds the six-node winning ribbon and rolls `BEST 4→6`, the final `0` run overlaps already-completed work, and at the end all faint search trails revive over the untouched raw array to make the inefficiency visually undeniable before the search line morphs into Scene 04’s code-editor baseline.**
