# Q15 — Spiral Matrix (LeetCode 54)
# Phase 9 V3 · Scene 04 — Method 1 Code
## WORD-BASED VISUAL PLAN — STUDENT-OPTIMIZED SCRIPT · NO GUESSED TIME · KIT-FIRST

**Scene purpose:** Map Method1 trace to exact code organization, explain the final-cell guard, and derive time/space.

---

# AUTHORITY / SOURCE PRIORITY

1. `Q15_Spiral_Matrix_FINAL_STUDENT_OPTIMIZED.md`
2. independently verified Q15 algorithm truth / code targets
3. `DSA_MASTER_PRODUCTION_SKILL_V3.md`
4. `REFERENCE_WORD_DRIVEN_PLANNING_SKILL.md`
5. Matrix/Grid grammar + kit/source audit
6. actual project repository / `@dsa/kit`
7. final ElevenLabs MP3 + exact word-sync JSON

If an implementation API is missing: `UNRESOLVED — SOURCE REQUIRED`.

---

# PERMANENT VISUAL TRUTH

```text
CELL POSITION = FIXED
CELL VALUE    = FIXED
```

Traversal/visited/output/boundary overlays may change. Source matrix cells and values never move.

---

# TIMING LOCK

```text
NO SECONDS
NO FRAMES
NO GUESSED TYPE SPEED
NO GUESSED HOLD
```

Final audio timestamps are the only timing authority. Unanchored words inherit the previous persistent state and captions continue.

---

# CONTINUITY

**IN:** Scene03 leaves Method1 trace complete and its PROCESS→QUERY→TURN→MOVE identity established.

**OUT:** Method1 code/complexity complete; visited-memory question unresolved.

---

# HARD NO-SPOILER / CENTER-STAGE LOCK

- If narration has not reached information, it does not visually exist yet.
- Default occupancy: **1 primary hero + 1 direct support object + captions**.
- Motion must teach state, show cause→effect, direct attention, or preserve continuity.
- No black/dark panel behind matrix; use course chalkboard + kit primitives.
- Future code lines remain hidden in code scenes.

---

# SEMANTIC ANCHOR MANIFEST

| Anchor ID | Exact spoken phrase | Center-stage hero |
|---|---|---|
| `S04_DIMS` | we store the number of rows and columns. | m/n setup |
| `S04_DIRS` | Then we keep the four directions... in clockwise order. | directions list scaffold |
| `S04_DIR_WORDS` | Right... down... left... and up. | Four direction tuples |
| `S04_VISITED` | We also create a visited matrix... with the same dimensions as the input. | visited allocation |
| `S04_START_STATE` | Our row and column start at zero... and direction zero means... right. | r=0, c=0, direction=0 |
| `S04_LOOP` | The loop allows exactly... `m × n` visits... one for every matrix cell. | for range(m*n) |
| `S04_PROCESS` | For the current cell... we add its value to the answer... and mark it visited. | append + visited body |
| `S04_IMPORTANT_CHECK` | Then there is one small but important check. | Guard focus |
| `S04_ALL_VALUES` | If the answer already contains... all `m × n` values... we stop immediately. | final-cell guard + break |
| `S04_WHY` | Why? | Why guard? |
| `S04_NO_NEXT` | Because after the final valid cell... there is no next unvisited cell to move to. | No next unvisited cell |
| `S04_WITHOUT` | Without this check... we would unnecessarily try to calculate another move. | Rejected extra next-query |
| `S04_NEXTCALC` | Otherwise... we calculate the next row and column... using the current direction. | dr/dc + nr/nc calculation |
| `S04_IFCOND` | If that next position is outside the matrix... or already visited... | invalid-or-visited condition |
| `S04_ROTATE` | we rotate the direction once... | direction rotation |
| `S04_RECALC` | and calculate the next position again. | recalculate after turn |
| `S04_MOVE` | Then we move there. | r=nr, c=nc |
| `S04_MATCH` | That is exactly the rule... we just traced. | Trace↔Code identity |
| `S04_TIME` | Every cell enters the answer once... so the time complexity is... `O(m × n)`. | O(mn) time |
| `S04_SPACE` | But the visited matrix also stores... `m × n` states. So the auxiliary space is... `O(m × n)`. | O(mn) auxiliary space |
| `S04_QUESTION` | do we really need this visited matrix? | Visited matrix as question |

