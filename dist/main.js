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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _View__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./View */ \"./src/ts/View.ts\");\n/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./User */ \"./src/ts/User.ts\");\n/* harmony import */ var _Item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Item */ \"./src/ts/Item.ts\");\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./config */ \"./src/ts/config.ts\");\n\n\n\n\nvar Controller = /** @class */ (function () {\n    function Controller() {\n    }\n    Controller.startGame = function () {\n        var _this = this;\n        _config__WEBPACK_IMPORTED_MODULE_3__.start.addEventListener('click', function (e) {\n            _User__WEBPACK_IMPORTED_MODULE_1__.default.removeUser(_User__WEBPACK_IMPORTED_MODULE_1__.default.getUser());\n            var user = _this.signIn(e);\n            _this.timer(user);\n        });\n        _config__WEBPACK_IMPORTED_MODULE_3__.login.addEventListener('click', function (e) {\n            var user = _this.logIn(e);\n            _this.timer(user);\n        });\n    };\n    Controller.signIn = function (e) {\n        var userNameInput = (document.getElementById('userName')).value;\n        if (userNameInput.length != 0) {\n            e.preventDefault();\n            _View__WEBPACK_IMPORTED_MODULE_0__.default.toggleHidden(_config__WEBPACK_IMPORTED_MODULE_3__.form, _config__WEBPACK_IMPORTED_MODULE_3__.mainPage);\n            var userData = new _User__WEBPACK_IMPORTED_MODULE_1__.default(userNameInput, 25, 0, 50000, 0, 0, 25, _Item__WEBPACK_IMPORTED_MODULE_2__.items);\n            var user = _User__WEBPACK_IMPORTED_MODULE_1__.default.saveUser(userData);\n            _View__WEBPACK_IMPORTED_MODULE_0__.default.initialRender(user);\n            return user;\n        }\n    };\n    Controller.logIn = function (e) {\n        var userNameInput = (document.getElementById('userName')).value;\n        var user = _User__WEBPACK_IMPORTED_MODULE_1__.default.getUser();\n        if (userNameInput.length != 0 && userNameInput == user.name) {\n            e.preventDefault();\n            _View__WEBPACK_IMPORTED_MODULE_0__.default.toggleHidden(_config__WEBPACK_IMPORTED_MODULE_3__.form, _config__WEBPACK_IMPORTED_MODULE_3__.mainPage);\n            _View__WEBPACK_IMPORTED_MODULE_0__.default.initialRender(user);\n        }\n        return user;\n    };\n    Controller.timer = function (user) {\n        this.intervalId = setInterval(function () {\n            user.days++;\n            user.money += user.perIncome;\n            _View__WEBPACK_IMPORTED_MODULE_0__.default.updateDays(user);\n            _View__WEBPACK_IMPORTED_MODULE_0__.default.updateMoney(user);\n            if (user.days % 365 == 0) {\n                user.age++;\n                _View__WEBPACK_IMPORTED_MODULE_0__.default.updateAge(user);\n            }\n            _User__WEBPACK_IMPORTED_MODULE_1__.default.saveUser(user);\n        }, 1000);\n    };\n    Controller.stopTimer = function () {\n        clearInterval(this.intervalId);\n    };\n    Controller.clickBurger = function (user) {\n        user.burgers++;\n        user.money += user.perBurgerIncome;\n        _View__WEBPACK_IMPORTED_MODULE_0__.default.updateBurger(user);\n    };\n    Controller.clickCard = function (card, i, user) {\n        _View__WEBPACK_IMPORTED_MODULE_0__.default.renderCardInfo(card, i, user);\n    };\n    Controller.changeSumPrice = function (i, count, user) {\n        var sumPrice = count * user.purchaseItem[i].price;\n        _View__WEBPACK_IMPORTED_MODULE_0__.default.updateSumPrice(sumPrice);\n    };\n    Controller.updateUserInfo = function (i, user, count) {\n        var item = user.purchaseItem[i];\n        if (user.money >= item.price * count) {\n            item.purchaseAmount += count;\n            user.money -= count * item.price;\n            _View__WEBPACK_IMPORTED_MODULE_0__.default.updateMoney(user);\n            this.itemEffect(user, i);\n            _View__WEBPACK_IMPORTED_MODULE_0__.default.initialRender(user);\n        }\n        else if (item.max < item.purchaseAmount) {\n            window.alert('最大購入数を超えています');\n        }\n        else {\n            window.alert('購入金額が足りません');\n        }\n        item.sumPrice = 0;\n    };\n    Controller.itemEffect = function (user, i) {\n        var item = user.purchaseItem[i];\n        var itemPrice = item.price;\n        var itemAmount = item.purchaseAmount;\n        var itemPerPrice = item.perPrice;\n        switch (item.type) {\n            case 'realEstate':\n                user.perIncome += itemAmount * itemPerPrice;\n                break;\n            case 'stock':\n                if (item.name == 'ETF Stock') {\n                    item.price += item.price * 10 / 100;\n                    user.perIncome += 0.1 / 100 * itemPrice * itemAmount;\n                    break;\n                }\n                else if (item.name == 'ETF Bonds') {\n                    user.perIncome += 0.07 / 100 * itemPrice * itemAmount;\n                    break;\n                }\n            case 'ability':\n                user.perBurgerIncome += 25 * itemAmount;\n                break;\n        }\n    };\n    Controller.reset = function () {\n        this.stopTimer();\n        var name = _User__WEBPACK_IMPORTED_MODULE_1__.default.getUser().name;\n        _User__WEBPACK_IMPORTED_MODULE_1__.default.removeUser(_User__WEBPACK_IMPORTED_MODULE_1__.default.getUser());\n        var userData = new _User__WEBPACK_IMPORTED_MODULE_1__.default(name, 25, 0, 50000, 0, 0, 25, _Item__WEBPACK_IMPORTED_MODULE_2__.items);\n        var newUser = _User__WEBPACK_IMPORTED_MODULE_1__.default.saveUser(userData);\n        _View__WEBPACK_IMPORTED_MODULE_0__.default.initialRender(newUser);\n        this.timer(newUser);\n    };\n    Controller.save = function () {\n        this.stopTimer();\n        _View__WEBPACK_IMPORTED_MODULE_0__.default.toggleHidden(_config__WEBPACK_IMPORTED_MODULE_3__.mainPage, _config__WEBPACK_IMPORTED_MODULE_3__.form);\n    };\n    return Controller;\n}());\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Controller);\n\n\n//# sourceURL=webpack://click-empire/./src/ts/Controller.ts?");

