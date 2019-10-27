/* istanbul ignore next */
export function now(): number {
	try {
		if (typeof window !== "undefined") {
			return Math.round(performance.now())
		}
		return process.hrtime()[1]
	} catch {
		return 0
	}
}
