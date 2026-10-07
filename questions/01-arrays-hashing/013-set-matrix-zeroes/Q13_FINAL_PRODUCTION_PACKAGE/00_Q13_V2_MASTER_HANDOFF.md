# Q13 — V2 Antigravity / Phase12 Handoff

## Authority
Use the V2 verified script and V2 Phase-9 plans in this folder.

Do NOT use the earlier Phase-9 package as final authority.

## Critical Method1 correction
Scene03 and Scene04 now use the exact same baseline algorithm:

```text
immutable original
→ scan original zero sources
→ zero corresponding working row
→ zero corresponding working column
```

## Timing law
No seconds/frames are locked here.

After the user provides final MP3 + exact word sync:

```text
V2 Phase9 anchor
→ exact word IDs
→ exact seconds
→ exact 30fps [startFrame,endFrameExclusive)
```

Do not redesign V2 semantics during Phase12.

## Implementation unknowns
Read real repository source before using:
- Matrix/Grid component/API
- Array V2 props/orientation
- code-editor component/API
- roadmap component/API
- deterministic geometry


---

# Post-audio responsibility — Antigravity

ChatGPT's planning responsibility ends at the V2 Phase-9 semantic plans and final metadata package.

After the user supplies the final audio and exact word-sync JSON, Antigravity owns:

```text
sync normalization
→ exact anchor matching
→ exact seconds
→ exact 30fps frames
→ per-scene frame-plan audit
→ implementation
→ typecheck
→ render
→ visual/state QA
→ automatic scene-to-scene loop
```

Read first:

```text
ANTIGRAVITY_POST_AUDIO_WORDSYNC_TO_FRAMES.md
```

Every Scene01–Scene13 Phase-9 plan also contains the required local conversion contract.

Do not ask ChatGPT to invent approximate frames when exact sync exists.
