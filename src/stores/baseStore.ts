import { DataStore } from "./dataStore"
import onChange = require("on-change")
import { clone } from "../helpers/check"

export class BaseStore {
	public get id(): string {
		return this._store.id
	}
	public get history(): any[] {
		return clone(this._store.getHistory())
	}
	public get data(): any {
		return this._data
	}
	public get proxy(): any {
		return clone(this.data)
	}
	public get serialize(): any {
		return this._originalData
	}
	protected _store: DataStore
	protected _originalData: any
	private _data: any

	constructor(data: any = {}) {
		this._originalData = data
		this._store = new DataStore()

		this._store.evtCreate.attach((mut: any) => {
			this._store.applyMutation(this._originalData, mut)
		})

		this._data = onChange(this._originalData, (path: string, value: any, previousValue: any) => {
			if (previousValue === undefined) {
				this._store.createMutation("add", path, { value, type: typeof value })
			} else if (value === undefined) {
				const mut = this._store.createMutation("delete", path, {})
				this._store.keepUndoObject(mut.id, previousValue)
			} else {
				this._store.createMutation("set", path, { value, old: previousValue })
			}
		})
	}

	public addHookBefore(name: string, path: string, promise: (obj: any, mut: any) => Promise<void>) {
		this._store.addHookBefore(name, path, promise)
	}

	public addHookAfter(name: string, path: string, promise: (obj: any, mut: any) => Promise<void>) {
		this._store.addHookAfter(name, path, promise)
	}

	public transactionStart(meta?: any): void {
		this._store.transactionStart(meta)
	}

	public transactionEnd(path: string = "", meta?: any): void {
		this._store.transactionEnd(path, meta)
	}

	public observe(cb: (mut: any) => void): void {
		this._store.evtApply.attach(cb)
	}

	public sync(history: any[]): void {
		this._store.sync(this._originalData, history)
	}

	public async syncAsync(history: any[]) {
		await this._store.syncAsync(this._originalData, history)
	}

	public undo(): void {
		const mutId = this._store.nextUndoId
		if (mutId !== -1) this._store.createMutation("undo", "", { id: mutId })
	}

	public redo(): void {
		const mutId = this._store.nextRedoId
		if (mutId !== -1) this._store.createMutation("redo", "", { id: mutId })
	}
}
