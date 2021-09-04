import Controller from './Controller';
import User from './User';

Controller.startGame();

const saveIcon = document.getElementById('save');
saveIcon.addEventListener('click', () => {
  Controller.save()
});
