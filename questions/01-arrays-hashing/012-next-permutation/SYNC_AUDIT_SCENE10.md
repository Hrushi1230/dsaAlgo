# SYNC AUDIT: SCENE 10 (10-recap)

- **Total Duration:** 91760 ms (2753 frames @ 30 FPS)
- **Total Words:** 173
- **Total Anchors:** 27
- **Audio File:** `10-recap.mp3`

## Anchor Manifest & Timing Validation

| # | Anchor ID | Word Range | MS Range | Frame Range | Duration | Phrase |
|---|---|---|---|---|---|---|
| 1 | `S10_OPEN` | W0..W4 | 0..2000 ms | F0..F77 | 77f (2.57s) | Let's recap the full journey. |
| 2 | `S10_BRUTE_SIMPLE` | W5..W10 | 2580..4600 ms | F77..F157 | 80f (2.67s) | The brute force idea was simple. |
| 3 | `S10_BRUTE_GENERATE` | W11..W13 | 5240..7460 ms | F157..F238 | 81f (2.70s) | Generate every permutation, |
| 4 | `S10_BRUTE_SORT` | W14..W15 | 7940..8640 ms | F238..F280 | 42f (1.40s) | sort them, |
| 5 | `S10_BRUTE_FIND` | W16..W19 | 9340..10540 ms | F280..F316 | 36f (1.20s) | find the current one |
| 6 | `S10_BRUTE_NEXT` | W20..W23 | 10540..11900 ms | F316..F377 | 61f (2.03s) | and take the next. |
| 7 | `S10_BRUTE_BAD` | W24..W30 | 12560..16100 ms | F377..F506 | 129f (4.30s) | But factorial growth makes that approach impractical. |
| 8 | `S10_OPTIMAL_STRUCTURE` | W31..W40 | 16860..21160 ms | F506..F659 | 153f (5.10s) | The optimal solution uses the structure of the current permutation. |
| 9 | `S10_SUFFIX` | W41..W47 | 21960..25840 ms | F659..F782 | 123f (4.10s) | First, find the longest non-increasing suffix. |
| 10 | `S10_PIVOT` | W48..W59 | 26060..31540 ms | F782..F956 | 174f (5.80s) | Then find the pivot. The rightmost position, where an increase is possible. |
| 11 | `S10_SUCCESSOR` | W60..W71 | 31860..37440 ms | F956..F1139 | 183f (6.10s) | Next, find the smallest value greater than the pivot and swap them. |
| 12 | `S10_REVERSE` | W72..W85 | 37980..45260 ms | F1139..F1371 | 232f (7.73s) | Finally, reverse the suffix. So everything after the pivot becomes as small as possible. |
| 13 | `S10_TIME` | W86..W92 | 45700..48100 ms | F1371..F1443 | 72f (2.40s) | That gives us O of n time |
| 14 | `S10_SPACE` | W93..W98 | 48100..50520 ms | F1443..F1531 | 88f (2.93s) | and O of one extra space. |
| 15 | `S10_BIGGER_LESSON` | W99..W104 | 51040..52860 ms | F1531..F1605 | 74f (2.47s) | But the bigger lesson is this. |
| 16 | `S10_NEXT_LEX` | W105..W113 | 53500..57080 ms | F1605..F1712 | 107f (3.57s) | When a problem asks for the next lexicographical arrangement, |
| 17 | `S10_NOT_GENERATE` | W114..W121 | 57080..61220 ms | F1712..F1846 | 134f (4.47s) | do not think about generating every possibility first. |
| 18 | `S10_RIGHTMOST` | W122..W133 | 61540..65680 ms | F1846..F1983 | 137f (4.57s) | Look for the rightmost position, where a valid increase can be made. |
| 19 | `S10_SMALLEST` | W134..W138 | 66100..68540 ms | F1983..F2056 | 73f (2.43s) | Make the smallest valid increase |
| 20 | `S10_MINIMIZE` | W139..W143 | 68540..71740 ms | F2056..F2165 | 109f (3.63s) | and minimize everything after it. |
| 21 | `S10_REAL_PATTERN` | W144..W149 | 72160..75240 ms | F2165..F2279 | 114f (3.80s) | That reasoning is the real pattern. |
| 22 | `S10_WITH_THAT` | W150..W152 | 75960..76940 ms | F2279..F2353 | 74f (2.47s) | And with that, |
| 23 | `S10_COMPLETE` | W153..W156 | 78440..80620 ms | F2353..F2443 | 90f (3.00s) | next permutation is complete. |
| 24 | `S10_Q12_DONE` | W157..W159 | 81440..83300 ms | F2443..F2524 | 81f (2.70s) | Question 12. Done. |
| 25 | `S10_CONTINUE_ROADMAP` | W160..W166 | 84120..87320 ms | F2524..F2635 | 111f (3.70s) | We continue our arrays and hashing roadmap. |
| 26 | `S10_Q13` | W167..W169 | 87820..89600 ms | F2635..F2701 | 66f (2.20s) | With question 13. |
| 27 | `S10_Q13_TITLE` | W170..W172 | 90040..91760 ms | F2701..F2753 | 52f (1.73s) | Set matrix zeros. |
