"use strict";
exports.__esModule = true;
var User = /** @class */ (function () {
    function User(name, age, days, money) {
        this.name = name;
        this.age = age;
        this.days = days;
        this.money = money;
    }
    return User;
}());
var User1 = new User('Steave', 25, 0, 0);
var userName = document.getElementById('userName');
var age = document.getElementById('age');
var days = document.getElementById('days');
var money = document.getElementById('money');
userName.innerHTML = User1.name;
age.innerHTML = User1.age + " years old";
days.innerHTML = "" + User1.days.toLocaleString();
money.innerHTML = "" + User1.money.toLocaleString();
var Item = /** @class */ (function () {
    function Item(name, max, price, perPrice, imgUrl, amount) {
        this.name = name;
        this.max = max;
        this.price = price;
        this.perPrice = perPrice;
        this.imgUrl = imgUrl;
        this.amount = amount;
    }
    return Item;
}());
var Item1 = new Item('House', 100, 30000, 30, 'https://cdn.pixabay.com/photo/2016/11/18/17/46/house-1836070_1280.jpg', 0);
var itemName = document.getElementById('itemName');
var itemPrice = document.getElementById('itemPrice');
var itemPer = document.getElementById('itemPer');
var itemImg = document.getElementById('itemImg');
var itemAmount = document.getElementById('itemAmount');
itemName.innerHTML = "" + Item1.name;
itemPrice.innerHTML = "$" + Item1.price.toLocaleString();
itemPer.innerHTML = "+$" + Item1.perPrice.toLocaleString() + " / sec";
itemImg.src = "" + Item1.imgUrl;
itemAmount.innerHTML = "" + Item1.amount;
