// Need to use the React-specific entry point to import createApi
import { IHome, IProduct, IProductFull } from "@/types/product";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({
    baseUrl: apiBaseUrl,
  }),
  endpoints: (builder) => ({
    getProducts: builder.query<IProduct[], void>({
      query: () => "/products",
    }),
    getHome: builder.query<IHome[], void>({
      query: () => "/home",
    }),
    getProductsBySlug: builder.query<IProductFull, string>({
      query: (slug: string) =>
        `http://localhost:8090/api/products/storefront/${slug}`,
    }),
    getProductsByCategoryId: builder.query<IProduct[], string>({
      query: (id: string) =>
        `http://localhost:8090/api/products/storefront/category/${id}`,
    }),
  }),
  keepUnusedDataFor: 120, // time in seconds
});

export const {
  useGetProductsQuery,
  useGetHomeQuery,
  useGetProductsBySlugQuery,
  useGetProductsByCategoryIdQuery,
} = productApi;
