export type Store = {
  id: number;
  name: string;
};

export type ProductVariant = {
  id: number;
  name: string;
  image: string;
  quantity: number;
  price: number;
  productAttributeValues: string[];
  store: Store;
};

export type OrderDetail = {
  id: number;
  productVariantDto: ProductVariant;
  price: number;
  quantity: number;
};

export type Order = {
  id: number;
  receiverPhoneNumber: string;
  receiverAddress: string;
  receiverName: string;
  note: string;
  createdAt: string;
  status: string;
  orderDetails: OrderDetail[];
};

export type OrderDetailRequest = {
  productId: number;
  price: number;
  quantity: number;
};

export type saveOrderRequest = {
  token: string;
  receiverPhoneNumber: string;
  receiverAddress: string;
  receiverName: string;
  note: string;
  orderDetails: OrderDetailRequest[];
};
