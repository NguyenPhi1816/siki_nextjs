import { AddShoppingCart } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";
import React from "react";

interface IProductBottomNavbar {
  onClick: () => void;
}

const ProductBottomNavbar: React.FC<IProductBottomNavbar> = ({ onClick }) => {
  return (
    <Box
      sx={{ padding: "0.5rem 1rem", display: "flex", bgcolor: "var(--white)" }}
    >
      <Button
        variant="outlined"
        sx={{
          marginRight: "0.5rem",
          height: "3rem",
          width: "50%",
          padding: "0.75rem 1.5rem",
        }}
        onClick={onClick}
      >
        <AddShoppingCart />
        <Typography
          variant="body2"
          component="p"
          sx={{ textTransform: "none" }}
        >
          Thêm vào giỏ hàng
        </Typography>
      </Button>
      <Button
        variant="contained"
        sx={{ height: "3rem", width: "50%", padding: "0.75rem 1.5rem" }}
        onClick={onClick}
      >
        <Typography
          variant="body2"
          component="p"
          sx={{
            textTransform: "none",
            color: "var(--white)",
            boxShadow: 0,
          }}
        >
          Mua ngay
        </Typography>
      </Button>
    </Box>
  );
};

export default ProductBottomNavbar;
