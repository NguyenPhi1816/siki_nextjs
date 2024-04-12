"use client";
import { AppBar, Toolbar } from "@mui/material";
import React from "react";
import { useAppSelector } from "../../../lib/hooks";
import { selectIsStatesInitialized } from "../../../lib/feartures/ui/uiSlice";

interface ITopbar {
  children: React.ReactNode;
}

const Topbar: React.FC<ITopbar> = ({ children }) => {
  const isStatesInitialized: boolean = useAppSelector(
    selectIsStatesInitialized
  );
  return (
    <AppBar position="fixed">
      {isStatesInitialized && <Toolbar variant="dense">{children}</Toolbar>}
    </AppBar>
  );
};

export default Topbar;
