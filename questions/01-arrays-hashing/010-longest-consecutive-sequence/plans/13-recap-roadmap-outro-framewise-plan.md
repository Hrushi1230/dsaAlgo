# Scene 13 · RECAP + ROADMAP OUTRO — Full Frame-Wise Animation Plan

**Longest Consecutive Sequence · LC #128 · Type C**  
**Audio**: `13-recap.mp3` — **61.080 s** — **1832 frames** @ 30 fps  
**Goal**: Compress the full lesson into one memorable visual journey: brute repeated searching → sort-and-scan → HashSet + real-start rule, then lock the transferable heuristic `x - 1 exists?` into memory. After the conceptual recap, morph directly into the **permanent Master DSA Pattern Roadmap UI**, mark Question 10 complete, advance global progress to **10 / 227**, keep **Arrays & Hashing** active, and preview Question 11 as **UP NEXT** without inventing unsupported metadata.

---

## 🎯 Pedagogical Philosophy & Core Rules

1. **RECAP = MEMORY COMPRESSION, NOT RE-TEACHING**
   - Do not replay full traces.
   - Reuse one signature motion from each approach:
     - brute → repeated scan residue,
     - better → ordering lattice + one clean neighbor scan,
     - optimal → Chalk Hash Field + Predecessor Gate.
   - Each approach should be recognizable in under 2 seconds.

2. **NO STATIC “THREE CARDS” SLIDE**
   - The three approaches appear sequentially on the same center-stage canvas.
   - Previous approach compresses into a small historical motif before the next grows.
   - Only after all three are spoken may they align as a single journey strip.

3. **THE ONE RULE IS THE MEMORY ANCHOR**
   - `x - 1 exists?`
   - YES → SKIP
   - NO → START + WALK
   - Build this with the existing Predecessor Gate via SVG draw/morph, not a generic flowchart.

4. **EXACT AUDIO SYNC**
   - Every approach reveal, complexity formula, branch decision, roadmap completion, progress update, and Question 11 preview follows the supplied frame timestamps exactly.

5. **ROADMAP UI IS PERMANENTLY LOCKED**
   - Do not redesign it.
   - Use the exact Master Roadmap visual architecture already established:
     - dark green chalkboard
     - top-left `CODE WITH ANIMATION`
     - centered `DSA PATTERN ROADMAP`
     - top-right `227 PROBLEMS · 19 PATTERNS` + global progress
     - 19-pattern left sidebar
     - `PATTERN 01 Arrays & Hashing`
     - stacked problem rows
     - right progress rail `001 → 227`
   - Completed rows = `theme.good`
   - current/up-next row = `theme.pivot`
   - future rows = dim

6. **DO NOT INVENT QUESTION 11 METADATA**
   - The audio provides only “question number 11.”
   - If the course catalog already supplies the title / LC number / difficulty at implementation time, use that existing data.
   - Otherwise show only:
     `#011 · QUESTION 11 · UP NEXT`
   - Never guess the problem title.

---

## 🔒 @dsa/kit CONSISTENCY LOCK — NON-NEGOTIABLE

### Background
- `theme.boardBg` / locked green chalkboard `#18523d`
- existing board vignette only
- no new outro background
- no light mode
- no cinematic gradient

### Typography
- Patrick Hand for board headings and handwritten teaching labels
- SFMono / Consolas / Menlo for formulas, counts, LC metadata, and complexity

### Semantic tokens
Use only:
- `theme.chalkText`
- `theme.chalkDim`
- `theme.pivot`
- `theme.good`
- `theme.warn`
- `theme.highlight`
- `theme.cyan`
- `theme.purple`

### Existing components / primitives
Prefer:
- `ChalkText`
- `RoughLine`
- `RoughBox`
- `RoughCurve`
- `SvgMorph`
- `BezierFlight`
- `CountUp`
- `ChalkDust`
- `Captions`
- `ChannelLogoBadge`
- existing roadmap components/data if present

No new card system.

---

## ⏱ Audio Breakdown & Act-by-Act Flow

