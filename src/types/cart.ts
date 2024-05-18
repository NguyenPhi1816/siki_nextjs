export interface ICartStore {
  id: number;
  name: string;
}

export interface ICartProduct {
  id: number;
  name: string;
  price: number;
  image: string;
  productAttributeValues: string;
  quantity: number;
  store: ICartStore;
}

export interface ICart {
  id: number;
  product: ICartProduct;
  quantity: number;
  isSelected: boolean;
}
