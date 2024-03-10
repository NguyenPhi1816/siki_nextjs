"use client";
import { useTheme } from "@mui/material/styles";
import { useEffect } from "react";
import { useAppDispatch } from "../../../lib/hooks";
import { setScreen } from "../../../lib/feartures/ui/uiSlice";
import { useMediaQuery } from "@mui/material";

const UIControl = () => {
  const dispatch = useAppDispatch();
  const mediaTheme = useTheme();
  const isMobileScreen = useMediaQuery(mediaTheme.breakpoints.down("sm"));
  useEffect(() => {
    const _setScreen = () => {
      dispatch(setScreen(isMobileScreen));
    };
    _setScreen();
  }, [isMobileScreen]);
  return <></>;
};

export default UIControl;
