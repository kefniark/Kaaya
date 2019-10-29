import { EntityStore } from "../../stores"
import { IFileData, IFolderData } from "./interfaces"
import { uid } from "coopa"
import { clone } from "../../helpers/check"

export class EntityFile {
	get id() {
		return this.data.id
	}
	get label() {
		return this.data.label
	}
	set label(val: string) {
		this.watchedData.label = val
	}
	get icon() {
		return this.data.icon
	}
	set icon(val: string) {
		this.watchedData.icon = val
	}
	get isFolder() {
		return false
	}
	protected get watchedData() {
		return this.store.getData(this.data.id)
	}

	protected store: EntityStore
	protected data: IFileData

	constructor(store: EntityStore, data: IFileData) {
		this.store = store
		const defaults: IFileData = {
			id: uid(),
			parentId: "",
			icon: "file",
			label: "file",
			meta: {}
		}
		this.data = Object.assign({}, defaults, data)
	}

	setParent(parentId: string) {
		const parent = this.store.getData(parentId) as IFolderData | undefined
		if (!parent) return
		if (parent.childIds.indexOf(this.data.id) !== -1) return
		if (this.data.parentId !== parentId) {
			const prevParent = this.store.getData(this.data.parentId) as IFolderData | undefined
			if (prevParent) {
				prevParent.childIds = prevParent.childIds.filter((x: string) => x !== this.id)
			}
			this.data.parentId = parentId
		}
		parent.childIds.push(this.data.id)
	}

	created() {
		if (!this.store.created.has(this.id)) return
		this.setParent(this.data.parentId)
	}

	deleted() {
		const parent = this.store.getData(this.data.parentId)
		if (!parent || !parent.childIds) return
		parent.childIds = parent.childIds.filter((x: string) => x !== this.id)
	}

	toNestedJSON() {
		const data = clone(this.data)
		delete data.parentId
		data.icon = this.icon
		data.selected = this.id === this.store.getData("meta").selected
		return data
	}
}