/***/ }),

/***/ "./src/ts/Item.ts":
/*!************************!*\
  !*** ./src/ts/Item.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Item\": () => (/* binding */ Item),\n/* harmony export */   \"items\": () => (/* binding */ items)\n/* harmony export */ });\nvar Item = /** @class */ (function () {\n    function Item(name, max, price, perPrice, imgUrl, purchaseAmount, sumPrice, type) {\n        this.name = name;\n        this.max = max;\n        this.price = price;\n        this.perPrice = perPrice;\n        this.imgUrl = imgUrl;\n        this.purchaseAmount = purchaseAmount;\n        this.sumPrice = sumPrice;\n        this.type = type;\n    }\n    return Item;\n}());\nvar items = [\n    new Item('Flip machine', 500, 15000, 25, 'https://cdn.pixabay.com/photo/2017/05/24/19/27/bbq-2341356_1280.jpg', 0, 0, 'ability'),\n    new Item('ETF Stock', Infinity, 30000, 0.1, 'https://cdn.pixabay.com/photo/2017/10/26/17/40/dollar-2891817_1280.jpg', 0, 0, 'stock'),\n    new Item('ETF Bonds', 1000, 300000, 0.07, 'https://cdn.pixabay.com/photo/2017/10/26/17/40/dollar-2891817_1280.jpg', 0, 0, 'stock'),\n    new Item('Coffee Stand', 1000, 30000, 120, 'https://cdn.pixabay.com/photo/2016/07/26/16/12/kaffeerad-1543158_1280.jpg', 0, 0, 'realEstate'),\n    new Item('House', 100, 300000, 32000, 'https://cdn.pixabay.com/photo/2016/11/18/17/46/house-1836070_1280.jpg', 0, 0, 'realEstate'),\n    new Item('Mansion', 20, 250000000, 500000, 'https://cdn.pixabay.com/photo/2017/07/03/21/35/house-2469067_1280.jpg', 0, 0, 'realEstate'),\n];\n\n\n\n//# sourceURL=webpack://click-empire/./src/ts/Item.ts?");

/***/ }),

/***/ "./src/ts/User.ts":
/*!************************!*\
  !*** ./src/ts/User.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar User = /** @class */ (function () {\n    function User(name, age, days, money, perIncome, burgers, perBurgerIncome, purchaseItem) {\n        this.name = name;\n        this.age = age;\n        this.days = days;\n        this.money = money;\n        this.perIncome = perIncome;\n        this.burgers = burgers;\n        this.perBurgerIncome = perBurgerIncome;\n        this.purchaseItem = purchaseItem;\n    }\n    User.getUser = function () {\n        var user = JSON.parse(localStorage.getItem('userData'));\n        return user;\n    };\n    User.saveUser = function (user) {\n        localStorage.setItem('userData', JSON.stringify(user));\n        return this.getUser();\n    };\n    User.removeUser = function (user) {\n        localStorage.removeItem('userData');\n    };\n    return User;\n}());\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (User);\n\n\n//# sourceURL=webpack://click-empire/./src/ts/User.ts?");

