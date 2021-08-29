import User from './User'
import View from './View'

export default class Controller {
  static startGame() {
    const newGameBtn = document.getElementById('newGame');
    const form = document.getElementById('form');
    const mainPage = document.getElementById('mainPage');

    newGameBtn.addEventListener('click', (e) => {
      const userNameInput = document.getElementById('userName').value;
      if (userNameInput.length != 0) e.preventDefault();
      else return;

      form.classList.add('hidden');
      mainPage.classList.remove('hidden');
      localStorage.setItem('userName', userNameInput);
      const userData = localStorage.getItem('userName');
      console.log(userData)
      View.renderMainPage(new User(userData, 25, 0, 50000))
    });
  }
}