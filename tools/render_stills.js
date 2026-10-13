/**
 * render_stills.js — Fast still renderer using pre-bundled build directory
 * Usage: node tools/render_stills.js <compName> <outDir> <frame1,frame2,...>
 */

const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

const compName = process.argv[2];
const outSubDir = process.argv[3];
const framesStr = process.argv[4];

if (!compName || !outSubDir || !framesStr) {
  console.error("Usage: node tools/render_stills.js <compName> <outSubDir> <frame1,frame2,...>");
  process.exit(1);
}

const frames = framesStr.split(',').map(s => parseInt(s.trim(), 10)).filter(n => !isNaN(n));
const projectDir = path.join(__dirname, '../remotion-project');
const outDir = path.join(__dirname, '../questions/01-arrays-hashing/017-encode-and-decode-strings/output/inspect', outSubDir);

if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

console.log(`\n============================================================`);
console.log(`[STILL RUNNER] Building Remotion bundle once...`);
console.log(`============================================================`);
execSync(`npm run build`, { cwd: projectDir, stdio: 'inherit' });

console.log(`\n============================================================`);
console.log(`[STILL RUNNER] Rendering ${frames.length} stills for ${compName}...`);
console.log(`============================================================`);

for (const f of frames) {
  const outFile = path.join(outDir, `still-${outSubDir}-f${f}.png`);
  console.log(`--> Rendering frame ${f} to ${path.basename(outFile)}...`);
  try {
    execSync(`npx remotion still build "${compName}" "${outFile}" --frame=${f} --log=warn --gl=angle --overwrite`, {
      cwd: projectDir,
      stdio: 'inherit',
    });
  } catch (err) {
    console.error(`Error rendering frame ${f}:`, err.message);
  }
}

console.log(`\n[STILL RUNNER] Done! Stills saved in: ${outDir}\n`);
