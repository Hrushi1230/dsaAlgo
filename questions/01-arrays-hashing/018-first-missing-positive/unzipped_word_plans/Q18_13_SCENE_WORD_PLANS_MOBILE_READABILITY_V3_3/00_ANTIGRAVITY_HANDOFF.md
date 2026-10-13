# ANTIGRAVITY HANDOFF — Q18 Pre-Audio → Exact Word-Sync → Frame Plan

**DO NOT SKIP THE AUDIO GATE.** This package is a complete *semantic word plan*, NOT a timed final frame plan. It does not authorize invented audio, timestamps, W IDs, FPS, pause lengths, or scene durations.

## Required inputs

1. The source-exact `08_FINAL_ELEVENLABS_NARRATION.md` (hash in `00_META.json`).
2. `05_TRACE_MACHINE_CHECKED.json` + `05_VERIFIED_TRACES.md` and exact three Python targets (`07_CODE_TARGETS_NOT_SPOKEN.py`).
3. `Scene01..13_Word_Driven_Semantic_Plan.md`, each `Scene##_Anchor_Manifest.json`, and its `.md` audit.
4. Final **13 MP3s** for this approved script only; matching **validated exact word-sync JSON**, with ordered words, source-derived FPS, real durations, and stable Wxxxx identities.
5. Latest repository kit SHA/API recheck, Design/Motion/Morph/SVG bibles, `docs/00_PHASE7_COMPLETE_KIT_DRIVEN_VISUAL_GRAMMAR.md`, `docs/structures/01-array-sequence.md` and `02-hash-set.md`, and the saved `dsa-scene-planning_SKILL_V3_2_BOARD_NATIVE.md`.

## Exact frame-plan conversion algorithm

- Verify MP3 transcription exactly matches each Scene's approved phrase sequence; if materially different, stop and reconcile script/audio (do NOT invent substitutions).
- Validate each audio word’s ordered identity and timestamp interval. Parse from sync, not estimated WPM. Preserve all raw sync data.
- Resolve every `Snn:Axxx` source-ordered phrase into unique start/end word IDs. Repeated words matched by ordered occurrence and full phrase context, not first string match.
- For each resolved anchor write source word indices/IDs, edge semantics, exact `[startFrame,endFrameExclusive)` and actual pause category derived from adjacent timestamp gaps.
- Allocate semantic operations only inside their spoken word spans and actual silent gaps. Respect the permitted dependency order: observe/compare → resolve → mutate → settle → pointer advances.
- Attach machine-verified trace IDs to all execution events, especially BR001..023, SET001..013, OPT001..025; validate 61 distinct events in strict chronological order.
- Map code scene source lines to exact phrase IDs as listed; future lines fully hidden. Use `ChalkText(font="mono")` and approved chalk primitives directly, no dark CodeEditor chrome or synthetic console.
- Compare planned coordinates with rendered critical stills (first index/pointer, active set member, duplicate, each swap, all values placed, mismatch, caption overlaps). Fix and re-render until non-collision proven.
- Run no-guess gates: no future answer, no wrong HashSet order/bucket semantics, no moving slot/index geometry, no extra examples, no unreviewed shared components, no arbitrary transitions/holds.
- Only after final MP3 + W sync + frame audit + rendered QA may the result claim 100/100 post-audio approval.

## Kit and geometry authority

- **Frame size:** fixed authoring 1920×1080. Course background `theme.boardBg`, font `fonts.hand/mono` only from actual kit.
- **Roadmap:** `MasterRoadmapV2` full 1920×1080 scene01/13; Q18 completed ONLY at Scene13 after spoken, Q19 is next not completed.
- **Array:** `ArrayTrackV2` 8 fixed slots. Scenes03/10 `slotWidth=132 slotHeight=128 gap=20` anchored x350, primary y340; Scene06 `126×126 gap14` anchored x155. Compute actual slot/index/pointer final y extents from existing implementation before render.
- **Set membership:** irregular member field, fixed semantic centers (see Scene06), no sorted list, no HashSetTable dark bucket UI. `RoughCurve` boundary + `ChalkText` round-member values via current shared primitives; question-local composition only.
- **Code:** board-native monospace text. `ChalkCodeEditorV2` DARK IDE panel explicitly forbidden unchanged, no extension required for this specification. If implementation finds font/glyph-space deficiencies, stop for an explicit audited API decision rather than inventing a new component.
- **Question-local state:** owned by scene choreography, no global kit refactor. `BezierFlight` or `ArrayTrackV2.swap` only for true spoken moves; prefer native swap.

## Scene handoff continuity

01 Q18 activated → 02 unchanged master array introduced → 03 brute unchanged array exhaustive trace → 04 source-exact brute code → 05 repeated-scan cost/propose membership → 06 HashSet inserts+probes → 07 source-exact HashSet code → 08 O(n)-space failure → 09 home-index invariant/proof → 10 fixed-slot four swaps and mismatch → 11 source-exact optimal code → 12 derived costs and guards → 13 roadmap Q18 complete then Q19 next.

## Stop reasons

- MP3 or exact sync missing: **BLOCKED for exact-frame work**. Semantic plan remains usable.
- Any mismatch between machine trace, approved source script, and actual audio: **BLOCKED**, do not rewrite silently.
- Missing current kit import/property or no board-native faithful composition: **BLOCKED**, perform repository audit before any new build decision.
- A still reveals future state or collides caption/index/pointer: **BLOCKED**, adjust geometry & audit again.

**Ownership:** semantic WHAT/WHY/ORDER fixed here; audio owns WHEN. Antigravity implements only after timing resolution and final plan audit.
