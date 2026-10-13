# Q16 — Post-Audio Exact Word-Sync → Frame Plan Contract V3

## Input gate

For each of the 9 scenes require:

```text
final approved narration
final ElevenLabs MP3
exact word-level sync JSON
matching Phase9 V3 scene plan
Q16_PHASE9_SEMANTIC_ANCHORS_9SCENE.json
```

If audio wording materially differs from the locked script:

```text
BLOCKED — AUDIO / SCRIPT MISMATCH
```

## Canonical identity

Raw sync words remain immutable.
Ordered word index is identity:

```text
0 → W0000
1 → W0001
...
```

Each semantic Phase9 anchor must be matched to one unique contiguous word sequence in spoken order.

After matching, create V2-style anchor manifests with:

```json
{
  "word_index": 42,
  "edge": "start",
  "offset_frames": 0,
  "trace_steps": []
}
```

Use exact raw `start_frame` / `end_frame` from the validated sync when supplied. Read `fps` from the sync file; do not hardcode 30fps in new V2 timing logic.

If raw sync lacks frame fields but has exact timestamps, derive frames from that file's own fps under the repository's V2 sync rules. Never infer timing from WPM or visual convenience.

## Pause rule

Derive real pauses only from adjacent aligned words.

```text
micro     <150ms
natural   150–299ms
teaching  300–699ms
major     >=700ms
```

No artificial hold is inserted.

## Semantic order

Exact word timing can choose WHEN an approved event happens. It cannot redesign WHAT happens.

```text
Phase9 owns WHAT / WHY / ORDER / HIDDEN STATE / CLEANUP / PERSISTENCE
word sync owns exact WHEN
```

## Full trace scenes

Scenes 03 and 06 must map every narrated algorithm state change to the verified trace in exact spoken order. No skipped mutation, lookup, sum update, answer update, or map update.

## Code scenes

Scenes 04 and 07:

```text
spoken code idea
→ active line types character-by-character inside exact spoken window
→ line completes
→ semantic effect appears
→ next line remains hidden until its narration
```

Unspoken punctuation/syntax attaches deterministically to its nearest spoken token. No generic typing speed.

## Complexity

Whenever narration states a Big-O class, resolve the graph reveal/draw to that exact phrase. Graph is `ComplexityGrowthGraphV2`, built from kit rough primitives. No MiniGraph.

## Generated post-audio artifact per scene

```text
SceneXX_FRAME_PLAN.md
```

Each beat must include:

```text
FRAME RANGE
WORD IDs
EXACT SPOKEN ANCHOR
TRACE IDs where algorithmic
ACTIVE VISUAL STATE
CENTER-STAGE HERO
CAUSE
STATE CHANGE / MOTION
REAL HOLD or NO HOLD
CLEANUP / EXIT
PERSISTENT STATE
KIT COMPONENTS
NO-SPOILER CHECK
```

Required final audit:

```text
UNMATCHED ANCHORS = 0
OUT-OF-BOUNDS ANCHORS = 0
GUESSED TIMING = 0
```
