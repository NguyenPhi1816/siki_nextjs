import { IModal } from "@/types/types";
import { Box, IconButton, Typography } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import ImageButton from "../image/ImageButton";
import { Swiper, SwiperSlide } from "swiper/react";
import { useAppDispatch, useAppSelector } from "../../../lib/hooks";
import { selectIsMobile } from "../../../lib/feartures/ui/uiSlice";
import { Navigation } from "swiper/modules";
import Image from "next/image";
import { Clear } from "@mui/icons-material";
import {
  CloseAction,
  closeModal,
} from "../../../lib/feartures/modal/modalSlice";
import { Dispatch } from "@reduxjs/toolkit";

export interface IImageModalData {
  title: string;
  images: string[];
}

const ImageModal: React.FC<IModal<IImageModalData>> = React.forwardRef(
  ({ data }, ref) => {
    const dispatch: Dispatch = useAppDispatch();
    const isMobile = useAppSelector(selectIsMobile);

    const swiperRef = useRef<any>(null);
    const [selectedImage, setSelectedImage] = useState<number>(0);

    useEffect(() => {
      if (swiperRef.current) {
        swiperRef.current.slideTo(selectedImage);
      }
    }, [selectedImage]);

    const handleCloseModal = () => {
      dispatch(closeModal({ closeAction: CloseAction.doNothing }));
    };

    const handleChangeImage = (index: number) => {
      setSelectedImage(index);
    };

    return (
      <Box
        sx={{
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            padding: "1rem",
            bgcolor: "var(--white)",
            width: !isMobile ? "600px" : "100%",
            height: !isMobile ? "750px" : "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
            borderRadius: 1,
          }}
        >
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography
              variant="body1"
              sx={{ marginLeft: "0.75rem", fontWeight: 700 }}
            >
              {data.title}
            </Typography>
            <IconButton
              onClick={handleCloseModal}
              size="medium"
              sx={{ color: "var(--black)" }}
            >
              <Clear fontSize="medium" />
            </IconButton>
          </Box>
          <Box
            sx={{
              margin: "0 auto",
              width: isMobile ? "100%" : "var(--modal-main-image)",
              height: "var(--modal-main-image)",
              borderRadius: 1,
              overflow: "hidden",
            }}
          >
            <Swiper
              slidesPerView={1}
              navigation={!isMobile}
              modules={[Navigation]}
              className="mySwiper"
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
              }}
            >
              {data?.images.map((item, index) => (
                <SwiperSlide key={index}>
                  <Image
                    style={{
                      width: "100%",
                      height: "100%",
                      backgroundColor: "var(--white)",
                      objectFit: "contain",
                    }}
                    src={item}
                    alt="feedback image"
                    width={500}
                    height={500}
                    priority
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </Box>
          <Box sx={{ width: "100%" }}>
            <Swiper
              slidesPerView={!isMobile ? 6 : 4}
              spaceBetween={10}
              navigation={!isMobile}
              modules={[Navigation]}
              className="mySwiper"
            >
              {data?.images.map((image, index) => (
                <SwiperSlide key={index}>
                  <ImageButton
                    url={image}
                    alt="feedback images"
                    onClick={() => handleChangeImage(index)}
                    selected={index === selectedImage}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </Box>
        </Box>
      </Box>
    );
  }
);

ImageModal.displayName = "ImageModal";

export default ImageModal;
