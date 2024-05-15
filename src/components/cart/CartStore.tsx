import { Box, Checkbox, Grid, Paper, Typography } from "@mui/material";
import CustomLink from "../links/CustomLink";
import { ChevronRight, Storefront } from "@mui/icons-material";
import CartItem from "./CartItem";

const CartStore = () => {
  return (
    <Box>
      <Grid container alignItems={"center"} padding={"1rem 0"} columns={24}>
        <Grid item xs={1}>
          <Checkbox size="small" />
        </Grid>
        <Grid item xs={10}>
          <CustomLink
            href=""
            sx={{ display: "flex", alignItems: "center" }}
            noUnderline
          >
            <Storefront sx={{ color: "var(--text-grey)" }} />
            <Typography
              sx={{
                margin: "0 0.25rem",
                color: "var(--text-black)",
                fontSize: "0.875rem",
              }}
            >
              SUMIKA Official Store
            </Typography>
            <ChevronRight sx={{ color: "var(--text-grey)" }} fontSize="small" />
          </CustomLink>
        </Grid>
      </Grid>
      <Box>
        <CartItem
          imageSrc="/logo.png"
          description="Giường xếp gấp gọn di động SUMIKA 386, khung thép, có bánh xe"
          price="1.509.000₫"
          quantity={1}
        />
        <CartItem
          imageSrc="/logo.png"
          description="Giường xếp gấp gọn di động SUMIKA 386, khung thép, có bánh xe"
          price="1.509.000₫"
          quantity={1}
        />
      </Box>
    </Box>
  );
};

export default CartStore;
