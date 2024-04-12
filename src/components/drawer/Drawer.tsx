"use client";
import * as React from "react";
import Drawer from "@mui/material/Drawer";

import { createPortal } from "react-dom";
import { Box } from "@mui/material";

interface ICustomDrawer {
  open: boolean;
  setOpen: () => void;
  children: React.ReactNode;
}

const CustomDrawer: React.FC<ICustomDrawer> = ({ open, setOpen, children }) => {
  const toggleDrawer = () => () => {
    setOpen();
  };

  const content = (
    <Drawer
      anchor="bottom"
      open={open}
      onClose={toggleDrawer()}
      sx={{ zIndex: "var(--drawer-z-index)" }}
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
