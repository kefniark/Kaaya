/// <reference types="jest" />
import Kaaya from "../src"

test("API", () => {
	const store = Kaaya.createKeyStore()
	store.createTable("user")

	expect(store.has("user", "name")).toBe(false) // check property doesnt exist
	expect(store.get("user", "name", "bob")).toBe("bob") // check we get the default
	store.set("user", "name", "john")
	expect(store.has("user", "name")).toBe(true) // check property exist
	expect(store.get("user", "name", "bob")).toBe("john") // check we get the value

	expect(store.data.user.name).toBe("john") // check data are ok
	expect(store.serialize.user.name).toBe("john") // check origin data are ok

	const store2 = Kaaya.createKeyStore()
	const proxy = store2.instantiateProxy()

	// sync data between store 1 & 2
	store2.sync(store.history)

	expect(store2.data.user.name).toBe("john") // check data are ok
	expect(store2.serialize.user.name).toBe("john") // check origin data are ok
	expect(proxy.user.name).toBe("john") // check proxy data are ok

	// delete user data on store 2
	store2.delete("user", "name")
	store2.deleteTable("user")

	expect(store2.has("user", "name")).toBe(false) // check property doesnt exist anymore
	expect(store.has("user", "name")).toBe(true) // check property still exist

	// sync data between store
	store.sync(store2.history)
	store2.sync(store.history)

	expect(store2.has("user", "name")).toBe(false)
	expect(store.has("user", "name")).toBe(false) // check property was also deleted on store1
})

test("Kaaya Keystore JSON File", () => {
	const jsonData = `{
	"SectionOne": {
		"key": "value",
		"integer": 1234,
		"real": 3.14,
		"string1": "宮本武蔵",
		"string2": "Case 2",
		"multivalue": [
			"first",
			"second"
		]
	},
	"SectionTwo": {
		"key": "new value",
		"integer": 1234
	}
}
`
	// import from ini file
	const iniStore = Kaaya.createKeyStoreFromJSON(jsonData)

	// check the contents
	expect(iniStore.data.SectionOne.key).toBe("value")
	expect(iniStore.data.SectionOne.string1).toBe("宮本武蔵")
	iniStore.data.SectionOne.string1 = "東京"
	iniStore.data.SectionThree = { string: "value" }
	expect(iniStore.data.SectionTwo.integer).toBe(1234)

	// export file to a new ini file
	const result = iniStore.stringifyJSON()
	expect(result).toContain("東京") // check value where properly changed
	expect(result).toContain('"SectionThree":') // check new section are there too
})

test("Kaaya Keystore Yaml File", () => {
	const yamlData = `
# This is a comment too
SectionOne:
  key: value
  integer: 1234
  real: 3.14
  string1: 宮本武蔵
  string2: Case 2
  multivalue:
  - first # in-line comments
  - second # are supported as well

# Section: SectionTwo
SectionTwo:
  key: new value
  integer: 1234
`
	// import from ini file
	const iniStore = Kaaya.createKeyStoreFromYAML(yamlData)

	// check the contents
	expect(iniStore.data.SectionOne.key).toBe("value")
	expect(iniStore.data.SectionOne.string1).toBe("宮本武蔵")
	iniStore.data.SectionOne.string1 = "東京"
	iniStore.data.SectionThree = { string: "value" }
	expect(iniStore.data.SectionTwo.integer).toBe(1234)

	// export file to a new ini file
	const result = iniStore.stringifyYAML()
	expect(result).toContain("東京") // check value where properly changed
	expect(result).toContain("SectionThree:") // check new section are there too
})

test("Kaaya Keystore Ini File", () => {
	const iniData = `
; This is a comment too

[SectionOne]
key = value
integer = 1234
real = 3.14
string1 = 宮本武蔵
string2 = Case 2
multivalue[] = first ; in-line comments
multivalue[] = second  ; are supported as well

; Section: SectionTwo
[SectionTwo]

key = new value
integer = 1234
`
	// import from ini file
	const iniStore = Kaaya.createKeyStoreFromINI(iniData)

	// check the contents
	expect(iniStore.data.SectionOne.key).toBe("value")
	expect(iniStore.data.SectionOne.string1).toBe("宮本武蔵")
	iniStore.data.SectionOne.string1 = "東京"
	iniStore.data.SectionThree = { string: "value" }
	expect(iniStore.data.SectionTwo.integer).toBe(1234)

	// export file to a new ini file
	const result = iniStore.stringifyINI()
	expect(result).toContain("東京") // check value where properly changed
	expect(result).toContain("[SectionThree]") // check new section are there too
})
