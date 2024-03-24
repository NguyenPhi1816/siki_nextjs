"use client";
import { Box, SxProps, Typography } from "@mui/material";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ProductItem from "./ProductItem";
import { useAppSelector } from "../../../lib/hooks";
import {
  selectIsMobile,
  selectIsStatesInitialized,
  selectIsTablet,
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
  const TABLET_SLIDE_PER_VIEW = 4;
  const DESKTOP_SLIDE_PER_VIEW = 6;

  const MOBILE_SLIDE_PER_GROUP = 1;
  const TABLET_SLIDE_PER_GROUP = 4;
  const DESKTOP_SLIDE_PER_GROUP = 6;

  const isAppLoaded = useAppSelector(selectIsStatesInitialized);
  const isMobile = useAppSelector(selectIsMobile);
  const isTablet = useAppSelector(selectIsTablet);

  const getSlidesPerGroup = () => {
    if (isMobile) return MOBILE_SLIDE_PER_GROUP;
    if (isTablet) return TABLET_SLIDE_PER_GROUP;
    return DESKTOP_SLIDE_PER_GROUP;
  };

  const getSlidesPerView = () => {
    if (isMobile) return MOBILE_SLIDE_PER_VIEW;
    if (isTablet) return TABLET_SLIDE_PER_VIEW;
    return DESKTOP_SLIDE_PER_VIEW;
  };

  return (
    isAppLoaded && (
      <Box padding={2} sx={{ ...sx, bgcolor: "var(--white)", borderRadius: 1 }}>
        <Typography variant={"h4"} fontSize={"1.125rem"} fontWeight={700}>
          {title}
        </Typography>
        <Box marginTop={2}>
          <Swiper
            slidesPerGroup={getSlidesPerGroup()}
            slidesPerView={getSlidesPerView()}
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
              new Array(getSlidesPerView()).fill(0).map((item, i) => {
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
