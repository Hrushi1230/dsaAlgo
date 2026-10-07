const { bundle } = require('@remotion/bundler');
const { renderStill, selectComposition } = require('@remotion/renderer');
const path = require('path');
const fs = require('fs');

async function main() {
  const remotionDir = path.join(__dirname, '../remotion-project');
  const entryPoint = path.join(remotionDir, 'src/index.ts');
  const outDir = path.join(__dirname, '../questions/01-arrays-hashing/014-rotate-image/output/inspect/scene10');
  
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }

  const frames = [
    100, 300, 550, 800, 1090, 1180, 1260, 1340, 1710, 1800, 1880, 2170, 2250, 2620, 2800, 3100, 3340, 3450, 3640, 3680, 3715, 3760, 3950, 4200, 4450
  ];
  const compId = '014-Scene10-Method3Trace';

  console.log('Bundling Remotion project once for Scene 10...');
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

  console.log(`Rendering ${frames.length} verification stills to: ${outDir}`);
  for (const f of frames) {
    const outFile = path.join(outDir, `still-014-s10-f${f}.png`);
    process.stdout.write(`Rendering frame ${f}... `);
    await renderStill({
      composition,
      serveUrl: bundleLocation,
      output: outFile,
      frame: f,
      imageFormat: 'png',
    });
    console.log('DONE');
  }

  console.log('\nAll Scene 10 verification stills rendered successfully!');
}

main().catch((err) => {
  console.error('Render error:', err);
  process.exit(1);
});
