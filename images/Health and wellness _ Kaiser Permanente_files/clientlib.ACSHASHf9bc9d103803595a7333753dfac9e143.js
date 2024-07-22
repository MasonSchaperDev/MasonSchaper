/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/embeds/logo/index.js":
/*!**********************************!*\
  !*** ./app/embeds/logo/index.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _logo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logo */ \"./app/embeds/logo/logo.js\");\n\n$(function () {\n  return Object(_logo__WEBPACK_IMPORTED_MODULE_0__[\"prependPrintOnly\"])();\n});\n\n//# sourceURL=webpack:///./app/embeds/logo/index.js?");

/***/ }),

/***/ "./app/embeds/logo/logo.js":
/*!*********************************!*\
  !*** ./app/embeds/logo/logo.js ***!
  \*********************************/
/*! exports provided: prependPrintOnly */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"prependPrintOnly\", function() { return prependPrintOnly; });\nvar prependPrintOnly = function prependPrintOnly() {\n  var src = $('.logo-long').attr('src');\n  if (src) {\n    var markup = \"<div class=\\\"print-only\\\"><img class=\\\"print-only-logo\\\" src=\\\"\".concat(src, \"\\\" alt=\\\"\\\" /></div>\");\n    $('body').first().prepend(markup);\n  }\n};\n\n\n//# sourceURL=webpack:///./app/embeds/logo/logo.js?");

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi ./app/embeds/logo/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! /apps/jenkins-agent/agent/workspace/ion_release_kp-foundation-4.10.2/ui.frontend/app/embeds/logo/index.js */\"./app/embeds/logo/index.js\");\n\n\n//# sourceURL=webpack:///multi_./app/embeds/logo/index.js?");

/***/ })

/******/ });
/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/embeds/regionPicker/index.js":
/*!******************************************!*\
  !*** ./app/embeds/regionPicker/index.js ***!
  \******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _region_picker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./region-picker */ \"./app/embeds/regionPicker/region-picker.js\");\n\n$(function () {\n  return Object(_region_picker__WEBPACK_IMPORTED_MODULE_0__[\"initRegionPicker\"])();\n});\n\n//# sourceURL=webpack:///./app/embeds/regionPicker/index.js?");

/***/ }),

/***/ "./app/embeds/regionPicker/index.scss":
/*!********************************************!*\
  !*** ./app/embeds/regionPicker/index.scss ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./app/embeds/regionPicker/index.scss?");

/***/ }),

/***/ "./app/embeds/regionPicker/region-picker.js":
/*!**************************************************!*\
  !*** ./app/embeds/regionPicker/region-picker.js ***!
  \**************************************************/
/*! exports provided: initRegionPicker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initRegionPicker\", function() { return initRegionPicker; });\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! js-cookie */ \"js-cookie\");\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_0__);\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError(\"Cannot call a class as a function\"); }\nfunction _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, \"value\" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }\nfunction _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, \"prototype\", { writable: !1 }), e; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : i + \"\"; }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\n\nvar RegionPicker = /*#__PURE__*/function () {\n  function RegionPicker() {\n    _classCallCheck(this, RegionPicker);\n  }\n  return _createClass(RegionPicker, [{\n    key: \"init\",\n    value: function init() {\n      this.REF_CONTAINER = '.region-picker-container';\n      this.REF_DISPLAY = '.navigational-select-dropdown-value';\n      this.REF_DEFAULT_VALUE = $(this.REF_CONTAINER).find(this.REF_DISPLAY).html();\n      this.setSelected();\n      this.bindEvents();\n    }\n  }, {\n    key: \"setSelected\",\n    value: function setSelected(uri) {\n      uri = uri || location.pathname;\n      uri = uri.slice(-1) === '/' ? uri.slice(0, -1) : uri; // remove trailing slash\n\n      var options = $('li.navigational-select-value', this.REF_CONTAINER);\n      var matches = options.filter(function () {\n        // does query parameters need to be addressed as well?\n        return uri === $(this).data('region-uri').split('#')[0];\n      });\n      var matchedValue = matches.length && matches.data('value') || this.REF_DEFAULT_VALUE;\n      $(this.REF_DISPLAY, this.REF_CONTAINER).text(matchedValue);\n    }\n  }, {\n    key: \"bindEvents\",\n    value: function bindEvents() {\n      var self = this;\n      $('ul.navigational-select-dropdown__list', this.REF_CONTAINER).on('click keydown', function (evt) {\n        if (evt.which === 1 || evt.which === 13 || evt.which === 32) {\n          var target = $(evt.target);\n          var keepParams = target.closest('.region-picker-container').data('keepParams');\n\n          // data attributes are on <li>, if user clicks on <a>, grab parent <li> instead\n          var li = target[0].tagName === 'A' ? target.parent() : target;\n          var currentData = li.data();\n          if (keepParams) currentData.regionUri = \"\".concat(currentData.regionUri).concat(window.location.search).concat(window.location.hash);\n          self.onChange(currentData);\n        }\n      });\n    }\n  }, {\n    key: \"onChange\",\n    value: function onChange(data) {\n      if (!data) {\n        return;\n      }\n      window.open(data.regionUri, '_self');\n    }\n  }]);\n}();\nfunction initRegionPicker() {\n  new RegionPicker().init();\n}\n\n//# sourceURL=webpack:///./app/embeds/regionPicker/region-picker.js?");

