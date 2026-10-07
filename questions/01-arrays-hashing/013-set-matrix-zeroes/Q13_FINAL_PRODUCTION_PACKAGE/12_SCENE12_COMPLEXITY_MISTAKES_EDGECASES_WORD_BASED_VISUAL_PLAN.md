# Q13 — Set Matrix Zeroes (LC 73)
# Phase 9 · Scene 12 — Complexity + Common Mistakes + Edge Cases
## WORD-BASED VISUAL PLAN — SEMANTIC FRAME PLAN WITHOUT GUESSED TIME

**Scene purpose:** Explain the actual cost of all three methods from their work/storage structures, then teach the major correctness traps and representative edge cases one at a time without turning the scene into a dashboard.

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

Scene12 inherits a fully verified optimal implementation.

Code and full trace recede before complexity begins.

---

# 2. EXACT NARRATION SOURCE

```text
Now compare the three methods.

Method One keeps a complete copy of the matrix.

That needs `O(m times n)` extra space.

For the exact version we wrote...

suppose there are `z` original zeros.

We scan the matrix once...

and for each of those `z` zeros...

we may walk through one complete row and one complete column.

So the time is:

`O of m times n... plus... z times open bracket m plus n close bracket`.

And in the worst case...

`z` itself can be `m times n`.

So the worst-case time becomes:

`O of m times n times open bracket m plus n close bracket`.

Method Two is much better.

We scan the matrix to build row and column markers...

then scan it again to apply them.

That gives us:

`O(m times n)` time...

and `O(m plus n)` extra space.

The optimal method keeps the same asymptotic time.

We scan the first row...

the first column...

the interior for marker discovery...

the interior again to apply those markers...

and finally the boundaries.

These are sequential passes.

The dominant work is still proportional to the number of cells.

So the time is:

`O(m times n)`.

And apart from loop indices...

we only keep two booleans.

So the extra space is:

`O(1)`.

There are a few mistakes that matter here.

The first one is the most dangerous.

Do not zero rows and columns immediately while you are still discovering original zeros.

A zero created by you must not become a new source.

Second...

save the original first-row and first-column state before using them as markers.

Otherwise you cannot tell whether a boundary zero was original...

or written later as marker information.

Third...

do not try to use `matrix[0][0]` as both independent flags.

The first row and the first column are two different facts.

Fourth...

do not finalize the first row or first column too early.

They are still storing marker information for the interior.

And avoid magic sentinel values.

Valid matrix values can already occupy the allowed integer range...

so we should not assume that some arbitrary sentinel value is guaranteed to be unused.

Now a few edge cases.

If there is no zero...

nothing changes.

If every cell is zero...

the matrix stays all zero.

For a single row...

the same boundary logic still works.

For a single column...

it still works.

For one single cell...

zero stays zero...

and a non-zero value stays unchanged.

A zero at the top-left corner is also handled correctly...

because we saved first-row and first-column state independently.

And multiple interior zeros simply write more row and column markers.

The same invariant continues to work.
```

The plan may visualize only what the narration has reached.

---

# 3. LOCKED SCENE TRUTH

Locked complexity for the exact teaching implementations:

```text
Method1:
Space = O(mn)
Time  = O(mn + z(m+n))
Worst = O(mn(m+n))

Method2:
Time  = O(mn)
Space = O(m+n)

Method3:
Time  = O(mn)
Space = O(1)
```

For graphing Method2/3 time, use a horizontal axis labeled `number of matrix cells` and a mathematical linear curve labeled `O(mn)`. Do not introduce a new visible symbol such as `N` because the narration never names one. Graphs are growth illustrations only.

Locked mistakes:
1 immediate zeroing during discovery;
2 failing to save boundary history;
3 using matrix[0][0] for two independent facts;
4 finalizing first row/col too early;
5 unsafe magic sentinel.

Representative edge cases follow the verified script.

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

All marker arrays use the existing Array V2 grammar:

```text
ArrayTrackV2
ArraySlotV2
ArrayValueV2
ArrayIndexRowV2
```

```text
SLOTS STAY FIXED.
VALUES / BOOLEAN STATE CHANGE IN PLACE.
INDICES NEVER MOVE.
```

Actual orientation/API must be read from the repository before implementation. Do not invent props.

Complexity graph rule:
- Prefer a reusable kit-level complexity-curve primitive.
- The supplied `MiniGraph` is sort-oriented and should not be repurposed blindly.
- If current graph API cannot express `N=m×n` linear and O(1) cleanly, EXTEND/CREATE a reusable kit-level primitive.
- Never use measured/fictional benchmark points.

---

# 6. SCENE-SPECIFIC RULES

- Complexity must be derived visually from work, not shown as static badges.
- Method1 exact formula is built algebraically from scan + z(row+column); do not fake a one-variable curve for it.
- Method2/3 time may use O(N) curve only after defining N=m×n cells.
- O(1) must be tied to two booleans.
- Mistakes appear one at a time and fully clean up before the next.
- Edge cases replace each other; do not form a grid of mini-cards.
- All mini matrices still use Matrix/Grid grammar, not generic boxes.

---

# 7. SEMANTIC ANCHOR MANIFEST — NO TIME / NO FRAMES

