# Q13 — Set Matrix Zeroes (LC 73)
# Scene 02 · Understand the Problem + The Dangerous Naive Idea
## EXACT AUDIO-SYNCHRONIZED FRAME-WISE PLAN

> Canonical duplicate of `02-understand_FRAMEWISE_PLAN.md` for consistent tooling and review.
> See [`02-understand_FRAMEWISE_PLAN.md`](file:///c:/Users/hrkes/Desktop/DsaAlgo/questions/01-arrays-hashing/013-set-matrix-zeroes/plans/02-understand_FRAMEWISE_PLAN.md) for the complete authoritative document.

**Audio Duration:** 76.280s (76280 ms)  
**Scene Duration Frames:** 2288 frames  
**FPS:** 30  
**Sync Source Filename:** `sync/02-understand.json`  
**Anchor Match Count:** 26 / 26  
**Unmatched Anchors:** 0  

---

### Anchor Summary Table

| Anchor ID | Spoken Phrase | Word ID Span | Frame Range `[start, endExcl)` | Total Frames | Available Pause | Teaching Purpose |
|---|---|---|---|---|---|---|
| `S02_MATRIX` | "We are given a matrix." | W0000..W0004 | `[0, 39)` | 39 F | 13 F (F39..F52) | Single empty 5×5 matrix shell enters center stage |
| `S02_RULE0` | "Whenever an original cell contains zero," | W0005..W0010 | `[52, 134)` | 82 F | 18 F (F134..F152) | One symbolic zero in sample cell receives pivot focus |
| `S02_RULER` | "its complete row" | W0011..W0013 | `[152, 182)` | 30 F | 0 F | Entire row passing through the sample zero highlights |
| `S02_RULEC` | "and its complete column" | W0014..W0017 | `[182, 236)` | 54 F | 16 F (F236..F252) | Entire column passing through sample zero highlights |
| `S02_MUST_BECOME_ZERO` | "must become zero." | W0018..W0020 | `[252, 301)` | 49 F | 23 F (F301..F324) | Affected row & col turn zero; rule demonstration complete |
| `S02_MASTER` | "For this lesson, we will use this matrix." | W0021..W0028 | `[324, 399)` | 75 F | 20 F (F399..F419) | Real 5×5 master input matrix appears populated center stage |
| `S02_INDEX` | "We will use zero-based row and column indices." | W0029..W0037 | `[419, 515)` | 96 F | 20 F (F515..F535) | Row rulers (0..4) and column rulers (0..4) draw around matrix |
| `S02_THREE` | "There are three original zeros." | W0038..W0042 | `[535, 592)` | 57 F | 16 F (F592..F608) | Ambient glow on original zeros at (0,2), (2,0), (3,3) |
| `S02_FIRSTROW` | "One is in the first row," | W0043..W0048 | `[608, 653)` | 45 F | 15 F (F653..F668) | Cell (0,2) highlighted with gold pivot glow and label (0,2) |
| `S02_FIRSTCOL` | "one is in the first column," | W0049..W0054 | `[668, 714)` | 46 F | 11 F (F714..F725) | Cell (2,0) highlighted with gold pivot glow and label (2,0) |
| `S02_INTERIOR` | "and one is inside the matrix." | W0055..W0060 | `[725, 787)` | 62 F | 18 F (F787..F805) | Cell (3,3) highlighted with gold pivot glow and label (3,3) |
| `S02_OBVIOUS` | "At first, the solution may look obvious." | W0061..W0067 | `[805, 897)` | 92 F | 20 F (F897..F917) | Untouched master matrix holds; transition into naive idea |
| `S02_FIND` | "When we find a zero," | W0068..W0072 | `[917, 953)` | 36 F | 18 F (F953..F971) | Scanner hits cell (0,2); cell becomes active source |
| `S02_IMMEDIATE` | "why not immediately make that row and column zero?" | W0073..W0081 | `[971, 1069)` | 98 F | 20 F (F1069..F1089) | Naive in-place write: Row 0 and Col 2 turn zero immediately |
| `S02_PROBLEM_IS` | "The problem is," | W0082..W0084 | `[1089, 1125)` | 36 F | 12 F (F1125..F1137) | Warning banner appears: 'IN-PLACE MUTATION DANGER' |
| `S02_CREATED` | "those writes create new zeros." | W0085..W0089 | `[1137, 1201)` | 64 F | 17 F (F1201..F1218) | Cell (1,2) highlighted: originally 8, now a fake zero |
| `S02_LATER` | "And if our scan later reaches one of those new zeros," | W0090..W0100 | `[1218, 1313)` | 95 F | 17 F (F1313..F1330) | Scanner pointer traverses to created zero at (1,2) |
| `S02_MISTAKE` | "we may treat it like an original zero." | W0101..W0108 | `[1330, 1411)` | 81 F | 17 F (F1411..F1428) | Cell (1,2) marked as false source: 'MISCLASSIFIED AS SOURCE!' |
| `S02_ANOTHER_ROW` | "Then we zero another row" | W0109..W0113 | `[1428, 1489)` | 61 F | 0 F | Row 1 wrongly wiped to zero! Valid numbers 6, 7, 9, 10 destroyed |
| `S02_ANOTHER_COL` | "and another column," | W0114..W0116 | `[1489, 1538)` | 49 F | 12 F (F1538..F1550) | Created zero at (1,4) cascades into Col 4; cell 25 destroyed |
| `S02_NEVER` | "even though they were never supposed to change." | W0117..W0124 | `[1550, 1625)` | 75 F | 0 F | Wrongly destroyed cells (7, 10, 25) highlighted with red warning borders |
| `S02_NEED_RULE` | "So we need one important rule." | W0125..W0130 | `[1625, 1729)` | 78 F | 26 F (F1703..F1729) | Matrix resets back to untouched master state; false cascade cleared |
| `S02_RULE` | "Zeros created by us must never become new sources of zeroing." | W0131..W0141 | `[1729, 1900)` | 171 F | 22 F (F1900..F1922) | Chalk rule banner: 'CORE INVARIANT: Created Zeros ≠ Original Sources' |
| `S02_PRESERVE` | "That means we need to preserve the information about the original zeros" | W0142..W0153 | `[1922, 2080)` | 158 F | 0 F | Original zeros (0,2), (2,0), (3,3) highlighted in amber truth glow |
| `S02_BEFORE` | "before our mutations can destroy it." | W0154..W0159 | `[2080, 2206)` | 99 F | 27 F (F2179..F2206) | Protective boundary indicator around original zeros |
| `S02_SAFEST` | "Let's start with the safest possible method." | W0160..W0166 | `[2206, 2288)` | 82 F | 0 F | Handoff teaser: 'METHOD 1: FULL MATRIX COPY'; matrix clean for Scene 03 |
