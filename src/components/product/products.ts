export interface IProduct {
  id: number;
  imageUrl: string;
  name: string;
  rating: number;
  price: number;
  storeName: string;
}

export const PRODUCTS: IProduct[] = [
  {
    id: 1,
    imageUrl:
      "https://cdn.tgdd.vn/Products/Images/42/305658/iphone-15-pro-max-blue-thumbnew-600x600.jpg",
    name: "Iphone 15 Pro Max",
    rating: 4,
    price: 30990000,
    storeName: "Apple",
  },
  {
    id: 2,
    imageUrl:
      "https://cdn.tgdd.vn/Products/Images/42/305658/iphone-15-pro-max-blue-thumbnew-600x600.jpg",
    name: "Iphone 15 Pro",
    rating: 5,
    price: 26990000,
    storeName: "Apple",
  },
  {
    id: 3,
    imageUrl:
      "https://cdn.tgdd.vn/Products/Images/42/303891/iphone-15-plus-xanh-la-128gb-thumb-600x600.jpg",
    name: "Iphone 15 Plus",
    rating: 4,
    price: 23990000,
    storeName: "Apple",
  },
  {
    id: 4,
    imageUrl:
      "https://cdn.tgdd.vn/Products/Images/42/303891/iphone-15-plus-xanh-la-128gb-thumb-600x600.jpg",
    name: "Iphone 15",
    rating: 4,
    price: 20690000,
    storeName: "Apple",
  },
  {
    id: 5,
    imageUrl:
      "https://cdn.tgdd.vn/Products/Images/42/319665/samsung-galaxy-s24-yellow-thumb-600x600.png",
    name: "Samsung Galaxy S24 5G",
    rating: 4,
    price: 20690000,
    storeName: "Samsung",
  },
  {
    id: 6,
    imageUrl:
      "https://cdn.tgdd.vn/Products/Images/42/307172/samsung-galaxy-s24-plus-violet-thumb-600x600.jpg",
    name: "Samsung Galaxy S24+ 5G",
    rating: 4,
    price: 23490000,
    storeName: "Samsung",
  },
  {
    id: 7,
    imageUrl:
      "https://cdn.tgdd.vn/Products/Images/42/307174/samsung-galaxy-s24-ultra-grey-thumb-600x600.jpg",
    name: "Samsung Galaxy S24 Ultra 5G",
    rating: 3,
    price: 29690000,
    storeName: "Samsung",
  },
  {
    id: 8,
    imageUrl:
      "https://cdn.tgdd.vn/Products/Images/42/322526/xiaomi-14-white-thumbnew-600x600.jpg",
    name: "Xiaomi 14 5G",
    rating: 5,
    price: 19990000,
    storeName: "Xiaomi",
  },
  {
    id: 9,
    imageUrl:
      "https://cdn.tgdd.vn/Products/Images/42/314206/xiaomi-redmi-note-13-green-thumb-600x600.jpg",
    name: "Xiaomi Redmi Note 13 Pro",
    rating: 4,
    price: 6790000,
    storeName: "Xiaomi",
  },
  {
    id: 10,
    imageUrl:
      "https://cdn.tgdd.vn/Products/Images/42/314209/oppo-reno-11-xanh-thumb-600x600.jpg",
    name: "OPPO Reno11 5G",
    rating: 4,
    price: 10690000,
    storeName: "OPPO",
  },
];

interface ITabLabel {
  id: number;
  title: string;
  imageUrl: string;
  storeName: string;
}

export const TAB_LABEL: ITabLabel[] = [
  {
    id: 0,
    title: "For you",
    imageUrl:
      "https://salt.tikicdn.com/cache/w100/ts/personalish/f9/27/b5/3a8e2286a1c8fb91b67acc5ee35f82f0.png.webp",
    storeName: "AllProduct",
  },
  {
    id: 1,
    title: "Apple",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
    storeName: "Apple",
  },
  {
    id: 2,
    title: "Samsung",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Samsung_Logo.svg/1280px-Samsung_Logo.svg.png",
    storeName: "Samsung",
  },
  {
    id: 3,
    title: "Xiaomi",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Xiaomi_logo.svg/2048px-Xiaomi_logo.svg.png",
    storeName: "Xiaomi",
  },
  {
    id: 4,
    title: "OPPO",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/a/a2/OPPO_LOGO_2019.png",
    storeName: "OPPO",
  },
];
