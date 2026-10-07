# 08 — Tree / BST
## GRAMMAR STATUS: COMPLETE

## Core identity

Tree:

```text
ROOTED HIERARCHY
PARENT → CHILD
```

BST adds:

```text
LEFT < NODE < RIGHT
```

only when it is actually a BST.

## Kit mapping

```text
node             → round/ellipse chalk node
node label       → ChalkText
parent-child edge→ RoughLine / EvolvingPath
active path      → PathTracer
pointer label    → ChalkText
subtree region   → subtle RoughCurve / hachure when needed
```

Do not use RoughBox as the default node shape.

## Composition

```text
              (8)
             /   \
           (4)   (12)
          / \     / \
        (2)(6) (10)(14)
```

Root at top.
Levels descend vertically.
Sibling spacing preserves hierarchy.

## Adaptive layout

Depends on:
- depth,
- branching,
- available width.

Rules:
- stable node coordinates during traversal,
- minimize crossings,
- preserve parent-child direction,
- compress deep trees vertically if needed,
- do not relayout on every active state.

## Operations

### TRAVERSE
Current node + active edge focus.
History dims.

### SEARCH
Show decision path.
For BST, optionally annotate left/right comparison.

### INSERT
New node appears at resolved child position.
New edge draws after location is known.

### DELETE
Show actual structural cases only when lesson teaches them:
leaf / one child / two children.

## State colors

```text
current node    → pivot
candidate/query → cyan
confirmed       → good
rejected branch → warn/dim
history         → chalkDim
```

## False semantics

Never:
- imply every binary tree is BST,
- move node positions while traversal state changes,
- treat screen x-position alone as semantic ordering for non-BST trees,
- create generic card nodes.

## Permanent rule

```text
HIERARCHY IS STABLE.
TRAVERSAL STATE CHANGES WITHOUT RELAYOUTING THE TREE.
```
