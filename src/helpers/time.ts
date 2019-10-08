export function now() {
	if (typeof(window) !== 'undefined') {
		return performance.now();
	} else {
		return process.hrtime()[1];
	}
}
