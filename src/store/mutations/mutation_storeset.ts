import { IStoreMutation, IStoreData } from "../../core/interfaces/store";
import nanoid = require("nanoid");
import { Store } from "../store";
import { SetStore } from "../setstore";
import { now } from "../../helpers/time";

export interface IStoreCreateMutationData extends IStoreData {
	key: string;
}

export class StoreCreateMutation implements IStoreMutation {
	public readonly data: IStoreCreateMutationData;
	get store() { return this.data.store; }
	set store(store: string) { this.data.store = store; }
	get id() { return this.data.id; }
	get time(): number { return this.data.time; }

	get key() { return this.data.key; }

	constructor(data?: IStoreCreateMutationData | {key: string}) {
		if (data && 'id' in data) {
			this.data = data;
		} else {
			this.data = {
				id: nanoid(),
				class: 'StoreCreateMutation',
				store: '',
				key: data ? data.key : '',
				time: now()
			} as IStoreCreateMutationData;
		}
	}

	serialize(): IStoreData {
		return this.data;
	}

	apply(store: SetStore): Store {
		// store the mutation
		store._mutations.add(this);

		var s = store.instantiate(this.key);
		store._data.set(this.key, s);

		s.on('set', (_key: string, mut: any) => {
			mut.store = s.get('_storeId');
			store._mutations.add(mut);
		});
		s.on('deprecated', (_key: string, mut: any) => {
			mut.store = s.get('_storeId');
			store._mutations.delete(mut);
		});

		s.start();

		return s;
	}
}

export class StoreDeleteMutation implements IStoreMutation {
	public readonly data: IStoreCreateMutationData;
	get store() { return this.data.store; }
	set store(store: string) { this.data.store = store; }
	get id() { return this.data.id; }
	get time(): number { return this.data.time; }

	get key() { return this.data.key; }

	constructor(data?: IStoreCreateMutationData | {key: string}) {
		if (data && 'id' in data) {
			this.data = data;
		} else {
			this.data = {
				id: nanoid(),
				class: 'StoreCreateMutation',
				store: '',
				key: data ? data.key : '',
				time: now()
			} as IStoreCreateMutationData;
		}
	}

	serialize(): IStoreData {
		return this.data;
	}

	apply(store: SetStore) {
		store._data.delete(this.key);
	}
}

