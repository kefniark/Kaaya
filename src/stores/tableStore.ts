import { BaseStore } from "./baseStore"
import { stringify as stringifyYaml } from "yaml"
import nanoid = require("nanoid")
import { clone } from "../helpers/check"

export interface ITableSheet {
	id: string
	rows: string[]
	values: any
}

export class TableStore extends BaseStore {
	constructor(entries: any = {}) {
		const data = clone(entries)
		for (const sheetId in entries) {
			data[sheetId] = {
				id: "id",
				rows: [],
				values: {}
			}

			for (const row of entries[sheetId]) {
				const id = data[sheetId].id
				const uid = row[id] ? row[id] : nanoid(4)
				row[id] = uid
				data[sheetId].rows.push(uid)
				data[sheetId].values[uid] = row
			}
		}
		super(data)
	}

	private getValues() {
		const data = clone(this.serialize)
		for (const sheetId in data) {
			data[sheetId] = Object.values(data[sheetId].values)
		}
		return data
	}

	getSheet(name: string): ITableSheet {
		if (!this.data || !this.data[name]) throw new Error("sheet doesnt exist " + name)
		return this.data[name]
	}

	createSheet(name: string, id: string = "id"): void {
		if (!name) throw new Error("wrong parameter")
		if (this.data[name]) throw new Error("sheet already exist " + name)
		this.data[name] = {
			id,
			rows: [],
			values: {}
		} as ITableSheet
	}

	getRows(sheet: string) {
		const data = this.getSheet(sheet)
		return Object.values(data.values)
	}

	getRowById(sheet: string, id: string) {
		if (!sheet || !id) throw new Error("wrong parameter")
		const data = this.getSheet(sheet)
		return data.values[id]
	}

	addRow(sheet: string, value: any) {
		if (!sheet || !value) throw new Error("wrong parameter")
		const data = this.getSheet(sheet)
		const id = value[data.id] ? value[data.id] : nanoid(4)
		value[data.id] = id
		data.rows.push(id)
		data.values[id] = value
	}

	setRow(sheet: string, rowId: string, value: any) {
		if (!sheet || !rowId || !value) throw new Error("wrong parameter")
		const data = this.getSheet(sheet)
		if (!(data.id in value)) value[data.id] = rowId
		data.values[rowId] = value
	}

	deleteRow(sheet: string, rowId: string) {
		if (!sheet || !rowId) throw new Error("wrong parameter")
		const data = this.getSheet(sheet)
		data.rows = data.rows.filter(e => e !== rowId)
		delete data.values[rowId]
	}

	getCell(sheet: string, rowId: string, col: string): string | number | undefined {
		if (!sheet || !rowId || !col) throw new Error("wrong parameter")
		const data = this.getSheet(sheet)
		return data.values[rowId][col]
	}

	setCell(sheet: string, rowId: string, col: string, value: string | number = ""): void {
		if (!sheet || !rowId || !col) throw new Error("wrong parameter")
		const data = this.getSheet(sheet)
		data.values[rowId][col] = value
	}

	deleteSheet(name: string): void {
		if (!name) throw new Error("wrong parameter")
		delete this.data[name]
	}

	stringifyJSON(): string {
		return JSON.stringify(this.getValues(), null, 2)
	}

	stringifyYAML(): string {
		return stringifyYaml(this.getValues())
	}
}
