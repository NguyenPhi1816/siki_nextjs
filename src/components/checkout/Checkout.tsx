"use client";
import { Box, Button, Typography } from "@mui/material";
import Topbar from "../navbar/TopBar";
import BackNavbar from "../navbar/components/topbar/BackNavbar";
import DefaultTopNavbar from "../navbar/components/topbar/DefaultTopNavbar";
import { useAppSelector } from "../../../lib/hooks";
import {
  selectIsMobile,
  selectIsStatesInitialized,
} from "../../../lib/feartures/ui/uiSlice";
import Wrapper from "../wrapper/Wrapper";
import Footer from "../footer/Footer";
import OrderRecipientInfo from "../user/OrderRecipientInfo";
import DeliveryMethod from "./DeliveryMethod";
import CheckoutMethod from "./CheckoutMethod";
import PriceSummary from "./PriceSummary";
import BottomBar from "../navbar/BottomBar";
import CheckoutBottomNavbar from "../navbar/components/bottombar/CheckoutBottomNavbar";
import { currencyFormat } from "@/lib/number";

const Checkout = () => {
  const isMobile = useAppSelector(selectIsMobile);
  const isAppLoaded = useAppSelector(selectIsStatesInitialized);
  return (
    isAppLoaded && (
      <Box sx={{ height: "100vh", width: "100vw", overflow: "scroll" }}>
        <Topbar>
          {isMobile ? (
            <BackNavbar title={"Xác nhận Đơn hàng"} />
          ) : (
            <DefaultTopNavbar />
          )}
        </Topbar>
        <Wrapper
          disableScroll={true}
          sx={
            isMobile
              ? { marginBottom: "5rem", padding: "0" }
              : { paddingTop: "1rem", display: "flex" }
          }
        >
          <Box sx={{ flex: 1 }}>
            {isMobile && <OrderRecipientInfo mobile />}
            <DeliveryMethod />
            <CheckoutMethod />
          </Box>
          {!isMobile && <Box sx={{ width: "1rem" }} />}
          <Box sx={{ maxWidth: isMobile ? "100%" : "30%" }}>
            {!isMobile && <OrderRecipientInfo />}
            <PriceSummary />
            {!isMobile && (
              <Box
                sx={{
                  padding: "1rem",
                  display: "flex",
                  bgcolor: "var(--bg-white)",
                }}
              >
                <Box sx={{ flex: 1 }}>
                  <Typography
                    sx={{ fontSize: "0.875rem", color: "var(--text-grey)" }}
                  >
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
            )}
          </Box>
        </Wrapper>
        <Footer />
        <BottomBar>
          <CheckoutBottomNavbar />
        </BottomBar>
      </Box>
    )
  );
};

export default Checkout;
