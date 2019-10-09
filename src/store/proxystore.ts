// import { IStore } from "../core/interfaces/store";

// export class ProxyStore implements IStore {
// 	get id() { return `${this._prefix}.${this._store.id}`; }
// 	get _data() { return this._store._data; }
// 	readonly _prefix: string;
// 	readonly _store: IStore;

// 	constructor(store: IStore, prefix: string) {
// 		this._store = store;
// 		this._prefix = prefix;
// 	}

// 	private getKey(key: string) {
// 		return `${this._prefix}.${key}`;
// 	}

// 	set(key: string, value: string) {
// 		this._store.set(this.getKey(key), value);
// 	}

// 	has(key: string) {
// 		return this._store.has(this.getKey(key));
// 	}

// 	get(key: string, def?: string) {
// 		var val = this._store.get(this.getKey(key));
// 		return !val ? def : val;
// 	}

// 	getMutations(time?: number) {
// 		return this._store.getMutations(time);
// 	}
// }
