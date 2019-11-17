import { DataStore } from "./dataStore";
export declare class BaseStore {
    get id(): string;
    get history(): any[];
    get data(): any;
    get proxy(): any;
    get serialize(): any;
    protected _store: DataStore;
    protected _originalData: any;
    private _data;
    constructor(data?: any);
    addHookBefore(name: string, path: string, promise: (obj: any, mut: any) => Promise<void>): void;
    addHookAfter(name: string, path: string, promise: (obj: any, mut: any) => Promise<void>): void;
    transactionStart(meta?: any): void;
    transactionEnd(path?: string, meta?: any): void;
    observe(cb: (mut: any) => void): void;
    sync(history: any[]): void;
    syncAsync(history: any[]): Promise<void>;
    undo(): void;
    redo(): void;
}
