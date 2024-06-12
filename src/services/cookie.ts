import { SignInResponse } from "@/types/auth";

export const setCookies = async (token: SignInResponse) => {
  await fetch("/api/cookie", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      token: JSON.stringify(token),
    },
  });
};

export const deleteCookies = async () => {
  await fetch("/api/cookie", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
};
