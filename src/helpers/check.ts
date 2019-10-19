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

export function clone(obj: any): any {
	return JSON.parse(JSON.stringify(obj))
}
