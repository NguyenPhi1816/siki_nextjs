import PriceSummary from "@/components/checkout/PriceSummary";
import CustomDrawer from "@/components/drawer/Drawer";
import { currencyFormat } from "@/lib/number";
import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";
import { Box, Button, IconButton, Typography } from "@mui/material";
import { useState } from "react";

const CheckoutBottomNavbar = () => {
  const [showDetail, setShowDetail] = useState<boolean>(false);

  const handleShowDetail = () => setShowDetail((prev) => !prev);

  return (
    <Box sx={{ position: "relative", zIndex: "var(--navbar-z-index)" }}>
      <CustomDrawer open={showDetail} setOpen={handleShowDetail}>
        <Box
          sx={{
            marginBottom: "89px",
          }}
        >
          <PriceSummary />
        </Box>
      </CustomDrawer>
      <Box
        sx={{ padding: "1rem", display: "flex", bgcolor: "var(--bg-white)" }}
      >
        <Box sx={{ flex: 1 }}>
          <Typography sx={{ fontSize: "0.875rem", color: "var(--text-grey)" }}>
            Tổng cộng
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography
              sx={{
                fontSize: "1.25rem",
                color: "var(--text-primary-pink)",
                fontWeight: 700,
              }}
            >
              {currencyFormat(10000)}
            </Typography>
            <IconButton
              onClick={handleShowDetail}
              sx={{ color: "var(--text-primary-pink)" }}
            >
              {showDetail ? (
                <KeyboardArrowUp fontSize="small" />
              ) : (
                <KeyboardArrowDown fontSize="small" />
              )}
            </IconButton>
          </Box>
        </Box>
        <Box>
          <Button
            sx={{
              width: "136px",
              height: "44px",
              bgcolor: "var(--bg-primary-pink)",
              color: "var(--text-white)",
              textTransform: "none",
            }}
          >
            Đặt hàng
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default CheckoutBottomNavbar;
