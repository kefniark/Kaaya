import { BaseStore } from "./baseStore";
export declare class KeyStore extends BaseStore {
    createSection(name: string): void;
    has(section: string, key: string): boolean;
    get(section: string, key: string, def?: string | number): any;
    set(section: string, key: string, value?: string | number): void;
    delete(section: string, key: string): void;
    deleteSection(name: string): void;
    stringify(): string;
}
