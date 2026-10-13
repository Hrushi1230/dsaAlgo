# Q18 · Pre-Audio Word-Driven Animation Plans — 13 Scenes

**Source of truth:** restarted Phase 08 verified narration (SHA256 `37e4098223b53b17e42bf48ed7121d9311236b7b4dbe8cf18f33ff194e239821`). Old Q18 8-scene and first 13-scene drafts are not authoritative. Stage = **pre-audio semantic**; no MP3 and no exact sync. All plans are `WHAT / WHY / ORDER / HIDDEN / PERSISTENCE / KIT`, not frames.

**Total:** 13 scene-specific Markdown plans, 13 audits, 13 machine-readable source-ordered anchor manifests; 212 exact narration anchors and 61 trace operation IDs.

## Authoritative pipeline

`VERIFIED TRACE → VERIFIED SCRIPT → CURRENT KIT AUDIT → SEMANTIC WORD PLAN (this package) → FINAL MP3 → EXACT WORD SYNC → Wxxxx WORD-ID RESOLUTION → EXACT FRAME PLAN → FRAME AUDIT → IMPLEMENTATION HANDOFF → RENDER QA`.

## Loop executed

Each scene 01..13 was authored, checked for phrase-order/trace coverage, layout ownership, no spoiled state, and actual kit APIs; only then was the following scene prepared. The audit `.md` for each scene records what can/cannot be confirmed before audio.

## Scene listing

| Scene | Beat | Spoken anchors | Verified algorithm event IDs | Output files |
|---|---|---:|---:|---|
| 01 | ROADMAP | 5 | 0 | `Scene01_Word_Driven_Semantic_Plan.md`, `Scene01_Audit.md`, `Scene01_Anchor_Manifest.json` |
| 02 | UNDERSTAND + BRUTE IDEA | 13 | 0 | `Scene02_Word_Driven_Semantic_Plan.md`, `Scene02_Audit.md`, `Scene02_Anchor_Manifest.json` |
| 03 | TRACE · BRUTE | 39 | 23 | `Scene03_Word_Driven_Semantic_Plan.md`, `Scene03_Audit.md`, `Scene03_Anchor_Manifest.json` |
| 04 | CODE · BRUTE | 11 | 0 | `Scene04_Word_Driven_Semantic_Plan.md`, `Scene04_Audit.md`, `Scene04_Anchor_Manifest.json` |
| 05 | LIMITATION + HASHSET IDEA | 10 | 0 | `Scene05_Word_Driven_Semantic_Plan.md`, `Scene05_Audit.md`, `Scene05_Anchor_Manifest.json` |
| 06 | TRACE · HASHSET | 21 | 13 | `Scene06_Word_Driven_Semantic_Plan.md`, `Scene06_Audit.md`, `Scene06_Anchor_Manifest.json` |
| 07 | CODE · HASHSET | 9 | 0 | `Scene07_Word_Driven_Semantic_Plan.md`, `Scene07_Audit.md`, `Scene07_Anchor_Manifest.json` |
| 08 | LIMITATION BRIDGE | 7 | 0 | `Scene08_Word_Driven_Semantic_Plan.md`, `Scene08_Audit.md`, `Scene08_Anchor_Manifest.json` |
| 09 | OPTIMAL IDEA | 17 | 0 | `Scene09_Word_Driven_Semantic_Plan.md`, `Scene09_Audit.md`, `Scene09_Anchor_Manifest.json` |
| 10 | TRACE · IN-PLACE | 52 | 25 | `Scene10_Word_Driven_Semantic_Plan.md`, `Scene10_Audit.md`, `Scene10_Anchor_Manifest.json` |
| 11 | CODE · OPTIMAL | 14 | 0 | `Scene11_Word_Driven_Semantic_Plan.md`, `Scene11_Audit.md`, `Scene11_Anchor_Manifest.json` |
| 12 | COMPLEXITY + MISTAKES | 6 | 0 | `Scene12_Word_Driven_Semantic_Plan.md`, `Scene12_Audit.md`, `Scene12_Anchor_Manifest.json` |
| 13 | RECAP + ROADMAP | 8 | 0 | `Scene13_Word_Driven_Semantic_Plan.md`, `Scene13_Audit.md`, `Scene13_Anchor_Manifest.json` |

## Hard constraints verified in present scope

- **One actual master input** `[3, 4, -1, 1, 1, 10, 0, 2]`, no mini tests or second inputs inserted by a plan.
- **Full trace scenes** 03 (23 BR comparisons), 06 (8 inserts + 5 HashSet probes), 10 (25 OPT events and 4 swaps). All other scenes have **zero** fabricated trace operations.
- **Idea scenes** explain semantics without running future traces. **Code scenes** show real approved Python lines, give short *why* and keep later lines invisible until speech.
- **HashSet is unordered membership**, not fake indexed buckets or sorted iteration. Existing `HashSetTable` has dark bucket-card UI, therefore not used unchanged.
- **Board-native** for all scenes except roadmap full-screen `MasterRoadmapV2`. `ChalkCodeEditorV2` current dark editor isn't reused unchanged; code is composed from verified `ChalkText` on green directly, no new kit needed.
- **Stable data structures** with declared coordinates; array indices/slots never move; true swaps move occupants only. **Caption safe** y960–1040.
- **Only verified kit components**: ArrayTrackV2, PointerLaneV2 via ArrayTrackV2, ChalkText, RoughLine/RoughBox/RoughCurve, MasterRoadmapV2, optional SceneEdgeTitle, and post-sync Captions. Every plan has actual props and reuse decisions.
- **No guessed seconds, frames, MP3, Wxxxx IDs**. Time contracts unresolved until final MP3 and validated exact sync.

## Review constraints not yet passed

Geometric placement is an authored specification; still-frame rendering, glyph overflow and collision audit are pending Antigravity implementation. The final 100/100 gate requires real audio/sync and frame review. These pre-audio plans are *structurally audited*, not render-approved.
