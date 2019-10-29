/// <reference types="jest" />
import Kaaya from "../src"

test("API", () => {
	const store = Kaaya.createTableStore()

	store.createSheet("people")
	store.addRow("people", { id: "A", name: "john", age: 12, mail: "john@gmail.com" })
	store.addRow("people", { id: "B", name: "bob", age: 14, mail: "bob@gmail.com" })

	const row = store.getRowById("people", "A")
	expect(row.name).toBe("john")
	expect(row.age).toBe(12)

	store.setCell("people", "A", "age", 16)
	expect(row.age).toBe(16)

	store.createSheet("monster")
	store.addRow("monster", { id: "asbv", name: "johnMob", atk: 12, def: 2 })
	store.addRow("monster", { id: "sdfg", name: "bobMob", atk: 14, def: 8 })

	const rowBob = store.getRowById("monster", "sdfg")
	expect(rowBob.name).toBe("bobMob")

	const rowMonsters = store.getRows("monster").filter((x: any) => x.atk > 10)
	expect(rowMonsters.length).toBe(2)

	store.setRow("monster", "sdfg", { name: "tunaMob", atk: 8, def: 8 })

	const store2 = Kaaya.createTableStore()
	store2.sync(store.history)

	store2.deleteRow("people", "B")
	const row2 = store2.getRowById("people", "B")
	expect(row2).toBe(undefined)

	store2.deleteSheet("people")
})

test("Test Errors", () => {
	const store = Kaaya.createTableStore()
	store.createSheet("people")

	// multiple creation
	expect(() => store.createSheet("people")).toThrow()

	// wrong parameter
	expect(() => store.createSheet(undefined as any)).toThrow()
	expect(() => store.getRowById(undefined as any, "1")).toThrow()
	expect(() => store.getRowById("people", undefined as any)).toThrow()
	expect(() => store.setRow(undefined as any, "nano", "val")).toThrow()
	expect(() => store.getCell(undefined as any, "nano", "val")).toThrow()
	expect(() => store.setCell(undefined as any, "nano", "val", "val")).toThrow()
	expect(() => store.deleteRow(undefined as any, "nano")).toThrow()
	expect(() => store.deleteSheet(undefined as any)).toThrow()

	// sheet doesnt exist
	expect(() => store.getSheet("nano")).toThrow()
	expect(() => store.addRow("people2", { id: "A", name: "john", age: 12, mail: "john@gmail.com" })).toThrow()
})

test("JSON File", () => {
	const jsonData = `
{
	"people": [
		{
			"id": "A",
			"name": "john",
			"age": 12
		},
		{
			"id": "B",
			"name": "bob",
			"age": 14
		}
	]
}
	`
	const store = Kaaya.createTableStoreFromJSON(jsonData)
	store.createSheet("youhou")
	store.addRow("youhou", { id: "tuna", name: "tuna", age: 1, mail: "tuna@fish.com" })
	store.addRow("youhou", { name: "salmon", age: 2, mail: "salmon@fish.com" })

	expect(store.getCell("youhou", "tuna", "age")).toBe(1)
	expect(store.stringifyJSON()).toContain('"youhou":')
})

// test("Yaml File", () => {
// 	const yamlData = `
// # This is a comment too
// people:
// - id: A
//   name: john
//   age: 12
//   mail: john@gmail.com
// - id: B
//   name: bob
//   age: 14
//   mail: bob@gmail.com

// monster:
// - name: johnMob
//   atk: 12
//   def: 2
// - name: bobMob
//   atk: 14
//   def: 8
// `
// 	// import from ini file
// 	const store = Kaaya.createTableStoreFromYAML(yamlData)
// 	const store2 = Kaaya.createTableStoreFromYAML(yamlData)
// 	store.observe(_mut => store2.sync(store.history))

// 	store.createSheet("youhou")
// 	store.addRow("youhou", { id: "tuna", name: "tuna", age: 1, mail: "tuna@fish.com" })
// 	store.addRow("youhou", { name: "salmon", age: 2, mail: "salmon@fish.com" })

// 	expect(store.getCell("youhou", "tuna", "age")).toBe(1)
// 	expect(store2.stringifyYAML()).toContain("youhou:")
// 	expect(store2.stringifyJSON()).toContain('"youhou":')
// })
