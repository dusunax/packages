import * as esbuild from "esbuild";
import { nodeExternalsPlugin } from "esbuild-node-externals";

// ESM Build
esbuild
  .build({
    entryPoints: ["src/index.ts"],
    bundle: true,
    outfile: "dist/index.esm.js",
    format: "esm",
    platform: "browser",
    sourcemap: true,
    minify: true,
    plugins: [
      nodeExternalsPlugin()
    ],
  })
  .catch(() => process.exit(1));

// CJS Build
esbuild
  .build({
    entryPoints: ["src/index.ts"],
    bundle: true,
    outfile: "dist/index.js",
    format: "cjs",
    platform: "browser",
    sourcemap: true,
    minify: true,
    plugins: [
      nodeExternalsPlugin()
    ],
  })
  .catch(() => process.exit(1));
