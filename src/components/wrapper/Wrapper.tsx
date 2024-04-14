"use client";
import { Box, SxProps } from "@mui/material";
import { useAppSelector } from "../../../lib/hooks";
import { selectIsMobile } from "../../../lib/feartures/ui/uiSlice";

interface IWrapper {
  children: React.ReactNode;
  sx?: SxProps;
}

const Wrapper: React.FC<IWrapper> = ({ children, sx }) => {
  const isMobile = useAppSelector(selectIsMobile);
  return (
    <Box
      sx={{
        ...sx,
        paddingTop: "var(--top-bar-height)",
        paddingBottom: isMobile ? "var(--bottom-bar-height)" : 0,
        height: "100%",
        width: "100%",
      }}
    >
      {children}
    </Box>
  );
};

export default Wrapper;
