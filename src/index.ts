export {};

class User {
  constructor(
    public name: string,
    public age: number,
    public days: number,
    public money: number
  ) {}
}

const User1 = new User('Steave', 25, 0, 0);

const userName = document.getElementById('userName');
const age = document.getElementById('age');
const days = document.getElementById('days');
const money = document.getElementById('money');

userName.innerHTML = User1.name;
age.innerHTML = `${User1.age} years old`;
days.innerHTML = `${User1.days.toLocaleString()}`;
money.innerHTML = `${User1.money.toLocaleString()}`;

class Item {
  constructor(
    public name: string,
    public max: number,
    public price: number,
    public perPrice: number,
    public imgUrl: string,
    public amount: number
  ) {}
}

const Item1 = new Item('House', 100, 30000, 30, 'https://cdn.pixabay.com/photo/2016/11/18/17/46/house-1836070_1280.jpg', 0)

const itemName = document.getElementById('itemName')
const itemPrice = document.getElementById('itemPrice')
const itemPer = document.getElementById('itemPer')
const itemImg = document.getElementById('itemImg')
const itemAmount = document.getElementById('itemAmount')

itemName.innerHTML = `${Item1.name}`
itemPrice.innerHTML = `$${Item1.price.toLocaleString()}`
itemPer.innerHTML = `+$${Item1.perPrice.toLocaleString()} / sec`
itemImg.src = `${Item1.imgUrl}`
itemAmount.innerHTML = `${Item1.amount}`