import React, { useEffect, useState } from "react";
import { useAppSelector } from "../../../lib/hooks";
import { selectIsMobile } from "../../../lib/feartures/ui/uiSlice";
import { Box, Button, Skeleton } from "@mui/material";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

interface IProductDetailSlider {
  showSkeleton: boolean;
  images: string[] | null;
}

const ProductDetailSlider: React.FC<IProductDetailSlider> = ({
  showSkeleton,
  images,
}) => {
  const isMobile = useAppSelector(selectIsMobile);
  const [mainImage, setMainImage] = useState<string | null>(null);

  useEffect(() => {
    if (images) {
      setMainImage(images[0]);
    }
  }, [images]);

  const handleChangeImage = (image: string) => {
    setMainImage(image);
  };

  return !showSkeleton ? (
    <Box
      sx={{
        padding: isMobile ? "1rem" : "2rem",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          marginBottom: "0.5rem",
          width: isMobile ? "100%" : "var(--product-page-main-image)",
          height: "var(--product-page-main-image)",
        }}
      >
        {mainImage && (
          <Image
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
            src={mainImage}
            alt="product image"
            width={500}
            height={500}
            priority
          />
        )}
      </Box>
      <Box
        sx={{
          width: isMobile ? "100%" : "var(--product-page-main-image)",
        }}
      >
        <Swiper
          slidesPerGroup={4}
          slidesPerView={4}
          spaceBetween={10}
          navigation={!isMobile}
          modules={[Navigation]}
          className="mySwiper"
        >
          {images?.map((item, index) => (
            <SwiperSlide key={index}>
              <Button
                onClick={() => handleChangeImage(item)}
                sx={{
                  width: "var(--product-page-slide-image)",
                  height: "var(--product-page-slide-image)",
                }}
              >
                <Image
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                  src={item}
                  alt="image product"
                  width={200}
                  height={200}
                />
              </Button>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Box>
  ) : (
    <Box
      sx={{
        padding: isMobile ? "1rem" : "2rem",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Skeleton
        variant="rectangular"
        sx={{
          marginBottom: "0.5rem",
          width: isMobile ? "100%" : "var(--product-page-main-image)",
          height: "var(--product-page-main-image)",
        }}
      />
      <Box
        sx={{
          width: isMobile ? "100%" : "var(--product-page-main-image)",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        {new Array(4).fill(0).map((item, i) => (
          <Skeleton
            key={i}
            variant="rectangular"
            sx={{
              width: "var(--product-page-slide-image)",
              height: "var(--product-page-slide-image)",
            }}
          />
        ))}
      </Box>
    </Box>
  );
};

export default ProductDetailSlider;