| Anchor ID | Exact narration phrase | Center-stage purpose |
|---|---|---|
| `S12_COMPARE` | `Now compare the three methods.` | Three-method progression scaffold. |
| `S12_M1COPY` | `Method One keeps a complete copy of the matrix.` | Method1 full-copy memory. |
| `S12_M1SPACE` | `That needs O(m times n) extra space.` | O(mn) memory area. |
| `S12_EXACT` | `For the exact version we wrote` | Method1 teaching implementation. |
| `S12_Z` | `suppose there are z original zeros.` | z source-zero count. |
| `S12_SCANONCE` | `We scan the matrix once.` | One full matrix pass. |
| `S12_PERZ` | `and for each of those z zeros` | Repeated per-source work. |
| `S12_ROWCOL` | `we may walk through one complete row and one complete column.` | m+n work per zero. |
| `S12_TIMEFORM` | `So the time is O of m times n plus z times open bracket m plus n close bracket.` | O(mn + z(m+n)). |
| `S12_WORSTZ` | `And in the worst case z itself can be m times n.` | z = mn worst case. |
| `S12_M1WORST` | `So the worst-case time becomes O of m times n times open bracket m plus n close bracket.` | O(mn(m+n)). |
| `S12_M2` | `Method Two is much better.` | Method2 marker arrays. |
| `S12_M2PASSES` | `We scan the matrix to build row and column markers then scan it again to apply them.` | Two full matrix passes. |
| `S12_M2TIME` | `That gives us O(m times n) time.` | O(mn) growth versus number of matrix cells. |
| `S12_M2SPACE` | `and O(m plus n) extra space.` | rowZero + colZero lengths. |
| `S12_OPT` | `The optimal method keeps the same asymptotic time.` | Method3 one-matrix storage. |
| `S12_SCANFR` | `We scan the first row` | First-row pass. |
| `S12_SCANFC` | `the first column` | First-column pass. |
| `S12_DISC` | `the interior for marker discovery` | Interior discovery pass. |
| `S12_APPLY` | `the interior again to apply those markers` | Second interior pass. |
| `S12_FINALBOUND` | `and finally the boundaries.` | Boundary finalization. |
| `S12_SEQ` | `These are sequential passes.` | Sequential sum of work. |
| `S12_DOM` | `The dominant work is still proportional to the number of cells.` | N=m×n dominates. |
| `S12_OPTTIME` | `So the time is O(m times n).` | Optimal time O(N)=O(mn). |
| `S12_TWOBOOL` | `And apart from loop indices we only keep two booleans.` | firstRowZero + firstColZero. |
| `S12_O1` | `So the extra space is O(1).` | Constant-space graph. |
| `S12_MIST` | `There are a few mistakes that matter here.` | Mistake mode. |
| `S12_M1DANGER` | `The first one is the most dangerous.` | Danger cue only. |
| `S12_IMMEDIATE` | `Do not zero rows and columns immediately while you are still discovering original zeros.` | Immediate-zeroing wrong model. |
| `S12_NEWSOURCE` | `A zero created by you must not become a new source.` | Created vs original distinction. |
| `S12_SECOND` | `Second save the original first-row and first-column state before using them as markers.` | Boundary-history ordering. |
| `S12_OTHERWISE` | `Otherwise you cannot tell whether a boundary zero was original or written later as marker information.` | Boundary ambiguity. |
| `S12_THIRD` | `Third do not try to use matrix[0][0] as both independent flags.` | Corner shared cell. |
| `S12_TWOFACT` | `The first row and the first column are two different facts.` | Two independent facts. |
| `S12_FOURTH` | `Fourth do not finalize the first row or first column too early.` | Boundary marker memory. |
| `S12_STORING` | `They are still storing marker information for the interior.` | Marker dependency. |
| `S12_SENTINEL` | `And avoid magic sentinel values.` | Sentinel idea. |
| `S12_RANGE` | `Valid matrix values can already occupy the allowed integer range` | Allowed-value conflict. |
| `S12_NOASSUME` | `so we should not assume that some arbitrary sentinel value is guaranteed to be unused.` | Reject sentinel. |
| `S12_EDGE` | `Now a few edge cases.` | Edge-case mode. |
| `S12_NOZERO` | `If there is no zero nothing changes.` | No-zero small matrix. |
| `S12_ALLZERO` | `If every cell is zero the matrix stays all zero.` | All-zero small matrix. |
| `S12_SINGLE_ROW` | `For a single row the same boundary logic still works.` | 1×n matrix. |
| `S12_SINGLE_COL` | `For a single column it still works.` | m×1 matrix. |
| `S12_ONECELL` | `For one single cell` | 1×1 matrix. |
| `S12_ONEZERO` | `zero stays zero` | 1×1 zero. |
| `S12_ONENON` | `and a non-zero value stays unchanged.` | 1×1 nonzero. |
| `S12_TOPLEFT` | `A zero at the top-left corner is also handled correctly` | Top-left zero. |
| `S12_INDEP` | `because we saved first-row and first-column state independently.` | Two saved flags. |
| `S12_MULTI` | `And multiple interior zeros simply write more row and column markers.` | Multiple interior sources. |
| `S12_SAMEINV` | `The same invariant continues to work.` | Core invariant. |

No seconds or frame numbers belong here before final MP3 + exact sync JSON exist.

---

# 8. WORD-BASED CHOREOGRAPHY

## BEAT 01 — `S12_COMPARE`

### ANCHOR / SPOKEN PHRASE
`Now compare the three methods.`

### WHAT APPEARS NOW
Bring one simple vertical/linear method progression scaffold: Method1 → Method2 → Method3, but show no complexity values yet.