| Act | Frame Range | Spoken Beat | Visual Choreography |
|:---|:---|:---|:---|
| **Act 0** | **F0–F140** | “Longest Consecutive Sequence is done. Three approaches.” | Scene12 protection-gate geometry settles into a completion seal, then opens into an empty three-stop journey rail. |
| **Act 1** | **F160–F377** | Brute force + `O(n³)` | Repeated unsorted-list search paths accumulate; only when Big-O is spoken does `O(n³)` write and a tiny cubic curve draw. |
| **Act 2** | **F397–F542** | Better: sort once + scan neighbors + `O(n log n)` | Search residue morphs into ordering lattice; values straighten; one neighbor scan runs; formula and nlogn curve reveal only on narration. |
| **Act 3** | **F557–F701** | Optimal: HashSet + “one rule that matters most” | Sorted rail dissolves into unordered Chalk Hash Field; Hash Portal and candidate x form; Predecessor Gate becomes hero. |
| **Act 4** | **F716–F978** | `x−1 exists?` YES→SKIP / NO→START+WALK | Exact rule is built through SVG branch morphs, not pre-rendered. |
| **Act 5** | **F1000–F1403** | expected O(n), O(n) space + transferable heuristic | Time/space rails appear; then an unsorted-array prompt morphs into “FAST MEMBERSHIP → REAL START.” |
| **Act 6** | **F1436–F1535** | “Question 10. Complete.” | Recap geometry compresses into Master Roadmap UI; Question 10 row completes exactly on “Complete.” |
| **Act 7** | **F1535–F1831** | “10 out of 227… stay inside Arrays & Hashing… question 11.” | Global progress counts to 10/227; sidebar remains Arrays & Hashing; rail shifts 010→011; #011 becomes `UP NEXT`. |

---

# ACT 0 — LESSON COMPLETE → THREE-APPROACH JOURNEY SHELL
## F0–F140

### F0–F26 — “Alright,”
Start from Scene12 final state:
```text
START CHECK → ONE WALK PER REAL RUN
expected O(n)
```

- keep the three real-run ribbons visible for 8–10f
- then reduce them to ~35%
- top badge morphs:
  `COMPLEXITY`
  →
  `RECAP`

No new title yet.

### F26–F40 — pause
Use this pause:
- protection-gate outline begins closing around the final insight
- very small chalk dust settles
- no hard cut

### F40–F104 — “longest consecutive sequence is done.”
Word-synced title build:

#### F40–F49 — “longest”
write:
`LONGEST`

#### F49–F70 — “consecutive”
extend:
`LONGEST CONSECUTIVE`

#### F70–F84 — “sequence”
complete:
`LONGEST CONSECUTIVE SEQUENCE`

#### F84–F104 — “is done.”
- title compresses upward to hero-title area
- a restrained good check draws at right over 18–20f
- small subtitle:
  `QUESTION 10`

Do not show final roadmap yet.

### F104–F115 — 11f pause
- check holds
- center stage clears

### F115–F140 — “Three approaches.”
- draw one continuous rough journey rail with **three empty stops**
- no approach names yet

```text
○────────○────────○
```

- stop1 enters from left
- stop2 center
- stop3 right
- all neutral

### F140–F160 — 20f pause
Use pause to prepare first approach:
- first stop enlarges
- other two dim

---

# ACT 1 — BRUTE FORCE RECAP
## F160–F377

**Narration:**  
“Brute force, start from every number and repeatedly search the list. Worst case, O of n cubed.”

### F160–F178 — “Brute force,”
- first stop writes:
  `BRUTE`
- below it, mini unsorted array shell appears:
```text
[8][1][6][3][2]...
```
- do not need full master array

### F178–F189 — 11f pause
- one start marker appears under first array value

### F189–F238 — “start from every number and”
- 4–5 faint start markers appear under representative values one-by-one
- each marker is identical, showing every number may launch

No scan yet.

### F238–F289 — “repeatedly search the list.”
- from first start, draw one scanner path across array
- leave faint residue
- from second start, draw another scanner path over same array
- third search overlays again
- by F289, 3–4 historical scan trails are stacked

Label:
`REPEATED SEARCH`

This should instantly recall Scene03/05.

### F289–F310 — 21f pause
- trails remain
- small complexity socket appears blank:
  `WORST CASE  —`

### F310–F331 — “Worst case,”
- highlight residue density
- no formula yet

### F331–F346 — 15f pause
- scanner freezes
- formula socket waits

### F346–F377 — “O of n cubed.”
Only now:
- type:
  `O(n³)`
