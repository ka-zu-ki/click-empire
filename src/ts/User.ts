import { Item } from "./Item"

export default class User {
  constructor(
    public name: string,
    public age: number,
    public days: number,
    public money: number,
    public perIncome: number,
    public burgers: number,
    public perBurgerIncome: number,
    public purchaseItem: Item[]
  ) {}

  static getUser() {
    const user = JSON.parse(localStorage.getItem('userData'))
    return user
  }

  static saveUser(user: User) {
    localStorage.setItem('userData', JSON.stringify(user))
    return this.getUser()
  }

  static removeUser(user: User) {
    localStorage.removeItem('userData')
  }
}
