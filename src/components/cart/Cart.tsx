"use client";
import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Checkbox,
  Button,
  Grid,
  IconButton,
  Divider,
} from "@mui/material";
import CartSection from "./CartSection";
import PageSection from "../wrapper/PageSection";
import { ChevronRight, Delete, LocationOn } from "@mui/icons-material";
import { currencyFormat } from "../numberFormat/currency";
import CartItem from "./CartItem";
import { ICart } from "@/types/cart";
import { useAppDispatch, useAppSelector } from "../../../lib/hooks";
import {
  selectIsMobile,
  selectIsStatesInitialized,
} from "../../../lib/feartures/ui/uiSlice";
import Wrapper from "../wrapper/Wrapper";
import Topbar from "../navbar/TopBar";
import DefaultTopNavbar from "../navbar/components/topbar/DefaultTopNavbar";
import BackNavbar from "../navbar/components/topbar/BackNavbar";
import Footer from "../footer/Footer";
import { useRouter } from "next/navigation";
import { IMessageModalData, MessageType } from "../modal/MessageModal";
import { ModalType, openModal } from "../../../lib/feartures/modal/modalSlice";
import CustomLink, { LinkColor } from "../links/CustomLink";

interface IGroupByStoreItems {
  id: number;
  name: string;
  items: ICart[];
}

interface IFormattedData {
  stores: IGroupByStoreItems[];
  totalItems: number;
}

interface ICartComponent {
  data: ICart[];
}