- start at F346 on “O”
- complete by F377

After formula completes:
- tiny right-side graph axes draw
- `RoughCurve` cubic line draws 12–16f
- do not pre-render it

### F377–F397 — 20f pause
Morph out:
- repeated scan trails pull inward
- all trail residue compresses into first journey stop
- first stop remains historical:
  `BRUTE · O(n³)`

Second stop enlarges.

---

# ACT 2 — BETTER / SORT + SCAN RECAP
## F397–F542

### F397–F409 — “Better,”
- center stop writes:
  `BETTER`
- brute stop dims to ~30%

### F409–F422 — 13f pause
- mini raw array reappears center stage
- faint ordering trajectories prepare

### F422–F473 — “sort once and scan neighbors.”
#### F422–F439 — “sort once”
- same small value tokens Bezier-cross into ordered positions
- no duplicate logic detail
- a faint sorting-lattice residue remains under row

#### F439–F473 — “and scan neighbors.”
- one pivot scan bead travels left→right once
- pair bracket briefly spans neighboring values
- sorted row remains straight

Label:
`ORDER ONCE → ONE SCAN`

### F473–F494 — 21f pause
- scan bead parks
- formula socket:
  `TIME —`

### F494–F542 — “O of n log n.”
- type `O(n log n)` exactly on speech
- after completion, second `RoughCurve` draws on tiny comparison graph
- cubic historical curve remains very faint
- nlogn curve becomes active

### F542–F557 — 15f pause
Morph:
- ordering lattice dissolves
- straight sorted rail loosens
- value nodes detach from numeric positions
- nodes begin drifting toward an unordered field
- second journey stop compresses:
  `BETTER · O(n log n)`

Third stop enlarges.

---

# ACT 3 — OPTIMAL HASHSET + MEMORY RULE SETUP
## F557–F701

### F557–F571 — “Optimal,”
- third stop writes:
  `OPTIMAL`
- first two stops dim further

### F571–F580 — short hold
- empty irregular chalk enclosure starts drawing

### F580–F607 — “use a hash set.”
- detached value tokens settle into the **Chalk Hash Field**
- irregular unordered pebble positions
- small Hash Portal appears
- label:
  `HASH SET · UNORDERED`

Do not show formula yet.

### F607–F635 — 28f pause
Use full pause:
- first two journey motifs shrink into small history icons
- optimal Hash Field moves to optical center
- one generic candidate `x` emerges from field
- no predecessor rule yet

### F635–F701 — “And remember the one rule that matters most.”
- Chalk Hash Field dims slightly
- candidate `x` grows to center-right
- empty predecessor socket appears one step left
- one curved SVG connector shell draws between them
- label writes incrementally:
  `ONE RULE`

At F680–F701 “matters most”
- all other recap material dims to ~20%
- Predecessor Gate becomes the only hero

### F701–F716 — 15f pause
Hold unresolved:
```text
[ ? ]  ←  [ x ]
```

No `x−1` yet.

---

# ACT 4 — THE RULE: x−1 EXISTS?
## F716–F978

This is the key memory anchor of the entire lesson.

---

## F716–F758 — “Does x minus 1 exist?”
### F716–F722 — “Does”
- query connector begins drawing from x toward predecessor socket

### F722–F731 — “x”
write `x`

### F731–F740 — “minus”
draw `−`

### F740–F745 — “1”
complete:
```text
x - 1
```

### F745–F758 — “exist?”
- socket label morphs to:
  `x - 1 ?`
- Hash Portal wakes behind/above
- one direct query pulse leaves the socket toward Hash Field

### F758–F775 — 17f pause
- pause on unresolved membership
- split answer has **not** appeared yet

---

# YES branch → not a start
## F775–F828
Narration:
“If yes, x is not a start.”

### F775–F791 — “If yes,”
- matching predecessor pebble in Hash Field pulses
- result returns:
  `YES`
- connector becomes solid cyan

State resolves first.

### F797–F828 — “x is not a start.”
- potential START stem beneath x starts growing
- at “not” F811, stop its growth
- stem bends sideways via `SvgMorph`
- by “start” F821–F828 it becomes:
  `SKIP` rail

Under x:
`NOT START`

No walk.

### F828–F851 — 23f pause
Hold:
```text
x−1 EXISTS
     ↓
   SKIP
```

