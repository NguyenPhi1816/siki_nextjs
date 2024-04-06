// Need to use the React-specific entry point to import createApi
import { IProduct, IProductFull, IRecommendation } from "@/types/types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({
    baseUrl: apiBaseUrl,
  }),
  endpoints: (builder) => ({
    getProducts: builder.query<IProduct[], void>({
      query: () => "products",
    }),
    getRecommendations: builder.query<IRecommendation[], void>({
      query: () => "recommendations",
    }),
    getProductsBySlug: builder.query<IProductFull, string>({
      query: (slug: string) => `products/${slug}`,
    }),
  }),
  keepUnusedDataFor: 120, // time in seconds
});

export const {
  useGetProductsQuery,
  useGetRecommendationsQuery,
  useGetProductsBySlugQuery,
} = productApi;
