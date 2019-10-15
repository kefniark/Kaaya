import nanoid = require("nanoid");
import { now } from "../helpers/time";
import { pathWalk } from "../helpers/check";
import {SyncEvent} from 'ts-events';

export class DataStore {
	public evtCreate: SyncEvent<any>;
	public evtApply: SyncEvent<any>;

	public id: string;
	private mutations: {[id: string]: (obj: any, mut: any) => void} = {};
	private history: any[];
	private historyIds: Set<string>;

	constructor() {
		this.id = nanoid();
		this.evtCreate = new SyncEvent();
		this.evtApply = new SyncEvent();
		this.history = [];
		this.historyIds = new Set();

		this.mutations.add = (obj: any, mut: any) => {
			var {root, property} = pathWalk(obj, mut.path);
			if (!root[property] || root[property] !== mut.data.value) {
				root[property] = JSON.parse(JSON.stringify(mut.data.value));
			}
			this.history.push(mut);
		};

		this.mutations.set = (obj: any, mut: any) => {
			var {root, property} = pathWalk(obj, mut.path);
			if (root[property] !== mut.data.value) {
				root[property] = JSON.parse(JSON.stringify(mut.data.value));
			}
			this.history.push(mut);
		};

		this.mutations.delete = (obj: any, mut: any) => {
			var {root, property} = pathWalk(obj, mut.path);
			if (root[property]) {
				delete root[property];
			}
			this.history.push(mut);
		};
	}

	createMutation (name: string, path: string, data: any) {
		var mut = { id: nanoid(), time: now(), name, path, data };
		this.evtCreate.post(mut);
	}

	applyMutation (obj: any[], mut: any) {
		if (!this.mutations[mut.name]) {
			throw new Error(`Unknown mutation ${mut.name}`)
		}
		if (this.historyIds.has(mut.id)) {
			// console.warn('skip mutation (already applied)', mut.id);
			return;
		}
		for (var o of obj) {
			this.mutations[mut.name](o, mut);
		}
		this.historyIds.add(mut.id);
		this.evtApply.post(mut);
	}

	sync (obj: any[], history: any[]) {
		for (var mut of history) {
			this.applyMutation(obj, mut);
		}
	}

	getHistory() {
		return this.history;
	}
}
