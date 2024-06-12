"use client";
import { Box, Button, Divider, Tab, Tabs, Typography } from "@mui/material";
import React, { useEffect } from "react";
import Wrapper from "../wrapper/Wrapper";
import Image from "next/image";
import { LocalShipping, Store } from "@mui/icons-material";
import { currencyFormat } from "@/lib/number";
import { Order } from "@/types/order";
import { useGetAllOrderMutation } from "../../../lib/feartures/order/orderApi";
import { useAppDispatch, useAppSelector } from "../../../lib/hooks";
import { selectTokens } from "../../../lib/feartures/auth/authSlice";
import { ModalType, openModal } from "../../../lib/feartures/modal/modalSlice";

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

interface ICustomTabPanel {
  index: number;
  value: number;
  data: Order[];
}

const CustomTabPanel: React.FC<ICustomTabPanel> = ({ index, value, data }) => {
  const dispatch = useAppDispatch();

  const getTotalPrice = (index: number) => {
    return data[index].orderDetails.reduce((accumulator, currentValue) => {
      return (
        accumulator +
        currentValue.productVariantDto.price * currentValue.quantity
      );
    }, 0);
  };

  const handleShowReviewForm = (id: number) => {
    dispatch(
      openModal({ modalType: ModalType.review, modalProps: { productId: id } })
    );
  };

  return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
    >
      {data &&
        data.length > 0 &&
        data.map((item, index) => (
          <Box
            key={item.id}
            sx={{
              marginTop: "1rem",
              padding: "1rem",
              bgcolor: "var(--bg-white)",
              borderRadius: 1,
            }}
          >
            <Box sx={{ display: "flex" }}>
              <LocalShipping sx={{ color: "var(--text-grey)" }} />
              <Typography
                sx={{
                  marginLeft: "1rem",
                  marginBottom: "1rem",
                  color: "var(--text-grey)",
                  textTransform: "capitalize",
                }}
              >
                {item.status.toLocaleLowerCase()}
              </Typography>
            </Box>
            <Divider />
            <Box sx={{ marginTop: "1rem" }}>
              {item.orderDetails.map((orderDetail) => (
                <Box
                  key={orderDetail.id}
                  sx={{
                    marginTop: "1rem",
                    padding: "1rem",
                    border: "1px solid var(--outline-light-grey)",
                    display: "flex",
                    borderRadius: 1,
                  }}
                >
                  <Image
                    src={orderDetail.productVariantDto.image}
                    alt={orderDetail.productVariantDto.name}
                    width={120}
                    height={120}
                  />
                  <Box sx={{ marginLeft: "1rem", marginTop: "1rem", flex: 1 }}>
                    <Typography
                      sx={{
                        marginBottom: "0.25rem",
                        color: "var(--text-black)",
                        minHeight: "2rem",
                        maxWidth: "90%",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        display: "-webkit-box",
                        WebkitLineClamp: "2",
                        WebkitBoxOrient: "vertical",
                      }}
                    >
                      {orderDetail.productVariantDto.name}
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                        color: "var(--text-grey)",
                      }}
                    >
                      <Store fontSize="small" />
                      <Typography
                        sx={{
                          fontSize: "0.825rem",
                        }}
                      >
                        {orderDetail.productVariantDto.store.name}
                      </Typography>
                    </Box>
                  </Box>
                  <Typography sx={{ padding: "1rem 5rem" }}>
                    x{orderDetail.quantity}
                  </Typography>
                  <Box
                    sx={{
                      marginTop: "1rem",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Typography sx={{ fontWeight: 700 }}>
                      {currencyFormat(
                        orderDetail.productVariantDto.price *
                          orderDetail.quantity
                      )}
                    </Typography>
                    {item.status === OrderStatus.SUCCESS && (
                      <Button
                        onClick={() =>
                          handleShowReviewForm(orderDetail.productVariantDto.id)
                        }
                        variant="outlined"
                      >
                        Viết nhận xét
                      </Button>
                    )}
                  </Box>
                </Box>
              ))}
            </Box>
            <Box
              sx={{
                padding: "1rem 0",
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <Typography color={"var(--text-grey)"}>Tổng tiền</Typography>
              <Typography fontWeight={700} marginLeft={"1rem"}>
                {currencyFormat(getTotalPrice(index))}
              </Typography>
            </Box>
          </Box>
        ))}
    </Box>
  );
};

enum OrderStatus {
  PENDING = "PENDING",
  SHIPPING = "SHIPPING",
  SUCCESS = "SUCCESS",
  CANCEL = "CANCEL",
}

const MyOrders = () => {
  const tokens = useAppSelector(selectTokens);
  const [getAllOrder, { data: orders, error }] = useGetAllOrderMutation();
  const [value, setValue] = React.useState<number>(0);
  const [data, setData] = React.useState<Order[]>([]);
  const [pendingOrders, setPendingOrders] = React.useState<Order[]>([]);
  const [shippingOrders, setShippingOrders] = React.useState<Order[]>([]);
  const [successOrders, setSuccessOrders] = React.useState<Order[]>([]);
  const [cancelOrders, setCancelOrders] = React.useState<Order[]>([]);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const getAllMyOrder = async (token: string) => {
    await getAllOrder(token);
  };

  useEffect(() => {
    if (!!tokens.accessToken) {
      getAllMyOrder(tokens.accessToken);
    }
  }, [tokens.accessToken]);

  useEffect(() => {
    if (!!orders) {
      setData(orders);
    }
  }, [orders, error]);

  useEffect(() => {
    const _pendingOrders = data.filter(
      (item) => item.status === OrderStatus.PENDING
    );
    setPendingOrders(_pendingOrders);

    const _shippingOrders = data.filter(
      (item) => item.status === OrderStatus.SHIPPING
    );
    setShippingOrders(_shippingOrders);

    const _successOrders = data.filter(
      (item) => item.status === OrderStatus.SUCCESS
    );
    setSuccessOrders(_successOrders);

    const _cancelOrders = data.filter(
      (item) => item.status === OrderStatus.CANCEL
    );
    setCancelOrders(_cancelOrders);
  }, [data]);

  return (
    <Wrapper sx={{ height: "100vh" }}>
      <Box
        sx={{
          marginTop: "1rem",
          padding: "1rem",
          width: "100%",
          height: "100%",
          borderRadius: 1,
        }}
      >
        <Typography
          variant={"h4"}
          sx={{ marginBottom: 1, fontSize: "1.125rem", fontWeight: "700" }}
        >
          Đơn hàng của tôi
        </Typography>
        <Box
          sx={{
            borderBottom: 1,
            borderColor: "divider",
            bgcolor: "var(--bg-white)",
          }}
        >
          <Tabs
            value={value}
            onChange={handleChange}
            variant="scrollable"
            aria-label="basic tabs example"
            sx={{
              "& .Mui-selected": {
                backgroundColor: "var(--bg-secondary-pink-opacity-20)",
              },
            }}
          >
            <Tab sx={{ width: "20%" }} label={"Tất cả đơn"} {...a11yProps(0)} />
            <Tab
              sx={{ width: "20%" }}
              label={"Chờ thanh toán"}
              {...a11yProps(1)}
            />
            <Tab
              sx={{ width: "20%" }}
              label={"Đang vận chuyển"}
              {...a11yProps(2)}
            />
            <Tab sx={{ width: "20%" }} label={"Đã giao"} {...a11yProps(3)} />
            <Tab sx={{ width: "20%" }} label={"Đã hủy"} {...a11yProps(4)} />
          </Tabs>
        </Box>
        <Box sx={{ marginTop: "1rem" }}>
          <CustomTabPanel value={value} index={0} data={data} />
          <CustomTabPanel value={value} index={1} data={pendingOrders} />
          <CustomTabPanel value={value} index={2} data={shippingOrders} />
          <CustomTabPanel value={value} index={3} data={successOrders} />
          <CustomTabPanel value={value} index={4} data={cancelOrders} />
        </Box>
      </Box>
    </Wrapper>
  );
};

export default MyOrders;
