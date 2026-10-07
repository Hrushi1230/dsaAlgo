# Q13 — Set Matrix Zeroes (LC 73)
# Phase 9 · Scene 11 — Method 3 Optimal Code
## WORD-BASED VISUAL PLAN — SEMANTIC FRAME PLAN WITHOUT GUESSED TIME

**Scene purpose:** Construct the constant-space solution line-by-line and prove each code block against the verified matrix semantics, with the four-step ordering itself treated as part of correctness.

---

# 0. ABSOLUTE SOURCE PRIORITY

Use, in order:

1. this approved word-based plan;
2. verified Q13 narration;
3. locked Q13 Phase-5 teaching truth;
4. previous scene's actual approved final state;
5. project `SKILL.md` / Word-Driven Motion Skill;
6. actual Foundation V2 / `@dsa/kit` implementation;
7. final scene MP3;
8. final exact word-sync JSON.

If a source does not support a visual/state/component assumption:

```text
UNRESOLVED — SOURCE REQUIRED
```

---

# 1. CONTINUITY IN

Scene11 inherits the verified optimal order from Scene10.

```text
flags preserve boundary history
interior zeros write boundary markers
interior reads boundary markers
boundary finalizes last
```

No code is pre-rendered.

---

# 2. EXACT NARRATION SOURCE

```text
Now let’s write the optimal solution carefully.

First...

store the number of rows in `m`...

and the number of columns in `n`.

Create two booleans.

`firstRowZero` starts as false.

`firstColZero` starts as false.

Before we use the boundary as marker memory...

save its original state.

Scan the first row.

If any cell is zero...

set `firstRowZero` to true.

Then scan the first column.

If any cell is zero...

set `firstColZero` to true.

Now the boundary history is protected.

Next, scan only the interior.

Start rows from one...

and columns from one.

Whenever `matrix[r][c]` is zero...

write zero into `matrix[r][0]`.

That marks the row.

Then write zero into `matrix[0][c]`.

That marks the column.

After this pass...

the first row and first column are our marker arrays.

Now apply the markers.

Again, scan only the interior.

For each cell...

if `matrix[r][0]` is zero...

or `matrix[0][c]` is zero...

set `matrix[r][c]` to zero.

At this point...

the interior is final.

Only the boundary remains.

If `firstRowZero` is true...

zero every cell in row zero.

And if `firstColZero` is true...

zero every cell in column zero.

That is the complete optimal solution.

Notice the order.

Save boundary history...

mark the interior...

apply those markers...

then finalize the boundary.

If we change that order carelessly...

we can destroy our own marker information.
```

The plan may visualize only what the narration has reached.

---

# 3. LOCKED SCENE TRUTH

Verified teaching code:

```python
def setZeroes(matrix):
    m = len(matrix)
    n = len(matrix[0])

    firstRowZero = False
    firstColZero = False

    for c in range(n):
        if matrix[0][c] == 0:
            firstRowZero = True

    for r in range(m):
        if matrix[r][0] == 0:
            firstColZero = True

    for r in range(1, m):
        for c in range(1, n):
            if matrix[r][c] == 0:
                matrix[r][0] = 0
                matrix[0][c] = 0

    for r in range(1, m):
        for c in range(1, n):
            if matrix[r][0] == 0 or matrix[0][c] == 0:
                matrix[r][c] = 0

    if firstRowZero:
        for c in range(n):
            matrix[0][c] = 0

    if firstColZero:
        for r in range(m):
            matrix[r][0] = 0
```

---

# 4. GLOBAL WORD-DRIVEN VISUAL LAW

```text
WORD / PHRASE IS SPOKEN
→ relevant visual enters
→ one primary teaching object owns center stage
→ cause/effect is shown
→ hold only if audio provides space
→ old teaching object exits/reduces
→ next idea takes center stage
```

Every motion must teach state, show cause→effect, direct attention, or preserve semantic continuity.

Default visual budget:

```text
1 PRIMARY HERO
+ 1 DIRECT SUPPORT OBJECT
+ captions
```

No packed dashboard. No decorative motion. No future-state spoilers.

---

# 5. FOUNDATION V2 / KIT-ONLY LOCK

Reuse the production course code component.

```text
spoken code idea
→ active line types character-by-character
→ line completes
→ semantic effect proves that line
→ old line dims/reduces if no longer needed
→ next line appears only when spoken
```

Future lines remain hidden. No generic black IDE. Exact editor API is `UNRESOLVED — REPO SOURCE REQUIRED`.

Every matrix representation uses one continuous 2-D coordinate system driven by approved kit primitives.

