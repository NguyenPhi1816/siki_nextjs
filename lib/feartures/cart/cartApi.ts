import { AddToCartRequest, ICart } from "@/types/cart";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const apiBaseUrl = process.env.NEXT_PUBLIC_SIKI_API;

export const cartApi = createApi({
  reducerPath: "cartApi",
  baseQuery: fetchBaseQuery({
    baseUrl: apiBaseUrl,
  }),
  tagTypes: ["Cart"],
  endpoints: (builder) => ({
    getCartByUserId: builder.query<ICart[], string>({
      query: (id: string) => `/carts/storefront/${id}`,
      providesTags: (result) =>
        result ? result.map(({ id }) => ({ type: "Cart", id })) : [],
    }),
    addToCart: builder.mutation<any, AddToCartRequest>({
      query: (request: AddToCartRequest) => ({
        url: `/carts/storefront/add-to-cart/${request.id}`,
        method: "POST",
        headers: {
          Authorization: `Bearer ${request.token}`,
        },
      }),
      invalidatesTags: ["Cart"],
    }),
  }),
  keepUnusedDataFor: 120,
});

export const { useGetCartByUserIdQuery, useAddToCartMutation } = cartApi;
