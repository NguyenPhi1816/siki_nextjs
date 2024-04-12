// base product: category, brand, productAttributeValues
export interface IProduct {
  id: number;
  slug: string;
  imageUrl: string;
  name: string;
  rating: number;
  price: number;
}

export interface IProductImage {
  id: number;
  url: string;
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

export interface IStoreDto {}
export interface IBrandDto {
  id: number;
  name: string;
  logo: string;
}

export interface IProductVariant {
  id: number;
  quantity: number;
  price: number;
  image: string;
  productImages: IProductImage[];
  productAttributeValues: IProductAttributeValue[];
}

export interface IProductFull {
  id: number;
  slug: string;
  name: string;
  description: string;
  status: boolean;
  rating: number;
  numberOfReviews: number;
  numberOfPurchases: number;
  isShowIndividually: boolean;
  storeDto: IStoreDto;
  brandDto: IBrandDto;
  productAttributes: IProductAttribute[];
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
