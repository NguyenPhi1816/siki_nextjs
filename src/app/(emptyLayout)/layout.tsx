import { Box } from "@mui/material";
import React from "react";

interface IEmptyLayout {
  children: React.ReactNode;
}

const EmptyLayout: React.FC<IEmptyLayout> = ({ children }) => {
  return (
    <Box
      component={"main"}
      sx={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      {children}
    </Box>
  );
};

export default EmptyLayout;
