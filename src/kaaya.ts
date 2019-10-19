import { KeyStore } from "./stores/keyStore"
import { parse as parseIni } from "js-ini"
import { parse as parseYaml } from "yaml"
import { BaseStore } from "./stores/baseStore"

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
	public createKeyStoreFromINI(data: string) {
		return new KeyStore(parseIni(data))
	}

	/**
	 * Create a Keystore from a configuration file (.ini)
	 *
	 * @param {string} data
	 * @memberof Kaaya
	 */
	public createKeyStoreFromYAML(data: string) {
		return new KeyStore(parseYaml(data))
	}

	/**
	 * Create a Keystore from a configuration file (.json)
	 *
	 * @param {string} data
	 * @memberof Kaaya
	 */
	public createKeyStoreFromJSON(data: string) {
		return new KeyStore(JSON.parse(data))
	}
}