```text
RoughBox  → fixed cells
ChalkText → values / row / column labels
theme.pivot → active source/current cell
theme.cyan  → queried/support relation
theme.warn  → wrong state plus a second cue
theme.good  → confirmed result only when spoken
RoughLine / existing path primitive → temporary semantic relation only
Captions → exact sync later
```

Permanent law:

```text
CELL GEOMETRY STAYS FIXED.
VALUES CHANGE IN THEIR OWN CELLS.
ROW/COLUMN LABELS DO NOT MOVE.
```

If a reusable matrix row/column region primitive is absent, extend/create it at kit level; never fake it with scene-local generic cards or raw SVG rectangles.

---

# 6. SCENE-SPECIFIC RULES

- Active code line types only when narration reaches its idea.
- Future loops/branches remain hidden.
- Semantic matrix effect occurs only after the relevant line completes.
- `range(1,...)` must be visually explained as excluding boundary marker storage.
- Do not permanently split code/matrix 50/50; code owns center during typing, matrix owns center during line meaning.
- Wrong-order demo is conceptual and temporary; never rewrite the actual source code into an incorrect sequence.
- Existing production editor API remains `UNRESOLVED — REPO SOURCE REQUIRED`.

---

# 7. SEMANTIC ANCHOR MANIFEST — NO TIME / NO FRAMES

| Anchor ID | Exact narration phrase | Center-stage purpose |
|---|---|---|
| `S11_OPEN` | `Now let’s write the optimal solution carefully.` | Empty optimal-code focus. |
| `S11_M` | `store the number of rows in m` | `m = len(matrix)`. |
| `S11_N` | `and the number of columns in n.` | `n = len(matrix[0])`. |
| `S11_TWO` | `Create two booleans.` | Two flag declarations concept. |
| `S11_FRFALSE` | `firstRowZero starts as false.` | `firstRowZero = False`. |
| `S11_FCFALSE` | `firstColZero starts as false.` | `firstColZero = False`. |
| `S11_BEFORE` | `Before we use the boundary as marker memory save its original state.` | Boundary-save invariant. |
| `S11_SCANROW` | `Scan the first row.` | First-row loop. |
| `S11_IFROW` | `If any cell is zero` | Condition `if matrix[0][c] == 0:`. |
| `S11_SETFR` | `set firstRowZero to true.` | `firstRowZero = True`. |
| `S11_SCANCOL` | `Then scan the first column.` | First-column loop. |
| `S11_IFCOL` | `If any cell is zero` | Condition `if matrix[r][0] == 0:`. |
| `S11_SETFC` | `set firstColZero to true.` | `firstColZero = True`. |
| `S11_PROTECTED` | `Now the boundary history is protected.` | Saved-boundary code block. |
| `S11_NEXT` | `Next scan only the interior.` | Interior loop shell. |
| `S11_ROWS1` | `Start rows from one` | Outer loop start index. |
| `S11_COLS1` | `and columns from one.` | Inner loop `for c in range(1, n):`. |
| `S11_WHENZERO` | `Whenever matrix[r][c] is zero` | Condition `if matrix[r][c] == 0:`. |
| `S11_WRITEROW` | `write zero into matrix[r][0].` | Assignment `matrix[r][0] = 0`. |
| `S11_MARKSROW` | `That marks the row.` | Meaning of row assignment. |
| `S11_WRITECOL` | `Then write zero into matrix[0][c].` | Assignment `matrix[0][c] = 0`. |
| `S11_MARKSCOL` | `That marks the column.` | Meaning of column assignment. |
| `S11_AFTERPASS` | `After this pass the first row and first column are our marker arrays.` | Completed discovery code block. |
| `S11_APPLY` | `Now apply the markers.` | Application-pass transition. |
| `S11_AGAIN` | `Again scan only the interior.` | Application nested loops. |
| `S11_FOREACH` | `For each cell` | Current application cell. |
| `S11_ROWCOND` | `if matrix[r][0] is zero` | First half of OR condition. |
| `S11_ORCOL` | `or matrix[0][c] is zero` | Complete OR condition. |
| `S11_SETCELL` | `set matrix[r][c] to zero.` | Assignment `matrix[r][c] = 0`. |
| `S11_INTERIORFINAL` | `At this point the interior is final.` | Completed application block. |
| `S11_BOUNDONLY` | `Only the boundary remains.` | Boundary-only pending state. |
| `S11_IFFR` | `If firstRowZero is true` | Branch `if firstRowZero:`. |
| `S11_ZEROROW` | `zero every cell in row zero.` | Loop + assignment for row0. |
| `S11_IFFC` | `And if firstColZero is true` | Branch `if firstColZero:`. |
| `S11_ZEROCOL` | `zero every cell in column zero.` | Loop + assignment for col0. |
| `S11_COMPLETE` | `That is the complete optimal solution.` | Completed optimal code. |
| `S11_ORDER` | `Notice the order.` | Four logical code blocks. |
| `S11_SAVE` | `Save boundary history` | Boundary-save block. |
| `S11_MARK` | `mark the interior` | Marker-discovery block. |
| `S11_APPLYORD` | `apply those markers` | Interior application block. |
| `S11_FINALORD` | `then finalize the boundary.` | Boundary finalization blocks. |
| `S11_CARELESS` | `If we change that order carelessly` | Order dependence warning. |
| `S11_DESTROY` | `we can destroy our own marker information.` | Marker-loss consequence. |

