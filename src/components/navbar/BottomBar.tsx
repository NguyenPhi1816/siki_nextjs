"use client";
import { Box } from "@mui/system";
import { useAppSelector } from "../../../lib/hooks";
import {
  selectIsMobile,
  selectIsStatesInitialized,
} from "../../../lib/feartures/ui/uiSlice";
import React from "react";

interface IBottomBar {
  children: React.ReactNode;
}

const BottomBar: React.FC<IBottomBar> = ({ children }) => {
  const isStatesInitialized = useAppSelector(selectIsStatesInitialized);
  const isMobile = useAppSelector(selectIsMobile);

  return (
    isStatesInitialized &&
    isMobile && (
      <Box
        sx={{
          width: "100%",
          position: "fixed",
          bottom: 0,
          left: 0,
          zIndex: "var(--navbar-z-index)",
        }}
      >
        {children}
      </Box>
    )
  );
};

export default BottomBar;
