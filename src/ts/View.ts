import Controller from './Controller';
import User from './User';
import { items } from './Item';
import { cards, cardInfo, user } from './config';

export default class View {
  static initialRender(user: User) {
    // cards
    let cardContainer = `<div>`;
    items.map((item) => {
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
        Controller.clickCard(card, i);
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

    img.addEventListener('click', () => {
      Controller.clickBurger(user);
    });

    // save
    const saveIcon = document.getElementById('save');
    saveIcon.addEventListener('click', () => {
      Controller.save(user);
    });
  }

  static renderCardInfo(card, i) {
    // cardInfo
    cards.classList.add('hidden');
    cardInfo.classList.remove('hidden');
    cardInfo.innerHTML = `
      <div>
        <div class="flex justify-between items-center">
          <div>
            <h2 class="text-2xl">${items[i].name}</h2>
            <p>Max Purchases: ${items[i].max}</p>
            <p>Price: $${items[i].price}</p>
            <p>Get ${items[i].perPrice} extra yen per second</p>
          </div>
          <div class="w-2/4 h-28 flex justify-center">
            <img
              id="img"
              src=${items[i].imgUrl}
              class="h-full"
            />
          </div>
        </div>
        <p class="mt-5">How Many would you like to purchase?</p>
        <form action="post">
          <input type="number" id="amount" class="text-black w-full rounded" value="0" min="0" max="${items[i].max}">
        </form>
        <p id="sumPrice" class="mt-3 flex justify-end">Total: ${items[i].sumPrice.toLocaleString()}</p>
        <div class="grid grid-cols-2 gap-2 mt-3">
          <div id="btnBack" class="bg-white text-blue-500 w-full h-10 flex justify-center items-center">Go Back</div>
          <div id="btnBuy" class="bg-blue-700 text-white w-full h-10 flex justify-center items-center">Purchase</div>
        </div>
      </div>
    `;

    const amountElement = cardInfo.querySelector('#amount');
    amountElement.addEventListener('change', () => {
      const count = Number((<HTMLInputElement>amountElement).value);
      Controller.changeSumPrice(i, count)
    })

    const btnBack = document.getElementById('btnBack');
    btnBack.addEventListener('click', () => {
      this.toggleHidden(cardInfo, cards)
    });

    const btnBuy = document.getElementById('btnBuy');
    btnBuy.addEventListener('click', () => {
      this.toggleHidden(cardInfo, cards)
      Controller.updateUserInfo(i)
      this.initialRender(user)
    })
  }

  static updateSumPrice(i: number) {
    const sumPrice = cardInfo.querySelector('#sumPrice');
    sumPrice.innerHTML = `Total: $${items[i].sumPrice.toLocaleString()}`;
  }

  static updateBurger(user: User) {
    const burger = document.getElementById('burger');
    const money = document.getElementById('money');

    burger.innerHTML = '';
    burger.innerHTML = `${user.burgers} Burgers`;
    money.innerHTML = '';
    money.innerHTML = `${user.money.toLocaleString()}`;
  }

  static updateDays(user: User) {
    const days = document.querySelector('#days');
    days.innerHTML = `${user.days.toLocaleString()} days`
  }

  static toggleHidden(add: HTMLElement, remove: HTMLElement) {
    add.classList.add('hidden');
    remove.classList.remove('hidden');
  }
}
