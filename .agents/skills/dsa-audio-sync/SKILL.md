---
name: dsa-audio-sync
description: Validates the final MP3 word-sync data and converts spoken words, sentences and pauses into trustworthy frame anchors before scene planning.
---

# DSA Audio Sync V2

> Reference: [`docs/AUDIO_SYNC_BIBLE_V2.md`](file:///c:/Users/hrkes/Desktop/DsaAlgo/docs/AUDIO_SYNC_BIBLE_V2.md) and [`@dsa/kit/lib/audioSyncV2.ts`](file:///c:/Users/hrkes/Desktop/DsaAlgo/kit/lib/audioSyncV2.ts)

## Permanent pipeline

```text
VERIFIED SCRIPT
→ MP3
→ EXACT WORD-SYNC JSON
→ SYNC VALIDATION (tools/validate-sync.mjs)
→ STABLE WORD IDS & DERIVED PAUSES
→ SEMANTIC ANCHOR MANIFEST
→ SCENE PLAN
```

No script-only estimated timing is used for the final long-form scene plan.

## Important limitation

If MP3 exists but exact word timestamps do not:
- do not guess timestamps
- do not infer word frames from average speaking speed
- do not produce the final timed animation plan

Wait for exact sync data.

## Current verified sync JSON shape

Existing project sync files provided in this workspace use:

```json
{
  "audio_file": "01-intro-roadmap.mp3",
  "duration_ms": 43020,
  "duration_frames": 1291,
  "fps": 30,
  "word_count": 74,
  "words": [
    {
      "word": "Welcome",
      "start_ms": 0,
      "end_ms": 440,
      "start_frame": 0,
      "end_frame": 13
    }
  ]
}
```

Use the actual file structure supplied for the scene. Raw sync JSON is immutable source truth.

## V2 Core Principle: Ordered Index is Identity

In DSA explainer videos, words repeat often (e.g. `2`, `1`, `now`, `swap`).
- Word identity is defined by its 0-based array index: `0`, `1`, `2`...
- Stable planning ID: `W0000`, `W0001`, `W0042`
- Scoped ID for scene plans: `<scene-name>:W<4-digit-index>` (e.g. `10-trace-optimal:W0017`)

## Validation checklist (CLI: `node tools/validate-sync.mjs <file>`)

Before planning:

### File identity
- sync `audio_file` matches scene MP3
- scene script corresponds to that MP3

### FPS
- use sync JSON `fps` dynamically (no hardcoded 30 FPS in V2)

### Duration
Verify:
```text
duration_frames ≈ round(duration_ms × fps / 1000)
```

### Words
Check:
- word count matches array length exactly
- start frames and start ms are strictly monotonic
- each start <= end
- no negative timestamps
- no word ends beyond declared audio duration

### Pauses
Pauses are derived between adjacent words (`gapMs = words[i+1].startMs - words[i].endMs`):
- `micro` (< 150 ms): natural speech rhythm, no motion
- `natural` (150–299 ms): breathing hold or subtle cursor glide
- `teaching` (300–699 ms): intentional comprehension hold; let state settle
- `major` (≥ 700 ms): transition or step boundary

Do not fill every pause with decorative movement.

## Semantic Anchor Manifest (`sync/*.anchors.json`)

Map exact spoken words to semantic animation triggers:

```json
{
  "version": 2,
  "scene": "10-trace-optimal",
  "audio_file": "10-trace-optimal.mp3",
  "anchors": {
    "candidate-8-query": {
      "word_index": 52,
      "edge": "start",
      "offset_frames": 0,
      "trace_steps": ["OPT-001"],
      "note": "Candidate 8 query begins"
    }
  }
}
```

The scene code calls `sync.anchorFrame("candidate-8-query")`.

## Sync-to-plan artifact

Before writing a scene plan, prepare an audio-anchor table:

| Anchor ID | Spoken phrase/word | Word ID | Frame Range | Trace IDs | Teaching purpose |
|---|---|---|---|---|---|
| A01 | "candidate eight" | W0052 | F649–F680 | OPT-001 | Candidate focus |

Also list pauses that will be actively used for comprehension or state settle.

## Hard rule

`duration_frames` from validated sync is the scene duration source of truth.
No estimated timing is ever accepted.
