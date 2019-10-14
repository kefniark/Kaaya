import onChange = require('on-change');
import nanoid = require("nanoid");
import { now } from './helpers/time';

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

const metaGameObject = new Map<string, any>();

class GameObject {
	get gameobject() {
		return this.root[this.id];
	}
	get parent() {
		return this.parentId ? this.root[this.parentId] : undefined;
	}
	get transform(): Transform | RectTransform | undefined {
		if (!this.root) return undefined;
		if (!this.entityIds["transform"]) return undefined;
		return this.root[this.entityIds["transform"]] as any;
	}
	get store(): any {
		return metaGameObject.get(this._instanceId).store;
	}
	get root(): any {
		return metaGameObject.get(this._instanceId).root;
	}
	_instanceId: string;
	id: string;
	name: string;
	childrenIds: string[] = [];
	entityIds: {[id: string]: string} = {};
	parentId: string | undefined;

	constructor(data?: any) {
		this._instanceId = nanoid();
		this.id = (data && data.id) ? data.id : nanoid();
		metaGameObject.set(this._instanceId, {
			store: data.store,
			root: data.root
		});
		this.name = (data && data.name) ? data.name : "";
		this.parentId = data.parentId;
	}

	addChild(name: string) {
		var path = nanoid();
		this.store.createMutation('createGO', path, {
			id: path,
			parentId: this.id,
			name
		});

		return path;
	}

	delete() {
		this.store.createMutation('deleteGO', this.id, {
			id: this.id,
			parentId: this.parentId
		});
	}

	addEntity(name: string) {
		var path = nanoid();
		this.store.createMutation('createEntity', path, {
			id: path,
			parentId: this.id,
			name
		});

		return this.entityIds[name];
	}

	deleteEntity(name: string) {
		this.store.createMutation('deleteEntity', name, {
			id: name,
			parentId: this.id
		});
	}
}

const metaEntities = new Map<string, any>();

class Entity {
	private _instanceId = nanoid();
	protected name: string;

	get parent() {
		return this.parentId ? this.root[this.parentId] : undefined;
	}
	get store(): any {
		return metaEntities.get(this._instanceId).store;
	}
	get root(): any {
		return metaEntities.get(this._instanceId).root;
	}
	id: string;
	parentId: string | undefined;

	constructor(data?: any) {
		this.id = (data && data.id) ? data.id : nanoid();
		metaEntities.set(this._instanceId, {
			store: data.store,
			root: data.root
		});
		this.parentId = data.parentId;
	}

	toJSON() {
		var result: {[id: string]: any} = {};
		var ignored = ['parent', 'root', 'store']
		for (var x in this) {
			if (ignored.indexOf(x) === -1) {
				result[x] = this[x];
			}
		}
		return result;
	}
}

class Transform extends Entity {
	name = "transform";
	position = new Vector();
	rotation = new Vector();
	scale = new Vector(1, 1, 1);
}

class RectTransform extends Entity {
	name = "transform";
	position = new Vector();
	rotation = new Vector();
	scale = new Vector(1, 1, 1);
	anchor = new Vector(0.5, 0.5);
	pivot = new Vector(0.5, 0.5);
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

