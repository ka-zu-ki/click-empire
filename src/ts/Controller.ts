import View from './View';
import User from './User';

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

        const userData = new User(userNameInput, 25, 0, 50000, 0);
        const jsonEncoded = JSON.stringify(userData);
        localStorage.setItem('userData', jsonEncoded);
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
    View.updateRender(user);
  }
}
