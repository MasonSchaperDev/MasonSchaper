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
/******/ 	return __webpack_require__(__webpack_require__.s = 69);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/modules/click2chat/click2chat.js":
/*!**********************************************!*\
  !*** ./app/modules/click2chat/click2chat.js ***!
  \**********************************************/
/*! exports provided: loadSupportFiles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loadSupportFiles\", function() { return loadSupportFiles; });\nvar includeFile = function includeFile(filename) {\n  var head = document.querySelector('head');\n  var type = filename.split('.').slice(-1)[0];\n  if (type === 'js' && !document.querySelector(\"head > script[src=\\\"\".concat(filename, \"\\\"]\"))) {\n    var script = document.createElement('script');\n    script.src = filename;\n    script.type = 'text/javascript';\n    script.async = false;\n    head.appendChild(script);\n  }\n  if (type === 'css' && !document.querySelector(\"head > link[href=\\\"\".concat(filename, \"\\\"]\"))) {\n    var link = document.createElement('link');\n    link.href = filename;\n    link.type = 'text/css';\n    link.rel = 'stylesheet';\n    head.appendChild(link);\n  }\n};\nvar loadSupportFiles = function loadSupportFiles() {\n  setTimeout(function () {\n    var session = sessionStorage.getItem('genesys_webchat_session_id');\n    if (session) {\n      var files = ['/static/consumer/consumernet/dojo/dojo/dojo.js.uncompressed.js', '/static/consumer/consumernet/dojo/kaiser/kaiser.js.uncompressed.js', '/static/consumer/consumernet/dojo/dijit/themes/tundra/tundra.css', '/static/consumer/consumernet/dojo/dojox/layout/resources/FloatingPane.css', '/static/consumer/consumernet/dojo/dojox/layout/resources/ResizeHandle.css', '/static/consumer/consumernet/dojo/kpdj/themes/consumernet/kpdjStyles.css', '/consumernet/themes/html/consumernet/js/gensys-click2chat/genesys-webchat.min.js', '/consumernet/themes/html/consumernet/js/gensys-click2chat/genesys-webchat-options.js', '/consumernet/themes/html/consumernet/js/gensys-click2chat/webchat.js', '/consumernet/themes/html/consumernet/js/gensys-click2chat/click2chat.css'];\n      files.forEach(includeFile);\n      document.body.classList.add('tundra');\n    }\n  }, 500);\n};\n\n\n//# sourceURL=webpack:///./app/modules/click2chat/click2chat.js?");

/***/ }),

/***/ "./app/modules/click2chat/index.js":
/*!*****************************************!*\
  !*** ./app/modules/click2chat/index.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _click2chat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./click2chat */ \"./app/modules/click2chat/click2chat.js\");\n\n$(function () {\n  return Object(_click2chat__WEBPACK_IMPORTED_MODULE_0__[\"loadSupportFiles\"])();\n});\n\n//# sourceURL=webpack:///./app/modules/click2chat/index.js?");

/***/ }),

/***/ 69:
/*!***********************************************!*\
  !*** multi ./app/modules/click2chat/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! /apps/jenkins-agent/agent/workspace/ion_release_kp-foundation-4.10.2/ui.frontend/app/modules/click2chat/index.js */\"./app/modules/click2chat/index.js\");\n\n\n//# sourceURL=webpack:///multi_./app/modules/click2chat/index.js?");

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
/******/ 	return __webpack_require__(__webpack_require__.s = 70);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/modules/dynamic-switch/dynamic-switch.js":
/*!******************************************************!*\
  !*** ./app/modules/dynamic-switch/dynamic-switch.js ***!
  \******************************************************/
