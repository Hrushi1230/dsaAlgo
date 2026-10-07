# 17 — Advanced String Algorithms
## GRAMMAR STATUS: COMPLETE

This family covers visual grammars such as KMP, Rabin-Karp, prefix matching, rolling hash, and alignment-based string reasoning.

## Core identity

```text
TEXT = STABLE SEQUENCE
PATTERN = ALIGNMENT / WINDOW
MATCH STATE = OVERLAY
```

## Kit mapping

```text
character slot       → compact RoughBox
character            → ChalkText
pattern row          → RoughBox track
alignment marker     → RoughLine
matched prefix band  → subtle region fill
fallback arrow       → EvolvingPath / RoughCurve
LPS / prefix array   → Array grammar
rolling window       → RoughBox/region bracket
hash value           → ChalkText / CountUp
```

## KMP composition

```text
TEXT
A B A B A C A B A

PATTERN
    A B A C

LPS
0 0 1 2
```

Text remains fixed.
Pattern alignment changes.

## KMP operations

### MATCH
Current character pair focuses.

### MISMATCH
Mark rejected pair.

### FALLBACK
Use LPS relation to change pattern state.
Do not rewind text index incorrectly.

### SHIFT WITHOUT RECHECK
Pattern alignment changes while text remains stable.

## Rabin-Karp

Show:
- stable text,
- rolling window,
- pattern hash,
- current window hash,
- exact verification only on hash match if algorithm requires it.

## State colors

```text
current compare  → pivot
candidate/match  → cyan
confirmed match  → good
mismatch         → warn
history          → chalkDim
```

## False semantics

Never:
- move the text row for every alignment,
- imply LPS is character data rather than prefix-state metadata,
- animate pattern shifts as random card movement,
- use generic HashMap visuals for rolling hash values.

## Permanent rule

```text
TEXT STAYS FIXED.
THE SEARCH STATE MOVES ACROSS IT.
```
