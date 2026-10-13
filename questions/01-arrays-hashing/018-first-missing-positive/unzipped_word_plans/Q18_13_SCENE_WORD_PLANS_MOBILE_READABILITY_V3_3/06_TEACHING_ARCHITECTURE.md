# Phase 06 — Teaching Architecture: 13 scene assignments

The three methods earn three real trace + code pairs. All non-trace scenes own only their necessary teaching job.

| # | Beat type | Pedagogical job | Explicitly avoid |
|---|---|---|---|
| 01 | ROADMAP | Q17 completed, activate Q18. | Solution/answer spoiler. |
| 02 | UNDERSTAND + BRUTE IDEA | Define first missing positive and why ascending candidate search is correct. | Brute trace; extra tiny examples. |
| 03 | TRACE 1 | Execute all 23 brute comparisons and return 5. | Omitting comparisons or introducing a second testcase. |
| 04 | CODE 1 | Explain why `candidate`, reset `found`, inner scan, `break`, return, increment are necessary. | Repeating Scene 03. |
| 05 | LIMITATION + BETTER IDEA | Derive repeated-work cost, set membership, duplicate semantics, correctness. | HashSet trace. |
| 06 | TRACE 2 | Show all 8 set insert attempts and 5 probes in input/probe order. | Assuming set storage/iteration order. |
| 07 | CODE 2 | Brief “why” for set construction, candidate loop, membership stop. | Repeating Scene 06. |
| 08 | LIMITATION BRIDGE | Show why `O(n)` extra storage fails and ask about input slots. | Prematurely executing optimal algorithm. |
| 09 | OPTIMAL IDEA | Prove bound `[1,n+1]`, home index `x-1`, while recheck, duplicate/out-of-range guards, first mismatch. | Optimal dry run. |
| 10 | TRACE 3 | Execute all fixed-index swaps/stops and first mismatch scan. | Skipped swap, premature answer. |
| 11 | CODE 3 | Why each guard and `while` exists, why scan and fallback work. | Re-tracing all swaps. |
| 12 | COMPLEXITY + ESSENTIAL MISTAKES | Derive worst-case/expected bounds and total swap bound; two real guards. | Multiple edge-case demos. |
| 13 | RECAP + ROADMAP | One-line method progression, transfer `value → slot`, update 18/227 → Q19. | Second lesson. |

## Phase-06 audit → fix → re-audit

- Previous rejected structure compressed idea/code logic. Repair: allocate *reasoning* to their correct beats, but never a second trace.
- Re-audit: three distinct trace scenes, three line-rationale code scenes, meaningful limitation bridges, 13 scenes, one master testcase; **PASS**.
