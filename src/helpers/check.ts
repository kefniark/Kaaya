// Returns if a value is an object
export function isObject (value: any) {
	return value && typeof value === 'object' && value.constructor === Object;
}

// Returns if a value is an array
export function isArray (value: any) {
	return value && typeof value === 'object' && value.constructor === Array;
}
