import { Store } from "./store";
import { IStoreMutation, IStoreData } from "../core/interfaces/store";
import { deserializeMutation, mutationFactory } from "./mutations/factory";
import nanoid = require("nanoid");
import { StoreCreateMutation, StoreDeleteMutation } from "./mutations/mutation_storeset";

export class SetStore {
	readonly _data: Map<string, Store> = new Map();
	readonly _mutations = new Set<IStoreMutation>();

	instantiate(key?: string) {
		return new Store(key);
	}

	create(name?: string) {
		if (!name) name = nanoid();

		var constr: (data: any) => StoreCreateMutation = mutationFactory.get('StoreCreateMutation') as any;
		if (!constr) throw new Error('cannot find factory create');

		var mutation = constr({key: name});
		return mutation.apply(this);
	}

	get data() {
		return [...this._data.values()].map(x => x._data);
	}

	get(name: string) {
		return this._data.get(name);
	}

	delete(name: string) {
		var constr: (data: any) => StoreDeleteMutation  = mutationFactory.get('StoreDeleteMutation') as any;
		if (!constr) throw new Error('cannot find factory delete');

		var mutation = constr({key: name});
		this._mutations.add(mutation);
		mutation.apply(this);
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
			var storeId = (mut as any).store;
			var obj = this._data.get(storeId);
			if (storeId && obj) {
				console.log(`Apply.Store[${storeId}] -> ${mut}`);
				mut.apply(obj, true);
			} else {
				console.log(`Apply.Root -> ${mut}`);
				mut.apply(this);
			}
		}
	}
}
