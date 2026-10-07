---
name: dsa-dry-run
description: Executes each selected DSA algorithm completely on the exact master testcase, then independently re-executes it before any narration is allowed.
---

# DSA Dry Run V2

## Core rule

```text
ALGORITHM
→ ACTUAL DRY RUN
→ INDEPENDENT RECHECK
→ VERIFIED TRACE
→ SCRIPT MAY BEGIN
```

No exceptions.

## First dry run

Execute the actual selected algorithm using the exact master testcase.

Record every meaningful state.

Each trace step must include:

```text
STEP ID:
LOOP / ITERATION:
BEFORE STATE:
ACTIVE VALUE / NODE:
OBSERVATION / CONDITION:
LOOKUP / COMPARISON RESULT:
DECISION:
ACTION / MUTATION:
POINTER MOVEMENT:
COUNTER / ACCUMULATOR UPDATE:
AFTER STATE:
STOP CONDITION IF ANY:
```

Only include fields relevant to the algorithm, but never omit a state mutation.

## Structure-specific minimum state

### Array
- values
- relevant indices
- pointers
- swap/move
- confirmed/unknown ranges

### HashSet / HashMap
- query key/value
- hit/miss
- insert/update
- duplicate behavior
- start/skip behavior where applicable

### Linked List
- current nodes
- saved next reference
- detached/attached edges
- prev/curr/next state

### Stack
- stack before
- incoming item
- push/pop condition
- stack after

### Queue / Deque
- front/rear
- queue state
- enqueue/dequeue

### Tree / Graph
- active node
- frontier
- visited
- edge followed
- resulting frontier/visited state

### DP
- state being computed
- dependencies
- recurrence result
- table/memo after write

### Backtracking
- choice
- path before
- recursive action
- success/failure
- undo

## Runtime-order honesty

If the language/runtime does not guarantee iteration order:
- never claim it does
- use algorithm-independent reasoning, or
- define a deterministic **teaching traversal** explicitly

A teaching traversal must never be misrepresented as runtime container order.

## Independent recheck

Re-run from the initial input without copying the first trace.

Compare:
- branch decisions
- lookups
- swaps/mutations
- pointer updates
- counters
- output

If any mismatch occurs:
- mark trace unverified
- resolve before scripting

## Verification footer

The final trace must state:

```text
VERIFIED: YES
IMPLEMENTATION/ALGORITHM VERSION:
MASTER TESTCASE:
FINAL OUTPUT:
RECHECK RESULT: MATCH
```

If this footer cannot honestly be written, scripting is blocked.

## Script binding

Assign stable step IDs, e.g.:

```text
BRUTE-001
BRUTE-002
BETTER-001
OPT-001
OPT-002
```

Later script and scene plans cite these IDs.
