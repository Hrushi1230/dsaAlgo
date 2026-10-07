# Scene 06 Frame QA Checklist: Method 2 Trace (Concentric Rings & 4-Way Swaps)

> **Question 14**: Rotate Image (LeetCode 48) · Pattern 01 (Arrays & Hashing)
> **Scene**: 06 · `06-method2-trace`
> **Audio Duration**: 246.200s (7,386 frames @ 30fps)
> **Checkpoints**: 26 framewise checkpoints

---

## Verification Checkpoints

### Checkpoint 01: `S06_A01_IN_PLACE_INTRO` (Target Frame: 105, Range: 0..210)
- **Spoken Anchor**: *"Now, we use only the original matrix. Think of the matrix as layers."*
- **Key Fact / State**: 5x5 Matrix enters center stage. Single buffer constraint established.
- **Visual Layout Criteria**:
  - [x] 5×5 Matrix is centered at X: 764, Y: 195.
  - [x] Top zone (Y: 36..105) contains only clean metadata badges.
  - [x] Left stage contains active cycle info / temp box without overlapping matrix.
  - [x] Right stage contains layer hierarchy without overlapping matrix.
  - [x] Digits inside cells are 100% crisp with zero lines cutting through numbers.
  - [x] Captions at Y: 960..1010 have >= 190px clearance above them.
- **Status**: PASSED (VERIFIED)

### Checkpoint 02: `S06_A02_LAYER_BREAKDOWN` (Target Frame: 407, Range: 211..603)
- **Spoken Anchor**: *"For our 5 by 5 matrix, the outside border is the first layer. Inside that, the 3 by 3 border is the second layer, and the center is left alone."*
- **Key Fact / State**: Concentric rings highlighted: Outer 5x5 (16 cells), Inner 3x3 (8 cells), Center (1 cell).
- **Visual Layout Criteria**:
  - [x] 5×5 Matrix is centered at X: 764, Y: 195.
  - [x] Top zone (Y: 36..105) contains only clean metadata badges.
  - [x] Left stage contains active cycle info / temp box without overlapping matrix.
  - [x] Right stage contains layer hierarchy without overlapping matrix.
  - [x] Digits inside cells are 100% crisp with zero lines cutting through numbers.
  - [x] Captions at Y: 960..1010 have >= 190px clearance above them.
- **Status**: PASSED (VERIFIED)

### Checkpoint 03: `S06_A03_OUTER_CYCLE1_FOCUS` (Target Frame: 804, Range: 604..1005)
- **Spoken Anchor**: *"Let's begin. With the outer layer, the first four connected positions contain top, 1, right, 5, bottom, 25, left, 21."*
- **Key Fact / State**: Outer Layer Cycle 1 corners: 1, 5, 25, 21 light up.
- **Visual Layout Criteria**:
  - [x] 5×5 Matrix is centered at X: 764, Y: 195.
  - [x] Top zone (Y: 36..105) contains only clean metadata badges.
  - [x] Left stage contains active cycle info / temp box without overlapping matrix.
  - [x] Right stage contains layer hierarchy without overlapping matrix.
  - [x] Digits inside cells are 100% crisp with zero lines cutting through numbers.
  - [x] Captions at Y: 960..1010 have >= 190px clearance above them.
- **Status**: PASSED (VERIFIED)

### Checkpoint 04: `S06_A04_ROTATION_DIRECTION` (Target Frame: 1132, Range: 1006..1258)
- **Spoken Anchor**: *"For clockwise rotation, top must go to right, right must go to bottom, bottom must go to left, and left must go to top."*
- **Key Fact / State**: Clockwise directional flow arrows connecting corners.
- **Visual Layout Criteria**:
  - [x] 5×5 Matrix is centered at X: 764, Y: 195.
  - [x] Top zone (Y: 36..105) contains only clean metadata badges.
  - [x] Left stage contains active cycle info / temp box without overlapping matrix.
  - [x] Right stage contains layer hierarchy without overlapping matrix.
  - [x] Digits inside cells are 100% crisp with zero lines cutting through numbers.
  - [x] Captions at Y: 960..1010 have >= 190px clearance above them.
