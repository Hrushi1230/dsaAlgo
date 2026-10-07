# Foundation V2 Audio Sync Audit — Scene 01: Intro / Roadmap
**Question:** 012 · Next Permutation (LeetCode 31)  
**Scene:** `01-intro-roadmap`  
**Audio File:** `audio/01-intro-roadmap.mp3`  
**Sync File:** `sync/01-intro-roadmap.json`  
**Anchor Manifest:** `sync/01-intro-roadmap.anchors.json`  
**Audit Date:** 2026-09-19  
**Tool Used:** Whisper Medium transcription, 30 FPS  

---

## 1. Sync Invariant Checklist

| Check | Requirement | Actual Value | Status |
|---|---|---|---|
| **Audio Filename** | Matches scene MP3 filename | `01-intro-roadmap.mp3` (mapped from `scence-01.mp3`) | **PASS** |
| **FPS** | Standard Course FPS | `30` | **PASS** |
| **Duration (ms)** | Non-negative integer | `25,560 ms` (25.56s) | **PASS** |
| **Duration (frames)** | `round(duration_ms * fps / 1000)` | `767 frames` (`25.560 * 30 = 766.8 -> 767`) | **PASS** |
| **Word Count** | Declared matches `words.length` | `46` == `46` | **PASS** |
| **Monotonicity** | `start_ms[i] >= start_ms[i-1]` | Strictly monotonic across all 46 words | **PASS** |
| **Word Duration** | `end_ms[i] >= start_ms[i]` | Valid across all 46 words | **PASS** |
| **Negative Timings** | No negative start/end times | `start_ms >= 0` for all words | **PASS** |
| **Frame Boundaries** | No word end exceeds scene duration | `words[-1].end_frame = 767 <= 767` | **PASS** |
| **Raw JSON Status** | Immutable source truth | Preserved without mutation | **PASS** |

---

## 2. Word-by-Word Identity Table (Ordered Stable IDs: W0000..W0045)

| Word ID | Word Text | Start (ms) | End (ms) | Start Frame | End Frame | Duration (Frames) |
|---|---|---|---|---|---|---|
| **W0000** | Welcome | 0 | 480 | 0 | 14 | 14 |
| **W0001** | back | 480 | 760 | 14 | 23 | 9 |
| **W0002** | to | 760 | 980 | 23 | 29 | 6 |
| **W0003** | Code | 980 | 1240 | 29 | 37 | 8 |
| **W0004** | with | 1240 | 1540 | 37 | 46 | 9 |
| **W0005** | Animation. | 1540 | 2160 | 46 | 65 | 19 |
| **W0006** | We | 2700 | 2800 | 81 | 84 | 3 |
| **W0007** | are | 2800 | 3060 | 84 | 92 | 8 |
| **W0008** | continuing | 3060 | 3560 | 92 | 107 | 15 |
| **W0009** | our | 3560 | 3980 | 107 | 119 | 12 |
| **W0010** | DSA | 3980 | 4740 | 119 | 142 | 23 |
| **W0011** | pattern | 4740 | 5200 | 142 | 156 | 14 |
| **W0012** | roadmap. | 5200 | 5780 | 156 | 173 | 17 |
| **W0013** | Question | 6760 | 6760 | 203 | 203 | 0 |
| **W0014** | 11, | 6760 | 7640 | 203 | 229 | 26 |
| **W0015** | sort | 8280 | 8500 | 248 | 255 | 7 |
| **W0016** | colors, | 8500 | 8960 | 255 | 269 | 14 |
| **W0017** | is | 9400 | 9620 | 282 | 289 | 7 |
| **W0018** | complete. | 9620 | 10140 | 289 | 304 | 15 |
| **W0019** | Now | 11020 | 11260 | 331 | 338 | 7 |
| **W0020** | we | 11260 | 11500 | 338 | 345 | 7 |
| **W0021** | move | 11500 | 11660 | 345 | 350 | 5 |
| **W0022** | to | 11660 | 11840 | 350 | 355 | 5 |
| **W0023** | the | 11840 | 11980 | 355 | 359 | 4 |
| **W0024** | next | 11980 | 12240 | 359 | 367 | 8 |
| **W0025** | problem. | 12240 | 12760 | 367 | 383 | 16 |
| **W0026** | Question | 13640 | 14020 | 409 | 421 | 12 |
| **W0027** | 12, | 14020 | 14740 | 421 | 442 | 21 |
| **W0028** | next | 15180 | 15500 | 455 | 465 | 10 |
| **W0029** | permutation, | 15500 | 16540 | 465 | 496 | 31 |
| **W0030** | lead | 17160 | 17320 | 515 | 520 | 5 |
| **W0031** | code | 17320 | 17680 | 520 | 530 | 10 |
| **W0032** | 31, | 17680 | 18320 | 530 | 550 | 20 |
| **W0033** | medium. | 19160 | 19460 | 575 | 584 | 9 |
| **W0034** | We | 20200 | 20380 | 606 | 611 | 5 |
| **W0035** | are | 20380 | 20660 | 611 | 620 | 9 |
| **W0036** | still | 20660 | 20860 | 620 | 626 | 6 |
| **W0037** | inside | 20860 | 21400 | 626 | 642 | 16 |
| **W0038** | arrays | 21400 | 21920 | 642 | 658 | 16 |
| **W0039** | and | 21920 | 22380 | 658 | 671 | 13 |
| **W0040** | hashing. | 22380 | 22820 | 671 | 685 | 14 |
| **W0041** | Let's | 23400 | 23820 | 702 | 715 | 13 |
| **W0042** | understand | 23820 | 24320 | 715 | 730 | 15 |
| **W0043** | the | 24320 | 24620 | 730 | 739 | 9 |
| **W0044** | question | 24620 | 25040 | 739 | 751 | 12 |
| **W0045** | first. | 25040 | 25560 | 751 | 767 | 16 |

