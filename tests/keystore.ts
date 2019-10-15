import test = require('tape');
import { Test } from 'tape';
import { KeyStore } from '../src/stores/keyStore';

test('[Kaaya.Keystore.Basic]', (t: Test) => {
	var store = new KeyStore({ a: 1, b: 2 });
	var evt = 0;
	store.observe((_mut: any) => evt++);

	store.data.b = 2; // ignored
	store.data.b = 3; // generate a `set` mutation
	store.data.c = 2; // generate a `add` mutation

	t.equal(evt, 2, 'check the right amount of event where emitted.');
	t.equal(store.history.length, 2, 'check the history has the right amount of mutation.');
	t.equal(store.serialize.b, 3, 'check the original data are updated');
	t.equal(store.serialize.c, 2);

	// Create a second store and sync data
	var store2 = new KeyStore({ a: 3, b: 4 });
	var evt2 = 0;
	store2.observe((_mut: any) => evt2++);

	t.equal(store2.history.length, 0, 'check history dont leak between store.');

	store2.sync(store.history);
	store2.sync(store.history);

	t.equal(evt2, 2, 'check the right amount of event where emitted.');
	t.equal(store2.serialize.b, 3, 'check the original data are updated');
	t.equal(store2.serialize.c, 2);
	t.end();
});

test('[Kaaya.Keystore.API]', (t: Test) => {
	var store = new KeyStore();
	store.createTable('user');

	t.equal(store.has('user', 'name'), false, 'check property doesnt exist');
	t.equal(store.get('user', 'name', 'bob'), 'bob', 'check we get the default');
	store.set('user', 'name', 'john');
	t.equal(store.has('user', 'name'), true, 'check property exist');
	t.equal(store.get('user', 'name', 'bob'), 'john', 'check we get the value');

	t.equal(store.data.user.name, 'john', 'check data are ok');
	t.equal(store.serialize.user.name, 'john', 'check origin data are ok');

	var store2 = new KeyStore();
	var proxy = store2.instantiateProxy();

	// sync data between store 1 & 2
	store2.sync(store.history);

	t.equal(store2.data.user.name, 'john', 'check data are ok');
	t.equal(store2.serialize.user.name, 'john', 'check origin data are ok');
	t.equal(proxy.user.name, 'john', 'check proxy data are ok');

	// delete user data on store 2
	store2.deleteTable('user');

	t.equal(store2.has('user', 'name'), false, 'check property doesnt exist anymore');
	t.equal(store.has('user', 'name'), true, 'check property still exist');

	// sync data between store
	store.sync(store2.history);
	store2.sync(store.history);

	t.equal(store2.has('user', 'name'), false);
	t.equal(store.has('user', 'name'), false, 'check property was also deleted on store1');

	t.end();
});

test('[Kaaya.Keystore.Proxy]', (t: Test) => {
	var store = new KeyStore({ a: 1, b: 2 });
	var proxy = store.instantiateProxy();
	var proxy2 = store.instantiateProxy();

	store.data.b = 3; // generate a `set` mutation

	t.equal(store.serialize.b, 3, 'check the original data are updated');
	t.equal(proxy.b, 3, 'check the proxy data are updated too');
	t.equal(proxy2.b, 3, 'check the proxy data are updated too');
	t.end();
});
