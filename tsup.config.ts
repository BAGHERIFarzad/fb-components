import {
  defineConfig,
} from "tsup";

export default defineConfig({
  entry: {
    index:
      "src/index.ts",

    backgrounds:
      "src/backgrounds/index.ts",

    buttons:
      "src/buttons/index.ts",

    text:
      "src/text/index.ts",

    ui:
      "src/ui/index.ts",

    motion:
      "src/motion/index.ts",

    ai:
      "src/ai/index.ts",

    heroes:
      "src/heroes/index.ts",

    landing:
      "src/landing/index.ts",

    data:
      "src/data/index.ts",
  },

  format: [
    "esm",
    "cjs",
  ],

  dts: true,

  sourcemap: true,

  clean: true,

  minify: false,

  splitting: true,

  treeshake: true,

  external: [
    "react",
    "react-dom",
  ],

  outExtension({
    format,
  }) {
    return {
      js:
        format ===
        "cjs"
          ? ".cjs"
          : ".js",
    };
  },
});