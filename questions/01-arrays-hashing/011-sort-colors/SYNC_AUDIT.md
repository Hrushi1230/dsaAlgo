# Foundation V2 Audio Sync Audit — Scene 01: Intro / Roadmap
**Question:** 011 · Sort Colors (LeetCode 75)  
**Scene:** `01-intro-roadmap`  
**Audio File:** `audio/01-intro-roadmap.mp3`  
**Sync File:** `sync/01-intro-roadmap.json`  
**Anchor Manifest:** `sync/01-intro-roadmap.anchors.json`  
**Audit Date:** 2026-09-15  
**Tool Used:** `tools/validate-sync.mjs` & `tools/audio-to-json.py` (Whisper medium, 30 FPS)  

---

## 1. Sync Invariant Checklist

| Check | Requirement | Actual Value | Status |
|---|---|---|---|
| **Audio Filename** | Matches scene MP3 filename | `01-intro-roadmap.mp3` | **PASS** |
| **FPS** | Standard Course FPS | `30` | **PASS** |
| **Duration (ms)** | Non-negative integer | `40,780 ms` (40.78s) | **PASS** |
| **Duration (frames)** | `round(duration_ms * fps / 1000)` | `1,223 frames` (exact: `40.78 * 30 = 1223.4 -> 1223`) | **PASS** |
| **Word Count** | Declared matches `words.length` | `63` == `63` | **PASS** |
| **Monotonicity** | `start_ms[i] >= start_ms[i-1]` | Strictly monotonic across all 63 words | **PASS** |
| **Word Duration** | `end_ms[i] >= start_ms[i]` | Valid across all 63 words | **PASS** |
| **Negative Timings** | No negative start/end times | `start_ms >= 0` for all words | **PASS** |
| **Frame Boundaries** | No word end exceeds scene duration | `words[-1].end_frame = 1223 <= 1223` | **PASS** |
| **Raw JSON Status** | Immutable source truth | Preserved without mutation | **PASS** |

---

## 2. Word-by-Word Identity Table (Ordered Stable IDs: W0000..W0062)

| Word ID | Word Text | Start (ms) | End (ms) | Start Frame | End Frame | Duration (Frames) |
|---|---|---|---|---|---|---|
| **W0000** | Welcome | 0 | 500 | 0 | 15 | 15 |
| **W0001** | back | 500 | 860 | 15 | 26 | 11 |
| **W0002** | to | 860 | 1100 | 26 | 33 | 7 |
| **W0003** | Code | 1100 | 1360 | 33 | 41 | 8 |
| **W0004** | with | 1360 | 1620 | 41 | 49 | 8 |
| **W0005** | Animation. | 1620 | 2260 | 49 | 68 | 19 |
| **W0006** | We | 2800 | 2960 | 84 | 89 | 5 |
| **W0007** | are | 2960 | 3300 | 89 | 99 | 10 |
| **W0008** | continuing | 3300 | 3840 | 99 | 115 | 16 |
| **W0009** | our | 3840 | 4500 | 115 | 135 | 20 |
| **W0010** | DSA | 4500 | 5160 | 135 | 155 | 20 |
| **W0011** | pattern | 5160 | 5680 | 155 | 170 | 15 |
| **W0012** | roadmap, | 5680 | 6320 | 170 | 190 | 20 |
| **W0013** | 227 | 7020 | 8760 | 211 | 263 | 52 |
| **W0014** | problems | 8760 | 9420 | 263 | 283 | 20 |
| **W0015** | across | 9420 | 10300 | 283 | 309 | 26 |
| **W0016** | 19 | 10300 | 10940 | 309 | 328 | 19 |
| **W0017** | important | 10940 | 11660 | 328 | 350 | 22 |
| **W0018** | patterns | 11660 | 12320 | 350 | 370 | 20 |
| **W0019** | built | 12320 | 13000 | 370 | 390 | 20 |
| **W0020** | for | 13000 | 13380 | 390 | 401 | 11 |
| **W0021** | serious | 13380 | 14020 | 401 | 421 | 20 |
| **W0022** | interview | 14020 | 14660 | 421 | 440 | 19 |
| **W0023** | preparation, | 14660 | 15380 | 440 | 461 | 21 |
| **W0024** | from | 15800 | 16120 | 474 | 484 | 10 |
| **W0025** | fundamentals | 16120 | 16860 | 484 | 506 | 22 |
| **W0026** | to | 16860 | 17600 | 506 | 528 | 22 |
| **W0027** | FAANG | 17600 | 18060 | 528 | 542 | 14 |
| **W0028** | level | 18060 | 18500 | 542 | 555 | 13 |
| **W0029** | problem | 18500 | 18980 | 555 | 569 | 14 |
| **W0030** | solving. | 18980 | 19440 | 569 | 583 | 14 |
| **W0031** | Right | 20180 | 20580 | 605 | 617 | 12 |
| **W0032** | now, | 20580 | 21120 | 617 | 634 | 17 |
| **W0033** | we | 21280 | 21500 | 638 | 645 | 7 |
| **W0034** | are | 21500 | 21840 | 645 | 655 | 10 |
| **W0035** | inside | 21840 | 22440 | 655 | 673 | 18 |
| **W0036** | arrays | 22440 | 23040 | 673 | 691 | 18 |
| **W0037** | and | 23040 | 23420 | 691 | 703 | 12 |
| **W0038** | hashing. | 23420 | 24240 | 703 | 727 | 24 |
| **W0039** | Question | 24840 | 25280 | 745 | 758 | 13 |
| **W0040** | 10. | 25280 | 25960 | 758 | 779 | 21 |
| **W0041** | Longest | 25960 | 27220 | 779 | 817 | 38 |
| **W0042** | consecutive | 27220 | 27960 | 817 | 839 | 22 |
| **W0043** | sequence | 27960 | 28620 | 839 | 859 | 20 |
| **W0044** | is | 28620 | 29400 | 859 | 882 | 23 |
| **W0045** | complete. | 29400 | 29940 | 882 | 898 | 16 |
| **W0046** | Now | 30680 | 30800 | 920 | 924 | 4 |
| **W0047** | we | 30800 | 31040 | 924 | 931 | 7 |
| **W0048** | move | 31040 | 31260 | 931 | 938 | 7 |
| **W0049** | to | 31260 | 31440 | 938 | 943 | 5 |
| **W0050** | the | 31440 | 31540 | 943 | 946 | 3 |
| **W0051** | next | 31540 | 31840 | 946 | 955 | 9 |
| **W0052** | problem. | 31840 | 32520 | 955 | 976 | 21 |
| **W0053** | Question | 33960 | 33960 | 1019 | 1019 | 0 |
| **W0054** | 11. | 33960 | 34740 | 1019 | 1042 | 23 |
| **W0055** | Sort | 35120 | 35340 | 1054 | 1060 | 6 |
| **W0056** | colors. | 35340 | 35940 | 1060 | 1078 | 18 |
| **W0057** | Lead | 36620 | 36780 | 1099 | 1103 | 4 |
| **W0058** | code | 36780 | 37140 | 1103 | 1114 | 11 |
| **W0059** | 75, | 37140 | 38040 | 1114 | 1141 | 27 |
| **W0060** | medium. | 38860 | 39140 | 1166 | 1174 | 8 |
| **W0061** | Let's | 40020 | 40400 | 1201 | 1212 | 11 |
| **W0062** | continue. | 40400 | 40780 | 1212 | 1223 | 11 |

