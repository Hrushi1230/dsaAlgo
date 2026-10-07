const { bundle } = require('@remotion/bundler');
const { renderStill, selectComposition } = require('@remotion/renderer');
const path = require('path');
const fs = require('fs');

async function main() {
  const remotionDir = path.join(__dirname, '../remotion-project');
  const entryPoint = path.join(remotionDir, 'src/index.ts');
  const outDir = path.join(__dirname, '../questions/01-arrays-hashing/014-rotate-image/output/inspect/scene07');
  
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }

  const frames = [
    45, 250, 450, 560, 800, 1150, 1450, 1750, 2050, 2135,
    2200, 2280, 2380, 2590, 2670, 2730, 2775, 2840, 2940, 3100,
    3230, 3420, 3650, 3800, 4000, 4170, 4260, 4400, 4600
  ];
  const compId = '014-Scene07-Method2Code';

  console.log('Bundling Remotion project once for Scene 07...');
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
    const outFile = path.join(outDir, `still-014-s07-f${f}.png`);
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

  console.log('\nAll Scene 07 verification stills rendered successfully!');
}

main().catch((err) => {
  console.error('Render error:', err);
  process.exit(1);
});
