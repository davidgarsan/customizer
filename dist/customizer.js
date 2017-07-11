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
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _i18n = __webpack_require__(/*! ./i18n */ 1);\n\nvar _i18n2 = _interopRequireDefault(_i18n);\n\nvar _observator = __webpack_require__(/*! ./observator */ 2);\n\nvar _observator2 = _interopRequireDefault(_observator);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = {};\n\n\nvar customizable = { 'language': _i18n2.default.language(), 'styles': 'ruralvia' };\nvar stringsService = function () {\n  var strings = { 'es_ES': { 'greeting': 'Hola' }, 'en_UK': { 'greeting': 'Hi' } };\n\n  return {\n    getString: function getString(lang, key) {\n      return strings[lang][key];\n    }\n  };\n}();\nvar lang = new _i18n2.default(stringsService, 'es_ES');\nvar App = (0, _observator2.default)(customizable);\n\n// console.log(App.data.language);\n\nApp.observe('language', function () {\n  lang.language = customizable.language;\n});\n\ncustomizable.language = 'en_UK';\n\n// const ATTR_NAME = 'data-translate';\n\n/*\nfunction _replaceText(node, text) {\n  node.textContent = text || node.textContent;\n}\n\nfunction _replaceStyle(styles, style) {\n  styles.setAttribute('href',\n    styles.getAttribute('href').replace(/css\\/(.*?.min.css)/g, 'css/' + style + '.min.css'));\n}\n\nfunction syncNodeText(node, observable, property) {\n  _replaceText(node, i18n.t([observable.language][property]));\n  observe('language', function cb() {\n    _replaceText(node, i18n.t([observable.language][property]));\n  });\n}\n\nfunction parseDOM(parent, observable) {\n  const texts = parent.querySelectorAll(`[${ATTR_NAME}]:not([${ATTR_NAME}=\"\"])`);\n  const styles = document.querySelector('link#skin');\n\n  syncStyles(styles, observable);\n\n  texts.forEach((textNode) => {\n    syncNodeText(textNode, observable, textNode.attributes[`${ATTR_NAME}`].value);\n  });\n}\n*/\n\n// parseDOM(document.body, App.data);\n\nmodule.exports = exports['default'];//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvaW5kZXguanM/MWZkZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSTE4biBmcm9tICcuL2kxOG4nO1xuaW1wb3J0IE9ic2VydmF0b3IgZnJvbSAnLi9vYnNlcnZhdG9yJztcblxuZXhwb3J0IGRlZmF1bHQge1xufTtcblxuY29uc3QgY3VzdG9taXphYmxlID0geyAnbGFuZ3VhZ2UnOiBJMThuLmxhbmd1YWdlKCksICdzdHlsZXMnOiAncnVyYWx2aWEnIH07XG5jb25zdCBzdHJpbmdzU2VydmljZSA9IChmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IHN0cmluZ3MgPSB7J2VzX0VTJzogeydncmVldGluZyc6ICdIb2xhJ30sICdlbl9VSyc6IHsnZ3JlZXRpbmcnOiAnSGknfX07XG5cbiAgcmV0dXJuIHtcbiAgICBnZXRTdHJpbmcobGFuZywga2V5KSB7XG4gICAgICByZXR1cm4gc3RyaW5nc1tsYW5nXVtrZXldO1xuICAgIH1cbiAgfTtcbn0pKCk7XG5jb25zdCBsYW5nID0gbmV3IEkxOG4oc3RyaW5nc1NlcnZpY2UsICdlc19FUycpO1xuY29uc3QgQXBwID0gT2JzZXJ2YXRvcihjdXN0b21pemFibGUpO1xuXG4vLyBjb25zb2xlLmxvZyhBcHAuZGF0YS5sYW5ndWFnZSk7XG5cbkFwcC5vYnNlcnZlKCdsYW5ndWFnZScsICgpID0+IHsgbGFuZy5sYW5ndWFnZSA9IGN1c3RvbWl6YWJsZS5sYW5ndWFnZTsgfSk7XG5cbmN1c3RvbWl6YWJsZS5sYW5ndWFnZSA9ICdlbl9VSyc7XG5cbi8vIGNvbnN0IEFUVFJfTkFNRSA9ICdkYXRhLXRyYW5zbGF0ZSc7XG5cbi8qXG5mdW5jdGlvbiBfcmVwbGFjZVRleHQobm9kZSwgdGV4dCkge1xuICBub2RlLnRleHRDb250ZW50ID0gdGV4dCB8fCBub2RlLnRleHRDb250ZW50O1xufVxuXG5mdW5jdGlvbiBfcmVwbGFjZVN0eWxlKHN0eWxlcywgc3R5bGUpIHtcbiAgc3R5bGVzLnNldEF0dHJpYnV0ZSgnaHJlZicsXG4gICAgc3R5bGVzLmdldEF0dHJpYnV0ZSgnaHJlZicpLnJlcGxhY2UoL2Nzc1xcLyguKj8ubWluLmNzcykvZywgJ2Nzcy8nICsgc3R5bGUgKyAnLm1pbi5jc3MnKSk7XG59XG5cbmZ1bmN0aW9uIHN5bmNOb2RlVGV4dChub2RlLCBvYnNlcnZhYmxlLCBwcm9wZXJ0eSkge1xuICBfcmVwbGFjZVRleHQobm9kZSwgaTE4bi50KFtvYnNlcnZhYmxlLmxhbmd1YWdlXVtwcm9wZXJ0eV0pKTtcbiAgb2JzZXJ2ZSgnbGFuZ3VhZ2UnLCBmdW5jdGlvbiBjYigpIHtcbiAgICBfcmVwbGFjZVRleHQobm9kZSwgaTE4bi50KFtvYnNlcnZhYmxlLmxhbmd1YWdlXVtwcm9wZXJ0eV0pKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHBhcnNlRE9NKHBhcmVudCwgb2JzZXJ2YWJsZSkge1xuICBjb25zdCB0ZXh0cyA9IHBhcmVudC5xdWVyeVNlbGVjdG9yQWxsKGBbJHtBVFRSX05BTUV9XTpub3QoWyR7QVRUUl9OQU1FfT1cIlwiXSlgKTtcbiAgY29uc3Qgc3R5bGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbGluayNza2luJyk7XG5cbiAgc3luY1N0eWxlcyhzdHlsZXMsIG9ic2VydmFibGUpO1xuXG4gIHRleHRzLmZvckVhY2goKHRleHROb2RlKSA9PiB7XG4gICAgc3luY05vZGVUZXh0KHRleHROb2RlLCBvYnNlcnZhYmxlLCB0ZXh0Tm9kZS5hdHRyaWJ1dGVzW2Ake0FUVFJfTkFNRX1gXS52YWx1ZSk7XG4gIH0pO1xufVxuKi9cblxuLy8gcGFyc2VET00oZG9jdW1lbnQuYm9keSwgQXBwLmRhdGEpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9pbmRleC5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBNkJBO0FBQ0E7QSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!*********************!*\
  !*** ./src/i18n.js ***!
  \*********************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar LANG_DEFAULT = 'es_ES';\n\nvar I18n = function () {\n  function I18n(stringsProvider, language) {\n    _classCallCheck(this, I18n);\n\n    this._strings = stringsProvider;\n    this._language = language;\n  }\n\n  _createClass(I18n, [{\n    key: 't',\n    value: function t(key) {\n      return this._strings.getString(this._language || LANG_DEFAULT, key);\n    }\n  }, {\n    key: 'language',\n    get: function get() {\n      return this._language;\n    },\n    set: function set(language) {\n      this._language = language;\n      console.log('Changed language to ' + language);\n    }\n  }]);\n\n  return I18n;\n}();\n\nexports.default = I18n;\nmodule.exports = exports['default'];//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvaTE4bi5qcz8xZThkIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IExBTkdfREVGQVVMVCA9ICdlc19FUyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEkxOG4ge1xuICBjb25zdHJ1Y3RvcihzdHJpbmdzUHJvdmlkZXIsIGxhbmd1YWdlKSB7XG4gICAgdGhpcy5fc3RyaW5ncyA9IHN0cmluZ3NQcm92aWRlcjtcbiAgICB0aGlzLl9sYW5ndWFnZSA9IGxhbmd1YWdlO1xuICB9XG5cbiAgZ2V0IGxhbmd1YWdlKCkge1xuICAgIHJldHVybiB0aGlzLl9sYW5ndWFnZTtcbiAgfVxuXG4gIHNldCBsYW5ndWFnZShsYW5ndWFnZSkge1xuICAgIHRoaXMuX2xhbmd1YWdlID0gbGFuZ3VhZ2U7XG4gICAgY29uc29sZS5sb2coJ0NoYW5nZWQgbGFuZ3VhZ2UgdG8gJyArIGxhbmd1YWdlKTtcbiAgfVxuXG4gIHQoa2V5KSB7XG4gICAgcmV0dXJuIHRoaXMuX3N0cmluZ3MuZ2V0U3RyaW5nKHRoaXMuX2xhbmd1YWdlIHx8IExBTkdfREVGQVVMVCwga2V5KTtcbiAgfVxufVxuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2kxOG4uanMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7O0FBVUE7QUFDQTtBQUNBOzs7QUFYQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FBYkE7QSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/*!***************************!*\
  !*** ./src/observator.js ***!
  \***************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nexports.default = function (dataObj, i18n) {\n  var ATTR_NAME = 'data-translate';\n  var signals = {};\n\n  function observe(property, signalHandler) {\n    if (!signals[property]) signals[property] = [];\n\n    signals[property].push(signalHandler);\n  }\n\n  function notify(signal) {\n    if (!signals[signal] || signals[signal].length < 1) return;\n\n    signals[signal].forEach(function (signalHandler) {\n      return signalHandler();\n    });\n  }\n\n  function makeReactive(obj, key) {\n    var val = obj[key];\n\n    Object.defineProperty(obj, key, {\n      get: function get() {\n        return val;\n      },\n      set: function set(newVal) {\n        val = newVal;\n        notify(key);\n      }\n    });\n  }\n\n  function _replaceText(node, text) {\n    node.textContent = text || node.textContent;\n  }\n\n  function _replaceStyle(styles, style) {\n    styles.setAttribute('href', styles.getAttribute('href').replace(/css\\/(.*?.min.css)/g, 'css/' + style + '.min.css'));\n  }\n\n  function syncNodeText(node, observable, property) {\n    _replaceText(node, i18n.t([observable.language][property]));\n    observe('language', function cb() {\n      _replaceText(node, i18n.t([observable.language][property]));\n    });\n  }\n\n  function syncStyles(styles, observable) {\n    _replaceStyle(styles, observable.styles);\n    observe('styles', function cb() {\n      _replaceStyle(styles, observable.styles);\n    });\n  }\n\n  function parseDOM(parent, observable) {\n    var texts = parent.querySelectorAll('[' + ATTR_NAME + ']:not([' + ATTR_NAME + '=\"\"])');\n    var styles = document.querySelector('link#skin');\n\n    syncStyles(styles, observable);\n\n    texts.forEach(function (textNode) {\n      syncNodeText(textNode, observable, textNode.attributes['' + ATTR_NAME].value);\n    });\n  }\n\n  function observeData(obj) {\n    for (var key in obj) {\n      if (obj.hasOwnProperty(key)) {\n        makeReactive(obj, key);\n      }\n    }\n    // parseDOM(document.body, obj);\n  }\n\n  observeData(dataObj);\n\n  return {\n    data: dataObj,\n    observe: observe,\n    notify: notify\n  };\n};\n\n; /* eslint-disable */\nmodule.exports = exports['default'];//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvb2JzZXJ2YXRvci5qcz8yYTYxIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoZGF0YU9iaiwgaTE4bikge1xuICBjb25zdCBBVFRSX05BTUUgPSAnZGF0YS10cmFuc2xhdGUnO1xuICBsZXQgc2lnbmFscyA9IHt9O1xuXG4gIGZ1bmN0aW9uIG9ic2VydmUocHJvcGVydHksIHNpZ25hbEhhbmRsZXIpIHtcbiAgICBpZiAoIXNpZ25hbHNbcHJvcGVydHldKSBzaWduYWxzW3Byb3BlcnR5XSA9IFtdO1xuXG4gICAgc2lnbmFsc1twcm9wZXJ0eV0ucHVzaChzaWduYWxIYW5kbGVyKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG5vdGlmeShzaWduYWwpIHtcbiAgICBpZiAoIXNpZ25hbHNbc2lnbmFsXSB8fCBzaWduYWxzW3NpZ25hbF0ubGVuZ3RoIDwgMSkgcmV0dXJuO1xuXG4gICAgc2lnbmFsc1tzaWduYWxdLmZvckVhY2goKHNpZ25hbEhhbmRsZXIpID0+IHNpZ25hbEhhbmRsZXIoKSk7XG4gIH1cblxuICBmdW5jdGlvbiBtYWtlUmVhY3RpdmUob2JqLCBrZXkpIHtcbiAgICBsZXQgdmFsID0gb2JqW2tleV07XG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIGdldCgpIHtcbiAgICAgICAgcmV0dXJuIHZhbDtcbiAgICAgIH0sXG4gICAgICBzZXQobmV3VmFsKSB7XG4gICAgICAgIHZhbCA9IG5ld1ZhbDtcbiAgICAgICAgbm90aWZ5KGtleSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBfcmVwbGFjZVRleHQobm9kZSwgdGV4dCkge1xuICAgIG5vZGUudGV4dENvbnRlbnQgPSB0ZXh0IHx8IG5vZGUudGV4dENvbnRlbnQ7XG4gIH1cblxuICBmdW5jdGlvbiBfcmVwbGFjZVN0eWxlKHN0eWxlcywgc3R5bGUpIHtcbiAgICBzdHlsZXMuc2V0QXR0cmlidXRlKCdocmVmJyxcbiAgICAgIHN0eWxlcy5nZXRBdHRyaWJ1dGUoJ2hyZWYnKS5yZXBsYWNlKC9jc3NcXC8oLio/Lm1pbi5jc3MpL2csICdjc3MvJyArIHN0eWxlICsgJy5taW4uY3NzJykpO1xuICB9XG5cbiAgZnVuY3Rpb24gc3luY05vZGVUZXh0KG5vZGUsIG9ic2VydmFibGUsIHByb3BlcnR5KSB7XG4gICAgX3JlcGxhY2VUZXh0KG5vZGUsIGkxOG4udChbb2JzZXJ2YWJsZS5sYW5ndWFnZV1bcHJvcGVydHldKSk7XG4gICAgb2JzZXJ2ZSgnbGFuZ3VhZ2UnLCBmdW5jdGlvbiBjYigpIHtcbiAgICAgIF9yZXBsYWNlVGV4dChub2RlLCBpMThuLnQoW29ic2VydmFibGUubGFuZ3VhZ2VdW3Byb3BlcnR5XSkpO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gc3luY1N0eWxlcyhzdHlsZXMsIG9ic2VydmFibGUpIHtcbiAgICBfcmVwbGFjZVN0eWxlKHN0eWxlcywgb2JzZXJ2YWJsZS5zdHlsZXMpO1xuICAgIG9ic2VydmUoJ3N0eWxlcycsIGZ1bmN0aW9uIGNiKCkge1xuICAgICAgX3JlcGxhY2VTdHlsZShzdHlsZXMsIG9ic2VydmFibGUuc3R5bGVzKTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHBhcnNlRE9NKHBhcmVudCwgb2JzZXJ2YWJsZSkge1xuICAgIGNvbnN0IHRleHRzID0gcGFyZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYFske0FUVFJfTkFNRX1dOm5vdChbJHtBVFRSX05BTUV9PVwiXCJdKWApO1xuICAgIGNvbnN0IHN0eWxlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2xpbmsjc2tpbicpO1xuXG4gICAgc3luY1N0eWxlcyhzdHlsZXMsIG9ic2VydmFibGUpO1xuXG4gICAgdGV4dHMuZm9yRWFjaCgodGV4dE5vZGUpID0+IHtcbiAgICAgIHN5bmNOb2RlVGV4dCh0ZXh0Tm9kZSwgb2JzZXJ2YWJsZSwgdGV4dE5vZGUuYXR0cmlidXRlc1tgJHtBVFRSX05BTUV9YF0udmFsdWUpO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gb2JzZXJ2ZURhdGEob2JqKSB7XG4gICAgZm9yIChsZXQga2V5IGluIG9iaikge1xuICAgICAgaWYgKG9iai5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgIG1ha2VSZWFjdGl2ZShvYmosIGtleSk7XG4gICAgICB9XG4gICAgfVxuICAgIC8vIHBhcnNlRE9NKGRvY3VtZW50LmJvZHksIG9iaik7XG4gIH1cblxuICBvYnNlcnZlRGF0YShkYXRhT2JqKTtcblxuICByZXR1cm4ge1xuICAgIGRhdGE6IGRhdGFPYmosXG4gICAgb2JzZXJ2ZSxcbiAgICBub3RpZnlcbiAgfTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL29ic2VydmF0b3IuanMiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFQQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFEQTtBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///2\n");

/***/ })
/******/ ]);
});