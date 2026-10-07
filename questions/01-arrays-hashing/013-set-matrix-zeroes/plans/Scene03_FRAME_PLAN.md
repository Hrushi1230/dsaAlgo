# Q13 — Set Matrix Zeroes (LC 73)
# Scene 03 · Method 1 Trace: Full Original Copy
## EXACT AUDIO-SYNCHRONIZED FRAME-WISE PLAN

> Canonical duplicate of `03-copy-trace_FRAMEWISE_PLAN.md` for consistent tooling and review.
> See [`03-copy-trace_FRAMEWISE_PLAN.md`](file:///c:/Users/hrkes/Desktop/DsaAlgo/questions/01-arrays-hashing/013-set-matrix-zeroes/plans/03-copy-trace_FRAMEWISE_PLAN.md) for the complete authoritative document.

**Audio Duration:** 111.900s (111900 ms)  
**Scene Duration Frames:** 3357 frames  
**FPS:** 30  
**Sync Source Filename:** `sync/03-copy-trace.json`  
**Anchor Count:** 37 / 37  
**Unmatched Anchors:** 0  

---

### Anchor Summary Table

| Anchor ID | Spoken Phrase | Word ID Span | Frame Range `[start, endExcl)` | Total Frames | Available Pause | Teaching Purpose |
|---|---|---|---|---|---|---|
| `S03_SAFE` | "The safest idea is," | W0000..W0003 | `[0, 62)` | 62 F | 6 F (F62..F68) | Master matrix opens center stage |
| `S03_COPY` | "keep one untouched copy of the original matrix." | W0004..W0011 | `[68, 172)` | 104 F | 22 F (F172..F194) | Master splits into Source Copy (Left) and Working Matrix (Right) |
| `S03_TRUTH` | "Think of it as our source of truth." | W0012..W0019 | `[194, 276)` | 82 F | 18 F (F276..F294) | Left matrix receives 'SOURCE OF TRUTH (READ-ONLY)' title |
| `S03_READ` | "We read zero information only from this original copy," | W0020..W0028 | `[294, 379)` | 85 F | 11 F (F379..F390) | Blue 'READ ONLY' lens illuminates Source Copy |
| `S03_WRITE` | "and we write changes only into the working matrix." | W0029..W0037 | `[390, 484)` | 94 F | 16 F (F484..F500) | Green 'WRITE ONLY' lens illuminates Working Matrix |
| `S03_TRACE` | "Now trace it." | W0038..W0040 | `[500, 529)` | 29 F | 19 F (F529..F548) | Traversal begins; attention locks on Source Copy |
| `S03_Z1` | "In the original copy, our first zero is at row zero, column two." | W0041..W0053 | `[548, 692)` | 144 F | 0 F | Scanner targets (0, 2) in Source Copy |
| `S03_ORIGINAL` | "because this zero belongs to the original input." | W0054..W0061 | `[692, 782)` | 90 F | 31 F (F782..F813) | Source (0, 2) confirmed authentic source |
| `S03_ROW0` | "Zero, row zero in the working matrix," | W0062..W0068 | `[813, 901)` | 88 F | 20 F (F901..F921) | Row 0 of Working Matrix mutates to 0 |
| `S03_COL2` | "then zero, column two." | W0069..W0072 | `[921, 963)` | 42 F | 25 F (F963..F988) | Col 2 of Working Matrix mutates to 0 |
| `S03_WORKING_CHANGES` | "The working matrix changes," | W0073..W0076 | `[988, 1035)` | 47 F | 13 F (F1035..F1048) | Working Matrix shows mutated Row 0 & Col 2 |
| `S03_SOURCE_NOT` | "but the source copy does not." | W0077..W0082 | `[1048, 1102)` | 54 F | 12 F (F1102..F1114) | Source Copy highlighted: values completely untouched |
| `S03_CONTINUE` | "Continue through the original copy." | W0083..W0087 | `[1114, 1166)` | 52 F | 21 F (F1166..F1187) | Scanner advances across row 1 of Source Copy |
| `S03_Z2` | "The next original zero is at row two, column zero." | W0088..W0097 | `[1187, 1295)` | 108 F | 12 F (F1295..F1307) | Scanner targets (2, 0) in Source Copy |
| `S03_ROW2` | "So zero, row two in the working matrix," | W0098..W0105 | `[1307, 1383)` | 76 F | 7 F (F1383..F1390) | Row 2 of Working Matrix mutates to 0 |
| `S03_COL0` | "and zero, column zero." | W0106..W0109 | `[1390, 1442)` | 52 F | 12 F (F1442..F1454) | Col 0 of Working Matrix mutates to 0 |
| `S03_AGAIN` | "Again," | W0110..W0110 | `[1454, 1471)` | 17 F | 39 F (F1471..F1510) | Contrast hold between Source and Working |
| `S03_SOURCE_UNTOUCHED` | "the source copy stays untouched." | W0111..W0115 | `[1510, 1568)` | 58 F | 11 F (F1568..F1579) | Source Copy confirmed 100% immutable |
| `S03_Z3` | "Then we reach the original zero at row three, column three." | W0116..W0126 | `[1579, 1690)` | 111 F | 17 F (F1690..F1707) | Scanner targets (3, 3) in Source Copy |
| `S03_ROW3` | "Zero, row three," | W0127..W0129 | `[1707, 1736)` | 29 F | 11 F (F1736..F1747) | Row 3 of Working Matrix mutates to 0 |
| `S03_COL3` | "and zero, column three" | W0130..W0133 | `[1747, 1792)` | 45 F | 0 F | Col 3 of Working Matrix mutates to 0 |
| `S03_WORKING` | "in the working matrix." | W0134..W0137 | `[1792, 1857)` | 65 F | 20 F (F1857..F1877) | Third zero mutation complete in Working Matrix |
| `S03_ALL3` | "Now all three original zero sources have been processed." | W0138..W0146 | `[1877, 1987)` | 110 F | 15 F (F1987..F2002) | All 3 sources marked complete with green checkmarks |
| `S03_NEVER` | "Notice what we never did." | W0147..W0151 | `[2002, 2045)` | 43 F | 13 F (F2045..F2058) | Curiosity pause on algorithmic correctness |
| `S03_CREATED` | "We never used a zero created inside the working matrix as a new source." | W0152..W0162 | `[2058, 2211)` | 153 F | 29 F (F2211..F2240) | Working mutated zeros highlighted as SAFE (never triggered) |
| `S03_EVERY` | "Every zeroing decision came from the untouched original copy." | W0163..W0171 | `[2240, 2350)` | 110 F | 19 F (F2350..F2369) | Beam arrow highlights flow from Source Copy to Working |
| `S03_NOCHAIN` | "So newly created zeros cannot create a false chain reaction." | W0172..W0181 | `[2369, 2495)` | 126 F | 21 F (F2495..F2516) | Confirmation banner: 'NO FALSE CHAIN REACTION' |
| `S03_RESULT` | "After all three original zeros are processed, the result becomes" | W0182..W0191 | `[2516, 2645)` | 129 F | 0 F | Transition into row-by-row result recitation |
| `S03_R0` | "00000" (Row 0) | W0192..W0192 | `[2645, 2710)` | 65 F | 0 F | Row 0 highlighted: [0, 0, 0, 0, 0] |
| `S03_R1` | "0700 10" (Row 1) | W0193..W0194 | `[2710, 2792)` | 82 F | 0 F | Row 1 highlighted: [0, 7, 0, 0, 10] (7 & 10 safe!) |
| `S03_R2` | "00000" (Row 2) | W0195..W0195 | `[2792, 2860)` | 68 F | 0 F | Row 2 highlighted: [0, 0, 0, 0, 0] |
| `S03_R3` | "00000" (Row 3) | W0196..W0196 | `[2860, 2939)` | 79 F | 0 F | Row 3 highlighted: [0, 0, 0, 0, 0] |
| `S03_R4` | "02200 25." (Row 4) | W0197..W0198 | `[2939, 3077)` | 138 F | 27 F (F3077..F3104) | Row 4 highlighted: [0, 22, 0, 0, 25] (22 & 25 safe!) |
| `S03_WORKS` | "So method one works," | W0199..W0202 | `[3104, 3138)` | 34 F | 12 F (F3138..F3150) | Success banner: 'METHOD 1: CORRECT RESULT' |
| `S03_SAFETY` | "but we paid for that safety" | W0203..W0208 | `[3150, 3197)` | 47 F | 0 F | Cost transition |
| `S03_STORE` | "by storing the whole matrix again." | W0209..W0214 | `[3197, 3285)` | 88 F | 0 F | Memory callout: 'SPACE COMPLEXITY: O(M × N)' |
| `S03_CODE` | "Let's write the idea in code." | W0215..W0220 | `[3285, 3357)` | 72 F | 0 F | Handoff to Scene 04: Python Implementation |
