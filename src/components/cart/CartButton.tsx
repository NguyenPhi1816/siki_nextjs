import { ShoppingCart } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";

const CartButton = () => {
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
        1
      </Typography>
    </Box>
  );
};

export default CartButton;
