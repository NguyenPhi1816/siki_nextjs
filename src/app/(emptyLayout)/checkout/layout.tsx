import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Thanh toán",
  description: "Thanh toán",
};

interface ICheckoutLayout {
  children: React.ReactNode;
}

const CheckoutLayout: React.FC<ICheckoutLayout> = ({ children }) => {
  return <>{children}</>;
};

export default CheckoutLayout;
