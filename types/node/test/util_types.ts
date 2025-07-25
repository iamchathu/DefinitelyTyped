import * as types from "node:util/types";

import { createPublicKey, KeyObject, webcrypto } from "node:crypto";

const object: unknown = {};
const readonlySetOrArray: ReadonlySet<any> | readonly any[] = new Set();
const readonlyMapOrRecord: ReadonlyMap<any, any> | Record<any, any> = new Map();

if (types.isAnyArrayBuffer(object)) {
    const expected: ArrayBufferLike = object;
}
if (types.isArgumentsObject(object)) {
    object; // $ExpectType IArguments
}
if (types.isArrayBufferView(object)) {
    object; // $ExpectType ArrayBufferView || ArrayBufferView<ArrayBufferLike>
}
if (types.isBigInt64Array(object)) {
    object; // $ExpectType BigInt64Array || BigInt64Array<ArrayBufferLike>
}
if (types.isBigIntObject(object)) {
    object; // $ExpectType BigInt
}
if (types.isBigUint64Array(object)) {
    object; // $ExpectType BigUint64Array || BigUint64Array<ArrayBufferLike>
}
if (types.isBooleanObject(object)) {
    object; // $ExpectType Boolean
}
if (types.isBoxedPrimitive(object)) {
    object; // $ExpectType String | Number | Boolean | Symbol | BigInt
}
if (types.isDataView(object)) {
    object; // $ExpectType DataView || DataView<ArrayBufferLike>
}
if (types.isDate(object)) {
    object; // $ExpectType Date
}
if (types.isFloat16Array(object)) {
    object; // $ExpectType Float16Array || Float16Array<ArrayBufferLike>
}
if (types.isFloat32Array(object)) {
    object; // $ExpectType Float32Array || Float32Array<ArrayBufferLike>
}
if (types.isFloat64Array(object)) {
    object; // $ExpectType Float64Array || Float64Array<ArrayBufferLike>
}
if (types.isGeneratorFunction(object)) {
    object; // $ExpectType GeneratorFunction
}
if (types.isGeneratorObject(object)) {
    object; // $ExpectType Generator<unknown, any, unknown> || Generator<unknown, any, any>
}
if (types.isInt8Array(object)) {
    object; // $ExpectType Int8Array || Int8Array<ArrayBufferLike>
}
if (types.isInt16Array(object)) {
    object; // $ExpectType Int16Array || Int16Array<ArrayBufferLike>
}
if (types.isInt32Array(object)) {
    object; // $ExpectType Int32Array || Int32Array<ArrayBufferLike>
}
if (types.isMap(object)) {
    object; // $ExpectType Map<unknown, unknown>

    if (types.isMap(readonlyMapOrRecord)) {
        readonlyMapOrRecord; // $ExpectType ReadonlyMap<any, any> || ReadonlyMap<any, any> | Map<unknown, unknown>
    }
}
if (types.isNativeError(object)) {
    object; // $ExpectType Error

    ([
        new EvalError(),
        new RangeError(),
        new ReferenceError(),
        new SyntaxError(),
        new TypeError(),
        new URIError(),
    ] as const).forEach((nativeError: EvalError | RangeError | ReferenceError | SyntaxError | TypeError | URIError) => {
        if (!types.isNativeError(nativeError)) {
            nativeError; // $ExpectType never
        }
    });
}
if (types.isNumberObject(object)) {
    object; // $ExpectType Number
}
if (types.isPromise(object)) {
    object; // $ExpectType Promise<unknown>
}
if (types.isRegExp(object)) {
    object; // $ExpectType RegExp
}
if (types.isSet(object)) {
    object; // $ExpectType Set<unknown>

    if (types.isSet(readonlySetOrArray)) {
        readonlySetOrArray; // $ExpectType ReadonlySet<any>
    }
}
if (types.isSharedArrayBuffer(object)) {
    object; // $ExpectType SharedArrayBuffer
}
if (types.isStringObject(object)) {
    object; // $ExpectType String
}
if (types.isSymbolObject(object)) {
    object; // $ExpectType Symbol
}
if (types.isTypedArray(object)) {
    object; // $ExpectType TypedArray || TypedArray<ArrayBufferLike>
}
if (types.isUint8Array(object)) {
    object; // $ExpectType Uint8Array || Uint8Array<ArrayBufferLike>
}
if (types.isUint8ClampedArray(object)) {
    object; // $ExpectType Uint8ClampedArray || Uint8ClampedArray<ArrayBufferLike>
}
if (types.isUint16Array(object)) {
    object; // $ExpectType Uint16Array || Uint16Array<ArrayBufferLike>
}
if (types.isUint32Array(object)) {
    object; // $ExpectType Uint32Array || Uint32Array<ArrayBufferLike>
}
if (types.isWeakMap(object)) {
    object; // $ExpectType WeakMap<object, unknown>
}
if (types.isWeakSet(object)) {
    object; // $ExpectType WeakSet<object>
}

let b: boolean;
b = types.isBigInt64Array(15);
b = types.isBigUint64Array(15);
b = types.isModuleNamespaceObject(15);

const f = (v: any) => {
    if (types.isArrayBufferView(v)) {
        const abv: ArrayBufferView = v;
    }
};

// tslint:disable-next-line:no-construct
const maybeBoxed: number | Number = new Number(1);
if (types.isBoxedPrimitive(maybeBoxed)) {
    const boxed: Number = maybeBoxed;
}
const maybeBoxed2: number | Number = 1;
if (!types.isBoxedPrimitive(maybeBoxed2)) {
    const boxed: number = maybeBoxed2;
}

const value: BigInt64Array | BigUint64Array | number = 1 as any;
if (types.isBigInt64Array(value)) {
    // $ExpectType BigInt64Array || BigInt64Array<ArrayBufferLike>
    const b = value;
} else if (types.isBigUint64Array(value)) {
    // $ExpectType BigUint64Array || BigUint64Array<ArrayBufferLike>
    const b = value;
} else {
    // $ExpectType number
    const b = value;
}

const keyObj: KeyObject | number = createPublicKey("test");
if (types.isKeyObject(keyObj)) {
    keyObj; // $ExpectType KeyObject
}

webcrypto.subtle.generateKey(
    "Algorithm",
    false,
    [],
).then(cryptoKeyObj => {
    if (types.isCryptoKey(cryptoKeyObj)) {
        cryptoKeyObj; // $ExpectType CryptoKey
    } else {
        cryptoKeyObj.privateKey; // $ExpectType CryptoKey
        cryptoKeyObj.publicKey; // $ExpectType CryptoKey
    }
});
