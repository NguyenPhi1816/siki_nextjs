import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import FooterCategory from "./FooterCategory";
import { useAppSelector } from "../../../lib/hooks";
import {
  selectIsMobile,
  selectIsStatesInitialized,
} from "../../../lib/feartures/ui/uiSlice";
import LogoLink, { LogoColor, LogoSize } from "../links/LogoLink";
import FooterLink from "./FooterLink";
import { Facebook, Instagram, LinkedIn, Twitter } from "@mui/icons-material";
import { ICategory } from "@/types/types";

interface IFooter {
  data: ICategory[];
}

const Footer: React.FC<IFooter> = ({ data }) => {
  const isMobile = useAppSelector(selectIsMobile);
  const isStatesInitialized = useAppSelector(selectIsStatesInitialized);

  return (
    isStatesInitialized &&
    !isMobile && (
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
        {data && (
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
                <FooterCategory data={data[0]} />
                <FooterCategory data={data[1]} />
                <FooterCategory data={data[2]} />
                <FooterCategory data={data[3]} />
                <FooterCategory data={data[4]} />
              </Grid>
              <Grid item xs={1}>
                <FooterCategory data={data[5]} />
                <FooterCategory data={data[6]} />
                <FooterCategory data={data[7]} />
                <FooterCategory data={data[8]} />
                <FooterCategory data={data[9]} />
                <FooterCategory data={data[10]} />
              </Grid>
              <Grid item xs={1}>
                <FooterCategory data={data[11]} />
                <FooterCategory data={data[12]} />
                <FooterCategory data={data[13]} />
                <FooterCategory data={data[14]} />
                <FooterCategory data={data[15]} />
                <FooterCategory data={data[16]} />
              </Grid>
              <Grid item xs={1}>
                <FooterCategory data={data[17]} />
                <FooterCategory data={data[18]} />
                <FooterCategory data={data[19]} />
                <FooterCategory data={data[20]} />
                <FooterCategory data={data[21]} />
              </Grid>
              <Grid item xs={1}>
                <FooterCategory data={data[22]} />
                <FooterCategory data={data[23]} />
                <FooterCategory data={data[24]} />
                <FooterCategory data={data[25]} />
              </Grid>
            </Grid>
          </>
        )}
      </Box>
    )
  );
};

export default Footer;
