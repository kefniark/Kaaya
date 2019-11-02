/**
 * Provide polyfill around Date.now()
 */
const now = typeof Date.now === "function" ? Date.now : new Date().getTime;
const start = now();
/**
 * Provide polyfill around performance.now()
 */
/* istanbul ignore next */
const perf = () => {
    if (globalThis && globalThis.performance) {
        return globalThis.performance.now();
    }
    else if (globalThis.process) {
        return process.hrtime()[1];
    }
    return now() - start;
};

/// Inspired by https://basarat.gitbooks.io/typescript/docs/tips/typed-event.html
class Event {
    constructor() {
        this.listeners = [];
        this.listenersOncer = [];
    }
    on(listener) {
        this.listeners.push(listener);
        return { dispose: () => this.off(listener) };
    }
    once(listener) {
        this.listenersOncer.push(listener);
    }
    off(listener) {
        const callbackIndex = this.listeners.indexOf(listener);
        if (callbackIndex > -1)
            this.listeners.splice(callbackIndex, 1);
    }
    emit(event) {
        /** Update any general listeners */
        this.listeners.forEach(listener => listener(event));
        /** Clear the `once` queue */
        if (this.listenersOncer.length > 0) {
            const toCall = this.listenersOncer;
            this.listenersOncer = [];
            toCall.forEach(listener => listener(event));
        }
    }
}

const url = "abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
/**
 * Create a `uid` [a-zA-z0-9]
 *
 * @param {Number} len
 * @return {String} uid
 */
function uid(len = 8) {
    let id = "";
    while (len--) {
        id += url[(Math.random() * 62) | 0];
    }
    return id;
}

var LogLevel;
(function (LogLevel) {
    LogLevel[LogLevel["INFO"] = 0] = "INFO";
    LogLevel[LogLevel["WARN"] = 1] = "WARN";
    LogLevel[LogLevel["ERROR"] = 2] = "ERROR";
    LogLevel[LogLevel["OFF"] = 3] = "OFF";
})(LogLevel || (LogLevel = {}));

/**
 * Method used to create a proxy around some data an get event
 *
 * Inspired by `on-change` but simpler (https://github.com/sindresorhus/on-change/)
 *
 * @export
 * @param {*} objToWatch
 * @param {(prop: string, value?: any, previous?: any) => void} onChangeFunction
 * @returns {Proxy}
 */
function onChange(objToWatch, onChangeFunction) {
    const map = new WeakMap();
    const getRootPath = (val) => {
        const path = map.get(val) || "";
        return path ? `${path}.` : "";
    };
    const handler = {
        get(target, property, receiver) {
            const path = getRootPath(target) + property;
            const value = Reflect.get(target, property, receiver);
            if (typeof value === "object" && value !== null) {
                map.set(value, path);
                return new Proxy(value, handler);
            }
            /* istanbul ignore next */
            return value;
        },
        set(target, property, value) {
            const path = getRootPath(target) + property;
            const prev = target[property];
            if (value === prev)
                return true;
            const res = Reflect.set(target, property, value);
            onChangeFunction(path, value, prev);
            return res;
        },
        deleteProperty(target, property) {
            const path = getRootPath(target) + property;
            const prev = target[property];
            if (map.has(target))
                map.delete(target);
            const res = Reflect.deleteProperty(target, property);
            onChangeFunction(path, undefined, prev);
            return res;
        }
    };
    map.set(objToWatch, "");
    return new Proxy(objToWatch, handler);
}
let ARRAY_TYPE = Array;

/* istanbul ignore file */
/**
 * 3x3 Matrix
 * @module mat3
 */
/**
 * Creates a new identity mat3
 *
 * @returns {mat3} a new 3x3 matrix
 */
function create$1() {
    let out = new ARRAY_TYPE(9);
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[5] = 0;
    out[6] = 0;
    out[7] = 0;
    out[0] = 1;
    out[4] = 1;
    out[8] = 1;
    return out;
}

/* istanbul ignore file */
/**
 * 3 Dimensional Vector
 * @module vec3
 */
/**
 * Creates a new, empty vec3
 *
 * @returns {vec3} a new 3D vector
 */
function create$3() {
    let out = new ARRAY_TYPE(3);
    out[0] = 0;
    out[1] = 0;
    out[2] = 0;
    return out;
}
/**
 * Calculates the length of a vec3
 *
 * @param {vec3} a vector to calculate length of
 * @returns {Number} length of a
 */
function length(a) {
    let x = a[0];
    let y = a[1];
    let z = a[2];
    return Math.hypot(x, y, z);
}
/**
 * Creates a new vec3 initialized with the given values
 *
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @returns {vec3} a new 3D vector
 */
