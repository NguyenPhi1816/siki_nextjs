// Need to use the React-specific entry point to import createApi
import { ICategory } from "@/types/category";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const apiBaseUrl = process.env.NEXT_PUBLIC_SIKI_API;

export const categoryApi = createApi({
  reducerPath: "categoryApi",
  baseQuery: fetchBaseQuery({
    baseUrl: apiBaseUrl,
  }),
  endpoints: (builder) => ({
    getCategories: builder.query<ICategory[], void>({
      query: () => "/products/category/parents",
    }),
    getByName: builder.query<any, string>({
      query: (name: string) => `/products/category/${name}`,
    }),
  }),
  keepUnusedDataFor: 120, // time in seconds
});

export const { useGetCategoriesQuery, useGetByNameQuery } = categoryApi;