---

# WORD-BASED CHOREOGRAPHY

## BEAT 01 — `S04_DIMS`

### ANCHOR / SPOKEN PHRASE
> we store the number of rows and columns.

### WHAT APPEARS NOW
On production code surface, type `m = len(matrix)` then `n = len(matrix[0])` inside the resolved phrase window; compact matrix labels rows/cols as support.

### CENTER-STAGE HERO
m/n setup

### CAUSE
The narration reaches `S04_DIMS`.

### EFFECT / MOTION
Maps input geometry to code.

### WHAT MUST NOT APPEAR YET
Directions before spoken.

### COMPREHENSION HOLD
Use only a real pause present in final audio; never manufacture hold time.

### CLEANUP / EXIT
Dim setup lines after completion.

### PERSISTENT STATE
m,n stored.

### KIT / EXISTING SYSTEM
Actual production code/typed-code component — API unresolved until repo inspection; never use a fake black IDE.

### MOTION PURPOSE
Semantic job: Maps input geometry to code.

## BEAT 02 — `S04_DIRS`

### ANCHOR / SPOKEN PHRASE
> Then we keep the four directions... in clockwise order.

### WHAT APPEARS NOW
Type `directions = [` and open list only.

### CENTER-STAGE HERO
directions list scaffold

### CAUSE
The narration reaches `S04_DIRS`.

### EFFECT / MOTION
Introduces direction table.

### WHAT MUST NOT APPEAR YET
Direction tuples before words.

### COMPREHENSION HOLD
Use only a real pause present in final audio; never manufacture hold time.

### CLEANUP / EXIT
Keep active list.

### PERSISTENT STATE
direction list being constructed.

### KIT / EXISTING SYSTEM
Actual production code/typed-code component — API unresolved until repo inspection; never use a fake black IDE.

### MOTION PURPOSE
Semantic job: Introduces direction table.

## BEAT 03 — `S04_DIR_WORDS`

### ANCHOR / SPOKEN PHRASE
> Right... down... left... and up.

### WHAT APPEARS NOW
Type `(0,1)`, `(1,0)`, `(0,-1)`, `(-1,0)` strictly on Right/Down/Left/Up word timings; finish closing bracket after `up`.

### CENTER-STAGE HERO
Four direction tuples

### CAUSE
The narration reaches `S04_DIR_WORDS`.

### EFFECT / MOTION
Encodes exact clockwise order taught in trace.

### WHAT MUST NOT APPEAR YET
Visited line before spoken.

### COMPREHENSION HOLD
Use only a real pause present in final audio; never manufacture hold time.

### CLEANUP / EXIT
Dim completed list.

### PERSISTENT STATE
directions locked R,D,L,U.

### KIT / EXISTING SYSTEM
Actual production code/typed-code component — API unresolved until repo inspection; never use a fake black IDE.

### MOTION PURPOSE
Semantic job: Encodes exact clockwise order taught in trace.

### SPECIAL CONTRACT
SUBWORD CODE CONTRACT: each tuple appears only on its spoken direction word; character timing comes from exact word/pause frames.

## BEAT 04 — `S04_VISITED`

### ANCHOR / SPOKEN PHRASE
> We also create a visited matrix... with the same dimensions as the input.

### WHAT APPEARS NOW
Type `visited = [[False] * n for _ in range(m)]`; show a compact same-size boolean-grid proof. After this line settles, `answer = []` may appear quietly in its canonical target position because the output-list concept was already explicitly taught in Scene02; it must not take center stage or receive invented narration.

### CENTER-STAGE HERO
visited allocation

### CAUSE
The narration reaches `S04_VISITED`.

### EFFECT / MOTION
Maps explicit history to O(mn) state while preserving target-code order.

### WHAT MUST NOT APPEAR YET
r/c/direction initialization.

### COMPREHENSION HOLD
Use only a real pause present in final audio; never manufacture hold time.

### CLEANUP / EXIT
Keep visited proof only while relevant.

### PERSISTENT STATE
visited initialized false; empty answer container available.

### KIT / EXISTING SYSTEM
Actual production code/typed-code component — API unresolved until repo inspection; never use a fake black IDE.