function fromValues$1(x, y, z) {
    let out = new ARRAY_TYPE(3);
    out[0] = x;
    out[1] = y;
    out[2] = z;
    return out;
}
/**
 * Normalize a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a vector to normalize
 * @returns {vec3} out
 */
function normalize(out, a) {
    let x = a[0];
    let y = a[1];
    let z = a[2];
    let len = x * x + y * y + z * z;
    if (len > 0) {
        //TODO: evaluate use of glm_invsqrt here?
        len = 1 / Math.sqrt(len);
    }
    out[0] = a[0] * len;
    out[1] = a[1] * len;
    out[2] = a[2] * len;
    return out;
}
/**
 * Calculates the dot product of two vec3's
 *
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {Number} dot product of a and b
 */
function dot(a, b) {
    return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
}
/**
 * Computes the cross product of two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */
function cross(out, a, b) {
    let ax = a[0], ay = a[1], az = a[2];
    let bx = b[0], by = b[1], bz = b[2];
    out[0] = ay * bz - az * by;
    out[1] = az * bx - ax * bz;
    out[2] = ax * by - ay * bx;
    return out;
}
/**
 * Alias for {@link vec3.length}
 * @function
 */
const len = length;
/**
 * Perform some operation over an array of vec3s.
 *
 * @param {Array} a the array of vectors to iterate over
 * @param {Number} stride Number of elements between the start of each vec3. If 0 assumes tightly packed
 * @param {Number} offset Number of elements to skip at the beginning of the array
 * @param {Number} count Number of vec3s to iterate over. If 0 iterates over entire array
 * @param {Function} fn Function to call for each vector in the array
 * @param {Object} [arg] additional argument to pass to fn
 * @returns {Array} a
 * @function
 */
const forEach$1 = (function () {
    let vec = create$3();
    return function (a, stride, offset, count, fn, arg) {
        let i, l;
        if (!stride) {
            stride = 3;
        }
        if (!offset) {
            offset = 0;
        }
        if (count) {
            l = Math.min(count * stride + offset, a.length);
        }
        else {
            l = a.length;
        }
        for (i = offset; i < l; i += stride) {
            vec[0] = a[i];
            vec[1] = a[i + 1];
            vec[2] = a[i + 2];
            fn(vec, vec, arg);
            a[i] = vec[0];
            a[i + 1] = vec[1];
            a[i + 2] = vec[2];
        }
        return a;
    };
})();

/* istanbul ignore file */
/**
 * 4 Dimensional Vector
 * @module vec4
 */
/**
 * Creates a new, empty vec4
 *
 * @returns {vec4} a new 4D vector
 */
function create$4() {
    let out = new ARRAY_TYPE(4);
    out[0] = 0;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    return out;
}
/**
 * Normalize a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a vector to normalize
 * @returns {vec4} out
 */
function normalize$1(out, a) {
    let x = a[0];
    let y = a[1];
    let z = a[2];
    let w = a[3];
    let len = x * x + y * y + z * z + w * w;
    if (len > 0) {
        len = 1 / Math.sqrt(len);
    }
    out[0] = x * len;
    out[1] = y * len;
    out[2] = z * len;
    out[3] = w * len;
    return out;
}
/**
 * Perform some operation over an array of vec4s.
 *
 * @param {Array} a the array of vectors to iterate over
 * @param {Number} stride Number of elements between the start of each vec4. If 0 assumes tightly packed
 * @param {Number} offset Number of elements to skip at the beginning of the array
 * @param {Number} count Number of vec4s to iterate over. If 0 iterates over entire array
 * @param {Function} fn Function to call for each vector in the array
 * @param {Object} [arg] additional argument to pass to fn
 * @returns {Array} a
 * @function
 */
const forEach$2 = (function () {
    let vec = create$4();
    return function (a, stride, offset, count, fn, arg) {
        let i, l;
        if (!stride) {
            stride = 4;
        }
        if (!offset) {
            offset = 0;
        }
        if (count) {
            l = Math.min(count * stride + offset, a.length);
        }
        else {
            l = a.length;
        }
        for (i = offset; i < l; i += stride) {
            vec[0] = a[i];
            vec[1] = a[i + 1];
            vec[2] = a[i + 2];
            vec[3] = a[i + 3];
            fn(vec, vec, arg);
            a[i] = vec[0];
            a[i + 1] = vec[1];
            a[i + 2] = vec[2];
            a[i + 3] = vec[3];
        }
        return a;
    };
})();
/**
 * Sets a quat from the given angle and rotation axis,
 * then returns it.
 *
 * @param {quat} out the receiving quaternion
 * @param {vec3} axis the axis around which to rotate
 * @param {Number} rad the angle in radians
 * @returns {quat} out
 **/
