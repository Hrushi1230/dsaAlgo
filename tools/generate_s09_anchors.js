const fs = require('fs');
const path = require('path');

const syncPath = path.join(__dirname, '../questions/01-arrays-hashing/013-set-matrix-zeroes/sync/09-optimal-idea.json');
const outPath = path.join(__dirname, '../questions/01-arrays-hashing/013-set-matrix-zeroes/sync/09-optimal-idea.anchors.json');

const data = JSON.parse(fs.readFileSync(syncPath, 'utf8'));
const words = data.words;

const anchorsDef = [
  { id: 'S09_KEY', startIdx: 0, endIdx: 8, phrase: 'This is the key idea of the optimal solution.', note: 'Optimal solution key idea' },
  { id: 'S09_PROTECTED', startIdx: 9, endIdx: 21, phrase: 'We have already protected the original first row and first column state.', note: 'Protected boundary state' },
  { id: 'S09_JOB', startIdx: 22, endIdx: 27, phrase: 'From this point, their job changes.', note: 'Boundary role transition' },
  { id: 'S09_FC', startIdx: 28, endIdx: 34, phrase: 'The first column becomes row marker memory.', note: 'Col 0 = row markers' },
  { id: 'S09_FR', startIdx: 35, endIdx: 41, phrase: 'The first row becomes column marker memory.', note: 'Row 0 = column markers' },
  { id: 'S09_INTERIOR', startIdx: 42, endIdx: 46, phrase: 'Now scan only the interior.', note: 'Scan interior cells only' },
  { id: 'S09_FIND', startIdx: 47, endIdx: 57, phrase: 'Suppose we find an interior zero at row R column C.', note: 'Interior zero at (r,c)' },
  { id: 'S09_NOTIMM', startIdx: 58, endIdx: 65, phrase: 'We do not zero the complete row immediately.', note: 'Non-immediate mutation rule' },
  { id: 'S09_OUT', startIdx: 66, endIdx: 69, phrase: 'We send information outward.', note: 'Send info outward to boundaries' },
  { id: 'S09_ROWWRITE', startIdx: 70, endIdx: 78, phrase: 'Write zero at the first cell of that row.', note: 'matrix[r][0] = 0 write' },
  { id: 'S09_ROWMEAN', startIdx: 79, endIdx: 86, phrase: 'That means this row must become zero later.', note: 'Row must become zero later' },
  { id: 'S09_COLWRITE', startIdx: 87, endIdx: 96, phrase: 'Then write zero at the top cell of that column.', note: 'matrix[0][c] = 0 write' },
  { id: 'S09_COLMEAN', startIdx: 97, endIdx: 104, phrase: 'That means this column must become zero later.', note: 'Col must become zero later' },
  { id: 'S09_PROJECT', startIdx: 105, endIdx: 114, phrase: 'So an interior zero projects its information to the boundary.', note: 'Projection summary' },
  { id: 'S09_AFTER', startIdx: 115, endIdx: 124, phrase: 'After the discovery pass, the boundary contains everything we need.', note: 'Boundary contains all info' },
  { id: 'S09_REVERSE', startIdx: 125, endIdx: 128, phrase: 'Then the direction reverses.', note: 'Direction reverses: boundary to interior' },
  { id: 'S09_TWOQ', startIdx: 129, endIdx: 134, phrase: 'Each interior cell asks two questions.', note: 'Interior cell asks two questions' },
  { id: 'S09_ROWQ', startIdx: 135, endIdx: 139, phrase: 'Is my row marker zero?', note: 'Question 1: row marker == 0?' },
  { id: 'S09_COLQ', startIdx: 140, endIdx: 145, phrase: 'Or is my column marker zero?', note: 'Question 2: col marker == 0?' },
  { id: 'S09_EITHER', startIdx: 146, endIdx: 154, phrase: 'If either answer is yes, the cell becomes zero.', note: 'If either is zero, cell = 0' },
  { id: 'S09_DONE', startIdx: 155, endIdx: 166, phrase: 'Once the interior is finished, the boundary has completed its marker job.', note: 'Boundary marker job completed' },
  { id: 'S09_FLAGS', startIdx: 167, endIdx: 173, phrase: 'Then we use the two saved Booleans', note: 'Use two saved booleans' },
  { id: 'S09_FINROW', startIdx: 174, endIdx: 178, phrase: 'to finalize the first row', note: 'Finalize first row' },
  { id: 'S09_FINCOL', startIdx: 179, endIdx: 182, phrase: 'and the first column.', note: 'Finalize first column' },
  { id: 'S09_FLOW', startIdx: 183, endIdx: 187, phrase: 'So the information flow is', note: 'Information flow recap' },
  { id: 'S09_SAVE', startIdx: 188, endIdx: 191, phrase: 'save the boundary history.', note: 'Step 1: save boundary history' },
  { id: 'S09_SEND', startIdx: 192, endIdx: 198, phrase: 'Send zero information out to the boundary.', note: 'Step 2: send info outward' },
  { id: 'S09_USE', startIdx: 199, endIdx: 205, phrase: 'Use the boundary to update the interior.', note: 'Step 3: use boundary for interior' },
  { id: 'S09_FINALIZE', startIdx: 206, endIdx: 213, phrase: 'Then finalize the boundary using the saved flags.', note: 'Step 4: finalize boundaries' },
  { id: 'S09_EXEC', startIdx: 214, endIdx: 221, phrase: "Now let's execute that on our master matrix.", note: 'Handoff to Master Trace (Scene 10)' }
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
console.log('Successfully generated 09-optimal-idea.anchors.json with', Object.keys(anchors).length, 'anchors.');