### MOTION PURPOSE
Semantic job: Maps explicit history to O(mn) state while preserving target-code order.

### SPECIAL CONTRACT
PREVIOUSLY-TAUGHT BOILERPLATE RULE: silent code may appear only for a concept already taught earlier and only when needed to preserve canonical target order. It cannot introduce a new algorithm idea.

## BEAT 05 — `S04_START_STATE`

### ANCHOR / SPOKEN PHRASE
> Our row and column start at zero... and direction zero means... right.

### WHAT APPEARS NOW
Type initialization lines; point compact matrix to cell1 and direction RIGHT.

### CENTER-STAGE HERO
r=0, c=0, direction=0

### CAUSE
The narration reaches `S04_START_STATE`.

### EFFECT / MOTION
Maps trace start state to variables.

### WHAT MUST NOT APPEAR YET
Loop.

### COMPREHENSION HOLD
Use only a real pause present in final audio; never manufacture hold time.

### CLEANUP / EXIT
Dim after hold.

### PERSISTENT STATE
r=0,c=0,direction=0.

### KIT / EXISTING SYSTEM
Actual production code/typed-code component — API unresolved until repo inspection; never use a fake black IDE.

### MOTION PURPOSE
Semantic job: Maps trace start state to variables.

## BEAT 06 — `S04_LOOP`

### ANCHOR / SPOKEN PHRASE
> The loop allows exactly... `m × n` visits... one for every matrix cell.

### WHAT APPEARS NOW
Type `for _ in range(m * n):`.

### CENTER-STAGE HERO
for range(m*n)

### CAUSE
The narration reaches `S04_LOOP`.

### EFFECT / MOTION
Creates one processing opportunity per cell.

### WHAT MUST NOT APPEAR YET
Append/visited body.

### COMPREHENSION HOLD
Use only a real pause present in final audio; never manufacture hold time.

### CLEANUP / EXIT
Keep active loop header.

### PERSISTENT STATE
loop bound m*n.

### KIT / EXISTING SYSTEM
Actual production code/typed-code component — API unresolved until repo inspection; never use a fake black IDE.

### MOTION PURPOSE
Semantic job: Creates one processing opportunity per cell.

## BEAT 07 — `S04_PROCESS`

### ANCHOR / SPOKEN PHRASE
> For the current cell... we add its value to the answer... and mark it visited.

### WHAT APPEARS NOW
Type `answer.append(matrix[r][c])` then `visited[r][c] = True` in spoken order. Show one compact cell→answer copy then history fade.

### CENTER-STAGE HERO
append + visited body

### CAUSE
The narration reaches `S04_PROCESS`.

### EFFECT / MOTION
Matches trace processing order.

### WHAT MUST NOT APPEAR YET
Final-cell guard before spoken.

### COMPREHENSION HOLD
Use only a real pause present in final audio; never manufacture hold time.

### CLEANUP / EXIT
Dim body after effect.

### PERSISTENT STATE
current processed then visited.

### KIT / EXISTING SYSTEM
Actual production code/typed-code component — API unresolved until repo inspection; never use a fake black IDE.

### MOTION PURPOSE
Semantic job: Matches trace processing order.

## BEAT 08 — `S04_IMPORTANT_CHECK`

### ANCHOR / SPOKEN PHRASE
> Then there is one small but important check.

### WHAT APPEARS NOW
Bring a blank active code line under the process body; no condition text yet.

### CENTER-STAGE HERO
Guard focus

### CAUSE
The narration reaches `S04_IMPORTANT_CHECK`.

### EFFECT / MOTION
Prepares guard rationale.

### WHAT MUST NOT APPEAR YET
Guard condition.

### COMPREHENSION HOLD
Use only a real pause present in final audio; never manufacture hold time.

### CLEANUP / EXIT
Keep.

### PERSISTENT STATE
Guard upcoming.

### KIT / EXISTING SYSTEM
Actual production code/typed-code component — API unresolved until repo inspection; never use a fake black IDE.

### MOTION PURPOSE
Semantic job: Prepares guard rationale.

## BEAT 09 — `S04_ALL_VALUES`

### ANCHOR / SPOKEN PHRASE
> If the answer already contains... all `m × n` values... we stop immediately.

