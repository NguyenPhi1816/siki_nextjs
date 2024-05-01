// Need to use the React-specific entry point to import createApi
import { ICategory } from "@/types/category";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

export const categoryApi = createApi({
  reducerPath: "categoryApi",
  baseQuery: fetchBaseQuery({
    baseUrl: apiBaseUrl,
  }),
  endpoints: (builder) => ({
    getCategories: builder.query<ICategory[], void>({
      query: () => "categories",
    }),
  }),
  keepUnusedDataFor: 120, // time in seconds
});

export const { useGetCategoriesQuery } = categoryApi;
