export interface IComponentData {
	id: string
	parentId: string
	enable: boolean
	type: string
}

export interface Vector3 {
	x: number
	y: number
	z: number
}

export interface ITransformComponentData extends IComponentData {
	position: Vector3
	rotation: Vector3
	scale: Vector3
}

export interface IEntityData {
	id: string
	name: string
	parentId: string
	childIds: string[]
	componentIds: { [id: string]: string }
	enable: boolean
}
