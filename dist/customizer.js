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
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _i18n = __webpack_require__(/*! ./i18n */ 1);\n\nvar _i18n2 = _interopRequireDefault(_i18n);\n\nvar _observator = __webpack_require__(/*! ./observator */ 2);\n\nvar _observator2 = _interopRequireDefault(_observator);\n\nvar _styles = __webpack_require__(/*! ./styles */ 3);\n\nvar _styles2 = _interopRequireDefault(_styles);\n\nvar _text_nodes = __webpack_require__(/*! ./text_nodes */ 4);\n\nvar _text_nodes2 = _interopRequireDefault(_text_nodes);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar checkStringsProvider = function checkStringsProvider(stringsProvider) {\n  if (!stringsProvider || stringsProvider.getString === undefined) {\n    throw TypeError('stringsProvider debe implementar el método getString');\n  }\n};\n\nexports.default = {\n  customizable: null,\n\n  textNodes: null,\n\n  init: function init(stringsProvider, config) {\n    var _this = this;\n\n    var Observable = void 0;\n    var defaults = { 'language': 'es_ES', 'skin': 'styles' };\n\n    this.customizable = config || defaults;\n    checkStringsProvider(stringsProvider);\n\n    var lang = new _i18n2.default(stringsProvider, this.customizable.language);\n    var styles = document.querySelector('link#skin');\n\n    Observable = (0, _observator2.default)(this.customizable);\n    this.textNodes = new _text_nodes2.default(document.body, lang, Observable);\n\n    Observable.observe('language', function () {\n      lang.language = _this.customizable.language;\n    });\n\n    _styles2.default.syncStyles(styles, Observable);\n    this.textNodes.watch();\n  },\n  changeLanguage: function changeLanguage(lang) {\n    this.customizable.language = lang;\n  },\n  changeSkin: function changeSkin(skin) {\n    this.customizable.skin = skin;\n  },\n  reset: function reset() {\n    this.textNodes.reset();\n  }\n};\nmodule.exports = exports['default'];//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvaW5kZXguanM/MWZkZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSTE4biBmcm9tICcuL2kxOG4nO1xuaW1wb3J0IE9ic2VydmF0b3IgZnJvbSAnLi9vYnNlcnZhdG9yJztcbmltcG9ydCBTdHlsZXMgZnJvbSAnLi9zdHlsZXMnO1xuaW1wb3J0IFRleHROb2RlcyBmcm9tICcuL3RleHRfbm9kZXMnO1xuXG5jb25zdCBjaGVja1N0cmluZ3NQcm92aWRlciA9IChzdHJpbmdzUHJvdmlkZXIpID0+IHtcbiAgaWYgKCFzdHJpbmdzUHJvdmlkZXIgfHwgc3RyaW5nc1Byb3ZpZGVyLmdldFN0cmluZyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgdGhyb3cgVHlwZUVycm9yKCdzdHJpbmdzUHJvdmlkZXIgZGViZSBpbXBsZW1lbnRhciBlbCBtw6l0b2RvIGdldFN0cmluZycpO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGN1c3RvbWl6YWJsZTogbnVsbCxcblxuICB0ZXh0Tm9kZXM6IG51bGwsXG5cbiAgaW5pdChzdHJpbmdzUHJvdmlkZXIsIGNvbmZpZykge1xuICAgIGxldCBPYnNlcnZhYmxlO1xuICAgIGNvbnN0IGRlZmF1bHRzID0geyAnbGFuZ3VhZ2UnOiAnZXNfRVMnLCAnc2tpbic6ICdzdHlsZXMnIH07XG5cbiAgICB0aGlzLmN1c3RvbWl6YWJsZSA9IGNvbmZpZyB8fCBkZWZhdWx0cztcbiAgICBjaGVja1N0cmluZ3NQcm92aWRlcihzdHJpbmdzUHJvdmlkZXIpO1xuXG4gICAgY29uc3QgbGFuZyA9IG5ldyBJMThuKHN0cmluZ3NQcm92aWRlciwgdGhpcy5jdXN0b21pemFibGUubGFuZ3VhZ2UpO1xuICAgIGNvbnN0IHN0eWxlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2xpbmsjc2tpbicpO1xuXG4gICAgT2JzZXJ2YWJsZSA9IE9ic2VydmF0b3IodGhpcy5jdXN0b21pemFibGUpO1xuICAgIHRoaXMudGV4dE5vZGVzID0gbmV3IFRleHROb2Rlcyhkb2N1bWVudC5ib2R5LCBsYW5nLCBPYnNlcnZhYmxlKTtcblxuICAgIE9ic2VydmFibGUub2JzZXJ2ZSgnbGFuZ3VhZ2UnLCAoKSA9PiB7IGxhbmcubGFuZ3VhZ2UgPSB0aGlzLmN1c3RvbWl6YWJsZS5sYW5ndWFnZTsgfSk7XG5cbiAgICBTdHlsZXMuc3luY1N0eWxlcyhzdHlsZXMsIE9ic2VydmFibGUpO1xuICAgIHRoaXMudGV4dE5vZGVzLndhdGNoKCk7XG4gIH0sXG5cbiAgY2hhbmdlTGFuZ3VhZ2UobGFuZykge1xuICAgIHRoaXMuY3VzdG9taXphYmxlLmxhbmd1YWdlID0gbGFuZztcbiAgfSxcblxuICBjaGFuZ2VTa2luKHNraW4pIHtcbiAgICB0aGlzLmN1c3RvbWl6YWJsZS5za2luID0gc2tpbjtcbiAgfSxcblxuICByZXNldCgpIHtcbiAgICB0aGlzLnRleHROb2Rlcy5yZXNldCgpO1xuICB9XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9pbmRleC5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFsQ0E7QSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///0\n");

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
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = {\n  replaceStyle: function replaceStyle(stylesLink, style) {\n    stylesLink.setAttribute('href', stylesLink.getAttribute('href').replace(/css\\/(.*?.min.css)/g, 'css/' + style + '.min.css'));\n  },\n  syncStyles: function syncStyles(styles, observable) {\n    var _this = this;\n\n    this.replaceStyle(styles, observable.data.skin);\n    observable.observe('skin', function () {\n      _this.replaceStyle(styles, observable.data.skin);\n    });\n  }\n};\nmodule.exports = exports['default'];//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvc3R5bGVzLmpzPzY1YzEiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQge1xuICByZXBsYWNlU3R5bGUoc3R5bGVzTGluaywgc3R5bGUpIHtcbiAgICBzdHlsZXNMaW5rLnNldEF0dHJpYnV0ZSgnaHJlZicsXG4gICAgICBzdHlsZXNMaW5rLmdldEF0dHJpYnV0ZSgnaHJlZicpLnJlcGxhY2UoL2Nzc1xcLyguKj8ubWluLmNzcykvZywgJ2Nzcy8nICsgc3R5bGUgKyAnLm1pbi5jc3MnKSk7XG4gIH0sXG5cbiAgc3luY1N0eWxlcyhzdHlsZXMsIG9ic2VydmFibGUpIHtcbiAgICB0aGlzLnJlcGxhY2VTdHlsZShzdHlsZXMsIG9ic2VydmFibGUuZGF0YS5za2luKTtcbiAgICBvYnNlcnZhYmxlLm9ic2VydmUoJ3NraW4nLCAoKSA9PiB7XG4gICAgICB0aGlzLnJlcGxhY2VTdHlsZShzdHlsZXMsIG9ic2VydmFibGUuZGF0YS5za2luKTtcbiAgICB9KTtcbiAgfVxufTtcblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9zdHlsZXMuanMiXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBWEE7QSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///3\n");

