// [Kaaya]  Build: 0.0.3 - Sunday, October 20th, 2019, 10:40:52 PM  
 (function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("Kaaya", [], factory);
	else if(typeof exports === 'object')
		exports["Kaaya"] = factory();
	else
		root["Kaaya"] = factory().default;
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithHoles.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/construct.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/construct.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js");

function isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (isNativeReflectConstruct()) {
    module.exports = _construct = Reflect.construct;
  } else {
    module.exports = _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

module.exports = _construct;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/get.js":
/*!****************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/get.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var superPropBase = __webpack_require__(/*! ./superPropBase */ "./node_modules/@babel/runtime/helpers/superPropBase.js");

function _get(target, property, receiver) {
  if (typeof Reflect !== "undefined" && Reflect.get) {
    module.exports = _get = Reflect.get;
  } else {
    module.exports = _get = function _get(target, property, receiver) {
      var base = superPropBase(target, property);
      if (!base) return;
      var desc = Object.getOwnPropertyDescriptor(base, property);

      if (desc.get) {
        return desc.get.call(receiver);
      }

      return desc.value;
    };
  }

  return _get(target, property, receiver || target);
}

module.exports = _get;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/getPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/inherits.js":
/*!*********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/inherits.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};

  if (obj != null) {
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

        if (desc && (desc.get || desc.set)) {
          Object.defineProperty(newObj, key, desc);
        } else {
          newObj[key] = obj[key];
        }
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/isNativeFunction.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/isNativeFunction.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}

module.exports = _isNativeFunction;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArray.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArray.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

module.exports = _iterableToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArrayLimit(arr, i) {
  if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
    return;
  }

  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableRest.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableRest.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

module.exports = _nonIterableRest;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/slicedToArray.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/slicedToArray.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(/*! ./arrayWithHoles */ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js");

var iterableToArrayLimit = __webpack_require__(/*! ./iterableToArrayLimit */ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js");

var nonIterableRest = __webpack_require__(/*! ./nonIterableRest */ "./node_modules/@babel/runtime/helpers/nonIterableRest.js");

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/superPropBase.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/superPropBase.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getPrototypeOf = __webpack_require__(/*! ./getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");

function _superPropBase(object, property) {
  while (!Object.prototype.hasOwnProperty.call(object, property)) {
    object = getPrototypeOf(object);
    if (object === null) break;
  }

  return object;
}

module.exports = _superPropBase;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/toArray.js":
/*!********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toArray.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(/*! ./arrayWithHoles */ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js");

var iterableToArray = __webpack_require__(/*! ./iterableToArray */ "./node_modules/@babel/runtime/helpers/iterableToArray.js");

var nonIterableRest = __webpack_require__(/*! ./nonIterableRest */ "./node_modules/@babel/runtime/helpers/nonIterableRest.js");

function _toArray(arr) {
  return arrayWithHoles(arr) || iterableToArray(arr) || nonIterableRest();
}

module.exports = _toArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/wrapNativeSuper.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/wrapNativeSuper.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getPrototypeOf = __webpack_require__(/*! ./getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js");

var isNativeFunction = __webpack_require__(/*! ./isNativeFunction */ "./node_modules/@babel/runtime/helpers/isNativeFunction.js");

var construct = __webpack_require__(/*! ./construct */ "./node_modules/@babel/runtime/helpers/construct.js");

function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;

  module.exports = _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !isNativeFunction(Class)) return Class;

    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }

    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);

      _cache.set(Class, Wrapper);
    }

    function Wrapper() {
      return construct(Class, arguments, getPrototypeOf(this).constructor);
    }

    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return setPrototypeOf(Wrapper, Class);
  };

  return _wrapNativeSuper(Class);
}

module.exports = _wrapNativeSuper;

/***/ }),

/***/ "./node_modules/base64-js/index.js":
/*!*****************************************!*\
  !*** ./node_modules/base64-js/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.byteLength = byteLength
exports.toByteArray = toByteArray
exports.fromByteArray = fromByteArray

var lookup = []
var revLookup = []
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i]
  revLookup[code.charCodeAt(i)] = i
}

// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
revLookup['-'.charCodeAt(0)] = 62
revLookup['_'.charCodeAt(0)] = 63

function getLens (b64) {
  var len = b64.length

  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // Trim off extra bytes after placeholder bytes are found
  // See: https://github.com/beatgammit/base64-js/issues/42
  var validLen = b64.indexOf('=')
  if (validLen === -1) validLen = len

  var placeHoldersLen = validLen === len
    ? 0
    : 4 - (validLen % 4)

  return [validLen, placeHoldersLen]
}

// base64 is 4/3 + up to two characters of the original data
function byteLength (b64) {
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function _byteLength (b64, validLen, placeHoldersLen) {
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function toByteArray (b64) {
  var tmp
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]

  var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen))

  var curByte = 0

  // if there are placeholders, only get up to the last complete 4 chars
  var len = placeHoldersLen > 0
    ? validLen - 4
    : validLen

  var i
  for (i = 0; i < len; i += 4) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 18) |
      (revLookup[b64.charCodeAt(i + 1)] << 12) |
      (revLookup[b64.charCodeAt(i + 2)] << 6) |
      revLookup[b64.charCodeAt(i + 3)]
    arr[curByte++] = (tmp >> 16) & 0xFF
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 2) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 2) |
      (revLookup[b64.charCodeAt(i + 1)] >> 4)
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 1) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 10) |
      (revLookup[b64.charCodeAt(i + 1)] << 4) |
      (revLookup[b64.charCodeAt(i + 2)] >> 2)
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] +
    lookup[num >> 12 & 0x3F] +
    lookup[num >> 6 & 0x3F] +
    lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp
  var output = []
  for (var i = start; i < end; i += 3) {
    tmp =
      ((uint8[i] << 16) & 0xFF0000) +
      ((uint8[i + 1] << 8) & 0xFF00) +
      (uint8[i + 2] & 0xFF)
    output.push(tripletToBase64(tmp))
  }
  return output.join('')
}

function fromByteArray (uint8) {
  var tmp
  var len = uint8.length
  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
  var parts = []
  var maxChunkLength = 16383 // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(
      uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)
    ))
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1]
    parts.push(
      lookup[tmp >> 2] +
      lookup[(tmp << 4) & 0x3F] +
      '=='
    )
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + uint8[len - 1]
    parts.push(
      lookup[tmp >> 10] +
      lookup[(tmp >> 4) & 0x3F] +
      lookup[(tmp << 2) & 0x3F] +
      '='
    )
  }

  return parts.join('')
}


/***/ }),

/***/ "./node_modules/buffer/index.js":
/*!**************************************!*\
  !*** ./node_modules/buffer/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */



var base64 = __webpack_require__(/*! base64-js */ "./node_modules/base64-js/index.js")
var ieee754 = __webpack_require__(/*! ieee754 */ "./node_modules/ieee754/index.js")
var isArray = __webpack_require__(/*! isarray */ "./node_modules/isarray/index.js")

exports.Buffer = Buffer
exports.SlowBuffer = SlowBuffer
exports.INSPECT_MAX_BYTES = 50

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Due to various browser bugs, sometimes the Object implementation will be used even
 * when the browser supports typed arrays.
 *
 * Note:
 *
 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *     incorrect length in some situations.

 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
 * get the Object implementation, which is slower but behaves correctly.
 */
Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined
  ? global.TYPED_ARRAY_SUPPORT
  : typedArraySupport()

/*
 * Export kMaxLength after typed array support is determined.
 */
exports.kMaxLength = kMaxLength()

function typedArraySupport () {
  try {
    var arr = new Uint8Array(1)
    arr.__proto__ = {__proto__: Uint8Array.prototype, foo: function () { return 42 }}
    return arr.foo() === 42 && // typed array instances can be augmented
        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
        arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
  } catch (e) {
    return false
  }
}

function kMaxLength () {
  return Buffer.TYPED_ARRAY_SUPPORT
    ? 0x7fffffff
    : 0x3fffffff
}

function createBuffer (that, length) {
  if (kMaxLength() < length) {
    throw new RangeError('Invalid typed array length')
  }
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = new Uint8Array(length)
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    if (that === null) {
      that = new Buffer(length)
    }
    that.length = length
  }

  return that
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer (arg, encodingOrOffset, length) {
  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
    return new Buffer(arg, encodingOrOffset, length)
  }

  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new Error(
        'If encoding is specified then the first argument must be a string'
      )
    }
    return allocUnsafe(this, arg)
  }
  return from(this, arg, encodingOrOffset, length)
}

Buffer.poolSize = 8192 // not used by this implementation

// TODO: Legacy, not needed anymore. Remove in next major version.
Buffer._augment = function (arr) {
  arr.__proto__ = Buffer.prototype
  return arr
}

function from (that, value, encodingOrOffset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number')
  }

  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
    return fromArrayBuffer(that, value, encodingOrOffset, length)
  }

  if (typeof value === 'string') {
    return fromString(that, value, encodingOrOffset)
  }

  return fromObject(that, value)
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(null, value, encodingOrOffset, length)
}

if (Buffer.TYPED_ARRAY_SUPPORT) {
  Buffer.prototype.__proto__ = Uint8Array.prototype
  Buffer.__proto__ = Uint8Array
  if (typeof Symbol !== 'undefined' && Symbol.species &&
      Buffer[Symbol.species] === Buffer) {
    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
    Object.defineProperty(Buffer, Symbol.species, {
      value: null,
      configurable: true
    })
  }
}

function assertSize (size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be a number')
  } else if (size < 0) {
    throw new RangeError('"size" argument must not be negative')
  }
}

function alloc (that, size, fill, encoding) {
  assertSize(size)
  if (size <= 0) {
    return createBuffer(that, size)
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string'
      ? createBuffer(that, size).fill(fill, encoding)
      : createBuffer(that, size).fill(fill)
  }
  return createBuffer(that, size)
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(null, size, fill, encoding)
}

function allocUnsafe (that, size) {
  assertSize(size)
  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < size; ++i) {
      that[i] = 0
    }
  }
  return that
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(null, size)
}
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(null, size)
}

function fromString (that, string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8'
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding')
  }

  var length = byteLength(string, encoding) | 0
  that = createBuffer(that, length)

  var actual = that.write(string, encoding)

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    that = that.slice(0, actual)
  }

  return that
}

function fromArrayLike (that, array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0
  that = createBuffer(that, length)
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255
  }
  return that
}

function fromArrayBuffer (that, array, byteOffset, length) {
  array.byteLength // this throws if `array` is not a valid ArrayBuffer

  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('\'offset\' is out of bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('\'length\' is out of bounds')
  }

  if (byteOffset === undefined && length === undefined) {
    array = new Uint8Array(array)
  } else if (length === undefined) {
    array = new Uint8Array(array, byteOffset)
  } else {
    array = new Uint8Array(array, byteOffset, length)
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = array
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    that = fromArrayLike(that, array)
  }
  return that
}

function fromObject (that, obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0
    that = createBuffer(that, len)

    if (that.length === 0) {
      return that
    }

    obj.copy(that, 0, 0, len)
    return that
  }

  if (obj) {
    if ((typeof ArrayBuffer !== 'undefined' &&
        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
      if (typeof obj.length !== 'number' || isnan(obj.length)) {
        return createBuffer(that, 0)
      }
      return fromArrayLike(that, obj)
    }

    if (obj.type === 'Buffer' && isArray(obj.data)) {
      return fromArrayLike(that, obj.data)
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
}

function checked (length) {
  // Note: cannot use `length < kMaxLength()` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= kMaxLength()) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
  }
  return length | 0
}

function SlowBuffer (length) {
  if (+length != length) { // eslint-disable-line eqeqeq
    length = 0
  }
  return Buffer.alloc(+length)
}

Buffer.isBuffer = function isBuffer (b) {
  return !!(b != null && b._isBuffer)
}

Buffer.compare = function compare (a, b) {
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError('Arguments must be Buffers')
  }

  if (a === b) return 0

  var x = a.length
  var y = b.length

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i]
      y = b[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function concat (list, length) {
  if (!isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return Buffer.alloc(0)
  }

  var i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; ++i) {
      length += list[i].length
    }
  }

  var buffer = Buffer.allocUnsafe(length)
  var pos = 0
  for (i = 0; i < list.length; ++i) {
    var buf = list[i]
    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    }
    buf.copy(buffer, pos)
    pos += buf.length
  }
  return buffer
}

function byteLength (string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length
  }
  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    string = '' + string
  }

  var len = string.length
  if (len === 0) return 0

  // Use a for loop to avoid recursion
  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len
      case 'utf8':
      case 'utf-8':
      case undefined:
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) return utf8ToBytes(string).length // assume utf8
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}
Buffer.byteLength = byteLength

function slowToString (encoding, start, end) {
  var loweredCase = false

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return ''
  }

  if (end === undefined || end > this.length) {
    end = this.length
  }

  if (end <= 0) {
    return ''
  }

  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0
  start >>>= 0

  if (end <= start) {
    return ''
  }

  if (!encoding) encoding = 'utf8'

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
// Buffer instances.
Buffer.prototype._isBuffer = true

function swap (b, n, m) {
  var i = b[n]
  b[n] = b[m]
  b[m] = i
}

Buffer.prototype.swap16 = function swap16 () {
  var len = this.length
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits')
  }
  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1)
  }
  return this
}

Buffer.prototype.swap32 = function swap32 () {
  var len = this.length
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits')
  }
  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3)
    swap(this, i + 1, i + 2)
  }
  return this
}

Buffer.prototype.swap64 = function swap64 () {
  var len = this.length
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits')
  }
  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7)
    swap(this, i + 1, i + 6)
    swap(this, i + 2, i + 5)
    swap(this, i + 3, i + 4)
  }
  return this
}

Buffer.prototype.toString = function toString () {
  var length = this.length | 0
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
}

Buffer.prototype.equals = function equals (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function inspect () {
  var str = ''
  var max = exports.INSPECT_MAX_BYTES
  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
    if (this.length > max) str += ' ... '
  }
  return '<Buffer ' + str + '>'
}

Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
  if (!Buffer.isBuffer(target)) {
    throw new TypeError('Argument must be a Buffer')
  }

  if (start === undefined) {
    start = 0
  }
  if (end === undefined) {
    end = target ? target.length : 0
  }
  if (thisStart === undefined) {
    thisStart = 0
  }
  if (thisEnd === undefined) {
    thisEnd = this.length
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index')
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0
  }
  if (thisStart >= thisEnd) {
    return -1
  }
  if (start >= end) {
    return 1
  }

  start >>>= 0
  end >>>= 0
  thisStart >>>= 0
  thisEnd >>>= 0

  if (this === target) return 0

  var x = thisEnd - thisStart
  var y = end - start
  var len = Math.min(x, y)

  var thisCopy = this.slice(thisStart, thisEnd)
  var targetCopy = target.slice(start, end)

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i]
      y = targetCopy[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset
    byteOffset = 0
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000
  }
  byteOffset = +byteOffset  // Coerce to Number.
  if (isNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : (buffer.length - 1)
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
  if (byteOffset >= buffer.length) {
    if (dir) return -1
    else byteOffset = buffer.length - 1
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0
    else return -1
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding)
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
  } else if (typeof val === 'number') {
    val = val & 0xFF // Search for a byte value [0-255]
    if (Buffer.TYPED_ARRAY_SUPPORT &&
        typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
      }
    }
    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
  }

  throw new TypeError('val must be string, number or Buffer')
}

function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
  var indexSize = 1
  var arrLength = arr.length
  var valLength = val.length

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase()
    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
        encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1
      }
      indexSize = 2
      arrLength /= 2
      valLength /= 2
      byteOffset /= 2
    }
  }

  function read (buf, i) {
    if (indexSize === 1) {
      return buf[i]
    } else {
      return buf.readUInt16BE(i * indexSize)
    }
  }

  var i
  if (dir) {
    var foundIndex = -1
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
      } else {
        if (foundIndex !== -1) i -= i - foundIndex
        foundIndex = -1
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
    for (i = byteOffset; i >= 0; i--) {
      var found = true
      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false
          break
        }
      }
      if (found) return i
    }
  }

  return -1
}

Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1
}

Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
}

Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  // must be an even number of digits
  var strLen = string.length
  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16)
    if (isNaN(parsed)) return i
    buf[offset + i] = parsed
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function latin1Write (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8'
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset | 0
    if (isFinite(length)) {
      length = length | 0
      if (encoding === undefined) encoding = 'utf8'
    } else {
      encoding = length
      length = undefined
    }
  // legacy write(string, encoding, offset, length) - remove in v0.13
  } else {
    throw new Error(
      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
    )
  }

  var remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8'

  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
        return asciiWrite(this, string, offset, length)

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end)
  var res = []

  var i = start
  while (i < end) {
    var firstByte = buf[i]
    var codePoint = null
    var bytesPerSequence = (firstByte > 0xEF) ? 4
      : (firstByte > 0xDF) ? 3
      : (firstByte > 0xBF) ? 2
      : 1

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte
          }
          break
        case 2:
          secondByte = buf[i + 1]
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint
            }
          }
          break
        case 3:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint
            }
          }
          break
        case 4:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          fourthByte = buf[i + 3]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD
      bytesPerSequence = 1
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000
      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
      codePoint = 0xDC00 | codePoint & 0x3FF
    }

    res.push(codePoint)
    i += bytesPerSequence
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000

function decodeCodePointsArray (codePoints) {
  var len = codePoints.length
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = ''
  var i = 0
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    )
  }
  return res
}

function asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F)
  }
  return ret
}

function latin1Slice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; ++i) {
    out += toHex(buf[i])
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  var newBuf
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    newBuf = this.subarray(start, end)
    newBuf.__proto__ = Buffer.prototype
  } else {
    var sliceLen = end - start
    newBuf = new Buffer(sliceLen, undefined)
    for (var i = 0; i < sliceLen; ++i) {
      newBuf[i] = this[i + start]
    }
  }

  return newBuf
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }

  return val
}

Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length)
  }

  var val = this[offset + --byteLength]
  var mul = 1
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul
  }

  return val
}

Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
}

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var i = byteLength
  var mul = 1
  var val = this[offset + --i]
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
}

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
}

Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var mul = 1
  var i = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var i = byteLength - 1
  var mul = 1
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  this[offset] = (value & 0xff)
  return offset + 1
}

function objectWriteUInt16 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
      (littleEndian ? i : 1 - i) * 8
  }
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

function objectWriteUInt32 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffffffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
  }
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = (value >>> 24)
    this[offset + 2] = (value >>> 16)
    this[offset + 1] = (value >>> 8)
    this[offset] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = 0
  var mul = 1
  var sub = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = byteLength - 1
  var mul = 1
  var sub = 0
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  if (value < 0) value = 0xff + value + 1
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
    this[offset + 2] = (value >>> 16)
    this[offset + 3] = (value >>> 24)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
  if (offset < 0) throw new RangeError('Index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  var len = end - start
  var i

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start]
    }
  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    // ascending copy from start
    for (i = 0; i < len; ++i) {
      target[i + targetStart] = this[i + start]
    }
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, start + len),
      targetStart
    )
  }

  return len
}

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill (val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start
      start = 0
      end = this.length
    } else if (typeof end === 'string') {
      encoding = end
      end = this.length
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0)
      if (code < 256) {
        val = code
      }
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string')
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding)
    }
  } else if (typeof val === 'number') {
    val = val & 255
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0
  end = end === undefined ? this.length : end >>> 0

  if (!val) val = 0

  var i
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val
    }
  } else {
    var bytes = Buffer.isBuffer(val)
      ? val
      : utf8ToBytes(new Buffer(val, encoding).toString())
    var len = bytes.length
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len]
    }
  }

  return this
}

// HELPER FUNCTIONS
// ================

var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g

function base64clean (str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function stringtrim (str) {
  if (str.trim) return str.trim()
  return str.replace(/^\s+|\s+$/g, '')
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  var codePoint
  var length = string.length
  var leadSurrogate = null
  var bytes = []

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

function isnan (val) {
  return val !== val // eslint-disable-line no-self-compare
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/ieee754/index.js":
/*!***************************************!*\
  !*** ./node_modules/ieee754/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = (e * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = (m * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = ((value * c) - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}


/***/ }),

/***/ "./node_modules/isarray/index.js":
/*!***************************************!*\
  !*** ./node_modules/isarray/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};


/***/ }),

/***/ "./node_modules/js-ini/lib/index.js":
/*!******************************************!*\
  !*** ./node_modules/js-ini/lib/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.$Errors = Symbol('Errors of parsing');
const createErrorOfParse = (line) => new Error(`Unsupported type of line: "${line}"`);
const sectionNameRegex = /\[(.*)]$/;
const autoType = (val) => {
    if ((val === 'true') || (val === 'false')) {
        return val === 'true';
    }
    if (val === '') {
        return true;
    }
    if (!isNaN(parseFloat(val))) {
        return parseFloat(val);
    }
    return val;
};
function parse(data, params) {
    const { delimiter = '=', comment = ';', nothrow = false, autoTyping = true, dataSections = [], } = Object.assign({}, params);
    const lines = data.split(/\r?\n/g);
    let currentSection = '';
    let isDataSection = false;
    const result = {};
    for (const rawLine of lines) {
        const line = rawLine.trim();
        if ((line.length === 0) || (line.startsWith(comment))) {
            continue;
        }
        else if (line[0].startsWith('[')) {
            const match = line.match(sectionNameRegex);
            if (match !== null) {
                currentSection = match[1].trim();
                isDataSection = dataSections.includes(currentSection);
                if (!(currentSection in result)) {
                    result[currentSection] = (isDataSection) ? [] : {};
                }
                continue;
            }
        }
        else if (isDataSection) {
            result[currentSection].push(rawLine);
            continue;
        }
        else if (line.includes(delimiter)) {
            const posOfDelimiter = line.indexOf(delimiter);
            const name = line.slice(0, posOfDelimiter).trim();
            const rawVal = line.slice(posOfDelimiter + 1).trim();
            const val = (autoTyping) ? autoType(rawVal) : rawVal;
            if (currentSection !== '') {
                result[currentSection][name] = val;
            }
            else {
                result[name] = val;
            }
            continue;
        }
        const error = createErrorOfParse(line);
        if (!nothrow) {
            throw error;
        }
        else {
            if (exports.$Errors in result) {
                result[exports.$Errors].push(error);
            }
            else {
                result[exports.$Errors] = [error];
            }
        }
    }
    return result;
}
exports.parse = parse;
function stringify(data, params) {
    const { delimiter = '=', blankLine = true, spaceBefore = false, spaceAfter = false, } = Object.assign({}, params);
    const chunks = [];
    const formatPare = (key, val) => {
        let res = key;
        if (spaceBefore) {
            res += ' ';
        }
        res += delimiter;
        if (spaceAfter) {
            res += ' ';
        }
        res += val;
        return res;
    };
    const sectionKeys = [];
    for (const key of Object.keys(data)) {
        let keyIsAdded = false;
        while ((sectionKeys.length > 0) || !keyIsAdded) {
            const curKey = (keyIsAdded) ? sectionKeys.pop() : key;
            const val = (keyIsAdded) ? data[key][curKey] : data[curKey];
            keyIsAdded = true;
            const valType = typeof val;
            if (['boolean', 'string', 'number'].includes(valType)) {
                chunks.push(formatPare(curKey, val.toString()));
            }
            else if (typeof val === 'object') {
                if (sectionKeys.length > 0) {
                    throw new Error('too much nesting');
                }
                if (blankLine) {
                    chunks.push('');
                }
                chunks.push(`[${key}]`);
                if (Array.isArray(val)) {
                    // is datasection
                    chunks.push(...val);
                }
                else {
                    sectionKeys.push(...Object.keys(val));
                }
            }
        }
    }
    return chunks.join('\n');
}
exports.stringify = stringify;
exports.decode = parse;
exports.encode = stringify;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/nanoid/non-secure/index.js":
/*!*************************************************!*\
  !*** ./node_modules/nanoid/non-secure/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var url = 'bjectSymhasOwnProp-0123456789ABCDEFGHIJKLMNQRTUVWXYZ_dfgiklquvxz'

/**
 * Generate URL-friendly unique ID. This method use non-secure predictable
 * random generator with bigger collision probability.
 *
 * @param {number} [size=21] The number of symbols in ID.
 *
 * @return {string} Random string.
 *
 * @example
 * const nanoid = require('nanoid/non-secure')
 * model.id = nanoid() //=> "Uakgb_J5m9g-0JDMbcJqL"
 *
 * @name nonSecure
 * @function
 */
module.exports = function (size) {
  size = size || 21
  var id = ''
  while (size--) {
    id += url[Math.random() * 64 | 0]
  }
  return id
}


/***/ }),

/***/ "./node_modules/on-change/index.js":
/*!*****************************************!*\
  !*** ./node_modules/on-change/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const PATH_SEPARATOR = '.';
const TARGET = Symbol('target');
const UNSUBSCRIBE = Symbol('unsubscribe');

const isPrimitive = value => value === null || (typeof value !== 'object' && typeof value !== 'function');

const isBuiltinWithoutMutableMethods = value => value instanceof RegExp || value instanceof Number;

const isBuiltinWithMutableMethods = value => value instanceof Date;

const concatPath = (path, property) => {
	if (property && property.toString) {
		if (path) {
			path += PATH_SEPARATOR;
		}

		path += property.toString();
	}

	return path;
};

const walkPath = (path, callback) => {
	let index;

	while (path) {
		index = path.indexOf(PATH_SEPARATOR);

		if (index === -1) {
			index = path.length;
		}

		callback(path.slice(0, index));

		path = path.slice(index + 1);
	}
};

const shallowClone = value => {
	if (Array.isArray(value)) {
		return value.slice();
	}

	return Object.assign({}, value);
};

const onChange = (object, onChange, options = {}) => {
	const proxyTarget = Symbol('ProxyTarget');
	let inApply = false;
	let changed = false;
	let applyPath;
	let applyPrevious;
	let isUnsubscribed = false;
	const equals = options.equals || Object.is;
	let propCache = new WeakMap();
	let pathCache = new WeakMap();
	let proxyCache = new WeakMap();

	const handleChange = (path, property, previous, value) => {
		if (isUnsubscribed) {
			return;
		}

		if (!inApply) {
			onChange(concatPath(path, property), value, previous);
			return;
		}

		if (inApply && applyPrevious && previous !== undefined && value !== undefined && property !== 'length') {
			let item = applyPrevious;

			if (path !== applyPath) {
				path = path.replace(applyPath, '').slice(1);

				walkPath(path, key => {
					item[key] = shallowClone(item[key]);
					item = item[key];
				});
			}

			item[property] = previous;
		}

		changed = true;
	};

	const getOwnPropertyDescriptor = (target, property) => {
		let props = propCache ? propCache.get(target) : undefined;

		if (props) {
			return props;
		}

		props = new Map();
		propCache.set(target, props);

		let prop = props.get(property);
		if (!prop) {
			prop = Reflect.getOwnPropertyDescriptor(target, property);
			props.set(property, prop);
		}

		return prop;
	};

	const invalidateCachedDescriptor = (target, property) => {
		const props = propCache ? propCache.get(target) : undefined;

		if (props) {
			props.delete(property);
		}
	};

	const buildProxy = (value, path) => {
		if (isUnsubscribed) {
			return value;
		}

		pathCache.set(value, path);

		let proxy = proxyCache.get(value);

		if (proxy === undefined) {
			proxy = new Proxy(value, handler);
			proxyCache.set(value, proxy);
		}

		return proxy;
	};

	const unsubscribe = target => {
		isUnsubscribed = true;
		propCache = null;
		pathCache = null;
		proxyCache = null;

		return target;
	};

	const ignoreChange = property => {
		return isUnsubscribed || (options.ignoreSymbols === true && typeof property === 'symbol');
	};

	const handler = {
		get(target, property, receiver) {
			if (property === proxyTarget || property === TARGET) {
				return target;
			}

			if (property === UNSUBSCRIBE && pathCache.get(target) === '') {
				return unsubscribe(target);
			}

			const value = Reflect.get(target, property, receiver);
			if (
				isPrimitive(value) ||
				isBuiltinWithoutMutableMethods(value) ||
				property === 'constructor' ||
				options.isShallow === true
			) {
				return value;
			}

			// Preserve invariants
			const descriptor = getOwnPropertyDescriptor(target, property);
			if (descriptor && !descriptor.configurable) {
				if (descriptor.set && !descriptor.get) {
					return undefined;
				}

				if (descriptor.writable === false) {
					return value;
				}
			}

			return buildProxy(value, concatPath(pathCache.get(target), property));
		},

		set(target, property, value, receiver) {
			if (value && value[proxyTarget] !== undefined) {
				value = value[proxyTarget];
			}

			const ignore = ignoreChange(property);
			const previous = ignore ? null : Reflect.get(target, property, receiver);
			const result = Reflect.set(target[proxyTarget] || target, property, value);

			if (!ignore && !equals(previous, value)) {
				handleChange(pathCache.get(target), property, previous, value);
			}

			return result;
		},

		defineProperty(target, property, descriptor) {
			const result = Reflect.defineProperty(target, property, descriptor);

			if (!ignoreChange(property)) {
				invalidateCachedDescriptor(target, property);

				handleChange(pathCache.get(target), property, undefined, descriptor.value);
			}

			return result;
		},

		deleteProperty(target, property) {
			if (!Reflect.has(target, property)) {
				return true;
			}

			const ignore = ignoreChange(property);
			const previous = ignore ? null : Reflect.get(target, property);
			const result = Reflect.deleteProperty(target, property);

			if (!ignore) {
				invalidateCachedDescriptor(target, property);

				handleChange(pathCache.get(target), property, previous);
			}

			return result;
		},

		apply(target, thisArg, argumentsList) {
			const compare = isBuiltinWithMutableMethods(thisArg);

			if (compare) {
				thisArg = thisArg[proxyTarget];
			}

			if (!inApply) {
				inApply = true;

				if (compare) {
					applyPrevious = thisArg.valueOf();
				}

				if (Array.isArray(thisArg) || toString.call(thisArg) === '[object Object]') {
					applyPrevious = shallowClone(thisArg[proxyTarget]);
				}

				applyPath = pathCache.get(target);
				applyPath = applyPath.slice(0, Math.max(applyPath.lastIndexOf(PATH_SEPARATOR), 0));

				const result = Reflect.apply(target, thisArg, argumentsList);

				inApply = false;

				if (changed || (compare && !equals(applyPrevious, thisArg.valueOf()))) {
					handleChange(applyPath, '', applyPrevious, thisArg[proxyTarget] || thisArg);
					applyPrevious = null;
					changed = false;
				}

				return result;
			}

			return Reflect.apply(target, thisArg, argumentsList);
		}
	};

	const proxy = buildProxy(object, '');
	onChange = onChange.bind(proxy);

	return proxy;
};

onChange.target = proxy => proxy[TARGET] || proxy;
onChange.unsubscribe = proxy => proxy[UNSUBSCRIBE] || proxy;

module.exports = onChange;
// TODO: Remove this for the next major release
module.exports.default = onChange;


/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/setimmediate/setImmediate.js":
/*!***************************************************!*\
  !*** ./node_modules/setimmediate/setImmediate.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
      // Callback can either be a function or a string
      if (typeof callback !== "function") {
        callback = new Function("" + callback);
      }
      // Copy function arguments
      var args = new Array(arguments.length - 1);
      for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i + 1];
      }
      // Store and register the task
      var task = { callback: callback, args: args };
      tasksByHandle[nextHandle] = task;
      registerImmediate(nextHandle);
      return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
        case 0:
            callback();
            break;
        case 1:
            callback(args[0]);
            break;
        case 2:
            callback(args[0], args[1]);
            break;
        case 3:
            callback(args[0], args[1], args[2]);
            break;
        default:
            callback.apply(undefined, args);
            break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function(handle) {
            process.nextTick(function () { runIfPresent(handle); });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function(event) {
            if (event.source === global &&
                typeof event.data === "string" &&
                event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();

    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();

    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();

    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();

    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/timers-browserify/main.js":
/*!************************************************!*\
  !*** ./node_modules/timers-browserify/main.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var scope = (typeof global !== "undefined" && global) ||
            (typeof self !== "undefined" && self) ||
            window;
var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, scope, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, scope, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
  this._clearFn.call(scope, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function(item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function(item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__(/*! setimmediate */ "./node_modules/setimmediate/setImmediate.js");
// On some exotic environments, it's not clear which object `setimmediate` was
// able to install onto.  Search each possibility in the same order as the
// `setimmediate` library.
exports.setImmediate = (typeof self !== "undefined" && self.setImmediate) ||
                       (typeof global !== "undefined" && global.setImmediate) ||
                       (this && this.setImmediate);
exports.clearImmediate = (typeof self !== "undefined" && self.clearImmediate) ||
                         (typeof global !== "undefined" && global.clearImmediate) ||
                         (this && this.clearImmediate);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/ts-events/dist/lib/EventQueue.js":
/*!*******************************************************!*\
  !*** ./node_modules/ts-events/dist/lib/EventQueue.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright © 2015 Rogier Schouten<github@workingcode.ninja>
// License: ISC

Object.defineProperty(exports, "__esModule", { value: true });
var sync_event_1 = __webpack_require__(/*! ./sync-event */ "./node_modules/ts-events/dist/lib/sync-event.js");
/**
 * Simple synchronous event queue that needs to be drained manually.
 */
var EventQueue = /** @class */ (function () {
    function EventQueue() {
        /**
         * SyncEvent triggered after an event is added outside of a flush operation.
         * @param queue The event queue itself
         */
        this.evtFilled = new sync_event_1.SyncEvent();
        /**
         * SyncEvent triggered after the queue is flushed empty
         * @param queue The event queue itself
         */
        this.evtDrained = new sync_event_1.SyncEvent();
        /**
         * Queued elements
         */
        this._queue = [];
        /**
         * True while flush() or flushOnce() is running
         */
        this._flushing = false;
    }
    /**
     * The module-global event queue
     */
    EventQueue.global = function () {
        if (!EventQueue._instance) {
            EventQueue.resetGlobal();
        }
        return EventQueue._instance;
    };
    /**
     * Testing purposes
     */
    EventQueue.resetGlobal = function () {
        EventQueue._instance = new EventQueue();
    };
    /**
     * Returns true iff the queue is empty
     */
    EventQueue.prototype.empty = function () {
        return this._queue.length === 0;
    };
    /**
     * Add an element to the queue. The handler is called when one of the flush
     * methods is called.
     */
    EventQueue.prototype.add = function (handler) {
        this._queue.push(handler);
        if (this._queue.length === 1 && !this._flushing) {
            this.evtFilled.post(this);
        }
    };
    /**
     * Calls all handlers currently in the queue. Does not call any handlers added
     * as a result of the flush
     */
    EventQueue.prototype.flushOnce = function () {
        var empty = (this._queue.length === 0);
        var flushing = this._flushing;
        this._flushing = true;
        try {
            var queue = this._queue;
            this._queue = [];
            for (var i = 0; i < queue.length; ++i) {
                queue[i]();
            }
        }
        finally {
            this._flushing = flushing;
            if (!empty && !flushing && this._queue.length === 0) {
                this.evtDrained.post(this);
            }
        }
    };
    /**
     * Flushes the QueuedEvents, calling all events currently in the queue and those
     * put into the queue as a result of the flush.
     * @param maxRounds Optional, default 10. Number of iterations after which to throw an error because
     *                  the queue keeps filling up. Set to null to disable this.
     */
    EventQueue.prototype.flush = function (maxRounds) {
        if (maxRounds === void 0) { maxRounds = 10; }
        var empty = (this._queue.length === 0);
        var flushing = this._flushing;
        this._flushing = true;
        try {
            var i = 0;
            while (this._queue.length > 0) {
                if (typeof maxRounds === 'number' && i >= maxRounds) {
                    this._queue = [];
                    throw new Error('unable to flush the queue due to recursively added event. Clearing queue now');
                }
                this.flushOnce();
                ++i;
            }
        }
        finally {
            this._flushing = flushing;
            if (!empty && !flushing && this._queue.length === 0) {
                this.evtDrained.post(this);
            }
        }
    };
    return EventQueue;
}());
exports.default = EventQueue;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXZlbnRRdWV1ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9saWIvRXZlbnRRdWV1ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw2REFBNkQ7QUFDN0QsZUFBZTtBQUVmLFlBQVksQ0FBQzs7QUFFYiwyQ0FBdUM7QUFFdkM7O0dBRUc7QUFDSDtJQUFBO1FBRUk7OztXQUdHO1FBQ0ksY0FBUyxHQUEwQixJQUFJLHNCQUFTLEVBQWMsQ0FBQztRQUN0RTs7O1dBR0c7UUFDSSxlQUFVLEdBQTBCLElBQUksc0JBQVMsRUFBYyxDQUFDO1FBd0J2RTs7V0FFRztRQUNLLFdBQU0sR0FBbUIsRUFBRSxDQUFDO1FBRXBDOztXQUVHO1FBQ0ssY0FBUyxHQUFZLEtBQUssQ0FBQztJQXFFdkMsQ0FBQztJQTlGRzs7T0FFRztJQUNXLGlCQUFNLEdBQXBCO1FBQ0ksSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLEVBQUU7WUFDdkIsVUFBVSxDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQzVCO1FBQ0QsT0FBTyxVQUFVLENBQUMsU0FBUyxDQUFDO0lBQ2hDLENBQUM7SUFFRDs7T0FFRztJQUNXLHNCQUFXLEdBQXpCO1FBQ0ksVUFBVSxDQUFDLFNBQVMsR0FBRyxJQUFJLFVBQVUsRUFBRSxDQUFDO0lBQzVDLENBQUM7SUFZRDs7T0FFRztJQUNJLDBCQUFLLEdBQVo7UUFDSSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBRUQ7OztPQUdHO0lBQ0ksd0JBQUcsR0FBVixVQUFXLE9BQW1CO1FBQzFCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzFCLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUM3QyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUM3QjtJQUNMLENBQUM7SUFFRDs7O09BR0c7SUFDSSw4QkFBUyxHQUFoQjtRQUNJLElBQU0sS0FBSyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDekMsSUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUNoQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztRQUN0QixJQUFJO1lBQ0EsSUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztZQUMxQixJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztZQUNqQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsRUFBRTtnQkFDbkMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7YUFDZDtTQUNKO2dCQUFTO1lBQ04sSUFBSSxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUM7WUFDMUIsSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7Z0JBQ2pELElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQzlCO1NBQ0o7SUFDTCxDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSSwwQkFBSyxHQUFaLFVBQWEsU0FBc0I7UUFBdEIsMEJBQUEsRUFBQSxjQUFzQjtRQUMvQixJQUFNLEtBQUssR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQ3pDLElBQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDaEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7UUFDdEIsSUFBSTtZQUNBLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNWLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO2dCQUMzQixJQUFJLE9BQU8sU0FBUyxLQUFLLFFBQVEsSUFBSSxDQUFDLElBQUksU0FBUyxFQUFFO29CQUNqRCxJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztvQkFDakIsTUFBTSxJQUFJLEtBQUssQ0FBQyw4RUFBOEUsQ0FBQyxDQUFDO2lCQUNuRztnQkFDRCxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7Z0JBQ2pCLEVBQUUsQ0FBQyxDQUFDO2FBQ1A7U0FDSjtnQkFBUztZQUNOLElBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDO1lBQzFCLElBQUksQ0FBQyxLQUFLLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO2dCQUNqRCxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUM5QjtTQUNKO0lBQ0wsQ0FBQztJQUNMLGlCQUFDO0FBQUQsQ0FBQyxBQWhIRCxJQWdIQztBQUVELGtCQUFlLFVBQVUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCDCqSAyMDE1IFJvZ2llciBTY2hvdXRlbjxnaXRodWJAd29ya2luZ2NvZGUubmluamE+XHJcbi8vIExpY2Vuc2U6IElTQ1xyXG5cclxuJ3VzZSBzdHJpY3QnO1xyXG5cclxuaW1wb3J0IHtTeW5jRXZlbnR9IGZyb20gJy4vc3luYy1ldmVudCc7XHJcblxyXG4vKipcclxuICogU2ltcGxlIHN5bmNocm9ub3VzIGV2ZW50IHF1ZXVlIHRoYXQgbmVlZHMgdG8gYmUgZHJhaW5lZCBtYW51YWxseS5cclxuICovXHJcbmNsYXNzIEV2ZW50UXVldWUge1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3luY0V2ZW50IHRyaWdnZXJlZCBhZnRlciBhbiBldmVudCBpcyBhZGRlZCBvdXRzaWRlIG9mIGEgZmx1c2ggb3BlcmF0aW9uLlxyXG4gICAgICogQHBhcmFtIHF1ZXVlIFRoZSBldmVudCBxdWV1ZSBpdHNlbGZcclxuICAgICAqL1xyXG4gICAgcHVibGljIGV2dEZpbGxlZDogU3luY0V2ZW50PEV2ZW50UXVldWU+ID0gbmV3IFN5bmNFdmVudDxFdmVudFF1ZXVlPigpO1xyXG4gICAgLyoqXHJcbiAgICAgKiBTeW5jRXZlbnQgdHJpZ2dlcmVkIGFmdGVyIHRoZSBxdWV1ZSBpcyBmbHVzaGVkIGVtcHR5XHJcbiAgICAgKiBAcGFyYW0gcXVldWUgVGhlIGV2ZW50IHF1ZXVlIGl0c2VsZlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZXZ0RHJhaW5lZDogU3luY0V2ZW50PEV2ZW50UXVldWU+ID0gbmV3IFN5bmNFdmVudDxFdmVudFF1ZXVlPigpO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhlIG1vZHVsZS1nbG9iYWwgZXZlbnQgcXVldWVcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX2luc3RhbmNlOiBFdmVudFF1ZXVlO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhlIG1vZHVsZS1nbG9iYWwgZXZlbnQgcXVldWVcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBnbG9iYWwoKTogRXZlbnRRdWV1ZSB7XHJcbiAgICAgICAgaWYgKCFFdmVudFF1ZXVlLl9pbnN0YW5jZSkge1xyXG4gICAgICAgICAgICBFdmVudFF1ZXVlLnJlc2V0R2xvYmFsKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBFdmVudFF1ZXVlLl9pbnN0YW5jZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFRlc3RpbmcgcHVycG9zZXNcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyByZXNldEdsb2JhbCgpOiB2b2lkIHtcclxuICAgICAgICBFdmVudFF1ZXVlLl9pbnN0YW5jZSA9IG5ldyBFdmVudFF1ZXVlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBRdWV1ZWQgZWxlbWVudHNcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBfcXVldWU6ICgoKSA9PiB2b2lkKVtdID0gW107XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUcnVlIHdoaWxlIGZsdXNoKCkgb3IgZmx1c2hPbmNlKCkgaXMgcnVubmluZ1xyXG4gICAgICovXHJcbiAgICBwcml2YXRlIF9mbHVzaGluZzogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmV0dXJucyB0cnVlIGlmZiB0aGUgcXVldWUgaXMgZW1wdHlcclxuICAgICAqL1xyXG4gICAgcHVibGljIGVtcHR5KCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9xdWV1ZS5sZW5ndGggPT09IDA7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBZGQgYW4gZWxlbWVudCB0byB0aGUgcXVldWUuIFRoZSBoYW5kbGVyIGlzIGNhbGxlZCB3aGVuIG9uZSBvZiB0aGUgZmx1c2hcclxuICAgICAqIG1ldGhvZHMgaXMgY2FsbGVkLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgYWRkKGhhbmRsZXI6ICgpID0+IHZvaWQpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl9xdWV1ZS5wdXNoKGhhbmRsZXIpO1xyXG4gICAgICAgIGlmICh0aGlzLl9xdWV1ZS5sZW5ndGggPT09IDEgJiYgIXRoaXMuX2ZsdXNoaW5nKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZXZ0RmlsbGVkLnBvc3QodGhpcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2FsbHMgYWxsIGhhbmRsZXJzIGN1cnJlbnRseSBpbiB0aGUgcXVldWUuIERvZXMgbm90IGNhbGwgYW55IGhhbmRsZXJzIGFkZGVkXHJcbiAgICAgKiBhcyBhIHJlc3VsdCBvZiB0aGUgZmx1c2hcclxuICAgICAqL1xyXG4gICAgcHVibGljIGZsdXNoT25jZSgpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBlbXB0eSA9ICh0aGlzLl9xdWV1ZS5sZW5ndGggPT09IDApO1xyXG4gICAgICAgIGNvbnN0IGZsdXNoaW5nID0gdGhpcy5fZmx1c2hpbmc7XHJcbiAgICAgICAgdGhpcy5fZmx1c2hpbmcgPSB0cnVlO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHF1ZXVlID0gdGhpcy5fcXVldWU7XHJcbiAgICAgICAgICAgIHRoaXMuX3F1ZXVlID0gW107XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcXVldWUubGVuZ3RoOyArK2kpIHtcclxuICAgICAgICAgICAgICAgIHF1ZXVlW2ldKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGZpbmFsbHkge1xyXG4gICAgICAgICAgICB0aGlzLl9mbHVzaGluZyA9IGZsdXNoaW5nO1xyXG4gICAgICAgICAgICBpZiAoIWVtcHR5ICYmICFmbHVzaGluZyAmJiB0aGlzLl9xdWV1ZS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZXZ0RHJhaW5lZC5wb3N0KHRoaXMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRmx1c2hlcyB0aGUgUXVldWVkRXZlbnRzLCBjYWxsaW5nIGFsbCBldmVudHMgY3VycmVudGx5IGluIHRoZSBxdWV1ZSBhbmQgdGhvc2VcclxuICAgICAqIHB1dCBpbnRvIHRoZSBxdWV1ZSBhcyBhIHJlc3VsdCBvZiB0aGUgZmx1c2guXHJcbiAgICAgKiBAcGFyYW0gbWF4Um91bmRzIE9wdGlvbmFsLCBkZWZhdWx0IDEwLiBOdW1iZXIgb2YgaXRlcmF0aW9ucyBhZnRlciB3aGljaCB0byB0aHJvdyBhbiBlcnJvciBiZWNhdXNlXHJcbiAgICAgKiAgICAgICAgICAgICAgICAgIHRoZSBxdWV1ZSBrZWVwcyBmaWxsaW5nIHVwLiBTZXQgdG8gbnVsbCB0byBkaXNhYmxlIHRoaXMuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBmbHVzaChtYXhSb3VuZHM6IG51bWJlciA9IDEwKTogdm9pZCB7XHJcbiAgICAgICAgY29uc3QgZW1wdHkgPSAodGhpcy5fcXVldWUubGVuZ3RoID09PSAwKTtcclxuICAgICAgICBjb25zdCBmbHVzaGluZyA9IHRoaXMuX2ZsdXNoaW5nO1xyXG4gICAgICAgIHRoaXMuX2ZsdXNoaW5nID0gdHJ1ZTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBsZXQgaSA9IDA7XHJcbiAgICAgICAgICAgIHdoaWxlICh0aGlzLl9xdWV1ZS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG1heFJvdW5kcyA9PT0gJ251bWJlcicgJiYgaSA+PSBtYXhSb3VuZHMpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9xdWV1ZSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcigndW5hYmxlIHRvIGZsdXNoIHRoZSBxdWV1ZSBkdWUgdG8gcmVjdXJzaXZlbHkgYWRkZWQgZXZlbnQuIENsZWFyaW5nIHF1ZXVlIG5vdycpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5mbHVzaE9uY2UoKTtcclxuICAgICAgICAgICAgICAgICsraTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZmluYWxseSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2ZsdXNoaW5nID0gZmx1c2hpbmc7XHJcbiAgICAgICAgICAgIGlmICghZW1wdHkgJiYgIWZsdXNoaW5nICYmIHRoaXMuX3F1ZXVlLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ldnREcmFpbmVkLnBvc3QodGhpcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEV2ZW50UXVldWU7XHJcbiJdfQ==

/***/ }),

/***/ "./node_modules/ts-events/dist/lib/any-event.js":
/*!******************************************************!*\
  !*** ./node_modules/ts-events/dist/lib/any-event.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright © 2015 Rogier Schouten<github@workingcode.ninja>
// License: ISC

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var objects_1 = __webpack_require__(/*! ./objects */ "./node_modules/ts-events/dist/lib/objects.js");
var sync_event_1 = __webpack_require__(/*! ./sync-event */ "./node_modules/ts-events/dist/lib/sync-event.js");
var async_event_1 = __webpack_require__(/*! ./async-event */ "./node_modules/ts-events/dist/lib/async-event.js");
var queued_event_1 = __webpack_require__(/*! ./queued-event */ "./node_modules/ts-events/dist/lib/queued-event.js");
var EventType;
(function (EventType) {
    EventType[EventType["Sync"] = 0] = "Sync";
    EventType[EventType["Async"] = 1] = "Async";
    EventType[EventType["Queued"] = 2] = "Queued";
})(EventType = exports.EventType || (exports.EventType = {}));
/**
 * An event that behaves like a Sync/Async/Queued event depending on how
 * you subscribe.
 */
var AnyEvent = /** @class */ (function () {
    function AnyEvent(opts) {
        /**
         * Underlying event implementations; one for every attach type + opts combination
         */
        this._events = [];
        if (opts && opts.monitorAttach) {
            this.evtFirstAttached = new VoidAnyEvent();
            this.evtLastDetached = new VoidAnyEvent();
        }
    }
    AnyEvent.prototype.attach = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var mode = EventType.Sync;
        if (args.length > 0 && typeof args[0] === 'number') {
            mode = args.shift();
        }
        var boundTo = this; // add ourselves as default 'boundTo' argument
        var handler;
        var opts;
        var postable;
        if (typeof args[0] === 'function' || (args[0] && typeof args[0] === 'object' && typeof args[0].post === 'function')) {
            if (typeof args[0] === 'function') {
                handler = args[0];
            }
            else {
                postable = args[0];
            }
            opts = args[1];
        }
        else {
            boundTo = args[0];
            handler = args[1];
            opts = args[2];
        }
        return this._attach(mode, boundTo, handler, postable, opts, false);
    };
    AnyEvent.prototype.once = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var mode = EventType.Sync;
        if (args.length > 0 && typeof args[0] === 'number') {
            mode = args.shift();
        }
        var boundTo = this; // add ourselves as default 'boundTo' argument
        var handler;
        var opts;
        var postable;
        if (typeof args[0] === 'function' || (args[0] && typeof args[0] === 'object' && typeof args[0].post === 'function')) {
            if (typeof args[0] === 'function') {
                handler = args[0];
            }
            else {
                postable = args[0];
            }
            opts = args[1];
        }
        else {
            boundTo = args[0];
            handler = args[1];
            opts = args[2];
        }
        return this._attach(mode, boundTo, handler, postable, opts, true);
    };
    AnyEvent.prototype._attach = function (mode, boundTo, handler, postable, opts, once) {
        var _this = this;
        var prevCount = (!!this.evtFirstAttached ? this.listenerCount() : 0);
        var event;
        switch (mode) {
            case EventType.Sync:
                {
                    for (var _i = 0, _a = this._events; _i < _a.length; _i++) {
                        var evt = _a[_i];
                        if (evt instanceof sync_event_1.SyncEvent) {
                            event = evt;
                        }
                    }
                    if (!event) {
                        event = new sync_event_1.SyncEvent();
                        this._events.push(event);
                    }
                }
                break;
            case EventType.Async:
                {
                    for (var _b = 0, _c = this._events; _b < _c.length; _b++) {
                        var evt = _c[_b];
                        if (evt instanceof async_event_1.AsyncEvent && objects_1.shallowEquals(evt.options, opts)) {
                            event = evt;
                        }
                    }
                    if (!event) {
                        event = new async_event_1.AsyncEvent(opts);
                        this._events.push(event);
                    }
                }
                break;
            case EventType.Queued:
                {
                    for (var _d = 0, _e = this._events; _d < _e.length; _d++) {
                        var evt = _e[_d];
                        if (evt instanceof queued_event_1.QueuedEvent && objects_1.shallowEquals(evt.options, opts)) {
                            event = evt;
                        }
                    }
                    if (!event) {
                        event = new queued_event_1.QueuedEvent(opts);
                        this._events.push(event);
                    }
                }
                break;
            default:
                throw new Error('unknown EventType');
        }
        var detacher;
        if (once) {
            if (postable) {
                detacher = event.once(postable);
            }
            else {
                detacher = event.once(boundTo, handler);
            }
        }
        else {
            if (postable) {
                detacher = event.attach(postable);
            }
            else {
                detacher = event.attach(boundTo, handler);
            }
        }
        if (this.evtFirstAttached && prevCount === 0) {
            this.evtFirstAttached.post();
        }
        return function () {
            var prevCount = (!!_this.evtLastDetached ? _this.listenerCount() : 0);
            detacher();
            if (!!_this.evtLastDetached && prevCount > 0 && _this.listenerCount() === 0) {
                _this.evtLastDetached.post();
            }
        };
    };
    AnyEvent.prototype.attachSync = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        args.unshift(EventType.Sync);
        return this.attach.apply(this, args);
    };
    AnyEvent.prototype.onceSync = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        args.unshift(EventType.Sync);
        return this.once.apply(this, args);
    };
    AnyEvent.prototype.attachAsync = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        args.unshift(EventType.Async);
        return this.attach.apply(this, args);
    };
    AnyEvent.prototype.onceAsync = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        args.unshift(EventType.Async);
        return this.once.apply(this, args);
    };
    AnyEvent.prototype.attachQueued = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        args.unshift(EventType.Queued);
        return this.attach.apply(this, args);
    };
    AnyEvent.prototype.onceQueued = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        args.unshift(EventType.Queued);
        return this.once.apply(this, args);
    };
    /**
     * Detach event handlers regardless of type
     */
    AnyEvent.prototype.detach = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var prevCount = (!!this.evtLastDetached ? this.listenerCount() : 0);
        for (var i = 0; i < this._events.length; ++i) {
            this._events[i].detach.apply(this._events[i], args);
        }
        if (!!this.evtLastDetached && prevCount > 0 && this.listenerCount() === 0) {
            this.evtLastDetached.post();
        }
    };
    /**
     * Post an event to all current listeners
     */
    AnyEvent.prototype.post = function (data) {
        // make a copy of the array first to cover the case where event handlers
        // are attached during the post
        var events = [];
        for (var i = 0; i < this._events.length; ++i) {
            events.push(this._events[i]);
        }
        for (var i = 0; i < events.length; ++i) {
            events[i].post(data);
        }
    };
    /**
     * The number of attached listeners
     */
    AnyEvent.prototype.listenerCount = function () {
        var result = 0;
        for (var i = 0; i < this._events.length; ++i) {
            result += this._events[i].listenerCount();
        }
        return result;
    };
    return AnyEvent;
}());
exports.AnyEvent = AnyEvent;
/**
 * Convenience class for AnyEvents without data
 */
var VoidAnyEvent = /** @class */ (function (_super) {
    __extends(VoidAnyEvent, _super);
    function VoidAnyEvent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Send the AsyncEvent.
     */
    VoidAnyEvent.prototype.post = function () {
        _super.prototype.post.call(this, undefined);
    };
    return VoidAnyEvent;
}(AnyEvent));
exports.VoidAnyEvent = VoidAnyEvent;
/**
 * Similar to 'error' event on EventEmitter: throws when a post() occurs while no handlers set.
 */
var ErrorAnyEvent = /** @class */ (function (_super) {
    __extends(ErrorAnyEvent, _super);
    function ErrorAnyEvent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ErrorAnyEvent.prototype.post = function (data) {
        if (this.listenerCount() === 0) {
            throw new Error("error event posted while no listeners attached. Error: " + data.message);
        }
        _super.prototype.post.call(this, data);
    };
    return ErrorAnyEvent;
}(AnyEvent));
exports.ErrorAnyEvent = ErrorAnyEvent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW55LWV2ZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2xpYi9hbnktZXZlbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsNkRBQTZEO0FBQzdELGVBQWU7QUFFZixZQUFZLENBQUM7Ozs7Ozs7Ozs7Ozs7OztBQUViLHFDQUF3QztBQUd4QywyQ0FBdUM7QUFDdkMsNkNBQXlEO0FBQ3pELCtDQUE0RDtBQUU1RCxJQUFZLFNBSVg7QUFKRCxXQUFZLFNBQVM7SUFDakIseUNBQUksQ0FBQTtJQUNKLDJDQUFLLENBQUE7SUFDTCw2Q0FBTSxDQUFBO0FBQ1YsQ0FBQyxFQUpXLFNBQVMsR0FBVCxpQkFBUyxLQUFULGlCQUFTLFFBSXBCO0FBU0Q7OztHQUdHO0FBQ0g7SUFrQkksa0JBQVksSUFBbUI7UUFML0I7O1dBRUc7UUFDSyxZQUFPLEdBQW1CLEVBQUUsQ0FBQztRQUdqQyxJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFO1lBQzVCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1lBQzNDLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztTQUM3QztJQUNMLENBQUM7SUFhTSx5QkFBTSxHQUFiO1FBQWMsY0FBYzthQUFkLFVBQWMsRUFBZCxxQkFBYyxFQUFkLElBQWM7WUFBZCx5QkFBYzs7UUFDeEIsSUFBSSxJQUFJLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FBQztRQUMxQixJQUFJLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLE9BQU8sSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLFFBQVEsRUFBRTtZQUNoRCxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssRUFBZSxDQUFDO1NBQ3BDO1FBQ0QsSUFBSSxPQUFPLEdBQVcsSUFBSSxDQUFDLENBQUMsOENBQThDO1FBQzFFLElBQUksT0FBMEIsQ0FBQztRQUMvQixJQUFJLElBQXNDLENBQUM7UUFDM0MsSUFBSSxRQUFxQixDQUFDO1FBQzFCLElBQUksT0FBTyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssVUFBVSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLE9BQU8sSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLFFBQVEsSUFBSSxPQUFPLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEtBQUssVUFBVSxDQUFDLEVBQUU7WUFDakgsSUFBSSxPQUFPLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxVQUFVLEVBQUU7Z0JBQy9CLE9BQU8sR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDckI7aUJBQU07Z0JBQ0gsUUFBUSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUN0QjtZQUNELElBQUksR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDbEI7YUFBTTtZQUNILE9BQU8sR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDbEIsT0FBTyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNsQixJQUFJLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ2xCO1FBQ0QsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDdkUsQ0FBQztJQWFNLHVCQUFJLEdBQVg7UUFBWSxjQUFjO2FBQWQsVUFBYyxFQUFkLHFCQUFjLEVBQWQsSUFBYztZQUFkLHlCQUFjOztRQUN0QixJQUFJLElBQUksR0FBRyxTQUFTLENBQUMsSUFBSSxDQUFDO1FBQzFCLElBQUksSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksT0FBTyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssUUFBUSxFQUFFO1lBQ2hELElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxFQUFlLENBQUM7U0FDcEM7UUFDRCxJQUFJLE9BQU8sR0FBVyxJQUFJLENBQUMsQ0FBQyw4Q0FBOEM7UUFDMUUsSUFBSSxPQUEwQixDQUFDO1FBQy9CLElBQUksSUFBc0MsQ0FBQztRQUMzQyxJQUFJLFFBQXFCLENBQUM7UUFDMUIsSUFBSSxPQUFPLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxVQUFVLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksT0FBTyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssUUFBUSxJQUFJLE9BQU8sSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksS0FBSyxVQUFVLENBQUMsRUFBRTtZQUNqSCxJQUFJLE9BQU8sSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLFVBQVUsRUFBRTtnQkFDL0IsT0FBTyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUNyQjtpQkFBTTtnQkFDSCxRQUFRLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ3RCO1lBQ0QsSUFBSSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNsQjthQUFNO1lBQ0gsT0FBTyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNsQixPQUFPLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2xCLElBQUksR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDbEI7UUFDRCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztJQUN0RSxDQUFDO0lBRU8sMEJBQU8sR0FBZixVQUNJLElBQWUsRUFDZixPQUEyQixFQUMzQixPQUFzQyxFQUN0QyxRQUFpQyxFQUNqQyxJQUFrRCxFQUNsRCxJQUFhO1FBTmpCLGlCQXVFQztRQS9ERyxJQUFNLFNBQVMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdkUsSUFBSSxLQUFtQixDQUFDO1FBQ3hCLFFBQVEsSUFBSSxFQUFFO1lBQ1YsS0FBSyxTQUFTLENBQUMsSUFBSTtnQkFBRTtvQkFDakIsS0FBa0IsVUFBWSxFQUFaLEtBQUEsSUFBSSxDQUFDLE9BQU8sRUFBWixjQUFZLEVBQVosSUFBWSxFQUFFO3dCQUEzQixJQUFNLEdBQUcsU0FBQTt3QkFDVixJQUFJLEdBQUcsWUFBWSxzQkFBUyxFQUFFOzRCQUMxQixLQUFLLEdBQUcsR0FBRyxDQUFDO3lCQUNmO3FCQUNKO29CQUNELElBQUksQ0FBQyxLQUFLLEVBQUU7d0JBQ1IsS0FBSyxHQUFHLElBQUksc0JBQVMsRUFBSyxDQUFDO3dCQUMzQixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztxQkFDNUI7aUJBQ0o7Z0JBQUMsTUFBTTtZQUNSLEtBQUssU0FBUyxDQUFDLEtBQUs7Z0JBQUU7b0JBQ2xCLEtBQWtCLFVBQVksRUFBWixLQUFBLElBQUksQ0FBQyxPQUFPLEVBQVosY0FBWSxFQUFaLElBQVksRUFBRTt3QkFBM0IsSUFBTSxHQUFHLFNBQUE7d0JBQ1YsSUFBSSxHQUFHLFlBQVksd0JBQVUsSUFBSSx1QkFBYSxDQUFpQixHQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxFQUFFOzRCQUNoRixLQUFLLEdBQUcsR0FBRyxDQUFDO3lCQUNmO3FCQUNKO29CQUNELElBQUksQ0FBQyxLQUFLLEVBQUU7d0JBQ1IsS0FBSyxHQUFHLElBQUksd0JBQVUsQ0FBSSxJQUFJLENBQUMsQ0FBQzt3QkFDaEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7cUJBQzVCO2lCQUNKO2dCQUFDLE1BQU07WUFDUixLQUFLLFNBQVMsQ0FBQyxNQUFNO2dCQUFFO29CQUNuQixLQUFrQixVQUFZLEVBQVosS0FBQSxJQUFJLENBQUMsT0FBTyxFQUFaLGNBQVksRUFBWixJQUFZLEVBQUU7d0JBQTNCLElBQU0sR0FBRyxTQUFBO3dCQUNWLElBQUksR0FBRyxZQUFZLDBCQUFXLElBQUksdUJBQWEsQ0FBa0IsR0FBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsRUFBRTs0QkFDbEYsS0FBSyxHQUFHLEdBQUcsQ0FBQzt5QkFDZjtxQkFDSjtvQkFDRCxJQUFJLENBQUMsS0FBSyxFQUFFO3dCQUNSLEtBQUssR0FBRyxJQUFJLDBCQUFXLENBQUksSUFBSSxDQUFDLENBQUM7d0JBQ2pDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO3FCQUM1QjtpQkFDSjtnQkFBQyxNQUFNO1lBQ1I7Z0JBQ0ksTUFBTSxJQUFJLEtBQUssQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1NBQzVDO1FBQ0QsSUFBSSxRQUFvQixDQUFDO1FBQ3pCLElBQUksSUFBSSxFQUFFO1lBQ04sSUFBSSxRQUFRLEVBQUU7Z0JBQ1YsUUFBUSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7YUFDbkM7aUJBQU07Z0JBQ0gsUUFBUSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO2FBQzNDO1NBQ0o7YUFBTTtZQUNILElBQUksUUFBUSxFQUFFO2dCQUNWLFFBQVEsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2FBQ3JDO2lCQUFNO2dCQUNILFFBQVEsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQzthQUM3QztTQUNKO1FBQ0QsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLElBQUksU0FBUyxLQUFLLENBQUMsRUFBRTtZQUMxQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDaEM7UUFDRCxPQUFPO1lBQ0gsSUFBTSxTQUFTLEdBQUcsQ0FBQyxDQUFDLENBQUMsS0FBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsS0FBSSxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN0RSxRQUFRLEVBQUUsQ0FBQztZQUNYLElBQUksQ0FBQyxDQUFDLEtBQUksQ0FBQyxlQUFlLElBQUksU0FBUyxHQUFHLENBQUMsSUFBSSxLQUFJLENBQUMsYUFBYSxFQUFFLEtBQUssQ0FBQyxFQUFFO2dCQUN2RSxLQUFJLENBQUMsZUFBZSxDQUFDLElBQUksRUFBRSxDQUFDO2FBQy9CO1FBQ0wsQ0FBQyxDQUFDO0lBQ04sQ0FBQztJQUtNLDZCQUFVLEdBQWpCO1FBQWtCLGNBQWM7YUFBZCxVQUFjLEVBQWQscUJBQWMsRUFBZCxJQUFjO1lBQWQseUJBQWM7O1FBQzVCLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzdCLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFLTSwyQkFBUSxHQUFmO1FBQWdCLGNBQWM7YUFBZCxVQUFjLEVBQWQscUJBQWMsRUFBZCxJQUFjO1lBQWQseUJBQWM7O1FBQzFCLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzdCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFLTSw4QkFBVyxHQUFsQjtRQUFtQixjQUFjO2FBQWQsVUFBYyxFQUFkLHFCQUFjLEVBQWQsSUFBYztZQUFkLHlCQUFjOztRQUM3QixJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM5QixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBS00sNEJBQVMsR0FBaEI7UUFBaUIsY0FBYzthQUFkLFVBQWMsRUFBZCxxQkFBYyxFQUFkLElBQWM7WUFBZCx5QkFBYzs7UUFDM0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDOUIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUtNLCtCQUFZLEdBQW5CO1FBQW9CLGNBQWM7YUFBZCxVQUFjLEVBQWQscUJBQWMsRUFBZCxJQUFjO1lBQWQseUJBQWM7O1FBQzlCLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQy9CLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFLTSw2QkFBVSxHQUFqQjtRQUFrQixjQUFjO2FBQWQsVUFBYyxFQUFkLHFCQUFjLEVBQWQsSUFBYztZQUFkLHlCQUFjOztRQUM1QixJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMvQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBT0Q7O09BRUc7SUFDSSx5QkFBTSxHQUFiO1FBQWMsY0FBYzthQUFkLFVBQWMsRUFBZCxxQkFBYyxFQUFkLElBQWM7WUFBZCx5QkFBYzs7UUFDeEIsSUFBTSxTQUFTLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN0RSxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLEVBQUU7WUFDMUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7U0FDdkQ7UUFDRCxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsZUFBZSxJQUFJLFNBQVMsR0FBRyxDQUFDLElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRSxLQUFLLENBQUMsRUFBRTtZQUN2RSxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksRUFBRSxDQUFDO1NBQy9CO0lBQ0wsQ0FBQztJQUVEOztPQUVHO0lBQ0ksdUJBQUksR0FBWCxVQUFZLElBQU87UUFDZix3RUFBd0U7UUFDeEUsK0JBQStCO1FBQy9CLElBQU0sTUFBTSxHQUFtQixFQUFFLENBQUM7UUFDbEMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxFQUFFO1lBQzFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ2hDO1FBQ0QsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLEVBQUU7WUFDcEMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUN4QjtJQUNMLENBQUM7SUFFRDs7T0FFRztJQUNJLGdDQUFhLEdBQXBCO1FBQ0ksSUFBSSxNQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQ2YsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxFQUFFO1lBQzFDLE1BQU0sSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLGFBQWEsRUFBRSxDQUFDO1NBQzdDO1FBQ0QsT0FBTyxNQUFNLENBQUM7SUFDbEIsQ0FBQztJQUNMLGVBQUM7QUFBRCxDQUFDLEFBblFELElBbVFDO0FBblFZLDRCQUFRO0FBcVFyQjs7R0FFRztBQUNIO0lBQWtDLGdDQUFjO0lBQWhEOztJQVFBLENBQUM7SUFORzs7T0FFRztJQUNJLDJCQUFJLEdBQVg7UUFDSSxpQkFBTSxJQUFJLFlBQUMsU0FBUyxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUNMLG1CQUFDO0FBQUQsQ0FBQyxBQVJELENBQWtDLFFBQVEsR0FRekM7QUFSWSxvQ0FBWTtBQVV6Qjs7R0FFRztBQUNIO0lBQW1DLGlDQUFlO0lBQWxEOztJQVFBLENBQUM7SUFOVSw0QkFBSSxHQUFYLFVBQVksSUFBVztRQUNuQixJQUFJLElBQUksQ0FBQyxhQUFhLEVBQUUsS0FBSyxDQUFDLEVBQUU7WUFDNUIsTUFBTSxJQUFJLEtBQUssQ0FBQyw0REFBMEQsSUFBSSxDQUFDLE9BQVMsQ0FBQyxDQUFDO1NBQzdGO1FBQ0QsaUJBQU0sSUFBSSxZQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3JCLENBQUM7SUFDTCxvQkFBQztBQUFELENBQUMsQUFSRCxDQUFtQyxRQUFRLEdBUTFDO0FBUlksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgwqkgMjAxNSBSb2dpZXIgU2Nob3V0ZW48Z2l0aHViQHdvcmtpbmdjb2RlLm5pbmphPlxyXG4vLyBMaWNlbnNlOiBJU0NcclxuXHJcbid1c2Ugc3RyaWN0JztcclxuXHJcbmltcG9ydCB7c2hhbGxvd0VxdWFsc30gZnJvbSAnLi9vYmplY3RzJztcclxuXHJcbmltcG9ydCB7QmFzZUV2ZW50LCBQb3N0YWJsZSwgTGlzdGVuZXJ9IGZyb20gJy4vYmFzZS1ldmVudCc7XHJcbmltcG9ydCB7U3luY0V2ZW50fSBmcm9tICcuL3N5bmMtZXZlbnQnO1xyXG5pbXBvcnQge0FzeW5jRXZlbnQsIEFzeW5jRXZlbnRPcHRzfSBmcm9tICcuL2FzeW5jLWV2ZW50JztcclxuaW1wb3J0IHtRdWV1ZWRFdmVudCwgUXVldWVkRXZlbnRPcHRzfSBmcm9tICcuL3F1ZXVlZC1ldmVudCc7XHJcblxyXG5leHBvcnQgZW51bSBFdmVudFR5cGUge1xyXG4gICAgU3luYyxcclxuICAgIEFzeW5jLFxyXG4gICAgUXVldWVkXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQW55RXZlbnRPcHRzIHtcclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlIGV2dEZpcnN0QXR0YWNoZWQgYW5kIGV2dExhc3REZXRhY2hlZCBzbyB5b3UgY2FuIG1vbml0b3Igd2hlbiBzb21lb25lIGlzIHN1YnNjcmliZWRcclxuICAgICAqL1xyXG4gICAgbW9uaXRvckF0dGFjaD86IGJvb2xlYW47XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBBbiBldmVudCB0aGF0IGJlaGF2ZXMgbGlrZSBhIFN5bmMvQXN5bmMvUXVldWVkIGV2ZW50IGRlcGVuZGluZyBvbiBob3dcclxuICogeW91IHN1YnNjcmliZS5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBBbnlFdmVudDxUPiBpbXBsZW1lbnRzIFBvc3RhYmxlPFQ+IHtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRyaWdnZXJlZCB3aGVuZXZlciBzb21lb25lIGF0dGFjaGVzIGFuZCBub2JvZHkgd2FzIGF0dGFjaGVkLlxyXG4gICAgICogTm90ZTogeW91IG11c3QgY2FsbCB0aGUgY29uc3RydWN0b3Igd2l0aCBtb25pdG9yQXR0YWNoIHNldCB0byB0cnVlIHRvIGNyZWF0ZSB0aGlzIGV2ZW50IVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZXZ0Rmlyc3RBdHRhY2hlZDogVm9pZEFueUV2ZW50O1xyXG4gICAgLyoqXHJcbiAgICAgKiBUcmlnZ2VyZWQgd2hlbmV2ZXIgc29tZW9uZSBkZXRhY2hlcyBhbmQgbm9ib2R5IGlzIGF0dGFjaGVkIGFueW1vcmVcclxuICAgICAqIE5vdGU6IHlvdSBtdXN0IGNhbGwgdGhlIGNvbnN0cnVjdG9yIHdpdGggbW9uaXRvckF0dGFjaCBzZXQgdG8gdHJ1ZSB0byBjcmVhdGUgdGhpcyBldmVudCFcclxuICAgICAqL1xyXG4gICAgcHVibGljIGV2dExhc3REZXRhY2hlZDogVm9pZEFueUV2ZW50O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVW5kZXJseWluZyBldmVudCBpbXBsZW1lbnRhdGlvbnM7IG9uZSBmb3IgZXZlcnkgYXR0YWNoIHR5cGUgKyBvcHRzIGNvbWJpbmF0aW9uXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgX2V2ZW50czogQmFzZUV2ZW50PFQ+W10gPSBbXTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihvcHRzPzogQW55RXZlbnRPcHRzKSB7XHJcbiAgICAgICAgaWYgKG9wdHMgJiYgb3B0cy5tb25pdG9yQXR0YWNoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZXZ0Rmlyc3RBdHRhY2hlZCA9IG5ldyBWb2lkQW55RXZlbnQoKTtcclxuICAgICAgICAgICAgdGhpcy5ldnRMYXN0RGV0YWNoZWQgPSBuZXcgVm9pZEFueUV2ZW50KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogTGVnYWN5IG1ldGhvZFxyXG4gICAgICogc2FtZSBhcyBhdHRhY2hTeW5jL2F0dGFjaEFzeW5jL2F0dGFjaFF1ZXVlZDsgYmFzZWQgb24gdGhlIGdpdmVuIGVudW1cclxuICAgICAqIEBwYXJhbSBtb2RlIGRldGVybWluZXMgd2hldGhlciB0byBhdHRhY2ggc3luYy9hc3luYy9xdWV1ZWRcclxuICAgICAqL1xyXG4gICAgcHVibGljIGF0dGFjaChoYW5kbGVyOiAoZGF0YTogVCkgPT4gdm9pZCwgb3B0cz86IEFzeW5jRXZlbnRPcHRzIHwgUXVldWVkRXZlbnRPcHRzKTogKCkgPT4gdm9pZDtcclxuICAgIHB1YmxpYyBhdHRhY2goYm91bmRUbzogT2JqZWN0LCBoYW5kbGVyOiAoZGF0YTogVCkgPT4gdm9pZCwgb3B0cz86IEFzeW5jRXZlbnRPcHRzIHwgUXVldWVkRXZlbnRPcHRzKTogKCkgPT4gdm9pZDtcclxuICAgIHB1YmxpYyBhdHRhY2goZXZlbnQ6IFBvc3RhYmxlPFQ+LCBvcHRzPzogQXN5bmNFdmVudE9wdHMgfCBRdWV1ZWRFdmVudE9wdHMpOiAoKSA9PiB2b2lkO1xyXG4gICAgcHVibGljIGF0dGFjaChtb2RlOiBFdmVudFR5cGUsIGhhbmRsZXI6IChkYXRhOiBUKSA9PiB2b2lkLCBvcHRzPzogQXN5bmNFdmVudE9wdHMgfCBRdWV1ZWRFdmVudE9wdHMpOiAoKSA9PiB2b2lkO1xyXG4gICAgcHVibGljIGF0dGFjaChtb2RlOiBFdmVudFR5cGUsIGJvdW5kVG86IE9iamVjdCwgaGFuZGxlcjogKGRhdGE6IFQpID0+IHZvaWQsIG9wdHM/OiBBc3luY0V2ZW50T3B0cyB8IFF1ZXVlZEV2ZW50T3B0cyk6ICgpID0+IHZvaWQ7XHJcbiAgICBwdWJsaWMgYXR0YWNoKG1vZGU6IEV2ZW50VHlwZSwgZXZlbnQ6IFBvc3RhYmxlPFQ+LCBvcHRzPzogQXN5bmNFdmVudE9wdHMgfCBRdWV1ZWRFdmVudE9wdHMpOiAoKSA9PiB2b2lkO1xyXG4gICAgcHVibGljIGF0dGFjaCguLi5hcmdzOiBhbnlbXSk6ICgpID0+IHZvaWQge1xyXG4gICAgICAgIGxldCBtb2RlID0gRXZlbnRUeXBlLlN5bmM7XHJcbiAgICAgICAgaWYgKGFyZ3MubGVuZ3RoID4gMCAmJiB0eXBlb2YgYXJnc1swXSA9PT0gJ251bWJlcicpIHtcclxuICAgICAgICAgICAgbW9kZSA9IGFyZ3Muc2hpZnQoKSBhcyBFdmVudFR5cGU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBib3VuZFRvOiBPYmplY3QgPSB0aGlzOyAvLyBhZGQgb3Vyc2VsdmVzIGFzIGRlZmF1bHQgJ2JvdW5kVG8nIGFyZ3VtZW50XHJcbiAgICAgICAgbGV0IGhhbmRsZXI6IChkYXRhOiBUKSA9PiB2b2lkO1xyXG4gICAgICAgIGxldCBvcHRzOiBBc3luY0V2ZW50T3B0cyB8IFF1ZXVlZEV2ZW50T3B0cztcclxuICAgICAgICBsZXQgcG9zdGFibGU6IFBvc3RhYmxlPFQ+O1xyXG4gICAgICAgIGlmICh0eXBlb2YgYXJnc1swXSA9PT0gJ2Z1bmN0aW9uJyB8fCAoYXJnc1swXSAmJiB0eXBlb2YgYXJnc1swXSA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIGFyZ3NbMF0ucG9zdCA9PT0gJ2Z1bmN0aW9uJykpIHtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBhcmdzWzBdID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgICAgICBoYW5kbGVyID0gYXJnc1swXTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHBvc3RhYmxlID0gYXJnc1swXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvcHRzID0gYXJnc1sxXTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBib3VuZFRvID0gYXJnc1swXTtcclxuICAgICAgICAgICAgaGFuZGxlciA9IGFyZ3NbMV07XHJcbiAgICAgICAgICAgIG9wdHMgPSBhcmdzWzJdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5fYXR0YWNoKG1vZGUsIGJvdW5kVG8sIGhhbmRsZXIsIHBvc3RhYmxlLCBvcHRzLCBmYWxzZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBMZWdhY3kgbWV0aG9kXHJcbiAgICAgKiBzYW1lIGFzIG9uY2VTeW5jL29uY2VBc3luYy9vbmNlUXVldWVkOyBiYXNlZCBvbiB0aGUgZ2l2ZW4gZW51bVxyXG4gICAgICogQHBhcmFtIG1vZGUgZGV0ZXJtaW5lcyB3aGV0aGVyIHRvIG9uY2Ugc3luYy9hc3luYy9xdWV1ZWRcclxuICAgICAqL1xyXG4gICAgcHVibGljIG9uY2UoaGFuZGxlcjogKGRhdGE6IFQpID0+IHZvaWQsIG9wdHM/OiBBc3luY0V2ZW50T3B0cyB8IFF1ZXVlZEV2ZW50T3B0cyk6ICgpID0+IHZvaWQ7XHJcbiAgICBwdWJsaWMgb25jZShib3VuZFRvOiBPYmplY3QsIGhhbmRsZXI6IChkYXRhOiBUKSA9PiB2b2lkLCBvcHRzPzogQXN5bmNFdmVudE9wdHMgfCBRdWV1ZWRFdmVudE9wdHMpOiAoKSA9PiB2b2lkO1xyXG4gICAgcHVibGljIG9uY2UoZXZlbnQ6IFBvc3RhYmxlPFQ+LCBvcHRzPzogQXN5bmNFdmVudE9wdHMgfCBRdWV1ZWRFdmVudE9wdHMpOiAoKSA9PiB2b2lkO1xyXG4gICAgcHVibGljIG9uY2UobW9kZTogRXZlbnRUeXBlLCBoYW5kbGVyOiAoZGF0YTogVCkgPT4gdm9pZCwgb3B0cz86IEFzeW5jRXZlbnRPcHRzIHwgUXVldWVkRXZlbnRPcHRzKTogKCkgPT4gdm9pZDtcclxuICAgIHB1YmxpYyBvbmNlKG1vZGU6IEV2ZW50VHlwZSwgYm91bmRUbzogT2JqZWN0LCBoYW5kbGVyOiAoZGF0YTogVCkgPT4gdm9pZCwgb3B0cz86IEFzeW5jRXZlbnRPcHRzIHwgUXVldWVkRXZlbnRPcHRzKTogKCkgPT4gdm9pZDtcclxuICAgIHB1YmxpYyBvbmNlKG1vZGU6IEV2ZW50VHlwZSwgZXZlbnQ6IFBvc3RhYmxlPFQ+LCBvcHRzPzogQXN5bmNFdmVudE9wdHMgfCBRdWV1ZWRFdmVudE9wdHMpOiAoKSA9PiB2b2lkO1xyXG4gICAgcHVibGljIG9uY2UoLi4uYXJnczogYW55W10pOiAoKSA9PiB2b2lkIHtcclxuICAgICAgICBsZXQgbW9kZSA9IEV2ZW50VHlwZS5TeW5jO1xyXG4gICAgICAgIGlmIChhcmdzLmxlbmd0aCA+IDAgJiYgdHlwZW9mIGFyZ3NbMF0gPT09ICdudW1iZXInKSB7XHJcbiAgICAgICAgICAgIG1vZGUgPSBhcmdzLnNoaWZ0KCkgYXMgRXZlbnRUeXBlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgYm91bmRUbzogT2JqZWN0ID0gdGhpczsgLy8gYWRkIG91cnNlbHZlcyBhcyBkZWZhdWx0ICdib3VuZFRvJyBhcmd1bWVudFxyXG4gICAgICAgIGxldCBoYW5kbGVyOiAoZGF0YTogVCkgPT4gdm9pZDtcclxuICAgICAgICBsZXQgb3B0czogQXN5bmNFdmVudE9wdHMgfCBRdWV1ZWRFdmVudE9wdHM7XHJcbiAgICAgICAgbGV0IHBvc3RhYmxlOiBQb3N0YWJsZTxUPjtcclxuICAgICAgICBpZiAodHlwZW9mIGFyZ3NbMF0gPT09ICdmdW5jdGlvbicgfHwgKGFyZ3NbMF0gJiYgdHlwZW9mIGFyZ3NbMF0gPT09ICdvYmplY3QnICYmIHR5cGVvZiBhcmdzWzBdLnBvc3QgPT09ICdmdW5jdGlvbicpKSB7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgYXJnc1swXSA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICAgICAgaGFuZGxlciA9IGFyZ3NbMF07XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBwb3N0YWJsZSA9IGFyZ3NbMF07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3B0cyA9IGFyZ3NbMV07XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgYm91bmRUbyA9IGFyZ3NbMF07XHJcbiAgICAgICAgICAgIGhhbmRsZXIgPSBhcmdzWzFdO1xyXG4gICAgICAgICAgICBvcHRzID0gYXJnc1syXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2F0dGFjaChtb2RlLCBib3VuZFRvLCBoYW5kbGVyLCBwb3N0YWJsZSwgb3B0cywgdHJ1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfYXR0YWNoKFxyXG4gICAgICAgIG1vZGU6IEV2ZW50VHlwZSxcclxuICAgICAgICBib3VuZFRvOiBPYmplY3QgfCB1bmRlZmluZWQsXHJcbiAgICAgICAgaGFuZGxlcjogKGRhdGE6IFQpID0+IHZvaWQgfCB1bmRlZmluZWQsXHJcbiAgICAgICAgcG9zdGFibGU6IFBvc3RhYmxlPFQ+IHwgdW5kZWZpbmVkLFxyXG4gICAgICAgIG9wdHM6IEFzeW5jRXZlbnRPcHRzIHwgUXVldWVkRXZlbnRPcHRzIHwgdW5kZWZpbmVkLFxyXG4gICAgICAgIG9uY2U6IGJvb2xlYW5cclxuICAgICk6ICgpID0+IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IHByZXZDb3VudCA9ICghIXRoaXMuZXZ0Rmlyc3RBdHRhY2hlZCA/IHRoaXMubGlzdGVuZXJDb3VudCgpIDogMCk7XHJcbiAgICAgICAgbGV0IGV2ZW50OiBCYXNlRXZlbnQ8VD47XHJcbiAgICAgICAgc3dpdGNoIChtb2RlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgRXZlbnRUeXBlLlN5bmM6IHtcclxuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgZXZ0IG9mIHRoaXMuX2V2ZW50cykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChldnQgaW5zdGFuY2VvZiBTeW5jRXZlbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQgPSBldnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKCFldmVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50ID0gbmV3IFN5bmNFdmVudDxUPigpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2V2ZW50cy5wdXNoKGV2ZW50KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBFdmVudFR5cGUuQXN5bmM6IHtcclxuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgZXZ0IG9mIHRoaXMuX2V2ZW50cykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChldnQgaW5zdGFuY2VvZiBBc3luY0V2ZW50ICYmIHNoYWxsb3dFcXVhbHMoKDxBc3luY0V2ZW50PFQ+PmV2dCkub3B0aW9ucywgb3B0cykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQgPSBldnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKCFldmVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50ID0gbmV3IEFzeW5jRXZlbnQ8VD4ob3B0cyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZXZlbnRzLnB1c2goZXZlbnQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEV2ZW50VHlwZS5RdWV1ZWQ6IHtcclxuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgZXZ0IG9mIHRoaXMuX2V2ZW50cykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChldnQgaW5zdGFuY2VvZiBRdWV1ZWRFdmVudCAmJiBzaGFsbG93RXF1YWxzKCg8UXVldWVkRXZlbnQ8VD4+ZXZ0KS5vcHRpb25zLCBvcHRzKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBldmVudCA9IGV2dDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoIWV2ZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQgPSBuZXcgUXVldWVkRXZlbnQ8VD4ob3B0cyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZXZlbnRzLnB1c2goZXZlbnQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCd1bmtub3duIEV2ZW50VHlwZScpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgZGV0YWNoZXI6ICgpID0+IHZvaWQ7XHJcbiAgICAgICAgaWYgKG9uY2UpIHtcclxuICAgICAgICAgICAgaWYgKHBvc3RhYmxlKSB7XHJcbiAgICAgICAgICAgICAgICBkZXRhY2hlciA9IGV2ZW50Lm9uY2UocG9zdGFibGUpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZGV0YWNoZXIgPSBldmVudC5vbmNlKGJvdW5kVG8sIGhhbmRsZXIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKHBvc3RhYmxlKSB7XHJcbiAgICAgICAgICAgICAgICBkZXRhY2hlciA9IGV2ZW50LmF0dGFjaChwb3N0YWJsZSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBkZXRhY2hlciA9IGV2ZW50LmF0dGFjaChib3VuZFRvLCBoYW5kbGVyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5ldnRGaXJzdEF0dGFjaGVkICYmIHByZXZDb3VudCA9PT0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLmV2dEZpcnN0QXR0YWNoZWQucG9zdCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gKCk6IHZvaWQgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBwcmV2Q291bnQgPSAoISF0aGlzLmV2dExhc3REZXRhY2hlZCA/IHRoaXMubGlzdGVuZXJDb3VudCgpIDogMCk7XHJcbiAgICAgICAgICAgIGRldGFjaGVyKCk7XHJcbiAgICAgICAgICAgIGlmICghIXRoaXMuZXZ0TGFzdERldGFjaGVkICYmIHByZXZDb3VudCA+IDAgJiYgdGhpcy5saXN0ZW5lckNvdW50KCkgPT09IDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZXZ0TGFzdERldGFjaGVkLnBvc3QoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGF0dGFjaFN5bmMoaGFuZGxlcjogKGRhdGE6IFQpID0+IHZvaWQpOiAoKSA9PiB2b2lkO1xyXG4gICAgcHVibGljIGF0dGFjaFN5bmMoYm91bmRUbzogT2JqZWN0LCBoYW5kbGVyOiAoZGF0YTogVCkgPT4gdm9pZCk6ICgpID0+IHZvaWQ7XHJcbiAgICBwdWJsaWMgYXR0YWNoU3luYyhldmVudDogUG9zdGFibGU8VD4pOiAoKSA9PiB2b2lkO1xyXG4gICAgcHVibGljIGF0dGFjaFN5bmMoLi4uYXJnczogYW55W10pOiAoKSA9PiB2b2lkIHtcclxuICAgICAgICBhcmdzLnVuc2hpZnQoRXZlbnRUeXBlLlN5bmMpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmF0dGFjaC5hcHBseSh0aGlzLCBhcmdzKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb25jZVN5bmMoaGFuZGxlcjogKGRhdGE6IFQpID0+IHZvaWQpOiAoKSA9PiB2b2lkO1xyXG4gICAgcHVibGljIG9uY2VTeW5jKGJvdW5kVG86IE9iamVjdCwgaGFuZGxlcjogKGRhdGE6IFQpID0+IHZvaWQpOiAoKSA9PiB2b2lkO1xyXG4gICAgcHVibGljIG9uY2VTeW5jKGV2ZW50OiBQb3N0YWJsZTxUPik6ICgpID0+IHZvaWQ7XHJcbiAgICBwdWJsaWMgb25jZVN5bmMoLi4uYXJnczogYW55W10pOiAoKSA9PiB2b2lkIHtcclxuICAgICAgICBhcmdzLnVuc2hpZnQoRXZlbnRUeXBlLlN5bmMpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLm9uY2UuYXBwbHkodGhpcywgYXJncyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGF0dGFjaEFzeW5jKGhhbmRsZXI6IChkYXRhOiBUKSA9PiB2b2lkLCBvcHRzPzogQXN5bmNFdmVudE9wdHMpOiAoKSA9PiB2b2lkO1xyXG4gICAgcHVibGljIGF0dGFjaEFzeW5jKGJvdW5kVG86IE9iamVjdCwgaGFuZGxlcjogKGRhdGE6IFQpID0+IHZvaWQsIG9wdHM/OiBBc3luY0V2ZW50T3B0cyk6ICgpID0+IHZvaWQ7XHJcbiAgICBwdWJsaWMgYXR0YWNoQXN5bmMoZXZlbnQ6IFBvc3RhYmxlPFQ+LCBvcHRzPzogQXN5bmNFdmVudE9wdHMpOiAoKSA9PiB2b2lkO1xyXG4gICAgcHVibGljIGF0dGFjaEFzeW5jKC4uLmFyZ3M6IGFueVtdKTogKCkgPT4gdm9pZCB7XHJcbiAgICAgICAgYXJncy51bnNoaWZ0KEV2ZW50VHlwZS5Bc3luYyk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYXR0YWNoLmFwcGx5KHRoaXMsIGFyZ3MpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvbmNlQXN5bmMoaGFuZGxlcjogKGRhdGE6IFQpID0+IHZvaWQsIG9wdHM/OiBBc3luY0V2ZW50T3B0cyk6ICgpID0+IHZvaWQ7XHJcbiAgICBwdWJsaWMgb25jZUFzeW5jKGJvdW5kVG86IE9iamVjdCwgaGFuZGxlcjogKGRhdGE6IFQpID0+IHZvaWQsIG9wdHM/OiBBc3luY0V2ZW50T3B0cyk6ICgpID0+IHZvaWQ7XHJcbiAgICBwdWJsaWMgb25jZUFzeW5jKGV2ZW50OiBQb3N0YWJsZTxUPiwgb3B0cz86IEFzeW5jRXZlbnRPcHRzKTogKCkgPT4gdm9pZDtcclxuICAgIHB1YmxpYyBvbmNlQXN5bmMoLi4uYXJnczogYW55W10pOiAoKSA9PiB2b2lkIHtcclxuICAgICAgICBhcmdzLnVuc2hpZnQoRXZlbnRUeXBlLkFzeW5jKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5vbmNlLmFwcGx5KHRoaXMsIGFyZ3MpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhdHRhY2hRdWV1ZWQoaGFuZGxlcjogKGRhdGE6IFQpID0+IHZvaWQsIG9wdHM/OiBRdWV1ZWRFdmVudE9wdHMpOiAoKSA9PiB2b2lkO1xyXG4gICAgcHVibGljIGF0dGFjaFF1ZXVlZChib3VuZFRvOiBPYmplY3QsIGhhbmRsZXI6IChkYXRhOiBUKSA9PiB2b2lkLCBvcHRzPzogUXVldWVkRXZlbnRPcHRzKTogKCkgPT4gdm9pZDtcclxuICAgIHB1YmxpYyBhdHRhY2hRdWV1ZWQoZXZlbnQ6IFBvc3RhYmxlPFQ+LCBvcHRzPzogUXVldWVkRXZlbnRPcHRzKTogKCkgPT4gdm9pZDtcclxuICAgIHB1YmxpYyBhdHRhY2hRdWV1ZWQoLi4uYXJnczogYW55W10pOiAoKSA9PiB2b2lkIHtcclxuICAgICAgICBhcmdzLnVuc2hpZnQoRXZlbnRUeXBlLlF1ZXVlZCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYXR0YWNoLmFwcGx5KHRoaXMsIGFyZ3MpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvbmNlUXVldWVkKGhhbmRsZXI6IChkYXRhOiBUKSA9PiB2b2lkLCBvcHRzPzogUXVldWVkRXZlbnRPcHRzKTogKCkgPT4gdm9pZDtcclxuICAgIHB1YmxpYyBvbmNlUXVldWVkKGJvdW5kVG86IE9iamVjdCwgaGFuZGxlcjogKGRhdGE6IFQpID0+IHZvaWQsIG9wdHM/OiBRdWV1ZWRFdmVudE9wdHMpOiAoKSA9PiB2b2lkO1xyXG4gICAgcHVibGljIG9uY2VRdWV1ZWQoZXZlbnQ6IFBvc3RhYmxlPFQ+LCBvcHRzPzogUXVldWVkRXZlbnRPcHRzKTogKCkgPT4gdm9pZDtcclxuICAgIHB1YmxpYyBvbmNlUXVldWVkKC4uLmFyZ3M6IGFueVtdKTogKCkgPT4gdm9pZCB7XHJcbiAgICAgICAgYXJncy51bnNoaWZ0KEV2ZW50VHlwZS5RdWV1ZWQpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLm9uY2UuYXBwbHkodGhpcywgYXJncyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGRldGFjaChoYW5kbGVyOiAoZGF0YTogVCkgPT4gdm9pZCk6IHZvaWQ7XHJcbiAgICBwdWJsaWMgZGV0YWNoKGJvdW5kVG86IE9iamVjdCwgaGFuZGxlcjogKGRhdGE6IFQpID0+IHZvaWQpOiB2b2lkO1xyXG4gICAgcHVibGljIGRldGFjaChib3VuZFRvOiBPYmplY3QpOiB2b2lkO1xyXG4gICAgcHVibGljIGRldGFjaChldmVudDogUG9zdGFibGU8VD4pOiB2b2lkO1xyXG4gICAgcHVibGljIGRldGFjaCgpOiB2b2lkO1xyXG4gICAgLyoqXHJcbiAgICAgKiBEZXRhY2ggZXZlbnQgaGFuZGxlcnMgcmVnYXJkbGVzcyBvZiB0eXBlXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBkZXRhY2goLi4uYXJnczogYW55W10pOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBwcmV2Q291bnQgPSAoISF0aGlzLmV2dExhc3REZXRhY2hlZCA/IHRoaXMubGlzdGVuZXJDb3VudCgpIDogMCk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl9ldmVudHMubGVuZ3RoOyArK2kpIHtcclxuICAgICAgICAgICAgdGhpcy5fZXZlbnRzW2ldLmRldGFjaC5hcHBseSh0aGlzLl9ldmVudHNbaV0sIGFyZ3MpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoISF0aGlzLmV2dExhc3REZXRhY2hlZCAmJiBwcmV2Q291bnQgPiAwICYmIHRoaXMubGlzdGVuZXJDb3VudCgpID09PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZXZ0TGFzdERldGFjaGVkLnBvc3QoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBQb3N0IGFuIGV2ZW50IHRvIGFsbCBjdXJyZW50IGxpc3RlbmVyc1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgcG9zdChkYXRhOiBUKTogdm9pZCB7XHJcbiAgICAgICAgLy8gbWFrZSBhIGNvcHkgb2YgdGhlIGFycmF5IGZpcnN0IHRvIGNvdmVyIHRoZSBjYXNlIHdoZXJlIGV2ZW50IGhhbmRsZXJzXHJcbiAgICAgICAgLy8gYXJlIGF0dGFjaGVkIGR1cmluZyB0aGUgcG9zdFxyXG4gICAgICAgIGNvbnN0IGV2ZW50czogQmFzZUV2ZW50PFQ+W10gPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuX2V2ZW50cy5sZW5ndGg7ICsraSkge1xyXG4gICAgICAgICAgICBldmVudHMucHVzaCh0aGlzLl9ldmVudHNbaV0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGV2ZW50cy5sZW5ndGg7ICsraSkge1xyXG4gICAgICAgICAgICBldmVudHNbaV0ucG9zdChkYXRhKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgbnVtYmVyIG9mIGF0dGFjaGVkIGxpc3RlbmVyc1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgbGlzdGVuZXJDb3VudCgpOiBudW1iZXIge1xyXG4gICAgICAgIGxldCByZXN1bHQgPSAwO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5fZXZlbnRzLmxlbmd0aDsgKytpKSB7XHJcbiAgICAgICAgICAgIHJlc3VsdCArPSB0aGlzLl9ldmVudHNbaV0ubGlzdGVuZXJDb3VudCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICogQ29udmVuaWVuY2UgY2xhc3MgZm9yIEFueUV2ZW50cyB3aXRob3V0IGRhdGFcclxuICovXHJcbmV4cG9ydCBjbGFzcyBWb2lkQW55RXZlbnQgZXh0ZW5kcyBBbnlFdmVudDx2b2lkPiB7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZW5kIHRoZSBBc3luY0V2ZW50LlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgcG9zdCgpOiB2b2lkIHtcclxuICAgICAgICBzdXBlci5wb3N0KHVuZGVmaW5lZCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBTaW1pbGFyIHRvICdlcnJvcicgZXZlbnQgb24gRXZlbnRFbWl0dGVyOiB0aHJvd3Mgd2hlbiBhIHBvc3QoKSBvY2N1cnMgd2hpbGUgbm8gaGFuZGxlcnMgc2V0LlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEVycm9yQW55RXZlbnQgZXh0ZW5kcyBBbnlFdmVudDxFcnJvcj4ge1xyXG5cclxuICAgIHB1YmxpYyBwb3N0KGRhdGE6IEVycm9yKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMubGlzdGVuZXJDb3VudCgpID09PSAwKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgZXJyb3IgZXZlbnQgcG9zdGVkIHdoaWxlIG5vIGxpc3RlbmVycyBhdHRhY2hlZC4gRXJyb3I6ICR7ZGF0YS5tZXNzYWdlfWApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzdXBlci5wb3N0KGRhdGEpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==

/***/ }),

/***/ "./node_modules/ts-events/dist/lib/async-event.js":
/*!********************************************************!*\
  !*** ./node_modules/ts-events/dist/lib/async-event.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(setImmediate) {// Copyright © 2015 Rogier Schouten<github@workingcode.ninja>
// License: ISC

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var base_event_1 = __webpack_require__(/*! ./base-event */ "./node_modules/ts-events/dist/lib/base-event.js");
/**
 * A-synchronous event. Handlers are called in the next Node.JS cycle.
 * - Optionally condenses multiple post() calls into one (the last post() gets through)
 * - Handlers are called only for events posted after they were attached.
 * - Handlers are not called anymore when they are detached, even if a post() is in progress
 */
var AsyncEvent = /** @class */ (function (_super) {
    __extends(AsyncEvent, _super);
    /**
     * Constructor
     * @param opts Optional. Various settings:
     *             - condensed: a Boolean indicating whether to condense multiple post() calls within the same cycle.
     */
    function AsyncEvent(opts) {
        var _this = _super.call(this) || this;
        _this._queued = false;
        _this.options = opts;
        var options = opts || {};
        if (typeof options.condensed === 'boolean') {
            _this._condensed = options.condensed;
        }
        else {
            _this._condensed = false;
        }
        return _this;
    }
    /**
     * The default scheduler uses setImmediate() or setTimeout(..., 0) if setImmediate is not available.
     */
    AsyncEvent.defaultScheduler = function (callback) {
        /* istanbul ignore else  */
        if (typeof window !== 'undefined') {
            // browsers don't always support setImmediate()
            setTimeout(callback, 0);
        }
        else {
            // node.js
            setImmediate(callback);
        }
    };
    /**
     * By default, AsyncEvent uses setImmediate() to schedule event handler invocation.
     * You can change this for e.g. setTimeout(..., 0) by calling this static method once.
     * @param scheduler A function that takes a callback and executes it in the next Node.JS cycle.
     */
    AsyncEvent.setScheduler = function (scheduler) {
        AsyncEvent._scheduler = scheduler;
    };
    AsyncEvent.prototype.post = function () {
        var _this = this;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (!this._listeners || this._listeners.length === 0) {
            return;
        }
        if (this._condensed) {
            this._queuedData = args;
            this._queuedListeners = this._listeners;
            if (this._queued) {
                return;
            }
            else {
                this._queued = true;
                AsyncEvent._scheduler(function () {
                    // immediately mark non-queued to allow new AsyncEvent to happen as result
                    // of calling handlers
                    _this._queued = false;
                    // cache listeners and data because they might change while calling event handlers
                    var data = _this._queuedData;
                    var listeners = _this._queuedListeners;
                    for (var i = 0; i < listeners.length; ++i) {
                        var listener = listeners[i];
                        _this._call(listener, data);
                    }
                });
            }
        }
        else { // not condensed
            var listeners_1 = this._listeners;
            AsyncEvent._scheduler(function () {
                for (var i = 0; i < listeners_1.length; ++i) {
                    var listener = listeners_1[i];
                    _this._call(listener, args);
                }
            });
        }
    };
    // inherited
    AsyncEvent.prototype._call = function (listener, args) {
        // performance optimization: don't use consecutive nodejs cycles
        // for asyncevents attached to asyncevents
        if (listener.event && listener.event instanceof AsyncEvent) {
            listener.event._postDirect(args);
        }
        else {
            _super.prototype._call.call(this, listener, args);
        }
    };
    /**
     * Performance optimization: if this async signal is attached to another
     * async signal, we're already a the next cycle and we can call listeners
     * directly
     */
    AsyncEvent.prototype._postDirect = function (args) {
        if (!this._listeners || this._listeners.length === 0) {
            return;
        }
        // copy a reference to the array because this._listeners might be replaced during
        // the handler calls
        var listeners = this._listeners;
        for (var i = 0; i < listeners.length; ++i) {
            var listener = listeners[i];
            this._call(listener, args);
        }
    };
    /**
     * The current scheduler
     */
    AsyncEvent._scheduler = AsyncEvent.defaultScheduler;
    return AsyncEvent;
}(base_event_1.BaseEvent));
exports.AsyncEvent = AsyncEvent;
/**
 * Convenience class for AsyncEvents without data
 */
var VoidAsyncEvent = /** @class */ (function (_super) {
    __extends(VoidAsyncEvent, _super);
    function VoidAsyncEvent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Send the AsyncEvent.
     */
    VoidAsyncEvent.prototype.post = function () {
        _super.prototype.post.call(this, undefined);
    };
    return VoidAsyncEvent;
}(AsyncEvent));
exports.VoidAsyncEvent = VoidAsyncEvent;
/**
 * Similar to 'error' event on EventEmitter: throws when a post() occurs while no handlers set.
 */
var ErrorAsyncEvent = /** @class */ (function (_super) {
    __extends(ErrorAsyncEvent, _super);
    function ErrorAsyncEvent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ErrorAsyncEvent.prototype.post = function (data) {
        if (this.listenerCount() === 0) {
            throw new Error("error event posted while no listeners attached. Error: " + data.message);
        }
        _super.prototype.post.call(this, data);
    };
    return ErrorAsyncEvent;
}(AsyncEvent));
exports.ErrorAsyncEvent = ErrorAsyncEvent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXN5bmMtZXZlbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvbGliL2FzeW5jLWV2ZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDZEQUE2RDtBQUM3RCxlQUFlO0FBRWYsWUFBWSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUFFYiwyQ0FBMkQ7QUFhM0Q7Ozs7O0dBS0c7QUFDSDtJQUFtQyw4QkFBWTtJQXdDM0M7Ozs7T0FJRztJQUNILG9CQUFZLElBQXFCO1FBQWpDLFlBQ0ksaUJBQU8sU0FRVjtRQTlDTyxhQUFPLEdBQVksS0FBSyxDQUFDO1FBdUM3QixLQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUNwQixJQUFNLE9BQU8sR0FBbUIsSUFBSSxJQUFJLEVBQUUsQ0FBQztRQUMzQyxJQUFJLE9BQU8sT0FBTyxDQUFDLFNBQVMsS0FBSyxTQUFTLEVBQUU7WUFDeEMsS0FBSSxDQUFDLFVBQVUsR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDO1NBQ3ZDO2FBQU07WUFDSCxLQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztTQUMzQjs7SUFDTCxDQUFDO0lBMUNEOztPQUVHO0lBQ1csMkJBQWdCLEdBQTlCLFVBQStCLFFBQW9CO1FBQy9DLDJCQUEyQjtRQUMzQixJQUFJLE9BQU8sTUFBTSxLQUFLLFdBQVcsRUFBRTtZQUMvQiwrQ0FBK0M7WUFDL0MsVUFBVSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQztTQUMzQjthQUFNO1lBQ0gsVUFBVTtZQUNWLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUMxQjtJQUNMLENBQUM7SUFPRDs7OztPQUlHO0lBQ1csdUJBQVksR0FBMUIsVUFBMkIsU0FBeUM7UUFDaEUsVUFBVSxDQUFDLFVBQVUsR0FBRyxTQUFTLENBQUM7SUFDdEMsQ0FBQztJQXNCTSx5QkFBSSxHQUFYO1FBQUEsaUJBaUNDO1FBakNXLGNBQWM7YUFBZCxVQUFjLEVBQWQscUJBQWMsRUFBZCxJQUFjO1lBQWQseUJBQWM7O1FBQ3RCLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtZQUNsRCxPQUFPO1NBQ1Y7UUFDRCxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDakIsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7WUFDeEIsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7WUFDeEMsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO2dCQUNkLE9BQU87YUFDVjtpQkFBTTtnQkFDSCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztnQkFDcEIsVUFBVSxDQUFDLFVBQVUsQ0FBQztvQkFDbEIsMEVBQTBFO29CQUMxRSxzQkFBc0I7b0JBQ3RCLEtBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO29CQUNyQixrRkFBa0Y7b0JBQ2xGLElBQU0sSUFBSSxHQUFHLEtBQUksQ0FBQyxXQUFXLENBQUM7b0JBQzlCLElBQU0sU0FBUyxHQUFHLEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQztvQkFDeEMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLEVBQUU7d0JBQ3ZDLElBQU0sUUFBUSxHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDOUIsS0FBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUM7cUJBQzlCO2dCQUNMLENBQUMsQ0FBQyxDQUFDO2FBQ047U0FDSjthQUFNLEVBQUUsZ0JBQWdCO1lBQ3JCLElBQU0sV0FBUyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7WUFDbEMsVUFBVSxDQUFDLFVBQVUsQ0FBQztnQkFDbEIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFdBQVMsQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLEVBQUU7b0JBQ3ZDLElBQU0sUUFBUSxHQUFHLFdBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDOUIsS0FBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUM7aUJBQzlCO1lBQ0wsQ0FBQyxDQUFDLENBQUM7U0FDTjtJQUNMLENBQUM7SUFFRCxZQUFZO0lBQ0YsMEJBQUssR0FBZixVQUFnQixRQUFxQixFQUFFLElBQVc7UUFDOUMsZ0VBQWdFO1FBQ2hFLDBDQUEwQztRQUMxQyxJQUFJLFFBQVEsQ0FBQyxLQUFLLElBQUksUUFBUSxDQUFDLEtBQUssWUFBWSxVQUFVLEVBQUU7WUFDeEMsUUFBUSxDQUFDLEtBQU0sQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDckQ7YUFBTTtZQUNILGlCQUFNLEtBQUssWUFBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUM7U0FDL0I7SUFDTCxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNPLGdDQUFXLEdBQXJCLFVBQXNCLElBQVc7UUFDN0IsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1lBQ2xELE9BQU87U0FDVjtRQUNELGlGQUFpRjtRQUNqRixvQkFBb0I7UUFDcEIsSUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUNsQyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsU0FBUyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsRUFBRTtZQUN2QyxJQUFNLFFBQVEsR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDOUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUM7U0FDOUI7SUFDTCxDQUFDO0lBaEdEOztPQUVHO0lBQ1kscUJBQVUsR0FBbUMsVUFBVSxDQUFDLGdCQUFnQixDQUFDO0lBOEY1RixpQkFBQztDQUFBLEFBM0hELENBQW1DLHNCQUFTLEdBMkgzQztBQTNIWSxnQ0FBVTtBQTZIdkI7O0dBRUc7QUFDSDtJQUFvQyxrQ0FBZ0I7SUFBcEQ7O0lBUUEsQ0FBQztJQU5HOztPQUVHO0lBQ0ksNkJBQUksR0FBWDtRQUNJLGlCQUFNLElBQUksWUFBQyxTQUFTLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBQ0wscUJBQUM7QUFBRCxDQUFDLEFBUkQsQ0FBb0MsVUFBVSxHQVE3QztBQVJZLHdDQUFjO0FBVTNCOztHQUVHO0FBQ0g7SUFBcUMsbUNBQWlCO0lBQXREOztJQVFBLENBQUM7SUFOVSw4QkFBSSxHQUFYLFVBQVksSUFBVztRQUNuQixJQUFJLElBQUksQ0FBQyxhQUFhLEVBQUUsS0FBSyxDQUFDLEVBQUU7WUFDNUIsTUFBTSxJQUFJLEtBQUssQ0FBQyw0REFBMEQsSUFBSSxDQUFDLE9BQVMsQ0FBQyxDQUFDO1NBQzdGO1FBQ0QsaUJBQU0sSUFBSSxZQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3JCLENBQUM7SUFDTCxzQkFBQztBQUFELENBQUMsQUFSRCxDQUFxQyxVQUFVLEdBUTlDO0FBUlksMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgwqkgMjAxNSBSb2dpZXIgU2Nob3V0ZW48Z2l0aHViQHdvcmtpbmdjb2RlLm5pbmphPlxyXG4vLyBMaWNlbnNlOiBJU0NcclxuXHJcbid1c2Ugc3RyaWN0JztcclxuXHJcbmltcG9ydCB7QmFzZUV2ZW50LCBQb3N0YWJsZSwgTGlzdGVuZXJ9IGZyb20gJy4vYmFzZS1ldmVudCc7XHJcblxyXG4vKipcclxuICogT3B0aW9ucyBmb3IgdGhlIEFzeW5jRXZlbnQgY29uc3RydWN0b3JcclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgQXN5bmNFdmVudE9wdHMge1xyXG4gICAgLyoqXHJcbiAgICAgKiBDb25kZW5zZSBtdWx0aXBsZSBjYWxscyB0byBwb3N0KCkgaW50byBvbmUgd2hpbGUgdGhlIHByZXZpb3VzIG9uZVxyXG4gICAgICogaGFzIG5vdCBiZWVuIGhhbmRsZWQgeWV0LlxyXG4gICAgICovXHJcbiAgICBjb25kZW5zZWQ/OiBib29sZWFuO1xyXG59XHJcblxyXG4vKipcclxuICogQS1zeW5jaHJvbm91cyBldmVudC4gSGFuZGxlcnMgYXJlIGNhbGxlZCBpbiB0aGUgbmV4dCBOb2RlLkpTIGN5Y2xlLlxyXG4gKiAtIE9wdGlvbmFsbHkgY29uZGVuc2VzIG11bHRpcGxlIHBvc3QoKSBjYWxscyBpbnRvIG9uZSAodGhlIGxhc3QgcG9zdCgpIGdldHMgdGhyb3VnaClcclxuICogLSBIYW5kbGVycyBhcmUgY2FsbGVkIG9ubHkgZm9yIGV2ZW50cyBwb3N0ZWQgYWZ0ZXIgdGhleSB3ZXJlIGF0dGFjaGVkLlxyXG4gKiAtIEhhbmRsZXJzIGFyZSBub3QgY2FsbGVkIGFueW1vcmUgd2hlbiB0aGV5IGFyZSBkZXRhY2hlZCwgZXZlbiBpZiBhIHBvc3QoKSBpcyBpbiBwcm9ncmVzc1xyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEFzeW5jRXZlbnQ8VD4gZXh0ZW5kcyBCYXNlRXZlbnQ8VD4gaW1wbGVtZW50cyBQb3N0YWJsZTxUPiB7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBVc2VkIGludGVybmFsbHkgLSB0aGUgZXhhY3Qgb3B0aW9ucyBvYmplY3QgZ2l2ZW4gdG8gY29uc3RydWN0b3JcclxuICAgICAqL1xyXG4gICAgcHVibGljIG9wdGlvbnM6IEFzeW5jRXZlbnRPcHRzO1xyXG5cclxuICAgIHByaXZhdGUgX2NvbmRlbnNlZDogYm9vbGVhbjtcclxuICAgIHByaXZhdGUgX3F1ZXVlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSBfcXVldWVkTGlzdGVuZXJzOiBMaXN0ZW5lcjxUPltdO1xyXG4gICAgcHJpdmF0ZSBfcXVldWVkRGF0YTogYW55W107XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgZGVmYXVsdCBzY2hlZHVsZXIgdXNlcyBzZXRJbW1lZGlhdGUoKSBvciBzZXRUaW1lb3V0KC4uLiwgMCkgaWYgc2V0SW1tZWRpYXRlIGlzIG5vdCBhdmFpbGFibGUuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgZGVmYXVsdFNjaGVkdWxlcihjYWxsYmFjazogKCkgPT4gdm9pZCk6IHZvaWQge1xyXG4gICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICAqL1xyXG4gICAgICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICAvLyBicm93c2VycyBkb24ndCBhbHdheXMgc3VwcG9ydCBzZXRJbW1lZGlhdGUoKVxyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KGNhbGxiYWNrLCAwKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvLyBub2RlLmpzXHJcbiAgICAgICAgICAgIHNldEltbWVkaWF0ZShjYWxsYmFjayk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhlIGN1cnJlbnQgc2NoZWR1bGVyXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgc3RhdGljIF9zY2hlZHVsZXI6IChjYWxsYmFjazogKCkgPT4gdm9pZCkgPT4gdm9pZCA9IEFzeW5jRXZlbnQuZGVmYXVsdFNjaGVkdWxlcjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEJ5IGRlZmF1bHQsIEFzeW5jRXZlbnQgdXNlcyBzZXRJbW1lZGlhdGUoKSB0byBzY2hlZHVsZSBldmVudCBoYW5kbGVyIGludm9jYXRpb24uXHJcbiAgICAgKiBZb3UgY2FuIGNoYW5nZSB0aGlzIGZvciBlLmcuIHNldFRpbWVvdXQoLi4uLCAwKSBieSBjYWxsaW5nIHRoaXMgc3RhdGljIG1ldGhvZCBvbmNlLlxyXG4gICAgICogQHBhcmFtIHNjaGVkdWxlciBBIGZ1bmN0aW9uIHRoYXQgdGFrZXMgYSBjYWxsYmFjayBhbmQgZXhlY3V0ZXMgaXQgaW4gdGhlIG5leHQgTm9kZS5KUyBjeWNsZS5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBzZXRTY2hlZHVsZXIoc2NoZWR1bGVyOiAoY2FsbGJhY2s6ICgpID0+IHZvaWQpID0+IHZvaWQpOiB2b2lkIHtcclxuICAgICAgICBBc3luY0V2ZW50Ll9zY2hlZHVsZXIgPSBzY2hlZHVsZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDb25zdHJ1Y3RvclxyXG4gICAgICogQHBhcmFtIG9wdHMgT3B0aW9uYWwuIFZhcmlvdXMgc2V0dGluZ3M6XHJcbiAgICAgKiAgICAgICAgICAgICAtIGNvbmRlbnNlZDogYSBCb29sZWFuIGluZGljYXRpbmcgd2hldGhlciB0byBjb25kZW5zZSBtdWx0aXBsZSBwb3N0KCkgY2FsbHMgd2l0aGluIHRoZSBzYW1lIGN5Y2xlLlxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3RvcihvcHRzPzogQXN5bmNFdmVudE9wdHMpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMub3B0aW9ucyA9IG9wdHM7XHJcbiAgICAgICAgY29uc3Qgb3B0aW9uczogQXN5bmNFdmVudE9wdHMgPSBvcHRzIHx8IHt9O1xyXG4gICAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5jb25kZW5zZWQgPT09ICdib29sZWFuJykge1xyXG4gICAgICAgICAgICB0aGlzLl9jb25kZW5zZWQgPSBvcHRpb25zLmNvbmRlbnNlZDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLl9jb25kZW5zZWQgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZW5kIHRoZSBBc3luY0V2ZW50LiBIYW5kbGVycyBhcmUgY2FsbGVkIGluIHRoZSBuZXh0IE5vZGUuSlMgY3ljbGUuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBwb3N0KGRhdGE6IFQpOiB2b2lkO1xyXG4gICAgcHVibGljIHBvc3QoLi4uYXJnczogYW55W10pOiB2b2lkIHtcclxuICAgICAgICBpZiAoIXRoaXMuX2xpc3RlbmVycyB8fCB0aGlzLl9saXN0ZW5lcnMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuX2NvbmRlbnNlZCkge1xyXG4gICAgICAgICAgICB0aGlzLl9xdWV1ZWREYXRhID0gYXJncztcclxuICAgICAgICAgICAgdGhpcy5fcXVldWVkTGlzdGVuZXJzID0gdGhpcy5fbGlzdGVuZXJzO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5fcXVldWVkKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9xdWV1ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgQXN5bmNFdmVudC5fc2NoZWR1bGVyKCgpOiB2b2lkID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBpbW1lZGlhdGVseSBtYXJrIG5vbi1xdWV1ZWQgdG8gYWxsb3cgbmV3IEFzeW5jRXZlbnQgdG8gaGFwcGVuIGFzIHJlc3VsdFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIG9mIGNhbGxpbmcgaGFuZGxlcnNcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9xdWV1ZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBjYWNoZSBsaXN0ZW5lcnMgYW5kIGRhdGEgYmVjYXVzZSB0aGV5IG1pZ2h0IGNoYW5nZSB3aGlsZSBjYWxsaW5nIGV2ZW50IGhhbmRsZXJzXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IHRoaXMuX3F1ZXVlZERhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbGlzdGVuZXJzID0gdGhpcy5fcXVldWVkTGlzdGVuZXJzO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGlzdGVuZXJzLmxlbmd0aDsgKytpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGxpc3RlbmVyID0gbGlzdGVuZXJzW2ldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9jYWxsKGxpc3RlbmVyLCBkYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7IC8vIG5vdCBjb25kZW5zZWRcclxuICAgICAgICAgICAgY29uc3QgbGlzdGVuZXJzID0gdGhpcy5fbGlzdGVuZXJzO1xyXG4gICAgICAgICAgICBBc3luY0V2ZW50Ll9zY2hlZHVsZXIoKCk6IHZvaWQgPT4ge1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaXN0ZW5lcnMubGVuZ3RoOyArK2kpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBsaXN0ZW5lciA9IGxpc3RlbmVyc1tpXTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9jYWxsKGxpc3RlbmVyLCBhcmdzKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIGluaGVyaXRlZFxyXG4gICAgcHJvdGVjdGVkIF9jYWxsKGxpc3RlbmVyOiBMaXN0ZW5lcjxUPiwgYXJnczogYW55W10pOiB2b2lkIHtcclxuICAgICAgICAvLyBwZXJmb3JtYW5jZSBvcHRpbWl6YXRpb246IGRvbid0IHVzZSBjb25zZWN1dGl2ZSBub2RlanMgY3ljbGVzXHJcbiAgICAgICAgLy8gZm9yIGFzeW5jZXZlbnRzIGF0dGFjaGVkIHRvIGFzeW5jZXZlbnRzXHJcbiAgICAgICAgaWYgKGxpc3RlbmVyLmV2ZW50ICYmIGxpc3RlbmVyLmV2ZW50IGluc3RhbmNlb2YgQXN5bmNFdmVudCkge1xyXG4gICAgICAgICAgICAoPEFzeW5jRXZlbnQ8VD4+bGlzdGVuZXIuZXZlbnQpLl9wb3N0RGlyZWN0KGFyZ3MpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHN1cGVyLl9jYWxsKGxpc3RlbmVyLCBhcmdzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBQZXJmb3JtYW5jZSBvcHRpbWl6YXRpb246IGlmIHRoaXMgYXN5bmMgc2lnbmFsIGlzIGF0dGFjaGVkIHRvIGFub3RoZXJcclxuICAgICAqIGFzeW5jIHNpZ25hbCwgd2UncmUgYWxyZWFkeSBhIHRoZSBuZXh0IGN5Y2xlIGFuZCB3ZSBjYW4gY2FsbCBsaXN0ZW5lcnNcclxuICAgICAqIGRpcmVjdGx5XHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBfcG9zdERpcmVjdChhcmdzOiBhbnlbXSk6IHZvaWQge1xyXG4gICAgICAgIGlmICghdGhpcy5fbGlzdGVuZXJzIHx8IHRoaXMuX2xpc3RlbmVycy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBjb3B5IGEgcmVmZXJlbmNlIHRvIHRoZSBhcnJheSBiZWNhdXNlIHRoaXMuX2xpc3RlbmVycyBtaWdodCBiZSByZXBsYWNlZCBkdXJpbmdcclxuICAgICAgICAvLyB0aGUgaGFuZGxlciBjYWxsc1xyXG4gICAgICAgIGNvbnN0IGxpc3RlbmVycyA9IHRoaXMuX2xpc3RlbmVycztcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpc3RlbmVycy5sZW5ndGg7ICsraSkge1xyXG4gICAgICAgICAgICBjb25zdCBsaXN0ZW5lciA9IGxpc3RlbmVyc1tpXTtcclxuICAgICAgICAgICAgdGhpcy5fY2FsbChsaXN0ZW5lciwgYXJncyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICogQ29udmVuaWVuY2UgY2xhc3MgZm9yIEFzeW5jRXZlbnRzIHdpdGhvdXQgZGF0YVxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFZvaWRBc3luY0V2ZW50IGV4dGVuZHMgQXN5bmNFdmVudDx2b2lkPiB7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZW5kIHRoZSBBc3luY0V2ZW50LlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgcG9zdCgpOiB2b2lkIHtcclxuICAgICAgICBzdXBlci5wb3N0KHVuZGVmaW5lZCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBTaW1pbGFyIHRvICdlcnJvcicgZXZlbnQgb24gRXZlbnRFbWl0dGVyOiB0aHJvd3Mgd2hlbiBhIHBvc3QoKSBvY2N1cnMgd2hpbGUgbm8gaGFuZGxlcnMgc2V0LlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEVycm9yQXN5bmNFdmVudCBleHRlbmRzIEFzeW5jRXZlbnQ8RXJyb3I+IHtcclxuXHJcbiAgICBwdWJsaWMgcG9zdChkYXRhOiBFcnJvcik6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLmxpc3RlbmVyQ291bnQoKSA9PT0gMCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYGVycm9yIGV2ZW50IHBvc3RlZCB3aGlsZSBubyBsaXN0ZW5lcnMgYXR0YWNoZWQuIEVycm9yOiAke2RhdGEubWVzc2FnZX1gKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc3VwZXIucG9zdChkYXRhKTtcclxuICAgIH1cclxufVxyXG4iXX0=
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../timers-browserify/main.js */ "./node_modules/timers-browserify/main.js").setImmediate))

/***/ }),

/***/ "./node_modules/ts-events/dist/lib/base-event.js":
/*!*******************************************************!*\
  !*** ./node_modules/ts-events/dist/lib/base-event.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright © 2015 Rogier Schouten<github@workingcode.ninja>
// License: ISC

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Base class for events.
 * Handles attaching and detaching listeners
 */
var BaseEvent = /** @class */ (function () {
    function BaseEvent() {
    }
    /**
     * Attach implementation
     */
    BaseEvent.prototype.attach = function (a, b) {
        return this._attach(a, b, false);
    };
    /**
     * Once implementation
     */
    BaseEvent.prototype.once = function (a, b) {
        return this._attach(a, b, true);
    };
    /**
     * Attach / once implementation
     * @param a
     * @param b
     * @param once
     * @returns function you can use for detaching from the event, instead of calling detach()
     */
    BaseEvent.prototype._attach = function (a, b, once) {
        var _this = this;
        var boundTo;
        var handler;
        var event;
        var result;
        if (typeof a === 'function') {
            handler = a;
            result = function () { return _this.detach(handler); };
        }
        else if (!b && typeof a.post === 'function') {
            event = a;
            result = function () { return _this.detach(event); };
        }
        else {
            if (typeof a !== 'object') {
                throw new Error('Expect a function or object as first argument');
            }
            if (typeof b !== 'function') {
                throw new Error('Expect a function as second argument');
            }
            boundTo = a;
            handler = b;
            result = function () { return _this.detach(boundTo, handler); };
        }
        if (!this._listeners) {
            this._listeners = [];
        }
        else {
            // make a copy of the array so events that are underway have a stable local copy
            // of the listeners array at the time of post()
            this._listeners = this._listeners.slice();
        }
        this._listeners.push({
            deleted: false,
            boundTo: boundTo,
            handler: handler,
            event: event,
            once: once
        });
        return result;
    };
    /**
     * Detach implementation. See the overloads for description.
     */
    BaseEvent.prototype.detach = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (!this._listeners || this._listeners.length === 0) {
            return;
        }
        var boundTo;
        var handler;
        var event;
        if (args.length >= 1) {
            if (typeof (args[0]) === 'function') {
                handler = args[0];
            }
            else if (args.length === 1 && typeof args[0].post === 'function') {
                event = args[0];
            }
            else {
                boundTo = args[0];
            }
        }
        if (args.length >= 2) {
            handler = args[1];
        }
        // remove listeners AND mark them as deleted so subclasses don't send any more events to them
        this._listeners = this._listeners.filter(function (listener) {
            if ((typeof handler === 'undefined' || listener.handler === handler)
                && (typeof event === 'undefined' || listener.event === event)
                && (typeof boundTo === 'undefined' || listener.boundTo === boundTo)) {
                listener.deleted = true;
                return false;
            }
            return true;
        });
        if (this._listeners.length === 0) {
            delete this._listeners;
        }
    };
    /**
     * Abstract post() method to be able to connect any type of event to any other directly
     * @abstract
     */
    BaseEvent.prototype.post = function (data) {
        throw new Error('abstract');
    };
    /**
     * The number of attached listeners
     */
    BaseEvent.prototype.listenerCount = function () {
        return (this._listeners ? this._listeners.length : 0);
    };
    /**
     * Call the given listener, if it is not marked as 'deleted'
     * @param listener The listener to call
     * @param args The arguments to the handler
     */
    BaseEvent.prototype._call = function (listener, args) {
        if (!listener.deleted) {
            if (listener.once) {
                // remove listeners AND mark as deleted so subclasses don't send any more events to them
                listener.deleted = true;
                this._listeners = this._listeners.filter(function (l) { return l !== listener; });
                if (this._listeners.length === 0) {
                    delete this._listeners;
                }
            }
            if (listener.event) {
                listener.event.post.apply(listener.event, args);
            }
            else {
                listener.handler.apply((typeof listener.boundTo === 'object' ? listener.boundTo : this), args);
            }
        }
    };
    return BaseEvent;
}());
exports.BaseEvent = BaseEvent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS1ldmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9saWIvYmFzZS1ldmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw2REFBNkQ7QUFDN0QsZUFBZTtBQUVmLFlBQVksQ0FBQzs7QUFrQ2I7OztHQUdHO0FBQ0g7SUFBQTtJQTRNQSxDQUFDO0lBaExHOztPQUVHO0lBQ0ksMEJBQU0sR0FBYixVQUFjLENBQTZDLEVBQUUsQ0FBcUI7UUFDOUUsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDckMsQ0FBQztJQXFCRDs7T0FFRztJQUNJLHdCQUFJLEdBQVgsVUFBWSxDQUE2QyxFQUFFLENBQXFCO1FBQzVFLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFFRDs7Ozs7O09BTUc7SUFDSywyQkFBTyxHQUFmLFVBQWdCLENBQTZDLEVBQUUsQ0FBa0MsRUFBRSxJQUFhO1FBQWhILGlCQXFDQztRQXBDRyxJQUFJLE9BQWUsQ0FBQztRQUNwQixJQUFJLE9BQTBCLENBQUM7UUFDL0IsSUFBSSxLQUFrQixDQUFDO1FBQ3ZCLElBQUksTUFBa0IsQ0FBQztRQUN2QixJQUFJLE9BQU8sQ0FBQyxLQUFLLFVBQVUsRUFBRTtZQUN6QixPQUFPLEdBQUcsQ0FBd0IsQ0FBQztZQUNuQyxNQUFNLEdBQUcsY0FBTSxPQUFBLEtBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEVBQXBCLENBQW9CLENBQUM7U0FDdkM7YUFBTSxJQUFJLENBQUMsQ0FBQyxJQUFJLE9BQVEsQ0FBaUIsQ0FBQyxJQUFJLEtBQUssVUFBVSxFQUFFO1lBQzVELEtBQUssR0FBRyxDQUFnQixDQUFDO1lBQ3pCLE1BQU0sR0FBRyxjQUFNLE9BQUEsS0FBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsRUFBbEIsQ0FBa0IsQ0FBQztTQUNyQzthQUFNO1lBQ0gsSUFBSSxPQUFPLENBQUMsS0FBSyxRQUFRLEVBQUU7Z0JBQ3ZCLE1BQU0sSUFBSSxLQUFLLENBQUMsK0NBQStDLENBQUMsQ0FBQzthQUNwRTtZQUNELElBQUksT0FBTyxDQUFDLEtBQUssVUFBVSxFQUFFO2dCQUN6QixNQUFNLElBQUksS0FBSyxDQUFDLHNDQUFzQyxDQUFDLENBQUM7YUFDM0Q7WUFDRCxPQUFPLEdBQUcsQ0FBQyxDQUFDO1lBQ1osT0FBTyxHQUFHLENBQUMsQ0FBQztZQUNaLE1BQU0sR0FBRyxjQUFNLE9BQUEsS0FBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLEVBQTdCLENBQTZCLENBQUM7U0FDaEQ7UUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNsQixJQUFJLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQztTQUN4QjthQUFNO1lBQ0gsZ0ZBQWdGO1lBQ2hGLCtDQUErQztZQUMvQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDN0M7UUFDRCxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQztZQUNqQixPQUFPLEVBQUUsS0FBSztZQUNkLE9BQU8sU0FBQTtZQUNQLE9BQU8sU0FBQTtZQUNQLEtBQUssT0FBQTtZQUNMLElBQUksTUFBQTtTQUNQLENBQUMsQ0FBQztRQUNILE9BQU8sTUFBTSxDQUFDO0lBQ2xCLENBQUM7SUFzQkQ7O09BRUc7SUFDSSwwQkFBTSxHQUFiO1FBQWMsY0FBYzthQUFkLFVBQWMsRUFBZCxxQkFBYyxFQUFkLElBQWM7WUFBZCx5QkFBYzs7UUFDeEIsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1lBQ2xELE9BQU87U0FDVjtRQUNELElBQUksT0FBZSxDQUFDO1FBQ3BCLElBQUksT0FBMEIsQ0FBQztRQUMvQixJQUFJLEtBQWtCLENBQUM7UUFDdkIsSUFBSSxJQUFJLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBRTtZQUNsQixJQUFJLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxVQUFVLEVBQUU7Z0JBQ2pDLE9BQU8sR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDckI7aUJBQU0sSUFBSSxJQUFJLENBQUMsTUFBTSxLQUFLLENBQUMsSUFBSSxPQUFPLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEtBQUssVUFBVSxFQUFFO2dCQUNoRSxLQUFLLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ25CO2lCQUFNO2dCQUNILE9BQU8sR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDckI7U0FDSjtRQUNELElBQUksSUFBSSxDQUFDLE1BQU0sSUFBSSxDQUFDLEVBQUU7WUFDbEIsT0FBTyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNyQjtRQUVELDZGQUE2RjtRQUM3RixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLFVBQUMsUUFBcUI7WUFDM0QsSUFBSSxDQUFDLE9BQU8sT0FBTyxLQUFLLFdBQVcsSUFBSSxRQUFRLENBQUMsT0FBTyxLQUFLLE9BQU8sQ0FBQzttQkFDN0QsQ0FBQyxPQUFPLEtBQUssS0FBSyxXQUFXLElBQUksUUFBUSxDQUFDLEtBQUssS0FBSyxLQUFLLENBQUM7bUJBQzFELENBQUMsT0FBTyxPQUFPLEtBQUssV0FBVyxJQUFJLFFBQVEsQ0FBQyxPQUFPLEtBQUssT0FBTyxDQUFDLEVBQUU7Z0JBQ3JFLFFBQVEsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO2dCQUN4QixPQUFPLEtBQUssQ0FBQzthQUNoQjtZQUNELE9BQU8sSUFBSSxDQUFDO1FBQ2hCLENBQUMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7WUFDOUIsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO1NBQzFCO0lBQ0wsQ0FBQztJQUVEOzs7T0FHRztJQUNJLHdCQUFJLEdBQVgsVUFBWSxJQUFPO1FBQ2YsTUFBTSxJQUFJLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBRUQ7O09BRUc7SUFDSSxpQ0FBYSxHQUFwQjtRQUNJLE9BQU8sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDMUQsQ0FBQztJQUVEOzs7O09BSUc7SUFDTyx5QkFBSyxHQUFmLFVBQWdCLFFBQXFCLEVBQUUsSUFBVztRQUM5QyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRTtZQUNuQixJQUFJLFFBQVEsQ0FBQyxJQUFJLEVBQUU7Z0JBQ2Ysd0ZBQXdGO2dCQUN4RixRQUFRLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztnQkFDeEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxVQUFDLENBQWMsSUFBYyxPQUFBLENBQUMsS0FBSyxRQUFRLEVBQWQsQ0FBYyxDQUFDLENBQUM7Z0JBQ3RGLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO29CQUM5QixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7aUJBQzFCO2FBQ0o7WUFDRCxJQUFJLFFBQVEsQ0FBQyxLQUFLLEVBQUU7Z0JBQ2hCLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDO2FBQ25EO2lCQUFNO2dCQUNILFFBQVEsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsT0FBTyxRQUFRLENBQUMsT0FBTyxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7YUFDbEc7U0FDSjtJQUNMLENBQUM7SUFFTCxnQkFBQztBQUFELENBQUMsQUE1TUQsSUE0TUM7QUE1TVksOEJBQVMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgwqkgMjAxNSBSb2dpZXIgU2Nob3V0ZW48Z2l0aHViQHdvcmtpbmdjb2RlLm5pbmphPlxyXG4vLyBMaWNlbnNlOiBJU0NcclxuXHJcbid1c2Ugc3RyaWN0JztcclxuXHJcbmltcG9ydCB7IHRpbWluZ1NhZmVFcXVhbCB9IGZyb20gJ2NyeXB0byc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFBvc3RhYmxlPFQ+IHtcclxuICAgIHBvc3QoZGF0YTogVCk6IHZvaWQ7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBJbnRlcm5hbCBpbnRlcmZhY2UgYmV0d2VlbiBCYXNlRXZlbnQgYW5kIGl0cyBzdWJjbGFzc2VzXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIExpc3RlbmVyPFQ+IHtcclxuICAgIC8qKlxyXG4gICAgICogSW5kaWNhdGVzIHRoYXQgdGhlIGxpc3RlbmVyIHdhcyBkZXRhY2hlZFxyXG4gICAgICovXHJcbiAgICBkZWxldGVkOiBib29sZWFuO1xyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgaGFuZGxlclxyXG4gICAgICovXHJcbiAgICBoYW5kbGVyPzogKGRhdGE6IFQpID0+IHZvaWQ7XHJcbiAgICAvKipcclxuICAgICAqIFRoZSB0aGlzIHBvaW50ZXIgZm9yIHRoZSBoYW5kbGVyXHJcbiAgICAgKi9cclxuICAgIGJvdW5kVG8/OiBPYmplY3Q7XHJcbiAgICAvKipcclxuICAgICAqIEluc3RlYWQgb2YgYSBoYW5kbGVyLCBhbiBhdHRhY2hlZCBldmVudFxyXG4gICAgICovXHJcbiAgICBldmVudD86IFBvc3RhYmxlPFQ+O1xyXG4gICAgLyoqXHJcbiAgICAgKiBSZW1vdmUgYWZ0ZXIgZmlyc3QgY2FsbD9cclxuICAgICAqL1xyXG4gICAgb25jZTogYm9vbGVhbjtcclxufVxyXG5cclxuLyoqXHJcbiAqIEJhc2UgY2xhc3MgZm9yIGV2ZW50cy5cclxuICogSGFuZGxlcyBhdHRhY2hpbmcgYW5kIGRldGFjaGluZyBsaXN0ZW5lcnNcclxuICovXHJcbmV4cG9ydCBjbGFzcyBCYXNlRXZlbnQ8VD4gaW1wbGVtZW50cyBQb3N0YWJsZTxUPiB7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBdHRhY2hlZCBsaXN0ZW5lcnMuIE5PVEU6IGRvIG5vdCBtb2RpZnkuXHJcbiAgICAgKiBJbnN0ZWFkLCByZXBsYWNlIHdpdGggYSBuZXcgYXJyYXkgd2l0aCBwb3NzaWJseSB0aGUgc2FtZSBlbGVtZW50cy4gVGhpcyBlbnN1cmVzXHJcbiAgICAgKiB0aGF0IGFueSByZWZlcmVuY2VzIHRvIHRoZSBhcnJheSBieSBldmVudHMgdGhhdCBhcmUgdW5kZXJ3YXkgcmVtYWluIHRoZSBzYW1lLlxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgX2xpc3RlbmVyczogTGlzdGVuZXI8VD5bXTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEF0dGFjaCBhbiBldmVudCBoYW5kbGVyXHJcbiAgICAgKiBAcGFyYW0gaGFuZGxlciBUaGUgZnVuY3Rpb24gdG8gY2FsbC4gVGhlIHRoaXMgYXJndW1lbnQgb2YgdGhlIGZ1bmN0aW9uIHdpbGwgYmUgdGhpcyBvYmplY3QuXHJcbiAgICAgKiBAcmV0dXJucyBmdW5jdGlvbiB5b3UgY2FuIHVzZSBmb3IgZGV0YWNoaW5nIGZyb20gdGhlIGV2ZW50LCBpbnN0ZWFkIG9mIGNhbGxpbmcgZGV0YWNoKClcclxuICAgICAqL1xyXG4gICAgcHVibGljIGF0dGFjaChoYW5kbGVyOiAoZGF0YTogVCkgPT4gdm9pZCk6ICgpID0+IHZvaWQ7XHJcbiAgICAvKipcclxuICAgICAqIEF0dGFjaCBhbiBldmVudCBoYW5kbGVyXHJcbiAgICAgKiBAcGFyYW0gYm91bmRUbyBUaGUgdGhpcyBhcmd1bWVudCBvZiB0aGUgaGFuZGxlclxyXG4gICAgICogQHBhcmFtIGhhbmRsZXIgVGhlIGZ1bmN0aW9uIHRvIGNhbGwuXHJcbiAgICAgKiBAcmV0dXJucyBmdW5jdGlvbiB5b3UgY2FuIHVzZSBmb3IgZGV0YWNoaW5nIGZyb20gdGhlIGV2ZW50LCBpbnN0ZWFkIG9mIGNhbGxpbmcgZGV0YWNoKClcclxuICAgICAqL1xyXG4gICAgcHVibGljIGF0dGFjaChib3VuZFRvOiBPYmplY3QsIGhhbmRsZXI6IChkYXRhOiBUKSA9PiB2b2lkKTogKCkgPT4gdm9pZDtcclxuICAgIC8qKlxyXG4gICAgICogQXR0YWNoIGFuIGV2ZW50IGRpcmVjdGx5XHJcbiAgICAgKiBAcGFyYW0gZXZlbnQgVGhlIGV2ZW50IHRvIGJlIHBvc3RlZFxyXG4gICAgICogQHJldHVybnMgZnVuY3Rpb24geW91IGNhbiB1c2UgZm9yIGRldGFjaGluZyBmcm9tIHRoZSBldmVudCwgaW5zdGVhZCBvZiBjYWxsaW5nIGRldGFjaCgpXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBhdHRhY2goZXZlbnQ6IFBvc3RhYmxlPFQ+KTogKCkgPT4gdm9pZDtcclxuICAgIC8qKlxyXG4gICAgICogQXR0YWNoIGltcGxlbWVudGF0aW9uXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBhdHRhY2goYTogKChkYXRhOiBUKSA9PiB2b2lkKSB8IE9iamVjdCB8IFBvc3RhYmxlPFQ+LCBiPzogKGRhdGE6IFQpID0+IHZvaWQpOiAoKSA9PiB2b2lkIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fYXR0YWNoKGEsIGIsIGZhbHNlKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEF0dGFjaCBhbiBldmVudCBoYW5kbGVyIHdoaWNoIGF1dG9tYXRpY2FsbHkgZ2V0cyByZW1vdmVkIGFmdGVyIHRoZSBmaXJzdCBjYWxsXHJcbiAgICAgKiBAcGFyYW0gaGFuZGxlciBUaGUgZnVuY3Rpb24gdG8gY2FsbC4gVGhlIHRoaXMgYXJndW1lbnQgb2YgdGhlIGZ1bmN0aW9uIHdpbGwgYmUgdGhpcyBvYmplY3QuXHJcbiAgICAgKiBAcmV0dXJucyBmdW5jdGlvbiB5b3UgY2FuIHVzZSBmb3IgZGV0YWNoaW5nIGZyb20gdGhlIGV2ZW50LCBpbnN0ZWFkIG9mIGNhbGxpbmcgZGV0YWNoKClcclxuICAgICAqL1xyXG4gICAgcHVibGljIG9uY2UoaGFuZGxlcjogKGRhdGE6IFQpID0+IHZvaWQpOiAoKSA9PiB2b2lkO1xyXG4gICAgLyoqXHJcbiAgICAgKiBBdHRhY2ggYW4gZXZlbnQgaGFuZGxlciB3aGljaCBhdXRvbWF0aWNhbGx5IGdldHMgcmVtb3ZlZCBhZnRlciB0aGUgZmlyc3QgY2FsbFxyXG4gICAgICogQHBhcmFtIGJvdW5kVG8gVGhlIHRoaXMgYXJndW1lbnQgb2YgdGhlIGhhbmRsZXJcclxuICAgICAqIEBwYXJhbSBoYW5kbGVyIFRoZSBmdW5jdGlvbiB0byBjYWxsLlxyXG4gICAgICogQHJldHVybnMgZnVuY3Rpb24geW91IGNhbiB1c2UgZm9yIGRldGFjaGluZyBmcm9tIHRoZSBldmVudCwgaW5zdGVhZCBvZiBjYWxsaW5nIGRldGFjaCgpXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBvbmNlKGJvdW5kVG86IE9iamVjdCwgaGFuZGxlcjogKGRhdGE6IFQpID0+IHZvaWQpOiAoKSA9PiB2b2lkO1xyXG4gICAgLyoqXHJcbiAgICAgKiBBdHRhY2ggYW4gZXZlbnQgZGlyZWN0bHkgYW5kIGRlLWF0dGFjaCBhZnRlciB0aGUgZmlyc3QgY2FsbFxyXG4gICAgICogQHBhcmFtIGV2ZW50IFRoZSBldmVudCB0byBiZSBwb3N0ZWRcclxuICAgICAqIEByZXR1cm5zIGZ1bmN0aW9uIHlvdSBjYW4gdXNlIGZvciBkZXRhY2hpbmcgZnJvbSB0aGUgZXZlbnQsIGluc3RlYWQgb2YgY2FsbGluZyBkZXRhY2goKVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgb25jZShldmVudDogUG9zdGFibGU8VD4pOiAoKSA9PiB2b2lkO1xyXG4gICAgLyoqXHJcbiAgICAgKiBPbmNlIGltcGxlbWVudGF0aW9uXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBvbmNlKGE6ICgoZGF0YTogVCkgPT4gdm9pZCkgfCBPYmplY3QgfCBQb3N0YWJsZTxUPiwgYj86IChkYXRhOiBUKSA9PiB2b2lkKTogKCkgPT4gdm9pZCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2F0dGFjaChhLCBiLCB0cnVlKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEF0dGFjaCAvIG9uY2UgaW1wbGVtZW50YXRpb25cclxuICAgICAqIEBwYXJhbSBhXHJcbiAgICAgKiBAcGFyYW0gYlxyXG4gICAgICogQHBhcmFtIG9uY2VcclxuICAgICAqIEByZXR1cm5zIGZ1bmN0aW9uIHlvdSBjYW4gdXNlIGZvciBkZXRhY2hpbmcgZnJvbSB0aGUgZXZlbnQsIGluc3RlYWQgb2YgY2FsbGluZyBkZXRhY2goKVxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIF9hdHRhY2goYTogKChkYXRhOiBUKSA9PiB2b2lkKSB8IE9iamVjdCB8IFBvc3RhYmxlPFQ+LCBiOiAoKGRhdGE6IFQpID0+IHZvaWQpIHwgdW5kZWZpbmVkLCBvbmNlOiBib29sZWFuKTogKCkgPT4gdm9pZCB7XHJcbiAgICAgICAgbGV0IGJvdW5kVG86IE9iamVjdDtcclxuICAgICAgICBsZXQgaGFuZGxlcjogKGRhdGE6IFQpID0+IHZvaWQ7XHJcbiAgICAgICAgbGV0IGV2ZW50OiBQb3N0YWJsZTxUPjtcclxuICAgICAgICBsZXQgcmVzdWx0OiAoKSA9PiB2b2lkO1xyXG4gICAgICAgIGlmICh0eXBlb2YgYSA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICBoYW5kbGVyID0gYSBhcyAoKGRhdGE6IFQpID0+IHZvaWQpO1xyXG4gICAgICAgICAgICByZXN1bHQgPSAoKSA9PiB0aGlzLmRldGFjaChoYW5kbGVyKTtcclxuICAgICAgICB9IGVsc2UgaWYgKCFiICYmIHR5cGVvZiAoYSBhcyBQb3N0YWJsZTxUPikucG9zdCA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICBldmVudCA9IGEgYXMgUG9zdGFibGU8VD47XHJcbiAgICAgICAgICAgIHJlc3VsdCA9ICgpID0+IHRoaXMuZGV0YWNoKGV2ZW50KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIGEgIT09ICdvYmplY3QnKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0V4cGVjdCBhIGZ1bmN0aW9uIG9yIG9iamVjdCBhcyBmaXJzdCBhcmd1bWVudCcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgYiAhPT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdFeHBlY3QgYSBmdW5jdGlvbiBhcyBzZWNvbmQgYXJndW1lbnQnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBib3VuZFRvID0gYTtcclxuICAgICAgICAgICAgaGFuZGxlciA9IGI7XHJcbiAgICAgICAgICAgIHJlc3VsdCA9ICgpID0+IHRoaXMuZGV0YWNoKGJvdW5kVG8sIGhhbmRsZXIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXRoaXMuX2xpc3RlbmVycykge1xyXG4gICAgICAgICAgICB0aGlzLl9saXN0ZW5lcnMgPSBbXTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvLyBtYWtlIGEgY29weSBvZiB0aGUgYXJyYXkgc28gZXZlbnRzIHRoYXQgYXJlIHVuZGVyd2F5IGhhdmUgYSBzdGFibGUgbG9jYWwgY29weVxyXG4gICAgICAgICAgICAvLyBvZiB0aGUgbGlzdGVuZXJzIGFycmF5IGF0IHRoZSB0aW1lIG9mIHBvc3QoKVxyXG4gICAgICAgICAgICB0aGlzLl9saXN0ZW5lcnMgPSB0aGlzLl9saXN0ZW5lcnMuc2xpY2UoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fbGlzdGVuZXJzLnB1c2goe1xyXG4gICAgICAgICAgICBkZWxldGVkOiBmYWxzZSxcclxuICAgICAgICAgICAgYm91bmRUbyxcclxuICAgICAgICAgICAgaGFuZGxlcixcclxuICAgICAgICAgICAgZXZlbnQsXHJcbiAgICAgICAgICAgIG9uY2VcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRGV0YWNoIGFsbCBsaXN0ZW5lcnMgd2l0aCB0aGUgZ2l2ZW4gaGFuZGxlciBmdW5jdGlvblxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZGV0YWNoKGhhbmRsZXI6IChkYXRhOiBUKSA9PiB2b2lkKTogdm9pZDtcclxuICAgIC8qKlxyXG4gICAgICogRGV0YWNoIGFsbCBsaXN0ZW5lcnMgd2l0aCB0aGUgZ2l2ZW4gaGFuZGxlciBmdW5jdGlvbiBhbmQgYm91bmRUbyBvYmplY3QuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBkZXRhY2goYm91bmRUbzogT2JqZWN0LCBoYW5kbGVyOiAoZGF0YTogVCkgPT4gdm9pZCk6IHZvaWQ7XHJcbiAgICAvKipcclxuICAgICAqIERldGFjaCBhbGwgbGlzdGVuZXJzIHRoYXQgd2VyZSBhdHRhY2hlZCB3aXRoIHRoZSBnaXZlbiBib3VuZFRvIG9iamVjdC5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGRldGFjaChib3VuZFRvOiBPYmplY3QpOiB2b2lkO1xyXG4gICAgLyoqXHJcbiAgICAgKiBEZXRhY2ggdGhlIGdpdmVuIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZGV0YWNoKGV2ZW50OiBQb3N0YWJsZTxUPik6IHZvaWQ7XHJcbiAgICAvKipcclxuICAgICAqIERldGFjaCBhbGwgbGlzdGVuZXJzXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBkZXRhY2goKTogdm9pZDtcclxuICAgIC8qKlxyXG4gICAgICogRGV0YWNoIGltcGxlbWVudGF0aW9uLiBTZWUgdGhlIG92ZXJsb2FkcyBmb3IgZGVzY3JpcHRpb24uXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBkZXRhY2goLi4uYXJnczogYW55W10pOiB2b2lkIHtcclxuICAgICAgICBpZiAoIXRoaXMuX2xpc3RlbmVycyB8fCB0aGlzLl9saXN0ZW5lcnMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGJvdW5kVG86IE9iamVjdDtcclxuICAgICAgICBsZXQgaGFuZGxlcjogKGRhdGE6IFQpID0+IHZvaWQ7XHJcbiAgICAgICAgbGV0IGV2ZW50OiBQb3N0YWJsZTxUPjtcclxuICAgICAgICBpZiAoYXJncy5sZW5ndGggPj0gMSkge1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIChhcmdzWzBdKSA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICAgICAgaGFuZGxlciA9IGFyZ3NbMF07XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoYXJncy5sZW5ndGggPT09IDEgJiYgdHlwZW9mIGFyZ3NbMF0ucG9zdCA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICAgICAgZXZlbnQgPSBhcmdzWzBdO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgYm91bmRUbyA9IGFyZ3NbMF07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGFyZ3MubGVuZ3RoID49IDIpIHtcclxuICAgICAgICAgICAgaGFuZGxlciA9IGFyZ3NbMV07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyByZW1vdmUgbGlzdGVuZXJzIEFORCBtYXJrIHRoZW0gYXMgZGVsZXRlZCBzbyBzdWJjbGFzc2VzIGRvbid0IHNlbmQgYW55IG1vcmUgZXZlbnRzIHRvIHRoZW1cclxuICAgICAgICB0aGlzLl9saXN0ZW5lcnMgPSB0aGlzLl9saXN0ZW5lcnMuZmlsdGVyKChsaXN0ZW5lcjogTGlzdGVuZXI8VD4pOiBib29sZWFuID0+IHtcclxuICAgICAgICAgICAgaWYgKCh0eXBlb2YgaGFuZGxlciA9PT0gJ3VuZGVmaW5lZCcgfHwgbGlzdGVuZXIuaGFuZGxlciA9PT0gaGFuZGxlcilcclxuICAgICAgICAgICAgICAgICYmICh0eXBlb2YgZXZlbnQgPT09ICd1bmRlZmluZWQnIHx8IGxpc3RlbmVyLmV2ZW50ID09PSBldmVudClcclxuICAgICAgICAgICAgICAgICYmICh0eXBlb2YgYm91bmRUbyA9PT0gJ3VuZGVmaW5lZCcgfHwgbGlzdGVuZXIuYm91bmRUbyA9PT0gYm91bmRUbykpIHtcclxuICAgICAgICAgICAgICAgIGxpc3RlbmVyLmRlbGV0ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5fbGlzdGVuZXJzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICBkZWxldGUgdGhpcy5fbGlzdGVuZXJzO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEFic3RyYWN0IHBvc3QoKSBtZXRob2QgdG8gYmUgYWJsZSB0byBjb25uZWN0IGFueSB0eXBlIG9mIGV2ZW50IHRvIGFueSBvdGhlciBkaXJlY3RseVxyXG4gICAgICogQGFic3RyYWN0XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBwb3N0KGRhdGE6IFQpOiB2b2lkIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2Fic3RyYWN0Jyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgbnVtYmVyIG9mIGF0dGFjaGVkIGxpc3RlbmVyc1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgbGlzdGVuZXJDb3VudCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiAodGhpcy5fbGlzdGVuZXJzID8gdGhpcy5fbGlzdGVuZXJzLmxlbmd0aCA6IDApO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2FsbCB0aGUgZ2l2ZW4gbGlzdGVuZXIsIGlmIGl0IGlzIG5vdCBtYXJrZWQgYXMgJ2RlbGV0ZWQnXHJcbiAgICAgKiBAcGFyYW0gbGlzdGVuZXIgVGhlIGxpc3RlbmVyIHRvIGNhbGxcclxuICAgICAqIEBwYXJhbSBhcmdzIFRoZSBhcmd1bWVudHMgdG8gdGhlIGhhbmRsZXJcclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIF9jYWxsKGxpc3RlbmVyOiBMaXN0ZW5lcjxUPiwgYXJnczogYW55W10pOiB2b2lkIHtcclxuICAgICAgICBpZiAoIWxpc3RlbmVyLmRlbGV0ZWQpIHtcclxuICAgICAgICAgICAgaWYgKGxpc3RlbmVyLm9uY2UpIHtcclxuICAgICAgICAgICAgICAgIC8vIHJlbW92ZSBsaXN0ZW5lcnMgQU5EIG1hcmsgYXMgZGVsZXRlZCBzbyBzdWJjbGFzc2VzIGRvbid0IHNlbmQgYW55IG1vcmUgZXZlbnRzIHRvIHRoZW1cclxuICAgICAgICAgICAgICAgIGxpc3RlbmVyLmRlbGV0ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fbGlzdGVuZXJzID0gdGhpcy5fbGlzdGVuZXJzLmZpbHRlcigobDogTGlzdGVuZXI8VD4pOiBib29sZWFuID0+IGwgIT09IGxpc3RlbmVyKTtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9saXN0ZW5lcnMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHRoaXMuX2xpc3RlbmVycztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAobGlzdGVuZXIuZXZlbnQpIHtcclxuICAgICAgICAgICAgICAgIGxpc3RlbmVyLmV2ZW50LnBvc3QuYXBwbHkobGlzdGVuZXIuZXZlbnQsIGFyZ3MpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbGlzdGVuZXIuaGFuZGxlci5hcHBseSgodHlwZW9mIGxpc3RlbmVyLmJvdW5kVG8gPT09ICdvYmplY3QnID8gbGlzdGVuZXIuYm91bmRUbyA6IHRoaXMpLCBhcmdzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn1cclxuIl19

/***/ }),

/***/ "./node_modules/ts-events/dist/lib/index.js":
/*!**************************************************!*\
  !*** ./node_modules/ts-events/dist/lib/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright © 2015 Rogier Schouten<github@workingcode.ninja>
// License: ISC

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./base-event */ "./node_modules/ts-events/dist/lib/base-event.js"));
__export(__webpack_require__(/*! ./sync-event */ "./node_modules/ts-events/dist/lib/sync-event.js"));
__export(__webpack_require__(/*! ./queued-event */ "./node_modules/ts-events/dist/lib/queued-event.js"));
__export(__webpack_require__(/*! ./async-event */ "./node_modules/ts-events/dist/lib/async-event.js"));
__export(__webpack_require__(/*! ./any-event */ "./node_modules/ts-events/dist/lib/any-event.js"));
var EventQueue_1 = __webpack_require__(/*! ./EventQueue */ "./node_modules/ts-events/dist/lib/EventQueue.js");
var EventQueue_2 = __webpack_require__(/*! ./EventQueue */ "./node_modules/ts-events/dist/lib/EventQueue.js");
exports.EventQueue = EventQueue_2.default;
/**
 * The global event queue for QueuedEvents
 */
function queue() {
    return EventQueue_1.default.global();
}
exports.queue = queue;
/**
 * Convenience function, same as EventQueue.global().flushOnce().
 * Flushes the QueuedEvents, calling all events currently in the queue but not
 * any events put into the queue as a result of the flush.
 */
function flushOnce() {
    EventQueue_1.default.global().flushOnce();
}
exports.flushOnce = flushOnce;
/**
 * Convenience function, same as EventQueue.global().flush().
 * Flushes the QueuedEvents, calling all handlers currently in the queue and those
 * put into the queue as a result of the flush.
 * @param maxRounds Optional, default 10. Number of iterations after which to throw an error because
 *                  the queue keeps filling up. Set to undefined or null to disable this.
 */
function flush(maxRounds) {
    if (maxRounds === void 0) { maxRounds = 10; }
    EventQueue_1.default.global().flush(maxRounds);
}
exports.flush = flush;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvbGliL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDZEQUE2RDtBQUM3RCxlQUFlO0FBRWYsWUFBWSxDQUFDOzs7OztBQUViLGtDQUE2QjtBQUM3QixrQ0FBNkI7QUFDN0Isb0NBQStCO0FBQy9CLG1DQUE4QjtBQUM5QixpQ0FBNEI7QUFFNUIsMkNBQW1EO0FBQ25ELDJDQUFtRDtBQUEzQyxrQ0FBQSxPQUFPLENBQWM7QUFFN0I7O0dBRUc7QUFDSCxTQUFnQixLQUFLO0lBQ2pCLE9BQU8sb0JBQVUsQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUMvQixDQUFDO0FBRkQsc0JBRUM7QUFFRDs7OztHQUlHO0FBQ0gsU0FBZ0IsU0FBUztJQUNyQixvQkFBVSxDQUFDLE1BQU0sRUFBRSxDQUFDLFNBQVMsRUFBRSxDQUFDO0FBQ3BDLENBQUM7QUFGRCw4QkFFQztBQUVEOzs7Ozs7R0FNRztBQUNILFNBQWdCLEtBQUssQ0FBQyxTQUFzQjtJQUF0QiwwQkFBQSxFQUFBLGNBQXNCO0lBQ3hDLG9CQUFVLENBQUMsTUFBTSxFQUFFLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQ3pDLENBQUM7QUFGRCxzQkFFQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCDCqSAyMDE1IFJvZ2llciBTY2hvdXRlbjxnaXRodWJAd29ya2luZ2NvZGUubmluamE+XHJcbi8vIExpY2Vuc2U6IElTQ1xyXG5cclxuJ3VzZSBzdHJpY3QnO1xyXG5cclxuZXhwb3J0ICogZnJvbSAnLi9iYXNlLWV2ZW50JztcclxuZXhwb3J0ICogZnJvbSAnLi9zeW5jLWV2ZW50JztcclxuZXhwb3J0ICogZnJvbSAnLi9xdWV1ZWQtZXZlbnQnO1xyXG5leHBvcnQgKiBmcm9tICcuL2FzeW5jLWV2ZW50JztcclxuZXhwb3J0ICogZnJvbSAnLi9hbnktZXZlbnQnO1xyXG5cclxuaW1wb3J0IHtkZWZhdWx0IGFzIEV2ZW50UXVldWV9IGZyb20gJy4vRXZlbnRRdWV1ZSc7XHJcbmV4cG9ydCB7ZGVmYXVsdCBhcyBFdmVudFF1ZXVlfSBmcm9tICcuL0V2ZW50UXVldWUnO1xyXG5cclxuLyoqXHJcbiAqIFRoZSBnbG9iYWwgZXZlbnQgcXVldWUgZm9yIFF1ZXVlZEV2ZW50c1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHF1ZXVlKCk6IEV2ZW50UXVldWUge1xyXG4gICAgcmV0dXJuIEV2ZW50UXVldWUuZ2xvYmFsKCk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDb252ZW5pZW5jZSBmdW5jdGlvbiwgc2FtZSBhcyBFdmVudFF1ZXVlLmdsb2JhbCgpLmZsdXNoT25jZSgpLlxyXG4gKiBGbHVzaGVzIHRoZSBRdWV1ZWRFdmVudHMsIGNhbGxpbmcgYWxsIGV2ZW50cyBjdXJyZW50bHkgaW4gdGhlIHF1ZXVlIGJ1dCBub3RcclxuICogYW55IGV2ZW50cyBwdXQgaW50byB0aGUgcXVldWUgYXMgYSByZXN1bHQgb2YgdGhlIGZsdXNoLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGZsdXNoT25jZSgpOiB2b2lkIHtcclxuICAgIEV2ZW50UXVldWUuZ2xvYmFsKCkuZmx1c2hPbmNlKCk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDb252ZW5pZW5jZSBmdW5jdGlvbiwgc2FtZSBhcyBFdmVudFF1ZXVlLmdsb2JhbCgpLmZsdXNoKCkuXHJcbiAqIEZsdXNoZXMgdGhlIFF1ZXVlZEV2ZW50cywgY2FsbGluZyBhbGwgaGFuZGxlcnMgY3VycmVudGx5IGluIHRoZSBxdWV1ZSBhbmQgdGhvc2VcclxuICogcHV0IGludG8gdGhlIHF1ZXVlIGFzIGEgcmVzdWx0IG9mIHRoZSBmbHVzaC5cclxuICogQHBhcmFtIG1heFJvdW5kcyBPcHRpb25hbCwgZGVmYXVsdCAxMC4gTnVtYmVyIG9mIGl0ZXJhdGlvbnMgYWZ0ZXIgd2hpY2ggdG8gdGhyb3cgYW4gZXJyb3IgYmVjYXVzZVxyXG4gKiAgICAgICAgICAgICAgICAgIHRoZSBxdWV1ZSBrZWVwcyBmaWxsaW5nIHVwLiBTZXQgdG8gdW5kZWZpbmVkIG9yIG51bGwgdG8gZGlzYWJsZSB0aGlzLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGZsdXNoKG1heFJvdW5kczogbnVtYmVyID0gMTApOiB2b2lkIHtcclxuICAgIEV2ZW50UXVldWUuZ2xvYmFsKCkuZmx1c2gobWF4Um91bmRzKTtcclxufVxyXG4iXX0=

/***/ }),

/***/ "./node_modules/ts-events/dist/lib/objects.js":
/*!****************************************************!*\
  !*** ./node_modules/ts-events/dist/lib/objects.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright © 2015 Rogier Schouten<github@workingcode.ninja>
// License: ISC

Object.defineProperty(exports, "__esModule", { value: true });
function shallowEquals(a, b) {
    if (a === b) {
        return true;
    }
    if (typeof a !== typeof b) {
        return false;
    }
    switch (typeof a) {
        case 'boolean':
        case 'number':
        case 'string':
        case 'function':
        case 'symbol':
        case 'undefined':
            // already did === compare
            return false;
        case 'object':
            if (a === null || b === null) {
                return false; // already compared ===
            }
            if (Array.isArray(a) || Array.isArray(b)) {
                if (!Array.isArray(a) || !Array.isArray(b)) {
                    return false;
                }
                if (a.length !== b.length) {
                    return false;
                }
                for (var i = 0; i < a.length; ++i) {
                    if (a[i] !== b[i]) {
                        return false;
                    }
                }
                return true;
            }
            var namesA = [];
            var namesB = [];
            for (var name_1 in a) {
                if (a.hasOwnProperty(name_1)) {
                    namesA.push(name_1);
                }
            }
            for (var name_2 in b) {
                if (b.hasOwnProperty(name_2)) {
                    namesB.push(name_2);
                }
            }
            namesA.sort();
            namesB.sort();
            if (namesA.join(',') !== namesB.join(',')) {
                return false;
            }
            for (var i = 0; i < namesA.length; ++i) {
                if (a[namesA[i]] !== b[namesA[i]]) {
                    return false;
                }
            }
            return true;
        default:
            return false;
    }
}
exports.shallowEquals = shallowEquals;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2JqZWN0cy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9saWIvb2JqZWN0cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw2REFBNkQ7QUFDN0QsZUFBZTtBQUVmLFlBQVksQ0FBQzs7QUFFYixTQUFnQixhQUFhLENBQUMsQ0FBTSxFQUFFLENBQU07SUFDeEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFO1FBQ1QsT0FBTyxJQUFJLENBQUM7S0FDZjtJQUNELElBQUksT0FBTyxDQUFDLEtBQUssT0FBTyxDQUFDLEVBQUU7UUFDdkIsT0FBTyxLQUFLLENBQUM7S0FDaEI7SUFDRCxRQUFRLE9BQU8sQ0FBQyxFQUFFO1FBQ2QsS0FBSyxTQUFTLENBQUM7UUFDZixLQUFLLFFBQVEsQ0FBQztRQUNkLEtBQUssUUFBUSxDQUFDO1FBQ2QsS0FBSyxVQUFVLENBQUM7UUFDaEIsS0FBSyxRQUFRLENBQUM7UUFDZCxLQUFLLFdBQVc7WUFDWiwwQkFBMEI7WUFDMUIsT0FBTyxLQUFLLENBQUM7UUFDakIsS0FBSyxRQUFRO1lBQ1QsSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsS0FBSyxJQUFJLEVBQUU7Z0JBQzFCLE9BQU8sS0FBSyxDQUFDLENBQUMsdUJBQXVCO2FBQ3hDO1lBQ0QsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUU7Z0JBQ3RDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRTtvQkFDeEMsT0FBTyxLQUFLLENBQUM7aUJBQ2hCO2dCQUNELElBQUksQ0FBQyxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUMsTUFBTSxFQUFFO29CQUN2QixPQUFPLEtBQUssQ0FBQztpQkFDaEI7Z0JBQ0QsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLEVBQUU7b0JBQy9CLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTt3QkFDZixPQUFPLEtBQUssQ0FBQztxQkFDaEI7aUJBQ0o7Z0JBQ0QsT0FBTyxJQUFJLENBQUM7YUFDZjtZQUNELElBQU0sTUFBTSxHQUFhLEVBQUUsQ0FBQztZQUM1QixJQUFNLE1BQU0sR0FBYSxFQUFFLENBQUM7WUFDNUIsS0FBSyxJQUFNLE1BQUksSUFBSSxDQUFDLEVBQUU7Z0JBQ2xCLElBQUksQ0FBQyxDQUFDLGNBQWMsQ0FBQyxNQUFJLENBQUMsRUFBRTtvQkFDeEIsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFJLENBQUMsQ0FBQztpQkFDckI7YUFDSjtZQUNELEtBQUssSUFBTSxNQUFJLElBQUksQ0FBQyxFQUFFO2dCQUNsQixJQUFJLENBQUMsQ0FBQyxjQUFjLENBQUMsTUFBSSxDQUFDLEVBQUU7b0JBQ3hCLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBSSxDQUFDLENBQUM7aUJBQ3JCO2FBQ0o7WUFDRCxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDZCxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDZCxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRTtnQkFDdkMsT0FBTyxLQUFLLENBQUM7YUFDaEI7WUFDRCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsTUFBTSxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsRUFBRTtnQkFDcEMsSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO29CQUMvQixPQUFPLEtBQUssQ0FBQztpQkFDaEI7YUFDSjtZQUNELE9BQU8sSUFBSSxDQUFDO1FBQ2hCO1lBQ0ksT0FBTyxLQUFLLENBQUM7S0FDcEI7QUFDTCxDQUFDO0FBNURELHNDQTREQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCDCqSAyMDE1IFJvZ2llciBTY2hvdXRlbjxnaXRodWJAd29ya2luZ2NvZGUubmluamE+XHJcbi8vIExpY2Vuc2U6IElTQ1xyXG5cclxuJ3VzZSBzdHJpY3QnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNoYWxsb3dFcXVhbHMoYTogYW55LCBiOiBhbnkpOiBib29sZWFuIHtcclxuICAgIGlmIChhID09PSBiKSB7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgICBpZiAodHlwZW9mIGEgIT09IHR5cGVvZiBiKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgc3dpdGNoICh0eXBlb2YgYSkge1xyXG4gICAgICAgIGNhc2UgJ2Jvb2xlYW4nOlxyXG4gICAgICAgIGNhc2UgJ251bWJlcic6XHJcbiAgICAgICAgY2FzZSAnc3RyaW5nJzpcclxuICAgICAgICBjYXNlICdmdW5jdGlvbic6XHJcbiAgICAgICAgY2FzZSAnc3ltYm9sJzpcclxuICAgICAgICBjYXNlICd1bmRlZmluZWQnOlxyXG4gICAgICAgICAgICAvLyBhbHJlYWR5IGRpZCA9PT0gY29tcGFyZVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgY2FzZSAnb2JqZWN0JzpcclxuICAgICAgICAgICAgaWYgKGEgPT09IG51bGwgfHwgYiA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlOyAvLyBhbHJlYWR5IGNvbXBhcmVkID09PVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KGEpIHx8IEFycmF5LmlzQXJyYXkoYikpIHtcclxuICAgICAgICAgICAgICAgIGlmICghQXJyYXkuaXNBcnJheShhKSB8fCAhQXJyYXkuaXNBcnJheShiKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChhLmxlbmd0aCAhPT0gYi5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGEubGVuZ3RoOyArK2kpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoYVtpXSAhPT0gYltpXSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3QgbmFtZXNBOiBzdHJpbmdbXSA9IFtdO1xyXG4gICAgICAgICAgICBjb25zdCBuYW1lc0I6IHN0cmluZ1tdID0gW107XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgbmFtZSBpbiBhKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoYS5oYXNPd25Qcm9wZXJ0eShuYW1lKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWVzQS5wdXNoKG5hbWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgbmFtZSBpbiBiKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoYi5oYXNPd25Qcm9wZXJ0eShuYW1lKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWVzQi5wdXNoKG5hbWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG5hbWVzQS5zb3J0KCk7XHJcbiAgICAgICAgICAgIG5hbWVzQi5zb3J0KCk7XHJcbiAgICAgICAgICAgIGlmIChuYW1lc0Euam9pbignLCcpICE9PSBuYW1lc0Iuam9pbignLCcpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuYW1lc0EubGVuZ3RoOyArK2kpIHtcclxuICAgICAgICAgICAgICAgIGlmIChhW25hbWVzQVtpXV0gIT09IGJbbmFtZXNBW2ldXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbn1cclxuIl19

/***/ }),

/***/ "./node_modules/ts-events/dist/lib/queued-event.js":
/*!*********************************************************!*\
  !*** ./node_modules/ts-events/dist/lib/queued-event.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright © 2015 Rogier Schouten<github@workingcode.ninja>
// License: ISC

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var base_event_1 = __webpack_require__(/*! ./base-event */ "./node_modules/ts-events/dist/lib/base-event.js");
var EventQueue_1 = __webpack_require__(/*! ./EventQueue */ "./node_modules/ts-events/dist/lib/EventQueue.js");
/**
 * Event that stays in a queue until you process the queue. Allows fine-grained
 * control over when events happen.
 * - Optionally condenses multiple post() calls into one.
 * - Handlers are called only for events posted after they were attached.
 * - Handlers are not called anymore when they are detached, even if a post() is in progress
 */
var QueuedEvent = /** @class */ (function (_super) {
    __extends(QueuedEvent, _super);
    /**
     * Constructor
     * @param opts Optional, an object with the following members:
     *             - condensed: a Boolean indicating whether to condense multiple calls to post() into one (default false)
     *             - queue: a specific event queue to use. The global EventQueue instance is used if not given.
     */
    function QueuedEvent(opts) {
        var _this = _super.call(this) || this;
        _this._queued = false;
        _this.options = opts;
        var options = opts || {};
        if (typeof options.condensed === 'boolean') {
            _this._condensed = options.condensed;
        }
        else {
            _this._condensed = false;
        }
        if (typeof options.queue === 'object' && options.queue !== null) {
            _this._queue = options.queue;
        }
        return _this;
    }
    QueuedEvent.prototype.post = function () {
        var _this = this;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (!this._listeners || this._listeners.length === 0) {
            return;
        }
        var queue = (this._queue ? this._queue : EventQueue_1.default.global());
        if (this._condensed) {
            this._queuedData = args;
            this._queuedListeners = this._listeners;
            if (this._queued) {
                return;
            }
            else {
                this._queued = true;
                queue.add(function () {
                    // immediately mark non-queued to allow new AsyncEvent to happen as result
                    // of calling handlers
                    _this._queued = false;
                    // cache listeners and data because they might change while calling event handlers
                    var data = _this._queuedData;
                    var listeners = _this._queuedListeners;
                    for (var i = 0; i < listeners.length; ++i) {
                        var listener = listeners[i];
                        _this._call(listener, data);
                    }
                });
            }
        }
        else { // not condensed
            var listeners_1 = this._listeners;
            queue.add(function () {
                for (var i = 0; i < listeners_1.length; ++i) {
                    var listener = listeners_1[i];
                    _this._call(listener, args);
                }
            });
        }
    };
    return QueuedEvent;
}(base_event_1.BaseEvent));
exports.QueuedEvent = QueuedEvent;
/**
 * Convenience class for events without data
 */
var VoidQueuedEvent = /** @class */ (function (_super) {
    __extends(VoidQueuedEvent, _super);
    function VoidQueuedEvent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Send the event.
     */
    VoidQueuedEvent.prototype.post = function () {
        _super.prototype.post.call(this, undefined);
    };
    return VoidQueuedEvent;
}(QueuedEvent));
exports.VoidQueuedEvent = VoidQueuedEvent;
/**
 * Similar to 'error' event on EventEmitter: throws when a post() occurs while no handlers set.
 */
var ErrorQueuedEvent = /** @class */ (function (_super) {
    __extends(ErrorQueuedEvent, _super);
    function ErrorQueuedEvent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ErrorQueuedEvent.prototype.post = function (data) {
        if (!this._listeners || this._listeners.length === 0) {
            throw new Error("error event posted while no listeners attached. Error: " + data.message);
        }
        _super.prototype.post.call(this, data);
    };
    return ErrorQueuedEvent;
}(QueuedEvent));
exports.ErrorQueuedEvent = ErrorQueuedEvent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVldWVkLWV2ZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2xpYi9xdWV1ZWQtZXZlbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsNkRBQTZEO0FBQzdELGVBQWU7QUFFZixZQUFZLENBQUM7Ozs7Ozs7Ozs7Ozs7OztBQUViLDJDQUEyRDtBQUMzRCwyQ0FBbUQ7QUFnQm5EOzs7Ozs7R0FNRztBQUNIO0lBQW9DLCtCQUFZO0lBYTVDOzs7OztPQUtHO0lBQ0gscUJBQVksSUFBc0I7UUFBbEMsWUFDSSxpQkFBTyxTQVdWO1FBdEJPLGFBQU8sR0FBWSxLQUFLLENBQUM7UUFZN0IsS0FBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDcEIsSUFBTSxPQUFPLEdBQW9CLElBQUksSUFBSSxFQUFFLENBQUM7UUFDNUMsSUFBSSxPQUFPLE9BQU8sQ0FBQyxTQUFTLEtBQUssU0FBUyxFQUFFO1lBQ3hDLEtBQUksQ0FBQyxVQUFVLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQztTQUN2QzthQUFNO1lBQ0gsS0FBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7U0FDM0I7UUFDRCxJQUFJLE9BQU8sT0FBTyxDQUFDLEtBQUssS0FBSyxRQUFRLElBQUksT0FBTyxDQUFDLEtBQUssS0FBSyxJQUFJLEVBQUU7WUFDN0QsS0FBSSxDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDO1NBQy9COztJQUNMLENBQUM7SUFTTSwwQkFBSSxHQUFYO1FBQUEsaUJBa0NDO1FBbENXLGNBQWM7YUFBZCxVQUFjLEVBQWQscUJBQWMsRUFBZCxJQUFjO1lBQWQseUJBQWM7O1FBQ3RCLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtZQUNsRCxPQUFPO1NBQ1Y7UUFDRCxJQUFNLEtBQUssR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLG9CQUFVLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztRQUNoRSxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDakIsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7WUFDeEIsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7WUFDeEMsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO2dCQUNkLE9BQU87YUFDVjtpQkFBTTtnQkFDSCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztnQkFDcEIsS0FBSyxDQUFDLEdBQUcsQ0FBQztvQkFDTiwwRUFBMEU7b0JBQzFFLHNCQUFzQjtvQkFDdEIsS0FBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7b0JBQ3JCLGtGQUFrRjtvQkFDbEYsSUFBTSxJQUFJLEdBQUcsS0FBSSxDQUFDLFdBQVcsQ0FBQztvQkFDOUIsSUFBTSxTQUFTLEdBQUcsS0FBSSxDQUFDLGdCQUFnQixDQUFDO29CQUN4QyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsU0FBUyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsRUFBRTt3QkFDdkMsSUFBTSxRQUFRLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUM5QixLQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQztxQkFDOUI7Z0JBQ0wsQ0FBQyxDQUFDLENBQUM7YUFDTjtTQUNKO2FBQU0sRUFBRSxnQkFBZ0I7WUFDckIsSUFBTSxXQUFTLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQztZQUNsQyxLQUFLLENBQUMsR0FBRyxDQUFDO2dCQUNOLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxXQUFTLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxFQUFFO29CQUN2QyxJQUFNLFFBQVEsR0FBRyxXQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQzlCLEtBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDO2lCQUM5QjtZQUNMLENBQUMsQ0FBQyxDQUFDO1NBQ047SUFDTCxDQUFDO0lBQ0wsa0JBQUM7QUFBRCxDQUFDLEFBM0VELENBQW9DLHNCQUFTLEdBMkU1QztBQTNFWSxrQ0FBVztBQTZFeEI7O0dBRUc7QUFDSDtJQUFxQyxtQ0FBaUI7SUFBdEQ7O0lBUUEsQ0FBQztJQU5HOztPQUVHO0lBQ0ksOEJBQUksR0FBWDtRQUNJLGlCQUFNLElBQUksWUFBQyxTQUFTLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBQ0wsc0JBQUM7QUFBRCxDQUFDLEFBUkQsQ0FBcUMsV0FBVyxHQVEvQztBQVJZLDBDQUFlO0FBVzVCOztHQUVHO0FBQ0g7SUFBc0Msb0NBQWtCO0lBQXhEOztJQVFBLENBQUM7SUFOVSwrQkFBSSxHQUFYLFVBQVksSUFBVztRQUNuQixJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7WUFDbEQsTUFBTSxJQUFJLEtBQUssQ0FBQyw0REFBMEQsSUFBSSxDQUFDLE9BQVMsQ0FBQyxDQUFDO1NBQzdGO1FBQ0QsaUJBQU0sSUFBSSxZQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3JCLENBQUM7SUFDTCx1QkFBQztBQUFELENBQUMsQUFSRCxDQUFzQyxXQUFXLEdBUWhEO0FBUlksNENBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IMKpIDIwMTUgUm9naWVyIFNjaG91dGVuPGdpdGh1YkB3b3JraW5nY29kZS5uaW5qYT5cclxuLy8gTGljZW5zZTogSVNDXHJcblxyXG4ndXNlIHN0cmljdCc7XHJcblxyXG5pbXBvcnQge0Jhc2VFdmVudCwgUG9zdGFibGUsIExpc3RlbmVyfSBmcm9tICcuL2Jhc2UtZXZlbnQnO1xyXG5pbXBvcnQge2RlZmF1bHQgYXMgRXZlbnRRdWV1ZX0gZnJvbSAnLi9FdmVudFF1ZXVlJztcclxuXHJcbi8qKlxyXG4gKiBPcHRpb25zIGZvciB0aGUgUXVldWVkRXZlbnQgY29uc3RydWN0b3JcclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgUXVldWVkRXZlbnRPcHRzIHtcclxuICAgIC8qKlxyXG4gICAgICogQ29uZGVuc2UgbXVsdGlwbGUgY2FsbHMgdG8gcG9zdCgpIGludG8gb25lLlxyXG4gICAgICovXHJcbiAgICBjb25kZW5zZWQ/OiBib29sZWFuO1xyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpYyBldmVudCBxdWV1ZSB0byB1c2UuIElmIG5vdCBwcm92aWRlZCwgdGhlIGdsb2JhbCBpbnN0YW5jZSBpcyB1c2VkLlxyXG4gICAgICovXHJcbiAgICBxdWV1ZT86IEV2ZW50UXVldWU7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBFdmVudCB0aGF0IHN0YXlzIGluIGEgcXVldWUgdW50aWwgeW91IHByb2Nlc3MgdGhlIHF1ZXVlLiBBbGxvd3MgZmluZS1ncmFpbmVkXHJcbiAqIGNvbnRyb2wgb3ZlciB3aGVuIGV2ZW50cyBoYXBwZW4uXHJcbiAqIC0gT3B0aW9uYWxseSBjb25kZW5zZXMgbXVsdGlwbGUgcG9zdCgpIGNhbGxzIGludG8gb25lLlxyXG4gKiAtIEhhbmRsZXJzIGFyZSBjYWxsZWQgb25seSBmb3IgZXZlbnRzIHBvc3RlZCBhZnRlciB0aGV5IHdlcmUgYXR0YWNoZWQuXHJcbiAqIC0gSGFuZGxlcnMgYXJlIG5vdCBjYWxsZWQgYW55bW9yZSB3aGVuIHRoZXkgYXJlIGRldGFjaGVkLCBldmVuIGlmIGEgcG9zdCgpIGlzIGluIHByb2dyZXNzXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgUXVldWVkRXZlbnQ8VD4gZXh0ZW5kcyBCYXNlRXZlbnQ8VD4gaW1wbGVtZW50cyBQb3N0YWJsZTxUPiB7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBVc2VkIGludGVybmFsbHkgLSB0aGUgZXhhY3Qgb3B0aW9ucyBvYmplY3QgZ2l2ZW4gdG8gY29uc3RydWN0b3JcclxuICAgICAqL1xyXG4gICAgcHVibGljIG9wdGlvbnM6IFF1ZXVlZEV2ZW50T3B0cztcclxuXHJcbiAgICBwcml2YXRlIF9jb25kZW5zZWQ6IGJvb2xlYW47XHJcbiAgICBwcml2YXRlIF9xdWV1ZTogRXZlbnRRdWV1ZTtcclxuICAgIHByaXZhdGUgX3F1ZXVlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSBfcXVldWVkTGlzdGVuZXJzOiBMaXN0ZW5lcjxUPltdO1xyXG4gICAgcHJpdmF0ZSBfcXVldWVkRGF0YTogYW55W107XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDb25zdHJ1Y3RvclxyXG4gICAgICogQHBhcmFtIG9wdHMgT3B0aW9uYWwsIGFuIG9iamVjdCB3aXRoIHRoZSBmb2xsb3dpbmcgbWVtYmVyczpcclxuICAgICAqICAgICAgICAgICAgIC0gY29uZGVuc2VkOiBhIEJvb2xlYW4gaW5kaWNhdGluZyB3aGV0aGVyIHRvIGNvbmRlbnNlIG11bHRpcGxlIGNhbGxzIHRvIHBvc3QoKSBpbnRvIG9uZSAoZGVmYXVsdCBmYWxzZSlcclxuICAgICAqICAgICAgICAgICAgIC0gcXVldWU6IGEgc3BlY2lmaWMgZXZlbnQgcXVldWUgdG8gdXNlLiBUaGUgZ2xvYmFsIEV2ZW50UXVldWUgaW5zdGFuY2UgaXMgdXNlZCBpZiBub3QgZ2l2ZW4uXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKG9wdHM/OiBRdWV1ZWRFdmVudE9wdHMpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMub3B0aW9ucyA9IG9wdHM7XHJcbiAgICAgICAgY29uc3Qgb3B0aW9uczogUXVldWVkRXZlbnRPcHRzID0gb3B0cyB8fCB7fTtcclxuICAgICAgICBpZiAodHlwZW9mIG9wdGlvbnMuY29uZGVuc2VkID09PSAnYm9vbGVhbicpIHtcclxuICAgICAgICAgICAgdGhpcy5fY29uZGVuc2VkID0gb3B0aW9ucy5jb25kZW5zZWQ7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5fY29uZGVuc2VkID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5xdWV1ZSA9PT0gJ29iamVjdCcgJiYgb3B0aW9ucy5xdWV1ZSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aGlzLl9xdWV1ZSA9IG9wdGlvbnMucXVldWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgKiBTZW5kIHRoZSBldmVudC4gRXZlbnRzIGFyZSBxdWV1ZWQgaW4gdGhlIGV2ZW50IHF1ZXVlIHVudGlsIGZsdXNoZWQgb3V0LlxyXG4gICAgKiBJZiB0aGUgJ2NvbmRlbnNlZCcgb3B0aW9uIHdhcyBnaXZlbiBpbiB0aGUgY29uc3RydWN0b3IsIG11bHRpcGxlIHBvc3RzKClcclxuICAgICogYmV0d2VlbiBxdWV1ZSBmbHVzaGVzIGFyZSBjb25kZW5zZWQgaW50byBvbmUgY2FsbCB3aXRoIHRoZSBkYXRhIGZyb20gdGhlXHJcbiAgICAqIGxhc3QgcG9zdCgpIGNhbGwuXHJcbiAgICAqL1xyXG4gICAgcHVibGljIHBvc3QoZGF0YTogVCk6IHZvaWQ7XHJcbiAgICBwdWJsaWMgcG9zdCguLi5hcmdzOiBhbnlbXSk6IHZvaWQge1xyXG4gICAgICAgIGlmICghdGhpcy5fbGlzdGVuZXJzIHx8IHRoaXMuX2xpc3RlbmVycy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBxdWV1ZSA9ICh0aGlzLl9xdWV1ZSA/IHRoaXMuX3F1ZXVlIDogRXZlbnRRdWV1ZS5nbG9iYWwoKSk7XHJcbiAgICAgICAgaWYgKHRoaXMuX2NvbmRlbnNlZCkge1xyXG4gICAgICAgICAgICB0aGlzLl9xdWV1ZWREYXRhID0gYXJncztcclxuICAgICAgICAgICAgdGhpcy5fcXVldWVkTGlzdGVuZXJzID0gdGhpcy5fbGlzdGVuZXJzO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5fcXVldWVkKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9xdWV1ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgcXVldWUuYWRkKCgpOiB2b2lkID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBpbW1lZGlhdGVseSBtYXJrIG5vbi1xdWV1ZWQgdG8gYWxsb3cgbmV3IEFzeW5jRXZlbnQgdG8gaGFwcGVuIGFzIHJlc3VsdFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIG9mIGNhbGxpbmcgaGFuZGxlcnNcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9xdWV1ZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBjYWNoZSBsaXN0ZW5lcnMgYW5kIGRhdGEgYmVjYXVzZSB0aGV5IG1pZ2h0IGNoYW5nZSB3aGlsZSBjYWxsaW5nIGV2ZW50IGhhbmRsZXJzXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IHRoaXMuX3F1ZXVlZERhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbGlzdGVuZXJzID0gdGhpcy5fcXVldWVkTGlzdGVuZXJzO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGlzdGVuZXJzLmxlbmd0aDsgKytpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGxpc3RlbmVyID0gbGlzdGVuZXJzW2ldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9jYWxsKGxpc3RlbmVyLCBkYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7IC8vIG5vdCBjb25kZW5zZWRcclxuICAgICAgICAgICAgY29uc3QgbGlzdGVuZXJzID0gdGhpcy5fbGlzdGVuZXJzO1xyXG4gICAgICAgICAgICBxdWV1ZS5hZGQoKCk6IHZvaWQgPT4ge1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaXN0ZW5lcnMubGVuZ3RoOyArK2kpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBsaXN0ZW5lciA9IGxpc3RlbmVyc1tpXTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9jYWxsKGxpc3RlbmVyLCBhcmdzKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICogQ29udmVuaWVuY2UgY2xhc3MgZm9yIGV2ZW50cyB3aXRob3V0IGRhdGFcclxuICovXHJcbmV4cG9ydCBjbGFzcyBWb2lkUXVldWVkRXZlbnQgZXh0ZW5kcyBRdWV1ZWRFdmVudDx2b2lkPiB7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZW5kIHRoZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHBvc3QoKTogdm9pZCB7XHJcbiAgICAgICAgc3VwZXIucG9zdCh1bmRlZmluZWQpO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuLyoqXHJcbiAqIFNpbWlsYXIgdG8gJ2Vycm9yJyBldmVudCBvbiBFdmVudEVtaXR0ZXI6IHRocm93cyB3aGVuIGEgcG9zdCgpIG9jY3VycyB3aGlsZSBubyBoYW5kbGVycyBzZXQuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgRXJyb3JRdWV1ZWRFdmVudCBleHRlbmRzIFF1ZXVlZEV2ZW50PEVycm9yPiB7XHJcblxyXG4gICAgcHVibGljIHBvc3QoZGF0YTogRXJyb3IpOiB2b2lkIHtcclxuICAgICAgICBpZiAoIXRoaXMuX2xpc3RlbmVycyB8fCB0aGlzLl9saXN0ZW5lcnMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgZXJyb3IgZXZlbnQgcG9zdGVkIHdoaWxlIG5vIGxpc3RlbmVycyBhdHRhY2hlZC4gRXJyb3I6ICR7ZGF0YS5tZXNzYWdlfWApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzdXBlci5wb3N0KGRhdGEpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==

/***/ }),

/***/ "./node_modules/ts-events/dist/lib/sync-event.js":
/*!*******************************************************!*\
  !*** ./node_modules/ts-events/dist/lib/sync-event.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright © 2015 Rogier Schouten<github@workingcode.ninja>
// License: ISC

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var base_event_1 = __webpack_require__(/*! ./base-event */ "./node_modules/ts-events/dist/lib/base-event.js");
/**
 * This is a true EventEmitter replacement: the handlers are called synchronously when
 * you post the event.
 * - Allows better error handling by aggregating any errors thrown by handlers.
 * - Prevents livelock by throwing an error when recursion depth is above a maximum.
 * - Handlers are called only for events posted after they were attached.
 * - Handlers are not called anymore when they are detached, even if a post() is in progress
 */
var SyncEvent = /** @class */ (function (_super) {
    __extends(SyncEvent, _super);
    function SyncEvent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Recursive post() invocations
         */
        _this._recursion = 0;
        return _this;
    }
    SyncEvent.prototype.post = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (!this._listeners || this._listeners.length === 0) {
            return;
        }
        this._recursion++;
        if (SyncEvent.MAX_RECURSION_DEPTH > 0 &&
            this._recursion > SyncEvent.MAX_RECURSION_DEPTH) {
            throw new Error('event fired recursively');
        }
        // copy a reference to the array because this._listeners might be replaced during
        // the handler calls
        var listeners = this._listeners;
        for (var i = 0; i < listeners.length; ++i) {
            var listener = listeners[i];
            this._call(listener, args);
        }
        this._recursion--;
    };
    /**
     * Maximum number of times that an event handler may cause the same event
     * recursively.
     */
    SyncEvent.MAX_RECURSION_DEPTH = 10;
    return SyncEvent;
}(base_event_1.BaseEvent));
exports.SyncEvent = SyncEvent;
/**
 * Convenience class for events without data
 */
var VoidSyncEvent = /** @class */ (function (_super) {
    __extends(VoidSyncEvent, _super);
    function VoidSyncEvent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Send the event.
     */
    VoidSyncEvent.prototype.post = function () {
        _super.prototype.post.call(this, undefined);
    };
    return VoidSyncEvent;
}(SyncEvent));
exports.VoidSyncEvent = VoidSyncEvent;
/**
 * Similar to 'error' event on EventEmitter: throws when a post() occurs while no handlers set.
 */
var ErrorSyncEvent = /** @class */ (function (_super) {
    __extends(ErrorSyncEvent, _super);
    function ErrorSyncEvent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ErrorSyncEvent.prototype.post = function (data) {
        if (this.listenerCount() === 0) {
            throw new Error("error event posted while no listeners attached. Error: " + data.message);
        }
        _super.prototype.post.call(this, data);
    };
    return ErrorSyncEvent;
}(SyncEvent));
exports.ErrorSyncEvent = ErrorSyncEvent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3luYy1ldmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9saWIvc3luYy1ldmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw2REFBNkQ7QUFDN0QsZUFBZTtBQUVmLFlBQVksQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O0FBRWIsMkNBQWlEO0FBRWpEOzs7Ozs7O0dBT0c7QUFDSDtJQUFrQyw2QkFBWTtJQUE5QztRQUFBLHFFQXFDQztRQTdCRzs7V0FFRztRQUNLLGdCQUFVLEdBQVcsQ0FBQyxDQUFDOztJQTBCbkMsQ0FBQztJQWxCVSx3QkFBSSxHQUFYO1FBQVksY0FBYzthQUFkLFVBQWMsRUFBZCxxQkFBYyxFQUFkLElBQWM7WUFBZCx5QkFBYzs7UUFDdEIsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1lBQ2xELE9BQU87U0FDVjtRQUNELElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNsQixJQUFJLFNBQVMsQ0FBQyxtQkFBbUIsR0FBRyxDQUFDO1lBQ2pDLElBQUksQ0FBQyxVQUFVLEdBQUcsU0FBUyxDQUFDLG1CQUFtQixFQUFFO1lBQ2pELE1BQU0sSUFBSSxLQUFLLENBQUMseUJBQXlCLENBQUMsQ0FBQztTQUM5QztRQUNELGlGQUFpRjtRQUNqRixvQkFBb0I7UUFDcEIsSUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUNsQyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsU0FBUyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsRUFBRTtZQUN2QyxJQUFNLFFBQVEsR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDOUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUM7U0FDOUI7UUFDRCxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQWxDRDs7O09BR0c7SUFDVyw2QkFBbUIsR0FBVyxFQUFFLENBQUM7SUErQm5ELGdCQUFDO0NBQUEsQUFyQ0QsQ0FBa0Msc0JBQVMsR0FxQzFDO0FBckNZLDhCQUFTO0FBdUN0Qjs7R0FFRztBQUNIO0lBQW1DLGlDQUFlO0lBQWxEOztJQVFBLENBQUM7SUFORzs7T0FFRztJQUNJLDRCQUFJLEdBQVg7UUFDSSxpQkFBTSxJQUFJLFlBQUMsU0FBUyxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUNMLG9CQUFDO0FBQUQsQ0FBQyxBQVJELENBQW1DLFNBQVMsR0FRM0M7QUFSWSxzQ0FBYTtBQVUxQjs7R0FFRztBQUNIO0lBQW9DLGtDQUFnQjtJQUFwRDs7SUFRQSxDQUFDO0lBTlUsNkJBQUksR0FBWCxVQUFZLElBQVc7UUFDbkIsSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFLEtBQUssQ0FBQyxFQUFFO1lBQzVCLE1BQU0sSUFBSSxLQUFLLENBQUMsNERBQTBELElBQUksQ0FBQyxPQUFTLENBQUMsQ0FBQztTQUM3RjtRQUNELGlCQUFNLElBQUksWUFBQyxJQUFJLENBQUMsQ0FBQztJQUNyQixDQUFDO0lBQ0wscUJBQUM7QUFBRCxDQUFDLEFBUkQsQ0FBb0MsU0FBUyxHQVE1QztBQVJZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IMKpIDIwMTUgUm9naWVyIFNjaG91dGVuPGdpdGh1YkB3b3JraW5nY29kZS5uaW5qYT5cclxuLy8gTGljZW5zZTogSVNDXHJcblxyXG4ndXNlIHN0cmljdCc7XHJcblxyXG5pbXBvcnQge0Jhc2VFdmVudCwgUG9zdGFibGV9IGZyb20gJy4vYmFzZS1ldmVudCc7XHJcblxyXG4vKipcclxuICogVGhpcyBpcyBhIHRydWUgRXZlbnRFbWl0dGVyIHJlcGxhY2VtZW50OiB0aGUgaGFuZGxlcnMgYXJlIGNhbGxlZCBzeW5jaHJvbm91c2x5IHdoZW5cclxuICogeW91IHBvc3QgdGhlIGV2ZW50LlxyXG4gKiAtIEFsbG93cyBiZXR0ZXIgZXJyb3IgaGFuZGxpbmcgYnkgYWdncmVnYXRpbmcgYW55IGVycm9ycyB0aHJvd24gYnkgaGFuZGxlcnMuXHJcbiAqIC0gUHJldmVudHMgbGl2ZWxvY2sgYnkgdGhyb3dpbmcgYW4gZXJyb3Igd2hlbiByZWN1cnNpb24gZGVwdGggaXMgYWJvdmUgYSBtYXhpbXVtLlxyXG4gKiAtIEhhbmRsZXJzIGFyZSBjYWxsZWQgb25seSBmb3IgZXZlbnRzIHBvc3RlZCBhZnRlciB0aGV5IHdlcmUgYXR0YWNoZWQuXHJcbiAqIC0gSGFuZGxlcnMgYXJlIG5vdCBjYWxsZWQgYW55bW9yZSB3aGVuIHRoZXkgYXJlIGRldGFjaGVkLCBldmVuIGlmIGEgcG9zdCgpIGlzIGluIHByb2dyZXNzXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgU3luY0V2ZW50PFQ+IGV4dGVuZHMgQmFzZUV2ZW50PFQ+IGltcGxlbWVudHMgUG9zdGFibGU8VD4ge1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogTWF4aW11bSBudW1iZXIgb2YgdGltZXMgdGhhdCBhbiBldmVudCBoYW5kbGVyIG1heSBjYXVzZSB0aGUgc2FtZSBldmVudFxyXG4gICAgICogcmVjdXJzaXZlbHkuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgTUFYX1JFQ1VSU0lPTl9ERVBUSDogbnVtYmVyID0gMTA7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZWN1cnNpdmUgcG9zdCgpIGludm9jYXRpb25zXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgX3JlY3Vyc2lvbjogbnVtYmVyID0gMDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFNlbmQgdGhlIGV2ZW50LiBIYW5kbGVycyBhcmUgY2FsbGVkIGltbWVkaWF0ZWx5IGFuZCBzeW5jaHJvbm91c2x5LlxyXG4gICAgICogSWYgYW4gZXJyb3IgaXMgdGhyb3duIGJ5IGEgaGFuZGxlciwgdGhlIHJlbWFpbmluZyBoYW5kbGVycyBhcmUgc3RpbGwgY2FsbGVkLlxyXG4gICAgICogQWZ0ZXJ3YXJkLCBhbiBBZ2dyZWdhdGVFcnJvciBpcyB0aHJvd24gd2l0aCB0aGUgb3JpZ2luYWwgZXJyb3IocykgaW4gaXRzICdjYXVzZXMnIHByb3BlcnR5LlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgcG9zdChkYXRhOiBUKTogdm9pZDtcclxuICAgIHB1YmxpYyBwb3N0KC4uLmFyZ3M6IGFueVtdKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKCF0aGlzLl9saXN0ZW5lcnMgfHwgdGhpcy5fbGlzdGVuZXJzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX3JlY3Vyc2lvbisrO1xyXG4gICAgICAgIGlmIChTeW5jRXZlbnQuTUFYX1JFQ1VSU0lPTl9ERVBUSCA+IDAgJiZcclxuICAgICAgICAgICAgdGhpcy5fcmVjdXJzaW9uID4gU3luY0V2ZW50Lk1BWF9SRUNVUlNJT05fREVQVEgpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdldmVudCBmaXJlZCByZWN1cnNpdmVseScpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBjb3B5IGEgcmVmZXJlbmNlIHRvIHRoZSBhcnJheSBiZWNhdXNlIHRoaXMuX2xpc3RlbmVycyBtaWdodCBiZSByZXBsYWNlZCBkdXJpbmdcclxuICAgICAgICAvLyB0aGUgaGFuZGxlciBjYWxsc1xyXG4gICAgICAgIGNvbnN0IGxpc3RlbmVycyA9IHRoaXMuX2xpc3RlbmVycztcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpc3RlbmVycy5sZW5ndGg7ICsraSkge1xyXG4gICAgICAgICAgICBjb25zdCBsaXN0ZW5lciA9IGxpc3RlbmVyc1tpXTtcclxuICAgICAgICAgICAgdGhpcy5fY2FsbChsaXN0ZW5lciwgYXJncyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX3JlY3Vyc2lvbi0tO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICogQ29udmVuaWVuY2UgY2xhc3MgZm9yIGV2ZW50cyB3aXRob3V0IGRhdGFcclxuICovXHJcbmV4cG9ydCBjbGFzcyBWb2lkU3luY0V2ZW50IGV4dGVuZHMgU3luY0V2ZW50PHZvaWQ+IHtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFNlbmQgdGhlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgcG9zdCgpOiB2b2lkIHtcclxuICAgICAgICBzdXBlci5wb3N0KHVuZGVmaW5lZCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBTaW1pbGFyIHRvICdlcnJvcicgZXZlbnQgb24gRXZlbnRFbWl0dGVyOiB0aHJvd3Mgd2hlbiBhIHBvc3QoKSBvY2N1cnMgd2hpbGUgbm8gaGFuZGxlcnMgc2V0LlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEVycm9yU3luY0V2ZW50IGV4dGVuZHMgU3luY0V2ZW50PEVycm9yPiB7XHJcblxyXG4gICAgcHVibGljIHBvc3QoZGF0YTogRXJyb3IpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5saXN0ZW5lckNvdW50KCkgPT09IDApIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBlcnJvciBldmVudCBwb3N0ZWQgd2hpbGUgbm8gbGlzdGVuZXJzIGF0dGFjaGVkLiBFcnJvcjogJHtkYXRhLm1lc3NhZ2V9YCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHN1cGVyLnBvc3QoZGF0YSk7XHJcbiAgICB9XHJcbn1cclxuIl19

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./node_modules/yaml/browser/dist/Anchors.js":
/*!***************************************************!*\
  !*** ./node_modules/yaml/browser/dist/Anchors.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _Alias = _interopRequireDefault(__webpack_require__(/*! ./schema/Alias */ "./node_modules/yaml/browser/dist/schema/Alias.js"));

var _Map = _interopRequireDefault(__webpack_require__(/*! ./schema/Map */ "./node_modules/yaml/browser/dist/schema/Map.js"));

var _Merge = _interopRequireDefault(__webpack_require__(/*! ./schema/Merge */ "./node_modules/yaml/browser/dist/schema/Merge.js"));

var _Scalar = _interopRequireDefault(__webpack_require__(/*! ./schema/Scalar */ "./node_modules/yaml/browser/dist/schema/Scalar.js"));

var _Seq = _interopRequireDefault(__webpack_require__(/*! ./schema/Seq */ "./node_modules/yaml/browser/dist/schema/Seq.js"));

var Anchors =
/*#__PURE__*/
function () {
  (0, _createClass2.default)(Anchors, null, [{
    key: "validAnchorNode",
    value: function validAnchorNode(node) {
      return node instanceof _Scalar.default || node instanceof _Seq.default || node instanceof _Map.default;
    }
  }]);

  function Anchors(prefix) {
    (0, _classCallCheck2.default)(this, Anchors);
    (0, _defineProperty2.default)(this, "map", {});
    this.prefix = prefix;
  }

  (0, _createClass2.default)(Anchors, [{
    key: "createAlias",
    value: function createAlias(node, name) {
      this.setAnchor(node, name);
      return new _Alias.default(node);
    }
  }, {
    key: "createMergePair",
    value: function createMergePair() {
      var _this = this;

      var merge = new _Merge.default();

      for (var _len = arguments.length, sources = new Array(_len), _key = 0; _key < _len; _key++) {
        sources[_key] = arguments[_key];
      }

      merge.value.items = sources.map(function (s) {
        if (s instanceof _Alias.default) {
          if (s.source instanceof _Map.default) return s;
        } else if (s instanceof _Map.default) {
          return _this.createAlias(s);
        }

        throw new Error('Merge sources must be Map nodes or their Aliases');
      });
      return merge;
    }
  }, {
    key: "getName",
    value: function getName(node) {
      var map = this.map;
      return Object.keys(map).find(function (a) {
        return map[a] === node;
      });
    }
  }, {
    key: "getNode",
    value: function getNode(name) {
      return this.map[name];
    }
  }, {
    key: "newName",
    value: function newName(prefix) {
      if (!prefix) prefix = this.prefix;
      var names = Object.keys(this.map);

      for (var i = 1; true; ++i) {
        var name = "".concat(prefix).concat(i);
        if (!names.includes(name)) return name;
      }
    } // During parsing, map & aliases contain CST nodes

  }, {
    key: "resolveNodes",
    value: function resolveNodes() {
      var map = this.map,
          _cstAliases = this._cstAliases;
      Object.keys(map).forEach(function (a) {
        map[a] = map[a].resolved;
      });

      _cstAliases.forEach(function (a) {
        a.source = a.source.resolved;
      });

      delete this._cstAliases;
    }
  }, {
    key: "setAnchor",
    value: function setAnchor(node, name) {
      if (node != null && !Anchors.validAnchorNode(node)) {
        throw new Error('Anchors may only be set for Scalar, Seq and Map nodes');
      }

      if (name && /[\x00-\x19\s,[\]{}]/.test(name)) {
        throw new Error('Anchor names must not contain whitespace or control characters');
      }

      var map = this.map;
      var prev = node && Object.keys(map).find(function (a) {
        return map[a] === node;
      });

      if (prev) {
        if (!name) {
          return prev;
        } else if (prev !== name) {
          delete map[prev];
          map[name] = node;
        }
      } else {
        if (!name) {
          if (!node) return null;
          name = this.newName();
        }

        map[name] = node;
      }

      return name;
    }
  }]);
  return Anchors;
}();

exports.default = Anchors;

/***/ }),

/***/ "./node_modules/yaml/browser/dist/Document.js":
/*!****************************************************!*\
  !*** ./node_modules/yaml/browser/dist/Document.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _addComment = _interopRequireDefault(__webpack_require__(/*! ./addComment */ "./node_modules/yaml/browser/dist/addComment.js"));

var _Anchors = _interopRequireDefault(__webpack_require__(/*! ./Anchors */ "./node_modules/yaml/browser/dist/Anchors.js"));

var _constants = __webpack_require__(/*! ./constants */ "./node_modules/yaml/browser/dist/constants.js");

var _errors = __webpack_require__(/*! ./errors */ "./node_modules/yaml/browser/dist/errors.js");

var _listTagNames = _interopRequireDefault(__webpack_require__(/*! ./listTagNames */ "./node_modules/yaml/browser/dist/listTagNames.js"));

var _schema = _interopRequireDefault(__webpack_require__(/*! ./schema */ "./node_modules/yaml/browser/dist/schema/index.js"));

var _Alias = _interopRequireDefault(__webpack_require__(/*! ./schema/Alias */ "./node_modules/yaml/browser/dist/schema/Alias.js"));

var _Collection = _interopRequireWildcard(__webpack_require__(/*! ./schema/Collection */ "./node_modules/yaml/browser/dist/schema/Collection.js"));

var _Node = _interopRequireDefault(__webpack_require__(/*! ./schema/Node */ "./node_modules/yaml/browser/dist/schema/Node.js"));

var _Scalar = _interopRequireDefault(__webpack_require__(/*! ./schema/Scalar */ "./node_modules/yaml/browser/dist/schema/Scalar.js"));

var _toJSON2 = _interopRequireDefault(__webpack_require__(/*! ./toJSON */ "./node_modules/yaml/browser/dist/toJSON.js"));

var isCollectionItem = function isCollectionItem(node) {
  return node && [_constants.Type.MAP_KEY, _constants.Type.MAP_VALUE, _constants.Type.SEQ_ITEM].includes(node.type);
};

var Document =
/*#__PURE__*/
function () {
  function Document(options) {
    (0, _classCallCheck2.default)(this, Document);
    this.anchors = new _Anchors.default(options.anchorPrefix);
    this.commentBefore = null;
    this.comment = null;
    this.contents = null;
    this.directivesEndMarker = null;
    this.errors = [];
    this.options = options;
    this.schema = null;
    this.tagPrefixes = [];
    this.version = null;
    this.warnings = [];
  }

  (0, _createClass2.default)(Document, [{
    key: "assertCollectionContents",
    value: function assertCollectionContents() {
      if (this.contents instanceof _Collection.default) return true;
      throw new Error('Expected a YAML collection as document contents');
    }
  }, {
    key: "add",
    value: function add(value) {
      this.assertCollectionContents();
      return this.contents.add(value);
    }
  }, {
    key: "addIn",
    value: function addIn(path, value) {
      this.assertCollectionContents();
      this.contents.addIn(path, value);
    }
  }, {
    key: "delete",
    value: function _delete(key) {
      this.assertCollectionContents();
      return this.contents.delete(key);
    }
  }, {
    key: "deleteIn",
    value: function deleteIn(path) {
      if ((0, _Collection.isEmptyPath)(path)) {
        if (this.contents == null) return false;
        this.contents = null;
        return true;
      }

      this.assertCollectionContents();
      return this.contents.deleteIn(path);
    }
  }, {
    key: "getDefaults",
    value: function getDefaults() {
      return Document.defaults[this.version] || Document.defaults[this.options.version] || {};
    }
  }, {
    key: "get",
    value: function get(key, keepScalar) {
      return this.contents instanceof _Collection.default ? this.contents.get(key, keepScalar) : undefined;
    }
  }, {
    key: "getIn",
    value: function getIn(path, keepScalar) {
      if ((0, _Collection.isEmptyPath)(path)) return !keepScalar && this.contents instanceof _Scalar.default ? this.contents.value : this.contents;
      return this.contents instanceof _Collection.default ? this.contents.getIn(path, keepScalar) : undefined;
    }
  }, {
    key: "has",
    value: function has(key) {
      return this.contents instanceof _Collection.default ? this.contents.has(key) : false;
    }
  }, {
    key: "hasIn",
    value: function hasIn(path) {
      if ((0, _Collection.isEmptyPath)(path)) return this.contents !== undefined;
      return this.contents instanceof _Collection.default ? this.contents.hasIn(path) : false;
    }
  }, {
    key: "set",
    value: function set(key, value) {
      this.assertCollectionContents();
      this.contents.set(key, value);
    }
  }, {
    key: "setIn",
    value: function setIn(path, value) {
      if ((0, _Collection.isEmptyPath)(path)) this.contents = value;else {
        this.assertCollectionContents();
        this.contents.setIn(path, value);
      }
    }
  }, {
    key: "setSchema",
    value: function setSchema(id, customTags) {
      if (!id && !customTags && this.schema) return;
      if (typeof id === 'number') id = id.toFixed(1);

      if (id === '1.0' || id === '1.1' || id === '1.2') {
        if (this.version) this.version = id;else this.options.version = id;
        delete this.options.schema;
      } else if (id && typeof id === 'string') {
        this.options.schema = id;
      }

      if (Array.isArray(customTags)) this.options.customTags = customTags;
      var opt = Object.assign({}, this.getDefaults(), this.options);
      this.schema = new _schema.default(opt);
    }
  }, {
    key: "parse",
    value: function parse(node, prevDoc) {
      if (this.options.keepCstNodes) this.cstNode = node;
      if (this.options.keepNodeTypes) this.type = 'DOCUMENT';
      var _node$directives = node.directives,
          directives = _node$directives === void 0 ? [] : _node$directives,
          _node$contents = node.contents,
          contents = _node$contents === void 0 ? [] : _node$contents,
          directivesEndMarker = node.directivesEndMarker,
          error = node.error,
          valueRange = node.valueRange;

      if (error) {
        if (!error.source) error.source = this;
        this.errors.push(error);
      }

      this.parseDirectives(directives, prevDoc);
      if (directivesEndMarker) this.directivesEndMarker = true;
      this.range = valueRange ? [valueRange.start, valueRange.end] : null;
      this.setSchema();
      this.anchors._cstAliases = [];
      this.parseContents(contents);
      this.anchors.resolveNodes();

      if (this.options.prettyErrors) {
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = this.errors[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var _error = _step.value;
            if (_error instanceof _errors.YAMLError) _error.makePretty();
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }

        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
          for (var _iterator2 = this.warnings[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var warn = _step2.value;
            if (warn instanceof _errors.YAMLError) warn.makePretty();
          }
        } catch (err) {
          _didIteratorError2 = true;
          _iteratorError2 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
              _iterator2.return();
            }
          } finally {
            if (_didIteratorError2) {
              throw _iteratorError2;
            }
          }
        }
      }

      return this;
    }
  }, {
    key: "parseDirectives",
    value: function parseDirectives(directives, prevDoc) {
      var _this = this;

      var directiveComments = [];
      var hasDirectives = false;
      directives.forEach(function (directive) {
        var comment = directive.comment,
            name = directive.name;

        switch (name) {
          case 'TAG':
            _this.resolveTagDirective(directive);

            hasDirectives = true;
            break;

          case 'YAML':
          case 'YAML:1.0':
            _this.resolveYamlDirective(directive);

            hasDirectives = true;
            break;

          default:
            if (name) {
              var msg = "YAML only supports %TAG and %YAML directives, and not %".concat(name);

              _this.warnings.push(new _errors.YAMLWarning(directive, msg));
            }

        }

        if (comment) directiveComments.push(comment);
      });

      if (prevDoc && !hasDirectives && '1.1' === (this.version || prevDoc.version || this.options.version)) {
        var copyTagPrefix = function copyTagPrefix(_ref) {
          var handle = _ref.handle,
              prefix = _ref.prefix;
          return {
            handle: handle,
            prefix: prefix
          };
        };

        this.tagPrefixes = prevDoc.tagPrefixes.map(copyTagPrefix);
        this.version = prevDoc.version;
      }

      this.commentBefore = directiveComments.join('\n') || null;
    }
  }, {
    key: "parseContents",
    value: function parseContents(contents) {
      var _this2 = this;

      var comments = {
        before: [],
        after: []
      };
      var contentNodes = [];
      var spaceBefore = false;
      contents.forEach(function (node) {
        if (node.valueRange) {
          if (contentNodes.length === 1) {
            var msg = 'Document is not valid YAML (bad indentation?)';

            _this2.errors.push(new _errors.YAMLSyntaxError(node, msg));
          }

          var res = _this2.resolveNode(node);

          if (spaceBefore) {
            res.spaceBefore = true;
            spaceBefore = false;
          }

          contentNodes.push(res);
        } else if (node.comment !== null) {
          var cc = contentNodes.length === 0 ? comments.before : comments.after;
          cc.push(node.comment);
        } else if (node.type === _constants.Type.BLANK_LINE) {
          spaceBefore = true;

          if (contentNodes.length === 0 && comments.before.length > 0 && !_this2.commentBefore) {
            // space-separated comments at start are parsed as document comments
            _this2.commentBefore = comments.before.join('\n');
            comments.before = [];
          }
        }
      });

      switch (contentNodes.length) {
        case 0:
          this.contents = null;
          comments.after = comments.before;
          break;

        case 1:
          this.contents = contentNodes[0];

          if (this.contents) {
            var cb = comments.before.join('\n') || null;

            if (cb) {
              var cbNode = this.contents instanceof _Collection.default && this.contents.items[0] ? this.contents.items[0] : this.contents;
              cbNode.commentBefore = cbNode.commentBefore ? "".concat(cb, "\n").concat(cbNode.commentBefore) : cb;
            }
          } else {
            comments.after = comments.before.concat(comments.after);
          }

          break;

        default:
          this.contents = contentNodes;

          if (this.contents[0]) {
            this.contents[0].commentBefore = comments.before.join('\n') || null;
          } else {
            comments.after = comments.before.concat(comments.after);
          }

      }

      this.comment = comments.after.join('\n') || null;
    }
  }, {
    key: "resolveTagDirective",
    value: function resolveTagDirective(directive) {
      var _directive$parameters = (0, _slicedToArray2.default)(directive.parameters, 2),
          handle = _directive$parameters[0],
          prefix = _directive$parameters[1];

      if (handle && prefix) {
        if (this.tagPrefixes.every(function (p) {
          return p.handle !== handle;
        })) {
          this.tagPrefixes.push({
            handle: handle,
            prefix: prefix
          });
        } else {
          var msg = 'The %TAG directive must only be given at most once per handle in the same document.';
          this.errors.push(new _errors.YAMLSemanticError(directive, msg));
        }
      } else {
        var _msg = 'Insufficient parameters given for %TAG directive';
        this.errors.push(new _errors.YAMLSemanticError(directive, _msg));
      }
    }
  }, {
    key: "resolveYamlDirective",
    value: function resolveYamlDirective(directive) {
      var _directive$parameters2 = (0, _slicedToArray2.default)(directive.parameters, 1),
          version = _directive$parameters2[0];

      if (directive.name === 'YAML:1.0') version = '1.0';

      if (this.version) {
        var msg = 'The %YAML directive must only be given at most once per document.';
        this.errors.push(new _errors.YAMLSemanticError(directive, msg));
      }

      if (!version) {
        var _msg2 = 'Insufficient parameters given for %YAML directive';
        this.errors.push(new _errors.YAMLSemanticError(directive, _msg2));
      } else {
        if (!Document.defaults[version]) {
          var v0 = this.version || this.options.version;

          var _msg3 = "Document will be parsed as YAML ".concat(v0, " rather than YAML ").concat(version);

          this.warnings.push(new _errors.YAMLWarning(directive, _msg3));
        }

        this.version = version;
      }
    }
  }, {
    key: "resolveTagName",
    value: function resolveTagName(node) {
      var tag = node.tag,
          type = node.type;
      var nonSpecific = false;

      if (tag) {
        var handle = tag.handle,
            suffix = tag.suffix,
            verbatim = tag.verbatim;

        if (verbatim) {
          if (verbatim !== '!' && verbatim !== '!!') return verbatim;
          var msg = "Verbatim tags aren't resolved, so ".concat(verbatim, " is invalid.");
          this.errors.push(new _errors.YAMLSemanticError(node, msg));
        } else if (handle === '!' && !suffix) {
          nonSpecific = true;
        } else {
          var prefix = this.tagPrefixes.find(function (p) {
            return p.handle === handle;
          });

          if (!prefix) {
            var dtp = this.getDefaults().tagPrefixes;
            if (dtp) prefix = dtp.find(function (p) {
              return p.handle === handle;
            });
          }

          if (prefix) {
            if (suffix) {
              if (handle === '!' && (this.version || this.options.version) === '1.0') {
                if (suffix[0] === '^') return suffix;

                if (/[:/]/.test(suffix)) {
                  // word/foo -> tag:word.yaml.org,2002:foo
                  var vocab = suffix.match(/^([a-z0-9-]+)\/(.*)/i);
                  return vocab ? "tag:".concat(vocab[1], ".yaml.org,2002:").concat(vocab[2]) : "tag:".concat(suffix);
                }
              }

              return prefix.prefix + decodeURIComponent(suffix);
            }

            this.errors.push(new _errors.YAMLSemanticError(node, "The ".concat(handle, " tag has no suffix.")));
          } else {
            var _msg4 = "The ".concat(handle, " tag handle is non-default and was not declared.");

            this.errors.push(new _errors.YAMLSemanticError(node, _msg4));
          }
        }
      }

      switch (type) {
        case _constants.Type.BLOCK_FOLDED:
        case _constants.Type.BLOCK_LITERAL:
        case _constants.Type.QUOTE_DOUBLE:
        case _constants.Type.QUOTE_SINGLE:
          return _schema.default.defaultTags.STR;

        case _constants.Type.FLOW_MAP:
        case _constants.Type.MAP:
          return _schema.default.defaultTags.MAP;

        case _constants.Type.FLOW_SEQ:
        case _constants.Type.SEQ:
          return _schema.default.defaultTags.SEQ;

        case _constants.Type.PLAIN:
          return nonSpecific ? _schema.default.defaultTags.STR : null;

        default:
          return null;
      }
    }
  }, {
    key: "resolveNode",
    value: function resolveNode(node) {
      if (!node) return null;
      var anchors = this.anchors,
          errors = this.errors,
          schema = this.schema;
      var hasAnchor = false;
      var hasTag = false;
      var comments = {
        before: [],
        after: []
      };
      var props = isCollectionItem(node.context.parent) ? node.context.parent.props.concat(node.props) : node.props;
      var _iteratorNormalCompletion3 = true;
      var _didIteratorError3 = false;
      var _iteratorError3 = undefined;

      try {
        for (var _iterator3 = props[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
          var _step3$value = _step3.value,
              start = _step3$value.start,
              end = _step3$value.end;

          switch (node.context.src[start]) {
            case _constants.Char.COMMENT:
              {
                if (!node.commentHasRequiredWhitespace(start)) {
                  var _msg7 = 'Comments must be separated from other tokens by white space characters';
                  errors.push(new _errors.YAMLSemanticError(node, _msg7));
                }

                var c = node.context.src.slice(start + 1, end);
                var header = node.header,
                    valueRange = node.valueRange;

                if (valueRange && (start > valueRange.start || header && start > header.start)) {
                  comments.after.push(c);
                } else {
                  comments.before.push(c);
                }
              }
              break;

            case _constants.Char.ANCHOR:
              if (hasAnchor) {
                var _msg8 = 'A node can have at most one anchor';
                errors.push(new _errors.YAMLSemanticError(node, _msg8));
              }

              hasAnchor = true;
              break;

            case _constants.Char.TAG:
              if (hasTag) {
                var _msg9 = 'A node can have at most one tag';
                errors.push(new _errors.YAMLSemanticError(node, _msg9));
              }

              hasTag = true;
              break;
          }
        }
      } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
            _iterator3.return();
          }
        } finally {
          if (_didIteratorError3) {
            throw _iteratorError3;
          }
        }
      }

      if (hasAnchor) {
        var name = node.anchor;
        var prev = anchors.getNode(name); // At this point, aliases for any preceding node with the same anchor
        // name have already been resolved, so it may safely be renamed.

        if (prev) anchors.map[anchors.newName(name)] = prev; // During parsing, we need to store the CST node in anchors.map as
        // anchors need to be available during resolution to allow for
        // circular references.

        anchors.map[name] = node;
      }

      var res;

      if (node.type === _constants.Type.ALIAS) {
        if (hasAnchor || hasTag) {
          var msg = 'An alias node must not specify any properties';
          errors.push(new _errors.YAMLSemanticError(node, msg));
        }

        var _name = node.rawValue;
        var src = anchors.getNode(_name);

        if (!src) {
          var _msg5 = "Aliased anchor not found: ".concat(_name);

          errors.push(new _errors.YAMLReferenceError(node, _msg5));
          return null;
        } // Lazy resolution for circular references


        res = new _Alias.default(src);

        anchors._cstAliases.push(res);
      } else {
        var tagName = this.resolveTagName(node);

        if (tagName) {
          res = schema.resolveNodeWithFallback(this, node, tagName);
        } else {
          if (node.type !== _constants.Type.PLAIN) {
            var _msg6 = "Failed to resolve ".concat(node.type, " node here");

            errors.push(new _errors.YAMLSyntaxError(node, _msg6));
            return null;
          }

          try {
            res = schema.resolveScalar(node.strValue || '');
          } catch (error) {
            if (!error.source) error.source = node;
            errors.push(error);
            return null;
          }
        }
      }

      if (res) {
        res.range = [node.range.start, node.range.end];
        if (this.options.keepCstNodes) res.cstNode = node;
        if (this.options.keepNodeTypes) res.type = node.type;
        var cb = comments.before.join('\n');

        if (cb) {
          res.commentBefore = res.commentBefore ? "".concat(res.commentBefore, "\n").concat(cb) : cb;
        }

        var ca = comments.after.join('\n');
        if (ca) res.comment = res.comment ? "".concat(res.comment, "\n").concat(ca) : ca;
      }

      return node.resolved = res;
    }
  }, {
    key: "listNonDefaultTags",
    value: function listNonDefaultTags() {
      return (0, _listTagNames.default)(this.contents).filter(function (t) {
        return t.indexOf(_schema.default.defaultPrefix) !== 0;
      });
    }
  }, {
    key: "setTagPrefix",
    value: function setTagPrefix(handle, prefix) {
      if (handle[0] !== '!' || handle[handle.length - 1] !== '!') throw new Error('Handle must start and end with !');

      if (prefix) {
        var prev = this.tagPrefixes.find(function (p) {
          return p.handle === handle;
        });
        if (prev) prev.prefix = prefix;else this.tagPrefixes.push({
          handle: handle,
          prefix: prefix
        });
      } else {
        this.tagPrefixes = this.tagPrefixes.filter(function (p) {
          return p.handle !== handle;
        });
      }
    }
  }, {
    key: "stringifyTag",
    value: function stringifyTag(tag) {
      if ((this.version || this.options.version) === '1.0') {
        var priv = tag.match(/^tag:private\.yaml\.org,2002:([^:/]+)$/);
        if (priv) return '!' + priv[1];
        var vocab = tag.match(/^tag:([a-zA-Z0-9-]+)\.yaml\.org,2002:(.*)/);
        return vocab ? "!".concat(vocab[1], "/").concat(vocab[2]) : "!".concat(tag.replace(/^tag:/, ''));
      } else {
        var p = this.tagPrefixes.find(function (p) {
          return tag.indexOf(p.prefix) === 0;
        });

        if (!p) {
          var dtp = this.getDefaults().tagPrefixes;
          p = dtp && dtp.find(function (p) {
            return tag.indexOf(p.prefix) === 0;
          });
        }

        if (!p) return tag[0] === '!' ? tag : "!<".concat(tag, ">");
        var suffix = tag.substr(p.prefix.length).replace(/[!,[\]{}]/g, function (ch) {
          return {
            '!': '%21',
            ',': '%2C',
            '[': '%5B',
            ']': '%5D',
            '{': '%7B',
            '}': '%7D'
          }[ch];
        });
        return p.handle + suffix;
      }
    }
  }, {
    key: "toJSON",
    value: function toJSON(arg) {
      var _this3 = this;

      var _this$options = this.options,
          keepBlobsInJSON = _this$options.keepBlobsInJSON,
          mapAsMap = _this$options.mapAsMap,
          maxAliasCount = _this$options.maxAliasCount;
      var keep = keepBlobsInJSON && (typeof arg !== 'string' || !(this.contents instanceof _Scalar.default));
      var ctx = {
        doc: this,
        keep: keep,
        mapAsMap: keep && !!mapAsMap,
        maxAliasCount: maxAliasCount
      };
      var anchorNames = Object.keys(this.anchors.map);
      if (anchorNames.length > 0) ctx.anchors = anchorNames.map(function (name) {
        return {
          alias: [],
          aliasCount: 0,
          count: 1,
          node: _this3.anchors.map[name]
        };
      });
      return (0, _toJSON2.default)(this.contents, arg, ctx);
    }
  }, {
    key: "toString",
    value: function toString() {
      if (this.errors.length > 0) throw new Error('Document with errors cannot be stringified');
      this.setSchema();
      var lines = [];
      var hasDirectives = false;

      if (this.version) {
        var vd = '%YAML 1.2';

        if (this.schema.name === 'yaml-1.1') {
          if (this.version === '1.0') vd = '%YAML:1.0';else if (this.version === '1.1') vd = '%YAML 1.1';
        }

        lines.push(vd);
        hasDirectives = true;
      }

      var tagNames = this.listNonDefaultTags();
      this.tagPrefixes.forEach(function (_ref2) {
        var handle = _ref2.handle,
            prefix = _ref2.prefix;

        if (tagNames.some(function (t) {
          return t.indexOf(prefix) === 0;
        })) {
          lines.push("%TAG ".concat(handle, " ").concat(prefix));
          hasDirectives = true;
        }
      });
      if (hasDirectives || this.directivesEndMarker) lines.push('---');

      if (this.commentBefore) {
        if (hasDirectives || !this.directivesEndMarker) lines.unshift('');
        lines.unshift(this.commentBefore.replace(/^/gm, '#'));
      }

      var ctx = {
        anchors: {},
        doc: this,
        indent: ''
      };
      var chompKeep = false;
      var contentComment = null;

      if (this.contents) {
        if (this.contents instanceof _Node.default) {
          if (this.contents.spaceBefore && (hasDirectives || this.directivesEndMarker)) lines.push('');
          if (this.contents.commentBefore) lines.push(this.contents.commentBefore.replace(/^/gm, '#')); // top-level block scalars need to be indented if followed by a comment

          ctx.forceBlockIndent = !!this.comment;
          contentComment = this.contents.comment;
        }

        var onChompKeep = contentComment ? null : function () {
          return chompKeep = true;
        };
        var body = this.schema.stringify(this.contents, ctx, function () {
          return contentComment = null;
        }, onChompKeep);
        lines.push((0, _addComment.default)(body, '', contentComment));
      } else if (this.contents !== undefined) {
        lines.push(this.schema.stringify(this.contents, ctx));
      }

      if (this.comment) {
        if ((!chompKeep || contentComment) && lines[lines.length - 1] !== '') lines.push('');
        lines.push(this.comment.replace(/^/gm, '#'));
      }

      return lines.join('\n') + '\n';
    }
  }]);
  return Document;
}();

exports.default = Document;
(0, _defineProperty2.default)(Document, "defaults", {
  '1.0': {
    schema: 'yaml-1.1',
    merge: true,
    tagPrefixes: [{
      handle: '!',
      prefix: _schema.default.defaultPrefix
    }, {
      handle: '!!',
      prefix: 'tag:private.yaml.org,2002:'
    }]
  },
  '1.1': {
    schema: 'yaml-1.1',
    merge: true,
    tagPrefixes: [{
      handle: '!',
      prefix: '!'
    }, {
      handle: '!!',
      prefix: _schema.default.defaultPrefix
    }]
  },
  '1.2': {
    schema: 'core',
    merge: false,
    tagPrefixes: [{
      handle: '!',
      prefix: '!'
    }, {
      handle: '!!',
      prefix: _schema.default.defaultPrefix
    }]
  }
});

/***/ }),

/***/ "./node_modules/yaml/browser/dist/addComment.js":
/*!******************************************************!*\
  !*** ./node_modules/yaml/browser/dist/addComment.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addCommentBefore = addCommentBefore;
exports.default = addComment;

function addCommentBefore(str, indent, comment) {
  if (!comment) return str;
  var cc = comment.replace(/[\s\S]^/gm, "$&".concat(indent, "#"));
  return "#".concat(cc, "\n").concat(indent).concat(str);
}

function addComment(str, indent, comment) {
  return !comment ? str : comment.indexOf('\n') === -1 ? "".concat(str, " #").concat(comment) : "".concat(str, "\n") + comment.replace(/^/gm, "".concat(indent || '', "#"));
}

/***/ }),

/***/ "./node_modules/yaml/browser/dist/constants.js":
/*!*****************************************************!*\
  !*** ./node_modules/yaml/browser/dist/constants.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Type = exports.Char = void 0;
var Char = {
  ANCHOR: '&',
  COMMENT: '#',
  TAG: '!',
  DIRECTIVES_END: '-',
  DOCUMENT_END: '.'
};
exports.Char = Char;
var Type = {
  ALIAS: 'ALIAS',
  BLANK_LINE: 'BLANK_LINE',
  BLOCK_FOLDED: 'BLOCK_FOLDED',
  BLOCK_LITERAL: 'BLOCK_LITERAL',
  COMMENT: 'COMMENT',
  DIRECTIVE: 'DIRECTIVE',
  DOCUMENT: 'DOCUMENT',
  FLOW_MAP: 'FLOW_MAP',
  FLOW_SEQ: 'FLOW_SEQ',
  MAP: 'MAP',
  MAP_KEY: 'MAP_KEY',
  MAP_VALUE: 'MAP_VALUE',
  PLAIN: 'PLAIN',
  QUOTE_DOUBLE: 'QUOTE_DOUBLE',
  QUOTE_SINGLE: 'QUOTE_SINGLE',
  SEQ: 'SEQ',
  SEQ_ITEM: 'SEQ_ITEM'
};
exports.Type = Type;

/***/ }),

/***/ "./node_modules/yaml/browser/dist/cst/Alias.js":
/*!*****************************************************!*\
  !*** ./node_modules/yaml/browser/dist/cst/Alias.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));

var _Node2 = _interopRequireDefault(__webpack_require__(/*! ./Node */ "./node_modules/yaml/browser/dist/cst/Node.js"));

var _Range = _interopRequireDefault(__webpack_require__(/*! ./Range */ "./node_modules/yaml/browser/dist/cst/Range.js"));

var Alias =
/*#__PURE__*/
function (_Node) {
  (0, _inherits2.default)(Alias, _Node);

  function Alias() {
    (0, _classCallCheck2.default)(this, Alias);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Alias).apply(this, arguments));
  }

  (0, _createClass2.default)(Alias, [{
    key: "parse",

    /**
     * Parses an *alias from the source
     *
     * @param {ParseContext} context
     * @param {number} start - Index of first character
     * @returns {number} - Index of the character after this scalar
     */
    value: function parse(context, start) {
      this.context = context;
      var src = context.src;

      var offset = _Node2.default.endOfIdentifier(src, start + 1);

      this.valueRange = new _Range.default(start + 1, offset);
      offset = _Node2.default.endOfWhiteSpace(src, offset);
      offset = this.parseComment(offset);
      return offset;
    }
  }]);
  return Alias;
}(_Node2.default);

exports.default = Alias;

/***/ }),

/***/ "./node_modules/yaml/browser/dist/cst/BlankLine.js":
/*!*********************************************************!*\
  !*** ./node_modules/yaml/browser/dist/cst/BlankLine.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));

var _constants = __webpack_require__(/*! ../constants */ "./node_modules/yaml/browser/dist/constants.js");

var _Node2 = _interopRequireDefault(__webpack_require__(/*! ./Node */ "./node_modules/yaml/browser/dist/cst/Node.js"));

var _Range = _interopRequireDefault(__webpack_require__(/*! ./Range */ "./node_modules/yaml/browser/dist/cst/Range.js"));

var BlankLine =
/*#__PURE__*/
function (_Node) {
  (0, _inherits2.default)(BlankLine, _Node);

  function BlankLine() {
    (0, _classCallCheck2.default)(this, BlankLine);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(BlankLine).call(this, _constants.Type.BLANK_LINE));
  }

  (0, _createClass2.default)(BlankLine, [{
    key: "parse",

    /**
     * Parses blank lines from the source
     *
     * @param {ParseContext} context
     * @param {number} start - Index of first \n character
     * @returns {number} - Index of the character after this
     */
    value: function parse(context, start) {
      this.context = context;
      var src = context.src;
      var offset = start + 1;

      while (_Node2.default.atBlank(src, offset)) {
        var lineEnd = _Node2.default.endOfWhiteSpace(src, offset);

        if (lineEnd === '\n') offset = lineEnd + 1;else break;
      }

      this.range = new _Range.default(start, offset);
      return offset;
    }
  }, {
    key: "includesTrailingLines",
    get: function get() {
      return true;
    }
  }]);
  return BlankLine;
}(_Node2.default);

exports.default = BlankLine;

/***/ }),

/***/ "./node_modules/yaml/browser/dist/cst/BlockValue.js":
/*!**********************************************************!*\
  !*** ./node_modules/yaml/browser/dist/cst/BlockValue.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Chomp = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));

var _get2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/get */ "./node_modules/@babel/runtime/helpers/get.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));

var _constants = __webpack_require__(/*! ../constants */ "./node_modules/yaml/browser/dist/constants.js");

var _Node2 = _interopRequireDefault(__webpack_require__(/*! ./Node */ "./node_modules/yaml/browser/dist/cst/Node.js"));

var _Range = _interopRequireDefault(__webpack_require__(/*! ./Range */ "./node_modules/yaml/browser/dist/cst/Range.js"));

var Chomp = {
  CLIP: 'CLIP',
  KEEP: 'KEEP',
  STRIP: 'STRIP'
};
exports.Chomp = Chomp;

var BlockValue =
/*#__PURE__*/
function (_Node) {
  (0, _inherits2.default)(BlockValue, _Node);

  function BlockValue(type, props) {
    var _this;

    (0, _classCallCheck2.default)(this, BlockValue);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(BlockValue).call(this, type, props));
    _this.blockIndent = null;
    _this.chomping = Chomp.CLIP;
    _this.header = null;
    return _this;
  }

  (0, _createClass2.default)(BlockValue, [{
    key: "parseBlockHeader",
    value: function parseBlockHeader(start) {
      var src = this.context.src;
      var offset = start + 1;
      var bi = '';

      while (true) {
        var ch = src[offset];

        switch (ch) {
          case '-':
            this.chomping = Chomp.STRIP;
            break;

          case '+':
            this.chomping = Chomp.KEEP;
            break;

          case '0':
          case '1':
          case '2':
          case '3':
          case '4':
          case '5':
          case '6':
          case '7':
          case '8':
          case '9':
            bi += ch;
            break;

          default:
            this.blockIndent = Number(bi) || null;
            this.header = new _Range.default(start, offset);
            return offset;
        }

        offset += 1;
      }
    }
  }, {
    key: "parseBlockValue",
    value: function parseBlockValue(start) {
      var _this$context = this.context,
          indent = _this$context.indent,
          src = _this$context.src;
      var offset = start;
      var valueEnd = start;
      var bi = this.blockIndent ? indent + this.blockIndent - 1 : indent;
      var minBlockIndent = 1;

      for (var ch = src[offset]; ch === '\n'; ch = src[offset]) {
        offset += 1;
        if (_Node2.default.atDocumentBoundary(src, offset)) break;

        var end = _Node2.default.endOfBlockIndent(src, bi, offset); // should not include tab?


        if (end === null) break;

        if (!this.blockIndent) {
          // no explicit block indent, none yet detected
          var lineIndent = end - (offset + indent);

          if (src[end] !== '\n') {
            // first line with non-whitespace content
            if (lineIndent < minBlockIndent) {
              offset -= 1;
              break;
            }

            this.blockIndent = lineIndent;
            bi = indent + this.blockIndent - 1;
          } else if (lineIndent > minBlockIndent) {
            // empty line with more whitespace
            minBlockIndent = lineIndent;
          }
        }

        if (src[end] === '\n') {
          offset = end;
        } else {
          offset = valueEnd = _Node2.default.endOfLine(src, end);
        }
      }

      if (this.chomping !== Chomp.KEEP) {
        offset = src[valueEnd] ? valueEnd + 1 : valueEnd;
      }

      this.valueRange = new _Range.default(start + 1, offset);
      return offset;
    }
    /**
     * Parses a block value from the source
     *
     * Accepted forms are:
     * ```
     * BS
     * block
     * lines
     *
     * BS #comment
     * block
     * lines
     * ```
     * where the block style BS matches the regexp `[|>][-+1-9]*` and block lines
     * are empty or have an indent level greater than `indent`.
     *
     * @param {ParseContext} context
     * @param {number} start - Index of first character
     * @returns {number} - Index of the character after this block
     */

  }, {
    key: "parse",
    value: function parse(context, start) {
      this.context = context;
      var src = context.src;
      var offset = this.parseBlockHeader(start);
      offset = _Node2.default.endOfWhiteSpace(src, offset);
      offset = this.parseComment(offset);
      offset = this.parseBlockValue(offset);
      return offset;
    }
  }, {
    key: "setOrigRanges",
    value: function setOrigRanges(cr, offset) {
      offset = (0, _get2.default)((0, _getPrototypeOf2.default)(BlockValue.prototype), "setOrigRanges", this).call(this, cr, offset);
      return this.header ? this.header.setOrigRange(cr, offset) : offset;
    }
  }, {
    key: "includesTrailingLines",
    get: function get() {
      return this.chomping === Chomp.KEEP;
    }
  }, {
    key: "strValue",
    get: function get() {
      if (!this.valueRange || !this.context) return null;
      var _this$valueRange = this.valueRange,
          start = _this$valueRange.start,
          end = _this$valueRange.end;
      var _this$context2 = this.context,
          indent = _this$context2.indent,
          src = _this$context2.src;
      if (this.valueRange.isEmpty()) return '';
      var lastNewLine = null;
      var ch = src[end - 1];

      while (ch === '\n' || ch === '\t' || ch === ' ') {
        end -= 1;

        if (end <= start) {
          if (this.chomping === Chomp.KEEP) break;else return '';
        }

        if (ch === '\n') lastNewLine = end;
        ch = src[end - 1];
      }

      var keepStart = end + 1;

      if (lastNewLine) {
        if (this.chomping === Chomp.KEEP) {
          keepStart = lastNewLine;
          end = this.valueRange.end;
        } else {
          end = lastNewLine;
        }
      }

      var bi = indent + this.blockIndent;
      var folded = this.type === _constants.Type.BLOCK_FOLDED;
      var atStart = true;
      var str = '';
      var sep = '';
      var prevMoreIndented = false;

      for (var i = start; i < end; ++i) {
        for (var j = 0; j < bi; ++j) {
          if (src[i] !== ' ') break;
          i += 1;
        }

        var _ch = src[i];

        if (_ch === '\n') {
          if (sep === '\n') str += '\n';else sep = '\n';
        } else {
          var lineEnd = _Node2.default.endOfLine(src, i);

          var line = src.slice(i, lineEnd);
          i = lineEnd;

          if (folded && (_ch === ' ' || _ch === '\t') && i < keepStart) {
            if (sep === ' ') sep = '\n';else if (!prevMoreIndented && !atStart && sep === '\n') sep = '\n\n';
            str += sep + line; //+ ((lineEnd < end && src[lineEnd]) || '')

            sep = lineEnd < end && src[lineEnd] || '';
            prevMoreIndented = true;
          } else {
            str += sep + line;
            sep = folded && i < keepStart ? ' ' : '\n';
            prevMoreIndented = false;
          }

          if (atStart && line !== '') atStart = false;
        }
      }

      return this.chomping === Chomp.STRIP ? str : str + '\n';
    }
  }]);
  return BlockValue;
}(_Node2.default);

exports.default = BlockValue;

/***/ }),

/***/ "./node_modules/yaml/browser/dist/cst/Collection.js":
/*!**********************************************************!*\
  !*** ./node_modules/yaml/browser/dist/cst/Collection.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.grabCollectionEndComments = grabCollectionEndComments;
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));

var _get2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/get */ "./node_modules/@babel/runtime/helpers/get.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));

var _constants = __webpack_require__(/*! ../constants */ "./node_modules/yaml/browser/dist/constants.js");

var _BlankLine = _interopRequireDefault(__webpack_require__(/*! ./BlankLine */ "./node_modules/yaml/browser/dist/cst/BlankLine.js"));

var _CollectionItem = _interopRequireDefault(__webpack_require__(/*! ./CollectionItem */ "./node_modules/yaml/browser/dist/cst/CollectionItem.js"));

var _Comment = _interopRequireDefault(__webpack_require__(/*! ./Comment */ "./node_modules/yaml/browser/dist/cst/Comment.js"));

var _Node2 = _interopRequireDefault(__webpack_require__(/*! ./Node */ "./node_modules/yaml/browser/dist/cst/Node.js"));

var _Range = _interopRequireDefault(__webpack_require__(/*! ./Range */ "./node_modules/yaml/browser/dist/cst/Range.js"));

function grabCollectionEndComments(node) {
  var cnode = node;

  while (cnode instanceof _CollectionItem.default) {
    cnode = cnode.node;
  }

  if (!(cnode instanceof Collection)) return null;
  var len = cnode.items.length;
  var ci = -1;

  for (var i = len - 1; i >= 0; --i) {
    var n = cnode.items[i];

    if (n.type === _constants.Type.COMMENT) {
      // Keep sufficiently indented comments with preceding node
      var _n$context = n.context,
          indent = _n$context.indent,
          lineStart = _n$context.lineStart;
      if (indent > 0 && n.range.start >= lineStart + indent) break;
      ci = i;
    } else if (n.type === _constants.Type.BLANK_LINE) ci = i;else break;
  }

  if (ci === -1) return null;
  var ca = cnode.items.splice(ci, len - ci);
  var prevEnd = ca[0].range.start;

  while (true) {
    cnode.range.end = prevEnd;
    if (cnode.valueRange && cnode.valueRange.end > prevEnd) cnode.valueRange.end = prevEnd;
    if (cnode === node) break;
    cnode = cnode.context.parent;
  }

  return ca;
}

var Collection =
/*#__PURE__*/
function (_Node) {
  (0, _inherits2.default)(Collection, _Node);
  (0, _createClass2.default)(Collection, null, [{
    key: "nextContentHasIndent",
    value: function nextContentHasIndent(src, offset, indent) {
      var lineStart = _Node2.default.endOfLine(src, offset) + 1;
      offset = _Node2.default.endOfWhiteSpace(src, lineStart);
      var ch = src[offset];
      if (!ch) return false;
      if (offset >= lineStart + indent) return true;
      if (ch !== '#' && ch !== '\n') return false;
      return Collection.nextContentHasIndent(src, offset, indent);
    }
  }]);

  function Collection(firstItem) {
    var _this;

    (0, _classCallCheck2.default)(this, Collection);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Collection).call(this, firstItem.type === _constants.Type.SEQ_ITEM ? _constants.Type.SEQ : _constants.Type.MAP));

    for (var i = firstItem.props.length - 1; i >= 0; --i) {
      if (firstItem.props[i].start < firstItem.context.lineStart) {
        // props on previous line are assumed by the collection
        _this.props = firstItem.props.slice(0, i + 1);
        firstItem.props = firstItem.props.slice(i + 1);
        var itemRange = firstItem.props[0] || firstItem.valueRange;
        firstItem.range.start = itemRange.start;
        break;
      }
    }

    _this.items = [firstItem];
    var ec = grabCollectionEndComments(firstItem);
    if (ec) Array.prototype.push.apply(_this.items, ec);
    return _this;
  }

  (0, _createClass2.default)(Collection, [{
    key: "parse",

    /**
     * @param {ParseContext} context
     * @param {number} start - Index of first character
     * @returns {number} - Index of the character after this
     */
    value: function parse(context, start) {
      this.context = context;
      var parseNode = context.parseNode,
          src = context.src; // It's easier to recalculate lineStart here rather than tracking down the
      // last context from which to read it -- eemeli/yaml#2

      var lineStart = _Node2.default.startOfLine(src, start);

      var firstItem = this.items[0]; // First-item context needs to be correct for later comment handling
      // -- eemeli/yaml#17

      firstItem.context.parent = this;
      this.valueRange = _Range.default.copy(firstItem.valueRange);
      var indent = firstItem.range.start - firstItem.context.lineStart;
      var offset = start;
      offset = _Node2.default.normalizeOffset(src, offset);
      var ch = src[offset];
      var atLineStart = _Node2.default.endOfWhiteSpace(src, lineStart) === offset;
      var prevIncludesTrailingLines = false;

      while (ch) {
        while (ch === '\n' || ch === '#') {
          if (atLineStart && ch === '\n' && !prevIncludesTrailingLines) {
            var blankLine = new _BlankLine.default();
            offset = blankLine.parse({
              src: src
            }, offset);
            this.valueRange.end = offset;

            if (offset >= src.length) {
              ch = null;
              break;
            }

            this.items.push(blankLine);
            offset -= 1; // blankLine.parse() consumes terminal newline
          } else if (ch === '#') {
            if (offset < lineStart + indent && !Collection.nextContentHasIndent(src, offset, indent)) {
              return offset;
            }

            var comment = new _Comment.default();
            offset = comment.parse({
              indent: indent,
              lineStart: lineStart,
              src: src
            }, offset);
            this.items.push(comment);
            this.valueRange.end = offset;

            if (offset >= src.length) {
              ch = null;
              break;
            }
          }

          lineStart = offset + 1;
          offset = _Node2.default.endOfIndent(src, lineStart);

          if (_Node2.default.atBlank(src, offset)) {
            var wsEnd = _Node2.default.endOfWhiteSpace(src, offset);

            var next = src[wsEnd];

            if (!next || next === '\n' || next === '#') {
              offset = wsEnd;
            }
          }

          ch = src[offset];
          atLineStart = true;
        }

        if (!ch) {
          break;
        }

        if (offset !== lineStart + indent && (atLineStart || ch !== ':')) {
          if (lineStart > start) offset = lineStart;
          break;
        }

        if (firstItem.type === _constants.Type.SEQ_ITEM !== (ch === '-')) {
          var typeswitch = true;

          if (ch === '-') {
            // map key may start with -, as long as it's followed by a non-whitespace char
            var _next = src[offset + 1];
            typeswitch = !_next || _next === '\n' || _next === '\t' || _next === ' ';
          }

          if (typeswitch) {
            if (lineStart > start) offset = lineStart;
            break;
          }
        }

        var node = parseNode({
          atLineStart: atLineStart,
          inCollection: true,
          indent: indent,
          lineStart: lineStart,
          parent: this
        }, offset);
        if (!node) return offset; // at next document start

        this.items.push(node);
        this.valueRange.end = node.valueRange.end;
        offset = _Node2.default.normalizeOffset(src, node.range.end);
        ch = src[offset];
        atLineStart = false;
        prevIncludesTrailingLines = node.includesTrailingLines; // Need to reset lineStart and atLineStart here if preceding node's range
        // has advanced to check the current line's indentation level
        // -- eemeli/yaml#10 & eemeli/yaml#38

        if (ch) {
          var ls = offset - 1;
          var prev = src[ls];

          while (prev === ' ' || prev === '\t') {
            prev = src[--ls];
          }

          if (prev === '\n') {
            lineStart = ls + 1;
            atLineStart = true;
          }
        }

        var ec = grabCollectionEndComments(node);
        if (ec) Array.prototype.push.apply(this.items, ec);
      }

      return offset;
    }
  }, {
    key: "setOrigRanges",
    value: function setOrigRanges(cr, offset) {
      offset = (0, _get2.default)((0, _getPrototypeOf2.default)(Collection.prototype), "setOrigRanges", this).call(this, cr, offset);
      this.items.forEach(function (node) {
        offset = node.setOrigRanges(cr, offset);
      });
      return offset;
    }
  }, {
    key: "toString",
    value: function toString() {
      var src = this.context.src,
          items = this.items,
          range = this.range,
          value = this.value;
      if (value != null) return value;
      var str = src.slice(range.start, items[0].range.start) + String(items[0]);

      for (var i = 1; i < items.length; ++i) {
        var item = items[i];
        var _item$context = item.context,
            atLineStart = _item$context.atLineStart,
            indent = _item$context.indent;
        if (atLineStart) for (var _i = 0; _i < indent; ++_i) {
          str += ' ';
        }
        str += String(item);
      }

      return _Node2.default.addStringTerminator(src, range.end, str);
    }
  }, {
    key: "includesTrailingLines",
    get: function get() {
      return this.items.length > 0;
    }
  }]);
  return Collection;
}(_Node2.default);

exports.default = Collection;

/***/ }),

/***/ "./node_modules/yaml/browser/dist/cst/CollectionItem.js":
/*!**************************************************************!*\
  !*** ./node_modules/yaml/browser/dist/cst/CollectionItem.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));

var _get2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/get */ "./node_modules/@babel/runtime/helpers/get.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));

var _constants = __webpack_require__(/*! ../constants */ "./node_modules/yaml/browser/dist/constants.js");

var _errors = __webpack_require__(/*! ../errors */ "./node_modules/yaml/browser/dist/errors.js");

var _BlankLine = _interopRequireDefault(__webpack_require__(/*! ./BlankLine */ "./node_modules/yaml/browser/dist/cst/BlankLine.js"));

var _Node2 = _interopRequireDefault(__webpack_require__(/*! ./Node */ "./node_modules/yaml/browser/dist/cst/Node.js"));

var _Range = _interopRequireDefault(__webpack_require__(/*! ./Range */ "./node_modules/yaml/browser/dist/cst/Range.js"));

var CollectionItem =
/*#__PURE__*/
function (_Node) {
  (0, _inherits2.default)(CollectionItem, _Node);

  function CollectionItem(type, props) {
    var _this;

    (0, _classCallCheck2.default)(this, CollectionItem);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(CollectionItem).call(this, type, props));
    _this.node = null;
    return _this;
  }

  (0, _createClass2.default)(CollectionItem, [{
    key: "parse",

    /**
     * @param {ParseContext} context
     * @param {number} start - Index of first character
     * @returns {number} - Index of the character after this
     */
    value: function parse(context, start) {
      this.context = context;
      var parseNode = context.parseNode,
          src = context.src;
      var atLineStart = context.atLineStart,
          lineStart = context.lineStart;
      if (!atLineStart && this.type === _constants.Type.SEQ_ITEM) this.error = new _errors.YAMLSemanticError(this, 'Sequence items must not have preceding content on the same line');
      var indent = atLineStart ? start - lineStart : context.indent;

      var offset = _Node2.default.endOfWhiteSpace(src, start + 1);

      var ch = src[offset];
      var inlineComment = ch === '#';
      var comments = [];
      var blankLine = null;

      while (ch === '\n' || ch === '#') {
        if (ch === '#') {
          var _end = _Node2.default.endOfLine(src, offset + 1);

          comments.push(new _Range.default(offset, _end));
          offset = _end;
        } else {
          atLineStart = true;
          lineStart = offset + 1;

          var wsEnd = _Node2.default.endOfWhiteSpace(src, lineStart);

          if (src[wsEnd] === '\n' && comments.length === 0) {
            blankLine = new _BlankLine.default();
            lineStart = blankLine.parse({
              src: src
            }, lineStart);
          }

          offset = _Node2.default.endOfIndent(src, lineStart);
        }

        ch = src[offset];
      }

      if (_Node2.default.nextNodeIsIndented(ch, offset - (lineStart + indent), this.type !== _constants.Type.SEQ_ITEM)) {
        this.node = parseNode({
          atLineStart: atLineStart,
          inCollection: false,
          indent: indent,
          lineStart: lineStart,
          parent: this
        }, offset);
      } else if (ch && lineStart > start + 1) {
        offset = lineStart - 1;
      }

      if (this.node) {
        if (blankLine) {
          // Only blank lines preceding non-empty nodes are captured. Note that
          // this means that collection item range start indices do not always
          // increase monotonically. -- eemeli/yaml#126
          var items = context.parent.items || context.parent.contents;
          if (items) items.push(blankLine);
        }

        if (comments.length) Array.prototype.push.apply(this.props, comments);
        offset = this.node.range.end;
      } else {
        if (inlineComment) {
          var c = comments[0];
          this.props.push(c);
          offset = c.end;
        } else {
          offset = _Node2.default.endOfLine(src, start + 1);
        }
      }

      var end = this.node ? this.node.valueRange.end : offset;
      this.valueRange = new _Range.default(start, end);
      return offset;
    }
  }, {
    key: "setOrigRanges",
    value: function setOrigRanges(cr, offset) {
      offset = (0, _get2.default)((0, _getPrototypeOf2.default)(CollectionItem.prototype), "setOrigRanges", this).call(this, cr, offset);
      return this.node ? this.node.setOrigRanges(cr, offset) : offset;
    }
  }, {
    key: "toString",
    value: function toString() {
      var src = this.context.src,
          node = this.node,
          range = this.range,
          value = this.value;
      if (value != null) return value;
      var str = node ? src.slice(range.start, node.range.start) + String(node) : src.slice(range.start, range.end);
      return _Node2.default.addStringTerminator(src, range.end, str);
    }
  }, {
    key: "includesTrailingLines",
    get: function get() {
      return !!this.node && this.node.includesTrailingLines;
    }
  }]);
  return CollectionItem;
}(_Node2.default);

exports.default = CollectionItem;

/***/ }),

/***/ "./node_modules/yaml/browser/dist/cst/Comment.js":
/*!*******************************************************!*\
  !*** ./node_modules/yaml/browser/dist/cst/Comment.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));

var _constants = __webpack_require__(/*! ../constants */ "./node_modules/yaml/browser/dist/constants.js");

var _Node2 = _interopRequireDefault(__webpack_require__(/*! ./Node */ "./node_modules/yaml/browser/dist/cst/Node.js"));

var _Range = _interopRequireDefault(__webpack_require__(/*! ./Range */ "./node_modules/yaml/browser/dist/cst/Range.js"));

var Comment =
/*#__PURE__*/
function (_Node) {
  (0, _inherits2.default)(Comment, _Node);

  function Comment() {
    (0, _classCallCheck2.default)(this, Comment);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Comment).call(this, _constants.Type.COMMENT));
  }
  /**
   * Parses a comment line from the source
   *
   * @param {ParseContext} context
   * @param {number} start - Index of first character
   * @returns {number} - Index of the character after this scalar
   */


  (0, _createClass2.default)(Comment, [{
    key: "parse",
    value: function parse(context, start) {
      this.context = context;
      var offset = this.parseComment(start);
      this.range = new _Range.default(start, offset);
      return offset;
    }
  }]);
  return Comment;
}(_Node2.default);

exports.default = Comment;

/***/ }),

/***/ "./node_modules/yaml/browser/dist/cst/Directive.js":
/*!*********************************************************!*\
  !*** ./node_modules/yaml/browser/dist/cst/Directive.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));

var _constants = __webpack_require__(/*! ../constants */ "./node_modules/yaml/browser/dist/constants.js");

var _Node2 = _interopRequireDefault(__webpack_require__(/*! ./Node */ "./node_modules/yaml/browser/dist/cst/Node.js"));

var _Range = _interopRequireDefault(__webpack_require__(/*! ./Range */ "./node_modules/yaml/browser/dist/cst/Range.js"));

var Directive =
/*#__PURE__*/
function (_Node) {
  (0, _inherits2.default)(Directive, _Node);
  (0, _createClass2.default)(Directive, null, [{
    key: "endOfDirective",
    value: function endOfDirective(src, offset) {
      var ch = src[offset];

      while (ch && ch !== '\n' && ch !== '#') {
        ch = src[offset += 1];
      } // last char can't be whitespace


      ch = src[offset - 1];

      while (ch === ' ' || ch === '\t') {
        offset -= 1;
        ch = src[offset - 1];
      }

      return offset;
    }
  }]);

  function Directive() {
    var _this;

    (0, _classCallCheck2.default)(this, Directive);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Directive).call(this, _constants.Type.DIRECTIVE));
    _this.name = null;
    return _this;
  }

  (0, _createClass2.default)(Directive, [{
    key: "parseName",
    value: function parseName(start) {
      var src = this.context.src;
      var offset = start;
      var ch = src[offset];

      while (ch && ch !== '\n' && ch !== '\t' && ch !== ' ') {
        ch = src[offset += 1];
      }

      this.name = src.slice(start, offset);
      return offset;
    }
  }, {
    key: "parseParameters",
    value: function parseParameters(start) {
      var src = this.context.src;
      var offset = start;
      var ch = src[offset];

      while (ch && ch !== '\n' && ch !== '#') {
        ch = src[offset += 1];
      }

      this.valueRange = new _Range.default(start, offset);
      return offset;
    }
  }, {
    key: "parse",
    value: function parse(context, start) {
      this.context = context;
      var offset = this.parseName(start + 1);
      offset = this.parseParameters(offset);
      offset = this.parseComment(offset);
      this.range = new _Range.default(start, offset);
      return offset;
    }
  }, {
    key: "parameters",
    get: function get() {
      var raw = this.rawValue;
      return raw ? raw.trim().split(/[ \t]+/) : [];
    }
  }]);
  return Directive;
}(_Node2.default);

exports.default = Directive;

/***/ }),

/***/ "./node_modules/yaml/browser/dist/cst/Document.js":
/*!********************************************************!*\
  !*** ./node_modules/yaml/browser/dist/cst/Document.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));

var _get2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/get */ "./node_modules/@babel/runtime/helpers/get.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));

var _constants = __webpack_require__(/*! ../constants */ "./node_modules/yaml/browser/dist/constants.js");

var _errors = __webpack_require__(/*! ../errors */ "./node_modules/yaml/browser/dist/errors.js");

var _BlankLine = _interopRequireDefault(__webpack_require__(/*! ./BlankLine */ "./node_modules/yaml/browser/dist/cst/BlankLine.js"));

var _Collection = __webpack_require__(/*! ./Collection */ "./node_modules/yaml/browser/dist/cst/Collection.js");

var _Comment = _interopRequireDefault(__webpack_require__(/*! ./Comment */ "./node_modules/yaml/browser/dist/cst/Comment.js"));

var _Directive = _interopRequireDefault(__webpack_require__(/*! ./Directive */ "./node_modules/yaml/browser/dist/cst/Directive.js"));

var _Node2 = _interopRequireDefault(__webpack_require__(/*! ./Node */ "./node_modules/yaml/browser/dist/cst/Node.js"));

var _Range = _interopRequireDefault(__webpack_require__(/*! ./Range */ "./node_modules/yaml/browser/dist/cst/Range.js"));

var Document =
/*#__PURE__*/
function (_Node) {
  (0, _inherits2.default)(Document, _Node);
  (0, _createClass2.default)(Document, null, [{
    key: "startCommentOrEndBlankLine",
    value: function startCommentOrEndBlankLine(src, start) {
      var offset = _Node2.default.endOfWhiteSpace(src, start);

      var ch = src[offset];
      return ch === '#' || ch === '\n' ? offset : start;
    }
  }]);

  function Document() {
    var _this;

    (0, _classCallCheck2.default)(this, Document);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Document).call(this, _constants.Type.DOCUMENT));
    _this.directives = null;
    _this.contents = null;
    _this.directivesEndMarker = null;
    _this.documentEndMarker = null;
    return _this;
  }

  (0, _createClass2.default)(Document, [{
    key: "parseDirectives",
    value: function parseDirectives(start) {
      var src = this.context.src;
      this.directives = [];
      var atLineStart = true;
      var hasDirectives = false;
      var offset = start;

      while (!_Node2.default.atDocumentBoundary(src, offset, _constants.Char.DIRECTIVES_END)) {
        offset = Document.startCommentOrEndBlankLine(src, offset);

        switch (src[offset]) {
          case '\n':
            if (atLineStart) {
              var blankLine = new _BlankLine.default();
              offset = blankLine.parse({
                src: src
              }, offset);

              if (offset < src.length) {
                this.directives.push(blankLine);
              }
            } else {
              offset += 1;
              atLineStart = true;
            }

            break;

          case '#':
            {
              var comment = new _Comment.default();
              offset = comment.parse({
                src: src
              }, offset);
              this.directives.push(comment);
              atLineStart = false;
            }
            break;

          case '%':
            {
              var directive = new _Directive.default();
              offset = directive.parse({
                parent: this,
                src: src
              }, offset);
              this.directives.push(directive);
              hasDirectives = true;
              atLineStart = false;
            }
            break;

          default:
            if (hasDirectives) {
              this.error = new _errors.YAMLSemanticError(this, 'Missing directives-end indicator line');
            } else if (this.directives.length > 0) {
              this.contents = this.directives;
              this.directives = [];
            }

            return offset;
        }
      }

      if (src[offset]) {
        this.directivesEndMarker = new _Range.default(offset, offset + 3);
        return offset + 3;
      }

      if (hasDirectives) {
        this.error = new _errors.YAMLSemanticError(this, 'Missing directives-end indicator line');
      } else if (this.directives.length > 0) {
        this.contents = this.directives;
        this.directives = [];
      }

      return offset;
    }
  }, {
    key: "parseContents",
    value: function parseContents(start) {
      var _this$context = this.context,
          parseNode = _this$context.parseNode,
          src = _this$context.src;
      if (!this.contents) this.contents = [];
      var lineStart = start;

      while (src[lineStart - 1] === '-') {
        lineStart -= 1;
      }

      var offset = _Node2.default.endOfWhiteSpace(src, start);

      var atLineStart = lineStart === start;
      this.valueRange = new _Range.default(offset);

      while (!_Node2.default.atDocumentBoundary(src, offset, _constants.Char.DOCUMENT_END)) {
        switch (src[offset]) {
          case '\n':
            if (atLineStart) {
              var blankLine = new _BlankLine.default();
              offset = blankLine.parse({
                src: src
              }, offset);

              if (offset < src.length) {
                this.contents.push(blankLine);
              }
            } else {
              offset += 1;
              atLineStart = true;
            }

            lineStart = offset;
            break;

          case '#':
            {
              var comment = new _Comment.default();
              offset = comment.parse({
                src: src
              }, offset);
              this.contents.push(comment);
              atLineStart = false;
            }
            break;

          default:
            {
              var iEnd = _Node2.default.endOfIndent(src, offset);

              var context = {
                atLineStart: atLineStart,
                indent: -1,
                inFlow: false,
                inCollection: false,
                lineStart: lineStart,
                parent: this
              };
              var node = parseNode(context, iEnd);
              if (!node) return this.valueRange.end = iEnd; // at next document start

              this.contents.push(node);
              offset = node.range.end;
              atLineStart = false;
              var ec = (0, _Collection.grabCollectionEndComments)(node);
              if (ec) Array.prototype.push.apply(this.contents, ec);
            }
        }

        offset = Document.startCommentOrEndBlankLine(src, offset);
      }

      this.valueRange.end = offset;

      if (src[offset]) {
        this.documentEndMarker = new _Range.default(offset, offset + 3);
        offset += 3;

        if (src[offset]) {
          offset = _Node2.default.endOfWhiteSpace(src, offset);

          if (src[offset] === '#') {
            var _comment = new _Comment.default();

            offset = _comment.parse({
              src: src
            }, offset);
            this.contents.push(_comment);
          }

          switch (src[offset]) {
            case '\n':
              offset += 1;
              break;

            case undefined:
              break;

            default:
              this.error = new _errors.YAMLSyntaxError(this, 'Document end marker line cannot have a non-comment suffix');
          }
        }
      }

      return offset;
    }
    /**
     * @param {ParseContext} context
     * @param {number} start - Index of first character
     * @returns {number} - Index of the character after this
     */

  }, {
    key: "parse",
    value: function parse(context, start) {
      context.root = this;
      this.context = context;
      var src = context.src;
      var offset = src.charCodeAt(start) === 0xfeff ? start + 1 : start; // skip BOM

      offset = this.parseDirectives(offset);
      offset = this.parseContents(offset);
      return offset;
    }
  }, {
    key: "setOrigRanges",
    value: function setOrigRanges(cr, offset) {
      offset = (0, _get2.default)((0, _getPrototypeOf2.default)(Document.prototype), "setOrigRanges", this).call(this, cr, offset);
      this.directives.forEach(function (node) {
        offset = node.setOrigRanges(cr, offset);
      });
      if (this.directivesEndMarker) offset = this.directivesEndMarker.setOrigRange(cr, offset);
      this.contents.forEach(function (node) {
        offset = node.setOrigRanges(cr, offset);
      });
      if (this.documentEndMarker) offset = this.documentEndMarker.setOrigRange(cr, offset);
      return offset;
    }
  }, {
    key: "toString",
    value: function toString() {
      var contents = this.contents,
          directives = this.directives,
          value = this.value;
      if (value != null) return value;
      var str = directives.join('');

      if (contents.length > 0) {
        if (directives.length > 0 || contents[0].type === _constants.Type.COMMENT) str += '---\n';
        str += contents.join('');
      }

      if (str[str.length - 1] !== '\n') str += '\n';
      return str;
    }
  }]);
  return Document;
}(_Node2.default);

exports.default = Document;

/***/ }),

/***/ "./node_modules/yaml/browser/dist/cst/FlowCollection.js":
/*!**************************************************************!*\
  !*** ./node_modules/yaml/browser/dist/cst/FlowCollection.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));

var _get2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/get */ "./node_modules/@babel/runtime/helpers/get.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));

var _constants = __webpack_require__(/*! ../constants */ "./node_modules/yaml/browser/dist/constants.js");

var _errors = __webpack_require__(/*! ../errors */ "./node_modules/yaml/browser/dist/errors.js");

var _BlankLine = _interopRequireDefault(__webpack_require__(/*! ./BlankLine */ "./node_modules/yaml/browser/dist/cst/BlankLine.js"));

var _Comment = _interopRequireDefault(__webpack_require__(/*! ./Comment */ "./node_modules/yaml/browser/dist/cst/Comment.js"));

var _Node2 = _interopRequireDefault(__webpack_require__(/*! ./Node */ "./node_modules/yaml/browser/dist/cst/Node.js"));

var _Range = _interopRequireDefault(__webpack_require__(/*! ./Range */ "./node_modules/yaml/browser/dist/cst/Range.js"));

var FlowCollection =
/*#__PURE__*/
function (_Node) {
  (0, _inherits2.default)(FlowCollection, _Node);

  function FlowCollection(type, props) {
    var _this;

    (0, _classCallCheck2.default)(this, FlowCollection);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(FlowCollection).call(this, type, props));
    _this.items = null;
    return _this;
  }

  (0, _createClass2.default)(FlowCollection, [{
    key: "prevNodeIsJsonLike",
    value: function prevNodeIsJsonLike() {
      var idx = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.items.length;
      var node = this.items[idx - 1];
      return !!node && (node.jsonLike || node.type === _constants.Type.COMMENT && this.nodeIsJsonLike(idx - 1));
    }
    /**
     * @param {ParseContext} context
     * @param {number} start - Index of first character
     * @returns {number} - Index of the character after this
     */

  }, {
    key: "parse",
    value: function parse(context, start) {
      this.context = context;
      var parseNode = context.parseNode,
          src = context.src;
      var indent = context.indent,
          lineStart = context.lineStart;
      var char = src[start]; // { or [

      this.items = [{
        char: char,
        offset: start
      }];

      var offset = _Node2.default.endOfWhiteSpace(src, start + 1);

      char = src[offset];

      while (char && char !== ']' && char !== '}') {
        switch (char) {
          case '\n':
            {
              lineStart = offset + 1;

              var wsEnd = _Node2.default.endOfWhiteSpace(src, lineStart);

              if (src[wsEnd] === '\n') {
                var blankLine = new _BlankLine.default();
                lineStart = blankLine.parse({
                  src: src
                }, lineStart);
                this.items.push(blankLine);
              }

              offset = _Node2.default.endOfIndent(src, lineStart);

              if (offset <= lineStart + indent) {
                char = src[offset];

                if (offset < lineStart + indent || char !== ']' && char !== '}') {
                  var msg = 'Insufficient indentation in flow collection';
                  this.error = new _errors.YAMLSemanticError(this, msg);
                }
              }
            }
            break;

          case ',':
            {
              this.items.push({
                char: char,
                offset: offset
              });
              offset += 1;
            }
            break;

          case '#':
            {
              var comment = new _Comment.default();
              offset = comment.parse({
                src: src
              }, offset);
              this.items.push(comment);
            }
            break;

          case '?':
          case ':':
            {
              var next = src[offset + 1];

              if (next === '\n' || next === '\t' || next === ' ' || next === ',' || // in-flow : after JSON-like key does not need to be followed by whitespace
              char === ':' && this.prevNodeIsJsonLike()) {
                this.items.push({
                  char: char,
                  offset: offset
                });
                offset += 1;
                break;
              }
            }
          // fallthrough

          default:
            {
              var node = parseNode({
                atLineStart: false,
                inCollection: false,
                inFlow: true,
                indent: -1,
                lineStart: lineStart,
                parent: this
              }, offset);

              if (!node) {
                // at next document start
                this.valueRange = new _Range.default(start, offset);
                return offset;
              }

              this.items.push(node);
              offset = _Node2.default.normalizeOffset(src, node.range.end);
            }
        }

        offset = _Node2.default.endOfWhiteSpace(src, offset);
        char = src[offset];
      }

      this.valueRange = new _Range.default(start, offset + 1);

      if (char) {
        this.items.push({
          char: char,
          offset: offset
        });
        offset = _Node2.default.endOfWhiteSpace(src, offset + 1);
        offset = this.parseComment(offset);
      }

      return offset;
    }
  }, {
    key: "setOrigRanges",
    value: function setOrigRanges(cr, offset) {
      offset = (0, _get2.default)((0, _getPrototypeOf2.default)(FlowCollection.prototype), "setOrigRanges", this).call(this, cr, offset);
      this.items.forEach(function (node) {
        if (node instanceof _Node2.default) {
          offset = node.setOrigRanges(cr, offset);
        } else if (cr.length === 0) {
          node.origOffset = node.offset;
        } else {
          var i = offset;

          while (i < cr.length) {
            if (cr[i] > node.offset) break;else ++i;
          }

          node.origOffset = node.offset + i;
          offset = i;
        }
      });
      return offset;
    }
  }, {
    key: "toString",
    value: function toString() {
      var src = this.context.src,
          items = this.items,
          range = this.range,
          value = this.value;
      if (value != null) return value;
      var nodes = items.filter(function (item) {
        return item instanceof _Node2.default;
      });
      var str = '';
      var prevEnd = range.start;
      nodes.forEach(function (node) {
        var prefix = src.slice(prevEnd, node.range.start);
        prevEnd = node.range.end;
        str += prefix + String(node);

        if (str[str.length - 1] === '\n' && src[prevEnd - 1] !== '\n' && src[prevEnd] === '\n') {
          // Comment range does not include the terminal newline, but its
          // stringified value does. Without this fix, newlines at comment ends
          // get duplicated.
          prevEnd += 1;
        }
      });
      str += src.slice(prevEnd, range.end);
      return _Node2.default.addStringTerminator(src, range.end, str);
    }
  }]);
  return FlowCollection;
}(_Node2.default);

exports.default = FlowCollection;

/***/ }),

/***/ "./node_modules/yaml/browser/dist/cst/Node.js":
/*!****************************************************!*\
  !*** ./node_modules/yaml/browser/dist/cst/Node.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var _constants = __webpack_require__(/*! ../constants */ "./node_modules/yaml/browser/dist/constants.js");

var _sourceUtils = __webpack_require__(/*! ./source-utils */ "./node_modules/yaml/browser/dist/cst/source-utils.js");

var _Range = _interopRequireDefault(__webpack_require__(/*! ./Range */ "./node_modules/yaml/browser/dist/cst/Range.js"));

/** Root class of all nodes */
var Node =
/*#__PURE__*/
function () {
  (0, _createClass2.default)(Node, null, [{
    key: "addStringTerminator",
    value: function addStringTerminator(src, offset, str) {
      if (str[str.length - 1] === '\n') return str;
      var next = Node.endOfWhiteSpace(src, offset);
      return next >= src.length || src[next] === '\n' ? str + '\n' : str;
    } // ^(---|...)

  }, {
    key: "atDocumentBoundary",
    value: function atDocumentBoundary(src, offset, sep) {
      var ch0 = src[offset];
      if (!ch0) return true;
      var prev = src[offset - 1];
      if (prev && prev !== '\n') return false;

      if (sep) {
        if (ch0 !== sep) return false;
      } else {
        if (ch0 !== _constants.Char.DIRECTIVES_END && ch0 !== _constants.Char.DOCUMENT_END) return false;
      }

      var ch1 = src[offset + 1];
      var ch2 = src[offset + 2];
      if (ch1 !== ch0 || ch2 !== ch0) return false;
      var ch3 = src[offset + 3];
      return !ch3 || ch3 === '\n' || ch3 === '\t' || ch3 === ' ';
    }
  }, {
    key: "endOfIdentifier",
    value: function endOfIdentifier(src, offset) {
      var ch = src[offset];
      var isVerbatim = ch === '<';
      var notOk = isVerbatim ? ['\n', '\t', ' ', '>'] : ['\n', '\t', ' ', '[', ']', '{', '}', ','];

      while (ch && notOk.indexOf(ch) === -1) {
        ch = src[offset += 1];
      }

      if (isVerbatim && ch === '>') offset += 1;
      return offset;
    }
  }, {
    key: "endOfIndent",
    value: function endOfIndent(src, offset) {
      var ch = src[offset];

      while (ch === ' ') {
        ch = src[offset += 1];
      }

      return offset;
    }
  }, {
    key: "endOfLine",
    value: function endOfLine(src, offset) {
      var ch = src[offset];

      while (ch && ch !== '\n') {
        ch = src[offset += 1];
      }

      return offset;
    }
  }, {
    key: "endOfWhiteSpace",
    value: function endOfWhiteSpace(src, offset) {
      var ch = src[offset];

      while (ch === '\t' || ch === ' ') {
        ch = src[offset += 1];
      }

      return offset;
    }
  }, {
    key: "startOfLine",
    value: function startOfLine(src, offset) {
      var ch = src[offset - 1];
      if (ch === '\n') return offset;

      while (ch && ch !== '\n') {
        ch = src[offset -= 1];
      }

      return offset + 1;
    }
    /**
     * End of indentation, or null if the line's indent level is not more
     * than `indent`
     *
     * @param {string} src
     * @param {number} indent
     * @param {number} lineStart
     * @returns {?number}
     */

  }, {
    key: "endOfBlockIndent",
    value: function endOfBlockIndent(src, indent, lineStart) {
      var inEnd = Node.endOfIndent(src, lineStart);

      if (inEnd > lineStart + indent) {
        return inEnd;
      } else {
        var wsEnd = Node.endOfWhiteSpace(src, inEnd);
        var ch = src[wsEnd];
        if (!ch || ch === '\n') return wsEnd;
      }

      return null;
    }
  }, {
    key: "atBlank",
    value: function atBlank(src, offset, endAsBlank) {
      var ch = src[offset];
      return ch === '\n' || ch === '\t' || ch === ' ' || endAsBlank && !ch;
    }
  }, {
    key: "atCollectionItem",
    value: function atCollectionItem(src, offset) {
      var ch = src[offset];
      return (ch === '?' || ch === ':' || ch === '-') && Node.atBlank(src, offset + 1, true);
    }
  }, {
    key: "nextNodeIsIndented",
    value: function nextNodeIsIndented(ch, indentDiff, indicatorAsIndent) {
      if (!ch || indentDiff < 0) return false;
      if (indentDiff > 0) return true;
      return indicatorAsIndent && ch === '-';
    } // should be at line or string end, or at next non-whitespace char

  }, {
    key: "normalizeOffset",
    value: function normalizeOffset(src, offset) {
      var ch = src[offset];
      return !ch ? offset : ch !== '\n' && src[offset - 1] === '\n' ? offset - 1 : Node.endOfWhiteSpace(src, offset);
    } // fold single newline into space, multiple newlines to N - 1 newlines
    // presumes src[offset] === '\n'

  }, {
    key: "foldNewline",
    value: function foldNewline(src, offset, indent) {
      var inCount = 0;
      var error = false;
      var fold = '';
      var ch = src[offset + 1];

      while (ch === ' ' || ch === '\t' || ch === '\n') {
        switch (ch) {
          case '\n':
            inCount = 0;
            offset += 1;
            fold += '\n';
            break;

          case '\t':
            if (inCount <= indent) error = true;
            offset = Node.endOfWhiteSpace(src, offset + 2) - 1;
            break;

          case ' ':
            inCount += 1;
            offset += 1;
            break;
        }

        ch = src[offset + 1];
      }

      if (!fold) fold = ' ';
      if (ch && inCount <= indent) error = true;
      return {
        fold: fold,
        offset: offset,
        error: error
      };
    }
  }]);

  function Node(type, props, context) {
    (0, _classCallCheck2.default)(this, Node);
    Object.defineProperty(this, 'context', {
      value: context || null,
      writable: true
    });
    this.error = null;
    this.range = null;
    this.valueRange = null;
    this.props = props || [];
    this.type = type;
    this.value = null;
  }

  (0, _createClass2.default)(Node, [{
    key: "getPropValue",
    value: function getPropValue(idx, key, skipKey) {
      if (!this.context) return null;
      var src = this.context.src;
      var prop = this.props[idx];
      return prop && src[prop.start] === key ? src.slice(prop.start + (skipKey ? 1 : 0), prop.end) : null;
    }
  }, {
    key: "commentHasRequiredWhitespace",
    value: function commentHasRequiredWhitespace(start) {
      var src = this.context.src;
      if (this.header && start === this.header.end) return false;
      if (!this.valueRange) return false;
      var end = this.valueRange.end;
      return start !== end || Node.atBlank(src, end - 1);
    }
  }, {
    key: "parseComment",
    value: function parseComment(start) {
      var src = this.context.src;

      if (src[start] === _constants.Char.COMMENT) {
        var end = Node.endOfLine(src, start + 1);
        var commentRange = new _Range.default(start, end);
        this.props.push(commentRange);
        return end;
      }

      return start;
    }
    /**
     * Populates the `origStart` and `origEnd` values of all ranges for this
     * node. Extended by child classes to handle descendant nodes.
     *
     * @param {number[]} cr - Positions of dropped CR characters
     * @param {number} offset - Starting index of `cr` from the last call
     * @returns {number} - The next offset, matching the one found for `origStart`
     */

  }, {
    key: "setOrigRanges",
    value: function setOrigRanges(cr, offset) {
      if (this.range) offset = this.range.setOrigRange(cr, offset);
      if (this.valueRange) this.valueRange.setOrigRange(cr, offset);
      this.props.forEach(function (prop) {
        return prop.setOrigRange(cr, offset);
      });
      return offset;
    }
  }, {
    key: "toString",
    value: function toString() {
      var src = this.context.src,
          range = this.range,
          value = this.value;
      if (value != null) return value;
      var str = src.slice(range.start, range.end);
      return Node.addStringTerminator(src, range.end, str);
    }
  }, {
    key: "anchor",
    get: function get() {
      for (var i = 0; i < this.props.length; ++i) {
        var anchor = this.getPropValue(i, _constants.Char.ANCHOR, true);
        if (anchor != null) return anchor;
      }

      return null;
    }
  }, {
    key: "comment",
    get: function get() {
      var comments = [];

      for (var i = 0; i < this.props.length; ++i) {
        var comment = this.getPropValue(i, _constants.Char.COMMENT, true);
        if (comment != null) comments.push(comment);
      }

      return comments.length > 0 ? comments.join('\n') : null;
    }
  }, {
    key: "hasComment",
    get: function get() {
      if (this.context) {
        var src = this.context.src;

        for (var i = 0; i < this.props.length; ++i) {
          if (src[this.props[i].start] === _constants.Char.COMMENT) return true;
        }
      }

      return false;
    }
  }, {
    key: "hasProps",
    get: function get() {
      if (this.context) {
        var src = this.context.src;

        for (var i = 0; i < this.props.length; ++i) {
          if (src[this.props[i].start] !== _constants.Char.COMMENT) return true;
        }
      }

      return false;
    }
  }, {
    key: "includesTrailingLines",
    get: function get() {
      return false;
    }
  }, {
    key: "jsonLike",
    get: function get() {
      var jsonLikeTypes = [_constants.Type.FLOW_MAP, _constants.Type.FLOW_SEQ, _constants.Type.QUOTE_DOUBLE, _constants.Type.QUOTE_SINGLE];
      return jsonLikeTypes.indexOf(this.type) !== -1;
    }
  }, {
    key: "rangeAsLinePos",
    get: function get() {
      if (!this.range || !this.context) return undefined;
      var start = (0, _sourceUtils.getLinePos)(this.range.start, this.context.root);
      if (!start) return undefined;
      var end = (0, _sourceUtils.getLinePos)(this.range.end, this.context.root);
      return {
        start: start,
        end: end
      };
    }
  }, {
    key: "rawValue",
    get: function get() {
      if (!this.valueRange || !this.context) return null;
      var _this$valueRange = this.valueRange,
          start = _this$valueRange.start,
          end = _this$valueRange.end;
      return this.context.src.slice(start, end);
    }
  }, {
    key: "tag",
    get: function get() {
      for (var i = 0; i < this.props.length; ++i) {
        var tag = this.getPropValue(i, _constants.Char.TAG, false);

        if (tag != null) {
          if (tag[1] === '<') {
            return {
              verbatim: tag.slice(2, -1)
            };
          } else {
            // eslint-disable-next-line no-unused-vars
            var _tag$match = tag.match(/^(.*!)([^!]*)$/),
                _tag$match2 = (0, _slicedToArray2.default)(_tag$match, 3),
                _ = _tag$match2[0],
                handle = _tag$match2[1],
                suffix = _tag$match2[2];

            return {
              handle: handle,
              suffix: suffix
            };
          }
        }
      }

      return null;
    }
  }, {
    key: "valueRangeContainsNewline",
    get: function get() {
      if (!this.valueRange || !this.context) return false;
      var _this$valueRange2 = this.valueRange,
          start = _this$valueRange2.start,
          end = _this$valueRange2.end;
      var src = this.context.src;

      for (var i = start; i < end; ++i) {
        if (src[i] === '\n') return true;
      }

      return false;
    }
  }]);
  return Node;
}();

exports.default = Node;

/***/ }),

/***/ "./node_modules/yaml/browser/dist/cst/ParseContext.js":
/*!************************************************************!*\
  !*** ./node_modules/yaml/browser/dist/cst/ParseContext.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _constants = __webpack_require__(/*! ../constants */ "./node_modules/yaml/browser/dist/constants.js");

var _errors = __webpack_require__(/*! ../errors */ "./node_modules/yaml/browser/dist/errors.js");

var _Alias = _interopRequireDefault(__webpack_require__(/*! ./Alias */ "./node_modules/yaml/browser/dist/cst/Alias.js"));

var _BlockValue = _interopRequireDefault(__webpack_require__(/*! ./BlockValue */ "./node_modules/yaml/browser/dist/cst/BlockValue.js"));

var _Collection = _interopRequireDefault(__webpack_require__(/*! ./Collection */ "./node_modules/yaml/browser/dist/cst/Collection.js"));

var _CollectionItem = _interopRequireDefault(__webpack_require__(/*! ./CollectionItem */ "./node_modules/yaml/browser/dist/cst/CollectionItem.js"));

var _FlowCollection = _interopRequireDefault(__webpack_require__(/*! ./FlowCollection */ "./node_modules/yaml/browser/dist/cst/FlowCollection.js"));

var _Node = _interopRequireDefault(__webpack_require__(/*! ./Node */ "./node_modules/yaml/browser/dist/cst/Node.js"));

var _PlainValue = _interopRequireDefault(__webpack_require__(/*! ./PlainValue */ "./node_modules/yaml/browser/dist/cst/PlainValue.js"));

var _QuoteDouble = _interopRequireDefault(__webpack_require__(/*! ./QuoteDouble */ "./node_modules/yaml/browser/dist/cst/QuoteDouble.js"));

var _QuoteSingle = _interopRequireDefault(__webpack_require__(/*! ./QuoteSingle */ "./node_modules/yaml/browser/dist/cst/QuoteSingle.js"));

var _Range = _interopRequireDefault(__webpack_require__(/*! ./Range */ "./node_modules/yaml/browser/dist/cst/Range.js"));

/**
 * @param {boolean} atLineStart - Node starts at beginning of line
 * @param {boolean} inFlow - true if currently in a flow context
 * @param {boolean} inCollection - true if currently in a collection context
 * @param {number} indent - Current level of indentation
 * @param {number} lineStart - Start of the current line
 * @param {Node} parent - The parent of the node
 * @param {string} src - Source of the YAML document
 */
var ParseContext =
/*#__PURE__*/
function () {
  (0, _createClass2.default)(ParseContext, null, [{
    key: "parseType",
    value: function parseType(src, offset, inFlow) {
      switch (src[offset]) {
        case '*':
          return _constants.Type.ALIAS;

        case '>':
          return _constants.Type.BLOCK_FOLDED;

        case '|':
          return _constants.Type.BLOCK_LITERAL;

        case '{':
          return _constants.Type.FLOW_MAP;

        case '[':
          return _constants.Type.FLOW_SEQ;

        case '?':
          return !inFlow && _Node.default.atBlank(src, offset + 1, true) ? _constants.Type.MAP_KEY : _constants.Type.PLAIN;

        case ':':
          return !inFlow && _Node.default.atBlank(src, offset + 1, true) ? _constants.Type.MAP_VALUE : _constants.Type.PLAIN;

        case '-':
          return !inFlow && _Node.default.atBlank(src, offset + 1, true) ? _constants.Type.SEQ_ITEM : _constants.Type.PLAIN;

        case '"':
          return _constants.Type.QUOTE_DOUBLE;

        case "'":
          return _constants.Type.QUOTE_SINGLE;

        default:
          return _constants.Type.PLAIN;
      }
    }
  }]);

  function ParseContext() {
    var _this = this;

    var orig = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        atLineStart = _ref.atLineStart,
        inCollection = _ref.inCollection,
        inFlow = _ref.inFlow,
        indent = _ref.indent,
        lineStart = _ref.lineStart,
        parent = _ref.parent;

    (0, _classCallCheck2.default)(this, ParseContext);
    (0, _defineProperty2.default)(this, "parseNode", function (overlay, start) {
      if (_Node.default.atDocumentBoundary(_this.src, start)) return null;
      var context = new ParseContext(_this, overlay);

      var _context$parseProps = context.parseProps(start),
          props = _context$parseProps.props,
          type = _context$parseProps.type,
          valueStart = _context$parseProps.valueStart;

      var node;

      switch (type) {
        case _constants.Type.ALIAS:
          node = new _Alias.default(type, props);
          break;

        case _constants.Type.BLOCK_FOLDED:
        case _constants.Type.BLOCK_LITERAL:
          node = new _BlockValue.default(type, props);
          break;

        case _constants.Type.FLOW_MAP:
        case _constants.Type.FLOW_SEQ:
          node = new _FlowCollection.default(type, props);
          break;

        case _constants.Type.MAP_KEY:
        case _constants.Type.MAP_VALUE:
        case _constants.Type.SEQ_ITEM:
          node = new _CollectionItem.default(type, props);
          break;

        case _constants.Type.COMMENT:
        case _constants.Type.PLAIN:
          node = new _PlainValue.default(type, props);
          break;

        case _constants.Type.QUOTE_DOUBLE:
          node = new _QuoteDouble.default(type, props);
          break;

        case _constants.Type.QUOTE_SINGLE:
          node = new _QuoteSingle.default(type, props);
          break;

        default:
          node.error = new _errors.YAMLSyntaxError(node, "Unknown node type: ".concat(JSON.stringify(type)));
          node.range = new _Range.default(start, start + 1);
          return node;
      }

      var offset = node.parse(context, valueStart);
      node.range = new _Range.default(start, offset);

      if (offset <= start) {
        node.error = new Error("Node#parse consumed no characters");
        node.error.parseEnd = offset;
        node.error.source = node;
        node.range.end = start + 1;
      }

      if (context.nodeStartsCollection(node)) {
        if (!node.error && !context.atLineStart && context.parent.type === _constants.Type.DOCUMENT) {
          node.error = new _errors.YAMLSyntaxError(node, 'Block collection must not have preceding content here (e.g. directives-end indicator)');
        }

        var collection = new _Collection.default(node);
        offset = collection.parse(new ParseContext(context), offset);
        collection.range = new _Range.default(start, offset);
        return collection;
      }

      return node;
    });
    this.atLineStart = atLineStart != null ? atLineStart : orig.atLineStart || false;
    this.inCollection = inCollection != null ? inCollection : orig.inCollection || false;
    this.inFlow = inFlow != null ? inFlow : orig.inFlow || false;
    this.indent = indent != null ? indent : orig.indent;
    this.lineStart = lineStart != null ? lineStart : orig.lineStart;
    this.parent = parent != null ? parent : orig.parent || {};
    this.root = orig.root;
    this.src = orig.src;
  } // for logging


  (0, _createClass2.default)(ParseContext, [{
    key: "nodeStartsCollection",
    value: function nodeStartsCollection(node) {
      var inCollection = this.inCollection,
          inFlow = this.inFlow,
          src = this.src;
      if (inCollection || inFlow) return false;
      if (node instanceof _CollectionItem.default) return true; // check for implicit key

      var offset = node.range.end;
      if (src[offset] === '\n' || src[offset - 1] === '\n') return false;
      offset = _Node.default.endOfWhiteSpace(src, offset);
      return src[offset] === ':';
    } // Anchor and tag are before type, which determines the node implementation
    // class; hence this intermediate step.

  }, {
    key: "parseProps",
    value: function parseProps(offset) {
      var inFlow = this.inFlow,
          parent = this.parent,
          src = this.src;
      var props = [];
      var lineHasProps = false;
      offset = _Node.default.endOfWhiteSpace(src, offset);
      var ch = src[offset];

      while (ch === _constants.Char.ANCHOR || ch === _constants.Char.COMMENT || ch === _constants.Char.TAG || ch === '\n') {
        if (ch === '\n') {
          var lineStart = offset + 1;

          var inEnd = _Node.default.endOfIndent(src, lineStart);

          var indentDiff = inEnd - (lineStart + this.indent);
          var noIndicatorAsIndent = parent.type === _constants.Type.SEQ_ITEM && parent.context.atLineStart;
          if (!_Node.default.nextNodeIsIndented(src[inEnd], indentDiff, !noIndicatorAsIndent)) break;
          this.atLineStart = true;
          this.lineStart = lineStart;
          lineHasProps = false;
          offset = inEnd;
        } else if (ch === _constants.Char.COMMENT) {
          var end = _Node.default.endOfLine(src, offset + 1);

          props.push(new _Range.default(offset, end));
          offset = end;
        } else {
          var _end = _Node.default.endOfIdentifier(src, offset + 1);

          if (ch === _constants.Char.TAG && src[_end] === ',' && /^[a-zA-Z0-9-]+\.[a-zA-Z0-9-]+,\d\d\d\d(-\d\d){0,2}\/\S/.test(src.slice(offset + 1, _end + 13))) {
            // Let's presume we're dealing with a YAML 1.0 domain tag here, rather
            // than an empty but 'foo.bar' private-tagged node in a flow collection
            // followed without whitespace by a plain string starting with a year
            // or date divided by something.
            _end = _Node.default.endOfIdentifier(src, _end + 5);
          }

          props.push(new _Range.default(offset, _end));
          lineHasProps = true;
          offset = _Node.default.endOfWhiteSpace(src, _end);
        }

        ch = src[offset];
      } // '- &a : b' has an anchor on an empty node


      if (lineHasProps && ch === ':' && _Node.default.atBlank(src, offset + 1, true)) offset -= 1;
      var type = ParseContext.parseType(src, offset, inFlow);
      return {
        props: props,
        type: type,
        valueStart: offset
      };
    }
    /**
     * Parses a node from the source
     * @param {ParseContext} overlay
     * @param {number} start - Index of first non-whitespace character for the node
     * @returns {?Node} - null if at a document boundary
     */

  }, {
    key: "pretty",
    get: function get() {
      var obj = {
        start: "".concat(this.lineStart, " + ").concat(this.indent),
        in: [],
        parent: this.parent.type
      };
      if (!this.atLineStart) obj.start += ' + N';
      if (this.inCollection) obj.in.push('collection');
      if (this.inFlow) obj.in.push('flow');
      return obj;
    }
  }]);
  return ParseContext;
}();

exports.default = ParseContext;

/***/ }),

/***/ "./node_modules/yaml/browser/dist/cst/PlainValue.js":
/*!**********************************************************!*\
  !*** ./node_modules/yaml/browser/dist/cst/PlainValue.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));

var _Node2 = _interopRequireDefault(__webpack_require__(/*! ./Node */ "./node_modules/yaml/browser/dist/cst/Node.js"));

var _Range = _interopRequireDefault(__webpack_require__(/*! ./Range */ "./node_modules/yaml/browser/dist/cst/Range.js"));

var PlainValue =
/*#__PURE__*/
function (_Node) {
  (0, _inherits2.default)(PlainValue, _Node);

  function PlainValue() {
    (0, _classCallCheck2.default)(this, PlainValue);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(PlainValue).apply(this, arguments));
  }

  (0, _createClass2.default)(PlainValue, [{
    key: "parseBlockValue",
    value: function parseBlockValue(start) {
      var _this$context = this.context,
          indent = _this$context.indent,
          inFlow = _this$context.inFlow,
          src = _this$context.src;
      var offset = start;
      var valueEnd = start;

      for (var ch = src[offset]; ch === '\n'; ch = src[offset]) {
        if (_Node2.default.atDocumentBoundary(src, offset + 1)) break;

        var end = _Node2.default.endOfBlockIndent(src, indent, offset + 1);

        if (end === null || src[end] === '#') break;

        if (src[end] === '\n') {
          offset = end;
        } else {
          valueEnd = PlainValue.endOfLine(src, end, inFlow);
          offset = valueEnd;
        }
      }

      if (this.valueRange.isEmpty()) this.valueRange.start = start;
      this.valueRange.end = valueEnd;
      return valueEnd;
    }
    /**
     * Parses a plain value from the source
     *
     * Accepted forms are:
     * ```
     * #comment
     *
     * first line
     *
     * first line #comment
     *
     * first line
     * block
     * lines
     *
     * #comment
     * block
     * lines
     * ```
     * where block lines are empty or have an indent level greater than `indent`.
     *
     * @param {ParseContext} context
     * @param {number} start - Index of first character
     * @returns {number} - Index of the character after this scalar, may be `\n`
     */

  }, {
    key: "parse",
    value: function parse(context, start) {
      this.context = context;
      var inFlow = context.inFlow,
          src = context.src;
      var offset = start;
      var ch = src[offset];

      if (ch && ch !== '#' && ch !== '\n') {
        offset = PlainValue.endOfLine(src, start, inFlow);
      }

      this.valueRange = new _Range.default(start, offset);
      offset = _Node2.default.endOfWhiteSpace(src, offset);
      offset = this.parseComment(offset);

      if (!this.hasComment || this.valueRange.isEmpty()) {
        offset = this.parseBlockValue(offset);
      }

      return offset;
    }
  }, {
    key: "strValue",
    get: function get() {
      if (!this.valueRange || !this.context) return null;
      var _this$valueRange = this.valueRange,
          start = _this$valueRange.start,
          end = _this$valueRange.end;
      var src = this.context.src;
      var ch = src[end - 1];

      while (start < end && (ch === '\n' || ch === '\t' || ch === ' ')) {
        ch = src[--end - 1];
      }

      ch = src[start];

      while (start < end && (ch === '\n' || ch === '\t' || ch === ' ')) {
        ch = src[++start];
      }

      var str = '';

      for (var i = start; i < end; ++i) {
        var _ch = src[i];

        if (_ch === '\n') {
          var _Node$foldNewline = _Node2.default.foldNewline(src, i, -1),
              fold = _Node$foldNewline.fold,
              offset = _Node$foldNewline.offset;

          str += fold;
          i = offset;
        } else if (_ch === ' ' || _ch === '\t') {
          // trim trailing whitespace
          var wsStart = i;
          var next = src[i + 1];

          while (i < end && (next === ' ' || next === '\t')) {
            i += 1;
            next = src[i + 1];
          }

          if (next !== '\n') str += i > wsStart ? src.slice(wsStart, i + 1) : _ch;
        } else {
          str += _ch;
        }
      }

      return str;
    }
  }], [{
    key: "endOfLine",
    value: function endOfLine(src, start, inFlow) {
      var ch = src[start];
      var offset = start;

      while (ch && ch !== '\n') {
        if (inFlow && (ch === '[' || ch === ']' || ch === '{' || ch === '}' || ch === ',')) break;
        var next = src[offset + 1];
        if (ch === ':' && (!next || next === '\n' || next === '\t' || next === ' ' || inFlow && next === ',')) break;
        if ((ch === ' ' || ch === '\t') && next === '#') break;
        offset += 1;
        ch = next;
      }

      return offset;
    }
  }]);
  return PlainValue;
}(_Node2.default);

exports.default = PlainValue;

/***/ }),

/***/ "./node_modules/yaml/browser/dist/cst/QuoteDouble.js":
/*!***********************************************************!*\
  !*** ./node_modules/yaml/browser/dist/cst/QuoteDouble.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));

var _errors = __webpack_require__(/*! ../errors */ "./node_modules/yaml/browser/dist/errors.js");

var _Node2 = _interopRequireDefault(__webpack_require__(/*! ./Node */ "./node_modules/yaml/browser/dist/cst/Node.js"));

var _Range = _interopRequireDefault(__webpack_require__(/*! ./Range */ "./node_modules/yaml/browser/dist/cst/Range.js"));

var QuoteDouble =
/*#__PURE__*/
function (_Node) {
  (0, _inherits2.default)(QuoteDouble, _Node);

  function QuoteDouble() {
    (0, _classCallCheck2.default)(this, QuoteDouble);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(QuoteDouble).apply(this, arguments));
  }

  (0, _createClass2.default)(QuoteDouble, [{
    key: "parseCharCode",
    value: function parseCharCode(offset, length, errors) {
      var src = this.context.src;
      var cc = src.substr(offset, length);
      var ok = cc.length === length && /^[0-9a-fA-F]+$/.test(cc);
      var code = ok ? parseInt(cc, 16) : NaN;

      if (isNaN(code)) {
        errors.push(new _errors.YAMLSyntaxError(this, "Invalid escape sequence ".concat(src.substr(offset - 2, length + 2))));
        return src.substr(offset - 2, length + 2);
      }

      return String.fromCodePoint(code);
    }
    /**
     * Parses a "double quoted" value from the source
     *
     * @param {ParseContext} context
     * @param {number} start - Index of first character
     * @returns {number} - Index of the character after this scalar
     */

  }, {
    key: "parse",
    value: function parse(context, start) {
      this.context = context;
      var src = context.src;
      var offset = QuoteDouble.endOfQuote(src, start + 1);
      this.valueRange = new _Range.default(start, offset);
      offset = _Node2.default.endOfWhiteSpace(src, offset);
      offset = this.parseComment(offset);
      return offset;
    }
  }, {
    key: "strValue",

    /**
     * @returns {string | { str: string, errors: YAMLSyntaxError[] }}
     */
    get: function get() {
      if (!this.valueRange || !this.context) return null;
      var errors = [];
      var _this$valueRange = this.valueRange,
          start = _this$valueRange.start,
          end = _this$valueRange.end;
      var _this$context = this.context,
          indent = _this$context.indent,
          src = _this$context.src;
      if (src[end - 1] !== '"') errors.push(new _errors.YAMLSyntaxError(this, 'Missing closing "quote')); // Using String#replace is too painful with escaped newlines preceded by
      // escaped backslashes; also, this should be faster.

      var str = '';

      for (var i = start + 1; i < end - 1; ++i) {
        var ch = src[i];

        if (ch === '\n') {
          if (_Node2.default.atDocumentBoundary(src, i + 1)) errors.push(new _errors.YAMLSemanticError(this, 'Document boundary indicators are not allowed within string values'));

          var _Node$foldNewline = _Node2.default.foldNewline(src, i, indent),
              fold = _Node$foldNewline.fold,
              offset = _Node$foldNewline.offset,
              error = _Node$foldNewline.error;

          str += fold;
          i = offset;
          if (error) errors.push(new _errors.YAMLSemanticError(this, 'Multi-line double-quoted string needs to be sufficiently indented'));
        } else if (ch === '\\') {
          i += 1;

          switch (src[i]) {
            case '0':
              str += '\0';
              break;
            // null character

            case 'a':
              str += '\x07';
              break;
            // bell character

            case 'b':
              str += '\b';
              break;
            // backspace

            case 'e':
              str += '\x1b';
              break;
            // escape character

            case 'f':
              str += '\f';
              break;
            // form feed

            case 'n':
              str += '\n';
              break;
            // line feed

            case 'r':
              str += '\r';
              break;
            // carriage return

            case 't':
              str += '\t';
              break;
            // horizontal tab

            case 'v':
              str += '\v';
              break;
            // vertical tab

            case 'N':
              str += "\x85";
              break;
            // Unicode next line

            case '_':
              str += "\xA0";
              break;
            // Unicode non-breaking space

            case 'L':
              str += "\u2028";
              break;
            // Unicode line separator

            case 'P':
              str += "\u2029";
              break;
            // Unicode paragraph separator

            case ' ':
              str += ' ';
              break;

            case '"':
              str += '"';
              break;

            case '/':
              str += '/';
              break;

            case '\\':
              str += '\\';
              break;

            case '\t':
              str += '\t';
              break;

            case 'x':
              str += this.parseCharCode(i + 1, 2, errors);
              i += 2;
              break;

            case 'u':
              str += this.parseCharCode(i + 1, 4, errors);
              i += 4;
              break;

            case 'U':
              str += this.parseCharCode(i + 1, 8, errors);
              i += 8;
              break;

            case '\n':
              // skip escaped newlines, but still trim the following line
              while (src[i + 1] === ' ' || src[i + 1] === '\t') {
                i += 1;
              }

              break;

            default:
              errors.push(new _errors.YAMLSyntaxError(this, "Invalid escape sequence ".concat(src.substr(i - 1, 2))));
              str += '\\' + src[i];
          }
        } else if (ch === ' ' || ch === '\t') {
          // trim trailing whitespace
          var wsStart = i;
          var next = src[i + 1];

          while (next === ' ' || next === '\t') {
            i += 1;
            next = src[i + 1];
          }

          if (next !== '\n') str += i > wsStart ? src.slice(wsStart, i + 1) : ch;
        } else {
          str += ch;
        }
      }

      return errors.length > 0 ? {
        errors: errors,
        str: str
      } : str;
    }
  }], [{
    key: "endOfQuote",
    value: function endOfQuote(src, offset) {
      var ch = src[offset];

      while (ch && ch !== '"') {
        offset += ch === '\\' ? 2 : 1;
        ch = src[offset];
      }

      return offset + 1;
    }
  }]);
  return QuoteDouble;
}(_Node2.default);

exports.default = QuoteDouble;

/***/ }),

/***/ "./node_modules/yaml/browser/dist/cst/QuoteSingle.js":
/*!***********************************************************!*\
  !*** ./node_modules/yaml/browser/dist/cst/QuoteSingle.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));

var _errors = __webpack_require__(/*! ../errors */ "./node_modules/yaml/browser/dist/errors.js");

var _Node2 = _interopRequireDefault(__webpack_require__(/*! ./Node */ "./node_modules/yaml/browser/dist/cst/Node.js"));

var _Range = _interopRequireDefault(__webpack_require__(/*! ./Range */ "./node_modules/yaml/browser/dist/cst/Range.js"));

var QuoteSingle =
/*#__PURE__*/
function (_Node) {
  (0, _inherits2.default)(QuoteSingle, _Node);

  function QuoteSingle() {
    (0, _classCallCheck2.default)(this, QuoteSingle);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(QuoteSingle).apply(this, arguments));
  }

  (0, _createClass2.default)(QuoteSingle, [{
    key: "parse",

    /**
     * Parses a 'single quoted' value from the source
     *
     * @param {ParseContext} context
     * @param {number} start - Index of first character
     * @returns {number} - Index of the character after this scalar
     */
    value: function parse(context, start) {
      this.context = context;
      var src = context.src;
      var offset = QuoteSingle.endOfQuote(src, start + 1);
      this.valueRange = new _Range.default(start, offset);
      offset = _Node2.default.endOfWhiteSpace(src, offset);
      offset = this.parseComment(offset);
      return offset;
    }
  }, {
    key: "strValue",

    /**
     * @returns {string | { str: string, errors: YAMLSyntaxError[] }}
     */
    get: function get() {
      if (!this.valueRange || !this.context) return null;
      var errors = [];
      var _this$valueRange = this.valueRange,
          start = _this$valueRange.start,
          end = _this$valueRange.end;
      var _this$context = this.context,
          indent = _this$context.indent,
          src = _this$context.src;
      if (src[end - 1] !== "'") errors.push(new _errors.YAMLSyntaxError(this, "Missing closing 'quote"));
      var str = '';

      for (var i = start + 1; i < end - 1; ++i) {
        var ch = src[i];

        if (ch === '\n') {
          if (_Node2.default.atDocumentBoundary(src, i + 1)) errors.push(new _errors.YAMLSemanticError(this, 'Document boundary indicators are not allowed within string values'));

          var _Node$foldNewline = _Node2.default.foldNewline(src, i, indent),
              fold = _Node$foldNewline.fold,
              offset = _Node$foldNewline.offset,
              error = _Node$foldNewline.error;

          str += fold;
          i = offset;
          if (error) errors.push(new _errors.YAMLSemanticError(this, 'Multi-line single-quoted string needs to be sufficiently indented'));
        } else if (ch === "'") {
          str += ch;
          i += 1;
          if (src[i] !== "'") errors.push(new _errors.YAMLSyntaxError(this, 'Unescaped single quote? This should not happen.'));
        } else if (ch === ' ' || ch === '\t') {
          // trim trailing whitespace
          var wsStart = i;
          var next = src[i + 1];

          while (next === ' ' || next === '\t') {
            i += 1;
            next = src[i + 1];
          }

          if (next !== '\n') str += i > wsStart ? src.slice(wsStart, i + 1) : ch;
        } else {
          str += ch;
        }
      }

      return errors.length > 0 ? {
        errors: errors,
        str: str
      } : str;
    }
  }], [{
    key: "endOfQuote",
    value: function endOfQuote(src, offset) {
      var ch = src[offset];

      while (ch) {
        if (ch === "'") {
          if (src[offset + 1] !== "'") break;
          ch = src[offset += 2];
        } else {
          ch = src[offset += 1];
        }
      }

      return offset + 1;
    }
  }]);
  return QuoteSingle;
}(_Node2.default);

exports.default = QuoteSingle;

/***/ }),

/***/ "./node_modules/yaml/browser/dist/cst/Range.js":
/*!*****************************************************!*\
  !*** ./node_modules/yaml/browser/dist/cst/Range.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var Range =
/*#__PURE__*/
function () {
  (0, _createClass2.default)(Range, null, [{
    key: "copy",
    value: function copy(orig) {
      return new Range(orig.start, orig.end);
    }
  }]);

  function Range(start, end) {
    (0, _classCallCheck2.default)(this, Range);
    this.start = start;
    this.end = end || start;
  }

  (0, _createClass2.default)(Range, [{
    key: "isEmpty",
    value: function isEmpty() {
      return typeof this.start !== 'number' || !this.end || this.end <= this.start;
    }
    /**
     * Set `origStart` and `origEnd` to point to the original source range for
     * this node, which may differ due to dropped CR characters.
     *
     * @param {number[]} cr - Positions of dropped CR characters
     * @param {number} offset - Starting index of `cr` from the last call
     * @returns {number} - The next offset, matching the one found for `origStart`
     */

  }, {
    key: "setOrigRange",
    value: function setOrigRange(cr, offset) {
      var start = this.start,
          end = this.end;

      if (cr.length === 0 || end <= cr[0]) {
        this.origStart = start;
        this.origEnd = end;
        return offset;
      }

      var i = offset;

      while (i < cr.length) {
        if (cr[i] > start) break;else ++i;
      }

      this.origStart = start + i;
      var nextOffset = i;

      while (i < cr.length) {
        // if end was at \n, it should now be at \r
        if (cr[i] >= end) break;else ++i;
      }

      this.origEnd = end + i;
      return nextOffset;
    }
  }]);
  return Range;
}();

exports.default = Range;

/***/ }),

/***/ "./node_modules/yaml/browser/dist/cst/parse.js":
/*!*****************************************************!*\
  !*** ./node_modules/yaml/browser/dist/cst/parse.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = parse;

var _Document = _interopRequireDefault(__webpack_require__(/*! ./Document */ "./node_modules/yaml/browser/dist/cst/Document.js"));

var _ParseContext = _interopRequireDefault(__webpack_require__(/*! ./ParseContext */ "./node_modules/yaml/browser/dist/cst/ParseContext.js"));

// Published as 'yaml/parse-cst'
function parse(src) {
  var cr = [];

  if (src.indexOf('\r') !== -1) {
    src = src.replace(/\r\n?/g, function (match, offset) {
      if (match.length > 1) cr.push(offset);
      return '\n';
    });
  }

  var documents = [];
  var offset = 0;

  do {
    var doc = new _Document.default();
    var context = new _ParseContext.default({
      src: src
    });
    offset = doc.parse(context, offset);
    documents.push(doc);
  } while (offset < src.length);

  documents.setOrigRanges = function () {
    if (cr.length === 0) return false;

    for (var i = 1; i < cr.length; ++i) {
      cr[i] -= i;
    }

    var crOffset = 0;

    for (var _i = 0; _i < documents.length; ++_i) {
      crOffset = documents[_i].setOrigRanges(cr, crOffset);
    }

    cr.splice(0, cr.length);
    return true;
  };

  documents.toString = function () {
    return documents.join('...\n');
  };

  return documents;
}

/***/ }),

/***/ "./node_modules/yaml/browser/dist/cst/source-utils.js":
/*!************************************************************!*\
  !*** ./node_modules/yaml/browser/dist/cst/source-utils.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getLinePos = getLinePos;
exports.getLine = getLine;
exports.getPrettyContext = getPrettyContext;

function findLineStarts(src) {
  var ls = [0];
  var offset = src.indexOf('\n');

  while (offset !== -1) {
    offset += 1;
    ls.push(offset);
    offset = src.indexOf('\n', offset);
  }

  return ls;
}

function getSrcInfo(cst) {
  var lineStarts, src;

  if (typeof cst === 'string') {
    lineStarts = findLineStarts(cst);
    src = cst;
  } else {
    if (Array.isArray(cst)) cst = cst[0];

    if (cst && cst.context) {
      if (!cst.lineStarts) cst.lineStarts = findLineStarts(cst.context.src);
      lineStarts = cst.lineStarts;
      src = cst.context.src;
    }
  }

  return {
    lineStarts: lineStarts,
    src: src
  };
}
/**
 * @typedef {Object} LinePos - One-indexed position in the source
 * @property {number} line
 * @property {number} col
 */

/**
 * Determine the line/col position matching a character offset.
 *
 * Accepts a source string or a CST document as the second parameter. With
 * the latter, starting indices for lines are cached in the document as
 * `lineStarts: number[]`.
 *
 * Returns a one-indexed `{ line, col }` location if found, or
 * `undefined` otherwise.
 *
 * @param {number} offset
 * @param {string|Document|Document[]} cst
 * @returns {?LinePos}
 */


function getLinePos(offset, cst) {
  if (typeof offset !== 'number' || offset < 0) return null;

  var _getSrcInfo = getSrcInfo(cst),
      lineStarts = _getSrcInfo.lineStarts,
      src = _getSrcInfo.src;

  if (!lineStarts || !src || offset > src.length) return null;

  for (var i = 0; i < lineStarts.length; ++i) {
    var start = lineStarts[i];

    if (offset < start) {
      return {
        line: i,
        col: offset - lineStarts[i - 1] + 1
      };
    }

    if (offset === start) return {
      line: i + 1,
      col: 1
    };
  }

  var line = lineStarts.length;
  return {
    line: line,
    col: offset - lineStarts[line - 1] + 1
  };
}
/**
 * Get a specified line from the source.
 *
 * Accepts a source string or a CST document as the second parameter. With
 * the latter, starting indices for lines are cached in the document as
 * `lineStarts: number[]`.
 *
 * Returns the line as a string if found, or `null` otherwise.
 *
 * @param {number} line One-indexed line number
 * @param {string|Document|Document[]} cst
 * @returns {?string}
 */


function getLine(line, cst) {
  var _getSrcInfo2 = getSrcInfo(cst),
      lineStarts = _getSrcInfo2.lineStarts,
      src = _getSrcInfo2.src;

  if (!lineStarts || !(line >= 1) || line > lineStarts.length) return null;
  var start = lineStarts[line - 1];
  var end = lineStarts[line]; // undefined for last line; that's ok for slice()

  while (end && end > start && src[end - 1] === '\n') {
    --end;
  }

  return src.slice(start, end);
}
/**
 * Pretty-print the starting line from the source indicated by the range `pos`
 *
 * Trims output to `maxWidth` chars while keeping the starting column visible,
 * using `…` at either end to indicate dropped characters.
 *
 * Returns a two-line string (or `null`) with `\n` as separator; the second line
 * will hold appropriately indented `^` marks indicating the column range.
 *
 * @param {Object} pos
 * @param {LinePos} pos.start
 * @param {LinePos} [pos.end]
 * @param {string|Document|Document[]*} cst
 * @param {number} [maxWidth=80]
 * @returns {?string}
 */


function getPrettyContext(_ref, cst) {
  var start = _ref.start,
      end = _ref.end;
  var maxWidth = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 80;
  var src = getLine(start.line, cst);
  if (!src) return null;
  var col = start.col;

  if (src.length > maxWidth) {
    if (col <= maxWidth - 10) {
      src = src.substr(0, maxWidth - 1) + '…';
    } else {
      var halfWidth = Math.round(maxWidth / 2);
      if (src.length > col + halfWidth) src = src.substr(0, col + halfWidth - 1) + '…';
      col -= src.length - maxWidth;
      src = '…' + src.substr(1 - maxWidth);
    }
  }

  var errLen = 1;
  var errEnd = '';

  if (end) {
    if (end.line === start.line && col + (end.col - start.col) <= maxWidth + 1) {
      errLen = end.col - start.col;
    } else {
      errLen = Math.min(src.length + 1, maxWidth) - col;
      errEnd = '…';
    }
  }

  var offset = col > 1 ? ' '.repeat(col - 1) : '';
  var err = '^'.repeat(errLen);
  return "".concat(src, "\n").concat(offset).concat(err).concat(errEnd);
}

/***/ }),

/***/ "./node_modules/yaml/browser/dist/errors.js":
/*!**************************************************!*\
  !*** ./node_modules/yaml/browser/dist/errors.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.YAMLWarning = exports.YAMLSyntaxError = exports.YAMLSemanticError = exports.YAMLReferenceError = exports.YAMLError = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));

var _wrapNativeSuper2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/wrapNativeSuper */ "./node_modules/@babel/runtime/helpers/wrapNativeSuper.js"));

var _Node = _interopRequireDefault(__webpack_require__(/*! ./cst/Node */ "./node_modules/yaml/browser/dist/cst/Node.js"));

var _sourceUtils = __webpack_require__(/*! ./cst/source-utils */ "./node_modules/yaml/browser/dist/cst/source-utils.js");

var _Range = _interopRequireDefault(__webpack_require__(/*! ./cst/Range */ "./node_modules/yaml/browser/dist/cst/Range.js"));

var YAMLError =
/*#__PURE__*/
function (_Error) {
  (0, _inherits2.default)(YAMLError, _Error);

  function YAMLError(name, source, message) {
    var _this;

    (0, _classCallCheck2.default)(this, YAMLError);
    if (!message || !(source instanceof _Node.default)) throw new Error("Invalid arguments for new ".concat(name));
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(YAMLError).call(this));
    _this.name = name;
    _this.message = message;
    _this.source = source;
    return _this;
  }

  (0, _createClass2.default)(YAMLError, [{
    key: "makePretty",
    value: function makePretty() {
      if (!this.source) return;
      this.nodeType = this.source.type;
      var cst = this.source.context && this.source.context.root;

      if (typeof this.offset === 'number') {
        this.range = new _Range.default(this.offset, this.offset + 1);
        var start = cst && (0, _sourceUtils.getLinePos)(this.offset, cst);

        if (start) {
          var end = {
            line: start.line,
            col: start.col + 1
          };
          this.linePos = {
            start: start,
            end: end
          };
        }

        delete this.offset;
      } else {
        this.range = this.source.range;
        this.linePos = this.source.rangeAsLinePos;
      }

      if (this.linePos) {
        var _this$linePos$start = this.linePos.start,
            line = _this$linePos$start.line,
            col = _this$linePos$start.col;
        this.message += " at line ".concat(line, ", column ").concat(col);
        var ctx = cst && (0, _sourceUtils.getPrettyContext)(this.linePos, cst);
        if (ctx) this.message += ":\n\n".concat(ctx, "\n");
      }

      delete this.source;
    }
  }]);
  return YAMLError;
}((0, _wrapNativeSuper2.default)(Error));

exports.YAMLError = YAMLError;

var YAMLReferenceError =
/*#__PURE__*/
function (_YAMLError) {
  (0, _inherits2.default)(YAMLReferenceError, _YAMLError);

  function YAMLReferenceError(source, message) {
    (0, _classCallCheck2.default)(this, YAMLReferenceError);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(YAMLReferenceError).call(this, 'YAMLReferenceError', source, message));
  }

  return YAMLReferenceError;
}(YAMLError);

exports.YAMLReferenceError = YAMLReferenceError;

var YAMLSemanticError =
/*#__PURE__*/
function (_YAMLError2) {
  (0, _inherits2.default)(YAMLSemanticError, _YAMLError2);

  function YAMLSemanticError(source, message) {
    (0, _classCallCheck2.default)(this, YAMLSemanticError);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(YAMLSemanticError).call(this, 'YAMLSemanticError', source, message));
  }

  return YAMLSemanticError;
}(YAMLError);

exports.YAMLSemanticError = YAMLSemanticError;

var YAMLSyntaxError =
/*#__PURE__*/
function (_YAMLError3) {
  (0, _inherits2.default)(YAMLSyntaxError, _YAMLError3);

  function YAMLSyntaxError(source, message) {
    (0, _classCallCheck2.default)(this, YAMLSyntaxError);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(YAMLSyntaxError).call(this, 'YAMLSyntaxError', source, message));
  }

  return YAMLSyntaxError;
}(YAMLError);

exports.YAMLSyntaxError = YAMLSyntaxError;

var YAMLWarning =
/*#__PURE__*/
function (_YAMLError4) {
  (0, _inherits2.default)(YAMLWarning, _YAMLError4);

  function YAMLWarning(source, message) {
    (0, _classCallCheck2.default)(this, YAMLWarning);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(YAMLWarning).call(this, 'YAMLWarning', source, message));
  }

  return YAMLWarning;
}(YAMLError);

exports.YAMLWarning = YAMLWarning;

/***/ }),

/***/ "./node_modules/yaml/browser/dist/foldFlowLines.js":
/*!*********************************************************!*\
  !*** ./node_modules/yaml/browser/dist/foldFlowLines.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = foldFlowLines;
exports.FOLD_QUOTED = exports.FOLD_BLOCK = exports.FOLD_FLOW = void 0;
var FOLD_FLOW = 'flow';
exports.FOLD_FLOW = FOLD_FLOW;
var FOLD_BLOCK = 'block';
exports.FOLD_BLOCK = FOLD_BLOCK;
var FOLD_QUOTED = 'quoted'; // presumes i+1 is at the start of a line
// returns index of last newline in more-indented block

exports.FOLD_QUOTED = FOLD_QUOTED;

var consumeMoreIndentedLines = function consumeMoreIndentedLines(text, i) {
  var ch = text[i + 1];

  while (ch === ' ' || ch === '\t') {
    do {
      ch = text[i += 1];
    } while (ch && ch !== '\n');

    ch = text[i + 1];
  }

  return i;
};
/**
 * Tries to keep input at up to `lineWidth` characters, splitting only on spaces
 * not followed by newlines or spaces unless `mode` is `'quoted'`. Lines are
 * terminated with `\n` and started with `indent`.
 *
 * @param {string} text
 * @param {string} indent
 * @param {string} [mode='flow'] `'block'` prevents more-indented lines
 *   from being folded; `'quoted'` allows for `\` escapes, including escaped
 *   newlines
 * @param {Object} options
 * @param {number} [options.indentAtStart] Accounts for leading contents on
 *   the first line, defaulting to `indent.length`
 * @param {number} [options.lineWidth=80]
 * @param {number} [options.minContentWidth=20] Allow highly indented lines to
 *   stretch the line width
 * @param {function} options.onFold Called once if the text is folded
 * @param {function} options.onFold Called once if any line of text exceeds
 *   lineWidth characters
 */


function foldFlowLines(text, indent, mode, _ref) {
  var indentAtStart = _ref.indentAtStart,
      _ref$lineWidth = _ref.lineWidth,
      lineWidth = _ref$lineWidth === void 0 ? 80 : _ref$lineWidth,
      _ref$minContentWidth = _ref.minContentWidth,
      minContentWidth = _ref$minContentWidth === void 0 ? 20 : _ref$minContentWidth,
      onFold = _ref.onFold,
      onOverflow = _ref.onOverflow;
  if (!lineWidth || lineWidth < 0) return text;
  var endStep = Math.max(1 + minContentWidth, 1 + lineWidth - indent.length);
  if (text.length <= endStep) return text;
  var folds = [];
  var escapedFolds = {};
  var end = lineWidth - (typeof indentAtStart === 'number' ? indentAtStart : indent.length);
  var split = undefined;
  var prev = undefined;
  var overflow = false;
  var i = -1;

  if (mode === FOLD_BLOCK) {
    i = consumeMoreIndentedLines(text, i);
    if (i !== -1) end = i + endStep;
  }

  for (var ch; ch = text[i += 1];) {
    if (mode === FOLD_QUOTED && ch === '\\') {
      switch (text[i + 1]) {
        case 'x':
          i += 3;
          break;

        case 'u':
          i += 5;
          break;

        case 'U':
          i += 9;
          break;

        default:
          i += 1;
      }
    }

    if (ch === '\n') {
      if (mode === FOLD_BLOCK) i = consumeMoreIndentedLines(text, i);
      end = i + endStep;
      split = undefined;
    } else {
      if (ch === ' ' && prev && prev !== ' ' && prev !== '\n' && prev !== '\t') {
        // space surrounded by non-space can be replaced with newline + indent
        var next = text[i + 1];
        if (next && next !== ' ' && next !== '\n' && next !== '\t') split = i;
      }

      if (i >= end) {
        if (split) {
          folds.push(split);
          end = split + endStep;
          split = undefined;
        } else if (mode === FOLD_QUOTED) {
          // white-space collected at end may stretch past lineWidth
          while (prev === ' ' || prev === '\t') {
            prev = ch;
            ch = text[i += 1];
            overflow = true;
          } // i - 2 accounts for not-dropped last char + newline-escaping \


          folds.push(i - 2);
          escapedFolds[i - 2] = true;
          end = i - 2 + endStep;
          split = undefined;
        } else {
          overflow = true;
        }
      }
    }

    prev = ch;
  }

  if (overflow && onOverflow) onOverflow();
  if (folds.length === 0) return text;
  if (onFold) onFold();
  var res = text.slice(0, folds[0]);

  for (var _i = 0; _i < folds.length; ++_i) {
    var fold = folds[_i];

    var _end = folds[_i + 1] || text.length;

    if (mode === FOLD_QUOTED && escapedFolds[fold]) res += "".concat(text[fold], "\\");
    res += "\n".concat(indent).concat(text.slice(fold + 1, _end));
  }

  return res;
}

/***/ }),

/***/ "./node_modules/yaml/browser/dist/index.js":
/*!*************************************************!*\
  !*** ./node_modules/yaml/browser/dist/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));

var _parse = _interopRequireDefault(__webpack_require__(/*! ./cst/parse */ "./node_modules/yaml/browser/dist/cst/parse.js"));

var _Document = _interopRequireDefault(__webpack_require__(/*! ./Document */ "./node_modules/yaml/browser/dist/Document.js"));

var _errors = __webpack_require__(/*! ./errors */ "./node_modules/yaml/browser/dist/errors.js");

var _schema = _interopRequireDefault(__webpack_require__(/*! ./schema */ "./node_modules/yaml/browser/dist/schema/index.js"));

var _warnings = __webpack_require__(/*! ./warnings */ "./node_modules/yaml/browser/dist/warnings.js");

var defaultOptions = {
  anchorPrefix: 'a',
  customTags: null,
  keepCstNodes: false,
  keepNodeTypes: true,
  keepBlobsInJSON: true,
  mapAsMap: false,
  maxAliasCount: 100,
  prettyErrors: false,
  // TODO Set true in v2
  simpleKeys: false,
  version: '1.2'
};

function createNode(value) {
  var wrapScalars = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var tag = arguments.length > 2 ? arguments[2] : undefined;

  if (tag === undefined && typeof wrapScalars === 'string') {
    tag = wrapScalars;
    wrapScalars = true;
  }

  var options = Object.assign({}, _Document.default.defaults[defaultOptions.version], defaultOptions);
  var schema = new _schema.default(options);
  return schema.createNode(value, wrapScalars, tag);
}

var Document =
/*#__PURE__*/
function (_YAMLDocument) {
  (0, _inherits2.default)(Document, _YAMLDocument);

  function Document(options) {
    (0, _classCallCheck2.default)(this, Document);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Document).call(this, Object.assign({}, defaultOptions, options)));
  }

  return Document;
}(_Document.default);

function parseAllDocuments(src, options) {
  var stream = [];
  var prev;
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = (0, _parse.default)(src)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var cstDoc = _step.value;
      var doc = new Document(options);
      doc.parse(cstDoc, prev);
      stream.push(doc);
      prev = doc;
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return != null) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return stream;
}

function parseDocument(src, options) {
  var cst = (0, _parse.default)(src);
  var doc = new Document(options).parse(cst[0]);

  if (cst.length > 1) {
    var errMsg = 'Source contains multiple documents; please use YAML.parseAllDocuments()';
    doc.errors.unshift(new _errors.YAMLSemanticError(cst[1], errMsg));
  }

  return doc;
}

function parse(src, options) {
  var doc = parseDocument(src, options);
  doc.warnings.forEach(function (warning) {
    return (0, _warnings.warn)(warning);
  });
  if (doc.errors.length > 0) throw doc.errors[0];
  return doc.toJSON();
}

function stringify(value, options) {
  var doc = new Document(options);
  doc.contents = value;
  return String(doc);
}

var _default = {
  createNode: createNode,
  defaultOptions: defaultOptions,
  Document: Document,
  parse: parse,
  parseAllDocuments: parseAllDocuments,
  parseCST: _parse.default,
  parseDocument: parseDocument,
  stringify: stringify
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/yaml/browser/dist/listTagNames.js":
/*!********************************************************!*\
  !*** ./node_modules/yaml/browser/dist/listTagNames.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js"));

var _Collection = _interopRequireDefault(__webpack_require__(/*! ./schema/Collection */ "./node_modules/yaml/browser/dist/schema/Collection.js"));

var _Pair = _interopRequireDefault(__webpack_require__(/*! ./schema/Pair */ "./node_modules/yaml/browser/dist/schema/Pair.js"));

var _Scalar = _interopRequireDefault(__webpack_require__(/*! ./schema/Scalar */ "./node_modules/yaml/browser/dist/schema/Scalar.js"));

var visit = function visit(node, tags) {
  if (node && (0, _typeof2.default)(node) === 'object') {
    var tag = node.tag;

    if (node instanceof _Collection.default) {
      if (tag) tags[tag] = true;
      node.items.forEach(function (n) {
        return visit(n, tags);
      });
    } else if (node instanceof _Pair.default) {
      visit(node.key, tags);
      visit(node.value, tags);
    } else if (node instanceof _Scalar.default) {
      if (tag) tags[tag] = true;
    }
  }

  return tags;
};

var _default = function _default(node) {
  return Object.keys(visit(node, {}));
};

exports.default = _default;

/***/ }),

/***/ "./node_modules/yaml/browser/dist/schema/Alias.js":
/*!********************************************************!*\
  !*** ./node_modules/yaml/browser/dist/schema/Alias.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _constants = __webpack_require__(/*! ../constants */ "./node_modules/yaml/browser/dist/constants.js");

var _errors = __webpack_require__(/*! ../errors */ "./node_modules/yaml/browser/dist/errors.js");

var _toJSON2 = _interopRequireDefault(__webpack_require__(/*! ../toJSON */ "./node_modules/yaml/browser/dist/toJSON.js"));

var _Collection = _interopRequireDefault(__webpack_require__(/*! ./Collection */ "./node_modules/yaml/browser/dist/schema/Collection.js"));

var _Node2 = _interopRequireDefault(__webpack_require__(/*! ./Node */ "./node_modules/yaml/browser/dist/schema/Node.js"));

var _Pair = _interopRequireDefault(__webpack_require__(/*! ./Pair */ "./node_modules/yaml/browser/dist/schema/Pair.js"));

var getAliasCount = function getAliasCount(node, anchors) {
  if (node instanceof Alias) {
    var anchor = anchors.find(function (a) {
      return a.node === node.source;
    });
    return anchor.count * anchor.aliasCount;
  } else if (node instanceof _Collection.default) {
    var count = 0;
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = node.items[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var item = _step.value;
        var c = getAliasCount(item, anchors);
        if (c > count) count = c;
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return != null) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    return count;
  } else if (node instanceof _Pair.default) {
    var kc = getAliasCount(node.key, anchors);
    var vc = getAliasCount(node.value, anchors);
    return Math.max(kc, vc);
  }

  return 1;
};

var Alias =
/*#__PURE__*/
function (_Node) {
  (0, _inherits2.default)(Alias, _Node);
  (0, _createClass2.default)(Alias, null, [{
    key: "stringify",
    value: function stringify(_ref, _ref2) {
      var range = _ref.range,
          source = _ref.source;
      var anchors = _ref2.anchors,
          doc = _ref2.doc,
          implicitKey = _ref2.implicitKey,
          inStringifyKey = _ref2.inStringifyKey;
      var anchor = Object.keys(anchors).find(function (a) {
        return anchors[a] === source;
      });
      if (!anchor && inStringifyKey) anchor = doc.anchors.getName(source) || doc.anchors.newName();
      if (anchor) return "*".concat(anchor).concat(implicitKey ? ' ' : '');
      var msg = doc.anchors.getName(source) ? 'Alias node must be after source node' : 'Source node not found for alias node';
      throw new Error("".concat(msg, " [").concat(range, "]"));
    }
  }]);

  function Alias(source) {
    var _this;

    (0, _classCallCheck2.default)(this, Alias);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Alias).call(this));
    _this.source = source;
    _this.type = _constants.Type.ALIAS;
    return _this;
  }

  (0, _createClass2.default)(Alias, [{
    key: "toJSON",
    value: function toJSON(arg, ctx) {
      var _this2 = this;

      if (!ctx) return (0, _toJSON2.default)(this.source, arg, ctx);
      var anchors = ctx.anchors,
          maxAliasCount = ctx.maxAliasCount;
      var anchor = anchors.find(function (a) {
        return a.node === _this2.source;
      });

      if (!anchor || anchor.res === undefined) {
        var msg = 'This should not happen: Alias anchor was not resolved?';
        if (this.cstNode) throw new _errors.YAMLReferenceError(this.cstNode, msg);else throw new ReferenceError(msg);
      }

      if (maxAliasCount >= 0) {
        anchor.count += 1;
        if (anchor.aliasCount === 0) anchor.aliasCount = getAliasCount(this.source, anchors);

        if (anchor.count * anchor.aliasCount > maxAliasCount) {
          var _msg = 'Excessive alias count indicates a resource exhaustion attack';
          if (this.cstNode) throw new _errors.YAMLReferenceError(this.cstNode, _msg);else throw new ReferenceError(_msg);
        }
      }

      return anchor.res;
    } // Only called when stringifying an alias mapping key while constructing
    // Object output.

  }, {
    key: "toString",
    value: function toString(ctx) {
      return Alias.stringify(this, ctx);
    }
  }, {
    key: "tag",
    set: function set(t) {
      throw new Error('Alias nodes cannot have tags');
    }
  }]);
  return Alias;
}(_Node2.default);

exports.default = Alias;
(0, _defineProperty2.default)(Alias, "default", true);

/***/ }),

/***/ "./node_modules/yaml/browser/dist/schema/Collection.js":
/*!*************************************************************!*\
  !*** ./node_modules/yaml/browser/dist/schema/Collection.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.isEmptyPath = void 0;

var _toArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/toArray */ "./node_modules/@babel/runtime/helpers/toArray.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf3 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js"));

var _addComment = _interopRequireDefault(__webpack_require__(/*! ../addComment */ "./node_modules/yaml/browser/dist/addComment.js"));

var _Node2 = _interopRequireDefault(__webpack_require__(/*! ./Node */ "./node_modules/yaml/browser/dist/schema/Node.js"));

var _Pair = _interopRequireDefault(__webpack_require__(/*! ./Pair */ "./node_modules/yaml/browser/dist/schema/Pair.js"));

var _Scalar = _interopRequireDefault(__webpack_require__(/*! ./Scalar */ "./node_modules/yaml/browser/dist/schema/Scalar.js"));

// null, undefined, or an empty non-string iterable (e.g. [])
var isEmptyPath = function isEmptyPath(path) {
  return path == null || (0, _typeof2.default)(path) === 'object' && path[Symbol.iterator]().next().done;
};

exports.isEmptyPath = isEmptyPath;

var Collection =
/*#__PURE__*/
function (_Node) {
  (0, _inherits2.default)(Collection, _Node);

  function Collection() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, Collection);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(Collection)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "items", []);
    return _this;
  }

  (0, _createClass2.default)(Collection, [{
    key: "addIn",
    value: function addIn(path, value) {
      if (isEmptyPath(path)) this.add(value);else {
        var _path = (0, _toArray2.default)(path),
            key = _path[0],
            rest = _path.slice(1);

        var node = this.get(key, true);
        if (node instanceof Collection) node.addIn(rest, value);else throw new Error("Expected YAML collection at ".concat(key, ". Remaining path: ").concat(rest));
      }
    }
  }, {
    key: "deleteIn",
    value: function deleteIn(_ref) {
      var _ref2 = (0, _toArray2.default)(_ref),
          key = _ref2[0],
          rest = _ref2.slice(1);

      if (rest.length === 0) return this.delete(key);
      var node = this.get(key, true);
      if (node instanceof Collection) return node.deleteIn(rest);else throw new Error("Expected YAML collection at ".concat(key, ". Remaining path: ").concat(rest));
    }
  }, {
    key: "getIn",
    value: function getIn(_ref3, keepScalar) {
      var _ref4 = (0, _toArray2.default)(_ref3),
          key = _ref4[0],
          rest = _ref4.slice(1);

      var node = this.get(key, true);
      if (rest.length === 0) return !keepScalar && node instanceof _Scalar.default ? node.value : node;else return node instanceof Collection ? node.getIn(rest, keepScalar) : undefined;
    }
  }, {
    key: "hasAllNullValues",
    value: function hasAllNullValues() {
      return this.items.every(function (node) {
        if (!(node instanceof _Pair.default)) return false;
        var n = node.value;
        return n == null || n instanceof _Scalar.default && n.value == null && !n.commentBefore && !n.comment && !n.tag;
      });
    }
  }, {
    key: "hasIn",
    value: function hasIn(_ref5) {
      var _ref6 = (0, _toArray2.default)(_ref5),
          key = _ref6[0],
          rest = _ref6.slice(1);

      if (rest.length === 0) return this.has(key);
      var node = this.get(key, true);
      return node instanceof Collection ? node.hasIn(rest) : false;
    }
  }, {
    key: "setIn",
    value: function setIn(_ref7, value) {
      var _ref8 = (0, _toArray2.default)(_ref7),
          key = _ref8[0],
          rest = _ref8.slice(1);

      if (rest.length === 0) {
        this.set(key, value);
      } else {
        var node = this.get(key, true);
        if (node instanceof Collection) node.setIn(rest, value);else throw new Error("Expected YAML collection at ".concat(key, ". Remaining path: ").concat(rest));
      }
    } // overridden in implementations

  }, {
    key: "toJSON",
    value: function toJSON() {
      return null;
    }
  }, {
    key: "toString",
    value: function toString(ctx, _ref9, onComment, onChompKeep) {
      var _this2 = this;

      var blockItem = _ref9.blockItem,
          flowChars = _ref9.flowChars,
          isMap = _ref9.isMap,
          itemIndent = _ref9.itemIndent;
      var _ctx = ctx,
          doc = _ctx.doc,
          indent = _ctx.indent;
      var inFlow = this.type && this.type.substr(0, 4) === 'FLOW' || ctx.inFlow;
      if (inFlow) itemIndent += '  ';
      var allNullValues = isMap && this.hasAllNullValues();
      ctx = Object.assign({}, ctx, {
        allNullValues: allNullValues,
        indent: itemIndent,
        inFlow: inFlow,
        type: null
      });
      var chompKeep = false;
      var hasItemWithNewLine = false;
      var nodes = this.items.reduce(function (nodes, item, i) {
        var comment;

        if (item) {
          if (!chompKeep && item.spaceBefore) nodes.push({
            type: 'comment',
            str: ''
          });
          if (item.commentBefore) item.commentBefore.match(/^.*$/gm).forEach(function (line) {
            nodes.push({
              type: 'comment',
              str: "#".concat(line)
            });
          });
          if (item.comment) comment = item.comment;
          if (inFlow && (!chompKeep && item.spaceBefore || item.commentBefore || item.comment || item.key && (item.key.commentBefore || item.key.comment) || item.value && (item.value.commentBefore || item.value.comment))) hasItemWithNewLine = true;
        }

        chompKeep = false;
        var str = doc.schema.stringify(item, ctx, function () {
          return comment = null;
        }, function () {
          return chompKeep = true;
        });
        if (inFlow && !hasItemWithNewLine && str.includes('\n')) hasItemWithNewLine = true;
        if (inFlow && i < _this2.items.length - 1) str += ',';
        str = (0, _addComment.default)(str, itemIndent, comment);
        if (chompKeep && (comment || inFlow)) chompKeep = false;
        nodes.push({
          type: 'item',
          str: str
        });
        return nodes;
      }, []);
      var str;

      if (nodes.length === 0) {
        str = flowChars.start + flowChars.end;
      } else if (inFlow) {
        var start = flowChars.start,
            end = flowChars.end;
        var strings = nodes.map(function (n) {
          return n.str;
        });

        if (hasItemWithNewLine || strings.reduce(function (sum, str) {
          return sum + str.length + 2;
        }, 2) > Collection.maxFlowStringSingleLineLength) {
          str = start;
          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            for (var _iterator = strings[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              var s = _step.value;
              str += s ? "\n  ".concat(indent).concat(s) : '\n';
            }
          } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
              }
            } finally {
              if (_didIteratorError) {
                throw _iteratorError;
              }
            }
          }

          str += "\n".concat(indent).concat(end);
        } else {
          str = "".concat(start, " ").concat(strings.join(' '), " ").concat(end);
        }
      } else {
        var _strings = nodes.map(blockItem);

        str = _strings.shift();
        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
          for (var _iterator2 = _strings[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var _s = _step2.value;
            str += _s ? "\n".concat(indent).concat(_s) : '\n';
          }
        } catch (err) {
          _didIteratorError2 = true;
          _iteratorError2 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
              _iterator2.return();
            }
          } finally {
            if (_didIteratorError2) {
              throw _iteratorError2;
            }
          }
        }
      }

      if (this.comment) {
        str += '\n' + this.comment.replace(/^/gm, "".concat(indent, "#"));
        if (onComment) onComment();
      } else if (chompKeep && onChompKeep) onChompKeep();

      return str;
    }
  }]);
  return Collection;
}(_Node2.default);

exports.default = Collection;
(0, _defineProperty2.default)(Collection, "maxFlowStringSingleLineLength", 60);

/***/ }),

/***/ "./node_modules/yaml/browser/dist/schema/Map.js":
/*!******************************************************!*\
  !*** ./node_modules/yaml/browser/dist/schema/Map.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.findPair = findPair;
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));

var _get2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/get */ "./node_modules/@babel/runtime/helpers/get.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));

var _Collection2 = _interopRequireDefault(__webpack_require__(/*! ./Collection */ "./node_modules/yaml/browser/dist/schema/Collection.js"));

var _Pair = _interopRequireDefault(__webpack_require__(/*! ./Pair */ "./node_modules/yaml/browser/dist/schema/Pair.js"));

var _Scalar = _interopRequireDefault(__webpack_require__(/*! ./Scalar */ "./node_modules/yaml/browser/dist/schema/Scalar.js"));

function findPair(items, key) {
  var k = key instanceof _Scalar.default ? key.value : key;
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = items[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var it = _step.value;

      if (it instanceof _Pair.default) {
        if (it.key === key || it.key === k) return it;
        if (it.key && it.key.value === k) return it;
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return != null) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return undefined;
}

var YAMLMap =
/*#__PURE__*/
function (_Collection) {
  (0, _inherits2.default)(YAMLMap, _Collection);

  function YAMLMap() {
    (0, _classCallCheck2.default)(this, YAMLMap);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(YAMLMap).apply(this, arguments));
  }

  (0, _createClass2.default)(YAMLMap, [{
    key: "add",
    value: function add(pair) {
      if (!pair) pair = new _Pair.default(pair);else if (!(pair instanceof _Pair.default)) pair = new _Pair.default(pair.key || pair, pair.value);
      var prev = findPair(this.items, pair.key);
      if (prev) throw new Error("Key ".concat(pair.key, " already set"));
      this.items.push(pair);
    }
  }, {
    key: "delete",
    value: function _delete(key) {
      var it = findPair(this.items, key);
      if (!it) return false;
      var del = this.items.splice(this.items.indexOf(it), 1);
      return del.length > 0;
    }
  }, {
    key: "get",
    value: function get(key, keepScalar) {
      var it = findPair(this.items, key);
      var node = it && it.value;
      return !keepScalar && node instanceof _Scalar.default ? node.value : node;
    }
  }, {
    key: "has",
    value: function has(key) {
      return !!findPair(this.items, key);
    }
  }, {
    key: "set",
    value: function set(key, value) {
      var prev = findPair(this.items, key);
      if (prev) prev.value = value;else this.items.push(new _Pair.default(key, value));
    }
    /**
     * @param {*} arg ignored
     * @param {*} ctx Conversion context, originally set in Document#toJSON()
     * @param {Class} Type If set, forces the returned collection type
     * @returns {*} Instance of Type, Map, or Object
     */

  }, {
    key: "toJSON",
    value: function toJSON(_, ctx, Type) {
      var map = Type ? new Type() : ctx && ctx.mapAsMap ? new Map() : {};
      if (ctx && ctx.onCreate) ctx.onCreate(map);
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = this.items[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var item = _step2.value;
          item.addToJSMap(ctx, map);
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }

      return map;
    }
  }, {
    key: "toString",
    value: function toString(ctx, onComment, onChompKeep) {
      if (!ctx) return JSON.stringify(this);
      var _iteratorNormalCompletion3 = true;
      var _didIteratorError3 = false;
      var _iteratorError3 = undefined;

      try {
        for (var _iterator3 = this.items[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
          var item = _step3.value;
          if (!(item instanceof _Pair.default)) throw new Error("Map items must all be pairs; found ".concat(JSON.stringify(item), " instead"));
        }
      } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
            _iterator3.return();
          }
        } finally {
          if (_didIteratorError3) {
            throw _iteratorError3;
          }
        }
      }

      return (0, _get2.default)((0, _getPrototypeOf2.default)(YAMLMap.prototype), "toString", this).call(this, ctx, {
        blockItem: function blockItem(n) {
          return n.str;
        },
        flowChars: {
          start: '{',
          end: '}'
        },
        isMap: true,
        itemIndent: ctx.indent || ''
      }, onComment, onChompKeep);
    }
  }]);
  return YAMLMap;
}(_Collection2.default);

exports.default = YAMLMap;

/***/ }),

/***/ "./node_modules/yaml/browser/dist/schema/Merge.js":
/*!********************************************************!*\
  !*** ./node_modules/yaml/browser/dist/schema/Merge.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.MERGE_KEY = void 0;

var _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));

var _get2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/get */ "./node_modules/@babel/runtime/helpers/get.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));

var _Map = _interopRequireDefault(__webpack_require__(/*! ./Map */ "./node_modules/yaml/browser/dist/schema/Map.js"));

var _Pair2 = _interopRequireDefault(__webpack_require__(/*! ./Pair */ "./node_modules/yaml/browser/dist/schema/Pair.js"));

var _Scalar = _interopRequireDefault(__webpack_require__(/*! ./Scalar */ "./node_modules/yaml/browser/dist/schema/Scalar.js"));

var _Seq = _interopRequireDefault(__webpack_require__(/*! ./Seq */ "./node_modules/yaml/browser/dist/schema/Seq.js"));

var MERGE_KEY = '<<';
exports.MERGE_KEY = MERGE_KEY;

var Merge =
/*#__PURE__*/
function (_Pair) {
  (0, _inherits2.default)(Merge, _Pair);

  function Merge(pair) {
    var _this;

    (0, _classCallCheck2.default)(this, Merge);

    if (pair instanceof _Pair2.default) {
      var seq = pair.value;

      if (!(seq instanceof _Seq.default)) {
        seq = new _Seq.default();
        seq.items.push(pair.value);
        seq.range = pair.value.range;
      }

      _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Merge).call(this, pair.key, seq));
      _this.range = pair.range;
    } else {
      _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Merge).call(this, new _Scalar.default(MERGE_KEY), new _Seq.default()));
    }

    _this.type = 'MERGE_PAIR';
    return (0, _possibleConstructorReturn2.default)(_this);
  } // If the value associated with a merge key is a single mapping node, each of
  // its key/value pairs is inserted into the current mapping, unless the key
  // already exists in it. If the value associated with the merge key is a
  // sequence, then this sequence is expected to contain mapping nodes and each
  // of these nodes is merged in turn according to its order in the sequence.
  // Keys in mapping nodes earlier in the sequence override keys specified in
  // later mapping nodes. -- http://yaml.org/type/merge.html


  (0, _createClass2.default)(Merge, [{
    key: "addToJSMap",
    value: function addToJSMap(ctx, map) {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this.value.items[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var source = _step.value.source;
          if (!(source instanceof _Map.default)) throw new Error('Merge sources must be maps');
          var srcMap = source.toJSON(null, ctx, Map);
          var _iteratorNormalCompletion2 = true;
          var _didIteratorError2 = false;
          var _iteratorError2 = undefined;

          try {
            for (var _iterator2 = srcMap[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
              var _step2$value = (0, _slicedToArray2.default)(_step2.value, 2),
                  key = _step2$value[0],
                  value = _step2$value[1];

              if (map instanceof Map) {
                if (!map.has(key)) map.set(key, value);
              } else if (map instanceof Set) {
                map.add(key);
              } else {
                if (!Object.prototype.hasOwnProperty.call(map, key)) map[key] = value;
              }
            }
          } catch (err) {
            _didIteratorError2 = true;
            _iteratorError2 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
                _iterator2.return();
              }
            } finally {
              if (_didIteratorError2) {
                throw _iteratorError2;
              }
            }
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return != null) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      return map;
    }
  }, {
    key: "toString",
    value: function toString(ctx, onComment) {
      var seq = this.value;
      if (seq.items.length > 1) return (0, _get2.default)((0, _getPrototypeOf2.default)(Merge.prototype), "toString", this).call(this, ctx, onComment);
      this.value = seq.items[0];
      var str = (0, _get2.default)((0, _getPrototypeOf2.default)(Merge.prototype), "toString", this).call(this, ctx, onComment);
      this.value = seq;
      return str;
    }
  }]);
  return Merge;
}(_Pair2.default);

exports.default = Merge;

/***/ }),

/***/ "./node_modules/yaml/browser/dist/schema/Node.js":
/*!*******************************************************!*\
  !*** ./node_modules/yaml/browser/dist/schema/Node.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var Node = function Node() {
  (0, _classCallCheck2.default)(this, Node);
};

exports.default = Node;

/***/ }),

/***/ "./node_modules/yaml/browser/dist/schema/Pair.js":
/*!*******************************************************!*\
  !*** ./node_modules/yaml/browser/dist/schema/Pair.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));

var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js"));

var _addComment = _interopRequireDefault(__webpack_require__(/*! ../addComment */ "./node_modules/yaml/browser/dist/addComment.js"));

var _constants = __webpack_require__(/*! ../constants */ "./node_modules/yaml/browser/dist/constants.js");

var _toJSON = _interopRequireDefault(__webpack_require__(/*! ../toJSON */ "./node_modules/yaml/browser/dist/toJSON.js"));

var _Collection = _interopRequireDefault(__webpack_require__(/*! ./Collection */ "./node_modules/yaml/browser/dist/schema/Collection.js"));

var _Node2 = _interopRequireDefault(__webpack_require__(/*! ./Node */ "./node_modules/yaml/browser/dist/schema/Node.js"));

var _Scalar = _interopRequireDefault(__webpack_require__(/*! ./Scalar */ "./node_modules/yaml/browser/dist/schema/Scalar.js"));

// Published as 'yaml/pair'
var stringifyKey = function stringifyKey(key, jsKey, ctx) {
  if (jsKey === null) return '';
  if ((0, _typeof2.default)(jsKey) !== 'object') return String(jsKey);
  if (key instanceof _Node2.default && ctx && ctx.doc) return key.toString({
    anchors: {},
    doc: ctx.doc,
    indent: '',
    inFlow: true,
    inStringifyKey: true
  });
  return JSON.stringify(jsKey);
};

var Pair =
/*#__PURE__*/
function (_Node) {
  (0, _inherits2.default)(Pair, _Node);

  function Pair(key) {
    var _this;

    var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    (0, _classCallCheck2.default)(this, Pair);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Pair).call(this));
    _this.key = key;
    _this.value = value;
    _this.type = 'PAIR';
    return _this;
  }

  (0, _createClass2.default)(Pair, [{
    key: "addToJSMap",
    value: function addToJSMap(ctx, map) {
      var key = (0, _toJSON.default)(this.key, '', ctx);

      if (map instanceof Map) {
        var value = (0, _toJSON.default)(this.value, key, ctx);
        map.set(key, value);
      } else if (map instanceof Set) {
        map.add(key);
      } else {
        var stringKey = stringifyKey(this.key, key, ctx);
        map[stringKey] = (0, _toJSON.default)(this.value, stringKey, ctx);
      }

      return map;
    }
  }, {
    key: "toJSON",
    value: function toJSON(_, ctx) {
      var pair = ctx && ctx.mapAsMap ? new Map() : {};
      return this.addToJSMap(ctx, pair);
    }
  }, {
    key: "toString",
    value: function toString(ctx, onComment, onChompKeep) {
      if (!ctx || !ctx.doc) return JSON.stringify(this);
      var simpleKeys = ctx.doc.options.simpleKeys;
      var key = this.key,
          value = this.value;
      var keyComment = key instanceof _Node2.default && key.comment;

      if (simpleKeys) {
        if (keyComment) {
          throw new Error('With simple keys, key nodes cannot have comments');
        }

        if (key instanceof _Collection.default) {
          var msg = 'With simple keys, collection cannot be used as a key value';
          throw new Error(msg);
        }
      }

      var explicitKey = !simpleKeys && (!key || keyComment || key instanceof _Collection.default || key.type === _constants.Type.BLOCK_FOLDED || key.type === _constants.Type.BLOCK_LITERAL);
      var _ctx = ctx,
          doc = _ctx.doc,
          indent = _ctx.indent;
      ctx = Object.assign({}, ctx, {
        implicitKey: !explicitKey,
        indent: indent + '  '
      });
      var chompKeep = false;
      var str = doc.schema.stringify(key, ctx, function () {
        return keyComment = null;
      }, function () {
        return chompKeep = true;
      });
      str = (0, _addComment.default)(str, ctx.indent, keyComment);

      if (ctx.allNullValues && !simpleKeys) {
        if (this.comment) {
          str = (0, _addComment.default)(str, ctx.indent, this.comment);
          if (onComment) onComment();
        } else if (chompKeep && !keyComment && onChompKeep) onChompKeep();

        return ctx.inFlow ? str : "? ".concat(str);
      }

      str = explicitKey ? "? ".concat(str, "\n").concat(indent, ":") : "".concat(str, ":");

      if (this.comment) {
        // expected (but not strictly required) to be a single-line comment
        str = (0, _addComment.default)(str, ctx.indent, this.comment);
        if (onComment) onComment();
      }

      var vcb = '';
      var valueComment = null;

      if (value instanceof _Node2.default) {
        if (value.spaceBefore) vcb = '\n';

        if (value.commentBefore) {
          var cs = value.commentBefore.replace(/^/gm, "".concat(ctx.indent, "#"));
          vcb += "\n".concat(cs);
        }

        valueComment = value.comment;
      } else if (value && (0, _typeof2.default)(value) === 'object') {
        value = doc.schema.createNode(value, true);
      }

      ctx.implicitKey = false;
      chompKeep = false;
      var valueStr = doc.schema.stringify(value, ctx, function () {
        return valueComment = null;
      }, function () {
        return chompKeep = true;
      });
      var ws = ' ';

      if (vcb || this.comment) {
        ws = "".concat(vcb, "\n").concat(ctx.indent);
      } else if (!explicitKey && value instanceof _Collection.default) {
        var flow = valueStr[0] === '[' || valueStr[0] === '{';
        if (!flow || valueStr.includes('\n')) ws = "\n".concat(ctx.indent);
      }

      if (chompKeep && !valueComment && onChompKeep) onChompKeep();
      return (0, _addComment.default)(str + ws + valueStr, ctx.indent, valueComment);
    }
  }, {
    key: "commentBefore",
    get: function get() {
      return this.key && this.key.commentBefore;
    },
    set: function set(cb) {
      if (this.key == null) this.key = new _Scalar.default(null);
      this.key.commentBefore = cb;
    }
  }]);
  return Pair;
}(_Node2.default);

exports.default = Pair;

/***/ }),

/***/ "./node_modules/yaml/browser/dist/schema/Scalar.js":
/*!*********************************************************!*\
  !*** ./node_modules/yaml/browser/dist/schema/Scalar.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));

var _toJSON2 = _interopRequireDefault(__webpack_require__(/*! ../toJSON */ "./node_modules/yaml/browser/dist/toJSON.js"));

var _Node2 = _interopRequireDefault(__webpack_require__(/*! ./Node */ "./node_modules/yaml/browser/dist/schema/Node.js"));

// Published as 'yaml/scalar'
var Scalar =
/*#__PURE__*/
function (_Node) {
  (0, _inherits2.default)(Scalar, _Node);

  function Scalar(value) {
    var _this;

    (0, _classCallCheck2.default)(this, Scalar);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Scalar).call(this));
    _this.value = value;
    return _this;
  }

  (0, _createClass2.default)(Scalar, [{
    key: "toJSON",
    value: function toJSON(arg, ctx) {
      return ctx && ctx.keep ? this.value : (0, _toJSON2.default)(this.value, arg, ctx);
    }
  }, {
    key: "toString",
    value: function toString() {
      return String(this.value);
    }
  }]);
  return Scalar;
}(_Node2.default);

exports.default = Scalar;

/***/ }),

/***/ "./node_modules/yaml/browser/dist/schema/Seq.js":
/*!******************************************************!*\
  !*** ./node_modules/yaml/browser/dist/schema/Seq.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));

var _get2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/get */ "./node_modules/@babel/runtime/helpers/get.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));

var _toJSON2 = _interopRequireDefault(__webpack_require__(/*! ../toJSON */ "./node_modules/yaml/browser/dist/toJSON.js"));

var _Collection2 = _interopRequireDefault(__webpack_require__(/*! ./Collection */ "./node_modules/yaml/browser/dist/schema/Collection.js"));

var _Scalar = _interopRequireDefault(__webpack_require__(/*! ./Scalar */ "./node_modules/yaml/browser/dist/schema/Scalar.js"));

// Published as 'yaml/seq'
function asItemIndex(key) {
  var idx = key instanceof _Scalar.default ? key.value : key;
  if (idx && typeof idx === 'string') idx = Number(idx);
  return Number.isInteger(idx) && idx >= 0 ? idx : null;
}

var YAMLSeq =
/*#__PURE__*/
function (_Collection) {
  (0, _inherits2.default)(YAMLSeq, _Collection);

  function YAMLSeq() {
    (0, _classCallCheck2.default)(this, YAMLSeq);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(YAMLSeq).apply(this, arguments));
  }

  (0, _createClass2.default)(YAMLSeq, [{
    key: "add",
    value: function add(value) {
      this.items.push(value);
    }
  }, {
    key: "delete",
    value: function _delete(key) {
      var idx = asItemIndex(key);
      if (typeof idx !== 'number') return false;
      var del = this.items.splice(idx, 1);
      return del.length > 0;
    }
  }, {
    key: "get",
    value: function get(key, keepScalar) {
      var idx = asItemIndex(key);
      if (typeof idx !== 'number') return undefined;
      var it = this.items[idx];
      return !keepScalar && it instanceof _Scalar.default ? it.value : it;
    }
  }, {
    key: "has",
    value: function has(key) {
      var idx = asItemIndex(key);
      return typeof idx === 'number' && idx < this.items.length;
    }
  }, {
    key: "set",
    value: function set(key, value) {
      var idx = asItemIndex(key);
      if (typeof idx !== 'number') throw new Error("Expected a valid index, not ".concat(key, "."));
      this.items[idx] = value;
    }
  }, {
    key: "toJSON",
    value: function toJSON(_, ctx) {
      var seq = [];
      if (ctx && ctx.onCreate) ctx.onCreate(seq);
      var i = 0;
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this.items[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var item = _step.value;
          seq.push((0, _toJSON2.default)(item, String(i++), ctx));
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return != null) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      return seq;
    }
  }, {
    key: "toString",
    value: function toString(ctx, onComment, onChompKeep) {
      if (!ctx) return JSON.stringify(this);
      return (0, _get2.default)((0, _getPrototypeOf2.default)(YAMLSeq.prototype), "toString", this).call(this, ctx, {
        blockItem: function blockItem(n) {
          return n.type === 'comment' ? n.str : "- ".concat(n.str);
        },
        flowChars: {
          start: '[',
          end: ']'
        },
        isMap: false,
        itemIndent: (ctx.indent || '') + '  '
      }, onComment, onChompKeep);
    }
  }]);
  return YAMLSeq;
}(_Collection2.default);

exports.default = YAMLSeq;

/***/ }),

/***/ "./node_modules/yaml/browser/dist/schema/index.js":
/*!********************************************************!*\
  !*** ./node_modules/yaml/browser/dist/schema/index.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _warnings = __webpack_require__(/*! ../warnings */ "./node_modules/yaml/browser/dist/warnings.js");

var _constants = __webpack_require__(/*! ../constants */ "./node_modules/yaml/browser/dist/constants.js");

var _errors = __webpack_require__(/*! ../errors */ "./node_modules/yaml/browser/dist/errors.js");

var _stringify = __webpack_require__(/*! ../stringify */ "./node_modules/yaml/browser/dist/stringify.js");

var _tags = __webpack_require__(/*! ../tags */ "./node_modules/yaml/browser/dist/tags/index.js");

var _string = __webpack_require__(/*! ../tags/failsafe/string */ "./node_modules/yaml/browser/dist/tags/failsafe/string.js");

var _Alias = _interopRequireDefault(__webpack_require__(/*! ./Alias */ "./node_modules/yaml/browser/dist/schema/Alias.js"));

var _Collection = _interopRequireDefault(__webpack_require__(/*! ./Collection */ "./node_modules/yaml/browser/dist/schema/Collection.js"));

var _Node = _interopRequireDefault(__webpack_require__(/*! ./Node */ "./node_modules/yaml/browser/dist/schema/Node.js"));

var _Pair = _interopRequireDefault(__webpack_require__(/*! ./Pair */ "./node_modules/yaml/browser/dist/schema/Pair.js"));

var _Scalar = _interopRequireDefault(__webpack_require__(/*! ./Scalar */ "./node_modules/yaml/browser/dist/schema/Scalar.js"));

var isMap = function isMap(_ref) {
  var type = _ref.type;
  return type === _constants.Type.FLOW_MAP || type === _constants.Type.MAP;
};

var isSeq = function isSeq(_ref2) {
  var type = _ref2.type;
  return type === _constants.Type.FLOW_SEQ || type === _constants.Type.SEQ;
};

var Schema =
/*#__PURE__*/
function () {
  function Schema(_ref3) {
    var customTags = _ref3.customTags,
        merge = _ref3.merge,
        schema = _ref3.schema,
        deprecatedCustomTags = _ref3.tags;
    (0, _classCallCheck2.default)(this, Schema);
    this.merge = !!merge;
    this.name = schema;
    this.tags = _tags.schemas[schema.replace(/\W/g, '')]; // 'yaml-1.1' -> 'yaml11'

    if (!this.tags) {
      var keys = Object.keys(_tags.schemas).map(function (key) {
        return JSON.stringify(key);
      }).join(', ');
      throw new Error("Unknown schema \"".concat(schema, "\"; use one of ").concat(keys));
    }

    if (!customTags && deprecatedCustomTags) {
      customTags = deprecatedCustomTags;
      (0, _warnings.warnOptionDeprecation)('tags', 'customTags');
    }

    if (Array.isArray(customTags)) {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = customTags[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var tag = _step.value;
          this.tags = this.tags.concat(tag);
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return != null) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    } else if (typeof customTags === 'function') {
      this.tags = customTags(this.tags.slice());
    }

    for (var i = 0; i < this.tags.length; ++i) {
      var _tag = this.tags[i];

      if (typeof _tag === 'string') {
        var tagObj = _tags.tags[_tag];

        if (!tagObj) {
          var _keys = Object.keys(_tags.tags).map(function (key) {
            return JSON.stringify(key);
          }).join(', ');

          throw new Error("Unknown custom tag \"".concat(_tag, "\"; use one of ").concat(_keys));
        }

        this.tags[i] = tagObj;
      }
    }
  }

  (0, _createClass2.default)(Schema, [{
    key: "createNode",
    value: function createNode(value, wrapScalars, tag, ctx) {
      if (value instanceof _Node.default) return value;
      var tagObj;

      if (tag) {
        if (tag.startsWith('!!')) tag = Schema.defaultPrefix + tag.slice(2);
        var match = this.tags.filter(function (t) {
          return t.tag === tag;
        });
        tagObj = match.find(function (t) {
          return !t.format;
        }) || match[0];
        if (!tagObj) throw new Error("Tag ".concat(tag, " not found"));
      } else {
        // TODO: deprecate/remove class check
        tagObj = this.tags.find(function (t) {
          return (t.identify && t.identify(value) || t.class && value instanceof t.class) && !t.format;
        });

        if (!tagObj) {
          if (typeof value.toJSON === 'function') value = value.toJSON();
          if ((0, _typeof2.default)(value) !== 'object') return wrapScalars ? new _Scalar.default(value) : value;
          tagObj = value instanceof Map ? _tags.tags.map : value[Symbol.iterator] ? _tags.tags.seq : _tags.tags.map;
        }
      }

      if (!ctx) ctx = {
        wrapScalars: wrapScalars
      };else ctx.wrapScalars = wrapScalars;

      if (ctx.onTagObj) {
        ctx.onTagObj(tagObj);
        delete ctx.onTagObj;
      }

      var obj = {};

      if (value && (0, _typeof2.default)(value) === 'object' && ctx.prevObjects) {
        var prev = ctx.prevObjects.find(function (o) {
          return o.value === value;
        });

        if (prev) {
          var alias = new _Alias.default(prev); // leaves source dirty; must be cleaned by caller

          ctx.aliasNodes.push(alias);
          return alias;
        }

        obj.value = value;
        ctx.prevObjects.push(obj);
      }

      obj.node = tagObj.createNode ? tagObj.createNode(this, value, ctx) : wrapScalars ? new _Scalar.default(value) : value;
      return obj.node;
    }
  }, {
    key: "createPair",
    value: function createPair(key, value, ctx) {
      var k = this.createNode(key, ctx.wrapScalars, null, ctx);
      var v = this.createNode(value, ctx.wrapScalars, null, ctx);
      return new _Pair.default(k, v);
    } // falls back to string on no match

  }, {
    key: "resolveScalar",
    value: function resolveScalar(str, tags) {
      if (!tags) tags = this.tags;

      for (var i = 0; i < tags.length; ++i) {
        var _tags$i = tags[i],
            format = _tags$i.format,
            test = _tags$i.test,
            resolve = _tags$i.resolve;

        if (test) {
          var match = str.match(test);

          if (match) {
            var res = resolve.apply(null, match);
            if (!(res instanceof _Scalar.default)) res = new _Scalar.default(res);
            if (format) res.format = format;
            return res;
          }
        }
      }

      if (this.tags.scalarFallback) str = this.tags.scalarFallback(str);
      return new _Scalar.default(str);
    } // sets node.resolved on success

  }, {
    key: "resolveNode",
    value: function resolveNode(doc, node, tagName) {
      var tags = this.tags.filter(function (_ref4) {
        var tag = _ref4.tag;
        return tag === tagName;
      });
      var generic = tags.find(function (_ref5) {
        var test = _ref5.test;
        return !test;
      });
      if (node.error) doc.errors.push(node.error);

      try {
        if (generic) {
          var res = generic.resolve(doc, node);
          if (!(res instanceof _Collection.default)) res = new _Scalar.default(res);
          node.resolved = res;
        } else {
          var str = (0, _string.resolveString)(doc, node);

          if (typeof str === 'string' && tags.length > 0) {
            node.resolved = this.resolveScalar(str, tags);
          }
        }
      } catch (error) {
        if (!error.source) error.source = node;
        doc.errors.push(error);
        node.resolved = null;
      }

      if (!node.resolved) return null;
      if (tagName && node.tag) node.resolved.tag = tagName;
      return node.resolved;
    }
  }, {
    key: "resolveNodeWithFallback",
    value: function resolveNodeWithFallback(doc, node, tagName) {
      var res = this.resolveNode(doc, node, tagName);
      if (Object.prototype.hasOwnProperty.call(node, 'resolved')) return res;
      var fallback = isMap(node) ? Schema.defaultTags.MAP : isSeq(node) ? Schema.defaultTags.SEQ : Schema.defaultTags.STR;

      if (fallback) {
        doc.warnings.push(new _errors.YAMLWarning(node, "The tag ".concat(tagName, " is unavailable, falling back to ").concat(fallback)));

        var _res = this.resolveNode(doc, node, fallback);

        _res.tag = tagName;
        return _res;
      } else {
        doc.errors.push(new _errors.YAMLReferenceError(node, "The tag ".concat(tagName, " is unavailable")));
      }

      return null;
    }
  }, {
    key: "getTagObject",
    value: function getTagObject(item) {
      if (item instanceof _Alias.default) return _Alias.default;

      if (item.tag) {
        var match = this.tags.filter(function (t) {
          return t.tag === item.tag;
        });
        if (match.length > 0) return match.find(function (t) {
          return t.format === item.format;
        }) || match[0];
      }

      var tagObj, obj;

      if (item instanceof _Scalar.default) {
        obj = item.value; // TODO: deprecate/remove class check

        var _match = this.tags.filter(function (t) {
          return t.identify && t.identify(obj) || t.class && obj instanceof t.class;
        });

        tagObj = _match.find(function (t) {
          return t.format === item.format;
        }) || _match.find(function (t) {
          return !t.format;
        });
      } else {
        obj = item;
        tagObj = this.tags.find(function (t) {
          return t.nodeClass && obj instanceof t.nodeClass;
        });
      }

      if (!tagObj) {
        var name = obj && obj.constructor ? obj.constructor.name : (0, _typeof2.default)(obj);
        throw new Error("Tag not resolved for ".concat(name, " value"));
      }

      return tagObj;
    } // needs to be called before stringifier to allow for circular anchor refs

  }, {
    key: "stringifyProps",
    value: function stringifyProps(node, tagObj, _ref6) {
      var anchors = _ref6.anchors,
          doc = _ref6.doc;
      var props = [];
      var anchor = doc.anchors.getName(node);

      if (anchor) {
        anchors[anchor] = node;
        props.push("&".concat(anchor));
      }

      if (node.tag) {
        props.push(doc.stringifyTag(node.tag));
      } else if (!tagObj.default) {
        props.push(doc.stringifyTag(tagObj.tag));
      }

      return props.join(' ');
    }
  }, {
    key: "stringify",
    value: function stringify(item, ctx, onComment, onChompKeep) {
      var tagObj;

      if (!(item instanceof _Node.default)) {
        var createCtx = {
          aliasNodes: [],
          onTagObj: function onTagObj(o) {
            return tagObj = o;
          },
          prevObjects: []
        };
        item = this.createNode(item, true, null, createCtx);
        var anchors = ctx.doc.anchors;
        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
          for (var _iterator2 = createCtx.aliasNodes[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var alias = _step2.value;
            alias.source = alias.source.node;
            var name = anchors.getName(alias.source);

            if (!name) {
              name = anchors.newName();
              anchors.map[name] = alias.source;
            }
          }
        } catch (err) {
          _didIteratorError2 = true;
          _iteratorError2 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
              _iterator2.return();
            }
          } finally {
            if (_didIteratorError2) {
              throw _iteratorError2;
            }
          }
        }
      }

      ctx.tags = this;
      if (item instanceof _Pair.default) return item.toString(ctx, onComment, onChompKeep);
      if (!tagObj) tagObj = this.getTagObject(item);
      var props = this.stringifyProps(item, tagObj, ctx);
      var str = typeof tagObj.stringify === 'function' ? tagObj.stringify(item, ctx, onComment, onChompKeep) : item instanceof _Collection.default ? item.toString(ctx, onComment, onChompKeep) : (0, _stringify.stringifyString)(item, ctx, onComment, onChompKeep);
      return props ? item instanceof _Collection.default && str[0] !== '{' && str[0] !== '[' ? "".concat(props, "\n").concat(ctx.indent).concat(str) : "".concat(props, " ").concat(str) : str;
    }
  }]);
  return Schema;
}();

exports.default = Schema;
(0, _defineProperty2.default)(Schema, "defaultPrefix", 'tag:yaml.org,2002:');
(0, _defineProperty2.default)(Schema, "defaultTags", {
  MAP: 'tag:yaml.org,2002:map',
  SEQ: 'tag:yaml.org,2002:seq',
  STR: 'tag:yaml.org,2002:str'
});

/***/ }),

/***/ "./node_modules/yaml/browser/dist/schema/parseMap.js":
/*!***********************************************************!*\
  !*** ./node_modules/yaml/browser/dist/schema/parseMap.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = parseMap;

var _constants = __webpack_require__(/*! ../constants */ "./node_modules/yaml/browser/dist/constants.js");

var _PlainValue = _interopRequireDefault(__webpack_require__(/*! ../cst/PlainValue */ "./node_modules/yaml/browser/dist/cst/PlainValue.js"));

var _errors = __webpack_require__(/*! ../errors */ "./node_modules/yaml/browser/dist/errors.js");

var _Map = _interopRequireDefault(__webpack_require__(/*! ./Map */ "./node_modules/yaml/browser/dist/schema/Map.js"));

var _Merge = _interopRequireWildcard(__webpack_require__(/*! ./Merge */ "./node_modules/yaml/browser/dist/schema/Merge.js"));

var _Pair = _interopRequireDefault(__webpack_require__(/*! ./Pair */ "./node_modules/yaml/browser/dist/schema/Pair.js"));

var _parseUtils = __webpack_require__(/*! ./parseUtils */ "./node_modules/yaml/browser/dist/schema/parseUtils.js");

var _Alias = _interopRequireDefault(__webpack_require__(/*! ./Alias */ "./node_modules/yaml/browser/dist/schema/Alias.js"));

var _Collection = _interopRequireDefault(__webpack_require__(/*! ./Collection */ "./node_modules/yaml/browser/dist/schema/Collection.js"));

function parseMap(doc, cst) {
  if (cst.type !== _constants.Type.MAP && cst.type !== _constants.Type.FLOW_MAP) {
    var msg = "A ".concat(cst.type, " node cannot be resolved as a mapping");
    doc.errors.push(new _errors.YAMLSyntaxError(cst, msg));
    return null;
  }

  var _ref = cst.type === _constants.Type.FLOW_MAP ? resolveFlowMapItems(doc, cst) : resolveBlockMapItems(doc, cst),
      comments = _ref.comments,
      items = _ref.items;

  var map = new _Map.default();
  map.items = items;
  (0, _parseUtils.resolveComments)(map, comments);
  var hasCollectionKey = false;

  for (var i = 0; i < items.length; ++i) {
    var iKey = items[i].key;
    if (iKey instanceof _Collection.default) hasCollectionKey = true;

    if (doc.schema.merge && iKey && iKey.value === _Merge.MERGE_KEY) {
      items[i] = new _Merge.default(items[i]);
      var sources = items[i].value.items;
      var error = null;
      sources.some(function (node) {
        if (node instanceof _Alias.default) {
          // During parsing, alias sources are CST nodes; to account for
          // circular references their resolved values can't be used here.
          var type = node.source.type;
          if (type === _constants.Type.MAP || type === _constants.Type.FLOW_MAP) return false;
          return error = 'Merge nodes aliases can only point to maps';
        }

        return error = 'Merge nodes can only have Alias nodes as values';
      });
      if (error) doc.errors.push(new _errors.YAMLSemanticError(cst, error));
    } else {
      for (var j = i + 1; j < items.length; ++j) {
        var jKey = items[j].key;

        if (iKey === jKey || iKey && jKey && Object.prototype.hasOwnProperty.call(iKey, 'value') && iKey.value === jKey.value) {
          var _msg = "Map keys must be unique; \"".concat(iKey, "\" is repeated");

          doc.errors.push(new _errors.YAMLSemanticError(cst, _msg));
          break;
        }
      }
    }
  }

  if (hasCollectionKey && !doc.options.mapAsMap) {
    var warn = 'Keys with collection values will be stringified as YAML due to JS Object restrictions. Use mapAsMap: true to avoid this.';
    doc.warnings.push(new _errors.YAMLWarning(cst, warn));
  }

  cst.resolved = map;
  return map;
}

var valueHasPairComment = function valueHasPairComment(_ref2) {
  var _ref2$context = _ref2.context,
      lineStart = _ref2$context.lineStart,
      node = _ref2$context.node,
      src = _ref2$context.src,
      props = _ref2.props;
  if (props.length === 0) return false;
  var start = props[0].start;
  if (node && start > node.valueRange.start) return false;
  if (src[start] !== _constants.Char.COMMENT) return false;

  for (var i = lineStart; i < start; ++i) {
    if (src[i] === '\n') return false;
  }

  return true;
};

function resolvePairComment(item, pair) {
  if (!valueHasPairComment(item)) return;
  var comment = item.getPropValue(0, _constants.Char.COMMENT, true);
  var found = false;
  var cb = pair.value.commentBefore;

  if (cb && cb.startsWith(comment)) {
    pair.value.commentBefore = cb.substr(comment.length + 1);
    found = true;
  } else {
    var cc = pair.value.comment;

    if (!item.node && cc && cc.startsWith(comment)) {
      pair.value.comment = cc.substr(comment.length + 1);
      found = true;
    }
  }

  if (found) pair.comment = comment;
}

function resolveBlockMapItems(doc, cst) {
  var comments = [];
  var items = [];
  var key = undefined;
  var keyStart = null;

  for (var i = 0; i < cst.items.length; ++i) {
    var item = cst.items[i];

    switch (item.type) {
      case _constants.Type.BLANK_LINE:
        comments.push({
          afterKey: !!key,
          before: items.length
        });
        break;

      case _constants.Type.COMMENT:
        comments.push({
          afterKey: !!key,
          before: items.length,
          comment: item.comment
        });
        break;

      case _constants.Type.MAP_KEY:
        if (key !== undefined) items.push(new _Pair.default(key));
        if (item.error) doc.errors.push(item.error);
        key = doc.resolveNode(item.node);
        keyStart = null;
        break;

      case _constants.Type.MAP_VALUE:
        {
          if (key === undefined) key = null;
          if (item.error) doc.errors.push(item.error);

          if (!item.context.atLineStart && item.node && item.node.type === _constants.Type.MAP && !item.node.context.atLineStart) {
            var msg = 'Nested mappings are not allowed in compact mappings';
            doc.errors.push(new _errors.YAMLSemanticError(item.node, msg));
          }

          var valueNode = item.node;

          if (!valueNode && item.props.length > 0) {
            // Comments on an empty mapping value need to be preserved, so we
            // need to construct a minimal empty node here to use instead of the
            // missing `item.node`. -- eemeli/yaml#19
            valueNode = new _PlainValue.default(_constants.Type.PLAIN, []);
            valueNode.context = {
              parent: item,
              src: item.context.src
            };
            var pos = item.range.start + 1;
            valueNode.range = {
              start: pos,
              end: pos
            };
            valueNode.valueRange = {
              start: pos,
              end: pos
            };

            if (typeof item.range.origStart === 'number') {
              var origPos = item.range.origStart + 1;
              valueNode.range.origStart = valueNode.range.origEnd = origPos;
              valueNode.valueRange.origStart = valueNode.valueRange.origEnd = origPos;
            }
          }

          var pair = new _Pair.default(key, doc.resolveNode(valueNode));
          resolvePairComment(item, pair);
          items.push(pair);
          (0, _parseUtils.checkKeyLength)(doc.errors, cst, i, key, keyStart);
          key = undefined;
          keyStart = null;
        }
        break;

      default:
        if (key !== undefined) items.push(new _Pair.default(key));
        key = doc.resolveNode(item);
        keyStart = item.range.start;
        if (item.error) doc.errors.push(item.error);

        next: for (var j = i + 1;; ++j) {
          var nextItem = cst.items[j];

          switch (nextItem && nextItem.type) {
            case _constants.Type.BLANK_LINE:
            case _constants.Type.COMMENT:
              continue next;

            case _constants.Type.MAP_VALUE:
              break next;

            default:
              doc.errors.push(new _errors.YAMLSemanticError(item, 'Implicit map keys need to be followed by map values'));
              break next;
          }
        }

        if (item.valueRangeContainsNewline) {
          var _msg2 = 'Implicit map keys need to be on a single line';
          doc.errors.push(new _errors.YAMLSemanticError(item, _msg2));
        }

    }
  }

  if (key !== undefined) items.push(new _Pair.default(key));
  return {
    comments: comments,
    items: items
  };
}

function resolveFlowMapItems(doc, cst) {
  var comments = [];
  var items = [];
  var key = undefined;
  var keyStart = null;
  var explicitKey = false;
  var next = '{';

  for (var i = 0; i < cst.items.length; ++i) {
    (0, _parseUtils.checkKeyLength)(doc.errors, cst, i, key, keyStart);
    var item = cst.items[i];

    if (typeof item.char === 'string') {
      var char = item.char,
          offset = item.offset;

      if (char === '?' && key === undefined && !explicitKey) {
        explicitKey = true;
        next = ':';
        continue;
      }

      if (char === ':') {
        if (key === undefined) key = null;

        if (next === ':') {
          next = ',';
          continue;
        }
      } else {
        if (explicitKey) {
          if (key === undefined && char !== ',') key = null;
          explicitKey = false;
        }

        if (key !== undefined) {
          items.push(new _Pair.default(key));
          key = undefined;
          keyStart = null;

          if (char === ',') {
            next = ':';
            continue;
          }
        }
      }

      if (char === '}') {
        if (i === cst.items.length - 1) continue;
      } else if (char === next) {
        next = ':';
        continue;
      }

      var msg = "Flow map contains an unexpected ".concat(char);
      var err = new _errors.YAMLSyntaxError(cst, msg);
      err.offset = offset;
      doc.errors.push(err);
    } else if (item.type === _constants.Type.BLANK_LINE) {
      comments.push({
        afterKey: !!key,
        before: items.length
      });
    } else if (item.type === _constants.Type.COMMENT) {
      comments.push({
        afterKey: !!key,
        before: items.length,
        comment: item.comment
      });
    } else if (key === undefined) {
      if (next === ',') doc.errors.push(new _errors.YAMLSemanticError(item, 'Separator , missing in flow map'));
      key = doc.resolveNode(item);
      keyStart = explicitKey ? null : item.range.start; // TODO: add error for non-explicit multiline plain key
    } else {
      if (next !== ',') doc.errors.push(new _errors.YAMLSemanticError(item, 'Indicator : missing in flow map entry'));
      items.push(new _Pair.default(key, doc.resolveNode(item)));
      key = undefined;
      explicitKey = false;
    }
  }

  (0, _parseUtils.checkFlowCollectionEnd)(doc.errors, cst);
  if (key !== undefined) items.push(new _Pair.default(key));
  return {
    comments: comments,
    items: items
  };
}

/***/ }),

/***/ "./node_modules/yaml/browser/dist/schema/parseSeq.js":
/*!***********************************************************!*\
  !*** ./node_modules/yaml/browser/dist/schema/parseSeq.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = parseSeq;

var _constants = __webpack_require__(/*! ../constants */ "./node_modules/yaml/browser/dist/constants.js");

var _errors = __webpack_require__(/*! ../errors */ "./node_modules/yaml/browser/dist/errors.js");

var _Pair = _interopRequireDefault(__webpack_require__(/*! ./Pair */ "./node_modules/yaml/browser/dist/schema/Pair.js"));

var _parseUtils = __webpack_require__(/*! ./parseUtils */ "./node_modules/yaml/browser/dist/schema/parseUtils.js");

var _Seq = _interopRequireDefault(__webpack_require__(/*! ./Seq */ "./node_modules/yaml/browser/dist/schema/Seq.js"));

var _Collection = _interopRequireDefault(__webpack_require__(/*! ./Collection */ "./node_modules/yaml/browser/dist/schema/Collection.js"));

function parseSeq(doc, cst) {
  if (cst.type !== _constants.Type.SEQ && cst.type !== _constants.Type.FLOW_SEQ) {
    var msg = "A ".concat(cst.type, " node cannot be resolved as a sequence");
    doc.errors.push(new _errors.YAMLSyntaxError(cst, msg));
    return null;
  }

  var _ref = cst.type === _constants.Type.FLOW_SEQ ? resolveFlowSeqItems(doc, cst) : resolveBlockSeqItems(doc, cst),
      comments = _ref.comments,
      items = _ref.items;

  var seq = new _Seq.default();
  seq.items = items;
  (0, _parseUtils.resolveComments)(seq, comments);

  if (!doc.options.mapAsMap && items.some(function (it) {
    return it instanceof _Pair.default && it.key instanceof _Collection.default;
  })) {
    var warn = 'Keys with collection values will be stringified as YAML due to JS Object restrictions. Use mapAsMap: true to avoid this.';
    doc.warnings.push(new _errors.YAMLWarning(cst, warn));
  }

  cst.resolved = seq;
  return seq;
}

function resolveBlockSeqItems(doc, cst) {
  var comments = [];
  var items = [];

  for (var i = 0; i < cst.items.length; ++i) {
    var item = cst.items[i];

    switch (item.type) {
      case _constants.Type.BLANK_LINE:
        comments.push({
          before: items.length
        });
        break;

      case _constants.Type.COMMENT:
        comments.push({
          comment: item.comment,
          before: items.length
        });
        break;

      case _constants.Type.SEQ_ITEM:
        if (item.error) doc.errors.push(item.error);
        items.push(doc.resolveNode(item.node));

        if (item.hasProps) {
          var msg = 'Sequence items cannot have tags or anchors before the - indicator';
          doc.errors.push(new _errors.YAMLSemanticError(item, msg));
        }

        break;

      default:
        if (item.error) doc.errors.push(item.error);
        doc.errors.push(new _errors.YAMLSyntaxError(item, "Unexpected ".concat(item.type, " node in sequence")));
    }
  }

  return {
    comments: comments,
    items: items
  };
}

function resolveFlowSeqItems(doc, cst) {
  var comments = [];
  var items = [];
  var explicitKey = false;
  var key = undefined;
  var keyStart = null;
  var next = '[';

  for (var i = 0; i < cst.items.length; ++i) {
    var item = cst.items[i];

    if (typeof item.char === 'string') {
      var char = item.char,
          offset = item.offset;

      if (char !== ':' && (explicitKey || key !== undefined)) {
        if (explicitKey && key === undefined) key = next ? items.pop() : null;
        items.push(new _Pair.default(key));
        explicitKey = false;
        key = undefined;
        keyStart = null;
      }

      if (char === next) {
        next = null;
      } else if (!next && char === '?') {
        explicitKey = true;
      } else if (next !== '[' && char === ':' && key === undefined) {
        if (next === ',') {
          key = items.pop();

          if (key instanceof _Pair.default) {
            var msg = 'Chaining flow sequence pairs is invalid';
            var err = new _errors.YAMLSemanticError(cst, msg);
            err.offset = offset;
            doc.errors.push(err);
          }

          if (!explicitKey) (0, _parseUtils.checkKeyLength)(doc.errors, cst, i, key, keyStart);
        } else {
          key = null;
        }

        keyStart = null;
        explicitKey = false; // TODO: add error for non-explicit multiline plain key

        next = null;
      } else if (next === '[' || char !== ']' || i < cst.items.length - 1) {
        var _msg = "Flow sequence contains an unexpected ".concat(char);

        var _err = new _errors.YAMLSyntaxError(cst, _msg);

        _err.offset = offset;
        doc.errors.push(_err);
      }
    } else if (item.type === _constants.Type.BLANK_LINE) {
      comments.push({
        before: items.length
      });
    } else if (item.type === _constants.Type.COMMENT) {
      comments.push({
        comment: item.comment,
        before: items.length
      });
    } else {
      if (next) {
        var _msg2 = "Expected a ".concat(next, " in flow sequence");

        doc.errors.push(new _errors.YAMLSemanticError(item, _msg2));
      }

      var value = doc.resolveNode(item);

      if (key === undefined) {
        items.push(value);
      } else {
        items.push(new _Pair.default(key, value));
        key = undefined;
      }

      keyStart = item.range.start;
      next = ',';
    }
  }

  (0, _parseUtils.checkFlowCollectionEnd)(doc.errors, cst);
  if (key !== undefined) items.push(new _Pair.default(key));
  return {
    comments: comments,
    items: items
  };
}

/***/ }),

/***/ "./node_modules/yaml/browser/dist/schema/parseUtils.js":
/*!*************************************************************!*\
  !*** ./node_modules/yaml/browser/dist/schema/parseUtils.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.checkFlowCollectionEnd = checkFlowCollectionEnd;
exports.checkKeyLength = checkKeyLength;
exports.resolveComments = resolveComments;

var _errors = __webpack_require__(/*! ../errors */ "./node_modules/yaml/browser/dist/errors.js");

var _constants = __webpack_require__(/*! ../constants */ "./node_modules/yaml/browser/dist/constants.js");

function checkFlowCollectionEnd(errors, cst) {
  var char, name;

  switch (cst.type) {
    case _constants.Type.FLOW_MAP:
      char = '}';
      name = 'flow map';
      break;

    case _constants.Type.FLOW_SEQ:
      char = ']';
      name = 'flow sequence';
      break;

    default:
      errors.push(new _errors.YAMLSemanticError(cst, 'Not a flow collection!?'));
      return;
  }

  var lastItem;

  for (var i = cst.items.length - 1; i >= 0; --i) {
    var item = cst.items[i];

    if (!item || item.type !== _constants.Type.COMMENT) {
      lastItem = item;
      break;
    }
  }

  if (lastItem && lastItem.char !== char) {
    var msg = "Expected ".concat(name, " to end with ").concat(char);
    var err;

    if (typeof lastItem.offset === 'number') {
      err = new _errors.YAMLSemanticError(cst, msg);
      err.offset = lastItem.offset + 1;
    } else {
      err = new _errors.YAMLSemanticError(lastItem, msg);
      if (lastItem.range && lastItem.range.end) err.offset = lastItem.range.end - lastItem.range.start;
    }

    errors.push(err);
  }
}

function checkKeyLength(errors, node, itemIdx, key, keyStart) {
  if (!key || typeof keyStart !== 'number') return;
  var item = node.items[itemIdx];
  var keyEnd = item && item.range && item.range.start;

  if (!keyEnd) {
    for (var i = itemIdx - 1; i >= 0; --i) {
      var it = node.items[i];

      if (it && it.range) {
        keyEnd = it.range.end + 2 * (itemIdx - i);
        break;
      }
    }
  }

  if (keyEnd > keyStart + 1024) {
    var k = String(key).substr(0, 8) + '...' + String(key).substr(-8);
    errors.push(new _errors.YAMLSemanticError(node, "The \"".concat(k, "\" key is too long")));
  }
}

function resolveComments(collection, comments) {
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = comments[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var _step$value = _step.value,
          afterKey = _step$value.afterKey,
          before = _step$value.before,
          comment = _step$value.comment;
      var item = collection.items[before];

      if (!item) {
        if (comment !== undefined) {
          if (collection.comment) collection.comment += '\n' + comment;else collection.comment = comment;
        }
      } else {
        if (afterKey && item.value) item = item.value;

        if (comment === undefined) {
          if (afterKey || !item.commentBefore) item.spaceBefore = true;
        } else {
          if (item.commentBefore) item.commentBefore += '\n' + comment;else item.commentBefore = comment;
        }
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return != null) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }
}

/***/ }),

/***/ "./node_modules/yaml/browser/dist/stringify.js":
/*!*****************************************************!*\
  !*** ./node_modules/yaml/browser/dist/stringify.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.stringifyNumber = stringifyNumber;
exports.stringifyString = stringifyString;

var _addComment = __webpack_require__(/*! ./addComment */ "./node_modules/yaml/browser/dist/addComment.js");

var _constants = __webpack_require__(/*! ./constants */ "./node_modules/yaml/browser/dist/constants.js");

var _foldFlowLines = _interopRequireWildcard(__webpack_require__(/*! ./foldFlowLines */ "./node_modules/yaml/browser/dist/foldFlowLines.js"));

var _options = __webpack_require__(/*! ./tags/options */ "./node_modules/yaml/browser/dist/tags/options.js");

function stringifyNumber(_ref) {
  var format = _ref.format,
      minFractionDigits = _ref.minFractionDigits,
      tag = _ref.tag,
      value = _ref.value;
  if (!isFinite(value)) return isNaN(value) ? '.nan' : value < 0 ? '-.inf' : '.inf';
  var n = JSON.stringify(value);

  if (!format && minFractionDigits && (!tag || tag === 'tag:yaml.org,2002:float') && /^\d/.test(n)) {
    var i = n.indexOf('.');

    if (i < 0) {
      i = n.length;
      n += '.';
    }

    var d = minFractionDigits - (n.length - i - 1);

    while (d-- > 0) {
      n += '0';
    }
  }

  return n;
}

function lineLengthOverLimit(str, limit) {
  var strLen = str.length;
  if (strLen <= limit) return false;

  for (var i = 0, start = 0; i < strLen; ++i) {
    if (str[i] === '\n') {
      if (i - start > limit) return true;
      start = i + 1;
      if (strLen - start <= limit) return false;
    }
  }

  return true;
}

function doubleQuotedString(value, _ref2) {
  var implicitKey = _ref2.implicitKey,
      indent = _ref2.indent;
  var _strOptions$doubleQuo = _options.strOptions.doubleQuoted,
      jsonEncoding = _strOptions$doubleQuo.jsonEncoding,
      minMultiLineLength = _strOptions$doubleQuo.minMultiLineLength;
  var json = JSON.stringify(value);
  if (jsonEncoding) return json;
  var str = '';
  var start = 0;

  for (var i = 0, ch = json[i]; ch; ch = json[++i]) {
    if (ch === ' ' && json[i + 1] === '\\' && json[i + 2] === 'n') {
      // space before newline needs to be escaped to not be folded
      str += json.slice(start, i) + '\\ ';
      i += 1;
      start = i;
      ch = '\\';
    }

    if (ch === '\\') switch (json[i + 1]) {
      case 'u':
        {
          str += json.slice(start, i);
          var code = json.substr(i + 2, 4);

          switch (code) {
            case '0000':
              str += '\\0';
              break;

            case '0007':
              str += '\\a';
              break;

            case '000b':
              str += '\\v';
              break;

            case '001b':
              str += '\\e';
              break;

            case '0085':
              str += '\\N';
              break;

            case '00a0':
              str += '\\_';
              break;

            case '2028':
              str += '\\L';
              break;

            case '2029':
              str += '\\P';
              break;

            default:
              if (code.substr(0, 2) === '00') str += '\\x' + code.substr(2);else str += json.substr(i, 6);
          }

          i += 5;
          start = i + 1;
        }
        break;

      case 'n':
        if (implicitKey || json[i + 2] === '"' || json.length < minMultiLineLength) {
          i += 1;
        } else {
          // folding will eat first newline
          str += json.slice(start, i) + '\n\n';

          while (json[i + 2] === '\\' && json[i + 3] === 'n' && json[i + 4] !== '"') {
            str += '\n';
            i += 2;
          }

          str += indent; // space after newline needs to be escaped to not be folded

          if (json[i + 2] === ' ') str += '\\';
          i += 1;
          start = i + 1;
        }

        break;

      default:
        i += 1;
    }
  }

  str = start ? str + json.slice(start) : json;
  return implicitKey ? str : (0, _foldFlowLines.default)(str, indent, _foldFlowLines.FOLD_QUOTED, _options.strOptions.fold);
}

function singleQuotedString(value, ctx) {
  var indent = ctx.indent,
      implicitKey = ctx.implicitKey;

  if (implicitKey) {
    if (/\n/.test(value)) return doubleQuotedString(value, ctx);
  } else {
    // single quoted string can't have leading or trailing whitespace around newline
    if (/[ \t]\n|\n[ \t]/.test(value)) return doubleQuotedString(value, ctx);
  }

  var res = "'" + value.replace(/'/g, "''").replace(/\n+/g, "$&\n".concat(indent)) + "'";
  return implicitKey ? res : (0, _foldFlowLines.default)(res, indent, _foldFlowLines.FOLD_FLOW, _options.strOptions.fold);
}

function blockString(_ref3, ctx, onComment, onChompKeep) {
  var comment = _ref3.comment,
      type = _ref3.type,
      value = _ref3.value;

  // 1. Block can't end in whitespace unless the last line is non-empty.
  // 2. Strings consisting of only whitespace are best rendered explicitly.
  if (/\n[\t ]+$/.test(value) || /^\s*$/.test(value)) {
    return doubleQuotedString(value, ctx);
  }

  var indent = ctx.indent || (ctx.forceBlockIndent ? ' ' : '');
  var indentSize = indent ? '2' : '1'; // root is at -1

  var literal = type === _constants.Type.BLOCK_FOLDED ? false : type === _constants.Type.BLOCK_LITERAL ? true : !lineLengthOverLimit(value, _options.strOptions.fold.lineWidth - indent.length);
  var header = literal ? '|' : '>';
  if (!value) return header + '\n';
  var wsStart = '';
  var wsEnd = '';
  value = value.replace(/[\n\t ]*$/, function (ws) {
    var n = ws.indexOf('\n');

    if (n === -1) {
      header += '-'; // strip
    } else if (value === ws || n !== ws.length - 1) {
      header += '+'; // keep

      if (onChompKeep) onChompKeep();
    }

    wsEnd = ws.replace(/\n$/, '');
    return '';
  }).replace(/^[\n ]*/, function (ws) {
    if (ws.indexOf(' ') !== -1) header += indentSize;
    var m = ws.match(/ +$/);

    if (m) {
      wsStart = ws.slice(0, -m[0].length);
      return m[0];
    } else {
      wsStart = ws;
      return '';
    }
  });
  if (wsEnd) wsEnd = wsEnd.replace(/\n+(?!\n|$)/g, "$&".concat(indent));
  if (wsStart) wsStart = wsStart.replace(/\n+/g, "$&".concat(indent));

  if (comment) {
    header += ' #' + comment.replace(/ ?[\r\n]+/g, ' ');
    if (onComment) onComment();
  }

  if (!value) return "".concat(header).concat(indentSize, "\n").concat(indent).concat(wsEnd);

  if (literal) {
    value = value.replace(/\n+/g, "$&".concat(indent));
    return "".concat(header, "\n").concat(indent).concat(wsStart).concat(value).concat(wsEnd);
  }

  value = value.replace(/\n+/g, '\n$&').replace(/(?:^|\n)([\t ].*)(?:([\n\t ]*)\n(?![\n\t ]))?/g, '$1$2') // more-indented lines aren't folded
  //         ^ ind.line  ^ empty     ^ capture next empty lines only at end of indent
  .replace(/\n+/g, "$&".concat(indent));
  var body = (0, _foldFlowLines.default)("".concat(wsStart).concat(value).concat(wsEnd), indent, _foldFlowLines.FOLD_BLOCK, _options.strOptions.fold);
  return "".concat(header, "\n").concat(indent).concat(body);
}

function plainString(item, ctx, onComment, onChompKeep) {
  var comment = item.comment,
      type = item.type,
      value = item.value;
  var actualString = ctx.actualString,
      implicitKey = ctx.implicitKey,
      indent = ctx.indent,
      inFlow = ctx.inFlow,
      tags = ctx.tags;

  if (implicitKey && /[\n[\]{},]/.test(value) || inFlow && /[[\]{},]/.test(value)) {
    return doubleQuotedString(value, ctx);
  }

  if (!value || /^[\n\t ,[\]{}#&*!|>'"%@`]|^[?-]$|^[?-][ \t]|[\n:][ \t]|[ \t]\n|[\n\t ]#|[\n\t :]$/.test(value)) {
    // not allowed:
    // - empty string, '-' or '?'
    // - start with an indicator character (except [?:-]) or /[?-] /
    // - '\n ', ': ' or ' \n' anywhere
    // - '#' not preceded by a non-space char
    // - end with ' ' or ':'
    return implicitKey || inFlow || value.indexOf('\n') === -1 ? value.indexOf('"') !== -1 && value.indexOf("'") === -1 ? singleQuotedString(value, ctx) : doubleQuotedString(value, ctx) : blockString(item, ctx, onComment, onChompKeep);
  }

  if (!implicitKey && !inFlow && type !== _constants.Type.PLAIN && value.indexOf('\n') !== -1) {
    // Where allowed & type not set explicitly, prefer block style for multiline strings
    return blockString(item, ctx, onComment, onChompKeep);
  }

  var str = value.replace(/\n+/g, "$&\n".concat(indent)); // Verify that output will be parsed as a string, as e.g. plain numbers and
  // booleans get parsed with those types in v1.2 (e.g. '42', 'true' & '0.9e-3'),
  // and others in v1.1.

  if (actualString && typeof tags.resolveScalar(str).value !== 'string') {
    return doubleQuotedString(value, ctx);
  }

  var body = implicitKey ? str : (0, _foldFlowLines.default)(str, indent, _foldFlowLines.FOLD_FLOW, _options.strOptions.fold);

  if (comment && !inFlow && (body.indexOf('\n') !== -1 || comment.indexOf('\n') !== -1)) {
    if (onComment) onComment();
    return (0, _addComment.addCommentBefore)(body, indent, comment);
  }

  return body;
}

function stringifyString(item, ctx, onComment, onChompKeep) {
  var defaultType = _options.strOptions.defaultType;
  var implicitKey = ctx.implicitKey,
      inFlow = ctx.inFlow;
  var _item = item,
      type = _item.type,
      value = _item.value;

  if (typeof value !== 'string') {
    value = String(value);
    item = Object.assign({}, item, {
      value: value
    });
  }

  var _stringify = function _stringify(_type) {
    switch (_type) {
      case _constants.Type.BLOCK_FOLDED:
      case _constants.Type.BLOCK_LITERAL:
        return blockString(item, ctx, onComment, onChompKeep);

      case _constants.Type.QUOTE_DOUBLE:
        return doubleQuotedString(value, ctx);

      case _constants.Type.QUOTE_SINGLE:
        return singleQuotedString(value, ctx);

      case _constants.Type.PLAIN:
        return plainString(item, ctx, onComment, onChompKeep);

      default:
        return null;
    }
  };

  if (type !== _constants.Type.QUOTE_DOUBLE && /[\x00-\x08\x0b-\x1f\x7f-\x9f]/.test(value)) {
    // force double quotes on control characters
    type = _constants.Type.QUOTE_DOUBLE;
  } else if ((implicitKey || inFlow) && (type === _constants.Type.BLOCK_FOLDED || type === _constants.Type.BLOCK_LITERAL)) {
    // should not happen; blocks are not valid inside flow containers
    type = _constants.Type.QUOTE_DOUBLE;
  }

  var res = _stringify(type);

  if (res === null) {
    res = _stringify(defaultType);
    if (res === null) throw new Error("Unsupported default string type ".concat(defaultType));
  }

  return res;
}

/***/ }),

/***/ "./node_modules/yaml/browser/dist/tags/core.js":
/*!*****************************************************!*\
  !*** ./node_modules/yaml/browser/dist/tags/core.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Scalar = _interopRequireDefault(__webpack_require__(/*! ../schema/Scalar */ "./node_modules/yaml/browser/dist/schema/Scalar.js"));

var _stringify = __webpack_require__(/*! ../stringify */ "./node_modules/yaml/browser/dist/stringify.js");

var _failsafe = _interopRequireDefault(__webpack_require__(/*! ./failsafe */ "./node_modules/yaml/browser/dist/tags/failsafe/index.js"));

var _options = __webpack_require__(/*! ./options */ "./node_modules/yaml/browser/dist/tags/options.js");

var _default = _failsafe.default.concat([{
  identify: function identify(value) {
    return value == null;
  },
  createNode: function createNode(schema, value, ctx) {
    return ctx.wrapScalars ? new _Scalar.default(null) : null;
  },
  default: true,
  tag: 'tag:yaml.org,2002:null',
  test: /^(?:~|[Nn]ull|NULL)?$/,
  resolve: function resolve() {
    return null;
  },
  options: _options.nullOptions,
  stringify: function stringify() {
    return _options.nullOptions.nullStr;
  }
}, {
  identify: function identify(value) {
    return typeof value === 'boolean';
  },
  default: true,
  tag: 'tag:yaml.org,2002:bool',
  test: /^(?:[Tt]rue|TRUE|[Ff]alse|FALSE)$/,
  resolve: function resolve(str) {
    return str[0] === 't' || str[0] === 'T';
  },
  options: _options.boolOptions,
  stringify: function stringify(_ref) {
    var value = _ref.value;
    return value ? _options.boolOptions.trueStr : _options.boolOptions.falseStr;
  }
}, {
  identify: function identify(value) {
    return typeof value === 'number';
  },
  default: true,
  tag: 'tag:yaml.org,2002:int',
  format: 'OCT',
  test: /^0o([0-7]+)$/,
  resolve: function resolve(str, oct) {
    return parseInt(oct, 8);
  },
  stringify: function stringify(_ref2) {
    var value = _ref2.value;
    return '0o' + value.toString(8);
  }
}, {
  identify: function identify(value) {
    return typeof value === 'number';
  },
  default: true,
  tag: 'tag:yaml.org,2002:int',
  test: /^[-+]?[0-9]+$/,
  resolve: function resolve(str) {
    return parseInt(str, 10);
  },
  stringify: _stringify.stringifyNumber
}, {
  identify: function identify(value) {
    return typeof value === 'number';
  },
  default: true,
  tag: 'tag:yaml.org,2002:int',
  format: 'HEX',
  test: /^0x([0-9a-fA-F]+)$/,
  resolve: function resolve(str, hex) {
    return parseInt(hex, 16);
  },
  stringify: function stringify(_ref3) {
    var value = _ref3.value;
    return '0x' + value.toString(16);
  }
}, {
  identify: function identify(value) {
    return typeof value === 'number';
  },
  default: true,
  tag: 'tag:yaml.org,2002:float',
  test: /^(?:[-+]?\.inf|(\.nan))$/i,
  resolve: function resolve(str, nan) {
    return nan ? NaN : str[0] === '-' ? Number.NEGATIVE_INFINITY : Number.POSITIVE_INFINITY;
  },
  stringify: _stringify.stringifyNumber
}, {
  identify: function identify(value) {
    return typeof value === 'number';
  },
  default: true,
  tag: 'tag:yaml.org,2002:float',
  format: 'EXP',
  test: /^[-+]?(?:0|[1-9][0-9]*)(\.[0-9]*)?[eE][-+]?[0-9]+$/,
  resolve: function resolve(str) {
    return parseFloat(str);
  },
  stringify: function stringify(_ref4) {
    var value = _ref4.value;
    return Number(value).toExponential();
  }
}, {
  identify: function identify(value) {
    return typeof value === 'number';
  },
  default: true,
  tag: 'tag:yaml.org,2002:float',
  test: /^[-+]?(?:0|[1-9][0-9]*)\.([0-9]*)$/,
  resolve: function resolve(str, frac) {
    var node = new _Scalar.default(parseFloat(str));
    if (frac && frac[frac.length - 1] === '0') node.minFractionDigits = frac.length;
    return node;
  },
  stringify: _stringify.stringifyNumber
}]);

exports.default = _default;

/***/ }),

/***/ "./node_modules/yaml/browser/dist/tags/failsafe/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/yaml/browser/dist/tags/failsafe/index.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _map = _interopRequireDefault(__webpack_require__(/*! ./map */ "./node_modules/yaml/browser/dist/tags/failsafe/map.js"));

var _seq = _interopRequireDefault(__webpack_require__(/*! ./seq */ "./node_modules/yaml/browser/dist/tags/failsafe/seq.js"));

var _string = _interopRequireDefault(__webpack_require__(/*! ./string */ "./node_modules/yaml/browser/dist/tags/failsafe/string.js"));

var _default = [_map.default, _seq.default, _string.default];
exports.default = _default;

/***/ }),

/***/ "./node_modules/yaml/browser/dist/tags/failsafe/map.js":
/*!*************************************************************!*\
  !*** ./node_modules/yaml/browser/dist/tags/failsafe/map.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js"));

var _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js"));

var _Map = _interopRequireDefault(__webpack_require__(/*! ../../schema/Map */ "./node_modules/yaml/browser/dist/schema/Map.js"));

var _parseMap = _interopRequireDefault(__webpack_require__(/*! ../../schema/parseMap */ "./node_modules/yaml/browser/dist/schema/parseMap.js"));

function createMap(schema, obj, ctx) {
  var map = new _Map.default();

  if (obj instanceof Map) {
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = obj[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var _step$value = (0, _slicedToArray2.default)(_step.value, 2),
            key = _step$value[0],
            value = _step$value[1];

        map.items.push(schema.createPair(key, value, ctx));
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return != null) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }
  } else if (obj && (0, _typeof2.default)(obj) === 'object') {
    for (var _i = 0, _Object$keys = Object.keys(obj); _i < _Object$keys.length; _i++) {
      var _key = _Object$keys[_i];
      map.items.push(schema.createPair(_key, obj[_key], ctx));
    }
  }

  return map;
}

var _default = {
  createNode: createMap,
  default: true,
  nodeClass: _Map.default,
  tag: 'tag:yaml.org,2002:map',
  resolve: _parseMap.default
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/yaml/browser/dist/tags/failsafe/seq.js":
/*!*************************************************************!*\
  !*** ./node_modules/yaml/browser/dist/tags/failsafe/seq.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _parseSeq = _interopRequireDefault(__webpack_require__(/*! ../../schema/parseSeq */ "./node_modules/yaml/browser/dist/schema/parseSeq.js"));

var _Seq = _interopRequireDefault(__webpack_require__(/*! ../../schema/Seq */ "./node_modules/yaml/browser/dist/schema/Seq.js"));

function createSeq(schema, obj, ctx) {
  var seq = new _Seq.default();

  if (obj && obj[Symbol.iterator]) {
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = obj[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var it = _step.value;
        var v = schema.createNode(it, ctx.wrapScalars, null, ctx);
        seq.items.push(v);
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return != null) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }
  }

  return seq;
}

var _default = {
  createNode: createSeq,
  default: true,
  nodeClass: _Seq.default,
  tag: 'tag:yaml.org,2002:seq',
  resolve: _parseSeq.default
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/yaml/browser/dist/tags/failsafe/string.js":
/*!****************************************************************!*\
  !*** ./node_modules/yaml/browser/dist/tags/failsafe/string.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.resolveString = void 0;

var _stringify = __webpack_require__(/*! ../../stringify */ "./node_modules/yaml/browser/dist/stringify.js");

var _options = __webpack_require__(/*! ../options */ "./node_modules/yaml/browser/dist/tags/options.js");

var resolveString = function resolveString(doc, node) {
  // on error, will return { str: string, errors: Error[] }
  var res = node.strValue;
  if (!res) return '';
  if (typeof res === 'string') return res;
  res.errors.forEach(function (error) {
    if (!error.source) error.source = node;
    doc.errors.push(error);
  });
  return res.str;
};

exports.resolveString = resolveString;
var _default = {
  identify: function identify(value) {
    return typeof value === 'string';
  },
  default: true,
  tag: 'tag:yaml.org,2002:str',
  resolve: resolveString,
  stringify: function stringify(item, ctx, onComment, onChompKeep) {
    ctx = Object.assign({
      actualString: true
    }, ctx);
    return (0, _stringify.stringifyString)(item, ctx, onComment, onChompKeep);
  },
  options: _options.strOptions
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/yaml/browser/dist/tags/index.js":
/*!******************************************************!*\
  !*** ./node_modules/yaml/browser/dist/tags/index.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.tags = exports.schemas = void 0;

var _core = _interopRequireDefault(__webpack_require__(/*! ./core */ "./node_modules/yaml/browser/dist/tags/core.js"));

var _failsafe = _interopRequireDefault(__webpack_require__(/*! ./failsafe */ "./node_modules/yaml/browser/dist/tags/failsafe/index.js"));

var _json = _interopRequireDefault(__webpack_require__(/*! ./json */ "./node_modules/yaml/browser/dist/tags/json.js"));

var _yaml = _interopRequireDefault(__webpack_require__(/*! ./yaml-1.1 */ "./node_modules/yaml/browser/dist/tags/yaml-1.1/index.js"));

var _map = _interopRequireDefault(__webpack_require__(/*! ./failsafe/map */ "./node_modules/yaml/browser/dist/tags/failsafe/map.js"));

var _seq = _interopRequireDefault(__webpack_require__(/*! ./failsafe/seq */ "./node_modules/yaml/browser/dist/tags/failsafe/seq.js"));

var _binary = _interopRequireDefault(__webpack_require__(/*! ./yaml-1.1/binary */ "./node_modules/yaml/browser/dist/tags/yaml-1.1/binary.js"));

var _omap = _interopRequireDefault(__webpack_require__(/*! ./yaml-1.1/omap */ "./node_modules/yaml/browser/dist/tags/yaml-1.1/omap.js"));

var _pairs = _interopRequireDefault(__webpack_require__(/*! ./yaml-1.1/pairs */ "./node_modules/yaml/browser/dist/tags/yaml-1.1/pairs.js"));

var _set = _interopRequireDefault(__webpack_require__(/*! ./yaml-1.1/set */ "./node_modules/yaml/browser/dist/tags/yaml-1.1/set.js"));

var _timestamp = __webpack_require__(/*! ./yaml-1.1/timestamp */ "./node_modules/yaml/browser/dist/tags/yaml-1.1/timestamp.js");

var schemas = {
  core: _core.default,
  failsafe: _failsafe.default,
  json: _json.default,
  yaml11: _yaml.default
};
exports.schemas = schemas;
var tags = {
  binary: _binary.default,
  floatTime: _timestamp.floatTime,
  intTime: _timestamp.intTime,
  map: _map.default,
  omap: _omap.default,
  pairs: _pairs.default,
  seq: _seq.default,
  set: _set.default,
  timestamp: _timestamp.timestamp
};
exports.tags = tags;

/***/ }),

/***/ "./node_modules/yaml/browser/dist/tags/json.js":
/*!*****************************************************!*\
  !*** ./node_modules/yaml/browser/dist/tags/json.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _map = _interopRequireDefault(__webpack_require__(/*! ./failsafe/map */ "./node_modules/yaml/browser/dist/tags/failsafe/map.js"));

var _seq = _interopRequireDefault(__webpack_require__(/*! ./failsafe/seq */ "./node_modules/yaml/browser/dist/tags/failsafe/seq.js"));

var _Scalar = _interopRequireDefault(__webpack_require__(/*! ../schema/Scalar */ "./node_modules/yaml/browser/dist/schema/Scalar.js"));

var _string = __webpack_require__(/*! ./failsafe/string */ "./node_modules/yaml/browser/dist/tags/failsafe/string.js");

var schema = [_map.default, _seq.default, {
  identify: function identify(value) {
    return typeof value === 'string';
  },
  default: true,
  tag: 'tag:yaml.org,2002:str',
  resolve: _string.resolveString,
  stringify: function stringify(value) {
    return JSON.stringify(value);
  }
}, {
  identify: function identify(value) {
    return value == null;
  },
  createNode: function createNode(schema, value, ctx) {
    return ctx.wrapScalars ? new _Scalar.default(null) : null;
  },
  default: true,
  tag: 'tag:yaml.org,2002:null',
  test: /^null$/,
  resolve: function resolve() {
    return null;
  },
  stringify: function stringify(value) {
    return JSON.stringify(value);
  }
}, {
  identify: function identify(value) {
    return typeof value === 'boolean';
  },
  default: true,
  tag: 'tag:yaml.org,2002:bool',
  test: /^true$/,
  resolve: function resolve() {
    return true;
  },
  stringify: function stringify(value) {
    return JSON.stringify(value);
  }
}, {
  identify: function identify(value) {
    return typeof value === 'boolean';
  },
  default: true,
  tag: 'tag:yaml.org,2002:bool',
  test: /^false$/,
  resolve: function resolve() {
    return false;
  },
  stringify: function stringify(value) {
    return JSON.stringify(value);
  }
}, {
  identify: function identify(value) {
    return typeof value === 'number';
  },
  default: true,
  tag: 'tag:yaml.org,2002:int',
  test: /^-?(?:0|[1-9][0-9]*)$/,
  resolve: function resolve(str) {
    return parseInt(str, 10);
  },
  stringify: function stringify(value) {
    return JSON.stringify(value);
  }
}, {
  identify: function identify(value) {
    return typeof value === 'number';
  },
  default: true,
  tag: 'tag:yaml.org,2002:float',
  test: /^-?(?:0|[1-9][0-9]*)(?:\.[0-9]*)?(?:[eE][-+]?[0-9]+)?$/,
  resolve: function resolve(str) {
    return parseFloat(str);
  },
  stringify: function stringify(value) {
    return JSON.stringify(value);
  }
}];

schema.scalarFallback = function (str) {
  throw new SyntaxError("Unresolved plain scalar ".concat(JSON.stringify(str)));
};

var _default = schema;
exports.default = _default;

/***/ }),

/***/ "./node_modules/yaml/browser/dist/tags/options.js":
/*!********************************************************!*\
  !*** ./node_modules/yaml/browser/dist/tags/options.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.strOptions = exports.nullOptions = exports.boolOptions = exports.binaryOptions = void 0;

var _constants = __webpack_require__(/*! ../constants */ "./node_modules/yaml/browser/dist/constants.js");

var binaryOptions = {
  defaultType: _constants.Type.BLOCK_LITERAL,
  lineWidth: 76
};
exports.binaryOptions = binaryOptions;
var boolOptions = {
  trueStr: 'true',
  falseStr: 'false'
};
exports.boolOptions = boolOptions;
var nullOptions = {
  nullStr: 'null'
};
exports.nullOptions = nullOptions;
var strOptions = {
  defaultType: _constants.Type.PLAIN,
  doubleQuoted: {
    jsonEncoding: false,
    minMultiLineLength: 40
  },
  fold: {
    lineWidth: 80,
    minContentWidth: 20
  }
};
exports.strOptions = strOptions;

/***/ }),

/***/ "./node_modules/yaml/browser/dist/tags/yaml-1.1/binary.js":
/*!****************************************************************!*\
  !*** ./node_modules/yaml/browser/dist/tags/yaml-1.1/binary.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Buffer) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _constants = __webpack_require__(/*! ../../constants */ "./node_modules/yaml/browser/dist/constants.js");

var _errors = __webpack_require__(/*! ../../errors */ "./node_modules/yaml/browser/dist/errors.js");

var _stringify = __webpack_require__(/*! ../../stringify */ "./node_modules/yaml/browser/dist/stringify.js");

var _string = __webpack_require__(/*! ../failsafe/string */ "./node_modules/yaml/browser/dist/tags/failsafe/string.js");

var _options = __webpack_require__(/*! ../options */ "./node_modules/yaml/browser/dist/tags/options.js");

/* global atob, btoa, Buffer */
var _default = {
  identify: function identify(value) {
    return value instanceof Uint8Array;
  },
  // Buffer inherits from Uint8Array
  default: false,
  tag: 'tag:yaml.org,2002:binary',

  /**
   * Returns a Buffer in node and an Uint8Array in browsers
   *
   * To use the resulting buffer as an image, you'll want to do something like:
   *
   *   const blob = new Blob([buffer], { type: 'image/jpeg' })
   *   document.querySelector('#photo').src = URL.createObjectURL(blob)
   */
  resolve: function resolve(doc, node) {
    if (typeof Buffer === 'function') {
      var src = (0, _string.resolveString)(doc, node);
      return Buffer.from(src, 'base64');
    } else if (typeof atob === 'function') {
      var _src = atob((0, _string.resolveString)(doc, node));

      var buffer = new Uint8Array(_src.length);

      for (var i = 0; i < _src.length; ++i) {
        buffer[i] = _src.charCodeAt(i);
      }

      return buffer;
    } else {
      doc.errors.push(new _errors.YAMLReferenceError(node, 'This environment does not support reading binary tags; either Buffer or atob is required'));
      return null;
    }
  },
  options: _options.binaryOptions,
  stringify: function stringify(_ref, ctx, onComment, onChompKeep) {
    var comment = _ref.comment,
        type = _ref.type,
        value = _ref.value;
    var src;

    if (typeof Buffer === 'function') {
      src = value instanceof Buffer ? value.toString('base64') : Buffer.from(value.buffer).toString('base64');
    } else if (typeof btoa === 'function') {
      var s = '';

      for (var i = 0; i < value.length; ++i) {
        s += String.fromCharCode(value[i]);
      }

      src = btoa(s);
    } else {
      throw new Error('This environment does not support writing binary tags; either Buffer or btoa is required');
    }

    if (!type) type = _options.binaryOptions.defaultType;

    if (type === _constants.Type.QUOTE_DOUBLE) {
      value = src;
    } else {
      var lineWidth = _options.binaryOptions.lineWidth;
      var n = Math.ceil(src.length / lineWidth);
      var lines = new Array(n);

      for (var _i = 0, o = 0; _i < n; ++_i, o += lineWidth) {
        lines[_i] = src.substr(o, lineWidth);
      }

      value = lines.join(type === _constants.Type.BLOCK_LITERAL ? '\n' : ' ');
    }

    return (0, _stringify.stringifyString)({
      comment: comment,
      type: type,
      value: value
    }, ctx, onComment, onChompKeep);
  }
};
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../buffer/index.js */ "./node_modules/buffer/index.js").Buffer))

/***/ }),

/***/ "./node_modules/yaml/browser/dist/tags/yaml-1.1/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/yaml/browser/dist/tags/yaml-1.1/index.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Scalar = _interopRequireDefault(__webpack_require__(/*! ../../schema/Scalar */ "./node_modules/yaml/browser/dist/schema/Scalar.js"));

var _stringify = __webpack_require__(/*! ../../stringify */ "./node_modules/yaml/browser/dist/stringify.js");

var _failsafe = _interopRequireDefault(__webpack_require__(/*! ../failsafe */ "./node_modules/yaml/browser/dist/tags/failsafe/index.js"));

var _options = __webpack_require__(/*! ../options */ "./node_modules/yaml/browser/dist/tags/options.js");

var _binary = _interopRequireDefault(__webpack_require__(/*! ./binary */ "./node_modules/yaml/browser/dist/tags/yaml-1.1/binary.js"));

var _omap = _interopRequireDefault(__webpack_require__(/*! ./omap */ "./node_modules/yaml/browser/dist/tags/yaml-1.1/omap.js"));

var _pairs = _interopRequireDefault(__webpack_require__(/*! ./pairs */ "./node_modules/yaml/browser/dist/tags/yaml-1.1/pairs.js"));

var _set = _interopRequireDefault(__webpack_require__(/*! ./set */ "./node_modules/yaml/browser/dist/tags/yaml-1.1/set.js"));

var _timestamp = __webpack_require__(/*! ./timestamp */ "./node_modules/yaml/browser/dist/tags/yaml-1.1/timestamp.js");

var _default = _failsafe.default.concat([{
  identify: function identify(value) {
    return value == null;
  },
  createNode: function createNode(schema, value, ctx) {
    return ctx.wrapScalars ? new _Scalar.default(null) : null;
  },
  default: true,
  tag: 'tag:yaml.org,2002:null',
  test: /^(?:~|[Nn]ull|NULL)?$/,
  resolve: function resolve() {
    return null;
  },
  options: _options.nullOptions,
  stringify: function stringify() {
    return _options.nullOptions.nullStr;
  }
}, {
  identify: function identify(value) {
    return typeof value === 'boolean';
  },
  default: true,
  tag: 'tag:yaml.org,2002:bool',
  test: /^(?:Y|y|[Yy]es|YES|[Tt]rue|TRUE|[Oo]n|ON)$/,
  resolve: function resolve() {
    return true;
  },
  options: _options.boolOptions,
  stringify: function stringify(_ref) {
    var value = _ref.value;
    return value ? _options.boolOptions.trueStr : _options.boolOptions.falseStr;
  }
}, {
  identify: function identify(value) {
    return typeof value === 'boolean';
  },
  default: true,
  tag: 'tag:yaml.org,2002:bool',
  test: /^(?:N|n|[Nn]o|NO|[Ff]alse|FALSE|[Oo]ff|OFF)$/i,
  resolve: function resolve() {
    return false;
  },
  options: _options.boolOptions,
  stringify: function stringify(_ref2) {
    var value = _ref2.value;
    return value ? _options.boolOptions.trueStr : _options.boolOptions.falseStr;
  }
}, {
  identify: function identify(value) {
    return typeof value === 'number';
  },
  default: true,
  tag: 'tag:yaml.org,2002:int',
  format: 'BIN',
  test: /^0b([0-1_]+)$/,
  resolve: function resolve(str, bin) {
    return parseInt(bin.replace(/_/g, ''), 2);
  },
  stringify: function stringify(_ref3) {
    var value = _ref3.value;
    return '0b' + value.toString(2);
  }
}, {
  identify: function identify(value) {
    return typeof value === 'number';
  },
  default: true,
  tag: 'tag:yaml.org,2002:int',
  format: 'OCT',
  test: /^[-+]?0([0-7_]+)$/,
  resolve: function resolve(str, oct) {
    return parseInt(oct.replace(/_/g, ''), 8);
  },
  stringify: function stringify(_ref4) {
    var value = _ref4.value;
    return (value < 0 ? '-0' : '0') + value.toString(8);
  }
}, {
  identify: function identify(value) {
    return typeof value === 'number';
  },
  default: true,
  tag: 'tag:yaml.org,2002:int',
  test: /^[-+]?[0-9][0-9_]*$/,
  resolve: function resolve(str) {
    return parseInt(str.replace(/_/g, ''), 10);
  },
  stringify: _stringify.stringifyNumber
}, {
  identify: function identify(value) {
    return typeof value === 'number';
  },
  default: true,
  tag: 'tag:yaml.org,2002:int',
  format: 'HEX',
  test: /^0x([0-9a-fA-F_]+)$/,
  resolve: function resolve(str, hex) {
    return parseInt(hex.replace(/_/g, ''), 16);
  },
  stringify: function stringify(_ref5) {
    var value = _ref5.value;
    return (value < 0 ? '-0x' : '0x') + value.toString(16);
  }
}, {
  identify: function identify(value) {
    return typeof value === 'number';
  },
  default: true,
  tag: 'tag:yaml.org,2002:float',
  test: /^(?:[-+]?\.inf|(\.nan))$/i,
  resolve: function resolve(str, nan) {
    return nan ? NaN : str[0] === '-' ? Number.NEGATIVE_INFINITY : Number.POSITIVE_INFINITY;
  },
  stringify: _stringify.stringifyNumber
}, {
  identify: function identify(value) {
    return typeof value === 'number';
  },
  default: true,
  tag: 'tag:yaml.org,2002:float',
  format: 'EXP',
  test: /^[-+]?([0-9][0-9_]*)?(\.[0-9_]*)?[eE][-+]?[0-9]+$/,
  resolve: function resolve(str) {
    return parseFloat(str.replace(/_/g, ''));
  },
  stringify: function stringify(_ref6) {
    var value = _ref6.value;
    return Number(value).toExponential();
  }
}, {
  identify: function identify(value) {
    return typeof value === 'number';
  },
  default: true,
  tag: 'tag:yaml.org,2002:float',
  test: /^[-+]?(?:[0-9][0-9_]*)?\.([0-9_]*)$/,
  resolve: function resolve(str, frac) {
    var node = new _Scalar.default(parseFloat(str.replace(/_/g, '')));

    if (frac) {
      var f = frac.replace(/_/g, '');
      if (f[f.length - 1] === '0') node.minFractionDigits = f.length;
    }

    return node;
  },
  stringify: _stringify.stringifyNumber
}], _binary.default, _omap.default, _pairs.default, _set.default, _timestamp.intTime, _timestamp.floatTime, _timestamp.timestamp);

exports.default = _default;

/***/ }),

/***/ "./node_modules/yaml/browser/dist/tags/yaml-1.1/omap.js":
/*!**************************************************************!*\
  !*** ./node_modules/yaml/browser/dist/tags/yaml-1.1/omap.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.YAMLOMap = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _errors = __webpack_require__(/*! ../../errors */ "./node_modules/yaml/browser/dist/errors.js");

var _toJSON2 = _interopRequireDefault(__webpack_require__(/*! ../../toJSON */ "./node_modules/yaml/browser/dist/toJSON.js"));

var _Map = _interopRequireDefault(__webpack_require__(/*! ../../schema/Map */ "./node_modules/yaml/browser/dist/schema/Map.js"));

var _Pair = _interopRequireDefault(__webpack_require__(/*! ../../schema/Pair */ "./node_modules/yaml/browser/dist/schema/Pair.js"));

var _Scalar = _interopRequireDefault(__webpack_require__(/*! ../../schema/Scalar */ "./node_modules/yaml/browser/dist/schema/Scalar.js"));

var _Seq = _interopRequireDefault(__webpack_require__(/*! ../../schema/Seq */ "./node_modules/yaml/browser/dist/schema/Seq.js"));

var _pairs = __webpack_require__(/*! ./pairs */ "./node_modules/yaml/browser/dist/tags/yaml-1.1/pairs.js");

var YAMLOMap =
/*#__PURE__*/
function (_YAMLSeq) {
  (0, _inherits2.default)(YAMLOMap, _YAMLSeq);

  function YAMLOMap() {
    var _this;

    (0, _classCallCheck2.default)(this, YAMLOMap);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(YAMLOMap).call(this));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "add", _Map.default.prototype.add.bind((0, _assertThisInitialized2.default)(_this)));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "delete", _Map.default.prototype.delete.bind((0, _assertThisInitialized2.default)(_this)));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "get", _Map.default.prototype.get.bind((0, _assertThisInitialized2.default)(_this)));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "has", _Map.default.prototype.has.bind((0, _assertThisInitialized2.default)(_this)));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "set", _Map.default.prototype.set.bind((0, _assertThisInitialized2.default)(_this)));
    _this.tag = YAMLOMap.tag;
    return _this;
  }

  (0, _createClass2.default)(YAMLOMap, [{
    key: "toJSON",
    value: function toJSON(_, ctx) {
      var map = new Map();
      if (ctx && ctx.onCreate) ctx.onCreate(map);
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this.items[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var pair = _step.value;
          var key = void 0,
              value = void 0;

          if (pair instanceof _Pair.default) {
            key = (0, _toJSON2.default)(pair.key, '', ctx);
            value = (0, _toJSON2.default)(pair.value, key, ctx);
          } else {
            key = (0, _toJSON2.default)(pair, '', ctx);
          }

          if (map.has(key)) throw new Error('Ordered maps must not include duplicate keys');
          map.set(key, value);
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return != null) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      return map;
    }
  }]);
  return YAMLOMap;
}(_Seq.default);

exports.YAMLOMap = YAMLOMap;
(0, _defineProperty2.default)(YAMLOMap, "tag", 'tag:yaml.org,2002:omap');

function parseOMap(doc, cst) {
  var pairs = (0, _pairs.parsePairs)(doc, cst);
  var seenKeys = [];
  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = pairs.items[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var key = _step2.value.key;

      if (key instanceof _Scalar.default) {
        if (seenKeys.includes(key.value)) {
          var msg = 'Ordered maps must not include duplicate keys';
          throw new _errors.YAMLSemanticError(cst, msg);
        } else {
          seenKeys.push(key.value);
        }
      }
    }
  } catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
        _iterator2.return();
      }
    } finally {
      if (_didIteratorError2) {
        throw _iteratorError2;
      }
    }
  }

  return Object.assign(new YAMLOMap(), pairs);
}

function createOMap(schema, iterable, ctx) {
  var pairs = (0, _pairs.createPairs)(schema, iterable, ctx);
  var omap = new YAMLOMap();
  omap.items = pairs.items;
  return omap;
}

var _default = {
  identify: function identify(value) {
    return value instanceof Map;
  },
  nodeClass: YAMLOMap,
  default: false,
  tag: 'tag:yaml.org,2002:omap',
  resolve: parseOMap,
  createNode: createOMap
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/yaml/browser/dist/tags/yaml-1.1/pairs.js":
/*!***************************************************************!*\
  !*** ./node_modules/yaml/browser/dist/tags/yaml-1.1/pairs.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parsePairs = parsePairs;
exports.createPairs = createPairs;
exports.default = void 0;

var _errors = __webpack_require__(/*! ../../errors */ "./node_modules/yaml/browser/dist/errors.js");

var _Map = _interopRequireDefault(__webpack_require__(/*! ../../schema/Map */ "./node_modules/yaml/browser/dist/schema/Map.js"));

var _Pair = _interopRequireDefault(__webpack_require__(/*! ../../schema/Pair */ "./node_modules/yaml/browser/dist/schema/Pair.js"));

var _parseSeq = _interopRequireDefault(__webpack_require__(/*! ../../schema/parseSeq */ "./node_modules/yaml/browser/dist/schema/parseSeq.js"));

var _Seq = _interopRequireDefault(__webpack_require__(/*! ../../schema/Seq */ "./node_modules/yaml/browser/dist/schema/Seq.js"));

function parsePairs(doc, cst) {
  var seq = (0, _parseSeq.default)(doc, cst);

  for (var i = 0; i < seq.items.length; ++i) {
    var item = seq.items[i];
    if (item instanceof _Pair.default) continue;else if (item instanceof _Map.default) {
      if (item.items.length > 1) {
        var msg = 'Each pair must have its own sequence indicator';
        throw new _errors.YAMLSemanticError(cst, msg);
      }

      var pair = item.items[0] || new _Pair.default();
      if (item.commentBefore) pair.commentBefore = pair.commentBefore ? "".concat(item.commentBefore, "\n").concat(pair.commentBefore) : item.commentBefore;
      if (item.comment) pair.comment = pair.comment ? "".concat(item.comment, "\n").concat(pair.comment) : item.comment;
      item = pair;
    }
    seq.items[i] = item instanceof _Pair.default ? item : new _Pair.default(item);
  }

  return seq;
}

function createPairs(schema, iterable, ctx) {
  var pairs = new _Seq.default();
  pairs.tag = 'tag:yaml.org,2002:pairs';
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = iterable[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var it = _step.value;
      var key = void 0,
          value = void 0;

      if (Array.isArray(it)) {
        if (it.length === 2) {
          key = it[0];
          value = it[1];
        } else throw new TypeError("Expected [key, value] tuple: ".concat(it));
      } else if (it && it instanceof Object) {
        var keys = Object.keys(it);

        if (keys.length === 1) {
          key = keys[0];
          value = it[key];
        } else throw new TypeError("Expected { key: value } tuple: ".concat(it));
      } else {
        key = it;
      }

      var pair = schema.createPair(key, value, ctx);
      pairs.items.push(pair);
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return != null) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return pairs;
}

var _default = {
  default: false,
  tag: 'tag:yaml.org,2002:pairs',
  resolve: parsePairs,
  createNode: createPairs
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/yaml/browser/dist/tags/yaml-1.1/set.js":
/*!*************************************************************!*\
  !*** ./node_modules/yaml/browser/dist/tags/yaml-1.1/set.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.YAMLSet = void 0;

var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));

var _get2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/get */ "./node_modules/@babel/runtime/helpers/get.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _errors = __webpack_require__(/*! ../../errors */ "./node_modules/yaml/browser/dist/errors.js");

var _Map = _interopRequireWildcard(__webpack_require__(/*! ../../schema/Map */ "./node_modules/yaml/browser/dist/schema/Map.js"));

var _Pair = _interopRequireDefault(__webpack_require__(/*! ../../schema/Pair */ "./node_modules/yaml/browser/dist/schema/Pair.js"));

var _parseMap = _interopRequireDefault(__webpack_require__(/*! ../../schema/parseMap */ "./node_modules/yaml/browser/dist/schema/parseMap.js"));

var _Scalar = _interopRequireDefault(__webpack_require__(/*! ../../schema/Scalar */ "./node_modules/yaml/browser/dist/schema/Scalar.js"));

var YAMLSet =
/*#__PURE__*/
function (_YAMLMap) {
  (0, _inherits2.default)(YAMLSet, _YAMLMap);

  function YAMLSet() {
    var _this;

    (0, _classCallCheck2.default)(this, YAMLSet);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(YAMLSet).call(this));
    _this.tag = YAMLSet.tag;
    return _this;
  }

  (0, _createClass2.default)(YAMLSet, [{
    key: "add",
    value: function add(key) {
      var pair = key instanceof _Pair.default ? key : new _Pair.default(key);
      var prev = (0, _Map.findPair)(this.items, pair.key);
      if (!prev) this.items.push(pair);
    }
  }, {
    key: "get",
    value: function get(key, keepPair) {
      var pair = (0, _Map.findPair)(this.items, key);
      return !keepPair && pair instanceof _Pair.default ? pair.key instanceof _Scalar.default ? pair.key.value : pair.key : pair;
    }
  }, {
    key: "set",
    value: function set(key, value) {
      if (typeof value !== 'boolean') throw new Error("Expected boolean value for set(key, value) in a YAML set, not ".concat((0, _typeof2.default)(value)));
      var prev = (0, _Map.findPair)(this.items, key);

      if (prev && !value) {
        this.items.splice(this.items.indexOf(prev), 1);
      } else if (!prev && value) {
        this.items.push(new _Pair.default(key));
      }
    }
  }, {
    key: "toJSON",
    value: function toJSON(_, ctx) {
      return (0, _get2.default)((0, _getPrototypeOf2.default)(YAMLSet.prototype), "toJSON", this).call(this, _, ctx, Set);
    }
  }, {
    key: "toString",
    value: function toString(ctx, onComment, onChompKeep) {
      if (!ctx) return JSON.stringify(this);
      if (this.hasAllNullValues()) return (0, _get2.default)((0, _getPrototypeOf2.default)(YAMLSet.prototype), "toString", this).call(this, ctx, onComment, onChompKeep);else throw new Error('Set items must all have null values');
    }
  }]);
  return YAMLSet;
}(_Map.default);

exports.YAMLSet = YAMLSet;
(0, _defineProperty2.default)(YAMLSet, "tag", 'tag:yaml.org,2002:set');

function parseSet(doc, cst) {
  var map = (0, _parseMap.default)(doc, cst);
  if (!map.hasAllNullValues()) throw new _errors.YAMLSemanticError(cst, 'Set items must all have null values');
  return Object.assign(new YAMLSet(), map);
}

function createSet(schema, iterable, ctx) {
  var set = new YAMLSet();
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = iterable[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var value = _step.value;
      set.items.push(schema.createPair(value, null, ctx));
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return != null) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return set;
}

var _default = {
  identify: function identify(value) {
    return value instanceof Set;
  },
  nodeClass: YAMLSet,
  default: false,
  tag: 'tag:yaml.org,2002:set',
  resolve: parseSet,
  createNode: createSet
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/yaml/browser/dist/tags/yaml-1.1/timestamp.js":
/*!*******************************************************************!*\
  !*** ./node_modules/yaml/browser/dist/tags/yaml-1.1/timestamp.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.timestamp = exports.floatTime = exports.intTime = void 0;

var _stringify = __webpack_require__(/*! ../../stringify */ "./node_modules/yaml/browser/dist/stringify.js");

var parseSexagesimal = function parseSexagesimal(sign, parts) {
  var n = parts.split(':').reduce(function (n, p) {
    return n * 60 + Number(p);
  }, 0);
  return sign === '-' ? -n : n;
}; // hhhh:mm:ss.sss


var stringifySexagesimal = function stringifySexagesimal(_ref) {
  var value = _ref.value;
  if (isNaN(value) || !isFinite(value)) return (0, _stringify.stringifyNumber)(value);
  var sign = '';

  if (value < 0) {
    sign = '-';
    value = Math.abs(value);
  }

  var parts = [value % 60]; // seconds, including ms

  if (value < 60) {
    parts.unshift(0); // at least one : is required
  } else {
    value = Math.round((value - parts[0]) / 60);
    parts.unshift(value % 60); // minutes

    if (value >= 60) {
      value = Math.round((value - parts[0]) / 60);
      parts.unshift(value); // hours
    }
  }

  return sign + parts.map(function (n) {
    return n < 10 ? '0' + String(n) : String(n);
  }).join(':').replace(/000000\d*$/, '') // % 60 may introduce error
  ;
};

var intTime = {
  identify: function identify(value) {
    return typeof value === 'number';
  },
  default: true,
  tag: 'tag:yaml.org,2002:int',
  format: 'TIME',
  test: /^([-+]?)([0-9][0-9_]*(?::[0-5]?[0-9])+)$/,
  resolve: function resolve(str, sign, parts) {
    return parseSexagesimal(sign, parts.replace(/_/g, ''));
  },
  stringify: stringifySexagesimal
};
exports.intTime = intTime;
var floatTime = {
  identify: function identify(value) {
    return typeof value === 'number';
  },
  default: true,
  tag: 'tag:yaml.org,2002:float',
  format: 'TIME',
  test: /^([-+]?)([0-9][0-9_]*(?::[0-5]?[0-9])+\.[0-9_]*)$/,
  resolve: function resolve(str, sign, parts) {
    return parseSexagesimal(sign, parts.replace(/_/g, ''));
  },
  stringify: stringifySexagesimal
};
exports.floatTime = floatTime;
var timestamp = {
  identify: function identify(value) {
    return value instanceof Date;
  },
  default: true,
  tag: 'tag:yaml.org,2002:timestamp',
  // If the time zone is omitted, the timestamp is assumed to be specified in UTC. The time part
  // may be omitted altogether, resulting in a date format. In such a case, the time part is
  // assumed to be 00:00:00Z (start of day, UTC).
  test: RegExp('^(?:' + '([0-9]{4})-([0-9]{1,2})-([0-9]{1,2})' + // YYYY-Mm-Dd
  '(?:(?:t|T|[ \\t]+)' + // t | T | whitespace
  '([0-9]{1,2}):([0-9]{1,2}):([0-9]{1,2}(\\.[0-9]+)?)' + // Hh:Mm:Ss(.ss)?
  '(?:[ \\t]*(Z|[-+][012]?[0-9](?::[0-9]{2})?))?' + // Z | +5 | -03:30
  ')?' + ')$'),
  resolve: function resolve(str, year, month, day, hour, minute, second, millisec, tz) {
    if (millisec) millisec = (millisec + '00').substr(1, 3);
    var date = Date.UTC(year, month - 1, day, hour || 0, minute || 0, second || 0, millisec || 0);

    if (tz && tz !== 'Z') {
      var d = parseSexagesimal(tz[0], tz.slice(1));
      if (Math.abs(d) < 30) d *= 60;
      date -= 60000 * d;
    }

    return new Date(date);
  },
  stringify: function stringify(_ref2) {
    var value = _ref2.value;
    return value.toISOString().replace(/((T00:00)?:00)?\.000Z$/, '');
  }
};
exports.timestamp = timestamp;

/***/ }),

/***/ "./node_modules/yaml/browser/dist/toJSON.js":
/*!**************************************************!*\
  !*** ./node_modules/yaml/browser/dist/toJSON.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = toJSON;

function toJSON(value, arg, ctx) {
  if (Array.isArray(value)) return value.map(function (v, i) {
    return toJSON(v, String(i), ctx);
  });

  if (value && typeof value.toJSON === 'function') {
    var anchor = ctx && ctx.anchors && ctx.anchors.find(function (a) {
      return a.node === value;
    });
    if (anchor) ctx.onCreate = function (res) {
      anchor.res = res;
      delete ctx.onCreate;
    };
    var res = value.toJSON(arg, ctx);
    if (anchor && ctx.onCreate) ctx.onCreate(res);
    return res;
  }

  return value;
}

/***/ }),

/***/ "./node_modules/yaml/browser/dist/warnings.js":
/*!****************************************************!*\
  !*** ./node_modules/yaml/browser/dist/warnings.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.warn = warn;
exports.warnFileDeprecation = warnFileDeprecation;
exports.warnOptionDeprecation = warnOptionDeprecation;

/* global global, console */
function warn(warning, type) {
  if (global && global._YAML_SILENCE_WARNINGS) return;

  var _ref = global && global.process,
      emitWarning = _ref.emitWarning; // This will throw in Jest if `warning` is an Error instance due to
  // https://github.com/facebook/jest/issues/2549


  if (emitWarning) emitWarning(warning, type);else {
    // eslint-disable-next-line no-console
    console.warn(type ? "".concat(type, ": ").concat(warning) : warning);
  }
}

function warnFileDeprecation(filename) {
  if (global && global._YAML_SILENCE_DEPRECATION_WARNINGS) return;
  var path = filename.replace(/.*yaml[/\\]/i, '').replace(/\.js$/, '').replace(/\\/g, '/');
  warn("The endpoint 'yaml/".concat(path, "' will be removed in a future release."), 'DeprecationWarning');
}

var warned = {};

function warnOptionDeprecation(name, alternative) {
  if (global && global._YAML_SILENCE_DEPRECATION_WARNINGS) return;
  if (warned[name]) return;
  warned[name] = true;
  var msg = "The option '".concat(name, "' will be removed in a future release");
  msg += alternative ? ", use '".concat(alternative, "' instead.") : '.';
  warn(msg, 'DeprecationWarning');
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/yaml/browser/index.js":
/*!********************************************!*\
  !*** ./node_modules/yaml/browser/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist */ "./node_modules/yaml/browser/dist/index.js").default


/***/ }),

/***/ "./src/customStore/entityComponent/component.ts":
/*!******************************************************!*\
  !*** ./src/customStore/entityComponent/component.ts ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const nanoid = __webpack_require__(/*! nanoid/non-secure */ "./node_modules/nanoid/non-secure/index.js");
class Component {
    constructor(store, data) {
        this.dataDefault = {
            id: nanoid(),
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
exports.Component = Component;
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
exports.TransformComponent = TransformComponent;


/***/ }),

/***/ "./src/customStore/entityComponent/entity.ts":
/*!***************************************************!*\
  !*** ./src/customStore/entityComponent/entity.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const nanoid = __webpack_require__(/*! nanoid/non-secure */ "./node_modules/nanoid/non-secure/index.js");
class Entity {
    constructor(store, data) {
        this.dataDefault = {
            id: nanoid(),
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
        if (parent.childIds.indexOf((x) => x === this.data.id) !== -1)
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
exports.Entity = Entity;
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


/***/ }),

/***/ "./src/customStore/entityComponent/index.ts":
/*!**************************************************!*\
  !*** ./src/customStore/entityComponent/index.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./entity */ "./src/customStore/entityComponent/entity.ts"));
__export(__webpack_require__(/*! ./component */ "./src/customStore/entityComponent/component.ts"));


/***/ }),

/***/ "./src/helpers/check.ts":
/*!******************************!*\
  !*** ./src/helpers/check.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
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
exports.pathWalk = pathWalk;
function clone(obj) {
    return JSON.parse(JSON.stringify(obj));
}
exports.clone = clone;


/***/ }),

/***/ "./src/helpers/time.ts":
/*!*****************************!*\
  !*** ./src/helpers/time.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {
Object.defineProperty(exports, "__esModule", { value: true });
function now() {
    if (typeof window !== "undefined") {
        return Math.round(performance.now());
    }
    else {
        return process.hrtime()[1];
    }
}
exports.now = now;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const kaaya_1 = __webpack_require__(/*! ./kaaya */ "./src/kaaya.ts");
exports.default = new kaaya_1.Kaaya();


/***/ }),

/***/ "./src/kaaya.ts":
/*!**********************!*\
  !*** ./src/kaaya.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const js_ini_1 = __webpack_require__(/*! js-ini */ "./node_modules/js-ini/lib/index.js");
const yaml_1 = __webpack_require__(/*! yaml */ "./node_modules/yaml/browser/index.js");
const entityComponent_1 = __webpack_require__(/*! ./customStore/entityComponent */ "./src/customStore/entityComponent/index.ts");
const stores_1 = __webpack_require__(/*! ./stores */ "./src/stores/index.ts");
class Kaaya {
    /**
     * Create a Base Store (basic store without helpers or predefined structure)
     *
     * @param {*} [data={}]
     * @returns {BaseStore}
     */
    createRawStore(data = {}) {
        return new stores_1.BaseStore(data);
    }
    //#region Key Store
    /**
     * Create a Keystore
     *
     * @param {*} [data={}]
     * @returns {KeyStore}
     */
    createKeyStore(data = {}) {
        return new stores_1.KeyStore(data);
    }
    /**
     * Create a Keystore from a configuration file (.ini)
     *
     * @param {string} data
     * @memberof Kaaya
     */
    createKeyStoreFromINI(data) {
        return this.createKeyStore(js_ini_1.parse(data));
    }
    /**
     * Create a Keystore from a configuration file (.ini)
     *
     * @param {string} data
     * @memberof Kaaya
     */
    createKeyStoreFromYAML(data) {
        return this.createKeyStore(yaml_1.parse(data));
    }
    /**
     * Create a Keystore from a configuration file (.json)
     *
     * @param {string} data
     * @memberof Kaaya
     */
    createKeyStoreFromJSON(data) {
        return this.createKeyStore(JSON.parse(data));
    }
    //#endregion KeyStore
    //#region Table Store
    createTableStore(data = {}) {
        return new stores_1.TableStore(data);
    }
    createTableStoreFromYAML(data) {
        return this.createTableStore(yaml_1.parse(data));
    }
    createTableStoreFromJSON(data) {
        return this.createTableStore(JSON.parse(data));
    }
    //#endregion Table Store
    createEntityStore(data = {}) {
        return new stores_1.EntityStore(data);
    }
    createEntityComponentStore(data = {}) {
        const store = this.createEntityStore(data);
        store.register("Entity", (store, data) => new entityComponent_1.Entity(store, data));
        store.register("Transform", (store, data) => new entityComponent_1.TransformComponent(store, data));
        return store;
    }
}
exports.Kaaya = Kaaya;


/***/ }),

/***/ "./src/stores/baseStore.ts":
/*!*********************************!*\
  !*** ./src/stores/baseStore.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const dataStore_1 = __webpack_require__(/*! ./dataStore */ "./src/stores/dataStore.ts");
const onChange = __webpack_require__(/*! on-change */ "./node_modules/on-change/index.js");
class BaseStore {
    constructor(data = {}) {
        this._originalData = data;
        this._store = new dataStore_1.DataStore();
        this._updatedObj = [this._originalData];
        this._store.evtCreate.attach((mut) => {
            this._store.applyMutation(this._updatedObj, mut);
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
        return this._store.getHistory();
    }
    get data() {
        return this._data;
    }
    get serialize() {
        return this._originalData;
    }
    transactionStart(meta = {}) {
        this._store.transactionStart(meta);
    }
    transactionEnd() {
        this._store.transactionEnd();
    }
    observe(cb) {
        this._store.evtApply.attach(cb);
    }
    sync(history) {
        this._store.sync(this._updatedObj, history);
    }
    instantiateProxy() {
        const proxy = JSON.parse(JSON.stringify(this._originalData));
        this._updatedObj.push(proxy);
        return proxy;
    }
    undo() {
        const mutId = this._store.nextUndoId;
        if (mutId !== -1)
            this._store.createMutation("undo", "", { id: mutId });
        // console.log('undo', mutId, this.data);
    }
    redo() {
        const mutId = this._store.nextRedoId;
        if (mutId !== -1)
            this._store.createMutation("redo", "", { id: mutId });
        // console.log('redo', mutId, this.data);
    }
}
exports.BaseStore = BaseStore;


/***/ }),

/***/ "./src/stores/dataStore.ts":
/*!*********************************!*\
  !*** ./src/stores/dataStore.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const nanoid = __webpack_require__(/*! nanoid/non-secure */ "./node_modules/nanoid/non-secure/index.js");
const time_1 = __webpack_require__(/*! ../helpers/time */ "./src/helpers/time.ts");
const check_1 = __webpack_require__(/*! ../helpers/check */ "./src/helpers/check.ts");
const ts_events_1 = __webpack_require__(/*! ts-events */ "./node_modules/ts-events/dist/lib/index.js");
class DataStore {
    constructor() {
        this.mutations = {};
        // transaction
        this.transactionMeta = undefined;
        this.transactionHistory = [];
        // undo / redo
        this.lastUndoIndex = -1;
        this.undoBuffer = [];
        this.id = nanoid();
        this.evtCreate = new ts_events_1.SyncEvent();
        this.evtApply = new ts_events_1.SyncEvent();
        this.history = [];
        this.historyIds = new Set();
        this.undoMap = new Map();
        this.mutations.add = (obj, mut, forward = true) => {
            const { root, property } = check_1.pathWalk(obj, mut.path);
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
            const { root, property } = check_1.pathWalk(obj, mut.path);
            if (forward) {
                root[property] = JSON.parse(JSON.stringify(mut.data.value));
            }
            else {
                root[property] = JSON.parse(JSON.stringify(mut.data.old));
            }
            this.addHistory(mut);
        };
        this.mutations.delete = (obj, mut, forward = true) => {
            const { root, property } = check_1.pathWalk(obj, mut.path);
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
                    this.applyMutation([obj], subMut);
                    this.historyIds.add(subMut.id);
                }
                else {
                    if (!this.historyIds.has(subMut.id))
                        continue;
                    this.revertMutation([obj], subMut);
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
            this.revertMutation([obj], target);
            this.undoBuffer.push(target.id);
            this.addHistory(mut);
            this.historyIds.add(mut.id);
        };
        this.mutations.redo = (obj, mut) => {
            const index = this.history.findIndex(x => x.id === mut.data.id);
            const target = this.history[index];
            this.lastUndoIndex = index + 1;
            this.applyMutation([obj], target);
            const index2 = this.undoBuffer.indexOf(target.id);
            if (index2 != -1)
                this.undoBuffer.splice(index2, 1);
            this.historyIds.add(mut.id);
            this.addHistory(mut);
        };
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
    transactionEnd() {
        this.createMutation("transaction", "", {
            meta: this.transactionMeta,
            history: this.transactionHistory
        });
    }
    createMutation(name, path, data) {
        const mut = { id: nanoid(), time: time_1.now(), name, path, data };
        this.evtCreate.post(mut);
        return mut;
    }
    registerMutation(name, cb) {
        this.mutations[name] = cb;
    }
    revertMutation(obj, mut) {
        if (!this.mutations[mut.name])
            throw new Error(`Unknown mutation ${mut.name}`);
        for (const o of obj) {
            this.mutations[mut.name](o, mut, false);
        }
        this.historyIds.delete(mut.id);
        this.evtApply.post(mut);
    }
    applyMutation(obj, mut) {
        if (!this.mutations[mut.name])
            throw new Error(`Unknown mutation ${mut.name}`);
        if (this.historyIds.has(mut.id))
            return;
        for (const o of obj) {
            this.mutations[mut.name](o, mut);
        }
        this.historyIds.add(mut.id);
        this.evtApply.post(mut);
    }
    sync(obj, history) {
        for (const mut of history) {
            this.applyMutation(obj, mut);
        }
    }
    getHistory() {
        return this.history;
    }
}
exports.DataStore = DataStore;


/***/ }),

/***/ "./src/stores/entityStore.ts":
/*!***********************************!*\
  !*** ./src/stores/entityStore.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const baseStore_1 = __webpack_require__(/*! ./baseStore */ "./src/stores/baseStore.ts");
const nanoid = __webpack_require__(/*! nanoid/non-secure */ "./node_modules/nanoid/non-secure/index.js");
const check_1 = __webpack_require__(/*! ../helpers/check */ "./src/helpers/check.ts");
class EntityStore extends baseStore_1.BaseStore {
    constructor(data = {}) {
        super(data);
        this.factory = new Map();
        this.instances = new WeakMap();
        this.created = new Set();
        this._store.registerMutation("create", (obj, mut, _forward) => {
            let instance = undefined;
            // only instantiate object on real not proxy
            if (obj === this._originalData) {
                const init = this.factory.get(mut.data.classname);
                if (!init)
                    throw new Error("Cant find factory method for " + mut.data.classname);
                instance = init(this, mut.data);
                this._originalData[mut.path] = instance.data;
                this.instances.set(instance.data, instance);
            }
            else {
                obj[mut.path] = check_1.clone(this.data[mut.path]);
            }
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
        const id = data.id ? data.id : nanoid(6);
        data.id = id;
        this.created.add(id);
        this._store.createMutation("create", id, Object.assign({ classname }, data));
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
exports.EntityStore = EntityStore;


/***/ }),

/***/ "./src/stores/index.ts":
/*!*****************************!*\
  !*** ./src/stores/index.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./baseStore */ "./src/stores/baseStore.ts"));
__export(__webpack_require__(/*! ./dataStore */ "./src/stores/dataStore.ts"));
__export(__webpack_require__(/*! ./entityStore */ "./src/stores/entityStore.ts"));
__export(__webpack_require__(/*! ./keyStore */ "./src/stores/keyStore.ts"));
__export(__webpack_require__(/*! ./tableStore */ "./src/stores/tableStore.ts"));


/***/ }),

/***/ "./src/stores/keyStore.ts":
/*!********************************!*\
  !*** ./src/stores/keyStore.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const baseStore_1 = __webpack_require__(/*! ./baseStore */ "./src/stores/baseStore.ts");
const js_ini_1 = __webpack_require__(/*! js-ini */ "./node_modules/js-ini/lib/index.js");
const yaml_1 = __webpack_require__(/*! yaml */ "./node_modules/yaml/browser/index.js");
class KeyStore extends baseStore_1.BaseStore {
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
    stringifyJSON() {
        return JSON.stringify(this.data, null, 2);
    }
    stringifyINI() {
        return js_ini_1.stringify(this.data);
    }
    stringifyYAML() {
        return yaml_1.stringify(this.data);
    }
}
exports.KeyStore = KeyStore;


/***/ }),

/***/ "./src/stores/tableStore.ts":
/*!**********************************!*\
  !*** ./src/stores/tableStore.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const baseStore_1 = __webpack_require__(/*! ./baseStore */ "./src/stores/baseStore.ts");
const yaml_1 = __webpack_require__(/*! yaml */ "./node_modules/yaml/browser/index.js");
const nanoid = __webpack_require__(/*! nanoid/non-secure */ "./node_modules/nanoid/non-secure/index.js");
const check_1 = __webpack_require__(/*! ../helpers/check */ "./src/helpers/check.ts");
class TableStore extends baseStore_1.BaseStore {
    constructor(entries = {}) {
        const data = check_1.clone(entries);
        for (const sheetId in entries) {
            data[sheetId] = {
                id: "id",
                rows: [],
                values: {}
            };
            for (const row of entries[sheetId]) {
                const id = data[sheetId].id;
                const uid = row[id] ? row[id] : nanoid(4);
                row[id] = uid;
                data[sheetId].rows.push(uid);
                data[sheetId].values[uid] = row;
            }
        }
        super(data);
    }
    getValues() {
        const data = check_1.clone(this.serialize);
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
        const id = value[data.id] ? value[data.id] : nanoid(4);
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
    stringifyJSON() {
        return JSON.stringify(this.getValues(), null, 2);
    }
    stringifyYAML() {
        return yaml_1.stringify(this.getValues());
    }
}
exports.TableStore = TableStore;


/***/ })

/******/ });
});
//# sourceMappingURL=kaaya.js.map 