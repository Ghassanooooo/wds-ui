import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import { terser } from "rollup-plugin-terser";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import alias from "@rollup/plugin-alias";
import path from "path";
import postcss from "rollup-plugin-postcss";

const packageJson = require("./package.json");

export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [
      peerDepsExternal(),
      resolve(),
      commonjs(),
      // Ensure TypeScript only compiles *.ts and *.tsx files
      typescript({
        tsconfig: "./tsconfig.json",
        include: ["**/*.ts+(|x)"], // Include TypeScript files only
      }),
      // PostCSS plugin to handle CSS files
      postcss({
        extract: "index.css",
        config: {
          path: "./postcss.config.js",
        },
        minimize: true,
        sourceMap: true,
      }),
      terser(),
      alias({
        entries: [{ find: "@", replacement: path.resolve(__dirname, "src") }],
      }),
    ],
    external: ["react", "react-dom", "styled-components"],
  },
  // Separate build for generating type definitions
  {
    input: "src/index.ts",
    output: [{ file: "dist/types.d.ts", format: "es" }],
    plugins: [dts.default()],
    // Exclude CSS from this build step
    external: [/\.css$/],
  },
];
