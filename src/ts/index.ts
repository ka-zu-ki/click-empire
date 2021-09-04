import Controller from './Controller';

import { user, createUser } from './config';

Controller.startGame();

const saveIcon = document.getElementById('save');
saveIcon.addEventListener('click', () => {
  Controller.save(user)
});

console.log(createUser)