---

## 3. Pause Invariant & Classification Analysis

| Pause ID | After Word ID | Before Word ID | Gap (ms) | Frame Window | Category | Pedagogical Action |
|---|---|---|---|---|---|---|
| `P01` | `W0005` (Animation.) | `W0006` (We) | 540 ms | F65–F81 (16F) | Teaching Hold | Canvas settle to 1.000; ambient dust |
| `P02` | `W0012` (roadmap.) | `W0013` (Question) | 980 ms | F173–F203 (30F) | Major Step Boundary | Header underline completes; full roadmap breath |
| `P03` | `W0014` (11,) | `W0015` (sort) | 640 ms | F229–F248 (19F) | Teaching Hold | Row 011 spotlight stabilizes |
| `P04` | `W0016` (colors,) | `W0017` (is) | 440 ms | F269–F282 (13F) | Teaching Hold | Title focus settles |
| `P05` | `W0018` (complete.) | `W0019` (Now) | 880 ms | F304–F331 (27F) | Major Step Boundary | Checkmark confirmation pulse settles |
| `P06` | `W0025` (problem.) | `W0026` (Question) | 880 ms | F383–F409 (26F) | Major Anticipation Hold | Pan down to Row 012 completes; **UP NEXT hold** |
| `P07` | `W0027` (12,) | `W0028` (next) | 440 ms | F442–F455 (13F) | Teaching Hold | NOW ACTIVE badge pop settles |
| `P08` | `W0029` (permutation,) | `W0030` (lead) | 620 ms | F496–F515 (19F) | Teaching Hold | Title underline locks |
| `P09` | `W0032` (31,) | `W0033` (medium.) | 840 ms | F550–F575 (25F) | Teaching Hold | LC 31 box settles |
| `P10` | `W0033` (medium.) | `W0034` (We) | 740 ms | F584–F606 (22F) | Major Step Boundary | Row 012 fully locked; prepare zoom out |
| `P11` | `W0040` (hashing.) | `W0041` (Let's) | 580 ms | F685–F702 (17F) | Teaching Hold | Pattern 01 focus holds; prepare handoff |

---

## 4. Normalization Audit

Whisper transcribed `W0030` as `"lead"`, `W0031` as `"code"`, `W0032` as `"31,"`.  
In the verified script, the anchor is `"LeetCode thirty-one..."`.  
- Transcription maps to ordered tokens: `W0030..W0032`.  
- Display subtitle text normalized to: `"LeetCode 31,"`.  
- Timing preserved directly from raw sync: Start `F515` (17.16s), End `F550` (18.32s).  
- Raw JSON remains untouched.  

**VERDICT: SYNC AUDIT 100% PASS**