function setAxisAngle(out, axis, rad) {
    rad = rad * 0.5;
    let s = Math.sin(rad);
    out[0] = s * axis[0];
    out[1] = s * axis[1];
    out[2] = s * axis[2];
    out[3] = Math.cos(rad);
    return out;
}
/**
 * Creates a quaternion from the given 3x3 rotation matrix.
 *
 * NOTE: The resultant quaternion is not normalized, so you should be sure
 * to renormalize the quaternion yourself where necessary.
 *
 * @param {quat} out the receiving quaternion
 * @param {mat3} m rotation matrix
 * @returns {quat} out
 * @function
 */
function fromMat3(out, m) {
    // Algorithm in Ken Shoemake's article in 1987 SIGGRAPH course notes
    // article "Quaternion Calculus and Fast Animation".
    let fTrace = m[0] + m[4] + m[8];
    let fRoot;
    if (fTrace > 0.0) {
        // |w| > 1/2, may as well choose w > 1/2
        fRoot = Math.sqrt(fTrace + 1.0); // 2w
        out[3] = 0.5 * fRoot;
        fRoot = 0.5 / fRoot; // 1/(4w)
        out[0] = (m[5] - m[7]) * fRoot;
        out[1] = (m[6] - m[2]) * fRoot;
        out[2] = (m[1] - m[3]) * fRoot;
    }
    else {
        // |w| <= 1/2
        let i = 0;
        if (m[4] > m[0])
            i = 1;
        if (m[8] > m[i * 3 + i])
            i = 2;
        let j = (i + 1) % 3;
        let k = (i + 2) % 3;
        fRoot = Math.sqrt(m[i * 3 + i] - m[j * 3 + j] - m[k * 3 + k] + 1.0);
        out[i] = 0.5 * fRoot;
        fRoot = 0.5 / fRoot;
        out[3] = (m[j * 3 + k] - m[k * 3 + j]) * fRoot;
        out[j] = (m[j * 3 + i] + m[i * 3 + j]) * fRoot;
        out[k] = (m[k * 3 + i] + m[i * 3 + k]) * fRoot;
    }
    return out;
}
/**
 * Normalize a quat
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a quaternion to normalize
 * @returns {quat} out
 * @function
 */
const normalize$2 = normalize$1;
/**
 * Sets a quaternion to represent the shortest rotation from one
 * vector to another.
 *
 * Both vectors are assumed to be unit length.
 *
 * @param {quat} out the receiving quaternion.
 * @param {vec3} a the initial vector
 * @param {vec3} b the destination vector
 * @returns {quat} out
 */
const rotationTo = (function () {
    let tmpvec3 = create$3();
    let xUnitVec3 = fromValues$1(1, 0, 0);
    let yUnitVec3 = fromValues$1(0, 1, 0);
    return function (out, a, b) {
        let dot$1 = dot(a, b);
        if (dot$1 < -0.999999) {
            cross(tmpvec3, xUnitVec3, a);
            if (len(tmpvec3) < 0.000001)
                cross(tmpvec3, yUnitVec3, a);
            normalize(tmpvec3, tmpvec3);
            setAxisAngle(out, tmpvec3, Math.PI);
            return out;
        }
        else if (dot$1 > 0.999999) {
            out[0] = 0;
            out[1] = 0;
            out[2] = 0;
            out[3] = 1;
            return out;
        }
        else {
            cross(tmpvec3, a, b);
            out[0] = tmpvec3[0];
            out[1] = tmpvec3[1];
            out[2] = tmpvec3[2];
            out[3] = 1 + dot$1;
            return normalize$2(out, out);
        }
    };
})();
/**
 * Sets the specified quaternion with values corresponding to the given
 * axes. Each axis is a vec3 and is expected to be unit length and
 * perpendicular to all other specified axes.
 *
 * @param {vec3} view  the vector representing the viewing direction
 * @param {vec3} right the vector representing the local "right" direction
 * @param {vec3} up    the vector representing the local "up" direction
 * @returns {quat} out
 */
const setAxes = (function () {
    let matr = create$1();
    return function (out, view, right, up) {
        matr[0] = right[0];
        matr[3] = right[1];
        matr[6] = right[2];
        matr[1] = up[0];
        matr[4] = up[1];
        matr[7] = up[2];
        matr[2] = -view[0];
        matr[5] = -view[1];
        matr[8] = -view[2];
        return normalize$2(out, fromMat3(out, matr));
    };
})();

/* istanbul ignore file */
/**
 * 2 Dimensional Vector
 * @module vec2
 */
/**
 * Creates a new, empty vec2
 *
 * @returns {vec2} a new 2D vector
 */
