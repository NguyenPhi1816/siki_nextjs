import Box from "@mui/material/Box";
import { Grid } from "@mui/material";
import React from "react";

interface IDrawerList {
  children: React.ReactNode;
}

const DrawerList: React.FC<IDrawerList> = ({ children }) => {
  return (
    <Box
      sx={{
        padding: "1rem",
        width: "100%",
        height: "100%",
        overflowY: "scroll",
        "::-webkit-scrollbar": {
          display: "none",
        },
      }}
    >
      <Grid container spacing={2}>
        {children}
      </Grid>
    </Box>
  );
};

export default DrawerList;