### CENTER-STAGE HERO
Three-method progression scaffold.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
Only method identities appear.

### WHAT MUST NOT APPEAR YET
Do not render all costs early.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Keep scaffold quiet; promote one method at a time.

### PERSISTENT STATE
Three methods known.

### KIT / EXISTING SYSTEM
ChalkText

### MOTION PURPOSE
Set comparison context.
## BEAT 02 — `S12_M1COPY`

### ANCHOR / SPOKEN PHRASE
`Method One keeps a complete copy of the matrix.`

### WHAT APPEARS NOW
Promote Method1; show matrix + full duplicate as the only hero.

### CENTER-STAGE HERO
Method1 full-copy memory.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
Cell-for-cell duplication expresses memory cost.

### WHAT MUST NOT APPEAR YET
No Big-O until spoken.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Keep duplicate through space phrase.

### PERSISTENT STATE
Full copy required.

### KIT / EXISTING SYSTEM
Matrix/Grid

### MOTION PURPOSE
Recall Method1 cost source.
## BEAT 03 — `S12_M1SPACE`

### ANCHOR / SPOKEN PHRASE
`That needs O(m times n) extra space.`

### WHAT APPEARS NOW
Visually map the duplicate matrix area to `m × n` stored cells; then write `O(mn)` beside the duplicate. Do not introduce an unspoken `N` symbol.

### CENTER-STAGE HERO
O(mn) memory area.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
Space formula comes from copied cell count.

### WHAT MUST NOT APPEAR YET
No time formula yet.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Reduce duplicate to a compact memory-area representation.

### PERSISTENT STATE
Method1 space O(mn).

### KIT / EXISTING SYSTEM
Matrix/Grid + ChalkText

### MOTION PURPOSE
Explain, not badge.
## BEAT 04 — `S12_EXACT`

### ANCHOR / SPOKEN PHRASE
`For the exact version we wrote`

### WHAT APPEARS NOW
Bring minimal Method1 code skeleton or semantic scan+zero-row/col structure, not full editor.

### CENTER-STAGE HERO
Method1 teaching implementation.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
Narration scopes analysis to this implementation.

### WHAT MUST NOT APPEAR YET
No z formula before next phrase.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Keep structure.

### PERSISTENT STATE
Analyzing baseline implementation.

### KIT / EXISTING SYSTEM
Production code component / semantic code excerpt

### MOTION PURPOSE
Set complexity scope.
## BEAT 05 — `S12_Z`

### ANCHOR / SPOKEN PHRASE
`suppose there are z original zeros.`

### WHAT APPEARS NOW
Show master-like matrix abstracted to `z` original source zeros; do not invent a numeric z.

### CENTER-STAGE HERO
z source-zero count.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
z becomes symbolic parameter.

### WHAT MUST NOT APPEAR YET
No total time expression yet.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Keep z + matrix.

### PERSISTENT STATE
z original zero sources.

### KIT / EXISTING SYSTEM
Matrix/Grid + ChalkText

### MOTION PURPOSE
Introduce parameter.
## BEAT 06 — `S12_SCANONCE`

### ANCHOR / SPOKEN PHRASE
`We scan the matrix once.`

### WHAT APPEARS NOW
Draw a deterministic scan path/coverage across all N=m×n cells, then settle to `mn work`.

### CENTER-STAGE HERO
One full matrix pass.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
One pass cost visualized as cell coverage.

### WHAT MUST NOT APPEAR YET
No per-zero work yet.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Reduce scan to formula term `mn`.

### PERSISTENT STATE
Base work = mn.

### KIT / EXISTING SYSTEM
Matrix/Grid + existing path primitive

### MOTION PURPOSE
Explain term.
## BEAT 07 — `S12_PERZ`

### ANCHOR / SPOKEN PHRASE
`and for each of those z zeros`

### WHAT APPEARS NOW
Promote one symbolic source zero with repetition count `× z`.

### CENTER-STAGE HERO
Repeated per-source work.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
Narration introduces repeated extra work.

### WHAT MUST NOT APPEAR YET
No row/column length term before spoken.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Keep source repetition.

### PERSISTENT STATE
Per-zero work repeated z times.

### KIT / EXISTING SYSTEM
ChalkText + Matrix/Grid

### MOTION PURPOSE
Explain multiplier.
## BEAT 08 — `S12_ROWCOL`

### ANCHOR / SPOKEN PHRASE
`we may walk through one complete row and one complete column.`

### WHAT APPEARS NOW
From one source zero show row sweep length n and column sweep length m, sequentially; write `(m+n)` only after both are established.

### CENTER-STAGE HERO
m+n work per zero.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
Per-zero work decomposes into row+column.

### WHAT MUST NOT APPEAR YET
No total expression early.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Keep compact `(m+n)` term.

### PERSISTENT STATE
Per-zero cost = m+n.

### KIT / EXISTING SYSTEM
Matrix/Grid + ChalkText

### MOTION PURPOSE
Explain term.
## BEAT 09 — `S12_TIMEFORM`

### ANCHOR / SPOKEN PHRASE
`So the time is O of m times n plus z times open bracket m plus n close bracket.`

### WHAT APPEARS NOW
Assemble terms already taught: `mn + z(m+n)`; no generic curve because two independent dimensions and z are involved.

### CENTER-STAGE HERO
O(mn + z(m+n)).

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
Formula is built from visual work terms, not a static badge.

