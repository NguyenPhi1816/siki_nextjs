"use client";
import { AppBar, Toolbar } from "@mui/material";
import React from "react";
import { useAppSelector } from "../../../lib/hooks";
import {
  selectIsMobileScreen,
  selectIsStatesInitialized,
} from "../../../lib/feartures/ui/uiSlice";
import MobileScreenNavbar from "./components/MobileScreenNavbar";
import LargeScreenNavbar from "./components/LargeScreenNavbar";
import LogoLinkNavbar from "./components/LogoLinkNavbar/LogoLinkNavbar";

interface ITopbar {
  onlyLogo?: boolean;
}

const Topbar: React.FC<ITopbar> = ({ onlyLogo = false }) => {
  const isMobileScreen: boolean = useAppSelector(selectIsMobileScreen);
  const isStatesInitialized: boolean = useAppSelector(
    selectIsStatesInitialized
  );
  return (
    <AppBar position="fixed">
      {isStatesInitialized && (
        <Toolbar variant="dense">
          {onlyLogo ? (
            <LogoLinkNavbar />
          ) : isMobileScreen ? (
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
