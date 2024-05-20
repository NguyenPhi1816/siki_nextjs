import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Giỏ hàng Siki",
  description: "Giỏ hàng Siki",
};

interface ICartLayout {
  children: React.ReactNode;
}

const CartLayout: React.FC<ICartLayout> = ({ children }) => {
  return <>{children}</>;
};

export default CartLayout;
