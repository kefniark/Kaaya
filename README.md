    Still under development, dont use except for testing.

# Kaaya

Kaaya is a delightful javascript library which target on syncing data between Applications.

-   Listen for object and track change (mutation)
-   Keep an history of mutation and allow to replay them on other object
-   Allow to undo/redo modification
-   Keep mutation as plain JS object (serializable)

## Usage

```ts
import { KeyStore } from "kaaya"

// create a new store with somce custom data
var store = new KeyStore({ a: 1, b: 2 })
store.data.a = 5
store.data.a = 10

// so far everything looks normal: { a: 10, b: 2 }

// let's play with the history
store.undo()
store.data // { a: 5, b: 2 }

store.undo()
store.data // { a: 1, b: 2 }

store.redo()
store.data // { a: 5, b: 2 }

// create other store and sync them with our first one data
var client1 = new KeyStore({ a: 0, b: 6 })
client1.sync(store.history)
client1.data // <= { a: 5, b: 6 }

var client2 = new KeyStore({ a: 0, b: 8 })
client2.sync(store.history)
client2.data // <= { a: 5, b: 8 }

// and now let's make a change and progate it
store.data.a += 10
client1.sync(store.history)

client1.data // { a: 15, b: 6 } properly sync :)
client2.data // { a: 5, b: 8 } not yet sync
```