"use client";
import { Box, Typography } from "@mui/material";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ProductItem from "./ProductItem";

const ProductSwiper = () => {
  return (
    <Box padding={2} bgcolor={"var(--white)"}>
      <Typography variant={"h4"} align={"center"} fontWeight={700}>
        Swiper + Material-UI example
      </Typography>
      <Box marginTop={4}>
        <Swiper
          navigation={true}
          slidesPerView={5}
          spaceBetween={10}
          className="mySwiper"
        >
          {new Array(10).fill(0).map((item, i) => (
            <SwiperSlide key={i}>
              <ProductItem />
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Box>
  );
};

export default ProductSwiper;
