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
    <Box
      component={"main"}
      sx={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      {children}
    </Box>
  );
};

export default CartLayout;
