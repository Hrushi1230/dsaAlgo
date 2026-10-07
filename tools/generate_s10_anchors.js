const fs = require('fs');
const path = require('path');

const syncPath = path.join(__dirname, '../questions/01-arrays-hashing/013-set-matrix-zeroes/sync/10-optimal-trace.json');
const outPath = path.join(__dirname, '../questions/01-arrays-hashing/013-set-matrix-zeroes/sync/10-optimal-trace.anchors.json');

const data = JSON.parse(fs.readFileSync(syncPath, 'utf8'));
const words = data.words;

const anchorsDef = [
  { id: 'S10_START', startIdx: 0, endIdx: 4, phrase: 'Start with our original matrix.', note: 'Original untouched 5x5 matrix' },
  { id: 'S10_FIRSTROW', startIdx: 5, endIdx: 9, phrase: 'First, inspect the first row.', note: 'Row 0 boundary scan begins' },
  { id: 'S10_R0_1', startIdx: 10, endIdx: 13, phrase: 'One is not zero.', note: 'matrix[0][0] = 1 != 0' },
  { id: 'S10_R0_2', startIdx: 14, endIdx: 17, phrase: 'Two is not zero.', note: 'matrix[0][1] = 2 != 0' },
  { id: 'S10_R0_ZERO', startIdx: 18, endIdx: 24, phrase: 'Then we reach zero at column two.', note: 'matrix[0][2] = 0 encountered' },
  { id: 'S10_FR_TRUE', startIdx: 25, endIdx: 30, phrase: 'So first row zero becomes true.', note: 'firstRowZero = true set' },
  { id: 'S10_SAFE1', startIdx: 31, endIdx: 35, phrase: 'That fact is now safe.', note: 'firstRowZero flag secured' },
  { id: 'S10_FIRSTCOL', startIdx: 36, endIdx: 40, phrase: 'Next, inspect the first column.', note: 'Col 0 boundary scan begins' },
  { id: 'S10_C0_1', startIdx: 41, endIdx: 44, phrase: 'One is not zero.', note: 'matrix[0][0] = 1 != 0' },
  { id: 'S10_C0_6', startIdx: 45, endIdx: 48, phrase: 'Six is not zero.', note: 'matrix[1][0] = 6 != 0' },
  { id: 'S10_C0_ZERO', startIdx: 49, endIdx: 55, phrase: 'Then we reach zero at row two.', note: 'matrix[2][0] = 0 encountered' },
  { id: 'S10_FC_TRUE', startIdx: 56, endIdx: 61, phrase: 'So first col zero becomes true.', note: 'firstColZero = true set' },
  { id: 'S10_BOTH_SAFE', startIdx: 62, endIdx: 67, phrase: 'Now both boundary facts are protected.', note: 'Both boundary booleans protected' },
  { id: 'S10_USEBOUND', startIdx: 68, endIdx: 79, phrase: 'We can use the first row and first column as marker memory.', note: 'Boundaries repurposed as marker rails' },
  { id: 'S10_INTERIOR_SCAN', startIdx: 80, endIdx: 83, phrase: 'Scan only the interior.', note: 'Interior 4x4 region activated' },
  { id: 'S10_ROW1_SCAN', startIdx: 84, endIdx: 90, phrase: 'Row one has seven, eight, nine, ten.', note: 'Row 1 interior: 7, 8, 9, 10' },
  { id: 'S10_ROW1_NOZERO', startIdx: 91, endIdx: 95, phrase: 'No zero. No marker changes.', note: 'Row 1 has no zeros -> no marker writes' },
  { id: 'S10_ROW2_SCAN', startIdx: 96, endIdx: 102, phrase: 'Row two has twelve, thirteen, fourteen, fifteen.', note: 'Row 2 interior: 12, 13, 14, 15' },
  { id: 'S10_ROW2_NATURAL', startIdx: 103, endIdx: 126, phrase: 'Again, no interior zero, but notice its first column cell is already zero from the original input. So row two is already marked naturally.', note: 'matrix[2][0]=0 already marked naturally' },
  { id: 'S10_ROW3_SCAN', startIdx: 127, endIdx: 129, phrase: 'Now row three.', note: 'Row 3 scan begins' },
  { id: 'S10_ROW3_17_18', startIdx: 130, endIdx: 131, phrase: 'Seventeen, eighteen,', note: 'matrix[3][1]=17, matrix[3][2]=18 checked' },
  { id: 'S10_ROW3_ZERO', startIdx: 132, endIdx: 138, phrase: 'then zero at row three, column three.', note: 'matrix[3][3] = 0 discovered' },
  { id: 'S10_IMPORTANT_ZERO', startIdx: 139, endIdx: 144, phrase: 'This is our important interior zero.', note: 'Hero focus on interior zero (3,3)' },
  { id: 'S10_MARK_ROW', startIdx: 145, endIdx: 147, phrase: 'Mark its row.', note: 'Send info left to row boundary' },
  { id: 'S10_WRITE_M30', startIdx: 148, endIdx: 155, phrase: 'Matrix, three. Zero changes from sixteen to zero.', note: 'matrix[3][0] = 0 (16 -> 0)' },
  { id: 'S10_MARK_COL', startIdx: 156, endIdx: 159, phrase: 'Then mark its column.', note: 'Send info up to column boundary' },
  { id: 'S10_WRITE_M03', startIdx: 160, endIdx: 167, phrase: 'Matrix zero. Three changes from four to zero.', note: 'matrix[0][3] = 0 (4 -> 0)' },
  { id: 'S10_SENT_INFO', startIdx: 168, endIdx: 182, phrase: 'The zero at row three, column three has now sent its information to the boundary.', note: 'Projection complete confirmation' },
  { id: 'S10_ROW3_20', startIdx: 183, endIdx: 189, phrase: 'Continue the scan. Twenty is not zero.', note: 'matrix[3][4] = 20 != 0' },
  { id: 'S10_ROW4_SCAN', startIdx: 190, endIdx: 202, phrase: 'Row four has no interior zero. So there are no more marker rights.', note: 'Row 4 scan: no zeros, no more writes' },
  { id: 'S10_MARKER_STAGE', startIdx: 203, endIdx: 207, phrase: 'Our marker matrix is now.', note: 'Discovery pass complete, marker state locked' },
  { id: 'S10_READ_BOUND', startIdx: 208, endIdx: 213, phrase: 'Now read the boundary as memory.', note: 'Transition to reading boundary memory' },
  { id: 'S10_FC_R1', startIdx: 214, endIdx: 228, phrase: 'In the first column, row one has six. So row one itself is not marked.', note: 'Col 0 check: matrix[1][0]=6 -> Row 1 not marked' },
  { id: 'S10_FC_R2', startIdx: 229, endIdx: 238, phrase: 'Row two has zero. So row two must become zero.', note: 'Col 0 check: matrix[2][0]=0 -> Row 2 marked' },
  { id: 'S10_FC_R3', startIdx: 239, endIdx: 248, phrase: 'Row three has zero. So row three must become zero.', note: 'Col 0 check: matrix[3][0]=0 -> Row 3 marked' },
  { id: 'S10_FC_R4', startIdx: 249, endIdx: 260, phrase: 'Row four has twenty-one. So row four itself is not marked.', note: 'Col 0 check: matrix[4][0]=21 -> Row 4 not marked' },
  { id: 'S10_FR_C1', startIdx: 261, endIdx: 271, phrase: 'Across the first row, column one has two. Keep that column.', note: 'Row 0 check: matrix[0][1]=2 -> Col 1 kept' },
  { id: 'S10_FR_C2', startIdx: 272, endIdx: 278, phrase: 'Column two has zero. Zero that column.', note: 'Row 0 check: matrix[0][2]=0 -> Col 2 marked' },
  { id: 'S10_FR_C3', startIdx: 279, endIdx: 285, phrase: 'Column three has zero. Zero that column.', note: 'Row 0 check: matrix[0][3]=0 -> Col 3 marked' },
  { id: 'S10_FR_C4', startIdx: 286, endIdx: 292, phrase: 'Column four has five. Keep that column.', note: 'Row 0 check: matrix[0][4]=5 -> Col 4 kept' },
  { id: 'S10_APPLY_INTERIOR', startIdx: 293, endIdx: 299, phrase: 'Now apply those markers to the interior.', note: 'Application pass begins' },
  { id: 'S10_APP_R1', startIdx: 300, endIdx: 303, phrase: 'Start with row one.', note: 'Row 1 interior update' },
  { id: 'S10_APP_R1C1', startIdx: 304, endIdx: 325, phrase: 'At row one, column one, the row marker is six. And the column marker is two. Neither is zero. So seven stays.', note: 'Cell (1,1): markers 6 & 2 -> 7 stays' },
  { id: 'S10_APP_R1C2', startIdx: 326, endIdx: 337, phrase: 'At column two, the top marker is zero. So eight becomes zero.', note: 'Cell (1,2): top marker 0 -> 8 becomes 0' },
  { id: 'S10_APP_R1C3', startIdx: 338, endIdx: 352, phrase: 'At column three, the top marker is also zero. So it is row marker is zero.', note: 'Cell (1,3): top marker 0 -> 9 becomes 0' },
  { id: 'S10_APP_R2', startIdx: 353, endIdx: 361, phrase: 'So every interior cell in row two becomes zero.', note: 'Row 2: row marker is 0 -> entire row interior becomes 0' },
  { id: 'S10_APP_R3', startIdx: 362, endIdx: 375, phrase: 'Row three is also marked. So every interior cell in row three becomes zero.', note: 'Row 3: row marker is 0 -> entire row interior becomes 0' },
  { id: 'S10_APP_R4_START', startIdx: 376, endIdx: 384, phrase: 'Now row four, its row marker is not zero.', note: 'Row 4 interior check: row marker is 21 != 0' },
  { id: 'S10_APP_R4C1', startIdx: 385, endIdx: 393, phrase: 'Column one is not marked. So twenty-two stays.', note: 'Cell (4,1): col 1 not marked -> 22 stays' },
  { id: 'S10_APP_R4C2', startIdx: 394, endIdx: 402, phrase: 'Column two is marked. So twenty-three becomes zero.', note: 'Cell (4,2): col 2 marked -> 23 becomes 0' },
  { id: 'S10_APP_R4C3', startIdx: 403, endIdx: 411, phrase: 'Column three is marked. So twenty-four becomes zero.', note: 'Cell (4,3): col 3 marked -> 24 becomes 0' },
  { id: 'S10_APP_R4C4', startIdx: 412, endIdx: 420, phrase: 'Column four is not marked. So twenty-five stays.', note: 'Cell (4,4): col 4 not marked -> 25 stays' },
  { id: 'S10_INTERIOR_FINISHED', startIdx: 421, endIdx: 432, phrase: 'The interior is finished. At this point, the matrix is this form.', note: 'Interior application pass completed' },
  { id: 'S10_MARKER_JOB_DONE', startIdx: 433, endIdx: 438, phrase: 'Now the marker job is done.', note: 'Boundaries retire from marker duty' },
  { id: 'S10_FINALIZE_R0_CALL', startIdx: 439, endIdx: 445, phrase: 'Bring back the saved first row fact.', note: 'Recall firstRowZero flag' },
  { id: 'S10_FINALIZE_R0_EXEC', startIdx: 446, endIdx: 457, phrase: 'First row zero is true. So the complete first row becomes zero.', note: 'firstRowZero=true -> Row 0 becomes all 0s' },
  { id: 'S10_FINALIZE_C0_CALL', startIdx: 458, endIdx: 464, phrase: 'Then bring back the first column fact.', note: 'Recall firstColZero flag' },
  { id: 'S10_FINALIZE_C0_EXEC', startIdx: 465, endIdx: 476, phrase: 'First col zero is also true. So the complete column becomes zero.', note: 'firstColZero=true -> Col 0 becomes all 0s' },
  { id: 'S10_FINAL_MATRIX', startIdx: 477, endIdx: 508, phrase: 'Our final matrix is zero... 22, zero, zero, zero, 25.', note: 'Final matrix read-through confirmation' },
  { id: 'S10_CORRECT_RESULT', startIdx: 509, endIdx: 513, phrase: 'That is the correct result.', note: 'Full master verification check passed' },
  { id: 'S10_O1_SPACE', startIdx: 514, endIdx: 517, phrase: 'Using constant extra space.', note: 'Space complexity achievement: O(1) extra space' },
];

const anchors = {};
for (const a of anchorsDef) {
  const sw = words[a.startIdx];
  const ew = words[a.endIdx];
  anchors[a.id] = {
    start_word_id: 'W' + String(a.startIdx).padStart(4, '0'),
    end_word_id: 'W' + String(a.endIdx).padStart(4, '0'),
    phrase: a.phrase,
    start_ms: sw.start_ms,
    end_ms: ew.end_ms,
    start_seconds: sw.start_ms / 1000,
    end_seconds: ew.end_ms / 1000,
    start_frame: sw.start_frame,
    end_frame: ew.end_frame,
    duration_frames: ew.end_frame - sw.start_frame,
    note: a.note
  };
}

fs.writeFileSync(outPath, JSON.stringify(anchors, null, 2));
console.log('Successfully generated 10-optimal-trace.anchors.json with', Object.keys(anchors).length, 'anchors.');
