import View from './View';
import User from './User';
import { items } from './Item';

export default class Controller {
  static startGame() {
    const start = document.getElementById('startGameBtn');
    const login = document.getElementById('loginBtn');
    const form = document.getElementById('form');
    const mainPage = document.getElementById('mainPage');

    start.addEventListener('click', (e) => {
      const userNameInput = (<HTMLInputElement>(
        document.getElementById('userName')
      )).value;

      if (userNameInput.length != 0) {
        e.preventDefault();
        form.classList.add('hidden');
        mainPage.classList.remove('hidden');

        const userData = new User(userNameInput, 25, 0, 50000, 0, items);
        localStorage.setItem('userData', JSON.stringify(userData));
        const data = localStorage.getItem('userData');
        View.initialRender(data);
      }
    });

    login.addEventListener('click', (e) => {
      const userNameInput = (<HTMLInputElement>(
        document.getElementById('userName')
      )).value;
      const data = localStorage.getItem('userData');
      const user = JSON.parse(data);

      if (userNameInput.length != 0 && userNameInput == user.name) {
        e.preventDefault();
        form.classList.add('hidden');
        mainPage.classList.remove('hidden');

        View.initialRender(data);
      } else {
        window.alert('名前が違います');
      }
    });
  }

  static clickBurger(user: User) {
    user.burgers += 1;
    user.money += 25;
    View.updateBurger(user);
  }

  static clickCard(card, i) {
    View.renderCardInfo(card, i)
  }

  static changeSumPrice(i: number) {
    View.updateSumPrice(i)
  }

  static save(user: User) {
    localStorage.setItem('userData', JSON.stringify(user));
    console.log(localStorage.getItem('userData'));
  }
}