No seconds or frame numbers belong here before final MP3 + exact sync JSON exist.

---

# 8. WORD-BASED CHOREOGRAPHY

## BEAT 01 — `S11_OPEN`

### ANCHOR / SPOKEN PHRASE
`Now let’s write the optimal solution carefully.`

### WHAT APPEARS NOW
Bring production code focus to center; previous trace matrix recedes completely.

### CENTER-STAGE HERO
Empty optimal-code focus.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
Cursor appears on empty active line.

### WHAT MUST NOT APPEAR YET
No code line before spoken.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Keep code focus.

### PERSISTENT STATE
Empty active line.

### KIT / EXISTING SYSTEM
Production code component

### MOTION PURPOSE
Trace→code handoff.
## BEAT 02 — `S11_M`

### ANCHOR / SPOKEN PHRASE
`store the number of rows in m`

### WHAT APPEARS NOW
Type only the m line.

### CENTER-STAGE HERO
`m = len(matrix)`.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
Character typing; after completion line holds.

### WHAT MUST NOT APPEAR YET
No n line yet.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Dim line after completion.

### PERSISTENT STATE
m defined.

### KIT / EXISTING SYSTEM
Production code component

### MOTION PURPOSE
Construct code.
## BEAT 03 — `S11_N`

### ANCHOR / SPOKEN PHRASE
`and the number of columns in n.`

### WHAT APPEARS NOW
Type n line.

### CENTER-STAGE HERO
`n = len(matrix[0])`.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
Character typing.

### WHAT MUST NOT APPEAR YET
No flags yet.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Dim line after completion.

### PERSISTENT STATE
m,n context.

### KIT / EXISTING SYSTEM
Production code component

### MOTION PURPOSE
Construct code.
## BEAT 04 — `S11_TWO`

### ANCHOR / SPOKEN PHRASE
`Create two booleans.`

### WHAT APPEARS NOW
Prepare next two active lines; do not render their names before spoken.

### CENTER-STAGE HERO
Two flag declarations concept.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
No state effect yet.

### WHAT MUST NOT APPEAR YET
No literal flag line early.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Keep code focus.

### PERSISTENT STATE
Two flags about to be declared.

### KIT / EXISTING SYSTEM
Production code component

### MOTION PURPOSE
Set up state.
## BEAT 05 — `S11_FRFALSE`

### ANCHOR / SPOKEN PHRASE
`firstRowZero starts as false.`

### WHAT APPEARS NOW
Type line; after completion show tiny semantic flag false beside code.

### CENTER-STAGE HERO
`firstRowZero = False`.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
Line→state fact.

### WHAT MUST NOT APPEAR YET
firstColZero hidden.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Support recedes; line dims.

### PERSISTENT STATE
firstRowZero=false.

### KIT / EXISTING SYSTEM
Production code + ChalkText

### MOTION PURPOSE
Construct + prove.
## BEAT 06 — `S11_FCFALSE`

### ANCHOR / SPOKEN PHRASE
`firstColZero starts as false.`

### WHAT APPEARS NOW
Type line; show second semantic false fact.

### CENTER-STAGE HERO
`firstColZero = False`.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
Line→state fact.

### WHAT MUST NOT APPEAR YET
No boundary scan yet.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Support recedes.

### PERSISTENT STATE
both flags false.

### KIT / EXISTING SYSTEM
Production code + ChalkText

### MOTION PURPOSE
Construct + prove.
## BEAT 07 — `S11_BEFORE`

### ANCHOR / SPOKEN PHRASE
`Before we use the boundary as marker memory save its original state.`

### WHAT APPEARS NOW
Code reduces to flags; master matrix returns briefly with row0/col0 highlighted as data, not markers.

### CENTER-STAGE HERO
Boundary-save invariant.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
Narration explains why scans come before reuse.

### WHAT MUST NOT APPEAR YET
No loops yet.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Return code focus.

### PERSISTENT STATE
Boundary history must be saved first.

