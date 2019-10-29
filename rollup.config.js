import commonjs from "rollup-plugin-commonjs"
import resolve from "rollup-plugin-node-resolve"
import typescript from "rollup-plugin-typescript"
import pkg from "./package.json"
import filesize from "rollup-plugin-filesize"

export default {
	input: "src/index.ts",
	output: [
		{
			file: pkg.main,
			format: "cjs"
		},
		{
			name: "Kaaya",
			file: "build/kaaya.umd.js",
			format: "umd"
		},
		{
			file: pkg.module,
			format: "es"
		}
	],
	external: [...Object.keys(pkg.peerDependencies || {})],
	plugins: [
		typescript(),
		resolve({ jsnext: true }),
		commonjs(),
		filesize({
			showGzippedSize: false
		})
	]
}
