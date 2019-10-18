import { BaseStore } from "./baseStore"

export class KeyStore extends BaseStore {
	createTable(name: string): void {
		if (!name) throw new Error("wrong parameter")
		if (this.data[name]) throw new Error("table already exist " + name)
		this.data[name] = {}
	}

	has(table: string, key: string): boolean {
		if (!table || !key) throw new Error("wrong parameter")
		if (!this.data || !this.data[table]) return false
		return key in this.data[table]
	}

	get(table: string, key: string, def: string | number = ""): any {
		if (!table || !key) throw new Error("wrong parameter")
		if (!this.has(table, key)) return def
		return this.data[table][key]
	}

	set(table: string, key: string, value: string | number = ""): void {
		if (!table || !key) throw new Error("wrong parameter")
		if (!this.data || !this.data[table]) throw new Error("table dont exist " + table)
		this.data[table][key] = value
	}

	delete(table: string, key: string): void {
		if (!table || !key) throw new Error("wrong parameter")
		if (!this.data || !this.data[table]) throw new Error("table dont exist " + table)
		delete this.data[table][key]
	}

	deleteTable(name: string): void {
		if (!name) throw new Error("wrong parameter")
		delete this.data[name]
	}
}
