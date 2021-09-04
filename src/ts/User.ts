export default class User {
  constructor(
    public name: string,
    public age: number,
    public days: number,
    public money: number,
    public burgers: number,
    public purchaseItem: object
  ) {}

  static updateUser(user: User) {
    localStorage.setItem('userData', JSON.stringify(user))
  }
}
