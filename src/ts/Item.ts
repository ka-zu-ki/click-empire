class Item {
  constructor(
    public name: string,
    public max: number,
    public price: number,
    public perPrice: number,
    public imgUrl: string,
    public purchaseAmount: number,
    public sumPrice: number,
    public type: string
  ) {}
}

const items: Item[] = [
  new Item(
    'House',
    100,
    30000,
    32000,
    'https://cdn.pixabay.com/photo/2016/11/18/17/46/house-1836070_1280.jpg',
    0,
    0,
    'realEstate'
  ),
  new Item(
    'Flip machine',
    500,
    15000,
    25,
    'https://cdn.pixabay.com/photo/2017/05/24/19/27/bbq-2341356_1280.jpg',
    0,
    0,
    'ability'
  ),
  new Item(
    'ETF Stock',
    Infinity,
    30000,
    0.1,
    'https://cdn.pixabay.com/photo/2017/10/26/17/40/dollar-2891817_1280.jpg',
    0,
    0,
    'stock'
  ),
  new Item(
    'Coffee Stand',
    1000,
    30000,
    30,
    'https://cdn.pixabay.com/photo/2016/07/26/16/12/kaffeerad-1543158_1280.jpg',
    0,
    0,
    'realEstate'
  ),
  new Item(
    'Mansion',
    20,
    250000000,
    500000,
    'https://cdn.pixabay.com/photo/2017/07/03/21/35/house-2469067_1280.jpg',
    0,
    0,
    'realEstate'
  ),
];

export { Item, items };
