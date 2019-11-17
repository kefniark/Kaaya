import { EntityStore } from "../../stores";
import { IFileData } from "./interfaces";
export declare class EntityFile {
    get id(): string;
    get label(): string;
    set label(val: string);
    get icon(): string;
    set icon(val: string);
    get isFolder(): boolean;
    protected get watchedData(): any;
    protected store: EntityStore;
    protected data: IFileData;
    constructor(store: EntityStore, data: IFileData);
    setParent(parentId: string): void;
    created(): void;
    deleted(): void;
    toNestedJSON(): any;
}
