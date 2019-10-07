export interface IStoreData {
	id: string;
	class: string;
	store: string;
	time: number;
}

export interface IStoreMutation {
	readonly id: string;
	readonly time: number;
	readonly key: string;
	apply(store: any): void;
	serialize(): any;
}

export interface IStore {
	readonly _data: Map<string, string>;
	set(key: string, value: string): void;
	get(key: string, def?: string): string | undefined;
	getMutations(): IStoreData[];
}

// export interface IStoreOjbect {
// 	lastUpdated: number;
// 	readonly _data: Map<string, string>;
// 	set(key: string, value: string): void;
// 	get(key: string, def?: string): string | undefined;
// 	getMutations(): Set<IStoreMutation>;
// }
