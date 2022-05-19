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

/***/ "./dst/Global/Global.js":
/*!******************************!*\
  !*** ./dst/Global/Global.js ***!
  \******************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Global = void 0;\nexports.Global = {};\nexports[\"default\"] = exports.Global;\n\n\n//# sourceURL=webpack://c10_navigation_web/./dst/Global/Global.js?");

/***/ }),

/***/ "./dst/Index/Controllers/IndexOpenController.js":
/*!******************************************************!*\
  !*** ./dst/Index/Controllers/IndexOpenController.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.IndexOpenController = void 0;\nconst AllRepo_1 = __webpack_require__(/*! ../Repo/AllRepo */ \"./dst/Index/Repo/AllRepo.js\");\nclass IndexOpenController {\n    constructor() { }\n    Init() {\n        let nav = AllRepo_1.AllRepo.NavWindow.Render();\n        let site = AllRepo_1.AllRepo.SiteWindow.Render();\n        let footer = AllRepo_1.AllRepo.FooterWindow.Render();\n    }\n}\nexports.IndexOpenController = IndexOpenController;\n\n\n//# sourceURL=webpack://c10_navigation_web/./dst/Index/Controllers/IndexOpenController.js?");

/***/ }),

/***/ "./dst/Index/Index.js":
/*!****************************!*\
  !*** ./dst/Index/Index.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst Global_1 = __importDefault(__webpack_require__(/*! ../Global/Global */ \"./dst/Global/Global.js\"));\nconst IndexOpenController_1 = __webpack_require__(/*! ./Controllers/IndexOpenController */ \"./dst/Index/Controllers/IndexOpenController.js\");\nconst AllRepo_1 = __webpack_require__(/*! ./Repo/AllRepo */ \"./dst/Index/Repo/AllRepo.js\");\nfunction Main() {\n    Global_1.default.APP = document.getElementById(\"app\");\n    // ==== CTOR ====\n    // Repo\n    AllRepo_1.AllRepo.Ctor();\n    // Controller\n    let indexOpenController = new IndexOpenController_1.IndexOpenController();\n    // ==== INIT ====\n    indexOpenController.Init();\n    // ==== TICK ====\n    let tickInterval = setInterval(() => {\n    }, 2000);\n    // ==== ON TEAR DOWN ====\n    window.addEventListener(\"close\", () => {\n        clearInterval(tickInterval);\n    });\n    window.addEventListener(\"abort\", () => {\n        clearInterval(tickInterval);\n    });\n    console.log(\"Open Index\");\n}\nMain();\n\n\n//# sourceURL=webpack://c10_navigation_web/./dst/Index/Index.js?");

/***/ }),

/***/ "./dst/Index/Repo/AllRepo.js":
/*!***********************************!*\
  !*** ./dst/Index/Repo/AllRepo.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.AllRepo = void 0;\nconst FooterWindow_1 = __webpack_require__(/*! ../../UI/FooterWindow */ \"./dst/UI/FooterWindow.js\");\nconst NavWindow_1 = __webpack_require__(/*! ../../UI/NavWindow */ \"./dst/UI/NavWindow.js\");\nconst SiteWindow_1 = __webpack_require__(/*! ../../UI/SiteWindow/SiteWindow */ \"./dst/UI/SiteWindow/SiteWindow.js\");\nclass AllRepo {\n    static get NavWindow() { return this.navWindow; }\n    static set NavWindow(value) { this.navWindow = value; }\n    static get SiteWindow() { return this.siteWindow; }\n    static set SiteWindow(value) { this.siteWindow = value; }\n    static get FooterWindow() { return this.footerWindow; }\n    static set FooterWindow(value) { this.footerWindow = value; }\n    static Ctor() {\n        this.navWindow = new NavWindow_1.NavWindow();\n        this.siteWindow = new SiteWindow_1.SiteWindow();\n        this.footerWindow = new FooterWindow_1.FooterWindow();\n    }\n}\nexports.AllRepo = AllRepo;\n\n\n//# sourceURL=webpack://c10_navigation_web/./dst/Index/Repo/AllRepo.js?");

/***/ }),