### WHAT MUST NOT APPEAR YET
No worst-case substitution yet.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Keep expression.

### PERSISTENT STATE
Exact Method1 time formula.

### KIT / EXISTING SYSTEM
ChalkText

### MOTION PURPOSE
Derive expression.
## BEAT 10 — `S12_WORSTZ`

### ANCHOR / SPOKEN PHRASE
`And in the worst case z itself can be m times n.`

### WHAT APPEARS NOW
Show every matrix cell as a possible original zero source conceptually; substitute `z → mn` in the expression.

### CENTER-STAGE HERO
z = mn worst case.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
Narration authorizes worst-case substitution.

### WHAT MUST NOT APPEAR YET
No simplified formula before next phrase.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Keep substituted expression.

### PERSISTENT STATE
Worst-case z=mn.

### KIT / EXISTING SYSTEM
Matrix/Grid + ChalkText

### MOTION PURPOSE
Derive worst case.
## BEAT 11 — `S12_M1WORST`

### ANCHOR / SPOKEN PHRASE
`So the worst-case time becomes O of m times n times open bracket m plus n close bracket.`

### WHAT APPEARS NOW
Algebraically simplify the displayed expression; no empirical graph/data.

### CENTER-STAGE HERO
O(mn(m+n)).

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
Worst-case formula follows substitution.

### WHAT MUST NOT APPEAR YET
No Method2 values yet.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Reduce Method1 analysis.

### PERSISTENT STATE
Method1 worst time O(mn(m+n)).

### KIT / EXISTING SYSTEM
ChalkText

### MOTION PURPOSE
Complete Method1 complexity.
## BEAT 12 — `S12_M2`

### ANCHOR / SPOKEN PHRASE
`Method Two is much better.`

### WHAT APPEARS NOW
Method1 recedes; Method2 matrix + rowZero/colZero becomes hero.

### CENTER-STAGE HERO
Method2 marker arrays.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
Comparison shifts.

### WHAT MUST NOT APPEAR YET
No cost values before spoken.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Keep Method2 structures.

### PERSISTENT STATE
Method2 active.

### KIT / EXISTING SYSTEM
Matrix/Grid + Array V2

### MOTION PURPOSE
Transition comparison.
## BEAT 13 — `S12_M2PASSES`

### ANCHOR / SPOKEN PHRASE
`We scan the matrix to build row and column markers then scan it again to apply them.`

### WHAT APPEARS NOW
Show Pass1 coverage over N cells, settle; then Pass2 coverage over N cells, settle. One at a time.

### CENTER-STAGE HERO
Two full matrix passes.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
Two sequential full passes.

### WHAT MUST NOT APPEAR YET
No O(mn) label until next phrase.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Compress to `one full matrix pass + one full matrix pass`; do not introduce a new visible variable.

### PERSISTENT STATE
Method2 work = 2N.

### KIT / EXISTING SYSTEM
Matrix/Grid + existing path primitive

### MOTION PURPOSE
Explain time.
## BEAT 14 — `S12_M2TIME`

### ANCHOR / SPOKEN PHRASE
`That gives us O(m times n) time.`

### WHAT APPEARS NOW
Use/extend a reusable complexity graph whose horizontal axis is `number of matrix cells`; draw a mathematical linear curve left-to-right labeled `O(mn)`. Do not show an unspoken `N` variable.

### CENTER-STAGE HERO
O(mn) growth versus number of matrix cells.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
Constant number of full passes → linear in cell count.

### WHAT MUST NOT APPEAR YET
Do not show Method3 curve yet.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Graph settles then reduces.

### PERSISTENT STATE
Method2 time O(mn).

### KIT / EXISTING SYSTEM
Reusable complexity-curve primitive; existing MiniGraph API is not generic enough if it cannot express N=mn cleanly, so EXTEND kit-level primitive rather than scene-local chart.

### MOTION PURPOSE
Visualize asymptotic growth.
## BEAT 15 — `S12_M2SPACE`

### ANCHOR / SPOKEN PHRASE
`and O(m plus n) extra space.`

### WHAT APPEARS NOW
Promote marker arrays and label their lengths m and n; assemble `m+n`.

### CENTER-STAGE HERO
rowZero + colZero lengths.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
External markers determine extra memory.

### WHAT MUST NOT APPEAR YET
No Method3 space yet.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Reduce arrays after explanation.

### PERSISTENT STATE
Method2 space O(m+n).

### KIT / EXISTING SYSTEM
Array V2 + ChalkText

### MOTION PURPOSE
Explain memory.
## BEAT 16 — `S12_OPT`

### ANCHOR / SPOKEN PHRASE
`The optimal method keeps the same asymptotic time.`

### WHAT APPEARS NOW
Method2 recedes; one matrix + two booleans becomes hero.

### CENTER-STAGE HERO
Method3 one-matrix storage.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
Comparison shifts to optimal.

### WHAT MUST NOT APPEAR YET
No O(mn) label before work is explained.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Keep storage model.

### PERSISTENT STATE
Method3 active.

### KIT / EXISTING SYSTEM
Matrix/Grid + ChalkText

### MOTION PURPOSE
Transition comparison.
## BEAT 17 — `S12_SCANFR`

### ANCHOR / SPOKEN PHRASE
`We scan the first row`

### WHAT APPEARS NOW
Highlight row0 sweep only.

### CENTER-STAGE HERO
First-row pass.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
One sequential boundary pass.