/*! exports provided: initKPDynamicSwitch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initKPDynamicSwitch\", function() { return initKPDynamicSwitch; });\nvar jsonStore = localStorage;\nvar jsonPrefix = 'jsonConfigs.';\nvar targetCookieName = 'DSTargetEnv';\nvar testModeCookieName = 'servicesTestMode';\nvar targetDomainName = location.hostname === 'localhost' ? 'localhost' : '.kaiserpermanente.org';\nvar componentHTML = \"\\n    <div class=\\\"navigational-picker region-picker dynamic-switch\\\">\\n        <div class=\\\"regionPicker\\\">\\n            <button aria-expanded=\\\"false\\\" aria-haspopup=\\\"listbox\\\" class=\\\"navigational-select-dropdown\\\">\\n                <span class=\\\"screenreader-only\\\">Environment</span>\\n                <span class=\\\"navigational-select-dropdown-value\\\">Choose your environment</span>\\n                <i aria-hidden=\\\"true\\\" class=\\\"icon-chevron-down\\\"></i>\\n            </button>\\n            <ul class=\\\"navigational-select-dropdown__list\\\" role=\\\"listbox\\\"></ul>\\n        </div>\\n    </div>\";\nvar refs = 0;\nvar _getKPCookie = function _getKPCookie(name, fallback) {\n  return Cookies.get(name, {\n    domain: targetDomainName\n  }) || fallback;\n};\nvar _setKPCookie = function _setKPCookie(name, value) {\n  if (!value) {\n    Cookies.remove(name, {\n      domain: targetDomainName\n    });\n  } else {\n    Cookies.set(name, value, {\n      path: '/',\n      domain: targetDomainName\n    });\n  }\n};\nvar getTestModeCookie = function getTestModeCookie(fallback) {\n  return _getKPCookie(testModeCookieName, fallback);\n};\nvar setTestModeCookie = function setTestModeCookie(value) {\n  return _setKPCookie(testModeCookieName, value);\n};\nvar getDSTargetCookie = function getDSTargetCookie(fallback) {\n  return _getKPCookie(targetCookieName, fallback);\n};\nvar setDSTargetCookie = function setDSTargetCookie(value) {\n  return _setKPCookie(targetCookieName, value);\n};\nvar getDSTargetStore = function getDSTargetStore(fallback) {\n  return jsonStore.getItem(\"\".concat(jsonPrefix, \"env\")) || fallback;\n};\nvar setDSTargetStore = function setDSTargetStore(value) {\n  jsonStore.setItem(\"\".concat(jsonPrefix, \"env\"), value);\n};\nvar cacheJSONConfig = function cacheJSONConfig(appname, env) {\n  return $.ajax(\"/config-json/\".concat(appname, \".json?env=\").concat(encodeURIComponent(env))).then(function (data) {\n    return jsonStore.setItem(\"\".concat(jsonPrefix).concat(appname), JSON.stringify(data));\n  });\n};\nvar syncEnvironment = function syncEnvironment(envKey) {\n  envKey = envKey || getDSTargetCookie();\n  var configs = jsonConfigs.dsTargetApps;\n  if (configs && envKey) {\n    var calls = \"kp-foundation:\".concat(configs).split(':').map(function (name) {\n      return cacheJSONConfig(name, envKey);\n    });\n    setDSTargetStore(envKey);\n  } else {\n    var keys = Object.keys(jsonStore).filter(function (key) {\n      return key.startsWith(jsonPrefix);\n    });\n    keys.forEach(function (key) {\n      return jsonStore.removeItem(key);\n    });\n    location.reload();\n  }\n};\nvar handleSwitch = function handleSwitch(e) {\n  if (e.key === undefined || e.key === 'Enter') {\n    e.preventDefault();\n    var target = e.target.tagName === 'A' ? e.target.parentNode : e.target;\n    setDSTargetCookie(target.dataset.key);\n    syncEnvironment(target.dataset.key);\n    'KPDL' in window && KPDL.reset();\n  }\n};\nvar handleTestMode = function handleTestMode(e) {\n  setTestModeCookie(e.target.checked);\n  // optional: do we need to sync?\n  // document.querySelectorAll('.services-test-mode .check-box').forEach(chk => chk.checked = e.target.checked);\n};\nvar renderItem = function renderItem(key, value) {\n  return \"<li aria-selected=\\\"false\\\" class=\\\"navigational-select-value region-select-value\\\" data-value=\\\"\".concat(value, \"\\\" data-key=\\\"\").concat(key, \"\\\" tabindex=\\\"-1\\\">\\n        <a href=\\\"#\\\">\").concat(value, \"</a></li>\");\n};\nvar renderPicker = function renderPicker(selector) {\n  var container = document.querySelector(selector);\n  if (!container) {\n    console.log(\"[DynamicSwitch]: \\\"\".concat(selector, \"\\\" not valid selector\"));\n    return;\n  } else if (!jsonConfigs.global.dsEnvList) {\n    console.log(\"[DynamicSwitch]: dsEnvList is not available\");\n    return;\n  }\n  refs++;\n  var isTestMode = getTestModeCookie() ? ' checked' : '';\n  var checkboxHTML = \"<div class=\\\"services-test-mode\\\"><input\".concat(isTestMode, \" class=\\\"check-box\\\" id=\\\"test-mode-\").concat(refs, \"\\\" type=\\\"checkbox\\\">\\n        <label for=\\\"test-mode-\").concat(refs, \"\\\" style=\\\"display:inline;margin:0;font-size:13px;\\\"><span aria-hidden=\\\"true\\\"></span>Test Mode</label></div>\");\n\n  // inject nav picker\n  var html = container.nodeName == 'UL' ? \"<li>\".concat(checkboxHTML, \"</li><li>\").concat(componentHTML, \"</li>\") : \"\".concat(checkboxHTML).concat(componentHTML);\n  container.insertAdjacentHTML('afterbegin', html);\n\n  // inject environment entries\n  var initialKey = getDSTargetCookie();\n  var display = document.querySelector(\"\".concat(selector, \" .dynamic-switch .navigational-select-dropdown-value\"));\n  var list = document.querySelector(\"\".concat(selector, \" .dynamic-switch .navigational-select-dropdown__list\"));\n  var chkbox = document.querySelector(\"\".concat(selector, \" .services-test-mode .check-box\"));\n  var envList = jsonConfigs.global.dsEnvList.filter(function (item) {\n    return item.envKey || initialKey;\n  });\n  var selected = initialKey && envList.find(function (item) {\n    return item.envKey === initialKey;\n  });\n  envList.forEach(function (item) {\n    return list.insertAdjacentHTML('beforeend', renderItem(item.envKey, item.envValue));\n  });\n  if (selected) {\n    display.innerHTML = selected.envValue;\n  }\n\n  // initialize events\n  $kp.GS.NavigationalPicker.init();\n  list.addEventListener('click', handleSwitch);\n  list.addEventListener('keydown', handleSwitch);\n  chkbox.addEventListener('click', handleTestMode);\n};\nvar autoSync = function autoSync() {\n  var cookieKey = getDSTargetCookie();\n  if (jsonConfigs.dsTargetApps && cookieKey !== getDSTargetStore()) {\n    console.log('[DynamicSwitch]: Auto sync', cookieKey);\n    syncEnvironment(cookieKey);\n  }\n};\nvar initKPDynamicSwitch = function initKPDynamicSwitch() {\n  window.$kp = window.$kp || {};\n  var $kp = window.$kp;\n  $kp.GS = $kp.GS || {};\n  $kp.GS.DynSwitch = {\n    ready: function ready() {\n      return Promise.resolve(getDSTargetCookie());\n    },\n    // legacy\n    render: renderPicker,\n    sync: syncEnvironment\n  };\n  autoSync();\n};\n\n\n//# sourceURL=webpack:///./app/modules/dynamic-switch/dynamic-switch.js?");

/***/ }),

