import User from './User';
import { items } from './Item';

const start = document.getElementById('startGameBtn');
const login = document.getElementById('loginBtn');
const form = document.getElementById('form');
const mainPage = document.getElementById('mainPage');
const cards = document.getElementById('cards');
const cardInfo = document.getElementById('cardInfo');

const user = JSON.parse(localStorage.getItem('userData'))

export { start, login, form, mainPage, cards, cardInfo, user }