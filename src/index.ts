import { items } from './data'

class User {
  constructor(
    public name: string,
    public age: number,
    public days: number,
    public money: number
  ) {}
}

const User1 = new User('Steave', 25, 0, 0);

let cardContainer = `<div>`;
items.map((item) => {
  cardContainer += `
  <div class="grid grid-cols-4 mb-1 gap-1 bg-gray-600">
  <div class="h-20 p-1">
  <img src=${item.imgUrl} class="h-full" />
  </div>
  <div class="flex flex-col justify-center col-span-2">
  <p class="text-3xl">${item.name}</p>
  <div class="flex mt-1">
  <p id="itemPrice">$${item.price.toLocaleString()}</p>
  <p id="itemPer" class="text-green-400 ml-14">+$${item.perPrice.toLocaleString()} / sec</p>
  </div>
  </div>
  <div id="itemAmount" class="flex justify-center items-center text-3xl">
  ${item.amount}
  </div>
  </div>
  `;
});
cardContainer += `</div>`;

const cards = document.getElementById('cards');
cards.innerHTML = cardContainer;

// export default Item;