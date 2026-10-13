# Q17 — Complete 10-scene word-driven animation plan (Gate A)

This package covers all approved narration scenes with full geometric / kit/ semantic plans. Scene01 is carried over from the previous reviewed audit, with its exact source anchors exported to JSON; Scenes02–10 were built sequentially, with `draft → audit → fix/verify → re-audit` per scene. All concepts are DIRECT board-native except the approved full-screen ROADMAP portions of Scenes01 and10.

## Source-locked facts

- Final narration: `Q17_Encode_Decode_Strings_Final_ElevenLabs_Narration.md`
- Planning skill: `dsa-scene-planning_SKILL_V3_2_BOARD_NATIVE.md` (the **V3.2 board-native global law**, not V3.1 trace-only)
- Primary strings: `['a#b', '', 'hello world', '42']`
- Encoded exact output: `3#a#b0#11#hello world2#42`
- Four half-open record intervals: `[0,5)`, `[5,7)`, `[7,21)`, `[21,25)`
- Scene04: exhaustive encode trace. Scene06: exhaustive decode trace. Other scenes short.
- Scene01 progress `16/227`, Scene10 progress after completion `17/227`, next Q18 First Missing Positive.

## Per-scene sequential audit outcomes

| Scene | Exact spoken anchors | Gate-A checks passed | Individual plan |
|---|---:|---:|---|
| 02 | 15 | 17/17 | `Scene02_WordDriven_Semantic_Plan_V3_2_Audited.md` |
| 03 | 14 | 17/17 | `Scene03_WordDriven_Semantic_Plan_V3_2_Audited.md` |
| 04 | 70 | 17/17 | `Scene04_WordDriven_Semantic_Plan_V3_2_Audited.md` |
| 05 | 11 | 17/17 | `Scene05_WordDriven_Semantic_Plan_V3_2_Audited.md` |
| 06 | 109 | 17/17 | `Scene06_WordDriven_Semantic_Plan_V3_2_Audited.md` |
| 07 | 15 | 17/17 | `Scene07_WordDriven_Semantic_Plan_V3_2_Audited.md` |
| 08 | 14 | 17/17 | `Scene08_WordDriven_Semantic_Plan_V3_2_Audited.md` |
| 09 | 13 | 17/17 | `Scene09_WordDriven_Semantic_Plan_V3_2_Audited.md` |
| 10 | 16 | 17/17 | `Scene10_WordDriven_Semantic_Plan_V3_2_Audited.md` |

**Scene01:** reviewed in prior turn with its original 12 structural checks, supplied unchanged. See `Scene01_Audit.md`.

## How to implement

1. Read V3.2 skill, then approved narration. Do not replace script with paraphrases.
2. Open a single scene plan, its machine-readable semantic anchor manifest, and audit report.
3. Verify current live repo kit APIs again. `CREATE SHARED` components are DESIGN PROPOSALS and require building reusable kit primitives before import. Use no black cards, including code.
4. Once final scene MP3 + validated exact word-sync exist, resolve each `Sxx:Ayyy` to stable `SceneXX:Wxxxx` source word identities and end-exclusive `[startFrame,endFrameExclusive)` from sync. No guessed durations.
5. Implement, render critical frames, inspect font sizes, pointer/geometry collisions, caption clearance and all algorithm states. Gate B/final 100-point audit only then.

## Critical pitfall

`ChalkCodeEditorV2` presently has an opaque dark IDE-like root + header chrome, **forbidden by the project's approved V3.2 non-roadmap board-native rule**. EXTEND it to transparent board-native mode preserving its other use cases. String-list, record, growing-stream and indexed-character-tape primitives are proposed **CREATE SHARED**: no current verified import path is claimed for them.

The output is **not** a final audio-synchronized frame plan and **does not** claim rendered or 100/100 final QA.
