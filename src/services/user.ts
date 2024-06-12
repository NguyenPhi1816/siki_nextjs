import { SignUpRequest } from "@/types/user";
import api, { siki_api } from "./api";

export const getProfile = async (access_token: string) => {
  const response = await fetch(
    `http://localhost:8090/api/users/storefront/customer/profile`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + access_token,
      },
    }
  );

  const data = await response.json();
  return data;
};

export const signUp = async (signUpData: SignUpRequest) => {
  // console.log(process.env.NEXT_PUBLIC_SIKI_API);

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_SIKI_API}/users/storefront/signup`,
    {
      method: "POST",
      body: JSON.stringify(signUpData),
      cache: "no-store",
    }
  );
  const data = await response.json();
  return data;
};
