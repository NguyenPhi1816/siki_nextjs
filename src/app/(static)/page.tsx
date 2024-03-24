"use client";
import ProductSwiper from "@/components/product/ProductSwiper";
import ProductTabPanel from "@/components/product/ProductTabPanel";
import { IProduct, PRODUCTS, TAB_LABEL } from "@/components/product/products";
import { Container } from "@mui/material";
import { useEffect, useState } from "react";
import { useAppDispatch } from "../../../lib/hooks";
import {
  setAppleCategory,
  setOppoCategory,
  setProduct,
  setProductLabel,
  setSamsungCategory,
  setXiaomiCategory,
} from "../../../lib/feartures/product/productSlice";

export default function Home() {
  const dispatch = useAppDispatch();
  const [product, _setProduct] = useState<IProduct[]>([]);
  const [appleCategory, _setAppleCategory] = useState<IProduct[]>([]);
  const [samsungCategory, _setSamSungCategory] = useState<IProduct[]>([]);
  const [xiaomiCategory, _setXiaomiCategory] = useState<IProduct[]>([]);
  const [oppoCategory, _setOppoCategory] = useState<IProduct[]>([]);

  useEffect(() => {
    setTimeout(() => {
      const fetchData = () => {
        _setProduct(PRODUCTS);
        dispatch(setProduct(PRODUCTS));

        dispatch(setProductLabel(TAB_LABEL));
      };
      fetchData();
    }, 3000);
  }, [dispatch]);

  useEffect(() => {
    if (product.length !== 0) {
      const fetchData = () => {
        const apple = product.filter((item) => item.storeName === "Apple");
        _setAppleCategory(apple);
        dispatch(setAppleCategory(apple));

        const samsung = product.filter((item) => item.storeName === "Samsung");
        _setSamSungCategory(samsung);
        dispatch(setSamsungCategory(samsung));

        const xiaomi = product.filter((item) => item.storeName === "Xiaomi");
        _setXiaomiCategory(xiaomi);
        dispatch(setXiaomiCategory(xiaomi));

        const oppo = product.filter((item) => item.storeName === "OPPO");
        _setOppoCategory(oppo);
        dispatch(setOppoCategory(oppo));
      };
      fetchData();
    }
  }, [product, dispatch]);

  return (
    <Container sx={{ p: 0 }}>
      <ProductSwiper title="Apple products" data={appleCategory} />
      <ProductSwiper
        title="Samsung products"
        data={samsungCategory}
        sx={{ marginTop: 2 }}
      />
      <ProductSwiper
        title="Xiaomi products"
        data={xiaomiCategory}
        sx={{ marginTop: 2 }}
      />
      <ProductSwiper
        title="OPPO products"
        data={oppoCategory}
        sx={{ marginTop: 2 }}
      />
      <ProductTabPanel sx={{ marginTop: 2 }} />
    </Container>
  );
}
