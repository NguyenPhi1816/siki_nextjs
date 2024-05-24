"use client";
import * as React from "react";
import Drawer from "@mui/material/Drawer";

import { createPortal } from "react-dom";
import { Box, SxProps } from "@mui/material";

interface ICustomDrawer {
  open: boolean;
  setOpen: () => void;
  children: React.ReactNode;
  sx?: SxProps;
}

const CustomDrawer: React.FC<ICustomDrawer> = ({
  open,
  setOpen,
  children,
  sx = {},
}) => {
  const toggleDrawer = () => () => {
    setOpen();
  };

  const content = (
    <Drawer
      anchor="bottom"
      open={open}
      onClose={toggleDrawer()}
      sx={{ zIndex: "var(--drawer-z-index)", ...sx }}
    >
      <Box
        sx={{
          width: "100vw",
        }}
        role="presentation"
      >
        {children}
      </Box>
    </Drawer>
  );

  if (typeof window === "object") {
    return createPortal(content, document.body);
  }

  return null;
};

export default CustomDrawer;
