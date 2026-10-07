# KIT REUSE MATRIX — PHASE 7

This table summarizes the preferred primitive composition for each structure.

| Structure | Main container/entity | Relation primitive | Movement primitive | Special rule |
|---|---|---|---|---|
| Array | RoughBox slots | pointer RoughLine | BezierFlight | slots fixed |
| Hash Set | round tokens / RoughCurve field | query path | BezierFlight | no order |
| Hash Map | RoughBox key/value | RoughLine | BezierFlight | key→value relation |
| Matrix | RoughBox cells | temporary RoughLine | BezierFlight / PathTracer | coordinates fixed |
| Linked List | RoughBox node + port | EvolvingPath | edge redraw | relations define list |
| Stack | RoughBox items | top marker | BezierFlight | top-only access |
| Queue | RoughBox items | lane/gates | BezierFlight | FIFO gates |
| Tree | round nodes | RoughLine | PathTracer | hierarchy stable |
| Heap | round nodes + Array slots | RoughLine | BezierFlight | local priority |
| Graph | round nodes | RoughLine/EvolvingPath | PathTracer | coordinates frozen |
| Union-Find | round nodes | parent RoughLine | edge redraw | root representative |
| Trie | round nodes | char-labeled edges | PathTracer | terminal marker |
| Intervals | axis segments | shared axis | line merge/expand | spatial ranges |
| Recursion | compact call boxes | RoughLine | PathTracer | computation states |
| DP | RoughBox cells | dependency edges | CountUp / bounded write | solved states |
| Bits | compact cells/text | row alignment | bounded shift | bit columns |
| Strings | compact char slots | alignment/fallback path | pattern shift | text fixed |
| Math | representation-specific | representation-specific | representation-specific | truthful space |
