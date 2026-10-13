# Q16 — Phase 9 V3 Authoritative Master Handoff

## Locked truth

```text
nums = [1,-1,2,1,0,-2,3]
k = 3
answer = 6
```

Valid subarrays:
```text
0..3
0..4
1..6
2..3
2..4
6..6
```

Method1:
```text
fix start → reset running sum → extend end → update sum → count match
O(n²) time
O(1) auxiliary space
```

Method2:
```text
update prefix
→ needed = prefix - k
→ query EARLIER prefix frequency
→ answer += frequency
→ store current prefix

expected O(n) time
O(n) auxiliary space
```

Invariant:
```text
frequency[x] = number of EARLIER prefix positions whose sum equals x
```

## 9-scene ownership

```text
01 roadmap activation
02 understand + Method1 idea
03 Method1 COMPLETE trace — no skipped algorithm state
04 Method1 code + rough complexity graphs
05 optimal idea ONLY — no master trace
06 Method2 COMPLETE trace — exact step-by-step state
07 Method2 code + rough complexity graphs
08 minimal compare/mistakes/edge cases — point → clear
09 minimal recap/pattern/roadmap
```

## Visual laws

- Center-stage first.
- One primary teaching object + at most one direct support object.
- Split left/right only when both structures are semantically required.
- No dashboard packing.
- No future-state spoiler.
- No decorative motion.
- No scene-local fake HashMap/complexity widgets.
- Complexity Big-O is accompanied by a rough mathematical curve when spoken.
- No guessed freeze/hold. Stable state holds only when narration is explaining it or exact audio later proves a real pause.
- Captions stay in Y 960–1040 safe zone; hero visuals never collide with captions.
- All production motion must remain deterministic and frame-derived.

## Kit requirements

Reuse verified kit components. Create only the audited missing reusable capabilities:

```text
kit-level FrequencyMapTableV2
kit-level ComplexityGrowthGraphV2
```

The current index-specific HashMapTable and sorting-specific MiniGraph are forbidden for Q16 semantics.
