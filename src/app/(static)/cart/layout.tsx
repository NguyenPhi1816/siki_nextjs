import Footer from "@/components/footer/Footer";
import { Box } from "@mui/material";
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
  return (
    <Box sx={{ height: "100%", width: "100%", overflow: "scroll" }}>
      {children}
      <Footer />
    </Box>
  );
};

export default CartLayout;