---

## F851–F874 — “Skip it.”
- `SKIP` writes in stronger purple/chalkDim
- candidate x dims
- no runner is generated
- YES branch compresses upward into a small reusable motif

### F874 — immediately narration continues “If no,”
Reset gate cleanly.

---

# NO branch → start + walk
## F874–F978

### F874–F902 — “If no,”
- candidate x returns to neutral
- predecessor socket becomes hollow
- Hash Portal sends query
- no node pulses
- hollow echo returns:
  `NO`

### F902–F912 — 10f pause
- hollow socket holds

### F912–F939 — “start from x”
- query connector bends downward via `SvgMorph`
- becomes START pad beneath x
- x changes to good active state
- write:
  `START`

### F939–F978 — “and walk forward.”
- one short forward SVG rail draws:
```text
x → x+1 → x+2
```
- runner bead moves across only two symbolic steps
- no master trace
- label:
  `WALK`

### F978–F1000 — 22f pause
Both rule branches align briefly:

```text
x−1 EXISTS  → SKIP
x−1 ABSENT  → START → WALK
```

Not cards; use the two morphed path motifs.

---

# ACT 5 — COMPLEXITY + TRANSFERABLE HEURISTIC
## F1000–F1403

---

# Expected O(n) time / O(n) space
## F1000–F1139

### F1000–F1033 — “That gives us expected”
- branch motifs merge into one central optimal rail
- small Hash Field remains above
- two empty metric baselines appear:
```text
TIME
SPACE
```

### F1033–F1073 — “O of n time”
- reveal:
  `expected O(n)`
- formula begins exactly at F1033 on “O”
- after formula finishes, a short linear RoughCurve draws beside TIME

### F1073–F1139 — “with O of n extra space.”
- reveal SPACE separately
- at F1084 spoken “O”, type:
  `O(n)`
- Hash Field gets a rough brace:
  `up to n unique values`

Final:
```text
TIME   expected O(n)
SPACE  O(n)
```

### F1139–F1159 — 20f pause
- metrics compress to small lower-right memory tokens
- center clears for transferable pattern insight

---

# “When an unsorted array asks about consecutive values…”
## F1159–F1320

### F1159–F1200 — “So when an unsorted array”
- create 7 empty fixed value slots
- populate with symbolic unsorted values (not necessarily full testcase):
```text
8, 1, 6, 3, 2, 9, 4
```
- values can fade/write in sequentially over the phrase
- do not sort

Label:
`UNSORTED ARRAY`

### F1200–F1264 — “asks about consecutive values,”
- a few conceptual +1 relation arcs try to connect values
- because array is unsorted, arcs cross awkwardly
- then arcs retract
- one clean question bubble remains:
  `EXISTS?`

### F1264–F1284 — 20f pause
- unsorted array holds
- `EXISTS?` moves to center

### F1284–F1320 — “think fast membership.”
- unsorted array values detach from slots
- Bezier-fly into compact Chalk Hash Field
- Hash Portal emits one direct lookup pulse
- label writes:
  `FAST MEMBERSHIP`

No sorting animation.

### F1320–F1340 — 20f pause
- FAST MEMBERSHIP moves slightly upward
- predecessor socket forms below

---

# “Then find the real sequence start.”
## F1340–F1403

### F1340–F1361 — “Then find the”
- generic candidate `x` emerges
- predecessor socket left

### F1361–F1383 — “real sequence”
- draw `x - 1 ?`
- one direct membership pulse

### F1383–F1403 — “start.”
- absent result assumed symbolically only after query returns
- query connector morphs into START pad
- final heuristic locks as two-line memory rule:

```text
1. FAST MEMBERSHIP
2. FIND THE REAL START
```

Do not use numbered cards; use two chalk path lines.

### F1403–F1436 — 33f pause
This long pause is the bridge to roadmap.

Morph choreography:
1. `FAST MEMBERSHIP` path shortens into a horizontal roadmap divider
2. START pad straightens into a vertical progress-rail segment
3. Hash Field pebbles shrink into roadmap problem-row status dots
4. recap title fades
5. full Master Roadmap shell draws behind them

No hard cut.

---

# ACT 6 — QUESTION 10 COMPLETE
## F1436–F1535

Permanent Master Roadmap UI is now active.

