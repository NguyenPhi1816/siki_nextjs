"use client";
import * as React from "react";
import Drawer from "@mui/material/Drawer";

import { createPortal } from "react-dom";
import { Box, IconButton, Typography } from "@mui/material";
import DrawerList from "./DrawerList";
import { Clear } from "@mui/icons-material";

interface ICustomDrawer {
  open: boolean;
  setOpen: () => void;
}

const CustomDrawer: React.FC<ICustomDrawer> = ({ open, setOpen }) => {
  const toggleDrawer = () => () => {
    setOpen();
  };

  const content = (
    <Drawer anchor="bottom" open={open} onClose={toggleDrawer()}>
      <Box
        sx={{
          width: "100vw",
          height: "95vh",
          display: "flex",
          flexDirection: "column",
        }}
        role="presentation"
      >
        <Box
          sx={{
            position: "relative",
            width: "100%",
            height: "var(--top-bar-height)",
          }}
        >
          <Typography
            sx={{
              padding: "20px 0",
              width: "100%",
              height: "100%",
              textAlign: "center",
              fontSize: "1rem",
              fontWeight: 700,
            }}
            variant="h5"
          >
            Danh mục sản phẩm
          </Typography>
          <IconButton
            sx={{
              position: "absolute",
              right: "1rem",
              top: "50%",
              transform: "translateY(-50%)",
            }}
            onClick={toggleDrawer()}
          >
            <Clear />
          </IconButton>
        </Box>
        <Box
          sx={{
            paddingBottom: "var(--bottom-bar-height)",
            width: "100%",
            flex: 1,
            bgcolor: "var(--main-grey)",
            overflow: "hidden",
          }}
        >
          <DrawerList />
        </Box>
      </Box>
    </Drawer>
  );

  if (typeof window === "object") {
    return createPortal(content, document.body);
  }

  return null;
};

export default CustomDrawer;