/***/ "./app/modules/dynamic-switch/index.js":
/*!*********************************************!*\
  !*** ./app/modules/dynamic-switch/index.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dynamic_switch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dynamic-switch */ \"./app/modules/dynamic-switch/dynamic-switch.js\");\n\nObject(_dynamic_switch__WEBPACK_IMPORTED_MODULE_0__[\"initKPDynamicSwitch\"])();\n\n//# sourceURL=webpack:///./app/modules/dynamic-switch/index.js?");

/***/ }),

/***/ 70:
/*!***************************************************!*\
  !*** multi ./app/modules/dynamic-switch/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! /apps/jenkins-agent/agent/workspace/ion_release_kp-foundation-4.10.2/ui.frontend/app/modules/dynamic-switch/index.js */\"./app/modules/dynamic-switch/index.js\");\n\n\n//# sourceURL=webpack:///multi_./app/modules/dynamic-switch/index.js?");

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
/******/ 	return __webpack_require__(__webpack_require__.s = 73);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/modules/region-modal/index.js":
/*!*******************************************!*\
  !*** ./app/modules/region-modal/index.js ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _region_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./region-modal */ \"./app/modules/region-modal/region-modal.js\");\n\n$(function () {\n  Object(_region_modal__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n});\n\n//# sourceURL=webpack:///./app/modules/region-modal/index.js?");