function create$7() {
    let out = new ARRAY_TYPE(2);
    out[0] = 0;
    out[1] = 0;
    return out;
}
/**
 * Perform some operation over an array of vec2s.
 *
 * @param {Array} a the array of vectors to iterate over
 * @param {Number} stride Number of elements between the start of each vec2. If 0 assumes tightly packed
 * @param {Number} offset Number of elements to skip at the beginning of the array
 * @param {Number} count Number of vec2s to iterate over. If 0 iterates over entire array
 * @param {Function} fn Function to call for each vector in the array
 * @param {Object} [arg] additional argument to pass to fn
 * @returns {Array} a
 * @function
 */
const forEach$3 = (function () {
    let vec = create$7();
    return function (a, stride, offset, count, fn, arg) {
        let i, l;
        if (!stride) {
            stride = 2;
        }
        if (!offset) {
            offset = 0;
        }
        l = count ? Math.min(count * stride + offset, a.length) : a.length;
        for (i = offset; i < l; i += stride) {
            vec[0] = a[i];
            vec[1] = a[i + 1];
            fn(vec, vec, arg);
            a[i] = vec[0];
            a[i + 1] = vec[1];
        }
        return a;
    };
})();

class Entity {
    constructor(store, data) {
        this.dataDefault = {
            id: uid(),
            name: "entity",
            parentId: "",
            childIds: [],
            componentIds: {},
            enable: true
        };
        this.store = store;
        this.data = Object.assign({}, this.dataDefault, data);
    }
    get enable() {
        return this.data.enable;
    }
    set enable(value) {
        this.watchedData.enable = value;
    }
    get id() {
        return this.data.id;
    }
    get name() {
        return this.data.name;
    }
    set name(value) {
        this.watchedData.name = value;
    }
    get gameobject() {
        return this.store.getEntity(this.data.id);
    }
    get transform() {
        return this.store.getEntity(this.data.componentIds["Transform"]);
    }
    get parent() {
        return this.store.getEntity(this.data.parentId);
    }
    get components() {
        return Object.values(this.data.componentIds).map(x => this.store.getEntity(x));
    }
    get childs() {
        return this.data.childIds.map(x => this.store.getEntity(x));
    }
    get watchedData() {
        return this.store.getData(this.data.id);
    }
    created() {
        const parent = this.store.getData(this.data.parentId);
        if (!parent)
            return;
        if (parent.childIds.indexOf(this.data.id) !== -1)
            return;
        if (!this.store.created.has(this.id))
            return;
        parent.childIds.push(this.data.id);
    }
    deleted() {
        const parent = this.store.getData(this.data.parentId);
        if (!parent || !parent.childIds)
            return;
        parent.childIds = parent.childIds.filter((x) => x !== this.id);
        for (const componentId of Object.values(this.data.componentIds)) {
            this.store.delete(componentId);
        }
        for (const childId of this.data.childIds) {
            this.store.delete(childId);
        }
    }
}
// export function walkEntity(entity: Entity, cb: (entity: Entity | Component, depth: number) => void, depth: number = 0) {
// 	if (!entity) return
// 	cb(entity, depth)
// 	for (const comp of entity.components) {
// 		cb(comp, depth + 1)
// 	}
// 	for (const child of entity.childs) {
// 		walkEntity(child, cb, depth + 1)
// 	}
// }

class Component {
    constructor(store, data) {
        this.dataDefault = {
            id: uid(),
            parentId: "",
            type: "",
            enable: true
        };
        this.store = store;
        this.data = Object.assign({}, this.dataDefault, data);
    }
    get id() {
        return this.data.id;
    }
    get name() {
        return this.data.type;
    }
    get gameobject() {
        return this.store.getEntity(this.data.parentId);
    }
    get transform() {
        return this.gameobject.transform;
    }
    get watchedData() {
        return this.store.getData(this.data.id);
    }
    created() {
        const parent = this.store.getData(this.data.parentId);
        if (!parent)
            return;
        if (this.data.type in parent.componentIds)
            return;
        if (!this.store.created.has(this.id))
            return;
        parent.componentIds[this.data.type] = this.data.id;
    }
    deleted() {
        const parent = this.store.getData(this.data.parentId);
        if (!parent || !parent.componentIds)
            return;
        delete parent.componentIds[this.data.type];
    }
    mounted() { }
    unmounted() { }
    enabled() { }
    disabled() { }
}
class TransformComponent extends Component {
    constructor(store, data) {
        if (!data.type)
            data.type = "Transform";
        super(store, data);
        if (!this.data.position)
            this.data.position = { x: 0, y: 0, z: 0 };
        if (!this.data.rotation)
            this.data.rotation = { x: 0, y: 0, z: 0 };
        if (!this.data.scale)
            this.data.scale = { x: 1, y: 1, z: 1 };
    }
    get position() {
        return this.watchedData.position;
    }
    get rotation() {
        return this.watchedData.rotation;
    }
    get scale() {
        return this.watchedData.scale;
    }
}

