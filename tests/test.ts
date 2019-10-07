import test = require('tape');
import { Test } from 'tape';
import { StoreEntity, storeProperty, storePropertyObject } from '../src/helpers/decorator_store';
import { SetStore } from '../src/store/setstore';
import { Store } from '../src/store/store';

class GOStore extends SetStore {
	objects = new Map<Store, GameObject>();

	instantiate(key?: string) {
		var entity = new GameObject(key);
		this.objects.set(entity.store, entity);
		return entity.store;
	}

	getObject(key: string) {
		var store = this.get(key);
		return (store) ? this.objects.get(store) : undefined;
	}
}

class Vector {
	x = 0;
	y = 0;
	z = 0;

	constructor(x?: number, y?: number, z?: number) {
		this.x = x || 0;
		this.y = y || 0;
		this.z = z || 0;
	}
}

class GameObject extends StoreEntity {
	@storeProperty
	public name: string;

	@storeProperty
	public width: number;

	@storeProperty
	public height: number;

	@storePropertyObject
	public position: { x: number, y: number, z: number };

	@storePropertyObject
	public scale: Vector;

	@storePropertyObject
	public tags: string[];

	constructor(id?: string) {
		super(id);
		this.name = "kebab";
		this.width = 200;
		this.height = 50;

		this.position = { x: 0, y: 0, z: 0 };
		this.scale = new Vector(1, 1, 1);
		this.tags = [];
	}
}

test('[Kaaya.decorator]', (t: Test) => {
	var s1 = new GOStore();
	var store = s1.create();
	var go = s1.getObject(store.id);
	if (!go) return;

	go.name = "youhou";
	go.position.x = 7;
	go.position.y = 4;

	go.scale.y = 5;
	go.tags.push("1", "2");
	go.tags.push("3");
	console.log('go', go, go.position, go.scale, go.tags);

	var s2 = new GOStore();
	s2.setMutations(s1.getMutations());
	var go2 = s2.getObject(store.id);
	if (!go2) return;
	console.log('go', go2, go2.position, go2.scale, go.tags);

	t.end();
});