### WHAT APPEARS NOW
Type `if len(answer) == m * n:` then `break`; support shows answer count equals total.

### CENTER-STAGE HERO
final-cell guard + break

### CAUSE
The narration reaches `S04_ALL_VALUES`.

### EFFECT / MOTION
Prevents post-completion movement.

### WHAT MUST NOT APPEAR YET
Why proof before spoken.

### COMPREHENSION HOLD
Use only a real pause present in final audio; never manufacture hold time.

### CLEANUP / EXIT
Keep guard active.

### PERSISTENT STATE
If complete → break.

### KIT / EXISTING SYSTEM
Actual production code/typed-code component — API unresolved until repo inspection; never use a fake black IDE.

### MOTION PURPOSE
Semantic job: Prevents post-completion movement.

## BEAT 10 — `S04_WHY`

### ANCHOR / SPOKEN PHRASE
> Why?

### WHAT APPEARS NOW
Code freezes; bring completed 5×6 proof to center with no unvisited cell.

### CENTER-STAGE HERO
Why guard?

### CAUSE
The narration reaches `S04_WHY`.

### EFFECT / MOTION
Opens causal explanation.

### WHAT MUST NOT APPEAR YET
Attempted next move.

### COMPREHENSION HOLD
Use only a real pause present in final audio; never manufacture hold time.

### CLEANUP / EXIT
Keep guard dim as support.

### PERSISTENT STATE
All cells processed.

### KIT / EXISTING SYSTEM
Actual production code/typed-code component — API unresolved until repo inspection; never use a fake black IDE.

### MOTION PURPOSE
Semantic job: Opens causal explanation.

## BEAT 11 — `S04_NO_NEXT`

### ANCHOR / SPOKEN PHRASE
> Because after the final valid cell... there is no next unvisited cell to move to.

### WHAT APPEARS NOW
Show final current 16 and every other cell history; any candidate is outside/visited.

### CENTER-STAGE HERO
No next unvisited cell

### CAUSE
The narration reaches `S04_NO_NEXT`.

### EFFECT / MOTION
Explains correctness of early break.

### WHAT MUST NOT APPEAR YET
Unnecessary calculation visual.

### COMPREHENSION HOLD
Use only a real pause present in final audio; never manufacture hold time.

### CLEANUP / EXIT
Keep for next beat.

### PERSISTENT STATE
No legal next cell.

### KIT / EXISTING SYSTEM
Matrix/Grid grammar + RoughBox + ChalkText; RoughLine/RoughCurve only for semantic relations; PathTracer/EvolvingPath only after actual repo API inspection.

### MOTION PURPOSE
Semantic job: Explains correctness of early break.

## BEAT 12 — `S04_WITHOUT`

### ANCHOR / SPOKEN PHRASE
> Without this check... we would unnecessarily try to calculate another move.

### WHAT APPEARS NOW
Show a temporary attempted query after completion, immediately rejected with warn/X; do not alter state.

### CENTER-STAGE HERO
Rejected extra next-query

### CAUSE
The narration reaches `S04_WITHOUT`.

### EFFECT / MOTION
Shows what guard avoids.

### WHAT MUST NOT APPEAR YET
No new code branch.

### COMPREHENSION HOLD
Use only a real pause present in final audio; never manufacture hold time.

### CLEANUP / EXIT
Remove attempted query; return code hero.

### PERSISTENT STATE
Guard rationale complete.

### KIT / EXISTING SYSTEM
Matrix/Grid grammar + RoughBox + ChalkText; RoughLine/RoughCurve only for semantic relations; PathTracer/EvolvingPath only after actual repo API inspection.

### MOTION PURPOSE
Semantic job: Shows what guard avoids.

## BEAT 13 — `S04_NEXTCALC`

### ANCHOR / SPOKEN PHRASE
> Otherwise... we calculate the next row and column... using the current direction.

### WHAT APPEARS NOW
Type `dr, dc = directions[direction]`, `nr = r + dr`, `nc = c + dc`.

### CENTER-STAGE HERO
dr/dc + nr/nc calculation

### CAUSE
The narration reaches `S04_NEXTCALC`.

### EFFECT / MOTION
Maps QUERY NEXT to code.

### WHAT MUST NOT APPEAR YET
Decision condition.