/***/ "./dst/UI/Common/CommonUI.js":
/*!***********************************!*\
  !*** ./dst/UI/Common/CommonUI.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.CommonUI = void 0;\nvar CommonUI;\n(function (CommonUI) {\n    function CreateSectionTitle(title, parent) {\n        let section = document.createElement(\"div\");\n        section.className = \"section-title\";\n        parent.appendChild(section);\n        let label = document.createElement(\"i\");\n        label.innerText = title;\n        section.appendChild(label);\n        return section;\n    }\n    CommonUI.CreateSectionTitle = CreateSectionTitle;\n})(CommonUI = exports.CommonUI || (exports.CommonUI = {}));\n\n\n//# sourceURL=webpack://c10_navigation_web/./dst/UI/Common/CommonUI.js?");

/***/ }),

/***/ "./dst/UI/FooterWindow.js":
/*!********************************!*\
  !*** ./dst/UI/FooterWindow.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.FooterWindow = void 0;\nconst Global_1 = __importDefault(__webpack_require__(/*! ../Global/Global */ \"./dst/Global/Global.js\"));\nclass FooterWindow {\n    constructor() {\n        this.name = \"footer-window\";\n    }\n    Render() {\n        // Create Root\n        let root = document.createElement(\"div\");\n        root.id = this.name;\n        root.className += this.name;\n        Global_1.default.APP.appendChild(root);\n        this.root = root;\n        // Create Beian\n        let beian = this.CreateInfo();\n        root.appendChild(beian);\n        // Create Author\n        let author = this.CreateAuthor();\n        root.appendChild(author);\n    }\n    CreateInfo() {\n        let info = document.createElement(\"div\");\n        // 备案信息\n        let beian = document.createElement(\"a\");\n        beian.innerText = \"闽ICP备2022007026号-1\";\n        beian.target = \"_blank\";\n        beian.href = \"https://beian.miit.gov.cn\";\n        info.appendChild(beian);\n        return info;\n    }\n    CreateAuthor() {\n        let info = document.createElement(\"div\");\n        // 作者信息\n        let author = document.createElement(\"i\");\n        author.innerText = \"作者: 杰克有茶\";\n        info.appendChild(author);\n        info.innerHTML += \"&nbsp; / &nbsp;\";\n        // 邮箱\n        let mail = document.createElement(\"a\");\n        mail.innerText = \"邮箱: chenwansal1@163.com\";\n        mail.target = \"_blank\";\n        mail.href = \"mailto: chenwansal1@163.com\";\n        info.appendChild(mail);\n        info.innerHTML += \"&nbsp; / &nbsp;\";\n        // 即刻\n        let jike = document.createElement(\"a\");\n        jike.innerText = \"即刻主页: @杰克有茶\";\n        jike.target = \"_blank\";\n        jike.href = \"https://web.okjike.com/u/C027E21D-DFD6-4F88-AF40-31871E1FB6F4\";\n        info.appendChild(jike);\n        return info;\n    }\n}\nexports.FooterWindow = FooterWindow;\n\n\n//# sourceURL=webpack://c10_navigation_web/./dst/UI/FooterWindow.js?");

/***/ }),

/***/ "./dst/UI/NavWindow.js":
/*!*****************************!*\
  !*** ./dst/UI/NavWindow.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.NavWindow = void 0;\nconst Global_1 = __importDefault(__webpack_require__(/*! ../Global/Global */ \"./dst/Global/Global.js\"));\n/** 导航栏\n *      Logo\n */\nclass NavWindow {\n    constructor() {\n        this.name = \"nav-window\";\n    }\n    Render() {\n        // Create Root\n        let root = document.createElement(\"div\");\n        root.id = this.name;\n        Global_1.default.APP.appendChild(root);\n        this.root = root;\n        // Create Logo\n        let logo = this.CreateLogo(\"/\");\n        root.appendChild(logo);\n        this.logo = logo;\n        // Add Items\n        let mainPageItem = this.AddNavItem(\"/\", \"主页\");\n        root.appendChild(mainPageItem);\n        // Append Root to APP\n        return this;\n    }\n    CreateLogo(url) {\n        let logo = document.createElement(\"div\");\n        logo.id = \"logo\";\n        logo.className += \"title3\";\n        logo.innerHTML = `<a href=${url}>C10 导航</a>`;\n        logo.title = \"收录C10爱逛的网站和一些工具\";\n        return logo;\n    }\n    AddNavItem(url, text) {\n        let item = document.createElement(\"div\");\n        item.innerHTML = `<a target='_blank' href=${url}>${text}</a>`;\n        return item;\n    }\n}\nexports.NavWindow = NavWindow;\n\n\n//# sourceURL=webpack://c10_navigation_web/./dst/UI/NavWindow.js?");

