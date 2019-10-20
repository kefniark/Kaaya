import { TransformComponent, Component } from "./component"
import { EntityStore } from "../../stores"
import { IEntityData } from "./interfaces"
import nanoid = require("nanoid/non-secure")

export class Entity {
	get enable() {
		return this.data.enable
	}
	set enable(value: boolean) {
		this.watchedData.enable = value
	}
	get id() {
		return this.data.id
	}
	get name() {
		return this.data.name
	}
	set name(value: string) {
		this.watchedData.name = value
	}
	get gameobject(): Entity {
		return this.store.getEntity<Entity>(this.data.id)
	}
	get transform() {
		return this.store.getEntity<TransformComponent>(this.data.componentIds["Transform"])
	}
	get parent() {
		return this.store.getEntity<Entity>(this.data.parentId)
	}
	get components() {
		return Object.values(this.data.componentIds).map(x => this.store.getEntity<Component>(x))
	}
	get childs() {
		return this.data.childIds.map(x => this.store.getEntity<Entity>(x))
	}
	protected get watchedData() {
		return this.store.getData(this.data.id)
	}

	store: EntityStore
	data: IEntityData
	dataDefault: IEntityData = {
		id: nanoid(),
		name: "entity",
		parentId: "",
		childIds: [],
		componentIds: {},
		enable: true
	}

	constructor(store: EntityStore, data: IEntityData) {
		this.store = store
		this.data = Object.assign({}, this.dataDefault, data)
	}

	created() {
		const parent = this.store.getData(this.data.parentId)
		if (!parent) return
		if (parent.childIds.indexOf((x: string) => x === this.data.id) !== -1) return
		if (!this.store.created.has(this.id)) return
		parent.childIds.push(this.data.id)
	}

	deleted() {
		const parent = this.store.getData(this.data.parentId)
		if (!parent || !parent.childIds) return
		parent.childIds = parent.childIds.filter((x: string) => x !== this.id)
		for (const componentId of Object.values(this.data.componentIds)) {
			this.store.delete(componentId)
		}
		for (const childId of this.data.childIds) {
			this.store.delete(childId)
		}
	}
}

// export function walkEntity(entity: Entity, cb: (entity: Entity | Component, depth: number) => void, depth: number = 0) {
// 	if (!entity) return
// 	cb(entity, depth)
// 	for (const comp of entity.components) {
// 		cb(comp, depth + 1)
// 	}
// 	for (const child of entity.childs) {
// 		walkEntity(child, cb, depth + 1)
// 	}
// }
