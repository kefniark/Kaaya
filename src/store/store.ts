
import { IStoreMutation, IStore, IStoreData } from '../core/interfaces/store';
import { StoreMutation } from './mutations/mutation_store';
import { deserializeMutation } from './mutations/factory';

export class Store implements IStore {
	get id() { return this.get('_storeId') || ""; }
	readonly _data = new Map<string, string>();
	readonly _lastMutation = new Map<string, IStoreMutation>()
	readonly _mutations = new Set<IStoreMutation>();
	protected events: { [id: string]: any } = {};

	constructor(id?: string) {
		if (id) this.set('_storeId', id);
	}

	set(key: string, value: string) {
		var previous = this._data.get(key);
		if (previous === value) return;

		var mutation = new StoreMutation({key, value});
		mutation.apply(this);
	}

	has(key: string) {
		return this._data.has(key);
	}

	get(key: string, def?: string) {
		var val = this._data.get(key);
		return !val ? def : val;
	}

	getMutations(time?: number) {
		if (time) {
			return [...this._mutations].filter(x => x.time >= time).map(x => x.serialize());
		}
		return [...this._mutations].map(x => x.serialize());
	}

	setMutations(data: IStoreData[]) {
		var mutations = deserializeMutation(data);
		for (var mut of mutations) {
			var prev = this._lastMutation.get(mut.key)
			if (prev && prev.time >= mut.time && prev.id != mut.id) {
				console.warn('conflict mutation, keep the more recent one', mut.key);
				continue;
			}
			mut.apply(this);
		}
	}

	public emitMutation(mutation: IStoreMutation, lastMutation?: IStoreMutation) {
		if (lastMutation) this.emit(this.events.deprecated, [lastMutation.key, lastMutation]);
		this.emit(this.events.set, [mutation.key, mutation]);
	}

	private emit(listeners: any, args?: any) {
		if (!listeners) {
			return;
		}
		for (const listener of listeners) {
			this.emitEvent(listener, args);
		}
	}

	private emitEvent(func: any, args: any) {
		try {
			func.apply(this, args);
		} catch (e) {
			console.warn(e);
		}
	}

	public on(name: string, cb: any) {
		if (!this.events[name]) {
			this.events[name] = [cb];
		} else {
			this.events[name].push(cb);
		}
	}
}
