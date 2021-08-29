import Controller from './Controller';
import User from './User';
import { items } from './Item';

export default class View {
  static initialRender(data) {
    // cards
    const cards = document.getElementById('cards');
    let cardContainer = `<div>`;
    items.map((item, index) => {
      cardContainer += `
        <div data-card=${index} id="card" class="grid grid-cols-4 mb-1 gap-1 bg-gray-600">
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
    cards.innerHTML = cardContainer;

    // cardInfo
    const cardInfo = document.getElementById('cardInfo');
    const cardList = document.querySelectorAll('#card');
    cardList.forEach((card, i) => {
      card.addEventListener('click', () => {
        cards.classList.add('hidden');
        cardInfo.classList.remove('hidden');
        let cardInfoContainer = `
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
              <input type="text" class="w-full rounded">
            </form>
            <p class="mt-3 flex justify-end">Total: $${items[i].amount}</p>
            <div class="grid grid-cols-2 gap-2 mt-3">
              <div id="btnBack" class="bg-white text-blue-500 w-full h-10 flex justify-center items-center">Go Back</div>
              <div id="btnBuy" class="bg-blue-700 text-white w-full h-10 flex justify-center items-center">Purchase</div>
            </div>
          </div>
        `;
        cardInfo.innerHTML = cardInfoContainer;

        const btnBack = document.getElementById('btnBack');
        btnBack.addEventListener('click', () => {
          cardInfo.classList.add('hidden');
          cards.classList.remove('hidden');
        });
      });
    });

    // userInfo
    const user: User = JSON.parse(data);
    const userName = document.getElementById('name');
    const age = document.getElementById('age');
    const days = document.getElementById('days');
    const money = document.getElementById('money');

    userName.innerHTML = `${user.name}`;
    age.innerHTML = `${user.age} years old`;
    days.innerHTML = `${user.days.toLocaleString()}`;
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
      Controller.save(user)
    });
  }

  static updateRender(user: User) {
    const burger = document.getElementById('burger');
    burger.innerHTML = '';
    burger.innerHTML = `${user.burgers} Burgers`;
  }
}
