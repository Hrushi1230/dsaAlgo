---
name: remotion-render
description: Export a Remotion video
version: 4.0.507
---

## General rendering strategy

Render a video using:

```bash
npx remotion render build <CompositionId> <output.mp4>
```

Full list of options: https://www.remotion.dev/docs/cli/render.md

## High-Resolution Upscaling Rules (2K & 4K)

All DSA course compositions are authored in a **1920 × 1080** coordinate space.

### The Zero-Void Scaling Law
- **CRITICAL**: **NEVER** use `--width` and `--height` CLI flags to upscale (e.g. `--width=2560 --height=1440`). This merely expands the browser viewport without scaling the React layout, leaving a 640px empty right void and 360px bottom void!
- **ALWAYS** use the `--scale` CLI flag for high-resolution video exports:
  - **2K (2560 × 1440 / 1440p QHD)**: `--scale=1.3333333333333333`
  - **4K (3840 × 2160 / 2160p UHD)**: `--scale=2`
  - **1080p (1920 × 1080 / Full HD)**: default (omit or `--scale=1`)

### Standard Master Video Render Command
```bash
# 1. Build bundle
npm run build

# 2. Render at 2K with 12 concurrency
npx remotion render build <CompId> <out.mp4> --scale=1.3333333333333333 --concurrency=12 --gl=angle --overwrite
```

## Stills Rendering

Render a still using:

```bash
npx remotion still build <CompositionId> <output.png> --frame=<frame> --gl=angle
```

For a 2K still preview:
```bash
npx remotion still build <CompositionId> <output.png> --frame=<frame> --scale=1.3333333333333333 --gl=angle
```

## Transparent videos

See [Transparent videos](./transparent-videos.md) for rendering out a video with transparency.

