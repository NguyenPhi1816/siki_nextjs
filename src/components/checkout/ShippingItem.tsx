import { currencyFormat } from "@/lib/number";
import { Box, Typography } from "@mui/material";
import Image from "next/image";

const ShippingItem = () => {
  return (
    <Box sx={{ marginBottom: "1rem", display: "flex" }}>
      <Box
        sx={{
          marginRight: "0.5rem",
          width: "3rem",
          height: "3rem",
        }}
      >
        <Image
          src="https://cdn.tgdd.vn/Products/Images/42/319665/samsung-galaxy-s24-yellow-thumb-600x600.png"
          width={50}
          height={50}
          alt="item"
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
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            WebkitLineClamp: "1",
            WebkitBoxOrient: "vertical",
          }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
          adipisci officiis obcaecati in iusto assumenda qui sint debitis
          accusamus voluptates voluptate nesciunt pariatur, animi, at a nam.
          Inventore, assumenda. Sapiente?
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Typography sx={{ fontSize: "0.875rem" }}>SL: 1</Typography>
          <Typography sx={{ fontSize: "0.875rem", color: "var(--text-black)" }}>
            {currencyFormat(1000)}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default ShippingItem;