- **Status**: PASSED (VERIFIED)

### Checkpoint 05: `S06_A05_OVERWRITE_HAZARD` (Target Frame: 1369, Range: 1259..1480)
- **Spoken Anchor**: *"But we cannot write top into right first, because we would destroy the old right value."*
- **Key Fact / State**: Hazard warning: Writing 1 directly into (0,4) destroys 5.
- **Visual Layout Criteria**:
  - [x] 5×5 Matrix is centered at X: 764, Y: 195.
  - [x] Top zone (Y: 36..105) contains only clean metadata badges.
  - [x] Left stage contains active cycle info / temp box without overlapping matrix.
  - [x] Right stage contains layer hierarchy without overlapping matrix.
  - [x] Digits inside cells are 100% crisp with zero lines cutting through numbers.
  - [x] Captions at Y: 960..1010 have >= 190px clearance above them.
- **Status**: PASSED (VERIFIED)

### Checkpoint 06: `S06_A06_SAVE_TOP` (Target Frame: 1546, Range: 1481..1611)
- **Spoken Anchor**: *"So save the top value. Save 1."*
- **Key Fact / State**: top_val = matrix[0][0] = 1 saved into memory variable.
- **Visual Layout Criteria**:
  - [x] 5×5 Matrix is centered at X: 764, Y: 195.
  - [x] Top zone (Y: 36..105) contains only clean metadata badges.
  - [x] Left stage contains active cycle info / temp box without overlapping matrix.
  - [x] Right stage contains layer hierarchy without overlapping matrix.
  - [x] Digits inside cells are 100% crisp with zero lines cutting through numbers.
  - [x] Captions at Y: 960..1010 have >= 190px clearance above them.
- **Status**: PASSED (VERIFIED)

### Checkpoint 07: `S06_A07_MOVE_LEFT_TO_TOP` (Target Frame: 1680, Range: 1612..1749)
- **Spoken Anchor**: *"Now move 21 from left into top,"*
- **Key Fact / State**: 21 glides from (4,0) into (0,0).
- **Visual Layout Criteria**:
  - [x] 5×5 Matrix is centered at X: 764, Y: 195.
  - [x] Top zone (Y: 36..105) contains only clean metadata badges.
  - [x] Left stage contains active cycle info / temp box without overlapping matrix.
  - [x] Right stage contains layer hierarchy without overlapping matrix.
  - [x] Digits inside cells are 100% crisp with zero lines cutting through numbers.
  - [x] Captions at Y: 960..1010 have >= 190px clearance above them.
- **Status**: PASSED (VERIFIED)

### Checkpoint 08: `S06_A08_MOVE_BOTTOM_TO_LEFT` (Target Frame: 1817, Range: 1750..1885)
- **Spoken Anchor**: *"then move 25 from bottom into left,"*
- **Key Fact / State**: 25 glides from (4,4) into (4,0).
- **Visual Layout Criteria**:
  - [x] 5×5 Matrix is centered at X: 764, Y: 195.
  - [x] Top zone (Y: 36..105) contains only clean metadata badges.
  - [x] Left stage contains active cycle info / temp box without overlapping matrix.
  - [x] Right stage contains layer hierarchy without overlapping matrix.
  - [x] Digits inside cells are 100% crisp with zero lines cutting through numbers.
  - [x] Captions at Y: 960..1010 have >= 190px clearance above them.
- **Status**: PASSED (VERIFIED)

### Checkpoint 09: `S06_A09_MOVE_RIGHT_TO_BOTTOM` (Target Frame: 1954, Range: 1886..2023)
- **Spoken Anchor**: *"then move 5 from right into bottom."*
- **Key Fact / State**: 5 glides from (0,4) into (4,4).
- **Visual Layout Criteria**:
  - [x] 5×5 Matrix is centered at X: 764, Y: 195.
  - [x] Top zone (Y: 36..105) contains only clean metadata badges.
  - [x] Left stage contains active cycle info / temp box without overlapping matrix.
  - [x] Right stage contains layer hierarchy without overlapping matrix.
  - [x] Digits inside cells are 100% crisp with zero lines cutting through numbers.
  - [x] Captions at Y: 960..1010 have >= 190px clearance above them.
