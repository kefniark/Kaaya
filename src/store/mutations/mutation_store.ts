import { IStoreMutation, IStoreData } from "../../core/interfaces/store";
import nanoid = require("nanoid");
import { mutationFactory } from "./factory";
import { Store } from "../store";
import { now } from "../../helpers/time";

export interface IStoreMutationData extends IStoreData {
	key: string;
	value: string;
}

export class StoreMutation implements IStoreMutation {
	public readonly data: IStoreMutationData;
	get store() { return this.data.store; }
	set store(store: string) { this.data.store = store; }
	get id() { return this.data.id; }
	get time(): number { return this.data.time; }

	get key() { return this.data.key; }
	get value() { return this.data.value; }

	constructor(data?: IStoreMutationData | {key: string, value: string}) {
		if (data && 'id' in data) {
			this.data = data;
		} else {
			this.data = {
				id: nanoid(),
				class: 'StoreMutation',
				key: data ? data.key : '',
				value: data ? data.value : '',
				time: now()
			} as IStoreMutationData;
		}
	}

	serialize(): IStoreData {
		return this.data;
	}

	apply(store: Store) {
		// store the mutation
		store._mutations.add(this);
		var prevMut = store._lastMutation.get(this.key);
		store._lastMutation.set(this.key, this);

		// set the value
		store._data.set(this.key, this.value);
		store.emitMutation(this, prevMut);

		// clean old mutation
		if (prevMut) store._mutations.delete(prevMut);
	}
}

mutationFactory.set('StoreMutation', (e: IStoreData) => new StoreMutation(e as IStoreMutationData));
