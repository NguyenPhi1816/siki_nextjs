"use client";
import { Box, SxProps, Typography } from "@mui/material";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ProductItem from "./ProductItem";
import { useAppSelector } from "../../../lib/hooks";
import {
  selectIsMobileScreen,
  selectIsStatesInitialized,
} from "../../../lib/feartures/ui/uiSlice";
import { IProduct } from "./products";
import React from "react";
import ProductItemSkeleton from "./ProductItemSkeleton";

interface IProductSwiper {
  title: string;
  data: IProduct[];
  sx?: SxProps;
}

const ProductSwiper: React.FC<IProductSwiper> = ({ title, data, sx }) => {
  const MOBILE_SLIDE_PER_VIEW = 2;
  const DESKTOP_SLIDE_PER_VIEW = 6;

  const MOBILE_SLIDE_PER_GROUP = 1;
  const DESKTOP_SLIDE_PER_GROUP = 6;

  const isAppLoaded = useAppSelector(selectIsStatesInitialized);
  const isMobile = useAppSelector(selectIsMobileScreen);

  return (
    isAppLoaded && (
      <Box padding={2} sx={{ ...sx, bgcolor: "var(--white)", borderRadius: 1 }}>
        <Typography variant={"h4"} fontSize={"1.125rem"} fontWeight={700}>
          {title}
        </Typography>
        <Box marginTop={2}>
          <Swiper
            slidesPerGroup={
              isMobile ? MOBILE_SLIDE_PER_GROUP : DESKTOP_SLIDE_PER_GROUP
            }
            slidesPerView={
              isMobile ? MOBILE_SLIDE_PER_VIEW : DESKTOP_SLIDE_PER_VIEW
            }
            spaceBetween={10}
            navigation={!isMobile}
            modules={[Navigation]}
            className="mySwiper"
          >
            {data.length !== 0 &&
              data.map((item) => {
                return (
                  <SwiperSlide key={item.id}>
                    <ProductItem data={item} />
                  </SwiperSlide>
                );
              })}
            {data.length === 0 &&
              new Array(
                isMobile ? MOBILE_SLIDE_PER_VIEW : DESKTOP_SLIDE_PER_VIEW
              )
                .fill(0)
                .map((item, i) => {
                  return (
                    <SwiperSlide key={i}>
                      <ProductItemSkeleton />
                    </SwiperSlide>
                  );
                })}
          </Swiper>
        </Box>
      </Box>
    )
  );
};

export default ProductSwiper;
