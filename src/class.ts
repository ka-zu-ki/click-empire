class User {
  constructor(
    public name: string,
    public age: number,
    public days: number,
    public money: number
  ) {}

  static renderUserInfo(user: User) {
    const userName = document.getElementById('name');
    const age = document.getElementById('age');
    const days = document.getElementById('days');
    const money = document.getElementById('money');
    userName.innerHTML = `${user.name}`;
    age.innerHTML = `${user.age} years old`;
    days.innerHTML = `${user.days.toLocaleString()}`;
    money.innerHTML = `${user.money.toLocaleString()}`;
  };

  static signUp() {
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
      this.renderUserInfo(new User(userData, 25, 0, 50000))
      
    });
  }
}

class Item {
  constructor(
    public name: string,
    public max: number,
    public price: number,
    public perPrice: number,
    public imgUrl: string,
    public amount: number
  ) {}
}

export { User, Item };
