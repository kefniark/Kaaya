import { Vector3, ITransformComponentData, IComponentData } from "./interfaces";
import { Entity } from "./entity";
import { EntityStore } from "../../stores";
export declare class Component {
    get id(): string;
    get name(): string;
    get gameobject(): Entity;
    get transform(): TransformComponent;
    protected get watchedData(): any;
    protected store: EntityStore;
    protected data: IComponentData;
    dataDefault: IComponentData;
    constructor(store: EntityStore, data: IComponentData);
    created(): void;
    deleted(): void;
    mounted(): void;
    unmounted(): void;
    enabled(): void;
    disabled(): void;
}
export declare class TransformComponent extends Component {
    get position(): Vector3;
    get rotation(): Vector3;
    get scale(): Vector3;
    data: ITransformComponentData;
    constructor(store: EntityStore, data: IComponentData);
}
