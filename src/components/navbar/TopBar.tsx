import { AppBar, Link, Toolbar, Typography } from "@mui/material";
import React from "react";

interface ITopbar {
  children: React.ReactNode;
}

const Topbar: React.FC<ITopbar> = ({ children }) => {
  return (
    <AppBar position="fixed">
      <Toolbar variant="dense">{children}</Toolbar>
    </AppBar>
  );
};

export default Topbar;
