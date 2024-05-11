// Need to use the React-specific entry point to import createApi\
import { IPromotion } from "@/types/promotion";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

export const promotionApi = createApi({
  reducerPath: "promotionApi",
  baseQuery: fetchBaseQuery({
    baseUrl: apiBaseUrl,
  }),
  endpoints: (builder) => ({
    getPromotions: builder.query<{ data: IPromotion[] }, void>({
      query: () => "/promotions",
    }),
  }),
  keepUnusedDataFor: 120, // time in seconds
});

export const { useGetPromotionsQuery } = promotionApi;