### COMPREHENSION HOLD
Use only a real pause present in final audio; never manufacture hold time.

### CLEANUP / EXIT
Dim calculation after hold.

### PERSISTENT STATE
candidate (nr,nc) computed.

### KIT / EXISTING SYSTEM
Actual production code/typed-code component — API unresolved until repo inspection; never use a fake black IDE.

### MOTION PURPOSE
Semantic job: Maps QUERY NEXT to code.

## BEAT 14 — `S04_IFCOND`

### ANCHOR / SPOKEN PHRASE
> If that next position is outside the matrix... or already visited...

### WHAT APPEARS NOW
Type exact multi-line `if` condition with bounds checks and `visited[nr][nc]`; compact proof alternates outside and visited examples only as clauses are spoken.

### CENTER-STAGE HERO
invalid-or-visited condition

### CAUSE
The narration reaches `S04_IFCOND`.

### EFFECT / MOTION
Maps both traced turn causes.

### WHAT MUST NOT APPEAR YET
Rotation line.

### COMPREHENSION HOLD
Use only a real pause present in final audio; never manufacture hold time.

### CLEANUP / EXIT
Keep condition.

### PERSISTENT STATE
turn condition locked.

### KIT / EXISTING SYSTEM
Actual production code/typed-code component — API unresolved until repo inspection; never use a fake black IDE.

### MOTION PURPOSE
Semantic job: Maps both traced turn causes.

## BEAT 15 — `S04_ROTATE`

### ANCHOR / SPOKEN PHRASE
> we rotate the direction once...

### WHAT APPEARS NOW
Type `direction = (direction + 1) % 4`; direction compass advances one step.

### CENTER-STAGE HERO
direction rotation

### CAUSE
The narration reaches `S04_ROTATE`.

### EFFECT / MOTION
Implements clockwise turn.

### WHAT MUST NOT APPEAR YET
Recalculation lines.

### COMPREHENSION HOLD
Use only a real pause present in final audio; never manufacture hold time.

### CLEANUP / EXIT
Keep line active briefly.

### PERSISTENT STATE
direction advanced mod4.

### KIT / EXISTING SYSTEM
Actual production code/typed-code component — API unresolved until repo inspection; never use a fake black IDE.

### MOTION PURPOSE
Semantic job: Implements clockwise turn.

## BEAT 16 — `S04_RECALC`

### ANCHOR / SPOKEN PHRASE
> and calculate the next position again.

### WHAT APPEARS NOW
Type repeated dr/dc and nr/nc lines from target.

### CENTER-STAGE HERO
recalculate after turn

### CAUSE
The narration reaches `S04_RECALC`.

### EFFECT / MOTION
Ensures candidate uses new direction.

### WHAT MUST NOT APPEAR YET
Move assignment.

### COMPREHENSION HOLD
Use only a real pause present in final audio; never manufacture hold time.

### CLEANUP / EXIT
Dim after effect.

### PERSISTENT STATE
candidate recomputed.

### KIT / EXISTING SYSTEM
Actual production code/typed-code component — API unresolved until repo inspection; never use a fake black IDE.

### MOTION PURPOSE
Semantic job: Ensures candidate uses new direction.

## BEAT 17 — `S04_MOVE`

### ANCHOR / SPOKEN PHRASE
> Then we move there.

### WHAT APPEARS NOW
Type `r = nr` and `c = nc`; compact current outline moves only now.

### CENTER-STAGE HERO
r=nr, c=nc

### CAUSE
The narration reaches `S04_MOVE`.

### EFFECT / MOTION
Implements MOVE after decision.

### WHAT MUST NOT APPEAR YET
Complexity.

### COMPREHENSION HOLD
Use only a real pause present in final audio; never manufacture hold time.

### CLEANUP / EXIT
Code block can settle complete.

### PERSISTENT STATE
current becomes candidate.

### KIT / EXISTING SYSTEM
Actual production code/typed-code component — API unresolved until repo inspection; never use a fake black IDE.

### MOTION PURPOSE
Semantic job: Implements MOVE after decision.

## BEAT 18 — `S04_MATCH`

### ANCHOR / SPOKEN PHRASE
> That is exactly the rule... we just traced.

### WHAT APPEARS NOW
Bring PROCESS→QUERY→TURN→MOVE strip beside corresponding code groups; no new logic.

