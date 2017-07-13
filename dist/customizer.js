(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("Customizer", [], factory);
	else if(typeof exports === 'object')
		exports["Customizer"] = factory();
	else
		root["Customizer"] = factory();
})(this, function() {
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _i18n = __webpack_require__(/*! ./i18n */ 1);\n\nvar _i18n2 = _interopRequireDefault(_i18n);\n\nvar _observator = __webpack_require__(/*! ./observator */ 2);\n\nvar _observator2 = _interopRequireDefault(_observator);\n\nvar _styles = __webpack_require__(/*! ./styles */ 3);\n\nvar _styles2 = _interopRequireDefault(_styles);\n\nvar _text_nodes = __webpack_require__(/*! ./text_nodes */ 4);\n\nvar _text_nodes2 = _interopRequireDefault(_text_nodes);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar customizable = null;\n\nvar textNodes = null;\n\nvar checkStringsProvider = function checkStringsProvider(stringsProvider) {\n  if (!stringsProvider || stringsProvider.getString === undefined) {\n    throw TypeError('stringsProvider debe implementar el método getString');\n  }\n};\n\nexports.default = {\n  init: function init(stringsProvider, config) {\n    var Observable = void 0;\n    var defaults = { 'language': 'es_ES', 'skin': 'styles' };\n\n    customizable = config || defaults;\n    checkStringsProvider(stringsProvider);\n\n    var lang = new _i18n2.default(stringsProvider, customizable.language);\n    var styles = document.querySelector('link#skin');\n\n    Observable = (0, _observator2.default)(customizable);\n    textNodes = new _text_nodes2.default(document.body, lang, Observable);\n\n    Observable.observe('language', function () {\n      lang.language = customizable.language;\n    });\n\n    _styles2.default.syncStyles(styles, Observable);\n    textNodes.watch();\n  },\n  changeLanguage: function changeLanguage(lang) {\n    customizable.language = lang;\n  },\n  changeSkin: function changeSkin(skin) {\n    customizable.skin = skin;\n  },\n  reset: function reset() {\n    textNodes.reset();\n  }\n};\nmodule.exports = exports['default'];//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvaW5kZXguanM/MWZkZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSTE4biBmcm9tICcuL2kxOG4nO1xuaW1wb3J0IE9ic2VydmF0b3IgZnJvbSAnLi9vYnNlcnZhdG9yJztcbmltcG9ydCBTdHlsZXMgZnJvbSAnLi9zdHlsZXMnO1xuaW1wb3J0IFRleHROb2RlcyBmcm9tICcuL3RleHRfbm9kZXMnO1xuXG5sZXQgY3VzdG9taXphYmxlID0gbnVsbDtcblxubGV0IHRleHROb2RlcyA9IG51bGw7XG5cbmNvbnN0IGNoZWNrU3RyaW5nc1Byb3ZpZGVyID0gKHN0cmluZ3NQcm92aWRlcikgPT4ge1xuICBpZiAoIXN0cmluZ3NQcm92aWRlciB8fCBzdHJpbmdzUHJvdmlkZXIuZ2V0U3RyaW5nID09PSB1bmRlZmluZWQpIHtcbiAgICB0aHJvdyBUeXBlRXJyb3IoJ3N0cmluZ3NQcm92aWRlciBkZWJlIGltcGxlbWVudGFyIGVsIG3DqXRvZG8gZ2V0U3RyaW5nJyk7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgaW5pdChzdHJpbmdzUHJvdmlkZXIsIGNvbmZpZykge1xuICAgIGxldCBPYnNlcnZhYmxlO1xuICAgIGNvbnN0IGRlZmF1bHRzID0geyAnbGFuZ3VhZ2UnOiAnZXNfRVMnLCAnc2tpbic6ICdzdHlsZXMnIH07XG5cbiAgICBjdXN0b21pemFibGUgPSBjb25maWcgfHwgZGVmYXVsdHM7XG4gICAgY2hlY2tTdHJpbmdzUHJvdmlkZXIoc3RyaW5nc1Byb3ZpZGVyKTtcblxuICAgIGNvbnN0IGxhbmcgPSBuZXcgSTE4bihzdHJpbmdzUHJvdmlkZXIsIGN1c3RvbWl6YWJsZS5sYW5ndWFnZSk7XG4gICAgY29uc3Qgc3R5bGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbGluayNza2luJyk7XG5cbiAgICBPYnNlcnZhYmxlID0gT2JzZXJ2YXRvcihjdXN0b21pemFibGUpO1xuICAgIHRleHROb2RlcyA9IG5ldyBUZXh0Tm9kZXMoZG9jdW1lbnQuYm9keSwgbGFuZywgT2JzZXJ2YWJsZSk7XG5cbiAgICBPYnNlcnZhYmxlLm9ic2VydmUoJ2xhbmd1YWdlJywgKCkgPT4geyBsYW5nLmxhbmd1YWdlID0gY3VzdG9taXphYmxlLmxhbmd1YWdlOyB9KTtcblxuICAgIFN0eWxlcy5zeW5jU3R5bGVzKHN0eWxlcywgT2JzZXJ2YWJsZSk7XG4gICAgdGV4dE5vZGVzLndhdGNoKCk7XG4gIH0sXG5cbiAgY2hhbmdlTGFuZ3VhZ2UobGFuZykge1xuICAgIGN1c3RvbWl6YWJsZS5sYW5ndWFnZSA9IGxhbmc7XG4gIH0sXG5cbiAgY2hhbmdlU2tpbihza2luKSB7XG4gICAgY3VzdG9taXphYmxlLnNraW4gPSBza2luO1xuICB9LFxuXG4gIHJlc2V0KCkge1xuICAgIHRleHROb2Rlcy5yZXNldCgpO1xuICB9XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9pbmRleC5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQTlCQTtBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!*********************!*\
  !*** ./src/i18n.js ***!
  \*********************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar LANG_DEFAULT = 'es_ES';\n\nvar I18n = function () {\n  function I18n(stringsProvider, language) {\n    _classCallCheck(this, I18n);\n\n    this._strings = stringsProvider;\n    this._language = language;\n  }\n\n  _createClass(I18n, [{\n    key: 't',\n    value: function t(key) {\n      return this._strings.getString(this._language || LANG_DEFAULT, key);\n    }\n  }, {\n    key: 'language',\n    get: function get() {\n      return this._language;\n    },\n    set: function set(language) {\n      this._language = language;\n    }\n  }]);\n\n  return I18n;\n}();\n\nexports.default = I18n;\nmodule.exports = exports['default'];//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvaTE4bi5qcz8xZThkIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IExBTkdfREVGQVVMVCA9ICdlc19FUyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEkxOG4ge1xuICBjb25zdHJ1Y3RvcihzdHJpbmdzUHJvdmlkZXIsIGxhbmd1YWdlKSB7XG4gICAgdGhpcy5fc3RyaW5ncyA9IHN0cmluZ3NQcm92aWRlcjtcbiAgICB0aGlzLl9sYW5ndWFnZSA9IGxhbmd1YWdlO1xuICB9XG5cbiAgZ2V0IGxhbmd1YWdlKCkge1xuICAgIHJldHVybiB0aGlzLl9sYW5ndWFnZTtcbiAgfVxuXG4gIHNldCBsYW5ndWFnZShsYW5ndWFnZSkge1xuICAgIHRoaXMuX2xhbmd1YWdlID0gbGFuZ3VhZ2U7XG4gIH1cblxuICB0KGtleSkge1xuICAgIHJldHVybiB0aGlzLl9zdHJpbmdzLmdldFN0cmluZyh0aGlzLl9sYW5ndWFnZSB8fCBMQU5HX0RFRkFVTFQsIGtleSk7XG4gIH1cbn1cblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9pMThuLmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7OztBQVNBO0FBQ0E7QUFDQTs7O0FBVkE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOzs7Ozs7QUFaQTtBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/*!***************************!*\
  !*** ./src/observator.js ***!
  \***************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nexports.default = function (dataObj) {\n  var signals = {};\n\n  function observe(property, signalHandler) {\n    if (!signals[property]) signals[property] = [];\n\n    signals[property].push(signalHandler);\n  }\n\n  function notify(signal) {\n    if (!signals[signal] || signals[signal].length < 1) return;\n\n    signals[signal].forEach(function (signalHandler) {\n      return signalHandler();\n    });\n  }\n\n  function makeReactive(obj, key) {\n    var val = obj[key];\n\n    Object.defineProperty(obj, key, {\n      get: function get() {\n        return val;\n      },\n      set: function set(newVal) {\n        val = newVal;\n        notify(key);\n      }\n    });\n  }\n\n  function observeData(obj) {\n    for (var key in obj) {\n      if (obj.hasOwnProperty(key)) {\n        makeReactive(obj, key);\n      }\n    }\n  }\n\n  observeData(dataObj);\n\n  return {\n    data: dataObj,\n    observe: observe,\n    notify: notify\n  };\n};\n\n;\nmodule.exports = exports[\"default\"];//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvb2JzZXJ2YXRvci5qcz8yYTYxIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChkYXRhT2JqKSB7XG4gIGxldCBzaWduYWxzID0ge307XG5cbiAgZnVuY3Rpb24gb2JzZXJ2ZShwcm9wZXJ0eSwgc2lnbmFsSGFuZGxlcikge1xuICAgIGlmICghc2lnbmFsc1twcm9wZXJ0eV0pIHNpZ25hbHNbcHJvcGVydHldID0gW107XG5cbiAgICBzaWduYWxzW3Byb3BlcnR5XS5wdXNoKHNpZ25hbEhhbmRsZXIpO1xuICB9XG5cbiAgZnVuY3Rpb24gbm90aWZ5KHNpZ25hbCkge1xuICAgIGlmICghc2lnbmFsc1tzaWduYWxdIHx8IHNpZ25hbHNbc2lnbmFsXS5sZW5ndGggPCAxKSByZXR1cm47XG5cbiAgICBzaWduYWxzW3NpZ25hbF0uZm9yRWFjaCgoc2lnbmFsSGFuZGxlcikgPT4gc2lnbmFsSGFuZGxlcigpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG1ha2VSZWFjdGl2ZShvYmosIGtleSkge1xuICAgIGxldCB2YWwgPSBvYmpba2V5XTtcblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgZ2V0KCkge1xuICAgICAgICByZXR1cm4gdmFsO1xuICAgICAgfSxcbiAgICAgIHNldChuZXdWYWwpIHtcbiAgICAgICAgdmFsID0gbmV3VmFsO1xuICAgICAgICBub3RpZnkoa2V5KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG9ic2VydmVEYXRhKG9iaikge1xuICAgIGZvciAobGV0IGtleSBpbiBvYmopIHtcbiAgICAgIGlmIChvYmouaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICBtYWtlUmVhY3RpdmUob2JqLCBrZXkpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG9ic2VydmVEYXRhKGRhdGFPYmopO1xuXG4gIHJldHVybiB7XG4gICAgZGF0YTogZGF0YU9iaixcbiAgICBvYnNlcnZlLFxuICAgIG5vdGlmeVxuICB9O1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvb2JzZXJ2YXRvci5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFQQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBREE7QSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///2\n");

/***/ }),
/* 3 */
/*!***********************!*\
  !*** ./src/styles.js ***!
  \***********************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = {\n  replaceStyle: function replaceStyle(stylesLink, style) {\n    stylesLink.setAttribute('href', stylesLink.getAttribute('href').replace(/(\\/css\\/)(\\w+)()/g, '$1' + style + '$3'));\n  },\n  syncStyles: function syncStyles(styles, observable) {\n    var _this = this;\n\n    this.replaceStyle(styles, observable.data.skin);\n    observable.observe('skin', function () {\n      _this.replaceStyle(styles, observable.data.skin);\n    });\n  }\n};\nmodule.exports = exports['default'];//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvc3R5bGVzLmpzPzY1YzEiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQge1xuICByZXBsYWNlU3R5bGUoc3R5bGVzTGluaywgc3R5bGUpIHtcbiAgICBzdHlsZXNMaW5rLnNldEF0dHJpYnV0ZSgnaHJlZicsXG4gICAgICBzdHlsZXNMaW5rLmdldEF0dHJpYnV0ZSgnaHJlZicpLnJlcGxhY2UoLyhcXC9jc3NcXC8pKFxcdyspKCkvZywgYCQxJHtzdHlsZX0kM2ApKTtcbiAgfSxcblxuICBzeW5jU3R5bGVzKHN0eWxlcywgb2JzZXJ2YWJsZSkge1xuICAgIHRoaXMucmVwbGFjZVN0eWxlKHN0eWxlcywgb2JzZXJ2YWJsZS5kYXRhLnNraW4pO1xuICAgIG9ic2VydmFibGUub2JzZXJ2ZSgnc2tpbicsICgpID0+IHtcbiAgICAgIHRoaXMucmVwbGFjZVN0eWxlKHN0eWxlcywgb2JzZXJ2YWJsZS5kYXRhLnNraW4pO1xuICAgIH0pO1xuICB9XG59O1xuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL3N0eWxlcy5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFYQTtBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///3\n");

/***/ }),
/* 4 */
/*!***************************!*\
  !*** ./src/text_nodes.js ***!
  \***************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar ATTR_NAME = 'data-translate';\n\nfunction replaceText(node, text) {\n  node.textContent = text || node.textContent;\n}\n\nfunction syncNodeText(node, observable, property, textGetter) {\n  replaceText(node, textGetter(property));\n  observable.observe('language', function callback() {\n    replaceText(node, textGetter(property));\n  });\n}\n\nvar TextNodes = function () {\n  function TextNodes(parent, i18n, observable) {\n    _classCallCheck(this, TextNodes);\n\n    this.parent = parent;\n    this.i18n = i18n;\n    this.observable = observable;\n    this.nodes = [];\n  }\n\n  _createClass(TextNodes, [{\n    key: 'watch',\n    value: function watch() {\n      var _this = this;\n\n      this.nodes = this.parent.querySelectorAll('[' + ATTR_NAME + ']:not([' + ATTR_NAME + '=\"\"])');\n\n      this.nodes.forEach(function (textNode) {\n        syncNodeText(textNode, _this.observable, textNode.attributes['' + ATTR_NAME].value, _this.i18n.t.bind(_this.i18n));\n      });\n    }\n  }, {\n    key: 'reset',\n    value: function reset() {\n      this.nodes = [];\n    }\n  }]);\n\n  return TextNodes;\n}();\n\nexports.default = TextNodes;\n;\nmodule.exports = exports['default'];//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvdGV4dF9ub2Rlcy5qcz9hMTJhIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IEFUVFJfTkFNRSA9ICdkYXRhLXRyYW5zbGF0ZSc7XG5cbmZ1bmN0aW9uIHJlcGxhY2VUZXh0KG5vZGUsIHRleHQpIHtcbiAgbm9kZS50ZXh0Q29udGVudCA9IHRleHQgfHwgbm9kZS50ZXh0Q29udGVudDtcbn1cblxuZnVuY3Rpb24gc3luY05vZGVUZXh0KG5vZGUsIG9ic2VydmFibGUsIHByb3BlcnR5LCB0ZXh0R2V0dGVyKSB7XG4gIHJlcGxhY2VUZXh0KG5vZGUsIHRleHRHZXR0ZXIocHJvcGVydHkpKTtcbiAgb2JzZXJ2YWJsZS5vYnNlcnZlKCdsYW5ndWFnZScsIGZ1bmN0aW9uIGNhbGxiYWNrKCkge1xuICAgIHJlcGxhY2VUZXh0KG5vZGUsIHRleHRHZXR0ZXIocHJvcGVydHkpKTtcbiAgfSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRleHROb2RlcyB7XG4gIGNvbnN0cnVjdG9yKHBhcmVudCwgaTE4biwgb2JzZXJ2YWJsZSkge1xuICAgIHRoaXMucGFyZW50ID0gcGFyZW50O1xuICAgIHRoaXMuaTE4biA9IGkxOG47XG4gICAgdGhpcy5vYnNlcnZhYmxlID0gb2JzZXJ2YWJsZTtcbiAgICB0aGlzLm5vZGVzID0gW107XG4gIH1cblxuICB3YXRjaCgpIHtcbiAgICB0aGlzLm5vZGVzID0gdGhpcy5wYXJlbnQucXVlcnlTZWxlY3RvckFsbChgWyR7QVRUUl9OQU1FfV06bm90KFske0FUVFJfTkFNRX09XCJcIl0pYCk7XG5cbiAgICB0aGlzLm5vZGVzLmZvckVhY2goKHRleHROb2RlKSA9PiB7XG4gICAgICBzeW5jTm9kZVRleHQodGV4dE5vZGUsIHRoaXMub2JzZXJ2YWJsZSwgdGV4dE5vZGUuYXR0cmlidXRlc1tgJHtBVFRSX05BTUV9YF0udmFsdWUsIHRoaXMuaTE4bi50LmJpbmQodGhpcy5pMThuKSk7XG4gICAgfSk7XG4gIH1cblxuICByZXNldCgpIHtcbiAgICB0aGlzLm5vZGVzID0gW107XG4gIH1cbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL3RleHRfbm9kZXMuanMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7Ozs7O0FBbEJBO0FBbUJBO0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///4\n");

/***/ })
/******/ ]);
});