/***/ }),

/***/ 2:
/*!*************************************************************************************!*\
  !*** multi ./app/embeds/regionPicker/index.js ./app/embeds/regionPicker/index.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! /apps/jenkins-agent/agent/workspace/ion_release_kp-foundation-4.10.2/ui.frontend/app/embeds/regionPicker/index.js */\"./app/embeds/regionPicker/index.js\");\nmodule.exports = __webpack_require__(/*! /apps/jenkins-agent/agent/workspace/ion_release_kp-foundation-4.10.2/ui.frontend/app/embeds/regionPicker/index.scss */\"./app/embeds/regionPicker/index.scss\");\n\n\n//# sourceURL=webpack:///multi_./app/embeds/regionPicker/index.js_./app/embeds/regionPicker/index.scss?");

/***/ }),

/***/ "js-cookie":
/*!**************************!*\
  !*** external "Cookies" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = Cookies;\n\n//# sourceURL=webpack:///external_%22Cookies%22?");

/***/ })

/******/ });
/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/embeds/video/index.js":
/*!***********************************!*\
  !*** ./app/embeds/video/index.js ***!
  \***********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _video_schema_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./video-schema.js */ \"./app/embeds/video/video-schema.js\");\n\n$(function () {\n  return new _video_schema_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]().init();\n});\n\n//# sourceURL=webpack:///./app/embeds/video/index.js?");

/***/ }),

/***/ "./app/embeds/video/video-schema.js":
/*!******************************************!*\
  !*** ./app/embeds/video/video-schema.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return VideoPlayerSchema; });\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ \"moment\");\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError(\"Cannot call a class as a function\"); }\nfunction _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, \"value\" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }\nfunction _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, \"prototype\", { writable: !1 }), e; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : i + \"\"; }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\n\nvar VideoPlayerSchema = /*#__PURE__*/function () {\n  function VideoPlayerSchema() {\n    var _this = this;\n    _classCallCheck(this, VideoPlayerSchema);\n    this.srcStrings = [];\n    this.guids = [];\n    var iframes = document.querySelectorAll('iframe.video-player');\n    for (var i = 0; i < iframes.length; i++) {\n      this.srcStrings.push(iframes[i].src);\n    }\n    if (this.srcStrings.length) {\n      this.srcStrings.forEach(function (src) {\n        var hasGuid = src.match(/\\/view\\/(.*?)\\?/) || null;\n        if (hasGuid && hasGuid[1] && hasGuid[1].length) {\n          _this.guids.push(hasGuid[1]);\n        }\n      });\n    }\n  }\n  return _createClass(VideoPlayerSchema, [{\n    key: \"init\",\n    value: function init() {\n      if (this.guids.length) {\n        this.getQumuData();\n      }\n      this.initIframeModal();\n    }\n  }, {\n    key: \"getQumuData\",\n    value: function getQumuData() {\n      var _this2 = this;\n      this.guids.forEach(function (guid) {\n        var requestUrl = \"https://kp.qumucloud.com/api/2.1/rest/kulus/\".concat(guid);\n        return $.get(requestUrl, function (response) {\n          var data = response.kulu;\n          _this2.appendJsonLd({\n            \"@context\": \"http://schema.org\",\n            \"@type\": \"VideoObject\",\n            \"name\": data.title,\n            \"description\": data.metadata[3].value,\n            // would like a better response structure to grab \"description\" ie data.description\n            \"uploadDate\": new Date(data.created).toISOString(),\n            \"thumbnailUrl\": data.thumbnail.url,\n            \"duration\": moment__WEBPACK_IMPORTED_MODULE_0___default.a.duration(data.duration),\n            \"embedUrl\": data.player\n          });\n        }).fail(function (error) {\n          return console.error('Error:', error);\n        });\n      });\n    }\n  }, {\n    key: \"appendJsonLd\",\n    value: function appendJsonLd(ldData) {\n      if (ldData) {\n        try {\n          var stringifiedData = JSON.stringify(ldData);\n          $('<script>').attr('type', 'application/ld+json').text(stringifiedData).appendTo('head');\n        } catch (e) {\n          console.error(e);\n        }\n      }\n    }\n  }, {\n    key: \"closeIframe\",\n    value: function closeIframe(modalId) {\n      var videoModalCloseBtn = document.querySelector('#' + modalId + ' .modal-inner button.-close--small');\n      var iframe = document.querySelector('#' + modalId + ' .modal-inner iframe');\n      if (videoModalCloseBtn && iframe) {\n        var src = iframe.src;\n        videoModalCloseBtn.addEventListener('click', function () {\n          iframe.src = src;\n        });\n      }\n    }\n  }, {\n    key: \"initIframeModal\",\n    value: function initIframeModal() {\n      var _this3 = this;\n      var anchorModal = document.querySelector('a[href*=modal]');\n      if (anchorModal) {\n        var anchorModalHref = anchorModal.href;\n        var anchorModalId = anchorModalHref.split(':')[1];\n        anchorModal.addEventListener('click', function () {\n          setTimeout(function () {\n            _this3.closeIframe(anchorModalId);\n          }, 1000);\n        });\n      }\n    }\n  }]);\n}();\n\n\n//# sourceURL=webpack:///./app/embeds/video/video-schema.js?");

/***/ }),

/***/ 3:
/*!*****************************************!*\
  !*** multi ./app/embeds/video/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! /apps/jenkins-agent/agent/workspace/ion_release_kp-foundation-4.10.2/ui.frontend/app/embeds/video/index.js */\"./app/embeds/video/index.js\");\n\n\n//# sourceURL=webpack:///multi_./app/embeds/video/index.js?");

