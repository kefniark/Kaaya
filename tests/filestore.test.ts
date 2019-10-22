/// <reference types="jest" />
import Kaaya from "../src"
import { EntityFolder } from "../src/customStore/fileFolder/entityFolder"
import { EntityFile } from "../src/customStore/fileFolder/entityFile"

test("API", () => {
	const store = Kaaya.createFileFolderStore()

	store.create("Folder", { id: "user", label: "User" })
	store.create("Folder", { id: "docs", label: "Documents", parentId: "user" })
	store.create("Folder", { id: "img", label: "Images", parentId: "user" })
	store.create("Folder", { id: "photo", label: "Photo", parentId: "img" })
	store.create("Folder", { id: "pics", label: "Pictures", parentId: "img" })
	store.create("Folder", { id: "screen", label: "Screenshot", parentId: "img" })
	store.create("Folder", { id: "music", label: "Musics", parentId: "user" })
	store.create("Folder", { id: "video", label: "Videos", parentId: "user" })

	store.create("File", { id: "test.txt", label: "Test", parentId: "docs" })
	store.create("File", { id: "test2.txt", label: "Test2", parentId: "docs" })
	store.create("File", { id: "test3.txt", label: "Test3", parentId: "docs" })
	store.create("File", { id: "test.jpg", label: "Test", parentId: "img" })

	const root = store.getEntity<EntityFolder>("user")
	expect(root.isFolder).toBeTruthy()

	expect(store.getEntity("pics")).not.toBeUndefined()

	const f = store.getEntity<EntityFile>("test2.txt")
	const f2 = store.getEntity<EntityFile>("test3.txt")

	const docs = store.getEntity<EntityFile>("docs")
	expect(f.isFolder).toBeFalsy()
	f.label = "myFile"
	f.icon = "myIcon"
	expect(f.label).toBe("myFile")
	expect(f.icon).toBe("myIcon")

	docs.label = "DOCUMENTS"
	docs.icon = "myIcon"
	expect(docs.label).toBe("DOCUMENTS")
	expect((docs as any).data.meta.collapse).toBeFalsy()
	expect(docs.icon).toBe("myIcon-open")

	f2.setParent("user")

	expect(JSON.stringify(root.toNestedJSON())).toContain("DOCUMENTS")

	store.delete("test.txt")
})
