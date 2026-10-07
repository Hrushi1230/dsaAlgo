# Q14 — ANTIGRAVITY POST-AUDIO SYNC → FRAME CONTRACT V2
## Project-source compatible · no guessed timing

### Authority order

```text
actual question-local repo sync helper
→ @dsa/kit/lib/audioSync.ts
→ final sync JSON
→ Q14_PHASE9_SYNC_ANCHORS.json
→ Phase-9 semantic plans
```

The supplied `audioSync.ts` uses:

```text
Math.round(word.start * 30)
Math.round(word.end * 30)
```

Use actual repository/helper semantics for Q14 unless the real question-local project explicitly overrides them.

Do not silently substitute older floor/ceil timing math.

### Resolve stable anchors once

For each scene:

1. read final sync JSON;
2. resolve every `anchor_id` from `Q14_PHASE9_SYNC_ANCHORS.json` to one unique contiguous word-index range;
3. write `SceneXX_SYNC_RESOLVED.json`;
4. implementation consumes resolved IDs, not repeated prefix guessing.

Required resolved fields:

```text
anchor_id
word_start_index
word_end_index
start_seconds
end_seconds
start_frame
end_frame_exclusive
```

If phrase matching is ambiguous:

```text
BLOCKED — AMBIGUOUS SYNC ANCHOR
```

### Component durations

Actual source contains default drawing/typing durations.

Those defaults are NOT narration timing authority.

For sync-critical teaching motion:

```text
resolve anchor first
→ derive available exact frame window
→ explicitly pass start / duration
```

Do not use hidden defaults for:
- RoughBox drawing;
- RoughLine drawing;
- RoughCurve drawing;
- ChalkText typing.

BezierFlight already requires explicit `start` and `dur`.

For a narration-synced ChalkText writing event:

```text
startFrame = resolved anchor start
charFrames = exact writable frame window / actual text length
```

If text is only a stable label, it does not need an invented typewriter animation.

### Captions

Use final exact sync words directly with `Captions`.

No paraphrased captions.

### Unanchored words

Words between semantic anchors:

```text
inherit previous persistent state
NO NEW VISUAL
captions continue
```

### Frame-plan gate

Before implementation:

```text
UNMATCHED ANCHORS = 0
AMBIGUOUS ANCHORS = 0
```

Then produce `SceneXX_FRAME_PLAN.md`, audit it, repair it, and only then implement.

### Autonomous loop

```text
Scene01 resolve → plan → audit → implement → render/QA → PASS
Scene02 same
...
Scene13
→ cross-scene QA
```

Stop only on:

```text
BLOCKED — SOURCE REQUIRED
```
