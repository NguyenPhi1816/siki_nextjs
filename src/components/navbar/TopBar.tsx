"use client";
import { AppBar, Toolbar } from "@mui/material";
import React from "react";
import { useAppSelector } from "../../../lib/hooks";
import {
  selectIsMobile,
  selectIsStatesInitialized,
} from "../../../lib/feartures/ui/uiSlice";
import MobileScreenNavbar from "./components/MobileScreenNavbar";
import LargeScreenNavbar from "./components/LargeScreenNavbar";
import LogoLinkNavbar from "./components/LogoLinkNavbar/LogoLinkNavbar";

interface ITopbar {
  onlyLogo?: boolean;
}

const Topbar: React.FC<ITopbar> = ({ onlyLogo = false }) => {
  const isMobile: boolean = useAppSelector(selectIsMobile);
  const isStatesInitialized: boolean = useAppSelector(
    selectIsStatesInitialized
  );
  return (
    <AppBar position="fixed">
      {isStatesInitialized && (
        <Toolbar variant="dense">
          {onlyLogo ? (
            <LogoLinkNavbar />
          ) : isMobile ? (
            <MobileScreenNavbar />
          ) : (
            <LargeScreenNavbar />
          )}
        </Toolbar>
      )}
    </AppBar>
  );
};

export default Topbar;
