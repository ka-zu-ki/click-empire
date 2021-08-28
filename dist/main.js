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

/***/ "./src/class.ts":
/*!**********************!*\
  !*** ./src/class.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Item\": () => (/* binding */ Item)\n/* harmony export */ });\nvar Item = /** @class */ (function () {\n    function Item(name, max, price, perPrice, imgUrl, amount) {\n        this.name = name;\n        this.max = max;\n        this.price = price;\n        this.perPrice = perPrice;\n        this.imgUrl = imgUrl;\n        this.amount = amount;\n    }\n    return Item;\n}());\n\n\n\n//# sourceURL=webpack://click-empire/./src/class.ts?");

/***/ }),

/***/ "./src/data.ts":
/*!*********************!*\
  !*** ./src/data.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"items\": () => (/* binding */ items)\n/* harmony export */ });\n/* harmony import */ var _class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./class */ \"./src/class.ts\");\n\nvar items = [\n    new _class__WEBPACK_IMPORTED_MODULE_0__.Item('House', 100, 30000, 30, 'https://cdn.pixabay.com/photo/2016/11/18/17/46/house-1836070_1280.jpg', 0),\n    new _class__WEBPACK_IMPORTED_MODULE_0__.Item('Flip machine', 500, 15000, 25, 'https://cdn.pixabay.com/photo/2017/05/24/19/27/bbq-2341356_1280.jpg', 0),\n    new _class__WEBPACK_IMPORTED_MODULE_0__.Item('ETF Stock', Infinity, 30000, 0.1, 'https://cdn.pixabay.com/photo/2017/10/26/17/40/dollar-2891817_1280.jpg', 0),\n    new _class__WEBPACK_IMPORTED_MODULE_0__.Item('Coffee Stand', 1000, 30000, 30, 'https://cdn.pixabay.com/photo/2016/07/26/16/12/kaffeerad-1543158_1280.jpg', 0),\n    new _class__WEBPACK_IMPORTED_MODULE_0__.Item('Mansion', 20, 250000000, 500000, 'https://cdn.pixabay.com/photo/2017/07/03/21/35/house-2469067_1280.jpg', 0),\n];\n\n\n\n//# sourceURL=webpack://click-empire/./src/data.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data */ \"./src/data.ts\");\n\nvar User = /** @class */ (function () {\n    function User(name, age, days, money) {\n        this.name = name;\n        this.age = age;\n        this.days = days;\n        this.money = money;\n    }\n    return User;\n}());\nvar User1 = new User('Steave', 25, 0, 0);\nvar userName = document.getElementById('userName');\nvar age = document.getElementById('age');\nvar days = document.getElementById('days');\nvar money = document.getElementById('money');\nuserName.innerHTML = User1.name;\nage.innerHTML = User1.age + \" years old\";\ndays.innerHTML = \"\" + User1.days.toLocaleString();\nmoney.innerHTML = \"\" + User1.money.toLocaleString();\nvar cardContainer = \"<div>\";\n_data__WEBPACK_IMPORTED_MODULE_0__.items.map(function (item) {\n    cardContainer += \"\\n  <div class=\\\"grid grid-cols-4 mb-1 gap-1 bg-gray-600\\\">\\n  <div class=\\\"h-20 p-1\\\">\\n  <img src=\" + item.imgUrl + \" class=\\\"h-full\\\" />\\n  </div>\\n  <div class=\\\"flex flex-col justify-center col-span-2\\\">\\n  <p class=\\\"text-3xl\\\">\" + item.name + \"</p>\\n  <div class=\\\"flex mt-1\\\">\\n  <p id=\\\"itemPrice\\\">$\" + item.price.toLocaleString() + \"</p>\\n  <p id=\\\"itemPer\\\" class=\\\"text-green-400 ml-14\\\">+$\" + item.perPrice.toLocaleString() + \" / sec</p>\\n  </div>\\n  </div>\\n  <div id=\\\"itemAmount\\\" class=\\\"flex justify-center items-center text-3xl\\\">\\n  \" + item.amount + \"\\n  </div>\\n  </div>\\n  \";\n});\ncardContainer += \"</div>\";\nvar cards = document.getElementById('cards');\ncards.innerHTML = cardContainer;\n// export default Item;\n\n\n//# sourceURL=webpack://click-empire/./src/index.ts?");

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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;