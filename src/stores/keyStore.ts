import { BaseStore } from "./baseStore"
import { stringify as stringifyIni } from "js-ini"
import { stringify as stringifyYaml } from "yaml"

export class KeyStore extends BaseStore {
	createSection(name: string): void {
		if (!name) throw new Error("wrong parameter")
		if (this.data[name]) throw new Error("section already exist " + name)
		this.data[name] = {}
	}

	has(section: string, key: string): boolean {
		if (!section || !key) throw new Error("wrong parameter")
		if (!this.data || !this.data[section]) return false
		return key in this.data[section]
	}

	get(section: string, key: string, def: string | number = ""): any {
		if (!section || !key) throw new Error("wrong parameter")
		if (!this.has(section, key)) return def
		return this.data[section][key]
	}

	set(section: string, key: string, value: string | number = ""): void {
		if (!section || !key) throw new Error("wrong parameter")
		if (!this.data || !this.data[section]) throw new Error("section dont exist " + section)
		this.data[section][key] = value
	}

	delete(section: string, key: string): void {
		if (!section || !key) throw new Error("wrong parameter")
		if (!this.data || !this.data[section]) throw new Error("section dont exist " + section)
		delete this.data[section][key]
	}

	deleteSection(name: string): void {
		if (!name) throw new Error("wrong parameter")
		delete this.data[name]
	}

	stringifyJSON(): string {
		return JSON.stringify(this.data, null, 2)
	}

	stringifyINI(): string {
		return stringifyIni(this.data)
	}

	stringifyYAML(): string {
		return stringifyYaml(this.data)
	}
}
