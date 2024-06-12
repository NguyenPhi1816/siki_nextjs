import { Order, saveOrderRequest } from "@/types/order";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const apiBaseUrl = process.env.NEXT_PUBLIC_SIKI_API;

export const orderApi = createApi({
  reducerPath: "orderApi",
  baseQuery: fetchBaseQuery({
    baseUrl: apiBaseUrl,
  }),
  endpoints: (builder) => ({
    getAllOrder: builder.mutation<Order[], string>({
      query: (token: string) => ({
        url: "/orders/storefront",
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
    }),
    saveOrder: builder.mutation<Order[], saveOrderRequest>({
      query: (request: saveOrderRequest) => ({
        url: "/orders/storefront",
        method: "POST",
        headers: {
          Authorization: `Bearer ${request.token}`,
        },
        body: {
          receiverPhoneNumber: request.receiverPhoneNumber,
          receiverAddress: request.receiverAddress,
          receiverName: request.receiverName,
          note: request.note,
          orderDetails: request.orderDetails,
        },
      }),
    }),
    // getByName: builder.query<any, string>({
    //   query: (name: string) => `/products/category/${name}`,
    // }),
  }),
  keepUnusedDataFor: 120, // time in seconds
});

export const { useGetAllOrderMutation, useSaveOrderMutation } = orderApi;
