# Phase 08 — Fresh Script Audit and Repair Log

**Status:** PASS for **script gate only**; not an MP3/sync/frame-plan audit.

## Rejection addressed

- Older Q18 drafts are superseded; this is freshly authored from the Phase 01–06 decisions and independently verified algorithm trace.
- IDEA scenes explain how and why, rather than being reduced to slogans.
- CODE scenes give a short rationale for each important line/guard; they do not restate the dry run.
- TRACE scenes are exhaustive and bound to machine-verified events.
- One master testcase; no tiny illustrative testcases in narration.

## Automatic and editorial gate checks

| Check | Evidence | Result |
|---|---|---|
| 13 scene IDs unique | 01…13 contiguous | PASS |
| Scene 03 exhaustive brute | 23 comparisons = 23 in-order spoken anchors | PASS |
| Scene 06 exhaustive HashSet | 13 events = 13 in-order spoken anchors | PASS |
| Scene 10 exhaustive optimal | 25 events = 25 in-order spoken anchors | PASS |
| No arbitrary 2nd testcase in narration | single input appears exactly once; no edge-case subexample | PASS |
| All key idea/code rationales exist | scenes 02, 04, 05, 07, 08, 09, 11, 12 inspected against required teaching statements | PASS |
| All method code targets execute | three separate functions returned `5` on master; in-place state matched | PASS |
| Independent trace matched | 55,986 exhaustive + 2,000 randomized cases | PASS |
| No fabricated audio / frames | no MP3 / word IDs / guessed durations in narration | PASS |
| Correct course roadmap | 17→18, next 19 Valid Palindrome | PASS |

## Exact trace-to-narration anchor ledger

Each row maps **one traced algorithm event** to the corresponding exact spoken phrase, in chronological order. An entry/stop event may share the same spoken thought, but every state is present.

| Trace ID | Scene | Exact spoken anchor |
|---|---|---|
| BR-001 | 03 | Three is not one. |
| BR-002 | 03 | Four is not one. |
| BR-003 | 03 | Minus one is not one. |
| BR-004 | 03 | At index three … we find one. |
| BR-005 | 03 | Three is not two. |
| BR-006 | 03 | Four is not two. |
| BR-007 | 03 | Minus one is not two. |
| BR-008 | 03 | The first one is not two. |
| BR-009 | 03 | The second one is not two. |
| BR-010 | 03 | Ten is not two. |
| BR-011 | 03 | Zero is not two. |
| BR-012 | 03 | At the last index … we find two. |
| BR-013 | 03 | At index zero … three is already there. Found. |
| BR-014 | 03 | Index zero has three … not four. |
| BR-015 | 03 | Index one has four … found. |
| BR-016 | 03 | Three … not five. |
| BR-017 | 03 | Four … not five. |
| BR-018 | 03 | Minus one … not five. |
| BR-019 | 03 | One … not five. |
| BR-020 | 03 | The second one … not five. |
| BR-021 | 03 | Ten … not five. |
| BR-022 | 03 | Zero … not five. |
| BR-023 | 03 | Two … not five. |
| SET-001 | 06 | Index zero has three … add three. |
| SET-002 | 06 | Index one has four … add four. |
| SET-003 | 06 | Index two has minus one … add minus one. |
| SET-004 | 06 | Index three has one … add one. |
| SET-005 | 06 | Index four has another one. One is already present … so the set stays unchanged. |
| SET-006 | 06 | Index five has ten … add ten. |
| SET-007 | 06 | Index six has zero … add zero. |
| SET-008 | 06 | Index seven has two … add two. |
| SET-009 | 06 | Now candidate one … membership check: present. |
| SET-010 | 06 | Candidate two … present. |
| SET-011 | 06 | Candidate three … present. |
| SET-012 | 06 | Candidate four … present. |
| SET-013 | 06 | Candidate five … not present. |
| OPT-001 | 10 | Start at index zero. Its value is three. |
| OPT-002 | 10 | Swap them. Three is now at index two |
| OPT-003 | 10 | Minus one is outside one through eight … so stop there. |
| OPT-004 | 10 | Move to index one. Its value is four. |
| OPT-005 | 10 | Four belongs at index three, which contains one. Swap. |
| OPT-006 | 10 | One belongs at index zero, which holds minus one. Swap again. |
| OPT-007 | 10 | Minus one comes back to index one … so stop. |
| OPT-008 | 10 | Index two contains three … already in its home. |
| OPT-009 | 10 | No swap. |
| OPT-010 | 10 | Index three contains four … already in its home. |
| OPT-011 | 10 | No swap. |
| OPT-012 | 10 | Index four contains one. Its home is index zero. |
| OPT-013 | 10 | This is a duplicate … so do not swap. |
| OPT-014 | 10 | Index five contains ten. |
| OPT-015 | 10 | Ten is larger than eight … so skip. |
| OPT-016 | 10 | Index six contains zero. |
| OPT-017 | 10 | Zero is not positive … so skip. |
| OPT-018 | 10 | Index seven contains two. |
| OPT-019 | 10 | Swap. Two reaches index one |
| OPT-020 | 10 | Minus one cannot be placed … so the placement pass ends. |
| OPT-021 | 10 | At index zero … expect one. We have one. |
| OPT-022 | 10 | At index one … expect two. We have two. |
| OPT-023 | 10 | At index two … expect three. We have three. |
| OPT-024 | 10 | At index three … expect four. We have four. |
| OPT-025 | 10 | At index four … expect five. But we have one. |

## Density check (narration words only)

| Scene | Words | Ownership |
|---:|---:|---|
| 01 | 37 | MINIMAL but reasoned |
| 02 | 109 | MINIMAL but reasoned |
| 03 | 207 | FULL TRACE |
| 04 | 101 | MINIMAL but reasoned |
| 05 | 109 | MINIMAL but reasoned |
| 06 | 140 | FULL TRACE |
| 07 | 82 | MINIMAL but reasoned |
| 08 | 76 | MINIMAL but reasoned |
| 09 | 193 | MINIMAL but reasoned |
| 10 | 320 | FULL TRACE |
| 11 | 138 | MINIMAL but reasoned |
| 12 | 103 | MINIMAL but reasoned |
| 13 | 57 | MINIMAL but reasoned |

## Phase-08 audit → fix → re-audit

- Draft review found machine-like technical markup and awkward `nums[i]` pronunciation in clean narration; these were repaired in the ElevenLabs file while keeping the algorithmic meaning identical.
- Re-audit: complete anchor coverage, all three implementations, no new testcases, concise code why, and the single optimal invariant all PASS.
- **BLOCKED until external artifacts exist:** final MP3, word-sync JSON, Wxxxx identities, exact frames, rendered visual collisions. None of these are claimed approved here.
