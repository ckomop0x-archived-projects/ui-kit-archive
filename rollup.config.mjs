import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import url from '@rollup/plugin-url';
import terser from "@rollup/plugin-terser";
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import postcssPresetEnv from 'postcss-preset-env';
import excludeDependenciesFromBundle from 'rollup-plugin-exclude-dependencies-from-bundle';
import postcss from 'rollup-plugin-postcss';
import packageJson from "./package.json" assert { type: "json" };

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
        format: "es",
        sourcemap: true,
      },
    ],
    plugins: [
      excludeDependenciesFromBundle({ dependencies: true }),
      peerDepsExternal(),
      resolve(),
      commonjs(),
      postcss({
        plugins: [postcssPresetEnv({
          stage: 1,
          features: { }
        })]
      }),
      typescript({ tsconfig: "./tsconfig.json", "compilerOptions" : { declaration: true, declarationMap: true } }),
      terser(),
      url({
        // by default, rollup-plugin-url will not handle font files
        include: ['**/*.woff', '**/*.woff2'],
        // setting infinite limit will ensure that the files
        // are always bundled with the code, not copied to /dist
        limit: Infinity,
      }),
    ],
    external: ["react", "react-dom"]
  },
  {
    input: "dist/esm/types/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "es" }],
    plugins: [dts()],
  },
];
