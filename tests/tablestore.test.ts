/// <reference types="jest" />
import Kaaya from "../src"

test("API", () => {
	var store = Kaaya.createTableStore()

	store.createSheet("people")
	store.addRow("people", { id: "A", name: "john", age: 12, mail: "john@gmail.com" })
	store.addRow("people", { id: "B", name: "bob", age: 14, mail: "bob@gmail.com" })

	var row = store.getRowById("people", "A")
	expect(row.name).toBe("john")
	expect(row.age).toBe(12)

	store.setCell("people", "A", "age", 16)
	expect(row.age).toBe(16)

	store.createSheet("monster")
	store.addRow("monster", { id: "asbv", name: "johnMob", atk: 12, def: 2 })
	store.addRow("monster", { id: "sdfg", name: "bobMob", atk: 14, def: 8 })

	var rowBob = store.getRowById("monster", "sdfg")
	expect(rowBob.name).toBe("bobMob")

	var rowMonsters = store.getRows("monster").filter((x: any) => x.atk > 10)
	expect(rowMonsters.length).toBe(2)

	store.setRow("monster", "sdfg", { name: "tunaMob", atk: 8, def: 8 })

	var store2 = Kaaya.createTableStore()
	store2.sync(store.history)

	store2.deleteRow("people", "B")
	var row = store2.getRowById("people", "B")
	expect(row).toBe(undefined)

	store2.deleteSheet("people")
})

test("Yaml File", () => {
	const yamlData = `
# This is a comment too
people:
- id: A
  name: john
  age: 12
  mail: john@gmail.com
- id: B
  name: bob
  age: 14
  mail: bob@gmail.com

monster:
- name: johnMob
  atk: 12
  def: 2
- name: bobMob
  atk: 14
  def: 8
`
	// import from ini file
	const store = Kaaya.createTableStoreFromYAML(yamlData)
	const store2 = Kaaya.createTableStoreFromYAML(yamlData)
	store.observe(_mut => store2.sync(store.history))

	store.createSheet("youhou")
	store.addRow("youhou", { id: "tuna", name: "tuna", age: 1, mail: "tuna@fish.com" })
	store.addRow("youhou", { name: "salmon", age: 2, mail: "salmon@fish.com" })

	expect(store.getCell("youhou", "tuna", "age")).toBe(1)
	expect(store2.stringifyYAML()).toContain("youhou:")
	expect(store2.stringifyJSON()).toContain('"youhou":')
})