## Roadmap state at entry
Before completion:
- #001–#009 = completed
- #010 Longest Consecutive Sequence = CURRENT / `NOW ACTIVE`
- global progress = `9 / 227 COMPLETE`
- Arrays & Hashing = active pattern
- right rail focus = `010`

Use the exact master layout already locked.

---

## F1436–F1482 — “Question number 10.”
### F1436–F1439 — “Question”
- roadmap row #010 gains pivot outline

### F1439–F1452 — “number”
- right rail `010` marker brightens

### F1452–F1482 — “10.”
- row text:
  `#010 · Longest Consecutive Sequence · LC 128 · Medium`
remains fully visible
- `NOW ACTIVE` badge still present
- do **not** mark complete yet

### F1482–F1488 — 6f hold
Current state freezes.

---

## F1488–F1503 — “Complete.”
This exact word triggers completion.

Sequence:
1. `NOW ACTIVE` label retracts
2. pivot ring around row #010 closes
3. over 15f, status circle draws a good/cyan check
4. row accent morphs pivot → completed cyan/teal
5. small:
   `COMPLETE`
   can appear for 10–12f then settle into standard completed-row state

No counter update yet; next narration owns that.

### F1503–F1535 — 32f pause
Use this pause:
- completed row #010 gently settles
- right progress rail marker 010 becomes completed
- top-right global progress remains `9 / 227` for most of pause
- prepare count transition but do not execute before “10”

---

# ACT 7 — ROADMAP 10 / 227 → QUESTION 11 UP NEXT
## F1535–F1831

---

# “Our roadmap is now 10 out of 227.”
## F1535–F1659

### F1535–F1579 — “Our roadmap is now”
- top-right progress module brightens
- current display:
  `9 / 227 COMPLETE`
- digit9 loosens / prepares morph

### F1579–F1598 — spoken “10”
- `CountUp` / digit morph:
  `9 → 10`
- exact change begins on F1579
- completes by F1598

Now:
```text
10 / 227 COMPLETE
```

### F1598–F1612 — “out of”
- global progress bar fills by one small increment
- no huge sweep

### F1612–F1659 — “227.”
- `227` denominator gets tiny chalk underline / settle
- right rail shows:
  `010` completed
- main #010 row still visible and completed

No pattern navigation yet.

---

# “We stay inside arrays and hashing…”
## F1659–F1769

### F1659–F1691 — “We stay”
- left pattern sidebar becomes slightly more prominent
- `PATTERN 01 · Arrays & Hashing` remains selected
- no movement to another pattern

### F1691–F1747 — “inside arrays and hashing”
- active sidebar row gets one subtle `RoughBox` redraw / good-pivot edge
- main heading remains:
  `PATTERN 01 Arrays & Hashing`
- all other patterns stay dim

This explicitly communicates continuity inside same pattern.

### F1747–F1769 — “and”
- #010 row shifts upward one row-space if necessary
- #011 future row below becomes more visible but still dim
- right rail begins preparing 010→011 move

---

# “continue to question number 11.”
## F1769–F1832

### F1769–F1785 — “continue”
- a thin pivot path draws from completed #010 status dot toward #011 row
- right progress rail marker glides:
  `010 → 011`

### F1785–F1794 — “to”
- #011 row reaches normal opacity

### F1794–F1807 — “question”
- #011 row gets pivot outline

### F1807–F1819 — “number”
- small badge begins:
  `UP NEXT`

### F1819–F1832 — “11.”
- #011 number brightens
- `UP NEXT` finishes
- do not mark #011 complete
- do not change global count beyond 10/227

If existing course catalog metadata is available:
```text
#011 · <existing title> · <existing LC metadata> · <existing difficulty>
```

If not:
```text
#011 · QUESTION 11
UP NEXT
```

Final frame must keep:
- `10 / 227 COMPLETE`
- Arrays & Hashing active
- #010 completed
- #011 pivot / UP NEXT
- right rail focused on011

No fade to black unless composition pipeline requires post-roll outside this scene.

---

## 📐 Layout Specifications — 1920×1080

### Recap phase F0–F1403
- **Top badge**: `y: 28..70`
- **Hero title**: `y: 95..190`
- **Main Hero Stage**: `y: 300..600`
- **Memory/complexity callout**: `y: 640..780`
- **Captions**: `y: 960..1040`

