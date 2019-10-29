import commonjs from "rollup-plugin-commonjs"
import resolve from "rollup-plugin-node-resolve"
import typescript from "rollup-plugin-typescript"
import pkg from "./package.json"
import serve from "rollup-plugin-serve"

export default {
	input: "src/index.ts",
	output: [
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
		serve({
			open: true,
			contentBase: ["."],
			port: 8080,
			verbose: true
		})
	]
}