### KIT / EXISTING SYSTEM
Production code + Matrix/Grid

### MOTION PURPOSE
Teach order.
## BEAT 08 — `S11_SCANROW`

### ANCHOR / SPOKEN PHRASE
`Scan the first row.`

### WHAT APPEARS NOW
Type `for c in range(n):` then current row0 scan context; future if hidden.

### CENTER-STAGE HERO
First-row loop.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
Loop line types; matrix row0 appears only after completion.

### WHAT MUST NOT APPEAR YET
No flag assignment yet.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Keep loop context.

### PERSISTENT STATE
row0 scan active.

### KIT / EXISTING SYSTEM
Production code + Matrix/Grid

### MOTION PURPOSE
Construct traversal.
## BEAT 09 — `S11_IFROW`

### ANCHOR / SPOKEN PHRASE
`If any cell is zero`

### WHAT APPEARS NOW
Type condition; semantic proof focuses row0 current cell.

### CENTER-STAGE HERO
Condition `if matrix[0][c] == 0:`.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
Condition line completes.

### WHAT MUST NOT APPEAR YET
No assignment before next phrase.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Keep branch active.

### PERSISTENT STATE
row0 zero test.

### KIT / EXISTING SYSTEM
Production code + Matrix/Grid

### MOTION PURPOSE
Construct branch.
## BEAT 10 — `S11_SETFR`

### ANCHOR / SPOKEN PHRASE
`set firstRowZero to true.`

### WHAT APPEARS NOW
Type assignment; after completion show flag false→true on master support using known (0,2).

### CENTER-STAGE HERO
`firstRowZero = True`.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
Code→flag effect.

### WHAT MUST NOT APPEAR YET
Do not write boundary markers.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Semantic support recedes.

### PERSISTENT STATE
firstRowZero update logic complete.

### KIT / EXISTING SYSTEM
Production code + Matrix/Grid + ChalkText

### MOTION PURPOSE
Construct + prove.
## BEAT 11 — `S11_SCANCOL`

### ANCHOR / SPOKEN PHRASE
`Then scan the first column.`

### WHAT APPEARS NOW
Type `for r in range(m):`; show col0 scan support.

### CENTER-STAGE HERO
First-column loop.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
Loop line types.

### WHAT MUST NOT APPEAR YET
No condition early.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Keep loop context.

### PERSISTENT STATE
col0 scan active.

### KIT / EXISTING SYSTEM
Production code + Matrix/Grid

### MOTION PURPOSE
Construct traversal.
## BEAT 12 — `S11_IFCOL`

### ANCHOR / SPOKEN PHRASE
`If any cell is zero`

### WHAT APPEARS NOW
Type condition; focus current col0 query.

### CENTER-STAGE HERO
Condition `if matrix[r][0] == 0:`.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
Condition line completes.

### WHAT MUST NOT APPEAR YET
No assignment before next phrase.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Keep branch.

### PERSISTENT STATE
col0 zero test.

### KIT / EXISTING SYSTEM
Production code + Matrix/Grid

### MOTION PURPOSE
Construct branch.
## BEAT 13 — `S11_SETFC`

### ANCHOR / SPOKEN PHRASE
`set firstColZero to true.`

### WHAT APPEARS NOW
Type assignment; semantic flag false→true using known (2,0).

### CENTER-STAGE HERO
`firstColZero = True`.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
Code→flag effect.

### WHAT MUST NOT APPEAR YET
No boundary marker writes.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Support recedes.

### PERSISTENT STATE
firstColZero update logic complete.

### KIT / EXISTING SYSTEM
Production code + Matrix/Grid + ChalkText

### MOTION PURPOSE
Construct + prove.
## BEAT 14 — `S11_PROTECTED`

### ANCHOR / SPOKEN PHRASE
`Now the boundary history is protected.`

### WHAT APPEARS NOW
Promote flag initialization + two boundary scans as one logical block; no new line.

### CENTER-STAGE HERO
Saved-boundary code block.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
Correct ordering becomes visible.

### WHAT MUST NOT APPEAR YET
No interior loop yet.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Dim block after hold.

### PERSISTENT STATE
Boundary history block complete.

### KIT / EXISTING SYSTEM
Production code component

### MOTION PURPOSE
Close phase.
## BEAT 15 — `S11_NEXT`

### ANCHOR / SPOKEN PHRASE
`Next scan only the interior.`

### WHAT APPEARS NOW
Type outer loop `for r in range(1, m):`.

### CENTER-STAGE HERO
Interior loop shell.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
Start at1 is visually important.

### WHAT MUST NOT APPEAR YET
No inner loop before spoken.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Keep outer line.

