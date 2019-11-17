import { BaseStore } from "./baseStore";
export declare class EntityStore extends BaseStore {
    factory: Map<string, (store: EntityStore, data: any) => any>;
    instances: WeakMap<any, any>;
    created: Set<string>;
    constructor(data?: any);
    register(name: string, factory: (store: EntityStore, data: any) => any): void;
    create(classname: string, data?: any): void;
    delete(id: string): void;
    getData(id: string, event?: boolean): any;
    getEntity<T>(id: string): T;
}
