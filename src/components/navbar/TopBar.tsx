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
    <AppBar position="fixed" sx={{ boxShadow: "none" }}>
      {isStatesInitialized && (
        <Toolbar variant="dense" sx={{ bgcolor: "var(--bg-white)" }}>
          {children}
        </Toolbar>
      )}
    </AppBar>
  );
};

export default Topbar;
