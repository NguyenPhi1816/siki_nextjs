// base product: category, brand, productAttributeValues
export interface IProduct {
  id: number;
  imageUrl: string;
  name: string;
  rating: number;
  price: number;
}

export interface IProductImage {
  id: number;
  url: string;
  isDefault: boolean;
}

export interface IProductAttributeValue {
  id: number;
  image: string;
  value: string;
  attributeId: number;
}

export interface IProductAttribute {
  id: number;
  name: string;
  productAttributeValues: IProductAttributeValue[];
}

export interface IProductAttributeSet {
  id: number;
  name: string;
  productAttributes: IProductAttribute[];
}

export interface IStoreDto {}
export interface IBrandDto {
  id: number;
  name: string;
  logo: string;
}

export interface IProductVariant {
  productId: number;
  productAttributeValues: IProductAttributeValue[];
}

export interface IProductFull {
  id: number;
  name: string;
  description: string;
  status: boolean;
  quantity: number;
  price: number;
  rating: number;
  numberOfReviews: number;
  numberOfPurchases: number;
  isShowIndividually: boolean;
  storeDto: IStoreDto;
  brandDto: IBrandDto;
  productImages: IProductImage[];
  productAttributeSet: IProductAttributeSet;
  productAttributeValues: IProductAttributeValue[];
  productVariants: IProductVariant[];
}

export interface IRecommendation {
  id: number;
  storeName: string;
  imageUrl: string;
  products: IProduct[];
}

export interface IProductLabel {
  id: number;
  title: string;
  imageUrl: string;
  storeName: string;
}

export interface ICategory {
  id: number;
  imageUrl: string;
  parent: string;
  children: string[];
}
