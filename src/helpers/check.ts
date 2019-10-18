// Returns if a value is an object
export function isObject(value: any): boolean {
	return value && typeof value === "object" && value.constructor === Object
}

// Returns if a value is an array
export function isArray(value: any): boolean {
	return value && typeof value === "object" && value.constructor === Array
}

export function pathWalk(obj: any, path: string): any {
	let root = obj
	let index
	let prop = path
	while (path) {
		index = path.indexOf(".")
		if (index === -1) {
			return { root, property: path }
		}
		prop = path.slice(0, index)
		root = root[prop]
		path = path.slice(index + 1)
	}
	return { root, property: "" }
}
