/**
 * Trick to avoid a webpack issue
 *
 * https://github.com/webpack/webpack/issues/706
 */

const replace = require("replace-in-file");

// fix build/kaaya.js

(async () => {
	// For browser direct usage (dont need .default)
	await replace({
		files: "build/kaaya.js",
		from: /root\["Kaaya"\] = factory\(\);/g,
		to: "root[\"Kaaya\"] = factory().default;"
	});
})();