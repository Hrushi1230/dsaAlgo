const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

const outDir = path.join(__dirname, '../questions/01-arrays-hashing/008-product-of-array-except-self/output');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

const frames = [700, 800, 920, 940, 1520, 1640, 1660];
const comp = '008-Scene06-DiscoveryPrefixSuffix';
const remotionDir = path.join(__dirname, '../remotion-project');

console.log(`Re-rendering ${frames.length} stills for ${comp}...`);
for (const f of frames) {
  const outFile = path.join(outDir, `still-008-s06-f${f}.png`);
  console.log(`Rendering frame ${f}...`);
  try {
    execSync(`npx remotion still ${comp} "${outFile}" --frame=${f} --log=warn`, {
      cwd: remotionDir,
      stdio: 'inherit',
    });
  } catch (err) {
    console.error(`Failed at frame ${f}:`, err.message);
  }
}
console.log('Done re-rendering arithmetic stills!');
