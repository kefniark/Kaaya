import { Store } from "../store/store";

// export function storeClass<TFunction extends Function>(target: TFunction) {

// 	// save a reference to the original constructor
// 	const originalConstructor = target;

// 	// a utility function to generate instances of a class
// 	function instanciate(constructor: any, ...args: any[]) {
// 		return new constructor(...args);
// 	}

// 	// the new constructor behaviour
// 	const newConstructor = function (...args: any[]) {
// 		console.log("New: " + originalConstructor.name);
// 		var obj = instanciate(originalConstructor, ...args);

// 		obj.store = new Store();
// 		return obj;
// 	};

// 	// copy prototype so instanceof operator still works
// 	newConstructor.prototype = originalConstructor.prototype;

// 	// return new constructor (will override original)
// 	return newConstructor as any;
// }

// export function store(target: any, key: string) {
// 	// property getter
// 	const getter = function () {
// 		console.log('getter store', key, target);
// 		return target[key][target];
// 	};

// 	// property setter
// 	const setter = function (newVal: any) {
// 		console.log('setter store', key, target);
// 		target.store[key] = newVal;
// 	};

// 	if (delete target[key]) {
// 		Object.defineProperty(target, key, {
// 			get: getter,
// 			set: setter,
// 			enumerable: true,
// 			configurable: true
// 		});
// 	}
// }

export class StoreEntity {
	public store: Store;

	constructor(id?: string) {
		this.store = new Store(id);
	}
}

export function storePropertyObject(target: any, key: string) {
	if (delete target[key]) {
		var proxy: ProxyHandler<object> | undefined = undefined;
		Object.defineProperty(target, key, {
			get() {
				if (!proxy) {
					var store = this.store;
					var obj = this.store.get(key);
					proxy = new Proxy(obj, {
						set: function (t, prop, value) {
							t[prop] = value;
							store.set(key, obj);
							return true;
						}
					});
				}
				return proxy;
			},
			set(value) {
				return this.store.set(key, value);
			},
			enumerable: true,
			configurable: true
		});
	}
}

export function storeProperty(target: any, key: string) {
	if (delete target[key]) {
		Object.defineProperty(target, key, {
			get() { return this.store.get(key); },
			set(value) { return this.store.set(key, value); },
			enumerable: true,
			configurable: true
		});
	}
}