/***/ }),

/***/ "./dst/UI/SiteWindow/SiteGroupElement.js":
/*!***********************************************!*\
  !*** ./dst/UI/SiteWindow/SiteGroupElement.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.SiteGroupElement = void 0;\nclass SiteGroupElement {\n    constructor() { }\n    Render(parent, title) {\n        let root = document.createElement(\"div\");\n        root.className += \"site-group\";\n        parent.appendChild(root);\n        this.root = root;\n        let label = document.createElement(\"label\");\n        label.innerText = title;\n        label.className += \"title5\";\n        root.appendChild(label);\n        return this;\n    }\n    AddSiteItem(url, text) {\n        let a = document.createElement(\"a\");\n        a.href = url;\n        a.innerText = text;\n        a.target = \"_blank\";\n        this.root.appendChild(a);\n        return a;\n    }\n}\nexports.SiteGroupElement = SiteGroupElement;\n\n\n//# sourceURL=webpack://c10_navigation_web/./dst/UI/SiteWindow/SiteGroupElement.js?");

/***/ }),

/***/ "./dst/UI/SiteWindow/SiteWindow.js":
/*!*****************************************!*\
  !*** ./dst/UI/SiteWindow/SiteWindow.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.SiteWindow = void 0;\nconst Global_1 = __importDefault(__webpack_require__(/*! ../../Global/Global */ \"./dst/Global/Global.js\"));\nconst CommonUI_1 = __webpack_require__(/*! ../Common/CommonUI */ \"./dst/UI/Common/CommonUI.js\");\nconst SiteGroupElement_1 = __webpack_require__(/*! ./SiteGroupElement */ \"./dst/UI/SiteWindow/SiteGroupElement.js\");\n/** 站点列表\n *      视频网站\n *      直播网站\n */\nclass SiteWindow {\n    constructor() {\n        this.name = \"site-window\";\n    }\n    Render() {\n        // Create Section\n        let section = CommonUI_1.CommonUI.CreateSectionTitle(\"网站列表\", Global_1.default.APP);\n        // Create Root\n        let root = document.createElement(\"div\");\n        root.id = this.name;\n        root.className += this.name;\n        Global_1.default.APP.appendChild(root);\n        this.root = root;\n        // Create Site Groups\n        let videoGroup = this.CreateSiteGroup(\"视频网站\");\n        videoGroup.AddSiteItem(\"https://v.qq.com\", \"腾讯视频\");\n        videoGroup.AddSiteItem(\"https://www.bilibili.com/\", \"哔哩哔哩\");\n        videoGroup.AddSiteItem(\"https://www.iqiyi.com/\", \"爱奇艺\");\n        videoGroup.AddSiteItem(\"https://www.youku.com/\", \"优酷\");\n        videoGroup.AddSiteItem(\"https://www.acfun.cn/\", \"AcFun\");\n        let liveGroup = this.CreateSiteGroup(\"直播网站\");\n        liveGroup.AddSiteItem(\"https://www.douyu.com/\", \"斗鱼\");\n        liveGroup.AddSiteItem(\"https://www.huya.com/\", \"虎牙\");\n        return this;\n    }\n    CreateSiteGroup(title) {\n        let siteGroup = new SiteGroupElement_1.SiteGroupElement();\n        siteGroup.Render(this.root, title);\n        return siteGroup;\n    }\n}\nexports.SiteWindow = SiteWindow;\n\n\n//# sourceURL=webpack://c10_navigation_web/./dst/UI/SiteWindow/SiteWindow.js?");

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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./dst/Index/Index.js");
/******/ 	
/******/ })()
;