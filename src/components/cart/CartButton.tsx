"use client";
import { IAuthResponse } from "@/types/user";
import { ShoppingCart } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useGetCartByUserIdQuery } from "../../../lib/feartures/cart/cartApi";

interface ICartButton {
  user: IAuthResponse | null;
}

const CartButton: React.FC<ICartButton> = ({ user }) => {
  const { data } = useGetCartByUserIdQuery(user?.id as string);
  const [quantity, setQuantity] = useState<number>(0);

  useEffect(() => {
    if (data) {
      setQuantity(data.length);
    }
  }, [data]);

  return (
    <Box
      component="div"
      sx={{ width: "1.5rem", height: "1.5rem", position: "relative" }}
    >
      <ShoppingCart />
      <Typography
        variant="body2"
        sx={{
          position: "absolute",
          top: "-30%",
          right: "-30%",
          width: "70%",
          height: "70%",
          fontSize: "0.75rem",
          bgcolor: "var(--bg-red)",
          color: "var(--text-white)",
          borderRadius: 10,
          textAlign: "center",
        }}
      >
        {quantity}
      </Typography>
    </Box>
  );
};

export default CartButton;
