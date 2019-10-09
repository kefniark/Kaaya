// import { StoreEntity, storeProperty, storeNestedObject } from "./helpers/decorator_store";
// import { SetStore } from "./store/setstore";
// import { Store } from "./store/store";
// import { mutationFactory } from './store/mutations';
// import { IStoreMutation, IStoreData, IStore } from "./core/interfaces/store";
// import nanoid = require("nanoid");
// import { now } from "./helpers/time";
// import { ProxyStore } from "./store/proxystore";

// const entityFactory: {[id: string]: (data: any, store: IStore) => Entities } = {
// 	'Transform': (data: any, store: IStore) => new Transform(data, store),
// 	'RectTransform': (data: any, store: IStore) => new RectTransform(data, store),
// 	'Sprite': (data: any, store: IStore) => new Sprite(data, store),
// };

// export interface IEntityCreateMutationData extends IStoreData {
// 	key: string;
// }

// export class EntityCreateMutation implements IStoreMutation {
// 	public readonly data: IEntityCreateMutationData;
// 	get store() { return this.data.store; }
// 	set store(store: string) { this.data.store = store; }
// 	get id() { return this.data.id; }
// 	get time(): number { return this.data.time; }

// 	get key() { return this.data.key; }

// 	constructor(data?: IEntityCreateMutationData | {store: string, key: string}) {
// 		if (data && 'id' in data) {
// 			this.data = data;
// 		} else {
// 			this.data = {
// 				id: nanoid(),
// 				class: 'EntityCreateMutation',
// 				store: data ? data.store : '',
// 				key: data ? data.key : '',
// 				time: now()
// 			} as IEntityCreateMutationData;
// 		}
// 	}

// 	serialize(): IStoreData {
// 		return this.data;
// 	}

// 	apply(go: GameObject) {
// 		console.log('apply', go);
// 		// store the mutation
// 		go._store._mutations.add(this);

// 		console.log('Create Entity', this, go);
// 		var proxy = new ProxyStore(go._store, this.key);
// 		var constr = entityFactory[this.key];
// 		if (!constr) throw new Error('cannot find factory delete');

// 		var entity = constr(go, proxy);
// 		go.entities[this.key] = entity;

// 		// new ProxyStore(this.st)
// 		// var s = store.instantiate(`${this.store}_${this.key}`);
// 		// s.on('set', (_key: string, mut: any) => {
// 		// 	mut.store = s.get('_storeId');
// 		// 	store._mutations.add(mut);
// 		// });
// 		// s.on('deprecated', (_key: string, mut: any) => {
// 		// 	mut.store = s.get('_storeId');
// 		// 	store._mutations.delete(mut);
// 		// });

// 		// s.start();

// 		// return s;
// 	}
// }

// export class GOStore extends SetStore {
// 	objects = new WeakMap<Store, GameObject>();
// 	entities = new WeakMap<Store, Entities>();

// 	constructor() {
// 		super();
// 		mutationFactory.set('EntityCreateMutation', (obj: any) => new EntityCreateMutation(obj));
// 	}

// 	instantiate(key?: string) {
// 		var entity = new GameObject(this, key);
// 		this.objects.set(entity._store, entity);
// 		return entity._store;
// 	}

// 	getObject(key: string) {
// 		var store = this.get(key);
// 		return (store) ? this.objects.get(store) : undefined;
// 	}
// }

// export class Entities {
// 	public _gameobject: GameObject;
// 	public _store: IStore;

// 	constructor(go: GameObject, store: IStore) {
// 		this._gameobject = go;
// 		this._store = store;
// 	}
// }

// export class Transform extends Entities {
// 	@storeProperty
// 	position: Vector;

// 	@storeProperty
// 	rotation: Vector;

// 	@storeProperty
// 	scale: Vector;

// 	constructor(go: GameObject, store: IStore) {
// 		super(go, store)
// 		this.position = new Vector();
// 		this.rotation = new Vector();
// 		this.scale = new Vector();
// 	}
// }

// export class RectTransform extends Entities {
// 	@storeProperty
// 	position: Vector;

// 	@storeProperty
// 	rotation: Vector;

// 	@storeProperty
// 	scale: Vector;

// 	@storeProperty
// 	anchor: Vector;

// 	@storeProperty
// 	pivot: Vector;

// 	@storeProperty
// 	dimension: Vector;

// 	constructor(go: GameObject, store: IStore) {
// 		super(go, store);
// 		this.position = new Vector();
// 		this.rotation = new Vector();
// 		this.scale = new Vector(1, 1, 1);
// 		this.anchor = new Vector(0.5, 0.5);
// 		this.pivot = new Vector(0.5, 0.5);
// 		this.dimension = new Vector(0.5, 0.5);
// 	}
// }

// export class Sprite extends Entities {
// 	@storeProperty
// 	src: string;

// 	@storeProperty
// 	flipH: boolean;

// 	@storeProperty
// 	flipV: boolean;

// 	constructor(go: GameObject, store: IStore) {
// 		super(go, store);
// 		this.src = "";
// 		this.flipH = false;
// 		this.flipV = false;
// 	}
// }

// export class Vector {
// 	x = 0;
// 	y = 0;
// 	z = 0;

// 	constructor(x?: number, y?: number, z?: number) {
// 		this.x = x || 0;
// 		this.y = y || 0;
// 		this.z = z || 0;
// 	}
// }

// export class GameObject extends StoreEntity {

// 	readonly _globalStore: GOStore;
// 	get transform(): Transform {
// 		return this.entities['Transform'] as Transform;
// 	}

// 	@storeProperty
// 	public name: string;

// 	@storeNestedObject
// 	public tags: string[] = [];

// 	// @storeNestedObject
// 	public entities: {[key: string]: Entities} = {};

// 	constructor(store: GOStore, id?: string) {
// 		super(id);
// 		this._globalStore = store;
// 		this.name = "kebab";

// 		// this.entities['transform'] = new Transform(this);
// 		// this.transform = new Transform();
// 		// this.transform.position = { x: 0, y: 0, z: 0 };
// 		// this.transform.scale = new Vector(1, 1, 1);
// 		// this.rect = new RectTransform();
// 		// this.sprite = new Sprite();
// 	}

// 	instantiateEntity(name: string) {
// 		var constr: (data: any) => EntityCreateMutation = mutationFactory.get('EntityCreateMutation') as any;
// 		if (!constr) throw new Error('cannot find entity create');

// 		var mutation = constr({store: this._store.id, key: name});
// 		return mutation.apply(this);
// 	}
// }
