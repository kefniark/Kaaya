import { parse as parseIni } from "js-ini"
import { parse as parseYaml } from "yaml"
import { Entity, TransformComponent } from "./customStore/entityComponent"
import { BaseStore, KeyStore, TableStore, EntityStore } from "./stores"

export class Kaaya {
	/**
	 * Create a Base Store (basic store without helpers or predefined structure)
	 *
	 * @param {*} [data={}]
	 * @returns {BaseStore}
	 */
	public createRawStore(data: any = {}): BaseStore {
		return new BaseStore(data)
	}

	//#region Key Store
	/**
	 * Create a Keystore
	 *
	 * @param {*} [data={}]
	 * @returns {KeyStore}
	 */
	public createKeyStore(data: any = {}): KeyStore {
		return new KeyStore(data)
	}

	/**
	 * Create a Keystore from a configuration file (.ini)
	 *
	 * @param {string} data
	 * @memberof Kaaya
	 */
	public createKeyStoreFromINI(data: string): KeyStore {
		return this.createKeyStore(parseIni(data))
	}

	/**
	 * Create a Keystore from a configuration file (.ini)
	 *
	 * @param {string} data
	 * @memberof Kaaya
	 */
	public createKeyStoreFromYAML(data: string): KeyStore {
		return this.createKeyStore(parseYaml(data))
	}

	/**
	 * Create a Keystore from a configuration file (.json)
	 *
	 * @param {string} data
	 * @memberof Kaaya
	 */
	public createKeyStoreFromJSON(data: string): KeyStore {
		return this.createKeyStore(JSON.parse(data))
	}
	//#endregion KeyStore

	//#region Table Store
	public createTableStore(data: any = {}): TableStore {
		return new TableStore(data)
	}

	public createTableStoreFromYAML(data: string): TableStore {
		return this.createTableStore(parseYaml(data))
	}

	public createTableStoreFromJSON(data: string): TableStore {
		return this.createTableStore(JSON.parse(data))
	}
	//#endregion Table Store

	public createEntityStore(data: any = {}): EntityStore {
		return new EntityStore(data)
	}

	public createEntityComponentStore(data: any = {}): EntityStore {
		var store = new EntityStore(data)
		store.register("Entity", (store, data) => new Entity(store, data))
		store.register("Transform", (store, data) => new TransformComponent(store, data))
		return store
	}
}