/***/ }),

/***/ "./app/modules/region-modal/region-modal.js":
/*!**************************************************!*\
  !*** ./app/modules/region-modal/region-modal.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return initRegionModal; });\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError(\"Cannot call a class as a function\"); }\nfunction _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, \"value\" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }\nfunction _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, \"prototype\", { writable: !1 }), e; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : i + \"\"; }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\nvar REGION_OPTIONS_ID = 'region-input-radio-select';\nvar RegionModal = /*#__PURE__*/function () {\n  function RegionModal() {\n    _classCallCheck(this, RegionModal);\n    var obj = this;\n    this.modal = $kp.GS.Modal.init('regionModal');\n    this.modal.on('hidden.gs.modal', function (e, result) {\n      obj.onClose(result || e.detail);\n    });\n  }\n  return _createClass(RegionModal, [{\n    key: \"open\",\n    value: function open(focusOnClose) {\n      this.focusOnClose = focusOnClose;\n      this.modal.show(focusOnClose);\n    }\n  }, {\n    key: \"onClose\",\n    value: function onClose(result) {\n      if (result.success && result.data[REGION_OPTIONS_ID]) {\n        var option = result.data[REGION_OPTIONS_ID];\n        var target = $(\"li.navigational-select-value[data-region-id=\\\"\".concat(option.regionId, \"\\\"]\"));\n        var data = target.data();\n        if (!data) {\n          return;\n        }\n        var keepParams = target.closest('.region-picker-container').data('keepParams');\n        if (keepParams) {\n          data.regionUri = \"\".concat(data.regionUri).concat(window.location.search).concat(window.location.hash);\n        }\n        window.open(data.regionUri, '_self');\n      }\n    }\n  }]);\n}();\nfunction initRegionModal() {\n  window.$kp = window.$kp || {};\n  var $kp = window.$kp;\n  $kp.GS = $kp.GS || {};\n  $kp.GS.RegionModal = new RegionModal();\n}\n\n//# sourceURL=webpack:///./app/modules/region-modal/region-modal.js?");

/***/ }),

/***/ 73:
/*!*************************************************!*\
  !*** multi ./app/modules/region-modal/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! /apps/jenkins-agent/agent/workspace/ion_release_kp-foundation-4.10.2/ui.frontend/app/modules/region-modal/index.js */\"./app/modules/region-modal/index.js\");\n\n\n//# sourceURL=webpack:///multi_./app/modules/region-modal/index.js?");

/***/ })

/******/ });
!function(e){var n={};function o(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=n,o.d=function(e,n,t){o.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,n){if(1&n&&(e=o(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(o.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)o.d(t,r,function(n){return e[n]}.bind(null,r));return t},o.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(n,"a",n),n},o.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},o.p="",o(o.s=727)}({727:function(e,n,o){e.exports=o(749)},749:function(e,n,o){"use strict";function t(e,n){for(var o=0;o<n.length;o++){var t=n[o];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}o.r(n);var r=function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e);var n=this;this.modal=$kp.GS.Modal.init("regionModal"),this.modal.on("hidden.gs.modal",(function(e,o){n.onClose(o)}))}var n,o,r;return n=e,(o=[{key:"open",value:function(e){this.focusOnClose=e,this.modal.show(e)}},{key:"onClose",value:function(e){if(e.success&&e.data["region-input-radio-select"]){var n=e.data["region-input-radio-select"],o=$('li.navigational-select-value[data-region-id="'.concat(n.regionId,'"]')),t=o.data();if(!t)return;o.closest(".region-picker-container").data("keepParams")&&(t.regionUri="".concat(t.regionUri).concat(window.location.search).concat(window.location.hash)),window.open(t.regionUri,"_self")}}}])&&t(n.prototype,o),r&&t(n,r),e}();$((function(){!function(){window.$kp=window.$kp||{};var e=window.$kp;e.GS=e.GS||{},e.GS.RegionModal=new r}()}))}});
