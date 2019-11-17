import { BaseStore } from "./baseStore";
export interface ITableSheet {
    id: string;
    rows: string[];
    values: any;
}
export declare class TableStore extends BaseStore {
    constructor(entries?: any);
    private getValues;
    getSheet(name: string): ITableSheet;
    createSheet(name: string, id?: string): void;
    getRows(sheet: string): unknown[];
    getRowById(sheet: string, id: string): any;
    addRow(sheet: string, value: any): void;
    setRow(sheet: string, rowId: string, value: any): void;
    deleteRow(sheet: string, rowId: string): void;
    getCell(sheet: string, rowId: string, col: string): string | number | undefined;
    setCell(sheet: string, rowId: string, col: string, value?: string | number): void;
    deleteSheet(name: string): void;
    stringify(): string;
}
