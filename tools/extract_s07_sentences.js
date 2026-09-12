const fs = require('fs');
const data = require('../questions/01-arrays-hashing/008-product-of-array-except-self/sync/07-trace-prefix-suffix.json');
const words = data.words;

let currentSentence = [];
let startF = words[0].start_frame;

words.forEach((w, i) => {
  currentSentence.push(w.word);
  if (w.word.endsWith('.') || w.word.endsWith('?') || w.word.endsWith('!') || i === words.length - 1) {
    const text = currentSentence.join(' ').replace(/"/g, '\\"');
    console.log(`if (frame < ${w.end_frame + 12}) return "${text}"; // F${startF}..F${w.end_frame}`);
    currentSentence = [];
    if (i + 1 < words.length) startF = words[i + 1].start_frame;
  }
});
