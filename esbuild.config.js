import * as esbuild from 'esbuild';

import velvet from '@intrnl/esbuild-plugin-velvet';


/** @type {esbuild.BuildOptions} */
export let config = {
	entryPoints: ['src/main.js'],
	entryNames: 'app',
	outdir: 'dist/_assets',

	sourcemap: true,

	plugins: [
		velvet({ cache: false }),
	],
};