/***/ }),

/***/ "./src/ts/View.ts":
/*!************************!*\
  !*** ./src/ts/View.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Controller */ \"./src/ts/Controller.ts\");\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config */ \"./src/ts/config.ts\");\n\n\nvar View = /** @class */ (function () {\n    function View() {\n    }\n    View.initialRender = function (user) {\n        // cards\n        var cardContainer = \"<div>\";\n        user.purchaseItem.map(function (item) {\n            cardContainer += \"\\n        <div id=\\\"card\\\" class=\\\"grid gap grid-cols-4 mb-1 gap-1 bg-gray-600\\\">\\n          <div class=\\\"h-20 p-1\\\">\\n            <img src=\" + item.imgUrl + \" class=\\\"h-full\\\" />\\n          </div>\\n          <div class=\\\"flex flex-col justify-center col-span-2\\\">\\n            <p class=\\\"text-3xl\\\">\" + item.name + \"</p>\\n            <div class=\\\"flex mt-1\\\">\\n              <p id=\\\"itemPrice\\\">$\" + item.price.toLocaleString() + \"</p>\\n              <p id=\\\"itemPer\\\" class=\\\"text-green-400 ml-14\\\">+$\" + item.perPrice.toLocaleString() + \" / sec</p>\\n            </div>\\n          </div>\\n          <div id=\\\"itemAmount\\\" class=\\\"flex justify-center items-center text-3xl\\\">\\n            \" + item.purchaseAmount + \"\\n          </div>\\n        </div>\\n      \";\n        });\n        cardContainer += \"</div>\";\n        _config__WEBPACK_IMPORTED_MODULE_1__.cards.innerHTML = cardContainer;\n        var cardList = document.querySelectorAll('#card');\n        cardList.forEach(function (card, i) {\n            card.addEventListener('click', function () {\n                _Controller__WEBPACK_IMPORTED_MODULE_0__.default.clickCard(card, i, user);\n            });\n        });\n        // userInfo\n        var userName = document.getElementById('name');\n        var age = document.getElementById('age');\n        var days = document.getElementById('days');\n        var money = document.getElementById('money');\n        userName.innerHTML = \"\" + user.name;\n        age.innerHTML = user.age + \" years old\";\n        days.innerHTML = user.days + \" days\";\n        money.innerHTML = \"\" + user.money.toLocaleString();\n        // burgerInfo\n        var img = document.getElementById('img');\n        var burger = document.getElementById('burger');\n        burger.innerHTML = user.burgers + \" Burgers\";\n        _config__WEBPACK_IMPORTED_MODULE_1__.perBurgerIncome.innerHTML = \"$\" + user.perBurgerIncome + \" per second\";\n        img.addEventListener('click', function () {\n            _Controller__WEBPACK_IMPORTED_MODULE_0__.default.clickBurger(user);\n        });\n    };\n    View.renderCardInfo = function (card, i, user) {\n        var _this = this;\n        // cardInfo\n        _config__WEBPACK_IMPORTED_MODULE_1__.cards.classList.add('hidden');\n        _config__WEBPACK_IMPORTED_MODULE_1__.cardInfo.classList.remove('hidden');\n        _config__WEBPACK_IMPORTED_MODULE_1__.cardInfo.innerHTML = \"\\n      <div>\\n        <div class=\\\"flex justify-between items-center\\\">\\n          <div>\\n            <h2 class=\\\"text-2xl\\\">\" + user.purchaseItem[i].name + \"</h2>\\n            <p>Max Purchases: \" + user.purchaseItem[i].max + \"</p>\\n            <p id=\\\"itemPrice\\\">Price: $\" + user.purchaseItem[i].price + \"</p>\\n            <p>Get \" + user.purchaseItem[i].perPrice + \" extra yen per second</p>\\n          </div>\\n          <div class=\\\"w-2/4 h-28 flex justify-center\\\">\\n            <img\\n              id=\\\"img\\\"\\n              src=\" + user.purchaseItem[i].imgUrl + \"\\n              class=\\\"h-full\\\"\\n            />\\n          </div>\\n        </div>\\n        <p class=\\\"mt-5\\\">How Many would you like to purchase?</p>\\n        <form action=\\\"post\\\">\\n          <input type=\\\"number\\\" id=\\\"amount\\\" class=\\\"text-black w-full rounded\\\" value=\\\"0\\\" min=\\\"0\\\" max=\\\"\" + user.purchaseItem[i].max + \"\\\">\\n        </form>\\n        <p id=\\\"sumPrice\\\" class=\\\"mt-3 flex justify-end\\\">Total: \" + user.purchaseItem[i].sumPrice.toLocaleString() + \"</p>\\n        <div class=\\\"grid grid-cols-2 gap-2 mt-3\\\">\\n          <div id=\\\"btnBack\\\" class=\\\"bg-white text-blue-500 w-full h-10 flex justify-center items-center\\\">Go Back</div>\\n          <div id=\\\"btnBuy\\\" class=\\\"bg-blue-700 text-white w-full h-10 flex justify-center items-center\\\">Purchase</div>\\n        </div>\\n      </div>\\n    \";\n        var amountElement = _config__WEBPACK_IMPORTED_MODULE_1__.cardInfo.querySelector('#amount');\n        amountElement.addEventListener('change', function () {\n            var count = Number(amountElement.value);\n            _Controller__WEBPACK_IMPORTED_MODULE_0__.default.changeSumPrice(i, count, user);\n        });\n        var btnBack = document.getElementById('btnBack');\n        btnBack.addEventListener('click', function () {\n            _this.toggleHidden(_config__WEBPACK_IMPORTED_MODULE_1__.cardInfo, _config__WEBPACK_IMPORTED_MODULE_1__.cards);\n        });\n        var btnBuy = document.getElementById('btnBuy');\n        btnBuy.addEventListener('click', function () {\n            var count = Number(amountElement.value);\n            _this.toggleHidden(_config__WEBPACK_IMPORTED_MODULE_1__.cardInfo, _config__WEBPACK_IMPORTED_MODULE_1__.cards);\n            _Controller__WEBPACK_IMPORTED_MODULE_0__.default.updateUserInfo(i, user, count);\n        });\n    };\n    View.updateSumPrice = function (sumPrice) {\n        var sumPriceElement = _config__WEBPACK_IMPORTED_MODULE_1__.cardInfo.querySelector('#sumPrice');\n        sumPriceElement.innerHTML = \"Total: $\" + sumPrice.toLocaleString();\n    };\n    View.updateBurger = function (user) {\n        var burger = document.getElementById('burger');\n        var money = document.getElementById('money');\n        burger.innerHTML = user.burgers + \" Burgers\";\n        money.innerHTML = \"\" + user.money.toLocaleString();\n        console.log(\"burger: \" + user.burgers);\n    };\n    View.updateDays = function (user) {\n        var days = document.querySelector('#days');\n        days.innerHTML = user.days.toLocaleString() + \" days\";\n    };\n    View.updateAge = function (user) {\n        var age = document.querySelector('#age');\n        age.innerHTML = user.age + \" years old\";\n    };\n    View.updateMoney = function (user) {\n        var money = document.querySelector('#money');\n        money.innerHTML = \"\" + user.money.toLocaleString();\n    };\n    View.toggleHidden = function (add, remove) {\n        add.classList.add('hidden');\n        remove.classList.remove('hidden');\n    };\n    return View;\n}());\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (View);\n\n\n//# sourceURL=webpack://click-empire/./src/ts/View.ts?");

