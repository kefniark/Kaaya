import { BaseStore, KeyStore, TableStore, EntityStore } from "./stores";
export declare class Kaaya {
    /**
     * Create a Base Store (basic store without helpers or predefined structure)
     *
     * @param {*} [data={}]
     * @returns {BaseStore}
     */
    static createRawStore(data?: any): BaseStore;
    /**
     * Create a Keystore
     *
     * @param {*} [data={}]
     * @returns {KeyStore}
     */
    static createKeyStore(data?: any): KeyStore;
    /**
     * Create a Keystore from a configuration file (.json)
     *
     * @param {string} data
     * @memberof Kaaya
     */
    static createKeyStoreFromJSON(data: string): KeyStore;
    static createTableStore(data?: any): TableStore;
    static createTableStoreFromJSON(data: string): TableStore;
    static createEntityStore(data?: any): EntityStore;
    static createEntityComponentStore(data?: any): EntityStore;
    static createFileFolderStore(data?: any): EntityStore;
}
