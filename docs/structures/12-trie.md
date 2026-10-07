# 12 — Trie
## GRAMMAR STATUS: COMPLETE

## Core identity

```text
PREFIX STATE TREE
CHARACTER ON EDGE
TERMINAL MARKER = COMPLETE WORD
```

## Kit mapping

```text
prefix node      → round/compact chalk node
character edge   → RoughLine / EvolvingPath
character label  → ChalkText
terminal marker  → small filled chalk dot/ring
active prefix    → PathTracer
word/prefix text → ChalkText
```

## Composition

```text
             ROOT
             /   \
           c       d
           |       |
          ( )     ( )
           |       |
           a       o
           |       |
          ( )     (●)
           |
           t
           |
          (●)
```

Character labels belong to edges.
Terminal state belongs to node.

## Adaptive layout

Width depends on branching.
Depth corresponds to prefix length.
Keep sibling branches readable.
Do not reflow nodes during traversal.

## Operations

### INSERT
Trace existing prefix.
Create only missing suffix nodes/edges.
Mark terminal at final node.

### PREFIX
Trace prefix path.
Success does not require terminal marker.

### SEARCH WORD
Trace full word.
Final node must be terminal.

### WILDCARD
Only if problem requires it; visually branch from wildcard position.

## State colors

```text
current char/path → pivot
candidate branch  → cyan
terminal success  → good
missing edge      → warn
history           → chalkDim
```

## False semantics

Never:
- put word characters as unrelated node cards by default,
- treat any existing prefix as a complete word,
- remove terminal semantics,
- redraw Trie as generic BST.

## Permanent rule

```text
A PATH CAN EXIST WITHOUT A COMPLETE WORD.
TERMINAL STATE DECIDES WORD EXISTENCE.
```
