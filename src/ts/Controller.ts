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

      let user: User;

      if (userNameInput == 'cheater') {
        user = User.saveUser(
          new User('cheater', 25, 0, 500000000, 0, 0, 25, items)
        );
      } else {
        user = User.saveUser(
          new User(userNameInput, 25, 0, 50000, 0, 0, 25, items)
        );
      }
      View.initialRender(user);

      return user;
    }
  }

  static createUser(name: string) {}

  static logIn(e: MouseEvent) {
    const userNameInput = (<HTMLInputElement>(
      document.getElementById('userName')
    )).value;
    const user = User.getUser();

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
    const item = user.purchaseItem[i];

    if (user.money >= item.price * count) {
      item.purchaseAmount += count;
      user.money -= count * item.price;

      View.updateMoney(user);

      this.itemEffect(user, i);

      View.initialRender(user);
    } else if (item.max < item.purchaseAmount) {
      window.alert('最大購入数を超えています');
    } else {
      window.alert('購入金額が足りません');
    }

    item.sumPrice = 0;
  }

  static itemEffect(user: User, i: number) {
    const item = user.purchaseItem[i];
    const itemPrice = item.price;
    const itemAmount = item.purchaseAmount;
    const itemPerPrice = item.perPrice;

    switch (item.type) {
      case 'realEstate':
        user.perIncome += itemAmount * itemPerPrice;
        break;
      case 'stock':
        if (item.name == 'ETF Stock') {
          item.price += (item.price * 10) / 100;
          user.perIncome += (0.1 / 100) * itemPrice * itemAmount;
          break;
        } else if (item.name == 'ETF Bonds') {
          user.perIncome += (0.07 / 100) * itemPrice * itemAmount;
          break;
        }
      case 'ability':
        user.perBurgerIncome += 25 * itemAmount;
        break;
    }
  }

  static reset() {
    this.stopTimer();

    const name = User.getUser().name;
    User.removeUser(User.getUser());

    const userData = new User(name, 25, 0, 50000, 0, 0, 25, items);
    const newUser = User.saveUser(userData);
    View.initialRender(newUser);

    this.timer(newUser);
  }

  static save() {
    this.stopTimer();
    View.toggleHidden(mainPage, form);
  }
}
