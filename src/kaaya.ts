// import { Store as Store } from "./store/store";
// import { StoreObject } from "./store/objectstore";
// import { SetStore } from "./store/setstore";
// import { GOStore } from "./object";
// import { mutationFactory } from "./store/mutations";
// import { DelegateStore } from "./store/delegatestore";
import onChange = require('on-change');
import nanoid = require("nanoid");
import { now } from './helpers/time';

// const onChange = (obj: any, _store: any) => {
// 	const handler = {
// 		get(target: any, property: string, receiver: any): any {
// 			// console.log('get ', property);
// 			const value = Reflect.get(target, property, receiver);
// 			if (typeof value === 'object') {
// 				return new Proxy(value, handler);
// 			}
// 			return value;
// 		},
// 		set(target: any, property: string, value: any) {
// 			console.log('set ', property, value);
// 			return Reflect.set(target, property, value);
// 		},
// 		deleteProperty(target: any, property: string) {
// 			console.log('delete ', property);
// 			return Reflect.deleteProperty(target, property);
// 		}
// 	};
// 	return new Proxy(obj, handler);
// };

function pathWalk(obj: any, path: string) {
	let root = obj;
	let index;
	let prop = path;
	while (path) {
		index = path.indexOf(".");
		if (index === -1) {
			return { root, property: path };
		}
		prop = path.slice(0, index);
		root = root[prop];
		path = path.slice(index + 1);
	}
	return { root, property: '' };
}

class GameObject {
	get parent() {
		return this.parentId ? this.root[this.parentId] : undefined;
	}
	store: any;
	root: any;
	id: number;
	name: string;
	transform: Transform;
	childrenIds: string[] = [];
	entityIds: string[] = [];
	parentId: string | undefined;

	constructor(data?: any) {
		this.store = data.store;
		this.root = data.root;
		this.id = (data && data.id) ? data.id : nanoid();
		this.name = (data && data.name) ? data.name : "";
		this.parentId = data.parentId;
		this.transform = new Transform();
		if (this.parentId) {
			this.parent.childrenIds.push(this.id);
		}
	}

	addChild(name: string) {
		var path = nanoid();
		this.store.createMutation('createGO', path, {
			id: path,
			parentId: this.id,
			name
		});

		var id = this.childrenIds[this.childrenIds.length - 1];
		return id;
	}

	delete() {
		delete this.root[this.id];
	}

	addEntity(name: string) {
		var path = nanoid();
		this.store.createMutation('createEntity', path, {
			id: path,
			parentId: this.id,
			name
		});
	}
}

class Transform {
	position = new Vector();
	rotation = new Vector();
	scale = new Vector(1, 1, 1);
}

class Vector {
	x: number = 0;
	y: number = 0;
	z: number = 0;
	constructor(x?: number, y?: number, z?: number) {
		if (x) this.x = x;
		if (y) this.y = y;
		if (z) this.z = z;
	}
}

export class Kaaya {

	watch(store: any, obj: any = {}): any {
		store.observe((mut: any) => store.applyMutation(obj, mut));
		return onChange(obj, function (path, value, previousValue) {
			if (previousValue === undefined) {
				store.createMutation('add', path, { value, type: typeof value });
			} else if (value === undefined){
				store.createMutation('delete', path);
			} else {
				if (value instanceof GameObject) return;
				store.createMutation('set', path, { value, old: previousValue });
			}
		});
	}

	createStore() {
		var store = {
			lastSync: 0,
			watcher: [] as {(mut: any): void}[],
			history: [] as any[],
			mutations: {
				add: function (obj: any, mut: any) {
					var {root, property} = pathWalk(obj, mut.path);
					if (!root[property]) {
						// console.log('mut.add => ', obj, root, property, mut.data.value);
						root[property] = mut.data.value;
					}
					store.history.push(mut);
				},
				set: function (obj: any, mut: any) {
					var {root, property} = pathWalk(obj, mut.path);
					// console.log('set', root, property, mut.data.value);
					if (root[property] !== mut.data.value) {
						root[property] = mut.data.value;
						// console.log('mut.set => ', obj, root, property, mut.data.value);
					}
					store.history.push(mut);
				},
				delete: function (obj: any, mut: any) {
					var {root, property} = pathWalk(obj, mut.path);
					if (root[property]) {
						delete root[property];
						// console.log('mut.delete => ', obj, root, property);
					}
					store.history.push(mut);
				},
			} as any,
			createMutation: function (name: string, path: string, data: any) {
				var mut = { id: nanoid(), time: now(), name, path, data };
				for (var w of this.watcher) {
					w(mut);
				}
			},
			applyMutation: function (obj: any, mut: any) {
				if (!this.mutations[mut.name]) {
					throw new Error(`Unknown mutation ${mut.name}`)
				}
				// console.log('applyMutation', mut.name);
				this.mutations[mut.name](obj, mut);
			},
			sync: function (obj: any, history: any[]) {
				for (var mut of history) {
					if (mut.time <= this.lastSync) continue;
					// console.log('apply', mut);
					this.lastSync = mut.time;
					this.applyMutation(obj, mut);
				}
				// console.log(obj);
			},
			observe: function (cb: (mut: any) => void) {
				this.watcher.push(cb);
			},
			getHistory() {
				// console.log('getHistory', this.history);
				return JSON.parse(JSON.stringify(this.history))
			}
		};

		return store;
	}

	createGO () {
		var store = this.createStore();
		var init: any = {
			game: new GameObject({id: "game", name: "Game", store}),
			canvas: new GameObject({id: "canvas", name: "Canvas", store})
		};
		var data = this.watch(store, init);
		store.mutations.createGO = function (_obj: any, mut: any) {
			// console.log('mut.createGO', mut);
			var {root, property} = pathWalk(init, mut.path);
			if (!root[property]) {
				// console.log('mut.createGO => ', obj, root, property);
				root[property] = new GameObject({...mut.data, store, root: data});
			}
			store.history.push(mut);
			// console.log('original object', init);
		};
		store.mutations.createEntity = function (_obj: any, mut: any) {
			// console.log('mut.createEntity', mut);
			var {root, property} = pathWalk(init, mut.path);
			if (!root[property]) {
				// console.log('mut.createEntity => ', obj, root, property);
				root[property] = new GameObject({...mut.data, store, root: data});
			}
			store.history.push(mut);
		};

		return { data, store };
	}

	// createGO() {
	// 	return new GOStore();
	// }
	// createObjectStore() {
	// 	return new StoreObject();
	// }

	// createSetStore() {
	// 	return new SetStore();
	// }

	// createDelegateStore() {
	// 	return new DelegateStore();
	// }
}
