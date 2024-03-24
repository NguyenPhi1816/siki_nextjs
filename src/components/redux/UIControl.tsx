"use client";
import { useTheme } from "@mui/material/styles";
import { useEffect } from "react";
import { useAppDispatch } from "../../../lib/hooks";
import { useMediaQuery } from "@mui/material";
import {
  setDesktop,
  setMobile,
  setStatesInitialized,
  setTablet,
} from "../../../lib/feartures/ui/uiSlice";

const UIControl = () => {
  const dispatch = useAppDispatch();
  const mediaTheme = useTheme();
  const isMobile = useMediaQuery(mediaTheme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(mediaTheme.breakpoints.between("sm", "md"));
  const isDesktop = useMediaQuery(mediaTheme.breakpoints.up("lg"));

  useEffect(() => {
    const setScreen = () => {
      dispatch(setMobile(isMobile));
      dispatch(setTablet(isTablet));
      dispatch(setDesktop(isDesktop));
      dispatch(setStatesInitialized(true));
    };
    setScreen();
  }, [isMobile, isTablet, isDesktop, dispatch]);
  return <></>;
};

export default UIControl;
