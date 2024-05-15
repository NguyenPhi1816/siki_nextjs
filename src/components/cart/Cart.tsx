// components/Cart.tsx
import React from "react";
import {
  Box,
  Typography,
  Checkbox,
  Button,
  Grid,
  IconButton,
  Divider,
} from "@mui/material";
import CartStore from "./CartStore";
import PageSection from "../wrapper/PageSection";
import { Delete } from "@mui/icons-material";
import { currencyFormat } from "../numberFormat/currency";

const Cart = () => {
  return (
    <>
      <Typography
        padding={"1rem 0"}
        variant="h4"
        fontSize={"1.25rem"}
        textTransform={"uppercase"}
        fontWeight={"bold"}
      >
        Giỏ Hàng
      </Typography>
      <Box sx={{ display: "flex" }}>
        <Box>
          <PageSection sx={{ display: "flex", alignItems: "center" }}>
            <Grid container padding="16px" alignItems={"center"} columns={24}>
              <Grid item xs={1}>
                <Checkbox size="small" />
              </Grid>
              <Grid item xs={10}>
                <Typography variant="h6" fontSize={"0.875rem"}>
                  Tất cả (3 sản phẩm)
                </Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography variant="h6" fontSize={"0.875rem"}>
                  Đơn giá
                </Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography variant="h6" fontSize={"0.875rem"}>
                  Số lượng
                </Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography variant="h6" fontSize={"0.875rem"}>
                  Thành tiền
                </Typography>
              </Grid>
              <Grid item xs={1}>
                <IconButton size="small">
                  <Delete />
                </IconButton>
              </Grid>
            </Grid>
          </PageSection>

          <PageSection sx={{ padding: "0 1rem" }}>
            <CartStore />
          </PageSection>
          <PageSection sx={{ padding: "0 1rem" }}>
            <CartStore />
          </PageSection>
          <PageSection sx={{ padding: "0 1rem" }}>
            <CartStore />
          </PageSection>
          <PageSection sx={{ padding: "0 1rem" }}>
            <CartStore />
          </PageSection>
        </Box>
        <Box sx={{ width: "1rem" }} />
        {/* Summary */}
        <Box sx={{ flex: 1 }}>
          <Box
            sx={{
              position: "sticky",
              top: "1rem",
              zIndex: 10,
            }}
          >
            <Box
              sx={{
                padding: "1rem",
                bgcolor: "var(--bg-white)",
                borderRadius: 1,
              }}
            >
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography variant="body1">Tạm tính:</Typography>
                <Typography variant="body1">{currencyFormat(1000)}</Typography>
              </Box>
              <Divider sx={{ margin: "1rem 0" }} />
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography variant="body1">Thành tiền:</Typography>
                <Typography
                  variant="body1"
                  color={"var(--text-primary-pink)"}
                  fontSize={"1.25rem"}
                  marginBottom={"0.5rem"}
                >
                  {currencyFormat(1000)}
                </Typography>
              </Box>
              <Typography
                variant="body1"
                color={"var(--text-grey)"}
                fontSize={"0.75rem"}
                textAlign={"end"}
              >
                (Đã bao gồm VAT nếu có)
              </Typography>
            </Box>
            <Button
              variant="contained"
              color="primary"
              sx={{
                marginTop: "1rem",
                width: "100%",
                color: "var(--text-white)",
              }}
            >
              Mua Hàng (0)
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Cart;
