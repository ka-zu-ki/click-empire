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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _View__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./View */ \"./src/ts/View.ts\");\n/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./User */ \"./src/ts/User.ts\");\n/* harmony import */ var _Item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Item */ \"./src/ts/Item.ts\");\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./config */ \"./src/ts/config.ts\");\n\n\n\n\nvar Controller = /** @class */ (function () {\n    function Controller() {\n    }\n    Controller.startGame = function () {\n        var _this = this;\n        _config__WEBPACK_IMPORTED_MODULE_3__.start.addEventListener('click', function (e) {\n            _this.signIn(e);\n        });\n        _config__WEBPACK_IMPORTED_MODULE_3__.login.addEventListener('click', function (e) {\n            _this.logIn(_config__WEBPACK_IMPORTED_MODULE_3__.user, e);\n        });\n    };\n    Controller.signIn = function (e) {\n        var userNameInput = (document.getElementById('userName')).value;\n        if (userNameInput.length != 0) {\n            e.preventDefault();\n            _View__WEBPACK_IMPORTED_MODULE_0__.default.toggleHidden(_config__WEBPACK_IMPORTED_MODULE_3__.form, _config__WEBPACK_IMPORTED_MODULE_3__.mainPage);\n            var userData = new _User__WEBPACK_IMPORTED_MODULE_1__.default(userNameInput, 25, 0, 50000, 0, _Item__WEBPACK_IMPORTED_MODULE_2__.items);\n            localStorage.setItem('userData', JSON.stringify(userData));\n            _View__WEBPACK_IMPORTED_MODULE_0__.default.initialRender(userData);\n        }\n    };\n    Controller.logIn = function (user, e) {\n        var userNameInput = (document.getElementById('userName')).value;\n        if (userNameInput.length != 0 && userNameInput == user.name) {\n            e.preventDefault();\n            _View__WEBPACK_IMPORTED_MODULE_0__.default.toggleHidden(_config__WEBPACK_IMPORTED_MODULE_3__.form, _config__WEBPACK_IMPORTED_MODULE_3__.mainPage);\n            _View__WEBPACK_IMPORTED_MODULE_0__.default.initialRender(user);\n        }\n    };\n    Controller.clickBurger = function (user) {\n        user.burgers += 1;\n        user.money += 25;\n        _View__WEBPACK_IMPORTED_MODULE_0__.default.updateBurger(user);\n    };\n    Controller.clickCard = function (card, i) {\n        _View__WEBPACK_IMPORTED_MODULE_0__.default.renderCardInfo(card, i);\n    };\n    Controller.changeSumPrice = function (i, count) {\n        _Item__WEBPACK_IMPORTED_MODULE_2__.items[i].sumPrice = (count * _Item__WEBPACK_IMPORTED_MODULE_2__.items[i].price);\n        _Item__WEBPACK_IMPORTED_MODULE_2__.items[i].purchaseAmount = count;\n        _View__WEBPACK_IMPORTED_MODULE_0__.default.updateSumPrice(i);\n    };\n    Controller.updateUserInfo = function (i) {\n        _config__WEBPACK_IMPORTED_MODULE_3__.user.money += _Item__WEBPACK_IMPORTED_MODULE_2__.items[i].sumPrice;\n    };\n    Controller.save = function (user) {\n        localStorage.setItem('userData', JSON.stringify(user));\n    };\n    return Controller;\n}());\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Controller);\n\n\n//# sourceURL=webpack://click-empire/./src/ts/Controller.ts?");

/***/ }),

/***/ "./src/ts/Item.ts":
/*!************************!*\
  !*** ./src/ts/Item.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Item\": () => (/* binding */ Item),\n/* harmony export */   \"items\": () => (/* binding */ items)\n/* harmony export */ });\nvar Item = /** @class */ (function () {\n    function Item(name, max, price, perPrice, imgUrl, purchaseAmount, sumPrice) {\n        this.name = name;\n        this.max = max;\n        this.price = price;\n        this.perPrice = perPrice;\n        this.imgUrl = imgUrl;\n        this.purchaseAmount = purchaseAmount;\n        this.sumPrice = sumPrice;\n    }\n    return Item;\n}());\nvar items = [\n    new Item('House', 100, 30000, 30, 'https://cdn.pixabay.com/photo/2016/11/18/17/46/house-1836070_1280.jpg', 0, 0),\n    new Item('Flip machine', 500, 15000, 25, 'https://cdn.pixabay.com/photo/2017/05/24/19/27/bbq-2341356_1280.jpg', 0, 0),\n    new Item('ETF Stock', Infinity, 30000, 0.1, 'https://cdn.pixabay.com/photo/2017/10/26/17/40/dollar-2891817_1280.jpg', 0, 0),\n    new Item('Coffee Stand', 1000, 30000, 30, 'https://cdn.pixabay.com/photo/2016/07/26/16/12/kaffeerad-1543158_1280.jpg', 0, 0),\n    new Item('Mansion', 20, 250000000, 500000, 'https://cdn.pixabay.com/photo/2017/07/03/21/35/house-2469067_1280.jpg', 0, 0),\n];\n\n\n\n//# sourceURL=webpack://click-empire/./src/ts/Item.ts?");

