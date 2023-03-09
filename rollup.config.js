import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import { terser } from 'rollup-plugin-terser';
import typescript from 'rollup-plugin-typescript2';
const extensions = ['.js', '.jsx', '.ts', '.tsx'];

import pkg from './package.json' assert { type: 'json' };
import * as path from 'path';

export default {
  input: 'src/index.ts',
  output: [
    {
      dir: path.dirname(`dist/index.js`),
      format: 'es',
      exports: 'named',
      sourcemap: true,
    },
  ],
  plugins: [
    peerDepsExternal(),
    resolve({ extensions }),
    commonjs(),
    typescript({
      tsconfig: 'tsconfig.json',
      tsconfigOverride: {
        compilerOptions: {
          module: 'ESNext',
        },
      },
    }),
    babel({
      extensions,
      babelHelpers: 'bundled',
      presets: ['@babel/preset-react'],
    }),
    terser(),
  ],
  external: [
    ...Object.keys(pkg.devDependencies || {}),
    ...Object.keys(pkg.peerDependencies || {}),
  ],
};
