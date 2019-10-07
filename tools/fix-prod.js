/**
 * Trick to avoid a webpack issue
 *
 * https://github.com/webpack/webpack/issues/706
 */

const replace = require("replace-in-file");

// fix build/kaaya.min.js

(async () => {
	// For browser direct usage (dont need .default)
	await replace({
		files: "build/kaaya.min.js",
		from: /.\.Kaaya=.\(\)\}/g,
		to: (match) => {
			match = match.slice(0, -1);
			match += ".default}";
			return match;
		}
	});
})();