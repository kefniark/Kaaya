import { Store as Store } from "./store/store";
// import { StoreObject } from "./store/objectstore";
import { SetStore } from "./store/setstore";
import { GOStore } from "./object";
import { mutationFactory } from "./store/mutations";
// import { DelegateStore } from "./store/delegatestore";

export class Kaaya {

	public mutations = mutationFactory;

	createStore() {
		return new Store();
	}

	createGO() {
		return new GOStore();
	}
	// createObjectStore() {
	// 	return new StoreObject();
	// }

	createSetStore() {
		return new SetStore();
	}

	// createDelegateStore() {
	// 	return new DelegateStore();
	// }
}
