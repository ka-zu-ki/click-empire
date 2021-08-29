import Controller from './Controller'
import View from './View';

// Controller.startGame()
const form = document.getElementById('form');
const mainPage = document.getElementById('mainPage');
form.classList.add('hidden');
mainPage.classList.remove('hidden');
View.initialRender()