- **Status**: PASSED (VERIFIED)

### Checkpoint 10: `S06_A10_MOVE_TEMP_TO_RIGHT` (Target Frame: 2104, Range: 2024..2185)
- **Spoken Anchor**: *"And finally, move the save value, 1, into right."*
- **Key Fact / State**: Saved top_val 1 glides into (0,4).
- **Visual Layout Criteria**:
  - [x] 5×5 Matrix is centered at X: 764, Y: 195.
  - [x] Top zone (Y: 36..105) contains only clean metadata badges.
  - [x] Left stage contains active cycle info / temp box without overlapping matrix.
  - [x] Right stage contains layer hierarchy without overlapping matrix.
  - [x] Digits inside cells are 100% crisp with zero lines cutting through numbers.
  - [x] Captions at Y: 960..1010 have >= 190px clearance above them.
- **Status**: PASSED (VERIFIED)

### Checkpoint 11: `S06_A11_OUTER_CYCLE1_COMPLETE` (Target Frame: 2291, Range: 2186..2396)
- **Spoken Anchor**: *"The first four -position cycle is complete. The four corners are now in their final rotated positions."*
- **Key Fact / State**: Cycle 1 complete: corners verified (21, 1, 5, 25).
- **Visual Layout Criteria**:
  - [x] 5×5 Matrix is centered at X: 764, Y: 195.
  - [x] Top zone (Y: 36..105) contains only clean metadata badges.
  - [x] Left stage contains active cycle info / temp box without overlapping matrix.
  - [x] Right stage contains layer hierarchy without overlapping matrix.
  - [x] Digits inside cells are 100% crisp with zero lines cutting through numbers.
  - [x] Captions at Y: 960..1010 have >= 190px clearance above them.
- **Status**: PASSED (VERIFIED)

### Checkpoint 12: `S06_A12_OUTER_CYCLE2_STEP` (Target Frame: 2554, Range: 2397..2712)
- **Spoken Anchor**: *"Move one position to the right along the top edge. The next connected values are 2, 10, 24, 16."*
- **Key Fact / State**: Offset i=1: connected positions (0,1)=2, (1,4)=10, (4,3)=24, (3,0)=16 highlighted.
- **Visual Layout Criteria**:
  - [ ] 5×5 Matrix is centered at X: 764, Y: 215.
  - [ ] Top zone (Y: 36..105) contains only clean metadata badges.
  - [ ] Left stage contains active cycle info / temp box without overlapping matrix.
  - [ ] Right stage contains layer hierarchy without overlapping matrix.
  - [ ] Digits inside cells are 100% crisp with zero lines cutting through numbers.
  - [ ] Captions at Y: 960..1010 have >= 195px clearance above them.
- **Status**: PENDING VERIFICATION

### Checkpoint 13: `S06_A13_OUTER_CYCLE2_EXECUTE` (Target Frame: 2981, Range: 2713..3250)
- **Spoken Anchor**: *"Save 2, 16 moves from left into top. 24 moves from bottom into left. 10 moves from right into bottom. And save 2 moves into right. Second cycle complete."*
- **Key Fact / State**: Cycle 2 executed: top_val=2, 16->(0,1), 24->(3,0), 10->(4,3), saved 2->(1,4).
- **Visual Layout Criteria**:
  - [ ] 5×5 Matrix is centered at X: 764, Y: 215.
  - [ ] Top zone (Y: 36..105) contains only clean metadata badges.
  - [ ] Left stage contains active cycle info / temp box without overlapping matrix.
  - [ ] Right stage contains layer hierarchy without overlapping matrix.
  - [ ] Digits inside cells are 100% crisp with zero lines cutting through numbers.
  - [ ] Captions at Y: 960..1010 have >= 195px clearance above them.
- **Status**: PENDING VERIFICATION

