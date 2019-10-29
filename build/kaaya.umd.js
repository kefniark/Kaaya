(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(global = global || self, factory(global.Kaaya = {}));
}(this, (function (exports) { 'use strict';

	/**
	 * Provide polyfill around Date.now()
	 */
	const now = typeof Date.now === "function" ? Date.now : new Date().getTime;
	const start = now();
	/**
	 * Provide polyfill around performance.now()
	 */
	/* istanbul ignore next */
	const perf = () => {
	    if (globalThis && globalThis.performance) {
	        return globalThis.performance.now();
	    }
	    else if (globalThis.process) {
	        return process.hrtime()[1];
	    }
	    return now() - start;
	};

	/// Inspired by https://basarat.gitbooks.io/typescript/docs/tips/typed-event.html
	class Event {
	    constructor() {
	        this.listeners = [];
	        this.listenersOncer = [];
	    }
	    on(listener) {
	        this.listeners.push(listener);
	        return { dispose: () => this.off(listener) };
	    }
	    once(listener) {
	        this.listenersOncer.push(listener);
	    }
	    off(listener) {
	        var callbackIndex = this.listeners.indexOf(listener);
	        if (callbackIndex > -1)
	            this.listeners.splice(callbackIndex, 1);
	    }
	    emit(event) {
	        /** Update any general listeners */
	        this.listeners.forEach(listener => listener(event));
	        /** Clear the `once` queue */
	        if (this.listenersOncer.length > 0) {
	            const toCall = this.listenersOncer;
	            this.listenersOncer = [];
	            toCall.forEach(listener => listener(event));
	        }
	    }
	}

	const url = "abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	/**
	 * Create a `uid` [a-zA-z0-9]
	 *
	 * @param {Number} len
	 * @return {String} uid
	 */
	function uid(len = 8) {
	    var id = "";
	    while (len--) {
	        id += url[(Math.random() * 62) | 0];
	    }
	    return id;
	}

	var LogLevel;
	(function (LogLevel) {
	    LogLevel[LogLevel["INFO"] = 0] = "INFO";
	    LogLevel[LogLevel["WARN"] = 1] = "WARN";
	    LogLevel[LogLevel["ERROR"] = 2] = "ERROR";
	    LogLevel[LogLevel["OFF"] = 3] = "OFF";
	})(LogLevel || (LogLevel = {}));

	Array.prototype.isEmpty = function () {
	    if (this.length === 0) {
	        return true;
	    }
	    return false;
	};
	Array.prototype.clone = function () {
	    return this.slice();
	};
	Array.prototype.first = function () {
	    return this[0];
	};
	Array.prototype.last = function () {
	    return this[this.length - 1];
	};
	Array.prototype.insert = function (index, value) {
	    this.splice(index, 0, value);
	};
	Array.prototype.removeIndex = function (index) {
	    return this.splice(index, 1);
	};
	Array.prototype.remove = function (element) {
	    return this.filter(x => x === element);
	};
	Array.prototype.sum = function () {
	    return this.reduce((prev, curr) => prev + curr);
	};
	Array.prototype.avg = function () {
	    return this.sum() / this.length;
	};
	Array.prototype.random = function () {
	    const index = Math.floor(Math.random() * (Math.floor(this.length - 1) + 1));
	    return this[index];
	};
	Array.prototype.shuffle = function () {
	    var buffer = [], start;
	    for (var i = this.length; i >= this.length && i > 0; i--) {
	        start = Math.floor(Math.random() * this.length);
	        buffer.push(this.splice(start, 1)[0]);
	    }
	    return buffer;
	};

	String.isNullOrEmpty = function (val) {
	    if (val === undefined || val === null || val.trim() === "") {
	        return true;
	    }
	    return false;
	};
	String.prototype.capitalize = function () {
	    if (this.length == 1) {
	        return this.toUpperCase();
	    }
	    else if (this.length > 0) {
	        let regex = /^(\(|\[|"|')/;
	        if (regex.test(this)) {
	            return this.substring(0, 2).toUpperCase() + this.substring(2);
	        }
	        else {
	            return this.substring(0, 1).toUpperCase() + this.substring(1);
	        }
	    }
	    return this;
	};
	String.prototype.capitalizeWords = function () {
	    let regexp = /\s/;
	    let words = this.split(regexp);
	    if (words.length == 1) {
	        return words[0].capitalize();
	    }
	    else if (words.length > 1) {
	        let result = "";
	        for (let i = 0; i < words.length; i++) {
	            if (words[i].capitalize() !== null) {
	                result += words[i].capitalize() + " ";
	            }
	        }
	        result.trim();
	        return result;
	    }
	    return this;
	};
	String.prototype.contains = function (val) {
	    if (this.indexOf(val) !== -1) {
	        return true;
	    }
	    return false;
	};
	String.prototype.slugify = function (lower = true) {
	    if (!lower) {
	        return this.toLowerCase()
	            .normalize()
	            .replace(/[^a-z0-9]/gi, "-");
	    }
	    return this.normalize().replace(/[^a-z0-9]/gi, "-");
	};

	class Entity {
	    constructor(store, data) {
	        this.dataDefault = {
	            id: uid(),
	            name: "entity",
	            parentId: "",
	            childIds: [],
	            componentIds: {},
	            enable: true
	        };
	        this.store = store;
	        this.data = Object.assign({}, this.dataDefault, data);
	    }
	    get enable() {
	        return this.data.enable;
	    }
	    set enable(value) {
	        this.watchedData.enable = value;
	    }
	    get id() {
	        return this.data.id;
	    }
	    get name() {
	        return this.data.name;
	    }
	    set name(value) {
	        this.watchedData.name = value;
	    }
	    get gameobject() {
	        return this.store.getEntity(this.data.id);
	    }
	    get transform() {
	        return this.store.getEntity(this.data.componentIds["Transform"]);
	    }
	    get parent() {
	        return this.store.getEntity(this.data.parentId);
	    }
	    get components() {
	        return Object.values(this.data.componentIds).map(x => this.store.getEntity(x));
	    }
	    get childs() {
	        return this.data.childIds.map(x => this.store.getEntity(x));
	    }
	    get watchedData() {
	        return this.store.getData(this.data.id);
	    }
	    created() {
	        const parent = this.store.getData(this.data.parentId);
	        if (!parent)
	            return;
	        if (parent.childIds.indexOf(this.data.id) !== -1)
	            return;
	        if (!this.store.created.has(this.id))
	            return;
	        parent.childIds.push(this.data.id);
	    }
	    deleted() {
	        const parent = this.store.getData(this.data.parentId);
	        if (!parent || !parent.childIds)
	            return;
	        parent.childIds = parent.childIds.filter((x) => x !== this.id);
	        for (const componentId of Object.values(this.data.componentIds)) {
	            this.store.delete(componentId);
	        }
	        for (const childId of this.data.childIds) {
	            this.store.delete(childId);
	        }
	    }
	}
	// export function walkEntity(entity: Entity, cb: (entity: Entity | Component, depth: number) => void, depth: number = 0) {
	// 	if (!entity) return
	// 	cb(entity, depth)
	// 	for (const comp of entity.components) {
	// 		cb(comp, depth + 1)
	// 	}
	// 	for (const child of entity.childs) {
	// 		walkEntity(child, cb, depth + 1)
	// 	}
	// }

	class Component {
	    constructor(store, data) {
	        this.dataDefault = {
	            id: uid(),
	            parentId: "",
	            type: "",
	            enable: true
	        };
	        this.store = store;
	        this.data = Object.assign({}, this.dataDefault, data);
	    }
	    get id() {
	        return this.data.id;
	    }
	    get name() {
	        return this.data.type;
	    }
	    get gameobject() {
	        return this.store.getEntity(this.data.parentId);
	    }
	    get transform() {
	        return this.gameobject.transform;
	    }
	    get watchedData() {
	        return this.store.getData(this.data.id);
	    }
	    created() {
	        const parent = this.store.getData(this.data.parentId);
	        if (!parent)
	            return;
	        if (this.data.type in parent.componentIds)
	            return;
	        if (!this.store.created.has(this.id))
	            return;
	        parent.componentIds[this.data.type] = this.data.id;
	    }
	    deleted() {
	        const parent = this.store.getData(this.data.parentId);
	        if (!parent || !parent.componentIds)
	            return;
	        delete parent.componentIds[this.data.type];
	    }
	    mounted() { }
	    unmounted() { }
	    enabled() { }
	    disabled() { }
	}
	class TransformComponent extends Component {
	    constructor(store, data) {
	        if (!data.type)
	            data.type = "Transform";
	        super(store, data);
	        if (!this.data.position)
	            this.data.position = { x: 0, y: 0, z: 0 };
	        if (!this.data.rotation)
	            this.data.rotation = { x: 0, y: 0, z: 0 };
	        if (!this.data.scale)
	            this.data.scale = { x: 1, y: 1, z: 1 };
	    }
	    get position() {
	        return this.watchedData.position;
	    }
	    get rotation() {
	        return this.watchedData.rotation;
	    }
	    get scale() {
	        return this.watchedData.scale;
	    }
	}

	function pathWalk(obj, path) {
	    let root = obj;
	    let index;
	    let prop = path;
	    while (path) {
	        index = path.indexOf(".");
	        if (index === -1) {
	            return { root, property: path };
	        }
	        prop = path.slice(0, index);
	        if (!root[prop])
	            break;
	        root = root[prop];
	        path = path.slice(index + 1);
	    }
	    return { root, property: "" };
	}
	function clone(obj) {
	    return JSON.parse(JSON.stringify(obj));
	}

	class DataStore {
	    constructor() {
	        this.hook = [];
	        this.mutations = {};
	        // transaction
	        this.transactionMeta = undefined;
	        this.transactionHistory = [];
	        // undo / redo
	        this.lastUndoIndex = -1;
	        this.undoBuffer = [];
	        this.syncQueue = [];
	        this.id = uid();
	        this.evtCreate = new Event();
	        this.evtApply = new Event();
	        this.history = [];
	        this.historyIds = new Set();
	        this.undoMap = new Map();
	        this.mutations.add = (obj, mut, forward = true) => {
	            const { root, property } = pathWalk(obj, mut.path);
	            if (forward) {
	                if (!root[property])
	                    root[property] = JSON.parse(JSON.stringify(mut.data.value));
	            }
	            else {
	                if (root[property])
	                    delete root[property];
	            }
	            this.addHistory(mut);
	        };
	        this.mutations.set = (obj, mut, forward = true) => {
	            const { root, property } = pathWalk(obj, mut.path);
	            if (forward) {
	                root[property] = JSON.parse(JSON.stringify(mut.data.value));
	            }
	            else {
	                root[property] = JSON.parse(JSON.stringify(mut.data.old));
	            }
	            this.addHistory(mut);
	        };
	        this.mutations.delete = (obj, mut, forward = true) => {
	            const { root, property } = pathWalk(obj, mut.path);
	            if (forward) {
	                if (root && root[property]) {
	                    this.keepUndoObject(mut.id, root[property]);
	                    delete root[property];
	                }
	            }
	            else {
	                if (this.undoMap.has(mut.id)) {
	                    root[property] = this.undoMap.get(mut.id);
	                    this.undoMap.delete(mut.id);
	                }
	            }
	            this.addHistory(mut);
	        };
	        this.mutations.transaction = (obj, mut, forward = true) => {
	            if (!this.transactionMeta)
	                this.transactionMeta = mut.data.meta;
	            for (const subMut of mut.data.history) {
	                if (forward) {
	                    if (this.historyIds.has(subMut.id))
	                        continue;
	                    this.applyMutation(obj, subMut);
	                    this.historyIds.add(subMut.id);
	                }
	                else {
	                    if (!this.historyIds.has(subMut.id))
	                        continue;
	                    this.revertMutation(obj, subMut);
	                    this.historyIds.delete(subMut.id);
	                }
	            }
	            this.transactionMeta = undefined;
	            this.transactionHistory = [];
	            this.history.push(mut);
	            this.historyIds.add(mut.id);
	        };
	        this.mutations.undo = (obj, mut) => {
	            const index = this.history.findIndex(x => x.id === mut.data.id);
	            const target = this.history[index];
	            this.lastUndoIndex = index;
	            this.revertMutation(obj, target);
	            this.undoBuffer.push(target.id);
	            this.addHistory(mut);
	            this.historyIds.add(mut.id);
	        };
	        this.mutations.redo = (obj, mut) => {
	            const index = this.history.findIndex(x => x.id === mut.data.id);
	            const target = this.history[index];
	            this.lastUndoIndex = index + 1;
	            this.applyMutation(obj, target);
	            const index2 = this.undoBuffer.indexOf(target.id);
	            if (index2 != -1)
	                this.undoBuffer.splice(index2, 1);
	            this.historyIds.add(mut.id);
	            this.addHistory(mut);
	        };
	    }
	    addHookBefore(name, path, promise) {
	        this.hook.push({
	            type: "before",
	            name,
	            path,
	            promise
	        });
	    }
	    addHookAfter(name, path, promise) {
	        this.hook.push({
	            type: "after",
	            name,
	            path,
	            promise
	        });
	    }
	    get nextUndoId() {
	        if (this.history.length === 0)
	            return -1;
	        if (this.lastUndoIndex !== -1) {
	            for (let i = this.lastUndoIndex - 1; i >= 0; i--) {
	                return this.history[i].id;
	            }
	        }
	        return this.history[this.history.length - 1].id;
	    }
	    get nextRedoId() {
	        if (this.undoBuffer.length === 0)
	            return -1;
	        return this.undoBuffer[this.undoBuffer.length - 1];
	    }
	    keepUndoObject(id, val) {
	        this.undoMap.set(id, val);
	    }
	    addHistory(mut, force = false) {
	        if (!force && this.transactionMeta) {
	            this.transactionHistory.push(mut);
	        }
	        else {
	            this.history.push(mut);
	        }
	    }
	    transactionStart(meta = {}) {
	        this.transactionMeta = meta;
	    }
	    transactionEnd(path, meta = {}) {
	        this.createMutation("transaction", path, {
	            meta: Object.assign(this.transactionMeta, meta),
	            history: this.transactionHistory
	        });
	    }
	    createMutation(name, path, data) {
	        const mut = { id: uid(), time: perf(), name, path, data };
	        this.evtCreate.emit(mut);
	        return mut;
	    }
	    registerMutation(name, cb) {
	        this.mutations[name] = cb;
	    }
	    revertMutation(obj, mut) {
	        if (!this.mutations[mut.name])
	            throw new Error(`Unknown mutation ${mut.name}`);
	        this.mutations[mut.name](obj, mut, false);
	        this.historyIds.delete(mut.id);
	        this.evtApply.emit(mut);
	    }
	    applyMutation(obj, mut) {
	        if (!this.mutations[mut.name])
	            throw new Error(`Unknown mutation ${mut.name}`);
	        if (this.historyIds.has(mut.id))
	            return;
	        this.mutations[mut.name](obj, mut);
	        this.historyIds.add(mut.id);
	        this.evtApply.emit(mut);
	    }
	    async hookBefore(obj, mut) {
	        for (const hook of this.hook) {
	            if (hook.type !== "before")
	                continue;
	            if (hook.name !== mut.name)
	                continue;
	            if (hook.path !== mut.path)
	                continue;
	            await hook.promise(obj, mut);
	        }
	    }
	    async hookAfter(obj, mut) {
	        for (const hook of this.hook) {
	            if (hook.type !== "after")
	                continue;
	            if (hook.name !== mut.name)
	                continue;
	            if (hook.path !== mut.path)
	                continue;
	            await hook.promise(obj, mut);
	        }
	    }
	    sync(obj, history) {
	        for (const mut of history) {
	            this.applyMutation(obj, mut);
	        }
	    }
	    async syncAsyncExecute(obj, history) {
	        for (const mut of history) {
	            if (this.historyIds.has(mut.id))
	                continue;
	            await this.hookBefore(obj, mut);
	            this.applyMutation(obj, mut);
	            await this.hookAfter(obj, mut);
	        }
	    }
	    async syncAsync(obj, history) {
	        this.syncQueue.push(() => this.syncAsyncExecute(obj, history));
	        if (!this.syncCurrent) {
	            let elem = this.syncQueue.shift();
	            while (!!elem) {
	                this.syncCurrent = elem;
	                await elem();
	                elem = this.syncQueue.shift();
	                this.syncCurrent = undefined;
	            }
	        }
	    }
	    getHistory() {
	        return this.history;
	    }
	}

	const PATH_SEPARATOR = '.';
	const TARGET = Symbol('target');
	const UNSUBSCRIBE = Symbol('unsubscribe');

	const isPrimitive = value => value === null || (typeof value !== 'object' && typeof value !== 'function');

	const isBuiltinWithoutMutableMethods = value => value instanceof RegExp || value instanceof Number;

	const isBuiltinWithMutableMethods = value => value instanceof Date;

	const concatPath = (path, property) => {
		if (property && property.toString) {
			if (path) {
				path += PATH_SEPARATOR;
			}

			path += property.toString();
		}

		return path;
	};

	const walkPath = (path, callback) => {
		let index;

		while (path) {
			index = path.indexOf(PATH_SEPARATOR);

			if (index === -1) {
				index = path.length;
			}

			callback(path.slice(0, index));

			path = path.slice(index + 1);
		}
	};

	const shallowClone = value => {
		if (Array.isArray(value)) {
			return value.slice();
		}

		return Object.assign({}, value);
	};

	const onChange = (object, onChange, options = {}) => {
		const proxyTarget = Symbol('ProxyTarget');
		let inApply = false;
		let changed = false;
		let applyPath;
		let applyPrevious;
		let isUnsubscribed = false;
		const equals = options.equals || Object.is;
		let propCache = new WeakMap();
		let pathCache = new WeakMap();
		let proxyCache = new WeakMap();

		const handleChange = (path, property, previous, value) => {
			if (isUnsubscribed) {
				return;
			}

			if (!inApply) {
				onChange(concatPath(path, property), value, previous);
				return;
			}

			if (inApply && applyPrevious && previous !== undefined && value !== undefined && property !== 'length') {
				let item = applyPrevious;

				if (path !== applyPath) {
					path = path.replace(applyPath, '').slice(1);

					walkPath(path, key => {
						item[key] = shallowClone(item[key]);
						item = item[key];
					});
				}

				item[property] = previous;
			}

			changed = true;
		};

		const getOwnPropertyDescriptor = (target, property) => {
			let props = propCache ? propCache.get(target) : undefined;

			if (props) {
				return props;
			}

			props = new Map();
			propCache.set(target, props);

			let prop = props.get(property);
			if (!prop) {
				prop = Reflect.getOwnPropertyDescriptor(target, property);
				props.set(property, prop);
			}

			return prop;
		};

		const invalidateCachedDescriptor = (target, property) => {
			const props = propCache ? propCache.get(target) : undefined;

			if (props) {
				props.delete(property);
			}
		};

		const buildProxy = (value, path) => {
			if (isUnsubscribed) {
				return value;
			}

			pathCache.set(value, path);

			let proxy = proxyCache.get(value);

			if (proxy === undefined) {
				proxy = new Proxy(value, handler);
				proxyCache.set(value, proxy);
			}

			return proxy;
		};

		const unsubscribe = target => {
			isUnsubscribed = true;
			propCache = null;
			pathCache = null;
			proxyCache = null;

			return target;
		};

		const ignoreChange = property => {
			return isUnsubscribed || (options.ignoreSymbols === true && typeof property === 'symbol');
		};

		const handler = {
			get(target, property, receiver) {
				if (property === proxyTarget || property === TARGET) {
					return target;
				}

				if (property === UNSUBSCRIBE && pathCache.get(target) === '') {
					return unsubscribe(target);
				}

				const value = Reflect.get(target, property, receiver);
				if (
					isPrimitive(value) ||
					isBuiltinWithoutMutableMethods(value) ||
					property === 'constructor' ||
					options.isShallow === true
				) {
					return value;
				}

				// Preserve invariants
				const descriptor = getOwnPropertyDescriptor(target, property);
				if (descriptor && !descriptor.configurable) {
					if (descriptor.set && !descriptor.get) {
						return undefined;
					}

					if (descriptor.writable === false) {
						return value;
					}
				}

				return buildProxy(value, concatPath(pathCache.get(target), property));
			},

			set(target, property, value, receiver) {
				if (value && value[proxyTarget] !== undefined) {
					value = value[proxyTarget];
				}

				const ignore = ignoreChange(property);
				const previous = ignore ? null : Reflect.get(target, property, receiver);
				const result = Reflect.set(target[proxyTarget] || target, property, value);

				if (!ignore && !equals(previous, value)) {
					handleChange(pathCache.get(target), property, previous, value);
				}

				return result;
			},

			defineProperty(target, property, descriptor) {
				const result = Reflect.defineProperty(target, property, descriptor);

				if (!ignoreChange(property)) {
					invalidateCachedDescriptor(target, property);

					handleChange(pathCache.get(target), property, undefined, descriptor.value);
				}

				return result;
			},

			deleteProperty(target, property) {
				if (!Reflect.has(target, property)) {
					return true;
				}

				const ignore = ignoreChange(property);
				const previous = ignore ? null : Reflect.get(target, property);
				const result = Reflect.deleteProperty(target, property);

				if (!ignore) {
					invalidateCachedDescriptor(target, property);

					handleChange(pathCache.get(target), property, previous);
				}

				return result;
			},

			apply(target, thisArg, argumentsList) {
				const compare = isBuiltinWithMutableMethods(thisArg);

				if (compare) {
					thisArg = thisArg[proxyTarget];
				}

				if (!inApply) {
					inApply = true;

					if (compare) {
						applyPrevious = thisArg.valueOf();
					}

					if (Array.isArray(thisArg) || toString.call(thisArg) === '[object Object]') {
						applyPrevious = shallowClone(thisArg[proxyTarget]);
					}

					applyPath = pathCache.get(target);
					applyPath = applyPath.slice(0, Math.max(applyPath.lastIndexOf(PATH_SEPARATOR), 0));

					const result = Reflect.apply(target, thisArg, argumentsList);

					inApply = false;

					if (changed || (compare && !equals(applyPrevious, thisArg.valueOf()))) {
						handleChange(applyPath, '', applyPrevious, thisArg[proxyTarget] || thisArg);
						applyPrevious = null;
						changed = false;
					}

					return result;
				}

				return Reflect.apply(target, thisArg, argumentsList);
			}
		};

		const proxy = buildProxy(object, '');
		onChange = onChange.bind(proxy);

		return proxy;
	};

	onChange.target = proxy => proxy[TARGET] || proxy;
	onChange.unsubscribe = proxy => proxy[UNSUBSCRIBE] || proxy;

	var onChange_1 = onChange;
	// TODO: Remove this for the next major release
	var default_1 = onChange;
	onChange_1.default = default_1;

	class BaseStore {
	    constructor(data = {}) {
	        this._originalData = data;
	        this._store = new DataStore();
	        this._store.evtCreate.on((mut) => {
	            this._store.applyMutation(this._originalData, mut);
	        });
	        this._data = onChange_1(this._originalData, (path, value, previousValue) => {
	            if (previousValue === undefined) {
	                this._store.createMutation("add", path, { value, type: typeof value });
	            }
	            else if (value === undefined) {
	                const mut = this._store.createMutation("delete", path, {});
	                this._store.keepUndoObject(mut.id, previousValue);
	            }
	            else {
	                this._store.createMutation("set", path, { value, old: previousValue });
	            }
	        });
	    }
	    get id() {
	        return this._store.id;
	    }
	    get history() {
	        return clone(this._store.getHistory());
	    }
	    get data() {
	        return this._data;
	    }
	    get proxy() {
	        return clone(this.data);
	    }
	    get serialize() {
	        return this._originalData;
	    }
	    addHookBefore(name, path, promise) {
	        this._store.addHookBefore(name, path, promise);
	    }
	    addHookAfter(name, path, promise) {
	        this._store.addHookAfter(name, path, promise);
	    }
	    transactionStart(meta) {
	        this._store.transactionStart(meta);
	    }
	    transactionEnd(path = "", meta) {
	        this._store.transactionEnd(path, meta);
	    }
	    observe(cb) {
	        this._store.evtApply.on(cb);
	    }
	    sync(history) {
	        this._store.sync(this._originalData, history);
	    }
	    async syncAsync(history) {
	        await this._store.syncAsync(this._originalData, history);
	    }
	    undo() {
	        const mutId = this._store.nextUndoId;
	        if (mutId !== -1)
	            this._store.createMutation("undo", "", { id: mutId });
	    }
	    redo() {
	        const mutId = this._store.nextRedoId;
	        if (mutId !== -1)
	            this._store.createMutation("redo", "", { id: mutId });
	    }
	}

	class EntityStore extends BaseStore {
	    constructor(data = {}) {
	        super(data);
	        this.factory = new Map();
	        this.instances = new WeakMap();
	        this.created = new Set();
	        this._store.registerMutation("create", (obj, mut, _forward) => {
	            let instance = undefined;
	            // only instantiate object on real not proxy
	            const init = this.factory.get(mut.data.classname);
	            if (!init)
	                throw new Error("Cant find factory method for " + mut.data.classname);
	            instance = init(this, mut.data);
	            obj[mut.path] = instance.data;
	            this.instances.set(instance.data, instance);
	            this._store.addHistory(mut);
	            this._store.historyIds.add(mut.id);
	            if (instance && instance.created)
	                instance.created();
	        });
	    }
	    register(name, factory) {
	        this.factory.set(name, factory);
	    }
	    create(classname, data = {}) {
	        if (!this.factory.has(classname))
	            throw new Error("unknown");
	        const id = data.id ? data.id : uid(6);
	        data.id = id;
	        this.created.add(id);
	        this._store.createMutation("create", id, { classname, ...data });
	    }
	    delete(id) {
	        if (!this.data[id])
	            return;
	        const entity = this.getEntity(id);
	        if (entity && entity.deleted)
	            entity.deleted();
	        delete this.data[id];
	    }
	    getData(id, event = true) {
	        return event ? this.data[id] : this._originalData[id];
	    }
	    getEntity(id) {
	        const originalData = this.getData(id, false);
	        return this.instances.get(originalData);
	    }
	}

	// import { stringify as stringifyIni } from "js-ini"
	// import { stringify as stringifyYaml } from "yaml"
	class KeyStore extends BaseStore {
	    createSection(name) {
	        if (!name)
	            throw new Error("wrong parameter");
	        if (this.data[name])
	            throw new Error("section already exist " + name);
	        this.data[name] = {};
	    }
	    has(section, key) {
	        if (!section || !key)
	            throw new Error("wrong parameter");
	        if (!this.data || !this.data[section])
	            return false;
	        return key in this.data[section];
	    }
	    get(section, key, def = "") {
	        if (!section || !key)
	            throw new Error("wrong parameter");
	        if (!this.has(section, key))
	            return def;
	        return this.data[section][key];
	    }
	    set(section, key, value = "") {
	        if (!section || !key)
	            throw new Error("wrong parameter");
	        if (!this.data || !this.data[section])
	            throw new Error("section dont exist " + section);
	        this.data[section][key] = value;
	    }
	    delete(section, key) {
	        if (!section || !key)
	            throw new Error("wrong parameter");
	        if (!this.data || !this.data[section])
	            throw new Error("section dont exist " + section);
	        delete this.data[section][key];
	    }
	    deleteSection(name) {
	        if (!name)
	            throw new Error("wrong parameter");
	        delete this.data[name];
	    }
	    stringifyJSON() {
	        return JSON.stringify(this.data, null, 2);
	    }
	}

	class TableStore extends BaseStore {
	    constructor(entries = {}) {
	        const data = clone(entries);
	        for (const sheetId in entries) {
	            data[sheetId] = {
	                id: "id",
	                rows: [],
	                values: {}
	            };
	            for (const row of entries[sheetId]) {
	                const id = data[sheetId].id;
	                const uuid = row[id] ? row[id] : uid(4);
	                row[id] = uuid;
	                data[sheetId].rows.push(uuid);
	                data[sheetId].values[uuid] = row;
	            }
	        }
	        super(data);
	    }
	    getValues() {
	        const data = clone(this.serialize);
	        for (const sheetId in data) {
	            data[sheetId] = Object.values(data[sheetId].values);
	        }
	        return data;
	    }
	    getSheet(name) {
	        if (!this.data || !this.data[name])
	            throw new Error("sheet doesnt exist " + name);
	        return this.data[name];
	    }
	    createSheet(name, id = "id") {
	        if (!name)
	            throw new Error("wrong parameter");
	        if (this.data[name])
	            throw new Error("sheet already exist " + name);
	        this.data[name] = {
	            id,
	            rows: [],
	            values: {}
	        };
	    }
	    getRows(sheet) {
	        const data = this.getSheet(sheet);
	        return Object.values(data.values);
	    }
	    getRowById(sheet, id) {
	        if (!sheet || !id)
	            throw new Error("wrong parameter");
	        const data = this.getSheet(sheet);
	        return data.values[id];
	    }
	    addRow(sheet, value) {
	        if (!sheet || !value)
	            throw new Error("wrong parameter");
	        const data = this.getSheet(sheet);
	        const id = value[data.id] ? value[data.id] : uid(4);
	        value[data.id] = id;
	        data.rows.push(id);
	        data.values[id] = value;
	    }
	    setRow(sheet, rowId, value) {
	        if (!sheet || !rowId || !value)
	            throw new Error("wrong parameter");
	        const data = this.getSheet(sheet);
	        if (!(data.id in value))
	            value[data.id] = rowId;
	        data.values[rowId] = value;
	    }
	    deleteRow(sheet, rowId) {
	        if (!sheet || !rowId)
	            throw new Error("wrong parameter");
	        const data = this.getSheet(sheet);
	        data.rows = data.rows.filter(e => e !== rowId);
	        delete data.values[rowId];
	    }
	    getCell(sheet, rowId, col) {
	        if (!sheet || !rowId || !col)
	            throw new Error("wrong parameter");
	        const data = this.getSheet(sheet);
	        return data.values[rowId][col];
	    }
	    setCell(sheet, rowId, col, value = "") {
	        if (!sheet || !rowId || !col)
	            throw new Error("wrong parameter");
	        const data = this.getSheet(sheet);
	        data.values[rowId][col] = value;
	    }
	    deleteSheet(name) {
	        if (!name)
	            throw new Error("wrong parameter");
	        delete this.data[name];
	    }
	    stringifyJSON() {
	        return JSON.stringify(this.getValues(), null, 2);
	    }
	}

	class EntityFile {
	    constructor(store, data) {
	        this.store = store;
	        const defaults = {
	            id: uid(),
	            parentId: "",
	            icon: "file",
	            label: "file",
	            meta: {}
	        };
	        this.data = Object.assign({}, defaults, data);
	    }
	    get id() {
	        return this.data.id;
	    }
	    get label() {
	        return this.data.label;
	    }
	    set label(val) {
	        this.watchedData.label = val;
	    }
	    get icon() {
	        return this.data.icon;
	    }
	    set icon(val) {
	        this.watchedData.icon = val;
	    }
	    get isFolder() {
	        return false;
	    }
	    get watchedData() {
	        return this.store.getData(this.data.id);
	    }
	    setParent(parentId) {
	        const parent = this.store.getData(parentId);
	        if (!parent)
	            return;
	        if (parent.childIds.indexOf(this.data.id) !== -1)
	            return;
	        if (this.data.parentId !== parentId) {
	            const prevParent = this.store.getData(this.data.parentId);
	            if (prevParent) {
	                prevParent.childIds = prevParent.childIds.filter((x) => x !== this.id);
	            }
	            this.data.parentId = parentId;
	        }
	        parent.childIds.push(this.data.id);
	    }
	    created() {
	        if (!this.store.created.has(this.id))
	            return;
	        this.setParent(this.data.parentId);
	    }
	    deleted() {
	        const parent = this.store.getData(this.data.parentId);
	        if (!parent || !parent.childIds)
	            return;
	        parent.childIds = parent.childIds.filter((x) => x !== this.id);
	    }
	    toNestedJSON() {
	        const data = clone(this.data);
	        delete data.parentId;
	        data.icon = this.icon;
	        data.selected = this.id === this.store.getData("meta").selected;
	        return data;
	    }
	}

	class EntityFolder extends EntityFile {
	    constructor(store, data) {
	        const defaults = {
	            id: uid(),
	            parentId: "",
	            label: "folder",
	            icon: "folder",
	            meta: {},
	            childIds: []
	        };
	        data = Object.assign({}, defaults, data);
	        super(store, data);
	    }
	    get icon() {
	        return this.data.icon + (!this.data.meta.collapse ? "-open" : "");
	    }
	    set icon(val) {
	        this.data.icon = val;
	    }
	    get isFolder() {
	        return true;
	    }
	    toNestedJSON() {
	        const data = clone(this.data);
	        delete data.parentId;
	        delete data.childIds;
	        data.icon = this.icon;
	        data.selected = this.id === this.store.getData("meta").selected;
	        data.children = this.data.childIds.map(x => this.store.getEntity(x).toNestedJSON());
	        data.children.sort((a, b) => a.label.localeCompare(b.label));
	        return data;
	    }
	}

	// import { parse as parseIni } from "js-ini"
	class Kaaya {
	    /**
	     * Create a Base Store (basic store without helpers or predefined structure)
	     *
	     * @param {*} [data={}]
	     * @returns {BaseStore}
	     */
	    createRawStore(data) {
	        return new BaseStore(data);
	    }
	    //#region Key Store
	    /**
	     * Create a Keystore
	     *
	     * @param {*} [data={}]
	     * @returns {KeyStore}
	     */
	    createKeyStore(data = {}) {
	        return new KeyStore(data);
	    }
	    /**
	     * Create a Keystore from a configuration file (.ini)
	     *
	     * @param {string} data
	     * @memberof Kaaya
	     */
	    // public createKeyStoreFromINI(data: string): KeyStore {
	    // 	return this.createKeyStore(parseIni(data))
	    // }
	    /**
	     * Create a Keystore from a configuration file (.ini)
	     *
	     * @param {string} data
	     * @memberof Kaaya
	     */
	    // public createKeyStoreFromYAML(data: string): KeyStore {
	    // 	return this.createKeyStore(parseYaml(data))
	    // }
	    /**
	     * Create a Keystore from a configuration file (.json)
	     *
	     * @param {string} data
	     * @memberof Kaaya
	     */
	    createKeyStoreFromJSON(data) {
	        return this.createKeyStore(JSON.parse(data));
	    }
	    //#endregion KeyStore
	    //#region Table Store
	    createTableStore(data) {
	        return new TableStore(data);
	    }
	    // public createTableStoreFromYAML(data: string): TableStore {
	    // 	return this.createTableStore(parseYaml(data))
	    // }
	    createTableStoreFromJSON(data) {
	        return this.createTableStore(JSON.parse(data));
	    }
	    //#endregion Table Store
	    createEntityStore(data) {
	        return new EntityStore(data);
	    }
	    createEntityComponentStore(data) {
	        const store = this.createEntityStore(data);
	        store.register("Entity", (store1, data1) => new Entity(store1, data1));
	        store.register("Transform", (store2, data2) => new TransformComponent(store2, data2));
	        return store;
	    }
	    createFileFolderStore(data = {}) {
	        if (!data.meta)
	            data.meta = { selected: "" };
	        const store = this.createEntityStore(data);
	        store.register("File", (store1, data1) => new EntityFile(store1, data1));
	        store.register("Folder", (store2, data2) => new EntityFolder(store2, data2));
	        return store;
	    }
	}

	var index = new Kaaya();

	exports.BaseStore = BaseStore;
	exports.DataStore = DataStore;
	exports.EntityStore = EntityStore;
	exports.KeyStore = KeyStore;
	exports.TableStore = TableStore;
	exports.default = index;

	Object.defineProperty(exports, '__esModule', { value: true });

})));
