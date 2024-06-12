"use server";

import { signIn } from "@/config/nextauth";

export const doLogin = async (formData: FormData) => {
  const email = formData.get("email");
  const password = formData.get("password");
  const result = await signIn("credentials", {
    email,
    password,
    redirect: true,
    redirectTo: "/",
  });
  return result;
};

export const doSocialLogin = async (formData: FormData) => {
  const action = formData.get("action");
  if (action) await signIn(action.toString(), { redirectTo: "/" });
};

export const doLogout = () => {};