/***/ }),
/* 4 */
/*!***************************!*\
  !*** ./src/text_nodes.js ***!
  \***************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar ATTR_NAME = 'data-translate';\n\nfunction replaceText(node, text) {\n  node.textContent = text || node.textContent;\n}\n\nfunction syncNodeText(node, observable, property, textGetter) {\n  replaceText(node, textGetter(property));\n  observable.observe('language', function callback() {\n    replaceText(node, textGetter(property));\n  });\n}\n\nvar TextNodes = function () {\n  function TextNodes(parent, i18n, observable) {\n    _classCallCheck(this, TextNodes);\n\n    this.parent = parent;\n    this.i18n = i18n;\n    this.observable = observable;\n    this.nodes = [];\n  }\n\n  _createClass(TextNodes, [{\n    key: 'watch',\n    value: function watch() {\n      var _this = this;\n\n      this.nodes = this.parent.querySelectorAll('[' + ATTR_NAME + ']:not([' + ATTR_NAME + '=\"\"])');\n      // const styles = document.querySelector('link#skin');\n\n      // syncStyles(styles, observable);\n\n      this.nodes.forEach(function (textNode) {\n        syncNodeText(textNode, _this.observable, textNode.attributes['' + ATTR_NAME].value, _this.i18n.t.bind(_this.i18n));\n      });\n    }\n  }, {\n    key: 'reset',\n    value: function reset() {\n      this.nodes = [];\n    }\n  }]);\n\n  return TextNodes;\n}();\n\nexports.default = TextNodes;\n;\n\n/*\n function _replaceStyle(styles, style) {\n   styles.setAttribute('href',\n   styles.getAttribute('href').replace(/css\\/(.*?.min.css)/g, 'css/' + style + '.min.css'));\n }\n\n function syncStyles(styles, observable) {\n   _replaceStyle(styles, observable.styles);\n   _observe('styles', function cb() {\n    _replaceStyle(styles, observable.styles);\n  });\n }\n */\n// parseDOM(document.body, App.data);\n\nmodule.exports = exports['default'];//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvdGV4dF9ub2Rlcy5qcz9hMTJhIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IEFUVFJfTkFNRSA9ICdkYXRhLXRyYW5zbGF0ZSc7XG5cbmZ1bmN0aW9uIHJlcGxhY2VUZXh0KG5vZGUsIHRleHQpIHtcbiAgbm9kZS50ZXh0Q29udGVudCA9IHRleHQgfHwgbm9kZS50ZXh0Q29udGVudDtcbn1cblxuZnVuY3Rpb24gc3luY05vZGVUZXh0KG5vZGUsIG9ic2VydmFibGUsIHByb3BlcnR5LCB0ZXh0R2V0dGVyKSB7XG4gIHJlcGxhY2VUZXh0KG5vZGUsIHRleHRHZXR0ZXIocHJvcGVydHkpKTtcbiAgb2JzZXJ2YWJsZS5vYnNlcnZlKCdsYW5ndWFnZScsIGZ1bmN0aW9uIGNhbGxiYWNrKCkge1xuICAgIHJlcGxhY2VUZXh0KG5vZGUsIHRleHRHZXR0ZXIocHJvcGVydHkpKTtcbiAgfSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRleHROb2RlcyB7XG4gIGNvbnN0cnVjdG9yKHBhcmVudCwgaTE4biwgb2JzZXJ2YWJsZSkge1xuICAgIHRoaXMucGFyZW50ID0gcGFyZW50O1xuICAgIHRoaXMuaTE4biA9IGkxOG47XG4gICAgdGhpcy5vYnNlcnZhYmxlID0gb2JzZXJ2YWJsZTtcbiAgICB0aGlzLm5vZGVzID0gW107XG4gIH1cblxuICB3YXRjaCgpIHtcbiAgICB0aGlzLm5vZGVzID0gdGhpcy5wYXJlbnQucXVlcnlTZWxlY3RvckFsbChgWyR7QVRUUl9OQU1FfV06bm90KFske0FUVFJfTkFNRX09XCJcIl0pYCk7XG4gICAgLy8gY29uc3Qgc3R5bGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbGluayNza2luJyk7XG5cbiAgICAvLyBzeW5jU3R5bGVzKHN0eWxlcywgb2JzZXJ2YWJsZSk7XG5cbiAgICB0aGlzLm5vZGVzLmZvckVhY2goKHRleHROb2RlKSA9PiB7XG4gICAgICBzeW5jTm9kZVRleHQodGV4dE5vZGUsIHRoaXMub2JzZXJ2YWJsZSwgdGV4dE5vZGUuYXR0cmlidXRlc1tgJHtBVFRSX05BTUV9YF0udmFsdWUsIHRoaXMuaTE4bi50LmJpbmQodGhpcy5pMThuKSk7XG4gICAgfSk7XG4gIH1cblxuICByZXNldCgpIHtcbiAgICB0aGlzLm5vZGVzID0gW107XG4gIH1cbn07XG5cbi8qXG4gZnVuY3Rpb24gX3JlcGxhY2VTdHlsZShzdHlsZXMsIHN0eWxlKSB7XG4gICBzdHlsZXMuc2V0QXR0cmlidXRlKCdocmVmJyxcbiAgIHN0eWxlcy5nZXRBdHRyaWJ1dGUoJ2hyZWYnKS5yZXBsYWNlKC9jc3NcXC8oLio/Lm1pbi5jc3MpL2csICdjc3MvJyArIHN0eWxlICsgJy5taW4uY3NzJykpO1xuIH1cblxuIGZ1bmN0aW9uIHN5bmNTdHlsZXMoc3R5bGVzLCBvYnNlcnZhYmxlKSB7XG4gICBfcmVwbGFjZVN0eWxlKHN0eWxlcywgb2JzZXJ2YWJsZS5zdHlsZXMpO1xuICAgX29ic2VydmUoJ3N0eWxlcycsIGZ1bmN0aW9uIGNiKCkge1xuICAgIF9yZXBsYWNlU3R5bGUoc3R5bGVzLCBvYnNlcnZhYmxlLnN0eWxlcyk7XG4gIH0pO1xuIH1cbiAqL1xuLy8gcGFyc2VET00oZG9jdW1lbnQuYm9keSwgQXBwLmRhdGEpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy90ZXh0X25vZGVzLmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7Ozs7OztBQXJCQTtBQXNCQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUFhQTtBQUNBO0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///4\n");

/***/ })
/******/ ]);
});