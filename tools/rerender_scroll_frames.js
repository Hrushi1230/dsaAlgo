const { execSync } = require('child_process');
const path = require('path');

const frames = [2700, 3010];
for (const f of frames) {
  const outFile = path.resolve('questions/01-arrays-hashing/013-set-matrix-zeroes/output/inspect', `still-013-s11-f${f}.png`);
  console.log(`Rendering frame ${f}`);
  execSync(`npx remotion still 013-Scene11-OptimalCode "${outFile}" --frame=${f} --gl=angle`, {
    cwd: path.resolve('remotion-project'),
    stdio: 'inherit'
  });
}
console.log('Done!');
