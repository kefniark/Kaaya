export interface IFileData {
    parentId: string;
    id: string;
    label: string;
    icon: string;
    meta: {
        collapse?: boolean;
        hidden?: boolean;
        draggable?: boolean;
    };
}
export interface IFolderData extends IFileData {
    childIds: string[];
}