/***/ }),

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = moment;\n\n//# sourceURL=webpack:///external_%22moment%22?");

/***/ })

/******/ });
/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 58);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/components/video/video.js":
/*!***************************************!*\
  !*** ./app/components/video/video.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("$(document).ready(function () {\n  var win_width = $(window).width();\n  responsive_video(win_width);\n  $(window).on('resize', function () {\n    var win_width = $(window).width();\n    responsive_video(win_width);\n  });\n  $('a.skipVideoPlayer').on('click keypress', function (e) {\n    if (e.type === 'click' || e.which === 13) {\n      var video_id = '#' + $(this).data('video-id');\n      $(video_id).focus();\n    }\n  });\n  $('.video-footer-left a').on(\"click keypress\", function (e) {\n    if (e.type === 'click' || e.which === 13) {\n      if ($(this).attr('id') === 'show-transcript') {\n        $('.transcript-content-container').show();\n        $('#show-transcript').hide();\n        $('#hide-transcript').show();\n      } else {\n        $('.transcript-content-container').hide();\n        $('#hide-transcript').hide();\n        $('#show-transcript').show();\n      }\n    }\n  });\n});\nfunction responsive_video(w_w) {\n  var video = $('.responsive_container');\n  if (w_w > 900 && w_w < 1280) {\n    var side_margin = w_w - 899;\n    var left_margin = side_margin / 2;\n    var right_margin = side_margin / 2;\n    video.css({\n      \"margin-left\": left_margin + \"px\",\n      \"margin-right\": right_margin + \"px\"\n    });\n    video.removeClass(\"video_holder\");\n    video.addClass(\"full_bleed_margin\").removeClass(\"responsive_bleed_margin\");\n  } else if (w_w >= 1280) {\n    var margin = (w_w - 900) / 2;\n\n    // For Firefox, we need to give smaller margin otherwise it shows scroll bars for video.\n    if (navigator.userAgent.indexOf(\"Firefox\") !== -1) {\n      margin = margin - 5;\n    }\n    video.css({\n      \"margin-left\": margin + \"px\",\n      \"margin-right\": margin + \"px\",\n      \"max-width\": 1280 + \"px\"\n    });\n    video.removeClass(\"video_holder\");\n    video.addClass(\"full_bleed_margin\").removeClass(\"responsive_bleed_margin\");\n  } else {\n    $('.responsive_container').removeAttr(\"style\");\n    video.addClass(\"video_holder\");\n    video.addClass(\"responsive_bleed_margin\").removeClass(\"full_bleed_margin\");\n  }\n}\n\n//# sourceURL=webpack:///./app/components/video/video.js?");

/***/ }),

/***/ "./app/components/video/video.scss":
/*!*****************************************!*\
  !*** ./app/components/video/video.scss ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./app/components/video/video.scss?");

/***/ }),

/***/ 58:
/*!*******************************************************************************!*\
  !*** multi ./app/components/video/video.js ./app/components/video/video.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! /apps/jenkins-agent/agent/workspace/ion_release_kp-foundation-4.10.2/ui.frontend/app/components/video/video.js */\"./app/components/video/video.js\");\nmodule.exports = __webpack_require__(/*! /apps/jenkins-agent/agent/workspace/ion_release_kp-foundation-4.10.2/ui.frontend/app/components/video/video.scss */\"./app/components/video/video.scss\");\n\n\n//# sourceURL=webpack:///multi_./app/components/video/video.js_./app/components/video/video.scss?");

/***/ })

/******/ });
