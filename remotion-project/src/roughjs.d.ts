declare module "roughjs" {
  interface Options {
    roughness?: number;
    bowing?: number;
    stroke?: string;
    strokeWidth?: number;
    fill?: string;
    fillStyle?: string;
    hachureGap?: number;
    seed?: number;
  }

  interface Drawable {}

  interface PathInfo {
    d: string;
    stroke: string;
    strokeWidth: number;
    fill?: string;
  }

  interface RoughGenerator {
    rectangle(x: number, y: number, w: number, h: number, options?: Options): Drawable;
    circle(cx: number, cy: number, diameter: number, options?: Options): Drawable;
    line(x1: number, y1: number, x2: number, y2: number, options?: Options): Drawable;
    ellipse(cx: number, cy: number, w: number, h: number, options?: Options): Drawable;
    curve(points: [number, number][], options?: Options): Drawable;
    toPaths(drawable: Drawable): PathInfo[];
  }

  const rough: {
    generator(): RoughGenerator;
  };

  export default rough;
}