function pathWalk(obj, path) {
    let root = obj;
    let index;
    let prop = path;
    while (path) {
        index = path.indexOf(".");
        if (index === -1) {
            return { root, property: path };
        }
        prop = path.slice(0, index);
        if (!root[prop])
            break;
        root = root[prop];
        path = path.slice(index + 1);
    }
    return { root, property: "" };
}
function clone(obj) {
    return JSON.parse(JSON.stringify(obj));
}

class DataStore {
    constructor() {
        this.hook = [];
        this.mutations = {};
        // transaction
        this.transactionMeta = undefined;
        this.transactionHistory = [];
        // undo / redo
        this.lastUndoIndex = -1;
        this.undoBuffer = [];
        this.syncQueue = [];
        this.id = uid();
        this.evtCreate = new Event();
        this.evtApply = new Event();
        this.history = [];
        this.historyIds = new Set();
        this.undoMap = new Map();
        this.mutations.add = (obj, mut, forward = true) => {
            const { root, property } = pathWalk(obj, mut.path);
            if (forward) {
                if (!root[property])
                    root[property] = JSON.parse(JSON.stringify(mut.data.value));
            }
            else {
                if (root[property])
                    delete root[property];
            }
            this.addHistory(mut);
        };
        this.mutations.set = (obj, mut, forward = true) => {
            const { root, property } = pathWalk(obj, mut.path);
            if (forward) {
                root[property] = JSON.parse(JSON.stringify(mut.data.value));
            }
            else {
                root[property] = JSON.parse(JSON.stringify(mut.data.old));
            }
            this.addHistory(mut);
        };
        this.mutations.delete = (obj, mut, forward = true) => {
            const { root, property } = pathWalk(obj, mut.path);
            if (forward) {
                if (root && root[property]) {
                    this.keepUndoObject(mut.id, root[property]);
                    delete root[property];
                }
            }
            else {
                if (this.undoMap.has(mut.id)) {
                    root[property] = this.undoMap.get(mut.id);
                    this.undoMap.delete(mut.id);
                }
            }
            this.addHistory(mut);
        };
        this.mutations.transaction = (obj, mut, forward = true) => {
            if (!this.transactionMeta)
                this.transactionMeta = mut.data.meta;
            for (const subMut of mut.data.history) {
                if (forward) {
                    if (this.historyIds.has(subMut.id))
                        continue;
                    this.applyMutation(obj, subMut);
                    this.historyIds.add(subMut.id);
                }
                else {
                    if (!this.historyIds.has(subMut.id))
                        continue;
                    this.revertMutation(obj, subMut);
                    this.historyIds.delete(subMut.id);
                }
            }
            this.transactionMeta = undefined;
            this.transactionHistory = [];
            this.history.push(mut);
            this.historyIds.add(mut.id);
        };
        this.mutations.undo = (obj, mut) => {
            const index = this.history.findIndex(x => x.id === mut.data.id);
            const target = this.history[index];
            this.lastUndoIndex = index;
            this.revertMutation(obj, target);
            this.undoBuffer.push(target.id);
            this.addHistory(mut);
            this.historyIds.add(mut.id);
        };
        this.mutations.redo = (obj, mut) => {
            const index = this.history.findIndex(x => x.id === mut.data.id);
            const target = this.history[index];
            this.lastUndoIndex = index + 1;
            this.applyMutation(obj, target);
            const index2 = this.undoBuffer.indexOf(target.id);
            if (index2 != -1)
                this.undoBuffer.splice(index2, 1);
            this.historyIds.add(mut.id);
            this.addHistory(mut);
        };
    }
    addHookBefore(name, path, promise) {
        this.hook.push({
            type: "before",
            name,
            path,
            promise
        });
    }
    addHookAfter(name, path, promise) {
        this.hook.push({
            type: "after",
            name,
            path,
            promise
        });
    }
    get nextUndoId() {
        if (this.history.length === 0)
            return -1;
        if (this.lastUndoIndex !== -1) {
            for (let i = this.lastUndoIndex - 1; i >= 0; i--) {
                return this.history[i].id;
            }
        }
        return this.history[this.history.length - 1].id;
    }
    get nextRedoId() {
        if (this.undoBuffer.length === 0)
            return -1;
        return this.undoBuffer[this.undoBuffer.length - 1];
    }
    keepUndoObject(id, val) {
        this.undoMap.set(id, val);
    }
    addHistory(mut, force = false) {
        if (!force && this.transactionMeta) {
            this.transactionHistory.push(mut);
        }
        else {
            this.history.push(mut);
        }
    }
    transactionStart(meta = {}) {
        this.transactionMeta = meta;
    }
    transactionEnd(path, meta = {}) {
        this.createMutation("transaction", path, {
            meta: Object.assign(this.transactionMeta, meta),
            history: this.transactionHistory
        });
    }
    createMutation(name, path, data) {
        const mut = { id: uid(), time: perf(), name, path, data };
        this.evtCreate.emit(mut);
        return mut;
    }
    registerMutation(name, cb) {
        this.mutations[name] = cb;
    }
    revertMutation(obj, mut) {
        if (!this.mutations[mut.name])
            throw new Error(`Unknown mutation ${mut.name}`);
        this.mutations[mut.name](obj, mut, false);
        this.historyIds.delete(mut.id);
        this.evtApply.emit(mut);
    }
    applyMutation(obj, mut) {
        if (!this.mutations[mut.name])
            throw new Error(`Unknown mutation ${mut.name}`);
        if (this.historyIds.has(mut.id))
            return;
        this.mutations[mut.name](obj, mut);
        this.historyIds.add(mut.id);
        this.evtApply.emit(mut);
    }
    async hookBefore(obj, mut) {
        for (const hook of this.hook) {
            if (hook.type !== "before")
                continue;
            if (hook.name !== mut.name)
                continue;
            if (hook.path !== mut.path)
                continue;
            await hook.promise(obj, mut);
        }
    }
    async hookAfter(obj, mut) {
        for (const hook of this.hook) {
            if (hook.type !== "after")
                continue;
            if (hook.name !== mut.name)
                continue;
            if (hook.path !== mut.path)
                continue;
            await hook.promise(obj, mut);
        }
    }
    sync(obj, history) {
        for (const mut of history) {
            this.applyMutation(obj, mut);
        }
    }
    async syncAsyncExecute(obj, history) {
        for (const mut of history) {
            if (this.historyIds.has(mut.id))
                continue;
            await this.hookBefore(obj, mut);
            this.applyMutation(obj, mut);
            await this.hookAfter(obj, mut);
        }
    }
    async syncAsync(obj, history) {
        this.syncQueue.push(() => this.syncAsyncExecute(obj, history));
        if (!this.syncCurrent) {
            let elem = this.syncQueue.shift();
            while (!!elem) {
                this.syncCurrent = elem;
                await elem();
                elem = this.syncQueue.shift();
                this.syncCurrent = undefined;
            }
        }
    }
    getHistory() {
        return this.history;
    }
}

