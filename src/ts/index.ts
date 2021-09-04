import Controller from './Controller';

Controller.startGame();

const saveIcon = document.getElementById('save');
const resetIcon = document.getElementById('reset');

saveIcon.addEventListener('click', () => {
  Controller.save()
});

resetIcon.addEventListener('click', () => {
  Controller.reset()
})