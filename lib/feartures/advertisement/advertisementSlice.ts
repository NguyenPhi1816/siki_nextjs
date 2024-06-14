// Need to use the React-specific entry point to import createApi\
import { IAdvertisement } from "@/types/advertisement";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

export const advertisementApi = createApi({
  reducerPath: "advertisementApi",
  baseQuery: fetchBaseQuery({
    baseUrl: apiBaseUrl,
  }),
  endpoints: (builder) => ({
    getAdvertisement: builder.query<{ data: IAdvertisement[] }, void>({
      query: () => "/advertisements",
    }),
  }),
  keepUnusedDataFor: 120, // time in seconds
});

export const { useGetAdvertisementQuery } = advertisementApi;
