import test = require('tape');
import { Test } from 'tape';
import { GOStore } from '../src/object';

test('[Kaaya.decorator]', (t: Test) => {
	var s1 = new GOStore();
	var store = s1.create();
	var go = s1.getObject(store.id);
	if (!go) return;

	go.name = "youhou";
	go.transform.position.x = 7;
	go.transform.position.y = 4;

	go.transform.scale.y = 5;
	go.tags.push("1", "2");
	go.tags.push("3");
	console.log('go', go.transform, go.tags);

	console.log(JSON.stringify(s1.getMutations(), null, 2));

	var s2 = new GOStore();
	s2.setMutations(s1.getMutations());
	var go2 = s2.getObject(store.id);
	if (!go2) return;
	console.log('go', go2);

	t.end();
});
