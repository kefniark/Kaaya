# Kaaya

Kaaya is a delightful javascript library which target on state management and data synchronization between Applications.

-   **Samples**: [Here](https://kefniark.github.io/Kaaya/samples)

[![Build Status](https://github.com/kefniark/Kaaya/workflows/Build%20CI/badge.svg)](https://github.com/kefniark/Kaaya/actions)
[![Total alerts](https://img.shields.io/lgtm/alerts/g/kefniark/Kaaya.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/kefniark/Kaaya/alerts/)
[![NPM Version](https://img.shields.io/npm/v/kaaya.svg)](https://npmjs.org/package/kaaya)
[![NPM Download](https://img.shields.io/npm/dm/kaaya.svg)](https://npmjs.org/package/kaaya)
[![Coverage Status](https://coveralls.io/repos/github/kefniark/Kaaya/badge.svg?branch=master)](https://coveralls.io/github/kefniark/Kaaya?branch=master)
[![License](https://img.shields.io/npm/l/kaaya.svg)](https://npmjs.org/package/kaaya)

> Still under development, do not use except for testing

-   Support different data structure (and their usual format):
    -   **Key Value**: Often used to store configuration (`.ini`, `.yaml`, `.json`)
    -   **Table**: Data grid like excel (`.csv`, `.yaml`, `.json`)
    -   **Entities**: List of instantiated object
    -   **Files**: File/Folder structure (like a file explorer)
    -   or plain JS object to store your own data
-   Watch for data modification (mutation)
-   Keep an history of mutation and allow to replay them on other object
-   Allow to undo/redo modification
-   Keep mutation as plain JS object (serializable)
-   Allow to regroup mutation as transaction (to give context about changes)
-   Allow to use async hook (for animation or UI interaction)

---

## Usage

### Basic Store Creation

```ts
import kaaya from "kaaya"

// create a new store with custom data
const store = kaaya.createKeyStore({ a: 1, b: 2 })
store.data.a = 5
store.data.a = 10
// so far everything looks normal: { a: 10, b: 2 }
```

### History Management

```ts
// let's play with the history
store.undo()
store.data // { a: 5, b: 2 }

store.undo()
store.data // { a: 1, b: 2 }

store.redo()
store.data // { a: 5, b: 2 }
```

### Synchronization with other store

-   only the history of mutation is send (modification)
-   can be done over network, file, events, ...

```ts
// create other store and sync them with our first one data
const client1 = kaaya.createKeyStore({ a: 0, b: 6 })
client1.sync(store.history)
client1.data // <= { a: 5, b: 6 }

const client2 = kaaya.createKeyStore({ a: 0, b: 8 })
client2.sync(store.history)
client2.data // <= { a: 5, b: 8 }

// and now let's make a change and progate it
store.data.a += 10
client1.sync(store.history)

client1.data // { a: 15, b: 6 } properly sync :)
client2.data // { a: 5, b: 8 } not sync yet
```

And more ....

---

## Development

### Getting Started

If you want to take a look at the code or help, it's quite easy to get started

```sh
npm install
npm run dev
```

This will start a server on http://localhost:8080/ where you can test few samples with the current version

### Tests

When you are done with your change, just make sure to run tests `npm run test`

### Build

To make a build (generated in `build/`)

```sh
npm run build
```

---

## Known Limitation

-   Some array function like `.push` or `.slice` cause the whole object to be mutated and not just the value being changed
-   Doesnt handle advance object like `Set` or `Map`