### Checkpoint 14: `S06_A14_OUTER_CYCLE3_STEP` (Target Frame: 3367, Range: 3251..3484)
- **Spoken Anchor**: *"Move one more position. Now the connected values are 3, 15, 23, 11."*
- **Key Fact / State**: Offset i=2: connected positions (0,2)=3, (2,4)=15, (4,2)=23, (2,0)=11 highlighted.
- **Visual Layout Criteria**:
  - [ ] 5×5 Matrix is centered at X: 764, Y: 215.
  - [ ] Top zone (Y: 36..105) contains only clean metadata badges.
  - [ ] Left stage contains active cycle info / temp box without overlapping matrix.
  - [ ] Right stage contains layer hierarchy without overlapping matrix.
  - [ ] Digits inside cells are 100% crisp with zero lines cutting through numbers.
  - [ ] Captions at Y: 960..1010 have >= 195px clearance above them.
- **Status**: PENDING VERIFICATION

### Checkpoint 15: `S06_A15_OUTER_CYCLE3_EXECUTE` (Target Frame: 3696, Range: 3485..3907)
- **Spoken Anchor**: *"Save 3, 11 moves into top. 23 moves into left. 15 moves into bottom. And save 3 moves into right. Third cycle complete."*
- **Key Fact / State**: Cycle 3 executed: top_val=3, 11->(0,2), 23->(2,0), 15->(4,2), saved 3->(2,4).
- **Visual Layout Criteria**:
  - [ ] 5×5 Matrix is centered at X: 764, Y: 215.
  - [ ] Top zone (Y: 36..105) contains only clean metadata badges.
  - [ ] Left stage contains active cycle info / temp box without overlapping matrix.
  - [ ] Right stage contains layer hierarchy without overlapping matrix.
  - [ ] Digits inside cells are 100% crisp with zero lines cutting through numbers.
  - [ ] Captions at Y: 960..1010 have >= 195px clearance above them.
- **Status**: PENDING VERIFICATION

### Checkpoint 16: `S06_A16_OUTER_CYCLE4_STEP` (Target Frame: 4037, Range: 3908..4166)
- **Spoken Anchor**: *"One final cycle for the outer layer. The connected values are 4, 20, 22, 6."*
- **Key Fact / State**: Offset i=3: connected positions (0,3)=4, (3,4)=20, (4,1)=22, (1,0)=6 highlighted.
- **Visual Layout Criteria**:
  - [ ] 5×5 Matrix is centered at X: 764, Y: 215.
  - [ ] Top zone (Y: 36..105) contains only clean metadata badges.
  - [ ] Left stage contains active cycle info / temp box without overlapping matrix.
  - [ ] Right stage contains layer hierarchy without overlapping matrix.
  - [ ] Digits inside cells are 100% crisp with zero lines cutting through numbers.
  - [ ] Captions at Y: 960..1010 have >= 195px clearance above them.
- **Status**: PENDING VERIFICATION

### Checkpoint 17: `S06_A17_OUTER_CYCLE4_EXECUTE` (Target Frame: 4332, Range: 4167..4498)
- **Spoken Anchor**: *"Save 4, 6 moves into top. 22 moves into left. 20 moves into bottom. And save 4 moves into right."*
- **Key Fact / State**: Cycle 4 executed: top_val=4, 6->(0,3), 22->(1,0), 20->(4,1), saved 4->(3,4).
- **Visual Layout Criteria**:
  - [ ] 5×5 Matrix is centered at X: 764, Y: 215.
  - [ ] Top zone (Y: 36..105) contains only clean metadata badges.
  - [ ] Left stage contains active cycle info / temp box without overlapping matrix.
  - [ ] Right stage contains layer hierarchy without overlapping matrix.
  - [ ] Digits inside cells are 100% crisp with zero lines cutting through numbers.
  - [ ] Captions at Y: 960..1010 have >= 195px clearance above them.
- **Status**: PENDING VERIFICATION

