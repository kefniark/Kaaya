import { Vector3, ITransformComponentData, IComponentData } from "./interfaces"
import { Entity } from "./entity"
import { EntityStore } from "../../stores"
import { uid } from "coopa"

export class Component {
	get id() {
		return this.data.id
	}
	get name() {
		return this.data.type
	}
	get gameobject() {
		return this.store.getEntity<Entity>(this.data.parentId)
	}
	get transform() {
		return this.gameobject.transform
	}
	protected get watchedData() {
		return this.store.getData(this.data.id)
	}

	protected store: EntityStore
	protected data: IComponentData
	dataDefault: IComponentData = {
		id: uid(),
		parentId: "",
		type: "",
		enable: true
	}

	constructor(store: EntityStore, data: IComponentData) {
		this.store = store
		this.data = Object.assign({}, this.dataDefault, data)
	}

	created() {
		const parent = this.store.getData(this.data.parentId)
		if (!parent) return
		if (this.data.type in parent.componentIds) return
		if (!this.store.created.has(this.id)) return
		parent.componentIds[this.data.type] = this.data.id
	}

	deleted() {
		const parent = this.store.getData(this.data.parentId)
		if (!parent || !parent.componentIds) return
		delete parent.componentIds[this.data.type]
	}

	mounted() {}

	unmounted() {}

	enabled() {}

	disabled() {}
}

export class TransformComponent extends Component {
	get position(): Vector3 {
		return this.watchedData.position
	}
	get rotation(): Vector3 {
		return this.watchedData.rotation
	}
	get scale(): Vector3 {
		return this.watchedData.scale
	}
	data: ITransformComponentData

	constructor(store: EntityStore, data: IComponentData) {
		if (!data.type) data.type = "Transform"
		super(store, data)

		if (!this.data.position) this.data.position = { x: 0, y: 0, z: 0 }
		if (!this.data.rotation) this.data.rotation = { x: 0, y: 0, z: 0 }
		if (!this.data.scale) this.data.scale = { x: 1, y: 1, z: 1 }
	}
}
