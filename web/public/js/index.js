/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./dst/Index/Controllers/IndexOpenController.js":
/*!******************************************************!*\
  !*** ./dst/Index/Controllers/IndexOpenController.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.IndexOpenController = void 0;\r\nconst AllRepo_1 = __webpack_require__(/*! ../Repo/AllRepo */ \"./dst/Index/Repo/AllRepo.js\");\r\nclass IndexOpenController {\r\n    constructor() { }\r\n    Init() {\r\n        let nav = AllRepo_1.AllRepo.NavWindow.Render();\r\n        let site = AllRepo_1.AllRepo.SiteWindow.Render();\r\n    }\r\n}\r\nexports.IndexOpenController = IndexOpenController;\r\n\n\n//# sourceURL=webpack://c10_navigation_web/./dst/Index/Controllers/IndexOpenController.js?");

/***/ }),

/***/ "./dst/Index/Index.js":
/*!****************************!*\
  !*** ./dst/Index/Index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst IndexOpenController_1 = __webpack_require__(/*! ./Controllers/IndexOpenController */ \"./dst/Index/Controllers/IndexOpenController.js\");\r\nconst AllRepo_1 = __webpack_require__(/*! ./Repo/AllRepo */ \"./dst/Index/Repo/AllRepo.js\");\r\nfunction Main() {\r\n    __webpack_require__.g.APP = document.getElementById(\"app\");\r\n    // ==== CTOR ====\r\n    // Repo\r\n    AllRepo_1.AllRepo.Ctor();\r\n    // Controller\r\n    let indexOpenController = new IndexOpenController_1.IndexOpenController();\r\n    // ==== INIT ====\r\n    indexOpenController.Init();\r\n    // ==== TICK ====\r\n    let tickInterval = setInterval(() => {\r\n    }, 2000);\r\n    // ==== ON TEAR DOWN ====\r\n    window.addEventListener(\"close\", () => {\r\n        clearInterval(tickInterval);\r\n    });\r\n    window.addEventListener(\"abort\", () => {\r\n        clearInterval(tickInterval);\r\n    });\r\n    console.log(\"Open Index\");\r\n}\r\nMain();\r\n\n\n//# sourceURL=webpack://c10_navigation_web/./dst/Index/Index.js?");

/***/ }),

/***/ "./dst/Index/Repo/AllRepo.js":
/*!***********************************!*\
  !*** ./dst/Index/Repo/AllRepo.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.AllRepo = void 0;\r\nconst NavWindow_1 = __webpack_require__(/*! ../../UI/NavWindow */ \"./dst/UI/NavWindow.js\");\r\nconst SiteWindow_1 = __webpack_require__(/*! ../../UI/SiteWindow */ \"./dst/UI/SiteWindow.js\");\r\nclass AllRepo {\r\n    static get NavWindow() { return this.navWindow; }\r\n    static set NavWindow(value) { this.navWindow = value; }\r\n    static get SiteWindow() { return this.siteWindow; }\r\n    static set SiteWindow(value) { this.siteWindow = value; }\r\n    static Ctor() {\r\n        this.navWindow = new NavWindow_1.NavWindow();\r\n        this.siteWindow = new SiteWindow_1.SiteWindow();\r\n    }\r\n}\r\nexports.AllRepo = AllRepo;\r\n\n\n//# sourceURL=webpack://c10_navigation_web/./dst/Index/Repo/AllRepo.js?");

/***/ }),

/***/ "./dst/UI/NavWindow.js":
/*!*****************************!*\
  !*** ./dst/UI/NavWindow.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.NavWindow = void 0;\r\n/** 导航栏\r\n *      Logo\r\n */\r\nclass NavWindow {\r\n    constructor() {\r\n        this.name = \"nav-window\";\r\n    }\r\n    Render() {\r\n        // Create Root\r\n        let root = document.createElement(\"div\");\r\n        root.id = this.name;\r\n        __webpack_require__.g.APP.appendChild(root);\r\n        this.root = root;\r\n        // Create Logo\r\n        let logo = this.CreateLogo(\"/\");\r\n        root.appendChild(logo);\r\n        this.logo = logo;\r\n        // Add Items\r\n        let mainPageItem = this.AddNavItem(\"/\", \"主页\");\r\n        root.appendChild(mainPageItem);\r\n        // Append Root to APP\r\n        return this;\r\n    }\r\n    CreateLogo(url) {\r\n        let logo = document.createElement(\"div\");\r\n        logo.id = \"logo\";\r\n        logo.className += \"title1\";\r\n        logo.innerHTML = `<a href=${url}>C10 导航</a>`;\r\n        return logo;\r\n    }\r\n    AddNavItem(url, text) {\r\n        let item = document.createElement(\"div\");\r\n        item.className += \"title4\";\r\n        item.innerHTML = `<a href=${url}>${text}</a>`;\r\n        return item;\r\n    }\r\n}\r\nexports.NavWindow = NavWindow;\r\n\n\n//# sourceURL=webpack://c10_navigation_web/./dst/UI/NavWindow.js?");

/***/ }),

/***/ "./dst/UI/SiteWindow.js":
/*!******************************!*\
  !*** ./dst/UI/SiteWindow.js ***!
  \******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.SiteWindow = void 0;\r\n/** 站点列表\r\n *      视频网站\r\n *      直播网站\r\n */\r\nclass SiteWindow {\r\n    constructor() {\r\n        this.name = \"site-window\";\r\n    }\r\n    Render() {\r\n        let root = document.createElement(\"div\");\r\n        root.id = this.name;\r\n        __webpack_require__.g.APP.appendChild(root);\r\n        this.root = root;\r\n        return this;\r\n    }\r\n}\r\nexports.SiteWindow = SiteWindow;\r\n\n\n//# sourceURL=webpack://c10_navigation_web/./dst/UI/SiteWindow.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./dst/Index/Index.js");
/******/ 	
/******/ })()
;