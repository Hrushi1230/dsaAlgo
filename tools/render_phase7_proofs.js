// tools/render_phase7_proofs.js
const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

const structures = [
  { folder: '01-array', comp: 'Phase7Proof-01-Array' },
  { folder: '02-hash-set', comp: 'Phase7Proof-02-HashSet' },
  { folder: '03-hash-map', comp: 'Phase7Proof-03-HashMap' },
  { folder: '04-matrix', comp: 'Phase7Proof-04-Matrix' },
  { folder: '05-linked-list', comp: 'Phase7Proof-05-LinkedList' },
  { folder: '06-stack', comp: 'Phase7Proof-06-Stack' },
  { folder: '07-queue', comp: 'Phase7Proof-07-Queue' },
  { folder: '08-tree', comp: 'Phase7Proof-08-Tree' },
  { folder: '09-heap', comp: 'Phase7Proof-09-Heap' },
  { folder: '10-graph', comp: 'Phase7Proof-10-Graph' },
  { folder: '11-union-find', comp: 'Phase7Proof-11-UnionFind' },
  { folder: '12-trie', comp: 'Phase7Proof-12-Trie' },
  { folder: '13-intervals', comp: 'Phase7Proof-13-Intervals' },
  { folder: '14-recursion', comp: 'Phase7Proof-14-Recursion' },
  { folder: '15-dp', comp: 'Phase7Proof-15-DP' },
  { folder: '16-bits', comp: 'Phase7Proof-16-Bits' },
  { folder: '17-strings', comp: 'Phase7Proof-17-Strings' },
  { folder: '18-math', comp: 'Phase7Proof-18-Math' },
];

const states = [
  { frame: 45, file: 'A_CORE.png', label: 'STATE A: CORE (frame 45)' },
  { frame: 135, file: 'B_OPERATION.png', label: 'STATE B: OPERATION (frame 135)' },
  { frame: 225, file: 'C_ADAPTIVE.png', label: 'STATE C: ADAPTIVE (frame 225)' },
];

const remotionDir = path.join(__dirname, '../remotion-project');
const baseProofDir = path.join(__dirname, '../proofs/phase7');

const filterArgs = process.argv.slice(2);
const activeStructures = filterArgs.length > 0
  ? structures.filter(s => filterArgs.some(arg => s.folder.includes(arg) || s.comp.toLowerCase().includes(arg.toLowerCase())))
  : structures;

console.log('================================================================');
console.log(`PHASE 7/8: DATA STRUCTURE PROOF RENDERING`);
console.log(`Active structures: ${activeStructures.length} | States per structure: 3 | Total stills: ${activeStructures.length * 3}`);
console.log('================================================================\n');

// 1. Ensure build is fresh
console.log('Step 1: Bundling Remotion project once for high-speed rendering...');
execSync('npm run build', { cwd: remotionDir, stdio: 'inherit' });
console.log('Remotion bundle ready.\n');

// 2. Render each structure's 3 states
let totalRendered = 0;
const results = [];

for (const { folder, comp } of activeStructures) {
  const targetDir = path.join(baseProofDir, folder);
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }

  console.log(`\n------------------------------------------------------------`);
  console.log(`[${folder}] Rendering ${comp}...`);
  console.log(`------------------------------------------------------------`);

  const structureResults = { folder, comp, stills: [] };

  for (const { frame, file, label } of states) {
    const outFile = path.join(targetDir, file);
    process.stdout.write(`  Rendering frame ${frame} -> ${file} (${label})... `);
    const start = Date.now();

    try {
      execSync(`npx remotion still build ${comp} "${outFile}" --frame=${frame} --log=warn`, {
        cwd: remotionDir,
        stdio: 'pipe',
      });

      const stats = fs.statSync(outFile);
      const durationMs = Date.now() - start;
      console.log(`OK (${(stats.size / 1024).toFixed(1)} KB, ${durationMs}ms)`);
      structureResults.stills.push({ file, size: stats.size, status: 'OK' });
      totalRendered++;
    } catch (err) {
      console.log(`FAILED!`);
      console.error(err.message);
      structureResults.stills.push({ file, size: 0, status: 'FAILED' });
      process.exit(1);
    }
  }

  results.push(structureResults);
}

console.log(`\n================================================================`);
console.log(`SUMMARY OF DATA STRUCTURE PROOF RENDERING`);
console.log(`Total Stills Rendered: ${totalRendered} / ${activeStructures.length * 3}`);
console.log(`Target Base Directory: ${baseProofDir}`);
console.log(`================================================================`);

let allOk = true;
for (const res of results) {
  const allStillsOk = res.stills.every((s) => s.status === 'OK' && s.size > 0);
  if (!allStillsOk) allOk = false;
  console.log(`  ${res.folder.padEnd(16)}: ${res.stills.map((s) => `${s.file} (${(s.size / 1024).toFixed(0)}KB)`).join(', ')}`);
}

if (allOk && totalRendered === activeStructures.length * 3) {
  console.log(`\n>>> ALL ${totalRendered} VISUAL PROOF STILLS SUCCESSFULLY GENERATED! <<<`);
} else {
  console.error(`\n>>> SOME STILLS FAILED OR ARE MISSING! <<<`);
  process.exit(1);
}