### PERSISTENT STATE
r starts at1.

### KIT / EXISTING SYSTEM
Production code component

### MOTION PURPOSE
Construct traversal.
## BEAT 16 — `S11_ROWS1`

### ANCHOR / SPOKEN PHRASE
`Start rows from one`

### WHAT APPEARS NOW
Briefly focus `1` token in outer loop and matrix boundary separation.

### CENTER-STAGE HERO
Outer loop start index.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
Shows row0 excluded.

### WHAT MUST NOT APPEAR YET
Do not type inner loop early.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Return to active line.

### PERSISTENT STATE
row0 excluded from scan.

### KIT / EXISTING SYSTEM
Production code + Matrix/Grid

### MOTION PURPOSE
Teach scope.
## BEAT 17 — `S11_COLS1`

### ANCHOR / SPOKEN PHRASE
`and columns from one.`

### WHAT APPEARS NOW
Type inner loop; focus `1` token and matrix col0 exclusion.

### CENTER-STAGE HERO
Inner loop `for c in range(1, n):`.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
Interior domain encoded.

### WHAT MUST NOT APPEAR YET
No zero condition yet.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Keep loop context.

### PERSISTENT STATE
interior-only traversal.

### KIT / EXISTING SYSTEM
Production code + Matrix/Grid

### MOTION PURPOSE
Construct traversal.
## BEAT 18 — `S11_WHENZERO`

### ANCHOR / SPOKEN PHRASE
`Whenever matrix[r][c] is zero`

### WHAT APPEARS NOW
Type zero condition; semantic support focuses generic/current interior zero.

### CENTER-STAGE HERO
Condition `if matrix[r][c] == 0:`.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
Condition line completes.

### WHAT MUST NOT APPEAR YET
No marker writes early.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Keep source condition.

### PERSISTENT STATE
Interior zero branch ready.

### KIT / EXISTING SYSTEM
Production code + Matrix/Grid

### MOTION PURPOSE
Construct branch.
## BEAT 19 — `S11_WRITEROW`

### ANCHOR / SPOKEN PHRASE
`write zero into matrix[r][0].`

### WHAT APPEARS NOW
Type assignment; after completion show horizontal semantic relation to first-column marker cell and value write.

### CENTER-STAGE HERO
Assignment `matrix[r][0] = 0`.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
One marker write only.

### WHAT MUST NOT APPEAR YET
Column marker assignment hidden.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Clear support; keep line dim.

### PERSISTENT STATE
row marker code complete.

### KIT / EXISTING SYSTEM
Production code + Matrix/Grid + RoughLine

### MOTION PURPOSE
Construct + prove.
## BEAT 20 — `S11_MARKSROW`

### ANCHOR / SPOKEN PHRASE
`That marks the row.`

### WHAT APPEARS NOW
No typing; promote result boundary cell and brief `ROW MARKER` meaning.

### CENTER-STAGE HERO
Meaning of row assignment.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
Assignment semantics explained.

### WHAT MUST NOT APPEAR YET
No column assignment yet.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Clear cue.

### PERSISTENT STATE
row marker meaning known.

### KIT / EXISTING SYSTEM
Matrix/Grid + ChalkText

### MOTION PURPOSE
Teach code meaning.
## BEAT 21 — `S11_WRITECOL`

### ANCHOR / SPOKEN PHRASE
`Then write zero into matrix[0][c].`

### WHAT APPEARS NOW
Type assignment; show vertical semantic relation to first-row marker cell.

### CENTER-STAGE HERO
Assignment `matrix[0][c] = 0`.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
Second marker write.

### WHAT MUST NOT APPEAR YET
No apply pass early.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Clear support.

### PERSISTENT STATE
column marker code complete.

### KIT / EXISTING SYSTEM
Production code + Matrix/Grid + RoughLine

### MOTION PURPOSE
Construct + prove.
## BEAT 22 — `S11_MARKSCOL`

### ANCHOR / SPOKEN PHRASE
`That marks the column.`

### WHAT APPEARS NOW
Promote top marker cell and brief `COLUMN MARKER` meaning.

### CENTER-STAGE HERO
Meaning of column assignment.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
Assignment semantics explained.

### WHAT MUST NOT APPEAR YET
No application loop yet.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Clear cue.

### PERSISTENT STATE
both marker write meanings known.

### KIT / EXISTING SYSTEM
Matrix/Grid + ChalkText

### MOTION PURPOSE
Teach code meaning.
## BEAT 23 — `S11_AFTERPASS`

### ANCHOR / SPOKEN PHRASE
`After this pass the first row and first column are our marker arrays.`

### WHAT APPEARS NOW
Dim interior source body; matrix support shows row0/col0 as marker memory.