const Cart: React.FC<ICartComponent> = ({ data }) => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const isMobile: boolean = useAppSelector(selectIsMobile);
  const isAppLoaded = useAppSelector(selectIsStatesInitialized);
  const [formattedData, setFormattedData] = useState<IFormattedData>({
    stores: [],
    totalItems: 0,
  });
  const [selectedItems, setSelectedItems] = useState<ICart[]>([]);
  const [totalPrice, setTotalPrice] = useState<number>(0);

  useEffect(() => {
    if (data) {
      let initData: IFormattedData = { stores: [], totalItems: 0 };

      // pre-processing data
      const formattedData = data.reduce(
        (accumulator: IFormattedData, currentValue: ICart) => {
          // check if the store of this item already exists in accumulator
          const index = accumulator.stores.findIndex(
            (item) => item.id === currentValue.product.store.id
          );
          // if it exists, push this item to the store's items array, increase the total items
          if (index !== -1) {
            accumulator.stores[index].items.push(currentValue);
            accumulator.totalItems += 1;
            return accumulator;
          }
          // if not, create new store item, push it into the stores array and increase the total items
          const newValue: IFormattedData = {
            stores: [
              ...accumulator.stores,
              {
                id: currentValue.product.store.id,
                name: currentValue.product.store.name,
                items: [currentValue],
              },
            ],
            totalItems: (accumulator.totalItems += 1),
          };
          return newValue;
        },
        initData
      );

      setFormattedData(formattedData);
    }
  }, [data]);

  useEffect(() => {
    const total = selectedItems.reduce((accumulator, currentValue) => {
      return accumulator + currentValue.product.price * currentValue.quantity;
    }, 0);
    setTotalPrice(total);
  }, [selectedItems]);

  const handleSelectItem = (item: ICart) => {
    setSelectedItems((prev) => {
      const isChecked = checkIsItemSelected(item.id);
      // if item is not in selectedItems array => push it into this array
      if (!isChecked) {
        const newValue = [...prev, item];
        return newValue;
      }
      // if there is => remove it from this array
      const newValue = prev.filter((i) => i.id !== item.id);
      return newValue;
    });
  };

  const handleSelectStore = (items: ICart[]) => {
    const isChecked = checkIsStoreSelected(items);
    if (isChecked) {
      setSelectedItems((prev) => {
        // remove all items in store from selectedItems array
        return prev.filter((item) => !items.includes(item));
      });
    } else {
      items.forEach((item) => {
        const isExist = checkIsItemSelected(item.id);
        if (!isExist) {
          setSelectedItems((prev) => [...prev, item]);
        }
      });
    }
  };

  const handleSelectAllItems = () => {
    const isChecked = checkIsAllItemsSelected();
    if (isChecked) {
      setSelectedItems([]);
    } else {
      setSelectedItems(data);
    }
  };

  // check if all items are in the selectedItems array
  const checkIsAllItemsSelected: () => boolean = () => {
    return (
      selectedItems.length > 0 &&
      JSON.stringify(selectedItems.sort((a, b) => a.id - b.id)) ===
        JSON.stringify(data.sort((a, b) => a.id - b.id))
    );
  };

  // check if all items in store are in the selectedItems array
  const checkIsStoreSelected: (items: ICart[]) => boolean = (items) => {
    return items.every((item) => selectedItems.includes(item));
  };

  // check if this item is in the selectedItems array
  const checkIsItemSelected: (id: number) => boolean = (id) => {
    const index = selectedItems.findIndex((item) => item.id === id);
    return index !== -1;
  };

  const handleCheckout = () => {
    if (selectedItems.length > 0) {
      router.push("/checkout");
    } else {
      const messageData: IMessageModalData = {
        type: MessageType.INFORMATION,
        title: "Đơn hàng trống",
        message: "Bạn vẫn chưa chọn một sản phẩm để mua",
      };
      dispatch(
        openModal({ modalType: ModalType.message, modalProps: messageData })
      );
    }
  };

  return (
    isAppLoaded && (
      <Box sx={{ height: "100vh", width: "100vw", overflow: "scroll" }}>
        <Topbar>
          {isMobile ? (
            <BackNavbar title={`Giỏ hàng (${selectedItems.length})`} />
          ) : (
            <DefaultTopNavbar />
          )}
        </Topbar>
        <Wrapper
          disableScroll={true}
          showBottomBar={false}
          sx={
            isMobile
              ? {
                  padding: "0",
                  marginBottom: "var(--mobile-cart-summary-height)",
                }
              : {}
          }
        >
          {!isMobile && (
            <Typography
              padding={"1rem 0"}
              variant="h4"
              fontSize={"1.25rem"}
              textTransform={"uppercase"}
              fontWeight={"bold"}
            >
              Giỏ Hàng
            </Typography>
          )}
          {isMobile && (
            <Box
              sx={{
                marginBottom: "1rem",
                padding: "1rem",
                bgcolor: "var(--bg-white)",
                borderRadius: 1,
              }}
            >
              <Box sx={{ display: "flex" }}>
                <Box>
                  <Box sx={{ marginBottom: "0.5rem", display: "flex" }}>
                    <LocationOn
                      fontSize="small"
                      sx={{
                        marginRight: "0.25rem",
                        color: "var(--text-primary-pink)",
                      }}
                    />
                    <Typography
                      variant="body1"
                      fontSize={"0.875rem"}
                      fontWeight={700}
                    >
                      Khả Phi
                    </Typography>
                    <Divider
                      flexItem
                      orientation="vertical"
                      sx={{ margin: "0 0.25rem" }}
                    />
                    <Typography
                      variant="body1"
                      fontSize={"0.875rem"}
                      fontWeight={700}
                    >
                      0927195291
                    </Typography>
                  </Box>
                  <Typography
                    variant="body1"
                    fontSize={"0.875rem"}
                    color={"var(--text-grey)"}
                  >
                    9/5 Đường số 16, Phường Linh Chiểu, Thành phố Thủ Đức, Hồ
                    Chí Minh
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <IconButton>
                    <ChevronRight />
                  </IconButton>
                </Box>
              </Box>
            </Box>
          )}
          <Box sx={isMobile ? {} : { display: "flex" }}>
            <Box sx={{ width: isMobile ? "100%" : "70%" }}>
              <PageSection sx={{ display: "flex", alignItems: "center" }}>
                <Grid
                  container
                  padding={isMobile ? "0.5rem" : "1rem"}
                  alignItems={"center"}
                  columns={24}
                >
                  <Grid item xs={2} md={1}>
                    <Checkbox
                      size="small"
                      checked={checkIsAllItemsSelected()}
                      onClick={handleSelectAllItems}
                    />
                  </Grid>
                  <Grid item xs={20} md={10}>
                    <Typography variant="h6" fontSize={"0.875rem"}>
                      Tất cả ({formattedData.totalItems} sản phẩm)
                    </Typography>
                  </Grid>
                  {!isMobile && (
                    <>
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
                    </>
                  )}
                  <Grid item xs={2} md={1}>
                    <IconButton size="small">
                      <Delete />
                    </IconButton>
                  </Grid>
                </Grid>
              </PageSection>

              {formattedData?.stores.map((store: IGroupByStoreItems) => (
                <CartSection
                  isMobile={isMobile}
                  key={store.id}
                  storeName={store.name}
                  href={`/store/${store.id}`}
                  isSelected={checkIsStoreSelected(store.items)}
                  onSelect={() => handleSelectStore(store.items)}
                >
                  {store.items.map((item: ICart) => (
                    <CartItem
                      isMobile={isMobile}
                      key={item.id}
                      data={item}
                      isSelected={checkIsItemSelected(item.id)}
                      onSelect={() => handleSelectItem(item)}
                    />
                  ))}
                </CartSection>
              ))}
            </Box>
            {!isMobile && <Box sx={{ width: "1rem" }} />}
            <Box
              sx={
                isMobile
                  ? {
                      position: "fixed",
                      bottom: 0,
                      left: 0,
                      padding: "1rem 0",
                      width: "100%",
                      height: "var(--mobile-cart-summary-height)",
                      bgcolor: "var(--bg-white)",
                    }
                  : { flex: 1 }
              }
            >
              {!isMobile && (
                <Box
                  sx={{
                    marginBottom: "1rem",
                    padding: "1rem",
                    bgcolor: "var(--bg-white)",
                    borderRadius: 1,
                  }}
                >
                  <Box
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Typography
                      variant="body1"
                      fontSize={"0.875rem"}
                      color={"var(--text-grey)"}
                    >
                      Giao tới
                    </Typography>
                    <CustomLink
                      href="/"
                      color={LinkColor.primaryPink}
                      noUnderline
                      fontSize="0.875rem"
                    >
                      Thay đổi
                    </CustomLink>
                  </Box>
                  <Box sx={{ margin: "0.5rem 0", display: "flex" }}>
                    <Typography
                      variant="body1"
                      fontSize={"0.875rem"}
                      fontWeight={700}
                    >
                      Khả Phi
                    </Typography>
                    <Divider
                      flexItem
                      orientation="vertical"
                      sx={{ margin: "0 0.25rem" }}
                    />
                    <Typography
                      variant="body1"
                      fontSize={"0.875rem"}
                      fontWeight={700}
                    >
                      0927195291
                    </Typography>
                  </Box>
                  <Typography
                    variant="body1"
                    fontSize={"0.875rem"}
                    color={"var(--text-grey)"}
                  >
                    9/5 Đường số 16, Phường Linh Chiểu, Thành phố Thủ Đức, Hồ
                    Chí Minh
                  </Typography>
                </Box>
              )}
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
                  <Box
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Typography variant="body1" fontSize={"0.875rem"}>
                      Tạm tính:
                    </Typography>
                    <Typography variant="body1" fontSize={"0.875rem"}>
                      {currencyFormat(totalPrice)}
                    </Typography>
                  </Box>
                  <Divider sx={{ margin: "1rem 0" }} />
                  <Box
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Typography variant="body1" fontSize={"0.875rem"}>
                      Tổng tiền:
                    </Typography>
                    <Typography
                      variant="body1"
                      color={"var(--text-primary-pink)"}
                      fontSize={"1rem"}
                      marginBottom={"0.5rem"}
                    >
                      {selectedItems.length > 0
                        ? currencyFormat(totalPrice)
                        : "Vui lòng chọn một sản phẩm"}
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
                <Box sx={isMobile ? { padding: "0 1rem" } : {}}>
                  <Button
                    variant="contained"
                    color="primary"
                    sx={{
                      marginTop: "1rem",
                      width: "100%",
                      color: "var(--text-white)",
                    }}
                    onClick={handleCheckout}
                  >
                    Mua Hàng ({selectedItems.length})
                  </Button>
                </Box>
              </Box>
            </Box>
          </Box>
        </Wrapper>
        <Footer />
      </Box>
    )
  );
};

export default Cart;