### Roadmap phase F1436–F1832
Use permanent locked roadmap layout.

#### Top bar
- left: `CODE WITH ANIMATION`
- center: `DSA PATTERN ROADMAP`
- right: `227 PROBLEMS · 19 PATTERNS`
- global progress directly beneath/right

#### Sidebar
- left x≈35..360
- all 19 patterns
- Arrays & Hashing active

#### Main problem list
- center x≈400..1650
- fixed row slots
- #010 and #011 must never shift during status morph

#### Right rail
- x≈1740..1835
- vertical progress rail
- `001 → 227`
- focus moves 010→011 only during F1769+

#### Captions
- bottom y≈960..1040
- roadmap rows must stay above safe zone

---

## 🎨 Color / State Semantics

### Recap
- brute → `theme.warn` / `theme.purple` residue
- better → `theme.cyan` / `theme.pivot`
- optimal → `theme.good`
- main memory rule → pivot/good
- formulas → chalkText mono

### Roadmap
- completed rows → `theme.good` / cyan-teal completion token
- #010 before F1488 → `theme.pivot`
- #010 after F1503 → completed state
- #011 UP NEXT → `theme.pivot`
- future rows → `theme.chalkDim`

No ad-hoc shades.

---

## 🧬 SVG Morph Chain

```text
START CHECK protection gate
        ↓
lesson-complete check
        ↓
three-stop journey rail

BRUTE
repeated search paths
        ↓ compress

BETTER
ordering lattice → neighbor scan
        ↓ compress

OPTIMAL
Chalk Hash Field
        ↓
Predecessor Gate

[x-1 ?] ← [x]
    ↓ YES
   SKIP

[x-1 ?] ← [x]
    ↓ NO
  START → WALK

        ↓
TIME expected O(n)
SPACE O(n)

        ↓
UNSORTED ARRAY
        ↓
FAST MEMBERSHIP
        ↓
REAL START

        ↓
recap lines straighten/morph into
Master Roadmap dividers + rail + row dots

        ↓
#010 NOW ACTIVE
        ↓ “Complete.”
#010 ✓ COMPLETE
        ↓
9/227 → 10/227
        ↓
010 rail focus → 011
        ↓
#011 UP NEXT
```

---

## ✨ Premium / Unique Moments — Exactly Five

### 1. Three-Approach Journey Rail
Each previous algorithm compresses into one historical stop rather than becoming a generic comparison card.

### 2. Repeated-Search Residue → Ordering Lattice → Hash Field
The same visual matter changes meaning across all three approaches, reinforcing the course’s “same problem, better structure” story.

### 3. One-Rule Predecessor Gate
`x−1 exists?` is physically drawn, and the same geometry branches through SVG morph into SKIP or START→WALK.

### 4. Heuristic → Roadmap Morph
`FAST MEMBERSHIP` line, START stem, and HashSet pebbles become the actual roadmap divider, right progress rail, and problem status dots.

### 5. Question 10 Completion → Question 11 Preview
The locked roadmap state changes live: current row10 → completed check → global 10/227 → rail011 → UP NEXT.

No additional hero effects.

---

## 🚫 Anti-Slop / Anti-Generic Rules

Do **not**:
1. show all three approaches as static cards at frame0
2. reveal all three complexities before narration
3. draw complexity curves before their spoken Big-O
4. replay complete trace sequences
5. rebuild full code
6. use a generic recap checklist
7. replace the Chalk Hash Field with a neat grid
8. show HashSet in sorted order
9. pre-show YES and NO branches simultaneously before narration
10. reveal START before the NO result
11. invent Question11 title / LC / difficulty
12. redesign the Master Roadmap UI
13. move away from Arrays & Hashing
14. increment global progress before spoken “10”
15. complete #010 before spoken “Complete”
16. mark #011 complete
17. change progress beyond `10 / 227`
18. use new background/colors
19. cover caption safe zone
20. hard-cut from recap to roadmap

---

## ✅ Critical Review Frames

### F0
Scene12 continuity / RECAP transition.

### F40
problem title begins.

### F94
“done” completion-check animation.

### F115
three-approach journey rail appears.

### F160
BRUTE reveal.

### F189
multi-start brute markers.

### F238
repeated search paths begin.

### F289
scan residue fully visible.

