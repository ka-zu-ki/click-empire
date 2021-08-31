import View from './View';

import User from './User';
import { items } from './Item';

import { start, login, form, mainPage, user } from './config';

export default class Controller {
  static startGame() {
    start.addEventListener('click', (e) => {
      this.signIn(e);
      this.timer(user)
    });

    login.addEventListener('click', (e) => {
      this.logIn(user, e);
      this.timer(user)
    });
  }

  static signIn(e: MouseEvent) {
    const userNameInput = (<HTMLInputElement>(
      document.getElementById('userName')
    )).value;

    if (userNameInput.length != 0) {
      e.preventDefault();
      View.toggleHidden(form, mainPage);

      const userData = new User(userNameInput, 25, 0, 50000, 0, items);
      localStorage.setItem('userData', JSON.stringify(userData));
      View.initialRender(userData);
    }
  }

  static logIn(user: User, e: MouseEvent) {
    const userNameInput = (<HTMLInputElement>(
      document.getElementById('userName')
    )).value;

    if (userNameInput.length != 0 && userNameInput == user.name) {
      e.preventDefault();
      View.toggleHidden(form, mainPage);
      View.initialRender(user);
    }
  }

  static timer(user: User) {
    setInterval(() => {
      user.days++
      console.log(user.days)
      View.updateDays(user)
      if(user.days % 365 == 0) user.age++
    }, 1000)
  }

  static clickBurger(user: User): void {
    user.burgers += 1;
    user.money += 25;
    View.updateBurger(user);
  }

  static clickCard(card: Element, i: number) {
    View.renderCardInfo(card, i);
  }

  static changeSumPrice(i: number, count: number) {
    items[i].sumPrice = (count * items[i].price);
    items[i].purchaseAmount = count
    View.updateSumPrice(i);
  }

  static updateUserInfo(i: number) {
    user.money += items[i].sumPrice
  }

  static save(user: User) {
    localStorage.setItem('userData', JSON.stringify(user));
  }
}