### WHAT MUST NOT APPEAR YET
No first-column pass early.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Reduce row sweep to term n.

### PERSISTENT STATE
Work term n.

### KIT / EXISTING SYSTEM
Matrix/Grid

### MOTION PURPOSE
Explain work.
## BEAT 18 — `S12_SCANFC`

### ANCHOR / SPOKEN PHRASE
`the first column`

### WHAT APPEARS NOW
Highlight col0 sweep.

### CENTER-STAGE HERO
First-column pass.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
Second boundary pass.

### WHAT MUST NOT APPEAR YET
No interior pass early.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Reduce to term m.

### PERSISTENT STATE
Work terms n+m.

### KIT / EXISTING SYSTEM
Matrix/Grid

### MOTION PURPOSE
Explain work.
## BEAT 19 — `S12_DISC`

### ANCHOR / SPOKEN PHRASE
`the interior for marker discovery`

### WHAT APPEARS NOW
Highlight interior coverage once.

### CENTER-STAGE HERO
Interior discovery pass.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
One O(mn)-scale pass.

### WHAT MUST NOT APPEAR YET
No second interior pass early.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Reduce to interior term.

### PERSISTENT STATE
Discovery work known.

### KIT / EXISTING SYSTEM
Matrix/Grid

### MOTION PURPOSE
Explain work.
## BEAT 20 — `S12_APPLY`

### ANCHOR / SPOKEN PHRASE
`the interior again to apply those markers`

### WHAT APPEARS NOW
Highlight interior coverage a second time after first settles.

### CENTER-STAGE HERO
Second interior pass.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
Second sequential interior pass.

### WHAT MUST NOT APPEAR YET
No boundary finalization early.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Reduce coverage.

### PERSISTENT STATE
Two interior passes known.

### KIT / EXISTING SYSTEM
Matrix/Grid

### MOTION PURPOSE
Explain work.
## BEAT 21 — `S12_FINALBOUND`

### ANCHOR / SPOKEN PHRASE
`and finally the boundaries.`

### WHAT APPEARS NOW
Brief row0 then col0 finalization coverage.

### CENTER-STAGE HERO
Boundary finalization.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
Remaining work is lower-order boundary length.

### WHAT MUST NOT APPEAR YET
No complexity formula before next phrases.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Reduce work map.

### PERSISTENT STATE
All sequential passes known.

### KIT / EXISTING SYSTEM
Matrix/Grid

### MOTION PURPOSE
Complete work decomposition.
## BEAT 22 — `S12_SEQ`

### ANCHOR / SPOKEN PHRASE
`These are sequential passes.`

### WHAT APPEARS NOW
Assemble visual terms in order, not stacked simultaneous dashboard: n + m + interior + interior + n + m.

### CENTER-STAGE HERO
Sequential sum of work.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
Narration emphasizes addition, not multiplication of passes.

### WHAT MUST NOT APPEAR YET
No result formula yet.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Simplify toward dominant term.

### PERSISTENT STATE
Sequential work sum.

### KIT / EXISTING SYSTEM
ChalkText

### MOTION PURPOSE
Teach asymptotic reasoning.
## BEAT 23 — `S12_DOM`

### ANCHOR / SPOKEN PHRASE
`The dominant work is still proportional to the number of cells.`

### WHAT APPEARS NOW
Reduce boundary terms; keep two N-scale interior/full-cell passes conceptually and define `N = m×n`.

### CENTER-STAGE HERO
N=m×n dominates.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
Dominant term becomes linear in cell count.

### WHAT MUST NOT APPEAR YET
No graph until O phrase if desired.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Prepare curve.

### PERSISTENT STATE
Dominant O(N).

### KIT / EXISTING SYSTEM
ChalkText

### MOTION PURPOSE
Derive complexity.
## BEAT 24 — `S12_OPTTIME`

### ANCHOR / SPOKEN PHRASE
`So the time is O(m times n).`

### WHAT APPEARS NOW
Draw the same reusable linear O(N) curve left-to-right; annotate `N=m×n cells` and `O(N)=O(mn)`.

### CENTER-STAGE HERO
Optimal time O(N)=O(mn).

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
Narration states asymptotic result.

### WHAT MUST NOT APPEAR YET
No space result before next phrase.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Graph settles then exits.

### PERSISTENT STATE
Optimal time O(mn).

### KIT / EXISTING SYSTEM
Reusable complexity-curve primitive

### MOTION PURPOSE
Visualize growth.
## BEAT 25 — `S12_TWOBOOL`

### ANCHOR / SPOKEN PHRASE
`And apart from loop indices we only keep two booleans.`

### WHAT APPEARS NOW
Matrix recedes slightly; exactly two compact boolean facts become hero.

### CENTER-STAGE HERO
firstRowZero + firstColZero.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
Extra state count is constant.

### WHAT MUST NOT APPEAR YET
No O(1) label before next phrase.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Keep two booleans.

### PERSISTENT STATE
Two booleans only.

### KIT / EXISTING SYSTEM
ChalkText

### MOTION PURPOSE
Explain space.
## BEAT 26 — `S12_O1`

### ANCHOR / SPOKEN PHRASE
`So the extra space is O(1).`

### WHAT APPEARS NOW
Use reusable complexity graph to draw a flat O(1) curve left-to-right; two booleans remain as support.

### CENTER-STAGE HERO
Constant-space graph.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
State count does not grow with N.

