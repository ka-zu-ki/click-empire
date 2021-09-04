import View from './View';

import User from './User';
import { items } from './Item';

import { start, login, form, mainPage } from './config';

export default class Controller {
  static intervalId: NodeJS.Timer | null;

  static startGame() {
    start.addEventListener('click', (e) => {
      User.removeUser(User.getUser())
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
      const userData = new User(userNameInput, 25, 0, 50000, 0, 0, items);
      const user = User.saveUser(userData)
      console.log(user)
      
      View.initialRender(user);
      return user
    }
  }

  static logIn(e: MouseEvent) {
    const userNameInput = (<HTMLInputElement>(
      document.getElementById('userName')
    )).value;
    const user = User.getUser()
    console.log(user)

    if (userNameInput.length != 0 && userNameInput == user.name) {
      e.preventDefault();
      View.toggleHidden(form, mainPage);
      View.initialRender(user);
    }

    return user
  }

  static timer(user: User) {
    this.intervalId = setInterval(() => {
      user.days++;
      user.money += user.perIncome
      View.updateDays(user);
      View.updateMoney(user)
      if (user.days % 365 == 0) {
        user.age++;
        View.updateAge(user);
      }
      User.saveUser(user)
    }, 1000);
  }

  static stopTimer() {
    clearInterval(this.intervalId)
  }

  static clickBurger(user: User): void {
    user.burgers++;
    user.money += 25;
    User.saveUser(user)
    View.updateBurger(user);
  }

  static clickCard(card: Element, i: number, user: User) {
    View.renderCardInfo(card, i, user);
  }

  static changeSumPrice(i: number, count: number) {
    items[i].sumPrice = count * items[i].price;
    items[i].purchaseAmount = count;
    View.updateSumPrice(i);
  }

  static updateUserInfo(i: number, user: User) {
    if (user.money >= items[i].price * items[i].purchaseAmount) {
      user.money -= items[i].sumPrice;
      console.log(user)
      View.updateMoney(user)

      user.purchaseItem[i].purchaseAmount += items[i].purchaseAmount
      this.itemPerPrice(user, i)

      View.initialRender(user);
    } else {
      window.alert("購入金額が足りません")
    }

    items[i].sumPrice = 0
    View.updateSumPrice(i)
  }

  // itemごとのロジック
  static itemPerPrice(user: User, i: number) {
    const itemAmount = user.purchaseItem[i].purchaseAmount
    const itemPerPrice = user.purchaseItem[i].perPrice

    user.perIncome += itemAmount * itemPerPrice
  }

  static save() {
    this.stopTimer()
    View.toggleHidden(mainPage, form);
    console.log(User.getUser());
  }
}
