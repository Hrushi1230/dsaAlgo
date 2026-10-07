const fs = require('fs');
const path = require('path');

const syncPath = path.join(__dirname, '../questions/01-arrays-hashing/013-set-matrix-zeroes/sync/11-optimal-code.json');
const outPath = path.join(__dirname, '../questions/01-arrays-hashing/013-set-matrix-zeroes/sync/11-optimal-code.anchors.json');

const data = JSON.parse(fs.readFileSync(syncPath, 'utf8'));
const words = data.words;

const anchorsDef = [
  { id: 'S11_OPEN', startIdx: 0, endIdx: 6, phrase: "Now let's write the optimal solution carefully.", note: 'Intro to optimal code' },
  { id: 'S11_M', startIdx: 7, endIdx: 14, phrase: 'First, store the number of rows in M', note: 'm = len(matrix)' },
  { id: 'S11_N', startIdx: 15, endIdx: 21, phrase: 'and the number of columns in N.', note: 'n = len(matrix[0])' },
  { id: 'S11_TWO', startIdx: 22, endIdx: 24, phrase: 'Create two booleans.', note: 'Two boolean flags' },
  { id: 'S11_FRFALSE', startIdx: 25, endIdx: 30, phrase: 'First, row 0 starts as false.', note: 'firstRowZero = False' },
  { id: 'S11_FCFALSE', startIdx: 31, endIdx: 36, phrase: 'First call 0 starts as false.', note: 'firstColZero = False' },
  { id: 'S11_BEFORE', startIdx: 37, endIdx: 48, phrase: 'Before we use the boundary as marker memory, save its original state.', note: 'Save original state rationale' },
  { id: 'S11_SCANROW', startIdx: 49, endIdx: 52, phrase: 'Scan the first row.', note: 'for c in range(n):' },
  { id: 'S11_IFROW', startIdx: 53, endIdx: 57, phrase: 'If any cell is 0,', note: 'if matrix[0][c] == 0:' },
  { id: 'S11_SETFR', startIdx: 58, endIdx: 63, phrase: 'set first row 0 to true.', note: 'firstRowZero = True' },
  { id: 'S11_SCANCOL', startIdx: 64, endIdx: 68, phrase: 'Then scan the first column.', note: 'for r in range(m):' },
  { id: 'S11_IFCOL', startIdx: 69, endIdx: 73, phrase: 'If any cell is 0,', note: 'if matrix[r][0] == 0:' },
  { id: 'S11_SETFC', startIdx: 74, endIdx: 79, phrase: 'set first call 0 to true.', note: 'firstColZero = True' },
  { id: 'S11_PROTECTED', startIdx: 80, endIdx: 85, phrase: 'Now the boundary history is protected.', note: 'Boundary history secured' },
  { id: 'S11_NEXT', startIdx: 86, endIdx: 90, phrase: 'Next scan only the interior.', note: 'Interior discovery loop shell' },
  { id: 'S11_ROWS1', startIdx: 91, endIdx: 94, phrase: 'Start rows from 1', note: 'for r in range(1, m):' },
  { id: 'S11_COLS1', startIdx: 95, endIdx: 98, phrase: 'and columns from 1.', note: 'for c in range(1, n):' },
  { id: 'S11_WHENZERO', startIdx: 99, endIdx: 103, phrase: 'Whenever matrix base is 0,', note: 'if matrix[r][c] == 0:' },
  { id: 'S11_WRITEROW', startIdx: 104, endIdx: 108, phrase: 'write 0 into matrix 0.', note: 'matrix[r][0] = 0' },
  { id: 'S11_MARKSROW', startIdx: 109, endIdx: 112, phrase: 'That marks the row.', note: 'Row mark meaning' },
  { id: 'S11_WRITECOL', startIdx: 113, endIdx: 119, phrase: 'Then write 0 into matrix 0. See,', note: 'matrix[0][c] = 0' },
  { id: 'S11_MARKSCOL', startIdx: 120, endIdx: 123, phrase: 'that marks the column.', note: 'Column mark meaning' },
  { id: 'S11_AFTERPASS', startIdx: 124, endIdx: 136, phrase: 'After this pass, the first row and first column are our marker arrays.', note: 'Marker arrays ready' },
  { id: 'S11_APPLY', startIdx: 137, endIdx: 140, phrase: 'Now apply the markers.', note: 'Application pass transition' },
  { id: 'S11_AGAIN', startIdx: 141, endIdx: 145, phrase: 'Again, scan only the interior.', note: 'Interior application loops: range(1, m) & range(1, n)' },
  { id: 'S11_FOREACH', startIdx: 146, endIdx: 148, phrase: 'For each cell,', note: 'Cell condition check' },
  { id: 'S11_ROWCOND', startIdx: 149, endIdx: 153, phrase: 'if matrix 0 is 0', note: 'if matrix[r][0] == 0' },
  { id: 'S11_ORCOL', startIdx: 154, endIdx: 158, phrase: 'or matrix 0 is 0,', note: 'or matrix[0][c] == 0:' },
  { id: 'S11_SETCELL', startIdx: 159, endIdx: 163, phrase: 'set matrix C to 0.', note: 'matrix[r][c] = 0' },
  { id: 'S11_INTERIORFINAL', startIdx: 164, endIdx: 170, phrase: 'At this point, the interior is final.', note: 'Interior final' },
  { id: 'S11_BOUNDONLY', startIdx: 171, endIdx: 174, phrase: 'Only the boundary remains.', note: 'Only boundary remains' },
  { id: 'S11_IFFR', startIdx: 175, endIdx: 180, phrase: 'If first row 0 is true,', note: 'if firstRowZero:' },
  { id: 'S11_ZEROROW', startIdx: 181, endIdx: 186, phrase: '0 every cell in row 0.', note: 'for c in range(n): matrix[0][c] = 0' },
  { id: 'S11_IFFC', startIdx: 187, endIdx: 193, phrase: 'And if first call 0 is true,', note: 'if firstColZero:' },
  { id: 'S11_ZEROCOL', startIdx: 194, endIdx: 199, phrase: '0 every cell in column 0.', note: 'for r in range(m): matrix[r][0] = 0' },
  { id: 'S11_COMPLETE', startIdx: 200, endIdx: 205, phrase: 'That is the complete optimal solution.', note: 'Full optimal code assembled' },
  { id: 'S11_ORDER', startIdx: 206, endIdx: 208, phrase: 'Notice the order.', note: 'Critical order recap' },
  { id: 'S11_SAVE', startIdx: 209, endIdx: 211, phrase: 'Save boundary history.', note: 'Step 1: Save history' },
  { id: 'S11_MARK', startIdx: 212, endIdx: 214, phrase: 'Mark the interior.', note: 'Step 2: Mark interior' },
  { id: 'S11_APPLYORD', startIdx: 215, endIdx: 217, phrase: 'Apply those markers.', note: 'Step 3: Apply markers' },
  { id: 'S11_FINALORD', startIdx: 218, endIdx: 221, phrase: 'Then finalize the boundary.', note: 'Step 4: Finalize boundary' },
  { id: 'S11_CARELESS', startIdx: 222, endIdx: 227, phrase: 'If we change that order carelessly,', note: 'Warning: order change' },
  { id: 'S11_DESTROY', startIdx: 228, endIdx: 234, phrase: 'we can destroy our own marker information.', note: 'Consequence: marker loss' }
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
console.log('Successfully generated 11-optimal-code.anchors.json with', Object.keys(anchors).length, 'anchors.');
