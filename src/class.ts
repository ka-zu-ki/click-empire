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

export { Item }