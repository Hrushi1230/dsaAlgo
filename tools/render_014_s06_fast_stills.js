const { bundle } = require('@remotion/bundler');
const { renderStill, selectComposition } = require('@remotion/renderer');
const path = require('path');
const fs = require('fs');

async function main() {
  const remotionDir = path.join(__dirname, '../remotion-project');
  const entryPoint = path.join(remotionDir, 'src/index.ts');
  const outDir = path.join(__dirname, '../questions/01-arrays-hashing/014-rotate-image/output/inspect/scene06');
  
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }

  const frames = [
    100, 400, 800, 1130, 1370, 1550, 1680, 1810, 1950, 2100,
    2290, 2550, 2980, 3360, 3700, 4030, 4330, 4700, 5080, 5460,
    5800, 6140, 6510, 6800, 7100, 7320
  ];
  const compId = '014-Scene06-Method2Trace';

  console.log('Bundling Remotion project once for Scene 06...');
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
    const outFile = path.join(outDir, `still-014-s06-f${f}.png`);
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

  console.log('\nAll Scene 06 verification stills rendered successfully!');
}

main().catch((err) => {
  console.error('Render error:', err);
  process.exit(1);
});
