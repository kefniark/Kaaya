import { Store } from "../store/store";
// import { StoreMutation } from "../store/mutations/mutation_store";

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
	public _store: Store;
	public _objects: Map<string, any>;

	constructor(id?: string) {
		this._store = new Store(id);
		this._objects = new Map<string, any>();
	}
}

// function createProxyObject(store: Store, key: string, obj: any) {
// 	console.log('createProxyObject', obj, key);

// 	var handler = {
// 		get: function (target: any, key: string): any {
// 			if (typeof target[key] === 'object' && target[key] !== null) {
// 				return new Proxy(target[key], handler)
// 			}
// 			return target[key];
// 		},
// 		set: function (target: any, key: string, value: any) {
// 			target[key] = value;
// 			return true
// 		}
// 	};

// 	var proxy = new Proxy(obj, handler);
// 	// 	{
// 	// 	get: function (t, prop) {
// 	// 		return t[prop];
// 	// 	},
// 	// 	set: function (t, prop, value) {
// 	// 		var ret = Reflect.set(t, prop, value);
// 	// 		store.set(key, obj);
// 	// 		return ret;
// 	// 	},
// 	// 	// enumerate: function () {
// 	// 	// 	return obj.keys();
// 	// 	// },
// 	// 	// ownKeys: function () {
// 	// 	// 	return obj.keys();
// 	// 	// },
// 	// 	// getOwnPropertyDescriptor: function (oTarget, sKey) {
// 	// 	// 	var vValue = oTarget.getItem(sKey);
// 	// 	// 	return vValue ? {
// 	// 	// 		value: vValue,
// 	// 	// 		writable: true,
// 	// 	// 		enumerable: true,
// 	// 	// 		configurable: false
// 	// 	// 	} : undefined;
// 	// 	// }
// 	// });

// 	store.on('change', (mut: StoreMutation) => {
// 		if (mut.key !== key) return;
// 		obj[mut.key] = mut.value;
// 	});

// 	return proxy
// }

export function storeNestedObject(target: any, key: string) {
	if (delete target[key]) {

		// var proxy: ProxyHandler<object> | undefined = undefined;
		// var obj: any;
		// var store: Store | undefined;
		// var prefix: string = "";

		Object.defineProperty(target, key, {
			get() {
				// console.log('create proxy (get)', target, this, key, obj);
				// if (!proxy) {
				// 	obj = this._store.get(key);
				// 	proxy = createProxyObject(this._store, key, obj);
				// }
				// return proxy;
				return this._store.get(key);
			},
			set(value) {
				// console.log('create proxy (set)', target, this, key, obj);
				// if (value === obj || value === proxy) return false;
				// obj = value;
				// proxy = createProxyObject(this._store, key, value);
				// return this._store.set(key, value);
				return this._store.set(key, value);
			},
			enumerable: true,
			configurable: true
		});

		console.log('PropertyObject', target, key);
	}
}

export function storeProperty(target: any, key: string) {
	if (delete target[key]) {
		Object.defineProperty(target, key, {
			get() { return this._store.get(key); },
			set(value) { return this._store.set(key, value); },
			enumerable: true,
			configurable: true
		});
	}
}
