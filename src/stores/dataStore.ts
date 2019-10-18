import nanoid = require("nanoid")
import { now } from "../helpers/time"
import { pathWalk } from "../helpers/check"
import { SyncEvent } from "ts-events"

export class DataStore {
	public evtCreate: SyncEvent<any>
	public evtApply: SyncEvent<any>

	public id: string
	private mutations: { [id: string]: (obj: any, mut: any, forward?: boolean) => void } = {}
	private history: any[]
	private historyIds: Set<string>

	// transaction
	private transactionMeta: any = undefined
	private transactionHistory: any[] = []

	// undo / redo
	private lastUndoIndex = -1
	private undoBuffer: string[] = []
	private undoMap: Map<string, any>
	public get nextUndoId() {
		if (this.history.length === 0) return -1
		if (this.lastUndoIndex !== -1) {
			for (var i = this.lastUndoIndex - 1; i >= 0; i--) {
				return this.history[i].id
			}
		}
		return this.history[this.history.length - 1].id
	}
	public get nextRedoId() {
		if (this.undoBuffer.length === 0) return -1
		return this.undoBuffer[this.undoBuffer.length - 1]
	}

	constructor() {
		this.id = nanoid()
		this.evtCreate = new SyncEvent()
		this.evtApply = new SyncEvent()
		this.history = []
		this.historyIds = new Set()
		this.undoMap = new Map()

		this.mutations.add = (obj: any, mut: any, forward: boolean = true) => {
			var { root, property } = pathWalk(obj, mut.path)
			if (forward) {
				if (!root[property]) root[property] = JSON.parse(JSON.stringify(mut.data.value))
			} else {
				if (root[property]) delete root[property]
			}
			this.addHistory(mut)
		}

		this.mutations.set = (obj: any, mut: any, forward: boolean = true) => {
			var { root, property } = pathWalk(obj, mut.path)
			if (forward) {
				root[property] = JSON.parse(JSON.stringify(mut.data.value))
			} else {
				root[property] = JSON.parse(JSON.stringify(mut.data.old))
			}
			this.addHistory(mut)
		}

		this.mutations.delete = (obj: any, mut: any, forward: boolean = true) => {
			var { root, property } = pathWalk(obj, mut.path)
			if (forward) {
				if (root[property]) {
					this.keepUndoObject(mut.id, root[property])
					delete root[property]
				}
			} else {
				if (this.undoMap.has(mut.id)) {
					root[property] = this.undoMap.get(mut.id)
					this.undoMap.delete(mut.id)
				}
			}
			this.addHistory(mut)
		}

		this.mutations.transaction = (obj: any, mut: any, forward: boolean = true) => {
			if (!this.transactionMeta) this.transactionMeta = mut.data.meta
			for (var subMut of mut.data.history) {
				if (forward) {
					if (this.historyIds.has(subMut.id)) continue
					this.applyMutation([obj], subMut)
					this.historyIds.add(subMut.id)
				} else {
					if (!this.historyIds.has(subMut.id)) continue
					this.revertMutation([obj], subMut)
					this.historyIds.delete(subMut.id)
				}
			}
			this.transactionMeta = undefined
			this.transactionHistory = []
			this.history.push(mut)
			this.historyIds.add(mut.id)
		}

		this.mutations.undo = (obj: any, mut: any, _forward: boolean = true) => {
			var index = this.history.findIndex(x => x.id === mut.data.id)
			var target = this.history[index]
			this.lastUndoIndex = index

			this.revertMutation([obj], target)
			this.undoBuffer.push(target.id)

			this.addHistory(mut)
			this.historyIds.add(mut.id)
		}

		this.mutations.redo = (obj: any, mut: any, _forward: boolean = true) => {
			var index = this.history.findIndex(x => x.id === mut.data.id)
			var target = this.history[index]
			this.lastUndoIndex = index + 1

			this.applyMutation([obj], target)
			var index = this.undoBuffer.indexOf(target.id)
			if (index != -1) this.undoBuffer.splice(index, 1)

			this.historyIds.add(mut.id)
			this.addHistory(mut)
		}
	}

	public keepUndoObject(id: string, val: any) {
		this.undoMap.set(id, val)
	}

	public addHistory(mut: any, force = false) {
		if (!force && this.transactionMeta) {
			this.transactionHistory.push(mut)
		} else {
			this.history.push(mut)
		}
	}

	public transactionStart(meta: any = {}) {
		this.transactionMeta = meta
	}

	public transactionEnd() {
		this.createMutation("transaction", "", {
			meta: this.transactionMeta,
			history: this.transactionHistory
		})
	}

	createMutation(name: string, path: string, data: any) {
		var mut = { id: nanoid(), time: now(), name, path, data }
		this.evtCreate.post(mut)
		return mut
	}

	revertMutation(obj: any[], mut: any) {
		if (!this.mutations[mut.name]) {
			throw new Error(`Unknown mutation ${mut.name}`)
		}
		for (var o of obj) {
			this.mutations[mut.name](o, mut, false)
		}
		this.historyIds.delete(mut.id)
		this.evtApply.post(mut)
	}

	applyMutation(obj: any[], mut: any) {
		if (!this.mutations[mut.name]) {
			throw new Error(`Unknown mutation ${mut.name}`)
		}
		if (this.historyIds.has(mut.id)) return
		for (var o of obj) {
			this.mutations[mut.name](o, mut)
		}
		this.historyIds.add(mut.id)
		this.evtApply.post(mut)
	}

	sync(obj: any[], history: any[]) {
		for (var mut of history) {
			this.applyMutation(obj, mut)
		}
	}

	getHistory() {
		return this.history
	}
}
