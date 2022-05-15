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

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.IndexOpenController = void 0;\r\nconst AllRepo_1 = __webpack_require__(/*! ../Repo/AllRepo */ \"./dst/Index/Repo/AllRepo.js\");\r\nclass IndexOpenController {\r\n    constructor() { }\r\n    Init() {\r\n        let nav = AllRepo_1.AllRepo.NavWindow.Render();\r\n        let site = AllRepo_1.AllRepo.SiteWindow.Render();\r\n        let footer = AllRepo_1.AllRepo.FooterWindow.Render();\r\n    }\r\n}\r\nexports.IndexOpenController = IndexOpenController;\r\n\n\n//# sourceURL=webpack://c10_navigation_web/./dst/Index/Controllers/IndexOpenController.js?");

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

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.AllRepo = void 0;\r\nconst FooterWindow_1 = __webpack_require__(/*! ../../UI/FooterWindow */ \"./dst/UI/FooterWindow.js\");\r\nconst NavWindow_1 = __webpack_require__(/*! ../../UI/NavWindow */ \"./dst/UI/NavWindow.js\");\r\nconst SiteWindow_1 = __webpack_require__(/*! ../../UI/SiteWindow/SiteWindow */ \"./dst/UI/SiteWindow/SiteWindow.js\");\r\nclass AllRepo {\r\n    static get NavWindow() { return this.navWindow; }\r\n    static set NavWindow(value) { this.navWindow = value; }\r\n    static get SiteWindow() { return this.siteWindow; }\r\n    static set SiteWindow(value) { this.siteWindow = value; }\r\n    static get FooterWindow() { return this.footerWindow; }\r\n    static set FooterWindow(value) { this.footerWindow = value; }\r\n    static Ctor() {\r\n        this.navWindow = new NavWindow_1.NavWindow();\r\n        this.siteWindow = new SiteWindow_1.SiteWindow();\r\n        this.footerWindow = new FooterWindow_1.FooterWindow();\r\n    }\r\n}\r\nexports.AllRepo = AllRepo;\r\n\n\n//# sourceURL=webpack://c10_navigation_web/./dst/Index/Repo/AllRepo.js?");

/***/ }),

/***/ "./dst/UI/Common/CommonUI.js":
/*!***********************************!*\
  !*** ./dst/UI/Common/CommonUI.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.CommonUI = void 0;\r\nvar CommonUI;\r\n(function (CommonUI) {\r\n    function CreateSectionTitle(title, parent) {\r\n        let section = document.createElement(\"div\");\r\n        section.className = \"section-title\";\r\n        parent.appendChild(section);\r\n        let label = document.createElement(\"i\");\r\n        label.innerText = title;\r\n        section.appendChild(label);\r\n        return section;\r\n    }\r\n    CommonUI.CreateSectionTitle = CreateSectionTitle;\r\n})(CommonUI = exports.CommonUI || (exports.CommonUI = {}));\r\n\n\n//# sourceURL=webpack://c10_navigation_web/./dst/UI/Common/CommonUI.js?");

/***/ }),

/***/ "./dst/UI/FooterWindow.js":
/*!********************************!*\
  !*** ./dst/UI/FooterWindow.js ***!
  \********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.FooterWindow = void 0;\r\nclass FooterWindow {\r\n    constructor() {\r\n        this.name = \"footer-window\";\r\n    }\r\n    Render() {\r\n        // Create Root\r\n        let root = document.createElement(\"div\");\r\n        root.id = this.name;\r\n        root.className += this.name;\r\n        __webpack_require__.g.APP.appendChild(root);\r\n        this.root = root;\r\n        // Create Beian\r\n        let beian = this.CreateInfo();\r\n        root.appendChild(beian);\r\n        // Create Author\r\n        let author = this.CreateAuthor();\r\n        root.appendChild(author);\r\n    }\r\n    CreateInfo() {\r\n        let info = document.createElement(\"div\");\r\n        // 备案信息\r\n        let beian = document.createElement(\"a\");\r\n        beian.innerText = \"备案中\";\r\n        beian.target = \"_blank\";\r\n        beian.href = \"https://beian.miit.gov.cn\";\r\n        info.appendChild(beian);\r\n        return info;\r\n    }\r\n    CreateAuthor() {\r\n        let info = document.createElement(\"div\");\r\n        // 作者信息\r\n        let author = document.createElement(\"i\");\r\n        author.innerText = \"作者: 杰克有茶\";\r\n        info.appendChild(author);\r\n        info.innerHTML += \"&nbsp; / &nbsp;\";\r\n        // 邮箱\r\n        let mail = document.createElement(\"a\");\r\n        mail.innerText = \"邮箱: chenwansal1@163.com\";\r\n        mail.target = \"_blank\";\r\n        mail.href = \"mailto: chenwansal1@163.com\";\r\n        info.appendChild(mail);\r\n        info.innerHTML += \"&nbsp; / &nbsp;\";\r\n        // 即刻\r\n        let jike = document.createElement(\"a\");\r\n        jike.innerText = \"即刻主页: @杰克有茶\";\r\n        jike.target = \"_blank\";\r\n        jike.href = \"https://web.okjike.com/u/C027E21D-DFD6-4F88-AF40-31871E1FB6F4\";\r\n        info.appendChild(jike);\r\n        return info;\r\n    }\r\n}\r\nexports.FooterWindow = FooterWindow;\r\n\n\n//# sourceURL=webpack://c10_navigation_web/./dst/UI/FooterWindow.js?");

/***/ }),

