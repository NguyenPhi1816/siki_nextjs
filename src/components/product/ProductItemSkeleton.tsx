import {
  Card,
  CardContent,
  CardMedia,
  Rating,
  Skeleton,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { IProduct } from "./products";

const ProductItemSkeleton = () => {
  return (
    <Card
      sx={{
        margin: "0.125rem 0",
        boxShadow: "0",
        border: "1px solid var(--main-grey)",
      }}
    >
      <Box sx={{ paddingTop: "80%", position: "relative" }}>
        <Skeleton
          variant="rectangular"
          sx={{
            width: "100%",
            height: "100%",
            position: "absolute",
            top: 0,
            left: 0,
          }}
        />
      </Box>
      <CardContent>
        <Skeleton />

        <Skeleton width="60%" />

        <Skeleton width="80%" />
      </CardContent>
    </Card>
  );
};

export default ProductItemSkeleton;