/***/ }),

/***/ "./src/ts/User.ts":
/*!************************!*\
  !*** ./src/ts/User.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar User = /** @class */ (function () {\n    function User(name, age, days, money, burgers, purchaseItem) {\n        this.name = name;\n        this.age = age;\n        this.days = days;\n        this.money = money;\n        this.burgers = burgers;\n        this.purchaseItem = purchaseItem;\n    }\n    return User;\n}());\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (User);\n\n\n//# sourceURL=webpack://click-empire/./src/ts/User.ts?");

/***/ }),

/***/ "./src/ts/View.ts":
/*!************************!*\
  !*** ./src/ts/View.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Controller */ \"./src/ts/Controller.ts\");\n/* harmony import */ var _Item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Item */ \"./src/ts/Item.ts\");\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config */ \"./src/ts/config.ts\");\n\n\n\nvar View = /** @class */ (function () {\n    function View() {\n    }\n    View.initialRender = function (user) {\n        // cards\n        var cardContainer = \"<div>\";\n        _Item__WEBPACK_IMPORTED_MODULE_1__.items.map(function (item) {\n            cardContainer += \"\\n        <div id=\\\"card\\\" class=\\\"grid gap grid-cols-4 mb-1 gap-1 bg-gray-600\\\">\\n          <div class=\\\"h-20 p-1\\\">\\n            <img src=\" + item.imgUrl + \" class=\\\"h-full\\\" />\\n          </div>\\n          <div class=\\\"flex flex-col justify-center col-span-2\\\">\\n            <p class=\\\"text-3xl\\\">\" + item.name + \"</p>\\n            <div class=\\\"flex mt-1\\\">\\n              <p id=\\\"itemPrice\\\">$\" + item.price.toLocaleString() + \"</p>\\n              <p id=\\\"itemPer\\\" class=\\\"text-green-400 ml-14\\\">+$\" + item.perPrice.toLocaleString() + \" / sec</p>\\n            </div>\\n          </div>\\n          <div id=\\\"itemAmount\\\" class=\\\"flex justify-center items-center text-3xl\\\">\\n            \" + item.purchaseAmount + \"\\n          </div>\\n        </div>\\n      \";\n        });\n        cardContainer += \"</div>\";\n        _config__WEBPACK_IMPORTED_MODULE_2__.cards.innerHTML = cardContainer;\n        var cardList = document.querySelectorAll('#card');\n        cardList.forEach(function (card, i) {\n            card.addEventListener('click', function () {\n                _Controller__WEBPACK_IMPORTED_MODULE_0__.default.clickCard(card, i);\n            });\n        });\n        // userInfo\n        var userName = document.getElementById('name');\n        var age = document.getElementById('age');\n        var days = document.getElementById('days');\n        var money = document.getElementById('money');\n        userName.innerHTML = \"\" + user.name;\n        age.innerHTML = user.age + \" years old\";\n        days.innerHTML = \"\" + user.days.toLocaleString();\n        money.innerHTML = \"\" + user.money.toLocaleString();\n        // burgerInfo\n        var img = document.getElementById('img');\n        var burger = document.getElementById('burger');\n        burger.innerHTML = user.burgers + \" Burgers\";\n        img.addEventListener('click', function () {\n            _Controller__WEBPACK_IMPORTED_MODULE_0__.default.clickBurger(user);\n        });\n        // save\n        var saveIcon = document.getElementById('save');\n        saveIcon.addEventListener('click', function () {\n            _Controller__WEBPACK_IMPORTED_MODULE_0__.default.save(user);\n        });\n    };\n    View.renderCardInfo = function (card, i) {\n        var _this = this;\n        // cardInfo\n        _config__WEBPACK_IMPORTED_MODULE_2__.cards.classList.add('hidden');\n        _config__WEBPACK_IMPORTED_MODULE_2__.cardInfo.classList.remove('hidden');\n        _config__WEBPACK_IMPORTED_MODULE_2__.cardInfo.innerHTML = \"\\n      <div>\\n        <div class=\\\"flex justify-between items-center\\\">\\n          <div>\\n            <h2 class=\\\"text-2xl\\\">\" + _Item__WEBPACK_IMPORTED_MODULE_1__.items[i].name + \"</h2>\\n            <p>Max Purchases: \" + _Item__WEBPACK_IMPORTED_MODULE_1__.items[i].max + \"</p>\\n            <p>Price: $\" + _Item__WEBPACK_IMPORTED_MODULE_1__.items[i].price + \"</p>\\n            <p>Get \" + _Item__WEBPACK_IMPORTED_MODULE_1__.items[i].perPrice + \" extra yen per second</p>\\n          </div>\\n          <div class=\\\"w-2/4 h-28 flex justify-center\\\">\\n            <img\\n              id=\\\"img\\\"\\n              src=\" + _Item__WEBPACK_IMPORTED_MODULE_1__.items[i].imgUrl + \"\\n              class=\\\"h-full\\\"\\n            />\\n          </div>\\n        </div>\\n        <p class=\\\"mt-5\\\">How Many would you like to purchase?</p>\\n        <form action=\\\"post\\\">\\n          <input type=\\\"number\\\" id=\\\"amount\\\" class=\\\"text-black w-full rounded\\\" value=\\\"0\\\" min=\\\"0\\\" max=\\\"\" + _Item__WEBPACK_IMPORTED_MODULE_1__.items[i].max + \"\\\">\\n        </form>\\n        <p id=\\\"sumPrice\\\" class=\\\"mt-3 flex justify-end\\\">Total: \" + _Item__WEBPACK_IMPORTED_MODULE_1__.items[i].sumPrice.toLocaleString() + \"</p>\\n        <div class=\\\"grid grid-cols-2 gap-2 mt-3\\\">\\n          <div id=\\\"btnBack\\\" class=\\\"bg-white text-blue-500 w-full h-10 flex justify-center items-center\\\">Go Back</div>\\n          <div id=\\\"btnBuy\\\" class=\\\"bg-blue-700 text-white w-full h-10 flex justify-center items-center\\\">Purchase</div>\\n        </div>\\n      </div>\\n    \";\n        var amountElement = _config__WEBPACK_IMPORTED_MODULE_2__.cardInfo.querySelector('#amount');\n        amountElement.addEventListener('change', function () {\n            var count = Number(amountElement.value);\n            _Controller__WEBPACK_IMPORTED_MODULE_0__.default.changeSumPrice(i, count);\n        });\n        var btnBack = document.getElementById('btnBack');\n        btnBack.addEventListener('click', function () {\n            _this.toggleHidden(_config__WEBPACK_IMPORTED_MODULE_2__.cardInfo, _config__WEBPACK_IMPORTED_MODULE_2__.cards);\n        });\n        var btnBuy = document.getElementById('btnBuy');\n        btnBuy.addEventListener('click', function () {\n            _this.toggleHidden(_config__WEBPACK_IMPORTED_MODULE_2__.cardInfo, _config__WEBPACK_IMPORTED_MODULE_2__.cards);\n            _Controller__WEBPACK_IMPORTED_MODULE_0__.default.updateUserInfo(i);\n            _this.initialRender(_config__WEBPACK_IMPORTED_MODULE_2__.user);\n        });\n    };\n    View.updateSumPrice = function (i) {\n        var sumPrice = _config__WEBPACK_IMPORTED_MODULE_2__.cardInfo.querySelector('#sumPrice');\n        sumPrice.innerHTML = \"Total: $\" + _Item__WEBPACK_IMPORTED_MODULE_1__.items[i].sumPrice.toLocaleString();\n    };\n    View.updateBurger = function (user) {\n        var burger = document.getElementById('burger');\n        var money = document.getElementById('money');\n        burger.innerHTML = '';\n        burger.innerHTML = user.burgers + \" Burgers\";\n        money.innerHTML = '';\n        money.innerHTML = \"\" + user.money.toLocaleString();\n    };\n    View.toggleHidden = function (add, remove) {\n        add.classList.add('hidden');\n        remove.classList.remove('hidden');\n    };\n    return View;\n}());\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (View);\n\n\n//# sourceURL=webpack://click-empire/./src/ts/View.ts?");

/***/ }),

/***/ "./src/ts/config.ts":
/*!**************************!*\
  !*** ./src/ts/config.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"start\": () => (/* binding */ start),\n/* harmony export */   \"login\": () => (/* binding */ login),\n/* harmony export */   \"form\": () => (/* binding */ form),\n/* harmony export */   \"mainPage\": () => (/* binding */ mainPage),\n/* harmony export */   \"cards\": () => (/* binding */ cards),\n/* harmony export */   \"cardInfo\": () => (/* binding */ cardInfo),\n/* harmony export */   \"user\": () => (/* binding */ user)\n/* harmony export */ });\nvar start = document.getElementById('startGameBtn');\nvar login = document.getElementById('loginBtn');\nvar form = document.getElementById('form');\nvar mainPage = document.getElementById('mainPage');\nvar cards = document.getElementById('cards');\nvar cardInfo = document.getElementById('cardInfo');\nvar user = JSON.parse(localStorage.getItem('userData'));\n\n\n\n//# sourceURL=webpack://click-empire/./src/ts/config.ts?");

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