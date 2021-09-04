import Controller from './Controller';

Controller.startGame();

const saveIcon = document.getElementById('save');
saveIcon.addEventListener('click', () => {
  Controller.save()
});
