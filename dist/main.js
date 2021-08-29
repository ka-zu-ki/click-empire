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

/***/ "./src/ts/Controller.ts":
/*!******************************!*\
  !*** ./src/ts/Controller.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _View__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./View */ \"./src/ts/View.ts\");\n/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./User */ \"./src/ts/User.ts\");\n\n\nvar Controller = /** @class */ (function () {\n    function Controller() {\n    }\n    Controller.startGame = function () {\n        var start = document.getElementById('startGameBtn');\n        var login = document.getElementById('loginBtn');\n        var form = document.getElementById('form');\n        var mainPage = document.getElementById('mainPage');\n        start.addEventListener('click', function (e) {\n            var userNameInput = (document.getElementById('userName')).value;\n            if (userNameInput.length != 0) {\n                e.preventDefault();\n                form.classList.add('hidden');\n                mainPage.classList.remove('hidden');\n                var userData = new _User__WEBPACK_IMPORTED_MODULE_1__.default(userNameInput, 25, 0, 50000, 0);\n                localStorage.setItem('userData', JSON.stringify(userData));\n                var data = localStorage.getItem('userData');\n                _View__WEBPACK_IMPORTED_MODULE_0__.default.initialRender(data);\n            }\n        });\n        login.addEventListener('click', function (e) {\n            var userNameInput = (document.getElementById('userName')).value;\n            var data = localStorage.getItem('userData');\n            var user = JSON.parse(data);\n            if (userNameInput.length != 0 && userNameInput == user.name) {\n                e.preventDefault();\n                form.classList.add('hidden');\n                mainPage.classList.remove('hidden');\n                _View__WEBPACK_IMPORTED_MODULE_0__.default.initialRender(data);\n            }\n            else {\n                window.alert('名前が違います');\n            }\n        });\n    };\n    Controller.clickBurger = function (user) {\n        user.burgers += 1;\n        user.money += 25;\n        _View__WEBPACK_IMPORTED_MODULE_0__.default.updateClickBurger(user);\n    };\n    Controller.save = function (user) {\n        localStorage.setItem('userData', JSON.stringify(user));\n        console.log(localStorage.getItem('userData'));\n    };\n    return Controller;\n}());\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Controller);\n\n\n//# sourceURL=webpack://click-empire/./src/ts/Controller.ts?");

/***/ }),

/***/ "./src/ts/Item.ts":
/*!************************!*\
  !*** ./src/ts/Item.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Item\": () => (/* binding */ Item),\n/* harmony export */   \"items\": () => (/* binding */ items)\n/* harmony export */ });\nvar Item = /** @class */ (function () {\n    function Item(name, max, price, perPrice, imgUrl, amount) {\n        this.name = name;\n        this.max = max;\n        this.price = price;\n        this.perPrice = perPrice;\n        this.imgUrl = imgUrl;\n        this.amount = amount;\n    }\n    return Item;\n}());\nvar items = [\n    new Item('House', 100, 30000, 30, 'https://cdn.pixabay.com/photo/2016/11/18/17/46/house-1836070_1280.jpg', 0),\n    new Item('Flip machine', 500, 15000, 25, 'https://cdn.pixabay.com/photo/2017/05/24/19/27/bbq-2341356_1280.jpg', 0),\n    new Item('ETF Stock', Infinity, 30000, 0.1, 'https://cdn.pixabay.com/photo/2017/10/26/17/40/dollar-2891817_1280.jpg', 0),\n    new Item('Coffee Stand', 1000, 30000, 30, 'https://cdn.pixabay.com/photo/2016/07/26/16/12/kaffeerad-1543158_1280.jpg', 0),\n    new Item('Mansion', 20, 250000000, 500000, 'https://cdn.pixabay.com/photo/2017/07/03/21/35/house-2469067_1280.jpg', 0),\n];\n\n\n\n//# sourceURL=webpack://click-empire/./src/ts/Item.ts?");

/***/ }),

/***/ "./src/ts/User.ts":
/*!************************!*\
  !*** ./src/ts/User.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar User = /** @class */ (function () {\n    function User(name, age, days, money, burgers) {\n        this.name = name;\n        this.age = age;\n        this.days = days;\n        this.money = money;\n        this.burgers = burgers;\n    }\n    return User;\n}());\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (User);\n\n\n//# sourceURL=webpack://click-empire/./src/ts/User.ts?");

/***/ }),

