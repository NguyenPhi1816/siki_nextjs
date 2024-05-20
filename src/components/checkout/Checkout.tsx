"use client";
import { Box } from "@mui/material";
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
        <Wrapper disableScroll={true} sx={isMobile ? { padding: "0" } : {}}>
          Hello
        </Wrapper>
        <Footer />
      </Box>
    )
  );
};

export default Checkout;
