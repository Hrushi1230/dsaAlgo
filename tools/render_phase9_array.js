// tools/render_phase9_array.js
const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

const comp = 'FoundationV2-Phase9-ArraySystem';
const remotionDir = path.join(__dirname, '../remotion-project');
const outDir = path.join(__dirname, '../proofs/phase9-array');

if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

const states = [
  { frame: 30, file: 'A_CORE.png', label: 'STATE A: CORE (frame 30)' },
  { frame: 90, file: 'B_READ_WRITE.png', label: 'STATE B: READ & WRITE (frame 90)' },
  { frame: 150, file: 'C_SWAP.png', label: 'STATE C: SWAP (frame 150)' },
  { frame: 210, file: 'D_POINTERS.png', label: 'STATE D: MULTI-LANE POINTERS (frame 210)' },
  { frame: 270, file: 'E_PARTITION.png', label: 'STATE E: PARTITION BANDS (frame 270)' },
  { frame: 330, file: 'F_DENSE.png', label: 'STATE F: DENSE & COMPACT ARRAYS (frame 330)' },
];

console.log('================================================================');
console.log('PHASE 9: ARRAY V2 PRIMITIVE SYSTEM PROOF RENDERING');
console.log(`Composition: ${comp}`);
console.log(`Total stills: ${states.length} | Target: ${outDir}`);
console.log('================================================================\n');

// 1. Ensure build is fresh
console.log('Step 1: Bundling Remotion project...');
execSync('npm run build', { cwd: remotionDir, stdio: 'inherit' });
console.log('Remotion bundle ready.\n');

// 2. Render each state still
console.log('Step 2: Rendering 6 Proof Stills...');
const results = [];
for (const { frame, file, label } of states) {
  const outFile = path.join(outDir, file);
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
    results.push({ file, size: stats.size, status: 'OK' });
  } catch (err) {
    console.log('FAILED!');
    console.error(err.message);
    process.exit(1);
  }
}

// 3. Render MP4 video proof
console.log('\nStep 3: Rendering 12.0s Proof Video (ArraySystemProof.mp4)...');
const outVideo = path.join(outDir, 'ArraySystemProof.mp4');
try {
  execSync(`npx remotion render build ${comp} "${outVideo}" --log=warn`, {
    cwd: remotionDir,
    stdio: 'inherit',
  });
  const videoStats = fs.statSync(outVideo);
  console.log(`Video rendered successfully: ${(videoStats.size / (1024 * 1024)).toFixed(2)} MB\n`);
} catch (err) {
  console.error('Video rendering failed:', err.message);
  process.exit(1);
}

console.log('================================================================');
console.log('PHASE 9 RENDERING COMPLETE');
console.log(`Stills: ${results.length} / 6 OK`);
console.log(`Video: ArraySystemProof.mp4 OK`);
console.log('================================================================');
