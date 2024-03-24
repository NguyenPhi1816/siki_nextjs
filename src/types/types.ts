export interface IProduct {
  id: number;
  imageUrl: string;
  name: string;
  rating: number;
  price: number;
  storeName: string;
}

export interface IProductLabel {
  id: number;
  title: string;
  imageUrl: string;
  storeName: string;
}
