import babel from '@rollup/plugin-babel';
import { terser } from 'rollup-plugin-terser';

export default {
	input: 'src/js/cv-reza.js',
	output: [
	{
		file: 'dist/js/cv-reza.js',
		format: 'amd',
		banner: `/*!
 * CV Reza v2
 * Copyright (c) 2020 Reza Sariful Fikri
*/`,
	},
	{
		file: "dist/js/cv-reza.min.js",
		format: "iife",
		banner: `/*!
 * CV Reza v2
 * Copyright (c) 2020 Reza Sariful Fikri
*/`,
		plugins: [terser()]
	}],
	plugins: [
		babel({ babelHelpers: 'bundled' })
	]
};