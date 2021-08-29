import View from './View';

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
        localStorage.setItem('userName', userNameInput);
        const data = localStorage.getItem('userName');
        View.renderMainPage(data);
      }
    });

    login.addEventListener('click', (e) => {
      const userNameInput = (<HTMLInputElement>(
        document.getElementById('userName')
      )).value;
      if (userNameInput.length != 0 && localStorage.getItem('userName') == userNameInput) {
        e.preventDefault();
        form.classList.add('hidden');
        mainPage.classList.remove('hidden');
        localStorage.setItem('userName', userNameInput);
        const data = localStorage.getItem('userName');
        View.renderMainPage(data);
      }
    })
  }
}
