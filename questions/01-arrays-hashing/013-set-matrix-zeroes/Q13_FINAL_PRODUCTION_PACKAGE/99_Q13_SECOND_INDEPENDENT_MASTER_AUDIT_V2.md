# Q13 — Set Matrix Zeroes (LC73)
# SECOND INDEPENDENT SCRIPT + PHASE-9 AUDIT — V2

## Final verdict

**PASS AFTER 6 REAL CORRECTIONS**

This re-audit did **not** trust the previous PASS files. It re-read:
- project `SKILL.md`;
- the verified script;
- all 13 actual Phase-9 plan files;
- anchor order;
- Method1/2/3 algorithm state;
- no-spoiler boundaries;
- unresolved component/API claims;
- timing/frame guesses.

## Important finding

The previous package was **not fully safe to call locked**.

The second audit found one significant teaching inconsistency and five plan-level precision problems.

### Correction 1 — Scene03 Trace → Code mismatch — SIGNIFICANT

Old Scene03 trace:
```text
for a working cell:
check whether its original row / original column contains zero
→ decide that cell
```

Scene04 code:
```text
scan immutable original
when an original zero is found
→ zero its working row
→ zero its working column
```

Both are correct full-copy strategies, but they are **not the same execution**.

That violates the course law:
```text
APPROACH TRACE
→ SAME APPROACH CODE
```

**V2 repair:** Scene03 narration and Phase-9 plan were rewritten to scan original zero sources and directly mutate the same working row/column that Scene04 code mutates.

### Correction 2 — Scene02 invented row-major detail

Old plan said a `row-major` scan later reaches `(1,2)`. For the shown immediate mutation, a literal row-major traversal would encounter other newly-created row0 zeros first.

The script never specifies traversal order.

**V2 repair:** traversal order is intentionally unspecified. The visual demonstrates one valid later-created-zero failure only.

### Correction 3 — Scene04 nonexistent nonzero branch risk

The real code contains:
```python
if original[r][c] == 0:
```

It does **not** contain:
```python
if original[r][c] != 0:
```

**V2 repair:** the nonzero narration shows a semantic false-case only. The actual `== 0` condition line types only when the narration reaches the zero case.

### Correction 4 — Scene06 word-to-mutation alignment

`The same happens to row three` already says the row3 mutation happens.

**V2 repair:** row3 becomes zero on that phrase. `Its row marker is also true` then confirms the already-known cause instead of delaying the mutation.

### Correction 5 — Scene12 unspoken N notation

The script says `O(mn)` and talks about number of matrix cells; it never introduces visible `N`.

**V2 repair:** graphs use axis `number of matrix cells` and spoken labels such as `O(mn)`. No extra visible `N` symbol is introduced.

### Correction 6 — Scene13 local 13/18 roadmap count

The narration says only global `13 / 227`, Q13 done, and Q14 up next.

**V2 repair:** no new local `13 / 18` count is planned. If the permanent roadmap already displays a local count, implementation must derive it from real roadmap data and keep it quiet; Phase9 does not invent or animate it.

---

# Exact narration-anchor audit

| Scene | Anchors checked | Mismatches | V2 status |
|---:|---:|---:|---|
| 01 | 14 | 0 | PASS |
| 02 | 28 | 0 | PASS AFTER V2 REPAIR |
| 03 | 37 | 0 | PASS AFTER SCRIPT + PLAN REPAIR |
| 04 | 21 | 0 | PASS AFTER V2 REPAIR |
| 05 | 18 | 0 | PASS |
| 06 | 42 | 0 | PASS AFTER V2 REPAIR |
| 07 | 26 | 0 | PASS |
| 08 | 29 | 0 | PASS |
| 09 | 30 | 0 | PASS |
| 10 | 110 | 0 | PASS |
| 11 | 43 | 0 | PASS |
| 12 | 51 | 0 | PASS AFTER V2 REPAIR |
| 13 | 47 | 0 | PASS AFTER V2 REPAIR |

Total anchor mismatches after V2 repair:

```text
0
```

---

# Independent algorithm audit

Executable implementations were independently tested across:
- 1×1;
- single row;
- single column;
- rectangular matrices;
- square matrices;
- random zero/nonzero matrices.

```text
Method1 full copy          PASS
Method2 row/col arrays     PASS
Method3 boundary markers   PASS
```

Locked master final result:

```text
[
 [0,0,0,0,0],
 [0,7,0,0,10],
 [0,0,0,0,0],
 [0,0,0,0,0],
 [0,22,0,0,25]
]
```

---

# Method1 V2 consistency audit

```text
Scene03 trace:
scan immutable original zeros
→ zero working row
→ zero working column

Scene04 code:
scan immutable original zeros
→ zero working row
→ zero working column

Scene12 complexity:
O(mn + z(m+n))
worst O(mn(m+n))
```

All three now describe the **same exact baseline implementation**.

---

# No-guessed-timing audit

```text
numeric frame ranges before sync = 0
guessed second ranges            = 0
```

Exact frame conversion still waits for:
```text
FINAL MP3
+ EXACT WORD-SYNC JSON
```

---

# Component / API hallucination audit

Safe:
- `RoughBox`, `ChalkText`, existing relation primitives named as kit grammar;
- Array V2 required by project lock;
- permanent roadmap reuse required;
- production code component reuse required.

Still intentionally unresolved:
```text
actual Matrix/Grid reusable component/API
actual Array V2 props/orientation
actual production code-editor API
actual permanent roadmap API
exact deterministic layout geometry
```

These must be inspected in the repository before implementation.

No V2 plan is authorized to fabricate those APIs.

---

# Final lock

```text
SCRIPT / TRACE / CODE CONSISTENCY = PASS
13 SCENE ANCHOR ORDER            = PASS
ALGORITHM STATE                  = PASS
NO-SPOILER                       = PASS
NO GUESSED TIMING                = PASS
NO INVENTED API                  = PASS
```

**Use the V2 package below for audio/sync and future Phase12.  
Do not use the earlier Phase9 ZIP as the final source of truth.**