### CENTER-STAGE HERO
Completed discovery code block.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
Narration summarizes pass effect.

### WHAT MUST NOT APPEAR YET
No external arrays.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Return code center.

### PERSISTENT STATE
Boundary marker memory produced.

### KIT / EXISTING SYSTEM
Production code + Matrix/Grid

### MOTION PURPOSE
Close discovery phase.
## BEAT 24 — `S11_APPLY`

### ANCHOR / SPOKEN PHRASE
`Now apply the markers.`

### WHAT APPEARS NOW
Discovery block dims; prepare new interior loops.

### CENTER-STAGE HERO
Application-pass transition.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
Phase changes from recording to mutation.

### WHAT MUST NOT APPEAR YET
No loop line before next phrase.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Keep code focus.

### PERSISTENT STATE
Application pass active.

### KIT / EXISTING SYSTEM
Production code component

### MOTION PURPOSE
Semantic handoff.
## BEAT 25 — `S11_AGAIN`

### ANCHOR / SPOKEN PHRASE
`Again scan only the interior.`

### WHAT APPEARS NOW
Type the same `for r in range(1,m)` and `for c in range(1,n)` lines for second pass.

### CENTER-STAGE HERO
Application nested loops.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
Interior-only scope repeated.

### WHAT MUST NOT APPEAR YET
No condition early.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Keep loop context.

### PERSISTENT STATE
Application traversal.

### KIT / EXISTING SYSTEM
Production code component

### MOTION PURPOSE
Construct traversal.
## BEAT 26 — `S11_FOREACH`

### ANCHOR / SPOKEN PHRASE
`For each cell`

### WHAT APPEARS NOW
Matrix support focuses one interior cell after loop shell completes.

### CENTER-STAGE HERO
Current application cell.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
Prepare gate condition.

### WHAT MUST NOT APPEAR YET
No boundary marker reads before spoken.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Keep cell support.

### PERSISTENT STATE
Current cell selected.

### KIT / EXISTING SYSTEM
Production code + Matrix/Grid

### MOTION PURPOSE
Direct attention.
## BEAT 27 — `S11_ROWCOND`

### ANCHOR / SPOKEN PHRASE
`if matrix[r][0] is zero`

### WHAT APPEARS NOW
Begin typing `if matrix[r][0] == 0`; semantic support points to left marker.

### CENTER-STAGE HERO
First half of OR condition.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
Row gate becomes visible.

### WHAT MUST NOT APPEAR YET
Column half hidden.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Keep partial condition.

### PERSISTENT STATE
row condition known.

### KIT / EXISTING SYSTEM
Production code + Matrix/Grid

### MOTION PURPOSE
Construct condition.
## BEAT 28 — `S11_ORCOL`

### ANCHOR / SPOKEN PHRASE
`or matrix[0][c] is zero`

### WHAT APPEARS NOW
Type `or matrix[0][c] == 0:`; support adds top marker.

### CENTER-STAGE HERO
Complete OR condition.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
Full gate condition completes.

### WHAT MUST NOT APPEAR YET
No assignment yet.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Keep condition active.

### PERSISTENT STATE
OR boundary condition known.

### KIT / EXISTING SYSTEM
Production code + Matrix/Grid

### MOTION PURPOSE
Construct condition.
## BEAT 29 — `S11_SETCELL`

### ANCHOR / SPOKEN PHRASE
`set matrix[r][c] to zero.`

### WHAT APPEARS NOW
Type assignment; after completion mutate one representative interior cell as semantic proof.

### CENTER-STAGE HERO
Assignment `matrix[r][c] = 0`.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
Condition→cell effect.

### WHAT MUST NOT APPEAR YET
No boundary finalization yet.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Support recedes.

### PERSISTENT STATE
Interior application body complete.

### KIT / EXISTING SYSTEM
Production code + Matrix/Grid

### MOTION PURPOSE
Construct + prove.
## BEAT 30 — `S11_INTERIORFINAL`

### ANCHOR / SPOKEN PHRASE
`At this point the interior is final.`

### WHAT APPEARS NOW
Promote the application code block; matrix support shows interior settled while boundary remains marker state.

### CENTER-STAGE HERO
Completed application block.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
No new code.

### WHAT MUST NOT APPEAR YET
Do not zero first row/col yet.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Return code center.

### PERSISTENT STATE
Interior done.

### KIT / EXISTING SYSTEM
Production code + Matrix/Grid

### MOTION PURPOSE
Close phase.
## BEAT 31 — `S11_BOUNDONLY`

### ANCHOR / SPOKEN PHRASE
`Only the boundary remains.`