class BaseStore {
    constructor(data = {}) {
        this._originalData = data;
        this._store = new DataStore();
        this._store.evtCreate.on((mut) => {
            this._store.applyMutation(this._originalData, mut);
        });
        this._data = onChange(this._originalData, (path, value, previousValue) => {
            if (previousValue === undefined) {
                this._store.createMutation("add", path, { value, type: typeof value });
            }
            else if (value === undefined) {
                const mut = this._store.createMutation("delete", path, {});
                this._store.keepUndoObject(mut.id, previousValue);
            }
            else {
                this._store.createMutation("set", path, { value, old: previousValue });
            }
        });
    }
    get id() {
        return this._store.id;
    }
    get history() {
        return clone(this._store.getHistory());
    }
    get data() {
        return this._data;
    }
    get proxy() {
        return clone(this.data);
    }
    get serialize() {
        return this._originalData;
    }
    addHookBefore(name, path, promise) {
        this._store.addHookBefore(name, path, promise);
    }
    addHookAfter(name, path, promise) {
        this._store.addHookAfter(name, path, promise);
    }
    transactionStart(meta) {
        this._store.transactionStart(meta);
    }
    transactionEnd(path = "", meta) {
        this._store.transactionEnd(path, meta);
    }
    observe(cb) {
        this._store.evtApply.on(cb);
    }
    sync(history) {
        this._store.sync(this._originalData, history);
    }
    async syncAsync(history) {
        await this._store.syncAsync(this._originalData, history);
    }
    undo() {
        const mutId = this._store.nextUndoId;
        if (mutId !== -1)
            this._store.createMutation("undo", "", { id: mutId });
    }
    redo() {
        const mutId = this._store.nextRedoId;
        if (mutId !== -1)
            this._store.createMutation("redo", "", { id: mutId });
    }
}

