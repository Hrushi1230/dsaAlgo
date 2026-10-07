const { bundle } = require('@remotion/bundler');
const { renderStill, selectComposition } = require('@remotion/renderer');
const path = require('path');
const fs = require('fs');

async function main() {
  const remotionDir = path.join(__dirname, '../remotion-project');
  const entryPoint = path.join(remotionDir, 'src/index.ts');
  const outDir = path.join(__dirname, '../questions/01-arrays-hashing/014-rotate-image/output/inspect/scene02');
  
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }

  const frames = [
    50, 180, 300, 410, 500, 720, 1010, 1250, 1420, 1550,
    1760, 1980, 2120, 2300, 2650, 2920, 3230, 3330, 3430, 3620,
    3720, 3880, 4010, 4170, 4300
  ];
  const compId = '014-Scene02-Understand';

  console.log('Bundling Remotion project once...');
  const bundleLocation = await bundle({
    entryPoint,
    webpackOverride: (config) => config,
  });
  console.log('Bundle created successfully at:', bundleLocation);

  console.log('Selecting composition:', compId);
  const composition = await selectComposition({
    serveUrl: bundleLocation,
    id: compId,
  });

  console.log(`Rendering ${frames.length} verification stills...`);
  for (const f of frames) {
    const outFile = path.join(outDir, `still-014-s02-f${f}.png`);
    process.stdout.write(`Rendering frame ${f}... `);
    await renderStill({
      composition,
      serveUrl: bundleLocation,
      output: outFile,
      frame: f,
      logLevel: 'warn',
    });
    console.log('DONE');
  }

  console.log('All Scene 02 verification stills rendered successfully!');
}

main().catch((err) => {
  console.error('Fatal error rendering stills:', err);
  process.exit(1);
});
