import { Circle, ShoppingCart } from "@mui/icons-material";
import { Box, IconButton, Typography } from "@mui/material";

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
          top: "-40%",
          right: "-40%",
          width: "80%",
          height: "80%",
          bgcolor: "red",
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
