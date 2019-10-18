import { DataStore } from "./dataStore"
import onChange = require("on-change")

export class BaseStore {
	public get id() {
		return this._store.id
	}
	public get history() {
		return this._store.getHistory()
	}
	public get data() {
		return this._data
	}
	public get serialize() {
		return this._originalData
	}
	private _store: DataStore
	private _originalData: any
	private _data: any
	private _updatedObj: any[]

	constructor(data: any = {}) {
		this._originalData = data
		this._store = new DataStore()
		this._updatedObj = [this._originalData]

		this._store.evtCreate.attach((mut: any) => {
			this._store.applyMutation(this._updatedObj, mut)
		})

		this._data = onChange(this._originalData, (path: string, value: any, previousValue: any) => {
			if (previousValue === undefined) {
				this._store.createMutation("add", path, { value, type: typeof value })
			} else if (value === undefined) {
				var mut = this._store.createMutation("delete", path, {})
				this._store.keepUndoObject(mut.id, previousValue)
			} else {
				this._store.createMutation("set", path, { value, old: previousValue })
			}
		})
	}

	public transactionStart(meta: any = {}) {
		this._store.transactionStart(meta)
	}

	public transactionEnd() {
		this._store.transactionEnd()
	}

	public observe(cb: (mut: any) => void) {
		this._store.evtApply.attach(cb)
	}

	public sync(history: any[]) {
		this._store.sync(this._updatedObj, history)
	}

	public instantiateProxy() {
		var proxy = JSON.parse(JSON.stringify(this._originalData))
		this._updatedObj.push(proxy)
		return proxy
	}

	public undo() {
		var mutId = this._store.nextUndoId
		if (mutId !== -1) this._store.createMutation("undo", "", { id: mutId })
		// console.log('undo', mutId, this.data);
	}

	public redo() {
		var mutId = this._store.nextRedoId
		if (mutId !== -1) this._store.createMutation("redo", "", { id: mutId })
		// console.log('redo', mutId, this.data);
	}
}
