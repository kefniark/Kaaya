export function now(): number {
	if (typeof window !== "undefined") {
		return Math.round(performance.now())
	} else {
		return process.hrtime()[1]
	}
}