### WHAT APPEARS NOW
Matrix support dims interior and emphasizes row0/col0 as unfinished.

### CENTER-STAGE HERO
Boundary-only pending state.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
Narration isolates remaining work.

### WHAT MUST NOT APPEAR YET
No flag branch yet.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Keep pending boundary.

### PERSISTENT STATE
Boundary pending.

### KIT / EXISTING SYSTEM
Matrix/Grid

### MOTION PURPOSE
Direct attention.
## BEAT 32 — `S11_IFFR`

### ANCHOR / SPOKEN PHRASE
`If firstRowZero is true`

### WHAT APPEARS NOW
Type branch line only.

### CENTER-STAGE HERO
Branch `if firstRowZero:`.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
Flag controls first-row finalization.

### WHAT MUST NOT APPEAR YET
No row loop before next phrase.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Keep branch active.

### PERSISTENT STATE
row0 finalization branch ready.

### KIT / EXISTING SYSTEM
Production code component

### MOTION PURPOSE
Construct branch.
## BEAT 33 — `S11_ZEROROW`

### ANCHOR / SPOKEN PHRASE
`zero every cell in row zero.`

### WHAT APPEARS NOW
Type `for c in range(n):` and `matrix[0][c] = 0`; after completion show row0 semantic zeroing.

### CENTER-STAGE HERO
Loop + assignment for row0.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
Code→row0 effect.

### WHAT MUST NOT APPEAR YET
No firstCol branch early.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Support recedes.

### PERSISTENT STATE
row0 finalization code complete.

### KIT / EXISTING SYSTEM
Production code + Matrix/Grid

### MOTION PURPOSE
Construct + prove.
## BEAT 34 — `S11_IFFC`

### ANCHOR / SPOKEN PHRASE
`And if firstColZero is true`

### WHAT APPEARS NOW
Type second flag branch.

### CENTER-STAGE HERO
Branch `if firstColZero:`.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
Flag controls col0 finalization.

### WHAT MUST NOT APPEAR YET
No loop early.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Keep branch active.

### PERSISTENT STATE
col0 finalization branch ready.

### KIT / EXISTING SYSTEM
Production code component

### MOTION PURPOSE
Construct branch.
## BEAT 35 — `S11_ZEROCOL`

### ANCHOR / SPOKEN PHRASE
`zero every cell in column zero.`

### WHAT APPEARS NOW
Type `for r in range(m):` and `matrix[r][0] = 0`; show col0 semantic zeroing.

### CENTER-STAGE HERO
Loop + assignment for col0.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
Code→col0 effect.

### WHAT MUST NOT APPEAR YET
No extra code.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Support recedes.

### PERSISTENT STATE
optimal code complete.

### KIT / EXISTING SYSTEM
Production code + Matrix/Grid

### MOTION PURPOSE
Construct + prove.
## BEAT 36 — `S11_COMPLETE`

### ANCHOR / SPOKEN PHRASE
`That is the complete optimal solution.`

### WHAT APPEARS NOW
Allow relevant code to settle; cursor stops.

### CENTER-STAGE HERO
Completed optimal code.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
No new line.

### WHAT MUST NOT APPEAR YET
No complexity graph.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Prepare order recap.

### PERSISTENT STATE
Optimal code complete.

### KIT / EXISTING SYSTEM
Production code component

### MOTION PURPOSE
Comprehension hold.
## BEAT 37 — `S11_ORDER`

### ANCHOR / SPOKEN PHRASE
`Notice the order.`

### WHAT APPEARS NOW
Collapse code into semantic block focus sequence; do not move lines into cards.

### CENTER-STAGE HERO
Four logical code blocks.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
Narration asks learner to attend to ordering.

### WHAT MUST NOT APPEAR YET
No order labels before spoken list.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Keep code context.

### PERSISTENT STATE
Order recap ready.

### KIT / EXISTING SYSTEM
Production code component

### MOTION PURPOSE
Direct attention.
## BEAT 38 — `S11_SAVE`

### ANCHOR / SPOKEN PHRASE
`Save boundary history`

### WHAT APPEARS NOW
Promote flag scans only.

### CENTER-STAGE HERO
Boundary-save block.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
First step highlighted.

### WHAT MUST NOT APPEAR YET
Later steps dim/hidden from active focus.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Keep as dim previous step.

### PERSISTENT STATE
Step1.

### KIT / EXISTING SYSTEM
Production code component

### MOTION PURPOSE
Summarize order.
## BEAT 39 — `S11_MARK`

### ANCHOR / SPOKEN PHRASE
`mark the interior`

### WHAT APPEARS NOW
Focus interior zero→boundary marker code.