### WHAT MUST NOT APPEAR YET
No mistakes yet.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Graph settles then clears.

### PERSISTENT STATE
Optimal extra space O(1).

### KIT / EXISTING SYSTEM
Reusable complexity-curve primitive + ChalkText

### MOTION PURPOSE
Visualize constant growth.
## BEAT 27 — `S12_MIST`

### ANCHOR / SPOKEN PHRASE
`There are a few mistakes that matter here.`

### WHAT APPEARS NOW
Complexity visuals clear completely; bring clean master matrix center stage with small `COMMON MISTAKES` identity.

### CENTER-STAGE HERO
Mistake mode.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
Scene changes from analysis to correctness traps.

### WHAT MUST NOT APPEAR YET
Do not show all mistakes at once.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Keep clean stage.

### PERSISTENT STATE
Mistake sequence ready.

### KIT / EXISTING SYSTEM
Matrix/Grid + ChalkText

### MOTION PURPOSE
Semantic transition.
## BEAT 28 — `S12_M1DANGER`

### ANCHOR / SPOKEN PHRASE
`The first one is the most dangerous.`

### WHAT APPEARS NOW
Use warn emphasis around clean master; no wrong mutation yet.

### CENTER-STAGE HERO
Danger cue only.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
Narration prepares first mistake.

### WHAT MUST NOT APPEAR YET
No specific error before next phrase.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Keep matrix.

### PERSISTENT STATE
First mistake pending.

### KIT / EXISTING SYSTEM
Matrix/Grid + ChalkText

### MOTION PURPOSE
Direct attention.
## BEAT 29 — `S12_IMMEDIATE`

### ANCHOR / SPOKEN PHRASE
`Do not zero rows and columns immediately while you are still discovering original zeros.`

### WHAT APPEARS NOW
Replay a compressed version of Scene02 failure: original zero→immediate row/col mutation, with warn treatment.

### CENTER-STAGE HERO
Immediate-zeroing wrong model.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
Shows mutation during discovery.

### WHAT MUST NOT APPEAR YET
Do not run full cascade.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Keep one created zero as support.

### PERSISTENT STATE
Wrong immediate mutation shown.

### KIT / EXISTING SYSTEM
Matrix/Grid

### MOTION PURPOSE
Teach mistake.
## BEAT 30 — `S12_NEWSOURCE`

### ANCHOR / SPOKEN PHRASE
`A zero created by you must not become a new source.`

### WHAT APPEARS NOW
Focus one created zero with `NOT SOURCE` warn cue and strike.

### CENTER-STAGE HERO
Created vs original distinction.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
Narration states invariant.

### WHAT MUST NOT APPEAR YET
No next mistake early.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Reset matrix after proof.

### PERSISTENT STATE
Invariant restored.

### KIT / EXISTING SYSTEM
Matrix/Grid + RoughLine

### MOTION PURPOSE
Teach rule.
## BEAT 31 — `S12_SECOND`

### ANCHOR / SPOKEN PHRASE
`Second save the original first-row and first-column state before using them as markers.`

### WHAT APPEARS NOW
Show first row/col original data, then two flag names appearing before marker-role labels.

### CENTER-STAGE HERO
Boundary-history ordering.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
Correct order is hero.

### WHAT MUST NOT APPEAR YET
No lost-history demo yet.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Keep boundaries + flags.

### PERSISTENT STATE
Save before reuse.

### KIT / EXISTING SYSTEM
Matrix/Grid + ChalkText

### MOTION PURPOSE
Teach mistake prevention.
## BEAT 32 — `S12_OTHERWISE`

### ANCHOR / SPOKEN PHRASE
`Otherwise you cannot tell whether a boundary zero was original or written later as marker information.`

### WHAT APPEARS NOW
Show one boundary zero with two possible origins `ORIGINAL? / MARKER?`; no answer if history was not saved.

### CENTER-STAGE HERO
Boundary ambiguity.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
Missing history causes ambiguity.

### WHAT MUST NOT APPEAR YET
Do not move to corner flag issue yet.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Clear ambiguous demo.

### PERSISTENT STATE
Need saved flags.

### KIT / EXISTING SYSTEM
Matrix/Grid + ChalkText

### MOTION PURPOSE
Teach failure mode.
## BEAT 33 — `S12_THIRD`

### ANCHOR / SPOKEN PHRASE
`Third do not try to use matrix[0][0] as both independent flags.`

### WHAT APPEARS NOW
Focus (0,0) with first-row and first-column guides converging.

### CENTER-STAGE HERO
Corner shared cell.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
One cell is being asked to represent two facts.

### WHAT MUST NOT APPEAR YET
No final explanation before next phrase.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Keep corner.

### PERSISTENT STATE
Shared corner highlighted.

### KIT / EXISTING SYSTEM
Matrix/Grid + RoughLine

### MOTION PURPOSE
Set up mistake.
## BEAT 34 — `S12_TWOFACT`

### ANCHOR / SPOKEN PHRASE
`The first row and the first column are two different facts.`

### WHAT APPEARS NOW
Show direct chalk facts `row0 originally had zero?` and `col0 originally had zero?` on opposite sides of corner.

### CENTER-STAGE HERO
Two independent facts.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
Two questions remain logically independent.

### WHAT MUST NOT APPEAR YET
No generic card stack.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Clear after understanding.

### PERSISTENT STATE
Two booleans justified.

