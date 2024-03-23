"use client";
import { Box, Typography } from "@mui/material";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ProductItem from "./ProductItem";
import { useAppSelector } from "../../../lib/hooks";
import {
  selectIsMobileScreen,
  selectIsStatesInitialized,
} from "../../../lib/feartures/ui/uiSlice";

const ProductSwiper = () => {
  const MOBILE_SLIDE_PER_VIEW = 3;
  const DESKTOP_SLIDE_PER_VIEW = 6;

  const MOBILE_SLIDE_PER_GROUP = 1;
  const DESKTOP_SLIDE_PER_GROUP = 6;

  const isAppLoaded = useAppSelector(selectIsStatesInitialized);
  const isMobile = useAppSelector(selectIsMobileScreen);

  return (
    isAppLoaded && (
      <Box padding={2} sx={{ bgcolor: "var(--white)", borderRadius: 1 }}>
        <Typography variant={"h4"} fontSize={"1.125rem"} fontWeight={700}>
          Swiper + Material-UI example
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
            {new Array(15).fill(0).map((item, i) => (
              <SwiperSlide key={i}>
                <ProductItem />
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </Box>
    )
  );
};

export default ProductSwiper;
