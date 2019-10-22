/// <reference types="jest" />
import Kaaya from "../src"

test("Basic", () => {
	const store = Kaaya.createRawStore({ a: 1, b: 2 })
	let evt = 0
	store.observe((_mut: any) => evt++)

	store.data.b = 2 // ignored
	store.data.b = 3 // generate a `set` mutation
	store.data.c = 2 // generate a `add` mutation

	expect(evt).toBe(2) //check the right amount of event where emitted.
	expect(store.history.length).toBe(2) //check the history has the right amount of mutation.
	expect(store.serialize.b).toBe(3) //check the original data are updated
	expect(store.serialize.c).toBe(2)

	// Create a second store and sync data
	const store2 = Kaaya.createRawStore({ a: 3, b: 4 })
	let evt2 = 0
	store2.observe((_mut: any) => evt2++)

	expect(store2.history.length).toBe(0) //check history dont leak between store.

	store2.sync(store.history)
	store2.sync(store.history)

	expect(evt2).toBe(2) //check the right amount of event where emitted.
	expect(store2.serialize.b).toBe(3) //check the original data are updated
	expect(store2.serialize.c).toBe(2)
	expect(store.id).not.toBe(store2.id)
})

// test("Proxy", () => {
// 	const store = Kaaya.createRawStore({ a: 1, b: 2 })
// 	const proxy = store.instantiateProxy()
// 	const proxy2 = store.instantiateProxy()

// 	store.data.b = 3 // generate a `set` mutation

// 	expect(store.serialize.b).toBe(3) // check the original data are updated
// 	expect(proxy.b).toBe(3) // check the proxy data are updated too'
// 	expect(proxy2.b).toBe(3) // check the proxy data are updated too'
// })

test("Transaction ", () => {
	const store = Kaaya.createRawStore({ a: 1, b: 2 })

	store.data.b = 3

	store.transactionStart({ id: "changeStuff" })
	store.data.b = 4
	store.data.a = 2
	store.data.c = 5
	store.transactionEnd()

	expect(store.history.length).toBe(2)
	expect(store.data.b).toBe(4)
	expect(store.data.c).toBe(5)

	const store2 = Kaaya.createRawStore()
	store2.sync(store.history)

	expect(store2.history.length).toBe(2)
	expect(store2.data.b).toBe(4)
	expect(store2.data.c).toBe(5)
})

test("Undo Redo Set", () => {
	const store = Kaaya.createRawStore({ a: 1, b: 2 })

	store.data.b = 3 // generate a `set` mutation
	store.data.b = 4 // generate a `set` mutation

	const store2 = Kaaya.createRawStore({ a: 1, b: 2 })
	store2.sync(store.history)
	expect(store.history).toEqual(store2.history)

	expect(store.data.b).toBe(4)
	expect(store2.data.b).toBe(4)
	store.undo()
	expect(store.data.b).toBe(3) // check undo works
	store.undo()
	expect(store.data.b).toBe(2) // check undo works multiple time
	expect(store2.data.b).toBe(4)
	store2.sync(store.history)
	expect(store2.data.b).toBe(2) // check undo is sync
	store.redo()
	expect(store.data.b).toBe(3) // check redo works
	store.redo()
	expect(store.data.b).toBe(4) // check redo works multiple time
	store2.sync(store.history)
	expect(store2.data.b).toBe(4) // check redo is sync
})

test("Undo Redo Add", () => {
	const store = Kaaya.createRawStore({ a: 1, b: 2 })

	store.data.b = 3 // generate a `set` mutation

	store.transactionStart({ id: "1" })
	store.data.c = { a: 2, b: 3, c: 4 }
	store.transactionEnd()

	store.transactionStart({ id: "2" })
	store.data.b = 4 // generate a `set` mutation
	delete store.data.c
	store.transactionEnd()

	store.transactionStart({ id: "3" })
	store.data.b = 5
	store.transactionEnd()

	const store2 = Kaaya.createRawStore({ a: 1, b: 2 })
	store2.sync(store.history)
	expect(store.history).toEqual(store2.history) // check history

	expect(store.data.b).toBe(5) // check values before
	expect(store.data.c).toBe(undefined)
	expect(store2.data.c).toBe(undefined)

	// console.log(store.history)
	store.undo()
	expect(store.data.b).toBe(4) // revert transaction

	store.undo()
	expect(store.data.c.b).toBe(3) // revert delete
	expect(store.data.b).toBe(3)
	store2.sync(store.history)
	expect(store2.data.c.b).toBe(3) // revert delete sync

	store.undo()
	expect(store.data.c).toBe(undefined) // revert add
	store2.sync(store.history)
	expect(store2.data.c).toBe(undefined) // revert add sync

	store.redo()
	expect(store.data.c.b).toBe(3) // redo add
	store2.sync(store.history)
	expect(store2.data.c.b).toBe(3) // redo add sync

	store.redo()
	store.redo()

	store2.sync(store.history)
	expect(store.data.b).toBe(5) // check final values after
	expect(store.data.c).toBe(undefined)
	// expect(store2.data.c).toBe(undefined);
})
