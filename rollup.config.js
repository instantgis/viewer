import commonjs from '@rollup/plugin-commonjs';
import copy from 'rollup-plugin-copy';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import { terser } from 'rollup-plugin-terser';

export default {
  input: 'src/index.ts',
  output: {
    chunkFileNames: 'chunk/[name].[hash].js',
    dir: 'dist',
    format: 'es',
    sourcemap: false,
     plugins: [
        terser({
          ecma: 2018,
          mangle: { toplevel: true },
          compress: {
            module: true,
            toplevel: true,
            unsafe_arrows: true,
            drop_console: true,
            drop_debugger: true
          },
          output: { 
            quote_style: 1,
            comments: false 
          }
        })
      ]
  },
  plugins: [
    resolve({ browser: true }),
    commonjs(),
    typescript(),
    copy({
      targets: [
        { src: 'src/index.html', dest: 'dist/'},
        { src: 'node_modules/@arcgis/core/assets', dest: 'dist/'}
      ],
      copyOnce: true
    })
  ],
  preserveEntrySignatures: true
}
