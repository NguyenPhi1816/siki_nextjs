import { currencyFormat } from "@/lib/number";
import { Checkout } from "@/types/checkout";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

interface IShippingItem {
  data: Checkout;
}

const ShippingItem: React.FC<IShippingItem> = ({ data }) => {
  return (
    <Box
      sx={{
        padding: "1rem",
        marginBottom: "1rem",
        display: "flex",
        border: "1px solid var(--outline-light-grey)",
        borderRadius: 1,
      }}
    >
      <Box
        sx={{
          marginRight: "0.5rem",
          width: "4rem",
          height: "4rem",
        }}
      >
        <Image
          src={data.image}
          width={100}
          height={100}
          alt={data.name}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
          }}
        />
      </Box>
      <Box sx={{ flex: 1, color: "var(--text-grey)" }}>
        <Typography
          sx={{
            marginBottom: "0.25rem",
            minHeight: "0.875rem",
            maxWidth: "85%",
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            WebkitLineClamp: "2",
            WebkitBoxOrient: "vertical",
          }}
        >
          {data.name}
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Typography sx={{ fontSize: "0.875rem" }}>
            SL: {data.quantity}
          </Typography>
          <Typography sx={{ fontSize: "0.875rem", color: "var(--text-black)" }}>
            {currencyFormat(data.price)}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default ShippingItem;