### F346
O(n³) reveal.

### F397
BETTER reveal.

### F422
sorting motion starts.

### F451
one scan begins.

### F494
O(n log n) reveal.

### F557
OPTIMAL reveal.

### F590
Hash Field construction.

### F635
“one rule” setup.

### F716
Predecessor Gate query begins.

### F740
`x - 1` completed.

### F775
YES branch.

### F811
NOT blocks START.

### F851
SKIP emphasis.

### F874
NO branch reset.

### F912
START pad begins.

### F955
forward walk begins.

### F1000
time/space recap begins.

### F1033
expected O(n) time reveal.

### F1084
O(n) space reveal.

### F1159
unsorted-array heuristic stage.

### F1284
FAST MEMBERSHIP reveal.

### F1340
real-start stage.

### F1383
START heuristic settles.

### F1403
roadmap morph begins.

### F1436
Master Roadmap fully visible.

### F1452
Question10 row focus.

### F1488
“Complete” triggers completion.

### F1503
#010 fully completed.

### F1535
progress module active.

### F1579
9→10 progress count begins.

### F1598
10/227 complete.

### F1659
Arrays & Hashing continuity emphasis.

### F1769
rail move toward011 begins.

### F1794
#011 focus.

### F1819
Question11 final UP NEXT state.

### F1831
final frame locked.

---

## ✅ Acceptance Checklist

- [ ] exactly **1832 frames**
- [ ] exact supplied sync timestamps used
- [ ] `@dsa/kit` consistency followed
- [ ] Scene12 continuity preserved
- [ ] no generic recap cards
- [ ] brute motif appears only on brute narration
- [ ] repeated search residue shown
- [ ] brute `O(n³)` only at F346+
- [ ] better sorting/scan shown
- [ ] `O(n log n)` only at F494+
- [ ] optimal Chalk Hash Field remains unordered
- [ ] `x−1` rule built only after narration reaches it
- [ ] YES resolves before SKIP morph
- [ ] NO resolves before START morph
- [ ] forward walk appears only after START
- [ ] expected time `O(n)` and space `O(n)` separated
- [ ] transferable heuristic shown as FAST MEMBERSHIP → REAL START
- [ ] no full code replay
- [ ] recap geometry morphs into roadmap instead of hard cut
- [ ] permanent Master Roadmap layout unchanged
- [ ] #010 remains NOW ACTIVE until spoken “Complete”
- [ ] #010 completed exactly at F1488–F1503
- [ ] global count remains9 until spoken “10”
- [ ] progress morphs9→10 at F1579–F1598
- [ ] final progress = **10 / 227**
- [ ] Arrays & Hashing remains active
- [ ] #011 becomes UP NEXT only near final narration
- [ ] no unsupported Question11 metadata invented
- [ ] right rail moves 010→011
- [ ] #011 not marked complete
- [ ] caption zone clear
- [ ] no layout jitter

---

# Final Scene 13 Visual Story — One Line

**Scene12’s protection gate settles into a restrained completion check and opens into a three-stop chalk journey rail where brute force rebuilds only its repeated-search residue before `O(n³)` is spoken, that residue morphs into the better approach’s one-time ordering lattice and single neighbor scan before `O(n log n)` appears, and the ordered rail then dissolves into the optimal unordered Chalk Hash Field; all historical motifs dim while the single transferable rule constructs from scratch as `[x−1 ?] ← [x]`, a YES membership result bends x’s potential launch stem into SKIP, a NO result bends the same connector into START and a short forward runner, after which expected `O(n)` time and `O(n)` space lock beside the heuristic `UNSORTED CONSECUTIVE VALUES → FAST MEMBERSHIP → FIND THE REAL START`; those exact SVG lines then straighten and shrink into the permanent Master DSA Pattern Roadmap architecture, Question10 remains `NOW ACTIVE` through “Question number 10” and changes to the completed teal check only on the spoken word “Complete,” the global progress digit then counts from `9 / 227` to `10 / 227` exactly on the spoken `10`, Arrays & Hashing stays highlighted in the sidebar, and the progress rail finally glides from 010 to 011 while Question11 becomes the pivot-colored `UP NEXT` row — ending the lesson with 10/227 complete and the next question ready without redesigning the locked roadmap or inventing unsupported metadata.**
