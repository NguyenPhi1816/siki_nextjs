"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const AuthPrivatePage = () => {
  const router = useRouter();
  useEffect(() => {
    router.push("/auth/login");
  }, []);
  return <></>;
};

export default AuthPrivatePage;
