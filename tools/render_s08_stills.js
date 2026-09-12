const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

const outDir = path.join(__dirname, '../questions/01-arrays-hashing/008-product-of-array-except-self/output');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

const frames = [89, 178, 337, 443, 550, 665, 854, 960, 1065, 1410, 1531, 1679, 1767, 1849];
const comp = '008-Scene08-PrefixSuffixCode';
const remotionDir = path.join(__dirname, '../remotion-project');

console.log(`Rendering ${frames.length} stills for ${comp}...`);
for (const f of frames) {
  const outFile = path.join(outDir, `still-008-s08-f${f}.png`);
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
console.log('Done rendering Scene 08 stills!');
