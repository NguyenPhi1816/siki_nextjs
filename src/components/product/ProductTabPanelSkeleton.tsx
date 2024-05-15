"use client";
import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { SxProps } from "@mui/system";
import { useAppSelector } from "../../../lib/hooks";
import { Grid, Skeleton } from "@mui/material";
import ProductItemSkeleton from "./ProductItemSkeleton";
import { selectIsStatesInitialized } from "../../../lib/feartures/ui/uiSlice";

const CustomLabelSkeleton = () => {
  return (
    <Box
      sx={{
        width: "16.6%",
        padding: "12px 16px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Skeleton variant="rectangular" width={"2rem"} height={"2rem"} />
      <Skeleton width={"4rem"} />
    </Box>
  );
};

interface IProductTabPanelSkeleton {
  sx?: SxProps;
}

const ProductTabPanelSkeleton: React.FC<IProductTabPanelSkeleton> = ({
  sx,
}) => {
  const isAppLoaded = useAppSelector(selectIsStatesInitialized);

  return (
    isAppLoaded && (
      <Box
        padding={2}
        sx={{
          ...sx,
          width: "100%",
          bgcolor: "var(--bg-white)",
          borderRadius: 1,
        }}
      >
        <Skeleton width={"40%"} />
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={0}
            variant="scrollable"
            aria-label="basic tabs example"
            sx={{
              "& .Mui-selected": {
                backgroundColor: "var(--bg-secondary-pink-opacity-20)",
              },
            }}
          >
            {new Array(6).fill(0).map((item, i) => (
              <CustomLabelSkeleton key={i} />
            ))}
          </Tabs>
        </Box>
        <Grid
          container
          spacing={2}
          paddingTop={"0.5rem"}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {new Array(25).fill(0).map((item, i) => (
            <Grid item xs={2} key={i}>
              <ProductItemSkeleton key={i} />
            </Grid>
          ))}
        </Grid>
      </Box>
    )
  );
};

export default ProductTabPanelSkeleton;
