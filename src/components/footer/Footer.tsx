import React, { FC, ReactElement } from "react";
import { Box, Grid, Typography } from "@mui/material";
import FooterCategory from "./FooterCategory";
import categoriesData from "./categoryData";
import { useAppSelector } from "../../../lib/hooks";
import { selectIsStatesInitialized } from "../../../lib/feartures/ui/uiSlice";

const Footer = () => {
  const isStatesInitialized = useAppSelector(selectIsStatesInitialized);

  return (
    isStatesInitialized && (
      <Box
        sx={{
          marginTop: "1rem",
          padding: "1rem",
          width: "100%",
          height: "auto",
          backgroundColor: "var(--white)",
        }}
      >
        <Typography
          variant="h4"
          fontWeight={700}
          fontSize={"1.125rem"}
          marginBottom={"0.75rem"}
        >
          Categories
        </Typography>
        <Grid container spacing={2} columns={5}>
          <Grid item xs={1}>
            <FooterCategory data={categoriesData[0]} />
            <FooterCategory data={categoriesData[1]} />
            <FooterCategory data={categoriesData[2]} />
            <FooterCategory data={categoriesData[3]} />
            <FooterCategory data={categoriesData[4]} />
          </Grid>
          <Grid item xs={1}>
            <FooterCategory data={categoriesData[5]} />
            <FooterCategory data={categoriesData[6]} />
            <FooterCategory data={categoriesData[7]} />
            <FooterCategory data={categoriesData[8]} />
            <FooterCategory data={categoriesData[9]} />
            <FooterCategory data={categoriesData[10]} />
          </Grid>
          <Grid item xs={1}>
            <FooterCategory data={categoriesData[11]} />
            <FooterCategory data={categoriesData[12]} />
            <FooterCategory data={categoriesData[13]} />
            <FooterCategory data={categoriesData[14]} />
            <FooterCategory data={categoriesData[15]} />
            <FooterCategory data={categoriesData[16]} />
          </Grid>
          <Grid item xs={1}>
            <FooterCategory data={categoriesData[17]} />
            <FooterCategory data={categoriesData[18]} />
            <FooterCategory data={categoriesData[19]} />
            <FooterCategory data={categoriesData[20]} />
            <FooterCategory data={categoriesData[21]} />
          </Grid>
          <Grid item xs={1}>
            <FooterCategory data={categoriesData[22]} />
            <FooterCategory data={categoriesData[23]} />
            <FooterCategory data={categoriesData[24]} />
            <FooterCategory data={categoriesData[25]} />
          </Grid>
        </Grid>
      </Box>
    )
  );
};

export default Footer;
