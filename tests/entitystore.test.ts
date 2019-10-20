/// <reference types="jest" />
import Kaaya from "../src"
import { Entity } from "../src/customStore/entityComponent"

test("API", () => {
	var store1 = Kaaya.createEntityComponentStore()
	store1.create("Entity", { id: "root", name: "Root" })
	store1.create("Entity", { id: "game", name: "Game", parentId: "root" })
	store1.create("Entity", { id: "canvas", name: "Canvas", parentId: "root" })
	store1.create("Entity", { id: "game_object", parentId: "game", name: "Game Object" })
	store1.create("Transform", { id: "game_object_transform", parentId: "game_object" })
	store1.data.meta = {
		selected: "",
		root: "root"
	}
	store1.create("Entity", { id: "game_object2", parentId: "game_object", name: "Game Object 2" })
	store1.create("Transform", { id: "game_object_transform2", parentId: "game_object2" })

	var entity = store1.getEntity<Entity>("game_object")
	entity.enable = false
	entity.transform.position.x = 5

	var subEntity = store1.getEntity<Entity>("game_object2")
	var component = store1.getEntity<Entity>("game_object_transform2")

	// check component
	expect(component.id).toBe("game_object_transform2")
	expect(component.name).toBe("Transform")
	expect(component.gameobject).toBe(subEntity)
	expect(component.transform).toBe(component)
	//transform
	expect(component.transform.position.x).toBe(0)
	expect(component.transform.rotation.x).toBe(0)
	expect(component.transform.scale.x).toBe(1)

	// check entity
	expect(subEntity.id).toBe("game_object2")
	expect(subEntity.name).toBe("Game Object 2")
	subEntity.name = "Game Object"
	subEntity.enable = false
	subEntity.enable = !subEntity.enable
	expect(subEntity.enable).toBeTruthy()
	expect(subEntity.gameobject).toBe(subEntity)
	expect(subEntity.parent).toBe(entity)
	expect(subEntity.transform).toBe(component)
	expect(subEntity.components.length).toBe(1)
	expect(entity.childs.length).toBe(1)

	// delete entity
	store1.delete("game_object2")

	var store2 = Kaaya.createEntityComponentStore()

	var store1Proxy = store1.instantiateProxy()
	var store2Proxy = store2.instantiateProxy()

	// console.log(store1.history)
	store2.sync(store1.history)

	expect(store1.data.root.childIds.length).toBe(2)
	expect(store1.data.root.childIds.length).toBe(2)
	//console.log(`[Proxy]`, store1Proxy)
	expect(store1Proxy.root.childIds.length).toBe(2)
	//console.log(`[Proxy]`, store2Proxy)
	expect(store2Proxy.root.childIds.length).toBe(2)
})
