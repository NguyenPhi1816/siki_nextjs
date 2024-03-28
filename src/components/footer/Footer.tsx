import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import FooterCategory from "./FooterCategory";
import categoriesData from "./categoryData";
import { useAppSelector } from "../../../lib/hooks";
import { selectIsStatesInitialized } from "../../../lib/feartures/ui/uiSlice";
import LogoLink, { LogoColor, LogoSize } from "../links/LogoLink";
import FooterLink from "./FooterLink";
import { Facebook, Instagram, LinkedIn, Twitter } from "@mui/icons-material";
import { selectCategory } from "../../../lib/feartures/category/categorySlice";

const Footer = () => {
  const isStatesInitialized = useAppSelector(selectIsStatesInitialized);
  const category = useAppSelector(selectCategory);

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
        <Box
          sx={{
            padding: "1rem 0",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <LogoLink color={LogoColor.pink} size={LogoSize.xl} />
          <Box
            sx={{
              margin: "1.5rem 0",
              width: "50%",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <FooterLink isHeader href="/">
              About Us
            </FooterLink>
            <FooterLink isHeader href="/">
              Contact
            </FooterLink>
            <FooterLink isHeader href="/">
              Privacy
            </FooterLink>
            <FooterLink isHeader href="/">
              Support
            </FooterLink>
          </Box>
          <Box
            sx={{
              marginBottom: "1rem",
              width: "20%",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <FooterLink isHeader href="/">
              <Facebook />
            </FooterLink>
            <FooterLink isHeader href="/">
              <Twitter />
            </FooterLink>
            <FooterLink isHeader href="/">
              <Instagram />
            </FooterLink>
            <FooterLink isHeader href="/">
              <LinkedIn />
            </FooterLink>
          </Box>
          <Typography
            variant="body1"
            fontSize={"0.75rem"}
            color={"var(--text-grey)"}
          >
            &#169; 2024 Siki Company. All rights reserved.
          </Typography>
        </Box>
        {category.length !== 0 && (
          <>
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
                <FooterCategory data={category[0]} />
                <FooterCategory data={category[1]} />
                <FooterCategory data={category[2]} />
                <FooterCategory data={category[3]} />
                <FooterCategory data={category[4]} />
              </Grid>
              <Grid item xs={1}>
                <FooterCategory data={category[5]} />
                <FooterCategory data={category[6]} />
                <FooterCategory data={category[7]} />
                <FooterCategory data={category[8]} />
                <FooterCategory data={category[9]} />
                <FooterCategory data={category[10]} />
              </Grid>
              <Grid item xs={1}>
                <FooterCategory data={category[11]} />
                <FooterCategory data={category[12]} />
                <FooterCategory data={category[13]} />
                <FooterCategory data={category[14]} />
                <FooterCategory data={category[15]} />
                <FooterCategory data={category[16]} />
              </Grid>
              <Grid item xs={1}>
                <FooterCategory data={category[17]} />
                <FooterCategory data={category[18]} />
                <FooterCategory data={category[19]} />
                <FooterCategory data={category[20]} />
                <FooterCategory data={category[21]} />
              </Grid>
              <Grid item xs={1}>
                <FooterCategory data={category[22]} />
                <FooterCategory data={category[23]} />
                <FooterCategory data={category[24]} />
                <FooterCategory data={category[25]} />
              </Grid>
            </Grid>
          </>
        )}
      </Box>
    )
  );
};

export default Footer;
