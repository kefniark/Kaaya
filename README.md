    Still under development, dont use except for testing.

# Kaaya

[![Build Status](https://travis-ci.org/kefniark/Kaaya.svg?branch=master)](https://travis-ci.org/kefniark/Kaaya)
[![Coverage Status](https://coveralls.io/repos/github/kefniark/Kaaya/badge.svg?branch=master)](https://coveralls.io/github/kefniark/Kaaya?branch=master)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/c0fc8bf9f62a4067a2d1454c1eba454e)](https://www.codacy.com/manual/kefniark/Kaaya?utm_source=github.com&utm_medium=referral&utm_content=kefniark/Kaaya&utm_campaign=Badge_Grade)

Kaaya is a delightful javascript library which target on syncing data between Applications.

-   Support different data structure (and their usual format):
    -   **Key Value**: Often used to store configuration (`.ini`, `.yaml`, `.json`)
    -   **Table**: Data grid like excel (`.csv`, `.xls`, `.yaml`, `.json`)
    -   or plain JS object to store your own data structure
-   Listen for data and track change (mutation)
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