/***/ "./src/ts/View.ts":
/*!************************!*\
  !*** ./src/ts/View.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Controller */ \"./src/ts/Controller.ts\");\n/* harmony import */ var _Item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Item */ \"./src/ts/Item.ts\");\n\n\nvar View = /** @class */ (function () {\n    function View() {\n    }\n    View.initialRender = function (data) {\n        // cards\n        var cards = document.getElementById('cards');\n        var cardContainer = \"<div>\";\n        _Item__WEBPACK_IMPORTED_MODULE_1__.items.map(function (item, index) {\n            cardContainer += \"\\n        <div data-card=\" + index + \" id=\\\"card\\\" class=\\\"grid grid-cols-4 mb-1 gap-1 bg-gray-600\\\">\\n          <div class=\\\"h-20 p-1\\\">\\n            <img src=\" + item.imgUrl + \" class=\\\"h-full\\\" />\\n          </div>\\n          <div class=\\\"flex flex-col justify-center col-span-2\\\">\\n            <p class=\\\"text-3xl\\\">\" + item.name + \"</p>\\n            <div class=\\\"flex mt-1\\\">\\n              <p id=\\\"itemPrice\\\">$\" + item.price.toLocaleString() + \"</p>\\n              <p id=\\\"itemPer\\\" class=\\\"text-green-400 ml-14\\\">+$\" + item.perPrice.toLocaleString() + \" / sec</p>\\n            </div>\\n          </div>\\n          <div id=\\\"itemAmount\\\" class=\\\"flex justify-center items-center text-3xl\\\">\\n            \" + item.amount + \"\\n          </div>\\n        </div>\\n      \";\n        });\n        cardContainer += \"</div>\";\n        cards.innerHTML = cardContainer;\n        // cardInfo\n        var cardInfo = document.getElementById('cardInfo');\n        var cardList = document.querySelectorAll('#card');\n        cardList.forEach(function (card, i) {\n            card.addEventListener('click', function () {\n                cards.classList.add('hidden');\n                cardInfo.classList.remove('hidden');\n                var cardInfoContainer = \"\\n          <div>\\n            <div class=\\\"flex justify-between items-center\\\">\\n              <div>\\n                <h2 class=\\\"text-2xl\\\">\" + _Item__WEBPACK_IMPORTED_MODULE_1__.items[i].name + \"</h2>\\n                <p>Max Purchases: \" + _Item__WEBPACK_IMPORTED_MODULE_1__.items[i].max + \"</p>\\n                <p>Price: $\" + _Item__WEBPACK_IMPORTED_MODULE_1__.items[i].price + \"</p>\\n                <p>Get \" + _Item__WEBPACK_IMPORTED_MODULE_1__.items[i].perPrice + \" extra yen per second</p>\\n              </div>\\n              <div class=\\\"w-2/4 h-28 flex justify-center\\\">\\n                <img\\n                  id=\\\"img\\\"\\n                  src=\" + _Item__WEBPACK_IMPORTED_MODULE_1__.items[i].imgUrl + \"\\n                  class=\\\"h-full\\\"\\n                />\\n              </div>\\n            </div>\\n            <p class=\\\"mt-5\\\">How Many would you like to purchase?</p>\\n            <form action=\\\"post\\\">\\n              <input type=\\\"text\\\" class=\\\"w-full rounded\\\">\\n            </form>\\n            <p class=\\\"mt-3 flex justify-end\\\">Total: $\" + _Item__WEBPACK_IMPORTED_MODULE_1__.items[i].amount + \"</p>\\n            <div class=\\\"grid grid-cols-2 gap-2 mt-3\\\">\\n              <div id=\\\"btnBack\\\" class=\\\"bg-white text-blue-500 w-full h-10 flex justify-center items-center\\\">Go Back</div>\\n              <div id=\\\"btnBuy\\\" class=\\\"bg-blue-700 text-white w-full h-10 flex justify-center items-center\\\">Purchase</div>\\n            </div>\\n          </div>\\n        \";\n                cardInfo.innerHTML = cardInfoContainer;\n                var btnBack = document.getElementById('btnBack');\n                btnBack.addEventListener('click', function () {\n                    cardInfo.classList.add('hidden');\n                    cards.classList.remove('hidden');\n                });\n            });\n        });\n        // userInfo\n        var user = JSON.parse(data);\n        var userName = document.getElementById('name');\n        var age = document.getElementById('age');\n        var days = document.getElementById('days');\n        var money = document.getElementById('money');\n        userName.innerHTML = \"\" + user.name;\n        age.innerHTML = user.age + \" years old\";\n        days.innerHTML = \"\" + user.days.toLocaleString();\n        money.innerHTML = \"\" + user.money.toLocaleString();\n        // burgerInfo\n        var img = document.getElementById('img');\n        var burger = document.getElementById('burger');\n        burger.innerHTML = user.burgers + \" Burgers\";\n        img.addEventListener('click', function () {\n            _Controller__WEBPACK_IMPORTED_MODULE_0__.default.clickBurger(user);\n        });\n        // save\n        var saveIcon = document.getElementById('save');\n        saveIcon.addEventListener('click', function () {\n            _Controller__WEBPACK_IMPORTED_MODULE_0__.default.save(user);\n        });\n    };\n    View.updateClickBurger = function (user) {\n        var burger = document.getElementById('burger');\n        var money = document.getElementById('money');\n        burger.innerHTML = '';\n        burger.innerHTML = user.burgers + \" Burgers\";\n        money.innerHTML = '';\n        money.innerHTML = \"\" + user.money.toLocaleString();\n    };\n    return View;\n}());\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (View);\n\n\n//# sourceURL=webpack://click-empire/./src/ts/View.ts?");

/***/ }),

/***/ "./src/ts/index.ts":
/*!*************************!*\
  !*** ./src/ts/index.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Controller */ \"./src/ts/Controller.ts\");\n\n_Controller__WEBPACK_IMPORTED_MODULE_0__.default.startGame();\n\n\n//# sourceURL=webpack://click-empire/./src/ts/index.ts?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/ts/index.ts");
/******/ 	
/******/ })()
;