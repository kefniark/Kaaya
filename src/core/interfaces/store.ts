export interface IStoreData {
	id: string
	class: string
	store: string
	time: number
}

export interface IStoreMutation {
	readonly id: string
	readonly time: number
	readonly key: string
	apply(store: any, change?: boolean): void
	serialize(): any
}

export interface IStore {
	id: string
	set(key: string, value: string): void
	get(key: string, def?: string): string | undefined
	has(key: string): boolean
	getMutations(time?: number): IStoreData[]
}
