import { Box, Skeleton } from "@mui/material";
import React from "react";
import { useAppSelector } from "../../../lib/hooks";
import {
  selectIsMobile,
  selectIsStatesInitialized,
} from "../../../lib/feartures/ui/uiSlice";

const AdvertisementSkeleton = () => {
  const isAppLoaded = useAppSelector(selectIsStatesInitialized);
  const isMobile = useAppSelector(selectIsMobile);

  const CONTAINER_HEIGHT = isMobile ? "300px" : "340px";

  return (
    isAppLoaded && (
      <Box
        sx={{
          marginBottom: "1rem",
          padding: 2,
          width: "100%",
          height: CONTAINER_HEIGHT,
          display: "flex",
          bgcolor: "var(--bg-white)",
        }}
      >
        <Skeleton
          variant="rectangular"
          sx={{
            width: isMobile ? "100%" : "50%",
            height: "100%",
            borderRadius: 2,
          }}
        />
        {!isMobile && (
          <>
            <Box sx={{ width: "0.75rem", height: "100%" }}></Box>
            <Skeleton
              variant="rectangular"
              sx={{ width: "50%", height: "100%", borderRadius: 2 }}
            />
          </>
        )}
      </Box>
    )
  );
};

export default AdvertisementSkeleton;
