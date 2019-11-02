import { Entity, TransformComponent } from "./customStore/entityComponent"
import { BaseStore, KeyStore, TableStore, EntityStore } from "./stores"
import { EntityFolder } from "./customStore/fileFolder/entityFolder"
import { EntityFile } from "./customStore/fileFolder/entityFile"

export class Kaaya {
	/**
	 * Create a Base Store (basic store without helpers or predefined structure)
	 *
	 * @param {*} [data={}]
	 * @returns {BaseStore}
	 */
	public static createRawStore(data?: any): BaseStore {
		return new BaseStore(data)
	}

	//#region Key Store
	/**
	 * Create a Keystore
	 *
	 * @param {*} [data={}]
	 * @returns {KeyStore}
	 */
	public static createKeyStore(data: any = {}): KeyStore {
		return new KeyStore(data)
	}

	/**
	 * Create a Keystore from a configuration file (.json)
	 *
	 * @param {string} data
	 * @memberof Kaaya
	 */
	public static createKeyStoreFromJSON(data: string): KeyStore {
		return Kaaya.createKeyStore(JSON.parse(data))
	}
	//#endregion KeyStore

	//#region Table Store
	public static createTableStore(data?: any): TableStore {
		return new TableStore(data)
	}

	public static createTableStoreFromJSON(data: string): TableStore {
		return Kaaya.createTableStore(JSON.parse(data))
	}
	//#endregion Table Store

	public static createEntityStore(data?: any): EntityStore {
		return new EntityStore(data)
	}

	public static createEntityComponentStore(data?: any): EntityStore {
		const store = Kaaya.createEntityStore(data)
		store.register("Entity", (store1, data1) => new Entity(store1, data1))
		store.register("Transform", (store2, data2) => new TransformComponent(store2, data2))
		return store
	}

	public static createFileFolderStore(data: any = {}): EntityStore {
		if (!data.meta) data.meta = { selected: "" }
		const store = Kaaya.createEntityStore(data)
		store.register("File", (store1, data1) => new EntityFile(store1, data1))
		store.register("Folder", (store2, data2) => new EntityFolder(store2, data2))
		return store
	}
}
