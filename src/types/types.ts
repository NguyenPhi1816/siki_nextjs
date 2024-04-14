// base product: category, brand, productAttributeValues
export interface IProduct {
  id: number;
  slug: string;
  image: string;
  name: string;
  averageRating: number;
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

export interface IStoreDto {
  id: number;
  name: string;
  logo: string;
}

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
  averageRating: number;
  numberOfReviews: number;
  numberOfPurchases: number;
  isShowIndividually: boolean;
  storeDto: IStoreDto;
  brandDto: IBrandDto;
  relatedProducts: IProduct[];
  productAttributes: IProductAttribute[];
  productVariants: IProductVariant[];
}

export interface IHome {
  id: number;
  name: string;
  image: string;
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

export interface IBreadcrumb {
  path: string;
  title: string;
}
