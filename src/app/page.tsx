"use client";
import { useTheme } from "@mui/material/styles";
import { useEffect } from "react";
import { useAppDispatch } from "../../lib/hooks";
import { setScreen } from "../../lib/feartures/ui/uiSlice";
import { useMediaQuery } from "@mui/material";

export default function Home() {
  const dispatch = useAppDispatch();

  const mediaTheme = useTheme();
  const isMobileScreen = useMediaQuery(mediaTheme.breakpoints.down("sm"));
  useEffect(() => {
    dispatch(setScreen(isMobileScreen));
  }, [isMobileScreen]);

  return <main></main>;
}
