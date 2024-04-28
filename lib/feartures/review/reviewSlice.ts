// Need to use the React-specific entry point to import createApi
import { IReview } from "@/types/types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

interface IRequestArguments {
  slug: string;
  filterTag: string;
}

export const reviewApi = createApi({
  reducerPath: "reviewApi",
  baseQuery: fetchBaseQuery({
    baseUrl: apiBaseUrl,
  }),
  endpoints: (builder) => ({
    getReviews: builder.query<IReview, IRequestArguments>({
      query: (args) => {
        const { slug, filterTag } = args;
        return `products/storefront/${slug}/reviews/${"?" + filterTag}`;
      },
    }),
  }),
  keepUnusedDataFor: 120, // time in seconds
});

export const { useGetReviewsQuery } = reviewApi;
