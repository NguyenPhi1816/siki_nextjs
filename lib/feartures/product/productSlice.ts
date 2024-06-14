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
      query: (slug: string) => `/products/${slug}`,
    }),
  }),
  keepUnusedDataFor: 120, // time in seconds
});

export const {
  useGetProductsQuery,
  useGetHomeQuery,
  useGetProductsBySlugQuery,
} = productApi;