class EntityStore extends BaseStore {
    constructor(data = {}) {
        super(data);
        this.factory = new Map();
        this.instances = new WeakMap();
        this.created = new Set();
        this._store.registerMutation("create", (obj, mut, _forward) => {
            let instance = undefined;
            // only instantiate object on real not proxy
            const init = this.factory.get(mut.data.classname);
            if (!init)
                throw new Error("Cant find factory method for " + mut.data.classname);
            instance = init(this, mut.data);
            obj[mut.path] = instance.data;
            this.instances.set(instance.data, instance);
            this._store.addHistory(mut);
            this._store.historyIds.add(mut.id);
            if (instance && instance.created)
                instance.created();
        });
    }
    register(name, factory) {
        this.factory.set(name, factory);
    }
    create(classname, data = {}) {
        if (!this.factory.has(classname))
            throw new Error("unknown");
        const id = data.id ? data.id : uid(6);
        data.id = id;
        this.created.add(id);
        this._store.createMutation("create", id, { classname, ...data });
    }
    delete(id) {
        if (!this.data[id])
            return;
        const entity = this.getEntity(id);
        if (entity && entity.deleted)
            entity.deleted();
        delete this.data[id];
    }
    getData(id, event = true) {
        return event ? this.data[id] : this._originalData[id];
    }
    getEntity(id) {
        const originalData = this.getData(id, false);
        return this.instances.get(originalData);
    }
}

class KeyStore extends BaseStore {
    createSection(name) {
        if (!name)
            throw new Error("wrong parameter");
        if (this.data[name])
            throw new Error("section already exist " + name);
        this.data[name] = {};
    }
    has(section, key) {
        if (!section || !key)
            throw new Error("wrong parameter");
        if (!this.data || !this.data[section])
            return false;
        return key in this.data[section];
    }
    get(section, key, def = "") {
        if (!section || !key)
            throw new Error("wrong parameter");
        if (!this.has(section, key))
            return def;
        return this.data[section][key];
    }
    set(section, key, value = "") {
        if (!section || !key)
            throw new Error("wrong parameter");
        if (!this.data || !this.data[section])
            throw new Error("section dont exist " + section);
        this.data[section][key] = value;
    }
    delete(section, key) {
        if (!section || !key)
            throw new Error("wrong parameter");
        if (!this.data || !this.data[section])
            throw new Error("section dont exist " + section);
        delete this.data[section][key];
    }
    deleteSection(name) {
        if (!name)
            throw new Error("wrong parameter");
        delete this.data[name];
    }
    stringify() {
        return JSON.stringify(this.data, null, 2);
    }
}

class TableStore extends BaseStore {
    constructor(entries = {}) {
        const data = clone(entries);
        for (const sheetId in entries) {
            data[sheetId] = {
                id: "id",
                rows: [],
                values: {}
            };
            for (const row of entries[sheetId]) {
                const id = data[sheetId].id;
                const uuid = row[id] ? row[id] : uid(4);
                row[id] = uuid;
                data[sheetId].rows.push(uuid);
                data[sheetId].values[uuid] = row;
            }
        }
        super(data);
    }
    getValues() {
        const data = clone(this.serialize);
        for (const sheetId in data) {
            data[sheetId] = Object.values(data[sheetId].values);
        }
        return data;
    }
    getSheet(name) {
        if (!this.data || !this.data[name])
            throw new Error("sheet doesnt exist " + name);
        return this.data[name];
    }
    createSheet(name, id = "id") {
        if (!name)
            throw new Error("wrong parameter");
        if (this.data[name])
            throw new Error("sheet already exist " + name);
        this.data[name] = {
            id,
            rows: [],
            values: {}
        };
    }
    getRows(sheet) {
        const data = this.getSheet(sheet);
        return Object.values(data.values);
    }
    getRowById(sheet, id) {
        if (!sheet || !id)
            throw new Error("wrong parameter");
        const data = this.getSheet(sheet);
        return data.values[id];
    }
    addRow(sheet, value) {
        if (!sheet || !value)
            throw new Error("wrong parameter");
        const data = this.getSheet(sheet);
        const id = value[data.id] ? value[data.id] : uid(4);
        value[data.id] = id;
        data.rows.push(id);
        data.values[id] = value;
    }
    setRow(sheet, rowId, value) {
        if (!sheet || !rowId || !value)
            throw new Error("wrong parameter");
        const data = this.getSheet(sheet);
        if (!(data.id in value))
            value[data.id] = rowId;
        data.values[rowId] = value;
    }
    deleteRow(sheet, rowId) {
        if (!sheet || !rowId)
            throw new Error("wrong parameter");
        const data = this.getSheet(sheet);
        data.rows = data.rows.filter(e => e !== rowId);
        delete data.values[rowId];
    }
    getCell(sheet, rowId, col) {
        if (!sheet || !rowId || !col)
            throw new Error("wrong parameter");
        const data = this.getSheet(sheet);
        return data.values[rowId][col];
    }
    setCell(sheet, rowId, col, value = "") {
        if (!sheet || !rowId || !col)
            throw new Error("wrong parameter");
        const data = this.getSheet(sheet);
        data.values[rowId][col] = value;
    }
    deleteSheet(name) {
        if (!name)
            throw new Error("wrong parameter");
        delete this.data[name];
    }
    stringify() {
        return JSON.stringify(this.getValues(), null, 2);
    }
}

