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
			format: "esm"
		}
	],
	plugins: [
		typescript(),
		resolve(),
		commonjs(),
		serve({
			open: true,
			openPage: "/samples/",
			contentBase: ["."],
			port: 8080,
			verbose: true
		})
	]
}
