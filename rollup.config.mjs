import nodeResolve from '@rollup/plugin-node-resolve';
import { defineConfig } from 'rollup';
import typescript from 'rollup-plugin-ts';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';

export default defineConfig({
    input: ['./src/index.ts'],
    output: {
        dir: 'dist'
    },
    plugins: [
        nodeResolve(),
        commonjs(),
        json(),
        typescript({
            tsconfig: './tsconfig.json'
        })
    ]
});
