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
import { IReviewItem } from "@/types/review";

interface IFeedbackComponent {
  data: IReviewItem;
}

const Feedback: React.FC<IFeedbackComponent> = ({ data }) => {
  const dispatch: Dispatch = useAppDispatch();
  const isMobile = useAppSelector(selectIsMobile);

  const handleShowImageModal = (images: string[], defaultIndex: number) => {
    const modalProps: IImageModalData = {
      title: "Hình ảnh từ khách hàng",
      images: images,
      defaultIndex: defaultIndex,
    };
    dispatch(openModal({ modalType: ModalType.image, modalProps: modalProps }));
  };

  return (
    <Card sx={{ boxShadow: 0 }}>
      <CardContent sx={{ padding: 0, display: "flex" }}>
        <Box>
          <Avatar alt={data.customer.name} src={data.customer.image} />
        </Box>
        <Box sx={{ margin: "0 1rem", flex: 1 }}>
          <Box sx={{ width: "100%", color: "var(--text-grey)" }}>
            <Typography sx={{ fontSize: "0.75rem" }}>
              {data.customer.name}
            </Typography>
            <Rating name="read-only" size="small" value={5} readOnly />
            <Box
              sx={{
                display: "flex",
                flexDirection: !isMobile ? "row" : "column",
              }}
            >
              <Typography sx={{ fontSize: "0.75rem" }}>
                {data.createAt}
              </Typography>
              <Divider
                orientation="vertical"
                flexItem
                sx={{ margin: "0 0.25rem" }}
              />
              <Typography sx={{ fontSize: "0.75rem" }}>
                Phân loại hàng: {data.variant}
              </Typography>
            </Box>
            <Box sx={{ margin: "1rem 0", width: "100%" }}>
              <Typography sx={{ fontSize: "0.875rem" }}>
                {data.content}
              </Typography>
            </Box>
            {data.images.length > 0 && (
              <Grid container spacing={2}>
                {data.images.map((item, index) => (
                  <Grid item key={index}>
                    <ImageButton
                      url={item}
                      alt={"Feedback Image"}
                      onClick={() => handleShowImageModal(data.images, index)}
                      key={index}
                    />
                  </Grid>
                ))}
              </Grid>
            )}
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default Feedback;
