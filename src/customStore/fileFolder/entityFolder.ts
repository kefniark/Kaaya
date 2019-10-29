import { EntityStore } from "../../stores"
import { IFolderData } from "./interfaces"
import { uid } from "coopa"
import { EntityFile } from "./entityFile"
import { clone } from "../../helpers/check"

export class EntityFolder extends EntityFile {
	get icon() {
		return this.data.icon + (!this.data.meta.collapse ? "-open" : "")
	}
	set icon(val: string) {
		this.data.icon = val
	}
	get isFolder() {
		return true
	}

	protected data: IFolderData

	constructor(store: EntityStore, data: IFolderData) {
		const defaults: IFolderData = {
			id: uid(),
			parentId: "",
			label: "folder",
			icon: "folder",
			meta: {},
			childIds: []
		}
		data = Object.assign({}, defaults, data)
		super(store, data)
	}

	toNestedJSON() {
		const data = clone(this.data)
		delete data.parentId
		delete data.childIds
		data.icon = this.icon
		data.selected = this.id === this.store.getData("meta").selected
		data.children = this.data.childIds.map(x => this.store.getEntity<EntityFile>(x).toNestedJSON())
		data.children.sort((a: any, b: any) => a.label.localeCompare(b.label))
		return data
	}
}
