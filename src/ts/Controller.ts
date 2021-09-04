import View from './View';

import User from './User';
import { items } from './Item';

import { start, login, form, mainPage } from './config';

export default class Controller {
  static intervalId: NodeJS.Timer | null;

  static startGame() {
    start.addEventListener('click', (e) => {
      User.removeUser(User.getUser());
      const user = this.signIn(e);
      this.timer(user);
    });

    login.addEventListener('click', (e) => {
      const user = this.logIn(e);
      this.timer(user);
    });
  }

  static signIn(e: MouseEvent) {
    const userNameInput = (<HTMLInputElement>(
      document.getElementById('userName')
    )).value;

    if (userNameInput.length != 0) {
      e.preventDefault();
      View.toggleHidden(form, mainPage);
      const userData = new User(userNameInput, 25, 0, 50000, 0, 0, 25, items);
      const user = User.saveUser(userData);
      console.log(user);

      View.initialRender(user);
      return user;
    }
  }

  static logIn(e: MouseEvent) {
    const userNameInput = (<HTMLInputElement>(
      document.getElementById('userName')
    )).value;
    const user = User.getUser();
    console.log(user);

    if (userNameInput.length != 0 && userNameInput == user.name) {
      e.preventDefault();
      View.toggleHidden(form, mainPage);
      View.initialRender(user);
    }

    return user;
  }

  static timer(user: User) {
    this.intervalId = setInterval(() => {
      user.days++;
      user.money += user.perIncome;
      View.updateDays(user);
      View.updateMoney(user);
      if (user.days % 365 == 0) {
        user.age++;
        View.updateAge(user);
      }
      User.saveUser(user);
    }, 1000);
  }

  static stopTimer() {
    clearInterval(this.intervalId);
  }

  static clickBurger(user: User): void {
    user.burgers++;
    user.money += user.perBurgerIncome;
    User.saveUser(user);
    View.updateBurger(user);
  }

  static clickCard(card: Element, i: number, user: User) {
    View.renderCardInfo(card, i, user);
  }

  static changeSumPrice(i: number, count: number, user: User) {
    const sumPrice = count * user.purchaseItem[i].price;
    View.updateSumPrice(sumPrice);
  }

  static updateUserInfo(i: number, user: User, count: number) {
    if (user.money >= user.purchaseItem[i].price * count) {
      user.purchaseItem[i].purchaseAmount += count;
      user.money -= count * user.purchaseItem[i].price;
      console.log(user);
      View.updateMoney(user);

      this.itemEffect(user, i);

      View.initialRender(user);
    } else {
      window.alert('購入金額が足りません');
    }

    user.purchaseItem[i].sumPrice = 0;
  }

  // itemごとのロジック
  static itemEffect(user: User, i: number) {
    const item = user.purchaseItem[i];
    const itemPrice = item.price
    const itemAmount = item.purchaseAmount;
    const itemPerPrice = item.perPrice;

    switch (item.type) {
      case 'realEstate':
        user.perIncome += itemAmount * itemPerPrice;
        break;
      case 'stock':
        if (item.name == 'ETF Stock') {
          item.price += item.price * 10 / 100
          user.perIncome += 0.1 / 100 * itemPrice * itemAmount;
          break;
        }
      case 'ability':
        user.perBurgerIncome += 25 * itemAmount;
        break;
    }
  }

  static save() {
    this.stopTimer();
    View.toggleHidden(mainPage, form);
    console.log(User.getUser());
  }
}
