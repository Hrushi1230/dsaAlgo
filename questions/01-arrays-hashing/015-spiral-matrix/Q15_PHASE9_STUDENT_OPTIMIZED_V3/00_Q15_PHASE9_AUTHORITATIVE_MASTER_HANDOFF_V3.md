# Q15 — Spiral Matrix
# Phase 9 V3 · AUTHORITATIVE MASTER HANDOFF

## Authority order

```text
Q15_Spiral_Matrix_FINAL_STUDENT_OPTIMIZED.md
Q15_PHASE9_SYNC_ANCHORS_V3.json
Scene01–Scene10 V3 word-based visual plans
Scene01–Scene10 V3 audits
99_Q15_PHASE9_MASTER_AUDIT_V3.md
Q15_KIT_PROJECT_SOURCE_AUDIT_V3.md
actual project repository
final ElevenLabs MP3 + exact sync JSON
```

**Legacy rule:** `Q15_Spiral_Matrix_Phase9_REAUDITED_V2.zip` is superseded for narration/anchors. It may be consulted only as non-authoritative visual history.

## Permanent visual law

```text
CELL POSITION = FIXED
CELL VALUE    = FIXED
```

Method1:
```text
PROCESS CURRENT
→ QUERY NEXT
→ OUTSIDE / VISITED?
→ TURN IF NEEDED
→ MOVE
```

Method2:
```text
ACTIVE RECTANGLE
→ ACTIVE EDGE
→ CONSUME
→ SHRINK
→ VALIDATE
→ CONTINUE
```

## Student-optimized trace-density law

```text
NARRATION MAY COMPRESS A RUN OF VALUES
BUT VISUAL EXECUTION MAY NOT SKIP A CELL.
```

For compressed phrases such as `from one ... through six`, final MP3 word timestamps define the available span. Intermediate cell transitions are distributed deterministically inside that resolved span; the narrated endpoint is never reached early.

## Previously-taught boilerplate rule

Code syntax for a concept already taught earlier (for example the empty answer container) may appear quietly only when required to preserve canonical target-code order. It may not become a new center-stage teaching beat and may not reveal future algorithm semantics.

## Phase-9 status

- Scene plans rebuilt: 10 / 10
- Fresh stable semantic anchors: 209
- Duplicate anchor IDs: 0
- Anchor phrases missing from new script: 0
- Guessed seconds/frames: 0
- Independent algorithm QA: PASS across 10,800 rectangular random cases

## After final MP3 + sync

```text
resolve V3 anchors
→ derive exact word/subword frames
→ expand compressed traversal spans deterministically
→ exact frame plan
→ audit / repair
→ implement with actual repo APIs
→ typecheck
→ algorithm QA
→ render
→ visual / motion / state QA
```

Stop only on genuine blockers:
```text
BLOCKED — SOURCE REQUIRED
BLOCKED — AUDIO / SCRIPT MISMATCH
BLOCKED — AMBIGUOUS SYNC ANCHOR
BLOCKED — TRACE SPAN TOO SHORT
BLOCKED — CODE TYPING WINDOW TOO SHORT
```

## Final roadmap target

```text
Q15 Spiral Matrix = COMPLETE
global = 15 / 227
Q16 Subarray Sum Equals K = UP NEXT
```

Q16 must not become ACTIVE inside Q15.