	watch(store: any, obj: any, objects: any[]): any {
		store.observe((evt: string, mut: any) => {
			if (evt === "create") store.applyMutation(objects, mut);
		});
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
			id: nanoid(),
			lastSync: 0,
			watcher: [] as {(evt: string, mut: any): void}[],
			history: [] as any[],
			mutationIds: new Set<string>(),
			mutations: {
				add: function (obj: any, mut: any) {
					var {root, property} = pathWalk(obj, mut.path);
					if (!root[property] || root[property] !== mut.data.value) {
						root[property] = JSON.parse(JSON.stringify(mut.data.value));
					}
					store.history.push(mut);
				},
				set: function (obj: any, mut: any) {
					var {root, property} = pathWalk(obj, mut.path);
					if (root[property] !== mut.data.value) {
						root[property] = JSON.parse(JSON.stringify(mut.data.value));
					}
					store.history.push(mut);
				},
				delete: function (obj: any, mut: any) {
					var {root, property} = pathWalk(obj, mut.path);
					if (root[property]) {
						delete root[property];
					}
					store.history.push(mut);
				},
				undo: function (_obj: any, mut: any) {
					console.log('undo', mut);
				},
				redo: function (_obj: any, mut: any) {
					console.log('redo', mut);
				}
			} as any,
			undo: function () {
				this.createMutation('undo', '', { id: 0 });
			},
			redo: function () {
				this.createMutation('redo', '', { id: 0 });
			},
			createMutation: function (name: string, path: string, data: any) {
				var mut = { id: nanoid(), time: now(), name, path, data };
				for (var w of this.watcher) {
					w('create', mut);
				}
			},
			applyMutation: function (obj: any[], mut: any) {
				if (!this.mutations[mut.name]) {
					throw new Error(`Unknown mutation ${mut.name}`)
				}
				if (this.mutationIds.has(mut.id)) {
					// console.warn('skip mutation (already applied)', mut.id);
					return;
				}
				for (var o of obj) {
					this.mutations[mut.name](o, mut);
				}
				this.mutationIds.add(mut.id);
				for (var w of this.watcher) {
					w('apply', mut);
				}
			},
			sync: function (obj: any[], history: any[]) {
				for (var mut of history) {
					this.applyMutation(obj, mut);
				}
			},
			observe: function (cb: (mut: any) => void) {
				this.watcher.push(cb);
			},
			getHistory() {
				return this.history;
			}
		};

		return store;
	}

	createKeystore () {
		var store = this.createStore();
		var srcData: any = {};
		var proxy: any = JSON.parse(JSON.stringify(srcData));
		var data = this.watch(store, srcData, [srcData, proxy]);

		return {
			srcData,
			data,
			proxy,
			store
		};
	}

	createTable () {
		var store = this.createStore();
		var srcData: any = {};
		var proxy: any = JSON.parse(JSON.stringify(srcData));
		var data = this.watch(store, srcData, [srcData, proxy]);

		return {
			srcData,
			data,
			proxy,
			store
		};
	}

	createGO () {
		var store = this.createStore();
		var srcData: any = {
			game: new GameObject({id: "game", name: "Game", store}),
			canvas: new GameObject({id: "canvas", name: "Canvas", store})
		};
		var proxy: any = {
			game: new GameObject({id: "game", name: "Game", store}),
			canvas: new GameObject({id: "canvas", name: "Canvas", store})
		};
		var data = this.watch(store, srcData, [srcData, proxy]);

		store.mutations.createGO = function (obj: any, mut: any) {
			var {root, property} = pathWalk(obj, mut.path);
			if (!root[property]) {
				root[property] = new GameObject({...mut.data, store, root: data});

				var parentId = root[property].parentId;
				if (parentId) {
					root[parentId].childrenIds.push(mut.path);
				}
			}
			store.history.push(mut);
		};

		store.mutations.deleteGO = function (obj: any, mut: any) {
			var {root, property} = pathWalk(obj, mut.path);
			if (root[property]) {
				// console.log('before delete', property, Object.keys(root));
				var parentId = root[property].parentId;
				if (parentId) {
					var pos = root[parentId].childrenIds.indexOf(mut.path);
					if (pos != -1) root[parentId].childrenIds.splice(pos, 1);
				}
				delete root[property];
			}
			store.history.push(mut);
		};

		store.mutations.createEntity = function (obj: any, mut: any) {
			var {root, property} = pathWalk(obj, mut.path);
			if (!root[property]) {

				switch (mut.data.name) {
					case "transform":
						root[property] = new Transform({...mut.data, store, root});
						break;
					case "recttransform":
						root[property] = new RectTransform({...mut.data, store, root});
						break;
					default:
						console.warn('unknow entity', mut.data.name);
						break;
				}

				var parentId = root[property].parentId;
				if (parentId) {
					root[parentId].entityIds[root[property].name] = root[property].id;
				}
			}
			store.history.push(mut);
		};

		return {
			srcData,
			data,
			proxy,
			store
		};
	}
}
