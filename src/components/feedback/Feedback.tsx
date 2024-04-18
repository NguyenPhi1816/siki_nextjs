import {
  Avatar,
  Box,
  Card,
  CardContent,
  Divider,
  Grid,
  Rating,
  Typography,
} from "@mui/material";
import { Dispatch } from "@reduxjs/toolkit";
import { useAppDispatch, useAppSelector } from "../../../lib/hooks";
import { ModalType, openModal } from "../../../lib/feartures/modal/modalSlice";
import { IImageModalData } from "../modal/ImageModal";
import React from "react";
import ImageButton from "../image/ImageButton";
import { selectIsMobile } from "../../../lib/feartures/ui/uiSlice";

const IMAGES = [
  "https://salt.tikicdn.com/cache/w200/ts/review/f6/91/0e/21dad5859e0db9eb6fb9fd5544915595.jpg",
  "https://salt.tikicdn.com/cache/w200/ts/review/f6/91/0e/21dad5859e0db9eb6fb9fd5544915595.jpg",
  "https://salt.tikicdn.com/cache/w200/ts/review/f6/91/0e/21dad5859e0db9eb6fb9fd5544915595.jpg",
  "https://salt.tikicdn.com/cache/w200/ts/review/f6/91/0e/21dad5859e0db9eb6fb9fd5544915595.jpg",
  "https://salt.tikicdn.com/cache/w200/ts/review/f6/91/0e/21dad5859e0db9eb6fb9fd5544915595.jpg",
  "https://salt.tikicdn.com/cache/w200/ts/review/f6/91/0e/21dad5859e0db9eb6fb9fd5544915595.jpg",
];

const Feedback = () => {
  const dispatch: Dispatch = useAppDispatch();
  const isMobile = useAppSelector(selectIsMobile);

  const handleShowImageModal = () => {
    const modalProps: IImageModalData = {
      title: "Hình ảnh từ khách hàng",
      images: IMAGES,
    };
    dispatch(openModal({ modalType: ModalType.image, modalProps: modalProps }));
  };

  return (
    <Card sx={{ boxShadow: 0 }}>
      <CardContent sx={{ padding: 0, display: "flex" }}>
        <Box>
          <Avatar alt="User Feedback" src="" />
        </Box>
        <Box sx={{ margin: "0 1rem", flex: 1 }}>
          <Box sx={{ width: "100%", color: "var(--text-grey)" }}>
            <Typography sx={{ fontSize: "0.75rem" }}>User name</Typography>
            <Rating name="read-only" size="small" value={5} readOnly />
            <Box
              sx={{
                display: "flex",
                flexDirection: !isMobile ? "row" : "column",
              }}
            >
              <Typography sx={{ fontSize: "0.75rem" }}>
                2023-09-12 12:11
              </Typography>
              <Divider
                orientation="vertical"
                flexItem
                sx={{ margin: "0 0.25rem" }}
              />
              <Typography sx={{ fontSize: "0.75rem" }}>
                Phân loại hàng: Lưới Vân Rồng Đen
              </Typography>
            </Box>
            <Box sx={{ margin: "1rem 0", width: "100%" }}>
              <Typography sx={{ fontSize: "0.875rem" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
                natus commodi numquam repellendus alias officia, temporibus, a
                dicta voluptate praesentium, facilis earum minima recusandae
                explicabo dolorum quibusdam dolores architecto doloribus!
              </Typography>
            </Box>
            <Grid container spacing={2}>
              {IMAGES.map((item, index) => (
                <Grid item key={index}>
                  <ImageButton
                    url={item}
                    alt={"Feedback Image"}
                    onClick={handleShowImageModal}
                    key={index}
                  />
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default Feedback;
