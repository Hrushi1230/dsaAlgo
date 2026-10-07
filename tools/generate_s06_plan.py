import json

with open('questions/01-arrays-hashing/014-rotate-image/sync/06-method2-trace.anchors.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

anchors = data['anchors']

lines = []
lines.append("# Scene 06 Framewise Plan: Method 2 Trace (Concentric Rings & 4-Way In-Place Swaps)")
lines.append("")
lines.append("> **Question 14**: Rotate Image (LeetCode 48) · Pattern 01 (Arrays & Hashing)")
lines.append("> **Scene**: 06 · `06-method2-trace`")
lines.append("> **Audio Duration**: 246.200s (7,386 frames @ 30fps)")
lines.append("> **Audio File**: `public/audio/014/06-method2-trace.mp3`")
lines.append("> **Sync File**: `questions/01-arrays-hashing/014-rotate-image/sync/06-method2-trace.json` (451 words)")
lines.append("> **Anchors**: 26 verified anchors")
lines.append("")
lines.append("---")
lines.append("")
lines.append("## Canvas Layout & Spatial Zero-Collision Invariants")
lines.append("")
lines.append("- **Canvas Dimensions**: 1920 × 1080 @ 30 FPS")
lines.append("- **Top Zone (Y: 36..105)**: Strictly reserved for clean metadata badges only (`01 · ARRAYS & HASHING`, `LEETCODE 48 · METHOD 2 TRACE`, `CONCENTRIC RINGS & 4-WAY IN-PLACE SWAPS`). No explanation cards, formulas, or text cards allowed in the top zone.")
lines.append("- **Center-Stage Hero (X: 764, Y: 215, 392×392px)**: 5×5 Master Matrix (`matrix[5][5]`). Pitch 80px (Cell 72px, Gap 8px). Remains dead-centered on stage throughout the entire 7,386 frames.")
lines.append("- **Left Stage (X: 80..670, Y: 180..615)**: Active Cycle Execution Card + Auxiliary Memory Box (`top_val = matrix[...]` · O(1) space) + Step-by-step 4-way swap tracker.")
lines.append("- **Right Stage (X: 1210..1840, Y: 180..615)**: Concentric Rings Hierarchy & Progress Tracker (`Layer 0: 4/4 cycles`, `Layer 1: 2/2 cycles`, `Center: 1 cell fixed`) + Ring Boundary Indicators (`top, bottom, left, right`).")
lines.append("- **Bottom Zone (Y: 655..765)**: Method 2 Key Takeaway & Algorithm Invariant Banner (`CORE PATTERN: FINISH 1 CYCLE -> FINISH 1 RING -> MOVE INWARD`).")
lines.append("- **Captions Zone (Y: 960..1010)**: Bottom-docked captions with strictly >= 195px of pristine breathing room above captions.")
lines.append("- **Zero Overlap Law**: No bounding boxes intersect; no line passes through digits.")
lines.append("")
lines.append("---")
lines.append("")
lines.append("## Framewise Anchor Choreography (26 Anchors)")
lines.append("")

anchor_details = {
    "S06_A01_IN_PLACE_INTRO": {
        "appears": "Top metadata badges + Centered 5x5 Matrix (`matrix[5][5]`) with initial values 1..25. Subtitle: 'No auxiliary matrix · O(1) extra space'.",
        "hero": "Master 5×5 Matrix at X: 764, Y: 215.",
        "cause": "Narration states: 'Now, we use only the original matrix. Think of the matrix as layers.'",
        "motion": "Matrix enters smoothly with spring animation (damping: 18, stiffness: 80).",
        "not_yet": "Layer boundary outlines, active cycle cards, arrows.",
        "hold": "Hold for viewer to establish that we are rotating strictly inside the original 5x5 matrix.",
        "cleanup": "None.",
        "persistent": "Matrix remains at center stage throughout entire scene."
    },
    "S06_A02_LAYER_BREAKDOWN": {
        "appears": "Right stage Concentric Rings Breakdown Card (X: 1210..1840, Y: 180..615). Outer layer (16 cells) highlighted with Cyan border, inner layer (8 cells) with Amber border, center cell (13) with Gold dot.",
        "hero": "5×5 Matrix displaying distinct visual rings.",
        "cause": "Narration explains 5x5 as layers: outside border is first layer, 3x3 inside is second, center is left alone.",
        "motion": "Right card slides in from right. Rings highlight sequentially: Layer 0 (F280), Layer 1 (F424), Center (F531).",
        "not_yet": "Cycle 1 swap arrows or temp variable box.",
        "hold": "Hold to understand the peeling of layers from outer to inner.",
        "cleanup": "None.",
        "persistent": "Layer cards and ring outlines remain active."
    },
    "S06_A03_OUTER_CYCLE1_FOCUS": {
        "appears": "Left stage Active Cycle Card (X: 80..670, Y: 180..615). Outer Layer 4 corners light up: Top (0,0)=1, Right (0,4)=5, Bottom (4,4)=25, Left (4,0)=21.",
        "hero": "4 corner cells pulsing with cyan/gold glow in 5×5 Matrix.",
        "cause": "Narration: 'Let's begin. With the outer layer, the first four connected positions contain top, 1, right, 5, bottom, 25, left, 21.'",
        "motion": "Left card slides in from left. 4 corner cells pulse with glow simultaneously.",
        "not_yet": "Swap movement or temp variable value.",
        "hold": "Hold to visually connect the 4 corners as a single group.",
        "cleanup": "None.",
        "persistent": "Active Cycle Card tracks current step."
    },
    "S06_A04_ROTATION_DIRECTION": {
        "appears": "Clockwise directional flow arrows connecting corners: Top -> Right -> Bottom -> Left -> Top.",
        "hero": "4 corners with outer orbital cycle track and directional arrows.",
        "cause": "Narration: 'For clockwise rotation, top must go to right, right must go to bottom, bottom must go to left, and left must go to top.'",
        "motion": "Outer cycle track draws clockwise around the 4 corners.",
        "not_yet": "Direct overwrite or disaster warning.",
        "hold": "Hold to visualize clockwise rotation loop.",
        "cleanup": "None.",
        "persistent": "Directional arrows guide the swap logic."
    },
    "S06_A05_OVERWRITE_HAZARD": {
        "appears": "Warning banner in Left Card: 'CANNOT WRITE TOP TO RIGHT DIRECTLY'. Cell (0,4) flashes warning red.",
        "hero": "Cell (0,4)=5 pulsing with red warning halo.",
        "cause": "Narration: 'But we cannot write top into right first, because we would destroy the old right value.'",
        "motion": "Red pulse on cell (0,4) and warning banner pops in Left Card.",
        "not_yet": "Temp variable box.",
        "hold": "Hold to cement the reason why direct overwrite fails.",
        "cleanup": "Red flash calms down into amber alert.",
        "persistent": "Viewer understands counter-clockwise assignment order necessity."
    },
    "S06_A06_SAVE_TOP": {
        "appears": "Auxiliary Variable Box in Left Card: `top_val = matrix[0][0] = 1`. Value 1 is saved.",
        "hero": "Temp box lights up with green glow, holding value 1.",
        "cause": "Narration: 'So save the top value. Save 1.'",
        "motion": "Ghost value 1 glides from (0,0) into `top_val` box.",
        "not_yet": "Movement of 21 into (0,0).",
        "hold": "Hold to confirm top slot (0,0) is now completely safe to overwrite.",
        "cleanup": "None.",
        "persistent": "`top_val = 1` remains in memory box."
    },
    "S06_A07_MOVE_LEFT_TO_TOP": {
        "appears": "Step 1 in Left Card: `matrix[0][0] = matrix[4][0] (21)`. Glowing tile 21 glides from (4,0) to (0,0).",
        "hero": "Tile 21 in flight along left edge up to top-left corner.",
        "cause": "Narration: 'Now move 21 from left into top,'",
        "motion": "Tile 21 moves smoothly from (4,0) to (0,0). Matrix cell (0,0) updates to 21.",
        "not_yet": "Movement of 25 into (4,0).",
        "hold": "Hold to see (0,0) successfully populated with its final rotated value 21.",
        "cleanup": "Flight tile dissolves into cell.",
        "persistent": "Cell (0,0) = 21."
    },
    "S06_A08_MOVE_BOTTOM_TO_LEFT": {
        "appears": "Step 2 in Left Card: `matrix[4][0] = matrix[4][4] (25)`. Glowing tile 25 glides from (4,4) to (4,0).",
        "hero": "Tile 25 in flight along bottom edge to bottom-left corner.",
        "cause": "Narration: 'then move 25 from bottom into left,'",
        "motion": "Tile 25 moves smoothly from (4,4) to (4,0). Matrix cell (4,0) updates to 25.",
        "not_yet": "Movement of 5 into (4,4).",
        "hold": "Hold to see (4,0) successfully populated with 25.",
        "cleanup": "Flight tile dissolves into cell.",
        "persistent": "Cell (4,0) = 25."
    },
    "S06_A09_MOVE_RIGHT_TO_BOTTOM": {
        "appears": "Step 3 in Left Card: `matrix[4][4] = matrix[0][4] (5)`. Glowing tile 5 glides from (0,4) to (4,4).",
        "hero": "Tile 5 in flight along right edge down to bottom-right corner.",
        "cause": "Narration: 'then move 5 from right into bottom.'",
        "motion": "Tile 5 moves smoothly from (0,4) to (4,4). Matrix cell (4,4) updates to 5.",
        "not_yet": "Movement of saved top_val into (0,4).",
        "hold": "Hold to see (4,4) successfully populated with 5.",
        "cleanup": "Flight tile dissolves into cell.",
        "persistent": "Cell (4,4) = 5."
    },
    "S06_A10_MOVE_TEMP_TO_RIGHT": {
        "appears": "Step 4 in Left Card: `matrix[0][4] = top_val (1)`. Saved value 1 glides from memory box into (0,4).",
        "hero": "Tile 1 in flight from temp box into top-right corner (0,4).",
        "cause": "Narration: 'And finally, move the save value, 1, into right.'",
        "motion": "Tile 1 glides into (0,4). Matrix cell (0,4) updates to 1.",
        "not_yet": "Celebratory cycle completion pulse.",
        "hold": "Hold to see all 4 corners now in rotated state.",
        "cleanup": "`top_val` box clears.",
        "persistent": "Cell (0,4) = 1."
    },
    "S06_A11_OUTER_CYCLE1_COMPLETE": {
        "appears": "Celebratory green glow on all 4 corners. Cycle 1 checkmark badge: `Cycle 1/4 Complete ✓`.",
        "hero": "4 corners (21, 1, 5, 25) glowing green in 5×5 Matrix.",
        "cause": "Narration: 'The first four-position cycle is complete. The four corners are now in their final rotated positions.'",
        "motion": "Green ring pulse around 4 corners. Checkmark appears in Right Card tracker.",
        "not_yet": "Cycle 2 positions.",
        "hold": "Hold to confirm that corners are permanently rotated and finished.",
        "cleanup": "Pulsing fades into solid green border.",
        "persistent": "4 corners locked."
    },
    "S06_A12_OUTER_CYCLE2_STEP": {
        "appears": "Index offset `i = 1`. 4 connected cells light up: Top (0,1)=2, Right (1,4)=10, Bottom (4,3)=24, Left (3,0)=16.",
        "hero": "Cycle 2 cells highlighted in Cyan.",
        "cause": "Narration: 'Move one position to the right along the top edge. The next connected values are 2, 10, 24, 16.'",
        "motion": "Offset badge updates to `i = 1`. 4 cells illuminate in synchrony.",
        "not_yet": "Execution of Cycle 2 swaps.",
        "hold": "Hold to see the 4 connected positions on each side shifted by 1.",
        "cleanup": "None.",
        "persistent": "Cycle 2 active."
    },
    "S06_A13_OUTER_CYCLE2_EXECUTE": {
        "appears": "Execution of Cycle 2: `top_val = 2`, 16 -> (0,1), 24 -> (3,0), 10 -> (4,3), saved 2 -> (1,4).",
        "hero": "Simultaneous 4-way glide and matrix cells update to: (0,1)=16, (3,0)=24, (4,3)=10, (1,4)=2.",
        "cause": "Narration: 'Save 2, 16 moves from left into top. 24 moves from bottom into left. 10 moves from right into bottom. And save 2 moves into right. Second cycle complete.'",
        "motion": "4 tiles glide simultaneously around the track. Cells turn green upon arrival.",
        "not_yet": "Cycle 3 positions.",
        "hold": "Hold to celebrate Cycle 2 completion (8/16 cells locked).",
        "cleanup": "Tiles settle into cells.",
        "persistent": "Cycle 2 cells locked in green."
    },
    "S06_A14_OUTER_CYCLE3_STEP": {
        "appears": "Index offset `i = 2`. 4 connected cells light up: Top (0,2)=3, Right (2,4)=15, Bottom (4,2)=23, Left (2,0)=11.",
        "hero": "Cycle 3 cells highlighted in Cyan.",
        "cause": "Narration: 'Move one more position. Now the connected values are 3, 15, 23, 11.'",
        "motion": "Offset badge updates to `i = 2`. 4 cells illuminate.",
        "not_yet": "Execution of Cycle 3 swaps.",
        "hold": "Hold to verify connected quartet at offset 2.",
        "cleanup": "None.",
        "persistent": "Cycle 3 active."
    },
    "S06_A15_OUTER_CYCLE3_EXECUTE": {
        "appears": "Execution of Cycle 3: `top_val = 3`, 11 -> (0,2), 23 -> (2,0), 15 -> (4,2), saved 3 -> (2,4).",
        "hero": "Simultaneous 4-way glide and matrix cells update to: (0,2)=11, (2,0)=23, (4,2)=15, (2,4)=3.",
        "cause": "Narration: 'Save 3, 11 moves into top. 23 moves into left. 15 moves into bottom. And save 3 moves into right. Third cycle complete.'",
        "motion": "4 tiles glide simultaneously. Cells lock in green.",
        "not_yet": "Cycle 4 positions.",
        "hold": "Hold to verify Cycle 3 completion (12/16 cells locked).",
        "cleanup": "Tiles settle.",
        "persistent": "Cycle 3 cells locked in green."
    },
    "S06_A16_OUTER_CYCLE4_STEP": {
        "appears": "Index offset `i = 3` (final offset of outer layer). 4 cells light up: Top (0,3)=4, Right (3,4)=20, Bottom (4,1)=22, Left (1,0)=6.",
        "hero": "Cycle 4 cells highlighted in Cyan.",
        "cause": "Narration: 'One final cycle for the outer layer. The connected values are 4, 20, 22, 6.'",
        "motion": "Offset badge updates to `i = 3`. 4 remaining unrotated border cells illuminate.",
        "not_yet": "Execution of Cycle 4.",
        "hold": "Hold to verify this is the last cycle before hitting the corner.",
        "cleanup": "None.",
        "persistent": "Cycle 4 active."
    },
    "S06_A17_OUTER_CYCLE4_EXECUTE": {
        "appears": "Execution of Cycle 4: `top_val = 4`, 6 -> (0,3), 22 -> (1,0), 20 -> (4,1), saved 4 -> (3,4).",
        "hero": "Simultaneous glide and matrix cells update to: (0,3)=6, (1,0)=22, (4,1)=20, (3,4)=4.",
        "cause": "Narration: 'Save 4, 6 moves into top. 22 moves into left. 20 moves into bottom. And save 4 moves into right.'",
        "motion": "4 tiles glide simultaneously. Cells lock in green.",
        "not_yet": "Outer layer complete banner.",
        "hold": "Hold to see the entire outer border now fully rotated.",
        "cleanup": "Tiles settle.",
        "persistent": "All 16 outer cells locked."
    },
    "S06_A18_OUTER_LAYER_COMPLETE": {
        "appears": "All 16 outer cells glow bright Green in unison! Right Card updates: `Layer 0: 4/4 Cycles Complete ✓ · 16 Cells Locked`.",
        "hero": "Entire outer border of 5×5 Matrix illuminated in victorious green.",
        "cause": "Narration: 'Now the entire outer layer is complete. Every value on this border is already in its final rotated position. So we do not touch this layer again.'",
        "motion": "Celebratory pulse ripples across the outer border. Outer layer boundary locks.",
        "not_yet": "Inner ring animation.",
        "hold": "Hold to fully comprehend the outer ring is permanently finished and invariant.",
        "cleanup": "Pulse settles into solid green lock.",
        "persistent": "Outer ring locked."
    },
    "S06_A19_INNER_LAYER_INTRO": {
        "appears": "Focus shifts to 3x3 Inner Layer (`layer = 1`, `left = 1, right = 3, top = 1, bottom = 3`). Outer ring dims slightly (opacity 0.65). 4 inner corners light up: (1,1)=7, (1,3)=9, (3,3)=19, (3,1)=17.",
        "hero": "Inner 3×3 Ring centered inside 5×5 Matrix.",
        "cause": "Narration: 'Now move one layer inward. The inner layer is a 3 by 3 border. Its first connected values are 7, 9, 19, 17.'",
        "motion": "Camera focus / spotlight tightens on inner 3x3 ring. Inner 4 corners glow cyan.",
        "not_yet": "Execution of inner cycle 1.",
        "hold": "Hold to recognize that the identical 4-way swap logic applies to the inner ring.",
        "cleanup": "None.",
        "persistent": "Inner ring active."
    },
    "S06_A20_INNER_CYCLE1_EXECUTE": {
        "appears": "Execution of Inner Cycle 1: `top_val = 7`, 17 -> (1,1), 19 -> (3,1), 9 -> (3,3), saved 7 -> (1,3).",
        "hero": "Simultaneous glide in inner ring: (1,1)=17, (3,1)=19, (3,3)=9, (1,3)=7.",
        "cause": "Narration: 'Save 7, 17 moves into top. 19 moves into left. 9 moves into bottom. And save 7 moves into right. First inner cycle complete.'",
        "motion": "4 inner corner tiles glide simultaneously. Cells lock in green.",
        "not_yet": "Inner cycle 2.",
        "hold": "Hold to verify inner corners rotated.",
        "cleanup": "Tiles settle.",
        "persistent": "Inner corners locked."
    },
    "S06_A21_INNER_CYCLE2_STEP": {
        "appears": "Offset `i = 1` in inner ring. 4 edge centers light up: Top (1,2)=8, Right (2,3)=14, Bottom (3,2)=18, Left (2,1)=12.",
        "hero": "4 inner edge center cells illuminated in Cyan.",
        "cause": "Narration: 'Now the final four position cycle. The values are 8, 14, 18, 12.'",
        "motion": "4 cells illuminate.",
        "not_yet": "Execution of inner cycle 2.",
        "hold": "Hold to see the final 4 cells that need rotating.",
        "cleanup": "None.",
        "persistent": "Inner Cycle 2 active."
    },
    "S06_A22_INNER_CYCLE2_EXECUTE": {
        "appears": "Execution of Inner Cycle 2: `top_val = 8`, 12 -> (1,2), 18 -> (2,1), 14 -> (3,2), saved 8 -> (2,3).",
        "hero": "Simultaneous glide: (1,2)=12, (2,1)=18, (3,2)=14, (2,3)=8. All 8 inner cells now green!",
        "cause": "Narration: 'Save 8, 12 moves into top. 18 moves into left. 14 moves into bottom. And save 8 moves into right. The inner layer is now complete.'",
        "motion": "4 tiles glide and settle. Inner ring pulses green.",
        "not_yet": "Center cell callout.",
        "hold": "Hold to celebrate inner ring completion (24/25 cells locked).",
        "cleanup": "Tiles settle.",
        "persistent": "Layer 0 and Layer 1 locked in green."
    },
    "S06_A23_CENTER_ELEMENT": {
        "appears": "Center cell (2,2)=13 illuminated with Gold/Purple glow + callout badge: `CENTER (2,2) = 13 · 1x1 MATRIX · FIXED`.",
        "hero": "Cell (2,2)=13 at exact geometric center of Matrix.",
        "cause": "Narration: 'And 13. The center value was never part of any four position cycle. So it remained exactly where it started.'",
        "motion": "Gentle pulsing aura around cell 13. All 25 cells are now green.",
        "not_yet": "Full matrix verification display.",
        "hold": "Hold to understand why odd-dimension matrices leave the center untouched.",
        "cleanup": "Callout badge settles.",
        "persistent": "All 25 cells fully rotated."
    },
    "S06_A24_FULL_ROTATION_VERIFICATION": {
        "appears": "Full Matrix Glow + Verification Badge: `ROTATION 100% COMPLETE · 25/25 CELLS MATCH OUTPUT`.",
        "hero": "Complete rotated 5×5 Matrix: Row 0: [21, 16, 11, 6, 1] .. Row 4: [25, 20, 15, 10, 5].",
        "cause": "Narration: 'The entire matrix has now been rotated 90 degrees clockwise without creating another matrix.'",
        "motion": "Matrix glows with full green aura. Output matches expected rotated array exactly.",
        "not_yet": "Summary banner.",
        "hold": "Hold to savor the visual proof of in-place rotation.",
        "cleanup": "None.",
        "persistent": "Verified state."
    },
    "S06_A25_ALGORITHM_SUMMARY": {
        "appears": "Bottom Zone Summary Card (Y: 655..765): `CORE INVARIANT: 1 CYCLE -> 1 RING -> MOVE INWARD · O(1) SPACE`.",
        "hero": "Matrix + Summary Card.",
        "cause": "Narration: 'The pattern is finish one four position cycle safely, continue across the layer, finish the complete layer, then move inward.'",
        "motion": "Bottom card slides up smoothly from below.",
        "not_yet": "Code handoff banner.",
        "hold": "Hold to review the 3-step hierarchical loop structure.",
        "cleanup": "None.",
        "persistent": "Summary card."
    },
    "S06_A26_CODE_HANDOFF": {
        "appears": "Next Scene Transition Card: `NEXT: SCENE 07 · METHOD 2 CODE (IN-PLACE 4-WAY ROTATION IN PYTHON)`.",
        "hero": "Matrix + Transition Banner.",
        "cause": "Narration: 'Now let's translate that exact movement into code.'",
        "motion": "Handoff banner pulses with gold border.",
        "not_yet": "Scene 07 content.",
        "hold": "Final hold to conclude Scene 06 at Frame 7386.",
        "cleanup": "Clean end of scene.",
        "persistent": "Final frame state."
    }
}

for anchor_id, data_item in anchors.items():
    det = anchor_details.get(anchor_id, {})
    sf = data_item['start_frame']
    ef = data_item['end_frame']
    phrase = data_item['phrase']
    
    lines.append(f"### {anchor_id} (Frames {sf}..{ef})")
    lines.append(f"- **ANCHOR**: `{anchor_id}` · Frames {sf}..{ef} · Spoken Phrase: *\"{phrase}\"*")
    lines.append(f"- **WHAT APPEARS NOW**: {det.get('appears', '')}")
    lines.append(f"- **CENTER-STAGE HERO**: {det.get('hero', '')}")
    lines.append(f"- **CAUSE**: {det.get('cause', '')}")
    lines.append(f"- **EFFECT / MOTION**: {det.get('motion', '')}")
    lines.append(f"- **WHAT MUST NOT APPEAR YET**: {det.get('not_yet', '')}")
    lines.append(f"- **COMPREHENSION HOLD**: {det.get('hold', '')}")
    lines.append(f"- **CLEANUP / EXIT**: {det.get('cleanup', '')}")
    lines.append(f"- **PERSISTENT STATE**: {det.get('persistent', '')}")
    lines.append("")

with open('questions/01-arrays-hashing/014-rotate-image/plans/06-method2-trace_FRAMEWISE_PLAN.md', 'w', encoding='utf-8') as f:
    f.write('\n'.join(lines))

print("Created questions/01-arrays-hashing/014-rotate-image/plans/06-method2-trace_FRAMEWISE_PLAN.md successfully!")