/***/ }),

/***/ "./src/ts/config.ts":
/*!**************************!*\
  !*** ./src/ts/config.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"start\": () => (/* binding */ start),\n/* harmony export */   \"login\": () => (/* binding */ login),\n/* harmony export */   \"form\": () => (/* binding */ form),\n/* harmony export */   \"mainPage\": () => (/* binding */ mainPage),\n/* harmony export */   \"cards\": () => (/* binding */ cards),\n/* harmony export */   \"cardInfo\": () => (/* binding */ cardInfo),\n/* harmony export */   \"perBurgerIncome\": () => (/* binding */ perBurgerIncome)\n/* harmony export */ });\nvar start = document.getElementById('startGameBtn');\nvar login = document.getElementById('loginBtn');\nvar form = document.getElementById('form');\nvar mainPage = document.getElementById('mainPage');\nvar cards = document.getElementById('cards');\nvar cardInfo = document.getElementById('cardInfo');\nvar perBurgerIncome = document.getElementById('perBurgerIncome');\n\n\n\n//# sourceURL=webpack://click-empire/./src/ts/config.ts?");

/***/ }),

/***/ "./src/ts/index.ts":
/*!*************************!*\
  !*** ./src/ts/index.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Controller */ \"./src/ts/Controller.ts\");\n\n_Controller__WEBPACK_IMPORTED_MODULE_0__.default.startGame();\nvar saveIcon = document.getElementById('save');\nvar resetIcon = document.getElementById('reset');\nsaveIcon.addEventListener('click', function () {\n    _Controller__WEBPACK_IMPORTED_MODULE_0__.default.save();\n});\nresetIcon.addEventListener('click', function () {\n    _Controller__WEBPACK_IMPORTED_MODULE_0__.default.reset();\n});\n\n\n//# sourceURL=webpack://click-empire/./src/ts/index.ts?");

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