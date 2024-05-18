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
import { Delete } from "@mui/icons-material";
import { currencyFormat } from "../numberFormat/currency";
import CartItem from "./CartItem";
import { ICart } from "@/types/cart";

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
  const [formattedData, setFormattedData] = useState<IFormattedData>({
    stores: [],
    totalItems: 0,
  });
  const [selectedItems, setSelectedItems] = useState<number[]>([]);

  useEffect(() => {
    if (data) {
      let initData: IFormattedData = { stores: [], totalItems: 0 };

      // format data
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

  const handleSelectItem = (id: number) => {
    setSelectedItems((prev) => {
      const index = prev.findIndex((item) => item === id);
      if (index !== -1) {
        const newValue = [...prev, id];
        return newValue;
      }
      const newValue = prev.filter((item) => item !== id);
      return newValue;
    });
  };

  const handleSelectAllItems = () => {
    // data.forEach(item => {
    // });
  };

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
        <Box sx={{ width: "70%" }}>
          <PageSection sx={{ display: "flex", alignItems: "center" }}>
            <Grid container padding="16px" alignItems={"center"} columns={24}>
              <Grid item xs={1}>
                <Checkbox size="small" />
              </Grid>
              <Grid item xs={10}>
                <Typography variant="h6" fontSize={"0.875rem"}>
                  Tất cả ({formattedData.totalItems} sản phẩm)
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

          {formattedData?.stores.map((store: any) => (
            <CartSection
              key={store.id}
              storeName={store.name}
              href={`/store/${store.id}`}
            >
              {store.items.map((item: any) => (
                <CartItem key={item.id} data={item} />
              ))}
            </CartSection>
          ))}
        </Box>
        <Box sx={{ width: "1rem" }} />
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
