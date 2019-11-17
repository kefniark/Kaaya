import { EntityStore } from "../../stores";
import { IFolderData } from "./interfaces";
import { EntityFile } from "./entityFile";
export declare class EntityFolder extends EntityFile {
    get icon(): string;
    set icon(val: string);
    get isFolder(): boolean;
    protected data: IFolderData;
    constructor(store: EntityStore, data: IFolderData);
    toNestedJSON(): any;
}
