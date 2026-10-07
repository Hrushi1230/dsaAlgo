# Morph Decision Matrix V2
## Quick routing guide

Use this BEFORE choosing an animation primitive.

| Situation | Identity | Persistence | Cardinality | Correct class | Do NOT |
|---|---|---:|---:|---|---|
| Array value changes slot | SAME | N/A | 1→1 | T1 MOVE | Path morph |
| Pointer changes index | SAME | N/A | 1→1 | T1 MOVE | Recreate pointer |
| Active window gets wider | SAME | N/A | 1→1 | T2 RESIZE | New unrelated band |
| Same graph edge reroutes (same route class) | SAME | N/A | 1→1 | T3 PATH_MORPH | Interpolate across obstacle (crosses forbidden region) |
| Route moves across fixed obstacle | REROUTED | NO | 1→1 | T4 ERASE/DRAW | Direct path interpolation through obstacle |
| Old edge replaced by different endpoints | REPLACED | NO | 1→1+ | T4 ERASE/DRAW | Morph old edge into new semantics |
| Input value enters HashSet while input stays | COPY | YES | 1→1 | T5 PROJECT | Consume original |
| Duplicate arrives at existing set member | DERIVED CHECK | YES | 1→existing | T5 + REJECT | Fuse two identities |
| Two intervals become union | MERGED | NO | 2→1 | T6 MERGE | One-path morph |
| One range becomes left/right partitions | SPLIT | maybe | 1→2 | T7 SPLIT | One path into unrelated children |
| Heap array becomes heap tree | REPRESENTATION | depends | n→n | T8 HANDOFF | Whole-scene liquid morph |
| Trace concept becomes code guide | REPRESENTATION | NO | 1→1 mappings | T8 HANDOFF | Pretend structure literally becomes code |
| Title card becomes trace | REPLACED | NO | 1→1 scene | T9 REPLACE | Morph title into data structure |
| O(n²) curve vs O(n log n) curve | DIFFERENT CONCEPTS | YES | 1+1 | draw separate | Morph one complexity class into another |
| Text in persistent bubble changes | content replacement | container stays | 1→1 | rewrite/crossfade | Glyph path morph |

---

# Five-question gate

```text
1. Same semantic entity?
2. Source remains?
3. Cardinality?
4. Relationship or object?
5. Does geometric continuity teach something?
```

Routing:

```text
same + position only            → MOVE
same + geometry only            → RESIZE / PATH_MORPH
source remains                  → CLONE / PROJECT
different relation              → ERASE / DRAW
many→1                          → MERGE
1→many                          → SPLIT
same concept, different view    → REPRESENTATION HANDOFF
unrelated                       → REPLACE
```