class EntityFile {
    constructor(store, data) {
        this.store = store;
        const defaults = {
            id: uid(),
            parentId: "",
            icon: "file",
            label: "file",
            meta: {}
        };
        this.data = Object.assign({}, defaults, data);
    }
    get id() {
        return this.data.id;
    }
    get label() {
        return this.data.label;
    }
    set label(val) {
        this.watchedData.label = val;
    }
    get icon() {
        return this.data.icon;
    }
    set icon(val) {
        this.watchedData.icon = val;
    }
    get isFolder() {
        return false;
    }
    get watchedData() {
        return this.store.getData(this.data.id);
    }
    setParent(parentId) {
        const parent = this.store.getData(parentId);
        if (!parent)
            return;
        if (parent.childIds.indexOf(this.data.id) !== -1)
            return;
        if (this.data.parentId !== parentId) {
            const prevParent = this.store.getData(this.data.parentId);
            if (prevParent) {
                prevParent.childIds = prevParent.childIds.filter((x) => x !== this.id);
            }
            this.data.parentId = parentId;
        }
        parent.childIds.push(this.data.id);
    }
    created() {
        if (!this.store.created.has(this.id))
            return;
        this.setParent(this.data.parentId);
    }
    deleted() {
        const parent = this.store.getData(this.data.parentId);
        if (!parent || !parent.childIds)
            return;
        parent.childIds = parent.childIds.filter((x) => x !== this.id);
    }
    toNestedJSON() {
        const data = clone(this.data);
        delete data.parentId;
        data.icon = this.icon;
        data.selected = this.id === this.store.getData("meta").selected;
        return data;
    }
}

class EntityFolder extends EntityFile {
    constructor(store, data) {
        const defaults = {
            id: uid(),
            parentId: "",
            label: "folder",
            icon: "folder",
            meta: {},
            childIds: []
        };
        data = Object.assign({}, defaults, data);
        super(store, data);
    }
    get icon() {
        return this.data.icon + (!this.data.meta.collapse ? "-open" : "");
    }
    set icon(val) {
        this.data.icon = val;
    }
    get isFolder() {
        return true;
    }
    toNestedJSON() {
        const data = clone(this.data);
        delete data.parentId;
        delete data.childIds;
        data.icon = this.icon;
        data.selected = this.id === this.store.getData("meta").selected;
        data.children = this.data.childIds.map(x => this.store.getEntity(x).toNestedJSON());
        data.children.sort((a, b) => a.label.localeCompare(b.label));
        return data;
    }
}

class Kaaya {
    /**
     * Create a Base Store (basic store without helpers or predefined structure)
     *
     * @param {*} [data={}]
     * @returns {BaseStore}
     */
    static createRawStore(data) {
        return new BaseStore(data);
    }
    //#region Key Store
    /**
     * Create a Keystore
     *
     * @param {*} [data={}]
     * @returns {KeyStore}
     */
    static createKeyStore(data = {}) {
        return new KeyStore(data);
    }
    /**
     * Create a Keystore from a configuration file (.json)
     *
     * @param {string} data
     * @memberof Kaaya
     */
    static createKeyStoreFromJSON(data) {
        return Kaaya.createKeyStore(JSON.parse(data));
    }
    //#endregion KeyStore
    //#region Table Store
    static createTableStore(data) {
        return new TableStore(data);
    }
    static createTableStoreFromJSON(data) {
        return Kaaya.createTableStore(JSON.parse(data));
    }
    //#endregion Table Store
    static createEntityStore(data) {
        return new EntityStore(data);
    }
    static createEntityComponentStore(data) {
        const store = Kaaya.createEntityStore(data);
        store.register("Entity", (store1, data1) => new Entity(store1, data1));
        store.register("Transform", (store2, data2) => new TransformComponent(store2, data2));
        return store;
    }
    static createFileFolderStore(data = {}) {
        if (!data.meta)
            data.meta = { selected: "" };
        const store = Kaaya.createEntityStore(data);
        store.register("File", (store1, data1) => new EntityFile(store1, data1));
        store.register("Folder", (store2, data2) => new EntityFolder(store2, data2));
        return store;
    }
}

export default Kaaya;
export { BaseStore, DataStore, EntityStore, KeyStore, TableStore };