/***/ "./dst/UI/NavWindow.js":
/*!*****************************!*\
  !*** ./dst/UI/NavWindow.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.NavWindow = void 0;\r\n/** 导航栏\r\n *      Logo\r\n */\r\nclass NavWindow {\r\n    constructor() {\r\n        this.name = \"nav-window\";\r\n    }\r\n    Render() {\r\n        // Create Root\r\n        let root = document.createElement(\"div\");\r\n        root.id = this.name;\r\n        __webpack_require__.g.APP.appendChild(root);\r\n        this.root = root;\r\n        // Create Logo\r\n        let logo = this.CreateLogo(\"/\");\r\n        root.appendChild(logo);\r\n        this.logo = logo;\r\n        // Add Items\r\n        let mainPageItem = this.AddNavItem(\"/\", \"主页\");\r\n        root.appendChild(mainPageItem);\r\n        // Append Root to APP\r\n        return this;\r\n    }\r\n    CreateLogo(url) {\r\n        let logo = document.createElement(\"div\");\r\n        logo.id = \"logo\";\r\n        logo.className += \"title3\";\r\n        logo.innerHTML = `<a href=${url}>C10 导航</a>`;\r\n        logo.title = \"收录C10爱逛的网站和一些工具\";\r\n        return logo;\r\n    }\r\n    AddNavItem(url, text) {\r\n        let item = document.createElement(\"div\");\r\n        item.innerHTML = `<a target='_blank' href=${url}>${text}</a>`;\r\n        return item;\r\n    }\r\n}\r\nexports.NavWindow = NavWindow;\r\n\n\n//# sourceURL=webpack://c10_navigation_web/./dst/UI/NavWindow.js?");

/***/ }),

/***/ "./dst/UI/SiteWindow/SiteGroupElement.js":
/*!***********************************************!*\
  !*** ./dst/UI/SiteWindow/SiteGroupElement.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.SiteGroupElement = void 0;\r\nclass SiteGroupElement {\r\n    constructor() { }\r\n    Render(parent, title) {\r\n        let root = document.createElement(\"div\");\r\n        root.className += \"site-group\";\r\n        parent.appendChild(root);\r\n        this.root = root;\r\n        let label = document.createElement(\"label\");\r\n        label.innerText = title;\r\n        label.className += \"title5\";\r\n        root.appendChild(label);\r\n        return this;\r\n    }\r\n    AddSiteItem(url, text) {\r\n        let a = document.createElement(\"a\");\r\n        a.href = url;\r\n        a.innerText = text;\r\n        a.target = \"_blank\";\r\n        this.root.appendChild(a);\r\n        return a;\r\n    }\r\n}\r\nexports.SiteGroupElement = SiteGroupElement;\r\n\n\n//# sourceURL=webpack://c10_navigation_web/./dst/UI/SiteWindow/SiteGroupElement.js?");

/***/ }),

/***/ "./dst/UI/SiteWindow/SiteWindow.js":
/*!*****************************************!*\
  !*** ./dst/UI/SiteWindow/SiteWindow.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.SiteWindow = void 0;\r\nconst CommonUI_1 = __webpack_require__(/*! ../Common/CommonUI */ \"./dst/UI/Common/CommonUI.js\");\r\nconst SiteGroupElement_1 = __webpack_require__(/*! ./SiteGroupElement */ \"./dst/UI/SiteWindow/SiteGroupElement.js\");\r\n/** 站点列表\r\n *      视频网站\r\n *      直播网站\r\n */\r\nclass SiteWindow {\r\n    constructor() {\r\n        this.name = \"site-window\";\r\n    }\r\n    Render() {\r\n        // Create Section\r\n        let section = CommonUI_1.CommonUI.CreateSectionTitle(\"网站列表\", __webpack_require__.g.APP);\r\n        // Create Root\r\n        let root = document.createElement(\"div\");\r\n        root.id = this.name;\r\n        root.className += this.name;\r\n        __webpack_require__.g.APP.appendChild(root);\r\n        this.root = root;\r\n        // Create Site Groups\r\n        let videoGroup = this.CreateSiteGroup(\"视频网站\");\r\n        videoGroup.AddSiteItem(\"https://v.qq.com\", \"腾讯视频\");\r\n        videoGroup.AddSiteItem(\"https://www.bilibili.com/\", \"哔哩哔哩\");\r\n        videoGroup.AddSiteItem(\"https://www.iqiyi.com/\", \"爱奇艺\");\r\n        videoGroup.AddSiteItem(\"https://www.youku.com/\", \"优酷\");\r\n        videoGroup.AddSiteItem(\"https://www.acfun.cn/\", \"AcFun\");\r\n        let liveGroup = this.CreateSiteGroup(\"直播网站\");\r\n        liveGroup.AddSiteItem(\"https://www.douyu.com/\", \"斗鱼\");\r\n        liveGroup.AddSiteItem(\"https://www.huya.com/\", \"虎牙\");\r\n        return this;\r\n    }\r\n    CreateSiteGroup(title) {\r\n        let siteGroup = new SiteGroupElement_1.SiteGroupElement();\r\n        siteGroup.Render(this.root, title);\r\n        return siteGroup;\r\n    }\r\n}\r\nexports.SiteWindow = SiteWindow;\r\n\n\n//# sourceURL=webpack://c10_navigation_web/./dst/UI/SiteWindow/SiteWindow.js?");

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