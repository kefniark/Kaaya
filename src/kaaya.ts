import { Store as Store } from "./store/store";
// import { StoreObject } from "./store/objectstore";
import { SetStore } from "./store/setstore";
// import { DelegateStore } from "./store/delegatestore";

export class Kaaya {
	createStore() {
		return new Store();
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
