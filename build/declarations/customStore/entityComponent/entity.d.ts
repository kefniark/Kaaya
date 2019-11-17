import { TransformComponent, Component } from "./component";
import { EntityStore } from "../../stores";
import { IEntityData } from "./interfaces";
export declare class Entity {
    get enable(): boolean;
    set enable(value: boolean);
    get id(): string;
    get name(): string;
    set name(value: string);
    get gameobject(): Entity;
    get transform(): TransformComponent;
    get parent(): Entity;
    get components(): Component[];
    get childs(): Entity[];
    protected get watchedData(): any;
    store: EntityStore;
    data: IEntityData;
    dataDefault: IEntityData;
    constructor(store: EntityStore, data: IEntityData);
    created(): void;
    deleted(): void;
}
