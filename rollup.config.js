import babel from '@rollup/plugin-babel';
import { terser } from 'rollup-plugin-terser';

export default {
	input: 'src/js/resume-reza.js',
	output: [
	{
		file: 'dist/js/resume-reza.js',
		format: 'amd',
		banner: `/*!
 * Resume Reza v2
 * Copyright (c) 2020 Reza Sariful Fikri
*/`,
	},
	{
		file: "dist/js/resume-reza.min.js",
		format: "iife",
		banner: `/*!
 * Resume Reza v2
 * Copyright (c) 2020 Reza Sariful Fikri
*/`,
		plugins: [terser()]
	}],
	plugins: [
		babel({ babelHelpers: 'bundled' })
	]
};