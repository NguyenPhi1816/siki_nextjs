import { getProfile } from "@/services/user";
import { IAuthResponse, SignUpRequest } from "@/types/user";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const apiBaseUrl = process.env.NEXT_PUBLIC_SIKI_API;

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: apiBaseUrl,
  }),
  endpoints: (builder) => ({
    signUp: builder.mutation({
      query: (signUpRequest: SignUpRequest) => ({
        url: "/users/storefront/signup",
        method: "POST",
        body: signUpRequest,
      }),
    }),
    getProfile: builder.mutation<IAuthResponse, string>({
      query: (token: string) => ({
        url: "/users/storefront/customer/profile",
        method: "GET",
        headers: {
          "Access-Control-Allow-Origin": "http://localhost:8081",
          Authorization: `Bearer ${token}`,
        },
      }),
    }),
  }),
  keepUnusedDataFor: 120,
});

export const { useSignUpMutation, useGetProfileMutation } = userApi;