### Checkpoint 18: `S06_A18_OUTER_LAYER_COMPLETE` (Target Frame: 4700, Range: 4499..4901)
- **Spoken Anchor**: *"Now the entire outer layer is complete. Every value on this border is already in its final rotated position. So we do not touch this layer again."*
- **Key Fact / State**: All 16 outer border cells glow Green and lock.
- **Visual Layout Criteria**:
  - [ ] 5×5 Matrix is centered at X: 764, Y: 215.
  - [ ] Top zone (Y: 36..105) contains only clean metadata badges.
  - [ ] Left stage contains active cycle info / temp box without overlapping matrix.
  - [ ] Right stage contains layer hierarchy without overlapping matrix.
  - [ ] Digits inside cells are 100% crisp with zero lines cutting through numbers.
  - [ ] Captions at Y: 960..1010 have >= 195px clearance above them.
- **Status**: PENDING VERIFICATION

### Checkpoint 19: `S06_A19_INNER_LAYER_INTRO` (Target Frame: 5076, Range: 4902..5251)
- **Spoken Anchor**: *"Now move one layer inward. The inner layer is a 3 by 3 border. Its first connected values are 7, 9, 19, 17."*
- **Key Fact / State**: Inward transition: layer=1 (bounds top=1, bottom=3, left=1, right=3). Corners: 7, 9, 19, 17 highlighted.
- **Visual Layout Criteria**:
  - [ ] 5×5 Matrix is centered at X: 764, Y: 215.
  - [ ] Top zone (Y: 36..105) contains only clean metadata badges.
  - [ ] Left stage contains active cycle info / temp box without overlapping matrix.
  - [ ] Right stage contains layer hierarchy without overlapping matrix.
  - [ ] Digits inside cells are 100% crisp with zero lines cutting through numbers.
  - [ ] Captions at Y: 960..1010 have >= 195px clearance above them.
- **Status**: PENDING VERIFICATION

### Checkpoint 20: `S06_A20_INNER_CYCLE1_EXECUTE` (Target Frame: 5461, Range: 5252..5671)
- **Spoken Anchor**: *"Save 7, 17 moves into top. 19 moves into left. 9 moves into bottom. And save 7 moves into right. First inner cycle complete."*
- **Key Fact / State**: Inner Cycle 1 executed: top_val=7, 17->(1,1), 19->(3,1), 9->(3,3), saved 7->(1,3).
- **Visual Layout Criteria**:
  - [ ] 5×5 Matrix is centered at X: 764, Y: 215.
  - [ ] Top zone (Y: 36..105) contains only clean metadata badges.
  - [ ] Left stage contains active cycle info / temp box without overlapping matrix.
  - [ ] Right stage contains layer hierarchy without overlapping matrix.
  - [ ] Digits inside cells are 100% crisp with zero lines cutting through numbers.
  - [ ] Captions at Y: 960..1010 have >= 195px clearance above them.
- **Status**: PENDING VERIFICATION

### Checkpoint 21: `S06_A21_INNER_CYCLE2_STEP` (Target Frame: 5799, Range: 5672..5926)
- **Spoken Anchor**: *"Now the final four position cycle. The values are 8, 14, 18, 12."*
- **Key Fact / State**: Inner Cycle 2 offset i=1: positions (1,2)=8, (2,3)=14, (3,2)=18, (2,1)=12 highlighted.
- **Visual Layout Criteria**:
  - [ ] 5×5 Matrix is centered at X: 764, Y: 215.
  - [ ] Top zone (Y: 36..105) contains only clean metadata badges.
  - [ ] Left stage contains active cycle info / temp box without overlapping matrix.
  - [ ] Right stage contains layer hierarchy without overlapping matrix.
  - [ ] Digits inside cells are 100% crisp with zero lines cutting through numbers.
  - [ ] Captions at Y: 960..1010 have >= 195px clearance above them.
- **Status**: PENDING VERIFICATION

### Checkpoint 22: `S06_A22_INNER_CYCLE2_EXECUTE` (Target Frame: 6142, Range: 5927..6358)
- **Spoken Anchor**: *"Save 8, 12 moves into top. 18 moves into left. 14 moves into bottom. And save 8 moves into right. The inner layer is now complete."*
- **Key Fact / State**: Inner Cycle 2 executed: top_val=8, 12->(1,2), 18->(2,1), 14->(3,2), saved 8->(2,3). Inner ring complete!
- **Visual Layout Criteria**:
  - [ ] 5×5 Matrix is centered at X: 764, Y: 215.
  - [ ] Top zone (Y: 36..105) contains only clean metadata badges.
  - [ ] Left stage contains active cycle info / temp box without overlapping matrix.
  - [ ] Right stage contains layer hierarchy without overlapping matrix.
  - [ ] Digits inside cells are 100% crisp with zero lines cutting through numbers.
  - [ ] Captions at Y: 960..1010 have >= 195px clearance above them.
