import nodeResolve from '@rollup/plugin-node-resolve';
import { defineConfig } from 'rollup';
import typescript from 'rollup-plugin-ts';
import commonjs from '@rollup/plugin-commonjs';

export default defineConfig({
    input: ['./src/index.ts'],
    output: {
        dir: 'dist'
    },
    plugins: [
        nodeResolve(),
        commonjs(),
        typescript({
            tsconfig: './tsconfig.json'
        })
    ]
});
