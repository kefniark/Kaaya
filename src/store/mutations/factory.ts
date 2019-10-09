// import { IStoreMutation, IStoreData } from "../../core/interfaces/store";

// export const mutationFactory: Map<string, (data: IStoreData) => IStoreMutation> = new Map();

// export function deserializeMutation(data: IStoreData[]) {
// 	return data.map(x => {
// 		var fn = mutationFactory.get(x.class);
// 		if (!fn) {
// 			throw new Error('Unknown mutation ' + x.class);
// 		}
// 		return fn(x);
// 	})
// }
