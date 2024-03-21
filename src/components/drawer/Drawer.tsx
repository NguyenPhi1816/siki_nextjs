"use client";
import * as React from "react";
import Drawer from "@mui/material/Drawer";

import { createPortal } from "react-dom";
import { Box } from "@mui/material";
import DrawerList from "./DrawerList";

interface ICustomDrawer {
  open: boolean;
  setOpen: () => void;
}

const CustomDrawer: React.FC<ICustomDrawer> = ({ open, setOpen }) => {
  const toggleDrawer = () => () => {
    setOpen();
  };

  const content = (
    <Drawer open={open} onClose={toggleDrawer()}>
      <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer()}>
        <DrawerList />
      </Box>
    </Drawer>
  );

  if (typeof window === "object") {
    return createPortal(content, document.body);
  }

  return null;
};

export default CustomDrawer;
