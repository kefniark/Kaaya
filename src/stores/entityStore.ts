import { BaseStore } from "./baseStore"
import { uid } from "coopa"

export class EntityStore extends BaseStore {
	factory = new Map<string, (store: EntityStore, data: any) => any>()
	instances = new WeakMap<any, any>()
	created = new Set<string>()

	constructor(data: any = {}) {
		super(data)

		this._store.registerMutation("create", (obj, mut, _forward) => {
			let instance: any = undefined

			// only instantiate object on real not proxy
			const init = this.factory.get(mut.data.classname)
			if (!init) throw new Error("Cant find factory method for " + mut.data.classname)
			instance = init(this, mut.data)
			obj[mut.path] = instance.data
			this.instances.set(instance.data, instance)

			this._store.addHistory(mut)
			this._store.historyIds.add(mut.id)
			if (instance && instance.created) instance.created()
		})
	}

	register(name: string, factory: (store: EntityStore, data: any) => any): void {
		this.factory.set(name, factory)
	}

	create(classname: string, data: any = {}) {
		if (!this.factory.has(classname)) throw new Error("unknown class " + classname)

		const id = data.id ? data.id : uid(6)
		data.id = id
		this.created.add(id)
		this._store.createMutation("create", id, { classname, ...data })
	}

	delete(id: string) {
		if (!this.data[id]) return
		const entity = this.getEntity<any>(id)
		if (entity && entity.deleted) entity.deleted()
		delete this.data[id]
	}

	getData(id: string, event = true): any {
		return event ? this.data[id] : this._originalData[id]
	}

	getEntity<T>(id: string): T {
		const originalData = this.getData(id, false)
		return this.instances.get(originalData) as T
	}
}
