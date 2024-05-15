"use client";
import { Box, Container, SxProps } from "@mui/material";
import { useAppSelector } from "../../../lib/hooks";
import { selectIsMobile } from "../../../lib/feartures/ui/uiSlice";

interface IWrapper {
  children: React.ReactNode;
  disableScroll?: boolean;
  sx?: SxProps;
}

const Wrapper: React.FC<IWrapper> = ({
  children,
  disableScroll = false,
  sx,
}) => {
  const isMobile = useAppSelector(selectIsMobile);
  return (
    <Box
      sx={{
        marginTop: "var(--top-bar-height)",
        paddingBottom: isMobile ? "var(--bottom-bar-height)" : 0,
        width: "100%",
        height: disableScroll ? "auto" : "calc(100% - var(--top-bar-height))",
        overflowY: disableScroll ? "visible" : "scroll",
        overflowX: "hidden",
      }}
    >
      <Container
        sx={{
          width: "100%",
          ...sx,
        }}
        maxWidth="lg"
      >
        {children}
      </Container>
    </Box>
  );
};

export default Wrapper;