### CENTER-STAGE HERO
Marker-discovery block.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
Second step highlighted.

### WHAT MUST NOT APPEAR YET
Application block not active.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Keep previous dim.

### PERSISTENT STATE
Step2.

### KIT / EXISTING SYSTEM
Production code component

### MOTION PURPOSE
Summarize order.
## BEAT 40 — `S11_APPLYORD`

### ANCHOR / SPOKEN PHRASE
`apply those markers`

### WHAT APPEARS NOW
Focus boundary-gate→cell assignment code.

### CENTER-STAGE HERO
Interior application block.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
Third step highlighted.

### WHAT MUST NOT APPEAR YET
Finalization not active.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Keep previous dim.

### PERSISTENT STATE
Step3.

### KIT / EXISTING SYSTEM
Production code component

### MOTION PURPOSE
Summarize order.
## BEAT 41 — `S11_FINALORD`

### ANCHOR / SPOKEN PHRASE
`then finalize the boundary.`

### WHAT APPEARS NOW
Focus firstRowZero/firstColZero branches.

### CENTER-STAGE HERO
Boundary finalization blocks.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
Fourth step highlighted.

### WHAT MUST NOT APPEAR YET
No new concept.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Let order settle.

### PERSISTENT STATE
Four-step order locked.

### KIT / EXISTING SYSTEM
Production code component

### MOTION PURPOSE
Summarize order.
## BEAT 42 — `S11_CARELESS`

### ANCHOR / SPOKEN PHRASE
`If we change that order carelessly`

### WHAT APPEARS NOW
Keep four-step code sequence; add warn focus to a conceptual swapped-order cue without actually rearranging source code.

### CENTER-STAGE HERO
Order dependence warning.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
Narration introduces danger.

### WHAT MUST NOT APPEAR YET
Do not mutate real code order.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Keep warning through next phrase.

### PERSISTENT STATE
Order must remain fixed.

### KIT / EXISTING SYSTEM
Production code + ChalkText

### MOTION PURPOSE
Set up mistake.
## BEAT 43 — `S11_DESTROY`

### ANCHOR / SPOKEN PHRASE
`we can destroy our own marker information.`

### WHAT APPEARS NOW
Use matrix support to show an early boundary zeroing conceptually wiping marker distinctions; warn cue, then immediately reset.

### CENTER-STAGE HERO
Marker-loss consequence.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
Wrong order→lost marker information.

### WHAT MUST NOT APPEAR YET
Do not modify approved code.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Erase wrong demo; return settled optimal code.

### PERSISTENT STATE
Correct order remains.

### KIT / EXISTING SYSTEM
Production code + Matrix/Grid

### MOTION PURPOSE
Teach why order matters.


---

# 9. CONTINUITY OUT

Scene12 receives:

```text
METHOD1 = full copy
METHOD2 = external row/column markers
METHOD3 = boundary marker reuse + 2 booleans
OPTIMAL ORDER VERIFIED
```

Code can fully recede before complexity/mistakes begin.

---

# 10. PHASE-12 CONVERSION CONTRACT

```text
PHASE-9 ANCHOR
+ FINAL WORD SYNC
→ WORD IDS
→ EXACT SECONDS
→ EXACT [startFrame,endFrameExclusive)
→ SAME VISUAL LOGIC
```

Phase 12 resolves **when**, not **what**.

---

# ANTIGRAVITY POST-AUDIO CONVERSION — REQUIRED FOR THIS SCENE

After the final MP3 + exact word-sync JSON are supplied, Antigravity must convert **this exact Phase-9 plan** to frames using:

`ANTIGRAVITY_POST_AUDIO_WORDSYNC_TO_FRAMES.md`

For every `ANCHOR ID` in this scene:

```text
exact anchor phrase
→ unique contiguous word IDs from final sync
→ first word exact start
→ last word exact end
→ startFrame = floor(start × 30)
→ endFrameExclusive = ceil(end × 30)
```

Then generate:

```text
SceneXX_FRAME_PLAN.md
```

using `[startFrame,endFrameExclusive)`.

Rules for this scene:

```text
DO NOT redesign this Phase-9 choreography.
DO NOT invent seconds or frame offsets.
DO NOT add a hold unless the audio has a real gap.
DO NOT reveal a future state before its exact spoken word.
DO NOT implement until unmatched anchors = 0.
```

If the actual audio wording differs materially from the approved narration:

```text
BLOCKED — AUDIO / SCRIPT MISMATCH
```

If a required kit/component API is missing:

```text
BLOCKED — SOURCE REQUIRED
```

Only after the exact frame plan passes audit may Antigravity implement, typecheck, render, visually QA, repair, and move to the next scene automatically.
