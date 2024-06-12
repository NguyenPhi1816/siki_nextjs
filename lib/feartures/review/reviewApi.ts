// Need to use the React-specific entry point to import createApi
import { IReview, SaveReviewRequest } from "@/types/review";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const apiBaseUrl = process.env.NEXT_PUBLIC_SIKI_API;

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
        console.log(filterTag);

        return `/products/reviews/storefront/baseProduct/${slug}`;
      },
    }),
    saveReview: builder.mutation<any, SaveReviewRequest>({
      query: (request: SaveReviewRequest) => ({
        url: "/products/reviews/storefront",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${request.token}`,
        },
        body: {
          productId: request.productId,
          content: request.content,
          ratingStar: request.ratingStar,
        },
      }),
    }),
  }),
  keepUnusedDataFor: 120, // time in seconds
});

export const { useGetReviewsQuery, useSaveReviewMutation } = reviewApi;
