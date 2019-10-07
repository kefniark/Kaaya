// import nanoid from 'nanoid'
// import { IStoreMutation } from "../core/interfaces/store";
// import { Store } from './store';

// export interface IStoreGOMutation extends IStoreMutation{
// 	apply(store: StoreObject): void;
// }

// class StoreCreateObjectMutation implements IStoreGOMutation {
// 	public readonly id: string;
// 	public readonly time: number;
// 	public readonly name: string;
// 	public readonly parentId: string | undefined;
// 	public key: string;

// 	constructor(name: string, parent?: string) {
// 		this.id = nanoid();
// 		this.time = performance.now();
// 		this.name = name;
// 		this.parentId = parent;
// 	}

// 	apply(store: StoreObject) {
// 		var val = store._objects.get(this.parentId || "");
// 		if (!val) val = store._objects.get(store.root);

// 		var go = new GameObject(this.name, val ? val.id : undefined);
// 		if (!this.key) {
// 			this.key = go.id;
// 		} else {
// 			go.id = this.key;
// 		}
// 		store._objects.set(go.id, go);
// 		if (val) {
// 			// console.log("set child of", val.id, '>', go.id);
// 			val.childrens.push(go.id);
// 		} else {
// 			store.root = go.id;
// 			// console.log("set root", store.root);
// 		}
// 	}
// }
// // class StoreObjectMutation implements IStoreMutation {
// // 	public readonly id: string;
// // 	public readonly time: number;
// // 	public readonly key: string;
// // 	public readonly value: string;

// // 	constructor(key: string, value: string) {
// // 		this.id = nanoid();
// // 		this.time = performance.now();
// // 		this.key = key;
// // 		this.value = value;
// // 	}

// // 	apply(store: IStoreKeyValue) {
// // 		store.lastUpdated = performance.now();
// // 		store._data.set(this.key, this.value);
// // 	}
// // }

// // class Entity {
// // 	readonly id: string;
// // 	readonly parentId: string;
// // 	readonly data: StoreKeyValue;
// // 	constructor() {
// // 		this.id = nanoid();
// // 		this.data = new StoreKeyValue();
// // 	}
// // }

// class GameObject {
// 	data: Store;
// 	get id(): string { return this.data.get('id') || ""; }
// 	set id(value: string) { this.data.set('id', value); }
// 	get name(): string { return this.data.get('name') || ""; }
// 	set name(value: string) { this.data.set('name', value); }
// 	get parentId(): string | undefined { return this.data.get('parentId'); }
// 	set parentId(value: string | undefined) { this.data.set('parentId', value || ""); }
// 	get childrens(): string[] {
// 		return this.createArrayProxy('childrens');
// 	}
// 	get entities(): string[] {
// 		return this.createArrayProxy('entities');
// 	}

// 	createArrayProxy (_val: string): string[] {
// 		var data = this.data;
// 		return new Proxy([], {
// 			set (_target: any, prop: string, val: any) {
// 				var arr: any = (data.get(_val) || "").split(',');
// 				if (arr.length === 1 && arr[0] === "") arr = [];
// 				var val = (arr[prop] = val);
// 				data.set(_val, arr.join(','));
// 				return val;
// 			},
// 			get (_target: any, prop: string): any {
// 				var arr: any = (data.get(_val) || "").split(',');
// 				if (arr.length === 1 && arr[0] === "") arr = [];
// 				return arr[prop];
// 			}
// 		});
// 	};

// 	constructor(name: string, parentId?: string) {
// 		this.data = new Store();
// 		this.id = nanoid();
// 		this.name = name;
// 		this.parentId = parentId;
// 		this.data.set('childrens', '');
// 		this.data.set('entities', '');
// 	}
// }

// export class StoreObject {
// 	data: Store;
// 	get root(): string { return this.data.get('root') || ""; }
// 	set root(value: string) { this.data.set('root', value); }

// 	readonly _objects: Map<string, GameObject>;
// 	readonly _ownMutations = new Set<IStoreMutation>();
// 	readonly _allMutations = new Set<IStoreMutation>();

// 	constructor() {
// 		this.data = new Store();
// 		this._objects = new Map<string, GameObject>();
// 	}

// 	createObject(name: string, parent?: string, root = false) {
// 		if (this._objects.size === 0 && !root) {
// 			this.createObject("root", undefined, true);
// 		}
// 		var mutation = new StoreCreateObjectMutation(name, parent);
// 		this._ownMutations.add(mutation);
// 		this._allMutations.add(mutation);
// 		mutation.apply(this);
// 		var obj = this._objects.get(mutation.key);
// 		if (obj) {
// 			var objData = obj;
// 			obj.data.on('set', (_key: string, mut: any) => {
// 				mut.store = objData.id;
// 				this._allMutations.add(mut);
// 			});
// 		}
// 		return obj;
// 	}

// 	getMutations(time?: number) {
// 		if (time) {
// 			return new Set([...this._allMutations].filter(x => x.time >= time));
// 		}
// 		return this._allMutations;
// 	}

// 	setMutations(mutations: Set<IStoreMutation>) {
// 		for (var mut of mutations) {
// 			var storeId = (mut as any).store;
// 			var obj = this._objects.get(storeId);
// 			if (storeId && obj) {
// 				mut.apply(obj.data);
// 			} else {
// 				mut.apply(this);
// 			}
// 		}
// 	}

// 	toStringObject(id: string, level: number): string {
// 		var go = this._objects.get(id);
// 		if (!go) return "";

// 		var str = `${' '.repeat(level * 2)} -> ${go.name} (${go.id})\n`;
// 		for (var child of go.childrens) {
// 			str += this.toStringObject(child, level + 1);
// 		}
// 		return str;
// 	}

// 	toString(): string {
// 		return `GameObjectStore:\n${this.toStringObject(this.root, 0)}`;
// 	}
// }