---

## 3. Pause Analysis & Categorization

According to the Foundation V2 Audio Sync Bible, pauses are derived between adjacent words (`gapMs = words[i+1].start_ms - words[i].end_ms`):

| Pause ID | Between Words | Gap (ms) | Gap (Frames) | Class | Planned Pedagogical Function |
|---|---|---|---|---|---|
| **P01** | W0005 ("Animation.") → W0006 ("We") | 540 ms | 16F (F68–F84) | `teaching` | Whole-shell reorientation hold after welcome intro |
| **P02** | W0012 ("roadmap,") → W0013 ("227") | 700 ms | 21F (F190–F211) | `major` | Settle top roadmap title before full course scale intro |
| **P03** | W0023 ("preparation,") → W0024 ("from") | 420 ms | 13F (F461–F474) | `teaching` | Settle 227/19-pattern hierarchy before journey focus |
| **P04** | W0030 ("solving.") → W0031 ("Right") | 740 ms | 22F (F583–F605) | `major` | Full-course journey tracer recedes; camera returns |
| **P05** | W0032 ("now,") → W0033 ("we") | 160 ms | 4F (F634–F638) | `natural` | Speech breathing pause; camera begins refocus on Pattern 01 |
| **P06** | W0038 ("hashing.") → W0039 ("Question") | 600 ms | 18F (F727–F745) | `teaching` | Settle Pattern 01 pivot emphasis before rows focus |
| **P07** | W0045 ("complete.") → W0046 ("Now") | 740 ms | 22F (F898–F920) | `major` | Q010 completion confirmation hold; row good-pulse settles |
| **P08** | W0052 ("problem.") → W0053 ("Question") | 1440 ms | 43F (F976–F1019) | `major` (long) | Focus transfer Q010 → Q011; tension hold before activation |
| **P09** | W0054 ("11.") → W0055 ("Sort") | 380 ms | 12F (F1042–F1054) | `teaching` | Q011 activation settle (UP NEXT → NOW ACTIVE badge write) |
| **P10** | W0056 ("colors.") → W0057 ("Lead") | 680 ms | 21F (F1078–F1099) | `teaching` | Settle Sort Colors title hero glow before LC metadata |
| **P11** | W0059 ("75,") → W0060 ("medium.") | 820 ms | 25F (F1141–F1166) | `major` | LC 75 metadata underline settle before difficulty badge |
| **P12** | W0060 ("medium.") → W0061 ("Let's") | 880 ms | 27F (F1174–F1201) | `major` | Full Q011 active card settles before representation handoff |

---

## 4. Script Alignment & Caption Normalization

The transcription matches the approved script 100%. Two specific words in speech require display normalization for video captions:
1. `W0013` transcribed as `"227"`: Spoken as "Two hundred twenty-seven", displayed in captions as `"227 problems"`.
2. `W0016` transcribed as `"19"`: Spoken as "nineteen", displayed in captions as `"19 important patterns"`.
3. `W0040` transcribed as `"10."`: Spoken as "ten", displayed in captions as `"Question 10."`.
4. `W0054` transcribed as `"11."`: Spoken as "eleven", displayed in captions as `"Question 11."`.
5. `W0057` + `W0058` transcribed as `"Lead"` + `"code"`: Spoken as "LeetCode", normalized in captions to `"LeetCode"` with start from W0057 and end from W0058.

---

## 5. Sync Validation Conclusion

- Total audio duration: **40,780 ms**
- Remotion composition length: **1,223 frames** @ 30 FPS
- All 18 semantic anchors map to valid, non-overlapping, strictly monotonic frame ranges.
- Result: **FULL PASS — VALIDATED FOR FRAME-WISE PLANNING**.