### KIT / EXISTING SYSTEM
Matrix/Grid + ChalkText

### MOTION PURPOSE
Teach independence.
## BEAT 35 — `S12_FOURTH`

### ANCHOR / SPOKEN PHRASE
`Fourth do not finalize the first row or first column too early.`

### WHAT APPEARS NOW
Show row0/col0 in marker role; warn cue over premature zeroing action but do not execute yet.

### CENTER-STAGE HERO
Boundary marker memory.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
Narration names ordering mistake.

### WHAT MUST NOT APPEAR YET
No marker destruction before next phrase.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Keep marker state.

### PERSISTENT STATE
Boundary still needed.

### KIT / EXISTING SYSTEM
Matrix/Grid

### MOTION PURPOSE
Set up mistake.
## BEAT 36 — `S12_STORING`

### ANCHOR / SPOKEN PHRASE
`They are still storing marker information for the interior.`

### WHAT APPEARS NOW
Draw temporary relations from row0/col0 markers to one interior cell; then show early-finalization action crossed out.

### CENTER-STAGE HERO
Marker dependency.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
Explains why boundary must persist.

### WHAT MUST NOT APPEAR YET
No next sentinel mistake.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Clear dependency.

### PERSISTENT STATE
Finalize boundary last.

### KIT / EXISTING SYSTEM
Matrix/Grid + RoughLine

### MOTION PURPOSE
Teach dependency.
## BEAT 37 — `S12_SENTINEL`

### ANCHOR / SPOKEN PHRASE
`And avoid magic sentinel values.`

### WHAT APPEARS NOW
Show one arbitrary special integer proposal beside a matrix cell, marked with a question cue; do not choose a real reserved value.

### CENTER-STAGE HERO
Sentinel idea.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
Narration introduces unsafe shortcut.

### WHAT MUST NOT APPEAR YET
Do not imply any specific integer is safe.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Keep symbolic sentinel `S`.

### PERSISTENT STATE
Sentinel assumption under question.

### KIT / EXISTING SYSTEM
ChalkText + Matrix/Grid

### MOTION PURPOSE
Set up mistake.
## BEAT 38 — `S12_RANGE`

### ANCHOR / SPOKEN PHRASE
`Valid matrix values can already occupy the allowed integer range`

### WHAT APPEARS NOW
Symbolic sentinel S moves into/overlaps the allowed-value set representation; warn cue shows collision possibility.

### CENTER-STAGE HERO
Allowed-value conflict.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
No guaranteed unused integer.

### WHAT MUST NOT APPEAR YET
Do not quote constraints not in approved script.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Keep conflict.

### PERSISTENT STATE
Sentinel not guaranteed unique.

### KIT / EXISTING SYSTEM
ChalkText

### MOTION PURPOSE
Explain risk.
## BEAT 39 — `S12_NOASSUME`

### ANCHOR / SPOKEN PHRASE
`so we should not assume that some arbitrary sentinel value is guaranteed to be unused.`

### WHAT APPEARS NOW
Strike symbolic sentinel assumption; return to clean optimal invariant.

### CENTER-STAGE HERO
Reject sentinel.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
Narration concludes mistake.

### WHAT MUST NOT APPEAR YET
No edge cases yet.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Clear mistake visuals.

### PERSISTENT STATE
Use explicit marker memory instead.

### KIT / EXISTING SYSTEM
RoughLine + ChalkText

### MOTION PURPOSE
Close sentinel issue.
## BEAT 40 — `S12_EDGE`

### ANCHOR / SPOKEN PHRASE
`Now a few edge cases.`

### WHAT APPEARS NOW
Clear board; show one small matrix slot area center stage using same Matrix/Grid grammar.

### CENTER-STAGE HERO
Edge-case mode.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
Transition to edge cases.

### WHAT MUST NOT APPEAR YET
Do not display all edge cases simultaneously.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Prepare first case.

### PERSISTENT STATE
One-at-a-time edge-case stage.

### KIT / EXISTING SYSTEM
Matrix/Grid + ChalkText

### MOTION PURPOSE
Semantic transition.
## BEAT 41 — `S12_NOZERO`

### ANCHOR / SPOKEN PHRASE
`If there is no zero nothing changes.`

### WHAT APPEARS NOW
Show a small nonzero matrix; run no marker change and keep state.

### CENTER-STAGE HERO
No-zero small matrix.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
Input equals output.

### WHAT MUST NOT APPEAR YET
No next case early.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Replace/cut to next case; do not park it.

### PERSISTENT STATE
No-zero rule understood.

### KIT / EXISTING SYSTEM
Matrix/Grid

### MOTION PURPOSE
Teach edge case.
## BEAT 42 — `S12_ALLZERO`

### ANCHOR / SPOKEN PHRASE
`If every cell is zero the matrix stays all zero.`

### WHAT APPEARS NOW
Replace previous case with all-zero grid; result remains identical.

### CENTER-STAGE HERO
All-zero small matrix.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
No additional mutation needed.

### WHAT MUST NOT APPEAR YET
No single-row case early.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Replace next.

### PERSISTENT STATE
All-zero rule understood.

### KIT / EXISTING SYSTEM
Matrix/Grid

### MOTION PURPOSE
Teach edge case.
## BEAT 43 — `S12_SINGLE_ROW`

### ANCHOR / SPOKEN PHRASE
`For a single row the same boundary logic still works.`