### CENTER-STAGE HERO
Trace↔Code identity

### CAUSE
The narration reaches `S04_MATCH`.

### EFFECT / MOTION
Proves organizational identity.

### WHAT MUST NOT APPEAR YET
Method2.

### COMPREHENSION HOLD
Use only a real pause present in final audio; never manufacture hold time.

### CLEANUP / EXIT
Collapse proof.

### PERSISTENT STATE
Trace and code match.

### KIT / EXISTING SYSTEM
Matrix/Grid grammar + RoughBox + ChalkText; RoughLine/RoughCurve only for semantic relations; PathTracer/EvolvingPath only after actual repo API inspection.

### MOTION PURPOSE
Semantic job: Proves organizational identity.

## BEAT 19 — `S04_TIME`

### ANCHOR / SPOKEN PHRASE
> Every cell enters the answer once... so the time complexity is... `O(m × n)`.

### WHAT APPEARS NOW
Code recedes; sweep matrix cells once and show `O(m × n)` time.

### CENTER-STAGE HERO
O(mn) time

### CAUSE
The narration reaches `S04_TIME`.

### EFFECT / MOTION
Derives time from one append per cell.

### WHAT MUST NOT APPEAR YET
Space complexity.

### COMPREHENSION HOLD
Use only a real pause present in final audio; never manufacture hold time.

### CLEANUP / EXIT
Keep time badge small.

### PERSISTENT STATE
Method1 time O(mn).

### KIT / EXISTING SYSTEM
Matrix/Grid grammar + RoughBox + ChalkText; RoughLine/RoughCurve only for semantic relations; PathTracer/EvolvingPath only after actual repo API inspection.

### MOTION PURPOSE
Semantic job: Derives time from one append per cell.

## BEAT 20 — `S04_SPACE`

### ANCHOR / SPOKEN PHRASE
> But the visited matrix also stores... `m × n` states. So the auxiliary space is... `O(m × n)`.

### WHAT APPEARS NOW
Bring visited matrix memory to center, count scales with cells, then reveal space result.

### CENTER-STAGE HERO
O(mn) auxiliary space

### CAUSE
The narration reaches `S04_SPACE`.

### EFFECT / MOTION
Derives memory cost.

### WHAT MUST NOT APPEAR YET
O1/Method2.

### COMPREHENSION HOLD
Use only a real pause present in final audio; never manufacture hold time.

### CLEANUP / EXIT
Keep visited matrix as transition object.

### PERSISTENT STATE
Method1 aux O(mn).

### KIT / EXISTING SYSTEM
Matrix/Grid grammar + RoughBox + ChalkText; RoughLine/RoughCurve only for semantic relations; PathTracer/EvolvingPath only after actual repo API inspection.

### MOTION PURPOSE
Semantic job: Derives memory cost.

## BEAT 21 — `S04_QUESTION`

### ANCHOR / SPOKEN PHRASE
> do we really need this visited matrix?

### WHAT APPEARS NOW
Remove code/time clutter; leave visited overlay centered with a large question cue.

### CENTER-STAGE HERO
Visited matrix as question

### CAUSE
The narration reaches `S04_QUESTION`.

### EFFECT / MOTION
Creates optimization hinge for Scene05.

### WHAT MUST NOT APPEAR YET
Boundary answer before Scene05.

### COMPREHENSION HOLD
Use only a real pause present in final audio; never manufacture hold time.

### CLEANUP / EXIT
End unresolved.

### PERSISTENT STATE
Question: can history be represented more compactly?

### KIT / EXISTING SYSTEM
Matrix/Grid grammar + RoughBox + ChalkText; RoughLine/RoughCurve only for semantic relations; PathTracer/EvolvingPath only after actual repo API inspection.

### MOTION PURPOSE
Semantic job: Creates optimization hinge for Scene05.

---

# SCENE END-STATE CONTRACT

```text
Method1 code/complexity complete; visited-memory question unresolved.
```

# IMPLEMENTATION SOURCE LOCK

Before implementation, inspect actual repository APIs for Matrix/Grid wrapper, path tracer/evolving path, output sequence, typed code editor, roadmap, and any generic complexity graph. Reuse/extend kit-level primitives; never invent props or build a scene-local generic substitute.
