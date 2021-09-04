import Controller from './Controller';
import User from './User';
import { items } from './Item';
import { cards, cardInfo, perBurgerIncome } from './config';

export default class View {
  static initialRender(user: User) {
    // cards
    let cardContainer = `<div>`;
    user.purchaseItem.map((item) => {
      cardContainer += `
        <div id="card" class="grid gap grid-cols-4 mb-1 gap-1 bg-gray-600">
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
            ${item.purchaseAmount}
          </div>
        </div>
      `;
    });
    cardContainer += `</div>`;
    cards.innerHTML = cardContainer;

    const cardList = document.querySelectorAll('#card');
    cardList.forEach((card, i) => {
      card.addEventListener('click', () => {
        Controller.clickCard(card, i, user);
      });
    });

    // userInfo
    const userName = document.getElementById('name');
    const age = document.getElementById('age');
    const days = document.getElementById('days');
    const money = document.getElementById('money');

    userName.innerHTML = `${user.name}`;
    age.innerHTML = `${user.age} years old`;
    days.innerHTML = `${user.days} days`;
    money.innerHTML = `${user.money.toLocaleString()}`;

    // burgerInfo
    const img = document.getElementById('img');
    const burger = document.getElementById('burger');
    burger.innerHTML = `${user.burgers} Burgers`;
    perBurgerIncome.innerHTML = `$${user.perBurgerIncome} per second`

    img.addEventListener('click', () => {
      Controller.clickBurger(user);
    });
  }

  static renderCardInfo(card: Element, i: number, user: User) {
    // cardInfo
    cards.classList.add('hidden');
    cardInfo.classList.remove('hidden');
    cardInfo.innerHTML = `
      <div>
        <div class="flex justify-between items-center">
          <div>
            <h2 class="text-2xl">${user.purchaseItem[i].name}</h2>
            <p>Max Purchases: ${user.purchaseItem[i].max}</p>
            <p id="itemPrice">Price: $${user.purchaseItem[i].price}</p>
            <p>Get ${user.purchaseItem[i].perPrice} extra yen per second</p>
          </div>
          <div class="w-2/4 h-28 flex justify-center">
            <img
              id="img"
              src=${user.purchaseItem[i].imgUrl}
              class="h-full"
            />
          </div>
        </div>
        <p class="mt-5">How Many would you like to purchase?</p>
        <form action="post">
          <input type="number" id="amount" class="text-black w-full rounded" value="0" min="0" max="${
            user.purchaseItem[i].max
          }">
        </form>
        <p id="sumPrice" class="mt-3 flex justify-end">Total: ${user.purchaseItem[i].sumPrice.toLocaleString()}</p>
        <div class="grid grid-cols-2 gap-2 mt-3">
          <div id="btnBack" class="bg-white text-blue-500 w-full h-10 flex justify-center items-center">Go Back</div>
          <div id="btnBuy" class="bg-blue-700 text-white w-full h-10 flex justify-center items-center">Purchase</div>
        </div>
      </div>
    `;

    const amountElement = cardInfo.querySelector('#amount');
    amountElement.addEventListener('change', () => {
      const count = Number((<HTMLInputElement>amountElement).value);
      Controller.changeSumPrice(i, count, user);
    });

    const btnBack = document.getElementById('btnBack');
    btnBack.addEventListener('click', () => {
      this.toggleHidden(cardInfo, cards);
    });

    const btnBuy = document.getElementById('btnBuy');
    btnBuy.addEventListener('click', () => {
      const count = Number((<HTMLInputElement>amountElement).value);
      this.toggleHidden(cardInfo, cards);
      Controller.updateUserInfo(i, user, count);
    });
  }

  static updateSumPrice(sumPrice: number) {
    const sumPriceElement = cardInfo.querySelector('#sumPrice');
    sumPriceElement.innerHTML = `Total: $${sumPrice.toLocaleString()}`;
  }

  static updateBurger(user: User) {
    const burger = document.getElementById('burger');
    const money = document.getElementById('money');

    burger.innerHTML = `${user.burgers} Burgers`;
    money.innerHTML = `${user.money.toLocaleString()}`;
    console.log(`burger: ${user.burgers}`);
  }

  static updateDays(user: User) {
    const days = document.querySelector('#days');
    days.innerHTML = `${user.days.toLocaleString()} days`;
  }

  static updateAge(user: User) {
    const age = document.querySelector('#age');
    age.innerHTML = `${user.age} years old`;
  }

  static updateMoney(user: User) {
    const money = document.querySelector('#money');
    money.innerHTML = `${user.money.toLocaleString()}`;
  }

  static toggleHidden(add: HTMLElement, remove: HTMLElement) {
    add.classList.add('hidden');
    remove.classList.remove('hidden');
  }
}
