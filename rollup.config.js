import { defineConfig } from 'rollup';
// Plugins
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import terser from '@rollup/plugin-terser';
import postcss from 'rollup-plugin-postcss';
import atImport from 'postcss-import';
import postcssPresetEnv from 'postcss-preset-env';
import autoprefixer from 'autoprefixer';
import { resolve } from "path";
import livereload from 'rollup-plugin-livereload';

// Rollup configuration
export default defineConfig({
    input: 'assets/js/main.js',
    output: {
        dir: "assets/built",
        sourcemap: true,
        format: 'iife',
        plugins: [process.env.BUILD === "production" && terser()]
    },
    plugins: [
        commonjs(),
        nodeResolve(),
        babel({ babelHelpers: 'bundled' }),
        postcss({
            extract: true,
            sourceMap: true,
            plugins: [
                atImport(),                // Allows @import to work in your CSS
                postcssPresetEnv(),        // Enables modern CSS features
                autoprefixer()             // Adds vendor prefixes for cross-browser compatibility
            ],
            minimize: process.env.BUILD === "production",  // Minify in production
        }),
        process.env.BUILD !== "production" && livereload({
            watch: resolve('assets'),   // Watch the 'assets' folder for changes
            extraExts: ['hbs'],         // Add Handlebars files (.hbs) to be watched
            exclusions: [resolve('node_modules')]  // Exclude the 'node_modules' folder from being watched
        }),
    ]
});
