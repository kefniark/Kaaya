## Kaaya

Kaaya is a delightful javascript library which target on syncing data between Applications.

-   Listen for object and track change (mutation)
-   Keep an history of mutation and allow to replay them on other object
-   Allow to undo/redo modification
-   Keep mutation as plain JS object (serializable)

## Install

```ts
npm install --save kaaya
```

## Usage

```ts
import { KeyStore } from "kaaya"

// create a new store with somce custom data
var store = new KeyStore({ a: 1, b: 2 })

// apply few change
store.data.a = 5
store.data.a = 10
story.history // Contains 2x mutation for property "a" (1 -> 5, 5 -> 10)

// let's play with the history
store.undo()
store.data.a // <= the value was reverted to 5

// create another store and sync with the history of the first one
var otherStore = new KeyStore({ a: 0 })
otherStore.sync(store.history)
otherStore.data.a // <= this value is now 5
```
