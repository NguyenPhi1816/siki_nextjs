"use client";
import { Box, Button, Typography } from "@mui/material";
import Topbar from "../navbar/TopBar";
import BackNavbar from "../navbar/components/topbar/BackNavbar";
import DefaultTopNavbar from "../navbar/components/topbar/DefaultTopNavbar";
import { useAppDispatch, useAppSelector } from "../../../lib/hooks";
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
import { selectUser } from "../../../lib/feartures/user/userSlice";
import {
  clearItems,
  selectItems,
} from "../../../lib/feartures/checkout/CheckoutSlice";
import ShippingItem from "./ShippingItem";
import PageSection from "../wrapper/PageSection";
import { useEffect, useState } from "react";
import { useSaveOrderMutation } from "../../../lib/feartures/order/orderApi";
import { OrderDetailRequest, saveOrderRequest } from "@/types/order";
import { selectTokens } from "../../../lib/feartures/auth/authSlice";
import { ModalType, openModal } from "../../../lib/feartures/modal/modalSlice";
import { MessageType } from "../modal/MessageModal";
import { redirect } from "next/navigation";

const Checkout = () => {
  const dispatch = useAppDispatch();
  const isMobile = useAppSelector(selectIsMobile);
  const isAppLoaded = useAppSelector(selectIsStatesInitialized);
  const { user } = useAppSelector(selectUser);
  const tokens = useAppSelector(selectTokens);
  const items = useAppSelector(selectItems);
  const [paymentMethod, setPaymentMethod] = useState<string>("");
  const [saveOrder, { data, error }] = useSaveOrderMutation();

  useEffect(() => {
    if (!items || !user || !tokens.accessToken) {
      redirect("/");
    }
  }, [items, user, tokens]);

  const getTotalPrice = () => {
    return items
      ? items.reduce((accumulator, currentValue) => {
          return accumulator + currentValue.price * currentValue.quantity;
        }, 0)
      : 0;
  };

  const handleCheckout = async () => {
    if (!!user && tokens.accessToken && items) {
      if (paymentMethod === "cash") {
        const orderDetailsReq: OrderDetailRequest[] = [];

        for (let item of items) {
          const myData: OrderDetailRequest = {
            price: item.price,
            productId: item.productId,
            quantity: item.quantity,
          };
          orderDetailsReq.push(myData);
        }

        const saveOrderReq: saveOrderRequest = {
          token: tokens.accessToken,
          receiverName: user.firstName + " " + user.lastName,
          receiverAddress: user.address,
          receiverPhoneNumber: user.phoneNumber,
          note: "",
          orderDetails: orderDetailsReq,
        };

        // save order
        await saveOrder(saveOrderReq);
        // clear checkout store
        dispatch(clearItems());
        // show message
        dispatch(
          openModal({
            modalType: ModalType.message,
            modalProps: {
              type: MessageType.SUCCESS,
              title: "Thanh toán thành công",
              message: "Đơn hàng đã được thanh toán thành công",
            },
          })
        );
      } else if (paymentMethod === "vnpay") {
      }
    }
  };

  useEffect(() => {
    console.log(data, error);
  }, [data, error]);

  return (
    items &&
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
            {isMobile && <OrderRecipientInfo mobile user={user} />}
            {/* <DeliveryMethod /> */}
            <PageSection sx={{ padding: "1rem" }}>
              <Typography sx={{ marginBottom: "1rem", fontWeight: 700 }}>
                Sản phẩm đặt mua
              </Typography>
              {items &&
                items.map((item) => (
                  <ShippingItem key={item.productId} data={item} />
                ))}
            </PageSection>
            <CheckoutMethod setMethod={(method) => setPaymentMethod(method)} />
          </Box>
          {!isMobile && <Box sx={{ width: "1rem" }} />}
          <Box sx={{ maxWidth: isMobile ? "100%" : "30%" }}>
            {!isMobile && <OrderRecipientInfo user={user} />}
            <PriceSummary totalPrice={getTotalPrice()} />
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
                      {currencyFormat(getTotalPrice())}
                    </Typography>
                  </Box>
                </Box>
                <Box>
                  <Button
                    onClick={handleCheckout}
                    sx={{
                      width: "136px",
                      height: "44px",
                      bgcolor: "var(--bg-primary-pink)",
                      color: "var(--text-white)",
                      textTransform: "none",
                      ":hover": {
                        bgcolor: "var(--bg-primary-pink)",
                      },
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