### WHAT APPEARS NOW
Show one-row matrix; first row is also the only row, with saved row history concept and column markers semantically coexisting.

### CENTER-STAGE HERO
1×n matrix.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
Demonstrates dimensional degeneration without changing algorithm.

### WHAT MUST NOT APPEAR YET
Do not full trace.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Replace next.

### PERSISTENT STATE
Single-row supported.

### KIT / EXISTING SYSTEM
Matrix/Grid + ChalkText

### MOTION PURPOSE
Teach edge case.
## BEAT 44 — `S12_SINGLE_COL`

### ANCHOR / SPOKEN PHRASE
`For a single column it still works.`

### WHAT APPEARS NOW
Show one-column matrix; first column is the only column; saved column history remains valid.

### CENTER-STAGE HERO
m×1 matrix.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
Same algorithm handles shape.

### WHAT MUST NOT APPEAR YET
No full trace.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Replace next.

### PERSISTENT STATE
Single-column supported.

### KIT / EXISTING SYSTEM
Matrix/Grid + ChalkText

### MOTION PURPOSE
Teach edge case.
## BEAT 45 — `S12_ONECELL`

### ANCHOR / SPOKEN PHRASE
`For one single cell`

### WHAT APPEARS NOW
Show one cell center stage.

### CENTER-STAGE HERO
1×1 matrix.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
Prepare two possible values.

### WHAT MUST NOT APPEAR YET
Do not show both outcomes until spoken.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Keep cell.

### PERSISTENT STATE
1×1 case.

### KIT / EXISTING SYSTEM
Matrix/Grid

### MOTION PURPOSE
Teach edge case.
## BEAT 46 — `S12_ONEZERO`

### ANCHOR / SPOKEN PHRASE
`zero stays zero`

### WHAT APPEARS NOW
Set/show cell0; result remains0.

### CENTER-STAGE HERO
1×1 zero.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
No mutation needed.

### WHAT MUST NOT APPEAR YET
Nonzero case hidden until next phrase.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Replace cell value next.

### PERSISTENT STATE
0→0.

### KIT / EXISTING SYSTEM
Matrix/Grid

### MOTION PURPOSE
Confirm case.
## BEAT 47 — `S12_ONENON`

### ANCHOR / SPOKEN PHRASE
`and a non-zero value stays unchanged.`

### WHAT APPEARS NOW
Replace with a nonzero value and show unchanged result.

### CENTER-STAGE HERO
1×1 nonzero.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
No marker is triggered.

### WHAT MUST NOT APPEAR YET
No top-left case early.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Clear case.

### PERSISTENT STATE
nonzero→same.

### KIT / EXISTING SYSTEM
Matrix/Grid

### MOTION PURPOSE
Confirm case.
## BEAT 48 — `S12_TOPLEFT`

### ANCHOR / SPOKEN PHRASE
`A zero at the top-left corner is also handled correctly`

### WHAT APPEARS NOW
Show small matrix with (0,0)=0; first row and first col guides converge there.

### CENTER-STAGE HERO
Top-left zero.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
Narration names shared-corner edge case.

### WHAT MUST NOT APPEAR YET
Do not explain why until next phrase.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Keep flags conceptual.

### PERSISTENT STATE
Top-left source selected.

### KIT / EXISTING SYSTEM
Matrix/Grid

### MOTION PURPOSE
Set up case.
## BEAT 49 — `S12_INDEP`

### ANCHOR / SPOKEN PHRASE
`because we saved first-row and first-column state independently.`

### WHAT APPEARS NOW
Show firstRowZero and firstColZero as two independent facts despite one shared zero.

### CENTER-STAGE HERO
Two saved flags.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
Explains correctness.

### WHAT MUST NOT APPEAR YET
No multiple-interior case early.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Clear case.

### PERSISTENT STATE
Corner handled.

### KIT / EXISTING SYSTEM
Matrix/Grid + ChalkText

### MOTION PURPOSE
Teach edge-case reason.
## BEAT 50 — `S12_MULTI`

### ANCHOR / SPOKEN PHRASE
`And multiple interior zeros simply write more row and column markers.`

### WHAT APPEARS NOW
Show two/three interior zeros one at a time projecting to additional boundary markers; do not trace application.

### CENTER-STAGE HERO
Multiple interior sources.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
Same marker rule repeats.

### WHAT MUST NOT APPEAR YET
No final output needed.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Settle marker set.

### PERSISTENT STATE
Multiple sources supported.

### KIT / EXISTING SYSTEM
Matrix/Grid + RoughLine

### MOTION PURPOSE
Teach scalability.
## BEAT 51 — `S12_SAMEINV`

### ANCHOR / SPOKEN PHRASE
`The same invariant continues to work.`

### WHAT APPEARS NOW
Reduce edge-case matrix; center one chalk line `preserve original-zero information before mutation`.

### CENTER-STAGE HERO
Core invariant.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
All cases share same invariant.

### WHAT MUST NOT APPEAR YET
No recap scene content yet.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
End on invariant.

### PERSISTENT STATE
Invariant ready for recap.

### KIT / EXISTING SYSTEM
ChalkText

### MOTION PURPOSE
Close scene.


---

# 9. CONTINUITY OUT

Scene13 receives one transferable invariant only:

```text
WHEN MUTATION CAN DESTROY INFORMATION YOU STILL NEED:
identify what must survive
preserve only that information
reuse safe storage when possible
```

No complexity graphs or mistake visuals persist into recap.

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