- **Status**: PENDING VERIFICATION

### Checkpoint 23: `S06_A23_CENTER_ELEMENT` (Target Frame: 6513, Range: 6359..6668)
- **Spoken Anchor**: *"And 13. The center value was never part of any four position cycle. So it remained exactly where it started."*
- **Key Fact / State**: Center element (2,2)=13 highlighted. 1x1 core has no cycles, stays unchanged.
- **Visual Layout Criteria**:
  - [ ] 5×5 Matrix is centered at X: 764, Y: 215.
  - [ ] Top zone (Y: 36..105) contains only clean metadata badges.
  - [ ] Left stage contains active cycle info / temp box without overlapping matrix.
  - [ ] Right stage contains layer hierarchy without overlapping matrix.
  - [ ] Digits inside cells are 100% crisp with zero lines cutting through numbers.
  - [ ] Captions at Y: 960..1010 have >= 195px clearance above them.
- **Status**: PENDING VERIFICATION

### Checkpoint 24: `S06_A24_FULL_ROTATION_VERIFICATION` (Target Frame: 6806, Range: 6669..6943)
- **Spoken Anchor**: *"The entire matrix has now been rotated 90 degrees clockwise without creating another matrix."*
- **Key Fact / State**: Full matrix verified: all 25 values match rotated result in-place.
- **Visual Layout Criteria**:
  - [ ] 5×5 Matrix is centered at X: 764, Y: 215.
  - [ ] Top zone (Y: 36..105) contains only clean metadata badges.
  - [ ] Left stage contains active cycle info / temp box without overlapping matrix.
  - [ ] Right stage contains layer hierarchy without overlapping matrix.
  - [ ] Digits inside cells are 100% crisp with zero lines cutting through numbers.
  - [ ] Captions at Y: 960..1010 have >= 195px clearance above them.
- **Status**: PENDING VERIFICATION

### Checkpoint 25: `S06_A25_ALGORITHM_SUMMARY` (Target Frame: 7101, Range: 6944..7258)
- **Spoken Anchor**: *"The pattern is finish one four position cycle safely, continue across the layer, finish the complete layer, then move inward."*
- **Key Fact / State**: Summary of Concentric Rings algorithm & loop structure.
- **Visual Layout Criteria**:
  - [ ] 5×5 Matrix is centered at X: 764, Y: 215.
  - [ ] Top zone (Y: 36..105) contains only clean metadata badges.
  - [ ] Left stage contains active cycle info / temp box without overlapping matrix.
  - [ ] Right stage contains layer hierarchy without overlapping matrix.
  - [ ] Digits inside cells are 100% crisp with zero lines cutting through numbers.
  - [ ] Captions at Y: 960..1010 have >= 195px clearance above them.
- **Status**: PENDING VERIFICATION

### Checkpoint 26: `S06_A26_CODE_HANDOFF` (Target Frame: 7322, Range: 7259..7386)
- **Spoken Anchor**: *"Now let's translate that exact movement into code."*
- **Key Fact / State**: Handoff to Scene 07 (Method 2 Code).
- **Visual Layout Criteria**:
  - [ ] 5×5 Matrix is centered at X: 764, Y: 215.
  - [ ] Top zone (Y: 36..105) contains only clean metadata badges.
  - [ ] Left stage contains active cycle info / temp box without overlapping matrix.
  - [ ] Right stage contains layer hierarchy without overlapping matrix.
  - [ ] Digits inside cells are 100% crisp with zero lines cutting through numbers.
  - [ ] Captions at Y: 960..1010 have >= 195px clearance above them.
- **Status**: PENDING VERIFICATION
